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
    "56x4a57eLUcfWjjCs4qyw4opnqbn7BYQ4EZ2Dh5rkN6yJKshLB68v1xHhtsqrGkKrU2QLiGAMuD5YMDy1jHE5qvk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QSieGzexMfs7FykGTSh2pYrHAVStEGZ9cuc95NeywP1zjUpBN9rmVLPPx2s1HQbRoRdqTW5YJ9oHH8Po4gViZvr",
  "key1": "3A7osz5ntfEajmvnuYA6fmR1977GZLQ63gGDj6pQCWk3MEnfYxjGA2EBHN5nSuznugzVsyGvT5QT98MNWULqbcs8",
  "key2": "3yemuSb2pfyRQMYP8HMWQr6r8o8t2WVMGHqJt6uAyZKedAu76tzmFYErXevhvPNGBSx1ncCMfBp2V4PUrkvs9YbT",
  "key3": "2kpGUehVs1ejpkqSkUYHUnWhXBEouH9g9zMfCdMjYU7d9mkDXpZBcuk8b49T5CoGcPfCNYnS4VJfUrNgSEJVds8Q",
  "key4": "4Bweh4zGgwq2g8qPR9mzKYkVmfaHzs8hgeBnsC79nvmAeGQ8xFtLKbLmU3xFL7XBSWceiWgrF5UYHBPh5QU4ZKsa",
  "key5": "24PecsAzBoiUFKEKHkR42B8gcePjwqnciQauvMm2EPhHaNZDPj9fEy18jWeZWVDh59mSuqtywhubS93h4ToJrWrt",
  "key6": "63ufXpq1bZYFN8er59gte3zdTBaaHKxa11mzUy8P6L8MAFtXWFWqKytQBw75V4KU8SC2wkvhY7wdY6TY3qR5UiHB",
  "key7": "3zxzu6TT3BFgf8ciPjegV4ZTPCZ7vZJZ7MNqGGAGdjG3HKSm4uBFZsyyGz3uy7c77Q1wxq5NphBex3KCXpNYkwQp",
  "key8": "3oc35rxp9tgEiyFwye8cpGRAiRnzGcf4fBePqAinc6jQ7M28BPfbB2wtbrAuoKqNi3bmckq9gEAvhd4MgB1Xs86W",
  "key9": "2gtZ4izD1QYacHSSEBF5r4fdEMq9NgKKjsZCbULQPKvTt4TwHSm4L1cnhQsvc4NeHcxAXmonWh8oL23fgGC6aGiP",
  "key10": "5HtuTjQ5S7p2RR6XtZas6ab63LvPf9HZ4wJ7jqbzdApdziiNnGe9VCTPdtp4pijtwjY9iNRAhcpjNSrqYXpyzWgz",
  "key11": "5Jzi9EhTp9p1V3jtp6qBsXNtjmhNbj9dySgBLeZFziGpuvc6tFunWnw5gmZGchSFgABg4F5e81PfhsVedGwkDZ86",
  "key12": "5tAifLwtsKoGGU8cs2obBhcuU76ym42PofDFarKco6XEGaroBAJxFFqLHfdLvgjJZiEaPAQ2JZF7NUG3o3RG9Ps",
  "key13": "3AMMM3vrD6tVkoCXw518SiecZk7aggS7UZxFjbbNAvZupZ66jMfdTJ8xKXnHDgzXZYF1B83s9iL8kWqh6YkCERys",
  "key14": "4KUJh7vQmXCxmTtDLyU4PTG5XW1ThxbRL2ZDDrYeuZZaTr95jrw2mD57dSvK4wVyrPGgADy4iPUpH2hMKbnNxoJz",
  "key15": "5kxgKyauyTpRtvDMeKvmRtFcz9makyFe6dVsnnNrg3aUqegJpuM8HGKc2BQfw2wr9nzoM9D8jAQBFAproeSpqnEf",
  "key16": "h4PuBi7L8spNaTfGm2pF5AsChgzYy2f31B8whgwh61gxtigMHx7FJRTefbtDuRordr1eskP9GMzQVRfp2Weyoo9",
  "key17": "5i42SzgH3c7jFov6HXmZwG6WeUcUwMP1kzave9PtMGmkxFfM4jkX1meBWASkcEe8ZPRcngXYaB3N8V3rqgBrJoHv",
  "key18": "YJrjJdDzZcHCcxxRF2yvS2XC4qvmDvZ65QHMT8zrEWBUvzTxFg2oEmErSNFT2NLrxs8WJVKAa3PQuAztwbZ4e3K",
  "key19": "5ebK2oZsH5FXkvFER6UbAbroo2s1HMZDrQwVMbPELDYE495WNGN8wHjCGdWNEZP2WChvfD6zEpRpuw8ZcLMHnpfx",
  "key20": "4ktWJPzziuCMbeJkmXUaoGZmcyah3XPJnzsesmNSyHZb8T14YaR3K6PhaK7nSkwtXwpmgm9GVxGeFTnmcz5FpBAT",
  "key21": "5XoSpKQw6UoNx8s7pz578x85jdbooA4mN2XLGMNfpCxibceN5RMXHDunfNNEhao6uJjwjcyzCDmvk9uN4SqbX9yn",
  "key22": "4dSxqQboLvB2Qd9hTDcb1XTG19iNpvCvdzuiRNcJAfKVXEF4QbQDnW9xBGkQDjvm4xTYrMyVP156EgyTePtmmtsF",
  "key23": "3kJNtweAB7fJ7RH2HjypbeXMvHKf4hL1So8HVVbfPQWrCebr6RrSCJ1zLKYREXPiuggnGZSJto4YEmpnGP2jT6bs",
  "key24": "fa6St2Cme3qFNCm55JcPW3odc6YU6DJ3do8SNNoU3w17pi6ckPGjbYREMHBRi5zrPYr3WdzyVumCwjHXzAf9UHk",
  "key25": "4NmaQ5pnVKqEhp5hJAQ4t7puWtjnJYPUiYCwHDeYwMEBcqwy9ejKt8TcmsfRcsXvbAkobbkk6BKjn6SuYd3ZNQvm",
  "key26": "zQhJPELEaWzhK5FnRSAbdcuhkd9A99Dzct5wU49yBKsZ7usQJGiSjBPLGfoz7GiyhdSc7YvSVAhe6Gumzy8D45q",
  "key27": "4Li74MpRC19NFProFs4AedKhkSQeuR39g2NS89TNLFWQF9HJ6gx5zZnHUqPwyJ3H6sZzm2RHzS5Q1NmeiPhBzvYf",
  "key28": "4N3y9V9wug4QevfD2nQQPjBFrJyF9acZA8c579bBtgHBooSGN4NfiXVtwccv6ts8REmL1Q1TpeHKDrBp9Hjha2Sr",
  "key29": "5j1kDEjRCHPKUFpUCmmNK4BG7CjXKFfFwaGLVzNMDeZhorobRurqED4E8MvdrxNY3zDFgcGwZ58BZ3deY4wyhuTk",
  "key30": "4yAspcmxERcLS5ZfUSVmFfkRTwKyJ3bV4mQ7b28pmwzCiUeTwLfrE2LgpcVrDnQQSurvj4uBjNVAshxjDKtBwWtG",
  "key31": "2JkvKzGN3ggqD5MrY1HAqM55rLrPkrUtTi7j9UqosCnFyLJNaSeezhKChFdMwdPw9uNM9SspHKLvADp6yPnTZvxV",
  "key32": "XxXmUicXpuxriLZM53EKtqoVVQyQJ8c1dfc4evnW9vnS8ycyCUGcySGn17qjE5tRXiQaYfmivGicRC13Zrm194o",
  "key33": "5g31tH5MRbPzt6fG8ufNwuJsZU16egxSAYLFZ7xLFppEmZumERP49pudgQCLNMUphGK5tNoxtF1WtNB2QekcGjvD",
  "key34": "A7NU1vnGpctAttJM9jUcwY2gc4t9Zk1SQqD9dq6rWoDygi3ugqDWsVq2VBYYrNQzTVnEUNYsiCZCm7M8NqG5wPu",
  "key35": "Dj4AQvPWvL4sSxGz5JL3Jh9xyDDzdKJ8Epe8CGnLdrm4ysM6j2DGJgoBb8tJ1HDUBfEadYyBMHcJgFCyiYd6cbs",
  "key36": "2GcBczv4XYDpQWpE2r8p6fWE2kENrt6YnM7XhuAxAnyLZbvtFrKEmSSWWgKWxBsTEZwLx74gmAY1XX2xmqEhuG1o",
  "key37": "4zYGYjHEZqBY3TdjczH1wQQRZBpr9mih9t9cwovvL7MbzG3WFxr5z6NsCy2hniLaFtXt7bAFUVDgmDbJ6vw5K89E",
  "key38": "HZvWrPAF7KoXVXo9CVigVXwMQFMP6YKYtSf162c8jUtrpEFkuuq92SaJ5ffMAz5Df89GE3DW8K1VSRvDCHUhxBV",
  "key39": "2E7x563JyEQ6onuqk55BUCsbXycPCA42mvVwKtVnmgYs551BKEjm1uQNTzEgUkp9hqwsHYSREcNYLx5vq78j7YVm",
  "key40": "3tzSTMbkdw48fdL96DemEyi7xuoT8n4mKz5FsFQ4D2K8hAwmP69yLCy4arghWKwB6TesiTKUDFeT2GTZqPJAHzTa",
  "key41": "33ktYd7cxy6o5JmTGyQeyjXmudiyZJ3ryBKcy2FTWVA6Nsmrcw4wMrgfCtSiqjL8w3n5iq3s1TLmsM3eEmuMhY5e",
  "key42": "4YLnsHPyKHU2s92envWqw4FLaAKaUuWPUpHCmREUz4B9XvpFuEiQiSfzf5SJzAw6DLF3WTBNaKo8a8Sk1uceNxHZ"
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
