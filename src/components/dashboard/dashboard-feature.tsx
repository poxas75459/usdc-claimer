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
    "HT68P3S8WiBR31BAyCSCQ9LJLPwEfPN8td4Jm8VZP8FB8q6Wkknyz8FEfVtKnad7nw8het49E4bK6ZTEvbhaZgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ucQXyQ8vmGhtj9ybGw9dadmKi24He1agqUCsqMKoeJFJH4MVBNsdHKNXfPyyVeAi7fEBzMaFSErZQCHL7bkirEM",
  "key1": "2uwMVEdL5Fsqkq4opKrmWBCbYKc2FzgSLzrMz8SKE3CdpTGy9W1axGF5pkjkQMkzjYNhXjBtgDYCcfxoqeBdVSXp",
  "key2": "MUnzwzhGFgTEARbqCvM57gN6ZzkJFx4Jyke3Vu7ECPZWwHMRU7dt1ZMJU8dyqXkApQS51FetY129HSJMnhniZts",
  "key3": "388o5rVX44WrAShWAACKs1gukNgq9oaiTxrvAweDVdUTmL31FBHzYCUYMXw2L81KVNczJuoJ4d7T5gsEoe8Zmh9M",
  "key4": "w26EhK69rMqyt1L26yErUpS7isGoXpq8b7Kz2SghFB8yCC8muuMJg5PkeKR52CzJvC5gSghTEw3Z8nRdBXCnDUw",
  "key5": "xZ6Py4ni86rd9EVhPyEeFWoXDSVktvCmN9Bq9LpuQLJVeP7SytUGBZEWTjLQ4GbkVRAPGc2P5cxH6grkDZQKxYn",
  "key6": "2MfijutmwEWMr13kTPtmfqNkgVUiz19GePCWzCJQnPrnWVbscokw25kq1US4SGcHcD4Mm3h3mMRdVEKqAZeC5orX",
  "key7": "2fGvL6a41hzcsbkUvYBzzMnMqVJSysW2Gx8E8nkSPbeVmD3jyNLjFs7Vd7uNzXKiRZewBeAdgwCY5v18aQiDPk9h",
  "key8": "4M2QWpQbTNAVbdYC2U5tth4BQpLtJyXTSsGX8aCqRk9nkeqU1FzeG8NKUwWZea1pvf2Ra39eVHPV5VkSKqS24DkG",
  "key9": "65r4FdL9P1W4WaXbEbbbGT3kHymFmhrEZjyKQMvQXouRvo6GRPtvtw6W4t3TQk2i2Ge9wBVF2JPQkLubZeaKewip",
  "key10": "3JYSfw5frHePnbbDnFdvWq94FqaN3zhCntjiHp6PDDeULDa2Lo9BjDEMo9REqsVWTeBTex5VWPQgHahrBrLgRdXw",
  "key11": "3pdgvVWmp1sy21DRfMyD7QuHFVVEoKXqxcQGZqbSKWwxStZJhbCmAeKa9tpY8zporwz422MZWv6Ej5oSJp191MpN",
  "key12": "qA6pP4Duh4LbU2HrGagC85Vw7NcAdJd6jfum48m2kUUeZRGMLRp55K2Rkw5Nvv3RZKwBEungMi6GkMEsVovMBqb",
  "key13": "UYdzzw5sv28qdpVhKKeQgp4LNEDbPTWBeP8dKs7H7D4s59mV2dE23hVTeKojVNiPLbViDdPC8q4njVvrhrA2z82",
  "key14": "38kfK1fvyDTLSuPoAb98jibPJTU9rvQsuTN4tQF5XU7bwV4GssdRwXC5d5Bxq8mQTux5P3j9FMdHiShBuCMrXreu",
  "key15": "V9cidRt7tBvHU9WNU4TNTHLe6hjhK7QXg3JGLUJnhRfjYDvD9J3zCu1x45VPfTT9hvty3iuKFKuHvAc3g5q249P",
  "key16": "3EhcaeZcCn43fGnZeDGhEr3FLjNzia3xFuVFUfxZvWuXutpJHq3ugc9J2VrJG8xgczSK5TDcdcjokvR48AGD7nSk",
  "key17": "VKRw4HASvzz5s8Ugw7EynuPk3qCyhPDa2sgMWejonFevgVkDGrMPH7bUdRSLpBib2EUzbMh3DdtTa8tLcq2WbLA",
  "key18": "5qEHKVtkhF1gTv4U24ZHT4vCWqVjg8MGUuyAowLWhUQTsHkgBgsoCAvtdSyTR8Je4QHUaonMCoXepSFRpXyFEsGs",
  "key19": "43G9RCc3721gSzfZPfYrG6kGVQpR7g6Bfk8kFkPgySs1eEYJXGnwJamBFcfBeudn2kiDVbsutfVP32PzoxHjpJf7",
  "key20": "3ENbkWc4gZq1p65aHj4RbfmiGc95q8hNMAFhebJmEAoX3qBE3RRprDgADDuKwNtvRHtnAsfKypvgjSctsMYD5pZW",
  "key21": "54Cwb5bcgS3qvDWpPjaYECs9n4XNFijUooDW2jitf73yFi6tMbKc5qZH6bxfSx4xh7QxdfhfbJTr6Rf8WZbQ9b73",
  "key22": "4xpzpSUW9xPFocdoanT7VMTcC4Ao1LuLfmLnEfot99o9Be2UZm2oiWCCmMmF8UkELn88XjVEzmxRmfe8DAa2wK5P",
  "key23": "4YfJuhV1Lwuh9HoPS8PWaP8M3FrqPh2NmxQhcYES23qjBXgUcLNdsiFH1ZmxMSuXeghX4xS6w26QiG1yWnK8nYKD",
  "key24": "4unZmU6yo4i6bqr95Gp8VfPaMixZ3F2ZifnLBrVyJzVHhGSVKiMmSjMih8BUMSLrtMJvMvAFYdi8vyhnByYnekR5",
  "key25": "2adpzQ1y7rYjthyKfiMmeacaR7hKJ6V3Up9DHgvQ54NBKtgJK1r3sBV5sE4k5wyzPipPMdv3J1nMa67fupkefwkM",
  "key26": "2iTPnKLTpNujSEV5jwBhK75g5XDCgTzXs4pRgVyFYaLe3fyo8SmY3SYofK6Nxtp1zNdhkhzv45hXkN1r3v4hzbff",
  "key27": "32Mh3U6vu9MPPPFmvNHegdAVeTcUpP3YkyPLLnDkQpRr2xxua1TY5PCHcZnpB27hRLrvx1rhNUZ5c3UmbLRYaGgU",
  "key28": "mxHXY9dDNujGMu9wTe2z4Y8ziKmiEjAJgRKRJoBft4mkfhgyyomw7ANxAcW1RuctLVQgJd3oD6unM2fdh9Kq3ZT",
  "key29": "4qmc5Nw3JF1VW1qkdAsxediyhx2gs3tpkMsinqUCjzeuLpnuWVERMmtXGvSmJhK9sMB2F6iyXPUUwjCjvAHFUuKf",
  "key30": "65oAk5gCjascx6vUpGSVrzDH3HX6dzc6ZnqNFg5pyXJqnbBH4RpxtNzVmKyqmDpushgTMjArFxs3znPNv4umpW6w",
  "key31": "3cVnTenypEFhCtfLiPWaKNFcwB23o7aPWD2E2uAwtcNLhhYvRQL8gz37eVRJVoSuyWASbB7xMQSX65w31HFBcJku",
  "key32": "2BnhdvfPeK59xMonJUUnQrE4YeGZcfv7fBrgHaQcRbvfpJSin517FCKnMAYR9QkNSQxNNEoxvzYxJdwiCJDo1ToT",
  "key33": "5JqhcbVWJMWGXrCGDn4d8AQG9xLcqeaw6usw3kDZmktse43ihuxzn8f2RYNwQZCGMPaojo763tAKPsEoAbS9XKBP",
  "key34": "5PRw9cQzyQqTJFntmKwvDSuYGz9AB79fFNy7A6CPQ1MU7NZ2BYarnYutx3cQoN2Xb8SDPsLxLNvBeq4j6WqKjJVE",
  "key35": "4QhFFh6D1Uv9TDP9HwCNyH3HQvwjfWoHBvp57QZdpa3Zb5LsNA64JBY24zQAXQMzLfiDENDWnqMtDXjHzm2BBmea",
  "key36": "3Af7AviNCcmCdHdzwE7z9xrVyE3pjCt2pyQ9R9Tm9xvkf1YxXZLvzw1PrzU5wJ71uudSGc11aVHFciCf1RQM5fLg",
  "key37": "2y322YyVmQiwqJVDiatAoqYDNfTVx7KWFzejd4W4UUB3dKpsHY4bWxq1kvvJ8ja7QJeGNbxdwq4DZHAwN348R18t",
  "key38": "3cRT1x8T1H1UQykHFqgrp3L44qJ9tMdDgZCRvjmqVZ4kYPj5Q7kbSuuGsYhPFX3FjwogKcKuQbmunoeHM3PxUPa1",
  "key39": "3P9fqgg9EhnhmbqgqSenejW2ram58T69fESZsaGXMH2UNBVp8hB3gTdfD4GxnaJdgLkky69dtpxksLmF8wPXrHQG",
  "key40": "4d9m2vQ2XNrViEKfGrwuBM6pX1MaQaD3cW53B2vVaK7mCSSFgdkArpADJvCwVJpL2FNRRz72H6YGo11iZH2yadgf",
  "key41": "3xTa7naMuRGesegRrEP5LECZjYR5tof5Q8ETcJKfMtiLZ4yBSkvhVkNiWDiLXX91DDnJcc4UCzzxZrggwSMiqEsj"
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
