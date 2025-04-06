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
    "2NemmBQw8W7USNmh1i5FbFTUFKKyy1PRqq6xBfnmhroZnL4dYzq6Ao5sqdLg5fDCaEfa2DzEr2QHAxcfd4tTGwsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9ByFyS1ZqbBeAsU1UMBzzeUQugHXPvskfp8o6BzXuDK52S5bX8KQTdsTgbZzR2RLu3vQfiaKhZjn7xDd9Lzgp2q",
  "key1": "QaFJvGPuFwBweR3nKdHtwpS1iYrEUMwNTX2865m1Pf5qxfDrJhnLHNEWz498TJrKNtVXJy551RQcVmGvJaFC1oj",
  "key2": "2x38Hd96cEhwqemPtqcLi2vYUYAUqBMstMSkcYXfX26s7ziLfcNgBF3QGijYYUAhkV7VksAchKyqGH8kEHgMDYjo",
  "key3": "3rZaKcM45XinojmGc17YBenf16PSxncR3GKDkeszFZ6oxvnkDPPUxYphABiuNs445VXnE4fJbbV1JnH6Y2xiDBZo",
  "key4": "gB7cgH5ALKu1Txm1YqhgUgxwNQJTjMEYQKYwU859Bf5HmHSyR9r6iLwh8YEQJCMCnfpjR5QSSzYc59b34yC8EMv",
  "key5": "3y55UmUCBNbt81maLm9tz2b2gNBYBfR2rYMQrPfuodCSjoKgZHQig1hpdJc2hk78EqE2XkmPk9GMFN6QEQVGX7ai",
  "key6": "hKfCmwdEW2JJW8PsmVz8VzNBLj2EeCW7gZKEuJwzaRE5KFxKJRgA7gU2WkA63hR7W5Eht8NPJE6Db3UT9ktGYJt",
  "key7": "5rjMr3Wz5WWnF43YH8Y6THUmnFMvSUL4tz5J1eXDN3XbR9Q6AhvEK5Vj26377fn3Q7t3mQfX94QQC4GfeQdAqTrg",
  "key8": "xpuxMFrRZTJAw9idQStXawExQyhZKMaPRP2DdaUsFa82HagpBFU6TnzCRV8kfGZC8ySXqyRf5QwURhEr67L4bdL",
  "key9": "3rvr2moLrPpVF7vPyWFnkKHEsHT7EHzCKokW36uXBHMnAzVJWzf1egT5AXGUUfQcgE926zruWG6oodDKpN9oAWB2",
  "key10": "2KVkkodTHzUtsPNdH2UJSgNRMGjmG4yE9vnjogYRBpz6Ndf4T14A1AYcNph9ujD6CPsHkPLXRxtuTui3NcMdDj6U",
  "key11": "3t1CXJkfNxB6CWPcfccn2jWDpvMTms2Mv37ZcUmC3Rau1NVvbY3yz9nvUYCVubLbERpsBMwW3p3GY1TLL4QhGb6m",
  "key12": "4YguYiJgcibHTKfPa8eFiAqUZonBeAeAJFVHohzJUPdDqB9wpQw4cGnBykwJzoCpLkXypv51TXcRMptmL4jKyYhP",
  "key13": "2zeNAvZjcqeksvKMbWqsw6nAU8F6bEHXfiphkbFPxCGH2R1ygfc8K5pLQndaZyn8Mtc7uEZPTGMej4GhsJB6Bg6j",
  "key14": "5tvZVLXBfL9YPFjP18VgaCFYaupi3dyVcBMPDkozPkHbc2JY1UAUix67qGFXJyEGCgPgcYVP3V5zn5HDziLQVK5r",
  "key15": "RywZL4CLyp6reemuLGkTGvdKhwr4nEN5kaDy7V3gpcpiiw1cBnZXg3kaaGXU1RHX6eWMnyCMysaSB453ToePKV4",
  "key16": "2yfZwHh3miWrzp3TBkFzZGdY45NM9dcPyMEc64MozXeR8zVP7Gnvbkrze3WJx558qusgCYX2XPqJjZfBf3ukxRy8",
  "key17": "4z8Wa2sUak8TpK8N1DkGdPmgWTRFtRhxo4qHXqsNNLUg5VgfJ5Puna8QhbPSWQ8EuA9pBgMxDMNzVjK4xvgicT8f",
  "key18": "3G18M3CBwgtjUw5rpjdUhrM73sgrLBidGrHZb3qg7oYFy6qTWsYb1hwsgHyAn8uwuymBC25SufeQqdaz62cvRyQ2",
  "key19": "oiHYcigRu5QE99QeQBnsXV6n7p8sjHVZDTBADmErsJtXERhbZUohS1axoCvbVf3TAgKXcC7dx4QWx2i6bmJpU2X",
  "key20": "2f5EyK4GTCyf5XYrNLG3R2HcsKRNSYPWdvBjcV8cULEdzEXS512nnd59hgSj4BMzQf3DLjsZGWFJYjPqdeZbXRRN",
  "key21": "4LvbSMG6k2vb3N3DRGmtcL35V23qPu9NZZ5phzScA4bo7YcabCWVA5PStDMeDauDSy2gxcg5fHPh9BpXPYddwyVa",
  "key22": "4QchxNYzWqjv7ydB9yWEWwXCQMiF9k1rcMz4iDVsbKjbTsyiub6io1njj5HUztK3cNifL61hVZsMJbpqVEtJtU73",
  "key23": "5q1Y2xEgQ7dqD8EsDGgY8NyJ9pVLoEtHa5LpwubVhWB2ycozncXAXXnKP4AzgscmKLWvzJnRkS8LWYyMx7LShDcy",
  "key24": "5aEiPU1PKeCx4iPyVDdeaDtFmd6jZSc7biA4qxyw1ugMpms2qPtFGLbSRtE8Jhu6h1AQHqjzRiMssCy9FNxPnAoM",
  "key25": "2q3uJXL8B2xZ5UaDFS4tXUc5GqzchtBvHh9cLBJCfT7H29dEiFrvmtA8KjqZmvGxXnbiaqKrM7gUHSf9qEo16cVi",
  "key26": "5CPH1ok2kS1vRz4gFNYkMQR14ygswi5buiT5gdCaFqoAJRJ6HyQY4qR843sQjjZDrvJpjGHnknvRCUE9E4PxzFun",
  "key27": "2bQ2Xa4aAQv9SYiQPHhAUxN1H3gKi9ZxbMp8HSrgvNrG7Rv7CbjfSNjGqhY9ueCVz9YNwWECfWG3KBGbdRLYHHy2",
  "key28": "329QmAD6et5V7R4zHuxeEWWhj9VXogM1hGhU8r1MYYeqbMPZwh3J7sQ4QVvEvKKiTS5ekbovDJASvBQ8X27kTAXb",
  "key29": "2uPaH3ywY4mxVZQnujm6dwTZ98kxAD9xxVAwKLxoeQNUVfYoJFQaghaaq5vTdShCLSzvpj2awjfRVq71hfbwewPY",
  "key30": "4wYca8ggALWWJxJ1NxcYFjcXUC8DPKdwrgu2FZEoX67Wb6sGPqxfVzo2APWev67kBQkA4J53GsV3fXW6egvg37Kj",
  "key31": "NXdRtbnM5BotuNBMzsU1qsCgZmizrtab8bFAKzH5qWDcsY7Kyu5aNHNEziNn4zxYBxu8CfEbJZ9cqs5Ga5Y3Pyb",
  "key32": "3Z1y6K9DU9QbFSqVPcHM6R7dwcdFSuzpRu8TX1tMsDmZTaPEL59v8oYumujoGxQj3n8JmcHTnn9xDGSsWgaPKcRk",
  "key33": "5XSqosBDAcMgvJ8qNDgvRsEP246WvErvDAPSb7zR6CGyd8FAyNFxoBQWXupfMcRvTU6FrhtZEp4KLQbLa1gDJN5H",
  "key34": "4dx7dsJUXJuVvJqA1R6oRbgV9E9tzaKeJnuvuDoRDZoXaAcjeyXHk8qzUbc3dabFXA9xCj2kpZ3KqGH5ugPkLJHR",
  "key35": "264a6zGvtAVbDrTER22hFABLwQBHJbrZUUa6oCj7Y8UVFKVNhKDYqDcvYxnUE6dcVRkAwmah6WtC4L3QraJFR3D8",
  "key36": "5ynHDwqdHPyC8PqbkeHQoAytcG41upKyoS7v4zsi8uMwj1X3Mzpp7RkXXBwvbG9CvmEZm29BcmMwAZujZMRSFbQc",
  "key37": "5uKwyQc6yo6sFoa6eHWLbS75EdhZeZypQL7SbSeKYZAsKYkMwDu7sTa2JgSYu1FrDpimUBXWLf2chDsfWAUHrYQ1",
  "key38": "64JKvLzgg31yVK442heo98YM5Z3wk6274T9HkNEoSZU15LZKNPzKY8H5xepLS88WY7WAsJo7qD5SV1RUu3XFHmPC",
  "key39": "dKX9qBLt2WXMEsVscLdUe5cowi7Tv8ceMby8tsixkzFrEiwA28rzy7uudUVeqqGYURxoFxpvpjCCzPJhXqiE6jn",
  "key40": "9AK5YLkVQbp1oTDP9xTfxjULmCaemr8B8CcdjyT8gACTGHu6fLQmT5B2qjQjc5oSa8NRv4QrmRHaWxsNAXLVJtZ",
  "key41": "fnyveJfi5vBCvpoezeR8p4BRT4BE9K8gmV1L6UeMo2CnGbAefk7aQUPLtMBhq5wrKkzHGg22Q3qk1qWkmW2cNTe",
  "key42": "28E6VdQPwv46X3vSmqougMBJPJzBtKdyrGYrXkopjyuT2UC5cuPNHvqc4fKjYhFFC4Q8nQ2GGa5rM6yJXEqTEzEq",
  "key43": "2WhVr7B7qMM7mvNxB3PreARvQ3g1p7jZdsBAzf2Ykk9aeH6hCQQ2NKZAKDvqmwGtxiJW3F7eyTBwn1oDRYHDQ3Pe",
  "key44": "9n77Pnn47QPVuQDfiLCUw8Ty4YAAo1Whf6YbsDhQqQGZg54oyTMipR9aM8KGu3TQL9tAXoibDV279AvMzhTEMtd",
  "key45": "3xN581JiWJMsB6zPhyhjCVACS2XavKpS4XZn4KLGVrE3wv4eyHJTJLdnsyLpmWn6zsYkHuviB1M3Qym4JxPMRVfZ",
  "key46": "3RGhqUUZRSnHddYRFKVZqaeWSx99GhP4YHS6W7L9sMK92XJQP242uRkkToVUCcDL9LyY2tZfU1nrozKDswsczbqQ",
  "key47": "5ojjQwVR4WwmYRDxemBzYeBhC6PhKvjcJvZaAPYjMeB5Q4LKKEHZAwQ35rzEPHnVRmVWRMWMAGKHBa751g4Se43F",
  "key48": "1vXwHmbo3GLikobSwZSRzUsctrenDdns2v2JUf5ctUsHtznj5KazU5rgRHF79bzaNccGagXgbKRbHDukUQwVmQn",
  "key49": "38hYkZtBmRJn1QH1b5ayV2m8hsTfZ4ZiXTyavNxD8kcuPCdHhGErMcQK5tGe5cyobzExmPFt7CuymfgqZwZ2MsG1"
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
