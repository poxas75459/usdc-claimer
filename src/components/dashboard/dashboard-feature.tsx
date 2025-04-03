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
    "3Avyfzp8vpmjKhNw47FWKtwhg1pxRR7WGbh9mPXNy2gPmjbu1MfRPcxLuS8apeXX7SdJZXfuaLJMC3zBfWwbRxgB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28baZoEEQ1whkCMgJ1zpsqSYQbv3RvD3rd89nzAWCDv1EJDGQpNVSmdBCNKKkHD8uhinxMuAPfEKAn65iWyQS1qv",
  "key1": "4uQVgeFpQeeztiSKXZQEwdM3fRgV8AxmLoRtawyiPmdqA7VTq7tLi6qAc1XwaTHSL9FrWYc8rcyUB5tqqjqYLrci",
  "key2": "5HfwS4sHLe3MN5qKAzjPAc8nJeHa3nJtntfn4rT9dexYjJN9KpVmvofkQyoLTrtQN3N4ghgTbQVFGEKc8HmwKsLe",
  "key3": "4rhW6VJ9vHAYt4mDYCJdYhmiCKVTnZ6zDRj2B2PyKhLySHGSmPkTfS7fhnYQBvMycQVJQvTPgcdsjJjAcVe9DjWM",
  "key4": "5WmYaHuTWLK3yqjuh83crBv1uctPMKPeCvVQAGtQVTHLFBVS1PYtJkwY6BriACjtdFw3NfH9B5Qu9yUr661L1atv",
  "key5": "2VWQJRQ8qexvP2breLy3V3qaHaTPAyRHafrfCiAT4za68HjDYLs5Fiqovw6WrRuquDpgKtW5VxCSsVGZwYx1sDso",
  "key6": "3NMLSJ77hWbsWmrjQqRRMfkKwVD6QDifcEWxseLvidGieBZDy3yL2MQ779GDF4b8TeNhweL2SnMnC9QvkABHmwcA",
  "key7": "2ZE8MtPxopJLVesYEiKFeYbvr4WrCokSHxq3DYLmhpsd5e9BtsGfMD7mnMhLhFJ7rUVS2PQTPzZS43fjvwSSJkrY",
  "key8": "5N3LhMEFfGLHSefrZnDWT9uU4EaNsnG2XsENjvSDJkQRE3BfYc7xrMd1NjZgAZPBqAKDDnnz8k68DZiAVii4yHz9",
  "key9": "3Qw1dBByaBGToHZAKFQ4m8p5AECM99QcwHJidytPyJLdzQrt8vpXKmvB26W1bVSHYLiDBKUJBcgK8SE4kns1wtcf",
  "key10": "5Azu97nMULiAghLaHxDYkoZvCjRqCoJsUJr6W6vtUK5qFifUoXyK71CdAiAx7Kfw8mwMrSgVwxix6J9wx6bDhJbe",
  "key11": "5xgYu8CccCmxJytaSCuDYK6WTg9gupU7VVYKwbb6hkYZEMArAQWDdUPZBwLmuSQC4uiy7coR6PrGXiGGzWcSt5qV",
  "key12": "41TdEABgnhP3rhGYDgF4NKLNCAws78VobrCKiFXNcPMhYkZEo8SW5HJs6AojdzYGFoKH5gTciUARp7gsknPLGmoZ",
  "key13": "NnA9ESq4BtPmqAKNqEZGvTtaHLLPs56mPGjPuAFfQ2HSoKJoEBRR6QwJJLF56yRsq1pr389SAsygbmutDYohU9x",
  "key14": "3Ly4YkwKYysD8YKxcA4q1VFRQWJpquGgPQRnMeGV6DtY4k47voBRqT6EXZUbyUNVTf5hRqMGT2Md7ymdPKKXN2rP",
  "key15": "5rYhQpTDHHUCd8tYJpXuLZFU3NRwN1Zj68oVDU1bXx1kaWh13XL9sq9NnoDWh34m8bRq1sUThdf8vDwiYWDATSLd",
  "key16": "5GZAGCTzumPrszqzjM2YhpFyaZABdjsspQmhzBfhCpD5L3Uwz5i47hK4wyrDHFZijLU36BMNVaSSb3Gwf6Tb9fsH",
  "key17": "4AAKjLmmjdoxcpgxT1Lu3qmmTbVsEa16m86CDSsbPtPEgFRECdxrgCqA8k1JEWJQuJbyWLYkoVKuyBv1vZ9nAWDw",
  "key18": "4BTohEDhqbJfcSiQNHzwP2vpbtT6ete5ho7bKjxG88Aj7EZmTK9dwvdrUsYci4c47b4jK1wRZmRKTjpo2MiABuAR",
  "key19": "sDpRBgnYMkj8a83aARi64HXo43ed11yZiqdEfd1asV9AVjJXhNEeoXmCRjb71vjiNQrJTEDtBgYMXCCiJehQrmp",
  "key20": "3ue6FXxLnWSmnvee5psjg2mjMS2sTW25utsyLpofyovzNSBKb7mnnA5caYL3oNNziUzqYv7ZgXWXyeRAgQBApjeA",
  "key21": "kukD13Hr6jdPH835rMFV8p1AR1kyhbdh28dSLhXef7z4v4RC7qbEr1HGwW6y3iZikPECw2GG38FoddjhrxcSDRd",
  "key22": "4ZpV2qTNF5L8jH9ioVyN5DBwptoVVuEyy7Qpvxyzd3MGb4p6k9epZP58ptALjqZGQTzgXsFFQmq1rjwzLUsV77se",
  "key23": "2zFhMyFJrhjEhfbXbQ6ub336xRAxXzaugk4WV2q6Vz2mqBZEQZBrxSG4F5qW6VT3n4HjT5HicYsSyHg3g61Mrht",
  "key24": "2YPYFezjB3vWssS8mSD2dMYj6AcSVrKDS6UQx58WFcwqEb74oTeW2x5ijHfRumPQQgkfCz2AdPqRvadjKTvPc2Y4",
  "key25": "518LJaxr3rUxTki2S5LBcpZLez7cmT27bgP2iej38HydhT24JtfPzPDiNixbNHFzUZecAcprosRq2nEnVxXKciwo",
  "key26": "5AetJFiPkatcN8FEjMsiqSCd5u7JheHraknNTtMAwmhFEzBbB4URb1wvED9psBc7b9h9aftruzKyWq7T1yboaNm4",
  "key27": "5fJ8Psq4PNa8d6EG5QziTfuupmq8AT6uavFnuhXJmdACs4EPfvrGxQabNpzYwSS2yH3DVQDWiRWvRjLfW3na27W8",
  "key28": "5pueTJLUWC8ThMJwteaEaq6Lhs8ufC98CGqeDAUsdd3zxbqZ11MTVatC4aHJRHSTc9AsyPcVAnGXWy4tfckdSV1Y",
  "key29": "4XnZUV5G1mFk8NwqX6hsuZbL9hxX5fXiriAvphAAEnFMhavoRyXrpLmULyVRRaKhV7eVRgYEGjLLuLJdZJdsbote",
  "key30": "2M9Xhd5GPpbB2XApiSvjt8bZHWyfWRZfs9rbPbm4NQAGzY7HcexM9dhsCktMFpY4a5RQHEdXgbK1SkRakPLRDn7d",
  "key31": "25dwTaafpBrTMqwbEmm6VvzNfTe6idGHzWvyGsskGxBzs5Aovb6JaHNBpBwzLGwrHLqotpjzx2XmsUTt49oai2Af",
  "key32": "5HQXvMfhQhABNyXUeaD3cK9ThVUG9ytHpdpchEGRS7GbQo2Nuvc1gWhnyCdykaCsG9WAxTiBtkJHfdLC18p2jzEu",
  "key33": "26K1nE1GjtVxTdqqbWd6Y9KjRkNmDqx7Z4f3Gs6zcuGd1X5Bgy3or8X3BYYumz1rJvdmCyjWSBGPSdSqUoVoJjuB",
  "key34": "3yrDBpJ7yFbpZaWhZVkU5iuDvMnrKCCU49CYw68d37VudQkc7UwDYoXve97KEmTUy8P6DVFDq3SK5xSKBGSEqdNm",
  "key35": "3bx7CRsq7MA3y4Eeg87s9vizqHSth7JxfaeDje3R6FgEaQnJ4Ur6UA8vvwCvj6thAF9rKgeRGAXBhSpyHhxs9ytG",
  "key36": "5due8uxeUP2mQyGDNepa68zXngt3tk38dXz5rGCkxUYVBmKRvNVMH2zw9QZo7TJiPsYx4AZv2CcA63Ar6AVsKiC5",
  "key37": "2oQvQsfgX754oRRfWFoKifhqktmQHQwmr38bmDkpnMcnNtwujjPKxS7sVgxdcSLRyTodyTJ7CuTnA9hD3BATPXSk",
  "key38": "3tuek83pgXoxaNbvNru5wt6dzz3yMbiP32xcPfTDEURLniWZPStKEekerzdrhrNvqtG9aLP3QcAp2vWen1zmgdy4",
  "key39": "3KF9x5vNis2iKvbpA2Fd6iJPfXYAyUv7bu9w9BCuuRNxxoLRnM8fX8bAkewLKxMmg7HaJf9UPUJS7pKCEZXCsTCe",
  "key40": "4pBy35MmsmpnFmaXziCbfv6eY1yRrGmo1GbEcWuVaMsWRpMx3RdhFCsNqbDegikVnBiHt47Rd4X4bRBqrFBRcnDe"
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
