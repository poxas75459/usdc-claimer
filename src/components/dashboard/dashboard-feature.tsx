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
    "iAyUGHJxDVfc5M7iX8Y6jC8TMBBZWHDwHXgPRAzi9q2jZMPhxmmhuRuESm436YvYAT4FWWZYiQbVfrnx2vWkhWY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qx7RkgTi62Y5vaZmpRP8DnN3otCJZe7cDrJvq7U6iz6xMrcBKKVTSmUuYHQ2h2FksioCsvs2kNGrAk4uPdjN3ki",
  "key1": "5e6f6neas6jqMctHLeCUb9xJZWGGYgkYfvGgaQi1Ks7mmWBaJGZJc6H1yTHxj37Ukpo6AVihYVgx5XTjJwJ3Mubz",
  "key2": "4HoNVutBY9s7JjjATe3wELtjenkrn9iYs7eXWU6V24dXrjzMRDco7cQVXVciDkiy4YNuM6cKSrQuqHuHXEdx26fP",
  "key3": "3hFxxhoC2JEvMHBPCFo8dwJEg92vbHkBGqZ1NbiFqCX3armZxSzwVdnRdVUX3nxqpfJXGSEBKGQ7tSnjFcHF3iE",
  "key4": "63BfpfYjiTMiqfjdnuKeCKRu6d9SHXSXRJq81J5DWrCfSQKBgQH8Hyd9VF8H2e95J5QgKhgV8hPn2VZZjZkgmd7v",
  "key5": "3883xDnqAxfx81NCcXJp8tkR8SDwmzDGURb4FyKHDEAVUWnoFAV1anzENTLKmDb4MCLaPAhDNGjeVwFPr4EMJc2",
  "key6": "4yfuEzcMDVKN6bY6N5Jdxb5NKmeYdAVxwzSUogNZotbE3AnAPJg7JdrSLdR5Tc8vF3uXLoU83vMrme1SbjgGoS9Z",
  "key7": "3fQQMEcZ79LpJFxeEEvFBQuLQiiYEishbSR9mRkXB2P9ZmNTcfJReskXUjsaviUma9VNu7HLsVtRb3whuTdS9pea",
  "key8": "3GW2WLQoXwNdzibzp3Rd4wTjmDyAXHd7V4vV3s31SRf9naBnu88XF4yv8Eec3MPXziB1qaG9157aTtY354NpkK11",
  "key9": "3fyP6Rj2VjTiiFhGTn8XvKg5usJn6RixjDYVCxXog7FPgwWnQaJUmbDuhpATLBJXTsvv6DHMswejMh8tAr1ABjTG",
  "key10": "3hjmk5ZeeG9ry7Ez9Lqq6vhqDDkZeeUmkJZUGCYNCDynSrY1RHapegERdEf9TEkhy9vDR9zsr77fvP6ABpbkdeXq",
  "key11": "4jNrmqYRptCRp5x2rUnXCQGt5f2LFnZywDcw8PrpfZhkRhaoHZ8RkxfumG2DwUbSrfjDCLud6fLry6B64civJjQw",
  "key12": "2e2VKQfHiHoEum6Xq4h2DxsdBHC5Z22xHqB6TmozBWXTLgawMqC7cLCpT9pApSN1ihePxrXsDKARN3pRCXVo1Kvq",
  "key13": "3Eb9rrCiZCcPSG4sGkDboXwRsDUSHh9VAtcVaXjbgMFunb6TGUHihkqUFGKeqmakyyM8Xq9FZ12qdNmv16KP8NMs",
  "key14": "2jBwd4qpz58STeaYoYjVW922dp72AeFQCQoAo1HE6WWrVoHzPRVmRtSvRG5R5PqBQQnraptt5uB19Dg7uq3jdV9o",
  "key15": "4Xi38U4pQxRohmJERe4JuMxLeRYtroEt2ErAbmPFasYcGrAvKhQ5XuG8tm85VBGEH9qSwQeGLJyxsTPVnJi8fcZC",
  "key16": "3nAr4nLD8tbLdG8ywDSuNgVTxxkynXqcnC3NvubqBKBdqPrvDPijjiHqCqtghU84cpSo23aiy7vNcPfcWQTAivgN",
  "key17": "5Xm6KyywcdxGZwkVquHQTdP2FGHHhNzKJzoMQnuEBptTmuA4bCP1okwnQB8xj4kCXbSw8yJZcsGmoBRHjKRWty3R",
  "key18": "E4h9nnB9n8FW2qUMTyXmRELK6VVZ6f3jAbqHzNbmGrVCsMJbYyVjvhbeA1cbfzMZHwLM3pyksGTg1M1cgGjN9A2",
  "key19": "54jXVjucvrd7PcRAJhMbpwMnj59X7X9KXxK7vcpfkeKw3wkScSLaEHq651jvde1YPtG3azXULeRfqSzxTw8ijDnj",
  "key20": "5qwzGLjhNmSEKYUSjj3Q31Hp5sktvSkZ2QScN8WEuoM1Cgm6TeaZGpBhEWis8jjPwH1HJh7p3r4a43MzSBcqQoL4",
  "key21": "ZwHnAqcjBWtPi1smzwiMo85SmvGK6o8rDbDNPHTsK7LyEK2JGp3nv8CPiaA2T79VVGgPeKynZDCVfM3igieaAy8",
  "key22": "3rNFjwSrn9foS76EBV9MCZBSjXc2JT4WwGcsfoyPY498SNeRkFKmPH2NGG4qC73BLuBqKMLarNy6VhjTwx4d6Vo1",
  "key23": "CxUZkSYYzoA2cqB7N8BU1MmtyCLUtdyFHJznFuWKjUGcAJqGhyHXyomomnS4XdA6StGoteZwve1UvUxky4A9Duh",
  "key24": "2rLHrqD7RrJ2T2TwwSzaJbCoiEg7EKAgKibfHbVvW6WHVcXcG72g5baoGybPJJNBqudEYGncHA4cbdAqta4dfQQo",
  "key25": "3uT1ux2uMQWATDpnGQrrDfj6UNcfxPrPY9JMpUHcnpfzUgULrx2sqyMz9nJLPciNcSnPz8JYQ1AoX29ADj6QkYwj",
  "key26": "4v3grtfgWX1iZUthPnujE4g8guNn9qSVj937bWigydyjY7uWAfyfYtuubgRUSVtSzztJc7qKhAdMZr9Ssgt8b9ay",
  "key27": "4ZAVRpCfvh7WXgvCC3ruvMaKbtjzMZeGHbRBLyQSD5ND744cusa85S2ZFL2ApghnJAYgAh4W6pBbMoHj1SL1X27V",
  "key28": "44BoTfcGbFEaQdpNeW75A2W7JtugdDxaLkPrV1k6Jw9AsZPF78pzAGs1NLtPpFJBaEL6qBa3r8FM5QPuuvkNUQKJ",
  "key29": "5BHbu9BhHuQ5CFbthNDyRfU7pnXzd7JwYucdRbYmZPVmNnsoo2rHoxCSERuzETcoBRko9yyZk3Jayjc1hJ1xXBFu",
  "key30": "5WL3y782G3rA2ALYVrUbrtXnEXfQowjhcLXYJDbSuHoMCvh8tgWgLRK3AQd46K3LLd83wcuGXXmHKc8bET5fmVPU",
  "key31": "37GXZdgoHomkNjznyKg3PueY9jBYJC5hxnsqCmfpWBeLdjqv3qsrsyPfPg8gBmy2PxhQH82MHRDYJJXroQozdd4J",
  "key32": "4gj4LrBwok6XiZwYXEGnwLdsyZyCt47uXrr4iFSmKhLF5aaQf5Ug4P19hq24yiwdHyjXLod2N86iGHodqzRJzGFJ",
  "key33": "61WRUbJyk6L5ZJUrS26LGEg94YbAkobDxH9BKdAQEjk1sQfatsR1kRDxrdS4So93WZ1LRLj8cF5PU2g7vZZfvyyi",
  "key34": "2p6Dkqt8qu4fL7bwFNnsGKJ36VE5giwYPq53cGtGLWgeqMJ5a1MS3d3eZc9DZZDHf2Nq1fBcnMjXScaSzbhfmmAn",
  "key35": "24G2EMdpUoLtR2urqg4N9W37v8jncRAK1zZ8ch29fhhT2heDXLGjHGGzQ5o2KuougMQa99X5yaHR2XuADLZXTyR5",
  "key36": "V9pN8fyMyV7xvrvKwnms4LoCume7h3Zz9b7ACs5FtKhDDquxNC5j27aAz8WkyjKGzHgPzNqwHjomA46YVuooZZZ",
  "key37": "4JZMacn3eRiHGSrhZcYE8ohez9iG6QHdWab7noEEed7uL7YwoBwRgqTf1mszsuPWHA1KNhAfferQuavoXBoiScA9",
  "key38": "5MNtqddRApUm1bdNQTkdhEBMgc9SfUD616qWkRr96AA8UygbDRcZ9gmKATHackKDZ8qLQ7rDNKwQXXMyjqjn8T2F",
  "key39": "5n9spENFdpG1FkAZEG9et9cFrT5Y7PEhKncvuqtKtcBfL3aEmhaztTwSUJPquQHQJZn8CRaVeeAXeHypRMmGdD97"
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
