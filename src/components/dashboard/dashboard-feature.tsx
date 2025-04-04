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
    "27cbU7cPRUZMuvTLiHggKFPVuge5Mg4LaW76Et2AiKVnvtGRmPRLJQRyoApbEEwXmtE58kiTXkQqEnDbtmNf7wHm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yd6J1hFR2KWy9i2aVw1vuXAmbWZyFR3UwUuHU7PESa3eAMNt1F7FRA2sQ8nHEUi5RPxctqx9ThtTK4CKFpiaiAj",
  "key1": "3sq6qX74uJE2DrA96MkYRzCDg3JjwvfmXuBV9y5QHnLD63E69CS9PeTnnVco1FJjNG9SzfJWtGfXixBtwKgh3kAV",
  "key2": "4eRBnc4jyAZEg2KwB9ynnUUUgiu637vRo15zoANeDRjvTUMFzCH2BSUWPdwFZkvYszKf6T5jRgMpgM2WMfKEN5nQ",
  "key3": "5cnnEDTFHYEzhkXkycJzc6SMiFLPRUs7ZuK2C8aKqsLiknrqGXJneVSPuCPJcGiyW5GtxweJQ1D9hBBc42TQeYMA",
  "key4": "3LFzK2KRpJXWUiSi6NyYMpabdoaMyaNiwtWLqxcRknnV4gmkwiQK24HthR9uqjQS9gastdz3F19JPXxFj22XHcBk",
  "key5": "2paGEFhvZAmGzM8XpEwHsGvpS6Yi8QQHoeWwByeTKWnEHaEJr5U5wh7GjJpCdeSauH9w9muf1tR9UusfYsmmFg9M",
  "key6": "2xXkpa6pnp1gdaJtpzSsa3mS2nPDSPzMKtEGHFwfhcydCm1gjsTxrqCN9ikpGZ1Up4wRwWqeMhfsfJAuGeGrRWpq",
  "key7": "TmeQ5jkAaUGQsm5bWnPgxTy7wJiVX6HUgvUVi5mJai5iZgcgZ9hvbwHpHetCf4JhF4wugspiqDHv5mCpiXr1vjn",
  "key8": "2Tjwgi8zQkFiAK9nMmD4LBEdu1UvSb3A7wfdoS7vAom4hN7o1yZe3Z9ZMNKxb1n3k4LTFwVagxRMjPMHf6SnUCNF",
  "key9": "4xESG1wzF5MmhdNw136SfVe9tV1yNdMCWKu8CTSEkqWRrPWCA1EeYUgjzXf3Z2BST3JDKZxMMPzgsgrXywGCDpQu",
  "key10": "2QU5P8UaSjYnYjkfyiAvUX5C7PQdZyy2rGJrX11XeitPsVtCTHxJgSJXLj4NxS5ZG7931rjRdABcJwzG9S7sFHHM",
  "key11": "2LPVi5VTmGHukKgpEfX3gpuzzsQuugfBiAacZ4Htndqxcq6VrtE3MgYEoTKupZCjGZRz4gKCHBp2T7HYv6NgkEzu",
  "key12": "sp3LcCnCbu1PgLT118zqwv7EEYV36u73Ut62D32JQnicQNRBKbPJGb9EvJvr1DLBMivPTgKGVdB76yYJFWMYeLC",
  "key13": "325Wp6tHALQS5e1HhmwUB8LQsBYq4noWyFyCZJ1JJZma6VaegRRkqTd62uE9WxqmvCGCuSaQzjJsX155gs7oFeLw",
  "key14": "o66JfCgJuKg1KJ6MoDjRqHg6E3Ns4paENLUTVNxwjVmuVkfhqrH6HTZmgPsos2VqDqPyo6sC2xJsTGt9GyXRCxS",
  "key15": "ej7w6FLydCaXzWdS3k8NGCc6ZR4k7Hu82HkwgF9adKBST1xr25Vq1hKW38aCqF6sQx7VbehN12xGNXGyqeMxctD",
  "key16": "2DAmihrUSZBxpH27dou5FTwern11mbLcdEUUwQL2eXadZbn6NEDk7BixiJGdpVdFz3LoGih5pMmnQUqXxc7Ytomu",
  "key17": "2vGd15VG2sA49GgGGVu2SK4ZroVrHbFmt5SJ9RiNkq1dujpcPBQ9dR279ozCtyG1HRwaUtGKuphmsb1CYQP8jKSY",
  "key18": "4SjwanK9jiMxiJusqbbjwJ1DLRpAMmhHgNR9VgSWRyRns7NWQqmwpp4Xzh7aKJDk5mbJUVM48pxYZivP8nGtsm7C",
  "key19": "P1zrHVHUWwnh3QRqfdat94fWt8dn5hfF9D7q9qvfPeaHWkjKPn9JVQaQSc7TBFNH2ZQz968vFjAi5xYdFMuoQB8",
  "key20": "5CLeJfVraU3rhzD4uG4irpVFyYmZS4iZy4pLYfDs1at2LzPbkm1Wp9kRAioeihL5rAov38cVvyGWG1jWFcx4Yjya",
  "key21": "2heY62f6aNFu18wCuFB7qVV8YvfM2timaAqzqzYepDD77TCetbj9wwATFuEDLdeKJTcyz5gb8sdGPrGUKXYZPpdm",
  "key22": "5EFGYJrV4Ugq8m5wkPBdFNTmGTN4w5eqjkcNS9S2DB268qEK3kijbEybKeawcJx1h2eWAmnw85SnHA7Cv9YfqQeq",
  "key23": "WPWPiQwDZFU4f3ce73UX58EoN9SSwKFLjz3whDLRaXvpyEPh6xnXrf8RAvbLfFtaGNAibzwojrgTNeUNGLGHHHH",
  "key24": "4zMJgDv8o1W4HmCRYkq3u4cvCHJuptZkRGgiZLErk7uE9A7T4bhCMVmKsM8HGrjXbLG5ukdkkDNtomG6RqiNmP5x",
  "key25": "2G5KKUNyZenF5S7rNF5RAqAC5gDaGGsr4bYrp83m8b1uLxngnbyjLY4xoaZsaxRwoMKtwfbYeHVCJZz95sUhzqs8",
  "key26": "2oY3yNe5ZZFHFnBJDjGgVF9GCsXkWiZnDWX6tHefzPLX2y97DtmsDDKEcwDZMLxUJXQCGFgXG6JnfkRsvgV4R1EN",
  "key27": "X53kAkbvC4SYhnrX6AESpsQiVUTUiYGuKqgNM7hYakKhgwCzdZJ7fvTLefVh5PJhGE8G14RivPZsMhwBBDYkPUt",
  "key28": "TGivMk4QvuEbHpUjVZLmUEYUECL36n5TNWiXt3BTd73kpB32uT8KGjDWFKkGJoE3dqEwX1nrEj6uH4LF1sN6Aee",
  "key29": "2ZAZDZ4kSfoU77QwzSp8CWMzTPJtasocEQWi3Rf6nbuMc6N9wFMfEPub3TqcXk3AJm9yJxs8vfwH7MoKtM3i6CYF",
  "key30": "5tpNbPTXcXcosKUDsZwsz3C1BhmiDBLQcEyCzABaLGCzSr7FBVSfbTcHACdqGRJoe5iqca5RPofLCH4Lv35Yh9vQ",
  "key31": "569jweJN83AGCyZqnqFYLTsGkKcAy6Qcu8eCyPrS5B4oAWAGgiLBvarh499tVeUjJBqzdvs1teNLFYEcGW9Xet9Q"
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
