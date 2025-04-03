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
    "3mL1WyGVt4ko997QeFmHE1UKeGeC8FT49G55ShnxyhxXboPm67r8ySqUsd8bT1H4HBRJCYpC6A5Y6EmsQHq3qdGk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Um6eNFAVpPCCockZ2ogt51pKxTSKvYsz3sbhi38E6aoVVfkepFsF6Z6jdyMVSfRLFQn3xaCv5KcAY4AqAo7qo6t",
  "key1": "3AoxbPvNqMtXocYotiemMEUQ8QFBWfk9KWeaT4mhQLjuP5cf7DrTUh3nux4hnD24vB7jinTmLdSUpPA4qn7N4bf1",
  "key2": "4usLaEQDa2EpwSvTYi9pE2DzzJ2Ln5hFm1LQiMjDzhh6qRv9XA9ja3s5p4HHFGkSjEgA8eTjJ3TE146URJ1kX5hd",
  "key3": "YdH1Gxy6SL3nWtUnuUgoYPJJAKQUTtFwRsuGjpWXMesVpgYT8MzHz4HForucajpmVCBP2oaGT5RfK73AokTECWE",
  "key4": "3FRXnA7rRjCaLuYUUBZDEXrsvQphnoPsoVQzWbwBWVuWZrsdMLAz6TiZKiAVcSa3Ph2c5RTzYZchW4Sah8NMorbQ",
  "key5": "4kqMQUNAHbnGd48WjAPwxkQp61gzVceNaa7dzAmRzyNdxNDGt3EUEnKxvZMw1hrVMmvMCUzpSqbAgQDJesxSTjro",
  "key6": "3MAUCwVMB9x7ZMECJ4KF9pCSgNvXYh6U9z7cbb2AzvB954WekBoJwSy2u97Mr6wrrAJH62J2KyMFWBaSuR7615z4",
  "key7": "35Db816WbZ376fhbMq2Z4HrZjW74qoTjmgyMHaDPMANRg54pEKUL9yzes4o9kjHkniH51sptWj1urne1XhfbYcAS",
  "key8": "34Gn3oqpEH5gxjDnsPopRHW6f9msmNVaXhC4GTkZoS5L31SPiyH3fibUTedvVeATgmDBqRJ73rvJwydiQgtgYMja",
  "key9": "4dPr1mJjcKTg9JMZRtBVHKLujrBeovWke5zeV2MJhTfWJRucULeXWG6MLdUSYVPwLmcMr2WgLPHqWzGcsp7fRfpT",
  "key10": "56DGVwZw74GCVrBXfkxby1H7mDTbBNaKkAQHcUqUgRF7ciHu75EvNbWfcC45CJH27NpyLMmyfgXkbHRMapHWDKxw",
  "key11": "2ZcgQAZPwwe1NX1L4mNFsV9ED23gVKa6FuhoV8fTzFcBizJMdy4RBW6gBwdDskp8z8aZyjBjVdambCaCmo5YJ2Ym",
  "key12": "4oWQNjp6AZ6Thrc9WMwPQgxrF4i2Svphz7yGe3iuixPA6y8LpfHDGGX15qJi6VffVR7EBYhG3FEHNQL7ykBkWgyH",
  "key13": "2fhxvcUPDJ7Yb5x1yxJgum8andf565tLJygTPu2xFnoZZfViD1hyoXALFSzvxM7cum1jmfzjnSUaHfkqaqCsmYdj",
  "key14": "3Hc2xDAAttbVGmJzvXUeeJwpUiiLjXSeFyiZEXHFWpn6F46jT3SHfeHGn4q6aazJTAfCvH9V8sKvBuaq7tLH5UMj",
  "key15": "4sFYqZt6GDytpVYE7oeDCjLbA7deRrMSAQeNUhcGvLZfPCRtjvc6d7qfDSjbPisrPhady7kL26tSsawx3FJXnTSC",
  "key16": "2tKG1kFsicPAbgEPkrk6PjSfp1YXYUFPHmw1XBFjXGmDYydP5B1uWc6TyoVi1jwjfWhEKgfyjH5LTbQyf4cUJ7LR",
  "key17": "5S7A81otw7MfjM3QaMD9XvnyKwfbFvoWnH2AGgBMQvEBfD8nuPP27TxtBciGwkVhbVy8YWSrSNXNm1oiXifBCNZZ",
  "key18": "4HF6riH8PexfxN2ipyRruAsKqtYWc8punqRLg6PmY6BeZrQ7aofi65pJeAxiAJrYZ2cy2DE6K9ePqDdPXHeFfWr2",
  "key19": "4bx6TtKpsy8S6yTpoh9hB3BbH5CKUpEu9CgpZUqkXyr8Kp6Z9yygzSLsZRLM8Lk8DrF8yDbbcCfPunDDzj828yhZ",
  "key20": "446rLf6iPZxsHa3fFJTLLGiTJ8yXUPLS7fsdkddDEr7wyt9xw2P99YbKLBD8X2QsbwqRfUVuQpgeuXrm6i1jVo9D",
  "key21": "4rBF6ZaTnrUuLALKNiYhXA6k63wBHPAcYRviVZBSqHjrbiFir6viz31AoCuFuY9T3HiLhne9WvX4zi1ZPTsn1SWW",
  "key22": "3rShL79jHVh3Mr8gR77fhLvLUgB4F6ZEcsgnTsi36tqFWsCgzh7CA9F9tuEKkFoY4NbVHc7BN3JK87XLcidv8swU",
  "key23": "4PZsvN8t8jzR632W5FTUTLT7i9oNGUyJ7GrgEqx3Z7EeNJjwANdzjmuU7225AoHUGC9p8LYexo8yFgydSuvuk4bF",
  "key24": "8NBGbeKhwom6eRAbArba3bLSroKVaGLXczRoNuQnbAqCaZG4q9EWqxgc9YFPckLsYUYV3RxVG6stgHUDfAWuKoT",
  "key25": "4FBafzr5w4dHUdiZDbmW5serApYn4gPe8BXxC7XdNng6K2SPDvzt5TXJuqRXv8kkSCPXK7RYoXx1puS5BDiZR4dh",
  "key26": "NJUcrgWqabkcYsCgEo9SvSdBX4kEhQmwwjr7GJQY3CmVEhHBZU6ZvyUzCG4axEDfhzCNh6bqrxG4puQZ5AetZ5p",
  "key27": "5NVtHeJU8NWaX7dwiAW6agWMoSX6KiB3DpNdKajoHXHhjsHeTwiLbvDynCLqxycjVSvXd8tXU62SPHhXxfqgnMpr",
  "key28": "3e8ipErbXhHVzDh9bMb8zCMGXvB9zrYnZxTsbryKn9t6pn2ePJLDb95RSrVkk6qQErij9gpbHLS9ceD9p5pNCwZX",
  "key29": "7YdodFjNSKf2ifkR8ThnW6v3i7c3YfYA54Xfku4uG88MMVSvnKsjL6wA6Y3f6ANms5QyvFjeA7atyS4wfBRC68L",
  "key30": "52gKewXuKxmdS7hqTyCRL5pdVh5QJKrM6sMFpRi5VgnyhMJEUXAWMUxrJCTpxKWyf1g5hhhhAKjoJ1xkbR2yAYAd",
  "key31": "4ERuUDYavV9L8FqawgkQYxVJbibrSXRwresH5qx3CCAwGzbyR2EVE93iJkhxHUtijqSYadcQJEquvKvyMUFvZ6wu",
  "key32": "2evGL6fz9NxGnoiSJDArApYUafeWboMaCJF71cBK4yt1Uo9weLe3XyUFyQPzcfjZwXQT97oHYGbUHTAw1d3XjUr4",
  "key33": "4D7JYjsQvQUV9P2VSBHUQFSHYtZNxd9xEjVKd4F5z72uevHcZsK5hADc6svwmJrTgq2Jh524qKXhUmoqWC8D45oU",
  "key34": "5vPq8WnrAPirKXrzEvF1izWFRQgmJoGHPXYUbDptG9gh4QPNK4MeNCBit11uYhyXCP63xhahudKFAEtGPq6UQXRx",
  "key35": "2vtdFTqc4wJDeA9Sj9HK6TsKcCUfpt2L1jhePXZiqHr4dLRT1fH9utvwb7AnMJuTkmnj4E1AikupAGQybddgsFZB",
  "key36": "3aHqNjLhrAGduv3B3sKTa23SybwcrJzngfbN87ESCGr4Fc6dsRPcFyDe5PAx4Nn8AD1nRHxoZk4GmrsPAf72K8Ak",
  "key37": "3o2J8P8UoS2iD59JwTmkTWzHpVTW2VtmscSMqNTbgTggh3demiaR29B17CDLcg9kkJqhB1PnCPMSFoCWv8VxWqyz",
  "key38": "fmqTwSBmreXGWgv4T4PBiRKMxDkxh4npszDAjjwNtYrbfa7eU1FFN2BZ1UGKB5DmgVzm8qAS7WyYhn5USQ9gB86",
  "key39": "5tsVcseqnTNipK3SfQeTd5wZdgEVuG7YdYAesCmPZwT3G52vyMSGqEbZj5KmXW4emiCCk2KCUDfgB1Kr3fRAA3Df",
  "key40": "dtZDwLQcsVr5g481CRpDxNKTjhWJC5ae84TLFMYrCGQ4tSy8zzebcL7gRyC3XBT7Pcnfw3mW2y8WtUEV2Dxgpp8"
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
