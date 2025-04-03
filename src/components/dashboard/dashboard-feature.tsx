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
    "gsJh253icKMaZfQ8cp32Pv1oGN2wo96ZKaAc8QRLiNQv3nXhWxe3YNPTettoYzTivFrkeN6pBrnck2Ajpz6nDHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B5optmeyz4cynLkvFcPFSf5uLj8WnviP4xF3iADQnu3D922s6TTVDkRuFPkpCybiqnkuo7wBfzQBYwsQ7mYnhb",
  "key1": "32Eu6M7U1xpHnLwbQSDu2dz7m6kd1ruVkqwhjTdX1jnP6GGg4YxB1dZ5yrpuZMXZpQFBo8USnM7xvejcVFjAB75c",
  "key2": "38hF24eeSw3eUKMBwsPHxEqaqrJXiYJFYuhTNR29rkEc3QYdqq7DkqQ4BoCfSWzhro4iJbVe6imEAqwRibK6ieVz",
  "key3": "4bBxPgtVe8xhxhHPp5NAg4vAZWwbeYbSZ1RQxh2AGfqNaMA2PYvdy6bAHqRBZWGgRgch8eyMCwqniULB1MmnXVux",
  "key4": "5KfjnzSqCV4h1Yao6Dr7SSd9JqmkECtzYkodMyr94eETjX51RUZ9PhoWbmbvYL7purMyJdkwPY4LhcrnvbgHD3WP",
  "key5": "3omfaFwmcc3qy4ZeiVTBnqSkyrhETHTWqAynVgji7acmjPqqrNtWoPr7gj9EN2QYMYgYS6kcuQGKcmdfAfo7tDWo",
  "key6": "4pNGFT5K19RuAkSjHsFYY4bZpnDmUQ9KFhXirqtg22jTK55cnG75iAhN5grtGGZKT9gpvT1yCSQrV4edpDsEhK38",
  "key7": "3gdZC5iwdEABprH9AskFPy85eRFf9qbTWhQsYp9NzHVLMpVjGzSNq7wJgwRrSU1ggdwNv9dKLyrzcntC2kG69fkq",
  "key8": "2dcFcz6jqKCsGD7ftWm2mJUV2uVqzVyt8Js6fCtu1VpPQCVZ4D7vkP2V2XGdbKBG4TewCKxY5r2MJ2MYy6UTQVu3",
  "key9": "4NttXf6ytu86qHNj3aWuD5P64zjcbGJbtK18dVTfoKWJaHPP2KDS6VBVdcVJciYMsweJynVg1BYXACZ91ByE59MJ",
  "key10": "GXggggPcte4pAWehvLh6wVvPWDC9vWAksRizAT48UZeiyMiEcv1h9uqAeCemYR217iNiRRT7KQPwsVffPRKDVVY",
  "key11": "srM9Eho4u3jdk1MJiH9kJqiLHvvcCmses2a7qwrexgWPz1VHxnjaswWhRRwYEkYdJiVt3oPEvicj5v3jEUZvVGe",
  "key12": "5Gm33JkEFtahKRa7NP1m2fTH6nny7u1Fg9LAnCKRTHEh6g454m3RV7NnsK3yZk1NuLEHmDPp4J9C4yLQVbntuCcg",
  "key13": "3oyutNyapt713iEQ2yA87RBwzcsDpMpunaAR1LSuSmsLhneuhgx2BHwZ1cMR4d3n1DE455AuFaymHnz27ai9mqBd",
  "key14": "5BLyGPXWNYZ4dJ7QEHmoyeqqK3qanu7jzqXM8dnxrENB6ViGRgBhj4J8hBHdPdngGSyF3f58wJ8mu79eLAv4n784",
  "key15": "3Ua2Mh4CaV3MACMW1KDD3cY8v6MS1WiZrN3DgRzGb52iz635xfjoXsxGwL31GF8Hwz5jPG9YiC9m5TxLgAXgxWdK",
  "key16": "3GAgFNPv7ZtPSiJQpZNEje8xaW2fyS9ETmL974XMaCqswTSsYQUtnE2EE8zp27s4zokNJChE3W16J8TL5YhwAQfm",
  "key17": "3REZJLuFxwi4iQ95HNoxVwdcq3XMywGQfABpU8Zy8UBnhN5J4R9Hk18NZCbu6FUoeBhafCtJTFNRJLnN9tDFt3vE",
  "key18": "2UsWjNGLXvcCZdv9g93LKeZqgFy4ZwFsxsFKvHwyT8NXeGfcDzP7tBe9uxWZTPb3yuBjF2dtFapNZdATPoYDVb6D",
  "key19": "3m7JN6fTPqmpN3QHCpjiFMPqB1bnoBqbga715kwPgAjNEcmVRu5diuBgYX6wRspf7JTaRa2Fap2NxsGfj4stTDqt",
  "key20": "28628cTcHPNeiNvgzaA15cd9zSr1icLVVJArUwQjQ6vXCeUa1P6jM7HxAsvuocws81mkao4VECWKLEHAWfZjZFMP",
  "key21": "55PSPgvwgzSpCE9SEbJwChaetSp7hbStDmDaMatHW1sb6wRi2dPFGjFoHyLy4fDonpyUSuErdRLX6oaevuFPqVfm",
  "key22": "2gTzBkSLswsPaUrVqc6dNWRqb9jep7JVk4MuvkkgbNhFYLEzJKkeebztDPmdQGpfaCtDLRfJVJEhVsCHDpUw9kZh",
  "key23": "3itfRc538kVkwo1vV4Y8wJqJvnx7VXsZ1qgVdHaH7f3YEvxL3JwbjavN9i82vaWN4WGPowSx89xoA8cXguE2ZsMJ",
  "key24": "3Rk1hvPzYsL2svtnhMztmBndMvnxsupdzjJ1WhcacaLqA2h2v92jB5UuueVTn8w5s3ALzbpfJgUhy9KYoUcDcYSF",
  "key25": "3pk5fDFJSWcWgzuuvpqh6DceDa45hkhsjfMwZDFa77HTkxsGwDJmD9y8R4pK94EZMQyE58rMyFxtrXGCCpatqhn2",
  "key26": "B8ZGfD7YnVdG8emHR59nBSukFWRXVoJmcbjaufZofKCkfeMLndBxL2FtrtXbTUhknpkFYwhE13drfQ5Riubty1t",
  "key27": "63QkWc3Fhmj5F1MeBteBLqeqVU3vEyMj1gPxTyPx2fk4rX2bDa64XeSmqVXNiUkjyB8bACEeRyrGCa1Nhb9j3id9",
  "key28": "X3etRKppuikYb6SHWbDedZLrUNZPJm321i6Tg8RJuoFBw5kA54TWgsrwbSt85VbkQxTsc6iXK1rHb7uVK6g5nRo",
  "key29": "4CYWWtoDudv5YyX51cqiHNRyny1b1rJRYH4HHbYEobpLLWE9BfoR636ePBZniWdoeVWF9GZ18MAazWmEHkio9ivc",
  "key30": "2gs4oCwQxhFyxRW968e13Nd3u3GVYqA89RzJfqFjtuqwGTvJoireXq3nwqxTBZU2Mu1sHwNxa9V9ubjx43pCxJhe",
  "key31": "4xPApk2Y3VCtX5BMkPf76Vk11muU9ZXmBSn9qfp8Jrd3jT4zCD1EH31p4ZNv6iNpfS3yxy7MwKiyLo4PHeQ4tTu9",
  "key32": "3m2rzitV3aSEVA5SiYURXDR8wUHbyrUK8W4e5dNwp7XpkjEKDrrtp3VRu4PWRrtUqu5YPWTE232gEC26mjnfZPUg",
  "key33": "3mjb3bkBLbrEZcdLc4YVF3xRAMmGAea1tNRAxM31QAKH8yPjBEi5xhpeWNJyYVKF5Uq55mxQiS8wE6FLF6m1ewi8",
  "key34": "3hUhzfZKYPf5hpVAYdRKco81nXojGpkmc8DPWgSuR7GRp3DyKQG8Wtj2g8kA43K8oK1ZSh67F5n6wDqHowR3tp7u",
  "key35": "4SjXvdbqicPRVrcTNZigxCjmiXuMPiVvz9XDRpFQ3Vf5khspfQnCnp51JxjCgjox6HP9m3vA63YWaRdDGSowDQBf",
  "key36": "4CvqcgNh9rGQMJCf8CQeSkPjovgBqG7n5aLsrx5jLZr3C7QoouhZ1rANkDHvzCjTKvyynViZ6ctcBHarKb1nFAP4",
  "key37": "42uTY77JV3pGmynpqaF5Zy3q1PGdQFYGEcb9dMWdPkZNwmV1fo8YV3jFR946ACJRvRri1zfgyuHP2KBqpKtwwkVV",
  "key38": "4T9J5nZkrecCiGQp499i3hsV5N2QEWJLVtczV3BQFdDTszBzg8dijqYyWZUh2GidvZP47v3yfYyVu2h2s6eFynEv",
  "key39": "2vZK3yzVNvm2zYwXsYd8v2cTrtPLwYj4A8AuYhp1ccyscFBff6Z1x3y6KrJbD6vB7ym1asTwXotWfDUrKRZTVcdG",
  "key40": "5scpVcq63XfsMBy4i8XNKUPy1XY6eE5nCzbbeQkSUcSpS8pXPVuFvVYanv9jbZ8cMGEB2LQiTYwazS4NmfNstCo7",
  "key41": "2rzhNE8YB4FBH5QY45i5oEwaXKP3WiTayAYPyad8dApEgMgjQxVmVdqJAPZzJpiSTypEDJzeArqurPRd7RnNecJo",
  "key42": "Jy9WCQ1ENnzbTfQYpk26bqXhNnVbz4JMuaqzrEWJGBwNfRswoxPnp4nEurWxziM6yZfqHFGEHnvKSQXBXnAHxWd",
  "key43": "zer5fHTHqXS7iZHnZkZJZed8qRNz7EdWiAMrWWPcE3rtB9QksRV1cwYGGEXXTwW34bHrFFJrhBHGwTZwLpGtJuP",
  "key44": "k5itP4AW7jvbvKosqnFzCWQB3vSacJU6CFDRZQwdgZ8vdPhxa1unB3m9amwciCysYTfuyRrWZBfPsPdZ2iaVdh9",
  "key45": "3v67eu8gxPKMCGp3Lk8z9uTEAEbfKnA3u6YCJFVLopvDjaJVBP5hnXFXkXV13NAHXkEoQKBSMroapzp8RMaU5Qie",
  "key46": "4am7HFLgAtFNY2Q5tCpWL8CA9qejzZrpvRHpb5DdLT8dPRqSpUVXGMNHXZJgrNtYDXrm3819EYhFs18qhmWBjWd3",
  "key47": "5ivXJ7vFt21qRC9NeofPg4GGxHctxAfbNL4QxT1VSHnpi85x7YHD5h4DDST5Bz4o5qwDyH3W5wEhoYL97NVQS7KY"
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
