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
    "4XCAeokQj6prTpyYinjb7YAAC24YzyZKbKhxLN3mXiGaKosAsSJwgYrbDktUNRacFHTfUEWV7AKpdQM48kyfiWys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cdadtLEmWt8WCk6Ad5Ehrttfnns35j6Z8Ffdc5iqQxVhLfwaCuEujW5Fh1yt4pca11E2v4jZAVaub7La3YHmybF",
  "key1": "5kQCPJjn5PNJKGTaJjW3gKmxXzkZgGCLBCavF6HYQaX3rRg95BuQNL5jaRhbFijRf6CPh5Cj3XyrhUfWn5RudMFm",
  "key2": "4zTwAd4BAYBPjGZhuRNsRi6HDAvDoDeA53C4y4EfyCMasbVKRRv4jshZZ4w2gM3tdYXQyPYZzeZ9ybAKVx1nUGkM",
  "key3": "4LWptEAc25orEMvGoXmq8kRALsjo81jmqahofQyGhycDRp3sdzW4WfDMAJrihiFeBJMQRp3DY4UnzR1jYUjp19CV",
  "key4": "3XgVLCETQVXx8CrHvyM6uYBYbfkN3wotb88MUxsX2C16W7xQprXFjTiSKkq6uwm9c2KUipsUyuz3b3dmowo5gvPr",
  "key5": "37j9TdfvRBtj9wmk4FvomkUhiCp55UBq8wECTGtzfYtEY79uTyE8s2tm9QLUq3YpMFejuUEYES4Hx1oCBCQvTse7",
  "key6": "3Nndoe74CfPmStuMc7PVJHk39FKkEUtNaYDy63m5owERrNwy4THfz4aQjBF8Bjr4GWEwroUSNfgKfb6kUcCvPDS8",
  "key7": "3VDtWrtzWWqpGwybRvy37ieuNra2D5XnP8g9mdPE32DAcwYGgCggjq97eCHct76faAL7RNQKLxUw4UQmbvdKYrbD",
  "key8": "wGwdXZ4rxody7udQETKXggsdBEi4ShmPwRjw1tX84Td7C4TJXgcLggx2VQDKYJBGS5eX6utbck3Pdquf5VckRzX",
  "key9": "3y63HwGowuNpTcAwSycNRhV4v9M7vhAQwUH8h4efWcTRxwSTXhtpni7rfBkZ5xwtbzoYqygyxXeNQ51EnNQ5k8q1",
  "key10": "3C9ZZMZkJC8w6gBbXzYwbPzYe6HjJ2vUPjVcfQo6513XRD5TXJWp6hzwUNUssYa31yJYMZ64pUZb28n4oDedLBc7",
  "key11": "S72FRMvZ8oqiguRkyHsz1c35v8mAzeeHbaA7RKYh6s8qpfQk2h4zfGCmHNvyWc3rA8dmRMBZGZDpteSDCudcvF8",
  "key12": "4pnQWshvjVPvpZaX82RoGTYGDkEeQFpxt89uj11xnd6JGNj49a3tmbTmSppci2w9pH9MtWZ2YGgi9hPjwzEwqE3g",
  "key13": "RzFXR9F8qeBXwxHzuEq1dMA3VdYRaPUbqSVGGhknVnwNa9SmXBbScBVphAWSPeiZznKDwHQNWeY7uYg9WiVnZEG",
  "key14": "2a9FRiPHxFMiBkHmT9JJGJEAa526tuahbMcKDCZFFfw5spdyHfVVh2UFdoXsc9PFsFRVeKyXALPa4jjU34f7L9kP",
  "key15": "2961G4kjTTV1E3d6NRRKBaUWKhNDDDZYm31u2cvqhBzip8gqN1Mc4hrtgCKiZDp6eVMSxAYu8kGfySQzFAmVeCee",
  "key16": "2axT1gmJWkfxcEty9nXNWkjC5BMv2haLd2CRBMjmKNSegi3F8dn14MhDetnSDVUKvhk6bnQC5gQvjgmPmBdDiGws",
  "key17": "5RFX4uAr8nd2uUyKfqL96QaQsYk5yGxvmicnBPiV2sdsCZE99JLmxE6AiCmFkbqjR5gGqX3JQvQaTzTDrdktTA4o",
  "key18": "36Hx8BU7QiNN7yyAeTxKZDinMSGAqpz4FWD1VmDjUAyNjJ7GGwnerphTh3wwrLQ74ZNwvtLgXHruSMEbtep7s4WF",
  "key19": "4Q8b91scrEMgf3kNV6qjHtuPrgN5xhwXon3Bc99FAXAVvKibw2yPyxP2WSGLLozHYu5W1j857X5sSjqGeeJvfQz2",
  "key20": "XH9NutKVTWpLWGWShUifT8C8z2waQYb8H9opNfjUDKQSQ4VZu75fBTfRzLsMX7XUaDDWdTNbkyY7qhwmv4fxNYj",
  "key21": "5B3ssqWtTTbsABYwTpKKJkizfk3hbYXC3TWx9kGMFbumwJYaC6b67S4E38JEEZ9Z6LQdHy4Rb3s3yq92ToECYZaV",
  "key22": "5vWAB5xBX9BgvUaYVBjimdazmvMZNcFpVMkM1h3piBCaPTktRLXytC2zgCd7LjmENSwUY4Ww2PQxScJiFsd3jCZR",
  "key23": "4fTRZX2BntfTuijpkNRoM1Qy2TyAG2Z86nHKTb239kRp4WBNew8dUzAr3Nd39HRujod3Tqx6FxxxWeBhq6x6GGBa",
  "key24": "gbLk3gneTNLAqEHvkZqYNmjnC14khpY2xMRt9wD2fsEJkk2dDX5iU5qGUdgoKd4yJBKc3vum67UJtJQ1mxCmRSX",
  "key25": "4QqtyGStgYnYKBeSNUE2qAPaYd68qZDjxzP9266w1T5QqPKoaLUtU1AR5gEWJXWtQu8FjWmNAttvbwDczxWAGnF9",
  "key26": "4ptZidCnPi9BEGDSMubusmuegzTyEfrXEbvGEznmTFaQvDfDgg5tJCwPcnk64k8wLUHA28AcS1d1cNhFhTZrMpbD",
  "key27": "3SBQ9osYrNaUZd6FEchUFkNM3esQ8KWMZ1bWiDVaDmpWxYrRoxEtSRjK9PHRcg7p2GPsVmCUa3f4yRCVnHBNAym4",
  "key28": "3NEWYPTay53qdXqDwXb2i2wnWcbiPh8pdjEXD2NXtfoWbYq2TuS79dGvKojnMjgCp2KVepmG4wvyoVT3PaXoUT85",
  "key29": "2imtWNyQwjhmJ97YK63dnAk2Hs7AQsjHbFdatYDCxc4BnsoGQn1X81rDJ613qS7z9xUcx49Rt8kZSSZKoRiumFe2",
  "key30": "5mZCnU8yutnZ9XkcvvCWJquYjGRaSbYHMUzhKbmXmWqQbFAYdHcWxo2ziW5UyneygrnTKhMpPzLEdKKBTkKX5C3k",
  "key31": "3fhy9ci91CTWSr1v2uk3n7f7MgrPjRHHi22k4eXwkebaBTX7Bhchz6ubjbd6HYtNLasCqfcuU8C48yG7XM3kMvuL",
  "key32": "39mytmcCDSdvnQLYv16XWyG7p5zazcbu5bs8vBHLpFiu72Ssnrtv4KbHtfY1oQUPHgtixQRketZ1vQfFZnQs6Cfh",
  "key33": "c5Jtx33qWkXQ7t48nJeBkm5F7m2rCTtzgL2k4N4um6jvwqDUvsi9DAJRscx6hFx8pJ4APEfXLoX5bMThfQVDyjH",
  "key34": "622272G7GoFK7X3zzKEoivatQSvLzkzQ4qHMZgVNJwLXAyf83No9tc8hw8kv8WpsYMmW3kyn9UVHRHz6oNPJeeL2",
  "key35": "4CL8zQNgrp4y7XR4qZtAyHXtrVGzLaoeirp82S5fX7GVA4xxuF8ccVyAWYEsvzhCFiGJWexWVCp9G5YPVesgzZDC",
  "key36": "RQaBWgXL3SD8LxxtxuYTXmDT8kJ7itiLMFsxSLgTQHo77KVsFdxrJ39aaQ6sH8vS8XfKFNR5PMMgmmkZPEYafsj"
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
