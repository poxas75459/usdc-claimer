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
    "5RCNpEkSXke4v7tk5hpRsKPEWkMosza7L2uv3ffgh5Ax7zJcsYa2X9mVo2udhYcp2waUPXDcqfcmGKFdrfmVt5V4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55szkxsCUU1s5gfmjgyv3JjX2A5P9TAun1k6jmBVDux9H6zj2N1NnaRm3Vc3UvdedsrqB6R5SwubEgDnttG9WnoT",
  "key1": "yThu2pUh1M6zzMRat37X3GQKYbeXPBVvVnE7Cbs48dugUARaou53hR39BVhjTwVAD5vh4KdX7XQKDy3cNJLhFjh",
  "key2": "4B81K4pNF8CgmgF82rqkAGA8wBWULXQZbaGhR4o3iChkvWdebyRA5fTa3QJYvCzuHd7d19Q9Vyw9xbdfYctiS6nK",
  "key3": "2MdprUrsFPEXbdWkWa3AEdz9fapiTerhRkYPWDsww6UnijJxPDnHUUQJVnY1UVUnn91Vw4x9rPjcNzQctr1bAaVL",
  "key4": "2hJXvwPwrpvwb5ThQ36TAbUgVHnJ3L26nZM2avQCuJ8UDtgRfX3dMGrKzwwTnXuXUPo5du4qEWZ1V9BcwNZopoKr",
  "key5": "4MKs4SVvFeCBaNtPWFhahfC58RnZcGxnGJY5Tidft4JochEjt8MLY2kZ5iHD674RKw46zWCitgSu2ksXUcevYUp9",
  "key6": "32sATM5vFZPTRzLnUQ5PmtJtCGqfmNpM39LF8Mj6pZSBbCCdEd9yKP6jGrm4VUyUSUjEbtus5vBogYGQaeUGCtR3",
  "key7": "5YVsr68p6y5srqNfCLHiAGpraR7ptzkDHELpGxoAE7iC1qRYwh3GmEN9uL6T6bATK6v8zXzBFsttFKYjARWLPoRS",
  "key8": "29hTrZ4YrqEcJEYNh5htk7hSb4ckqDddZtbCCm2J3vtTCyyiDTP5pBF95DdAgH86grPoFr96i7rrb9nTUhcWCSyj",
  "key9": "4SnqbDNDLF2eR3Us6ViDjuyUMnb4yYw3qf7kUc8Mu9sawYF9jejUnkrjCoVgjtXmJQnGKBUxzv7Si3yammC3aMXu",
  "key10": "4pSbKk6o7KLoA9U8qsKF2SzHcNZkXK8YfdyrbhqNmWFykXrexTcXK7e5sE8cDdg2gm4GSvkf5mseNx6B2naU9R6V",
  "key11": "2zzWRgEvhe5fZPVXfHzYhMqvrzDrdUssVNu6G8Ax1M1RJLA1ttGTCHGN3xxxqTHhG7RWog9FZkfxuF27AKGyvB7d",
  "key12": "2hijt7MakJ2qg6hfeZgmHPKdBn42ppmHf5hgfCEr7B8cn8kwEKK9rZeC4uyaaB58fCBP4u12u7waAWnJbtoS7AtC",
  "key13": "641MhJEn2uhDauogYPePgxFv2mDjuxz8XhDErDbng2sLUFgyUJbtFJYf65xoafTSwT5T4kxSpivZ3gw76ZriKgQg",
  "key14": "46SJ4feZsHqoNHfHf7hTriVRbe5t1FW7epv2ouVPEfXW5617JkD5qugRHLVL2RnvVyT7EkD2EiGau4zJGeJYp1eF",
  "key15": "2Lpdm95mk5rr2gWcoiHRfRbNGSx8hqjS5YGtBJecF6ZzLDpZz2SNWwiCKinu9UU59exrbZJ7pyVCKVmGZKSA8Tbv",
  "key16": "3NWFne2UBq5mD4Z6NpsQeCTbGaCwqtjMRptZ4zQnHfJJWhLkRQuU8s21tuWsgwYztWKosg89zoqzz11C3ZVvYxNQ",
  "key17": "5SDTnxeyuyFpNzgBeXmYyRHer24N5pc8LhitEfFkCK2Mc5c9B1S35iN1Br49myVaxwMHgE3ezJfcam4q3UbnnsrY",
  "key18": "2enKa7mcXEsocu24fXCanMcwXnMkmXuNMb1huGrgz6odKU6f8H9nD19REZSw1nP8tCrL2GSSG5G4vUrAkJKTYu2b",
  "key19": "4QNQcAZy1AKFUSF1pcsX92quh2Vu1kHCe95vpPaQTgeUUq9b8G2XqLDrBecdTfbPJQw2DbVstZBEncTbU1KudqRP",
  "key20": "4T4UsnQwkRq99AcuTfdqiLGQekT2k2oca2e6NB34xv11fuE53hewFwQK8xR6c2fvBmGppcXJ2rjeqSD5ozirpE8S",
  "key21": "62MiFuJTCNH5cpiD73Y4mbhBZk1YA8G3t2Hr2rde3ViyAXkqkgaqAK47znhVv3wyXJTwRsDVhmp8UnZoM8Z8F41h",
  "key22": "4mT5oAiUqiCP24mRj2qBaAp7qjpjJdzgiy3VcDGcd3KbWX5s26RvCAmNXDgLPFsKUkRDnww2mFt8iVkKRXYz63ji",
  "key23": "5oJgehqhTDGnCcwhA2zNjAKbda9bR6E3A2sjAVjeCh5fjWiiKqDZCpztNgqerfR9G6A7Zrsm4hke2v6tyV7cSSB1",
  "key24": "3oEXAdHFPe9ym75sy6LEnMVcgNSg46xqSvYMK1ktdTfZsRu9nHAyr5kowoZDsQXD86rhQaxtmu9G163rXi1nacNQ",
  "key25": "375mG5g97LLrnAUxAaCBir1tQAx84kHMCtzxgEWWy1saG9Jh7qPqreQS2W3rvFtSepjUs58v8kLAcjT9EATLtnxZ",
  "key26": "ph19NtVbdDuWnrcXRxvNTsqyUpCMyztvu2nreKuNXDZVxief2Ej8qJztPacfEpqGFoBFohw4jht5NHatsEQsxk2",
  "key27": "TfjZUzBxywZTeZcRdiAuhqQDAhHZeB7CpeFJoUb7zQA6mhWUeFYnq1TApdL27v2CRyRbkgNJd3T8sJAy8cjTzes",
  "key28": "62QCNSpUj7BWvTbNwcgydTdiSSZgh4DWqLjYC9gx19EqJ6JapWnLWKBZA7gUkhjb7F5Ld5fT5JVBmjrdfemFTqcM",
  "key29": "26voonwXJcX5k3vCZKyKcR51ni99SaFZc3bcFfjvovErWWYb4NroMAR9nRJ7ZRPn992uXv4zSLXtTGE4HsJ5Fqm1",
  "key30": "3jkh8qwEAFYWGLCUNWcxVW78bRXyN2brTGUXLozBTuLt3ZFZ5ego9wnop4ime4Ea68bC9SkYtHyryiqcbTpttTsK",
  "key31": "tus715WqUMTNtKXT3vycWLBAQtiPr6UM1vfMn7f5QDqrrRBEwpqgjepau9X2zCorLU5ySY7CDH1STgXRMZkBVB2",
  "key32": "67qEwQbhyRgB49ty3yaZxjYajcn3f6zPCQDHWwkgcCE94QDhKuzi869RMGiLZoMihdhretfwgx6kc5yD9mTefxBN",
  "key33": "4MDL29BcUnLjDtg4M8vb9B3ZHSLNCtuqdoQtQdC33LQBZbDAyiFViYKUPWNjjNjoxJT73J117Wrxixcb8ZSno4PP",
  "key34": "53w3DUoWhPFSFCDMcvic6feyBXou1mXRJPDXKjqevdNPaY5zySPC48xrJaaCWwwVFcxNdRy7L6adxB7bU6zV8w21",
  "key35": "646V4qWXRMZtJ7gxxXFYEp3kow8X63njm9VAecLeHGQvC6gVaomVCPngjjVXfJSeEuYjiVwzR3WRLBKXfWAMYmPL",
  "key36": "BjrcbQ2qbK3gz8BWNBDRvvvhg16uCSLDSx6kNVYjs5DTAQn945srTus9yhqRyxGjtCVhH6P838cd7b3y7mRL1NL",
  "key37": "2UDkBUqyxzP3mEGJF4fPuy4WGjjipYYRWzHU7BGgatos3vyXwta4BjXFdCJg9C9YbrepVBw3uxMfvg9bZ5N5PY13",
  "key38": "3g9KaDKLNnNXWhSt9fwwdz5KeazNEo1MT8keBnDAkGDbcG9DE9ELT3vEXU5wnzJqcebyr3pxH23xA7A4ignTpwdj",
  "key39": "4sPrZ7BVNwC67Y27fha5XXwPysYBNSHk3vgUSLba7nZNKuLvcjnJPrM3oiPh2WEz2YqvLpVYTxCrf1S3uMMC8xg7",
  "key40": "5ed2tz6W69xrTqbmVvSifiEPmQWBMbBa12GTy7E6GBGvdCDWeL77jBrpu5rp9hVuUwnvsswo6d88Y8JfZbTmk4eF",
  "key41": "4G5qFN9BVbrQxiVMpj9L35aX1YBm3CFyoLHkuoVx6udp6Gw2s7iJUmTwLMW4PpedCG31dN15H2HqNLPobHo5kFtY",
  "key42": "2WzWZPRL9nQPBWrkzTSVrrSZ8fLxNzbCXoWtMy2828UX4wj9LYns6jvY8a8ci1eaUjdbFU6x7gWbFieu3XonrFGp",
  "key43": "3s7AbVx2gdmVv4yyrD9fSQxQbNKxhc8nonx7Jn3AmfjvoBLPd9BcgmVcxqUqiNhWRspBVJ76nYtstdUroeHKKVR9"
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
