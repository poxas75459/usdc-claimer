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
    "jhEo3X29SMkSjY5BDJXWkxpkPPaCH9V7hskaXkDvxJuoYPGUoKSUXUPgeHkoop3vhedvGmimkUKZqLCCCJicojs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P1hqJfAd2GiuseubEnfiwkhwakMLAnnYsWGuMFvojSPf42ZByvzpFQueTG7ZfyjmSvkbW2dHBM5dtTDrdpWAYME",
  "key1": "3rDRaustWT3Uz9S4tPJjiN79WZLXj3y1BSaLa89RfsGPo5PV4nj72YPpzKCdAqRxSpMuZib9AhknqBCyCV72SiVn",
  "key2": "2G3DbDEnSZNe67kzSmsrCqUNbRd6t89dicykJDkfa6jM9721kRZcChQnzgJKV4Gwxpn3ofzQuzwpZoDA3h8J5o6P",
  "key3": "5Tfh95ufX7QfGsAfw4VjotvKGSPC34aTi9vK7QY3yVSDaNQpyb7fM6r4ragy7oe7CwFwQ6sa9BiWtRXx6fG2kZAm",
  "key4": "4qcuPMi2Gj5jcJrqSb6bYSpSZHvixHW34zk5K9rhUE5BMD2SGUug6sn6qbbZ3CUGSGRkRtdtRPTnYtQ5C2jPVhJf",
  "key5": "3TuG5P6NSRrSz5FBPZaSHR8gNasxYa57mmZYtd46NHHDaoNtFRNunR137KtXGh95bbZed2RA2T9P2bve9sHYnxjU",
  "key6": "5ZtrDSpwBnFdnnPrAYPntR9Y57QiXHmk7QiPJ2EpJ3kVvx3cFg1EaCraU2EkHhWfb8KX3322B6ZNvtB2sx5WPXBc",
  "key7": "3BqqHP1XckWvc3SpRpxY1Qn8yXa2YZeoYvJEWT22nktpXw1q1BVVVHRhT8pWpFSMkDQbNAA7e4Mxsm7vvcY94C5V",
  "key8": "4fS7UhBmvfmSC2gdDehCjxb3STo779Uv4YerVkZfZVmsbjG7qDkznjQMTazkneYLfnpEQnWFBj7mZgawCZ18RLXv",
  "key9": "3agLFfcj7PVZqDLMzfwyR87GZJqnMAGSaRgWLNXw9z4X4P3ziJy4WQc4knHeHhbkuzBvpPfVMFRnyzCu82ZfjdNZ",
  "key10": "ruHvW43aX4ghNuGQdRxHQuXTk7SfKQfELhG9e6RpVocCXwcDgaEhi7igeB6jpgfriWujD9JF17MXqzFzjQ6ke3o",
  "key11": "3W4n5EbY7jNHDq4ydmwNWifpQdthA4gQJ9Ci4WNk7km8NTxVi46RhkwR4J67uQWpB7EsH3Bs5PcBytX3UDV3MmNA",
  "key12": "4HvXV1e8jZhRzoiZ9VFvUkfHUJaW6eCkYL1NYi1cj6xhXbzC3iJHUSu59sSnTPjr7AmMryXjC68yoas8sBKgVy73",
  "key13": "P9H4PaVkRa4sPyeBobBQQhZ5n7A2FVtyxj4kqzwotHxcS7wsf5ewvzx5iedMqQ1cbYkpKtRgFibUUUoaAV3PFuy",
  "key14": "3YdpfPjaYvV6byyn5ARN6TTYQAJCCXhgz4SZYSWnBHM7mMdqXkPdZS3QBJSqfjRX72dQcMoLjMYASLW9g3L2vqmj",
  "key15": "2Wp3cPumjTCeh4XC2otkU1zDhdZfMYa1dymwsDu81hjbDgNknXSdMzCsaN3rnKhguX8vuwRmeJZwsZgeDKt87mna",
  "key16": "sV9bqyvRNVxJDgnFHNkZjBpwWKipAvcsyrn7kCCJccTiHbECPKDKJxvEe9tHyitfPGQfkPt1SLALWuJhmtYA7XQ",
  "key17": "2hszBBLuAWYmwGkdz6MC5DjYTPpD87b1YQp166wTkmh4WzzbW4AwZR8kVdpS5JyN5qdiDgDnzsKZDK5vB1xqFYPb",
  "key18": "943WLEkkSBaGDHixqT3qhUB8wBeEyisU85QJy8phKfmbop1xsLNesevWW7csC7x5KdDhjWBRmY2b3T1aU5xMwUz",
  "key19": "3FZ9sS9ioWmTCftLvjwFe5s4nsSv8MEu4Qy6RUbQWLG29XdJ4toTrKuuqdJztHoSMc39J4XgmXReA5DAUerbjrgW",
  "key20": "3u2Cxg3wZr6coXpEksEfMt9nuEF75RrA1tyk5hdA9cYVcJfevjajnoe1Fj6fbqkpKeLcfxjkeXUhH5XeYk36FDAe",
  "key21": "BijbBv52nCrbmQfDEZowvcbnFemwJ9Xsf2urEr4RvhG7uXZcDdMkfmNBYVyHgMAUpTqwCAgRK4b6nDjwDnwrmzR",
  "key22": "4ggDLb9cTJ7kkNpcokV5SmTsqMUWaEKpMxqPB4CLgRPpcVkdBBVrXT9Xa625GYje3JTCigenYw6voxEGhKnuP3na",
  "key23": "5YQBRPR2xjssCaK8RG2a3GnvaoE9DY4aokazqby3ic9dWXvdvWwMw76VAkx7j7BZWdpQX4KidVJPvUsFacYrPpSk",
  "key24": "3mqShRsnUDQx5NzDUFbk6UPhirdizAaMy13FdQdJhg5ExDeiXYWLz3SHoCmo1qfZC9HPocBfShNCkGjVvyxSQg5s",
  "key25": "3gBMSPEs2tXipUxpmvTHfGQ58y92jrhfRrWwpLRC1Zw4yAKKLyRRVYjWahm3fvPEza1eTFhYS4188UFCRRc2ZoRf",
  "key26": "qFMxFaBuS6ZNh9SATY76812jW7NaRoZgwDc96UPxvmahV8YzVDkYC1LUE52rrYWgiC3T5YF8uvJWzq9rNKTbgpt",
  "key27": "3EECL2A6PKNa99gLnS4hbc6UqmSWt4Y8VWyKygpwWmGBnBLYx9FWJpjo5qagPSxdkogZ7j3hhrn9Ah2S4SjKvHcw",
  "key28": "4vquiwEFvb9DVQFz6EXZRwh1R6jpqDnRFLH2v7MnB4ynZmvj72cH4Ce11qpyGBD5cwXFqm5jgHcTojHRddj7KFkb",
  "key29": "2fAqnpwLGpMA6jhcdHVwviuycxVRFJtyuhfW2mCcN22xXERACq7o8kB9wUpWagZpMhj1mCw6AhUxGGzVcqkumFw8",
  "key30": "3tLiftgKDk1BrpBfRG4tPmQXpYEqDmUhjx6qz4jR5tbVpbhvbYwHaxKdaJouVMPE86UMoVu3oJzKnpLhCPxTZnv5",
  "key31": "2TLUGjD1KVcQkEDKXKo8pwUYCDJJfQrdjbokBA6f7DKSScr4R4vz4YhRBPet8PYNiydCAsiNku6NLrNqdB7U8SgP",
  "key32": "32uyqRpB7QsPttGvJs9zVAui8QjZyMYV1HwiAuVahjk2NMJ5cNaUUra8iEFJJAp2xJWbH3UN7T8mGxLuECxFgab9",
  "key33": "4ebx7PbZsAU2PY7FL3uijYF87L448LyELbHyKkQsQuEFWeFGWKAMGeMZs4M78YmstT4R3jPJUjcVR49f8KYmgWsd",
  "key34": "bRsyFs3LtNGbBtUV3TDvY2zicS46sr1xBxNSoYEdxaVcEQqKtZiR7rC6HTzga8r6mFXv4rgcbDDoB2qsHMtLyME",
  "key35": "3Ncfj5SSVXwssC89BXR4ZF1EFaa2eNm8erUe9Sud52WvVnhECqhUWxPQTD8zkutQs9byteAUZDdQm3jqagqjuDtx",
  "key36": "2UFtrRu1S7SbhGBoRnFhKEyRMygnRsqdgNXkaneWAKEEJ1hsGP8aESbbNDffMvvgf1z3QoHaqUR4yDXeKUrmrZQp",
  "key37": "5bc3pRuV7bYHD755xN6wvREjtjiEo9LDtKfMzoo5qJbC5dBjgjmgSDQA2abmUyxwH8R7BHpXGdfhkQEu7PWQ2N3k",
  "key38": "4Y9Jx7qBy8DYcDyTpn5ZMiQD9XryEngJqSCFp86PXoRRSJA1VSTXwcRHspPV2VoL6mk8fevis4Ddz5ZRUHJSRL7D",
  "key39": "65YJa6ZCEc13NrNX5Q8qLSQDXn8KhcaM9UJYcAwYvEoyJUug74pQwmDnzNvxEZkcvtfpTSnkD37LPHKBXjesbjcE"
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
