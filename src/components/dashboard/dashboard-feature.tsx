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
    "2iM9S6xQ3BCxcqGdQKv7UFo4UAWTr1wSqhEUmt3pxaSPW7ZGyYTTHy5D53Qfsp9SsJEruMP2en38caXMcdRHUSst"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RJFe39Z8tazZ1PXjXHStVoSaqGmEzY7WnXPB7G1GWgiv6w1hFqq6dmnT6Pq234S5friBq66FSgcJv1gA66fyNny",
  "key1": "47YWjqXZMp62bgiuRgEnfAmHZvn7QwMcpaSgzyMHQ6mXRdrjxxLDFaqWNwK3ipB4cquaULy3QdhEBSmYdhVCzFN3",
  "key2": "3u44i6qQGPWd9UDujndjzKoF1WKR57GsvxtMtKLAw2bWeFveqp2mmH2GUDE57498NUP7czzSYScmW7CV1PJe3vaK",
  "key3": "4ZfSknfqD6UugL3gtf6JjoA9QBvSSNT8bLbJPvPp3e1HkaFYnHfVwBZgf3s4kssygUhzGAESJ5FLsncZ4eqT67r5",
  "key4": "48su5TeVBDRDHjNgqPnuUY81pCxUNLrR61vrjjeNUc3ah3KxfwqgnN8kctxSrfwvv6AkQbqx2NZqruf1ZD8wPgaF",
  "key5": "2FmJYJa2HxDrG5aRL2pyjRjfSJrjmgmDP8AoeC3u2QsyeFdV5kkThGeofp8rhkQ7z7yEETVb2HQLTntWyCds7EZK",
  "key6": "2zQSxJPeZk16gqR6sJg8YruJ7SE5TT24H63HYKhmrGZQgxYkwLBBp8bNx9dr9V8s1ajSGvSPERiaCSvNcbjaWEbW",
  "key7": "311omfLuuePg14EeNCWvWZAKXCwM3D3VMBHudwnyYPZJTCPjR3wzLUssbqYjqc6DvUT5TgibovduRd8g3GhNVRiD",
  "key8": "5TZjnFZHSt43KvNcTdZ5Wp6fspbovLrivWVbNpzekAiNvSi5uvMhzXujgXigBDWMrZvA5fkhTkbTP23u3KWSvDyU",
  "key9": "rPtRnadCJQzfqp42gk6DwLSwUoSMTRyQp9XGV9vnuTovdsYuw4YjEfJPdLJWgRStzXiY1ba8DWYCi5gk1ngBv2R",
  "key10": "B2CCBcCgMkd1KV57u3RGmRgkatyJhErJgCPtVbDhWPT7NjwU6FxBCXSuhn5EeasQ3N45HBtL6uQUDzDL9tHaQWV",
  "key11": "578cL9x3XnChhGWnnz2kgS29wgRX1TRXaLGqkJAaJyijHDU2twGzYcG3S8Myihmg56aSKtHrSyB2pEq8ewUh4kcE",
  "key12": "3Ka7E5Yj9fgSEWPeVfK6gSTAAriHkGuHhCpZBSi6ZVBSv11kSR28q7KfTUChndSAjD9dqEDAKo5ri3NmVCPfm183",
  "key13": "4tMDJQv211wLT88urvHU6EL62YAgKe4HrEH5KqGQ25Hiu7TSiQANyUZASNwpRAEndKCQ6ptcZkgyLb6jKKx9RcLP",
  "key14": "4F5z32fKBGY2jBPzEMAbUEfsLuQnTnv2ydutuczssSp3L6GEN3RkEB9jcts5bobN8TWjNjqpGMLRqMHFf9LJKpNX",
  "key15": "4Ng4LS1ZdKJgR3jNpT9LwgwXwpKpn6ZwyYCWMeW1nvjwzjZ9P1KJG99hv6pjVts2aCwLM4Sgxr3j6WpGAmJQkq8u",
  "key16": "3Y77wPhY9p8XhYrADht3UBDPnJHAgKdYYW3WxqMdnVDT2AzoDCVYvuHkzbtBU1jEz3Zd1tkBWWv4kKExAjPCR1e8",
  "key17": "2fHgWprtQMjLWEuhG6rNHMPTCc8QzPxSanC8EYHsTYtqeLLRwF8mXnEt2V136xyzkZQbNHuWpq2ejukP46VJqVUn",
  "key18": "q37kdEvGT7zib7Ye5RJiaiNQEKL8zZbv22mFqrerePrXNFT2SQgKP8jHSEtcft5StRRuiN9Rmu69kY2otaCY6nG",
  "key19": "4YPHKUfj74phkr7v2ZenumNhaHGMbLwJNaMjLReDcu6bXjxTcL4K6qtcQTaRZAZZ71THgQbnrSLGw5AMvDbDhrKg",
  "key20": "4Xf75cwofSzjVs3mNX6jFBGrxZQjhBRjd2pnJXaNfFwugBhaqhV1MSjdo4PWegB56RfXVV4Fh9rZirC9q9xn916C",
  "key21": "VnW4nEcBn8ABmnFXzHSJUijRVeheVdE7S8NwYcarmGD5bVY8riEKS17Dirgn6BJPAWVJ9stw5CoBUgGpPUeSgjg",
  "key22": "4ZZpoT66VvQw7orhMm8vmRXaM3VW4PnNX5KmRvo4oTBvDGnwSm9NdSGTw6mSUN8G2YKUjDYukGHQGB5Q3bq5QmWa",
  "key23": "3kPx52RhYsQfTWfSRg3jm22cJoe32s7kycsxYzfGrNNRu95tbvpfovX8DkaASh85cyHAKToz9Tzf6y1JoTavucqQ",
  "key24": "3Wo4Cf2mRTDwLfVFr7vCkjN5VwDcpzYCtimMRBf68BEKR5uNFBKwMAxa1jTkhnwB3SqnR7yMZJSLyLUma1DsYuwQ",
  "key25": "5Myn4HpDTZ7SfsJ9JC9cx1JHWyfhYNZKf64CdjFQvjH93gp8Pcby3WJGho8EcSXMQcSXCpvJqD2c2zVjcsjQBomS",
  "key26": "MMiARrjb1kJPijTyJitycUUU5ggKQnZr6svZ6159XxuR55sRjzgshkHNvDASVPBCXE2BjU5TcKzTEEKjDqmXZck",
  "key27": "4kkLbMXKA5vjH1jWfYPVNMtZ9TFXoGcwkSg5AsShc6zfEi8xhF4YoCm4R1EBCwgn4mQh8i22uYgUorryvz7S9LJi",
  "key28": "3DyDHruPLGQaFXavVuUtRZ1vLzz3AwTFyx1jx1hcpJ8vM8MPmDMwnAHoKwAuRSrFZcEEt84R4kNs93iSfUHKLmdD",
  "key29": "3UhigNUXi5eX3EYvcD1Feks1ND39dQA5bKJkZzLvwYuND7gT1uvPeprCzQJBVkRxZMVs7VW8xkP8nwNamWEDCaLQ",
  "key30": "66X65q5euFXHZdS8ARQ119Spo4M7cfKxNFkti3u2dBEd72MkujCietfrJD7faq6DFoL1cLVDbWi7an5FuWr74pJc",
  "key31": "4DpedL8HP94x75YCML2XLMPzrg7UTdyQqoZrqcPVUmGWnfW4629JCpZm4cGi2LgmfvA1HSKqYE6uveka8BY2fMnH",
  "key32": "vnEzz7Qem9xDcQGr8X5bERd4nuYCoPWdmRTxM2DmS922ddzqYv9mjQvcmnrLioLF3kip3mnio6Ead7TR4bswcFL",
  "key33": "4xLcDhssToJvxhtPzn6WvEQPydueZRci75467bRxxQaqVDxsE7HYHQUHsyZX2SQe825dfWMsFNGPWQQM6VUVbUzr",
  "key34": "3ytNLevJn3z5bHQT82F5PAwyQ19h89dYAxjnz1soJbSioT2LaRu8htLG9sDv2YK8bAKTzqw2ngJyLgR7tn1YFuEh",
  "key35": "4QgB24N8TSbGB7SrR981hneVpmvhpqEfs1NSBB7BJzMEYzSyYxW5iZ9EvjTRTwd1TprEbJfqS6u31ZbUWJGSKQkH",
  "key36": "2QaLVQsLWVhTrHnsdTLocWRBgDWk7dbJsaTHEhFoTaHckWXodxtB6mdewBGHnFcwK7F4svkbmKqdnraooovWhWV5",
  "key37": "dPdMewxD4SMimDgCHhvJC7casxypnp9uwhCCQdg9y42euCr1iiWhyLMvdiNir6CCnjpYhgwofWhmFpkMMGJ3rn6",
  "key38": "3ksqb98ccV1BjziLgBcS6JRTPydtRG8WKuS49FbZzrCvAmVfqWRQx3hLw7rHvD6NX5Mi47yBZtDwyGsWh6SZbZ2c",
  "key39": "dca4gmUKWYRsxygUwVdokptMiv2ftsiAtmHLXMjcSYzt9dWCJkdvJ2H7cahErfZxoz2N6BgKxd9FBDKUAj2qLYw",
  "key40": "4Gur7w9efyKz76gLjrdU1vaw4xJgwf9hr1rXusk1VGycRAaGv6nuW5j59ZdKmx8X1vf4SJBmygc4GhcVyfNwG6tQ",
  "key41": "o69gUFPSHQaJNccdQZt7Fzkqtf2nTDXcyFAyjJw53vxQeULUXTjH138vSy1cTzaF6XGFg8x7DEhqivng92NtJfr",
  "key42": "VMu959tJzHdJ1sBqc9WqQGL4LUZHSLNVWaQSKsRHKuPwLFSkJyBKDUWajY12Ww4BZyUFzAKsj7abzA1uW7AryC8",
  "key43": "5KCk3uQzMjorWgiyeSFLkwRpuRqgQmpeiqRfxsoDJKKzDNn683wEuqUyeUsP84kDQcKiBZcQezu6fs62WdxUXBDY",
  "key44": "2npuKbDFxXYDqSDicL9A25G44zb2doDB2tCAUnHN5FussnkzYvKfmjABj6Jw2etdqtrLezompq9EZXqrrq34j1v4"
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
