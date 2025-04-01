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
    "34MbWraduCRyjGe5sfgn2kWG7qTAhcEfTWjpJRw7YWMskf3m6BR1W2pjQo75CGkqaA7fJA2JPERHt6SKc5jTujmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rwqpZqU416zA1JKtE4v6VRRjUCCHpAJ58pby7WNtKy9wydFta12wCyGxH5Psn8TPgNMNajVRF8RR41PHdoMsJcc",
  "key1": "5JWAySP9ekWRaCt4VFbZSH4PeEpkvShtt5X5zPLm4VuATnHn12cBfi9Wy3Zj44FgJkfhHck34XxDP7gEyNuotXyD",
  "key2": "3WqUUUK4HWw18kmCX6ySt2tw9d7N7tfEeyH6cgS9LRZeweuSY5dnvwnr391PxxuoeQ79CfQpJQCgx3iqAWXrVzC5",
  "key3": "feLKKVp6VPKTYBMZUZQ4e6dSeEG167simgbbKVLhHtt4VHiYLYibm2YBr2BGHqAo3sa6XZvEc6RarYzMiXqaUCh",
  "key4": "4L9GLih4eM4RW5fCCfFFF4dvzgHehjiVsWcPUqQVxrvBGiHXeGJpUcRSZfrixsYNhcSo2PQQeCwtkA6Rm5BSLk9F",
  "key5": "5qmD1ADgFu89x5HXa84SnggW9YCrCp2tReDJ5QmhDhnwgYkiSZm7eHRKMPMzCdJWFdmhswUiuWAoGeY2gwabgoZJ",
  "key6": "3mzZBPrBT6outSnKZPQB2JgoXZdgwK9MdW53Vte5XX1Sfg7YhYtwKLz38PunS9W52sGt4Z1bALndMHxtAjrqMpAM",
  "key7": "3G8shUgSkaguWV4RFqVJi77FUxEnHCrB4BpTUMivdtma6rvYFGXS7wCBrAxWCdsg8b4SErMsZc9UN9rbADFkYS9L",
  "key8": "4nR5nfvqTb42axv1XMWMYXFewMChpnUBVc1kyvpCi8gz1NSvcs3YAZvnogQeeVQCDMX7ZHoqPPjhCiJnf5Rk7t3A",
  "key9": "3r6djSkmBoo2v4YCyUyajnUTBRPVf5c3XWrGVxB25KiwhUsQZ8ucoQB8RpNxntUdT29wAjxAUyKtPfUzWnCBvsdH",
  "key10": "331ATC6c4d6fbPnEkMLzg74LnY8WPriFQF1W99pZmUP7PG9NyqsPPeEVF6BKawm7a8eZv7agi3x9ib6rmD55ZWSZ",
  "key11": "2Esm2d6u3hzfPeyoaK4FYvHtYcjnwrLRbVwSGYPENSRjoEbBiMGcpFAfGVSNU61sp9FTnQNFpF2JBMqbcxmWedB2",
  "key12": "5CYxvXpCR4qRJg1SMJbuHJ1PfwU38XomuMQ2WwDJWQo9h2xJCrcPc73PStxwCyZpJm3Xn7eRyF5pLudCDxFHqrDT",
  "key13": "YH8gxG2YURoiszxrBgcjxpf2Xvq3Khn6ToozvRSYRnezVAn7B4VVN31UtNLBmT51zqXANHTXzSDVQti3MXhu4su",
  "key14": "2789ayH6SzVZkNFJ5aJUDJMoC5CJqFPqSgwgFpkSWAtJgAHxFCtR6yFFypbFjdrRUdxUYx3UxL8ZrbwMb1gbc2Yi",
  "key15": "Uf6YxHnTutsidUZppkHmfrSTTY9n2TtRwTP7BBsJJ3qzqUeDYfVWjMqrRyGXrj6vqZ63i7qJSxATBuAXi92euiu",
  "key16": "5ce9CdYNM1ZiNTTdjMpY3Q1Er7kzSFvhi71559MTcVBFhjR5vptnLi9VqJRVtPcrq1zv9DwCSapMASBuFAFoujNy",
  "key17": "55pb3LUFvzbPbuCtTQsC4fASWdw5rdnxSGUfqBW7cV3LtzqZ6QQgK5EELxNZci3CFmdUTGfaDohT1UXJgPKJSDfQ",
  "key18": "sUFFcxe4nbmMogdf9DPeEcZ8G8mXhixMLYSEc6yK95dn6coKGQkkLYFLLmDFyY2Q38FKqLSKNLcdj3tSuzGBuBC",
  "key19": "5SpTQcQoK1Q3TcMdVFhdPSWyaC5RDs5ZFb4mjVrzARH2orA5aAm9y4r17Yz99uKPXAm3d24zZMRB5em4fFt1X41a",
  "key20": "5dMVSf81mg8d7DWkRemBc8hmr2aoWjEiGBPAUJkwb4qjwGY1vmobKCE5ii8RGfAJoqQ9FY8xFf3fAkbBhGXmcPRL",
  "key21": "3QX1BLLsTpaV825zNjQrPpWJ2M9RJrx3AJammKDbX5keNCHhHaE6dgN5UjQ4f7Lv1cKkb2rhpaZrK521rqg4exhQ",
  "key22": "66vHCka3LLUgHq6Day9sJzPaMLEL6GBRjhneyKzMU61KDg8o7QWBEdKqWqRyEwzWXRdaMfyJV33G4gvb1r5NJQ9T",
  "key23": "4BEHeE6DD3FabwpScjNVQBV1GKGinYpa9z82bC69dbvtgfD7nXud34vpn2qocXrSJ6Xvwb6GMBPnFL2deALshD9j",
  "key24": "5mjeB9c7wuBWHjuQPZSc4Medsb4sEuNux6eKVTmwDbbXsyhWsjSNsD4Gme1icw3zZCeo5NJSX7QVa1y2wnE4pkby",
  "key25": "QDjJXivTHCPf9h8gEs1oezYeXAggXvJAsbhMfL8bMDpubEk1MKNixWYdy3zfnUHKdFM3mTeeg8pGY98UZJNL1fB",
  "key26": "RQ4H3MYdVizLHx2jhUeACUqwvr1UiePocqyDcVrbsFT9eVVydznroPcHLbdBwootoCtwN23KBekonxWpJux293Q",
  "key27": "sPuepM7KzHjXWggdAAqXXYDVzHK4MV6iB3kskbEjzqr2g7Y9vCRSZ5EanYwWuaL7mhRKwvN4RQgQrUdSkddKBoF",
  "key28": "29FF6AxQu6nfC63Jg9ZqKT6pfqamVsENVce1g4jsTyGgmZc6s2QaaKEh5RKCQfeNYS29uhA8iWXzcJn4vrNvbRXN",
  "key29": "fpVT6ZHTwPi6bbWZnBAqGoEfttLYYNqdMsLF44kEaqe7QPXM9SWgy82YtGEP611KExqj3fYwmqaAEgDXMnFrXJg"
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
