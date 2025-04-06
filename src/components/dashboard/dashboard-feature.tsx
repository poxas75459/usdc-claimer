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
    "2AJAcBF5DLzmhCWJxsrPdmcsyxKWPaExadygGafR3MwYeDL7WmmzXydxtjneYpjQtC8RCt8LUi9QY1Z1yojomTJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44C5zn5PFEpKt26TzpviKArW1Qm3qaPuGxLRur6njdkbhvcfSJ4rtyDgxc577ptxoNGJfowwGfZx3ndUaqX68baz",
  "key1": "2zdY6vKrJ3p1SDdNQAFhjEroPbrQdb354RoAuqgJ6dNjmgMFdGjXmtHnaJ9fQCweZ18ucCoiqnAtdgMmX3jozYTE",
  "key2": "5Hkq56A43Lm94qVLUzFDcPDMcnBoEiTU5HWnwbbwktvH7NBDfqbxJHMhRnzig2QNLtkevQrw3Se9EyHxQgfALfRG",
  "key3": "31nucmoTynenBDKdSwzVS15wLnKU7jcL2cjD518bpDBhZpTNeAxMCGs6Wc6FTbcKsYuaadu7RAamp9544t9K1qTH",
  "key4": "46XU8a6b1qd3SQy5BCAShcgojCyyEZHzhA3xjacmUxxkMz5UAAzXa73jki692Eb7jFa2uAkZqxUX6oyrcpojdTmM",
  "key5": "3ADixuoBftc64y1yznh2kYs9vJk3F8jVqooXbYDCkF6DqaY5UeFJVbjQC16W41wvaD3TvrE2fXciNCU62JMFB1Gn",
  "key6": "CC19AQgz1ewe59ZtdXwkDj2Lsqk3SLUxUccWkmXDyStLtacpU3zjS32HTTzxTnofamq8TTGR519xAxc6BJqsZWM",
  "key7": "3LAAgNqtpDTi1dWJF3XZXKXfPtaaamEgvo9FAeCBC56qHMsqk9zqBGhgjeyGfm4gQZoBLZGUK3Q9RGtmkEAY8Qii",
  "key8": "tpFz2JEz2UF4uFmC3XfJzUDViZ5BxLzNFEVMDAUv9FxmL9xxwnMjePQHRtd8vG7hN3nkiqXUDkqA8kuCx7HhMup",
  "key9": "295dJwaM155ngUyKpjXcF2uPEAah5YkkuKz4Jap6cmL791B5i3sYSt8XGZzyMpyVqaSmpHy3PCbWmvibnthazrz8",
  "key10": "5ZEkcQndzmAznLHzGHu3MtBH1xKnbFgTZCYvZeF9vQsm8z29fwyeE6sKd5bhi66rUXXsNJJvuE7GdCwToxkeGocg",
  "key11": "4q3ttBC3HquSBJzpsonWXAsnhqQhJBh7i5FBaPHd99jqhYQbdExRgUHhd5MtYry9hVoLynGY51qY3b4CZQGnVdXo",
  "key12": "616Sw2Z2gNtkE3NieBLCiXPbAWMv7oyQTwZ6tt1dVhnouwxCH8LJe7Yb2PtikCHJVQTZP1MhUDfUTbVuk7rDNSLm",
  "key13": "RHJLfApFgLtSzHWpSNCwTHW7agzTmD3FQijbQRCd92v2YMVkAVQTbBzRRgZkk3LomdWsgLzWNuLXG4S7YcdxBxd",
  "key14": "5z68qAYiuruUm6xjzmWVsznQKME35PYSLuZEpZZ3xxzP1YW4qXUriTXAocTx3f7XyYbejCg5Fq24SKy2C1vYrxXR",
  "key15": "5wKHdtbNCvzc14f2kiAkYD2Rj8XfNveEHbbu65U4u6YN9AJbLV7PuL9YPk7UfPF2PLNctyN89iYQmAkM9G1Q4rGn",
  "key16": "2a6A6JRB2Z3RjxqGqhZeREj3jan7xVk1UMBDazdWY4UDhE7TyTb9xfY6o5AgJkFATaRjpiruUFnW8msScvY9rfAs",
  "key17": "2299mSGD5vsFbgeaDm3eg4iJTKWo7Yq5UR8eWi7Sq1ggCHztjHZULwBY8KXMgzCzWNhKmabQPE9xVsXHQoWJNAq9",
  "key18": "2kHcqT3m3uuzpp9oeGrrurrJfmd8m1nLd1rMBUangQfyMw6tG1o3uwa3D4rpeHNELfMDb6PCHEGCvZYunACQSxQw",
  "key19": "65HZDPnU8xATBzYuYy6viokN6eQZExDsey2AgXs9sLyEnxbELrUcGUq9nkLBKAbWojeruMrWpKkVfEaE1mLbvbPG",
  "key20": "62S5puLFDmKSR7wPefzujdX8fTzcGQuqiJEFBfLPafC4E2NNHyxdRsFfv7cPq65zypmR6sqzVTL3JYFrzBmq17H4",
  "key21": "QF9xVhaKrRYhTCVWS4BmuUtf7tEx85shZwnsuNM3eoC27rtRX9cTTCdfbEeWAJfvrbSmoGLttn8f3TjtWKuwExW",
  "key22": "5hposzdnvrazhKY6mVQaGBe4MfPDwpTUTjq4oM7cch6HqmbCYqwgEv8wuXQi6gpLkCbNf13UTXLT5GMb1pEkMP45",
  "key23": "5nskPWZDRtRDZveyoZ4daGK224yGfTrdR4dRhcz5xFfiFYWSsTki6r6m9xbHmCgana7p7UamyEZCRCZA3fsTzseQ",
  "key24": "XnpCSUvhqEvhDL1TYx3DykSQK5oy1sHeYRSnDUEntUpWuzhX7jTMBWCRUFte7idyFaj3V1UWj9CTmfNt5hsXWAX",
  "key25": "3PeWHyT4CWbqyHUcppAqksWeZnm6JW78spEsFrDvNoqrixzoqETeKhhwacFQApUs8vPCqknuoE9GUfZY463j1RdK",
  "key26": "3C22h4BgoLRT75tsYTBRBmjARrt98EExKRqKPrwWGraYSkfUGGk4LqzCw4TXMnWQpfutR9PZZknRtYQ4PHJP6sYH",
  "key27": "55TmgH2sg9QTvgJpiQ7CZRohJJ8hHhP9TXWdzPeGLgjxEZbAjvYbbEzCepbMKAq7aBi9EhHYunnhdDrX1v2rphho",
  "key28": "3mQyNdx6oorfwpi3SKGGCg6eujjoCEQr29JWQQyXDQroJimdArVgfgnjAF7eHht7hhTyr7g1z1jvbv9972tqLBcw",
  "key29": "5FjnnukqVcSnY1HDCCN1gNaxXmVo6KmkqFBNMfS2qRnw4xA8sjXGxfKTb4d8vgj4jFVCULyh8AzBtxyghQNRSp4n",
  "key30": "2dN4oH8f3gvR67GjKDrDAm6yFkgpkbgyya3HYP9wNUvX3uLUCf2Uys9tUmBTjHf6rgMj4u6RSXaWHVfwzbYfkUfW",
  "key31": "3Jpa4hZB5dGfZjcvVHjc3K1ReQiQEDiaeMFZLbBntksUdwDKFaAxSSVM9ytDSfuKpXzqe54EAfEBBokGbnHDvroU",
  "key32": "54pQBH2K4dVF3hKPUB1BCBaWGTv4RpPdAfqn6qrn7AuQYqmtLuTjzhv3Fgs8sfTuMvBbkXaKxrgvK4dtg9ajNuv3",
  "key33": "4rkB1V7uVZSwjM4JCKKyx7MEB8v9zu5pr4saGQx9XzE18MDFuRwc5xG6uQByZgAcv8mcqpMeDYtb8EHvyCvdAFwp",
  "key34": "2sdKgNJ8S79z2EsgDF6dLBXTTvKUCk2xtWXWUHMBad5oKBqk9SeUUxdtyaKgu6FG369YHyJapMugYw7LoX8XELgD",
  "key35": "4G6VfEYzLFtSp639wdSty2DBqeya6CHiCxddQ7yv4QeqTW6uH7GAiNmVeMSa9bzPyNz2HaEtvLruacYwfKrLgFE9",
  "key36": "5CuMnZMRKdk9Me2yhBeJiTbPEnGfGRhKpAMHiKh4aFoowe4TPpaKK9Aoke5B8SrNkpcDsCaDu4E4x75jjH5A6mox",
  "key37": "2hcnmrtPUfSg9QmKVYrbu5awxu1ENUgxKzghrQ4bR1WgAjRQHPhBEqrRB8Xi8YENeYb9Ag8VDwiXjKx1kxDCUJTb",
  "key38": "3C9q3cSxyEj96mptYfzfEuLazB8iDo1Ea9egiBCcE7U2arUZZNew8d8sesrRnwrzZ8nJTVDx1FmDXfNii9bfbbSh",
  "key39": "2v52wV54iUSD5igXuY2XcoVra4mhXa6D6WP3uqwMNcnUFLKVx9Xy1uEurXQPRb9cNbUUwJMtRpq93k2CuoLKeuoT"
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
