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
    "5KhFQ6dA2vEWiW1XBhM8dHq7iTtDh94bska6C7QhaYTmtnzeh1F7aALp9tyV66gr2WbK2EhrrPx7RsRA8GePRQDF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MXz4oNygrdv2ozxDAyn17pu7AHqjTK6roEjEUBCt2VXrK89uMqVWb21GejP9uPMMJjyg3kGd2UXqnnza7LA5Ddp",
  "key1": "nwd1bbMmZ8k2TrWrXVH8Z7FLKt2wP6o4371QKJiwKfCNzDZS2zMHX7B2peWsiZCwiF2M2aJhSfcYoSWCGrRYqQL",
  "key2": "4mn7s8MsGKygyizq2g6p4YXJiqTYEQazUbKtLMrZr4pemCqrUNpQwUCQadWH7mSGae8WEEMnAJGuGxt7Lqo8nQAc",
  "key3": "2rfEw6Qj7FPLaMWzmTupStFmq8KMEHbzvzesvm3PPAcmn74TgqkUkuwmdXHLCwEnTvAoWheAQhTA4hFJqQTGrNqV",
  "key4": "BWawq8oqwPzdGh8mfQM9p3uc3birnjsStUBvpu1K8eA8C2ir3SsxqsokNxue5MHe1gVNzpFisJtEM7j4RN5iTZG",
  "key5": "38ng42fLae7HyfSTxkTNeX1kbgVExxwkKtMu4Td9mGS22YRwqcAbTZtA9xQ3AdZjXizfddAnqhYn5LgGi5x6x1LX",
  "key6": "65cFE6VgR6FkpM5msik4Roh5kGr7vmse7dSTrrEmq57vaTtrCKKzohgW9pJjbLc9iPSaqn6fyUuQjZ26CzRCmWNW",
  "key7": "QZiYrHmip8yWjJeZpDw169zfC29RFnMPxQzWBFt3mLJdr5XgUMPMLsMge1TTA69vLNqAn5gmDCDBg8KBaFkTV7r",
  "key8": "AUygFEK9gpenTqD85tV2Lmvt1BHNUTvJA73EdjZt4DfmTQQ14tLVsrk36B5zAxtSt8fgCL6Nt66v7r6EPpHdLfL",
  "key9": "4XbJ2WyMm8dSqnuyVGbr88e4qTpaUHGd8ZLJT6uBLYxo9G6Fzit5bDd6joEWmasDA849skmb88Fs8LWCadJKYBHk",
  "key10": "3M4k1eJcCGwNcEaDgLse7mFmwEGxSb5Wmn8uDVSGVZfnbs4CmMewFw4H992mxkPRkw6au6CDkm9n8usy3y27Ui99",
  "key11": "m76fi4vju6BDiNKA3EbLQuYBsSVNAx1Sd5oMnKm9WcDHJ3Sv39t8SWJr788nnzAGidTp61K6hUe1e7YKswwhs1n",
  "key12": "3UcJfQJATCfTsjRSpx56hS55pZ4mBnH9VrVxZ3L5JqSpxhnYM8paCqpHho9tr3Eb238FpVjHXoi3cCboev4HLSBA",
  "key13": "3jeWzU8JnfDmj5wwgGKyuz4ptnxVETib8RDepgtTHnHPxEUr2a2amKQ42maMFkBy8ACCECwfJawRMnj9RrvdPE5S",
  "key14": "3VMn3gyMVdDF7quHznGc1jes3pupExf1rnmGfruRHXiufEg7u48d7ZjTE9xMdN65bAGxR2fztXNG9gyqtwXEYTww",
  "key15": "4tANUPRoQXnJ7r3nrscnsr54Qp5vMPCQmFhCnZrYckWNi3c2PjsyKsWxbM6VSx6356hz3jdmNhZZuGS16ab7ipTg",
  "key16": "3nwd394eqrgB8vxfXHk34eQC5VChXEoYz1Mgh7EPqgGrW5i2aMbRE5hQPkBY9qeyvn1mkyYCjGcLwY4ho6Z1hL1e",
  "key17": "uqFq1P9kqucAD5w8dcg8fT327y96vgQpV7ERwu5qBaZHh4N8uLvp7HP24KL1Y7xyngM7nxNtfWNmNyS1VJ8fBix",
  "key18": "mq89uu9jEMx72nQVXyLKvPMFGBHnL8PUXQrbHxep2E65sHLsDL5hF6zpLzC2tNJGPzB2WHK66nfZH2hrb3JPFET",
  "key19": "3sb2mLSBEJ6tbJy1ZB5iZoMg5t6Gg43Muojys7WBWn8D6mYJPJircmJEEjNf7WstRcXKjWjnxsXsPXGpKnVDymbv",
  "key20": "2hBhti6tCXhKhkfno3HQeuPePqXbkBGVkhbAE5eViTcZmUZAVR2TCEjzxJv8UTTQGTEMFujxnaxjusyheVCUn6no",
  "key21": "LHjU9pd1nTNJfXkpWVNLWAdKR97crR4zG3wUYZqivsN2s1AqrFjq8Qp6uTZteoRfkXCACdXrB6qsPDFUTkzoXi6",
  "key22": "5jLYFe4pgpueSKMVXSV9oCmKR5NRtKqN8rMEsshZXEVaggz15HKi8A7GRT3CLZfnBEFBjZJNTXe4TZua8h6Yhvjt",
  "key23": "3N2swrynmnaiYvnMN1NPkg2n5hLvPgdj3fg7S2yPYzrmztyHTGxaVjD5csKjUcxNmFFeTfK9XVyFhoQGuMQmPSxH",
  "key24": "47NsmBHurxbw3hT9HuSQkdWdiE4DwX6htbH72SQdPdTH2XNifLUGwtNzBwJLLKtvUY4gDiCrGGRqUhHWqzNC92iy",
  "key25": "3p8Eerb9fWTiKNZ85mpw4LZS33tSR2fp6kuUMCkLjwXu4jF4aLHxx2oNZFcncLsztwVgFRaAjX1mnFK6gqQ4RY98"
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
