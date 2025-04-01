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
    "2hqK3hspfFvz27y7koMkhGNHT4AvxyifSsMe9sZx5pFExZJX1kryvtViikZDGdPMwxfcEtVVtdHZxabmwPah5VpC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GcPyWCevEiAkrjerR2Pq5a7FuT6tqkwG3sqn5rT4TgfR7jEECaS5ozzDTPypWcTjkGiGaBqAhn8krgUC3oXoZor",
  "key1": "3HC4EEaLFipx8HNDEkhGFwMCeyvvZy1PJkuvji24NDbAiDzehTCEwnMMo5xN3axqVxnRMaq5yf6Wb4dM3EHtnMPW",
  "key2": "5f3dhyyHkx7AF4RqVttKFa44qb1pqj3xgwGH78W6rX11iCzSGDQFQZgKpSDziGAUyXsMkqut3ahKSYn1Zr5w76Ja",
  "key3": "3bynv34KZXhfkZAUwhboXcAt18zQrTS3j89V7N1XYfZdVrt7aBJKDyFsVyNRfw4YK8EbKUXA934L4HMpZ84vZzh7",
  "key4": "3gyrmoKizbkH6KxQWJwTTmSH1N4BRCCNyuUXeswymDHdxkcABL8QMB6AnnQXgNtpzezeMV9psKSxKU4QF2wdsebD",
  "key5": "qmnVEtMfDHU7mtqcDgSVu3s8wuzUVWiy7ff5NCwhGSJxVLzCP4zBhyTVDcpmMP3A9ZTazzgtDHC7aopqEDcS7GY",
  "key6": "xtzeij8SfojztyJtrBAc3q6ocTH8R4JkPZgXKsbXmCTi3DFynvRLxkP25AWihSnBhwDzsj6LJdd6tHnbXHKFwrd",
  "key7": "28JXxgvHYwkqnnR5Jm5rZPNavKbgaRqpjbPwjCkAe8Urf7hkWr9mz8eRhCdrJT6QTQQfTEpTUA5Da4nSa7ogqL6J",
  "key8": "nX58yNG7KwCeqYUXud3TtnqZYKUnYbVYCSALhRpDyqrvZKohoKpqTDk9mQcDcgkntmhpwvjf3utc287DXjZF4ux",
  "key9": "4GVuD3SaoW2PRAGsb8Su9XNmfXqVtPdHA3rPGrwgXWfVaw9WAM7U99YX4mG5RVtMzsP7vL9QU2qDWMpwwBnBRW5i",
  "key10": "5iFdPGGFSFpzUUcKWJRmKin8FJcZFPyFP3L2goNnd2cs3ZV9bLemSWKi1xosjJGEJYFZAyigZ1wkzJsU4EmtqZB1",
  "key11": "4so9Gh7fewFSzsRzMFuz6jQqNmv4JNc1hCRMWVcDts5TQa1t7w864s3JWdPv7RHYvN2c4W6BPr3fMK1sY5WmLbv8",
  "key12": "2dfwkQ6rq2EvwrZizGu9MiYpVnMexhssYTCk4iwELfC2K7szFUtVbb9GGQqDWVvWKBXav9DK3hJYWpJaPhFnPfAf",
  "key13": "2RfcMcK5ivuPx8Nrg7x8MhmUgL4sBHunY3S9Wrvz93WMF8dVW8JUvtBK9j644sNiro2vZX99ReJkmhsFY18UBGqy",
  "key14": "4JY8dUVfPgf1zUi34LbPoZdjoJeWy69fMCQmPovY3fotZucTcdQxkb9JDBZm26nNp2M71EPY7TedSFzbxTqkpc6J",
  "key15": "2Rn3eppBAnMo2Uu84dqkcbK8TYSBuVEzwLY3zvtjTaCoyScuGPiyZE7z3EfnGCgdVqx2sRKkbKEu69AKAAo5SLAG",
  "key16": "RWuG1FgoJAHSb3Wb9tqU85SZPGEhopgMsjREeXpH2JjNR2toiTwWoqCCK1pcUvn9x6xiahTrR18u9PdouMA2i6J",
  "key17": "iSLxsYD77M4wsMYD7BktdnDdjZrPmMPx4LBJiYDDjgxntvpTUkLieY3Di1NfErS9wSfKfggAqubVnvxXVsiRfrB",
  "key18": "qRavfAeVFHSY9xS62RWQDBb38u3j1uXgcUwtiQDn93zXtiMvLiC7FdAc8i8RbjU3CDWrjitFpFXYhLrsfApEuM3",
  "key19": "5sGnPPrwC7Ynk1euaQX2fwphtHt8GcNnM4828MAKnnAnP9YLq7BxUWkVAMTi13prjG9Gsn9LwYDoHtQAttqmZAMk",
  "key20": "4xjCTTabJvDePwSWZivHvBKhWvJDQ5MYYRUFQyvB5s5TyFCdzDTTQgpFNd3VpPcwWUraEMPdFkez6fiQ1srXJa9Q",
  "key21": "5mP8ikNKA47CqPQJj6ytbv2cNG1udDVUdqfUHBXuGc5cijR39iuUN1hD8oaCDzXfcwrccUmjQqqPvqSp3CmrLxf6",
  "key22": "HZb1E9pG6s7eTAkwo69jtTvR2gDMJmwPkfHfUMwebcD75DQTUhAn6xcZz851Kq8q4yS3MrpoMY81SKCSJ24kFJh",
  "key23": "DXASy5qepo1sq5Ye9nEo7ZyLVKcXAVN1gg45KAxFNMvM5jfcmGqnXRsDnZuLy4ocXiXLyLbPaPBzD6h2rkErvmW",
  "key24": "3PxsQWjbtXcawknunVcb3gWonKwUXeaZASHEhbrcvsghBMuxtLYGxjC9VW5N7DDPtFqsypk2yxA9UXznU1HZxX3Y",
  "key25": "4zsL7mR1icBVEL7LJMoG5Yb3m7vQM6rEEN97Gncx9GgfyXBsZ5yFSoeNKBwbWxssetUc7pj15Yr2AQeFU2xMigNi",
  "key26": "3ACsGMtzWFQFGcYbzCRUuSQYdEpG4LSZdhS7H2PhuHwTim7tSQ44xJjMdcSc5t97okyxpkyfaxy5GzMxYHRHS7Jr",
  "key27": "5ccU2PswDgjhAi1tufEKG29GvdQYJhZgGCKtQBcAWVStFGwmhWiDs3qwXhvnXKU24peSXbcdRicoSJgSpUCiPLJi",
  "key28": "3QPUR7dWJcEMrNx9CKgpCAzRmwKHVwNnuT2T826UCCnGDWCb4iBr4UmqmpmKg1mMwsyrvggjA4m9SnbM6A35Ma3M",
  "key29": "2u75XsbhLzt8mvqP6BA9HmhCKjfxDYUkHenCzFPx2DDfmJkB5aLNiuXfzSjKL7tjzPq2WcAgkJv1KoonYYnqgCFE",
  "key30": "4yRvsULriW87o3o9mDF6BH2Kt4WhVd4RbpYc3T4g3MZ8xmsso8mSuYFbJCxjEWW1zkm76kpwFUfR5iLcfQn9bN3p",
  "key31": "5Db5tAjzL7sxTadVutWe7RT7adjqKh32ZF9j2xxddoY1mvLvCJ2WYTjs5Zw94uQSvGdnmLB5vBdxTo2TRxemogQy",
  "key32": "3cx146PJvAAnMcT6euxGW9VXgDN57E9kaAZRE4i7JtWVbrThacdFgDAbbgLnvCnQHPhbQvWVWgj2QQgry36kegHG",
  "key33": "4hmdkUa1zmRUwpaxVrj7YVWBUWGkwy6nygDZPTCVgMaTTRHiMawbejqRYEAoJ9DpLvE1cRccuxH318HaA1EJByvu",
  "key34": "352gVTVqbLHVRd8WKevwZvnnhf1rbjcUhHQoquZExDHtbJXzk4udra561B4Yduo1oA8sRBxSeHWiD6FaTs78cqwe",
  "key35": "28eTHrzBa7bLbmqnG1kqTqYvLEZS7zNnHqFdNoN9cUNQVBx5rLjKF7u6ZFYfvoGEbv6dr4RnNVvCXnXjuMx5x3w9"
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
