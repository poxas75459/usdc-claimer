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
    "5daqrJSiwEg6ZZKeE2J3hyaSgdHQxX29G8esTbv54z5uspKkHbVFdcSd5vUdnYk7A8PctrJyiVd6vu9JeZggKZux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QFBHEx6y1LnT47up3QDTGasgyKj2Y963XCBksSE2XSJMW5523pGHaU3SpZLck2dz6rBWhgN2rg79gWGkr3nuAWb",
  "key1": "5dxVSZb1REjDzV5a3nJi6BBRvQw63236cfKc6xg86u1a5nibGCVSjg7fXe4E2JmbMhZ9dpGVzQfFKtHtadsSD5At",
  "key2": "WrCVjLkqn3RrRMn9nWPyzaUQbiLQwTppiNSzcv1mX7SMfvaxgsVfyDnGmLzEhaE4EA2ZwcEwtZRr34j7o7aYDCu",
  "key3": "WeV566AcxNAogHkMsddjdBhFjhFGza1P1y2BvowswCSRUcAE4UzR6RqY7PVABuXMpa2r99s4vhXMzjLpsCJvJB3",
  "key4": "33mJR6kPsVStSEMri8DkFurpyfUusVKTjbzBPrQbiP9F6zgu5tyq9htAspbYf6BATFMK9z2fnv8TDdg48VmPi2ZL",
  "key5": "5RpHjTR5xkLnaNXi7S47m713KgXA2e427kfGXYE3gTQbZDeub93RAG5YVw4TRwYtwBTJiehauooGpa3UyZhddLGR",
  "key6": "3tHsEmSPespALHRFD3pMtUEiEBu8mQt3tUnGcNofzcsBzjaL1nMyLtPGdxshpqCATR4pYe3ozZLKrJTbUtKfTBhc",
  "key7": "3QeQ4HAk6EGC8bod8EbFh4vbvEmnpQVqNKpmGkS7DkotYrP72574NX3maU1mV8ufYEcXHLzSXdyZ5HkxNLSjVBAS",
  "key8": "Ryq1SP4ZzfXjwpEwMDQ8f9qtJ4SNaNGJN14ymxbS1A57J9u8jrPgpYianHjFm8dXsYCtGeGjMDs4FKvi6xFqYaL",
  "key9": "5B2XMFmG99cd9UEEdyyDso7kvtiKgfNcfd2JeLWpYiRcLqMMqLsiKQaz4aBhM32YKKYK8meFDMhpGtkdX3NW9W1a",
  "key10": "CGB1j8QBX5pgZF6PWg8qVa1ZZBUwX48piAkQTSVWzaKYoDxVaSGi2Ep79gkuYiqWX8seXboitxWqGWe1YMXbRWW",
  "key11": "4MYkZb7PDkoaAg7pLZsSWi6fmNB62w4mB2kocYVY1CdhStVj2owofNi3xZFh5Q7Hw4zB4ambfDfvhcm9Q6XMHv1g",
  "key12": "5ZojDZSVKDfD9RqBHVGAMF954WLuog8aC8PgB6qTQUikCrYizcAy3wxB3gAnGMsWP2GMHENkT5EXidmtNMZv8WBP",
  "key13": "5i7VzDkRYzeoJhmPCER95qTBNUxHxopYHZsobJhiR2cbzXqx6eBMyLCbtkrfJHZQPzWkY3g7qjEeBUYxfPawowtk",
  "key14": "XtpkocGqRyMmS2Qaqfam9v494tGg5nDiTuvaY4vgY1o5S4ChWC4KzcRv8VhScUiubxmxktP42Y2twXiYzCYMudk",
  "key15": "26poBfwkaYqiJiWG4SRH8dH6nQQd6nSkMetnhaDTM4hwJwifhW5cWyQETJaT3ZyykXYH6PiYiaDx5SZZqQbKwrwB",
  "key16": "4kcrcq8BFTjXxK3hMeGaYkigsBkQTAVamZ9PrQnb2GmBGBHq2qq3zhPQ8wqbQnRefytwMX6QQpZ97XNqvVp5j6JE",
  "key17": "3PWs9FVhrHSRf6E2e9mwzDAc7YWgx4i4Jzws76tB3V5zbw33b8ctpE8xWCfHcKXcfRYawQc8yfeiqCebYNyAtntq",
  "key18": "t4uubmwUEJb9X1gfWqVmP7HgWxdXcd4wCtS9Z2oNvZKP9TsJ9C5vsLKzXoKj6xGT9yaGB8JUmsbrPSiZjPAq3ps",
  "key19": "562mtEQXydAGUTKsQGk3pHuTvq6cUsuPKMK1xQpP19ndtBbbkC3N1guEUJ7pmQtTdEmW7qh9aetpKYE9exCjSvoc",
  "key20": "5YsrMQ7ZX86HG1asFuW5g4XDS2oHXtFpJGH6hFzitT6w9LETaVVQcM9wWJMxm1vpANhQHAsGipV4EnRg8vVHz5dN",
  "key21": "4xG2V97qB5hbD2fWj8UyymdaThbjwNjUF8u73aTvfftpRYJAhZbvGFij8LswzohkMckPE8pdYMUnLnoUGAr91KJq",
  "key22": "4kRrkX14SA5eTEU7QJ3xVcJpU8Y9waDJzoCgfoCiUD4aSekS3kcz4hgoCwKcKCSDXkgHMEBK1yLyGwizdfhhLkRx",
  "key23": "52rdREC2bc1mEXzaFxozWcubfkeJDMjzghNW6VMto3efSVr5k3G1b9Wgz8jC743zmP1Pqho191UJE2LzD2CeMQaN",
  "key24": "4KqJFJ2b66gYRoCdEfmaeMRbaw5UWdgTbUkFfRmg8t63WTRJYdhzjAGC3Mo59e3R82NyoMFoVZtjCiZ8rwZ7QyUT",
  "key25": "V1EqRJsJYzb3NaAe8LCKv2XhJ3motGSf8PKCdGnyWMhWcxhWogYz6YFYSbgkVhFJPd7YfYkQCFgrZRCq6rKfgSs"
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
