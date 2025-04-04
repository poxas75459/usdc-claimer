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
    "44t2xK1s6PE3G61oQjxsYbFVuda3eYbfiYahXenaMq1XrJ7vX6uNqAre4sCeV7dJ4GAy43mZGZUVbJUe8bPVamVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A3xVxgw7GHF2RKCcjpejpT9QNMBkZgwpC5ex8VLUQRnthDagjPuAEoeqF2GAZx6HZ4uW5x31GPdqD7S7DgyFqab",
  "key1": "4cdKTjy3f2nPRSWuAqCRzoKCU62oBYGHmZFpvsyRK8sHG8KvueVApCuqBysFnSXSYaYi5E7YQdNWM6gH2upT4dRr",
  "key2": "27ndzJCpAgucbjVnrq14TPoheZ7HMaifHpGtK2kw9hyA4cq4gsDQSExC5k4N7VpJTXfeDbUdSL5xWh3HsbEUaXEo",
  "key3": "5XjR47qkoZP9JwPCNh3PVFJm89HRPxPoJzdmMk4tnkjvV3kHgtWovtvDvuxaGTNfPvvgqTntNaZo7max9Nu7daJG",
  "key4": "2SPTTX1ZhqQCVHZPtAV8nSa4FYqUgVFJ1Bc9UQ9opBFZTcVQaUjx1hYXfX62CZbWd7FbcFQVD7aSU3FaJmCM3xB2",
  "key5": "3FsspJupQww9HJd3R2zkPDpxDuw4EsD8amvRc7ddBHE35pSCLvJqwo4DSrfxoWYfkpXYchqAMYvpxE4tAzqYRAgi",
  "key6": "3XtfUJ2qqyKDjowiibdZDn5Q7MpdeL7B5PhKLd3NetuN8buVRNDX4nsLCkt1h6HB9cDMw2TbUipk7oUCXH1SeE1E",
  "key7": "bvXk9ZGgw9ZxBuvSqzCSANv6ibZ5v4BaW1QGUBUN9asSFKs7EG8aWSqeyC8iz2QsAUnXVu84gH3d3zyhJuuMrDV",
  "key8": "38AB4Tbstf2quyhnEGYRx5QansYdW7iwwKTPLByc1tCS7zTWBBZ4f2nrqMMcah5imPnZM1izcuoz5mHoVCoaBVz7",
  "key9": "5XRHg3MeGJesNXFjDzwan7fwVeZCh1jirZvJ3G78GFXnpt3Kwj2ebPdSvxpRzMqtRPVLp6UmryjGkwDxk75XSNv",
  "key10": "57FosuQaz4ytKxSg5dTUaXkgpcMaW7FLzBA6HzRfS4puPdqfoeuTGHBJpcs7QK9N615m2fsPrYxBTX53nbreJqqv",
  "key11": "348qTWZ7PPT7yx5MFa7XTECfw71ck2XJAsACtFPJja2WJ99LDWjqmxZKneHtkf6EHwUxAjxGggDHh4cR6qTyA1u3",
  "key12": "3a1QUALaKFCucvcSTqwL3B93fWqfZiMfLPfmewFj8zAQzCvEaTVnJ9Zd2i3VS8zPz8AbvfTq34AyUYNa4sxtZJ5A",
  "key13": "2HjRuYKhyDfWYTSsS35mnVbR1LQcuaiPyJLq8aRfTEVNRJLt8smaq1XuEZbJBKDc4MDByK3mSr67PnAJ7v3rgbNV",
  "key14": "2EeKJV1p2cdk1m2v6A88oErNyuYZvPbGcmNVtwj7JzVgt2g7Z452NdymitY6mfN1KR63TJysj6uGuWk3NDn7CsJ",
  "key15": "2Fow5922FCkH8vxQhSmUXTRkeMfK38ffupzNejBPT5qjWMaN5kphdPY1uCoTDuJc6URNQjGDZmK28m6TGhxYrrEV",
  "key16": "2qkU123oGLbqES7yvLLscpVHfjNMkhGhkEsHXrGH4tywqm56bCKyTDQ9BQLazBfXvJi3jfdy7sagqKsbJAnnvBP4",
  "key17": "3hZ64nfFHMo39gxmDX7vAARXGVXbN3fFTYcFEPnHHzztRzrCYsbL9ZQY2sJebLu8SByxa5QcGKQw88dDHQQPhAWF",
  "key18": "4kfVLwStfQLxDRyiZ5tteedV8WRmX6xTB6Kk5hKy2jeojaz3F712U9RHmsdAaT5JoWKCjUxmptW685fFUgNk6sfP",
  "key19": "62NbYroejT3QqTTx2SnpFuRYyFvhU8FAuF5yfFHDophfPSBxYig5DSFoNfM1uQMwtubbmUT4k5P8dQNwUaTV92vt",
  "key20": "FsciWwq8ZKmyFZLXfv7Hw7qx9oES7rPQCXH4Rbrf5weNus2hTj6HuWQadnyzHEMN4x26YbZTsmwkryi2YofGXyo",
  "key21": "LG2wtmU3LgifPX8PbG7XEDGoq2UUx6xPd4MemHfisuF3KdMssGA6UYJU156otx7dvwEbL8BaBAPBuQuwubdAqCo",
  "key22": "4dCX61pAjTndBzc3s9ggJdxvmtP6zeGjSuL5nynDC8V4k5xRmrDDisz7skZPkqPBrRW4GypG14nCwJWziFSofWDY",
  "key23": "2yFnP9iExx7Chqx3hvngVpb6KzF5gz1bewaThG5eNHZJfbZh1hxZah4e92MS5j2TojtCwXkY29PutY3KVMv43jxR",
  "key24": "2tmBzqdKxceL43L9BD3nwoDkUauzmQBPRobPHwyJViAaT1GxE6L5wN4akbewQJbU99DUraRe5Kqf7fZ5mDmyAP6e",
  "key25": "33ZDWqbsodt4ugYmVzSePALXefCaDbXjE73J3FJvcvqgczpbwmR9BHSQSoJ54aPaL21NTvFvKM1S6uK5ahQxQt1X",
  "key26": "4ShEWJvcoiZBYtobzGotsgwuAtmUPQADgCyaPJxBGcNXmXoctavg3JavXFL4xRFMWS2PN21AXrvwXkCKhGmyJZyw",
  "key27": "22UTuKna7vx6GNrQJPn7hi79juEdoWXLKA9DFhFJqi6hBvNSzXr3AX2QqhPRaXecUyKZQYpjBtx3ruVEUZWnhUiy",
  "key28": "4U3K86VNoT1mMxaJcU61sJ94bJf6Me9osYWUCcr3vVdfQEktvbiPPMegp4cpuHfUQjMFNRdK7SNDpbxfYsSJeMTN",
  "key29": "2UkTUtUju1yjy5zy49smQB5FFEEceJgWrXsMwfUpG2fT5iTrk7A7xp8MkNgnghz9woEaNs6ZYsYKMKJhyn6XgzAN",
  "key30": "5oLCKdswuNNwQHobYunyuid2WQe6hUycYe1U2Ve3EkpM6t4tkQjFrVinYfaUGDTPNt4xwyckmY1usmDt73tUFcRY"
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
