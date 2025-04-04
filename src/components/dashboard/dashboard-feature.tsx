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
    "3L3sGmL7F1A7S36QRFDhf2MSbJB64fLYnZf3vojHmz6pe1VtPijmqfrztM11bm1WH6f7jZP3ngst3NmN2JMj3x19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DYgQ8NB8zAo4RruBkYbqKtesSwtVAqjQkK9A76564C9NgSh8jusbqVSyjUBfqBdAB7VLvXJxWTkkZ42VkmUcLb8",
  "key1": "nJK9pDoLiimtX4yPLVToYpnp6ert8TTM7Afo5J9ysGUJDXTiE9HYJB6miKHMxKkAaX1E29JAH37NFC36k1pqvPk",
  "key2": "3yT9MAVyFiFrXtkB5R5R4wLuA1D9ydnrhp58M5T8QHYZGJj7GcPFgNk6T5PADgEeR1vowGszZwZtWEZrX5EwPjmx",
  "key3": "4kFtvBfTzYBRizmzQZ491JGXatjwBQGZD4FCnHWHCrdVLsNR5JFfK5t2mQnjVFwoCfTrFL4Lj9f19KT4ZDVtghWt",
  "key4": "2VEacBxRLEzeNpJDD7LN4ezxdfWkjPkCwbxLrFNnjkDDHbuzcXA694k2aZ3zuvi7VEswXsxcnmNQt6ENgcThHSa3",
  "key5": "xkCgipCU3UBPsroQz5c9Vm6bVcZr6CzQoPwxTvnANeCY9E7BRqPxeX5yXhFCPT32eMj22scefxeod44J5Xqm9qt",
  "key6": "qrtr8s3iuja6Df5XCSaSHdVT28BKaYnd2LxjYjzeMKt94nXyHPTyPnr28W13XxvjJLNjio5u35ANcE9uR5pGZaY",
  "key7": "361aGehCJwaRL9R4Twso8rWgKPtwjfNMURBvuwXTNo9YdwLU1sMovmVMFLbvbsUCiR4tyWGWztz7dXabmd3PLVCu",
  "key8": "5NGfSV1FpGUBkP4gd5FJ56q4rxJLGeLmJNGPbk9ZxathAf3n8YS6gjmyNBcZhM8eHiKEGBvKbkCi6AaVpPvnzobx",
  "key9": "5fcXsKUaoLb2PrFY4R2wVRcJBwNPvsfjg8DSdUGnLd6v5fGknhrhi8r1X66S4H7rb7oaNMJHGSesQGjcmNfzB5hA",
  "key10": "4N5G9W5rg2r5cutrUQrhKukRXuPyyA98rpLiYr1FSQEAc6boiVohhn5eSzxc4AQP4VC6VqbmWm8sLTXisxXzgHhY",
  "key11": "4JjTFmo8xhrS2cTEn1P4uPT1L7oraRxPCi4phqMEjUDpFawYRV2Ba2ukb7t2gwpgnoDUbTHbywg7uHUeHwyikUUY",
  "key12": "3gdHC39WoWpu3wd1SVaJsHL4FhCFk9N5zpqCuo53pQEPxTb7CVyxbTiWaVKr93V2CnaMxkCu3NenXo1131sKAN6q",
  "key13": "5PCzE6heU1HjkMCLN8yjb8ZyHMYc9TX8oQ95YhegSUeY33AFARVqi47Zsxcz55XK1RUMmk9NJPsUGSYMhg6o5kvt",
  "key14": "5HZ6rwT5iZXDVpr6PKnM6Tr22m9X6cpkJKo97jqxMyZhCZ2taYYYPTvuvwsRcUQa77yh8Hpi7u1N2TPHNoJ9jX6h",
  "key15": "5xEY9MaLdhiB3L7ZAJgzmfgXTHYd72gVuuFTafPmnAvXHk4uHLnAtmzQp2DHhmcrrjW5vfRoX5UTvd8LQVW76P1x",
  "key16": "4ZEL2ndCjoZSpyS5H5zi3aDYm72uqB8AJPkU3wfpRoYYA4QbERzAD11F1mSxbuvnbXjnGUWb19rav9ysvd35Cx1M",
  "key17": "3Hir4yKwKZMibRd2RhAQzgfi1z7HT4bbURverk8AkgoPrvdVivLijNUMxpaw5nKF6j1pyK3mo8GmZYU6E5qt2H6c",
  "key18": "2eov9Z9yVWmzeBZbUPLFGrN8mCYxQGAxavSZ2FmvMePjJqSeNgoDPNCnn3gjQtWySsHDQYAagbkCgS1Fh2TYp1GW",
  "key19": "Uy3qYnySN6fpj6h9hdDwn1mZj4ZUdVZnkme2UyhCQgg1xczHkJtfKJcyehfLjcpfoM5xWfGBe9EVRdjktkjeJQh",
  "key20": "4bA8ZexxrFzvtsNANCm2KqEzJ8zkJ7wTRzYUdfzhmq1db1hdKNLtkQ1vThrCaWEVfYC8d3RhAcJPmmKj8sSnfT9z",
  "key21": "MQ6Xs6pwpE3k1mWnMkxrPGhYJzYJ8P3A3FPLfmwUmgqqso1VEeLXAEyspq3WvT6ydLvCvXdAk5v1ZwKsPNT218U",
  "key22": "3noEbE1UambbfvrVbqGEMW9KdXsZnAFaH8MYzydVacckvz8FwgWFqAork6yrVWkx4CSmnHtyS1Y3iS3X1NQnmGeF",
  "key23": "24gaq7jaqgUo69KoukUhBcychupugNDodmHbXwabFUGBifQpZ4HMzQhUwXQPGzPJiShMLT8dKHA9mnJJTQoDrdVa",
  "key24": "4LgKDmgnFPyeTuLf4sCip9GKE7dxjsw4BqcLgAr69k3TbH21Cz3fRQS2HHPJnys2WUaz2x4YGZMLCe31dxHBQiec",
  "key25": "658b8qjiEUQdcuk6SqsetEuZZCjje7PNxTVSqF45SdzBRAa7hLYYBbbyi5h1AoPuCT1XiX5DNvd9aeCCf4kTEM9d",
  "key26": "4nN32d7k8crRCN1TXH6rWsLhkYmgHgaqp6V6YBHCPg7qCWujHFnZicJ9qGNWgf8bYUFjWqnp9AqkWr9Tjv89zRX8",
  "key27": "27djipntjCQvoArzfEzDTdbGjcQa362UdubvhDAHmJyc6qz7r2Dn7C7aSBeUXAMSqx3faJjKE2pE1X23Lvr1YUvV",
  "key28": "3PT3cbo2CpD7zT12sdEi7zSfwqi75hU7kT3ivxhL8G9cZbGvis23JN8s2KXVxZDmZsTZpTjF8V2iXSzLZdJpcCN1",
  "key29": "3G9UkLW6YFvHhHLUW7yrCicCbLkJpNQEyEVMCiCnANkWaGwbWMZGSmTZYrKEzd576wWWpChsf6B5Zfor6cVicMqz",
  "key30": "5kKzyKMWnMNy4BrqzTmNLP7Aq1peV13QNbDc7FXeMK6BGUzTYDXvvWoai5Ni92xJVNRVLNvxE1hjBt4uMt8MocPt",
  "key31": "5jAgdjjxSDg1M2HnwWYQ33nQEXwxJw59NwSvVMRRutNXXmRvs7UHK8LLg1Cb9BMjzWLputyRwCo4vLstyWqAjqV9",
  "key32": "3J1nLHKRUBREj4xaJYmRYG1xJGMBRfjkbtGVthddPopxaETBB87Uotz7RupYJMwEuofXKxfUyPz2XWu1P8UPbpAs"
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
