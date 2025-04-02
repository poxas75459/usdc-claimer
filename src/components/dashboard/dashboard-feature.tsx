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
    "4rGRPMExQ5CmsHwWTfrQHCGkJdDPyMayTfZgw74akPfNwobxebwNuPtCJxHMpcA1kpzvJrJt91Vf1wxyUERGdmsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zNnf8unLTGagF1FJ5iUDV1UhzXFd3YuZQbnFTbrcRhhEVBCh4GHEq2A99eQLUbMiHcpoaayTDi5fgPjvZaDM85V",
  "key1": "1x5VHNsj4YYxU4SWJ2YfgSLQvUeCLQDhsL2UdxptUbN8iYHb8D29ZXJ5GDWPJ7hWr4smeep7h6sD777BUzuJSf5",
  "key2": "5oBdwfTz9FTA3Uxc7fBAsDMu2AnjZpPVMsvt6h3JPFrjULfdvZ8uguB9RKCVyoEbj7QamabGR4Sf3E1QJvJ1r87z",
  "key3": "3RXDkog4sci2RY8MEJLUvfG1a4R74Q6UuH8DDWxifyKK75hDbpr4CZHvK6xF1UBzKoBGMUoJNYJRiZD1PKiYcLWr",
  "key4": "cccQ1YTv2gCJhdELmbqFDy51eqdYP1DJfsqL8s4ecSJpPVCKfTtS9PyRxAhNYhjZ9bN9vsmjS5ECWvnix1SdEWt",
  "key5": "TUFVnhoWLPjwEo1zZ1MtY3V3LhZsg5hxVYrE47dx4w1jck25t3ipnbostkMuCssFP28j8ogx58jzbpNPua6hfaf",
  "key6": "64cbowDkhKfzuvYz8vrD7F5AquWuPys2eWxScUi4Z6rnhuXPWLBXBZSfksw7uQdpPxPGZQiuBvoKth5sgPfbbudD",
  "key7": "51a4wfHyxczEXN8t7AS2h3uviVtwuNo1Rhz8fHCUeTZcyjgSwsuMuJcVYYNi9LKRkxznamZL49nCqE18x6mC4NXJ",
  "key8": "2ocX9GmyPdMP91DhEEwtRR4uT3xTCUJmVD1phXFZ6dADuvokc1Kg5FAfuY8RAUmWsu4EFNu7bCUqAhXp7NWyzzaF",
  "key9": "4H7eQiTSpd9GaMNsMkN8u7RY4maPYN9VhSRGGAxFpRcgT4g9fsXggPUjGMG7msHq73vtZo3i8WCAKW36Xmqi6se",
  "key10": "4J1LUvCEdPkoQMraN8bE3LMwwEyXYw1DsnDQBW1H8U4jJAg9Qd4XqFpxdNCp1dnC9XH6Bo8kzB1sTPrdmhJJatx7",
  "key11": "4L3JsTY2nhiJZYBrbYENCh2DpKwyLwMV5Gy5DfFEufwwAuKv9Wd5b3bvmChwwrN8JQdkpkgourEacwvdRXGuNmnd",
  "key12": "rqPmDCfR1FjLhdnwrcEAXXUonJeSpD4keZbPFzE7j5d8KmNRGT7VDqRPYEderyVBfMrFfccE7HhfmSbFJZkq1MV",
  "key13": "4y3dtmmBdNZ7H49CbTQew8ZJtcJQV7PECpRuLbWkELpDRfo4VeftmUNJXM1r9Qfa364V31DobCppVQZdiVfz2Zmb",
  "key14": "5ripe4dN4Wg3mpkgUXBUyMWvtmB22Cb2B8hSgsupZNz6fuCQVv3gWvFjNU4oHi6QzcpCa4Str8XizXSmJxZCF6zy",
  "key15": "5nBoprrQ9SftQet9g8LHDiCrZ5fwUwBuHtaB4Zt71hGqUxPPEhnwCq3KWjgnAYPY6DsKWqikEAu24DKk3sjUGpFR",
  "key16": "55rw7VfEkZT8pBmTyfsdFk6HNwKmEHBUpEV97Ro6NDM8C1bzokwkVbnoL7Ce2sazePqhE4bqYH735TP9mqdpbQht",
  "key17": "25Gn4rxSUTDc5sczwm1JTCmdyvEVcmY7zLaXckFSxuSmZpdtpA3f7DV2cHnBfaiES4t8QUgH1YABYcEEDFR45xY7",
  "key18": "2vqKxxCdNKXtCWHNyeRNQ12C67kgFw4d5UjcZw4brRN5S8AxtSycnVFcQYMeptzee4au5AQSviWynx8CTJdinU91",
  "key19": "4r2n4kijARUP9hnxfUF91uApX6Nbq8x6njkCETm6i3dV7aySM2NAa2sRUMFfSQQkjP6t4RegVF6tGa8cxxpXcp9j",
  "key20": "3aVtYUupyZ34o3MDRo64a8EcE7mSVJzwCaCqfu8p8dcc9A2UxksXd5mYVMkkprZaBuBFjCQoD2HWhLn9UNNJ3F5",
  "key21": "65i4ZkCEyJHZxyND476qk7mTvQZcdt3GRNYVTtDmTC1BTmDbzr5z79UcggayreamUVzc6TNSQp55Rqzu8qNNN4Jj",
  "key22": "64saqhFKPaRVMcR7grvGFSSzgQHWRZC6146XCkWSPmDenC3FoSWRKvGh8FoGSCJ6ueafHTWCqEnit55miqUQy225",
  "key23": "4D2S2kDGkPZcCXKpU1p2Dw5i1tyVbER1R6Mvigo7NqpCaaajSzq5ebaQy8RhA7Z2KDTh4DHHuuxskssGZBo3ogpx",
  "key24": "3bcb3yy5hr7fQKo4M2SsBm2hxrNrXe3irb64Gm6XchmYpuCJkjm2DtREHRt2N5RYPuuvzZLJMwnMwP2bJ51db7SE",
  "key25": "3xPYtKpVaGuGd9mziPxa211hvpUaRpL71T5c3T1zCY1a4aCMW9JnsrcHrjpofWLxs4WRH2fLBK748jScgQoK3Xr1",
  "key26": "4zfzmzEZX9EmH3ZkPdHB72vwmHyG5ZoEa7zt5JFXurffJW7cm1ZUjN7QYoeQj9oRmgyyR8wrTZCfyprCNxwNiFPC",
  "key27": "61HTG1JRhb1ap2u51SgsHZBzSLkezGjEgMfZe7CoP6fHZU8d53ySBt4Wu3ousgvgEL5Vc6NFLQHvptebaY5Tgc65",
  "key28": "zGGb3y7zRLLLQuzbbjHrSvPrdnsQ2nDf5FXXDf9CBoNPZdp8Q1H1Zr4z6ZwvCgEWyiUmFptjCiA1fMgbX2kvbbu",
  "key29": "z8AN1VbA5TNpAB1X618t4A9dByWT38BW2e9VH8LBWst3z6VxToCPyK4bjjghe8ZRHX6oAnZzQbMhc3PcAYkDwXG",
  "key30": "4xTUhE9FYRy6Gmqu6iH1HxFb24EYawRBXLpRJopenYaPpkuq3Yykw3jaQeRscQx1EcB1cARF22kAmGM5gQ9MKQhh",
  "key31": "LajPDrxdL1pF66TPwMKKvuWVbPum4iSEefGppt5ZUh4vffEk9gruvFmk3q7G5qq8pspYVDgCbnKMqJ4PqRgo2dT",
  "key32": "5ZmgckhXqR15QB98aVXw7GWGmSW3iHK2D7UAVqfsfbmoPBemLbRh11TT3RFXgEiyZftUbLtutwMLGnWdpStsCB1e",
  "key33": "2H54tVhitw2bt16KxX8YrZ2FTJ9VtC6P2kgsaKiShi3wUJAMzoek3FQgWW4z2pN4dfQhbDktrGmvaSRo3ZpNveA5",
  "key34": "5c57g44Cd3r8Y4oMLjWXqnLjtu4cj9XrM82uknMMFRN12xu2QSPvDBCWKMbhKaUnvdxPh8R74wNnMMzxa62Lp17Z",
  "key35": "Qrw3mmwRn7YVgNkgxF3NwE6CrFftEcSwoiMxmyTPrdXu3C1Ubg4QJZjKeT7Wq6s7CD9ERUHmiB2YS6yP1qzFRRD",
  "key36": "5qFRj7TSi1wJnn8yqiombhfat5rThxdcju4hCFbU26LfTBVAyib2AyUksXxgSR15HXCbYct2b4z2jhF4SotSwTBq",
  "key37": "2y5z7nXpgfwu63vRD8rfHAi6e3bJBivwdkQoxMGnBN1bNHEVFFqdafvp9pCR2m1so8FjdDmbNwFZfgj3X6LQjCbn",
  "key38": "39cHGJCi21XH1TCg77koacGsZnjmtdZgHrShoRqMst8Q7F9QTWQvA9b4HimgmMBxoM5QiKAWrsq7Z4m5VgyW94te",
  "key39": "CBp1H5ccdsw9afPf47YM2KETfrbZeRdVEkM2uzqKJK9UgWS76LfeFTMfg7GLqnjbH5gnACb4Ytsvc1QPMUv8Urv",
  "key40": "5fENGjcRdwN449pd4EEdQF6r7QAwSTHjcQi5rgvorqZG5yotFUviH1YeupcLwy1zwKdg94npoukwR4x5CYHPvj6b",
  "key41": "1mL5dxtkdfPLuehAcwqmD3brcxNcdqfAi124YN7PbMgpay4izgLDXKSHGYGMXaZw9Bg2Sqvdzr4bfPyQ9nEK8m1",
  "key42": "2dgbZqVwRn85JVBwog8NorKUC4hafKqEemkGreeqMfpLv5ew4DxQWLDBEtZujyJuhCfJD2y4dzc7tYGQnN4peBuw",
  "key43": "2nq9gtxfCkEiSbmD5kQ8EzcwVAEKTv8kntaBHBnTMBXZajwAu5143x4m8NqmfrBEcjLCYqMHgFYvg1JbwCpSB8hg",
  "key44": "2CjEVfYkQyhe3EkQ1pN9mS1Y2CqPYML2hJoXkhvCLPBGiC3YmjRawrW6yh46rqYZSebAr5gSoQahHhZ5bDi46B1D",
  "key45": "TsuwHTAXkjBcAC5Lvppi3j5WdLJjPkR3Pv8hc3KNg9EsvbRxYLHnwhjhGJYRYbZEJHiZDsMtPXJo2LQ2MY8f7Vu",
  "key46": "5XgVbJsA6THUW85vyfBtzDU2F8AYFUiroJF9sgEjSnT7azWGsrVtvvbkfU7rQkDWFU7CZ2Jvn8syEmNM8gsCrnNt"
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
