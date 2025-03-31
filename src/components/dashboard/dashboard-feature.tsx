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
    "23YWTGJ9Dqg2K44wJGtMi9Tzdz2LCwXJx8QCKnKXZDoCzbsGLrx7kiDMRddANmkfY9ZBzNgZDapiSBosqwahwvZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59xmWTwXwgRLmymA4gAJhRkyHKX1vsoGYuDUnK6LpFQDK2KbjrhvtBimJ2jXwfYNVDC491jM4QtYtpBXieAaYWYw",
  "key1": "54VuWtXMA3yDsEKmpgj8cRsX7YkF8ZQvtjbmosyUA6EZieraZPz3jrnq7L33WhshsVcv4t4ciN2Ru2pTzB2NjDBi",
  "key2": "5FoFXaB9yb9gpdgfEVwgWFZqMe4BcgcHwQB7kuYukMEP4xZWMHJqSqLUXcADaDgH7abVx29zJtGEchnhtVAMACzd",
  "key3": "28MWGTqY8eEknefCeGai572L2LtiT33qQ76EV3dkf1JY3qqZ5HcQw9xpciKwKvKMYUxcsBsWSWqXoSyyRjx36f5h",
  "key4": "5SVuCTpLVkCVLHdw4E35EEwU5JEjbfzBVUQuRbUN7N9G3g5gPCjMkjYEu47C8TgFu2CiDVQwqSSzxoxiw3bjUkhM",
  "key5": "2dCjMYrrDMatLuiQuEZrmXGv5KGEMJPKgPkfxzv76qmBVsZo6HEYowQRW5MZRY8RWDRmJktmwbZqb1HvD5Kz9qc6",
  "key6": "NHc9nJXtpRiRNA7cBhdyeSpaAt1wAHyLmHdMsNEhWxzZYmTsEogDpFGpuxH6wASaKCBB8Lg2Pmq6WtRM8tmTotz",
  "key7": "12EjCX4jvLQPGnPzyCJxuCx1YBiFUfvRFum4LyJu7JL8pFnKA1b1P2sZ1BVBfoVefM9R24vaQqTc5nvXPziumv7",
  "key8": "28nsbh6mLgua8Zf4T9LFie7RzJ9DYCx3DigxMB8dgZyF9CKi18DNop3LYEuAubhDVW3mvourJ6kaLuLQEgCBvNF2",
  "key9": "5ekLRGoUAVySzggWz3oPVBSFgRozb2WvYEviLFsBAieuT7k62MpkxFepunEENKuMA7CSURF7S6361hJkVKBKCJat",
  "key10": "4nREtxFK6fSHgvzxVD4NgFtbhSeuTqAGHPc9g2LUU9oNmGq4LwyX3j3YcbbjF9GZcCJybo5MFp8Z4dfUV5b1BfL7",
  "key11": "4kaPwQQddJapphQkLw5G79GFe3aKuqDqMdoGfFEzY3Vg1UHyRaJbtB3SkhiVC4kPK5vL6WvRurnpuJ9NBSztLeGh",
  "key12": "4powxUZ1mG8PswFPoHtuvpNrefvsFqKMbyvPaVCED656rX85WjufbTeS2qgwx3FgtEuxSVJ922737sB8BuJN6xkL",
  "key13": "XyLRq7xHR5qREXW3pJUprMspJmY18vVUrqY3VEXJaS5FUuHTd97uerpPxbKFSgFQCesBkw3eEfzLZJGu6ShCwsz",
  "key14": "oFe4EjiteHWsqPdh2U1raM8Yetdd9Nu63mKhGWhWMh6xafMihrpDgNetXzx8W1tiUdJEmXR9YyhXRk4cBzXbP5C",
  "key15": "2bA7eVCnKrpZ6E6mBnt5CLiAqmzezd2yicqvpM8R5gV58o8QEcouTxLNzUZmfvpudcgBV5NuaZRvtkzcpYC4jYRy",
  "key16": "5e3c2CHzN9n1Maksyo8epAEeHqW138xvraUNsi7qf9D41BAbtV1PkAjfR7xX6Dhr4sSLShwm3zvdt5wWZyb1fMC3",
  "key17": "5VcKmHAcJtJ5QoNpRr8eFWRuLJB8QEKitLLhUexyX3NZxSa34dTWzzak35efX4cDWe4EREFVy5pCwNf2QKBkvLTw",
  "key18": "4vaZJGef31UxVhoFLm9TPGSQpiHpXrppcA2GZbWWdW5sN2Emj8xLuQM3guqAGFTUvaP6yd3h2w8fPcp1uTsWDSpa",
  "key19": "4bH6FnDM271w5d2SgLE15nzkRwtvWxE55aZmHRQ9ina7rueqE7rAW1KG78kTmmYNUgBZTR2bbmCQAy5VdmJrPq2K",
  "key20": "65NhnpzgDuAEn3Pjpiv7k94Q9sNQgX9HruxqsXKsTLKb1SsrVHxb65viHtN3phNMZR8xZnEkkNFY4Q5LWcoYcT3Y",
  "key21": "3ZBe2RUvc9LFfVoEcH17xpU2N37kGgZN8iPmJFmhZRzkVhTju62ooiYeKzm2gWhBhri9JGo7qMzA34XUGdzNwFrL",
  "key22": "21JD7HHUdonTxnB12FT48ChxRQHC5UVsdiYV1UZsbh4X2fay4efGiwvXee7NoSzn68aeQjnoEaN6usKVoW6Koxwc",
  "key23": "3mr8Z172cKNheL48vhitrCFbTdcarffeHjc89AqJPbL7ZoMWomqJeTdYNTjwunzEDTProZ8Y61x7BeSGKRXHWHgz",
  "key24": "oRDcyLZHUZg96YWKpSm6yD7NnadMNGkL1M8XCLDKZ1ZyMjwWtzV8VjK4w8YwqCjGnRSJVcJfdAbktaYV6ckw9aT",
  "key25": "cJatDVokk9ZAJPHAz5KC9U5y2fuxQCx6M5qJLPEpKMr97j92DKaJjrGgY4QNEjnsMGrPWjGvX36udjDFLrzx93G",
  "key26": "2ec8Sh7nFTQ9qWdBH34YEfnFsR68j6VDioSVrYjnVgXw5KfkXVbH8LLMfde41dowUtpX89qh3GBNDXv5vbioua1J",
  "key27": "5j2A9gqBcxmcm39v8MgGCAbnynFCms1EprcdwhVAdsRdetg8nHn3u356jCWBXoHZyd87waArsYWM47psn21YMWmS",
  "key28": "3F6vr8TmT5YMcgwcdepcXUdpPhEkHJnsZZ1V7iwu9uA4o7TSAtBP35wUeBHe1iMgdo6AUkp3A1qsTSMvN4YTyJ4h"
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
