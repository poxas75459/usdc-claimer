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
    "3HPbvXR43N51unqwUw2Q8v6EdeUoCsHseEybjg8Y8ZyqdZ26Pw93vBDLQWdQp6u4RafpXqGpdsWWYzQELsqpqnSr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tXyfHTp8KJNU1eyxPZcb1Uxx5jHs6CCM9kGcnMCsP1pKiK3rnfWcKqcyduVybTXbMLyzgAQfXn44nNE59Ej4vMS",
  "key1": "3LhYoFa55vFw7BpUenBnXGar6ymiTS5FRKZuhvF451EQbDF9bV1RzFwAte8qrP6fL6FCcdXWCXHcDKqSRqMibvyz",
  "key2": "2S1ricvaABbdY27d6SL9ryTVvcWVrjENFKTAiYRMbwkaKdyc1EiFRYePRN3G395jpvaqBzB7uurTkjPZD5n4R6si",
  "key3": "iaQTByZWtZR34GrafVbzXzcsWhQPR7e5eXo7Dtf7RECZ2D8VvFT5kV6rt7yz25QtpBvqvj44RMxJ5kzjiaUK95Q",
  "key4": "TKbeRXxVmHNtFcsZB8UgEiYvD5EGE3egPTe2Es24RNa2Nq7gf8Tc5xU41N3fnguk9a48XUUQpMh2PeDqYcSbSd9",
  "key5": "2Cro6J4XB9tpgDKGjrhM8zAgABHZsup8UQh6NCG8Ho8v1fJY23Gx5PYhbqxLm2AQ1ZGqFwLQPDt5eDwtRFjcx8Ko",
  "key6": "3D5VP9feDMiqsWzkJwA3daTwDXjH9snCGZzhYQy65b2RWA7SJL4aQcS5te3xY9M9C8DeyC4YSUiXfZ4KAWp5F4ax",
  "key7": "62U3Ze3kH37FMwmwzRkjxNh2WdqWZy9g6wc7ir7y95ESbA9NcD6Jmy2Zpg3LL3SUjmdTuctnYC4svoQybymdK9cY",
  "key8": "5zq6HRsquiNRBZ3BszZfZSt6aBrZdtqsLLnoFSNh3MAhCip2SSin6jSGbSExc75coHvHVtLUUPmCCYeRQbpYmkiA",
  "key9": "49Ura2nCxseqhu7aqJqACWz9KvtMkLgE842z8Mvu42NjdQztnujpbG2qrTNsLLKHHm6PYra472zhDuwAwpsnw8Zt",
  "key10": "U1c59BYzuTDDVpnNG8iaNwqXqcEY9t3MGcvyWgb2oJZYH8PTvrRxbmAjH5i3GP1dCxSjscGLqNwij6Y58JXc918",
  "key11": "5GgvDthzkqt6hY7oCuewEH4DVSG84pg3PdFiQ3brUhT7cUnqwUusKHv7kMKJAqrF27WA5n3xdaJsARdiEZszceby",
  "key12": "5kH6zhYa2WZGa7DihUn13q3K5XrwH7QMKaFavbwVofbYEkMRjh1WgM4furT5vBrUQs5j3JUppqpPxFVWyFq8BHUB",
  "key13": "Pn2LpHZuMxK7h4k7ZboFAdi8oXKp1LmMUgiVK5f9QN7Wx46Js5UbR36krTPeRF3vYoZv3YGeq7ifsFVN81FZLR3",
  "key14": "3HWXTMCCz8wNvPDVvZrVDJpj3S2GykqUnUWJvZ191tahtLVYZQAK554LerWsZkoJRNCz4JzPErj1ATJamkR43Ps7",
  "key15": "33STCEm7ysy3YwRf6cn3YQTxXyRGfiyZNtJaBa9nPAYHgKdUwKHPitQVawt8WR2ByHRJE8Bqx4ssgTVEue2i5EEX",
  "key16": "41wXTaHWrYpi3tHndLP7hvHkVsiiLoNEqcM6fP4Nfbz6DsKsohAn6Tx7wJXDL7T7BsTQbYt1pRU5sY18kN91GmCm",
  "key17": "3WL2oSh392vxTBqDXuVuhyuwpwtSMpZEsmXfuuuqJDoNiG6vmdJUHmo5ij2YCEgRqmBpYaqRWm43AgH3x6inNu6o",
  "key18": "2R2goyEsW9oa9rkaD47u191wstJFBDYD3SF3PSVDmWxuNuH5cozW1NiyQgzqNVXA8e1fDhfqv9w2xgEWR14CUWGe",
  "key19": "5pEie29xSFznAgGQFT9RUA6MTxU4WFatkhZWvZX6hDbhThRe2aGkZtNojHiZHE1HQYqgK78hb5EVYAKM68KkJJZc",
  "key20": "4swCi25VvaamojX2tm6y9c5EUyrXrh3UEMCtFLPspznqdCwG2G2jc4UchzjmHfTbJkWdrLNkEUSopeGAhqM1pHDd",
  "key21": "3Fk7Tt6HKDneiXMWQse5SRDXcm31j7QSyszTqMHutfvBJ8kxLRLdsrfjrgENHe8CARxqQDb8y48F28mm61FqMsdc",
  "key22": "QAGkubtdmrCUFDVpEhvMXhs42W21VXmG7QktkxLotioKE1gE3rFCZdyoh5Dg3svW547KYP3xm7rEDArTB3kc3de",
  "key23": "4E1tf1cHH3sZwbuC9S17tJtnK3ExTzWro8sVshPBg64E82YE1eLCqYMqAb9zpoudJF2Nk4uoQD8oGFACUwAZSNnM",
  "key24": "34hRwzN4YX597eBPGR95q9w9nTWnkrc1KwqbxSEt6hgS1VokWQ1fMZ6CkhDuxeuGm88wV6giL5dfDXJaiR5h2y1q",
  "key25": "5RyNBhJp2GX6tMYyBJqo2t8wC5reYazKJE92JeHvQE7fLdDZQKwWmLnPKE1JemfjLtb57VFrGYoTPaDGBvt8VfSs",
  "key26": "3GZwmHCgtTKRpYCLHfKXrfcr92vRyJ6v5TDfXHy6AWf6vhzvwuNynoCZHrhqvH1gLF3NqPe4782jYVGYEDzH8vhT",
  "key27": "2FVqBR9cw3V9iNbpK9Mn7469fgLdGh9JH1ywwhvEXjeyJYD6YJpTiVcBiTxmFW4T85rqJXuWoWoMKYimZJjHhBQV",
  "key28": "67GXhqFH5eZDgcGhyPfniRoyczqQd49t6gQy2WkLaY7nM8k34wnmKpGrHgFPM3nsdNqe32ybHdMvKBceN34AcjZg",
  "key29": "npPKUnHeuFmNsvhbNo4Wn3foA4myKMCZC7GuSwZ8xXe5ihmXtU1L4QbbP4jeQTzY5yhCgo5jDyTda6KjAgiKGpa",
  "key30": "k3d33ar9kJdckbbtfQbUwZtxaMRxmud5BdperiQ7NuaX3dLCDtXYEjnGzutNvjxdj9DUkQY6bF8CiGB3WEYZKFs"
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
