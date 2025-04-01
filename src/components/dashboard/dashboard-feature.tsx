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
    "3DLmEWU99nvpg4pTeM985BcEjDTHnQXfah9vdxzfjsD2aiBc5Mm1yc3qng2FjsGpXn2YdsFcDeAtS6z8ZcPHpTCB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KBaRgi7YqwuEPXsBXiWJGjXL3ncxYFrAQdGRhbRuD2kaYPDqVBHcTA2MvoE1u1ESGcQbveMDfh2sT4CzMJyMnyQ",
  "key1": "65YiyJ3dQibLXSkYM9ttKQaib9qMeJ4q9T78NoHdVWfgD3CVuGUREC9CdDXNfwxPyyg5V61L9ouymhVHXYx4rszS",
  "key2": "45ymc1AJjg6kjCN9dv1dt8DmtBnoEE1ncueoSKQCmETfKrwBLEi5DVdnJEwbz4CbAByJE4r9Wm1hZyqbSrVTmopX",
  "key3": "5QKAymBTMRwVpaYH8BnYyZfzFceTDXH1x2xNSg6ym2rws2VfJMqwkbQUg1SeR3dDjJNpQANMEKZURKnKmnHSCR1M",
  "key4": "2vEeFHtRUTFU1AC1VJkAjDGHhLguHi35kNSWXkrvcQibiy5GZWVYAH2NxpxxtJNyjc3NyNFVXmKfD6DnFg7e8jGx",
  "key5": "318PqfXuPCZKS42drcffP6SmQds7jZHsYDx9zhTQuJpH7my6Wi6tdfNJGmxxCLMnbXZxRApEBu6DqyjqisfqNTxB",
  "key6": "67fMcJJMM2xAc3kGrDB2k3r5zPVqg3ygCg3SiS4ACNQhidtmsMFr3LaCQ6j7Pq7mvB1wJ4HepdDUm5LAtMh5yfCz",
  "key7": "vCCeLNeJzBifg621kzwDNowtdaj9hidsgqBE5PbQr7DmkDaaXpZtt3hiVQ78ZVqZFuKAqpt6ph588M9MPR9nmQk",
  "key8": "44oHaiZ4X3JCwyS915aEtWp3EzoMNPh9QcD1786etzn31txxibCEsJZkw95wWCHcoJJkUeVfn59LpiPXE9wvvBoY",
  "key9": "kcEV1QTpq4FQD17PLnFM4WeoX7upN71gEGzJzNg21keaZb39EfE2L5YCsauGzEFH3pQ32pfZKZcFXSksWSuLhjb",
  "key10": "3pTrA6jzfg59x7sm8VK3oQuqjvvXc6pqaKfodubrZzRQEjSk8Zmh2jLxgAuLTPJsB5aft5B54cgjuzmxsP3JnPDt",
  "key11": "2pcdtkZa581g32gEg6vCMNzrx3ZGCMFwFLm8FbZMxvmawHDe5YA4NuSsDsi7YNiwLjGNGmzC7ji7rgPJoheQFBjt",
  "key12": "2Q8ZHN4DTQ7bfvTpo8jqUuThPLCEE6z294ifdMEYzuMLt3w5mV4U6LkimvfcFvFiW8HfD2GoQNG4jSgisqqfgkTK",
  "key13": "2s2kJ8DfKqKQNZwHkewxe3CJQjDhf4Umraf4YrLu3AEhScaSgAPKw4G9VFeUKr3nPwaE2ikD6JK3XwEtQGMLopUv",
  "key14": "oEhZBuvnDAYXygtFGwDzp1fyqWxJ252shpuMRT3xuMAKyv573b5jhgwttAFaud725NFmnk7DCpce2oCn8ErsfBf",
  "key15": "3tV6uVuqBqRfLamEurWRTDCHiTmUHkKc3Ynm8AFLcykaNiDnvbTSMJQDbtVGVLYd7ZmmyCTAhz6YZrWx4K6vmW6c",
  "key16": "2SrrgqrKQd8KdsGmH63vNKkL48S2YET9suGcLXggC69ZJCEAan1CY6DQ2QPAJ1RF6yzUyJ5bSY7CkmMA6qD3rnGR",
  "key17": "265DLSVAm1to1hQ5zgK6JGPyJGH3XWgExABTRD6hxXGCeEJ2bAvLMk5NhGBppyt1kgHwpHRhjmNG9ptt8NSUREKK",
  "key18": "328Koj2hQfaGYCNFLqHHgg381q1wgYf4hapAuqUfKSSyTvPa8JnM9ymAgoQ4FyYvkSgitRLTn9eD7upFLjFs9H6",
  "key19": "5eNLuPB4H6MLJW33KcLvVqLTYENXUgVp3y4NGgKCPFAJiEHWRwQ68Rd2rmKcqPN27f2o8uya4mbvHpq5SzfyWGbB",
  "key20": "34zEVbCYN7gvoC541cKnjNYbYqoTSnCUTGhFft7Ed6HqW49J5MJ7n5DvZ1uCuFy7EeXh31Fm23L6utmWb12VDEoN",
  "key21": "66dLBUA2iFZoyHgLnBpPHD5wYLhJx4imAxka4ZMkYEDTC6Pdn3kpC4JfsDSh7QecQ8fyTBDDr5AHZsYyEE3dZ7BM",
  "key22": "Pv5nwdjaq659vUPSyYKsX4zv4yKNsdU5Enxw6hBcimxTgxY6LBCS9rcog4jEKyGukYfYFT7eCetBFdMPDehFABi",
  "key23": "4KjBfiNzRQGSBQ2VavKmxjQ966ZEqyUST5wVyaLTxoyrt16JvAbKaK6QBqpJso67vN687T2YgqZSvvvXdj5Q1FUg",
  "key24": "4HfnBksBV2GpPcUmGxdPTxQpL79aEMgv58n5hNXXHv7hbkgKTea4UMVq9mMMRH4N3AHcP5G86ZJDzHGRbCLZVYBJ",
  "key25": "gwj3Zn17sAQRQWhhhRyg187RQHNxLZxNwpCuY9bWi1qKVjf727kK2rCpF41Ygbc1sBtSg1jowH8mXS7NoFfVmqQ",
  "key26": "3RHko6eMpGDDFe5ZTQXuRvFCLyZPRwC7TjFSHgvmzsBNnTrX1vgC56TaLd3oRyDUJaPu6ixyiDuDCRvbAcmmBSzC",
  "key27": "3YnwfZtGPcNz8kpxV6agjzGy9xk7YJ4qT1K9fm3DHH8HGy6Msub3VdzQkb8KP5n2XAudQvh81jNzmsVbyk4jPuuK",
  "key28": "qWfPxGzfmedHWvrfqxGuSB9s8r11BhaLNJX6Cjd6Xh9GpU8s6f7q53ZCXoio4Lj1rrTFTFqYxVWV9fYiFgVjYt5",
  "key29": "4SeyTRqFZzpzz7cUMMbvSnrchzz8Yj6fGBSKu9pWsx4pLTpMcwarK6Pw6UgBdTWhm9bxdoUnMeyC1rHhkMdduxeJ",
  "key30": "37CGSQw8Pu6evrGfwYK9pCBJMob3CiGdLjxbRgy3ajKGyJUrkmuhsyooQS3TJGEWSFLGYDatFozYpWuMNK8EBg5c",
  "key31": "5xx19BAh6BC6piiuFWc1gpKQRPFgR9CJBHA1Lgywe6CjFJQZjwN9R2KhsryKsjKFooAPdzqwXdLNaXmgxpxHu4N6",
  "key32": "49erwo1Hd2M2o7C5gsCtosMFZ2jrhGZLYdry6W79xMUFE5RMTXsVpsrzNy8JC5TbJXX3fqQFHQPYZhhAt5M9YpPd",
  "key33": "y6ugxqTmgFWXrDUViQhNVTLet18oP4FZ2Rkb6wQAa1Hz7tWSWBWBRmNcHjk8uGc3WvQV7H6kdJZaBToXV3cSWEy"
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
