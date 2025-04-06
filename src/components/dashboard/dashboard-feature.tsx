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
    "5RwEiyVtX4NjHXvgRvwFbp7KqzhpTiUiP4fZFjFEgCZiJWj6V6VS6pXYnjAJ2A2ofBoaggstrsUwBHrcUMEcUfxg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3he2WCHJU27iTWfivMMR26ZJQDP8RZXNPoHaRo6kdvcTZ22wqe4cyRtEQJHTJWrTxfK7QdNcu5SzawVfp4hoaKTa",
  "key1": "5RZQsEDw7iyZMBx9YDXgpxKFYLaehWLedZPTc9fnrQAXZxpqiv7h6WXsCTT9sMFKaXxbvi6rSHMuSqK6MjGcrbKT",
  "key2": "2YqkCGpV6JjeYGzf8R9NQS3fGBxVdcywShNyoDNvPoLXj276hk3HF8tDeM83NDXPmUtTzjn7GP3Mu7NpPQeY8hQQ",
  "key3": "3QirtyeFjq4FBNri9vEC8MNQ2VJeJKaydcXBH9KPNtG4k4cJYttbNrvpgemQJoyf1ZRbq5cT7t9F3qbYPdeB8AkP",
  "key4": "65364pqkudQDMbBkqHWiFtajiu8afNpv4EZJPYwb59nfuFVCJnfEgzAYHzoNDPEmzLwkQ9iVCR8scdwdaizQMNR2",
  "key5": "4SSyK6Q5vRd9ip1Wcw3cDnS7kjgciPvL3vhiyhedK6C1o56zFLktFvQPMQGnKqgSLiDHPyZ1sKto4U9xyxDVxAMC",
  "key6": "7GDXVJoHGR7wqzLtn6wuQDfgApQn4KsjJ2MdHra4MmYq3JWtwCPWNN2ezXdvu1MVX96bA5ZNVazQKFBbP8vvzaF",
  "key7": "3kFFPqKjQ6QDvWhjdAEbM9bbhTyCbpD6Dg7XZsdoCqXqi6jD1cedy97qVKpirgyay2tKubvzMYfGUQg9LrECrZhK",
  "key8": "4DBpQTGjNBmDSbnkXHYLqJwnriiCenHTCjppvPue1UKFuWMsjj1Lv1bUpQVq45NnpvDDjGW8NjPfzp6wMSHpRMiQ",
  "key9": "gDoi5hAoyNf3gMMJ9sNkKTJMRd4WbTN8Uo1UjVPasRbAVkmyve3q9ruWYbgzs3bVYgRpwnb2qJ2C37vTvE6hSAi",
  "key10": "44D8HGJ7DXoSeNzF3EAh8Y4v5qKe7w3xyHVz9n8Mur3ukgCFj8WDn9bziLiApT1PHmNuJNWsBQCJGgg42r9XpZqf",
  "key11": "3CszNVUQMMtNQceL8QzR5G65jvoFjNvsj4a7c7zvp3kEWU5S9RjJjYHsUahd6ctm4HYnmNobfxYLvqGaYHDXuW7E",
  "key12": "2L7t2M9RhQfyPywrWoJsQmm5USKUosgDmthvoufTnk7jLnVyogDC87xVPqdtufLak7eTMn8rFxrb3xxpaRfb7JNZ",
  "key13": "3SGMkQ9h5gBvpusVBtmh1zvhQ91pjtboNXyD4CQafPZg8CtnD8yVKUHKPo53tDtxiDthfFS5PJatDvS38SBypvLJ",
  "key14": "59GPZyQxB3uSdqiSTjwN2p9MeGPVYCvdnxpYK1pdXr3Tjy4K76mXqjEayzYzXthYCemdzcAWz8nkmq5n9zyfs7TR",
  "key15": "4dbV7cFXa8MvLoZ2J1hiavpv3AfHB7VrdCouHXEnEByU3UqUC7RGUNawfX39vnsMqMJneTG2iXv9SwacsX6CZtwH",
  "key16": "53P5wZPKw1Tnq5RoVC9iN3X63Ty967e1AMFKvYkBHQcTz1JNqLGHhZQ2i2ngPTXwbnjbLq3HrgNVZSupRabkkJZ8",
  "key17": "53bTcQqLyfcqCyFSgdpW9Emx4oijLqJbn5UQeqrr87XeVC8qXBoeNpAqwhapZbuSBVZcdupT2t4gcPUtfzu6Ry1T",
  "key18": "3X1zd78BuCU8BpZHcdqqXQZW1dpJQPe3uuty3CanjsXzD8rQmyhJQTvGXFZgqMAHMxUToXzubHR9qY9At1gnjzLn",
  "key19": "3vGKDw26S2v3tbGdXzAghHc5Upj7uJ9QMozVeq8YYExVp6GADLjxo6P1SRWYPZAEwnB4WZvkmYE5DCGFcqc2uHfX",
  "key20": "2ozX9BUn8GzXRCSWdm6FokSZ9EYT5VKJhriYaoVcWjQtgoudN5y9y8MZqs3jWrtUZo3ok9H2akYynV6XY2rfkWyx",
  "key21": "4U1kz1iVP7ADuGwB5uwe9tx4PL4KCzer1a3vVWfFpv6cQEhD9RuBrSmBJqwQTe2kGSxiTbpcJ9PTqbZrpWfhw1wD",
  "key22": "fabN5tKasRFQKLDWSojB7wjEmvTd9ibiNjrdTGC1KZ13xgUZPtKB4dAhioAeZ4Dpv3vUHCWAk115YsRMNyTyoMe",
  "key23": "eND8PTo8ZtCahxLz1ZZ3Ez3EDUtzKwi6mydf64E7RoZ7Qfk34AaH2htDPHGpRGiWvqJd5w6oTaXnMskZ9uzj4n3",
  "key24": "4YEp93cyyUsXcTKFTGRQmG5C3fKw4t43Sk8tUYZHHQa3qdEHRqdosQucJ35e4193MqTw5bsgXPSvN9Ar6qYvswJ2",
  "key25": "3AVWRHw3y1gr4Y1jssrcAEyXPwTXo4qpmjhbe2kVaoGmmc5HXWLirwE9RrnGzJUajBtBpBCZBCreW3eLt2tUz7an",
  "key26": "2pVqeiACgMdWTEg1gyYvFsmLqaUJqP5Q8W9335Ld4AaEYUoCZEM3DC57tPXnukp3Ko67hJUKobJR6YZnQwLPy5Ac",
  "key27": "5Tsq3qghdavBhayrLo7YRTkQN1tMVDhBu7jVGsQrEyS83c3qnMrFdaK52SJmXCBTi7WT94fAgEodScFZ1p8ZjCEN",
  "key28": "2LkKRg5XuvhbzWgobYvcshkrCQaGvagBLRMcR8K8JR416cydqpLsLALSt8vhw8VMnxbPDPdQyFUzrwoc1UHqL5ZS",
  "key29": "619a1ktRwWSjZuasJLjAtyei697LMabjyAwykA11Kjk29rdseMGq8hMun5AhMmAjWfmsRRtM8Mx7pvW9m1BrV8fK",
  "key30": "59iuHnVhc4SubeE39zodgh7Jtki5fZNhKgfkxHt4HGLeXgi44LGaigvaqFBv42JyAMc48pEFQokBHKBTAE6VVNeo",
  "key31": "5hf4CedbN54TrvLVBHZXp7NjYu9tRnWkDuLTrnsnKarE512mMH8jL4pj7Z3j3AQrjQheFBd6JxafAAbeEXHJXQrc",
  "key32": "2WcX77aWtu6fCFpw1YDXMKoi7hzvsiQfyJTMzPDoYffiofK4nZxtDnZEBads3731Hn1BPX7jvuUV7PupSvwzWCYW",
  "key33": "5warqiT7hrmMCYT5mWV79cZ6DhbU6ntgLZ1ZSR6DjuJpk3oGS6ukNn3B48Kju6LxTtTRd91z528PxMYKftmUjTyJ",
  "key34": "5SMubsECpnAEZaVRXWaAonFnqV9JX6ytXzG8qK8JvqhZzRvKArGV3XcDZvcVsRR7pcsR6dMyAhEnqKm9QNzB8meH",
  "key35": "4c3kiWk8BEmmdZ8ieMEfCjQhJxwMRis3ejxqtRjUPVr8d6Q6uLV1x4BU8sPmDbNqMRs58ACaaFNeqo8ZtLmY9B5T",
  "key36": "5mbEoA67R9vkSndMJmLTz1SVCsANacyJarK44BAsWW22CjTM2QDB8LyYowNJHManFQgrT7b1YQcXLP4KLzN3RFNF",
  "key37": "4BUPvGqZuJLfawz5tP6gFyTZx4FPA9H2aXvYHPe2Ebqzw6hBJ6d8C6chB5xSgvZWorSyfXCboGDb1bvQLWX55jDL",
  "key38": "5CHGnVeKmLXsSBCYar6vDbLBnj1FLQsWwLLLTLjcYuuZDAuRDQQja1MmE83JhNZV1qJzog4GCiqqATb8CNYcju5G",
  "key39": "5bUTbJWvUDt3LtGCRkmX3DJQKTpiuKUnxvWGo1GkKtbx5KxgUtW8dM4GGnqT8wnH18Cj1uFz47mM8FkEdvkMCgBB",
  "key40": "3V3J9ehk2WRimMzM2ssDEHYPTjeUXduUoepVrrGRKHLJ4FgPJRKKEZ7hdYfLtv4Xns3fSfQB6P15kqRHJ7DJimJy",
  "key41": "P1pPU1QDL2Ufe9fBcrMQjWS6k7TF1n6x6kAsdBii1U6SzKmrvVb6n4DAdJhFccHkLboFXJRG7ww2QPTXgNh5oT3",
  "key42": "22RiHoMYcy1AxYbAhof8mFWw8VED74YJUivnbrdrroEHPny8S5xdVEZGjS9Zk6Vm1gYu2XyFuXTkryEn99zBAdZX",
  "key43": "5Yvcan6ggSseig9By3vQj8Z3ER25xHYW12YQd63Ud7sSDA9hd4Xok1kppwRZCyoYkLD56GLPXdesQ9VePtgiYvYP",
  "key44": "4CnQ5usTy3yxkX9tQATw7tuhi5bLQCTWPEH5oE8DyfhKZNE43q54BGQVicxFuZ6Tg6ZBW1JeNez871zKreQfHinK"
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
