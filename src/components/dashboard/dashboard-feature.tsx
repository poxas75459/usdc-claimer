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
    "4s1BHot3MPW2iizNzuXBaCFFKK1kfTUJYg9jCcqnkkQHubEsNN1JFEW9pSGjVcCGCnSEdXfuAe6rEG6msJN88W3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NZ27UnHidDrShUcRz66BQY747SrXRZXvYjGXj5A5m3EovpE1dVNnCkoHHifb18ZeaeooKBXL7exz6uutWrKtL18",
  "key1": "2msdCP94FDAvUqtV5JxDHHYR6qLE8U2CUVY5P5BYemFY2srWKSkrHjB6oeqziHYcmayTnAu7TUfmtVLxQpRBKrrS",
  "key2": "42iL56567E7T8rtX3RLz1MAof6rwih2bpY24Ysy8uXgR8X7RCqZw1wtJbCwZPr2CKqxzFNkgY8PLzKavZ2aju4J1",
  "key3": "2hh6R3DdMbEcBFq115kLr5PsHt2rhpp7ohyQzT3eR7VznAiumiUtZvWionpKe2u5RA9bhRBX2ZUc7urbp7tbzLLN",
  "key4": "23jDFcVd8C7CjqBfFRKLuxznmtM91wJEoFZF7WEDq846UzR97WcRM4tqJDvadHScFwnVeHFV2jZTNjjN4Kd68Mms",
  "key5": "2zmNX6Au6qYw3qG2Vuz8TipdCq8GKKwDNYYJnksW845LkTjqq1WfcawDKCQSBpfXR7EbDDsYXDFotCamegUg51WH",
  "key6": "gMEG8jZ4rweuPX2c3pYMj8gtQhFNmMpi6RiXioiJKdsLLAJpXgFwwcqrZKY9fKVvfzZUvvFXu8tFNjpT3cXEvQ6",
  "key7": "5z1YaHzPBGoz4XwDrretGjMzdmCPFQJK2AVLdRHXR5Tmv9Dd5tBG3RurqoZ92ZFgBhu89WfELJmPgFJjYQ9tU79s",
  "key8": "qTZsPi1MGhPK4i8Edu8M4juqUY29rHrTZ7WgrpUzJDfTJK1wAgURw6jjnPzYBRDc7g2ZfSfdJseEB96uhbY3xqk",
  "key9": "n8xVkSXDxCfZB1TyxQBGoN8kv12265Y2q6BHB1eZMTKCy5rLWfApv4XgNyK4RCpSeFBZ5VcMAmta1T4ixyKRdTV",
  "key10": "hsNYihwAg7BLr7MLecR7NphXiH2RS9TWBhxTxcoZ1672QA1jraesEhXtnnWzrEcKRdB8CK3HrA7mxHJ4ZNUz1es",
  "key11": "5GEcPHmEai8T6H2zcWKZ3rb1w3RMB3EPm4rAjraZpJKbb7ZDUj6gM7JArx2BjYTtPeaRUUUp2nTzLX7XB6axoVv",
  "key12": "2oUdyUSv3Y3t7RYJLLu4wkDGxHSpe5ipVaAxn3XhFdro8p8fKMamuD6UM5JpHinLnzP7DkhU5jiaPBz4oNFfDQhE",
  "key13": "4tEbathiDY69o5mHSbruoxvvYvTk1ZkdsHbd3QjX8h6DEKZXgdCwrhuhXugLnU8HnqmdEHgkBXPxUmDHzqmydHvf",
  "key14": "2hPgiHZn6PYewsvr2ttQV7KPia5HFajjRzpwMkXSkshUB1effvenGj6XEaJS1uTuEL3MGHUVYNzVZco5QMS92bxy",
  "key15": "5z9zMLCbYTszkCoUHJ3y71FJxWErbY1GtfqwYvMzo6XZDZr5P7dmSmcAK514tTWiuLbVM8SUbdYHqu5MTPKCgTyc",
  "key16": "2HqKTnLPRXPHj2t6VpmuwtTGpuq5A8AfyMAs1vPViCPkX52ZE46DFTTWQJNpXUehduGCm3QC7Wzha7Zfd1ASuzzb",
  "key17": "5jeqfqMiMtos2LbD6qnHNVT84K3x6sHFbv4ngZgnTzvhgjy6rBUuzAfBugyzurQPPZcZzTxbf6EBmUAwSRm6PEej",
  "key18": "8JRuUEiJ2q19cddAiMnGir81PUkcGCYfgfqEFZ8L5PSxLmakGx7vEgZH3R5EqjFJ3DFteTRR5FYp4xSpiECrFM4",
  "key19": "2NuXD3hpL8LutbgkReDr3keDpXdZMKnNZsDSmBCo9c8TXDyGzeQBAJDBjQwWpw3m8Efb8tw1Eu3ZFtgvTZjMUgTZ",
  "key20": "Le9WSqtGLV3mdCPJz9oYaCWUiQRPveKPt4CgBSbayVsNPReWmwov9EXuzr6pPXRKyChwjFuXtAtAbK9vMgs8KiK",
  "key21": "61MTvcBzUqMrEw9W5cr8DAK3FKGvdMr3fWnZkhdgKFZQs8hm3aThBnYRekuNEJbbRntAMuQrUNAVyayfBSDK7Ayj",
  "key22": "2FMGy4sgnR71HQAfjx8WQQazGHXYvjunf5RqVEavhVg2UKaTXpXBSUTjVSJzLpzBtp6vjDxrKjoEEbgtet9GTFh2",
  "key23": "2Qooj9VFA8U55UgYzdVyBQbiRgtDERxKdFBncvxRjfjX9yKHPXj3ov5MxVhNrk7uU2yvCphZaQN9wAkS62y36aaq",
  "key24": "4REBRm1ETr8GG1DEMGTNPpcZnBTtpRNktdER6ZPXvFCJZuTE7bHk3Z2bpQP92yfKkFgk6KZPzh2hjPmAUx8WMzb8",
  "key25": "3VBGGqF88eCcMZmL2NbYy34ueKb827gU3cNfP8TEbP6NLYZ71s1pi4j6sVbnox61JU9XvGiz9rm2YGkqPhaRb4Hp",
  "key26": "4r3CXfYJHrSbu8AQ8BW4DCSsofS9uaBhm7n2UN6NvCpRkgymw35WUjGQ3pFGkHDEgf5gDPs1C6nKBGSdQtvpUoXo",
  "key27": "2BMxJRFKY4XHNpJwaZnPRV3JrQFxkqKtp6reJWj1fiAbaDEFvB39sDkUPbHcb1czkZLshbDcKmLSfWUG5ybShMwM",
  "key28": "5LwUuTkuyXgRAxpDJQW5CYmHdcT3nBX68GSasNMeW3NigSfn9DxgiCxM8Sz2T36LAizZQEakNn4ALZf7dYhVUqK",
  "key29": "fkzrXNtTcuiPumgUNk7apEKPgrLB4VVwTWrmfDBRqRniagaNusYD5xg7ZUVZH3gMCy4hYecYFUUJvq6UTxg9kFD",
  "key30": "4JGijLr127f15DqEmvetBUegygKj9QWEgfZBv6NjZeoaWeA5aURX5vwYnukUBbVv3X1j2y5iH7h9aCGTfCcFypv6",
  "key31": "4pauMXmr13rE4UGxh56L9SnziKQYwjxQsJFXq32T4sjnfE6v9tbiHnjeMVKgJXmdXFN2tcQgaryzHB17hXeTJPjY",
  "key32": "3kYR81es11xcpdGYbjumxNUVg57FzexGuFAqpN2ZkeS2keowzLfA93h1xT6H13DJiFVh8Cn6BvmZK4KR7oGVNaUt",
  "key33": "4iKREH2tgyczhgZqKZ4ZPuZbC6THb2ZRXvzuWF2tKP9XMhN3jMzwGg38bXLahhUnWE3qLpBmxVeJdhR5r5NQwf2p",
  "key34": "2v9iMF8eR3GAjR2jhThRJ24KfiRxn14SkDyz6htbLqayNvcPp76YWBHYpEXidrvBiipEQkMkZwZjticumewEDFaY",
  "key35": "2TpuKMywRduxeR8XQZpyk4x6UHjWpjT8KC5ao5SemxnuYAb5tA1tFpDMGM17Kbgyvy8oWQea9dynuzF9rqzUbPQj",
  "key36": "29NE41sjYVasSZB2RZqDzWUQaBtDVzmM9A7aFUsrQx2vqciESQPkNek5JrgQV8eKudTv2vx6YpqYb2HieCCirTdD",
  "key37": "2FTg7Gx5KB3q4TQcRb4jUzoMmbgn6f5S4jeFxt5BawuuS2ryoEvLDY9oaM1MfzzyrRVVWmkt9FFLzZVMSzCDpXpS",
  "key38": "1gvadqXTGcgjcusDyjoTneEKbAx7duWJyMQ7cUeyVhomBDsBnay9o8B3MdiZ7uUNy7SbNaUGHbZykYGxhSHpKVJ",
  "key39": "43xGXt6yi7JQcDMqqWyaCeVP3iRHnTH9LeTJXTg4azjeuSiKCq6pusViBo6U14GoJCT6BfveRnvMixFjQkH7DnP2",
  "key40": "3DUmynRA8eaqYrJyZUd72TJ3aziHiryafhM48VSPr1FdiuRVYZMMDW89EgruqZwtXFe87LssnKLKVLxynTMBanGf",
  "key41": "Jo9HyuPPbZgn8rGnTnREdBsxeRDxsLWnW1jHBbQi8A6jAbdVN8F6NBxyALWFwS7nZ8VYzMhAC1dwD6bHSMuwjYP",
  "key42": "JoVEADPrhxiyz4GjZGXbVKXEkZbmddXhrqSdyD1JitGCPsdMkGMjGa42jxBCeDPW9PBgUpD7k14V8fuztU5TYX4",
  "key43": "axKhcJoyFUH2oEo3NBw1S76HSMhAwJU2SucYhSkPpGsqkeFBsBMTdtHyjPHET8uMnRFtAkXoySmaFWtNtebX6N3"
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
