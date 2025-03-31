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
    "2EMDRtCAPx25JKrB6YKwyDoi9FcG7mj8x2P5J5URtTfx9nCRM8uyqWqMCA7xumAtwzc3XZtbsYRaRQGR6vGahHyo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AyN3GYPnXVbZ38QSKRM6w34P1fpzunyfA8LeLUUxdonTYXAiUvDBV3ZfsMmrbnxxN1vGbS5H9pet6bFc3STNL7o",
  "key1": "2QWLzF22r6U3fvhSnVzJBc6f1pRQHFx7noDwkS6PPA7FE2UzBxsEiatrZyU1MSxCfoBb9UaoCKVPNAA54konPWcR",
  "key2": "34Z1fzb1eQfFAgDuQVxQV6PWxYekAj179S1TkoaHjmEaeaP5U82qaobtharp1ZimmQcSaZdD7ZpAwKDX441E6phf",
  "key3": "5Vu4TgHAysnN3krFz9LKR5kvnysm4qdyrhqfe2nq5pygMfu2FUvsx8bA8Pi9kTDuXNvwLzgur8usFextETsHg8ea",
  "key4": "2DLWGU3EkMxYTEdw8auQkmaBpR4XF26Vp5UrNoP7USSPmxPpJcU6sqGKaxck6YUk7ZyRMdRfDZsebn1fRgCZ68Fa",
  "key5": "2YTBkkWvLyZmKkM7bUBqBWzVR2AMR3fBfetiKE5wBxeUy8mcibX4H4gjEN5Dgr55cy6oWbqVr2uhkSmBgHXQtGyx",
  "key6": "3miFquy6aeimY3DLaJvBEEQjqRQRu9LjAET5mNBxincLh2kP3V2quvm14wDBzyzUbBQH7RQBEHSkgLNS5u9dAa8k",
  "key7": "33dn13utqipFaR66iLwkAkZPQwQhAGJN9BM9zvPRDVuiXupHUzbkqv7UrR4h1MfpjkYoShWtuP5yo6656zAaVsE6",
  "key8": "3Q1ujfZx2zhB147bykW6Tm9vgofT6aazpmVjWyLS2wJTFVSz3ayhfJc1AhDnYR89iHtL4eRR9cyXscVLyBDPjtmS",
  "key9": "3BVk8UWLAsHWMgSPcBURnmZvHvrWPDZxFUK2ey4Et7Mp9dhs9Eqa3yM232vtUikxCnpN2AxfmJpjMugQEvTnxqh5",
  "key10": "5hV4cWSCuwBtYyVDN9H8HRW2vvhohB5pvcva2eSniiPbMiGnvXVeqtMPqfZnhkCd3WEfE8RPwQUWwpMomG9qBfrD",
  "key11": "56BPqka42chbo6rooFYCfiTsYEZEiXGYh8MJGDTRfPjcSqzDdRH5kahbBi1gCzqrotYEh92JMDZo5uWBhBtU2WXm",
  "key12": "dSre9SnP6sYGSA9EXymetgUTHw1ST5iuCnUntoC5SZ3WKRiT6be8MPuxPMNSyUMiCthh8fY1kHDn3duUbRuUUFp",
  "key13": "3vMcrbNahVfhdPUy7yZYeEJHJaT1Qp3fYUkrCZEsp6mNimkQroa2UAcgDNCmPJHVhagc1AMsMkPHCJ7ugvE8uNkh",
  "key14": "5KyzePUdq9LsxvogSxzrnB4ckieBfzdieTefvpkeLyZXb2iTFLmWaAz2SJPuyvSobSo82iqB579V76AYT3bspofh",
  "key15": "52SAZG3q2kVDL3tg6fERMDQN88ibZK98yeTEUUKE9gssTaCcuh2uKaiF4LFJLRQ1dfsAQgRP7goMJBeMPMDF1YTr",
  "key16": "5qhyr1eckygk5LnMv9K7kp5dzPdY6Pqoqjy98whfgDbumEKeXwgQeLWfJyd32T7Y8ZxU884CsmQZP8e7MS4xq2EQ",
  "key17": "5Ss6RmVrbXfqXR7pnRf9WUNs4zQECiKuyrMghnakQ35M9tDji5sNGMfu9fsBejZodkfzefaD6dTxKo3Ldeebmz8R",
  "key18": "xcfXWLy7R2xMi3V2eCzKe88QoMbsTq2voWQK8XFe7n1k2b8mn78Kkncp4B1W6io7bZ6svwHY1AodnNMkEDZcPfJ",
  "key19": "2sVZM5BhQaAjktJ9LoNctJiMYHQpTUCk3KKm3hmm8Ncb9YECmZKa4sSe3qFQoZbLeLLsn6uB4asCGQQUTUA61U3a",
  "key20": "5CBrxAAFgFi3xtaMvvvxB6Yqf1GnJWJdDyQquhnFYHBGXWueN5g4bKReTzAE9RUSw32fZArv48zzu5zUoC1sk4iB",
  "key21": "2qq2qMVBs68B3v1sxFUKVcztvdJdgDB1MCWPHHeT5izAxMfZJE9Qm6mscorrqhaHLYDQ6Xhcruh8TNPpmE5viErV",
  "key22": "eyWBfuWe3BwFA7pXmBnWE346FshioaiJMRCjZDTAr2misKsSmhn2cMtoh7ZeHdtBGf9ZD3HyMDpm8iknGBq9PLe",
  "key23": "65BKY2NjeMdxTqVrKQ3jVCLwk5ctcBuUxoBmpAtxBnj7jjGxW7MPAU2wJeYerk44nYZGhSiZ4cpEHhtY3nztRfYg",
  "key24": "2Jwk6Y7zNXRidGigHnCtGq2rehyahhXJMDTAopdwcKpNFjSx3a1BnEuhPSDKhFP5dWQ1APBQxob5TayYUvwwR7mm"
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
