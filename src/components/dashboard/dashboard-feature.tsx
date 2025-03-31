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
    "4BjA2dADSv7j8QG7BH36pZPxMjvjB24HnjEeU2FDdZ2xNzuNEUu9ni1hv5shoJ5VTCjp7Lws3qq6mXjjqZFMNdop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qsGERpvcBTg3yBirxdA3qT23o57kj6VbqHAyChjPHtAPW3nkuC9wTsdJjvi8Cx2h3PGh1LTcN9cbbf7MYNq7fZd",
  "key1": "4e9pjFPWCbRbShirG98XFMNSBZMaMQYhR8PXqDdNEjVST2C7iYbBGgftwaVQnXwioEN5Btne5P1UfnTNX5LJXbS1",
  "key2": "5PzmrmwNbbwg1MFQ8KBMLtjqvXmhcrbzbYpbPGe2ouCB2jgfqyx6zqcozBUj8T6nzcsj5MaWkyBTmELkcjiD9zCG",
  "key3": "2P5RejLxcPrGt2ALT7FzpqhLKvdCFYiAHbaU2oTJVSGhtNd1W9ZK5YHwaLripyoQGykuCuLnWnCRshpwzaq2Ji7Y",
  "key4": "dqcwiVES1qcjmqoo6du5EngXKMmG9RE9z5ktqxkSMGixL6Xm6NuPt45vK1qEHPBQkD7HmK361K7Cayotco93mwp",
  "key5": "3eTdE89CXLmbon6ZUhPuAzf2b6KtNbMeAdqLtuCfQJnjBPECCAjPSRdXoLbZBcpXuTEhBqW2ryzMvSJVcgKsvAAx",
  "key6": "3UaZ3J12pNDsybVMeEHZzqnqk88nDp6qc4XXK7Q3LJd7ohjzmNefSZHkpBBkL6kCFnSWDjL9rEQ4H67vQTLUdWdS",
  "key7": "ZKJ91e7oniDSJfVArvaS7x96UULtN5cWcAkPisMF1e72qXPMpmosSuTuGWegivZ7yKjT32w1JUQTFLJtwRJeUPK",
  "key8": "KjGEMSVEfgBmkMoh2dWPy4Txz6Ln1RT7nC8jgkCgXpSwc17pGyuwYxpgF2ByaKSi5NnaCucgG9ajsNhYsoecHCx",
  "key9": "rXwczpe9VfbP3fN612QKwDN796JKgeeSLJ9fEkQxVxQt2JsQhuW7JBR5S32uBPd9ok8tszSiCnVw36aPTC7pByk",
  "key10": "3fvxxCaVhpHJrGUZPxk3vjHpBnoN2wiqZCY4sSKsX9ASzCcm1aHRE6cAk77YbPsFGZMy7YgDd2oSY8wJbpugHD8o",
  "key11": "4gm2oPGEDBudwb4VNXy385xVY8ocDWKQ6FLmcE8YmMnazwCGp72obgMU84FJPSekmFVsWQwDARXbU2hWbvQAiHso",
  "key12": "AFkXpM8ySuQFEcd9Q3mSn8rg9AqE7SVhzTQZBDmDsqoo9LR2QYePsn3hJ3fEFfaLEnq4zkbmy1jfy4XGz2BnBQn",
  "key13": "2gnH5UvAKGg9r9qgpNZ7pStBwPBcoLcWKbZbTfpz2aCf1nTo9USjTCGmKsbsPsga9DfbvQPBiDe8MbEVY5XFpfuj",
  "key14": "5wEpyU88fizWvqZFQ9vbtSvXvuJ3ziWNLaeda4keVsZshXxXusD5iJ8BvmsbA1mYirQx4aU5R4W1Zudsv335tfF3",
  "key15": "NcMsLJiLinuF6AG8yxNhn91T9magDjGWQd4dEzF8dVbvTGFVuVuGnHQTf3G1QUMWK7SwRXyf34Xcarhp6NAUZtT",
  "key16": "3pcoE7D6Q6EWY4mSrH7xkq6QQRE9B98wRNiw3hgZCMicNrk3iE2154btiS1XicmrdBKLBhebMWdxCfp6LKZX1iNQ",
  "key17": "55PBAh8P4fz7CpJoKPhNCGQtcWFnPMvmunjWZeo3fe95bEyczrSjAu32oErBa8L6C4MxGZQ6o3aXxKyndJ6o9Zof",
  "key18": "3uQ3xAc8JYxWorHtRCzwNXFHoeVR5wYiAJKaF8YcgSXNUMzMTKxPyAYnTnWkxa1xEbKNjN4oVdSrXC9FqMghQdeF",
  "key19": "2yqvJaDmcwL6ZiVrcFhGBFxeZHozLa9FPW2rFaY2zP48n3QR1jd76xNC28vesW2HpFtRSfHxp1r13L2RRhcWFCwK",
  "key20": "4P5gCVNVbivjjWqg9CcKG8HWVRfSjkrpiko7L6BZzukAJZgQXK4BLjFyQ7T7a4rz8qqtk5PU6QU4cJ1MLN74Zmr5",
  "key21": "66bpuhx5oKAZzrrUgeddAefSfNVrp2WNHDXSTNNnir31LJp4eKF7yGekfuMswu1whNhk78H3nVLZJzbqGe8bgr5f",
  "key22": "kXWgrxV4YvpoNqcgEBHRhpmWo1eVFmrJRw29DwJcTL4bM6huU5sYrTsqXCAYeAcPg8R28q5DcjK3GbjmheZS918",
  "key23": "4UF6Rpa1bjr8USbkhDTWVufkGqeqgk2T4UNEXvjgsaPMiu4tCrhsKVCzUSRqsBHczsUUhHaKTWNVbXoHTzCiZTRy",
  "key24": "4Yy4GNa76dKcQQj8ZT35NzUwZfau6FoW8ceQFLGhrtbUWpXoqnAr3YJhAjV3yXHbsS9GtFsWG2VkwW8zQHZuw6Hj",
  "key25": "5kVLA6vWNAR4PnufpWs8PbPYSxnNpf1wnPoQwVGQRpQhgWtonZPCvzb27UNVtxyThsBv6iDpnGjjbcfXxfa87UMt",
  "key26": "5PH6n1pEhZnm3SFiQcQ2Af8W4hq9GsGrCKxoYq6pRFBHBXKBPJksP6ZX5XJNhiEcxMCmJ9J19FiEeCf3VGa8Ws2v",
  "key27": "5AHfaAp28RoCyTh8ieX1PtHQdffcxZPeaBju4zD4eVhDyRSGzG3YVPe7rFy7ZkFiM2us4tZqytEHtBA7CbJSwyeQ",
  "key28": "32f3vkkcwAqu9aGApnpLJbkWQy5ZB5Qe6FNzvquBHu9Da7Y6anbacNVqUhQJkiUXJu2ZVbZFyxaUpR4VNSw13xQG",
  "key29": "4NBusN5ZBNwyug9o3D4to1uaSgBH7phYrPAPfSMuiMr8boz6qEAhEsrrto6vjU2GGsDW1bMKpWrEmCZFHF6nJQGd",
  "key30": "4RKsxLURBE368FmdT4xxhxXtTseFf1mB62Cg9wyQF3j7A9heYS5HNQ6XCqzqDiUHAABM6n1GQuKmkrXsQ2MzUK3k",
  "key31": "5d635TB4QTweX7EKrmux4TBpWeyvzEyz5NJoa75nR2z4GwGQNdPvcKCaMorxRWnBTBRHQDJYt7qXxxZ6Nra2bAQD",
  "key32": "28qtbdS2KsHMuZeQPN1zVP9oCtt5UfT9ByXiWFezZ4ZC4HFfwBrwxR2VdM3ag7wzopYhfKVxWKF4S4moMEC85ffC",
  "key33": "3x1dm6p2awQ73Rw6apEvtyuxW2DZxWZCybcrrPaCTGWzurfk8oxzYXTsny1tZUWUDLLb21LhqJWjNVvmBvPHLhbT",
  "key34": "2Sit9bbvSpMm19MBosFazqiXcESJZVcxyRSfBpictwyeUwRhmGsciE3UWuXM1QAgost7a3Q7E4fgU7jjigzS4h38",
  "key35": "43R7Ny1fyPHGgkTX2H7guf2hAaFbFEacCYRyS2DmXJV47Z8qCa2sDWSXrXWLuKp618f7QYRbFFjC72N6uaJjTxhX",
  "key36": "wPmmwPC9G8BJFeJ37bvv4hJPAKCYpjZ1Uo4x7u7doxEkJu84UThv4iSGYUcurepoZiQ4yCWk7t74GCCsKSqwmye",
  "key37": "28NzbrzBA5SkRqWfB6FLBp4FxQYhfFD87iSfvatBL2WaxUuGFma8YZEby69eiSwiJ3SRrZzYqsTms8QK6BKHnT4V",
  "key38": "5TU7iRB3TRHBfD4WnxcAyVw13PuByTUT6Ru5wU3ehtwBjs8qWLEcstuWCH8tm1ZxjFgE3SaPQfMXYR7rdSXDu6sJ",
  "key39": "2L9YM5s1HJtnt6SzT8YC6yXekHPJd3o52gvvVE4d1Q5bix3mVhw2Bf9oXvg1B2kDagGKTLk3uw2p5M9xQ4S9XQ4Y",
  "key40": "64hyPNFMVrbP4vL5MCBLToAGRf8Mx2oFxomgWURLz5b4w2T93SCDLLi6VGLp2Cdew3ToyHn5AW17DaA4R1pRiUej",
  "key41": "5Bv69KdSrr34V7AoK3YY43y21PGgjfRkjgjbkjFc4sEWwF1aSF45qwUKm1PCojd1XULk3qyZSCJEDmSiR99F8v5q",
  "key42": "4i7yX7vuM4oAZ3un3nBxpckxkcAG85AbJxSiRxEGehhUBFTofHh59SLZNoBotsdGMbyRwtfNjMVDLMRduPrSpVKY",
  "key43": "5hgQx7zpLo5WkBoTmcSaHGw3miqndrWjWdgzvEV37JacMUiGEeZoR9kDmezqTpRGdSWCYKJert6SANJwpSXefpKs",
  "key44": "58AiSZK4uPdMtK8u4zt296PBPEFYMyiLzRSXwz1ombUQhACMjqY2sKBpcCNd8iYFkRGH1C9eoXJ8cWwRM78MrPhn",
  "key45": "64YdM3qZmztzNXWJdZDTEnpPRFY9aeeEChjHAEHHnWC7X5UVufyqZfePbdsquGXVscnyStp5Em5bArS7sFnsqXpK",
  "key46": "QhnKMBbSosAHZYLtRJVwnvvMYgN2tryQbFPyBamPhVa8TSQ9A3KU7LSX5PS3CYEav1gSteiajDHbjhrdnFCEGae",
  "key47": "5UmxWxhEzz7NhSmrFjudawqcCA4ransa7ytjhhhNkXdiwXrSe1BQDqGbKFzruY7pzQABGeZWG4i7qf3vff3XRBSP",
  "key48": "2U9KUA7Ft2C2TgRhzzxg3PCGYfeUSGWAYCgpq1Wj3HCLC5vApiTnsc8211rMDLj8rwyjWXe7Y4ZqPA3w3ukN1YiH",
  "key49": "43aqbYgtKdgzWzmNxxKANWXC7FrRDJNXafPwGXFXGLqpSmDyAEJmfWrxPd1qVbmNk9uPctstavCwuL9AjntawY1W"
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
