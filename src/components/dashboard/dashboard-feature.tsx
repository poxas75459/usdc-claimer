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
    "2cUtVRG8GnexLLSa6rCp6G1ajaaNS8NKC8zq8P4fYx81Y7SSSNfxJM9ryp165MNDgp8UjUj43cFDZxX7MsNDooV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aGYvtYUdFB1noqw7BPEwQyzT2dr4rZ2LY8uFMqkfVkKo46wrv5Mxin4eZ9p29UMcLtBXw7VtD2i4XYPPCbMAU6Y",
  "key1": "tKTZHqNgpyw2j3Dc3SEZGuwrWYJVi4Q7Z78Pgh4eZ2HcECpspxontR5eR4Y7X8ysitERxdsR1GFXyMowMiqxa1V",
  "key2": "2wueWw5BGNDDaCUftKMgmDpXVPYmNY7wz1WyfFS5uMYtcSJoaxqJWSGqn8KQdWZ5kMaAdsabp9EpB6W9ifXKDbkh",
  "key3": "5H7hvEvCFZuxfQ5awzGs1xcnPTAEVXrtihbtSxW15UGTiQi8cR15rLTXs4D6ukthBUm3WusmCfWfR87EJvugH9cx",
  "key4": "2Nxhkw5mhu4K3Qh8VWDYR6KcYdmcpoF1QM7LDxcFcbQSCuVphdCGWDPeJYP9jDUixt7SEmcXjox3riTqTPiYxdhA",
  "key5": "2hGZZvrCDStwd1cz98zhkcpMVdUtCQgQFaKNSrP6ozZsSToVQ2pcQ24fUNXNdkxCVZjzSyBPn4Qzchd9qCzFubHm",
  "key6": "5nnkvLtbQCMy54ocmeS7FJjCqnkhBnGqbnWqVfMyvu877BjVMCMJkfaN53JZUsjEMQ6nExJCbbXRosYpSdekX64Z",
  "key7": "5PJ5ukvSPLb2xA6Ue4snFvjPSJC38zXJQmL8PeAptAbwZm2d9y4s9TLsggomBq5irmGiRNq35qJMRa7v5cy6vvDA",
  "key8": "5SxdnbX1kLhiYcVBTBx7mbDzvZ7EJgwsMcdpEwn95iFQyVL8hKVarBwYfdkt6uUKfqgC1sqvR7fd4oYySztySuYf",
  "key9": "2YeusHnXKVDYzrHHeyzPQgpkbHanpRtYeyokG5t5k762e2StALPmyT37VV4VNG8AWaRYnMQmKgKV6Uypx3nWf3Qb",
  "key10": "q5YnpBwTYxNz7Seb1X6NDEjBJBrNseLoT1S3GZfUXQvdL9GNLX19ici9DU6etmnD7tSfseEfEQHbP6Ld6zKEoC3",
  "key11": "5TYitAGDYDf7dtuAvPckAwt7HYwZMHqgPsJFoBb1R2MJZKk93PMPeot2ArHPvFJydDHzcw2W5EpjTRktkLyPtH4G",
  "key12": "5tbJAh3cYWvtA7hJVjUUfijS3g3FA8Qrp6bej8DpPgvGtnnungXVMUmLMunwiH9s6CQEddPP838UjLFBhvwaodXN",
  "key13": "T4Zjz5rFPEc9RYPUenTHDXjyriDWSYiAKheAvJEn8DTmr1rUZJoMtWwmCgNNuWqviDXMswVeYbqPeKoj9PCEyWw",
  "key14": "4BWxwHZXmSs2LgrwdrxemtVP6crxX616sSFPK1dGJbeMun1q4GRAcH83LXFXTNNRgttvh9HrgwB6FLuQBw2yzwf8",
  "key15": "4E9vHF3ADdnifcZViiUd16hmPfwRUGDYzNxbhgWZTF1Cy2BCUEwGtBT3L2X7Zok6dUHXeyjr39W4kruZ3fNt9HVk",
  "key16": "Vkyqifwt6cxshANTKdTPPDrXryTeXnV8BfbpQBATMxRWn4TLmgWUtJCNekBqPDwzU91zEeq6qvxL2jD9SGU2owm",
  "key17": "5yFfGEDd6pJdDQmwJ6LG9rkQ1H96pZYQVTXJB62dbBqC21NQEcNtGtGoenrx6fhgX9zaB3t5vXRqMzFQTvBSYP1Z",
  "key18": "5nKFqA5nwBu8Q6hvmohvhkPrPrPymNUSHHsetTT9SrB17eK1AXa7jtWqdLErDJ8RiHTH3JDvWZNR28tF7ygC48nK",
  "key19": "4Fk75xCfWfFxUc8uVDX8VsXBD27aALAgmYbuQ7DoZVfntpB7rFjhoSSzLzyL3Yup9nxsUQUqrXPyGy3jfePMtndP",
  "key20": "vKDCAjpAkMTWpDA6c7jMG9khCgydBHYbEL92STko4kn55JuckqEiav56sQJkFjm9KzrCrJsYJcqHx3a5fjuq4Wy",
  "key21": "2983DBmmRbY1Zg1QWvpDLQv36fWjTJjdNLsz87iZ76mF7DSWL4tJo3oA7xU5ZYyKCXsqom3yw9USkSgUUjk5TGg4",
  "key22": "63k1y4WqjGU864WX8BNpC7WPUB9dVkdwdKdCkd7Hgu7mwo1hFkETsFkotNos7u3bahAG6bX93hzuYCrwMQ6RMksg",
  "key23": "4KQYGgGDV4tiqt3XsjZM6hKGVLe6PcBLNqXvXc5Yk5CkkD7sroN5G6M4xaqUEUtrN8vsdSr7WyVCBsZXS5PtC3pE",
  "key24": "27Ej1WwfYBx9HtPXvpwammDtWLxKRaAZvvrxPTSuEYhHvqG3EQdwPuKAXBNKFz7psfZcxh3WUBXR4kNf2zsKNpGR",
  "key25": "4yWuLtvz9Guv8pJMnkcsMk6ZwSkddSM5B4KPYLN9sA6DvYCXbNbK1FsJ8h3zCxrKY47kdBQu3eJ274xfRzKEjBSw",
  "key26": "1BCmS7U3prEa6TgLixReJFzXCtHpbzPiuqKM8fUJ5dkofjSoy8VXNSf2UqvQsQRWYUN2BkqPop1z3j6AjbRTGjs",
  "key27": "2fTUEr96zLR43r5KC1e9SXuCSKZeiYGMaSrPhGE5ZGwZtwVkhRgE2ZqvBmPSYSepnWZ7vJKX7MCUZZWerkZkdinb",
  "key28": "3VLsYCnQ5nHkFtmh5mehwEw6F5Apvm48JzFk8tzasPoDWDE36oJ85fHJdc79RbuT5c4UEJukbYQnH6guXnavQWe2",
  "key29": "2g6GTTv4TfsHtQKgX7Yd5cFCijzcebpvuxCQYHnf2pkE6GWnX6h3FgbYKNYakGcHmgD1kvJeg9xXuuHo6iFtJY7G",
  "key30": "62czwp4o5QQh73esAxW3ixYspy13YDtiFDL2AZ1oNsL4CtMVAZvbksySZMX97Qb1X5BMMzLgCnRuALYzSCdLX4nS",
  "key31": "3JoNdwaQTjtUNdyfZmm22uCG7f3rdEoCButTFs5Dbwhoc6yZv9KiyxnJZGErqmgKdsLki122UvfibzV8J8MPA7vh",
  "key32": "3JZfuHYPoy7osKpxMNARbsiZR9onwTvq9Hv8x1gKPZBjMD1p1pBqvp3ty6FvqRSw4tyPq4rzdQFfFbnxPcSws6oZ",
  "key33": "2YyEKfRC9qmzam9sRK9PPzo3F2dufE6zYAHL4L4MFWR8Whafgv7DDzYhto2t1K75gr5Ce4rGZNVCLQ16thgcqtLi",
  "key34": "4ZXNAAKhJKrUXDDeFEwaa7inAMDQoSi3DtRizQkPeFFRc8muTnnEj76xEK5WeNijnzqTKYwjGNT2FymnBGQ3v6i9",
  "key35": "2j6CJKeae1wZ7hEZMJKc5CJc7anmC41iXBwifnokep6fEXU9XWr9sDCFfnFymrscEZo1E8VqaJfkuoAD4zictQ2X",
  "key36": "b2f6WtAKzt8DdRRFd1V9114uaL7ziMurdkwjtGUX3wfynWt5fk25cycV4LpHuwK6hdFgGUPip2hyXnfJc3iDWSy",
  "key37": "5ZYTN56SPyotARBb2iTJe6w2hzycztnMbQrFsHxY6xrype6KqnAT7ExNMvxNzGNpS8ZK2n81enjTowwikMn3tf6v",
  "key38": "2H6KqRiEndRJshzUwktJRP9vihvhsS1w2QioqNWjwKPwCdxMQ4PAzoYCUvgGnF2GdDf8dHU3VJHonncXDZ3CRWeD",
  "key39": "cpXPwbekvozW6hgELXWPLGpkoLehDN5w1vEogx3Jug6KqvUHTFEZTktoMyPLvmdYFZqhScjJiHW5qwT9fAXS5eg",
  "key40": "3Tqcc8ao6ybURWDUSdyvxqvHniEHjfG4V2V1xUjwv2BT4U3A8HZiDej8W1qPupqJXkgKDh9RqNFEJTWBmJLdybNN",
  "key41": "3XHxuFT1uNVAQ82XU7aDfwMsoFm53rNCQN3oxzQurVHVHd5vcswDqscg2CnnzoN1aTQyTaXGGon9prHhxWyyTeCb",
  "key42": "31eZ52xzWfKrigCaWuQTiNdrEhMtj3wFGkHJ2Bn7txQpskfVRgxVTYvwcwXG6udzJQVeiJfSCKvuR3QLDYf6kZdC",
  "key43": "5KU5rs7CtzykrsmorJQz4ZshS1cGK7g7xhC5QhqgFKQjx7L9PSGAsg5JK6Q35aMKwM3SLvNSPN517NQwPS4qVC1V",
  "key44": "zMAqvr2bXePEHYwTFkQNVF6NnaJczYALnZAn9QvvLfmUaKYVmcpJW7sRK4DR1xMfgPFJD5fbirqBRc6WZxYKdWZ",
  "key45": "4xrG5eBCTVfG44P5XLfueshJAX7QEUaixUfvyN6zYBKYCwAhMK1kZ21foZReur3NQYHp54XQSpdkRC6oY6XFuT5J",
  "key46": "4Z1oFpw33TmpfhFesDrvHvC8m43pJtU1JyjU4wvnwiPymXnyX4SC8deKiKcv1gqGetHqp7Tfe25biJzLZMd4LQN3",
  "key47": "2GRUtBP6KQSYMHgjgnJiHC2uNLGE3wHeZKXEcrBreztLgacHJddDbK3QYPpQmZ47HL5h2qGZJ6BsQYoviHmitTnz",
  "key48": "2L4xCkPXEc8sNUkuu3j4HaPDChcWXaixcybVKqWECVvWeEFgNJYTP35MeCy1bRu1fiC8ny3La9cpFuSc9FqkN517",
  "key49": "3PkWd3RYyaTxBpagVLyrr4uFmd874d5CMNgg54h9T7KefcqVtFa3a54gaxisRoXL8eXRh3RAYnDw1BXkGTjoSZk4"
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
