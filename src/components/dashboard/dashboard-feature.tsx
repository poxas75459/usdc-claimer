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
    "5QB88j5dWwkrpngrLPA4bosSUCBWvRhTDwVV8aFHsuhFRCYE2FpMubXwzYYPJndoQGKDAzcsLQ66M6wxHY41gXVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32HAsPRLsf8gaXMNxEZTKnMTkUu4o8aVRL9KstkrcDA3seya6s3pmr3NqPSToftXgDjFW9MRGQVSxjTMiemQ6RNe",
  "key1": "3AFyvHBrg9XA9mji7aUSjYdqbRnFcggzTvcAusQKa8tTLbumyA7zwwLRXux72ysPrHDJaZpzqgSVuYdRUCGNyjSK",
  "key2": "26ovq4BHB8YurKuruYRXivtXbLLE344B7raRU57xA9xe21uNkZYytmhKLB5sMpVr7pCEY3E8fpbn8nBHCCeYaWWD",
  "key3": "4Mb6QqGSJYF6JG6L8WXrjVxMMthfdwphapoL6fKyPr6pLiYTzEj2PreVD6yFhAzou3bhUCMep6uwrMdu5jHV2jzb",
  "key4": "2g4BpiSoyQmmEVSTjddwJofX22xsFJGAST23onmEnqWG9HtHKJnHANCHuRnsdJacVHcbv3enFqtdvHRrPDkWrsmz",
  "key5": "4U2L8KaWDxdYqkpshRmFbJG1DmD3mH9KA5Cj27MHJpiJKBKk1mT3rbNFBu5R9WpzcEip7jXZdZLWEWbRgPK5kr8m",
  "key6": "os8grtF6Rup6DbpAqtjXk9gqiLhYmtakPgQkcegEoZwvb35BNaEdQ2ffoZnzqKzasbM21MVt2XUS1tiSrpfVRKF",
  "key7": "5augXhWVAtwX1msua23VnyDDopJEhSwQEGiFLxFBTBsWrFPJJqJZeikycYHvEn3bSQp4PsuqM4QVLwmCLNNpeVDP",
  "key8": "2TvKKiGowv6VQyQ58NifxB7ujuVisgUa2MLSWkV1exe8LNmLFEtSnBxkBWkTGHNcE3Ex3XFoqz1XZZLaUy5J6XW6",
  "key9": "cFxBhm8SLNKrscCJiFsJgMqn9zxWJJCW55d88ELJC3tYXaugntXV7UGcpB8Jqxyiy2xkt9MVVLyq9goVYRj2q49",
  "key10": "2d9f4qVADX7FLyxfrnReuCbKwu7PctqN3N7aSLoRNRBsSK1yqCJh1w9DQDEJu883dsqw7BaeSRR6uFPDYPok4i9a",
  "key11": "61yB4bFsfBsdaXC5B5oxUFTXDkwNiUppCikgVUDiAhotUyZYiFA1FP7fhoKBjYr3SYNmyqfBsbKvm7yVkiXL1WSY",
  "key12": "2ep6jqurkmYqwYSSUpvuQRm5tLM9eRrhbj3FrLYCAyuwNkhf6izuhYnNFcDVDy9ApfmhhdqE3sne1178CjW4EqEc",
  "key13": "5QLv2ziC7PE8CqjcxtR2aQehR7RfyyHK5sUdc1dZMmfpYmnvrR5FuaUMBmoaXmyN5WFwnmPaZrdGFrUzKBWyEDoL",
  "key14": "2cWvYt9Qk8VKxap61voh9T2pT5cn8GeUbzXct3URZ1wQjgLL4huxkVfbWxi76xW7ySCpCF4Gc86VhQWLam3hKbVn",
  "key15": "4kL2HJrQPwdM62VVu4Cp7CXRzW2a2pZYrFAWHvrxd9KbLmiBEcDSxbZdgfSThnagKQ9TeZBYqkjdSyrpaPpyaXSd",
  "key16": "5TjMRvAZLzPS6LuosxUnf6yoeh6JEP4tKYf663eyfPGwyfsXojCYJHor9MMQnNr9N3HvR7TJtmUW2GEupaVc41Z8",
  "key17": "3yi3MChBY7o2psbYYqwo2SYLseWvxkYtTTqxin6PR9szZtTAC5LR8UU453pewRuV4aDZwv5kchiSwXJ4vpL3Y5Az",
  "key18": "2zGaHZCHSdo8Q5QBUDU4rXGg45VbRxDR8xKEMdVRQB6qFxwpXsSavXRRsUA43vQDZTSR3XWLJ1ZygDPzSsQZKhvX",
  "key19": "49uLVXvB6qyoNCi7UuPvejA89dJEx6RWdMgDMUN1iHu8TM3eVXezCHS4ZVhvxhqL7B9rXzW5eHYxy5nsqV4RedF1",
  "key20": "2fW9LUXtmCpt2ej8EJk3mxUr2jFHbZDgsrx7DHyRGG8BYts2ofo1oYWCXF8wJMW9AGfTx5XsDx6NHCVVmogjLt1o",
  "key21": "5DC3gxQ93j4SBBUVi316vn29fF5dCtKWC9JVGRJph3YJv1S9JcRqjrpfRzRcreVYuR5VtCJohKMZ5XMMJxDcUFqt",
  "key22": "5NPyVAGkueFq8HRHbm9tANHerFsK2gKnGfTPQpziuoC4reGLbCEeuWMFmLsDa89LunVPzDKt8jAvub3WukaSngtB",
  "key23": "4YRms6s3UnkfyrhtiVfnHDpywpdw33Qnvn91t8XMjY49cxARxGbNHmDjmPVdZVKWEw36SvHeYnRLU8PvhAUYUiuz",
  "key24": "3z5zt8XSc7UMHCoRxsquEmepimRzT9XaBeAZ2HEtMBEqNosM8x7QZNiGHGrbULjrQpx6L5EGUwTyGvEqrt8WbhX9",
  "key25": "3vmvUdL55umkrMhSsMPNdTeTLCNNwoWtdybdgeP9syrDWDwEYUHLtFmLcWsTt1ahFt7wLZ3chnbh1FJFJUxXVcqp",
  "key26": "24NCueQFxQUhEKdmCQSxVHVkwLSgPACsxDFV1gCADCTXaocnnKs5LhpasfDKfjhX7DGVLtLCQx1H5d8ci6hoUA26",
  "key27": "5uzDWKpXMxHwWs1ST7XsHst13jZdGCSjXLUCpLehDknjKsC24WtDnQ1yTwXstxvGc3SuarWdk8NyadE74hKGGimr",
  "key28": "567H4ZDq4tRuR2DLSd9iZZFG6rYMPvT1cTMLDbvZARZv4apaoUiQnG7zPoDkNKwR2NPtKHDuDvBq3mHV47ecbWzA",
  "key29": "214UcbCKq6d3Ksh6ULhokg7431Y4xrnbRznb7csbDrCyyUB21rhruCyx9xinbs7fQhdp55AqijXeA56tUgcNCCsG",
  "key30": "MhbEJqSigakuvnnmQQjGTBgLvgzTvLDpwjeGqTsGpo5GGSiseLWnZTa6NCQRHg7qbNze6v188fLbDaWRCyYxcSq",
  "key31": "4UGXuqaitkACHjvSNK59Jypcejg2cDPr7rTJGPJqWymmfFpfUs7g4DUKe93qXqzrToo4E2Gq25UkbZ7WxpbGpqGe",
  "key32": "2icET4LBpHqHWJJopDkNEfkZSxct9E6qvW5tEc97kaoVqKjEdCEMYBZzNZFeHEb4BfRFNqUrZNxjjhoRdxiLYzGg",
  "key33": "35jn413oTX9qKPwCWr6EZskuDw3BJCVHrQx7a3kuZWQAmh6BpmiymJZTczehnqDucz88E6Ro52o3G2fShnL2bVY7",
  "key34": "4HELYucSP6Sg3MsmRBLoMFYoaYXJh4Fbd3TjZemw8bXQLAWMoPRzwdrp1TPGJwuGCBqx7z89Q7p7LNtrRzCVaxBm",
  "key35": "3HvGHFnd1FKsdTSjKu5SAfnoh2RGRxhQz8viy67npSgBi9KWBCxHupQjbVvF2JnvntifE1BaNpi73xvhkAfh4cqH",
  "key36": "KiEA6AqGB3bWnweb2stV18Xb8ScnQn9CnHDEbzedyW1J5K1BtpupL6535Lj1tfTarCgAhmJzUi4Kt1sq1tR2GVq",
  "key37": "dgC3eWbMFuoJDH19PrDJqK17vz2BQq8XmDdHS1r4Bk7mL12ZN5eNsqS2a5JGydZk1aVEGEHzNd98XwKzxodPhRx",
  "key38": "c8pRSvQRqNy93bbBNwt3Ue2k5MUzbYoMPTTBUtoHyJbDczuK8g83Lbc9eY1vN8FjdSE9Lp2uK3CbkdEn7fEFx9v",
  "key39": "2FKfB7S7VNde2DmssnnqzufzbAKoFEDuTg4SXCB9xRmwN5VjzTHXK8QXBLmgZz9suKK1ejk4rAB5n2JDHosygdTp",
  "key40": "myRsHWqBZ1PBZVjFiaoRJNnX4zr8tFgKAW7T5haGx4rrgznAkNcofzM7KaPJksXYBHTnrSL9ssGnL11xyo63GKY",
  "key41": "3jQyjo5dq7D23WhMdMijd3eGtPfqQsYxvLk7Abnbm9SLEYtB7LuFAiJGKJCTKrB1oLjbxARbWeT8Nd13r3FU9oJW",
  "key42": "LEsJCHGyHnb6o991xVRhkP5vfu2uqjgcZnWtri3JkMY1rESosS6jRyENc4dD5f32bTEN8nEfUsWujH5M4ZPxu1Z",
  "key43": "67Fu1ZwaCkMrAsJZakwC3CDuENReeNUU6S29QazuPhYdvcnmHyMqyxkcCju7Pa6M6itm3nj6cgRC261m6u4G3n37"
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
