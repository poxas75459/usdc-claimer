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
    "3zVXyjkyAgEUwYk84vRU2fZEcypXbifmxz8mQfZHtWqAtbTZAEVtgZ215iMNeUW6RChzcZyCcZjP85YEyf4P6efp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JKi8kX2X6vxwr21mJ2abbsGMM3CqB2AvXq7x6SjzvvLTw78yKGBRJUTuQh4ZS4dzh5811Sj5vXKhp6FpU8JBXDA",
  "key1": "4ZAJukx646MHjfzhfKQMyGhR2LKJuTKSvoEVXi7X1NJw2smoxtAGeE5jcvLaLvFKeRWaU9YVRf7XQKXJV4isnAUR",
  "key2": "3JA7WP8GVeKtPuYGRNoipf59LbASSDcZ6NvHeL9A6ycYQpH9oWVxRxYrgr5qUeumCd1ycL5dn8rb8hUsLrp5K4fT",
  "key3": "TmC84eQ76K9A1NRZj42tw1WcEvVxoHh8eK3AjKHVJNub2g2ndJvpi4g41Br4WK9rF4VvsGCTj5kDQP94itkcvLE",
  "key4": "2dj7pKZw378n7xYesDnKbN1SXS81JvrvsL1nqLKbDo8Gz357rh2m1wMdhxdZp7ERw1MhKpjEby67M3ChHvqSbHTe",
  "key5": "3fm9yunmXX6vgfXafC9mhkG1wsoV8kjsqfnKNRLRZ6pCxnJd5ixoAJCEE63Q75FWF3qWXL63FdqgnrvSzq3tKRdp",
  "key6": "5BeUdHRJFDeuBp2WHn41nqM54hU52LqBGcxxCv1jSJUcYdaS1UdxeGxeuLg7QsCq2XCKKq2n8iFFWdDWfNmc5KzU",
  "key7": "5VeP11Xu2VrxXeCYDgnHcmfwNRkv8bsj77X2SuET5Ei6EDyAG3VvjvNDJGNPNAiLWrWcodii42vjyAPUuM87mFnA",
  "key8": "B9cA25at2HBz1dgJnKtMi8UwY6kihh5EGMpgbvY1hefSzhyPgkKTCuT4a36G6EWrJAd6YoMLLezsmskqXSfErLD",
  "key9": "3678iZFJp9bDd2t4amDNM4KhWWPoCPbSE1vtghRtgfHVGun3RM71k5niSBtQpVcG74M44zXQJkVZ4aGpcXMqZyiW",
  "key10": "5RpAY3atcjUR4YzUwS7ZCizozVCuZpzZvDdLqZ1DWHGpr1DeTvqrDtmt9ugYf1VqVeukNBmgeEXGdisYsNRy9K6T",
  "key11": "5ofkcg8y6YLXesEDJySpf2fuqhbQ7Kf39vTKjvEMnWBxvUqoDS3Fy3hQrJWL2TKi5wLZEYUkmAoEjMgi1M9wRf2f",
  "key12": "39C7C6vgvYAkJyLTmCwR5RmJvtVbcvUsCcuKewcC8qSEg2zjnrgAAnQgKLaxieHb32a77hS9KJNak6B5ETK416iK",
  "key13": "3GQnDCCdx7iUWKfXjkcsrF1iYXK7EELz8q2PuETVrc4nGdE4dP4T2dj6B2AwS93zvHAejWMD8PwTHxpVrDNrmt2",
  "key14": "5Lhz6CUD44Gfh7ZHj1bgd5mGjZsbnU7dRM8dUK27E5Ft5trDyMUijtEsrR7GfmLJHpm2Z7pGGA9Zt73ADQXVcJDf",
  "key15": "3D9woo1tF6czYGCUa6JY69EwYHUj5d8zjvayWtD1wPFCaJ1zvGPhp1hhxmRip1uWa1pfvezuqAGSA7J15dkC9rYN",
  "key16": "2AbrsYXKtHX86CW1YACDLRykRZEJn8M6pcP7f7SKsLFhmNWAANKJhkoWJE83GHCXhxrp6znypVteetb3nRevFiKj",
  "key17": "2T35s9nyccQMvLqZWBpQN4tgBPTbWQED2zcu9n2Xw8TjMJvnkHG8EypbE5A3CSJxbFLArTq1KnDk1CFTVxEKt2Xv",
  "key18": "BnnygtNcUdFyGDeDMhpwcV5DFwoRVwLAxQLRFLwQBRHVaP8K1z5sqzpNdjtvFZLf8KRx9cKwJKLDnpba5H2wH38",
  "key19": "meob7a6fwthjdeo8rtYa8DYQUstcyBRMiSPJ5oQf15KxcLhKwCEvnBsQsEHMfPU9NAfabP62Ywo1oMxd8oywmQq",
  "key20": "4hy3nMamVWFABsmdfPfd3RyJbQs5AHMKgETwJvjjUDRhAGh5DZwzxKW4AxafxVueSPm73zNJtsmwz423pz4ewBeY",
  "key21": "2DUyk9WcFf2EdQP5gHB2ivb8S8iMzjjh3nkQLTUxP37s5K7GYgYvAd3DJV24FcBg5apiDALGL9ydE26tJ6RojfXd",
  "key22": "4jVMbirZ4kzsDGtmr46az1eHHvuLYbpYMjznf5sDuRjnQfa5pfPAvDbejM6pCmAhmaqhT5ok1Jqs6nnccTK9n3qQ",
  "key23": "2q49Y5ZLDJm4ARpEtqPj4CLZaR1QGW1oUuAEjkC4XnXMEGooT9rcrhuaieMrw5tPZr1F4UypTL84w8YFUQE3FcLi",
  "key24": "2gPDDrys8PJzVsotEvvvNDGtuPswYuLB1FDFGp3D3XH99UKH7aPYiJdhLjiNY7aGjd99EqVqNVact6sL5PVgACAv",
  "key25": "5E7RtMNW1ZtJTDfdTUkG42ZH8Gw4pajM1DKjBe1JA7u2u1aiPdb4x5zYgeWLV3WNkAnUspQzGCRNynAPV5bYBpSj",
  "key26": "5SGBvUeTxjnhamRsmiaE3W5YDVAJ8Gv1PYh5D6XAaggCvNn1Z6MswUrK9ZUxqTbHtiNpDvGFqF7U996Qi9mLGsEA",
  "key27": "3fTR82SKs6zsRK1j9n9YgK4Z6y4aVKDyoKQb2TsYaRYUPE9we7LHzZZ9nGD6UsnesWgDMbJ7CmExTaXXgK1MB6EN",
  "key28": "3L4wEstDkCKQQdQoxACPWp3FhCVW3bThENvLLjBnz4rqS14cf6KiovyYWi88Ezth6DQHqfourgz33MLNELfRr2U3",
  "key29": "t651bVU7xVTi6CmAHtw4dqVSje2LEtmqLE2d3Kz3kagnh8qLHY1zJbcRu5DuzagCmqzhtZ3R75pvLE5uqbCxMm8",
  "key30": "53DgKvbQb3MCm733BTPDuzkw5K94JgNHXWaXp4FUSrqo8mn4GUxCwwoT9yhwZb1oDcuKb5FSe8ZJxHR7tLBogEkK",
  "key31": "4cziDMKjQdAHFzF5Pv1AiXjFdPBHA2UpCiNKrtopWMWdtG3rFgvvVtWL9T2iUv1N2PL69HTAtY6b6jeY8P3upoeB",
  "key32": "3wiHrXkwjnH3S6WrRcxdyikiKxZgwsQJDrVr28keuK3p6i5BJ9t4JjMcpNyLbEpkVCwo2ixL3ctG1rhQDaeaqFWb",
  "key33": "2QFRqLZwDy3oTzJw6hCcEAxqBJBSfJLREGnhLGdFi8JMfvpATY5pNrgrHEBzoPhQJsnrj1gw9pWLABSnhb3BTQd5",
  "key34": "p2NGpJtZDtxQKjaz1p3FPx86kqgGF81G6yUrrXoh9F5gCyYxqDJu6HEKbhV7iGYsDAgFyP73cNZ1et7WrJcFZDz",
  "key35": "4Aig7e44t5C6uD7MNSwzJRDXgwAfGEczsmq5PJcf668kNdjE2vghmbU9d5F1s7eYVnnHQkjUMoq2yFzZ3NL72TCj",
  "key36": "31vhvm7ZRtsjXV647VL32aD819rxVKdb7WaJcU1oYtxG4xkzcNJ8eaxsXKbPGGsotLw6R1mCMDA8ix48tpKZwmFY",
  "key37": "2zxDTRKKSTUS7fNab3WMkezYstYMBoryG7kjX4ZUcqX7Z5mMJNzHAQFWDUeBY3ttfHAjW3ifRPxdi7iGyqQ2cL3g",
  "key38": "3yhmcKNp1pfgzaJrskDD7HcxY4croaWYNd53Jwx45Wuxre4sGx7ujKeMSyPHtqAsMVijrA5LzVPrYbjNFaf7cWfS",
  "key39": "dn6Eq2sujDA5drf4BarMEwjCwx9SAfHnAUsEhYzzYAV9mKFUJqWRifVmBidcya1pG3DU3MQdaJ9xGVZZBddkbS4",
  "key40": "4WLCZmJX9CWg48DN2zPAspikP4t65PNytvVQ14GWisFSNhhN2YvgmrDaZNGx6H3PfeQWxfijxdSKGrTVmT3Umhsw",
  "key41": "jzJPtvekqPfSxSg6xM2dRFsEFr2fKryYKC8BGPzaqc3UytUPAYWfoQ4jeLCdtbf3rEroq1fqAuutAvTtLJ1zgUd",
  "key42": "4kh1D9TMXGri4wYta6SMUghj8kwyD6rRjECew4GSJ7nwC47SFhhEBKVKzgkxfuFo3ETarXY1JoxcN1QaEQjZy4Y9",
  "key43": "sWWj85DRC3qjmqunADWCUU8jRWqfo3uhWmoUcVdYgn5GVECZoNWLd38BWjyTppv44UgNjgFBFFi85cxts78zrET",
  "key44": "5p845dr4WCqjSEr7mUH4JGbxSjTb2JaMFCuKxSwabJaU96NLrHcSXDy7B8ZVBeaEJUq5VtEXMJx92k7fGQ7dRcXK",
  "key45": "EnSZjwEtQkeGHebdy3h1d4dep8YejCmKGnFAGzpct1epPAetPiHsdxQfb5dvVYYuPEL8U2wyYJ5tyzWMY63jjCt",
  "key46": "63ZYNWfEVUt8CirtseJ81XokDuPFjhFiTggVQDZ4gsR4yZ8wTadeLnXo74byC3KC2sZ5aBdEJjE6HpAcPYF5bG6",
  "key47": "3sZKK83kKNXA4TvhQWPot6aaq7XAFQaa5JaAjLDwe1UmTi2wgBirVAoVmyQDJACHX17WFBh1xnpHU68eczkP9TJd",
  "key48": "4dddWyGss36VcguryyxtzpqGssyYa89NZz3fmYdgfgnYAwuZsiLpH9rbmc51PLhS6eQmcrejVqEBbVGZAHs6WYV"
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
