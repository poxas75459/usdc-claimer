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
    "5PyMJ67x9PpTUxrEY6E6XAzvb2Ce9h6CEYabXHPa86BxjwuTYKgeBGjMKGFNPeS2maG9wjniAPnpsLWgKr81xKx9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rx5UWSQ2TvbUtBPGjHbKvKBdjfbZ7jmzM738BuxmY3HD2Jbu5fVxTmLqYNdP1ekJeYuucETx1bJ9FiP7tUcGRg4",
  "key1": "VjfRixUo9754HYLAsZZJBSChgsvVRnFU1a9nQCVWG7QktTgnyBd27v4cAdhLtVE92sEyCnh9tRrmW9DPbQZhhGY",
  "key2": "3jeG8YaZtdZCzMQ691LiNVEVkbMCGCKQnKcvez6rU5FiL8oxYgBbwCPBhZtUnCvhjSB1158YEFvkaXuAR9r6LD3x",
  "key3": "3UGfH1kFBefyMTjxWPGNZjarjE74MvxFaLffzT4Pa5DBjMXWKrfFmtcS83dowqbTKrP6b8PrF34hj3QHoQ3YxkZM",
  "key4": "4HauD6MHhxgQ4MvQ61vy4pLp7kqGq6Rx4T9PzrBWXJwBNKnw7a4oEBTmvd6ZaVHqnAuUBz2dpZrbf3QQkzuiHKoq",
  "key5": "4QVD4KGfbtsZ8feHccHPyz37vFVSpPuuxGPKWhVxRTjMBAvmNY5MV1gNWRNx9GZMJWpEYtaYB7YqAQZJJmmDfzBk",
  "key6": "675TUioT4FWW9mgXP18qRhfB3EuPSnetz85g7fCHSWY1SzbWpsGxrqNDacHzk3HatfjD8g5GmUQ98HqMJtGqQMG7",
  "key7": "5JG6HLq9zmngR6MLcQUctiPxJWyUu8GrAeQuvcSgEVQowfbKCyWU13HpfoEDv5wSPLbQv9KwxnRRkzsBEpCGjLuu",
  "key8": "23fjfwfM2gmSnk7aZpr4qtfC27gccB8g66yrUAmf2uymznvJtj25DFMYV6wA8HzQvgP54bFNAXP4eXayTZWUbBqi",
  "key9": "2v3j9tBkCryxd9BJWVzVs6zqWnULYUuJvRt75Q4p5sMXmWMZYxSKJ7RnsY3QbAGLMEwAo9wd87YkArufsLCw5tHW",
  "key10": "3biSw8zLKizbMMofcE6q1wUy4uXwCMESrjKZ9YsX9vQEGxaJWnYzBN7GzSSaGz7JM93JVAkqCxwM9yxwGAMmssPv",
  "key11": "61BZDZWRNPquBokfy7uAFS6wcFmZhJqp8oojf4Pvt9gKB862TCCzSXeCrGJkeE7aJYm5kSYdWxw9bFnaHVfatLsQ",
  "key12": "2d4yxnzx6jnTfigqepzRmkFWFYGgffmfnY816PhyL89hr5oowMJRo9vYfb4pHStypvSz41vP6txiRJB7GoY1Bjoh",
  "key13": "2BP599SzBBDwcvsz9uZEwpiYDFxoorsRBdbBjT2fePL3P5r1Fjmxe6dtmej1DmDgoHrAc9HjosH4iQ6hdagpxgCF",
  "key14": "48KFMGjeCx7pAqNwaLZTpAmiJCWLG9hwwGxFqCB2p2qHAmTZbrjGGrEC2YNFXHTmqAh3wBx2yc6zcVcTm8hYcbPM",
  "key15": "5SMtaBaMZLzYJXDQJMk48UqzFDv37N2oCNs8oN6qXkvTCy7XRdN9NSL2eZpms9Y6Wsvxsk94CcpbbvbxWRx4pTgZ",
  "key16": "6hDiF1DTuSYqwv4XsCuiYPg5zf9Wf4RANUQpdEyVZzJHmmUquMjArhBT1S3viBduLyhbo7vaLiSLFZ9DuELTXCi",
  "key17": "67BiovFJdS1EGvWpmHrN5zGjmeaGvRrfqJT1ZSpxCxKM7wHcHw17BPDqwVh1HPz96WRGYs1zJAirUvTmXpj6Vwwv",
  "key18": "5Te5h2Ap9prjFaBxLFNqQzTvoJYxPwkRxrY8zvMxkMByYVr7Eq9KvGsMae12jvfanci2s5SMUW3ZBG7VzvSpQ73",
  "key19": "4S8qNYETpNoWtuBr2diCDp7mxDbzYkAPx3LXqyt3QX34rvbRmNh2koZbpvpvZMqTzbYoJsLUHK45LjeteZphQRPa",
  "key20": "25gMwUGGT9svfmb3cYdygsPwvqUoNCviHUY4YQeUvR2HaEp8hdGUpEL9fxPJkGp2vomaUTkF74HHt1V6WtAWnKYL",
  "key21": "wUPYPjiPkphqsbV6DuvfFCmcG2sQUJckEdGXYminCNERc6E6ZjhrDiKjsgdHDoA7mSjDQFND3b3spPoweFPoWos",
  "key22": "59mhihAEKFbWLW5i4HtJxTpJppkoTZVHq3vdV1F9AdztGsACAi6nzWrofsm3MP5b4odVr2a6DHYDvh6rjQfBgggG",
  "key23": "4Xiu8RYrMabYDuSyiDXz8HdTcmMN4C4srwYDqRtNes94Wb3Q1qZ8mHxk5xr9ifAF7cEZ5QRQLkf395b8P791Ga1F",
  "key24": "2bG4gc5uK3hXNbWP6eESnH4w4Mv37mXSWBGwEomphDZQPqyXmCCZgHhruoy1qxrpKKNZXCPg2Qjx33ek4GoX31gs",
  "key25": "PG1yPNMr7dZxtMnwFmHEPvSX4JTvFimwSDNutDjshvHrV98GDB3Dvd1FNguw2CeHcU7x9BzWPxkfbbXvc4mzFKU",
  "key26": "5XcVK187FbYWysJUrjv3dAtbUZgY9L6iDJ4z9ZSoYZTH7UTNufH2yHsS3c8bEmfXAqLq7aV9cLt1JfiEY8ZeKGgP",
  "key27": "3SJZGW32kChCxRRmQCZUYLzuz7rH6mfKZdWTQay8rZcbuxDtCAsYjhuFrV6JJFaJNEsJ6rkpNh9MUaCMteaySbS6",
  "key28": "4gqXNdpdvtSjVUjKDvm7iDsDhNiPiFKmVhbrKqGAJoatHfnaeJcUx5XZY9LevoNy8VG66TqdPxjUBS6cuFX91ooE",
  "key29": "2gi5Gtwgb7fWxNLyyibCrMnXUHDgfCBjXHVJiHjGWFz1H1qvmrwoPhVTMgfn2pb7GrLzunT66WEhBHx2VXk2uPNV"
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
