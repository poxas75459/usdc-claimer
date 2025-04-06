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
    "3GcNwHBzqktFVGBNfFRJYRDsJ4xKhfQpNKKNfVkE12wfq3fyQeg75SJp4yG93yYS8ASKnmrpuuY7GmAca8gBcopS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vkjk4YovkfpbmjBoSXhVoTS4Rgq6Lr3vbXxTZh6ZZTkGTDgSAsPfU8g4qrJXCehkie45TRFddSdBaSBV4ThaNci",
  "key1": "Zr8TUTPXGwSNS9j9WbhLTcEhdXBQe7jo7yAttr8g1pEHorVaf9wHPfrkLB1gWX2rFZB8w3PCyS8Mx2VrhbtzQ9k",
  "key2": "3SR6GeWkTy4ET9qvsZLjkf94HrcH8Yx4otiJcWBcRC8GZ4LfPhuhNqPtmTMYatJ1GzKosVpmLnXj8jHMpjtw1kPz",
  "key3": "5sSQQgpnAonGeYFhgZgMSPehKRo6bZVqk2Y6krXxGFPkyexgsYWprYwH3qTKy981zGgMVX2WYiELgiCkkPzgtsRm",
  "key4": "5HrghPohMjxjmQasVHxsfU8ensEYRR5FoiY1LaLFYvLJUU9oEuxD892r7iVTgAAxng6bmYR4g87kM6eWEkeSwUTp",
  "key5": "2Vq838zo3d6Bz51hWHtpArEudCn5NUds4BT169dBXL8XnFuWvnVNi6wzAJt4zUucfDkt25AAfZoc1GYWekwmCtZ6",
  "key6": "56YkfUG8kvGaRhWiLSHb9QXquE6YyUdd1wAoGLVNaTowzvQQLS5j8uF1gea8y5np1VvFTtgWHUUmNnnfMc5JAuPS",
  "key7": "4mgVNmgHqsrAEC5LY7o5huDxmWcqQeU2y4VnMk3t2KRh9DR6UjZjRYmdFVuvN9KGAuqv5HKySZp2hxe2e1BTjX4y",
  "key8": "5J4jqxz9zmiLmRHyR6kxi59kBRMigUGHanZzJLhSAfSN5fHMzGKAPWRdK8dQPjaJS2HEsjk422qsqNFWBTJcomeh",
  "key9": "4yifKiqjtZm1cvEG8k7UEt7tiSuD3sxHo4C45GYE8TPtJAogGW4i43zRoLFnvf1UGSvaVaxSswRWV7WoU9GmCpTW",
  "key10": "35qj5HF1Ms9nPozKwVQ3igcWJqpTzR8K2XF4SLYxJPL7a8zcffJcSCzGo7G2fXd6anMUevekNLYUVnsQyqWAP21b",
  "key11": "4rnwYXHy6TEhCrckwRY3rbrCs2h4aiijcUuaLbUanoP7ncbDZERJQiihYKbyo4oYBJGYwosjzteVkhG3h58aDuR6",
  "key12": "4Gtpn77396sPZ7br6As3KmfAJQrU68e9bqrigBiwF9Kw2qFYNwSebhDTC7fD4HP5PdtYfXsuzseoEW5ZdBD3X4vN",
  "key13": "25rRF4LShUfjjVu42eLfcWeXgWd4Kv4CemdhdVkASDqHt4QPgYFBJjSfryLCCcvK6uVgoCSXSF1PJnAeYJrxfa4P",
  "key14": "2vLDgMy5DeV5qhcWTVxGnEMaqD8Thknk5FLrd3NGMyMvFKvNDzMaHwVhuF9cJLa9e1PWgvH8v4cCrDyEc4kcG1s6",
  "key15": "xS7ntXswU3YLtaN1cCiRfkRc5zs6FPQfyJdhA9v3png3Y3FVmgbvdNGcFKKitxjw52tHzd8hsRJPkVsWP3NEZuA",
  "key16": "5BYKxQkeMnH1JtKG6Gv8kWugTSny2tFSZ822Z4Rk1pRp3YX6LQk7JvT3S3MkNvDykHDUoViQNPxqPDVhisMDnTTq",
  "key17": "XwaTdcZBEArNv5hZcEt448zCZH68X9h4JktcLuY1KHk2hN9bQsR41jVisxpYAkDztK3VTGm6YVDKVbQNC8Kb89k",
  "key18": "2PcgWUiryqSB7ZxcUC5sBYgDNDyMoy9gGWDgmRrYefJf25KecLaRKu8EHTt5joWmTVtZio287mzzc1YcU3TMPiwK",
  "key19": "3eTUr31tkAyYffDxRtTT76f1PEJyNBN14pV4Y43VfNRyVzaNd6yUHUJ3VWVn5PPexmBr9YFifzVyqZ2j2j6zeqZT",
  "key20": "RYuLephbdaaCnbfBQGBhGaHvQKZVbyHQUxgZHXy8yLgMu2Ra2fjUvLkPjpSdqnqg8MZFbkkyTWsD1JFWV5jgVEa",
  "key21": "37i9VXpo3bRMRXWe3X2yh46T8hbhQoBfuEwUubXsv7Wz2Ss18Bfr2mHf1qaHG9qffXpMDJiHzGD7wU2vnLb7ByrW",
  "key22": "3FsPvhP6P5BLCwA9uQ3qUbnLpJMPVr2E8wSaYBVeh4PbgCwCD4UAaL4SHCq7Y4Ud1qoSvDasdoYyEz62TNtu9h5V",
  "key23": "5BKYo9qUJJjbpqwHma1jKMoBHM5juqG3T5VQjwxdFkX4Ddkv5Jvk7xDxU7b1JokB5Ho3aPrPgfgd6hGxdgs2c6uj",
  "key24": "3uqZk1dNEEsQ4R4tv79baC5JfCDo7ggJFwftqqJSBmpi2H1gwiWakcDNEMBgRZfCWyR7ecXCxuSCE5Ng2zrPtUXz",
  "key25": "DE3Pca6N5JamghWHhzPrW9rDQS98jo1aAXrJKqanWqQjBZouhoSTabpGBEB8jiefkt24L4tPnszPVZmKk8cJ8kg",
  "key26": "cTKpSjYS4q3mX2Lk8ZU7mf73jf7UKuCijuRcFigd8NuNjv6Y5r429GHe36FeZd595Jus4iP5orgYn1K27GWPpJw",
  "key27": "4WFLniJYAcBYUenxAvujMCFjsPtVdKBk75DCc9FNW8tsC3NFDqPpKgn54SwhFbApzSBkQ7L6usYUca8PjTvExG7R",
  "key28": "2WSrm1Uucb39cqBCaG4Q47kcsqhNR3KE8Qo5LXYnZqp1HsLvQBB8dA9KKmUaXGcE6sZiNxqm8PsLZ1XF3iUNKfxc",
  "key29": "2HeBcyUaRRPcKTCi2SNnCkGZPaAfEDJPMAgT4sLAja2BJzAYKF6vfD8kSkccCdfZsSRGGv9WmcmLF8G7de1mMK9e",
  "key30": "5BERRT8NHwphneZET8SeGiRe1jF7d3krV7GvZ2konRPHNpVHqqrBu5uuCur8QVcMcDTmSqgC7KE6nosXLQaYcg1y",
  "key31": "3YQPMuVrh2121bxRJSDX9BNrNDcJcEYsVgfxD36nLqcYpChh93Mh5jkaHN8p1C7ehngg64qqfCbYvVgwQD1t5JV2",
  "key32": "24o8T8roCGX1sjnnUSVU8tS4Rzk19MESDx2a8CR54PWEcyB36isfvZcUpmNeLXcduL3kx14o3VvE8ZznsogwcjBe",
  "key33": "5fDXGFRGv8HjYGAm99LVoBaw19fr8zcxi2Ux5rDfS4Gsg1prPSz7XK6dTVzEckK3vKjgJjSe8qHS1YrbyWWTSpoW",
  "key34": "3sGHX68dcTKByqgx3ps1aqasHocdAcg9Hyh6S8D9SsVWUUZMk32ZG29YnQWEqT5GJH5415FCskK1KNM5pnJqStjB",
  "key35": "5wZEyXrb2AxfYsCVmGW3N2X7yHARRZbC892U8w6eWAbebkoufPGFay6tRMcjXHGfNpD2KtdYULA2rn14EVPAisAY",
  "key36": "31N1jtzus3yBU3HDdpTu7qrzNibsRanuC7dD5wUjqvfmhc2QLBzN7pYsEyqS3PGM54VrjdjfcK7T5NgRSVN4e6uV",
  "key37": "4cN6WtpT1SpEyot1ExYGbmj9CbUwSmz7LUGi6RfX1EFq5iiWwnesyQHNZzeJhEXwbZWH6dLEqH2U7YWab5fEWrSK",
  "key38": "2W4jTt1qBf6hkoQVgY4FGLi2BQDn6h6RUh36UKjeLxXxwe4DDx85pW5mSzVVRoSaBCLEX8ZSJBdEHrzaTgoiHE5",
  "key39": "2vRa7aixURSshUpQpBV5AMeMP4A9NJnsCed8raQ1uogFt4Jy8THmzaxuhmNvJkDM58J3UUWHAECvSHDm8Fgu3MCU",
  "key40": "43DCL21R2pq7CDrySrScDhoGqsAbsi3KHf52b8QyZn955xx2sTEgtTq3GWnEthF327TrEqQJYRwUy9hBWVVo7JgP"
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
