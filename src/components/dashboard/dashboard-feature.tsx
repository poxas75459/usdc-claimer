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
    "3uiWLBSZdJETr7tqK7EagkpSk39xRgu8oRbRJtWZk7RpZ4aFVpE41izEL6YQwZ6ZiT7SeH4nRVjXLAqW3MCf7XSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CLukA7Ee27ZVxYr26jMCNpZ7MbkWkf7feDSgfphFpYbESUn4UxeCtqLsVpdBQyAYS4JE3PeogjxvsCFV4TmfkQJ",
  "key1": "3fgReCc8NfzxbhRmkhxippobwvHD28kWT9G5Xnk746T5NHPXVnXbKB7FFnYU9UcxQr4CJKtTRQTearERMfDHzwRn",
  "key2": "3aM5SRZpy7AFccFwbSzWAyHtY5j7nN9jmFE1cQ2XUCugDZdkKa9mfJcFrrdQgy3yPzos9KEhVaJnhjDYAiqMoL8B",
  "key3": "4ZLQSwyEKgUpvq3LdeW6AYL8ta6Sctwe9gyz63JH7Jkv8rWz2Um7HbWjsFNBvFa5tZ4PyGzJUYMHgs4w1uMooWwt",
  "key4": "4DDBzK8HhGBnkpJtLuQfHtq8t4RteUVHKdLnJ87MJuwid1rt41UcFUXdDncmRZxhkH3LKwrArLGf2GBL5KFAxZRg",
  "key5": "4S2NJnCS543dWj2SeBBiaU98UgwabL7jBwXak9y9HBq6FBkUyQ2gqK8B39dKnPuGK8rhctbxwTWY2PMSPziEUiMR",
  "key6": "4mnPPH5DzjhxgZKnmaesVxrvL2YfjgompXSxaosKHENA8GanfojchSpM4ujorJy96iCV86rSPRFns5e1jNEXmqup",
  "key7": "2LuBBoNZ8NUPVo3iaNtbpgnYVNyyAb529UZYfFQFaiGDxQwjSxbJMp7qwmm7JYdWVeDF9Mtb7YsrS3e1sL3iwM7x",
  "key8": "5zRncRczCHAuvx66xhYUnCywpeR31L5mT3vKpxFB4dLWQBirNuZXSFXicxsdQAcC5CkYKRr2BjMNzMqAjNvpWsd",
  "key9": "4WaBZUASY1kNE9rZn9YnZkU9PaEhYgg5hVgv7cRAjFfBkiBFNxqso4rFifLLruYepRTfw93aS4QMxG7d9L63QZaY",
  "key10": "59JpTs4oWaLqURoQau4LXAc1A8psYkcJZ5UQDBgN7m3BDBrJmpGDig1VaNxZyV8MQNcRmfHvYtNG9cbEUJgJBZYK",
  "key11": "58M4FQCWBefd3YVPBTs2LHg76hrAEdPGmBgtuC3zThh2NEDEc95pyzqccuBwKrPcpEp4soJLznpFkV3gzN36o8Ez",
  "key12": "BwyKvxCPyfLQKszhC3U86iDQMov7qzk3W8DztkbETVSfUzBpSMKRbkTXnXEzrGuVCKTLu46mtQ5xVPu7YVxUYDE",
  "key13": "2yNd1VkTp4E211hmLNLsL2bbUAyMNAfnLJiDfzrUcNr52E2eiD4KsVCVNeo4TvQJx1qqtKkn3wJKY64aQ7zHZAKo",
  "key14": "2aUZGJgJn41eQrK8sb7axqvJUTwogvhtT7mGCCeAhCgxY9snAHZrXw4ScksptEHkz7BqjLdHirAuxEj1ijFgSoF",
  "key15": "3DcURifKXhFSW8gY5LQLnGExn14uqrhrwY4gCpgjoNYnqEPwVY3wWpSKXV1QvHSnxhPv3TKJorb6gziDQrtCA72U",
  "key16": "4TYBidLyjLW9gPMjmnUjCwy4gDK4YK9Bmw4JngbRrgd4h95PeUMcz2oN3cbHuEccmU28wb3VYfsBRdaeHKr2En7e",
  "key17": "4PARQXXE6MHD3dCCJRmucRgW2pWB6Vxa84eqGXj5d93TpbhqLbPUmEHfF4iopSWe8m7DAU2xtNap8QoLJJ5cULeq",
  "key18": "4QFqfBGsJuGE3UhXCcuRhwiGsUK8u84wci98HiF4jrCHHZ3BXGEr4B36d8bC2mwtQpqcvtKaFrraKtM6wxAwQjtr",
  "key19": "59xWgspvYpFAwjTgZF7FGuogfq5edB28nm5dY6dV9emoTaQzktFrt5pBa6qwBnmTQ73JWc9zYBDyuV1H4oUEwvQK",
  "key20": "37Ss5Yh7iUtPPPY8DpfGs6iN1BwWPiMQWrHdmpHSieWNYivvTRQbdUAqn4rJbwfTde3XMf9JLp9RM4uXd4i3uASa",
  "key21": "2vvyQYGmGLRmjpBB5Kk4WmQU4T8i1VxtdtnvQFddcteF4AaQgnnwdmFfNuhupXn2ZMBS7jvS2fse5Et2Y8PD3bY8",
  "key22": "4wcUmr9qmKR7GHLDew8hdv9QKTBqU4y8cNM5w8P5a41NrRskDTPBPqjdjk6GJoodonwosRzuNqjP3ZFuyJBCAvqE",
  "key23": "3KyFQaKnS9c3r53phT6GsgZmu2zvp67vBZpmqKErAQDypgnt8hXNhPdovghpB57R9wfQBnYJMNrR5ZjfN5Kd3D4e",
  "key24": "ci2e1p5BScN17QhXHRvifsTqZ6zznTLwADxJQE3esgia4e95BxpffA7S1yTD2mB5cRUwvfKQyi57XBQBjs3XqAQ",
  "key25": "4VBnQ7SNMX9TkWU1FG8fMTDbax8rxh8vaTXaTdSDFgwm6EDiCd5zM9oMPbUMSEz6bqSPskWYKRvyHKSVk4LikqZ4",
  "key26": "2tNwKwycvzW3LtT7W3pKDuBLaafoExbRsNFcAZECLUWQ9EiHTXEirfsMcDoKt1t6YioANYecYMYL5zK9BCVAnoYK",
  "key27": "24kLcxPoRXjedFvuGytZeGCNWsFJ2sZZx3QM3rDMoSX8chesq1yLNUZqBsHMyiW2K4emj4RPup3GVHWbjoabNify",
  "key28": "629vdDLxVVXs3i6e44a6QqLYHe8g8ZWHDVWifucV59DhmfPDruQSJkQW7h7Rxxf6kmTaK1VhQWNfkeHLYjDNoVbu",
  "key29": "3CniumvC1vHV52YF33R7ww2qTjtmLGxMAJz6MiEfSJbrJjA8giH3iRacPLbpQnYEt3CDu7wEtcpSBoqsL8jTbr5J",
  "key30": "2TqJB3o2apsFJTCsACXFNcX8AMvaRoaYSJtbm3KG5DHyunqZg6oWoX1qiLe1kSwr1oMpYVG9tpatyq6cUnmYT3U8",
  "key31": "5F4LxTQ1tQMn8VYyLJP2WHVwXwEuX9thueqnBiaExvB7ssKsLBrchQGdqr1XSHDBuk1ZkC9E72BPrWu5fndUKKya",
  "key32": "5UHR4EZ1Qrhre8f3HQv2wQtXTZVXrba9ETJZxjK9UKfDtU8cJR4hjBCQmqzZUeLziSbSBFp4gb4Rd6uTGnaRHxJk",
  "key33": "zMZKWgZdTAx76PuXSGiJc3UkYiKwXq6GHE1zo4t5c226THGBsNYiax4Jx8wPRY45QeBusoyzAJHUHhUoj2XzBAz",
  "key34": "2v1PYZ5d7Dy9hPwgSv3Ao5SSbusNNCatWHhMxh8Q1BB2L82jTKYQZJFQVb35szyAhYZb8kKvLc3FnKZwSY8Kv92r",
  "key35": "3MBgKshphTNm4b5HRJiUDkdvngDpDjkiS9WUjAr54FEFUvUCuQ17FztgRpQP7iZ9KxZCdkKT2ZrgBiDkG9DCNpAD",
  "key36": "2vLpTWhkbGihYrmwp53wSW9NDi7rbENCCFSLCmvvyezLHbYQQPzVZWMpScZN9YgqH79TeMxsUTtyxP5kVmTFaUHe",
  "key37": "zPtbUhXr2T3Aob5qtKeAc1aFwr8U6qgAW8NVtoXnR9UiZbw5Zc2hXSRF4XMBZnAp6SwJBzHWEcZZwSrZfu9B7FP",
  "key38": "JmDJP9Zn3p84sB6ntv5iJguSiLLVQdfKgBA1BrreaaypDfu17Ko5XQ4JGSEgpPLz3AUgXPSUzpkrMWMqTXa98Ax",
  "key39": "4j4QUi4HmRsqcEHrLaLafA9YhnQeMf4ibrH3k8Pmt5g2ZmwmTVvyNP3hJc2xcaHorLmePnNDDBLf4is4wx41pzkT",
  "key40": "4p4KCSXvARkD9WsaPPETLXcrXVCPGxqAcf52ML2P2PKWrmXxou53tqduAWN7vGvMgNJcLRKTfPE9Lf3UHoewkcS3",
  "key41": "52cBscRwQ7TR5zZRT5RecJzKroS54yTbSX5Nc2BDosE5RjhM1ept7T4kftAb4UCPW1akAqnYtVyiLU5t2x7bTGwi"
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
