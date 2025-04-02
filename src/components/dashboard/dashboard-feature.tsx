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
    "3nhD3yUsipBSrBPmmaJqKRL4xUe9jcqNN5dTQ4ia3W83kjgC5tHu5WUN9buL1gqmHyEzxHsYqC2rx7DAnDYUdQsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42tTf3hX7UKijqyapQnjnuvhokorZpR7ttW6hH1bdR3DbeP6m6kY7kiK1u37RqbETL2SRSsTeTAqLrwd6ioA7PL6",
  "key1": "4xdbiXVqptk4iJHHheAHWVRmBEXUF8ZCLK7awMe1TvvsPNCXFcnVisUZjHh8Q7YpXAva49YnR4atA8fwMLzgvo9J",
  "key2": "5q2C1mFDoJWQb41z1si3rmZBMKYZXRN7f3wzMasAQta4i9MA5JU2a9UmLNg7mtRtdwSZZDbA6k5M55DNB4gJkTA",
  "key3": "5zxCJnkX1FGJfFWFR5fEyaccu5K4MAf67ETqDzY6tWhGXJXJYvfsazaPvyjYvTotV3TW2XNTM4B1V5U2FaXvMFUm",
  "key4": "5gi65maS6u6zAoTeoWFobUEnRiBPUwGMAbR5TopRPVzCkixJYCXsqCqyXztemb4qkSgPpzJHKmfkszosf6532Dt4",
  "key5": "3rZtLZojHRhqVaWoZ5j1ZrJ1VdvjEnXRBuCzsr4BoY4vz689o1GpYA9V3vqoha33tXNBqPtJrBRoaaVQZ62fWSuH",
  "key6": "hhbV97KPP1nF2mGynbaXrHjgQ44TMy16nmv7LnwARy1rhCSLiExvcpKnYh6iae8ERrrQoJxeKMDBS4ZiG3W4ixj",
  "key7": "5XRfi1iPg1MhrbzMP1THRg5A52Hsd8FXNXTWKm7bV5KmopFRaMwTBXSjPT1WfVMn6nsozMibjzTM7aqpcXa7s2oA",
  "key8": "PERoaa36yzhUGJ4y43CciJyqytyCWBz3NftvAjfDraYgYkgkUe1p2soMaXz2x6bt7zz3oT2kr7VQDUqqKtm5N4P",
  "key9": "4BAYHDDMPYUSiWYSE9peRJEGcbwvjP11a9nQGw6N3rFSdyNCoBZJp25DvSz6W7KSBdx92J5xzf9CmT5ACmBg9hcT",
  "key10": "4tNzapJJCsFBNYdYjF2ASRXYhcqpoKgPkU8tK831s63wu6vhxe1ARECuzkBnyEhZXk8nNnwXgNVFLWmzv6XYDNg4",
  "key11": "pcHh8sfMDWVSrVLhbzPpAnWWfiBBVawzb8ZPwJRMRxksJchETajDGzsvU8GfYeXTS586cq83BxYwwW3pHMGeBWT",
  "key12": "4BZA2EyS9xZwD1fUoiBcDd82ZoZUyYvERMY2uf1xpzGRPypZeJoh7mE8RL2SDhUZT9wx9fBYbNQ3ENS9n5PB7V8x",
  "key13": "3fc2H3EZnT1puSgxdokua2YBYPqx1BXZNPPc1fA57gaHV94Gf9id1brwGgstTqHTZKEgAXSHQN7oq9hjPN5NGCGz",
  "key14": "5k2P4e1JXQsufWuTvkKRe711zyHrWm8222EDRxbdjoMvayQbEsmDWi4nHbBW2njUASQfzjeLW7PUJ5dLocXsjx96",
  "key15": "4GM5U5mVJ91uGKGAiAeowu8Q9fysB8ETT5HVmwLcqw7LXXiBxMAcmCeoxSMqPocS7vZd57z3ie8kxZG5ivv5JLtw",
  "key16": "2MQN5fS9KajesTBr2q9SAd56PHT2Eof3hGwifP8c8fUoFD6qMarCvGujA4PMTdRwGw5zCaR6QVnY3duEz3uyyypc",
  "key17": "4HSKYtXXPDfqSr9Wk7wPkfKewgnCdTYXomdBdKmjVuJ3RgRD8zZp5jpkQK71ujZ1WydTPYrpxiXbm2cH1261NuWV",
  "key18": "38P3aQGDzG1FLYdrgmAYhbeKuwMAvxfKD1YziMcMAy1CrxhysLkcVABWRwkYAT1DKjBhkorAwa8e9bXZCwnYqN6Y",
  "key19": "5MR8UmnsFjKFn3EfxRHjGBtTQBBc6NNHtjzWpg2bdVJoifSNrWeF763e8LuEYhB6LeRFXGkWFWR4fkmyoUPS9THH",
  "key20": "5FcbFHdHKbQVAh3kKNTdrYejJfogY82S8oGvzuKquUVSzS62hxKAgKxxMYZ443mUPnCP54JSrdXP3pdjYXJBXXWp",
  "key21": "5uWHeHJJELcHKjJ2PPYJSNo2ByLHPmGaKiQmxxScrC7bJxthV2312Y7tD4JXCy4B4j8a6fvcbKnKWnMvT8Gbwgfx",
  "key22": "1aP63vph4XCeJyPKjA2u7f8ga9BZWkysy3JxkmX384wdwpdDetCA7Fd3FP4p8rmnonTzA9qUfW4wL2AD8FWauyh",
  "key23": "2ghneDDZqcR16kHbFCYUVv4naXLceLZDtUHKYFgnqXJoPzeSFJHB6rvhJSJTgwEync3ojRusQMfN4XL2x81i13mm",
  "key24": "3RCstLYxbwkBvgTYRZNDxnwsXVysJGySPhHuXU7iNMSecyCKmqvKysQA9rWwtU6FfTKLAZMTJfVtepurb2zk2b5Y",
  "key25": "4iDyQJv73hEEtsVApVDXM2AJEdUxF34VXpf6rAaKyHq2p48S5Kojb6CRL1crbtXad7XZA3d5Z82n3e82Vzv2MK5W",
  "key26": "3fQzJ7CBx41VzHo1MSebAe6GzkWUcQGnucm3CD762o2Sors69k94gmpKbUwX9QsHe2wHSvysjBUYvbw9s7cbZtLz",
  "key27": "M23tw1EFkhLhmriFHZZQw7pPdSg5kQ4xwmKa1nv1LyFsXEx3M62TUywBwaHAoejAP9z7RgKov4QrB58q6XWaWjJ",
  "key28": "5kc2NvgDi2geg1chhmrxgtvcx7U19dLx9VGRNBqiUAYna6Qoa6nQ58Z1tnjy4hRhfYmVhpu128cTqwR6fj6Fqzio",
  "key29": "cVFmUC8QwkFbPvY75gnBo2efCJ2rfHWnBCAedFB8PkysK9bZtLntsR1hUU8N36rcCKF81oebynx8e4LCShXmGNZ",
  "key30": "3aZJKKC7WdCynSmdC5K7epXGXbi3gaaD4hTLQcxWVEdrBWimd5spFLRtMBAASHKATQm4q2U3ie2BChLptLzma42n"
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
