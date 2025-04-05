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
    "5yArpGvcYNTWAM7egDU9NCrcyQaF78sCN7v3LoX6dKzD7go5SRAk1gEfr46aiCBbrzTWMFh9g24aqDCZJMSkiYQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JHAg2AswqphJBtJrH4i6NpKzqkJ52zFMMiZX6x5pWZLjVU6kq6FZkkKECGER7VUnC4cuhLYxEfz2mjKgiEUpQ13",
  "key1": "sWsEb1sdAZhPWhZarvffafxUJiJ24CtkBkuj8isyW2C4kwYxBkbTJEQAS66QjGU8M9dDN633zaJFLCNdrV8DdC2",
  "key2": "2sn8ga2q9joWsgctKB9RQJHfq9fPF1ThEqGNMQm1aC5pqixyu1Gv33uT2VceoCpWiym3Pkf1dEqZJrsv6xtf9biR",
  "key3": "2PNDqwF3Z8SsxTbwZBXDXzWi2b2hensWmFrYFGz23yGiRjJrsQHL1WADEHpNM3kPs5P1VYXjVwBmXLQZJVys8VAt",
  "key4": "K9Qe6Xc3on2BYqp41KtqtXXiZ8kAxMmhDV4V1L97rhNLHrZ4oVMAv9aDLoEaLkV65mKL15zmvvQf3hvQQfnwB2H",
  "key5": "5WYvjcKmNpMGpwWuiMsmvwHsopnHELLb6PmTjCEwv6kSMFRj4b2utBHftZjK8ubDA4iYLmRtSQbB2ekaP6rSdpi1",
  "key6": "5fn5qiMHdZ9AM7VHgkJCtyZ6WWXYVHMVXdVj4uGkHJS7iNw3mqwP9XomrgUn78YWRoqU3CQuUy35DGjbtczbgoVU",
  "key7": "2ZFTbRAiD4P5eG1dBz4DV71Zti1Rx2xhLb4E4h8SmFzEu9vbqdKMAujzsmvLoiDbDB8cvPSuqt1YZ5o3CzdCJyxe",
  "key8": "3KEvjJNLnWY3NZDdZcYmKR23GrNZwtF7EAPwGLox7C4p8EukrMistF8SyNh5WXxwzp894AGaqgm7ttAYGiqt1Yvw",
  "key9": "41pDY7bsWbBz6YKMtnPgrbvehWnUHdeZVQ5QZHHJ72UMQ5b8SUSuHineXckGN6ubSSUJWQeUiYrqMcBBUDEUXhrn",
  "key10": "4dRxQCe69ShtF9BuumMiwUBvWPsqK9C863o7upMTWHWdb6opJXVu4o4WUj1Pd3gTX2eHpCkf8yYCB6YuyaUeo3qv",
  "key11": "6GBdSPvEdhEtN6wjopmbpBbykyLHvCArxTWtZ1Kh4okrytZX7MRweWVgZAqVVxsGiBZkPgZqxkUKXLDwtFboGvL",
  "key12": "vkWcCMvEHmju9NiNtKhAgDij57dCxHtKcGynEadX8YZtZupdp1mWmZZP9MPFdqRsDchW9E8EjzShQaT5bDcEfNf",
  "key13": "2Y1VqUQZu4Di6KkyTic36Tz5AQRdUqi55zri77NJBZxpZTJKB1gFcCzgmcStdHDinimKzt2y1xnvbQGLkBpC568t",
  "key14": "54M7AqYyJvDoYN5qu2jWfNSTiNce13iJUXQ8PMHGgGNNGoJngK5dBE8rcRxg6EUbZrKiRp7keFPP3cx9dyFRbpSR",
  "key15": "2adhWEHWCR71EZsyTtSixNjc1aEN5hiPgYn4aHQg6D1AD8k8b1Afr8ef2xzh3wubHzPfWM92oQQXAtEXaxdgLJGt",
  "key16": "3pgtRyDGtosaS6XdM5kCqxHqKghuT27uhroPfgMb35ZXN3J7TAfY11Jt14qvUAQ6Pi6aPu56C1nLANTvFLAiTwB7",
  "key17": "9BS8oNrP3EtV3vKUGFHfb9i6AWymh8SXrKxBZpQ7X6hYoJRtvSELj9a9UANKA7f14iettcNtmerzutKw1LMdfeP",
  "key18": "2hsfeM64cJS8nqXXAwEAZ6azTS9qdfsvi2X9Td6xmX2XZjBMGWy1VMLQQ9XPBndiqGKEc7xXEYQ5BKPWNYYH2Ayq",
  "key19": "4Dsws9SDaLEYhbLGqGsqf7gLLeSdpK6kGBYozBFyFqswJndW2hE66tzU7BKK38qqZFGoAeh3wPTKdbheGEPjAGpd",
  "key20": "4Boec9cN9fk7Y9vwEzwWVyxETd3MbfVT5LkVixyEAm6XDYsQJnwZQiPUPQKg11L5AviHdHoHzXs8ccxjAbF17kXB",
  "key21": "56R13NG17DEGhsCZukcR26AspcVjQKN6wkojr1y7Dz9cjuzGAUwvh1JyMBkrrXpbVyw5ocH2JX9zsbW3Gc7pPdGh",
  "key22": "2B47PscZZBz8Y8QtymivYuo2irKr7DoRbgY1wsLuc9V1JPTPPFj2FXuDqEEfUyktQSZrXGMbYvb2S6mxtzuRBKuw",
  "key23": "5B1iYcceovGcy1Zeso2rMd1i7G2iLMWV9Cdh8dWbBtoV7xSHGAndYndSTCAuY9kEceH2Gge7P4TorAmtFKqQbuFe",
  "key24": "4N1NoZPAbX8Ax9odGLsegM9ub6RbqLyNx9fE6RGGmAGJjCSmXeDZvjqmDPD7rtXKku9BADT7ExULVknSSSN1tbP",
  "key25": "bzEcimm7WBXTvT75FsGvaoGCjeLsrsRjZ5KKqXJoojGytstSn8xXoMKGZRzeKqfVAszXjzyZR2M939Y2rdMEEJE",
  "key26": "3hh6GjksFXj22QGmdbxr6rCrLXXeksNMymQYSfoc3i38KtsSfAwFjn8npUqbbhz4foRaELi24X49oR2Gusfrt9Hh",
  "key27": "2C1Ze48J7HXEZzGJ5uVYFCDZPjpRkpXtsAr6tJrbV84UUTJbJxfsx9nBXxYB3kzLMAHJHeeqyhTiwNYMS8kHJfZ6",
  "key28": "2wyduen8gxjrN3u6nJ3hBqdQjRBDfmMS8veHXHZKFhCYcsb3z8WN8TiGwRgyqny6sB9Z3ZWpN4uBvYtZEZydrcwc",
  "key29": "5AqN76de81jSsSPhaZc7bZ9HmYjYZmmkko3oG3gmSa8ZtXXMuF7EqdSKo4rrLep5Ntf9pXequVw1LzAv9CTuXfZs",
  "key30": "5boCpewVRB2mNdgHkfxiRk72vTF1GBU2k2dVUFWLk48MczUKTWKA5igXc2N82QsnmCfA4fQiLiWD62Ei3QVSQJRy",
  "key31": "znYXB375Z5V3hCeA51iKPBuoREMBSYA6PYZHcSS7Me4aC8RhzKZUxE94oJAhCqojvS431SWGvERkoDg8i48ymqK",
  "key32": "2KJa6QXrjF1nkKufRL4NrLVRXAYCwhoeTyaUPPmFc4NQn3out722fhPxftHDr52bTZtsZ2Qbfib3PepojjBLNtS3",
  "key33": "5eMBzD7kTpMm4v8T1CH48bK1VkvUQ4HfdxZxeUHRhiwo2Qx3JW5jyWu2eisUcPMSj36qQyvzUFg6FcampBcRHRsN",
  "key34": "3zLuGfqtfAjVwhYK5pK26KP5zDdLbWL2PGfyg7Fr4jmLnWa2sus3xDJq9BiE6UW4SEQ4VHpXzRqTpVvfeXXVsHCH",
  "key35": "3v24Vt6eGNLWUrPnTtJsjgaBte8XqiUsvkcKfnp2VqmDjMVui3Ehqx1uSze95oq9C8CaoErcHAab6bq7iPUcSY2g",
  "key36": "6NyFqnYjpqRWFk8mWzuXwWi5rR1yWHD1RK9QRobFwye6sQWC8riySzHHB2ZQ9mBiJK4xqcYQk6yBB2AAhocensH",
  "key37": "3q5cy3GZFqJWPia1qegTFw9G5FtyXAAwigxohTXJPVjYsmXr99n5xtRK7stxe1hD98W9t4NwUBwHjzNMjWAR2TZg",
  "key38": "4PZpsUassBzqYQW9LKs3LRkVQERNqQhLahDkoPkSAY5Fb7M9gVYTdc5HGhRraeuEMqEPcYywMUAg98NVKjtmwfGv",
  "key39": "4xFKYv8cR7tJooQUxD6i6PhpDNM8EAX8eut5EMe1Pjy6zcEHeqttTsjBcXDYJNjwBeQcanHpyf7hMnmf1KHVJLuv",
  "key40": "4J5M49gg5VZeZaC3thp6jwy5iP89zVeeXaQBspVne5SDc5M9DC32vm3ARobZogm8oDnNe9fHXwbTDG9rWQJEFxf6",
  "key41": "1scqEHKa5V2qLhP5CNVrGcFxyj3ywzmXyXP9E2oFRVMUuS9pwowHSHDVf1SpsZZFNK7dspA7RqtF1q9rVTMFFfx"
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
