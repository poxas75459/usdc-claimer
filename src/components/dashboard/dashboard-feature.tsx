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
    "559A6LSGk1B9U8jKQtrx7sEDcrHrdWc9QMiAWNTzUS5MhYULt3Y4Hoo7Geq9ng8b1qfFTSen5wPKVFoxNqEM3aCk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "268KLXxJU1BxWkvc8ovPVofBaDwPy6u1w2krirCpcE7bKnLwSvxtvUhrr2ArzPP7NMLJsnLYWsrEkwYRrWwbJm7F",
  "key1": "3ToTMBx7o6CgHjth4f79q1GyBAAZuatkVa5zSBR4CaHAj6YGqZGaBeymLVHYWseJ3kNktJtnPTB6hC6GG2JEXvrW",
  "key2": "5VamfxxUf9kQibW9hTdsMPqQKNufDmk6eVR5EpDbnstA9QbGWmDLwHMdWqr7yAeGZ3xrsn7gMpZGt351k6md3LiV",
  "key3": "2oUrsrHiQikdXMh4MtyUhRr3wjqDP5YjFnKPDD93LaZVnFmze6Mozty84t9s5UMLiuNrWLR96fvJw34bpYuFZJTs",
  "key4": "VuVMGvJ8hTtyXvYFrD2xocGjQ9ACHRnmNa4vrjX1BKe6fumRXZqHwcmNkoNQXqyPgJQg8nMVncNrt4pZxdG7HXM",
  "key5": "4Jpmx5NGkzXpajCcUf34gcVroQV2XUiUeeMF1Trb3s2rQSZ486Mfo3gtg1XZZjhmke9auyfR6Pxem7LhNeiBMm84",
  "key6": "2gr1v3VyCYNTHfB6MJBuUH5RiiqjvFT4Nq99Zte9Hx3dZLqjx95bLJ3zmVTZAQ1hifCDwEbypxPu2SXUTR9wkKym",
  "key7": "5En66MPPYH2Sw6Mfi3s9amoPk7uEKQZAZ87tJokEy9gh365UUGicirhD8Xxgc8nNJAF1W5HgHjAQpTFyaxzhJ7Ry",
  "key8": "5WLowEw5P7e8qTHPg7bHD89v9fHv3qaECtnv7mDKP6CaFHH3snJLiKes7cF9drVZSmqWKELZds7CA5yoJPV1KXzf",
  "key9": "5NDTk2jEx2KCJbHJRTSVJ1qvGFbdF7XhJdxYCsreLM8Pkv7VXuwZ7RaCAjHkYwRGwLKusS482FPWL8USJ9QUXwRw",
  "key10": "2mtfZpymxrBDYhiBJDpVFgTMWM98pgtK2t5nrU5uJw7NWQhBoLRbRHuCUSJp95qgYJWYD3K6tMRPUs8EufvAVcio",
  "key11": "378XGY3EEts2oarBGaL2HxYQ4DSxcUzeRaPWcrzDZAASRUw74FNq9nmEzb34FZrEBVHh34ExcacJRtMjFJzdXrRJ",
  "key12": "Cn2NqBFyyxH8Dvf78HvSdfaEZWqpKcTSZaVNvqjLarWJSEMJq7tBaqS2xAsAnooxEgZTdkDX54WQEmwEvxyhK8N",
  "key13": "3caHaeDpj43HTNyMNVn5DANu9KTkdgcqRPwKaudazvrMUULnnmVRxffpA1CHxrptA1hkoJLJeTeRjHSGLPCv5ECW",
  "key14": "3EUGe4dnzn2bt18xUFbCJugyMQKhjdTRLU6GLYsAbYRj2yxDR4LW4KciZyhpyacWr7XSntZiy22Y7k6vfpbgNj9Q",
  "key15": "3G2o9yj61PBBEnCn8W3AqV4AaeiracXELYk2LuKE65Y1QNb6ZmXwinTbya1EkqyXR5kSTcpYhFmpdL4kxHWy65XE",
  "key16": "4tfhfrhGcePLkbaUTwgpZ6xcyRLoAfaNLrHqeKmSv3U58bpHYEQQgMmvKBSPhSqduzJvgdpyxpXMYk9e63a7cSLF",
  "key17": "2djxiGeAUm8UZVCucU4EKz9ikt3hduAWzaMD4YstiDSoqjGjZA3wzUmbaQ3p3Nd5NazE3Pj6ihhQLWMqURUdPutC",
  "key18": "2dbGfpXj7dJckCcg4ocdSZssbvVAxFDhLPc3b222rC6Wk762NGw1E5hxFwJ5PSaEr143UNT6pFi4jUYvdiovcsX9",
  "key19": "2aVvBghSyKqjBfwsvWnjFMd5Q2PrCPbz1DrMpXHUTPeW4DqSXvBr4aBnC47jgXJr8dna99zxB7T93kLsc9cfoD69",
  "key20": "24R44PVETeRAk4rWxyYYpqfq2DQ1w3ZqmL21usnvzCBAgptsoYjbCoWdkk93EpA62hB8ZAZBNsnHFJ8thpSruWd2",
  "key21": "4vq1suw58Vgc2RrXv1Jkw6KjVmTP76fz6S3378uTtyKTd9xZRv3vU7DEHt87jguR4pZcRY6mt3awwbtzQTn8L9QD",
  "key22": "4P91PL2jJqracvCmZYQxUe2fA8o2YvoFpgDjCwmkkTsLW1gDnF9HeicsghNo3pFjm5er5N8yWWaB2w7hh6AYbHQ3",
  "key23": "2K2b14JpzGsUzdR24ct5tEV9EZxZrAyLjxGcsh9RQ7tLxaVa25jZMvqeBKbRSMbjTqgkvy79BaYxa5ZeZW4pxnBV",
  "key24": "2DHy9SER12EED9TULqXmAdsSNikcqo1mbjghX8QUtbAYtx8bW1ncV829HswEaQmRU6xq8cNQC1CMShQiUCJ73VY2",
  "key25": "3bSfURu3EqvGkJ8jpRtdWCKPHdyimfFU487DAQ8V94wgs5sQaevFaTWEuYQdBjJAPTw3urALNfZ4raHmp7DekBA5",
  "key26": "5Z3vcZNxoQjhuin8cFHySEXyF1z3pw2Q2Lw8weZELnVSEAqX9C9Nt5BHLkGfjmKxtJvWiktyTundMKUWn1pn8T3a",
  "key27": "3LPVn8jEAxcYuWWxRxYY5Af8gv5uubyRkM2Sv1sdHxbVHYvkGnX13h6v7veFGJ9vshaqtJzEygo17Ep5pu547btG",
  "key28": "5u1Fp3VwnwL6G1gxtzES142GBFrJpnknBgvgX68kNxao7orkmU5SELxp38XxvqTG3YD91BfWK3v4EdeBSkbS9d5p",
  "key29": "4kiQZaXu7WdzSD2CngTBsbYTGD4h6e6WWsrvyYV9xqVfFg5FK2QMscSzjqZGEqS8UGeJKH2v2bpkkG34aUUrEdq8",
  "key30": "59HCnC5jVUsFSqQCPGJ5xuiRaSiVHsddUfz5g2DfpE9zzYd1gm8qZMJyPUB1UuYqyFMjnXsWxBZNiUZhoV27wdhZ",
  "key31": "2YTnyJ3ic1rRHekQQ9FhKABrBjK3sybgFvW6wJkWdiEHUPrUCCpg9xTAqMQGdsq2Aw2VXKCs7Y4JYo1L5c9DTvQ3",
  "key32": "aPR2U9UZjEZ7jFMqzfq3iUgZR9HMLCdhp4t7x5YJfwtNADtgpaBWwKbvEzgJ9J4Q2nD5TWHSAaKEcWULF9h3Tf5",
  "key33": "32iR3sELQFTd5UsG5Dcd8npCsse3VRrBd34WcnP48cYTcGUxRryEEF7gee3QSYHWs1CKYVC4URCfR5XVNo971qUX",
  "key34": "52BzQMAEhyohp4V31oNYi1WRD85gkRoesLshZ7t5qkcSW9EDzsQx9QVMfKWuYwSFX5fAF1aBPcvwAELrkE7zm4Yf",
  "key35": "7YQQMBBqbfip5jy26oYqBGUGhCv2XpPgR6FYjL62DETq23c99fDvbzaywADc74sNxbp7XMZZyoKCfP8syeRP62k",
  "key36": "5rkejGbwfxrEXCNgUn7Wkq4SCmu51SKXq6s6TXkiApK1hgXBhj2DqVBd8N9S82K62crV9swdex7yDTyAhgCfTp76",
  "key37": "4HwLG55C4BMgJ3ydXCRaGB6NURKdhM9W6cdmyhr2KyTQcVqR63Dgz7JtWb22WcKwxHG1EKz21ozG6J8o21mG9oko",
  "key38": "3cnmaG5oPU7DZqTjzitTCJdNhRyrPR5a9ihSBezKa5K9PtPXe6a53XQQSsgoKgtJ2qqsUyzwKhUDkzArMNGvMbcV",
  "key39": "5v1NvtKAr8pgXK4axnXWsQsU9Pf8idDh28pmjKwMdXEMUx96q4XTU3grazV1zR5XBnd1rGHYjMy6pvhDQJDg8nru"
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
