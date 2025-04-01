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
    "ejJH82VXvLqBx178GUvXdZ7dLTPeDRCRcKgcfPZmEFm3RSD2BWzyHYZuSb3xqbd5rBNZLoqSnT55jQVoUUrYFeT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41M3Zi6p3UVJGYLycGwW3ito4Pj6imbmQAnozZPAxmbqnVe17x7sBWxuKWnMdcNVHTpXX34SCBica5o4WUMg2zo7",
  "key1": "2MTpP31RAASEhoRpeQzT9q67oXT81EtbDV4kaX1erv3ipNddeT7UTyfG2H655cWtsa7M3NcNN5MszffKjdfPfkgb",
  "key2": "5Z8dATM2cPhS5Rb2bA9WNNj2wkUnaccMEkfAAzZVdU571UWHKv3TYshgT2fanQypkxfxk4ioos8aFjLvMUMe5Cik",
  "key3": "564JPYk43qFv7v1CWsdTyDaBNsHUDR9G12ctZmQjoFvtWq9k2N2ZC4T1V5UQkACa5LjwyYVQaRxrohtpZt32sWgf",
  "key4": "33ePn98mHj6hQZsVFRqZcxfAagRoQ1XQtwTRe2CyR9SpjdbWiytQJPKhkEWKaq8ECz2ApZEbhfubsmHkJHJB3syt",
  "key5": "3KowakW3x2goEgjusKs14F4LV5U6FhhS93LdWSfYdiKuMmFgt9Cb5NhwaR5M3G1evDznnHYgRH43exN1btK4Xz9R",
  "key6": "4LgVUXiUmzqAgQVBRpxwRZLVztF9eifbTfLmDegbfKnXTCbYYd2wnmpPcvLqLcThNobH52Le7Jx8HXqD2Nrq3Wq",
  "key7": "2J4ZE7vW9dGFdTty14BWhLsijELpBkYVcAt1xtvHFA7LctNjt8QTszVHULVui6kqWsjVfBFmf6SKFibgSsrJZ5rh",
  "key8": "3B87mUZT9ns6XkzPsizg1UXWrG7zcBoMnXAFc7ZPzEwRh4kutahDH4FjnoxNbUAxqKUD7CkbF5Q4Lah9J5DsDqSL",
  "key9": "3nRs8jNBgGT4tjaHX4gAKzzzbiskBFeCm8mCDqgaAWCd7f7QH8fdrzk2QVNVz3LmDtLVJrjMRHJXqzmyMzSMCjYG",
  "key10": "2YRarkHVnVgXCcf6vTSa4865qqbS6afbbUxdyxvZ5yiTKBgGMKz3J2b7NSKtFfHYoEvaQp8oTN6vSvtvsK6fAkUZ",
  "key11": "3Te9Ei4B5K3Zud85MdppaiuxjmfynB1T9aZC2zj42ca5iW3dsRRL1McFWfh3S9uynyv8uhhnjQCWvoXKdXXbsvuw",
  "key12": "25iG7SNS6LnEsjPLxGjeWFnw4QHCkRWe8daS8wvoDn1KXhD8HADhyiCWgp66qJ2rsb6VihfUcMQT1QnYCKYpKLu9",
  "key13": "sPwbhm6JEMtMyejGe1oNdGZYKNGvUuVjuWMh4NPrWSNyyzbqUb8AyTbQisqG1JGgc2KdG5YEs7ckDjMaGZxK4vE",
  "key14": "uzTuQTw5tbLUMN5kLodDPUsTTvFTc8GpJ2mDTr1Q5j2NdhwBwgysww7L8X6Q8N6J8Lv4L6PLsfqYRCspxXXo8uY",
  "key15": "38of2k5Yym1xtdrDTvKN99j7o5WZJtcQzXUa1W5pvpUzfHwv6719idqbsziZLn8oLntY8KmiXkzmURke6SrZWjRW",
  "key16": "3MJ7tG5kNVsSQXh9hke8xjiyp5iXAzLNrajLnghKA2hSC6RzotE5YQxhvp3wHjNMomkPn2xrhbEWZwisYfT7zP9Q",
  "key17": "22YSmFqF9SWuFE43wSDkcMR51FT1EvdvajhMB9bJFFdyH1kQiYnwU73HEfBnQ1GFNusYKoTRM3W5fTGhYKu362Gj",
  "key18": "4Q6vb6eso8c7pYxdcHd2qAgX1YpzPuBYhW9HRw74UGkNG4uYDx6zJYp4joANKH551rLkvxs9A51AVxg7KGeVdA7R",
  "key19": "4mmeRFWe8Fq85tZGcWbavNErY1gJjmcKmcKFXmCA8andg7f8Ms8uD9bLPQaT7L2EG6qdVGpTDBDUCKc2qe4uv32f",
  "key20": "24Z7dNRkM42PK7YHnNfgLrPb2FXrtyTDQojhN3gDnLUyeiVcMjEJuUNDWRQSdjn5WUPTrk5tqsf8QygfMKmKxZZq",
  "key21": "28k87vF3MnmctgN3PxtE2H14hKTEvrvTkdaBqjiBFsqRTgR8PLBYK6pqVYkd3rmRcb2cdKyy9X8Yy5E4DYvx3UFG",
  "key22": "5wWviVvbeBNewb75xxYNeqGZsFEojZLGBz5pAqBgKvtMQiZv7t35fmNKzSKZCW3euGPmrcBdacqDCBbngDgWUWox",
  "key23": "652kJFLaEQ5ktJZQ4PNxFKtDnMPn6Nz3qNyEtZCZjvFqvfP5iWL8k1iMNtRr46G55p8JahmnNwg744dzE4csJGcv",
  "key24": "4YfC3xfQCZ18gan1tiitESPn2UNunwRMyHTj91cYg1FS5eAocsNpHtrqvqcu8wgufto2NsSXeLQJ1ohFj7iiDKka",
  "key25": "26HQLa7gJhvCqf7sErGLfrdSfrQP5F6Sw58FFSA9CBoKcZceujbSBQdwyYhmWWhJ3qKDYg9Hc3kvpy2hnZi1roLq",
  "key26": "8Xx8oLtpzswKxJksyngBJjyfNovWcWbXKkFmP53b8zAc6FkurtuvkB7mmXhMYH44ZwukgJjL6oshEBC5YbesDaS",
  "key27": "3wMYbw7wPsFV3NrVuFCpyUjs6R2bE5EwggGMGP7mPaUj2qK27SnPEq4PjSu1UjQ8YtsoSyxYjBiB949DsVuDFEFA",
  "key28": "5SMgyiPbsJbzYD7uhKYaZTUmCBbAxkSxtpavZVpjf1jkUKXC2AWs3ENyQLewDrngSvWokDjwkUK2veB1cM7p8YEB",
  "key29": "4PVHaCAGB38cgVaH4u1nSy6ZPHrbhdaW4o1VzVuVMe9KHNDYJ3ytc5kNZ91yeQ9YZyXK2MqGYRxrctyGipuSdGgW",
  "key30": "4wgJ8rSaY3oL3NF9uk6k4EXvWrLLaEb1t1v5j9Rf3MxCJ7F6nxZ4HEQfaySxqn7cbDE6rMQz311aatqDQ1DfzALt",
  "key31": "5H2eGuhcrnTVKENnpZbbBkAxfWHWy2zSR4XP5M6puKxEg4EpV7t7RAJBc84rFcG4CKtZu4nLcLnsFP56b8j4RYd6",
  "key32": "229Tp9Ba7LWxxXssP3SZdsHA5pk7HNfnodjECZUPDhXY73u5Ltmq9K6C2kkgyHE5CyyMUY4x9WWmonPnFM2Zk7Gp",
  "key33": "mBAgwxzRaFkEYz4LnnNVLVeZ59eyA3g1sChUHp4HCygcnUWfVKajDnQJ87e2nrZzhesVTJjQzmeCv54vFGb6DMW",
  "key34": "2SkjiEPwdNEzzP2tNxTKU9wRQVCbb4E7pTqo6X8SPVsZEcUujtLfaq9bmAPj8YmN9LpdzyhPeuZXsP7o8M7Nz6Fs",
  "key35": "4kxXAJ6KMrK33maVp3Vy6K5WpMGmAsHhcTiUbGggwEu3eSaJi9fbXGBwYDXBi1Ga6fcW4jW3tPqmyF98K7D24Wbv",
  "key36": "2d7k5ihiuTdtNdY8kEGj5ofNcKf2LQquyguVyfiV72DjQ2kcVSfb7oM7oAfPmPYWpSWh8E7Jvcou3FCWtvVrDnu6",
  "key37": "2QYgo46Y5WMB1PNfU2M6SA8AdPSzJnhu3sbV2d1qKRYbxQJBgsuhwdTPnxyfDygGJRoAqpbJ3rmTaFqnjmcBcR2j",
  "key38": "vyFUMLhsWwfxnq7A7SptngnJRkvQs2Zg3xK7Myt88hTgUVvRSWydK1LjF9TGYdNoBiZXwFYh6drYjsxqofnDJwN",
  "key39": "3j6AsYR7eVYrv75FjejrYPoHxBPDYuhWgKr1Lcp5FqzZ3kE3XQu7KAs8MmkiY327ULMcHQW8YoePpAZzHq1GDpez",
  "key40": "3jm529NLWuxa7S95pEv3jkV7r1yUEnNXJhKBBZkEXasU86tPJmoRpSYxvLsjo1Z7LLT69k2xNVDVwhwBwpNR7Fme",
  "key41": "3BxeWxB4hXduCX6Jq63gjK7snsygFHdgvNe4AC9k77vspGaSfWujbLYf9E7WDK3BXYk4QBTcC3Ta1CEPmpPeVVdH",
  "key42": "2yNgLC1qMwqyFgAfSJGbFynVnPk8XzxpD8XeS8rWQkQtcX8R8KgP4o6Fvf2gM3NnLSfSZDmqE7uwPdLderPQqeUG",
  "key43": "4YJs2qgvs9fUuwoCAtAxVnghU9Y5JZgsmisxKzySjAxbqe1C5WYhxSehdBtQUco7X38zLoZrCehM9iKSzYZwbFwr",
  "key44": "3ejkRgxpVtntqsiB3scZK5QzQ9rbyte16ny7a3eNEbopYPsdWvtPVaxtMgwDoaoVX5WwGYmEDZL4LECrsDQeAT1b",
  "key45": "4HBJagLqb9yGwkcksNoopvSctsXmwTAnNLkF38J3amfvsas4NNhMidrD9tHs1wTshtSGyNn2Loab5NGTCEs4JQ2Y",
  "key46": "3M7FSwz8FYU1DPtNp4GBUi9KTNCnmTjMYyjp3pjPStVkBLGHesjfhG8VYHYbzwnf7F4DSPHKGfvphr3pZQPH1HvR",
  "key47": "vSwxp5G3ieKoQcCgUKMtHLw2EWoV7n5rNAd3SgMBvfpTH9NYJhgxUVSryP9b7RmJw43ZVxHbKScsH2zhPFtUjku",
  "key48": "3B5f3Tocs489iw2J4Vg8gHVGaVriEtKuxKsqPbG9zC4BGTy6tfkiQmtUWMPPLnqknfNUn3hmYrZK5RZWuCc3kEa",
  "key49": "2h6p9mAJrQJ66UU9kxTPi7tn9QKc1urcJvpGQbA8yEffSvQY4Me7k41k1uk1rmYruDEwzptMyhKqn8JwVAuZY73i"
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
