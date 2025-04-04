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
    "3Vpz4UcKM8BGbYeYdEonJBddvWxuVHwNXMA5m4Wezfr2svieybW2tZQQ2QTqu77PpYWSqGSzqEZYcK2d3ZfH9c7j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qFibccUtFbZSrT8nVFXiDf8MXH3xx1M8NWxUXER7GtCrQqh9XsoqFcj8xg44TjKqxFyTv6frSziwaWkuGN6qbfz",
  "key1": "4okPGMD32wZ4nN6onYxzZpx8JD7VPeruw9WFk5PuZxzy2F8rWV1FKaFwuj3bJvijBfTv2gCwRtsa6fWXjEWwcQzS",
  "key2": "2Ctp8hxBvCfq3reyF6j7a9RparpcwU5isGjUcefvnSKnWxb9Jm3hZs5rz84uc6A3ooELLVX8V2JcPRZENt2zMMDW",
  "key3": "5EzgqqQ9JqAJuuhaqVxJfvv5PqTCkAF2KCFMPhqZTMfmoPi5Zf6TRy2HQdYbP8XGwTKthztXhSqy3epmbf6tmMf7",
  "key4": "4AJmkTYVeGkxuNt9xtNTcjToey7qyKPoNCB3rk6zrwXXmySK9dkb9CGPUWFYt68tUEg2sQkJwbdDsuNPaM5fGnUg",
  "key5": "5nXoJSECiCpqNaXRfsjmHwT6R6uFBZfmSGnabvQPExe8hFuThnHtJLbbQpyNiy5qwoC8fZhuDG6psLo2c7hcg1RU",
  "key6": "QPjiDHvLmbKeP31Cgqb1zZmXqKhTowqARrkeEcZ6cD9p2CZXRGP4Xg16r8i1JX4nUz6TG6o8BKx8SqMpsQyAhsj",
  "key7": "4YTo7HBpV9niGycRmiQEhtTRVQtH5LQvHkDDmGCYoEVCYagSk6Q59ACgKdH6zSNkPZoNa3psXqjHafiMctEgNA4Y",
  "key8": "c23iurn8pi7b31W8gAqdyRtJjd3xCDiu5iVSdeRV5mmrxhE7FnWfhs5inebdrnNwHPVEucKiP3gfUignMkxjcHC",
  "key9": "557Tq4uooVwjWwyCDcFVQzgoFw2uv7aPSMSM7NUXnxLqNu4v1WW763P6SBoZha1ZDiPSsr3WjtyxnVHysisssCC",
  "key10": "3Ym13biTBeF25TkFNZThrN3jma2TZ8RfBwxJjtG9n6T2QMbgsUbGk1PRNr4xjz7vTGMj9jcR5ziKRT5McAULW2GB",
  "key11": "4vrDseJjoNWJEJACRgL8Lu8GJdtvWSayXGYdxcu3ZAjWmC6yAtGbVmHHhL6cuRTfzKQyxQ4mWyKyKM1VHeUMq73z",
  "key12": "49YWbgTR1LucbNp76nT8kqzWRCePfAYDjAMqsCzyoYVkeanVnKy57ctWwWq8w8SfCWCAtYqsRN68YPkGVnccPRVS",
  "key13": "264yPmWQ4RMQvzfyLHnsXXxhyhizFSW6DfPzKXr3apwnD2Xejs1WqFvr6YwPGgbdrC5EsnZJWx8pE8rG3X51guti",
  "key14": "4vwa4BpiKvQL29TXZvZnYWdeCSfkKubRh1gzrdK9mcXAGEVwSULNCiVhKCxhPPGMZhsQuiVECTBdzJpvmmkrEPRC",
  "key15": "4devRztcp7GLcTofuPPhd2Wxh1DZE2SPydKJSeuM8GsPBrACwPKnxE81h2Xh3UPnVdCZsnTzhsAJHtS2xUtB15vi",
  "key16": "3DNLDbhBFkFxSro8nnccG9pgb4Dm7xaAgWqhM3RTKUPkyL8iUa3yRJoC3xh9edNZCBb4MeuFg2KFmYci3xV9NYD1",
  "key17": "2ZPrpdmzAVdWK2xFXeNe1pQEe2PvBR6p2oiKoujEZmh1WVafiysWUYv1CK4jUei13PC3SnnAwEWbZ8ajqzPk28KQ",
  "key18": "4Yppff6HjgoQ72XdFQ3Lnruzab91BFv33cX3UVesj7oWFCDYQYrTymGRoDasUL3JkNCC6LvYfkqGNpDTMUTqHdWR",
  "key19": "5FqedehJWvAd123E9W2WTWRJHtPCpEgvsAY9Ttusaib9yzdVfEPRvruZuUJXwmT2MxRGeW3Ei26KApcoJLsy8x7R",
  "key20": "2NiatRrNHxDTutfCEuRWW5VLeHFQB1tKgmfapy6xMRmpxHroT9k9bn269q7nNsEeAH25oqGYfLvsNptx12a4QPgN",
  "key21": "3E2Sm8B1LbwPFj9uW69DCg9moyP3GjpCMqwrQenBi6M8YXmHBujTq1iCnZgNaLjWbA43dCKCkUzV3no7JjiaJd2f",
  "key22": "4PMnAy4z2462AjrUWf5JsJrHuMebjtxbwNZz7UxHo5JHRv2Lbu91pMS7N7s6ePqAJr7RZnwZYLsAjFpj4S5Nz4XV",
  "key23": "3tnD2sbs9o9KM8UsfCxx1b5YNCfRQMeiibKfrzsUnxwgjZmvHqZdsoBeuXh9HoUsNo8Sg6TFtFb69Gr2RxDFM5g4",
  "key24": "4jMsYZcbZbsR7oJFMgXL6UTw5qLbaPnAsYwXH96T69SvBv9SZioiEnYT8Ssp61GLXUbnGuv74dCAmHhz8hVWTzn8",
  "key25": "3q6mGgNbTT4nsPSX2zQtQ7mx83WenyBb9WA6E8iVXTwEHA1rcRkdDU1ddDq6rX3iEof48RAyQbeS724V5wLgQ5u8",
  "key26": "3EzTe85ECZaZAAR4ty3MfQoy5emgBCTKQG2hQtBGMouzyUqDVSJFdsiygEgSo29mL8XuQWPewgCThTwVtnFKZKi6",
  "key27": "2qxe4CK7YvHZAXdLTdgPatSUVhP1ySWUzd7zq2iqYUCe2TnwFu3EnJWrDL9u62ircoVpGnY6f5QNiywrXH43tJid",
  "key28": "s96Ve7sAiDLm7z4RWfKkkukPe66znZ35pFwuPbAN6BwjGwjRWCrMkvWqBgiMnuCXBXjbVKvYc4sxdo36WnaqwB3",
  "key29": "5SaSc3ermwmRBHrbBPe9qH5NeP5KWpncp6jEq6YTG9J2JZHVS59M2mKXhYajL3g67gqaNmMHoGaMS96TGhip6ezq",
  "key30": "4r3ovNj595ueiz1aoFgjtd3TFs1LDp8rBVzrPTKswBircs8fBqCjxDVrMEqvDkCmUtrWRp3yskufuzSxaFYCB94K",
  "key31": "2K9t9vpcAkq7aAKNswYM8cyYyeVjLt3Zn9pHhQJ5PkgPy6GzhTBukgvq4cnaZnCGFZBMwCNSA2EEHiGwiutCstJq",
  "key32": "AFjsid1ZJAbhyGDZJj1t1H71SvKUvepmWh2h59hmMpt85bFgySyjS8iQbozyhiiYQvXe3vqr7cHjKaDWHUHFvsv",
  "key33": "5MpbRhGdXBGCSypdSEvZgUb7Suue7j4jTNaj24JR1bieaDEnQPu7uPaEQ5J15Bmx4v7P6LdVdebw6cvunvF6FxNa",
  "key34": "3QEaw4xZWdWT56ovbN3Lgpv2m65DoAtgcMZELDdj7yRrD2FXsJW6VFnqcZWWjv3Lyp1Upn5DYFGbfCcZB2Sk1ZKk",
  "key35": "52BHMK1415qMbNvBqk9CsaKcyNLTH3jzyWrR3jBkZea27KbK5q5SBtEJpDyFnbS4rpoeiuh7rLCW3naXCi7T6G5o",
  "key36": "21ZQ3sqpwHbCGgYjYisZfSR6Ptwvuj6rZ2Xc3vgBkFMHtHF8K2thErKfW1tVuWqLs1Yg5ufkujjMWGQeJ3NBZXR2",
  "key37": "2EjQ2z2yguLPwc89GzdFAPr5YrUE4ZvpWzRgKe9hC19mMEbrvfUNeMfXEpWY6vnaswdqghryzbzFMngWQJTJFrMa",
  "key38": "2PnHazpCztpJ7EY85bDEvoUpcY7bckzeM9Fg134CrcQysU7jmiswPzyfAz1f4VqVFsSmL7naD3wA59ZEkLa1Nbd9",
  "key39": "5Uuw6ycQk6u4Dt5SPnh4t67taPQPBBdFgsNr2jtqJFcLERiFUdSV9kmYmjdDMibCiHMR9amtv32knP5pD7yNigkW",
  "key40": "XenRHY1sZdytLkB5ox4vQY1LpusVQosHmTWQoCMRCqREV5AC9XwZmfBTSuxJnDCgRH4gLWzYJbUp1d4UQ11Sdqb",
  "key41": "5aLSeULvgvj6k3vjCHrWmsEiWagFExVenGDczVi7entd5i1NWs6AiLJCFv6PGez9BC8wy5psi59nEvYBVN1sg6vX",
  "key42": "54yhY6wA6ZJYVHVeWG1E7aL71gupJoLz9fZZLmNGjrr26HGxGAx9exxg8wnafZgnxwypoEzJVoo3jMYEz1FKGz86",
  "key43": "2j15P9ws3PUzMPhw6CZKPGCJSMXuDR4DQC1877Bjbi7HBeMTU5UUUrc2G6m4VpkF3k7g9uKuEPYrzUuYpFJmxiad",
  "key44": "3domJMLdivotqHik3Am4ZnorcRwD1hHhqp3zfj7mUifUWq6Mdppcp9kZVLB7Zwohi6nKBVCLuaW4cWcWq4otkDtt",
  "key45": "4xLzunAWGAg39S7K6M6iEaCHf81tHycDCA1GdtJcpkM5Gtznr8A5feWbpnsrZS4pV3UJ2jUWisTo42tRJHE76rMs",
  "key46": "3byVmufeTk7cWpLyRnMU9CrwoqJ5xLyycu4uJ7bAqmEbTSFw5s31wFXJT6iNFZVZpurqbF91hrVBUYdqCynDrHXf",
  "key47": "26ShUwHZ15XnzZr1wyncX5VAZcKQMJN9ogwhHsoNSRkV9wnvo29DhiwfijPMGaasGbLNDwq8wDxARmQJGDfqAD7y",
  "key48": "4Q65DTSQqp8vHAESLPGLYPJ3wVpxFgpN5GT9FJMVzR22JzrjTLPhzA8EXCUJqwATym78LdqjzYARPYfWyUeFUxpt",
  "key49": "53fBafhM6pxBufa16KAxTQ6dLEjsDh5LuJeCvMHey6HMXtryu9UMyPyKAbdAzD7sKXKcsKACUAReonMMLVNHKa85"
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
