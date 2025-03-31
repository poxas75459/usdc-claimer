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
    "UGSRRV4qCuUTLrE2owiVetxs8Exc7ZwnDbbdjidvNSJJxnKv1ZwanQiVeukWCX6yHpvsgdk2F1rqRWsAEpj7Lzn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uZayJYee6hyEvrqcBqntMMBny6QU7uEBzyf8JTqQe4xfj65bQ7n2PprWxfQc9PC4tx75EwBYMTEYdLmTtGLcc6z",
  "key1": "4rEeoCCSmStRzVdmPPgeJzada7Et6TdVmmktNPUSfEo1i4jRPgFLhx4KkaT8suSSPgae8QbwqkT62cqw3jdVHCPC",
  "key2": "4dCSYXddNENugh2AYpkv6LMSkF23PZBt6TW1yeR1vViaZPz6kSsVGVj97F4rB1rrCMsCDES9aEakR3e8PQtkLVnf",
  "key3": "FQ5YwcLnMhbuNNeuyh85M6MWJMiucmuhpwCmEEyuee4Pa5yeGsHhqTfvnjsB9UGS3vwTd7UzLYu7eFDDLQreFgk",
  "key4": "2YvrQ41uvApAFpVUdY9Nk9GZ3eojwYtbeYnSPScexp8HDucpGx62uJtjrNZphz8kojtu9BbBFScGAEfLCNB7HoMG",
  "key5": "4HBduHeaFcwHGsf43mRGqVLj2EdhrXzncAjK4h78pkxna5HUzLzBFYoKrWAayZ4QnDYZFpuLqU7YsXwV588LWg8g",
  "key6": "2eJK1kLCN6ZPGHZwME84LfRWuyAvLcUkatXBK2TPg9CMc5kWzdmR7uf537sohgZYogiBCrpB4PagPms5A8F1rAUt",
  "key7": "uqBzbq24wMUxW1w5xSjA27rH7jR7d2RR6NqYr3PkJNgicDHCNfp5oxS1UGJavoQs46hT7eHNNVgYxDaTKKQiFXW",
  "key8": "5PmvK4cgtCJSHzSgXAqkNY2Dmoje4jPY2Y6QCu3uXa7JyvQvVNa98XoKndAYRy6sRKoDyFXrgtsSFd2knjC6gcPn",
  "key9": "2aPQx46cHHQQvscw55nCubb83afAa9GiRpVypDkDcnGD53GQVXGiW6VLNvJWV4MyFcWuMiR5HDELB2ypnzP1MmZ4",
  "key10": "3t5P45HgxSS8dTCW7qMWs7qGUM4tSKmH2CX63NMdem8jPWiiNEs6R9vwxGgP2EokX9J2ik3yAUFEHP3rCmfsUi1a",
  "key11": "2riyqpS1gzwUHh8KtEUfZD7Fm4uD2m6LvaYKBXn3HyGgF6L8BjoL6Bd7oV6NTiF63pU4xDeu57JvmtHcUibx3d3A",
  "key12": "xQgZQxjygB1nCrak8p9z9CaBwTxEUoPcAZwHTekHvMt1w7kEdshQT7jeJC8hhocyhJzbmYhZuy4Wxkkr3owgwv4",
  "key13": "PDvD4GZ93X7G6j2vnJveX4CdrkUU6Q4bgYfRcwzrt1yqCiJdv1R1zyTnuJTTEVqdNL5n1cGMFrPuiaPdDwe8tr5",
  "key14": "41mFaHkTEtLiiHT1VxvpVnXwPdovWyAiJMyETikjnoby2gCu8EdG11ymUh4GCJ1nYDk8AMAfkqrbbgBfHXdzqiBC",
  "key15": "FtigcQ2akMpAkmP6oM83YsTtnUUwW7kzVSZ4YptyFdqqumVNEkceD2Kd6focN3vSxGKAqtEPohYDv5rbWNcaG3a",
  "key16": "5bL9putnvzpZzvodmERARJpsGyPaGo2FCseDC6X25eZQWh7ZX8W8UEyZ7YHDSMoqf7sYXCVSGub26A4QGxTRhRxo",
  "key17": "5s8UjFuwPxq5bWzZJ4FgypEiDKVu9qg5EsaCokTEbRyZiDXt3sDdF8JhFwApLfKUy3Q3XfCqrDJbmviKuNbugoPV",
  "key18": "D4iJ8hMitY2tF7tkMgBbtQuHeCz7kL3ZiWed9wpdJz9oDshxuRYXd2sTVKvPHnr4G5iR7tMVGZGdoBzMefsrdW7",
  "key19": "3CGZGHMJS4v4YYAck3Y7wSevzBrsEGmUquTnhvForzm73SEdM3SA8N1avG4AHES1zKr5Ym8HdoDbdCa7PpyKLVpb",
  "key20": "5AGQnXu1vCVP6L2fkZCf8gXNpp62prdqrKf6o8QRnLyDCyXwVrkJHoWMqmijVU9fvttVBAwpC9uULPe19dLkXMk9",
  "key21": "3rbezWUMf4ikD8qRou7Y14C12HToM6WMEf4SCoqyuVzGuRQTjgAe3u48578MKBx1hGzxaXcJitsdDLpk5QX4TVf6",
  "key22": "4UC36XEy4KVtav88GWXR3jmRDbzDGYuRrTivtL57VpMECnSEerKEBc734DXtXw2ddPxM7Hq31fWGvUV3q3A4Z5EL",
  "key23": "tq7q5tSc8FPAYp3JBZ87k1qhx1GmcVSAPA2cFzkrhn6J7JvgK5pZc7qi7khHGHaWa3zhkxWcqzsRz7h8nPvGnbH",
  "key24": "3JRZFh7eAHU8X1QnuUWP5sGDvNnkoN7fpDkGMqwMG3VezCeSw4YzpB4ELecoTNSLEKtEweD8i9cjCWxWfc5zzedB",
  "key25": "Mc2pjpop8iUHLzSQGEqcHk8mtM6apjHNhjNTYj6AnBDLkcfTPmVjSSsLbLZY9Z7TKT5dGqX1auUtGiUkFs1Ztqc",
  "key26": "cvmWaraTzVuFTRAgs7kHXV8pQdYFKEzwM3oTddCm7ZtKZAmp1SUK898z19f3ZGxLwsyehw2MbFtaKLNcjbavJr1",
  "key27": "2WzdvfFktQ2KA9p95P2RVryjPUsExCjwjt7B9dPrLR773abeUQioNRKd59jmcNXWDHDv9do6jtUUQsr9JX5NGvNB",
  "key28": "56AoumfGjxqN9k92bMrtSUTDU3yC3WmVWbpKXa6C7RuQy1vtyWx5igAoHc2T8suYSVzZQ3QyH7CvTB5ZKsck7QHk",
  "key29": "3hiXb5bxxaeFBvvggkA89e14CevVFFfogpZ7yrGhHav2YdeL8zwL92zXzRWWYGHei1tBqDPB6agwWAQAt2eVPGAh",
  "key30": "HB84egcpWjaYgv2C43WNL9F28DRKsCCVnHAFLqMHEhp68ZTGWFNZoUoGmVhxUp53SQyJq3ecm5Jb4N6gv5se6ey",
  "key31": "43jX7VC2h4CYSQYAFkLZqp8fQj4MMsNjyboX7jCZu1raZJm9CfefdEdBCdniGz2ZDSfZGSufwR4JtQqBWEC7ssfr",
  "key32": "2dQoRG4h7ttL2eVbVCeBAPSNVkzeLzXimSAjbh4L9BKXjscZXnHApW1W3MywAX1qnBh3w332zHLpgSB9WCtRoLJ3",
  "key33": "2sQ9aFy2XhAW75g8eV2ezuNLMwDci5AhVfnfweWYf6vYPMTvTPe4X44wwdXzCy98o8vP5FsJ6sLWcVAKihbCR9rx",
  "key34": "36wW2kH4QdWHSjeJZgzUwDWNpiE53LwCWhZ2UmFcm954upsFHV2TWu8Ny7jmKbXTYkgeEvk75eBTQ6ENPC6SLA1k",
  "key35": "3c8pAkCHyQe87Mkfdqx9ht6NzzQc4ATVDW5GsgLKwgtXzGS1StenWGr6Wu2QsBxMJ55sgF3qSx4YaBTeGP5S2sf",
  "key36": "JhNLge8Wm7h1ArbjoAkphgBP83bREQKjVvrykhWtcBcW7Abwr3co2BrdhiiLtQ8famdoa4gEBHm4P7jNFA8noH1",
  "key37": "5bHChbxqF8RVk5ERV3rGNcLHjDS2r1UUgRpLLvi4FBxoM78qchHeejZjkeEFrZSzhkxPbYjPwcVvfTo9chVkv1Hx",
  "key38": "roXXjtALek4PmmZHg7rHcJPsvbsNMi8SSjFku991qERneCW1wNTxGZJb85ieQ4RWNUbBycZQMjLEWJSuRjrdk43"
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
