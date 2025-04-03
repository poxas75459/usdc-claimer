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
    "2Uz3XYbfRjjrpVJ9hF11Q2rFEvS7E6jC8PZEKL3synvCwkV8685UNdgcnWGGwn7cyHPt8K3BLqCByRGMUDjc8t7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52F6mRh5YBLw87Jm2sYDVMxjNBLRHKeaqsdBPdtLHdoutuNPHz69xfsXdJH4uu4MB8dvozwQ4ptXVzdqytynDiHT",
  "key1": "27apyTfXX6HszxdtNvz4eAGRYHBEzVcUywAdr2B9uYXuTA6wmQZZsaYK6Q87JwsPnDVPceJTn68DH9EGdYKLcuLV",
  "key2": "2ZgTzTshaev32VzwCvSJNmgdaqLsy4KFqXtu43co5j99u7LU7VQkiE1Pf21GCdhUAWfxQU3jxBBxCAsfAy6wGSis",
  "key3": "5nJuGCjALQ3vszDVvAbgxPfU4Er2AFYQEe3ikpppDmtqEH7ujEvHvCAm9YUeZ9JhFNvJKNdEf5XAporNP1wwkP3y",
  "key4": "3UTb6TN1xKVzWJtBwA1Fm1vyeZAmuAe8zE928vuyePKV4vZTZHiL9bxnP8zFZZJwo85oAQhg6EY7KXfKvJfYngjz",
  "key5": "z3VHRnpVN7vBFv2jCJ2EN9BKLn87DE4A5q7EMUS4gVdaXP5QPUMdnfbQPyHHHCy5KwyNB3B2Kdtzoobuze1LUYd",
  "key6": "2q2gUErsdNqDmVGbKDhUhkk1AsJ3BLEVHyaGT8eZTSDM5vuujY2SewX3MdS7KtcqnszK66LrSzVs2MCQjC6pa2GL",
  "key7": "53vdec6WtHcUPYcEUwCBdJDbJCrP1k9E27V16pMHtrf7bSMp9QbmVnuzRGkuc3XVwwVzGzSjQXiBS5aMvjigGkkV",
  "key8": "4dzm7iMsJPu2WYVEMnHPwjtwd2iipWpgEWyS8bJfXT9t3dvYFFFC2G6pnmwreQphniYPuqp3v564V9Wdy53DygTW",
  "key9": "4vAyKWoqpebtxhwck8ESDGFGAHacAn3dqWMVMk4vU5AwoLR9FEKUr5oKKptPExm52EncS2jS6VTdCkh6qT9s5NCB",
  "key10": "2sNL9MpJEtKsruMY6Ax1uk7sjHKHeNaVCenPCbmnoyJUzSDTKK5zaXBmYKoBJjs5hzSY59bMF3DMrA7zF35zV5cA",
  "key11": "2Zi7tjhwsTtFN1VuNfxHc4dmctBHtDWjzhfdtFjDpDJpsp3z7bDtMm2XiU3Nfu5y652nEsbRkoJx3Wk14y21XCts",
  "key12": "v6bFw6PbByAApL9QF7C6pmUg7mjoAtkLGv82DCoM7KwjnFXJCUUVYJYy3qQzfPZhcsqBCo61aFUtR2GvbaQh2Zp",
  "key13": "DxziNTahhV3masBU1ybVPkzAJnJs16SzcpKf6nVPENrzzQGhg4W5ebLtbdUEuCHqpM3JTsdwtPYMwa1WNpLE4ho",
  "key14": "4yAiTJLrKQWwVrmLupg8U8rUWXoKX9ojPWpMvXgPZFm1tRMVSrDmq4rCPGegpuBp7FzLpoZwKerboUuEDXGn5jty",
  "key15": "5dY9SbxZ57wz8PABrorAnQdDFHQRdjF166bE3EDGtnT9yNBYZXVQEuhYG2aC7JBFCRkkdLcxe9WmswwwajVc9Jyu",
  "key16": "ZqBJUyVzf5XjuyFBgPAvV3QqHnG7jMzzf4XVLb1HoJzUWqa5mR2YypVASbUY23R91sZhwth2ZC4hfo1yVw413iM",
  "key17": "5whZDNwhGe5kFHmcWfwrWRmrDjJbdoSnCy9xEeDaCwxFJw1k22NUrpPBhrRWxwUfr72Cfg1uqji6XnYGxQFuKwhQ",
  "key18": "5ar3h6ENDqjjne5Bcy1sXwN1LKPtXbLHiJwejKgbemyTseTYzXDGEWqXzMkBKQcREcqvCV787mKLGTteLSGoHWXd",
  "key19": "4Eb484u3GdT26mEq1Q9rdH6yoZovQM8iULm3m6gZtA13MfVLfeXP8NorzFFDWqLRSuGH6GtoYKsCNyWWr5CNXNke",
  "key20": "2fJkh2y5wy3MJhms4xNKDg5Gq4mnu6dsj65ooW5QCwuz8rjEeA4khSSMhwNDVT9QpRNhnDcxYjBiCBPUTdTTHtQ8",
  "key21": "hopgvV2GkChscbXy3SraWdMSNJCAXcvi4Na8S8AhtheShN9RNAJWHoRzCdVQupRLcGGgRP6nSUBaxZV9DduMm53",
  "key22": "3GAdFePZs8GeQ2TwcsMHSzv8cW1hLsvrxaMXD9grH2puQuDDVWzRpftHdJVuxtBkH2yrLLcr3dMZqBUwHNrs48Qq",
  "key23": "YZixxmnYcnf9wN4Ugg7cxF1muVFheRRTDgqFyzS8PVKRBDqrvR3jtXwarVeRq94j3hnXVnVFn5UzZ8H17nK5odr",
  "key24": "2eFQnGGY1UzPrAe9aaDGNdmn5BH7bXufoTvGfLc49gAed13idqyzZ2TEYwMYRMgac9G6aVPHbeUfV4sMZSFARneC",
  "key25": "T1fTSrMXMKVmN4unWFaRidVgc7Hbdzr8eoxs6sA7XeX4xgDXNhmT7na6chHpFhw4CWa9ELpKbA7ZRQ9unLy9XAf",
  "key26": "64Ux3EPEyAoZXgg5HxKbS3HUZHa8AQG1bQSdaEFDHw2KfffJvFYqSQfe5XqcoKEgNtahKVmUXnGBu3zxXKmW2gdL",
  "key27": "5riU59Ew2JF5LcJbPEAhnXFeNmGR6L41tvkrfDaYCJuzsqVPsFDNgcp8MfXGtRtL41qidLxWyZwrM7Nh9SdkcAqs"
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
