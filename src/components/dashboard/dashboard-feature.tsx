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
    "HC9bj4hpYc5rsZDoBdqdH8GPhFCFim3D3E97qLj9MWEQg1hoxNLkc9BCiveKmgiyWvsFHQdT5KQKi2LMw8NxhnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3URj8UyXKndLkdoBX2yzp472HhVtWEzpLXg5s8DFEeWKYzD6ydq3mX8jvL51BsM9KRC6thjfwjcEc1yWS2Sg2LGP",
  "key1": "4gHWiQf2CjZEi6wK3WGP5ux9RrE4mFGWjh5inJQQvPmEHgAMBLj8t4neRnnfkBtq8QytTN8iaqhsVky1y1ZXNATg",
  "key2": "3wKmSru9Vgy3yDkfwcFB9fLN2SZrUTv86Mpj7i2uVzh4qnR3qjEyHPBsaouPP6ZHj1VhXrRJXGczZGmhmdNNMnZd",
  "key3": "3FBDaa8exxQCqsK5x8kNruCaNYahWVRhGt1i34bHyK5Z31RzEc719S5GmATbaePzPz71WWVpTdMZL6VQFPVwhxDV",
  "key4": "38Y2UfyQWm6JKkk864wJ2koao9RJeYebxiQhqHwQRJ6k3E2YqC4TxhB6uA1t84ZH2xta29yY9FrdSKkn8NaCxyVs",
  "key5": "EFDADnXoVFrdviA8QeyXFvekf8xWeXoRnB8ZWMJBP6944uKPk7Jt9aSCYWxAggHg7oq4f6AR5zDFvoCvnMof81U",
  "key6": "4Wqt8unmnsmWXGosoCPJ2e5sxxxw6F7jT8TFu2aFFYQjVtQGeHkMvNiMYZ87RFruFbWgZdziNweMqh7ym364dS8B",
  "key7": "3VjWioft84nFAuAiB4P3gDKi1wJ5G5suBULMYecfiqfkAsPmXN5BYs7skvaCjeTFSdyYQ6PMvKV9RGZ3D8tKAxsc",
  "key8": "4mokZaVtgZF97akJhBG9eE5gzkjJaoSBuGu1zXBMW3s8prPHqd4e2V8KZZtAe9ZB5yJx94nr97Hqkq4f5xKTrApc",
  "key9": "4KEBLL3v7KM9ytUbKddN7Ftzbtp2DEsFn1LV9KxS3eRhNnHXv6BJC1v4qUzsFmWrfv5M4C9J5xqY6Cq9Soqaubjm",
  "key10": "3Ub6pj1pvTzJAidgqEXa3RNxXN9CSdyfxXxcVyTY2BysTWLgqodDV6MY7VSmsdG4pY5718pS5RqgFbhFEi4Wqofb",
  "key11": "4Z6gcR5GpNyyj73eEaDxRCxA6Ki18VMCpGpuLm57Zrin9bHnME8pPonHGZLJEGe8RCUhppJBwNatH8VQcrfxo5G6",
  "key12": "426KSbPUhzPR5vmTmPQWjUHLZLPBc8iW81qm28awV3nN1DRHmFuGJ6hCY8ZmN7ZeNHSJz5BxFzN2cL619jfaSF8m",
  "key13": "3nCPPYm7i92wEatSwXPpSVkRhLcYxi4PnQcDjrFpBEp4XxHBh22VsH9T4qXt7RtReftdSnP4hjVSxcoh2VYiShzA",
  "key14": "DxMR9JqZTeTpr3ZQBugADzbtY2X8K5iuGL3487yHvkpg6wULJ1F4Xk7j7rHB1vPYcSS6AJZjdYvk6b2oMHQjZRb",
  "key15": "vgWzPJwBauKMVf4UT2BYmTdWzQsZGSCYGDnvFw1JGsfGTTHd2CdLuaxuErP28xqb55PfTAR2jtPRFhT95ogtBMW",
  "key16": "5S3eR5AWMD7agGLiRzDEkMukcfYoqNnjHXATmwUZHyxPJSiw9bK2infqx8t6bqNbHYivczuvQEtbjJ9pm6qSedQU",
  "key17": "594U9RvEjQNX8sA7RXw6KEmwjvGn2dJAqnvZjJsRC9tzfbBj6hPZVv11eTFwhmJSwBjaccV3RkEB8zU4auq69Qbg",
  "key18": "4eoQhuoo6wLBgNgG9CER6fvNwxCnSqaEPkcYRP8SxmD117xrg7YA4KQn62ZnwUryCpzdUJatNqSRoogY11cXGBdw",
  "key19": "3hcSPTAfzz9T2Xdvp8YbR53zDVC9NcJ6EWmTQ6ADe7e8goveq14Fo6ZgexmnVAcihWEWJba2qC77Zeu9bjbqaY8v",
  "key20": "5uacrypNU5Eszhz6BvfNfLfGR8i5hsKhmTLC1e2fPTp4736yoMHuXGRpC7YRMQHsVK9Chp5JPctVdVyLZxfkqhh",
  "key21": "4DwVHJGfWWM1HZrk3qy8knCWCpgeRfgqwgVNsZpQDtyJwtuMtAAU28K3pEHbbZY8a9XMffbJvATmPACKBuyJdozT",
  "key22": "3uKPiBTmqLizdFreFSktsfzFNqTDPnnYoNaeaZGx8HLTX8xUj58A9mKDdy1vmi6drZWVvkh33ePdGHpUoLiaWKPM",
  "key23": "2PNvb4L9SdiSBiiCtw6FjHuEktJ8KUKMKsUGcfRibr1rWqV2xY2bCWJTdmQcvZmUs4rJkbKiyWCDzxHFrxtfgst1",
  "key24": "2qPPDDdtw7dQJQAzDEQw7evaQxpXx5ytyorZw5XVX9vN2ZguxkgYuxrpgN4ez6QiELF68rLnukgENA4cdztvEy4q",
  "key25": "3W2wwMjew3oW3a7qgcWQcou7tXHoFB474nwhUgCLqMoDLDikQsN3N2gkAsNt3K1xVn64RUjmBAQzuG3tQqJoGMhQ",
  "key26": "4kugHpr8q7e1JvoZ6m5GY4Tm3srKeUNZfviUAW3GDovisc5u2Qm2FsjjbZWv46hbniHa6xMYGPosh4qgDmnKXiy6",
  "key27": "2hKa4Tcz8G2strKRYum61Ycpy835T7RK23sPLsfNY7pphxfr98FVvaPQEBdtbf1KGjz5RMtYwTMMBtBfS9kVzgU8",
  "key28": "2f3Bufvau8gXhc8GBNtJWpS9nz1n4FRtSKCyAZQ5gdCDdu9FKuCnuVrA2wdUp4MjKdL2HvoSkqajvXBrbxf83HsS",
  "key29": "zaRFn5M32FKqGNmrvWKCNq872Q3QEUJTsB8bwPjaynLL2zabgaPCiBgXAVDRYYroZ4KhVv5RsSPWM946vUKNXpU",
  "key30": "5YMyw4mj33s3x6jSoywZM46qK5MQJn1zeSBkLT4Tnecjax1fBZZLS7C9pQ7jmUHVnjHrUZ6Py9f7fsfcnGCQN6fX",
  "key31": "4jaHaU3Md1tJ9papmTvVFDZ3eRNqVz9qZWzEYPg8Wmnj6Bas8KwYFvEeTQpCLCnT4X6tD48xrhYUKJA3AJ1VMqtb",
  "key32": "4og39buCmEWATwXLSHrF61NjXHoicxi9azQusMGit5mVMWLnVFt7V79supZTM8CH5n2bTdF5t7L5DL99Ema9Ayc5",
  "key33": "5N3uyQ9ddCmB16yfHxLE8uY4se6ExjF2yrog1zkjw7E6BbBAMQ4BqBeRDXz1QkCM1cWV7V3vScYVkMaV3kLXYzNy",
  "key34": "3phbP7jisSezsPvjt4GTRd7JRgKjffH1injig5QN3a7A6hCC86YLPChPB3Drizppgz3Vt3R4LbMDV3jnm8YXPYBz",
  "key35": "3RBW8jZy8XPFjEsnLXxKLkfRsBmB6ecq1VhxXycmUd2eD6FsE9KgkP8ibpKWWwNqYYAik1kN5jAtpt1h6czTshoS",
  "key36": "2bAiWWqU65ELo8f6J4CE99Szzvqse4ELGk2mfW2H5mR89Kqsj1yhoFEz91SxuiVLcpeUcZ3UwS1s34pZcUJuCM1f",
  "key37": "3sJm1jsZ8icCq5arzTHw9yggjmFGZZjwTbpSYfvm39PBgLySVUHyYWkU4tsQoBPMfuPEdCoxGifP2DMTz5NYsTv5",
  "key38": "4QioJJapDNv4ohPHWJjLRu7uwPHHj2j2SCUUPJaPCcxtAPUFFH3H85MnUKtFgHSNKpruxPhuchoCbNTR7YMjmPNJ",
  "key39": "rqrX4BnvQzwBgRrzisREYAqMATXropWcFSiM8jsgHDWqee6B3YqVKvMvohVEffGYcnhMVyhic6T3YVHD2MCBWwd",
  "key40": "3sHmyAV43twSNWgdEuewEPAinLbjYN6LG2qKaVzCkdS6UqYbBj5KsrbSuqtegUeGJrJQV3FpMF142DxLeFGDDVg7",
  "key41": "3zJL241i2QA2DXunUvHnqNSPQeqsqCWZtP9CK8BoCannjyHfEjEiirXLMnYr9nU7kENRBK3v4KSBH99avAW41gLv",
  "key42": "dbbLUq8RhGZ7FryX9bUxBZVYNuVxxaNZJ7vDRinmtFDdhXhH8gA9Pt6KAprCm1baoztgq6mwbuqse1wbaJgzXaH",
  "key43": "8EVoVS8snAjLo6N1QcrsawseKDtrTEUQm8mxbbV3W9mSJJphdXMcUu8x4zCeWW4Me3XJUAgf1biNfn1Fheerjso"
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
