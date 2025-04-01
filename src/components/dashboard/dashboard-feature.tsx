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
    "EZshotCmgCmbHepd9Hh6r2q1jkMNb8RfYR6EJiPeeEsnVFNKsVTyzjE8cCj2NDoyhkQCRjimMeAUNYEAMJi3iTS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49oo3aESedHVDwzJuaxLG13gNXZs42iMEYFgu4JXRwpyzQQngNcBBSywbLd13uRMo8ETtqnrFVN655XTeFGtAhJN",
  "key1": "37SQnWSL4TuHWoqNWar7nhhrMyTvNDbEYHS4Fccr5uHfpZVggituJLXHTMzuC4TBNjNyBnRrtcppL8TikvxApm5M",
  "key2": "28BLEta2qVREPTyMLP5M7dWXPmS2nsTtpDxEJ7PYySRPU4y6k8ehkGEJAFjFMbB4dNW4FobDuMLWw18G3i3MD1LG",
  "key3": "9SweEU13nNuc9AG7TNqR74H75bFyWY3uMBWEPdYtjM2A89xpRUVYZcYCX6XaGR5hKYqyGTWbYesxeNroDvEqt9w",
  "key4": "2vcHXm2rSQEPpYuzzcAM8Mc2rtXFKnd8QD2BsPiEVuTEjshVfLRqyqotdDWUzQ2qYCpX28kZZNGwDrF1THfj8wfW",
  "key5": "2KtTQWrtKS7Twda9VGauxiWMaacWKH226RJfBbcmf7zbgGLSXiTM4KSGd1wQLNk3ZJo1aAbyEaoqyA3CdLCHvuNb",
  "key6": "58qNTk4FqhMUfNbK9KYZBihHr6QeXkV6RJ8LAxJEqo8PxUjrnrDF9X5ZJ4WDFE7EtoWxv2Cb4GqVrs9jSGhjBCmx",
  "key7": "4HQtP4X8vrCXNNZh4EGGt9krjH8w8XRLerUmLTjDAAMCwEk1bt1CeEUKwExysqyZAL26VAHmSoYVfyujdJXAGWSS",
  "key8": "5E1HWkzE8ksepdBrqG8YcPih1uxMcXe2BVk85YG7V1vv2enTvZomokScCzqsdMuoohP5v8hrVJSsSHJfvPrEoyYx",
  "key9": "2eB45KLob4EFsb532qxnV9kGHvqGUsSuoQJTrYQr96cEEn4ctgVvZHupUBxcqMYaBFNCByrSofVsRwK59DWdtRkR",
  "key10": "28q8ytKvcnmhbQcb2B7tEeyMDsRPcTb21ujVoALaWtWWUspDTEKHUdwNCgXK5NMNZg61qTTVmubRkpLrWrWAUvza",
  "key11": "3kyCGYUja324uEM2RiVrJSGhSe1JAFPMAHfb9Y9aQuZVT5ivmrpQgHBzJzaHCTJB94qRuWCcnm8UJ7xpSXj1Ydyn",
  "key12": "5NDJQhesoMS6oAK1jwH7BQM79QBiwYrp57ZxuVpFZD7P4WVa89wULaXBguHtrq72dhw5dLZC39iRXrAHDjV2eQxQ",
  "key13": "4n2qTUzPb2hySVdrpTx5hq5S3pbkks5S7ptSDkhoAJxwsow8XV1m8Eyi84F4T6yoJCcPnoBvE1TbJj5DYwBuMuSo",
  "key14": "5FkhCeDjpK15eh2za6a6xqZZDSCTKSZufZGeuVAsaLGWmKZfoK9xYPfWryEJMQtM76m9Pf6ZNs8dvoaKxREjoNxM",
  "key15": "2QpRw7BtPHtki79AgyyZr7YHbWT7Lser8b9FNW54KeKGU4dwr8GhKXGVLbK8Ho1PkPyw2HHEHxt1RHStSt7EaA4w",
  "key16": "5Hf1vP3H5X5xYovtG93yEjiAedXDMTagwSS4EQwHzqBPbAuZwMubgzaf6xHuLuEvCxEuhTjUmMpogemj6m3jUdPe",
  "key17": "4gPTDofezCb147SKquoPep2H1F2yoAcM7b1Dr54FVgnJCvdyqUWbeZCQFkZHMmiRQNsnZCVQE2YxPntH2aTDaTkR",
  "key18": "4GmezdLMRXDGZzPrYSSna8vXYinVMdu3nnw8o1hERLrzry896MoQuSPM3L22UCimR3RUNKvWQVDJ9iWTqPAM4wZ7",
  "key19": "3u1dhULRtHgYWZ3ozbZX5Yh6di41GMN6XB6s6TnVPykSG8k2d6gZSix4majTUbFfQ4N8jqLRVhaLLNEyu13imGAh",
  "key20": "gvicfEzPKMD3mjaHAHJXA2zWCozZgF3CBZ4aZgZEhXDaieKLspFPheShaE8iw8pnXZdhfM1T4sLxBB2vojfTHVL",
  "key21": "3s4zjPyoK679F3DNSJ3rr1C7zZkPw6HdAQsUzCsXWXc9sYzxh2J4PeAhFdiXUnEcbJDXSattnRqvvgxpwbF1MWFK",
  "key22": "4ZimjvkLiR96EqSuVkBhUUNuTvtUyB1a6XGvBvnYB4XFm9CWQPuijwUAu5bqZBqaBKzx9kAyrCHeYASqTvLGWiCJ",
  "key23": "3VbwoaDpveBxbkX1Zz8sN8smamQ41bxQYCJ8tTTqz83QKSS96stDj2qNmoc976VKAAFMtGLkW6DeVBk8J1KA1CCx",
  "key24": "2nLj6pWG8U9K2Jz9Bo2oXaaascYghUCrZn4EH9rpfrgg93S5oPYcNgDqAFqSVWmt6GFB6uMcijrvQ9o6LyGsXeag",
  "key25": "3cBaCg9knnPu9ucUjpKBLQuDAJXLbq2DALCvkwMZwjBMprCrtAjC9MYPtf5bihPrZukByxmU5YikVNQPZddfVUaV",
  "key26": "XUCK5BamNJur388M5mWzHppqB16LcHMwdx6PZ9HvjErT4NmQEFYcyDZLdQ8pYcMzhYiZbm8DvFPoWwrui9J8vXr",
  "key27": "4vfKNpWNbuRVnt9PjujDSVaoQH1bh2ArAZnyrJbZGcWkPzJegrcwqJqbUDc3c9SJHm5zV5kd3bHs6RfGotEUZQR1",
  "key28": "5jZ2LsbrgtNQdp6FqxSWgYu1LLCeFHXpc62FeFYxxYn9f42QVD7kbP1RqUyiqwhLRUqRkf4961bYENx6xkqwgN53",
  "key29": "64eUEFCgZBtFaa6mjLnHtKad5Fw4SqjsaUrjB1z4tkCzecydygKMMGAnAPkAC5edfYmdM3cmMio8iXz7krHqRYYh",
  "key30": "5TdZqMyhcXsFZBgzJZqwcvWjSwrJq3MDDWpxL5A3yA7zcdPPAb1SP455UCtXUkMTig7uKLMGZTjuprvL4M4Jh3ao",
  "key31": "4P6HBiUwxR6hA8dkSa6dRN2XAXADV5hgeXihNepYopKuwtXgzbyhomzeWsLRodsn4a8R6oT836oUgX8FBEbQXSVk",
  "key32": "282krjQYJjCZ6zo7Bxnj6VHs4i2vqsY63dSG4M5ZYijEyi6daHStUPKqtmu6Deq6M8zjZc2MEKfL5KqT1zwok4LA",
  "key33": "4mVyYP6gva6gFMMZMF6Q3yfFPxnVYRaqjLQsR1WevUwtbpCpYaAMNYybstTV1nFC37tZhBDXYgmuKkHqPK8bcSWQ",
  "key34": "2RcYrACxLcbnbuVvnWQBNsDK4sEe2D2MAqh6pyGHDSXp5XgCrb7qEecJ2kQHMnaX3yYdaDHTrRrYZudxNzqqMEZg",
  "key35": "2NwJ4DYekbD4jrf71vcy62Ji8nTmy2VnJ5KrUfDC7zrSZH3pcZpeR8qR1ic5y9Lbv6vR484fJjQfHhdFgnwVEL16",
  "key36": "2X8dTFprUJSDvn4vcPCXH668WzwrhG5YfUxGYpsT5yp5rhVqA7YFngFiuyrw11FogR4NvDzuM3rdmEXTyaBZMTu2",
  "key37": "4pEXCjJ2y59ewHVjYZcJwvu1aJDmLZ99wQFkNkP7cDbQrbyEDLqQ3U82nZj9HRFwT5PJJnJGzKTuTKPMMjZ5ZqLH",
  "key38": "3VdcHMUXRH2TQUKED5h3n7J2hsqTpBznktdFmd6PEuSQpahPCuXVTBWNAgN2V3E3vUsEuHTngSCPVvjPeKxwSAyS",
  "key39": "5vYwgJCVUM87fjuV9GESZpY4jaBB2nNkYiezEpGtrRPEQ4Sx827hLFHzEyJ8rvSLnhsfoTcYVYJ1dpiphXRXoxsb",
  "key40": "41F4CjLA4PrQ1HbgC8mCBxnAQsoYMRzCkVhAK5pJJYr5vNmrjWmha75fmhAJN6vTUTSiBYGi5RUnQu6651L5qSsU",
  "key41": "3oBeDey28idQp7BsmkeBLaBNHPkBtqc6UYpKU6y3u5uukUkGeyDKXqdKLz14LzSXFntcxqLwUUSMDKqKXJjeLE4X",
  "key42": "4a9ykoWnGTGjuLUwKfCErH3b6xMNB5AU7mSTCot56fGEsiWGtU6yUWSgiYJ2F8R82M2rL9kuehtDNrgRco16LRFn",
  "key43": "SGtqgT7VkeMBVm6v1CA9ezRn4Lq91ZK79vidERj7g8nxy4XMnURGtR9ytnu1HbNSftLMHqKzXbxA2jvBKzHeJF7",
  "key44": "32vvEgjcXWJPHfU2HmBt1mZqXQzrm5zA4Nf1Aho9ZaTU7ZXU1SMppY15bhgMpLun9xxotwHE1U4JkRpcKXd92fCj",
  "key45": "4WMUmLRSn9droqcs8zke96MQcLDsdBDgdhxkfrgD1Ps1cgERqzh7pSbNU7ZBZGrH3LEW2BaoqMqeGYwLhsoGMr2Z",
  "key46": "4iyGQQXPDgjksB4WydC32jNnyEYFSKEfhAzFtmyT8JCcpQk8XrfjJiwZ88g9ZZm34giK7AnGPqkoFwdPn5x1uQS1",
  "key47": "3sMx1BF25PuZ5UMYW28oJK4y2jtszuet3KsD9m4pYs4Ez8USz26Eanqg1wkJnEJsgAsxforreMUW8qtWz1yKECq"
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
