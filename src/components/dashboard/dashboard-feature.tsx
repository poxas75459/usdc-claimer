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
    "64NAxLNx3N9ZxjTb6uPJXyJRbXpUrbaidqcNPZRAhRvsFYLPsEHmGHjaVg15To4JFBZ1iD2BrvbC47bnWKWAmhrz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46w11SEKuDMUob8MecqTJP3ePkXGSms5ZLRAzGXUKDTdk4vR3b67AAtrqHnbALUrPaY7ZBECdhHsEaFVraMquoY3",
  "key1": "3CPsjVHqUbQfs76gD1rcusggc2wwzZp8Xva5awYZ3hpH6oMtrf27Dnr58suS9eDYeYuVHV529LyRYTyn4bYd8fZB",
  "key2": "2gQihMuB5GfZq8qmePyF82Ke97nxE9igTKWsYPPrBNuyAYGhT2xkXsq8kyqVcnd2qeGRJ5ZXqhekRvBqFJtrFzXy",
  "key3": "5SZaQiZt4KGWogqcnK9aQhEAo8wT6fPLLXKWWBUt6ZXpMAcFHNSC9mTw2Z4vsszeF2r2M2y6p5w2WiGYpN77StP2",
  "key4": "jDDHzsAVfZTUJjw7WK3htK6iwjhLNixGEsG6hk1pDmeQTTji23v8zgZZzGjHmriYbRYwsn4mPSgM9QvuWfzdX97",
  "key5": "3J83GQX3U5FEAURDDvPRbHrT8jUoEfuZaSBFHa8ko1KNDe83KqbLF9BjGHjZ11BsPcY7T37qciUfSNCrBTEqwgNc",
  "key6": "n6W1gDG6KmrgAQprD2NTz4u1itRHVK3WJsTcbVx7GmHD2mGxN6XtyVnyfTqCoBJHbDX98sH2duQvZd73Ghes9b2",
  "key7": "4MAjKFydpZdKisxANpunhh698SHekckcCkufTdiyJTysEAnRSbLX5ykJiUmBHDjnPubVLqSNa98hGXvn36fKMdno",
  "key8": "6365J19tQtyHT3QmhmC16KFRMoAtETbzrEYm3wGwexYfFGGNxP1q7DffyZqvo7aM5AitEvcaBtdFAghEkz7BoUFz",
  "key9": "4yVdt5cVzenjfAVGkRdi79bB4eSC1xdM5JSj7d1CSgQEB1Kpq6PM1fasF3Figs3G9oZebGoPhhtoL3k6SvQsFd5P",
  "key10": "3eVtngf9Pc9vF25HKtVn1X67hWksgFi5cGVaKr9zvbQphS7CnYLQ3q76erE5PHf3BMYPPvxVZUaUQhgZ18PDMovw",
  "key11": "rPraTR2BifjP8iAAyYefUx1Ymaj9BNpTrz5zb6RrEvr4CMk6aG4WcZ2rbGCYpdT69KfHKhh6m6HCjhtfQM2JGDE",
  "key12": "5FaiiyrKCFL5RJm8THAnYeRFYf4Cgu2HdqcxCJBDSUtqpUrveFnajqKFVCqF6hA4TvxFiP5fxP1cTPBJdqukiggB",
  "key13": "5Jm27z2SmHhNyyqwJ6tyDt21qq3tLhD9ygwGQMSzSCs3NvhMgH4ZXTx9pxcR4yzi3Aee5NRFEn1Xgc4rRT5x2Yof",
  "key14": "L17xBLN6dsD2YTavU1Zfga8gBJWwNcfHNUXcpKR3iixWQnA3s7T2eic7Qj4Ss7vZgvz3DybmBCdJ41o3wvuq2AE",
  "key15": "4oU7CaxSVdqyodEFrzRDbsMPvCR5W3f5ZgZpf9bErNvmQkLz99dSNiogNFy4vHNPMVDMbNgRuLj873CczkSEntqu",
  "key16": "2iwwuniTk3Q8sHmvbEt3pfuxDwyVrUvc9W28JPSabAc9ai9ahafJQ5ah7tHVtJpouYna2c5zcPbdtZXaNphD9HXz",
  "key17": "5vD4xEjM3uSBrHV2FVjrERPvtRMn74BNpaYe3esq17sc6EgY3aMcRs7cXkVXc9TPzr6GAL8TkWqWrcc2xca65Yad",
  "key18": "5ZpHVxDnKs6V9224EXqMDLgUE5onceTKAmsj9qZQHjLGvFUdYRJJi8YGSmonq9eAkmzBJgw6RC6ASsXjfJxnHu32",
  "key19": "5BJQhJQurJa2MZdkU28tS3UEnidJnhTGoPZqWWaXC7BkRvj38wCTEbWGSAzvnJbjvVDKKFVQC3zFUuKp73sFmv71",
  "key20": "WdgKgLyxrCnkGvLQUbmAaVUB7EjQgyys4XWsoREPf91tGzy2Wr8b8M4J24DXiunnfBSocbNaPQFukSvQ5MBACE5",
  "key21": "2bG1axjw4drUsMZcR5mwKoSrSrGYJ7ww4hB8AGeTu4fp5ow6HXajMP9JJdzVqE4nDTsRunz6YXges1eVZmNxQwm3",
  "key22": "NaTgzxhqyFUubCuKLWrDuYyNvC1CWqcD3AC911mryN8xBaHUtDS3GGVbRBHppJxymNnP69Qkf3ZnEiNfFwpcR9T",
  "key23": "56Czy5rrb5wUiA2GtSLdceZTPC2zcnxtnRhFWhfYtgTo2haM9AKqhKbbaE2xWZJGAYDwFAsY2EUy3Vkw2b9DpFfu",
  "key24": "2uAUeeUNETWbz1H3jL8dMn2ozAZkHXq4L8oYDGnJ6MuZVkiF3dyRLbxJ9fmVorFHcMTXvGdzi43WN6kvtMTySZ7M",
  "key25": "5hkjozj61jLfYMvNEs5Ezc7q7fqAd85pqecGuUn3ibw2x2CsEUN7xchxfipugdzuhQaMNFRLSv2NxThnEyvvRhhE",
  "key26": "246Jn3rRvX5ytJjDMgPgbhYVkXpAz6MriwqLysCwWZ214ik3vH4dnT3yDVpkutpPRF33xtCeCb9dSR9topymg3DC",
  "key27": "4bwRyvzf8qJxsLPp32h6GGjDyWnidnHJDGCcfXdTEpg2QHTyQhEnSMFF6maizc43rd5w7LvmiEEcMe82saVcMuoG",
  "key28": "2hrxxvaX9Z8nmCgo16WfUqoFyMyrHHcRjNRGUCdi6YCACSYay35SQ9bfjrut9SheFWDjNXMAUJzb3R4NGMSHXw44",
  "key29": "297TUFDv4W1cf2EtZmGPwunF2nv6aFmBruyCpnKrJLtG1rSxYbtC4TnXKzeaEcaNdJsyRhscmPn9Amg3udixBFCC",
  "key30": "5kpxBiXJHQryLyq9ukpjzk7gwLpYKwTpTRyNeSveucmC5snxsofVigLkrfcrpMte1A9vtsX4tVudiqNLTR83cwWB",
  "key31": "4zaBQ2pjcJimAadQXva3NpPmfC8UcqYUmFhiwggtUjR3tHeNtKUHiNA5SW2KeJ9mXbS3TuSJzCr9cXowSVf9GoE",
  "key32": "2f8cMNkfGqfEuZEDgzjtUvJqbNYg3ehFR7JtUEHkVKvGLCg1iaoP47YQEw8VGMqPhUr6MhFbiQhqAY5on2Hb93oW",
  "key33": "GFtyXZCgZRYfpKXyFxavpGfNZgCw6uzJJ2oRYRnumTHY7dT2b6XV2Xw1nkpKAyta3zC2ujHinvR28C4rE5MpunY",
  "key34": "34WzRPPJpWoWYdSqZpX6EoYRi4pjariFx5C2dhX5qSFf9J5uNBFZniKpo9Zk8RfMu9kB1TihG2kn3zNW6jW47pgS",
  "key35": "3qzZkHdUV1B8ZEmU5HCxvvpje5U2ptroZ3eayDVGzqiu1LiT4bb7JLhkSRQXWTf6AuayY9yMcBWegJjzCTraQekw",
  "key36": "4zSHzCtUqf1Ue1GwhLebBjzZxmTzVTC1MLoMFS5e1AHihAhWBQNXBgbxiN3Xqzn6MuiCVdbchfy93BVfRVu5ZT45",
  "key37": "351QXQtfZe3omqiaxsXGUPcjJtDiseeoCunjfGFhDBcCFkVB3fnMJhnpjprJdg2htZMdo5d8LifqrsDm2HHMADzM",
  "key38": "5Zeyt2Y9gpwa3s2aybh2mBtYnfccLQsiWBxBcCQK4qh9PNBEKZgbDBC4ZDAGuUo4x8JHS82dBnwTgdS9ow1i5CnJ",
  "key39": "N1uqKyXTFHsDipBKvSsuEtPKPkGrfAnFeiAt2rrP5YYsvongffWJJwxr8KuBkMMNdMb5rgsbdzBPHePxhTwoTwX",
  "key40": "2n1kAMafn4dsNP9dZeSPhTrpvmrA7z1sTPxzJMLsYwAJEQR18SDxW6LdjDARJ83FSkHJTga8MZ6PZFjkHLPmqFwu"
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
