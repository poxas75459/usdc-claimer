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
    "4qpzTJGBYtVqBC8mHhag3zLtKuz2hRS3hAV3PY2VVb7k2cRLi6WTFmKnRmTE9Bzi3HfqhErN7kapzMK4f7geAQ42"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56XneuVWQciR7p2Gt1oM1PMP6HcvrZwiz4CqfkjSav9u7yW3peuwpxXndaET74eewMGQjSwwPv7ZuHWnaCezJGZ2",
  "key1": "3D8YndWxhxpUCXQKB5vSygo7MY2wouTu8cHjZdaYBEeTsT4pMi1WnVFYT1cB27Zv9ZG4msTJpin86HEpHZNgFh36",
  "key2": "4GVvenuuwWAzK2SGBj7EYyvHZmWbUck5NJjZutdpG4SKuN1bYF9FBfrgwo4HU7Gs6Sw5HEw2L933ViJopQQfwTYw",
  "key3": "29XkQXiZLDXsfRys3EjB9oKFk9J4CAYCyHYKYzJT2YE334ZS1FKJptp9C1Cwrp9arE7yAufdvxXteXnR96PgwPT5",
  "key4": "4VDXmP1CyQxPpwvsUWFiewodfCraybqe6gisEeo7pSCFkRz3SxDPvUoZSZEcdLwGBjBWsuzJcpa9fJ29KXBB9usE",
  "key5": "559vB2gardtMJ7Gw4Kq3yXCLMGu7E236JuW3rroh9Q2VGQJhdLH8FU17JPa2kdsmXfnM2iyvkK47YVY5Qs43fDtS",
  "key6": "4oDPeh45c1de6iNBLSEpwAia1ST9W3GHAR4rLVqYHUX3GT84RUt3yegfqcehGQ1i9JuUffS8rCEpiRyPnvnYTuWu",
  "key7": "2HFt3KcvP3B9kMoc8xW6Hmk3jLSCc5w2rZidE5XnZ7QkvWzs7rvewwMBgbBLmggkvL7hXjcbLLc9t8hF3eAucVxt",
  "key8": "yeyeQM5EXPCe1XguvSyh9YkgK1rpcr9JeC9YWjTUSB9djYo8qENpUtkHswRfo3ubZZrAgvMVtuFVoo4p5Nc4C72",
  "key9": "3MZ3t2voEqTinBXzwxiAUV9eEg6Ah1XUgYeexqwrBV1grqmwGj9WEqAYRNmd6ZcScJqS1Y2sLdrScJo9AGPAqCen",
  "key10": "45HmF4iW2rKbkXfmcxtJ5Vsha4JM7CVC5etGBSDd8wfshEPY2fPNJwstPhwtG7BimkhaxGKt5hJTc4BeSMLzUf8Y",
  "key11": "33MQjDBwNUb6qbqB6feKRGWq7WMn2rcBkXnhpAUcQzi8Nd3fb6CheLToFV1kw7oPzbgnfVWc7gURxHkqj3UEU5UY",
  "key12": "2kL5DwTkZTZJYdMHkCwHP3TwuJMwq7ib7ZtEnZU5XBFCy6hXahKsE4LuyazzHVfFsHbJMtgxnNjipBBssJBUU8b3",
  "key13": "59CHUbUW1Y7sAaRU6TxM1CK4UZSB5cp7BVYFVpP28PeuSRjRhFfRsXiTHoWnCrqpiUwX32T7C1BsiA9w7jaEnZKW",
  "key14": "5QjU6NDcJNZNR1YrjyrUn1EHEmqGaSzEngNY9xgYgHA3W4Qs7ugDxb34LYLm5ERBk6Ln9m2eGCBFjexHRXBaeFUt",
  "key15": "2vvT5Xr4yws5nCX3qYjU5z8hiUWA43BQFZQHNrZ3pmYXApgSA8LVEhr34jhfgW5dDPdTMf5dHgqK7Gf4ZuuHLSZW",
  "key16": "R4QF8Vu4XhPgjFC6LcLyomUYcNhLuehf4JNjqRqSssMFGr2nici1XzvQHKQhyXZVQtrpqamnpRAc3KNpwG1iK1v",
  "key17": "4twZ8BSFSwRuDAygfsAUMWr9MQSz949ieNxsVAUHfs6Xy52f9STv371jUrBTQd8nrdmXJsKWHbvw2T7epjSThD3n",
  "key18": "5oQPhk93aFNGjivWUV3R6mdpZPBx4x4eJUDBsaGdu1pUQ7FCnexqFmpvPWy54uWzKbncArNAgTp8Ci9JLNAdkjcT",
  "key19": "4AgGBBjCst5z3UANTcPLFc4MxFraTLC3iU2PcrB1xT52JFEnbzrcek6JwLvFAAqxqPThjgXy6UcSESQ1ZHj5H6GP",
  "key20": "sR2KnmYg9gfbKA2Mb9o8bH9rDzjt8BG44bxNV8UM5ko4WUTdWk3hwbPh5uT11kbHAr4UHe2ijh74Knsydgk8NcS",
  "key21": "3txyxsxtwqyLnMszqsYJFPvNXZJD5cA18yb2cHQ8ghKeAVMsXefzF32mALtfCAnmFJm5Jwrz662txrdtwYWA7jJD",
  "key22": "2gARDPxnFPc8PU29TCJU5zix4HhEhzWvHR48LASeSkrPYunevUSvKe6dTE1UQhdDdo2vsaYYjBG1k713NMPu4sFy",
  "key23": "3AspEcQzDfGrQQVpgiViMDP7YxE2y5oHzjaJrnE34pr1wTUJD1Bw7mLfYNPkN1jVCzXrskfX3CAxZoUsxgEwXRNf",
  "key24": "4WTrEkH65wFE8QUgRqhm9M6qQsUkE18aoQCPqq24d96ZyFsDJAcAytRVh7jKneFhbvoeqyTXLjN7qkwUMKG8V5pU",
  "key25": "3oswahxW9kB3sZLJ26BtCKoe7Epiupbg1JGHhLbzbDNgXbAh7J1ZFd9kEvPL3WNM1Ggo7pKyZA7cESgWFRrS7aKM",
  "key26": "4jxtGVpsZfdmr3csaCaLyar8HoQfQ8LL3nLBX5ZoLoEyW7LNFWUyy6vwrrgqDf2a9xQoXM7wTcnGV194eKjvteWd",
  "key27": "4gP1C94GaEdJi8Gs1wj4G9hjzEWFcBdb74VQKo6Z8HfL6JAcbPbsGALN4NYErtEgnS4fGQ4aVQ5gsqoagcaGA3bi",
  "key28": "3dZE4QdyqTyB9cLPpmdCEqUTcejjrZaanhQwSy75P1d7EDs1YFkoqgobzuTAVkT3HF2viD3BxdUU4xrMGwsti2qN",
  "key29": "2c2Dc2pct9H15jhZo6c8v1haaFE1JVgfjfdexiNQXdWR2WfU1aDMySXX9PiAqP6MSBswcBRCmEz39ZHYqwX1bbEo",
  "key30": "3NyUsiYwi7VU8Ry3KEdk5tehjDNex9AwYT3L4MzSCTjt4uTqxJLZmpXhH4HQb9rC1xGSqbHkhFnHWbkxEysRZAJ2",
  "key31": "5p19VGVgXpwPt91LgFAimRtYHaMCjuoavdrCAsURAspuWr5ttYtq374Nf1GYZGFGGZuNNh3phwvUUKgHxKKssSZi",
  "key32": "5WyNeTyftbcDVvJ3sJgsvJBUL9yVdDnrsALDMrQgfQMahZ27h63TUBExB1GTrNhWnjuee4Ngci9mjg87eopYcWA8",
  "key33": "3oeWRUGxoVdbnEjFyAGg6EAeQD619wduvWLetayyGKepYvW32LQhnW5CXWm1TRZ67ZenMQmDts1eiVFUGHevWd13",
  "key34": "5SWJEcBj87tS7Cd42Kpi2MD3MghK1AYph7dGKdLhs3aXr7F5WG1BWfFnLrthvjENoFSm5FKk2LcCeVbsVyWiBNUQ"
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
