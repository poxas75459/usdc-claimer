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
    "5XShHxpkUczbFBD6w1MAezXsyj14jHnXf8R3LfAQN5PZwEaJGuR2yNhYenrL99DsqZm7JdCBt6R4GHLwSLvPckmt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33Q7h4Sn3pniNxFfHMuEaisCTi6tXUjDjSg3uTbExYkWgx2FJm5Uc5kR1oeevUhQT4HZsNW4iX8nxPHSqTsPKjwX",
  "key1": "5sPmYWPZYJxRFg6T1YPYBALDHiszd2K8pxrLGgeR9hs4mBBS2mHLkZXCJyhoERvTHqQEWQHtRunnm6QKrEv6HdBi",
  "key2": "4K7SXBQLR7Ub9hUrfPvnkMuxyW3izdB63buA8asJVJyDX5FUUbivDvQiJQRQJT8sW8zBngFCJN4ffGU2RbEadECB",
  "key3": "4ewR59J79KFEijPFTpXVdQGsoP7C1AeEAkFgQEsiCk56byYzgztu6zDxKReHxwpHRi4vdjCjn2mLheazyt4enVTB",
  "key4": "4qHVm5ZdAjCzmjyVqdvZf762fMAbgYHFPDNH9o9VHX7aqWT3iRu2WvyFZfqZzT1btkSPv71ye1nGQwH6wZEfGmtK",
  "key5": "2AsgYFf8iC76wwjfhJcEBsyDQrmCnb83gFnabuNqRg33SqW9VhaRZ2a9URzTWuv5kvyJ6fVRBxGosXFZHdsAmNfR",
  "key6": "3sfx8zbV1VbVuEmzxtNHzartxP9ioDpqbcFb1kb8ZpntW5FerroaX1og8TNPa7PNMoakeino45Pdt88xKHRFrQat",
  "key7": "2ksepcndVW2r913zqMf9mW4A9TG49y4AZTpVSnzQba41sTMQDrhZRdNcNmeS1jF1MRowvPZU99PeKNFYjBWySaLH",
  "key8": "Udnc38NzkaKT9ihFDesfJnk3zxJR85jKMf41RAzCJ3NSBcdKTDj4FzqzPY1fznGvxFN7LSJ83wqbjwz1vfsPUDi",
  "key9": "65hNQEKkVLAgEAjsLmqLuoDzFrHa51kfJJzuU33mWAAnDJCsibqzRjEH1qmQsMz7W1Z9yuqBzrUqNCXTjBzQsH8E",
  "key10": "2VyRXnQ4rAB97hm8wSL7WUMnKLS7zVWFPBt9ZbA8CRLmM2xCGCLVeEeviBYd7iP2FXhZVWLCdL99p6iPZdnAZ68M",
  "key11": "5Jz4NDqAcrxkvxLN3rEQRmsg8WEQwfwjyq5gaM8vkt4RorsS1459iBJqQYhrLTP4peVzGA1VcesL9iPrLsGA6uTF",
  "key12": "3HPA47jfnznfRcenHvRB4ZnHRPWzX9SAWnrkLG3DhPmbY1DXnSSUSRLnyCKwoR395do1LwhvPhoLueXKr8qKAGJe",
  "key13": "23jbKC4fNBtZyFNk9qGhiRNqKPjKKrLbhfRG3kxzqArvDNnrjwGNCfSknigw5gJDXEVCfG13Az1FM2AMKEDpVV71",
  "key14": "4CDqSYeGC962hWwkijLDi8LWnikrQWuZqtpoasjC3P3F7DRhDu6ek7MUkyhUuv6Nke1QRwqF2SbAML8SGvcTM8FX",
  "key15": "YfvAu6xtFadPWAzEg8eqWiqH8YX1ZhKVjnZmwnDKPid3yyk4yjg1wbLXPDf3APUmEM9wZ8cSu9LMhKLWGZzKUgB",
  "key16": "4sU5hrhtVmD9EsjEjidBVYa5hiSo8xHyUMqWjuC6mEhdBktsrHzyoRFSstnyGSJJjMN3JY6uGvB3K5jmy6mm65K1",
  "key17": "4CfFjnNPSrV1vTJVDxDSr89h3JWF7vFPk7bxM5wCsmc345SNYRpbiQqZ9AH9td6F8jye1iDF6xFNGoENEdvnWUru",
  "key18": "24f2Z2LWJoddJidvB7Ld46WwowpKNqPfTTMACWTbgJQraYs5EVi2J61vSf7x3ebE8ocQoip2QgZzp7qqtdEQiymA",
  "key19": "3VSzzAvdhLbsYjw1phRfWgXWYQfNN1Wiuizv3i9No2x4mvuRiyvQ19RAhQUGhMQMcwgFJGbxug5wqoW5cxzBSShY",
  "key20": "5umfErF5NUUEt1ifZWarvAqeWEaLv7gupXtzpFed9xZmVxacMmrBHvGtoZhsDUJfiqiS39tPUftfjYDgax4c9Gan",
  "key21": "2ViyDrC9T7qbEZFLJpan5VMWhBRWCumnFb4bikNnGmjNo4568a2L7FrC8g7YeiNZkoUQyqsfYmkCVcqQdSnQ8YaQ",
  "key22": "NHUucKCm79mNbtK2emjjyssWQSJ4fKT4UELFKZ29QbTkCZ5RESB9BuxhpwYh6FBeZcRkw2VQL4QVr1JXzBCvi8E",
  "key23": "2raQUcbtCiEzQw8J8YWs9BVjng2KZotkYi7cfjqLEQQEyEvw5V6v3TaYGU3ynmWEpmzJtJ7BrLe1gWCcDPBmN4zz",
  "key24": "9B6K8K7W25Ren3r4L8xLLiehRnxZqSq4pMJy2ptnrN8qNYEE3X4H2E1XrawhNppNaU7TVyDWLTu7o2FHoXLNZkC",
  "key25": "2hRcn5tCUez4bRpstuqK7F8FunaJoukTPQWkVc8V8aZoU7oZVVyKZ4tiVoUysdrHnDyYZWfwFyYpPpKFvxbf6diA"
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
