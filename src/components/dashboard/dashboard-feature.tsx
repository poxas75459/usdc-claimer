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
    "3bp1UbD1YSiGU3RxDoboUBnEs5xpWm4sENuMMwZ2AR8cFePvaWvZXxytWFZDgrwUGcgj4sY7vsN39z6N4ABuckuA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C4VE8FyRf85EGpmnymBbVgq5jgZmcTFbDBQGNYCn9FyAtgPKSUowQuWa8XQGvUnttKSa7SZe6zQYeoYEsivMbgg",
  "key1": "41Vjn5BxpYhpEXFBBTGmPR96siaC6bJTF2on21gd4eV4tS7cf2bJcmptudbTnQ4EghELEBwt1bdQK9PsKzbFBp7p",
  "key2": "RxkQaNEPgyvDtboAdvTZ53bZH474QcB9LZcAPonprqMmVbkeFC2Bp37bfBrVdFGH8bERRhH2hGHNg1rbX5iJPTM",
  "key3": "5WxewX27d5zd2rPWaWWN5Ev1xiUqSeNVQs13JH6z74QJpTHNBdKVBjc9vqHJQfjd3GyxJiSjKiNNdisXPuVf8XEB",
  "key4": "4f5JwSrN3NGUTqUXUCEtTGhCyUTdb9X9E2qYGaoTvQUWpFysfFCFDjKCz6sH8yrSinCJGB96aygdCvdCAfm5sR8g",
  "key5": "2PKXifSEfMHUMT1UhKmywYkHvYqfULXfCYFhiGourRYxtwFnH1CSR24LGjawyZotQMPGgJw7YLx63DbKLSuNi41p",
  "key6": "vRd2EuDa2b37FYLxS1e4pfsvUNYbNAzcNJh5HzBQGbDtt86f26Nhcczx8qvBRAgTp1hQvtWgSp3JfWM3c4kxkYu",
  "key7": "4gqWsVFm9gbbtrRWoLmCvXA9KzF3AC28ooJqpqasSG6ytVbvpyhnRva1yUoHThwb2aG6knzkW8SRgu7uXjJeZt2L",
  "key8": "3Cig37wVSAcqZNaKQcaDzFeBBqBE9Q1KfQjr6TFJecDuRi8MrAEeELVpmWSMjM5oBxWnAkZ2pAUsYERyKp5np4Vj",
  "key9": "3PW17Mv32jJdT5Utoor8GWP5wzFqfJxGeCfLhQoYCXQ82jSs2qvAzUp5cW2cFZVFChS8RLQEUh7XmvMgD7EChuNX",
  "key10": "27phMJn2Bdf2wjmLUQRgxW5s9RBNWdrsBLznQv462kAsK4icLSEntvFuu7AFpCaRiHQGXFkkymsusZfNAb4sJQXb",
  "key11": "2QxzSN4hiVcrJrYPyZTy6Gaf8jg8VcVfcgCDiSypR4Mho6TMvJhDY2hoFofvt4cP6b7fjDeGBjZPhCCPvio7CUX8",
  "key12": "3U4yiEiAHpKtuVbXhBWRVHrc1hqyzfppVWYckrGmergZ9SxJgQuQYjAMtP7BMpEbeGhLSj5CdVsgaXSE8SfFiC1B",
  "key13": "5s9K6xneYFfoNz34vVBWxJSkieWPjXZBragPSyFKQpJjT6NPnwctV2Jpw1DpT37MaRPkVdsnebxcah9xnwymAW54",
  "key14": "5sirKixKkfY5ezMJb2zi4UeakgCQ1Ef2p2gpCnWzRJxqnkeJjhymZxyjWJdfouLJcFD7w9QGHVh5y6U4mwyn7Ejz",
  "key15": "3vdKCc7DXrkvbeXKcQgvi4YsjohQoLbG1fJFnS8KqUPD1x2vjDpzy9KVou6YR1mMXfx6MX5LpucMWH9VZhUYy7dR",
  "key16": "3dA9MxH2EZEYnebeJJHgYYSheKhx7Q4JZGtRJ4iwAk2pnqeAxB6ZYvfuzgYLfr3v2w3ucGumUYgeM58wQJji8Cx5",
  "key17": "tnFaaBwaw8mx8CuDRXe9twvTTqzmr3ximV8ymwsExPJpx8sJ9Uy8kJYQmSykHmWiwY8hv99nkJmpFAJ3xPk8jbE",
  "key18": "5cGM17RDrUcZwDbzzVfcNG7fqzJBsyR4ikcQQ8iYct9XLwLXB3eA5YzwxABbds9LzPAr6q8DzKnC6VpSy8L811pL",
  "key19": "3pTM6XbNWqdmTEt4t35tMkiE6S9grXfrkXqHLAJMvLsjJ6ACYjKr2FWmuVtpFph1ssXPBRkkUefMnR7C1WnkLVMh",
  "key20": "47FqSu3YJTpcL4F6tqngXZb7twtiTjy41zDkraQZfR5bShzAkhHv864XUWwDKjm8vnKo3QNpy9Ma3FaHjDooHVux",
  "key21": "5yfsbHdpAouseW6452a4MgQyMQ121TdKyuj1ymUir5vnzYrDfd3rWT5NyGP4H4C3Bb1WSjnCaUShGLcWM68EZHiX",
  "key22": "5Cp2UVMonZaRW5bYW1WvDpDsXoNF5zW5Q442z4PQ8T3f95DqYHQ77wuF3yQHfL2uDVTHjwNejWAhCMF5zvwJc1Wp",
  "key23": "NzrCxBZqujgQfRe2MsJmFbAv8rt2EU2LBVLHU3QtENcZXUiuTihtNWDHQc4y1c9GNCcBtqDt4eP81dmj4ER4kCY",
  "key24": "378EpUi91Q28h6bwFcrxaqUCywUMkHnZgxgQVgGJo6nfMYas7GjmA9TtyX6oXxoA6mn32p53ofvQ48GmWuhzh6s6",
  "key25": "V2RYsuTuNF7GrueFkg9TcWnL6FcWiGyATPyQhHCKvWtpZZRHhnFRCsKoAmLr7CTLvGddN3puE5JPEJMFhX2KMwu",
  "key26": "2WSZax3eDwhTN6M5rEP2UFdceoNzFocBCvGu14sdC4TdPEbJRyo44uraCFYGFzJWLMWuYSm2YFTfQEoaf9CjdEfc",
  "key27": "5TqMRNsYxMjPcyTRNpFJnBff4cXLHYGP6r7cJMhinRjp5hEHVR2g9AAgsvWCacSA8ohuG6xXexEEcEhCifYFD6D3",
  "key28": "D4wtV2WFAanwTqTF7SgBVA747yTjQdGkUdws8ohYRZASoer5Azrcyt6nDzyVuf5JGFGpCejE1pbr3uFmJiVbgpN",
  "key29": "3VS6Nq3ZfPMN84iUPrRxbdUJVtWpZbwqYPx5Jkix3aFZLVobF6YaoYj9ymYMjji5AVxi1SR1n8GcGvugK7qWjstg",
  "key30": "5kz4JbRjcw4UD5WTEHLhNDbGY2PA5Bfpk5EJx2WeMTrAiZnWtf8VbeKqaTajy5KdNvyZSGGpXGmvBzjmpsJVGECC",
  "key31": "2kdtr8rrjewGrkXBXc5BxPHg5DAsJSo4UTiQASCRPTA65TG3qzXJU3pFTvzj5Qj9xr9s1PmhZgYr6ppa6vR2aHzS",
  "key32": "VDjVFcQR7WJYrLEVvZSPsVcsBYD5z5AsaTDY9DzVAJcdC4Py9XM6P917usrzVxYnKB7PZ8K89E1z7fkDAbW1HSQ",
  "key33": "3my1evGWZLpjuYFuFADb6H2mV8Z2BbjAn3ZCjkdRJFc1CqCAgLJEf44gX2yoKadFKqHqgF6dPj9fBsP1NPRMRZTP",
  "key34": "2DcxXp4GcSnKggL3KBzab99KTeXYFeqUn6MPctL2R1f5N7Nv8EaJdp5WSMrmSMLGDnGdhKVumQwvF6xp8TSh3xHP"
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
