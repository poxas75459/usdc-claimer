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
    "4xMNez2BC981MuV9gTJbKEXyp1Um8261gAGJ5DAv1sTrZdZrMYSq9G38Wiydo7JLLuPAHY2zkFBdzNPkQiPKpCZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rYTWHYEU1BDyM5VtGPKULkY74144X5w27oUBzk4SPhZc1Q4D6U2M77rgfUz459kmsdoBuR1egFdMQGGeaWAiQgm",
  "key1": "4imqgyP7ZeZwE8ezYpBQgXkFz92js1TCNvHVSjkrJwHYp5yAcb9spadHs6djecQXyqxRm6LSfBzV6vBXqX42b98A",
  "key2": "22zYdKftyQRuRQLf3TmXEfCakJwxByYf65KP4YsZFM99FnUcSgy2fXZVrWXd5fw7WE6tpiGXGb1E26YnTD2r86c2",
  "key3": "ii8un7TAvxkLvpQPLxzZ2iFKEQU1DPUt5snAT7eZjS7Tqd5eDULTViiGsw1JXGHhsc2rc1u8aUf6DQNbkZ3CP6H",
  "key4": "5zS5B5EYNnrmiWmKKp1Kgo3fXaU7SyHusvYUdoNeeEMK5judvcxZ82z5hvkc5P4K7VBMd26kdf7E9mBvEv6Mg4ns",
  "key5": "56GMMZLnC8bAnov2RDwLXM43q2gu3BWfi3WX6cR1TyvCKNxATX55osKLTJj8NsTUrMrfco9a7BzxHxvS63hc4rSq",
  "key6": "Zryhb6B4ZoGuJNktwd9UfKQJBScp4eeqhYuV2234xdJKSP2J8MB1P18MFFJCmEEYhr8r3sWebubmdmF7yiHh7tu",
  "key7": "4GtPS9mbHLsovxS7PVWoBC5zQPWbwpBbqctpTGhQUsLN2vV4WiYTouNZvqqCSaPk8bUss525NYjL8vNogBfF1hcs",
  "key8": "5BeFTQm7brCtVVkVo2JvDHRD3xHSzgWUBZmgz4LRKxK8Jkw3vBfh9dpWgjkNNT1Zbs2RjQjreP6G3JehUvdkH4Ly",
  "key9": "3wFeQg25KSoMST6zFP6TXVUB59ofMEiqM36egteRpTP9YEe7D3FzA7RKK7k4jEhAjPvwnR1jJaZGzFkhQzBNRVxo",
  "key10": "4PmYdi9cV9tPACfWxjsV9KmCsGDyZkDbGbnXf3RyLPqM7bapdAwttEa112H73mR1mZu1ndYpkVXcfrBD3K9fjrUL",
  "key11": "5WQipYGVZgp1z3m1HVY2UGNqmmnfjV7GoCFXbD5gJ1FeJoWvLuVGA7zTMSQtHmwB3ybY5X5hJK5tZR1dNqjHi4th",
  "key12": "5h2D3k4cxLDLovSwMgNqrkfQEBnCnv3b3TTZvXZZafyDuBbRZsQFXVkH3C1u7DRvMgAG4BuHPGpUjScifJgVF1L3",
  "key13": "2P1NFMESADnigMwNYhEgGKfivPzveuw9auzk3pr7pbenaK7s7ma3fpmpu9MfLxc6bHm4g8wmx7QadQWawKuvnqUS",
  "key14": "5ffSwFsz47Wa5jJG8mHkrrUtNsUQwcPv97RXFJTGhwu8nV5g4Y4z1GhEQaRkaBT958eeQ41jtsswaYpVVMfoE9s3",
  "key15": "3xK8Pr2eDEHNLF7SgXQ6k2cQcLtbJWBzGXmTH1H3ggEhv98w5TBZFB7ss9By9aJLQHUFsXWRMT4bYkQ8Y4SJ39g8",
  "key16": "4tqsE67RVFyYScWF7W513spTvHvvBf6MGSoAk6Sc231KXKDRNpBeoJreRu7jUsGUKmpoguXyfetdSVcaLj9ttntC",
  "key17": "D6c74zMCE9FkR5FGqhJbCobG8PKmHmE83Fx1P2ZX5XuUyDHabCiqagzM8jtfi3AmYqPYcQFM5XHnMr4GBaN3Fc7",
  "key18": "2rPRWKSGkjB7wZdMhUSkaxJSohJywabngcvxE2t9DoZyxhrD8KLndv3QbiiquKJ5XLq5AP5xnjS6BzyAbs5JMcE4",
  "key19": "5i85VYPXfGjye4EjT3JtL5yLx5MJRg4TZo2TFYmqaGsJTJiwAd2jUWYs6wAZzekVs61KaYNjhYPqp2ZS1FnUjcyS",
  "key20": "5Sqst8wJfhNfuUydnGW8VETh1HEoEFgRgsyUKQ1fThnV2micBFHxMj4nCQgteDHoi9WjFsBijFczXaFXjn54KDYZ",
  "key21": "cttBiEubgHf5Ag9GU7rbVDp9i339EE4hHTVHRK6Ak2AHfRGazBpDE8BLZCSxxJCVwa58y3f2XxadVvvEZD5E59c",
  "key22": "3ayENQH8QYYiA1VMNGbGTHBMXQNGUcxHpfrWZD1Gt47Q7Bgordes4gx5iXUkH5g3CB6XQPJYsgHDt56qVY4ya8gA",
  "key23": "67QtYBxAR6TJzLHJF4FHAwmnPu61b3Fa6hpYCkgcpYpabQETT7YCyZLJrShLLfR2dvcHqnvVWGFZTaQNZyBu8U9b",
  "key24": "5GedQ4J9RUBKF3i5wpghU3rLhNDVyAgQTeQWvx1Br9vJuxAwj55WbjyyL8eBssqzK4fKEXykV9BKu1yi6vqCFNjv",
  "key25": "23bQW45o1W99JP9pRVJEXztQPnpyz5wQsYcJshhbv8MBBeZFbW14C5FezfJrt1WKxiUQ8fBYRzRNWEmSUHeyQ4Zz",
  "key26": "4AzYdMmcLybBN3xjUREjUHDFZWCdy9pbY16iGzZSUxNkAJn3kipN1vKJwZXXQ2JjoEmZwY9vUr2AywhcmrfNKvXF",
  "key27": "4kcgWxtjsDQFHWTSAC6t22NbvQPQAYMc5Fv1rrVMPZ82JvK9cdd98achq9iYpGiD877R7z7EBrGRiDMHqh8cTxn9",
  "key28": "3yFmMKrqM14j7FAAbBHqtBya38NNCyQvjdSrjx2dYa53BwTLbSHhoFLB2F3iHJG1j2ez2uWDo9yMVtPnU4tmoFeP",
  "key29": "5oQ3dNqcaScUke2oDPGTJstiysQKv1EbJ8h1wMR945pMaRpaL5yvhq2LXMmSmVvtCQfsSLBiYkVBh9iHCwr4tY2S",
  "key30": "3SW2k69sSFVfazSFEYJoGWbYzT7DqPCNT56Ue665MYNnpioSWyxktHLzyahFRA5G3W99izuqwXb1jZsHgXByAey",
  "key31": "27k8qqzL1bAyknjrMMziKqmBHJh33LMA2w6WGpurJMHDVinkMWbSucnqS42qVx2DVEZ43cyQC1pLGZEPfeEGH8sN",
  "key32": "52DaxFZ9BeVu2bcwqmz8vX1eLTrnkxbbumz1R5z9LbDekF81w4RkDBrha8gxyB3uPFz1xGnVKEakzcuD1EwMne2s",
  "key33": "ULNKZJdiT9MhRaZe1ANzKTYfXi236xe2Swg5uLgSjpiL2yMBLcgDtLCQu8F4chWsBLgbNdCe7Uzho5uCpxHU1h2",
  "key34": "2yJycnDMAegFybZWvBFu6ZtMRYjYjzQLLirTRhr8SGyWyzkczfnZWvQPZrUAMpRh2mwVMfVpLX2VpiaeaHWZML2g",
  "key35": "5MWkLHJ8EfN8t47dM1bEtMaZj6rdpRbbzRfyMk1sGftLHBTUkV3vYgXHHKVuA3c4XQ2Suu3CiKWxywKBvdbjHEjs",
  "key36": "2gWiYgUGFfLWmgNSGHcvBTyEjucq44qz2M8CEWt9kSQvU8t2JWfRd8P5HXc2FoKGXaTzp7QXYbYknZ8EZpbCjrW1",
  "key37": "NYEFvP5asEEeFx89UMBhYXyuVDZ8KNRnNvXhAQBQB7EfhAAGFPmBmqMZJFnE2P7YKw48VdJdjvUPEnp8gtQGfXg",
  "key38": "3EgcXd3FgmSxnQSrTyghBJHBdPJYBeMCTJrCAJgL2MhNQSwPmLZv8WjAqRdqLqEQZRH1kBRTUrQvnjEUaLVZDnMR",
  "key39": "535XCxytR49aAsW77XXPenNE2y5iw4GgjAtYyRfm1MyBJxsp73iYiog5rCqXvibm5A9JRV9785sx5GXsqNkkFXyp"
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
