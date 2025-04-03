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
    "45pzBzx9KkZHyYYNWQCYthtmGwRGTAoMLT6dZ1PfMhTgtAykn2sdv6hnSDtEptmEwQLCxxn1PxpAiLejbmNAPtJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m2ak53ubPQJHaqrjxv53UqvheCVtrxsZ5WyLL2GCQQWEfsjtFygMcCHNczTvjzw1vy6uz2vBzPxGHtLd3K5he46",
  "key1": "3BMYS5TtnP2dbGdQ6BbCG1rSvLKMYSMa2PkzBDB3T725bdiXcz5ro5Gw982ZAeSA4LtH1xGzn2pmTRiSswYXUP9g",
  "key2": "2MPdSbEEgwdbspRxtBSgd4mniziwvuNsv8xy3ZRrTMik45U8AvX7HfMS54HQK1uHobRZjx5wzyNmEnak5UzxFdhw",
  "key3": "4xCMQmwpDpBP5Sh4Y5kWP3oHL3Y8pQKhvyTGtqJ7RPfiFPyFYxizAA5UV9tVScUdFRqYcrMKhF6cMAanFCYKrWaF",
  "key4": "J16Z3cuuHsaVggtbChuWBqUbZMdKCLmqGKBvVfgA9Kw9cHgMRwbeNdM5fsPSdZ6itDmmgaptGJdJqgY1sFNeHSz",
  "key5": "38DUnxak4xPbPET6cgHRDHaL9DkzCUJc36QaKULfArrLUZvVTJ9EKgG9cX4cJh7Frsx5RoLJPoswbwBdcHQuGszV",
  "key6": "4gYxJVeUA8ZwjA6jnddRTMt6yAdp84uNqJBhDyvL72T2ba1Dq8WcCwyYtgKDyi2BCG5gxVrb5NMbG7Ag4hhw4oJT",
  "key7": "3qpLnXmrjFhAsKjxAMNP1TXwVxchg6uwpuzFavGG5y4ygZ7YyYqSQ35QGZYVGGnA13zhfyyQD78xcA63oR9YrppE",
  "key8": "4uQnvEfdjYkRfDtLvzxKUqNWy6eYPRSgfNhCpfwzNaWTE8EWfH4dsqX5QpEVGeC4DoBPEsxPn5SeSUj5iWHPpTw8",
  "key9": "4ZwQpSPF9oq9Bp3Et13M3MNJzpicmssqm1Qwe1o9JEULXp6sVukURtFwhyXyDSNHqUU8ECmbVGuTPu2RN6RBBStT",
  "key10": "DDEuJ2MRWMDct3rWBd88FVQQTMbniVmGZRwaNMWSAoYRHnUvwNa93ruyFLL9RT3z6UYQCLf9VMcRtT5pToXK4Qz",
  "key11": "5CgEDKHGfceSA4ZgtNgU5EKC9QpDb5GTDfRfZ6gBB6Zf5WJ6S6d6PJirzVgvTWSQg6ZzYoLU3ty1vE4XvooVGxYD",
  "key12": "5M5Xv1vadCb9CXJWCWkyUCKwigj79etP9o51QujQgjU33GTwEpmruuQEnfPJDGsvWFF2S2jvm9t2j7ZZ1Um4MorP",
  "key13": "onuy81EQ9dfnk5PAneuYpUckYr1yMzC7e34Y4LSNXLFzUo571h7dAZS57GxmdQxdjNFMEbMxLzoGtnFTr5JtJYU",
  "key14": "3NvZeCVWfndGVLDvgkpKoNqMuMNDd1QCUnQJyDfe5SqbRe4YY2ikm8HgyheixS8VvWaYDm7Us7PtymTtbFJXBQ4M",
  "key15": "2cpsmU6TSx2PfbQBTfUZmRvYzLkbzcz6STj5j12UzbLHdbVjqv8xjmq13fGgVywyysv3McZZRhPPR4g9xSwY7CLh",
  "key16": "2qt6P44ZjTttPdjmvGpyD3cpKGZ9vRmv19V8zHMpMtuLNRG61n4Tp3yftRG93KFt9fqMpzhCgExBCWy3zKuVh3Z9",
  "key17": "2F36hGozKXXmkiRMS9hp2qLUJSmuBhdkCD4H3Pf26hU4FimbBTsAGWjszbscixMTLPBzW713YpmffrebHoyAsyau",
  "key18": "iQSrKEqZyojy62g2ZmyKpwjBBfLCqANExodqmrx8vDp2weqDXzfaV11v2GpzNcuwcs1kCXSEnrxDREktcZa4krR",
  "key19": "LRZimALC5i6qspDZDPh7JKvPevzx1w3DDSZQEzEg93MQndLffYkxUhRTFQnZGyxfyWyA4n2PLqXmDz4VXApHEst",
  "key20": "gNTiYrvU9w92hkioWFHtZ62GJLQMWmA63RrD7MSFR6LQQA9pN2DcwGMfdbPDhGk4RaLFbkSuXmkhG1W9tjrJdQZ",
  "key21": "5qXqMApGeptsDiJs4hzZUA4kWmi78Ex4ep5BY2xVhX2CX1AB4giqu82zYYtd6p5faYZCsegk4Nbe2WUPjTAdmfX4",
  "key22": "4a1Po8akoJYpNiPYkr7GBWUkCy3gMf8rxxtgUWncVmnKf3rPibC5ziHT1fSLp5kVdNEbJEuGV4myhmA8FVhpCr5K",
  "key23": "4646NZivNqaTbN13Yjb7DBkwWWVsKJNnrLQkPYKFqfeXYXdCzQjogewgnMZGnUW57V56GeDfp2zLqqdJQXMHkkmV",
  "key24": "44DaW3JEeJpxwNZJoBSHGabYz1T8kbE1xpvXLjov9wQyKamcFcLBgWGrVYLGqDx4nFZz72WfhYBxqmB4K3xyNces",
  "key25": "2CTgcibBpBvizHPVAmA6ni5WiBhckL9CoBMZt872WLAD9aQzbBSq5VgP57opmkLMRBckT7Wj7GNATpQyLBtMmDSW",
  "key26": "4JkoYWE2gyAnxrqjUch3n5nDhvrFPCEcLFkk7PonqkE76kTD1vvhoNc5MB7BzWMPU3WeU3Yz1rB2DQx6RBLqZ5RJ",
  "key27": "zpBJDDnamAePLD1boYPEtuZjeNBwG54oLtdefymgZqK5rN6UmVQWh7XAbKTvu9yVqW1jkxDp9tASPbngnW5RqTy",
  "key28": "56XwdG8ySht8YvhHwzbGzCBefQoYGcjXn7BVQWgwChZJVkCM5SkxWUghzLekZcRrhKMksWLPXjSKUZjfnDQ2eUW",
  "key29": "4hSt2qRjFYbg2cb9kvPussVjCMDzTdH4cL263QJKZLgcNYpEhHR9MXTbKRSkcMk8vweiTFGEXwrFkPds1pP8SNtD",
  "key30": "5sNqs5Wnr5b7gLWJuTX52NS1PiV9weamxdBqaTSa19q5s21AHMhzTZGf5pPF4TRpfD16rcWbcdKe4fV4g8VbTHaD",
  "key31": "vaa3u7g2S2z4EF6Rn1DegXsFhY3JzvK2UxUSfMkCp64EsnpjYuYAwVZXRSk4hqLeU6CWhAgYrJY2a5zyoLkhHfr",
  "key32": "32VB4hqYQ4Mya3XwgmjhnDKp89t4FbfuZEaj8gmDmeRNmDFMzQVyNwPVTF3EMiEYiAS1iWWueR2b9j4bPLj5p15d",
  "key33": "qfGvAEVJfq3wUreBjHqnKmwd9qRHgas4kWAPLqSAviFVa4JXBT6Yn2GYqSR76jHjQjWLxgg1DZjDsHhBtj2bXn2",
  "key34": "5z4CENBoLaVyZ2x1fxv7dPcPPmWu5QaubSZSTsA9EnrBzt3ksdgKBuQE3T2Vevpim4aEGLLwiBiAuTzRjS3DzBYx",
  "key35": "4dmz1Z5a6RKphyAssoF8nB1dmh26jt5eJVNBfe5qxxKnXxV8Z4Sc2i3jYw99af2Sqocgzpx1kqMYeixgM3vmzzTn",
  "key36": "2WD9QCznsJV6NCKxnbSETSwJS9N2vgSM5BW5mf6pbrVDRYXdSPvrvx3yicudD9y6KtZ9cNai1of6YDJfH88w6Wzd",
  "key37": "3FncSME1BEmq8tU6iGcrqHyUhDu5cqaoZtR1U4LXq1gDZyKd6FUydF4gokBRqg3gBmMToZ6s3QUUvnyHv89jbQ6S"
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
