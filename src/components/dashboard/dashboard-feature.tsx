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
    "pfNWPB8kFhuvtdWGVBWMVaynFJpaHj5SUZjzz6h5MJHMZfihEWBU52dwmXBSUpqatG97PW2e4muiyxxMYnuWmRL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kqgosJSFmwfMSwh6d89hgXzNAG5NN6YEU8h4m9dPA7eFCKQkFSEe5dC9cTzFn57CShxaNB4BX1wsgvpkyVef3Ms",
  "key1": "5QvZqtPsTd2tMjgmurBzB1ktPaJXYKkcfAVHagFZtxz1mjHGTde4jM99Y5iKLx7eYMAtc4wsSYA5QGUEwHiTPJSS",
  "key2": "3bPp4umr31s9JaAS2xVd9TM68Mc4GijYi6U5t9Hw68EJzafmTMtZ1t823pUUpYiwYyTTubwwtWbNQiHpEaRswANP",
  "key3": "5LFid3z3uqJqKypEFitdvQZu9xSX2DGyeMtXrE4asLTD7axLXeF3qcxRrycxHRz2wRAP63Fn7iBbXFjQNsoPQRzc",
  "key4": "5QNbYHPsYekcYU9LR1T5tS4Nuxcff1uhmvsGeAanJaR9sgBFpwHEJai3Q8jkgBNFrCmBfQqTq6jDVErRV86AzFsr",
  "key5": "3zmHdqu3EeyFKQNqUAeco1UAX24PGvi8diKXZ3Dzx9d7V7VDsJNWsJXZaET7htiYnz9993eCY8ceqM1LudKEN2of",
  "key6": "42uPHTsYXVEGGWJ438s6N5PeJVbP8MCyHoq1kCqU3fg1yBeKpcuwDVKNhwErB4LEYM9MMCj5MZmG4UcJiNW7f8BY",
  "key7": "4mwrPWvX1p8wmWoiJcrHpfEDHCgPBCRjwZaw8mbCYm8vWz1pGjXW3uu9AzAWTrb5cngDymrVZ5rZjMCwVNCyc2HE",
  "key8": "56KBS7QiXVKkVv6uyJWRnhwLxBq22PeXcJuRg6hgfB2i1e6gcj2w7Ra8rYNw6HpGULtjMwNQQgda6zaNiHM1jxXn",
  "key9": "3XwdeVZoCHwZSiAHz9zvwv6uMWG5F5PHhtnyYNNbS7ZygQhoMYazrdD9dpt5ytizxptdRUAgPfs2yNyo6dYMW5Vg",
  "key10": "47ajyc4vpM21SZJqQMFy8M6v6UnjgTSPpd2bMv8cwcXwCm3VtaWf3RUEARFyAU5k6dRB3j1h4iy6vKahnmE5JrYu",
  "key11": "5T1op1UVaUYEeUgnr1LQCiVmNe7Tw5Da42tW93hiofoLDzokNoV4sRknqNCV1TuxNr8RpcK1QXr3yvwzvBg9c9qU",
  "key12": "5t4eR9FuMv8CGz9NsYP9eUsWndZQDmK7DMaiLaZxFwgn9tBY7RU3vuUHivziASGmRYn27VP6frkmTHX8kQsaskYg",
  "key13": "4XLKbbfwVqv2hj95dLfCriRXzSAXoVyVDG42ytsJtQK4gJq1dF85JNe1ZDJoWRRiuGHcQxDdJFTf5WCxj5UEuMJW",
  "key14": "2gGatSR5dFyLTXwCZJY6hZw2UPpMHeXo6WyyyygqmvL9ezSgftq2avdQZCx6XjdD1cFnS7E4nexDXtSyWLrgtEVs",
  "key15": "5ST6qW7STdsRAGDPgPonq2VJsTnQ2NRRCRNu5Zn5dc6g1PZhatstFQmz8176DZSV91AvDehWyZzQBUP6iRmDzUhF",
  "key16": "3tHfgbZvyFUYx8tAvQhrsYJBgfbgg6bMwrJAyMbF29hpv6FuGFYA3nJrE1QWDTjMkJ224VXUXADbPydYew8iEhZh",
  "key17": "5QTjLGVd1aB7ySVxXTGcqUtnvybsLpFMRTq5bEEVVN7Jh6CpvgetGvFDiupuuiZmG3yQX1wtWL9ZD6kNLFpC6iK7",
  "key18": "YMKKAHw4c9zEEUGCarautKKYwmdwCp6GFrxumi9bJTbejd65fJLaf2fZMNotaugMdkG9ZdRqUGAPnSrbUtNkoQD",
  "key19": "3veT9xBSs4APrVMgvqAXGBV967jQwcE9ovMH95p8sNVowujw7D7B3EsXD6ZPLcrZAhUakA9wszvdyWamitbgCMtq",
  "key20": "2oMeNTsgnBM1bX2CtYb1wL6xL8tn4Fgivnk4TDm89Z5ELAyiWoTwnWu1oPSHM1ohJ2fmj3RXWaSmVUze3cNbY7Ha",
  "key21": "CiTmBYVTEnXMuXhSaeFd1B4PUjmARjdPYxQvxjrBBkie1R2iHnC9fDKvQfh4uUDUjVkBmfeDN77wCk4WyimPQft",
  "key22": "4zPE61i6ALoEkaT7fRCnS3aTFqadJz2d4fgueFRdqqbADLxZmt8XPqvkHiratm5et4s5EyWcAyZZtEtaAkJEWjcc",
  "key23": "n1pYzJU4Wa2YmBvoSXqPRL3eGd3fGzjnJKQC8MTz7SX39dsWmMCZGqTXpZmy1jDgjVkZBeWZZsvCJNbXJZzbP6L",
  "key24": "zBySEJEyuzXALMH7nEhzdcsb6h64vgAyM17M58kLLbbSbNMEinoJ5eK1EXCnGLsRTQ9DnX4AFUnSE6PoJcRey4X",
  "key25": "2RzsF3nbzaF5kxEMaFkFFi4m8YnnpGw76Qd63Ezp1mktiTUowk4TqySPBMuaTrYH4UrWAHs5tEfZW9GeHtezfZLK",
  "key26": "HYKdYFyCxVHV7S3XNDCgdYaDpASaynfM9sqg1KZnbMx97MBti4vdzeqrCL8yVhm7XPup8Wkd3Fzr7BX2RTTobRJ",
  "key27": "47U2PFv9Jps1yLS6y2KGnSH2PG1ZxvNGkxwikedBwDMDZb5xpRir3YdRBtAbAyVtELcRJB6sJbdw37j2KJMb9xHr",
  "key28": "56g2PvYPkfi8KEH3Gpsi78jHconbuH267T9cd8U4ujiCc1vfr5kFupsYkp5sSaiqJfmhoH7a4YDihJo3weu2cYN4",
  "key29": "45vpsfM8Qhj21zx4GdC7bLciWQX6gor6GLyv471vDbvpX31ZbQaPwt9M2Ncj27sUWVmzXVS3AHHjqtrevbZTsY2M",
  "key30": "3oDP7rA8aLhEjY8s3hnjVPn2ReNHvie5R3BsKeWyQLKdbBYdEBdimP3uUrWnr7VQkkkSWUmotuVRRommN8VmnJV4",
  "key31": "2aNcB9NhZSzrMGN1pHQyFRFrW8La1n2837cKqW53rdEw9dsKi4zk5PwpyXxKZrZFFtVPKYYCCCoiJW6XTWhPr6n1",
  "key32": "3JUB32suPbvvAJGJ9bPtvzggQT3meEficSngQSpgxJGCCw8SKJS6bohrdT1FJBSyQyrFSFoGQ8W8gmGKetek2933",
  "key33": "9F6E5dqNCfVjUYLyM2Q1oH6mqZbmQgVtQxQiwF42zUYASUvE1NtdajCqhjzo5Gf22nP5mEQqGWDP2Bw7TrjTvAw",
  "key34": "4ydXKXqRkRRXWAXayzQSP9WWQK2Fw54cqNJspWCtWkxqpnu3oFEf9eyrXAG5jgwado56AtuZx56vNbw9e96xQiq7",
  "key35": "2vbUHZSQn8x3DoXEhxzkvTBbw8H7VFU1kgYZrXDJkYciuGahPnhAWenEmtid54zRXMUEjKuHsiX7yR5WWgbppZmu",
  "key36": "puvvR5ayHijNajtzD9WDdFzyDLJgQJkv6YsuVTaUipT33sHSMXTpWPHZqima9CUDEvMtHtqVbhjyNXsv1CtVeu9",
  "key37": "jYVmyXzit7ZevM3QauQnRUu3aiiK5X4nwsmAiRSDKBgT5VKjgfzq8aMfG2y46CEUsvPVzXw6v9momjzchz41PUE",
  "key38": "3R2XUifBPwqFQSU8n5V6n5GuFn81Me4jxrByEsjDUTaZguMc6zJgjkos8fFLabbheRE18pQ3VdD5qiKGSeh1VJzB",
  "key39": "626hn6qcs7h1HetaNKJUp5ubm2Po481DZqxXxbvudjjbuhoDgtaC5L4YRHnXbEbsko345tvwnMAY116WgGykhG5h",
  "key40": "4zR1WN99Vq2vGWv3rk6xsR7vAbU9W5JBjvBBUN95dWpaGZGobExznbuu4FsXN9XkTUKQBKwtfvkWLhzVwRt4Etr8",
  "key41": "i4yDNaLaahKMKgs9TZg9D84o9J1cDwKsJj4BTG543KGXh24P13tKVFymBnCYMywHxsdU6mt6pd4fVjd8tuJr14V",
  "key42": "3eod5WduNADhPReGuEpaTvMvbmcwWybQH8kQEo5JKFHtCNF9ygcG2m9bPVmidNBx9Byyia8uJrmaEEC9qB628akE",
  "key43": "2Ct7kZc3uHH8uT3vy6eF6psmFMPr4Yn99hExhRmXqdcKqYV9Tf8PhdHqkcPTmxegMVtFXjNyobKB1prcwGLM6C4b",
  "key44": "2vTSw3sDdSb8oPLV3M2ffirwJqCHj5DV8Y6yPsus4twRk1pKsZ8E4bdwtGnbg8Bx7cyqYFcDVxb46vohecJi4xet",
  "key45": "5RKXS8ntL65tenFYzEg59nyU4Mdcd9oS6yCGitwTSQ1yPhFq4xZC4XQuRxx88k3gpu18jwtxwb63sQxHyw6Dnkk5",
  "key46": "47ycFE8LFjw8ZyMCYJe1EEFtNMpAftroEWMMidSvtGM4NQyXURecVpHMjZCaGsWRm5HthZdfEREdDddZAZ6G7f3C",
  "key47": "3nBywQcDsDjiYdva1TQzhhGwGmzvUNjCmQbGDqhxS8wemBo4TrrWcJZumUdwGYbYhsyNtHoteEwMTtTFYvVsTvy9",
  "key48": "5ahtmv3nKR6TpfEWtwZuYqVXXeFPbDggLYKxLpGGn3EwnVyNzZBzzqcEseoLAjqpew7YC9xnLKpVu6Fb3LzwfB8g",
  "key49": "5drUaihJ8TkNEKdDfeqNuuvxBYKCsPARSpvY5uqArVph3SF6C4huFpFZHHkmZ51Az6q8KzcnZiSxSjdYx8VurWGS"
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
