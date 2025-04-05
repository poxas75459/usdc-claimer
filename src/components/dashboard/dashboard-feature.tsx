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
    "24NayKMun8H71dkKK7iaQMoHCj994G9gDVZPe5b8NFv78vKj9d7Q9i2GF8CrkQppvS5armnfCHXGissw4ChDV8iz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LYtwGZHTNkQxLWdEC5GQpxC7bsCihxFtmcex7kRDmDc9iTKBLt5n6eJKwowj1D5jMEBodDKBmV5ytRLZq7AdKLU",
  "key1": "4uqZqsMVajVqU1GcyXeQxqXbyuHXuSGxkZ8TseMRtNqBntJg2KUch2nggMerczkk6S2nTVZD9jh99RfsrEpoPZEu",
  "key2": "4mCgES5fE5dUezXL2KYFu5zSk7N36UQ76W5fpe3Z42EcXfnnwqBZqZQzQnEwc4JQhKVsXPLetxhQ6P1LvRwe9kt8",
  "key3": "5YbhkG8CHboY6D8gWCW5gFetucmNDtEpFgSbu4ZRgqwtHDEbGZhnxhqXkdiDFawjazPKAsHhKWK66yECzR93J4rg",
  "key4": "FRULQP9uZtBanvcHvqSGXsFMA3YyrnfJjQrULfn3n6JedyEg2iDEHmtsAjdVMa9UDsePgJrUttPrF2TUCtpafkW",
  "key5": "2o2jsAxRizD2jFJyANdhdu66kwg6byjkDN2hsnki36RRXh5LNgPwtG8DaXAaGtJQAUy4To5hYFmYHUT9aF43w6jh",
  "key6": "5zj3FgRLbzYw9mGqYKHH7DeaffBNFk8qXcSRb91a7uWJz6BLiVYi1Zv1p4ewCfr7mANsg7Q8RNs4u9PtG7J2zsjK",
  "key7": "4Ljr4URPeDDkgvTfGMwGikYcVsTV9NFbEJ1DQ7ZYfAMrfZ57gSgFdE7WXEdY1WEwQ6eLdLQFX6SMPPjVwGVWS67A",
  "key8": "5w2So1mx7tchyjSf6Ws2WqXMe7ANmahYJaa1Rr7XA2RSYgRQ726GZQmVFnRZnaX8vh6A2XKmx1ieXvPYquPzYPR",
  "key9": "4fdJtWM9aTh6Mms16aPQc42NMKKSMdw4ouhPN9p2YmGF943fhyEib9cEvX99wmRMzLt2ULYpKuvFNqo9mu7Y4j6Z",
  "key10": "4AZ77GAyQQLCQ4dGjW2W38uS1fGeA9Bazehv3cFMLxoZTCYs6TiBWHMkubxGVUr8rw8YkxZPcNxjVNrCdX1MgZKw",
  "key11": "v3xxu2G7g8yDCXojAbXJz1V56jbGbv3WaVujNuC9buVmtGShg7iF8gYPKWETBYu5GksXkzYkSgQgNxcyb8JY3AW",
  "key12": "2eh9okWi7YE74mmZ1SWm8S14Rxt1KjYH9zs7c1oEbbwwvSbntTtvuBPS2w437rB8ZMkm1Ug41U15Gef3h8D8w8b2",
  "key13": "33v3MSDaENQtJWU5bdfqgMKZuZrqZe7yjda6YUkQ15dEMjepEgQA16V3WURGavYgVK6gFf9rUzbfFtoUFZQyt4Un",
  "key14": "2PiUWkcP16druGz87Q73V93NaaiEqJCbwgK9ra7VVaSidPWhqNfV7Qx4KySu8dJXHfH42VFoyPs6fniavsMd3YZg",
  "key15": "4oJP5kWxcnDQn3ssStr11t6WStytPqnB29gQ9NL4GxCPtyUnyzwRF3fHHaRe5ZkEdMW2k31rtt4cFDmj6RmFgJDu",
  "key16": "5u7EGngnYUVEgoAeg7T5VC9VwKM4K9R7QsXGk98vVV1xDZkAJiDLGZmBKMYotgCRBcWkLJ6pPZRrFvMoSBucVQdL",
  "key17": "3PHoE7MUnDZWDwc98PrjYxuS5oq9bFgjxWmVt9H2PjetjBdjqsGCRQzXYZeSU4U12fnDozduuCunGz6vqzfsD5a5",
  "key18": "63oHLxvwTBN7vefVLoyVF6rSwAHMwzfvy3mNsfaH2YkT7apxEVX1A4Vxteqe9VKfnZP6MtoqHSfJTZFFyoq9timo",
  "key19": "28d39DxPj54bKaZT4h1U3fKAYQhNq2MVBMJpBVNtwRAxDvV8xiMaGDx5TGpJxaXA5mHJEKwkDkviCqiRr2gDsHrM",
  "key20": "5QTxX29yXDjk4Z7fC9RJLWrNhyVM6ALtoeVGAwiG8199QU9e2Fx81dMZCS7d69FZ2tNi1fb8n38gZ41a1wJiqEnt",
  "key21": "5S4tr65CFVS76vY1wZcfvQ3ZAkDXvgLQh6a3SFN9s4HGEkcrFccWCKDVbREk1Eazpe1JZzLAtETPGpp4o5phEgTe",
  "key22": "5G86ssLC7DTwK3hf4JdQGFcnLCqscHutgNokqKusWDShEJA57MuQaTC6FKLquGzHD66Ai8D63ufN1Gf6Kfm4dg4L",
  "key23": "2RXDTew9hXckYEq2uJz4RijXkVNFB5c3aU2i42MknStbkKxdZB1e9QJycbYm2bKLjSF4zGGYwuyA2vnVrpBwHFnA",
  "key24": "3GZaPcn18QmLhHSuuFGrwC2otxnAQGyBWuayRtorranZSPAag9izyJMCjTLdLp6jFdzZmMHHagwtTYUpPKiMdmA",
  "key25": "4XRkJYTCXAp16qVcsxf6x7Gbpcj7sjEiDALgQmLogkryPX3rLdJ8FGgPXoFeF4if7Swu3TvR3Z4tKN9iSNq369Bm",
  "key26": "3GthiDsWyKAmQworWse8GtqS4gKAxzW3Ysjvz4xo8dU5aKfSUKRKz2HBjAYk9sUADtoa1wUSyZH83jLf3U46VtX",
  "key27": "4M1FbnrNCHYVj3FBSouVHyvjdxjsRmSNoSns7x1wgYoVKBUpSw2Jpwbpp7em2CaTaL9i4nawr8CzC7buLz3jUSek",
  "key28": "39i9vcMEzhkuiW16anh8FfS6np1errUaiaxAmp6ZTvCQM6W7vFAJr8VaHzHZFQNkzswh6V89dU72F3ekqczpUfpC",
  "key29": "MWFLuCuxxDmzG9d1Nuws4Y9zQyjkb8xZogDKqAM59XnwChgEvaye3HkDS4wGpWB2znnRSZTpLtzDQFnYUeazgzJ",
  "key30": "2hfZ2t4SQmaHFewQU2aCTAH2SpiA7ajshj3PVMiBz8SR9mHZpWTnL9Tj8FVdacRT3N4CosvHXs6Aikp3m8tHrfAU",
  "key31": "66sozqoMK1cQRc3od6vi6bBmRhMci2ZVLdWQQWmKPnCVtsncpMhBRNo8xzpFG4RPmVVaAi7T8nsKsB2NgCQaffNW",
  "key32": "43uhCwf5iLQhEcZwhjGxRUMM3jkTLLttrFJ62rd53NWeGG6oXFU6ift4HmkhgAKU5N6AMGGRE7GSG53pX5JDPjc4",
  "key33": "RCfF7x2mgbWSTep75wgY8kmiGCcvQFjDGcJ9ojBzLE3WjHJhvraryh4rWPX99r11BxbMAZGSKN5Nx4zdVWnArp2",
  "key34": "A7qDekZDJGMS5JkKpTVepsF513CJnqpADyRDyQ3adse7ocUpUxt9WcKoTMcJAUYw18DKtYMgrHvfDkrbRrsrVAB"
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
