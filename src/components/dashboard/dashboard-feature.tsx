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
    "3MdeaYCKmUc9k3Rx8yCYDFS4N98pX7B8fwAk1RhMLX4vyh46Bo5kAf3Z87xqs7yknLAaG9JPC7if163V1GzfZ848"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ArfvttuDZGzei1ZR1rccoSWESgpjJTu5H6aAz43v7cUo7DpatXrJLU7tSHRdPD2PSHEn8CekPxvFrPhkVCwRT17",
  "key1": "QX8FAvHybtvBVHU91uQs5npSC8ig3YQuWF9TYV88QL1grb43K9Ldy9AyscrDAAWuEwydyJticXXtcvQQ23fpNcb",
  "key2": "4j8j7bKsNFGzydVkTgwZdDMVbpBY5YVsGqtggREGmY2G61BZoEnRpKcxZFFwX81jNkSmyHWfe7LFKR1VUCnCaJkk",
  "key3": "2qf8MYkBVM7hKCKE7ozBSkMEaXbc4CNN9sJL17AtWCnRCH5PJLDprhZKjb3nxF4UZqfNd4MSsUW5FrfpHEk7Pnsm",
  "key4": "3HBUCY3PYBpz6kJrbRoPcRmieDcEApjumBJRa9itr2TE6mTJJuw8GXizFEodr7ESkVoXWESYnpEFouwobYhuG394",
  "key5": "4jwVjxgTY3ZVs1sKsyiLEE98xCgfubR9wtGYV3CZh9jbAkKbdxBCmv5weMqDFESHy96iYzCor3eNHJBazvQ58J8o",
  "key6": "5iG4joFjS9tkrbTYPH47jQ385ncb4BwvPqiYthPmixJnsDrJGRzwWXW3eE8aurP7ZV8La1UZAZdL5tP2BbneXuR9",
  "key7": "4EvZvKNU9eSU6SDq6sVnrp5RomJkJMBygTkTS1kzB6yy4ffsccnw4AU32PFbNuuo6RQujHPWtHFJJBdLwmArkNzn",
  "key8": "52cmmAjrucuLQ4ha8ABWZA5zBn8fXTbvHTaeQ6L2J39pJLuosQ5gTxpcap3gqnkPyHCztGJnJCzWrsWoiSdwik68",
  "key9": "3NomQkCryAy5M9DXRHqzCXA3hTQX3p8QAoKZ9WkuaejB8SLjpa5yMXeSsUXMvNGbeuTypLtqszcL3AK9FRkUgsWF",
  "key10": "3sAuMVizM3Thiuc7yrykjwYN7WLMF426gF9bu2paM3WM3S6xhyhuYvC5RMeRtEK9JGDyas4DTuu7zb75UmMB2cQR",
  "key11": "3CvVcNDzrDAawCX8kT5RXiYQ4quvRbZcfknYvZe62n824N29mf6FGQbpbNTDAviaqFgnDcg5nfbN9r5weYwUVybk",
  "key12": "2mXPVaiy6zfx61qFmDU6XqptkrjnBaDmTUmG1ijfRt6eNNoFhtbMt6YNFE2LX2wxHAUWtByo2Hh9VDANoeS2dh4Y",
  "key13": "4SAMcDGVTPNiv7VQp9RtV8NuGS6cVWJoy2ru53L5GFoWgoBd5iD217mzDuwyoeeWaLK543zzYDmbhZQwnsMUUUuc",
  "key14": "MU73DYSeg1rfrFyYThCtcYX5zySfUYi8Kef8ZrK4Wtdqb95Kv9j4suSUaLA4fZKw8XpAyHmLTWyqPgD2vmoUn9m",
  "key15": "WjP3kqJjSGyDxhfnMqkdJ5gpQoMSGxJ1hwzpXc2KgmmShPwtFceGq128b6yUKdMUaejTb9QNchppa4fgPsL9oxr",
  "key16": "UKnycgU1F5Gk2AzP8qFvt1x61z7LhmtnxLDCR5uDuLmjdZ5a2RWkn1MP2wFeSFCLAbKzcNbt7JxVUnDvY2L7yEN",
  "key17": "3xwVEQ2sN7U7nXzU3wDQbqGT7uc98UMtzRcWvqPoyzzobawHXT2Engid5GBk1Mt6xvAg3C9FfQ8WxrMWfyzaXhdH",
  "key18": "2GjU7wG7cBg8tMrBL7R2z6YR8yV2YMetfyai5eWRHrcHHQkmXPUWu62Hzo9cXiQWiW64yfARzRihaLeuid29bERW",
  "key19": "4YPit6c6MYsU9ZuMzPgVf3qoHekHeJG7uNcDYZNeukZYnAufQUmXHXKQU19rFFfTq7AEMYEgnkXZPnqnYzqR2KGY",
  "key20": "5yWZ5DyLBPYQYKkETHKDfsCv6NeLBk8zoNFoaA4cGShChLFtfv4FxqjfRt4fvAteZKFdE9dwjZi1bRuYgyfCiuLC",
  "key21": "TE8k8zAvvafM9qts4K4LVc6bjtECYbFDfVcN2LfHjms5CAfux1j5RFcNU87k2Ky1yiyKV9UuwyfyAJG53wFPuHv",
  "key22": "2VXBGTaK6itA1LaeoVwm3ypwbUb2ynb4hs8hbEUCgsDYGSBDt6JZut8wtNiVeMpkJVbNeuxGXkir4nT9B1tbRGLN",
  "key23": "3cMCvNMdPYGwY6qTrujghL3i8yVbKaGDZuA1jWQFoLejaauzP427f4QHkeG4mkgwgDBtxsNjGvBjSnjrC8ayYdCV",
  "key24": "2j3aLujAWbGEiGowFYcnatqr9TkeLyxTeLSmtt4oCYkviPxHCwhw9Z3jJqYqUmCbpLHzgk2SzgGTuQDayjsCJaQZ",
  "key25": "58XQAGiJT8UckXCs4CVTeypNx8msqWSntvRJWjurAms5g9V3e5JK29Yg2K2LK7jfnLBmwAFNXaCaZv8ggJdVUK52",
  "key26": "4NmCBk8H3Y7KwY4MvnviiYQaezu7FZESbNoRJpM3NuFhN7U9tybKp3enZz7r122puCChsD8TsumVkK6RBjnV62WS",
  "key27": "wJuxeR2RkpN6YAYk6X9TrSe477EPieaDN7dWdEEWm2XYMZ3QiFEFEvsTSqrkfvu8SLbYCk2K4fjM8PUa3ML6hiA",
  "key28": "3KKQ2EMv8vaxGLZCFimKEPFE2sxb8ux9TBNSL2BCtqX2ZnN7qacdfsioQJRHtWZro1JvYLYBL2PQuzQp4wyNUqcB",
  "key29": "eMGf74CZJytqwuh1XPWNakcZUcC854zmby1sZP5CVSuoUbKoQ45p1uxzppVSXKF98Hoex9MgCSseBidvJtA4Emh",
  "key30": "3UQUDwdmCJHbLFdDMUEMB1KL6jNtmAN4hdfCV3XV6A6XCtPDGHEpdqMEwdb4LU3CAMZQqHBpu2QLVokry4WnSitR",
  "key31": "35syNcxChkZp3Qh6zBR7uVLzQE6rYUq3tCD4ek7qz1y5pgN3GViknTZS635TK491e81eYWT5Y7ft8cjRtJkbsKLq"
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
