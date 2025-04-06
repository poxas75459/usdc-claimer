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
    "4dkrLj76HcMDBWG7CZLWevJGZy7kmHnsVjep3dMSwvcgshbnGbkDwDCmMiYKmRvo9eMvCs4q1DvB79bETJqa5csz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aoEkn3GdhYsewwsTfnzb9AjN5b8S5H3otA44uk7yDC2Cyx3hWotmxY7QsTrerQJ7syi6QjB6N4nG6CSYkrBT7C5",
  "key1": "5mE2AWAXaZG8Hfcj5ZKMSbo7EbyeWmhDujDfx4cTZP4J8UZb5vB4QgZh7YHx9Q1A9Jix94B5xS1ej22SaoPMWmKL",
  "key2": "8LgVb2Lk6p6vGjrb5yStuXbqenwE8tWMuVLQKdDwCqgxrgvkoV4WJWbvLYbT1Yu9C6Cs1nL7maDW3X3M9TTZM7c",
  "key3": "36wgMJmwnBKthsi7ifk9ckph38kVXfvYVG6j2LW4Fcqrtp1t4AenmXEHiieMb6J4Ey9KrgFzZdPq9sj4XAm6dmRX",
  "key4": "63nK6eGDQyyDuPvE6WXG6bfL96CVsyHqXRcuGzzSLSc2SzzDZkZenNdWq3Bm2AK9vtpU34Hbj1SKJEwrpW625asH",
  "key5": "axixx1KsW9G623DHzUmVZcrc4NRSAkdGBL3Audfjgceaqfdk8v9VUN1uyY3fdUb2H6T36aFUUB9Hht3pfM9xdsG",
  "key6": "ZLetwte5B7YKkJVaREGedNP1v2exZffZfKacugGUKYBfMFU13VRWQj3GTV3pRaCPTUFFDVDuTNnJdQK9Pxmn9Ju",
  "key7": "5oLXTQAYnD7hdYAyAcwdHZsCZhf216Jh3w9MUiRxWhsjtScKezZodxehkzd5LAGundWYjaPUTKg3jd6nHXHS9z7F",
  "key8": "tep8zKraHr73oy2xny66TkmuvQcLc1fPhB2Tp5SrmywK1StpkNupqQAt6YWPinbS7hEFnw1DQPQWYnp6APkdcey",
  "key9": "3qKgxLDKZV3z5nVpqegsDY1n6xeSwpSutwEdmr6Gk2WE9rWfTqBysVhGHTMqiKrFoc59jK7ZXMEybZCV1U1LPYHr",
  "key10": "2zptWUuU2YjG76okpzqnfjwF9SFrzMAWtLATtLe2RKdBEHhERMxPnpnbk6aV56P56pLBgcfFrjFPn1vw3vRZd55w",
  "key11": "2F5Ekw5YDEWbqrHi7wwnSg1mHEHJsFPF5gsRrhsjd8Zn9Sh1P61mAVk2MeJp9r1yz3a9CL7JifTgNKJ7PjCpKNoT",
  "key12": "2iCyVf1FS9w73Aux8uiMuqSWYZY9wxo5QwmtgY2B7V8S2ms3unsEjmucj81HRSqHWLTmHGJBtVDGhPtLdcv7KMNb",
  "key13": "65TRWveKTsbvmup6QX61ug71LwsNKAdP86Gj9vQupPV932tM3fFjznaF6qrvZzQoatfReN3KnfUR582fRLr5pDCV",
  "key14": "4TSvx9yXhD81559cGDh5F8F5ry3zbxq9H3nDrEpM7gufpbMwRbXKWQk7fnTrYrCr2cdgJxr4Y6SjHWtYEoJy1Jna",
  "key15": "RuB1J4UnvvAHWRjT8z2QA3Wp19D1y7yLyyr1uyVv2RYNHnMvWyG5NGPsnYxxhPLWHYucQpcZvNh7ShRLv9zXrNa",
  "key16": "Rww2k48asoiyDQtjeQ1YaUXdG2RQw1UmLa8gJzS3wZ6BNBn8U84xY8Hk11LwyMitG9RoJg896bmyB2JGumzUDu3",
  "key17": "4Yudy6mhWNt3cVgu6YA1pcXdDiWhotymudywCmKWFtkyEQjKhr2cR6AwEE6HJvgwAZtsK2KuNfPXHGLbQQwmNtwp",
  "key18": "5dLvc8mNADkxsB1tKesM1mgj1QqdpSq7vTM9jp2UmvCaZRE3RbsV9NfjpoLEBK5xHpYycwEZQkXz55xAEstH7yUD",
  "key19": "5Ln8atBS4AXwuwbmMMrTZiNrMf1ADwr23FtrtWrWRJ3DzUuie2pmf7oXWuDzD67JmVqH8n96HEhfs9ZLhoX2121p",
  "key20": "gwJgAhWrKxU7ZpQuKYHBP22QEg8zHLo3hLnCk1jzrnvFHN6NAwZoEGhtcBaL9oWQj2b6gdJLhqmbFRCDme53Ex4",
  "key21": "5nhZjeuiXDJH8bAvu7iEKmV5S2aSkCWc6aDLxichkfs9ty8k9gugcbpqZvvZtFLnkEtH5bHWPwpWSMAABEv6wnZf",
  "key22": "32D5vFfau2AhjxhnoupjAnRFoUPcQTiq2AhPemARDWBCxMrmGGSBA6ue6hjcbQpkB8tM8EL6CgRuJH5t5imPouYZ",
  "key23": "4SRGXxMWVFek7zq9H2kqc7cU9udMKxkUWmPKHLGtNZF7MU9NRkSwDuLa6PAyCPAyYNmPaY8HiZYmAeD1EPHRsVQF",
  "key24": "4fuuNGUAjLcvLdDdnieWzcn41VoJMFZcCRwkvnbxQgwxaQnEQRYKzvZB4AV2JsQffRHAkUyWtZ5fajHgx7Ypforf",
  "key25": "jZQgfgkzV8jnZMmvxNTNGAvMFvPZ9XgWTHgnGxNrrkAcKvkkBZe5u9Z4MdwUEyuypPYgUVByNR6CXvEdin6Qr8e",
  "key26": "2JEhMF7T1REVU7X74aGoDQUMb9VXPqy8CnQMieaFHaRKwRtAx4ST1xLZofB5xeteNV9JgknkSjhThQ2Q9T3npG9u",
  "key27": "51fKUQj4qd7rm2178Jk1h62mUiEbGFZPoCMVjfHsxQAU8mQdT1KMxz9trrArm562Zu3TYBL7VmqMdfJB9UoAoj3E",
  "key28": "36J53qyjAoPXwJ7TvxeJoj9JwgG4XipudYN8NtEM8mFFt63p3hJbpz5XdgcXZDLhsERuWMkBG3WBiejEkmym6DiS",
  "key29": "42VahKp9L2sodeiS7bHK9WE99MXHTfvxjwD8ykQPsvoHtvXHyep4xJh8XS9ebSVgSNnXs6zhZZwZ6UMGcUYv1jpU",
  "key30": "2zzvny2buF7vdrF7xg3W1pN2jGGY9X9H9LgkFgKLrQTp4CWNBq4pHrMz6CEiLWG5PWBj9KUBQzSNPn5CXXqZpt5B",
  "key31": "3dCvSReuFwp8izggceNVVtYb4xNsFN5Tqghg4Hjk7HW2KqWFLkcqdePeG7AxhfeGbN1LFE9TWBbZyL1Cst3FPHsy",
  "key32": "9pEDwTsLLJbxWn9LVgMrwsVZ5Lw1FiddyZzcM1dqoXdR7cnnrGzT3fUJwBCyPq7sSme19PtsD336rHmWH5DtauZ",
  "key33": "5acXaMUscpZRBG3XMert9EFjQDCadJMZ41g5PcBnYdvHQ5zYe1uxi2DN7KCyS62SB4h2fVV5dZsvn1BsxKpZM91Z",
  "key34": "5B1Yf7X8PYH3m662dQrQ9MTPNfKBmiQCPs4oNHek6fgpRXiveiqXsF85RiLeKW8kba3rgGUa75XBk32QVZdBnWgb",
  "key35": "5SyvzBp3DLUWR1nqBs1oD6hVbUSDLWpvtL5LsUt3ZBqLXohMERi5grsgEYxcu112RLAigwmfJPyvCv2Bob9gL4k2",
  "key36": "nRsDC9mSazQStCTn9kKeWU2kc6iMQQr2hSvZjxFA4PvbfEWBoMmFNZW3tanRijLfDetJUeYeSxGEGZNzJrxw52b",
  "key37": "4aAwBY8qcmYNPBif2W5o5g9wU8YPqjdXeuciYRudLJxfR9UX8t16XmwXYherUJ1kgyvC3CoDEgvNohRCZKV2GWxE",
  "key38": "TytqeEQFmTTPiJEhdnjb9eHt1Zhv281Dgrrj8TbcLGxnUgfyQDMLksbaRnzqBxX3JH1CR88MJYg5qdhgggw5MX5",
  "key39": "4AwG52WFLG1u1YpZoWeCXYwY87EMPrVatFXoXTnjYsvh8yxvdQzBSYSHgV59xNqarNTuXZ736pxxu1KuCujAQ2NS",
  "key40": "4H8BG7JNF7xxBMNqitWRQTz6tu7oTVUcFraWpYSucRcsePWeqginiMUmT4N2UqDoxQerpGhpZs3Qbe2ChnaJx9MU",
  "key41": "62JbFkuAq4smKF2Q6ELXQ99LoP97REX6KugSpVsGYWHeLwzwLumKmoqbxHNgaMGjFWPa9uBDYFJ8eQHJxDZUnbA7",
  "key42": "25RYvvYDhWy5i6RncGUB9nGPHKRa44JB8Ct8FrZBtYUAymkWpZxNi8EoQVcmnkcr6Ln1zV84ZN8MUAEtk9DsNEmy",
  "key43": "4AgugSW2BuBEeuCbzn1v6r6ebzaspLhYawiksUNJiamnrLgzGKcucPKbBfsExxVUfJW3VqJP8U28FicFXnauTp1j",
  "key44": "3FEVBbxM92EPmuN9mAPda1L2WM46hxHnHF28LBQZqbqFV9XT4qnQFfeMRuPHxvdh3FNDnZSPBtocH9kv5t1atrJ3",
  "key45": "xhFpcDKVi3D4RaEaRY1gFao9yezLuSdhzPTNzikMqzJYpuBQH6rGsCF5nyyFysyBzZhyhFzFHeSc73CvXj9dSt7",
  "key46": "5rWyEoU3v8rgMssyxTqDwqaBzsaTtZVCVUMwDao3AiFHk4QyL6PEtQkpbEaZd41GdNBRJyReuBjMnYmorUTujJ4b",
  "key47": "56GYPttjGfRyoHdVnyHbotge1a3Lf4X6MCNP44fC7YyiZkbWjbj2r5rH7PDRNPYMpnYyc7xsqsMLMPjsFpMuDxYS",
  "key48": "F7XbhMQkEa1mqcmUxQ6tkiqEzhB4LSCxBvwpHcGGmjPNimtXBNYBEC6XYcF8xVeWceseXYSRnb4MQeLGSwiN1vB"
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
