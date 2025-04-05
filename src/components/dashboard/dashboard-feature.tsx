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
    "qT5b7t3xzKgSQun497aLVK82Ks5c6MD9NSMjTBN4ToRUqzuxKLwkvMyVN7DDd76vWTgsyTVy3ziqhLoVtXVyfn7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61Xuyh5AyNykJMxUA4swJdaTPQ384bzYTZaSyTWdSq2ucCcyJ6qmwEBVwSjucbLbYeG3o384hwjhgx8V6CEquyTK",
  "key1": "5vmDrS2Lqon3ukVrnRnZNT28yzjLxCDsVQP6pWJFQo6LowKku43RqoN5D4HN5yauU9paPzzTM3jRxaZjrdV7mGGk",
  "key2": "2LtRycFS1BbftWPEuroCPbpsMZ1p5X3JCVzXogo9nkHHFKPrAYchr9CR53ZvBzYMz2nVcHi2PyXaiDPa7tkMLDvR",
  "key3": "45wsJoByc3SCzu4MUU9zSZEYHqhXsw3kN7N23S7BJSb4vCeL8egZ8VWBiNUCZ24nNYSyCbs6k1Dfdj8bqe9C7Q12",
  "key4": "59wviFABBzgWqRTSnx95D7X32Tc2LwSJnudLwapCUrUUogue2Z5kYc6U38itJHvT1edSf7NY3jRa7zvLfBNx6mtu",
  "key5": "uNzabBr1yA7esWUvfZ3Y8xmkvYBSNn3xPjFasNgA7iNhFCFHu5EWaSa5nhXv1JC1sZTrhnv4NThDxWoiwNz8tk8",
  "key6": "ECv4jnUHFGxbHNbXUviVegjNwsNMSGZ6M2dNYPJ4ry9okzxPVa29EB71bBmniEUnJSgGSVvCxWs9jnNPeBxq3uL",
  "key7": "4oAqtNNKUnJBK2PtWSBLsWGDjYAGsN1GR7uB8CtvC17kPuDAXskDRyisA5yWL8aX253wW9QwY6Tv9CmGFvvRTgJo",
  "key8": "RfdjoWWAoqdth1NG7SwuT687DQfNoVHrMCRao3DNse4ZEVBEqWhzYJn5epcT1T6uxTast7SFZVucjJYY4tzLdCB",
  "key9": "2bpwWNTPTxEFZZDBAk8APYyAf5UXNcwJ7uzyc2JF1D3BSQAg55qGELi2G8sEBRantvd5P8z6G6YqWp68k2nZmqpD",
  "key10": "5agSg3GBB5mwvbkNU69BUrmpZqMNKWZZgwqSE4Bot4ocKFJnBBJvCzZYwdX8WhXuMqwt5BEKJkrYDy248EaKSow2",
  "key11": "GiMwjrvgCaGU9SebARbKYZY93z2zGeggmkJZYGsHCo8Sb8yuiswiJ6sE7qdKm8djkjrL9FXqxfnJSxncW78oR61",
  "key12": "2YHdmhVhb3YAuPQXmgGEhgEYpvRyMsMXVDj8LLxURh9skNZZxxKNcy59AQBB6vdYM5zN8FMic8iaYv3UnU985K3X",
  "key13": "3CRQhgMqL4kbLU41h8KrTK4oBMfEq2myUGRbp9K5nmvVfnWt5EqmbCGURrWqGsF2hJEHHDwnk6us9e8r312zmSip",
  "key14": "3oq1UbNXYDrHY3YG7MX8aVXxbfXmhaoPPcpH5vm4njXGukP214XSPaxUchfKNSbUYXnUiQQDeSRksm3NLV7fwFZu",
  "key15": "4wVdihuiY2cJhYs3Z6sK6jwZUMxMN5uMaYbdoJQY3xSUK6QfsWyRYXUuKvAHgvftNCsuwjBa19qk8FsFJdhYSCKR",
  "key16": "mxzzgejf6zGjxFAkfiz9RPMf6aMAUKScBM5Ejg1PeSUgDstgQRzQB4zim6pFSqc4ZvjoSGRbAk5LmSLM73UWGP7",
  "key17": "2Aevw2LRwkb8JnAX4U4kUB21X5LpozLhDUoT9tcEfqg1qqVMNwLEx6NwTMRXig18U6CErK4WBrDaMPUN76wFrJ91",
  "key18": "4NNJ7oi8QfKBR2EnvydurcHX8wXyPYaSX1zY2dghFqYpnSYyfUs8RYcnZ3Maec295NpkbEgHSqvq26grSYyJs5Zr",
  "key19": "5fDMGxAU6BLHTaaSJ5ZEWbTxKJu8KXMai1dtKgSMHUc6Dot25E7wdhrvHumCPM6nWAKeF8TbW79jTFhYu97uV2TT",
  "key20": "5qBge9PoPhxQQmqi87WQZ9gk6pn4D1sbRNp5FEyFmZPMQAimPGeY6ASMfKtNnUvMETy9vqyZdwEtGGfdugpk4uai",
  "key21": "2jsA4wiKJqKHdaiTgLESa7hkWutPBJm9EAL7JeAHcsKkxJb8crwzXCUVLSN4GFhYiuXo1QB7L9yDTipZA73y8Fjn",
  "key22": "SNCRLRyLb8trmD99FsRwAVLEVSreRUj5prKCPaPT6NxHmaZ1hZ4PFXjjyAC9UJR5FTTQAme6pKaWGfN88hdvKnH",
  "key23": "2L6BHxDdhi4oa4YSJkUTjDotJ9T6mDkCeA24aReWjuRdTwabuXmBiSN2JzvuDuPuaLZhZ4J1eBBLkkum1y68pCXM",
  "key24": "5YyKYMx2YMgewH27fvQNAawTLni8YwpXP1vqBHu7pxGcrm33FGqKC8YxNcziHZmVoUdoDRwd8djXbc9Kmg4co3qj",
  "key25": "3JSyDeBudY9hDAgEcUdX9oGpGFydfcqJ5JZjA3dzTTPvuYfnWvj1HCVJ7yfyyr2covxPA8eiRXSM1Ab233XZnkds",
  "key26": "4Y3PM9hNFm4Pq1vD6fSVA3sYH8Aw4hE7tLJe4NxtuyBTMmN932EpWjxx4MX4HScxr6VnLbfv438Ud1nKAYQABMdo",
  "key27": "4Nw2jF2WPTBABHohkiF68K1UT87Lrodppu4exm3mF3QvhxvFhYeU5WLJDHYhFwfBnmUm1Gxa6McNWo9kGdpWivX8",
  "key28": "3QreuRcmk9sQXrLRExFd249TbNFE1PutyWPVaGYN9659jvpYU4smHh3383eEAZnfR82xRMCJRkZoiSNGocGZ4aoR",
  "key29": "3uhnqZ3M6SKpxwmq2rzRrFTqia9YVXDXD3SEWPApAjhxmuCLeBbppJu6bh9XHC8z4jAnwjs94TzAq9VuaYTWCZNX",
  "key30": "5GAvHhELqNmpP7NXcWuFyZxjQf3RVapC1iuXcsfsiZS5CpiwKS1T8hPrkWyjn2WC862a8g6JXp5f9AZczjMTgvfy",
  "key31": "1nYMLV9XdaUSpDyDKWzZRKA8bmgEtCchtcty4r77bVdwjRz2ymrujkZFtGptDV8N24qReczNf3jx4hdK6kg6wn3",
  "key32": "4E85qsPK9C62dXqmncPkLEH5uuqowFhRw3dVy65iFMQhEj82fc9YBTeCVFSQ3c4a5CV8HiHUK2WTXFT7PyFF9SVh",
  "key33": "4cA3dvgXBTQYv2Ac1KZ72MVbzPFVBqnit8EcBvnF1J1f6BvhLCeJRQvr7CAdvAEaJWLy7FU4UCb2wkNoaGxV7Cs6",
  "key34": "2txauv1Mqbcd53RFJS38exAKmGPjB4UVEvAKMc9hNj1Psd6GGmHMPAWpZLLgTGx8uGZb9y6eiRsG6tL4jETAvSAx",
  "key35": "wuEGcGS5F5NCmE1tkrG2E7BxcNtdBtcLdu5tU3VQRJwfUDt64GEPeeuC3S1BfujsFxsjJ9HWsL2DWjezhzJcmaU"
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
