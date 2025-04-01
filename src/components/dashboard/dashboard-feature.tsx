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
    "5LfUapucwJj7Xe5VawyAixmoSPpAytRU5R3qPm3ENA5aqCNEVdzqvvJbXSsBwfaYhcPKoSux2jkLzJKUKLtNkhZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ngXXLNRsPGkZJhETuvJBJU6J5bSAtNporsnUFmAmQcTvVs5vmHD2jkMoMjbwYQiYPfMSQs9UnY43Cp47aGkrdw7",
  "key1": "3yQAWFSdVyDRqiua7hhscno3g5a2PCN1s4mBGbHogcLM61y6BwabkGPQXCBLKV5s77Ch5sermNPsY9Qm5M7TuwUt",
  "key2": "2oW59pn4zLQKVpHa9abBE4QWtFimrhL7bDnSxh8WYn7tq76gFW4WzCgV9wuR7jLgQNTkkg5GdCxtqDmkn1uWfSfJ",
  "key3": "3CeVPzYp3aXtd8K2C2rcB2TQUBifaRmW3h9yRyoVyQwJ6gf4d6VEzSnWfoPixCHwqHbGh2fQMdS9P17LaoUFysXD",
  "key4": "2DrH6SDN7ndPRXBMcana2ksLqc1Kcey3qTVUtBKGki3fGUvk8REbG8rvD2uexuYT89q15jfccZKfxvW59yomkV4W",
  "key5": "5itgvbqPXj4cXf5Qg5rwyeSrgnPTyP2Kp8EXnweFidYzcHEXh8d3piEvvvacQxLszpVqGoyQM5ZAeDiXYSuJCpVr",
  "key6": "HbRLuBzfD3sA7y2rSfw5zBw3gZYznSGf172hMAaHkg3VbhgPzGVPc2tgCmanW97r6ghD1QMm2YoLUc2TTus255P",
  "key7": "5VntDFBVv3Axgjdf64TL4HXeGp5a3fft1qzj6htLdH38idsPbQvD1a1HtJRazX5Angxdx8AriUfP4TEWGb84JVxs",
  "key8": "4JVk1ykeHfZ4zbQiEkQTGvo4G2MbqyUBM7XqRkVPpminUAoTHFY5DhGd2rbZtBeperuWqZewrLXsPxEUm5wkuhCc",
  "key9": "WwNFFN11qHNuCMY5uTwuTM9CiqmY3RuzU5AmcxGKo5cLkcwFpM5AaeuohaEw2JUSTFnRoiwvN1T6xXpNqTWrSzA",
  "key10": "3SPoM9QYkQvRQUwZ3ctBaXwigzne2DWjm8mPb64xsKNfyeZwoQ7Lrz4L5Y3ajT1WTsit8LenkE3hcAWX6CAfsGRu",
  "key11": "32Lynd3FRyTfNA1vZDBmQFJvGjau4sWN5PknaXnrULF3A4idexYYba7Q651SJ34wBSSCF2G3qx3w5mSsxTSVaNMN",
  "key12": "4wRj9SnW2bMzU4HURUvpC1AMdGskU6KaVfJQwayf9wGEYMDSYTGW8ct8p1UjHW3yVrk9SGPQccs8F7VLy1WzfY2r",
  "key13": "66YcU4yLL9VUPdGrhRFvKSfNP7KEMJMZSRAV8T3Z1315ifKg46sKkRLhEnuFQCGMbtWE44NjuYfEaZJQSGMUZmaK",
  "key14": "4YiyAu5v51ZrBUiqR4VER3v7r6q8YBjdSQX9jtUQr2ybdCAy4QiCoTnyJwC7UxGzMfh7oFkiG8B7yokjkxkkzFtU",
  "key15": "4hd3CHHSa4wv6wxTU7MWNg1cwkXCMhBY98siDaF6jd3jpqaDsupmxPpdiFf6LiKGkFSEA3efoGgGhdKZQb6SSVJy",
  "key16": "3Af7emccMa36paUgBsauDtoPKZE7Wgj3rvoat4wo3ZLY5fepWDuwGZhtFwZDjiVxF6j1Mk2mijpMxQTNpRzDpmBQ",
  "key17": "2g2zGqsPcJ2QBSBWpTMdg8KEdGc5T5RodHD3tdGS8r5nJhmnL8vYDxG65P29tq3pZGtw9fbhnCqnPJkjc7AQiHLW",
  "key18": "asiiX5ZknGwndtXHGWi5YwDVc6LtMthtfc2nK4r9YfZWRqih7JMCxxZjB4pHgQ6stnyxJSK7g9nvLrqkCXbQ1M6",
  "key19": "5YRhTBuVXxd5msoDu7kZZEc9E2t7BoSSr4TvEYHESFdsibx1gaQ4dENb5v9ACv5cL8GbeF9kqZNdJHxN6Z2a9tsA",
  "key20": "35dGB1ipGAVPh8PyCbZC9DFktzzdFFbWa9iVRys9qcuHVSAbJ5isbunGu365iJNppkBubdGa6o4ejpDrg9urpxSz",
  "key21": "5UraenvkQTewRRwgc5bRyZjbCxfX77aABTuavD2nP2PCg1QjdMg2dPVEdj5rd3W9NvFJVZ8BweWKdMf9fQqxgDyn",
  "key22": "EqAq8wzcyz7cmSrKoRXc7LNV47jbJuMGGM7GNDnZ8VtsDVHSvn5NLF3csVF2dxVUQqAQvw6jCw51yNvmkco8PWL",
  "key23": "41df3BZHRyJBoxncypspheAjaqfWL5SnpqcwP9vnyT6d8dBdzLFhK2643mdZ8AEoFBkAMKWjbtZsup2A1x69d4zS",
  "key24": "53Ae3XhdZFwbdEHoT5EW6kPtvh3oWnuohEhVo2fhfzvN36HVaBJddfUsvNQTKNMd9jptEQgDHuiw4722iGgBGJEx",
  "key25": "3gb3Ewy6pVi4kBZztMcPbxgMpmv1nU4fqZUg2Ch318fpNs1obaSWLWMamtGJEjddVYG1NyoPRYeXzWXdWiLnFQn4",
  "key26": "7x8YE3BYj8PfdKFW85ZmWq4LpYsfBgNR1bxeaV9EVnT9XVatmW9ERQhd2WnsRvgQ23JQe17XCzpwSyP4KkQfdo4",
  "key27": "22DiXQ4oHCCyxfrPyDPN4yMfJLcpCmBCjJu9C4nw8b4agEpfN4pxZrnLkpHgxfEKJ6u2XBv4GqKpFzAYHNenh992",
  "key28": "R5sn54fuTQcTxNRsPj6AAZ6DVHs7A3jgJYfxZdXapeZdq6suk454SD2Y4CEh32HRgdRo8TTsro5BwwgyT2TMwK3",
  "key29": "2mfMxRcWVkv4Mq2bjdH1P9ohQcB5LgBkdrmL4r6ynwRmGGwJ9rhqpn73osoi1mromG5J6XpnKzVAGLQgQKNCQQH3",
  "key30": "n8QFvoCvRSxhQCe8Pdq8o8jtrCFom7aD5yCAvLyKzSzS1tCEE6PtXC744WGphzN8tHA7LsegsjUrVPjj7qnwPBN",
  "key31": "585L1BMbHHgue4eoQ6ScUh81RCkPBoMVnQmvNQZwZ5FjtcZR6BJe5qj7pUWdGL7Zq7oHmro9EhU3Zzhs34FiAw7c",
  "key32": "3zav7DTxVdRmCZ2wWhHZvrPr36X8Ch4Ty7twxunyu36DHAYeqkRB3KqPrgfkT2cvvz7ABAcFGJdTmiQKh8GETYMH",
  "key33": "4Trh7nMBVBSWgzNAqj587EBaGWjRQtJbq6ZBgnUdyweX5tN4UQzmZ7J6aoJvSpEhgJs2C4zvvcrAmvBJAjje6t9h",
  "key34": "cM6Ai7fwMyik2ejJpti922WL7AAgryGfCaqaruis3XgE6ukizhqKxGdLTDpcvPoQhBM6KViCrByVnbkHUChNTAN",
  "key35": "45Y3aKzM5EdLodqPjaDsJsLSZb9vTDJvCXi2ugy1KMD7jtR9vFqkpEscVoSSYkLeCbypfpCZA2duCowwe8Ug6Nry",
  "key36": "3t2bj1XxgyLjACb6rMeRxJZTFTDHH2BG7gsDTQB2GUXyYYqgAe3UmYetkTYEBTqpd2WRT4iyNV3mgKyiKsR9vuju",
  "key37": "2LkyRpD83TKhnzG5hvPmWiSJveYcbwFQd1wL74UZqFAJK7ifPfHan7sax6HvTRAniqpjzyGdpyHZicdpHWANoBSb",
  "key38": "5tDYqXFwYEzpvtz8FLoDSGshnghPh8U8DM9wihtoNJSQ6N4gEAsiuojWxfL7Dq4t3fAFwbH7YHfjsgcZga7PaJeC",
  "key39": "4z3xiT9DKGWjv4dnqsj6vZnxVWXMLwdGrLpy22MPzkaZFA4mm8bTQnoo1dRbwTsiTCi3TBARWQHzFd7qetSQ8PD5",
  "key40": "2NJtydch1NELMpJn3dvdRGNP638QuTri2chUckWvmreUQonmeMZ93VETeJuLRn2GPBA5r8MqhgfJwZg2U9q5Y9r",
  "key41": "25EsFRYfYXGn8TwGGumRK6Ms9RHpUKs9Gc7ZcAgioXcpunzRJnYeUGxRTKUnD3yJAuHwcbj7ipdWriiNPpT99mr3",
  "key42": "3Gg4yaJ16fhLTmtRdqLMrMGyuHUFmt8htwvTQddyWv3yUbej1wUKEK3qp6q4PcQzctiWmTVvmajKtMQMUKCC1B7e",
  "key43": "5X3kQsjscZ5EPATAk7h7MEQ5jKCVLfLi93npEsVkE9Mz2qJKnkdyd42X7NVnKfTJSRBQ7i9R5mbJcATtB94RDS7a",
  "key44": "4nfWuQiMtGez2AWexu5EuVUJ4HQvjY6vR44awj3c8m81p7eQQ3iNhdf7ZyC5fHxQFmeYtph5KqzB374KHZeQYT74"
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
