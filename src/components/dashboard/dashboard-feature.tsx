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
    "3D8R92aSYwgNpVotrXeaLniGGCTN9m1bkBfeAok556JyCrr88SKj8KA5fy6xXxcjYibUaTE7LYrUqGCddpagUBEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BB6fm3GN1UW6jgvrBM3fHvReyt1Rcy6S1s28Gk3GAPKxsokYUjdLQLGgLt3q45X7PuaBbshV3pLj9MN8BTyEA6b",
  "key1": "3Q5zmPuvtkJbNfgaJKV7DksSraaW8RaNkhr3h1129cF3XHcW6GEvZXMd6c2optC3xm6GwV4njAviMQxYCjuqLKXK",
  "key2": "4fh9LZtLBX2iTtXHecFg2fziqRvYr9Q65mTYiDfFoWDdb9sek2cyKwxWrfJAb2KE7M8CF9ja4VM4HmVjS31q6S7k",
  "key3": "2HxRyz6LoYv6QtY1h8h364zfRDery7XLpYfNJip6nRXchHjB6yPTwiqiWWcnmKQVsT2Uz6vZyLwocVMHRssiEY9Z",
  "key4": "8D3gDcYpDdFZ8j1FGK4Dj9Tjg4yyArGZNLzxJKbVpZKSfWYL7dwShv9mvxKccdWrFrtEwYSh3gKwZYZ5fCthHWX",
  "key5": "3aJmwbaBQ2pUHVbFwBkY8XGVdwnU62hz33vcMTxwwqZgkaJkr216JWqS77aiENVqqaS87nZ3QYs6ABj3RRZfFNM2",
  "key6": "539wZVKyKoJTMHZGdoSin5En7hcw2fdnypSdAneyzdSVf5QJV7AWuSrUi42kQM1wHBsoQxLe2VTYvdcBMBA2DZuc",
  "key7": "3KXEA25qqZWGPhX7dmEKPLdYPWTVivQdh5HPqAJbqHsSKGHxZqFGXTgeKfn2Df683dMoK1bmZDAjQmCh7vAq2dKA",
  "key8": "3UTpc3WUbJrDYA7zBmjQiDYwAJ1Ezv4h3VabQT4KMaVfFNUBQEajXJmYBX2it9JEwUkJRzGC1QUt26o1sKY1Vqnf",
  "key9": "3Mf2Bw5Ni5gJVMqr6Vdkyo2dzfkJgbZqSTUyB2HEWcSxPrgTfyj47Xem6ZQvdr7nqRhqZeWtbndChxM76Etr1zT4",
  "key10": "2P9kVJ5zYGuDhbdUwffpePQanEprcwjXVxfWW9NhhbSU6xtLoFbjzmUPkgvUGMUD9jCD9TaGeMcfj4sEDEpdvYuh",
  "key11": "5EqzLfNqypBY4ieoTmMUTzAoG9JuWdDta7W9aqnAW6PAvX4wcUm5zZkRLm8czPmpjpEmakZjn3AC4x4gcGU3R3Lv",
  "key12": "2LMM38oGchsqWAk2eBk5AirbaCEAKFAHjRcZauzAB5j9bEdv76jukJ1N6Awbji7hmzYqi38xhHeBN5Akrku7wQWy",
  "key13": "PkR1WkREvSmLkWcuT6J2bAk2ZKhJarYonVJVwCYs8BwB7pFyVLxbriBtyb1aCaXrjDgNwNeiaaLdJf3b8FpPoPV",
  "key14": "3ECby1DRSy2KFgyt1BQBtLhN3QV6r5b7Vm6G8ZAaN2ssywvct89iNcMgVMieCS9SfL7QRRShTUhNq7Sk3xgdcMop",
  "key15": "5icHi1354UCwMswexzL9VXJfqNpbizyNsp8pcksZAfYMfk3FeVfkqCuj259wCvSVEt3NavKKLJ33SqYpnRV1fP7z",
  "key16": "3TQhDkGe9X6cpRfmHZoW5dT8fsxoNd8ehhp1V1ZmkGMTfHQqNg8eznua5y6tgBf29boZGKBLiSNJQTepmGhYL2wY",
  "key17": "fWLkFKfniwUC2oduM4P4sGHFqqMLu8mLw9oXkLxDbsup7WEcu9pK5ARQvyECCLyN5a6tNSYocPEnac2hLUKGLZk",
  "key18": "44W2xvypCcYZ2sbbL4LfgzbXetW6m8QwC1479A6okqRrM1tdnAPpRANL8gbvjbxBhLLUsg5cfQMTS9FiWHGs7zmy",
  "key19": "U2UgsL7jiFD97btHz3xtKz5jsSW1Kee3QGyWRXMUNS3ojEiMwbUruoFzwAiDvhxmnGhi2fsJUGEUN3o1SuqAyTv",
  "key20": "ZBvkVAKVjmj1HaxAM2Vwf5AAweuWQsAa2ZzkiAeaePu56tu97oWKyV1ZQKXbzSdSMox9UgxnGXfQEV1nQqo4EnR",
  "key21": "5bLFMeFqWPHFkRZ7r9vxryW5pT5W8x8PunFwBVCo5wuHBDx3jPnbU1jH8DD7cCqUseD1gsS419dGsMJMKS5veAXf",
  "key22": "2sUbZvrrkatBvqphi5KQto4VzcG41YW15QddAAFuJHEXc24ERjYTZDJRdjK4LeF9mKhfeWWkHGrEpo3TvffrhsHr",
  "key23": "22HcV7HLViSJa2NtLaDTEUrqq1gtU99RpsYNo4pZzWmV858dzw8MrqtivAVeJPoDCBATXjw6xEvkNUod61V5h5Wm",
  "key24": "3c3VBbxvhAwCzzL6xoQrNG1xCNJ1b5ZoStSTzKkXGCECA36TSvhntmuM1SmCW6VX7TSnjASWAr8nYGge5Mr8rYsC",
  "key25": "5HccgbXkvrjhMRVhqtVjA9ia8LTZ84Gn1wmo7psCpnR1z4Zjh1X1MrUZvBnqS8zMC3h6rK8p3eicDMPL8Q6m6bA7",
  "key26": "7sZoiAxxDcVFgvmU8rbNARYzPz67bZcKUDKfw2NWkDfyLSY4kcYbb4vu3Ghh1D5qV8MD3CRxWjvn5sKmqAnQ69s",
  "key27": "2VNUsUuCfFd3PA12iesqyYebKuDgiptLc7zrfpjinznssfE32346aWPFWsiaAJh9yNvumKtBfRQ7Mg8YZMVhBdZS",
  "key28": "5Fa2hVCo2JdBRTEaqhcmXZDdW3XJr5jSheB6FpZTjTQuG5aRAuyBsURcF3L6DCLSjZrKp6Nw9HYkp8vLCcLR2d28",
  "key29": "2Ka2c6h7vyqWfpNpBnTFqmkuo7eZ1TFjJL9bCc7wneU5jP9EBEXqX5c6Lv1WCqXXu6jXTxhzikPsWJCPpA9b3dsj",
  "key30": "z5rx6hVurDqWgV5xPEBbNYruieeagcT6Yvt6aU34HwRZmBJqVNtNbUigmrXbuC1QXhuZvLpASMpQNJK1Xhqwans",
  "key31": "3rNs7SDiKB4eKb8rHDq7vVxWhZY444C53dDv5JAuX32x2twNhVT8LwjtP4xSacYkygVWnUKMQWLg6d7QSSkX6FBq",
  "key32": "5YSH4p6UJMCvzHnaJj8vtXW2aq6W6tQEFmCP6qMFjF843syRr6wvvqhvyLHkwXSFtPi6vKhxTa1WetpqYDznNKzu",
  "key33": "548Wd66Pw9PqpsWcVpA581RcTwLbsCne52qshGQRVX2ZLzpuUpPXbkpd2qSrsVwede1gjQFrKj4my6JyBEjgaVuR",
  "key34": "54Z4cjPiyWXvk6qKqdkLk3Ur1Vt9h1vA812qfX1pzoQkDxxtVKn3EjgP2rUaHyiegApbBePiwEJcq1hb5qKqEgh1",
  "key35": "duuXWZGK6U6eXWT9P457WhsqH3QKVFXDdw4bS8bys4zGVu85HrpdAEsi48wAZdCSqbH5e8UhJvUnnDwDX3UMxxr",
  "key36": "F6tG6HctyoqLfdf7sbFNQuX74AgPuu6r6gYSg1eApE1bq4MPjRFKirX4f8ZKrHnsk3BzShyRUUu35Ln83oBT2iE",
  "key37": "3NzkmEnsKqUMMaRZXXMf4iCUEPCjV9fyjVY8wAm3PPKmNMiVysDRjoESDAHZtAtSFLUKBdnMxUdXLFrTAaKENjmE",
  "key38": "4D7SFvqEXcwQnuHMgyrMehQcLPskrStfUQ2iPtQFgRvErbZyujYTM4BqFiVRWNvn1zGqH6JGBK4PJTHxnVPC3oZC",
  "key39": "MY6nP7hTdu9prghuPVVEnBqDbf1czqadXWASCZawqThPBTdzwNTVEGEhYf78iQRyhwWDGGB6ydntLwoCkjrVbEw",
  "key40": "3qVYoBNVTj8sx5bzKciySsqgGPwjKXS7wrL3HEbiFq57kF8N2RGtgeWgvncVYABL2v9Bzyk22VvjQk56LQG5LMKL",
  "key41": "5w5nc21dsbeNJQkqiBH9hMCbF5cxbaGRjumXngFey1NqYEYHmejHjuphmh7JFcaYeJ8fuauK6gAp8bhCNC3HYdQj",
  "key42": "2gk6NQd593mXvkRmM7Fk1u8pYqgtw6EWi9xA1XJXPMvzSKp6L1hCECB29pXoVEsFbwLZAWkbfLiTTxJ2Qd4Q6DAc",
  "key43": "2AACu9yqNZqUBjhC2Q722iiuEnV2q7iwPBuKrMSw6nxKQkAh2Ygnor3sCLJUQw8d7xqtBMHmwhwqN9WzKLLAPNNe",
  "key44": "2EEDRi6me66TesCmjkqtVRtdpf42MHXAMVcVvxe8fsEEqCC3zuKiZeYnwMt2zGnQPeb9M8VhGGv9wxH83vbLnxbX",
  "key45": "3ZrxbckxGECdsAyLpgi3GiHF1rCcsD1DutF3ijffGRDw5wRXJJ1MrrpjkQq7svAJjoxJ8AUg4zbUtzuKWJEPW4DA",
  "key46": "4qZjVUsGi9xWyyf7Rrs5BwH8eWGwJAz59PRKXL7jRYQJgQRUmYDyNdwu69B7saw1RsxjNWAB4kZG5dFphJNokKsX",
  "key47": "348g4HvPcScfvwJAmDvJweMFAaJb9CEEsXevJp7cGur6GwSK9Dqo637fU15tYN2n46riXUdVF7oYEGbBiZiAGF85"
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
