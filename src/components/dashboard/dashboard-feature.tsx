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
    "3M9PNjV35dWqi7wFfL3WayGf51g66sFQTFgH6MSBGxNoszwWozwVanqp36PD48AijW39rGXeK1Sc9MvtwuvkaTpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c8yCDwgWe1ivH84JtpaxHi38budY3vCj5rrgVTCM6rsR7o8B8G8Tu5i2FEL6uEcjH9PG9rLbpbVXTjBQoK933ou",
  "key1": "Gm68BjSnCoSTi9ePQCr1UHQYqTiYCfNJ21361xDk2WLWVbBCEZKhdmBfwjqQoYzFZa3VApfgSXsxvCij61rmmk8",
  "key2": "2Ax3f6Jdbkzz7gE6shKMmEYai9FVDhZx1zYsbG3dQy39BMRESnsoSAGwuLwn6Qxtjz9KPBSoEnXwJTZRY6n1LGCh",
  "key3": "4PsU22FSSexU3xuKQ76V9apMF8zefCsLT7QkB9v1DkMJnPEpwy4aDLLnsc3KPZhPupLVrDAshVgLt4oWNz9ecjhs",
  "key4": "kzBYtzTbtvUCnN7h1nsqg1XunRNXYuUmUhHQ9asjK44JACHTEyC62UiXxM2rqZcAxXpaQAjA84L5jcguXwvvWYB",
  "key5": "4uwTph2Lz4iETsPfAHN5H1pKNSjfH1S2sX5mz3TURTAgAJoEtJcX97uXLgaHjzs68qQzDS5mSBBu8vBJMuZQQCib",
  "key6": "3fYbZDso2L3QLmFm5xnichFjZZZJK8fVwKjYxCGudMngQ7zduGsFmLwxeA3jWjDgvBamS9Fj28FVxWwiChaRocTM",
  "key7": "1gm6J4xyi8tDKsHR3JVcW6Xj5gk4hpMcM4PrAPEAAo3y9jMWn6WWc2t5nXXbCZDfG1NxSueMGPX29aJbvcYyBec",
  "key8": "e5mqDjgG1KrPRExau4Mt9AuwLaxKniqqv2JjNVqzh5uY7MCYdXgz3wNvnUTWHzkn4zyvCvmeBC84HAyDDLaQmv9",
  "key9": "4SLJSMfZnXcBB1fCXuyDjzSekK4B1BPYrdMXRQ5eXG1d9P2WVP5iQwTDZ4yesxBnEGx6Y6codjUCr3Mp1MiCgWob",
  "key10": "3S189gXPKSpZrJZMyZDcVsWKtAMhc3KFZizibyiheA4GM5tNQjNKAaUuetDzE7Dkn2yRd7DXfwfhv5sBnhmnf8wE",
  "key11": "4aKa61W8EzMPt55rUkFsJttS3GF8Qzb1LJYPTQ6sefDnNdcNF2ApFLtDYdhuyMV8e5feUUse67kbsG5i7BFSyufn",
  "key12": "3swHVsN1NrDBhtZxzugzmbmhaJ1fdey3e2YL13DsN8wjQQpRNMUF6qeBpuhtRGMSi4FEN7WD18SPuyMEbpxXCmuh",
  "key13": "4ZwUDrtCZE736HTHpigi76MXaR8RkwqXRRP3mwfmp5jfJdt6Cit917KFfmgj7C2LbdB3MU2WE23SmMp7o8znQ1tL",
  "key14": "3UhUT7mZLAhYmcDFUH8w1uHRocwX4bLromXCGgr7iPERSnZZQ2Lz1NiQknxx7SxLNxqA558g6EBysejkZwhTDwTS",
  "key15": "4RfdFK3BWbQXaRAC6C9K67qaRK6Zwh8i5QAwQqAKv9osXThhbszpSuyH5RhSdS6CJK5XcbTxaBRZ8iYRQZeA4ZRv",
  "key16": "5mFPB1L9xiEKDH7dyVTcbQYSfQwBBPyP9pwSw2ERqWTSNmiGo6jW4E7cCYRtKiMmdmhfbe4aBmiN1R1XwhBqSrtz",
  "key17": "3ENsXWdUT9oYmTYmCB4d3VW8gfcyMnckAA873JUpFzTsLUF2QG3PuXqwBAr9i9dAGY3C1bfMd2gB2YbZjtuee6dL",
  "key18": "3ufz57v1rNdTsiwakrdGoDrcUW4WANNbFmuSFjfd4i5Yja9hwaZcvmi3Aji5SNcBSCR7RsFNreAYcYg3G8w5WKWp",
  "key19": "3k5eYJpcuyhbq8r262pHcmJQkGSq4NH6QKM7WgUkNLQ5Ge28be3ync6pZKy8AQohTUcLeeS5Y4BtsqXHD2VYs8RR",
  "key20": "5VHfGS7Kr8oAiZQJkjCfabyLgh5QGERXmv4z3JSK3uZapVrMupcwHX1DSY2rcXRhmoRpYaRV8dj975M5SGiJHGXg",
  "key21": "4FPvfwdn3SS9XhvgjotnEkoWkWRPV7Efa7hXFuujcbCt2NBvEhUKuNdsvA4SL8kgghvbqgZiQNaHcUvNtiowvDqq",
  "key22": "5mxeaLhrPMXsK9BCdLtLwD63d4wZRfn33y1ez9VmDh75tSpbFw4UGcEJk5YK5wPV7XpNPDod9Uv4yjT3Vb9yugPv",
  "key23": "sgRrfttW5d4Zr6kAVCoXptuKcxwP58X5SRHbA512M5Ggy5tzyg67ciNv4CrptWuy65HgQ125AsKaRq1t76t7tnm",
  "key24": "5F4Lt9zwRMX1UDJmb3NQ57G8Rv5JVtYKyM2vxiqE5QvSRk1SdABDFNNH9nbT5dCFDeHVj6wK7S6MXNiiFSjE47o3",
  "key25": "5Si8oL2uUTrFG4X6ccY2XwAYDxaHp1w7ANJJEsrWvFvH4aSbYNKigf1rzzzCxLt6z9JEuTsiUpBuvdKwCLD9KEsE",
  "key26": "hJgqHFSmQxsi1oTtZXXhaGyksRG9cKhaKt4CZjxmjBDiPvQ6WZS8sorJbPAyChAkU3pKZqPpBW5yEimdLZXJe41",
  "key27": "pfp62vjDRYgQazhMTpUbF7DL7WuPxgRV1DmQ667wQtyZofSsfLVobpiKk4dKq3deJUSUeHcKEebtETpURBxCQXF",
  "key28": "2V5tG8uJopab4eZvoWT9cE3efHMf4i5KQPxx3bqU7NjF5kx7QFZhURnvqZoV4zxtrLPEva1v7UvbQsZCcTLED29R",
  "key29": "39rU4cL2oP6AtdbyeCaetRahHL8aqACS8MjzWvY5H5T2EENUVne67LC4b3hDUxgUgzHk1hNPDSkEcx3zfSSsXKjZ",
  "key30": "4TWxJtEozU5wfSjwxSNJQDUyvL8LZWZzirXrQdRUadMoKgJqqTm3SMJfb6PyAjReW97oxkY1BRvChdaEdtw7bMaC",
  "key31": "3HrCN9JNWwCMJWVo6N2M9pA2USSRZNdA7vFkpeVyASrJv5P4tVX2qkhzwbdbokDnaCVYkutgka96G2y7XiQTEp6R",
  "key32": "5eev9oi81nTNjN7esGrAb7qftSGvnKx6Ph4xaNfM64nAzdpQqc4s1kkgdm4542FHu5W6SK2UjTB3dSWEP2UPdmz3",
  "key33": "2CT2th9enbpDnyqZpsm37WC9NwjpVMJX3yjRgCq7v5MRUnAyrzjkLV35rQJneHxaAic1TqeMGHAxTm59iXMXxtA3",
  "key34": "5zGXQozEWWx9oTABZ9de2ophaaiuqUxesRj2z9FqpvCyCD2Gt5abFZuCUMFnj1paSpHTZNd1XuFZ1R1ehLTJNXSX",
  "key35": "5MV4C5qZTtomHHRQn3xMjTEBHvNNvtSsty86vyNMhzcRTk5nCE4GZY58XMAbvHnWPdg4cdcG2Zs26qymnvQra1oC",
  "key36": "5Zvq6HbDZzikZpcL2hJUTFod3mPvzxmc7CePWWSBnrdwhVsichYZBDiYcrbJfRCgVcfPLvJLkV9jJpyoAuQKqi1P",
  "key37": "3fcjBckeaFyDDsXHJzzAUMJYREwecVSnrLFWFuDWg2CAU3ykQy9D4qBqkfqKJeW4K55BAvjtE3nQFEj9HZm6ozNw",
  "key38": "fqKvA1ddYWGUoWRRY7Rshu3FuCfN1QzQ4V1HsWKEbKsmDNv3LxC3xN27efiYkM1rbfPBFmqiXpwiP5jcKkzLjST"
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
