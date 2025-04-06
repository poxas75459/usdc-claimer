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
    "34kwvSeW7c9G8EqrbRLKUwDmSdNdZ8jxWUUn2DozYxMWb4H865f5if6hxUN5xibnfzRsrqtVJ135wUkkph6XmoPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DsXs9xwtp4jcCeH9ZvsT6z4CYSNjPCVLJ3Xa6UuocMhxkedjUhsojYvnMDQk514fQtG7rZDc8hVb7yhskeKMVx3",
  "key1": "2b2uCJZ7XyufkY58hkqfbGjrZMudyDUJHQ1U4CNkoRC77LuYNpWXUHGrSGX8UNH5TXamDXma6SKfakuCSBtM2RpM",
  "key2": "4rMCSghncNqfEgBdwALcAXhwqBy9jjtcp6xYMNBTKLNAzSk2z24kGrUF9Lcmq2d3cjCrGzBfDjLbRa612TdrLeiv",
  "key3": "3RzsCxm8sUt67XN9ECrwkR3ZxVVCCrnNfzPKVLHtf4aLiWk1aS14ZKunyegj6xfu1XAuhbdvCsXNvYdYmC7kJ7bc",
  "key4": "4DBP7AfjPprQg2Y33dpoZsdiCCysM8zNyVtDEoiKXo4q2zUyWdEMQUqRx9gjMBqH3G7UGz47VJPRLWBARgFzJLMd",
  "key5": "5j9g94VJNwvZGthX38dyBNi5VUdaovDMvaQTQEzXcDRCjRUji2eyEnvUtFS3QJJEYWbdfcJn63AAb69AwUi9KaH",
  "key6": "3gYnEFy4inS3CWVi8KGY2AbCf8nDBDbaTK8sAAgAFk9ehdAtY8hZDdVqYnmDj8yWd1jDrAEBJCoAfeyw77YLhhj7",
  "key7": "4nofGug7bMnhZB3zwFC5CzoRNtH4Y3uP8y9dCCx4kQCZ8zHRsSmyrtwTHcVkdgczSb8CJ8vUarjnjjPoAZatoBtY",
  "key8": "4g7YY2egFgQhuDF7SQyubn7QxKHKGgUXgxVGnAVXZdCM7rHUyJHLyTXoy57Rq145tgxpM43EBAwMwGrjN1AX5HG2",
  "key9": "3fGtn78zD9QJH4Qnio94NrPHDyLEkNvZbtRgsEQsaYRZw9aKiEyAGDUNLSNfxGhSWC5XDRXihReadBSDrS2bRyE9",
  "key10": "3NkmzT7z88WMW9D9S49tkPqJX45UgeHhe28fbAkXEsfYUsyW1vTbuMVKigLMcKvv4FuVup1FNzW55TVGPtDyrMAx",
  "key11": "5Yvoe4GyEuEDfWz659Qer9yb9LCqFQdWySNHrAWfrf7Cd65bDzZhKmhTvz8P7dncn97L2e7aXpUZYufouK1ynZKE",
  "key12": "5Ft9RPYKVRXy1RQi5k1swHWaLgra7ZsTwNoVzHAJYRjcAdJUfcLRMAkXv7fjL9Hmb561LQDURnRCMwfcVU3Ht4xW",
  "key13": "4KF9naGNjSzQFPibGoiMHfgwasfxHMDHS4uxEHhEduVvaF2zNj18LEcEWuPhNSxaUAWTo4A4Pf4qrpQzkxp9NjUu",
  "key14": "e9Dd1qNx88Xq4N4z2qzfE5d2yesTJtcJXy8k6kBXez5kqCS97pcBazvK1SGLMpBn7UnRSqs2szq67ze9cbGFrn1",
  "key15": "3vbKcxgDNnsamRgFTHFtVoV4TawfwYrpBBBZFxz2GwHtrFNpo5NUdVAx3GsayP1wCV9tdpu6BLZx7SgfduNnkuCS",
  "key16": "3vmvap8as1RgQyfg9egYskimDFLFrHHSNgf1bYFbKoZvgJ2q8vCz7Kej1nLYPMRC8P3ds8ZzEuE4FzjTab8LEG4m",
  "key17": "56h6tW5DjejHDoviLamwcx8osyrog2taotNvK4Q3JCXpb1qTDxsFqWVJbYP18HkvVDQCxUSkQaxpums5n4rNMPsB",
  "key18": "4JzzkhSr2tokr7qRjsNDjdsbHT7s5FNL4vxF44Q7eJPsgdf4HqMVgJoYotpZE9JPVP9EaMaFKqjQs9fKMV6oVcxn",
  "key19": "euPCZvpfn7FSwtprJL1TJopfinsncPjAUzKZVwrQLNcmQAEC7TfdU9ohHBSmpgzhnUTwF2TarwamY5aVDmtpFQc",
  "key20": "4wrXk6BBpwrtsn1qo6mHypuceLUYoBcyHXb2tq4NdcDtJcVUtFRgFJvAoCTxKLFK3fx3Yfm8BjqL3dNmBT7Em28Q",
  "key21": "umF91JXveahVVDxcoNdjG8AxX1L273jK2EHzw1nB2hm2ChQDeibC3n7hSsy8XtwU2xWc8YHsnLgfnvLN9oscCvt",
  "key22": "5YpC8F95xcijWV4Lf6ooiAkAVQ8BZeP3ydpB9y1EbRk8GwEwzkBqfinFj2UE6quAj5UmUKdRZ5dY9sibVxk6ZfKH",
  "key23": "2rTkhVRsc4X5qEDsuACaMLsmYjENdDq47m8CYSfbhzmg9C62UDD2WBB6jUKexiBvd8Chdh8wxjdc6b8xhciPSr5p",
  "key24": "viCQDfsEntH5GozgdaCHLfU2Nbgetky3viwmUtcsweNZC4vZYZnaBdC7zsTqaHTXfAbFmvafs9WiULCrihY3ctT",
  "key25": "4YC3Aa6NzbrKFm5s3Gwg54FQG423cFqELmoAQFRTXUZD1tV3G9Pxu7cHWFGvYhXqfiUJHkFbWCwxThNyph7Ymvn6",
  "key26": "49Lo5kHwYY6fH8GxJjQC9fPVxAKKkdh1S3PeJ3Vv7ARtcn4VCDooUXBanNLqDaSNXWyuKEemv4Szke9ceUCqcZn2",
  "key27": "4jadFpvKACHaABVycusSDaRCWwVVRyLVdKb78bFbHmABejf1cVGkVRRAjmB9prRzvaJcP5HUSri75ZLLz4SoHPEb",
  "key28": "Cfnsh1GQXFHnHXjY43MFoAbKHDUhov8c9cgCzxwLy2JsWnq5RrzxN9seas7spUbTcJVXqUBH9B6pFjqMa4zp3LS",
  "key29": "5ih1mRLCjYMMmq8d1XB7mcRFHYfuBuyJtfbJf8sg8qkT5J5WgYpv7xuaqVsopR9HVx5RMJBs1grYh8ihvwMoiVcZ",
  "key30": "3MjFxPRLrCMrgCMUzyhY1rMVLKmzx1mrQ75h6AfB9MwpVVKRMbyHEiL32XrbSBuLZ7nEx7aDzP1H67nDpFuKSB4g",
  "key31": "2Sd9EFKHSsoecpWBKTDWP3ZqDZKCsUvqgHkhyRu4KBkhSLZ7e8AtdptoLMAJUeC7BHE1VDudcQ9CN1KiJ6REJikm",
  "key32": "2H8TmW7MEGJfAQauC1n9HQDpJ9WLKEGfeaA9xhcq4Le29cMxdRSJ9ngYjCqfiozPebfWVkZd9LyEz9Gge75hNrTm",
  "key33": "4z8Ura5zBWujoDjzToWnLCc3zR5WNTGKhdoiNtP18NdS9ZvyAypQQTQeBSVXHvU8uNXWD4wRLKACkAs314RJu26i",
  "key34": "eKw7ZWGbSLeMAoz4TxBKtSZ3S4gLxpMsQPkkNoZiqNUTe15KXWMRJZQD5rrZGkP7Wd6yzjZPndYLH4VntixnA1E",
  "key35": "4tnk6FTBKuGtgdNMWGXtKUqdpvMPazWZ5b5nuR8g7FBQuKrH5JoFHuxtDUdboyv7yxZuWKSiVezgqZ9wDdxCou7V",
  "key36": "53JHzsugX42gUFGJHw57ihY8TvHcPbNEJ2JKXKktvD2WLj8Pa1beASZDAaZxsoNLCiVkkSvkJP4gUFnGLMrhx4br",
  "key37": "4uspyzJh4YxPZZGjimEKnY8Q1ryv2zCx45C78UGpagm7wfEw1exNn9bfWFQefmRDJABNwNjtP9rbK9C3AAUKshvn",
  "key38": "sNWVviDAH1aZ8bjt8zNwXHwKsn3uAgeJ1eFETrjLKbpxTddFsqxJQqZzbZvEUHRMGtx5MfWgY35EwkCiTzVVJ5J"
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
