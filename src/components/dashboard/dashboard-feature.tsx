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
    "cDhP2LutB9dkZzpNHwu8LmLwMHj3MSF3T2epXZ4MRCofvbntVWUcFp2Xip8LieMZ81wXFKp61d74W5n25X4wNSG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CwyZ6PK4erku5EeuVrspDPRFwLW3c48irKEfK1CfuAv8RX9mp2D4iitbDFnSU6b9tNeMECSy3HnXtegz1X6x8S9",
  "key1": "H9ECJBrhobjrDdYX2Nef9Kqgam1rk8Fmt491sUtKaksPjxPSKchYVbWArxEySQJVi4JrXPYq9Xf8SpSqmpkcKw5",
  "key2": "3NeTRhyUPmEe7D25MiRR5icvYoyvBQCcEmfDt74EGm8trZti7rnuixH4a3T5TgTfqLavEWJ3WbrA35Vkd11fgwdq",
  "key3": "5MyrFtCJAoRmu2howKqThSZVqdq328WkDKuQcuvPBmyqEbCRJJ9LWPX71nL1mZYSMCqmiYPe8NLtZmebn2mX67dn",
  "key4": "5oc6YkzZxqcdHxyc5ZWnwBU5YjLwEANidQCgFJ5ppahr4gGLsXr5u9VWedGk6rVvMitAT6NYmntBiMhQcQhW9r6t",
  "key5": "3CuDgtUWAvdXVjnXQYsHV2Es3xpvFbZUYPZHWwtDFmNinL1MLtSqEMdsFTUhpbXCzhCrn5WAvBafjDVAr2YMeV88",
  "key6": "xV6XjpfVbeMQmpeGjyVq8dkgVwrD81X7yVUJX18aazPdVbR8k1g4p8eirHxcEXjYwETEw3AwpUKZJwUrBneXMFZ",
  "key7": "qCDmtKtJkRiXHaKs4w9f3GQYFNztEtLfWnsWKz31viqaSdvENQ8qFrPnJ6P6y1kaZj2jdSeRykT4sHzzLv46Yi1",
  "key8": "4vbKMwyx4LTmegW9vQamaWz6aF4DEkVQBn8UbAd1yjF5Yi8dW7xC614xjSAv4Jnvg6aKEd4MEtngYzT7iWb2br2A",
  "key9": "2v9ZPeksWzzbeoURegfHjvfTrPuBJGgJnhbHqq1P7o6d2Y99knfcoV3MEzcg8J7PmYknQGnGCddk3kNvbBQtxBQF",
  "key10": "2Ji6nUF6cbQKkNBH29xt9hJNSLC3CUu9vp7rD97tRovi4sFuJQTNDh6QyG8vKMgcmwYZj8BD9cWhCbtebz83kX6M",
  "key11": "3P1171zc7n8Ya3DHwcDrJ4Dpis7fbjCGT9GWBnCPY72U9JE6Nv1dVPQJPg2invmFHgJdaqkSMPJcnatLJjgFi5iT",
  "key12": "5pcucCDMjJx1Y5Yj6fG4dt3yUM7WHsE66TEn4eHc3qZdkWWx2fAdCAETG14THGw7hR57W43H9answxAxVn8keTgU",
  "key13": "MSDjPjdnFVhugNnSeBPkvkrHMDUw9dFvEXWsbLC3vbmrHAxcCSZH6eSVgNSe38fYbAG61yXcBVx7pu8aERbHFQN",
  "key14": "2Y56tsQ7GxByDxwEd7yxVUshB6rLkcasssRjdpGfpkh54hHAHiDxCwEVbsq1aN2vuVgisXTE4pY4kvEHbmUxVo2h",
  "key15": "53TSRXVt67pZThaN9dRamQpQvwAMXdLqBuNxz44V6u4TAAzZdKZzQhuDipyyuc4D3hX1EbqWu3Vr9N6FVP8hHPyF",
  "key16": "37h2vTrYEcvmQb6VA7iGD77EeHXKVLUjqiDsuLQK6A7beJDBFqc7HLcGtTGtMksmnGQtKtcDD9DtwTKf2MoGyHba",
  "key17": "5HBbbXTz65qRW2vHS2usz7c1cPYScnBSeZH1doBPMdjMnpJoagSV4GFcqjA44g8ALzG6mqZxjSXTWCnt3a5s1dqy",
  "key18": "3xJtdhmwDfYbqscNUoPYVwk8BBvR737bMJwCmYgcMTv2iDAyQQChFseDF9LxfJAQ8PoG3C9vmvVDhvDVib7b6wHE",
  "key19": "e2fkRBec9eP7pjtAj2tBb4mX1zESbHyGkWy1h2NPw6N2wVA78YDsGXpSQgUt8nvtm3tTR9ogwhvUbybL7dMzFT1",
  "key20": "5yYPCVUFBkScpCrc3mYQyH3aW8LBw4PMVzAVEGP6DJZL2yznxfJHB7iEJrcpCfq4HLCZ5beaqnhunAmbbxdoUyWu",
  "key21": "4Y47vKx6PpS5AWP2CdjsnTYirvhXLiCCabZy3TofBPQeRXRZcYQYk3KhLrFeJw5yzjHBw5LanjGSXoXXHsh2o7go",
  "key22": "5HoP8V9vRZhNCCQRhEd85mmH1tsat5N9qB8dnEC6zJ6cBxuVUxD8NySwELvG1JVEMjQwD5v4nvGPEXnTw8oMtTP7",
  "key23": "3HWPLSxPmjoya52wAPAYB1DCSNMTKAT1tWEhsvawmZFqHptXRRSgxK5g6iFt8v9Q64PAcq5PPBf2niCE6N4g7BaY",
  "key24": "aev6uMbYqRVjXFJPV3xyoPrEoL63eMZBxYx2rTzRjxMjKapmPqqFwFus81xoQbppy7Kk8vYm4w5ApH9SZzWPBMi",
  "key25": "3xcFB8DCv38wReXqteP8Sv8GDJkHCq3ppUy3UUjAwtB4DXtWp8ogbhajjDS7zyPqKN7mh56EP9cDs6DqZEeeJ71n",
  "key26": "3odKQFw4aewrudxAWozFuxbWD7fkvkWFP3EPRVodeCQtUrsZ9udJJfUubUg2r91FRmrZhJAuPdeaU8M4ZxccMX3r",
  "key27": "2h7Asb1NVGJJkfxVfgsSuMQFfCQsicgqiB6hqcrAB4JAG4CWNaf4ahfU5dNuo4vLhjniimjmRYEwF8yTwKAsSaQu",
  "key28": "61wXG8spePiW62fsvxi3cnKaeZCf5SUJujaATwq96DD6PMwCnVNoEGdX7oNxcR66tEDLi12vKPpFW44oG62kddaY",
  "key29": "2DvbWjB44DUAshfRsutPbgNPBYWNP2GSrdyc51AdxCuEnpAqTuF6XicvhWeTUH4mrbDbHYHdi8yXku95CDsugE19",
  "key30": "5ZmDK7oszcxeX2ftEU6Z1Gb3nZGxMwv7JvGwhC9LAMH3emWa7wh8DtZiJEu78WZzMDC4mWMHgBEWgfrWwvep3ZmM",
  "key31": "igy3gF5QuKtwwDVSxbFuqdxkKFZRPfZUGVEofRxGi3oirS5WcPRiYd9RBPqHVfgGB5oMTwFxkwHAoq5pkSHiHmE",
  "key32": "4BLbnjDeJDZxyEh5sXMPgvjHBGsBj5h6Wuq95pKAQ8PNRSX7aJqUcRqKVptwMYbgu74BNx3x6hnkUCvVqJQAW9MN",
  "key33": "2VLVZ6SiEgDuZLNJQ77HBfcJZFQFUizGvun99SQBszZ51RMaL4Khh1sKgYDUqxRnhmxC8fMsnEmAYWoRjNBJFNPY",
  "key34": "5nbJ6GA3Gbxz1jAHMhhLA4eW9VWgGQD4hdTYMmeCzJTuvR7HnBJeKZhppEpjyAJusgmcrNe6LxJaPyREnLjjmpem",
  "key35": "fzUxduUHqL3Nez7mZcFJ4Y1TooW78VArrKqxUKva6Z4iv4AvC8XEnpmkEb57AdsjnsUrmxCiWdnrNug3YCYZGd9",
  "key36": "3S7MpxRSBkvAqAmiemJxahLCRWCgjtioA1aqsbhSuBdCHLBaNxL9S7p95RVVchzZrv5726fpb7eM4Kwzj3BypwS9",
  "key37": "2ctYaQn97Pn13t4QZH1z3gFayfNb8SNFM1tyjaeEHMpqPWAhs7YvnZ99AEd5edHN3jHcnmetr7jfUD42vrXEBkQc",
  "key38": "TKpeS9E2bBELr2oqxFQoFBn8jAw7c6VUcTyy2bM26Gx84hq9xSchibnLUG1ZZ1jWfVxWRDyTwpXe1rKkQoxTAfS",
  "key39": "5P4gy32RUAeQeatbTLdb7gNuAuEZsYv2SF7szByaGrRpPYYbqkzciiAzQHQKybtqiZCFwaf4uSfAwkX2rCDvM4S5",
  "key40": "5SL9KiBQJK4Lm6ZTH6F88z5Aeqbiw2XEGXZYh9jTwFMiJq2XbVkC1AmhLYtjihYkeynmVDfC45WbmjiPfsYr3jMz",
  "key41": "4rYvmthnn5Bg4gxxuMHk1JFJYF9HSZmWvoDQCXejums32pA7KUir6hoXgvtfNvt3gNtrNU5BtQ5V3uM5J3U5Efhb",
  "key42": "3z7Nxvbf2NPvWcD1u57nqffrbF3pkedTWqkQWTNgrp9x2XFX9sgopAF2vdiiMhmo3VmFbzXqbnWs1auv9nZrsSCe",
  "key43": "2b78SXHzkwHFqdhyb4xUyGY1aEm7AnCppJFTtQDPf2fvzZceXQT1N1899dkATwYzASboPjXY8tq4Xp7SZvvMJefP",
  "key44": "2fj4a1PbuJ1kaJnoDYKq37tMhNy1ndFHh33L5HH6bYr7Y3EKQ5DwP1pnAkV45pPPpfEegAAtzEJzwda6EvAarknr",
  "key45": "nxjj4TdFNfiBX7WdjwuPA465ug3oaD6B3D2V7FwK9UiT8TxZbPgQxp52yGEcEXuCRWjgn3s3Tp48yz6ghFwgS2J"
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
