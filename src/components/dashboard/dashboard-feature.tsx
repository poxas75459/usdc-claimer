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
    "3ruUUtJeZJ5bZZMZobL39xRfycyTauLCqCttrCLZhXaLUe1b2PiLEUzcfSZLbuzRGHGTwtVg8zojBzevccuQPu2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k4Gx35SGH3oiCGmDsww8kJSucUKsYDGi6d1BqemhGmkrPNqV2kpqPYAS43tb59wCCsvnvYcKP2KvzTp9BKaR8mx",
  "key1": "aUJxRc6ZdZwyceaRw5XMBsiDAaxRwFVRZuPUiA5DddvBfYkBhqEQjCZQ9yH7AAD6kEDawFji7X2PwgFJpyBnzrb",
  "key2": "48mHMZnTbzLjN2JKnmDnacHTbAaJdTwX5xDHWpBU8Gt1EWsLGzdPNpeuAC9HBhdPTd7cGrBb49LuQRjity1TmXJj",
  "key3": "5mNp2B2foxWQxp26eQjm18BQqsMSP8bez6BdPPEjTn4CMvV7EDs86nY1MYCcTqSMidZHDdRCgiKPNtNgcJoSw37K",
  "key4": "3gVkaKc2McYdR7JRiswD3gCyCH2AWnY63S944FasR3iP1kneTiZnk4qfGjENBsk4Ry5mdoXg6Z5dLy8YeZ9kBEpC",
  "key5": "5FC4LAuJjdrCDQgYhwLzmoiMADXJ1mHdcqe7mVapWvA1zKAoPnCduWDUrk3QB5Cb2SH9PgWrdaJc1iuGLWRwwRRG",
  "key6": "3hQXipDwngSuTGfDy9siLfXGq5Bv2owJrfmhhMB5ZiQvJN2cQkMqgoTeePrWqBZzeWU8e5WTutMVkDRUc9UfMLt8",
  "key7": "2EQbzTpcoCfVNAaBxkxKqpGA6cn94wucGitS5LJz767oSy45CxEHLqk4crfwMuDAASAfGGBZ2MzndYWezrfHaZRJ",
  "key8": "4jZucBGC8iC1YSeYttkRH6vgjhutNVRUfSWbAi4GK3y7dSKDNuweJQkiAeD1HgrRgT2Fk2Eh3f4hQbiaLfgyqmEP",
  "key9": "s4AvEynUZ662YBT3sKmJs58GsqK6JNrjPPKLq8cktmiTzdAeGJNdBhrA1ESGdgDuTwEDi58AtBsdWFFibSG5pkk",
  "key10": "3J69saZaboCtGX8vHrB77JX7x3X8MmKaEWas8khXPRs128Ruh45NizX5283x99k2oGcJ1YjBXrmQBeKiB2jpkiWc",
  "key11": "2v1h1j2La4rKyWz5hYqGgbWDLtE2DbEh1wisCQBzx6BaCces2nQRbvp6THAigYwrKdk43k4y6rvHo6A642DqbL9h",
  "key12": "2Ve6PcvsxhA5cHRc4PcRDESsjyXhmeSwYkjQhRp6ooqPS5jrwX6ivhiWTy6QB1xCqvmrBBDadwQ2UoETwnpGxkan",
  "key13": "4rDv3zJsVjg2Vwt7DdmpwmZ5waM8txM74XL4ugEKcc32jP4Xc4NxpZjasQDniZqjQTMuxqwr7KQm3UuThoiesGo2",
  "key14": "5dXcdf376aaJmqkYbce4iLf6Ejyv2K6wg2o7kR5qpcyc16YF5KpgvUtPMU9UjDugyQe6ebWvHSqrLXfQXeYYhz7k",
  "key15": "5Xm2jWUyBi4kCHFx9N1u7EVRBRvThf7j8tD2dPhRQm8aJSHHff7KieRJdhnScfGwh3ZYWKXTb3U6CNAeTHf9KUNo",
  "key16": "2ChH7ugJWB6Sdg6GXvPCA4Ki5m6FEH3S9KGc6QLuzSYQM676PEXQuqHpoCLjpdUSD9ftqNGQDj6hjMpYmvDyqxi1",
  "key17": "47E6thNtA96rpHpkm8LvZJoqSWYk9ZwkCpUAeVTG4jdYwtjnXEoGFsfMXg2GQ8p6z1zy9DWUH72Zu6fVaNkKLfqu",
  "key18": "5e5Bkvmcfjo3sZXJs9n2NLagoEiDS35tYfn9hErTwPTmRzGVjkMNjzD6iWrJMNLausbeJeb8fGjzPy5WH7YVDACn",
  "key19": "srsut49zE1tVc1CY28xHkMPhaCDBN6cAb6buSQd83AmmFyRWLmiJ27gzbgTJBBHjj4e2paM9bkX2yyqnAtGsqo7",
  "key20": "5YcsKbQmucXyYwphsoP3zERRK14aCMhUc3m8ykP8fgYRn37bG9aftxWJViqPiDtsrLwqpduZ44DLSaPX2ATYiDjm",
  "key21": "4JmFdvYA9asFEf8bKM96RPguN1argYosiQQ3erkQYCe9PP83e6Mp7EsiuVSv3xArUJtD5JmvNqfV5dNLpfPscdr5",
  "key22": "59KiMuqtN9RPjFPFNqUtqN3bkm4yhKq9tYssjHHvDyA7HhEWkgc4E4LCVPrAW3EpKX8oTky6RV9SQ16LeJqJ99Xa",
  "key23": "FriU3dYYwcyq2XBm424X6dWhie11QxNBduHha9aQSjiBHkHkeSfg5aqFMuP72iywYbAAd2aBhCLyDQxGRwHkG3Y",
  "key24": "2dF5dkFys4XdZpuAo96MhvkobLWDr3NsrSBpyzV4mPinxtS6GFYrk3cRcweSKWoGH9XwHs9YQjSMTMVEQv1TgvPz",
  "key25": "33zZTyXiyREvYZZYZob4UZruX1gskenzA1ebMCrwgijWCNVDxF8pKXzh3paBt555fBLCXdjbfJb3RFHHfy1C92wT",
  "key26": "Pj9CCmbJyED4vdLPXtC1qgwQZ3uPcyHjhSPMaB9cpBKRtCMBLJ7Tj73Xy9B1skvYNJ69kM3yJ6QV8gZg77QipkF",
  "key27": "5p5234XE4Yg16oxyaKDmXLs8e3auamyFtGZQQv6g5JibxPZKQDo2S46hEZDBKx6TCnaWm5sysQowaFKNKH3uSPYX",
  "key28": "2WApv5WDqCFmoie9DmPV28dvcRfPiig6fh1UCVH3c535TvmeNQGJwXAc6HHzFr9ck1UsEPqBWWZoUT2tqDQ7DNsU",
  "key29": "4j5ATiTG5zWn7UqZYk46VRjmwDNyFkKVonqLJgMLEhXwHCYKAFwJQ6yra4UhMXgpwuSxT35hE5pbJPsZaYoRJPLQ",
  "key30": "5Yhuc6EzQG66bFu5fXigLmBp2iCW75YwNbRkWycQ5AMRVEdyxUL1jCiyB9wRotS9pXajXskju3pmtV886oigshUV",
  "key31": "4SD63rZhrSFgaAcmUJF85hUdjGqovQW4vVHydccyY26r38S78XKdjKxPwqUP2kX56CywPmuLQ79VEavs2v49tWAt",
  "key32": "4oVEZrGit2B4c2GN2tbWju3F19gFhTXRK6Uu4yGaENDm7t39mc6CC3BWXJiLaEoMJ3reK8KfdJmfgj21kCA8ghvK",
  "key33": "3rXBDZeZRvoKt6AEym2yPTnJ7cLP3BtNufSoXHGuyKHVFvEM1f6YyudggM7AD1ZE9mkkrc6syNokKbpMkmJXFnZF",
  "key34": "yRVmKfB5YFAP24bteKvH7FcBbJZgL4M2otnp7p1Dsfpcz5Y65bYcL7rTxYA3QNiHo8Uun4V2crxoY4WddvEjJsm",
  "key35": "3JYAxP6vFhwEhmdmGY27jvKvPKWUhHYM7aYv1AQBV1CVwg8uRjP9rat9aSTh2aPneLSwLNAG6X2kCjJ5mcwyvLYc",
  "key36": "5KMwCNXR9cGFwnpTukDhMA2DE5wQCXx9b9KHsvkk21U43k9L3fY7wjYU5nKYVC4KvYeS7cubVUjA4ZUu5shS1Jw3",
  "key37": "4aYJTQbUvY1szc6zaCGEcKFjg2kM5joqs83t1dZF5fBFeq5i1fB3pQwrX1J4s7sxgbBDqqjTwebKvF2p34gWfYGd",
  "key38": "58ohEc7L44f121TFRkCdMCaMnZCeSguhu2NXzJ3p5xrYx5TnHU4ijr9evw8jkZ2KaGZeyH1z2wWxF16MLd3SqTx5",
  "key39": "4yDJvCsCbz113HzaGjrmLs2SBkncR5LBaNyMXLnoqqF94h4V1g4rh588NSjbRX1zJdjEax4YkpGtxNSiFPZSqVPw",
  "key40": "5DmCc1aVcPAkr63XHYD2gg8huVqCByFDQuyQaC2ThJ31Q8KuHndMVx4jjhUm4UrS1gjvLV5feN8gTRDtj2VpAfzG",
  "key41": "3kZUEmu1sHmStzKS9wQJdEvQMgZ6unk3b118QSrxmjCne1EzHbAgBjRzfws1ffbsPnjXR4nnEEVbS7ALpKroYRsM",
  "key42": "2Ccrrr2Ym8pNyBNPmoz8CkxpBftmEm6cf9zWA1WehU5yC4U2qMjx6vsi1yn7YjCxHxvndhqmt97t8VsDGrMgZ9MR",
  "key43": "kS6xULuy4jivAbyA2WfNzQ5Sn8JjPTbZn5J83ASdPYP2QoWXFQMBk2h5CqJvTpV1RyudUTcmHXXrXxNjLqF5xQ7",
  "key44": "2aaVQMqu2zFZHNRmZm3jNqLPxAVPSoRaaU1WMxxtN6f2CNYvDp38sE1JJaEgL897tQ8wEcKzBBLifVoGhzM2nGwh",
  "key45": "5HsuaRqsSdv9yDtfynQktzm6mMHnWo8k6NvjNXJHUuGRovJxpVBJtuRGdQnw7nmvaJ4KoJXCSctwquucbAiLxjHs",
  "key46": "4G8BWtqaBktpbAy5aL7GT8yNfKfMT5nWCFXdZg9NMPUZpHyN9avYzoASg3AcVLJjJUTeWVS5ZaW3oaEVNGfmcVSw",
  "key47": "5GrAwSaxmY3zJkaYpvfBQK9RLfwHnxnymSPg6y4qyfLmU58Eq6duRJQ9pTje2cYBfuDbaDSPrbZL4nMNF9t72dtd"
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
