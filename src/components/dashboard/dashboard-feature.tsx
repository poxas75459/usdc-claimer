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
    "WaJchTDQrVty9ChjMJaaTUAwih6LHhHoUHwWSwdigXjEduEBTz8FoNUvJJL9KMVD9cDCED6s5VxS31aDseDY9YP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aTYg6ASbuDfzrYBGFGrxs74vXnjsVhWWJBHZAeWTUk8nXDktSQa2SchwY76miBr4cAZZnnJYfQxryTzz8rkVNwb",
  "key1": "4SozZo2WoMBbxoXnr39mwN89mJ18226wcsTUn2L7fLwLJGpncwBt9ujVgAB9g6hkaRBQ4xRUcBCQeQfQGNLr2Fnb",
  "key2": "3HKcKodYw9hvbUToD7AkggBNdHpx9oJBzz8r5gtuVZZgdPbUKARMDHcmkTPTBXjfvEX5q85pR2vddJ4Ee5zWu8Q4",
  "key3": "FwTA3UmvMZhKLmwUNah1eFgDMSzSVhg5JtYyE56WMiBWNC3CEcMish6Fh6zdFGranSx2q66ikCPrjbyLVrtVXPA",
  "key4": "5dfYPmpjhPTArkDgvsap2QX334fGKH2nE6BSBKXXPqbegx1Yqz4r5TjpHzki8YyNf7eh2F6XvJKDBBhZsmFrbuPv",
  "key5": "3Vc9Cqv8GR1aBkUxjhVgw54NJhYnNWjiXFKnLaH4dUdZaFkkiyaKUr9yyt5vFQmXBZTmh2M6pWpJMS8FqFpZkBNq",
  "key6": "3xRq5MpTBFDULBMfRDeoBLehVaVq66uUcgXUjNKRRLY1Utr49H2pNGsZFuDx4HSSjHJU9aciBoYET6RpPf4fboVs",
  "key7": "495w3YmUzMnfDmdJMTwZZT8189hQygrTs6AqwzDVmPeg9S8QjombJDqHwxQ8EG2BHuCAionwaC25YnyEw4beTygH",
  "key8": "5HceTcRAahnPaWgBbRFXCxf6y6RLVnFm4iQPxZgxVtY2gfYQxFBL3utYvQixSJRviSAMLk3VbBgXoNMmwjAoFV4P",
  "key9": "5PG1zWkiz73PjHHUX2yMpeF1dxqxKC5LoC7o1fUypkA6h8CDtqcyfoRwVdjKZdbYVxpjHDEhh4mFHWeXeCG6nB3F",
  "key10": "4euHWhfLPzW5RoMef3EfcwMocRyC76fZrVpw8VXaJj9gRPqtszYbEtS7W4y8pv6THiL3KeLoNEphXMEUjsSxVuVS",
  "key11": "26A4uv2wK2fvFmex1NXgHNutcwanNtUeiq4tzVRyFicUbWRdQStRM6Gd8iFcivbhtKRUerLfxGyhuhKcaViZxDPT",
  "key12": "5P1W7wU28TKHYGLx3WBEbgVwKxmQ4PkpGZApGsMaUw1pCoy99hVkxEh2KrGidaAQjyBZ7x92E4ynUbL1eseASHNx",
  "key13": "2V2YQbUWbYnKGJ5KtAskbvcHG6qyLNdtg2shRjVBnemyq7Nz2Pe2C8n8oja6rCm9Q3i7ZNY7mzhGyfx8cDvbtL5P",
  "key14": "5xauV1yzE2kUzzS69ExGtLkaJ3kK41DgByBJupuKiu2bXPf5zSnkcabeXxowQXK2U8Hyd64cg5bZU7aSLrX62n2W",
  "key15": "24jxr9CBvSYqe1twXhWbdHJEpwvEWg5AvisxpQ7jQS26Um1DccFirDLVQsJKAYFkUSzjUQCZa4ePJPYuUaqkGptg",
  "key16": "5sG41vCp5Gn2V6GWnYmL4uWj3F6gxfNRUG3adkBxyj5nxsFMDbkc68irkGMc8MmkRJhsSdpGvffVKn82uouSDXfJ",
  "key17": "km2yMHmA7vKcUVdpHd4VeMQgoGyZL3RMVeecUDPqTmp1Zf722u8e5wbjmURV6zP5kZ42sqBTNTKdtLDbbqxYnau",
  "key18": "35RCfmtmLzzMcjK9pBFxCcGPFmHaGL8G71GKBEGMejutFWNnieYhF1Cotdfw4waBmn1Gjc3VoWLXqjpFwPh8hBKr",
  "key19": "4okDJ2e4HjFoH7gVVEhkgxQDAxetgn62NaBEHtnPkmMXP2ph3YXkxrpJ9EK6nRE59QBQxvo9VCTQhXwsvVgaXHby",
  "key20": "43YLVAKYfnQBCgn8PN5YvdUjCptfP9MsHwnZnx5PVEK79ciX8QYpGLnUrYwiif3ny3j11jXt5q8CCZJd5CVz6kgE",
  "key21": "5NWgxbzPiUyYXNZZdP25KLNYgZuFVAgveUEAqvnVEzEwYHJ1oFgzkow4MspGQvHP96qoX7Rb4A2GinJ93ghbTq3J",
  "key22": "38oVjPGVZBsYHf4Kzi5HAA7X4ga2hx54hgLMjtvUD33DjaZHik3eJPTwZG2PoPsmhZjUTGXKyU5WRmdKuUaJ8kud",
  "key23": "3UC7WwD6aHoJss76srGnRD3wMRmcNdRbRzBTMR88FpvYcRwBAPHfmvvEwDMXuit2vnZ8rC1Qhszwq7H7HoutzDYD",
  "key24": "44tKR45GgexwsUsyvkcebPM3BkANL3JiKKN6B8yCcWgb8GgsMp7i8dbHBsvmBb6pwy4T4GwBFEfGkiYPHqM3M5q",
  "key25": "46SfjG7g2MsmWYCacizuLenL6turJghDcY1qsutuZ5abF9wBQrWnZUPDeki7pWSPUBXSgUMstuCpbr1NJSw95rTP",
  "key26": "2LMAP75Sa2ejC8tYiMZtQYgka12AH8cxNLSeBt4LQ53zRFicRFrvp6kxnWQVtJj4WdHBMn1B7tZJ563PYNQvPzf1",
  "key27": "4hmopr4cZKt64TzPYXV5X63XxALzRK49Yn23T2qqqZCUuhqCepnmu6AqJ9xTsTupo2VUkjha4fJJzYto3gYLhEJe",
  "key28": "VQMfbP7MJsqWECgV6efummRYLjSU6ASsdQ8gmP9hENQZuXtfUaYy2n9mtoBmEGKZHuugkrZn1Vm5XFdNEfxKR5b",
  "key29": "5BdRFRFArYLxfEjWXzDzWcD3NFDdBE2YQuwftE2SqRNYWujyqnu3NP7bvpcVEHPdg3j1kkPDofVUXgAqJJXn8EcT",
  "key30": "4dYhVoWW71NVwBtPnCQyjjsCuTQhxW5XQYBFAzxmWUhSN8vCxZfvX6cXcZrMFzioYAD4kp57MpByQXSgDEhZYBQc"
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
