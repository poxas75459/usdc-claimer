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
    "3FJCTL7BpegEzR3dMW29nGhixCBwdyKi7HaRf1DUemVoumNUQkmYbzCh4yW9on6aPmiGdFVDefkSC2GjpXtqbqK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32R6swza2DxQDUmSNjZY3AF4kbbukXhvuyELVCjJq3TxGZwkxJtwrhyxYwL2tKMhsbGgpTVJdiHC8psyGx8noopD",
  "key1": "3WRLSxGEQP73XVgoUrPiuFbLXeFVHbHboK7Lq3NwxizFFk8gK9sgYuaowtQ1KW2K13Pv1yoTvy9bKwbN1J6QtNZk",
  "key2": "33uKC2ajcaFpzhcdhSY79Mtwr2zhPirc8VnMVmivK4RTtkcWREvt8ouMdczerwLwznAT9dG8r2oj8HXQQWFQ9da4",
  "key3": "5QTT6idpf8TMfwSM8meKKEgBoUKjeZc5VcnjhyT5AKx63foP9cG8TX6MvJA4D5T95dyaviuC9ks5oLZPQwQ7RZbn",
  "key4": "f6Tq9bb77gomwdpCByU8rG48p26Qk6NPLfhrM8Gt1NJUGioMXtfSfpSmMBXNJArfe4dBJyoMUKpnhGTiuGU8gG6",
  "key5": "368ydefDfYW2LErBuQ72Vg7B17k2PSCjsTNYDHBowUPrxJERJrs7vxxj7ADrKPxgtZ4eBcLrDptDT7GTsXqeEgT",
  "key6": "3A1EXmdGQDEg6h6ZsVgqXXfSJKiooab9QxpzaRZETyYqVB6qSs3oUHCxgoodc5ZMniUa5u76h2MZpTRYkK3kQPYm",
  "key7": "4QZutsncDQ4Hkjgdd8iUrheyVhst3nWJr1ctZUrgGbEjVmuDAw6kJX26vUoTSL1BJpo6i9s9P9VunrkfujxZ3QDa",
  "key8": "5mZs2TFuzjwVypEA3z9jryJ5k9p5sc8X7ZKtfqdHBywoaCnTmbT4PRskmadrTFcQQpeH1eHxq9hNUVo4JBckp8C3",
  "key9": "2RDY3CsfNPNcdRjm4ZoNZhVibSnxBmLSoFNAQ2dWJtNZPkY1w9PAQLCZ7gCcp9nwkoBhFyKBQ5aVtXu8YKCo3f7v",
  "key10": "4zXC7UN4uarUjAQdKFgsZXgsQEqpQmRszJdnsg4RCPkZtdiX5NRM1MggNiQv4YcrLdfRzZ6xQnxm5Ao6YbW61Gea",
  "key11": "492TPv5Xv9JoHpy81BC5b5XQh1dYHFJ2Yg88k5ab2uZLcFzB8gEUkfkHghFrRPJU8G6PAwifunycc5B2XCqNYinQ",
  "key12": "5HoskXkMpNuQQboSMjXaMfWo7bugNKSkuKxdB58RsUX4HvzF67a3weW6KUPRGtb5gy86Wqbg46TiqXq5nDWjagwy",
  "key13": "3ztFQJMtArcN7F54YZvM1V7fVpUSdWpJWU1m6V527fc9rbTsxTd72rDXBaoRvPUffgZPv1K2qfFPjQkZNeFjNX36",
  "key14": "2FsfJpm9f4RKNT7XJwZjpLhZLYpqPd82zKEqAi31o19AMzRmLTRDayfP8af8XSZ4ENgrTSd5HCybRsv2tmYCu7vt",
  "key15": "JPUXz4GZ11WfDR9zfGi6LoaPmW7nKMWALhWnhFN2gL8fh1ZZpdPT6VKJHjs2QXMtthyZYKVgYdHBs3r71ozKswy",
  "key16": "3jmGBrSyF7jSAREBaaA82TNCxg9UPD8gD68ur7XQPXKbZuDmc83yy32H6TWosfkZ2f6mQrBfyZrffyCxxBgwzB3X",
  "key17": "5THrtuJRWe7NdowwNyJ7P7B5Wamw7Tow9vyBhbWhGRk3eoZ33kbJfSUxvE69rBBuc6WU2F4VwtwZ3sdS4PDEsSxx",
  "key18": "4LgVHubvcPojG3pVDErcgJznD4D3NW1dFCz1EwKi1bLzUzuGKSj1uSq7crozCFWaxwCCLnwRvTg64Gj2tfCs4cQf",
  "key19": "qHEnkSXnQmEZfCUsUazJM14rE4tQMrSjMJKbgmi5giuWJDVh4bAmCvJYFFwzv4ZmEgbiTbMXTQxFNaGfxN2j39e",
  "key20": "5xF7p1etcfCWpFqSvcUEoQWnw3TUc7WU3WRy82YgBw4i47bMtv9rmFbucsNncr1wnKfy6fQZMLbgDXxZL5aae6BQ",
  "key21": "5ho8xav2XBYbQBjDmCy8GhXQbkUDUh4QQkngwJpKL1EfDz6h8e2AtmGJDZ9oDvrSPZfxrYWFgZri4Z8mx1iGavP5",
  "key22": "2viNtWfc7ES6do8bair2Ju9yphsL7QHa4rS6acLPDcZXprtjLiUCgXoHaJKYSyZwfjpJXjgCG4i5RpLvhqHg3Ckw",
  "key23": "5WC53mJ1qV9gtJPtSq8YbRABW8Y6LUcVsQmvcTiP9F1yjrcpiCuRHWz25SykU4LCjodN6APYhTgrEKsEtQrmUitU",
  "key24": "53nzNUCs1DLj6wWTZNvLu3sBWsLE5Y9SfpBcEvbeu8abKzVWAJjwWUot53eYULnjy6796agytMmPBtqqa5s73HkW",
  "key25": "433prowxpkE2mh1XekST1eZTP7LNfmGSDWYuMgJFgrMKtkYnjzmoGtMQVv2fnq14zPFvjGU8BVj7pyL18SQbwerJ",
  "key26": "4PB98vAVBuqM5SzkLF6UbA4EpVTFZ6FvqLAB35iBeDA5SNvna2CdaXe7w8CeeDpjMxMG2mbAkxFbYKbmTa66C6PS",
  "key27": "YfJjUfgvkSnmFXCDkPyfgc7rAtC4dCZHyY9Ccrm3oWemqhni9d9bnQYPZgdzoiBTc4tC73iDnu8mtf8ow59XHeR",
  "key28": "4NAizRRBwiRoVRC64fkqBHia7MZRfW87F6rZ7FhQBSeFXV477LeFxyVQzaTgh9cnDtdmeLPF4pGR1UgWnzuiJswR",
  "key29": "3SZzANDaYNFRdoShS3fGZeNNHkNozTi4FJ4o2USEbm9Nq2ct9sf93aQzBKQpxDDrUEpyMLe2wrUSnjSDiTEdkmqg",
  "key30": "2zAnkTcnv5eVQSgvcffP7BdYNKosNPQhwXcVc2hM3vKT8hVHs11MgxvS4KXYfN4aAGh2uYpDikVWKANKX84SnYSo"
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
