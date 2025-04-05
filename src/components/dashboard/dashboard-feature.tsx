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
    "37NZWDTy3vvuX11vQ9x13C6q694HssKczvhB33vg9SeYVc5DHV2c8UEiYVB5FqHCQSq9v4ExrypVL1iSqgjZ9vPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aePPzaMJuCgSYGnmZ23r1SYQvAGySasPrKdeqfqFCJ7oj8Ut92KsLuV8qKdK5KVzB3HhxgsrHBt8cx4vLfaEZsU",
  "key1": "62Y2rYQnFu5iyr64bWznNm2qEJ3c3WE24ftRUwuyd1aacLrCwUUPt24op1gtChP9XT6jRfo4iNKcxwYGqf4c94ff",
  "key2": "54bYknAfghMiQgzSCKdTAmFZEsMsWgNb5zqvom4Sr4ZVnmG3mu9CUtVLtQLd3FU8V7Y6rYT6CtJh1za5mTwPVvnu",
  "key3": "39Xwwm2C98rmBthPxJYeftAD9FbyoeTVb1bpdzwXFE6C4d1VyF4bha13RwXEZWq5hNAY6PMjWBQRTFwYWMggF8mp",
  "key4": "5a1P4HEsiqfUhCo76VfG1WyFmphEdTpy7fiCEAWJe2DG489qDjH5GyovvgF7wu4sJGVbyYEgcc88SjRR4i4procg",
  "key5": "mRh2F3AuWFFSNtH2o5NMrpCD5bayHBirf615ibQUtHXu4HELDLmF8b4fE5MwG3rfqWMgzZ94y64qMbhfhjDviS7",
  "key6": "5WWy11nB3EUmAJacFvW5Pt4sVViDDsGcUJV2iWb7HmX8Z4mRxf31Ffn1cq3eUQJSs7mCjjoD924bAJRbwgyMQ3uR",
  "key7": "5aAXsX5fZkYEo3bvLQsfBrAURQA6yEdr2ixf37DpUSpuqjfxf3S8Q8FCjxBRK6wXde1YetZ1Cr2eBVW1rML6ApPc",
  "key8": "4GYj9txrCHMwXoyguYN6Nb6WsM4Y4m1nTGVGRSQ8ZkttDaSRrbriNEdBFgGVF6mnUoG3EHbCnPNBaMQjdxvkv1Zb",
  "key9": "38sfBcMFgJMfAEuP2fTt7AMqqyKQZSXmbMcGcU2sYa1F1n17pfDvXv3PRWHNFeeguZ1yc1aGauL7Fb1odAA5zyUj",
  "key10": "4HW2tPpET5BofCKSMEAwdKPqDQUWmYm8tKKEbkQDqwwzbq17Beod3ssnZFiqsTtFDPWBVVYE5jNmyQA1GoTZkb7s",
  "key11": "5CyeUH1SgsMs2WJ1hdUUYFjCPuc7y8B5macpGgJYTdpe3Sdk6vreMbRWiNUYM1kJwgim7CxSxu48WCeuprYQLPLJ",
  "key12": "89rMw4qNeG3jG7Mo3oLcZaNauZWvwj1qTxDJhruRxbjzEB2PzqdRKxohfFcHtqW4ZMeETVt8So3ChLHiFJsWxYf",
  "key13": "5jzDsh7VdqyAg32t5CZrWqQ7FfZ8eHVs4Da1YVxeiAeotkKHWg9VJ13iybbRsumTcGYZ3FHS9ARKai9MdjRUwLRn",
  "key14": "65xMsFFZJgMe9NX1nxY9fUfEc9bZwT4suUMWEFw8q94raCvFwB2ci2rKFkA9rcVYe4VVxpxYdUuG6BBcswa48iqN",
  "key15": "2DBgJ7g15V3rViXfedrwDJ96JPYEyGN9ei49cS2dYy9reY97RX6Kt5RT4gV5zGpUH6bCBq6mrP1jUaX5ymJ2Evgy",
  "key16": "4UVo56HqFq6hBBy9P2m839rCC4bikAcHq1y8cgiThBE61tN4W4dEmeNZGmtVRiKRaWpgaBCgP98DfLsq2Zci1bJB",
  "key17": "ktHVojS134bTbJVYNg7q7ThiRreubkk8UqVUKVXWXW5jAs43JyemvhP2YaZ655EJBjPoaLLKkELBfm3U71XZfBv",
  "key18": "2YJSFz5XriyquTqr9kmo8mgmZdgJ5iVQPWKpkTFoNyZvb2VeWoCXrDs8kghVw5PXcVEtuV2kZfd7Eh4spVwq4iRm",
  "key19": "2AJW4J34q6ZLnjs9LiuShUtacQna2grjLCK7Q1JVrVyiX8hqNHzM4stndfHqQYJThVcHbCyX77N9fZoReQKk4vDB",
  "key20": "38i81zvXtEUTN95aWMUQaRvnsX6Rb9dcyHEhU2W2Z5G9yRsLQhqS8jsfsG4CQF94WqNWR8vp6m5UNpXwLDhX9oNz",
  "key21": "zSdKQ6VkyK1TpbsMnsNsdhtTteKUuoH715Th7LTqZiWGJMznd7JT4AyKB1dtKztEQx458mSmE7Pme2L89QQgwkx",
  "key22": "tbV9QwDtCBE6MzPvFhFWQCpRwFSs4uV5L31S3Knt7rq6v4CH2NHUULGckJtAekRBGxEtrcmbcLXvWAf3DUyK2Up",
  "key23": "3B6S8CBbdURxcToUQAVwgXWkVzywA2AsRGfnPLkuSYXH3XEJ2ztJVTuj3e4WJLHKZi5f8QamrqjJyPtSTroAFAx8",
  "key24": "4GuuKhReaLBPY6hfLmxsVhiSqizYz1fDLPfahyeYatTTvgd7Ykg28R3N6BoVVwWZAzA53dx44ukFQ6xp1D92CcF8"
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
