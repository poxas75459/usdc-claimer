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
    "5utgh8WwrTrtYbe8gaSzDtTj7vwPEddMFCemKmEJdS8YdSnz9ucdmP5Vif6sJr68S3HgXkPpJtDThwgDRDYnWTDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tKicUDXVLwiv131UJEnS84dpJQK7dqsPdLQEuPhe3zMFnnP5v5Jot1KByRYHN9HwjzcVJ8wLreMkP5RjGhjqBUi",
  "key1": "2rHRCunsMfqqQBzdA41t5GX1obSUY8vYh76epmmv21EACsHn3PSDLaBN66r72SpvhqaMkViC8sWzUkMVBS8XqD6t",
  "key2": "2XYaKDHH8k5qwPZqLUeeJTqcmS2hCUVH8nR6vwocEVES8Y8VShn8Zn9C9hw9SY2hxHuHj3d21TaWVQWHvoWjmTAx",
  "key3": "3z653TrrvgkuRUfXFp4F8fdKRgg5W4RnRtvuvBAffPqH2iC8FnmHUBEHdqL2u7eCcamg2tCX1c67vn9umdwNNJCj",
  "key4": "2apinGQnPERvCChj1dXBBmYtprYyjXG8TJj1x2X7Gmox68J4AhNLqSFjG1G8u42WXtNWsBnD1Bf4dZqbH7KmCFcG",
  "key5": "2fZ1kGfPCi3ARASqktiAATVX4HDT7Ax6uJoop8QyN2ZDtEvK8q5CA9U7uFbdbhdQ4aqZED6tJaSjhgHwxeqXVYsE",
  "key6": "4V7cC1knxCawFcDD1eSk1WaHdHkYikzuAi4RjRSkYTS7ofC3rGfgCpsppuZLSVBR9LsDZgmmdtMSyrsnAFQQNWZr",
  "key7": "4DqPzSy2fes2KwskvpNb1nAsdXEgBP4FbtL3zc4uNpK2jzDa6GWKRNtkR9SwRUHAmSt1PYi8aRubmATTFYTuEbzD",
  "key8": "3WuwJrpuEEav2beZBKXiFFbVdYYCMfA3KHX8NT4cdmmx98yt1uzSWy6fibbZXnQvYnQECFfdNob1szzLVo4hFfAB",
  "key9": "32xPpgn5J2hPGnwJq3rWC2sZZeg9NJdTZXX3hQhjT9Mxp5BhcPaj1CfjpHgL7yJedRHHojp2caqCNFyZnzFiEAVa",
  "key10": "4hoHzgCJYgjRATUbNbqr34Pp4DhQQ88PcQQLAojiaWURooxusoJsCyUDueZewcZUCdd3bLs1BoFB4scWv9NAq8HR",
  "key11": "25VpYG3tddiCaedJYtMjaub4nv68nC86X4EaXddGjb4BBjDxgfufvC3XBL8XNhedVeUh1L2vyJmgbVnikZYrDzoH",
  "key12": "26uaMzViM7n78ckTcs8dQ31J6RgXAqJJawZvZt44pmUAhGjGjeRSSJSNS5hs8jYTXsaaJyN2LAVhyEsTqCR2KS7u",
  "key13": "2ZPC3zV4pW6NEKR8AxRAKknH72c7rBu94uLDvR5tveLQz1HcqVmcYn5Pa92yaEHQKXV2FZ9L1cAVpXpFUQfxSE43",
  "key14": "28pmQzV5pTSgojtK6CukeKfcRAcnJf8SvaurVw3rf1RQq1RporjRWxjze8zhhxuJgF66nmCnJc1Ak4Btex4svoYX",
  "key15": "4KPVExyZQN1Fmp5U7XoFoNc1cPrjYR2sJGeqHyxwwKUNiW556BV8dKszVsrKsf2JkSnyZQw3ZGwTnYidSqFvMRX7",
  "key16": "36BrfLeN38NGwZfaaggEuBFWaCBaqdYRXYLP6Xs7ky5cBG2G15L21vpr4khacYxXcb6LRM1xXZvBUsPoEkVe6hLX",
  "key17": "4Viq7rspAehpgjz65ZnqtpjKfnNorYZkunMr7gZMNakVtA1jJPjQz5EzZCwGzbW8tXFUWRqXkpiX3C94yobrENvj",
  "key18": "5LEHVUuk5Bye7LXDZKcoZYvq8LwQJehSUuDBB3ivH5wF9YagujXo53wxF4pb2mPSESbDJEeNstz2ERECgGoi55W2",
  "key19": "5BiVos3fY9gD6xiwMT4WLpkw1S8uTEnVEkF9ZisAJnq4F8T4gUqPGn4mouN1nzYFk7CHUEVhE3SVnSo161Xtkjoh",
  "key20": "2JJnVdDcXGKaNfBZTRj5V5BfSetQDgzYFnwF66RVL7bCqPeDFWA7AYNTukPLigEZ1FLcvpvPAys36yUrptBP7nRC",
  "key21": "2HAsMfQoD6iYL2ipAixD4N5QHrtqTKegWZjvQEX1fh5hNp3L4GE4BHK2FARHKVYVtn33fzK5wvkLJHaMMMThukiX",
  "key22": "4WEytjRFa4StjnMJCY73Nw6tfJ3WLdtfCHvsQEcCVM6vHFDqRMoHvbiWDFdbXBT3NY6hFp7WfHhEAqyem9iEPnZb",
  "key23": "nNZ62oKknFfZHLAzYL7LMaRLina3cn1AS224nVXUFoEi4KQ6G84tkjk7Pn7tN2uBoDkLRjfQjVQFAdTLiucytrB",
  "key24": "5UPY5FtJyMZAPKCduyPemcoag6GJfWzy5ykSGgCccPALVzrVtTKEd3ti393nTrg5SfFYP9DbXBmux6i8aGPjc3kN",
  "key25": "GZVRaHAUnYTc13Nt9UuTTgBciqBabNKC4sSa6GSizrGiY1J4bdK2MmeJgkedNVYuWHjvSsUr1m3SeftFEXzChNv",
  "key26": "23LXTqy6kLWvgoPsrSoneWjRxCA9V2koMQdvuczKVZUSaJVh66Ecqkz6kkpiz2dXGX2n3NBug4gk71N9F3p1m9V8",
  "key27": "571YenWStW5vSWh2kbaRGKJA97XXTSSU5nqmAEfgzM4nWvKivexNJKsu68VA97znXULXG9FSpSqV97BrcmmuD1AA",
  "key28": "w8XXCrBa7uMngaQWVWiRPgugXma5e7cKeQTNbKqS97bZKzRgXAgXsGTXfftWQYwhNsttxVuqw4Hyp1P7ZGTkXhr",
  "key29": "5121RS9earouASykUTbto56ZJ8QVo5GjeracCBbGNi4ANaLg2XU2ywqSxpe3HVoKYPUC6Y11TMnUatME8kZ52V3H",
  "key30": "45Mem9qksY4j7YJwYNXS3T1QfjjLrkCGTdFbPVNeyAHcYCbe6FVtwdxwpFBXYpHiSXDZrinPoUWRtRRJYpLXYAWP",
  "key31": "dWopJ4jnsidFFf5ssYA3sNpr1z3ufo6Xexqc9tUmR4Jy7LF7t2Jog2MBp1yg3oFz8mJ8Eck1P4N4RTDZeppNH9q",
  "key32": "5VDJWjjAdR3ky7MVJ9h23Q6tYSyrxQ3MusUwUhc2qENzwr4fVZzNvy4yyFctLWagx9AYwPVLN2gMHHMaZwU4R7uc",
  "key33": "4XNNLLwAhan3PotA2KLZ3naC2doLaYvQj5xQYbaAzAUrmXW8nm3fVqUVowxEQwXCfJS2uzPMdguwTwzofAYFnRnM",
  "key34": "4K8Cr9bnRfG1V4qspU62TzpcdVG7ZkUrJ4eBiTv677czVTkWKnjdJA6EgNVFFnAVDKXMCMrEfYtPWAfcs45CAcjN",
  "key35": "4ipaEYrHE3jLUTMj9twc2ZFKBADGFHkpBmQqnd7PBgWB7TeWqvsCdckTzdQNHuuVoLJAU51Bd98GdKS5eoMzkAWa",
  "key36": "hyZsHqCdpbY7xxbmXngwSqiVbfmFgwRLFGo2f8ZPdTDGqGdfnJQvh6aYwVxwrqKmistJo5JmtKMXN4rPzCDcRL8",
  "key37": "mvXPzsn5wntzDKvyjyN88U2pu1J6ke6WNHVAJb3AuMC6Q13eNGJSRtUeQJoAqwC7L6vY4kN8CeNVRwrnTEX2akK",
  "key38": "5jKRLVETfsYNR9vN2ny3dMkQRUHWB8UkYuZ2RUak5RF4fbfj6XkVZcH6CVwAXPiXY1JvWVLYwtfg6rZNQYnZtWoz",
  "key39": "6Yez1J2TPkQCgBGBbCynsMm6YgrcXYKfLGbEEdnY6eZMYKmnfAAx6abJ3DBkWxFoP9RcrCTqU7h4WNSu27Lr6Lg",
  "key40": "4jcEioiTGscfUSQccfFE8hTBkrqmQQKfC9WRPxAtG59B6nkAm5qyPL33hCJm822Sngset2zTWSMtdWvssZ1z2Acu",
  "key41": "2ogxRg1F3s34rxRz4VJAjhWtfjbc8mkoS2FAHZfM8SMNkezeacwUEpDBd4UiuQ3MdQPDNK6JgdaWVuTEu4HbDAYJ",
  "key42": "5FmspiiGZrMxLi1MwBBLAEAfspwLghyT2pVecyPzXX6j7BB3Jc3kjh1kANH7tHXZ9GbcvKg4bTK4wQe2491xafmq",
  "key43": "2BN7FLkAX2xvSi2uFvEYNsG2ouhrHcvNJH18YjbJTwYfKxiBtjQKBCnYBGGqm4jx19XGApcMqMFr2c3jqgTarFYp",
  "key44": "57LtDvj5wMnKB3z1DMC8asj6arD323S1qi6ECwBSPTACcEXhJQnU9HNPmo3FaUoX5FuMJX82CM6wWj84YYXwxAxR",
  "key45": "qtXQjvJJQZLy84tAe2ATrqEFYiAT6M484Pb72xPWLeyE85d4JzZF7dscSbdPPKxGgke6d3o3QVbygsKSE4WapjE"
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
