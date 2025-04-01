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
    "4xdSmqNcSXPaCw5vPjx2h5vgf3EsAVYQbdAHNTWmKG7zE8xWq1BMteeF25uG7AGuiDuSrv6DPTnMgHjngLN1yUKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42tENqWsHniHAFjALs257idaaAyhKWrsjmXjwQcubVU5hRSaMabBNVbxLHUHBYbXWvcopSiq3MLx7dvy2fSr94ej",
  "key1": "5pS8PMbKN5jWFUZVyR3bhWdfRQTWVs9Fv2nfGQUhRX6Qkbb8ShoeFbLfMitMDtAMuYxLHwN9VzQ2pR7DfYWTbRZH",
  "key2": "5sHetyzwg2KHfuDLBk91pxc6eA14MyU15RAMmBNwrUQ61P8cJsTxWMxd5eXW7jz4rbLiEFyn7yTaBXq6UFsFBpvT",
  "key3": "5yd31d8AWdA2d6bBab7b9gQ3JXWErfa7EDgjNLMfiSaqjg5ZV7yZSL7RscDQKESEJWaY8BgaEYu7siqvDBtBaGne",
  "key4": "5hsPuodqYoppbaWLujioi1fAvQZYdvQKa2rJjmD21NBRrsyDj6LhXdftFybDW8z7oJe5CKeaqqJSG8MaSm4pyz93",
  "key5": "51PvMjywxqtnxn2yZibKBQLcawNKqw4mefGwz4FcGj7AHcUFWnuUy8Q1MdtdSaRiJmw2FbwhRe72BzYrDNHDoC2e",
  "key6": "BcPCPfpHjoGPxGmA7X32nfuiPn4Y932559pRR1n9MN3nafxie7yne8NAUTTjJfdYZ1Qud7csDyffeS9Zx6EgWFh",
  "key7": "29y61pNaNz7mZsWNEiNogTXtLrjeZiXbay5SpZYYYf66LABK8XRZPCxR4KZyCd9HLt674oycjmEy9XW6ofpQd4AB",
  "key8": "Rf18Y26fBodaH4dPuazyukpyoi42wJ7EmFCP4coAznZbArEGXej3jjmZtMCZhBjUbGgh1BqhFoZeoRzmDFAnqhe",
  "key9": "5EuGedwDKM2kibvdCH3wJfDhSA4SqhWBei9yNH359wy6t7M9Lz35fNwXg5k2wXvQfZjcjRjAD6ggSKodcek7rN2W",
  "key10": "UnapBUghKdChBGuEBkDX9XQGh6nMH5SJrmrDe3S1nLVAFvxbaD68TXzmFzqm9vEVZ6EouLqxnpzWd99redbvHkC",
  "key11": "2mSMtrMRXwsFhR7DSbcn1v2aJkpuxbmut3VWiHQtqQzdcjcasrwC7GgisehdcdsLmiBnWW3fm4eaTwb1vKUkkweE",
  "key12": "3WZcVYv2LQ62dEhiEzLn7jSVw8LuffQUw5sPf5atXs7gH4QLD6vMXH3jrtawEEp7WdzoWK1nKwX9SyiMif2mY41p",
  "key13": "4bMvXYUa3wEzAeHeZ3XhF5EE8GjMNBXgDUr8nZCWPLNwfjVsbYQBMtyiDi313mPKmV9yLGqkidfzV5sdE1C6yeBi",
  "key14": "2rvqiKgkrww44Qm6BKHQCLHtRj5V2N449rsciRgTSN3Ao86dEcAnWfFNrVXE6umM9GUU9Ci7sNRh8MH7HnCYwpr1",
  "key15": "5Qere1jXUPZxkVfxHA7AQcF3rKToJG5CEEwtZ6VzvR14zx8UGmnB6S4Rxp3qAYbwg5H4UYrCnGZvHA29hWjWQHDD",
  "key16": "qc9GifiKm1c3Tw5hbF5L6XbkXkGaKzDuYmg78szNLMUGctG1T7SNQNaNcHDjWePSZ3NrJCFtr6pEZJ9EyDAgan9",
  "key17": "5oesHkpgvnxKgsjmcujJyB3wXr7fvwMyDT8w9FivmtszQB7zNxyGoHbBhYiSMg1uSXy4QwTkkxZuB57CPQr4fi7g",
  "key18": "btpVHDdNAKQv7xZR9gcBMDgsaQ61M4k5zeYeKeMtSxTMFkQWHAzK5onRE1yx7WJACAGVV9nFiAvdhg3gWWfje55",
  "key19": "4MsxhXigj9QiFwFmmpLx8Q5ThD77Pe8eNHv63FVXGofgTqft92znwSRqBJRRXBMzZTpWYr56odccjw8DWBeXXPBF",
  "key20": "4fEo6AuLdedyQ6NbJdcF9XarBEYzE7d3CwM72qnFsw5kj8D7K137BMJC35ZDaycjgTNB8nf5GKT3BrMxGCA2HcjH",
  "key21": "2mPqnbWMQkTYZRN56F29T8Th3ZZT7CuxhmVrMuBYb7U5m6yNLJbT1CtdP5gvPwKqrB6NcuWguJjGJDLiR3VF9mrm",
  "key22": "2ddEzB2sTkK6D8ebCLLU2LMwWGDHrf6uc1w6cACEBtka2hskHn5r26hAmtdAFz7JmKcgqdZQ9QVcX593cdoxEJN7",
  "key23": "HkR7K7nTcMAaUPWC57zbZ86QpgVJAngtC9YkWUYGqQiW1YhtwM6tpXLUo1dTqdThDfFzVgJ19Sx6LeZVzwGWQKd",
  "key24": "5HBDenDMCJf7PFHkS1t2ciPcswujLHA8hA5fXFqfUyDkRMYvg22dLb7npdycPeVTPwdS7WMiYPb3yRPQq2UFxeyL"
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
