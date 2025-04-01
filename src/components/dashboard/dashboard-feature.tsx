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
    "61NtcC6dpDoHPUaPYyhxyMSf9RpTgKzH71Ug1Cah2UHXnnaafvfHwg41Mx8yGtNiGwaPuHznq9hFShMXeSLjPT88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hDkTkiMofkGYojtYGmiWUrE7vPEDhpkVRHhZDy1Zjdt65CTjYkkcHtqiiaF8iMDt5qjFzh7rUaqnQm18aznPzLy",
  "key1": "4qYvuWTtc9xbVE7eMZwk3G3hdHHwQeEiUV3nK9ZjavZPMmsrRvk64tpXxtTHvUTHGcFcWqAtvePq3rB5TKULjxqg",
  "key2": "2jRqCQ6DgvVoewZj8eDg7NrMNzfjYX9frHhy5gz2qie1HdB17iv9L2mVbp9DxwDfTApbsfLPQQVKYt23cqNaLtxU",
  "key3": "3M5Jpv4kk6yUAosA3Eq4FMU32VSPMQPSLXSwRu8gwyjW3QYKgAQp1CDc1t1wFc3Tja4GHJYtv3eUxP43P4B8K5cZ",
  "key4": "5bcZrLh2FvFeYXjbbZS2HcBWfJZuqaNxdcHc39PkJ4HXpqDKWyX4mzVgG4tcqbZkgoyKpqW92RX6EbzRm2VitcDE",
  "key5": "3RhyyVCsAhagkA7u7UTQr3Rkjt7SLMWRN4pebfq9bmX9URnyD1Gq1KDZrkaooHJWL59n5BoGkJV6c1s4DE62iP5s",
  "key6": "5yYu1HdgE6QHaVQuXR288ies8g89qKJEoJdAfVMrqYXVezhEF4KmNUSf4K5B3p2dfz1HJ1WKtJ18FR8K7mxGByDy",
  "key7": "5eqN2jqk7AZxTz3Zde69DewNpyYx1RZEyjYkwSwzFijNK7M25cykMDtfEkuY6hKF1kPHEeyYEQsDTnNASwksYbXe",
  "key8": "5CPZqBnfoYxvbZhJ4sfyDRWVnjXJxTVJ4qAVYuUS1U48M6y5xbFCXu28erKYymVXZoFtxvppkFnFHQtNAtbMfWXQ",
  "key9": "4LkGcarJ9pjPyBR3NaGJa4KzjToqTi7A9CXtLfFo2W5ikYCQTkkGQPmt9s5xSfK7jtDtXcUmZ4H8BgSEfr8SQ3Pc",
  "key10": "uy5UcMsQmFHYgCN9M5PN2VLnprVbFAKrtTNAe5gmRdRimGCAao5rY7wcBvjXGpi6SAicUUYhAm5QuSx7Jfndr4F",
  "key11": "4zTbzq1fyizArm3g2ojRA434r4csR4bAkNjVx3y1zhGPz8JD9mWb7xzzRmGuvjVcetPaaJ3cSX3kLWWdsaJ1X2Bk",
  "key12": "3ZRZu3vJ9qwz6EvKh6Qrw4sDak9npPt4d1XVcv6TiUPJQfgVa69tgoJyKb1GhC7qn7ST4HfuSctLNmRLJyJKA1xY",
  "key13": "4Rjrh3fU2jhPMwJfzQEU558qwDEur1EA7tdY3DAyyH8abitF7e8EV6vq7kwCz9unJWgfp41NxM1bh15KQpzcfVZN",
  "key14": "5MajD5VdVu3pipLPLcA25vik3WqP7dQnTQvsV8p6VgGiFyvUcbiGDu9ePQCQRnubN8FcRM5hAQGWV4kyCNZSCpBh",
  "key15": "2cFZoRkXUSTj6rYc8myeyfDdYYbcgxcDqAsJkeNETGkHyEDp2DszUoM9afxWxubWoQrXxsFK2dKxQ8zSUcMtB7Uh",
  "key16": "eWdZfEEKMbfkrwhEW1GNwq6fcj1cwpYPATo89XZhPHwFikGZrBPiVaAPSumU6xSeWvYmkX2TVP4kCW6Fszv5A6W",
  "key17": "3jkB4mdH4pgKanBb9zWd67DVMrj5cbTbzjKiFnU1TTbhtDyHQsq8Ra1vvZWeQEogyoY1sNcfEUK21TAsyRMwi2Uh",
  "key18": "DEYetshcvrDwZd7szDLmQ4cXMXUVgSxptGVTUfh7VndnXpxrVzqiLPaNY4BqNooi2Zx66jhW4M2BnoGDVVtJwwo",
  "key19": "3ESANxoo31yCGa4T5T4YtYbNdnk9o9CSrrcsPDJdgKYQQ9hUL5mo2nfVMYkaqSgTfHpebPwjhm82UBbW6kC4LWhD",
  "key20": "3ZSXDy4SS9DbJaxWTsHp8RcVvvB1Z7FYatdqq4hGX6XeuGERN8gCDkQMT7iN7jWaTDx68fP3V3yH6ayxKA8oUT5j",
  "key21": "3q5SFpLH1UTxLvDtG73NSoDw1qTHSDguCn7QexvZ6GNNPZ3AQ8ijgtJc8UpLgAmboSf7URZerTdKW7y8BcRJUxKt",
  "key22": "toW6BBZPwtcWHq2Xv3XcUyeBMS7uRGyZq4rUKjaPqt73aFnag4W5K8ybBUzm4oBt899zdcreDLvQVzWMZCTk7L9",
  "key23": "aqar7XbYSr2WT6WGir1mrhWEGAeToxsxo5NMFuko9ZniaFVp1gYGJghr5shkPSppjVoBhZZEChuLW3KvyT94F4m",
  "key24": "3Q2xDM1R5uysT53NM9D6sk8PWt4SHAf3h3F2yFtffLwHWpv6s6vF7VWXwVLgF3gaL26Eeg8qxdNUnf3rTLtAXCw5",
  "key25": "3yJCJDJKNCmH9GXKdnJfBSVcgD9GXvwLxbfVCXyxGkvvc1tu7TCjP2kcH1gNM1Fohz38GQ9Pexp64fZFDQWZTd4u",
  "key26": "5CyAUJJdGDmkywNPSpJBBeNYk1ZhBZynMPEPHycCFFexMVzNqVPMGgWgunu6tgDBZ5aNcGFB1dSsY2SGpC4G7jvi",
  "key27": "36xnywZFa3hASWunh9w2VivkzudjtFiXfwk4HaX8x8Qo7Nz6b2jmf9j9ixpscvRrXtU2VoHbeSxnkwxkaxsnkL7b",
  "key28": "5FZTuGfnZnUM5PMTbPCVFuRC7Yu8UFSFegwBG5WSyWLNSXNJZmkpbHCFikV88aztr1pytcQY3YcQZvhBFXo5gfJZ",
  "key29": "vaz2i3S5TDGdV7yxPfxd5raHzy7ZShipmpDz6kjGhVSuVu5MmShKFrGiUuqmw6BHgUb2pGMoYE3ghkXqZ14xq4G",
  "key30": "33MNX2DdvkBDCb9LnfBDhi8meHRu5fJKLsTiGnqmDuB7jStSQ5i6L4aJss631LrnHwtxTrmWv3CkxqHtUDYzw7F6",
  "key31": "4dRNuEF4CDZoJxNCzLxEKVXXhczf33VkrMJyzkz4Q2CWhXHDyJb6KKKMTEH4zBWtYieAvScupmdbr27GLSM4SLLg",
  "key32": "4xRt6JKQho5pKpA8qD9NgS7axamkz4B7n3wLsawdPMU9GLX8EFteqgyDVMSeL4Hqc517NQaZSiNc1gaJ2YDaD1hm",
  "key33": "JzRa7EmuFDHm5aYcu2ATZghpxfkB4fWK5fRjmEvCaVadCPeRwepNkDuSA1jQkQCUqe45o7TskBL7rHpECZR2fYu",
  "key34": "2o44pZvU28xJ8sbUVJMws6KpHZgtHVfHn2H4cGNAVLV7ZyMGf7Sw11ncBwmvyvyT9wscCsZ7ZdAPFTpjnu88qXWC",
  "key35": "4EjYCgCo7VsfxxWTwpu4GrYZ5PTh8zFNkN9jxBBw19w8fK93yzAzAkayGzhiD7t6L7ASeV5DQLsdCTLQ3r9vh942",
  "key36": "5htHK7AMiGRz4WD7MfeTGgDBHGH4D3mK76KZMovdyLZ7NS8KGMYNE29NkZqrpHN2ETerzSMAEKgRmzG88GjTr4G1"
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
