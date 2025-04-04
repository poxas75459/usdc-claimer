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
    "21wzDujXZdaUqEDiFVJDPteYfcke6q6SHmyS1GcgevDjJcYPyHEzr6aeGRUcRzuFoRQ5ZYKtwqnxT5xpDoL1ETWK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ek45dwmD5VR7Y6L8N1MCoGSGJF1qZuF4jcJQVsBiM4v89m7SsFrkRi7B2EoJfFo3fSj8gsP8u3g5gez8MytkBet",
  "key1": "4n4DTJD7TfgWo24c2UjiqLjEeyCjPP11XRexkUAiGcLEyKSVfZaTa3o9tGEYpF8RGwtnDJAytcDfNrQQUc2Uqzs3",
  "key2": "2W5NmhArUrfdW7S4YqTwRLCu511NqXQy4BFsxf4wfue7wW7z4QnxKrYkNVmDbV4TXFXE5dLXLm4rvNav5kzyi1cv",
  "key3": "52LnPLL6NXooRoYGJCuEACjZekPWfLJpb5tQXCKzWcYHGvDDDXKsk7ncyx7THFWpPz8UYQkJ7mr6w8iodJte1eFR",
  "key4": "3oRkWtsGAuLbnVGC3XrsWEPZzEc3ZU9avMubr5S5vPCC7Cny1wyQ5iqdJhLYa8wSJGdJ672XET3k8KRKBG4VfwiX",
  "key5": "3jTZh1KayU1nogncsYknjVPm3U749JhdavuxS1z2ZdVH5kry9tix7sGnPVU5kADXWB6GKPmJ5ogHAgD6DapQvap3",
  "key6": "213QMgctHTBBAf3YDy8pE8G9wNMJ41kaJXrTNkYZGS7yYi5YMgoYcnY6YzxLK5QfNm2jpXjdnjyKZXfY9XMZN14P",
  "key7": "3Me4WuXRAhRFCrbDFLiwtTaYDzyD4AGS8uVPqtPgCLVzSvc8TD4x9LMrpHNkCDFW6t58EJMap9BCmVdAEFw1CacZ",
  "key8": "2thFEVDiMBQHKKSeASA7r8abioSkmdsJi6p7XkWQENF63ugbLCUX9p7R3eZdVSn4muUL3EJCFLok9W9QToem7abt",
  "key9": "5K4LNtEfkJ4B3oLziDgo7kfCqrgW958hPDx4Es369NZ7ETugKszWsddYDL7iLotttXLFvGKsZSWvqncLCeYDYwus",
  "key10": "QNheJGxuaotq2Y3EPMR2VCpFvNgyaQNoErveGdGCsv7Sg4MhnajFfY1xnzfyqGAbWWfDBwxowcpPwf13L9oxVP2",
  "key11": "49UL6PbEKEV5rYs1ksiCFJYh8mtNR9RB5AT2xj8JDXNVNbSj2yk4YiQkg5VKKBit8x377jJDoF8Q7oZjP2q61BRk",
  "key12": "24TLH31Zmwh6xzbwYmdxTfzrChbAJDpuFYC4gn5VmU38hegysPHH42Xij7gNcrxuk1yRVH8oW4zgSnSC78Rz8BMY",
  "key13": "s2qEncbcnuDgSiFdKmME8Mr9v5sfBUkWPcZS8RyFELNHbEZE3FA72i3fNKnoUuVPwFVUwyckBNsgDWEprkRUHZH",
  "key14": "4htT2UiF7AZjgYAxRoomRPefVGd1KFu2Q4zYZctco14LKAf1XVDNPfw2mXc9EnAwq2PnFsUbPUYvWTFsE1oSkq3Q",
  "key15": "mBhDsrZv4EdPcC7dK3kEF7DvJwCsifuQUDskMDTUrCWKfGRL5K8BTDpmvBsp7baigLNEP1NZcC4Mu3ZAaVSx1L5",
  "key16": "5Hxn6vykEM9sqbKYJBwX9CvcG8L6fvjmYPyTWy3aD6eGH92zoNoKAroJ9n9DrYK7xmuKGWXPY6DMjNoWRhDwmXTs",
  "key17": "2s9qkx8NtbJaTMKuTLzE7Uzo6rzRxw4e4FnhUf1ZV5CjcuSz9F1Cii8anwPSQTvDXQQxmcHe71VDf9Wqq5VY1aJG",
  "key18": "3obpbYD9BPcTCg3tdNU8coDBE6mw8WANsUPfa8qPUeccznVcXSiThgQSDKrE5hif9sfkbvw4wWRTk3JYxZ464MNj",
  "key19": "3jmwTM2u4p8QDTuST1Se7W9kws3X8XoRDSvT77ecrrADMbxxWq7udUTUbFHr5aKcLnM9S7fm6vEyywKpgSQCPEau",
  "key20": "5h3yuaugcAkzLzr26aLAkFfTJagZcVA2B9bojFctJgHBKGbBhoYTcgmfbZpo6Aba3EhytA15xEwZpCEXwvk4KcVk",
  "key21": "4YjfxzPtREF91WwarGhcBixtM2CtFNSCH1xpcNiGaPndm2dMWQKcB2zXwgoCFD2FTT7VTUNBp6jznR3p8srNNb35",
  "key22": "wQYoPogteUwzx4BKqjjuZbWguiyfzUBFXfZP9qV79KPmP9gtgNockSBsxMw33p8eXqu4pme9eii5ySiJtuhHEhs",
  "key23": "atRc5gPhNcV6VrYS9oXXjqVuzSiszH5Eq7QcHPSPzXAn3WSNjqvUtfBs7BvgYgYnvWPvkpHz14Cp1qQPdkJuAoA",
  "key24": "2aCnHd4A4otnVug3QBjWH3k1V19VaRwJgjMEXA16S6bcrKvRUxrRPiqL4DwDnRcFbKUVHsueeAywmG6y6TFVm2gX",
  "key25": "3CrLLAG8DHD4RokqPooStHLUbX7v5f2MbqhAA2KHoKhtdxcz7jm7MuZF6UoEJ8yoPhi8N2eWGMMUjc8oVLsCNkNZ",
  "key26": "63R6NRyc17gh1Qq2VxVzcXxpGLvW2TUaLr95H29tdDxuK24244BETBjgtWEMU866o9m3MxcYVm6NsSjQb7TPepni",
  "key27": "BKcZy2dCbDQeJd2QiiWL3Nypc1pGVRQhg7nnKJC9VxUZj3UZNhYbq4MkXiK8Xs9qkmTQguDMyih1729CW32yh6f",
  "key28": "XC5PMS5cgpVaQHRgHog4cg3moK6KM6irZ4nM3cdWb5An98N8mF7LwhC1uh596cm4obe4rwmiTPUXCQzBzVpUKQ2",
  "key29": "4wSWosB4jMaLgKJiuJtrfufqZQAkLFZ2CMfWDXTusMDLdoATmx6A59dq1VMMu4qgZfm7BguuKNMeqMSYifum7sAN",
  "key30": "4yYUJawR3kMV2yo7M7D17NFj57SnJ2hPc6RypvBGvu4uNTHat8Fo2NwYECo64L1HEQPVkKyXqAwGNgbZFYJAkid2",
  "key31": "F1J2sggY5pTzVPFK1f3uAs3hMPRrrFHXyH742ka9c5g9xXGoQHaFFANpsMFMKnvrtDwCdysgo4oSiunTss7dDak",
  "key32": "3FFp6ZXwVhMfWcuh4eKF2mgKDQDWJLCqXKPKj17fcykK4KBa21c4377bbM9iAsdUSDGPLwKFzFrSmrXBRwawZrJc",
  "key33": "4T4jmhjj2SouoyQVJ72tU6uSNSrXoTZQ2xD1ivTag4Bo3mMxpGwJrMDKbkUjmmsq7tjcDT3JvwJmz3JBmGptz2BY",
  "key34": "39j69be5WiGZNXLwtefzh45PqHLRGM8Tg3Vad8oKSQKVsJiHaTenxAzdgvE1968SkT3QNDgmpm943Sk6hz2Ugn9t",
  "key35": "5iBdwJ9mMsZ33m92KuDRHSN4rxV4yTzhBcpuPePRuzhgkpdngf49Z3qb1c8qas46UytimSWgdQX1jmf6hp8zF5SU"
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
