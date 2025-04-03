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
    "2NJ3HKcT76aTzVCCoemoYwCYtMF2uWs6ts8duGnnhi9piAiL1HBjLqiXjfNad26vWgz8ehZYpEvxJq5nAM946NLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mk8ueEV3cJdJC2yHJV4kDTHytVqtZf1p9xDSvQk97TC2hSfBij1mBtiQ8dTW4yJWWBjVnVfcnqyApBQRHjmMeN2",
  "key1": "3inMVjv1D2Gtc23j2viVhboxAxMgxmesiX4W58i15W5XqTJ2FawjPbPskNmwVWQ2vHfoKtToiwCFc6rndvr8PxMJ",
  "key2": "1VV31e5s2gfW39TKtBMg87Nj6ytGjxEYMVfzmcvQvji3oKWR6XnXcunJN43eZzuTbWvMNkWv94ECiiadZhahTWA",
  "key3": "cVoT4aGP3Qzjenk13EnmAsEQqe8rgfE4CQEEvCSne84gYUwySMD4yodCh2ZcQmv4GZtZxks7Sc8SpV1XFfU6PQ1",
  "key4": "4iv27qwpDNZ5w7yiruegSr2e1q8wt2cXXJdDpoidD7HgW6cGEbZST3b9H8k5dT8BpCenasnfXn8UDTLiVTXTiNuZ",
  "key5": "2KNuEQJdCWFfpHbeLSv5f3w1BVRGgKB3dvr9C4s3UtMZ7xjWkaMTowwS2HcgVUu4tNYgAcFXhyCy49ysukU4bAHg",
  "key6": "4BP6zrobonwSbZsRVDydvFMVDgsSWvDustrJchXaSd2wW3hemDqJjQHeybxVUbSRSC1psBW2B262vWiszwNMYHvf",
  "key7": "2PpnFKhS7aSCxYffrSvhBZqJJWbDTSyMW4wkAp4LokUya4aoQegvaH3k6CjVyuctXUGD7mLvqso2eGLbKxf26TQJ",
  "key8": "5PkRF3G3jhNss9tPWpZgDN66t34JZfLQwab9Hr8xskNQEwmC5u7bfpWgA64iY9Xx7daBm4gmyWbmv12zy6ftHcpA",
  "key9": "99a2iK9ao7inoo6e7ecwiC4sFKxGhXQ9U2yMTEdXE5asNTAhW4c1RHW61BEr88pkWEFQzQGBdHzH2s3wgcEgiaj",
  "key10": "RFFbqQ3qhCbHfQo8kG99uKd2qBNVkhMKTN5ftQAC5ezx7aR1XU3E8HqkmSKobuf9C97LLxKNumZdfCMmAR6ms2Q",
  "key11": "3okmNFGmgEgDKdeQobDv91ps3cmK2zUsTxKPCddfrSMjsbjMeZ551F87T9gPSyJABPwBMufojGTd3eTs5wtqABN5",
  "key12": "YwbMgCnUCHNb9KzYUEyP9apJ4WJXCBwJTNM7H7qi9FpFJUJBs12BuDWQ3TdPPUY1FTN257YqZ9S2FU1gBQhXroS",
  "key13": "ABqVsYmGXCDvbtjf9nvwtzntVkqw4BnHnSDkXRXZhfgtPEFWndPctn5ukzc6Fq2SuiSpm7tzAQ3Rjdok8atzD2u",
  "key14": "5rk2aCojD3KBjkxQagKQsWBQPGXbjUA3cb13L8GQyQkRsEoKVZCcDsLEsfm4HdbJbVpVJT6qdddxgeCueMxWsAeh",
  "key15": "27g12vfjvBcvMiLcToZJao2TaXHGheQvVWvSQsLwRFcXw28Q6H29x7G6HYCeRzNKebXYVJjDiyHaDKyxaQJnBPbw",
  "key16": "4SbH62rQeYovTq6HqCsNh475ha2bPttP8eJEzTp4Fg4uqGJvLtscc9NSF62ei1zbPw5A6jVDh8f1n8on86BNoQ1B",
  "key17": "2tS7cri3AD5CKgSkCAfaNufnkK5buafzRJjFNLnhoTtwwWuqCET4f8TN4vXx73UbnWGy9PptNzfdKsPgsoYRdxcE",
  "key18": "TXwjvhT3ksSCV24Fc9uBuYXLfD1YJd88KuhZRGRtqW3bkerb4GFTyWcLTvkfaqj1qQjjU3ySEwR3FtuRizPxuWQ",
  "key19": "2so5CopZhPEMNJomuEXzMaSYjtmR15r7TCNLe73qcanr9UMgaYEX6KeBAP2rGRxmSRtxXeg6qgu52z1nsm4e1wkw",
  "key20": "2VbFQsi7YVmfDiknhuZ2YShq4SwbaEKMekRfifpjhq3Hv6rfdjLFd6ZKvmgYXTGFYGnCDoF9tXG9FoXx8hDcVC6Q",
  "key21": "4fvQQ9NKGgx5wDZmbbDfN1b1MvoCWofj3Yhhh5dHxYnbvVFYNAcLTLFPoWUJipMFjbKk6eq1XNjXpiyodmRhdGoY",
  "key22": "4zwkwW3YnaVy6HDyb6Twep8zGHNtEB1cGhfESqZtw9VsZicn3oPQ7q2KpXNaodGaJAwJgri3bnCn1NU8PWHDquVA",
  "key23": "2KYUJTrisUhGn15rkeVJSPS78M7fsK8193rX8oGThqGdZWCCYDcVW77aGVLHNCCFxsqmHE7qMb6CZLqahD59dwGF",
  "key24": "7zanyeDSCxjV9dvZDjZCQiS1nXNo6dhHZSvDFsXADyyPxBGrTvsCBCShR3ECE1sEKQixwpKiopUt6fa4HvHsyjo",
  "key25": "4gX4hQ2W6RbFaTpPwE5ehEXPLzo3Dy5pY3DLWcuW7JkyWS7qFSQRG9ja371ZgJHP5vdEzwGJPBaBpT3uhKRSFX5k"
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
