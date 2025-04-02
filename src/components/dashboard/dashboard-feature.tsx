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
    "2cujYmxy7cjKFRBU3QBcZ3aZNPng4ZwgCs8v9Ycugn6FfMaoAgQhfHsrjF7JTeANhyfuU4SzpRiNzKn7a6N6poB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51EP3isrpdpnRZ49916atuKRZg2AxdGVbk1ifNSLbb1TB3vrBcobSo9xbPc6sNR9ne82GYNXSpWR92EDTd4Enf6S",
  "key1": "2zSzkTGJiz3JwaVz4JscLVbK16AZsHzLBaaKipp9rpTrydQjVetDmJxjBEkx7f2UChEr5oLbGpssc2JToFn3PX9N",
  "key2": "f8paA47GMMdvYccQnQLgbkF7geMhKFpodV9uYB8BzNrUvkunZWebp3jszVAgmUyKuDeRaaP3PXuuKpVqvz2Fpdt",
  "key3": "2DcnxBRtRosUAFBtXujAkgVxVbPpgh4q8HrGooi1RFkinNhemuGpuPUh1gsnBirGiKATsNGqdNjHdrEAZn5cdeme",
  "key4": "4c3yCstmASZ6ibLTk9jx7AXpnz9td321A7NVJrkc8wQszZKULR1rCWa6Skzpg1iY9tuhbk2X1JPWJyZseozXGd5Y",
  "key5": "4pvqsJLueyPgMqVAvtx9DdbetwwxsA8KWh2YL6VYjJVYgHYW4d5iTY8xymv1Qs4NTYzgUQuEyM8ayyVkNq2d5sRG",
  "key6": "CK3UQJUMh7ZbWXYcg1TgdGuFasukgSoBSsBSMTa7URPYgRNE4W4RTxfNXvYLV1ZbiPHYsJRpTjpHhvbZ6AJkK34",
  "key7": "56whzwNgfbc2ZTjnqFLk8YsNbszAStrrgLQdHfahVQHsZZbqdM5jGr9GepxWraEkThYqfKpEkhcGzVrx4P8atPWQ",
  "key8": "DVLyidmi4HYBjYgHrQKUbzHKkitx4j6N1KPJFKVr29A6umnG7ya55dfcoC6N51TH4ZpAFV12GRKbiiuWqPgwQYD",
  "key9": "2ygztqQqHnAhQZMtrn8c5NbVhD7AMjCe9QxLZxhRpt1i2Rsphu5JgrQHxkzrDDBsjWrWPcr19UNE7xGUpMLHDQA2",
  "key10": "3pcST5Whg7YBB9qyJngaDnhB5ZQzYYvm762zqsC3rgd3JE3EvcdofNp4S7oobA9XjyFDnDmeAsh3RzVvsPam2Fac",
  "key11": "64dePjt3pwY78LjAqZRxSeyZPWvM4xVS1hoeAu7woXWBe9dxxrsfpbL7eL9WnvQ5aE2uZe25kDqmHJm47iqoUiz2",
  "key12": "232caxU1rsGwjM4vhBiSGoMYk4fxNQ89kz2dYWvtvnZoSDnePrc7xh4GM15dR7Z6MU7vQXKNcjstjBA1McvrmiKN",
  "key13": "2St6NmwZgphNHHsoK9hAGcC26DSjAVtWvK2C2dMXj8PJCeZoxJcbt9uasxa27hjap9RdVKEqor4PpSXkq4SyE3V",
  "key14": "4RwLKbwR6vQWJrVrgyALEYFnfQQZq7jZi4Noou4wAjsRPmjH4VUwk9ZhSq8V5deCbsFnevDkS8nwpTiNMTafV4ZF",
  "key15": "kcNSFARiFuLPUjFPjrEoKRqDYFSPjyfA3YRNB9vVnNsRH9KhaXeBys9D1BgEV2gzuEMKFh1Uf5TJPaWoQc7z3GS",
  "key16": "4jg3caGAJNizGNY5cxpF4JkrUfzNvxdvV7271vRBWZnweKzZvUamdcAYBGye7NumTEJFdJ1tWZhnDb8ZsDzFjph2",
  "key17": "4Fbo6LN6rZV2DBAq9QtgctmWLQ2o1F5KpxHyRAuNod99ddiWPtE7BV7nnyvauSLrPJCHWYbQU4vSsFPJt8uKH76r",
  "key18": "3nq13gc7ys6B5cmhAbdpnUWacfwK1TDzxwwJUDo1fz4VgRpgeHZpq97NCFEZTdiNQVPLErvYLGy1AnE2KcZx77Qv",
  "key19": "5TEzSfzaftXFjHoPrC8V92owC2YCoQv6xWwy6v78g2uj2y7HGUosmW9RyGGVrXaGZ2QxiqXt7qpiwNgZmxDQJTUs",
  "key20": "qMWWr7Bj3WNWMq2wHPxjvKbkimSyLkbR5vpHtFPdzRfTSuRQrNh78ra1NzFBvp6uGxPrH5C6GbNz9kiPGaVGBQP",
  "key21": "4Ni5zZS79B6DDCm9HdGvyJ1jhrBzbo7Rp57hPaeMAQqqqxAmHHLG5972iBNJmkc7J5Q15Rt4usKod3SqiAUeubke",
  "key22": "8vEz5QuxNLouDzdJCQ3L6r1SJhqWVYa3BxobLiG2TaVkT9nSz9sFdxrJ4uShcsadgww5KHVY1ByJyCd3gscmE3Z",
  "key23": "31exUVAmSqa9zBzEXPiFgZXPmTnTZ5KAmFQyMf9eD7tawLYz8J2rCBj7qSsekWzi8gzWZaCz9DTaY7nTSNRXTHqS",
  "key24": "2VaaJRzJsfzARaNnQkWqCnCbkM7PGPo4BZPJ18oNvjAFU8P5DK9jpbeXKg7yBsyHrSgGRtYqizs5hg7NuSwigkAU",
  "key25": "3bd81ppnJt8m7mViUcHAV3jgF3EEroxmqXUrJ2gGFv1td21B1oHhNSCurwCp6uKrW2DGqXvaW6c8ueJFSxNkkQ4P",
  "key26": "3FaMC925M8Nxc2dbtmycxfSR9UDjESdK843JM2XaDNpVSjugQqYcJzWNryDP38NEKCc54e1vW3ToAFsZkLmeorFM",
  "key27": "4hQEWZ3BBWY8emGX8eFubxWCFDLVqxkT3P235ZomJHEboJ3oWyVm4FUGKroZypgwbLaPZmjc1VuvMMKSqNvWi4nE",
  "key28": "4Q4zqCoVQatyPvmMdiMt4sR3rUdUXwLu3hkqkakNgvQb7cUDZQ2ppM1YPcNHiW1C9i5ekEq46vFbQS16GG667BQX",
  "key29": "3xbBQNrzJTY9uJmo2z7e91acv7grrftgn14aabr2o1eFBZViLZo31PGbe3sRSWD7LBXniMdJCMMtZZ7HkToPptdh",
  "key30": "pGUFQPcwADDVqwb1wVLCXb6b8vqBuriz9FXn6KCpH8jXp2x4JN5bREFE3MD53BzHF6pUTztbWpdGn8SSp39Cpeu",
  "key31": "2nhmpF7HWxN9PLsLP85dJaugc6MkPCnDnexe4UCZB3ExUPoQPXMUpEKhEx7rew6GAo2fgweWHEVaADCJ8gvNg7nh",
  "key32": "2THEB7twz9gxYpdN9Vhp4Kfra1YT78vY1VyGaq8acuGr1An2twJhesrVNaWBCW73KxX1rB7VoitZmRLouBuYx5Av"
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
