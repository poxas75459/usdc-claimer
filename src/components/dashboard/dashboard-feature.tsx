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
    "2QuoATHmmyVFgzTpHRHJAgxjdx13CKuRjwikrZfpdFnPjbkhR6Bs6e3b6YE1syRbhdutVTPaAWGbHS32q8dbVMNq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bwHfjDcBqRMimS4iouLpYykX9Sh6XtBQuMrNNtE9zdhjnYLY1qFcTmCgy4Kk8RoPkUz6ZMuEMWvf18F2uxHLucj",
  "key1": "aMeYfZjheCFmoMficA8vUqe9jxv6bNCxbL8DF8MJ5t6knnNhuXjZX4XYeUHmgz71QjLoGLLwRxNDqxL41vt5SSA",
  "key2": "4oi2iMjhvatNv3Gxq2ZS3jpf4GadA4mfRHJpkvuP9kPH2teNd71VFGSrFmtjzH6yGh2mWtJgpakZ5rnCZRdd778k",
  "key3": "mseqQYXCikeiVsCFdBSVeAJrabvieKv3evRZc1cfaC2gtxV99VncQpkSz4D9CdhhHFy2NQhEqs3ciEcp4uvZ1xF",
  "key4": "2iB7gBco11sKVvnmBbXzHS96bGGR3xsDpzdg1ACVcrxVRYVxzkSNafNRWDLR3iZA7Jgt54DaW6SkgnxFtw3MofBj",
  "key5": "4oMbybpbmaZF2YPd4PWjgLCoJVDxFQ8AnLkniJ9cfreA59dYcLSfMQB5AVB1HjTwNooRqErYwx9RR4UfDTE83rAV",
  "key6": "43R6pZHGm4CdHoRB9WaPbiYPfZC18QxuNDP4kL8PemRUfRjRSgLga7RAdWYZQGyHJn866K3wGNiBvCxawWGbtEhJ",
  "key7": "24npkeMjoUznyLzyF4gYVHeL7ka5VdYS7xRSUWq1pkHTYxWb8ekQYVcnx5razoyd2riW4LKemqMtK1kN7TCQpw6T",
  "key8": "3o59VkBH9iRDd2NYwWPnC8wgBv28yGLbz6bRGh6dPCesAsQY1wigNXh7G6fsrfgBSiaazLyFC3xcqf6hKMLVJzf8",
  "key9": "jpY1KmP8VYhaVMa2PWo4nGJgtYhenjRP1fhEVxBGx8SLsXJijVnys4ZAeyeaqUDQ7nfcn4FmBEbc9HwmXdiLVp1",
  "key10": "4ZtXFKXYYxHHVzZkrWnCgQc9kSQaGniZtsmoRR3gZr7wsCzPH7dGVnCRbJx8a3MkbnwUbzAeAC1HWVL9CRpEtuHo",
  "key11": "5QqtJHFmSk2wRDTWeTaN1xgdWkQMEjnD54AYq7xeDAKmHEAY54V1dhVeSos4BhKaHbDvHBTpZxDkGM7kYanNZTYk",
  "key12": "4mVzApAQ6jY1caUeJPwvB4bFrycw3Vo5WD2qHh3kLeRnwmMaGFF5kyJgr4LPFVhcCmxZqG3aYiS3h2jsXdv8Xfz5",
  "key13": "xUJR8RQjVFm8sgAjRyR9sgDfNf7p5XMBTZAc4SEFFX5mM9VmAMDjrkKKp8QpezjUcmFv5qoJUBsf4fM5xLLAjA1",
  "key14": "sQMk8ytZWg915bUWhYY3JderiNRTiRiJbBa4H4ufPqnLwBuw8vHQDzMyMubdEmLRdmtYD1cHQmmEwASkYpDmBob",
  "key15": "5i6Ge52m4KcVq2YjBCgkHo2DKb9gLWmg7QvwCCkfvmixzDsgP91f5AgeYv4QJDAXtWVMK9yVifc3BMVmJr4pfn5Z",
  "key16": "58W5VFkzFMdctJNZh4n4VXp3d5FKMc9BRmHaSXeshFxxY7WxYXeWMtXoYMFDbETZAk8XrnJu5dYuTvLAT3GWVPpD",
  "key17": "3bijMfQFG9pf52LHMio25pSQWRLzZoTwyFL8Cn1jLh8s28tXwjJifr5C2SLKmUkyQmh3wLVEAbJkQCRbX2BjxfkR",
  "key18": "4ZUHEbpfwLgotBB96CLVGDBs6ShP9fqeYYvSMfQ8tzN5AN78Qpie7UrAVyshoBbHPdFHj3AvCoxBX1qZdYC5kf92",
  "key19": "3YhmbXoTT1TKff5czwPaDzD9YH1bkzUL1iAorovRPFdvipNyZDLM6Ud9bbDWzSS2MnZhzq2GpDoQPCXwrucgxKuL",
  "key20": "6EEBkV5cr2Bkknx1FZAwr9LFYwfJKXsN3SJoqMzo4jEShBRsZLm77bH9CaeDhdMwB5ddyajYhs9PvwbGvXKEbS6",
  "key21": "58UxYXtJjDi6zWxyng9NkqCdo29y9KajPXZmBhWsMB6ia39qNKWu8gqfpgbRZEtoFhr76oDKuwzz8YLQdSKbTMCX",
  "key22": "93nYiuRHZvo7TvM44gPFzKFuUuaa7Rm2yYGrKiTCCHsRwAAbE6nChqo1VgApfim52hErj6F54nyCroqd78SWzeA",
  "key23": "CbEhkpy88B7ijFS4L2y3qAXsgebt2FFsP2m8MCUonGSyEr5N1SnupXMe3BuB1owgkjweJYFQMY9tY6ytRJrDDSm",
  "key24": "5m521SVZVxMrKX6FGgsYV97hwRrV4qWgyXzhDPCmWJo1SbNGxCYP9wf7gKMN6T1hyxXWDK9pL6Wh9Znq8mwFVXeF",
  "key25": "2fszjgVrYQgQzeNDjA6RiVT7PEptu7dq4DBko74v4Vxr7fbAJivCRoyMfZQ6FCRSqjTSYxTuhPvrn3nfzmniJkqW",
  "key26": "54ZxcEUvA3rNs5xXrWxfspdzLfwojxLZJDkY61EZBowmn8TSspDGZpgDm4dvwvaegxKST4TLdc6qQn7aaqGUKYuf",
  "key27": "4o1qRjfjiFTGQLr7baAJftAkzpyyVCoS6FJNCRHijtFLZ3YB5sjeW1b6i1tQRUVwDu1F3PJiyxZFK8H1HeefBaW5",
  "key28": "21vstfAjhVe5ujEVXHuvVSmiqGGy7dU7Hu6EnfYDGuYmjmhqpTE7qBdq5MuTwnAybhyxrg8uTVTuDPYMqJyHFeYH",
  "key29": "3Uf4cCsKK3Ai3b91A9rcF2ogN2HJK4XtPxpQMWpeAswTZGS6WdSJ5jBgPQD56wsKJj7vhSMCdfBRMinoqXo9EN4n",
  "key30": "38x1A6KtzVwszheyJ3qvb6JQdQWuwPbUR3NFP8jwnRLSGwzFbaTDpF4rBrVdaaLPjFYBES3CnZwwBBEjjv1gPSti",
  "key31": "3wGgasTwTVx8XG7s4DmzUzxvXcEakdW7Rq2RvEqWUfH2DrAj1WhT4tRY52K8Vyra9B2kv1ge6hbRSoKgwNJf2BA9",
  "key32": "4LgEjHftnxkD8jCmFGygSMWv9FungrtFnACWsPU75PYdjFffPxR8efYPpJfoNnaEBi57S5W4i4RfQarYE6uAtLkJ",
  "key33": "4imngD5EHgMC3ox5DcFyXAcTh1vUBeXQ3imt7W8jdbJV7mEXv93Ti1zMgNrs5cU2uXE79Yuiqc7qBxqktNCBs3S7",
  "key34": "4bNWCspz7BQyUtak522BGFJSRUi5vgfnDBU7gNXBv81aNUeJspBs5sHZT56JYsiGZs3vYSGCrUN31hbDtgAFtn8o",
  "key35": "615H3KJkeZYSFspZtxW4DNUYzyvpLPMQHzTK6fg3qY4HgRJCxPu6qGWofwWY9Rw7DWenFZ1y3p1pYtBx44mtkZpd",
  "key36": "2MuEWTuu18DbLmNbUXQmMpDLw4ZsABcM3MxuuPuCNmPgYbiDBBRtiExdEiT1y7FNxPfHHfXxNBy17fMGmt2nhFwp",
  "key37": "29CTbxR1V8TXDKt71qe7E2UNeyzqVQeTervzgrFfgubEwewNdq5vwPkMW4EpRFBJohACFau8xpEixjXvEq5eRzcQ",
  "key38": "5wroXBvTyvnMsukPToTQcEsbsc43JqVX1NU8uQr8LY9CmvNo5WNuEw9owdsGubdmDERKNpEUTN33Z4UpnE988RNo",
  "key39": "4DiJPZFtG6jo3RDdEmWUZv2ar6oZhZZHtRExb6UBER5rqpPettAeTZ6vLs5Z2syWdCR8exdewU8bHYHhz8VZZGpm",
  "key40": "47aQUB68fD6AApJMBjSNt4HGsJfnZGVwaWmkP2uXmm5Y12XtrdrxiPhmK2ng6n5q9SS41BVEmrGiHJreo36aKUyr",
  "key41": "2RMX1MDzHNPvVvf5pa1GsFzwmvi98rHuBS2dEU73x8BSNnqUhsQHUdyvoVNmMRW9z9fq7qA1TEPQ7jA4xegt6eGt",
  "key42": "4jWAZST9oRdYYf1tS3tY5aqRUP4gW97YH3Gd9PuQ96q8vyZqDUFw58diCdkMpL8Vhkbeo1EeAC4xZm6GFVQGeRA",
  "key43": "2SqVx8Vi3tU8k56ammtbcSq7FbYcdVixpTnQp1ZH7jgc8qonkW3xGrP1oxEkkAuf9LGWj46pVNeKCZDuhbTpe7mr"
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
