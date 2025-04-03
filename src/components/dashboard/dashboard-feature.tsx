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
    "vJ6A4r9nqvt1m2nnWrMeu6kNjMNTYGWXuxZszoo65hDMPfvNceNeBwAgtWi769ywhZkz6EEX3JGg4HpWUZ1f357"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BYiMYZoUw4XDjnpVKwf24opzHQuqvkhjbQsdHHtFNucrTcPVNk3h48mKQzzmqh8xxdiNUvHqJNwuKd3K4HHGJbh",
  "key1": "32kQiPtdP7PJD6C63bsLR4xjwCkk4CXDh2J8yGCrNedpQDg6sQJ17LbqfvU9cF65Yd7efFFQgf9oSAa9EXisJ5jr",
  "key2": "3NBNMybHucTwm2TQkMnE8tZc76hhhwBQo2C8Kr5NuTAYppxtdm93eF59BdyFoCYfqfW4HNqdPyZ3WHvH3JABPkgh",
  "key3": "3KzgHk6w5L6JDMuvRnvw4zdFtY8ziBtVLMYWvRWtPAkFQXrnm6pvEuaBDoKNmKKjeyQyBz4iWWWYiTMPJajnR1MH",
  "key4": "3Jtd9fEkCJwwmXhaqHBxcVebyX2uKko6CSMHDC1rFT35DVMUbJx9DK1tDbtpWEqUgmMkZcvFiSfbeCgHRTJhQxDp",
  "key5": "nM88ENU6HgK6DgmMX7Hs6DHcj3eHDsAyJZYgkSUzNKfUAz64ESN1aL6ksmCPRgcWEbsGbNBaheD5NeggGQd7Q9U",
  "key6": "4GAxin6NumhgaYiDHQ6z5JHJD7nS4XaNfGyvTThLHf9H9jGGDt65isx9C4VL1osY814QrTWN7nMAhgZf4znQVmG3",
  "key7": "3meoxeYc2Jos4yLiDHF4VRY1GFfhDpfBwgfWQWc8Lw9vuJbJq9yp9RHpRrcp463myRtdHCrbdddA7W2niq8979ww",
  "key8": "26sHD3DFkPLrzshgUTCDNGRnRs3B5jVaou3PAC8n8ttCjxcUvZLuULpyNgM3eg5ktozwnSrheCXyYeNXwp6TYg4d",
  "key9": "5igFWFEBMeEbjY4pt8Fu1juswX3udqY4VqQAQPgFUi8Y8fyrRJJE5YiLBgcubUzGSmXn7BDee1dPpjUwVpZ6jGHJ",
  "key10": "Ar6VH3uY3wTjZhFCfaEFZqsGXGwPPrugK75hcaSfT1V7DsURYWYrDCQ5unAMKG6nnPD6mypWmXcbpgeokAncrgx",
  "key11": "3seJ5QisFdMEbz4zDDX2RfHYdL5y4DEkn4XzhjyhPdXd5txWYH8fxg9T32T5rTAfSrJ4bh3VLP5aLPoiJtbJezUE",
  "key12": "4hL5JKkhvY5mBabfjitBqSKQfZbM1UCok8VPsZJNBge8T8oyyYVXmn6QBHWSAmQFr2Z3oNTxC9VedPAA1brxUsdL",
  "key13": "zwxz369fcLRpqaR6MWK2AdHH4cn8mFr9nPVH6GJMXNFEhrG7VxvgoqqYWc3pRECiqF8FQbaUorEHQRpefVc5UaZ",
  "key14": "4ymMFyokHENP7JrggSp4EifREVRVFJBpNUpBxymbB1kS3XpqNDkmvTjbmcvoBC1BxHqo2RoXb81v9g5Dgf2Kkpuz",
  "key15": "SKgnViY3gfCN2Ym73MZMryq8a59w6q2SDRM8rdHchE1feNEiiw5tLT2PtyH34F4sSezU2YouqcPRZ5P7D8bJvM2",
  "key16": "45jyjtCkzTQ3d7jdymDdqtgVvgfCtkXbbuLqgNDQf6uGPHJh7LmrjGbYcDiA55wQ2PPEP8Dk6m72MYPZgQRhZMmz",
  "key17": "65W6k8Pt4A98rvmZNXmCGs6M6tboqV1K4HHKSAVyPzHZdi6PsxHuwKaQfQXCy4DezZsjZDmNfpiGrCTa3pGQSuR7",
  "key18": "oZv8NUAYpBDfD2vLXgFx58mutxVmX4aPuB4LSS8Ht4PqV73SJb9MTVaaCunP8yCPzJdwhDxXAbbTCtAGYKGN97u",
  "key19": "2XuDC4L9ynDxgWuUgq4vtnx72uNrxMPKeCwizXNKAqSGyemMKRFnkGSQd4kEu1LNXbmzFYBCW7wX1naNFktYdKHK",
  "key20": "57PCho3ptwKKKxhVWg66D4ZEKec4rD6vpXRa5Pscr59MFintbWpVeikBM1inMp9y9VSunEpxzwuMRUmnb5yd1U39",
  "key21": "4xm91UgBXf9WDsviLA6HgHg1adEAFAbjUrAe21Qg5VnLBXhszEmKh3rvH8o7gtFuVNQsqzE2DSXiAZy8WACiWdqs",
  "key22": "GM4haDVZvi8t87cHR4az9w3GfodeGhdtMFmMRMw44Sctb7RzKwtZ4M912TyZRWNCzTywyFRnZmVv8gVTmGehhcW",
  "key23": "5Mrq5g3v1sSCN5x2dwrsU4xBoaACXtF5PxWzx2nqAWaBfgbTCN5MyP1xgx7PYu6spZnDnBnfEHnfEP8423LzP7Zh",
  "key24": "42aB365RVw27cGhfT81nBAjLVDCk1kcRpSrHm9BQ5yY93bwZGFNnctugkBAtDm5xBNRs6tCxrPA53D9LNmMyWfL6",
  "key25": "3mnVwJ9XLsHuUE3rWVeRrizR7s4txs7tiUBKV9m9MntLFv878DU4TDYCvCcwgdT9Uh2CReKE6uJdYVic8uuffFHH",
  "key26": "4hJgm4W5ArUnbm3zQx9sQMqYwdtWEtTL4jFGyFFE5rqSeq1g9J9661UMbBkaCQBrRaVcxziravd79kCys95wLxVL",
  "key27": "4ZJdrgLzuqKpAKvZyqNbpj11DczbyqW27ejdWsencLgxZNjC6jyHTch1XyjDJe9fmknyYbW7yiSyiGRGbtZL8cT8"
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
