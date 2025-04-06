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
    "5NSfMcqwS5gNz69b5WugkkaZr5ntRqhsFhUUehHdnDUwZ2UfB4HFJgA2rf9yPjeQeGr97ZLinfuHWz5SrSZTPSs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QMyV8WVovB1C6sxhgvtTUUeVoJPwRmDTp7Stmpnt6DbymFBGZ71eyKkMV9RbgrMGHHigW8Lh2mm9HURYCBmpjm9",
  "key1": "3AUeMrioA4ppALFRrkoPAcCu3mFuAUECTkntXZAABm5qwrouR344pQgvnbKJUMpARdycf3Yi7JWE61yUgmaDJ5dP",
  "key2": "2R9dMTbksdSApoXqmgeM7K9TgMp72ZzuSUjU4jgbpLK5qNgZuMJLzMfBpvjmC1LBDPrgkZoX87Xw5QwLPXRpEDg7",
  "key3": "2jwPj1PqRuQSFYv6Qy4r22rgY2KHWQSMmvKPKLybQBvfDpxseiywnTv9sccdbzYi3SU1VCZrigwQZKiLpydeacRJ",
  "key4": "Wd9HcyTZLr6GZ8YwnYYcjpvBHwDnpEn7Xphg14Yg3vp2E7CV3LCy3mDMYsFBNkyMSePrAbu5QfknJPUmQZNwfy6",
  "key5": "4t2YcWAwbmjhj7TVKxCMaXnmhEv2DercP4zLp365X9vFUDh8Q33gAksDmu6yj5WmEqPc3GtFbneUEG529xc15yJb",
  "key6": "5pApMzPtLgBNgDmuEoG7o9JUbpMfsakd3nZsK1XcHdER8NDoJ6S3w8vtQVwMAxhPkKCYovgSCSkXzwboCW4yP4xS",
  "key7": "2sYh2mdpFB5zkGvDQij3iX4LxXeM6npmuVgZDTjUNy7RvXLeFRxLXmWpSuBzAwNTxmTd6F2qRohPL5wyMA9UJEEe",
  "key8": "5vnKdCwrr7rSq7GfBptLbhVQiWXKYjhcDqkkKXdzCyypgPdnvc7q9CmrJqaS6zvKF3P1UaB5qMmEskdigfLD7CPe",
  "key9": "2vSht2JASaf4pzceakV1jzGUyPUYbQTM1oHVSFnBrxaXHbPaDPcdB3R1eB6XGczfpPi1Gz7QJWv2tbCK2GP3enuK",
  "key10": "xyrbsGPbvhPuqXdQCK1Q3DAmDtB89FGicD669ktRFP91vHLKacjprvJHQQGMHKxkJsX3cinsMPDt6e6mXeGm9pE",
  "key11": "3nUNAZeLVGyjMegz3kMnpLZTNq5KuhvcaN9YedjYK8jGrgPBKNnAm5D9E27eNUC3cxcq4qiGBGNF8rVK62oMrxZf",
  "key12": "59qk8bZhv3uQ3rMtAEtmi9vP9DkrfapcejtZ8eNQXaG64w1DL1ZRJPHN8jaf5TxGE3jyx8y2CSprFLto7FaiBonT",
  "key13": "CSWuSLRjXbwuCfQF3Fbz4GGe5LPYYEWvqYodr5g3FFPiXdZL7seowoCQqRE6s3jBHpiFp1eibkKLqxK5CDtc3t4",
  "key14": "3wy1eQLrjBewhLVVYQqt3qV3iH5ZsHij3Z2npyTMnfYWsAY31sndGAWodoVb3BcRqD49KeHi9CVctSUmAmYtLVCe",
  "key15": "2ZMg6Ymh7DrHBbCsY12jjj3qAFuRJbXoMeH9Bo2fjzCxzhXXhDt3aAiFPkCoM3xYhTCyJCP9V6nzxhUKGxtYXPHY",
  "key16": "4kfTosYFhbS86QDQfB2tWZrXp6bZtScnmFj724KHf3c6ku7nHpQnLePBVMG1Bz4jCCwSbCHVEgtc6h6ZiF6R6pKk",
  "key17": "oNmbKHTrsVCbbmneDN98crMyqzTZdKnwGhXCK9BE83NLZDt8qffd3KErgWkWsYnVyE8nKaUrJHojmoLG3v1DppT",
  "key18": "3R9cbrAKLzzryr4yqytLjnGvsXevrN1CL4UMt6pbap5v5T2jCVjedPJ5F3uTMZ51nFe8xuaN8tZhxR6yvMMfbGcV",
  "key19": "3nrVqdkSjvjU4YP68ABH94V8ZwDefUKjjcoutbjqnwZ3TpRrL1ZXU4RydbreYWCwW7epyBUSjYkVhTEUZT8hDJ6H",
  "key20": "ZAosmQzNjSDGXGv1YuYYspjzaJ1pqNkDZkHxv1hXLTjfzK3haujPoe66xMcXWETXZ2nKSLaY9h2ejRhvRZUWZE8",
  "key21": "4Uqii2v8PM7nrneCMB573r5pqXpnmEM7tuvK5KpjpYL3Vot9Chukuf2NizUjGGUBGJtg9oZSP5TJaB2A1LwCSdBt",
  "key22": "3r5v8QuVoSEb27S9WRVFiRaqrZnTdU2Uv3LxoNeP8eXTzBKUt7s8gWN6MvZ7W3eMPwE1DBnpZNXc378GsBwCjMHS",
  "key23": "3ujARRhSYf824VCqHVcVvDZshBAGo4aA2FAJkpWBpprLBFPpUPJ76k2GVSfzrnxu4enuoXwimF8TxTwg4xQHudSQ",
  "key24": "LzapS3Pynqm2EShFrr2aHhtkANu9iFq19nFkAFrswCnEau8Fwntgqeudv2AFepefZySmf2QzzqFkxFEbgTDf9Ys",
  "key25": "45sBkxR1bNUbbgFg1UnAx1MSSeeQVUtrMKkq4Y2Vhk5sZYE8y5VwuboPeReTsQAQsdsY7M8JtT2p3XhBwadvMf3M",
  "key26": "4haYPPnSvALn1ScQuwhhNg96cegD37UCgcnN4R4unHnnyKRPXtP6Kj5jWy8wAtzwzKLg25E4BYGTMPF8mbeJCNxx",
  "key27": "3zTu96nUXmwaLRNuH3ATsxhk7R19LKpeVypc6r1y2mT93qBMvrwyXQbzB5AaY5aVX2TxB6E5DgTLhR3BSK7wRBKw",
  "key28": "4snBi5vkRYfpxpeWa6ABTxWWezbWqj4HHvu1rkWPCZaUpkoEV45R6jMdCNgF9b3nDepg3WepsFMtnYqy1nt7CXFr",
  "key29": "4w5Rxai3fNvQG1XVad1QQWaENFGqDB1zFUtybhnwmrcrusbNTZwKrn2SCDBCaYcp4hHtmXnSSTUNHJkSWEJXpjFm",
  "key30": "4NyfPRJRAFN21P8oAgeoUvasKhSoffrzAJNR1Py3PGqjEitM2pEL2hU9QC1qizp7GBatk66L3x7TCNaatGFLv8bZ",
  "key31": "u9RXRpUD5ohLfWW2UCwCd1XoRQC67tYfxRkmqnbRkT7irat4Cxa9F2o37Sg3SEKWQjyUtErzSu5A6pdC6bcJXn8",
  "key32": "2p3j9v7fGx4xUGiLY5pu5pb58qiuGc8nssu4pA8iJ8SUVZBLTeQqfHa9xHGjs2YJ8cjAvcSCGYweMcCAXFNLwz1L",
  "key33": "2Qhr83SnkfHAJR5JKWm3a4u9d5evsV5FXTaf5QTv5NBSH95kzJSk3qiC1XwtnZfmKjLZErNWiqL9hX5zpakhVDFC",
  "key34": "3Z7WRv88JFb4CC9TDaHxA3S9b4BYBJwvcMBPbyQRa2HEPVHqecVchAd9wmpkDrneLfgen5CAFti6vbUDvws4SCXN"
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
