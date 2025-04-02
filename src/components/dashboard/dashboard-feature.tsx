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
    "45QqwAXP6rihZwaqRyBVNMCopPkCxMUrLcWUX4SQnvoZGkdQyxY1YWCvUPu7wHW2FmEfKnMjHGmCkDBXGEEz4X3Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vHhhhLZ1H3QCiSit22BHW3ekYVrai7M4G8xP1mUCS3nLNYKLSobSzwWDfJLKeJBbZGSTYYUyj4fuCmqvuFiMeJg",
  "key1": "2K2m33gooiqKx8sVz2cyzHfF9smPNaJ3nqtrWDEei7ukyWxFT3wV333AVVr1QMAmqABzyEXhHk9ktJVSoMqjvMB",
  "key2": "4gm1YHr4C4DrVeR2mwpGD4y4ChvJj2xgX9mFKE6ZKMSnbmdJ2jM2NXzkhL4d4QUx3AHwHpAF7cRqS3GeHocgBKCU",
  "key3": "3dEVGJDUF4azHNuiX5sLnFs2hSsbLoTRQMKaV4yFDhLgWqrLSzuCXf6mta7UugqfFAf64GpixjBF9DaQPXjdPMKw",
  "key4": "f8Ht2NwEuK9SJmuPDrwNk2T31tbFvFYsk75sv3LXAYsKYFNh5mMzBisWeaKC2ubtaodu7jPZo71gGLJZSs2RKLC",
  "key5": "3khT3ofNxchXnxZC9ZaMgkiDZxMRpczSzms9nk1aosBGhT8AuapeVrZyouT5j9KJsWC8oTZfsWNGkPfukrQ3ewqm",
  "key6": "5ZMXFaJfpBDxiRniGvpA8ZR5rBnvUkCCyaxo6cVsa6d8SBf3HpkSuDqXbKpF3rVWyjew8vZHk4ZkUhqPKRecv4LN",
  "key7": "2Gy3ToL6BjDysBeiuCTSDPZSEecGc3MbJbRV4tGokgP6D8bUd6hQqGCYbXfHhxh21hHNyV6XzXBGuYXuSWj2CXUH",
  "key8": "CpsvCHD8F8ruwR9ys396q684taLufVADDFWc3bFTfuuUC5coXLyABAAmHoAuq74aWLMTNLWisVqP7awSWsXFzUo",
  "key9": "51WFFW5yLQPeGLtCQXcMbrtFcjpovofDGLLYnBn9FxmQSQnVKPcpz1LMZFmZvDegqLaxp9ujnMD1QkPSqUKdaJ5Y",
  "key10": "44zBFkDfXSH5CBPpS44roVS6F8uWdrkj8BCXfgYcDeybwnmJ8RKuBfL9cAe3EGsZjN8CoetY118ZWMNJqTkFGRPD",
  "key11": "64Vbs7jtE1EMqPC3i42DK3bMBdwFWUdZ3GS8NEjPdFbzBWTPi2cSfUrkdu3pGhN6EcbVX7JCYyWQirMKemDVuqHX",
  "key12": "4Mm37V6eFE9Py1MGLeUP6iawSPxCEZTtVKLFh3BKdJc1UcoDtQRS7J59njaaQvK1uET2LrDNRbogNcDo2otyAq7o",
  "key13": "4fayQQyBfjfyKCWLTyJS84zkH2bLF4UeTtEtVfUPWieYZEHagTartqeqc5mARwKs9S4fKH13H8CBv9D2NKymXj1w",
  "key14": "42Rsr4f1x4KpeCLAjs3ZoCuG4LYBcCMUzU4ofMvLv9vy1vMg7X8obCWFuoGHyPFu3jgeYCx2u1RKxFaNbfNZW5nh",
  "key15": "ZY47TT2rEgZHCVXtFBkq4mUQL3YvjJekcq2qA9pi5AtFrmY9Pgs48DnJ221MajCBAMaNf3L6p5shQ5LMdsJrvQt",
  "key16": "2zGDDJurvrQGDdhYKCbX5BTeUidVxurYQqfPoTtNRmPkq6m98Qa2ZX4PUvfSwfSd5mzzhGySVt1eMtkzGvGsCJME",
  "key17": "TJqdjMbZBkp8oDaCZMAEN8C4qo5M77qr5rDYMmpKPG77dUchmxMiuvVeoxNY2HnR7TmX4aBbiWFMfEkNaVH3GMy",
  "key18": "4siJcM87Qctyd1vwuGkS6TeM3ncqSAmfMAKQt1Nk5L1FhejVfnsyxSAoZLf3nGmEuGh6V9o6E25xmvqEuz3VqYM8",
  "key19": "4YRJDJKpm3Py7UVR3ysKA2PdGU2QH41qiD6u1bZDyZgpQnQrVYk4Wzt9kMfpP3RtNrjsntu2jaz9zSYDPHbJNBRB",
  "key20": "2aCfgbjix2UjqNgZVAgu3GCFQvTmzKeWqHQknMv53E6gwwdmjd7tozQFUaYFTt8EpnjWAjTMuA8StH1CsEniYmMr",
  "key21": "4CsQ9ygmMrf9bJVAyEEhCjPHLYaozcQZXBzcvmMwq9btYmSxtnRL5i8U94Kj9WipZPdHgqUDEVbV976vZm6SRSts",
  "key22": "so8JeuHCGZGxKNqQrNYrRM9x7TMsyq3gVtHUwvDSMMuF3cEhHm8HcHg2UTimx4ZB8BUp4ve7crB681YzCCXQFPg",
  "key23": "51j1cJnTz9C753xAEqUywBC75gG23ShKkFdfiGAu3k6rMSG7nRSoBjiSJcJdbC26KhrzeiDY86bcGUKPBxf13Zrc",
  "key24": "KtKYruzJqiP5WK8Hhm5bVJNqzDwbVvXd9bYCcrTAbKESpqdszRsYqCXQy7sKYtms6xwYRZfDjjpzMwTaZRkdALH",
  "key25": "4NKZxaiUpA4eQJRczQHjHnxExpexDYUJz9Qo2gfauby3qDCqzPVTN61KtHMR4ayUQNgQQ7wHJ15V8yvCcPnYUWHi",
  "key26": "4sobbEkbzF8MivQV4qSFq66PTcTbkHpj1FZHExPFYJz7yNLQ9VzbkAEkmzt5shP7GZkqPzUytvdU1TDMXUV72s4R",
  "key27": "3o32H9EFatzkvyT72zRk6kV34ggmSWHWDDs8P2mq4ZugsdFj9A5s1Y3BFpndigejVe34c1hGgs6g9CMaGQmq1iox",
  "key28": "3w1XyqjEZuo88cLq1MCPV4aqrYQfQqKhz3RUM1rzgzoXLrhYiaj8kM8tS9QM1CCaAC77e7SvqwmCBStij5dLxJuF",
  "key29": "5TxTJ6CCkQzBDE5ecGDN6yHSHBUSPdJqLT9pYi2SfpbMMbPMGpUirQwNCUHbEscZXPP3PiUGBSXX3ZLf7TpvhnS2",
  "key30": "2XfBXhyLGNyonvSZS7HgSfPEFFjY5xUUFuDZdSwb9fUbfFi2nJ3BdNhciSkdKFnQTct3ydp7vDWmgqUKiEKo8fzd",
  "key31": "2aRkxr78eW6U1Y6uTcQoAhEPnFr7k9BVAggHpEa7REe2VxJwLoJLFtZmUC5qr8bF5dF6Z8qp4M6UoviHSWxd16gt",
  "key32": "2QZamBbzGPipymQwczJNRGZdBWNmMoRC3KDefN1S9JGZufUYQufA59kMd131z2cBghmvvNNtfQUd5XwkQ1u8Ek2Y",
  "key33": "3t1ZPn18k62Zq9HH9t9seA17183RThQbnZBQNZwrVviZ8yDj5wjzp6vC79eYS4AN2QoeUGiPQuKUaTHNDc8sebP5",
  "key34": "4P9HoQcZryZ6fh5oTZXf2f5szj3QuSEaaX1yr6D4Ah6c4t4LQ8JuziqhCsQe44C8CK8noJaVYErP7hMVUrjU2NfX",
  "key35": "4twwiDmuJWThSojKN3YMmSxoQyNZBFsSqZKQwyxPVsPy9KVJavnjh3odrmC5oLTMo1UG437cqXQnj18UuHmgDQWv",
  "key36": "55VaKVd3g5Uem1reSK1wSCHcydUnfuNHGR5NopPPY8oauaUVmZ3sPeXzPEBWGjrFTUsZ37vX7sTddvYkcW6JqDKJ",
  "key37": "2rCxi6GHkrcpTWLhT9GaUDTaMRw52wkTffqAZkw1dQZs4aRmCbrLwyg4UAenDdsnxYL4hcAZtqtuwiDbjXSQJrxM",
  "key38": "4nTQ89MnNaLECRYoLd7Mjf9rmVb1ffTttphEwFnkdYMf1JfyBPPtPPakrr7RdMsXpLmwA4CcTZ84vXirFqM5Ywv1",
  "key39": "2bAgSKkEiaUXH77s3htQpQZsviwDz6rRyMtidocYKondYrH3XugDHS3CFnJ52p2Thk1kngrSmpdDEcYvUr7EsZ2h",
  "key40": "4SwRr9feNvXy5PqExU8EmhCkQGvjZrrcCYvjhavHVxzCfVwZcXz1DB9wjpM5N5YbpVKQAYPeub5keAER6T8jZV4x",
  "key41": "2E4qL3W2mx2NMMgE5PEGCFJRmtuzq7HPAKqcCbPAbdLJGzcZnndaJ1aLJdhygoD48ZziPGKbvqomojUJSAFWFcbA",
  "key42": "2F1PdUFXpBUYGRXia3TxqJ2WacpxiVydX6jSRxc2H3uFponHQY8efty9QE1dtmTfFYpUxAhoUYbzzPqpnZuu4FP1",
  "key43": "5dyKFMgfHAHTsbWJjc5JGQ7SKZ5Ja6EByzsuWevMJwGJWJwDgvSdduGm8o61X2xkvZJpZYuPzdijmWuPB3dzRwXn",
  "key44": "5N4nptoHFhwNm818AqZ1vgG1qxX9zpL1WFyq9fDyeFXcgvMziwGN222WFPpE7c3EU5QGWgh21gRJe8MUxkW5iB5v",
  "key45": "5jLjcaA2LWZQLp6LbNu24kkEn6VRn13qGKAsC25noWsRaQWKQ4N36jiEK6dCHxfY7qJtUyHSd2r68DvKESpkErra",
  "key46": "qhkNM9W6HmntWPns6E5pyTwCxPA8qXV8d97RFLrRWVBWHnKidHobaTNk3dxbsLfudcTxxSvUpqsLntFScn9hDWe",
  "key47": "4ZNXH76K8zj3RJw3pyKwDKRviBpYub2tc59envzJKhVJ9kR1d2itrGqe7gS4AWNcPpAcqZTC9ybWt4SssbkjxgaV"
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
