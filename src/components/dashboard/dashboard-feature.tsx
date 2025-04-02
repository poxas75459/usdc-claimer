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
    "4KHdr7g9ShstTXEb98zFGxoFomy7SFEcs6o5cKxDVkiKfCydvxaJjX3YJYZWEPxe2WHzjnXNoc2vekhmB2PhBoZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vNyXkZe9rgHur2wA9NioVA8dp1DPXzpC41B2ytWaWni5ML7A36PNphp1cvbfhajpYzCdVs2SebjUpTMZU9VyRuf",
  "key1": "3ibCrL8e2annP7uKUxifCHgPVL6K54o9KdJXkJheXWbCkQP1hELzec9vemntQGcpPVzQPGL9LGeR7NAeFwCH49HQ",
  "key2": "uQE4ZqrNfsS9neYiXG55i1GyK5GuojK8Y1d6YjG5Wj5hXhjSsKPZRA3iDrxfxbdMrHCQNNtAvWMxtCGVuycT1gv",
  "key3": "2fS25Xw4JqCZ6iocRCAHW3E52JjTxvLg9CJPZsXZp1dqTC1RhzURymwkN18Zz4G7PXfaJsxtZhfT6fVjwfkknDAN",
  "key4": "oCm3PfpeFEgXTXWwKG7n8GHwLorcnvLEb1h4wZxyYop9PSamjDsRenKtoukRAx9MePTd867MWHEv1Jemk4zg4A3",
  "key5": "4MEHFiTDVZaSqqwfKMacGLTTLAWpXvfo6hhQ4nTJqAgggxspbPCzZ8ojAcnN1xRqS42syoUUmitSR1k42PjPREF4",
  "key6": "62gAUqwLwY4rK7FT4PH5D5o92YAoUSeh9e6cC5nQn34esLaqR4BKaiQsmWkEsnhDhxp9pF4jWNBbpYwAb31GebEx",
  "key7": "2tAcRcDQegtiac8Y2Lc4122rdJoZWntxoVLr7PnxTyc5bPvm65FXP28GaMUs51wgKjmcGB48WtYxwJvAgJmyoNf",
  "key8": "4KPM3Uo4BLi3dDczTSgB5Mk9FfS5gAn8gMUypnXgUVNjh9YwZKVj5c29v6b9yUqcaRqzsiboYqeQDdALUsSURvbe",
  "key9": "2NqYt7rfvNj6zDaQo9wqHc23KiVDys1BQ7eVVazncF9Vqna7uoYQLx3xxRX6BjuPvjjBqHLZpGtwSRnh5BroVNiu",
  "key10": "454ffQsK8jm6b8RqE99vus66HqZmTBpyL6XQCqLS9cbWwAFcKhaDNXtMqDokMBwLguQpVgn497cRkmYRbEJmXJgt",
  "key11": "52NAZzqPSF8K7VzzU7Yh9bgN5B4Bhyga7Kzn32HhtHaakgCZo1yrMAnz7niFYnXhpsAuMEhP3NwFMxfMqsyAdj4e",
  "key12": "4w1RnxS2GbRW6Ep1aaKDTk3eZjgH2SzjHCKCHNnYgBakTrkpaMqBiDfsLsqd7hvyzymhbJNo8W8JbkTf8Frpmd8v",
  "key13": "ZvkUoY9cEfTUvUj7ysHkPqXZKk7Zpuq7KVqxKah5basFPjo8GVoJmHVLdEWcfne1Hn765Ya15dKHiZe3rskPZEu",
  "key14": "5mpsJtsYWsmZXpf19yVgtx3WHYgZ96zdvkVSjRxYTvonJweQPNSvxQW5bjmunXhHQYEX17HCWj5Pe7ccGzrFftpR",
  "key15": "2xMvPWrrKAXSBQBaGWbc7Re2Zviq4b3hxcKUGjvUAXHKzpgBQyTbNKoSSCB9ZBvaEF1SxM33dmS44KYYD1VD8jRv",
  "key16": "5QNMaVjMrnvuFCgZdkBFFnHkvZV9wYQxWG3tuy3oZ9EyG9CA8QnAfYZ2MdML7M4hqRtGMgpKg1eP8PaQ7QcYVRBk",
  "key17": "3ShKmpjr4mipetEVjHiVivAuhpsGM8miEwoGPbSojrLyZagZuSrBeAQritWjvqPjcUgtLycpqghAHrTcJMcYdDiW",
  "key18": "4mMYrsJfAU4J9BMMv5L6oRusgtEeUFZ8uz513NRqkhhUniWVgxzCvrzbkxAHdBFxcHzNp4wRR9AeHsXmLibZZQ31",
  "key19": "5v3HbNokeSEMnsibczBVNaMzYXWXX74kMb26rbDbNPxRaT6LprxybE5tyHRv3TZk8hQvcXYAE8eY4LYQa6xoz1J4",
  "key20": "3vXZLuUSyZpZrUaSMsKPgw9FAWTVR15CvinGj7LBujos1pbaGAipb9iE2ygXz8cj1CK8tPq3shc6csvhi9NDPsBY",
  "key21": "ntifRcizEGzxHodRTZsafrJmJvDFf3FKpuqGLgv6gYnFYgPiP6tAr74Nzf6gYofpD5pakfqUYJ98s97ZQDdKDad",
  "key22": "55zE7t2fx4eFDQ8Bm1SUAnfXbjnyqxR9z8EuB5jWhWeh7MEraiJ6ZFxWfeXztPch2p4zx4QEJ9z2vmmmyeJCWQ5N",
  "key23": "Jd2UwdneNTRPBqFshWekGZdGJ581b11QXzLw67JeRnQ7NaecKma9W3cdjzr6uT3aWDQfEJPDDij3FVoNqJp1XSA",
  "key24": "5KttumiGrPLwT9GTabnf4v6Jq41SFVM4Lgb8BRZcTSrnA1bwTRqwBKm2pXGtYAmQWwtfggSvdzwKHMnQ8xx4rTg4",
  "key25": "3goBaTokmHhQNTKtZ2NBodb2D7LxRwhj2m2SwMqRyfCo9PFQmExYgnwmWMsEtCUbExjqfTVcbr1M6qj2AcQfW4j4",
  "key26": "2q3hTnud5M8MNZTXjMJvzVkqTG4sxGFQVnEMTcW5smtqghMygxxNJrBpoURTx8ScouNE3XkNAXMUNSGAcGneGkJa",
  "key27": "2FZDAfqvqJNbCQCV2pZK7PC5xkv2xuycxwctENBCh1ryng7YpoDaM1rESajYrbybGkRWDT4sA95JJQvVF7DQrY9J",
  "key28": "5n8XS6vFFhfuYYT7btKfjhHGMNVgChuu2tS3zmAQkf69xmnHuvhCgUZD1sidLf5jBjUdnfVcP8yEufHnWPph6AuK"
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
