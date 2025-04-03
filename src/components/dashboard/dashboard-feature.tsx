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
    "UCx2dPMq5c1qRJr8LS5UfgUwAMtba73q6XvkZLsecdFnXWMbbSjDzBwsjhr1YK79ibC3TeZYyBtucZEHFpLdPCm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PCYqGPB5NiogGgo8vfZHPj4BJNYTMBmCGThyeSXhtjThuNUyuBobvkUTKq66mFJ9jW3f1HTqCnBLLhsr3rig3UC",
  "key1": "4e2vDHxQTy2d2bBvhjhrQtob8Bhz38NEadZYNY4nCqs5CEjRbJQfxGeMSMRu9fHhKKQzyac3wKRFRiAjLXVCmyxs",
  "key2": "49mso2vL37ZB2xhLk16FDurnijkT8wUqFqoK9NKPL5tNHg2YEPuMxrLsb8YRhxPaLBpKE9RQ3u1Taumb7WYRA6CS",
  "key3": "5rQGoyRaqGS7RiYEVVMvkyPWrsYaBU3SQwu2KPMwLxrZpNQDBMyAJNfVXhdPueVFtwVmsDuHtqCbak2o8fcnF9TN",
  "key4": "ApVNt8o9u56fmGbQDZWoiVuKaqgdoMqZ3P11YyT2H1DW3xz276Tw41wxENNhJgBCUzoiaMh9Jrs1iyjSL8YKFyQ",
  "key5": "8itCoMPSkwDPbXUeWdB6hAx5aBtZAvQXscCqSfAgyqWrpqyT7LjdVUBYMrZkr1jYmWUoiBpxs1p99PaYMrKP8wY",
  "key6": "5QDVBynAaa9owxFDqfiLQkZCKSPjbFCGWKYJCpuzptNn7AbyAnhvQxkchytYGMdGdSBPrAxk96teZVmXT2qxJ7DB",
  "key7": "2kKUySuZH6EGgpv37WVBvfh4AsrVfb1xcw7rea9CStdUYWHFY47vwNjCEy7uynRrHv6jTrnuMyGaXkFcs4gxyFJj",
  "key8": "BKBV6cTLwQMDVBdCeNXmqiL5kWRECaUYFTcTYMNYobBrf6VRSQF2dczeUdUyapHrVNe5KbgPveEuVdCRrWVYPbf",
  "key9": "3EEMy4xyevQhSsPesM1pGKdGc23DfppkcWHvQgYq19mrMnUwpRXXUvj2xUQUS8BYyMXPY1LcSu8pYJGmmXCRPnxF",
  "key10": "DZQUJJ9HnzVz2uHW1MU9kS32eL56fU6LMuGFZNb8B4uTZggNq5YaBFhRNCtyiZQhZ22FoXsTQAfx4K69yn3qrdv",
  "key11": "3swQipn2umKfwv98qhbLKVjrLHkJHEWC99pwnpbaB4KfLdZg3eQNFYCwqBAeTuBMPE9ixLB58wwBjaJtuzBV3KWm",
  "key12": "3evFXBY2rc9dhv2LnKVW7Bnt8QPdhNuyxPH43hagaKKMCq6HpAKAKpLTrgeSk23fZBqf963gL5ktgrMHJKRzY2gu",
  "key13": "59YHaQ1h9MRfnqCNApEkn8JvAsE1m3DFThX5d2PwN66j519fogq6k5yuzxkvoDHAoywyUgsZetxavxEwXPfUx8BU",
  "key14": "nswUoU1g4NgnPX86H8qH8zWAK4eYrZbQLrE83Jpq3hnEs3XRmvAeihg1TYnV1e3ZhPkKXAE7gsq873Ucfi1qjrr",
  "key15": "2wASbQ1nEaUqcmxiSPd2B5tkThatSD7JyBMeeeP6gdtQNM7KtDmWRswhSL8pwA8ogSKAQmFVaRpoXpighydUxvV6",
  "key16": "5ubh5h5SWYLVB4sJc4CTeLDLkaMY8yJZpL4VoM5vLJuLD8gfdSZiFsux3Qr58xZgq4sgT75rsWvA1aZAuABtukxd",
  "key17": "oNVLEY1hbZ5HGp31G3rqsDLXEdd2yqGMRAEYGq6UM7ouDaG5Rt3cHF6wLiUQEksLgNH1o66PZYSEW6nQgvEpA5f",
  "key18": "21ab4f6SToLipFBj6TvC5QkiLPPApWhHbDottjBtCtAe1iwDfV25f1AuWmPGHhGod3vEQF2JiiX6jGfSiG22KSF4",
  "key19": "47kZcpoXZr95s8ckVYGDPg3NCYANGD18sqn7GFxMFH27s2EDDvbEtcFCYQ9CW13p3VnNBMqXyB9WrtXZubboGSm",
  "key20": "5keNL6FUA4pzJtVG6Fc9VoUMejEucaPXYXH1r7daQy7BBB7axQ99rkZQTdSo8uBsJVUQ4m7wFWMeXunsBaYxmVQu",
  "key21": "3FJ1iCn4yogWaWAfVUb1y5btpLHLGhTvNWpCWfF3YeeS3pYgjuZCQPF56iXAiuDRaXwvaPzWYAXWYcmSzBdiUpig",
  "key22": "646WVEJvJ7u1RQfAdNeHiDAZyzhSSjDtxaw2fcUzBaGgb2b3PQ9UY5LehKRXQkAstBe4wj7s7WxJKhuQf9ySCxAg",
  "key23": "4vqb3CdKzxiAqiLAq2nXDeXFPEWGWMp4tkQFLncTjStJMmzVysz8VKLhSoYfubvE6FJEEPYES4kyACFw9xZ5wFQ7",
  "key24": "4GjtFTGXvPoQTsFv1DxDdXwP6J2Sd74JrJTssSWq9HtjiH7RPggeVo4pc3r57VRnULMyoj1QVFp5bAmU3Sx5DBsu",
  "key25": "2huLmjH7QoZEeN5i81aqcUr2uvKaLcxK8sxypuDVEzEhzvEwvoWEuk1134UF97K4bcKkBdzBtaNnrHtVt8iaGKfy",
  "key26": "2dgqY2UnJLame9fdysQgiSVnrVqHvCQCqGVLMxGWLVXL7V5aNu7kV5SxtEvaW9ordnoRwykLzoHMUfZ9QDqUuNFj",
  "key27": "3VN4LC2PBXHoEokMjGck89vfm7ezAJFoNQKkJ86ZCNGdgFo4zZWcqm9oancpjvYtzvMAxBQ1REKzBUE3qV1bv9Xj",
  "key28": "4Mnu3RfKafd9ZvxwS9QJxtLiknbAKf9tdjMVDjhdVdv8HPGfqU3cjESi8fJ2f9g18rB5B3xWnKUJ9GsRYH5gDZQE",
  "key29": "5LD83TjAQZyPdogXXZj8oFaPuFmx7qFTaF3aXz8B4473rTpf6EDs77jPYuvJtiG69nEYBh79RUUDmy1F3zBWtrj4",
  "key30": "4wdH7MZepGZ2XYvsPeq8EiRShaSbJoA7mZgLVpqeQWsnbvnyKJnRsQbAAmgx9oTsGpyYeiTkzXDfprYQWZFr6hNp",
  "key31": "2FqvviUbmKDFTckKsKHPpLk3Zmbo1rxQjsvhY4BFtmFnZt4kw2LekzzgA2v5XCQPgCpvuvBzR6HbgXNxp7xGP47m",
  "key32": "jgvapTHxY8md1gKfGv2axU8QA5H7P4XZss1bQK7Yx1MSXJJon46uXvnpBhHNynByGx9QggNBj2JAyyuYccXJa57",
  "key33": "2QLgeVqnidjiAtQXkzSUVSMcEZDwMBNHjGZnQ2DXp8GH5RptZwUy2Hof68iQNqRiB7t9vY2w9vah4wznE69RFcaK",
  "key34": "2tHi5zFLbuakrmacVPNZCSwM5VDLKvdiKg59a7UoDGrp39SFaWcMr8HbhwV9hNeM554ypsTabDi2vbBAYADaMAVi",
  "key35": "4vbgjMmyXDWGy8qiqEzutjji1MHafK2GB7XnDNJE8K1nfQHc7dkdHV2X7V3ygmSdth58JnmGy3xnLHwcS1SDBH4q",
  "key36": "2m5zZeMrpEjwbeSsm1LGom1ybQLVWRK4J3PDdaGLo5GWtKE2gaJkdTh1SBU7Rmm646KctXhHfpacRwnB2U8S8kW2",
  "key37": "32J8KPTTd1vL1jvBYMoPHNu4tVpH6946x3CYicXEFhVNASr8vYWVFWrUhLxKMt2sEc6qiEBziXSdRTkRR91nwC42",
  "key38": "4h2c3GioCtXTT6kGoEUQkethRj6DdRQPccwPETcUPhMjEFTeJ9VxXG2ZGo55643bmcvbggg9ZPyFcQfAsZiG5jUe",
  "key39": "4edEcvgyPr8jK55anZdqZ18G1Rn5EBKjGfNt4RDUhsTfCFg4oBwCvsmBSNMsxGJyu3v1AqiiEXhjwUnZTp4Ji8Mo",
  "key40": "5wRmgPqG8YLMckCFZqQ5hbtcgkbhToFQUmU1Tu6uvvHS7qpBPSMyKJkFHfuK14maaiPhNm9AjGkqMGvNzfUwBWiK",
  "key41": "4FyDAFbFY1HeMpboG8bi9i4gM9zhys8Qn6MYDL182di1DRiksYBeVF93Fz115aX43HKWY7xG7CsvrkRsEb9HepaA",
  "key42": "5bbWruaFU2do1k7xrytaguFFGuDoN7AX39KfzkafjAyTzpjNiSM1AbkyxCyX7gVRUUCzP3wR2wPvZtq8Ycd1qW75",
  "key43": "372JqUVxSrtf2csgGR4Pyf9U6z6MB9u6usQzkW3CXfKm1vFd9AyZMn1k4EuCqU8TTHKcrNXMbjBkYEtZKs9DmRZ5",
  "key44": "KgdUE71QEus9U6u8A96bQZMyWJ7HHZCS5XKioW5gRio1SNMb83ng8k7AvaK8LLzCGQcyxRm16fhf7cHmx1kSam8",
  "key45": "3AK9TA4icBz2WAYjyqEZwbr7rnPAqtUPoBoQLuxNc644e98v28wTE4F28cDx37Pf6oYYEd8eYxqqWiKo8rDvhifk",
  "key46": "4RC8jKcwSp8PLSBrgQH7Qqa7AVbQkybQjT3q5oesEDPEg5TCAwJCRPGDzQaLhGX4phVzd3681tWSvMFbhQPjd1ep",
  "key47": "2YRUAqTuJu7FVKgdeThMA9J3TyZsqji46iBpmMYVMdDHF3S1atLmB4zgkmd1D9zGdjKnH9L9DA1mnhZLEwxEaoGA",
  "key48": "5dsMybCq8gGrMigTCE8khft6S9n5TyJgx6B1xdyk8DeK3E51j4aVoyeNERVsg4kcbYECXg4QZ6vAgaR3rFXmkvhY",
  "key49": "2RGadFffQepsewhJu3vSKKDxoweRYEMGZafiC2wXYZWrXFLsQVpjFfnzQXkd5f4RiddYgd541eH12QTpQVEYu99J"
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
