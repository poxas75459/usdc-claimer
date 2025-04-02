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
    "5XGRVipfMwTkkSUYuKCSHxfUmpoEKEognUFfK8jZB8caZrspASA53zoCMqHtcarpixcgaGxmrCoJY9CGa5mytcNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A6AjaKpsQsbNZy7am7nGKFcYAkvAQve4sVBhyXbhnKGoS8SAwxfEEmGD2T1kQkYPT8WkhG39becRmtPCzoJhVbh",
  "key1": "5h27oQtWAUmGMwKukkYgmYeHiJ9DkhC8EDFj9mESncCtpbCXRAwar9LDCgb1JfzJo4JgcKVNh572KSisktHHVFRM",
  "key2": "659tjxRNw49B77YCdyvQrH22MugFJpAFkAvhePpnZJnJVCWNKj7ByBnRvRSxizkQHpW8jkGVNhrSsognZGYtDRAh",
  "key3": "468Ty4Cwcmu7MogBouPaH7yyQMQXCX5wc9LqfLF6YUqGLkNyU5zCTsitkZSQGHg3s8xoY65GHpfhMHrHspRQtoi9",
  "key4": "56kbenNKqRanRWW5MnWnMqRNdiBjmiBU1VWtmjhDnyPyQvpR7q9yBKVTCyg2tmTF1MxqsEEJu7avvmWdsLbJcZ68",
  "key5": "378egsvgVhgcvGKRmLXiPJiQQXB32tGnSKaUrYXAHWEcTAerpDV5VUtUb5Q3fmUHQodXBkMZU47BFiLtDwgP1kxG",
  "key6": "4oqLLmNeegewJJXYvYVBzZUUKX9Mb988XeXLuhdM5bs6ANiwpUh7JoNZeNqKN4he1fAS2zfPSUmd6FiieGm1zWH8",
  "key7": "4jMp8uynuuoHQdLkfGCvgj1E1jgCxYQFvg6DXN8GJifKjkdT5uRAFs717Ez47hsxzsneHFc5Vw3v8YWaFAVH5wD4",
  "key8": "yBoDvBnBXdsqfqW9xtYZAdyxbMPf8GmzTZ8riPUZ5TwwRgpUxon7mEPQrJopm2WPAUvWqKDxWxvocrWB3wcjKg4",
  "key9": "4Kgao9BYD7RsW3nHEH6Dw7PH7dGRp27KqW7tdwgZixmgWaC6JF95NaXiMkqnjR4RksHwDmkRBP2q4CmcsF6EoLB2",
  "key10": "5cWX7xxS87bdchN5JjdTwhLzsXtRjKVrSvvWH1uq4s5TpQNNVY9DKJfPxLphcT5Dkxagf67A9JZhsCbmz7RyP7G3",
  "key11": "3MSJzymuqvxBZ625kgT1fBJHJUWEKmqcrF13WufAeGKoEB8ivW6gp76tQnSnEoncDm9Nc6jL6jUubanTqjEVZB8D",
  "key12": "5cahy4moR5UwP9Wb44iMZMSubTH6zGYc1AuxKrEogsqgcLdLzSmEXhFrj1fdCqFSN3sr5XcpobU7pnSuwZtRxhSC",
  "key13": "2P1TC3rnQesbafhgu7WQDLJxYtSwny4W3mYvMx95N8CGiiJ1RP3pX5QcNfX3PdtGUmeKeX3Lmt6x4ZXRBDLGkot2",
  "key14": "5B4AGMoFz3LjGeHAoxfPUwEBYABC169vk2vRQiHvRBgwKtJDYsxpH5bPFT1WAWXbw97Rc4iqYsDfZw4EwjxRpREz",
  "key15": "5rovnRddmSRcqADHp5vfmP2baMW25ttsfmdMJcQG2DaDs6urDxiXbVuAaVeVL5L6J86oYmHhwRMjdJgxMjpGVgy6",
  "key16": "5kgytTUkEQDrQdEqUh2orf3c339ZvHoXjQidQFt8HtQ3PZDPkFoEaCjLP2Gz5W5wmgSWBoAY6HHibVqgNV6fX8VE",
  "key17": "kk3YAkG5wdTGfesjhiYVkpEBgJyjWcyMiQqseYGRmodzkbt1whTYBRF6b7Wf2pM9z1nybomf6vBMsbGjofrTAqM",
  "key18": "GpaFziegmsh3s814L3UYv5iZuYmP5xkgi61C1wUQaM5ymgYmjZ8ZZS5VW73haQcdFEw3QBWZr1spkpvJVDGi58A",
  "key19": "3a2WrqZp5ApKm9FRkngmnweP7KTHn7BdBgL22vshrb6GL9mGXbJxoLdV7WfhZc6YNuvGpawysXXgHWVMzaQANfAt",
  "key20": "3E2wkxpWY3vbgDH6JT6MCAfQJwNLFSFU22cLtSzichMjTNcxiSnh7s8t7imxePicT6Prm8EKJXvw7No4JBUN9Koi",
  "key21": "5BC6rV1CxHC74mnbwD4uHmLKmZ6TP9C1vYip1GExWzt65t4wGUnFmkiVcroLW34KAvTaZGxt5MpCGQfSwJ8oZepN",
  "key22": "48gfZ9KWZNLEcdbxBmAXo5JMSCqB2tpATWiu1xTS23SYQHE9fFfA6qBKsvhYpc46aL7nd5F8k4uy8ZmsLnj7ywtt",
  "key23": "2MoUmc3boXbS2SqLVtZfrwgRrGfTB2krgfcZow4KPRgGLsjjBBWCDeF7SMyaenZN2XvxGfSFph6w7RdGgioyhn6p",
  "key24": "5wD99WmyNmXSavQjpwiwKWEYzSeATnpmRjFWBSXNyBAtJZGpGyPfphymVCyQKcKvottdqpC6ukqjePi9NMC8s1Ab",
  "key25": "8wygyk1xxhrgLebTZSCC9446GbgX6fACaR9NdxHUojT5NQfK48DfzHwQaHb5V2X7e9oqU13JV1jdp113R6JHT7o",
  "key26": "5Chc35MKz2LrjzLEVdgejLNPSpu1dv8awqoqDpN6TxYXrD2ga1avu76n8PzWD3HxtgSCsU7hGboNGnZEq7i9BYpU",
  "key27": "2QyeCJMJxed9hr6KqYKvVv6H3b93MJLMmo9XecyVgm5a6nSFfcCuKrZdY8LSHg8PFFiXALE1x4N88LJAmxHRqAAF",
  "key28": "5Z7bdF7pvpE3WYMCDKYGRVDzVV6RXDtbRYgCaWT63rqRGJFj96csmxod6cujYqSizCDMKjw9wWYrREABEnPdRKYW",
  "key29": "2iA7HbQFmSNAfsMtgyy1PhWTVXmS5SJCQp45XTFJsKZr9pJ7HJvCBKyog6CT3AmAAjwgAPq5Y6gvYsnbVRP5Wjyo",
  "key30": "3BE9RcwM5ejFZbEAsiAqKGEPmNVv51HrqTvcBSm41767iUmYpAJpWQdABGRjdEV7LVW9m5EKFkVuR8Nbr54UPEiy",
  "key31": "5QznoY5EkQoED5hsfFNh3Y2Kx7LBfj3uq9SonyV4mk4LLNZ7gK3HFyitGent6tDK9TMVyCY5jZgtEoJbQ1pjJokr",
  "key32": "5WTX6GhVwzA5Quo25p5y4QasvKuPdBuggn81EVHQ1Xmopxbph44dbecGuHNfZTsiGnauzSfYG3oYXcer6RYG1G98",
  "key33": "55tHW3Y9VPZ3CCQQrMz4kLJDzxnRmfvmMERcUjPsYh9mzmWerioWWcQuF4Wtzgqo3SQTfr8VFKocjFtDXeVpNB1G",
  "key34": "2RCSduwMa9zQJch6bphxaDTe4LvG4PS3CSGEafSjvUEdz7Nn2ba9SnZPFQJ53iKUe7HPSmPNGGFozJXH8wtwHn1C",
  "key35": "5QmC3DDsjfhjTmUWvqqEHwnqgW7p5XmyhDDNyPMv7MpaDCnCweVVAnqYXVcLYwfxKVtfPyxKHeLfKHSKWfQcRryJ"
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
