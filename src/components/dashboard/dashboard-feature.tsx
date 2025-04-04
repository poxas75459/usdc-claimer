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
    "2tUzUDVcrUUHYGGGyGQoAU5rXgzvkYKgTjGmxZGxTUfwyFwWX2XU5bCksvpuh4p6SRfD6hgqYYrkuyG9d4LPjLRE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qRVmWAUBjiBwAmgUHwHxAbMYKcF48amHvkurdw1k7ULC7gQsrJwKWqgFk8GNk5BZG3GhMb92d4CA5k8NmFycJCk",
  "key1": "62YBXgAQeG7UAybvCiaieEcn7sB75bSggBKMCPQKhJfKLLTeBtozDM4gy5UzCTAHcbTnCuu3cTrV2yM9xcBrrjMz",
  "key2": "3Eoq3d1GfLb5PC7BPn2ovnVoB9U22b9qSALExouN2ssYJvgrhN7pHhrViaSQNTsSDCPZLto15eVKWrae3CNDJw7s",
  "key3": "2eFAn3wncmA4zQjm4N4a5nfSrBpCWHLAdVzsnRV9YMZefpXTMpsAEao3EVTw6xKQ2i6ajD1tmmcoky1fjzSDCGzQ",
  "key4": "5jYgzdLee5SmWTvzme89TT8vjRCwDiPShq2eeMuibKuwsyFjwDPQC3Y7G8ZpSv6mooQJGMqEQ5Er1Wshi8g57Ej3",
  "key5": "67QVrRoRNBMRtuz9ruPgbju9TFgyBZSF6bUqoMrPPnDJ8fVW9M33bVWCNfHgwnW9YB8pwHpnRxgF5TYtvFtejujz",
  "key6": "FBfaJW3DdvHVddiNYd99H7j7e3ANcQcZrcpYx7wQVnZJSQD7dKt5qVfYq4zX7RxKz4VAXYsWfHzUK75KX6r3num",
  "key7": "v4comiyMBUdzSKHMc1oi3TgvffRVsEgVZiUiumXFrZuXxiWEjJyt2gR6JVpAANFxE1wFvKqfwXcEVTniypdtdGx",
  "key8": "2sxdAkqKHBHYrvkeYh3619vF1dbdVe3dMtZVBZDz5zr4ujZa6hmAJcqrLNzbivTmAu52FiiL8PLuHSrAJobmhwCc",
  "key9": "Noz1Nj7wayH8p1CfzUGGDnYqHVYvEHWpJEPCWg8Ada6ivWMAQuMPgCNR6z5QdawMFuEZUk87qk6YfAUYegg2giP",
  "key10": "4YwDkVpyBswANFDCML5xbuj15ZGKKNMqWbSJV4tXeviqhmxdcw5MtEDbWYCfDYhmPj7bi1UbGawPTatmdw1MJENC",
  "key11": "32R6sWeMDWa4Ge41pUAKswf58bDUrVXTnfNyPd6WFTjmbPnuwgih8ZJjPUQd7HmyrK6wBqNynBJWobjgjUXh9b1A",
  "key12": "5ADVwcRJ5XQxbxgDCD8qGgNrTRU2Tc9LPC3kwYcR2pnFwKUZaTqrMaNuUwkx1WNqiQgXhSmC4dNRqVCdy453dYYk",
  "key13": "riN6FtmZ7Xf2VU5J58YacJoXSng9eUbU2iNH1JbVocFXKyYQybxswWEt8UmmsmVmHe6tTguwXf27Pfya1dZQyCy",
  "key14": "5NKh48ZK6zufRzpSqpP1Gdf6KbWKhhSzgzdEiBrk9VUzkQpdLHsuYXB8X8sUcT4Ahskj4GanJy3yp1FeYdUsrapz",
  "key15": "3E1pwEWA48M7riPYLeVNmsc6kKgxXf2BkMXNv4k6W4mvgNmdW4WyfCm7ZNg1EuvtEFU9oKU7tDXutAiKYRHVBFT1",
  "key16": "QccrHXoHnjzvewtBBvkNGWwn3sDMdj5sJ5odNgFmR8XNRMb1r4NK2bRN2Lj68WMrLGjGEQWdFLJhzhtZCL3kfyi",
  "key17": "4fAoZmycNG6zZT4DZRzXXjCzjkzqwg8HybUk3vdzNGtAERefWJA3cJdKjqga4EtJGkzu62xY91x6QLH7yTnW9zFF",
  "key18": "4YnM5uUyhi5b6Kt6PcNNR7iTaGPhWrfiVV3aW4TwPeZs3pFodhYYw3fnawKf8eyqtwHitrKwTiwZvm4smHjZgiQS",
  "key19": "4d8x6pv1bXFX6uJffEB8XRa1Qi9PFTmE3sbgFBMq142JyMFpA3eo2TodvuXaGXaM7UsevBecjEAfFM1V4EX9X9iU",
  "key20": "MxyzL82z6tmf3vcBYgyYWc38FeX58FYLX9ciQPHafJ3cXC3uW1YEqpbP1QekwvXsezZWahuqgeGxk5dK6GZVW6C",
  "key21": "5WEHv7Wc5unLx1ZYX4XfmEXKuJPM55bHLBHRDAnBMky8RBDnDSyE2GosmV1rd9UXAzE4xHirVcEr1aUuH9wpqesr",
  "key22": "348GHUiayyuLhmSZE2diapWLPqAi8rWX4a1e4QUrjFB2pgwMQe5PYS17fdzg74Awk2reXDC23Qs5SGsApHUS4jeR",
  "key23": "4qKU2LjhYCfk7xHdJa8qouP7waMkduY9xFaPSBMLjvFhczeLmpRnPymmQhNZT12uFScW5Lk5W2hrxC9ysWLbkDos",
  "key24": "ehNV6fCJV9hHVWyUezuDhBBgQK2RdU7JQoGKcG4fK2n5J2ChT77gDB4q36QicVdwtbwYoX62UU3oc3SQwQGrWG6",
  "key25": "464YQQCc4RU7RjCEtsyn71gXPwhKUEfur7vHBSEnWcTNUpZEnNa7axi1h6AdV5eVP8JEFmwgfhddRWT3apJYyiBc",
  "key26": "v87HHvPx9ZWPsHUrFCW4xnzh7eqJnBLmxtw633GVucanxkqCNuiZq1dekW8tF9Ditg5ZXGQARqHYy6nXfi2YGEh",
  "key27": "fsdHFqfQho9SA2gZoENzigwqtyBvVyikhnYbfroWXtUpjbsjGBJrCBXYYLVFQi7hNKrDoRqyEY5J9bwihVQmVDR",
  "key28": "tLjRyYscPix32tfB4GtvZYJRiAHcT4DcXYXu17dZvTGVRRbAbV5DM8vh3QKHsdc83kj7TGYq2ozjUZBE9uKAuuV",
  "key29": "3sNEnzBDxLajCVz8BeWBtec1JM1v3Gskf3mVMa2bhT3SJNnoBXvy5cm1LbieKfwy48YFGR4FkhEwc4RDmtaMvB7r",
  "key30": "5vwbRA6YSbKmJXbkv627AfJdwjWZ8LvTPX59bXPrqdLFSpZxtggcrFXdaMX8ExWxNPpFwCk6jvy2U1D73L4Z5wNy",
  "key31": "34R4gAvnKu8CgF3F9e2MpRy4zMBbQgTB6CeRFx3aiT7QewuGDMdTKgjgqVznsNf1QaLFW1kHEiW54Y7ysVRKbzzo",
  "key32": "5nhhrYNSJ53TVALCP5hDPzXPDWda4fbhc2XdPg5MYi97WoFKE392KHmKdBLJjDAiDhw2qvc81EGKbk2GsbWVMKA6",
  "key33": "4GvXM3v3L2JiAH2JvFGywXvEQicDAcEEnSrifnPeKFD8EkgrdStJhc4HWyaaDyST62GKGraCGgGRGhRBHuj7MvcE",
  "key34": "3ifiNNEwMRUtCU3wRQBqhHMD5EcBN7AgoNAUBedQxUPq4fAKKd1uLKc2A3BqENBvKW8nuzG1n5yqPu3y2AdSA8eo"
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
