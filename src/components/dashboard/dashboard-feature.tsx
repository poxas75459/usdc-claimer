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
    "4qe3wYBEZUzaULpoADPfv8JrNMTyKtjzYjFbSxy7npTFsL92doQnJEo6eaDeV62C2hNWpNr2zzmLuEu7icYmeuBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49WSJLFvJBkzZQT9jkzLrUTXxopZZb6fyUJHRAmGB1nNyR271N63LBDxBxiFf7DsbHQR7sfkh2J3m3vS4Av1QxDz",
  "key1": "4Wsrb619XMHt7wYv7VcAUg5mhcVakQkTF2TCWAy9odPzP47CZusbbBPKee8ngUXdwwpPgVRMnjEmGVYwwgGzZTWr",
  "key2": "3zXDAz3Vm3is3MzrrtpyHDGhgv4dWFFTrXyDJ13drwUNRaQJ3kDMcHo7Uw9wntgEpRny9kSyZ12imoFuoTKL8oTJ",
  "key3": "3s8LtkgV6nNx8h3Go3ohCgffTq85Wqo1uoCVbi9dEkkTcgE9vATEtoGifpB7ApFNJu6LHJEXt1QcWG4zP9cxwYws",
  "key4": "x1eMU1CCcyq6aGJK6Mna3axhkyVhXNVK254apcFhP56YpYXFnMZzppnYCxELjTVv2JHvFYrfVHaN4L4uh7LBNyj",
  "key5": "66haSWRexmQPgwiGjEKcFM32sQcb6Dd8HvnVhjxwpjFxS7TFxadDh5CiLsDSRe3kqhsFcjTgEfJbW72i9enQZqhJ",
  "key6": "5jfD5haz47H4KEFcNNqcSpXBD7q2TFiCjTuHsZatRiKuHQPJaCDqTS1EyjUDwa7mWroCwBSVMXXnUjjmn4UMR1Lz",
  "key7": "5VpWvQvTgoS4pQLrGhokpvu3qQmSqdE1Ze6oRYgA5c9Spm8TjdGbgwX93iDG3i6JcsScdz5oQyUL5igjuZk5vDf7",
  "key8": "Ze1BxXALxwPGUZsogmeqFzLESj4W9iw5Raj51Bep8cbgY558PpDM9QP2NvSDea36gMVPZDFzXbY6dfVXxDvSFgP",
  "key9": "5XjacnexzCs6Rbk3vqQ71UE8zxjpZhYbGZF5duizTjcouSTfSYrXpr9J2PLeHXFXc6fJE7k6yZ16qdFop8ms1HaV",
  "key10": "5g5QJvLtMAgb4gjLSHVSAoTEGAENeupSVNYdyHBkrfqcWS8KFGdUedv9M5gMccmENSsqwZedZSCeDczFH2ubBKuk",
  "key11": "26xookYG3QEty5yZKd9LzmPuMbJeboawNN4NBrywc84GdT1BNscvqhEGwGrQd6jv1uZixHfEWkGpLAcQgped8XQ9",
  "key12": "3pxxbRyKibF6yidoQKFVteP3ut62icwcvyLopCKYdZeVWAGatqR2JAgsDZz92vigjaHoPmMxyZPwjcHrSuq79fNN",
  "key13": "5NsnpYWsT3Jv8BSL8F1HwFea6n8EQ3HY6ac8Vkph3h9iSKbjSSLZnXZ6LZjHyiFgo5CDWrtYeVPrvxDLhqULohHJ",
  "key14": "W1hXuuL4nioveFYcpC7NdiSebfVaPbXrzEDPCYYDgwbHbQc6M4yEg7mxonkziQYGdh5XRdSbjEJqeQZNcyyZzg4",
  "key15": "5YVBGZnPtbMhPzmqs5gj4ri1DByJ9dbbAQTRBSX1NzjumKm6cUBXpQec7J6S6BtrfgV9aEhNgyvmizc8qbTnSicd",
  "key16": "2vZQnk3BhiZiTTBRsRQ53QpusqMPqEDJyR7Avwr7Ys2FBpUjFVHCTuXkZBw76fqTCx2oxundrECtsXwzSsGZAFWC",
  "key17": "4Hef7MGxsKFQT9z1xfmG82Pkt36K78R4rSiA1weYbCm7NDLmKwtVygUkSxME86B4S9sNP11D2qD2wSQ9Ai34abb4",
  "key18": "5dCkCSGkFYWoofRrEQA4NNpqdsiBZ8SvTdKfEc2NAySPannqz2QttoQogrtoLLgdQ6tuTzYhF2Y4PcNKEe7912P1",
  "key19": "Jh5rRv1mGypdTzR21HvxPtQFYNBmptCbLhUZACiri2CbSMAiqjxb7NppFiNufATXDVbKbCFoUXUDydmmC2AuH4d",
  "key20": "3VSeb9RCPhjDhejbv2BCKffoUjgvAfxcj6NLczratuJJYpbh1xg58HfVTYFTzyJBCqoarnjxHPxXAZosV9Fzt9un",
  "key21": "5hQhaLrY41gyrQtqmbvEKTyhBtYdBE3aDC2Xzqa2KaomVJ9fYPiijigxnzNdHAWNxTJJwFDy6oqrk2ZFwjPXw5KL",
  "key22": "5RJMT37qkFg5A7wtDV2gG7i6eCZNAgHTbansHYHh4DF2UCF6qVyMHSHs6mqc1wS1eVekP1kbjsBxJF1axZHgXg1d",
  "key23": "5UScLP11KSuFNdSpk98bT9Bh9hb1aY2m3H74sfVXT2wbx9cXFUPredQ8PNYAbnT1s7Bq876WrCB2kH2ntZau4J3i",
  "key24": "rkm4AKPrfqYwXb6JkY4bTKXtcDFnCG33wzRh9Py6GJ8HXn3m7C4VLUpm1uaXpuLA3371ndQWGnb8hRPtJE7XK2J",
  "key25": "5xZ1w7iUZL2c5MDEy2YSqZLXpAy3ox49Kq3iZiLwhpLEjHzBpCp9ZU9FadpwyRXuq8PgMHDcchAR8eTTRc8wgfDf",
  "key26": "5B8vJH8PV9m2vvphKv7nEd1Jj26vNJbewpimADXB9uvg3QJzxu8JKQmnbzQp1CZoifuouUbXtssjrwdj5vadQru1",
  "key27": "Pk6eq2s6wmNzeVf2bZ4u5ZbeXaiAtiB9vuD5HGeJLSpAA8dFoDN4iJZ6MPiB9iSQFVYhhHP8pmBveZri8EHrPyz",
  "key28": "4Do3iTn9n3JARfgakydiVvMskQRKDUtcvKxBtbLq6TUQ8Dd87XZHRStJXTCriwos69YWfUnSnu4Kmt7wVC1toNKr",
  "key29": "4qc9nagWzYtKHCdvJoMkRNfGe4VZyc8gzBTouDfriaaPLNRnT7aTYThXSbPG25umjYWZoSXmfkzG68eim8HSSP9Q",
  "key30": "29YitGVNFC58NRNXk458DfEUnuRSCvMQnntRTLaKXDVwvBQa8WMockVMmTxTdXu4xoxsHBNXm18ztBBvNETwqqWK",
  "key31": "3Fp4BYGMvuF4HEuskdUpWQ4xQFx9nnX9zAgHAWrqMFuQB831cX2mvNCDTRBSWsfa1mnwptUfTG9kSfbtiQGuA2Pb",
  "key32": "a44xEbaRNQg9EdnFnQj4TLi1tky6rWXfAJy6E6MdinS3ynUzKunrCLFnTXmyW4FPfv9TcvS9dweRJ7LRNsSDURt",
  "key33": "27jfXFEdSDAFxyvd5JCi8LszEbdma2vMTjFuWayKg9tqQ3avQ2YhxtGsU5bnHcccnazsC4u9bXx5CTfTz65ftYeM",
  "key34": "5PAEuAjKHVt9mFQ5mqs7hrKykqWa1LSEvxBtyZJs6eDKuze69JkNCjhgb4YXrTg6o614JR3fvvwzSJyVCiC1dC6J",
  "key35": "3K6hjfBbLpi9V83zrmdZtayeryVWAo1QtjhFeLN2MJjM3TQwmeHuPjJ4mkWx7z8shwEN5b2jF1C52Zj6cXpM1Amu",
  "key36": "4sCW4e2Ds8Smnp5fXarTtGXKJZPG4jKyBfhbPsTmfNtwKqDe7dzFeX3tQtQSPTy2N2FTb8YMbBHdWARre88KGHNr",
  "key37": "4Tgvgzp1DjsHG1W3DxRLGZwxYpdfRgCH3r7cecsG4zukkTLmVbfmXPkccnxzsGYqojHjcBsLLkowGNEPtWbee6Kc",
  "key38": "2AGir6dLJtCqtbZAPweMewH6dYrYYiLnkFZcw5oY1dWU6gZbTRW3goHi58xvpSPysAnV3wizSmThYb1rkYftHynQ",
  "key39": "3vQVcwDfb7pW9pU8XEkMtG5kCjafE2RRE2puTELbCE4rXWsLfJbQz7w8Ht3Ky5m3fi5bUF9nm9MH62ZdLwqHNLWU",
  "key40": "3TrcbjeS4SfNo7o14T73zQ28mAQqVi62Bpi2UpE2oZoVmjFUiL7FJUFPxBE2Ep2EBPVRyhhYBXrAaVoFX7SG5tpz",
  "key41": "41P4oNiRsWcLbQEr1fqm8opedpLmvmhoRyUF9LPBHwB1hVkNSvsCQhHw2thZJSK6LLe3V58c4noJHRaYfyVCUUrE",
  "key42": "5o953aYcSFtr6MprZMbA3bao4uztLCsMzv6t7QR6PCfRmWTHQf3yDCQM6bRHnKuqsZ5R89Y9dxNcQgbNQm8C1Y8n",
  "key43": "2UsfUgQeVUc7QiB9v6DtnBr3BYLGwiQ9CEximbFrkWR5u4N4iGv81QVsA9bca1q6J4Upk9X6nyNGdR1owNRvDRAj",
  "key44": "4iWYvFTtLrUQb5WTSM9Jk2U2ircuXPRyiRemDEZnrrUA2Vq5a7DpJfHNv5ws1R55bVeBztc2JvbLekks3jKTeskn",
  "key45": "2mTBdcmKZwx73f466ave3M9KqgbPWvs4UuWSn19E2ytT5iv8RF7HqA2wJ8gNrLFCpXJhwrruGRaY1MAEqViRQvkc",
  "key46": "nJPhCUZb1sijFboGPY76mGboHjbJRADdxTC2Sg1wNjac91Cr37HV6dfz5vU5JUpZyxBNC9ogEb7yNk7nLd7i4Vo",
  "key47": "3zDpgyFmiUaJsL1Hc8eiXi65DkRpPARBYbpGznjFXs3AkVD4TzYpkPXrXHDdcD978VTSAtRKP9xHuMEGsPtW7afK",
  "key48": "vnsh6Rsum7KacMB7XVMvbxbZ1gxFPZ5WbLpYFF8EuVu3vSRAVhZvhJC3HpuSgNzsWE9RZhgPAGB1YxGMeVXRZKB"
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
