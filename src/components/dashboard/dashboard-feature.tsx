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
    "oZn7HzX3wFptMFnvtZ7p1m6GCcAxBy1gjT2DKgf93ngFi5aJuYAUQAcSc1NeVDauj2yZkT9D3rbSuB6YWj82FFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61Hwuo3tEG7C8H75EFpJdFeMUJCapffgkWM5sR3jtHEsM8sBp61Pa7eHzi54UYqCPtPUPx99WmkVRwF7jTN44pKJ",
  "key1": "2sLkK8ifpam25hquiwfhmyqSddpjHk2NPFaVMPzhojKPCEfJvff4JC5HAC6dP7YHVyRfJdbaZq91MLSYguE1C5q3",
  "key2": "4AZsHWnN82r4awpEX4kP7YNj6W79kmsetxT5MNu6sRbqm3DUTW2WtNXMuQiNjgF22cz5fAapJYEAN73ErvjuGtgK",
  "key3": "mbjXpQb8F6s3JrHUPkgSDwrCcdDKZxFUAJFgDW428QwUpGRFoRY2SbeZEM4RwtJaCkctvRhjKxub5MkB332Qafm",
  "key4": "2kJTLcTLcdNPWEE7LxNWyPscsF7SnkyjifW2K3achHa51umZP6aRsAjRtobCGka86f3mtxTCXJtS8bj8qGzLXJsq",
  "key5": "46GatLJheqpgh9Fzcywp5k9P2Yn3tV3eq8wVcxfVxvK8NiJ1gUvYQ7RK9jFx98wfkCf8h7gh3Yrq5CNYdfHxSgVo",
  "key6": "5TqpcKrhbQRqn98LGYLJT2Am2sER4moXiediL21B38SemcLz1C9HC8tyc8XBKitgi8qjZGg1FKNrLPK52vMevm8Y",
  "key7": "2CwF5hqNmco3xv8s4sUCntFb6kiaaMKzvFhPYXkGKnxm2E2nVMTC5efyiVc2gEk1YJitgkhUZ2KUmPGUTMdMaB83",
  "key8": "3q7eiWwZt47dCwz5V9eyrkF1h6jP6i7THYMWT5CXniJ5TG3caeq2syFeXQAVj4rESx2L3k6K1hYijJnsv4Hnqyjz",
  "key9": "2KseA2NfXg4TUH8cVQE2KRfrvvS49ZnJKXPvbFJNpzxFXjhqoWdctmNpgK4mB2AXXdeqyqpL7ajE16CdgpykvduM",
  "key10": "2RHk8Z6RHaV2eNTwn9FbKQ8saEgESfDWj8DvtngKDY1eYRr1Muz2NjiTp1V28DAfrY7SYxxPKokKXgC5eDio7mB8",
  "key11": "uJTWxHYmjAYYo1t6zRonks8y3ZVpuWNnPAui1LHxKhdDCja9PZ5Uhh5aF2fsz2Eu2dRxahesr9saksTcPa2cTJY",
  "key12": "3bP5G2M5A1kB1LiQWPw4cu8knKdt23xBuApGpbD8RbPMX5ALv2HE5tn9zCAzWeTjrCbJYLg2JuBkYGFSPsQLaqd6",
  "key13": "428yTB9F9rgCucGFwESAwSxTVbVpAnLS9P3cmk9X1g4EAwDzqgsQKJVrUMS54dTqXK6M74x6BWV3BqaP51q1RVvt",
  "key14": "5CKG8b26zpmAWPf6xXhN6GCHUhcmYF6pZrfkbQQYe7JT56hENoJ9EWkmQ2cub4yWCCZhpeoTUFtvkA2P6SK9Jj6o",
  "key15": "5kmJ8puuVaih4DybpgqNyfQNXnCB2UKnKzEuKdFnKjH4s4Cw8Cy9F9kmRmrM6kb7BpAnUeiMjC6ZUegCJey1zZTz",
  "key16": "4UdBDtAQkd1Zwrn93zSZbTi73Vck93SDiDwErmyqM8Qj2zrddWVC689NHiaRkuwcTDQSZizUVNkBAoa4y5N9x83w",
  "key17": "5iuFEZY1wKah24dU5LmK8gUneDZGoLzsTpPAwSQwAGa47ZQJpNwXkqdikFwguLFd7t8omYohdJZzrYr6GUsyskrp",
  "key18": "55cJVSFEY4SoJoq9AkgCUWxF17RLmfLqVb3iCSNThyZtRaRtDDsmTaZFk6vVVj52YHcmMT8skMyxMVnzbBjgJwzh",
  "key19": "3bM1vXxWwjZ3zcnJtXLSPggrcRpwZFMx2roBeaYVVRkENpTmZ7BbGVmCr7LDntBRbGaoK37VFnf2Kk87rzd8UtGP",
  "key20": "129dtkcf8Ts2XQzjrQRbbvLAeSaWuucjEPMJKJeRJiWNHPvPVJo7jp1vpsLVfbdqkRzxPBNGqsgmY93M5rkn3Tcy",
  "key21": "5JryPRgybR5GfbvjaGcymhyyutsMGQbuHtQnKXA39XE5QfpY3gZFef1DyB6HipFpPtCnK3jcg1Uf1u84W8etoczW",
  "key22": "347QVxC87jeEW6wcRPmR5ZrptWX3uSRxRd9PPrmnT4Zp4y8JuVffhj5nnmedfr5wVqTErw4tpQugGkJHhqFvkZTB",
  "key23": "5xZHz1P9ZD7ckZq1sMtpv2ZdY7GJnSm2A4knf8F3WEyS6UG19NBX2GwTQdRG52B174wbqDv69sFRM75WWqZ9hcG3",
  "key24": "4nMhfe6Jh7iBZvRSmBt7NqWnvMJcTamJzzAMFiCTd3z6TjtL24hn2Ga3vHLb2Y62fPQ9jEcWtamcyJrUBQWVJEZo",
  "key25": "3er6wpVqb4VD9GeLHKnKeciNkMsSezcY1ezi2hn1x2a9bKcXHkSBVmcs9oNjut4vn7cDbLLESBbYn42pKv27ag8X",
  "key26": "3QhKXjp2uNiQGGhBJRd3YJy1BMP9baQBYcVsSsAr11HBbkqfHxYuydFod2esa2RGeK6GpZLzCu7Vugmm73otntmP",
  "key27": "5Hw5DPdfGN4jLWWesQpV5czq9pAoxmPJD1ZKU6LZx9p4oc1N57Zk37d56yQvn9JWsjkteETjLQq5FUrqDJNxmnEF",
  "key28": "3YyvShQ4fXBkVg27amR5jAwm4XvE3LQwUWKPbjikUz6stjnxe13zJWDsm22oSTeFYXirQbeZxnjSSx5sBsgiXrSi",
  "key29": "UwDbhakhmDAVehPKphYndqzKEJxHCF7X1GJFe1XDx9nyMUFGBgJzfNDDfj1CsKD24MbMR5xwqXxcdjShcYaSzvt",
  "key30": "4ZiUdDy96dFdw589KxQHPopXj8mpFZsaHTy7EC6w7wypB3npdZRd7Cp9n2c7doum9yGLpFNdoexVQYp94cfahudY",
  "key31": "CsZxbkAKUtF87iG2ZYsemYnun1DZLUsxW1T91mvQebnY7RieDT4DhKJK9YQi12FutcvYRvS9QQVEmZyCduZJaQm",
  "key32": "5bY8S3hMsKdE2dFKACeFtqGt3Guhfp4YuQB4GWvpGhyTt7CpV7srTQrRJpqnccDFeJQdYYqAzsAbW4omNkLmADDJ",
  "key33": "53VxZNjDuLqGgMBxgWJ8bvfZwVtWyH4v4uyjtt5uyxJbbZQK11duSSePMAjsBhDjrCRdDUtN3ryUeEYW6d5BVibK",
  "key34": "4gq1QFhMkFvCW2FU9h44sVoQo9Dq4vFeH4GxqewCKXDmcvea8yLVCiLfiNWo7tgyvauQmYzudbQeQpPKS4brFats",
  "key35": "5XMUuGdHKfQxNGJEot8ThGvDHMZRAoUboQWZGaWpXqzAbeJQ4g3U2U7T8zAjsNhAbpP16naCi9HdtqbDJAfVYGMw",
  "key36": "3foewCP54gKgE2goa43CZ3Se6itAd1FfCHQ7MmDWNr2hKnneCNuHTabN6CSP5emJv1iSyPaYX5NsYQqAi6pyT1Du",
  "key37": "41kFdqHy6G77K5iz5bFUeDekPttb8VZceww1rAtR96sD6iBgZzBgESnAHG41xnG7DUc1rdMEbkXuUVTcCq1upNim",
  "key38": "4yuz1F6SeKnFxZo2F6RNzF7wzqdaM3wHiXRaS6vEKrokHHAJs53N6f27VNreKz3xGkxCPRX6cFd1sZQSL8HMkV7r",
  "key39": "4oEYTFGDd9sdT1Rqs6yjuySbFChVgxxUzZNwRnkbmZCEATDVy1FmP3D1w58DYqATgAQAB9cgDqSSJLBd2rYvStn2",
  "key40": "3sRDg9d9STfpsnGpkzKvoYUJLcu8yY3U18uernnHcEgvZGMYXj7KpMFGSjtJAU7XfebdcXjn2dHXTdeF6NKZopB3",
  "key41": "3AdBPY26D5MagWvspurJ4rQzwj81jmM12anVtfPqix64jp5vffRLaiwRbCW1VBtc1yN7RVPb24DJLy5yJvm8sbTd",
  "key42": "2ZhQX1bewqpTH7eijMDrn5X3xq6oGAWZWcLvK9tEdXr4opgmZT2HdjbK3KyTGf5Q2APYWzzBeCRxLbi67CkticZb"
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
