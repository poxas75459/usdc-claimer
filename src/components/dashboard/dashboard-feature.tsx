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
    "rpDYnm8zHPApkMX2Q9VFNt46bFWEqLTTtJoKDgS5vzjPwauNmh2sTSZFv1sFccF6bFA52G5qc9aeLSDqo9aHYmn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VAevsHXGZHFVsxGKeV5GyUrUxoMA32KRGem17nB42KtdbeXhssWKgSfUatBQdYkV35RcKnN4oVbuy77iMUrMnpp",
  "key1": "CwTQJ5AXffxBsJ1NMdeB4rXSQgsoHcXBBh6AXA4gVDcuJV2XeA1UxFKcBKPcm6CPkt3GeDF4Wu1eqHarxgihcmD",
  "key2": "53tWgXTLh5hbEzPbbhTQkJMUfhc9LCtSfgoY3BK5QiSWtahCJwyVFoGuKrnK3Q2zXJL9WcpMYXxVu8zdRGMH7WXM",
  "key3": "5uQcPzrCqCao57n5Uyyy8UZ3Qq5aG4nikF8dGAtr4rGCegqqRxQiRQXNPtYsQBzuVzUU7RuPUePpeA65QKkuUpUT",
  "key4": "Av1mDWq3ixLNpXkprXytEKvroEP5P5pLk6FQUaUo3yJJBo5NKMG7mn63syjCAbuXrEWojUfG71rHoq1yKyGs6o9",
  "key5": "5kFvwgjSnhZYbfMrJWrMacAETSVoKqT1qVhhADQ3ThA5W8BVRoY75jhzNExxsrRiLRcZtF7JA5jMp1bad85NyWw6",
  "key6": "3UH3KAyKBMxMNXScCTAEPP5AxFAdaPuGkQ3imHAwKS4ejMERQ99fsu8Bc8vrwmoRMKiF4VDoidaecDEsTMXPHvjy",
  "key7": "h1cLKNufCMRq76pdeZqVaJ6jRyAPwz6o6zNb1B7prxT3VZZR6LyenHbpxjAWTJ6ArLDy6rfZE9tJYZfrZFpj2Uy",
  "key8": "567rW43vE8kqm82S6otmUVT1sSR4VouAAPzSW1KYFNCbsmXZu3jzmyvkufCuQyKHgnWw61QBJ6SmW8UNHNGskYLX",
  "key9": "5h6QyECLJvsH9HbekaxkLB3Hmz1qaBP6kLEVZ3o2HwWrfgysC6PEcKDjtEhWkPJAbXg74ZoU6hQopoXTR6pABj2r",
  "key10": "7Xf5pTpvrrnaoQk6MmtVWn9A9sRar7hZwxJ3at63pa77mzzsP23WgzRtEe5NRFgCfWYUPnD3RsxYULq3QRtFUvE",
  "key11": "cdQ6NrxsDo4hfHot1URwL11s29nqFQ1J9rVxRSpgrsaK8iaz4Zda51LhjJgeFNfAzwYTPG7TFzkraX9khJftBqQ",
  "key12": "3YAYa5nV7SDsL9WtHPeKp1cKsZfX6ARvNXD7yeMdXjXkygNCPsujzDYjTG6vHD6Rn4fTcmNSCXgLSvLJmady4UiG",
  "key13": "54eRhtpF5T4pR3rCv2tDcP2yQ9tpTf72ButEi4byFFiDwHV8Zj3xzF1ZTwygvZb437L8U4VRHYRHYu3sFJsBgt5p",
  "key14": "5x8eMwojQh6Kq96YBKrvLakjydbUVXSGp5sMiyArg3vBSjcrGhrL1gLZ2LV91oVXb89hcYPKKtf634wAih6WRAaJ",
  "key15": "2Htrrb9g241pvSweyN3ueeBtxLedo19sVAehpeXoWLx3uGV1zbEqTEVXekjLEY1qGM2HDpECeudsH7xtrCUSAdED",
  "key16": "49k6r1Hu7CeFbWgAQ3bBknhC3sWqvQgMtTXKRrFTPcB96T8Fxf3WiLY8M5J7Ls5UtELJQEHpTQaXMdH62cf3uKQp",
  "key17": "HuMfYN98uUYXmpT6DxXicRP4bEYzJHP2oHZ9WQWqce4FpbXxr55StMYBrdWwby4yveVwob1R4mEAv1eyfNUjDhn",
  "key18": "27bGAeD4JDPXqJM6sokcddTSyAfmVyQE8JPjneQH3dNhjoLKN5DRU3Yn4nY1wdhoRq2WXV567NnYNvNuYpvXL1TQ",
  "key19": "5DzjXqaiveS2XrKVadf1iDNER8dKzUFX3FgG8Je2au3nGprwtehjJHUGT1J4wq1LcnqNMSbNvrLdQg4neXgLV7B4",
  "key20": "3LFvmrZQ7xbLpTGDTQXBXjgyFKQo7bAbA86WX473tNe6SzNH43ekp476QYY7gpK1uUJHaAWjzXxA88JiA9cmdMDc",
  "key21": "3WtKktUmJq6V8Zw7UmTwKi1q512z4iEwYx6bjb21GcP6Ypeq8AXcKxcpJYpnZ1uHrsGBzeLXEASMdsbHtVzoaem9",
  "key22": "5bSaa8PMiPtXf1rjsPKHPv78nYcwWYgqhbeuK85Zmxoy3wH6RceQgZfaRqeJ6TFK5jA773MLihzDhk3GPbZ3gK78",
  "key23": "3jSXXb6UUA7GMzPQ7di1uxJmyJP89QBi5tHF1HiEAc2uzKUY2dUXeh5fXX31jBJzzt2HJh5Qn5xrhJk9WnAMTD8b",
  "key24": "3srUoTSc3yToVVA1YsfB4xYfi2YgHmbtix7bQHvfuGmufZRp2Et82in7JnQacHzuAssX7kBeBNk6M619s3SzNb6E",
  "key25": "5DmP3rjfc6Hiivj4b5gCPKkAFo7zQyweaTuPrhDKwR55CxK8vVkEUdQnZFBVVzZ3H42mEzrMuAH4QXdoYUWtDvgM",
  "key26": "2fHaA6sWVPtZDVbcFvz9rfEtcCYyHg36bhFN5TbbWoR9Yj83f7imijHpD5WLrU9HhFFif1ts3WfbfAe8SCPCch1h",
  "key27": "8rcpxKCXDUX84CQcH24en5pxotGyuyfbLkHjikwGg9JnmhhF5Gy7a1777Eo7L967AcPKnsMohNxWKdpr44YQqdN",
  "key28": "3xARG6vC48dzY6Tx2yQs3xyyD921XhVE71WT3LZm4Dz8e8c3LR2hEzJ8sNp97XYZDCyxAycKwdL2AQWRPQQKpDKJ",
  "key29": "2oE5NY5xmWRff8bBwPhQG1ZsZVn3VPoNRQoiGzT1Dkq7dWFi1eTZEZCExvJ7Wmiz2cs2QMuDA1krZtSVhtQ9N365"
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
