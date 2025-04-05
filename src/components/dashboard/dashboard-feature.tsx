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
    "2fMTCHsMwenJkxrR34ttrDdHeQTTMSr1JUowM1xcgAwfd6rdeZMe9s1tWRWujejLfGZsadVQPaPEbUx8GL6wXKKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mwx5NLP1S79E9occ9AMRuUdhK9zMrGP55NB3FpbYimWUVzjNbESvacDisaiy26vdPSMefWKHuYCNkkvvqGWacGp",
  "key1": "m3iikhA6wq8W5quDUR2n47PbUxWL4StTBpW229iVDafLo8W3dbnS7Eca54YLr9dCoxk9tUFVCQQV1mgjh4GDEN9",
  "key2": "qZkijkAbF9UcXHja9aX3ECzPgbnnHk1JDtQZ3D6Lv585Synu6eJpTJZEt7LGzxkMFEoseoFBF7TKhQfHskLrhrf",
  "key3": "2rBnRj71WbgMRCfL4hkJZKqhcDTkHuVHKU1NmVoJsPw6qaLsSdWemq8L5gAJ1L9ur1TYhBZ52X5SfFUX6HXtuX7C",
  "key4": "62aUhLZompK67hzU584RqFT5BSsBjhBFMNLLFTDyBcULbrLYHbWmrKBejA9ksRAz7DMy2SkbmkzYDLJQs9mDvgWX",
  "key5": "2doGbNA336bWxLv8ztnZCrtRP3s9XiNWoweFJqCSLFgZFeYU468dssrjcHBre2efSgyxrjgneomDwVVgnX315kgE",
  "key6": "8Jw1PFGeMCBy21ytBi2xyi352Ffw6K1uFH6AfhcAhpDZ4vNXi9sPhLiZAAqCYBvjoPu6BvveCF2wL4dqt4XpX6n",
  "key7": "3ru2SQHp5jb5A8qorxSE9wUDzZKXkpdigXmwWrGycCtbwjeiGBFMxum6QgL1EFPgkFPdacP9iJRJcriyuLnGxuGT",
  "key8": "32MSo4f55qvnzsYLZpYrwL3nxDZ6VThcyGnuDH7R3HCmzeDcoSJtbh3dtDaiu1x8irTCSEhaugmCfhoaXZyttszd",
  "key9": "3iS6EuhZgmRd1TfacNsXxC8khJEJn8m2QsQvofoaPV6a5LeHuy5P1QUpCe8WJ5wopFNw54vxWAthwQRXbVFBqTvH",
  "key10": "5cFHU6vT6Bua4jh5fnZPuySjJwTpqdH5JygLCzQ2G7Jbx7m1YGV2o15Y6ZVomCLg1YQuxYahqMUXuvWfC8G2A3A9",
  "key11": "14ZoYeoj9eqQCTe38AjH1yQvkK6WG6GAHRFeUY8SMdV87H8qD1Aeib1ZCEjZoFHZg1z34YtSXrCs2ZmXdgebDBR",
  "key12": "5N2fPDwtBd6AhoD2ysd9A3yXBG8rmg38UMDqyU2XrAg3RMUYj6MPLvb133JABJvEeHzMwhWmsR2bQUXj5hWfJsLr",
  "key13": "5Dj82p9WhZSAc7Y1EDxcjBLwRCuRRCyiqXj6SQKcBQJSRwibFitAY1mZpPcFQTTDBTJGNmH9g8wc4Tyg1XiKrUtQ",
  "key14": "32TguPhRQ8VrPnt37WYE5dqXRNSomiVrArnGbBUGxgRzQsKd58rKnzPuLGdP5ZZd9rMG22i6jvMzdLpi2zfdkBsr",
  "key15": "3myvbjJ6Vk1rnWuM6Yfb32S28B2g5kKeZ9t97pi1feWsUfjRmDe2DSh1oehC8hfXkXP28Fz6zGbw7StzXSQ7BWhV",
  "key16": "4fsR3Ny98jHcYF7EfbVToD2mYMaWpL9TH13so6gCDt4vVi1uCfotMj8JTirkE5jch3CVUaLxPP4CDcG1BA6iZRYf",
  "key17": "5w88yQi3wybEdKb6SLt1UAFirA8NB8FG8Lvhg5GiMAaSH7MUCjF4mrSRyAWPpvFTSx2t5CjyD2uddHZbEU5STYSs",
  "key18": "5LnjjzkRJnn3vZMfm8uv1PLaepVZED2oSyREAgZ4eAmP3Cy22Bznse6zPcmv8mUtZoiurSQBGiJqDLEm3ffgmWjk",
  "key19": "2h6GQAAebue3Uoni8QFCeY8yhGSMJPucWuUqrUWDEyHUu1gTp1qykWC6yZWBd4XUYkU42YMXgbuZ9RbUT6FQJqDh",
  "key20": "3Gtzss1cj8XjyRupYLDQKcyS8khQbooqCC2gHyZLzQkPMmEzJB2rAqEEKR2BYxG2rLk3Jh6ctP1JinxQj8C69AaT",
  "key21": "59SXSSGHSd78KnmgFKjfvkSadzupuPHxiQoVeMajKf2yayTdFoNFDUjPmQLLEpN7PpqqnvmtoQaiXSC9A7Wbyaqd",
  "key22": "jWAbbmVLkP1zcVieKhZL1PkYqvxdgbgErVoRVzwZqnfzwpCxBfeu4GywBgDJLsYQKArEJDp73KFM1zpeHVKnZoT",
  "key23": "2cbyueZ2DiPNn3ZWJxptbiwYBQGcWQp9QN3XsdURSzFckdgSn2ZkTokRJ2iJvL1yB3mnrM1YEM3rn22B3fQi4Hub",
  "key24": "573Sm5CqkruUbShPNt1yL5jsC8FvABEYbuYoLEaZqpyQzm4xBvjc4VNpGHaYuGHCPmGLate5Xq6zf443T5FrHMZY",
  "key25": "4un9a3YsGH43Z4hnvR6G9LsncZ8z2RDoBXA2UKRgCv3B3YdtRUVoN1ALW7byVXc89UjpLQS8sTh9wB61nucYQrpq",
  "key26": "64DsDyJUbzqPn7U6skYJGEy9AjkFTrGhK4CS6H9QnJYeMWSfUWWMowxunZP2GAgwUQu5ZtQPEjWmJrEMHFJLEBA9",
  "key27": "3RzoGN56HwNJLBjT3kdffhE7wB2nW9UXRAiR2yxs2uGFeJGa2hov7R6bd1Uy9EsPp6xyQtrecNE92iFVFAZaiFAi",
  "key28": "3HcamyLGVY938nTdsB93y1Ks94GkbuqJzPg3XWzhGMPuyhtXHHH1UiHNWc9qHToRfmv2oYr4Zr8YDzkJp399JT6G",
  "key29": "V6Wo2WWKons37sm4t2SVGan9aK5h5HABsao2CTyTAmNbRxcDrSsVvPZR2PCSeYYTu8UYmpTjo3zE8is8whyNXB5",
  "key30": "5aLZwJpBfqePq5pGP8cVRPjTTevqKByNoydFme5pmBmdPoTQAaHGGS3cP2XQHHRoGv8b8RNntcvwXvTxmxrp2VUh",
  "key31": "3ET81i2d6VpTEj5va8UknHEVuZvozJBbhtQT8bahVxe38WXYoVSfM7fKvpsjDsvHdE9vuAwoCXr6MVeqJgKahZ8Z",
  "key32": "65sPQEesd3sHcXwPakBv7yZfk7fo6J7zJYR6wH5aTNVdmZ9f8EPU7qHGWX6YHPu85xCPR2F1EDXJeVcZUdim5WUv",
  "key33": "3baQ6kSmJcAS6jVFLcSj76NdPd7yDJkiCW2i47DnmK3NDC1roiG5mvLuvaa7NKLVZvVn1gdujGGJxo4bGLfPc4Xh",
  "key34": "5bG6JFxW1DMCC1cUqr2UEiEa8UBRjbzrVtUBb9Sdrmv9msiZLZJ33njDNNNULr37gGTLMP74GrwenGoPEXrFy2Us",
  "key35": "zJry24B3rd6vRHm4krpu7YeHJyoo2CRETSa34n7B2PUxZ4RriWD71JfTBPwYwfe4rCcTingwRaNVjGbLs3kRL4L",
  "key36": "y8phAEcuDnhTLU9GUuzbYzCJof6FRDZfQ9ddCuTXpUJV23jVVHo5GqXtagp76YAWeSafhHm3PJ8pnohRAXF6RLc",
  "key37": "aBeibBimAweW4gy8StttY5Yh86ZcZ4eZXBy1kavh2TYWDpdNKFWNZSsGnZFvHvDFHEVAjV2Hv9hpVsAiBzR6BHt",
  "key38": "4tzaahQyVR2uKNQmGwiQRwapaNa5LmyJKdgNmMkKBUvh9qKc8yeix6MShHEjL2zJtZEW5cXKvhShvos4cD1kBmfx"
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
