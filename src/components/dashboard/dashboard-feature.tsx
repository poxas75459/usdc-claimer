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
    "2NGyCty2hChyRVLqM66rmckjcFKndBDkhy2mPsVeaKKvjvadCJAvd8j8U6wvoCqhHtBkbqEq7S4EhTSzu5DErBpw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hT4JwVJcumepPuUArUeKx7Fjo5TpByuJgcNb3WPk68CT1wXDiC3eziCyEQYs7QnQELCRTxDfrnUQeonPFnYd2di",
  "key1": "3DBptAYuYboj3WNpTKYMouH8KfjYckHcWPvTdMUaKMHB2fwXsUmsv3uKrAfmefoDSWYduy2tu238YzmnnXEKyt34",
  "key2": "2XyXcfynQ1wEd3891y69H3BN49PNGhHV5UMNx4JCYGxuVZnScNf5xmTqySgxB1amQeSt1VwwYK34Gvtzpv82Lx4s",
  "key3": "3B8ymnWXFf2QwzWPgiwgsHUg9cJ2tNPbKXjhB5appxoWZ21aNDp4u8o3hosHGSeL6Tcfnqrt21PfKXSker9LNyPy",
  "key4": "3CFR34xcyQGwcwtVAiVebfxt3g8E9uBPydKhuyMwVKUsvwuZ4iedPqYudg2LwA7EyrwGcBybXZ58paQomkxbJkxq",
  "key5": "24mGvQGvL6rp96kP3dfWEiFqcUNzVTYLr27QToNfgyY2M1fWke5BuZnkhsNfk4VuFx4ZkvAC7ebDrNknoJbLrXYL",
  "key6": "5XQdCTYJiM9EhMkDXRqinLFpiNjTYaoK99NoTgk9maXkobQFmN3PNG2mnYyoGGjWFXixeWr2UoPEit7QBpqCAGAX",
  "key7": "4nqLvh5f9oeLg55pE6GzW6YRUMHkwtrytof3jgbTRqr3FNkhG1FyGjmosiYttw5x2MDCWfuzZk1EobsbZxaZuYzH",
  "key8": "41i9MyT2ZH7eaG7spRzRztasSGC46CW7yZxEbMickrV2C9BAbp8zxtnGnJuDjB45kbiBVeGBpL13kvzyVtgExYJH",
  "key9": "2PpFmvd2AFETtkVWCE8TPjZndnak4rwGYrDGHyzHnMvFwC2PQcovT3sCXuZTh8kNkYQM24bturCQoLYoSPrybEPb",
  "key10": "5xT1oi2BiGSMSd67rhtDV5SqZiW39ENMudkm8F4KEN56tVNpjdZuVXQXX6znfaRVjLgEULcwCuHDTUzkkwJhQqeh",
  "key11": "5MqbAuSbAFZ7XmDWT9zMpxdgqMtihG6WQVRo81KHH5WhLJJYbzZJu7f5kZTzjJyPJaWrGAm675NWUkQTHqapkvDd",
  "key12": "5HgPaCYiGZ2wUvgNshkPmD8JVAfH6ikhS5QQ7KymDbhEUG35vngm9q5gSSUtR84PQfwwck6bkNex85To2beq8sum",
  "key13": "t1sE2Lgq76UAo4kHnBhCBVpJJG8gYWwLdR3wQ18sDGFhERFLxjmoLTN2qvML3R9T35DpRpRdabomPryki3wuhcd",
  "key14": "5WxTRiAvhEccPcrmTt9eELrx6K5ze7YHTSJ1b5EbqLZyJoFHXWW41MnxMnUX8dfrGs6N3uF34C1QpoXoKs2dyxmd",
  "key15": "3KXMfbUN1ejzvPWu3eHHFyHce2ZEeTxHQXFnJJN1tKAp1Eg8cSNq16ey6eBUjTTgNVuREaiC4VXRBR18ta1ncaHt",
  "key16": "3L6q6XJNhrAMqqLRLKr8fqwsn2iiSvfmYvZqPwXNx5J1YLGErTQMsAy1iGGTJm8ekAdZuKLF1L9xg7RGmb1iaSx8",
  "key17": "3qFky9bDGBjr46DQeNhaGRtJnyqaGdLycktVwUbWa8qwVYYXLuvpT5eCRXckB6n7w3ByVUXUjgX84Ht1CMRsPe3V",
  "key18": "2E7234fwbeWm9pC5X67nUQDYTnwnzx6K9yjJJnB66a2fDKvpabEW8PB96VimRrCZ5wverbZa4Xkt9jQEw97cGYMS",
  "key19": "3yHGKWAcrximNpyJt2WsGFyPC58mdsgVHiHWGG2P6fw3AS47en3bPiVh2HTqTv5Ww1D7krsRdQYZimYUpivKgjyr",
  "key20": "2FVaGj7UVjMFAMZ6wXsSwFrUzNrkUq1oUiHcezNBWWpRS46qS3rnq43zVnhXyt3MUBBYqKs7B5CCJwPLaX4yEUjG",
  "key21": "2osRHksj1UhbU5WjiqaxTY2pDfvBjm5LBMg4CvSoNRY897B9soaFYvM15RwTZLPuMGiP6rNyW7W4A4BD6FFE4xyf",
  "key22": "6WTr1YE8oaEXD8djoqnhAxpzHin5y5SimfEwLmVbZi6WXzuocqbK3eXLWPhNotyEgHqxFuXqV3Eb3krv9RjwQQC",
  "key23": "5xXaWTSVeZ91nadsqVgQMgTasjVgsuy1Rj2qGyxdiZNBP2tsLauGXXvvJoyFuwg8q6XHw1DJo4qabdJphUo17N8C",
  "key24": "5pRKDUcP1UNMwTdADz3k4BTrxYQem9SHsi6LkAxgqvzXQQCWwUcJNroAoGVprv8pJcGXExfh3VG57urDv863TB11",
  "key25": "5qmPAFX9YbgSLX1kP9UuQxk6B7dLSxLHhByPTY3cw3rpYT3YTPF9xeHooodjM75jNVYCgZEj1ByNSr4dsz2jEjpX",
  "key26": "5vZk7ajQPMufme8MdiEQki38iwPmEXC7tEfgwAKbPbC5sbrGovoVfVMPKXz29nkKo5Vub6kRZ241vR5PNygZSQfj",
  "key27": "3fExD4CLeh9DCpaoV9YoovVVizRSqBAqMFvFFDeUEcut77DidtjbLpKC3FnewS9A8ZLs5PHYfKeNwUQk6aqiNTeV",
  "key28": "3LvDRMx1QCMQA1CG9nxKBgZyYR6j5KoZsHtABXEv75rfyQ1eEGvTWYbJixacCbA4UCkicjaRdxpWDf5HJUC3CtWt",
  "key29": "3C998gUXpDMgjTEC8H4cMYWZ68Zb6bZ6aP8zxF92x2h7Zhw1WkN3UR89XZrqrRrGz9yijt5qRrFrhXRy4yFebNdW",
  "key30": "5gJUbgthvbiq7DbPT6hp2xwc7cf91VSzvzhEXKSfgQn68NhDECbD86C7FC7QDjNvi14vsAnuoKbiwyoXucNEfsUE",
  "key31": "Csnh1u6HC7qKtg5gmG3WNiUBHgrqZKTFTfFjnjGaBX34RLRBkZo48Hk2y42N2x4V6b2aJA9T29UC9sGyKRYgwkX",
  "key32": "3nEc37mw5v2X9tuepqfBs4XuUDgGuo3Li2584tNsGmR6UADa3ZcuqPLRw1U5cjBpoTFVqWqaRi2qLdwsXmpirk2a",
  "key33": "f5eMacrUQSkwT4f8BAkjfpb1RkRjFSq1kdgbmK89rqqNhVnGUd8s8REU1YNEY8DBjPjZPSd6UJQvB9XAvcpWP91",
  "key34": "5CczkN4WnhGSE77dov7ogtamzbibbPiC5hkjpnzDbbGrKRY6hRkFQtS78sqw5DMB6cv2iPdDgLbAe3q9UnM7kcfi",
  "key35": "e7DVVxHiyZgjLjeHF6SFB8gboi8k8CG2wEBgnvDXUHqNEmvCFiX9kgYFXpquoPn5ZivH65EVx1iu4bo5M76nbi9",
  "key36": "nYnHkUoEExTBUyrasvk9KQxMB218cGqN5p7Qmb6Zuba3PNMGVVXZmcSG1QPPwrbDhB18r2LnWTXQbf8xscVFNU9",
  "key37": "3CoVcbyMWw3rs5oXJkYxdbj8xcgjcjsn2Pn6wiEGCemMpR8HMXUKdk1NRHVodSDejmnxHvsRYMfLS9fohozyDjUV",
  "key38": "61jbML5mH2hNgnxvVbY4kuKvtmC9hCQMvwKAZbK6kKJdgoqWP8ymiBkfgcnGrbpcFP5TtwxYSLcfBMoNZfRPQjbV",
  "key39": "4tPRkUbaXbMeb7qscC83q5f6JrYGj8pS3yu21tcRMvhLjwgiunWhkYw6HiRbYkjfM1yiC8SLnUJ1wo8WRCDhm4gu",
  "key40": "2MmkTAc5Kj2Ui9zXzHQBGBaEutVeKs9UfRb3mw9hLpVzwE3uU29bgwrro8ghZcaS4dVCBSqyQ5EXDQQcMZreenVE",
  "key41": "4EaAC4G9e3FEbBXYacjbVdgiyAyHjnYGFsYKsUY4RCcWguTdC2qXf6DPe1ELB5u52u3MNEopiECvXyhYxcB7vg9B",
  "key42": "5aF1psuhBqTu57qYtxrkuHqVp2DJr1NJd5xt1HpRPLnxQNDhGn673v8vHiL2Q7t4bBvaese98LFZY9xKfPeEUcPq",
  "key43": "5hT5APJ9xPYMQEuiLeKTCi9CG29vXGf9wWwcF1E5WiGzswSfp5Tsr1iazi3ZH39iUwtBeee3KjNfRqB8rDfXWTnZ",
  "key44": "2LKEUTMRKZ4ZSxuWW5Db1mDe294Lix4b3y8ufXFEyC6QjvLCfXynQ3PHkW1rbFe5pNoHkU5uZSeGF7tfPYGFDRxY",
  "key45": "nS9LdKbPxV6BPUz7mxZ4iY1uKf6sQFQudKzKEN3EhbdySR3JrXh9MqZ9YXbtVQpB5WL7NgiNMnYPJTQscTzd2xd",
  "key46": "4iv61VEqNVUExrbQVCZKxwbWyXKESPPWE7jt8uGFxWw8BZNQMZzyZmp6GVaHyvz7HZbygEYXqt5iRFh1gESaY1yY",
  "key47": "2VqZvumrQKSrRbQgMq5kKDDzupxi9oqFgchPXn2XYbCr8zEjNGQ9jkfGUvcHbJYVTZLH3UHdRAcmvHYh1nwyq7gT",
  "key48": "5Gnoemb9bySokEuUnuxJHBZawTSpSnkUU7AxLm3GvxGECFDbwYVCxKqWcc4k5bqFKggm3u8ZHVarVUZSXo2m6dcy"
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
