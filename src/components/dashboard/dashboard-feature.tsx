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
    "2Y79R8WufLStBp9tJZzia8VEsPizskG2L3cS1MLLaB2rayQ1nQwvhLjtSqSZoyT4tMm7qKXPNaFKzcSLbTjpBbM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HQieA1bB9JA5A2FsxzXwexcsVi2mp8DHVsZwxnRgEymqDWzYHGZEmTms58k5jTsnPsNsCPGxQdATEJ9G1uqBcyR",
  "key1": "46hgZRLqM1vW4e6h4kvjK3cEKtNpakpqmEioCYQddFamU6DGSbTRqbrByAc3qKJ2GySeLhehe2gpZVGugaCuukCi",
  "key2": "WPCE1dFXBn7Xoby8EVs57uCbmj77ZNyKSM3fbaaBMsZox24R8JE2Rd5tP47orjsGbJqf1qagfdgZjgEV9yZ13xZ",
  "key3": "32qMyy68zGFdqmw2RYKXNnbCxVmh2mRM4NaoXuZxL7mbbY5Ngj627aGQteMk5hDPW8sNqmYRQ2Pi3dQoky3t7cLn",
  "key4": "3MN4uQZrtYyXrLGsC6oHVQaZXiJr74annxg2hxj9PpAqSE9a8rNXPx3WNZUHUxoW9T4SxPaiTYXX5gLs5BuHsEbv",
  "key5": "4QSa7tMiyry7hchtA11bCszHSzqf5JsER5R2eHszkU8KgYDQzXR3ik9pPCeuAopFEJKCFaza2TiBfmSqEL5nNwrR",
  "key6": "4ZeDyjirJpzSxZgA6QineU7tGgissz3VV8Mj5WBG26pTCAjiNkeTCqJVuM8SEhb4DvnwCvkBVQUHoryHZkdZsw3D",
  "key7": "5C8zRUeZjjQuzdHjKmsK8sPybtuy9mjq6AS6ZFeDLYcok4cRrFkgwz4L91nEcfHKFMfgmfhrZB5fkVPudzJp3umo",
  "key8": "5yMKkAhBr6RizdUsdGoaEy4pRjAs3G6U96MHnZPqikQMBQJZD6dsLtkyw5Qzt4Ha6NZZ32YQACSgf5GxKSuPynUX",
  "key9": "5weVjsf2yMJjd7RX8RHkn75Qxn2By7oxJ19oQg3c52bNK87x2DVRafnx3mdXX1wJwjsE8aFKJUUBDCuF5ENUWJ4q",
  "key10": "8Nw5PV25VujqBiHiA9X71GfSXL7NWnGdJXFHSvcCqHZ2aK5zitfFw5LT5JYtyzYrZZAEYdNqMmbu5LF1YneXkop",
  "key11": "4h1FALVEw8EM7wGTPkK3SeLpFSwvjJfKnJnTpXMqTDZopThg1tAWmcKJCsttMvfkYcADcFxRHhefsBmSV2e29k1m",
  "key12": "4stWJJoegMfFWN1oYophrCqsKFWQu1B4yUxRKXuV4D52wosxGGLR99HGna2sdRdfvQ4op3GjbAjLq9KzRYnsSnAN",
  "key13": "5axDyoRwdBEsmFWvZveYepi5vSL3YN6qHuFS3u8cc1bVMpsNKWHkQY89Drci8n1czVxVggrK8256uTwmVZvaDEDL",
  "key14": "jb5f2nNTwrx469QdYCPLyUSpMHLFQ2NXn6dtzTMGT5yEphLa9Hn1W3aDtPojt8kN1E9vbLHTnsudHogCRj6Szko",
  "key15": "2rYL1WZzKMEUcvrQkv3qPSZnHDrhScCDMcgz525X1haHrSy69e1HtDTpxynBWv4ZePF8r3Rre7hCQoAr556AApVr",
  "key16": "2TXmZA8hKZUgnJuiGnMUgPMdpJbmLGHnfX3zBvzkUFWGnfHCiFsW8E4UTRENSHgomVsaGUQGnhSef56aoqVpfAXs",
  "key17": "3kZ9YWraXaT9S45h1gbB2cpigDrPSxApHpUL6pyKiwnJXbmut1asrmdifvQ25XfoNTZGw878mqyvcUornQvBziEd",
  "key18": "36u2cv4879VeoKnP2DNvqZZDMo2ejJwqsBpi5xNXabsecH9jSeT9wvXE98gfWLGcG1jDFKCshgtdz9AoWpXR2Bbh",
  "key19": "oh4keN9WWbzfSPg2MxGLNBJf3ebsxM5SDW7W8kAHzkoNjs3mBUaSUa9HpPM9ZLHH54QxyALB4Yk8PppChm6aCsv",
  "key20": "5MKP7S8K2XQhnFcdDnPuzByvwzZjLqLG1ncf2XdmLYJbQg3MndkhLj2Az1aPaU5QjzhsWcSR1KpnsPunAXZCr8G1",
  "key21": "2AZiVfeTuFLUqkrzNT6bkiwTKXxeEeNsqEgrMDcy5QHer47fPt2oRy46tsQsmL5rQDAbaqe1kz6iqfPRRrbA3y3u",
  "key22": "3pZJz476p8mPXGZQ8uTr2ss744DUxX3WEctX1VT5jwgMDGmCuFAunbj5tWZkSvroVvakS1xUnAfJyKDtgVmeY2ww",
  "key23": "2EDVa2Aw1rNXA4kiHqSViKsadyyjQJca455ush87oF6E9mcqrp4ALeBbcH6H78TAtfNqhyy6Vi2SDBjFm4fQbRHd",
  "key24": "2nqdS4ki7iFKJxrgepxpuTtY4mRspaRDN2d18Nw4xFaJjasvX1qQ1YmGfUVxEzPHHiQ19rYWxbt4ccusNs2DhFd2",
  "key25": "nKa9xALFfMakGcCE3uGSeZbC9tJ5SbvTedbnb8fpuGGZA1EH3bM4oHpzhZ7Aqu3raKnFCLRNRD2paQTeQVGLV4J",
  "key26": "3NGCYVWeYEpJ5v2Ac96hdyeg8DotRaY8p2Fojk1mama2tVjLAKituHcjRb3w7DMdSGyFVYowEEw2CNGMPHrXti9j",
  "key27": "48adX5XU7t8nD4St5qqZ6N2D5Ma9LvqUgW9MbPu8cFw9jLPEne1C71DuRdkGseLUNquQYs4EQ7rF9o4cdnB6jt3K",
  "key28": "4Wi6SFXFmzpaTBB2w7A6Riau2hwCcWLMUK7JtPjG14x5qukwN4pjCGSKswigXE3AZx8bGEwugbd7DyUVYiekUNGK",
  "key29": "4NZtjj5FW1wKCcAaMAPqYt2SK5NsmfjJpqWNHELt7jDL3FfmeHzVwgLLF5DVFxxLgjpLu3xVTkG63MWMrMhvavYC",
  "key30": "3EdXwAeZdNTyZnQVrAp2TM7Zz6hcAn4pUuY34PcB196yoM2aan5vomQWYF9tRJ1QYHKrjq6sVmPSJFD9FqXNmPpp",
  "key31": "55CGBY5SK64vcYnee29yqYiuuuBWw8wqTf2eqvdneMyy2Lv7MoTshdEtXVE5vhUTDHbZrzRLURMnVJ4uBtTBBef6",
  "key32": "2wVqYiN12cW4WsrUBXuVzgCqAQ9HihSp2B4qfQWynDcuULX8BCQArno6H2RAncrarKpecyRGUSpn7uYGU2xf6Dyj",
  "key33": "2zmYQh87jizpjtAFyfVqLcSUxQfjQRxGL1YmnHgKPWRhDbJ6TFHogDUD6FjkEUgmb8FvM6hvchnFA6xjRjVqzhPu",
  "key34": "qxR3W8SizfEFrf4qr5oT91dnrNRQ4yVZT4tMcBLzKUbu2PuYBXG9AteGiSCdfGCPFVqiyu54Ha3Ptxp7ZaUDdSc",
  "key35": "4nkTwfFRJzQhaGxmqoBZ1Ttvq3zwbVVhKCQ4hxG1Pr8tLaaPZS2CW3ZrDSbQmupkxDT9WRXkAwNidD5DkRxjryXP",
  "key36": "586iTgZuzhtLy89GvJvrEpMb3eBT6NV5tmd6xo9gv2tNRiw7YFZmUk2ZkxtQvxhzqbTbCA46sg2y74nMdupnA6rG",
  "key37": "5oi9vzTfEvMF2rsq4S8yFGQc9SfMZLW429vtX8hdNJwjmoAensgtbnmBZTtXMVdMHn4XPuH2eHuVsVYjhRYn3oDf",
  "key38": "59vju1FKrEauh4T558aK1SXs6Xw8WkCR9P2NDo5gYsSN4KzbddCjQKPb4VS7R7g6tWgGgaFpePaVWa7DggTWevvn",
  "key39": "2kwE2apmHaLAnYvMWcVMRDMKANCK3XEy6L7y7PCynUrVg9Ufg39xke28ND6KrQyx5PnEPE3na6VHdDV5dwZ2Bscc",
  "key40": "29HijRKyQzJtW4SU4mCXmYbQthSQeVuJe1XGdxCqCFxts6Y4FYceaFCz8zAi4xbSkbqeTu4hLyLfiD9a67Q7Ash7",
  "key41": "DsEdjeUFEdtHzXQACXnwuGeAcWEXTLqSKDj5QMo5iwzMTXB63cY6t7wcWbGVjQWXN1XVWR7jYS7UXxUa7zhUE64",
  "key42": "3wfw1EbJ9TuVayGXRW9ZgDdX3kTEAhXBUXRDh8ufkiSoUU4YzUxFwedURvHeWpbjvZEDkA9XEw4AnqcrGgdkCLjS",
  "key43": "5TiJcURGtKfPcvSf6oZzkaSV5WsRaV66EomJhCbykPyAxPhXkK3dUJBLymoMsAbCYPJhBou8jSjnZ3GviCnQsa9k",
  "key44": "oRnMxw4QiadSFAuEYL5mdw5TLTjkeYHPSzptHc5gCkXVYCoDvF8GFzP2pYHuDTUFXuX2r2AmXHagTgPZFHuqvJ3",
  "key45": "4vwJw1oxWmUYzTpM2t8GvD6jmGckt4Zxof3DmWLog66rXKjRfqxm6Y9tWJvufLeZjS1MdMn4ANQCLMd41oukeSjh",
  "key46": "PSGgD3ZJbkisx31ckPQW2NHzDdw6dyZ6WZQ4rscM4stDxPWURV1TjmY2SVpMCFn3SNfKqk4NixY1u9S8ecNcS2d",
  "key47": "54dN88qX9tJFsU7aeDAaH8QiAL5tudActoAoyRL9CTQDww5Z4MVrjMsahcd5xxUL3JAwmVQENGbxjEHNLiEicb4a",
  "key48": "YRPE9M3QB9g8qbtSEVT9M8Ur5Uh8hyjoDi2RzGpJ5iitqtPodteZgNeQAi7LE58Rr8mN4MtuYQqynLeAeAFwife",
  "key49": "5Gr2TBX4VUsPW58aG2Y7KuAq1RXLZXzRqv9d5JhMQPQKufDnpg2Vaji28BVB1dX1otvZHbLut1zbjPw7Pf4E4yCe"
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
