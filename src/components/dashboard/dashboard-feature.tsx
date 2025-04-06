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
    "5YJELjhULKKnNWVf4mEUnJ6QFTCJe8AL2ZiCQ8DTyv3LK8mdEmPAfBb47rBHS8XCBrJXcH43dDFURikjQv3wkEK8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LUDEdsqDdgozJgJxu9f8xbRpDczubcbqLHo6q2A3HaW1JSfEjJAgYrw9SR8mQpmHpiK7zwHBrQbB9rsBdAVAH6K",
  "key1": "iUR35tQUuLtWkMH7iYyobGpx1ewC4yHMXVDtirrKZKmJyhdx9vCSg5DYaLxr1fkWrwkJQb1TeGaiKgnkG9vCPLb",
  "key2": "inUCZ13rBPDJPHVtfPzn6KQTiiXjb86LQ9pQ7pUWmuL9YUXXakw6z56j7Lv82gb7Yr5zCH1AfZqDhNh6St72EYe",
  "key3": "5YovDdo42Nt2X4W5WQDfXJuGDJ61xhuDfdT9NRPfkwUrKTahV6aknNT1gRYdHwjp6Zmp7pKx5MC3Gpr8tBmqS99H",
  "key4": "462xNVDc97DowZzox4gn6XGmUXCWmqeGHeZXWkmTHvbz8szJwSFFLYqCyALa7GcvhjwFibnnKz8cfEt8GsrZomN5",
  "key5": "2ZK2K8JVRNjt5ZQHBEReyjVuQfsS4CwRyTp8jYgtw4QtnJLVaBWNgfuMudSf3sxtmPGfdRoYVyXmBiFguqNrXiMg",
  "key6": "3D9C6T617RN2cx6UpKQrU3yusNtJCA7347bzQ9oeBXnfwoAeZKNei4kodi1UbwK3TB2mYU8mmnuuRw3Lg3RNXBeQ",
  "key7": "4R7DNsmgd2NgA6ZtRMdzj86Sn13wwx69JbAsUfqskhRhPZCVwPt6MURuBjcgPgeuxePhLHNHxAPbAJcuGYA4gGwQ",
  "key8": "2e4mn3edsmj14CDFGYwhFjSqWC3sRRKaNsrzpw5ZxVa8GxbCH1QPC8CPVuyuhLpcVHjsfumFuVwz55pAdgpoSAqz",
  "key9": "3eAt6Ntk6VTeqHrU5CEncqaSRdRJVyeJ2pizftKKnJYRZTrnnwjd8Aufm8ymYf9SazQA81maZ4vXCwdFfaYtsFdu",
  "key10": "5ByjbdfYYjY74y6iSSPn6s6x2Ay7he3hpej1Ck3pSEouNGJ9xvqkhEDzAc95ZSRfY4dAsutmW4zVU6KjUWNfoPB",
  "key11": "2i9bTQAsiTWKUoJTPsu8bvjENAEVSTxCqGwhvt1uzpcAKytUJTLroonNLfLZ4g6Fo5M4HJJarAQCsa3Z4J6jUFEr",
  "key12": "5fp4kWfFHjVV5de5XhoJRf1Gir7Jevq5qzWy7gThDta2o2htW4n9SvMG4M9xdzu6hDA2E1Jx1iV3Qczr4Xp2pF1k",
  "key13": "3VgnCy2M58TV7DFc979f1jQpNNDoPcE1DDzN82ctW43knKxa3aWro9xJV4DwxFYys8xCmKMFS1yaQ9on2JWm28hT",
  "key14": "3L48hd14WgS6179C9RHEuhGebDQtpbsPp9iKpx8c7v3fFGQXJZ37ZSp2HYzyzyjLJ8cvt5evYAVTdAqFyedu1Ws4",
  "key15": "KTZxY7reSJrTWshTrAdc2Rswi9eQKCeKGCWnPXKMj5jCPk8xmT6Gf1ioLJm2EHfJXsuHJNwMAE35voZVMavBKPZ",
  "key16": "2m65rp9pDoyXtXRGJfYQoigRGGHMPKnYKmkaBHktWTN7waqyqg738GfgF9TXCgYfmaH52v8zfdPqnXUg5N38p2bs",
  "key17": "2vMaL8Tef1T6NKeftiUSjEaefeiQcDVtzXi1XAP66oUats6RyNpbHKR7ZRf22Go8H8VJCzEwP3YQTbognB6YLrn3",
  "key18": "24CuLWBYgqKuZtnLNNrrVDCzTjqUGG7tyucwjPb4Ex7Etd6CXVK4Q1T1MEeFMeVmNUyXG4aYoxn6yJ2dZZ4Vm5Yi",
  "key19": "3CSe3u4dmAFHTnXjN4JGh47vS7W69AkBqhwHKmUVvXrqGWiyVhxMufSeoHt42X2hdUBpKE66m74cEFDvFDSN8GrF",
  "key20": "5uxSkTZA2RzCEGktXD6ZmsmWFBY9FpCBo9MuiAjZxwCepLMctiCBb7oGfyUuQbCQn19KRBwM12tcTR5LeTCTg8rL",
  "key21": "25jLHk5YBnTB8tRqM4SoLB7GMr5ogmdsGa3xVx4hHn6HSppSivX8icmmozde4jskQhsDeBtmbLcL6mQ4Cjvvpbg3",
  "key22": "2vQ5eS8BJkuKu9C7TvJBRLz7C6nJU3Hc23PgpRzpsiYLJPBWo1GbpRW5r7QTU948NAnE8qxFhTUxoFwt3FgjGTRn",
  "key23": "76SSUhEQAX7VegFozy9Zt4hsPM8QrbDAaYdeg13yNRVR4esQisDJfy9E4ocxDsSzFZmnYNHFvT78QBXBKgpcTau",
  "key24": "5TXaUaegLi7jsp3pNDrx1FA6PRK68fwMKQxn3qR9436GSgfjC9YPKJnYustGS4UfGSbZnkDniUYHf89BV7bFFimU",
  "key25": "4iaCPtnatjM5rzdgNrVrxWdw3VoVsaWoxndBsd6cW1UWr1BUMuXf7WbwyQ6h2Xi8WNXRcsAQyS83QCBLQmTxRfvY",
  "key26": "59oKDAraLcbvpGz6BTPpuhnVhCWu6FZU69TovfNAsJdwPE5wFpVx3LSCEBg7Nzb7JSN9dCBcJSP9E3Ny9g8yNfoT",
  "key27": "gjfgT7ScZJgvTkeoK3Z7bDw8DpEkBP62PEdVSBt8FM7R7CsjgyyB5bx3GugbHMhw8PP5pqPqzxMnUKCqkcyr4UJ",
  "key28": "5vvaYJpu4Qqy6eRfgLfdf13AusF9jNCSix1spirDeeaMco4qJXrPj9Sm3kGWTMwuQCssqnM4iHHiDM7ko4hcZDsL",
  "key29": "3wtA8pcRXYZGhNSYNyyrfAj2HDBPrFQRsWtjAKMHmmLjJZj5BrMKhiUu9MUfmD39S38DGQU4Cz6JVeNwSnJE9roE",
  "key30": "3kPH3WPgXWPpZHYQkMEkJ9EYD5zYqQH6mAWBG1v5FdzT4EKerUp4jmUxXVURzKps4WZKn3B9dJ5LGfvKYSyS91xi",
  "key31": "2WBVd89c9pLoGJXBqwKP1CdeAwJgBF4FiBRVc4QSuBmaScMYZRtxdgqpK99ZEfBehVnUxiz7NEX4t8cZrW7EhYUm",
  "key32": "4jxZXhHMcGMD4e1fg2TbgDYw1LbEzcLdMZ1QobxcfvzojViVBrg7c3D6LbkNLu2AHwXEWfdZ1PG14UChZoLPoqAG",
  "key33": "524QgGbteng8NxnFNHakEgNoNgDX6J25YG9rXpvL3LwLtK75tfZDm6EAbCRAj9U6nu7fZqqGXb5t82NpDY5roYgm",
  "key34": "3Tws8zEXrDvjwMX7yUrnBveZKm4238pXqJpzKwrtDdKeeLu2aSCtCckD8h6ea513KHpaHNUn8pH36zFguvBVeLud",
  "key35": "2PVPAyn7YyaNgLj123wNFw8WajdQZrpkMib4HywJoSCwpvkHbiLXTn1RA4CY6nSZcdYSFCTr71qqpVmRhFWMfgPy",
  "key36": "54zGtwEYMbXb8aXgioeTaawjRzVwLyxJA7cnsbRLrTtUbS387eC7idUt3Vr97UGe1hNvTQLS3Ahq89mfzuf8v8PH",
  "key37": "3haH92856KttbNvr2wNyct8719GqWStPV3LkfHzroLMefhkeNLq6nGjMRkXouC56rdxq759QKYZsc1dEsQ381uES",
  "key38": "EKwPwTZyZexgjrUkoH93mxehJSjLwpVa6UbPPQkuz84FVLNjwHRbEt9xVVz1LBL5dkdYucNZfCbvQAJJ92kaEBc"
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
