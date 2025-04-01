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
    "2fMqwafYWxfQ4FmGy6L6NpGBKuZ47V8y1fQpD7J8uaFAH8B3UfqkS4hjx48UUsowvBYBt5opn1XSp9Fs3vfKeuoW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r5mecCfRwmkoyQ9k3EK3Zz4feb386RHD6wfhQMQxx5w6NPd4sYJPLieqKbf2XSmMnqge2xwNBHynoQaKoiHWBty",
  "key1": "2hGXW1aacyzKmVeVKebUpE5o4RgapQReYbS62mLqShZinWsgmaeE4h4pyZpRyczixjdx94dULrh7RzH6G4Z9dQZz",
  "key2": "5QCYuPUrivgRuRBFyMVvv897rHw23oF3qE9hfbGBAQnqBudb8MfrHqZE4nhScqXefSJ8WmXKBtDDboTiM5G1pAPe",
  "key3": "2fmWpgEXrLicA3rDs9UrYEZhjim37QWNLMxfE9JRZAdKQhLxGdbyXVQnR1jEwDJCgD4h1g7ktXHKY9bidZwatork",
  "key4": "2cv1xgyLWeJoo32S4kCbVQkAiSryjc7WjtuCzXeTrnT4mv78NLM83K1c5boMdrpH1JKzhm89NC6PxcZQ84pCTceJ",
  "key5": "2fJNtGwsmJ4EjQ12BuWg7NRSpqFmSGYfchSFcbBozrGYXwzgzcbVnFTXqucY8KzCNF3YaooWiqc723ZQBtLHJMLE",
  "key6": "5gkVyw6DtHiubnMsxoPdHZZgp2jH3AdveTjk35oV9gZjf6nykhumwzg88eTznmHwWm4Fk8x37jQ2qFVDHbpvicz7",
  "key7": "3A9qwPfytipruRqZpECBCrdi9ztPntgWCYXG65TphDyad9hiJw84PX36hBW1A3uxr3TJ3qBDEk1Lw6wUYQ6WVSAx",
  "key8": "2ht3DBvk4Xcrq2mj3xbDvnvCU6tjAVcAvCDAqMj6i6P2shQdEDyKbGgoR92R3mE5qydjdQFV3mFW3Lz546u34swm",
  "key9": "xUCUTKfd2oW388kadpQGRmBZdM6eqe3w85DSTSxb2GeksorTSo9s9W6LL2rDJq42HazgLMNkomcsuMKRFsicU6G",
  "key10": "3cPXbfVnK7hg29YmLfjt6dVpZdERnpM54tXNmvJj7vJALGHKq9UoSgveRkjjdfYKCpZGea6UMCGivAGs2AAmQnXW",
  "key11": "4S9ueKCNzaL3h4GFWwToEYntfMEzTcmRqbynvcPFeLE1WaTQ5z1qPFPQyJaVJkQ9xaoMyfGJmGAmgM29oTX8Rhwt",
  "key12": "5vdD9fxbib8Tz9x8h1oTYL5h4Lx4yDiV7zDyAqrvaukjgceDS2ogLxZyiAyLuW2bsKUCBdXpcE3si2f8wMMQSZJt",
  "key13": "4QT4oqemztQLxEZaup112BonCsbhzazWJ7wGXxaL7z5yZy1Ledi5QGNsKsSAE8AgG81HFpVktugEkNgvxpyz6HD3",
  "key14": "LWdstrbjqnvyA1U7PcYLjapn9LFAuJAqQZw4gDMns9XrLaf2jMTH7wLYiyREbheYD8vFSMrECij3bHAudoHBvYw",
  "key15": "4vxX58sJtTAXLHiWKWYqcK6DUwjDFvSrpeRgKtWwMQ84AYJxRdwUn6AbWmgaVdLbzF21VqpzZqeysDUxoPUucv6c",
  "key16": "4oQhX1idxytMmGkc4EpMSSMNEouPeatheVAoqeawqeXs4T5L6JqANwfRq72WkCZF5Gpq5Ki26KoW6sbyGkBwbJmC",
  "key17": "LtCcBtrArkaQgPTCAw9gRziUseD6DenL6P7ZMAhiwbF1fKL7dcVJPzYqWdF4UF3hXkLqF6iJX1GZdPKCFaZABSg",
  "key18": "51fk6k4RXU6ewxZYyU6cCSsXgXDpbKXLy4KHWC799grZyphbkbSbfKfJVtNXRkL1xhiFaCaEjpWggML5wLHzG3V4",
  "key19": "xYvT8uMf7kvHpQKyFKURA3t9bWeKnKf65gJFHo87UjHmHSmvmMB3oVdkkirg6wsPDiFw41669jTEvNZ44R5vM2Q",
  "key20": "NbaHYHeSoHkkdK9E4i8Fh8FUxrCfBk5nuniChK2HDgus37aGtDcAq3y6E7irqyJ8NBYEwTYFm6wqJp4iDrhiu56",
  "key21": "2nD9HNAPMTJMNdPWXer9zWVycKT1G842YaYU8vM8xkTa3pUYALKoSmBeFYY3CgzwWHvNfDxhvSHwimvr6DLieaee",
  "key22": "3nFRcoi3cWPtvD77ogpWR2RyL1LF37CvhiqhPRGxZks85ukf1Py3ShrKgZnLpDzJkMhSCNxYixPCTDcbNNGzJD1C",
  "key23": "4P9vtmsfJLRC6vPpbupLMpTT6cHWfguqJjFNqYajKA5g7KqSjNFJ48sBBzh6QeEJ8Qy7JnbeUQaJJp8ZThiJxCZq",
  "key24": "2KxxU6nrPsLqPQpGVCJevm6FjnCk7iaM3FsyY9CkMokWeaPcLiJTbkTL1rhvAEzRVLd9jeK3a27Gzp6xncxrXjre",
  "key25": "3yDwZLiN8CbXZ5AQczU8NBcMPmgYtmJhLoyhDvn41CGwyxRBS2Zk7hw7mfjeuTZLcxyz6PV2aVf88LHEGfW7V17J",
  "key26": "AAnGuzADZwwmhAe8xmKfumbZ8mjaxrFs2xAZWhGbZAbX8UCRXRwtdq2gF1Ez4EBxpNuWSeMzxMPA7pSxMckFxQ2",
  "key27": "4x32exh6vgQQ1jY7nebop4c5awu57wcLUGzmNGPSizChoSyc2igwUvBoqWVGWiKUrsLYpEdjta6stLqKBeB9xje7",
  "key28": "4nxjy2Fq1JKUTZiEdS5AYU5xFnevpZasRsvjFyu8A4PbDzYDkrXK3QoyCBP8hS5ybXGhVrH9kSErAPjT2HMD46Ai",
  "key29": "2PRwMbNp3FUEepbTo3gd9QxGj3tkJG5ZPfJngHZCLVdLG6mTk8vNQcTAkAKKEEPahe4T52WD5aecLZLKNGKUDURT",
  "key30": "MdA9ZUEQcGkD8eCWwZHj8b5MiMTURtzGJAgGsCAEMGVUnRxGZiCZNVTttGgoaYRL1HFPvY5UrEdyjqyrKYZRCAX",
  "key31": "4qGkJNCePf9wpDHxv8nZw93e3GUJyVV28FAosuRexx3XC7N1LYPvX5xBXFALp4PJ9MowayXntVccMEh95TJBSHi8",
  "key32": "2eShnzMsTDQiZUCm8f2rRaJqmnDRdwbKu7TVJynhWYFBWvoyrjFiKFAj2doMXSNunhBo9quSeqdzWyYnGzWDQet9",
  "key33": "3hEWih352Bqys6zbdUbk83aUVctjnAd8XAYfe3xUC8NhpXhstioYDKJaRFhCCvYY6MdFCiTFh3nmCXRbBXdeckX1",
  "key34": "4bhfyyju6txemLc71wdyDvhKKqTTTxTmjjE9kuVvCUZTUoqBaaqEvbpkGRYo4cFMW7sKGEB2UPxWpCjLH3MrH7xx"
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
