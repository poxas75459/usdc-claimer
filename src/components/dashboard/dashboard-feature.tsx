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
    "4TF5aTx2LQN4kxQUj2mipmrDyBrjBmCxSFt75CVLxDZkN5pb5TzBoqA74PinfuZkY14XjasD4qTyDKLxFYoeJVhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nXnTLeJwek5gSc5kyN2wn4PDU2yaPprpuQdxp5hKBJxkPyWMK6hF7sGJssU99juM8gj25hSfi2MVqYugCtW5xKE",
  "key1": "frgNs9Gj4MepuyU2eFVnmWrzwwv9NM9DTUSrnd439hhoHtQ2qpHU5kuKEaNDzdfBMquFA5MBQQtnNF94VPqWyQm",
  "key2": "3ec3DN5mXBk5nrb8jCphdR7G4xMYvFCH297KFbuZLS8sJr1uoKdz76GZxvst8qj5HrvHwLg2ARUDvegaNL6AUGFf",
  "key3": "CNAv3zoNrv5qTQcnKEFaDfwbeF2qNXuH3Y917xrpBu27USkWnS9T8itVdEkA2cd3R3oszm3SxCHSVUddAkC8iZ6",
  "key4": "nABrjZUTYB1X9qHAEgyxWbcrX3YuQAgNFbodB9oQzhzaY9sMUZhmmf2sn3r2uKTvQjjZZDF8mzQbwywM3z1BKED",
  "key5": "5zjAxdRaqk5t76z1U6vuXXpYVvWM7oUm3du1XKTMmUKLcrw3vvmNXEP8DfNqccvjQoEF7Tzx3mssAWxeMsQj1zcb",
  "key6": "XdzGcWC8CFbkSVdFaccpyYvevrWabCBH6ZdoCeivXoaBRKfZmeTeCFNN2yuQwYRGk7Zh2Yzws2rBqeV6EXZHC9G",
  "key7": "5Vjz6yaETvCh7vdo9umfeYw7x6ChKX1ZLRCeuQTwFM755zybweXeFv4HM5CptvQSmcqUoYiZzCr7zPVJxGVPFV8m",
  "key8": "3kYbMebqHRZaxmNMaokRfjdG65oPmHs8jEdWGHBY6q5ibGBFCbDBDNm6AbSqUXRFcWduS2NmK97a8HzZeRNDDVU3",
  "key9": "2x7xwZuE2JkQWjBKVzSex5jZXAmdnmTVfukmQzSdQAVGMpFfSxLdCYARcWsTK6Z7wimQC4rvatx7TMVsXWhYuqGY",
  "key10": "44wVWrFVY1HV28TznsSdn5Nc3MmaxnBg88GP3jsfsvDMTyUBY89HPkmckp8zYXNGRCB5GTZ9kanESLL6DKYGTGbP",
  "key11": "2kip15xanaU4hVYv4Cg28nLYE9KE5i8KUyeeLLGBZ88XAwCJn7WMjDAsGGhDRcPQMy6H3WQhPhUrVejAsp8xJK18",
  "key12": "2bWNerv33sgmYDSYZyhpCmsTWnxAr13t4xVnVUdhaerXdNwMxuXrsmNL1twLFQiBru8cuHHfuJ8KLzhSuKjXBFMY",
  "key13": "672k2TgZEo3hE5c1xZ5WrPN2UH7ZFt9WaECjPGEbQDb3YxKZ92yHeYXJwm7hq8sYxQNPBimcDvhzMyZD2HcoYTr5",
  "key14": "4vcVM48vtVYjDWbfFh8GHrn4CcHsmUsx8PrkYtJfosqg9uWDNbPqP3B9N6GxfEQSjBhGy9Aa57GbNJZ7ai4LuS9w",
  "key15": "5s94UpvrTXz4x3YYhbnzijkzgCovAqwGo3hyhDAEnmS563yQWecVbGzVsaVZDVmWJBXQiCmNjuztpDtXQcNyMmUf",
  "key16": "66GpR1Ljva2iD7JrDWaMoXDt98iswhggzxyvxStEa1bhAAZndkocVnXHaZ96HS8Le7y29AdwQRXh4naPXpuLji6t",
  "key17": "2z51D5DnuP2uS3hfM5fboto5TcMrzwyyNPu7RYc8uh9kXZn8W3dFEXqy8oA53C9nsDX2QcDQeLNuEbmeqerb8vQp",
  "key18": "45q17zGTWFtwcUQ3S3WVp4Y1HHmBy8ka49kjjjVypiVxtdx4hvRnaDGFFXA1TEjyKmSXU5r2X8xoUKC3yQNrnN2n",
  "key19": "5Z33LH7nLFps1W2StGAM4E13wN8GtSpigVMPyhYsZY7moei8m36KFusfeiG9uXWyZ1PUjWSBAfPgPUhJjzQk9a3A",
  "key20": "4eDpvQo5tQ7LfSMrJPyJu5WFpyCZz9D6b99TziSPEJNFqN3bRLbPQLgX3v9VbmXMRMzePQ74GeDJdhKNy7xgJBWd",
  "key21": "39QRgYLJG25HqKdc9SAUDpKY4Z5MEf2qyiHMRvZf6V8PSJ9LMzZeAkZYZLKgqhoqHbyjhav8PGcnYq3Y4qQbWECU",
  "key22": "5BSTBqdM3CKEWCsfS1DiwBcBgr6NRNAKTCoqvLZtgeHrhr2qi483gGw5QjCYWNDBec53RT39RKnmPZThnGtcG3R5",
  "key23": "45WnRDWRWVCNvqra72pbjZSDbrMWPenSNaaGQNLPrViYz43B52UAdzeuA6HmbEppc1RHwwxsqriqQyFAjQvRtEVb",
  "key24": "2m4GjSmQjrGr9EK1aErKicvZMjnHwR1XUh5PGc6gFdRyPK4bxunZSLTiDBtShxdJ91VKzi1Ze1TJdjhPWX86VDwL"
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
