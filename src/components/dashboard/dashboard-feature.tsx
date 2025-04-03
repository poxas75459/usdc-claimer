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
    "2Z8sY1WW6EaMW3uV3at47yPqtoaXwbLjpzB4QbmEM3AG8PGWbE8bvpGP6oTcAMvaQeW1mCZZTt7LSYbiSAX3S2Rf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bzk1bBm4K4dhMzwgGUSNpRQqdhX2JSnnDZFemQCv6aBSwuncuShWcy17eThdVWtt8H1HKMtigFbqUJ6xKmvuGik",
  "key1": "5B7Zc1HdV3neyFfhHzi4JgWvdz6H4x8DFjtX3gMMGNuZB78WVvTJinzMSTn9fJuoC7tQLUikd56FnWMSrTHgu9WG",
  "key2": "46zDfwtQrmHGwSSMoRywFs5DxeLZKM1NaLmStitMapuXPgHzYePvCX9fbtuAWaKY8EVUSxSVdFz6a6ZU7Ymk6DrX",
  "key3": "3MmFPKPPkBApJ9KfAo1iYg7iNsabLEyGG4EuvSg9tAaQfXgs3c3iDygWDPjVaeU3Js8ejEwm7FK3WvHx1UBmuhTk",
  "key4": "3xYyQXKgcZvuynk25nSffHnJvDRtT6pF4KbDdvJ3CNPifzQSxxC5zLoyF2X9QVWgoicidJfN2chGgsc82DE6J4iY",
  "key5": "23B2qrbgN8mpg4beVfNAqMRbnqZ4yQNubiRmiRWP46tkemfX666oHrzUhoXz3nMsQgMqFCYL5wdyT5iJxitRq5Jo",
  "key6": "5SeGXvSFqQSsj7F1izgPm4kteycAhQvBB5TvFxHeXV9Qh3kuEd1wZYcxtdLjM8wH8cti7qLaA5zf2eB4JjJqYkLc",
  "key7": "4e53Y2ZS9b1a5PjHPys6iewVptaU77D4PhTELm8UNQNWT77AqaqR12Q2vRRNwBs87y7Ypmzm8xVfWn1a7cyahD8K",
  "key8": "56pc9Y638oHMiAqLsZvJEm7VADRHZ3NQhm88s8mc7dmAKtLEbqAAhdQrK6uWvRHiYHcqnwJ27nY43UTySKWArgoa",
  "key9": "25J1McT3giYZqyBykDaYyQf9V6QHg6cMgnfr36gHh71ZXVB5kjwGUvUkcp2ek9qaoVFE4gmVpkf8XNTiPLxmcyTj",
  "key10": "4oEi8xZNsAttUd7A8Hy9Mufq8cdfcs9TqVND767RAyanPUuTVYEnM96xa2cXR7guFwVR3Fzx2MZ8hsrAunHV5HUR",
  "key11": "4zosjeDoRwcdyYUEb3J2MSTYiR2nAUV8rhxaaLVPU2CcxVDTCHQ9y8cdKYiKAhdVozAUPmogPZLVig5s8zgD1es1",
  "key12": "4nLHx8mNDPy83sG4vigGSMS33NkVxAdkuqaAePCdrsSSMpkszhTFEQ9xYkzf2ADo4fEiTL9cGNZnkiWQPYyMUnvD",
  "key13": "5PcL53LojHN5dh3ePYYyqnvFMX6TZobpMUSA6uTdoVFbxeBPvu2aLUEovnzUCpDg2WL8LPEgRZmSkBLeDR9SsCya",
  "key14": "3um8JdbS9EjX6SXNQyXG93F6Se3bs1RAKXcsFr3q1xcz7Tt85paNJcerqtAuws21Zzb1GzKaPJ8sm5aeUiSJNNR2",
  "key15": "4qL14gP9wwKKdu3JXTdJAh2SxNnpjY7pNDnnhrd2Mi8Nim9WdP6J1E42gngybZhPUgM76LtXYn6EhPRqHWqqBoqB",
  "key16": "UYm7ZsMz6Zv9sYN7Qk275tr8eCiMRUpxhJv7NcS5iuHNUaYpZAiJv9eaCsn7oML7JjwfMY6Ftxsm9A67A774kGV",
  "key17": "3Wy8pLsX8uaziwWsnGbSeQUkJEcSvWHDKDp1jNDJzwyVNU3U3KpHTQChAmbMTR29bJ8hTMosB8CoDTMZFG4SggGb",
  "key18": "1rYfuHyrnqq7qCmx6kdseLbjrp3suQfFnvBqAMRzvvUPX7e1hKLU8xWT7mi93ZoruyttzW9dhr5H32XeHpEGX4Q",
  "key19": "41ckPgF7TSum1ec9wSUwB3a9Q8S275kSNF9mSBA16HRCac3JxkxBFuXn6P2cdWEtBnYCXAjwtPXYWRixanbQUtXP",
  "key20": "57Y4GsW1DBwFng91eSY8WiqQKRRgKoD81VTuRtvSNRfLXGZvvxEhn8uqhFeRMHjFRzmJ86EMG5EwJMxa7xdgmdBk",
  "key21": "5PZEjFdzfyWPup6iE1YSAXyszXrikhi8QAAkTyTbvmUrjYVpiC7paa9JnBeb6cKZetuEDDBREW84Hr9gzPiEgGre",
  "key22": "3cTgwHtnBadw3Az6D3w19VrAYeKDmzDLPXg8kNfbtMev56cXu9Pe2477TaLqLeHF8rpaEys4mc7QxJgZpuHgW4ei",
  "key23": "5GuUuJ3geDNwUvP8TQtgV8S1LF4323oayLmrMjbfR2NYF9DtABnWaFi6aRhHdZofiZE6bQsWeJaESfDrNdG627E6",
  "key24": "2TH4KnozBubQAd6VKtTfgV4ksqVg8eTmXBzQczNvVr5L2zMaYff6SMqxvBTbwXUDp3UNWs9vSEkhYgjdAA9qj7ZW",
  "key25": "CCMCqPYTwmp7woNwjpz6UdoQ6Dqw5PVRXwJ5QMWDmPb5s6Bay487D2mQuLKTMQgycyStCUhGLxnApp1Wtk3PzHX",
  "key26": "5bJSEcFNHC2YeAG13WBJr4MoJk9aQD9zUaZDECkgc5rx7yd2KsYyhVgvaCexwD7j429441CQbpobgkssc2saC8Jc",
  "key27": "2PmRusiqmfvYEKyrwamVGiQFUdHnG9GxL6ASsUUXPXCehdUJ5C7c83boSFBNs987zixtEnmuo2HEjT1C5szDnN6n",
  "key28": "2FxUJVAt1Wm5H39Yy5BoiqDiDTrg53tJKGiy9rWGUy6E7WHZppKTKWpS4PSZwzdLAXukBWMUjDw3Hb3GvKM82Xbq",
  "key29": "5fvBMRcEoaSJdP1186qVsZfMxb8jTv5gF3G2LxU2bDVd4axEVAgiCgX44QcPBebTm8Tqj73jb2VB2TMJoeCAAYQe",
  "key30": "2mzAK7Ax1CFGPjbSobBxuozjQSVG21DxptfRy7uU7Uimxd2BpysFTWCDyeZVtn41D1b6CDUJSLuYwrWxBo2XDJPz",
  "key31": "2jVYwdsC5sCPwXETNsJ6kLGmmyk6Z7cbymgwjj7ToqvFmDPCxFTXPcw9uwNoXCg9Hg2W8BH9aaS7X13N7NS2Cc8",
  "key32": "5Do4wKjBKCPC6KLNW17Re3NLrz6fumNdHcxT3ZnjkRDkWsFnWnEfRSNx2EfyJVqqfpmdSri2p5RtcC9gnqmZLkzF",
  "key33": "53uHaPTNXECbWb9tsvmB6QqvEEQKJ96883QpdbT769pTWfjuUCpqmkTxQuMzMKaHFnCnf1VYpiipBHZ3f6HoUvTD",
  "key34": "5pLV1AKRtZQYaHX6jRsgwzoPtKHugvDRGrgxvXfGQUmTXVYAJDe7AQywB5KhLPa18vMrYrYfZswKy5L1aQXknrjH",
  "key35": "3J32s2datymVLV2QQhWM1517LZnaG2yEnggewBUUGeHtuNjHoamGjEyPhdVGMKs1chmZFDBmJhjJmM1ns85Svs1o",
  "key36": "kxASgEU6YiVYrQKtDRYTZo137GoPVHCyDzXBpMc8aABhJNb1a5ySoDovj13rNUwxHvfNMYbufyA3ZJk1HuZZFzn",
  "key37": "ijW8tU8S6EbiFqQovRNUr2uT3UXymi9SamWM9tWUp9LQaBc9CGu538CS51Ubw9JwR7Zjhxwpsi1P694ZvBu9BHr",
  "key38": "4bEPqjVRJjrqxnohS8yawuDTfYLCeLtEpNjgNoAm4UG74T4YNT489Q4wU3SDN55uWza7UHxG1e4AWhMkFpNa1X2o",
  "key39": "ikopv4S25RMJDt4u4Y96XV1TW2rKSJyLgMLcZLUqu3Qq1TXQgi8Wzc3Rn8pPk7k1BmMiFhkNejWun1K27Zm7bFp",
  "key40": "3YGDZpFvFGZFztptPhT16gMteoVRkXfDa3nTikBK8mYv5FeBqRpzdWcMv3ZJzLu5CQrz1zRaU7r9XLyXe1wCDR4i",
  "key41": "WsuiC9rXUkv1fXVSuUJWXaJDYPoY8yMAV9Bs74HF8esRtMQzFzsHi1PWyFFxC7gnqEPxZfbSqhiSsiELJaqzZue",
  "key42": "4BxW668ZM9JVsjbWMhFNRpvQ58jAtYLCVGe17hQQEoVsv9ScAFNhfqHVtacTSk6C91nMtDcep2Bfu1hWiKvnftdY",
  "key43": "MS7LjWACxXCHZFG73KaBdgtg7C7Qk6c7hTrVr8ooPL9HPP3inwJiMDmRNwh1Ba1tqFHLivn6Vo6saiCwTXdQJiL"
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
