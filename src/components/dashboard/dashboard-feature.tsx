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
    "4fsKrs1LZqvX9JmN9YcztSVrJ6prBV2Y5QZWtEwpPv8LMk7oYPfgWgoGBtm1gffinC7eTopkEQjvUuRJx45CwJ7V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xRRPXAwiMpKQG59x8BaQdR33bhbkGWPmc8AaZZBsHNfMJYVTT7BcCSPb6GofR1ZQfNXxphhdnoBwz8WkUsYBfDh",
  "key1": "uvL1HqEugv5BeHn7oscLLdBqPuxmmripEuymrEX8MWTWYjoaG3NQQXkWvih3sVLMvVv258Xgze8JWGpbJXtqwSY",
  "key2": "61uChgk6M7gfJ4YJVkFa9SnRz9XCyPXLviMMN9zdYo9fdcDiPG6J8YoBVugU8mbRHUbWMnNqdrFmxMH8MRYAixpW",
  "key3": "4aF32bKR57HpPnxYk6BrPw3BBgPh6megrUqkBR8gAcgitHoHPp6ddGzCnyim12e1T5B3u6Zk3Z75BfcoTj8EeAiV",
  "key4": "26dCaQCA1Aaptw4xMydc9pqHtMyZfEUWqaG9zYakvpypdzvsNEjRWQ8fbDZGx2utMbh64cu7QPXnFJmn4Lbg9uNf",
  "key5": "NqinJPCyaqi3fqYFBubdw2dry4ZrsqbFnuykogZqZHpvoLb4NuJLFxzcWU5WNeW2pMfTc347h5RUmrDaaypEuJZ",
  "key6": "3VuGQuaEXyhbY1mXX7mJtSzCbG6S4P1A7y7MVeSnpRoAHYsVJry1k9mmr2sDxqunk5h8LYH2SXqaErJ4v1mNhgzz",
  "key7": "3ekC1DuR1pcnpwnS9ZaPqxDJysbiMdw3NsopmPjb6aPmvQtPWxawx5KMV44nj8Ltg9BgQ4y9sL58CnXpyphC9zgo",
  "key8": "xyrMhSEqU6ZbQKq6pMEtqwoPr4PiuXi1fE2ni35maSfBH9ddKREEbRirrQVweu7phK344V5jfwoofPTA5psuk4f",
  "key9": "XpAotJKhHhEbvD38R5H9YfJtzJKp6afY9mpKVii7r6XW672EMEMWTv9P36gP8kCEKatxgXzEuaRsHbPnNyG3vhK",
  "key10": "2VeQFkzbuvobaHJ5kAfvtf1pm8ohZSik8FYptnmzf2uL2enFVoG1yP7zxCbrq8onsELmg5t8eAXGLRy1jjoQzT5U",
  "key11": "5mpUBmuZe68QKi73nru3mbCnbzSq5RyH46RfoQ6U3P6ag55qujNwMQ5P3446UeMLXTRQb2gHjdV2e1D4rQ4ZG4zw",
  "key12": "q9zvxkpamgEATGtv1ZB9NZQJk2RyxGBSqGoNmdpytciDTiCkudaN4rS1gNv6YqEWhTpf2bdBHchXTCtcp7jza1y",
  "key13": "47VZNiQuW9E2NbTCaTareSjrMYusG6MWNcHNk5A4SGPzKLX2YoYnX2yM8ddtDXFEWkq2K66e8cqXEa6KzMfih7Wt",
  "key14": "39UHDDyc2jRQDemi7QagFYfHzSpWrWjTBLY1oxRfdcvG9w5zrturauDsD8igYj6Dwz79ujvTAdz337x35aBADJ2T",
  "key15": "2vntMRmmybc7r7ydEkUc2UjMqZFre2D2LixuZvHpHbCWdpbDKicpSjh3kj3qveqjeB6bKLP7gXvqCsjQoDP2WqQ6",
  "key16": "ysmSi8bkK6d9wbgE3RcjoGPyXjK96ZB7VYSsf3U21g6UEwjDJ3JqEA4UrLPXH6HfAxBvKdFnHqZzJXGu6d4B9bz",
  "key17": "3Um6iNdLDHH6wgNgaVkhRG1tbiNa7VLmQbenJGeG6ktxnzZmWCYXamR7Q1FBd3wLrPjTB1UiYAYKrwWCVGf5K6Uo",
  "key18": "242CodfsNJToec5zguJX8238RJj9FgMFQQQwwRJreV6VEWb5eXrYN6cr47rX4DeuX1zn7C8WT2rNfhEn2NfEWPQw",
  "key19": "3LwNYZKF5x7wBGnLWhvpw88QL7zZRsVswXsjrhdNaqKAFZsHCChLsiEP4E4xNrsMNkaJokAeTXZtE63pVq4c8hfr",
  "key20": "q6sPdPfgRG7LhdsBMEVMMv5LT5P4gUi3toHWgjUsYAmFyc5F82SSEKUuifmsDYo2xPFgFscdgkW3stC8abkWnrf",
  "key21": "5y3zaUAqdhS7qFSadV9jua8mhDfiwEyAsjF9vDv9dihzgt1ir9HHRwYFiwSYRodKN5jBEKHMZPcuKeNouhCjXdT2",
  "key22": "36eTYex5LbUjnSUHttypNF1Luokkbc11HNa4uHfPoPb29UGGmB1P3bEB68uDFVDXXyPipHLcpXf1uFR9YCrJ1euN",
  "key23": "2SjczarAE3VSxa65W2B1oURuDZNrMAD5en2y9DbiJc8FUDvr1EDDu77ytS5nvgcxiUCYGhoTnXSTxMg7EY6v3ij6",
  "key24": "5Hq7G1oTWt71geYQ5igjA9sfiGtStv7BNkUZ3khEppEgpYGGRUFMX1RcmA6wTacZ5yRuAXQBBzYLvST1BAEpuTFi",
  "key25": "3EzxYDUn46TyjhPqsvvBzeUKN1eUfRz3CDwRsDqrGqw71art6mnP9y2JVZs5zxfGag2wH5aoit9QPGg8bcjZETJd",
  "key26": "5ctzCps3fZmc1GEBzjpsn6Uxbx1Ko6fqiE5VtE6pDePww56sgXWpig5DfwZrorzjHs9d5TjKT8zSnfPPS5zkgRzQ",
  "key27": "4mz9rJ4aKU5HAF2Hfb7GCTAcaZ5Qgd8Ruf7hBYuKonYZFgNm9c61CVe3VdpjC77jKoFWgtNYFS48zo8KrnAqNAPB",
  "key28": "56ExCAnaDvscVyUCS2dVxLCtRHuAPqJnDYhmEHKt7Riq5i9zJ1coW2JNvAR8kpgoDcZte2Gd2WbFroBwAtEPFc8d",
  "key29": "511zyB6JyhWu8D1VtjgogYGhqLjnaskAMAc7V3Myk9D2cUUg7L52GviLmLKAPqivVg1ZSfs4sm4Q41vGbRikdco1",
  "key30": "3VH7pwqdZS6xbbpjpp6G6RB9o9avzFMSKbk92R1hRSoCBNi1N8NNHk5sREum1vC496dwseWngDDAdHHwLnsHfRg6",
  "key31": "2QKXN4LaHB7JB7BNo21FFYtM7Vi4aSHAPPdsSsQie4TS8ZhWeYwHafG8TJnNymUnU76X2Fw5xT6i8wVtMLD16gTU",
  "key32": "57EZCD8DknfTYKdv7EwvZvH5xcpYSaYNdpYTJcn8bkGpa6jhxfjVzX1PxfGdtgw5Bgq8E2owk16y1hzahTgQCm1",
  "key33": "cF77fTa4U5FJuvkR5FSi7bh8dvj7peuRCgH2ouVMRoqaJHnx42JRUeXngbNjH6A7NEuFpRfcDQF5mTSq4w8vbq3",
  "key34": "2aqRMYhQc8odNfHsNPhQR8aCBNeZCWCnqhHcwuUQEJFwJbk3jTVyN57kyR45BmL2ihurrYe9eAWEmSsaebTGFsK6"
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
