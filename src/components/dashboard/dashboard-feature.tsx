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
    "5k5enmc3MBXyJn2P5756wW1iHbDG11KzbJzP9CMusZWApnYtBWXFdwzAuyHNvyS3q8aV5UdXN2MCM76dBQXEtjhr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hSTfi8g5a9U3wevobDo7CoX5gvmDZzZtKTamkwVizAH7XT99soWpsc53yerHLnt1Bh33EHj1ccd8MEFjMcYh17p",
  "key1": "1etRSv25Rqo6FFdkAxURoVo5n2qXv57DuRkkQPWyyncm6q61Voc7yDjtq43PuudCATHLgcjxLgzbyLdkPYUTp47",
  "key2": "66fxsE2R12CUHJ59BcQssuk883YDDrLDX6ds6yh7hS12uZXTCu37wMNrsYpvhBRFXAdSLGv3TngpgViGKcrdkpQ7",
  "key3": "5v2nxeR5rEZ9NLG6hrPZfNss47wNURSdk5aWmSJbyA1ZanuLQEMU1oSBQ6wkg4LYduX5pZsH8jJfew5GBxJ5wKV6",
  "key4": "3XKdGFtimxb5ysnToauRaHmbLcgPj1hvCYv7y4D4csxJKe2TbgbR34Su49W4ohFJMek91rMfWM1a1KNRD4pwWGKT",
  "key5": "4NFiWsZTztrJDYkAoegpL3S65ZLnn5Ytyyw7dAMcLuGyauNQioBqv97Eq5Dn75NK7dqQsLgfpXDtFhZoBeravtXs",
  "key6": "3DFkNRScwMd5LTN2qbshtEseQcGSJhQnCeg3qkxgFKiH4h2PA1S3t2HzxcsNZ3w6oUyYwN3e41JjhPoZHkw47bvS",
  "key7": "3C9jgXSDi959i2MsjQLHszNDKr7gu66zKFCXwftQ1k1dB4a6YdcZr14W4NuuH3yAuQU8rz1nLpFYP9v1Fbq4FhnS",
  "key8": "tUo4nCC4uUVGNkwnK7VesHgoPF1vmQLsZCkV2EihdKsqi6jZdVSjYRTk7Y71oLZMzKD1fZ6oAh9Aoea4GTNvsUT",
  "key9": "3sL7j8cnHNDRyqbCTcgZoJ2QcADXi5FsgViYpQx8DZBYwDqnymUiamRXetQiSwZb2xUc1xE3LRbtxUcZXJjEnWVt",
  "key10": "5F34is3oWp6UgXVu9EAwSSEvMJQQW6eu51AFeLtqhhmwGHsseG6xSZznoJ9eS9bdQZgprJS6xxHdq5N5V54mWcGp",
  "key11": "25qwvuHWVSJByeLUbChVAGPrhhWNJdaB6TQEorUDhjw8KBhduYhftDufBiFb3Srzx3Qzv5dem48f8o5kRGNTNHqQ",
  "key12": "37dhRcUJ8soTPaFTAfxe6PJbt7nYSY6uZur1e96VLSy7FxXvQqnP9iwUjgqPWRiTRxHTSDkg55hqAx71FgnpQiHu",
  "key13": "4NzBsVGxS88UxrMGvc6GPyx7BxWcU8nXChbveUDb9du9VCChXzeXj46CQ8RgnPN4Y634sFYVuCJS3HWo3TJT66Ku",
  "key14": "5uc5St82E7K3sChcJ9kUYCLYYWAc4seCy4h42txuRfZgaw3kfpeHWng1sM18ZLFEcKWniHq2CVT4u1x9Joyf69xy",
  "key15": "676WRgdzZVGJXyy8tuxZjGHdTM1uXkT1o8TpcGQrNbVug1bFPwtV6JJY8DoLcjEhNkddcrguS8v3Nwtii8eWxgPD",
  "key16": "3zo5L8WALC1nhcDmT4AGkZuNsXMTiap8PCDvobkmRG8FepCfrBzdkEnPHJ4BgPiczEF3y5F7MUJwymh5Up5jJ7pu",
  "key17": "2TRViBwQsuNHbLhhzwR3vttRkJzZmnXZsFjJiYPG2AYoG6NkUAeiK5xCMiGGrEEzKgLTJUFBNndyLB64uR9j7aFg",
  "key18": "5DgH945PPVKmShdPS7Vwi4yP7pKNMnfF642fALBFTy1LduSdETe8hHYLfhV2LNgvbebV5TSiPcXReZPjGdmnJ7Hi",
  "key19": "2iqo8Cwn4x1oSrohzDwmCEUKLtFgoDiUvbs9bijqihmnYSfX85JmCSoYv9iDJUq9SAc7kawZUKze9v7rBuMWt3Dd",
  "key20": "5axzZLP1KugJWpEZGsHsmssCBEENUKSyxbEszgHZnMcfyKGVzTqXCpYS6WKtFfMsYqgMwHNWmQUwUF3d4rnHLbJW",
  "key21": "5whyy68dFRpMRnniDzQkH7f5ecQnucwWgAbmcT3Wmg2TCuNo74goC5ZMGpHuBcDwVdi1cspev6MUHtY6sjTkAsP5",
  "key22": "5SLTAG9Uxkd8ewqkQxLtaWf9fa6khUkxW16zgaipe54SHNNDyQFxRGdpMP8SKYrfPBsHjrnDDoTDZLPyGPkS4hUc",
  "key23": "DVfcbRVL7KQggQFSzgpW866fPUUCi7ZupYEPmy9aJsVNTC4oTqzWSTDYnAH8Re6iVyjyfVWvM6GKU3q3oGtvc66",
  "key24": "3yKF1DQ1kfvkPPaA6GwHAfYC9T5KfrpPizYeugWaMMCPDcDf3KYYxcyp6Hv2NZgscrN4c7iYTk1tY2ZXcjkyjNxF",
  "key25": "5dMn4EJb3rmK4pAqD2TPusJLXuaaGksWHW9dYsdJB2emrjfX1UvNYy5xmvFjjjoRp8mYK2ynKmckhWCkcRnPKDdX",
  "key26": "29mBTcUeCWetsSFf9iuSDEKDYpsDQVgpdcs95W6wpwea6hZc1fY8yYhBcjuzhaGkfR3UbFFN9RAgqnvUpfPWutSw",
  "key27": "3WEnpEyoWLxy3LaVmnjDJLcrzp1BMWSTXauwUzup18jstmLpQAvC1cSo9n3s6TedSzUhKGxBraLAdw8RXYyYXwbV",
  "key28": "4vAG54Gxj1pPJ1sJ8NWHNgstYbwMRzjMZCbSCH3BxMkdQrfHGeExzVtp3ML56m2z6DzAhpZ1Ka82Bzf9d71V22jW",
  "key29": "22HxzXtn9Nj4BHZEThX52ic2pos5TEVtrKo2dLfvszCnmEFy2PQCTMmPw6NRLX9EFAindRKUTzBpHn2jDzmyJN6R",
  "key30": "3BZ9LHXLJfUZtNJcBExUaqyGcNWC6iuH7ZxvA912dS3GaMhZCKsmimMHSmoPfqKsEU85CQS4fr9Z5TcG6dKWTGJi",
  "key31": "2e6KWnE61fVRRAt4nzpxF2QaULxgNfZG7urDUqMg63UV8ZLepTvKfochA9e1KecLW5mL41Cgdz3xpo8x6pi73EiC",
  "key32": "3G1T7kFGL8XddAtCZmnX6bCV1HP9yCGQ3SSZ6ftVbo5cT8D3Bs1NCav5HtfWdwPME6pV7qu51RCkJCX1GsoBvqcT",
  "key33": "4xhBcRSACYe9WQBNCv3FxPUh9vZTEmS5VpT2jkqRB9eFWxnPJpbW3tNAQjMqgKdiLP2JPZJyHg7WELktRa5DBb66",
  "key34": "64nB1UYrF21mAy5RmwBF2uDtGkAymJiFoFKa7Eg6SAy5uF7XwmkTZ2tFnnB4yiHUtXfhs86nqux7nR7uUNo3Ts9d",
  "key35": "2T1Rj7RAz5PYPfPbSJgGzVxz2dMYaNV1itdrEaDre7fvF3t2DbyhKVVXkkTjj7tb76NXMtxWQ9iNw1CTf2g5pKpF"
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
