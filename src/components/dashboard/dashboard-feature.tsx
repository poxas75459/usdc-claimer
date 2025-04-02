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
    "3TQ5SmzbJfxCMteCvM3RD3qTwmoTzX7ouj51Br3PkZaLb6ijQcgYbG2eeYo2dbixATEJe7JHxjkBqro89eTk7PYC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gzmUgXzVcvqGoXpEZxecNjVAydqp2Spey7kRFdfszr275TakcsvcqmpYPkKbp996Gfvtb24DA3f5i4MSk2kw2dX",
  "key1": "52eQPhBeE3ApQjitCdh3nkVUt6MMxdA4thzuEAA7PHrvkcck9PLfxFMP4eGmGkVzsrifnpASgLLHfYVPWLDWjvUh",
  "key2": "37VGRBeiAEiaC7NAWSfjcx7AnoZ656E7ana9bqj4d3WQYgmjTSiasCTEPUhc1YrEn8gmaU5GYQ6zod7c56vnmTSU",
  "key3": "4EcM14buXVNKg58abUdmVwYXvn1KfPsJDBiFSkaWJhJN2sMkcMsneBR3m6Qyh7GwwjkkvrbPuzpRPUmPf4JwzQnF",
  "key4": "2yG8YhiDQZ89SGZRgoptBpV1qMowmmqMRD5o8bWV2jAtfhYqJUm4SgEoqjCfsacta9zaVSoZDsurmhEUhvbQBZSA",
  "key5": "2c9eL8x12qfVgEfmAZ4WMk5YNEQ7Xs55DviUL6EyfDUK73zJJniRCk5CBsQHDF3vi3mWh5m7kXNaAKkjx9zhqjW9",
  "key6": "oNRzPMPkPXVWh2MC3fehm1ceaU57YqAdEYYrnu6qUa4H6ZFeXhGLo4kh8M1YkptSenbW3ayG2YJVvQw4LQvdghv",
  "key7": "2zRLYt4uLijxDiTpXfpMQ4jJqgAh3nqpMLq6rUoaAKHNMQc8jXTZ6Hx3iECu273sMkPmPTqUamBFHYMNaPZPeDx3",
  "key8": "61SaPpzF9haB1Mx1E5LE9KAMG4yzTYrE7zuQSYBLEyQSw7PqtrCXvppAfVdAtaNMcN2XCEGJcvcBqLj22P4xi7o3",
  "key9": "4g4oj4FjBoFvGLGRBWjjg4iazjRmvqnTrgJ9RLg7AtsXwe4TfftjAGskyWKpdZUtvvw1gT73vace84UbWsu6YFam",
  "key10": "3a4aJXpHB9TjKHLzuNKCNG8GCjv4A2RE7Qj2Bd1dgAjTA1LEBEjLqYj778Hc6y5cHDqJF7eEfj8njhnomQMvD37E",
  "key11": "3yktvVgefFuyDKmqRXxYepByLu8upoAkEJEgwnojaPvuegJZzMZemgqj71urPGJvwfv9BFevEU54GMVsLGU8oLBs",
  "key12": "2Cj3EVHiWuaKLWpj5ou2bP4B6NsJzpp2n2cZVQXxr3DKJwKYVXs9gArTxHVr5m3PbiAe6m7TW25HvNGsX48WsEVr",
  "key13": "5HSenszKRprYvanaVgYPMyfQyi6K5NCvvUq7DV2WPpMCjL27Ks4YpHaQ3kj4jNHAVPAaQxeGxqtN3LRf2NLCX2Py",
  "key14": "4ojbDj5ZWK8zHGwUXMQYbMsEB4dd8iMRGE7ekgZ9GxumccDjawvy2WUiwDaBT4gVhybgFdHhXgBX3E4GsQWJDbL9",
  "key15": "4BhAt7Eek2uy3bg73cP7wWK48q9vJYbK26UwnqoaAjkjTXzGC6GUSbUZjCEF9PjTVWuBc8jvPdFYwHiH5LBVdJFF",
  "key16": "38UdGtYnAMzq4JjB8Re1kd2wqt9TmycSooJeVnMN1FWiRmJASWtCWSWDaCVMj6cFaEzgtw3YbeYme1HUyByuu4ff",
  "key17": "4vuz9PKxzxiaS6J8oW3wxdibZEqPd4AjW587W6ojpc5r9jPotjDWpxDnZNYHQPDJnwxsaKX11hapSHFM5XjA8rLw",
  "key18": "49RSJwavVWRFzTqHwz8AYhfzd8z1jJfPN9pfCGj3Upo4QqT81YjS1Ri4kmLHyyjP4w8g2DMnQdnbVakmjFL6LJ9m",
  "key19": "2CYdpprNgb47jrqJFXmzoCSFiqtQWVJBWDt393SEd9r47NAVBgXGBbZ67fdjMFyfEPiR1vPrd8m2zRcCzpjvjUgM",
  "key20": "3eVhiXsTfPx1VosUnd9mT1yyzRfh4p2RxZKv3GQoR8t3H3gbQEF8L9rchEz7CU8e7a1CGZxxmvUiQ2Wm3YSjkcfc",
  "key21": "5dMfEpc8chzVoY5UWVsuwFMb7d94ATvGeyxDkhV8kMxG58rxvZomgY5vhaD1ehy7UmmoF4J6LFc99st3aVWRp5mB",
  "key22": "521W8zgwbczC4E6CJ3WLhNGSX9nHP9mk2SGX2CVN4KJLCAvXwTW2UEkWKCzeJo2jKsCbCbQx85N8TAEmrs44jetn",
  "key23": "4GutbfkSq9nT5cEwijo94RAvofCNZy1VKyQQzfBL3cRC7dX6harRtafiVd2t8EGUX8ZF93UkonmKxeyZiRyYQWiJ",
  "key24": "4SrJkWADCXhQJxCNhvNfUL6zxkfQDcupZjKMjPtyHgQgYsRvDsTnmxSfBjducWDM69z3njCM9FY5wFDGUYoEQhgo",
  "key25": "2TH2oQnG7LsDeUe7rczbWea3FkUwbqDaLzEN2EVjQGNVESXomQV3bevNZu2P4w1TG4eKQh4TT3uSA7eLrz3FgP5s",
  "key26": "FGvZRs5fofLHoJAepuULCZHfmWBWonhtSaEMHn2gn1SvJq92RW7MDin7UAoAUZobrrTpfnGpNnnonDmsQM46KPi",
  "key27": "5cp5FAsgVda1XPvAQ4gmS9aRqVmNS793YRfj1tsj4uUgG1SKa3NVnzJs8vjbETyDTffS4ySFznbgAwV4ktdZ3Hau",
  "key28": "fKYDr43MJpRWjtd71maJVLU3Cr98ATT1nX8tRPMn2B5T6YrVqPXGnc1rq4TBWETabfccb9AMx3QjArAnpG4oebv",
  "key29": "3ZXnDNyMoJyxDAXTC2WHbMJB5kiEDkb2GNHrHGsMzWqpQk3ygoxK4YHNNMfbmyd8aXKFLnQsiqmh2gq8Ygm6N8E7",
  "key30": "3t9379sGjaQKbQXobfoKPkXyUkgAxWWeAxwkNu3jr7sY4S18Fv4Pka4KkroPG8NnVU7fZYv91gFWfj9d3ea7pzyk",
  "key31": "3Q74bErfSnNgDnv6uLPb1b9Jjd4s2Y3B3eT5dfbvDs2qeHYPDadLERwskqrRkj2TJpBJEkEqUPUot75NvHhQus23",
  "key32": "2nUonXm34BwzXhwpk5yYde4WJ741rGVCrXnui9cpLgv56MEFztCtL7LFzP135eNnzCeQzmgrb4oCUe9Q3RgfN98F",
  "key33": "3f9s3bEDzMQWXkg1XipkoCGnxG24cEox3jxNZwQyK2bY1dZLYdHYmHmuLVnLYR2bvtp8d1gL7vgBiQWjEmvJRswQ",
  "key34": "5a7foSBP4TRMjbwYceCWX2rjK7fHn2mDWJVxkEQTwJZDag9bQWeMDTrYx2Skw6EF83kuxZXHE5NBjGxe1B3QLuQm",
  "key35": "5ZndRd891osgtbAsQbtCdrwHtQPoVaSZTM86xdDF7px3xpc3EccPRdTZSN9Vr8XmoxLAtkvACsZq9o7Mq7ymqCLw",
  "key36": "h6oiSGfgPNczT5QFcuQGn7AMmc7MRKn72T4QhbqVKEWKZ4MTkRY1RZmtp8QXuFBK7qDrMSH4yixaxRxNbCUrrsZ",
  "key37": "AM5oieZJtiGJ4ZqyWfi7URpihhwvzBNWaexmY1jkafGSEgyKneYAR2kTNmNNdyM6uYSFF7XJg3mW7TrkmUe6W2G",
  "key38": "3peLteJVcsNzKtMqg5UA2BCVkUnrPzus94yN2YrAWqkTQD8HygCJxfRmr3mfgxnA6zaNLbokUgMzXE31LKUYZLsD",
  "key39": "3yWQ6yjnAGeBLMs2RUghZFwGvA5PC8Y2BQKvVMeeovneMvPRG3CXtVw6VrqA1zQo27FRTgYET4jzFqTk1uGUsxhy",
  "key40": "5oaGyeKoYRtPrjDfEdzsi5wYkkBgdnF9N2WzUBMrL191cXYgXydbNiJ4WB5gc5ULqxwNZTiuJtEbJ1JiJ9n9syc8",
  "key41": "Zpn3cb26zfsxvxsshRPfDcCn3U1QvqwpprLQ1TfYsx3JkCc8V8XarXFzwvwmrVCMwgtn1r5ky9a3qXhUVsNY97p",
  "key42": "64X7FBVqqUjLbD55o6U6x2zrurN347SkoqCxfJ2UGe74E9SrgQnG135fm9bcU3qJZGCqvww8NJhDX1cqP6H2gWdW",
  "key43": "2E8guQ8zDArU2h1i8XFTEwzFFjZ6Xhrm5QdhQRGf9eMMr4FDmrQ4c4VYgbrrbTtrh8wSZ5hQFz5VY3yaeCKUJzbd",
  "key44": "55tPnRKq8yNaY4pQBc77wA9h2gcHGqQBVpLyr8KTCJDQzpLCrNKJPTvGATt2KYqYgae59ftK6w4Q7nhdRZgfo6uB"
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
