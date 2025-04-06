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
    "4seN2W9T6eAEbEJ95F8zbjYtNZbBKWVKKHDTgdB3Bf5CrPYhNZHQMngCAHpu59xbB454LenyCN8YWKtBne1nsV6C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34ARt6aV8yPqSbhWCTf4Rtnj8mkqMS2L8KDBaLZkdTBaDhhHuyCSYGnQJ9UHeQkP1QHDtxTkUhuiDHsMFGgND4ZB",
  "key1": "27YqNnNsGw2tDwgtQxFhsgynzt7YbCNyXiqaPkBU2yhT2E9mo5w2ZTtoyavgB6iDdnHqsK3tuAN1jEAHzyiwKBav",
  "key2": "5KtQivcojNdV27AAFdkAbeocZntaYyA2JZFakF2XaUQuXqRSpuouyGUVzKgaa3QD9eH7ZSx49h8iJsrsqJmHvNui",
  "key3": "3WcTETpXYecVexZVncVaXWWUv9ArDJQcaGDM4wS7XN42ZGcLXEDmy9iJnRfb5HTrR3p15eWeJX293BYo4oB8KGad",
  "key4": "a4AEU9crrkQ1QK2y9WLfhFwjtv1oz5ZbKdx7FfYs5W5oZDbsBF8rbjaF9DuhzfcPA165f7FYA1kXybwPWJHKXxs",
  "key5": "5xFcbTs3PkWw5arJKnYQZ3b35BjohEaXHxTH9PnXacCSFeWhhVjDxoxuz5zxRWKgCYAxPxqRjXAVswNHmD9adnzY",
  "key6": "5GAN8uRczGf1Hbw74DQgNFHCxioJbYidpQJuDh8HqdHhgE2Dituwznn5kLjxxcXV8vZCdPsFnK2EE7zdbNaJCpqc",
  "key7": "3HWPGiUNdptahooVvCKPVGrJheTdyn6p18Vkib7AiLRosbDgzWZLdb7UzFmgb6pit5sJ7hXxFgCBaDPDoDdGG7Lg",
  "key8": "2cxm1hnGrKASdSxnXDGH2VWt7V1sfRLtQXZa8z1sygNFRPbkjo97GevcB16dX4fsq6Eg8iHwYeyJBeNJ6T7gUGoo",
  "key9": "4iSZK5vEHvvrwDhgBLmp4z4uw97Rz6rTJEWYghFbLw89MB9p28i79j5xHtmWx4qFWm4J1RumoJbA8dzcsfpdpFjF",
  "key10": "VhjKc42pgYVzAP9adTEuqVjK3tzNoshQ2QfHwdjxNVCzNGjrcDz21TAoVuaUbcg8Tx7LiAWGHnUct15b5fo8hbm",
  "key11": "5ruHEwyBZWGYu7FH6M4C4tcV2PdEaws36aHUoub2fbZfohurWHMucUxt1V464q7VAYzRtW7Exkzysk5rXQLbRgdY",
  "key12": "4248jKvso7zTWJVjeL9LEKmU7FXwq6SrZejAmKEyrSfPx8zhHq5aLXvsbd6w4rt8BQhtuqnoZKLFtWpM3n1xG6Aw",
  "key13": "3BUH5sygvFkNmhCTuJnZBe8kyNR64zxfRzxBYpoSH4cnG88JyT6RrsMCYXLwoDSJgQhC9CQXiGDvNwP2Quvhmq9U",
  "key14": "xWJerxphVh5vp7PBoyp6sFYgNQHcXsWjzCqfT5wfDngLLjwNqTJGmEdEjNbD85dgQhBvmCJ7dmthBHawA6Qy6Jk",
  "key15": "3oKqjMUX6Z7d3kuNayYrbVq1uWRKvc9rfowDdwsqzZAA3TUZ2F9bwSFj3fr7cZ2jxdfTpWsVLnjatDi5DcvDnkRc",
  "key16": "4qvRQeZRdCL7M2iaeeyvMDmo12FVuwXH5zpDmwDLFExs6zzZ9A8of8Z4g3Hf6qkVp2NKxhEaC3jHo778FjBE6TD2",
  "key17": "1YgNBJ7Svk1vaMsV4KUjjjb5VeVjtbmZH4o2TfTDzTbuQwNh5eWL5hSXXsz8mHGsNz2oGw8oKASw3JHPfSnCTZq",
  "key18": "YZPWkFDaiTSNMhSsSZ3MPjnEn6BgrCPpcvxU97UgBXKhx819LsdiqAYnPgpp3B3LsJXQptbG1k5c4auC3jE3uKQ",
  "key19": "5srhT3wBG575qqbcLhBkTbYdD98VYygZLckh9HVLQgyagzor3rH4MWsZ8wZCFsCiTkBjTCSNQ9475er7rqD4mDi5",
  "key20": "Vi7rMjVn3Nk5pbkNLJJvxncHJKNqkAaH6Yjtm7gCqqqLGeVZdaGNAaFrz3V218Prg1EA2RNHkNei7sRS3XyZof2",
  "key21": "56TND44KTvgaEBX2f1YqVkY313ramFo4BifFaN1grVSdhyCYgvzC7rSST9d3BXjs4MBma98RKZghi2J2ofvN5qRU",
  "key22": "62tYqntwNXCioegg6ECo31rTvFQgVKXFV39EsETabwkJU3fYaGgotGq7xR4BuUcZi2gcKMXTWYh1jGqeW4f1wgEZ",
  "key23": "2S181zCZqmepnmmmNkCzUvZxHvDnm9k5DnLiXRLZ9LLXDFxRjD6U3rbwnPEteNJ6ye29Nfq37PAyeL1WrAFeunkm",
  "key24": "3GyqAFjLbymXF7Ax2d39qzB3ZyFZemKpLUhmF3sVhsZePjfZUctHseAWGxtF5ir85yFtPab9PHgiHZkc6SjQXDL8",
  "key25": "5Kb4wv2Mr4Use4EmdsSrTWQV1PSmr4LkDEMjv47Br9nBBaiLP5FwExfp1HU8z529ew9f4zP48xBP66SbTkYkMR9B",
  "key26": "5Up4k17PcNGqPAR42tUCRapn8uMPYw7kzhSd9jcf8KKN4QjPrzVBBvCQuKEXfQ7tNJeMLuLgcYPZsJouMfLsPzyR"
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
