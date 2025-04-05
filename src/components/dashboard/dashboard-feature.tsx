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
    "4vUJc9aat19i6yPW4EtYxyhJ435ZbMvBF4rNPZbDZviCkFjeLEbg8V2HPa1djztYvmzycP7CDReX5T1ZmCBLA9WC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YTvohEUyrp6am25z37TcmR8S8pUfPSN7EBK5icLeg7vaJURRziDMbK37qXGyFcszjfoHsdpdv5FaSWcbuNKZvkS",
  "key1": "5P2arkp5NMDRBPppZMddqmsjtjN8Za5L87y4KyS2b4cZARTHJSJNU7L9h7fRxBszRyJGh59H1YmKASiCXj5sCQNK",
  "key2": "5XV57EhnEWRZSq16S715JP1cK3Vf71ojvHcRAuiaAXUNXhQHy6L3UiZ5gSPbsaYbS42fxCu6ZWj9vGu2fBxZLAbS",
  "key3": "5ueDiVDyGu3fNgTNqTdhXmuetBcwLJoz5uxonswUZDGKLxb8H4fut1BvFfyhmJFME3Umx2CsX8DF9zTJ5w8kgCj9",
  "key4": "2LLs7s2Xh3tKGmtbfrqP2uEiQ7M4RBonW9CGZw4FfNSR9xzYBGqRrv3ZcnrsiY4AuYHD2QEid1GpRVxgD2zEZqz4",
  "key5": "66aJULepY4i73rrtVH2TMEdqcSURfPvkYuBoz9qMXDvvuoLdPVTfzLPinNmRsSj2EZEtjaRTPtC8Wmc4WSJ5tTEa",
  "key6": "2qqiLkTXM2ApjYWyEaeNMwasJd3sTaC2o782xSjespptrppM13nAWQBaXpHeDh5x7Bwx53SRzfFpnzXwXcVvSNgY",
  "key7": "5HCpqcsiwSd8hr6C2vXHiCBx3KbFbdS88BdAUm6sXNLK1FBKq7LkPZyx3YGHfF3cxg56AHPZ2h9xAU1kLNgcnpVf",
  "key8": "MbgfWa2Pxp2TP2Y5hm18e7HjGB3NiMLE5ohZWpFkg8KRoy9e8sShA1uQXkPc8Zzof49zs7J9oKPnHSgDobQq8c4",
  "key9": "2cSEXPYb2esDeMcAk398sU3nzzVAmpU3bijaTtpyxKAcfy1AGMJR82hHG23pbW7gBWycdj99d4GJbC7hvFzcDYx6",
  "key10": "4nEtVC4Ra5PU2wp2RjZ29bxkbFtfyDyaSkTXGvMxhYRcHKqub4V84bvXdhrozfQbV4z8K63uFmVcTZHnJrEXcBiD",
  "key11": "5AUZEDb6W6e82k8QMEDjvkNdJBMeWizJaWCmzoaTJLt8BCV4geFCkyKPYFLXgb2v4kK4qb3H5zY49Eu1qLwgWMo",
  "key12": "4xWzWWM7CC4DK4L4JJachoqrMEsRm7zFtr938KWCcfUxW644W3ktmMjdgUGpvyXNCaMpcQRs7camUUxoQ5LuSQa6",
  "key13": "3gCk5UvVqR8c7m6J8UvfbMAcx9Vn4rrvbGcTCSrZ1nyvTinc4shuGPQs8mtFJs2qCETisezETsmXALLU4a1hFv6r",
  "key14": "Av4ZX2XF6wADMSMTGgFqiC5HUdFRGhst5obKqyHNo73gSQ3s9zQq3WKwGeGJ51Bq3a2KmpGVcinnADS64zEL6k3",
  "key15": "58MHiPnbvmFumwHtWFy5Fh5yopSGActp4TBXJQRsp8tvvKbKDodA2HF8AiUHMQpPhkPKp78upxdsVpyaG3r6RZGK",
  "key16": "2z98HNGwYL8RmcSUN2AgRA9JiGRDmtF35uYsmvr2fFT8ZgdfPrefez4DFxdsZDp7655MT3WTznQEdfUtPA8qKpCz",
  "key17": "43jBk7YpqFG839dWCb87vy4KRgtVUuvZ3Xk6hwr36YhwssLchBbgAdNuuStw4KyNShYh61kXn5arXoKCs2XEGfkQ",
  "key18": "3uvc3ju1BaHP5jRWAupWnaHJkfuoPCNUBjSEmMJuypRog58kK7h39vArTdW1PHHvgjUtMSJ15udNB8DD3AGGoexM",
  "key19": "VeGuF3ZQmTvdLKHYg1ehpPw1XHh1CXJKsVGYVaySNCz56u8UvyPdf7wZNT2jDYnaJdxgtZwTNZCUAPW3aniJKgw",
  "key20": "NDJYUz7JXAFrqkcNkDs2NuF9W5twYYBG4cVCvnerxAHLWkNUZKkboHZombQaeGJ9CmCxDC6k7CP947fNBsi6CtL",
  "key21": "2ot43kxH4QmyPDdpTtE8CEgjt37U5xncpzzdfm55f37t4NCzNuRSWDHw4h3mPoVuwDgmGSHrEWeRKGQqKmPWNm6c",
  "key22": "5NiCcsqGywcqVHmbr8Kted9uCzR4HSiBf8p42EEz9bhobCmNrBmzkkr9VK5koY6voL44g4ZsqYNm4dkmgCjFJ1f6",
  "key23": "eusb4RvgGNVN5zXGbijkEVvr3xoppbFG2gyvBjUY7TRyn9HKfDcAFiVS6xpFYaZ8tJHpXHTKLTEm89uEGqh4a2h",
  "key24": "dcZDzysk1fGBVi1XzBJSWBFKxFTLMvoGQ1oZ8DQW8iEoJMegt2thfPrqR7i8fQaxhuEfw3Jdkk4LXFtNjzAmUDj",
  "key25": "5aV1S2CAoHQ6csKZttHmBf3iMM9DDhr8J8nfS16EzHaACqPHiiXNWkRf2bCBJBnoV2U3Vr7XJhbxyZ18TbnSjwp",
  "key26": "4uXUTFGG1BuzLhZ5j1v3qgkSt3hGBd99ZAzQWEVyva7aNo1PTKVxQCK7C71Lqyttc1N4kaiWHxG4bLnptTwetiMz",
  "key27": "38KWF3FteywpfmX8NMUwe3QqKPbtgG2x5mhP99yob4HNWMk8c2iMH3wWtHFHCzdsuRURASYAwMWjK5XcdjiXgbdF"
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
