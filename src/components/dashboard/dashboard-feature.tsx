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
    "5NPgL7pNbwU7S2nuXLDWdomide6pSCz39Cm5DbjvTVTmZdhyNVZKjm7dwNSAxJMbpZXWy9rYxQX8sWDPqks15vyM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TAVGphyPKF5k6q6u1eEtXfYL5d51auTvNTo3M6T8vxLsn4JZmt9Unb8c2DmuEWPdrerNCDznNVMjsBWZxKtu5Rc",
  "key1": "5XHtuJDGVTuKZsf1YMtSE6KqQBZ3BBYEfTHCNaz6twSrYHa4iBUsBgBEmkzDML9xx8utDkWXnEh72N6XChyDg9FY",
  "key2": "5E2Ns32XDHzwNYyQ6BQ9g9hy572d3TudqtgWuGRBWHm7ZBYMTQw8Az52RFs4TwFkRZS8vuAxFUAc9K7AUYM4TEY2",
  "key3": "3YJAEzS6BcbqLzMqDHuLDA28G2m8TrujYiTtyYXiTbo2jSVobfFymozF3wkGa1tXB1J1LyL5gBi22YQrykifdmGr",
  "key4": "5XitkgiFff9X8ZCS4Vo1U5MAWpAXDAEXY6XgisjgiGkyEwJL9Uk9z9AZ33pCjp6RUajV53FK4JUULtgaqfueNy7M",
  "key5": "4mUqZaBCZsZwjn2zsoYmz328xEQe8JcnEu9YamXGgCuxHkWXa5JY97MhrjE5m2RibvCcW9Q36N4bVQPwor2tAU9Q",
  "key6": "4rubjnYXu9m4J5EGVt5JbPokuRiESUu3DNBDNTGQ1iZJBVsCtF3MePmHBEagMG4fbDtW7DRGTChL4eEuNwWvvLx5",
  "key7": "5fH4AT4CdivecAi6HRVAN4RmVGpp8GE9TxrxRKmzTh5nPdnHE2ZHD8Z2xxLETP6WPaEALe3Y6CSWcoYwXuZ1WUpP",
  "key8": "5d3g57i9TUynMxrBFT6rGH4cgAqStv2qLmQtPRp2ruJGmhtdKw6cJ8bQn95imE9vNroP2KYSVomiXMafNzJf8s3B",
  "key9": "UQSCYrgz4LFUfKFWmRscTFpnyg3rnYShAwuBrXh57MiZ3iQeXuL2gKke7umN73oXD3vuyo8Rns9Ljve6oT3kfiy",
  "key10": "4ih86gSTCb7Gp8SPD16Q5GShByTDrSRqFz8h53uuF3aFnVR9rstjLfb88D8Uamum7U4GMctL1KQPRzzkvqUov8cv",
  "key11": "2k9bMS7TNqoX1rUB79yyHrK2vw97t6TJ8Y34ond5799upLBXeBpAgW3SFS8EXuB1TPAkXR8S5DGLTD82SndYwJT5",
  "key12": "3oKYPQEG34HKujbh4RMt7XAWqeWq5iFYwpwjo9bhbPpWRmVbDAoTPUHjGJwWhipY5kJXc4i1MjRZLGU1u1L7218C",
  "key13": "3PGWYUQVVvRCwzPJCXpC4TTkjkEBp7vnSmePeUMeu36pfZ6uw1sTL5VpAgC5ubf9mmVF9JkghoedZUFmymkaoheE",
  "key14": "wQESHL2c83KrFTdXybJcrWryEMELoQwoppqirwQKCFgmiSauHWGBT7qog7YdaMuUPWv43eqJ8NjYxh6HVXDZnnz",
  "key15": "29ZsCKtcjsnpNBTU3Er9WzgUjmK6wJKWaRJVcBRrEtyUNHe6fEH5coYY9TDEaUjGosXei8B3AkcZPGunjNLiEgrG",
  "key16": "3Rjz7aV4zRdc4NH7GiQL3Y5p3W4UPS8imJpQQqx3LwNgtywtY1WUeRgdDZq2fXbyAvasa1JsBEnHv18wTHiLUaij",
  "key17": "3U5KWmYV2wrVGSqgcsi1xTRptH9NozD1PvuPyhbaDMvj7h3kuy9XtZjbbd9m1jz2ZBKTmgHD4oijAjh6HsiMQkmz",
  "key18": "62CxE7YS67kAPrZ44vFLqKVdca8MG1FqzzkMpjhArfTAiXQubD3XixVjvmwVtDcJGytbctwwwF18uxLtG693L74Q",
  "key19": "4jQcPtasihRk4Pr5wpNRbPDkLbcmxCrEKjPSN2pLuQZ7Bhq95F2SsEX58tPBKKmW2czHMqvM9c7HAjWqDZHa4Uif",
  "key20": "4y8zrxjZr6erdLBHjtdfPn1XXELHXLwpmA4bG4AzEQFVogAZ9bSTr1GUPRuTJ2eMxSfgtNNAbpg5yFi3NL9rcMML",
  "key21": "3qCpUadkkLxHR3SPkJ2YP15ZxgPk4AhY1hTEV4XWbQvqSsZ7VivFW4dRynC8XKpDSZAUGaAw6Cpdy9MP4E7kx4Vj",
  "key22": "47NAXbnsYUiQYnkawAL3zkwTnnDAKaBQoGmBU9Amvgja99HRMLsjo8a4nQvQPvpr9b7DvQN8rvR9qzDvia7QQXoq",
  "key23": "5L5BVrqmmD3YpDCDfk3Vzb6eb3uhKF3LExzia4cU8khvEidwv4TMpW73TJrbZ8PH1iFbedyWPE3Y2HkWg3j3EaC2",
  "key24": "5TXuEdgHQPfex8k54XcKQJ7VtqWP9jPXR8d7WWh5fFX4cmWh2WbcY51GbVdckVkhpf1whuzoyST3TKRueJsnkeNx",
  "key25": "4EQFURqnf3sng61YXg8FehdUsUEtB679UccSpieuzQERQ716sRL7afDisxa5PnCUtfpveaXPHzBvapDAThBKTFhW",
  "key26": "4WM4Zn1TucL97x4nt9QCdrxmziRwZazjg24EpqeATUiJSQwRQ9CPNJhMY4QADSsAGogSBghf9aX73fZY7mwJ2wZv",
  "key27": "5wVHGMZSwZTBm3XCPcitjGfNo2hMuiFMsu5VomX6dKJrbGSBByhy7B9614ZAu8A6ed4H4KS3ZbJKyetiEYn24Ca",
  "key28": "2SWKo1eghVpm1Sii9ai4e9nBnHFZryREiJcpV2KdyqoZN5zjEyJK9vjUAKYd26Si15S6xxnjfeobnC932CMK7p3W",
  "key29": "51QHdLxrMuFpcy7RpeSZWT258FLsYPPkf7dMTKmj2NpLTaGGgivx7479LZt5vhmyrhyJraikXsLJ6Fkwdj4xisdN",
  "key30": "3yDYGVXuwrHVaD98UWsnCYpy8PfbfN4jBj7FPuK6CEq2xfLG6ZLcPmm8pr29BRTiMCGZvLAF1jHQuPiDgJoxMNV1",
  "key31": "4zB25iX9bZeavp7deZTnJzxg7fyBnmdep9MYosphZur9C1QKxT5Mt8Cwojop2w11LZneh63GU5AyAgKqBftTmTW",
  "key32": "BSG31Epwu1GdDLWVqukosa5Twr4sxHLCTeTFX9QVTz1D3ELi9xB1vPrA7YTwi2he5MeMTwp9Qk65WgENtRxdEse",
  "key33": "3zH8u26svK9KtDQAxycJDgDcMJn7Lw1Ar7kzbvaA5jbmizQauvcd3M4xm3aYQLg7AHWwaiAmk4ZDHPpzxZhM6tFB",
  "key34": "ewispPvJP4ExJP1CAjwChP8wiz8nZv6Q5RYwMn33tgc6hge5uDsmdExAfA66NFmpYFp4xfvkk3KmqHV9UEV8viF",
  "key35": "4s5JMuFHzXK6JDDegi5ES56PEHXcVkftxKArxjysY2tCqEyBvUhUnHvSsAdRrkZJnLruqgCb3KTULSdY6qtKerV",
  "key36": "3ErLLGdqmwa8cPns32ygiz7XSkVHiTDCLPJvpzjMppY8K9JsZvQk1uF4XuYKmyVDkwTX5cNt7dW1JgL7MMbvCe4K",
  "key37": "4dK9U4c1XHz9PSbFEpisFrgJeLtQyqWKWYzNL4r9qNo1yMcc3q1XJDnve18LuMSB9W9mpfDNDjd3xay8eB9a5wzG",
  "key38": "5hvz2bCt2RCdYni9qDxdgXbyJ86Uc7S9pth97msmyoNeJQS5YjMysBkhAd7XgLahQdrcWgz3NrtXeRqEN1pM9Cbi",
  "key39": "vWx1ZaiAmEqk7BvSYmvas3NrHYBMBJakk3kH35jvvpAQKDhFFwi6SYPE6ymieBx2GZmFLPwp1UPjueMZCnvQVsr",
  "key40": "FZFXA18g4RStyPJdQu1zo4fpY7yGZa2Aqd8QZgKSpBrUCo4W1HUeXpFb8GXWe5jVeRurr2WLik96d5idwbT7QQB",
  "key41": "4mgvXviFsPhDFAS1GcyybV7L7H3P2vdkarvSvrth3fv7RicV2YXS9z9oBk9C3CFAQ7SVMzDiexzbiBH3e8Vu89oU"
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
