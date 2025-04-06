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
    "5Qq4bh1HQiLVHzWPKXnYBn1Savnq5cRpN8pMxcD3wLXAGL5V57VV4HzPxjWqrYJowFduzSwvq1RFeBwQxLFJWcUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qWq7tSdwFERWn5XGfbcrZAFkNqeu6PaREijrPBmEWN6ufQ3rYMJy66VuSJBxmbxfsPsJsDqkMqJjdaCtvN9ecyv",
  "key1": "38UobpbUDRg5vmMgr36gyY7eWzbRcUddmHCRgWLZfu8nbwc4nRFChfBaVkEPm8HxAX5TsuuNv5ev5X1cBFrMGieT",
  "key2": "4UEG7La8fxxRCsrQdsEKJzCzXYaboYwk8oyzoeW32xToaoQ5KWY97fXsW1SeRx2B8boK2EGQBNLiBgfEoDSMnnvL",
  "key3": "3LHniJM8cH5uVws1BtENgf6yjME7SgXCzetEcW8Mz2tdgaTYo2H5XwxntPXoJ3b1yT3iPGBqQ3fWLx6iKmCzvTwL",
  "key4": "9XWmctwAKB9cPx18ENB4nqQjFExtzEmLHZwtMXcahVZ8g39gGodZ28fguyywR64WoFoUgxgFgLRp2sF7xsUi11s",
  "key5": "2cPyh2VJdZjU5zNbNZtpKXdzL1Mor1S8d641p1zrvcLksAUheYGzpGT7UxEPpmuaqa12WubqKmmrsaKFrfgwbBz",
  "key6": "4NanATwNGZ3k8hZN4u3Ujz8qyWFPjNFF8aE2RW1msTDKfpsc6fZwhS8UxcDtrmz4Hi8vTBZa5oc9VEeV3ph2wuPx",
  "key7": "3aZHMJaLtyQ8rTYXQsG8PDhMsuENvXcqmnTrrTEbjSXirsPzpHWqWmpF5kmyVn81RF5VT12yY2AvipNwJbpY6mUA",
  "key8": "3SAYoT6HcHshFBnAo6xYn61aS67HUWoxeqTYy3vLbHBy69bDvy6KM479PoQBJTjSa2xYG74no2B9ky3WgAuXseJP",
  "key9": "3kJg2KqsuGikt3pLMPMTxn4yoowe1apDV21RtgTQZBwBsmKwd3fNuSvuSqkBfscsnjKDcW41yoJdhva6tYriuKpW",
  "key10": "38uQnp327Bk7YfpmdAs6UcbDd69AJYM1u5ueMp1n3tBSk9MBQTGVA8brkKNQZnzoqouqjtH7G36vv5wuNTkKCymg",
  "key11": "38y4WUE7XC8WYTeofg9FLJ7WEecipkAcJmM7YKHdWmEGTgUsZznvp4xBTXMatrsEUxTXjmXzC6sTU24Dgd9Lan2B",
  "key12": "DMHpGJEgMy6qbu2xeM22qE2YxG6pDPVQAdMJEg7AfAZekdLTeAxeFrRmA2uQ3Et2tmi9Y5s884dQSHM9W4AFqoQ",
  "key13": "3XrEAuvDnAh6NRSUvQzUCVPtUt7jWLaKka5P5FaYC4d7nAS3AX7UhrhWGP8xATMfziTWA1AnaYEoEhMP3ipXJKG2",
  "key14": "FqDNB6hi8Xec9Ut2rkgBmWV71hzHCvXcdcdDM3NhJF5Ze5sWgcvQ8MyN2vNNcWtXWbU7gFr2H9SW7tyYuto18Jk",
  "key15": "4ad2dFaAjkrJeakZNe4u1sHnBQVk2k7mRrmMGszbkjYxh6ienFNmnmUDoXPXUSWc8QRmcpxFZaF7MmYGtRknTe3F",
  "key16": "34uSY25DCRfgJRs2rPaHmoMYzUJmKJVWFvueXMwzrmDNy9kiDMDmvPMU5EzRD6EM9Ld4Vf6JRfHgneWgVH7mruTA",
  "key17": "5LcFTTph4WqY9besBCj9BsPuSeH7xL5dYTr3NnQz3ZFkm7v7E7B1KyktPEau45f4o87yQNCBdudgyMbTB1c38dit",
  "key18": "3R48HxyDmB5X1Ms4JEuGaGCTdUenMWZSYJPf7UVTUDaBCgiWdU2jKk8S6BHN7B8WxCJVzX6y432UuVvGVDsuaahP",
  "key19": "3FHUDgJLJgFjVdgSh6iMFckbSFcNaH5X7TrDRRhvQSYPRsrUWg4KDm3SuUhwTEZ4djUNYH7gDs4hyD48x1EbiaHd",
  "key20": "4czxTkiYUi3UdoQYnJAEUW1crw1P31vjzbizVzitpT3Tjtm3c3CpHwM3td7BubWkpBKgkVNyVdWELD9TFaAwvfoi",
  "key21": "2cHCqdhHAAtaWu2Gg7ji9Zxrd3VuaRXyFz22SyECKj98gHUc9u4SJpnU78NP8s375LidqcgVvzk2zrgb47E9mVsb",
  "key22": "2Dc7mod6yBYMJ3WH4s97EhsX1HzLHjHQVdxgmjggP5xiJ9eSPacujnyHfRqmY5Y2gJeg7HthsnFkVh6K4oYMzRoq",
  "key23": "47vGZ9UvUj3QmDHUX4j28PsBir7Kiv7a736r2ibqBTmtVzsv9pzKPZjPWdKG32w43fbP7szGjt4aXc4Y2zQWC4Md",
  "key24": "4S8BJEMoEqNdJr1hatx7bpQGgj7TzWQgUDG8o7vdfwF7KGnurv6iKyGHAar5sRD8rezbQCxDxVdz2W1azuGv1BJ8",
  "key25": "4xCx64fvYp2nfvBHnVTHb2SJWjNoqdeAxSxmrdFennX3Nah9EjMHbEqrh45egDbxRNXvdfQAwFMDj6nVqRsCkexf",
  "key26": "3gdpcPfcB9wt4dqa1oBGDFGjRpeYjEjBUTzPiUJ82gZJvPgW4BdkxN6KZKGpHT2iYoAUYnhzQ2nSv6m7KLpAiofP",
  "key27": "3s3Raueh8NGha7sVzSToQYuNi1pg3V4CrKnMjeNtfA3yeZDaJz1sd1VrQJ9DckgvBJheDUQsQhuiumX5SjTUzDWS",
  "key28": "5cf5rNVe6Uy3cYKFeaN4ZyaiKqFYNoiJL3iipurcbE9ZuoFXv5WLSwwBD5RmQXmJ8tGyQdzLAxe86mxVxBTrKZQS",
  "key29": "4CUizGXdwbJCx6XrLZKSQQi9t38s1CyaZ5ToE56scZkLXkLZj9mUhcqeY3RTNtx1SSaWny9QMCj3ukL8mnJNFXkq",
  "key30": "bHcD3LXcAzs39a6UsoCT2NRRLWobaCiVtcgNLP1dqaXwKiTEuZ9BR5xNCxodchcCusHvWyznik7coxZVi2koHHi",
  "key31": "5Akg9NBdJ2wSeWH4DRhe5puv8DLWzB6MgcfP9Jtki1zCYkBNV3u6oawiPsrkVFEy3ouAbm85joFKnxMDEJ3B5qb1",
  "key32": "4qGbdQPRM7q7mDLuAnv4Hxp7cSMxuumnJTgi7tVahqYoGKennJ1ErAnMTmU4FNpizGJrnYLWny2GvkPg1w7dKQ7K",
  "key33": "4LYQGmkRGaQV147uCTTodG2hVvDawUZTrXX7i9cgFAErgkqh8joJx2daF6ifSJrhGP5pJfEH2ChrhAbRtCjtu79c",
  "key34": "33fD1nGtF4NihSR7KvxpdUyLpToPSMSfNNYZzqMmENwzH5brY9nwHTi9fr89s3Vk7FFXTmgFwyCh6xuYqRJCe8Ei",
  "key35": "3qmQV5xiP4bQnwdVuSzn9C61JnRrWrmfHtso5cAjoj67uXy1WCXXbddZefvafEKDtqHgtUrY2q4rDxQUL8oYubsA",
  "key36": "5G7pQwMCHWhLuNwrmT8urFWvB8As3wwMJ4hib3o3QaahaYd54YrS4iyGW9Wa5jKn37NrP4kBBypuKVZ4N9aYuFZ",
  "key37": "4AvyU6xo4izxCaDqz1Bajv5gBummtp8HUNQQjSi4P7xiZb42Q2KTjSWscPMDFcfKX12pGYBkZRwhVDsZRFNQcnVL",
  "key38": "5AYkiFQeyh87XpqZm84VuhViKgTzzo1ELzuHLAtw1MayBVYyvZtysyqMbyKStUkHTUsmpVwVTQ6GrwRe3Zvcgm7e",
  "key39": "5yKiRVfTGZmw4AzNq24x41xg138X7FqVYMGM9qvwh4ojrAVxoYM7CswV7nTg2djREh5tmFpKZgAsP9Ja91uApFeA",
  "key40": "4JWU7nN3kkpJqc5zDn3je6X9cY28KeKuYxJZaZ5FsTk1geR9uX1DQxS6ALnoiNYmxkugiSkaRKVnXkX4RpLMmZGU",
  "key41": "4wrh51eZp6KHcsXC5ckJQefrfzSqirede1i51up6cbEEz7Sa7A9LXqgFwsGh1yp4vRLrRxcqeaDYXCA7AC3kTK2S"
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
