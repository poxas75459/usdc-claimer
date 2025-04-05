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
    "2NCGWECRtxNZyaXpErFYBPaJzKPeEkwZPWL8et4L9nyCPNR1wxNF37m154uRH4M6aW2HEAvdYEXswM4YHSbDCKes"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JUNycQYUgtrn387bDhw77xDuoBiGagnTtPYQf6UPUtRdLYYC5yT5t9kdmu391byTrJB3QPZ41JcAKGS8X8w9WW4",
  "key1": "5eTy9XydYUmAGK3Hh7XnrYe5jw1FU4E9AiUzFTtHpuDKfpAYNYqwn8tQq5CoiEXv2VfABu1sy9LXyZ5fX9qVqoxm",
  "key2": "4TM37V8jUPjDumnFEy1LcKQRGcfPQPByCKcVU3TKGKx8vZSz2beMxy6eNd6RXHZRmKpN9BboZc4TzNx4frtNhv2p",
  "key3": "5VaHccaQr8jGuvHUS2AuF9FeNqaFvcBYf8LkFrodDnFLGVgntjYCNSxNn53RbF9PmjeSRXbCTyM48h46hUGzaBk3",
  "key4": "5G97Q7P3uiHZvLhrfZGXBmzB6a4BuxbfdS3wzGhgPZzVBSxoAz1k3fBDahDhDrwTPButGD1CzFmqB5FmRdKj3NDr",
  "key5": "2odXqzhzK121qAYqU1c5qD5Y4QMgXp2bxXEUfEnMvhXuxwvydUSyg9GETVkAyXx86P7p2TByMCbrB2VapXfpVQsU",
  "key6": "4dobVHXKQt9YB7ZqUyGGKnN1E6Xb5DJWJmkXac3SQxvtuKZdJbXn7hNhVQCh1KjjYhzsjF4FBscKYdgJcFQRi8Fv",
  "key7": "457sFVV27xU7RcDDAzWY2Vzs7MgryQhyizpxPLhqw8GJfsfxcSymq84jrUGv8zfsY4JY8AN2ettwsEJ5HPTMDCdk",
  "key8": "282utmVWwQAxTn6EVfk2aHB5q5qsPqc4HD9Q6pmWNjTNJ5MgBeobC3BKWRpWtXZQV6PbaXGK9h2q18rSVTkEqXWG",
  "key9": "H465JEXdnwVeBCaoXpKPkXPAmmH63MtavrU8tvempmXa8VBeZyscMAdiFMU3s7csAGjnbA6dpabEx4n8egUnMKy",
  "key10": "WDHvrYCxR7A9QnztRK3e3ZNGveRZTdJav6aodXsZvT1bEHrVUrvneawUMCfXNj7Rj5gxBQHYpVn1TGwr7Dnpcsq",
  "key11": "3pnVo7XDjjY7gDwXv2R4A3Wyf2JKFWTjbCS2zSLyvsowTQ8JRroRv9V5popdZWoitcBLPbK6YqXzykcNXNbMiReX",
  "key12": "5nJQbgJwS1xdp89LqJRG8CnrfJ11Bvd4SEJPTY5YFDFFPXQQt4MfEpP6k8oJ7xbFxAXcnAVFW8xLgoi9E67ZMa6D",
  "key13": "62DKNU5aSaKnx2JG83T8A19rtzTDuyURZkMX5nrghgCZYXT5Eoo9wZvSFjJwdozE2Bat3SdLNVMZLZsmuMH6ZenZ",
  "key14": "85XMi1ADkdpHoPR8EyhAffBVxA9iV3Y4XDHKJ5S1ijf4TTMRReMAuHP5C3aNiA3X7e7qy5c1FLf74Hw1eZqDfQR",
  "key15": "4cN7RtP3A9AmN68sn6srJeVnsuTTKGiG6wbqgedTFmiuWxmF817ML66k2YvCDwe68RqXwVV2FmqPK2Sy4rMjqKpC",
  "key16": "3ANmr84YTSs2WPtU1Ps3v3XPJgnc3f6ZPon4UrsTV5rpKL46YyBheu649V4x91cwRNvzxsrbhqiFPVy4J5hp6fVJ",
  "key17": "BsiDwJJG2YHYh2X2X1VRuGwUc1GmDV5hgqf6q2xtGQ8sAgZqVmjSxS1CmhdWQvg7EfgT2yVk8H2yRGR88kGYWxh",
  "key18": "5tZ6XZfXUjMEsC8PNAJeg3bn8AUpFA4mKzQMQUqoK927iJKL61EkSv1p9Wnwr1UouwYGvfoxxjjijAqbrxKNYsuX",
  "key19": "5tfsanaamWHAq8EhtYkjfAXV2mLkq1kousn9tZT3K191zzynHBeNWEvBLAfsLWE5hkWxBUu4fb9vMBFzTZC2tUZS",
  "key20": "2KY638F6MhKTZN5QH7Q5rkBqn7jiYABcTPp7Mm2zWmgUVi6HGK3zHPCK7sZUHbq4DG7PSXqVZZE7ktpwT9ZYCUoA",
  "key21": "4hqWSuWoEKycuVnNeanomYDVY4Je4wA6x296fyYWyK3werJT7Rr4S4CrezyZYTNJqUXUUwz5esPwzPTCxmSNr5DX",
  "key22": "4S7n5KHh7vudiCWvfb9ngzquvCotysxJ6YbCbM3JEMyUtSmv1bBHvAohZb71SHmfDBzEzgcU4WSqZGgM8iNVTXnL",
  "key23": "4sw9eKpCP5Ge6gSsHGG9XNwaJ78JWnk9yF1qeEWbfijjHq5i54kR7pKz1tEgXXmJG8G6Q7J9zFjfRsFQ2NHTJRgG",
  "key24": "2LVssfi2kEReo45zxHwTEKUWVUadVmKGB2kJMeha3HG7KTCvYMyoJrsbPmTr5Eqs6DXcypmUfGJCFM9P6bPbaGtU",
  "key25": "CpBnt7B84bsDVzYwTQ3UPWMXNG8FLNJSuPiBjXnD4dUrJywpvCcNbS6NmCEVKgjtoQ46v1dJ9nXpaEJZARwb1Xz",
  "key26": "5mFYTqm1PqizWJWB3U6mHYdMhwSEiu9cF75q4QAhecry8tWX8kWLHSS9j1xzp8KpsuF4BU14q5iVtRMwDxP9QwwH",
  "key27": "CP6Q1UNc94danb4nUfUd6ShiNvacgLXGUpnR8EdxxsBMvJLgZtJdXwgpQdsxo4HjmxKNwEaykGYxnC85iyQeevG",
  "key28": "3vJjZDkfafqkib3YMKEpJ4nfPyZCQwHnFDbsn5uxE6bQWf2hGNA8gsLykzfY8pSQ5MJAYqYopaBQwkvYvPNP9AGn",
  "key29": "5fmdccBjBe4FYjjJVV3WtWox8xfwUjFfgFPNjGRVaBfEcLRENLFMYveFEsatbWZeQxK6suWphmfdUcQH1cwFXPkd",
  "key30": "4EhpGajFfjckUWowp6WMPesj2Guw678X97TxYFTYikq5L5YFWtajGPrGcgFU8sPHzs7q9th8mzcdLorAssQwTNiF",
  "key31": "4dejMWcffjJ4mFG5rjrsg85iMEfqHBi6YvMWESXVmpdvbBUCE56C35zMkmNJDzpd6FJ3AyS5ioB5jVTQtoBSbkax",
  "key32": "zpQzvEt22hpE4XZ4s3YU86hdnZAWqs5a1wpdekQBBMZVSci6hYYdb1SfWcxnRNJUweu51Xq8173Z9gm4VcpK3Fx",
  "key33": "5AgpEoPwSqtLmrPDq758vtsjChG2z7f4sMYJCmJu2UBp6vm9sQAUb1Fo7zMhd9v5HnFqHsZJ6xsaX27FsQomMcwY",
  "key34": "62nLM4a6yVymqmDKGZ3aLz1vTnRtQbJxAn2eTGLPkzeH8PCKu8zJeZVo6SthPjEpAQZ51287HYuYUWxwPS9cLyAa",
  "key35": "4nEmU5eRTivmzBX2814EWd5UdrLTLy8vpGNuxjGUwJKJvpGv5deV4w3MxBTWzBeHFJUDzMNDijCeKT3yAV9feZzr",
  "key36": "2tGrH6pHN73GStc6VXNh83ArF5uJiVhgYQqzHMtV2syCnqYXdn8YfeNHS2uANwGEdpMFmKxe8qbeM5NMVaJX17f8",
  "key37": "5zSDVnSTjqdSBMfbwSw6fyuKK8891snm3bep1DqcZBWDusCADrv2WYuzUHXEakUoec39rbT6opoCeeJGeh3dUyXj",
  "key38": "2HFKWbfsxRPaj2SabYdKBGCpgjroHs8qtRDi4AEAn186uyVrLrrah47U3iT67xEMVBHBt7VEgbJJ1bZTG3n86Er6",
  "key39": "5hQEjuZbEvLMBx4XTezELcsZ5gyjjxFf8FSdsnMbp7npv6xFwW2h64gQY8NHXRUNoXU78PViVPjBZ9aquXJWZC9t",
  "key40": "2JKhVohffxNoSjqVgFvfEd4qmirdMYjZVRM7p9xhpNtVHdb1ukZFLJMmscFHz7EhbnR52U9pVaPwfxbSj4HCVFY2",
  "key41": "3pfkhwsDpXe1NZkoRp3LhC4LwpdJ7CdHyx31TZCER3f641wJ3qYqFQPf6ghREyEec9vjxNDsdJWNubNhCFd8Gkov",
  "key42": "4vZGKGAfuLMQxBee6pvA8shuJTrimf2FowfWSvuy4XbHTiMGYS3f3Bihp8wdV7d9v898oREdh6nDqeU7dQNBCtJw"
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
