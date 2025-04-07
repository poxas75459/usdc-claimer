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
    "EEbeHQrn9qEjJpjDciyX1euChfXS73jkwFHv8aRkUUpWBWt2dtGQpRRtRWouTeBKmCT8garpxtTtNpxgWPUEzh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GzzWD6nEYJjDbqwjXSoib6Gwbf5ehqY9Nwzt7kNdKFbijLEkuM7NXxnkrhHnCSvwFVJRhL6Lo1DAz4XKUfQrHJ1",
  "key1": "cELkMEvBa4BVmiGjTcFJgLVVZnpgfDLPbmivUJ2pdv9EqjyX8Pfb2x98cuY1aGTyg3pRFXtDB5ufDSmtSoXjNBW",
  "key2": "4YmSnLu96PgxKxtVUSscPixNxJXCzAqP4ZKHJG3g89FnBSJyn79Wj6YCVypHF5oAcBXpKanN5ooBkjCDTvacwcTo",
  "key3": "VcZGFYeqxhcksFEB1XxEEDR7T9gdMGEtQ7EujBrwAKLrcEdLSp4Cv16L9gF6SzU3aTUaaCVxRb5xdJFytYfUi2h",
  "key4": "2HyXjYU1AUXaxf1LrTwZDE3SQoua9iMgRgvMQMbEvARYGeiuvmj1QmVN5utKwMX4ufiEWG45HYVsZwsZpxaZDdWW",
  "key5": "2e1G8DuG94YmvmPGFfCXcoauNTc59GKSe4yT9t12ja1BKqrR2YZtvuXVfLLUe98yUPsdT795b5nGF3hzbNPHqSKT",
  "key6": "4MtswRP1tB7FK7nwnHjgcFWKoBm6MQhF3qbD3PXMNrGdmCtauKGMsCAj99xosu5C3AoZcPxBewNiDR3mDEik7jhf",
  "key7": "5Mc4aDWFXYpbgUdkvHBjC4W25SMYdciYGZtdjx5emBphwKC1ASYaZSYDiEKXxo6QigqieZi35vBCJ6b9HJLeLc1X",
  "key8": "qwSJETy4q8WRPuRFWcWahEf1VAEJ4qbiWHf5xtgXdUkoYJaZJoUVjDAiQSzumP8BhaXNy9gomHZ7i1pnnHmv6Ux",
  "key9": "2QJCawGi6AUkPubKLa6WAPoGVN6jhhaoGGtc16oDkzmaPQfAz56DmUm6X4S8RYHGZwZtFe9fwHtT19mHvkpUEseS",
  "key10": "5zteD2KKcdKck7YyYhrUWkPak3zDdwyDjwXS5arcCRXSWWnZeTwHWoGX3zVcTjwrh1CuBsriKdoj1JFHuKCgDj5L",
  "key11": "38zW8JcVWtRjyg8sLAsrKnxJa5vtq9BFjBpc88gqxHzP1pt8aH9hujrpb5MaRNmy7vTxXT5rw8L5cosHhb8nRqAy",
  "key12": "5rGLU37FaqvJR2FM1HXA3Cgfu2zgDTv1ftsRxUg9VM2Q6wHf1L4cUsBTSWY4PdD1nK82uvnYA1G1L9XQzJZBZUBg",
  "key13": "5cQx8JMJdQPyZN32izRa5Ngw8uqFuAWGtqNCxEn3WR8f2upZfdakTDa6dC8fmvSJ1UYgkikcXYC1ATcNtyStqzBZ",
  "key14": "4txAG6JaWUj8TZ1cNNMN5cr3vsqLD2S61Dcm3xKBPw1CyxMRuJnccmXMwoVNgjxQFFbD9qPm54oYmALdwPwrpCqx",
  "key15": "52MkbVm7PnS7p3vHG6sWbE1oJqPcKrn3vF5rM19YhQASdBXdxda57dyvdNtQYGNbPPJdWfBYEawUTcpoR4Bhvex",
  "key16": "Nxxx2g2u3MFTvPWfW8Xu2g25oKWrGUkwqPim2qPdUiXvPyqSSpNREZedbsss2zja3eTZD72pupSGZRVPoVaZSpw",
  "key17": "5YyjeMjQM1ZigS17yzerDaZAtmXsvW12fyPHrN4QeWTzgFq4ZRJmg9kRTEJhijJFSRnj12TwGjve2RsWHyXyEWx",
  "key18": "3F3ooZs9orEMu9CcNJPHuPbbfAjyZFb87zGfsp3SzHhP3U97zTk7rC4GxgjdRSoeSVPhXnhAffyaiK5BpWERR3US",
  "key19": "wbRdmamzNNi1opCvwZGf9swyyYKr278cUgmphRJqF1eeG6ENhdVRYChL9wyDSojGL9ism17YhZMJPri97mTJhaJ",
  "key20": "5bT93pRrPBKSyTtq11nkYuCZZjaBobcGja2daHGB6LZwgyzFbsMgALhUwFpGf46Bw7wZifcvxEP2k5q5sNfagVHM",
  "key21": "5NN7Q8sLp6CUZKzypEovtpptyFWFMLrV4CiDozMipBdws436cFqkj8o7ZjaZrmm87J4yYLBGHAtwKDqRzHZLvsGN",
  "key22": "EPgybsnTqjDBUQNMqSkz8ttLLEr7qLvDx5MmHjHXbPJn7xm7p1HRhCuUMHGzWdKWuDJHTLbSyn7cSspLx8SvQre",
  "key23": "4dxVV12pwR2bUkNTJ61w9Q6QrSdCQgKKwnHatq9pbXzGARq9gezrJtE6bH8UR2dT5APBNoKjKZswvpaRgua5zJ5w",
  "key24": "4rEMSJa3sWy1wKpJFAsjzSp359NHxmK1jrNjQMpp9dUCG3Nj5ucx28ohJJZ5KQwBd2vw7c8qSaNjAWP2kwB4PCda",
  "key25": "4ir7cBaZqykHQVLKsWgNvZbcaJHTwmgiGvcWE2m8MkHMReoCqygR6JFXgAhT5UNJVKn3RAYUEgL1AZ5no9WcCZhr",
  "key26": "2Vmk2JW6BhArNqhkoLE5rTFU6YdvbviBVuWAJT2TKovR8ibe4CYHFrEUuYXxNPGP7PcpfDzGqhhrr6vSCxEjkjVo",
  "key27": "5TVabU2gYLmNNbF7YeioRM4u9nd9CUHGL3AmbByjiNtCvG3RcTQ4X3RsT2ZzWiiEEt1reKCh3nuj1dpBcEtkbMKC",
  "key28": "2gHBDsguh2YojwE7NZ5wJzE216xptWqnrSQe6B2SJSteDQBLf4S25SzDqv7zE6KuV3sVaaREPDibfvqiwmBNgose",
  "key29": "3SGd3WAkDyheAVo97njYkQG6Pq4AGJFZH3uwQKvaombCm6cyGddwtW5fFJFtkAvP3Yp81USvPxt93CEjSKtuBJ1D",
  "key30": "4N4khMbjQVCiyj2HtFz8eNVJ3KbJr2ox6qyH721oFrRpqdv6RJhnQ5srKDhPV3tz7VVsyW6XCVAFo4XMkgDFKQZG",
  "key31": "2aQGYL9JNWsWWBaAqnsV3bbbyMUxhRfxkdQQ3RGiJLxyA7JFPuji2sXpynV7BGcF5xjnqsSUaXAMtG6GiNoD6EwL",
  "key32": "5QNXncdBhrvEpBhAvD1F7QcDDy7VgLLFJZdVMRL1a62K8WM6aRfML5hJsv2wcoELauq1ckzFeNXu26eBM5eiCks",
  "key33": "bJxSQsA5jnEG8FaDaRx37YLLFJKRTNfsPsPZ8PrGvHDtZCZ5zB1FCPib9pWzndjqpJzkjj31B8bqnfEmoNzZf7J",
  "key34": "2v5DABBnZ8317178i49B86C2f7o3Qx2hxJkjszLbQ5sLM14AbCiFPLD8BdqLgJ1UHYa6fVuUEsK2oEtfKQBLtwDv",
  "key35": "2FUQQgHNkSZP5GTN4QqHieeEh7U9KwSifMFj14APagNfU6mXuHZUGvdondXPdnYaCVxzbEJPp3UuC5yRb2WvwsFT",
  "key36": "5eSQAN9esqwnuWwjJnLRZSshvmi1YuivNghe4vouWwxxB1bTHMSFq7gQrUeXg9URgFtvjHkpfSY5TeB1F9SQzSQG",
  "key37": "3SDRwRpgRijTLdQg5BXcEhkrwEnm2SaNLwRJKhVhQGpSF9A6gRv3bwoJwryDGBWR25AcFknJvaqzWZDvE3WnW9uy",
  "key38": "4T6fpCsPVVaisuTS17yPM8hkttQHthZBF2JdYUijuoZS1GH6SfzLwGJKzxSrJDsoDLGSjqJZPEDjVnKmB89Jq413",
  "key39": "4WdmTcsyirpxDuoh23R6gutjDPmAm7pnVkhJS48WbcQ62U68MYQy2xHn2o6hyFBAjNMhFdpKGDDjA382TFL9nLxr",
  "key40": "3YjqUAdMX7vthK1HsPdr8dZiGquxsgQSr416fcjKoQQ8Ku9DijFoA3bpjKHm8GcvqpLcG1pk1XYDZzMVBCEapHoA",
  "key41": "3cRMqi4rEGBSPDD8cm9BjpQCW6DaEsPgkc7byTQH9gqh5yfaKTr7R88AUHGNijzf5DEEPJvNsPtHM7m5E9n5KnhY",
  "key42": "4R3XBQnTXeoafRFCLTUMuuSZkrV4Gy9ndw9kT5sw5ZU96jWByd7g4BkSzkV1PszyDRrR9WPDzxbFnzLrBHwWkXkD",
  "key43": "vWvHDmn8GwVaNZdLQFJaiXW8jbn7LruXcbQ7x5D4NkG4gCQtFsbH6T3F4Ca4NsJR8YDHFCQSgfRCRMxR4NjxBAF",
  "key44": "4Xd1mTWJ2h5t1cFvyfQsbwSGVXEP5qj9ECpg9APciMUEAQwt7DarLWrpru8SrDuXADLTaQCVKVGSJaHKr9t3D93e",
  "key45": "4QoGKNnctVbGujwyeyP6VR5c7GF1HtZrSdseRhpoHTvMSuiPZ2wB6ek4ckRkRCiy5PSGbDFaKQf6affucPv1UGmw",
  "key46": "4yawKuxjDuXhWrp1oMKWW9MMb4yQ1KqrNGov8LpuAajMpT3vMPhQ77fmczVwqsP5mbb3N4RV4fMJ5UrxYbUCWvoP",
  "key47": "9Egq5fYsE2thLCTAoVhyr9A5HAC9oowcCK1ZEFp5KootMgb3jjyuyVExt9W5HrESfeTU7g1apq9hwQHKUGyXExP",
  "key48": "5wP3PMoVjZCoKS1z9JrdvBwUyurLEnQEbfy9VdNLjup7mEvgXa6nhkDRwbsZskXUKXL1FvshWQPuHprx4o4xopCr"
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
