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
    "4AQUPMVMVQkKL3Wk2aSptAidxFyjPdBJbRKeFjQtVa3sVHuZ1fobLwkaPez4U8cE3iAjLYoVfRpWT5eJiJBQJX5y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Di8cbGLafWjUFies5yik6KWBgXmYBYEEpgmsbV1Vbaq4z2ys2VvrNoxj47DeQeMyeT9W6Vsddx6RG1Xmvrsrvia",
  "key1": "5DzfUbvKDSfGCqWoUk69xeB4RG1B9KRykxoVjVeWHoXP9zEV5CxA5XN1UJQ99s48hZNo39X4vjCXNbTibEVaxBwS",
  "key2": "5T4vHCdKdBCSVyX2u6usfznBAKiEWXnypxdHGhEWHWBYqQPU3ktUKRyr9mBoX1MtuF9X17FMUwLpMRw9WhzSkKJq",
  "key3": "dYhBMxiarfvPp9LBcBaEXcYzMr8cAGdK26tp5vfmxqbtxEGyphnbvEvB9T9MtekcZyK8bvZrTu7wA5pcQn98r73",
  "key4": "3GC59kit1V6P5iWcLZ6yqJFtkuHrc5phirjh8toFqAiPbaqjXCcfBWC5Wu8PxL3aGyeu1gj6prrsdjM31nqmXymR",
  "key5": "3rSAwrvFnpsrWFBhwcQ116ixr9T3HYcjFCWpMHgUx7hL3w9RyhV4JkLJF856UKTGKaApe8JMq1miE6wCjPAuao82",
  "key6": "49TyVFiLPFjxYE5H9vJuWakgYADChy5H5nWr8kYZFsmfAwV8RCgunrjeFWDxwz6F8DySVpYybhacLyxf29u76SH",
  "key7": "5sq1p9EstH2LwqrMPgRjERrWvjqkxqLZLmfZJgFeLMrAEwA9YBppPDAzvAuZi93Uzfd82Z6sDzoK8mAUNdwccdY1",
  "key8": "2NSs1vCyoqwfCttjBcoTKNEKEwamaEvsRppw7Wgq2nK73yi6msuyrrvEKHubPysZEjd5Qfz9SNNVvebYBs3NqSV4",
  "key9": "4DDN4tmDXzWxD73zQcgN2kDHLnfCVqvugCDYFoWnYaZsL3LmthB6XxtYFCiWhspGQZ1fmDCMtbZpgHUpCT91dR8t",
  "key10": "5DHRJAXri2mB8EHSq8Kg6u3ZKwerMoNvzExhdmusG4y6sMqr6A77sBovdVWugS6KiMiTwGZcB2vwPZJUyuBry8qb",
  "key11": "CYb6jvH2JzbMZm1KW9bcfjVePswLWtFtwhj38xFyVQHzt9wtegpvHbLo23AVUst8L4jW978RbKsfM3EyRtnHYfw",
  "key12": "2ABL66gNKrGQfgQfdt5hhdzmfVBMp373W4kLYyfg6CvfeRG5V3Mr3H3YhLhQvUnXqdUymtSGpenHBn1MbE21nm5M",
  "key13": "3QEFJNFxwC2iqLAZZ1P7Myho391ZV7RdKWs8zTyfRGpe3hGgUAG7cRGefRU3FZbP8d5KhnhrJvnKzCHLohyEGCjA",
  "key14": "3gm2WyCyDtL4wzE51WnnN4hpNuCR5Y5YCGc9TfU5RUWfPpaedxq54z1kzz6unGx3m7Q7UeMz62EYmH3yebJRxaBV",
  "key15": "xfNx3FGU8c5JX4SzoSbmnQnskZvM3jWVxLKXjZvC12pkq88baAPSM1MPxtmmkUfHUDgssSUCmiQyGGXgxf4KyxU",
  "key16": "3KyHLrW8FtemdAgYzySwDz3PuvuxGdyp96okSVLqh8cF6Qr7pVjBka3RCqbEsAxXn8sTZy6cfUSuGmwCEWvAchJc",
  "key17": "3HWmQjLtM8L17YGQqWEzquJZJTtpeYiqB2YtaxBTPGjx7qtoisjyhmLXsJ1dHnWf8Zsvj5rMW6kbMfjFkLVEz4L9",
  "key18": "2tUF4fph6mRBx7VN9CJB5Jm5i885qJKUSxpFXufkX7kLbM8RPstBZB5yQJRpyy3rDQiM7r9BT3rqMofRb7vUkoJZ",
  "key19": "SWr9hUnHdvPmwB8bfiVuu4Tqum757T2XtpEthadLXYXUKUAA2caxByzCWES8sHzhXvhGUDN5iFGdtk1NLZrD42d",
  "key20": "ZSt4sb8dtiw9XSQGw2XUsxf1KFoxtBF3HR5akXZx6Am5MX1rYkX7c311FLqYRevSpzzF7UgDYaKMPKARTSBkjAf",
  "key21": "XwArg6xroyEiq5GsSEFh15Y7rmpKhmRTPBWYNfRafVmkVA6G8bYzWGY4G9nNioAGU61P7uTEocW4pWN3aunbS2Z",
  "key22": "2Y6kt1BKyhBrDVisoS2eNVHscTydWnMUNKKbJcnxKDMpvhSShbugfdfshE2KmMSGzbtjk8GCfAFPj2xCPpSKVBZk",
  "key23": "616eDdTw2pagqine32xTcGyNwHpjmomfo62GN3UuRHGYi5WKU578mrq8tmiTPwZyBhJjYyz3fmivReoaQ97vXQ9a",
  "key24": "jufStppHiaFwU9TgENkzxv5kwZcEMSUCmPs17h8Cesi7ArmJBaKRLNjvf9X7nwhks1iGsMatiMNbPTVrdKEZpk1",
  "key25": "3Wgkd6TLVYwf11gqxhJR9mgNvbzqgjAKbF6tUwsHpiCxbf2ZDZmvFrr5oR5esPmtJsPkWY95iV2n8n2k31mPJDsS",
  "key26": "33ViuDv7ggKL1dUvVomfQFMNM3Ay4Zv9boehxLnc6H4GqL2oczEV7ago63ZyipbaGGCPYn48fBp9ehahxPciKjnf",
  "key27": "gnMTWJNrdhj9B32C5ezYW3xdbmhjENUKycCAB4asDEL5am4PKygNNnC8fhLYsE663PjmQRXnq2gvsEZtfXDJuFW",
  "key28": "Xf17hrdjq9zgXY7dCvHG7z9f372bJy4C13cssuQNeWgM7aV1broagrywrhQT6xVbsrPMWii2UG2gXmBvnyMJZgk",
  "key29": "TwchVgbqmgmoeNqDxw4i1fwn7BrbhGjyxNu26w39vSiQDrHEpzc9AG1DNii2JLcwobxcJnQDWqrB2xrPXeVQvbM",
  "key30": "5eck47CvjNtQLDCyLgEXYBZMbjLzR7vGqqneryZteQjEvQRian2hZTqzjBoWmdgwQ6wUy6uJjVFir6AwX8pqUuKj",
  "key31": "669oiz6VYrME19ao9pJ447Cc1z59ZiJDma7eB4vzaGPzQApdWSiSqAWg9LAG2uLEzcwtP3R2gsJQbf6ryXKmx9rg",
  "key32": "2P9kxipWR76pa2y3j7g3ujZzRg5YYJ9X92zBF2mAz4TUdHR4Mb3aRoMSEAxbnjkjN8aJQAoRaQsAYJacc28cfr5z",
  "key33": "G9H3P7nkhVHsjiov9ydDYsPDbmtxzm5qMkA6P7iTzNewATzQPUP41u11pYuHeZdmMESe4pHXepCjJD76vjJkJDx",
  "key34": "527KqAG5xM8c7Mz7osDHZdJ5MYNsz8rFBzPcTnHn8uJj2HwMUBJZ9F3JJ3d7ccQtrWPrMnF5GGoCKuQYckD7M3xf",
  "key35": "2htRaxtGydaV9qUksoiBYkv66V2cy1V1hLMG5QCptYMM4noirNg7av6rNEydPuF5d45FMGu4hYnTnABW5DCUQNSG",
  "key36": "2iBpabvtLrisedT9TzmzPseLj5mCB7ZtrhjjemVUejYLYKvqoZM5pNgecEHEGeWTBZhiBNJmz6E9fJxT2VpKqM58",
  "key37": "2xQ7kaBv2Tgft841Y5Xe8ruxr7WczEuhygoiC2vR4HbC9gvE6BQGM64FFyDrFZ1iv3ZwhcuwbQxDK5Y3pMnMnbgW",
  "key38": "3e5XLRqfbVhSZNZ4PaqvQv75YAfmvvProsYM9HK5VcJCep5UGsaCpHB8bp4hqRfFCtvxay8PNyPboCssDFAmXXCb",
  "key39": "4TqKckVK43MatLeTWs1ExZGHaL8txUMUUM2Qidk4hJWQC8EijCT9nG7iifL4SH3crqNWrNLBM7owvnuxdxMn96u7",
  "key40": "3HhySxDp3dkggL9NTPP1wbJLVHgpCo17XmeyovGWoixP7yASaxuPezFUywaV9dLP96zurv1LeK8zESDC9Nn6N6GR",
  "key41": "37sDcSDjJNtaBh3H3Podf35GDx6QjoijLQ2ZvH9ENwHJmi4kxSH317RDgPkh5fn68hW6SDaUpBj9dApuiKdt9A7h",
  "key42": "ih1KnHbeJVFfiyNtXXSabzkN5m9LKQ8SEEtUdA1TXdaNo1RTx5bGZYzEZ9yNSJTkd3D2pAiB9yF3bPvPqqtvvKt",
  "key43": "h3PJCwnqY8thLmKHddXhcRtH7c3thRwUmBpo9CpJpZLKJQbdyg8DJJibtcFS5gMhhr3tiGxsaEDQWFBp52iumZe",
  "key44": "62rk3byXm2bKsNFgqDEafYZe1Z5AbLY2zZowAAeQBbATXrfFXCntgVvGkAC2NJW4a3RPPsaspmPBCFo4HGgHZ5yd",
  "key45": "3LgpKn45iNiQB1fZoXoTgBKbhQ9gyTMR7sX2oHBfGHSG8zDmBJZ98AUiqbmAi5SS4J4Y3MegoGrsu9bSdgZKrzop"
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
