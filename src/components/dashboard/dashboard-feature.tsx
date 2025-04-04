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
    "2R18QT513io8p7V1Pez3ynetusq5MHJNQFoX7uLcjyc1uh39raqbMZWodsVneK1GvVknDpSN8c9oez1dAgQsBFC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S6QXU44WSjxLhbmNvk8mA35nTG9BazNQukGy4Zhe25Jp5jNqRF2MXXizJQ2GxEJ8LbB9mthjK46fur2g7SseWhM",
  "key1": "26jjWhTtPKbxrTf9uuzq5kQPyEgQDwTptg3qPsCgGdiD4BqmoSKSEZKybqgt2JdB1i4Rfb1U1dYGHdXFXh2PuS61",
  "key2": "5nK5Y2E41xdGqzd1dr1QaMDuJ3no3XP6Gq4mSFzLjinsWpVSxWrPpB2LVTXSqiCf8suoCZMgTKri6z2QS2SCTPZ8",
  "key3": "2ZZHhJqBFY2755KkbkBSKMNsZCf5wSyTSPeHgEvV15fAbJ67imu7eZWdKXLxbV3eJrqUvxTCTvcnhrAcvVDnf3AR",
  "key4": "2vpkEGvz36VEvh1tFraZeHWwo6bGsxh4h548UUi5tHbtGL9x57VDCXGBDL2A7Z2TABQ4v8DvhuJSYguvKxN29ECy",
  "key5": "4doFGJUqKRAD1pzwJdGYA7Qny93QMj6iTbRvxF5P2jscmSb6CRH7eUxM1ZWHwtinThVfpAhiWUsJRzCWcz7a7oVZ",
  "key6": "2SdUqvFw9PpigUCYATwrKwPzpLurKwuwZC9HFPTp2RfiYeLsZro5phBbKyxHgYa4DXzWy7wwCWvdccXaxJBxK1e1",
  "key7": "5tifqWAvKzhfegYraGyX7k2tUw8eAsVnEAongygNcQm6DMAyzSVafFNVdn9o4B3bqMHeSjV2pxUisXnQmjsz7aVm",
  "key8": "6dw2yvaHrNmkVArLdFpY6XNpWj7TpPrioFmft2VDqE2qMWZ8u5eNXAaQb6Mdisou1hqRi5VrkaHH39KKdxJUFw7",
  "key9": "3UzfVxb79NzBRekn4LkC8VrMMGLHFsFfkuC8YYs5Zz1eVa3TUxvB4QgAPBEiqohTmR6kBBBpYm7BYnMUHw5bUiv5",
  "key10": "4FSmf52qqGzsLKVAG1EHQyeqf5u61yDtntjyKmnsPKqbdtJT3ud1emEtWUCBaYF2MuRxRK974VbHFnLDFwMwcmGg",
  "key11": "5gMQbJgTqt95J3AfQyvtzHTxSuMbgMiYvQb6TZf7cuW9neow8W2v7YEnhoa9LNRwmRTT7zCSYLEji6oXPtvW9P9F",
  "key12": "2XKrdQTGvhiXjeFw6mWxKoYEB9YwdXoAvpHuCVqHoycvWF2XsXYDF4KwxNfMcWUNrom9Au9ZNE1zP4JdoU9XnRsB",
  "key13": "248zTSdhKBJ11ZASXvKzLPezooVcBLXzMFk7Tp4LdBWghfCvTRHpRZM8H3rotEDAbkBbP9aJep9BREG7bzXvuKoE",
  "key14": "2gQ1oc2X4u2iPViJGttWt5pyzyXiDiBcUnXiUoTYcDmvPVfP9s3Cv4BWaBR5o4jL9SsWPcDRpcHeDoVEwJwgqTjh",
  "key15": "5DJNCnhZgwAKPEHz9pmdVQ2RszdREsGYj2Y1eg6fYeQjTVCYmqxMCRQzg1MGkWm51oYLUoa4R2qHSf2KnNnbzSrL",
  "key16": "CfP5PkezxVyLqS843bj65KfumuJUdWZd63fvRZ3urZPTnJXsWvm2YzRU9T9YfRSj3ViZ3k9DvxijLMrxM8c9w9c",
  "key17": "5gW1JPE3z5APfzLUhCcAs3uyorTBjNFURsEkeauzPsa2SFWhc7yCoukszopP78kAqa94ou5o79QXB7YtpnfzwXks",
  "key18": "5mHptAjKBG3XvvBv7E5wqkGaecfyGuAHRK8wqynpr8XmoUq2vJKpsYEpueGTM9pJPpQ5fY9qR5WbERxuzjk7ns7i",
  "key19": "xdsFgb4XcQFN7jzZGQpcQnLbAhiiSYSKCin7iVhhoudTnoKE5muh27SLhpGGhHqeeHEakM41U8aVKFd6xSUrgra",
  "key20": "F2pC1f8Mb7hV3cQfmrPufeDSGgJ79XHkrLpTzvFokdE7uPZ2z8hGYf2aw1DP6WiZgyxL1sCHbJnSP4JGTvVJAhi",
  "key21": "4McEAQRhzdxyT5eYPtmgkynj2t3BvcRskEYyen5fsiX6evryFBiRPbFYvT2apF2ERfGjtMDyPUkoiwEquGJkmMEr",
  "key22": "VpzoHePKhQpQxqgQtfQwuehAKXaK9CuKoVavSz2XR4EHxKWCquAZzgBT8mTLL1BsgmHnHzmbcnHpZBZsoaW5BXy",
  "key23": "2GrMLCESj21aBa7vz9T62mo2CKpGEUMEU5yQT2PoeC2Y8jt6ZWF31svqWcV5v5qvkxSD5gEHQAgskX6kZCFvVkxF",
  "key24": "3x2R1bNh7752rEVLFsduSLTctFK3w8BkMDttXBYhMGbNufgD2y9Vo7Zc58ZZeEh4fEkXazFrGRHtKfnBm7zWrshD",
  "key25": "5bdytsFKTzXorDD3XmDiGGFTavJMNhAx67KEZ2eYyfcwewSfZZcM1Z8W2CbvUyyAbV4Fme8LsLaN8tPXNNMhf5ed",
  "key26": "5ZmDqJFz9V48ui7LFM3s3DJML8F9VVB1iK4ywnnNGHppBjKfAxobfFN6NfrRGExYcDaEmcdeayvkNVxzhgo1UoWP",
  "key27": "4hARQVUqUAAyksMZr3cyYqiKyFpVc5DhMa5iEsx5NZWjTnH5N7u9A3bXJE99N7PhRwzwQE7AC5anQgkwz93ajff4",
  "key28": "33Cktin2mVvzHB4vVSyJ5vYoZfnka6QgaP1XemmtsKQV6JP2VEPpBu7xB1Xa7jdeSRFphNtRQh5VzjnFiKW5i4Mg",
  "key29": "2M11aYwxVdVVYQBAFLGgNRKgbj1mygzJpqCXsDPQeoSod34AKrMxVrmcai62Yn72gPAxwb7zYBRPAQ2wYHPqh2yy",
  "key30": "2yXTNHYhHw9uv929VoRErk7bEmkgPSf85xytTKBmSwevzAkMaANzC3cVPhEQfztd3yNHFhwGXzJXxARY6M4AvfT9",
  "key31": "R3fkpJPcu6SvmqGCLjvAfzfy22PYUu31eDqnyYD7KWCLLJYpxE5ymNUG6uJQs4tgtAMXRHXhpyDJwHhQhY1Be8o",
  "key32": "29VdzgPcenLE4KdWDBykJYisNarRJ9mduVx2TikDGr7Uo2vB8oupubW7ucqwUmzWj1DKf2muH344jjuwcJG1smrq",
  "key33": "5BUD2a7toZJyytWHzCs2eLcySYMUqKocWUNR8QuZW2nCnzNtVKGjHbfEQvU1TdSCw3St9zuNTj2k2C8v3fXXWifb",
  "key34": "61A7H3XfwiSzYS5z8jUTyJt8TSAFoCtw6TVMKUJhDWf9d49nzooY1vUyQ9xieNVmDK3Bk9GP4VWjcoka26K86Wzo",
  "key35": "PoXT4upVihMQpDASKvfgwx5QD5uowJu46qBwNgG3YAhMDBdDu4RU8er4CkTztM9oNQAn5vmmf9QS4NJvyEruhyL",
  "key36": "5YwEp61mGepi8ZWiQSLWBCqDJim5kUyxcbLAvmeTQSwmMU5yupcBURUJdi9asT3YGEM5EuQhV3x1mnQMRTZ2q8YW",
  "key37": "49FodxCsiFfjA5ekYKqRwB4BvB7ujHLv3iUJ1qSuWc8KZyfVj6Jr8XfpW5QHaKgdnZmPdCEWsLhWAZxWABZ752ye",
  "key38": "5X4WVqSstE64eT4YMA9hY7vUP4k25ERTHjEqFFAocSzqf9TFpSnEc7SDR4WiXjQfNshQdNDjjPvUEpV8ZcXzg2re",
  "key39": "349RkxnLzxCKMBocRCWG7wqEY59YY5oMdzbaT6YHJcrQVPvtJx43E46ZWcTFM3GGbDWezQiyjcQEz5NxKgL4yAcU",
  "key40": "2Kt79a6DApL98H6ggb9CzwkaSio8cmwNmg1AaKrsSHjbGXnppWutSekDcG9DHzaqMMBm8os7ESR6UzCfmhaA6HJf",
  "key41": "4vMvLBuvAGwuwDTxwLgqPaC7TKYCrfSyhg96q5TS55djN8whUHD4xufQD8kq6x4mgfMKV93HG4DgpscUpi78fCVJ"
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
