/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2AbEZKBUfim3h4hBG4CACsRBcKXQrMPDbsnhTf1K3ojyVb6M15LuDTn9ryhya4q4yBo5vcjHjoEiezsUrhpaY4W4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iQ4MX6ZqysjbisTomaJbv9P8pNYFApMaucrLj5anDV9Qmq7rmHJjTYFQRyioumPwjjMPbLkEfzRpn7NSsECy8EH",
  "key1": "35zs4VqZQvQdp3n3vqTKQu23oM4PsDidwC9XwrsN9mFgY89DmnXfLQCp3bAjVmRbetFM1YFjwG1cW4nxnhZXgJUE",
  "key2": "2YmM7AgYGjkxb955UUpAueF4Kf1ZebPpg5ewM5qaKYzAMdm35X5imnUUdVTsySekME8eiJ3mHVxju4giHQEhPdTZ",
  "key3": "5kZnRUUfnZaqEq5GXSH68kRXeZGQxNEc6TBHsxYCjwqbHkw1G9otJVJBZgcK8xKMMvbSpPKmmJmtMfqZ8H5hUDJM",
  "key4": "5HnqsHLfYJhBjVozgazLYZ4Z6eZgjshqEsopASvw9aQmDR1Y397XgkzRscH9P9jLAocxoQHD5JvJaRxnNF3mnjU4",
  "key5": "NMPySa2VBwfenSrMz4DaGcJkGxuM5TqWKWmcmxZ7yxNLt6FHjNajSnSgJiNiVv9Tw4bEN3LLKukxpFDnanWDZAW",
  "key6": "tq3buFtmNgrqm4cmNZGdZCCHYspzN6RkuGtMdE3gH6fkB83Co6iasnmENNWw7GXb8UDrtD1SxGgCJ62t7TwyyEu",
  "key7": "4mmaSJBvgg3Ewip5FWZSYm4yu483br3eJjKchoefgwwQPhwNW6QTdct1UspLkX83Cd17Gw9bKHpYNZFaphToCHoc",
  "key8": "3z6gPzgVaCxdTropgfbci2iRzvnRrH7E8keu4vk26yhMBhWiRG9Got4LvUvU3swjSMZLWk4wsXavGgzmdMYwUMJk",
  "key9": "2M499m12nF72XzYemjecaBVnPWzzFzX5LsP4wsMFwDjBVSPVfEP76pVQfTg7bNwwvjcQdP2VUZJaGAGLyx6dm5UG",
  "key10": "42Mzu7nAEQD3gsYKAVEq48vkUgQfgY2K8mR2rgibGwXFxcJ12RXd8H1v8Q5WuikXW2CmQqNExR2NjtwLKJDvEXin",
  "key11": "5sYxHY99bKnt32LPk5HMYp3ptH1GstAXyyPk5eLZiVGZHojfUCPaL6fmokf3CuPcFXinBinC12YXfLHc4hmXuHFg",
  "key12": "38Jah83pp8ULrQJF9u83wqq6uvAt8uwMetqofuffYHRFczA3ekSenSHnsjT79w68p47LbW8JVn6HW53tZ8Hog1it",
  "key13": "43HpqZVyWxjNjMTqVcE4fG7ADipd6duvHHYAdzNaRHqRjJhEdTGy1pzzF3AW7mzdFoV7tpMohZKRvkiK4pRy2CNq",
  "key14": "62yovq5E9J3gtg3Y3G2SLR8XBeFMgmPDTEx29eknXj42GvrZBh9kBNQHucTUMT5YAFuecbW93pBrugQ5dJKZ9XQe",
  "key15": "4A58m6xitCPZy4vNXvv3ybaurPFtPsomL8Skb1F27dGTZaPkGNq9wpZF3BTiEqSiME8KFxJaiu9zhTcxqHYqN3bj",
  "key16": "5YRvDAdozWwpYeEmQDFbmCjcgv6WNRy2ECVAnucRH4py3h5SNPmBPimBaTvguX2oVw4SS4KZNXodmhJui3aBPpxS",
  "key17": "2V6BMga2pRVL47KqU6bNCHgbAr1q3CTSZiZYt8c8ZR8ZoxxQsMiFhmJnCRcT84xiaH7s3zWuE3m38RrvHp3tGGQu",
  "key18": "6KHUmmRZyCppuR5i5cxU6aRXdDcJja2MDXnQt5Fx6z2eX6k7mqYxrepNcnNKRBdqTyPfsJTpUBbKFVGTAy4braA",
  "key19": "4wuwMof36jc9bfXjfg9yoQZEDwAkT7zPmybqGfxAqG5XGMM9iWmz1USmTJW2DC4t3hMf7WYTyGteqR8DSMPFPWM9",
  "key20": "4oK8ByRKt9w1KF37NzSPPexzLYvpbJnxGaTsyBGGGkasRTwL1s2va3T1wqQMW8uVatw2q2Rq4tHgnWX1baFnqka6",
  "key21": "5jX7QvYWcq7W4oWDpS9CGXoxGFcbKfU8E3Eyi2eXV9xq3F5z225ZQNek7idXmkKbeakYLfVEPDTkSY4BviiBCAzA",
  "key22": "27RkCQGdW2FbF3miZPeTeW5uPDuA6AtNRivLs4Ysus3uFbtRuqGTkPp7nH69keRafSxcQc1s1ESQ7vUjZbY2y8qV",
  "key23": "2PenpJzBTHqhzHprosmgjzxYwrDsjJpiR8hPXzBVPKRCJYT5HuEqNoc6264xDy9R3hwveqrwFRLaYfYLQWsnBtuM",
  "key24": "4DJ7SVyj4x856tcCaQ4qo99MXBT4jwnustNDFW81fBzdkrYFop2P1suqt73xkxkgRkXaZ9cDzPcqkMMe6VV91eKY",
  "key25": "4eF3nBmcbT9Jztux4QtzTC1Ej6GWPukm4kZNykQeDcxY8YLpDyTwdzAUzLQy47pLfPGcmeuXs9y141EMbXnzwKXv",
  "key26": "38nbrsMYqFwWtM2EmrDP6M6rNfMfGr2JrGwGNhtjZGytUzqheGipuQY148QmFLxsv2ZtApahjFU9qN5TBktDLJD5",
  "key27": "4Bi7ZH3gDYDGaDdatLGByqvgN7HNVBAkFw8SSjbpmBWhUCzPQG7bLw6VpdgvmbjU6HsWaTQaHuLvHkzwqSPM26Nc",
  "key28": "5TLwW3BwAQerpQDbdihjUX9DvFFqs2f8ny5NTkX2m8gqTR4cmT1DaTZ86GHpR4RNR2zVMJ1gG5yd9kbNsnYWNLnK",
  "key29": "3DRnponsZxiJfKhTeyfpX7AtBd48dKXexG5yLLKJ7KPJNzkZHHMFNci3VLYjtYEaM69BQnZW8dQj7R3PrnK4e35E",
  "key30": "3V7B3CAfsJspiBFY52xYF5df9xdZsjkBB3E28qU8Rk44xx2Xd53S8aP9s2413W1fhuTmfWpSQp92jV32Z4Nn465w",
  "key31": "4Gj3TLTzNomn2kQfr65cnvbydTXHbzZ6sxBhgP6FgA2JbJ5nJRY8xpdziroQ389qK7mmWC4fEwjxaXAjncGkAQyA",
  "key32": "eLrTKoSZuSQaFCdYo9W2WCjyZmkqrLpkkj718h2vCRyH7TCCi55MAsouobPjMscWXF9jbsNV2hHehjBRSAeX2z1",
  "key33": "5x79NdrMwJfzjraWZwnqA3H3TJKVV8xGn58AFPt7hK6Lti7qA1TMqCJ4VNFgaxRe81oKVKwCz7NvirnbfB66g85P",
  "key34": "w2jT8JsuNi1cwUWhy3UjWckvxvNkCVePNhQ3MiBWsAEfXfRMY5zURcjPkmaFDSKHqYzJieSyYzw9WWQHqzZqCtH",
  "key35": "39nSLpNQgn5XAKcZ9CoHCqndXppTdXp9inpUzhurQqjfiBBTfTobdNFfPXGP75DeNxhZmmjeoVrTPRyv2riDLTXe",
  "key36": "F3qeUhMqNG8BhWLTzMfkQXBggKDJCjPaTZwYXKQwAJWSUQGM5oZF8eYdH1SDJjM7QBhYiQusuffUj5tNkfrTPrc",
  "key37": "3ASMpm5d61Fn75yYqtMrzaiuirTC2JSGqsGHLb14cXqvyepn2TQQPw4YtE9s66psAGB5WV2hPSmp82MyZHbH77jy",
  "key38": "3pyyTzkTryQDpNQyqHsnXdDrV3pZTrBct5oxuL1ftw6pSJiBZjfHgB1yf1BZWJxgYvaja9hRV3THWupPLiwX45Li",
  "key39": "4TY2DCpHYxJTNvhUTJVuekwEz2yrfeGeySQAjaZvTvbyLZRAHj9WQnz8GctP3dfAkg7zhC9QJRpzPaTGmzQzFFty",
  "key40": "XntkHkW8nH2izkKNvcKSTW3EPgPd1wjRGmuX2h76e9WFmZbP7rssu5c3k29UDvTX92SdDSLNo2H5zKYSzkTaNUW",
  "key41": "2UpCwdGMEynmRWGboipX5eBy8cE2Qf8BED9aGncVGi8DAniAHhfFZi7NC9uEDseexW5oyfjQaGNSTAxC9a5aCkHJ",
  "key42": "2imrm4x4m5A2HHswjA1JHazHN9ZJkcq7oFQRAuV8xULMu9ZWbMdvL1Z9ZhwKtvqRg148R2uc9LyybneVwpCVMbmn",
  "key43": "3qv6JunVuBzemmkk6iXNyyUmMcoPTWEiSxpTkLTd6Kof2tARNZGUKg958thRHskSe6eGh7m8hQQuwpfVLCFdjWaB",
  "key44": "5691SAx2VRzePeCiS5inLQu4yaZoD4UAwp6ThTjNfuK1RxGRSRFhHaTWsi8DFh9g7gSULfHdQEDuc7qYqvSUmpKL",
  "key45": "492vEXtBUxzN1zV93MtmM4NaFJiKdoZsAD6Y874ueFf6bsAcyfwm9njzV1f1x9K8S8JAtYQRqFSXpzBqHk7o1wXm",
  "key46": "29nL6zV9aHeBTDxK8XaGyJTXQe7g39iFMLsD51MQaZ34FU7YM2z5m6tJdy7czVFCssX4C5om4t75SSHSGuRChjKC",
  "key47": "4cgMB58BinnP46xLR3AvEhyaCrEbco2jpzEL6YoTQ5bSg6eyE5YHL1eivFQ8bmDmi6BBiArqUWFpnyCR1c5eQQnh"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
