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
    "5QQR1MKMvCzRbsnEiQGpFmLj3Kns9Zhv9en116yNbKjy3mLSrMtiqWCf18ipvuEAkXuAMaxzmhREknNMX5Uny35H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RF6CXjAwoAwf1Lhyr4XEa6iWvWpZHCfvrWWP2kzAz4A27ThUQK8AuqvUbHJWmYgCqECbrgyyhstKTBtfUAHzLaV",
  "key1": "2ZqVNKnHiVaEU6bwvFaEZrNuCXihGRrFtDfQeCMEkeSbUsPyPGy1pz5NkqpkmyrnsxxJm9UmiiKcS1Lr6AuZhZVh",
  "key2": "oWpEhUtPvmpWkZzGKfNshhzH5PwWcfRiDwWd2S3rsrS28bUvFYNpScddFoBUXqWjtVtAKa46W88Mtf4y3taQerZ",
  "key3": "66VHZV1JHAKvB6NLMic3VHegaE94fud8t5VQwtCA3k6oqsBMsLA8RWTmXFsoJYY1RBCM4wT4DuvQ99Fbqyes1Ap2",
  "key4": "34rCwp9AMpMbYbv9BGzjGNo2BWzaec7acA8YL7RqC3VePCTcqKaaZdAjLGDyYTQ6Lwn6RDpSeWHDRgWDvqo3U7pB",
  "key5": "2q3MQ1YBv3uLitMiCEVFAtLNgoqdndwuLmd394iua17GgUxiTYDj7yowZiGPtdVPkWhkK5xAvmRXTk6uhRBvsL4e",
  "key6": "2T9vyqoKxmNPfujZtJzDZZEfNoJd26bFNXVS5EGmBsjUtwbCCQBSKrz1ZiPW6mgnh1kwYAjEByc3rg6vwpr91NiR",
  "key7": "3caz1jPj8T4VkEgKUBs9r4g686ppVDNj2tbNoW9xrSx4Wh7T3CfvnzWGqW9kqLyhjLQFx5Sa7LzAXyNJNpagsGKt",
  "key8": "2E8LiVbzpeyK1rwpXb2thqE3Sctpt4Xm52RznFNNETzwsNDRaFJy1dtnX4GuLhxhfr81CyMj1P22UhxY1bJPbQ3q",
  "key9": "3Hn2sbrt9XtEMBpxzk4YDpB8gA5dckbrg1u5tX22Sa49sXCVca7RtiKVhtb6FxR5ZxhdzVan4xtTubcsWe1mdgGV",
  "key10": "5CcjTUyXTx47Ymx3S7PPL3dUbwRMWnrVJPAh3fcxZAT8MSSngHMbJ58JjZ6Y29yUnWR2eANWC9u6ozfudGvUy52w",
  "key11": "4CFQfw1j8tXgDszGXPk5K3HQLUA4bpaavgAYPHnoAxD4CTKzULa7rCg6AtmN2wrF1vyhiYhmjt3MiWopBLxpMhvU",
  "key12": "55z16uwrwUyBT59H6V1isGKAiQqFdzf97HVmnUeTL6PYFi7zrNcKGqFWaPVb9Li1vPiFzHVYmCDKr3nCaDtQv1sz",
  "key13": "Arp11gjC8AwEYzHcBMSfMNmDcqkf5kqUL2FeEU4t4PtBGugZ2JjLzWZh1udZkqBN6csHQKH5uA5h8DT9QCnvbSj",
  "key14": "66SJ3VRBu3jS64ziCp3Q3eMxFAQ857dPFQku5oQrqTLXur73mhhdUSBZm9HKka8q9LeLPmTy3rvSJCTinVWedSrj",
  "key15": "668mRU4ebs55zGgbi6QQuve9WQyizXVY2Pq3gYwaBgVrNL96XJGtPjEg6JbDDLeBMrTPdix8xc6SFVVcaCvpvatB",
  "key16": "5uusfCmbVLQkLMRPEm5CqfMEy9XCqhPpwhiUdZpYLEFcGkLembN7rTGXwab4JBWThkWnqWfXLtrestSBhUX1t4wp",
  "key17": "2cUva3F4ana7VXKHb3cjA26WNBEPtAovTXWwkGmwu4PXgFYsd5WdvsSBX96Kgit5QMxXmVgodYBUQTxiP1kPtuwq",
  "key18": "2Jjc9uNE3hBbWQeWyhXhCUXvj2jT1NKuT65nYq93a1c4mqKkBRqXU26jSS7Gi3S1M9Po83h3GoxMdK7SxwSHkbUu",
  "key19": "2H5yUggEBDNPzpNtLZ7FUzBn7pENeU8Da5SFYWuww7i5itj2ssYZprPjR9HskKDueqD4qZVU6ygGfVVAzFa8GUsA",
  "key20": "4oK2Zq8vj9Xfbvs62eMtR7dd1JA5XLWL9uTEige66PKHWavDmCcmyfH3xeKP11iDC1s7sxfbnfjnLQ6HLSXBuRrC",
  "key21": "2M5UzZwHoS5Ai6C3Gr1Z3XfgF6py4gj5vSaYiSvXLxBwBKqDAGr9pLGgkJhjB1zTfpSxGhZ8NUaJzLzzcDWtw14f",
  "key22": "4eKmzyyudB4mYrEyMtmsVvCG7qk1FcM5mBSBxoS3gG657By3qQmPJkFsMSG3bSxM3TfbL5s4XUDVx8nuxDBLutFR",
  "key23": "pVbP5Y9rSntGZAGky1JVzKvY842syEgnV2nzSxiX8QiKuuQSgoYFXVoXMQiqP3YoNpm4jY1PNr76BbgjqQwiXM5",
  "key24": "4KN7a1ZnJsHtzbSr3MZbqa19zKVb6tdR2fpPPeGAVXmGx6n6PjJm69DKBm5cptZqdR8tk71hsgZ2WA4cr1ea2HhZ",
  "key25": "5sFk4w1MkSBXRQ5EWoi7dGx8bw3sKvLL1vmLC8aesZhjJXiHNHTkpoHS7ZyEhGcXq7jxknE5Fc8yv4hwRMdiZxF8",
  "key26": "5eRrLUDrjUkYKPCNzSJT5AZLpunZUqDkLZQinVmJhJK8KYvUCNevgprmogDFMQZf5ivUaDVmtkRZPBtWnxv2LjFv",
  "key27": "3qncnZxqwZ1s3SVHgsuDrZS6EjH5XFzddYsXKcxhjZmDdJJzZYyASzdbBCYCRx1MunJsLs116ShvsvTWwMtMVXgh",
  "key28": "4KTtuonBtGkicM1kpCid8WCk4bmad8S2pEWpHfgf36S66cKPtZxVnDLf32AwdoKLkv11rXkG5fshavycsY7gnc7Q",
  "key29": "3DN9JHwAS1zBr3E3y1wpSBaJibe59TqYj6pcXH4R26qTrfFZEdanvWRZC2GEpWrCrANkAhENtnNMH8dkQgyh6SgB",
  "key30": "22HPcgKXzm7nCL7hBxYbqcC4YwmksFc2CVkYtnRKzS4xH5qZPZC6PdXuYs7KHJ1PMxj2X8ewp6MZPNBAajrqWbwh",
  "key31": "2L4eZq7LRgwPDv6yd1qnyABxkaVd1gxB1XRaoPzCuAgcWN8yMuUJWf4BRuRj76thm7wLcq6Qcz9waioKQGD8J1gn",
  "key32": "3mBKuoAj2EST2254K2fGGE3bgDWtqDmxXu8vFMVL1HRz55JxLvZtfjE2iP36G3bUwfaXL7n9zUxiGJt87AYvcprL",
  "key33": "3WxaUuGE51puTngTsAeKbWKdkHSayBcDjNMtbK4tn8S8QegkRA6YP3kEmuuwcme9G6EHMe3AqzD4KmNH33FMwi8B",
  "key34": "3Qv9KjNvGHf6HcRAa1LXfgWN4dq1quFGaXEzYudpzh8Sa4UcYAh8noavX7PqVGz1Qqq88rGuHGYYdapYpi6XectY",
  "key35": "2tzSS2Zxrb9L7DatmFasS8iuoamqhhutEg7X5tVz3Z1zBMmvLtiYQigY3wmcqnyScmsxe6HmjmbBk5s5MG9JKF6W",
  "key36": "4gXTdNwXfz38QdWLKXRb6aZMWxXuYP6QznrQZFkLkcfM7C7wh9BhgeGiqqsZvWWipQRUKxH68Hz4zuujmptMzFCU",
  "key37": "5CprnXKr4hLW9U1jCk6yonf94QqvGjsx26jCPyvHJ2PF2NjdTFjpwMjjCBBqPeZKYrP3ayTTvikaBNmJzWTVccXG"
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
