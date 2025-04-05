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
    "3jcSAWnRnzg4EnhKvtzJ7tykkqboxPnbMxKB1sWckP8UQyPCXYu428BpAAXYqoVx3hKjiqEoWkQQBcyhmj7PEuyM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r8N1GU9FTWocWEEbrHVih5SyXjtxmhEfv1yDNQJLiVX9Rd7LzTBPWCsCuRd4fZFUp34pukg4MXsaMypnriVEwvb",
  "key1": "2C2UZa8kr5dwLFqToYNB1Ec6RJcy1wEv2yJM66iJkvVk6Cw7zbjYa2BUk6ubwpxeLRAF9WAGPRecZrLwhD9EBBaD",
  "key2": "37UmsCiubuEGbTjkgd5uiusZeFmadtYLFPi95CGgZJxa56UfexSkYVg8sPcyp49KsQcC1h5rU5STH2e1kvY7VPgw",
  "key3": "3JzZZFtuYreCubJGfLE9CW718ChD7WAGvGZUWnRPgbscTmVhMyEKY2B2ooCphSrDgnwrfyxj2Gxr9bjnWU7WvFfg",
  "key4": "5WgibtKdNDtwra3e9a4Ve5fqP7GYybeMsPchfCgYGTvCostRGSSbkoxaxa2tLrFSEoeXedfbg2nZEZErzcaNkGGr",
  "key5": "5jB5978MQkZJA85L5QnLBsa3EoEi3YVwDrNsKcruQJoMAxyGutUpm8SYZ358VCXetXPLPuKa9MkLh6UcV6mLyJkX",
  "key6": "58ygvWEbY26Z2qQjB838BKaasuyW3nqcLmJFZ9KyFPPPCfHnjTwqYZ3oDr8vMRDnASnVrZRtdomSVvTT5vxaJmo4",
  "key7": "2LfrkHU54XeaSU5s2nPg3vFYbZpNuSTpSvEE26DArSYf5G7sEDV7AuitH3SkX2BkL5WcASgP2CXK8Udt1KYvo79x",
  "key8": "2ciyUVggvbLDd22sLMHUvpaAhsKgLjyVNikyQCbyjHfMioJy1HWty5DEbvmnSPMXWC9zM1KguZ5CTxDAq1ruTuut",
  "key9": "2aqN6CfEN7Fi6jdjK5APxwdpDhpxhKwbVAzdpKmFvVyNEmvk3qGhV71Xnaiy1kSfjCu7UArTwPvaVgcvfePhEtp4",
  "key10": "4ztpVzTQWud21BerqgzQFdZ7NHAcnqSDNqbjoP2LCjtvHR3z4GyZkBALEepP1eb1uCwtJFeVcjQyEzq6vtmmYS2e",
  "key11": "4kf6XXapERdSWTbdWmz1fvBxoB2BsTXut7HVDPX2wHXftetfohBBqWtbbn8tvyqaEdmpYKKapnRFR68rsZMZkbsp",
  "key12": "4qPo7JMSQu7BfsHRcVw3hS9qHu6vrtXDZ5hagkR4aQLMijgUMKdXtsj1PBESgd388P7uJWSNvujwE5ssZke9v2S7",
  "key13": "3A2KKD3rvoKJ6BjVUbWPPtRW7WE53pw78KVupFk5Y77cR18DkMHs3tLUiFy81njTedrmeJ7j7ewi6BXfUhT3Z9xk",
  "key14": "41aBmSwfeMwcEdvJa2P65TYRMaRzcRMoYZAmf5s58yWcbR1zNJ4x4vfvZSVh2a8PYDStWbY3PvKfc2ZjZF7X6KV",
  "key15": "2fLUr3bW4RcijDyWezXKQ1ZYPEDwrwdPvgdmhtfwbfAn5DxpWiKZycXfejEY96tyYh5ASrhNbLJ77x1ueWEVnZ8U",
  "key16": "5VLXRBfR7ZVKQ9RDAeVGATAwiBbCzwvKebnfCkDDpYYgHKzCDyoKaSwc3YYFQNRgr8ih9LAY3SKSAvuzL8Rsk3Rq",
  "key17": "3ksKaFyhcE4uaH5Y2Lpvq8ixgzrBNHuuzgMtqoU47qLJQHhEb6bMS4JRxjqNUV7MMqkLGZWbKhf14zZ3KUWLFuGZ",
  "key18": "379NbmjmaNZ8MJzJmpKkdXybT99bbbGSDrhpQwGU6Bz5mtaTFiVs9jNXiGX2YisiFoWMUM4iBNBJfa8CiXJktQvR",
  "key19": "3CVGcgMQQBHyFZopjYqJztRD8TbJG7CMzXRTHtXt4HmUsV3CxQbymaNDvHbg96xypyjanVsjY3JLmGA5hiD55SkP",
  "key20": "saXyyx3UqfCgdAaqwu6Brisu4cDbTBsMTSSYVw13zuyQTeg6WT8pFFGhEhQUCTmTjoRAhm2sNfztXaaLhBv51gy",
  "key21": "3rPGWtJvjvoyjDMr82epRAKEDd3S1RiGCDXhuYyn4SRihv6urCqpFbA722oSdbMuouMtjeVsd1mrh8vV5FgvHsaQ",
  "key22": "5nAXFoQZeAx2VJPekJAKtSbKRuYPKeigprbcFSnf1L2txr9GvT564GZZ7cwzChRPQ3hn4k1poM7CSa8kHHM6ioH7",
  "key23": "2WQ1EeDRuj5Vm6KBPUVP4bMn87r2Z7zxf5WypNH1pEfgWhBTvHVjytzF1jzepkAdYPG6J2hFGFSbwb2zWN3Rvdtq",
  "key24": "2DC399htd7RrtTmyfE4ruhkG1JXL1NS1xKW3uiT3BZKv5CAf3mmG9jwLsY2UVUSF5ENbaDPw2QTwBwKjR51nFYED",
  "key25": "2GrJtrd8EXwKv3aHMpsXj6omXFL7n3eZqksMkMzYKacnrwiZNEQ52w7EUVHtzfqMNwMKf7pTWQG9MdwNUfxGAJVH",
  "key26": "2Bgg5NHB7FWgBe36wjLr6sfBtL85zUSyD25ixfNhT4W7Y9Ydpf2rvYajRJ9LzCU3n68EfcLWoTHhVzCkcxXNCPuy",
  "key27": "2ZrRMvE6TzcKdhFLerA6tDvV5rDAYUBib6L32Z9jSrCWSy6M25jjFgQ7JzqTMsENhU3HA9igd11U9mtnGEPR5xCf",
  "key28": "78nCMYtuZCwWhAjvx1nGazqVwLkWj5NGD3uLLqdVtUhYDnB2ovHoRng3yVGJi66zfhcBAE1BVFj8qobbg6mUKTa",
  "key29": "4xYgqpKVYesTRmCMSdErWdpJw7JshtV36gbeg67gKqytYAoxPZezUoZ2Jdt5hp4TH4mfDtikvvsBYyGrTCxJtR7W",
  "key30": "4JjAF7iWQACArJg5Mhzk2Jwgq8ctxWEfj1hExr9p4Ds3LWxVmqYLEHAy676StsnQWaRgzrZnrQGnatYifa9pg41v",
  "key31": "4yCoa3gWiposFuqP1ZVfo3EZ6saHiHdbHuF3TWwhg6HykDAmoBmVTrBdArDjT66ew8YuiqonSDyyzyokgfh5QPc1",
  "key32": "4BPCcu6PGieToG8VZGncozDqJ8bBdi31pi1t9KHuEkow444ZaM4W4n4UzXNKgg3PM7aUGM697Z4Q1GfZMGGv4iZQ"
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
