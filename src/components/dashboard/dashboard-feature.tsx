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
    "3AXWjPbdvrAD5PogLToGgVvdjA4noc2RkEy2zzLxsMdBPyztRjGZoZiCrttMedwis2cc5UyBaUueUSJZbQ4jcUq8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ynrL5zFzrxBH3P29kDvFpbikGRGe4gHes3L8DfYitjo8J7H3Yu9JVWcMQdXocrwsRQaz8pf5w7dFMUesj1mVQJ1",
  "key1": "d3htqRWT9KkKvdMmkq3cEVpMhGw4pYuEwLrLYvQDQucNCyoe6s4YJUzPkDgbmYjKR9TjRHnYADridjuiyHvig1D",
  "key2": "5jpcJTJVopZ2fYXq16qaL2MPD2kFzKgL6uQH11spR4dHt5FGHEMDBC6GS91aU1hZgg7ZCAgfScBsdk3wbMMFD4N1",
  "key3": "3Cifc6taDSKkpETaXy3YCKTfyj9YB1i8kGDJWyBEarz5bwQ6masr7AxRTaXGfRVqaUs6XcD5N5mV9S988LuzrFn2",
  "key4": "4h79Lui8aqupn34h5b4e5ZMxKRj96G5MA34rVf4jaNbWbgTVfojHxD65ysPa11GtYTkezj4SFoohcowKYi9r7YQn",
  "key5": "3EQnLXqmbEGtTYhFotnUH9LTbzaBMwyB6bMsMo5aNugpT5fx3X2Asqskgp59bTsh5aQC6NpJZoQzQkhALK4xGaCM",
  "key6": "3H5Nhvqic57tsbkhpmqp4qbVfjnUVk5ieBnopPXYUHBQt5y8AqYVZcJ84dyGo5M1Dkr36JjYuz6bacTeyqVwBFeN",
  "key7": "4Mooax6zkfsggfvCqtkNHQ2psXo3Tz8CbmFrm26aWY6rYawwv5jkLVqiTFuH3oyjqGqjmjd1YS1eUskJkf2vZgtv",
  "key8": "38scR22es3NDXFnDHkkbQwSV3o7An1FVR299DdqvpM7vr2GwNFiz2cm9dRcvRLfHsRYjVynLpmNqq3VcpKzi2yfb",
  "key9": "37BXaaYgdjN1sHeQ2WCZWm85TM1onCFVgfSEmYdhEcf76bn5yxPXZZEbR36mcaeriLXsGzoE1qXPbNoTyR5m3Cut",
  "key10": "64JEYMhuNzn2hBVkTofGQFSY2E5ThZzx72Wd42VpoSTLuHhCvKMKYhmXsCp38du3kRpbWSCDawwCJM23yh5aKfmb",
  "key11": "24YaVTN9BK4kydAgoZNmKdwBBFsz45q99kTMnsqS6GnjNi3HBbifJHXLikRckVLRj5BJkP937Q3Nkmmxjp2TQowt",
  "key12": "4sBssxphUAijb9wCfPQeJEhAFD3JkkTd4osqggsszyDUQJY7EvmwYj5QAYK1ps2KiFP98z6MmqFMDkntw29L77CN",
  "key13": "3hCCqB3KecfwrNLXAz2D6qfDdrPVvMQyS83XMs9nF8SwbpNvwrGFFhYYb7PMtMdFgMhmwSWg1HVTiW6vpsX8CTPY",
  "key14": "eKBbCWNDYx5QEJaMcxnE4r7MwmhkvGn8jzTcFxbo9dHhVmp6byuRMCapAUyyR6A7BoMMneRZBoZDuXWsPsRTYD6",
  "key15": "2KwR6BSwdyr4UR5fnU4kgF4JqxAfauvepx7zJgwaByJarSYiwKY3qGPMp8dZ2qjdxV77jX9wqVzgJRFk7Cr7ENNa",
  "key16": "5Ubc5fzC9tM4WSJtG1ZDAfCdpC6Q8qS2CdgHhkGqGNqg2d3i1kpnZhUMAntaKn4ydy6ubKFULjqBVUrytr8VafvU",
  "key17": "3eq4G3ZEtZFdNJPcxupbKeDqCvDzWyDTKSGqTgPHTFmgcMpbY6butGFvErNBhkx3iBQreKqyzxPQt2VdWvYtkNzT",
  "key18": "5iT7tR6g6Uj6cnLs5u49upVqTiVPKARML2TwgJ3YV3w7ukHDdXN22bSDzUACUM9bnJ6nEQ1EidvyK35Co2sUqvG5",
  "key19": "5FALsPfQ27sjaNVo6Af7pbE3d5CDEEk9EK417QnVF3bZKR6CpwZWesTtBMgaoDZgr495EtfssAQgTrQHeSoh6C2V",
  "key20": "2i8EtdCmrRh6PizaCTBD977Hb9Dt8SqFYxodD5qCiysybxNcyKS2iBtozJKYy7bsZsyDBPWbXRE1Dj8PcpPnzYpK",
  "key21": "38C3sqDtA9qw3qrWe8nqV8zsMU8Mtewetu6BazFbZfA3vgaKBBV6WrNmAX2Qkge9p3SnvD2idU4xYkNkgHkUZQdf",
  "key22": "451Y4JJmedF5evMuvunhsgYm7x3L7aH8ckxzMNRznG9cdD6jiMVGU8UWioGqSEcvRw5bbMjQpnjWTBMharHLvoV8",
  "key23": "4u7K37VXNjzoyRX7FdimxvtAzsNbTEr8Dn97Q42hxXQZmJPVasEwBNAgjEBA3bjYjyHH4LuY5PJ1NQfmyApDFYRs",
  "key24": "5ayh3y4cr9Ltpi8iVDPc56H1or4zUtn7yb4e2GQvrs7psnXXkxpoHjpw8s75jWg9n9b9HZq1VpqmvkfodGbc6h4e",
  "key25": "26Smc4SFWasqpRhxujfC94yoQ2gU31mez2xrsiERPUcfjQM5Myt5QfduLS7EEH3iNQ83hcGNCMquQcJS23McASu5",
  "key26": "pKDv4YLyRjWos6pUimJWP39RX3XgkdNQHLUZxibsihjHMMTHVWPUkrq8j16ejWAwGreAgEmX9Zjg2UPsG6gHrgA",
  "key27": "4rGTnXEHwL4HV7wYcCr19z2vfAqWArwkzQ2npARjVsPwjfPYrLyVkf174KpPKiqrRBT9dZhMG8yt9gnyPHNyknFD",
  "key28": "541ASirEGoKrwXmVGqVDxViXZCJBuj27RjB3qhrbEDRW5EEuUcZqDzEJgN2RZdCd9cA2YBCTyHQiFPxSzCSkFQxn",
  "key29": "4uSfDfP8nsWNYtvQNE9KoZNWbrPFSDxs8racTLqRV9Cdpd8hZGFrZaAAu72jVPmYyHkXbCdqY9m7Jd1UMjs9698f",
  "key30": "PgS2EvKYTiG1Yrq3mRnw1BopJzrw56eHPqYRaZzXKXN5jXmRXdvD6a9ZRMorT36i2pvgNmbwWu4g6eP6EkscFT8",
  "key31": "5Uqh99a5ZEp1R7T76dC5RMTkHP8fzNGHLin6YkYnfEcRzicbHKm9d3zpmCqfvPQ2eowy2AN4jC1vSB7ubEfg5m8H"
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
