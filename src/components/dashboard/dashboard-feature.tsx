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
    "wS6dWt2NxuL1Mdk2UASMvKRr9Zoa1gpeMKUPxN7VY5bbdgPwkawArBNrXFNpZMKkGAeJJPX28Rdw2xiB3BggED5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2riGDCTFVPvTeUGhYpMrf2f4VX9Jn7HxrdQbee94ZmAxGTaRh5bTV7sr3VnkyJoBVXXsDyjFKPu5MFCGi3X6wqkh",
  "key1": "RATZRgyFZQM59paqpLVhRUyDPe1FVtWFwBDtsrMFCwmYdMP2CcBq8JVEEDnqgfcmqBV8MrotQuZtFzGe5gDSGbp",
  "key2": "W7yQ44dNu1iGNj1XWsqWNB5YEC5AbTzMGBxkh5eAXTUejGhAWcSaE2dBUSN3iSp31SKfWnwEsfUfZfxwG92tFF3",
  "key3": "LrAGVXugDP2zeuDrBVqSQ2DYyJ2zDjUFEcbvrALKNo2oAVyoemWReX9BRa2sBDPPqTiXZdVwzoXA68jof93RRZq",
  "key4": "4BnNu6QNWaDVp9shsvJPWt8ehrGfkkcHpgQvGTH9UrnKnXPf1FAU84gFCsfnrhy8EQ5iQo65i84q19rC52C4SQQq",
  "key5": "2AdU1c6knBZNybZpXhkASDTt3qEQzuyyvKF1f4nY73HuvAe41FyFJDvbzxirwfnhjrVu4ysNqXxQjtmTd7U576Rj",
  "key6": "4NFqDoVn4hhp9Jf16WEZ5mb1ToZ8U2MLRACKJndyYBH7U3sv6Q22kmSNW6heYnZL7HFVuNJQKAiKYP8fbXKdmycH",
  "key7": "2zvbQXEvwBf5ZApmDQsUPdtN6jtMY1U8sLp38mYoyd4sbWjgnHC6pKUXGZqrEfVkx5pJrrYBEaSve2h7munbywm8",
  "key8": "54eyJERs7n4LFj5FjmQJwskbsYYM7fAR6ideiu7oXnwVkpiurxHxka33syihKWosC73MQT9TNGzHegKNH38S9k7r",
  "key9": "5UauKs6PYwW3JWjCWURGRYtJYxerZE2jfBKeCuu1zgwE5qnQmu3if7ko5a8ZAYx1BxZV2r7r7a7qjSvnkadr7uMp",
  "key10": "4qXTNg5HmeJfLznMJXKwrG9KRHhNRg6pw1KqH48BXkk1e1drJMBKYUY3s1Gub3zsCFgWDP46egZnsZF5y9yfLnfk",
  "key11": "2QM5rxxhoibCYrPN89c5oSTXohhrNMaXwBMJYMtWSGL3huCUG2k4MgM6QFvgEXtcUK7FyoggmKG8ezDCFfLTxr8z",
  "key12": "4wooTg2jkKHCfYhTqSLpEWf6AyPEYiT5fRwTckwXgyrGV6s2n5ycgs9wGyQuf7EnLFAb2FmoqTXKhSqzNKCBrmr4",
  "key13": "5aq8SH4sMBh4FV8zVSkb7ZpHMqSYJQeC7Kyny3kyiZxsQ7iufb7e33v8sBTEBy5LohpiJub6pSf5fxo68TUBSGDF",
  "key14": "5Aiz29MPNmEgjzXcEcCpBBD3DbimqCRZ2osBtx5R2iVWuTX7CUBJYhfSE81ERGeshwYvXTipA89wGko4Gwou9Sxd",
  "key15": "ygxe4HMjxzdoGTJqN86ar9BQD73dK1YXQcQP27H6fdMtzMmBcj3uz1Msu7aTTjrtG6v4JLnng7PFcf7XNUah3uH",
  "key16": "5eQ3tdTjDsoMM1zUzZusL4AYy7uhg6xwgA2iHgfXKRULTdQZRNgFNLEqJYBUXuaxvJWpN6cZPtNn6SbWoyRAMUpR",
  "key17": "3AQE7TYkj1cVxMqXDxTVFrZUgiM5sfwkdfyfm4Pw5RtAiGKWbLNYoKmYWJ9eMwdm28E5XyPtr8BZ3r9SnQSzU2rQ",
  "key18": "3hZHspz6Cwx7nL5tEbH8ktmctFAVX6rZSePh3nfRERLxFB1n3i1HhC1bJm8FQmo9PPeVc8UWqt4roGv2BMag4qqv",
  "key19": "eXR5yvYMXeAsWhukUb711U1QJzds24D4LoRqgHvkbtPavM3X1owjJ9Xyb5WGJkqoXRiunmLEcVR75e41FQkq5Fm",
  "key20": "29rBcwxXudUnmYuCywJQsFwFtP7pb48jhYZVyVcxtPykwsgUoWXgRutrWMYxkSeWDyQKbpJvQf4pkZP1HwWzSZuB",
  "key21": "2my6B8nFALd5syWoWWkVm5rytRHDFi2PZHteLZj5K2qtgRM6YQxi1UcbqyS3P8UsKJFCXedYSW45MoSdphbhZSBe",
  "key22": "M5DFFbUsmsMqFWfsi6zCMkW6KcGgYYpGHHNAB1bfTRFgBy89MdaYuLX3ftigApCibvaHBmTuevQjzKAvLSBzDJT",
  "key23": "5Ydri93TS2Us6JcjRTJKMbMt3y1au96AfooC4yq76AgHkmxq2oRQ13kXTZkn4YXGc9EXz6SCwCaKwL2jgkusyahz",
  "key24": "2mEqtEw1hrYK6ss5mnxPdi5f3ig3yURfYsCVKEbevjczhPX4m8Smb7MydkRPt4Ti3VgKdUQsmwP73P19Yorg2k1Q",
  "key25": "Z1NMvZVtsauTvA43CYsUYgngTk1bG5eqGaRYmqZrYmjowSavZsz3fqN21oDVf2Tu4h7ztPtghf4uUuSFRvT1Rmf",
  "key26": "5J6XKAJd2v7WQ6hyvvMsmBne3KUxZgjSDm6dHEPFCv8n4qjJ4VFPSPD7E46ULyQKuhGT7BNF6om9DVWsmQwEHonq",
  "key27": "2y43kcXW8jmtPaDygjQ6iDduLTkTYHwAAGD7bd6siUWmoNK7QmzfLm1w4uCcd8Qngq2RMSx2ZzgxsjAkh7irzGfz",
  "key28": "2He6avhHqpWHamGzNiVqCwysVzY4LGscaft16x5ZeuUVCtecJe6QoJg6jEzQjt8hwQfd2142Yy8VAQdfgqDPqaLx",
  "key29": "2E27iH9c5P8qXV2j75VVbrysGjcV92etqhsbWaGfavTwZxLiC3GQwj53fSqq6Kc3JuoAd89E4BLFkTjbeBdWEHAF",
  "key30": "4TD4cDFgAam4xLCVSNzGSfqkq2YdUtTLpX2jKPGGtsEpLJ4vskMsc9bpgXcpTSquuCtRUjv9ihT9g8T2MAA1Fkta",
  "key31": "zN3Uc1ryQPbcVJF5ymUt7RnjA5tAMXsBkP22KqceMnLdniLHUpx9Fg6E4YAM3HduRbTtfyMgLNRBZdxYyM9EZxF",
  "key32": "4VSTNf4w6qc3RrfKfJxGtTV6r3PSD7WpphRNhu1eDBvAKfGzQpxP2hmuHHQp3yEadwZyRFiUamykwN5RLKn23Nzi",
  "key33": "4u8KzWa4uC7FPymnHDGwcsofCcJdUAQi6T9aLYh6nFJf4GcXNkHe6FpdVeezqAKWXmFPVHYPJ87ZNAzMWzLgbQhp",
  "key34": "3ZpiiE3BFxREZMkRiYakZ1mMxe7iTLVUK6J1qs88pE4qG6xG37zsy1CyQ22VDnVu2mHGumfrdxHDCSfU3rBHQ4oA"
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
