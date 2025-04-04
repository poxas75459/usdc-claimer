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
    "5hRYa5JchrWDMPKLuANhfLK7CodZpHPxqUG3PBS8UDhT9ANi2gnN5PeCJoZPs8kXVi7DTGpMAZs7yBwLkAYHBzr7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WzspsEnV2yHjdUcNE7CjUVM1YntbwqpttawqscDbBrem2huAG3Sj7uLjsAJGQj6aJuvgg7PuwLZYZznQQVmiBMW",
  "key1": "5mMZL6ffpFvuc4VFqEhZGtHjBzh9BKMSHJmw9LNNgU1BzBkfMquhC7eksGc8KCXtc3XPrzfaaRJs4ED3HjNsRLQo",
  "key2": "gKs8MVYZztoextSeSPMpWUarHNCyfEnWzKvqVXFxzBa8FkUA7wbpvSamapHFgCT8EuPUBuYgXsLHxSU3tkb2ynW",
  "key3": "2kvqhY2Ay1BihfLNPKBPCHWAGbHZy6jRF1cQ76X4tckUEaevwEXGJwLGRonsYYscUSR8dFHLMMxDZQHqRU9vLkhf",
  "key4": "vUgH8WtnJVqPo1b1P4RdR76HwTvmFM3Ncb9kXLf5je7KS5XuUUmBES9xe6WUXrg6CXNTjZpvneVsTp6wdisCUGy",
  "key5": "4wfZYkaSoGPf9NQk9iveg6YM61FTtUKjPT3j6VUDCgcwmxh5uK3eJXaBtcWsTtkk87obEHGeoG2JQNBn4NZHD5CD",
  "key6": "3isbkHn6iP1T2fr3GDoijCFpDsBtbBcASbVWzyxur7YRSFPPGzE3djfbh6WFxZvRdeb5iEhwDgwa3kHgjZ8ivnVq",
  "key7": "4QCbgANRjVDfJGwwTiu2PgvQG3jNfCZ4Y9HMv3BiDRJauzEWkLW1RMyrsb3KB6n9NAdza97qzSK6YgNSYSWetqnt",
  "key8": "4UHKfPA8hn2TwJRJEoLkyuVsZbsNekpELUfxr9oT3t3cE8kL81WiHokKLp6WESBAz7Pqdx4CC39y4RfH9VWNc8LJ",
  "key9": "35zsQGN528ToyfhaQK3WKagfxmAsW5cEQdYQsYCPQxiuCUzvf94YnvnkZzrNASHZi9agSCZ4wz5MxhcxD4EKLmh2",
  "key10": "25eB1Nq5v2xpiBMvwFDhGknWgT626LrKwXyZPSaz9SjqXQ4Zs8K8YNiN3FbTZNQ2XNyckuyXLrCUtzvPcUVLSaoC",
  "key11": "5dAr8YWqofNhdDH1EA8AaYUHvoJ3Rz75BPdzGodKxtSb92KosYNe9xTUgR7SbSQtT9eVvVNWUrcu9Pg2U7M2ejtz",
  "key12": "5FnmDkBrtVC7AwRFXsgYbNxJG38pPyWCGLPkhUpRccnhWQATFwPrECHrR7NXeb5k5RsPxsRnBCRn6PHT5bhYB3K2",
  "key13": "gcTzKbT9UsRa8eHt2cB9iM62P4bQvoKfBU17w4x7LM2WjyK3NtPXP8mXzPFd1DiVtLp34hV7VVMT3DnsJRdqPg1",
  "key14": "2BLUFu8o7ARHusbBev3gRdPYVTwiwKkNacSXVAmbfWd1qGXjFWKAGXWJjTu3eVBbAaxifEFWNcNKd7MqamYcGB9N",
  "key15": "2ajceiUhMR75r2mfSwvQ32gqRUrkRSogofAA9Rt5aSUzuPCHAVuBWFv6WzqS24NTJgp8Bw4jmuDS7qvE5p5KxneW",
  "key16": "4X8xR81tyqG56nUgUrXm9ARERgV79PTYN9koGgEMJrCcEFQvZp9KzrhFJ8wKBbBGpGZFSuEb2NS3EYAFqCqF1yjJ",
  "key17": "3hSjuAxc1acD1UofhVzQrzhX4hqZTsKeYqzNDzenwyitnNdyEMcSz6d7U8SiZHoBnUF4Coi5kxjcHofDGCuFJwR7",
  "key18": "2jVo8GG5QYqUyWiLuhMDECgUuPsreByz5npRWEHezhsW1AQARwuuGjDrmxum7dApnGPCDScHde9gYqT7oMoWgG1X",
  "key19": "2GcrxyXUjjUUpJ13dDVLRbJDHGH4Sk1L8LDpo1RcELekYCnMumAtASVVBg5bvEQft9oqADeEXtq9SLLp1TqsBLWq",
  "key20": "4cUdE9gnr5wtsFEoovRDXDx3BHKzCjvtu93fHMqxubqya35HWbzMXrMzzyovXDgWh69zxynRc78So2bTqzFqpZsq",
  "key21": "2NqfCg3UPPsZmWusP7ppGe2wz8ekYAX3uwLe3hdAYyrQTywJUPokDhi4639GZxFKxXQ45DQH3otuF7DWT1Q7B2EM",
  "key22": "4kyG4xgHeFp4rhJSWnysK6SwoQiDEGJ7mwG1pgchG9xLiQCJTrJe45XkffYoEPqZphJ6CuTWMacZ2UCPJP1Znta3",
  "key23": "Qx5UzJV7fAr3dy9X7ve8FMi7fuet1q6X23NDi3xtpySP9ggr7RNeaiqWrsoKeC6xq5rpGZTwdVGW5DiuqqUNWBp",
  "key24": "4Mo2Rwr9YK3Wo8wkBHfCzUrjcunGorDLaYXv4ePXneR3rD7gr7DpAs2QzESFNR4HR4JnwUmx9rb99KiTcbFQahvc",
  "key25": "5geVaCWG6zw1viknVSiUFuXX5R1ZY148jX17BpM8Jr2h5h5QrXajVH6gD4QffWsioEEe58xGTcS336kfwfmsdtsE",
  "key26": "5UAKyLYHqr9ohfCeZr5TaH4F9nPbkS6ikvxJ496sqDVnBJt1YGFHYUL1xFTqgqSvWbFhMbUYeSjnkqMYPp1jKWz5"
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
