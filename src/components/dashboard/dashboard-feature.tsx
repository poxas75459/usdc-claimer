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
    "4sjHZLX1DT8DDzu3UFN3AgNWsMyo5hmodmZoWzit4cTvxyn6FRuBYt5cjifddA47mV8nkP1bLSvZX6mNSzSmMPM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fjadfk9E9NnKuSS2DgabxrApDQMSn36ewubgpLCJud4X45C95fJSX5bQL7QxwC39bJxAppm2SyKuXtd4prdMvaW",
  "key1": "3fr7o7xcpScm4XwX6TvkBsJsoHFWK8e3NUgAsfyCBMCsL5YXVJpkoEXb14n5HoP97pMYXg7ENktdyzkyfgVMZrer",
  "key2": "5PKRaGaXSxRza7KTXYyfA2cZgpkBaJyZf6LzN4JLchenERz7usekGCjpi1gQaa4x12RH8JYyxpe78W3b4juuvrDi",
  "key3": "3jkV5nwF2BKrkjEoeAJ3gH6ZwoRagMRuccFumRPSFQTSvLMaG4qHn3TZjgbFPUscPBwFtv6xJAFqPhKx2wpjYL24",
  "key4": "4FC5PGkFaN8Gv6b23hEwnNwa7FpqDYddx1JcAESJnAVnrhZnesLDZnQhrJrkqdk7fxxzs2VwxYbRuwZU44PqvDAz",
  "key5": "439JCBr1fbPE4A1LRewMDt94hm27VK7z1JQR4aEGAhoRush3RmcYFdTqCmkW3y3VruJwtcnDbnVzfsYumfmF1sEG",
  "key6": "2WLy1WasBzQVd6zDgxNXRJ9LQ5H8sn2GSnCzBSKTRh7fcLQDVryUAnDhNJg3e2ncNZzmCEEw6mTqgcCu16qP3xT5",
  "key7": "54gDrd2AUx64oKD4PUSFuSASAnnYT8Zv5MKcAfVoifv8uqZVfC43NapQMRovhUg2FMKtN1CM5ufpGdERBTzikNaJ",
  "key8": "5LeAHJCc6WVsfcY4YzjAmLkgXGWS4L2rH353wFkFVkCRmsAMH7LomGwt48QoZ6nJyBPhzWN4LXqv8BorsQGHDdit",
  "key9": "5sZvrhWDi5WSGhLcLZL2B37uVTLwe82BUtCPpy6AwEqcGjBfuMBfcuuCkxJDvhXNGbApz8V7hsHmfzP4hyCAoAQ",
  "key10": "tEzUdBizKNqPC3nxsZKGXk7mFgLe6RqpSTbJtVN4jrnuUpmsgraeyU6yKudjKYKV7Df39TBexhF2yKKp7gTM9Zw",
  "key11": "2utK5CSqYfs6niex2EmwuwqqFa1EUKfVR8w3n8PcsJvf5WvdGZCbyfm8C8Wt2kvy57EZPYvt748xTHzdqqo2kYFk",
  "key12": "BkCcini9wKLBfAwVTzrAfB2DD6hUKWuy7F2aaV8Gn2Yzoszq2BDomMTuw6qsro64V7VXmARHMbAHUpNnB5LEPiP",
  "key13": "tjQLYHt4caLKywQ7kL23UCoKAz1SChiW3xXkRAwWSFwDsGGaXCtHgnAq4ZXXzqhh5uQye8kuoX1yUViCLZTnF6A",
  "key14": "31ym99uiP58m6PoVzarwTmva4kFmD86UPtunC4rr1S9qDiyUUpTWU2W3sRb9kj7fGbrZGxnrWVF9qLCo5uX277d9",
  "key15": "FLvaAeuaxyppwtWyDVMCxXqZFXbF1ZAirYZN9jpguTFXu1Da9qLs6q1dnMVfm7VKZL57S52KecghiRErsuMHVrY",
  "key16": "4R7rHVPQrFzWfR2JdgHMDqx1huWUjspXTyV97tXjG9ohxpGJXMX8FoWxRfHnnvAvVUtSY9qQA8xjo7U7AkJHefo8",
  "key17": "2cSfSyVTMT4PJNYKgghRxfk2bXxUvRaGJxxuWN4PuTabLV93RFLMgk9Qr28Psgr8yBEyohHz9jSZaCCYaSnsvPa5",
  "key18": "4unFEPK71YTvu4vrx53Nj2oK7tfEsuU3BcdfYgQYqNWygyeks3qoHqoVViuLuBHw4HJkfkwafTVBiArsPHTy6CXs",
  "key19": "61YmGQR3sYn42ComKDZc5pJpFpu7tQpDmxV3vKzPk28GtbPzeicJbtCNujQL4NndRsN8LMZiLeQTbGwDdDdXbS7F",
  "key20": "4NuQ7x3rz2oorEqMr6TkahVTQtn8me8KhwrQDUkpEiPYishUQdndWZBhFQAz2D7mJcv5CJrPPHhPFmJdExajcqpD",
  "key21": "knhtmVSymqnwG6cVDqux9Ap56FwnshMrYtp9ANzP5TmfteZcbFVBwAJT9VcaU9V1DxcqDyeYqFfV2YW3zo3FVNP",
  "key22": "45WnW41QTvVEGp6Et8HUqzFWUzLqZpfhWPyp6dSJMSfzGfJsSQXMSfaxperBUfn4EPLLHEZcAthbBc6pPWVSnZ1f",
  "key23": "49UFBZzEyW8gWiyj9bGMvL12qKXL869VB419ystzCuMLh5sTGbTa3HNAAMVRgYv5gWN5iwDHbxANsJqwgJJcu724",
  "key24": "29QU1MNBPnhu8xPRGnZ3eRS5zPhHMJ22ZpJEsyJtd3uhFWmtDrE8bGzQNbNESE8N9HDXQ3UneC6jyiEGWnBeDQw5",
  "key25": "54X6n9TWUWi3LKwrZJoj7ZFvG5X21rKgMwQVvbSgTtXqzEHETAAmJqgMfGUU9xHtV87v7wJab3L3wRS589831QhM",
  "key26": "4oeDBSTERVpKDWK63XY9MX4t8m9wAtmB1w515iLKAYSWopW5gF7MEuK5KJVAMgRcAPePoTLon6Lr4gvi7Yuyv9V9",
  "key27": "2DuQvyNgdoWuYADHDuDLZUYSZzVN6acBhoTfyj6vCM3A87K6S5My4fY67yWCSoq33cSkSaVYMtB3nZMuM2nGnNEv",
  "key28": "NQuBsxCvJnLyMMiqPu6MgEW2mKmz8nrbTxSASDir8Ur4m4Yb2jUsMD5Pgto8jt8mXcCRwUgME2vJTkhhvSewZCW",
  "key29": "3SFNiMvWisRPpGdzwb6FrnJ9DBivfnEYmvQUz4te7ZeADPxToXk7jJc4TSfXKeFSubTyo7RtLNhD5U84J9fWhmFP",
  "key30": "4VpPTybtrs4mqD5kfTHQkcGfDPgQySTkw8eHnRuE7S3mWo54kyc4Gymgt8BAkqCUUoaNXSndScFmLbV7M5mzkYQj",
  "key31": "4dj3j5FHKfczcch83kFSC37EtP7cu4SnQquhE6xBxAHkDYWb1jTJuAJpFkzKGnyvw8yg1utMr7Sf21HTC5XkvpcB",
  "key32": "HH5pTJdi9hdvHj8rhNJcLgvwM82x48AjJ6u6ZtVc2NDvMtqVjA8Upyv1i29ePX3fWGW18xSrkBecmWoqj1JAnNS",
  "key33": "45iMVQFCFbaz52TBpH3wvaWmsxXP5SzZjqfiv3dLQogaF1nLSF2c5ZXWqZ2nMYAXLL77ncn9jPLFaYoTwhF6ocmJ",
  "key34": "4eAwsA2xsdpsHLH3bPxnnnCfj6xtp12PQ9DZRHTtrM9pdZXo3M2ea1TE1cTvywgNWTNTRQNaJ8YbdpQ1SmTdkF1",
  "key35": "2VubxmHZmg2JcQRxAuxuXunFQUJs5rFiHgKZo2LvcxZ4rxEDUtjkCmH3ZoxcNk6wCZnd3vopSzYRTGu1VQ7w43TW",
  "key36": "42KP9QUKFvBQSTLfzxpiA2TMPJ2Cc4w7mpHrH87A2BUGNvRGhwgaWz9w8bCeNesP3gjk38UhdwEnWcd3wRovU1bU",
  "key37": "4B3fRiYyEeDaVC1HZWJTUPjBErBrAFpgtMPSu9Q8iBXwkLxniAnhtMGFptMYkAFXtHqexnKMQLh5qBQbUjDHyH3w",
  "key38": "2d8ijoW7TY1mT7BYjuVB28JMPwUZaUgKXeXb133QhTd9zTRLDTsXo2KAqTjKig2QbZpkaeMWkdrbdAPUt4qbwDcx",
  "key39": "5JSZMVGC2MSnSEPVGdZeyaL73G7gKPTH7NAqNVNQM9qhdfYrdWAYfWSafkHFiVztk3QFNimxxEaXmdM28HSjCjz9",
  "key40": "g3KJiBdQHhNUGiLTFQYVMMuLrWEYECQvqNuf7zrerJCqVEUP4zZS871Gb5qQo3FqYE5NVu8nBhaazocg12zxvs1",
  "key41": "3dEpMCAiipShqiSn3rv5BgYcbosqqSZaHRh7RaaerG2PPL4xiKvQKUL8aBD6m7hVJqqNxaaDpjePxcVuJ8sDLGvX",
  "key42": "4E1JkTwXZxZsKHeZNcBf5awu44fmYqobB9dSbUFBCbdoRjKZA9Rbux95VXg557yFJbeGsjobphuu2RKjvojUKvTU",
  "key43": "34PMzD7uqcvGsdzy6V5UcofAuuHkS5hCyBDcNumaUHrJaa6dZAmH6FTQayLkWKLRQpMKy6MbXCdiBzPC8mpKL3kF",
  "key44": "5q9zLCTeb2L1hVY1SBQZAWysqt41RdgbARH6dCzdYoopBhuvMAqaxYQM6seCnLxEduGcTsbgQAH1CvvtehdpZvjB",
  "key45": "5WzNJTBsYhhyenWTjnnzYFokekHypN6N2aZHxdC6QQUkuwgwNanpGYULmc5w8CyFC2r4BsCMCuitSn3tBX8nhyDo"
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
