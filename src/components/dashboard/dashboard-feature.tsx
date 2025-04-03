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
    "aVUnJGGmR7CpqTED9kzNdFCLuvTaqYzbuuSfehnAtC3VWtBvc8SqtM92CbqdWguRKZWuFktKCWjhz8n8voMVrxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9NvPe1SnopP3faNAxmeHtVn8wBVUUZ2U4W9NLWnebiAi7EmBgX18kSpmCsd4hg6rqfPva5mnUQY6zQ16raAc1Ue",
  "key1": "4jZtmaPwj2RkSLhjRAMzSZTmw7k83ZpEazHDxvziv7PyKPbhYGWr8A9Gij3WmBVhkS45HnSjn6jZPUbxZ7kDPFmD",
  "key2": "2WdctgEZfXi5FooF32R8eTk4PRXhtQRV3NY8dUQGZjdztzWAn9Y5EYhG7Sxt71a6zFE1ouUzsbFPJZJFBzVu9NtR",
  "key3": "4nw39MiHV2y6YVPKAe9bRGDA39giD8LyquN1y4oY8fBEGNx7ueMxQ8XZcWonq5FRvXSodkWxib9KctqdYxqz4mUw",
  "key4": "3ZwxhoCeohD4rUheLBrDBUWmG2VDb6S3DiXhb9y6kv3c48ZtcdGimm2wg5vBCwuSHuiLfpuqLY7jUBt1jCBXTaNj",
  "key5": "5x9BPXkZCqHTcC52pLDn7hoyBgpL9eXQybLWPLcTpJk9QnfJxxDUox7uctXkn4qjCcZkZXxzprygfgPaDTmKpWou",
  "key6": "3JFCxdhebrXMQRuHvg142AbJoneAXjy3y1zQvhynfbH6PkDHhZW2VJWvHyEAuEynH5769stw1zJmewzk1TXgs9vB",
  "key7": "4heFxkT2c6s5QGXJARoz4jGDB28YY1DT8hv7KiY9mPPGfHr2zo2GbLcjcBNBajahRkgQWg5dqH93NxN7ekJqRUdC",
  "key8": "3dhcJZgh1dS8uWK75o6sXSKKLzjAWxaipqVKjwtYnigfokTVqrZhxcYxJnvXn3nUqsBWYnvmd6Afxw94PN1ai8oF",
  "key9": "38qARBKoe1nZNtMXyVTFmeG98gG4xvtatFpFbVhVg8HskCeNrVp4jFjgCsFJgKrjQWYEKFtfgrLue3uuoy9sniKp",
  "key10": "2ZVeLzz5SmsWrumy28DEMVYNgKk4tnMEtsqbK6SBXGxSdUDznjumthGDny572wtvh8Y2sskQam9sA4m3PgpdBGv8",
  "key11": "3a4TaFp1FwrzawHt1WaeVRLjNgPJ2Z8MZZE6ZjhPT4BGz3FNYi1XMUb2cH94vDJT2L82XFiyRTxCu2tPbutNPoYG",
  "key12": "5Zhie6Pdco9Ei4fTLSocD1UoHHtcxvHHZLS84QLLiRf5kaThkdvnVse1k6nvBufvyNcLeu2w695ggVjxKknr63cE",
  "key13": "352eKgtFbuJEGUBF7DFxTBH87THC1vCD57CWRKk4u6QkrBU6ZUVsZoCGnu1kELS9L1b3k7JzUawXyopCt2KZFhEu",
  "key14": "2TjAPsWmVbZHJokvwAAWmWRRnqtfCRYJGfkj4bk6CMY6iGiGvGHD5Zf3NySTsv6qfJqf1GTacz8hVxmoSbbwAddz",
  "key15": "2fS4bASodcMq68ADDE8M7JUmapHpRufv6uqbkBWKJN9d47sjdV8uw4C9t9b78sbsDUTXBG4As5snH4GoFMfehZsj",
  "key16": "4qVVhu1DcmrhTFEAudnPjpY9ohdWKC2J6UzAwgCVUbFVXn7j6vQZJQNRTjGtwkTGvkXDXNB6Tt6QZg2BWr7Pu41a",
  "key17": "iCpaSgBXyaJLxJALp8ptxxG2mwrXRzfAe894nkn7WDCVxkubMUxWnwvAG4y9NyAPBwKchMEkL2AJWRyMATAbj2f",
  "key18": "VtBHnPWceBuDwpZAR4va8juPEynp8YcnZ43cNoHmSoNYjvysVNgAbcXxrkx2g3v785aYmEpc6rpzCqj7ACaJcQF",
  "key19": "33JEQdvUCskGr5SAaVmrzRDPAoBDRj4gsBDY87wB6GnEbRNfd4Ws6ibe4J2P4czNkTHMM6xR7RcWayP2jhDseb2q",
  "key20": "3To2fDmPZtyzNKMuRetEWZQ1befQcE85ph5NhsXL5WgAkWbyG66qWzsQJTa3H9ArQcrsZgcUkHnBXjPfHtZ41fpa",
  "key21": "65Y7Rpi9qhRbaDSK9LPHx55En6Mkxdc1btnaCkpdkpPh7YeYVgbrUVXPLmwtF9TasE9QLe4NR8YYLi49jYPM6yEQ",
  "key22": "3oM2GGHHkTuYVvEokkMm4D5f8G6iPYNHQSDjuhQ9dwBsMtRMRBMtocg7VHDGNL6WNM6kzn4KywkRtogJLKjQ3Poq",
  "key23": "U1vAM3U9hKQ7RkcueTwtNSS9Q7M2guWT1dRoJ5Hc4iwoz7CwRjj12hJiDiAUdzbK73P7dypTDFGsqK23Dt1oo9A",
  "key24": "5nHmm6foWCtYoAa5RHTT6iWHm9ghAwSUCw6LB7b4hkbZCwc9GrgMSD6UanNnGZpYTLEhd5LWhG4nv7GBCKFmCv1e",
  "key25": "3SnYvCm4fMccx7R2Y1cTXNcN5ui64XwsCgWLT71vKmx5bX4fw2Vv1zyojtdaNVhkabokdNyJri4kpnUuuYJS4y1m",
  "key26": "2z5cxPCEtknyhes4MWg6kfuZCMSXEFrjLnxF42yg9yJuGHZND36oeLMEnL11B1Hj5cLxJoQ8vbqiNPwVfnjVPekS",
  "key27": "GkFfKWYxqwonU1GZCbiPF3LoJmNmZxAkD7t4LhzWPSGBQgtThGoAHJd939TRmg11oiBnqYB9ocuYe1ibF2t3bhc",
  "key28": "5tdK3fUC6sRgzdzocCU9Fa82N3dUDHWAGAXL2qbXFGcC49Pajc7oR91QVzEqvnKprPY4Wsd8qp6HakqQZZL9v6jN",
  "key29": "2vC1hxxP5aWypUUyjfWu4rZMWaDRtcuWcho27xGrRfHXV3mmTwPhtrd89KDX2kvnXmJFtidtG7kytHX4Fc5VyEEQ"
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
