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
    "2JWeYfhZyQhPdyWykyAYSbafZ53YZ7uxw1AinY5L1txgpszu8QDcqFEciHLf8Lh6zweb9aQttFhdZnbp5yhXfYKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4truSSz9jAjY2hynVK4ZXnx7Ws9PZB3iPhpsXSc2QmpVWJ24H5Wwk7jWYw4KdYfpfDdRTkinwbuxrATkxAwnuUNv",
  "key1": "5P1efS3hFzj4HJG9UirbDoGaPMh6QGZn1cPd4KpLiwBEb4bhvHi6ZZHtHGJYAxHPaQVRVvsc3S7nXvjfiGGCUCnh",
  "key2": "5HPefU6Vg3mi5X5k63NxmF3ZbGvbZ92U88ZijucF9tJkWLCRUq5FG3D1Aw2oKxiqb1RenrViK926QGHsvJ58pts7",
  "key3": "2NJ6CD2hUS56hYAspQM2SaajP1xUB86SNBTshFApfBw7wNuHTYxF79TbZhx6maAPpW4diSMa4SZdKkBo2cCi4Chc",
  "key4": "5CzYNBAcZmqtJDF8xeUL5ddGJcZCMDUZZTgnRHrKNbUhjW8RUQLNXxBfgK4XYEFxv4f1u4ZZC5XknHgYoZ7ibQpR",
  "key5": "3qq6tebsjDyVeqFtEE6RvYjPJjZup7qBNrVo6UNsG7hk39YK7Fsy6kCsUipt4TLEAPjFBgj4XAkMVUFX5UpFBnDa",
  "key6": "UpgGm1ExQeZpHRYpSAhvN96pWwhGjxAXvmyD1w6yVnoZzWeMyYmPuXSRruMVXhGZzn6pz1rJTiZQmXmqAVus7eH",
  "key7": "41xt1ejhQEHkjU6Ggge1e4giopwNeke8wSCPxTcLMsHUqcRiJB7BnQwjB4wFvZcwwbLcLkfYLwUvtDknCSkALT8A",
  "key8": "EYZuvQjBAqoYP4Pkc9zqpVayDciopZtWdGysfDq7xCa87kSxacEeSdsTAPYp9LSezFu4cP51ehcj3n2aZyvCe4W",
  "key9": "4MX1NDUwPmMoMXLyF4tXVrpEgUbzZnDRU8K2BUBqTkbY7YGTct21vWenJGSuq3ZUPZYLkVrSXkBTZDD4kQRhBjbG",
  "key10": "28xsxLd1DTHofXoG8tL48zz8LQh1MrBQF5Yv4yEVJLDo7QsLdoveYhVsPN6ZnuWtDgGozFW7EG6eBNFhVaU49DhL",
  "key11": "42RXDn137YBniE4NBcaoH5FJcygY6iyGrfAhmdhJwwjbzdYy2sbcLt9dShkvjah6VSj1cfWDvXbQyYKjFu6XS5yZ",
  "key12": "3qPLtPVm1VRaar2GuvavzwxzbdMHPigg97wsWRhMx2dgFNhB7cqGbkgjXDi4oBTHg6jwiVAsAE3Z3wV9UgfvLzvc",
  "key13": "55XUGG55epb6cdNWsK52sshQnoyonZvxXsFqjR5H2SiUJCxUMuFmcDbjzKMEkLvYeLvm1u8d5XLsiGcq7QQsz1es",
  "key14": "5edUG9Cfxni6XWWztHo75mHudQY1ShJCRgxHCTQ3cxDvH71LuBa3G3n5eHTnukCbT7GU6ruNL1Pmpp7Ni1zw4LpW",
  "key15": "5mgV9QtLp7tTFu9VqneQyhwwTedLwDMD8TazKgvYRAHmMYNYTDEtYbFc5CQWhFyGVqFZVygnFf2GCfRPYLXNseva",
  "key16": "2qQrvNm9vF5gAm47cx8vTTfS4pfkCEnt1kZU1VdMSTNZjDcQHy5maoH4o9w4rP4zyrW5PbqgApLezYXkyQwN8XzV",
  "key17": "DcyKSnWchyoEeGnP4LuFt9UiSVxez1GkL8B6CsWzqAFAT7gEnNF8KuAYCBTBuwC1oeLVESuzaBbUVCaj7ie5Lk8",
  "key18": "4jtsJJ4ZaodxDmKVF9xaaARuLwgbz1EFfCzccFyo6m8gVfvPNwzx6jj44r6Nm4TUcnbJBgoSixeY8PJ318tQprjk",
  "key19": "2uFgB6FTVoXSBiBhzH8VSGuTLwbJgmv7UYS8CPHBxhemxYzWRKNsNrWqUJyRdYS4JDnvVCdzB8sdfRaTX6xoHvFr",
  "key20": "2pnQ4KjvrxFnrdXKjyjAGgYrdo2DqEShCEBnBD29C9MbH19kC4kcimHB4A4HdZ2gAYCQn2ceyKhYx9GrS6iyyDpE",
  "key21": "4VHPDXADruv2rpJzgRkcNPcgXKLWHef7FGFt86nYBAXNMfKP9QCMFapUJ5GiJ6APYh5q9CqG7dzh41t7Lmfkb3pJ",
  "key22": "5ushmXUpZUPRMPjTGfJjadyNNCKoiysj7UcZt143NW2fFJ61qe24LjA1Tcp5FLxkSmcsRH5VcyA3RQKKnkePFN67",
  "key23": "Dg5qGQafXvErEuKq4M9FkJYzZqgzurqEP45kt9zzwDygMh5QMGXKBuewA7Z98aTnZdrhRXum8tn86poPr6DKKn1",
  "key24": "5F8vgwpUWqDVBdXkyvXhhACys28UVwG7yUf5Mksos7yRYnxAC8NibyJfW9kBNoM4vLF1f9M3UvigD3DttYiGxSbv",
  "key25": "2zyA4C5GmA9Njxg2tQeJz4zMy5d5SXV5MxJNB8PwHBMmPf5ygqtxytYMnk6UXbRxRnSEYGEFuNw8u59QHgd1tc1N",
  "key26": "2wGW9mapbHSAyZSf58G5L8xnfQfsa2UPiBLvjSzaNjjqKL1fRWPmrbhAwTia3thpKmLT6aAB6UDAKXZU45cfU5yd",
  "key27": "39XyC3sDm8AXyR8opUfnnVrr1sFDMyyxnw3eUBYcnujPiRzCER8AxYQBL81dU4qkbKHFqMJTzSeXdMgCH6MgjvqK",
  "key28": "3aHsumB33cRFHzVBL79CqCTqbHPseiEqDFb1piVHMkZQGKdPTTuG9XxTVDC5Lr8MtjvWU8xfqWhCWNffChGMbVVS",
  "key29": "2MuSCpd8Y9oxMqcv5zpxS4RuDqEmhBJtba3JMUGPRH9j3zSyehZi6jzCzJfJHQHvQXUbZcsB8C2mByUnEaYRvWXP",
  "key30": "29aHyHxSkXtvUH8Q1vrXNYzUfddFVi2KwKGxfjG6AcnWHvTVL7C8z4WbuD3t7NV8Jk55b4ZY5GWwMidjQevE9Zvo",
  "key31": "5R5LDZ6BsWmhAZeZiQYRmCmf6aKv8GXn8kStB26zvxvjdB8GpfvydHeVp5CezF5ELkGbnGGgyPzt2fLwzajBMUyX",
  "key32": "5RmzdLtmbDULaoLAD7j65bJ8nxA99iSC8VDYFGyfK8VZxSuEqPJYpeJ8kdCFPV9dJmGhZUCoTAiFy5nicFieN6v8",
  "key33": "4kT8x9SP6eikEfaLbBiAVxy8FyMjmQZYFUwCZzw8PhETwbpk2BrH1sjbyvxyLUm6kgu5Z1ZKuPZneK2fsUmVYJ2R",
  "key34": "67k6raKH12aPNtcbSQk7T8DzmwB71ggNVDLUgxAJLFo8uuupd8iJv5tFsjREQnoinEvEDG21YnWY6RDk8MYekZDP",
  "key35": "493Psg66qjHnsRCL6LJttQgSdsXb9aNnAt8bgcx8rYEJq68jppzpiEd4hJvc73cxdb3wJbGeUCK7ZTx8vo8ZDfab",
  "key36": "2pLsc11moeSWkxjyAxJSGJWsKukseQVn3P2ghjuKS4WtkoRGuNig9gHrdi5synbcqLhaFjpBLynq2pqmyCfJKySC",
  "key37": "62R2Pc26fDHi6ddKwedrg821AQ4AVjybjTZrGEYQVENyxuuLr9Axyu4DPLZTfF26BvLdDZGe8kqoHQmCQsYYZoxr",
  "key38": "5kAVSmGVcFFe7H48U4Sd1yTHsD3CbB58HQdLHpF4efxGyNfrdwDcNX7NLw3VDZL3oCmguq75uZzz2fsiuuYBtfs6",
  "key39": "2PommGRdtrj5CHzQscfymg8hnsTDwQVp8WPUSBPkxr8rvnJoisnux2DGxUU3FPraZu1H4uHkQt9zX7Ageo7tR7zk",
  "key40": "5KUYY7xqvfN7GfdPbWkLG5y4K6ZQkThisDV6GyBMcjN5TQeiFusjFfmGCkLZew2bf2YYHynQpSaYtcJ7WhJxrDMN"
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
