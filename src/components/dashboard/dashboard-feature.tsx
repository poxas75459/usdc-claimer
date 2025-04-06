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
    "jCRMWyKgC5bMjTWF2FAot82ogtnAC3epTJ7ujq1Y7i1qJ11bjDt2tYoKCy4njCmRJTpgLoajWXK6bfLkfNRrVoi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59QwqfUoAXTArubM4nPQFzfPgNUnUrYTdvdfyLKHXgQxY8PUdStkndgg3kbpfjWezoDv6DxKZT4ed9QPyjcBps4M",
  "key1": "YBdJHJuASpQ42NTuSYdi12yKzHbkcuvTkks5rJtb4hiLp6iVftxHbLwbhr6fhrY8r8WPQp6TPuMFxDsGParfkxJ",
  "key2": "2wwk1rKQd5dobd2e5CcCz4sVssXoxCceSEquJMzwUjwcq5QTRWhhhuz8xxMfpCsvtmDC57eFWhkTE2LoSZfUrFPS",
  "key3": "21m3XigRdEPw2F5VmFNimH3mVBxkvmG1Nw7mqpcFynQFzCxHV5eJLL2Tq7UZKiDYoVjZPLsd2xxuWET5mZwACxUV",
  "key4": "4kkBXdaqbVTS6uUPnJA6KekndG4UwNfeopEsjZD2dJH461YWj2KJw1wBLqkU8afeMwLZyP3jCYq29JKi8fGG9c9c",
  "key5": "5pyQmk3SmKKWDeDZ9LWnSpoRYCJyV2p81pRWyXAPGcRnijtCZzKyL34aWVL8mSatukUZKJvaKfuCDw1BCJ6aVp6k",
  "key6": "47uUCRB8AGsKVAi3LFFSwR9vMueL1rpmwPnwnqk4KBhvbZZE8qiBKQxnxnvNo3MrBk5vv8x48aaG3zKjJ2KkKmxe",
  "key7": "5pwQE3HWgLJa7X8iK2gtnktrWR91u4serDKuMqAbDTw3hf13oRLzFVf8KMNWxKL1nczc6CwGMhRKXgq2RWhwaZ7h",
  "key8": "34oiqJpADXumng6ZocfrYARw2whMmiWT3PU194nNhcfocnJE1qGoh4FQhNtkmW4RJoZ8WuqYW7FeF3DN1KiSsgWM",
  "key9": "2Xo33LhdJ61s2tRPfnzJZYrwoExZzhgaEjjYqDTb22d3PEdKZbaDvx3cTgigWhnE68cH72NM7RfWmAc5MeQz9qef",
  "key10": "35ASwWjg2CGPcLSX7V3HzpdAnWMW9AQEC5rmaMpivQov25Qr6MWfZJWVwh33Xw8BkDWEU6cfvZzJfzWzH7J5A7Et",
  "key11": "2Tdq31A5c8LrYBgGBBLa4NfBTCfJvTQxqC66tugrj8DvXL5wgMLJJW1rtsTZWkDmm6HdDkqjd6KEFgsUr29VRpCH",
  "key12": "4Ev6YeZ3xzmYoTKf9qL4G1K3U5CumKB7xg222AgFhkCpDXjyasGTiZVf1eE4ddq2Abkgd9vKMKi542NY8gr4dqis",
  "key13": "3XSgqnXfHJEawPPZdJDe1RCmj8j79mNfMuZksJsGJX5Zs91kLjs1opdLRYc1kXEDMrkuuf5YHf65vWr2Yo6EDv9Q",
  "key14": "5yC9hRiBz4VqMxfdhrwy9gNz7HHzTpmQAayGwEdRggxw98X2AruBwYK7VoowM4dT95yrguX3CXpejPn2CaKvoANU",
  "key15": "4knwgg3ZRKb5gUwfU6v79Lx87sujJyo5qQVAp5b6BujRgZC4n3r5PGPaZNvdDptdzaf2DUrR4LtbqNp7bn6jxsci",
  "key16": "4xz4v6hT9biTGXvbJGNs5jSyvFk5DEz4bafj87QhBf8frL2Fg58LguX1yCDjzmWGTGv9LnXZNUWNsNe4mustvvdG",
  "key17": "4GKNA1EtrVi5rr9YQkZVKZVxRHh1KKq5d9fFg2nsQjYVRd4RTbVLqhW2hDnQ6UyYyMY8S3Kz4zFAwkrgEAu8SPWf",
  "key18": "2TsJ1BLynSEMa1LmCnK6p7UY6u9QAjdDkETDYuiSFPr78Gbn9wHnPd4XrP7DxHio4JivbnHLwFtgYb8LJ5vYgjKQ",
  "key19": "4b3EdCPEp7n1SVzfeddQRiu1G5pxp6f14EhsB5JkTTfePkZGCDBMy4pHmHRFp8VZKxsUSCDpCdZMSmqkEfoBwFQe",
  "key20": "2P5dwGtQwbwJwJm1BfKDfekhDF4mNQT5pydnadyinJnRUFEPRLsfTdujRtk55VqmS4ZTRo7JGUXmPnRQnpJFsVHD",
  "key21": "5bssXKXpVWdQbqwZbxP2HEcgZH6twoZet7EA1DKX4g2GQpm5NTHKRWcwpZcEKHnc2vNrrnwWKebEyUQs8t6eiLTS",
  "key22": "HNdLisZ143irQJEHVMFcNticYctS5NrZf825kM1GwBTt94nTXQGAvrFj2CodKRU8jGeYH6kD4sTbt1Jajie1LMa",
  "key23": "4yvdrDfwLPihJqPc7gvmJQEQqyXFV1WWue4jWvsPYY9mfJYF7A8pzghAUyRuiWp2PaF6uuRiJQTMoawPmSPmiemG",
  "key24": "5bteseTsgRFU3d8s8ZKfc5ZpMD3wiyZapWbqN15YcLSMiqs4XFTW8FsAzAfMtRw5i1EptGpGnAwqJCsEZY7boVFd",
  "key25": "4HgEZHKCRBfiXHgBv3EGiPh2RmpL3fwXibrpwN6YrGe8YDfgQhnJsEKCkY8WCmCNMqSkHcMUZjqsr7zZfYDmFGE1",
  "key26": "5kmjkzbsUbASFFDN2UMeMDnM4uwCo1dbbxLLgn9Z87T8SgEMe9KeZTcrBFHRtrf8KTy8r3G9m5TDNWv9CL6eYWxm",
  "key27": "65QCQ6mMYRzAew4xUgLoiJ5uESuQTnadcq99P61frLQmqTSry1V32YYPqiVJRxnWG4Sho8HGrjkGYBrLPs2dvvN",
  "key28": "3h4Mh8GpJE8tZ1f6Sw7dCz9bSdhYgYBzUo1fh73VEqKWExq1V2kFTfKG2zqeAZN9BM4Exce5U5TmaAbp2V3Pzjng",
  "key29": "26VjeBAFwQydFM5vC8EPo7hULfkxuQtoQ7Ecodw4Bfjj4y8XJDAu8MzP68xRWweyr84w1S4eu3uDSthqAPfyThLK",
  "key30": "HjURhvPSLw5q5bKT1HGQ8kMfT9zPSWfjZAZ27QMtvBSGUEgWh5Kx1VwMhSdqJFbjogGN4DSxm2MYLLJC5JhC1pF",
  "key31": "67Qo8asmX45R83iMVRy7bnGbt63RAdofjZAvPHF9vonSg1Zze23hc5i6LoBhcb1TVE4n7T11UaFcZjJkkHwXVGg6",
  "key32": "Q1aMuNKD6TUnYq7kuxQ2saNZSGV98gA3u6Wikd7yX939m3KDAEzDMABxjorwVGLD5GUvyaM2pEuvW1ubZd6dM5n",
  "key33": "4wd27nsUFd5DRcbyCr2D6mJs2g5ivUDBVGSSHQtpBa319Q1fsCumr6sc6Ae7Hivf81ixMaAtKCWmcBN5oWx24iui",
  "key34": "2L4WX9p3QLaPFTbnsRj5MutXYQ3PVMz65AZMeKh1bH94C8yc6XpdjTg6tPt3j6GrNqSjSy5vPUjmq1S8HW3M8nPn",
  "key35": "4uUarMq5yynbbRGn4Ds2cM6ki4PS6RRs6bNSwv43ExSVqgVoghFvb1jd87T5QoMPHexmjA6m8vkozDWDtnckVvsQ",
  "key36": "4QTFMCRSbb89C6w7nGj3hbdEkorz9cWJNQq8cHtruNoerkoQxFJVTQgrBpKbB5qLSuKCvVbsATabZamu4NWvdt1n",
  "key37": "4Yaq29ChvndSy3czQ9SkuHqB7GqKP2sqpbwWndBU3fyBzcfynAyivfVQi6iGSaRUJXL4WeivEg4pRX8CXcXHJdaU",
  "key38": "McRbWVcKWVH7Xjeyqego1PsKfr1qC4yJtySqJAyebYRMeLJFH45DfdEpZq4QNAWbfgRE2GWcQ22C7sBM59zBBb6",
  "key39": "5QxryPTDZfVcri1bbcMKdv2XyhDUqVf5jcbFqVwWXCjM8mpwaFAzDVySuZQhXm7JhkaGxQyPzdiSSRc4M6G85Sjc",
  "key40": "3AeYFsCZjPsiXyLeQak88WcWXojChorUGwT3owUfuEQ4qpocJPRvNu3zhnCBF8bDcpvgADDDsj5W4eHUqPm2pwRc",
  "key41": "5FC2VDRG9WuQjJMzggHsor5TwsQhzbUV7FzzGj9FmXCmThH5Naesg2Nnat3B8JoSbuWaLsxz3DdwczV3RbdcaRfF",
  "key42": "2cRFqFYeDMtz3ZXQo3GH4XnReAUxfAt1vBDZYKh1KfeSKvyioJN6bSMPtGsCpmnzkDnkxCssXUfUZWHkhyV5CQbV",
  "key43": "3ZZewgQHGXq1Ctj9NFWLqS2PAnuzd8CDhj1WT2h7DCkis5yHdR2Puonv1bpgSVX4A7HnDGVPASwAW6ETP9p7f69P",
  "key44": "2tcevq69wSNHWoXtV9idGqJaCZZacRF8b1auWNVEZD7QfL76eaP84xSvYXjQfEfPranrg9mJmhyrw3oNbpkd1NFB",
  "key45": "3uSXphaRHeSDvxMRCGAVi67o8KdrkP4d26r4CtwWBhbt7oVqcuKW4Dvf35asMnr31bnPQgSJzAv5A3pSmMfxz3NH",
  "key46": "5XU4U6qQeVsnL7Gaxj5oPQcAiyF1aGpHkz3QChXh2EtA4QqmmCTZXrKjun745pGrVYXRWwqBFZ4WZGfTEWiQUtS2",
  "key47": "6gKRxdAxzEC4KbZLHEMq3YFdGPMTUvbhER9sZvPdZat3YoPJUevjhhU6xxEYpuJWpq4mZzghEZqBkZUrgNteUdm"
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
