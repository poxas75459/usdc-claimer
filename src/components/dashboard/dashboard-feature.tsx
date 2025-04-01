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
    "2jNPZJsy9z4knAQKnqNvuRud7DuWQo2bBwTaRL5aM88LuKGX2mA67gGR5qo5aygYVxmPQNjsamuWNH7SB5hCQhnj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ux6FFb6Z9F8fc3KvSpJDwSuMkmTY5VvfGhFKW3oeSGvSGTWobMpYtguAPLoS65WGEtwzgkPmHbSWNWijPshP36a",
  "key1": "3k62jBp4u6TmA4b3gGHrBH5ZHJvNTEjHFs6hunRmmXwaycNVSdKZNnquapMryA3Widie2rAnWR1MNjBh5qe6d2aX",
  "key2": "mTxpEWwDQPYTDUckvZkZdcMpQvzLEG3TZoVapNpjtaHCRLYgnBBgQC5MA2svzmPsR5Yfj9bgZVp3sY1gG5xmG2L",
  "key3": "2xRWarkG9MoGGQYBTbS8P9Q1MMKKa6E4Zr37nkB58yBiu7qNji4gwuunGCEUGkyjfBpZvyj1pfhgRXerpJiLKbJX",
  "key4": "2f6E1k5KM12bE47Hm95R2AtekLjK6uKYPg49uT1hju7qMUk15mjfNgiiDFhNrePJkmJgZRXwpsEdAgRo2cGp99Yr",
  "key5": "4RYT98DykENRFxZXrZhMdP7ws7ej1wPTfiuGEcCB72UkMoD6ZGEcXQgvP8T7wLF7VacYGr9e3GSiBAju9ytF1h8x",
  "key6": "5DXtMp6ZLTUmjKxpMSLjG8v1JcR3T6CVLRq3zxytZ5QDJYz3bs788acp43rWFyGrYV43fVUCz2C7nvasyFqkzutm",
  "key7": "4eVbDh5t6UNhAP9g6NoxCQwQFNqnDF9sVfAMQKKs78c9sj9dLxpuFZkABstqcK8G8LfwT6SKbmrBSsf2ULdhGuPT",
  "key8": "4Jsv6SunVqydXHrtnvzSdWSW1vm3epHUSyKhaGQSzSUCQCvK4VjTZr321Ji2jiPHujaPoyMeNTg5XkTUd98U86pN",
  "key9": "57F2FwXASkBmNB4NxfZDNjbDM9RGDpgk8s4rioRxcbE86Atccat8kpQvUB2YRjPcfNyadbjgqv8PvQSSBNWc3e4h",
  "key10": "4JDGXWKWLLHsjoV7KnFKDno9PWwVsukBQbSMxEGp5zYbLESFpekza1JDStccJjdgciDPiVFFC1EX1ZvPtwCGDtxv",
  "key11": "2Umhi1LeUHwsHEvvwGvzWBijKkQCAnhbKbLqTDejwcrmf8jxVPKd8wLUNfwUDTeoT2nYcK9hj7HVT3kYyb3LuGty",
  "key12": "4CHAYk3SpMJVeKyeKtSaXbEoo7ZtXNqq8WMgP6TBaPrtUzSX3gAsGxfxHbaQUWBn6eX73HtfD7DJrRKbpRWyZaz6",
  "key13": "bJ3bEQtdNRRqfoAUowSPESpsNCW9zep35Ab9C2CCgscPLTtZkbWXKzzw6hrUDVtMGnoLpCrdP8dZPRDjmTS52Vv",
  "key14": "yiogi133we4zvPMwSdiyTT1bvETKKJXthMeQ6wjwYRvW9qeiF7UBzKpsvcWwnXWzgBhLtS4bkw78sf3TZqCh5Qj",
  "key15": "657y8EoAh6Cv9tk2hVBieo7Qbghor4NWwRUe9frABNhKAQouKiJew1Lykbbcsigb1CFmvpFLHUMhGpA8wHFcsbBQ",
  "key16": "3E7zmdk1X4XCDovHonor8akHky9AY5mkhUdboUXxQeHSuLvALziE9snmki52bQQ3TPq6BYHyviHXQU9ue3uTXXVZ",
  "key17": "39E1ETVJDZvoBC1eia9tZZgxd67aW4z3vAAmF1erZkh4v6GpCi9LZwU8wpjwtdAnFuCpJkHztEL1viXxybtw3BTC",
  "key18": "58uvG3WBEnAgzskxbec1C7A5osYpYNAva5V3Z5Eu5mebEtncXp6GndMZBrcq851MqUHcHZoFP5Kwqm527ZdxdeDZ",
  "key19": "BJNuiDHn5E5T5ZVcTkrxvih3MbUYYUPd1tu8XmcwgQmuMVjRFAkZB2nLhvRRyqrvx6ojYti5KVPbVVmb7V5ydoy",
  "key20": "41qb8hetkhJyJh87c1iK5hqZa33pX6muFfNVsGoGGhv8WLy81FBA4ZGEHUKLqrzL3nZtzcH6XYjhsuG6GtFkfjyd",
  "key21": "HLXa8jZ8ZgZd6K5veYvUYafoE1LVZLVqDGFyYjpuUt6Q4yGndMjataRNXEyM9qoiQ7dJmX23NQPMiPTCFKAAkhD",
  "key22": "3QWCGc6DN41we9SUz4vq78BL2GLayha5stitCZL9eBBSEW2WC6hnpLWKcfVWKvVP831SaMtdh4CaGcAh5V77ALE7",
  "key23": "5XjdT9LNcQQct2ewBkuVPJHBNCp8oDRfsLcxu92JQFHWbGwKG6cHVUY4jKt4FUQ9MjNox1D4oN1xDedz43AwYNd5",
  "key24": "vWsBufhSMvCbrtS6podPRE3BRKbMxJuWBcjgNW4ecbVWXkixDzHEiJXdgiiEzFNZrpddhceZDj8Ng9qnSvNim6D",
  "key25": "2eNJjuvNVxxzwPAx3xSzgi26sokzkJgSXC4UwxcmuSMDtmPM4u4LzcBisamJVd5QYofyuWv3BKtL9aso2ZifpzTr",
  "key26": "vxcc6LsnnSuFgTV6mcE7aAzmgBZGdDPHGFkqTLy9vaSKv9fm4KtYQP7DykqVf73VgW16yjNcTc7oS7bejKoogr7",
  "key27": "4w8MsNgdWwXanEzMghKkWfuXhEPiabudfZKch2naauShKidU5hPnLia2KCpZavYh1iLH7bqRfKrSPY72S6d5qgVT",
  "key28": "VxQJq49G6DnkKHPrcYwm2XehMtB5XDiG37DezBbeRCmTyEJ34aayZwp1JJgNL1qDdqDbJuErNwhXUeKU94CH8iK",
  "key29": "dge4zUtrWPuB7f1Tj5VS9EVNqRViu7o2u77KidZGJokFSupib2keFtiRm4FfW2tSPHAo9J5LstoZxJJehmTXgW5",
  "key30": "fne96E5vZCXQRZFTmTk68Q91hHukbXazCRyxwjhpz7FvK3kLzyGcgByWTLZgCti5fYx45HNEMQ4eP5VzMedRrKx",
  "key31": "22aZyRJh4PqdYsCCPvUPGdBZRGbhoV7oV7rTUzPvAk1yJ7n9uh33LCdQ3NR9sR1yBgNoda2hREVFzfCBRfoiXyPy",
  "key32": "yz2VsoEdHUY6BbyTaJSRGZieswBB5rH9nmPcQ9XRWPTfjG4GDMfK7cH3Qvn4wHWMUHephM1m4s1jD5iSKVNNtdV",
  "key33": "3ehd19q11X6yt5wYU67kkY9CU4HQown4wj8kPFNUXdufMftDCyjDjwVhnXaPbPakmUVHcx7JnqpLZ9jxNFLg3JrD",
  "key34": "2AM1dRW52WQt45ERQtVHPs4ZrewXGVKP2L6Fm7nokHzY8PYbizBLV1vTGb4zqRnWjzdNQTsnzpjj84rvEbT8zMeR",
  "key35": "29pZjsDPviFetzaAC45fAaAvSCr4pFyHhZL99p2bNjpd2H33yjupRj1AHyRmgyLCobZwC771hiQg42mvnxrvGSuT",
  "key36": "eEHvf5ckQAXfeDBqhA7LFU7yHwHPF7U6HGuacQHqA2wDaVjL1FDM5h59mMDD8EHzqX8opwBSGT8S6MZWnozXNay",
  "key37": "3pL5N17sM7B6ypD3imAQsVW2bdYrkrmYUDbzTU7EAAUTtAWW7o1ftL6F99QrFTUYFPmZJNv1NqAh6W4ST7MaLekJ",
  "key38": "2WqHcCctgY9e7vqnwJ2mXphP6tsD4fFcqdkd3bzpLscgLMsossUd9yJntkhQbJckJ4muczcvsqn8aBTeGFFGimug",
  "key39": "5upnCEckNZbzemmEby8f3SRhPWxgUbh86tcaEivE4hBEWD1euNPnp3tGSnLZgNNJcZX5tXNbuuwsqiWXDr7jpwHW",
  "key40": "KU66YHRrwkdvyJGpqywfyjJiwYawVJ2QDcxrDLh57fL9RtTmAarxLhKJASgMwLSuer1RnYAiMVanYjga2bUpyxa",
  "key41": "4kcxZmY3FYGCXdsMV6qCV3aaVQ1ER91JyR2qQCFnWGGUZqzZNNLW3fTpLkwaF3diBApADQXQnE1H2nNdt4RuhwXd"
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
