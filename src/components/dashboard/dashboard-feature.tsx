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
    "5s62784FeiqNqpUoyQb24Yf5sApwsRRnNw1hJcRpwyW1yn65xKdyzYDoho6WEUhvg72gXEHkW4TiqZjXZ3hvH55B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35jSxBJmQnkBs21DgDBfp3hfUhx7kBLLu1syLj5vosyGoaPCtvXjGuUxsJNcUnbpmpr4Dz8ZqujKNP5deZ5krqjC",
  "key1": "g1mdhjQzDkifeQ18G2jtdGNCxepytH1pUN3K4N25gM9qMnji4AYR3sLTxbzBSrJMpnNrsRZzW9SmKVZpJR5T1XV",
  "key2": "5hj6z7FonwSHdWYp9aE1hyamf2W3EWmUHqPCeR6KWd3ATfCkYPbssacxXtjpMTPVfJ46YUzn7zh7WoQuEynapRQ",
  "key3": "1pJ4zgYHJFHQ4ZK5Mp2CtNNquraFM9ZShpJeA1UvTkiT39iNveBcjAVRBZ4WJgXxvwAXfDLVQ5DXduyVo36dTmC",
  "key4": "5CqyWD7t2uJy1pgJ29C2g89yiMmCNbEgy9En6k7MAXgeL1XzZSoDHqm8kFePLMeExUofDpvWCwkJEGWJU8QiYWRJ",
  "key5": "ADA93c9aLmdmmorfBHLaVzHS7kUzg3CL5Xn7u7nqGNhLVVTsn4wvUCUZNE6nonZvCTTAwHKQGmukbNkKZJ9EWPu",
  "key6": "2UepKhgn8pRs73NThvKugNYMDC2myqDFQHsvA8eE16sUqKUtSL12uXzEeSzG4H8sdFh5HiQnEGzE19kEog6Gv8yA",
  "key7": "2AS36kzLb8yb5NzT9Z8CEbaS91xN6fD2Hc2GpxqPrjpirLDNXtea5tXoePXErenBficgtEEqFud9erL3A8bXFQwB",
  "key8": "5ipSHhPTnS3aa5GEiPpNKvwJXHNt8LoBa8hY26XKC159HALEpj61QkZs83wPaueVFgQeYfmdrwcE6NbBzXfA6k4e",
  "key9": "PEot5XpF3PB6UXWQp2MgT14ReHFtUV7rT8mK6bzD1ciutQWCYN7ndsQfDNMuarHXrkyZrGsehhBxXk7i3kTsJ9w",
  "key10": "4YkSH69HTWMEXpEdQx5Xd7LZaQn5whA4kfXaCDbGxaen4GwsfJe3JZJ8tvHJfHnqzu4C4aHr8EuQgKA53kqSAF5Z",
  "key11": "5gKNgZzrFYGnxLTdT5NTgBgNAd1gGT8vEzcJ7wEPbhVACwjEb6d4h3jPmuhV7pr2TPyVeL1w7LGRBKMKQQ65fjzi",
  "key12": "4Et1DJ41MpGLpPRYzFREwkgv4HMGQUXRgFooKfrw6Un2hqTCd4gf8pQUqeFtsWcmgyxeYA2uKhPwvuVEiVTT6Dd8",
  "key13": "acSQLtfa3EdJAkCG4xCSpUrV5V158WfnFoHhmW9RetGXPn4ehfPxnsv6BCprFQfwKDqL3FpyueePi1Qm9BQPe5j",
  "key14": "1D3EfiFNLJiE5QDR1S8zhmn3ZJBFmwBSXwHd2g7AHRam9uuxtD2JugKptj9GdF4aMF2T4JNBSc8PoYD2Q6Sh9J1",
  "key15": "4E5bhuexY6FTTm8goxp98L9J2AtWd4WizLoaYjrL2RKFY9GWXwfsRe5kPajTFF5KoiGoHcqpah1XsmfdzWXmpMEw",
  "key16": "5NMTW5DHX7ZtWMhENSFkWco3akdShh8wRGZxt2NCKNwpa7PamvU7hmXkr2BSMZTpCTFjLeipbnQv6uEMCJisdtSt",
  "key17": "31gr6NUWq6SDF8964c2Afawp1PYqWhyYGsdbbRVH7pxqpaJy4YF8sKTtMJFAzoW5yhQQXMst86ZZm6NVX7xsyND3",
  "key18": "57MRPYDqvk7jYiR2V5kBTGFFZ9tGbkp3cb697EYYXLH33NDKa9GNUP9x24dwboF5VXodduKQgHUEG9yYLsjnA2QV",
  "key19": "2hCvLPm8hnRxgoLiKcW1LffUPRwvZT4SVTj38G2ZxXQPBEwgEvqjJUeBGu4Y5FGgoyNrgkxrMErBhGYvEqs36nGW",
  "key20": "5opG8wGAs8XwSmfrRAwq3bmYk6AUs5hbymgi9DVXT9tc3XCMkix2zYVZQmLFT1Bqb72cXWvoRrkPHn3jjQcLZ5h5",
  "key21": "sPojDgmpbLJoJdNMUr1Kiahkax1xGCcotJ9YYVkawa4MbMpGYrA9L6tXdkDZGiQ5hPZukqRuw3WLniFFHyWMNzp",
  "key22": "56u8qrxQFWLF5a5CnxKAQzbUVDEYApKDN3sJoxiGALJRgcE2eMVjWHZwwUN2NASXQENUYcmFu8wvRK6h8KhC5T9R",
  "key23": "4FuaZYEFiunWs5Bp5B72Y7Xp2E8cEBtGoHk67TrZcZComKyRKKFwiWpfhDR3VrtkKPFXRGktioHwHWJFodUgurhN",
  "key24": "5QnkCowBdhumZapqyPrubeH3Z1CGSgJYkduwGqAQ2PYDeadJ56TfejdSPGNvJbcyXDWMaiyWfJGgHQrMAE3RN99M",
  "key25": "zvuDUjPuUAz9gYLbt4kz5higjZbpS31iabpbP4iybErgasiobTNDVLxkc4TNP6mzRQ2DKodtELqotqU9CezTHaz",
  "key26": "2HTQkiRU2A1vfu8L1QDJT3ymB3mgnbQLYD8QesDCRrd545ZTBczgpUr9nbEX2CbK8rNxzYTXM9jUYkx5QWyGBVbx",
  "key27": "43QLfPMR5Bwb3Ly4dyjk9pgEzWDLysZXutQky9MUfLxmi4xgskU9VdtGhVZPE7YPBGeoPc1nQXbiAHvyjS1qwnQa",
  "key28": "5SyXvEq9FBJyq6bYVDGu7kezfJC8Wi6mq7kQz521SZQDQYR8gGjEBFxzEKbjzGrTmTqGP2Z2Ak695hoztGg2rhVQ",
  "key29": "4VZ5dLqWSKZSq5NUYTmuhJ2p2Dh1awF8XA9P9b4DSnwKqaRvLzschU7nxNkNKG3an4a8EDJu4SELebbH69wwHQ8R",
  "key30": "3EoxYerPFL73fafNwiGwmS8zJk2sLXoxoRDfYjntKrjJW7mnhgsgqp1cmggY2nhPZoWTK2UYn4U7YjkqgMCrqzFw"
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
