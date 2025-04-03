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
    "5jq21zFD8wsRRFkBiUXKjFHzxEo79vFuRVd6P5MLLCgBcHeiocBhERWX56QqdecN9TkmoNG7PqU8RcUsDkyTiPSc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jy63oLAxNKDJXKsAwKDJ2TMoWqvs4THkDBPyHtXnpnVKQx9i3b5BNjhJ9jL42Z8uHVnj2RR9AgmytuRGuyCJdGQ",
  "key1": "3hkSnnWc2mu5zeDodnaGzMobv46eKjdGQnUZ8iJGqKJKK5AmDmG4j9KtaS6ZntP78rgKsEZYUrGnMERszvdJgDzC",
  "key2": "4QfPVd3fB7geWkQxNp4bjKuVLYvWP9LJjYXXTYCU7rnH32o8V3ECqFfyvUvBru34qvJ8RcGehHaKHAtKDA1kGk4o",
  "key3": "5kT4fYkd3H3n5wtCmP2WbAnsLVa9KVBasHbouJNxRcreNqN8ZxeudfYkQgKPam3qCw6Uj6ShWTBeuq6JDVWEBdSB",
  "key4": "54GMFBCyN1hTE4A7DEwH5g6hnAF4EA585SL5g97zmnCNpuRKENzL7rEUbmsVssFTvrfrbCxkAYsRmbSDtg2qVhyQ",
  "key5": "56AFsKrS8mw5yXvE5Hap8ZJjcpXSfMGrKxNpS9vUU96uR5eDhfqaq9tofPgqUqKNct9KVcdJNkvNmzCZ8WfGVvbj",
  "key6": "5LBxSvfvBWQ2zSa6Nzm9eEQQDHcBVia4NxsvsyCLNHNdwWPuRZvqFeAu4D2NDQxDBNYY3bbauZ2B9ZjWYGPLXxjs",
  "key7": "4VsSWW9HrHfvhADkAGnXn3Ju15rGi5VX3wuJYHSDvVkysBtTsaiSTtpLQPxEVe1wzWdSh7nZT7cLaSTTmq4HEz8p",
  "key8": "2BMHx1jUXsHHk4BVNoYrfUMGJL1UUVF4y5fysW1dh5ufQJq3Ye2jUgJNSFz3w6VP2D8FntXxaoLDzjSoqiFRSj4c",
  "key9": "2QfbzRgPStjZSKnQFz2SnLU1HMfTiEAWRhGBYWfszp5y4sGH5espQvqp1MLRb73NdEN44oTzv3PM4Gii4cza6VGD",
  "key10": "5rQZZnPosvk1TZMQ1Jy4294hiBir9BwyNEgmypEM1nJRKpKQDvUu6NcevskQ5hLt5RyqagR2zzwXSDUhQsfH7gFs",
  "key11": "2WsLq9MZWSFodPKSa2F41BLQ46nn3VFRuXJHnSv9VE71NMESCnrAuHzVgq8wA1KEKFh7CdvakhN5rqnf5BepYWp",
  "key12": "4xkQqQzXL1zpmFRF41BwMYg22F9iAX4gvYPfK7SzEdEwnFHQEd79aetjQoDJkseUFuYPPuvepRryEoeeV7bvinGu",
  "key13": "28CXy8a6rdsYg9EkGoAPZ99djJCCZr9k2UBS19FxWyiK9phorCXHhbNDEH6Ekchu46k9UsQeHPFFcXwaVM3zDhTZ",
  "key14": "5Xhx5AbMCg4WhZUkitiE7LALGsKdgNnMnByWnpzxjsNSWUPbUfGiMLJ3K31VFemDv6czQWwMmN8XME5H2mab4v7Y",
  "key15": "5QDt9jd9WJJoMpAWeriiqbEYxcHkJGYctf6j7K4TnBW51Qe6TCU5hL6P3QuLNuvkfbSD5yQNYQKRJ5LgqRyf8XHf",
  "key16": "3o4R4KDrHFv2wXJSsiLfBSGtQXACNT3VBnavstGMPdui8seDsqvZMrNdhstM5AsA1TMYCDijvAjz47iWhoqAKwHz",
  "key17": "2SB5i3j7PUrti4R3FobCExUtX7RD4tFUGx13JpE6uVbZWFKd7rWCNJLG4KLckpSiwGQZmC5ej4oegPnRbECG8iFj",
  "key18": "63x5LXvXVMgiXuP82jrWp7gSGiggbAcdTp9oJc7z8DiJZbWBGdnJvVJ7arnP5X2UFSS8MScREtRG93CLRaXkH7uZ",
  "key19": "4No1Rcjz1v7KHjRCYPdyfXRPbd6tQmTgR1ZsyrRbHZkJPZQ6wyxDiMN1wj9bHFUA299ugoym2EMU4h7KkAbpBo4K",
  "key20": "3BuK1f4U1RkrbhCaBETYoBFtVBEfoV8cjrNHQxm9xutvc42co1Am7wGA939LhdfQ42jPw1Pr9AsACXWQ5C2eTMoN",
  "key21": "3JjyLBnuCgCq6Md5cABujk8AvLf8mYqiDL1yqDQcXtsxyzVd4SXUPDABY9SoygkzjMQerTZuLKdb2V2wEHnC25dj",
  "key22": "4Wuvq8qHz6veCKRSarmkUowJGGvhWjkgjECHd3tatc56dzUZx21xgxiSjfmJ8u2QzwDavM8U4aPBtN95YsZkuaxA",
  "key23": "5HzDTKc3moUVhkus2NAeKr3WYddKBzZqNthihNHfosB1e2ZmH8eQjxBUxszwHJeRFiHHofpymrgdYRa3EMw9AAo5",
  "key24": "38osrP1HNFhHqEPifvx5EUTqt2qBYAxPgtNfAGxqS3gLKhdSmjSmxdkrfwV5gHLgUshyzwGp58vcKjkf6bAcQKaQ",
  "key25": "4z1cY9jGazWFYAj5j1hPSAGfpmGwRWeUF8s5HJse1Zavu1uGGpvm4dAK8rZp5EyGqXYqtC2MikdLb8aqiR7JDexV",
  "key26": "3vzBppHzDnE5h9PAT16gLH6m4AVNs8Z7vAYvTFDWYw71oMZ6xGpTPF17RdWsFdDLvCLobd2E9VHKgt5drUmvRXJW",
  "key27": "Q1yYkwc1tGMfWtNDN4tpGFx4R554JAFLbNEU4RwVoipWTFK7wVABuFf7tyqEwJDwmnBHYaTBPHYukVFgbh9SqUM",
  "key28": "44ow9WvEzgGufviEUhiVGopVt557SC4DWAxzuSdAuMAb8k4CkuvAj5wgYn82WwbQTnGoNbgKg6hoqwjguKJnjWFZ",
  "key29": "5p8LvnwYTp5BnunwpNyR9Tk98ymUGDcsfDFQp7MvW3EEhWap9XFTJ6EzhxakYocXcaWLN7pVTDPRqY3CfUB5UehX",
  "key30": "PBzxctr7vqowEj2tktPdHzkHxxrfw5owF6RMsBm77ieZvJxk5fSJSegoSKFRUCDFCYL1wvWhD4UCqSRzmTEny2a",
  "key31": "t423WcVRuvifHFaPcT2Ej2hV3nga3AjchsbGGmcwq8atW3x2t4tYy57coWXTLZ64fPGVZTjguEwTWM21gscd9b4",
  "key32": "pAb7MJsPSiX9VnSLhbfwr6983aviKNMfNE7rrjzMBsjXny74CinzYrHVxeNZRkdCwv4CwLvXzKSbofPKpdSbmWH",
  "key33": "4oXfaHVY8YFsvG5y2hmLqC51oegkLfohey3gTjYRmpk4TBFcrzSTh3KibWmWk8EcYzptvtCsF1UaC4sgbDaipm9g",
  "key34": "rXjWnDCbLzCRcovH6xvcq7kxA3N7rPy2j8XUeX6k6EWzdZJEQjJSPjCdDcDTA9aL5fY5hC2GU8jh9jUg1MnKvon",
  "key35": "dPNvMrSe1JjfdgUDUu7y42ajtcdko2dPPMpiP5hWiBHEFbKaw4H9ru79Hid6nBSbFksEfNvs931YWCVUdYvwd2C",
  "key36": "2ErKeVR7CSaptqP8bSfmpnGdDn8iPjUgn2KVN7TcEYyTDRLjv5mxPuD7ZCDiy2CBqkadbv6LP8Sj3Wt71iWCPrMW",
  "key37": "bajV6JLrWT24yfRgdG5FCcbBrof3uBir1vhXCweig4s7En6ttxPum38pAhuo15VL59VV9YW7BsJMPwkpiU5WvRF",
  "key38": "1KDZSajNGPfJNQqB38MyrXfbysu67LSoFhXoPJqfVwgT161pRFvm4KdFxgbAb8oSDDWmSCEhmoezXqoBDtewCBW",
  "key39": "43gVjueNXSz2hFjwcgYJhumMtpCmrTtpbmUqHey5RQsGtQ4fp7AKLiTfrD17R3T1Vk4fjtubpkNwRvc4yJtD7cFH",
  "key40": "DiPKTkuGPHr9UWgALQsKEaBrAeUpGBdrPCQbH3bB7b3oG9dYTb9WKGFgzdbTYncrFh4u17x6uYpox1guMdHqrqu",
  "key41": "5Sf2TzxM6ms1iYQYa5ggGJUik86S6St5Qc2CWPug3YrSbpimP9GaJnqAZiw3nsTzt9U7cimCgfj1VRVVdRMUHwP7",
  "key42": "X2icpSbpXWttLEpkCVBrfM5BwiizTGg7CEnLRYBQxnZkZ35Ge7oiFshpiqQg1vYaPsA6W1EV4k32HM6P3bRG8cm",
  "key43": "h5UtdaVHyMehC4StjhU19vY9XhdcAa7BkwoFfrH9ebG768Bj4rBQiycysC7zZbZqXjM2G7zL4Kf9bbehE3jYUE2"
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
