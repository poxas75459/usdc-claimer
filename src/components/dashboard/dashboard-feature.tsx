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
    "3ny6YzHmammUYfzbQHYmyZ7DmDVCj4qsXGv8f3AYBrfrSBwCqTYVTng7Kg4YWdvQdhLpkNEM9sg557G68kp7TawD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "661oVbJdKufzBzVzyrjoZsEsS1SzMoQRzS6qNwkJ2VbkzcCUWk2FxzPqTc3hgReHPJzfvoVNQBPhLVcoFVUGL6v1",
  "key1": "Leuq9tmNXC2rcwMSH5GPfmVjWeUUs96YtEgkg2KW7YLtwb6PcTaqx3dJbL8tjbg1oujEV72yPwDgUR9g4K8TbGe",
  "key2": "3av7HetbEtWz5wXxQpkGdFyToJvLTPXg1gBxBan9KV1AQTVF4d2sWBsQejT3nzmbtUUNC3TJpBmow1F1vSY5dvrC",
  "key3": "5uo6jPNLHQsRWCHrVqNYxk5djbCn8c2w5xWJES49CzkWS2kLobtGBockAq3RSegdrcKZuzsR2vSigLLqoPZgWYc3",
  "key4": "48Sf9zMHaSgWpsiPzahcsUfvmXE5uL3z1m6XQtdZDHH1MyRSQS5sZKUjZUu26oCq2NFkDhYk48LYDAEfE23buJT3",
  "key5": "4n17VUtxJT4NPg5Z59zoYZYNcnbtWcdU59kj9cgbvX8usS4b6Axh1ZyXrq9tv7BW6qtQZEfgTxGZCFWrZwhDo86Q",
  "key6": "5z6jxuRjaA7HupjYdUGfHnotBhX11z1gAxg8C7Dz53ti3YtNQ1Bn2RNP4aYaCc2wMJGcWD8F9ukusqp9CwZpkfoS",
  "key7": "cV9KkvnynJYiVG6QDbhEZT4XxJNuTD78kFRRKFKFp9AmMQAw4NcXBfPzWQusgqyikNNtqqykpjA53Ap1jeZPEcc",
  "key8": "udR6BwgehGyYcc4Ai3GHgXwA6Ab5GgqoCx7o6q45XfD39iwbpxPyfDq6x7vZoNAaFuEzjuChocM4BqykfdfntXs",
  "key9": "5SqSkS6Hbujbey9sXQRsRVCuYizaxqoEGazi6wMzGykfDzcdX7rwxKWjb6i2FtNw2QawhmRrKtfEcXt5gp9vmtZ9",
  "key10": "2qS6ypt5tfd5YAcYwSgEU5H2sWEHdNdauK4pX1jbdZBDsNQ4psvfUqvSpMVtkeSTRhKyWib4YezZEZRSXNvMC4ep",
  "key11": "5PDBkvnXw2LA9MofAG7P8y2iUvaJVpvhapoc3aMDGrHQDZB4M2oooa76dhkNSWQGVtnMGdofFmVGWzkQr7MVov3d",
  "key12": "3beXVd7bAtsv8CcRWLJGzXStbeSzBGeFHnLRkRRJoCL2zv1P7V27sVgNeUHpq7gLWf3XydfPT8oLGCCs8voWSZKz",
  "key13": "4S8ZqUzbQuHd1iBuyLG7q8zGLanoVhNuAkGm9ikjUcCS75NLS1TM6uUHRoFauBBqtRsRRSyz8q2PBbvamEsL4RWR",
  "key14": "5nBMCogGEEdrBZXtHjJmEKSxcVzyspqT7toaQxUuRSBZaoEMXL6Fo8NsGRvRYgv7a6W6Ev2W4kBRv2nfUxLfB4Vi",
  "key15": "3EGvhvoD8ejPpKM1FPaXQ2k6WCbAzVDX65tyYeyEQcNdFSseSRwduMqFaVoSeqT2ydPLhGjA6i2Fo9jmyKoNx5ci",
  "key16": "5asRVVu2xMLi3T6f539tBRFH9vjX97swwz6URHBpysGKzWim131HESp5C7nWFLCAL1HAb23PR82sPniqg1HaCFLr",
  "key17": "3SxLQfVmcVcQi4VthRFQuUreaazL22dndxCbwjUnv9veu41QrCYjwFH9bEhRdbnfwGuSW6xbrWpGddvwvkWqd9Vp",
  "key18": "4U5qqx1nzQ1qqNJpfVbvyto221erNabr7PpWqtAhQnJR67Fu1XvC3twHutyqJczFuo4AEZATt5dMwrbfHtVwRVpB",
  "key19": "4fwa5DDV4JNNuGXELBAvaseE1V4rVaw5yLZ7WT1NEpEvB5ovUDNMBke93UrqHopHvbQQpiPRyA4bhym5hr2F6FEA",
  "key20": "65CwLzfKSHVsPRDvkUWJw5ow8YFhcT3RAgEsuJ4yEKLSsnMys3WiVpMepEEoXBkGFghFh1WXGd83HxaLepBFHXqp",
  "key21": "5r1GwrHSjN8qDr9PZziDLTSNdMiLeC1iyqtmHSccH2qVwPZ9RQB9o7vu5EeB2tQk3eghRbXN85QCMgjc2i2PHC4",
  "key22": "2pHFZj7cpV81ecsYcrrzHW5tGUTk3SvURV5aXcmBmBzBVy7xShnyu4QU2QJ67mVp4JvGvHnspCLkD4P3U9i9fLGH",
  "key23": "3wpMJvB6nWNyj2bBSMmTwq5VrfByXpo4rRfqxBav3yR2TjScGFHKKKhKwUp295eLqpuYg5QUVJDeeRZNoKhzL2Ri",
  "key24": "m95bE611kvZKPpuLPUBc9EVnxX49iMXUjW9mWW4T2KL2spygBZw71NFRnuDTFRYAWLC4nc8V3WsWvQ56UUJNTh8",
  "key25": "2EWCvLqvT14DBw7WCycVdyzJcByyeyancD68VUtxAJHvi7wggLhzGQ8mmgTLprzUheLGvraKJjZCc2Dh5ZKZBeLV",
  "key26": "3T9JcNAnL8dKops7JMJyfdbnPusNegDWXs5cpaSqaBDdBBsrXskMS8JnAtw3gHorwHz3TENEVYPVGWeZqMmgvjee",
  "key27": "4PTGa1S6k1hMSNEDb2RBvKWKu8bvpXDz21rexTeHk8vVzUHWn5NqGu15rCBsic3rv9JNn4GpsxKiiV5wQX2dCLnM",
  "key28": "2uvoGQcsMYBPooWHhTPngEMAk51ZJ5nHoxjPjjXiB8Zk294q4xsH9jbkeyfJFGdn1L8JiREDHKCKLeRfVyYmr3eC",
  "key29": "4mFBcYoJoQsjfR5sRdGJ3Q5vLtUCAiD7TaqV4uGDuP5cJCd6ZNdR1x78giHG3nKFc5Y7uAPadQuYMSAoatg1AgRj",
  "key30": "Q5GhqdvxSzQ5eTKbVaDCsrZtjJveFcNwC9fcZ9LDMoiqBksvq7SPyzDPaQYLQJdSxpZBgQbtSRLMd86mNcUrH38",
  "key31": "JhoPyUmGa3ZKX9djULHu2cnyZyVz7AhgoXBSJ6BEG2XCFSpp36bCAsqLJbhFNrFbFYGKJgWnnVpqDFbgVu4PtMW",
  "key32": "37nxYQo53Ck6o82UmJwz9G2GaX21QbPZQupiAcD35tSAVsKKDRMmvsdz91y4is2hYXw7ysxpkFxP7YLeRMVGRd3f",
  "key33": "2sGRvAQnzcQP4VmRzFyQLfxr6vQkk9nQ1enko9FgL5WTZqMyYQ2YV36SNEdzLD8ogyMv1X49RrEyTtUhKf3AruQn",
  "key34": "455zQobMQmHFgZn88npUqfJAtg1hzM9wRDZb86igXfMPDEhNLq2KmFHBPa7CEYtFzbPvGUKiE3TmraaqxLA8HNm1",
  "key35": "2chjNWRREXJXV1dMafstjbkobcPGBsPvbMeS91WJdzGKpuzuNDrTzx29DJWjYbWpfrixRLGqmsNc4jkdExJwSRys",
  "key36": "wKLxmqo35ySVVnkjVU4BAC6EJHm6QBtSE1dDWicwYgB6oMRhcHZE93yaHwJrhParzvczPJfyw2FB1aE4WJGhE4x",
  "key37": "5TjM8j7rXhTzsseGDdksRLu6wdCR2sXYEc2uJSnxeoJdLQQ6aHqXpXrd7hLWUdnp1amki1ymQN98tuz3mk86T2ZD",
  "key38": "49yw51p8UTKTbTo9Zm3yxwT1dEzZ1y2FPLRAqGxZ2pzhP92EzhCbDifLprM7WojjdJQB4sWSgK8Xt6bCPAoHdAF7",
  "key39": "3cJcVnKAwE8kUhvcUE5nxeJfVXqj9T3uuTYfiULjMwnZeC42BQA9Fg72Rv6snrckPRwwPZ3vnZnwAAEBY1E3AqVw",
  "key40": "4UtnDsmYCwWDFfVQrazYFgy8LRfujRqx2Gh76wKmVjMfk2V5NJXudYHFFzJsb4tFM6uZ6nDBSu3dK2DiaHWwWSRW",
  "key41": "2kevLyxsKVf7CJHL3sUfxwbszgWCrhWcpVbXZV2KE9Y7QJBKD8kAHSDygtQvrG9L5dkZbdyq4T29MXX8CBBtowTV",
  "key42": "5eE8LgUzHgdmfpJRc4xP9gBvfsghJtfMJSnVGbn7FL2SZsJRu77WujfLgLyvgnufQUJuj3KGUPPRqrBMP5XGGUde",
  "key43": "29eGGhh1K2f6FNVj1GPUfXH3NDdsCeCG8G8qWcRpJEVZfZ59UJo9b1WR4aNasFw9uZVVoT2gpmearqVrG4wv4NWu"
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
