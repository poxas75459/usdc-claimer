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
    "2oyU1P9GKZThMkph9JTGAMJeSHNtWAGN4NQsnjoHrUCe1BHVWXU4e4a4WihBq94cPZAqM1Hgx9NZv4Ny9WSKuu6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QPXqXeKyXQeANZe5rzaXiFmP7VzpSkDgVLRMbZ5MMg1oG5N66V5pYRcAmkL1QmkPhqZSHb2BpwF1WDE4NE31GmX",
  "key1": "abuaGU2ovAdSkfKzHi8D6NQqWrGGoPa7fCNYyPqmRF8SNzzmGYQ4Spn3DfHJAG5rKGdzK7Zx7ZRiTCcG5UmyfrJ",
  "key2": "5TREMWVcMEQW788DFd4ewYWryavvxe1pjZvJEupVs26Ko2KDp2pBCEfLEd7ftcSjZVKRvHXTCvCaGZUnbfQFEsU7",
  "key3": "5tANvMpofuVvKCC9btHef1CofY9n26JvS8CexAdxPkUyvVP967EcvK4cN1j3Jvdnhw3399uvskC4nKSSNK7LWJef",
  "key4": "4whnh3SNgP3NcWxN2PittfjSchz4AJVhGebeUADwnBrzaGjD4fnADXiuN6bXN1MDB6EHfzEGXzKQ59pJVeYxXMZv",
  "key5": "4Dwb8K15Bjte7HErZSyUNSPpa7Hgor33zAr1WbhX6dqCSmTNokw5yRRCLTJKFk6cV523rN68RyQ8Bg9HsXNTt4eF",
  "key6": "gPkzBkZjsVXKXK57LRHuJ5NH8pu2rcF5ed13p4B1YssyKFiDXWUEMpKuDLxh85cDL6uYPS4SGdGJkD4DcqfcHay",
  "key7": "bjZD5iocBxuwXMdmyx62wybaizVziZs8mA1CyBdgU7EAWh9qV1xDoYRLf719u6gV1LQKvv9en5yjLY6R8MdNyfk",
  "key8": "31chiX8AqoY4dcz1Byi8NGCiHdroyM7SeRsqL5XqgrQGxMGkQMa27bJqpneiGyPMQtwqrB4bWWeK76bYLMAHNT9X",
  "key9": "4AzSAwi8L9ugSYtx67NR6zPHyBDx5eAyiHRfQR6b4CNGmkCCHnQPwFKHzq49frhcWHmxetW1QoFjYnYLX15ZWFv6",
  "key10": "2uxqCnKbFzDKGBpDccTCpddJ5DCfUtmjLarDT8pQK6MQ2gVDkUVMWV4hVL7FnwHRewUX8G8buVGkAdyRYoGdWwPg",
  "key11": "3KmSfm2Vdjw2KPgthaSj23CyFdz9QzhACNELd6jJK1xHjnxwfN2dzJzNvUdDKQQCBzwm35r8qrrELHnXPeZRnnqD",
  "key12": "48a7nRMDzfT1DyR6HAiHwuJ8tXxi3tgS7S6vs85exdN6TJCin9jYKn3QCrd1wXREkjWm51q2t1WajopCxTFeACu7",
  "key13": "4nEkuPQH8kpRxZEwRjBakvKMoV2GuKts9M6PNZXTrNPwQrmbkyH996jJ5gJCbyCc365MoHaTAYPQ7foYmW5gcsHt",
  "key14": "4DjnxKnnh3ERMREVaYAN2Wu47iebnPnWcUJyAyTcoJnb3m5Y4DgKpKo6PiWgKLo94VHrY376Wqy8JHVRc5QbmfM3",
  "key15": "fRfJK8EmesQaxM3ptQvNfk6a6Mun7T8feUmjt7muh6z2XC5wA4LHn9t3TZ7WfsqkgWRDEo24qN4KTEandKioEnH",
  "key16": "4Uir2casUsmcjoY1QVjF3KV5thU3GZ9vk8aot8T5gyV7A1tnrV6p6ZQPEcV1t4UsXkxeqDdor1jXkBFJ7x26ZoNG",
  "key17": "5ybAY2dGT9erWhaZLUxrKp2VNwygH8F5BpvFU9mZh2WV2jqVaijqkgJsm73txmVn48hqsTds39p9FT5qGZHCfHcs",
  "key18": "3tTQUmxprtJA1R3br8LhqBvRmWXaYJERREm6goAabQAxGoCyGtV1jukPTd2DMXj2aAN5G12WL9TK4dodZz9JGZxQ",
  "key19": "nXWeKmq5kqvwEFYntLjMnQgp1U67UUerxBFUh1XdcQLynYXdmgzSXpjnLyspjw95Snphm7Usvs5TeBcE5euF5gQ",
  "key20": "3pN6KMmfizHna5Mh8SauzQMfao4NxwFEkE7QA3TdtDkhcasEQANqae5eJ47gQowV9TTGy1k33wuz2TRLJTfXfpuC",
  "key21": "4oGTE8VYP4EtwMSwAC2dXHH6m3oRNxnVkAR9gYkS63Cnzxooh77GjNmUAnoc5hxjt1WVhDohrT8ucp4QyFSEvdiZ",
  "key22": "5ehWcoj5vK7RCDZtbxUeDJoBZgsDhppJh8h7P7qo7XHQwVvau3vRrGFYdL7ZnFobRSasQPsi8Twv4XKYmyBVHfki",
  "key23": "KVQxPcyCftPRFa61s9GcV9RWS8vjiqmAnzvKopSFYgt1oFJJXFC56kWDHRomrPRJrzjwi3iqpHqG3Y5sMT4XRMK",
  "key24": "2RrPXRJ1Bz5VwuS6QbNRyFbptj3JMfXiEQgJCau6YjksW7czqyJF4MSN9zeqViK9BsGCAZom1tdXowbYRBx3sRCo",
  "key25": "2BXwX8wxQZ3rnbvfLdyrHFupkGmvahaTVQpaMVTDAWqfVF9uwgzD2ZqSmEpcNazQdBuMTJovwzJqqiv61TZx5PjP",
  "key26": "4ZN52bUsLUHatqm2t8GDq2Rso6jFQUdU4D4V3x9bSFxpYnwJiH1y4QuPbf6pXPs2oBBNyi4FPkHwaPR6AR2wZvbj",
  "key27": "4fPdfQwAnHkzBQobtd8A5BiBQboswsdBgg7nUrjqhwsFtKFjeQhFH6517iLFb4rhvguAPJVVzx2UjmHf4a5U4WLK",
  "key28": "3erVKVcJvqNtZssBH64YhdRgSf6wdWXAZvsxZgadiTjLATzD9n3rT7giZUquV5oegsXqEXz1sQzHtD6NFTptNGkm",
  "key29": "4L3UbTDvCf375XCDRFWDmFEctfuXeMfqBn23i27KyPNrVJarjTEfEvvc1ou7fzB4vFxEjrpdZKGYu6Z8VAsTZ3qa",
  "key30": "2VGJUXH7vgvi61NzoP6HSYtTQFs5Vfr7jFHcz8dsUZuGiUPG7GkV5JbmHJrVaKjWMQjTqjZ8Nxbz9mfEQXLUvsEV",
  "key31": "5xJ5gDUWzyPFFCTBKhkNjvTSXLwPVZyxB7oRUzjNoLCTWPLrNAr6NwkrF11jxxTtLfaS1K2QvmrXzWbZ77y5yCge",
  "key32": "3THceTYmce5DQg312wp6Ebx8AhuzB5aXcWBoeGKMYJx5eGSj5RtC6oXWU6gK3sbz3Uu39CXEK9cKxWSzVBW13NKM",
  "key33": "3zZEcr9UTpAezMpg7VPL6DJYi83w6s5H9uUYFkQYNTqK9fD9Xjc36xWmaCQUs2m1rA7P9kV6LPJf5Jvxx6nxEotL",
  "key34": "3YN2sHas54V2Up6bMWHyo14s5gkA6rTDiZk1KUai6Esy432L5eJTmTo8U8mnKqXExDy2ki2YGfDekdgdvYb8pikp",
  "key35": "5eqaBpb1HQh3XgrMFYKE1jKQVVtx5S7EyrvuYWB3k6y6rTEe9GoikJtbkZcikDRQuceUyYP4kQ4emeykvrcy1DpR",
  "key36": "8jRGLa8o8S8ACjc6dQCD3Q385erKfD2Y9ta9xLMAAaPovnYYUeeke9RAf9HCkTXqasePvdtoAEaovwFF5rRXqLK",
  "key37": "RVaiupw5WKV4cADVbSqGCm1zfQr4M81uhAkVSPQVeZnJ21ax6aekxxr39H36ogBRX1W6Fjc9czQpnovt52cyDKU",
  "key38": "2ewr7fRn26aMWsZLk5EGnPcM2KS4Zp2LahskDrTvGjBoWCBU1AqsiBxBstQ3dYAtNWovjADAd4EV89VryPhFvUiv"
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
