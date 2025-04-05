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
    "3DoSuqtnptrGmWGGgHDWUgyWtYkPiAbw41JRDkqA3uxFLVkLiA953u5HZbugBuQhTPdFSedUs6sAPtxP13GzMKeZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fbLVCVKZW7CMQ2LWbLTBS4TaZNnDd9RMgzPXGbPKkCYWu7kvdSeB1JaAt1FTNBVXfvbZkfcHggKeXdEY9WqD5TK",
  "key1": "Wo6ZiNGEwPF4fSTheSPk7FC4KzpKXEkWwGM57v3RAvR3K3d7oh16eK6aGijA384ZNABvqZr6PBRZddCbDtdWkGX",
  "key2": "67Fp1chhhNYRbogabGqmzLP2kdye7yxdFeS2DHkkKmNbvvExGZNxQVqbn5VXsmcAqWjPB7HanVZXxU8oW8dXMeGu",
  "key3": "Bcoezg7uJyFX8mZcjLbwAbUrSQw6P2ZyNyfusxqwZcX4bXGikvKEULfAu6ZwLjvY4gT21REBrVPhuWYwkDRx1Tk",
  "key4": "5TngzabprS8upQ9HNbZT59oUpwJ6XiWYVpzfeRHpQgWvXdGW7Fed67MYy6BDJD9YKYTrSYbmrRX9HRKHvgCacJ8p",
  "key5": "usUznmqCDqmZCYYG2Qd9p28HkaqhG2TJb42btZN15bwsVibPiUr5H1uJ1JvNZ4rpZJS8ed7Q5QUvzAYMJwg3eCs",
  "key6": "3tZP5t8CtmriRZNSFLTBH33rukEgWTF4Wxy2n4URteraWw6m21FN7Ea6jkBgP9GZjtkMVy5ngSWmtsnw8RUX32aN",
  "key7": "3BrdgZE7yRVmpZACXe5FHWBf2i31utzm4qLHwxPFuYSUiQSMUMu8rV32LsC9iw9TNvqaLNmQMKhK9MMCykWK5R3H",
  "key8": "4JeeoARZUfkhWuagGjAywNu1KsgQVrgKsFtRxXVNg4D5FzuEMTjNHJnoEwn4G5AjnLxyjbJ3jRrwcdSmzfuouZMB",
  "key9": "4S8g1eWoowBNhF2C5XkqSQ7QhDHXm7NdGDwJLh2WqUZFyGoHteZkceFTMSRJ8RZFg2Ew8fAkU1sb8ZRE3GXPuDdv",
  "key10": "2tNuzRtdscJ1H2PYLPwxEKZDVwdDmY9k9HzswAjsCy33BB3FgRAxR7a7RDu36GuvNYJHK6AP5PhDZMyLiBsNdT4u",
  "key11": "59o4y56vfAad7SUFv8awQ2vbzJtuEzFXoEMWUfvYD24hY7sXu3QxzRej2fxGqMmRYUjrxqoERwtzfKEsjZzaVw3r",
  "key12": "55W95AKwmjApWhj1nhUcb8fEFQXUV4kmMqbhMGxc7CD5B2VQaik9CGThmt2F7ZA1qZsx4zC3AFEuP8gkN3RArouH",
  "key13": "jA42WAKKRJhbErYqR98EQNmHwVZJ3NZcTLroH3pponLx3fR2Cg1ujbFoiXg9jKVmKu89ab6WPiKge1fHrNsiP5H",
  "key14": "5zycyPtQXbA7ZgRbrDe9ytTw5AMAFVE2EvkgbA6SUMhrA5WLeregVBzafyLSpTkpDqwoLWbq5krfEcqn95eBhRvf",
  "key15": "3gjMHBQeeqYV5UTywaNHvpzYUJjt8Ti3dyydwirv8YGrBgkBb1AfE3RPtB8XRXinG7uJoiDeAhBAvgrPsC5mWeZg",
  "key16": "4TdP6PR98SKVxAAEz2VUHePKsrSdMgHFoVTsgWjSNiR59YcYKCSjuEHNKfhF7bYTeSRaVqLDhf9eidypVjvhwqvU",
  "key17": "5iUqJPv7wf1qavNENHYbEWNgTkYPQZ7DiHR9EzXjW9tL2wrKy1f5kMocKDU3iaY9YsrbNN5Hoq6NQUPKX8UUTkHw",
  "key18": "5Y8LfSKeKCZW1WdfCJo1xjVGei4UDraDixFLzcP9YzusRt1JzbJ5XhkRiHtWMAecaBhbXxw1L5RYhHax15uSNJZV",
  "key19": "3Yfg1wQ2Hn4fEDhvzqrXA4StLxArrUkQFJ8toPLpqCR8zoBxEQguH71fBbu2Mmu6hHXVrBVeyu5rnJLg9gQaCLz3",
  "key20": "3XPVyWZ4zbkGvZW6ag3NyJuY2wGmATAmsrHVon8eoaUsTdS2pr2mL9xZA1ycVDMQvSrR8MbP4GBxAoXSb9TbpNKx",
  "key21": "4kCMcSoYditD3nexmdXbZX7oXcvfxKmhzsFpRcmmuwRMc4Nw1UsD8YA86sHBTdGmQeB6V1vShXfLF8fnkro1kDd4",
  "key22": "57yiRyqF6GuXdq4fcAMGec691tqKVYbNUBbrjDP1UJTp5iVbVhi6aV5k4hoheYEJqUtHgjjAybvJ34zzPDpoFHto",
  "key23": "4dyKcMQHdmswwsVian43qSigBEqN4fAoyH87QokQgHAwJH5RFwUopH5rdQhzTnr4y5ADHW7dXN8D4bhmvVYq4YSA",
  "key24": "2ZZRsADbQoSxMq2quQPq6vs6dmenVGGWXoNe7ZVJUVxoQqfkgQj9WEnEbNTcRmLic9xsqGKSqkKpfUMngGAeT4fZ",
  "key25": "2Axghn51Fxjei8MD9XXZmsEeHiR4iW1TRg9KnGhaGevteHCjq6WHDXfjkDMJjNVAzYSrnRHDCJKUxu6F9oP5C6F5",
  "key26": "63bkHvMi2qLB9TcabsgXnj9BKQRZrFKJXf9LuLBhV37Gyqt3RJmp7Si1qxp3jqdSfte81kiQ9kSCYv1JdGkeETbi",
  "key27": "2xpBUf1c88nnVMNz8HgemBgFNrychRVzK2jfy2omnfEMrA9acF5UGxFZZV3mrhw9SYLucvHBWwDZvKJ2b2yUNgaw",
  "key28": "4JLCtwyBKZDgEECaZcvc4fFzXZ21LahC3BKnbrLy59uL33gukshuUUxhh85g2bD7cCg5mtpokWSYRQRv932z34pw",
  "key29": "2NiMQ7jMXAMYpMM7KYpFXVLX6ekZHVPxQzxxtSRgWgQHc6vD4FWzoKec42cLrcRatJk2k2v8uxgrt3997syKvWDR",
  "key30": "31q3vYSREnPmDugtrhEXjV4aUvhc4oTuMFXUZyYdLW7MNpwvKE9ASpRYMXRf9DUbnfXhfSr7q5tWXm2J6LjxBcSr",
  "key31": "WkyDyewsEQhzmGHi6QhypYHwvDBhXxXTvKxP1khmAVwMV2mVzZXBRvkAeqvxpcJaSo2ryuUCDMyifW9yXq7Mqjo"
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
