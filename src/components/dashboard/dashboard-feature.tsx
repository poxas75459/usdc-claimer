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
    "57d9nf5F1s33Doh5o3DK1KtgPPTbUnbEPE3FZ5aTXeQaVnahixTFmPTH7TqUgqceSSbxCY1gagUD2b54KkUjchBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DxFsv9j3yu82Az1PZK77aMo2cddA1wkGVuo4xg1kPF56gQP56EaoDrehTWzRLiP9sv2A3fcLxzhmvUUgVcbUJB7",
  "key1": "SYAarwsXS1DDUCo4d5n8YvC2w681GSvLe37R6jTPP9iMSEQqT87arvo8jnYx3d4A3nY2CjZN3eGroj8cnnkpvZW",
  "key2": "2CCEsdBN8PWbGumsYeitXd5SnMRMi9pQLe34cJVu8DqkiJeiLwdsRbsYkVzqrbdxufSBxR2GbuuuqMpfQVkrrFfX",
  "key3": "56zfUSF11wzvv48VM7koNWtFzmveovxjjo9pLJ2njkNPjaLLuYNxB9N4p7kbhFBh9up6zD5d45FQHm26kZ2zGCPm",
  "key4": "2k2NwRho8xqtuGPgwvA96mzzLLcLLcxUZQNN6HfV7ZqB2gXkvEMnqDmSxagLBLz99LLnSKjoTw4nL9jTgy35os4q",
  "key5": "4NgwH9WayHDKrQz83qppouDxwgw6vP7zkwEbZwcksK4VwWwtxUzYJQfXwuG7GcxHbg6BzEcUa14Uc24tbDp8ctrg",
  "key6": "UQv7PkKgkLUhZcdYsWMJEewtYWECPBUnd15YYkfwSNzhk7gY6vKzjVGkS8LSDVNkkWu6mdjfE3e2N4EJMnJ96ZQ",
  "key7": "3dNjchHTfNyCRqmypq4unzFrcn4QWYy6aEsqMP4LjGD1DYfRQmKNxT7GNmDEeJNwnTMVELxFXgrsKBknULuEQpRf",
  "key8": "4pMh8HTi6RZUaSDPUBFURqcvCSJjnw4nWu7sCrkLgFsSA2WCfVgPS67fVMu6H4MhUMK4XKv65Gd182gt8jeKXHyH",
  "key9": "5sRD5QUx7WN9qPd8EmuSRovq7j8CAKUrL6t5MFKLwACpirNkkguG6yKwX9M9RhzRmQnA9MLvQkhpViSuecx2g3vn",
  "key10": "4BqFA81UybuA3wDNKTPRGjgXSatZuWt6TUJr8PqkfzAgV7C49Kj35hWofxAA5XXHgKmBguAd75ME59twWNPjbPSY",
  "key11": "Adp27WDbCZ67qFcXTbPFyFepaA2zp6s7jAc7exrqHUyEjGi4qVe7RL465xvNjL6hRQku9vgWseVoBTmxA8eHNG7",
  "key12": "1dCdvAp6T87NEwnKVt5ZepBBiJm1EbqRPLY88BH21T4Uas7QsJGMAYih4QMWttrjkNUvPuX5VduRzDPSP3h5e2L",
  "key13": "3Pgevjmuq5v3NoRMPHvk2gazuC93zRgn7q9Z865oMeAQc7DViEFjsFrPzATyJaoyGb4a4gYmjogNbuENWLXZjBhZ",
  "key14": "57sktfjHQurN6JT1kUeNipQdYuhZaxnm4RKnKYEyadEwJDHje1Zi6biPTLeQu94jCp3EKtU5C7tAD6wSdVq9wDK7",
  "key15": "5MKkneuLHkrViTmizPv6PS9pyo1GQ9kTFjZ1xjo9KAfcVNGf4cPN9Ga2DbHnD4eWPkpjB9X9bqmCwT6cuh6BwYBx",
  "key16": "5EczWSjDjb6dy7AxQa8mBKcTHYygjp2ujPt2AXhUzMFGK5knuGTMPoGRfZ6M4MU28vg1aNVu9qDr4zDvvBFPhf23",
  "key17": "4X6cDGow5nRMadKgJtUWiKpxVwGWhc8i3gY1gpkwC474wFSKvcwNJ2s4m5cRm3hm5ajHHB8b9qM6EWUVfpuQ1oyr",
  "key18": "3USVDj5nY7NQYDLqF5Rti6DaFowsfQ6jrJgs1gzpkt54UeKqvbFw35YPAZWswcms9r4jZ3su1hEyZFKkUWTqRaWx",
  "key19": "5zXiafHWbieoYytVLZguAf85TzA3CrRBzhg2Ai8h6JPjC2zHzevVTBwfZa2sKPcEnG74eiyN3dVX4Z7pU1YbN9AR",
  "key20": "tq47xj8fbcXABfh59W6AXFMirXRDMQBDGmPgwwPrKZqqfA3UxdBXCUTWuJkNHyo2NdQHpwAfX3YYKuaGBA8U1Zn",
  "key21": "31sX3GVdihdzE5TPcbTqjVvtLPGBZbTyktq5Ajtb7khkihSApomDHnk3Ywijh7Y4kobAwUzP1FRQqFeyiCgpMgjw",
  "key22": "2BZv8rjoT7HRZNNUQJ1rd1pGfwQ9irEhuPUzexiwy3YphiFgNW9SHg1X9zLqvwZEAmPTdfvwKhbpLDuc4c3VqcB1",
  "key23": "2hUvifpvXrmv7sJxMu1DReydfLGekBt55j8cKG4Lu259FutP3g59h22QDL4rskNHbohVGG9NxfoCXrxUQRNWtLrz",
  "key24": "tG9JBrxg6nCiVQzCu88asZx6ZgmbjxrC8v8mDPb1otEqc86AMGtxggR9m1hAUdDiVp8S2pmQtoVF75PN7FYqLs1",
  "key25": "4xgmrCVVrG5wHfJRRBZU2QAFapSpmrmTQEVrKBrE32ihkXgfTjcKnxvmQ3Xv6XDhGQyGcCsMLk3oeuYxL3yyw5b2",
  "key26": "MFqw6bpyQe9P9EJg4dL91jDZQjdWzkJSQbZ1u1VnwNKuDuQdztDdYkUsJNjd96vXx6eBBtbkiLd7xLKZ28Qv2EA",
  "key27": "2LBqxVUmxnetpV6MpV64UPLACbbkNtZqMyqVJ5DbA1EBHbqJjX3pYAy2ZvNPPGk2ESfzqBr4DwhRp8LeknnTxpVN",
  "key28": "Fvp5oZVUMNvG1cLAnMcCMciu2ad4JbWYvfXN66fWUZyN88T6c2ygDBo5FnH5V9J9CNvZe9jw4KhaQP1mnuRfJTC",
  "key29": "35zw5DKsJFeF64UuFaJAWCp141FC9bhyZYcqHv91PwKp7DV9ff6Lgu5TuEeXaa5XPq1vqAJFUMFhCXP7QE9NAai3",
  "key30": "4T71SsZsZSN5FhAb5hW8cV4Z3H4PkKBjpjKnxUXnLRphB5kKUd5Lb47phkPNG9wxyGqiVYwSeHJafUeJQe1Bi2Xn",
  "key31": "3Pc8rKqcci2o3XQtUyef3D5y6PkY5D8BZuMDVi5oC7EGUU2nzJkEMrj2uECmcxRGKoSr8unPk1d2h3gMPovr7hLv",
  "key32": "5naKTQtijvxQykDcc4pCpfaugFi6nZ5H1mDqogTYqTF1DmJZxqZWiXMe3ZBMjQcKTAkGBFcc2BLbVGSufAteXWth",
  "key33": "5nj2nMbP4gj7mGb11CL2xRSJkmgwpVXxVfL6Py4ujz4DKLz7AAN2KsqrDSPaa6Db2hnSwS74DxdCLdJQCMp1yEit",
  "key34": "QStAojinXfAS1iQ4oASAAM1xjrUBmbFdiw5CyFLZLQapciYy13r5DNh81R7uJJKhp3PRBDA9wrKrgbFgJYSfhwE",
  "key35": "5595bf3wAeof6hUZobCwNXnofmoxDedDYYHuS4yrq3LQSc7t3pbcsAzxBXiHpESr4o1n1oehQnCcxWbA7fxpxwZ1",
  "key36": "4uktyfgQc9QvJZA1fCPaS4LZHmT6fkXErqRTJRn8kBeJGfQrvUdkWHtpUvVBY2fxNGKzGgiXmmBoSCisgQ6euZC",
  "key37": "3KGR2U4syVnxtkBhtApRSgiDWqtKdKAjpjFmrrLokhrcWVXhfvGh79LGJAzpei3UbvaJTw9geDQQa24yEk8mVBCQ",
  "key38": "hYf6NT2YCsRyRxMeTWUAjDFGnt6dxX4mafw8n1otsgaxbnXsCwEfGQHy1SN8wULuRUkQXZwoQ8E6rrjMjcUKHvn",
  "key39": "5pHmWL8W9ufv7rVwbLux2UTw5LkbuSKgsXAWmcoqVfsjKdCZSvc7TmvnrDVZSxEdvQDPqwrHu6NqTeQQdi2RpBBt",
  "key40": "tZKnuFoGvro3pofYQmhq9kVutSfUHvBc4zvAeGHJSxhytobgoQDZCRVBoJdKVeD9krDGcVpJTJHCvSssmbs16Y9",
  "key41": "3sTwa8hZEj913SicR9jpPhd3FCYNNKDpCATrftFxJRZA9xDZSL8U5JCtXbr1Do4aXbooNyGKBZUCeD3rDBV4HB1Z",
  "key42": "5JCNXUHHkdSJBNDVMHYgzFyhbqwVcFpA1mqtXFWjmhx6RqioozP7MjLoL9Fo9teiv6KMur4piYyL2bNjuw1kxT4p",
  "key43": "5bCfQRd28J4RKAjZRrHcZpgjCoboXHeCZQdaq2kzprrpCK2KB2KDbmMQDSgKHoBw9XKMrS1oib9ML1Sb13o1hr11",
  "key44": "2iEuEGsyVtUxeNxFHHSQ55w9ZxRV6XSXNQp4XCojhGdQZ8WrxsjQ6wvo4JBqecxfYXkPUnAycPqZqwkTyMy9wu2q",
  "key45": "5LxEvaY156XjzQS27RWCEMu6wrjQ6v86NPnRYHZtYRUTdCKxwkpjm8zzqymCpme3d4rq695XbbQR4ZfhAWiUPH8v",
  "key46": "DLkfFYJ51qyGuczPkQyfMUipVs6TsE8WF3F9rddoMxqYFXxMtuNiASU8H4Tzt2F4q4YNTvrYjHAKhUHLk4vkxY5",
  "key47": "DRUqskQvvqUU4n39zck1cKszk7UbyMpsCQ9q4LnwEFnv491qqJiRCn8AsQQs7f1nom1yndLHfvRAhYgzCWtSvrM",
  "key48": "3qRhFk77NG45meSfQpCjzmXuNHyKa3bTiU64TcVMc25CqnHmU6k1FFGGt5EFifu3uXgrHX28zgncBqegdB2bQt4d",
  "key49": "5TemnB8uFC8CS7zZrQAwdWMEUGjxPo2qZZFMQ6vXisdBzXmBmpeAyLNxaZ9JJP7uFpa3xbaRiBhffQq4JK3xu7jT"
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
