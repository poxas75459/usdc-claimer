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
    "XVVVy4eTxJDwbkv9nKYueXga16YeyynhKkqeXQk7drnDKEY2BZvLHXxNhvc498LtzTBAT7PTNvwAKZg2kNgERhH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N7dBD9zDUNeDHVBLjbVGsubLKoxj79j1i9Zoy3dPAZWJFydQMJFTBspnPeK25qzUcp4Td5Q8JAJ2f6Y8qoTRTVR",
  "key1": "3Gbh7kjWxnSWqPry6fxuf8xZoJQ9PU5pRsg4nYMmvs2bia9CrYmxjNfkPmBwDuXuiJPHZyQuReX5Na5We9mVazrQ",
  "key2": "1CSz2qrt1M6DUiYPCevbco9rEP9xnfPX5XJ2p7QB72vRfL9qCa9e3BWe5yxTGuKtXSaJjvqXAbg2SP1V5kncJpT",
  "key3": "2qMZtfBG6NbuwCrpvP8vQ4kqFMCFjTsJBrN6H7mMfotfGVBJDQoWaT4xTjyQFFPErb5mokc49uwGZuXUgSnUJr1f",
  "key4": "55LtnnjJakfFA4BRW7mRt35YdfQPru3qCgr4ArwTBmzUCFtPkYtgnfugfwFqpmggFGqeiFRPd2SqGQP4FQJtQwDg",
  "key5": "3Su9W9RSovZUDd9ANhpxzibmU47PQRtGCYU4PqSWbd16WN7KCmP1u1ELYNXoSkRjoBMaHdngRhj3aByz9GyDf8sD",
  "key6": "3v5QxJJzfvxcGxjqtVNvv6SCe4fet87Rh5vgyUfAij4NFPH61WS4RF9YQhVtAwmTgiFWvsaxQU1w3Q1SXCEA7LJp",
  "key7": "5gUKWvJNugDGKQCubbHKMdFKK9GpQqK4xecTbTsw12dA3niMEJa7omabEzG6ujwwLkqNXQVzb3kSzjkZR4gXiQu",
  "key8": "4gG4p6MTPebJmh85fyDMFykrPDTTdjmchF76XhL3yYC1icW2JbHeUphf9YefSFV7jYRRFLJWYH4brxt38QuedmLy",
  "key9": "3csP87rfwtRDZdWGiwikwLgXvedjZN5bYNBH2qyLY55uxBmFgZGAupNtLZkdPvgrh1UnHfysQs2esivzjTYMs1X4",
  "key10": "4Hab8co2acAi4peyura4dPDsyer7Rjk1H9pfPqTaM9zdy4nKqdP7669xN3CKHTd4rg6bbHvwBYmPn5TDS1AoBt9X",
  "key11": "4BVRskiwVkNZxxas7LnYuUg7XDDriQmvgYmNPcDophunVLXP9JvMUpUfShtgphdsDdewq9WX4U4TaozYqwdZRDmg",
  "key12": "2J4jBP8qQVyXhjDyQQWiU8q1TbJJJfS23sE4JN8VBf9LXs1HhAjHu1uPVwGg21GtVKqZTDbTbQW12KPYkVDw639m",
  "key13": "2uqkWQVwGndR8zPw8AHueZWjMh2da4FbQF5fXexn6URRWMPpCyyRjEApwwX4kw3yWzyT1s96CgasB5YkCRyWZJHL",
  "key14": "22FQNAy8xgPzGs37e3EwPkn7Fy1HxUcjei2EK5BK9V5X55TRm9woTo1UVuLEEwZ8tAsrv2GV9jSJU6EQvWmAicDn",
  "key15": "uSGezv6WGFyWkuyt5eNnxSK4urTAMxGH7g2S1VgDh85XNDqKxuhG2bb2BQj2nBH2smdhPPhLn8AzXyXMazSQrvq",
  "key16": "4tbyA5ZwPkpPbEn2vm1KnKrwcKTs3kXmLnsSE2J66NgVzHntuCebN8EjrGr4CDU7avpycshiT3ubxDH6iBo1t1dE",
  "key17": "4nWMdSt71oL7jMNBMDiGcnkKnR9zrNzHhYjEBrvKGWdBFo7dtZmwK6daM6NxABPt8EgLVoCPJ8AKFTgWTx1zm7GG",
  "key18": "3cXZ4xQJrVsAEocnq9ZXa49Vsmnsa6TDTNQdxBtDHcdj4yTG9YtxZbPTTfev7kqfMteRTQTmVXkjXQxBd52CfDEx",
  "key19": "5sc86hTftzYKPkVaNAm76HpfQuV3i88rpLgWaPJBUJsFNrVbH6eAx7siqEKrkn5Yy2KangWbyKfegSo7X18tHPG7",
  "key20": "2xCjRZmBu4ibVo4DMxVSyccggP9SDHfocYNf83Cipnm6xrNFXpqakBPX1XSh1sRt3oQ2UiDE7FAsDVkNVbjnJ2YN",
  "key21": "4jUkvMc4hbNPvKdFwGMStk1smBAtEf6bUMBDaDcAFbJEk6EH3srrWn5a6PDXkLKQ48v7YV9Y2Rnw9uAR8trWrBfd",
  "key22": "63HofNQiGdzy2QizEj4sfrtAHZx8Cug4mjFTdF6RnzzAzLw42jFj3hjTA1MvxNbGqLXxjBgJc8Sfd7PdJDqfECG4",
  "key23": "F4DfYgbQrQtiNPRUpmV5VjZFj7F12RJDKfGoq4mtn2RzcTLHUL7S9JRue9imhEeUurncSCnRcM86ZrB5i2kxeud",
  "key24": "4Cxnr3bnwT2aqDuVLENfhqYUainJbMqGRJi3FasmuCcDzoV5FMrxx5buKgBMusLELjgqyPGtYJGWL8rxJtaBpmbo",
  "key25": "nTWXtm4m2ZmbYEjYJ5vyHWyDn8yakYeFHf8uP1hKVh79NRz9t51NkpMN9zxmwSJhJ4G7sDMBSbL2gZqMxXrRPx4",
  "key26": "5YgptqpyEiuEv6cfyChrj59YwWJ9X28dMXikyWPwgNMzetp8Qxk5KLZ1A6GV6j8m9FUnfRYAtnBYTjVpQrQrbYkN",
  "key27": "3bcWrr7685gkR48Ho42mYg6758mtpTVqQhPGAVEbczAKxUtmPCWd9KgZztGUrMKacxiEHEDGj99v638EBE9kNR6G",
  "key28": "561hnWk6rkYsUeWF88riTTohASgHCP8jvv7GifWgeBTLsovxJLQTVnWmWziesbHsB6wr6ntXdH59Zk7tZ45NovQn",
  "key29": "3ifU1awrcusGXsCuR1xjdYENJAUwBknQRojeSW3Lnt9SrWWXkWL6wpczbZfizLSqUe5wgopZspQXbxrSxdZwVByy",
  "key30": "37C3JCMpSoZ8pGSprX84tiua4WWanDNV3WjNhKxqPtMq6gm9NkpsxSyBwh221m4gcDTUMW1cwst8W5vhNDbRjEHT",
  "key31": "3nNYdeUtXY1P2W9TsTKRhCvMhVe5YGQJEx8egvFryUofGQhe1MRKEEeT61qZ99rX528mWvrS7Zp1UWXJCqmVXJh6",
  "key32": "4YikrQdodVW4SF3hyRy7aE4Arhq2WaZBxmuUg7Q3UGvmCqpWQqFqTEBqrud7Kv37e9SuW4EhVh4uScaTUErUBV7s",
  "key33": "5LTC7RaBpXdKnbsRUiTUA9pHhdATnFEyc8VCmRcpax4KSQQ1CUDnvJapQ4unxTKNKzU3efxsxZquM4d7zzgxqaJr",
  "key34": "2jHP1xWZEa5TBJjSjPCWpJWx3EmDgCqYtxudSRRMGc26syt9aJw5PfM8ruEeDe3mbPdq1cM91At8V55GwuHeNVMr",
  "key35": "3VKVHC4PmB9UDTuJmvYWJ5w8G3uzAzKrJ45wKZtK1AYaDbxfzLvhtqorVnugpRq5v5tTNqhkguUmQ5W15Q5xLaCA",
  "key36": "2xUF2Vua5GPxTdiL54YoLZVCnbFXfU7oFCgUxS7okfk5r5ECr5Z5kE9zyMSbzz6PVWDpyzUxpP3kvAeDErP8QpzS",
  "key37": "46CjrqkLuRdyjYJsYNUHCHe8K36yMoaeKj3ezKcMfGash6cpZhCaLDVZbdsYVRWvuEEnUwQF4AZJfr3qzFv8pRL5",
  "key38": "4pyf2VeeW1hhaLFRHEXhjwg8Fa72wqAXCteQ9iNHFWUNjcvHY5P11ThQ614nv8tbBCHs1j3iXsaohEi2wdTu9XwC",
  "key39": "2kj6iaBgsM8YHmqyntPwsXsvGmQLTyw9aubG2TMzpmETyBXE1tU3QCAyxjBzaVbCZgmZ3NCfonybHVTNUmrrfAwJ",
  "key40": "5N9wMMMfJcvmoQwhUZfKqMgvbqW5vq32C5oVQvbo3ThYUTNVYSum6JZRxvQV42diHGr42KUVcAiHnXAaDcMP4iW8",
  "key41": "4v26rLvk8pYAvDHvn8fwx33soF6FxkknroHjSQfZo7gqyMj9PyxywA1ZXa3HaeEZL1UHjxJ6VU9f6rrSsGvgAWSX",
  "key42": "2StHqtVXkmV7iM4ZiEEtZMhQMhTkPCVYtEim5kNAQNCvjdYCp3jBSbUu9LC7Ee6b43s2mdgpcNfpKnrz2r7BfJAG",
  "key43": "wGEg9ooEtvRn6dmHPNPeMRDusVyvFqKchH5s7pxiJk4HpCT8MyV6Ny69gHgjERnEvGhEdfRUqSRchrr5gJMA4fR",
  "key44": "67SyZPnfSm6u75WSiUhj7bYs6QTJTUYnqHpE113wWjZcPdKyhn4SrFGtUNzmiMoTrWt8z3SvzE51zaeNC8s5XgDt",
  "key45": "4VLYPXpF9XVR2NnbsWi1WBEd9EJTQ6PwiozNoNgtC6pzbyzXabxn3qiDmKV4CkomizYwZ8yYtmSrNB9p89qEm4c7",
  "key46": "2DioxJCbfahpDGeXSwHybc9Y2B7iyvahX68WZmKVFkK1enK6HRWDD2FSx8uLMhS8ukqq6ReqipDShQibDc5EnrRW",
  "key47": "3Nt6NvxRRkKjN2RHYCke5J6C9dodyihBu1nS2bkVgFeNzFgShNsgXyaFHk73KK5W7Qj78maLwaRuCbgN3dKL1Cro",
  "key48": "2napuMLQMkautyPHqULBYhXPBzLYZk2eGUZdm9nbA6qpftwTL8E8WkCeEt9FgPSnfvRBC7bjNzJ6AprXTSBLkTan"
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
