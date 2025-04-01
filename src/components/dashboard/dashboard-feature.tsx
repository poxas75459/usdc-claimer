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
    "3ZBq1Kw2iTvQVbmCE4Z7G7xeC9RWuxjri7AdXujMSULT5MDTt64WUyTaXnnHDstLmtiCakd86yjCE7uETFQxuGnN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rWpnzKyjUKTZyA977fSDWnFKSbb8Vr56wrhEmgES8wMm9dwCK8Pwwg283yqkNeSEUQ8vPtujFJdyhVSszZtdEQL",
  "key1": "3zyZ67GXF9hYG4dr9kqX8H38iRPQn4hZDyAWCmovgrikFn8R8FXzpgr7pXM3YvbjrLbHqUxBrz2K1LshYM9y5EPN",
  "key2": "4VQzAJq4ZD6qBGdynskyzgYkyHYY5fVLouWgCjf8tijBpp4y2HKi69UsPpKWK1REwafwnQXJcXQV5Mb28qkLjbVG",
  "key3": "4ZHDQxV8suqQH4BHhUejnhVYSQ7gL9jyafKmyoG6tDHbbsLbkRv4LX1aoxDjRYR2mvDwPtfbzT5CiZAqN3Uf3QdY",
  "key4": "4oaBHvRMHs2qJZ4kLHt2M3ZHoSZBVFpsKnEdpx1tZbFwQoK9cps8aU9KfnvKQ7FaguxNPi4hKuXBA7rDkL1fuWnc",
  "key5": "3x5fMv2h5WWMHcMB7pqQsayAbbtPbjnn1b2ZGeAX2re4kvT8Xu1L4MPA17Zdw3cf45iEiVYvcTGNBvAfkJYwZNW7",
  "key6": "J1QV6tDfSzRKrCTukrH38BjW2v1odDYMBzim6EoQxj1p1GGeYRrpB7L4P6SM7m9D61dfuARfbTwGXRbKG7ifQSW",
  "key7": "hrpfntRAC6YywJuwyWZKs56BuEikRWBDPjKGEZ4scKpy8bkMBRvCimucDoQmkzKoDy5TUSJkvXF6pimeQhUjw26",
  "key8": "5czxvdKL4XZXWmmLe1qsF2B7exMPfj5TnPD5Z48zVTc8aigeSXy59ZdnKopySeVwFYMiMYfxhsSZt9HD22n7FDU2",
  "key9": "3kqL6eh5AcvEbHa1P6Vz5sAbiZQD79YbA1AwfRj7Dfah2yVpS7ZqpfWtom7dv6r3wdeW2vzZDP15MfCbTi1fgK3a",
  "key10": "4LsPCZ8ZvsKxkzGG69KHRNiYSMnuMkNPZtjeRRYFW5WJrtLXgnt5PQUhgwLB6Lfb4B2sZbzbU2fWgTDyL8QtCksj",
  "key11": "5DrXwtkfA6ytXKQebxXc8VbsJW8jn7qN632as9m1XvCcc4FfYYr5xuEJ4KbVmi8SSLWV5pys6cqfvZAUDjiQZoJk",
  "key12": "5cuiKv91WAEioBmW9nF8n6MdYCoKgC7uG2gpQajU4Tv6HPWAFxJQoEri1rBY4wzLuPBgtoimZmFSUUypaWSow1nH",
  "key13": "5zMQvJs1BJstj3U8MnLW36vVvCidhjd9aSkyzWe2YrGzJAkx4kv3khUQZdp56MNsK45B1aT72s5vVVjEbPZiWP26",
  "key14": "33N7ryuMky95XQSa2hRThea35rNdQDv72XquadH2ewrnnCP1v5qf2B4TfZJmyxtYaKMXXr8wyTzwdxM9xnqnYghX",
  "key15": "4QmuPiV12ZJfzQKoXbG14NTVyznhq5XxENwLwv4xxfWQ1iek7CaXEsFkNzXi2WgW1eeDX7wM4LHe1FY4ahM36aMQ",
  "key16": "5STmXkpxrbN5ipp9vEENWvfivVcGwK1ao2DXmBHm9qtKqQiyLxFrE4dT6w4QB4AG6Qkn7fnQCKNaJih34GSG5fit",
  "key17": "5sQqpQRueSBxwXZfpHyx6yHhZDLUsekFN5ggMuxSpwV8d8w4nB9Gci7qvutpm7oNBDubAedUoRTpStmpkaWn8CrB",
  "key18": "248iw7uE6hTRj9EaiJMDEMVhrTZfuS2FPnWC1RPLxFz8wNJDyifTxzBKbsKuY8k1iyD9XEpm6MBAy92hSHt2YgRJ",
  "key19": "27xHK5CLpZ2jkuWpNVafAiuK7sTv78PkLt5Nu5QynF9U9peHTjTJcETNQ2T9catbeNRZambJsQGvAuZyxff4LLQX",
  "key20": "66uP65fQiVTMNiCvM1ZRUTxRxbk56fpjnac2FSFE6mVichX3m2j2dwJfTyqjeomoVgMWhcvPsLAHiWk5kEQoVJVo",
  "key21": "3tP3EEbGt29dF3UKWAKCGa3mBzN8hXvKc6R8CCeBNFz62HKYLzhdN5rqae79dEPyUG7ZcQZ8ejBujTfKHLcS76Uk",
  "key22": "56jjxoxC7Y7QqDgHSYNBLE9GP5a3KBkRrk2LJXGYDSzhHf9uRPYmZfGTTtAe6D45UECtmG4EdS28dVH4U8WjhpWF",
  "key23": "24JsEN2iLDNP27xczUWbC5YQmByQmGjazBqhyiQhHVi1EL34nhYnbkmJP53NPmU27XHrSX6Zu1BCv9MPxQK3i64J",
  "key24": "2kFAVKnPxa2npzBCGtvGqogP8pM5dW87c6EF6uEiJ6gN8kr4XZ3tBmexpmsHpsAQZqSVWTTfdr3xK9BLQ9GJb2YJ",
  "key25": "3TdA4AuNFHCceNnzPhuShefVeSSF9aFjj4hvoTFHpNDcDddBGZhieiAGQK7aDqBaG34to1fMpeVwmCUVUCJ8mPLU",
  "key26": "4z3BaXituQTruqNzTwgouZEPBRjY3EmoRWM6n9SQB7Y1JsdhMoCVQvdQ6z1rTzmNGQvhni24n2JXf2ThfoKQd1Xc",
  "key27": "3NpDUGCL6hukzn2GJcFzUZyGSoY6HqUMZXWJNXNRayf3GNRMY8VUeiNddEcFEtsPy7XHZmy6yPEmFkMwZSq4a8cX",
  "key28": "4fdLox9ypVzRSpXcKEcdEF7fKqtA2jwweznKUXxf3YxW1b2EuqACoYmqBb72DKgn2s69DTfzMcHwH7DNgsAvfarH",
  "key29": "2mwMwWUmWpg277p3f6fgsQ3dMVniZDWd25xaBGZtZDwMdjaffVdhE4HKR55VKajwQBvMDExx9B4BFAW6V7x198Us",
  "key30": "3FoAHx4x7KVmA3WCoPvCDouAT6Tbmsa5gmFWckYxFnYnXN3ea28b7BbEQSsAkCrbbvffC4w1uJvNU2n8zQTh1CH9",
  "key31": "3CwKQ3CxAtfWa9TbDsAJThTZpfHRGu4D7Lhqwv6d7QCNbLeRiSgg5tmFxFarmjZ4snosBDiWokqdyjNMro7BtmCQ",
  "key32": "3F5qBPE7dmkur6UCdbNMqfwxmZ8EfSY66UpWkuRLjbTXjNFajotc6GJj8JUh5qoQoL5j8LXYsue4NnGdbkgSN1hs",
  "key33": "KpCm9mAaxijFr2vUtoJsAQP2aGdFognrkij84UiAsmw2rtbrKCveKbXMJePfBh3eseLbY3P42RempQgyjtRuZhM",
  "key34": "5gMnMjR4qLj55UDsjpKNL7jPXEzneKDM7AoMRE684D5rA79UoBC1r186fdWQDjbcXMaG6bQqeZh8ypQvxwHUB1Ak",
  "key35": "4BRKHy7QSmP171L7gD2S68YhrUefLhqycXDR46DgsLmqHPN7cGGbBszh6NNAtGTVWvsLP3sGRizPXQqX2KVjCyX9",
  "key36": "GwUXH4EqJx2dZB1P7Yp7VVm4JKnbZoCVRn1iCrZx8F97akVnsoQS9SVtCGSnHKFiA6R2vjr4AWgJNxP56uPcRcq",
  "key37": "5iHg3F8MVE6vgo7q877mfiWXV6rFec1VU5Ca7xjRbNvwc55t1DagR9QemFfYwSRzhtdJLmmtLdh8VFLaGRhaHmdR"
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
