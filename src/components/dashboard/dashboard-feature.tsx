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
    "5vwgzG3UyKrWpvgbYxQaoF6Y3MGPPQrUWzpvJ3tbXwb44fs5v5yHTsn1EwpVHtxhqNZAS9Sk6F9VBjmgMs7rUJwM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hr9CgqNLZncX7gZY75czLV1aGWBKqnYieeWAxYhi7cjeKRvJSCkqVh5UCEctDkAEu7fypy3Sj6G2G4yTKrptVWQ",
  "key1": "2jVUrL483E4JJYaVdKGs4bQbtTTvdzeZoRZQJQTyLsaxq4keB9zNjW8KNv2KPUdeLWHZPzWu9Mrbf6kzU4xjuk9F",
  "key2": "5shTHjbLYTBFEPGkCwA3HaPhUDitB3j6veMkhyyXzprbbRWrd38fc32KZboxHJwpehtMtdvZfatA2fC9x8aTjxiE",
  "key3": "nRpJEtePxSnkNweGFhCrhcLSH6Zvw3gdmkaKbJxng6KTNqm5zVZ1Fk19g4XUNpHPRRDia7gqL1qRZ9nYNPT8h3f",
  "key4": "3ehJsEKYZPUpSWAJ61g9E3YeUqe5zYRZESVJirJWGEZRXjk3CmezYNYPdwUqMhhowqpfvU7LMwc2RohhskHt7PLj",
  "key5": "5AHfS9FSE27vfae8CVcYykpDrddhZg7UAMKeHoo1GsBWfYMSCj9bxPp99gsrPr2F48M17HKwpA4bFTR8C2UXdas4",
  "key6": "2vstszs2PMpNhGEho3hRcsngR9eSDp2uEBihGUbkrCdwB8Grnm3VwKHn1SujxYmcB3P51ASxeDyzf5XudathPQXV",
  "key7": "Xk3HAiVwu9W3crTjk2tp55isa9HQ7hDeKyTZthcTmWAKMDhHNwibLw5oaB1C9iAgkiDwr22Z16PYQ3aXCNuVzj8",
  "key8": "3JXVqH5U3nxYDS7dNJLC9jcmxzfWLStMgc4GmMwhw1JV1MtuV7p95DwhiKS27EgvBPbhMbRB3qMSv6L85BuRJYqL",
  "key9": "4fe5rxF4TDEh32JxLmMuTMdKkK8yZMyPCi2QuyiNAVGDfkSkP4aSib4pPQG47TzxH4V67m7nsUwFCwtwxfz2vReq",
  "key10": "3K5y3TuBZkAyU1pa5sMYLf6tVXv6WDyL18VhdYkcNemx1nNdJc7brVz9ZHxXj5hnD1P2YK7XxiQjaMGFxvmheMcD",
  "key11": "5DyUQzPBeyDs3N9g6i7KN6g78mdzR2iVVsjwhoGq6iSXjxTwqtnTVZxDVLLiDXsZXzz9AVzeHU695GDRj88Frwo",
  "key12": "3VpMTsPvBvRA61C6svisW6n33VsyLC6GAojhPxdN7JrD4tVQ2VSm7uR4pfvPTZD4xoAj7bzWmsVesYRkdzy1orx2",
  "key13": "3Ke92Lw5rmNZmzDD3R6qpdrxiWEE9rcJxoqMd4ecpuHMYq8ZUNdmAuggp74VAWn2VX3pr3SnmQuCHfaVx464ynQn",
  "key14": "M1KeRbteCAgKaF6jNDoWefYtneNdbFb76MdLFLEjv8GwCu1qEMBypvPPjtwkQmZ45G8dk2EXLsR1CUMgCriMmDx",
  "key15": "3B5WcAz7x8FgR282yKGnrFBeqMqvwT5F8vX7D4UeDY65fukS1M4i5ZiaMXacMgsaK5DcQ8GqDwQqDt9pW62ymzis",
  "key16": "5hmtK5yWsTXZkAwSUKyLZCTr5bWAwxWDfcGCsCS5NjPiNPb6jNtEgGwgVeQidWDfVfTLPe4fSNqEMocxsjHH2Vgo",
  "key17": "2QrcYHznV339tNLZ9LyqJ9gk3wtDRZg2x8KurFikaKfuvRTX2p8tbxCFyMktJgNRvRFsUm9hLrdnpyLMJ9xG65nK",
  "key18": "41hk2MUEkxBmG9YbPmPxmKcQbi5p6KHbrTuZq1VvVove9DgXTw7ka3U8P8hBJxZrXoBmcm5Q2fBfKVJGr9EEeFxz",
  "key19": "5EXZ7RXXVxNkagxjRkiDX6pJM1bG1rXoyV6EadRfXQFPziTpQAnTLR2Yv76NA8cma9YceqXQJxUuyCa8zXin1WMX",
  "key20": "43iPAxg1n3vLSXVQKkr49Et7UmKxcPijGhVtVkWjZEmY17qyiaFQDodRfnGoB8EkvaiDCLoy9mNtkMr5ByiA1gcj",
  "key21": "2vaYX6u7UFykkKXvfnYeeZYxPuZzM8U4WBnhagiJnN8xwBv9tqDpQmwP66NdXtussspcwJr9Y1AJoLhCa4PUBsds",
  "key22": "4UgbKkzEvfNq82LuAQW45h9y4paskot9S18Eu4otDK7UJG7kt5xWyhkT8W2K6dKkAymwHwvB4bwvnGcGPdAudppt",
  "key23": "3HC4BV337VcWJ2KPNEoU5PxivonDrCj7UU7MjFxVJXa7DpsZsZHnEqbBtL5oiz4jgZZmvBkEGgWw6rakcstKMke1",
  "key24": "427yyQU8va3G7tVzigLk8PxjmNWe9mxWbSi1eZpduLobog17zQc4eYemWztcxjY8DaJrpvfwi3NsC4K22pUVePZL",
  "key25": "4iNB4Y5pbdB5g8zfVPrqS44BRSzKz7BFhLzPHz7DeZ8UXkvemzTzECWmii1Ls9jGNMroNMk4R4Th3C9zdHuZRXgT",
  "key26": "3v3P9847R29VcDV3FAKQ4xjYMSmVGeDw1xofcERSyicXv9SxK3uE37gp67Q4BLMz7tRWR7hZWBXcR1pr18pVB6Ao",
  "key27": "25o2UiFvkSFgYwDQNfERfJ6XTzSU7gEJrcc5ZyY5LyseBPBNbEH6qGqovNLFZ7wB7vCWoJzkY4uDboHgp2VQEvXu",
  "key28": "5AeAqP2HXXHA3EmRX6DdNgrwKmAjvQNKsPyLxREtAKnyEZHaaBdQr2pnpaBBPcob2CdQCshGWL87bhg6fHVjDun4"
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
