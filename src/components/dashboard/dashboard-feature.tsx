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
    "5GkgDWfB6oCPr6pSTfFsHUjKCXJ6eMJmxuiUyorqxQXXjMhUmAjMGWWSAM2npxQyXBusAfkew2mf7gGTGjBTMVDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B6oGSYZhx24bvP2wx4b4yaJEoiF8rUsAQRCWuKNRzApRAknAJxxFtewvhMq5iVM4h2emUjsgXt4eV6aVMigaBQP",
  "key1": "5J8x6A1tFHcwcg3NdVRYeaEysMpBkKX1mrb65MC4ABYbAbn8ZUyFxHuXeGKZVT34TnBGTtkVreAxzKySSwp2WgLm",
  "key2": "4EQUAU4TrQqMRxprQa2SCBumvSwwhrtQNCrJhh8sRp9sJ1AqNLKWNt8hkYry7TedGpVXapDY1DjPRyZhA7Wj5dJd",
  "key3": "4ttSpiLJv4n49KCBTiZokLW41RXBN4hnrPSwiCqa1MCeEWDcjXCa49XYNvidT25JcBGDgpFFZ5VBmt9zRtoAuNJp",
  "key4": "5obUPT7JCSarpAvmTVKFeuCRwzHZNqFpsAYeZCfJYwePrsG1PtUANAvTKz58pg9ebDSi3ijAHriCdNt6EUWTdq6L",
  "key5": "5PZKq1NdBpNzFxkSupc67umbQsHSjfh9wi4TiwWf2jnR3WoCodBHC93ZSugDKtoG3fAebjTTqhKGUL8BK6vqhx1o",
  "key6": "5cKAacMtxMryfFVkY9g9XwjuDKy9WPYA7M1Yei3Z4K9sVk6m8kjr4Cx9qJ7zneEXkm958JeRoFFiXZLwiyhkN4dF",
  "key7": "64cu1PP52B8DTdmNfxtEfGgynTnWLRhXzQSdtoWULYnvMj1TcKWP1vW5xVTVJx7AP9cii6wJaQZLXn46KnvoYQq5",
  "key8": "5HYnZm1MQB3FxxDAYFdpXroAABP2Z7yhYQAva4WPgM32DgwE6bqgiTEEKcDKDFfEagmjSBAzGuWNfJV7LSFbnoPE",
  "key9": "2MjqAoW7YgiQx2FJ7r26bB5yZMYWksc9Fh9QdzkDKWbnEbfiKtoc54joPk4Rw3Marf8TU31CDWBSyx4tDtDUcvoL",
  "key10": "pkaXbSGxqUyVe9Gmu9PXfbRcgwW7JFNaQ1smcf5ZTisRZi9pCqCcypjR3yJ3pLPjGiu7sPVMkAJkTrd7Cd3zw1P",
  "key11": "2fFg2Qjkd8jACvfgyDXrabPr2XQYd8JcxgjVJqhBXdDfWdnmEwSQ66gLHov58PmSzjd8HSH8aDqAyhxgx5R6VL5M",
  "key12": "5eJkSrpYNdXZsKDLeBWdPn1pF6CVaxFryuFEqpXhs1o7HTitT5w1bcDrPUX7dyfzLa8kuvNCCVYgummkHJXbEonH",
  "key13": "3vFkpGkuTjc1jMLTkoFsSwzsrofBvFvjyA4vfMZF75LRyY9FUxexgFMs57kqN4MGKmF4VjXVUy4VW2YBYMdyXAYZ",
  "key14": "5mtYeV3Xkxh6JaP6uDBkwSq4exJzKgu5eu3U2gAt2MTnHBsRs8n5uKuoSWWAbvqTikxinX1kQq5oQmxXaLrABudz",
  "key15": "26R37d6k8xwfDoAccraBhJ35xKVBXihagDs59Sqdv8K22mGz7jeWTDea6rUG2KH1sikqbnibm8dYc7moMZDjWHXg",
  "key16": "67KtUgBMfk4GkJBDANNqt2V2ab67BfkmzJfGYTNkQh32XZseCJiogEwvrLEQoYE8J71GaqjhMtL1oq9zgARH7b29",
  "key17": "5VgP7nGCewqWrbsY8HinaCZPHBKTK7eApDigFoWBPNkwfJvWMYEWHssukcuxMrGXZVFYpr1gZB5FssjCVHQ61jBZ",
  "key18": "3cy83UiPzwhrwhYcdm3Wig6du7SFZt74knYGaMA3J85ise7goccGatexvTYL12vsnpBBrnasoAsvuLfz6xx1juWX",
  "key19": "2RkFcqf1HiYX7Q3EeQjHwvNXjybXfL9ZSKTD755g7GzTowhPwWXdPiDyEryGqEmsKzjqZEdxcgRAgHUP7KJoUDCi",
  "key20": "JDw8XjgbTKD559jedFQCYF7RxdRMHekFgia3aMZkTj9JjYZyDZr79Zg7qCNoECSTzgR37CB5SuDpNcqXLd8fHrZ",
  "key21": "4UWFPeVPd5B8mwNDSUz4GahFRjQPEarAJWvijwPg2a6jUNmrTg3A3Tb3gE1BCCq5PPaCiLudTLmqAfAerWuJbGwy",
  "key22": "prSgaKPMyFt2GatYKbWQ3AXkugQGKp5nAgHkiHC8pSZc8h2AwsYU5UitLLxNEBPzcuNCSoyhmbBpkoUNaCoNj9Y",
  "key23": "2GpCK6wyNwZ6rTfJ173aFfZSrj3Qbo5rSrZ3hjpSA1og2QdK7b4WHWWVPR6UvjfRLQxxQsPWuQfu55SWEyFcUrjz",
  "key24": "4dLMPgQwZCcvmhDGCp74Yz8gbSPctctZUL7ftABzJX2ZFNqSSziYzsfk1ChPkReZHWGTJSR18f4K8itgUn7g2cT3",
  "key25": "62UFYtpv29rZKt6brDSC5BQ3kbeErVt15meSibugzrDtrKnaYer2UqiCcXJswGyBUjhyBzj5XwX6y6rqEWsZMjs3",
  "key26": "TUsAA1BFWzubyxH9rDzU7EftkidvN1v129G9prQPhcvdvzQx7tLWxcHdNpjziFmzvoJQNBWq62GLZs9FSd3yPeA",
  "key27": "3A3yytePDJfgprqziNyn9GdTvEtMG7n35AWwZYTDoHPekgyRusW8yytpqotExcd6EJ2Sw3xkXovrgrLU9QVH44M1",
  "key28": "2c5Sb3uAEE2vcQEcjZ3eowVH9nFJEdQtJPQhgPo6wNMxS4hNyHdyqo1Y2gFY2FJXKS1R91MR49j2h4FwYmz4A4qH",
  "key29": "2F3Pc2FZodabAxi2VexnuT1dMLMhe1aAUL6ypJDqWMkdgSVM8qgwPLMmqMbpu3U7ucVRQiYssEsuKyLyF4YiLHNF",
  "key30": "3xHshLQ7ghcwj966Bb2ipA9CegpwRpsTK1m5kLjFfkYbXcGTzyrcjy5gSLfpV1jfKTzE5gVSTqGJ5VUagysQ9i9R",
  "key31": "4MohVACch24JZSPfPdLktX6z9mg9G2Nhe4RpysGKSRGdHSbDVwehPWzRgfowDrGpzFcTHK91LEWHx7SkZs9yXM5g"
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
