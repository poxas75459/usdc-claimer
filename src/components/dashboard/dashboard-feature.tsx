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
    "5T1wnMtffdmrQ7tet5QSmTdSQvAyJCJv8CDnmxmro5HQCLEwgJ4j5rK2wu6AFaJ6rrYpX327Dg63g2vZBRYGZU5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SbxNYibUHc72eur9x81w9gff8PJG8ydpnGtnjbfFzbqLj4t7Vi3x5RpRsXyPDscq6Ett4p41LcpRwGuLPmPnc7Z",
  "key1": "3SuDnbatudxri5x6pnQk5iwDnaieu63wjHcBLxvF1ha2dfZnH5bUWHZBBDv7MFjmQWBCRwBicW9dE2A9JKD3ZD5w",
  "key2": "122iWRw7qM3s68Bejki3XKaC2Ap7n1WztXCFFuxQaRVzgbaLPURaKX7gnkvPnHpzWasrTM465hePhhBJbs4foZCC",
  "key3": "3pwomwD7utyhkXeywhF1ycUABhLbPUVdFjMZkHjamWYw7q9tz3FQNddT3W2ZGvaTcaHBW6YFNRKKg3a4bcsZUr8m",
  "key4": "3MB7orv6ZgwwtdrruvurD4BiKn7TQvN3omyLhdhdbgcubycxjoCyyHabGgeBXzi5LGdf7m65MLdjMPYjomNEk1Lv",
  "key5": "3EccXGXtk5GAAaT7ta8PEzF45PK7MoqCLn934HrBHt1qtryrxFr9a8Z87goPVgyMmAmR2fW5tEUy5Tt2hNQBYd5Q",
  "key6": "2Yico1xRkvBfbsEmmcKX4FqEsYY3W4jdtBRz7aYaWSZUnZrajUMvFfaK3ut7apGRCdXCidh27xN1wHr5hPuMDhf1",
  "key7": "bYTjeFYekADQBCMFRbwme88fFpJK3oVjaR3t1Jo5i7QqqfFkRt6e1uUhXN8nwHAY8j2zxdLwhKPg35XiXzpTpz4",
  "key8": "5CRHGXKYB9eSn4aaFYJFDCSu4UPAX1pbj5tGdQi1NrKux3NesXhRNE4SEHwhQoxUkmzwDd2hofsmRrW45jYkeFcg",
  "key9": "2Ec7zKF8HGDj9H19FWtMvT8bMhATniPP7LtCbNee13wtUtZn2WhQCzjGcoC7tJHJVeGtg9syDrmNiS6KHNQdcZm2",
  "key10": "2LBy6mcN5KC4ACRU2XECT8taQR7QVbu9tuDpXHkTVCUakKLkEu95DzmFjyGoVQ1rew3SrHfVdRyKTNmbBwWxsJVQ",
  "key11": "3w3JJr9Bjb2kqAor7dVTEvekJr3dEGvTsMdmYjiaE1y5ZNnaLSZHMFPFThTCHYLTqxRgZMe8RqZxQnuXBrn1tq28",
  "key12": "4NfcNaicXor5w7LsCNVuHidToHrgUwk9P7KpMVimqC8oDGK5yS3HCxjGGDAY9DicmLDq2jF1s6oYcNdHpZfcDmcR",
  "key13": "3wESb8MPPGztJL8v8RDBXkUvw32SjwVdKEBG4zTvAUmRTUUMk9ijj21KAu1J1Jmem3jKUoHFLiMtXXZ1jnM5aaME",
  "key14": "29a7MWXMiuRpVA9a7qB4n7rq4QTRcdLnRj1A64gcGkd2KsNj4HDwx5r1PNrsrw6gGHAD9W4dFJaAK9cjVVWFk4Ak",
  "key15": "2gG8FtE4a4bcVzrhM42U5Kvbgrn7k1EFxhvQRJFM41RodbAMLzZ8yG3Y99qk7LDhaJUHev9r4TvpnjLkUShqPzjQ",
  "key16": "2tzS4u13GxsAdScK7b8rhi5rCuHzjpunCFbqavXXibZyNPTD9zoumnXUrtJcCR9gYSmrfKcE2zGsqi8fP9bMnHTP",
  "key17": "2WEtNehdTsNi9nhLQoUd5j5EY9Kr4zXkr5zXtJzZGnw9jaHGqc1uZLKfKWYNjjM4RiFjdniV1LfQGhfCuDStUxag",
  "key18": "4r7tukKLNdDekFDQ9RVM1bsKgknGBm2jgR1qXCgeLD9PiQngFhgUgf4Y2EnvYfg5oEdrERtRNqLPsgrvnJnJMWeK",
  "key19": "5zR7YsQ35grtc9wYGttppMGF2oaaDmQ16VzF97UfXj4B6uHJihDLTp5kGJqSsiWGRq1v8LqjLHJwJ7hbqJjcFeEi",
  "key20": "54vwvHKvJGwmWPtvXWu7q2Mp6kFJZrXgUcH5U84YBWCkcuzSykB8rFbqX1u9AyrayfpkKXKwJxwb2JgYZj6iMwrL",
  "key21": "4WNFJm4ZaxMnBCbSd78Rx1Lkme2mTzMmHLow5QdfcgHUNtWd7dwi4JTwdevT7LHmbjFNNQ3xK9CVd6aqQ6pbsF9u",
  "key22": "4mqeZH5taQ9pSWhfiJptatpBWdBKFM99WRMxsMiMQvc67EyVWfQvn4t9y2NH1TMEFSxwQrGJJ6ErBJGMwpYfibxH",
  "key23": "4NSKrXejnffGLxayWfRKky17GqhYraEqfb2f8cemuQ6oARijyFNAGUxTByoyKhhNTvAu5QNcvEXMeZzmQACgmSZx",
  "key24": "4V39TP4EAgUFgqUjHMW7MF9SDDms4Gfmox5MSTvjkmM7QJnqACbxbaJRNL1VkLotLKmuLcTa92vuaavyr7dWmrm9",
  "key25": "2mkXfmHUBwxaaa9VCXxYNwfHRH9U8PMyNn1Zj5EDRQzm5MVQW913bhCG9tiVfChkRKiDczmYBwhFexux5adEkLNd",
  "key26": "6bQuJXb6a7FkobztXZmw6jsC8qsmdPRJzx643XDnYo5m6CtoAVJdmyNrEkznqWJH5w7BS5oArECUN498x7YGTPi",
  "key27": "nn9GepHHnnTwFGWVJecdbWxgckP3skPC7tdaU95a7txkUNPrYNBzeSEBQoRJdqUcBQ88kwWVmCu1FNhYrqVxG8c",
  "key28": "21JQDnwmjX37e8XLkiB5qzAmNhoGb3XZNhvUHQu3Zni8cHzxLzWe7j6SN9qoGSauJMTzaWBqLqmomA43SDdoWPqC",
  "key29": "5VfjhWWG7YsDNUnntc4LoarmLGYJkkL9ifiLp3hnLLRVWChCSvJgFDh3ZLuRCMSogdtQzgS56huh2WdiyZV8T1j3",
  "key30": "5jorNbjWMUCNm8jt6Hc4ZiT1mKNRAM5ffKFwAxbnKTexAGiaTp4vazkaoapRYpk9DW9TMRmzyR6iT3LVhCsFCunr",
  "key31": "4pRmEeZcanPbreQuduvgJeP5D9ec1KnhtPQCQoDRwQBd764UP9Ht5exr32HKGJPa9YXDFHuZ3NCbkU7QfTcY3vYo",
  "key32": "5L52Fn2PFoS5DrePck8R2j3kDkttn8bwpTnYu3YPUXBYNzScdxR88kF4oCX46UdoPScbkYRkZkTCr1V8P8MgZ87z",
  "key33": "2iQcTVGggkSeekFeNsbGYQAGwdA4x3kSuZHuksMaKEMnCF79QWJvF5wNG9RoAwrgosStGhXNVssnjU784qREURZy",
  "key34": "2WYiU5Z8FoCoEwdvTHfkx7AjjgAkgUc6jDmoXJuzJLruEj9f1Nq9ufE8hp7jE9J3uvt8PJifcHtLqRKuvfkzgvm6",
  "key35": "JS4xEeHg5HivThWqmc2MN2xXK8gVjD6F255Lc5hxG54Bdo6MTToTJhwifPdUzR5oN97uJZctqacLCjZABzmrKV1",
  "key36": "UDTBwH3gvSYyNL3qEp7iueXFwUiYsRdbe9CsBoez6HybnYQCA2Ud54PvbUbJeigFQhHtrtybv49ihhchndfc1vi",
  "key37": "5HRpWGGFwbjNoBSMajaEJQftnNWcnfsdY9xJnPHaaxZi6CPuzdRdcpnRuAjg8zP7aZ5NKq9SQJ4WfRnhcfqXJHZJ",
  "key38": "3xk7WWAhvxasgHWZiVnM4uy7AVGSqgTe46Ao39Ehfv8nWL5SwS1p3dAWrGQbkyMbwDkP6w33MDFJnihhkY7TikgG",
  "key39": "2QfsaL4s89aTfFg15wa5aPW9NbFCrJyqUQJpT4poShuq7yYLYp3QzAWwmpcnbiDHPDiWc1Z3B9P2fbnsB5uNm8PG",
  "key40": "2s2uxYevXVTQppRL4RmsMPa7cHWg28CiHqZnFpyxtEkm5w7HNtRP9o3ZagbPioNQny2vScNQ9McETQvt4W5SpkMs",
  "key41": "5JNUbQ1xb2u6gBoeaytt7wuhVC8LcdYr1iW9a8ZNMc81d5ZpdSYSqb39ZUMkCpHakgf38ydVzWgH55is98SA2SkT",
  "key42": "35Eh2zHnPas6cLcg4EQ59AJBroQVt52BsAV4RPhG2SU58WJhid4uekHsj6VfRTG6HbupMRUrU6uWZmxqTLWJ9fdJ",
  "key43": "65BuP25Dz7M76FMo4rxbCrJDR7tHXznK6ZhDEVdfoGioGFDg77ob3MrfDCZSwdcPtBuNwxHa8BmY5rWZTApnK2wd",
  "key44": "2hf1sFJzZLaMovFnSJKEyfASDKq55KEUAgzxe428rNH2XF7r13N1XR7AzpeoHZ4ZJrWcycXaiS8KdPwLJn3zLjuB",
  "key45": "5m42gHwXbTEr8zQuGVfX5E1VM61xjHwsxSqRiWq85CLT9KRzGvJHc8o3odjupmxgxut6gc7C8zuN3NbeAVtJdaMs",
  "key46": "36vooiSj3uyBErn2r6G6BHhyB4kwYuGMMGfdQvWnHscPGC3PHKsPJhqoRFywTpaoaeBvmkr7JuAT2KGdAuvE8mvn",
  "key47": "55HRw6cmVo4v7WJnWBpCDvNq613KHFtaNEcwR6ubYSnVPJCLLcuRaVW2CQtcn4V2tywSPZB63KrGcYoPco49AJFP"
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
