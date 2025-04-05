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
    "3DJZ7L8DFQ264TRqtYagTiwR6CtN8jgF615gNEYZyxcZjUdTsJFbvYqyuusMecg4xWAFbgypd8zdUTN99ZAxFy1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XWocbHyCYEE5X9XWV33sNN2HGiMvrntF8Qvj5Qa8eCe6QyQTNnXWtJFEFUXkAunWFvPkBQXM8VGefjwwxjvJBaG",
  "key1": "4QhAMm3dpdbErRHw8kAr2bSB8ssgbcgZ1hZq8NxDkah5Lr5GKn63wcZTs5uEPzsqB4kDKDnXDa9DXeXyQQEYsm8P",
  "key2": "2ELHbd3714XuNfQofM6DJkADtMZeEXNyfqkgvN5XtCBqr9HSH29KmgGcxatWsH7eTTxKL7avyuyhyw4Px49aMj4z",
  "key3": "2rUVgWC9BPcoeCgQEtgRPKsHQbS1UTSLyPs1pMXAH95V2Ho8a3uyufZxTZY53jKr3ZAgk8ChfinVCcBDMpgWeZb3",
  "key4": "2D1SDtvdLHY6TirV7Ucw7T1deqwytUrRsrbFqGhNoGfZGvC5GLargoKRDkC3dYL5VdkTRXRpo874N5xGvs3V3hjk",
  "key5": "29mzfbSGY5HCufeTtyEHUUQu69iPXowqz9zTsaezfuSfiHDg3H2uaYFdwx5ik4gc8enjtwrWbRLvsi4FF6Jnmg2o",
  "key6": "jQ2Xpv24FD3AMVW1XQ9vR61aJEop5MPmSxPkUc5Zb6EiBkZT7BRHXGScpNMr3XVfEPHEcfuUuHkZmQSVixfh3Vz",
  "key7": "2rWyfMueMomKqCEqa8ChSadpwTaBbH3keezDLWmCPdUanG3VgA93YJ3ZuBzNFsvnBr4i38s44FWwgHnFt3QTgGPh",
  "key8": "1235znUvX31gmuz2gGRcMLt4fcnyS4F6Z3CLDH94UjFZZp3gz922y1PQ23UybdmSUYPqrFJ8v628uaPCSyXjF2Dq",
  "key9": "22E1JzFBdqDKEX4WzvSBZExdc3qKgKQjib7iDeFw7akyma28yQX1N5AcGiNssMMJicudLFT8eCVGMm2C9ovQVNay",
  "key10": "4xva8tzDhsiVvL5dJGFyAeTcQq1kzjHQaY7ehvscA3iHko9X34bhbTUMyi6vwpWouXGbJQPVo6QpyFRFRZ8bBQLB",
  "key11": "4yy2n9KbBcdxuWASbWKNRSyCRVL9yx3ZB1i4zauKJGnoqmir8PUgAtuXpSzRx3ZUsKCe2YwEtBvnV1MvUT5v7Vyv",
  "key12": "54niMC11rVRTa1nfkvtDetTKSgPqwb27Tf7YuTyC6Q6tCpeWpUUedKL6F2cXjbzs63sgvm72vSivb5k9E3bvscLN",
  "key13": "2ym7TUjF9yuLJYoXUBzUEvX7ZKDV72i16Ne1H9tCWe8wDp4AKdJDRnTo6jnH1e4omti9gQYdGPnuN2C9EPzx36NY",
  "key14": "Rv3bmicDi9Pn5nhhgsa1TDV1jsnJzYK6gZfKS3Vu1DSQHVypPG6T1emtfXv2XcAJKoNjr4XJR95NRroLHCAR4CK",
  "key15": "5W6Sr1LDZiBJFTbT4gWqaKNpxSDAnNpUgaEdreKuAYuv6UL8tMJoZqAMNfGH1a6w3naM817xmDYVs6i56EzrJ8ac",
  "key16": "4RmEtteQkjDevd2qC9tfDWinWtK6rhMYsydRdV1Pp7HnwjreNYPiNdGLtxK79ExPorNAjP53fnhdPxETfo6WnJNS",
  "key17": "Ueh9v2qC88MeeGQFuwBFZJ2wSjdraQ3dQcc4wVtwzFJ3PVZRknSYQguHtxecBbXei3cAXm8utdQoqTosQBXiLW5",
  "key18": "26BHv9Ei2akUH3qwBBC1LnqdtHftD1662HWZidWtKu8wHD9EzK7SASSZ1jfLuE83YVaT65gTChh4YJfg7q4q6djo",
  "key19": "Q9evUbQHuPL4Www78tP3qngAH9FLVa6AWhSYFRVbhyyyx6AMFWQ8oUazY5i4akuiF5GN3wAv27Eus1NAZDara5t",
  "key20": "d9Ajko5amfBVuQTPxDZpjypaSuQiaeb5y1kBSsQS3C1J2Hm2hH8DNEUcry9dtuQPqHskWeZvfusTicKBNb9fx7P",
  "key21": "4gs3WknCqzME4q6UdH9iAT7Cpz4MAXJK6pErdPnAXs6hxnC2ofDUfSi41KeH4pBWJqmHtSuDHEjpUFW6yzDcKTC3",
  "key22": "Fx1YecugZjBexDjNNQNT4YLtEEULJY9Tdc7uQUuZeYXocnQT4B4fidvRSrx6WxE72EhiUsSPjJyKjZnz25U5iyA",
  "key23": "3x7DC15n9DZYfDSt3yCTdBmv75ta5x4EVwXQQ6JboiRA9VJQgd6zxmcTjgbCg2XcBxPCbPXewvDjVybkpPUVF2xy",
  "key24": "5ptZdVRJgdV9emN9K3Hqf2KWttdYxZbwgVUUpvjLRkogsaSEmzHLwN1RYQfzE9uXTa9vEP9EhzU7dCu3dJSzyHGy",
  "key25": "H1mp1Tfa7kt91kqF3cunhHg1UntEW7FMfnKdvhao1QpKwLkk3n7o6DrE1tJKCqXt5LcvpceLL6tGwFS7pESpbQV",
  "key26": "ghiitifxYKor1aqKpjC2QvnefKHoP2jJoAn8fxFZtGg5MSPTtFyexxMUY94ihzLawU1QzvihrAxkxAN2SyA8CcT",
  "key27": "2JuVVzHkEN8TQmKWJ99JP2ev3ugPLPkeLMrcVzFNSBWZf5PjV92C3VLmb5hHmD5ms4XJVbKNtMW47jMqvrfYWLTw",
  "key28": "AWXqC1f8LXf6HwUg86oYifTysD1ae3FGTM1YcshTnmwNsNedhaA1R9CgK6xUmJ9AufAL8YgzdiZCrYAGtsouLqv",
  "key29": "58RWwkKx5XGJ9k8v7bTYoxUju9g42HPn58K8PaJHxbdWGkb1epEDWneVdisHcqL35RsEGfrqjNMjHpmJbWyiD1Q2",
  "key30": "5XkexvpHNoSAB1nrMR4CKsLcXzwGdpxziBpZtmEpELHHQquvy6RBTFY7F3vkoPCXZDE3nyVZg1EjhXkchuVDShau",
  "key31": "5fQgGVSHhWr5wjVSz8wzCUy53Uqq8Ae8sGwUHP8qYHQSAUv7fY8DfdutqBbiKmJZwinE1XqyEssPJh9Lx9TfeT1x",
  "key32": "3WBRps6dbHAwcWJVotUSUuNb94GhuEM3ubLByEK3MJL89gWd3DmurCjvKJG4Ph6Zn5kq2YGCDgBqxghzsT79e6Hx",
  "key33": "4EHwDHWQ1KxpKsoTgBB2hrwemScDWkcxFy6bdbTHDFhUbvTvzqZh9fXSawZj19eEWycd9ZYn1RkPBbrpSYsWzcSR",
  "key34": "5mgyBS5EZcFHRS1s126LxTf3dfdZbQtSAkUWV3GhunMXseh3vjzoEhzC3rAuDQ4UA7Go83fMRXYKeF4d6bH4LJrq",
  "key35": "45GLNFbZb9PAxUrb7ymxddZaX3AMeNEoPVxQ5UozK5NbDX7zLS2emQdMJEkvMVAHcwJWCfRbnFuddLVfEhNeQEx5",
  "key36": "5JPxMLBVsXMr2JeCj5idXpg9z85FwzX8zxBQrhNhf4H6nokKzqqiw4hGQG2S6Fj4wYGn58fGSrm8exBEkZL2fGkh",
  "key37": "4dhpoeoyYHGRHiGYLmRwF8G5m6vR9ubMBNR5YSKKBJAdoGbbha18N6VZHYMKPcGApgQyuMkKBpkNWDERVpF65TWm",
  "key38": "5jpvoGmBAeeMkN5zYtR6qpB63JKf1N1uR7W8RqdB6xnHKMU62Jc8BVbz7qmyt8Hc7kiEqfEQFxLf6P7WHL5DWeUJ",
  "key39": "3cGPGdAJ4jBRwrNY86RDu7T8ePESHMTdYV6q9KFaukeWZKdeZA3j6y131E8MFiDRQEL6SudcFBLCCi8tJ6Ce27UG",
  "key40": "3ons9Mi1P3YAUp9LCz4ALETavS2yDbzMECtSjMEoZg7CvXCJ2PvfB8iLvVnCn1biTcbXvne1RFEYkDHtzqbhjFLB"
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
