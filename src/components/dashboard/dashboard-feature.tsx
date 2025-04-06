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
    "31GxSbPyMVdF55ZUoE2b7esJ9GrhcmFc7QRyWkWmLAPJq9ABo9LL281KZyspziiTJH61dkPDXPCToWEGwbQSU7CE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CZRenRZj9oEXPm7CYpPWPBv9caoQUmz5Sz6qrSvsWzTsxugKzK7L6VD5H2NTDYWLkDz2NnXNW9o5fWCiVWkwqjq",
  "key1": "2wUxa1xKy1xAdGViRMM6ePrZf5tEXoEyUuYJm5kCaYKn8nCy1VjAywjA1gmdkCy3b5MtycLgNcRCE6KSUqhjQKDf",
  "key2": "4ZiFX92uTHVNndXMnHXGr22xuNp6KJbRCTGxvnK5zGpjjCHTXftAqxkV9QoA7aFsuxzYG6gJA1YnwMcWR3t7Mbg6",
  "key3": "2PXiaDqd68gYEazcP44Khp4xZh5Bz39BGZ4pAGbQTbuU3hVHhzABzWYo5hmx4UUH279PQW3Krpf3yvBqftpTZsFF",
  "key4": "1k9eiUFhUzhJBBdPyF93PzhbTffpTfFi5wWjWZcKqNNSUhZRsjfdiCP85hE4KzJK2eg13nW9FMbiKEVzov5Bh9w",
  "key5": "4SURkDwAFXLmuB3BDv26xY5mzWMCkBC6Ltnnft6oiVGWR6MUT4LVER4m5q6qtGMtMXLvv3mTpLhCmhUwFy8dxwZE",
  "key6": "3wTp2hGY5G2H2GeXLBi7oh4YAtCh7EVBgxRK3xGxrDB8YhFeFK5oR5hkDFFtryPkov3PP1tHSewQdEhsHPD3WuQb",
  "key7": "54Ahsvtgwsp4UPvEq17TquFAWU3vednBv1jVe5aQTjMX986zbWDz3vMb6zy3istYPQXXV5giSro6oZiddhye5aJo",
  "key8": "5AEwbcidCcu79dnbLEWAqNZeU3DXDE86L3DYv9cRSdkBxzwZi34BoKbk1JeUZfv26hTuCT1R9TWwcUZtGAyqESnS",
  "key9": "2s2yowSGLeMbKmevN3E8iZpCUgnHi9co4UH4tV14mCFZw91WZShtu5w88mWTc81xMwo6SFCahNEegz1eHgqx2bE5",
  "key10": "56sbk4xDtAMJ2JkGGp7C6MwNDmfrWZuEsQcEj3KcAhsMmJgL3b4fTy8Aix6n9Wj2MUSXgzbxgXap739joqG6zZv",
  "key11": "4C6BX49q2Cs6JvpdqzZYTgU949XVsrMkMCwGW5gRC56EhGAZNeVCQdkdHHFShkZwQG51izAthpdepw6Ln59NXU4T",
  "key12": "2F5RYWGXmc7LcxoJFZBNAckPx3dNaog9Ne9Nsujppis1Rz2PHKRS5ysWTwHJVz5XUWdDp5w2DXa8864C7RV53RGB",
  "key13": "2o317HX91cVyuV9YCr6Fpa3Cw1gZ1M4huATuSbLrJhwoUL3Ybi3zWqiQ6KnPem8fEGMgmUgzMLCkjy5m73FCymhQ",
  "key14": "4yUFEY9GUanbBqKdyB2pJ9brXW3CNQo1LiWe1iRM18khMynjaaCYZiXn6ace1xUfqCnzoucq1vyJch3BXMVev8nG",
  "key15": "2auUc2jSyHcqHhC2CFqVm8niQUdrSdBvcA3mL1C6EANhV261zAATyzkDGCFbnv9rf4beByoznBUn5wHJ1VKDzW8T",
  "key16": "5EBz1DwxVMsQvSh6XYtxQWpDVyScWzwwE2sa4XVxuv34EM3qzDhU3YEE2W15ShQ9T2Q456uukxuzjUSdEmc6uvHW",
  "key17": "5kF3XYohFSswyVitbMzEN3MFXdMUbhi8zPLRQndq2Z3f8CKTAbnqj1FpyyAjmorzorBBvU9csntdkr1neXQUs5cV",
  "key18": "4X7f3EmkU4hJWGJtjgzXgHvNsFqf8ZCqBxVZc3YhoqhaSSWKV5T3Yp1AjuRNNLLynTcYw1KStsUmaVh7iymZyspv",
  "key19": "7BkQFTGqCMRQR8BtdsTF7zKycSk6PqHNjhvn8A6A94yt31hqrPAJxMD6niQb8u7ZLQ3dz2CfjLtiU6hN6SY5sT6",
  "key20": "5EhJd1r7JeBcaK8Wq4CVuPJDoc5sS9P9fwsjdyW2yyRW69AgSx97da6XVs7iUbPCoSQhc2NRjSx3MyAmJSeiv9ty",
  "key21": "3MGhwqwTMQp8qKe9weQvyrZMFCLhsM2aWHMcK4JhDvy5iJBno4Fk52xFpE2D8x1SUoLCkaiynXiHbfsKhziskV9Q",
  "key22": "3bgcygZ5qaAqbTcZCYuipxpEnm4zfy83LLYbDiNfWnGNZkUKsMAwSL5hfuBrnGUhsHEtxDFD7XD8Ph4qUVBtX41o",
  "key23": "YM4cdE3v3tkCuiYwRvoyQCkVsky9pAjv8gjJPPUssm9zjDnkUypzZzQkVH7Qow9GY1iXBzy1uevxdbj8u2CewD4",
  "key24": "3qVB9mVyjdTYooNiCw48M7mH1ER84ZEqvXMuieUdRFgK9rq7jV3pZrM3q5fA6pu6r7HvNVVvgw8VuUocivTtKToG",
  "key25": "Xt6gURb8VpTs39XfNraUK3SCwEBV2tEu83GFQjTtk6RSrze5X6oDiyxqeJ2b7oPrzs6f5KzRVp6MmWsLjTfCFUv",
  "key26": "2ceDzmtVPJNU7NFHi7D3hC19NYipVUemTKKuqz27Q73cLbEkbuhdX98yJfegxVEQBZG2mNCdrVSVPJbpHYyuJ7Qm",
  "key27": "2XdkKAXAugYKWiSEv8V7pAHuoujbPoEGwvWsoiTEWYxkG9KZ8J7e2zcXnTDm99mUmPw5RWQLNHdqYaDfR9vq236j",
  "key28": "57MjLKw1AkArryL7vnFcfHysWZsES92Sie4m5U13d7DiE4wh5wWr3ghg3ftT2LfkVwNMTXQ5n2qAEjoSzQmNmja4",
  "key29": "5u9poASDPp1upLp9NhZA38ousQivLVJhYUkBpFZa5FXaEDMpanCeZbWrL1AeSeqkUvHV5Dz9KacmW7AEYSc2gbP9",
  "key30": "3cYm5XY5RovfaeU4W2aBjATDYenrwPbD4bRXkK1nttmGfswktmcQtEiHfyextgomg57dtKUbnBxbBYuadA6nxiY9",
  "key31": "4TrAMyTAAffoLneofz1AbtyqEBWDxndk7tWwPbGK7V4bejWzTfiF7oPZNbSqU5xd4xVV11BRNaX7cdmSZus3Jrzf",
  "key32": "KnaBoSBW6hUxx962mUmtGgMw18UhorvmHsnkJzLXwotLHiTvpMRSGGi1VukooXsRdmUg262NRFhExpsHiU5JQw8",
  "key33": "5XtNc3Q5wfV3RbFZjn4iMrt5qdd2s6Prsedy7GjrQYLrARnRBT7XiuqvYnRwC362cRaYA3NnagN1TVutSmRa28iZ",
  "key34": "4vsvkchE8e4ZWHY2GN5fAC1udFF64Z2ZV9fyoqhipGbKnPnYjKZBuwCurDLxtiqGDZm6QEDcn1WPwKt4YCtGdty1",
  "key35": "5dng1BavQ9SttJcbhbiCS49DhwAgL37cLJVuZTNsdZAhJhSRozvgnYykHXTnzAfeJfF4RvGU3UM4MoJAfqYWSCEj",
  "key36": "2DJ34kuHYTbgLSVEYwb8GL7GUQfmBAy9Sjj9h3evAaZJmACxd136XzNEh2WVn2N2FGuWjYqp2eeFp78yTeQxX21B",
  "key37": "4bv6zafAtwe6A4uDpeDts5iAvno5ZVkRu4cnqmo2RWAUiTKLXkmfcGWos865K2vf1zr15z1gh7sFkWxiZHzHvbi3",
  "key38": "3RPN1fnZFVVF4yvNGZXkn7Cr7xtNfFApixkcx3R5VfBY4496FG4kyy6tEQEAjWuZ8aMtgGz2rt5qDhuk9QPTndu7",
  "key39": "23znCNRTAJuB6bnoZQDT5fbTtffqWvgkmjkdbCwBtKUhGPKx2wuEYTbJacmqn8T4e4ntAVQNNxzirm4kKNe8jSGA",
  "key40": "2dPQgcfwE7bf9HHGUYtFA77jgnqYppVzvqEdtvKxoPcdxm4fME1wsk3NFMW4gBmaFx55tTpvrCVvqy8Tszq4Fuda",
  "key41": "3G6JzHqneuHrGGafAkwiaJWu8VAZXAcxkFiUvJDswvQam7K1b63Z3m8Y4HKP8PxLceZGr4dVrBpxwyBmKgKhXgBV",
  "key42": "4U2YsFBUAzBRCSGiwNwXasUsVv1bWyUgqUH2EFQALew9Wc75tfJRo9UsqbWzmo6nGzHFpXPhiCLShV1RZ55XHQSr",
  "key43": "3aZTy4cqKQzdbh7GwPPjuKu7hgZKAgodMjgsWjfgy9gc1Rz3dKKgCJnkgWeU8xxrAjyiLZyeX1dJX87yJof5T1MG",
  "key44": "2kLu7rgNB5tdNue53FD6uyxNYqDxiyJqRfAP5RRC4QLw5zDWz3CtfiXpETukn4iVvpHJvd4tZJBhX7minH1vwdWD",
  "key45": "2zheTmfk1so8VhWDCWmmu4kiMBeZNozkYfn8UuXXXTzMoHmLCixeWMjSpWCnSm1SG9LoiTthb22R9ewzQ1wDTv6k",
  "key46": "2Nd89j9Xny61VCShtY1L6ygPvm2Q1qPJgSpfjPAtdVqX3Ly7q8Ys8QzEfa73PzjCTPC2QEen4LX62ebC15mX6VLH",
  "key47": "57xn2pcdiPsJ1Xa8TWd3FvN9G7fcmyReNB2ePzX5LADuQEEqG9P5zU1z9VcZyF8nF8HMYj7FzH5fx23HsxA5CoLb",
  "key48": "2LnSczSgU8tLW9fuggGULDLBH3uf6M4iFJsuFqcwBx6XX3u7T75zKJ2uwS9Rk9T58u7BxMmxYoihme7k4ek2CMdM",
  "key49": "4HDEQikheZZh3UwynsNkxcNvsydAYCHaeom7xfyJqkBxLoC1DSGKAT5dEjRLrAH1qEhxuj8ZJMVbyTtK1bpSiJD3"
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
