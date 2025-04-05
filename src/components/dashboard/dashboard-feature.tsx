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
    "LVHeohTQjTUZbW2BXjwyJ14eGE8b6hHBABxA8ZJ7inVWK5xVBjNGMiFHWK2mpsHVSGKVCJST27nVEYyLwrMdxJR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oeLJKNXgzkBiUEPzZ6QjhLoMWA7D22WviJzbp4Bz5HcRNLgEPihH2jqUnP6VAELfzuhvsLGayDqKEQZ5rCds2BW",
  "key1": "22RiJy9YmzSTQh2jDMPfgyU3EjNaqcLGnaMTpCZbFHiY7QMZdVe53mxUWbUaJQWFxYbudntnnnRdMdFQosCnH5AN",
  "key2": "5JcgkHSNvfkcBunWjdYveon5HYTmTYSdxh8s94K4eaZiAssQDaGhE1fXPVJNgxEbCa5Y1kS771d33TRwHyXFuuVE",
  "key3": "5KiwicxnXsPWo7E8q5ifZLncXj8N7b4M96sWjhkeopUfMYsr1xXYJrbm3KmDD1oFQXbXqvsniWDM5PxyWgcmcYxW",
  "key4": "mNCQ9Ea1g9foWZ5R9fQbdxZx1MHv8rJgLCT4VF8MargXw4q8PSFJzBeKMHRzVVGg6wxrFPAJTBaqvLaGSDJXFE4",
  "key5": "2QJa2TxsPocHzvYbbC5iYyogAVa8MmdYM2GryiqRKjQkNZYR5FASTjceVgdZpxnEU2E1D7Umgxv71zQLtTcr9AaN",
  "key6": "2ajrfdJneCa5oRvt19pZHBzV9ADN8rBvKU72zik1Wiu5rjKzciMoaeZAMR94NU4VTgYoLqJYZzExmQuDx2FoZUj9",
  "key7": "u8QtPVya3ttH9b4SQ1cz6h29LZNBSjbfKDZSrhiEPKdFXjikv43E2QdVHzFmwqcZQTUmg2c8kdZMamD15euiUUf",
  "key8": "5xPq2yJpHx8gnsrR5yPZtBeV2FpeNFpBzR4TJptUfgQqch5LHNw33Lu6bZKF1addCGzELyvN4hx7JKTEaN2vpE7N",
  "key9": "fZ8KQapknqyuMfMTfWZaoMeZuMgg7RpU8x5UkZULrqFREnXFrkTdQcvPhtbDnYVAZuf6W9ZXrFo62EqirC1MGrG",
  "key10": "x3k5oCCjuMdj6DT8TpFbUJbU5WLekWrsAPgPnhUCWAhYoX8M82Q4u8q5T5oBQiQEFujkfe3i6L4ARM4fNpvLjEd",
  "key11": "2HLLqVZ1Y6v6MVGwZvhZcNCFtBkKYRdMy4dDfFG344SJaGXdLTHdJJcYyAkfVoy3sBT8oPSkE27MVz17LjU7fRtU",
  "key12": "3zKksDwvZAJvttEVcbuhjM8ChcaYhjRUu1AQxSGCXyTaZ8SbzwoJbNdEZHoJ31nyR8ZJqJqqW8DSjVZsjwjjYER7",
  "key13": "5rs7qakawTgpL7nAFVvSoDDECHAAsz4vcuNifNsDyFLogheKvihCMM2eQsjdsVm3bQu3dxPLWpwhjcfCUFiGTekH",
  "key14": "MMsMMVVWfg9dWxvJ2cAFotJjAPGCwTDGMJscy6bHvtNXJGUdcvdXEwF9uZK91jAAAM9LG3ofnNupjTPSdmrXSKd",
  "key15": "4ezh5beQGbqj65FNUaE4eyanH2BZvwFRVnpAWBqDCM9QiHd2DiARzkbYgKnz2ch4bBkqb5KtVJpRfFB3tHwAStkH",
  "key16": "5o6pct1cWpajFdvrh2JRgLw9XBxUbrzDj4Rdxqd1AaZeBH66z62xfam5cbesbrG3idcGniPu9pYkRhMnGjraT8Th",
  "key17": "4oKjAGdsayLoGs4mn8DBYhTGBnKarFHY1U3u2KdfJDUPLDYB4EE3JhMzG6kAjktjt9zqXgdtNezd3yun8hTVDWLq",
  "key18": "26H1UpxQpwtorYdBS684WUvEYQnuHoqVid7ZE6Ai4LoEuPe8qYm5dKcwFjziDcEKu4H5D3C4V4VkdC58PsLP1WXs",
  "key19": "2YPxjdPqq7FmpUMKxjdomX3Re4zZSp6JeLGPrbDyr9Fyk6Scq1bWRKpGU4LLZMcLeGYEvfpSyUTfS2EJuT7HYJbu",
  "key20": "3HB53yPdVARYMzNKL8QEKLKVbZFghtsXfedbYR4tUQGQbn8Km8Lpes66mQVZNKNXawuLaKBLxHc3nD95bBaseEcp",
  "key21": "5Xgjp6U85MLJ9ygW7EFd4jd5N4JRxt4fCQBpT3vjk89pEpUisRAcg4s378cB4aSBLvhg2utckryoLtgfRYoW24ko",
  "key22": "3D95gFkAwLRHDdNa2hi3Xnotj9mw3BCn4A6dgKjWZfWTRLJinw1LhHAa98BAnMVFiYHE4CeaUFXe3zyyEs66X6qN",
  "key23": "3JMG78khJQzhxECfuP64S4E6vffZfFH3ettFWeX7FNaW18SVug3KDxS9bYwtjop8S5AgTXNpB7gN6yipJT99e5VB",
  "key24": "241k5viey1LSNVyrcXwLhzF648rwjNw7CtwvsQNxhJ6mexqkY3qHs7LXawvM7Bs22fihHPyMGmxivAPJfv9jtRHU",
  "key25": "36YhDp3Qv8bN3aMdNnBcRcAUHsUciKwUxnhQkgSMwoSgGXkqntqqrUdd73NCkc9Kx3t3it7ekNSDP6wXHQDGrQvK",
  "key26": "38hgBKrGTs9uvngHy1y8SqyyMngPUhEr1vesVA5z8MrmmFj3zzpezsPt8beWSfCK8GkG26rsedWb5KhYX1AaEHBM",
  "key27": "4c7tsFCwEozESYWG2qNrFZdsWQFzjRE2iKK7U64AtCEkoCu3scwH6Em6LCQL3omXrH5ApdPvUQcZnrXuZgVgiSma",
  "key28": "4vwjfGae8pmXQHB2fFEkP8JjUMACkpkyqCBXoVs2hdUUhnr4afA5en6QFP8Cd4ucP9Mu4gp5T3z24BUyKXLSJEUX",
  "key29": "4Hmx6erTMXSexM4wv93NrrTatTopivE6EyiXo34pvtngPLvVA3392aE7x7iPVz7p8czZp33VMfL61kD8vD2vnce5",
  "key30": "5jrJ5L14y7dvyZBh976TCaUSGaWNPUvDMacNspEXe6qiCVdYZTGtA3uj25QXJvxRRyoPHM39xNdauWs7vZFXRaka",
  "key31": "5wSxK88pf5wNsMXsH87PeZRjMnqrUkfGXoF5c7k7fB9jn8UWijoFr3trBZ4UW1aw5bgJXMkVxDt33MZVwfFgXpjd",
  "key32": "38J4b2LVSrmQ3uT8c619nYcU9PJW917aYjvijQFHB8HZStJpjQN27y858ES5a4vzwpWq396uLgh9QPMafhqCFvLT",
  "key33": "2N64FQfJvxx4noMV62zMJG3p1U1K4dMKWdCWvwK1XM9KYrWvAa7WyncpGtu7qxC1Kjt8TH6Yiej7AkMsS4UvvNTU",
  "key34": "5j7xn7fzuiCSzZw9oJxZFitF78444JNs5cPhxeyViamqYRPnALi3BGWgaBJPb1PcPJWZRa26Fw3Nti7VJE2iQjKq",
  "key35": "o7KrumpSNq5GmTBzSsnEDCRWRg4VnimDGP6HBMJdFoov34j9ULDgimYUduGcFTqeTYiiHjffur36mQCdVTSCSPU",
  "key36": "51YBtSkuha9bTtcWdKThZMt4H8KEsbqnYe8UJR5mgxxvqh4CGPJuWPX1jqEVZYQZGn3q5wj8A5poqoKCoAtuDD3A",
  "key37": "5yuG4HVL9pDTJHkH1qbCS8coo9f5SjmSq9BvKqbqaWXjZfW1cYnRgEBR6EkT9oJzHZzyYJWUYHE3gkpE62kmjwao",
  "key38": "584FhXZDR33tHUBPGKcw3hkmsLixC2CBQSU9wJLwSGFdxYEkxyVANUi1qoe7oKUiEN5k7Jwa2FemMKBT5ZWg5fJG",
  "key39": "5Q7neLhQNbPErq4b1riuKUgxJuTfMAWQUEDja6xAi9FpS1LnYipmbW7uqphbUdRdUvFHtDt5ZfKp5z4vnw2p97MT",
  "key40": "3eQgCVXCnDf3Tuw4dpBVnjQMwfSURx3KNVTb6YRWpkWnLt1NNpepY7GcT2GXPMdzNZCnSnhLE43Xj8mE3XCwLuxo",
  "key41": "4KLFFPhhtUuf6aZEWJQPhCkkCek5yuEYuE2Z9BqV6o971F6jGv6HRtJUYbKobB9hEhVAyZbomviCaMvM9Qgs9Gqo",
  "key42": "2oFGU2Z1TasGEDn14Nsm44RgGNa5oZPErtdgGzKGXeKPnV6Cw7LPk2KCig4KmK5Htp6YU1Hxw6inQAzYEUmMUHND",
  "key43": "Vv2EjiJDkFKVNhrXWYjEvJqMjij2yLijaDXKHgicwWmMSqSjwbscK92NqVTbssSnDdCaQLk8GNcZiNScvh7rs7q",
  "key44": "24fH81MqXDRtJMYY5qRcN4QtFBDxUPXMCq8TtVupLWT3WSpay55GCqXb4GwWhAVRwX6ba7iMzNNSBkyt5xdEe9v9",
  "key45": "34QEMzSYbmipCFS2qRbPX7KPTeLJHffgpEZnFSoHPz6Q7kDjHUZSH68xdM7tNc7ff86Z2xnNzxNkDzgiM7EvaCHt"
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
