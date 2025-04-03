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
    "4shAeQwg8srv8jJaTYRWVjDWDUK4DS1hFoqs2gpYBrRDaEigtRhhMSYFWXVipXYcBMsGGB7ttBDyGG4ita8REnQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jD2fTK7cfDNW9uNadvmt37r45iB2Zjtqme5BY7MQtrfTWqYNDJfp66xK2qVe3nxnzNhWFvVZPWDc7mGTiuWoCmG",
  "key1": "kYoWLRv39CgD6ikLTRMHigbxxjd3J3QQTqTZj3VTZJAwC7ZwgLnrHzQxfKJPtBGQZbQ4cGiv6b6ZnpkUKNEDYUb",
  "key2": "3UTxc3Hq2fTd2WpH5L5bdJg7m2m6VeB3UQyQoDgu4b5Et9yHPRG9Mg5cifBdB78WvLUjYHdqPJmz5VEekErVqABg",
  "key3": "3jhSsbmUDD1vKANwhrLKE1saWMJHohXQS3oZ372yaPpvvyBNJH3oNb26tYHVXBDTVKjYdvHkwWg5B7tGtFf2oqLL",
  "key4": "aTBcK5mq4NWitWJTx1HtjvXjNGaE8UZFhp6GcDDxFWqk4k5q3mxEMeNwpnMn9nmLGvXWVnV37Qafm6oeaaRpzZZ",
  "key5": "5nz9uQD82QAG51soB9NPVfjntMY67gq5mciwAD6aecnYefKjSp7pTLjbBwYbzwchymrXJe218SpxyA5VMPktajNY",
  "key6": "2JcHwmDV5s3dE4UuvopPbMft8Q4yWMPJQVXnbZrzvpz8cDUD2WbLZ3HG3tuEyQEsvqrKgbJuuNi38eDqUU2zQ9q",
  "key7": "3bSsQLfJNiRMdMWg4pKzXycECbn4zbq6SVERReopwKRvFdhaKeC7HzJkHsJWL8BZY3dAQPTCysAwkFwC9BS9Pjzp",
  "key8": "4fzEtptd8EKujMxug2v3rnrQxT6fqtfEwMX4zEMnuUYzh5bVCAUGTyn29t39jL68g7RJBHk1MojVvfPZpZ8ijBbq",
  "key9": "MrhAQ5GRqAY8y9mreLD4mKzzBs8UpFvf89QCvCiCr1bmxea6wa9rSswrTbV4yM1Tq1RLM6QRzhYoSemJJSxqB7N",
  "key10": "2ksUs4noe3rwo9WPqDmBG6U1vLhELD4DaKRnVCi9jDvDzaDaYHLqwy1a49Gv131bqg5ibZq8hABtA6zh2nxed3qT",
  "key11": "26Lg7LVmCKGyRmYSvuZzcZnB1R1rHBRjpeV8GKBGUcuAyMe3eapwSDwFvF9VGa2uiHZryFjm8zLr15jLFobtbsYg",
  "key12": "42wkHnDtdCMK6hxD6w2Svi7Th5FD9XjforZq1xr6cJ669NwPXZLBP18T3TXBEoQcUGX3UJvzrUUDtJBKRnzLj7Qd",
  "key13": "5RgSmRMrpW8QwR7xPgY3oXFAxQKUgLf3Sd37xHBrTBy4RpG3MHXtnBZwTx5m9YXX64LthfyRFjhfJNfykmSHo9oA",
  "key14": "3ZDbmmHRQuTnswmcj9bd5bby3j2DyuiLk5LMGckUqzZSJJYqfPVzowZu4zoofqaF3WRNHmZdNz8ZUKJ3gQHu3Ttn",
  "key15": "3NuyqTLXHttdkN93zQNuiUAjnKXRXuWD9FYK4H87FfpqiijcsxJRvkHupNutZXSJd81kna8JhfxbKCET5jFibDBB",
  "key16": "XjrPczR1sm8Vp8JKEdK4KsA2vcLKxm4duuh2defxP2VJ29JqyebxhzwVrYy5Qx4sCxCCLSeiUs5Zd2yaCgWvGU2",
  "key17": "3h4xdCTcu5hy2AxFVMkFdsCPZRJXL7m8sAQ4PCAzA4QEWjEt7RkmYidPWupMrJEfGpyasH947ZvdVzCfvrRpNd1c",
  "key18": "3C5VYCiakn3PkuC8ZKehVmTpXqNGpuv4P5T9LGURCpgmmsV2zzLbb8cdemi2MWxumLwwciSYLWFsYE3yEsAUUaRR",
  "key19": "5XyMzXHdFe1HDYN6UovV9mWWbief91rqDaKKLcWM2ckaCsueaSYjRQzTJLSUJ7Y3PyXH2iKQMeeib5tACn9ruRk4",
  "key20": "4uxCqsG3b1AZSaJrece5AXxYoi7y585RRyydsNMizf6AHFknkfLfwBpeXZQksPmENVYgzTcTHCxLtUBuyeqCZHD9",
  "key21": "3HNPYJCSSjfcbYeLA2erXZYP1JX47n31bizRgTiyLK3s6R8Y6x1MCk8hKLQwz2qJitcrjtiReohpUyFFRKW7jNFZ",
  "key22": "5d9mt1AWVwAmi5a1vY2cYqPZxEWkwYXSa9UP85fL2mmCP6QGLFkoGbTs15HgrbygvTTaPVGXhoVDdMpDh9JTmEck",
  "key23": "2dvrGUEyru4hdtxhbqKWATaG7avLJ8n7S27E7NNiSYJhUSRzKpcNcbuc26YFbaF4Ea19dD3eCuZwiXU7VWHoKR6z",
  "key24": "Dn8eV3xCWEheokcJULtkyr65WYfzjvCbGT8j9uSvdDf4ytnadD8SmCsk64nANuthAdpDt48zWdCUga3UJ73upoJ",
  "key25": "3nt9hhLVhjJThCphjYFdikcaD9U8FVPhcrExrHAU6hHACQyxaYN4R4jFuDmakwALzqqBz98tNDBpQ63vRoc1TPWV",
  "key26": "231cLfwisc2P3CYNdkAiyYxcAseoKkKX96D9EXVX21x4fEQqdUNBHko3joMMX1f8C2uvpmuxGB7zAUAL2FuMfPT7",
  "key27": "54G2DAfyTpon9dJcQwCSxDtyT2kojbe3U93NYpDahMqn47W7xXLzipW3Jcb5ez8mFE4iA3Gk9abtRS2rqSTTy9qN",
  "key28": "5RbiPoWtdUg15bUFWMB3Q6CaxNW5Gjav6AMb1AZxG939Ats5atAFBPjFGDoppua5DaQPijjFdTqA8gnRAoWgQ2Pc",
  "key29": "2LbhA65xXhvdL61b7ftvypZnAg78SYcchSdK7753QKoBJQ1tVWaWXf7hSAXS3L8YH5eQZtko2wmdhrZ3AHGnXnz5",
  "key30": "2oysp8u3vubuf1vbNXgRVA8dNNvKNHCTWHXRass2R3s7rMHDesFzJF2Xa7CArZac9eQbEFKZE4eZAUainZJcJqGC",
  "key31": "YUF8tyt7gJcu5X4BcFEMMaW2ysWsyqDNJ4bWvyeswNij6YvKsDoZUmoDRDvzfgzBXyGtupebvuTBDB1pJZbFuiz",
  "key32": "3nznsvJshS5PKM7csPjEWttySV8M4nmKDYeZ1YQ87DuHa9skaxLRwbJEaFbCEezv6fjxGiSp5M7ARxhQ2U8NFTJz",
  "key33": "4HHDYzci4DQQnzGeVz5anunG29y9gkjhdHXMqaWuKJpGFmxn4b18t74qbD2CsyQiVQ9HnHQWmmRnC7mLN8BksMZX",
  "key34": "57Kx5h17BJh1bw1fuzqaER1Udt4fc51c9pbGMhig2g9YYHGJqFqz2XXfjmRKuyencUnyJ6RqZ8T9CCPAR9SBb12H",
  "key35": "4j3ps6tvk5ruBueQxmSEveb9fwCjj5d2qAKRRZ3Lb87pJfiJ3E5a78m6zvLfcTRe4TC71ZABWd3A5WdP9YAT8hHE",
  "key36": "5555EBXMMAEgRcUdVbKJmTejCdyAzECjJvyUYeF8PcraLyMzRAiJjLiqxoMvqWTJkhHPgc1tdwGW3EJykNdyVHJc",
  "key37": "XwsRhFqXv9SQ1sWwEtrt7PbBywHhvroXjMMNn232uToLiH1SywvbCTsgpmg3SUCiiEteHAX3TAxH4Ltetefu5Vq",
  "key38": "3zaACUTp8fqRPKFA8GKiBKGGCMYrvWQyhzboseZLagW4jMMoHrH5eJGcNLi5uAqBANtS6ArAEvFkmbagXhv6tx6v",
  "key39": "3VVb2hPHfjf6RhEHPVZHRockG2aJcaJFqNY1F5brur3yLGPMu6K8rJsGj39WTxDFE8BRTogMipXZKvA8XNY1YzQU",
  "key40": "2gpQ7tgTNaSc6zMh7VUqqVrYWB3haefHQf6T1kAfxJA1CTdMFgh2qucfLmaUen2ghz4h77g4orQoeBkCMM9Mc3Mx"
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
