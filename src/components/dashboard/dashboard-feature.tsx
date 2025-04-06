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
    "2fKVGopxwghtkNa9YGeFZPWiL5AEPt557qAZ1ACzB9m7vr69MbX9xnC4eSfjgNYHyCmGD5DUm8SwrmBrpakDNt3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DCDnFcMaGzQL12ig5gzgqt5aPUi2NnCyvrcF7QvddYbVV2NTUz9CZryuH59rUhWLVC3KK4WzifCBgAdvVzqQWs4",
  "key1": "S8RKQRsp7ApUais2JxhXTfcAQtFMwFsyGu4ks9JsFTSDB4gWjQ3MdBiYkCX8jnrpYKoMcpqco7uRnF1mKzAou6M",
  "key2": "46WH2jGhivbLGatq3qpdvXWWCjRRSYDNKUYF6eTNDi7pLD4APJENX8WafWcycVfP1y2QyqBTr4fMFUFfWjGzu731",
  "key3": "4ud946DQ2QmDd2kZ3dvcNv69HYMuwNXEjqWUysDGp3vDRWhF6stbH5VvnXZc1M83UXRqDdPoacjSPBCGVbCLdFEg",
  "key4": "4PRijQWhN2x31ukDCBzNFRyksCAK3TH5GH9a3w66ikkUQ8Ab7zKhTWk8SZXP2wsTQmgLr7onH8Mi48zno7DB4CUH",
  "key5": "4yfzfpoDfFTrYv7nKeLVbQS8ppqNtbPMsfkRgQZm8PcPn1JUWLSENX7rzG1Pn4TzoNLKdhjYY52xixnt8NKL5Fpv",
  "key6": "5vFMNoXtA9q9YgxTUB91HGKC9TPokka5d3CivmxriLfgPv3trrLTdtdEj7draGWi6uNrfUQmtGXRdbZCuT9XseBx",
  "key7": "4MM9nPi2nvWdRu6BRioGS4o5wsG2Ys7wSJXr14BcuusTntrZC5sSUdwEPvL5Wye3XDBFjWAPtzeQQQQmCobDord8",
  "key8": "5wBNnQgYgbL9wjoBxUF5Fd2uvYuncjeB7VbWtj79UnXriS2TeGWV9RWhb29kmPt8XWdXSCLeJqM18JPdLpUKAUwM",
  "key9": "4QYPQE9KbgC4Tfc4WJS2qoeC53u8onWHsPzcjZeW3gvF2tnSFP3FEVJb7tTJNd5TDeq8NPfLNARh7fEzua2NSwnM",
  "key10": "488rbJEfseVJ7ZccSjDmSRsbJQiTHJBFHXi9D855sbdwgTiivUjJFd9N8pKK2w22ZfNDpsiLFagh5ShRFCZfKCpR",
  "key11": "2fZRKTP4j7a2YpT3fwPLxw9tmQmrshiEbHVXG7t5r8b4j1tBgEhKRHiwGkjfxqaKMbTfLLtqN2tHc6Sx87JAnQJg",
  "key12": "5e32zG4LwyBYWHX5PoSMSQaGnwBqHJnkw3Baz5AVn7TL11bTbkCyX9hCbjwL7SBPy2roYq2ThaBeNnu9UaBQwN65",
  "key13": "w3jk8fj8UyH8oFyC4k4WZKPAUeFLztxpM1h8i8X7o4nzXDnnHvMEUYyCrFsWktcAvsi5A96Dsj7HfMepBE7jKoV",
  "key14": "3n4VdzoP6eXB4xiCq5Sgf7yeDV7LQGcgVBEyvoTxLpWrrs9q9467vtp7TUcbNPsUpmy1RzHyGbL8o1G9cXiDTF9m",
  "key15": "4G6KRweBHhVacCYmzLrkbJNEAGnBmeHyckrH39BiTR8qc1sYELsUAEq9s6ACrwGoou5f434qgSRrUt2kKsZpL1r4",
  "key16": "5vsrDQMCHU2tyxSPsJ6rg5fJNrvxe3yK4hvtgp2DkgbsGxzUodukAAYx1QLQLzUTncD9dYk2yCXeo8aWGFcTkogK",
  "key17": "3YdzMa6seLNa7t6knbA7EBFbfgDUfqyzYaexvgRWR1CgHhvowQ23fBNFKs7MTmPxiuLNmLR8zQJFcqoJCF3o5TrF",
  "key18": "5WPnk9WxFgaGUfVN8DGUgx2942qwnWMGHBUTuVhrkwWq9sxDqL5mFJp1mKvK6mxAv47cVvs7VqXfsrdDNyKjyAK3",
  "key19": "5J7EVKee4xxmcgxAR2Qnn9C6M7fGoRHUebMSdMYF55orv2dA5fiiqVe9A2WMEe8ydT4o75th78woZL8bJZ8hURhB",
  "key20": "5o35PKguZRu6KgfVFci1ETS3Va1p5tef6qjGZ3G2vcAD5RQWdvsoL8uJhZpwT4d4FWggkpjLBbjCVmpBMjVGuu72",
  "key21": "2Yuj5yQURcZzdsx4279BnaPKSwFMbgsDY7PT3un6HT3myZW3ayZZWj3SqN2znUTbgmsjy3zfJjFZ7nhHW9nG6Ndr",
  "key22": "3pmWoVEQGQ1VKPwEjpUWb4f6rGqdx5HsrFuCErn66QPMhWHBeyA4UtsBzpZi5dBUoYEvCaJQYKFH5ihbh83onNn3",
  "key23": "3S9wKuJ6fSatdfnRahYRHzerzDSnVKLgmftAGmJz88FBQpj41iEG1GRVXkAzkGtFrNcnwyQByJGMHUbRwHHZhtk4",
  "key24": "5GoaYhPvBYnyEA6YhweZHQTxNEBDr19nEmZQ7QpqogKaPrwbtQti1j8FSExk9dY9mC6nFXCvsv2CdgTef1xRMYZm",
  "key25": "4MLesSZHRELXk6msb2qBsycgbjEhKNA5hHXQ26J2B6pUQ2xmEAu3ALaE1ok9XDeoEocyU1eKy2bbYaci8bfm6wfc",
  "key26": "3XD8cZMFBMNp2wwwvB28mGJ1G28GceWjwoqCVzTzQvAtRmusdWFRyWbtuXZkjd72tKNqwMjXNMHfrft9Ljf58wBD",
  "key27": "5ehzpnTNgsKgyuDn6hfoqNRwXMgMVLL7mgeFJhm8MQ4bcMkvuo9983DfC4XRvXcTmHMtN2zayDX2aLZuCD9s2YJY",
  "key28": "j3tmP22SwCjXoLufn1DFp6vR1EgUSYDgXMQuFMNrirDBdCbEGcS615Sshqz6ehK537dQzrxT7Dv41NHDs6H9kZ3",
  "key29": "42aY8nD6mKpb38hMZvZq3X8JDtrcKpwVsYP8FuHT1Ud2ooSES1gACZBYjHitHR8kboK4KDPSy1NC5HFYNpGgbF89",
  "key30": "5eQR6TV3wdq3JndLcGbtnGf7KreRVYL1hCrAorAWWnunQnNjVXTrAQdr1FH4bZSM6R4nJkCE8CneXkYwjFWnPk73",
  "key31": "2hfzPPXN1MmXAHFTGahPhzarvcSDBCABMJgdHEASsLoku4tuk32qSSLGRNt7vNAwa181XcSt2QNghDtxqrwM5J54",
  "key32": "3UW7GzzNNngJsXpwgduydsF5o98JFa8oknPoYxGXMZDDfdBwk6ikK8uo5zTeDBYYA32eBm9x7z7W7kX6Gh1tqxJg",
  "key33": "5kG3SUYVv9QpCf5CBVaSXcENpgWAb9sc9ZP4VpQ8pQF6Cw8wYJS4xk6cV9zFLEmLPUjtWHjBxqAzh6txeFvdK5qu",
  "key34": "3HCH1QnBihmKr6KF1wq5tAsfkeSNeoDE6v8T78wH4URd9m1j9xd5ULAg99eJfxNDn8zPxoaFnDhwJxnPMdRAkFWa",
  "key35": "3sqjY8BhsgnepBU3HvPZtNSXYvqyf8YgMyf7Wew2WJ1rBqGb4uDdi1PxBwxYPggNavu6iPof5mkyvAXMKnGkDJB9",
  "key36": "2Zm2fk6UyQSQ6uXcmWwNKa3Wh6tvRefqFSEJeeeUkYBrHaXcLi1DaJjtELkU6NqbD8UEUHMd5k7TXzy3Q4RXNJQm",
  "key37": "3uDVYMAf1NktrKV1R95cNgit2qd4tH6SNyCpwZZsi58zr9nTiAwP8SCCFsTtNsUtHuxjZ8EexrUfxo4PxwuSio1q",
  "key38": "nHxVRZvXGDh39x2M19oFvkdx8RRXRR13oQL1sgkeMBDZH7nBYB1Q5R5sF9P7sfT4or2RJhBqB5hUBeD8GN3bPiu",
  "key39": "2seDfeDbDGVc4QFWXDVAaRr14qHPaEqHnbZCt2EK85st44PqkaGAmG7yXAec77XWPoZccex1qyqSou5TaoAjitGv",
  "key40": "4fYTKkLRHm3d2aiiCu3U9j9sXkxgVz7htBJet78niasf5PnVznySE5m6QuyN21EX1RMpA2UXi6qosu1mRmsqQd1o",
  "key41": "3vNUYACkih24ZbJELqGbddSavA3gHdz2xaW9vYFgJLT76Xx7b55UcNcsQVczm23wDVWtvsJH6oNzK3QTetQDL9pD",
  "key42": "SLwkas3sBcQGgRiXz2jQgYDr6i1RedSkyt1Y4ZC9Svqp8UizwgCUXLE669dKVeyCJYw4WV5QyNzgh5ixEbW5Pvk",
  "key43": "5vq1YrDYCSTCVrAT1zj6x1d2V5hD7Lon9F49uyw6JsDbpr3Q6Eauu3Nu1sYDj2mzMURpwRyGtRPDsWJCZDzW2MwM",
  "key44": "5GHWddx4fvrpkvD1cG1dm7wKtEGYdTrqfh9VZ8csde1Y6LA8NusyFDxF9pi9KoGbyxQpDaHcx3vhSPrJwMVXD7N7",
  "key45": "2UsQzXXk8sXGPBMTDA28raoJyijKLVLK2gVXh6c7E42iCHGmsty3U7P9mMES3kB2U4o6ZfeXWsKVGR1YTeGrTxeH",
  "key46": "PykEHe91UyYZwQGXha3MK4gNBVFWBHCFwUSWCgr4nTanWpk1qLsnww7wvTYJP56SPRFG8UoTVYMMU4SmAeMoiS7",
  "key47": "2tx6d3JErBiUnnm2Kpk1hvDvjpqKqodYzTwb25AKwPEFL78ppiE6ThZbNazp3Z1Qg9SQnVQDsa5RpUwFh4zH8Db2",
  "key48": "4marZwVhNz9mQRuUY4UN5hryuNnx9bmnQBUE2Gbiyby23E1euNLn9iEp8rDF7FgGSJgZRW2Hp9jsS7K8UofkrTqd",
  "key49": "5WHBPKLKDmns42kMCnVRoeckUWiPUKca34JVBdoCut3L3w4mPt4BoCMkWmWjs98krFpAxsvjokyMWiJws5mAcy9R"
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
