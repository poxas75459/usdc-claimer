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
    "4QDgFWKeEn1AGQn3iB5g9UevHcgRrubDBs2Z59gNyek2gwUNoNfAf55Ti5r8pjrHT6ZKec1XYQMvKtbAcUp6haS3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GN87s4q9R4g8u4tAvcSzhYcSyujZrUpo836pC52CDMaovhJMPM8VSvDRVMsE7DhUsjxEGqpp5fwUrNs6BnfhR2D",
  "key1": "3sd9GnLjHBA7VUqdfB33ofJAbHC1ykKibPKyqvvNk8U7PjNrjpTtAek8JEhmGaocBDhgFqajeaUBjANFWGvUiBYx",
  "key2": "5cPNF1f1ogVfLmecdfbUVk3z9M3P6xfnrxCUyWHVBu4tnJVewdzNZfeFmUasA7RLuEspEUSMiPk2KeqmYgoeRvTd",
  "key3": "3En3QGMdmYrwULqSFZn3ZhgDk8f3GHKZh2y2M83hwvjqoBqT3nU8MP3jPzdKPTrHHSg8qkseREJtsTtu3RBttvtS",
  "key4": "4miRh4XvAQPLUduvqAQ8nqkEHPDTs46Er6bUqCtj5XSqR5ZPTB3HKgKvMnaYf3P1ripBcyphwKiKCbkrWzTfkVJ3",
  "key5": "5gS69hXdyFiAjwNDvAmYSciZHB3AN5ufGxWHGRTVwoT59qRPNnxbHdaqxnJozMVWEoyPp1FikZNjBGmWv6F5UBQg",
  "key6": "3kv55JUYi6gFrqDBNrQLAigMfERUao3WSBpJNZB6kZU3YQx2QnTxe6bsSQBDFMBGZwgoTA1Wj5VPpvVc4dxEikT5",
  "key7": "374C8N6t2DJvo32va8nTQ9cVc5211UL9PBuARBPsLftGGiSJ7eNJ2NKzSxcAwjagFmAAq3xZGhyB7ygmxBmzTpjZ",
  "key8": "5kSvZSitLC43v2wTDqsHtoR7FvYbdfcQXQ7ZA85q2bHDVfqwKGbnYoGMFiuoGKJtSNwWSXdbUw1zUT7Exntvt8TW",
  "key9": "K8R6ha15z9Y2PBJGU6Q33a6yrGQEytu9sHMJ5bZMaetgUfH33ui9HndjPQBBQ79MY16Gscz42ZfJSqpWNz5WwSW",
  "key10": "3vaKZJRzhSAvMDNTjTPMyYnVCdBnixEGiEdyYCbkk63MmHthJzht51TcCzanzxEkCBxNBKcs8Ga6UawGhqY7Yxmw",
  "key11": "3rKdm39qSV9motiamfRH1cYsFW23uvnwVTWdrz71imJcvJomLrYR8NheZV14B4Rw2qox1rqotdFHBV8Yekx6a7iF",
  "key12": "55pWEsQGGLctizZkaSPPfYLsd4mihJcPUxY6YE2ycFE79wCmK1RoAEcep4QtbhPKVyAKHjfdamoN9fvBm6bv4qao",
  "key13": "2Mcf4BUjgRf5Uxvp6XGhZJ8z2iTwycWGTkHPDJhpYECNZKkVnQqgHcw5n7MAEWrrt3kGcuAYeWNPCevLkNnEXef3",
  "key14": "4K6SvcS8Rx6me7PvMTCB9NT857EmahGJqnrLLLAscikVkCE231uRHHJDoyBEooPV5KhJ3n5bgz6dUfq5J6JKDsBU",
  "key15": "2MTeKNaJSRCpaMcN5tA6J8dQEYypZd5TRCLvCNcUpvePYptYAkVSU7vZ5v5AmraFLU2HEU4sT8b9MmjM35EN5rxb",
  "key16": "3NTfhNuWGUTK7AUHB3yZusDkdGPWcejwvtongi6k9NSZVmRuYaS26Hd6rQ7ZAdDvqL46u433CswNNsrMmtnhcCkX",
  "key17": "2A8rgh44SKCEePfTherAAy9WBxom7cnWzkJYyKZ7kZoFMPPefpp1y3hoQPUkvKRmdq3bhVxC4fDWF7MAE6s9hta4",
  "key18": "VqQFYyQHtHuosLbovC33PBMpun1u79CQWpxiBQowJzwTMdMqVCZCNL2F9MujQ4AB13dWKh6A9h822jfn7GH7fRN",
  "key19": "4j1vtwhNZy2LbK7n37JRLUbj7BwbeoJPxWYURb7kSyZYuj1GCZXf1fnsnM2m1rpvgH9k45fBHWabxBSiyrSorfck",
  "key20": "2ERg5w5FodSqhHXrotgSCgVUqvTxrYefmun9HM3b6mhjwgP5xp6yLPpgU7SZDU36ayaZqwWChaEuVMrRZfHCdyjA",
  "key21": "zTCGxxjnGYhrHPbgPcHaiGAxyh2DJVwkkF6tXReGYgWLLU3zBaBuFx6MKR63KYqgL9nXFVNL8aX3WWoM8gBxN14",
  "key22": "3CVQwj4gsuC4c9kdY6R1BMZ6cq2wzx8syh96RCZWEKRJGtocY4uPfYS8pWmrAMepozw5MeKimK5uN7foL8qAwQY3",
  "key23": "28QWWrP2Uqy7JHLpR7THWGpg13PKWXxqQTv7EPPzLwGx2bQNStf5DV6cLgcupkrA8NGTMpGjdwPcQb3ZQUD76EZx",
  "key24": "4EtHfEEbAe6bCGPZihb4z6uV6TbNTDqYbtVH1tspmkxP1jbcEPRWyY8EstUqptgRvs7UhyT8bX239nJA7r3VVwWi",
  "key25": "4aQcD88APP9j9hgk6Zixy41NUbe53X7trpNavBMs6DwazSM5C9ga1t7oCWEYVgwcasjmm6XKTwKkc5ZRP7gynAwa",
  "key26": "2JuZQUJrDUe6R5y3Xx44DFGizbiZbmgivHWNLeStNgb3n5XrUdqkvvuYwLw621nJgYjdh876PDc7n8AH8FDsDkDe",
  "key27": "3qbYZ2fUPzjiLCGYgfBpX2E4nrUgF4LCuX72DUVhLs6y6KHWTGqvqrLdt8QS7mfmp2ZVbtwVJiVFjGw9cjs8ofn4",
  "key28": "5bLBD7vYaqR32LJFSXUbWbWRekFMAZ5mVtkwNUwvKjhGTDzzqLrkx3ThUqNVGRVNc1vvvRqRRQmwu92UX3x96jQT",
  "key29": "24M2mZyyNC4AhjL2mkAooofg6EvKseTAQZKizG4hFXT4s4S8ATixwWPwVWNHisFPjvgLnXjzTpRahEpBTJ1rVKW7",
  "key30": "5NfWoCehA4UzFbukvCVrP5epxhqrwP1yzxcZBvf9fHuLkGQXpywkspqvHx5bCkK4UMw3gDJtQJmMiRx6JaLXJraJ",
  "key31": "4HFw8RHvSJgi2JSRNG5P1XafqMedM9LMiQ5EKYtZJVu7ef7fmmDz4Jq4NMM4YZUCAbdBT2mrRGQAdSoAswqJjXqn",
  "key32": "2eb3NV9RiiS71ux6eNkamHLfQJYtNJJuXK827bEXX1m5C1kYmcyhznscBVBWzkwSHUYojsH65ezkL84xT27purjt",
  "key33": "zpDibqJPPkoFxhKFM4Gv2saKX4XfbjQfYJ5CBkpsQri6kiHo9CsnqrT6hbjtzfcfm6FY3Bn3zdWt5QdFB9izMWd",
  "key34": "5Ad9hf1k8UdZS8U4dDx6VGeHW9Vad3gJnmNQQYYLVH7SXCna8vzJ12sW4gqAsZgmQBAXRSajydqQvriWuQgAeViC",
  "key35": "4GcsR2QjuvQMFkGkH9gRUNhX3ujTSvtDWc7QLgoZuZo3Fe45jBk6XVWsYRZ1DsugYHW7ueJYZrxHE2TfAJj6pPTt",
  "key36": "22jMmowqY1hXKNRpmpiosfAo8gr6NJoHgCH2bUs1dHJc3bBytNBPJFSt2Ji9cM7JMKUD6A4wEAWoqy6kR18odw8q",
  "key37": "3AvdWAbJAD9mFFa79TNPKgeGxwaY4L7eRi55tybXJK9Xn9J8zEDyLUeQNRvDHmxnmX1F8djAXKiCxkwKzrjBAVqP",
  "key38": "23MVsoRaa7Ztis5SL9qpYMibjZAGLxCAqTQTixXG7RU6LLeHL3mvfE9fpiWwd1Ugs4t3ySgyDgSaLEUdgpGsXRi4",
  "key39": "LPgX3qWQdxrcJFq9HDp6h74W9twDQptePVBFQE8V4ixknz5vPMHNZA4iFzys3GhTX4wPUB1jrYJtcjH7vPRYae9",
  "key40": "513yzwQhUU3rvbudpS2JjWgAqn4vYtGTzN9Q1EiX2NyS4BPSn8gKtqoo5DbM8iMow1ZWrwHd8hZPW9GtUF27NgUd",
  "key41": "5NEANNxSAnTfsYeyjHYsxfcB8DN1VxkhpJDz2743vVtxcDjpxhRoLv2gRtFjQeUpwaDxLYZz1A4JgjiT2mGEQp28",
  "key42": "5aHHb8oTjEP2up6hVtg2ko1bLfxTEtwMrCC3uKbPJ1FvY4j5R1MrE87ZqaCfVGuLF6Y6cVXtzNGGR1GsquEGMxut",
  "key43": "2PAAgu4FoDVJoLfuENYxYhsxbXRMZm7zy2167VifGRTYvkKX2Gth1hsao4s9Ab7mRu5jU8NCMqKGy38cU83BTfCA",
  "key44": "5nxQLDqCcNeo8gCcb8V6i5vHDDDUdpqYhD3TmbBuGYPGih9PuLSJjSovajJjR8vvCTHDPxmSHS6irXoxppEdCLt5",
  "key45": "24vbCygeP4WAqaNUiHaGXzSAyxfNWPB6msLyTtLtWuA71MDkqys6QjUan7xVLMc3MK767Fo2GxDTHVMFduJKY2AM",
  "key46": "3yEGbVrFxnSEEWdHSxBFzFocgejqTNbHy3AY7Pc5B6qpCtGH2nnYXrPMWyp387Zcneg2V5Q9UQLjvTRcUTXX4si6",
  "key47": "3DPu4vyPEbWqoDsHr4uTCwkbSgmgtNX86GGu1u7EWY5XxCW1b9NeUNFbo5yt5BY3Hqx28kEi9cKn2y7n8oxM9GH6"
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
