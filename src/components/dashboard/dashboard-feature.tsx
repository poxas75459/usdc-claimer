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
    "2Y8Dzu7FL7JKe8QAG9JMbBL9iH9YaMjpmkrCXYZ2ckVgVhcppEKK3JoZW2UddP2PUhsHvu6TBVmpQJ9ux8goRC3y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2syBWNwb42vhyBPCjoj3zSPRWCK3sGNN5LR8QsVaWhFvqLF612NcEJjzMabUM2zm91egyhy6aVMgaScKDYz8kYJ1",
  "key1": "43yUfLZLqqfZu64gguQkQDgbmrXkuv6ap7TSsLu913HfQMU3Po4S86PJHPtYss682VWJ41X9ou6W1ZHTen1gPSye",
  "key2": "3tXvquEYvveEQHbUMtZuJszaT95JnwsQcPSXxasRHesp6BjZHxSwSN3edquzy4GR6Zks1aAi6jnGitbd9MB6FKqt",
  "key3": "4Cm6T2XipLAE9VnRNLkKmnEEQ1qAtcN5cj9wAWqyWjwgi2dTjcnikuqXL44s3AEnfBvfyYHtYpd4v2XmQ9S5WKEE",
  "key4": "2FJB8c4r7zn1aDp2c32EqfSSJ5ihu66eEgLahHAEnAmQsGNYXuo2Jx3xsFGwn8voaZSCWdBkh2AwhfJQgvkKfour",
  "key5": "57KqFe74PdwowCdt5YfWEigSPVUo3kpxhzF5KJ2dVPqVZoHJ6U7sozeeU2ToGbSy9Bcg7qehyTPGBULrPTEyiKj3",
  "key6": "5EjnYvuJHwftWNeBV56FJ4RtrfmZWND4QFCuhs6PYHKcaVfuuJv3gSPgFyeHK5Zrdgcj2XKTTKmcwbPQWr8X77XG",
  "key7": "5B5Go5eapxHZ67hkEM58i6niTEdnwMEN28BhwmcdVxTQasAphL6HAKqu6wVcqr2yPS2ipbq2pWhe38CeCrNGSEZW",
  "key8": "4SrGXvNY9ttc3PWKdsR3Qcmu9Dci5HbWTXFXsELEtb78nMxoxrVfeYjP7xm2Jwd4qGr4AZby8VBMV4fV5VsFre4j",
  "key9": "4sLi3eTdeDW4CKf8R2R7Ps38a3HL68QqgsrW3ioZEUmf248rXj2pKHP1L5ucwFHgwHcQzu2my1xwD4hNAjrnifFp",
  "key10": "5zaRLgT2oCk1h4gVSMJd5AYaQkcVzoBYXQtZE6uiDgbpDUxJ3YXjVowKosTzRL9Sp9GqPhF2RFbzCX4ubMW9GC9s",
  "key11": "5pmiqZ4UAQFfgBjuhfWZdTrctzLZJeWWjH9ZKRk67UPtuhSCRvtaDJsH9o7c38t7W54GULW9eo3tLBFPs3LfMn2Z",
  "key12": "7WCrWfH45VVh83hV2FHmqjUQUEm1U8imVdU8bwo3dHyhYoZkARavJk5NNttGZXjbBEeYRYshPUCLKVMxGn9sBzG",
  "key13": "4YCWsraKVzPpttzq7aAYxD94zCUCXqPNrjF6W9TMpgCr5k6ypiVYJ2zNsnx5XbX6swb2amkAWijW6ctvFqKZbrBF",
  "key14": "3auKC8C6VSD8876HgetRJ6uUtfAkeRrXA7YoKqD3GGxBXWghJuyGQFDHRw4gyEMLjHt7JbiY1HZDQuL6HTZDCXtc",
  "key15": "21Drs9mcp57KKpBJJsTogr2uwVVh98FfMFx7EZczdS2ary85EZLXR8qAWaBpUVqPSRYdSMpaZWRAFnfSZu58AoCq",
  "key16": "4muaXRNFu5SuYUUn6GnUYzhVvUVJ1nbP1pDx2tmUoKaEfTicU885854hGZEpVtMeCbqKaZ9dfiPuS9BLtfEc5RJE",
  "key17": "iQhc8rJjUhhCixxXZJi7mTqUdydMnCpDUom7BKf734PKAuPhXat7qeCmrzT7YcAvXZmypYXVtRudtyrue4TK4nS",
  "key18": "5ABiD6z81PSduRi5zBTj2SWKDrWeAigWxpaXi2W9XkfeKCMaSef9G6JMGpCkw9LhBpokrZwma5c7Q6LpciNkF4fN",
  "key19": "2vxh5LBVKysq4h4yimEm2MZUHaWC56aXzxtAJs3qnXZj4VYJfe4b3fACsqpe8wphDrycfYVM6e9AtgDtxHwes5w",
  "key20": "2aCWuSiYCb94TsnNzWAejdAQcBQx9Aogvt5Yk1SpgLpXzPcwndR75ww2cDYtZtJ5ZHvMd3CwxHQER2YvnNYDAmei",
  "key21": "5VeYULFcLCw3fvYuDjpWy7V7LiVt9QiSd6EPhukuUD6vj8WVXKUhEt6yopt8ZkWeqHj8KVLoy3dtpwfbxzmvhZfY",
  "key22": "5iUGuzcfE9XHV29e3yPhjT9SCbr3g18wBGVbVUSP92THbBAEEquWExbBkgVV9q1Jb2puXPC1dCLEvnFvxWnMcEAu",
  "key23": "x77j33uGqg4zR2HbZ3PXnBmTgCuVtiwzqxNFQ3h3GpBoa4ZdrqM7yzJUxtaeNKRC8FnQ9yLLVZ5ysZ5a9Xgbugs",
  "key24": "3w8DXSsqKENiHmhjwJB6Dtw2oiFxngPni2JhgjUHr6aHrzqgzb5Fb47EstAjteCc79m3GAESuwHtKwS7W9jDcCUi",
  "key25": "58LDsVQzJGq1ZG2v2yyAxYUs8XYK5dbqb9UHqSQbiipwuuAbeRShv7TLGnVpXXqgjv6bjo8ntjA539FC3Ye5AvN9",
  "key26": "okDGSkcUFcjL7J5yeRPS4iQvztpWCribxk9afnRtFtHK719SPqChgtf4n7sNkre1YANCsL8KqJrwxyW4id3GDNb",
  "key27": "5BBu3fGuwt6B9ryYSouRHCbsRc46K21t29bmpndQHRdtxA6iWnVssjkY3yuG6ZzegFv2ouW2ivoqsHBPdbNLfmJV",
  "key28": "vTJUFi1zJtMEHASrDftSYSKTQQ5H6whNq7ecJWMJD2uFUP4gSzdh59hnYtZiif3Za2VwAmoLj4UfLxUBXVycYub",
  "key29": "5AQvq9nZNFrNVpFPNbpcv1nHnWmLwfcerTd6rdAUGSm1JAggELjKQjdrQVzEAnxGAQohFLxPn9HZ8q732584ngTf",
  "key30": "2LRf6Q2PfbmAQn6bUunNK3Cj5z5USku64T65k3SmczfVH5HqyZeCER17iEoSD6abxUgs8y6FPbG7SDpC1p3gqSqv",
  "key31": "5Y1PLRLrCRnRktJ33TdUiRvA2jPreRpWCyaTFQcxyBgvjfqonnWRWWXzmf9qqgg4rLeL3m1Mpm2r2SBKzXZxCpe6",
  "key32": "5yNxeAYbiMKZ5LvXMipe7GmcVvXypiLZYLdozNddntfwN8hqYozcJh5WrBXx6iCtbVkstS7yeJjbuRN4AJ7ZbfRe",
  "key33": "4snF9QDQXhUEXqN1CwxRSH6YaE2T5UkXtT8wnSE2VzzLHZjRX6GyfJJY5Ew6PFNx8aJ5EkArwcFYh7UDcbG1dTqv",
  "key34": "41aRAUaJQEDEbdY3kN5p1LGMVgQSM7TVzGFP6yPQoiJf2LJXBTGFUWqkU2DxZ6ZvwENds8STLetaH4ZtBnNugbdM",
  "key35": "2JUU3oSxkz1vttVwrF66tAah3QHgjRFWx6C9UTf7Njv6g3JZYLnxy5god1NT1y1qvXyzD7461WYeUsKdhuxHekVT"
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
