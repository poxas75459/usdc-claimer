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
    "75YEkaE9qTgNV3bXaWz1vbH2FpHdgKXx3CueVZxbac6nP8iCdn4UES5SKxCGqMx6SVco8Q9Ur5PTAnuyCdeEqdM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31YaufrbMDaeomny9SM2Nvqn5uuL69KHhPSsWkpCA654Vpi9RTWbY7U2262reg9yuhF8XLXKWDmHEqMM6KcAVBdF",
  "key1": "5ueqiQD3Z8NciBdUVoBNHmXnYrpZe6Zyy6PHqDTHLWEUij4SerztjkEbnzZA7rJKbUi3nieDd8fZJTg4wME92Y4p",
  "key2": "5xCQjcBQ7jNjWT5o9Ui7PSj1oMU6jFiv2NaKVySViRikWA1Yajvx98d9K9LYVMe1YCfRw1GL1zGVbWnVXUrkRiZC",
  "key3": "3K9wkTyaxNNSS2QGtzSJkfL9C5BZtDkYuXQJcTm2Fc2hXeBxHpzz754k2WgHstio3oh6zmNDWX581TkwaNJNY7Ka",
  "key4": "3GBc4Tgo8tE71WY8AKwbBF8piS5CXUKEn4J1kpN3udFJfHahtU7tmJfvXq3mmVnfMgqy6Dua7nMH9pb15gVq6nzH",
  "key5": "5xrf3Hg2HMwhaX8SDPWEbmc4CNAvyRY4x4XqM97x1WEfDW5UM9Xzx2Lxmg8F9wzzJmSMYTaFBfcpgenS4kb7YhKQ",
  "key6": "5S3mNammamAxL6GyT4iNDyFiJkx5DUeQvqa7WR5C3Kwshcfd61LxoLsmbVnvYAj1CqHd5kbqMRyAuCZmVEwLzobE",
  "key7": "3ig38tjNb8U6KoMD7t5cVw494e8qtfZmwSzXy2JdFBdGZ8JTHLH6GwSFLFjHNCQFDhoBAQnT2HBnryrUkVgyZ7fW",
  "key8": "3B2eRFSXtE5Wwqyqk1RpkcCp3YxeRZCaEmDwWAz61oZCTuePDvhZWdaqbHiETmEAeik18yMtMeDuakijTz45C1cC",
  "key9": "2uWhUE7RKAyaB4QVpu8mX7AoAaHBS8sh68wRLq74pooDBEFsfRbntGfMTLG1ZCLeETC6atidMj2BfJxhnFoXh8yB",
  "key10": "5jW5vahLggNdcoeUL3ebicyHcnNL1VGRtqyitUKx7XfRnvceQLNwQDEXXLgF1Tbn4dhUgtQtPtcU2hVPU3URyyrE",
  "key11": "2uvPGmocXW29VNo8sgmyRvNwe66e3WbEeQZi8Cit1mxdp1tDB8mRHXwBoEyDcMiz2WKzvAP4hmHVGjGmJTxoLcda",
  "key12": "5989PbPrTk2yjhG2xxQdXM4XyEDjZW9UnZW5qSJEFnH6VS1xEwRCfHSD3TwmhhuANC7N1bj81dpyfgm2CkKTKJcF",
  "key13": "4C3FkDWwzoAkWm8N6Tq1gnwcJjR5h5bZi4ijvKzbgSYbshVf6obY8v1nd1joRwDi2hL72dUgvbTj9JRHzkmPMyZF",
  "key14": "66FSu5n1ZZzhtpf2tBT1Q7P4YsfD1GnZzZYghbRVSq2YqnjTwfnk2abpex9bWWCfRHkzgSvwMmXuUCwofRTdFUdH",
  "key15": "2WuSrLbdmmyQtZ6K9vCts5HyyjtczhW5BaFRjtfX7uza4cUVW9bdgBRq5vnJjwPEfYHedyCbFG8f3WQbbbcjb5TE",
  "key16": "sGQzs7d52eE6kSUJzxxuHgbe2H4UhGJf4kNdfeCeNi36VsP2DBUWDpwNV2Di1LoVJSACdPPvkrQUogziaJx446L",
  "key17": "36jL79RKew8jg4xKXTFnfyoWx2AAk1CNVLm6UxSepZR3PMFmokcxj4mquQsZXHC6cjigA4vzqK4HhZMJAsRLG12E",
  "key18": "5bt2HSkubJB2ccdVLaUX2rKGJ3ZYbfZgnu4aYoNvuKrWKvRU3QmmfSj7bN9RY1aQTveg4JTZUG3tzTE4TTWumWTT",
  "key19": "2ppkA2kAG6hFy7MyssDi4bM1WesAje4aJU2FL3tDiBt2hvRfSLMmfcdFDahA3kkwj8E39kr6P4tKZ4Nj9ax1NbVF",
  "key20": "3PHv6T7G3tSByRAQDsYy2kGv5xZSoQUQLEmucKYWbwe3Z5uToL71AUYKRNu5ix4tDcKzRqkxHMBXemLP2FxZNm3T",
  "key21": "H3Tvxus1LYsDuhq5bTrWZUtzsKTWhsvraxAoHMHeexYwkgZZ9j7b2twprwfwAMkxNkJM5VgmTtwCZWkmYgcwkhV",
  "key22": "384pPMJ238WPSxXzbbbNxu6QDvSE1rD9gaeHZy5FQQ2XiFxvTyxcNzLoeWQorgLyyz148VtAUaAgZtVw6y4VrdUN",
  "key23": "2adDuUV5FvQyyyXbVAoFRb5QfrDr2G2U9EU5DXbmmRyR3t6QFM5Do5Tx99n2oTvkpwMMcMeTWLiEwYq1GcqrDD38",
  "key24": "qnvuDU5hprduXnPVGsSd6XTMT7nakfYgdeQttRaPpAj9U5tWFYcV15tsNJftKd2sAnd7jeVfwis6cbXniySyoV5",
  "key25": "5LwN33dJJNNaqu2E47aKsyuPfonDGPnA8TgWPxgF78dcwkgYJSuryxCjRKkzYSzP9Kqab47B9JoRngQ47LV6Jf8E",
  "key26": "LY5MZitduRCSveXQqacvFpyXjbXSdGtmDv6aVaxdVuVFpAVBTjGJLZSYpWC38M6FRo9ZbsmGhjR6MAryCJ7U9YM",
  "key27": "4C7f3JvuJQGaV2kZ6wey3mDHG6xp3DXdohrEX7qvP2bkgZJFa7zVU2BSeRG43RyFzRCwsfZJBqZMwm3KrFpFEaMk",
  "key28": "47NofpoZhKGPMfGUWfM2weLVS9qaLENrn5wHH39GMUSSxj1QxGkABWpUTj1dqYkT8RdcG1sCs6BSnj5sS3yMG4ZD",
  "key29": "4BYKSoCQbMBwVmmSL4YiwMnnxbnbkKpQgHLvo2z1N3GtgMVJkTvnedEw33D5UYWbEJy57aaa9vH2whZasKVsEEK",
  "key30": "GbTLRHn7skTobqaeuTUNq612vG8jzDkWdXfzzvYiYK2otth7NwGkR8CSbWNDw5ve5wsd6zzivYYMhrkw9eCE3dT",
  "key31": "5esRtp6r1SipLyj1sxAoFC9hMkybvPeERaU4SVRPHDPi8W8dSuky7h1FU6AkneuYew67dwZExntvKQR3JuhVh4Kt",
  "key32": "3uYhzucviuLQu54jSGDAL9DSeJFTgtqxBcKdreTMoiw9S8HM6SmHAhGZpXKCXRtVF7e4BEp29gBogYYGYxhdsNxu",
  "key33": "4LQX3KWqBwgRYUu9Aqi7L2MtNRgPRMNPwSdPRN1VPjH3M9ZDv9PzrL6biYvUqNpqfMhBEUGndcCoy27C6K92MFF5",
  "key34": "3tKnWT5F8uHCG79zaazmhqR7NCQtXqt6SSDeT5tYtda9gxnPe8gxd3u3uJ18zpTExg2qJ3FHYE7T4E9CVrsHwfr4",
  "key35": "5Z4AXwaP1Lk5gJs4sx3kWsBBuvv2MTJTCMYgivtLbcZ3xUxoJfbGQKeFHNEf6XDiWaAZMigmD5mCXQ6TD1tKuyvU",
  "key36": "vho8SmuwyZpXByUKo4E6QdsgrzPZTd6jGq2qgi5XGUPfbEvX2bsev9En282BWrwSzsjxcLZ7YP1SPwXYbytKLWK",
  "key37": "4NX2t8R7WcbgSCei5SvtcxevZC8p5UBVaHZCaXjKxjYqDJChRw5SxdxeHRxpiFwWs91eLvt3AdbLTbJxkmFUxpQd",
  "key38": "5B2BdQgXPjifF4NSVnHN4A2txJ6GxnTKq7WE6c1Zttb1tJZoG2VATAXb3wshwAjwxJmtNTwgufqomQZPVuo7XeKv",
  "key39": "2FwszKAFyhmCvgrTJQXmb1codND6FACGahzFDZsethrUzcGbvVVMizJbNJKxZxLF3YPLWVkntWfryNXwT6ZqNMTS",
  "key40": "5AM3VLMEChxgA2hn38ZYN5rESGkoznXySGAKFLiX7tRN7dftu8DZdLRjgBWBE7udgeUNd4UxRrzxT51T3adJGTY",
  "key41": "2xE2Kwmb5V9rbSTBAR7Jk4fHsFLH2EbUcNm1FsZNVMYo2ak2bfvEdV3w5acZUQ5k81MWntmKRQYAbx5j2UgY62ue",
  "key42": "49UkgKUPN7inUKF9UVak7wSw5fSemji8LWpgHRUiTK1QFgW6Ydp3hpTp79dvyzmu6FweMtCpMtjyWmpetsjsQxJG"
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
