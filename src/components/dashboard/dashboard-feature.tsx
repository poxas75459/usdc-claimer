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
    "JpMeVVR5PmStBTXDUkt9jaXPhvDfy1EtByW3zufBH7aCQ8esu8ZPjv3S6zvRx1o6qjKwu4ecaYxHa6uovp2Q8yZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VsyBsLfAXT3YtBpRATYirmgTqucBmiyfnfUSA6jwjFDEBageqB9GTH7yPTogmhFN6vuk9TxdeaNvZqxWfi1JUwh",
  "key1": "5hx8sLoQAkubRTXGXoV1nnCJVMnpvBVBoweksY6tGENDTNtQ8GnkvmuJvXYWTEKVMJWtKJnwfUwRZWtvVxJqicGy",
  "key2": "2r61gxh9PU4yKRqaHVbLY8a4Ze463sqkhy6UNbAvWuDmdpCCwDiJUkmD64SpwzW6g17hEyTP8GKLVbjdeYPFW2ST",
  "key3": "VnyqW4ATHzmk9uhJNkFsc579nYWfRpKa9GntRuhxjU5HMryNQko5x5NZ7z9fhQ3tkt5dux8BTWrdnxAGHNzCiGY",
  "key4": "4TVMzYPqq4g5NZpQymAJjKemuJa6AC62KbDbKqUxXyVk5Rn6wcd1ScHsHSU1EjYpsrspFimGtGeKwFRxntzjnbou",
  "key5": "2FyWqQBjQKYdB815poYuTaVWgs2NMMt4TRYH4ejgCA7ZPieZ5Fx15bBAYmDQ6FhPpnnhmgp3VhDr71pn8LWVLF85",
  "key6": "3pWS7tfJAN29qECFBVTjncdmUXytfgfa1jkd2yPGDsUuyde9z4zojGr996Z4kBxDyKvsJbThQcBBxMWnbZcCKkbM",
  "key7": "NCngY6y4fPpzkq34DNULddbhmi4UDPvKWKUiKT8tkbhCMbJozZ1MktgWVynLDW7E7ds4wZo519B8PEWzMXVb7Az",
  "key8": "rdpBf9jdwFZe83TwfHRaC4uRr8NSv5rVFCcSh9TuiFrr1rDCoTUjE3e9CFPbuv5YPKZDvRxbiCNpFxFFzVSm8BN",
  "key9": "3atJzfAHVe1bP7fVgw8nkE3sbkfV82WxqFqe5YjKYuGqZVfkmbsYdNANBwJzG4mzSDjamhasTnWJ31JFynYvDZ34",
  "key10": "2zBEAuZkdJptttjXKzM8RBXpZkFyxBduF1Di4aCVcpn4xczV4gut1coAMASewQMQQVcZncZYuMaHRNb1wDp718XV",
  "key11": "2DWAypgNx8bTxPoPN8VZvBst5tUdMmjEPf5mJuvEUkXA2uvsjHZwDE356znckXmsdHz4Eb7m6jakhJ2AqqUJonP5",
  "key12": "3haGq5ugxcrTD6L4fiByDfrXDeZzMJCNzQf4PV2EXL1JDf2r3SNCUK4HUEM1aT54F4CuRvzjSPKNAitA9HQoLH9S",
  "key13": "2QcPcoRTeGfNiA7hdLkLphnDhy7aTCP9SbJWipBYreZaQnaFf81iDUdkU2Wd2DuakC5jwkhUQeurE641zvQ58ptg",
  "key14": "2rtSgW9rwpciMU5i9EtYPBmY8HmWoVthdvmzHMcghDyxfEeBE9kyg9wpupZmHRRYZc5S4JxY4mhFmZv68zC3GGa",
  "key15": "3ywX9wqzXgfbUe21U7oujQvtynPuGhTzB7hgq1ZTnctXtvcWTa5vhfMQ8zakUFYARqBFPFLs2gxE5B1uZrZtNBmi",
  "key16": "vP5J4ZqcBsV7uhtrcQ2F8m5NkHQEbgp1RwyMZ6PH7c8tqpMi4dZ3GRtScopxzWKQuN1a5x2CothMxJjUYUovudU",
  "key17": "4V8gd5wPS62AEa1rCwQ8owj2yeoa2Acn4v8TwHArx9hrMNyZPm49mbchkXLQ4uMPSdGy8PEXs2c5thG7sACjWvav",
  "key18": "4LXWudCGy7PbXtnDggGYgWpTdX69u3AXjSsf86WbdppXGgSoA97GYdHxTG9ZtFP4xMzrLnRgSNWPqGxXBVeuQV6A",
  "key19": "3HD3d4QL4yytCt35h34ehPgZX94SaD5DDYqS3W3hVsh9Dad8Z3Cj3cCfgHFSLbTqgJbGF4sJiTKoWbGBP78ZM6QH",
  "key20": "3qCqBwxTRTGg9HaBZGjn6jbPrE1msUXaBcLXMsHAQoXqGCgcXJd7wzoba9QGQRD6tfGGjviX8B1s1QzyJ2rmAwq2",
  "key21": "2b2oFyLUrHu4S2PH71YbWS3K2PEmTmoro85erH2EUehHE69pv7ZiW7K2hrcSJrcZFDznVvLUBAW1pW7z7KUnSJgY",
  "key22": "32TneZtxd4bdZCRq8VjbWFoGqXrHNS9eB6dhBtqqgBGi3HwmAYRpXeD8YuyKhgTghdceZniUFdB5RQnHDNjvkGk7",
  "key23": "Ek2yZAwmkG1b9rfqjE3Ra8r5Gxsu9GkdvBixvNNN9v1KmsBEHGLABGUVdkg7bZDxA2LbJVkBQ4tfA9aNbZapxND",
  "key24": "3gDhkmztTxFgFAeSLEAM2Co5qum7neK4vMAx816uUPHgP3BNDedUGRUPqeCWTZ3xRHZkzmsDATnSbEDdvkx477DX",
  "key25": "4aU1rModo2Uv8Web5JNPGtR9XurRX1ZtAMc4eSuinNRpRPjwrAEjmw1RboSMmNZMtSCqaKSpfjcFZPHCVf6894SF",
  "key26": "4ugKKVq4TgX49yLSdBXstk1izdwRH8BF49nBmWhoJGDMiCR5P5Rd4J4deDDkQzK6kHdLmJ6XvawNcaBpUhDwNXE9",
  "key27": "C2hmAXo52xvsNL5aZzByM8vpj2RwfrTVh613yLxrm4QGEhqByy2rjUT1om52WFjDBxBVxahFaCGQh7cx3TusgZJ",
  "key28": "5j6TKghFAdwKGfkR5tzbPDvUT8rtVQ5bUHqDzMdDSvuNu46ZQjPrRL1zAiH862E4DXGWvbTUjcdx96eDP74e27GP",
  "key29": "5tV2yx9FNyCSeU62g69Nx9S33LXhndd2gy1aXXKN8JtowTJru36oVxnXVaPVU3yqkLPvxqHCrrmogAZjfak9FdYa",
  "key30": "2vyoHcWv81jcsNCJcr2nKD7YFXYbtHFtt6RmfPCGsK7GW1NUquirexU2WQdfCBvoxm93UuPNYwob3WC4tJTR5knb",
  "key31": "W1634pp1QQPzJTzhABbBPJzT5AGYHDcngaCibonnPCS1GqXPqhQXGXKDX7SVWimo9jSPKZkMmLACYimXqX1FPR8",
  "key32": "5N9DPjv6HZ7UxhWK2axqrCnX7RfFVLfC6yPgDk9i4CEP55Ddf9oxuZnjReFeJ9DU3FEfEkcyr8YFNgwzJkcppvhV",
  "key33": "iERErbzmhZ3Zxn75k1rFokcxWcDZB4SwjBYnmFTTaZ9K4DnfMEGGtUYozYH6afsqtYE2f1VAC7Lvmk7SfAHNsB8",
  "key34": "5peJyCJdADMow7wPvZhiHykSCjb53yxSg6yZtRAquJn7UcbmkkRSkF1hnZykznFzxwLMfVSu1QpWpiBiHdyaghtn",
  "key35": "vsSMPhnXQYKNbGCnoYiJre4gg7qfDZc7JsSKX14gWLxY15YUCtU4WfeZHJzzemtJnLy9q3nbc7WSV3y9pXQDPzB",
  "key36": "4hg9F8x4fbeuvV9ebCusMQ5SGCzp595va8vnYsYyTrcAC6G8yDssLZAEm9aoMhZr8ddF6bC8G47qEuhQtf81rHaQ",
  "key37": "2Fxtk33H52kcmAAYT38aG1xAZSHnLeMid8bSDL4QFQYH34ZXtn2Dr2SxPt4LFnUH63346SwyGidNobt7kkZp9ph7",
  "key38": "3Vi76zQreT8beHPaALBo31Rypun1dF4FBVkEg6XBojcWugRB5csg5F5iZwc1nTs8BLSHcBFRNRgJDPw95w5efBy9",
  "key39": "3f9xTtmLatVtMs7zRngkhyepaPmqpddWCnuaiKT1tUhwYwpj2UmwxZCxpCFwbPEs2CnTCoiNb1tkCh4ahR3GuNEz",
  "key40": "3YJRZeUhzhFxdPSqBt9s8e9J9j72Xg145nH4ucx1nbCvZxsdSNemiTh6bYTdQ8d9b8M2yvvBYUtfUaaSX8zZC3v4",
  "key41": "v9ZrkKmJxG5XnqKvhPJ9HLH82SWCkPY22pAt9CimEDfANpK1LErGtyH9vNFU98WxzxLtkbcoGRX1WxnqoSJAaYY",
  "key42": "4XQvL6CUzJRFoLQkR4zMLNci3hkMuohXekeQ2HNgaw38otDF4n6HjuyEZ26bUbErci9PFaLeTRtqFF48pacUiK4e",
  "key43": "UwrMTED1WoCxMHxEVHLnWWwGnX3mPM2899TSLxc92wGHuV7rykLeY2rDHWB2stMabNxBLBdC4fHHN291m3CLNEf",
  "key44": "4hz6jXfGpXU4GvkCz7vkPLzzxeNzoQKQzj4nkf31DNS2DekHEzHsJHkTnBvKvo2tEuhwjdp5AUNKzDBZRdcMvSck",
  "key45": "5X9gEvTfCAnKTrUNceZfghiP4PEia2DYpva9vV3Xb74ecfSdLVGEYTHQmP1m9gzk4qLPHRbQ2Nw5UBpVW7YGBbsy",
  "key46": "3k1MstMobBCBUod9YEunrWzonkLEBDjXJKBGLnZvkjuFoh7obTFyCBa4qzzxrLmUWCHXob178uwqsVaf19ZDYTgY",
  "key47": "HGhdf5i6or3Njc5rPR2j9AWq9P2bfBAfPkCKm88KtckS1mV71qv8crTNGVS27m7BgXSLSNbre24pCrGJhxEuQqz",
  "key48": "2bjUXHXLLze494scNUrwudVPZeE5wwc7YCAJnFkWU5KtbCytWP6uApmtyztL7KyjLdAp9cp7CKoDxwvkdy8FQ5qF",
  "key49": "hg1CXRTwCfN5UnArAugryJRcJMitAbMmhoerSXA2XhRTyx9roS2sW29rX9JUaPx7GFJYn8XCAH8yDSpSh7i61oP"
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
