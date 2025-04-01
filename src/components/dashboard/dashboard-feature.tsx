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
    "gmXnozM5dyyNp1jsMJbjZbNAHaaY4o6Yt3shDqBZmLeDWW5BVhAJzUuSbQM5zwLaAXBtzLrDLUDLMZRtTu253o4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28UNvytHaF8PTwSGBE6Kcsmg4hrFm7xRru55YRHLzfHkaGRiF6LRYaPET6bbf6kw9R6XTZKYN4GGTsnHp4Zz3MWZ",
  "key1": "4zHjdEurvVBy9tL7YCcT9zvrXVpD3wzGaJhwxwDV5yG3xDTB6wGr6xaDM388Z2hTdZU5PFtqyxQ3DjcPSrYvvoe",
  "key2": "2D9VtZK3NDG1ZMXzqJjwsMtrdJ6fgJ2H34F49hFfzYMk3qYDHiWUGh3PMWt6Jz9ioR5bV9CeZrPU5RkUuRjdCGGZ",
  "key3": "4AhDUW76CZ1KWMjJuM6NsFLMqAcShpDsyMuCoLQN7Ho3CkkeJ6c5zVJfGTggXdrkJmYieef2Av4uWCWy12yRrBWx",
  "key4": "3eMpzHVd2pH2221YN6cXsqnLJx6RWqB2SJfp1qTVX3h4eZbzG1WQc2te1eL6e8VV9BeYyTqrRjyMiE3nMRJuEgtc",
  "key5": "2q8CFtnqDkjNj1uVkmt1crx8E54D5WESorh1JyH6KK95wPaMq2wZD8GyimxbyvBC4Wv4W9sM3RX8t5L2rvVVUqFZ",
  "key6": "31dueJqvZGkjuzcVshQ35TzKiKPGWMwcWBqD7WpwuKdJo9fzujNXUxmyoPNqEihXX3q56xQynN48qtSCn4YwcCud",
  "key7": "4iPtBN3mifUoKeqhLzZnmA2K3zdXdwSZ6mHnPPyh7gAJCtCT6VXaBsRVkKipWNjz6Fkf75oYLhpGuEYkkP8NNRaZ",
  "key8": "3Jy7vs28ipFkSd7LsuVdD4DQqaLndk8nMJ8r3gArmfVSWiaQJXWwbgXXNWUsHg4rXMwsgB8AEZKu5189vKSGLs3b",
  "key9": "3wbVNqNHCei7ZBN9vKpTYzGyTxBQnAY8axRxM77jykiejQhB65gvnPujDB3WpTCKi4RC7aPUg2Re6UtN3ZRfDNHp",
  "key10": "3WCQK6VpP4ZFUh2xCPkCAtAAjL4G4w6r4SnJGVUMhzHjvmQYCMqWo7MxLyyC7QYVU7UtDed9pdGaPSX43kaLY7Ky",
  "key11": "4yMN3eGXwcaETPMasxW9CTmuDbfj599TjjAMSfvz1La5MzBDsEHazupwgVLY2bUhN6c2nk7wb5zeEdY2S77mntLS",
  "key12": "4tRyKR4uMRVinb6QxneyFBzURKjP4435cPkLCHeWQ8NLgXBUneZXXvpLXiodppRBL6bBX1eXqBCxi3TQCA7hqYYu",
  "key13": "2VXrQyY1F8uckbA8YuRbAiXNPH3NWojWXx9nbH9vFVpBthBAXbaL3shCUm7jtZ5axACPCHbD2KMyoZaAzpzkrQAo",
  "key14": "4NSVLKYYuWCiXWyVig4yvk1CRKqgWKkBHU96XGn2oAXrkHWSo9nNfR4DwHixxSe9d4EE3drTq1RLKVyUSqaqzM6E",
  "key15": "55d8rc9qMkEr8Vbs5cZGqm941poV4FEg7ANNTvf55xonDph86jLLYxMZTXQBeqwYMAyLwvGzPqofy4Swx29UgUSZ",
  "key16": "21SDaWsiC6VbEXjsxtLyDcBuTU8TAffhAqjV4QveaFANHk9CxR8Kidop16MspqRwtDsw2QsP9zmegpyJtEFtpywn",
  "key17": "3Px1HPhfCKDK6o8ysWKJ1GG3mByPvoYPx3ShqDKx92f8orWjBk4bw8njFVgzUXwywhmpxSaJMF9khoPGcgY4ic2D",
  "key18": "2tyhryXqKrDoThbzy5zE3XZuwEsEHjSCP5zLyrMzVhCTWtTjDbcxwfvSZGD59xuMCALFd2V3Kih1RdWL8PgoUjQm",
  "key19": "2gXY8Sq6XteY9Mki2CC4CEW9Q1hqxcVRiEdxGquyUzxMp2rqwxp8Pcr8A2tgwBCVJN9wfLcvYNpxnom2pgRX9rn5",
  "key20": "3JBpxw64Eo4hEjZb6JQAvcJrEERV8nsKrCn9zmxWd636rjy7EuwNwaYsFZNV1cN49rY7P1Hf5G3WgUzbLBcRU6pK",
  "key21": "53nK3XJUu1X4NtZXbCTd3DQ1jXNYFYX69T3xykoRs1zpL1EfzcSbRXFoyUUE3MmAnktXAcvezTWKxhsBWvMF2uU9",
  "key22": "41qSf9HjaJqFXJVRVYFsCVJjidRqKGVJjxp1wgaTzHYbkwwWbx97US9HXtGMUq61XeX4g6eLRxu3wimbBPfMuBrB",
  "key23": "3RfqEp9EyDMwwSK57nB2NMA5mR1DwoPJqJYfPeL4x3kQ3QoR7jSaovyoGjjLDGpEryRPRaV5BqM3qk8v8popScWQ",
  "key24": "3tAD5Myyd59BqaBqcTJA7NNRL74cgsjWvPWM6oy4FRaQWoTrxU6xXTzfhRhak3KAd7j2jHZVFCt9gF2kPivyfUdK",
  "key25": "2LB2E2kezMRd6VRn1Yxx1MUYczZHrwJeskP4Y3U42KpmUczNFYx8nThSLkqaNFAcUCXV71mZxWa9LCYMWmZNVjrZ",
  "key26": "5YnuzUdeSA66mCz4hGdKetbZCFNo7kWT7xDve6CCh4jN3Kp6GZrDXBukRHUTkkDSr3Z5kpeYBS7VGLMqwvK7VRaX"
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
