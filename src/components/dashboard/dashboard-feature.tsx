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
    "yfvRJQVu3Je4gdx1rRNibWGY2YUcN1SZdWEVayhguAazZayHKjmkbt4Vc7QFxc6N7VKHLfQPvBMHk5ZQwVqpZmJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FuVCyrXeqLVQTYpvyXorTQkVpmzJ9MHDYX6YJaaotdS7gtqXugjZt1d5wszbUdZ49bNkfw74YxBhrFT2qGjgA33",
  "key1": "4EVvxixePRh7otnLGGoYGVUTctBsvHN6uXNoCQnUF8dxt648Hdiq6XbrZhQFh2jARrePRQmGuKTukpxe145T2LLN",
  "key2": "8zs6yxQGPjHfj1baHNtRAoPaRBaQQfXe7QVGouBAD9B3v9GYx3DMt6bXcfCPS6Se1GEiDjhUgpJMSpKKDRSemyJ",
  "key3": "4ShRMkaNoqbKPuCek6tVpLRyHPA2XeY9ffSUJsadZDLBNsgKDk3Kn8Z9zHZyXhgtDgkrXGYvULi4T8LrkwHhZ7iN",
  "key4": "52Hgd9nkPALUKSoCddrhvqMkjkTxoP1WCfagSkrP8p3fenrjCSPgVnDL8sQmG7jPcVKKh7pf8C4hZTh54dhmfoo6",
  "key5": "2f8NwijDHYNQQKgeke55JX2yCagJBxqw6HYe9qDFSbKMVBc51aXP17Lfc6kNqJvxZUkRejrqhQmCqFZQjeBnmRnD",
  "key6": "4GtfgyuqmNvszhrKNC4eq3gvLrrmXDTaZ1mfzaT9sSzH1tAwRupM5tWpHbdArm93EAwNJYMVKqFU4Qr3vZQMTDzu",
  "key7": "25gmJJVN1qmtwkbxCgV15AkoSGCjH8UjzC9XsXjZQ6Q3AFZ2QwbFvtGT6fZUG5aZxQiH3CNGP9ccSnqADAANJEX8",
  "key8": "4fBYpj1HJaTKtYBYx6u6nB4Eh6o2rQGLwCpQdRmwaqstgcyGVs1wUtYrHbNAxK5jND2q1uXixyNYPwxNUgyhLBQb",
  "key9": "4GqTqEYAQaRk6WcFFfwmxTrTWWpG1JiyPQLYWA4QtEFRhKJjCUt6R92YZ3zg2UG8TK9iNcxxNFLyCQNpFdBjDxu1",
  "key10": "3AyWZta4RNZ8kUnAxoi4117Sm1kkrARv7QDGv4Kr484LRucywM7of9yaj5p5zZymAkHJw3VVvGwNkAXY9yVfa23T",
  "key11": "4Lf18dLgdHhZSvtUhWV1oaS1T6zjakw5HAmNmfCDpF3PJoYgi99J8hCsqrUmg1iagXN4J68Ddhud2RJYBd2DzPxh",
  "key12": "V6Tmv8myBtJTocCQzXK5YA6ALYcAYQsPVU1ShsqtLcvYdGE28Bf6ePoXCY18DPSSoBHpS3TC48umme2vWWAfSwr",
  "key13": "4Ez2PJ6f1uN81sCq7dHBJqcFZ5CTzHQbzhyg4sesam8SpevJSTdiRg24ddnnEiJv2Z1HtrA7c5QgUFrZDZVm86h1",
  "key14": "34dxZfnVENjESV5Dkft2uAhRNVpfMVP3CaT73JWeACqb1rAUadQ7jsW6UN9ubmMwsYMz9SeLa7HRbbZY9NYUAWC3",
  "key15": "NuNLpLEV817Y5BJ4aEtfkroFAZjsw3tvz8GdR6KmEix5U4ai5ybNdiHZt71aZQJjKJADaGeQdA7JNSYeqzhVz3B",
  "key16": "2wXX3TGzampDNwCUvVnReNLrLRFVn86PMEw8Bb5aMPsPjm8SYkt3Ga49MdhFdpMQp72KU8i9pkE7CN3DZ6m8p73c",
  "key17": "4jKVGgn6ua4TBunFio5HBGoGd3rVZfRdAz6mAjgWcgXGTuiLYBPFCRhRoBopbYZtnUVRP4TCaRDHbH9i7t5LXUjM",
  "key18": "ZQGnvkWspE525n1Fb2GntiMyP9pt1S6cquGxmuZVuepQfjFdxUk3E6otzP6LyqkwbHKRWpaGT2vBXXVPZXbDEhQ",
  "key19": "3kbkjhx6H1rqboHZgiAT3fqveTNfBUPc48ScXLyAQRNEWvDJoVtEY9McYqmK8sRwXNEcyyEnMABmcWSUmYnpChAD",
  "key20": "KhTMXotgKyjAy1XyEf4YFuBCX8GUHEGcp3ZLeBamKFCz2uYPLNML2wRcdngzNQ5YvkXTfKVrdVUq4yzA7jxY2QL",
  "key21": "2AaGo7Kzq9Hhn8aYVvEcQvn5VQSkMrGJz71FP3aXZKRwsXxjJUcmjoxSUmgDkeUDcprKvfdMm8VL14Z49R1BTxrR",
  "key22": "3Tg675Q5k62Cv76G9fRrFCvzqERRRJz5ygKpvjP9TgGbfyYdiK4reZUCPQFvEdbjQsF55u594PkEj2T545Q66ZWY",
  "key23": "4TF7qJr4hqCQeT7PsxuJENcv1ZbPZWs7D9M6jf8a9JCXqcxuw3EhGVegBfpTD8xoPzSsWmZei7p8V7Mhv3NThTrT",
  "key24": "3pQEhy3XCts3H3gYAe73s2UHRDCk6VyRStT69Kk8V4kTM8MmVtb4YHD4PB3UyRtDvYRAWm1j4BtGW8YHQ6MjG8vo",
  "key25": "3MT5vfuF5WCoz8mQ9ngjEFpvPLdoYjY7eGe812bSEBt8TPCgaKY3TRZBVWTsH8SUnoNmQ4P83aU4RrWipgYHL33s",
  "key26": "otCWdGFzwZuVJ8LxyYNArQ1PPuuZbvAVwHgGwNvmmiyxG2VHHeozmUHQVT79EAxWz3JeucKoakiHgnJ7USqnqye",
  "key27": "4eb1v84P5H3h4jRecy4mJvPW7e1gkLz3dsadkRtVLMhGsQ3UKYtrx1NvUtHQX9WeRFL474JmoDPy1HVrt4fi3Pam",
  "key28": "49jiMu2G5mVo7sqZacFNzTwpUzWFetDj2LxdRqeFcZDPfii6dnzrm7KVgB8e6xy31bQ8BFXyK91rW8G71re3P9P6",
  "key29": "Th8hdRrGdGayoTgnDf2raEqjhmjNRtA9dB2hCiZRFin8eXmnDsweiX5SkjKEGwTsjUtT6DCFh1QoN37douyiHcJ",
  "key30": "4soU58pchZEQ4Rh44AdjVn7LWmGVMCiDjueZtFGK3B3MXrHYvTqaEg4PWX3YUTfoy5pKYmznAQT7ENJPH4iMGx7Z",
  "key31": "2q2KwUP6oz63xVvGDuUxztePvZSAjUDK4sjmYonAqwojkmHdhmfVa2yYCaxkE2SCD6WxzSUe5p9kvrc7ieLcJGRQ",
  "key32": "8B3ePo43f2U6sXcybT698q3UGtbjDer659fbaoboZwmeLgShhU3xZm66dEDZMUs5AczTUZ7nciPhKUnr3eiZAak",
  "key33": "4X2B7wboXWJyJEXQWruhhxwKmyBVijiAviUCY4NfDZCPMwieFUh8PxhqFvyi8vZWJsdqgEtV67UTu1EqdR31am55",
  "key34": "5Q14X2tVyZ2aztvX11q7fPyzkdSi9TYcYYD8bMW2igt2x9b5zh9tcGZyyXtgKinR6nmQYer6ELYbgPWj4K4LL9no",
  "key35": "SYSDvDwMwBJsfAFixTMroarUtTd9Htdh4aGUxT5E1zuLtRLW6bfcRXvqV9wKL4MThdhK71yz8FmCLtsumMYCcPm",
  "key36": "2L2cKfXeKp4nkHWxaa7tdbA3YBSJhZx16TehCesgJCT5HA2T12uTEumPmkhPM94uxABwtxHyg76wR61txEsY3dyj",
  "key37": "5kFHpTEH87y8s8wNhqRbMshMNwQxw64XCuGKRHztuZJjdobTKxdMXLXCsuFXzp3GFjPs6muw3pKZWeMVksry965S",
  "key38": "4yfxZoFiNQe47yWbi9i1bazn4Uw2VobSE6RbXzbvUqhmzayquhgUS14q9kWoSBZqxRgPkoNMPkxpyUuC6Zn7kzGV",
  "key39": "2VTEYFyBy7nHhr4RmU3pufKeb8u81oRHV6KHRFbfF9bmpcwaYEvpYrbDdNLEsJRMATRqZrrjrY6J9nNUr9Nq6qVr",
  "key40": "4DbHRGVojgF1P8BZLYAdw4H2irHwAn4tydWB6VtCFXudeCz5yvPGv3Kzk1pq6n4iciLvtThXnuo5FnzcAMEbjqQR",
  "key41": "LdBMX65CoawW7nSQvUwbetLD5vK93emCwvLqzKjoa11oFxeHVRNBp1FRnVgDoTZWZ5SiaTC2MsWrpiY1PVV29qT",
  "key42": "3qEk41aFs87ho2Nd5ZvR6GS3yqfTA8HYzMb9BzQxjfJ7TVdszE2cWuvDvG7YhEFVoV7Ldpikv6RrPhavsp68uqDK"
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
