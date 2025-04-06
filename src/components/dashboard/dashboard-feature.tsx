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
    "27UBogUbiS4U4T23CFt4JLrYtJtDnWa3bS5gmj8u8cuj247CH2KJcusD4EfjfpEzK6dP1aoLmupZfSWruPuLSaGV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sy3P3xL4eUAMbsZBd54BjQvRKyZH2cJgVMtHjKbEs26NwBj3h4vEZ41ZVGNFZENgJ1JmZnEP7d1gP2jYr1sF633",
  "key1": "2ZFiWXirxvPYYkwCVc9swJNqc3Xv9BaSFwZmXPTEGQHGxXjccv3Knxc5ceT43syPdKT4MPJBcFyTtk3779LXMZWv",
  "key2": "55AqdzVBNqSbXwT1ajymkF6MsJvMSxXFybqqyBrEjZ8RvKtYdyM81xaAWq8anGZ67pXHrvfnkPGyTjoTPWrLu63R",
  "key3": "4YHANfUsjwKEg1LG3i2baa5Pou4nxqK9W7Jx7kZFR5eKNdMoDKwfD7JTHhR5LxrtYomR9KHPPkRA2nPZMxrVTwHC",
  "key4": "67Yr2Cxrw7E5U3inqmgmYNXjSxfan3GYyQRGpvGrHomCqUSts5bJHmWSck4DuQZZUEx9yPVM1gFsjLjdhjX7qG2B",
  "key5": "4BuqtVsVEHDeJz43EEohWbY25Hyney5ZtpApw7xfG9Li6cASe3a5nhsdDdnwZLJ77tsysJkcnQ5FgrB7YcUhrAJb",
  "key6": "4UU3jYiXUSAapK9ca32cGKxx4W8M2U3oRvNW4npupRrnGBw8Y3rBwBKqrBZLYqh51GphybaQPvceDevT7xBnu5N",
  "key7": "57Z5sRnXfJvcgMr9rRS9v74sQeZ4QorVCeZM3P7ihaxn2J6SYKmvqpkXVX2hf4AbsU4qAyubPhfqSxn2gjRcMK9h",
  "key8": "Xcp9CbHZ5ToDiHN2LN4LBa28ydApHB1JkXTxsy4LdyxUUt2neMadayNJkBdXSgf4g7w2skpKeLVCJABJRq3P5ak",
  "key9": "LKZPmfnCLTn8KDsdvWwkPFZVbBfhyMgZJ9DQUayGZ17HzdxuFntBWyD5b3YKRM8LdpPFuRV5Z8LU8A6zRsJWnTi",
  "key10": "cxKhLz7Tcd96nQXNxc7X4zgqtHVJJ9c38V6AhPBTAWdXo1zJgdYufSauxuH5Q4fTVEBYD1wdydDs9YoKs8J9P32",
  "key11": "39D5eSzqSonNG9bxEafMqAmiRmGL3AZmhequNnCGXNwjRzoPiviFZyZwSJSjk1VpnmWK5WwWc2PmCu8Uz5d8kCSt",
  "key12": "2tf4JHAxWACVbK8oDobABEBcW7nWBJTCayc6JXYsgRxBm9gbHSpg3x6LVX5UWwM97R3Y48k1ZtGgCmNNYoZhgr6z",
  "key13": "4jrJuK9SnVT1WgkdDW6trpngnGFnNVN438uQJ2tGt2EGBvfc4kqMTALsS1ftpFMzrukxH85t83Ae51fXJQGVoVHB",
  "key14": "5tux2NktxaorSi5jSApvabv33XuVrEeDK93fotPFgMdkbrdUvvUTeFAXoEwP9EX2XrP7FLUWC94Xm8tebAj7V1Nu",
  "key15": "2fXE2qvZcvaJLQ3rnJR5arUoPZtmKUtY9GS7V7EBwWw7qu2arTKweuHakikLx6zjt1tqDFdFtQiaus2LVYsmJ1RM",
  "key16": "2hpzpt8qj9hvtkp4XmatWrh4cuJzxqKq1cmgsZed3aid9dbT9ppyzoG8qZyRp3fTyyq6k6fHdS9CPSi5nq9dH5A9",
  "key17": "5RmMBkbYMr4U91C4QqHz4ftE4y2aB2jm1Xq8y4JEJU4X9QFF1r1Tqosff1TPig8ZDAv5ZMBNiKRPtpiJxqNuuDaS",
  "key18": "4jcy9BDttYsaKUyrBzZ89cwQWRHRezifc5ycD66nmkJHUuXC7dBNK3bqLmCjXor8eFYfNMt9roLSjeMJwcRaRw8A",
  "key19": "4diERRWQ5sraPzwYAPmc2H1QW5k3FSQfS3UPr96NAFbwUqgYpRnHGA1xiJdDjDm7dxGrGQ1uh8F8s4112gvGoguY",
  "key20": "Xj2QtsHN9R4d1Bob1Ewv23FyVY4uZV11pWCyCFijNVpHwcPsWsUSh6FKtqK18MgYgjHbHSCgZeVLPe3a4kC2EbG",
  "key21": "Q1ZSD6BTweFX4jPVfkp6B4M56b7wNLg7N3LX2nEwyTzFZYagCjgrgoAbumT5ztidnpJ3kZEEsQb2soAgrBWou4n",
  "key22": "2GagGXM4t1Ks34xwYG2s1BQXg8cu71Si3epfFH35GybBENVVMu56ZeWLwEMGoHtQ67XTZFCEKmVXmXdKi2e6E12t",
  "key23": "4zVW4bN4GCyZZfwozSZTrJKWpshL99gqZUQqSmLkQNu6L7YuWiEGr2smziwSyEtjj6dweHbBtdwntbD8dt1LVzyg",
  "key24": "58y2qnvHddTJ7SE4yKHD67u3z392Z5pEqv14puqDcWBxigfku4M9R7L3PEfdcsSbkfD5FpJoFvE1k4gpji8KsCKN",
  "key25": "2JXHzE67h2U5MwqyDw1BU9z1WYkis7uDpS3rEc21yQ58S1NQhyEugsU8pWFVL1B9cJAv5q4AJtw5fVfUidDcFyHu",
  "key26": "4bKrSt1KkxReAx5xpqdKiGm5soeS8ncRmyCx26VxGKWshvHnWgEK1yw65xi3m8GX4qG6pL6FKFKycYf6ewrrNy47",
  "key27": "2yoQ9QxBcNDR9SPp2KqDCviTBqFWbBVHfeNAUpAcTN37jsT42QMqfwu2gv64aDhE46t8ivCTYcPzLqV7u9Zsriyd",
  "key28": "4nAhykpEictifSdCGgQhgp5MpSVtHLhksnSFnuezfUDD9GfRJqCS5Dik1xW7suQqcpk4rUYgfeRpz291ZjkHeGPA",
  "key29": "2q8ddXnaifCbWw6DEqmyhtGwXjVUKCSXWdRrSyWmcyHHDt5s1A85Ld3Hyhh7kDcojdwmq9jjX5u4bz6tZNcXxsnm",
  "key30": "4HVPj1BNSWvq2EGVHPWbqptkiew8V28fYwaHaPDivecrp9UdPPWugF7r7CwBbN7hDhHRe88gtjnrUhR7QBFk5ZYN",
  "key31": "2dUtRuUUSPAix7osTbKNHXJYwbxmvfKjsgRXQyue2mtgWyY3fE9k9EzpZjSozyU8tNfd77dJrV7XJz5bgJbJG3Gh",
  "key32": "38HAyDqvWnyMLEs3rnt4dra1D5qShoMAVrpgzSWtrGwaS4FURcx95UcaEjBdyeZFYvvGfieczQPrxY1GZvEs2HES",
  "key33": "4oag45pN7BoaPmM1jQ3AhcgucWGUNcK3icE1XzsLvvbWSm1Pi7FeRv61MhaTGHRJgQn4eotTkfezezy13t5Gdyj7",
  "key34": "2FqYBAoNYLvjYV3fJCZbuo8H4ywHNkPYKV4vaWzgNixgaHQn71vULjpssu3UmXvg9QQau18mRRe9cRNbCz2PBgMf",
  "key35": "3dXugSu7irx9tnxuxtCqLvpEnSjpoq5Pnte6f8NHcJewb8uLjHMNnMb1hRiUUzVYmMsQo3bG4PUd6vKzG6hf5W5b",
  "key36": "3J3JwXEWPU4Kovekb2WmCD6j5ohN6faeAmcR37DC6jtjdiaBZAeVnkiv2wGAJA67YmPjWPdtFUTssc8kNpz6Nwtq",
  "key37": "ya8pQ8aSt7WBAuW1ZhdGbAFnVpVaQ2tyJVDtczKCbEaTaNC26JADuvTd4c3VYfCtArX47nSHFQCkgz4ySPGNSgk",
  "key38": "5tqriupcS71bBZ8jp183ru8EJ1HmMPmhZyF8BHRgeQ89W9EUuoB6Dtdb1uq9iD8GgLCHVtbPV9q3fBPf5yL7dskH",
  "key39": "2y9GfATtC64DQDFoRA1k5QPWotjbtR1pFR9xfTegqjVtpf6YrtdbgcXhnwryQdn5PybnZ8eci8rBt1H9dkuf1NZW",
  "key40": "3Xksr79mQu45UbbUhxvPZZvfGaTMbA9N9prTJ1xTrcXDmDoSEKgyBLnSrNWjvkqFzC6puEWnYPCrKY7FkDTBV5hE",
  "key41": "5dj6dFRRjTZzcQtHjtXfrgoGHiAiKMdgjATd3M3xyNVV6r99XMyyCNCgaqwvFCHaPZZ6588ep1pMsYnUhG7XnFbR"
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
