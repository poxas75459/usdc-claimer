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
    "2pFMnNo4cf3CweQdsHMsPospfstV9RjKdgpogFyedQuDF1uvTipExG5FYK8ztNF92WqAFiioJB1W7HBp3EheEesU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jZW6btaordcCVcvjYQDbNYHhVR7z8wRjiziQw67Qt3PWBxRTYuK4Xn7iaiREQW1ufbRCBVEKHxq6HcBGLB8wZi",
  "key1": "9FA7A3iNsiZpY7qcBfB2oJ154w2dJY9mUCSE3dbpf4fdNxR8AcKnJy2t33K1yS3cLViywKxMPzcXrYdRgy5QTDm",
  "key2": "FkivXsb8HLp1VaAXWfsXAPpjNvGMGA4XLvkqNAsxCjqxPXuyzAe3UwcTE1HKbpXZh7ztqCxsdoxG5fvu2Wdh8ht",
  "key3": "4L42jTqBddwDezJGSSvcrHDnWaL5eejkdYAPKEfcjxuhLg3YkpxCxc7cB3YLZDyyPiaKQunyL5BnsNswxEnZZHbq",
  "key4": "2tyUcFSP1nQMsBFiiQn6575tzu4ciDBFCd1TFCEiu9f9nviSAwHpJkEz38rRzUnZyNudZg1uvnjuYUJ4dqFJn7HY",
  "key5": "48zREhp3G9dkGbvWEgjqHDZCNzkjZUoxTS2R4ekye2vAU4QaGZTCLA6JJXws8dic4XrqTZoEqynaKSdkk2W6kVt9",
  "key6": "5TGo2YC3DPn2N6FJ1vSVxdeqzEkkiaw2oHGyrmpmgVRFpEiqYTM8vzZsSgWxTwR7wFoC9fmtB7CxR4gQ8dPgJLzW",
  "key7": "5smEdYdfoUbTCXVPRpTSYCCjawhTHQ2dqwNg8vQ2MrUbM7yiTpCKoqqRMesXWsXaWJosSk1Snaku2qthSyGPaw55",
  "key8": "AXFRgcmirBuZ9Wxb65XoyLEWEAkmjEtiwMHJUQ3xWDBu2hj5maY4qDbegeCJMc4sHfwG9SgHnqnxiPoCa4B8W8y",
  "key9": "2n2HdiDRVxNahyvoLe3y3s3PXT8eZjCXViqWa6WmLuNGWs12i7nT1c12dJAM8GmUm5V9BwQ9VoZ9fopapB1T8zK8",
  "key10": "4quL5cJCa4bJzrLLpCXqokskcxND7aeFrf7HLfUVehznTuo3eS4qvHMSRhakST8xi1KJRfe6hidWMhyuS2GJREWW",
  "key11": "5tb83uU3dhqwqg3Q7ubPUDV2h7s9iiXqT2TwNNes5zAFk8ibGk2hCo2Mot7BqLBLamLMdSC3bJAy5hz6mmnPwiVn",
  "key12": "4PG994Esq3fji4uDzNAptVjySwUniUwvoZBRBmLWfbWZ9KmwQh5BShbsYEMh9dHxtMt1YKeGo75CyWZ35kAi9mGe",
  "key13": "5gEiimHa7N1B78kG6eZX5KjGQKNVZZC9tkKgCuitSHVS9TC2cGasesZyeDhxMfhZX8F7xqAgeaQFeuQXDQCSgsdu",
  "key14": "49YZzc73p8V4hRb3xjSRkQc2bLGT3vaByrg6dUU3iiBCMcEx7sJz8kDv1YszTGwuvYcrrVRgPbGeJutwg2oByAt4",
  "key15": "4WSL4Q6SmFeJkR6D6Z7bYi8XyCdkqqNQbZvJ2369FpKRGguStFvDmPmtLbaVBKizAuWnHaqU8BPgNEGJ9JRTVsH8",
  "key16": "5JvnhF94A4bEBcFEUTzQhX4cNgutpZUs6xmsKRVCo5n97mJ9caAMeaVT4g8PxosHUpUVyZYabPKZWMqu7vjeLpvm",
  "key17": "5uTfZPP9jmpJ9S5E2tmCz8fuV4C7ELksatHunFsvuW2g51b3RFbEy4nN1c4Gdzucq2jNMKmvwqqa3hZu9EUZpJ4",
  "key18": "4zjWexbydmQBJB2u9zrnf8mqt8LqHAoQR2rAWu7uMo3ywgHbtdH9NzZneMgKKFKkwHYKYrMo4yRm5cda2RXw1cQ8",
  "key19": "b4XVfUAaqXfMJKeCpFUxjEiwRvoHqGapZc89ru4qNp6jPsSGTxhJWwEjvVzFNkA9k67JxSKzKHy4eL7kCuwMD5S",
  "key20": "4wWQXMN73ZGZ7ZmZB3XAHq4AREjWq2mcJ298jZzDnXeYq7jGeEokHYmWfJpaVq3iaT5AH4EDgarqHK3SEKZJNaoC",
  "key21": "36kVYwqHGC2mcoi2waCVKUikuNWijmNgYnJ9duFTGT4WSrUbECzVRMB3LbnCDYbrc5VLAaqPdzuQ7bh2tpYdab9Y",
  "key22": "2UKPM6KMnkN3RS4a8skbyyHa4EqnHXjRD4Cv1iXQCREbptYQxMBfv4RHhNg99WrRxXP3dofW7Sdddqc8jV6QbC4U",
  "key23": "TmSDxHTNA6Guo54B8Q9K713XuKfv3XVLF3rKw6WL3cxuDJ74a2Q8h2VVMtQZqaFuxJEwecdz79mLXzwVGmBE8hD",
  "key24": "4rxkKXSZK97SG2jG6Mjpjc5cQq7ostJqARdorreixNGeR2TLqKWrZX4NEn9FAu8TgqymoPBsQ4aQt6XHs7rA97vp",
  "key25": "mDzQUEVMQDYBNH1N6p91DMSfLNZut4MbfVx4qh1FgVogXJTA5beUpjawzTt4jCJiQ8Kcwa5ZqLtqkqj59MsFoCs",
  "key26": "KmKnt9oLZXW1wQokbKKjU6aSkYCoWAosf65tr4SE1iLGz7ro68f52auhBQEEG69tDSWepTSkdXUgTKJ6v86yjDN",
  "key27": "3ETTd22bsfrEw2wTrmCJoMofA8M54ZnMRYiZih9Qf95XhAnKoUpev6hwMVsnkDxmathQMYuFRRaxx8AjSNsNpL18",
  "key28": "4SiSFraxFDqH4ztAFxovj9Xpaf66udKHKDqR7KELx3kKdPHKATHBcQ7aggGyFhmGGUQMbopetK6KeUoBqBFHPtNJ",
  "key29": "4M5UZAV4isL15ZsVEUY5qYYYVVSY6t8P7ensAcqC1tcCJxmtRRvf45JMBsccubN41HDdFki4fEryLfPfj4HbLKtJ",
  "key30": "3cAJCerWC1MsZu4vKNvwcHPq7qRSTiJ7kx1aYXrxY9Kmfwmc54cGhmSeYvfXKTMwGdEZFjSsE15UQfbcFBgppmqd",
  "key31": "2MijbQTCHLzWTNsCPCo6HbnNW8u92bAiGha7CmHMtxs2MPmqasXvTcnV6jkYCKTwv2Zwm47iCZbJ3TnjevppFULw",
  "key32": "4cwEJt9r2rWHFJJL1Xja6xkwbuY3qKgH6PdwRf4KSraP541xcjzHeZeFH7QioHkAQQxLwSpj6Mou77mNVWWVqk4d",
  "key33": "4Mu7k3LRdNttnVZRHs3pN59UToGLnQCg12k1mcUhzcRc9bEhg9bqRayNCFnwX5AVsYj6yH68rJDrABFECiVCfosy",
  "key34": "3trj4hPFA21tmK5fqCGNyjonRJXba1cK8GxL6jhoPRotMP2GGaHYgNzTPyCdVBXh4cYKwU3pDDXdAS7wnT49iXy7",
  "key35": "37qf2kSfZBL4K76HecN9Jz1BQropR4ttxpbpTuCfKy4BD2BGex9qCMA4Gn6SVYZFPWgapHS247jt6sCL6KgXCPjJ",
  "key36": "4SRE6CiE7feqgMPQkQtTV5bLoZ5tvn6kEtUyNgdr7Kgh2djHx4GY7QireijtHoJ7cbwWPJrWyNf9Jc1z6KnScGrj",
  "key37": "4FG7rURfDLhTJmeHNiDvPKVLhZ48iJcqF1jUCemRGYv8H3qEGvrnZPTjD9QFqV9wMnCoppEXZeZC5yr8vABVdfTp",
  "key38": "45TG7ZExQni1ibZviGuz4ynXCf4MgUdBMh9pv8JgbdMECveesciLMaif1dzcFDR5he8AH3y7sER9yCvPvRRGPJ6i",
  "key39": "4dDVos7kWEcDQ2y3CmYPnDrfdSNazMKYwj49cofKnYpgZBAp7H5T87e8A4nmFEkdLSkmSfot4Pc1r6V8LBehzZKV",
  "key40": "4BDgf9T4kLU5QUBdJdddQ4rWBecWuGbzGdHnXkj5Uf5gRymkQjgqvQwVaGeTm1YBy4ykCSQsYdQzYNVNHpq5fLKJ",
  "key41": "4wQmAX7tv5ExXtjgoG3jeABUmJXmRLqXb6gX1cfZ822fKaiVCFuycuTam39DWeQexfArxRzwkfV2YBodM97Lq5SW",
  "key42": "4EJUh3azTvUcxFbDCoT61amtzk2JX1vdVWZchurj21GRZjhzvrumF35UVQktEtmma8nCF68fZfYECRBcBBQ1kawQ",
  "key43": "4RaS6S5JhZSZEtHSwrJX525fp6JsGp5ZGE3aQjETjx53JeRxj7A4pXqa7xr7X3CTPAny1WByAt9HZ7TtA3PzzsiM",
  "key44": "5sgBvwq3aE7Hv5f8mwCTQC8JKhmPevWjL4VGc3HsH5tZL99MXRDTGMN1uTKbh7LgKRiFAmoGorcdojfLRRhcckU7"
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
