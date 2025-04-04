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
    "2gBkxs6o1WGMDDQsDqRnghdNUkq3aWykk8mbZGgFahN8NZF6LzRXxkvpWaYvwnoJhiXJmJZASfFxMHZXCY3dUxPq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "545dSLiy6LDNjaLcpwJfofxqJ76pwCn6NNj2MA49HHZdwNtSEyHDQ77H64tL6oqiRL5Ti7dZKzSfy4JEZ5XfVetE",
  "key1": "ft4DfettfJF2WY1efRcS61ybU3LPESWpWGTa1bemAfG9abNTR5MSt3tEY4erjCcAk2syP9p5xpsGortdMcAiFgH",
  "key2": "3sVw2YrTt4UAqFFkW5PcMNgJ7dqjHpc2Wj9YsQtRVRDMPwFaefJ1USQnkuvaUUSgLd8cEpr7EPsn9CBc9pebeXh1",
  "key3": "3oESF7E785XpHKQ1Bb54yW7HTV6ADAu5pBRoaP5y5Tis11tvjwnsRLCuzF7Cowr21qRLdToBZ8URqJU6dh9oKtGo",
  "key4": "2vF2BJxvrph3KFiwvcnb3mckTBzKQMbeyDA6ah8k8dSEVkbdU8GMLQ2hVyc5qkUCgwewhaBQzcujxgiP1h2TKSwk",
  "key5": "3hGmNYJTSA6ZgaM6xBAzKEvRgaocpiSq9HZdvmuRkeX95tCbwh3NbaJRxR8CQnzcwoVcoxNZQDWjGV9kxJhbxsAS",
  "key6": "5kqzbVZLN9k4pn1k8f5Y57QaAMCncK9zAPzEMKXbQuYx3VKx9YyuFueU92buE413aiPW5R46HRmCy5d7oxk6SnhV",
  "key7": "5GE8sLq1q5Ma9G2sW7gNmtZSZV5ZECzv1vNHdJLPN3ZZDTctvHo33ZGbBETdEsTBeuVUac2h8aJj7wCViLMkxfsi",
  "key8": "3SKMRn67sGbSSpZ27LSJZrVUmtwf3i1NX5WLJvzwLq7a6XC7F8YDnjyC75hHdDhxsraNXq6MDmZiVVVMUMxoaF3n",
  "key9": "7ndqfnTTqxhxQg1oitHMcdUCoCrmXFQ27AX9GjkbEvZ9F5r7ePRu3gWCgvcEUQhNhzZxDgufhWvCPtQ1B8ppMab",
  "key10": "31GpV74NDUejLg4AP293qhquwgFxa5n8N4hwiDb3Bagw8SNkXtQiPncChrpaqTiMR9yYbJFAhQXruMQxnE2THQvz",
  "key11": "5bXHmTNKrenHenwwZGydR6EbSYjR987ut5oKMFozs3phDfNmdb6jekWEm1n9Ng5mrCF7NeWVpzhwAFkpxpb1iuyZ",
  "key12": "eGWDuBkLDSVCcP8cQKsKiBvCruF4GUHZsaShPybgjrYSaL6KKekiBDu19bL6JV76DV8uWQwMuMxQh41WC2eAXmt",
  "key13": "5fV1i2EHZxrmhUNmbgoSxhiWk8LwV6BG9akiFryULouzEViDrzvNdC1r7uCDxXUB5296z7xukZaQ4TqxRE4N6c18",
  "key14": "256VBEggfRWEwkzzadhxq8ZYwUF523YeuwaoxzvEEok2f4hvRqybHtAfNUdS8o2B9cyMpttkPwAFTTBCEZ4yNTZY",
  "key15": "2yKtdHWNJTDPuM8Eg57MgQgd8ucDs5DTqYGMzSBeBuTnKZj744g8kk1ckNsWb8XrQyh5QF7ZzNTFGN7nbWntqedw",
  "key16": "44r82M41rSMzYoqv74RYc9T6THoqy6ozQetkpvAibLfaXdnpWbGqRWdA5iywWvFmBz5xdip88g7fpgGF4SLZDBX5",
  "key17": "AEipC5gRkgBPDpAy8akF64Y1BECpuf6v8yXLQefnEvqLpo5SogSn8wq6uQd2pwEe8A3yToPdmNjkRoBBMWniTMn",
  "key18": "nqw7PdrhmQX4fABfP3Vw6uYQvU5DqrMW32eNL57pr4kbCjxuK32uSTmmGs8uTRHSxakejzHkyVzJ6wzWyAN1DSh",
  "key19": "4eqEabjRUMEkF2NXWWRbTHrJAfpiC2eKHYKZnkGLi2h462CZFYT2f68AzhAbDTdub4MYYrFn6GPWe7pmi7un1miN",
  "key20": "6564wqu5aF2B3zRd6qW8pCqVhdwDtHagKcfQf9xYC7p6NLrDgV1jeN4RZ4Mvg6u4xUQUeSHvQsueVW9iCxh5uZSC",
  "key21": "4yX9qXnC7hGiapKbXNzWhzCY232uSRWpSNvFWnpPNufZYrrjY4udTXzXnhLyYHKNAH9kTLPfxnh36suP8PaC1bcx",
  "key22": "4qf2E3h46htWYPHgvnsDCmTuxZrAn3fSDNuLGCZbdhyTZsVKAaJh8fMhA8Wk5xfmWc7TUM55CwesvZ6zn3Hgm4c2",
  "key23": "fRTUDv7vWg5YYy5JqdN4sfDp5vDdJhUNiHPc3wPjose9qszNy4ZEakGKQ1Uhd3huCrfFiz3u2meu5TUqV2MaV22",
  "key24": "2pGNxpgwpshiuNKm4YDjpKsRd8i1pqcakzeQSBQh8uVZVwr6LcjPAWCcWuSGQBfMowSRRsaJKPqKrymdBCWKMFCm",
  "key25": "3fBMr7LnAz7JCZuTK3mmuiHEvmEvYbGjnvFuQJ8hVYM5rQRR1ujG3iNzD8bJjMmqJZuyyQuF81MrdV82F35KqB4r",
  "key26": "5LdEy3ZiBPS2apvatT8nPzNwWzTG9BEjLiUoSvHkdwJbXair64ki77iYcDjLcMoXMPs4unJmmZWX8bxoauXqtWGm",
  "key27": "jea4gBdxEqcFcgrkhVRENjNkMXdCENBGK2FWwnJUtYhRKwDy9jq4iZfZdSJHCy4DKhHKw5RAYFQKTEFFGnAtwFf",
  "key28": "2KVs5zGr4kc82N6ZavdUHVFRjZMSsF3t2F1U35AVZnTt7hnJusqHDSdz6H52a6UM3bnJbiNsQGS5BM4uL33qFCN2"
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
