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
    "67mPZAov2r9NRw4gwDsMuCnMEGRPGB9LZAHQwbY2bQV936eT6AzkEQzQRok8KPNaNqAgzNxQLvsKVydUMTB9uL6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CTEZ8yqFXoM4Bg8deXmbDQqivjyGRGX9wHSqtQUVPXiKaZ2DNJFaofXhCkP7KERLQveQ7KXnJSKZEFGvjaaDFzk",
  "key1": "3r5baCZUPSBJM8mZyEnkawL42HwgbfHVrc8SBzwPRDktkeB2XgFvkwATyGw94bYDUkvuYweqNkWYiAGbErPGgvj6",
  "key2": "2TobqFMCwKNUebPWcNgCVwydPJxXxyBgejvTePmjdL6KkJqDXXfHVALzBVpL4f63ZYUUwQxXbt8FqHgZkdAkTviv",
  "key3": "4XPnrr2DWrjMNf1VD4fkiwxo2acCf1xc3H6UG3uZ2Dgd6AsCArJFVo6mpaudKvLJ5Gqj5cpj8aaT7tYJaE7KeAUi",
  "key4": "TrNBDmqUVit9M42XevcZwbaxD8U22SaCdimjsAdtSTGqSossYSB2AZwJJfWBr7ivP9rDgZuHY3avHpo3qkyuiry",
  "key5": "3uT3bE72JFVTihdD8acY2oMkKxEheUsPbpDQcho4vafnftQK59UGhezDZsQNfwFEdE9kzF1HHfVh9B8fXXNBnNPT",
  "key6": "5S32wRKMJQg3ExonDCcG83j3yy8f3ArgugAG1nHkKy1S5BQpBfaknAzU3LgzhH62jRLdE8QNi1BdU5zQt9jfBPNy",
  "key7": "55vNXkWuHCWb8gs8Do2DN7ZrhmTYsXurrqUuNyC4Tzwe47Xuy4WAnjzJGp8GUbb2yNdBL62gs8dozWLN6baotKas",
  "key8": "5a1vwtWVdU6Zmsu55ycJc788ikUTwkE2xkEfpzKBjA5SzVWQHKvS3YbQud1rBVwmxEuazd8eSGUHwe5F6eAf79DJ",
  "key9": "J9Hk94LJF1CHq7GA8TipDjboFYMF5eEYVseh4NfAijxe7WHiN1TBUrU69oqARy4aLzNwNaZuyQe7TKJhNSPPQqN",
  "key10": "27oN5gYKzWeh1S3HPmdB61TxQE9yj3an8MKKSBU3xqzRw1MY6uFc8VmT4gUNJMzk38DL1GgqYT6cWSyo7LNkxEYZ",
  "key11": "2P6hudjmVqNgmJzLqB2KT1NARt1NrgDCKLRwbNnWRM2PtSLKvnj73uHQvvErAcuiLuHrpJNhdHRhyU97qY4WHCrC",
  "key12": "5AqXSfjKSHygUdfg7RmHucGWyoWcFiD4abzKGfqL7SZfSNsVqptu1a3LbpEWbMX8pCYFyahye2p5giJrnMwtqFjm",
  "key13": "4FsDvt9Xjv3daBuEuRBoksSZkqUVH7wQi4Wj1SYFD8Q1zPmtXQsoJ3jooWVL2ZkW7VBAdFabdjmypt9dARxRZNHq",
  "key14": "3iyToupaPcoCyotNZnfd71FHEBJk51thEq2tNxi5nRFamk7fRxx5Mj3q386jQkwpiB2Boqw6EgZe4CJpr6YTc7Hu",
  "key15": "9Je5Z3zbEtZeZbrMd6y525ecy2NoRJtAXiYmMMKotrcM3vHKW7bXcSuLhtfKTG3YucqhizzNqKHhEV9DtRqHque",
  "key16": "439fEDjGxZXpNEtaGQFdkFWSVM7MNYrwBGjg4X7a2yw5b3XNPTvvYkMfU3QqqVjuLH4Z9iAGwDKvD1YBFnmLXRan",
  "key17": "3YphqN8P9Hxbp2sY41eNoAcycC9a6269agGbs8ey2CB1Vb2sArwd4fckBQBxhGFhxR8drfRTbpaMvXgaEDz2YiP3",
  "key18": "jDh9RExtb1B6Ja3aMBXu3NZkBdBbjKCam9tfZcUvMv5ybyHK5NxfR7cHtCe7ChmXvA7zGvYUd2ygFySAQYTMi5u",
  "key19": "3LpcSYHZHDcDo9B9jiHWMKjMWRNEkaAhG2dMrLkSNpF2NhJKz97bfkNMmKvykBdBztwHeGBs7x5UdrRHYaat2e2Q",
  "key20": "2tCQ2btcFcr5xsAK7c465va2Vy1QGhCKy5inAahCUEuwKkkw4DjK7vdQ1msZo68i9pGASNWTkH3yiPuNoNGTfTHD",
  "key21": "5Sw8PA1mBuuGtT4GZVbhCbdAgFzEihAXpdKPHrXKQ7TXqV95sjMzxAdUUnAnJ8EvnDRHHNtEiQ9xZQSuVQVifC2n",
  "key22": "3g2kB922vycET3QB3MaCr4kyrwMLNJWbVQ4Ht2S4xWiPkFAy94NvyQKwyzFbnoNgDTg9eWzSmS4jfcrdpeZecnue",
  "key23": "67G7pp6x7qeMYDWKd8TCUDWRUA7tSMfXqqQvTmVKxB6oxhKyWRbgLGrJuN1s4Z7VM1iJsBLezQoy2htxn89i7nNf",
  "key24": "92xfj1ApWTFmdSsjHbtS2X3hVabsk4eCt1t9QuivLvcq8SkVkZ5TqjLJk49eTjD1SxpkkkQYFEZKeRKJvNxtFfR",
  "key25": "rYYAf6r9qkEdKiyEi1Es5UsByujAf1ztm3N6AdzJ16X2dVGya4tQsd5usZPVucX9g99S4Rr9VSF5Ka7EMSigrmZ",
  "key26": "4zR7P3gd3PthXRb2UrPran4GtcWkFwZQSSfdydX8uNox9ipR2gywAePN3j9TMQ5ne3njHhJDkFhytDiDrFkQEF6P",
  "key27": "2vH29Q5NijyhMcf7iPc1N8qzB2ETTeQZ6cCbbdjGpifYDhpRgpF3qgGN5YNoZfMH633MKiSDTBPP9p9a3SwEHibz",
  "key28": "2LdFzZpUmbKmcF1VqJYWjCGRY1P9qKc1fs8JDofLBkQm25Aum9M2gBctgdE1nWVZabqRu1XxRVnSwJeK8C3oJoCo",
  "key29": "3i4XQuQsPT19XFa2RCrruyLQSxVUpAGybioXfgAQAap54meSfDHU1as43F4zYW9LYdWVCCAeevVR4TgfB5r4Z3Yp",
  "key30": "HTzS6khphbVk2yThdejCm4RYS1vr4iLTEhNxF3AhWCj143WN5ZG5DSrzXJmZAQmw5mZJyMNM5qz8xZb4BmxLZ67",
  "key31": "3dR6kjue4xeupSCBRshyuemsDYT7NTYZHqeMxiWKgctQ6m9or6GRYNzYzgiNCNMBtxpYEdk6ZPHY1WHZpLicsenm",
  "key32": "4Yo6CJJJpsUcYoFgjETN7X7HucHMVKtc8RvjYYSCpiP1CyMCHbhjC711YuStjien53LXfWrEDjpAJToA9FYNyDTL",
  "key33": "3WiFasxBHNZhRJqqnnUV3wnpbRhGTi6CbWbW5zb4Fa6P1ALDCQUcrad6n68QndGZjxMMdBYLR7HVd36bod5Y7mXw",
  "key34": "mLDxYDWAAU1ZDtJyg6B9TnPkhHLn9t8cEprSKj62RwCSd3HwpFy2JG3XHTC2aPNAKePjRxtqguDMRGgo4zG5KTX",
  "key35": "2BwAcYorV5dLytcq7dsHdSHMGoUUXqNg9daJHfBniV2WpHWhAs3DFWHf26FPWvsGJuyPk27BtQhxTM3b2w3jA8L9",
  "key36": "3SXT8G6Tz1TvsZJ2So4MNV41PUfW62ePKiGQw6jsJCGpFFioTKEogTSe5wmf1xHH1R3NNfAmnkxK9ApikYBrDeDb",
  "key37": "3AYWruc3PettiNh3cSaGnaErCwijvepZKVQwpQAzDvQahjGBp3gGhwMca3Pe624HLycduTdxbJpgwByc99mx5UzK",
  "key38": "42DesmwszkTKk6MLyLE7pdHxK19yfSxXVTSJr3xF7biwX5aTNGnRcoAV6JPEfocw23si4zsjdvt8SAp7TtinnjrA",
  "key39": "5HYnC1yZ1MRfp2KF9Jxdtth5k6E1z5feG3uV1UPd1PgZuJBiYLXkxj2UuTmTZ5ALEnmtkmEMHVs5cxDgizUG3nrL",
  "key40": "5CkCyHQumaPqiv3xH8v7FX5KsLi4SgoREy7r9wH9XAgjFR7Cb79TYD6YqaDVg3TYk1LpeLNxL3r5EFshNhdATyFH",
  "key41": "2ze4WeJ6yZuACBaqnHvErC6CHEPbE5s1Wxv5i4bUpsgsFs1MehDZ6q664hBrdkfjoVXcUyQvBvjyicAXcSiV4GFM"
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
