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
    "4J6FP6RH6mk3gzXYLsBHyXxCEr3ab6PHh7TgTYNK38GVSBcYMNfiCc5pYDrUKTeBiCkbZMjR5ic3XDfePTkRqCtC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j54JuXYMxQcaqxSFrPE6QEtEdiV6fTpYT4CrjmZPKBx9xMVdvmqKse33KT4QXaUke6HngYpCuGbGus46XmYGcgV",
  "key1": "31bEhq279HtgfSGCMoyRAzVvxcpi4yRRAFvv5xr9qSHF7XNMy35r4w7aLk9MbLbQoA4KgSDhKH7GQ9zTqaCGym8u",
  "key2": "3vfpjNfQNsqkuma56TPWNJoP3Kgwt11Nd7jUJWMRXtLSuVeYKaoeCexqDEPFPMAk2NTb7i77xd8kH2TGbWMVp3ts",
  "key3": "3f8g4gxpBZBDqGX1ThV2pi1cFwZsMgZRyTF7yfHGmt7y2ardby46mGVfnAhDcWkQW5aqWqu4DK1k1VzQbkEMStTK",
  "key4": "2KA7mWZUsZUMTUAReRbuQugtgyFbRvpfDj8LYkZxdgVw4BgaTQAai8izshXgY9KMCeDxFETkpkJq3anTxbHmN3oa",
  "key5": "4mSh11kvUxSGtSFXtKUu353pR8Dpz7yLpPHR3DHPor2r2RbFkeP1jDGJM2SWwsvwX8YWCQBDSuJjJWdGbiVCQqvj",
  "key6": "4RcUURvyfq1EQRMWxQNzA1Mmop3nuWfkpv8V7zRQkirv6MrevZzNUewk5FU44SNytTjoeBYJVS1UGfYK6ka7Tf9F",
  "key7": "bP2qGahkGaoPF3yWSHujxVjFn8YXGu6aue4FHZoVb46ohzgs8cvG2V2tT3w7H9LDjMrNm39hUHT5T4YcRksYxaM",
  "key8": "5xEWW2uwDsHR7Ng42bDnnvH4dTAAwHQbjYA8oARWv54vijgcbtwZukpErWoYuXih3QiEn46mNx5Cynfv1ajqgADa",
  "key9": "5SkxYoMSU6aSgy1FVWGemC9e2uhK892YKr5GsQChF2wdT5F2cxQpWPV6nJkGyT4aRfGx7odPCNwU1g9nQZjb5YqA",
  "key10": "QRhKfdHtx8wqaThwn41fn3Kxj8kaTfB1Yx8re63TCBwCegejb9M7tp72XLCVNwcY5gasfkxp3VUMb3baejY6DEX",
  "key11": "4TQuupzbRdae1m3gizp5G7oMiwSGTy8PKsgQ4Ak6ZQLPWQgvaWwS8WD4KUbcBUu8tcXQ7nzQWdnA1K1XPcj9ZxAx",
  "key12": "nUMp9rSCiXzwUSSv4QC5DvzJ7ikPoKmQDdEu1mUNrWPMm7jZUWFc5LJCEj5MbRHd1bcBRCvf4BSPFxn45trPk3u",
  "key13": "WwRkqchXjya5aSPC3xaa5K3FNpRvj1oYwjyEUGBdXPdXy2cWb2i8rxckmtBUbBRdjqF6Zpmr6P6eXc32WE3ixKk",
  "key14": "3DXSDD8cEqbrKEpDEQnNidwTu8wBab49kzTm1nShxFjDHNeNyA82W7td6vSzvAQ8jnBLv4pFhvaTi6TN3gMC9PTP",
  "key15": "656n2EkUt3GiqBzZqJNgQxA2BsApKzu6SCCZxSch3HaTZ5Z7UVBnJGR9hphg5XWhuoEW3c752wHLTrLf2USUFXkH",
  "key16": "5wRTFXxU98PmbLGBmGP7GxaggmSMaz2ZzgZ4Hwd1LyMuBzjDGRn2MAjRTwYHMwRkCwTzbsiQ6c5nJZy1gS2M7sxL",
  "key17": "3PpHyDhCWqDd5Sg8W594P6btqqxQDidoLN5eaARdUoYB1ybR51JybZRqThu1n26jwM8Yu2djbHbB1eBJ7uPoNFqg",
  "key18": "38s1AJB55kSSZp9pZWY9mDRc2VFFiLAHKdfxti2GKBXxrKztaNGoHDqSxz754p7nfKUSi3BFhJiAxoDRNG9Szs1G",
  "key19": "2bWr9jJ2xKZq2Q5My6i2kZ6JgZgAn4YFmgVYUquSa1q7VuEsXQQj2oKiYsUvYF9RdQHs4YSg6HR2QPyLXwNZe3qH",
  "key20": "24roEoDjY6JsWXiKdAHg4Cf2f4eyrps8JunfKAfWyX5wZVPuDPPkVY1uMNfeiVMwLZar1rKfwRWe4u3zebrztfdH",
  "key21": "4SopJ3XxpWZWkkyPo1JRfTawNYkJ3VYvvaBiF5kajKiSW8p3W2SkZwWKLjKfVJ7fHxxgkX8Gi79EYEQcoY7mn1Ji",
  "key22": "4inYUpxP6EqujsVzcLzTQr9mThzpreNsq3tsCbVQnMKoUJB8hQ6AhDNhEk5czLsVwYRbJ4Vv4bcgWgd2pkYoUyvN",
  "key23": "3sogQoBKTPucQ6j3PxKNxryCxuDabGSft9Y5UFtz5oahKgys15UttNvyTbm7riRa1VHDqa3ecqGjuduHECg7xFgt",
  "key24": "3aNSPb6hsRLhCUrHDeY3fzhc5F4U21nwfjdTcBuVgGjhBWfe6Yy2f2MLm5mV4CSiZLx4MBVGiqaLzw38K2M6hsYj",
  "key25": "5M54ng5dBfVAi73z71dQ5uEYWCaZBH8rN4aA71zSBvjXvMxrjQheVVxk7Tk943uATEYBLtyRLEGzyR7W8PUzfHCc",
  "key26": "5RQT21cQKG8qaQfn2geTwtaVoqpLMnmj9gAJ34Ss9FG9WtS2CT56pMfUBdAQdX77kH8RZ8Zv9LGPLi6WZa1Qh31U",
  "key27": "3jgfHu2c4CV1SqbamM4GknGq931hXTttJvTSsfHemhUxw56RYtMSQyEEDk5DTfYpSzVxXL3Q1YrMVxYMZEPjFVsJ",
  "key28": "38kdYS9e27VvznLKiY5SL7aWq2SN3G6bWh9SLsw5X4ryscT7DDs8G7t7gMYuA63ugGdjreoGwLNuvSJLdLmKkT6i",
  "key29": "4vW4PH7sLpxJLX7DY22wEHyf3PVXKtHUu6ywnXwoG42eFP2y5a7EyN4iMbkgwv7Gpe6kR6vXJJ4kGpbFpdXJjuPY",
  "key30": "MEMDeyiagurt61Hhi4ifH1pAunaxiXK4o9qdKSYHW5Hgp7NPDWRpNhtSzQqJFshe9WYwMLWVcmQggdZoocwTs9p",
  "key31": "57jPbtFDgyG4rEFymHzW6KQt8aiCddEviycRdASVqdh7VGbpNMNSiA6Wozqdz7K177rBsyjU9Vb267isJsnL8yuG",
  "key32": "4NCAtLBc68wRCnPkfcujdP4eaFej1T5d98T6doiKjZxLatnjS88vgjFcEj3C3MVmTsPDBWBcvzMJMUoYkFy8kbtc",
  "key33": "37YunHa9w1qqfoutYq6beSddTpFk7CBytJhiyFzSv6Vqs6uZ3LAcWVNAXawPSgTx7JG45sGZWu2vqqVQjLXF9CME",
  "key34": "2Srfue3L7qj2bMhSjQJmsyBZW95tPGQP8JJ1hu1tUhdoePGhyJkfacbbHNnYeGvGYvXvHsUCeh9ZmvMSyCp5LUFx",
  "key35": "WxwzgWC6NMLKMtxNQ6Tx3ANVWsRJLnGRJBq2DTRF6R2sah1WRixUnw3TAjNqvWY34j1CAX9F59tG7EvwF2z59Yi",
  "key36": "48gSaAqGNVxe9wCaW6pK5LZkZAyGhE8VeaDmKLGP9fxyCRoX4w4Tvq8wGEZSToeGcEVQtSV2dBrCHT4GMT9t9uGM",
  "key37": "5nofQjd4QrsM6GtYxk3vDgqyczJ3obyLaLtAgj8fa2EpPWew5EwGjC8voFHVKXjMspA9BdPVpVW1t2j9YsfvXvTX",
  "key38": "4i53chLQkALyraAY1xBaNv6MUTeG8WjbGWtHjgdTg1sATxUPCDNX6tWL5c4v9rMS97WEJr2RgSCVFdjiyDsyePf8",
  "key39": "2r4nRbyGVAndVDk6JMhsq1SfVPF7JDHyV7JS2zSump8SJo22MshGKNfhmM3rDg82a14shSueULTnCnJfZ2cGSJsR",
  "key40": "2eKZ2qskmYwFUg71GNYgVG5h4XH2W2QRawPR3L6oMZmnP936AiHodD7itLoMv7i86PhsUxdFFLbvnxiNb1fezCG",
  "key41": "4hsN8qJP3Lk5syHw8hzoiFTHJfHTxXFg9b7BEZZHQwofpd5PNMobNPybZctQGrWcNJKYgXdVxqLfy6Y38mKATSDC",
  "key42": "5jK7myb6sSbZKkydQQcM6cpVrHgtqbZDBuM8TQK6z3pXb3DYPGMyJiZ5dxjAzfYjQXFdPGtotUoPDEijGvGEhotg",
  "key43": "4WZ9QyRVLSuX3KYKZT3snrV1CPhoeZfYwvXbkXiE6Yivc1qkfUR3kmP4oqZegua2T7ifywcuEFu4N9VQLjMzvFXB",
  "key44": "4Qq4u3Lmq4RNvMgwo4FZ42sFbPXGrmEyFKieKUjLhGCNHBYNQ3MrDA53dHYQvKDBWDjuirvZYdo96msXizCWvR7e",
  "key45": "p5GU4ndNucajokzgzQwq3CLk5CAGCTcfPc2cBLLMXFbGTMX3AZG5GfJU4bNFVTwptTV3oY9VyEH1FnKP7VWz9a8",
  "key46": "57gPGoFPtEWpPdNNhYd73vetHyjd1245kMz3jg94Gq1oVTXftLtGYgfHxPWXJQkc4HtVHDhpEURQgR1ESTq55dXD"
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
