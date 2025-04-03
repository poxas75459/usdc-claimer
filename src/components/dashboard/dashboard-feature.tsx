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
    "4WJ3uUdftYXJz599VjMrWvS5nYtiV97fTuibSPf4HB5GpPwqzbE6xkgpbpNhU3ceM5yt8AKaZP3pYy7E7b73Z2MM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b6mKKj6me1fydKe9Mfe7FP88vGM6u2QuzDRCz4cDVgKdTRG76bXKxVehzYZxYSLTV68zePmneeEBN3FAmiSZjaJ",
  "key1": "2GDgx9ZZHmk9xYBHe9tYvMHenV7dDUgqffGQgZXjDzTvH5LNoMSUG1NzYV54ric1MTL7ekKPF2U1QeR7uB1ns4bS",
  "key2": "5m17K6UYWveEEUQquwsXjQiziujdGojpycZtxgiPCadQsYoV1vX635hfv5oNMTiPUCNHsJt4GE8ESXDZ5wsaethT",
  "key3": "4hhy1C8wQ8nabEsSiUfTKzr1pRRCeRfRa1ZhAWLvz6xd5ZMigr4ug6vej8bae4sG3DSG5gi9MkCDdFWFoEDoXyv8",
  "key4": "5n1kqLdCUjkxGhHK8EgEJmib5tcQ9UwkAV6t3FFuda4BkH2rteDMNm8LftFFeXYkkUFuvs5pTRMWyNV3sKs1qehq",
  "key5": "2f9cPyRcuf2zJ5iex5P8LpfxtRmZYEASFDU5TPzm6K3giEDwcV4JX4y7aDMJ9jDK63D4bQCNRUpCQ5cVXBoojXcM",
  "key6": "5Qrs7SoyHdNN8pQApnQsmJ5j9DxeSZ8GcRcdSXeQ5vgKfDokxUErJa7ttzjtBhSHoNTTRptPmYSShGa22vttQqLi",
  "key7": "39nsrLbFWRepYRCWSRNT9n2A1n8KBPjFKNb3th5zi4XKeFYfo9FbJvZJuoFRi9dCMyJAPZN2meH7Vf9AemvTAc4n",
  "key8": "PejVbNsWMG5ujJzrp31tPSvyYuVX4RZuXkuvaBbLR5yKgoyGcUmevzgPbDihFVfMUDumpQPqLw4CzqgGtLcr49C",
  "key9": "4cq6UnJHd69qnbrDBaMmDmSTXMwwG2Xmw5whos2tPBafc2cf5ASxuMTWgskX2X5Njeavfa2B8aNMtnRfAKo983R9",
  "key10": "3iV7N3AyLFoybkLFUH9jtFtwhsypyEeUSxJUSwixHUsq4imLcH6DyA9UrT3a3zoVRgPwjYsAqdbotsirnph5MSkG",
  "key11": "3RZGtySGW9ceRpHuiTrchVypAjijg4AYdC34ouu5hfX2UcbUBLkCLsGswjDuuUJtati4onhQfM8qwfUWgjrQcEuw",
  "key12": "3Ut1vKJ4nPCXf7E3QpcoEbk9jKCbN2yyHgC7JCg3F99CBG1Wd2NvaDrGARfz9skX29L969kCtAm9iwNMGyKXH2EP",
  "key13": "2EfoSHD4TxxvW8N4q69yrThu3uR8uFtcGgLEgmisn5yEGq9x7Fb928CdbVRhy9Z4baWC3Jj2dsA9otwWJ9Z6HaCU",
  "key14": "3k7dKedKE9Tm9LxnmRYA45wPmFZbfWin9rwMQPRK3asaewePmufUDJM9kHhps5FvfD6jvXAddhQBQ6nd8uXeJNHd",
  "key15": "4Q47raio8zRLbzd2BzjkARrMzcJEYctVr1tbdm3TjuUK3uo9o7YjocWeB4CDsL1zPYgeE9fHTuXzHu8HH9mCc17n",
  "key16": "31xYparPKQn7VSp8f8baNkgbphL4do4oRZnvYK3CqUus6wti1kVYaJMMXe3Lbnpaycu4KQvR8z5qJBwEaHi9q56R",
  "key17": "4nWKVrJbdozcTfBSZctG2PzoMiGwP483CWvg7ATfo9VjWZNZbm94MJqstcGHF72qtUR6fyg1vknEwBhMgjhr7Tsa",
  "key18": "2Zo2kUJshnhaibs8oVVcCeL8ypyTdxGVKQonHbFK1pGUqiUD7KnGEk15f46utCx7ibymLCgvkm4yXZ21o4YtudWt",
  "key19": "KHpRVWN5F5GZMSkAzupZfUsfvqUZfzPhaAynJ5k2Bi8HatrND1vvCo8NEDQ7Pxe7kskMuQXpMJURMKpN8PHejad",
  "key20": "4mz7q5BKyLuvHNDkL7R9XXyXdsTcQm8bdc57fvtZnsw2hTxwjerADPcNAQXtNVLmxeD7djokfHXtZ28j8yGVT5SU",
  "key21": "39D2iiqYtzGkGqquBiGmupRNGBGhhi5B7n3Jbd4R4jvP9jJCt6C1sq3qwbW88SV8JZoZyydzGCa7WmzHmntVezKq",
  "key22": "2eAeJ6DtdXpcgi2hC8duwk6Ah4ugdQCJStp1TBotHFjpeF5DJTeh5NRqLpPj1mzcgTg78h8GMRQxzQNWcLymjLA2",
  "key23": "5yZpne9pxQYU8MSJuzzP1cgvgqNUzZrTsosNfWcmx7fXGYVe9k1wLG1PgZ1Dz6H77DixKLVCALBn7bcqMJrGn127",
  "key24": "zKhSWNHMnRvWZ9wgDfGAHAzDgzkRkuBRkt7Qj3bbdkQzPYRviAvU3hbZSX8WUaz2y5WRCvZ4kiRDoco1gJF9JaR",
  "key25": "UbPizZRSXnHjzXn8UctYbZaCSRKhBLPfKks17yactSVFhtmPMTsy6tHwVwNJaoF9VT2XXGMfrLJ2H2i8X5txys8",
  "key26": "4wQ3bhNEqJmrsgrUftWweNV6LpfQUrYHxW2Mz5Q9kobp7BFcDFhmXM8f8o5Yo6TvCk9UGT4HMzximWhyi6gH2TsH",
  "key27": "2Wb2WtS6SFgCmLxJpnkm2d5vuYDZYYDy6fvsWMJNYYzybQqQ6bt68JawQJ4JV1jSp6hRAP1qWWrVCM7BZHPVGVCM"
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
