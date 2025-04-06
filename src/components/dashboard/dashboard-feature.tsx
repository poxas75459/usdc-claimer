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
    "Wb6JncWnZuBGM8pw2YAZHAsu9ABa39vZWpigG2SzYHhSW3SgKtjmo1gVj3Zy5WVgpSmGKQp5N1TGkxNoZQyuSPV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fJ1dtzSdmeWVvTid3Z8yNAvDZMkeKbKweWbXe1UhpCE2iNArza2ywXkgGtYPeVmi345LWr6hRhzBnjXPR4f9h5G",
  "key1": "65bMPimjBb9Maw7faZbbEn5h54GAy8V5Y7fX6DmGEVSgVwumyx9NcsRxM3kvmRYkpL7BjJrbRtWN88zh4XgbFnFA",
  "key2": "2qjuyfEpYPezeoHveECUKCKzBxFiEDCiSLjv9VjMzNzTgHDP5ue4ovtBjp6td8ciBRXMfmA4pD1uveajnufHTWFK",
  "key3": "5LhpyKA3wCkZ7SAEb1gUKXTei8JhEkAD3e3ZWiVPG1Vdwcj5GYKpzDb7FfgSX5ZVuCEEP2Na5D6sxhKSgK7uYe1h",
  "key4": "3m1JucyKCYXkrLERKpAD1BTqkCy9Hai4ZaXmZJKSc3gG6sBzhTm8v147VNVUenhmH3TZJLJBt9w3QEbsWmCucNfS",
  "key5": "BUb1WeowbCBzws3WmJGiHY6ceSfN4uFoUMqdmwptM5R5Lczg9HMibqXhj6ukeyuxUaAEGqRKAmU6rMK5QuECfJg",
  "key6": "3RZGvAds62F7TyJHA59vLqCcHzBRJR25ZWfiLEPnk5ZNHYnA9P2EVQx8GNji6CAbPSMt9av3yyX1baBPNdjCceoi",
  "key7": "65S5McUhtD3DrmULXkQSQk3VpHishwMXzYcmEWdupaV3uvPxUV12ws1kTGkvUVD9k3s2ppud88NkKycisMTkdZGx",
  "key8": "4aibiu4FDFUsyx6dXxJfif4C5oCZFZeYjFY4UDRU8MhHEA9YeRZaJKZrczySw4TaFKrFfbZKHgzWWxZaDnZarQvX",
  "key9": "4K9B9pcStTY9Xw6gojqMcjCeBsnP1SkPxatfhd5Xw3YEQfPNpxZ21cTCA1cpE2Gav7dkL6btRqYCRFdJeednKnqp",
  "key10": "28VCCgq2iPz1hL7AQqjaV2sC46fgXeJjvit4NKM5Tr5mnjC3KRGob6tLhFPTLGboxZzWTmZaix9kibKKwtZZvGoM",
  "key11": "ntaBoPi5vHZra9kz9C9KbY7d1An4UPyyctzfodXKPfwuuwPTvG1G3e7Aqwn79VK8GFbcQbirV8MBrpxq5158531",
  "key12": "36TdCwdSfyXspknU9emqaixHQQHRmCHh3HKXyP4MTqZLZo93W9VXJ8F3Tx1m8Wd36JG3z9Qtm85L2Q4q39tQFMwY",
  "key13": "63uVvFWWQRmxqrVVjoFX1nVzWoPPUCCBtXkVvRJfZ1ZNb94692Er2aqS6UpsKkAfyQU74ATx1gkSyDZWURPNuCSp",
  "key14": "3HzcrDUT7TQTQqLq1icApm2HVxohD2msirsq5hivSsnKkqqkcp7CURSCH3e8SLhjQSXd5jWisDxNvnd2gcsAyiQ8",
  "key15": "3wwQqmVTKT4WrWan1qMAxmXwu6rqDhD1HytkCeQcmN478DSjE6sdE9ZvBDPvJpZf8aRFguUsykzhBPXAk6DfSrtz",
  "key16": "2ewm2eD2cc9g9uWkM4FGcFq88WwLDVJKvAQcGzjvCeyCKvD2kbiDVTdL4PxyiqMkHo29LQPCxm5HqRN4qcpREje9",
  "key17": "L9Zrc54HZkZ6eb6NaEZcgHpnS49zNBk3uqRzKAXQoQiUqj9AHiGPhzxu3gY4YHccPsRTzTBaaDbPgP8eVc14H53",
  "key18": "5z3N5zUTuwfjoZ48tLHYi5N3mteyAyT6xJioFFaikH8YBTttQPykhbUGmyyXMYj5c1io3B8Rtev7NHJpEnosGy9n",
  "key19": "2kbQZtZFu2oNEijwh4dumgsh3BCMzAhsPL23kCHD7KHPkFYu62QpMCgc8yu9iBsyyGqFPiTsitLhuSQ1NLAujwZV",
  "key20": "GHVVLeFUzQzKRviQPjpcyKqgco4WRPZXacCaJXbWAMP2pvY1opvSP5GJfnC34jguzVPrt5qQTHPZsRe4XXudHcU",
  "key21": "VRW17721vui81YiKZxkAx1KwiYCKYZNN3KMZoLDNt3xSJRBe6cygQfposqJN4tDtCzagEf4wjjZ4cc7gGrbTh3q",
  "key22": "4XBzggEmYTCRc79NTAwGmaN39443D53RBpJryfCmrEMbZT9JBHNpAHu4yLpDdFcbtAb6uKUZjPtm8N9pADEyC58m",
  "key23": "4zrBzsYBeNvpoGgayQgnRCMKHLSs6Q5XTEbkkk9K5XZDCm47UvkchLVm5hxsjeH5RePD11XEZLCHGzghsEdNDADc",
  "key24": "uckPdhSYSVmpp28HNXsdWk6Xg1Jci14jFqKeLu4ezFYwGFuqcJYmJKcS9uox1N5iBknieC4ydccQN44RYy7injp",
  "key25": "4LTkUpdfpBCSp9DUH1ksLLCdxjNKK3QCDkGazSK8Wm1niwe8mx6ZWYrAxTyqJCkpr63Y6eXLs69RuY6mWYHsRxNJ",
  "key26": "5BrFqgDP2pM252MHPYCxfKrk36PCgs8aexwP8pBwLG5NLhePzrvuehsEGETHeRxidKsybANQ4zmGzC8Cu649ALXG",
  "key27": "3FGBPx4i5ty5xo4hZ8kdCymddEdpRQUypZX2ZMZxCmQd5iZudQNopwK4dPDRALw8xKM6AHWuWNTb6BiaHcxiQ3Ud",
  "key28": "4CQmfL35U3BF5nbGyhsNkoCV8QrWw8S9qNASMQQmrxgwvvcM9ZxgSpgU173Dtcdzc8WBEJzH6YpitWo5GakWerVP",
  "key29": "44LfeTAzvQj9c8HJcPJEKHJWAVQyo1Kos2nH2ZaaHt4b9tmgsQCkDwHtJt1eR45ShxBtDdW2ajHDCMGfzi7aFAr2",
  "key30": "5icWQuHSu7d1bqZMUZWFMMez5X1Q7QQEDrNMWMCRb9mDHRj7P4bNvefg5edVfeWAb6Gs3BexpxWz6KwiHvCUR1Aw",
  "key31": "2QebmvCrodtu6mHxi68UgN4Xk5ig2Wuc9kpRTkmaSJ9HgvifTgKHRY5zeCZ32SaZ5qKCKirwfUYKcF9PH46tDnNf",
  "key32": "3SBVsqLSJFZ3mtAj5PhUHxtstBGUeU4i8G8ATVsger4YLSaxUJWiAsJmKHidxGTGwLxpomrkeRwCMRKNvYBAMHgC",
  "key33": "4SKD4DeYMkLLfgoAPHeVaCFMNKwAGRJt5Esv4Zbq9u3pQmwo1NPtRvodU7H6gYLb5KFxNyZjbeAFn94aZSz3Gtx5",
  "key34": "2pAWFtgfT58wtXPTTRAVBFEKvFfWrC18Kc5AxK798NgxtLExzKmrtk3KD1HXq8r1XgFBmBQJ1oxAiVXaBXYqkK4Z",
  "key35": "2LYDHSb6nbsAcAhPnCifdrLEgMq5zqTrQaxHBM1tCHM5c9VHVTqLJ2iDWcjvu3KkD6UoHLRTuePytCbsF7K5z5Je",
  "key36": "jg8XqW6dmtndKmiLcxssphuEaQKuHTDn1DWnmZZeVddjshPQ7weoH57ReeSGpVyuVZRjhNaRnkqMTTyY73KHf3M",
  "key37": "2JKQhn75gYHQuwddbFX7ce68FCuvZRcXH51zF2Wkej5m55ZsLZwRbGAx9uiXfFckesQr9osav8xb4AE3MErfBpD5",
  "key38": "2fKLKHv5fbMBBqcNCndRt2djpq7tHs5iXRbkh2GcuD7hjxpPCp8YtguC6HSXheXpMJ7mxCHjr7pqb8uvPNU2WW2j",
  "key39": "3FZHb9Xg8W9bSSRQ8fLuQEdEzHvichYL3VACYHwnpzQMXzUaXscLRD9oNpo23YW6t8Ejf85oa7EMciytNrKkLHPZ",
  "key40": "5UFa1Cn5a2jQFHWGFKC1cVgHfTrSXti3sP7mTz9FNS5NC7b9VFWYWxioAacNZhPBMnDFaDHrGKR5iYAgWw1aJCRQ",
  "key41": "3D1DVNcYY1ex3wf9wqz1ysji7XXHxPBZhxnHpryG7hrW78dsuKkqUzapgQpWVyt2W4S1AK4W9cZ3et1GRaaV5zdi",
  "key42": "5cyJPEU4jwJJG7ZAejLUjM6GkF51qdwhWNeWN5xaaRgSQYycfP45pJ3YsmwaJxLfUNda6QhjZjt5TiSPWRmcv2sw",
  "key43": "5hbDkZGmfuGNZTCHneUarXdgFSeB47Uw6jYd5LH5KUvfXkhBAPdJFTzZ2XTHhpfeQPoYzUfVeCLpZLTcJWqUDKap",
  "key44": "4giBe9JVaAD9oZQ7ry2wv69VAX6xTWixVwbDQrm2v2N36dPGAtqu9KGzbyzJmXhgRdZNxbM87Q4kELPXHYKAQh7p",
  "key45": "3gfH8pcs3jDQBbKNAbcYmXLctTDphGzAXyMZEh9aDxdUf2yyFpWLwAgv8Z9cFxWNeAgnhk45Rg3FgfsvWARdrTyi"
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
