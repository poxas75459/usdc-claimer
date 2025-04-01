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
    "4LJNtsfP1G5GRdghKgdbR3UVG5dmWF8Wp39Zzj2cYkB5nEq8jQAn48vahuAyFtjeCS7PiwmaeynAGh9MBWo7Nhwr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33Qaq8j2ZiQqk3S2VuGYzTw1i8KNpNHgH2N3kqyHjSDzHMsmBjkKKpnv8Dp3sLzDK7nxtUuEhuZuRJFJbbaKxg9Z",
  "key1": "4LxFDdhj8DPhKwQuVvsDNgbdsf3qfxJUvyMueV9JF5fifXayWH1kseLkhmjHKN9ivchVu52r1ZT1e2NCop3xSpzT",
  "key2": "53k4fXwEChrmiSgtYftKtwSYV7UkVEFVDuQwXXSijt1vTnYuwjm9cJjsnVziyegpV3CYjUoqsguY1yLQP2VDsd2g",
  "key3": "GqaQu4BxYCKX9uqAtoNAK3VNzmdma7MgpqTZuHfkzcMYKspSoeDEocLgg6g8u41dXYm2HH44EbokvALnx212QXB",
  "key4": "3YQEbhbqrxr2b6NCP8t76KJKApAmNRVCDXmSKnb1DzXkJeV9mPFfReXbBuPsEkrNthXKaGHiNi9zwssFzKaZLevd",
  "key5": "4VpcSbE8Qgr8RRm8i2dNN8h8A9dnRP49hvo4rmBuyqp9f4mgWocWKtfWjnhQD4m4dFvbyHToMV7SjS3XUDwEro6T",
  "key6": "5EhzGGWsXEgu1LeBjrFkPrjXbmAGMzohb64RN3mcGzaEn2KZoAWv4e7NDj82a4A8RGinsizJ122dPJxQNbe5KrXS",
  "key7": "65prjcPxhAGsQqoWsMMWXoYafbW8RXsqbqWaJb7qpZEQkC6c55q4pC4c68dnaZCYjL8163ee2MB6Th1GwZHrWjqu",
  "key8": "25jLVHet45hToYkP56FqPeocTfQEmeiVudUYD1h4eXZ4tbtdJq9SewtffeFBoegNuSxU7SHLKkqDoHJ5PE8nGV32",
  "key9": "4ZE2Zv7JkNrttLjGhRZmJvu3p2D8j4w1kFwKuMpBpEwqRwo3b4BDjbg8mtszDQEDcfwyQikY1P4gV8oKYRS4q1fU",
  "key10": "3oDoqYPTS1AcHpeK4PBDWUueULYJ3xBVJUnfHwvNjFxeKYUpwtsLWsoPuWCk4YVQkdVncRaDRvdwX9QgNTvrhSLz",
  "key11": "pEaBs8T9eCSRuQfiR5X6FxTbES5fhFz8h8kv3AQnFgiNKbh982nuJFdeWffQYhwf8hU3J3rAZGZrk5NHnxWCUSM",
  "key12": "38xPSFQcyHBLL1cVHgjiLNu7jTizmQUu5v2TU2zFR2HaskrBrkt9BUEBL3CWns45JCHrKgzXgVe1KUrvzv7UcCMf",
  "key13": "8VicLjzAKQeueKBoi1dzLQURsB56HoF1m9RJEaSWt8nU9nFMsGDqK6aj8FBFLaNZLKx2xxpXnjXTagsgWmszVdj",
  "key14": "2CetSTiwN4JMhv4KPttzMuiQuUymJ4AvDN2yjXXuRg9jfn9aqTEtJPxxrn5t67oXfUbm28xCJTaEeaupyAqnthwc",
  "key15": "3qXT6uSH6LoPt5PkrB4BZX1UgdXTgvWqxsamAYW9sDNoraFSZGQkesMKxtAizTHZHUHkfavrajExZvchumfYjvmb",
  "key16": "26Y77KebAezhjwoYM6sc4W9ptTmrTCv3RXcjpVMfwa3vbpepkGBiNhM8WEmiHMwh9AdB3H6ZmUFsq11LKkcHMDSD",
  "key17": "4nhLoVCR54UvvXEA1YdhPSTNFimZpVz3tG1wUDwVzH8AM78e1evTg1ZjbQojP1jYEZMuwZMmFafWcpe7JGhgb3eF",
  "key18": "hy3oZ3tERBFND2EnTbwnapGCp3iLzAQfjjqumYwDbjgyNLPMWQoDoutSoHQRThdSp4eKTUXf7P4ACXw6Jr6AUVd",
  "key19": "3MiRRJ1oMN2nJ3fuvZPmDE7p3v6RT76nuJQUgQpyWhSXRpJxSAGkyWzb3kasJY3Rn1vxvreYYHENrLfBD8F3dUJz",
  "key20": "7TMXPEYkWeGsJcDycXjsngkimvhd8GH2Zb6NYdi3xpxbTyb2xzE6aQTAXuaoeBgNw9fk1WUD2pgYXjgxrKu7fhL",
  "key21": "2yLjHWVTbh1PexraAPzTLsQms6oGRwisiQ3aq1x3yP7oKJ6pwoWU2EvemUth8aEzxGFMDXWC4ghJSUXW8qZ8XSDp",
  "key22": "49BXRJwrRjE2HsiUL3pwVduN7kLSKkPDFPFAEeo6sXXnVUVeMMRrbtUjhi8tvu2PCWATk8a2njLL7qC5w67jgPSh",
  "key23": "2QAK3iDxP8YNVso9Ni2Rm3vJocoKVdDCRXqY6jNiN39VmkMm8GRLbGYKvUfJR7NrYvBBHd1ZUiNVA8LaNzq2UkZo",
  "key24": "3wXDE8iqPKeZ9vr396pZ3eAH6ikPvYC8obc8bPkR5evafkXh8nHG3DiKcu19uxKRwUtM5jXKFXmy218umzLpi4N7",
  "key25": "2CMuED66NT9rTEwkjZRK74uWNpGfZ3XA6LFQFgweb2fver8Nwdb3DPK2sid82x9cA59vDeZKyUcKnK6KtVBU56Ar",
  "key26": "64SbQU1TVKQZPQSmj8LqxTKS4q9xZRbmNmjJuxnc7hdxTAwWztCHrs7VuEkjmSXyy7jvQcpBe1fn7mpUKJWRrdFN",
  "key27": "vE7t5CjYg7FwpErz3fQmJqe7Fhmvv1RugyKrjNEMkpbo5vNCUNKBnKaHH7kd11Mp8mVhqTrLQmEcoMK8nRHPmRp",
  "key28": "QQS5CteTQyGFp3htFsJrjRSHqzMF6zv91WsiFRhXNhxkvSzigHVK7xXNvvHatVwZ3gQbU9Jtmd81V2uw1xcTSJi",
  "key29": "4egAvjjX6332hYgVCMTURx7BvE22wXLstqQd1HBMQM3Lf4FQ1svu3xQh2PP1oBxTjYy5PRu9X67qjNR8pwu7ne6Z",
  "key30": "4tiYQj3J6P1fgo8ogx5Zsmjh8eL9oeyjZ2hYBWfHcBxubhPkHDLJEBwoZT2YWpBPXCzxRCz9A4NsVWk71t8waWoG",
  "key31": "2X18RVK3gXr26NvzG12fccPuGq1m54fdAUH6Tv4Yh8ZtBK5Ru93gQQh6asfV4gG9pKSRgUxpVUGPE14dMdVAVRvM",
  "key32": "iAoMzN82afhF737sGMcNVXRtWxRxQSHXcYeqwfgimwaNpFBv9Y3Y3ivASunsZBLBPvocZPSLQ5sXyLWthzKwU9V",
  "key33": "PNujgfu6CBD4B3EWzaFGgmxuc7Vec92ZugavodqhfYvdAqDEjFD6bpsrUwzYeaA6tbgDU2Kdp17ujz9ZG78vTq9",
  "key34": "61qp3Za9xoMs1kbBKWtYwgX2UZE2RWhJdwVJH151vTf5C41atp9foyUeYvrfUAdXu14GT5Yfsbdz5nyuNbxXAnH",
  "key35": "3WNpoMAH3MvoJHRDC2T3osFRzWf9vL6GTPzxtQPvNefWunNoxoVY1Dwz49p8hpy6DfVkGQQnZwCCYSkaf2xtMTPi",
  "key36": "4YQGttDYJQ8HsBc47tyPgwb5V8dG9Nbmiufjqof5MdVZzWtzD4r3oHqwueneMrBptjpxNt2a1HiVF81hxNFMf2WS",
  "key37": "5qjvLYMQ68rnsQZVBHfYBofb98XPqYJs2hNzaKBaHEvPAaSQneKohV9djoeczeS3mRKi6ZyLZvfXm348DjXjPcL3",
  "key38": "4NK3WAwWgUGtaLUQbZgh4RKqfoM2FbaZdQuvkB4iDZUz5Szyy7ErZdviW5M3Nr5qTUzWHngp9NCaVGCLN8Gd1tni",
  "key39": "51gcZx6YUKjYTXJ5ggy2LeeMUUnphpfT4vdpAr3mAWLuTj58q5SXH5CMCC3dxfzmwvAYP7Nm3F3utXjeC5qPsWpX",
  "key40": "4X6UX47ocqgpBX7Q8UyYH6yUsBunsDdwAcnbCKhuuZnQpen7fQyG9sCzYr7Hgh9275SKKbEdfNbmQSRkD4pqkA8p",
  "key41": "kUMvmDX3DfMaSv3dZEyjuxqjuFJFMXbHdXD69bFQ3PqQ4wg1NJYpTyqYYkHuQfhUbxjdhpxKptKxeoXnWo52T88"
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
