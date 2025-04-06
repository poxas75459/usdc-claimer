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
    "4JhgeGA5XQAfbZBSCKN5216d2T8mBnMVpeAQnPN5zdMps3sA3LfiKjdgmideHVWgHe1U8efxgmGouP2xRq78hKeV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56HNhVBtmYAjWT6H5tGkxZcCvbKuw7pSJ21q7QgY6v1UWvX9pBkK6uVLsxv6jtNp2BcCUihtmy2ed3KvGmVbyeRr",
  "key1": "4wS3CLHBAobqi3HAwpYpjxYtgvmsVqehy6jK2P9Ud1CxVJVhsrd4trav45RFW5xchqqXGmm7oNHEZwnVpLBzs45v",
  "key2": "2giTnX8VsCeLebBuB6Dktvhz6cBhPZoZ4V1d8xyyojzLTzrjgKP4zgEGpWgbaQGLPQec1N5Fr5erGtN3yPGzHe8B",
  "key3": "3iajHbcUkNfUPiaUC8JgipLpHn2ZoS5rLYXJDNU4DbZrha5GRckFMNV5cV6VrSGfMjy6p6oZNSf987ymtNKivGcG",
  "key4": "39j6JdRNvwWAFpJrHZEnLjAYm5Q8X5h2jWk7hFhyDZWGUgn1EcmpkMM8LbhFyUJucBiFwoEuzKwEQDRBjxgGn16p",
  "key5": "pjyZfcsz3NDvd9upyN53G999yHMfC8dL3K3paEYkkgo8qbWDaEbEX6yVaYemrbjTJ5h2Qzeafp2CXhuuzxZcVje",
  "key6": "23RtdSgEZV4q4hTe5CyYoLb2zLzkdeUjRaTXUhvT2BS29UNUDVzwLkDwQtUDtSQv4fkBsKRHYqV3t6GoNTBdUVY4",
  "key7": "4PVhZuLK2LA5Nf2eHqRVC9K7eCv8yrN8d871wQsQLnsC7q6ysfq2GjPsnqVRGEU4RRWGuueDxN8rMPxsLQ3h2tKs",
  "key8": "5AAEiRusmiHvUKT48zuXQY4m4EoW8dz1oymB8eJchHAwKPG88kTraFg65ZZ1Uzx7CDNVE3sHHPfTKbsCpRHBuEEB",
  "key9": "6snAvvmRG8kpg8io7TRkQpYNdyMib176DNgVnbQGuuDjQEAcFSJfFRcqeXoWmFhHR6LBudnUdnMCHhgNze3XekW",
  "key10": "4jq47Mifph8f9BqzS19acZgN3ecA1zk7xoYjT51xY8C9iwEA9TP42V7qTt3oy2YQgkPW5VqM2ApJKrzdaCKzn5MK",
  "key11": "4VyX3XAfDT3rYEFYb5vb1MpzVePUxcgBUDYmu6WNH5oRzmmYRd3SvrNcSbN24AWPHeveh2fQMKM9hvZRWDp2jDyL",
  "key12": "2EdvWnyKuHn46ku2TnZgrixyRdkhksJCd8T6WGV76v8rYMkrrVSy4bL2MPGgaLjB6fbeux2GQnPKaELz9rUQUpHD",
  "key13": "5LtqsqA2n8zETKcPUihj5aYux8TSEyeWG4Ary6t2xKU7wPkjt73ysofnBQU8ZqTMJi1v5chia9EVYMUmQeAyWFPJ",
  "key14": "JVN7NfMCiBnz7s7yPvVVQBR9bUkmQ5pcKEeppg5TSL48wcS8TPP9GYhfgYBieiYFaqJ5v5x53mwquvAz4TTwPrw",
  "key15": "Wx6aaLYAdJjQwppkpim8KNG5ZQmijJfJp5Tuwqm6ZgAXFvHb9drR4SNmK99wBrVTLPiHGTJazgwFy2vaG8u7Zai",
  "key16": "5gt2sfo1AFnHQoCAYcPPLHVMWRiZJAAajXKQ9zAX4UyVtTDsYbEBwRDunWT7vzkStspYYyhPF9w2FavSy5hS8dgt",
  "key17": "2LA9UiyrveU1hohTLqsxoY2bWSt3EB54P5Qp9gj93JJEcuUvsjLG2hXCfJa5CGvSCLgxhHBFrZPpRBWpsA8Wmp29",
  "key18": "adUWoeB2AnFpPtvh1aYJFHh6KfU8R8LuyDEkUrtBm8cP7W5Z2aMiXpVAcqCTvwn6DYW8bz2Renk2TkTEtkpZbvY",
  "key19": "4ebZ5d5cDRrLN1vgAZDFgKk9uZGmHKTY1SJQftDbqTDa7bZUYvoxhCkz5wa5haArz3NdJwhy7Py45WHKaAV7anqS",
  "key20": "gyHJAPHLkC9T6DRA9GxnHbMHu45RoBg5A8BtS6aDRUGJ9QRYvgQpDBfBruGDdCvDecQK6EQjgACKDKimaz3ihzp",
  "key21": "RNtT3ek5VrUUKJzbSXk7Vezad5qaUtzq1BdFtDZ9dUvqVRyszkoZHU1PfoMXJmfBELt9f6NM29AM3GBWSpupxSn",
  "key22": "3EouipyqgBcpBKDEM7GbBPfLj8zNWhmrcaN6gU4xNVY4hwQB9aFmSG9f3CVYQUBW8YkNwVDHd1pNafhP42GrV8kL",
  "key23": "5awcCuk7NRuGwUf2HnHt1qXr9QLZ8zmUzUrhxjP28TZEtgj25hS5mr9BpLRJ6mBTQHn1r89rLoRrSizntxZ9fH6J",
  "key24": "635m7ACaawtGTmsELqdBfdFV9WWrTGWtFN4V3ekRTKCDgxNoDNXP3pdHjHtUPnfWXqZWGpJw7VCKBpjatbtSqaRi",
  "key25": "37xAjHxCaqfkQAPP4gVyVdD84Ge6FkRJUJhwSQCAyurVnHyDaJqUjVAdzcDaoMzJYqWYgd9GQY4Lb944nKN9uipv"
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
