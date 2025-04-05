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
    "5HKd1Yfg3hqfEPgT1xbEGnuZdDiGntM4ygy4P2gNKwLauA6SmnZMymWPFYHCYDpmwxRSysaZb6Vwj6DU9tBYveTN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wfwLgSveFwpebMb7sD4dejkLQY5nFozUGmXK2VzjrLkb6Eveh9kCp6hKQyCGtWoVRbV9kAdZojHiKMkFmjyHDio",
  "key1": "5rimYT8yKmR3yYa2KXuwhgX9HogqVEY1T1fzh6hmSk4Pr5Hb1kXfdGuFj345E8a9W7oSJtYBghBw6JwfUHhf1eHR",
  "key2": "TvwBz8Kw7aB2L9gwZXRwFahjcGP5rrbpU3WaANaTkwmAWzkAsG1Z6fTy5JwqWdg94um9uqGhATKeF42fp4RiYPp",
  "key3": "6yvXwA12SEBNwktBEnMCD77Di3Ghg8LE88NLrVzxzTg9cxUbNqQGCngUwqPfHZH9h2XhDH52VG4B9QDU7Qaok43",
  "key4": "2LYAHpNYMPknS9J14JP2UJvm2r6P1r7JZcmXn3YqwoFVHphqtzT8pPNHPrQP4zkfJhJJgKrgCfjzb1mfTHkFNZ4C",
  "key5": "FbY5dqve56wJNES3qVA7rzovN8pyYTmkBVznTZbQ8CCmzP6mxhBZpEM6WCispBusafDTaSPhv5aJWo1B7RmA8aj",
  "key6": "y751tvaU6HyQz4Xq8nFQsNB2bhs8fvFmQZYBxrxfutHxK8ndZi2oe3WviJ4Nuf3ED6wnkaPWQ66s2pFWXstETxC",
  "key7": "3jAD5XXMsagUTxp2DPXNcfLBrzDUnd4v7h2qoyunVmCnBvrgeD74WF2Ma9vdZWPug2BSX6PzMwtpFHgiDCayQ6ep",
  "key8": "2uRfYxQ7CwGKjAZdj3xfPSwEWeMN8CGUtr262EPxDBBh25oQZozxAicjw8NVQNBvNwB22WzfJRspfbnMCRJheaLH",
  "key9": "3mwqDkCug6dEkWubFK8RU9nRd3ckq8JXwoEkPMRr5mFb4ERujKZQnVJtTUUm2vtukCMGU6Jfg3kKGFMDrj59LFYX",
  "key10": "3uF1hhZWgHeGqNrMMy7Y6TnbZiAModL5EZEpWCgJxWSm69v2SzGnbeWcMyAUYTkz57ZDUgLaJ463MNu8Vr4c3pHJ",
  "key11": "2RX1yiKuW5DriCTTcqDoKu3rd4f5XxrJBXajbP8tBdzm7jJWTxsPgFjKMi1vsrLJinsNiN9pJgEAgoNnH6HW9mSj",
  "key12": "2pNS2DQQ67eD2iKBmncbHVnVndb1NodEbqK6WtSFubHegEmyiJW5u4EVmsMSCRe4YHX96ts1MQ3sWTgQM1FBBoHW",
  "key13": "2XrkMX8g5WH1Yk3vBKT2w55dwf8SPhAaHNNPjaGUkZrTXuunF3RiPe5jcdBQqckA5xXfKPdox3BPdVVEjjHmBver",
  "key14": "5QiRMCdxZjyNwd6NgMRGqHHmMVWqeG5aoWRDWhtpCKTNDjsVWLkCHKqUm1RNNTto8PJhPwEyz12eZyaDqAfu6wMF",
  "key15": "5zsvmBWCQ1jNmVUHAmoZ1dZfVPhk22pfxfijDjowPvYAmuv8RWehZK13i4uKz3tg2DbDbiAyw9SC7S9oPDRfRJMV",
  "key16": "2hzf9ZPXxqMCJVgfxeyVkRyHsjtubNZGdMFMjL8pZBqfDb4mWaL5MRGkVYCwK6vAwUjLvYoefT6HWaSU4NegWo2Q",
  "key17": "2XjcDjVLPd7SJ45weZKcAe7Hxh4MZ5vpaxvRmv8qzh3qgUXL6Yvr89KBT558NrhZQQHa1fMAdAZePzH9cELSrob6",
  "key18": "3Pzmt6YeDVNXH9qM731GUcMnp3wpBQnii4VzUBK1tbVqHHHxMsEDvQnmQVFWct7VrNWegZR49iQJhehRy942NkW7",
  "key19": "5YnsgCf8Hqwy3iFUPinyXRP4msymUmsUiQ9tSf7oxVXazagtweyWquGXyGEmuEEMYozrHo8qaxcgVJor3QcYpcpH",
  "key20": "615Rxm2oeAhGmozxCHVRu8AZJzRsJ86r8X8RLU6TmEUT4G7JLcArEyXag19od6SBgY9MZvYrHcw3pqDmAvEsFpCG",
  "key21": "2noQLwnh7LD52wKGRzksJzS5NGnaH5sHGbd6FaRaYBimMR4N9JHiPJUSx93z2yUGS55ZQFto3pNyunggtzUnHzCq",
  "key22": "3DJHqMtqmLqVtUbvegczHzCV7ebC8Fji1FnFG97BgupBqZ5bvScYmxLcKuaURuuCpuSbdLiDiD8RfKTvArmDAXzw",
  "key23": "2wMBvpfhYymQWPUTir6EWmyos6GwBkSnpraVGCBtK7TeAMZTn91qymrrTTnwxzjuU3RMxQgWSJQBaPSfmaEN5F11",
  "key24": "2euHYMMMTemoWAZHqRNGP5aYnoZTsPA746N4m4DuJrQyYL12VqbTXAmC6UjSDzfozvBUUnScbeBBKCKeoESAUJCL",
  "key25": "4yqMPoGMxtZQ2toUpiLbG2v3DJLQMdMSyKpNCc6xn6TK1obYErH4v4e6LkdZc1fkEcSWLy6yFP5Ha1hoLwLRLBcY",
  "key26": "4wQgB5LesXX75rU2qfmNhT9ofs9t7uPAvhMgwQb5bufSUP6w9weQKHq7QNQjWmVtwqgzsFBeMsP5rCH1DEfKhpBg",
  "key27": "2GK4etYLCFU3xB4F6mWBr1vDiwcceL4YjKT4NobmWSu8LApKvZrGhnJjUXKRUn4A5HNc27KXPmQJb5oqd3zShjQz",
  "key28": "q7EjCZdLp7pw8x67hjTaGRm5YAKjRfPoTCRmTkbsgmZSpEgQLTb8eRzbcw79JYgKdY1Z5wpRhA3EgeXLTGYdi2k",
  "key29": "5Zurr7r9yuBpguDZnCvDojX6AwZUcN93SF1VMrucM4ry7xzcBMSfHZgW1pMMsWpRbhDqdcTM8riN4E3fydJkTsT2",
  "key30": "3i1wi4VHU9n3mmTS8tDdjgTRnZv6K8VqnpGCJfrGxvpagG7k26SgYor3wDQjme1M8RVzV4Uo65f3fAm3shzJwMY8",
  "key31": "3v9cvTRcmQVdDycxwufwi4Z4mMdBUsjHW9VJEx9qQxBvvkumbsoqFpJxrbcAmnwTzLbsukMr6kBwxLc6jMQ7cqs3",
  "key32": "5sryW7AxFkZJ626R7xL75L667zFLNGAb1Fc2HndRcMEb3L3FfxEhnHyy7xC9KyQkedrE93gPRzmjbgcbNZyqCWKf",
  "key33": "5wTiE5Lim1uhSmw7wiq76PYaQCc6ugmnEA7MTfMgMDdfvdJN9vjYGJe7XTphVD2ivU3KFkLGnby61BRkRk5MZTLP",
  "key34": "4HMzsdAeDhvgJCSEva8jhsJfYYwbCC3cGGv9QSc1ctaDrG6ZCy4BijaEeNYksmix4MbvYTgYraYHjQTLQGMEmCL4",
  "key35": "5YmGjev9ZDGS9f63h3v4TFv3WLaoyNeM8KRnQEB66vtyngSa9QRYkVs1AYHq55B2a5B2RXTJjiqbuVhe6hNVAz1t",
  "key36": "3ih3Y8Xp2fszwdgPKCs8azm1MAF3m3anjBbs9iExgXrgr7Ds8TvbqTNEGpRUev9TaUKUzLMV9CuJD8sddzZbfeis",
  "key37": "63ys4vzEkdXy8uaoy8AWWt8DreR3i7cpXnHM59RGKMbVLcrcYwJ9yGbSPsW1EUrkdWxBpkmKeWX1AyWz9nBmv5si",
  "key38": "HpMJj1MJm1nY13qybjwHK4m1XMHEHUFE82VFG33ki2pWGmAWukSFdsGBxoVWWZD1bRwJJL7GRTdnw8id85zdhc7",
  "key39": "5a7hX7n4PV7fCLtFYYv8WpVvnnmXZEf55xPQLaxqFvdKN9GMi3FCHudQfKv5631V7JzJDNZFhMHJRGdeDac88e8R",
  "key40": "2LJ9ZnPynHfLaWkqb6Xhj9ZsYhkydq7VmR1iosom7TnM4dvj6GNdKirSfmyGpdzCrB9DsHohBPr9RV6aNWj1tMo5",
  "key41": "2nkX9KxfQKo97mxuBb8acLXNZt1vcL9CL67batNTb8g8vBeVYCGhzETC8CP7rxtRMsujY82CP9vJxECn7YL369Ku",
  "key42": "45BsWX3bZ6JQuMSt7WdBv14pJ5ycALYtDQfhhuPuyuA5DG2xCaDGw8kmaYLXtosogve51gLqHHX7d6beWo4fFfen",
  "key43": "4LmR23S6n7z8ZYR2cvaDgVv93Zzei8NtYPi92iwBVxbQVbLwXuBTukCi4b57s9jNtSC1wGhTj8Ss6kbNe5y46hUz",
  "key44": "3jEcw6PHdx1n12fAn7ZnGdZYpWGUBVPrfKE63neVorp9Cg3JQJ2C4CC1SKyGUxY1uF72P6FGnbo8Kn1rsU8e9AEM",
  "key45": "3eFVPHiiHQGN8AAxKpxWL9EysWuMBdurJ8eLXPDASHP87xPnSDZUefgWsDTTUSWMTFhm3DvSzgdfCKA1HX3t5Jxy",
  "key46": "5Bc66emuJNc3wSamuUshHUjP1KRw92SWwT3xehgVtcCKFCE1j8kcZtH5tCFvHcMhqxHrgYzGKDQZ6LQuhmb4Mck2"
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
