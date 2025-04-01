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
    "Qpb8Nfm3Rsumc1uHVzQSHBW9dmiZRfbNo2kvsT6D1vYdVvKQSUXKvczp1dQaG7FzUwA49p85sHefqC3LqTFNXkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v7zy5N8TafAKupGc4PyxUC2RVEM5FAhvyaJtNg6GDdjS6f7AuC8z5cnvYSqABrEcabr9baU8sHEPLUQhhQTKmuA",
  "key1": "4UfwoEteyfJSUzScyEorYUTYBeUYj4kBYQwXRMQM2nmN3BprVh91rSXNBRmALoSZzteo9LAMc3jiAoEyFU8fXjLt",
  "key2": "55eLU75XSvvXzs4yZQhBa4BXNxeJpXEZvYDHtfRyzxWG6xxkxqdez39wxir1WuQNcsQS6rHZgwqgd9rsAjrGbgg5",
  "key3": "4RMQx5p9D5Eh1So7QA8aFTNKVDUmANEKhzq3KGCr316KptDMJUjGiFSvf8Lb26fSgRJHwoPvLjackDdKaBrSQD7M",
  "key4": "4nPmKyAyBKmYQiihv2NG8QPNuEABoRvLsWZaMdmPeLfyMjQf2MB8syqJ4ZsswnGrkLXosn9YG4aWUSwk6WT7oJj2",
  "key5": "36EPoPFDr6tWYQtdyL85fjwr7bFwDnnaaKn5FZhdS7HtvPzvVPmc5JCGtvE3vzTHmoFnNmzhUBw9xkrD5NpdfJt2",
  "key6": "2ERsS1xJAxVzg7Si8WbgtQmJsaVNf7TXG9rBmMEbt7BX1adUpfMHgBVvZS215Y6efd8qqASsiQbKjqfC62B2dRKo",
  "key7": "FPWJQ8b9nYhpQ7FU2PtVrHAjh7ZMxBq8pKEwbkSS562adN2b1M5cfEi7vnuYxpLCxxFp9vXUHD7dwzczuXvuW82",
  "key8": "5KU5B8xGCCTH5s19VbxV21L5gcj6bE5aFHgrWqKk4t85EGk3nLQoYf3AECaxyiSRYMduGDfAfG4ufVAegZhRdxQr",
  "key9": "2F8bpyNDwwXiSSz5dasX797PB93oKNg9f4Y39tiyzTYPym1PniDp77nJbA2AjTmNohkGnjKfJTWbYQxMdJCchySo",
  "key10": "61kaKaNN3yjvzbkKEQsRYU1cM5TD4nrRgfoqpDEEw8zaA8jhSDzFC2RAnfThyHz9eDUumA7hJnccpDT8nErn2TqV",
  "key11": "4CZCxC7Ck9nkriUpxFKeH8hChAS4FgYNZv1moc1v6fFf4XXXA4VuyUBBWg8c5WhF3Sw1dEXNEpcyUSovzHwtUWKq",
  "key12": "Wed5BFR8woUe5UXsxrGSXHJU5gdhNXMV68DJXNgU4Gfd9AmSW355vD58XApQEzfopu7FCEG5yv281vU7qrfEFFn",
  "key13": "24qpSyNWKcvc4tjkxtevyBWNQYNyAfkEFPiDzgpSTYVhekPqv59DhqBwaAbSJdeF8qodp8TPBJuPc8BbyrthXk2d",
  "key14": "5WVSkstMPCDNFMFUP4qpGK3saG35Fi5cTUcL1rZ88SrPxn4KuLtEjHAnNhuYvXDmLguVaA1BvMGtUWUvvMqRJ8DQ",
  "key15": "5HJN7ZZoN9HY36EB4132KdS5NPNEYnDaYqU7QhYHPVC7TtxLQA94sjYEEmdrRhGqdJz8KoM9aFtuP96miuJwVJAF",
  "key16": "3HeFvGp3dt6mmPyekKXk8BSTREgzXk1oyxSq8aaJqY2zzmgRaqLSAuiAn16f1PUrVKLkNjJ5iKgLXL2hXv8mBzCV",
  "key17": "5YqhGpDUvTiuXvi1e2ZSS3heYFvUjibJicp9U2MedLXkLkUCNLsxSQhHANh9RnLiiM5VZS4YnoRkqusxTRhKviSa",
  "key18": "K84sBULHmQKyKKNqnpGBw6jgNGwktEnLViYHac3zich3TDB9AD5SeBznz8xbxcxysaXdYudS7BrGGPonZBTmft2",
  "key19": "3nJn68mb4wH9Ax69dJhcTDSfTqfo6b3vJ78qeTejmWm8o4qhzkn4rSJW8DZkFz99vwFR4u42KNdGwq55kELKn9no",
  "key20": "54khDCpBK6ZYuihZse7wACRgXmRQN7PKCeD7Pd7uZAhhxb27sMPba4q1skXetkTAfDx4154Da6bSYQw9L2e67ECs",
  "key21": "54JhBzkQnpcSuW3KRBuRnoszYfNcRbcZZRGbnSbosvCTVn6pbi4n3sBBLyDQv9EEmoBDrNYmgU5HWPwd1aCg7AS1",
  "key22": "2A2sdvJBxiE6ppVmScuCYckXiYr8rfESZDkvSoVw3V4hf7ZdTyS56NsPsGkEJDducNvmcrCzSYWkNhWKj8tFmAXb",
  "key23": "JutSGydUjfEbH6KCcUWduXdCzvDwPhoM8PYs8x2imGsWepLimBoCwCW2AA8gLHkEyttnKaqh876mwtePzaLxKdT",
  "key24": "5MfK8rEj8d9e83AMiSiaGFEh5zF5Gwy19wYVBs86tWXwLoeV8MNsidhvGwJWNQGGbS9R64iCi1sz8wmjXMXnjBb",
  "key25": "326FCNwgcLPWDBwSKCMdG87Maz3Akjr2A6obpZncUoitkQMSfAFq46FdbwRDH18Le2Sf7mpUD8hCjopb9ng9F2rq",
  "key26": "3upGXLgxcXBhkamYujhvK54DogKft3FyACkHYRFxPCr9ZJSLUAtepsJdXEpEb8K2FHxzBns2uzVZLVNsg86Y6upf",
  "key27": "ML5pB2FM3iSAwbcBuZ4aiJUGvQh92Tqsu3rU2imK7rXEBVqHB3TXog7FJf2JttZ6gGqXr4R5NrRXbLKwGg9siDy",
  "key28": "5T86orw6DwcukK2MJE12UMzS6EHtX5ssiad2C6xJm2LxyCmpZK2uWboZoSV3FH5DdpyYK8K7cTcUCrBSFmW4xYka",
  "key29": "5yKgTcoRtsPwBayuRenaF8nLH3Mrfq554aPJQqsczqqrDfwcQXpafyAnm1aQyvyTRjkWeppSTsGmYs5Mr5f6huEN",
  "key30": "5bCWgts1oixpaNcgqMtWBhjcKidUoVbQqCqFMSo6uXPoKZiZFquJfQcALEyMV8MooyAyZDhNLwoKRHbn98aQTXi3",
  "key31": "2iPTH9KQCHNu9idbjTXkJExyqmsAZk5ZpgMRjuLbNw6Sycs3QrmdbVmr6cVw3qBKdQ9jL7y19V2Hx9WS7HXBFU5j",
  "key32": "2zyVJDQHy8tBgdEx2J8gVDzBuog5btKB1BhSz44ZsyTfPnKC3JiKEj1ddGzAto5c14rhPgpCEW4ycdUsyKvZFFe4",
  "key33": "5g6UiLAzPKxBxULatBe9h2zVhSgMzUCyCFxggtMRBTWm4sMeWVsVP6cetTYKmdiBpoA1aVgr5qNUpJFHQuNnbi6e",
  "key34": "5avSCoCfRTGZiwDSQrj4Z7KtrvLdFKVLbEsnumdjjB3Xd4jwRH1mamo2Jav5PtiPcskAtu8aurkGQYarksq3csvP",
  "key35": "5oDdxPxyEHeQSNq4tmvQsVtTekAFPE9EWDdbfgNpxKuFEnz7Q22uc3Rof2TGMXj5twEEeS52YdhaNWudo3c1pB12",
  "key36": "4BWUEXtPKJEm5nQnjBARMsEAGKJaL4DZ6eajUtEAgYavn8MhypmpgK44hSjCwybo2n1t8jD7WvMNdqPPfm4Aoa4o",
  "key37": "2UP8z56nHXSWGwyjmS1tWy1HCMz2A3Qrt8tLrLPBja3jxc3WAT5dn2y7ws59BCt6Ya54NuWR3sjRuh7R2Nx1uiGm",
  "key38": "3UgAFNMj64vnerTpt1aqnQ12nBPo74a3mf6L7tbGCF63opJquqMhb7yvKEjbQgch1LaVatRU3BzysN1suVVtrmJy",
  "key39": "VkuX5BQq5maWLVMZABnUo7bkuieNLEBBU5c83qY2N4GmDdeCaTY79yBf5fQdCbjYcCy9w8eTnm2mi9QJqVQsxGj",
  "key40": "3A54J7zouj4KZ3zkEYNNa2JYWXuikhRY9u4s1UdDyZH42SSMnM5owfURVrSaRtbvx5fHHg1CTjAJ8H6L2QGNbrB8",
  "key41": "wnYr8WXScZaQud6Lunc7kFfD2Hz3HwwFnmo3TEHGQMxxFCrf3viVK34RU9mTzo3QaBj3f1JDY6UMX469iV2DAPX",
  "key42": "4LZpK6aKJXNXE3YRyCYSeAtP6WALFAyXQRLkqkivwMUJGzcHUogjgc2weB2jffe6DkHqUE12aj4B5Cor6PuruEJA",
  "key43": "dMSSCoAToRkTx7enXGTJKR1zFF8GG1fYB8fJnZCdCrHDgLbzSRMuEDFgDt46VZczk9axCncf2M3XhNXqZfrU1Rt"
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
