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
    "3jcy719MwpLBwDqkkF961vk2PHeLZbtEABfU8ZoZx4i4DF3q9bkLEy965FdwBQiJsVN75fw733hfYHHYswHRYukQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FyXmQ2pSuY2TR2M9EfuuBcFJbUoLn5gLayg66ppSPVhjjWTSgs5iAPZiM8GAXrdpqH9ygQ3cAt9f16jx7p7mffi",
  "key1": "4YhzSRtvDnBo6uN1FMg3JZE2v4J5iXCsjLxamBCGYtoLehQQaUKxcdNjy39yGxA8khQBaPZNoo1bn1hMtWYQhCQo",
  "key2": "1NChYpwwBtjNmnqqN76cVPre9xBL382kMKxpGJKffhjJrjQv8zXJBdEvc3LJgkwpeFQxMwcrtJJs98V5mGoQFbF",
  "key3": "4qdA2E1fCCHyc3WUtkrpFbk7mU7mVXsiTu7fnmmgaSedeHNtRzK6fBnvAytTV43EggGTVpyfxS8zEoL3ZSkAAtLj",
  "key4": "5GeDC6VHpVBRWsobeQDwY4uuua6d1Dhba2CNgtCU823DRCbbmvjVBE97rsLoKLvh8S5BFoNmwai6HKHiQarhsn2h",
  "key5": "5chwgUr6mYm1zLrhGfqq23Mqijce1nmfvSGLm4JuhVHNHP9HEnGzrcR4jh5ptG4WiJ4Vwehin2XhjDa4sqbXwXWh",
  "key6": "MjmTiwJVdEe3qE7hCCkr9NoaovATbjsotHg377nVaFRrfkWgBYa2YG8zwbzuhwip8sDWoE2Dq15oMpWi6TBYRqH",
  "key7": "4CBonT8ZesWmFwDdwiQ9KdFj95dTr8itiTGfars8GWBnwvBcoq5Q7nTzVQDAjkhHT1UWFofoiDB4NEA8RYLkaMmp",
  "key8": "3i5sQoiTB5Lp4n8Zj7R4EUtfegmFL7tGvsEDdFqv6AsUXpvJvkXJGj48BFn94S2mrsmLDyQ8i6kiFGPEMHiLPSo6",
  "key9": "32ZXdMoACgTAssYv4iusePu93UiFgmHALpvzao7aMuNYCBTjPbu8d11N4YC6oSGMXPdhK2dRdCAPLEEuKKYeC3jk",
  "key10": "5q4ZHCDJ3659jPd1s9TAByNjdA87NkSiFhAoydvSgcKh3gGG286T4SzA8qh49n5Yzkff7byA7rvGijfJVVXjxcvG",
  "key11": "3TjBqPBuq14cUKCsgBA3XKn8p28ZTzd6HuTWydSJqBe7mdfGT7DdUCTCU3YNHYpQZub7V4PwLH8v7PGs1Y33cg2",
  "key12": "5W6jaoM636SvUBZQuzkB45KusHNk7mz9zgc8pdiWm4SrPaRKAA5zvgNW2To7YKTq8mQ7cBXNatWRxDmdH7FAuSBP",
  "key13": "2BKntCZCBkfV1gyxwCY1U1KzGq5x4a1RLfwfg3pynsz8zpGBuiVfe5XDGubpCoGTBis4g5nLkDXHhFuNK4oLxv7Y",
  "key14": "2cnRPyAHBVhvgHTyBFUEYNeQcuatPYKY8eJ9SVPyJ4fRDJYt6SpwHEa3fc1qDoi86zCaqst7FQDM65LgKuXTBKxN",
  "key15": "5U2EknFap1Bz1DkwZ9cUEph97MZhmCaLCX4uffwpuQz7TfShzf8QiU4d1VmjYm7FLF5be9cXyJsL6aaWKUPgHhre",
  "key16": "31sg37hLh8nbHmySdwF3ai8kxLZXSNrS6awdBsygprgG4EczhqzmdkQmDw3HTzeGWnipxpRFE95Az8YMQcMiSsqp",
  "key17": "6DDocn4KWQizborVbtVyrp7sc1o3zyDbxohWupdLkL5WqHhtDZ6PRYX1vrMCFmWCXKUCRw1eo1CgGUA77zDPzfT",
  "key18": "2gVZ4ML8gsag51h4daK3y1EEn4q8P8LTKmsbF8gHxvbkC3kpmhFwCBj7EVkWa6xDzkgwy74KN3PfzsvSVyz1T9N8",
  "key19": "4ZoycebAwpBpM9ZxjKtrbn73VzGhhgsUNw5zNZJnnexEwca43qFdzDcjY7cPetYDEXEJnptkCBc5vouQZMFVHrJK",
  "key20": "4Y59Xq8bJnpmbyXMA4MmmmLDiSa4KpLaUxP32UXuPb6brgWMNxS8ksPWPcwujmvr1hczLtmTcz9z9EnmYaXMS5px",
  "key21": "mrv2itmzNTuYhruwzajuV3TeGuNDyf4LTnpXyxJmd78HMn6cdjhQSjAbuLsLBp9v7bX1DMSGzeURQZHeDgtwiHX",
  "key22": "LtsQNW5H4qy8uxrCVEgrcz3XrGa5xFFVBZFuFk8JiSG73Y6VJhbohp3kRFEgYChUG4atsN28ythMvA2sPFD1NfZ",
  "key23": "2sougYEEUaL9EpXHzJTJ5vCUf6XPUpyF8Yo52psZHQmHkckw8KgbE4sdEGC4AhJagRuC6rwHCB26unUSzJePgWPH",
  "key24": "5RJQjvoDdWnYDNvYXuFfHCooA5MYJ5JGfXC6bsZKrEGd6Kr3KP2MGigWcppk17fwa1wyXnWDAY3Kx6RMibWV8Js",
  "key25": "58MePMrYmvTq5AbJp91VTYd3fN9znGjUAZwTeR4VYCWiq8UBh2CZ9hgkbW723fWTyThxqtadZFbFJXCYrD8He7jq",
  "key26": "2Q9GCx7AQtE31BZdWrrePfzHzJYYim6SG1Qe3QjWcteazgk2vU9TVrMDLxspo8c9wmqcUfenk4mhQtFsSCVRYxFx",
  "key27": "38UG93FRCNfZm8wjcdqoH4ZHW3jjWJJafiioAEgyC6kLMWVqCjztp73HEjjVhUNd6bVnCBtdAKbum2qG62v9vxLZ",
  "key28": "5fbybQJriYFydAUt8pHR8XYwze5SPYUX1y3B7KU1RterG3S6bb779BqGko6teXtQw58uAuaAR6gMWu5xkfSYn61c",
  "key29": "xrXz2j7gppHK1uBZGDn3xyV7BrgkkcU1L4LekqJSWRexrtJgjSTQ8j9CefyciAf7wkVj5N3E329P2jZ6tkV9DaA",
  "key30": "4KzdE18xPe2V2W7C3bwFR6UU7rMxLgDQxE2HEW3kwiWYbsUuyitcXS86rQWudKsUu6UmJGu2Q4mbZBRdY6D7qX6D",
  "key31": "3zKqx8znB5F3fP6Z8yxuVR4atUqNUNhwURe8qwkXMVfhwSwurXgXvkjBk6GSzMyxzBDzmS3ZRR1ADFKK4PxQjrL2",
  "key32": "2VBb5pvhAYd9ymvi6QJZcvNJeRovg4A4sTJ8i5pcvqHwuU6uKuVUdNYkP2JLP8mnQr8wWrQ52sb2KnaL6CnDuqrA",
  "key33": "5Htbw2iGF3onKVRuLBxsaRqw8Ex5q2hM9XLTD4wLfEFXk2tXAPUkXAB9siDGyML9kXadakzx4JiAr4mhB6rmnmJZ",
  "key34": "4pHvKLetyZVD84M8gyHb62eiBn9aGtKBs9gnPmu89FE3B1fExqsNViRu8je1Ee5ejfDsh2sa2EHh299VVvdMax2u",
  "key35": "5yTAXwCrQCdK9Gw3iohFKfN5soYiQLMY19umZ2GL7DhFHnUhDAF3ugDghPZjmhm4RWB7dzeruMAhw77fpjDcyXjv",
  "key36": "5PVwWweGiDscXDAwtBTHTxL9hD3Knkkde5ekazF4anxZFukPXQPiLus6r9NdPwdsJbNqScxvj2oupBD6nziy8eVv",
  "key37": "4UdRABqXAHvrzH5UVJqmjqs1j4XdKg2FdnV7xbXcwDENdUTk6ru6HiKLmLH26qvDrW5vda6MFVWtp1PszR6QrYsW",
  "key38": "4at3qT8cUzfWnpKtY2nbYeGLmkQofDRyTV4sooQ7Z6XPVvxgX4gre5QZvRSrJrNGxmy4f63Auo5VJrdx7Uio8Jxf",
  "key39": "2p91Vvh8T9XySff7SjLQ5obYGGPSNfwaxPyF1BaP5MLTK45gdsthU3kDnoBiDdbMPeCSqC5YPMs5sxAZ8KE83gnd",
  "key40": "3tvvnw9QrJXCZSZyGcatuzvEtakwdKM8PwbhbRsKCUn839VD9VUC7aCPqYiXPGQrvbxTQc1W18nbMSBFUbuC8d2N",
  "key41": "LkMqo3v4Radmdf3qmTcxKiu8J5fnPVgbLugze9PCiGW4JHRVv74os91UcSFxY2UeVv8qxD4qbqHK6gBdXvm12UU",
  "key42": "tCCKYRqSrN3ZemkwrUqj5wYzPN5vZMRpC8ULnmVQrPNz7bHiLer9yJ1NkYprDr69sBC3CZcQHd9mR6pMUsb8CZR",
  "key43": "5oH5z9ak7BZp1uCxZBD8Z6LcEhTYZcabS8fBn9KrPMp4pEa3NNuPYCq1YTdNtGbjJjT8EhrFr7WGnBqAptQogLLD",
  "key44": "3o1zPs7Us4wnkNtnP7ULP36igYAL6b9oMNdMzDEVY5vPAhAi4KqUVS1XKDyNYn5PT3qRMjqCzZocd1hydMWQxio7",
  "key45": "3rJ45Mma5CnLsMRbqvyQgVwrjdA4R5dnGo2X9zmXE2P6pK9ES5f4adSPbFeanfJHDZyJVYCAbqXpND3fv2NQjGwp",
  "key46": "5CtTU532Z9WA84fcJXETrWeZpsPfDsr4zZGDLmYsEUm3ZUHMpnbAk31aKaeVdZNfHhy2JJ7DpBf4tXCmjGtkDt4P"
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
