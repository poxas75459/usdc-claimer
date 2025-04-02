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
    "5EpAzuDURjp1dBcTgTcPijg2frSVW2y71w8DC8GmpPBLHrDqo8PKyN5VvKS14FgFmqrRS8HmjtFTPPSFx2vKgNbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vZ9wUN3NJ4cQgptcL4tSsmgdwDr287pEaDh5XH5hjvhsbPqR55c6RqJUyCAeyBQdNHLcw1iUSYbnLUpS5FDpVPr",
  "key1": "5PSB1peP48HGBCvBswFJuS6VfuwScWWWLmHZKioGGVg22ZqxcecgSw2Edoy1EkR4aqyNZ7qJe7JZidJSL857tgGY",
  "key2": "4ihERwcigKRZx2HMFTksDpSJrNfPmqcEvkFctcsu8T6SQ3KqCCCtkL1LFc1UKtz9Q6BDL5NPU3psb6kndcqDLv8R",
  "key3": "2BuQ333wEd5Z8hENGRjGHQ3yGBFSdzmwzBb1DHQhdT5iDjrGVb5xBGaHyB6gfD85vDyTHsTYi76jwt3iXExcFoEJ",
  "key4": "ezmx43aNdHVs3XRRzzaV43eNss9FkPdmm6AgeoUf3VqxFETVkeVTMiPHjisowSYRSUAjDXYtJw8oRGsf9iH61s4",
  "key5": "G4xMWmJUCzNQBADFaJy9Utv7tuwDtPcrFVus7o39Edceam9MQ4jzGdR2sdk96BV4aMc9f1FKN94YmZqf4Tz7MYs",
  "key6": "MQdaG8gkjpxRSDRYAASdG7a7GLa4MsSEwXv8WYeDsUqexP41vKTzPeDWudCSdbbVsFdr51cHiKrqSzTqTAk6xPr",
  "key7": "5f1NTLjp39tXGg6MmYM2ZMmW6RYZ44xrXQRgLmvdtg8NCmiYAkUKYegGz7xRP8YeSuKaZCc62kJBZmzMLEsiCo5n",
  "key8": "3QA2Wr5zQFkxSBaSTXjYiaYjydJpTDHbKCzkCnzgZJYBeufVviwbbNqFc8yzo7qDSXX9A9vfsUdjNp9yrjdNxpUF",
  "key9": "3UG3dPdySwe4TmBHt2TX6TiG1A6TAKYB9c3tEifHk7rY8dhMEJ8gZV1i7SivZnA85bBUeeq9u4GnWNfReigim9kF",
  "key10": "5bYoi9sMiDpjy7Ha5pc8dVRc1kKE4ULBzv5RqzMkPXuLTsLBx4XPpxFWGyteLRUGNWeZGc5C3HdgbVCbEmid7pwb",
  "key11": "3qXCQrP4SoMieD6H9BiqLChUdcsrs5ppfh2aDSJuNxahxzDuuwxHapaUDBzGYUFqNKUbuSZXpd8xMyqdq1sUqqQ9",
  "key12": "3vejXZo5DaYgN2s1Y4WPArRa7PArov84T7WFyTHP5HKcPa4yco4KJavmUEwuAGiXAoZgNQFVZ9v2r954rVSoxcAD",
  "key13": "3f9XhNHfVE5YPQTy79kocw2G5eWZPM2pPXJ2LWXAnnTARUYXwnREL5UQuxS2GXxWzSWXqM7U1yzbqY9RkmJibjMG",
  "key14": "4XERLn6eeo3EqHvKmJUYpjDMjWakoPgmRsthpjE75iGb8UHUhEZLJjhwZ8bvxNj6cZN4tJNhHMbiUFuHwxvfQbT",
  "key15": "3S6DnAcNXh3qDUg37xaDXzJvoNb9Ydoa9gxzAzdJ5bPU5qyrWpo7q5KZEGxncG4G8ekwngf4M3xGTvrQtxsvXKSn",
  "key16": "2xWyr5Z2fXu6Xx7rGF5iNaeyQpp9g1ovynD13CJwUTDLkLoSizpF663yVCAZoD1vC84w918ygVNucXZLA5nQ3Vbd",
  "key17": "4AXGeE7q8VbsGx4fPfpkw12KajmmBmEkgB5ReCgebNNv7E31kMeTarPXqm22QQv8bqieddVCP8r372eiypygFHks",
  "key18": "ZFphrfEp1Ag3fqHEbwg7JdfUP1CDeTCfUzkoevb8UpjGJ31VoYDrAVQn5gHnDMiStW9LGZzPeEttNRFFrbK3d6F",
  "key19": "3feE5SWvD7LUVhXocppzbpzBPvy4cA7MbS8SQV23cQjyaptcKcuafer3H78sKhpooVgzK8jBuqubuYbsvj8tDPX6",
  "key20": "3LkPD1Jv2SvN51i47edvSTXACzsHGo4emHWxqYqAWxSQQvm9JXZx5BquWhEZLViCkacXvhSQtX17tLXCwxnCvLED",
  "key21": "3oEMjkbsmo3GJbXqYJ3JhNcpKWhEqFH1Z3351z2M5RCiVrv4AekHZrDEjezkwVHckSv3qm44h9kSjmwk8u6sQZ1M",
  "key22": "2PFoBHkgoZxRwTvy11o5gDByNF67xfPmWWQdACfSU7EBcA2PmamBXMnh9UGSdbCG1seHn6QToP22wYLF9rXTLnnw",
  "key23": "4Ch7BNQC1eMzX1et6tsRgzKLq4wkeLdKUPdmqtYcMHG3si62rfdpAd3AQHSnUaDQfdqFnPLdTdrjxmV5uMtAxhnU",
  "key24": "3NgTdHTyPUFKEPxMytxk26R2tmGCKkEfEmsXouCuhaKA1QLoinU33W6zvFGzH7rhmrbhJ7aA2ybD2YLGGC118p3R",
  "key25": "5PnygdAUJCHFdeKwN6tUSV1s54L6KJxKpuKRT7Xqs7zzmRZmsCgir4eVK817UXf6EZnJ2f8BPsehfffQpFVYYnov",
  "key26": "3Fr8UzMxawj18tP8FNquWagHndLbe5BRZmayvepBviGC1j88bDqhUnysU1hD3Gy2ZH43hCC8eQbRatmC94JiQ5MK",
  "key27": "4L7JE8TLtYX8EYHmufDMBnonQJbyMzJoeFhh7e6gMrkkwURVgQrMo8xjweipfDLJ2yD72Gyt3d92DF9dqaWps7Sr",
  "key28": "LA8GmoFeBE2Ns8BCTeySNzkbwLpegeLG1bLFPXNLMCPLtBTf8rjdsT96cyxZkCnyb7KuTDnJedWUfvSivVM761V",
  "key29": "2vM11v1nN9vXuW7Anq9HwvRpZoiSmcdDBWZ1wu7uBivMfpbFQG2aHEaajcyQ8kUtQcnPaND4tAAAUTATZBGtYWas",
  "key30": "54StFPsBTiTNJY89LxDT5nEetjVzVW3nNB95fLm2NWMmLf4chtNsTvXMjDkaVoDkxb7KfhH3NZTph9gucSDjAedq",
  "key31": "5qcFYtzhGSK45PyxrYZJbcmqtosoSKPNHjXnW2cK7fBFHgiLzp8inSn9SPkn2vg5buYnSLYF19wVx6BenVRHLmfa",
  "key32": "4cQsLmqjurxY1UDxD7KNJa48qgyuXbDp9A2eCpmHQPQG7Kf3NSLnmYEdzggbjXonKmBY1UP3G59kLcjGCi8yWtor",
  "key33": "349zi1vwuQoR2AfXgt9pLtkRWrMH5KPfiXyAbcjAXWkcvAffU4qZg1KdHsyyDQYEoHwmT1Yuqh2MA85syDQC87pv",
  "key34": "4VB1jMd4EAQh4aTAsghE58gHEawWqzZhv583peQ7Tbiu6XkcoQddVYfvoSjJLa4M6N1WLB1bPPMtgZa1PSQCq48U",
  "key35": "2jEa8nfYr43PqWYVyxebFBKzoNME8AD6FBLc2Z34k6GYD4xExTB9zF84CjeAGn5Z8XN6uzU4PFNzWNnbBCfS6y33",
  "key36": "fKWdrDKMgtZovEvinuXDebYbicr3tEnMF61m5A1ZCHYc1PuYMi4qkMdAF9Ny36K56pQPFQCMDv7D6pdHqZVMHCj",
  "key37": "5kdFgq1meNaikrN1YXQFkPFCzvkFu8DAVG4Zbj2V3ToxXXYZJkE3ZmEYhPCkiogX62WAvbmSWMPh8VGrqvGB7LTK",
  "key38": "4mCPwVi3R2T9a9VvhyZoSkGbjTcvQTb5dNHchQXDoZW2wEFyeQehQ8mAHTvV1cKpWLj4G6mxH92MPhiesyvSL9X4",
  "key39": "5eDswLXhiEMuz5Q8ph2gZut1eNvKhFDNQPeMAuDUm44xn6gWkGKJAvJECxER8H7Xy3Bi2hmBijPMpwgernXJtUvW"
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
