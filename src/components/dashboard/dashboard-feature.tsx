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
    "5hsNAgWuMP26XkM9U4AswSibb8ZJ8KzG6JT6sZ2ume2i19Qsv3urGT4Rg7v2EVnL6aGqUAweXdHJn3rnHuryrTXZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23tjnuHw47TVLyTUgh4TX8JqoBZBUw2HMvmwHMADEzZayDodEE4gGe9jB1jpzynsCNmAF6TSfuD7TwnAB6cAvekP",
  "key1": "2pjZrGy65QAAAbxT3RPxTiNh5FdXdq8dpaUCLpow5HM39Jnw3eJbNp45uGoMe8PGHdPRCZfPJ8LbLHwJ2kjNhBta",
  "key2": "3V9pD1Qdy9XKJ895HBMUYVyVWs8oQQRjKSm5rZeLAwWiFgsiEeQDuis2jGjToAcQtdQzQ6AQrB4u9XrpLRgEQ3hZ",
  "key3": "3nKGnsj1FpckJZz5uE5ABcDDJD3mtkBLeFRBMDLX185gocHVJJtCvpHXLSueQRJPs8cX88EpD82gdNDmgTUZHNT1",
  "key4": "U6may4QkDazm3YHxTesZMjwuwjnYxz7gPFJysKRAngTwyCkWZ99PsBq8nKvrRMZGfKE5yHR4oBFUrmRkKGb1H9W",
  "key5": "yYYcTyECbodwxXDbb3CVjN8nijThDtwZsSH66YmFvkdav1oozawQnmG3qFmsvDG979fKavANRfs5LPSE3vPFQxx",
  "key6": "3MpDTWzU6ebBME6d3qKVLGCDf1zNR5iiFZJ718eyyjQpfRx69bAtq9eiSVtpAQWWHb18SySXNE7ag75M4t9NV44A",
  "key7": "2mZ5uhDXSdL7i6BXWvnWRzdLdBmSYquMBTrRztgryorotMLmqHCpyHxyfDAXbBB8uNubjWLAnXcpZeFbm38xx4L5",
  "key8": "BpWQjCxPrq8ydc3PAJ1N1TJbctV6SWMNMkTw1dmeG3c9mK1xgbsn3ZM4araDVEC8DJxKbqJycLsNsimLatBMxCi",
  "key9": "4SEnTrrMjVhpU418mtaDTaWZDSdk6pEQZkDtvKMcsDFcj3TKWY7K4HvmdJam9XE4AcbdJTb1naBdSYJyL7G8oiwd",
  "key10": "4e3hiQchF8goQpUvrnJLPN9YbkdaQmef7HrrnFL2cMQAUacwo39TkXyKyDbPo33XYs5X9HqgfhCNdb6sAqur4oLU",
  "key11": "58EgJjGg7aT9dhpDe1rjDgB4CgjR6xPCW9yqzo1d7fjqFCJXwDzrXZkDQ1qAsnoUBZa57cpf6gDtZgqhJY49cRCr",
  "key12": "2FVE95vRtoGx5HeuAXC8mQ5qt7Xvo4in8S2omZ3mHwcSjrPSH4cqhhVKsASDSyGZHEmJnDN6hiuWk8nCxCpm6qdG",
  "key13": "5qFaYLB4hcmALCRKu4k83fEbKekv1SnUFHsQ3CXvo2zYX4dN8Q9rPKYd1VnifsUtcaDDBjc9gGVayq6AJMEAAgEQ",
  "key14": "2Bss1yxZaXw7eJeBNGbsZNqMfyaWQPZnoxmYjn9gBqdKFy31eLMKVSRKSsRKqqyp2ru4nk2sDt6MMzD9JavCoYC2",
  "key15": "5W29vVd3kWc9Qe1jyJ53kctLMNySh7z7KyLKuZ4Swr5tCQmFDRu6Usb71y46784piFSDyJe2bmCEKzCwGz2e5Nex",
  "key16": "Atk5dauKJ7jHTcvUCTtm3vrr7TaJWVzVkBA3CUQhU3eRswhEd6P9w8iMWosPuR3QWPfFj2FP57iA6ePXmTPx6GD",
  "key17": "3hg8oUTp8ujjozPJPjas7EghYkm2j65Aoa3mUZz7qDAHjHhGdVZJ7TyWMWZDyyUKS7XJt2kQefmYi7t4Q4QBiafR",
  "key18": "5CrxUDKcNj5nNVeZ5hXFSGvz15hSPo2n5kdRqHoxhGxb1yT7qMH5Ex7kCizzAAtiJWxBqo2xHxagZC9RrD4NbEEr",
  "key19": "67QoK1AY9p1Qwzo49uZ6HmbhDQGNLsh3C2r1X81XgkxHtSk3XvVkc9YAvKtmeQUrNu8X1oBC3r9XXus7zWsAkV5q",
  "key20": "3bAPwvwuqttVCZ4feGu1M1ABVurNpzh63pmrjtyVcy4YEhhhTGgD97uWJj6ztPgtBrAZoY4675HMTZaN82RZejeJ",
  "key21": "21ZWt6cr59kYFMiE3WiB3V4qwUR2wRvsVNz2m9szoorfwuRs9D1rcY7ieur9DJa3jUmx2ytZhywgcghHBb7nX4WZ",
  "key22": "1QNZ4UaNP5RxpDWJYNLUUKVNARxHHBemwaQfUMFjxLG5twukd3aoXGG2eYrqR2ymjxJ31G8RZg5RY3EB1YRWR75",
  "key23": "4stP5qTw9sGbPmBA4eStkA2NYhrELEJDLRQArB85b2NiBLHAbryGqfYetsDTyuNe5rpUGwR2QyXU1hrDxymYAvrd",
  "key24": "58DWRfLNh4h6ySyiw6s9T7eanQaQ3MmrV6DQV37W7bCHtubt6LhY5DUZAkB4LfdAcmQTTwChnxGyAt1FFQ5jPUEA",
  "key25": "4kDSGL3submsRLrbeMPS4zmJstFVdHe78k5MWpg4oR5AFE7FoPVmkocaSwt26R7NRq9KeTNKD4dAiuqLKmBHyC5r",
  "key26": "41CDZboCxyFDLE7tm1CUyNGGzb2RSLJS5N6tSes7L7xnG2ng6VgKspc6YCrobs8twx66hN3NDWpC4ZCS3k18PzY6",
  "key27": "3m3WRcfZdb29TYWXMnekHbiCZmmhryvRw29K5w7auP3v5E6sitC7uLHnfhxLQxN6Nb4v2AHFi2N6jZaeRKzr6v9K",
  "key28": "pjj3EdU5GZfqS4YzKxsaCQGnGqNGtsPecviN9UcwboUgWymZWc4VKkfCwnQMSCVdZonnWLHMxXwnrXrcdFynZ4z",
  "key29": "FKBcNKhfZ3hQYjEtbFdEf9wUJ5ihr3bpdCdC1EdCULdcY6WwcH5Wd5kQFG7jNBay92fi1Mwn1SPCtTfdJzo6zYj",
  "key30": "521v7eWrN1XKXpextSMxYd69xoNAhJeDyjxike7qKo1tHAQnwt7DjjAGGszuBdW87YibgANvk55MDsfuayMcSHce",
  "key31": "313yWeRaBxdtuxaRAUcRWbCxLYkLEkK75oLon6DjEb5irnL2XjEV9QJhP6C5axApYqgmCCPs7sNE69mXyopfecvJ",
  "key32": "2BKBJNRVageLgGAms6439z8pBkfBBNUwP1RvGU6yiGHzP1wmZjk8eeiLeK6EZLmxSf2MsHdxK72XKVaBp8JXHo52",
  "key33": "9JPnd87JrYp1sz5oRb4vrB3HJ89ktYvvV7dmE5enLbRZJKUTuY6dsC3QS9FFwcmC9UDHW1QRpxEfsDWCrEULB3m",
  "key34": "gxbk4FwmsHy1awBcp6ezEUAajiX4nKicyCYwaLF93UUKWU31r5Zjy8s6AJjkq6zK6RNrAEBSBwBJ8V6qVVgKqd7",
  "key35": "2uhjckdY3zbZr5wrZyK3jiX6XkYYHcrpsGbqweUKJs2EckXddN2p7bcvmN8yPkQ7sskyF1K6w4rDpxNAkx9vgGho",
  "key36": "2SGeqx5Hy88CEP4nLxV1WZKvh4oR1otfu13CrTGiKxRy2N1x9nQAXRAgksxbWbnjVEiXsf1XzQA5tPcDmMY18CWG",
  "key37": "3cvU7ofkcCq827XwSm1QNS6kBNFfpkpWMqq6rCKsMQhoRQk3ZjW8JKpWKJwzLoSFcnpaCfdCTtRGSmgjJpjtLQPa",
  "key38": "2fpwn2nGmn6F3peh4TDF5mFt1vvpEGX6ApQya1RndYAg9ydG9QUMtq7KaNGvNefjs48hr4JXSDSj1mrEqAdeCxdb",
  "key39": "R2spQm3KScvU8XtAd4N6pTMw1WncdDS7Jop1CSo4DsupYsRDrMiopcvRiHtTbmrsGyqRETJM9ArYqtx8FfrN6Md",
  "key40": "3WjZu8cyLFco26M6HVVdqip8tex7zrUwBanDXHaDUdfFUwBhDDUZBGzcyiKvhfTYJVCA91bTPnuLtUnmvXA6dYRR",
  "key41": "5NpgQrL5cuzZZNBn6raguLe7ZHZ1juiqMXZa8RYgAxKu5HAe9Tv71hFcqAZVtDjYSag3fDGPVXgcfjDECq7yeSo6"
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
