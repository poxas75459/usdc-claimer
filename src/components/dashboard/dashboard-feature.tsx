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
    "46iSRdLqKDBnmfpbo2XBphi43BKZH39r4W2ESkimaaEMgmd5DQvxJtx1BuBNS4aVDr8PDw7YcpvSnMdsmZaxq4kQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ov3cTZSzhRhAhonC5niBQoSd4MJkuwPSMg1LsXAt9uCpr4xesmF4yFgdUAvyknnR7cy97ME9Dh5ugHZMoi5RVsV",
  "key1": "25zMSE4zUm4EBDCE8DYDJ2bthJ3iVHbRQ2vLvgtA7mqzf43dHEhbscjAJdXbsJ5KmwErz3pQwuiVaTYNf6fXbHM6",
  "key2": "3Fb6cq6MtGbbb7QXNGsTvxb9y5Wo4BAcon3opWkiUqwCW8LN9Ur4982GW5Bqp8t8QGcaMVcVpsryzRMh7tmiQbic",
  "key3": "522vG3QyfVdH5ok2qdtQnvEZPrkomBoL9WPnVg5xFX27tzUAEefWZbHJ9aLRojeF2XeTxeK1LJJ7mmVgS6V6sV9K",
  "key4": "52HPrqXQroY43DUhnFMbn4Z9S4zspozhKvHYdunvWRYnxk95S5kkkFp2p1jBZw52GtSevhGLJo4N1RBQB6gXTp22",
  "key5": "38mP9sCtJx28sYGhiwEgvdKs6LXJ7E72kVmA1xQmEzV9AMPfuTFfLx2AJ7zBftgRy45UFJqxzWMW96woMfHfCFop",
  "key6": "47CkHtrrAcuWkJSLR1jVn6UrSCPfPkbfU3AWetHQMAW5PwdhKN2yRfdR7aF3BicaQ5rfUcF77drWxGD6SGQJtgtD",
  "key7": "3nz4vRBCTXRhnLFe9xYguYUJtk2sFuBjPtEcmHXiWKRRCSYKNXFM8JEzjKZ8ipQ9RQ4Byro6ppWigiy5jbjB8Xrs",
  "key8": "4nHdSHb1GexKEcD4NmA1J7tN3UMT2zsBqMyRCU3Mtj5ygU7GEpb6L9PCAtbpx95HHNEfny8R6FP9WToQ2fMZ7JCV",
  "key9": "3gSEpq4mQyiYdCr2iLYxhXkFbXUG89traoWfb1bGb4NY2E6cm4MTRBgAWWBEjunGwW3EExwpkHrsaWux7ax7jEy",
  "key10": "35XnkaiQgK65Wr2AHq9P8V51JN3S2C7TVCh2Zo6WxtkbA9r3DyH3GqZQ1Qi37SkqXpXkHSxgZ3tgAef6vrkyK6yP",
  "key11": "2UNuAKftKKpZUZrLKVWtjwEHdPjt9YRpxPuh9zPGDepnBKcWJ4XuAcgP1334yhaJxsXwoE3cccc5jagfndNskw4v",
  "key12": "3kaH2vzDu5T3ccvWJX9dfPZycyaC5jp7BZREzmd8LrLH9YJZiVqmyJkZrE49iLp9cHygEcYZAmZ8S2n4FqTSWMUV",
  "key13": "5fHESoHTRFKqYRPvqxZtv2DnH9ZMmE7xgVN9aYg6hW2tTgsNY6j8v4dsyrTnSSyBAjGB4EWR3dRNEQWDGjusKPvE",
  "key14": "5GNgMio54CM3m387nQ3yPf6jVkQb9PP8NJ8Kn5AZzFTCJrHxcdVQiwbmqdVsiBaTTqX2bdxcamEfzqNjnuP8dbt7",
  "key15": "ggXeq8U45k4E1Wo8TrGosrdfikMGfTPmH66VWVBxstfYvEJoUZ1iMoeNarkVQ5oa2ktKwxJBPQ5VgfpgFSmRkch",
  "key16": "24uqktJYCjPJAJBMyjRZWqkwpRFpn9WXhygucXQ52ri8yDDghZc8ZTqev5wAjKVUYae3GafvYojMnc9dSTntfE7K",
  "key17": "37zRdd1nXFtYk1v8fkLgmHzi75VYoVcxvLyV95pyg6MahNGXooFwogqYjFeP7HhVCf6TaohrvBsTGd1WeWJhy32K",
  "key18": "2UJ1kML86ZgssWqpAXa7UZkXwYXf948TcJpxjkv338nxVf3Z1PCeYym49qVdfaequx2QXb9Q8GfUF1kkVuWR5q8s",
  "key19": "4S9oXFv3fxwESsDmecp28tSkvjbsdkb845iFXHphnWH6RgXeN1ht13cw2Dk21A8trQ4x1Msh6GvoSsYMi1RptnoD",
  "key20": "rU3r7WGgDPgbhCd89jJfERQmZMTY8BfrmafhDEvQ5AitAxfDdHxCd4zQHFAJbSn2C4s6gGu6PTmZRZHhLHLw3Tv",
  "key21": "5BBZa7bM1W9445VfNueWmFUQ4qLmfbU4ab2Sr2hpmEyfqaVeV6SN2d2M2BSegQesUxqBZcYruXSZJUzxC1vKmkg3",
  "key22": "4PKkPXxznJfTseS4MNBZpbFcvoxK9BaK1VcyfsQi9geYcDB7Sy1YBVhAkWMcSuSUT4iUJrHsJhHjX8gaNvGyPdQw",
  "key23": "5sCfQso8q4yb3HHfQkBi4Ht7tQJTYX5SXgJg4ajsKrXAkNdpmY2ZT2tETF1ye9VyKexbao1JfiqN1fgCL4hRvoe2",
  "key24": "2yA6wH1waczjV59jRy4k82Da2vkXZiMCpGeXi9Z1cxTz5HoAVf1AJ2H9tS3YHoxdMfq4vGyAYYVUHcjuDFR2Czg8",
  "key25": "5hmTvhPAeUAntVSnPsbvd8joGk89MBUHVcaX1qociUkkBHsRk4jD32JztYWbuox2fyorTtYG5Pp1HDf5g2u1M2ZT",
  "key26": "2rUgbaFonf9uXKZnRSxtVboo4Tq6WcoXo4TefP3aiDGvG9eWaGBkmfQi1nvmWahV5eyzjuZESTJ4qatzNgKaKuZN",
  "key27": "57JKU5XWSryVDyqdPpNjeVfczcePcc7xdjabJNeRMoHkGSpS19xobVKvM5hBEAcLmPh8XsxKSQ2FyKJsJ3CZ2kiE",
  "key28": "4u5bs24bcQFfLgsPXiD7YDzmLGsHiukJG1ihwqcDcUqaNcahPMUo5wXaq6jqCEQsvjEqxVaqiS3k6AQ8QsJFp3Vo",
  "key29": "vcQ4G3yjm7NfjksCzXgos1hqcj2MXMB9TydUxhu9R5CDeh2SxmrkvRNCJKmqoDmbmy5xyef2J272NrPk7sudJEn",
  "key30": "5soQCbuKNPfZxycq2XN8C1LSsN3GM2at6WdxUdus6oXGVWFgY2oEPhH7EzB7aEy9Duo7RZaTU6umjCd1JrtFjxsG",
  "key31": "4LEc57zv4z9jHX68MLoyJzEi5ifA63Ho3vDfdGfjgzX43HMks3q46qYHto7fjdA3LC9MiVsiqY3UbyGQpSn4sAcK",
  "key32": "61QudtxTFWCQg7F2mkoc255hb6Xkf8q9jFzjCYLz6Guf5qSFq8u1aCvVVXkbjhRQWtbhvHSj6CKYgMcUZNY4Ce4d",
  "key33": "XVQutWxsSr4SFWqgqi4ujWywYfx3WWLVeiEYRBiBN1HMZEx7TMmg7ZuT5CRpvEKkcq7S6kMfDJJpszMNKbbtBZG",
  "key34": "5sjbKAeZ8jS3rLTrKBf1YCvRsAnJbbiqdS4JdG3KvDbQ6fwgg5wNNH7MD5EsucsrZFdxVgh9bWet69b26sMMHAgP",
  "key35": "2TzqSrewpvNkR3F6qr7pyQdzE98C4P6fagnSuuwH5MRycEJUXnEkJrGEV9U3WYPJiGAXZXAebTCZRWmYuLVppZgV",
  "key36": "3789kupKJQjJxy35yAaHnBLcCq8ub1y8MobnWtGSJcVy78q4KJH1QDvbP6G58ApzoFRT7qGiv9hXGXPtkuu1fh8N",
  "key37": "5ixQ24W4qJT8HXu1MhvMhA3XHUfaLDMappPBgaHD8ZUc2hbGs7WoUvunCokVBWhYAwAFJVLBkZj5zfg16SWvTSjC",
  "key38": "3b2uxxSY27FZspBe8EtkoiVv3cp4GuidUgcC4i1wbnaYetKaV7ZEa2rxsuwzkQQXueLiq98osCVh2KBVEjhAVfLx",
  "key39": "5F3e8DzYMPWt8m6gyzzMuUjS7FxnuJmVjGpKKFw4awzeWAoxFzECNmMhLHXtSPdXkqQrp1LUNgaKGUbFtab117nR",
  "key40": "2okZUK7fnS8EcsXVMFKBvsxoMiv4NTewtQTWtQsnY6bWHg5vT3fCfRbxMi64uU9TfxQDCfjPfV1GENBWjtjgMERP",
  "key41": "2Ed61LfYbsJNRhDapGWdSRWuytzJUmnj8aLrujvPGZ8upmZ96YRQHRwGPFBfvbPC8pkZfUF2ggXa1xjMfnzKoGKw",
  "key42": "4fbhhfpPER1kPc2tsX24isAZbminys8QafUs82kpYH1pn6zizRW4uahLwsakbNiEwX46i4a7UHBPfijf7BfJFmxf",
  "key43": "4EVYjeFa36gwFSBywdh6NPZSnGTozZtC9yrsb6wJtoNdjwNZRqh7Gnev9BnKkBUGQXPpVgzQoCoXrkBaGTZCEekF",
  "key44": "5Bs6K66XN5isBJpExmMeDa1aBHYsGMSqdXyvDh2mn1w6EKWWh6Mn5Y4hRepUhKkVpPn6VnAGtLHHHvVfLp6WyJE5",
  "key45": "2TSLpk6yo87kvsgJUttV6Ry3Wxjx7JM8XUcW4KxS9MQA3niXViiVfGYCsmsfq3xuhY93omPR6j8Ys5t5jqwmpuyE",
  "key46": "569pB4qLgde6ufhDS1cU8YhBSRcwApXGwf9pKrCSNFJNq6MPgHHsEAnucYK2KAXvdtEBFawyuuPU1yrwqG7EHvYG",
  "key47": "2BsQaHtGJGVi3Nn1Ttqk5PnRsNk1fnGW963QfbxkzP7sgEcLNCQk2gJEwgeWhY5UW4kQVqKVdpXSuqu4PmJCPL6E",
  "key48": "5M78VxdgcaAvZoatsGor1RcmW8UoHWbZVRASsHTjTMtxACq9HPqBoCezaZSBNCELJ1JHU8FsVoQuvVMC1Sfkqeu5"
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
