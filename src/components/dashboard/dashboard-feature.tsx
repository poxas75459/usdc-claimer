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
    "4MBCxfhEW8Nf3Z8DLC6MZdwUhLd9YK79QkRhCemPJBJe4cR14MNkG83BfaweH5aA4kMhPnxRka73VxYKhCv6o9pB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cZiwSKv53ZuYd5JD7iYBEWahnb8KzeSZKsEL3NM8VPTZycxnCgBZvAeza57hhFvLH5ZBsQ9g5pMC6Yc17JNT5re",
  "key1": "5NXBWfcJBtY8fW5avx9zgaEF3B2QfurZuEj67SHreeQjwDRK8h3og8uhpLRzmHo683m7whCw47S6fEebHwU3QZXA",
  "key2": "2Kj3WPQ1wHs8YU1vuvwKhQaac2qnaDtngcNvtr26B3gkq9AK9p6tKaJZjtcPWUh9wBDVZ5qYRWvvRGNryCkMge3d",
  "key3": "53ouai4NZjXXGTyVSwihAnwTnKDgwAMaE488f7GxQTjwU6oqhB9tPGDdMrVfE12unBNTkc6b5WNbJhZThUkaHwKv",
  "key4": "3rBr9b8Hnq7wfxY1mF7iaHt5Wuha18WzX7cP9BxUuHwdhZ8gCYfM8dYKoJFURkCGajwuZ9zCVvgCWmYYAewez2fZ",
  "key5": "utWAUXm626PDwvupr5gx39xprhr7dBGYy17FSS699grudd4WFxMYvChx4uuS6mHwqns2gZ3xXRefR6Qh1FR4GoS",
  "key6": "2fR3VVBzDB1BJyA6nZ5GZgUcJP7N8YHePMebot3cBm9kAQkmy4F25rwiQPc5iB6wMR4aay7eBbm2KhmoB5n9QFUg",
  "key7": "5cFnjcvLTPN1FdGtfQ68wS3KXCaideQm2Z9MTs1C1pFNUBw6xGhw62DX5fkgu9fDJKGVG4gwzGHA7DrTuW5ZGNWQ",
  "key8": "2FuN1XRN9WYsxezDqpfMtUPJnzcwqJ41yXTzmkXm4t95Gw1UE4jnaktvCRM7XNgbYAkkumPdyak4raM2Zmn2FfWD",
  "key9": "t2PE161tEqhYbR9tayb4pnuyQK2AnBq8JE5AHRGzaY4izZTmz1i3fz8pKJaBit1BwfbGcVwsuoS5EURKxwjP1qp",
  "key10": "gdHkWoii89DedHvBG83AzL6JERw6rGAXQ8xXSwx4Dr8mrDUsoYdLBdGVQmkTbpannYj1x8hmhdHs4e9jub467C6",
  "key11": "5V1Xrh5UM3b76LLDJfm5bujQTVHAC12KYUXa21QPu5uj9W5vb7uGPva27GXpNNrh57yvjQFZvq8VDuGmNWrQAxxF",
  "key12": "2bHd9R7tt7R1gMLbsNTKHP3vZw1A3SfARjnS7tDJ45URxJzo4wZTTc8qKm2ZiEr9jTBHUwh4tZ2oG5hLzqRH84k4",
  "key13": "Zojsre3cLNm2FS31Mg4ueM1NEjrkNAei9LXSQxKKnYTDyyE8czz9uijYaWu31hczn4oWPpWCGs3Zsf7tYRd7ZoJ",
  "key14": "4txZFPHEfsnBx4w3ZEcDuDy7ebhoeyvzvUhgtEMLvAGNzmCzQB9RrubcFedRTK1k3ZqEPExP5E9woPU2UXh3ycZL",
  "key15": "42fMise4LbKFBWcz65ZJaHWNLW9eYiqfPum3AXDm4frBdsmHFVngUVDGttdXzsinv7VNzGsNWtk8SyEq5R5juSZD",
  "key16": "632QJSKoc4Eb5qq6tgEDzxCA6vPqkhcbEKJ8ny6hF8j7H4RrYFvBHo6fQWzWXjbqnug1AaTmA9Qa6nyyZ3k8ose2",
  "key17": "4PsyydB3eEJoU6XQcrvue9apt1Z2jQpnjK6toTiVhLHyhAMC5rhvJ6Fhd7J1vgXVAHqH9g19vcT2yKz5i7HT1r9o",
  "key18": "5HTLGUbFLc1rbjHgsjBeh9RameGS6RpDcg3Zgs4fXVjZRN7GdQmrzPYgXbjwwjRTQQpJyyj3maaFHMif9TU25ef",
  "key19": "4HHmBXkDDuGgt92Ebi7HLT1Y7NUEHkYg6JJdLCjnvjFSxJTTpK5uonqnbfWLBPdfbBkSgbm6nzLH1MACbSi9BYFn",
  "key20": "3aWeZVz7QB5cHU1w5LkBJLntga4mQpPRRSDES8WVUSHbhxGHcBT2vBydxNgGud2sXZK5FQxMwhZU5erX9J47ggjZ",
  "key21": "9VtNmMHRBBaeZU7E75u97vJmXoMAKfcGwSN8rS61hJHmseYveaTM8veR6bmqhiz2ciSfShjytmXPP3jQSMeibL8",
  "key22": "2ozubiMqjiVhjupjiU1aVcfpiRoSGvUWdKyuMyvG85QMPg8c34Suvz4W9dVMiv6fJSjE1EVgShDpDLbT2h3Z2Ck9",
  "key23": "4pceM7wQ6FBk4mSjm4LsPLchqxosczTjvxpsHmFejAdHvdGz3z8XVfu1MCvY4am3DRuX5kWMRtcmPRmMyaidxYu3",
  "key24": "4LCQFsbn2fmr99e7TKM7ygawuboEsDPeni5FBUrnQWXVTHqNqGWJcbYxrZHTaQSZu8Q7Po5qVxnfMvUWFnVEjLSx",
  "key25": "3yrGhUPd6dK5hgSmvwvdb5e6Xg5Es47RfwFwKRzqi9WrmWyZycUMo9WHGviAL4A6ZNWQk8ynb2zssdji2w5i8KRj",
  "key26": "3ZAXX69sqpjMw6NTTDHAUtVdgJ2Arbbemqga9RHvoRE2kQGueVFhPRrG5wJqFFKtGYS6hwCedRKDgh1TkbWkV98m",
  "key27": "4sReGkUkhNG7hYkMhUAptFqBn9LUPHo7PEEQnwo7sFctnHrfoLAD1X4ToVhNkoHAf5GM1nganbXndAUHk4KcYRs8",
  "key28": "297fQE8aa9xWAcdEo9sapn75qjxGYsm5yEwVzqjkBZjSWTn24Txag19GhZb2GF6tM1L9sFLc4b3aKgDg5htdAXg3",
  "key29": "hH8YxT9DpNCFChK22G9MQYwd8nyu7ueWXCDFXjzbekBqtxywyZgsgxPeR4SpsTK6JcMvKoVsiAjQcCS9FQxJTfc",
  "key30": "4tqzSqqfEHdoGGZL6kbiArd7eJExqgi2rGKa758YaGJDBm3wvwG21zeH6jGk6DTgCwyRMADfxuMn9HYBE1VebcGe",
  "key31": "3PYDLRFgx7aeSK3As22foxX7kKKsMDQZNh9uXwoFU3EQZYgJLLKTvP7RiVohZfuAjPhWTVhiV1yScYsME3SfSxLx",
  "key32": "3gJYExRYKWWxx1h1CzmaNdT6ELETo7iyUM335G8TMxBoKXT4gPUrKJL9LuAvtKjNcaYW9xB3vYCUzAaB78i6YAuj",
  "key33": "2UAp6B2kPvEEEKcABhWNWmgf9Mghsq3GQMsf6yX819MR21KvQTBbrkpqvVtDNnHs21PGRRK4BPcBFmbRDUa3KcYi"
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
