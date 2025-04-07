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
    "3wpt8gCRuv7AYTysE3EEX1EnJvMXea6VBtpugbBYVmC4KqzJoXiPfffZcq7NUCwfXNmEj7rbj2Kc63ktZx5fcMXz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mcQ5bFg6REj9bwLfPC5WmZa3AbMbZTKGeckhSgvYfg7vcmH76bhE22e7X8zfqZ9NJrVABwayRWZbfPxA7cgJTCu",
  "key1": "kMHD7tUq6HKqCsCNPD64BKmPsCAQ5Jp3V5589uyALKS5QgJ2YMFtkU7y8k99G6FuZwgq4jwBcjRqu716Htz5Rd7",
  "key2": "3fRFhdvaabbweaW8K7pwE9A65zSSzhiMt5tm2YnrN4hHwe4D1zHMJNEj2MpRCYG6DRdgZCjrPbWwhmz5hnseQbuA",
  "key3": "2w1CQYV6NdoGjEbo9HEB2RNgTW7weKtgTQUAKfvkwe6Md8cdHkqiGV5ddreoCV8NnRdRjd55j6cXDKrc9GJZHhSq",
  "key4": "5uk35tFnuv8Qz1xBmvgseFGAUqbT6RbSigdjisJH751hCjSkdQXkwXWLWtT82cTdPmjpUTmMGu7yPkD6hbQqXRox",
  "key5": "4Lb1yTnUj9xyD6Wkz2PxUav1qSAHUK232XD2tdtgA2BxN8ouR8EaiXcyCwKofjrr81QF6AJENqtxhCoN675X4Bcx",
  "key6": "56NyMBRaHssauzwDc2mctgRcELxizfvGLtxJcphCHEVyPBEfSwgPYKZkKkU4Px12DmDstorDTxWFZUUB7JtrLAFs",
  "key7": "2oQQJGfRT7VcM7ve5KTWXMQEvP5W9r2wFWimnx7XFunJuiU5XWGHi2wCRJ1WG1Rhhfv6m3RV3xfbMJvhzjhyYvdM",
  "key8": "63XtdyDK6WeNEp9MxRyykmDy5zewXJZerwEoPQDv9U6h8NbVqFmhGcwFDSDJ776AdD8J84XUbRmPsXUVm7WYsYYe",
  "key9": "PgeovcrYbKqEjFHMZNSNxKVACaxwLYfRhNCGNz9wtNssbKDJft9wyqKBLWjQ8FF8aaG7X6Z7MpYRPcZCHfc9bRz",
  "key10": "3Rr5kap258MtSci4Yqwkjp6xE5QCweEHobYfzDZxBq1jpEa6Fgs1wPoEMoYcttzXMSk7jeiZ3cUbV18BApmNYTPo",
  "key11": "2Ek3xLp3rwGtX6twVJCYMuUcSjKGLfC6d1XS5GV344ifvsZVDFwoM4FDBkKUfA6Q4ubqUW4DVJPC9pr6s6ndxXnz",
  "key12": "2VxLiKszqQZbmA65LFdNiitNL4rDEEVDXtgFV3vfvWJKfJb2beXd6WxSoW3e8QdVtqAnbV1bCdaS5gFand6ACoPP",
  "key13": "5PMvGcUq7LE2xDJGrPnp7Pwx8m9AX4GR6iweY7jT7RyBg5NugT6fVfqNqhVXBAxuqGt6vYL2wfbHPnJR1jcNRcLu",
  "key14": "2Q7jf6Fsas4XBT5v6bskKaveKz73MxdgyZoqZHzzeZb8uLWBej7B7ayoohh2uUmJGKKH9Qhd3Ax6YcPbahrjTJVK",
  "key15": "soPYBexA24A769NnXqmTNbamW8ScADjhrEcNppnwoGgfT6EPZu5FGjxxdpM54NiatC4dFKDXdtBZJQHbBGRD8Fb",
  "key16": "ybnRYqR36JFU42MQkZxhyi1N1H9xarU1UoyVaCbyprHNK8PwkyCRqMiih3PvfNa851fW9EdrF8bLDAjq3rCXSG7",
  "key17": "2ZfmBMjgSbvLTJjXx6LGxggWmrJSnWGyaMe1eY2tbrmnZGjXwQjzBrZNqCRvakp2miYFj6BMVpKzA7XQFpMq6Gf1",
  "key18": "535AHU9Vvg6osU55iFHAZgRngQRrCBaQUTrSTzffrjgMPGfn7W6Do3AvvzeV1EaJTdnFBck9taLzDw8XaVyrk6Wk",
  "key19": "3Zza9coPDxAmRrLTtCYJuE3J9UMwbEiagYY5qjB8pVtMwCr4u1CHQNjAjoy3h1RcJMzALdu9iHfgmukZ6S8Rju2L",
  "key20": "36fL91U8zSX43oUBka4a5Qryut5LDTb2iocaL2eqhSUsPhRq67N2u15mX4MX751chdtAamtE4etAYmfyRRNC9rUs",
  "key21": "4fFpqkcnsXbToHRo9H3Fm4bzPgMdziDuHfwqjin3p32QT4DkeYtgkcryEWwsH1qTJ4GmHhSiJ4GCZogEVg7fvcG6",
  "key22": "38MUjZAHzbtHUSyZWYeX78QqtPCbkvbHfULGDWJcDEf6AEF5nKL7wZxp5mGj6GLi45Vo8RD6PJ1odkKU45w3WdEt",
  "key23": "5xY6H9PnMSde9myViT7cFe2Ghu2iWKLLmxfbf7eyFDeoPJpGiqHZRAfaUbUAMxKxL45ihXfwDs56KWMcuiXTT8Ds",
  "key24": "2cUJMZdhwsVsfTfZKVkT3U3TqnvHqX5TTJrwRNiXV6cinSa9CRJVpXv3gxvtD3YYm3Hvwj1d5L68ZWxMNpzpkYaq",
  "key25": "W5NBfg21ekNsbuu4YWxQgs2gqjcUe4XPLsj4KvgHeH57Fjm2d7GB72iHDms514ZbnszkRAWRatmT6pAVXEj22qW",
  "key26": "2i8ATPzqavA4XSheAZ1Xzckww8wxDeB7L2XZvyoUgaFbszAiDFY7VmTbvkuQCrwgMHyTwUdHpCCZ4RqHTRAHKFuT",
  "key27": "2NrKyBq79eQADyH65HZ1hSV5aSbZDTfCU73jJCsv5YEka2oNuoBVPNs7DqZXoQiHiQSEaR93Q3RVLQE2vJPMEYdh",
  "key28": "CuUDub8X23FoJuscrBTSB1nt37TfnWoHzYAqr2x3a12SevU8yKwWX7R7mATH1gAR2z1AsEVLFHyWvKRFy2tBRcM",
  "key29": "5DsuzzmytPQjK8DTadbgvQjg5Zaxi1bFj6oP1U6mYnSJNhF4QwTK9ko7FpMfbMZZx6PZjnNbT1mqDJSF8n6N6i61",
  "key30": "55rL35CXyNnQ1JS9557HzXBr2shibxWYqBV99yrZmFUPiYqBwg12drCqWhRqPrU5k3EtStj8dbRihYUQwhHBkRew",
  "key31": "4918VALDDGu8qQAvYNgisHZagxNa5wgqmPGXezTNYXDcT4TiN9So6cGiraW1i4aNhqNmHsVdN5Q7hFfGe3drFxtq",
  "key32": "2W9Tvc5CNmvQfJfuFFCgFdpVWCzhGBD38UZu3BCkjALJgxJPmgABZhf69nttCQrhvEG8urnenwoZgyap7a93Qxxf",
  "key33": "trncuhcnKyFc8BgpUpJJQtbrG9JXPVxWxA4SZBm4FYzVfFhp1hdf1Vuj66JJoqJjN3gqgXSF1zVeC8rzGK7XMqs",
  "key34": "4YRLbDaXfHaGBnyRTJ1zri7FnJLoLHhvMCmcQ4ULu96LGTr2MDkMrmdyxFMhiZTXXoqC2uYHj72r1smJAVapVKoK",
  "key35": "2Q1Dme1Jg8QnpUV5ohvdqgWdyHY2KKJQk2zbQoQxPK1o3v7iFT6hv1PQJFnVYauKTZA1P5znS65vxnXN5ZyVn8Cq"
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
