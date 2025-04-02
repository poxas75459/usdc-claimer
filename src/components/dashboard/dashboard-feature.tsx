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
    "dECKfbF32K133k9TM9V78Av1EaLQ4dDvDiUqWEEH7DwUvx4HKvgRzt2xoASCTpEZTgsnL2mTu5NXKfBSEd4C4vU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xK4SZY8GW16aJ19pk3q7786voLWAAt4AeQBxUmkEofYj7RjJ5MbPeEiaSFBruJXp8t3xmCAD5z2ysfNramvhscX",
  "key1": "3eFRwYbavNTmHLCzVaPUbGB73Ej6QxdBtCMWa9oC8kVcMuaAPDkQLwcBr8omPrjvVZFcqRLX2ctN2ceBYcq9ZjW3",
  "key2": "EfP5GfpNPPTTFPJ9sDZRwNrkxTfRYhn1M879hiZRfWi6iNedY9qruAamWxbzTThDYmfiRGtxGgy5kNUnotyhADP",
  "key3": "4s9pBkHNZWa8r9QyTGKVh8eTKu9PmMUwtmW7fsW7DQGTUcRWoykfLMpAXh2oUtC28gJtH5TQDC3MiejdbmaG7qTT",
  "key4": "41PxZjwhQ2C4f9Ygvr9SdMJj5xSRzLUnK3JXps7kQAMdz9CEREwKjaXinkj2ZLdKwJXxrKSzGXb14YGh6C69tmcN",
  "key5": "3hwbdTEPyN28R6g4v38M9xoKqm7tVVQzQS7NEmLQNMTyYS5Z3rBtfn7Zom2XbWWDp6Jkb3Jh6N1xCvjzcRjmsQNy",
  "key6": "5HegFajAMeoL6wn9etN4TiXBk9grp1XqaRbvy5UKxVpJaS4XJ4W8mX4iemidvS1S8Kd8Ct53FYesk47tG11FzJMC",
  "key7": "2R86oqt7yksve1Ym5q5jBHCSku3yvPpyn5NEy56Q7RmvaZfoJfr6Ftdm3oyLL5WnTJv7QuPXpcC37Vnv8dYEcBCc",
  "key8": "2Rs4yeWsrjnqG8yrpvTkhrVDps9UiW7yMEMhAD8XsNk5Aiznf6xDRCvRzETgy6sZ2DZktFA1SwhLhko1QAEoPJZE",
  "key9": "2nokqwU5m5RdhCRhQbLuvTUMCnGAyyXDd1WzbRiNYq1C7iUpB7bDdX2nxcwWNV14LF4yCgZXj7tTvZQN12UU6s8q",
  "key10": "2FaEQrJEVrhcik2oQTHFTkxe5Lwyv4wvu7N4UdUd2w19P48tFZAc3qoFUysUw4PKqDSs7wMotLnKLWuVQyQAAfHC",
  "key11": "3EfUGR8cWtzWWaHjfrH69HNJkRR8NSaNtvQfMc4vvP8w71dFkitWU4nH7U8z9iAWyXWT4GtweEyWQf7PQeYYBo5a",
  "key12": "4L9d6KMSkuCN7Ro7n9k4sydgmjQGumPsLbNPkm8SEYr3z6i5ap7qjFQL3m5XYmziH8PSnEk9PgUvxLnJ4DZjgCmp",
  "key13": "nqrT8DeJZvhpuUU4qEkcwasFJMVXFKgVLEBkMRnAoR5u6jSbtzqautxVbXisTi7wkBAxe1nrz8HRTWqRbNCF8k5",
  "key14": "3jGYjnJQf93q9eoztzazGVNSGes92yQn1uPoWAuxXR4R21iSCq7Rp9mbtwqVf1djsg9WtZu6Xxbx74gfmy2XsKKz",
  "key15": "3LYW63jVxY4sWyb1zkuAE1mRff3kfrBtckZVCrDhwGVd4WS6WCR9jqZ4wwyaxk4FR7gWu63N2uH5WFdq5HPWk6oJ",
  "key16": "4x4dxPSLigaeDCo7HvXYo3kinemYSHvSv36Tbf7ZY62HTEFQjxeifxuXmwQtnRfwVPHkGo4JfExtRHgnuEVHbqFC",
  "key17": "XALcZzz3V8GnHvE2MvZUsGZjwkfDy1DGZWffn3b3RaPnKYdg7XYomqqwUSfz2BVuM348FgjUFGeN5g5hRGDb9ra",
  "key18": "5PUEYq7e4SHzqFr2QDX5WkcYSf24o7dMtRhAQauKF5PeKVsyLWQ6QsMGfT56GDKroLRyfNyoXNrtNHng6zJZwdZX",
  "key19": "2m6wt73dSBAwcvnStUDchSqq8RTeGXg46DuuQYZ4TgMsnYmHT5AkqNRofUFbnJCCtupnBSn2qHnXGRRZscbHsck5",
  "key20": "YoFKHuD2dTrX967LE9gtzbbbDtPAoXFL7W3Hy1E4PKvoyqW4uLFFRKk9ZYSpxDRxBHi95o8i8xssnhcJLSE4qDA",
  "key21": "5PBT7A4GyBtgndaN7bBJMcLYrATrw3Csia9dPGb6xLwh6WyfTMY7BtSdj3hUYQjr9o3KDTG6Q9yhASHDav7sZ4yj",
  "key22": "5afKEs96mYZ7ifvwuMYZry86otN5XazKB1oGBUb8mLzCTSGYUXpEcrf5d5fGFLcw2GzThSzQrmgLNT19Q9mazsPZ",
  "key23": "zmxbgPLusBJyNkySwpNnWKpNU4ComKkPCZMroNMXpNmtgNttgU6Uo7q4a2oLBnfnFgBHdYJqqvvc2TF3XgMuAi9",
  "key24": "5R9Z9qt66mpNd8hG5cPhdheReBwC6f2uQeKe22MueMFExtqGbB9zi11SzWzRKZNFEffWBumretMcAd4oB9JR5aQg"
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
