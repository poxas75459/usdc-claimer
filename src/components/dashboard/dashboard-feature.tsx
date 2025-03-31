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
    "Xp46DDwQLXqXBKgxJFYuAZqDu9kxXSQyKFYRJ6iPNwNvpR5Br9HAxaVgusiibY8xRUyfEqKQZFa3kqQanKoxJVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tLXmhbxtDTFvBpBUzxqzAMyvRBG1urEqZFd25YLPcrJQxx4fgNcFJQAgfwUXGWdCnyVk3iChDQtNwkqixjXjRXj",
  "key1": "44uf9kjdaQWftVb4uJi8ozxUwahTMmY9bTb1JM5QeeEEfFE5HsZQr5gZ41webvVv4EhguQrJPvuQqE5Xjrsj2odn",
  "key2": "3kTN4GvWepbawJFPm2p2J8gmzi1GjcJoRpmpxjGwvKPDnSsgLLPDLa5eEmmC7fE2YwYji4rGewJrZa9LUSZGcjEd",
  "key3": "22CmAhkohSENEauyNttetTfyKhF9ymqwgXxMfuewv8DN9PA2WbFikgETUeWVKZpVKCfpmbs9E4TsbN3U3giS9Yq5",
  "key4": "kTSCkCzhcDwBKaatLaKDkkViHevUKp2sTw3qc3T1rbY8B4XLBvzRzJAQENGPKHXLpodFjMnR4FbBGTP85fKLADA",
  "key5": "3XsnmtWBUcTaxRPQm43j6umX27eAW1F11fZ9THkASV2bS4xDpgUbngcKCRTtDcap2poErsSAphyd7CHu8bjdWwW4",
  "key6": "4rMgewjkJFAe9jM5AdSZEuzRYHTog86RF8PGoG2Ltt2bJ6Lpk2yjjR3TCUmPew9c9LtoWXH2cDXU73U96Jmc92r",
  "key7": "23z9pdmKaCcFzr6FLzAYiXcGJMd5orsWsw2738bKK4ajpMxDoH3xjzWCideAca9a15Zkn55XtgnSMDvrts3G9NTa",
  "key8": "3XPTj8pvv35nVKESAwCo3EvkoscXmZARsvqXY9mdkjrSzEXmBpADm2LxfAJ1inRbpcnTveMgh88v4wNEn5NUMa5w",
  "key9": "3gwznXvGW1mZJpUibWP5TRUJ2FbqAtbTNsy9WhMDSMzXieWBNSQsEYtGMcngVWL3E6Ej2KrFfzoKd7G2tYqTvnUP",
  "key10": "4E3dze19HWBLbZeuVLqgCjWVoQTwoXQdJvMKw4aUpp237itGG1HyQruMLZTco3pPhNpwqE6XPN7k1v4fPaPQB4CX",
  "key11": "22NMAjxSCsQNL4pKHSbk3txyLdGo3SY4WpVjZgcX8SqZoFusZZsTRv5KasxGu2Svzp8ETjuZDspLTaFN83EsRh8h",
  "key12": "2jsiDXcVaWAvDrc7XHCUMYHwtoHgex73yBP3LzWz599RQeTv1xHmN85CKVX5tjCRt9AQnbyvfhnJXoSiCgwJqh4m",
  "key13": "Qo7kuXpkdHaHJVFjKMB6rYFoUE3mp6mfSpUQboKecXPFBTUbyvPJo8P2JLMhQfrCREx7ejnmDiDtj4sf69cXhpj",
  "key14": "32VpYFnpNWMsxHTipydgSjr4krUuQbxG1uyFV4hvPM3EQ321wNeBJtcd9ThccqqkZnhEaP66BYhvjkzAAQ6ccnBk",
  "key15": "5hb5uL2qsc7BA156oS8AsbMUkWNpUncdEgqAUu8Z84gVsThB1mMZi4Z8Vsmifo365kad7VAxvp2Q8DcRq3Pgo1sd",
  "key16": "277SeBPV1QyYGuHRmzP7nwyFiRiQs9FMXvTgJVYU6tGYT4aHNeuDT3ngX3saaEizsGE7gKmqxdipKSoSQXKtGKZW",
  "key17": "3uDAjrmrr8J1zGWBbHH1q2w5MSX7J8roUPAWec1UTgS6nHm99NrVas2TsYz51KbMFxJrhWqq6bTxTGTD62EBqDHH",
  "key18": "5pW7zcnVKL2iBuFBw8t4CkXMaNbHQKhuUAx2BaMsaxYPWDX89JrUHSLvMCXdocdhkKr4531vpFET3qsZ2i4ybT6",
  "key19": "4w2MM2JA8CLkvgb37C7oXWdX8omY3zt5jYmTF6V3BMfDwzfqA9ohKMv47eyRXRv7pyL8rS8gACNp5i1ha57MeZzU",
  "key20": "5RgTqjNNygVJi3aYVXC5PA9kiheXHm487f1rWvGrmtiFS9HRXNg6Eu55dqTLoRZ3YoB53V7Nszup1EC3Qf3CmrDt",
  "key21": "2PHJr7edB41x2SETbM1bA5N9CBuiyCHEfms4qHThaEwaFkVeRnZvvY892hY4HnhGHLbUfq2mZN2857b4U7cDp8MG",
  "key22": "2emffF4ENGJrFmHzgq2Mwj1mZ3A7EmqLUbeGmG31b4wAP1GQogaAJrU3wENYCnZUq2rDzEARA7yEs3WGntQmdEVT",
  "key23": "311dKvVLifsRy1kHHSYLXGfrwPEs8rPFM8PSzg5arPkWtavfLcFoHR6StqK7CW1A15R3yGx5UnPQWrM9dHhHMBWP",
  "key24": "5UQWJPRFhr58vRtR5x9LQ5xkjD7tXzC2ZDfkecqen62ZDf8Ab2D3oWnTLzT8ymc7HSsgKmRTcF9CQqxmV56gVL8V",
  "key25": "4x2sdSEwooHVpX2M8qSVe8TmyUmrCHLP4AonN8rcvddZwKdwGmP9SKd6Zk1CpuBLjmmCWhkZKQVebALXAXiGe3ep",
  "key26": "3158d5FhtZnN5Bmodf2cJvtYbJMWD331isMpV6dgihDgMKarQDhCRLd8MqFRAntQ44bXvHjFGFWoXiqUiFWJHMaD",
  "key27": "5uhqBZf9NWcQsUzLd7eUdViKbY3VZCyGMoECQfiFdF35PSJSqpV5MK7V5NRqKJKc6SkUPHvdYLQXkgUDbozJqagp",
  "key28": "2gEicLtkUrx7GPDnRxfR1fHS48H3Hze85LYitgD8ZyfvNPobrMFQi421qvSExzHokCbX7pFPqweB9YA7MajVFET6",
  "key29": "3UZJ2t9KwxWbbTBLb6RRpMCveZh4NwLpJgLAuqoPkNrRD2MYg1dZvHECb2YVwFuwHG7vHf9sBAgELosBuH9rQyey",
  "key30": "4y8pACiPZhF3Hv55ScvrzrNtsM6BJqfp8fkajfyELYqWgk4Vbm2X3Dsg9JyF9VivCmY39xDeU9Z2afkB4Y2GoWKK",
  "key31": "5KCL8mwZWwaRUNCYVbJvwGossJR6bfREWqcCyoQgZdEUbpnS8og3A7wHsyAy2KeLqJGykpx9mqxmie9H2mLM4D9e",
  "key32": "54jkDn8Dhfdy1x7aESv8rrWBx7cwLPxsUNYwMCYBS7kb6bw35JSRqVjDi7yCaQx44jQ3vpzsJQJjJjj4cHM9s3uh"
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
