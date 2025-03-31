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
    "2jgJVD5SD17MeUbrqnzgLSZYTUfb6VzCPH3UVhbPkFWNqfzEAksUN5X6ifAxggMvzuJCGBzFA7vVwTdyZ8nCcJSm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HwB4wTDRDnaATU1LDf8795ELHzba5HVjs2F4Sjnv8zexd6RaV9qGTKACcUegtdq7bXCsMDLPEJuPUHT7Lq4CNyT",
  "key1": "3h3vrnKPyUg5u4fGGNccAtJSm31CWPG4q9FMEBxJG1W8ZPTDp2zYdYQUkggJ7iMyqQs5tbUE2eWD5329P79QSDAZ",
  "key2": "3ro9ff4AuNb4CBYGXd7RMtMoc8RPbqAprnUbL8KgUyUz8S5a6UbFCQZZfiLDo9PTDj7NiYkwme1fTXGE3Ey5SgFo",
  "key3": "4RqnyQHpHByr8bL9JF795Coi9BfLDMViXeiHSmGcbaG2318V42CfFWZXbFT2zG9ZCmXCuoxvsVwRorh3Qm8REdGj",
  "key4": "2XKZ39c6PLuZg1mumd6McCSbhG3c1iQEBb1akM9wASbbfHK9db1uQ2MGe75LwnLLP8jZd3wVq7cP2pG4kFQW7Pc6",
  "key5": "4oj3sGFrr1q5yaYhVtFVtqjDUxLiL3dDjz9eVQ7cYNk5j8SBdRjSBVFJzt133fMYZvFsTjx3RxvdPfGEwWHFGHa4",
  "key6": "4jKorYXhHnXRifJyRqvpadtQBpy12f5XfhU7Xs463bMT6uYBdvKbgK7eABRNqGJ1kNV1rMcYCkbrXL98avv7Uzbj",
  "key7": "gGuCea6KabC7kYcDdzgBymG9gzJCkMAackvV42rRwTy2A3jzYvj67BgXqzyq8Ua3BrkRjeB4xuSXDaA1mYqQFRX",
  "key8": "54Q7EwA25dj7S1izN3sXDzdF3LmW4s5TGRqJUvAVBapv8EprsGrK9zeAUqpFGQLQWLgr6iqqhRaZbVkuLXYbkKYb",
  "key9": "3Rm1YXbZn42MufHZuBcKC2zMKoqdPNzYmA2GDe8hNDGoqCiqZuaWmCBroxpmdbZnQcgzDLFpFji333FbHmuhstU5",
  "key10": "3gWevy2r6jV3T4uP2Qi91tR68kY7XNkafZTuxa2Hm9pXh25x5WDfnN6ZRVjzapy3diu3TR3iXQ7JSjG8R8rkWA1w",
  "key11": "3TJak6gzPpfH1TXoExS9pjFMo3moXvwpxZD57uwQaqo2N6jmUGUbPtrSNYgcq4C3FNuqKZM4ZtEzJHEFJgNSunTY",
  "key12": "4xb49haw35DCSqPJfj2tAGbJHmY254o8G3Jwa6qG5XBHAvdKC8Vn7V234t6CruoTFyMJ6coJ2JpQmELBswHvaQKm",
  "key13": "3ZRtV3zQoWE4XKYsdKgQjpQrWBYHPKFPqaKvma9bCrcc58marntrxbWvMoqJxFidXVrmfTJpVai1uCPyJx8fWWP4",
  "key14": "3m6xgaFmddxK3DspKv8WVqYJ1zAqVQABFj3z1UEFMYi6U8iNt3ebUpdfeo2HnM5qzgiEXoEyqpnWd42WLXYsh47c",
  "key15": "5nX1GNnwJsNjc933q3SBWHjiJvxY7bAMrhXxH9u5ayf7Ux3TrTMMuBqwwtMtZgPgwHx2m3Y11V4F9QbAhYnXDKrq",
  "key16": "6688kQD24BojrECUhCpDB7ACuL7BiCf9XrsNG2QTHLaog6cWQv6cWepBcjfJapEREjvVukU59PWJsjx753xoZDk2",
  "key17": "5yCTK2ibLaFvV7h41rAUYUnYXtTz2HNuCc6MVw9XudgmVVeGUc1Bfsd4JxiSUdfqsxCSMagMRpW618wpKdWkZTuw",
  "key18": "2QEFoYNeVRtzvgmBXMEuorJZ5RGDWk2bd2ti3B58erYxrhkHPfCc7VWGdhWWWLDYAB8vCUc81ipadqaJG3ZQXuoq",
  "key19": "2ih3zgMiW2jqAVTBwnT25iCV7zLYL1nusqRAschE7e8ovXTvY9pZ6eshKeWCdevxQsXu3fMpfkvyoe768YBV7z9i",
  "key20": "4yDgGif9kvmXqV3oEFcTjqNYwWCqTbxaAxMM7X37mqXFit7qdcCdzjRPYFWCpboCD38EWcDWqFUVRGxqHGNRPZUK",
  "key21": "4kRJGZWv6SAJxXh4EBRJvzz3U1jr52LaT4SvVxGsmZVQnwyxE8qRP5Sg2Bz41eu1MLhCm3KsHWep3s6X5HxicFqd",
  "key22": "64AVMMeYoCcXH5eum5XEihCXr5PAvT2GHiSYb22wpoL65G5WyGsRedaYhrZa2eeq1k4Gfgp2ZWJv7CRtBeoQehmB",
  "key23": "3cxJjZUAox96Cbrq53ocsiLuxVJKnkMBZWSZGG1fu57aTP6ycvG1h5xCc71tTxuefaQa4ocBXpmkNcyJshbZC6WL",
  "key24": "2vHtT9oMApXwyrTcpmW8iSMooZd28hJtP9wndwJkGgyWoR6tFpNHbYXVLKUpQL3fD1uDAgPcT4jkKeVc3QWG6bmN"
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
