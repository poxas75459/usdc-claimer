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
    "3TjHJLH3k3qXABDBU4fFaVwgSjsDozzYppKCNJAsYJ2RbbaN9VND2wZPsp75iei8oW2RCkZYSg33CMtCZFewZ3s8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43RFqSg1uwwDvNPzVpgjjee7wxWbnApEn3hSL6h1cuqnEyVpjhEd6afqd9SSpcAZiyJm6eaRrVuai91UiU9io6S2",
  "key1": "5kZNYbMubUkskRHa8FLXabkinkh3i7pTmAkpn4JmjD3vcjgVcqGr6xBfxzCXZoZNxhmJs6sYTm2Gqie9AWjUnXyB",
  "key2": "4wMwp5BT9ZKJZqDq918xzTPbAcrgkChttqjnGTKmJMDYAEtQPVUg9QAkiRhVMZ2ESqt2KjW2JrssYpUKtLEP7TFv",
  "key3": "5ae1rhofNsWwx6t3mxzsiYxbr2j5oUXV9SwdcjX1KrZ4eQb3FsLjmQa9xkiHJ8hPjvrHbZd4GDr3RZj9FBnhXcAg",
  "key4": "cmDA2NL71sv2LSQJXXfdh3EwwkWfjJ6bkRZ5F9J5KbJ5yYZCeKppkkaJu8rxTD8nVrv5SywZLBun1JRDJLee5yk",
  "key5": "2WoDK8wte9EtFvBZjwuBNoy3V4mmXApPCWdXydcF2PVBbjJgvZQ2ni1VwhnCxs4KrkuRnAjyanaYrNhE8jiTo9km",
  "key6": "2esQPRztLjeSDHjY5SfweLPt5DWN2bsGhG4cNiHB86WRb29Hn7sFB5napCNJbUZ9BadEtPUmiBXJL3R1KzQp5iGu",
  "key7": "5fykPERqyyE9KaQqWA8qrssVNYwK2NiGaTnMf7YJ5c5sLaJSTu1X9uZZTuuAG8KCax22PyeFUopXnBxezYRry8zE",
  "key8": "4rFGYGmaonLuNmqAsFU8JcFU87vRVLEgS5eex89LG2JyhujDGFMZ3417JAUxQoofS9PVq6hBxdnk1SMJXNMfk8un",
  "key9": "PQrwW6MUQUQgod4h3JpievugDCLDwnn94p1Qm42wZuRzScq8VWvFrUzUNrBmiyBd744NKwfAohDWz727BZWEWEJ",
  "key10": "xXbBap5ThURv54ahbN6Heqjq9HmWEj5iMcSbEy8RtABdbkCT7fZx4dXXSfGPQunXgPSLUgMU8PV2CpenuNQXaxW",
  "key11": "RapmuSj7NACcLbiBEP4TLgUJw5dgVrU4RHAXyrUBEXYw8VbgZYAFzWpLyQV5pTptDkHP8FqvgcsxvWeuNDDn9Wa",
  "key12": "3Rn2JbX7gjk2a9RTvXXiahYKdRWiJScEavR89m9Y9skZyJxcUeYKr4GQ8AfzHrP8z5WDkXRmaDBeUcvoLuEYLgjp",
  "key13": "32igZqkAGHpPnAMd2RVDP1uWnwjoEuLKpVC54XHUvPuvrK6VFTGAhBNRPaYy3paKwXkHWNm8rApu2gm2GasgoBKi",
  "key14": "4Tr63erX53v7T1t7q6UH4485ABVKP2MWFN2ictJg28ZxcoMBsfBhbCho8q4JWBU5dNySPoFKxvyzXAzy8wxvboi7",
  "key15": "5LGQW5sLY3XtodzFsYjQizPuXXHpn6XnMqQvPSjHGwBz6ezaj6osYrYFLVb37x4GoyQKVyLiWj45ogNTv9wbEjFY",
  "key16": "4Nivm53jXjR6okDQWYLyyeGYywcAsuHRNhE8zHQDGZuZvb9ZRncRjwfX4WK98ocKKKCD14ue11qdmFVGLVVz6Lkp",
  "key17": "5Mo68PqZ5JW888rMw2oNQkiKLMbpyqWRpnvjxYSEaKhhUYvvUbkQkSrtH9GKr715F3vm6vGNj1TNPYFGZQwbh82s",
  "key18": "54WFZY4wpTMUHLq5frUiHMEwYPVmP4Y99fg46Ay3szGXBEc68FHaWL5dEt2iGDm5KETEkiMft8tJHe4hYYvxZdjt",
  "key19": "3539X8DoGBCMeaBAJhMn8XpG81owYru4XYhJmLx1Ufu4U5CeBVZYAndzscQFYVRkPr2zTvRy1yLkds1TWKRabehq",
  "key20": "2qdkr5TT73wRpCDnToem7ycCRBpHpWTrhfNvqykVTQHEXrr4u7tGS1nd7u9k8bNPGwZebx2Bp4J2QvcwC35Bubrb",
  "key21": "hqCPQLbCQsR7QN1jzBwBknC1dxGvv3ZxkbFaTMJDt92PzcT1WzcF1rnNgFvtLp2K2EG1HWmtTf4GCNR82PC9iZM",
  "key22": "2C4Am7FoMQvZkhCHr3VTK6yYE1zes1pQe4njwz3g5eQkmdSfT54fwTCipo6qiKtopXYaKYkT2Li9iqDnz2gmWpW5",
  "key23": "3QxPPR9k1TStmg5GBQPKBpX3AuXD4dv7xbrrd5JqVKHbdj4c5VegViCqEQJphvHsKmXT4mpEfUjMeq8LCDFtzezu",
  "key24": "mDAAnNNznFF17SG7tDeor9985wMkX2sBgXgBYzmFWP6z2LchFaFFcvBCPFmfAtSTjkmy1a1VHtPpnnxLrZWBifp",
  "key25": "4cZewvqN6u4joWg6b2ZfC4R7MegRedBudGCGULbQMhvLUniCnHuECMtCp3SEWVTEE98RuQQZ1fPyJWazUHF3vUDN",
  "key26": "3nVCxZW5huPFNr5gbSJAyCs7DWKdpotBnCR8U5YN8ex6HBu7fqBHNqY2inLF6rWM2Juwg6ZQPRawiTssUCQyL3Xo",
  "key27": "4RsxSEv1q9n5TKs9bVh44n5ViD8rUPnyry6ancqFWiQcBfmJaASiR3uVHvb4ZfUEhbRiqejj6xRmZaZfqxxkSM7j",
  "key28": "2FJs5w1wmnvb32kBFXvH2iZ8Br4RKsgiapYWyezg1XoV6X5YGEZJpNGRKgr87sicXWFTCCRxnpV6qMS6bAyS4uDV",
  "key29": "5TdyenoV214K1JoAfsqPGBryMLNCvHjkqtvdmKL3D32cYJgfZSr6NDDKBsem3c6ruVpni5KY9u4pn4crKugMWA7P",
  "key30": "3wfnP4BygUsWy9MrvgwrWAGSu1j7QBEEWuRy7vW38fVwKXJ2vsbruNahkHK91qYHtiPq2qpyzs2o2wZqE9bMRXvP",
  "key31": "fzDzdBppvmkSVsreFZLYo1LMBpwHfkehUZCBEb4HogjBSGc6rMQvweensiK6bvVFWe6AwUDUVPeiTtpzgn8ndXx",
  "key32": "cFi866xgzSPCm2NLMtc1UrshBtCBCJB7EP6nTxMDDkSNGSmjagkRVrJYiWmjvuChKp8gHTzpUb6uakRmEGPHEDB",
  "key33": "3TdiNgCCQuneJJfmr3fyFKcU9JwveLeaHFZ5w4GjamNhZ8TGZ8VSWFzKpdi3ir8BX6ad3MQtT3gh2SjyvCBoizN4",
  "key34": "4s8wNLLQsH26UW7VYUumPTReETGiXdHcwknmkbkH6UymK32n7cHa4nyWKjQepYXWiLnFGYa1JirL4xk4x2514ySj",
  "key35": "3YvDvcdTtEVvrjrQKt3hJmxkEYqCjwzB64rrXLVFr39ynCEqebwYkPScJiRDBnNesMtzvZs1m8rgu1MBvoMNtM4K"
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
