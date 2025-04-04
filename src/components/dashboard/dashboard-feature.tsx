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
    "4DWcqyg4auLxcosU8GsJtcPdoDxJLiWGd1rMGEyMxyFSRA9TNQvbDRjsEQQ7JND1sktSr75CvH8QmEqDGUNEkVNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W7ESY2GT9vq9VTWLgatJN5N6PeHNuju2MBVjdG9FxWc57z1Bz2VKFFhsoXHRtFedpydKiT2qV3ZmUUdaqVcakNz",
  "key1": "5DAVX153wVzPEunWmmqeyUSR9m289YWAjBoDweEN6HZMUQBi5ncJK796P2c267a1u3FgvghsBbfQp5zd1jLT2JV5",
  "key2": "aF4LH7gGBuV26Xma9fUvUZJzFuiDqu1n32LKgwYkRSVq6Zn5y6RP1prgybESQX4DAuyKkUyudhcWRHoi1DNaWJ1",
  "key3": "2dg3LAgXdGV1uYHVJcE6kn7DDGyDL9yNj9P3R9PHQgWzfoD1eWBE6Kse3heYXdfNhGu5dN8iUXZd6o4k4LCWRP6A",
  "key4": "4NDMco2tPt97xbhwKuHuvbi3vswVgZaDuaGYAAfLSydbEJtzPxrCQjifA8AAfaw4WVw7LD3eSX76n8s5hLLLqjYW",
  "key5": "4EhxCvXBF2Pevih7csRdU6KGDntD6KYBnes8vdkRgNd6kw5EVk8vLzKrWSSeqy1fy7wom1pgYEmGhV2STDzSEH1o",
  "key6": "NLfmPojNyAyxixKoKATm4Qe6i5tP3RybkDmHAVA9QwtDwBnQL1jcKm7GLA9tDweNcMzz5QXrieRemd4zYvXAFCL",
  "key7": "4PrYsbYDedLzfkMdE4sbARDUeFCdnPt4hbJxcLaxBe8ezLFCXMAoqR7g6VU3F6u6nj9KV851vUiCcNPfYA43L1bY",
  "key8": "3Qf1pRrynQgKM2iX2smGr4eqSeAAobFxbn8XDns2MgzZHBFQtPbFMsfqgbRYPu3vA9TBjr2FnGnxpSqMtWZcwH9Q",
  "key9": "5fppmiTtwoezUxAwDoy2ys5Sex5BfqxnC81HMzngLgVyL11T48RUpDvEpDEGi4cqZGxQtfFqhFvve2KQaeGaSSKk",
  "key10": "3wDkRdFPqQD3K1bmXq1DkSDJuZHEGB6zgkaUMNjUtUgEyTCLc7RsKtFqoQvNtjGbmfioS6eAqbtPcuVT9mZvLPxx",
  "key11": "5EkxM5MCGeWud9BiX41BURARzzASgJYnjrGoNULA5pLeMKqMySrVetEVaL72gdVn8f5wQTgNXpAGsqiZTpxnVcbL",
  "key12": "2ypwuGwwQE2BZWeREj7xKFLyXTfg6toJgBicvra2QRqNhW5nPc8KYnvLMAgFRKsLqAPHm9YBkVZkxgr14jkmEusN",
  "key13": "2Sqa1vnc1btMLG4Ah1RsvzcT3jhYThrH6Nrrr5WJsw5jaVz7Fpje8KZ85qdKhGq1gh5MgAqq43UeG4titvwE6ojR",
  "key14": "2CBC9GQRgWE5WxNn4nrL9kw5Y5tFASzN58Lma6g7GjZCPpHGzEdH2ctMjD9oKs7tcG1MjeWSfzsBcYxcFuTkqpeS",
  "key15": "8tqHrFypsMFTM4qPpSP7m4EZrXRYkmUyMrEMbCPoArisdNyUo2p2njA7SbrDpMBfhqwZvddprWdEymagFwHMd4F",
  "key16": "5snx5Jr4EZCDajAXFruTRMyBpqb2ppZv5mZCbe9QcurY9zqGvzw1yAAM7PJDVLHn7x8YGLcsmeWUhNa4bY6Y4owh",
  "key17": "2HJNtRLMUX4ipCacYxdPGjUgEgCviRQzMHC1sv21gnvSHsmkiwbrWYwKCJGR9dTxg7V6AL85w6croJnLMRbd8fdi",
  "key18": "2XXZBFkieDmRcDFZWzUNMURdSFhsR2pRXQmGvEBo3DziKJZ13fpaavRw45eHU84CVz7h6Qdr4cWkx8egU4RuW1JP",
  "key19": "MbHqs8RuwQsL55KC8vo5jQngMqdB5NdUitbRzhnGUTCRQ5PmGraocEU5UteR5NQVwZ537xGFraao8vGDNWehZKb",
  "key20": "crAAgatrack4DjmYwtp6VeKbzaG6cx2darfpqhr4wMW7Leip75E33UM3ajKFTNi5Vb268XSsRh4opZJzdaL86Sa",
  "key21": "59zm31sFHfWwyfRzX46j1W1hGB5YGYpMxb3SBFu8Fr9SVffEcXgcsKCnjzZ3EJaB4aUBGNCTfw7ZsZ8VxW4WUk1M",
  "key22": "3PPwNfES6g7cJ6i7BfTfXC8jwR8SMgtuDmM1gMNX79h9yEYZZA8avXSfrMHmPFK5e7yA62phGnVvAjEPZuKBdscc",
  "key23": "5Eehh5wAL8nMcRMtywD4m2pt1t95rk6PNYznFLrTb58JGUuN2atk14pFsEpcP4umC5WAS3u7UgqJBFkZFBegGosh",
  "key24": "5PsxEDavNdKhoG7SB9ykmE1XtTvZoGKc7ECjpfJjMeXF8AsFH1bvSzGLLpdhbLombg7X1hi1nkjev14rt3PsQ5sW",
  "key25": "57KEDLExhagnprEZqAydNk5M4vYRK4RR4xGQmeBkBR8txphyJdJNQPs4HzA5RdPBHkcrpGzTafXpAW8vPrk97A6c",
  "key26": "3iwVF87Zf7q33NGe4JvSsnTENAD1hQGZ1HxZ3xudYaPBCeLXg37d3mhX4SRwMgKyBJ4PuAXNvCCDLKFYaiUpDEpS",
  "key27": "2ShHDTCTNxD2TWDZLb5mPcphmdkc3MbpTVhe2aViMwAjc2NKBedFKuPcek3vSok2QpcTw4PZnYjpZWdgWuzvskyB",
  "key28": "25bFSpZ7akji1spmdz7JKwAoG8VkPLwdvf5U7XRgjmj2NsB3kPjNGdFGk5CaztX4AvpUa3BtZZTfDZkzpDh56o34",
  "key29": "Z9qfhZC31v3LzZkJFU4eQZR7zWDfG3ZtwpJhXNwWfFVpZkswGWrokVjFMvTUSH2aqtDABnwMG5jQCAdSPaBZjiQ",
  "key30": "4PfWCmJ1wqDJRfu5EFjSKqefS2hUzZ7M4C3Q19Rn6wby1UWqsBmEgEgeV6zvPhDatB4jPy5itMpswEqBPDuZm2Sm",
  "key31": "5vWkjz4ygXnnU6AFMjj2YpDi6xwaD58TWx322pJRqc3vodLtdcXQRytNxp5HgEdzFZftgBig395YjuPA8UxkmcqH",
  "key32": "oezTuGtSheb2VJL854J1a44oTZAinRkjnRgCcrhvBDiU4r8r1SBSjmcVGaKjs59c5hND1yGa3f8WbfH1D48xQkY",
  "key33": "272ikPC7Ff1S44c5zAPaZUFvvNnAh27FtWBnqy9YeXm3VhMkNxb3nLy7WXYgqcajeUjQXhh3wzVCGso8Hbh8oKsA",
  "key34": "SoF7KC3M7krsaNoJR8Xr8RW7D1wUZc7JdT4Y1PNqThgN5FATcmHWG9zjdt3StZS7UmnFGZfogc4dFaFbKMezXHK",
  "key35": "4AwxNSVBfobLsfChenJLvERE5HE2UfWF2cmRwjUyxgLd7HviNSHd79Sm9rJbjqcuW96Wq3U8H5xbtC58px4F4oda",
  "key36": "2Us39CoCpRBk2423gmp7p8ne5KKUqhp6eYuWnkCqvc5eYEYC4LJZjt2cB2TGqXK92pL18BLPHwKFJfZJUgM1nJx2",
  "key37": "2d3g4WpnzUp1vF28cHjAah3sd1eFvjx1UQtSXAB4Tw6XQ8vRL7QQtyfz5KuPdZSXXJjQ2uhJ4c8xQPcjSXi5xETY",
  "key38": "wMkiC4H5Znv1GHrK7m1sbdN9A7z7rnQA6Ta3N3b2JmZvhnoHRvDyZiwmTX7PscQwSJEWqmhi6UrzFNjvTiGyPuk",
  "key39": "4Shh2kBaWyNL1N5wUgVr3QdStuNgus3i9u7q8zVwAnCEtm8sLshfmAmTkcafwfeGPmLMczBict54XX5yoRM9Gc99",
  "key40": "2T5b5nt5NvgTC9m3vxLsAdtSfeKiKnGhMcZ3Zi6BR4S1uWEiYhb3Rc2fyekF6cnCcb6EwpVjPuU8VhvCgibDiaB5",
  "key41": "4as3xYmyF11V5vCF3xQCm6VzjkQtLScyqjyue8AuwtX8RBDFGXiftMZGvMAZ63bRzaLS1K9j9L4fAwkU5mvug83w",
  "key42": "5tWagneXssV6w5E78ri1KxW4KWjaX9SDPjBfeGYfP8mhyrjc3qoPad9HSEfrGjJhrPFdsXr8WRuwyjb1d1yiUMYB",
  "key43": "2G9SeNKy8aYLW5PvpV9x8aXVusW9cQDAerRdagKektH5T2EhhVGJa2vmaG9v1p2gTFSoSoKmEdSpfsrxndAdMmmg",
  "key44": "4GfSEMuY89NQbZLyVffug98ZjsWsaMnr1oXSDFsAaNaFHe5G6bxCfW6GkEF4AWv56FpQY5bQzRz6rB5xajNhMegr",
  "key45": "LzwgYhj3jxG7wovKD98C5PmukL5atdqaDPvEgNbzfnj7CWS3LHJzb5TpYm7kYLwWzAsGny3PkKZe9TSiZYHVAXQ",
  "key46": "Dr94sw6SZQmPEJ24n7rRs5zqSDDYkHx5yp13B6tDjwE3MujxGfGmwpZMQEMvFXsbJmbxkPUdHuzSfrD5kLAd2SX",
  "key47": "uQjW4Ljj7W6YxJApYA11yd6WHQYA2af7rTizg343ugWSjWSm21sC7GLDtefz7JGX9H1jFTW5pG7Z31wG3aMj28a"
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
