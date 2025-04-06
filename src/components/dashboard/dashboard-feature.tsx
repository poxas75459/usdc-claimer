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
    "4pdhPVMZVrFK4w1ZX1xpaoWwWQjsimyJWU3ypfWdBKjZyef4dx9aahTNkT687Yj3YHN9UiphWBh1B35e93qjsqb7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VKK1SSCQMKDRkohuVQCyH6K4aGuTVgitRLKJLmQN78fG3G5ZqQWPrwznjkw5gSvJuQXMpFiMHFk5Gvphkv1tAUz",
  "key1": "2heUbPPxN2JTsXuXzkHetGuxFVLtKs17wwKijzEVJ6jsXiKj4Lmd4yHoPF2ZZ5QwTRBvQwfVLNP3uqrCagQXVuJ",
  "key2": "vj5Bh9Tot7cZQBNJ2deAeQoEotFFQxWhQtNVJ1ApnK2o65wARCXjmunkx6DT1s5ESLBh6GRbzWvZomJnmewYfq7",
  "key3": "5XHW1iERePh2aAKBhNE9t7QiLCbnuwnT6Ky2KVNjFcdNGh3dbSrUneiVkjw7upDFDsijAZ4ZtJfU7s8E1i8YF3Th",
  "key4": "H5QZ9isWtWq4XzrZB8PBQ4uRNDTPcMQeAUtUhgPoN7zNa7JdTdSVDCgdWhs4uUqwBTW4ukMvWt1hcoBeDBbBGoT",
  "key5": "Fog6TTihBbZ9gFnirvxC999o6Dk2uczLR6iHP7Wae6SPr9hCrVGB6mr51A1P39y4D2xK67oXTxPrJsd7NARMWV4",
  "key6": "4n11YBLc6VFkYjJziqdRegyE9bWVjp72HCs7U9tCcAmycsDU9F3BwgTAg2wFQtcqvQxoKBE4NskwERnhmSRyaefb",
  "key7": "jNRi424py3BqPS3fbdahDdx9NCHAEyKiUJxeNoJmAu98upLv6DASNYqEA8tuYTYLxwzps4sJQxuN7yrmGMFqEGP",
  "key8": "5uZDgQYEzUcT3yauuG93SymDiavRyC5tpy6v6SWjsRhg3PeGbUtUzcURPSXMk9da44i3ibfUqJFhYJUzmD7jeG1F",
  "key9": "4WbaXR5mirbmEJF55SyBtqko8KCKUBKMsJvggA32Qh3D8kPB3KhQH8wNDKfMhmcNNJaBgVCvwbhiP8hvfH3Du5AJ",
  "key10": "4M8jHkBmJbgDNWR6hXJ1LK7UtmcRvDhUQPyoHxzQNxH4YC42ttxQN6qUd7my2jZFJHs3LH6rMxP7bN1ifGRjNyye",
  "key11": "5QcbdnFUmSjrbzNiSnbrSpFHyNbW7eSHzmoAufzjWeGGuTcSXEymKcBqRfeNDFxQ5EUn1tFSHZzqLWD3ZH7NC1xd",
  "key12": "37t2H6a4FA7NrsWqZ88kCjpNiWcZcM9eMvG4TNHEG44dEocp7wyPFtKNdsmNFTR1nMoqufQUhBSXpwsPmbs9HoWz",
  "key13": "3VGbmiwRPJsmJphpQF1DNbXTcz3bqEccQdsGAPtVn7MQXmTpScmVbNEtSnUWb8UXtmxcsX6NoQKdPcrfrK6Xuek4",
  "key14": "CzRwU84pFkFicMB5vb9zaCUgZHDoshZuksVqKoatSHfwrLRQd6CNX6NxKMNNPjWJVdMtouvKLrBvJDDp3bXHoo8",
  "key15": "3o5iGnqSrkR2bRggRhtjw7g4hiz8AvYfbPEgwYJNdq9WyKPwGtZ8B93w5WTBf75KiWFtxaGKg8NbYHhmdHC8437x",
  "key16": "5C3FqHVHwx9XuAvij7DoS5uefLU868aGhGJJwn8wbjrm8NQwDYsvznewpuqoGqnb4Hozu9GWYi9SDkXv8yqTwkEf",
  "key17": "5APuBvjHvfQo9q1fo3o6hn77tPMgRobgoYVKh3vQrtjiAqxx9NWCQSdKgitm57PkAXdj4GGAPnMwhLNeMNwy3xUg",
  "key18": "2TeZyeJSca8vpCDqLs3LYQweUrnnJry8SWXz3kgsC6sWyJskArC4Tyxxy9vWoiv8vnn2GwkCixGvFpjkbTVwAY25",
  "key19": "3b8hmLibDXsZrTgmjd3aBBeUeb9MhCDqPYKpRcr1iXvBVo1NSzPN8pzmbfqEeZk4CcKur8D2wbN7p9btT2mFNDYS",
  "key20": "4J9sATEdxiWEp1eBQQRGFEJVLz8Gq2tgVHCD7TRZNTAxbsUbRQpDNMZcjdBzjLdtnb22dDx1aZdfH5m8WAGV5Rct",
  "key21": "21NBMxuabkBKxnZGjnTnbeG4dU3QTs5ukr446cfcLbiEs2BtM9W9HnaCoG7VKYjigSNXZoEcJV6a9mTs3SXgPjTT",
  "key22": "3RHPMgeLa43mn25zKWabiW4RbbA7pxHnea65errgs2iwFF1cgf5r2cXJXJEWuXJLDFamWgJpn6UKCE7H8kqrGCNK",
  "key23": "388P1tD2e9mV5E8JuoMxkS5iWEfYxJDy4niLtMX5tdskfJQwbMYat2dqSSMVuXov4CUJ3Ve2uiNLPSJfw3UrqkiZ",
  "key24": "5PLfA5eKd3i215ys49CPHPe7jBKdVpb7N885ASRuR8bNFy9PYsPySZBdGDcBzHNr7s6ox34xBL4DneWFhkQjF4kW",
  "key25": "5YNZxx87ZXKYKrgZ1kZNkJbzo6PrELNPqHaUYRyW29Xkdj2teArsVjrJTMcUbLGfic2LVNJNG3pu8fAvk8M3J5AW",
  "key26": "49ACc7cYcBrBmUiPSvjNkE9hVjGSnwJrkEoovU455x8oyQDyzjdmh77dVaZy2tgj2z9uvupDGri1PGPxATiRa4v2",
  "key27": "2jXZZ8SijLu1fAHdVzwrs7ohdta7V7YVhCwxJqqSDmJqsXZXNfbxCeqgSAiZiP8AkUEzcYfBqSVi9F62xnDY6LPe",
  "key28": "2n3HpyH8VfcAnwnNEgUXMcsWs7Dxm6KaHrjWSVkFhN9b6Lkzn676MCEEZ8qpLdpJEDfoE4ziMutYknKMoFztZd9F",
  "key29": "4vwAfEuYGUn1rEhDkrw4jPT4JXyfFjXUdj4jYNP5qZbBSd1eay9HA3hqyvCLMPqC7WK8TwTy7bQoURqMG5urkkRb",
  "key30": "4byUmTnjeDxtnoxv8Y5GmPUjvsaMPm5oGuWKbXEyQxGjd8aZBH2vPVbynrf1cNxqWXjFgZiSsyu9C1zyK1R7M5fe",
  "key31": "63ZMBjMDpxgHPJJbKztaHC2GNLZDm1B9SmaLvgS2EerDjbcLaMW8hi1y6WGEPPezeEBxE5vdbwRjjEgSMrRUcSAE",
  "key32": "3WHknK3gQyWrxyx2UBdeRSGzbXf6DcRY95Ch8zFFPqJfKreDndADjH1EfjAncdwnNffg5yJmh4VB621MihJREw7N",
  "key33": "3yyHDBuwfnzctfzMFhJzpBQKHSDT7bXXCHmtehJF3NsBhuMrQeDRXtLCQNvz6HxNWWpwJQDfEuyWvKogjroAYcw3",
  "key34": "2nMd66hyRLtyHHEagYi7kDHsrBayZpEqxTAkjEx9TXaiRWMVHxQfHZJiK16oDUFF7NzwNGZk9WEtZPqut5z4Q2Fd",
  "key35": "4iktT38TTpTH2KPWWaWc4CTWedYcc2HTwVwiQUc2owdpt2QkuPNkvpzeX9sUHTPunYSonT8SSVuG3TkAtH4iQhZM"
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
