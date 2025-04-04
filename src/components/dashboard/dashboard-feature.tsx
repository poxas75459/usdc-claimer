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
    "3e2nNWHbV8V3PxGwadioMKA89sEA18B4BajkuhrcnFwg9xTaPA2Vt8ke1Ai7bMG4839TrfuSLrY77DKYpm6m92DE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T9WXu1DowNcTGXwddNVzTJ7oczNaV3Q7z6KXWQonzWehQ6SS165wucXN6kQYUdDMWJ5McQzPki3NVn5TZ26RXAo",
  "key1": "3giFs6oLZroNVa5CrUV7Yx9FmmR4nbf3nKKWrqWPQ4N75gNYxZTEQo3bfbe7KjLBVkqy771HVPzULZu8UBkpPJts",
  "key2": "2sAUZ3PwrehWdC8xAfy7AaUVAhudD8j1rbHtVyM4Evoay59KwTref9964DZ2ECaEiAmtpoGzNsnJLSPDa6vGhYAm",
  "key3": "3obLMMNBUMLsntN8nTPfjETVFTZs9bNnefQoFngtafe9Zzuk6pUff73CV2nruobmfR4Xd4JLSRfBHHXmcHtBWynb",
  "key4": "3s3VhTvKnfYy78KUCZk5DwvTBwGZqj1Hq8qbyUEkaWgQCKkqPk2DMRydEHMNFsGTHDAN6hLrYmTLB2NcSpcWkDT4",
  "key5": "4Ni36MkPTUpEjz6Hrc4UbF6ivfqpzoJWPZJAsYNxBoLCHavcJVViDYbEUShj9uky123oSQocRr1JVrsN613SNWXG",
  "key6": "4ByuPGb1E74dj75BK1nTt6gcxUPjt7PDvQhT6eLGjUa9GEijPtVeXHcZKuRx2KhwyjqXJKCNGtg1M6UVyKjU1usG",
  "key7": "5SWCj6C9evFnWEUSnyMegKMg6wbx7MR1iFxR66QXNDpuCEcH6wbKvzUMC2xC3yCJWn9h52ggK4L7MSR9JoVFdJfn",
  "key8": "4rtVjBBCtbgJeaTJNRBDdpkEE687HUq34xdQiF2HVSuEx53XU94vEcQbjib7zdHEg6giM47qHWGz8VV87JSyU1Yh",
  "key9": "5Fxx1T96xgJ8QUGvrv5tNnbVYKrWv83Vfq3Zbp4cjRjexz1XwZtRUf2rLU1pCv3P7tknawdNkwPgawHc8vGW36RD",
  "key10": "qnsv7iofikYdc2CsKoMzeaLyubjK5SrkyZGvFu4RSsztJQzTVnawSHE3gkz5PtGVWXTcVV1sdhPhye7yh2Z6AjY",
  "key11": "35rLi8Qv4s9foLWfhqRrNqr1ZGpBz16ffyqHirVfpcy9aPDzBpaj5VqPqkdKTMSm1uLy3RFyB6gHNMLKywzE2iww",
  "key12": "2JSYZEa1Nz6CnPhNSs9gQ2RML9Ua4vsSrgDBPsdHNogVDdvWq6wwgkLm9cZ2kiCkQNNYXedqTZLQYXhbLBkzwvWW",
  "key13": "67LYpHByEf4j7Qf4yFLfNKLdeKqRzsxnQpyKMBPUGs6YnSeuC9VRnpW5f1c3VMPztY15KpSY3A3q1zuY4Sn6ADVy",
  "key14": "5MCQnfa4KMeeGTY2Uds11CG5hErFQZq9Lqon6rtQM7gjL32NU4B8zRQKdiz8bh3sidb1zamfmBU47UTkRkLSveQe",
  "key15": "5xze2MbCnxVinWoX95GAcPSqsqUDd5H5PSZX9PX87htVqgtnX5UfvsVP4p2J1QgE2gVY9WUa7Rew347hqF7KTfDF",
  "key16": "kL9Nxbnpu2p4XptC5ymWxKQiZifsC9bdwpxZkEb7xRvN7ufa24NjnAxb9UuiP8awWA96wPFWJz7HW2nzZowb8kW",
  "key17": "22kbBPjbPaaa9mcyZ5RtbyWHLCdYwVndbJjw1sV38aZ2YopRXbR7tHDLD4uamXpeHa9sEmqQLi3TDiT2L84qEekD",
  "key18": "4FreEkhTRrGtpNt6jjXNWFyXFbfHWi1hkdzQY8JJ9rWWCY5yiLJiZ8yejKoB5i7mbrqEfETS6cxcN6J75546aBDY",
  "key19": "x5asjhSnmPxG1VHZJaaXHTrFVmb8nR29JwzJdv3SNk8QeSEUNYwCR6NhDRFN1BErMkC7fBpG9hTXq2GiSFEiT8S",
  "key20": "4yxoUwP9XkC5HBayrFdapDbbcyDVLFvww9DP8kXsJARidF7cx1717DgwA4fZtTZNRHHvarXmz9Qkf3t19DCb8Cci",
  "key21": "4AY4oEhkGJjwnPbsPWfDraZi5ePv9gbR72gKVkeCoENqLA1XZNNLGog85rRFaJURy2HHRcjTqEvMQURicZkLTFc",
  "key22": "5ZGKpdUj95ZfzWXYnRg2s3U7aWCqCo39i4fG78Af8x1Di8ura4F9zJn1q7ZiEnesKtknhRweig44s1VURrKEadpR",
  "key23": "3wWfbnwdF16abMvu3ZkN5Q7rSKP1834fMCPedUNFyFvMpkgPRBH7Wzxm73vFoKeQjsbdA34D4wE81tykvKRJYLEE",
  "key24": "x3Ga3jAY39CV4tPs8AMMcVaYTSvu7n78dgLrw8KRWryxkxMHogAFMaVCUXxXpX726VRdPgEaj4CvnYXVoEYDvLQ",
  "key25": "3KpPFebHRMuZL1RsGTsnNBuUZF59yL6iVoxCUWvMvWa2a8faaH1mqPFWxe1A8Lg1FHZsvwqeJxTErXhFKT1apHp7",
  "key26": "2QaDctrXArR4JPC2V9YddEHFJQjCbR42H5J26JSQB3cwVS3qmUjmgSmVFnW2MknH3fGGWmoNyWoJgjF15xyS5PGx",
  "key27": "3TVyjXDKXviqfKxvk6twL1onnuGHWE8qznxD1YxZuXjZy2GqrY4cu9ZwGbgKpJRKxXvQHZag2RXm4hdzAjkA8Zem",
  "key28": "2G1gA46fGBJvgbv2f3L1RDa7kKZDSSq5JX4mEMWaPiqVZhNy1foVXvmfkxE6KPTdVQ7Dufydiew9ykJ1yUJEN3mM"
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
