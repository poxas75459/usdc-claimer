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
    "5Rv8PRYq9ELrZNwbK1FAMmV23992dDQW1K5tU7qssKCPdWRqXUvVTykw7R9yZXyWosRSjSuRxwXMhKu2HX8PaQm3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m4HDamHfPiNVPXjttePh7XZgHaXcC2zM5oHApEmzMbkLJzTXZPS8z4KRQyzVWT9f5rw2Eezqk116mWPCsy5z3QU",
  "key1": "5oxJyMaKDyPc8UY5KrFMBAorxPVKYkbKF4CtWKER8iJJq2qDUQdavJzQS8AynLZSM1LrLY2JsQXu5b9DuoiZcXN1",
  "key2": "4fKMvohJtixAoV7c9pdkuJaqeaGqKoTTMNTRbqfKSmcBiEKjF7jK1avyWgeLXdhCPHaJRHC3dKdJBXSYCrzBQZaL",
  "key3": "4GY62auV9fwDZPN7QHnpgZiWLjUyFaGP4Pc6xx3fH1A4Y7Hf5Q5FZc2kkbdXm3RydEpNn7cXQsVD7kYNjxKRTL2S",
  "key4": "5EyMyBEKYfMyF6oH7DpkCknoKF266rguJjdEz1K9XhP3KZryLmXYDg3gNoX81313B5YohJfC3qDoWpzi2CbXoTkj",
  "key5": "53DepdyXbKnNywq7Q4usyjkpV7WjyfDocjbxcZEhh46NNJ7UG6MaBBH64FKqu571UJ9mgrH4jRHMtzEnsTSfAiHp",
  "key6": "UJ5x6W9CUzwJr8ETTXfDqfTka9dRiCjECP21rkjYxFC9u96rztMfppbLPTdUuzH2JZgk8ZdN71CrC5EKjk6Uff2",
  "key7": "5YK9yzKGdeTuFavUCv9vZKdnnd3XKizLFD2NnrFFMG7nrftprhveXLATwfPkBrPyoGHX9zcFW7Rcdmw1pthkii9C",
  "key8": "65QA6zR4PkwTM8bnZT7MMQgeJ4a6do5zuhEQsk8ztVzcTBjzp85rAw6M9xmnuTL55H3hrdHMLKXqSmJKETDKPh8r",
  "key9": "4KN3Z5Ykf8gsRmbBLQV6L4sduyqYV5RZzQMWRq3nCA3NQ4CXw46bWiTa8YfacPhGaqukhcdGdSBQiDhnizt9dkNL",
  "key10": "67rWbdqWHGdsHaLMdNBJxrNN9aBcXG6GNHksF2mCZzrWvvxTeFFo3KwqsXLpxifhn9q4VEt8JKTZWuv3zDg1hzBo",
  "key11": "3XxPUCGigPpBeaxJ3U11KojPrW15S9s3JtyuC7jKTX5Acg7YzjGqprdU3GKwEe5xMF1pRMgDXLg5uR1fNicTSGrH",
  "key12": "3pZG75J4NNYrqBCRYaDrrqcXnyf2zD5Kdewc55Z6Y9FymoyV9e6X6D6HCLLjRxTTXjpGDN7B1hNAuzmgzy61Jeon",
  "key13": "4EqMEozPQLK9EPu49ks3RrPa8ue5YDrMS13Y6ZGisez89dequep3weDaLjyG8tHfzmu9V8RChNLdQ2JYEajJV6rz",
  "key14": "s4vnFvJMJ8dWrNAQc64eW9dDN4itex2Te94sR6oTSM5RotkFZzUezWKVeowLYoBAFuZ8N2myZPpxwusjaPYWuy9",
  "key15": "HnrtX7hVgLbmu8m3bU5FtimjxUCGCFRb3UXbqRyKfXs9KQXBkjwATH4LFzddqbuJYWwDY5gQfqhRnaxpvFJCm84",
  "key16": "vHrSN4eiUQBTVWRkSUo4ggCGDcsibz7rwgL3McmP9pikDRT97kHpbLxh5oK3zFmqQfaL4JrVGAuvQYhAqqv2JDX",
  "key17": "5hmpTgdFRpzpSJA5G1GdpQ7ghhXj8yydYdg24eAibiQckHuXDnNNWySuHozYgeziTXmkrmaQy1ujDtyLwJ1yMVpR",
  "key18": "39DXrapYjzQD5promCbC12uJkWJ4u8WspWYkSBF2RjQtyhnqzZMParnku9NeTLDf7fLBormFqri8m1azkAYxFYts",
  "key19": "3XQb9RiYDVJ4dEwut46dDq9oy8u6FBepvM4JbKVr5r2JYmnmQL7mkn48dirBWB1TPz9gvMQ6pUoawAogpAwRhbMF",
  "key20": "MHE72cwUcQYByDuPzcJaRLj3sysycywmCXR3wdxNDQvkZATH2BDcuaSQrP4qC8PYjU81qq8RuABgLyMBJBCJBdF",
  "key21": "2MBUYTAGGGa4kuc9tgEX3JUx3hSe4Jx3o4g6d9QvHo5zy9oAAxyR6WgvLNCa72gii8cYYQSDz2oj5DXLTF611dSU",
  "key22": "4eQevJzX8v6Y9vxYSoYewAMUq96tPRNkCWyjyt7itFpBzEHfK5jC1B7abGoBitTRhw6sGSnmeCKM7WkZLYt4psPX",
  "key23": "2nGyiak92MtK5t15SJXybyK7t9NEacSHMETXV3YVAKddF7ePEMUE235N8MZQKa3YH3z1kgGSQkJoK8hQxEeuewhM",
  "key24": "5E2i2FRyL2dd6EdXgwawPNhhwnL61mBsCcKHiLNnkDKajaUqwyVKXXBbs9HACB6PUF2R8BojPs5yHt1dC69raGfr",
  "key25": "3Z1K5vNzR6NbY2MiMXuBzMthhsw9EL7wSphHx9SR3ZLFMNqz37qz8c4T4YQat1B7Cqi1Pmq548NBWh5HYCd4bnqU",
  "key26": "5DPoHqeuaHCgUkZ8N5SEH6dNpZnADEur8JLyV3rtbpvPwBH11bkz9NbzY9wVWsi78uwTA8MktJwJQtJve5zGqzCy",
  "key27": "62HTTvnJMck1FFDxq2kAKTrqJUtJs1J6CYz5tArHTDhXNzhtaEZ6z8wujo8C4jzsFmFqiV7cHYeN1EHnGcUGszya"
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
