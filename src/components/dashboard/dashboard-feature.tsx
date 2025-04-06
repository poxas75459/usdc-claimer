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
    "5Gtp3PZevBUC6evnEPG2FTdZ1x1dG6FdrTbuEK8C9iDmLYtU66xRnd2NUojmRUPmBpjN1VuAw37DH6GPgQiCJUnR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EitFAADNR1Qa2yovmCWh1Zrf8ZyUisqd7HqVRYT7uQiKTFujwfHLmBNgrFDEzFszcN1NP11iNCVdpz4x6zDg8hG",
  "key1": "2T4jJ6ET6TCL7vR2FfvSXFjs3KsZri3HsXcg9DH6HLfVsPMesxtNUd6DtWvXvdqFs4B5aKdaHL6JLFX6ntCfbzrT",
  "key2": "2k6Jw1rB5NCy6ADRFznLDdxaj4hmDXuiW2SLtKNX9paXCVNiqBBNowxQJSnV47QnVc3frUPNWowH9KEeE6nRxn2N",
  "key3": "3EryWd13hWYPqFPufUYy6uNMrBDum3TkEdKQMumoGrKWLE5DcnuTxHJH8bSv5ycvQ4t3KmXkX9SFUhH1MyByYfUT",
  "key4": "2d5sPb11dbHdSD3enyFfJm7hZ7fa1NP23ZPptRwfCWkw3sKo8W6b5RbR2dZchwewtfRPDBYjXnxJT4z2vEaQuEPC",
  "key5": "iy5BVrSpfUenint2D9q5dG44ydgh1seiJkqLBRmBj2c1HS9jwV4anD4awE4MPxxwR4f62DUkcHwEcfKMwkuxEFk",
  "key6": "5xwiz3pip73a1CWJDS2X6J7QAH71Pn7AksfGNt61AFRB42RjfPtkKaiKY7eCBbTw3Nam9o44BsgpTdnDUtiPH2wY",
  "key7": "3pqnFJBQ3q23nM8MVCsRuDchcAT3Rx435CbCnBRK4kf9ErshfCB7hUJXvmkBEMETFc3aGmVuMJYiMR3XxF5FCRep",
  "key8": "5U6a6k7hj646nM1u5dCjgQUR9xA9GsaKKxJhNoufpoiQuFK4nZBk4BvAC4xEJ2gdwQfBpBS79CDizAUqPbaNaF7L",
  "key9": "45qAXgNb4PTurnFzrocHC5pvAiQCFSspSp9pzUvPFiDgFh1BQpjbhT8r1cHbrYEYDTiSMFBsX9dPFRgJ42LH7w2P",
  "key10": "24s4SCxgfNYLcf7XXphB94qyVkbRtJgo4D7f2qASjUrifjGX66KkZZdhMQoA4HEExrZ7huurf8A8aLXPzBwN5mtu",
  "key11": "3jH8XGu1avstVRy43Jpcb6F3nGYEXmtdyNc3wbccY59Ne1CZXwusLom2jVKmxaZoC3ntPbBoTMEUKmLgsBcPrXmp",
  "key12": "63Tq1pxqCFiKg37YwGBubBjRE5JxQzErxxQzFPuEp8gymqikvgbzjrv4UcxqgZcLpA6jKXcScHTgmHtA1DF9LZiH",
  "key13": "3GtD9h79qYw2CMSDp2xKjX2LJSpd6okrbSxWTucFjbzsUbt93G9mkiBrnyx5JNFUN5EA83bBQNwsiAL5mReBrGVC",
  "key14": "5VQc1LcGQhcxdfbWA24VBYZKKPWTspxuvDuAbjDQTzYt9WLv9SEjkNfaCC52JiXYpDk2Dp8pB3AqG162z2nZC78G",
  "key15": "4GumQw2Sm42wpwbftAJLd4pWx4h8KtuUwzDWkQKoY2ajHp6e5AcrUS1yRvwwtiKMrn9uJf7nbDd2F8dnoa8c8A1k",
  "key16": "5anGNmkueQhVLe4YrANxuugDK2M7Tszka2Hf8d7F5yG6b9d7FFAM6z7VvUo1SxHr1fjdTwhDBWyBUTMhDwGmJSyK",
  "key17": "2UJEdfNpJdnGm8UxJKTPTREezCbYWWcZERZMUtaEERzei2VS6Hn6pzwYUACuS1s1fQmG1miVuodYsPATYAY2uVN5",
  "key18": "3iRQFRVvZhwUaQL1QUomcWJWwKLRbRFvJE5XqLRtikaxvKsPU5zXcHmNPaTCT9vSTC2EPVaQDWNLT8h4R8UD4R2h",
  "key19": "3TH9W4Sj9KvUE7QWqP2CW6En9j6qruSKj57VWSd5s5Uw61h91YQoSTeQP4Yfzz6epveYnPCv3ySLutYQbbz4Dtoi",
  "key20": "3e5q6PY2Qf5TzC9ycMS72mtDMGDst6k9Qm4EZuiYjfymFYvc4jQWg95Xt9PuihqGBNu6nu5DtJSKMF9SuFPRmNJJ",
  "key21": "5EnzeeYxZSuSij8ZCVeRBGRfgyAW4mcaqrrDcECgkJRs6fLKgQkiAc5SuN7qoTvpReA6oSJAJC48BRjiLCxrtGB6",
  "key22": "3Mxcz5Uzrtt2cS46RuG6SH6tMP9HxVqe2LLSgH5kT89P2szpEHvDMSeMHxNpNq61YbrfAjoib8a4XNc5x1rC1mre",
  "key23": "4sqdBFmhVBABZRXvaaa6YjaE4414jUNmXBwiyzYtXqwi5XVgQWEETABMctsJhCjkWU7aQoWckvy6BDd3JcZLPFch",
  "key24": "583YJiCcTsTcPzWW9KQWanUuF1jxWJJykNAf2Ji61WBoEDPYZuAr6UyeJMuDKuQJGe7UjfRT4B4WLJPMhW6JVgN",
  "key25": "2s7dqDDsiAzaSptFGcHYY3sxaSFzQsTG7uCyNc58JzGBfFZNPvUDH9T4SEzf1jTsRNK1hFxUxKTde2SeRQFXMshT",
  "key26": "5DRZ3AxwqjG2C3QQ3Sago6DX9SfbEFQBUqESXkTD6WCepudwtaAoLUWmBo6gXjqABZaCh3hDivvRUoBjCf8sofmm",
  "key27": "JkEsgS7Vr5qPLwFeajedtHY7irJUidSEL4AQhPERwHj55rMUu8stdrayj1JxBA5zjbksJJ7Y8fchHdwaNU2XZXd",
  "key28": "5UfeFbwaVgW6Ljp4TuYHFDW83EqtzzaJAkuNVB7MmYytYKU5FHnsT68RUvmyK7KWP6wwEC3HuPE5bzmustxEke2",
  "key29": "52pJCkdtnkXgsyyXCkVY8qMTQKtP3mzMayCuzRBwEGJHrhASuNVkHBGZUxgVCve81WPDxSum8hN7U7wjGfKQJksj",
  "key30": "2kyEq7GHxF4Mv2trXrci64CzM5thSmThTAGraHgSKtohpkLtmfuN8wo8K6qUbqpD1UBztx6MQvnUxktzSXe3KoWe",
  "key31": "2WRW4M2sWqty2JAq5YsWVwQdS3vQnkSwRiwdCBdTS6tuQCWZr833b93U3NTUNjaaoQBdsaf4vR5eqRUj8CjmLHzS",
  "key32": "5hXgfapRKLR6kqWhGkEmdPFvLN1fwZrgG58GzBJheAnuQK5NMuMN8tw3xfsKnvz73TPi6swjrL2eBdk7NZCL5Yo8",
  "key33": "ThL9Jd5MMRqhTD3PPXSrie3eZRHS5ZCgVyNPeV8jMHkPW3t2HnBg5cjVfdPUQU5rsx1ghmmXKoBfgMpaUfQzix5",
  "key34": "2PG3qoPp4Dx6SHuKHoEVsrje7Aa4hvLJSoPRfuVKzRg6dRAdvB3QLNNkBiwfwJSKM78V5tE4BYrvWEDuDR1SxRcE",
  "key35": "3CfXc8vxsaVfJpoeXxGGjRFXFQf3wDYZmmcz2hYA8NhZcN7GQPCRU9e6Gwd2LRGa8YVPbAbfsiaFdtvTSKqSd4NE",
  "key36": "2GhvCwCZJ4fw8bExPfwCnMM2SKyP8dGd5EC5tRWZYhDpFsB9ukB4VCFkoinywt84mNViJGj4CyAc1tiouM3aRPrB"
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
