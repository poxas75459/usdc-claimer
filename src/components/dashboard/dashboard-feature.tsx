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
    "2C9qN183YwTy8UPasTawDq2hgfb67qpqcPv8ps1MKZPQSNTRU8xb42kDrWkYwsjt8dnaPQ3rUVfKi59mnra1ooUQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vQiSQSmC9YoE9uCPLCkUFvML9ve5esmmDYnptfCJzdLv6nDx8gRCcwxtYj756nPWMqcxAq3AdmBnjnbcuDFZ85R",
  "key1": "65ysFj3VvuzmzgD2bs1XVinhnkhQ79hpa8KGVqGLxjcqiw2JgWcqn6rEdfdv4QmzyEkdoqqztyZfzN8sNhYFsotU",
  "key2": "3wqAr8QWALyuao3PZALwcdS2YMtZcgmzoQKXPpfU34i5U52ikdU5QEpEE4v7XdmVCFr85DcuKyWpeo1yVtt4wD8",
  "key3": "aGFk44YCm3LhDSStDJDTsqS7nH126JrG8UhGhgcyFZyMzyNivzPVzhjHd9FkguVKEyes62Vb4jV4UCnYGXs95yd",
  "key4": "4WNXhphmMrGTmHD3pU19TKSftUWgPLEaLEBgC1vSA61iB2bMmAzpkGFR1hX3bNNHsECecd3oA1xdmuk7oorqa176",
  "key5": "ZicjK4hWNduaXsu9kdVyGqkFea2FKiJpWv3GNt7HxfWm1JG6PCfz4tAfHsSm3iLQU5zgBeD29WSZeLnUvRHnHof",
  "key6": "JW3CTh7fvf59zYTsgSdqtT5wCi7kCssk35BQZucH9fMJA1WZvw2zvETzdFQuyt8CYJNg1GpiTte2ogaZjoRgUtG",
  "key7": "4kX6suMtm7p7vpXbAY4ZiDrmNyr2f3P3Ww4yuoaYae62ABGRtEwzBfYHfjBn9LNWW16VNHxT7ABctT87npMqkTfg",
  "key8": "KrcskT2junbcM5472uKero2oQYpvBxgb2P8PBVomSGd7sQbhPZgUiUuPMATLJf1JsJ2wiTJxXfJrkqwCdLbNDTx",
  "key9": "3FpMohBNJd2gidxq9qYZ3FwXZyfa7PyozVJQJN241wnS4NqFdoJMkFkVwwNL2yjGWj7P8qddzqy9i6tx1Zaoee4A",
  "key10": "4j9gBySbAJEuazPQ7KthcMQfQdDiKky3D22jNM9GSmfiQTM73RUSr8RydzQ7EAzKZPHESCtMEcpvo53PrB3zh5p3",
  "key11": "cxsYr3J6my6fWWiMkishUPsf42hFE1e1PPSmM9VxWbSn1AgRqfZd7srzdeYxbPea1odm9ceKyFEcqNceh9Lx3nj",
  "key12": "2hNkF7nUZQSHfs87kXCZSgxB6e9r1GquC3TGKTjVuZ9XUaYKzwwSi9yr4RoBbdMMrN17HVTcEDAh9bbE2FJcBCh4",
  "key13": "5SXvfcMnRzFweGCWugHAgNmvVb8NUx7gagsKb8R87y2VD1zAMWMQgbXYvCekAhvzZ9rCQ4uQV85eNBm1xkNF2Mmw",
  "key14": "3EoESPry2214PUyZtw54e8Nmm2bb2UKYH7CQ7zxXaa74sTkADHzrU1Q7QVocgLMDSCjR7w5o46G5fjW4bzEs9KK6",
  "key15": "2A54zzSnk4EAxne45mD4CtN3NwDWNbC8FYV974JVMjLDQn2xey3m7g8YSjvqkM5vgXcFLzxZebynyMyuU3sAdcNp",
  "key16": "5a3V2bPog6AYDGKMzHcFRgHnaVNjrq7k1kWpzWfUhM82DoJeRRFCkxsQ9QhZNCHheU6LmeHox54x6euMAohyYKZU",
  "key17": "5DntQzYvpengNp7VZNUUTncuUkWMAxwAoHt6UcbfhAjs52zfpsZNvoNSGujqbNtF7i6WzBfBBnAsWWgaBLykyg5p",
  "key18": "2kPcU6tKUGm1QQyp4SSBDFb5W3PpHJVECJXLv6entC3vDXQZyrW9vcZNkbVd1zUmcfBrSEPeuGE9hUAiQqHD5R2x",
  "key19": "2KfEXSrKE9EpYdpRgUKeywQmAEomK8E6a4ABJGRVSpZQHXoFbjt2DnZsMYqBHKzVQeKorvU4qtqCKiW1JjmcG76Y",
  "key20": "5ztP3Lwt4jXqjZQ58UJLo2ziW2gnP3k2cuj7JpnUSYxvfbPKXBd3Qy9SssW5k18ndVfvG1NY57TeeY6KeentfSiu",
  "key21": "pJVFnYM3QDJe9f4dEXYoGGhmiDXgs3MJqTVEg55KsW5nSRTND1k27XPV5gJHpccBHTDTUMsj6mVguaKw944yvay",
  "key22": "42BWTQzM8Zog9SfEMHtafjfx8T8bKRMhA6Qdmw5htdXk3EK2S9WsrVgzRLboMCa2HTvSoPJMMkV6qZARpCpPFVkR",
  "key23": "32D7RBFhQ3zpkT9r17XAZk9ZQuW5dTv5DBrVqDDUERN9FYCBmdkjxm8UrYRtakMAgYgkHScx9WcEoBjXPkt2Dmmr",
  "key24": "43VizejjcVz1bXggP7HqYTuPrrzAmF5LDU5J13yJY6cwRkjndiQs9Pv85J5rF4GM4x4YY5F88uY9HbosNn8BjKpm",
  "key25": "5KGAGcfTXcJY4qFjpRMAnEEFsnHwnufHPYvwfbk9mykzgHMFKf6KL8ULyGgFqhk46VNhfpwnHA3Lq7PrdwvHRiSM",
  "key26": "QZKBgUV43CCJnQmMeHcv12e3ZC71Fu6RH5hc3XMgSkZ25Vhapt5veBSvGs5HMUAjub4qxgJiJBhUaSDWzdpAM86",
  "key27": "2EfKNTXhpTSUGXiNFWBmUp8zwf94nWFn6rCVGSDQ4xEsGR8v6qYHWoRMaFo5stipF5k8mQwP5NJ6uQncmYMPPrpb",
  "key28": "4bfNEpCVhXeGqSTz5WmxBmj2a4ZzmwaYU9HMZXuCmpzYCc1B5HHA8wTzumnNFko3kXuor9rtEggg1S8GR5XcEXm5",
  "key29": "5daMgS1TfaSdmFjNfgqpxRZe5HhybTXyRvHeWwEptEHa4W3FmA9eE6m3LVzncS2cSdfNXBbGUAbS2YwS6U8v7Qxt",
  "key30": "gfV4VN8LBHhP9UCHHh5oRuaUegwUkLCQ11M3QUkfKMXfLfBP7tUDdkXu1mZkJpi81nSpZqJgwnQrJxj6Q2HXMeX",
  "key31": "G5ks9Vi5541J1UMJ7jGNHREex18KkFaBph9LUqZvQyAnvziR6XDSC8uJaewrS7YXeWUw8eUXFNYYUKFsruxRzBe",
  "key32": "4mtoHLLpX6gQsH59ZNp7zPK2iqoQmCJY7KLne8Vmqpu2vEThwmb5MPpDwNertviTNFad5AfcddtAqf9rQzG4KXyn",
  "key33": "tfxeFXKaS8hJjVQdZ4cHxZVFA51Y5eKZbScRGi8U3kDis96xgqxjqPKMfVHTckKNYxn5RTic33GRUgwqEjsdyBH",
  "key34": "62LiWpFNB1vdq4CtfxzAy6gY1ij5Ta8mjmLcvVoMdSibqUjJyY68jZMFTk1SMYsb7AwTXrbq67EzRwuTMc3WfUwF",
  "key35": "5dwfCe73Q9wPh3Rsg4ivicgCLTnarQuxcSVK5eES5sR6RQ1TiCs9WyFDJiLGWQHEejv6TR58Bt3GenXHyvzuovUw"
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
