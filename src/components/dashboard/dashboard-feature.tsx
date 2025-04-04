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
    "3Ya49z2WLoD7PChWQ4um3A3T9cW2wrqrr988vkbj1UDxgtmdpphcnY3uKJ5kRLGYLLBwsE2yCEMNjYcEZimKU5C5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4meJaCicmNYWkK6UUzELPm3bneR5LwScHxdeSSmUHjQUP91MFNJapeVdjjhtAwuA1hJ6A5sGrEeGr3apoGUaSahG",
  "key1": "VLXrqnhpx5VHZE9imSeq9H9bQdjonFFuKEQncFqTLViFpc9MW6co6t3tBC435v6HDceG1pLrvXow9FWKxWDfvRV",
  "key2": "3vnqM1BREMHVo84KuGpSD4fwCC9VCMMPHRCvDAdNbxmWBK7g8MkfL1oYXXRs79PK7zH99b9B8utCG6JvHrnaZJnP",
  "key3": "5FzhQeU2uV7xZt69BPCGsdJ8rtKSyt4rBLFTyYEWmL2M3GMLynk34gDVJnUYKkrFgm4pnAQW4CnbTcsQ2VbeRdyQ",
  "key4": "y6NGf5BrwcUXkbhU3zuWmNg6Vnx2e43T5rhKXQvm8FTStYvf8eaZkfrAJuw1YfjcseXmkaLPvN4ojfi162mLixC",
  "key5": "5Kmj2C1tjmbvSrKsHisKjRFddFhaApL5cJ73uifhNZCEdEwgF3iCF4JPA9yTDB1JfJs6JhArUAzpRtXP5ZHP4Tfd",
  "key6": "2Bsf7KZJTnZVG3inx2bsaFNwp4JY2fr1npWVPkGSpsGEEmHsQKYrB8Sy8hfJXajWayz8YG9a3jW83Rmbx1V8szz9",
  "key7": "5NswxNfPWAuc1kPK3MMFDi3jogsPP6XJ9bmTfgJxGQuRduZBW8mZfBVMrZzBneYCRnXDsXwrWrg2vmfuv68EewkA",
  "key8": "kBX4NZNsgBchsHFLz2pxCB4ynTP8w7YVKWFmqKTUH9igSfZg5ARYExx2N7rrCMiSXWuN1xHspJUBv5oh49NRRXX",
  "key9": "tkNKrywhoJXTkHynPjWcC41FdyXPzp2RrjgrydiChWKMfWUqVmZWSnAsYqqk9ZZA7SnQ7JDe9M3xVugYHVhDRGy",
  "key10": "4kqQXQVP6j47F1FZbYeiD1uFGsPY4fFR4tFrQxqSjyvc9n1LEnV7AXU1abAaQSG86j4kdUjxEJRCcbDmF9JsxXzp",
  "key11": "4JQcjiTK62Pu54uitnafrVX7KawacsMbKyAC2WHoRS8zgA5EzqTQ9K7NL1GnE4jeGDcfDSrcTabJ1mYuQ6ixdVv3",
  "key12": "3yLt2AyEpUYSaQDJHRufNHViii4B4hzCveXWDj6KmsuY6wQQAM7Kt2raWydpeQv1U9HAHhnkTJcmRu7gn6QYxrxt",
  "key13": "2ppt7aiDqtmeyydFMsyTwK7nYhdq3e6cTGcFHSzcBjURbveWPf5V1X7GWKutFFtLudr2kMrtLLzub6ACMfSZw56e",
  "key14": "PURAxkTqYFScbh8GteZCgCgMBUhDCCEfRehEYHTGwywjajiTGRiA3Uyxn5WYfFoEmFh6zH24trW4H3QzQbGCdaT",
  "key15": "4N9jrL2MaxEWWRQEUAvgBTGtf5ULwVLc2eziuNnk2uVLdwoVRLhyZjUywRptRr5Y2HYVwWpBLrFQTLRmEQvr8Y4F",
  "key16": "5ZdsHokC9LW1xuHuJqzyRHyoVNAcqhzX4x9KUtg1BuRxkNNKu4ez1U46HedTNcYfjp977ZvBLW7KEhC1tVXKy7jP",
  "key17": "3TuA8BA7qwmuibNCxtJNDQhapsHCGTA1FSxmT3q8uwt6rkJViwh1aMCSq4yTYecQxa4dD8UoebPfaXcDHsekuy2G",
  "key18": "5qkp24rhDbQayjLYjbQDKWg6Sr79Kez5yAdQU8eiVKfE7AvvKSA63ph2PF8iPgeNjfqsgUEKBaBVCxLkdfnCS4yg",
  "key19": "59vnh6G6QNunTPXkTVHvWrQRfSixzysPZuNYc3wooJ5VVauPN7ZXxZF5hKDbUz2F4yQpuBcBBVHT43qcYiBUVbh9",
  "key20": "2ePfmFKdMP4XnkuqUeQKuvMgh8S8qopnivokv6Kim1mz76oB7YcrtH9pxXZdVY1w4qseFBhofNFpjWN5V46cW9bF",
  "key21": "5JRBiJpw2MqfpUu35znMnNHksMKA1Ptjxhbo2ovc4YCYbxTb15b1314xaf7mA6cqyonqcspHBEyALBc7iUMcQK82",
  "key22": "ni5R7E46xQHPHUXxEJ4uYticF44gPcqwtPoZSqHvwVPBTdB8kyHC9U9spWMv4B3ULx6U4mZWhrhJVfsZJPrzFrP",
  "key23": "5Ev2EbYtUHMM3BtKApFx4vnxj5t6YJN9P3KfeLksDsephiJwKebu8m9UGYXPk4bnwVTkaghbFdXkZbRpHQQAZ8wY",
  "key24": "23qXRFStmyZVpVRG2DXySgHM7MjQna33fgUZCwZVjgCh5XyTXTuNjUfnYC6Y2yUEJ4nDRyPAL42ZS958CVcy3m8u",
  "key25": "2XPU2NYCc4cny1ZRAy8eJqGiDSWWu1ww37amUzRMm9KtX2SjXTQG8yqbGbatnKdH6WeeGx7toHWBDRf2M1n7xpCW",
  "key26": "4qP5WPtT7dnqauda3m4b7sYFBg8UKHeaosmKUdHmjiiV1Cm4xv8e7q1Ncz5aYf5vCMVmBNbXRdqiGqoq46j6rRmz",
  "key27": "5aBLyhPjNPRuSd4VqfD5c2kx37KwTsWtWeGU9JfLwQUYntU8ML9Y9xKLmN9nrsBtkvKpTh3pFMmPXF18d8xYSY8G",
  "key28": "3uNJghQL8S5zSuLkSQrtCxrdC7Du8UxyoTowMJtzRVYUU31WBHrJ7LcJoiAuKX9vEmMFhkGHycbt6grcFpCoMexX",
  "key29": "2RGe9RBKZKVekYwtk8HGGMa327p95ccrExqCxTWhv4W1A1QAP1DU8vzP8wvH4WokBHV9wJdCHP9ivxBun3HduGhe",
  "key30": "3chaZ91DYYtSj7ucocrDPEmQ2zn3jmXjF38iHqBJMBTXDHW3eppEu3BrbP93QQoSuS5ew86dbDKKXDH6taWTd8DF",
  "key31": "4RwHZaq43VxegDe76RJGb4WSKT1cDiH9QyodN54FMenNHTjq4RsZaqisrn7sEvaeJX9DvaK9QVaeN8AfoquWxdzo",
  "key32": "y9KiYfGdKofeegcYVnbccMcmqDRhu6fiH2Jsvmy1wXkp28Au26oAB2Q8WCbkyow8EnD4fh27Yy1maovypzzfTV9",
  "key33": "yCrBSustdTViQ3beca1pswsjQSEWPwpzWbG1W63cXcdDKPaPRGLRNttoV8TQKx5oR2Maq1xqzky7qMhStFvy9Pc",
  "key34": "vFh8rZTjVn6Z3mFpiVDpc6bFaLKJnLfLXL1m6z6LsANAmFZYE62PtJWbXEkKuf333RFEP2gekzWdXoQTrGVgH6y",
  "key35": "THgoAR87Y4Az7ddEeRfWuRXuQ8QgyhyVVgna8CskfjTYtB5d1qoa9f74x8jQDYm3iLCPg8rT9xqfsBGWFdvmiDb",
  "key36": "4oStZEjdBC799FFLTYbUbsgTke6uHRViw88C393qroRYA8USP8uLE8Cy7KF7jz284J9JovWYxeFydHqbZUWDUuSf",
  "key37": "2zhq813VE5KkBFnrEpznSkPpnkrH7LZ6GGydjbJQPzTfKy8vUqYbgrBNjYnnSvikde8H4W2wnLTy1y9YYeaUZvpk"
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
