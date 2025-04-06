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
    "4AgEE6nqjvVqxrxdGEigMa6B66P8CAU8jDzerjoTFSfhD33ciSyobap9wYT5RnbEWtNLjCDzWPhBvdwyPi8vJ9gQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47KFUC8VuzWHkTs29HphWbpR8UgnJgxKU297HopRS46svBCxc2Vq22TWoyAEH8jCsd8jA1P9t8xtc3Nj7AE1vcbs",
  "key1": "4Tr1KzFyN3nRx8jfwxvzuRTYvHhygAupUKcGs2Da6s1dDAbNCpGTTiFdAxc1rsANmorWB1Sc77HdsaQGN3DLoQKJ",
  "key2": "PZ9Bjeet2gbvC5BdXVFyyk9iTQ9XuFJBMHNcbF793pjC49n4WK6zEw6ioZeVHJnjVg2hJ1n6bUwmuy4iQ7WG2QZ",
  "key3": "58JYpAQ27apAZEjUTvmKvraiguTFnizCchgYuXjNCXAi3vGJ4SikPG9KcJUjx93oVF7dJrMy38zBR5nsjQuPVaGk",
  "key4": "3nGy1UJHRatoSwgpz74UsNnheRVnzm3ySBuat9vhgbUSsCiardM7gajppZ1dMcWokod1HepyMLtPFomEvGt5p4Ak",
  "key5": "3CtqL5u6Tjd41MoRZfKkrZhkBgCjVVVDjDdtDfxCxsiNc9bwe3fGoHbD1xKNmrNPPWMcprCbyfdyZreUi3AGLNuB",
  "key6": "416QazTPKRNh7oexFk75YP5d5QwxBavFrEDsVWQjyBfBk57ZXpjVKaf3d8hapSbrfPg7WerD6onCk7X4yi6JBMQF",
  "key7": "3NAfh8XhTSk9FfCFukzAgDfDSgv3gz3u8C5sJ3hw4pc2Gk98L3ZhGQA5Tqjq4DDXxLjMVzVdqJGfNX24QfTCtSTi",
  "key8": "1cxFfCoxdHvdM71CdkSzUrZEXpodtSSvzoKrG1eaum5Lt8FyFmRsdbJjKSHpaR1HCogjXpKAev28CiqD9FQQ1FT",
  "key9": "5UhsSvdNWcPtZsk1uSufcV5uLenEvAJugH3Jia9RhAd73GfDFNMqW3eg1YoFNoyWC3tFmvkdAk3bgJvbWi5oJefT",
  "key10": "4btAHqgSzh4vxNS4E2oeVr8CJscWqkpXDkSmaLfpURrUMewUh4LMfxp579jaJmbrAcYgTiDX8yP92jePDaPmkGGP",
  "key11": "2fCDdHg26Kkh2PPDYvjBo17onJityqcqRt1K7YP5yDcanuqkVrdWXU2YwR4aRZKhetZfPBz7qPKMmjoUiY7MKJNZ",
  "key12": "64syo7WzifDG6tWcVSiTWQdLb9cToy2ZZgKgnhUUTaJo44EaYnSwn3EW2st1xTtqrFRWdXJkd9TP4iKk6pbBTrXF",
  "key13": "5mwDAbNnMH9pxw8weDWQduEGUbywYuaUv6q7ijLRDZPBfDSjVRdDHM3hKRwP1qmvbdKhnF7ow8d9z1DGjKvNap4A",
  "key14": "3CA6fwbCdzsWV4aL87P9fXEq3xxp5NKfEBCin9qSfLAP6rqsUoiRpNcipw9L1oMisMC5JPW2Jp4MeJFtWHWTYoSo",
  "key15": "4kYbLxwFA5GR1HF6RKAjPChm9iT8jwDHWJ1oXoFt9GugcV7MRCCHHMxgcvH9DPcamA5be5tYNApwLn21fAuUaqUs",
  "key16": "5EzGTZRs5SXWVqCKpwtfmYg3nQJExvP5bJyYRjLNviC3oSPL1jtqQXJg9wQx7GXY46fmHG9MmW3HhLVWhSULdQZc",
  "key17": "3xcDo7mffRnFvvD4UF9f3MpHWUDADsQ9DDERVwv8jZq3yu1mHKJtdFHtFdchJAEF5XJHjwsMUZSDAfYj6CDzWvRo",
  "key18": "2wDHvPrifbEmziAozynCtxSxcspGAC6guupExEXPPURMmVjwao4539CqfBrw2qtV1gkRm9Q9WzssNEXBwUp4fJvE",
  "key19": "2BVEqreLyGg1J7TUghLx84XFWwaS57Vg2qpej5K1tKs4aWCQYjJQU5ZQeBqsyTQButdk7mUGMxmiCdubRbmgFqH4",
  "key20": "2yq2SwB6S7u2iQzgYHiYYPDfWZYhZXViRPdiP739wvUMvuT9VFbFqaW55Fn6XLodnaztaje4YqBDNuBy89aByXCS",
  "key21": "4FxLNsx9nw7v3B4YSqEthqNE55uhM8g4hcgXjr7v2Gu5M5TtXvFBoNZFamxFcJHpHmBbNo5edTDexDoDdMpmF5Bi",
  "key22": "8kf8ZKWbAkMCWFLJ5aeF2sFsGHjwmx3kX3khUT4svR8tYyeTKNNAKnf4h5u8ZHsWJqmFCzKVHB2xyoR264ZQfHj",
  "key23": "4fM7FqAvLeSyvmYHK7SP8bQa6qcFaDVbKapYFfRRQr7BgR2nu9EFoNVUcJouqYA4WvBybnkvjAe9rAmoJNPZN2BV",
  "key24": "2KXk98aAtHMAssm6cnWWm5rvYBRsf3eNmzG3rLEUfbeFzwbLqmLHoRebc4ytesCUUxhCseqTfcfiEF7wcXpJVvBG",
  "key25": "5uNviNzTCjTX2QzL2jreZ1qXh6HqELv4aRtJjwu37B2eVmbkD9JxvjuvYVZNZ33cJxYohyQnxLkKxVE8gqvTaBoH",
  "key26": "46XSa3mzFGA8hLBC83KKmvfXyHkUEKs8voCTzFeu1N96RSZ9WJ8N8xDcKuaWmS8HSnEjfh2s2fJRBBu6d5m5cUXJ",
  "key27": "4tCpEEgc3itty5urapWDGdmp3dm7SiJRZJz8w8zvXnXSb7jap6kD8aRh7VKeC8NWt3TEUP7cJCeWeFQb6C432pW5",
  "key28": "66sKhD8qs5TSjjiAPjuuZ5YxZW4y8UY83Ye3pxkDamegaQm1A5i3K75sW6xuijzLBDBD14RZr5bR2t6q2Ubp3mjN",
  "key29": "4A9CX4iT42x2gU9HeFb61RJux34UH6MekSPYBtHCv1jnQ7t7UjsuFAhzUiQXmP43KPgNxb3it1jip3QyersfNgqD",
  "key30": "5xMY8uu3SQPp442LG1bmWh5jeK8ZVPbAoh7CQEStXrK9duDEu1fP53Q6iMQFc3sGtfugnSTvw3uPd3KyiFkD4rAf",
  "key31": "3yRw1dCRVr6GnfNzp445T4vnWQR5rM6mckBPsgbppf6h21BZBt8WDnt9tSnZD67sEvVU5dpZnFP22KXNDQq5ZZk8",
  "key32": "482uqxFM84DwfouW6sJVdXidgWtmxXNZBgTdDjBGfFzGc6n2QSYbmqVmgLnFFw2aoQ7o8QSB4DTsymie2Ro9r7N5",
  "key33": "2wZ8BvDBso6kpSgapjo2ezbPexcSpYn9p36sES97oE4PgRRuHiG26wQBTaciBSQbNTPWXgV9VMm5gN8meoeehGLY",
  "key34": "48sV1gNYv1EokQauK82RgVZWNSVhQDAQ1KCn3bmQB3auCdW2pxDXCYbRE3sJuoHsZSZq5RMb9qJRdL3XoYFfKv2B",
  "key35": "2u2ZZokybroQd3Vake49EyhdY6ShabyMpVWoXD8SaNNfa2zJDEvLh9vthqWJTK4AsKsJkD552QKutcHH5QicKcLs",
  "key36": "4W6koJD6Z5s7uZqi8oYXN4CDcEKNS2zRqL13AviDUd35SyBvtTArt5xzisRE9UrmBXn42cu7FWE3TFMvnkHdjfxW",
  "key37": "2B4rGDQerornMFLWWAd5TxQSedPnFnoVbFsTehQeiNWxNq5fxY8rC19ou8hdUGXgZnp1UN6SrZfTU58cWrKTn2Zq",
  "key38": "62M46w2Vn15LPCBoBWgjn2SehJSh4g5uhRry2JJ7LzSZhimJgcRGc5q6vhotEKdH6PUNqw4mWpo9pBfwDT7uejBF",
  "key39": "2j4v7kpNiM6CEKmDt2dBG2bBWwgvZ8fjBgaEQsyUmzqUjaRRjHxSaRs1gc2VhdBXDiHByvDTVsDpqnj3FPYUnP7V",
  "key40": "3VNnRVE3DqkVcpTmEdMuea7eziYVBqxsAi9tHqCZ5gvvkjEyAYet69jKuTJEiMRr8PibMCktmXccaiR7j9e46778",
  "key41": "5GQ7NvLhR3A42NBde83A4Bz7S2GXkpkBdvdv4oez5D234jcyuSwHxv9TWoT485G6nUtg96gWi3M3QPDfEaAbvbxo",
  "key42": "4hbdEQKaRz1MRQZf2WThkGv7ULvu6XbTXmYsTpmmHCbo5qsTDcR8kK2SMGdgv4jjcGrLpddwb5rsYyqNFmiGKxzS",
  "key43": "5fKzMVE54wgHHmYVWDvmybxTQYQTvPuX2aQ71qq2GcgNqyb5pgmrMHnD4wwjYdaWARLqHhcQiZFTosaW92DGktpy"
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
