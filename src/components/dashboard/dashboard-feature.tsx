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
    "2WZStCsB1KM4qujWLWTUM72REBukZyhBomg8mCvTKn9C3RFdXDcojcAKGpWfq7n2tuSTfSrwevBEsFPfZky5Mkht"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C2RsTqFwcRv5YQ11REQDsNJo1ov5UZYmorBTDXFEoCaoWpY3AyFiXjmKopFDV2VXoWQV5eZPT4xBkSShu46UtFr",
  "key1": "v7cLkde3mVSJBCuCP2sHQ7c4cJ9bMCt2E7VUp92LJUfrroQvncepyLUZyFNGZswLWYLqioe47tdz8NdUkExY2CA",
  "key2": "UvHbcjEWQpzmcKc9sPkV6gyuAWqS3HAdjxCkBQKNmKqB3y9SBbCm4pxg1uoTttbJEb3GanTq87xH8WXz6sPNnYf",
  "key3": "4KgMccChoQpo2bv8mEdaMbxHKyh9eXzDsB6wv25w5eSiwoAWHctWz25hbm4jv3zMreMotjvXGmZKU3291SZ1NY1t",
  "key4": "2MLXz9g7ZYF1U97Jv67UqfWhrdczu97Gbd3Ukym6oNxy9F7ow7DrvQKUaxKAVDANYeNiGLTA3SE3QgYtvuxXC2T6",
  "key5": "KEh5aczzF75uimLp3zP4HQtEcQLzTy5A12g2as1BWFzxqp5dGGJ82PaaCczJUSWLDMQefs8JH25cfs2CmHfa8nJ",
  "key6": "4eS6LZLo9qnqNuxoLnHJnrH4Qyrju2civAqv9chqb5oV4twztE6DmzziW7zkHm64D1S8iyxQkyXEE2rZ5Spo8dGm",
  "key7": "48W3PzMMjcZvnWfjMF49o7CwR2L5E9RzZGjv4LGNsz4ocozV9Mu5ixpyZPag7E5p34rrP3dUrro96yobvJpGACVD",
  "key8": "4uPxspN98DabqXowJ93xANNwcX3kUERAUfYA2YKnki6di7goy93tV9eZ255J1G7axXKiwRSjtqaYz1MuyrLgyifU",
  "key9": "3nxuiWpWSL8E5QNvUuHraF7oSZHbGKuaXx7jzuD8TGgZ6rr1QXD6qfugARbxZBBqTDhwicQLBRp8WCRrcndKPT4m",
  "key10": "3h5XkE4nUQ1ExLMDk3aZ2SrqQagKZJt8pyyT7VmoZ6xDwcp3cFYbt433c4hbWtCy4oEFk6orwBKYGkcJeDaRWuzN",
  "key11": "2nwZckoXFPdxgWgMx7jcpUSDNTvoj9X7Shqrbg8vNrfHx6nR2YbV3zU9XAuWmUnh1v83v3hXWp7xjBfbzdJLCvW6",
  "key12": "3o4Nswn8DiA6Evzva3Lb4JvD7RBxFKvRYF8r7JJ8FUNdivoxTmuyMrqHhWLmLy2MtCDaqsMyic8sbpwyB9BmVkkF",
  "key13": "rSgRxA29F2ZnsQ4nHBG6Ua76k62aDhsRwboPbEW5GfgGinoL1wnx8Fs2sq4NjhmoHgJoXpaf8x1PWCBKLy12x5h",
  "key14": "3ZbJAjVtJyCPCFThdxbfh9xwhCKaaSKBgPhP3T7CpL4Pq8ZCcHPpRUgq72enLSJ8P75oDmZ7Qs1USQVnh54kb3xx",
  "key15": "2avFaD4pBBTSg4gGxgr9Q1e7Pput6E9w89fnXXK9xwaSfeDbYB16bb7TJAJudJUPoCxNNH7FThFxPn6DdsMW8Qgt",
  "key16": "5qekjzrh8iHFUd8FBdLQCidu2mPivuikXWp8mzo8WvT6vbFfrEEMHpNUFZssYXR3MvDXa1p8Aa3jVSKS3bcBq8uS",
  "key17": "4oX9wBypHtpC4EfHn3Eztpo76Eb9WaqvZcaabJDiqtDFgjYwLHLzMpuAGt76TfWpY26AXwXuwbaU9M5WaqYRuKr3",
  "key18": "3Xyv4tcMzE3xTUKRzerCTfKJmurmDzfSivJj6ffs8W3TuUvLRGThChvG6wWgfdiqpUFvATWhBcEjffvzM11Z511Q",
  "key19": "bTNZMGUeafZAqY69Ycq7xtBLRxVDKZwvJVReWmygG1jqLRFdkkbrKgzuYMe1BZWAqvwHjqdkvZMdLSZDE2Rt82b",
  "key20": "4eoxp2ThyBTxb66QoAt8VUp6r6Ztx3miyy1b4VjLUFq53C1GLigwaAGK8VYhzhkoj4px2Q3yHfmoYGZhEEW8Y59z",
  "key21": "2tcUFKrUDGJBrfo6b98eV442m76s1tvzZLQx1m1PCodrgtykCYPdBKexty7ohfJ4eQotLaubVDEPG2ddbWg76o4h",
  "key22": "3viEV2D4Rb6mhzsqUTmer8sdbtgPjsATVbeRVdncriUHyc2N9WTeZxg9b5A68tYoYYEqoVLHmF7seqY2ucPhLmj6",
  "key23": "2vTdF5MjD8FvLjwsTPedLLPJLm4Hcfcww1Dk6CvLfWTxSz8wjgqNhfkhMBh7VutUWAgXsL7ZaAPgTjpLJGU6SaQ3",
  "key24": "JaMPmo2BNszVeCb2N1kCiy5aU7wonshF1m4k7x9a4Vinijzpjh2K5Ttp8CqwTEZhdBZcnonVT17XTadEHmGzs1r",
  "key25": "KWsDTJcsurdTwLdAqQsEvtmCVP5sXz3jfPKfrtvwwYtShmpsxW71MBhXuGvmqvUcwqPvtXNn3JbpUpUb1m9hpSC",
  "key26": "2nUR4GPEGFUViBnr7Mw4V7oodqM33NsNimayuhiMsNh6AJa8dHQNnMzqVvfDiYWHqvkGY6yWYrytXd5aJ7waSnS4",
  "key27": "2YZuju1afQuPGSpSfo5A13jsTDcPw4mYeBkb5e3Bt2Vmv8tr2gqo2ZNj2fHnt1dgeRAjFwRp5oSDYpoRhWahrYwK"
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
