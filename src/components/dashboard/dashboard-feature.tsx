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
    "49ViQ9vaqWF73nbELQb1YUPQxtVciNg39Fcpb1kHSJYGm8pdyAEsk52xAZzk869RHv3TDyvP5fFo23sE8CPufK4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53tBUXVd3vReCSxNB169LZpgzXT4Czn6nm33iq5cfgNxXqh61KiYoE6yqm5CFBZzk8x9qWMtxGJuxaVQc3rfZSKV",
  "key1": "3GN3Z4DLrw6mga9Tk81obJPkMF2sQZvGTA7TY5wsmQafXFqQp26x8kfwSCm3einDoGhMeEBj8zEAwiuGjELaMhL2",
  "key2": "5rDpb1zcsWCYddhjx9K7Agj2oevMYPAv4nbSts4wy1rK3ozdboqupNGM4RvhmeRQYZs2TGCk1Xnk4udxUUXmgvoV",
  "key3": "3Y9LCjMyv6pnfrTPV5AoBA7FH524TtXMMvjBUBJS3Gzvsb7Qxnh9FEiSCe1xiZatPobNq4wjTREJpGyG62zvnxjA",
  "key4": "3LEWgv5LKNwy7QzxVo9oWFmW22JnyHf3yQA2MXGxC1F1pUwMxLoDCc3V4LEEMLGGbuGrVFhbH3YFfehNpQAtYKFF",
  "key5": "3xrHhNnNap2DDCVUvHJ3JfZLnZSU2EUXmSVF3ojZ9qUW9HRXUFnTkT5gsPngqMW3UjVLrkWySWCVudzz3pgSWX46",
  "key6": "4qGVcCpiQciWUHS9uor2FvUndt1u6aG9hbc8ZqE9w68y68bBZVDkQm5sEwdnDG2FuZ2qqg2bh7LRsEGpcWJTuUJi",
  "key7": "WipyqfLcWTG6SkimEBkf3syTYYQQpXb7BvveB74Y9oojPgafGDKU9JrRJw2LJzp6E9ZyhppuDFrvgwWyWtKTrq9",
  "key8": "4qH8j4PFUQ51LYokVQoJWaH1xz1Sbix2oxRQUCZ3itCSvvqFboKh337jLno8ab69yweK91hV4cAkSkvurdaj8cyz",
  "key9": "KWu2vEBgEHXbnvVPutcRUEoGRqDvxupvALhqSWkt3srb3tiuXUeahxKEManmDAGiLy6YaBcPiRgJXQc1GvEFeQs",
  "key10": "5bN4PDEnMmLE8BjT8YH39UQuFFvq2iJayMp4BnL8fxhy3H8VHTXDYcHEhJkudV6Z2tUwtYGXijWrKWykXsMjyr4Z",
  "key11": "9gcM3HnJs2SX7GeiS7XdQ34CuPtnCQcu3Z24tVNXL8ePcNemN7JxrCBcRyjRRX79to9dweGJhpKwcR5Vun3hdgA",
  "key12": "2ba2Dj735saVepwzzBA8P5cdAoE5NqMJYQN4MvfwbP7o6EuXg9khzVc3744zArhpRdfNkQDfREKJZ1hCQM6chFA3",
  "key13": "64qRNkCZor9HhzMFsQPAfLtXshXXE8M2GRVE8mYgR5p8W5ucHsgDUtMJNJviMqzj6NPMQbqriFvqaTVi2WNbUxHh",
  "key14": "3VFyYQ8U3h2qsRhfoNvRTM2LedJ8cQW6kJtinsSU5ePRJEzzVLhGtzUj5MZm9QcLrR9orGbQvF4yAcvukiygE7U4",
  "key15": "47FdefEg6o1FXESNoFYPJAReDEXLuF5KY79sGsPKpQdJPrqogJMH4shCB4rZpnAnrPptNQkZcs6hf2eGYTy8DowV",
  "key16": "4bzfsF5UNNQaLg1TYfcTB7DFoXDXNGNQ4KxGqJE4ETM3Z5KBKmgVjrTR6qVdvnvB3fuXDqD2sWCReht1KE1Zxnut",
  "key17": "GKbiefEsBcui7Q6v7PpwaDL1r6XmfChbub3ui2P35eA63JAHbRck4DxFwGtQG5wsem9CtAX8dcfAUGCLPR2H6NB",
  "key18": "3pmZSiCis6XhFr5WL7iH3rw4h5xjrBusWzCqPEo29P6m3JKQ2Mb4bButKWt1GmGa9tXP1GhWAuVRBYjju4J7j6Q7",
  "key19": "xJNkecWsoTCHg6SRqA65oLvobj1mcpY4K9f17iYUpZCdZaTLdbUrbsfR8U76qnL7q7CzBynSQ5Q3XKGHoEMmo1Y",
  "key20": "3CqcqtstpNFQ6Ev7TGA7ckt8cemVWS6ifDLvQ56oNnaA6s4AEAeDEtDYoCWyHfVVHzwwdBKhgXaGUHnpFC1fLXEY",
  "key21": "3z8bPWqwbCEjZKt7cMpXUCicp4vD6nGzk9Xty1Pxp82F9X3kPFghontakWRBzvaQxhbHXQj5MK9NkcsDNo6JY6fa",
  "key22": "5dkk2uhyxv5fiWFjS7XH8bQf2vvoGzRbPCwjoLeoLPzFDpyJQmYFUgSCByGybPyZM82ZMUWvz8tTiRTRSjTQfB85",
  "key23": "3Y7DjRpdzUN52T3LREa4ga5WK5Pi3wTvFRa8NxwkMsHvS2eJTQ3hVQMc9Ewqs3xCpcsZNHBgd9MbUvm5fP6kq8WY",
  "key24": "48abFNoEDTdBubBPPX9UowDv4YNHtAp5ieULsGK1A9qFq1LNJ2DyDNe57XwJqzGsFSeh98fhKWmkpXuyUU1oebMR",
  "key25": "4YAFVLoYVpBZUttoM2hpEzKyotarL7LyiXpT1UHynvzHxHEimDQ7pxJ9KHF2UebzYqrUBjhBi7a3XT1gNsbJp84S",
  "key26": "414bRVc6q5fpF9bK1BbxHhJykTvLZED8QFWrQj4yXgBmAQaLKsrFkeck2fr6hJgSVyXDgGJCwN7q2t7QLXcN6ECt",
  "key27": "4EcGcWJF1gbEJCAfFrD4ZZT1k5R5Zxb3Dy3BHkkNyigAKTR5RRWKnKrfzonLGkrCGZ9GWwVn8e5Vcn6ct7GLkQhb",
  "key28": "5GgNXUybSnHefjgS5u55Ea7SD5WjMXwBnyM2RbZE7uQCpogPMzq4LM682jjjkGz5hxdhEbYEPAgaTaQP8J1QDMpP",
  "key29": "QSaA2rXTB4BRSQrV9AnB6NB7gNTH5zhTf4YWt45W3i9E7UHjSNyNR3dfVMR4RbssEomNx7VTRdxKQrq9Z57nLHS",
  "key30": "4BmW2UKPtVzdZdd3M6EDsb8BSx61xEwXTu1WkJ7o52JTyTrZ8JZxKpo5njnuWPZHamGcwnssVtUWDrDjHWuDVdFf",
  "key31": "2mHR23uiQcxRuxVs1nbASLd3UePEEdRNNLFSHyYYqWFjcjseBVXuuKdBgZrAyRNwyJo2qqUfCLVo5biTszA3rMBN",
  "key32": "3ihvff5rEw4bBqnHNm6co5a6yyjoSprCHMChmoxMjWWvgnFQr78XrHAciVVqRcP4hjXaTSNurPdY85Lk2zk31t59",
  "key33": "5C4UGVgexYvSqwsVhMDhQ5zsNVb67p9VtMxQ48SBWqzVg5W8BZYLRfwDWK8snWu6iCgZ3cuMBifXP1xk7cKwkVfu",
  "key34": "4roYVhzHLL2JmM63hDjDuNkX6x9gPefL7Z7VPVisqA8BD9xwGKZvPG8KXsXuoVURMbnMPoJXpxNfTwB9vWot6gK",
  "key35": "2dznFhNBSVCAujCzypsihEgdtkCkGpwgy54JqoWWWYQMwH8fsB9TGC2FGrNUB7gUb2YhCGqpgQjoYnXzWcmCQn6n",
  "key36": "2DndHjpNcoeZ6VoV8nwhJ2n6EkoTLAWWEtXyhiTqknCinwnYHtJF7KNfJz6Z6qpNzaWCuX21VcPidu8ZSuDRbDJy",
  "key37": "5sKCPQGhncAXCVU4WHeByQjQ9kbkpYpaK26DWPsJzF9hKwiEGzteZuQ4DtGmNGxfPciyZCp7JcYXPsmsUJi7jCP3",
  "key38": "27YZbjfW3KwniTCk13PwNFv3fdZAXUR9VyftiwwTdm2giXU66W8QrVUAuhkGFTwyd6EiULR1kXS12ZX4Lv4vYcXJ",
  "key39": "4oHypEBJy6EaMizhiAHy7FwpoXByHcKuMAGPPWgj7bisNY6278MviSoQee7a1Xrwb77mn6SKBqzjctxj1Gn6H6MX",
  "key40": "2wkRgrYQqR9oBMmYs8tVyrKsG7Gb9oqCC7XFYx235CCy6CjGD4VcNKYdxFePEwsfEBJwkfmKNq3q6g784b9HaJaN"
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
