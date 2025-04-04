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
    "5NNDoYjdKQpxLtimAdbYh5FpTnmhhG4Dbot8KP4DdAmtfQEAukqYjU7e1RSzLQJS693znSv1c2RaYgi3qDWay1JE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZXDbQDta35jmJNN6Y6w96EFP26dKpqhdrtG5owHpWJAhytsgk283EsAFosJGV7Mk7ATeSHuWdEyMw8qRhVdkHew",
  "key1": "3YUgtApqvVDsLUyKLnWfqg1te3cNaogwP23ziGiN8h3EiL3dmN4ousmXhGyeMU1YrNVbLin3vGpUCKmuoaJhKfTG",
  "key2": "2uAUbdwSnVYncSSHrzuPvpaFrqD1TfMgpF5BeWNM15yH8XXvzpdqFgxiEew1cJ3rfF8AkmZrPvR6oC7i1TxAkTPs",
  "key3": "65FfYEnmzFRQVX5TBJNwxDFvtUpQcrZKKNs2nZQuzqm5P2bppk8rM36diKMUQaR2mYq8AUqZ64SeuUSTALRiEHPo",
  "key4": "532ySomHgVwJHCG5Jc5oXsx2G3fYFtdBGNW91WLWatZoAAWeAjJqWXcjvRvU848fRLDCgXXDb3WrWth6eWZzeVtS",
  "key5": "5rx7iFdp4CgMUDKvxL4mTivr8X32MaGURh5wzr566fqvZFQqJPLBc4T1GNCubmkWPNiRJ3DSxMXtiVhk39UhsRfq",
  "key6": "591jVEGDMmgaXM2WQZEJkxRLnJjpyeGa6MPJJwby14x5SYs662P3G5bMQnwZnoJZcNLgX83qCiu8DTqd7tT3UVAo",
  "key7": "26m6maesxjAVhN54YQpEFevfzfPJodQmbk9knQkrSCWmArXG5ErfGS19TNDWu83xTUKphNz1EQtYAToNJM6Y9wJK",
  "key8": "81ujtDwdxnfTwwR1SMHv5d1CNYmcSF5bjSEDoH8o1ztk3ohnipaRE6x1LyVP9UXi23hZDRARAR19C9dCAwCqxdS",
  "key9": "pVCQJpDypHWCmXBvGKkpnHsqCz8casBNeoDeT9FwFfPezFi8eG6LL3v4mVZf6tfHAWQB8C62YF18Nmnnxuy2xtC",
  "key10": "51A66bRuxiD886yT4dtL7WewNPcU5u5wmX85YHUuZmh1neMDV26hZyDocgUvK5ULbKXaE1AxnikRiyevVAy7UHas",
  "key11": "4xvfZW3uDe3rbT1UQSf77ZmV8fChyZqG2CutymLurXnJTdtqPujefvA35WMRBDY3MfZYC3jmqig1eJ9mPF9nJn1H",
  "key12": "2Pdd4hyT6Vh6bu7RyDobruA3ErX5yK196u6ZKZLDTbYjxvmotXRnNvuyP6gLxQVwG1tKNQjuJkfX3zSjv44Xan6D",
  "key13": "5LXabu86PC5bR9wfhuisQeiXqQ4WRUcAuXVPmK6rujNs2V7PGgdGLybU2nZmsSRswebLtH1zKBPaCjV2F95ccTmx",
  "key14": "64AVA2YrzV3wJhiDH72L7TsyEn1cTSTHvp28dWofodT84f6nB6ib8DVLjqzMiKRZuhHhzK9zD8P6WEsCcPGSEEaM",
  "key15": "2wdp4zBXb6wUv6syHFgALd9ibvpCsA7KQy38Q5VyBvzLBuA9W3YhJ4hxi85CZptHFXaus8ELCFZWBCT32CMCrkun",
  "key16": "49vuoNiG3UcT4nBsKvrV5vqAJarHA8d7xFK39K1Xv9j688ahDbdNHs9PgyQu4jAsXr2H7EhsY1XxPZfEf9jKkpu5",
  "key17": "3g3o26UzAKDU7x1tfphXGvEF5qeQaViRC8f9EbHxTS6qPtTj9bCqqYkBLcsSgUkQrva1qPtXAvqAWGw1kXuwAimf",
  "key18": "5kfGXTwsGJa5nrewkYLdzBifXii7hThSEb4Uw3acNdK6K5fjqAzwJCffDq6F2GD1X8ZeL8Ru5xkT7yY1nPqyeev7",
  "key19": "YSL9qPs94WD96g8Yao82MQuZhju7RLqhXqBbzXgRzw7oT7srpSYpF3JqpA2QKU8jKoUj6aNFCtbVpZLVxAbyXc2",
  "key20": "4PJFzSy5wpKa7gJ4VdaQfwjQX8XBXFvUyKZaL3CyKd3KWNiovhWHcTc8zS46rxt2sf8FNLn7BWe7fJxKqej7GwMB",
  "key21": "3wyQa5xQMn4gxpDJ4BmM4e9fq68dE5BmbZghrqevX1TWLiyZo4mGK8QJ8RFay8XL1F6yjWWGpbnyf3YA415s5kr5",
  "key22": "2bHBq7PhDi3uagwnTB6FdJspnLCcqZaA1PMGZehDG6V6TgM38K1WbkksjFqRpQnee8cKq1b88vkoFBMmFMrBVWFw",
  "key23": "Hu6gbAu1jmozCAYhhpF24h4hLJFCYdAgvrPdsQqnwjvgHgCW8tU3qPVPTzD3jUQM6aeNwvfjMesQrvTYH1cutXm",
  "key24": "2VGxm7V2LdQpaHEQ2zBcEBA2LYCpBs313K6G6StaWTCMCQew7Sd1Qaw4QSEBjT7kA42DEaXiTaNtiAkpkmAZVhuJ",
  "key25": "5Tk9VK912pHVrAG4HtoQGDrEULSaAhcNuPz1YybXwrAZ1jUab5SdqEMTcasyq1JxRz2RTpRHsYzMHVn1f7sKGXB6",
  "key26": "3pZj7vAwqijjgT2twtSujN16DBuxiwvQBZPf6PnvffqeP18sRgMg6PPna8aJun4XBHkW8VFn4GRYPo3CcbqAWwuu",
  "key27": "KaQd6WhzewUrVhSu4Wa65WDR6rmUWw2H9wFKvx8zEn29bSKyzbauqs7TNLm4bHGNzP42VkDQ6QA8dXwoMsQh8NZ",
  "key28": "fPtYLX9xoZUET9QNgjZidRrjuB6uAv4PMb3aJ5VwfSyP2WrT5gWMZuWdhQR1BnNpsRRhmhS7bUe6kkisrR4TsXs",
  "key29": "65atpZ1h5ZXVzeEd7dFFJT9KY31RyuPvnCztd2b6fDkFsSEya14E9Ned14yBkuHgHXe1PMwwiELoF87LckURSpUi",
  "key30": "5HU7ahXAe7sxKw2Kf49vUgEGYPqxkfKg2WRwV94YekaR2mmtks3CzYqmuAY1GpQKjy8nSJsjRuU4v42v4XM77LBM",
  "key31": "5EvbcvQinYLRjL4TMMXecDtwdEThD166oXfh4y8JWzgBQ5JCM5oQUikz6JsiraC5EYSgLSu12JkHARc4XR5tZRs2",
  "key32": "ZNdS313ywEHi8GDhzymk53dnXajstN9d6em6WnJnUuAHs7cRBt2Wxb5kKDTVkUivYgPngZ2aqzNhyTyyqzzJJH9",
  "key33": "MqsdJzbuK1r7FwnJG6hNiGRZ38vxAgtTVS2xHjhHtyCv5eSGkF7vthzcVLt5Y3C3NeedWn9aosDX3u8bEFUNkYv",
  "key34": "5MhurmEvD5bTgWUcb2KBfjw2QbxCnJbuepMraJsxybv6xrJbVzK6C275UxMorAvdGTeh9cTJxAZ9AhTsaTFimgXs",
  "key35": "2jYRGeftCnWxQs8KZFPTzNqCRsYPH5q7meQPA3tsUrbd9dnonVtX3655Y78LRcqcoKnPy1F6k1tN7EVg2hBykqtC",
  "key36": "327YPnzVjwBNJLpyNnqP9vN9JNvs5JE6PPjVbXC4pJsfh4nLdPg7DNBTsR2f8bEVieTszcdKEnr9koQNV6EoPh7A",
  "key37": "4J8EJFo18gkNn4uJ5WS4TgJFYGp6bFw6gpLDbyaYUCGomUnxweDvxr9Fpu1r4re94yvVkQ78SJjDXhBHFpVvsGkv"
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
