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
    "4QLia7odxA2Rnj5ntBt8oSBg4mQ5QUdqD3Zpnc3cEMyWJjiKh9ptrqAsGcZFq8ukyYc4cUC1qDGAU7qxsuKMj4Fo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PLgqjUFjEQsbwk6CUc5WnJhNxwcDSqoC8epkqLQxoAuQMxsjrxbXXzchJBBTeX1CHc8CKwt7uXKc2Mf7W5v9nzo",
  "key1": "QR2e4GVwEKk9XhsSfGGXEPuM1VqdxhmC3REzckRRLFCddpj2HgxCtziJLqSNTHMsQgScui8bVy7WzQU9AyVm2mR",
  "key2": "jAW1M3qThERbV7Fp6oz9bZK3gErEZ4RUC4kBQTfx4aezX14TGTa6KjRtYENdaQQjhJqCYsv3jX8kjYzwU78sizv",
  "key3": "5bAK4fGdJgWadMEBooBEYbGiBx5PYifhvxiAJNwQ1Rr4QY4kn8VYr1ar6ZrYn6EH3uioGEvcbJehjMAS7bQzuXDb",
  "key4": "3t55KjYERLn2zgh8HjSJy2pX8b4Edk7ZQWsduqJpTVRnFL2iueF1Rc8zmHSUHvxaQUHMBokaj9ost5po2vU6VEwD",
  "key5": "3sFMkY5cXiNSGo7HWhK5ySvArs8ttrvXirgjDnUCDxxYzLhmJGkbstAz6vi2bqeTifHyXJyR8cLjjPsNah9coYMY",
  "key6": "4duZ6pUtfxVgajZaGbXLCUbgFGzJ1YfySL3DJ5mzrfw61Je9CEjRC4ejDRnRVKrHsLBvJE6Mz2k7NE4f5yve3ZVy",
  "key7": "4mSz4tiWuUZcYf7uR2REuQ5XNkYdAp9ZNVkE6QHLtcZY6zdeZ1hgPbGpHhFu7HSJDrhbHpHGw8jDvF7nKG5BQe8e",
  "key8": "23ifssDQ4eSUwoRjh3z9wZSubTVT5aDhA8DPMBo1BkasZGkL941E1p8CsjpKfUihFrcAs92ykiTtxHgXsiZrJwax",
  "key9": "2QK1ZJCYhiqq2TWBBauVitrELMJGFQspNzHpGRxsSApPNw8rcqCqzogAqeB5Yuv7YwR4dqBm2mXuNQMTyNFcAUHi",
  "key10": "4HwbBQV1U4xaoUhRzo8tWXo6nkdJkBKGTtow1ST8dneQ3ZgpazY5jc4H6DgXbzSDqs3uPKWoFrtKryMeoicctUrW",
  "key11": "5AzHqKuK3a3n3GrJ9ZDJwwE13kWcqWeb5Amt24S6JVULNvVwGZfS7HJV4M6GpcKDH6XzN587gShTVLs1wX7PXF9g",
  "key12": "2sfBVTvhKwPa5QQ2JwnPNc9cfreqorm7vfP5zi2x596PyoM4HnmUQqjuRdyvuH4dAYVoqj1xSXGA6mj66uwPMwQi",
  "key13": "3E6K4qYAq2i4MahoGDTXoYQrRkqAhiMcSepzSy2d44UmTD3b3jjmmMQwuoB72yGzCaa1Q2ZeoQX67BhF1EC8e6v9",
  "key14": "2tr1LSqC7vpyhP8iNJUohJxsJ3CzoG7HNePD79XkMu55SsXEpMoSUnkGxEmiZywHKHEymbRXsjV1zEdbjjF83ZXx",
  "key15": "4dmuF5QZmC1TwccKyfssmPAaAFkqadQxJfraf1MesutWZ2wENRFTiQfBDtDKQgT3hBPoiG6hmgwX7Bs7g3VqdmUk",
  "key16": "23YQe4AFen8isAm8TxAXtWqDE9wrgrNC7F4eDMnJpnYwwpXAc3e6uUf3AyFToJ5vwWu7ms25afvSSNWj7dueToqu",
  "key17": "5UjisANHavY9azzkChLCtQUv4HBivgekB4ijX1a51hFH5pxAHBBhoeoPd4jB8deLysSzF3s51dCvRwTzYFjZos1D",
  "key18": "5fTmcyLrswqpaZ75bwFTNNMuGtJDuRwGTqV6A44cCNuYfGx6GLhwzJFNmXu44pw1LwmBHocwU7iuCEE9A2epAi7R",
  "key19": "47KKe5FwEsrxm6yakMkJ3yMZA97tiMgkAJF6a52T7Z4PoxJ3TjcM3BZp3odpAUy7ppooNc4Qa1iFDUeS9Q9a1Jje",
  "key20": "ZMvgxxbSmefLD8wzWF1uVgjJ8HfGuDrekEMy3o744EoqJVm4SWCi1hCX7fnYu9YF6qkBD1PXefEtafbTH2ji911",
  "key21": "4x3rVVCMQsRL1h8ehVfKPGYPnxvY4sgNU5MxnZH7nUoj7HHFu2nYPSCxASnYEfwNkNXXXgFGvjRAgHPiHFD7FZr8",
  "key22": "64tuhfspC3t1UfzE1DjRoTcoEji62V1DKqJtnjwFRtpEiUhFvL3wSwLFwNzSCW71WTNPR6cRNrUZUKV2JS8zFFac",
  "key23": "5o19iVB1UrVDAreUPtKu7tbUMqEwMmPxo1qYDHWPjdYx84LCr7UrvEu896AkkSQvFCmjC7yEicQpDUo6c6jKqg7g",
  "key24": "3G12ireGmZLBg8HKAnZqMBs8YrZUhLGVkA2b9KrbwtHQJ9HRxunghwP6wDu82bzVhguePKhcveAnXhRPMefvUbi6",
  "key25": "4ifYYu8FQ7auPCtxE2m4rZGgXHb3BpTqSyHE9FNd3uL1HUGiSufuNtqBuYTogMkCtmFMXN8Php7X25vRKpdam9rs",
  "key26": "4Rxwi9vRHuyJbui8BH4dS1TDQhF3v86WKL2N7wXpU6cHhbz6GvME7WLZ5RybR4V2beDxLWGjbcJGZ4HeEfPX7egA",
  "key27": "5W2xuPCmGkyCawbAMPLk7e589Z5qoe25XoXh5JpDntta2Dbm8pe3MsjCcE5Ze55eNfYPeD5PLYUsAqTTPzdBhvqt",
  "key28": "5XhgpXkJweEXHajL2XJGzWqsg1G69AgayStuCNA6GecdVZP5kMr6twoNhK9tBkq1kWp4tdRSHvdiLgwAXgzUEjSV",
  "key29": "29dWNJWmcCyV26y9e6je75VwMAHbv8ViqyVuQopqQSSum3eycsoVnqhGz5oDee8U3YjDBjXK3NnYCjJ3dSoAAnpB",
  "key30": "67nRZhToGwroZC3ioSjNzBjCciCARLM4S5dcXJGQhayi9vh9EVYFVNNmJBXG8sMQXSGnyMks7FWKv1KUd4EkpKkQ"
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
