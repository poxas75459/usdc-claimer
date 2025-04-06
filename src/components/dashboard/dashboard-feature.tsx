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
    "49E5Ev84uvdWWKs3M7Yfp59mpzzhhED54E2MpKxj8Ro6j7NdCgYMsMDLKxXhuhQFvXnb5T1NW5nNkuFKrxkfhXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MrS8EKDNeyN1JehfgHEpXeywXfyf2mkBVRSruGhVcZtK32keRXz1ic49G5XJ5iu7wvBmVLDrPGHzNGkjwgxJnXh",
  "key1": "GSfqRsTQa2UoDEZfZej9Ed4ADSA15jtn7tKnM5WPsui2cjdULoEBpHRUJVhwasG3qVYYNkADZprymvD88jcMARV",
  "key2": "615Gpx2gEbt1MYqtUdQgnzkDsopWXqCbfimJmA8xZi2sdNyngtn74kFuVR2qaRTB89JWyjowTL3GZCdMGmB5h6Kp",
  "key3": "3j3LVGXiYRXV4vYNUZh68qfacxvTob5CWPia5T1fwc5tS9kMs9nCKYhRkwnvJjHFV5CmtDUSQeKtchbPWXF4A2wP",
  "key4": "5R96JN2SoQVVxcLjiPs8BdrQRndLAKE8BFVF1ZhdYv1DQwVY6q1sAqrGvvPqwdazvvK3zmiuiszBNfp3u13e9GDX",
  "key5": "3vWDfFtUUz7d6E8fRFqbwUMMN9MfNf6hiXABGaQxxS7XPGYu7BZxKgroZSKyodSGwgeAhYeTcH4wRWdx267bm92M",
  "key6": "2ZW4HxjGe9oTU32qusnqhsARAnA8Y9d2sV5nioRWDbaCTPT82Qi9Lyq8qwFVpaKB4cBUXXAjWYpG329DKvBNLRQy",
  "key7": "3WxXVbNgFUg5mckvXjZVRaVLXuBhHTANLGAFSVBE5b4ZCMQx2dpyaZicekKSsgHGSouN3DXYuMNycuTZLAUEVFew",
  "key8": "2suzEUP4srf8WvMyoMg7ri9X5CUhcSjPbCtS91CJKvDzPY4n4HNL71WsivpGHVp1PDejY74iKrGiexLtdJjCRYJE",
  "key9": "dqG4KiCYcyWCCRUaLWNdJTsnzZxAyDCmBWrtUUJkFTenx1n1sG4iGnSB4dnNVmbhhyJyH5peT6vAz6g6yxcJWJ8",
  "key10": "5RzeYApATvNU3FricrKcL5NAvAqx3EEmgCu8ZzCLzxHtZfXcyacaS87J1KzRtksWPoZiggKYBGiw9fwJgVskv6RS",
  "key11": "3trLfDL1nHHpW2QQUWGcqUVe5N8HzAyX7yXdcbmazSQ5cAn65LcSu9jjGzhGn4JhbEufBG1fbGh9gB6DHATQCfYB",
  "key12": "39ZCexiyR4dCcfVPFXJAsYb5nf1rEkm5JzvZUbesKuTHg3PB7t5tU6mS4QoBdeTzVfoZDBHF5LW5wZmAL22RFPts",
  "key13": "LsWk1U7f4J77HPhHTEZ5vdDy2nZYjDfoW3hQR68N5NkGCY3HDqPKR1LiG1bT7ZaNg6mx5b2KdxVBYc89M8YVA3B",
  "key14": "PNLdBv6Rn9m95cg8Nu9ns47LUXnAeHZy75W7pGkeS7YPPJxXQzBmGpFXghea3dWsrpDMDhgjQfAGrBg5whjnkuH",
  "key15": "4BENxDEM1UyFH8BEQkEYUwgXUWkZ6RBZJfMyBhdYpYFk5XvPBevoWpx496Sbr6Saqeg1A3iVzCb4DUHE5Jz9sdx5",
  "key16": "5DDg7GTqs5VJhggxSjvSjJ3WPbgGstoVEQCh2HbGabCBXTdh3FBCipAwvHx7jDCqBwJKTwyQ7iaN67PMST2CVSqc",
  "key17": "4gWbDqNi6vCE2uLCnWpcB9iM6wmBcgy44EVszTuYM13benqAU4UsfUvNaNdfobwMmpwGAQd8LQFUJk4a2QJqAHLS",
  "key18": "5aT3NfMeq7MdGLc2kGLmopDUNkSMYdi21CTgxGKtbAyShvDEPeb3MUcCmirqxSgW24qiVNhUz4bGMDEjD6V6PEjU",
  "key19": "4PT7PFZ9WV4YM2t1M2r1PPwwgv6F4hxZ89f5yYJJ1F2YKmLDmbAfL3PhvmWnAzDVCrD8vU46yGA1DFimwsSCSQf8",
  "key20": "48Tbj3bF19v3vv4eNFYvh77YFCSyNnYMsphTjpaaQiw8LYz4Z1Vd7CFdfer9vmm1KKDyNW2SsTgSVMqGhsriuqrZ",
  "key21": "4yGbovABDpkmQAJDFL3AJBE6Lg1i15gfp53B42QfbgFAjCH6o4B4YbNFgTDJ5SFm9A9QjFwydZ21eZLwogaQsLXM",
  "key22": "3Whw5vW6NXvQnBefFRG7wTGNcUruXGftUJgH1cbj4gzL6vkzWhfr9ynWvrqkFD93ebLEWXYqxPAYXoCGT4zexpjL",
  "key23": "NHcNZidRD1958Xk9FcGBQK1MJKEECBgphiiGuPbwxMWQDEwmuueHiVMqs7zwwGgcyBVHXjTMBX9PzLaPSNJccJs",
  "key24": "uuVA7bbBSNsLxBz5B39ghvbemAsQ6hnL68aR6LyMU7HztQfmMXanmVtpvUKkE6JLUEty9iERoY1VdRJKPQ3poYV",
  "key25": "5qwNJrNKkMw6zQMXdg9D4Rno3iCjeAxPEetyQpckNAsAfJLcUWtMECKGKvuk7niEPAGdCUoHsgzqttbPjzudtAxz",
  "key26": "4E1auxmdTx3jM8r3XSaF7Ug8CYJZHPmQ3PUKHcDar5PgSuzKifxxRuExwxQdsQTiCPbU2J3vipavWMF6DnuGrAcz",
  "key27": "3YswdGkVaCGV47oPqMnMH8FEVNgFpEu7CFkktUKjTdqdfFJS8EZgScLCgQb9aefsmnXsBs1yBcJAvNuGgunHqPjC",
  "key28": "4Cv5BXTihKtf4sMCc3fXRLeTLEHJU6DDTb49R9rYJ8CXYKZYasu4a3WYGG72Aoyj7V9drmYUXdN2dnQxVLb5FZ1p",
  "key29": "4wJVKhTwa8BihGX76RvQUhUzNamkPWQqi663eQACe7WU5oTya7H7gG3C3u919joXRA83J59FBRLChfTkK3BxsjE1",
  "key30": "4k2rWPVKu5NkqfCfLqypijvAj9gANemzdjL1G2HgAND5hiVMVSKvqdjNBgJRdrgLEvZi5Hfcc2yzeweYSmAc3zin",
  "key31": "K5VayN2c7igysJJqWvAmTbEh321Q5w7wX7Dw5RebQaPXRogdYy1mJYPAbfckjuarv6KbDMoyfqgnCY4abyHme2M",
  "key32": "3LDhNrRpN5sujjFJSHkd9KXDA7akzEVyUi4fSafjtgtZkxpSmNQdUcs56bansnHu1ATMAdeHTJd3HCZkxazZyzAV",
  "key33": "3d3mz6EGhpxKncLHhND3X3131Gc9ZcTD882U8uCMsCxdb7Zd5W73kDUeYf6yc87CQycw4BQ98UU4zRHBsrYJ4nU7",
  "key34": "43g9HsfrxyNVtVeWUc9ves4ksQFa761BaS245ofK63uSn4WAvRqaqkPxWRrG9Rc33XNrQDhLjpWrvN3Gd3NazSto",
  "key35": "4N4578pUdQ3jG6JEYJJ44MeVazUmS5qtRdx9ZS5ww3x4VQ98Cx977JP91u12PPwUPZxcoVhmbC2rqRtRzU7t6mCF",
  "key36": "QvA7EC5Erjzya3dDL15SR3pL18vzzRUxhi2Br7vZyxnUS5KbbTQjbcGDBibV4HEELkeUEoD2NgmvuEMws2myDmj",
  "key37": "3z81duW12u8iMVUNrPfTsrMyw3FTz7RDrAJYUUoZPpWqLrSLFkiwxGacjwfsACchP9gbHaLqpay62TDwhxduFUKp",
  "key38": "4LELkPv26Xeb4Kn6SQciENJhq6YMWPtG7zmE7hxvFUgMXm3B6pM7ZR5RsEcnKffve8483SpKXpckSEkntCXBC4LD",
  "key39": "2XTL98mni6Yr9pPoYTjSHmM3fPfUe6P8Qv6mAt4r5ebvvAhFVWmfHZx49XB3PdRvuVeK3e8gyhXuPjUvdFNbN8h",
  "key40": "5PnYYbQUWa9JgZwPALCgFHgTvshTTYZQL9ic8NhWrKwQfYJDM9jVuuvCUTpbNkjRWc95NXYcusP9u6JnguXwifQM",
  "key41": "3Bcs6gLyufquC5U4DzwCGCztoegaJpLNjd2bkW19qbTxxNuGvGcW38wnxXcoPioJ1GisahQ8u4Azpt2RoYNKm26D",
  "key42": "3wU9oiZxgAZi1gfM89M8JDpXFqisjrCP7sx859U4h7siXigrvJFx6xhRXe6669aQgUYArxQU5jg3T5PjcGWCpEEL",
  "key43": "3XZY3NubPEdCzz2uZUq6KMTK2deiQXTEBCnT5mnTX1KAo3wYJHU7YMtiFDBcBnVG9VuGeWmoCxiAYkDNP7nPSH8N"
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
