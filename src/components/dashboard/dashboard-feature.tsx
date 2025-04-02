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
    "3CKuXWtvmqpsCx6GFuDKMr8nrsxCd9GhCUG9br399u7mg5VocsH4qLamDomf3nn4eBWTJWxEM73oYT3bDtcYoohx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5afagYi1yu3a7MAYmg8a2h6bdsc7zsRt3hAYUyAJDrveapUAuKiRgPTFmjRFxCJjPeL5nbhq5AXQe4A8qJNWSYpr",
  "key1": "3Zo1J2uSeZ7weEBsozES3YVCVCjnPXBRgtHqVppZEHw5JV87im7cWRanugwrfbTuYiHJJTJY1Ht2uNsuJf9k4Ccm",
  "key2": "2hLSaMhuvSeupyoNfxYGaGLGLSGdQptRAeNdTHNER1p9CqCYTPLNcWAccrr4i4MiAzYHDH7vcFdWSUeZspa8XZoj",
  "key3": "2AJ7Bapkka9V8zqdFig2fqfauZs4ggPUq52Et9vQQ9H4abmnjP4wwzwQqFAb1bjgeXzH9itRLmgYoDtepuRKMwAe",
  "key4": "4dbHDinyBqntfhT1J1HgztJDnJaJc8NrBteUomxaVUzJwAvUboNxZfDXLHpNQUw1s3ayEZU5wmo8ZM9p8eEXPg3M",
  "key5": "3N61TLp9fQvacDZm65H8vAhZEmNF1npUhMfPxWbdubc88fTqN9Sch9nGnqNWHqfLuZeBAupkxypbsBT2UHUDqWzQ",
  "key6": "5fCXiL3zz989jfP3s5Qa2CJmjG7mT9yU7GQMB3NfYFWbcYj6xXksb4LbZV82xcPNNBgXwKoWSLToMLUum9zNtWVc",
  "key7": "4xDD3rgCtjrCZFpqwm5yYNPArrPyiRyNeBWGBtPiEVPeGQF2BtuMXuft6eYQ5PJvSxHYWu9vYkaawVedQTR6yf6b",
  "key8": "3Ydf4UZ2CxDBpuP4gPWFSLYA39VpkRPF4oiCqbKmMCJnYSpwhqbmeSVDNGwgg8gAhu9j9DkaX17PPZKXVSVQQTK1",
  "key9": "4YzADLVYj6p4guDwurEvJcn9NgRsyzJTJEo4exAQ7xhgM1Chp4K9zh6SRg69uuNBmQRUw5SmgWgG1NQmbqbncfS3",
  "key10": "3zkhRVppZYMBo1qse9ukwcPeLfA1PwugC1MRTULuTCsLeEyoqTZrKFLjLKWdxBScuXpsRKUCKP7WC9iV1zzX7b3Y",
  "key11": "4YfLV9TLV2PQZQocGsHjNqjp3vWustetZVRzT3mPS2oLZLCLWeDvYJP5FjtQWRbqWExFJKWaVEEEQTrgnX25as8k",
  "key12": "2yhi6zKw24vYzjKvxL3MG2tip5YC2QMhgBCSDYv1zzuUoo1FAGuWaUygEzvympuh6z1pxLTH7wxn2yWRFDLXQDr3",
  "key13": "49VgG7EgWwoBB5KiebkE8fK6VHWdkRDH8QqSUyjrJx7S2doba2NwjDbWAA2rbNBsBsf5kXxhDqUKxQZ1mp67petb",
  "key14": "2uPLuwGGTjEYBishvaXJsYiyoK7LoZkgmFULBV4h936Ry11thiGK4aP7hXSAxRLyRfNCW4mnmZXoT9tyTn1krhpP",
  "key15": "5DDqvSFNzfRvBHe1eFzBLN2dq1J5LGufXkph6hDAHMjfUpXNZ8rZqpbLAqAYzV7ucMikGdqAZMYL585a2Cshd68v",
  "key16": "YAqVtia5huUvUHXoN6XCFL7arqvrQVAJcUjLXQoBFVDx6pU7q6z8YYj8V2Z6DpFMUZyYdfczXGNPM77qL3xuKEn",
  "key17": "CZ3N3aD9XVX4NEj4dZRxxVgwbqiyry1ACz64DM7a8FUa7FF9RjsrQr1e5GCwkyDEMpEHDg4XHuuJswdh8M4Hzac",
  "key18": "5esu49Du1175AScMP5YJNyMzyRURWrmkEkGcVRfHvKH4ktVNAghwVpZMs1LU8qQ2z6pEjMm1dqjE8cAhTdGvrn32",
  "key19": "3TJn3y2exUJHvBaDKj4KCTsmXqx2bnkMgFM6YAdouuNfLyHhmpf2keXaSYBWJnG6HHnTe8s1zPvp67rqipWhnozA",
  "key20": "5Jzx9nTyX6FfR1bmJMCmUEFa2xsebgRvKV7Hos5qH2rZSV6hMmtn6PNKYriQ3tdodT48NU4rt15GvTKfwifH64jN",
  "key21": "5qgrbim2BYzzYa98AskxGbfK8QtjaXnj9K4xwhPz9HyydRCS8biZT7jFXpNF49f3wkCKoRP6AsjbfaTZz5Po2D5i",
  "key22": "5VGiox2zqbhjTVT9TegMHrVupob9ENhRZFweUE34YYB2udaqgx65J6enbD2EJiS8S7nuLNNRk7fuaUsLrUNJ5Mbo",
  "key23": "32v3xYyfh8T2xxKYRK4prF7Q7A7cjHfBTkjrJfvrVfuPGB7hJi7pZ9QFF9jmK9UNw43epQu788o3T4oJGHsoDuyL",
  "key24": "2QPpupsFcLw1q6WQ7CHZGDpqK4jTc5psqFeFyfqB5C6kKhYpnMY7rRF6HScZxXgCB7C4NEZpGietFVGYLyV1Wcr7",
  "key25": "575mmira1FQxy5CLDAprBQD6LDfzYcs53bC8bhLKK8feDnQavgQhNNV4vNjGPdz5pAAfRi3PDx8uwdtW1nC5cYDM",
  "key26": "2MsMNY8G2VAU4mJMr12JzJTGyJfo6eci35pF31E6JYVmVXZwXXHikjMfaUNFEWfiJDUt2iyMAiYsxcTiPRuHDghf",
  "key27": "3eNBBkT187YZv6xihZHPMUMiGqMEWQtFK7gc1f2rHZuN4FewF8a3NH4nqb5VW152RZjWFukUzCuJ1CzFtzqjVwQJ",
  "key28": "Ex8rt645je1dYYtcXuRZYpq9u4yHujhpW9bkQJsH1rcHHJGB8UdXZLb1NUNKuL9SmidzdfkGDJSfZXndVy9zWUX",
  "key29": "58wNeWfq2AXyn1i3vX1ux7c9nn8vZE23XraWY8wTFfQrtCYi5K9Y5YjpBJm6Y3vfcKhB1TShTk3xcTbuBUvMhLbg",
  "key30": "Pe8gVQbaM5XpyrmPtrnKSVYvzGRMnwTw5PnumHp3s9dxYXs4dCdBpEdbr7BYLQmq5jFCiAnCvs6bV8SKjjYBZnw",
  "key31": "5vBXqViU1ghwLbrw1qBhz1M9MGb5bLnzb4KRTQtCN8P8FFhZtjQfUGdXc9B6vQYWSv76oqPKCWGS5AyTAAyKVi8P",
  "key32": "kD4MNXLYSjjDAK125EWXSUEJNwXn3a8sPcu9zrsxPmFhZ9Nkk9CKXpHnapdA6A2PcPb1juXuu8LG4hp3WPMPXBC",
  "key33": "MLCpZk3ZHUi13SL21k1SoN1m6pX4u8mJsGLGxgNp14JEGDMYGvdQ8rsZ3ufGAYLPHph71qLy6sZQiBindVqGQ1K",
  "key34": "2xEH9PDaS6KRycx6FdcxbMTMWcQe85nWyBqmfEHQ2Q9kgiQpV6x8ED11XJpFdAv94yV4eu6xNm3DEbv8xm4e2dgR",
  "key35": "ZYNiuaNmgYGozKsvWRrhNxGLVQENJXWjA66pPmfEBnnjHn8meQCefvrJ8DjhWEdfejMKYgs5osnSxyJMpEgomKr",
  "key36": "4esfqND6bDJ2cZGTr5Z1Ef2XL6k1aXEk5ZiZJxJjvUNGHWe17pbT5NUt4eiv4EB4dqTm8K2ymHgq1ibkL6oBep6g",
  "key37": "2dSEZMX7rTfvwgEqqbCJ2CPLF8uF1uTr5enTb6XtFd47F5iLTx7c4QT28dnxyicRjnBmqiWuXXiSjat3zoqovKpQ",
  "key38": "2xZxWN6f914UFQy2reEgQwct8m9HCEPsXtYozzzxLMhMzkdPjjwaF1dxYtXr3uBQvd31xxuaqcnanb2Rm4Z5RSmL",
  "key39": "5PT1TJpiAjHRqjT2T8NPa5ooNTd5ncw78rtjqyYLktW3vSAFnQSJsR1GyE6DurgT97eggAwAQde37PbEnkquj8bh",
  "key40": "2ucadQdp8Uc1GqkjzqqkzBc4qfz11QL6TjC9M6THiFgfWb99z2qyxsbpsMUQZvZcsW6FCHjYGekmwM2QYy71Z5gG",
  "key41": "4nDenUKpbXDb1bWJnpwrxjDfCPcDWdnPd4wNJueEmSgiB9riU718MvViMFypQDuKcdLwpeDnJG8u2tgm32763xng",
  "key42": "7eZEVT3y5kfHpfmWN2y6iETDb1eYQr7DMShMXvrKEJa5cNz59GyQztjqKDA4bgeYrNbgj4XFC8CXYRTGjMQqwZu",
  "key43": "5Hyvr75WeWPfNdD4tTZqaXzBjAJjxcyPmbP4dP8ov8MD1c13NbfEAzSkkFWVBpG9DTESjwbE5yJN1g6W9wdbAtzu",
  "key44": "5QYmp3BNzSrjwr4e2en39m4AjteAhnMv1dD4fs4oJv8G69DNkoPkKtVHvR95VNgrZQGtC2XdkzfvbDrZhskREDLE",
  "key45": "4EqXksqCbVjYarTwBag7Mte9T5RxqfhXJkczwpGyfjRmyXBCmfBECgUb4ywNDsFsmnTGwrn9gkTRqdje5PRRFR61"
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
