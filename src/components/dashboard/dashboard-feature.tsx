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
    "EpRtMbHrb5cfJNn15DeizxkcyZPWUQeD2p2rRDAWKwbunDdpetrv1Z28dqrC7p9B7sjAr8xmpPvNvfiDzrEtVRp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z7LvqeP5JfRj3ZeDqWEZvDwRWwc2LQk8NZKXK8tPtte6dAhzLzegbkzEQahC4XYx6EXwttuZWf9QW1b9GbAokwJ",
  "key1": "ALf2mM8ufd2hFUh9ToikysPzyasg1eqyDuqodQFMnrDgZsuqpEsSQ95SBaneukAivxQd6whY4x8aq7tbKpc4pZg",
  "key2": "3WNdv8duqULEvKiy32VceroFqUE7TB55xWTYfCkGeXmbuxW8LrhumJyY6yh6ADmEPcSXrw3hpQXLxgMT3u6zHqqa",
  "key3": "DuSM9QN8sRzr3LTxuaHKAVR78UetRoA8FUZ5fSqRZsotEzDcXExW8i84XT27C3qJN3gkn5Anwi3zzbMPPyNcrkq",
  "key4": "27uWSHtCNi1VcKKBWRCytAFSDDrUWpEc3iy7cSthCJKpTTRL4ZmSuYGR3oxKwKFANTL4d7GfiQ8YZefnFEPWxFaD",
  "key5": "3Pm4baRRtiqeNh2o9myqnJ2XoSgVrCkSXDjvyhtyKvAVtUTmLZ1YUTM2EVp94woCachhLSub3e4n8pqUh8ZTHZXT",
  "key6": "45APvL9toTQWJ3Me7czW7CrcXuFD1tzRC5ZBkGo4rcUAUPbotJJoBZb7i7XmCJ2uKjDRQrBfeV7MqPGnSw5UUGmx",
  "key7": "4tf3yLuL6typqZVWKc8uJFzhDmb2zyHJtzQ1baAang97haphSUH1B4LDbdwhM3a9ziXyMywtG6wGVrpB3nowAqy9",
  "key8": "2QfbAr7vCT83FjRb6AWht3iQjDbvUCXxnnLT5332it7g5VHThoK94P79HSvuK8GuwwBC81KdTf9oJLeSJoNa1Zmy",
  "key9": "4wa3vG6F7QMMBAKUXMTvYzmosZbx49KhFPvsDKnKFC1Ze6bHqVmdrenw7L4xfre52VRZhJa1SR1tqPPTdtTKk6eZ",
  "key10": "3UH25DUduEPp1UUG3vigLWXxwRFUUYBqYdT8WAo7Py3FRv1FWt6Fs7qgZByo2D2MtsQks823MbgTU1u72LT9tsq2",
  "key11": "4qxz7EePR6tW3tDd5zDHHdA2zkLNVZebZEQAfYouBAHmkEt9AxFuQ4t91reqBFSsUTDZAmaoYRwGJmsUrcyAcr3W",
  "key12": "2E3Ag8HreEATuy9Ty133KcBP3bg68EQ7w6WH8JYDNbthKTiczDcRQQrvc3dTe8Ha3DcAXVLNVJ5JDQzRWEg4dZug",
  "key13": "2NQPAUhtY8zq9o85nggy1t9ukJBDpXRXXtRdRaHVF477qD8nwf12A75Sxxc3SEd3He2FErx14rUHokv7LfcaDiXd",
  "key14": "4drGT2vUBPp7ReVzAE5nMvsqhHtiR6NcfSkPeDGS3whgDoHCUH28WyUncL821ER8tYT6pUUNbnsKW3pcYo4MvVWL",
  "key15": "eb3eRipVqvKWyg3wMjunP67vTooy9p12QhCfqFqyEcUk6EX4TKwdZWdS6VS5U2C4SvWxnPQr8ZHymGUpWjqKhD2",
  "key16": "3PtCEuM9kxSos1PuazLXqmQ3EY9yvBhnR1pUEg9DfEyxyVPhASVYZFgkcikTPaAsMG5nwqJNNe66Skf5w8tat4oW",
  "key17": "2UuyZo5jNpStkMjs9v6hxXay13u3WLspB3b79LhXqGk1HGZiX2qsoYRaswkZP88aXMoHeQ4nonyMk9yi8YZniXm8",
  "key18": "2DkdAbNq9bWoP2xKt64swmLnC4TAzR8KR2feTazfWJZK6WxsgfFGxx4c1zpy9o7wMPeM79qNjCQT1LQnijBTHvwG",
  "key19": "4P43Ab8gXpLzEGqeGjiYV6KDSHTMTGbLEeLPL6vzNdu13W2m5BQNgk2udVHkkWuhfhd7TUqQbMz7KZzA6gheBs2C",
  "key20": "3SiJFggjhw7YytxCELNs2B7Dzfv83UAsKzbu4qsZ9mb736bZrukDys3uYsbkHBubWvmouGzEVvWnjD3RuTL4PZAc",
  "key21": "3KCJQDmpzJHynnQS9hhPQeYE9PfSofDB6qyshXtavcyA9UXwN3B2ncox8jZPHiTj5gL8CWPo5qxWHyDLCkVTncC2",
  "key22": "3nBorytXQmroSkhRGE9brbpnMZ1WyhTzQXTE5o9S78pwGMNmcV4QfsL1iczRA63ovW5Qrce3DzVmegdd9f5wnDmD",
  "key23": "4TGJ6hQGeChfbEVbrYpEq1gpa9wEFbbEi8TzYx6HinBiqJCyamFqVEsXSuJqSjcpAyxUvuKY8SaoHXo2afVoEuG5",
  "key24": "4PjfP7CXgc2VeA1dM3oRK3HVUVRsVggxsQ39qVBKXCHadGEk61zuQefpJDq7ABgqux3rrkMW5SoqFZNmXgcDAEYD",
  "key25": "5s3TcYnV67cDVCDVuJU4nPoyWVgk9A69jUnzLNyWXRrNrG7Fxv7r4Ghz5skRFTwF1DLXoWPYjDUhr7As4gdTjJmg",
  "key26": "2x7dqfQsym9x97zcRzPbqSGRbEXbbcAiJMzZ9mjJakHwWCoUfQa5SRLgUmE2sJ82GnMjWbxkWC8h45CyoZQJc6GV",
  "key27": "4uByr13aTq9CtXJG1nAvkDhmssmDGFStQLYT5xmyvAaE4hBkgiBL8zKq22wxxMU2fvbx26mFDTiyNPSyHFhjv8nz",
  "key28": "2x7uHadzWhBgoJ9XajSTuxAftsV4CZtprNqvAxxj6UE3yvGLMsadjCzxg1zP39f7pHSr2X3LwV2HgcTHrwVEk3Wx",
  "key29": "2wmvHJ93BpRXugx11Y4AALJaExLDDRBUPE4RwGs7WGFfDEmJMc1gevKnQ6CiHSjt87dzoyC9DhA3PDHYFJqgN32n"
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
