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
    "4bwKvz6GgVDggsruMyHnvVrEwe5KaX2pCSgyWfVvhDn97VLBN2Qhm2SgCoKJue8xKM94NewsD1gJiBFA2yTDY2kp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KcHjFVaPjZd2uMPuKyVQexwb4Pr4yqrhvodv4bGvtJ9ktwihWcviPqEZWdPMHWT6wSssWYFjWbNk2oEGvdHWCVL",
  "key1": "EbAqKQbYpVVgPi24hfcwfB5UmrfQAWQkR9ReNdWh7X59BaurnEi4qUYC1HWMpTzLAjaLeyNFP3md88PmGer9uPP",
  "key2": "4bvBnvzrKFEXMqVNVHFVYXPZJYdJbNfX5TSXA3P3STt831nEs8mLjPXAhQrzFbxoTrtt4m2rfLWwbCDEqg9PNgHT",
  "key3": "26xSYfSQK7A6FY4DKdZDyDj79bMrF9XZm3txYLwFnVi55jSeTBzNz1uj754ZVFfN4XMAdP7tW2JS77zJ9icoyMWf",
  "key4": "5eVqh8DtkdYadGGzKzSFs4JZmwsKkpHTV1oqNpRRr8WyuhUZatq6Wz8XMMsjrGjVSgrvmbeszyrZRCbA5ETCChG8",
  "key5": "5WXdRkyd6UbR5QHAnJDgqfCMFMwu2Kd637iiGRJbi8Pm1vwGYDAVv99z5HNR2cQ2XiTRNDdxEMMQB5rqYkHXkrVL",
  "key6": "wpAeMBBMgNqWmPGUcdaKuUAjXzbU1xMiphUvPN2jsTiLxhPwWVN9ACkVbKMpsnp1J2QjBzNHmbxbawsxSs6JC93",
  "key7": "5jFaZqmqh5mmjGeBnN4smrQSdt3dRhZ83EDhvPmfKymHVxmuURuyVJ2ZDB8YFQj6T6ySktFJcNeDM5NwoFmLZHHM",
  "key8": "2CVVnmBHBWZnhWnBW2ymEV4t1nhuPLZTX8DKoYXL7YX9i3m73fs7byfUfjatSbgPGFG2rDCerQbBFswaUu3HUwiA",
  "key9": "bkm9NZqTLQ1UoJKmPKqpcHdmmLeCcVvA4eaZePDUeLVGVn5vwP8WDRR7vKNCVzMJoeVEWNnQQL8pwwwhVxD3cgn",
  "key10": "4PTac7midqPxQzzn6DjjYDgihdBrt28eTKqgM6ug9QfECsapWWBym7C1YVvEgvVb1kG96tSRxMT76e5E2nLFybz8",
  "key11": "Ps6wz6t3bm1hYAXHFFPsrRfqfAtLQ783Dj9vEkzw5Ftg3MxYFqb4u6BeEM2G9jRQxvw6AFAZjabk7wZbKBsBijk",
  "key12": "ugSPGZwZEfM5pveCPgitG2X4NAzHoEs3APS1MTcrCNAwhD3oCQwwvPQ3rBMg3ERLWtW7EyocKt2JFGccJbxvRMi",
  "key13": "hZJADheNTctctieaxHCp5k4frfHoRgEQAp5ciTW44PqHKbjpmDj9K4kFa1Pgd44hbKtU2812PBVLABLwhsZNvC7",
  "key14": "3QToHGWQ91uk375iqHpAisGDjL3u5w1dhXjMn7yJqozLqzTdFoZH3wxyedij6VQ5MS8BtP3rDKPVMRnziiVjQzwX",
  "key15": "3tqjqzZMHotWcUwVubufBsfcHuXoQKGvRUmt2yvBCsoG2iudK9Ln63vo6KBFRqu8nLDWiBxyNtGqsQ1U39WaiKYu",
  "key16": "2tjWwZQfoBwtDGcc48jrJqogukdpoc2zFDBwSHDtDSM9NhDCE9LZH4DNvSr96DmTp3yAvGW6S52QZewef9asEjww",
  "key17": "49vqQW6z3mTuTnscwFjt2M694gsaDLLQ4KrdxLJfUXhJ4Pji1sKFWeMkZPUu8kHqSDwYgSmMo86yjTjr1BpNoypE",
  "key18": "5K3gP9tcxJqsSP2v9Yfzj2M2HUkHTjXNxc4suWjin4gSt2N76wYn2nBTNNBfqNFDXheKTpuPMdTEKfGSrz1c8bjY",
  "key19": "66tfmKLc9fPjkHY86RQspT4rNqKGTzEPFYnkbCik924VU6sGcqQakQdtYKKVaDVt439aoQRMWuJ7ytwcWCX4KTMA",
  "key20": "4EJVVwUju9xPaqqp5yBTHZNmiog6jppXfsDhwtXKDHEy5nxQE8QS4W5Ef93iBzSAvuyF1LEqUr5zYsSWSevPuGb6",
  "key21": "4q8HuQFMfzw1xM666WKkDr4L66WHFDxD4AE6Y1EM62BwUoJZq1zSbhj4LrKs1ndfjYn6e7GWA4U8krQWaFbdS5ZU",
  "key22": "5cgP8dGJJbUD5hX2xfgRPhfaVekddXkKbJWgYQXtZxjGqdZjvmBJ7SiDKmEosom5yQdDicCbTpuFbENPUQPFS9pR",
  "key23": "t1M94gCKfK1jwJm4Q7MjGaPkorD1RjXy9NWt7fzvbhaTnFYxqqQ1pkRKsMvjwZ5YbMNWTuk65d9Y5Pif9SxKaff",
  "key24": "4DyXnfbJGQXgshzGXGmtG5D8btXQmaKGSVhkh6pd7jTqNdAfUYDigWUM2XDnFB1QU5zB94un46wQS1ixbTmTXuPf",
  "key25": "62hp8Y4teFbmMtKG64w39oQC8YnkWCWaQVYtM2VSFzqLWmuZaAg61BJMjhd9ctai1MNxVnGjCeg4kayfbfQTTn4N",
  "key26": "63pTFzKbuzGLrgrK5saEt4T3woQyFAYo3EFKrGMpBTV3zhb9J9sP2YjiNtkMCYwoM2geZVyFyo8imxQtANbVntCc",
  "key27": "4bvh6KV528Xb2eoCfVntfViuS4Vermbb4qs8d2MwpXDNDZGbbNUADryRCC2rpAtN3R96CFXJh5L7mtk2Weq45FBh",
  "key28": "5ukpKSeaMdKjK37w94ZfseCb5gvFGp1Qc6qCufrNpqTgnmUcqC7f4c8aukoCFXUWmidJcz75kFcGYoECPWH2Yzqx",
  "key29": "2m4gLLNM5UWXJ4PNFEdMpMt8aRSMyqaxKGVNKBZ4A7xjuHQTf5BSkNwhDwhKgbRqo7RA22qS5hc52L71LcaVtBgJ",
  "key30": "3MBtfAZMUjpXnrx4P7SZuQZDP7m8iaFkM3zjYgHMW7QQjUodPtVXQm72Q6yABBaoezAz6f8QciThS4m6Q1EH1SKW",
  "key31": "4hZWHvaPaC4nwL5NMV5weAY7dFJ6PQkuJaipGvEQGcxyhPoyh3X1ejSgLtfuLkq2gYHHyVDNZQpMpsxUXdJ7XPTA",
  "key32": "57pY4LohpRFtQdK2PC7UKg8CiVuhJubhVzqWbZYAxAGTtdieMUEz3NGWHhMC4e2DvCnnUgiATU4mg7hqkY8uHMTf"
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
