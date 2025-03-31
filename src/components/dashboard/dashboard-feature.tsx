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
    "22iDZrSfEbFuHZJkYxxQJppxnK6LWT4g4DLHdnwDbBmmq4sVzYtnqcjZXXhQvogHea7amiFP3tcxckomR9j6gFwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GQHDyehRDZYMhr61mSF8Ey1ri7kPVDpSuoESfPA61Jt22V7JBiFjzgMZDxh1rgdRdwBss15dcYLMavPRAtgB7UP",
  "key1": "4QkUWyASWbUfV7SiPGS6HGrb3N5xAy7zWXZ8gsgry5oZGExLTF1fRZ5rDJqgCcZjXQGcMJYquEqTncs613mWt5y9",
  "key2": "RaefArStfgf1fAQ4PM3NLhSthZQiv7SZFwhJBTzM7vpj5UNwwJJ57dziVtKe4b5hVBp6Y9G2FSha9FhHMRVus3h",
  "key3": "8yybZ5AZQgvZTTMerHJniUsU34AvmgP3K8SfuzhQ6eYuhXZWR8c6iVDx4QARqsYuY54N2dijETLRmbS67tcXVBh",
  "key4": "WsBfvbfTwCxqyBhsAiVu6CCL7Mc2xeXgefaz8vDR6BBjQxmJLCwQP62ofapGaaNvb6DhuA9hkKZJ5nf5s7YANAj",
  "key5": "2k7AkRAYGX3mGp4w9Ey4789rsx8Pcyama3fyiPTeQpbBa9xZDUrCKCfo1YvjY5LigM1Dvm5SDWWBP3BfrGHBGVkG",
  "key6": "Wut4nW9AyqAqNFvVMhapZ2nqn916T5yrPQ8uvHUm1uQbgQGXJwtcqwJoYjZDJG2uUECPBcWu2WayHP1e81moFt9",
  "key7": "qQt1ZxohrEDZqReVW44e8xWrHHforX3xBXmTGpGoUQ94dRr7iMjWzGXL7U3TKiVjzazWhq3QMV6xPrssagzbpRQ",
  "key8": "3wche3q9UV156bk4KMS9z45kDP5SeztPPN8TzYVeVU64524e7wxQFkMZPkPKhaozEvzXNrkcfuLqPH8TiEuNEcty",
  "key9": "2worDZEQy3Ga3wRSFBHPg8C52AkHrrphhBxbpveLm1J7YC7bontauSrzFBa8qdtdmSWir1EcpWshHeFYuJz3nXrz",
  "key10": "4mHRBixZTSShb2brpkyCfUY3G1WQZRH8Ct5Va6NEGyG7Dh6xwRfZ4KBQg6Uu3ebxqLMKo92zFqa5nVy7Rh18CgxA",
  "key11": "3ppRAaif9NxGsUi2JEZU7sL9LCN6KJNhSJ3qaapFRDz7g47puyQCWxvVHsUuratbueG9S6wBgW73S4obdPxMmR8j",
  "key12": "2A9HySXv2YYxkQX4bJUuJMAgxcqggaRKDWeEjvBed3xayjszKkxoTCu65FyCTMJyQa2Esast8RoXneSFhtUghj88",
  "key13": "3dq2LaaoGntpHkHWo2rx5YGX3ERuwyivHbdx5sz8FWY7SKAb52eRMXhfGDSamM7FvsmvUHn2XXxb2sbecAa6NTrE",
  "key14": "5F2dGdC28GnuCXkwZHbfUSkwghxuMvKxH79GMWftJYqQmbcc5v2BuaGPq56QQRcNu7uKRcA5JcbbBL11ZSXbs5fd",
  "key15": "3uEDQZQ4XiBJDAJrJwNiS9jkxe8J69aqX8SEEYACQ2oZymexMknjoXEfHBvPvNds9HE3mZbp6wmRwMBNgtLtgQRD",
  "key16": "64KkpyopBka7fhV85iQ5L9UGFeQYrXh5m9a4yRq7GYLVZCw2jey9fsSn7sf3NWVkUXjVAdBMG24NJc2foiu944nf",
  "key17": "54pSU6w1KQhPapTrxdChHgjosLGtVtKEVBr1xVcXLHg5YY8FZmxouvNQ1SPRiVN9PwsS7Ge1jWEXSCDDVU1n4jSZ",
  "key18": "4TzSQE8kcLzhsC5d8LpPZ3nWhXR3gdgA5VDtd8gD7ZV8bi8d5vE8Pp8crFdv93xci7aHy8QPNxN5Mp79ocjfVfCR",
  "key19": "2HmYQtotEcjDxNm9hFg7aNjsxRMFgcTbNc7Af5ZxvHJHtfYdGFKofqPbtobUJAbJitGCYzAdb2VjK3kWbBSVDbiQ",
  "key20": "3Ns9obkTJgNVrtdvuZH3zcrpmJ7USGLM3WptDtMpLCWTjAyAv6zwerXrw2RowtifC2LfEzoxHfHPVs6UwmyYy2vm",
  "key21": "2mzFNQvKdFN6yFwW1AXmaNuwFeYyA4mrz6JPsZx9jGZxd1mitFvTeDuh59ZYsRUE4qDprseF4n49uffFv8vofgGo",
  "key22": "2BSJim8VJwHbs2R5SBvw3Zf9YJ9Sc7GXxaNfv5yUejZKUZVxMpxnjJrxYiaVR4kru7wJ6wnAUTVBjaJ2XRF6Wpyy",
  "key23": "5xyUePDNSehedpMietyUbyRodnnVz77124yVg7N5SR6j72b7aLMCThk9N1msndzug2ZC4c6PTz6VK18T8W574Dxi",
  "key24": "2JKsL2SyGz9KDLR7BLJEHgd959VMWRRcrRFbxE7QsLCxzNhVgwXJ7TTLG5zsC8AaumSoveKV6AQapgu3NU6dhqtf",
  "key25": "umS9RsgygcAXp7qXTWqMyoeJMSLEXaxpvVJ2bBMWXaNhPmtf5Mp5WgrtMvMSfw7aRTng9zvMsDMQpU8wEyxzwzr",
  "key26": "3jX65ybXyYhu4QUbuXuajnGSEXWkjCdEZ4GmPUGryWvBsT7DNFRMzGLgxkPW375tQwQx4cupE3N3tY1yBVQps8Mb",
  "key27": "2gkHv4NG2Rn5Ww54LVbunbigMr6gaiR5wKn8AasvDMcoVhQpNUdb8GBYR3Ka5DxToNgFaEsS8gjS7kYqpmZXbC5L",
  "key28": "3qhDxXCSBy2AJYyR5JLHCg8Q53ooeMfpsCdu4iLabowT5fcWTRtQ5Qrpa37k7krmuKGcdSf1UxGUJQwqWAeBFhPH",
  "key29": "3ya8AFhGByNxqPLfV9W6otdTSttn7qG2z9riZj2KbpxZKrDyE2K5g5ERpt7DqruX8mp4BgfmuBv7rwmnxnuNK1fr",
  "key30": "4MyAMJVtwDW3uAsLp4uQcBEypVtuEc7Uu6pTofHEZcXCjxV5FdNv365qwmqSoz7nXdVi9qk1rjbjX5mHnrBEYJ8z",
  "key31": "5djbtCWTAKyawhnDoG67bxG3MvURC9XbAopzWnRKcXLXEJbNttEkkEVSy24f6wqHEV5vu1ovJpatkByEGwyRanSG",
  "key32": "2Ue66qH9MvZX9kh8yFcKoBrkuR1h8LmvAqf3FB8wtuR1R1JPSNpZXTvSzS6jWzUmj9pJ5EX2eHEB9XgfMcT81f9B",
  "key33": "57bUgW5Fx5FJK2hZMs13ZseU3W1afAYnUsZEZxS9zH9eXrq4aNCpxFP2nzuGNmMhHUa3tu5pAqFQT3TU1MneYRrR",
  "key34": "4yF95RLq9poxwdtAgCDJgdpGLDFRwJdncPxiEd1MUij4QFaumU1FoAcbbyhTigT1kdCDoNQ5FNPUrz1NJKbzdPf1",
  "key35": "2dVRQ4ZwuexCRE72hTVhXgnayFTVhqqfzwBCVMveU6CbhRNgExeiHRDxxdTB6bvjigr7BuzD5sAG98bKRnc2uddH",
  "key36": "PVhV3pKxuju1hJVebiZuLSkMdRgdj6PwA3JybGQZXGaZz434PNxaW5Yh5fxs46Q7P7ZAAzzgnDxhj3kphtiSAec",
  "key37": "47bBLHRyPa8E84gw6GsVGNS4JASDGLmYT4MfCFcN5iZvTz8uYBFWmWeNpXxhxWeaavt2cDdw6qdNWVLhzjeeozHK",
  "key38": "5axEfHVPiFm9XtPTDd21dMGxABLU2sLBU7ZCv4dnmCz5tZCFGNeqaby5FMUeimrpWZsA53xiBssdzn6SD4MNmefa",
  "key39": "49YTcHn5tp66ex8dBNX7SrPSShCLhNrbyFZWsoKq1gZoeBzXcTbR8kyQZuNd45wuur4wBofu9emk7MMABbdmLJys",
  "key40": "5M2HsPgbSvMLd5Xv81hZwDjU2DXTAVAjyL3tPx6y3QC4TFadJhw66RpTNsvaieErHxNgSKvpUXYRmihS7gVuzUFg"
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
