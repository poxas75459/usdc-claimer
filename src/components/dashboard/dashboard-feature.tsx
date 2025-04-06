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
    "2pwYA59BwDPja5ehBTwBFkoYtdDQhZimUHpFKAnQMZmRhM3z9qSSkRRn46z2rUwEDcZ7gdEiPiDD6PpFsV8u18Zf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fLMqF9VmNftEJrtTPk2cmeik3N4JyMjv283HTpA7N2r6qzVBWPQetXRK6PaE8CJUHD3qKvbwZYHgGUKgvvGcm6F",
  "key1": "3Tq5xsRfYbGwcmUsy8hVYmJaCyRvp6KuvGYFpUFgENciJkR9b7wEn3jctnzP4ypZTXhsa16up7eTUYwcBQ6cd8go",
  "key2": "3zyLdnX3WB4gMu5BF6YCHpruReGNCStEEeJdfZA1r5eGgsLWbgi3LHDnexVAwNvcaEL8aLDzV28TnjsQXNp2Efhe",
  "key3": "ZLr4TapQJWew1xRuXarPPFKkPo39vKdrb8hFWrb1LoTMBd5hCoyeMfhjHKjyEhPgnnMQ6jNsdQVT7u8EtE6H1PN",
  "key4": "5WfPYGh4xCdDW5m4W4cWFzazjUFNarfkbH8fNMZAXCAKT4qJZar1We8CmXyKkJauyHbJTZ7LjGwdfYWHGNuhZRBX",
  "key5": "7W9Y4dBduJqRg6eW6bsJcicnZ3ogy141SNWXowiY6LSmasNiiU6pgn3DRKddnH7kniF8TAkrkycWXEYx2ziCh8F",
  "key6": "2ud7eUZQQsiB8p7h1RQo9NiTEtsK3TnbyWXMT9VXKaL1PKp3ZoeswrecbQzkHbR5civDcDqbeeihy8z4mafPcHhf",
  "key7": "xTh7j4RczK8VkxzRKApeNbUP5BZWzp2q91s2k8xaGTttdX4TJyswab5YfRuT78txngo65L3s6HD7j5AyV7KjpZe",
  "key8": "2yqFboVHwreTdA9Rx34NfcmV5bCJ6EzxGnJnjHnDyRjMUPn6DdvVg1SDBScLwPeebK1YDK1sQkNbtBEXfyAWwtSH",
  "key9": "3NkBZUQmT9TDbBbdC8wsvDAow8q8Rq4mU7W5811S2D1Na2EcXRqUqaZ6xkFiD6qFqC2nkW6vTu5d1oYqBgfAsBUS",
  "key10": "2B2JEwzbN32eVgAbf7Sv3SPcmkBhSgti4jrF9Qv3MwcXqZ9Nhm7QZw228Xd9xMnxvvqiQnH3YhyZ38TkC9j8Txmc",
  "key11": "3r5uxswRjDseJNuPfUR8TSk2YqtL3khF4mVrUozzHpa3mJQE7S8QARhCTX6hUHtvjXuvWdRrYoyzPQDJ1QLU5NiM",
  "key12": "4MDWSiv5kjAPLZKgYfDEsN9ezG2KVcTGFKyMky5h7RQHi7Ac8VNCd5cuaUAKAKvFJBQ5WHLtKhmEeRPTAYjozbJd",
  "key13": "2FSMZkYzJupD58vjRPFDjr8RfTCFHLncxHen67XvPqWvRJdcTSt77PT2vJkovAVT9cWXNgvwxUAMzsdYeKoUKwXt",
  "key14": "jFM49fJMiexxdUqbMB7m7MWvF7aakqrfXNeGCGdWZLmJ9N7dXJZC3G1hcKY9LBssPRxcCw41FRsTwF93bUqLaeX",
  "key15": "2gZK8nc6XPvSXno3HV54HL5yAWPEnhNQiSZpM1FKSfp9d9YB9Q2k7eETnuMuLFsVNSNqrBJXjk44isWgKtPTycy4",
  "key16": "y8es7DuSBR7Qmcrk5AxGdt567CMfbJL6SfTBHpDCJ8JcQPmbUBqZXbdqZ62Bshwb9x7MN3HBasKAKuPxK9RSqZV",
  "key17": "32F24ME3xnWpB5FFt3yppCHFYqKoJhu9EoTHDkbVyq8wVUuKUyDcdDfLst31qwgeRpL5kNBBP8XGHX1uVBYCNgFb",
  "key18": "49XQ5cvoFs8py3b5taXftBohneo63cGjbC8XD3J8KoK3TzFToB1UriPC6AAPycbtCh1Qu1Z2xAhEfCBpiEToqN8q",
  "key19": "KSfEFTr94g94tEfxgaQRbzn6cqGa5Dcu3LiNStcE3ATq6GWVi1HiUkvKiPXhfRFxoPgQu1kvVb2CRRB1QuTWvh5",
  "key20": "3TCPkJbBREjqRtBoFV4AtK989s3BMoSCADcbMV3adsMvyNfKK6Y4tun3VFubv3mk5UkgAqTzdek1d3RRrPfYxqvH",
  "key21": "57LEMnkgWoFrM9Akg6gfaHfsKYBdX75PM6EhyBTyaM21f4WnpVUjeRVqfiB6X1Kvy4PopFqN4Ysku7fQbVJ5C3YB",
  "key22": "2Ss9MwAJtvdda5euUkgu4f2bTQ2Pd3depwDheS51qh9xNZk6Ns7r8wTthSGSpkUbEWXBVKMPBzTgsJauaVNnYzck",
  "key23": "3oJrWXQ2ckrAjH4TeWTQWZrFgMhKX2EyozTtpjhd2gYHGPC7kCWekyPTuSchiuZnPXvo1eXgEJ8vTWobn2XnHaTf",
  "key24": "3tH6Cir3t36iuJikBWApwFRqnZv5ToDHYS4PK77BVCd6vXSmrMyAB9qneuJBRswPrk7nWUn3iKETrBusG33eZJhJ",
  "key25": "5uBnBTXvWRp4YYrUCUAhB37acEUz3Ab8pfaCQpncBZoi8T9nhpDfwZV45qGZrdXfA78td5P889epgLSYxRPdX5o8",
  "key26": "5oee9P36XiZfZjTc6icETfTtwkj2PQYHeyep9HFWWHrnAkvABkSuqiEwus48yyjab8H1WFhK4seEV1eBKwGyBfwr",
  "key27": "5d61AVLDhKQWoTxkf3JGQcdVtf2VTS8rkaDBNmmFTJbAAycU8pgfk9b7gEPRkTj6iojMiR1CDHRfBnoFm7fT8ceR",
  "key28": "2GYsHGiskMyjdq33f6BWHJQeivEoRCgEEwesM6z2SbiwMaJgL5CFS7oFggSducWhNjA2vELD8VrT2s8gRTkvbX26",
  "key29": "2o3PFc8y7fcaDvKbT1BrCMwupCfk69th6a7eSTsS99jtFAtzzFsuBqaq5a6n8kMiiJCGAVDto3ixfNshi18qqeGF",
  "key30": "5z3eSFSAHbK4m3zB1wesFcvBLooJtWKQYFE1KqBUAH71d2aEBZrLmBcHzEMod8gP2tcgA9UTWPejHMVjr375sxQn",
  "key31": "4unvRDfbJxsBM6XqCba3erfc4Bs7SEoyYS5HzX2Zn2W8JgaK8ydRrtGAPQBFDESBMgakZfqpiJGV4Y2LNg5rmqpT",
  "key32": "3Gjv2Bq3oQXmLu6JMYJVwPzzNkfXQoWSQt76zxRVb6XhfVJZqp829wUq45nzafEYATXV2g2KseDuHk2mCp2qLDkQ",
  "key33": "5i5RbCWKvMLtKoNEk8zzNaEX9Qj3UC8PPMRPRGjSq4axmMR1zAVxPh2V1ytzKCcKRDocU6rrFWJC4KfGvmcr3qxR",
  "key34": "4tYnzSzRojSiBCyy9bWuT1DLBXowV8yJfmVA1xrjESuSYT3bRDMagKrtE4jwnxVCYCsrVJH1AfF3TEypBfhtNTH3",
  "key35": "HyLLysgNg7Wwebh97uqr3BNzaYVriF61wCBbsynHXTM5LHNyC32bHYLmbBgDmXoXRcGXxSnJNZUkCgGcowDm9ui",
  "key36": "5PpPgiPH1a8QgzT7zs6uThvXAdJZt95fEv9mCoJVZNAZcCStsHXBTSSscfNuLxHHE6HiJKULaFxCAizqU37vzd8D",
  "key37": "5gPu3Smk5PTxQRg2hcDnAf9V1ZrkFQXhyvQTHu42UuZp57mHEpJJZ9YaguDVrqpWChBvWg5or5PU9rBm76C85WRM",
  "key38": "2F4aGpxdCBz51f8DdSXmy2WUiq1Nd7C64AP2ceoXESMpg6R9A6YASkDrD7P5E9pRbMmp5ayWyCEf7dtH4K1hz6VD",
  "key39": "8mpSvwo3qJPxaCsppJapMKRCfvULX4H54YgoEeFnLZBAykcyKFoNNsxWNuMqur2ki593KbvfV5ZQPsGAKmYstxs",
  "key40": "FHB5dB1A7R21gbFNC5aQ8BTwccrq2FB2sH8U2RwcMJGqUQdoM6sajPAftR3Lc3L6d5kJBZosjhGdFcWbc5hiHKR",
  "key41": "z3r2u9d6ebVCt8bmFwpVtMA33ovzN3bjF2MXNzjmnXfLLucq2sUdFDxgTVmCc137JAa9Nh5vPFba2ijTuzY8Dps",
  "key42": "2QvD1oUPUYra2E3rmjmr4TAf1oEY6gHh9a8tb7pj3UtBszDQr9GocmDUveoqhx7YKoGatEq5VbDJMG5xZ7qf2Qot",
  "key43": "6DGnLqYVskpNPsorjrJrbbUmYtTZ4QyqU7c7FEjxyHk4PFPXiJydn5qRRGag3VsVToVkaRfbfjBYMc4UHBjT6BE",
  "key44": "5nKeHQrRfDGVv9jhFbUh5Kh5dFbaY84MHtHUt5dPvABYNgQJ348VVFUGysNY6u1zaB4unLGq4D4W2tsqFnsznrwq",
  "key45": "4VFG7aAmwhmGWqsFrJcKuap3y7SqDszk2yRvGu4WNF83h7WLVGuMPwmnJMnfCP8be4ZbXuVoFUmuk7pK5Zbxhbho",
  "key46": "d1o8EGodYYD8qDFuA1EWiAZvjHTDwCzRbwNr1bgxDPLaEeCdmMKmHZTmKuuwgBeoZYHbs9XRFsiNuS48JfbkYBw",
  "key47": "4CJ9DWjbWSxFmrWe2GT2oAiWGTBcuVH7LaT63c38Y5B88u8rMtuYziH2PsehyBPEjsNKbE6gjPRUufnHs4DubdCs",
  "key48": "3ZJfLeBLXgWaLqzE1w3zPTkCn9u5SqbfK1Tn7EV7887mCJYATx7MAxiLp3RayMd5XD6w9NtFayqujkMeLzUY2FVb"
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
