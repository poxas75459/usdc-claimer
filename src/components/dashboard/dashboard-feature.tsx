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
    "2UkNSHzb9jPPA65bAfTVQhNU2jDhUehCG87gzBLw7kekspJuq37kTHGNwRH8PcvCSGMQwhQikgGdRwVtbB8TAg7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QotRCP6Yxex3T5geU6EmC8iQaXecjhjp9vUqnPCWjAk8LnSSxH9aDm98yScdnWYsLuPjmq5aahTondY2ru3KGvW",
  "key1": "3Lu7Te6VM8U8ZSs3pw1fvYT4AoqjbXv2XyZXMFiyjHn5xNjX4B3Qr7k8BjmALD6YX9HceycVgFbnmqBAUhq2VUFw",
  "key2": "2DiRLr9x4QzqSvUtFxt4u7pUM147D7yCvAVPXVZKYD64uKZaoj9bXePmWn7yo64sFcLEXLLQhVeEWAF6rfMgb39P",
  "key3": "5C3J8J1tbe5B5FSKXqvcwMXWMuv1EnXUcVtmdSSJKYdW9rUR6N3FLeRAuY9ia3ZuNGBywzTKFQR96p1C2F2LfVsx",
  "key4": "63sJo2AntT3Yg2HaPRjDmiCjmaSUP8XGZaqJzugXXe9PRQKHohNg2ubTWoFknHx4618se85462o5L972ChULmdDG",
  "key5": "415YR4CdQGqVsgG6ak8tsWD4D71M6UUzApJkEMfFWAuRf5BYthiiqSQRGw6wck3mNwtJiGr4k2qejGrfH7sefxdn",
  "key6": "5FZEAUZ8JYBqvxRN8BqmWAKCGBMV2rvqCr8BFuaZV1dowF7EXhmadyXHtksr1vBsKCyTR8dHL1d8Zpv21nfDbprr",
  "key7": "5bShcBP2NxUNJezfbZguxFAVfRPoua29TUbNYhhZfv3zvNJcN8CZ7GFop6zXZU62emLy3LMmRQGj66pxe3hqNGqa",
  "key8": "27y5x9AcSu6CsDRhwopoAsSSBYmNp4nY9Gr2avsawaco3mxTkUo9pzVhtdubcKopzMX2zDsxYDSRqLi4W3VVNFWu",
  "key9": "5yjbPzppKZ4rKsX2Wiepn66gK9Mzfy8fHXn5YJuEdzcCCmqy1rzT4n1qharWZ8NTyhcibUJdHDXEFozbdKqffPLS",
  "key10": "3DT9mvxS6pnvpiwG3nDEjXmrjdqQkVLEApnKPCPwLSUHXzwmKfFtAZyn49pYitRRpAVvJNFy6wdnNamimJmShUut",
  "key11": "28zPcE6ipae1KPco4QSBjfAqsWL4jcpj8Kx84PxmZx5AQV4hzrBgf7KPkihJzDJdayTDS8acbP2xLToahsoskmgC",
  "key12": "4d9Ahz4d8AcRbEKcPT1A9vFX2fPCifgC8KV5XEkWrNbw29nmjYi5XHJTKvAwdSjzwUrMi33qxZrX1apz3cuymoSL",
  "key13": "63SCHNX3g5u9Gt2z4Anv7ctD6ZXRMsDdbLsMSTXyWCJ8bkrbct2tKULpBUykdH6NR2cdAcqbgoxFXy7vqmrJSEe9",
  "key14": "3dKughWMVa6LFNkQQUch477s7M5Lw4gZzg8sfRtfqqyeiJtAPiXD2yZvAoAEsmhzzT3GhwYgfNyCCvj8QEpyujUb",
  "key15": "4gFtLjmL9soRQbB9ddjV24bqPD28bBcfyjakxu9q98mLQAMoNt5StfWswPCpibvaYyDeuXEDtj9ZgQYPmZyqwfEJ",
  "key16": "pkt46cWVCbeBTL6KrnDAiaMSsKM3LXufytPdrRnvC9qdszZBDfhUmVZDukZJKnfwMig7UvzcPgwsJic6nziyo3G",
  "key17": "547XTjFjtr4CsXN56wCdX5jor1fAWbyBLmhgSEBgui3arxYqDK7F3yzQWxnWor7BhZC6HfDaVyNJPHJRKW7CsgBH",
  "key18": "42mGzsk1abm24oWVZhPTzGThBibcY8BxGEML1LkUspUM2KN41rLxD3pav6VAuQCke3jQVPZPDYPcmGMhZgRbY3At",
  "key19": "2fJWwg16HFS1rryyiSzjHoVo9R9JskPQfmHJAc2nRDxw7ocuBrVTiRcXf88B3dCqmxQUGoFpn4MEDsP7icmYcQR5",
  "key20": "4KWnwupdpuF5CcWF4Eo6iCZcCmVxzMQQyMgk87FVY4N2eb1Vt53KPp6CWBNFhtga7fVLASmmoFAEMzS5xWDCDx3o",
  "key21": "5HczM2r2hn7ZgbhixAFnCFH2GkRHimKYgwo25zeMQwK5uq6ckA1KZa6iYvMz55di3n4Pzsuq9517jN5pX52ShVxJ",
  "key22": "vzqr1Q2PnyKdabZSefEU8gfjMMWshkqiknQdVEpjABS36FoYuDCbLkZ6D3mUBhEiEUHH2GAgQEdhEeCazK4R5NN",
  "key23": "5igRMcmwaxdYNRHq1jeAnkcudDFGRxG8xrKAbDc2NQUqRHQ8yzVmF5PSyECpVgWDR1RkYoVA7LFMw5Tss1sHHLGe",
  "key24": "5fti4SG6VLZZk9pEo8JtSEPjn7aoRDYxMxN2ngmXM7hVZYyWPUuwQyQRGHDrzMUnsAe4M1JDqjLLKib4zes6hFLX",
  "key25": "4LXNEqeK92MpzPmyv2oYXUJUDAdSeYD8SLhbxo49VdMgBxDWb2jCnUgzgS3YM4cd3z5Nf2y266cVCQrWmtnGZPRV",
  "key26": "2jBEXMdeyAvK69FMdUZG2dExYMYKdSs8ESeB3wET7XtQFMetryCzkSQajk3zjRvpx42QtkAG8FKfRJNxzjDG6q5c",
  "key27": "25CY6AtAUoQ45uTNRjqn5LHH5k7vQdx9c2csqKqRafco2ZFqc3FxYiG4PWF6dJAB1E13HvnCaMYN4XjajxnHpg9g",
  "key28": "xSxQCws661YjubMAuVZtS7uiZAee8E3nu7mrw6jNS43bfcaNoMHbAvELHdhv3wgxrwKA2n9QovBJziQnN23YEFg",
  "key29": "2ZaRQaw756Vx5SbR1ia7qkoTuU9bRKgYiP5RMvCQByjJU7FWvgKJmFHNX29cPX6aEaCkhvGPBmZwNYm7uifnFqKY",
  "key30": "2VMqKaAqDbDg7CipvzHYjkocctc2fBWnboDhLVYiyNcbkUUtZwbWJ9ErephTm3D89ViCeqFcTdUKJBUCg6k14G7J",
  "key31": "35hyFSnLKY3e1ycw2Zvy5gG1gbiVVBgJ7MAdJFR5ooP6u3eJcwffbPt6GqU44gbDCn8uYK2UPfEnQHNp9in5D5JC"
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
