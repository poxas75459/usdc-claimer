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
    "5WQGkVdejNWvx5BaNzAyEQh1K7N1cQfB5oepLTPCct9o3uCWwX4pZYv2Apr8EnQ2aHYazKpZMeCk6qkwiQeXtyJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HRWsVvX7ijvXaD8uXqkr6b44eHjXkUy9sv5ZKh53osPDmzTdwmAeZV9pFQb4AFoDtAryNiKCZWXNh5uEbfr8g3z",
  "key1": "2WC5TYCH4DkaX5PwifVuHRVC2STdkESYQ7SRX8WdUCHp5QQcWz3xqG58rRFUCixP7E5wJ2YzQrfj1hd7DQVaJjmb",
  "key2": "5xz3B6ijvHyXmKnofU5ouq412bfkuq2UkPrtpjAbr4JV8nDhbCxsXUhXeZAimYxQPbPD2LD7iPY3SRYJMncQm5v",
  "key3": "4UMWfo2ognFCEkEaUto83gCyaXbEMtdFHzzKWCveFx8Bn1QZ85mWerVR3MytbarnwJLTtT8cBcomZvfD3G8GAH4d",
  "key4": "33PJ2kwmsSgaXQ4Vz4YRGHifs4S93tVQ6Uw9RzUpNAcZyTHDGCCx8Ezb2thH9W3WQnSY59uYgjSoG6S3kNPwSRzF",
  "key5": "Pdeze6mfSd5kkBToYjJhGD3Q1BqesBBYe2A8pJuXMWZV8WYPLUPhumZGg2dVZTWfc1qFwnLEm2wWndC6vC8c3fc",
  "key6": "4NeiEjCCjKQwsEfunpznV2PdKMrPRu9NbyVi8hPBxZuTxb1KSLYSdwfDDipDBUNuRtrn6otCmbVe8NqRQJZNWEyX",
  "key7": "awTLRwnDS3nARGSqZmRgZJhzyvkfZ9uknZqW6JMn1ZT7peyt9b5TExhXBvGH32hLxxnbZ3J7G6Cm8XmP9L1dZVH",
  "key8": "s21HBQBxUoBz6utMnSM8MqSLZaQhYPpiAfxodEKrnZSSp25Spt2TzraH3y38fuQytzjiES3nbykBh95ESqLKpzm",
  "key9": "3qkzGnRtyk7gyhfjpzqpyZ8EwwMgCgk4H5eSaPKefkBGVkZtYBeHMX85XqvFTeVQAMP1UDHUyPot6dNkkGfxKpSu",
  "key10": "4zyCv4gCpD67SdgA2VoH2oqgqA5pFt6rzbv9XUswVipUvQEqxXuHDEhxbBujHt3ME9q3hzFkzgci5hbQNjweZHeF",
  "key11": "5H5sEKZAZyF8QsZBdy8zwXDT4cLqamjMtmzsNgcRYi6tKGZG1tKWFtLgxHBth9UZLg1DGYgonmNWQKiErnRmnuf8",
  "key12": "4kDvGKT4Tf9vqZhHWLQ1ULfJMfnwUNq582Pf8tTKGvL4xJZxfiht3ARVKGGgdntvQ4x3NC3Hq8NkrQaTTSvCUVWF",
  "key13": "4MQvt1P3Ug3SN5u8VNHc88956yVq2XSaGVnj4aS93nRSkQB87S1S8d4cq78WjU1JzgLDEDrx2K7U4VUkDAY8KRzj",
  "key14": "sHCcGm2ZoAMV59UUdGd8eN8rqrNi5cLqBnGvkro63EgDJavBYVQ1QgWE97E67sF88UXjgrUdoQAU5EfGxEhw1Dt",
  "key15": "2eoB7eWHsT6sG4yfKqt36yfD6qXhZesPxMA2hMSJ67yYbT5THTkWAo2nDP7huG4VWPJ5eSX2fqLmQvqZtMuh49CT",
  "key16": "zPjNBWj2EWbN2Aj9LCCJxzHR22ng8JV5ktQ9Z4sumnWtSEvLxYX7cSHeiDTMDQyFcD2892WC82VKkgBUCFbyB2H",
  "key17": "owrWGr1R7cheoxb19JzV42s5LytanjRGSdRW2KuvL3DCn5a5dVXu82Xui8A6oVuzgtfmvkpEdQhtLCVnciA1Lyh",
  "key18": "5rzBs45XEdaDjXdzeAfLboWoQEwfXvjZRBtuLp7yGSDZ8FCW3dBQzTwSQwTq2JJjRFfjgWULaYUVokfsyfEHcUFM",
  "key19": "3WgRHRCauQ7xqf4ew4cwMXwjqhf6pda5ubjadox9wRscnKvj1Yu1qRy6MQZNuvg52raeNMEMaZD7duBw8BJi1jum",
  "key20": "5wRuxjGTwREi72zTyrXvMDrz6SqLgbRNZGCKmheymAUyDw24EnwvggzYQUdqzbuUyyd3kyqaxJCJw8HTfg7aEEkx",
  "key21": "4SiAB1ozMvRt4yU3xCqHEK7PZ3TD2nznzDtZxtL8pE1RRZ6t9imDW5MYyQtPUnijUtqyKVF86gUXo43tcsGZqeEv",
  "key22": "5h11qDgesvc3EUuA3kgeyvyJRxGoJPv5pYvNg5NSU3c1JpbgA33DxF16YXrUdD1Rfkuxwx9ToskCXw7vEeCLqRsR",
  "key23": "qGnCmNkGU2bFwfNjb78ZwTjEbUYpiV4HgSjj8mAPrRoqhq5E4XnfxgdgRmwYEDrbNPhjkbp3wD7VpG2F26nwWyw",
  "key24": "2cBNvsmJud2W7XVtoJvFrQKVSscZVpS4xQdLs5mTHC4cYWDJrVggdG6toQCg9fc5c72QTEdhTLNy4ynuYRNfAC54",
  "key25": "4fSz9SpMeZYcH6JxS3kDPBFScWoLfuYaUXdR2EjtPdenGQvHdBGHDPC8by4V4bBxmCqkCvPMrM4a2AVPtPT2F4U8",
  "key26": "3WV2rSBiub3dX6swM4pJknSP4gLMaTFZmE9aXTQjACbbuVKMYWHffAWzg16QDt2NipDkuWJEWnGPdGtuEKHTZGDt",
  "key27": "5cUnr7rkLBLJbGZvRnWEqxVcZUSvMMsv6DAGr63kpUHLBzjAiEGts5q3mweV6i6wNJC5iiauaLSGFzPR1unkJeXo",
  "key28": "5z2r114ogfguE6bMpEUCRBoG6bxAf97H35xd6sV9Qt7Fb1V2Lp7ixHCgcYxQuNZt2nQPB8k1vMuAcPs5fAmXqCXQ"
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
