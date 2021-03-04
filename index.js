/*
 * @Author: zyxm5
 * @Date: 2021-03-04 09:34:18
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-04 09:35:34
 * @Description: 
 */
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello world')
});

app.listen(port, () => {
    console.log(`listening port: ${port}`);
})