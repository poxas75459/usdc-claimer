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
    "4XRYz6mnaUTU1LqCPxUx4e7y9uNnVVU3zGWPjh6ZfvuMUfVQw2AuK742zfCKbyEJy4QhLcBQeuEf8KHwUti9TDUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51WLc592mXfPBSA4piq9PdaJNdxrm9NaeNsb6vjsqx5eH7j8Ao2xqEZtGJS9NieQSrw7V75tUUwGdeHXtYLtEzYS",
  "key1": "24EnRjeAnpfBY37JULQwX7KkgwtEixEPgKXiFdteDrYmCbU1tjkY3kuZ5srFWnS9786b5vL2npgnM5LKjVVn1Mfc",
  "key2": "4QP7fKwKyf7hvkwfzauzQEKMYN9N9HTG7Vg5viY9NSXx4H893gk5Wu3xxZ9L5LgDczQ47EbmBy1oiMguTT4JKETR",
  "key3": "2bND9USuJxybYi4tXTtyrcpt1VTL1mzLfzMDrsmcTvKfdvSozJnBNaRU2HzJB7BjftXNxpouou7P9NHs6BCRitSX",
  "key4": "23LwgKVWPemDJhtDh6smvP5qm1XGtnM9GcWQQd5WiHsYSgDnE9XVRa66wNXv2Ab3kKn5hJRZeyFcqwHjzXXaoFFD",
  "key5": "54fVhJ6mPQ2Xaq8ugcoPE8tUyeoT77n6v8MgmoMh23Z6cj27MbseLWSg4LdodB2WrKDxYinJUkVYPhZB2doE4Fii",
  "key6": "2AP7GJi8Fnw7GHww6YTCdCa4ho58DWktrGG1hxusAfsH3iy3g5zU5nVophniwY87SX5xjRYUC8QgHtPvA7yKTehf",
  "key7": "4nrr6oiWU1CNR3TxP57UUFq86YRQdKyNVhk63UjsLe62YfZePrPwxBKXxMFSqd64EwgD3QevLTzUqDnhbSvsgVw5",
  "key8": "SFzugrjAx1p1UjPhfJW8zQ2wP7vfWec1EivQ5bKtSrqq8cEFtVXuBmEzqdHzDAAf2fnt5qWAD9ByuA7Xyuj6E2G",
  "key9": "4prE5ZXKZqQ5VjtXenprqPSnJCtmo5ed4AevqL7LZV4J37puzsbjE6AN49xRFJmNReQZEzvjYqyQaHHa7xcdJQhT",
  "key10": "5YENPjir6CAqkTgKkoXUbg9mVeQsL75HHqefwwak43TKm5q97DguxenjMGRy1crLxzWdhDxbUoCuqcvtd7GJ7cvr",
  "key11": "sef9AhE5t79Hkz9nkybrZjES5yNd6t6axRLJV3ivdXkQJ3hEc69CcozroJ6o97znbDEENqGx5qsmZxV8Byi829W",
  "key12": "3CmtsP8yMCnH8J9iGDofRzT878DQjZpC4zdatRv9Gh5P7uAZd473jPjWyu26GaPVcMhfRWhgY9rH4EaCZi4b229g",
  "key13": "2tjeGPNjwN39PVWQLqFfXSeCaAPxA9f1dg2UpJpekxJrheLACKkmVNeXkbuDjuqwSQdNJBd1izE2Kn4SxaYpt2kG",
  "key14": "4VFqe4yAttGm54pZrS9pBHR1QeAxtMvSD7TLnQp2NqNmGajujewEMb7XytRgk9DH1Dj5mdZp8BrAeFKJbrxHokS",
  "key15": "4fvGQ2eeBkDmj6wFLFML74rERQEjGopo3fkUUhQ2JR5M2XgXjsnMYa4JXxf6GK2JzkYx7WJDQmsbMSzwXY83f1Dr",
  "key16": "5MhJN1DiQvPaFo8TjzoXsnrZM3W8A78qNzeLLAeuSK4SywUikmFqc7ir3PsTLLVRL4wVFdFeHargtS48cNcCFRj2",
  "key17": "5UJ7mSM2L3sDs4qv1pGzwcvxuf9xWAp5bV6LgCRNRoYa6sk3G3r9CQXs5gYMN5fVRCkkMoCvQbxZXbHQHXYyVHiq",
  "key18": "3JnjUQ6UEuo5PSiu649A7YFA8vxqAQ9kiTrSjE5T3P1F25aC8yQUwvTqzmk5WHpp4FcAk5AtC274iBcfLpQYqWLD",
  "key19": "3xZv8EQbSM81Yt81KmNAUg19TV42xzBpV5qANv6qiJxtuKV1wiPsyXxMiMtXLqy9ZVHvvp5pq482osd33SujZjty",
  "key20": "5ZuTGGyse8vdxp31XtJvyVqW2Hw47CGtvrUSKwLrRVsrSB7GHeFminzkpByBS2bxUPZY2h8tF79uzDxDw1euVfVy",
  "key21": "ZkUGdtnYfXBPcVpXUgT7Nq59cGKMzqSWTAKDGPyf3EPWsiMNvTZrSLThKdLvTgMcTBfULLNg3uarXq6s7YtEtSt",
  "key22": "4nfR6uVCxhv8cLdVTAMUn2V3sSSJ68waDfMyjEdEY8fMeybTnnVNNCuHV2P3XWRYuZf6CafMQ1rGoNkU9pXEfhY5",
  "key23": "5ex3CkZSf6PSb3cmXrrx8AMTLpydDVkSUD7a7TZ3JQmSf4UDt8wq5yz3YU5uhNi6kB9N4yZ3bmKuhWtshrmW4pnY",
  "key24": "2DD8fAk3kzt4iS7ZELsShZqpFrraipn9dbUjsc5rPHVVmxbnbBrFyAh1kVrQFcpkQCyLXihjE3wXFWkrV7RXcyZd",
  "key25": "2pfznUghzXAmBYUVtXTzN5uVKkiaqUNeFyKac4bo8824t1MH1oR6S6i6PddR1qUCVLiRFjz3orXmipBW1vShS41G",
  "key26": "4tmNhx91JSY2gpdsR8TJYKCtCpVkSErZouFcpCirfcPdLCtP6sgWdhQRqbxHzcpe9jiusKbWbdFZ5og2dH1Z7uZU",
  "key27": "5GhPPrxh3mi6Xer3HUGZvDzx6poLGMf5edLVYjg4XfUHQ311xzHSBrwu1WYfu356kUesCmXRJvDBzJmeEAgFaRri",
  "key28": "3tHprGCHEEtYcrd98PLfzkfuaijPdvjzdUTXVHyXSRVQZatMFZDm4vF1FFUFVMb6Lcbef9oocSjH9M6XKpCeJ8G5",
  "key29": "5VcE76Yaba3ErDjVCpvmQErn2eUnSo4n3ifq1W12vU7Hz4pbCDS3Pjf2bzzrvQLkqrnmdwxNhgpLZmWo5iG8pzrL",
  "key30": "33QKpTkM1mm5JfyFnne1GqTdyFdVvxv9NDsqE5icd3JHjLNWfgcas8HvUwZ5GPzGCZHa1EbqxHTtNfb71gkkGubt",
  "key31": "FkRtJEadC9ehCrN4TxqHyRrJQmM76nw1kPGXgnMfvJ9t7d2QFapHCGw19wpCw2pgJQ6k8c6M6i5V7uATtbDHLjc",
  "key32": "3duofXALGS8R8ygoz34eiojC9VR5xZFHS2t8t5FFsKhJJXNLh5hep65GdL4xvcJtAyuYqhpznfPuQ3xu7pgpwM1z",
  "key33": "4xCQmRLMo1SKxe7BTM45R4fHk85EfWUEayVRRJxNuF3PZtW1nhVS4XSJqhRJmcjTXWni599rapKKjdGa6u6vsFyS",
  "key34": "3gUvrPfFZAkbPSYwPH2W6PCDoooVUGGLzyMURTPikAyAMfGTL8iJSsVuwQpmEUgBo8y27tTeJAvJVtBW5rqpwziT",
  "key35": "hkX13NfvZoaGD9eRYdYA528ooBMSFwNATdUb6ZjthS3rZDxFCHY2Z6QvLn9TWEVN92tRurkWm9tCv8AoZa4Zjcp",
  "key36": "5isDNPjDPawefyXbEUWN2uDqy7YtVG717uVjnsyBhkntvuGe8hb4HGFRxCBPi7CKMuaqJxHWjBwDLby1d9vpP9R4",
  "key37": "3i1uPmRTQxxxA2PUikQUttC7coK1m3j6yvjEK3Pky35CkxDzK1377HjDJSWHyHZb6yB5s4mvzpqvA4umcduMLX3x",
  "key38": "4AtwK5R7RVXx4Nx9yczCCtEHnkbkyeufL2yEgnzBbeoBWS9UszUQxpv3ezaD2gVnXLLDP8J51k4w6n6Gb6vqBVpW",
  "key39": "2hLPWqk7eeMr6jswi9JVyWaNJin3SwFV8AAyBo6V7QuysNVW6ALrF2mJ2rJuFR8bYJoZYtSPtsNsF3c6Us8ZxfeC",
  "key40": "5JWhqShu2uoowLPjjCZWPJFtLCUWovCWv6oHTYCyzzz7k6XZtBq8Ux7zdcYY9tW2CK6bgKZcxpBzy5rxDEb2PSKr"
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
