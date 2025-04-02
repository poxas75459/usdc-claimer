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
    "54TQ8rcrumHTwFCgAn7PUeyngY6v8k6Dg5mg6j3aYbnNDbZuzA7iSDzU7wZdoC1KtbYc5DYYoPZAHhkUVV8JKUs1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dYDZ1LPt4kZFsoGDGgK66Vqp7piwVpFcgMLQuagGQBCs8FPCeffBxuGVi1GfG1iNjE1eAWexmVaaQphNXxvDJvr",
  "key1": "57eRm982qbhdU41eRyT4EQQYqNiXpditJQjbmTACKDBwq4QsUGGFFdHTzgpkBxweL8hzBFEfDA4VzeSBXHVRuT5R",
  "key2": "4QyhdTax4eZfBZnFB3euspaSimZ6ixdviaxqVNDkkzcCpGt5Tdo2P3Ab36jzfB5CWAMr7nFmWtADAAivogmWv82B",
  "key3": "2RQBaCgxV3jS6paHJAkGAJ1vfbCRpdu54PpawqVPCUaZVcyctFkEtfPzgTcgLbtoUgdQXGPrY4D7ZKKqpwnx5jmi",
  "key4": "2U7xHy1hS81e9s5fpaqETQt4wYz7dojeSx7X8gvVTrr9XRQ6vNB2qVGXLTq5foMd9njoA6927htr6kqKmzWeyVru",
  "key5": "28pbLJaAjYw9g8FjQJTApWD2Fw3dE5tWup99pjDJiVsqVxsYFkKbTtQP8KvyKmy2RE4A6yVkNc4sM96DJjamXNV1",
  "key6": "2KmU2C5Fsq2ufNinEu3A6VYgpxpkbR63JGh6bDeKqS7ua8W3BnAKFGQhGmM2gVEkELXazNKPFT5mjXnarnReP7wF",
  "key7": "5HmZ1BPmXVpD2Fes53Zfd5zB4T32NLaDDuHbWuoisgvvdPQNEABnXWFxYxthJKySLHSjSHg3RMLNYBZVGukHCWdu",
  "key8": "4VuB5gtTJ6QR2eohsP6XHYc4eUmhzadoCRmG28Lw4JrmsWfG8ELAdX22UunHUQJxLJvqZvKBDRL9qh6UUwzVu6dc",
  "key9": "NrMhkNdabooLdTPKWcT7YTxrNyaZG16DHE79rLrQSFaZ6WuRxQ6iouLazKxFf4kAA4ZiBskRSZahCoo3o6U5PcU",
  "key10": "yNog4mnLwXWPhWaMMapTwpu9pDKmd1yF7M6RCUCcyBAQWYUarvYwGk3BzvDSFfoSdhcUayZu5nAvffHW9skHi4d",
  "key11": "41wjC9DgdBgH2iKHYpxmzFmKfQwaL162ZmFSF9SZzTHuDNc1BnamS7TUhNq5PtAxYmahTjzcdWz2NMrd2abzoXQD",
  "key12": "4uKFWYNqVpkYWpK4LgQTQntGCo4CTFSrsV2xWU3yWnAfE4LNssCeNGmvoSAgMLt66iwgdxxgDcBaXKJtjyG6NUGY",
  "key13": "52WRa8XX3TKe3bWPg4fapvWBK7PNMn948o36e59BCPV9rZgTfHc3Ayihe6NHK4kTy7fb7yygZDpY8EAcp5tbfXJE",
  "key14": "3ruBTKxbmxxSJbh2GyCmeeUt6gMCpqgyc4tgGBTBt4tD3c8rXiH7Knh3ZvuGqpD8XieMeaH9uQdfaLaCxwrzjnrb",
  "key15": "27tkrLTR2PHPi4KTexSoSjgChAFJzCqvGqYaM6vLvRHyjR3vCzhw3TG7ic3bwSji9G9Kvnf7sxY4viACSBcHz7d9",
  "key16": "5gm2LdDZupT5ANQU65LB6HWCpxbtqAoVgcpkPXS6TBGEUbZKbJr5MUX6pSZpsrCK997d6DvZbJE7WKJdwiKyKZam",
  "key17": "pDPnrWtJAWrLEf2qgapAySVb1o4EHRbchQ3BUk4JNVCFVUxgPSMJrnfw3HHS9stfBQc4bt8ni42KAcSAkL5hhFv",
  "key18": "4aM4NntJoFVb4CtXKaxkdL7VvRe1uD6E7Gq5xMKrfioVt89JyFUXzXZbwGvGTbzAgG3gU1jdgpdNJigrE2b8jfxV",
  "key19": "zew6AW8PVBVx1ryvS1Mdb2Ukv9GtNxoJFYgCg5uEAzzNUg5xZD6K3UiYWFcmp1oftSj2riicw35Tozd4tT8F9j6",
  "key20": "6743CZ3tQn8EawfUUHXEFMbNqnmsTNAKdiaewRSeFWN6dtHnioWRvy8vLtGVFNdTzKyefxGvTaJsAecumFyCRuLq",
  "key21": "2FmTbnKXvQ85TpDbvfnW9foSJ3U3cDhXWJRdB6MrAuPpNYTxbhDWJy4b6F38zbpLdzjRz6oRECrVZF3aNzQPq8So",
  "key22": "5wq4FKNKrqsTgkz9cvEbEtFEJJ1YECG4oogW5PCKv754t85vnBLQR9VuxSoRRuguCt5CLLEWjLR5GdeZhmwKhXz1",
  "key23": "5nH9XrcJqq1T1nKp8Wk5KxjbDwDFoAKwvuG5J9GZr5Cm3TTm89Jm3rYbdHiBwtRkERW3SkJuw4Ga5GU6UoraH9LX",
  "key24": "F8zrw9zwAEs4rCtEqnyut92Du9ut1dtHUfLpTX5UNpZ8phTaJrfgETC39enrskjpwQZmwSKLL6iWhgJqg3VyFqJ",
  "key25": "3MUs8jivdnqWD2jxvERdhWj5NbKeY1jC7PgHyT44tLkw4rmaisJvyYPyH88pPXSxbBvdVbDEsDoWUfa21quM5CPw",
  "key26": "4bhNWZC5b5vH9qWBpm4KUqsDGtfz9MxhJfvsyFFA1AyeS3GqAk8nWRydC92wjTgP4kS8Tba4qeErXqWpcdrnE6TD",
  "key27": "4u9hs9GHK1uJLrdV2Wt6185DdXu4MBoUhnLZhpCEFLrJaU4JLwFNHskwU6WtwgYX86EggTjA55WBCysFBBHYJ9TR",
  "key28": "2RqYCirUMZCEjYx7RvgQnRcdpSwxhNrSFMHUu368CUzXKgFxmqwBZymTQ6dvtiAgjMvEWMaMjNhigfYFq3ZvZvW6",
  "key29": "3qzdY7fwmSKciHkDY88xbtQqcMBh7irArEwe7dtfaU1AfRLL57a56hzPGsPBQYHBVHj3US3gwTPdfET1mZ4X71so",
  "key30": "5HeJb7NBYckknqxz7wwoL2oontk8Bfcb3giuBcrUVNDUYeRT2Ji7ydg6mAWzsSTpH8JokRX4NTVHsW8K3JdB9pjY",
  "key31": "3Y3zpmvb49YFhddX29cqVhk6FBDGTxky6WU6F9LjTvrCcAik7kme8DrBWJyWR7VU8PzXduzizMNszV8brTtetTAn"
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
