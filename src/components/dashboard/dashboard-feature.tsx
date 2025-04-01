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
    "5TAzvdeujS8phu1MDbTGWERBhT2tQ7yAJK1VZeAPT6Cfnxuo2TpbVmeUzLsLbhxtUQrEbpCGMRa9tRz1G7ZYJz23"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iXu6XeQwGacWKqs3rwRM5kASTpGZ44w6r3YTuhJ7kfBamPEoDBX5Kh1sLZUhAxP5meUNxk15tikys9SaXPjdnUR",
  "key1": "61oBzMmCQyC9zNUHyguFahY4rcoX4kZhqybDd4sENqU5EGrfEtaLTgfdPksJfg7ewZTvkR2aw6AN8uJJox8xhNtG",
  "key2": "5AFFPDXdCvDDNFhdTcvpAsMdtQsnhdXbpuoG9vZKdAyTLmtLXd8MDpMBXraLQfG3A9bcb1Z7pGPEbdR5dNm2q3uB",
  "key3": "5SPcDnbyKx3LMiaVbHdwJJvoxLjLnQRPq7a4NCmWYABwmYq19hjkqWTVUof6EAWQuBFKA6cdLYDn3GyRnKrdyowc",
  "key4": "5rtACH1m9XsQ64to7zzRTCAnW3VsLBWepKxkdQTLu8fLnZq2fAd9exJSxukuzr6cjGg8ZURiqoa4PVuND8uHPa3y",
  "key5": "2BsnjBNkEwAJLAijZBg82qZzcHW1TrK5oDCoUHk2VzoEZAuwGDbf4VfUjQctPKCE4cW7vNpuYEZiKFa9ZSW76yq6",
  "key6": "3d5tMqkD6QyquEeFPjfnQjbTdhzonPC9gg8t5piF5zQvKD9Gp4MD6kbFXEmvJMM7d7htbNE6TTUnLF6UW51ixFMP",
  "key7": "MfzWo4Q9N9XaMZd1y4j87bckNShE437g9dpMZx1kVRBYXrBQ5osUYKoW33pGh5v7D6jXzpYbN8uxceHAv4Ro3Uf",
  "key8": "5wZ73fTVWiBgBmnFzgQ2BcXBLVYQ3mJJ2ST4eAzweDzQrfR8r8BcKxiRpaVK2a1t7RPwufBvSee1E7bqqvrwoH37",
  "key9": "DqQDWUHiRGG3Qqzqvmb1WzUV1ekhLF8HVb9Kj1mZqt3CU5W2N7v8cNbb2fUU9vVrGb1yGaF3LpdV1NJcXqZBXcB",
  "key10": "6Rhy3xihsAVBrR2YuBDJyk9atkLQaqF3e1dSWiurvjhGVEhVesNrL94ca51dKXuRUExxw84zWJcjNRcftpduUpG",
  "key11": "53gU7gc6YfjV4436QUGDC5Ht44CGVESEfG34MUun11C1Dq9RvZPiwVPSKDfCzpadNQhWWMZenPqRPsWtVffXcLVQ",
  "key12": "4QGRxcwDMPyaU1W7SCiNvDDL1GH5KsL6NthAM3mu3yRJnKigL5KdxkxReux3Dat1CrVHff9VDBhstiyAwvrgkSjs",
  "key13": "5jeKoGWFwxUC5qNPsqYT6FVWA5VLqbrAsfkUoHepG7iKSHsfFGifeZMovMWyFWoRKjaARJxegzSchXkLUF9esfvm",
  "key14": "3DVneEpSoX78LbTK3k6fkagddCFR5Yvfu4jSFMt2MgymLdtU89GjpcKwMvX2Dt9FcBvrxKQZnMcfE4KMosKFEwQg",
  "key15": "3Dbr7Fcg6DmzFhwrqxkrrTDKi3kvubu7ZbV1kRB2wk45qr3VHHThmvr5HPmz9QWziCH4fui1NM3QbdWxCLUyq79o",
  "key16": "5bW9QrqRBMoxaCRqZ6dnLyzTJqvzxLNJ9yEPKrVF2nJicDGWt8K1YFxAekkehRp7UYczDWTJ9fatd33LF71w1KLS",
  "key17": "3miZjSD8VhiZx9sku6ZU845s4WLHS6D4KLPDtaxUdWgrAW7mfHCERdHPNmwMCqn2MJkYQEZa8JFX5Y7JFpLCzffT",
  "key18": "CrZC1ib7sdKSTiKsgP3Np4LrhT1vKataCbRMvuEbTPmRpTWTs854LU6yrAzHaRqJpoApuFora6KQQiBM5XpqKPm",
  "key19": "4mZkhpsKFETXdCyEN1XBg7oNTAXcn75eiA7CRxczHNXA8NvemG4vySPH7vj7GMhrqhKCV2VK3C2ykJr7ViHwFgbP",
  "key20": "3356sxGTcaEogR1uLGwTHhJa8QhPmtS7byxpLY8zBuvxmdGjqzCxJiGwjHLPPRDKj5xWHy7Tjqj2RHjjKsgh49We",
  "key21": "5EFadLdYPng2AhVMcQaqDqGqjkxk7YT9mdLfT6EZtsjLeLDYUsz14jWMepgre2e7c5jXUsE8mfMLaHkhpyopzhpr",
  "key22": "2MmdKEwhryi83onVhCTXVeN1E3gMD6X5L1Du1CxfhEe8bQcVx7ogZgzynZUgyMhrKL7jpyQ3EwfLjTvixtJ5q8Z6",
  "key23": "5egzvp3gHpmDXrQW2K3yzGuMjCW6Nun5CxvM72jSQGyJe7BHhQ1FqVEdAoNe9KQRHtCfdfQNbppRfzMqPNeATZ5n",
  "key24": "2SAVhTkkMAfx21RbGy1TpnZPbs6frvj5LBa25AYm9LhcvxFfd51EDDKtCvqM3NY5JgzxhZwZHWLfHKKRGGWiRBKC",
  "key25": "5zEjMvkTW3Fiz1L6Uh3cSxqpMuetpwujSvQDzAzpaJGwLD1bG9W94Pt7LhUhZi464SQ35389z7WvZSBQjsDDtefP",
  "key26": "2uywqKq4iVXGWptxczM1AaeZdRbjsdQdKokpLVhf7sbZ8xCQSawB8ncUMG3HPr2iQuZto4ZSuGQurE4B4NLaF9WT",
  "key27": "5TMaCJgm8pVDFpt9t4mWN3f1yiAcRbvcnzecbTYLh7Womj7rCWTrsqTo96Fq59okHB3XMFcTPYcTXmNwo9Ds6iUL",
  "key28": "283NpBw9Wk1BnvLoRcac2NRg5ZvFPJNdnzgGpLdiCQYuCwGMFH6mM6W7Xvq5GsqrHkBX3QrvXLvtdSXSRrcX5r5E",
  "key29": "29JsuNXsMnqzWth5CFAYFKucfx6wvnivxehRM3prAodzZTqy7oh5cUuiDW5xydGeedqTGC2CioUsnfLktdJbk89t",
  "key30": "5xoLqK6d57AkkF5uLokVUwAUt6cT8jux6hzwkb1tUAQJLEJtrTosg6yesyKFfwy5wQNMH1yoewMrCciV38QQrNTk",
  "key31": "3Vf3KBwSGkDK6uGXaqa5txwwHRJRpoVF8Cikwuwv7sYFKuguruy3ZVpTFEjosVsV5A12ZGcUdvrEwcUmipfey7u6",
  "key32": "3g6ftoMTVuWBsAehLZs3uoybRL2wLNcssfEj38Dw3KJbCjYKh1faqJYwMzvYN2FX4mC3YTDBYEeUNaQLCcSaCwgX",
  "key33": "5Yk7dNz2JxPvqqwprEfFKUqQekRzWgLJ2yjjndnSHW1jdZojYdf7vRpCfq6AUCTWMFx9RZY2CEuF7ydShugx3x5P",
  "key34": "5HXntEszdWJPDVTESmEj6c4jDqeA5PDBybrBtASGuQqsjZfU9rYrvpy7gfrkJtEQJebiiBJ2ppaCDLkLdfD34tfz",
  "key35": "PGgiQmQKAKJUMyMqno2vFgUGVMmacZziPxLtUp4eBpRpBaGb5gwuaEjtAzYMjE59MytsSGD9Be2F4ZNbwihkFpC",
  "key36": "nbH8xT75P1BARXqySiPY41Z6ALFr5dc7px7jbJ9cA2pBV787DTB2p8dmC3X5wgxjhZzLG2r5c2A7uFXaM9DmrD9",
  "key37": "DkhUqnu1XoQqDWjfEWLPJKQCUH4c8t3cLW2UxvJGcFSUrFMqryFhzoFYGyzcxSDpPhPtne2sEyT5kdJbpcvASJZ",
  "key38": "5Py9nYFBuEGdQcx9bhv3B2Q5YHtSaF3h8MJFmGPrS4rHsinkTFh2zgUU5Qsey8UacPBjRhNQhTwU1beXGa8MakDR",
  "key39": "66GuayzaEV5yqWRHecSQGJXQZY4kCQusspEmSwYusDzu3jZx7fT4rZkiPqdq9vb65LEpE3vUXf9vMoxuBmBzAK1D",
  "key40": "5P66pU9RKaebH9LtAz6Unvts8yYLZHaqQEcZ3TxFCC731gbTrg6jxa1Q8mBEXHsCVDv7somsPJGmujEBEifXak5e",
  "key41": "4u7uXzTQmNeJEip2ok4DRvLA5miiGnPKpVZ9ugKVC6PPY7caDgpSUtwg6ss6hkDPoZzjtSLcxNgxCRRW4LRZKyuV",
  "key42": "2amycF2JTjzkM68SrZh8ZyUwaPUiXAYxhMzatgGfKY5BKzToWkv5udqpy83q4PhyXrLtXrGvpKRoNGiacfpZr6Wo",
  "key43": "5izy27qPVkyuLhCpoZ6rx5i7UwcimmV13sWfm1DGomjL7Jj74YUBZg52aA7sXCwq8RQTYaJZmW4dGQKTY7YXX7Xn",
  "key44": "3eHg5Bv5oidzzNAHyXXmE9EqU3fuResLB4h3mCnPCRDa1yxZi5EfKFh7Q6LHr3oamtxeSEmBKNRzEKXnBczSU7dt",
  "key45": "43EGb5LuChk5sg8uxeDam2Aa72KjMV2KC1bZS79U3YgiCwCZXaHC5e8aDEryMhTzFureC3aCcj4rKo9eAmKux4pD"
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
