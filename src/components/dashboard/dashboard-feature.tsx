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
    "5YBRE4jwpjxfBea2nuHUPsGsau7SisJpzdsqbmKpvsmb3FmkQhp4hT7PRNRprHwci85VKVEap6DJ1sL5E13hYky6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H6j6tYCVPYW7hdUxUMeyHX4sN3RTkXbSwEuFjgXFCG6ugjeDSwc4NA4ma7ffqY5zYwzsEeKq6FWQvaq5aR5rtxd",
  "key1": "buNznoEmdxoxuBxejC7xaJW93fRrDsrryWxCp3SwiSmbBdCqXYGaiaJP8STFrDbtvur92tVvoHN73RRRAtzT2ep",
  "key2": "PfwsNmqUJ1queVyqEmUz3ekoA9TikBBvr5Gp67SRG66q1sgVzPeMSe5bASRpqFRa8ZUcqG8R4ifsNBuMtXrecpv",
  "key3": "CmVfbdhgzvnkdhGFnP2qHXxmcNnhULqS1vvbPSumi6D78XCYp1As7iHA51rZCqfFsVVjnFVnji6BH5bg5DJcmuE",
  "key4": "126CjLv4JoSXC3tsQEjCFLsTrUQpx4Cu5Cj4cGdiYrpV129GbjxkZk9h26mzeQFUQEaUcCGe2bs8PxzQCqYBNJyk",
  "key5": "4fCFxyoWFFpmVq8tu7L5K1xSNTFMpnSD27UKRFVjoc9nCMKGkscCBiPFh51Z1GTH2KkAHw1cKDSmHociMZbXnknh",
  "key6": "2nUjzL6vc9nzp8vejrXUq1PTnq8ALxS6BG3oyrUB7bZ7rEZJL4yparEvs9h1YH7Zh4X5RVmiAUKQYNa6K3JzKzMu",
  "key7": "2qYxoLMcFr3FtRBAYeiHN9HGp554YVczMZ9Cm97xibt3EnuL2UeTxcbNdesM2LqptDpLJ3cRFZLyn2Bfr57XQPEE",
  "key8": "3Vub47BzUon5fvC8P4x85uxvmCR1KeJZGov5dTe76vtozDBQLULt41xNoMthNwRVoFQYso1Bn7HQ4dBcLT5PdQt6",
  "key9": "5qaESLSgbq5fSkPbfQZp6gCiakY2ZFLvhL5fjwi4ANNR3RHUgDVHwPvghjVkEfKfdAqaD7s1TudjMRfAZ4YMGded",
  "key10": "3K7LoobZgK2obWKFTmxxCrytcB8D828nH9MiWkoDkbtr789Lv9Qhus3688o9CNneeWhcRS8BynKiF6PQptoUhGub",
  "key11": "3dhqPAzeN6UUinuphAxFahsYHXLMohdAy3r91GAgEkCPzu7UwGdq2aXT3bgvdDt3yiVD6N6DqDfDvRguyTRjBQp",
  "key12": "hh4YHtf5Lby3BfEwR8Ujwy8df8Bhc74ky17F55GfD6aP5ivWLeSC3mBCz784vxJ4apbeHeNHXgW641JFHtvjwqG",
  "key13": "5DXrEufzNzAewvQFv2ZKp5vLd9SZqViQPHxtgP4E7MyjCmLAZ6ivDwe7ovo8YgKiuPGHNqQbpCBfdeY3nvNuiAyx",
  "key14": "4KrvLpv2nMCQd14buDLNwpzAZ5k56rYvvNDdPwjQSitS5ctdJkorZnfs7D5yrgK2VDmw2S5XEMHvBFNi47Yz2Jj1",
  "key15": "552ZRkuETeVYgMfaE9uUezGrSxJTgCZevA5XiqNaKBHny64tw7dzy9tc417AZERmUSpTNdonm9dZTBn3cm1NKvAB",
  "key16": "5ocVohGiNgaCyZzsBwbvoiYywtvGoLkhCAzBkiwmN7PqvYWAZE366tLKFCw7o3f7H3XRyjTfr55eADFHoCZ1ZTHP",
  "key17": "4hyvBxsv4ib7XUMbZZTbyBbQJZp2XVxe36RQQ2Jz6ttTGkf2gnMtfZMTpjUVheen9J7JfcqQ6wi6sivwFmE6brWL",
  "key18": "5nNjBDcKi74kDPkzWveDU2rZdt9UNTi37BXmaPnNbJDEbCpBzm1oxYbnhndFCEywdnEo1FCFNsTuHoCjryTvG6SB",
  "key19": "2c6HL8RwbAo4LpwKXXaUvPa1TwoK3qWYxDAZnLLPvKUMrixbKZUvgYDr6a8Y8PRNrUJNgVtw7pxKZd8MYuVWh9LE",
  "key20": "49RkaKaUz9kfBhiMKn5ifXAAQZ28mRNfRbS1bxjWSL6ipjp5uzqA2p5G4g8h5oQL8YsKhav1cbztTnnwCCYMsyoK",
  "key21": "5H9YK6cAVdva5RVeoixD9kmXWN6dCUgH6cAXqHGzw5v46Q9eLuXSKcuXkMpB1F36Gmcsr2WuJNBZCX2Jy9EW3gDp",
  "key22": "3LwzoTKMPQik6q4PCHMfAcjaoWnd1QdaqDrdoDe4ugk2zddytAz2ZWgjtvo9JmTtaGHotgmXChLd78QMQDoVgHvo",
  "key23": "3viNogqnn7CtHaWR71RZbwfMHSP71yEUp9sXn7cUTa1cjoLHyfU6s3Cz8sZKH6wepztvxEnKMQtWLGGRduXdzZFJ",
  "key24": "a8qLjjKSPuLuY4XzZ5yYYFVzd6BQqYENQYiCbJoS4krwRSDMMFCLmfUSofddnCNXjgsrWNP83QW9PZKpSU7AJn2",
  "key25": "3nsHJDnwhKqgGQezGYzdAZBBhoKLkydW1Em6TwX2Q2iukuGFdxMu4wyBN9tJzenR4pHJ7VnzDkwEut9MGCQsbz6N",
  "key26": "4aeqtjfT92zn3ptxMAtv6j8yccLu5rfCJswiiUGSZaBoGztPMHqmcGBK9KDDhc1cSJSVMJDquiApGNJ9WPy43h7D",
  "key27": "j1piWdU1aAVuqoEUMDdd54nXZN2qd7NRpvBMkMJ5CT5BkBr4nEPMhA2WGSNgtRBa3BwveP42MpcWe4ASdw9CqJc",
  "key28": "2iPAgrkXpbpueiQ2fJagdaTJiKtamYC8GYY8VnavAgcLnXNmm9zAwAkDQabYRE9rfTyQ7JyG5aGEjVXgMGTHNyTh",
  "key29": "2rRGkGqBhbbdMSSTB45BpUhMY31hfgCYg8AegGSkR38V3FsGYREpfjchBd2zgdDDjU3LJunTtNvrJQVKKhxqNKVo",
  "key30": "tZfZwcwPTpQvXWFLeKDyuNjc3fh4oTqeF9wbhevEMi6qPi9EZzKwykfa4yZaqEoHenGt3ktr9ReoGE1qzxAPHbq",
  "key31": "jMoC3kd8rXMgoKLqBTNqoR9EgG3ZaYobDPHawCV7GTPW8z7uU4tDaHSz88DUBw4aP4TxXswtME54c8REeNXHeoP",
  "key32": "5v7wPC45fUVJmqdYF7xmHuopLWWS3zcHSeSWohDzZX2NL7U3G1EyjXQTobEH5svXh1d5eRC6N5DLy4ZY6WEe88TD",
  "key33": "5w2TtjDXdNDLu49ocb1mtedQwnLdhow4uixq3TYECZ6k8p3n5Cg3EjTs55Z7QcmrJBnQgdG31FUGkrtyzNjui2rY"
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
