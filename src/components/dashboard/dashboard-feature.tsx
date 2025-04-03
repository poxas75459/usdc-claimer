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
    "4aFMnZrWvz9ckrKoyPZWuNu58onvC9pHgZ9F1xvucu5jHttV7tPASR5hc2WEeDhqT6hDYegpKdpwc1bYzmdTKtfU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vy9Nz29tDBR9fj7ad1ZYLxEYZPB97EEcmyQVRNGUf2LpByGYBFbLHtpr8sfukqn7pSxL6r8TndztqviVKeqBb6q",
  "key1": "5iHsAKAynmGcZKkU4hLs2Qx1Qew5zeESHCtHbWtozmzqr1AYaa2o7knaRSwhT6xwjw2tx2U9dpkHgPiirgZ7kuD8",
  "key2": "3tiVVbP1sHru9oAV47HwJycoD3xVZTRHQASzcxD44ZVza6L88EzpMbdEE99D9dPXDMUGWKcFF4ZuGNH8yQAm5iXh",
  "key3": "4vjYNYQ7CbtWXDYWURTBbnhf36QF4FsM28MHgcFGeyBmLopFsyc992FxUKnTF9NMr89gTW8q8Bbnt2HHqfdzbD6Y",
  "key4": "3G4YRysm1Mpn5K5JMTLunUtYBzWyq5rp7rEJeaZrP2V7Nnm4woEw8dv9hkxuZUhhssupuJMZeqxPSKgwvRCSrZup",
  "key5": "4zvjMuqdgL7kQXzYG15sgN65yWqXqx9C978bbiwx7jMJkzogBT7ta4GonLHB4naXhdtj7A8hZPT2iEroW9sqgtu4",
  "key6": "4CQQBN7U3eCrYEwCtMuCEtXxiF3ZeBMccjopZBKC367i963BcQxzUJdBfiX9i1W6HPP41TrMupKZQMp2ZfL4oxM9",
  "key7": "28h7ompp9PdEAekTroujsJkvTEqm41MwEb2CHgWpUCtcxGuLtdP1bFpCgcsd6q8uuufETPAKfv7euDFDkEQvVjKR",
  "key8": "4MLzMj7gzpzSaXww3dctoeqbh9ofpErhgcQiXAaAnyBdVsn6bpTYwbktURDVzcv5tZtX6aRbbh8DSDv9wuaEx7rg",
  "key9": "2jbZGjN43TAdXqdrAbv1jAoJ2B4UM7m1tinFsCX2AMqguBJzuJ2D7RrQhchF3EPP4tTGW3afB8etBE7SCjhKPgjJ",
  "key10": "5ihiAjf77PoqfmMTcXziBvDK2D8g8CTYkiKKgUa6EgWskT4su444MgLVkC539qtLTjWDm1KerbnNvMGjK6r6W8dm",
  "key11": "5Lf2smJpohTYTgkyPXCcGfjvvdYqDNGW8acU4xC2Bbh6KkcKwYE1m4P6fCsALXECfr5jDJyHwmfBDFHfR9N9AD81",
  "key12": "46owkjALQTAWYXsr1fFb8aVzZbwv27erHGvNdkaAx3bmFgxXXrcixo7nWTC4yLywQWZXqax3UwHCxkuHBhsDj4SA",
  "key13": "2hnZmEPDHqiB1RL2NRPQPkQeLombLeNbTeiGubcZTKdcJiLPuKx68Jd8NWeV9oPxaEs2bBjiZxhtSqNm2Cwc5rg6",
  "key14": "3ToV43zZYTcoQzoTwet5XunKWgpsm2DxCrPmtuGU5rGCHEQLvDQBiKB4wuiBe1TGK9wvbMBX9iR27x7XxHLKPA8y",
  "key15": "kT8px9LoYKtfqZVYwiqwSvWjRKvdU5mhtu9m2wLF43psJucsGQryXUUZefNpidyfCAd2p4Ze3XYRfb3H9fpdCGs",
  "key16": "2kNuehiYZUamYrsGKLMdbV3HpnbyddAsfovx9dBx6ZWYFfjtB5Ybyvkx4SSPEDyEao3sf1ezMXAHngH8viwZdqaB",
  "key17": "2jR5wEewMGb5ZWNRwFQQWBWWAMNnhpBVkDRf3fTXTNqNwbgawkZRxhNctRPXzsDekr9zGvv9TY2NV1Fiz711x6JH",
  "key18": "Z9a37h12UjtxpzxGrEHNdTNv8rckjkbrUMGkmVfD5Mp6xw78gFEhp151x9LSnpkBCcsDvnfdgbgsRNeBxoYApen",
  "key19": "5W1c3en9idKeLoAhqDidfb43jH8iYqaWmjJ6wnkqZG5QPoHv91uRQP1fvofEmivzsrgrWuXCcvVHA5t8EK6jn7LD",
  "key20": "5gBwtFRgTuGwctAUeeDUMP2YrpeDdKKn12oUygFbBUSK9WFCcDkjC8ME4jU3Gw3tU5HitE4iQ2sxSZGLWpQdbv1F",
  "key21": "5NkJN9Cjsi8ZcmV1WQvMcZQ7GyydR7dfstiKipEKBfs9jBHyaygEXrztJi8hbrUcfZjG9TtvGjS5gYr48bQid2AU",
  "key22": "3iGKtt5WAbtyd9WJD6dRCzeWLHYPnvkxKs5TDapMgmbuvYsspXtMCjrWxnTrj1ZDn6Hy6H9yZR2ZtxvKFXffU7gF",
  "key23": "UsozphJJViL6haERTyMmYVpmF8wxJsnzoeFr8moHy6fw6thUWKooyogtZYVpWDXGXrB5pgc8X75D7orwHkN5td5",
  "key24": "3GTmpuwV1gEgFVbvyaYTrko3QtSxguBJEUu2LbAUYyvmeqpdi4KARdLgzLaC47Fir5xgEL18B7AMMwHKGxKGEGyn",
  "key25": "3Lx4iK8WFaCQwzEKmoc2ETmFUxBxGeD9hziaJQeGoxs5a33WAftZwHKSAVGEFYR4p6A93N5oSmbiKCeKtkAviNuh",
  "key26": "4StEPh34TYBLMfs7azAWFmSKVN61GubwEccHxU62yBKiyhFbCJde3tiAF35qQQW2ew6UakE6u2p9Zyq5Bu7cHKgm",
  "key27": "51uYGWa1wD9QDfg1rn92LqYNjoSdvUkPb2JnDpvovGDVZy8YrqQ6MkCd5sqiK6wn5Bq9XLrdPzp3ZzZYtEWNmgUY",
  "key28": "4hAzCGvQB4FF9EZbezJLdwc6wMNLrzj8wYWnR6z7LVUiDkM9gHFHXotqRA4y7YATv2jRyNwKgoZvSPZDk5ux9YJf",
  "key29": "4xMsSGFTBgtsXHbYggMmBMEXeR57NHqLwPjmwESeqChf2d8KwkcZQXasxctTx7L9rVodR3hwxWX6JKWy3TmToKKL",
  "key30": "7pgMTLLnzW46quAijgEJZGFcWzwrD95irKVP4Q6c5hfZa2SdqrVyrgWmMpsGyKdqM1BEwGS51P4EZaiyoGnmmz8",
  "key31": "4MkZ9fpbxK12VjXDhCsrmeeHwVRXNnNFb4xHCbPmektJMV4dgPbK7f2PEFREhJbpYS5Cx8GwudF3uUGWtYNYECfM",
  "key32": "dvSVYrFRbxUrjEkJBxSxgkK5tdodTm85jt8G2x5Qd2x4z7s4TKcTJWBLgcT4CKYoevL6Vja8mf5gVr8eer2vgUN",
  "key33": "5pAi6k7LJrfVUmkrSUas8xE7v3afkxsD7cziVRj9Df56KnHyoxpwwfQhwZ3CTygV92TkP12WsaHVtGvS3BHNqYi5"
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
