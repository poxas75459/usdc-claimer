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
    "2DoDNn1f2sh5PAcdjbFKEoBwRT8Jmyy1wmuV6J61a59dHB9C8Mwbeeq4Bm9TgwrTd8DxaNgbLgZxVzDZ4LAdpk6y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sELocR3PpG3CtEt5oM3UMCpUSdsGvgiQeNxEtfkhVTwaN3TL4MxZxPeWvm3zmgBxeLGLG2p6uuNHXkernCX2zDm",
  "key1": "2PvzVeMaNktHtK2CZwABv7e46FH4EDDkPzRvEd4EhFL5UnofYDSkyqdQMTgz7fzFNbicEazXVcKWfcdYPgwxocsm",
  "key2": "2VJXWn7viK4oQoSdhUtGMJJGFDryQSRBQTxaRtbFmA34zeiq45dvusy4bVkV9EWWgr5JyQauApeZNRw31sxKUrHs",
  "key3": "46c5Q1oW6FN5sY9Jc6Xhcjn8ypS35UNqs6oZ8eXLNfYfNNUYU8dJfQcu41pZF5J3Ggpoq2SbQoKSgqNwcoQ9ZRsu",
  "key4": "2J2pj3osecSefAr5BK9c9qfPsYH3UKjQqD3pEhPmFLkVRXajhUm752hgFCbbMQt7nMocaZmLr9q5S8vnxt3sUz99",
  "key5": "5WjjodZqiUBxzSFh9gcEC9Zdq8oBoZLTUif85Q95JE7qMCcubDEyU1smLWVUgifLB1rCpknWpL22jJoPTQzaphbx",
  "key6": "5DjAtv8L1Q6QvaXfq56ZNd7hN5pV1QwACVTwVKbeqqZ5TXdngt2gg5gB2XZwMbSpT9hdMYRwfHsnQWfSWAZZQhnc",
  "key7": "3L4kzNCszXrCg81XWj41qfpzYw5Jkvcn2Ggvjdnuq9irFV354uqs9mdwXq6acGTSCtP957gFchroVByZcraN7ZTR",
  "key8": "MG1YATfBj5ihWSq9pqdQ1vU2jGHtSnXMqCa8JdtGc96hs9JnFbzE6CREwEeWxdAy6jeYb4w4qu48MuoSgpr2NHL",
  "key9": "wwAQJfDGv3dHnmuicLc4DrfVLnUKVeevvSiLM4Wrj1LmsyGbh9hFthDER7drz2oLx5PaFisecdSJgAVEP4bbWEh",
  "key10": "2PCx1VuVqrUUSWxxn1HzZVgSrkL4kK2Vtg22vZTgXfm4W5oA9Q7gtvzfacDprPKXfgTDUSY6tbmGRmYGUCFwgeaG",
  "key11": "NHaoC17F8Pw8KWP4zqnnwA5vf6yiLay2UpTWc5qCtErGjZb7LoMSY59MEuupE7AKtjy7z5bk3udkcZYcdXKe1mD",
  "key12": "2N24HA1Y5HSV3FMfFAsPwnhPwV1d6nKwSP9fUfDS63oKKTXWQkbxGnqqvXhmawa7xBxKmWLsV1vCLKCXCir2oyK1",
  "key13": "537KocNyA1iPbF1s4BWD5ASukrKeb7UkQyijCdYk3rfC1xDCCDF9c9Pxv98heAfAiDsz5ZwZKi3Qha5VjxZTuTi2",
  "key14": "45BL8d7JmrYt3zUKN2XCA754QJPaqZN8owDCWV4jRGhysWuccWR8ojGPiqLrBbzs3wd4oBsr434N7UzTmSy3S3tX",
  "key15": "5PJBiQBTHFVBTAE4dwanmV8uMjQmENcZEmQnUpgYQiZdMKk8m69VdZ4G4HxFVN4VQRNQS54ZT7mZTTXtDv6MmoS9",
  "key16": "2v1D156PgiyB23jrqz5fMkQ7uPoNct69wdAZkzFafkRKXWCW2MSeVwQAbLgeVrZrcfzy2h98KiUv39EETfnKubEV",
  "key17": "43pxkfhBieKa7Yb3b2VWXJY9HGeaNkoPZKZDJRfGndHxt3CQydXLkBy5DVU21sqvkC5Jw2Gz1Rrhi612jNVg9uQx",
  "key18": "tpFohfNYzRVpG9L8pNGYVL8YXZm5BUKCDCYwCF5dRLaF1se27Hsqm3KUtfXTqgMe3jmSb8X6nMXDWBfG6YbNf3c",
  "key19": "2TF2nzFfFLyAnqeNvK9aq3aS8cQ1YeUpGXsWWcVtd5RB47wV3kEirtmLk2hzJ8Rsa5icAxhMasJbK4XxBHLg3Koj",
  "key20": "22tgDWXJjSkWYXcjw3T6tSGhYqw9KcnZLs9vhNWcTTx3chotTnFHGkcyxpUcmQuSrmbehPPtxf31heYGSiavX4Cb",
  "key21": "3wje789P4aKPXkuagmhmnHZ96SayKY6b1v64mFnJAStJcq3gUVGouV44SGZo6yjhs88o2zS9pdQResTuPZ5cCgWc",
  "key22": "2di8LutzeyjRTixqtdtgj19rTY9o4QNvHJZLnAWK8QEMhxG8n5HS4w7LvATvZSoZE8UKTrU36M3sWdFD8Zff57xi",
  "key23": "5famMgBQ9iFsc3BdSvwTxUVcDFJPDJSvFVdwp8jCLumpEMthnVnthLYWZYNEtKiiUtmRRpHUYMrZ4xjF4ur35uhB",
  "key24": "3p5XL7nYVtyNxJ4ZgL7oERbetFVAuepQUnuLpVynJbUkvivaXU1z4DSRuVTFco5i3vWxP8sf3etWBHR3RZwy7voB",
  "key25": "cF75emheRiTkKtPwgaKGSdxExA1GoP1NYxyBG359K5azAtF5rgJwYMAppxS1RKoZi36iYFvr65GnD1WDMmoJVT7",
  "key26": "5AaZcFJG1GFkCKZ1XP4UAETe2DkDed4PaLuXY6Mg8oKRec7oNWtCzMRoPcD8iF6b1u4KASsfPqaReNkY7tPSBnb6",
  "key27": "2bCffKhSU2cUdTfzeS6AqtMva3edFc99sd1pPXHh5ZVLkkxcvu9ZBmvNqhbxQUP23yrwU8qXNtExzmTJ7U92DCZA",
  "key28": "3wf6gbiLwZGKYpmT8KN9pf7cGWkpsn5TE33QREkG6mQ3BZPJfD8XQ3K5t1vRhgXWwEBexim1qdbtFz3ifpGrsi5W",
  "key29": "4iwaDDQZvaGe56YPkc2vkgmiakb9paggYBb3142vHHawouXLVrazWZ2iVqDbC2nYMGtSFoeNzR5qMr6MSWKdJtJi",
  "key30": "5dei8pWK8ibqf51XKQvWwmv5s3eMgfPhSyN928u73N57MEKrwQLwJhgzLnZrknLxnKHUNohNnspSPjY5BbMxXtCB",
  "key31": "22XzRJ1XsyDbFxZfo9SXhzJNqxjD4D2gx5z88MXLYnndH8dw59W2gynPK6c7b9QjR7kU8epm6L2tuseWsajgG6Rc",
  "key32": "4mPLxuCNUjadfBbWE28ehR7BUNJc6EZNXZkRPUsxCCuTPgAS4dMKteqxUpMJSYhb5ZaFQuqLdGe2T2axy7j1C71m",
  "key33": "ifEVpUjbxNpDwipY7hJwYnXvMDjfmJeK2VxeHzGjEqhmexJdfP49mWxy5AhAL6uFGDpCBvFiTAF3CWMSjpugn3P",
  "key34": "Yx9y7eoqoy9AFknWj5uyRyMycx9qxYhtNeWTqA9912HfRT7qiGah8MyQ7UByLtx8xK2bstxBTQvdNGtS3du3C8U",
  "key35": "5xdjEBtuzXDLqndgm7xkUMnDJ4M6BuwRH1bkpPr6TffjDwJZAmjK9o1S28p7HhG8wY9r5gYoHaGj3d1CEkrCG4Gd",
  "key36": "2EhgGDGnwr9dWjrnYxn7Dnie2Mj7GXniiUnbqeBfVVaq5sPuGCx8UqtH5PUJyWzkKai75XiQSGodVTkoLKDdvqqQ",
  "key37": "32WatCypffAjL7ZoLMG5ipvgWSgC3dvyXbkBtHmTanmb9VSZymQTNcrnreCSqmyq8DFtKVYryrQaA55BdwZBiPqx",
  "key38": "4e9WM99j3DpSg9mVkwtoSccG6VtiFKJFhH4ysypgnkmcXHrtecFBD9ggMZVdBAtQupwDmXoZfK2WB3JkwRcaA5Mi",
  "key39": "3NjMwPq9jN6mQtvHZPbQSsv4Ru3egc1ZpXVnBcGuBnkcjBf8PFnQP6naxguez2CoKCTmrpsXQBXzihMYF9xGh8CF"
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
