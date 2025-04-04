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
    "4u1TPKuHwKPJjHWAFPndR5cgEqcZmTHqjynRFmnXi1YghG7K5zk5rguari8tNPYfdpfNmRjQEchprw4MrF7U9YmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BaTW4EgT7AqmYC8HpzisxiNfGURkNngxapd9Kv9kKCqcMDmGqBBwL25XjYnmLdYjgLNSpLe9ezTKuceNvGt7yHM",
  "key1": "3bCG73PPmw4xSjPQB4tN2degFKxWcrsfjJZMZ8xZh5czb9qS5gFACmMSuM6rnJ2q4eVr2U5rHLJ8QkLF4jkQHwhK",
  "key2": "MqdDHKfy5gPEjxwXmtZkGz7gYUzcVkCCDnPXAoVRsFHNiXuHpnN7GAqEVmYJnT8RaS7zhURyHmmsw3rANpqgPfK",
  "key3": "2ktyT2EYAKt6EYv2g5hmhsfcDWipcQQa7h9VWYZDsXCXSJJGWmSPR6dHM46BAsueCftmXq3GZcBiFPQRRYJwdZdz",
  "key4": "2L6kpUx1xdBYFMwLtKthGLy5D3BBQbtNRKxBXqgA9inoyurbqLn1Xdze3uetuTobeKhB4MEmBGwFAMS1iQCBHiMY",
  "key5": "32UcjMHSbGb4X6rr2kuotiDK7239DCQyscJAa1RN58AjhYW54NLMyZdyi1c2gDSv2KWoeQbqBS3U6k1peQptja6D",
  "key6": "23v3ZaMDyXLKqQcDM3hfEGqE4t5tSDH3quvQzG67mZ4Q1gjMXCByW5PGXJdXJpZtgNPtTfF7W6pSc5sZBxHZTCcC",
  "key7": "G2kjQetz44LwJFL1NiALXG37d4FSoPQV8CPaPHfQz2BWH2JhGNCjVJ9WdKydUpCeLXSUB6Y7R8gn2J3TFQdB5h9",
  "key8": "4CzbKq8BzYoxYZrHNtrQdeEDNRrtxzfDS3YXSvnwxRMiQmbq9sjvzPS7C9VLybJsTef3stdm5rATt7KYQBjyJW1g",
  "key9": "5DfnpFwxnj8zLGvwrEUiWJoAyy7ugfZTnJeUqRx8jX1DcAZDNNVCCfrTnZ9BGzQFxAXnMJ25p66C1EjvR1iCVqPt",
  "key10": "sNAiit1fgfbqQ4NRgvUfAQSWoFgrEWuJaRakrrzeaUuXe3k8VZuq9WXGdDu37ne634fbjyovqJo655noUwg6pYd",
  "key11": "5wyFLpGN9KH1jFthL9ufr6cNSv6oFea3VmPf7HBHcDvyrAdhQF5k4Q6wAqyuKq6t8wsWYSQpHaot2hisy7ssjd6M",
  "key12": "2MLeLSb9CDYzGfxGJ4DLy9buWiYRrZnybKZxUdQf86J5Pjw49LoKAC6TvBhhLeBMJiaEe1QYVbwm92p9LUbAPwiY",
  "key13": "5Ty6792ceirGWvkaodLA6uAs4U4yBpDBSs9TpQqk91MqYeibn8JeHA4pUg2XfQ81FgySnGKvv6aKVDXPHbVQg7vX",
  "key14": "3Bu3VwgtsPriBVmR6DWV3TK18mDEUi88opSKd2SEdr3Ah6g96fKnhA7effiLh5tfjATpXL6pzr8yVFRymzsp4CBB",
  "key15": "3rUiPUxhZri8LRKxuR2dXJq1hf7Q9Qwg1HnT7o972dLBsvaER9h3K61NKZwN8XBwfKtCMeh4Dx7UimtAACJb9ZCq",
  "key16": "3qBEUJDcbvzAGrYAULAGF7J9hxCR67b6HmTjsfomgjE71rvdBkEEUGSdY9M8PuxamrrHaCJCqNi1msHdAqDfzyWa",
  "key17": "3YKY91YKNHBdtetxN8G1YZhGQbyZyDDRTAM8JFfmtqC74uSN9i7zXazpt8SfhGf86nNcGHmLWeQEjFxTgAYV6EtW",
  "key18": "4itmUikv9RrJe5s1t7pzYFwACiJrZiqu1kbZQpMR7ZCptgxoXURw5QxtR3cQs823Edmwrz4MGHBh8YprmzKDFHXK",
  "key19": "2FktR31DmgEkpHUxpf86F3FBwdYeeq6Jm2jzUV3dmpHzncktDQGph55KCjJQqjGpXz8FSbkPa6BDmhajbDP7douY",
  "key20": "25Q1GQWZVAxhJh9CfmqX1JKzLPc9THYdspEEcGnmL8r5iqWN1f5KdxdpVihSHVwXQxcTKTKoMgXkfJd1y5ApvqbU",
  "key21": "3JrVuVwT568vKJJGG1aLhY9ReYcQs2CnF3LfiJ1CcsoPeWZ13ZdFjsetdpN6m3XPKdeirMVjKWo1ttpKXGRL9Rhn",
  "key22": "524Qpv9ZQr2BpNeGXgAKjumkjxUoTYZNALzLE3oGd2Mk9nkRsDT3X75heyMT4D7sJjCvpu9sEC7kK3JYY4176Z9g",
  "key23": "2BjvazbUwE3Z3h77eDEEKDibVzdJ2LASrYUWYmgJNxt8UyvGqPpxKT2SPjsBRVY5gSZ77TtqeGmFdzmvZMB6bP5r",
  "key24": "5VEqKei2ejbsPSnTNxdacNj97B6s66vHUesrxtAy6RYd8qNRLFCfdYF2aupJXJXjRjxbFMHwp384paXYMARdmJjb",
  "key25": "4EMZBBGVgZCQbrDurxUz3392CCogaZmZ1vJyC5FEHLJEJMXHnyKEBEG4heXLLPkCHZiLC7GSYL3psMaFfhX9RJvW",
  "key26": "4vEDw5rDh9RT2qchMbFnKDeCBFC5BFHjJJXU9FSuuBDJLzywkG3e4h89y74UnXp8YH7M9ae1dohVZmA53x6H2mVb",
  "key27": "s9Tr89vS9x6yhEv9LMyiZg7cqFbFxsMHFU5mKockiNiVEsY29Ms2mBQM7rvTXCJ2sLpZyXWqNWdkf6grzmkAgNU",
  "key28": "57JC17VisDMeQBoTucZ7vU7HDzAjTAJ6w9f9MY7R2jcxUUmLRdxGV6JtLu8DGtydwm1Fpr9XiuakSzdEV2Znkya",
  "key29": "4TUsUAb39RqHdCDEyPRXJs5yiogcxX3gCK2qqhcpP1FSZLH7KF8Dnge6pgtt2pU92GKW8tRDKSMwoKZ32CL4441d",
  "key30": "5aS3eCsdqw2HyhM1G55y2DHbB69GKYk9RupvZ8BsUksEwXg3ku3iHRwLovnGJ2zY365jfda7XL4i7gHD7aBSxbV1",
  "key31": "2D9dJGAz17oGkqrXWp56ZR1ur7HXTQTeghgLudXXFqEMQYj2tS9kJd2MDykxt6tD2Fo8fkY3mFZJGTWfsUka8kSu"
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
