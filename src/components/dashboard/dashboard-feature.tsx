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
    "Y8NJpR9g9nyWBWF4tJbZTHvHmeeEqHSXfA7fCzCoqfGSE38zEE3WZjYqCdREFiwzihEHBux8pRnY1UQSkocTQd5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rfG5PTUqfFPpmmdPZpKRWhx3VsaGMCPWyyKj3S8B94Q6LWNgyBKMqgbUCARq4W9RtE14FeuAiTsyKhqBuUE3HMr",
  "key1": "433wb2K9qVzHLwRLexb13wK2bhGtD7MUMyUx3qCy91vpXBvxwZbgU2MbyFJoerH2pDwx484aGRw1uaZgEB2Gpwdv",
  "key2": "3GpYP169sJTDGunfSZUmpWJJS8UKc2QaTZBGqeDnCpt4QBrUhLxtwzhERpxTXoNVM9EWTk6tKN11HTWjU2RspwV8",
  "key3": "3WeyeHEJ9vPqATmjGc34S1c7WgTYJj7Uiq8tb6E6PHnZuv7JzfdtqD8uD8HELeKMzPHCapACxfpkDgZe8KDceNzC",
  "key4": "2ykseR5VmmH6qtEsbHp9SCKU7xNbbJmB43MR5x1bSazrKMiViVgGEgrrLTsKF3GpLnBZVfHgkM23MRQVcf47ngeV",
  "key5": "4nmVeWPNV2Hs4DxbzBnhivQBJR7dANRLFZwyE4cxF3mGgu9WC5TFahJmggH538wgaM2q1qtXSqk6QFZjfVwc1vXf",
  "key6": "2vHMszUrfSCsrS1hXwZ2qVhjAAe3JUTwpJswRcaEyVY8TPuCn1mzrSkXn2aqDZ7h66sbnMifJo434kdAbyTaGHTM",
  "key7": "4hqWDfT494ineechqh8XCLMTXavsTCBzd7bkvfGxCj8GuffiGZroULqYQJGzATj3AjYoQEyFBdWaVZtgDLxZLKAq",
  "key8": "4yGYcRyS5WdfbHUZZE4jpsgutBZumiitzGqeCe8DDDxFbwF2HcVuv6Y9s3aRWbLgoG1zvdLLMSLiK1RFoQu8bMGB",
  "key9": "4pBRpbturqbsyFJbqgRJNHuCv8hnNXsAcMzwGJGJjdkwHWfSRnV9q47mo13DvwEczmVZ7As33xWvf9vJcNmn1CqB",
  "key10": "2T3eHQEJHgXG6wXLA421qj2KuhH9C8un9RpkaiLsCiggUUEks6e9YxnsG2qs7UjDMJTqBJX23G8gv3R8oHp9avJd",
  "key11": "aALGafE8bb5vowpAZMZVcjLmYJamwUcq57NUaXk85hWNBLhnRjaPQb5X5FUg4S9UFBGKHgeuEZzWB6cnc5esUjp",
  "key12": "5fSfAEHHB3s84A4daNDE3a5X3cgJALATYn7kMWMqmSfMcxwSSq7zat8xWBdXQkV3PmC3zAfFJXfFrjYs9GbHzHrG",
  "key13": "f41Kd8KtE4HB8Hje9FhP4xPUP4JiqFLp3oWnMT7reL5FpcYSATiS13q7tv59eNrPEoQURoSFHKNKDsAndaMdAoW",
  "key14": "4Q8aCYxhD4y75jn4sGPjpopZtcbSKdhgUYJzBypKu5rUMEomonLDcugbznKkzoLUTVkUnDTwBbBu2oiUH6qL3hWF",
  "key15": "2368Koj18BZxDqvrN83RzJdh5KJGgCDeE399Asc8JKZqzygj6X6cvw1Znk9uU7P878AsNC426QpYBXZmG3we26iT",
  "key16": "2uAQzxaqv4pd5RggYen9sRthx7o5Y9wbDWDBHy31XMfsBhDhJm34b1DHyGYjAaBjrwXfoJsD4ykQ5PLgPEPN54Fn",
  "key17": "39rQBK8ANBLq9pj3MJAD4LiM4RTQP6Sik1WXtTx2yWZP7RCtVZv2bvj1xGKe2Z1iQ3bVqCGvsfNtVrhWGtcYkYju",
  "key18": "5NTAxfYj5RqWEtn5tGTLTyxKYZPBjysvN1vQhao1cmKpADnGoTRj3i6ZzTu6eARvzEapN6Shwd1MdDZrHdmcpwPh",
  "key19": "qqpRiveabYCjgY39J8LXLC19dqCdQeQGzynSisGWAKXfDotVvdBVmfsX2AiyBRLKKsAtvseHrLrRFFGRVDwSDoe",
  "key20": "64mBXs7cKgGJyrJuJ8CPjY6v2XoPZ9LfofqbqPruamRzuyaCGXgabEHhVvvPTTw8G5f3ohwbLidUVb71BcTonRAh",
  "key21": "2McVpz8hiZWVh5Ht4ztZZYDFn6CihmEeRPcf6W2fvX1hRmHTWaHdSE5ZAq7LBP8k87eGWn31tg2hmZN7cScXCgy5",
  "key22": "3aCeyfbjpMUMcyo28kuykPMuuJNKLA9yWzjaVwxd3MMm3vqqA66gZQdbjm7EcdmwYfwBVCkcW7c9THEGWBgTDmQa",
  "key23": "ao7aiNPVw3fpYxxZ9v4u3WNbnPVDUVzw7fmTe3aW6q1DLy9z3s9F5nABbh6545bmQccZfdcicnySLrL6QmJszVk",
  "key24": "41cCGpNXwMd1NKJpt4kRvj7JbDVqTj8dTMyMSNF9KDk3ViZybnRYy1sAD5DLjkfr91xEpozXpgL8Kw19Qo3sqaF4",
  "key25": "JbLpxQoBTXzbeB9DeYuYHqMvX1nu1faP7g1cYTH7fYnXpXcHcRZGu52rpqPGEPTXnwvnykq4jTVqX3gkjFNSMdu",
  "key26": "2wMQUmNUend99ovPyv5Mu2uVmuZr3eBEuwFzEnasAjnqb32DLP8JMTemXJhiPLWxMjJi6Anj7zpoL5gPiZf6iQ7o",
  "key27": "5M4rNUNjfpmE9pPpaDYoNpwLVpKJo1wYdsL4Lynpj5T3FEFxfEE1Ye864Y5TbVoe9BSfZMZyHLhgugEHu291eLh1",
  "key28": "54jPWehVW7tYydSPoiEBBjwPQJ7o4vbFYFxk3F5HLPTHEVpgrDTvjuZ1vavAbenRccTPNuexnjhkT2RqMEq6ccTB",
  "key29": "3xsP9wwo3Sih1vURwp5iQc9eEhMN9bUvSs81GDvep5Z15Td4icwQSC4K4RPG82iDMNznTafXGdzmenYrE81J7NKY",
  "key30": "X5N4DNKdrPggd93Njki1385Qa4eMe8BLb8en6JTmcAsCiq1WRYUEw3DXq9HCHDgoMVuH23qHXaMPyEJgFPyEvPM",
  "key31": "2iL57Fho2Upti9aytKA5DEgnBjVLB2s1MH68XvsAFR9ckDyWKaCmJypZSpZNE3ZjStUasBKbHd6wfVacTHbZZz1D",
  "key32": "2RkjsX28xiXWSG8BWKSF2aL2Dzpj9kcJJXbzjVJXYWBwPK1fXouiHfRsC9ZAsjvPxzfi8tqgvQRcpXReCwRqJTwS",
  "key33": "5paUcPVaHsR2sAFvP2rSbYKhunZhWAPKL2BCGDxCj3WTGzy8nhDqduZuYaT3aqs8uzyHU8nqSWe667AV1dZbLPuL",
  "key34": "9FGyZ4EbGzWfmRcsqQGE9bqCUwmqmzgmv5YpXVKPje9t1CGj1Rc5yxL6mXNyjoBcawQ5kS2VYqjMWnsP8jo2cFw",
  "key35": "2FZKgDYgYDX8xR72wEraXxQrgZ1FZZPJGZPSmEjVJdr6kLsgoGeDEXp56u5Gwx2Jy6ozPsEc3kTca7zhQcuVAokS",
  "key36": "kkR38kviSrasWDvwH6r94FXYaL4vfgH8qp7KSJGeUNiGEGbJQgeCxxmB6oyr85rjdueirbCVswJGuAptFdirzrY",
  "key37": "mydXPXfLZ55P7wNuiAK41Q1LCtmweooPrhMeo9eK1Li9jBnydr4VTbyPtRNgDCDhQ8MAR2KAUurNAZ7Ye5qefHW",
  "key38": "9UBsYCz6eaLkqzrr6RW3VuNcdHdMwUrEgMFTR8HxxLB17wtfCHefe8vePJhTPfF4r9gUC6EcQtXSRbHyU1s7KAw",
  "key39": "63bpDEELjzRyCGZHvPaD32yrwsFYAoTVRBFpmoorqvxF4YJBC9bmw83B3bEPs8YQJDpkqGTStKnHDpdeu2QnhzWm",
  "key40": "3MtuZCMD38en7NUTZ9ooXEU155wupuiFinhaARRwBGiH5ju3Fd9TNhtBPiYmJ45dRb6PaFbNwRjwRjUwrmezscvk",
  "key41": "3UnLUMi9YX377fpiwykhgevegGjwCE6rtd2hhVAVAVenpsbAyy8HzTM6FbGtQn1XYUG9jUyU4MTvBQNjARqpcwHc",
  "key42": "48wJbyWn5HGQ4gsenJqPej45Lg9izSvpoo7JvHvYYfB11swfcRKGJmha25GJKHV62vijsbmaDgV5hNNFKrzyuJ2o",
  "key43": "39UkZAMbZ7TAXg9LzzpgkryEjyoTbpQdrQtmzkAPSRmhwsjpqMhEWUWuDQ3UvfgkxQHeVMSENSSQ9yyTpeXkn7wc",
  "key44": "42AQvYXXrs2ZYa3YnMxtEzeuB2tDiEVRXNsMZk3eHjMUVoY9Lq2AHJmvBGmp3h52a8La6vr1zNBAVaNrVMYCpVxg",
  "key45": "4ATCpqM5ubFSPchCd9tEW7KfCXLrUVRmxSTMnfZ43sagkuBD3XrtsYoVdAtdhaGSGhJyvqfA6XUgPrTWJ2MnjL1w",
  "key46": "4xfre5UNmLQ8HY9kmhbm3DEWBDbboUFbpJ6qEgUWdJTYDGsw8eX89uJ2UhmNSj6RrsHRqM9MjYs2a8gK1Y3Dszo5"
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
