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
    "58T8YWS77FQcrMJTpkHpLKQJkTyQskPtKr4SUr5ppQMstj4TjsNxmJ6s4wC1rXjVsMeiaid7LAt6gR5QSZbfZ1cA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ptmWqH8BXcxrxGFeFp6cCWQ6VD6qj9iKijcqMxgy7u4uZHtDhZdTgiqjzK4ekobuDeQspYU4osJo6xs9pLm3Xtm",
  "key1": "3FzcmYss2L4pbgLFs7YUKogP78V4xphXLNRnCNQSGMpb3nuyXKWEJjRoQviVk7uJL8w5fCzAntmW4K5vJTupu22p",
  "key2": "5gQPknFwYPYCoYTXsTp7wtXw7r5qyBBfFJYYxPrYEsfW1h8X5bJoqhhZb6ytJBdQD2Q333vDRY6PthQvZYKRyGqC",
  "key3": "4GagPJiNk5Pt1U7n6FbDJrVfPbyTCDouRm4SJDFJ3zcgSD7LSRAjGb4qJxwTviz8ADjWrewfKuMSQs3er15P356v",
  "key4": "3nReVcvxz9zXnzvUhwE1dhfD7QF2Tod2CktaV4zeS5t7CNSSgwJbZt2S3E6TG3hJmXyVvej6EhpLGfZTUXt8BFuA",
  "key5": "2wACk56m4QkAmd9j9kPKYka4rCvtCctJkudyzq11JVBQia7JqwK317JHP9bt9Lh6YEiohXsJteYtaCCnpwMrzZR9",
  "key6": "4abzsjbLW5vGdknN8Uz114PQ8mAf5NzQgAZj5615K49RKrXr6JoaukyzF4rEs58RDA9YttPFYppdpuim5QTKa9PD",
  "key7": "4SrKBq4bSszqc6cGuYaSqzQ7udcXbcu9Sywqa33HHBhgJsPCPCpqLSZdtbLR2Qv96dz3a14qQsWqVa5zzsZdUrJA",
  "key8": "gudpqhm7mDiDULx7uphqDi3iogEoAh8UwQkHhQ5UsRMtJjQeYD6gCVLichqRCxEu9dpU5EGE6k285r2UKrhDGb7",
  "key9": "4FmPix2wFTPD2V9mEbMYigen7dyLqt6Kfa7JPZF4rvwGvdXNGwAgqbow87sWdSmNnKJu4McdWZT26qbFxxy6RDo8",
  "key10": "3Gsn3TdWyGF8V28fgBzETms8J1mRvb7LBhaAfsUcg4KYKMoZY7XK7Nf65Ho6EieoVm2PtcKTcXyApmj1Kjukguoy",
  "key11": "3pAxRFkkyeL14YguQZC1KTv7yeXkf3WTq1AAb8Kc5Vi3qzuFRvuNNjoNnohEE3fuTTFgV1ridvb1DaJnqoCoSsih",
  "key12": "4MCuNQVgnJrHj2YCBtcSY3e3oSREGyZrh8mJzwC2U1hJJoAN2ThWtuSVAdntcXNycVTcEq5FgWMWTJxv1xK554xF",
  "key13": "5K4XfM1uJwuz4zxYd6S27AHm2DUuJtT7zzjQo2MGbuzgYSgmL6Ue67AjVb1tGFDabDwdxoX329e9JhmbKC1452dg",
  "key14": "4rgY9nUGmNKcbXHKnf3yC8aN3PVyCgoM7LkmpoibMMfmuvTdDk5i7pdZUPzti1LWnUzwHnb3vHrXRaNgwfHGKk9o",
  "key15": "CvzC8BMZVAZyQfMxDUc1Usv6vrrybYPKEYVw2exjR3MAgovudn5aarwEfrrxSsY78iNpDyoZmrGiPRdUryjHFj8",
  "key16": "5XXUYoVAUJCLQEkCtdCeSg8nfPz2kc8rbizDf1Y7aAjUnCPtQRe6hAe6u6GYpGqMcemaD6LKJG9YYiw46q9SX1AN",
  "key17": "3QwdveRv78gSZ7RknWWmSMjvugc1oPokdAXfkFNVff47iSRBHXodTVnLdjKLvNDA5yYXQjix9fGFR6srBQeDXkBZ",
  "key18": "4rTQjBMqdEg6P7yqR2K8vpUotauAkn9QcXFa6riFPdZkRt9wA1ctNJwdDDFN3kvXMFppArKLdzK5PM2awWRhoDCi",
  "key19": "3eJH53aemv5BkFUSs8DCsF9YwvQ42Syz8yofVKhWLDcc4Zp326ztT5hEjWLz69ntBFH8wDCxc9VLwxxUfo96kgUA",
  "key20": "52tGEpEHzANoXXgJtSfaCJjbzUTwdjJSfhJtWbcXSoTHzBRMcdFtksct2Yz62qXSQpu3qfowZDaFLywnpF5n2uLm",
  "key21": "tbg2iFJs2iK1Mf1fZoNpBPkfM1phBTwBm2fXPNyKH7g5HepYzmFN3Xu8kR79HQiiJjg6GF6vq9dijk6qtBZ2ypG",
  "key22": "23i3wpDBjSQhMmSj9S7sefJfk2RcRtnCtQRYGWhqg4zP4kiuSPou86xYnb1jF2m4j1rfT6rJ91yp9o3HoutmwVHX",
  "key23": "596knoq9LZCtZDB6wGaNgEL5M5bxA6nwGwh28yTX88FiCxnLCYGzZD4awt3dDrj7HgBWMvoRJUWbHkqV5Gyq7ski",
  "key24": "4pvbvPyYUyfAN1RCniBfujqyamFqMiuzNZxpKSHHMyc3Qjq4yaNsKzd4uzEFMuUTddPvq5tZx35CEc531P2NJauu",
  "key25": "5dQ4kqfF5cAxiu8eRd9dem71VZjcoxJpKNU2e48JsvXLFQN8tSfJjzfks8yyDwn4H5H4f6MucRPB1tePQhMiaN4y",
  "key26": "Rb6LADdMxHd1LXnG5HCBshJXsJTJUJeZ5FHeZA2vwS7Go3UGi6gsP6UZrUWX1iGjUaK4aeFpDJy9dYxis91xLoq",
  "key27": "5mdmRFgcH1rcxCXZpBSsJdjFQqUzFV6X84rpDEZwPAR5aTDFHhx4gK3ky3rgdiqEtKd6ux56X28BDVk9PDFofMgG",
  "key28": "2Fj96NWPigMQskhErs81sM8FoC35sCr6F2883F49rtFhhdnUEV3zBGisbh1roLD7hd8X6hQV4gKsWMzt7BSQfJBn",
  "key29": "unrEYWuhQYSbkSo5AWm3gg6nGytjyBbgVedZz8QeohL43QotS8ot1gU2tz1yBsrXRnNY1jkJupfg5immUThtUuD",
  "key30": "3LckBbVLPUm7DjuY61EAgwRu1a4QEAuZ533c3gz38FQbLgmxov1bpKyqXp5Vaao9Qs8m42PzUnMMy4CqheUB9sqb",
  "key31": "45rpQd3BPkW4NUbEGojvETMof2XJ8VpWxc92sR4Rb97P4bZzgtXnvqWpQNVgEoPHogUz6yFfLz2kwJJbNckmkoW1",
  "key32": "3K7THWnfSSz2hkYwWGrePdRHQQtd6QAtTJPn5YPKoQKUGCrs9niXiRDX5BZQ1AZJwPoKAXX946vYjYcoFv5cDctH",
  "key33": "32kpXvT2UmCpDArUkSqH49H9CxZcUXFqtGa7q9kk3fstN2pxErRmqxgwWAtoH1rXKgtH6gdW7h6hLSqw9bhshWCy",
  "key34": "qgLMLDUSTxsTvZiGza5zyeGdQaBkBjjjsq3uqtstzcLuaHTj6fp5znqyPm9sCwdgdB45fg9MG9BWzvb4hbftD7S",
  "key35": "3JwJCn1Ts79YiJtr5KyjRN7VHKPq1bboXSx5Uj4krVbihwyJpKS2QCeRNg9KNRQLeWf5Jd9ra5gCFbnkv1zRYntS",
  "key36": "3gMepEA1Us7R3SMowe4ZusDpdKQwCTHBZymMdV49yan7BjzJ2ve2EhNcQkNa5CYnpRs7zK3e9a7sdkpmEWQQUc58",
  "key37": "3HxMkpnmFZBdCvW1MwPQguhSZFYJMkH99ucC9au2XNRATr8TBkenN7ZaXnPYuk8J9d5t76pbySU4Ghr3MUfFXjuY",
  "key38": "5tH3ap8TuPpujaWsuD3y5unsHcPf5qZuZdrsRacEHGZBmFDUF5vqJHJsT31ys5aYbq5g8F1JpuzwF3hZSTij9mt9",
  "key39": "425wjZYRBCY4VKKjrAkUQVpTd95x9KymoM5RpCfiw9F9gAmcu2iYd4pSbm419gTL6gZdZvLHVBFt83z4sAWCwQtL"
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
