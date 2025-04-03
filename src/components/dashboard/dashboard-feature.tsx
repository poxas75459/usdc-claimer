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
    "3T1LeAEsWDWhrbaN63Ma4u3Au336RtEEKGAw25L4CPQBvTN2yxAG1tvAS6bFvf5Vi7mjMvLamxabJUdArQJEzhFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A5Rf8sSR6zmFZ6hjZquTBoWPsWYyZ1RhPmxES9kcWDQfgU8gZcnapJC56GRzELzVJMGkxjjBnijmXqMyj8rZimK",
  "key1": "58Q22v3dxobUCdiAmmT3yb3h521yX5UFVPd5YxF5nCNXF6pf95xE6h6i9yiKBCYQHjmzkVfswaxmjd1u4KR6WooM",
  "key2": "5hxzGVBnbZyyAen1jUEPzaC6AfAb1zzCpjg2zCumuTHj9dAZHJj9VRTmvx3bfChdoz7K1yde3XnPRq3JFqfPqvtD",
  "key3": "58ycgCPUeGoFEFG2TeYQkyo9P4U42CDMa3ts5GmnPeH7XdNrmx1Ct6NhPT4Wa3BgYGt7MTtN7wCfYAEwhitiMGze",
  "key4": "2B52h2TiZLooSgiTXyzqpCqyJ7orwD4UxJ4zdoWW3fxFyoTFEGSbYH4n47SsBa86tzfwQD349zmePyCw16bpRv53",
  "key5": "8GoX4zQKZ2o1e843kt5GoCwGaWCVbbFxz94dM1UDD2V52a9a854qzo4QBPweBU1NhbqAShnARESiLQuWJed3NpW",
  "key6": "4T1H5k8UhxrAUKrZfa2cs2ZTPUh4PjrH8rGacbMgSifQTfafGknCA78qRUJ1Hj3WEv9Jr4j8wVKinLqStwvU16VB",
  "key7": "5ptxKnEwV19GyEfcp1u1HHmHwzZbL79i99xkNJLcoyR1jWzAyS2AFjYdSLurSFQYPEf6toHPUG5vJL49TMzMNGdm",
  "key8": "58aztcPv4ifrPT9rCVzfyH1EXJVj3RCeqtvoQoazHpuFtAkJhmRexkpM6o2P4936GDFfJfUxCD6PyWArdJ5RSgJb",
  "key9": "2CHxw9RZxqn5yg46NcPLxnwnE3nx9bzw46Uwyz6pTsuz26d9kqM8e2iJZ4tk5XLWJY7e6xFhBeThcDKkLpmmBixg",
  "key10": "4XUqPPkSRbvq9JQ1LwVWtqcbY5Aei2Gz1qR4Y1QGDvtMmfJv5QDkKYvTapJrSpmQ6uVgjBUmodpmnxmC2bXnGMqR",
  "key11": "4v1Mh81LjyGKynEdhopdnMMbcq81aVpXtgJpnRFqvUKAiSCQPsoZUK5yenKfEQqSBSXjmNPV5BaisXeqzPmz8Vw6",
  "key12": "XWKurNgwRnJTgwuS4RwyymVeYisacadd95Mm2uZLiWXgJ2wANd3H2QqwkU8thkdXixYHUVcw4xwcs9NcYcrHJAM",
  "key13": "2JoSkE8dhAg434mkh1P7RCtu8X2R8Pp3oD2QH647LwrcRJNpbtwfFwtjugPeV6vdpNnUnb43JG4pEJ2ohV4UPsQc",
  "key14": "5ykxwEWLftRrSxpBNWXWuHnuYYhaRFcq7oZonGCFTkFgJPDvViUTxZmkYrE8fir9cDxant4QC6KSzQu52oRNnsN",
  "key15": "4Tha86Pob9MubUG2QBBbBiAPLJ48CaSiRcC3Bg6udhZDUaot9yAUDBixKGbBbz2ivrLaoJgQXT8qC5Lf4rxQng9u",
  "key16": "2BadbGDHb2xehHvhYHhEZFWWNe8fcWnPkKZ3FJUrDRGn8jEwKyMqejH1TbyyengnELfL5B857muTKTJMBtkc8Uhr",
  "key17": "324Jcjo2nZdgT8Y3pZE2jv7mGpqS9VrpUtDajTXzZrsm87ufVUaCVpJ2iWHpNCbB5SvvJ9A3Ckhqk3JGCSBV2Jnh",
  "key18": "35NFCc9fe5GFxdsgvw75RNR7xJApBdkAYUq165tzfNvkBKjVg3yVt4HKtuK62wtUWfG8bcWAA4sQSDTuC8avkLLx",
  "key19": "5rxheq8quaXD3Fy3uHMmYcGbb1zqvmrxzEwZReGDPAJw83B3nMzz2Cbzw415WMUNRnzPEHAVwLtmDciMrPhBWfgN",
  "key20": "5xK7UBEd4hwDqpmodWKKozUHpY45gqS3T9cTgJF7iNuJ8UVHZnSVNRLd35xTWmjAdYo1FuSzu39AwrdDhyWwCU6q",
  "key21": "2NfYXxnYzJPnkMh83bUFYti9mDgoDZqrC5Hxu9Ma5QkgoosVzGY6cftyBt5jh8McTLedvLqVnJ7C5gjxdQFouY87",
  "key22": "5r2xNPkvK1aJYEiMPThhSKL5XZtsUdZc8YRyFUu1AX8emY3hLceKJGVpWmW1C9fpYvkSfRf8LjrAtjwx68BbgD4a",
  "key23": "5iriqjADtKNy5mwHju2wmToB2Vn8UUM66QpAZkDo1QGGpYahEyZ4jJUqCj12Y8mYx5423fNwfaXd1o5iosh1oV7m",
  "key24": "3zqgrp3pjwSjzVgcUdoonysZRPUieXxNWAiksFhpvpp1udNt25aHnnmwaqq6EStejJqnyHYdP9qSCDdLQWhteYfd",
  "key25": "2ZHx3xgiyoRFBwAdM4iimtngzPvZBeRKfcnu6xwUaA8EYs42otsxb26RJjUfKahR6hd9KmuTToj57DBb6RY5mjp6",
  "key26": "LasD2MRoSmhYaNRmZqhwXRCjyCXCZTMr2cWdJA4cBxhfYrhzckqboY95CuE3a66cftpvfeqjRBZX8DtrW85xcvS",
  "key27": "p5tJRKFAXUV5jzpAKyTVbLwGM2cqLmty4EwQ6QW6YxnTgs7VNt3hWSTekhs2snuwtHzmV7yWbDZRJw2t6WdCvqG",
  "key28": "4pvqSVgVffuz1oJbJvWp3kZ4q9f57tKasULxpvCgMgGjHBj4Z9W2WGTkjg6tEdvNjqqoSjBa15GxbZG5BJRGPoZJ",
  "key29": "3ihzJqdf9pG17znKQj5uuzzaUu3meDQ9KeBNhruvUpRJ67sy3ez7wy82qjfECWwZZoeja1gNGC2MuN4Tnv5KyBCK",
  "key30": "3Eo8q4LwnZKyA3ZjXWP8eAquk6ATmuBQJnFTb3Zj5mnVxioNLbCZXah6Rs8Svxb7Las13USrU1vkxvzV9NFmb3tX",
  "key31": "2uGbb9ooucrV7vgdJiyo9NWqthSELyzNkfR7oVYodYipWKtAmYwJPZhbocjKfHURmtj4KH8uFjo3VaFAEBSJmS9u",
  "key32": "4mqdhiddvjHgnQrZ2PttqBMaY1GBRDpg2r3EftwxqQqDwLxw7XrPw2rtKeDXpokujdki3sRDn1xXcf8WPZvqBqvb",
  "key33": "2J5YTFS86tbWJrzYFzF6fgsji6DG7UEaBFFqGWhGQPrUP8cH3VmYQkH7ePPUjn5MCcv5zwRD1LJC28qJgBKTYAo8",
  "key34": "4TrzAtchq8G6ADJyLufxbFbfcXyRptNxu6pUjNC5Mfyzt7Pi1C2EGHJcNRtNXpjczvEQCijfKnD2pdMLGNRavt5x"
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
