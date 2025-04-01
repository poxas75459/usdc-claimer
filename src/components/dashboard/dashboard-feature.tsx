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
    "23b8dsGTHACSXmrT4xeWqwAw3KGv7RmX4pqHiaa6suVT1RaVxsLBfXSLEsXCUjeTrPc3AyWXf8wswGS23z2fCh2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DFXQW1vcZbvu7Je3ub6KmekDoKqRcogCMxXixWYn1TPQTdtXZjQJXjBmE7sotCPAFjEWs8DVYrcH2kMvLp31BEv",
  "key1": "Zowmb7yuK2PatQMu1FPaNnLxgXAhA85VfGJUy6fewSGr4aFTVcnF3guW7X4Rj9ZDX6pWzReSu3UYdKujSWdQ88p",
  "key2": "5jFkbdniBuhXzMko6CZoZALZdfgRRE63a1sLJBdD71igKbgSA37R87vt8NrJuzPdJWQfSQ4guD4t9VEXvaMUVAHy",
  "key3": "FwJ5yYSSsXHE9dk1NQBL4E3kNHYxtLp6gXtrCsTLNLEdH6UAXYik7486mzJgv7ChLmCJySEuvZGaRuWzbUCFaoG",
  "key4": "57kCRZ8UMa7gP17nvFGgRRzT4TtM1GNztJUKgLZBt1oRp7NdxW5Ew5ZYeAws1daMzTmnb5RKWMw4GKXfjz8qu7Ag",
  "key5": "2X3662bH8qycxhubp3FebZGJ3mR4tQ5d2Bmbn3rDeQ6SmukpVqGwzMfnyFpiKDxaRuw4fEE2HdBaNDPh1o7uBJ8P",
  "key6": "5jCrLtspLQqL1yeNab2ub67uTSfZ1WP9PMaZWrMuCafkbtuB4Acbhe7Wqj2FeTWQ8iddwdcW9vychEitCE5HdmGy",
  "key7": "hFYtcoQZq6NX1yGHScZjEehAqHNAmgpufFaeR8ByuLVdUR7WHpttDosPGwUHo7hDWQyAZyVYZ8T7Zan3KxUrUq8",
  "key8": "65yg2Nht2FhFHYESkWvpQ2o849Mazv45PuAgZBs6NNDHYxF9BsgrGFBAbLJygR13DrhNHQY9ijYyXTG6Y1ep9TJo",
  "key9": "4qBd5DMn9PZB2e6uqQTPriT2DA57Z7aHNhn8ngrtKzQs86QBMYXXWkgxf2U2A9yCWif7NYbKY7UCmA1gJES5vYsi",
  "key10": "2DBxYwPFWqcewDxqdv3EdDXvxbZ8mxpATWaevzPLDEA9tEB1iXhidgZo12dXjG1SsmLL2C8MD2HLsMV91S6Moy5Q",
  "key11": "2EyHEQULRWeQD1rKYsMxUEvzx4SJFR1Jrsg3fM6LMqkeCDDDEkYgPdgqCV7mi4QjtFx2hRwaHAN2PVkyChkT8kB",
  "key12": "66rYxDageMX8B5tYeZRWLhkQJFscLMReUzD7M9scYUqkz2mB7a8yqy9mAKUDCdD8cUmWrBw5N5UD3wh2ARyQRujP",
  "key13": "4xeEQ8LJUtiu6mesHt5go1Ao6yVkiHx89ik8Dfk49QZPBm1ya1jUfkLDxtkMRikr4DR3Sw3BXJi1ZSPNpebiugzh",
  "key14": "CH1RSPbMtnF25oAnXgsc7h2gaHmyRrD4p56y9RbQm2Y7XhCAh6B1LsPnpT3RUbup9ZjPCzcCz1pZUMSnKNKZoeX",
  "key15": "m36fmuo22H464k5qNWZzr1VSCbjqhW5cG37fr7cx7LRNX9tFtj6M3vWoxQQnuPdCZ2xFGMv3Dq7MYV9YRcLNzaD",
  "key16": "35bqSckEqJRBMDvtX1MKDB2GEJ96hE4Eza6kNLQsAMfijsQj6H8wXV8hSwYkrNBnoUG62qvh9yJoddfrfZRAhTmd",
  "key17": "4XhsZqhSrSm851FgYpx1UVFr35ernMPZKNSoi33DE4Rba1kKyJyzBJXySVGMNh1FrYg4wAa2guB2wsP74R5Gaiqs",
  "key18": "5k4r5yfccaRo78vEcx2CGxBHMnRx6BgEQJcVD6ZeKohmmHmmarKgPQH5qnKhjS4xTY45mJcgCzUk6vhaftbkEYrg",
  "key19": "PG2BQ5BtR3mPwi5QwUNCHYhTNB6wHo39JXeoXF8T4BTmR4gDUcVN4VV4AsmtDUzV2xGMGG5FcrZZxQLZnXsk9e7",
  "key20": "4woWznQ7nw2zQv6RxcDRqKy6xQczy64FbBzGhg5taLdL7usGGATAaJb7Hdqm6va3ZVCUEWZAJ9RJDssFZkti19dW",
  "key21": "5LsHnt465NDkjTh8e13gYTC5GrET2XWz4HCJbgQg8NkcWzke4GPyVPhxJqvEVvKBcUBPpQ5rxb51bMQMGXF8gnrz",
  "key22": "owCgzatYNMcFbEJrXcuSQnPWR3tTS3k9mLU6CBXy25YynBFuqp776Pd6KZEKsAXz3bDYmrvuo9QzEHh7UvU8qZQ",
  "key23": "zT6gm5xf3Gqt8zqNfVP9RSMjPNYQ317icMoA8hAADBvGPUTv2TH3Ns1aEi8SeryGsYVyjQi1JXUHx9UjKxnHRpW",
  "key24": "31NizWM2Z1NHdGEtjXQho5fmXQumfwk2YhfqNcyVf2JmenS9d8JvyFQHwhTyRsQT12yqK8ZcGs26dG15cDoJwxAL",
  "key25": "3jNQKAng9YAcGNFJNXgHi2pmeufaF6w5zKdgay3xRpLH4mBwZVGZXsZ7nQVi1NYvKBLyCjntMbDocCupxSxWEejt",
  "key26": "2iPY4ygdCv1tZy9mt8NcmNkdY5WbSLq1ES6W9NzCSioLVmHPgg1jc9U9jFujhZYKfDUh8uyiLCWtXXgX1K8DntN",
  "key27": "34LEzkCUySR7y85rL9yj8K5C4TPRXKcrUdnnYoeVgQRnNjpW9WUsf18jzsBivgyA4HdvShJkRZsRERC5Di3Kq6fY",
  "key28": "5j2WHn7HfYun13SpfuFvPhXAim3y8mNfr4UHwFLRHUN6rDy1kJPDcBNuQMZWXhfEp3Eq59r74LQ6gPHukCiCikWF",
  "key29": "2bx6wNQeJhUVkj7GV8HY3cFo2o6RCX7zNrZj6JJNRpTejZrHTvZSqhbXZgwyCCueWVoBLR4pXEJrF9bnpjcm5ZM",
  "key30": "2gfPbtst4okcJBhXjoCFKEfQKjtyuscNCvp4t9EsmZKj1rLg2KreJLt8R1WuPdRxvQ4qHrqDpJra3mup6u79iiCP",
  "key31": "woAxXxG7MurnQjT4oWk1BEcEogexCYB1NvLimpY7xznZQHE89FnCdmFKuAKxS9PeaYP9QoJ6d1t9ZbjvrtEG7vc",
  "key32": "2bN9h28H9AdJpqUQf4smAACugYRf13eQT26DZvJ75YUsK6VzFGob72Tk6Hex75AUTA8dmubKjiBuN23NVzGQZtCB",
  "key33": "2AtJUbVypNXKXyztdZ3rP9B9WPSE3mwreLu1fcAF3pK3zS5mgHNj7XmJuAyiiJ79q55EJzEZwQRtRhaMc5dcS5kf",
  "key34": "xhZtQ4uFdTgVb8HVDFDxR61h72YXjTQYg8tgyMMDDpY9kSAf85msP6X7bWHVagTL3pn45hDTdv3kgCciSHcCFM5",
  "key35": "2qC4tEKo4MPYovs6J1MT7mfxUsnf7LVAxF7rHVYRhMm2Mbsk6nJuBsSPTcdJ1K9BNmFuJ4JZ1wbSNfWKhXzMDGk9",
  "key36": "3E3eMZspy2VU6k4aX8uBcmbhyyh48YUCrCujPF4QFDjQuTRQ5H33YXK1UPpHuHtUvhGG39Vrh9vpZyBX36YseFbY",
  "key37": "24sWGuYAoRvbnawbpmoD8fVQqo27gKGME69NC9Kejc5YHfXtaGB5AqMPFpHCidpdA1EVWbb6CgXfPSMCb45dDuzA"
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
