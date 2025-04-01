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
    "4tsQefbB3jL9pHtay5Xms8yi8o928C5y4tzURkbTAZjVr2F8WQ31cVThyqsBA3iG8gnn2rhXmvjB3FkANBvjkAnr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cb7mjUzAih9cjFVv7XafrfCAjgThF2hSXoRdYa8Abai9jzm7x4YtzspDXHQXnFzx9htwcMSmoogEoGyHgUiqW4Q",
  "key1": "62S9dz6bbSfAcjJSziqqd9c4tpXz8vpgEnr5kNSgryLvT7QV2nMpZL33Fca8yDrMHBaRhsA6MrffaGR7e5N4JTbB",
  "key2": "2c24LDT85vnfoyRSCuN9WGiWqPVF4fYajdCq9kFeZZimK6EFTX1hqbSUK98VsD9kgYupC5i1C4otjZr1P6sHeDb3",
  "key3": "FSfiYESX6Q44jTiiJeZZ5vtt2tMx3SNUjaavT1SnmrmKS3jWzStJ21Ey7MQFc4SBG47yZfD9DuAHHneCk4wGMrG",
  "key4": "ndRCrT8ts7tUrmiY26S33TqRi7ZkTxDkJJRYjJbeLUuKXgsDhuwmGUcK9VfLiQPiyNF7she7T7FAt4J9HZ42jtp",
  "key5": "2fi7CErS8BKCKCWCugSFDf9ERaP3NsXQAhoczTKt6zhj4aH54u5sHHacSexuFDwryffdRTZNeM5n91gz1mnwLfxz",
  "key6": "2oj2RbAaHHiRM8MdjLjsTjeWeaprJnvWobj6HYVNwVGHWoRU83hM5QH6f5ep46UaWuq9CN9MwS2ty2b3v7trpCso",
  "key7": "2HpnuUvmEz4YJV8Ja8hnX7b9SWae7LAGhKEmwijxim3jx1pHeXBhUtFuYDdGD6jiFuNgyc4fAdqr4cYC9wv9jKGz",
  "key8": "EakF78mNWp68exgUHt5YsxUnQJAaBKz6aRtKDB51JAvq3hfoECbuMJECPLYhJhrCL9rBJT4mqYwLNw7gACUCkVY",
  "key9": "2F4znciRZSNRHLycum3RQVnwBStZp4pYanFmzh3vV7eYgPGP8tL1A8tHuA3cnnszhxNq51VarnSs5xd9WGt9S4AJ",
  "key10": "2RJMQpZ7UpMPR6KhxuPc4Q6CZVFbH4zWChSWK3V5dvcrsRe1aCEENTJ5baVEFdb7Vfxf727NYspbi9xmjDCzdHi8",
  "key11": "4D84bqkZDPqq7rYkVBxWWftzbjm2ykN2U1DtH1e5NHHsrWNZq8stexaDQ5wNQHyNjKBLaA4PChvvU2LwT395tJ2d",
  "key12": "5TfNjaciB49SAUuDfqnbYpaLYYHdbVEVAxv4vBXE9rQVPkvdVCgyTDxfrfhxaktpWjsrbmdwYaypKCBmgGw4VL4S",
  "key13": "4JfCDzZJAegmF5CzsXKpHxJk2uMHdLmj41hktCmDi3kfKUZPfqK228PbsbMWD6rH1XZjCjvnEd5HdW2TQpUAdgVN",
  "key14": "3jJ6u5AcZKje8nUhjjAaSjGPf5kd6yxqro6JWCYr2WBR9pPirwSMmP12Y3R6ng8yJsGJa2h1t3zDBcZTRBA6Zd4D",
  "key15": "5aSfFjJ7hfqfqVCrnDw6SbrTvdfSUgWCqqxVwDMwhq1VrzemTRKz4HMcFCc5gHHvzmSHSMgGgXdhRszGdkCHH3av",
  "key16": "n9gHrZTHEpxfwpAN5Uv4cfEUZfKz8WzniPYTfq8vRQ6PCTgXwaQMztC1re6KheCx2PfyzgMYcmRZajxgk9b2sUB",
  "key17": "25Lsru6iLH4bg2JQ17q6M2wvNrZU3gwK3dGFQxLdaSnzprLjh8icWb3juPDXE4N1yE7YbfxxAEVhevxqgyHWSwM4",
  "key18": "2weMkZyWYMPtzZSMq6W8CqRFVroGC6VT6PeVmTNsd3KjdyDvLU2WGStNCZWWv39WH1XEVP3334MNVmUok1RnZhF7",
  "key19": "3UaD1tCAGNDJW22tHV3wuu14S7vefVmvVX2XWX4BGrQAdmnbBmYegqePFkq7BAeX8B3Lkieh6m1g1uN9PrrhkN29",
  "key20": "4ovmHYd8iqWLUBa1xfcHPmWRKcXssymgpbGBa9qoSd7ZG6JB4m9FfMVtaw7jv9R6vxaijYcZZsGFh6ZZoGxfuuhA",
  "key21": "5rfqmrnzeLoBV4D7wt9SYMBwMa6NDzdJM19Sw78eN25ir3QViUehvGKEoAqnzCYkTMxTcVnehozMekvGZGnA3eBM",
  "key22": "45s1oeBDgshde8TGJ5fKjVRAJBJZJrNgpwwkMQ3uSaeZvjuqTPyZ9RVrSxivxkJ4Pg8aWNdSDDZTEN9mrzQmVD1s",
  "key23": "5HuXSQMsvB4bm6pcmQ3XSWfMmLhfTgpkahYMjVTpkgw8YwwDDzQjnjvNjuTVCyq1WemaPDLnB2t5UXk3DgCy2Kj6",
  "key24": "2GMFq8MgSzosTTkYQdyad3PrSDn1dTqnaEiH2btRkSmjBPH8xi8Wj2G9WyoorG7fwEmYpsHZ9cEP48wYuRH4sQkJ",
  "key25": "3zGTyP9XnGz8n961aeJJ5mjX56WwYvsc1SUXz2ESoVT2LsP6dhoXcmuBQqtn5cs1tU21nfzaKEzpGLLhiiWRi3sS",
  "key26": "2GWuarvk5tHkiiA3QGFbEb29VyRMjbDcFTfm8fwJvSBQaBGEF1kt1SpN2MQxGJwJcymUrapyxibgWmFYcsC5tN4U"
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
