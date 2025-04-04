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
    "5jsuM2LK1AJPerbpA2kndkRGLC9ve7gSAdTc5keQFe6mek8jVVZs4EAmGg4RhEfAFD5tMjJo54MsfNddsvYkDRxn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jbQvLUYzHBXVaNX3sGZ5P1wMu5e7cW9VZc4j9J7WaUCfjWpJJCRHhsjRCMKs1g6ah6aMbNBNwkbW2ovpuRoBV4G",
  "key1": "PvuBNmELccYCeWNvnhSz88ALHdSV9PYLv1AXaVHCquxJiZYvob6ZzsGhL6PqDdPUHd3MCb3djj75LqVveHrgzMb",
  "key2": "4JTp4Cy2rGy68ggZKt98sHjyuUdeaM5MynuAi7MbhRYsDVTTQE7c38k8vBvNb8BPWk7NYFVqQzttFFPiJhyhxMa",
  "key3": "FQV6m6isgTXmKYsnwpZPnTNnLjnQQRTQFRmZtYzTd13pbUwPypJsqZpEZPW2GPrUCdn8YmfgeEkSefT7mVTXMUV",
  "key4": "5K8CUXcrQzNWiasSQieZqSRTJuHys3cYj6GXZ7PuqNdJMdYmzRAQgW8ktgZTj5Ze7zsDB9LzvMTHnCKkj6gGSQye",
  "key5": "5UJeoJWGLhedL54va2FaESpwHrtMyHpLswYxmCXsgBHFD4jFepQzAnk8oQfsrw57fFYLMhhU21d1WudiVpXkM4M4",
  "key6": "5HUHuBLCQZMt7DDPMEhF124n9yFa1L5X7GP6DSi2Qx1B3kLTuuuduvtzV8rmn8SUMV1cZYK3fhP6vyqMmkB4cVPu",
  "key7": "2TWhSWfJPwn7Bqw1BAsr1JE6HEjMM4oCGdDDoVm9PGkmWaYBqeuu3PewrAZYu9pVPCsWG37rC8WW8Leb2us1Fnq1",
  "key8": "2eAytAsPUAq5YNaHJX8sKV3VTwPdbnZmYAUo5BAnezDtCgzUTzY1LT5QHDdiyVu8jgSVEpHrpLBoa6XKnpeUZ2Lr",
  "key9": "3Z5qswTB8HMsaVcmngdSLT2RQxhRxMtYmuBX8RGg4i9SQKFgASMu9BmQT4pMXvwgvexJnX4QJhtaUK7TtswCuxUE",
  "key10": "4zBwWFV9GuDbUA3jQGouyvMGGpguzQAt3bxurynqKFcT1WLEkptzSC2MQjZ7TJHMf5rWaEf5QeFfxxqgrNRrSjvB",
  "key11": "3tLUsRQmgriPTvbkgCxnLR1uEnWox5pom3f7LeUjqHmpxA3yax94UotFdNZEQ2BjwdMwHXazZKVHPYzo5Tmogunj",
  "key12": "5hfxJUUAbLGDYjxz7uRxR2dpSvkrbHGrFB7ZK2rbnDRHNvWQocRLas9tgE1KN4oRXfWanPzGxBVWb46Bur5ejHBK",
  "key13": "4QLHJRVXgbh7kRUCdXVt13Pm3jLnsaUqpQo9jeBAyuSxiREZDAe4MMJzikiKcYUXizynYX77J2KnLBtjzj9291Zb",
  "key14": "58GhjmbNUCtoXSsXxesMQfrPXYerFmC6NbpgD2g6p9wukPMHFP5VsszFwrUu2L3S1tQR5jrJmnkneH4GtaiVHyvN",
  "key15": "KYgZ5wwLBhU9StEGS6q7fPZTVKqFrLrg4GxMj17aFbvWHyEGNi1MyTjUkkBQscm4ns6AEFuQVAYC3srofMCmxWW",
  "key16": "4tQV1R7i5brGegsLy2vM9pMBC5PP7opiU3NaLeiKbXZhpFbESp1mGqRmTe8STbiRo55jGDwC6bFaSrPSSTyDMqsR",
  "key17": "3WemHtiFY5pFTcWVMMyRiXZTefdapsQdcnwwf6sUqctjbiaAvoiZdaGRYFx8pHjd2cWCWVs347B8ZDb9dyojusRh",
  "key18": "2y1i9NB61onh3va2rQEbQuvwADH3b5BqV93xBrpuAAwoyy5HN6W3SxKAx2tt1hg2C33fT6gXpEvaAMJpaMU4MEan",
  "key19": "5JnpZhvm9NzsheibueatUbFYgtty1C9Nx5c2uVPMhAz3NZ15F9hzMqMtxbCoxstd1mNiT2GaTnVbBVnWm2RXFRor",
  "key20": "2FhwL6RhYnihrfmPUPgX5rMuiJzrfo9DN4gk14zamZK4MCqvbmFXiaKhEEhESNhEwm31DnM1nSGy6Suu5pYiMqRw",
  "key21": "5SxmfBgQvD3eprGvkQJkk2XW7xpvwVZhH1ZVrJX4DUQL9Wqf7CagvPj4cRtVeq6RBv1PGEcA5cdfkggdd2TCDkea",
  "key22": "25JXnTuBdLNMCzYuQVvvyrqBSbBZfyzgUc1J1pp4ZzzUEW91gj6JAShNEU3955ypTeWwKJ9LU7tzQSizwXxcPN5w",
  "key23": "29XPCdM96fKXpsCER6f5itgsHNcYY1cYJLcKeaq41UinxyH2BBsQa793gsUda8njaDknb8SvPyq8cyJndPpHtFSn",
  "key24": "53QDmcNvtVqbZPV78EXAjyDbHW5Mwyd31jFtjH5PQ277F6EUSGaCEKthuvmGU3dyRWThkD68p9yR6xLZEtyFbixR",
  "key25": "SMhTmxEiyEVbNEFHRCbeeGbi3uQdp5fvaGsKHogFuyvzW7x8PYxrceTZYwH4QaQ1jpe6edHHFBMxv2AuGoce5vd",
  "key26": "4cWbKhK3tbpbvLiA9jL7k9Xck47rA8qZjZaC8ovvnWbn5jWvmVJm71r4VzqMneaPCMzR1GLFpe9PowfpepxsBpSC",
  "key27": "2AHtorq2ypwJqHbPSX6CQ6r6HZaNc3QjH3hyWrCQyYftxKcSSYnNSHzZUTchob4s1Y8hgZoqshJAJ7m9CitJicMQ",
  "key28": "Wjga9HZuBHcmXJ4gkGafsnVmjvR3G8qhAZtbqAT7ziYU2YRtQe7pNVdYvQyM36RPS6vBHXppKvv2fpGpWtYDzpX",
  "key29": "59uqBUZKC8aPjWvonTptjxhgXe67KAWVUxXv7LvWCez4AHnvX4MaDUp9gmzTLcTwgEevTojj4jGXhNGCW32ddMah",
  "key30": "4Eh6hgCXE4ax4BixBqC9LXvuuYbWMEsxjuTJnBUoB4gGkxgaHwYkmLDJbPmRMMDSZrJDMrBWSKGD3RAWLcUtQ2oy",
  "key31": "4Yj33sMVFUYu6iFeuXuHbqfs4YWow6CETkLnybpsK7ebnhgrXg8ExtnrXDHpCEV6vUnf6e8ZG2AQPYjtnT3Fg7ig",
  "key32": "4mRogF1VnLngEQ8f2JfjgzvfNWt3zf3PuNn2jUZvpKYFZacApt2CzS8BV8XjMRcbs7zBk5bAcQ3dVJ2niBZzsvea",
  "key33": "2p8jk1kANK7L7s59pGHodNqUbEBk5R3wwvPToQdEGp2w61PdFNHy8m85dEA8zCiHfDu5KFR4fWp5H6Gjn6eFtGmV",
  "key34": "bPPhfLnU44MRs2SyAsvbuaDfJLnWmPsD1Yfc2gmDhic2i9i2dqceC8Diawzh8zcAbbxor8omERT7zDoBY7u61a7",
  "key35": "5soitfZEFjTAtxj8RGqrAdWuuDibkAmNpZN8U3dXX84NupvhU6p73BTUnxXsUGMb1NYCmZMX39UV813EQnmELwPW",
  "key36": "5niX4py8eC21C7PXYGtoQ7E4ceQfVb1EdAB9bEY5UhVj5TJBwVSvdFHZrpTbS9jVAjGzLBfte3Uj12LD7P9WSNZd",
  "key37": "t5NjkhEXf6GaXF6JPzy4a2TRksw2hx9jEBe4rHhHtsaUWTKWfoN2FxPw6Qk5d2D1dV71THLUzMaGqYPR4pYWf1n",
  "key38": "qsLwpiUShM4SEHB1NNkdr2ym1UL8GwUF2N8fiW2MmBFJRYjpuhvStDzZjBCxf3NCTnm8thDWpasnpJdZ3By9PKf",
  "key39": "vuGMap5TuTpG2rELxHo1FECeUxs367opx38J2kXMUE5tkyGnyVXVH6EBT5CAh6V6AXwQ6anZ1fZa2s7mkVotWkY",
  "key40": "XEogvKiezd2XpxAkFcExKeet8BKyDigfSQpA5b82rYc5Ewkhs9DKSzL83F2F7RN1aiN9mjvyH5xDPgfchPdWvA3"
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
