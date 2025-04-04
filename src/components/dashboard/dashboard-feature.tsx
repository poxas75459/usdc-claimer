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
    "5LVnbrvQJZE81FsXUAEyyaX2FkHQ4DjT4YZuThKUr9MbH36VTrJHM5JxRiX2x7s2qwqCDNdsTuqee1trhyZcdzNX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FkXPdTzBDbX4W7bZEGHMh4HE7wx9YixsEnc3KFZsr5YMjysmGKjkXkqdhbZBjGoQAVYPSxjSANrUn8nxF2qUARX",
  "key1": "5TQQxJxyCgD6pYxVhaped5FEChN8XFxtrcR48gmEGguXa4qRDQB76XXJFC5PmHPiB9H4Gm7vHNy7t5X1mr8Zb5GG",
  "key2": "u48AAQAaTawZwJ7SkPRJcHpE3tSrSFeRFxfw8AVT2NetKxomUdu4NMJuX8gtaKjT15MfRtw2hy5TkRgh7M7qVEw",
  "key3": "2Zg6rM7EWNsv6Sooimgr7vYUUTKBHYoEkNjg2oyxNd7TCVTLD95p5FHmG82pgqZ6BLa5gw1tjdydPvfcxehgjUaE",
  "key4": "22gjkB81x8xiobeWKM1uKwRE4NfR5n8bCueVde2DnRxXbDBHg6fsFTVNLHrghg6c9q8koeGtQF9qHuWd1xrbgPpx",
  "key5": "2KCMLyjSpfe7K9witqR26nyTXxPzGrg4dYB4zASPhQEGYjjAvtRbSEXDmbYxQuWwaUtKet3kvPt2jYaNszRVwyDR",
  "key6": "qEGQxvzgqRJTZdj4Za5rqfsvRcP2Tn5g9qFaEkbgwXFkxTGQ9QQmPEmijHYEz9iEmUcYfVCcUauMx8imrqmWdpz",
  "key7": "2XMgz2QWGAnb7FwNFMfp3hfLKKL3v9bpJdbCTXj64VyLkK3aqXMJzXSDWQL9wFdnWFyUj4W4JhvUETS1A4q1enNJ",
  "key8": "33j3Z5bj8RdGdQYM8bcMrMgJdYEkpUwKbiG5sjDafBWzWjw2ejzaawjEHA13hWw3k2P45uRk3eRqdTeZbPsybJAq",
  "key9": "5tUir6fE4a7FheZmhnkBpqzEH4MYWZCnrqnM1nkLYmWtgNGKsV8Qp5EehCGXLHYzEQPgJLe9cQQmKiRuBBLHEaEo",
  "key10": "4MpZsWJiemG86PwqdXbPsbYt1ZY37kLU2jsuWXDCVJMsJr9Bgtp6QnZFAVXJR76aWEN1rmK4nohjyvxVvHXbCSks",
  "key11": "646fdHJFD6GMmQ2BX3x7Tj3Rt2R3B6ETAxiEWVUc4SZaoi1Ta252ardogmjSpkqhDtCn2dRKhFQZLHG5Pg6VqprB",
  "key12": "4yadr5UY4fkpy2twcmyVnrx5dmDhvDyNcZyu6mzNcx1N8AHAx1kXX8MwgoGuHEg1PntuUZnf3Vm1HasDXRUEm36W",
  "key13": "2xc68THtuncCSTKMtosezTQMUz6qBAcUgPw37AzeEYEwC9FSUJz4PJeMqyFjfDM16E7ozwp5bMzqCtmFCArTir3y",
  "key14": "5mxh7xy9j5Yab2oHGWyu9Yry18tV45zbfifhWvhif4AC9GcWyrkYXXYDsutpwFVZReXMxvqwSSLW1L36cNt3VHhm",
  "key15": "4aLvBPCg9KxUTKgGdzRbEXpfCVPPhJ41tWzTT5GPyDebEo7TkAvwAANLbX7GGCSoirBSuZYWpC3WJEVZ63EyGrTh",
  "key16": "27inTsjjg7i8N4SDX93VTny4MJLq7wnDaZVsK6LdKvaDbB3stKhCe92aoj2WgQ2CK3DH5YoR5mMWH6kFdmrZezNL",
  "key17": "66fTJHfqPh9UUdjtwgehpoVSwJuzHcMTRFsuMFmEMYDsuN6syCTkyK4Dd2iLXQVqtFN8LqdJhsPpdq6DL9R4XD2g",
  "key18": "4zqjFUnhK1orjbYuWVQHMrpaR7PU3jU8xx67XvVfPp84JMGd2Dyv9uZADkLssrHrJVyExd8f9GKKBecZGhdk1aYY",
  "key19": "65zFYRL1QLR7RpNtR36tqdxv8GUtNNauuLciRREwXTfgsAtHLvkSw7KafPfDBQjp3U4uYRuL7LBfmoH17qzaafeh",
  "key20": "5VC4DKVTtppFAkFG1FV2cxiEpoqdtfCQMEjdKiXehSXvpyVs66kLeBWBhmx8tvd2oYSF87D53uCXGEpiyNC7g2fZ",
  "key21": "5oQhu386puRkycTdcpTbAhJkRcEP4KyfSRfquB4tfgQ8QisXgXthkBVs9oNVgehK55Vb3k4DUXnLqkBDGUTGW4Cj",
  "key22": "3P3k7tHDpervFUEKX8CSYjzKTJ7JH62Zvb9Rizrmw9jM3b4bfV8EeCMbqhdDqWjQTUJgv5jLkQdVB832kC83okmp",
  "key23": "3gt9KbrAqvsGqKaw5oYHKa7SsuzVUvucdhsHjaBQXiPfakH8MP6cE7bcS6RrKsA9PUSWCAgkQb61Uxm2FTJN9pAH",
  "key24": "oWKjKEgXTDW64LCS75CDrp29v1EVR88ATVSSJzi9vaMmJZwM3Qc8EoQzNT9oJY1XM8LuPSRrmhKX6DaYUW2SswH",
  "key25": "3h2wNY2UM1BYEmgEU61LXLcga8432Tz9xMrc3wmvJQzaK1gM2pfLtKDnvzMPoF829CxYK1wRM4gHWrzPzuVwtTbL",
  "key26": "57dPcqWbRseaFnxNkqxW2GZghNqhMnt4pGPTQhvYNwAyXG66WCyPFrWXKCKjQi9ETuAiGf64pEFor5hJ7Qpcj68v",
  "key27": "2x7eYpMrXmBSXQLKY5HULYq5Gmp2AuBYkS3ji9uEwxZZAkxGKvfUyKSYQFmzyY1neFFVrSG6PhPjhVAHqmTXPhv4",
  "key28": "2GwLkg6Qmhm9h2Afss3KbJRRrEf6BSyJexnnhtew7YswvuBBCsz8azTDZiofwifpGX39AAeANKoWjBb5Q2KuYqzw"
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
