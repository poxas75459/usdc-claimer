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
    "5vghM72yrUHHjgr5Hh3rxdQX5M98FgYaQDXXTLvR7mYndyBjBBT3NsPrCFCTxPqFtBEDUKhdKcn1hupnwCNAwe4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JHincoSrHjxsDyZFbtoMK7gv8son25ty2VDtHbVrf9A72CCwNVKsg6GdLNK6L1yqK8jzWdqAmpdbGRiSQn44S1w",
  "key1": "5ZX1cQDmL6Qq4iDmCJbpadjdHWBRdFsfPMFmje9QSBeEz1GKhqY5G5c7KqNMUDE9c7bwhipUoXoBys94t7bixKXN",
  "key2": "4LzApkHsy2wKqwa2wke3npgyzCS6QxwfBv5ab768hGnp81XaWkpEAWZLdohaUA3FfmHA7NnQN7Px8MTqym6GkoFF",
  "key3": "62odJFdUMVqdhV6PkSi2FREhYHQXS2vwwKr76aw6R8jRqgHV5GQwtZKUUozF9bYtuzJBtdmTc9C9uDZiP1JMRjbi",
  "key4": "3NeqzzY1X5mc9hPGTNbt7JsvPpnMsVdcHGkCDMtNPRTMbe3nfRqzof9zpVw4af2uy79XijXDVpxNAmsXG8jf29g7",
  "key5": "4eGg3K3o5Fe4dzsQvMVzRgbBvpyhxDfNrzYrg2JU461Vae2FqBd7K1bJMirEMPFw3oKRu8f5EYCDwr7c71UbcsrN",
  "key6": "43YtzUNgNWHrUCEHHhvR5v6N7wzjCmbscMpERxbvKiXA8BaddRFh6eSNwZ1pHZo86fDDYxSi6SMDLjBLJ8R294ig",
  "key7": "35pNAaYfsQ2uiXuwnQMr3toBVPRgXtY453P9dfVqKtgd93sjr774ymZSP7FPMmyJzoaSSSkq5RFj3QQnkmnVTvxd",
  "key8": "2qC9BZVLcQt9qb6cNsjB4dF19xyRVs9sq4ffHUWpHy2thkVu6nugfbgSmCsjwXbz9L8gQd2t15uwr27j4KDntYFo",
  "key9": "5JYWFdrrRh8A2nfH885KuPm6cm9gEjPwSxymCfrZiX4wuMefSgLXAzysBTNhVaVSZQCuyYzQ7g38VuhygNRhaDqp",
  "key10": "2wAuq5wDLbivJb2dP6nAQHFvAfRpAe5zCtsa7aQg84yHjepdQa1AAfrKXkubrtsUBXBFqVXJ8SvXqjNBmpojewWg",
  "key11": "486J4Cg44D72qYeAhMh5Qioibprywogqt8rn21SUZHxetssqMmMzyzhJbrPYgrbxSadjimZatMPLn3bJ7PFtmmM3",
  "key12": "3qg5bTtLxWzPhUtiLQd9estDJC7PcmoBqVYj6M9pGHrvg7mpbqvqt4YNrD3297K6k8dA6uWArMnaUowSneLPGoS9",
  "key13": "4SMXjEi3zgSidKQvEsHB19YarPj8Uyh2sbnxFYVxFUKNkazhAtBt5LWJU1Nz9s6dmhnYpxtcFpAJ8NCsCFSrCwWZ",
  "key14": "2NknbnAXsjP5m4b5DbgFb9aW5ns79b2QWfBQRe7gzLi4SrWWA9H1isdJvELUVm5LYN46B5AUGCwjZDevSRSDpLZp",
  "key15": "3tCkVyYugrFkjJkgTSeNgfAHatw2QGv9FDnGuaVVmsQTTfvNqV6NHjAx9VWBdikBjWhgXwzqYaCLAhdV1hN42pq9",
  "key16": "3UjD4Q6Rk6nZvjgGfTeJq6HVVKRgkqns1AdFHDTZxwF37Vi2FxuHV1rpvxCLBiqzv6D7rKvxgiH8xbETxigatVNG",
  "key17": "3YhNQV64K1ghNAf8GJowVMCnPz3yt7oAmks7UMTjdVZBxnRsTySUfX1wRtodbEp9ttUmPA1BQEbXWyZNVvnR4ZfW",
  "key18": "yd3XKDRnwqd4a4ozRwna1SQQsuiYe9hx6TFoztwBXi4rCM8p234mL3E5avCysC6nM3kM4A1KrojJuVYr9KcNfkm",
  "key19": "2rhAdoiT3HLvMwKWjYrfyFhdbfkW6rHDTjrzuzWvd5g68YWFaXH9fS7rCXeswnhCkWH54spDiNhMBTZwbuhpf1Aw",
  "key20": "3W2h4aGgscnUVFeQygoUbQNwxr9Va6XVXTeEeD1hiRMVeX3QYeYZHq7gGhAwoWx6bKLkoEbyuT1rrx38Rd5bAKnu",
  "key21": "4NK24t5haDV7Lrno1BQRyq273GCpUZWdz52khJsQsusWNycbzX3ZocFUHZi9HSjoVXU7KshwsWS2fvfdG5waAHJC",
  "key22": "4wi5eVxDddoYX7CtvEkhsMq3p2RK5oMoLvZG9teJGGS1nhdLujmgXDFLTBLQN4yHaJsMa7WStZeDUuRk8btF6exK",
  "key23": "2zW21AXmQB22JPAFvxQCzab3kHVFNYgcmN9jo1MvLiHNcLAbtWPQztaHnog7e1UexzzNVvkgNQaZ2WJfKEKLYiTt",
  "key24": "3zAN1sxT4tQ8WmBEjwK4pN237ncRZNtJHEpvsiJecqAHKN9dU2i65qt7cuEMyCHXCEo8rM9cBphMonNeDwHQUCLL",
  "key25": "Z1aNCwHSmpJvtv2AuyocErKvYnkxLwTKeZNMH3hux27W6hKDyqLbZ4atuxueabBMZi3R8vaW2ASf3kbKpzxyeh4",
  "key26": "5gURu1bQZwWkj1jphMSfj1Y75aESdJp5U8x3Vyt6Kh8L38hfLZ34DV4BC7zhWkR9aZkZzAQEYd9DJcZMoSMSkfE1",
  "key27": "64mJLwMSaHsKtG5ifh8zATnjsbBJzwJC4bvmfLCoUcQ6BvFgGtGTzHhj6QPnAuhuUDLKFbk6tSi9DiiE56zFsAhS",
  "key28": "2BDRBCoFT6QcNR5s1kLs6qm6XuwPTABCXEnJK8FBRq3iotKzGCZeBs2Znw1R1aqK8WwwTpsHWPixpvvLC3599vZc",
  "key29": "43mA7wc6qnwcGFBx4jMQawCPJ5Qy7nMouM5Kgtcv3cPWsnptKsEVjD9UpnzYUJDwYMo4krLAux8e6TqkrAah5Grv",
  "key30": "439mC3cS72Ef8vuw9P7X9j12koVqUwPP8rdfLP2jgMy36gjg3pLqEyahMPfnAbzxyXQWQmiDk1erq4pqfp3MAV8B",
  "key31": "48mCGzL4JbVDMzmyWkmoYj6TQ4cV8MoCEyX4ZpdKnHmjcDr6f2K8ekw9Co1ocgT9VaLDWpSCoRFJHexqGvASyrzL",
  "key32": "5TwVoniKkwucghxYEFxsQQADM7SB148o2o2QhNUBpWNTg8Q544FUdD6bUJqAmTQdvyVTEz4732b8G3Ck2tzLrEjg",
  "key33": "ZWEbbdKSL3X6Wvs62E41oVcSke9s4BFWW1wqVuptXgiRaU3tVUj5ryJUhmuYb2sTsuFjDEn4RvCfLzfSszwDtV5",
  "key34": "3ZWdfLZiJTnvtYWRL5iVrjV1Fc3eJrgDkjen7aV9UmH8deKFFFWimF122fdbHBgVgR4VnhzpDmfKJBUBnHoSjPvB",
  "key35": "4mAgYLMHXVs7DWKb97Zgt6dmbZvtAQcCsPMyM7VwhJYbXqscRKPq4hbr5p5Yy7vFDEFzrZfsp9mGRhGsLmvkrKAF",
  "key36": "WKxkH47WCNQEqerVqGX5fZ8GheSoyLHUC2yqCpmXRzMUVpLTTxaauLTr9kFmUEKGsYdB53SUMfKBia617mFRyrc",
  "key37": "31F8eBoV37bGaZyJYyvF94bDeVTTczVWvCQKxzvo2NppzaiXaGrE4uShdo1tHayE7Vxc4r2UGL3Mf1pKrFZN6rHJ",
  "key38": "4Y3xS6nHMnt8Fq1Qbj1h1YoyqfXpNZJgyRJLkxX5cXURGMw9nGBHe5m2rXPxxAYW6Tfn8xH1tGNM6hJZLsbAsqaM",
  "key39": "2Ckf33oqxSh3FEqeio5m92kfFkj9pAjHm5M2ZAw4zHD6hhkabBu247jJjJW1Kp2NKV9c9WMfVoMWZ2dKJswmEjLP",
  "key40": "4Uc8zYn2p243DYWc8SBkQ4PgEPhmuZ6j6DKtbaGU8uPAcvLGNW91yGNMUp7UmxJCP3vKdvEC6y74EJHJFSiYGjLJ",
  "key41": "3wZ6ncYYwsSVTkjPE4xM5GuiqLdri4Qn1dznFhv7g5ypsKTawa1jVgBmpKpHgcTyfGP9hDf3uSgVRRNXDW5hVzdm",
  "key42": "jJvSRAhM2y5McCJBVFRtXgesAAi1oodMAN53bwjdp1d2Dggce16jyxMX1nSbh87jdEsbQB42qiooCRQpdQ7nbLJ",
  "key43": "63Jf4VxJRMiw1Myfa5nUXs7HEsZ5brcNSdwWt4Ze5kd1hb4cBTBhJGjQJMeRkouLspQ8rpJzrSW2i8TZBkhg46kf",
  "key44": "2FtGxoyukNfmShG4WcvAeMjihnXRGT7UJAmbAzJ6XV5aapN5RQv6vDKPXdqmtdwPqX3xFBY67kS3yJ537Nga74DS",
  "key45": "6G6Q76WPd5NAWKofg5wZstNMkYgE577JEi4gStgsrjbSWrXxo4AhfK4hDvRGg33sJpqPCKpqLz4wM6knv1njC7c"
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
