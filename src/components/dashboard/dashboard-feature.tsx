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
    "5kzUBGUJRUzmARi3jr5cwkEFh8ZCWVW172JDcs4YZeEJ99xRAEWLdEsk4bYAYRv6BAVQcUJQmyJZr7MZWdBZfJeR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EScRudr1jDL34Jfj4sVBjXix69au9oG6Td2qPuxjVuPzpitft9g25XGRunLBvnJFuvMjNhDJmQVNHNM8BstU62q",
  "key1": "3wtMWVzCYXfruqCvW77mtQhpdR4PbpFvjHeYQ993HrbeQmvyRi6C2gHbTKr5xXMQrCFRhr6xppAEv4uu6N31EEXw",
  "key2": "58UizxyHPyyR8B9tZQ6LYSVfJGmBbR8NFH29AdrjvHTecnmuBU3sMynTiVVZQaRjE2HqgmEu26Xq8uw4dKZMUuvb",
  "key3": "21STtPuCJHNsbHdfem7s3BT1mCg4z4mVEQcwHC4WTV5cT2QhJdB832Y61d2jzoT6kkw1M9bbZ91P93tv7AgorFNJ",
  "key4": "5EK2dFUnL9c9pAfWddxGeuaFJEdn3jFcqG3skbG2tYHoseWYDUuFcP6t3dSHJNp4ToC9gjtCQ6B5Z1cGguYHV6td",
  "key5": "3aCYqu6qT4hQTtEufHvGAohsgwMWTbE6LtacMj1U7pNB2EJbQkmqQMY68yxkEL7qKrpSDib1MwbxAgez2qLr72qF",
  "key6": "5GwVixvfvNV7xegHaRNv4rcyve2Gm52npxb6XL6fGWYUefef3U5UfoMHtCFJVx4195g4rKzqBhrJX9wmqVgJtHHq",
  "key7": "2dzJDNRd6FafTrSQzarGFomp7gmuDdDQtnmF9eLF4wCsrPq7moHETT1Ussxft5mtdqgbiQ8gSev3xHBsdvbncjkv",
  "key8": "ucQzmkMwbRCHEyJHgbPgBQXbGjvuMHVPjx3MJKok62wgu9xhcv5rr7s7m39ywHvfYxfTih5Y1RDjARMGSZcxrE3",
  "key9": "2fpoyza2K5ohR8ewht5cDuQYM7zjdzJHqK8J1mv4Dwng4gqbLbMqGT7dFbTq2aLxm2HXSskwvRQbBjrYZcAfXJvR",
  "key10": "3EBTV98u78bRtKzdHpa1vZdCYwpgprnTZqFL8LUqA2M3YcBC1e9rN4T4yHqpXbWCYLKGXfrry6diAWbxYrf7q8Lo",
  "key11": "3AbhKrUoE78rqaFeYxMZyx4LnTSv9GdPGR63qPJR8C8NDEMAKpLg8jPYHFDmS8mZQnppo7aoF54NSQsbKdbfbBoU",
  "key12": "5CPfisGXrSGP11RsVwfz72VAvXHEKZDg6BAVAmKCdMx8qSM1DpWq2CcDZ7V5bKVwFUaxzXK82cRAEEGcv7tZWRa8",
  "key13": "3gDCHcKDCpokorpqbGsS7tKSyz6rNUrKdi1B6eD7cSAsvT41udzXrfVLw1wVREWpYbGwySVJ8My8wJRhqgLBXF5b",
  "key14": "E8E6a662Nw3eDHz36JGUVfgQKQdpRBzgHTp91KJqDbVFMNCqrYLtq2c14xvyGr9Z9Z3HTyaGkMJaTibvxVP2xJT",
  "key15": "3Xk9MJJGaVi1yTEaXDpqpp2HrnaDri3ZKA7k7RQAViuB4HBCLJgxt8FbmG15D5dpuzVR7c2pUGbRVsLrBLeBwokH",
  "key16": "4CxYga2FXdGFqCEHL1Xusd9M96KzR3qvb77nPNSLXoYo8azG9vchJKUHxjjRMSw8pssSUDu35MTwK3QfPcmZirZd",
  "key17": "4vJUGahn5XDLsva7NRVB1rUNRFk4kYRB6kvo4k6uhqAnwjNNjCFAxcXuR9UMUZjrMf6TfBf5hRV8fmprzyYA6rzG",
  "key18": "5fKovZX4Uqos8u69tTfZ9aEfrA3gKNt8uLcC8KZGJfGKaimTmqTYCrhmhb7cdyXGTYwKo6Ques56ioqFmZrWM99m",
  "key19": "3JRa8G25kGMigK7PKJzp151ufNq5kMburwNjxsPcuRCHt1E62MVqEDDFSN2GuqiyiMpxZN8KqSusPPDzbRXk4nrB",
  "key20": "2k71UfqaZHKux7r1KX31jwQ5rzBaj8HYdYLEzJ5yacmGQHAgzAGVquc1Dipqt4T7qFuMPTrMzdUgxixg716shibw",
  "key21": "5TfMNCUJadHX24sbD8CAswiYUfkUTGVXZ8SGdk85xoe4EHMrJtKbz9xi3K79UmoELs7rUuTT9oZ7ozi468Gf2Vn",
  "key22": "5XRZB8S8Cmg4PJCTrN3owfQwRoDZkBJg7YBJ1N8NDiFFRDkKr3ttmUCj8Fo3xLS637iZjFD8Kger8GDgoxc1PMsr",
  "key23": "5jEcz5du8wd61WWCj3xZ5kj2eRG3onBLbXu3pkvUd4vECYy47x7mKQwKmJ9zstHVpS98Qgd716k4p1AfbyTtiRdW",
  "key24": "n8tREm79Yt9yuJyHb9TAGuPaVHK4tgripP9JXf1mEMeftNDcR4bYiP3a8MeZxFCFynhAYU8bbLK3HVZA2yDYU4W",
  "key25": "4vFukRNXJu5JuUHCXbhhpDBFryudE2zktW9ezxpsjBpeGtZLbdjemK7JsQumeeVWNntx5gAimYbgsu7E2XhZyRCZ",
  "key26": "5g67UkYEE7fyhcbtwruXqfJg8UbB5VLyDFP6PwiSZC6JTvvberC9ZjfEuRtnkYzkPqn79MiNPo1YBsjFeTthA3ko",
  "key27": "3yRcZZpsq3hXHCmGgHWNwj2sLiQpieVzTNLo13chNEqGeHDnzVqT3d2SbQLBFFADyKzifvkekAB61MnMj2hJsfPZ",
  "key28": "4WcNnMezKgaFXrkMquLXZ5x3eJB2959fTDFwbi2Go88WvZvpL4evffYVghsPNUHi1dUga2m3xJLSwWdbzesteKRu",
  "key29": "3YWR9e5buBhzyCFf1a3wAjZcQfQJfS1YZFss9BPbq8YA9Mcd722Rih4KDCiZhUBJrMHgxFKHr8V6Mc3Lj9taMcSi",
  "key30": "4B8CypzqNpqBdRjvQ5Eyr8mHc9tJJvntnzhtDSjLpFSGgUBf3EC2A2yBvWza5PK6KRXG6Cf5ngxUqcJFiFiqmCuN",
  "key31": "3C3sZ94tZct4MLF3fJHcN5bB3Cz3r23qdtG3voi2EivCaGACa24pYh3ef1CtWtjo6115MbrVzNiMr8BmLudZayUh",
  "key32": "3FSNDEYXVuopKw6kXibN8S4Wy54THST7ucwgyTanZf7BvAHBodq1jxkHXEr1uv9eDft49gaZCt8DojY6f8WPdYy4",
  "key33": "4aQ4ZR3akF9we9tVhdzw1vxPDuz3qZQnFo3sgLs1fw4AFRjeT26x3oZ1fgXR8HADZW2kStdtSb8VVA6nEQDZuWz6",
  "key34": "YNtCSjpVVwChhBKMq8WhT2cwbqB9M81JUnb2kvfn4fEDxNN4aTco7ACWoNuUxxuPEfWJgATpB2xh3RSmXdyB4a1",
  "key35": "2A9EQeouuBLZUH9MnNfDdNZr9rMWkLheiHbqdK6e3m2DAr7Qs9FPEpTNrL5yvCkZvhJkfCurnNnB9284SKZFd4ax",
  "key36": "ztU6JXSyjmp7ChnuMAr4Khfc7ZAcASj5FvnTdwYubTPvoBdYL5QTR7xk2jHCkqt3CzEVfmFw2vBGpRkjHWhD3z9"
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
