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
    "3Sf9SWbnWoYAVDJ3LjSkvv7yoxcKohbw4KVVwPioKkQQLXYEKPSoDoh6ruxCFkzWQX8pF3xcSHDYoCUVrSiyf5Uq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fs4P9P5WozLaf2epKtypFB58xfryQuBdcxvo6jmFh1jT5fe4UdLzQhJ8XH8AtsjX2FaHoZTnQ5SissYk3ruanqt",
  "key1": "23RdEnNjDuCM9jzyyyBSm3tZHN7LfSUe7DLUN3ZMHCpTPe4eKVjzrpQ4GE8TaCTCpjxpFVb5Puws8Wxipx5U1NxD",
  "key2": "66Lzcmue7XucqArvUq9j7FcCcKdDdS3Tgk85ak2JJhr6aHcouvGRDn8U9h7f6WSUJcfqxSiCYgTfBx4v3c4rGLG9",
  "key3": "4LGYwG3PWsH8inv7tfnvXErW2PPL2BTg3jNJvD4QMT7p7cpUgG17iTyPU32o4a7kBhX6oPahqKgudmsDBmFZ9HfB",
  "key4": "3DLGcPa63RtnvyixjUroV7kEApTTy75s7RdnSnv8dr6sYHmx3peuA1pWcdgDXf3BHdCqze3GKUjjqMtvmnYceRmt",
  "key5": "5caY71iq2EEd8dwUcaZSbPzLUGMXA2wS6PdkJNLKi5nhNCjcnSCTHfX8tQEZu7yocmA75jeKBxsYf9yv4mAjJGWp",
  "key6": "45iNYQrmPvy3441Jk2WN1Lg3kouMvJuGWEAN46kJHSjN7QbwDFas4sCrs52PUCZk6NbpBDgwNrWeYW15LSPxhEa4",
  "key7": "TNQFRX56Qqq1c8SzyEfkZLjyrFumpShjTau91QY9pkymV2qM3htotJZkVn4pybrCq67u2MFh3tnT67wZegLieka",
  "key8": "28XXordKz3xoaCNZxHCrWbuKJYVDHeBnfT7SkAHEWgcUv4TqTUNq8pMJMp8ucqaRYqfGUSsJo9SmZRyFdERneY3L",
  "key9": "5deyZD2vvYE6PFQsEJ9TEgwdtWMgkGg3SQQkRYiw474XUQqPz6isbeUxkxQPAijJ9kj6hC7QvpMyoEyWXwP8Py6a",
  "key10": "2inn7UtnFUAnK8Vk36Lyebrs2GMXYUKjWmSHtUniqFoRyNCpbAD6oWKXMBKFDMCiggyYCptSrRU7UmwJd2JKuuGV",
  "key11": "2kK4ycEiinXkyY9pyr1Ai2oHFseNUu895XHBfMD6yKMSizitEjouitewdiwuBiB2j4jboMLKn1CzGVpJJCq2Qbmc",
  "key12": "2BWfyrxr4T5HZ67ScW1ibAnBoK9kS69to8vhryB7yuN44U3Se6hjYvHBaLRB1qCJGtQ4CtvogSpJDSNC5DmewGXC",
  "key13": "5fwoHavMdFJLqtsfwAnA6b3miZryJLWwUNzLDPSfBjNAM7cWsfPzzneP6YTERQxGUWzW1WJebnN8ifn8Xyefyi6H",
  "key14": "5bDrg2cNN8ebBUymfooKvE9oSwZrCLNwMthrqBJvenRf5rcT24b3kCJtSdPWN1tNVtBAVgMKELa9YATj4DfpXiN1",
  "key15": "38UEW2gxwq72QzxMSy2crbSWFpYXRBCz7FYQqtZDaGQ83DEEcKXp36XidceHxW2f9wG9W5SoqfkXXB3fXJVUHGkY",
  "key16": "3D2xFw8GzGN124usCXrUp6ccYxXCiCt1kJyGFm2H3afJxCLYG3Qg1TRikA6hUU1iZcfucXBevgf2TUr1RjLB43N9",
  "key17": "QPtMz4EXWRAVbKkP1knTNbYdFmvjm874LBin9mKWvS7S2Yr79W43v8CaWJarrFQkbuSbPHSiv9KSvcqhup74jPD",
  "key18": "4JjSasZ3A3GeAMVuKVX6Jtfa93EP8euYf1L4vbEjkwRRrx75NN7etQYuzWwYqDFnt8eaoGpBvWcx8f87PrB8yWfg",
  "key19": "5CtZUfjT7LoiGvL5nBfmS694P7RsMJ7a5CEdxiDA4jJvvz1XxHpDPta5SXwa7iZV4jtMXXHxsK34188jbBfPtZC5",
  "key20": "CEkybSRKpPagjdCV6zJChQ43eUqC993BwTxUAtFpJzZJHgFrsPqirCosAjdDFjnBTcohHFuJndUBrYicfH6Q88i",
  "key21": "3xbLv8KJtjZMzNAQSp8CDPzPbHyzPR4VwtmruxSAbF7FHxJLqGTVGxszuvNtNFKnzk9hntE6uKhfHYr3PmpgED6J",
  "key22": "G5nRP9soZLzXtmU4EScjMCf6M1gHgTDTKABaA9icnVBGkhPeqhsDKUeRa4kwH3zqGXt7A6e5V8rSAYw8zf6fdtD",
  "key23": "2e6rnNjuGzmevwW94QDXvGdn1veruAmFKcmUHauQfabxS8B1ngvLMeco981fw1dQxjB4WbiXKaz2TdoTfg3dTxc2",
  "key24": "3RQeYuMn2X1iA7xcKmbbZMwoxD4QCm1JKKPTf4WAC8nEy98JvejMM27tUmtpNCtethG3pf6yimJPQ4NQL9JuF4FL",
  "key25": "5gnLvh2PzPv4sQ4EDXZNTsmDRQTK4SKPggsNHyU1uiQUX65rT3WURWEFuCbUqhbAyawd3JofriAuMjPypoPSLjAD",
  "key26": "Jn7bw8ivXGbuV1mW2HdmAEWZJQD2qd75pu9rHJkPnsy5fpsvQ3c66GDwYaqp9wBkR9UkYX1ygUxYFPDdNhhPoMb",
  "key27": "5shMpKfnoUYRncACF8vAnQN3AkUCpy9fXPABpi2Rr7mvn88oWhQZaxDSkLWkHUNyk8BqasJuT5WzBpGrAnrT6Bnp",
  "key28": "3aHbv1isH18S2w2T3cewu67SFGdB5TCQ3jk8uLH9qEv5MrzMuRycj2YjSHcE5okiKndfT5SQbhLJsxKZgtAb1T65",
  "key29": "3s4wNAwvBMzbQCWgRkGpVXvz6mfLLMjCfXRL6GBP76girf3faTaVW5J3CWFuLUwVyACRqJK4YcqEXPtn8gsPZP1Y",
  "key30": "xdg3FKvrx3ZMZumxckGtQRJF5wtZ7gVU7GtYzijMwPmhtvBxa9Q7PfUBVodqY8hYjhQ1HaeHhm6mdoTPj62JHAn",
  "key31": "58KGZTztrsyFoEs6aPUhWHfDps7KZzhPt8YqkRYQTfxDe5GnN2fZ9jX7gAD4s2KehwxBMzGU944KAiZzWLAmn7BS",
  "key32": "61F8td2zQrnXoZDPrZFFF1gLZUC6thmAUYiX6CYLjQ2pV5ao7o3BsKSAM3CX8hkmTVJ1LeeJQ7hqMTuu1HkefNwK",
  "key33": "3DyznVU7mxfumLZ6CYqXHUJiKtFFB69WTfTyW3zmdZJbgPj5jjVY2G92ymMGmovtAAxuhW1LbudT1HHf5Gs7TLfE",
  "key34": "29w8dXSsyximEQxjrhX7m1pUQAsyCdnbgHdkdXmryTXGK644S8F9ABCGmgQGUcct4DyueXp2S7Jj47q8dbUfE5k7",
  "key35": "4z4QTBmGwNvYA9pmdzfFAbRBpMkXqPHRPVAQNBmje8V8yD355T5zJCVHHA5NV3BXDMDdAzsHUbsjNBAXAL4xv96j",
  "key36": "4D7XqzFRuwFVC68y6JSrKHiEk2tDTtcNunreN2NFz5pbXZFZLgY5ZD3E3jhcNmqDMf5Uhfg7UEzWhYqJBspwWVQp",
  "key37": "3ye8tMGnH5nsgRzzWfDoCnjUmecPZMojX3wq2bc34mtaAadqLKEJq2hxgNdAzcayr2xDHgoTyx4CWqS5FJEX1MNM",
  "key38": "5wNQsQtZRi4HvCVtzcALpuE8AXQWERXHg7cN3Pby3Q3ZhzTFKb5fyV28YXACsBXwyunf5fpwtotdBgTqmXyJb9ip",
  "key39": "p34pCxQAJLYu6BobDDBYghy2WuX3FVn2UpfwUnmQQM3SrELjWePzJAtSrmona3zZNGExH3orUcjKVSpqgHJ3V1R",
  "key40": "5Vmnh96YzDUqr2pgbr5q6WcaaxKa5r5h391YoFmPKfmBXsSnSSLq9E9q8Ns2UQhBmY6ky7FsPJhQGiUFptzZ5qVb",
  "key41": "HyKDujYWEdvfX6zPYWPeaeogdcUcj9Khubt5uxKZKuaFb8fyXKkZLaqGdQc5oRJ6bMsdkfXRT57YcPgwpV6NDCL",
  "key42": "xPVucB5HSZtBv24ftPiKZq8bLUe1EKugZ2EJm7TR1AgKNzprcGMAm86Qq522tp7cuBLn2fwUJgtDnsZEa9EHdtQ",
  "key43": "4cxq1PJKswxCrrNp5hUmMWdEdVjk4FjpaZJtgGLpRPihYzvtUCqLAJcugAcpiG4hp9XZNBqxhT32PDgvQr7H986T",
  "key44": "4dHas8PP9c2MEHSK5RuBJWrRzGhXeWsiqTHYWRkcVM8Cuv7fuhUZPSRAdz65QS7xNxtAptDmxZ2CYaq76JV6hsMz",
  "key45": "4HVmtKFShuHpeDhBVtm8QGqJJQm2kg9MGjQMpQfWckLFnF98dfABkRLya91rYD6kuCPRK1VAC8D8sQqESNzXyEvS"
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
