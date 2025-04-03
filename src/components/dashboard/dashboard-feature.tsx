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
    "2gnd7vQhY2zEm7abcwQzmYafbsorP1ZXw6qbv2Hcr6y6y8eP5M6mqN4Dq4i3SaMbSvQogdtFyki79MUqaFN5bfe8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BY3hf8LAdyoN4doarkGJMt1JR4bGeDQ7RyFN9dcSVad5H6X2nA4q6dghEPVwhJNK2CBLoP83cqXqAJL9X1JE7nR",
  "key1": "24g7BguLc8mnVQGc4TUFVsmZabRJ9V8JjUVNzLP8QkN91jq1y5pQgx1NSNnmthziXqWNAtnNuRwphU92UfAsfawP",
  "key2": "4CNfAZK1X1FgPYZQ1Xf9koriXVfKzXHwoEAkFCTdst6iqPJUKt2QJ9xkv6GuSYPb4dU2Su3Kf9zMpixxKT5Kq74Q",
  "key3": "21vhhrCiae59ejdyJRyNc9ux16EhYDmH8TqowvJ1gB8orReRHJdDe4j5croXJtLRAfJ8HHTeatwsrLP5wXgNZaUi",
  "key4": "3H33GbVfG3Xj5gm1iP9QPDsE74SouawbbmKN1rhs2FSEsTDXFuZyBZhfwEcmADgDyVdroKAfKSdfvejwqeaYmAyc",
  "key5": "4nsZrhQagZJfEzHULE5YFgDfS9WBShJPpqADbMVK12tPdWSGKu4h1sUiCjMVSxDS8AuM6RcSnErF4d5dpahV7D17",
  "key6": "4A2DEn3ReWqNqMxp8HvrDhoLNkZjPchgjQAHHbAsbUVL2H3pqQjMBGTCPHmhRQhapAZC5zirWRrqcZ34YgXD4A76",
  "key7": "62vg7VHewdukYQa8ujtKqWWeRP5mj1Lj5sHFxYNBFFRPDqX2GNpTS1rxbf3Qjk8PtHPkx178wvWnBKmuZ538oWGs",
  "key8": "5Y8C32jEjrCXFW7VvEaJoGTeg6bVmYwr5BPJrbKhGKaubSp3nAwmoVkYpL3iZtkseYMXEpNZX9BWQgfj6EZc3kos",
  "key9": "5yXDbw1UHT3ik2RxnaT7WFuEkWVQeKCqP9x3p4nGWBGmiFWqgJMLRos4fjcmzQKz3PSxFuH3MPv3LX32AwQQwBP3",
  "key10": "5wJUXB3vTSPhabwRsZHrDABMYBJmDotRtwxMXfWbXSYWNPP8rZiLfWAnBnqSBodN1HtHv3qHo8WRSKB1yEU8dSts",
  "key11": "2MDgogw2D8bTK95Hn8zFdstNVa4TgGUsJBooR1493K1EKWapS89eDEPU7ZHoEDd2bxojc7AMVwAWrutWfuq2dHXK",
  "key12": "5F1A9QnjXLnF5M6YoZ8VuoTTf78Xs4UcFcF597zzfNQKiqpdSuBjXTDb9tJr9LdMSfNPKTSsfcACk7H4SzXjpkCB",
  "key13": "uY9pN1mETCQ6QF7VN24Ct3ktQ58ADCbSCzmML1WXd3BuXL4bBKsr1GJJN3kKQNk2uqXeLP2cjmHausucP7cGGeZ",
  "key14": "s1cghEemz1F7i2342CcZP935U55KwJiBi6v1hsaQGEwr1iehLGFecKkuMP3SAQ5nTJQZHRoXbKqLhPpk1MQwRMu",
  "key15": "3VB615xq6kVPoMSUmpUR6xfr7fJwNu17NKqbB9h9kMhqtXpHsjNDn4qodefniK1ewqBTCpc1W3QWWKm7d5UGuHoo",
  "key16": "4t6c3Vs7ht8smtaF8tyDGNvdvdSk3fVP9KdRtw2MTJqXrzQzuikaey3UqiVptK9RoinMehr2dBvaWfS1AtadFbAm",
  "key17": "5HepDNa8amLmTjUS65iy4bE1PwYt4o4BN3tDUL1zKqzvmboLUDzSUSMM2hHyCaHky5suVvRRm33wf4HzYimCQFEC",
  "key18": "41Gt5QKxiyuyiZKCCwzxtc9d7LAcShk449bWX2Fyz3TcWAf59FVFfYKd2BYnKDcANNnk4W17XRtrajKngeUZgy71",
  "key19": "yMgpHW91gLGtN9e635GhKpeg3XbhX6vw4j33sp3pKhUcX6E3A3o8UQi8yHpAHVNvd9XFUesUuA3upybfuNFyx16",
  "key20": "EQ3uAcWjLQ2YgJdmoYVHgiMwg1xbZamUJhtGCyPi9P8DrSEi93B2NNHSjyAsFcYVu5iDzkFrWMji6zq2mVijkJK",
  "key21": "2GPyHEFYFAS4s1y6TAjLZrpFphnug7ETnsUnr9w9fty4mdQ5xM72oc4mL3HNiHLctQcKM8Bz2XKfSmPPEbsBNTDn",
  "key22": "v4c6M3CmuuVEWyawwdPmHcg2qhMTFgMSZtmX8Ro2Xt9XkTxx6KZyEBegftt3HE8CYPN2g947p1AJYPqZZXCMxFL",
  "key23": "3RNiMxKF42dhMgwsN6UBBGY39Fdgj5cBKywCSndttm19nWbwmw48Qj9Ga5gcwHA6Q3p7sLfxnvQcMRQ4ERsXTeHv",
  "key24": "35GjPa7GiaQkAqYZwe8s9fiGBjDtWEqwcaxAMettVwjcW9jdcRgoxB3ALDN49ZWHwt77tTXg7XCUhbPdVPb3dLHF",
  "key25": "z7VkxEvwrdifUDsa1NhqnchLipeed9z1mfqdo4fVUNzVdFFsA3iaxKm5Y439R9ZRVymbpLVB3fVa2GoSDb7Du34",
  "key26": "3ZBayv8yAuqJ8BUwUMcxBp599CQ9VjepDs8vc3Ea6qKuYznpqXa5ez2Cqi5RwPYtNiPkoxjAPmwgXribDzHYLivY",
  "key27": "4fdeo9nYU9fVZtvK8HhWEHFCBrMd1WyHRZufxQ234owWA2ge9YCWXmx6U2YJG3j84bQ5tKBkAsF5HsTfJ6f2z66j",
  "key28": "5EvbjomsSuBDZ8R8mMnCFEhRk59kTAQ63Yx4yE6So2aRpuc1KLrtpgZg6kNDPYAPP2oMb9SeZkfNbBHJYsBEJprb",
  "key29": "2BZt3qfUwHwM8pA2fYGKHPBttZBneneKUnUKVR8xx4yRYKGRM7zDk2iEyc7KuQn38dzaWuzCYVGPNmXkZyYEq4wv",
  "key30": "6189mreLsG3DN6gCDZG8yzcVo7GzRvMmqm6G6uhG2ewrrd2JTx3daW2bD2wBBET5UwknDWhxAbMMSE3jhj2YKfiS",
  "key31": "3vEFGpBDVQ2mxKpzsyYWgRsyok856AYwdmZDY5X1QPQV6415N2vjM1SbKQrEQUK5ETiexDGRtKrS5fpCXGnr8Kbj",
  "key32": "XZUfiRFmdzcDgZqkoNSFuogjrwxopVUR4ANgXB3eweFmdufqhTkkCY2fdnzCo68cUB6UsJ5oJMb1zAMFKyLTwVS",
  "key33": "5f2wdg83AA4zr6Wanuj4SA1tzcx6NSf9FpNK3iBMu3BhXx34QYAvdek4jBcm1WQ71BT4diua8dgzEgruua478rFq",
  "key34": "36Tu9NffWpWLbYTKoeQEXBFyWg6BDbrpaHR2a5PPDe4sRpmJoBvNuQu4CGgNck5jD6CaQZWwREX4Q84JieeJd7kQ",
  "key35": "W5U3YSjQVm5SiXfPRDhb4iiDEipxfBb35YsrFDAb4nvhQnLokgvb9WrSExRBy5VorLtPP1M5RfkbRhyzGA8wBV1",
  "key36": "3TdGyZY7XZzuqfu9vy37VBooQteH8ZRXiRotUtKpg9vDVVemAYYzC29TTY9WntqNEzJju4h3HM56tbwWYSdWyQy6",
  "key37": "4WPxc9gMyW1E8WHtdaBTCUkVhM2Eomr3xgx1miTLPVaBW7sY6ZGKXQJCqSmXTND9DfbchU4JtX16ckTuHCkiGutW",
  "key38": "5oKhnaqw6GFfT1mLEvpArFKHxB5vaTmeYdHLnSyStS947DD6atxRemskE3PovykJthVhpKf9hytXTLJdV6h2fqLH",
  "key39": "2ZdrDo56Wr2hMJYwLzWtPkNoWAnfNPuBxQD8ekBucP2yU88suNU9WD5qeb6Wr1EhYg17HXhmqziXv54N5CsmKTy2",
  "key40": "32KY7vC5o9FcuvdY9ytAPPN1y6JBvkac7hWjVBhPyxr2G7U1iLAVP77vkZvqGZu7dRxmV9d6YJ92TNHyCSdSKMna",
  "key41": "2ADdtTP9FChyqYPeUdN2cBoN7mmME9G5Gyo5hz8W4xJyaR3ZH7S6XVfUjptLHjPYmehyMRwRU1E9zYCBJrHwHuoy",
  "key42": "4U29PxQB9HkVX5znFNRLJg8N4vd64uCzJiwmexZWdNaxPk6BrZCWHRiw6aW9fCYTt9nzAnDp8UJ8PdF3strnH6YY",
  "key43": "37zgpR6PQYAke3bswiqEjaDnA6eEqnEakNradoRFWmTMFxNn8zCmnJgyXnWRwf3gQYiQGU9H7DHrAsPPrtnUqrDA",
  "key44": "3ttrWanSCBRmJ1HjfPFr4MZDSRjcKyknLEkyjZiBGscB9yTqn552pix2yNUGxoEqSwa3VT3ftX1xTov9EgGM6cGA",
  "key45": "5FnMk2G9Mq3bHTyDizUfvMgzr9i1Wduf4tVzCUcbpsP2gvDGNxfMvfeikCjV8Wgdh1LAYsxycVx1qXYQM5aEWu6t",
  "key46": "5yuEQZzapQ6uLWoTsYEpBAwoNFVu3eWXEmow8Z1ASr8v5rBZV6bMnM8yzzLvJgpN9J4RLhTm1QCy9KvgmHa573yV",
  "key47": "35CJpvdf4SX4UkjqUzRJ5izK4oNZv55ZiEMeaP24vxu1qrUJjPKYjN6vWJDy2RjDSKHQcN8dbrN5CkjME6vB1Cpj"
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
