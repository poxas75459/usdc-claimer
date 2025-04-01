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
    "5uV8pcSmwLWrbfjXEQvhNpjZc8M5tF4NjVdNQekB7Jgbd5PTW6oSureG4EqvGdgGw31d76WNmUhGV5o9hc1WhC5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yf6vqpHcmUKECTVk7s7ufQ7qDh2ai3ArFEWF3VCBWfchuZUj6ZcdW9YuACNJ4cX4sG7bLzKWe9spLPEC5D3CbXh",
  "key1": "62fwTrro5MGwJPtNkwgpDfGZQfDz61C5st5u4MzoGSrJBHKGuhnYxjju97ZCfLiNE2A9tUdBa6fGhsGSfHXFXV7N",
  "key2": "57ihAS3EJhJ114KtNybPLENL8RdqtA9qdbRtR6yRux23FH6BbQ2MmtokppQ8PnWrBRNLbSTdujskXr7RwqQNwMDD",
  "key3": "2hETh6k8xEbwkbemG4UCDbzedDyPNV88b2G9fPZFCvvzjFhgRLgsr6frUynL5oUZiAdn4Hd7cjz5sEicZCJQ78Nh",
  "key4": "5EssEzVACJhkVVfJfrMutpH86gnSyK6b4zXFfTugNHowejf7ne1Z6V4e6hksquR2ccPtp4Ktk9vZXF1VTNdCZHt6",
  "key5": "4YqSsLw9kwS3mRGm8bjsRG3V3thbR4KzyJq5AWJfynwGzjXScvhaj5aTjLeHGvpWLnWPbCENKtPTbEPKgKnwAkP6",
  "key6": "4odL7dNsFpwEAfAJrf69eqZPVi4fsuLAZC83bvYtc9iwjzjX5cU8hNaB945xdPPWi4zeLoMr7kPNBBJPUiZP8waK",
  "key7": "34xDUjzUrt6WLjd7x4wJvS39Fokmffmh8uSFYRAVZfEk97mbHZAnsaAQG9FhXzppFZmQYEmPkbPPr6K5zKCGH8QJ",
  "key8": "4nkNXHqSS3YX6QXReJv2Bypnmir178Udig6B7pB4Q2SsuMRqgpQzBmK25FE8P9Xi3UNgc3SCiGvea6R9PZuoE4h2",
  "key9": "3eGkKojfLroCahQy3vgpuvSgNviGKUw6jocM893xAxU2vPV3hkWmfojuY8Pv1Kh7D49k6UnhRDuYBMMPhkBvisbg",
  "key10": "5idQM5c7fBy5EcdNhpSjqBGmFMkqskZvSJvGgpyhqEakjK11ksJ8yuJi9g9T9bNKD7BDCnp22YQnKY4kb56nKtSX",
  "key11": "4BU6V7APhrve6jcvZCbfLgqtJ9wPEUCuxrRX4h7pSguGAKB91gRsLBuo3f6SBoN2vRMAPYLu37vXUm7HeYkzBNz3",
  "key12": "5cepvpvVTv8uD5GSqPcWLYFaQAzRL1SwEFuuhNgQAuvRTo8HUdvFGGD5vprKeR9iQpiP2DaDu8B5sfJVyvaWUkeR",
  "key13": "2XSaQa5ZJ4fJ3tc8xirSJZKqv2k6X1t9NQZQ6KNVSLNCu7YVRCuCjrFb7hNNrEEKmw4CSGAFXGXdtNF3BvSCjGJf",
  "key14": "5pzxKx7j1mnq4HvZzer6JtiiuVHBGosbUC56qy95XeP4EcWwrxzZVEGqmEE9wf2ijrbL5duoPJhhYBDrShPZyAHu",
  "key15": "2HQx2187SS7AyTFL1SqdQ2VDaXxnZvRaJoBrSRB3VGMuZyMV7qhPzkEE2v8h6XZCAk4fJZW25b6xYFrGNmKHyPY7",
  "key16": "9XcG7zYjAPBuyxQtW2W1SM75HCv3jaqk4anfnZStKfkabyoET1aWTmVPUspMvyhs8VwV3WYnvdCf6zAPB52mn2P",
  "key17": "57Mo8LK98TYfeKykvak8PqKQiHN8mmvnDHN8Z7YzDXCLxQT4WG3KLuYe2SwpNGY8H41VVDEcPvRUZa2A64R3RjRG",
  "key18": "4vgBQ2gL1t4b8SddGgPyr1BG5RHYRSJ4GS5zYSmq5HVDYyTcNRxZoGKkzX1ahsQeAXT1ZsFz2XtniV5djGN2PpLX",
  "key19": "4jeGDRZmvL7uz85MRbJ8ChaM9GiVdrFWWZEbGy6pfQ6VKhfTrn6SktqV1UZ9FCYFW7tQcY8tdkohXLSYAJ5xZH4U",
  "key20": "kKSkTJwvT5Jg9MboMJm2K3UyAzPzvmjd7Po6jRE3G2Ck2aYSfYL2GFcFHDbdPYMVyftDoqMTjBUiybZCNdDTdSi",
  "key21": "3zFw6LGGBo5U8R5erMdKqkqfrhKSfSAnA4YpCejnty7HnRU93NNDikeinkDQ7HpzNXk3xSd9qvB3ziqzw6QcKrto",
  "key22": "54gn5LBxGjaBKvtQLTbaFrLqnUNXPV981UYd2pD83mS5ByKuSzpPL4a5TxZD6mGkR2iwUiAJzjA49w6rWXejtKvG",
  "key23": "fttJQowGQ9L3gptGbhB9p462US5NTJcVqRDARiRnbD1KrTYKr9qtAm4cbCQp2b9zqbms77xvZcgCQ6tTptW3fEZ",
  "key24": "VKBPWAJyvfeLpDH6ZrHF57mZg9j9Zw8skYDVx11wvhscRU2VDiSrSzJDeZDejsVVcbHXFZ2aW6cydATCfAZvD2P",
  "key25": "2fe8uEm5AHq5HpZWtyHEMorLBd1LorQGDxGFaGX1bbzerLFUEgfvhhE2FeobpptRteCzn2XgQ5SNLhRYo4rGVhVf",
  "key26": "38KNEkg87VrekrNnD8X1L1dKcNvHRFGUoqMdZ9CSVn6aKB5r2kyTx2D4ThcvnYTtVWCZ3pYXru271wArAK3USvZz",
  "key27": "a1LeeQWxjAcULyZpkNpF9HqGTSqf1urLdgXWCAfQLWQonG1vpX6xd1vsQ8yTc3ca4kviHKNT6g8qMuceEJGS6qN",
  "key28": "2e7EYfHWwRroHxXogB9hcjY4u1TgAHb3ZaXySQHRXjQz4tzwbSvafLRERjhPrFtMF2cW7oBb5uG7dgXWw4WgqCB2"
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
