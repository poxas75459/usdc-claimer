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
    "56xTKDvgpgx3boitpL3HwypD3gFGtxjFGx2nvzjuVQ8qdhkav5j1qVxZzD4LD5jHu2cSuSdm1D5wY6WP4GAcfcPN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r1Y4QotrG5381jvgLXBiRu67DekZS8rkrhKxD1bei43QnjrRAB42KMg497U4YbJWwAWDHtzTiqZXkEVGPqCvaYK",
  "key1": "5ujA4kkLWZs9tnyytSKknehzTDqiyHCzzSMYuLEZGjDQBjQ6DPP8tcamVHiB7oiVK6x2uZCsHCfp7dxm375omNzy",
  "key2": "3ExcWLqbZnRqX2F8b3n35f5r96rj82253kqemcwuJKLR2tRf6A6oRqvw2rWBFTxxiqAXAgrVNQXPnwot3ZoY4URo",
  "key3": "yrEX25Nk8KWgnWNGmwSh9giVK6uiHeh6cbR6QNX1wL7ng8ouAnkKHweMRrG7X6ueL7VnuPuczcb2EVKmmjWLBXd",
  "key4": "3ipk3cUHaVP1t1fNS3Rgrgcpkmekhu69Bm97wKkxKuyZ4YKvziasDzXuPeQMW58W2vzfncCqyDGcUZUgSXtbveHt",
  "key5": "3VUznhyFN7HtFVW8ai2VhY2UtGjXyZBVPidtKviuDfBAerW1dfnETZD9VrjREX6cEXUyC2EGQ3uMT4sx8qRdkPv9",
  "key6": "vSdJ7zqRDbCASKSLNT8jR5JZ1KDkpKSZxEtsWrJQCTkKSbyTPQRqMKkfhFUxXnQqCdCcCDTMa8VqCrujkfxkb4g",
  "key7": "55cUarNA5xtFq4eGtTzuCafmwvbaWqB5KatK4X1YgshFTyDxqJm2cRKhxxUjU5W8S94M3PTk8vAWTeG8stPM3yXc",
  "key8": "5x5exqQFXAkdSaNTJVHY7hn95XzG4u8o84y1G9PGVS3LHPUFxZz5cSyzWKsHJgx7zgynLFnus6cyvuNkfEHDdRhB",
  "key9": "51HCXNW15hymPh5s8yVyuwUKwu95rW5LpUB6FSaihQDxb5qduPAWgSMdDFcTf1CuEjvuFEsb7kkPm3fFRN1btZRF",
  "key10": "55tedg2Hxg5ZmQhEKykM63GtKCxtNoam9jijsejhcRi3KzkWe5ch1KmEvmMbbMrBfudZvNWaxPSqih55FE4qQXod",
  "key11": "3eoekbNpHKw54qH5rPJhjf2L7QG9KHRiUMurfkMtadBskX3kFYBQ4BdzAzC5tsBumyPjEdzcErwjNZCLMr9jKcyg",
  "key12": "5pyGBbRGqaqd6KJDbmXdAQ9cAUYGNUTjr6mXi6orteG1NB5Y54Pv8P93AW8qzNdALFCuxRRV8qYAqNrKExJ1mPVL",
  "key13": "2RJbYBbMxoUBrgiaRCPjMFPDEEsF44rNWaaRmhqZoqELvCjVAre748CmQi2MVPtviBxZc3hAhvAzZ7GYeFf7dwhL",
  "key14": "5c3MrLWMKBaRVXjerRx1bFhGoxnZHPAn8VihuWvGkGSZv3Rx37zaVEytF3tEgcBcNJsDeDJq3MspkdY12GkL6mYQ",
  "key15": "2LVyG4oNuCiw4zUNk7zoLCnSVJkJXhxzyzY85AcQubiuzWHYnZAJsCTiM49LoeU9dGv77fE1k1hjKhqCcTgAShfK",
  "key16": "9arXFv8tmf2cd3VkLK3jDJ342Dsxsd3qfQ8YSx5aKZqVNPtwEkgjCDFZoLjT6PJdG4es6HXbReAfdz2VoKHPCcQ",
  "key17": "97bJvBW43e9zLbjBCLVv3w9anermhomKXFiJfGdd3cnx9ZPLoXRykddLXgShBjHtguLRNbeajEZNyqRr8bbZpzK",
  "key18": "2bJm6Ndm1T9WXifr5cKAR9Une9UqtMAkvzE1jkGkRXJfXw2CLeDg2Fxt2rA8orQ5P3rJncnpn92mtZjAiJ69Eww6",
  "key19": "2Wcj9gY8N7aT8Yih9jYneTiq13n3NMYEgmUFdfHzK7hh25uQi77SmYK4A6JZ6aegxA9HctaYkvDaex5PCNVY8UeK",
  "key20": "2ncR2rBsskc6nfqQUb5aHKLXm7DEvt7PHVTdwnvhtEpXYGexZ65sutHRh4qCGpGJs76iyDwhAthCoFm6ZDqJAYnG",
  "key21": "5DFAxwHDsZYyTS5Vi5Hq3UpzofgqNuSpq8diXRtTDkt9m9QhpySTfNwooCNJNU7We6cFiAen7uSucAucqUaByYjp",
  "key22": "32SjXis7ydRfgkvgQF2WeVAtNxVFbcwkZL9wuVY3j9bxKhpKHu9vW22LwvcWcSuFQiACKgihrweCDY7t13JBHjQk",
  "key23": "5cTRsmCwFiGRyuU68phGsZSSgxjJqkdhXkUmA3ypSHXMzMAXXZq78wAzYNzzFLEbzG8wh3TcyFDvw1xvMAEvWSQk",
  "key24": "2XojQMmihmXS9VVFWbugPUJuNkZ58kK7XP64isvnTFYB95qCekVDfHL6YmwRRUeg1aDtQ6n3WX24yb5LgcPjC8uE",
  "key25": "QyahDrg1BApoiiCCu916Hzik1Vttf8Xt3xQpYiVvp8KbN4mHVcTGyEoyPU13CySaQP9h9q2UxaRDUC4Gs3beftz",
  "key26": "5vW1Enqm8mzMnCbhs68pjVBbfMPZa17PNELaRecwWz9EdCQ49EtdcyqBXrYUKHbpgp3s6UsDRKZGXo8K6ppJNH9h"
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
