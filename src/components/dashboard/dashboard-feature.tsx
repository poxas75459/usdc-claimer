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
    "4vuFnFiaSiWvos8A3h9L9ZxNsN4TUNAvZkaHNKVmwU1R1os16TDwEDqd3ehdXw9VZMxpoMRJiyM8UCToafRnTRsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "583AWzKwBPPhfynFavy6Dkmk3nBS76r14UqGXQ21SFG9RVJSbmgxAntcTLuZ3xEMuL1xVX97rLCXfK65Smrt3kNo",
  "key1": "4BDjNBsutymreP9CGvVuJVddYbZVEo1JwzYRKPhEDQybZnYpVEHjfHBRrYMc6UeHfu7cMibp7MJX21ca2S16DM4M",
  "key2": "4fXYBD6NQn9ytCQF8MJuP1UyMYbX1bWxn9Xk2qEGWFUPptmbgdKeGDn4tYhQGjxmVhT3mLUNjU182Ed7XnU9NHoP",
  "key3": "66N2vf4WxA5dCKbfzVx6V1JYssCt7zPeX5wvXUQ9et9KebHj8vUL3WThfCqMRm95HVRR85hwPbhsh7tgFUS3gzbB",
  "key4": "fTCG6uRKAToecXGwaAE11zdLjHkxzdnjUBK4ByorzchSJDSmDsn9VMr3ALoNmur6bLZuGqemG7BjUrZATHaCtrB",
  "key5": "28Mia8UAAGqs3arModjP6L4SRVrnBG76Du9uAbzJWxAkP8kbDNqhjahMifj1KCD3V6qz7erRvhe3vgBhFvt5Bmsb",
  "key6": "31WkWyC52Vi43DA7JFJN5WqYYCVNgdoRy3Rv7zASYMhhqNirh4w7CziM1c2aBvTRLAwhM4xmHBeLWYPYK16u9bAw",
  "key7": "bessbs2qsyF5iF8aEL9AqUUpzEJJNhGSVMt2ug2FvFH8nfHWxpw5QDUBnZhnYsH9KPbc4qAj9cmmB4pRGFfvaZC",
  "key8": "3VDXRPiEnN75aK4vuMyB3jme8ydZHjrfYYmL2CsWXCqPn7KkaUsduCYct4wykGMWXmRAxzXtrpQXch9TBCoheng3",
  "key9": "m4HeUyD3WLdB1xUjdZpL9GvWqNC3fKUq3BzXmvei87tVHYy3YVB7C9W3FkzJNzaqyAUDoqD4a8E3kN9q6PimWhi",
  "key10": "5fBJpf2BZMcvodV7CK1SbfPg61HspNjre6BDzzuFr5mHFveHCVtn6nHx78tAjZJs6DThCYFpint7uSsLVbgSoQha",
  "key11": "3vWfbdYKveKs1dkvm7s9JKxKyGP6kbTX5i29Hh8XiKS986Zs2ZJPLgaxnBJr8otFjJdPyqtCLiNyzoGjDv4QPExB",
  "key12": "62kxLyTvyGS68afvUFcqo2LJTWJzikzupBTMBBc8tKpVYmQXCkXESZpK3CDr4JTVhqp1jQCoty9DUswLaUo6G3EJ",
  "key13": "4F36QJqrku9GYKXhBb5rHgPKp3YfR73sBQzMwHbS49RLyn71ztNGtXWgABVZsXV3ESafTmPaF47v4MPaWN2w4qHD",
  "key14": "VpSMVV2yrJWasmGzfmFNtDncGcbPwec2gxS23b9KJSEyqV3kHaQKscbm286ZVsHkGixfvc2xnF84pWQWVMkEMzB",
  "key15": "4v6vNgRhBPxwRvuR2gUJ8wQpMaaJkzqKbUnWA977t7RdU2H47i2CdRWGeQVquxanLkUWPyg12zTdcFLhxpgeDLrt",
  "key16": "ecdHU8kDXpbvZQwMniTK9SQQPgEBPExcwgHRTMxdbL1TG5qDe5HPG8e8gcFYXxoDryY1EsR6bZ4ussvMHj13Q1c",
  "key17": "3DSTnWc7PasjT2m4CHZZk3bgy71FP9CB8d1koa39CL5CWteGQfSAxrPNaCqoaBLdGt5BfS5fkugwiAWE1HNeaxYE",
  "key18": "4Y5Maz8JQAtyZ5rcJhHeRLge59Fnk5QckYttLr5buQox6YGL8EDVqpWa7j1Xs9MM9nyeBHTqFkoBiY6iBWtKrieX",
  "key19": "4xsxUJXPCDJagyJNp5E7nqjEMRiJJyVZngRrRsUKDx5yx1bsWfpP247KHZqoFB4vqoL77MYVuz1JSkJKHiH57Zh6",
  "key20": "3siC4Vnfv7jkjmnKAoM9GXiUnm5CLWEM5GYqGdhPuFkTAbhwiFkmf4VLYMCYgLMMghWYFMgjP8QyguwciPstARmS",
  "key21": "4NLUgi2Dtori44NWiBa5P3mHJcuqybF2Ztqce2NRfC46seVgraoH4AwVwLd34GFTeYPEWnCJsYo7j2Kr2Hsx5o5e",
  "key22": "5iNBkkqopMGJPbSGakK5w6z4C9prfmEptuH6LNchpCfgB53XpVn1fA1QsmKgbxCuXuB3GARAs1BEg3TpBSV7kRtj",
  "key23": "2WQtsE4dXN4SJ2aEF5gbLNbBUro3ZKELMF7LFsVyVtWJxitaQVohG1x9pye27wb1N8hJ6crvrVHx2rEYjWBdnEKQ",
  "key24": "59fgr5q9VByYK1Rcz7AP6YSYRiFYCFHTrLDWFn4CMtET9QvARA4hqWijAkYvLFEKSQSPLdvZ9KE95ErcjBoTjTfr",
  "key25": "3EKsAADmMqCkqv5WHAcLDv3SB2iDKcH5N53WGaBYDhsYhoQ5h393wE5LhEMqEnzJQrh95QvTRJzNrWyRqmC5HpJo",
  "key26": "32mn3bgeD5s78Ab7XfJLiS4vNoq2QYfWuPyYPg4cVfGTuoh7G8H3KZcU5irQHfJ4iATsS3HxHCMqebCbcyzz4Pry",
  "key27": "66AXvqyPpqxUAsBCf4kmdefrgNNdjsceniFzLPUZos3qtRd1cR5p5XZsGonoGWedbpRs5dcF3Ayf6TSqSRsKpjAh",
  "key28": "5SWeyzFbMKfV7vUF7mGhqJAvqoNdW9yNbxN7gBJE3pSWjwtT4UCgwenDAsyVo12UUpDCkWjTkEL7cRawrofvPQEw",
  "key29": "5DTgoeZzeoeNC1rXX6btDx3Azpfzq6AV6WbwgxVV4jjV8cnaNiUVFp2sb1sQaGqZgKtJNR1rRjM5EXgWtgH9H2ZV",
  "key30": "4xXypQW7jEZ9rFC4kZ66LGfFA5pQFBj9vqsDR3srPtCEdPMjXg9QGMX3E4kYVEwvzXreBUN3ZP9MGNYRPCrayZSV",
  "key31": "3Y7Kc8apr8ToyYY3vFVqsgbwrowcEBPJNAECAbFU5m8j9A95rhj4JLYM9aFSLB5pkK9BbyR4NkfAYwoFGrTccZmq",
  "key32": "2P4FFxEuDZiPqmkGWcEk2Dhdt7Gcn8GKdG8nstTW3N7f4FSg4C8ALwFQGNz3ZsH224x5jeZGsDHHUP9j3vS7496d",
  "key33": "3NtLvBqfYwuYyCde9R6wwdG4rqjY9frS3d5mkP4duAaquBMqkX4MFUy72MFtNwKhx2tpboDiCSJFGKEYbLJ3sDLG",
  "key34": "5ZqgUp3vvkg6MZCvJiVVtkgr9n6fkHym4YF48ZZHAyfLWwEvAd2BhyRAJgQGk6pgpn3MgatvotNpRNaw27grZNBh",
  "key35": "5VLVuLCzFYkR5uCwTVxAtVvbuFuDPD5yHnmTvg2aCud46oevHaEAY6GamKS3zRtYTvLLRntbRYiN1Db2qnHfbe5q",
  "key36": "5RxWUvmJj99wGSmVSZQu4wP1TmFyTDgF4ozsS55AvSffNMjX16UW8ccXy4GBgPVEVWNLH9dghvHk3jutpdQBPs6d",
  "key37": "4wfw5jfSb4Cjj8gVZLGdztxgkBqGcMj4L9T4Y9z4XKSw9PmhXd2nMhLt8LuttX2jAUCrgkZEgGkF397X7xoFY7em",
  "key38": "3vqJ5EdgGHgrRGzN3o7s5vcGbmHq7FpQBTiEqTgLhgKZPHR5cswj7Xf6bkF84nHKJkaR5ueN62ifzWf8eyM1fmAw",
  "key39": "5y7ELrDhc6kjKssJSSqRvPzGmkK21efhw4974BsJEAUCh8BCRjsqkVgLuJHj8eVxsdNy1BMCDuBN4bF2ZQSttdaa"
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
