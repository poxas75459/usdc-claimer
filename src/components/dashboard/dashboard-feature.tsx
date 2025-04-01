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
    "2xN4zCr3QwiybeYU5x5CCkrHaY2NckhEJks2vJXbhWvddLkFeWcbniyuwFWZmeTNHix7CdHQAiMHDAP6WkBDbcm7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RegSg1EEFiAq1Sf2hsBWNzPk1XDAUeVfDH9kE3Arukm7Ahtv79gxC9Pkq2xdx3vErCpa8Arbc1MtwPcPwBcx3Aw",
  "key1": "5Wf6HJyj1FB3GDeiNxTayuXxEoXAHKHBuH2XSMBiLx5jGJo48M9SPpnjKnP2rfhaqCkWEStxk1VF9g8GshCFbtXQ",
  "key2": "3BXGeY4DNnLJHiVVEvvcgrDSeRHmHcsLBP4hDA2avr8g84nE2Qsq8x9Xouxppt4dkbWSbRzXbhBtKoN2miWukqL1",
  "key3": "DNnZLSD74FZoP1f7mDxpKYDCoZWvBBv36ADS8CdyrRqvhwxXTSnxVbmwCZeKrjBx4ucnYCFZP5KQhkpTTMDKndK",
  "key4": "5GrEREmGUa2VX9aSPDcgG6poK1xjSLJ8QN8S8dGif9JnuNdNqTjUJWQRR6Diy8vrfbzmZYKbVW5SoiNQ7LQKpJrL",
  "key5": "4sEGE1Z7VuTXyoH5YFL8CTeHr5RKernvH4jwQE3NX5haWvdLuq6R7azcH1tHTjCk2Bqyn32kKFtYcthFPJkaTJdu",
  "key6": "2YFSqPvDVNJV32dMsf3593VXxNMUdaXpRpWUeXGDpM1FYDsvuhi5mKGGVo9sr9ZG6BUCqU8JjFSwqY56Zr4AQu9U",
  "key7": "2qyNGy8e925kF9pc6q1gxXQCw9ii5mePo6phXRjDABenm1UAkW4Ncq6qnuCE25Mvj8Jgcv2wrFe5k4bsXmVkx4KP",
  "key8": "2nABXzf8rRBFXfZnbt17MS1jgiaLY4Kndgz4ucF4qaoGHAUGgpq8HEerUUSy4CAdZ2jJEPo3x2r8HRhzqHTEy4iG",
  "key9": "3wnvmp4aeojaak34g64itYkgQj5URrS85DATpnCeCBas9Q3od8QZm6HD69khnX8kKdCMbUEFWo5WzGLwKFxwi7iF",
  "key10": "65fw9Cbv3j86mATmi9qNmKXvgUV6bSXrrcxcm9ZUFr3zjp4mVMxJnsu8eKvKAjpYoNMfEDHpexdQ3NHsFH9Hp6N1",
  "key11": "kbsddDvfssxZr3BqnRGzd82ktxj5YeiUApdowsh6qApVmfokGPfLuE91MbThrKNnw1fK5FEB4tG9wJ2FU4cScQk",
  "key12": "5LkiVjwHrtgqybeBh3UyLsM6YSqNGnykXE4mFSp2s4bbh7BTzjXzhZXuYqcUAv9bythfV7Wc5MFPUmHNJhtUXYFZ",
  "key13": "2arAQwJdHTsfGabLuWzdGAhyCastu5CRPM44uHDJMRp87Cydtf7KuKpSfaNPkdstNFoFCvyYHQE7cQiaKYCKyXjn",
  "key14": "32dPjc4bUF7URFEh2BAcrvNgY6Up11S1KqbGEdeYf1zsMkCCFfmcSu2gRAaJQX9Ac7w5hptQ8geitB3yG7XTk9C1",
  "key15": "6fQaCA8WVGXLWTsY4edaY4VtNiT1629Fmv84Vf8Dom75m5V9CS59PYSDTEQEggwQKcfKQT4ZyJbbScMbvgYb7T5",
  "key16": "5Rcysvvkd9MXY2a6eYwARqE497RhCvthPPr6h9coQxq4go6UWcYEi5bSUYEcRshFG6u8WmskMauM1M42b5QwqsMn",
  "key17": "3saeRMjpMbRwy8TfrSgbP1sYRGGRsGvk1cTGMB8mYTgZUefQFUDLuzBKhBue8oThhQSgvYGxEUYgEu3iez3sSTHf",
  "key18": "4hzxfutThrZeqHEWWPUwBNfLqGh6GWZsrBVumpUkTTf5P8aaSAoJY9EdueQ716MFWES2mcsajJEet8yZ2JnHhqDr",
  "key19": "5Kk3uSqMF1m7CzCBq5gBbKBRtX1Vo2YZi3mrCc9BaqT7D7M3KrLHSAkwGSmKNwfuVA9Qosu3AzJHAezgcXkZTzLB",
  "key20": "4qWeK7pwBBHLxmwzKEY3r4iz4iPEqau2rSWxEUqUyyKuhkRyo2vjTwL7bv5cUB9TRcBAvFZAFTMsLhMgVEKgPx38",
  "key21": "4g8F7ftFRabHZxKE3TnXcJ3oEZ2aSLa8XhqzhH9NsS84y1TYpCj3mYA5jbSEkZuB6dRBePKod7hu6LGuWTiFZGU",
  "key22": "4Kwnk5sDrXUvwuRnZpWuv3xhhLeXGgST1aGaKajGKe9WYdKK6mUDFvRhUpPTA2wnMGbeZx9rgrUK2BSbwPsQP2rm",
  "key23": "5GH33KWK1HG2FkdhQaeQJYsnkM4vRZsYDitGVPk4odhBbb2mAGYsEnCKnmQvTD5jQCSBpjLwwyEbhVUmrbw7AQsg",
  "key24": "2N7wFrbjZYCSwoEJK6HXt1eWkJMjNFyNabE9Bn4dCqQxqbkQnwgJT6CP9jjGtJgSdFf6eTGYDuwH7Sn4eUw32fqq",
  "key25": "28mUmLpWHS1M6UYUh6DgZNELTUcp1jFinnKXpA5nRTbrYD8fLXdWZ6mgV9dRkXf9N1no3BZBH5ADqsFofiqgk14b",
  "key26": "5XDHLKzpAwkQyBunt9oDmNVPNL2mRskXRToGCcrzQDqiwRvcVAyda3cfsQFPKRXb69dzR8ZHJYCJHSbpSv6zkTDB",
  "key27": "5Kj3CmjR78QvrkDq6WBmceLyF9wpNNg8gSxQDbstKnygtfra65HAMYQMr2YCXfUgRGQAu8peSLGi3kueBp58bmkb",
  "key28": "4wnniYEWTSa64cGgEB1Dkr2Jwj7u2T5EsH28or5rWBGDfYZ7oftxQPAoXt4bi4eSHq9M2fN5vGfK5FebfZRZL6z8",
  "key29": "3XJZYWeSdqt7kU49XF2hMNwY8Z2g7qm5TtkxjT3n6GNMpsUg1XvZ4CbVLRKT9Lk9P9VSfzTuaQfRNTEYHVMUrnjb"
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
