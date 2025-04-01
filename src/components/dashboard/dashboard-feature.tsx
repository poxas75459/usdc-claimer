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
    "2jyQXBNaHXQmr7LkwcSo5orY1jKHuaBaS1My8PVrKWaoVTjZcfkY7azALDVnPdnA71seU1ieudsyZBxxJZpz8c6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Uda1UX9464RXWAYYEXQLYrb2rH3kT4DeVsrv6UDNGvUiP6CzrXyWYKRRVYgTaXNxveRrXNudVxWFaQB7nycLkhe",
  "key1": "4GMjYM7wFY3bsmxxJ82hNyJnieyMyw7dgVE6kkVeo1bsQSgXxeS6Ts8Uuk8KLxQfQ7FuHG8rtssfRCm38LisKNTK",
  "key2": "43Jn7honGQiXN1DG2uTCZo6mtq4Q1pbUk6mPUAsksepAF8CinAX2mNNqZtDpo7Cv8pErtdwr54jktqS7J4NHJbov",
  "key3": "37uPHNb95nMVvG8TaMqrKGsiGcockKdoiv2nrbQFm973TtZJgqbN6dzarBuRwMHjHmdQwzxusQrffnUYUD5ou1Cd",
  "key4": "2h9e6Aiamm2HzhhDAh1gvBD22n6bo1XwcE5GdRdUWtmEifXafQWDmyRS9mJxd4gA95AgPYkHZj8PH61vdv78VqwP",
  "key5": "4kcHeg89Gh7M7uCcCanLN9fUnV8YoCgJXLkiACVW6y5t9HzzjsSzMDJCHz6gDy3WjwPL6GCMNZ8FwJPLBf11Qzj5",
  "key6": "3vNaDZoJXALvY95TLwEMmzxbgts3YZHk4WDkDPz76CzNTqyLdbBsxbn2xro56VFGGEUER3Wvy4xLPDgT3VUbVQ9J",
  "key7": "5S3hqzEiVVcUAb6dmN1RWDR23VetG7Ph8equ94fUcdhKt3HKv1wD3oZYRNYWADp21FYSrknEXzvi8UcejA1P7So4",
  "key8": "3m1fVeoBdLrjgSn1uHwdYQmiD8fYYfkvd7XnXjUFZa5bhttofA8UnEM1GNgyy89zGShkApSM25TswCnf3UAivAGt",
  "key9": "2a4XQXopiKhxkexkdyxVvtWaWskRyDRbRrqwKNu41qKrTWZNxxiDKFKQSra3gUhEbDPXqPTQy5cZCYtY2MGpDRwU",
  "key10": "5H16mnvUyUZiwgkRB2utab7B4KB6atBcXN6ndrTEVsv23aqwL5zCax6RihEceNkeuknD3PnrngTRzvqV65Qtz4Mf",
  "key11": "34JgY34KwSyhzonS7ysuxuiZvHecbPGwqdy8uzbSfaVdC3HHkE9Lzd1wQpSKN9pp8W4S59esBhby3XhgbAvFJky5",
  "key12": "5XAnbw8KmgZ9tFQv5a7qQisKA675LAoTk2gpAqGsryyXKCXxsu4gNsrbe2WdYDiT1EpGX7D4uejB5B1nJCpJEPv7",
  "key13": "2yyXsBKD8nUonBeyFi46bVtjFHmTgo182CMJCcnJUVkQn86kcKfy8wKLUwbNnYxtkLA4g44b2ZzWSpmWRbACW5cr",
  "key14": "2DcceaeUj8GAJreG7Z4yXARi45Cctz5dV1KYZDnJe28Xa18aMJJe1X27fnDcxyBfGQ5HusxTFNfVB4owMLJHahaC",
  "key15": "5kAkF8JWzJvPL3WnNQh3W24ywNzHN4uTC9dZTYG7FADG1FUfbuZ5qbmtGtzSfqz29tswvjyydQAdJtFtvdxXmEbQ",
  "key16": "34dEkwbn6FZKtKgmTq4ZAMAuiZPSnXQALs7Kb3m5iRVPnGuZzYJm77AgZAQ24iGN38sJVPxsqtT4Y8LV23caJCTB",
  "key17": "hEKwPVhCxdwMBaVwMNgNv8j9TshVUr1v2iYyF6VUP1LV1g8gjWGJRhv75ZdGHZqzjjHvcs17kuGsun4ksFtVhbZ",
  "key18": "NC9HLdCchBjmefQURshfRgxv6nHxtfRzkV4vXWWaRfSEDb2vQ5dBZiNvpZvkkdtDmDxEeBERuUeueYtzmeEMNJX",
  "key19": "3ZKcjDBNoPbM7Vnen232bEQiwcATmcR2wPcGUSKgkKaXjfKmDEkeCw5o8tyJaNXpjsarBmZvC3Qm8dAb8QFrkQrM",
  "key20": "2bX8avvpP28Sc79UXmyjUF8GWrTf6pHfXC2bqbug4GmsUCtyRdJLudXm5vqiSHoGxXX6hpmkhcBPgenYv1f27UoT",
  "key21": "3NvxXnLGU8XJ93SnzVRECDdq94YnoJ4Q51sazwFujGLaGztgTSk5XfXQtcT1cY5F5bY32Cpnu2cUqqQcSqd8eibn",
  "key22": "3ozLrziGUbjCJ1JKBQvavzXoPzFtv82KwPWZLB4PQfnfdHbygDR3nREDtwdy5amftFbVLA1t3eDRKeg472xwFr7q",
  "key23": "4h7VunmmzZ2snhwnAFY1VEYNUNBGtzMved4DPrXMuEydk48HRYWrBse2rzgc6VjB8AmXKMjGXPGYAqMergCP54W8",
  "key24": "JQisTNQzxgUTUTEfyaj3KLn2SjY4WaZBk6U9mVR7HRdHkdRWpFXLVkCWwMS3a4CGiNonZNafabQuiH17mJrLG6a",
  "key25": "Mn6bYS91kzYqYceN91T1SurhpFcR6UPsQWZphZYFGQ6qXcxzX3aBXMKMCwr5Vf9xHLWApQkDG8yeXkY24xUuKvt",
  "key26": "4XconnzEk2mewChkDGqswGooqSSTGtKPymzrGXXN3WaHftNf8ym3NT8m3ruZz545TvPdYD9fBuRn6FsKhXnRRc57",
  "key27": "2FDzEGBAx6y57EBTHAtUTD2fz8zgpjWKQW5pTBmf5w93YNm44NYHG4r6S2aGAfKpSYj2cVWmVRznykRRgYPJKKbo",
  "key28": "5tyDWhQzce6rtNWk6e9EHcP3XxwBSLKYrF3XgYc3U1RRtQ2TxjqWAfiFSnTekw6MvtT7oW4jAY5F1x7RyfK5j8Xs",
  "key29": "3rDsBCqshfZ3Fmk2hJzqZFqgbV5LzZiU3mMQpoDcz4cZu5nhHMvbMcpTPKDQV1zQr8L8fu2kdew1VCxk2M2Ei8vy",
  "key30": "5dA7mduLbN5B5hUf2Myrv9xhJzTFaAFJxHQQLo2ao9vEPnXqapMh3jfcPwCJndRFXDibnYA6TxcHmzFQoq9jYJVr",
  "key31": "bTUF32DBANATmxhs3B53f8kWMZ1R4Aw3UjfWWGiVMYUPKGG7sBdPdZHM4LUivGwCmft8QBGbMT89wK27wxWNXGF",
  "key32": "3zCJuMrzRZJSyWLVtnrPmvQXaMyVBuBGn5iMX6M3F9YiKuhixwGiixPNnBiPwSHYoVZcS6vTZKjzpjwDjJQrosC",
  "key33": "39JtHjPVUUUQhGR7P546XWVChkJKYt9oZgrSqPbK9NAQxsY5PbG9YgzdQwWTSRutZ5TwnW3SqpKRv5S5BmudLEoS",
  "key34": "TU96kSvWdTVUxcvb7kTw7NMom66L5D9vPq1YQKXWsrwiFZaYbyZhdx9UxcPJut8uVa9R1GeZyoQwvkgtFGU8M4b",
  "key35": "2WpZ4qWgWqsU9khiq72ASYMie2c5H6kLwfnxmEW6zrF358peCyxfWA2XcYWenpb23yUAU49a43ppnbYMzAosVrt1"
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
