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
    "3F4rG2Q97LS8kPjfv7Rv6qFVUJWW3CJxnuNSeXEYmctqXZgD6GdM7gTwZ1hJWTJR6oKQyPHwZfJkNoZP59anq4RF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AUggknYVB9g5kSB9dGyDs7qX4YvkBHnMxZkJ3xPQFEvt57GcsHTEUd7GvbEDq5Zp6KEBZe62pXXeAFjgySLgyyQ",
  "key1": "3vcmL48tfB28goXZT845boXc7sDCgohUkQ6wCmpbPwkMNbcomZNCoRqAu239mLUEEmG3H9GD3f6JQYfNwW3TZ3RY",
  "key2": "26HF3xxGLqTpHFUTYUtQqLmfYvTqjUk7bjrA4hxe9FU1Sh8Sw6x31VoEz3uZBvA21DjpS8sipVH1uNUeEfZrRXeQ",
  "key3": "2dSgeki3tf63kBq9nmWcoKigRvZ2vp4yYb8F7YP6p3xCshw1tqTryWCypBMRJVUAy7GSKnhJ7YfoH1Eda2sQMGZB",
  "key4": "2VFdAyaTBrzXdBxWGkiVaZywmx29UNrvhG1Xk9N6nC3oQwvahQQ1R1Ba74aetwjvDxbiEdy9RUueJYhTLE2bFYjt",
  "key5": "4z9eogYD4QPPNFaAwXocSvHofhMHN168nHnEvtHiDACiwwapsACQg3x4V3geG3fXuEpmvceeahVadBSBf43WE2w4",
  "key6": "5dYnvisgyLgPrsHMYB7PKwwg17vG92s1hbnKs4F55UqqGxxGCD8678uEMAjhqpKqEuphSnZNiB3fSnKKBSKzQRhD",
  "key7": "2w3XcXzUX5BwZhuBS3cWSTYzFt1CxxNNh1DjbQvEDnjoxkKAXrJTnp9xGDbh5iFxek1rd6rSG6dVmXiRvcxcsWpd",
  "key8": "5UDZ8xRoaZUNSadzWk4CsnrdebCtG4PVtLhuHMhR8fMcodbV5PoM94xkvcasoogdXJFpMN6a7iTwLuUT947QmzDr",
  "key9": "4FZYUySXEs1auqDyppXVs5aWYaZ3atxyAkhst722vKB9oc2WXizDptXuxAGtQhkBNHZx68hWdsY6hfV2RHzK3UYF",
  "key10": "5R4DPoksmLMhfe9dLuqGGrrKGbxz8PwoCAWxjt3iVaFZRX2FyU4vjgLZ9C6i7TzGM5hWmGMyYSDC5ppdFnmtfqHD",
  "key11": "6uEcdLWvVbSFcgJCa5exvjc1aZviDX8RjcYsV2TtKm1XsgvgKvxc7BzULLbDoMuzxDnRoEpYs1JKdBg9z4HPhXY",
  "key12": "4jvQ8wh5wDbwRh95EWVxNqYUy8TAZQCRt3G1gsXxPi5FLJW4jEPc7PWfJAcfQ4uiBW2AToqjhDohkU82UfZE8Ggr",
  "key13": "fvdiGTWtvKtZwTzMnhCNcX6Xiz9EdJgH3K7Qwwy2A7Qf1j93XFC9vZnjck7jk6DsTfPybTJ9NwFS17bEydTKG8h",
  "key14": "4cjTEvhq4EKxdhFkx7SVWF7i6nTLb9uRgBn6xRjiBkjEMi18So3gg13QKQ4D6CRFLRh812hovdMj6VcFCrkwJuHF",
  "key15": "27vDAKtdxg7pMZhBK5Crjs2agaVj3wYSz88gtGLpH46g9xDFcMuAqHSyQX3N5BXiMzV4Kwy1BVaxLhFxJ66K7Cxt",
  "key16": "3WMuWoWT9rskWtbs4FCmBFyNUHWL7YD35VtsgMWRxTuYgmsubJ7web2KoNWwcKeexQReJDAis1qh8pNqdjU9XddH",
  "key17": "345eYKwKi4mVGC3B3znhfgXMGy2389nBY5ZjNABeUDjgWh5ujS3jcJutwj7CUDfpbKMTgb3tEF8qTuUyexEjpAjv",
  "key18": "5bnmoKvCtwLbcaXwg6oavBwcy1S3y72cHeCoFhHPkNzgC8K1QebXKctuGQvrgdQD1Z9N5djv49od82UNeM1aXQn6",
  "key19": "3xpWaUHdPvtR4nXoZF8q7RQh2NPvZsidpqVA4LEjUZ9kp4LZM9xtih5NsPHC9SA5WkyMq5ew2NFQK4wPDuU4zamw",
  "key20": "3LsS4rrKaEKwrjA9HP2ukFCCosgM1f5jua9zF78cKpAj9rBShGWaFgrsZKrZeXo4QXUhBJszWdvKENfFnuVVPEK4",
  "key21": "Yv7s7GCGvtb3su6xxwL2jNg5tYy4Cy5voVevM42nzGGhumBpVe1J2hMCw3JqcgLjsh2FtuMBPrArmBqjoxDVTnM",
  "key22": "5mzfq7CH1wq6Ce15iWbzYTxFfraAMgPRbUmR7xcdCNiCYKCGtNFG6fYofFm3ouCVCu3kYoZ3KWEnYD7yN2wS8BUP",
  "key23": "4Dkc8MhvMbAHjWSBQrseUjcqoGk49h6XSVa3yGEm6cyMXCH4fPNd1J1mj45gUtxJRSPZCcQZtkK4kGvRuWSTCMTk",
  "key24": "5ETKaV5ZtYYqjFHAsaxLnvLz87YUGeATeUkeFXX2YNqCL6ovUHPqs4KTqba4skHXnquJjteVtVnNQvouL5s12fd5",
  "key25": "5satbRjNKb2puj1Ncn5Pjx6EecfHRB1T3ASPN621jFdghjECMgesBYcJYxPnyQTTUgawF67qrW3kHBpMPVwbAtyL",
  "key26": "26heaSDnKsT8Fh1WyWYjttLuyoCcqys3VoTUpjufsJCPnW3osdREZsxVR3Qi9QjhJh8fWnYaJgMVbs1X9t2yVN5c",
  "key27": "2SCe3qezS6KZm3rnkZFyvD2KHyRRJEeWGc6AiNFcLnkM417kTLv1LvtpwoNT5M4C2hqsd72Ss989KWiaLq2bfgVr",
  "key28": "37YjyDrA5jB9wuX4F7xNKMMQ983fbCBLMUYaNRhyBfVw7YTcWFV4eDWxqaTTABVt4J34vwE23PJfjQbkTDSGjBE8",
  "key29": "b6Lzq9Vswv25QPBbBRUgv62zmYCqmrFw3P2868wa6mKaNLbgABKFLAJZXis8TcaXrz37SDy5dEmDw9yGFcuXus3",
  "key30": "atxCezWngp88fq6Vzv6wHxmFmj3UAHQBgLBYFp3iUY45zScjMC3gbP6NQBJHUUGBCUXecTow6rQWPw2av7jJej1",
  "key31": "54n6E8YQmQAXMFQHnAsKKvKwvBPcXXzECYGnpfnnZajXL5idu8R4A72iUHf9wFTe7phEWfefRyK7PTLiVE2RRx6P",
  "key32": "2Qu6qvovohbBbDR7ngHPBYGRsETTWxxTzJDiA4kmYL8C5rb8QscsZeuXm2CpzanQ6UpZgbZbXECz4r2tfVtjuQyK",
  "key33": "UvKssfde9ybcJsdPWytQ5Nd5913HD8oi8fsQKf2pnYrBLC5an4tvwFhH6hhtnWiy4YiCHPR9p573KyhqkB4xAaG",
  "key34": "4r4RmPhcUDMjyBJBnJ5P6jo9978FcEjJiRcmoKFUki4Vx5cwAY2jG1Xcg3izSQqNjafnGP6FWLFGDpL5NSRrvrEe",
  "key35": "P4RsSxrfD6aRewsqbcfXawoRtyrx4wDb75Yx4uxPYijuAMvu6DaeGFEpCVgV8evsC2abAMpZXFzE7aW5SLawZ6n",
  "key36": "3aEFtuUGQ15F89LtGcFm8jfY7Qh4mumx6spYdD5hHsSx2MzfubZjYeWWd9HsTAvYzcr64fTHaUqxghafikTAw5pp",
  "key37": "2qURATPLubXRKpjsND2Uy2Sx77hcPcw5MAxWzWfXNswQdW3h9kr9SHhjaPtK6gRsH4CqZno6JKDbDxpiMexmkiku",
  "key38": "63rZRDajMeNfcsm2B8gqGbqHgnVbh7wq227FXghnZDxUUuJBvLmuXKjyYvnW2fZ3HCA2T4pxMZMTK6DgtxozMJMA",
  "key39": "2BywZ8KEPnPjTd3xMkJeXLwjcPmpfafjE7RQJS7fCEQtnhFADPc18K9sVGjR1VMaBwRESum8dPYbRSwp9bYhkig9",
  "key40": "64JAbkR4oZQTzmjpg3Lnqxgj4mPYhJo3dT9zStyF6N68HoT3nnc2xM5PAtGPgrhpjGFLMV2xkJmEGTYWNZrbrASi",
  "key41": "PpVH5GSMNgQZmcqtCgd94npTdzLzzBvkgarST6jY6JzXxm7ehkqQ2FxArmEVDKn9p1MFxGyDtMm6GktxRhCbr26",
  "key42": "3DS3kqUcq4BkJVQaVcKbQv2oaxBnk7vcwyij1UTNeFfdw8ptHy46NbkUCPsEBQvDGVsGfbSEmgFM6vekBfoGpuG8",
  "key43": "2jiBYiKqsfiLCSP67Q42RYojuPbLJMT3UCATXa8Dznfsg3otXrqLN3xD2hpZHKn8GfMEfxwRvfSVEfXosCQj6p8a",
  "key44": "5NBq6PKXkWPTRnzx4DzjtmrnmcrsX6WJTQnoyWX88FLCkzcfN97jDTNFC5EEKG3cJQTsd9CZGuH8fgk8XwbfbeWV",
  "key45": "386VYonuNhLahQmbNuACXvbiRcCxvDs7ZyCGAG3zFmNKMfXcnvU4xSs5TAvRhuLP8dXkcuXRaxrGuXu9iYjw6XJF",
  "key46": "4fc4FPns9vk2cq8oKXqvuyYp96gdmUaaFYPP86TgiWihKkXzhRd1BVXNrgyn7tzFrrKFYQy1Lt399aNPY4DSJgRU",
  "key47": "2CpKZJ2T1q6hb8eTEsjTXPTXLQD3nyyn6UDJc9h9vM4vexnHtG23BrjsLrHqHvbF4mWykAQEtBSoetQBe4LTM1jT",
  "key48": "4ydZY4fR4vCyYCSq5JyrtiB6NRruCQAULNGfJAPPn6DPL3bKM5CDwMsiceeS9cBgfx6P5qH7XTzqfXZNqWWF5Uvt"
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
