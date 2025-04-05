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
    "RiuFiAbKc6hGVkUiokksDtWWxK5M7PDWyiDxYnQaPhDqSxfYzmdsSJw1kLXMnLmc4TZn542BaJGySpC86hJVpF2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LRCtdzprxpPwTSuaRw1W2QHRKXJEANGtZrWx4dFoY1tY16FtTfD7fQbdfMeQNrUc4oFdA899ewDm11pQjPpAA2z",
  "key1": "5bdmCkyPVz6DeJB9WpeapkRtEXMGsnM2u2xqhe9Upw8ZwDRD1azX1ZEtVFsbWyZshSqUBaqrpaTJJJ6W1eeNkrkV",
  "key2": "5e9kH4QtzRLXxFsZKEZH6MQy3JYPh7nsnVKpuYBhUAXgbyRYoeaMwTRYkoiyWSpQ5M8JPCdNXNiwubwu5YSyeuR5",
  "key3": "47918EdpyeB7KAjDNaALEiynknPvzP34qN5qjs9rAa3A826QHDjNsQtFwf4Wqbjxi6aRfrrJGsEBRYuWhYCu5eQT",
  "key4": "2DCSgMZQi1HbDJZHzn4MEXjtAFk5ksgmUioEAzdKH6BzEx4m72nnXKnvEUbrSYR8GsVDRwNJUdKTL42iY1xqtNki",
  "key5": "g7mJiG8cMGiHFDjMcDM9BsKPd8JVfgd2yoRSM5aVWvqXmLFeBJaTb6ZiQrcMdVDjKjhaChfz3M9sshEV1vqZfqR",
  "key6": "h4NzR2kr8gmiHRM2K8MQVwfBh72Qb7Ecwvh4eQTPecMmTf9Z6c3rL5QWNmbVhQhU6LteDgy39YFRdzcHEDCqoHg",
  "key7": "5ENDNaPYDw8tdgkFaPnY4Z55UVGtakELsGAwSykQkNUijxDsyX93sLDVVynMwCSPL9Y5qWuEw9YtU3ffrPnbrWGG",
  "key8": "545oj1RcEiCVFA2wkorru3Vvi5ntRgykWcMBHyLSTxywVYJRuco3hnumuKGWWX1GfqpXQYs1T4iByJwCBBaUTLW2",
  "key9": "2mVM6463U7wNa8TUMWwFudzP9KMVkxxwH2hUMHa6rifk36YxrqLskdGo9ybSZRCAaW9kCD8brXe4iEwfmT7oJ4Cw",
  "key10": "25wLkYLdSncACNAu9UpvLvsfMyFMxdBr7FdkmucQH3mX99pYpkGXeDXYx3FEntaZutuP63wLMYDLcmArgJhAzet9",
  "key11": "5rBPf76TNv9T6MQjhY5U19WX91Rqhq8imAbwxFPFryGSuAL64NMkFwAqfDpRMPTMnemtuB12Z2mj1436CpqDB5Mi",
  "key12": "4ek4F2AwWkGuDW9nn2SzHznXfu7fZdNxaPJCemjDiEiYfCnzV8AuAnzh2QCmTQrtEo9t2S893wqUSx8pKi9BwSCc",
  "key13": "2E8qgibHK7W8o2uZdr7FxpcR8sKQxmBkAi8wUFvb94sZm5xsA9e9WLKCtWbuzrZgqePHGjmdrqHJbkGfn81vDPYQ",
  "key14": "2kX4x632YjZ5nkWyXr1TWUjTby9x7xSVNP9tsr9d1nfV2NkuPgEE7txgqwPSHbRCPctBXcJtEcYEF8suBdifVm2j",
  "key15": "3D39XVQiL2DXN5Rz7TiWA9tqMhMVbzMhZWVWxC7ixQqBuxRK8vFdxfPQTgh39DRgvEjqq5qX9dkKzueSwLQPvNri",
  "key16": "kAzKE68xrgdmfq1wgdM8xsf7VEnv3Lt36ijSFWtDVqSK2v9HqvrVh7aoGHs77rbPStrv5tYR5HRCaG8DVKiwzsd",
  "key17": "ci2WikwRYiGWTXVxJNLqYGuzJXa8kgrusHA9xmJLBw4xg6io7N8u5z47FteFnNQKZAPJwXXy2PRf6X592mxLMkN",
  "key18": "vPY4fbW8bvwqroFFJ59V8RGhEVDAn7qA6275H4T4ABZvML5GYryMf26t8RgTqPV1qT5Kf8HHgM5fPRsViaUiJpw",
  "key19": "4qpd7YftTsjtZZBWF1eiFKiHPikqAqNY9RaYMAZpXfG75Z1r8Sj61bnR9GL34gzDQPGQJGdiTst7qYuURwCjVm5V",
  "key20": "9V7pk1tJKGqGq8ii4B2JJNhhP8AgBdaWDj6JcvLhQ5ZTYNXkjqFE4edVSRgvP7Y12fhd9cbqcowRgorgrf7L79s",
  "key21": "45Gsi7EgF7XSX9KNKq1wzMNMUunCWrwQXMCPMaFYfcZBpi2JU4sgeaTCjuGs6wHFQhRc2YSPXftePHwHWA2hzVL2",
  "key22": "3LmvNDeswuTFCHofVtYMBBYYkEbfALC7P7CxEzD3LoFpvNJVczqJbGuuNhPee1ZesqnA4YgykccC3mcH2CNK27Vy",
  "key23": "pFY3icog5SJ7fN7hadhiKZh1p2Bm3fmoNe2hKSAAGh3spMxw3xR79mRd2nEA2ZPYHhtLQuadTVEz6ZYgUVT7kDu",
  "key24": "1wKgYaVsGQvANvMK1URQ2CaqYBPgcN598pfD1emxGnPmBSewkFYiwW1EB8xebCF6WfgFCDWYbxpZavfZbfk1EUC",
  "key25": "heh3KpARurHWPwqgURjKHb9V8Z1FCeXtk65xUw4yyxTHgjEZxCu6MYet4v9AAhtPjvYFyeK9DyuVAHMoHsUkiW3",
  "key26": "2uvdtjLFG3dJKb4K5q1i9VjwbXGNmAXkWftNXriFE1jPNAWtYXuBQiD5Cq7cq9VChhezHAejY4TWD8iMCyEdKoNc",
  "key27": "3KPZ39iWgEHibD9ZpjaSuFA6dwc51NNUSyacaMQj5pJWQbmB84Txwcj9oJMk7wz9EG5igWiV5yMDPBGfxAKhME1R",
  "key28": "3wt9GfKjrXRNq4YbTMQHNLYYRwpz6AVJSYCMx1tTPZwUQM2sHfGV8B2vCWrbJdeGq7qEKS3WfmQDRqSVSS3KcYs9",
  "key29": "5bTKj9ihjbMb8p9AjHDrEyYApBAZJoDcN5iB3n1XskNEtLh1q7XAHKNZvFn3Vu9Ab2kqSUKXHqjWjmQgDCJKxXrK",
  "key30": "2UUP6ckRTUAd59Afs3ERowNiRUPkeQohRBBfZja2jeBmG3PmzrG5UTEprcWRLXMKPcAu242WWaWB8zDCjQTVqHtD",
  "key31": "xumtuKgWaDdpd79HnkPDcSfk7s8js5vJ5uEUm6JPsoyeg119dBH4dqNMjckgXZx2DxKHbrfVsWuL1FJJxac4gP8",
  "key32": "2GGVt2xVNaAYBdpoQ49nAy4cBHXuMQUy6DiM4FopA7fqftPxkgVNYLbX1X9YoSvXru5b31qCzfP63o3aeYhEBiMy",
  "key33": "2CQC34DAMPx8iPDZPQ8NGLBksk7KyoCpLbvXErvAS7LzS8DdUYzauEU1Z29DFBD2zDXuct84M1LbewjypNr9tvPz",
  "key34": "511Ha847hwioC7YDtYqWhdszeVRnWHGfufvnUEqfvzDhXLBiBF9PvAkiWW4FJRetEEzcd8WkbkJuxTuWLA1w7orj",
  "key35": "619atySK9faB46uYbgb7RzHMkjHJDDTUtYoABc9w6vvHncbq6mcFwXWwWyyhwbCkDmMRYp3BMgJ3cFbeMoH4FStQ",
  "key36": "2SH7yRsNwRrt88esza1zPwmAmeyBmchGPQjVnpumoKt22Bq8p37geru7XmWfpqKpjs1PuxvxaXiwZ6RZ3weFbDhG"
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
