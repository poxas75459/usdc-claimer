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
    "43og4jVKYki54RjXCEJu3KakeudW2RRxiWN3SrZBmPJY81oUDKhrMDpwLNA6BRyRrKTbkV2K7tEVoH5CLP6egFaw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hfYaXBnpW9oj436ugVCwxbbnSpWYXLiXB7A64g9zB8aPTcXUxPgCxTXzTfP1geY1mzb2B3eUW5bv99o6vodsLMM",
  "key1": "2x9TMJkuGzQyP5woz5REaYUQHJWYupV4jE353s23dkoK7S9zBUtSTSFGjReAyCtLPsGonMLP4FQv6XkpojmzBRVL",
  "key2": "3MnJZdN7yMoWkoDDLe4ftrTWYKVzpyeV1bJRZy954vaZBmjbdqN1nWpfKUE6jAAeoWQg57zH6GNr9rb2jjAUJWni",
  "key3": "2ToUGhHB5LVWsMsf7dA3UDHUfk6tYEUYbF3EgFdwK88Zp1NsenSHHi3K8RhtM9LncS7MfE7KwLwQQqdwq5EfyQ9H",
  "key4": "3bndx3i1kCQ6BJdzcrhbQvuU59HixPshcdfUCyDvZSZD1xohpnCGMQuyDHrqjSWG6f91Ug7Hwy3U66Wm6rDRLSyi",
  "key5": "3pitEr1E3T46gBUkwSojZcFpqLRTWY79H5UTkRb6nS7UHwEWhVoEqN4shT1V982LnrEj4HBypQV9RzBiUeKbPJ4z",
  "key6": "3uRJnjUmq5eseyoTzS4DtFktjyLC5GGMiTUkgsWfGJntba1EMne4YVdSQsLAo2qGTXnhzTUqFvDDGD8vtgDzoEBC",
  "key7": "3qxrfcoJJbrJpcmWKHMqSJmFLh57SDJKVX5AXwy3MvyEeHRepV6fcyLbgsQ14H8cMJMjGxVjqu1qBvTyZfU8tBjm",
  "key8": "zaz9tJtqSXzBg1cHbBA7o7jHi7KMXjFXkaNf8sBd59SSsKZaKvTzQmHsd4o4JVono7gXFZKnWXJrrLQEiraDgNm",
  "key9": "21RzDnzPUSNYJFGPHnkC7hVGkv6qDdDcX6pbp1PVbQuwZFg6q4oZLRbAQxbsTnB1FXeR4BatC3a2JqfuagJ1Yfuj",
  "key10": "3xSQ51CqoWjBeXbVowkdqJj99v1uHpHQjpAZ7opy41zNovHJs6ypNXdiBBmNpJxSKVcuVr1zBSY4PAotdtF91DqS",
  "key11": "jNY88GN9mih7XanCAWm6NYWCNWd6sPSkAYtJ6VZTXnoJgT9zm2f9wRTcA3qSbxyPaX18687ojw78x3pgdcSvSun",
  "key12": "44gv8vNs1b2WN2taSGuLv9GGZWmWx8fuLKZMKKL6TJRsCadGYQ92gQk6W69omg6PH6rJuCvao3jzjCLrh7sDTdXX",
  "key13": "3yx6Jo6dcHq59vD4oQXuJ7Nk6ZexRu7xW6Jbw7Xfug4Cd8SZq1kizE8x25LQZBRJvV7pobyfqgwijTn6dxSVrip9",
  "key14": "2as89aM9vKWdMbzdTLkQJ9f3zadrwXWNGNZx14HwiRkFeZZU7yQe9T372mGS2Hp9d41kNJedD6RYnmjiipmJLS1w",
  "key15": "3U9DpTkwkVMyogF6uhLRjJR5Z52NRLe5qSTnMUHwsdHy14bHQAhdqazL7FnxeKnKdViZdzDAQWfVJkmQTvaUEBEm",
  "key16": "NgpBzGiyUHig4SLip3hZLZc6Pz7LHpdmcVtCR2E9S1yfSpJNDXsoyUxwLA5dgcPUkJ4gWuCUoRHtZeUbJ2WZzUQ",
  "key17": "2TBCv7xM1KJDU7bL8BVNaxPhCr7JeNRYebzmXPqPDXeo8PTYDrGpiLEWh2ZuS33QP6XPc3vmCQs9kDWjZEsQzLMS",
  "key18": "4WPKWrzQScr6ZaXZqjhieYFWcG1fTUDE9A2bDeFejHYRPSoQHZZJYffzJ9vAV8tDmmDAK7jYdDwzYEDLdwKAPUC2",
  "key19": "8KBmWKpV4RpBCrnTz2V8RtYkaxkSTFHjadGHG8ZsYADHP5fzu4pDBdUyontoPVVTFNxogyLR3UxXjHDvywmtf7H",
  "key20": "2kqbVgswEB1hkpe7HmxBuAtM4H5yLttgGByCw61kBu7isTucMEktTRbmHqFjvM61wZPjaqsvAgMHz2ikyfEkbwMP",
  "key21": "51bdyvtZ1TUm7ricq78HksnFgX8V9x9tFPdTZt9rHAyRnQxTbthSSckGeTA7KpGFyZePgrMJeXYVeJMZjgNhwBT2",
  "key22": "3eHJqUf6ENZcxQVE2yrq9SGUqj7UU4zRxpZSjAXXUjP3h6ZyQYZ1WdPRgyuJ8XjgoPnbY2AbN9UaVrKEJrpuCeRC",
  "key23": "5s2HfQQe3sa4grCGn5Ms3k3XDEbbQTXC5sGWL2AAyLJEjewdtzSwA3ypncBHC5rLCGgvJXjqNeME9TC2sybkzBAz",
  "key24": "2eh1HDBjujEKTntDuYAp5smEHfb8uiULAs1FbAJEoMGDwGmMftELaFJUs6ZMrwT9cz8BcF5KyaGFPGuVC7ELwxgu",
  "key25": "4RDqY78Y18BuFHYUd34RS5b3MLMHAAdQFiSMcc7PP4kC3J2XFYHZ9fp58mRM2iWDtNc8A8H9xoYCy3PDdWb9yKPn",
  "key26": "yiLGQo81HU9Hnj1qvcRKzq7WMD9CMemmJfHKeQBp4wufDAL4Sm9cpGxBSvmYcnhH3qMMJ6dkmjW1N7eUic74yVb",
  "key27": "2QAZPf9Tc1ikkS1euosaaNK2PCGwzXufu5TTeTYLyJacdxoqzFaK6bSpHw6QMy5nF7FyXzRwdcXo1LjC61VTMmyQ",
  "key28": "4VkBfsvhaSCqcvHigFAsMqhfJZAjGPdiEHo9o7yPKGFYzUueji1xwt6zk5ioAFRrsSBf2Xg8M11vP2VGHJb7AMSK",
  "key29": "4NehivNEs1ZHN92yJQj58h2uMdx2kNg8C7Sjoe5DLpMaqfiMwHLofUxtAfzXaqHWUrCZzTrn44bWN6ct9A2o4A3x",
  "key30": "5BGziamq3JjpSgmKB3bPP4XvEHys4vABuSaBA66qq3DVc9qksdAw4JgDcckBsCammKTBdJLcdibc3Ubkwn9XWX1x"
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
