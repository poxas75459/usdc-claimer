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
    "2dQSpoQq31CP1KCJVPWkudoj8hFbZU4quJhdgoha8UzrF6bq3HMej4mr9K7EKZPyvMc6c7Dv9VQ1ns7LTyHPEepE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vm5cdu4nTQQ5tb3WzKRunAnyre9CCPTQUq4yXbM9DofA4ft1Y8Ukd4MmyjGxsYLKQQkoazKua1PkBtoNPAsPgcK",
  "key1": "3uYFSnQeLL4YuT7KiBjYpYTKDCYKaZfj5YMPwbFquPPjWZhELc2ZWUCBikUdSAxDU5TGWXn11GpM5kSASW27N9dB",
  "key2": "4h68LXrZFo1cUDSs1frGjcmGpnFAyzVb79dTYeoWAjrpi9xVcX4Xjc4DTu5xstpsJjpTDBBvopCxEyxiQ6YMu5C5",
  "key3": "3aYy5UNyPPgzY8NH1uBGrVYZneFnTSaZXgxy5VUMtGwUHPZNvMLiRZvESiNk2y9zV7svonHJUbjWDoT5eFsRoxiU",
  "key4": "5VFR1xBF5rJheiCUGpTcrJR1mAiDdwWSrdWM8LD81f8sCkk3G54EVoWAjR7ghQeuQ9sUBg1QwQifHsDWP8iHgKrb",
  "key5": "wEfFNiEWw1s56VRXVmxHKkTHqkChT4hyfxBXDV8aeMDnNLdXkb2Lu9CXb4YRZow6K9Q3wt7VifM6zkpBReTkKw8",
  "key6": "2Bndc7onbAwsM83b8TXQap7xa1CMsCwe7dpa7RVbb42BUtrmBUvuYkrvPtshwF9wk6k4CaPUWLN1MkBvqudhECPz",
  "key7": "2tYMEz9LedAjXeb8vbgnFC12hnwAbdNN8vcYczbUPc5T1VfUG1MQSRi1cP3qXVZZRGSMWmnS4yCDNT1uR3rSsosG",
  "key8": "NJYZUR8e6yRcSAj7majRAb9cgiJcVUibfLKq85v7Q9vh1J5cZt93oPvtuJY2mLvGiFXik6Vxyy1Nt3ZZfKs1GEA",
  "key9": "52gPxdVS49GzBf9TR1uCWwyiNx771hR3qLneC8LzNHxgCgTtRfsCADxK5FG6UFMbpZZWvr63KiUycDUBQvSavE6P",
  "key10": "5x8jZ9xHXaKhSdwosqPrawCNej9SkTBVWQbpLGHSTtUbV1rYNw1FfHwm2Y3tgB75ySvwrDSCDohXdtLyw7DEsNyL",
  "key11": "HisfZHf4QJokKiTFBv53p7rUENFsdc7yB3kppeKoVQY9gPemJbEo1maLyvdFv1YLaFxxaa69Bcg2e54335d1Fpc",
  "key12": "4atDycF8bcB263YF7US1Mrk7NH1waCdb2LMTQRdg2da8iH4as1JBPD4BX8Ur31Cvs9K4JaAXb6JHcfy1B6MnjAA2",
  "key13": "RuSLiZoMbdTqnbNcxbuT5w4t5ULzVqDr6XWJxMoDLxZhnSUMkgYhmJb56J8fu3fXL74BQPBtj8rabwh3r9L5P95",
  "key14": "217ZDg4R7KA2dEyAR35Zq2353cFUtYvWH8AAV2rxNdiReXmxMK8xRVdMV4D7gnuax313JV7QNV8cTs9Luhtg1ACT",
  "key15": "xhmxmMB7Ewsu6Y2QuSr2tX4K4Mtt6eLDJdMJ9vLqeXw2dy885eyAH2PnkekYwnpgbufjhjAQf1YQyG8jGPXLwHQ",
  "key16": "5UarzJLUsEJiS5vCmCTZchEHfvK28nNPQVerC8LDz76HGb25vakE5P2c6o3Wm2V5F5VCwF75jDo1E5SDeEwNzwwP",
  "key17": "4xqCupKWHwYVJ12kCz1unDp6mBGbxwvt4uJUmPmmez53HNDAUnqs7KD8TSxEY4sdEMmXTv9UY5D4gLsGEWMZ66x3",
  "key18": "onbvefZvEvrW7NHsSN8rsSveZk37nSJ1g1LDX9BmzWRERiW5wBjow3CgRWGSXprniD92ufGzLZmVwXyhF9PH9GF",
  "key19": "46JSqjcja9QtS191DBL3DGMQfeNVSXVjgJ8W3bG53cGdF2PjzrRyjjYGePvt8d2zJQsZufbfbRpKc5tJ3PiZ6giA",
  "key20": "2N7GkPweH9tbaUL2mZkDAq2QV1HX47sc8wFD6mpnsM3EiwfLKRWnebp8tVVHEgXRXj7JuoqWPaZjgxWjXB3wxKk6",
  "key21": "5DXV6j8aFLi69BRiy4RcczQBEgVCjK6wekHwbuX8aCFjgEnhkE9qHQoa9wcxjCm3tA9P9GRYBPhn2kYtuUskiiSg",
  "key22": "3VarZFFViSY58Sw2FmQ6GnaVNSpiqnVmXVur2Qdwg5pUM3Urkh2JQAFpj8Y768cF7fnHcMrVsqJ2V8bWNykyxKmT",
  "key23": "5sJ5dyatAyXszYAA4bvUdiTSoWjSxcMfpVUAXN2YHpbN2ZMp1dpPa54fDNPEiDDiP2QwPcqKXEHdQkr1z2JoQwQ2",
  "key24": "52tHAXRytV5GhaMbf47AAApvwWw4NfjfN1T9vjSivMqfpVHpWzcopb8PvGEYUACeGBN6NRg1wV6MtXJ9yewrnjvN",
  "key25": "hY892pNABNfiVaGmdw4ke5ynXHcoYkx2Vbso9SkVX1RM9yAvYzo9yJ1fuSEtkb8VjABnTvpsd2h1BXbu59WxwqG",
  "key26": "9eLj2GmHUwnPop2iKX7xhETRxh8rYQ3wmDDJGgUGjNBm1HgdyvB8Wp8tg9GSjDunCkgZ83FFybMSPV7GexDewFw",
  "key27": "2faF3PG2QChRnmM1MAVdn6MESg6YbdmPHhaZwugxCXFkgEAPVL64QtRdyeCuaXSkPdvmg18f3ts2mAJuLELiqPhP",
  "key28": "3AJrDUvMoYsxuWpYq9MkXxsRsjLb2LQjxDp5zdWSdYhZhMNwtcu6AKQgn7kJoLedP1ex4mQLG4G6uMzMMf35KsEW",
  "key29": "5ox8W3J8Gk9vGmKZuJ8YomDNE54hFoMMM4hbhUuVsz5oZ4WsWfU6oPvuMSYSWuP9fjwndVb2iDy7bUKRy8soK8q6",
  "key30": "5az7XNP7SZCHBym7uQ6Hj11pXPrjLmgYntvQFzt65yF3FJzkewAQK8g9RERXgat6AunVDaxAsn1uMRdzYoHmmufr",
  "key31": "5AFgneYfp66u5hCvT5nt8zSJbUdJPzqp9zWaj7XwyEigquFEKZZbUuqjcsC4yXN2B3xArvbESirSAJhtxYBGDrdn",
  "key32": "38fQjHfzjGYTrehhWwLRqwjBVMENLEGywuB5vk1RKosSGJTehWpi2FfFEQKSpUbY34oMVvEqBB6dc2DoxHeurE2p",
  "key33": "4CvABE8z1QQoZkV9fUCZJwTc96acj6qn75qQHMMNrnvuZuJykEMRbw1c5EPWDrAxZ6WdQL5sdriTH1fHwzX1rFAf",
  "key34": "2aKioBLCApXi5CRcJis1uCcvBGhFQ3CnZhcvBfEwe77UekZ8d5RNDpJVqaJkEEDkieLe6CQQoFnZRkhUSTfLGHX3",
  "key35": "2gFVmCt4QCBAa2EwEkzNURNaNMERzrw8QiGkon8rKEgoDVGWNkSk7YMzXYWxoiaiSvBp7tVJG2A3hN3KnNuCDBQV",
  "key36": "26XyPHSuq6naAxmheMncV59oHHjdD9uyJ1zbmzCFfAYA4UeC5H3uGKD9EwCbFCLDQmJRrugiQocDk7BNFY76AeQL",
  "key37": "zCGmTs1h7jYPYCF1V5tS1wxdWrTqxF2K74ugLUsQLMz7ghALcgbWVqtWExBMV9jFfE1kixgLDR8nHWptGiyoyVP",
  "key38": "2V1wHxNkhA2RjnDsNH7f3RMEfM3SP6PxWAUDSAdgQLPZB664JVU251KPSLekopnkPJhCGXABYkx3aBZXP2rKF3iL",
  "key39": "3RcWP8Ra7VYrL3JDdrukmYp77WVhYmFUbHBku2bekRqZ4Xo6BwTrjyyScd8rtqU1jp3PB1N5HTsoT1nkZ96E3ngo",
  "key40": "4PkND6VuDeKMEt4HaCV597xbNM2wez972mWBPJd3GCVQxyLsGNFYDYQW5dkWM4zhvMbvUFT5Tu7aESve1Pz1Cimg",
  "key41": "2toSZBu981kjqhegbQPbWuncqhL9PzsnUDfTkhiPin5mVd4ELWf8zgCWWaoGvgxqz4SBhEuk8yo2pPFRUkAvFm1T"
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
