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
    "5c1tMvNnH5wBicvzi5bKqLEKS4k44nFceYWoFZmqyaJcmzdwjUuWiiXKuQ3Gwxw7MAEXAMAv1dTGa6pW6AZQ3HZo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C8fEmMo5bo4VevkTeEj9jcP5c342p5aPY21m3LDba69VvYwCCArf4u1xWe65sXyyYYvg93nyTgFr9nSuKipHut9",
  "key1": "G56ocPn6MktZXtN2bBR4hV14emCMakbBVo47ozhWoLgKRUJ9349uT95nXM8vL5v6Qc6eMS8DaHLKT62YsgsaKJu",
  "key2": "2by5T7DJkbe6fV2SjDz67r7c5g7oSQmgebjbkWECb1TuCsWpehEyBf12bpzhK4ZQPZDMVYLpvwfLojiUMUqW2Qu7",
  "key3": "ACT2pd9Av4nuRqJHzbUVVA4UBapDymD6PBr8iDieu2GQQL4jSEt5tFjCJXvxdQFSYQyNTvksDMDG7fRroMUScLz",
  "key4": "6E9E2u48iULyaCjD2MU2yJ1jCqw3u95LLiHSPcyGUbbCS37cRsbCEurv1MsmW9DMiWUKSb1boemXmaXwhhAukuP",
  "key5": "ua52WP34yPf77Wfdx126iatMXKUwgcTyY3RXM4ry2owuHxMrWr4uq17bwJepk1Li1dxB213b1iYCLDJhAoQfpbB",
  "key6": "38ih75QzSkfAdMEhmYsQiQohSFxSGa5SydqYU3SJTbCHozNgDYrsbY1TmCzDzFqSX8u1bZ21RbJBNenUe24LiACX",
  "key7": "5LBMVrgqiX7RwdVotKTJsVaB1byRaU1gS1Pke6yFoXhaMPwwJFC4UG1ovV5V3qSiGiCeo9RYSQJFdUTN9RHiAANd",
  "key8": "33FnzFxKz48FvRNQ24YF1ZqALtgq47zHWecMDJ6fwWwDpYzaH6q7zBGtYpFw3MgoG9VYsUiQHaqRWmdwJCDaqB4t",
  "key9": "63GoRhvJRgqmmkVXxBLZjeoRBaGKFiXzu3DvLejrYKDysVeySFy6Djq8fEWSkr2SranqNN46KU3eFXfmJ6Ufm3mA",
  "key10": "39g41qtW6KfdpFNbdQPrS5jxZ7i2DwizJSiSjsU3Q3P1cwf8TP3ZDuprDSBiSuhChZNXX23sjvjspwqtW9fksiWF",
  "key11": "5ESuDWvckJ25frvDy6mZFz5FVwruwsSLJ98fHTGak9p6yaT8m9TQzgcnaFrXqfNzGTat77UVwVqn5P7v4wFGCFUj",
  "key12": "5U4fC4UWxv86V6DaJYdmAj4fggLFfWJhL3UbP3JQfGgW98ciNpY2uHfwM1sSX1FCWFxLSNmVxdM45mBELPcBxMiH",
  "key13": "3BxmnviKCBWgfZyVSrS7d1mJjXQNhCStbSrw6k5bnnYSpRiGdocbUkTeYuCKiQ6G6QfHanL7Aw676itv5VhVU3S5",
  "key14": "37gEjJKuSHA3tMQ1MP1epC3chWeLZiAijMori2v35ksQ7NQ8f3tBZWu1G9VLiFUzxmMeqncsf5H18BXDa55nq9BQ",
  "key15": "39Wi7a2CdDrXFus9crdrQBRiMXz7BPAhtbAwmHByBGya8NJSYWucgMmUPJMtmygz2aWeH6ihiNdYat6PXJmJbJKK",
  "key16": "2WT7h6ygmVt6gEoPR6e3DbgrUwwS2zQeQhPDe6tsespzD8NC1djHf92UiicdULbBukJoHedDgm8Bnniidddwqdzn",
  "key17": "CJohiiL6Q1qXNUjZYGYTS1fvwiFrnQ7bQehsXiaNYdGcwQWpPuMjrWFEpNnQigYh6vbfeWNc9Mr8RMod1k1rxzE",
  "key18": "4xWEM27KrxLAqxgwqPmJr9FBKPrNkcrrRMGZauMBzxCbwXAHnEvNurPfH439yPt8t4J1bJFbLypQLGBBohFcfM7v",
  "key19": "3mGz2g9ubaxGqj32hXsiGfRAKwz43p4wrKZKfynZDuZh3tJi7y9DNAjNmBr4q4KT3X5uAeSMtcr7bf3G6n4ip2Pr",
  "key20": "3tuGTBs7HR5kdqaPmMupGhs2coLX3A7r9GrDEnTywUPgs9WEVG9hbcM5KjYQ3C1Qzg6diJ86LKxwngRCpvqJVMRe",
  "key21": "2GvNFuJL3BWMsH4xJ1L5mvLYqwq4HwNBN3gQsG6kLbejScWAr1HM7zaL6f3kTBmHYxkqAuQDobeCDomgPBzEHp4G",
  "key22": "3TgkrnXgzUE2easwrFaTdouc1GJwzct7kdm8SJJQ6cQGREDbFaJ6vBBPD91WHHgPsV7uVBWpToVmpc2XNYcgsxH6",
  "key23": "rVGeXJ9qSofvJwnYsVde4rnWsYkF4v7afEfJEH7rFxG7T4hoCam4bFFoPC3bQQGuce46FCLnZcqH1kZDatyvNwS",
  "key24": "4iChBxiziFdm6zFbwUpfLAcgzWGx78MdZvVdKA6RW1KXhipUR8Ydzekb8bWjHWzJgz4LTqc1dYnR1xW15YafCksR",
  "key25": "ehwZVG9WHTekwcWThmwB3D7ZCVY2h8ojRfZY4AtqvDFfis89eAnkYzFqWNPJk3k8VVW7Nn6pGXGveq8WsMxPaWX",
  "key26": "472rR1pwGi7hiv9ewXSZhPkK9rg4wHouXcbAEC1b3atgn7EeAfXV4ch6LDshZX4UuQknKf38i1RGqYfYjwaMKAB8",
  "key27": "3mh8ePoFiBSJJRNzPY9XPCBUcKtpCYTF71HWZny6uVkQWRiE7UJCd1KpxeYTkMSigXYmG1wV4KR2c4N4S2TGyEkg",
  "key28": "571J9sYd4FYf1TcxazQ3HfcfZ9RriADZNNFvqjV8VsBHfzz4KDtARASnN2xv4ZqmbnuaCB61F34CGe4v8A5appVp",
  "key29": "32J5gCTV4GKAtmDuyK1asAPr31zuZKmgPHcF5xWxxQPx7es6hLbwY3aRJ8UbvJ4QvCvi9UMnvsDgirqwfPzwo1LJ",
  "key30": "3Wfrc7zyjYaXqTXPyDZMRdajWSiTvMrU6iuvpS4VryzdX9x3yZkPKXG4af1u1YsUYCxCmoE2QbLJVCMmRdT9toJW",
  "key31": "5viPdAursEdbXKfm3k3Aw6CT8B6Tu1iFvjxXGmbd6Eejcg13bTV1kbe82SaseNNJ8AMCCNju5BmXS8hma9JJMR5D",
  "key32": "9pW5YeVTGX9w4yxvPajiXujqxSjYwWzRfKBjd9w7G6gwArv1Jj8EpVAYwVGHD36RG7QbdwDsX3PkW6MfppUdgnS",
  "key33": "2esn6wvucj5FKi3UbGqGCJxQqMskvfPd1JRTqwAL8o4NvFn3X7EsDawUCDFv5jJwRiA5J9aN7BJHxFxkrBNHfPXL",
  "key34": "5ne3Mb7fxkfFoyiMBWXCLctWF1hjcyoYq8MMiSn9sXNh4557zGztv8BpVqkmJEgRy3ciK85idM27aqxa4v4FXAit",
  "key35": "9esiCdSUzM5KjuNqpjA1udVBuTsA9Pw5UxQghhd1oAsMB8g1sp6qYAyH59mZTqJAyov6b9QB9gk6GsL6T8DwHY9",
  "key36": "5dtNJVjVzNtVqXwtYw91fhCuunfaimWYJKXrChdpA63RBdu1kT1YVLE7jhtHpiSQ7WdPku7nzfANxgieMXiTL78n",
  "key37": "3h1x8oJ6FisDWCfNyjLgUA2iCboEJShXG26cN4F4aZCmkZFX1wHWmw252GJo8dx2VBxocBnxNuqNRSAXCHry83Ey",
  "key38": "3EHteMDDvQ555KSdeX6ZbH3xth42V3VMHHMvykyAx2QCr8EbTrSiWHaE8kw7oskcgHvLskYQsGjEvtLdN2622riJ",
  "key39": "2JbtrQu2iMeGifv9zhHXQAb6pBDX4CfdcKnYpauCNb9Tg4eLoCYR81UCFAsT8K223ffMQGJJz1o3tSwzbCJ1gfN5",
  "key40": "3eCrmqUTLt98H43ncJnDKpX7FkgNxKbjWYZmvY9FMoq9tGxqoZJ7PiXPWVQyYRqPYZeNCvMe38pRTUoEjMwdCcaV",
  "key41": "pJPbH8aTZ1F19WQ6PshgwSH8mkAw8q2MWrW8BGgh5KKFJEG2xQnYE8qSKQVnuNrjCoM8didmTmZdSvmbzBZwSeT",
  "key42": "2wPwarCRhj8cpL2Ls8YZtGUg6hQ3xfEKeQoKraLfiizUVwVMncEGb7VJboq1HBVgVB7dqkswjZCz3vGf7EWGorhz",
  "key43": "5WLoF1HZt7ftR97V7kHHAYkepwkW9TxcK5rttnfGZiqvtajNJ9Zv9PJTH1JbUxpyeEALCBNV7ydqdheZcynsR8Fg",
  "key44": "3fVvA8rUWcRYSiT3jZDaaWadvFD7VsKP89PAANfap2pYwLDJLvHPgf8dWLCL4KbVUis17grPz4KC9ebcw7hZXsNj",
  "key45": "3jXvhoPCCwyGQVd9j1NKVPrAc7uZ6Nma26jf6BJzzsE2BVbzoQPSAaXqoJBpv5pxe7g14DjvGoPRAJEruyfg4u52",
  "key46": "7YKZKa3ANSxh3YYNYajaoP5L63TwnK4aKDUhVfnkv5cSqsQgq5pA8oRXWc4gsU3DzY5pqTFuz3NgbeZiLQPNfgN",
  "key47": "5GCZFdKhtbZZNHvd4qWYrmPFjyKGs6p4cTBYxHh9U15JE33t9WsCoYyKkAVVJXc6uJBeCL39jZXMw8gVPzL8sWvx"
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
