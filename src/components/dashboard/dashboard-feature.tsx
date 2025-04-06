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
    "3Mhznm2t2KGLhJjnWtDhcegwcz28qU2ZwPKvaeF1R6H5QQgwCtrzNjkbtUtu5vyBvFoZrmUvxcyKfDm1uQL2gVKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dLmpaV7kHoZ5VSNeeLmoRzZDMj3PgQxWQMCK7hP7QqsLvYHGxDD6ztEMTuQYhbCi64HKBmqcKKVi5dFq5kjL9Em",
  "key1": "4v2jpemgKDnd4YaMwUm5MM8PNJFfdnGyc9BbW5QxB65CgLxcW32aDNmFwBJ4XjDStAai2usVSzrWrEzVnBy41uMg",
  "key2": "ViGXjAQPMXEuas7vf1uGG36TsbqLT8svpzb45oTecCqR3riwrJKE3k5dqDaACtBrpPHBjMU4sJD1RAN7nexb2Kf",
  "key3": "4kK7BWiFYDMnU6CC6A3L59MooDsyLrXPsqRhHTv7bcsRTjamMjYBWMyZo1BSsvwZXAsqJdcPURmb6CQwZjT6DXRB",
  "key4": "ARRgQbQi6McDen6aZkLTnarjmNC125fL5AvZmWULqbjtZbR9wFrKpYGQ6Ho4b78YwWpJC5xJgsg5bNgrFujtCNZ",
  "key5": "2znqVNHpiH55C3EJbDsN8ySgZtdKbB7q45vQJ16mT1hENXVTdtMadzR8nuxrUWyeYKd2tKkA8k2wydE7dqyHUHk7",
  "key6": "5mMfShNguTUpFTvzA1uUuLstiwTBYrPbQ2TEaaMsJJUoARhzqTsuZWVhPCDZAFk23WyM927Gu8FTCCnH5H939wnD",
  "key7": "4hr1mR3ToazZR9qUxLjbPfJjezYigbagWmCm6hweSHc7kZcV8pikWiQseSqjKfBD5fZo48SpJBqy6SasAGMTh2Cg",
  "key8": "2h75QUVGhSk1NffYFJrTQAr23WUxQpmLxdZRpDrtgACkA2KqzExrRZ7U3E4feMavEUjq9o2hfvSDrtfiBUkZPfvi",
  "key9": "67DQ5Ge7NKCe42q2jey6yBzrhZELAF7bPnXecW5iC2HdUYnMMSvBktBQyXwmNfGysr5sUwqRqpmSzjhnh5EchQKU",
  "key10": "32tQSJBMbdhr9tcnxX5fMruEfVZj5vFX6VpSxzS8ANNFTcxPreZdEnaLBDEuPvKHnmCcCUgbiTRGBk2QhhcfcpGK",
  "key11": "5XTKzy9SF5qAhbrDMaYgApv6mT32Hi4SszY5MvCsXpJRbH2eoVkspbQdqJyLsXYUdL5ZVGsPxjEqVCiCti9xSNd4",
  "key12": "4nCkrAAUQzTKWjJByCdbqLP1sxoFF5AucLtsBaxhShr7j22W2hyaqXx7FaQY2fwwQLygojtsHkQNnjfG4k1PiH2y",
  "key13": "65xgnon7Pi5QfKgaKttrQU3KMeorTegYLp3EacKkEpZYmfmWp57TykEq9Uk4FWQtz62Q98hu7iDiPkRdoT521ozc",
  "key14": "pbn6ZPprUsVWCRDfALaDNNA21vFBCj2kQRGUHZ7L7QyG685ftpRcXrGov823cvuYRAN96KHQ49SEsLmgLvTe7Qq",
  "key15": "5AZ7A4fxV665Fq84x5fmYc3Nz4AVfwofFnpz7J124BMzfcVZM75LNFmA2vznRFijVCspDV3Rzo7GcZkPRAQ9GvVs",
  "key16": "5KN5vpfd2x3yCDLsZhkKXyT4oW83DpGkeH82LP9o1T7vVaEWWPgzSqULMJRspNREehExHANRmB5GfjcsxEH1wWGk",
  "key17": "5Q8MihSwybeMnwmAav6uq2CyTTbWn3TbQGnsRE8QsjpQfo7Z2QganCFqAdgrEd3ZgLw2KYFsCceSJNcXcnEXNA4Y",
  "key18": "sLFmZ4HpPbCtXyiCNU1AziVJ4iu2YoaSC33VmKRjCNUKL9bvUwwX4cF84Cg2hfqt6EZnfVWzAF6ZNKik2EHjE3i",
  "key19": "cshatu7is28Tre5K2Cz8GUpSBcpCYmQXXqhe5tyEj17kS1asoLscY3bc77BrCXbCxR7yo85YwbchNGorQWxzpyS",
  "key20": "5mS8YW3UUTYZrfWVMnULLhs1quj7Ymbzcuk7b9K9HE2rGRGFE1gHFjivt5D3VJFQT3t8HMJjGU69paUbQDHZrB7S",
  "key21": "4CJXFzhgpwpEzR6cpzTYCpoDwBj2LSzaV9yHVLcW9wHQSXiiao86mm9kR8RrSTFaiCzQd5Sr4kN2mC3Anu62HN9D",
  "key22": "5JMHaEonLS9cgn6dAWvHDjJerkJX1pJveqCiX3YBN99DWSyxdoDroAT85NdVSUVY3kjbP4tsyVfrk95Rcg9CzKos",
  "key23": "4LSLsu1rvRYhTLBMcKMx4v3VGcEdL1UuXyk22Qdd446ktWS3JWsUkcY6wiwADHxQgTjqNLAySj4bT3m2oc5P1jVJ",
  "key24": "5t92kGhzLGBFhW2Vwyp1ZCcDby8mMtebVSdaC3rjjdfQP1YCuvEUy7ko79DfP7wVEGFTN2LTNWUUuGjg3dLMEbSU",
  "key25": "4dF4CviX3o5EHpqme1MToS8yTwHTFEZXTDf71sXyoZWkFSbf1zz5P87hxaXFZuy5BnDy724RqKQGgjwxN1CGpHuY",
  "key26": "3LhQMpRQMZGXjBKBMrgrCEruy4wsWGvjuLmQvarg1daesNcwLifzX34NNhCgMSa7qJzBcrtJYZTRU7qroztwejqZ",
  "key27": "663Uj4CHFkMtYgKW7wNZk1CX84wB1cnGgDY3vXKeRLE3AeGyB13E5rpR9juWRd7kKkcX428WrtxubQ1dQkHGWzSb",
  "key28": "4qYp1LDM9GTKuudjYCqwAu4XL6Bpq13gXJZqnsum5QxhbrYmiv4mG254w1NRTcu2nANdRyxJaFt4skZpeu7Xz5kw",
  "key29": "46UCyB5QEL8a6QWsxhvJ6nUnDkUb7x4Q2V92hMKu1UNHar7zr6B86Dq5z2GwVgkjyNQWEcPfo5JxHjZKScxZeYTF",
  "key30": "47XuZ4pHDmGRnTatWv6pPVLigYj92CRnppm4GQsrE74ZJKqSxWZnjViSmzoNoVgZFu5nxY2Pib3iGKXMg28mQUyS",
  "key31": "2Fkx6g54ypnMvm8J4C5ivcEJTTG5HN5ffegahD33Lo7woCYWb8Eqt8hWYYe8zK5a6CANp2i822fdUJscG6ppSDcX",
  "key32": "51wh5G3WMJPVvW2GT26MQsNcbyzSxN1x68GNvbgpJCEvgyecX7g8B6CLaU4Wv6tBJmUJ73fEo2gxtXsfLMHRF4ZA",
  "key33": "xGexZxfL1eLwPB7Rzb8wMHiCgf8uuk11CPvGf8YQrFRLsU441DRPV5nHkjivTCNdCu8p4TQ4t3C2zghK9VmbLLa",
  "key34": "3vaqrZxtiNz59NjztiQxHp31Qm49yhFvrwrjA1jBa7hXRkhSaNyKUEfWSBkDNo94xt4WTYHjKD4bQHtvxBE2zVhv",
  "key35": "4eCixgc3zWDioCZ53f2EpxyXbjGGDV6A6y9L5dBu39pJ5maiSVxLp18yDSLVHHxjuWs3vRMabNafGhbrjtuumWvc",
  "key36": "TkzMcniyCB1JoTKFCRNcsyuRePLzDKvSBw8UNgnFEZwczHNGZfmfgC7ZokqqmRQYDhhuDLwjLRDu9ykb9dAGqDp",
  "key37": "3QW5dPrNbbSgoiuc1ugEGRoCA7Fx3fN1JPmAR9WFwbhiq3kCmw9CV2yKo7n8dipFhVMQ6dmhayoLbhGFEku8R7CJ",
  "key38": "2sCKAZJNNAPW8wqhCD3cr2dm54Yu9ZCUXe6fvLRQfJeSFFKGhYSfZATtdoN8FyCwSojMgcfRX6sXHkx23XB9K7iL",
  "key39": "2gMJWrBxpmZdHpFqPzgam4rC6dGPNqu7yaWapjcBSi3Wp8YDdYoZBKe4dmfx585orPonRLZkHiJRfHyLUCW8RmLk",
  "key40": "3NqJQv6jK3nHEw6hXmPAfK5Ne1w3yV2AsJ4NJicrE8u6LBufet1VuEpiVrQfmGaaRGvPXn19s8spAbZM155wEwot",
  "key41": "EkM2xQvoscgpnFodM2LNF4DF1eu3awAz5GFKUubxkZ65Nz4EnJZRkCtzLMnB7cWGzS82Y3ScwMnrESfqX8eowxJ",
  "key42": "28fVHYQcBMsXZwQifrd2v85ntxpWscjFKRyHyzXovHr4x9dR7mESUVJmPR72VpNKasLqrZFq4KFf1xzaYe9rBsgr",
  "key43": "ARAT88d9vQMvAYLtAdTmxiuJvzueLYcL1ieqgomNUFh1wRpJAELPbFMLP1e8N64qxMJYnpxPEord1hWFbpNZGLp",
  "key44": "5b7nHqKV88bfsU3fGQEoKPen3GRbpW3V1CY9P2WigWtKVWB7iQDkw1ZwM51dZ6Gf6W4pzxbHmjeJz9NWvLakAKpk",
  "key45": "4ngvatonkoj4Y97wEdHThdPur6DYjQhemhoCA4BNsjDPfbrhrh9LhmFxihX8m6ZW7XKxRRPdogkbHXDu4YCK1o3E",
  "key46": "2Sd2QkMHn8dEKNEmR95e7WkH8PbDkaYmJ2B3XS56RSn6RQuYZrPQGcwu17SmwpU1h4cBgYkvjTgyha7fKdkJFEmH",
  "key47": "4ntCudZH2cjRRYdV6YVMA8ng8rL1TXsF1mSsg6bi78cEqsWwwVHyUPCKgoSdohftWgCNmG7aQFtDrDaa1NRDNhZN",
  "key48": "3JCvhmrbwBrG5s1HBQ4f9YTPHaLRejeRjE2GG9umSyUg8wCifD3XFLxmkh6KyojQAJV5bmTxKAaUavmwQdkPWgeQ",
  "key49": "54HdAkBoywKz9v8TYCrAta3iBiHgCsU89bPcCaf36LELyQc9PTKEZVWyreBY3VgqqtnP8xzBgt2C6maLhVevT2TA"
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
