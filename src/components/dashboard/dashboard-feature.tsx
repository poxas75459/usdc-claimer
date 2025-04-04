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
    "629tFmzSbBKh2VQ497wnwCcWkUxFdPouM8y2mNoBYwNoMdCx6bBCgAZQ6QW3JhhEZmXZoMYve1WfftgmpUkc1DWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qi9C94sjzRddoghFV9wezXq3ej9E7NEw5WT2KspSysLEBQpRegvcjbapF2PJEui8PYj19p6rFF2geGSXUMxAigo",
  "key1": "3yzFJkGoCum7jFHysyMBAaSLaiNMtYaYeqajFUm77JzZ6UgNtJbeTb1JC2hvw5kdLBrGUxSdLo52SozfFDgshyhi",
  "key2": "5AqwkfRpcv7yEex2GzAahUDwd5KPE22t3hwoNJ5oSxRCsEjZyneDeLvctGbeVc5hWKy2PaPP7qko2MJDLMybD8KC",
  "key3": "2kEVtQfBtUxhAKZnW1VKAA8NNyqNKvC49FEhSigcacf7a7Jz9ohM97v6a8ofpksR5bGEAmsUmzPRdWL9PQ4nspm7",
  "key4": "48Kca9NdhJCbbGreAaUvoHvdb6tgQXZvGLGThPRhnvstpdBfZD89Se2PNF7abynbS2hrCcQAtFhKDLKqttpHggtH",
  "key5": "5fxysL9XcLcjxDs3Jg48F2cQTohc4i9wBrqgcqfcHbix83fxHCAGUJj6TZEXX5XuRbgznx6PGQUg1GuoFyoRCLGB",
  "key6": "v9V1X2b56vzhoGpbcnpas3nKiNqT7zRYzkHts39L1qZLoqx8WbH6AtQvaNAghEWAyJPFpbvp8cZnogn7QCvd7w2",
  "key7": "2mxvhCiTW2J3UsDHPVt4hYk1S92i86uGEzhPuqBzu2WBwspaF1fXQxSVyKRAnETcTpRbvCHcDW5dCgeTQPPSJu1C",
  "key8": "25vRJukLStNovovZkKXEAYQFLKc4HuMgf8GNqiSB7HbeMbJgcE9FaVX7PVhyayfuQR3s9uxoCdiX69Ptvzh9wPWR",
  "key9": "2dHLHqY62UjSkQH8TLT8jd5X5arawXZnQxKVXUuR1zNjfLJx4cq87GTKs6jXnb8sxmNF4GNAAkCojXwQ8Pzo3MPL",
  "key10": "5v4AiXTGDVRrW8iwNvNRebw6dK174zdSuy1nN343HfiWKTyfBWvRkNca7KPnpi8B6aSsTgSeqrNyECVaGB8X1r3b",
  "key11": "2UmTKutyZ97QF4Y9jHcEfpBnPGLtkFgQccFJX6ZpUHnTKwL47snS6FgL2mrLPvQvogsGMjmmbdVHKoz2DNNZBimC",
  "key12": "5cRQijXZXqFVT2jq8nfnw627QqM9JbrAvnjawT1rrDDn1dkaSKVuqMZUNmhrsKh2VBZKjBPtmX2u84hWNgUdm9CY",
  "key13": "26fp6hiNuTAR9xRqumrbVLRDXAtqLU6L5Qq97RBuVuo7D86qE7U12YxHRAmpVqjVuzvWEDzUczhuzKibVhohvPGm",
  "key14": "52kVXEHZerNiaGxGWykNSTm8KQyopQBEDLn7ufAZqUC428XviQwoc3Ehui3ZFwZjp1fkcV6eM9a5RxxPjLW7YMjo",
  "key15": "2BAyvdVVqgcnLrrw4wbQKVzFFp2SAgPVEUekxKCw4cryicZ2hddjPrhRwvtHU6GgZPQknU3nLPVviWz6VNjMv7j5",
  "key16": "fiuUghrNe3kmYo78PDQidaars5pfoCv72KAm4YMQcGkLSNBQpKTcD7BzT2RTZf9snU9QvQMqsn2TFPeruMEY8yy",
  "key17": "3CKjQJqycnKR53kox7rSqQ1jcsL68EWMr2JgZ2c5ouddyZzG9NbMS1zygfKRtDuC1P9DJZsETfeDFBbxTw2mufT1",
  "key18": "4EH1P9iTRLntKQx35k1fq9ZHNGaxmXd6AuqkXyAmhJ4gm15naKSX6YqAduxbgANVTGkyDMnzHQg7AgaSm56msYvi",
  "key19": "31aYVNcCzMsCHFAcVWFVBswfY15hUGTYXuYvwk2DneympgNrQHcMduCoYyCJR3Y5U17CHkJfmV18UApc9V9MWEsC",
  "key20": "4G56UPqsQ7PBrhQRpQz9ax7ZRoa4MCwy1py8k1vZMNenghG9fcgSKAsvyPjMouMD1xyvyGsY3hz5w39CKTUjhz1c",
  "key21": "2XsnfAH2CUa7umq3GKnmCFtiHLXdPKCV8nHaJbXNptDEX7A2kWZR53obFKPs9KSuzjoMhHe71TQjon1h2T8GBnrn",
  "key22": "FYKjPQDUHfVyHudMLxu9Bq5SsuN6dSiCyVXgearJmR7XUJCTxGUExKFJLYthrZGtv3kmSNB2hcCRt4uXFfVnh6h",
  "key23": "5Vew6762CMVRqWn8yidkmYmBU8zApTZRbgqtmS4Zmmt78rgbaRuAK5zeJh5Q4Qod77fWYuUrZZJS1ySShotNc3Pg",
  "key24": "4aSGwFcsvAvhxiBLsidtvvrJpUw1Fc9Zo6WrPH7CMhVPoyS1TV1rbEz9PrT8Yf2SdnHQqaXjtdAekAQUz99P6T5",
  "key25": "4dSJkx1dVvmmfCM6jvDSSetLsf78MrTn9utuXiEDy4d2SdPnxc9bhpdhzufvMV3qZdrDhK18NbyHYkoyNJCoPjrV",
  "key26": "35RtmivXp1mEoWrkKSBPD4sKePF9xk7uvGd19ihNJtzo9mHEFvG7gzM9L8xzVZV8tSd2NHJZcujA7q3CfRaKmyzF",
  "key27": "3JbPUzXWoq2zxG9gy9izZUU6jGRj9E3jbqGNb8XWSuHJxmqz5mMZzDZ2r7XmKsqSdt11def4Nrwffzr1Muawz3nT",
  "key28": "5AXXP6z3FEXuAqKRoiuhbGWHtWF6mSKo9cwM9b7SW7tmBaXC5tHQSKjFwK4u5sG2mUKWSk8cNpMcZV88wZMKzikk",
  "key29": "3L1dW2ab2w8N6YYPT4gKQDYnaTaQP3wc8WWoqy8r8Rb83UjuH6wYrxoZa6gupwtXQbYa4UH7L6WcDeiXLc4ocMUp",
  "key30": "5A1TPPKFCn5csQwFhS8XJEGYerYFwooPZ6kjZsqtFX52ZHBSTRvgMjWYSYRtZwo95Y4i2AbW3U9AXLNXqSpJ5oBe",
  "key31": "2UKq5qkpEHEn1rN56VYnJ9XFi3tC5MzFE9XL2rozBa1PmDsWyUYoXwBYkPG6HYJvNi7sFjXLspNqtfLRMpahuhYi",
  "key32": "2WhHEBwrtQ5HxQZQpFhNytVZ6Tqmr8wjkUAo9nqTeaaFTSUsY1LVSXpAXn8xEf8VccezNkVTqryT4qxaZ1SY9rom",
  "key33": "4nb4vBZta4m9rKWPtUXQqNtvPeVvK5DLV6Ls9wESn9KyWvHYxMb1n5wz4VcJNKADDhRrWbANVSxiATYw7GNRJDng",
  "key34": "AoGTQedpqBKJ4yLNhU39zK89cbVnm3V9yqgWu1x2V9XoNXC2nqti4cgPxt19gXPaB6RwP6G9fmcxBCW5twQUNZY",
  "key35": "532v3io5cAfyVGYzmYc8MV3oHra94tYiCgPQESgE8pk8P9L34xyiimCBkdvofuf1vNkhXvgjGxcXomfeBsgJA9BQ",
  "key36": "4fBYbCirTUXnjvaeVRq2bpQU6dz5z9mpvVp3s58BFsKswedXkUNQHaYdoTbGD1UVxy2uZ35Vn88aYwA1E67iqLbm",
  "key37": "3eJq2Z7B1qVuVNydNd6Dxf519nKiKJtr7pLmVTpmC2GxnjN332fxDbZBotdr7bv2Zfti2rAy32U41CYN2gfpUkSr",
  "key38": "4TydEDR7jFpfE6dVGhWivvaPzmzSBAtNhYkSpMydTMtfenTojUanq4F3drqhzXFVocmYVdaStEmbkctcdA5XCbpM",
  "key39": "2FSTjM3VmLtNbRCySRa9YgKVXTGBCnTBQgVSLrGTBL2znVY8MFNfA5Nf6W2XRV5T3npvbhp8d8zSG6DAphtNAiks",
  "key40": "4WeknHsZY6Pw6F7hNuJ3RfP7hhwSm62EXbCtZB3FmfsTR2mMMJeNNJDtTqhxsjbRPYZcmvv8wAqaDQBX5UkPS4nS",
  "key41": "3dFsmFU35jSTrWPDvk5i1auJx6bYd8KJXAV6n4UayPVEBX4PYawngPvKWQdW7L1YWhca9z9pnKQudeGVLL2uVjgy",
  "key42": "39JS1awiF98Wiy1V4QY426PPNm5n7yfFKue6nH55gjCP35k6oSbaPMTJQve1tbJWCBmunptfXzd35HcbFqUBi77H",
  "key43": "4FXdi3ub9qmxy6VEgjs3nVfTTKCFw3S3TLDM2Hw2FvN31zYdoyPgVPNW48RBiwdPUWiipokWMfMU2kdeUbkScLru",
  "key44": "5bRriwjT7EXWuVyqP7AxdMnUmatn7LkGNueRKfBq6c1ZyjaLxmTyw8zXYvRGpkAqrgjzQ6SjdYHaJ9RuWy7JrPpa",
  "key45": "4ibSRPEEkkENgENu9g15TU8fJRy4VMKyfAAwfyF9frVLhHFWiqzhH9UUXMddaVnSjcWQqUFrycjMjQE5dQ4LQYuT",
  "key46": "4et2V5cR9LUixXq67sMbpk41Skt1LQVtkmBTguegr8bXSuJCStpi9dTH9tGckUpYopeVUSWa1isHCfg23nLRQLjx",
  "key47": "3Na4PWoG1GNa3oEjjYLGFo8kC15cT766h7fueMP48J1duDmoZhpcp5v5sn7cpaGmGRgNFfveK6hqhfsv7yJKy2h3",
  "key48": "2MuJETYi2gDKyMUkRREejqaNAPT8y2NuUcAiDxvQYoMp1jD5cPW6nfZeyZPD4ATmwJ26bjJTrN1Qb7SkavZTEeK2"
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
