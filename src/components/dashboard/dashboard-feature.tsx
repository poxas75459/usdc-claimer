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
    "5spa9jj5tJY3qLRQSP4awUbnJd6QMqQp4uPAGfRs8pNRUsjDesHJbwJTJiX2jD3sYsAB9fhEiX8fbsMgKKCSfg89"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pcpvNWnJAFUH3PvcJCZP1FGusHYNDk2gnmWKJ5nDKc7wKJB8MTu3YtKF9cuRFe7uZBN2txKjUQXq1d4fULSQ5nB",
  "key1": "51p38WEQJDhNUFcJYvz3cDMtpE9SxBfBsoXDXqGt3rqRyGbWggDqf2PnhuKEBYWs5QJHkCBiDNxXN23aiWCULHid",
  "key2": "2fWChPnt36yygzdjLfivDxCYYprapsJMbP5UdxtX3XQXtNLQ1qhZMUu5wEHtMEqUszeiAmZ5szB7uJ4jWEja6ygi",
  "key3": "67UPLxTqoaQKHRMED7vfEAR4Rgn9uvi6wdan1DSFbmeF1B2PtoDC9hozKC2518VYWNDAHrs6sgS4QhQXuay3mJ9F",
  "key4": "RWUC6jX5FHDz6qJwX3gP7HhRQBVd1eCfBGLZoVZ4hG1xF4zhxFRBDViLJhQWjjffuQyhsjaNnYtba5fEdo3bevf",
  "key5": "22gNrx4WGph2jCZbPXv4B6bwzHZLMrCdFJdotyw4GPndGQ5U3kameUEsAjF738AWw6tGdJqE4MP9TpL7Tmcx3ij3",
  "key6": "2V9f8k1wC3U826cY21kLHNEh4XEMog9McDboWr8N2zptPtCpCK7xjVnmmwBEn5baCzTzGeFCdVCGQiD25Rxm2wJN",
  "key7": "2cNVXhKoCCyoojSu5fbS3NwwFRGPSaLBAhyakQqssmN9TdJ9H9qtZqf3mGTP7Esuwhf1C75UBEJnx5h8Y6PyZouN",
  "key8": "3jfpPcfNunQW2ojyyD1Brds45h8ZYwG9ewEUggiHv4TgqDkRUSyocse1SpgMGvBcTBduAPBJ3DAp6RhqTgHtRBeK",
  "key9": "5r4EhaS7jji3aXQMUAj2W5TESJjjyuovwyDdARU39A2cZU34caChRG5RsaDi9oiBpoVSKhgWceim6NW41uXU1eCX",
  "key10": "4qPcwaMTMgeQcTAh7F92LnUv4NeXUGZmviARxgU9duGMNckwBfLYQVLDtvnzFWNqmzjBPSivbyLmDjo2sE7hxZX2",
  "key11": "41JiBoeK3u45s41Ge1AbWLFfk3jjA17eePY7ehptct6MJrCfH4LcesRgvgbwrbpYvFgUbazRbLDPnz2khVKNRNnD",
  "key12": "5SsPk9nd8PjUqYvpxebEHoxygpV88Qfzt3gap1sRhbTc1V3bR7U7FFk67Dc77ZTvGadUDboTfctJ9ijADjk3uhFd",
  "key13": "5qK8F6mSdvp3HNhYihN3h9hyZxHHXpgRwFooAQA1nqvAVuSSe1vhrqBtGaBA5mN4PuZWsCQVwDBBsWFrjzURF7T5",
  "key14": "34uC5Wuaw3oRgrvTnoCxixzzYvJixsh3jJ69D2QvfpULUo5tprrNRKnef7jBBLs4xBv7W25d1T47E2tz25jUEoW7",
  "key15": "4hjBgc5nm1D51A3GQjwP4oQnHF8NZCLmtYqHYzsnttZLbLtMpG2TnZT9xv3WQxXoMbLDL67ag7LT8KrVc4ELK4Yv",
  "key16": "57j6MKqeVvbBTwtbfeENsnETQuL17GJPqwjwVigD41C13qG8ze2yPqrcf9uQ9XT4CuTfzPBtxnXMZhNsHRBAhNdd",
  "key17": "5s1PwLp2gVrxfaZGLHAHShp5f7rymu9o4FJF2pa5bBLXwaG7ujJHXYzjtMdeZyf6mJb1Tj3zoQQNh4TRM9aMtLuT",
  "key18": "39CgCbjr1WKwNo3NgpCQpiZubrmjMJKREkQQkFk2QXaG2sp3rb7aBmvHQCMUyypMRdti91tx2LkGwaTigeSYQpK1",
  "key19": "3RcEcpqLP4HfEqaGTisUhQk4J1Z7r4bUPQ7JR32Ty4xXHV78mPQHxCdiWYWgY7Q9dobZ57sfh3W81sgPC4E9Loaz",
  "key20": "PNzKWUUQ97ihQhAb6vQbJJHdFgY1N4hmncNHwa5DXiDi3US9SV1aaCjkgMm4EVqrH9LJVQH6vSBVikqvwviwVgT",
  "key21": "2z48RFDGnvzpmVtS4Bkzskagzxnc6vvi3zwYtyuqsP8jK2qTdwTNW6t5NAKDwWPiswTJs6BTqoPN2S4SgYBZGBvQ",
  "key22": "4J9gEv63HHyGkFgnsF5rDTnSu3hrUyeRk1nNdgogBxVXcCnAe66o5sWNFNGj8fY8Ez2NGrTse7q5UmXhtD8WmqJt",
  "key23": "4okViwj9ajgZQytYv89EZ9Az6wTPy49si71H2fGqiVKpXei9GfsEDECvhfdroWketje3btcWZnq3GSpTREh5U84r",
  "key24": "9G6mCcfZ6YfKpBfKRnTfT55HZxbzRCFCHk1EYhYPL5ougNstZKxZq5CoR3fcHiorBmfuHRMKHdxNFZ2q7wWtSyc",
  "key25": "3WTqFP5AfDbBHgGq2hPKXW6PunYSKweCRY2CGhdVXbbovaEVXe9RVbfYKBuLpTiKDL31S3ULt9AR4Dux79e3aHqs",
  "key26": "1fSyjWWLW7gHyBQSfKroKFPCzWA5fmkBAori4YeB7gVEfEU7RfoHkt1yH3T1yhjCNnVXohkUWWAYKjN8CLVrpNN",
  "key27": "2L1CrhUtGQTopt3y1hnyjPnuyj2NmT2kv5QNF3bZWHPKiyHHu4sbM4zQhVtfgWZUHBFRaCRs6XUZ6dmtspBKN7dc",
  "key28": "AyFPA8tqg3Q1BPWhZr5SKySfQqY3sk1nRZTRMKZ7bubdGLE88Z9KuvDXoFyg4xG8tYsG6FJvTuanxZE8N7w7h9A",
  "key29": "432ZGfnrwkY1BFAp2mnWTUqaMLtgMxEKLAQBVszeRUB6hF6y9dtf8DkAkZ1hPSrW7kjLFnv53xrEWUDgqLGjhVvc",
  "key30": "rpjVdt8UfkNchjaVJW8Lajkoj3bZHNTXSgTW9fiXfapwvxapZKzCKPq9nfEa2k3jXjWJtpeV1ho9PVHvYN2oNW3",
  "key31": "5FXWxH6h3xrynzHqWHurTvm8s6o9hzVKtNjVtFQznbWnvL6z3tGZXtQ73WzzMVeud3hreBfoWXTeUjC6LLJT9SWZ",
  "key32": "3WqRQUuz7c8AXYeeDJzEsXVAMtR9JfUkBRYaeFXkdy2i92mdSn9bxi5KsJPKPSW9FazpMtPH1bsSnGfpPU7iU6Xa",
  "key33": "z8CvNLwPZM985WWAzxq3Q1dvAvQ8ZDEyMxF5mE2av3eQ4iF53jxcNjBQzR1UQhQK45iLX8cejkxjvSG96qubCFr",
  "key34": "2Qdj9fM9fw1sjwVTsLVjfJSct9WLqBiCeMQwWRZ49GQZcoDVUFRux7VzgUaXAVG7oJ2osUCKGzJrmjZdntk1taR4",
  "key35": "iVc3w8W6Rm5cfW2YdMQ1c24bmM2zocjfqE6Nt856woyKxuyBFPtvpf7K5AddGQYSmwKeRPFgm9rDpyjLdTN8hyH",
  "key36": "3pYBmQe4t1b1X9BzqtnyEdGWrX23nQ8VqhAHq3RyJPsBKqfPVJ7gmW1Wv9cHyPDHatBHWnEA2mNA4rYWVog22DgF",
  "key37": "z78LU9t9EeDc32as3yG1G8VjkKdLEZq6E5EZh3NAWJe2FFSMinwYb2fV3yLpvdqQUkus91G2NjYU9cqeziLGneQ"
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
