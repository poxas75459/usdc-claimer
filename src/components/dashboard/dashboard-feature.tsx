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
    "2nXgiMv4PYvNLJYFprGkffbMq8GAZz2AVkvEB2MpUhF3wB4MgjrJH1GyKMRg59pvfAaH9WsAXeDbGdWtjv5YKL5w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JVicyXi9XtkYodv6B8s2xVbY8GJFwNVooa6TGosbYs6traX6PhL4dfUqnV5JgrKo4HxN41VqbMptMJYQHjd8oKv",
  "key1": "4KJDy4ydi3U8LTGKoRTtHcuqHT7sbxNhY8GLC7xoAc7LJ4BdTQN387b2x3VeStyGR9UGdhBkCQ3LMYxKpYZzHULm",
  "key2": "4u2gozf5FiTYubQkdu5vuEQxDkLabjbGBAWdwRkQNwpCLKiHJTS6dwnQ4WqKbbJsaivrFbnu5WF3o1PhZjAoRBod",
  "key3": "2nnaNRtVLAX4AEYiFFdqRK3xw6sSG3YTckTw7rbAAharahJ445VZkUQag1DkXRAQG25uPTMvt1BMPcqQhYWWTA8Q",
  "key4": "EbaLJMjQcqhrrRDdWDpduVdhA5MHzjDwA6WCGAjQvH1MePdiC4cxsL9XX5SMnriJfB1rtDLiruXjBkytk7p7BGk",
  "key5": "HapNXhWiFsaWNuT7dHzr4hV8G3gu1LqBn2f9JcCnegM9bzzQBy9CtDBpE6qwGrHVcQ575uXuMRrGiL6p9Kzu3Ca",
  "key6": "5JpNwKdMcf13FVVRPHiGXM99ovYnjCeQ4QeKSTtPpAa9DyqGynQeM2jGn9s9YubzJkmwpCSCTE9nN38xGihgS5mD",
  "key7": "465nxWhwjwbKB7NQUTVNLHYLcuNvxZrPYHFDZLtkLC4ZdchgoAGPiZ3ijicDjqMRvZuRd7rvNM4bjN8icbUYB4o6",
  "key8": "5MMGHhHR3TmihHBuZ4KiBc9GBKTSTLdihXxXNEw3EgD8ekiUAS92jhhidGSXQ3xEBZcriJk6mZvdqFSc5CUMA73a",
  "key9": "aEUBei9qwR2i1Thkf4ozr6brtAtPiU4sbXdqVqdTAds534mV2KJoPde6RPjevzRUf9o8yYkbh9sVABeU6emUPYS",
  "key10": "5ZPbTeKdYjNgnBWMkwU8EZ7g5xKjY6yBmc56GY9omkjvNsB4RhiHUanwXdZaoQdxWK3h6wZYLxqNfzxFb2Dj6Ae4",
  "key11": "3aXcLm8opRqAe8s6Pu6rF9NexdjsHWVGuibwHhsfH8qhQ4oVHEG7AeRRHoRthzuKvwzeoRsrNT6w5YiH6VvGwwcL",
  "key12": "2J4m5gKXFwKSecinNEVqp6CUv4YNHMjDutkV1emmS5EBgn8HG1NbCGVHGhNVR98GcA97s31Tfy8fktguaZYLLR4v",
  "key13": "3qjvJ7ydECExPUugSZfjfoC3aJru8UVscNJfBQiM3MbL4zmqx97cjgZuvNaMjkCrMs3NPLsSmCqPjmZCTxCGCsC1",
  "key14": "2RYB9Snc38jRLyK4KqJa4SnNo5nGRFE2orGJNq4ieniQ1NX5eEEz8Z6rZSMqu52M9sqaoFqhtwPq83bn793eRN8r",
  "key15": "5QHwrBJ3npVVUk8BkeHahj1EoKcjezCBhW4JQD8oN18TQpxgrz5pKVVFQpZchkXaCrqJpRzDPPnjDYH66xfrfBQZ",
  "key16": "EiptFXD8tj12GtgPFzXoPEWD44nh2KuPJyMhrHkqSifhfyCY2YyR1VhWHzpwD7tLUtJ5zySpU83ggMd1QszKAUV",
  "key17": "623VUmfu5LoTqucNUFjLvdYdAzfiyDRjSHc3UTQSLHipbVss1TCHhh27RmwgLpFWAEv9cd9vFNsdY14ivwH6dpDT",
  "key18": "t5qKUZhVDKpW6qstxBJkXVWZG7G4Q3cpyorvnBV91gfdynkcgAnk4Zi2qXbhS5vKvAz2NSWyYykpEz2ERs63AGE",
  "key19": "S4BuCtHXUaPw2mwtW9S29qV4Hhf9hsyuyru9T2Xvqu6TbWqWFHzDpBSeEM8XrnrQKrmcaq7dvAbDSFK7Yes8W2a",
  "key20": "4MWBfFiWPNyoGh9y3agJWad4rahhbGjGfkte8AgMeCeN87LY9EJePZGcu7TCFWcc97JC2AQLoq1M3exhnCVoDdrS",
  "key21": "hL7nDzxzyqjZhF1RJiwr8GV8rWCRfxuAuRSyyiFGwTQiRfT5CEUZBd5GUXXW511cP8nSPcXD8Nr2Q1hTT7igvsf",
  "key22": "4t5CqeVKFroBEQ9di7ACCVz3n271UKQs3bnrMY8sP9dVUwyZrCUwFh8127LChkVHEioA7gdkenRXHjobfb1Mthx4",
  "key23": "rspxH5uJfjnAZUon2uh1wZ7FopZE8kNVkF6DowvtTV38pWprgqF8VQcQD2XG6T9qdMW3hS9tXBXt6r8ryrFCw2s",
  "key24": "2bAqCkqYEsvvrYvvjFqRwBSe8CE3fsK2Wr3xNCTLufQ4H1HH218b8wMzz1DJizcLujePYmTYKGLVj9wV7G7Bxb3m",
  "key25": "3CWdDM1jhAGRUr53B8SZiWuqygtvRiZXVL7WBNcNzyta9nsU4uV8Tn28i5ksDFrCbHsMWa4CncaxQKBiJjVDyFcQ",
  "key26": "5WohJDk7ruurrDBQ18eUJnnXv3GidZXLJAJfvzvoQdmtFrkCYByiL63wTAgZac8s1VjyauXRhex869v3nPRDxB9i",
  "key27": "buo8fgZ84PMqNH3EjbTkvJeRxBC1vbBB2xQ3ZKqsT849X1ZrYm9Q4sWqGenW1k5VCvpkhibGsU44F8ZqYnTtibv",
  "key28": "4xBtcVkCTDNCMZngeoJEL2EDTWLBGGBPJiLzxxXDyC8UvDotQ5R3vb1NkG4dCZWFcDrezkrUQfe6nyVxq1eqYKdB",
  "key29": "5QrrqY7aMVJ6jjMw7E8UzuNNoi1cXXb8V1C6UaAEkGdNdnKTtvXmJkiAqz5pr8C8khQu8YdrhKGnDP7EwtV14fiY"
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
