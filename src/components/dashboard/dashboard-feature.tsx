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
    "3SrD3ahh523sUYy5iGZb73vBuBDjaejgi4EJYf3TjBQMkXXjZQvRy81mM3yAuWSrs9BDBEa4puEczuJU8ZpiJ4GT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JEv6mDNBwBcqwD3AaGJzSatwThdtDfSgaACjwi1y9t8g325n86EeRVJT2hahWmDTBNsVFKAEiCot2x41Z6Dhwp2",
  "key1": "Me3YdYLMEBz7GG36Tj6i16yAKSadxi8Hw2c2cZ4V4KwxoaNvdQsXojNpQyoK4oTaXbUtkWbYQvjtGf6SiP9FHk4",
  "key2": "2UhcUK3BTLt6nsseEGqYkd7MNZht9wVHciT3fDdvRM2h4W7oFKHK9GZfFUaMwhyFA1EZBJht9Es8Wpfm2c6xegrJ",
  "key3": "5krRqcJ6PcXryqYHvfqbRzvgNHWLbDEHCsaEAWfw1HNpRnFwBMABHuDtW6NuS4dy9sBuXxHucZhuxwprhnM5Xea",
  "key4": "2toGUyCVc1CK1Fti5MtHx7zCnUACL83zfSX5fKZK1mqqE2SiBtFVcLR4UQYp2iWgagE7yniykzUNphLGJtukphfy",
  "key5": "4ynGs6ENSz93Go8k1itUFYJUbSTig4RaJ8GASY8kwrerDtqAPsGbZ3gEFxaAQGqrecPdK7iodXGoyQwDpX5nd189",
  "key6": "2ax9PTLfPihxz9aW1xbPHhv3h9uA6VqDN1s34n9q8zd6hyUhik7H9Rv7F5XzyeC9PPsSaQAUDs2VV8wadZoNe6uG",
  "key7": "5UCFyw41PPhpuw7xmrBw3bpCeEp8BNH56qmqA6ES2ZQ5Za3p5frkLcjybh2i33zzBDadVgv2GQJeeGMemFVFayUp",
  "key8": "51amnRVUx8jkDzyLkdxthtj8q6Xrn3g5CgR4e8SERHhWZ5Myc4AruJ3UUhQc7yCgZXX5Ud7BtnSa9rv23mfxgcXQ",
  "key9": "5zPrVTBBUSo4V1BtqUSEtDMywrj1xitCoDZWvB7cMXyeTiCmEbPYvGSLjQC7QzT1J9j6XiLSmGPMCpuaThnBCFWm",
  "key10": "5JhjhqqUFjuAcDFWVcZDmEstFz8fp1G6uUcjMUhju5QAwkWkTt4EK1kTkcUumPAnE5qTddrQzMa2dvQsLUQ2Xx2C",
  "key11": "3DqFKraMQkJ3mBfb9wqpZumLrZqK7YTfHB4y9eF5dn7DdEdcBhLLQi4hgVymkzLLXh6hJxLfw28w8CBwjtUsBBuS",
  "key12": "2dXPDSit4TLCwKKwsMtsGSwKcNLS62Rks7HgH6hs4LJ5Fn8gJu8t2Cq6UtxuS6awSr7PYsuT8gHtsCFgevU2s5M8",
  "key13": "66bvv7rri7bX4xU6YcQBNGepDbcwT1PgkPBR3fP6XTsBd8zr4k7D8U7xab6SkZhzGLzp4qdpdSaCeWPa479h7kS6",
  "key14": "4JsoLK5hHpzeE84aH83MbqNgVMJBxLkz9VosNVsHY1bf7kj9pRWjSxbgF1MLW7PAatgWumtjb24we58HSWom5BMa",
  "key15": "4BXFxpbSPJQ5WA7iZZQEP5TaLAczfkoV7Dw63iG4wZrb6i7rJy9UvsLBCbg5KKVSGmZTY3XnxCZFXvuxWiv85XBU",
  "key16": "1Dps9CDwaNSkNiJqmFLkYMgVnSKQ781wo59xfuLPePrGRnEnW7rP48uzjoSdwSna6As5uVtUuvRkcfAgRfgsMkF",
  "key17": "2mJUXn41HVY9a2v5yQv32cqtpB9KU4pKMKm7f5Haf58AWVJWT8WyJXoEhgwPbzNyjXbrFyJ4EhMjmivEC6B6twbj",
  "key18": "2ZoZWqhg5GnH71ukJz7ng46XaW43wiWz7VcTBBA1RCTRoDucHP7WLj7m5znc9WRt4wouh9MmXB6kyRJrbNPpcTFR",
  "key19": "3kwcG6cJvuJbRXsWFKeAqYE6AgUeGp2rHUPDRbwwa64XAUZFT3AX6FHvkUL4bkCbnRYMVM1XR9scy6nRp41VqvuC",
  "key20": "k3hAEaAS99CGj88kvDsQc6WWQMAZZwszWetuBrDCCR2jH2ozBQAYugc6ig3FTtJTBTTALjmZv6dWan7ZSy34ByJ",
  "key21": "46n85LKSY37Y4NJ9Z24Uc6Hx9SdTkJ4rnvpq2SV299HdPBPT1UMPrpeU3STgLB4928vg36kcw18UZmH3Aj5GBF8B",
  "key22": "5PQPZUMUfN4HwEnCmT3ybnMgJCY8CJUKHon3FX4io5emzZZSU82Cqme182qqnVS4uLyCQ8NDT4YzreiHHCZaxhL8",
  "key23": "524Corv3nWHeW29T661LiwruXWnZ9r6krdLjKiWH8V4PRE7JwKJcbvtC9F6W618ToGJF6DbERR7KrYWCKJmJavGq",
  "key24": "M9SXQoBcK6FZJXMSCFfY8JsZPS6CKS6KYjza58k5BghgsX11pqsHKSrs7rMmR3EC8BfScT1oWgj1QzbptcbYy3Y",
  "key25": "5g2CvnqGbQcQ3Rx4AYsMGCYkRtUvR4JSmvbhhbtjrezcXSd5vGrbYZNPLkXH8DyqqKWVeD7v4nLgmG54Z33NAvoL",
  "key26": "5LzAPx7SRn8BDgL68fFMVPG7A3gXr9bYzTs6SX3VSqCwWixgRX8qkiWBueUfjoBZKW8SC94RBVkVcyLFhL8vB87P",
  "key27": "2VcDbhALKJSAuzzgXRZXef29oyt6amDGxAaNYp8YK5nBnZR9fhwUghqFHeQzcATaUU3Q4cz8uCEegRA27EWFuDJD",
  "key28": "3vx9t7rAk9LkpxYa5oJ8GRqXMuRLx3gDZiYeTwJWjkDsKdQybYSg1o6LZYQNC4pJXBRU9YHargdXaZgjFUr6ndjQ",
  "key29": "4TvXKJy3j78QVL67ngKekQ18qmb3whWNZCFfEVfuZbwshmCjwhgeNM6udfGnP3HZvLgESU2JC4pLfveXKYU19EK3",
  "key30": "4ycj2MG5QgiJgBj2Bod51bGcdHGs1fpZaVD5H9WL8enbnsd5v4h1XBrQHUxo82ZbxnRqYP3hExK4RnUWATRK8M9u",
  "key31": "5LWwZ9D8suPN48itPT7obAQDAcdtVMkdM3nUnvrnayv3econPDDwtmWq8HvbnwEXgEAhypDVZKpi29FYLHMS5VyS",
  "key32": "3jzUJfX8Q5iLoQdXQmmq8rtPmZFJEqYVVnKQhL4ptwpGcVuHV5yzk3yp3Fg6N2Pv1RUcsTYKQHHSfpWjJkaypUHH",
  "key33": "2bBeS91MxdixjbwMQ7idNvj3s6USyFLe7zEkfbh2V8Z1cxrpinWXeFHDNhyCcdefUEJV7mzKc2pSyEA5RfXRB7MW",
  "key34": "2vXmug9y7NAe9RfM1Ljg349r1PjdB5k47GnBM7TzCD8TFEX5eZ9Md62c9pPwukqa6tPN5y2Gsqp8vPrfFMGHjJ1i",
  "key35": "2YhDocKDezmLeW6Fh88MzZnqgxBekyZujGv36xTLk2mGNTsyjfM4i3VmeaqXgDBEWrGVgEkkGQA2HTDMGnqEupKk",
  "key36": "cHxTQo2JY9ZwLPSTWhBNgG6bFJAoViYWatHuo749F7tpG5dpBdsCK3RGXWH8iSFX6khyy3Jcy22FWpqRqZ2jDBb",
  "key37": "5DGFnNHiQSii1SNzNsgiCr9a3PRhZFWp5MswpzcM3DVo5m8JjRAgzdnHzCj3LBWv9ueMWWWfXpNvyDk4uAKAgE6w"
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
