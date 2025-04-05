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
    "26JRhzVdtghAZi6s3Eqq6MyWvMukSmTKNgte9oa3h3t6io6cVDotiSJdrd3sRFDZBqhec6jDVAb2FPQiwUrVsoVj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MxBao9dvdGyvhMr18nKq5NAMRCmVGZ8kBXV2H5se48dXWpRUPKtagBMPPw9wK2ZtR4QenDPn7fPpMYfZF84YD1S",
  "key1": "44UGoDKhEoYJya1prCHAoKb16phNmZjbzzjWm2HaFSmyA6YRs87M6TW6hBmwgSZd2gB6aLbiG4Zhx11MBRVq7vUU",
  "key2": "3TQj5feSYLdp8VmnEw198LEPqcfud6kDB8RTc9rxUSKiG5JnuF1bTvGsjDBKZgAtyDw8xrKM3ua9n5mHoLdEaMZE",
  "key3": "4X37FyKWkmST2f2cyoaNFhvMUejYsyPSjPxA8xfp9e5593ic9rKQpTcBgHVEo6cVtydkuS3CQ1c8e2aoGgMg4ANK",
  "key4": "3reKpmidMHTAaBLSDp5uAZZ9HVd6BmBzXrKtExcrwNgnFUor4Sf9V3Hr49e3VrT4ue3UWSsvWbcCjptaqyygXv4P",
  "key5": "4k9Dx119YGY2f9xV7o4Ea88BdmypQReqNca4uSANvty73cukjnKkAWPaFmnku7F3GfQT1ggLiuvxoqWsdsMYKnrc",
  "key6": "m6tVcdWhD9V2PX7wcLVPBj3JZQE9xrFpcgyKo4yqdNPwLKMb1vb3J9AypEGFHbPxLjxQ3r7extpmFMHEUigFSmM",
  "key7": "4iERwaFD198RvA2yQStF33EQ2u7cjRnYVrC61h7JchW9qb9wJMKgEuEgPgbGj3t4XqXvKZ6hriGhwBsj1wbGsZpK",
  "key8": "sCNrQy7DbrF62UGPpgUEyx9bEwF7ZjPvY4Xy2DuzAN33D5ApX1uFSJSzqcocvNTEmeEK4ZLcaKuRhXofLRChwT2",
  "key9": "rMHPuofQWAbkYGt2YUycHLfP6pd3ZkmDyVETiSKw7QBAJ6KPWAzFhup3Cad3NuhJq7fHnCfATBdt7g7jKsx2nGq",
  "key10": "7Ja2UFMu8P27MLpQgQztFwPpyHwpRxG7ZovqycXyEWhbkYKFVzttqKRswrgSVWY3M1SkStsDREPzosKFsXbzaxo",
  "key11": "Vpmf333iTyCD1eD4eKqKH9AdHbV6oai225fjZTAqpUzbtstm3SuBZZWp67S9oqniSXEKR9hAM9hYuYBPuvrNuLz",
  "key12": "5qmeqN62yeEDzTPdG91TYHYUXyRAoWHRiZBNKRj1jPHUxQfkGu555HeczceDbojrLySu5eJJ7nkXQsCJxYXioL8V",
  "key13": "XUJoBGKJzvmkzusx3jEJHRKduoMgL9maRXz6TS1FiT3MjyakLSLrU5vX3QKn435irEo2nd2e9UC8P8iymtJ1ZW2",
  "key14": "2cuV9cVDzZz2ahpuwUNEEi6vEFpCFfiiP32D9BgTo1b9bKwxsi7HkSrXhfZbk5pou9rag8iJBQxeJGTwB6yrSyXK",
  "key15": "3AY5kYycw3tRsSW2f4bSgYTgf2iPToU7CRDkaAcKcwj4x7jsvywn6TapXZ7ustWw7G8gswxim4NWRt6PuGFQJtag",
  "key16": "4V1irSuUTrVbgtcXV1untvMQ3V1sUHHt3puxqF7LZZKtGtoSo2CQ5G1NbWJqRWPLtyzVf5kQ3kFRWUmdRRet4wSJ",
  "key17": "2QydHaRAXuAvkAH8zygKZYvmSW4HnGiZcmQkzUNtbR1r3zXAg4sQGhSYDF855169cnEg7AaB7aisn9gSVfWbKWap",
  "key18": "4xGrwD1x9pq1Qk3Lv1LTCd4Bq143eCBJGQXk9KcNfXdKkfioUQaho6sacfD3WEbTRhH4g37DUeD2TsbRio8RwQbq",
  "key19": "4ZAgtFa4XQHBxWX7gtnHnEPtzsUMxZ3F913dSJfXeDdinXRffHrZyYE4K6JUKbWvRFuUFavKA5TuNMm4frnXerL9",
  "key20": "5U1LufgAoA4u6FE9acLoS28jgWynhNPh8FgoRhToW3axnSJS75sj1ndDQWcAJvqWkRB7TMqZVQPabBBVSDeqCzsv",
  "key21": "63smj3qjx9iK1g3t3LqjTFNEtTNcQCkLbhneH5K8EtSmiAH49Z9fR9MYwyNVwBGrV6NuNQExdwTf5UNLRuvp3ujK",
  "key22": "5FNb74k9iLvTvVkNbYd7uDU8nTUZWSWrmHZDbFH5ZRrZFgQud35vsLJJnaxFVpBYqVHBAWih8zt14kNmjEuxgraR",
  "key23": "5XBv2YBaT8YaZL9Q5yHwQqnxoR6iyuv7Tn7xaWofJmQmzGVbsGrCoY5oSrb6H5wYvBqejUXzatawg1y9gdYVtpMZ",
  "key24": "4m2TwA491vsJEhkayDBfiRWSnLd9astJp3VUCjxpcLtuemvbZHBxeq5bzcdvi3Wzimn1HiZbHJxqtaxXVFYqUt97",
  "key25": "2UFta4PY9K6Dao3FHT2NZfjB3RwaGdSeEtmeG6apEhs3TEUToKxeTHNTpguudec8pziP3Wr9ErwUfJm82NQMqS3s",
  "key26": "5kZdbxTKSUJYMVotX9gJ4TFeHxju3eCFzMGyutnRFbF1CzWt3vJ7gWLJTVRcMTXHSM366HKBenbYcrwwjNNJe1WH",
  "key27": "4eM7XWUxssBhecHcwXwDv2ib2yCgTicDY9cUE3jMDx3FWuaLX4NyWGkc5adPLshkpYxTfegsjw9M1DW682JyRK5G",
  "key28": "3MkwdprM6Jsogi6ofvmBwA4XbdizyvbeK7EmqxgLNMUWTTLJaN9kYnZAfD9StkTx9TLCumn3z9zsPPVjoabACsxj",
  "key29": "5ZnQVWCYz3KLoWExfKoUSp9gv55Lxu8FPVZW4Wf4G7jh1H5SpxvmgiQJh1NHQ2k8TyB9JiKmLA5EJNfr4BoLYmB3",
  "key30": "2zXUnkeugpvTYgmb6w6Ki6e5xEhqAc5GYYf9seRTmrxTHXxz4Lh1WMBkgEqXwx1dqh5z9cRGMCbKTAQ4FGXQttWG",
  "key31": "2X1eh3mRoA9LFvNeiJocLtc44NUWehg8VoXnEK9fLfvGoerNGHLpQMr6Yyv3gma4uwSnXAJdxAJb73sc42d1vUZw",
  "key32": "3bJPny6MhxTjcnDmka72JGK2RviRaxnwBdUMX2exsX3m7vjXHdWk9eCNwa3e3Pt3eKHHsxFnh2cK8ktjJ9LkT8Mw",
  "key33": "59B12bAY4GNUBJa1nhGzBPo6oedjXavNwemP5PSNfPQZFAA5UfuSmghXHRHsnrAsPFcGJ3xzzXzQB1DzvEf3nNRW",
  "key34": "5cauDvvUB3VqoRfg2f4Dtk1CzsrfdgJ86CLScWUde9iBNbvXowGu2VdDjqRpXEmMxjjUiECamGdzgAEdEsFjiZD8",
  "key35": "2MHsXChr6vvqyCvcXbWuBihMcdXuNK8qWomgj1zaAMz2LG5AkPtppRQT71QKAUH9yr7zM1CPzyGE6ngjPT9Rodv3",
  "key36": "4W6zMoVLBF9iv5YsKnEY923Ydb6vU8KKG7ogqdzBYWyw1BzWcBxAhvUFrCgifrcN6ZK9jHdwBbFwQXdB1aQrgQJo",
  "key37": "D7nTZyhEhwRUos8Zd3J9e2nT8sZy1tXF1knz1VhEu7ygWmj11KhUtQTsVmUqusfXgMqtYbLrz9G2ZsZbhJbwKBE",
  "key38": "43VWai3PPsxcbp8Uew2YiQ4gEZmzDWN2Vt6orR2TuniCFQaNysdYL6LaF3vkHgcXRigjyZVUoJybDk3auVfCX8kZ",
  "key39": "2T48XrFo1uNmPmZF6jzcb4zW35HYRpLcR8ePGi8ajKuo6wGtrd7Gpph92Zycd9RFngBwsWFm7QxiU42No3FTqGtQ"
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
