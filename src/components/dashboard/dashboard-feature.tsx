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
    "5KaUjDQbXq2vCBx7n7XvMYB5aQEW3nK2xfabQ133syZJWabxX58k1EdnNmEcABwYwFQSZi3Nhj9HXWrbLSVHFZD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66NVwosU3zXpPuR2526RPVSXLbXAytADasu6jhXeE53J1qfY36kJ6JnNY569CvNDYFh92ihYA8nV32f6JtRZR4R4",
  "key1": "4f8GLENfRJruJdB3WaToNRTdYMCizyYx8KL1dhU31457dYPwsvBtK8Yzoqkw6k6sTMa6V3Dqp4pfGDtGm4oQEH35",
  "key2": "3B2Eb9ZqbexYHNnvPgpszm3zsbPecAFQSK2vGf7vyBpEwhtmeXvX9xgGtRZzDuNxhXKzFFTupky2fE9DKLBwXBqD",
  "key3": "3gfH3CRTF1obyabPbzxyyxgQ8AY9sGsAEnLLRyDUUmhvPmrhUKT3vCETtfp38RwmVJc9QMWusCaN8rps5jWHcrKo",
  "key4": "2NW2Yd1sG3FFGKA9oXBfHAyCGuRxcAimyGqLiX7anEsyhqpUk9nPFXT3Pr4zd7Le2RonDMW6TCECHcLAVP7aepTE",
  "key5": "r9YtbFMsfjHwzeTpnFGNuE1ibTp1QKh6S5T7BY2XkZt6cLqUafRjPVW8D7PsEiqGE9ck3kSUpGuMcfvphBx2ZqL",
  "key6": "4WcjmC8twnnDQdoBxnpkFjpWmBfBSg3cZwGk2mi5LCPEVUZL2q6TfocozLekQJ6ucnpkAazXVU7NtsVT8LKrT4iV",
  "key7": "3FZpKFRfiHNYjqmo4RmVHgHAyfDdc5NuybtZVa7Bk6rNQApJQGeh3AfZ56NJuRPoeyWKjq2Kc4ukaS9BD8kVPAhr",
  "key8": "3PytDA93ZVaBBvyqqYT7xjHafBqZa5qMcYthdFK9hKXDHoUgMtEptKxb4CyB4EdoMTkSePDKDpE1rp7k5bqxdkJv",
  "key9": "3Rts1Q9SNa7adp32P9b2rXjSZUo46QenrJW9W5q3Jj6RFBXH9Q73nQ67nnXqeVkMixRwcETUbDL6367CNeDnLG5P",
  "key10": "2JqqbCLCZkHcUS665vd3bh9vDZUTB2YC5tfXFEoNseaShUdELwKP62zFfuutXWZgeca1m6BP56VZbd4ZAPEqYK54",
  "key11": "5T9JrUL3MSx5BewxQDFRTG2pdKLYohwW4mX2HzfFAf9PuVXj7J9EEmjF6NFRPbZtTNs9xXoL12wjca4YuuBwPVwB",
  "key12": "5wuUuKhRJ2yu5LEGu3od3UsMbxu1MQuZ3vh1PCJb96snXm8bWYdaG9oeKN73JDW5ZWYA4TTrCLxGiSLh5GoufovP",
  "key13": "3LSLeTH1qAkQ7tKvnQctktE3EGXNEtyQGbmUjqbkxdazyHRx3NxRRWMrNQA6fMuv5TTgtw9Xw69Zkp6BwcobCZ5k",
  "key14": "3aVFi2tEs1Aczr8cY5wNv8tRVSLFLLk6CMa1V9BEs88PLWx5tVRf1H52m2RagTJZ14uCKBquRkXnyx9X49Kb3mde",
  "key15": "4nutQ1yRx9TMr4fGRxMrppWbX3ijNHmGWTgZNXxckmTsocAnMV5x6GVu2QJ8anqD5wQxHrZ5f6PyYS1q6zTFVHLL",
  "key16": "PRSZiiWR7C1yjR3evvvGdRZze7qhzoCNtfYKu7DoKVJjA7yveMsB8tkTt8aS74PEohD2vWJt4NMCHgk9tq9DhLE",
  "key17": "47iLDBUc12iJYJgbxZstHqzXxsxp4n66beVUiTFX8aSc3RacrHMyr8mc5KQsWe474yqaPW4XsbaKbBprj3FdG1YB",
  "key18": "4a2YMz9YfDw6s2evUiYKc2sHKb2quQxtsAnvmCaMmQkKDQJHDd8v4Jxsvu5Lk5WL8KHvt4stLzexUgou9g1C554m",
  "key19": "3vX5aA1pYpUPEkXfMkCHst7ArUL8nXNzXyMS29p9xbb8YR8HKp3uJLHtBQnzbphYRj8T7eACeQj8iwTfrTo7M3AC",
  "key20": "4oGCXJAMkWUxudB11Lh72H85wJdwGvj4cZk63EaLLyYWauSvPJu45nKg2Jj7G2UHm5udzSabnCvGVCsE4GZXkCBp",
  "key21": "62FexbswXSiAoTCdpANCnnTgGq1bXm2SrB8EzMGT2rjoLCEZnPdLZCmKSrrZnPQHFqVms1NFkMwY1JTYq4rtFwo8",
  "key22": "4uceP1dFyDPM1pj8nUfwH4UqBopFoXkhDwTLd2w46mMjArMRY5bt6rFNU7PEjMqH7eNvxSDF99XMdFsGWfsD875S",
  "key23": "3TLLq7NxrK6U1waz33wgzpuTUK4NQ9EsSGL6tzcWrKschdaLGQJadnmw5qUnaTxnwhpTj8ZT4EtCKvhnskxYcicN",
  "key24": "m966hasarmNbtbNUoQA751MKsqV9VjsY3grnuaf2QTqKRBS5BT9mhLCSfv6bZ3rfCTDqZfxmHF44C4xm15givBN",
  "key25": "35Rr5pW3roE1Ty4jznTArRDDixaL9oWT4GoXMZ1JxjqcNZw39Gwgf7L74ejujRZdxLN3SEbmrkf18hYk5NJZ5Ddi",
  "key26": "57yUkx5UdcqnpdpJ4ezo6Vc6J4gcajn6fGABtuyxbw3XtyZN6wikFbfDNr1maRSa6g7fMSb1REeB5s49VenSv53x",
  "key27": "qwDSPmA9k8F4RKmTqmuVNwaBFwHd4WDEvqsY2AynRFSCBysxjAaNzpk1CSHpVKkVXCy3U7LWDD2VRYtokqMPZ5y",
  "key28": "2Wdz11Q7ZEXUqjAyizzzjHn3dzWzgWDeYXVZHRtF8ms2njuDCRDi6iiXj654poK6So5K729H9qjrNgYZabPpc9Ri",
  "key29": "4eNfkfHmGUkxkncHFn29VTraBjiE2fmPpyTzbdB5Jjd1yMnjPpjCQ1B3ADUEUtNG9m26gVLGBibm1K99eY2KHZuA",
  "key30": "9ecaTfdtcf1YYTUxmbVsozfQuZA3tADWmUzpidTYWNqr56HegCagVhpTAdR9sM6aRYCXJHsHX1wrFa4vkWnugRc",
  "key31": "XtXrj9XXmbmLkgQfkjTJimqnrAEFH1BcghKp8gc8e1V9j8BEbUaKLtBAxVD52KSUvwcbtbJnQXdJnEXWP7Xsfnd",
  "key32": "2uY4DoNhQmvJE9wz17JZ7uPgbojtDQK66VbuJGpsft1SQzSAXoQx6jPMvbQqDGfJDb2qdfDcZmrg2CKXw88zFYsJ",
  "key33": "7TF8DjvjJ8Sm6WPNMsdeV5jejb22TQPWC2dQJ1fKYrRsrAwg1hTLLZiD6nZackXb6HsgRjDWyiYHw52FXa1BhFY",
  "key34": "381JSBKNsEifQHzuoXQTpibZAnavUcSz3mHHkpvet4V4KcWFpu2yQVhwkS5Qh5gU7E3cMxx2GAE5ZhvV6HTV1mTQ",
  "key35": "2qi31MPijmQD96UtwaSVewYzrKZSSWrkSkDGYJDvJRHar16UnrE8dC7fUbHmwFv5eJWUwH3dUpMa1xWbmeVABCu",
  "key36": "6399R266WNwappHexqZNeRt1nAHXrwAF72Wh2Lz9Qq7SFfAUsALfPrc3tFMukPaNpgqAXHLXiygDTZu7iUS9qPqb",
  "key37": "2PC76NDZEW5CGGt24gweu7DnHWNjbCssiifTL34uy1sZxW4P132tae74ewKfF6hn7Qy94pU4QDpcsphJP1scFMPT",
  "key38": "3HAGLnrpqpVxBUAxjcMPd5qyNiSXMNpdjXxjwhFH254hkdNsZvphFGsQ45GzNAX1G8nDBTWMRaxtgrccVCTA2k6N",
  "key39": "5XxHbJvs94wfiQzcVpGDT3e584QfrfG48MUAQHi1MQLuiUsNfoUw5DuUjobj46h4yxa1c2brWwRMDB19n5vBbkXk",
  "key40": "5xNbLQ9vGQEtEe8zwQxswXtstxSVh8AgYpdZBBWgjJh4i5fad1kXCVSc8uoLj6pBeJQBruqSXdBdWeQZ1LopbsJQ",
  "key41": "64q22fz4jUb97APCHSTJakAHUKF81Zv4L54HPLaavYpzdgdK9LwEKQSmjVeRGKZFkd2KsjDtGFzsvKrdA2W2NpFA",
  "key42": "2CAyfM8sZuj9craGPCFi73DbauvSB69RiqCHdkmLqhQGHqhYLnAJx8tsdYUmK5YVthgGGaR1AMJyAk85qdQSWyCp",
  "key43": "5r7UTBHts1AvFMWhYnm1bJA5beqc2mGFWdow1z3x3h63d745iRCSQNKam2kCFYfBpPVkFNdJEr3ipb11NMVQhG4s",
  "key44": "dFR2JHfReok1noiRZxbPw6ng2b8uYkS7qLoiNFsqFAfvckKjiV6kupM1iGpRk2AdeJCqCSyz12XSCtCbXBkWZRJ",
  "key45": "5dpDkRCArc8rdbRU214RTihjhiSBddyVyNfXiTPRrQdXKqQanq2NYX9v22hF2qDUFoxbMY4TfPjKYRdsbuiNKXQv",
  "key46": "5weBe5x37waRdjXuutR8AC1Bqqc6RMGjQkArhsbKP2quck5Lg46mAJgNC1GDGgZhSBUhaYJspvc4LrW7UoNWKxRs"
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
