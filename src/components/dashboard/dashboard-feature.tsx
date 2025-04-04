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
    "2F8wqMEYq7hkkycQTAPjQXc6b7QGsBEdvdKzmKXDs9TDUJifXHbew9KkwLjmaq5zmjrDqMofbUzNnUCusx1ftVhf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pp3cQe6hFFjUFrsYdYw3i5Gjz8EgXMJm4eFdjM1qNDnT8BzozT1TXpVLVbPY1y3tm8VhhnSbp3phUuqUDLtkfoK",
  "key1": "4qtdRGgYXPkv7vFHNWZwYq9suh7qugNfZkbaPJB8CryCdBdRa2Qox1bcQ8jWq6scMuJeqwx8R2GNCLrSJfPxxP2V",
  "key2": "jqc1VoNHRkskFz983hJ71QQiRphWcwQprm1cTzANbFxdMrV7S3fDaAct7kS5cC6SvrPyp3onDbTfQP2PWHvFtWG",
  "key3": "3eTKPcoy2RSX1muboeZavJKitutDpS3SiL2GVk679bD2ff7XGgPmxaFo8AH5qoWrmFyRP8RvgrAUrBc4FCj3yv2o",
  "key4": "4VX6hZ9KbjzALFeHkSmQncKuRhH8TyDRfBig8LzdY9NQ9fZG7MHDGqbKZ2a4JRnFYgqGMUw71f2jLVBAjAhk4Uk6",
  "key5": "2iauV7v8eTnKndnwJ9FqGX6yn5AjLfyVeZSsr1phjSjxZwPaDBg3aAhoA87ViMv6GHNCFd9Dk6fLJr1t1x9Sj4Ka",
  "key6": "oKNGA9CQ9VXUWSoww4oX7FtsrVREw5UvqUqVobRUJVHfWSFzYbvbfQYMAqGysyhMWxKfpCsaXfbdbBDXPrA5xgM",
  "key7": "5wQxAfwiDdyo6RkfEC9MRsrDRqxeEAZAZ6s1qhPn8B4xuWrTqmNt8WPe3ai3iGcj22zkQVV4pVxwkZ2Z1tbnDxh2",
  "key8": "qv9GqqSLQG4vNTuqUPZNfMW39qjD3cV6TpJSEjSpyFfdZL4JubB85yv3Wy18VykXwYxYJ5cgwuh3sM1EJihBbvm",
  "key9": "5MD2373P1BNHA2mKD2NuwtscxR1tzw5katyMD6dB5PJATYHQWZc1wzmU4bh8cME86XP9JzNgwDZ9gS2LFk8YgPTs",
  "key10": "4XjqsRMJPn8hvSZEeBEaSZCkutYxJLtHycxvo5rxtHSgDujddzcVG4ZR2VKhz8MjvceejcdybzFU6ptqnPYwjjPF",
  "key11": "3kGLjXjXcsE66S4S5ANVvzC4XEqKmtuDtVwFMCQzKY3h9s4S62c329mDGjLpqc59LF9NHqy5XNzWMLYkWrKSdbY",
  "key12": "3dMupionVnoCSFWY71EeVdxaQZpgc31tnH33zMd9UoDekvZ4nCSyZnZUuyamLN1ovZ81Hyo8Sk3faB6TDT84Nmy4",
  "key13": "fMSdM1mzTsNdD8Thy12ZyumfawGKXPy2p5easx9VjQ1y592FjEWs2HhJ8YpXtyTfLtjaUmnd95TmzQMxXWgXfov",
  "key14": "nz1G8tYPLXDQA7STqeo3sCwxKHmA5G6n1bzo5akUQFYZvMigd1yAqTg4UhiwRjgK9vVnBX4EbbqXe8JyLQXfeME",
  "key15": "361fipHG2u6MyM6jWUD11Z4fkmw7mMntDeox7iaLE6fLbY76brVdXzn8oF9vvfzznS61QgayHoocUYj5AKxJSiBu",
  "key16": "5ZeFHwBLdZBF353K1bWPLMzbnuKTjaDzZD4TPWx6mt1381my6KC1UK1kPUpM9hzyRRe5BwB45uny7UJ421xfN6nA",
  "key17": "nSTZnWvSy6UjFZfX3i1MnNwuwLe6qCdGk8uTJ8yPCAd3Q7vEEebLrdvX7wLJ8Q1eMxMk4ytdAFRd7wY2ccMhHT9",
  "key18": "2KvVSwHTJofXF3r92iVN9fmLmSzrLpFr4v5PFsKntrT5Rp9UuudnUSmqTjKvU1rk9EzJ5Ghq1A6KqQ7QpnKPjVET",
  "key19": "79pUdE1Wg8y7JAQKXv3fSuWidYQKAQKTSmnNanLzwZpYmTHo8JXhWgT3P6RgZBy6G2dNyK1EnpDRm4bwew3PhXn",
  "key20": "2f7sDgY2scz3cBwUeChmbyUWf1uPA1Ls2GSf1hNkA3NFHWyErGaNoT2eEBf8vvXUtLHniG7MqnuB8hDSG357k4ys",
  "key21": "53EpZNzS8inLR81LpzYXBJ7T2e2pe7rn87fzCCQo2thDe7P4dumExVmqoKvsUqmsCGtWYbuAPmuZxGPT8RNxqBcC",
  "key22": "5c4rAzXRGVuQzXiwPoNuFjs53tLBQjFcymtye6bebz2Pc2NYRhSVM4fbYtXGYfkDNWEUYszVLKsapnf6Zg9565nu",
  "key23": "35Es2GVzPTe66RS9Rn88fKks5D97ET5Te4minuYz3Ghqty1ahBKeYB85DkM5nEsS25fg9xx66sXdWd4ZMhu24XR8",
  "key24": "3i2xLhChmQnioALcRgu3ajxPBnP6bRMsFfy6aYUc7vAnZ5zTdidyVmoUYBtUGW3qbWbXWrPJZoz8uHzLNL7hKFxZ",
  "key25": "5vJXAx8tDgT2DeDND5q7LHsZZfsi78ugnQ1P349yLi1vUyVz2wo6isNHT3XJY41rCrPa1Qt7NhZNbWqZ5Qh9tQmx",
  "key26": "y3rV8DYJGDouQVNbNhsWerUBgwNTRiNnkv359XZUfcefyUfrDggMciaPWc9WL2vSATCxpoiuVCKWjzrDW32PRPW",
  "key27": "x4ezi6qNYF6Gof5TvpJcePTnS8G6AoxoYY8mySumPKdXEhEJ2xXwMtRsmjqtc3dALn9s7gBJvZQEzJC6X9hiMYL",
  "key28": "2PiAs6iCS6ekdUkZETWHgTmAYhmn6tmktWWiupPcBsFFjWnaWHzrfteL6LxxC3g1hXVKzDVqBkvPYt8s6Z3ZcEZP",
  "key29": "3xhDL9foeKbh95zwFG894eYdPbFHDTTXTEXT8WUDMsNv1qubdPBLdfh92wcXoT2uDfzD4eRp1VBqPPuPNoaiytUr",
  "key30": "avrhhudm4wvhfVFXXVeeV3RQbFeXV8Yrt8ktSNHYYKqND1tgWxU2TfGmU7B7ptWmLmow7mcWDTPZhhxNfSoBZyz",
  "key31": "32JDDKmhWr7QFmDuxfr8emqBFSiN18aWEi89brvaemFCpegA2jcGwDzWNzyvxgpZQ5riQrLXpPpknFbZhiq6UzA6",
  "key32": "2Rj1nzWFZVDzZiZ2qDgv9Az6m4Az1c79yXq6xzt7JNQ8Ji6VyYiYm4P2iGLkPmDCbvGnWfwFW83SwtQeUNN5T9Fb",
  "key33": "4abpYLQPmFYEqP3LHGzvHjh631J22wjX5i9r7R9izsFhakk8XHBtTo1YUCMtaXnnXX7pbYENxkrGzdVPp9EH5NNK",
  "key34": "2KzRo1Z5usP8adV8pTY4AQTZzLfB1WxhmWHZJT9qobEHXXfL2r1ZjRtn34rizLATKUgKStJjPBFkFYCxw1s6xeD3",
  "key35": "2Mmam2CeysMV8UwbrrHJfBz9yAQxGyqzgj7J8GZ7NrcCD4vaxucqCA4D5RdDyGnpoTZ4xRAmsyKgHMY48fnkSdzv",
  "key36": "3vdLBB5Fn5ERQcFW2r9s3AZacxGSCHsPgm7BE2iywihgQ667qGwjBBriCnP4ZwcZMkGuwuADUpkCsdqrx5LnKXZe",
  "key37": "5ufhFfs2KHd4mTQacMbSH1LVPPFHEnghhKWPTXQeUpESYHdDyGts4e9E56BUno2CFzg1mLS5HoHsRuWtADGYaAXc",
  "key38": "j4kAXPoRo19hEPBgv6KnG9FhikVZkkBiMwLHfizXuaU88tzgcTQXYTm8xFCq3MqLEk7u1Mx4JfupCGc2yDsFsYa"
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
