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
    "29btGuLw2w5Qo2hf1WVCpgAoMHdyL29hUt5DxTK8EWXsYNSacnXFRWGyLHLUxnrxXrSK8Vp5o64CyztR4tQK9EzQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SYms7fLJoRueWDDGbWBaKcCioNL32HaxutwfdztJZAyswNz3U5DELGqkLEKoM2rgY4Qedw1hZFD9uXYf39RDfyo",
  "key1": "23ZhFRD7DjkUXqgkRoj6rVE3B2WQNYHoNPu3xH73sczD3vJB71rHHeeDTUj3rCxxcw8RdAx3N2eoSZidjFTfsEr7",
  "key2": "3nYXUkHjaeahvGZgPj6oSBJnYBadeEDNZvpmTSmYaT7aoxvsy3QZDVQM171gTTV7eiSq3yRnBeA347FXYKaHc4k8",
  "key3": "btwzJuH2ELVSv9ZE2Ps3FZxjqDo35ncsBsaHkqNyTXwaDeMR2PsYLdKUge9s3umZfYcSghANY7ansLqK4toTDDE",
  "key4": "5FoM5jMPfV8miztLMRk9qCNssrUtJQUujE9ZYz3Mj81j9jV2WYRYEP2U1yQYoAZnY2TiWthaphXTsRvHhGncT88e",
  "key5": "4bfYGfEqzo3oieDCb7SRm6vXcw7sRLvprrpLEeqSCdrRaUpmSgJMcFv3LtikKNGTzvxkAKM5EvRH79cqu6PqYwYD",
  "key6": "2jUJB8kzF9m962Pps1UN138RwTyyFkAtme2gg8jbWji2nuY4RYGaQHEmisKA1MSw926CNhxTCgchqwt5ZvaWHHUu",
  "key7": "3KVsEzidibXqnjCSDAEVonVBvr3eKE2Kmortkj7HDup72afmprGRtLcSxKJjz5LCunYdYbE5p4u1TXBUK9XusKBi",
  "key8": "5M9cKZ7YPQFmN9nuUqgmYUruGNSci94t3TckzeiHBuueukKZDVCSvAnQfWjpmLCeULajFeC2nB52MBd51k2bm18h",
  "key9": "31FZvALaw58yA2HyuSQ23Kv9m1fDy32zyRzHtdnMortzNezR8AKStbnufHvvFXJZcfmmRg2t7jWtNJTqn4it5JTv",
  "key10": "4FWoBWsnV1HBMDbhedt4vfyGhUMK4zopNMM9sQLdDRUxDVdSMofpxs2AMZxXz8GaEiBetjSH95cFrPoogbVtDcAB",
  "key11": "2NfLDPQYgaCzXjMt3gZwgZg5rWfwpKrYi28fWjgepiABwLTZpqSHZW8yrBpbUNLCjmRu3MexypaBC2YB6xFHdVGc",
  "key12": "2mqYt1v9YYS67FEZwbnFpRXnuR1QH2CCC7AFFT8qd3iXpEcbex3VAUcUDA8HdNF7y5QntQZrYnTUxbXEaNFQAPkK",
  "key13": "4nBAY84cTwMitzaCkX6QxTKbrU865bimW1ZfCBFaiuQ64V1eLaqvXTQH88zoA2wSd8PXaFiMYoRRyCzDexUSyMBr",
  "key14": "5kgcCcARdaXug11guHimtHSA7ATZgLUv3C2HokKPTxaThJ5NdsV8S5wWK396VXE895tLXhsW7125LctmjvNYG2d6",
  "key15": "2iXQEBqHZwxUkxzptevLL32HNDKXvpK329mjZtgoDyKTVWekEL2B7d3uGgM9roQQYwMW63PSoBdRUftucWJvaexM",
  "key16": "3U9riMXDa5kZqvj2RKdcBPywCuKDj9K9vxwKFbZoDL1NW8WgGf2pX1qUZMaZ5tdQRyrAzyzfpi6SnSJZsTf5pc79",
  "key17": "37XpVNYqnGE27QQY4Div5aJnfBHm5VA2r1t8hJTNAZVsQSoqUizt9METNf1kChaQ2QhKLm1uFCa4mNF5fyzyoC28",
  "key18": "4TyLzQNJYTKz5sePEUNMRvgihMzLpdxvpF8wtJLBy41MbspZ9B3BK9npXqux1LiEG8utemLydD8pon1uac5DJASx",
  "key19": "ABPeDQoMCgP7wH49UXgT2bxdqyJBZE2EfBghFd8y1JLGUcAtdV7R7Q1FoREPT3g1Diy68LB8F861HG4suXpfb5c",
  "key20": "5TCxv7yaRpcvfHubYXi8ht9V4vLZpiqo1Aaw8f3p6ycnBczpqvwVyhzGTBNpBoVUBZvxNc2k7NT4q96KHtkJXstn",
  "key21": "3Eowee9Hu84biaY9DzQeeQzXeRNunuP6RoGvacP3JR28XnBfWZfCkvvL6ztK1bmTTZ3fA8ACe2rMWrQGYa1faR2t",
  "key22": "27XP4s9UdhoxhxFchTU33j2BswSMAZjw5ikWzqDJzhR7dXzRwe5M4PcT9HwQFYxKN6K2AjHXWr6btb8ZmxtqERhx",
  "key23": "2BoW6MobftSkbvm8dBi2HuwNMAhNZVekjGqpF6n6bZfxiGxpSgTppXRxbHN1LJeboSrcjpHh3DZRUw7s8BJzrUFk",
  "key24": "4GCSERHu4Fmq4yVeYCCpVfsJykMDkNAm5gm8BMEGGGyCJQa9TgZtzhe3oicN2xWoBa5G7vnb8qBgGE9xFq7u9GkB",
  "key25": "5qwea9UQ2XQwJWeZDK2iyz3tE1W1j4C6SDJm392EwhwQvG8FLAmp7mt7bQVhjH7LPvNZjLEXKCJY5ydd33BA14Yc",
  "key26": "5vGJJB52RAK31sNjKS6UeZjMN3U8i7XxXd8yCpkLbpsgksnvR8DeUjdjoQuHvVVvJMMWScXvKjTs5gjbfTPH8wdf",
  "key27": "5dvZGowzTzpDuY7VqGCLFEb3gbhiwjxRk7R94dGvqoH9SgqyoDeLUJEDGJxvwPxmFwq2zLvfPok5H6efpLKnyC4e",
  "key28": "4tp2Fqc1Nq5gumWAb9wzX4RroQTqdDGV8anqnqtGQUjdQwJoDcGEmw1AbftTZYnNxQPNvoAx5BMSbjtV9KRB33k7",
  "key29": "jf153BcMQdx5rP4ojBpinqn6VeYDZRfCmkEwtfWyx5BhY453R5uY24d1FJhg1BYFYKmhj4zwYDMzPejEVVi1isJ",
  "key30": "5ECReW3Xb47aVPXPdS6SibpUbAafAcR6KNjP1fW3Tam6y4qt5aFLFWcAhKhrUKAgntZftUqTnR5MYvjc2Qjodav",
  "key31": "44v7qQQQrt87mX6Sa56dNaA2mXE1Qa5fVjmHLE6aoAEXeJVZSQNdbwSkHTkixVxgsZ6a9Hxc8wHRF2Fnji53b2fD",
  "key32": "4Cr5FYsb7Qec1WcxPCUVJ4LFJGJa2Qztj8yLaJWb91qpzf1x1qP7ZxpkY9Ld8SKWd5eV7ygrLZzxhsz3qoguXxGm",
  "key33": "4GGXZmUNXGRrqWzVixvhZdsMrabGAbci2Fai8JG6dZyJMrpS2fkmCheMjD3oUts45BqVk4UHAPR2sNMJTdqoLr7x",
  "key34": "5iR29YswUxTWLA1T4U4Ya7q6KsLcKoGBepUhYhpEDKvXnYUAi1iAPfEF5YEtWyFiL8qvXM4KsEYcSQNKhxt1FuXr",
  "key35": "4BKQ3wbUEdFytxpyJfp1aXTBFKuVzzFF98jYY59BXzVE5vgFxJaTwhf62EKjqXW1FhgoZ2we3jMbTk8DttBgraxS",
  "key36": "3XLaFpszWtdXMzwuHjmLTADqyoye7EqDt47nN4r4QYyfK4T8oNCEu3PFyTzR1mqWm8UfjUcLGWxXJ9BRFE9DgyFw",
  "key37": "svHKvdz3K3QjgiTf4Q3u3ggsetCwmwPXxYZoCJoKdscWKjBMs4Le74q7KMahn645VnoYadktq6FGShjMArYiEjJ",
  "key38": "3axmoAcdmepctuwTCPsKac2ohC7FXtV92SdpN2jZR9T1yeEyQHCKVjxMLynAWdb8QA5SZ8MYymq251mtN4Nn8kVv",
  "key39": "3xECq8XjuAgvB8JjAyLwsVpitrwKBQpMHaPfuHCyYvpm3fDhFSbJNgTjQTymjj4CSkT2YXC9U197QvBNyoAEGMSC"
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
