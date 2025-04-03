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
    "2XAtAUpmTNXCE9bNbmrWCLaUXh9na5ydWLwqKfZjC55ZfLjuzXVq9e9PexSwquEPiP4dnMV4ycB9acfaypGLb5mE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CMgnerRZnidUCZyAxaMjvgyVRsocgK4EmRau4rgiY4SFQe4yp1BkL9BK2P9sATz3FQHEaQZUxQYreDpng8LBHc4",
  "key1": "2sZFQA1U8iGdhyB9DMcrhi49dd8C6K2gvAspyGkFdYPLLtbXUjREN6BoKvmziSeruyAoZRQJ2RvF6UCCYSCxHD62",
  "key2": "3yKrSgpgA9JCiadRYvBjty7SvUVcAfZ81BhGw5zsQMtDNE5iAx6pNTbyu74WnobFypfbfqtTkjVBrAHcN5H7j7He",
  "key3": "66fQkgCBEh1sSijB5bQexphQ8s7z6wS2LpPRZ1jPGporLGu8557Y6TpipqasQsC7N6oKTsUzVByCTo2LGniBWrKJ",
  "key4": "3j1zBBF6RcAkK485ZoS7mfsNHhxvbtPocLCiFPHZQXGxWWZkvULqpBFvM4T1zGuMG9CiAvSdmk2emWiiiAK5ZZS8",
  "key5": "3GbvvABu9LhMparWJy5abzpquGn7ESJr3Y9TeF1AEDDHs5RiNJdufH2e2XrYJbip6Z293817pRWEmdRXGCpaLspQ",
  "key6": "51SvRF4wEyephEgyKBa2aqgRFq7w9GQ6c6TN3M2opcVPV1dHa2iVQKSiHEYJHizCxfNhY46hzfvBqPVgVedsgLUe",
  "key7": "3LGbpCd1jJ6NrTuaq7uQvYPJh86oddgrB6V1NPELd6ocU2YBN8wtkVZkUuu62bjanJfQFjN2pVW2SyQGi7LfQeMM",
  "key8": "4yytPhv54BKZ8rNpY4Yz88hunFqxAuKAqfbGks471CoK2PHB4t9YvnWnuvMD8Gw8En83qz4tF19f8Sb6f3gpYmHa",
  "key9": "2PdGmNBZtFJV9DuEa5rRpeKvYZsqX5iKGJLxE6Dqq6r8KePRen2fNypSpzcNv4thabDx2tWGPaWprRR6RTdgWSyS",
  "key10": "wctdSozyRsdUdtbbVKNaVHsjyxMVyD5Hu5LHbQ6WRGcbN6Ah2UmJcncCas5ieXFPib9U2AVrboYn95eZ4YDP9fS",
  "key11": "yNkpQCrb8WFSsxQ3jetcAfHvSngY7t4wqye2F86m7VDckK1MFWQib2bW7zUE9dBUGT8MLrB4KSJRzDho1tZZBzA",
  "key12": "56HyuSMu5HTNbNPVBp9vTE2TqXzF4ExeYwWdS4jWY5yLy7RZXS8jib4qE6jVgfSag5sZQGFvvhDjLLL5tXqKyDdc",
  "key13": "3KebogLQjaxsn9EVWmHw93NcnR78w7NBB493HTCaeLGVF32jaWiuSVXmv1EzT3Wy8oxovnb555UzgfEdVaz1xP6U",
  "key14": "24eNV5xqGRxRmwAHDPz2qLCvFnLfvZtJtWt6WDVEL4LDnMChCKMM5zQsn9WbZQ4kGmuEbkk5S1Gq62SvXVwziZUb",
  "key15": "4ejxdyQJ1E9mJbi5Pv9hgtCr7s8Wdc8DaEaXNSR7hPE4TmDr8MkFHB2npbMyab951Jr32H2XMnTd9wtP1zmMTBMR",
  "key16": "3rmEUxNvaLeb93zJPKmWj2nBFi1dUEoYkJKX1B1KXo8DmkjKYRdmT2hnqDGWz3cG9F6dKSSp6viNLsUJfr5sT4at",
  "key17": "2E3S3GqxPhszwBrKV1T8dmst4K6T7hZ1C9GeRLLELLe9DcQNCUzEr7L7ZhD5kjqi93SECnVPpGq9zYMAth61Puk5",
  "key18": "4ZvDQedH7bryUavqxf2voRMtAG8Ppdz2wxFyzPBepVvzDpApY4GJoHDDqqi4LZgqUk8TXYtx2TkkK17h4c9mWNsU",
  "key19": "58RDhcNUX7GHPPvmw44W5bCtuZZGyGaXt3jC5UDCBxKSnbJwTdYw63ygtRgftMu3QHTBe5JaAiYvPbAEQsSJZSaM",
  "key20": "USt9KAumX81ULh6n4RHjWcEiHuUkeRWEjGeyZp18D4vJyZB5kybZBVwdiURwghUgf6RaWjt6H4QmshoTJMtMwGW",
  "key21": "S2ayhmW4vg2FdBP1ACPv9M3AS15kTtVFhFiEaSRgUsDq3gSSmVV6c8yZbJW1b3ezvvskXvY9Q1iR1MUBAgo8f1Z",
  "key22": "4YmeagxmNiSXRqmURTqBtsuqNM7QfhfNS6gZzpQbC9nYU7XM5hyRbJPSAG491p51adGn24HZDm1CCwAWNbck2zmY",
  "key23": "VytETL9XQWjhZ8P4pc6mJvVzzR2o2BJTwVJcnLrJqU3cdZn19fhmFjQYhX3NQ6mcT85DURiLz2RizAy77ja5hWM",
  "key24": "4BktETK84hiDZCj9NJwPiaDSRn6bSAMNzYdDzuivpePLTXzVcT4DQ8mF5RNuGsZNZV1dAG9bSL5zC3jX7Dzd8VXb",
  "key25": "2iffvu86TZFJA2PSuqjZ9iCrPb2mVXp6MY1ycCpMfNfHzRL5P4LyW9QqvB1DwRreE7j3qsXFVp8kH5ztKeQ8Yv2j",
  "key26": "7ihjvRyZFsbYjR56xc3hEyQ39RyJXYYKbrZEd7u96WWUWQVzQ9tDA4dwM7bYu3pGiDQr67WaGfwZZ6473fhPgdF",
  "key27": "FUWbmwbKuFHqycec69XoPASWsuUWvtynGe1Eiy6aFdUEURw5MSPBpu6aYhZcKe4DeuQs5kGAaU8VTmbJxz5GhPP",
  "key28": "EcqQVDPRip2ud92CsC8FoXdWPUPT4crdG7Rd7FcL4zwbA6i4mGgwZDVa99brf8n5cP45yASypKUYDaMsqb6iZzT",
  "key29": "5MxFV4cVT7Bt7BkwSJHzhehWwTsaMi1ZzuagcnqDQ5QY2qJC1rEyfiE91AkrptrxwtD62x11tn89F4uX6EnYe7zC",
  "key30": "3ktfnHooj531vynZSxrANiN8gK2bFfw8FtDocgk64B93m4wNZmkKPVij7Dd1kg8DkWFb2fY5NHeYtJcWfPhu12bG",
  "key31": "4AJk64tJkuhKCxFGjXwRojQ6s2mT9ZmQqX5rBDXVgMq5dpyDLA7sXPJ5d5y17M4GSKU6NH2kFDkp1Z2gRNhHNNjs",
  "key32": "2KbabtL8s9GXRR4HtmtHViP5vW15XLyHEiXSQBErFet66sYzSiLv8V2j64jtQdwxr6Hte8RxWkFqxUJEggH8bJvj",
  "key33": "5MEG84BYLZZqsqJqNpY6EKZZRQc7C7ig3ndfnmCCThni8PZWL5f8rjm83642c3ugnmtF3wmAYy3MQD31XRbgoaSp",
  "key34": "2hCyYbQnesEDdVN2kRsUQa2MQmCeMzghvEFc2BBb2V7NzUbiscgGNZCsLq7Uuv1dkM1ebn4AZTz5w639CViUTxxY",
  "key35": "3L4EYfojHHRc9cLsNNfuGbMKie8CXJAFABp4Y9232acR5paUNF4RQUYoaBMaeixDpJ6y593P9tBgzrsjG5P5nY2H",
  "key36": "UZyR5vyTMd7bAwxYv61JKWx6nasVbWU5TMCD6UvPLrtLDZ4zxy4xHTzcw4yiqRSPTvN2QZJ2Kgy2atnXeyyXUeW",
  "key37": "MdDJGBaNhMUWAEKRhe5kttUrZNVFGMPpVmLd5utYmQbLM84FzzepNXyZKVRRWjj73PGX4FCQQR1AynVnvgQEXwG",
  "key38": "CT1AU714aPmCFw345Uk52rPtRbYiZMtjcjXUXt63r1ctbrjAfeymh1yxAcSZ8H6eYrhuC8D8qHcgDsVTVjdNjne"
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
