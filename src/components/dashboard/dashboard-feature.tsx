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
    "43cu73jVvLUSobHFVxjv7RGiZAY6A9keVjgNjwt51WkaCgGpbdhbQMkWV8eMUk6vzMFoK7pABRpgga9WdjJSYW16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gXPoE8V2vScL7n3rQge4wyLkZC5JaQ15s9CBE5cGdG1edCY9Ufq18D328frnGNEk6c7JdmmiPshdf3LbtrCfM1s",
  "key1": "46bNoQY2Ef2GmTqy41D42gLzrZEwmtdV3qX74gsxdKv5kUyrH5aMXFLuFw32CkmyNCyMQiTJryxSNAK2ZGnAv2UV",
  "key2": "2T2qL1bmYhdp1J6iUcAWzJkHBwezuvN1CKfwUkGgH6RnXwgm4C7zVj7VFpyzFBFQsoKGJ2kUw7g8uBCkLETm5Cde",
  "key3": "2cWRyNfmRV1SmJ8wZjKnZPdxLzqNB1vKuGPiQRW1a89MCzmAq95cNgEWQYgRPs8xoKFq9kJb6nuN74K39JMHRBqF",
  "key4": "37yQ6wJm1V8w9MYG3RJbH6mxKo8AtMrK9NjUe4ej2LLhXGUrUHpdzVE3ZfGvSezvJF1b1DJ4Xa1PVPgANNqdYoaT",
  "key5": "5Rmhiyd47cB7Fv9F7t2EkqXNM17bDkRzJa1ELjrFkfzbb6WR3cLvt1uRk7VzKye49KMJ5PX8ikbwC8EZ7Sk4vtYY",
  "key6": "52xfhzUq7xq3QzjvJhMTz4je8954wbJNhpMRaaXRz3UEy6VH1rvq9F4CmpxFurFpkWSWtNyzFc95pUtd8YWTdqoV",
  "key7": "hH7s78eMUaQT21RQ43Yc14vAYGqTfiX1D8Egqa5Ngn8zaKLExr8mkynMXyG2MDmdBEUokFStvUJXxUgN8Lxt7Jd",
  "key8": "2Rc8MadiAdUJDP5XJfQ2Shthh7USUxb4y7hw6tKgGcjBoNiN3yEHh1uux4mZFiXZMYpEp51Hx3DRVJ9B56TqFPgN",
  "key9": "3qn5ZWiYHHkzdSD45THQX6ecFtNFG4qW7RysDMj3PgpDUk1Yix7aZvtUBtWxGLM4W396hQz2yuZYLrGhGGefCR87",
  "key10": "5ZCbzMpRX2FJ2LJLhSbCzGbCXMUHPo1LjQ96KjuXxpT7BsLuPAXxH8SJKV5eG9ExXZpPTeeu1MxTduHsXBz88Bzd",
  "key11": "3ErYPbToFCmFrkYdFu7oom6ibHaBnirCF9fTibhHtK8vfqEFn8pA6LvxqjRoNxaDod5p83Src7bMndyTwpmipPm",
  "key12": "3KkM9Zbc8Ab9RaQCvZfMpmeKpfcn9ga7UK5rZs7QVTXENpQaqVG2DwVaaucfXXgpn4rdcAyK3JHSV1aEX6eEAvZR",
  "key13": "3sBdLYcemcL85RLmF58EQvUbSWZDfbMSvtQdHjn5SPy7H6ZUiQbrZGB2gq3J9ELcTCVtrEbHW6iVoihSrjVruYRT",
  "key14": "2KHofjEhq96rGoMJ968SzWjy1NmmESqPGbSTQDC9zQf8mJkURYdAZTWEZsBNNVJxVinQFyeCTTMHBkssaijYiYjn",
  "key15": "EoRgrDJ3H7zhqM2wkhc1kiidAWMpCAgDPJshy3hzxZ2WLKDa4De2ugBmVaMfJ8oTCQftA5Nh7YiQtucgsEGKSwy",
  "key16": "3jBvy5Ke53qLLHNPCDqhLq6oTWM26EN7XN6eMuiRhPeJwYXYhG4vDcNio3w6NNb4wEk6cKcxv5PRZkjmeAMZGDCp",
  "key17": "3L4mbT5owBEjsPNqfttcWFf1YpWXgApgRdodDUzLCxUaGmfYX6wWpngJdfEp7fE8wTAC9Z93DujNrHTdh81epDQ7",
  "key18": "5y4LiY77HKJnkTxo2DmAzHnLp8XZJLZt94Hpv9Tgz8KZ2uQs4zbL2pxWUJ1SNWzbD2y19AbL16MVfipSZZH8LFEn",
  "key19": "3FiZQK1XGNY3feRrTfsULM24EPnJbyem2jSBdvQcsLHSkvfs4vCyvJ5hoKF4cW5GhHzFWkxxdqQ9iZzUPZ6nS5km",
  "key20": "544sh39zgB5U1pqPTu6gSPTpvDeGMTQh5FgyFM86ncqsF4A5BG2txF2BTwxG7tK88SF1rocHyT8p9xxq4DF34RUW",
  "key21": "5dcWCEanYwPo4nPBdQzjWwMuyAY37ABT33htZ5HdKqtZtpcKxo9n1L93SckybDSm8hkELAyT9M1suQDKzd7VPLVF",
  "key22": "4HNhR3NDgeEP345hSk1Cg2F9Yq8Xpew1VTf6iNxrmPCKkMX6JTEoF4LLRK2riozo2GTP3NBXcxbEE16nj4UicJc9",
  "key23": "5niQWPX26vASMhACzCUEuqdTfwabxn4mFRdxoGPfSvwgLPLJB4zUb9FU7XqQ84ZMqXRyDGwBfkb3SqSyHiJHiQ5p",
  "key24": "5hkjQSnpkrGUGtQgob5TeT7mrJNWYGpEhFDP4Geva2jBi8pDv1PQNZVqipchjze3jMpgqW2xnU9KDAJzRfLpTcTB",
  "key25": "363yCoi3oSzGkG6HEkTSCxit6evHjfsqTfjPJwiSbe5LvJpMHm5TppKQBgXvamVV6kwknkyt6eT9Tbf8avMerjiY",
  "key26": "3E9wQQxfvdki8HunQWfeiJSqgSZFUFS5oSPVAPEFKcGtAWjNsZ7onFNPbCRiAAQ83hWmLemj6pmG7GZZ2wwEkHfj",
  "key27": "YzLmLyx5SVSxY1ccK447gKS1JtbqvGkt8XFxr2tAUqdMxNStbH3BNBdG4TQyAvQdkBk7csnkzrEyJo1y6twfYEf",
  "key28": "5sNDqpF9kfiGXanpi6EeohU4y7T8Jzxsd4V1Qe87eXtACvaLD16Ke7L74Fz9iiW5aGkw96XHHPzi2nK8WbZ1a3zg",
  "key29": "2dMGMwAMjzU6D7n7DhnjVoEunzqHDA2mieXLXZALS5yVhDgcXV2gQ7RaSJgD8pRpoky2np8BLiaHWnL54YZrtbVQ",
  "key30": "2rLZXZDVzXG2o9CpMQaUAVJ8AxaJr7fqFQ39LC9Qr1KT7Lwhiy5kG3VuBS1jaJEgEuWGPM9LmzKLFCj5aHVRkMMb",
  "key31": "5LHv6t8Yw5AR5ra4RZhcu6vpiML7E1LBrQJjaToRjn1mp2qLCLT3uSRsXYd3fywWxN4HG8nJkNYquTqjKMrUxjSN",
  "key32": "5zVgMwQXjiGbTj8Eu5PV4CbwQi2C66szUAmLxDHNtXob1xXkm21CYtk5kz385AJPg4W5unk12sQd4h4tfHgqZiG4",
  "key33": "5PLbRbHDgJeX82aMkKnV5fE2L5AnbkWZCeWy98kc5F79nejCoiK3jWo3r3UhYKpc1JWTyV9MEj4bPTYxRKgdF5km",
  "key34": "38JX4m7hQxnnvgvH4rD3H51Lz4LLhp8pct28Cc7TNbgkwW5v7Akgr86UpeZdftnQWG3DygJ9TvDWQA9E97AR5aBi",
  "key35": "531BX4g7Mrg4NLqeB7DWKp6mVD7hmvxfpZ14WHz7o5bQm3yj32vUh3cFD9JZcobAsnnrRNsggbzgbjGxaHrifwhV",
  "key36": "4zThxb9aE8Pfha4getNR2YAjCmUQrEP2ALMCFekJgiGgTKR7jfdHSs4aR4o1mLvCs25ZeN51LXbZS6Agcny3TUkV",
  "key37": "Ue5Pq72BuykBqTPaXNYcyHz96iG925y1rziqBt8FgVx41dFo8Lu61sUmdTRHM4vKDs5wYDakuWzVBBMKRHiJo85",
  "key38": "4BqguAohcLhnHzDyGPcsynGrbSDZ3L8ML9pogG4HCqN8ESuPVWUSpF1kci6z9u5TEDyMWNXRVD5YqWH5Lz1Scmxj",
  "key39": "4fZjS5RHcAK93UcxvGCTPuxHgDtx97StAipNDa1XS8vYY1M4FYERyZnqBNALkYrZ4otxNQrpEzB1sQwEDXxWpoPo"
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
