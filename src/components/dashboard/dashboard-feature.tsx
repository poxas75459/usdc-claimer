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
    "Xn9sT1zymg3KqwKjGaTt67uVa6wFhuk81pGW8QHGBa7C7cjgtx43K2ijw5TCpGBFrdAhRtEFhvAUw5Uj4igNqN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21ragCvYPvZSgKUSKjrpegLAnFGCUoE23TaycH8snubpwaT9XPzs4L1ENjLvKLxahpqG1fNtm56xVwaHWNvKL6Xx",
  "key1": "3o9FD77vVowCFxYSC5K7ofpoht2ndMNdQfLdGEHtiGCaN3XXufgcgidzKemiXAX2nyk4fjTLYMdcdqCRGdqyHbF8",
  "key2": "4Yn5mro4VMbViwUjxaZtCUDmGtC4bDi1iS7VeZtBGutJ8tyn2mTE7bq8ptKmyq9RL21PM4yUkLSt7R77Uz6WLd8U",
  "key3": "cDg1coQgjxtHxDTQUD1AvdHKCs5Uvgfi52a93ADVuBjWNkf8RLmugZbXp6ueP2ptZ6aHG1aT4A6M1SL5gRpNpQW",
  "key4": "4jBnTcemJpDdseDsu6yTcZagCtAG9P7JF3R3e68Tw6bupUM3ZGPmzF5vFv4y6sT7yVDGZnGJa96AaMc4AtLH9b28",
  "key5": "5drjkhYFVHUEynLVcvLiS5pfZ1JbVM4mJEJ46Gb9nwQFqgwLg2EBdarJCrs377amqscndG4Eo6BfLPJosFo7pFHm",
  "key6": "63GHoAebqkqaKpkpiHSrq2BUb5qfqU1wHD4uUbZmMSNfGpnQS8Ui9cNmagxW8GYHubmVe38REQbqfx3LztbKXv6s",
  "key7": "3t3v44UU81LuM8gZy5osTjKehq8bka7DRwQNibQupUsZTX8ew6MF349BkkiXAzs6XjoKUyeW7bGtdTurAQ17TDAc",
  "key8": "3fsbUZFQpy1UZQc3YVLxCoSRFpbAmAZqsWiumyBng8jxnjrffnZ64xZE4jCYwF5F7MWiBxj6vumghNhC9JZ6BgWf",
  "key9": "3BE7TraC7akpnMzmFCE9WVVbw6jiKKdYRZPjctfAsdbFGdvy3TBu8Bb3kyj1eaHFp6ZSSTAUECXKwhK2HQWypjuD",
  "key10": "5sdouanuTesyyj5N99jTJw2VQArLLrNqJHPvCe6PiqziCqnqUQow5mRLuRWJw8MyjEcA7GLyLbbxMFSrmpEetk1v",
  "key11": "52mivnFHGUpGoMxUTrN9UanCKKgBqA4MSNFPRZC9i2x7jqbvZzCYmtoBbZAAnenJqqYSBUzStkEuMTThKgpV4J5J",
  "key12": "2HdxJQU2BmXcbqaJbFCMvCFmxrGqTSdiKceUcUVJVWM3moV1Rpbhb9T6yZzHrRey7LpHq1bFnmp2J6uCbtpxkJNb",
  "key13": "4ty2rWvyntpky6NFiAyzbqusjdVPj3zBSrf1Bt1dv8zzZ664nHA6h6vDFanN3QfEvTgtuvFHiPu1cT8UoXPqRyQf",
  "key14": "4HYH7e79NKzzc85bLo9t3zwJQRryb4uDPjF33qnNbeMVN8wzZVr147i1DYLwaKSPX9eDSX2WtXwBQybWQLiQYBgp",
  "key15": "4shB3LGp8kw6daoZdyHrdB9TU8E4oukdJ9ocuQNJHa1uUcGZx6132nHEqTmuDg9nZwdgPRu4EWKkNYTPrF3omp9V",
  "key16": "2gZsqKApUeQ3g36acNfbZuNiJrRoEivSMPhaHXmosbEcJEVM6aPjs95mimBt6T9LKpQuV1qb4BJqXgKeHig2Czpc",
  "key17": "33apg36nL9dZAuvx8vABfytnbFa9dn8HyFXq5wNwAnpxbXZiMnx67znaapAhFh9gdMBDT31KjCAHsgJmYyzf5ssj",
  "key18": "4PvzSZDhghhx63Cph3L97f9cTh2xwu3bCWjSX4wJPf4uSbnhD8hEV67tGQFuzC2hZf2sfo8CjCDCCjjkqZk5kYdY",
  "key19": "4m66ysvpdooNq4FyakRQjJDBMqyug7U36FTcPz3UkTUrGAnZGGRzoxz6U1fwUG5k42JJJPwcwBoj9yESYFD7bmNP",
  "key20": "1AXA9vVHJ77LNTMtgE4citZWD25miwgL5AArGwWgy4iGctDH4xQExk9xAXoiMwwjMRgn18A2Z7M2xNokvfn8AHX",
  "key21": "RxrSk9udBQaLnqtphYP9iFdMxeBMKLLs9YWpVsnWGr6Rt7bVJ4i4dmkhomVtCsnFkEhq6r7N9QRvovAvhX5o2Lv",
  "key22": "T7ymwmKQMbcSyFgPwTkrV5ygjZs3u74qBNLt27hyeZyrSCH6uHCWA5h855oqWvJKY4XqgEebAzHNqHM73cgMinr",
  "key23": "2kMczqnecTSzW5W1oDvdawSu1y7q5XGuQSvu98dpWN1tuivBv3AzyvZBWU9jgvi7k8hRy5g16jKDDrh6snPWvQ5x",
  "key24": "4UnHg9BTjTGo8p1mqPgTHkexNBQ4NXcd9EbBfxvPyQcEPMsAUJzq6BtMJhNdFhaA24Mu8jH1vHByP6hrmrHvSHVM",
  "key25": "3FahoCFMe8Jpv8YqCtPkSJjk1yGUPJmYtBbBkqAiF81v512DDizWoSAMmSTFXFBTY5iaCkwyeLNesywAhU5eAfwU"
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
