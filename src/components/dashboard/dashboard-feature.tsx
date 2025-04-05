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
    "2VWzBDACWThVvKtR8gYhBHQST1Gv3bCeenuYcE1tHf15uRYB15zbPkEBYQVXLjFit1XM11nbFoweokAV4heeMKys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YYSxdhVvB8LwDS78VxWz6bZpccqvEHpYXJ9RB7aeZyaSvK1XXhq8kvHNg17Txb73zszHo5jJFXpiFGgQsUgPRr5",
  "key1": "413ukMSRLsbwaRTEf6cHq7KHTTjMCQTgMxPUMCeNa6vP4AFQ5QVFxHnrmB5T9nhYKhRupUxDt3RQpMbY3qkZ92Hy",
  "key2": "2mWYCz7R1yrJKe48qTzsyKd73cEsjCm28N6EyqSDZZZuAAw7afBugQNjkc3UyR5VoRzcmCitbtNmQ36JLWU9NX3L",
  "key3": "2EK1hTkXxAgec5Eroocwu4hYvoLWnG7SUdSW6VBJ2QKAsHyNxKkg6V9ME2WrvQFZbiyzGYTHvwed6WsXMzuMrGWU",
  "key4": "5bG6hXRDUcHFf8kjZNLrq936XfRtfYWhN1ywpDLmmN47zAj6dJPJT5iUBr2NXwBDbHVWoq7Ro3YcsoKnKtX3jSWV",
  "key5": "4WMxdcLgpmKYKTLyQPzY7R2SFPjp4peBiTjgaVCBsEHLue2yoGmeU3AmsSvnWSAs7nTuNVAF7enD4NLEzp1g2m8C",
  "key6": "2m839j1VvUvz4yK2QrdZAA9KBotCAp27mJaQKv5MkJsHFkV8pa3HUnkyCB1hexH6Uuq5Gz3CJW1o4NPKjnpBP57r",
  "key7": "34TVWvo7REyg3xyjPYLGNVj2zzkJgpjgxdmLUz31Tr89oz4MqgGr92e5nXeJjkSe9J9ATHZQuMdvFNKLr77kDcA5",
  "key8": "3pQ6uEC2qPVJ4SKtfTfL3AsnpntUvVnx6zpaUpzRTMcjrjvPg3CHWhEGrgk7WCgZQoHeLiaWk9b768xcxG1hMPJc",
  "key9": "53bbvTq1EtiwwSEKWS5ugQp3zJEL9oWkJNBd8UwU1EJrZULqdrTyMVDPViRZx5dMBBVrUG4fB9TFpTwRCm68BXgG",
  "key10": "2Kyf7J3jrxRXAsPwjnU6ADqPwEFg23P5fyfVeTNMTd7h67FGgQcS4B9v88fwCfiiGbLuGXsUZQ9eoV8xpTTRnLQs",
  "key11": "5LWacjPxKXUQXZ14epQRnVPtdvwixGd6SuRVWNyLLCT9WpkwbwmtQ27c4CRG7Yb7osh7bpnjaeKBMxEdiVzN6cXw",
  "key12": "3sHoSwm7WsphTydaTnxvbqrXZBY53QSXbTphrpMMG8HZoB28ifMia1VmhxpvDT7tcfP8Xh6d4hMbifjZeMNw9FLj",
  "key13": "5LLr4L7n44u8uhKufMetUq6vCjHqJofLNGos5mWQBwuQ9jg7F8S5WmwQAjbL8e2HMtb89Ttws3pGb8JWyqt5ZHMP",
  "key14": "5sk3HPdpaAfH7ehzA8HrxV35j6ud3AzA3LZKNnrkoqMMVahDhs1dzdndgGPqSx55SSPxyKeLzNRSAef2B5vVuFAu",
  "key15": "4d9yNzG6Q2n9Yr6y2QoNfuh9UdEKT85scHouCafjhjZpSL9cAe5ed9qjhM7Npmi1ka8hwAKH6RAYWw9jszvC2evC",
  "key16": "3cxqxgHnHukK987JRiGUFCJPjJupfrrwdQzHg5rDMmWR1A5rwqorUroai3cJs37c9Honvmc16rLgLhHrzjSfRn3z",
  "key17": "2KgF2owgJPnvJmfLbh5hNa2NDcxsbm4AP7GiVmurqaTRAFWURKMGzXioTY8SkXkZi98GdRKcJcy3bEyfcsVxFWu",
  "key18": "3kkoFH4DGA6FdwCgM8d54LwLpQsoQLosoJ6mMw9Tm3pwZge8VzSq8akDWukTQYSUPFzbqA3zF8gLFzbnwMfV83E7",
  "key19": "h2b1JC6kWw6DXAQPcvtaXVikqUm7K4yszGbhCZAWPPsqb31bTujmSaoEeRfp3zAd5d2W93gwG8L7nGexQVXUGJf",
  "key20": "GJB4jW367pKoybu9q1vFVpi7Hjk9tgcEVX3GYWFTWjxeZnFAq8yuf1d82ykwaDHY9sjVmEozLmWVt3Ff9wb3Bbc",
  "key21": "q4KFCojHjda7uT4VAPnLgGbDyPGs2Fjcydbyks5jNrmBqbPky3yLGfztdU9M8fUpDsvR861pbbpBoNg69TDG9ny",
  "key22": "5BwPCHoSLwLhM1HP8NeQ8pxJZ4nsQCGnow7aT8dYdS36VwvHNgMbr9nBEx7uuxARgBnvCWKpfW4L1eAA2JKjLVHm",
  "key23": "63Kd7TNvWZK4PJfzj6hKvnsXG4qVBqdGXEUnmuPV6NG1mx1EcgyyBxhAUkGgKMha7pv1osKHbkUktrMzXRRwU1zK",
  "key24": "4UQvZHtSz6f8FvJEDoCuqSBaa9ayD5CeDx6xdKwnzc4Zou8T25WbBSo8Q74VGJMiantD8hn6Edsw56VRhdHtjuwT",
  "key25": "2ta2y2e25hCsAmHWcJyeGNeTgdULK3xSe1HwrGtf8VWBWrP3nu9omBgaY4PJYYCSpuPseBRQLRoXQeMKBcBfSBD4",
  "key26": "4kbDSRCXxZ2SNRH7eTnqMMAofZD9HyNMVQjGWcVDoX1JoR3YowhYkWaH3L71PyEtsJVscr84bw8Dyqv3i6eF954t",
  "key27": "3CXB8Zaoa3m1FQgwSxQhGBvaPXTZQEN3EWFwkzopoW15nbstpvACsRr9N799sDaVdMgbTTbZu8PJcBh1YwX4n4WZ",
  "key28": "5KHKYcdDoXFC5FZk49gwQwS4FaPZwzeiEGANtNxJhN5rv4hXsJgGsapkVXsz5VM5dsez29PEQXfNfbWHvACvV7wA",
  "key29": "4MCCCbj1VcCZb4pYfgufGDvkU86bUHAeeBbC1xS3uyq7P9d5wnAyhHYHbUdMkP8YL27Cg2rjGXebJPRfufvHLtUS",
  "key30": "3oEEHvuLGucKXJ9GfWbyiMyep3zpwtfo6wYAAFuQcFHV2PdUZcPkx3Qwo6u7GXqozYhND9ZEUeVpTkZFSJdfYzBL",
  "key31": "2DNWayBT9rE6d7EgLMvLD5gNRXPMhEaHU3wU3b5cKVWVscbo7xrKAmZMTgA7rDTqZwW3JDM7N5Jn5eq5cM3CFkAk",
  "key32": "5569xmoaAxgYmP6ZPW9Z7vnj26XGxd4nvRyPCNxyD657i144xCBSeLy8xNx1jX76gcHhYSLXnKBsRQkha9XPrvjH",
  "key33": "5gn8y6mr9CwJe5ueTSi4gqECbvNFnmaChn1rJzXC57r6BFjHTLgwBE4HZwKnMYrk7zV9vd7XPrWWzSarveq1AqAE",
  "key34": "2gLZJb9YQqqnFpe6C4o7pXyx2mh6SDnrnqcvHkdbPpEmpjYFWQNcXUgmcKJjHr9ntPHqzkEwXuP32yBfCvDUkqtx",
  "key35": "kcJ5DoAnSQxHiqvS1dTvBibnTdeFLXz6M7wgXkJjVyyR4fY7BN4Decy5RvDaS1KdLDnNWBij6EDifYS3pNMR6d4",
  "key36": "4cyBkfXUxiD4YqmYZJaxAru4JWQHuNZmYfBLyUsT6WEvUS4p7ZR2ZBzkCfUktRKXs93rQGE7mBRbniFCq2qQEpmF"
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
