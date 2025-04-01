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
    "3zQDwPngnj8Ky9MF37Rfcj3bxm3ZDeeS2CyjkK9Y7LTWfC3fcGjj9L3SsQsgXLZJxe32yKNQsPuoKw1HMJvAnP47"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j5A5BgcDCN9pJpAjJQHaT8F2WPRVCnP5JKfKojfgkfDccPLr1d3bLUTQD98eXwPrN85b4YJ7cjYxjMr5Y8JkM2o",
  "key1": "41nKa446eVmT4oxkdoQw3eY7uEuccoyotHUwBw1j1CkThoWpypKhc9GByt7sZTUk6cL29aymbPmbqDZ8PdT8xWbG",
  "key2": "52SuaQSjkhvVixBMYQiLExrDFM4Avy4o81DNP7awdr5hniE8xb8Chg2tZFaN1GGoWwB4gjteXziBJdSMiSF8ejS1",
  "key3": "239BmuVj3KRVVJ3yPSYnQBi1VN2fNCNSYSLnaL3LN9uyccM5fd2bajLenhqsNM4SxxkAC16fcfzVzUFKnqr6uUJB",
  "key4": "3kWmaabkLW2zLyMyM2yFNVFFSWTzvFb1doZhMUkyGKv4c4RqGJpti4nNQQTLpKaXepcWLecEpsyjc2sWGYJ7J8yU",
  "key5": "2ky1eqcjEK8jbNf5BNjvhpavsMaavzygkbxrg7EVAQ3bxmCB3HBk6SR2yqh3UiSH667kPrnYEzfuKqPe3c9XFxZP",
  "key6": "2YddM44V4Vc9RDSv4cWFCK9mgEA1HrZkmJP4b1C7i6vwuZJsXnWGzr4PM6UeRiqMnkiphdospkyWRkuqKExJmsip",
  "key7": "4i7FBd2NmJBHfpgQPgtHE1A1fzE43QtLGbSkXBt5FnwDEiRRUQRTPkDYyZG1in9zkoY3VgcjtzMrE5sLnf94zhtj",
  "key8": "5BMqiB4HJbhzNRdoRWMr6bLQtPen3tLPRarYfpVxg7JR58V24CPKYUagBDyUcZnZtGLCW8DWL2bmYqivAdiacp4M",
  "key9": "2RCi4S2rTWh9hs5CjQdTHUrBvcyUAq8qAWyRi9GkNz5yqDDUqr95esps6UEAbRMSobZqfjbUTdwTESUHehWvcu4a",
  "key10": "3U7E1rVgwoKohwm9EMpLcBJAZ5ST1tRoUyrePMjrZp1akztX1EKDzRctSULuKEqCSNKnqFaNjrVREy6q5yyZaFTB",
  "key11": "Lj3kLpHD1s3gW4vmtnQvVTcAaxYBMTtMZw9vJjP5DCERdHrv7puzB8Xx9wpitwqcVgjGMpWkjgiYPFC5EaREnyr",
  "key12": "3ShXCrjWrrw858DYMmZL3bDcRq5AEj1FKSoRkFVDxZZndphQp1Zz4m8Ghp2aGXzVJcn5q9MviVit8obRGPE3YaAr",
  "key13": "GFDUJRT5nKmZ25pSy2EBqqdXfj5Nd5aGUycz9Ff5gEVF5ZB1CXes2ScNvDRDuY2pheJb6PK7xt5x6AzhvhWTGPu",
  "key14": "4xRibBenjwapb95miDu2oHVwJJgXBNT19EGf7iV7NBd3d5SsRCkCmftSiPG9sVF9F8UCYoBh4sSUKEqQaZPb7c6T",
  "key15": "3NeJqnkvRgABZHiRHuJY75wVa1yS6rHbEUATK6FePDucNLADfLEnGbbiUksnHqEXupnMiV54BmEY899xG9cuZbpq",
  "key16": "3jHdGPkpWMnzPqDGRk7WCugevpoKdhEgs8rxFYqhMHhhgEmY5pjQVYxwBx9d4ozPXh13GADmJH3pUFVeLXoYRq7E",
  "key17": "QiAjF9QxD2ayTqGJxNiMaEAewBLseET9sCfoYd1QmcewaE6C4LibKcSPyfVPPM7vRevmK96rAaqH8Z4b5Wkkqat",
  "key18": "5p8vMtvy6PK8jrWFUEfBT3auzoEEQuGrKtDmkNuPBBWMKh1YRf1U6hXvBJeVbfrfpBqmuEQSG9VVDjcHEZ3BzN3k",
  "key19": "31PA1BV6a4HMibZZNBwuHuT78QasnHAdWv8aA4Hx14TrDURRSpP28bL7GphVnVxkDvutC8QUMKA7cCTQJDi3NeQC",
  "key20": "333L5AB5qbV5PeKaESDFGzqE6GtWZc6L3voyoStCczGQmSY3S4WYo3cTXz3KLtYRDCaANi54yQsDe9tLgiMj9KMY",
  "key21": "37Qapj7V1WBsrUtGXQ23o2owLpjaN3Qdq2xdc3e3mANArsHpPwKKtV3rUdoC9Ld8Ynghb2bHcCHvxa3LCLdG4Q29",
  "key22": "5aewv83mjKGPugRGaL6YsVWnqwXjLEwxZxmLjiHU3MWV9y1NjyzY8zPSRWJxAWxxxF9JKTJNmhkXEZQJNd4YWMTX",
  "key23": "4bzSaaCBvZsx4JjoitTR99WoqToQnV1JyWqBoSLHKzTjtYJ5crbDmBJxsEnJMGZM8ZUtw3r3bPZ48Wpw2W3HRgeH",
  "key24": "3ExGvokw3W6ZUEjTy9HaL24QD498BGKWmZiA7zNkFKPQrvETazYufTXMegidk884F5ViVjFsAGkBRX39GsVdUsu5",
  "key25": "9pDjajMu8v6bfJXJgzf6yrVNYgcH5t8WSq1RDifSMd8eYyscUN6frcHLSc7epfMdhDaBuoF5kCWY994fRz5rJvx",
  "key26": "539WPN87AT8SVvf8WGqVw3oddHS2z9ykAM4xcXBSsZ2gGtQc4v4o7T7hJ2BGXKPpoJyBYy1ec14qgRD4vEUXc2qb"
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
