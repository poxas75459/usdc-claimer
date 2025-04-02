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
    "4mL9omtMhLjmRMDhStEXBHdxjwRmZeYjycUJDC8viGcq1duJFjWLiFpra2ihCRmiML3zTu2Rv3DiqrHaJk5gu2zU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24zCKp5hdeHh17W1ZRYtTdz9dwooPMuin93ERYNnaGLhCahZZGoUGpsaaxEhmxfwjdxt2zb4yMybK2jQa8Z9B6rn",
  "key1": "xVkvSFzvZowmGpgGkXGJ5xjfqW3VUW33PnwyFutKJjvsTE5RhQ6Pym3YtiT5DWjMtgupc9vhz2J2ZC6UazC7CyP",
  "key2": "5f2G9CsPjiich7CJAPUHFnRvpe2bkBRFLe4XzgEDNfjPms8ciMngQm6vr38gcCRt23Pxx2JtXap7tTZm7MHEj6RW",
  "key3": "4tYCzmFtfdTau6U39Wvg4QUe1Qf1v2v7U8713YZg3PBK33zi3NwSbPksbjW2TpRCU1QEbnE7ocAUXY82M2icJHL3",
  "key4": "3yHpocAvC8QAW3gjeKeUU9dWJ1PHq7YPDmwnrBsGTKhJk21g1v94UYxgpKuE3nehdtCNx3Tm3VPRQEnzvfWwzhnc",
  "key5": "4SCKLNP1qVrG5tgiMik67bgqs7ADgywFZLoQVvFoYsgtnoy8hPrHerbnCyGbir7h3rLYjrnztatZPf4RbmghCx9m",
  "key6": "pVPLhMcucx1n2oShSJZwMy6hd22Ctt1yFQNvzUb4zm15YYoKwLewbQSZfChm2WVsw795SqN73aC6DxQJkZHz6n5",
  "key7": "C1fjUb6a9zPzxyqG1g3RzjcWXCBek9z8df4AkkoSCnkZYQTiB8RoZSy1YhqAEftDmoygxLALj3ezxVuMZBPbJ7y",
  "key8": "5NedxiWXs2BdpzRhPLjzZX2wat9QVmUxamm5Wd2SjRzsmcBHRPkgukLgJkcAzgobeqX6XL3PQ8q31K3VqU2gLZ9D",
  "key9": "3vsFVANc5E4RbVYqykoEGwEB35T22PfakDx4BmCtwmaSwytWdxTFkYGdf1fLsx5VvpiagZZn4TmWAZkNubrVAE3o",
  "key10": "3MMjVUHFfvRK5CVxuBPGKgVS11UMACgCsjBgw3NamueJMJwcDti3DnLsENVJsHJnFhjbjYbw55LYJf1BKs8ezPEE",
  "key11": "4jZAS71XbwJz5Yn1cWeocKfxPvHyqR13EKHJ4NJCY2TVvbb4amHw4jcjE65vmbGxeruzBmmwy5QL9Fwp7j9ivdCU",
  "key12": "5suFvuyiU1NDBViT4S1fFhvxP9YtaHK1wZNb1EqwGzAqK7WQU45k3gCcWhzh4DdvRzuMhBLbKSJeDLXqPwbzZgAy",
  "key13": "22K4YYqCwya1WLvjoWqirS1jkuF4eW9oT9CDaSvnFg8du4ChcgUmSzWQ74BYfhAHNA4792fS1NXP15knfTA6hzb4",
  "key14": "2JLaScsi2a3EMjauNtFtcYcfeC63XnKvoLzpZkwTWMPUAFdtZ3MzJY25Me6V4f7JVquVNSJvUp7MxnBVqF3Scwk9",
  "key15": "2XwDt9yEfufua2mXbpU2giT9xSNChLNbq7ZrdEo5pAuD5NGC4fRoP8zGEEwGLesLVBFpgBv6ndSEDDD75sfGmfjV",
  "key16": "2w8ZjnN3QRPJY47nrwrq8zi8cUeHNjuAPSkhfjfP9NktS1h7psnNmVxXnoUjpZuU57Kq18pcpmxqY6Z9kwCr9gmu",
  "key17": "5URNT9oMa7yxkx9qet8g9oE1imgCUSokadhw8BvG81kR5wSown14hKDkBkqJFURC9oqVBmW1cZ6ZoFCgJkJQxCF7",
  "key18": "BRfzxdgKswvyWYQbNn1B7ZznQW96KU6Sj4cNhuAJKXbzHAE1PLEa3xZ5cMYKhe2zrf3BEdevarZzjMw5t6r5d1a",
  "key19": "4RgzENEowNsj4N61RPD6QGVrg8q7YezZLrPGucKSNDacgxe2NEfLbfcgypUtCdVU1L8RwabPnLVKFt45EigBD9eM",
  "key20": "5b5tEsnjBGqiY9whyVVj1a8KcWDVAYS2g5uAEiXXx3uHK1fs1JKoAWoPh4mafiVyTdrw8xqu1pFFVkH2aKo5fKnF",
  "key21": "5n57RptepxaBttqLvDoiZh1XAjiWtGiohrqyKX5aSmTPaX1TZRMK4GtSt6XYzKxpLWoofKttuywMymxf5JQtRqBN",
  "key22": "2A4x3xNVqq7eJRn96bCshMeR335Xn6xB9EZR3awNrEcEJehh6Auoa61zV9ehtbma9jABugkBrFuG85ZCHBoPTY9c",
  "key23": "4Viv7GmxVvzzRuw3ug9Z7obxWEghwbp3wejzoqZEEVCApxf3ZNJXoowKiFkxpm1TPiXKR7bwiurB8KsH9fDjtVHw",
  "key24": "58P4Uvd9arLEVhD7mZEw3JRRHUFWn7srQrCMGSpVYu5tApD3xi5iurzEi8MZuEJxHeEK6fhhKpfNUzuM9iykhzz5",
  "key25": "4pPP1vFTerFADKWZRe7KtYPVV9RtSKRGby35MbwzTgPUGnSmNMamePhyScCwzyUohgDmMvFAXEr2exDNvs3XvFaR",
  "key26": "4M1JvQgxseuEXPSAWk69iq3ZcqCb7NY9DcdyX7XSwZxGPhsHgD8q73CkY7LMnLw73raywobGtN6BZ4vFTU8G8a2H",
  "key27": "ipetLYcFWY9zyN9GyzfvTN3RnF4LbrQivpE8tfJsUNVJv3Be8xJcTZjMr8L8P4wGgN1SiA53co1yMwzzMvFvuJ2",
  "key28": "5S1xZ52VHwDivBfX2MgHU4BVJZUgxcUPJG35txVC6LVTKE3pVHLL2jVybYWhy3kmvLwtzNw1xPaNqv5VePqYbCg7",
  "key29": "25fBkxNCoQH54c4ykRJQEM3hEsD3vcHk5Xorf7UpDP5ugNa3aV9Jh8ZMyny2Hvswu1274TVxekGXifM71ZvCPec4",
  "key30": "3QZzmKN4AmyWUFTUtX5xJxTbQWDBUA55pm8ZGTLgNzdtZGiF5QiEuUsux5FrMAepkvZ16DZJugWG2R5BvFJJff7E",
  "key31": "4wvhaLDv4ZfMK2yet9yEnTHK9LUF6CCg5p1bxnfuYTVB149AGYhF4wuJcDjQtF7s92TXGxNTLnrBFYaN89vyp3ZM",
  "key32": "5WTCQheLEFhBBWFpCrxWjpXQ5wsynqYwEFvKCcgZhGyKZXDpNMrsA3j25HQQTo3SqCrTbrwBSXMjWaSfuUFJ1d8o",
  "key33": "6hS6qcseP3je9oSU5ZMa9zp7xWxH2cKexYKyMx6wgdrxELXPXRTVHi9yyvZRMDGdwg397Pf2UYWDW5qpZK5t5FA",
  "key34": "41mtPCdNosbyW7GmYt4Vh8H8CfoqzV7arCJRnaDT2EKcxjaSXbchh5DjpAjwk4KMiYpoKxBbTRou9FGgqMZno7t9",
  "key35": "3V6pipXu52ysoVsqJxbm8HRJTFAc5sUZFdkmHVbSvzCNJGGnJDKCjtPYxUn7tDGNLWFY1qYmmi3SpNgDNE7VeAqP",
  "key36": "2rsCiiijwXaPJ8YNrKGr951v5BGrMh2Z6XkkcnsQEgChtEbWgveVqgnef7JfA5g67T7r9R4oVzcRR7PwRzXGh75t",
  "key37": "42tjAZnfA78CECbb5pzpubkdJgnizwHrfDj1G5tf4BuSWTZgXTeGCs2A7AZ7TmJdmHNJVmsH4zvzJ9wZAWkUAZgL",
  "key38": "4pyu7hPbDcDTUcPSNgpzNukffkc7Zr6mpxc6msHVs7zZWyCVcmGM5j2QyYR8Hvxn2AZy7EcZBvgJ1XdDjTKpLNpM",
  "key39": "5yksfhT9Z6VxFFCqgviZFuw4XauRAnwPr1mp5ymyE63s2RdeaWZCkNnAbrNMhyqh4NX8BV8uwTQ6n3R3yvJGdfCZ",
  "key40": "5cnX4KFo7AyTHkyv3qAZZ7BJCh9kGy81hjESwYQnePNuxqJZn8yB2Xuat8AyyojGHqwiHuzGKh2USe4s1d7nMdtG",
  "key41": "5t7hZ3SgjuAAB6iGVBDZTNi8vXe6T661merqKQD4rTeg8qY2Pmeb694Erjnu7CURaAJ3dGZAyJcgrUD5zXfzbegb"
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
