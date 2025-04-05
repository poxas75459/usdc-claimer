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
    "4Q3ywwB1eEwmYgKeu7E2cwCSc5sKgNxh4GpXBTb7gJCjg6C2199AUyJFDpzCJwD1QaCKAt6r5s1quiUiwbWbGeNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GXAjVtXzVUgyG29q2xaast6PFDwp1EowACgU7EZHLLk5yLt2ppEiiW66PSxa21U2zjWeDsr4Sh2xLN3kFHFQMF9",
  "key1": "5u2T337ccRFyq8gf7KPKdmexnvJZCPGeywvppaphUr7fxwd4PCyBmzLo8fPXSbLHrPZ4hvZ6G7LwLNX5Ew82szhL",
  "key2": "5mcUX8g6MH68oGfi1tYCaC2yuyhF2jCXZG7NgEMCT54jbfjNo9Xk8UuzfC816uLJfrrGyG1aZHD9cZisDTze5RbH",
  "key3": "4qij97AZhKhNrm7kc3u7nEiRGhoydWDnRANB7hLAHuuyk2QgbrqwU4g5SUG6D7cCEbzmMSEJxAE8DxnmpgUUmGwj",
  "key4": "3kjG4MNogAD8Vj38PPUkR2A3WeAEowJ1UzXDsEg75f7CLnMCYjVMeejhhXPBASEJDnSXKuda7668bPqkua3Pp31t",
  "key5": "2Uq9woCWBaRPgKKWK1TRTZoQNDKdspibwqqHQryeovCudEepEq6LrQMArBtuX2cK479zJYjU1hZMF31pvDSGrhDM",
  "key6": "4jUJFdJrZxmC6b9FDUsmtUe3dofYYBAHgVKGXwHsCduRHmqsZ5AuWWqCuH8xoYMLYRHzHR12z3DRqZVdZFEHi22k",
  "key7": "3L8qLxToAL8DXtDWnkZpzrtzZcsgXCXBnH4zJxd9f5RCmSnyUxCq9PcQGBJbJFJKemMnLZwKgkDrmmfJCGJBxCm7",
  "key8": "4oM8wcj1rpZN2jYEHtQRkT82nKSPwohXoZnE9wziL51ZMiGR2JqbWDFhBSCsx54Zvqmz6X2Gi5e86VJHfhGYNL5",
  "key9": "3Ta7rZGp5xJD8qW95QRyXp84X2fyYUEkcjMGGUyKxXkcvcYB6zbwAvwgjEJuheSxPqui9antPgy933V5nBrD2DYh",
  "key10": "3n3NWxTNyRYpCgQu9Lr6RYuFcLTPQTGYWzWyYzXAdC5vNDnq1EK5hZErJ5vbobjWeGdopgva1A7f4xC5hf5HTvV9",
  "key11": "2gu5qJ2wD4DU76oUmLtacSzkMaggJjHqnuC9s3aSYC9DWe8PQ84k5KwSkFTM3LprHULPYjokqAMh94CxyUGvJKxL",
  "key12": "3dYr92tep3RpJQxmzEuykz3k7Vtod47eJaEWdNDynh3k5VhFGy2ynQm367mWw4tFuoqwncerawz7532GbXzCgnQe",
  "key13": "WYDCe2iTaw2b9zH3zxv1maCdkWtmsEWcj4h7gTALr6qf1q37qyu7uxkxWhHmqYghcANvWeM3QGmY4Sons1b3ybb",
  "key14": "5GryhkMaEfzT9T12Lq2DtEXrB2mkBnVndyhmptLnH517gcS4RK5Ccu5HkXtXkhzT1YNaFDvQ65ZpCkjpJU8skwx3",
  "key15": "2gYBwXGN7y6YLHqNMwYArQrKi92hAU1JmkkkomeCACW7pJJiHBgr3FRRChNBWaxJeJVYDnWFDEYxTmD2c614qnQP",
  "key16": "45SmD64ZkTnuNcDWxLkz4HFzAWjkrS5uvqj6UhyVEoQEWQhkTaaJfXCWXXnJZa3MQS9NKypwxiNyRbAQVbwUgrFb",
  "key17": "5LwaFtLB5zjWv2LLjW3LPjQMuJwYPx5qJ3LXSyeBfYRgPcioDQbGXSdncwZts25K3iwEaYsmKQXXBb4xFd91zBQi",
  "key18": "65U9xajpXvVQS7sT3hUPEaLQipoVB49LAGxUC3BphABE5NrHJJ85UNfn9MB9YUC5rxDGNZUeXHgkb39u4ECobkmy",
  "key19": "4qVnX5VxjzLWnLT3F6nXHKuNFxhodkyiyYdUFx2raL61dpnTFkuPNqefhRBc42hgos2SXfdLP75Vp3QRFRKzoMVK",
  "key20": "3cyLd8MmRWoD18tR5JL7xKCzrauDe7DKDSNig1FrQJL2Rvo8VHH3KZ5wVCHnu4t8QZFWuTNJ6fHPy92UctfrQsem",
  "key21": "3wsXnn8QZ1N6vyEPquC4DHERas9EGj79f2TLqoR5bFL3uWJ4DqTy7DRR88K5obPxga77eqijbfA5uFP2MSph2HQ4",
  "key22": "4dVVV9HBQS6S8Fkpdd5WUur5kXrL6vkTHWdB7QJ8bUTsek9WZdkTBhNjPYzrYinQAZ14fwpwdReszNPAwHtfFpVc",
  "key23": "93Bt69BgZF1v63i5HC1nRMY3kZe14qwiHmqbgn7UYqFzLsKhoWQS5Lzk1WraMckN5s2vUbFcCo6fQS86qExZ8xf",
  "key24": "54UJ8G5jbA4vj87pL152woDLXN1hmwby5Qub2HyoPoXPkDQUS15J5m5MbLRAWrreoVSTnLwnGLux5QtBrBMucaTU",
  "key25": "4c9WbsLzyR7rbNvEAbTnrWDqqqgtrJ6AgvRMLFZUhpiSTAJJDHbqnB9iTMpiXJovfZiowB8ymL9dY3NqRthouCGF",
  "key26": "34ion1Fn6Cwg2qDCkYT958rScAzuHZWroXykkLbzuvDWJezLkjBs6fdccaekkrjkmu7AwcTGKGRxEo1MDwgyEnXT",
  "key27": "2FRwrvGeHrtnmiqQZ7Y9AsxZDpHZS4x3Nu5s8DVY5C4f63vFWiWF2Vqa4edsLkm2gV3Hn4JBQRSV5eURzm4Hehnj",
  "key28": "2raaXTHoC9hhvCvrenjtJ7Jm7nk9mkYbSBXtroJkfgC3iMMyj9CGDg8PQmzoEGcTezR2qkBMKmeJ3H9ZehBX5ei9",
  "key29": "QC8ybWfRxriRApWpEeFsdfR85QvnK83DdvqwzcnJrgrkF3qf5RHN3c8CMFaV9cHSrzrgB5SGEabAey2CjCkM2J4",
  "key30": "4gnKgb4WsXuqkWwvNyA23KkmZ2Y7Vptcor1wN9GE1ZP9qB3B9gmDZCFquAyiuqHazg98Fc2dsuMRn5mJdGijV1dp",
  "key31": "YF4vG6HFGspQ3YAZYSEyR7cToswYoCghhcNL95q9FPPj5ma2ZnMPQJtTXWJBUNPQTJMRZ3EbNCse9C4Kes8FWz1",
  "key32": "bFg6ewGrRduPbjmtipeG4YdKSYXmoABw9Hv1c4RXjBVoUTuHBtHEA5xzhfXs9Zam6XcUBDg6JA2Wpjwgs4JiZeb",
  "key33": "2RqW5QghnMgqcroYPoK7cjTvFVQqCaaqxhEsAH5Rzjr36EuqDTTkexLV92zbfvxsk7wzMrtU3S4UeJEx899JK7AE",
  "key34": "MV9f4iJfC7RQsGFcpCBvA7gnjdPB91YVbDN6mLTP7LpR9tAKPLUmS3fTCwwooUt6JA1DWaKKMJ9efhPb6rEEZXK",
  "key35": "2AFj3f5DcXcQtPbUtFcvUhqEyWmV8Xw1vXnwBsxHSMwqZ6jNNTxN9qQBxV3owb5faDCDtkLmVL6wA6cXbeUw8yAv",
  "key36": "5uJfqG6hiMZwcrpavDTgcuMsMve7vgEmLXCSyc7RCroWrDgH5XVeZDdJ9VNUnC83FRCtdQ4gcme7z37J5JNcer98",
  "key37": "4GCrEJnqNDF1dG6q1DLaYY4V7UZJS5ihQjGxje348b3JBPU2Qicc5UteVE6xwygcDV3VCWAQabo2oQr2zsErCRkM",
  "key38": "5H6iM72rYimsnxMFMXYPT9bkuuFbFVEtLZ2PJKQ5R18EgsfJC9h3WBeFChwpPLUMvDjnAjMF8mUSN7pdEeTvzLoL",
  "key39": "v1Dfzgmg51JQUhmXXEnTsjMgh5aTfsGjdxJGyAAEmx9aYCo6AEe7s8cUhDQjqQkbAaNPPaBLXg7DBWHw9iTrsP5",
  "key40": "2R6tagQg2C88U2gwtgribc2JwPbo8t7pdxRNC7nu8g2aVFhWRww8v2ghyXPLgGp8sap8rfTmJGUzQTtuuMWoVbDy",
  "key41": "2zdf2wiutbEdRk61YPWKDzpFQcVjzQJTMD6SQaevWrdCokQsoZT8SY4yQTtHuWvvhgJt2YdUyy6UM2786aSmcEG8",
  "key42": "4kW4BFDQssBxCAv1TUJ6qtKNA8ou6CZm1EWHpKotjaDhUFTj4oZbB52HD9e4Vacciwhq3Gmdr3uwMFKiw7vet12L",
  "key43": "5iTqfj8HVbcgtRduqPer5sSNSMUFauvMaCsi8z372HHW4C7hUjLqdkKbAEaefVg1ftx8QLjhJFYajVTXpNsQhLj4",
  "key44": "3xTgh26k4NsY4uQ1yK3D3A72jNxC2McdEtVqhYTud7xXPHo2EKJ49ZiSR2Dg8kY6eFWHKpvvPAbLcMTsboby51B3"
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
