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
    "3LdYgRdrMKTVLScJkYzWsR9eY8cQHgTi5x8jQFS1isknwzRdH9yaBTSLyGEhUTme71r8JZjqybkmzg5Uy2tnuVYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zNwxi8uUGMug74YmVYkgmFxXuBgWGnur1xHh5gxig2RiWu4vzim9dQDD12gzpYaESAytxaU1iS3SKYjXAgqgnjL",
  "key1": "3zHgx3A4PQHLwmDQ8SKMyS2iybUH3D4o12Wg1DpEbFXBMMcYMnWpHs23Mz5bugWZ3nHtYjMFsQUPsAJ4LSpui2Da",
  "key2": "49D62MiQdzzEVkCjjnxaKVbasL7jeQD2ikPo5jhCk8WaEQ3ZUWvVwgo34smx3F4WjbiHL6V1m7wrXEkhWqBFmX7w",
  "key3": "4uWbGQ8zbmFXc2cdNwrbDauKZmvZYnVQqfQkehTZBnrzuRuMsFK4bK8bGSorhC1uKcSvDKHsiPcK3LWvzqEXrtfa",
  "key4": "e4BkeKd6R4zwE7kJtskpCddnnUCak8aNHrzzhHS7459axyQ4osYVTiQ18h6cWsty7FWZQwWL3g2j8HiwmhDQFHP",
  "key5": "2g4aqjZrrhPEDkfxvkc3CAvM1mgwXnH6RFonfUxLyJmKjV3d5oERXci6YHauLcpFzDgEYMXa8g1mfwn8DLqtaanw",
  "key6": "3Kp2Lh1urZy1omWCA86uW7rnKtoqRNegEhrFejJHgVvfRQon1tW31pZcjJzpBWRh2SbNMgVwunmeoKiW5j2YYVnB",
  "key7": "4zMRXMS5yYf1UK6gEzJNo5izyMFakrnPHCTgSsVj92iQWNa8i3nGUARWquXx247Q1NHww9QS76AsLC9DXCGrWFTy",
  "key8": "bj5e2h8gmMezdm8MigY6Li1MYMeuJqYnZPZh53vubZAzY2XZf7aJwhAdKzXkds4xi9qVxf1Xm6xJbFr3jRwHrEB",
  "key9": "2zg7o1PPgRb1h7ckE8w1YdGg2aWRVEVXBmyVduJowmGm93EYZcqmfG9QcDDrtcWyL4k7SKdxijCgbw9rKv5SBm47",
  "key10": "rjzqvqeH1k3DPbwFaRFnaVdWAeWpxxhMfG5Zt3CbBnjDayD6fkZM553R1dNkywzrac5q5etyvLuNhFDkHLt3Ysi",
  "key11": "2sdhBHphCXyQy6LC1w6U7qwRJpXWgYX8rQNVQVLw7m9zSdrTQ4Uj4pyZvReEYsmdZmDjUqSVoZtdpFnSoSowpfFM",
  "key12": "5MXAitZHD85CCCuTREHbeBc1YoE7sTk9FYtQgHMaEwTNcxGj3qWPttYUtBMiKq9AYdcST1XqyRRZ5fbD7enNxNqX",
  "key13": "3V2oEKuycFjcNfNwbF3w9PWs1zPhDMC8djSno5EZU3u1VWVJr9kSTLgxztbqPpt8Xkn9YTw3Cr7wBCzee2dCwB4w",
  "key14": "65PjEx3HnBEDG4cRHKghrxwadMp4mQ5XSgNsTSYtWir4k7qNyYvWDfohq7G3Q8Q8ifC2T5hVLNeRfkZP7L93amvk",
  "key15": "4VVf6ePr67gcwdpU3EiCuKFV9xMoT6ud6DZNDXL1dzntYhCvYJe4STSB1x9LcS66RX448CAN2nFPKm4sgQSU3Sbv",
  "key16": "3iC2WxaCA5dacoM7Nnb8MHvKZa42iaR3bWsDBhdXXV8W5NCDZtZombwyoeMauX2AUqGLLYdyBacFrBMPQM73Kvqw",
  "key17": "h5GEpf1hHiAZMZFkh2HNWRhwYBXSoTHXyg1sxAoguH2CWhpbHvcMMK39S9e6kdAv4W24fAb3wd4VRUreWPv12Bv",
  "key18": "TEYv7Mmb8jAXQwEqjUdLzxx4VXFZv88HAC9PVhcEyf9ypY5qhbB71HCoyXc5bhssGqS3VHLeH2WgrUWPjbZizHX",
  "key19": "3Piomit8i6vSmuUUEk9HQxyjkbhsqFNzMfwkxoXixLbYU6BXByzt6EQNsqPeBZYaEc9A9KLog4813CcZLtYTdREY",
  "key20": "wLWVN2FEASDGh8qDvSCMJUQDCnzdUjckWA9hNYypfSrDjuj5LdvN8RdqeTtxpmhAemhkc7p3TKt9tPUV7XHAsdM",
  "key21": "4wftgSeuwNT9fNXrNPZHzjePuvbixJxV2ybVKDujimMUHaZEJARqG7LRvVuVsKwQqRaWXMgsetXAcBA93F54QZ5R",
  "key22": "2cGj9gGQeTA6A6n8z3f2vhwwbK7YYbkfx4GAhys64FMsLCzRaYzG5TTX6EoAzeAFYYELeKvvapcgmCG1fwvrY2N",
  "key23": "2Ae26p1HGbqBhH3D9G1tisQUvrEw7ZVXg4GyGZhXDNUXiUofUEruSfw7VH13PH5WcvGpycc8x6nfrb7qMLpg68A7",
  "key24": "5gqX1fRuFyD9x3uH8tk9Vkmj8BSLavUuoBffHCRTTPeoQGW2d6S4sdQyyq4986DAfnDwSNhwEzKcd6RopiK9dAUp",
  "key25": "2suWAzXygeRNATGPE1bm8pJV7uAGFMAikRfS85JMLeeQYzC4XPYjX3tb5mYenfRQQmQSVSkDyocNaWRt2aRsPmUP",
  "key26": "5QuEVVK6uZxF5ADDLBNvUB9cV1eDrXNPysAtwGK1xGHei31rz56GWeRKtLuU4FXyCchoRpBwG7gm9dRqsopqR3dq",
  "key27": "2yf7eK8FXmGH9MgVsVMExTMdJnLnXfwUUY3NRPfQS8KvrrBj2ZXitixCR7x9o14NRnE1VruRHQLhaeKSusnXF6Bi",
  "key28": "bufHbE2BiVaLGD3edV7HyzuMkERzzw42uFpE73FBbUthUAgpdoKGjkgUCVBr6L3x1mAvc6zUqPJXTufxM4nJjSk",
  "key29": "3WWGaaij3rpYWkpyMmnFuM7z54v5E19KJnb2mPGUqdCKEBAunPTVJBwuSRb2XjGbudr3iLQmCLAmAFnNsjihCcnv",
  "key30": "9BBejGxbuhCgYZ4AYxEuBFbprzWMpVu1AV92td2zBgtkT3uWJoCf1GHEn1G8jemXrEYbaZuzjthWV6tzDE2MRwn",
  "key31": "34PHmwXGh7qgXMyMehmxktTf4YeYBqBaLq5oV1UuhuS1hQNLj8kapsSJFtWgdfvgAzPJv1hzAV6mrEvMcHjEw1M6",
  "key32": "5zAy1ubg7ksnMYf8nxonvpwukd3hJPfD1vDLTW3H4uvU2A35xbc7VnyJv3EGfuR3yvxUZynKudpNbf3LvvspRLSD",
  "key33": "4ek8roTxjgdm9urLFcDtPyAmKrkg2mfprQaSQ7atBMpPtVfpRaii1NQR96AaDmFqCb5Ycex3c66hcbYkLLoBn5Hn",
  "key34": "HgqeK9cBJyaL6pKhQjpLYqwW7H9zf3qiY6ybTXKfadb6X71qccVKSwEbqcsacsBKJYzrxJXg2AqzyabMVc1FUqn",
  "key35": "51FQmNGxvQboiypH9YhovPgdYWrXFsuxPGgY8NGpP7m56kp5Ajsm2kVjNebdjF4jnHQenZcxJEx6D4enbrgETmFS",
  "key36": "HLQEDoBCixN3TbYFLEzJYFAoUPQcEwBsjeiKWCKjdVAxg9Y9gR6ZXXJaZkvoV9Fue9GFcammdnyowEU1yeUyCiD",
  "key37": "4evZbsTA9syP5D8FWu21FNJ9561KbtfU8XoFv72QUMSaJ86cbfekU923oeEzAFbMMZaxCvT5LhSQouxSDQpwfjLG",
  "key38": "2C8kdYQfd9bjHdARXweRGCtWo8v93EeTc7nz4uPRCMD3VYCkVwMSuRf5bDqKP6e9oL7vqYkNUmWpp9ihUVFwNwa",
  "key39": "2gxjhUQNHUTg1ukzSuVmMrDY5kjuzUVf2f4b7Aj7DbPTnKBuzNsAzWnj4wwVY9Ys1r8y6yqcBwVgqwyMAg3wFWE7",
  "key40": "5RVu4hW6S2aqH9S9Z6DewDVveqTignViJ92xdgvNexkdc79fRSEgrWLBvyasLjMbxo8qP8m7ykBhNNcdMoFAmUBj",
  "key41": "KhKhvvT5WKz7CNi7T8xKrfibJWMUyc5e9qm2vbE9tGRQAoiwTsbRJkjCi1jT79NXFrEVsG8hMiPs3uabqWSUqqT",
  "key42": "21ozPLq8UH84yKZrfc5TufrFGCW9LPZQPw3qteumAHm1Bz8VRcU4MmFyoC68phpWKNNmFsjN5ZUPKDvrk9XJYATh",
  "key43": "z5zMQrkLifzbwDq82kqDDvcQiqWyHNgfu7CJU8BYCugYipkUvuFpUVatL6LzjnRKe2BQG5bV8qXFGqX4Wmb9xfd",
  "key44": "3hwTGY7rXteSxVhr1UgLiKAeBmt24cRSZ7Ai9yrHha2H5xSE3pUqCkqo8SzsxqVvg1vsLBFmYmN3rVohqviPAyNh",
  "key45": "5mtgr37xA3EMpPVa6VVWK3USGu8ysZLdwry6raM4EW3mLrxtJTCHiEjELe31dsAoVMEArYAriyrAeLwBjsYbUVJE",
  "key46": "2tAjdcKDnnvHc9eURx4KvyWR7eoeTWMUGL4JsyapZ3mHJpyHLe7Tvzxa5FXGXExGKDbrvWrxdEyo82fhNq9rsb22",
  "key47": "3styURYkrNsHpTNKtPQWAXrGuMdeuwNGS35bxfpXWr8wqupVDg5i52vZ1n7aMswguk35gcGpznevsbHCsScfaaFa",
  "key48": "pN4Ppg3iaALgVP2N5oPmkPCSGTYNKkajXEQYXoiVh4heE9nmMEaRJCUnM11htDG8DbqK88ErgnWvqPTz4RAfxvn"
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
