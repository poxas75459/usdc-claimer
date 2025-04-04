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
    "5AaaunNdBM2PZuF32d8sd2dNw5BNRNNGxGZ2bMWYtHVv2KFvf8MCsgurSzfkFb1RwnBzZZkpN6DSTCUy1R1pJpxL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VyHP9ysXh1UHC2KVuHLDwdpggpHCMui18zS8HNnfXoQogcE4LPvinz9i8RnYTkvjZw9x2wmTG1HGfwTrHxtupeS",
  "key1": "4qGn5kc9ZpLncuJJdrxni7JUbFcoGDyRZWbKvXwuiuLL2D1Y7W7osEep9DxDzPYdqeZm9ywELz9wu8TydSQSjjXx",
  "key2": "2A6wMRyESzENnZCogLJmSMnM8JbLUGTCWFELcE1FHKcKCBWcQzfPVBRYfhnT6epwdzfz9nnjnVmHar4niHbZUaor",
  "key3": "2YBVXZiQ1bbPdLEJ4K62BofozDEJtcQjcZaFwx1pN3QupuS2HgAdSdBAFmXoYAR7MdAvAgUttohBxpaUXCpwg56s",
  "key4": "5bErsXWGbnED9tXSPoKhjFGU2rW1La1me1sMxDiMHurF7HfE8bbAoXWA9hfbWex9ngqcF2HarRnL4pbNhkwGQ3Qm",
  "key5": "5VZUPNeCAxB2CQVbQi7ThD45JL1UhqxgP2cuEh8AhHuHUMjimdLfUx5ec5VZoEumXx9EngKbS8poWWi2RQn6grRk",
  "key6": "5ejWrHpkmHSmvaAAsBkcvjxaf1Ee2s6LDCVM2YBkWMSMpYPN9g74PtFAQNipQE6KC3og7d1D3XEu4AduX3njNZW",
  "key7": "2ojsu8WTVC8mKgT732WBz7mjLTTpimpSqTMTbcZ8yWWFpPV8WbcfTVJe1wTjBxQYRgPHhHakKfFjLGohEFeJn8DH",
  "key8": "2X1rMye4ZQeRDbNckqwTLePSqVYqmq8oPBr5TXcx67X7bYXM84H1qGMLsbAiDtEDxQ37wECcgsfRjQfJZoEz6z8K",
  "key9": "5gH7ys2HZRcdaxiS2yTiLgJ4tiHMcBNBRpgXYiAtJyV6wfWRZDEWSaVBH5Gjg7PLVyLBnvnQcaL1rQxxoC4rQYH7",
  "key10": "57893qLtRewjCSvZ5kLTgcgy6hTSCYZihr33dhhUR8X2YGE8zz7a17EGu6f92jXcVFpwTMFiq32hhGWDwN89F3EK",
  "key11": "3PZ2Fa276anpFhxMNjQPTm7ii6V5b2qKCMEmBR7JxpA5yJKKJRdnPURFJ2A7LSv9ZhkLuvEkUaQ6Yn5CMY3Pn984",
  "key12": "5BtJdZgdmsYDVZEyZVz3Jy1JxhUZcRYPy7EMBPmJDiegLHjQYmnecFQvgDyuuwLd6uNVYnoz3pvG1BbaF834z8q6",
  "key13": "3zSvXRjXEvZmc1MnMP3JWevYeg2eSjmv6Gf2X2gLBTXVnpKL3jtRkWx42X5jrwE4QuaMpTULyMPpiiFDwB8wcfav",
  "key14": "3ZCCMexeyxDGhGWtdxf4dmE5A33FvPA7ZagnLsKinLwv19xabLb4N7eFAZuWVKWeguh39KsuYrXtU11iYGH6eN6c",
  "key15": "4oiXHSs2HNzwDNjQYoSt5oQztp1hkKAwDNHUjavyZNuDp7nUMt6Xm7mL4V37GabmqXE2euXTP8TJSpqw6YwZq6Qs",
  "key16": "5MPZqzDABRDSxYqFLCQjKN19rUJzDvHQSzCH7xAp1kzLC7L7taTnXXcH6jU36GzZqauTfc72zQYVFr87urvQd1PD",
  "key17": "58SeEuqZgKYCn6rBk7HqbJXWFZZqYyb17RRZKRmqEMCVpKCFTnDf4jAjCzqPuB7w8BDDaQFxGDyUr2mB8zrBkfJX",
  "key18": "4F6VbxfVA7GBXaMGygwNCcrcRZeAkBtLcSj65HprxWCtivFKEZd1NrBwKrCoKvwNWLW82FFkqPWnHfe1hezwcbf5",
  "key19": "47fvfxFT7qbEw3NEVhki62t7suZBBXTKdaXBYabRaCEJ8UZw8T823wDibFo9E9urGqyhi8jkZTCXUe4KnSo7t2Nm",
  "key20": "3bEJQsShyBbYzKgtZqjejGe2yyPjusZqui45kwLJ4bq1gXuHCb4jzR7cRDVu4ivEuXThBShATFkfXS1zfMXzn6cT",
  "key21": "pfesP2k84Z5zL9o4ayn8YA3G6c3wJ38gW6en8HjdQptGWLXf4yz9xGP3AbwE3Bko6DAJZNdvy2muPjBcNvx1G4X",
  "key22": "33qubnDezCEQkRTBfxc4CRrKKK6sZiJCL9aucfrhQEPchieFEExbMz57XXxPxabKLnWcPBG54oyREyUsrDER5Q25",
  "key23": "27v6DTGm8trKvcS4HvVKAARSVfegQg3yaSNTFrqeiWGdfSVy9tWhdXwkLyxdoaJPVzDJYezEAGhLzFoMgGVPoVwm",
  "key24": "5Pa8kSnG8MgNLSP67muEdEtXMTCjbm8hKScvggbq2QoWAJeGnBxEBkVzCKdag7FkthWmL8jQowPcL6U2eujD5hAd",
  "key25": "rxNAE9Pz9DENvrMrDK4jXSwTdyBaVuid3N7UyvRUbCHUj1wgLmaoh14YWa6bpxy2RRy5azH4aRgsuPgZV4QUVPn",
  "key26": "9qokY6RyL8h2KtsfqN4fqmAL22sa3cyvG5SznHnW7ruREiYkLAW6K2qvvh4gEnkPYgGYdrntH89gEMBckGWnKBT"
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
