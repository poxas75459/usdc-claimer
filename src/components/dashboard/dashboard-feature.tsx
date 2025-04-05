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
    "eRUnFpVpFpUrVoiN58NgC3Jchbgy4oEQC7mq8TbTSD2EzjZG4BnNxoubxiwSWjSdqBEze6SqkLzkUnnU16Z9KSK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wU3mXCs6FgC647ccLANKuu6veSNAd3kTGkJ7i1jMdbPtYi2jHpiBFdBHZiBc1p2mm8kbiDmxRjkFN8cDo7pBwgQ",
  "key1": "5AW1oYQQrMKAQdVHZKEZtFjr2dhAedScAcQFcezonV4GVuJPrRZTKX2mSanwNqyAzBSjuJMseBrpGwcpmFwoAL7Y",
  "key2": "3w83smWnSHKg4mzZhd8NK1dPKepZvVBTuAHzjFgumzF211hrAkYw8AB42ECxswfkzqmoptJ9azZj4bw3ZmT78XUN",
  "key3": "53PJtT34V5PAvCCcEniis2aFBDZUT2pSjEmC8fdipMnGZbDoL7RMAt7nk3FkaYDqLnLZ6BtzDRpZK1hUrCvC5ZSN",
  "key4": "3D1rHJoNQRNEMEAvoU12cFxi3rQ9ARKwsN2vePwLqLfkGorFAKfWCu5aHQ8Zpedet5jGCPG6AmE8xU5Ej2z6FB76",
  "key5": "3mrQD3JdBE74DFC3yVNhpzRQd8xzfAiRMKPy1F8SUkScqk6SA3CU2y3szh5N46CxJeKmpcfhiquEmzPkVuMbCyh1",
  "key6": "4JVEbZhPmSruz7Grg4Z2SjcTERA45jo5BtF7m5FoVrSzqduvJ7MBLE4vdYfMnU6hj96WAfsWt3hokbWmbR13w1xh",
  "key7": "3y5uHtEC8Q9X4AiLZexdZSQK2ezewXAzeVvNPo52M8ms6EsGhEPVY218Y3YXhr9g7HbZXQQqQg2XXtrQoCHr3tMe",
  "key8": "3TCugsooB3XgjkUn3dGDQEv9V4wRk23d7Npyimwexew6fySWCaMvHppM1qPqsigbtXxrswKAGpFJD3TozrDGvcMr",
  "key9": "tudGJ6SPbfHeNxmayT5YjifDWF4zG2jVaraEF3fZmAaL7KDmorew1miUrVYu6oRnrmQKj2kQCU2dvRzjy8cwCiv",
  "key10": "Em7hDf2M7Jwj4F8KzY3rSf4WNKYV1MM5NyPKkcXjeijMi6L3jfL4B1sjoeMQvDZsFAeNQkPRav5JAQQ3yqYCWAr",
  "key11": "4YjzJQfqUTsC3LAwHebvUzGtLnMJaTeV29BH6eMfJbCWyz7CBU4HaZcBsM2dYggGhwvdET54MqGajqSFqPemKWpS",
  "key12": "4wKMvij2rGqwU7dE5GtWauy6sw88pLKGx4JmFYfbtVEX25D1B6G33pAazjoy1kW7on9WrQHx1bfwrSf5hAc69Med",
  "key13": "9ko2ZVUKFTR1nQ2yZMbWdxCSSFdFzp8biPKbY3yHhN7bjTn5hhmAWGbfqPRTaktkD7jJMoW9VCRH1Zqrr1a8qbx",
  "key14": "3qYNstwNnQvoq3itDA5WgZWtEcWS9n1dAqNRLxxdgxaeMqw9YXkmTSmrqrmweEFhGDJfqbKtVUxtdp7m19U7dW4a",
  "key15": "3TDHUgqyduWEeci8qBf5ZDjVFm8LMU6i4xZR9rhhY3TUcjC8ofggTNk9ntnhEVPhXH8sXJD3Rq5PtEzAknYy7jHn",
  "key16": "29Eib1ia56KsewCxejJ8Uof9LugRMgSPGvNkystDdL9PVuLsTKHKMx28vMMb74CPyKqmmmZA3ZMewiVCPWVpxcvd",
  "key17": "Jqa1i49KAqd1bVYH9oVir3MEUoJRdWAZoXcuTxA2UoEnSfpUkRWaehZFj5VeaQcTfUAVQEHREM98SqCroeJeAiV",
  "key18": "PCGNtTp9NeR2KU6bYHxYHbpbaUkiAabXFEeDXuQkimCpTDruQMroo3PRfn9333j1GLcuJPRkiaumn6GQ7JXzpWs",
  "key19": "5REMKXzgaAwQRhvwi1bok1NFQ44waqTppmGdsRbbSuQmuhbthMKLhDXBcTUZtKqpH6htBN1UJG6UUau19XFDdHev",
  "key20": "6CidvGLjgSpA1WazRCUV67Ny8iPFYsJvdfuwXjH4hCgwYZkZgsLro8xM8cfamVEuZKYY6gThinqNzW9fSK9brCE",
  "key21": "4LXpQfztxXcpm9HfopUjRxqVp8w7Qu9nqZSbjYkyxj3JjkRFRDcrxrBuxP3mafHRBMiibzxiua2iwjqGahP1wuiv",
  "key22": "4DiRzEa8QABrpFL2UjRyMESsJ8tx8gpX44wBVKkDTT1MHSPb2M4Jq2hS8TyGJq48FnTcEmeJpAYDJ7oT7vRwVJ2U",
  "key23": "3eRMkj6usWABMoqS53jAVS7FLobxdodwHgM4WbXoCjfLFtisNjFw5rpfj4MpgDXoimkmCLC1qYGx5Jy8ebdLq55s",
  "key24": "2rLZFnKPyVdhbZ2129srTdMSoZrJRJTrd1QYRnzP9CsrafhYGmkTBXXJr3dRMEEF3HH341ejHhtoB8KbCoZubJhX",
  "key25": "4yafecQKFronM8RvMqqV31cEWukAfDcfkuBLuDjV6Qp3LnD9neaPDcKNfdkB4XLgD1zqKLpcLTywXiLeaDmNZzT8",
  "key26": "5d6yE6X2fH89GYt2KDJDiDC93iCSF1Ub3vgJAyxSUzdpn7TxWQrhMgUh7wqwLah2wharruuj2WPs6qGjNXSjj977",
  "key27": "hYJucvQ8o7syX35Pw5AbhaZgTy1aiVx2rh4ZUuZkJhVshcRFxC3h6cGftd3K4m6w6e3fDqmywYBBnj9G6a9rYf3"
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
