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
    "JyTtfXTzPFBqDyHzVbPQjkobk9DUxF7GaUKe62bENeKD2BKmryDWtssD8tBXNiZSr9iDHB71ZeGicvxLQm7Z2dP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JF7DsKKd9NUdxyr2yfojKccF3iSdC9MjsecMYpyiJVWew9ahdsgdB1xcbkua2Ek2CCeZBrmK4PKL4Lxzmh2jN7M",
  "key1": "4Mnw2rN4zKJFA3Wk9Gtvk9UaLPTaFKKVc1dhYWHy95M5gnUKV7xoxcagGjaQW72C4HjKeA1L5gfdMTKqApk7ihCV",
  "key2": "4mzn9ZuK8Qfj8qpDyydK3ZMNpzYAPyTNqxdBnTFefxCXZwcKHepzviBatHSdLN2XRY6AB3cx6UeycZPJZjFJUbj1",
  "key3": "FRm4YuRaXJ7pSRs9iCdPq3gnw9rHehPUPx98i5Mnwn9jRevWdU9Cmp97LkYpJZZtbpAsycPTM9GzWtN6FQGF3aw",
  "key4": "3JwNAScJhucCbYQN5ynzKpimvasuVqmEGA4mwzYmdKJYL3cEHrogrxhfp1CdwadjaBNDRigK2qbmRKFjsKCxMwmK",
  "key5": "CWX28RFn9yYFYzx3tFjmPMJjePj6ETPrnvPf3fyEve1aQfaDTHCxbuP5HCY7hubfdDzLkwtQ4qa6DVfWUhKx33d",
  "key6": "2SD2oLkq6R1JpiVkXotxi4BhxCv36kMsGsQaMqrLkZnXVWpEVBT61wH8yePE13fsovn7uKQNYqn5DebWKnxvdYd6",
  "key7": "35FnuvLwP9LxiRhRfHH6yvzKArfBvWw3i1oEhEEvi7xMW9MtgYfGynAmgc9nw1n4gqesTux9xJGiu6m4FBx9WYmn",
  "key8": "3QA1VzkhgkxrePzEvtLR643HGPAqgitVAeLVvemihAtj8NdxMqkBhfYLsxt6WPq9fSciGN5e9wMrso1k5aou85Pa",
  "key9": "3So8Z6a91uiidxRw8v7Xys12TbUNUgrUiVddTFxSqZULfRs7VdhkvSwYGDXmFi7GKpMtAJpcV1ELV1RHxgqrzWio",
  "key10": "3ijY9efGMEcj79q8SVEBDzpQAw8feeCfinn1UyGGtUyxydAL3FZxM5h85vEsHHxbPabJygXphLAXDHbrYCjiaNz8",
  "key11": "4dtZFsjgTv5YvpmEe8tsaMapG2eXbE48yFXL4BkP3Krs31MsKx7YuSocFZLbUatV6c12RwrTiGHJbDo6qv2Y2c6Z",
  "key12": "G6eZCwz2BS2hKPSR319BJ39hjhwLfqN5jKaqBr2phMkhWBv7QX6SKDm6SGKVvPR9MgQ85J52kwYc7zM367Xp8YJ",
  "key13": "2nScoYjemggUnw9YbKhZjpzG6xSteexoG25gYqew3Wp4g9SniiZd7qDh528T1AqrsukNDfPviKTFCJpxY2xyFZmY",
  "key14": "repE3FiZRAxvk7vhJPtUjs86siJagYqyNYMzgAoHWUqhjEnoSprqsHWdXDoxVE6iRzarsQGbt91XcTatGGJP1dh",
  "key15": "4g6S95vjazAhkBiWH6GXrY8KNUepwFswCzVNaFW35NTXWyptb9fyWSuNzbyStudpQmXFewvtyHmTsnYtTDiRM6v8",
  "key16": "4g5WgCWiAhm2iWENJdq5xDApvUfcYFJJhiKXpN9aAfX8p3nB7NaxizNFKsE7nV6LF2ds3udptvnRBfqxdDUEATND",
  "key17": "2sBQLXqkiqDhTAyF3z5fm9q7Fgsgxfyiq5YjHJ8Dc1ozUrGA8Han5uyhwH3WjeJHr1vHpmiixrNZrfgKH7C6LuRE",
  "key18": "FUEfqgxNNEqsgZrNyfNzzotPWFeDa2yJbN1vhg8x2CmG6VZr7ifnhndMxRe1dyiCHp5Qit2XQA7Y6YJFQvCeTqE",
  "key19": "5fg4JePUHwu3Cgxs9ojjsYFyACwkp8qov6Bxr6y5eqpXvNqW7QdWA7HzFKQVcTeYsJxKAMT7deUkCJ622g6GuNdE",
  "key20": "2d1czMv8F4jtKFU8k8W5mpDAMkBwPfPJS6oDQnnHCBzh6jH28org3RixDAxzBPYGFSNV3XmJvxfKABFsj8DnDtGS",
  "key21": "3xDhLi2arYr5VxDWjcqHpey8jDpBvac9kqdKLjFtWgqXPJxrMjitYEGg73uxUahRbYK6Jro9hZn71FDWxXXktCqq",
  "key22": "qBRLCnBCLCL3S3YKP5NparTmjfM7DoxKMMydLP3PkUsh1Y41vmQKVv74gZ3WDKrJuQrYkT2xxS1UHWLyQXoqzsN",
  "key23": "eiuWAJFkLHWm5bcXrR2Qn1HgydMHZztbPW2XRExZJEGz9Hqir9ivRbZsbkRJ4eUnfcpRAw83MaqGT4kXV4oPvKa",
  "key24": "yqhuirn8SaLXUtfqxbSA8cAxF4HNgGbkoc2j4KseZSSKwKNSAQPv1B4MoPdCXgZU1aW2ebjUuABm8X3bNnqNFej",
  "key25": "imwwjTSr8vQ4Xp8t256DZLD1YzqDXjeU1ru5WoQMFWBaVUeAGBsyaDpeGzDth3DgLKQcvd1QpnvbKDUJfwV5aK9",
  "key26": "4TKEY8svRDyU7Tv4hgYzixbvvoMs3uiSmkUGWpc5MKfoEMXUgAbjAmm4iJmsjfKA54vB2cE8Rk23AjoALbq3yxZW",
  "key27": "569tuG7K3Mrn5JYNAEKuFwSkiHofAGBwWXdPCctgLvGparJXop9nb62aoEvCBRaxxkbSdDL51SHwi7hBiffDu5LX",
  "key28": "ejPpHVEUhH4vE8HutD7JfitdJ2NdjL7CfZochMSqvJXcVnL1zKTc7ZwY3AQbEPhCpT1vUVnXKnSqSAnz4iuP3Pi",
  "key29": "5sxTnYy6gbkc7SqRN7aeBKUGqFEDDRbHGoHnnrR64CktKNJ1McdrbJ5HREApWBW24XjKHKcmLW8eEtaRFqZ27jAC",
  "key30": "4QbUZBA3twvZkf4VCNEMqnQq83hWma81ffqHqgCwQtxisMy1KGf3ixWA5FKXYrq9od2D1KJDrT8S9XZDrEsxErTV",
  "key31": "3fNaKp5Wssa2TEtdUVq9hPaRKPPpEweED7qvNyXHZTHskobcatNRKCUDT8eeB3oKpkeJqDX3XNpjEDaaVPeRRXXD",
  "key32": "5UmYmnjdiiBvjkEpuoaKT9tyxxvLsCSa5tqya6R9EyYnVev7JFWRVPxAQqYhW5QaNKD7ouyFvbpUKW7tdayNqScu",
  "key33": "2GF1etc58CBLzD3a8dBVjdQwWAcFmz8Fgjifwk11gJ3iSaFTAprYYaBnC4xc5hNCJqfnjuzVgDKNqNwDLksvdX79",
  "key34": "5cmCuJii8BmAf6KXXGvJvHLKhM9GRAa33iznkZDLCYogCnbkZLCvMApSgxhQoZoasju4jaDMqWCJ1epMmGTdAjuV",
  "key35": "3YuaRh2AbccbJkEgYigSa6cHLDT72NMN291QuUmfM9QywSm1rkkvj3LqT9Xegyyd5P3bbsAQXQY5pWJ9w2BWbQ5r",
  "key36": "3SqSGcqE8NgRpMjBEjiavsr9cpBVayGmehtiEMnwEuqTcCGtsYkLi1ejWD8PfbjXGNNXDs3DAVmjz7fUGHehD2iJ",
  "key37": "2eM1z28o8rcp1vQK8iJeanerYND35n6ARdbyE6qLJDHRjagtV7A8xvCu9mhwSpPzWo4XAGdMR5yirLEJKh2wkoKi",
  "key38": "9bYC3CqnKYM3GnDgW4x9kpd4mPPoA8vGU3A5fLMx1tDGKqcxCGdygJPKzK3KtaY7RJ9EeE2q7rBk98eZ5KNNhgi"
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
