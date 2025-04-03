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
    "33zFpiPP3TE6ifToetg9MuQmxbHeeCZq8LcF7ZnXgHQNUoofayJzXYZVPNsPw6gAxV1q73T17HYt3jdf4KLmZM1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZA1o2Zwim3o1GVu5UbiTwKSqSFrKeFL14eHH4KdxekX6t9wdeKyCHKcJxJR9DNw3eQzhJCUxDsJ2o6UTDhTWimS",
  "key1": "5KyQ1C2vyykFtkC3wBpLfsBcT1CsjJD8RrYYexo1u1s8sEoMhCeJQujQRA4Wc5JzANdsPVRq4KEghCShZFXmLBmC",
  "key2": "3W2bPakDh4JBogogwNpuFSNH1P7P2S4GvCU61He6q5dh6xnY83Chpg9CtcAef81zH8mqPcBUituptxJ761bpe2cq",
  "key3": "25mZy1L7pk62H54AUYCJcW7EUdZRb638oWZsQiVdikXae4RX9mCU23oh4PVbUEkj3tZXi91rVUnHLwxhngfzaeuk",
  "key4": "4q7oNqAQKT86aj7NXFyJ3Txoq9oGyvFgHoDcidKrsCTj27zKt3Dnkp7QMPtkWroeRm2k2FbABdyYWsFQMUdZCrE6",
  "key5": "3r9wi2W2NNvfFxXGGS1NeqmNKC2zTTbq3mZ8JcnFbZjQxZdiMH5rwGmzai2YW1uU4RV5TQUT3exRBEkvwRT2nAKN",
  "key6": "xxQrqLgJV73F2rVmr7MSET2mbbLBugRKyeG6TE5a34pXMwUqbiDgqYjRnRbgAz1TTsavTSitk1M8HXFxPFvPpmx",
  "key7": "4fHApuDfQqNTNkPE2e9U1PfbZEtnRKvfRRjfNNK7uZK4RoKgUsMkp7mqMS5ZNZt9hrG2wfuEgbh1NEQFETPXMd3j",
  "key8": "3gZrcZYWRNkND36AWcjniJSEW9D2CYD2xfMDxLWRXhJsUbMr5pZRK5zVMGap3qtgZVWVJtj2d77isVkMN2C9kggr",
  "key9": "551XBPpjphkZ3wYBtUn7Qzy6gJ2fnqbYvXf6CMSb2madNbWt6hJZvW4pJcbBXvX4BxJkWCWgYWVKRKkARqDNmw9h",
  "key10": "4S2YKSUWSV9tczkfRxeEwwRLqxE3mHQYvwmJPM1rkECxYuW7zUwBoAHWhFN9XiAH3ez2QxMby9evvhzPzmxSyHnW",
  "key11": "4mBsVkiYpHXVwDVNYr1p7B3TijYpmobjpnJ1amShVtMmj4twLBWiGZwAmfCqDTv5xoR72hPszMKWthoi2GFjdfU8",
  "key12": "5tAG6QTpKg2P9QzCUtu4qvVgSiMUTUdSfDje62qPvazjgXHCK8rpsGHDRW7BhCm5iakNPDkAJZuBNwnrDZJxoro6",
  "key13": "2uPGqEsni4R4Bt8UJ51P2EcM4oezEx7tCkeAzTzWQFauctu95mRuTKiJpYnvX7jwdmcibq5gCk8XDsGa2WEs2SMN",
  "key14": "56mBWHi59nKGhBwXWyztSYb69yt4PnwZ7FBXpnHMra2Lts9GDyb4NWs3TpPbkWTZfJmr2ikcJBzE1irVzA9CeFRU",
  "key15": "27HtPaco3hHLFfQr3K9e3C8TvarGguoYNqFubFHReoMZrVPwEQTLk22h4N6Bkzprka127a1dVivZ6SFumGz6NyTx",
  "key16": "2sGgz127QH9ykAyjQfbVddYy2qhMMcG8eGk45d9gbnWbSLSsgaUEJj27u7uquP1GDntS77deJeU25kDu6RS41Wmo",
  "key17": "4ekS7CsGVuPtCdHQEutus4TQ2qpbB71RHvtjAHJadACzYHixpd4nZw58qkCK48daGpQjBDuUArhsmg92xXtTKPvz",
  "key18": "66yrjnHRn7WiWyX4JaLGdjuv77jFdNedMnTwtbLc26geebov4LHAEZzd7npjqTA2iNrM6eR8pTGyXxFPFVUSzXoK",
  "key19": "2CzpVeYkCJ1WeEmPm99ZydyUK4uxit7uQ8ruZjFHnHA2kZWxW7ndbxxpWy548Gb3ZGyTUygfDBNDzzLQjQHZE2hj",
  "key20": "2Vn9VMc7QCN7D2g5TPLA8Hc24Gs45QJbtsoMFTQGkyym3K2zcmryciaRfFjMiZgfuHRKYfoUzoh14hXjEtFimkci",
  "key21": "2jCCeooxreo7Ca81367cpgAi41AE4CsQpoPVh23TzE5EkMnNWtwR1yqZ8kETpn5bZWMwj2EeBcUBUX16qvr1zzBi",
  "key22": "SXEEfcEpeDhUtvacY3Sazmz57mGraphviJFtRANgJDTG29Ncp4JDJuzLqcGN9wwidjJ8E8UY4wDLYYF8mDmG2Qv",
  "key23": "2Qbb4qRbShsicum9USqLAAMW1rPW3DsPi3L5TWBQeLCNU4zTstBVYua6iGtkJGrw9mte5VKjFrq6ruBjADB6Uiio",
  "key24": "3puf5LZN2k6HkPSkVVza9e41vqPqjqmNbCm8FrhDeBttg2TB3tfZgEjPywf4kZQtkhRYCgJrPnhVJFiqXysk4WWF",
  "key25": "38MMCSPbowsB9aqVrtvvdLeDSVBxco4KRPkUENofXoVZ5zCqTkP1czaoawnFTvnvUy8ATNRUoiGPLiq2ZMX3mE5Q",
  "key26": "58kehVAid7d6oMDuFBUWMWvsuFAmYTnh85Y6g3KBs4e2oSvRM7q5KY54YC7HLAQE2T7yVG3aQe9HFMXT53qL4LGc",
  "key27": "54iX4p7nE9yh3gmKqK8EnNWPnLtQuxvjRvf6hN1U1WvGoH8P75Qyrt9WuVn2CHwQ6hmk3P2VJW8qFamTVJKWoH18",
  "key28": "FthYyUhpWrb91J663jTW34aw4uXYdR9MfPrKdYTCddxPRL88XTyKUYWaFLJSec7TzQ4BYtSAtucvnF8hW6Uyd8t",
  "key29": "5kD5i9Fe5n5LkVg7tF27wRkXPDss9tMWBcK36L5KuMDcHewVnRDymtqiryEjnmm8d87ccSd4HsU7ezAcSvG3Ne5d",
  "key30": "hu2ehu1onJ1gur9AcK7xSgHPw3wJoAyBACJPTrEkafBfhUufy8JjjTjbvwWhU82PUhQmiGSXgecfkBtaxEynp5e",
  "key31": "2XpBpjW6CPr8Qx2iDSCCTeQCcReDbKWbXG8tJVu65uZfk4kMtgQsbYTzv5SYErHeXQP7jvLTyrDmTNgVnhfMJsmj"
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
