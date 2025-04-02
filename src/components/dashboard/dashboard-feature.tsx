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
    "2GVcpp4mG4dtJxV4XjUm8YWXiq3v4EN7o8eFGJ8DxFwV7bSCD6t19wPbwjpRuCma5Eq9zRJBSYq1fzLPQzoinaF1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47SPfLBjPkXNMSPLCtqVvr71tpEM6zWWMPQAUkUScQ26Du7JTkBJMG42JUzahKY2iz1VNaEfxxHHt9FYPrudDJqt",
  "key1": "3ttf1JchwiHX4GnYJPyQtA6wfdrSnfdMk9Dgzd4yLXkC8xXvu1VLZEqSpgHi8NGACqCyvSio1urNRCQpFtJT42Nd",
  "key2": "duwJQ9MTEFJ4penPYz1vCDnBPkdFYrMfVsMfB7L9bgRNJfLXAHSZo54uhuQ3GcCFjqJFN37DDrG8CcvTPniw5Lc",
  "key3": "56xKmN8gwd3NKqMGczgT6XfV4sdeahLt5DBkctncCRvKiKPgNw21WZuh9cFtsuVtwgLEeifUwhsrbM7oHoHkfLVH",
  "key4": "3bZbZLQxHtqTepH5b35ekQSR46EN9ZNDwhGSasgFUHJTyfcyAQRut3NGP4VVKK4UDdo2SykWWrB3eboMWFAkSrxt",
  "key5": "3rT1zfi3S5KoLsyWwPLbmi16B6CV2GZJiGHxnqeoWK6p7cBd88uP43sx3beHNKsgX9rxFYQyKh19vQBcbFvL8oyf",
  "key6": "4zScT7fCSDSLw6bNSQXhiFWVK1Le7ybkNJvRbUUZ8ovMMezdTvUq7zS69ePAtan2TsMecesResUdy6Qxn2ZJHhb8",
  "key7": "2VhofWYbUc3q4R7suSznioWUXqZsHm7HmU8KuJZoxRDpp6iwxFDCntk38Pw6syHWMW9gCeWbjsYRkZuhoQpmBM1Y",
  "key8": "3L9k1zU94Ruee3euDarQMsN6cFW5FDGwERQmcN9LwzyjpFx4rA1xij56U9ZvFcrJdrHZiD4AenUfSivre6C8jDEb",
  "key9": "2gtLCA1Md6uPnKEZjfQSKLpfbLUwKtsRDNkpqDgib7DB1RNzgy8yAbPkuttDCMRMtBP7JCScnE5ChiRPATwDNa43",
  "key10": "4b7d8qcULQWRsAB7jNpengchCpKhtutkAaYeJtdKGV5ivqc1gzmWWNEdLKGyRNzedccAjdksQBiJGBWSJadTYZRy",
  "key11": "5DuJ6VTSyxkCt4tZzPsi2yrLnXcsqKDiUSx9BHczKc9ki3a5RRvA1BabzvqkHew91N3UyrJRZaUqJby9yWhuHq9b",
  "key12": "4T1jyv3J9GgZdRzMp1KTnsFgfovyNLiwK8d7rC5WnrAQDMEXBNEBGEWJvLVPYEwWxwq8yisd8qSwxk4h1KE8UrsS",
  "key13": "5NHHPLi298w4W4Gcgte28JepVY4d62N58qGEi7DZJQ1Tz8iV31f2H9Bkr6MBax74urZc33f5bGnsRehRAbu2ejv",
  "key14": "BBuvHXrHkiiGTVz2guSN7N2oWbWvBchYw47N4S6E7iTYck7obUfJrPehxR7aFTkYgavZvVz6aBw7CiUjG99vonG",
  "key15": "3jgUMomyXnZGhBzLjvvSbBXnATNv49x87tEijii1RM24EW2YSyPFczbE3qgdr4GqDx8ERDJc6nbD4cZreQneMjsK",
  "key16": "2JkkUKiRFqaVmrPrBUyG2iLiLATmFYtrD4PfmvceRPebxk4bt757JYrXL8v7XNPyB4ygoNJgdjTx9WgQQ9ngNdKi",
  "key17": "g6qQWBvFDdmN4fXMofBdw9pzqvDs5tMbVNYyNeogy6rv1kdsMhXaYSpnB7dwDbe6CtxT9SBV8aefmdEwSxCK2Cr",
  "key18": "4L8RXHQ6K3voGKKgNkt7GTozTyUmquyuUdFdQH7chcFNYJC3vuaM9m4g8vaf8Bt3Axvu3b4CQNtMcr31RUUMVzSH",
  "key19": "4nehW2VnRV6MrhAmQA2SxU2oFNNiFtD7nXEqJwVupMoLchCeT5Ype7A53TgjVUbApFLJcWhboEbUzdZFc5bU3ehY",
  "key20": "4hxbzDGhgR2wvqjNJR5zcVQCjwxHPTany6zFbjeX1dXhdRvD3tQ5V3YvQDLLDujLTVdH8qfJJq5BTe7NWLsieA6E",
  "key21": "2h1U6hhVSe9VCGP7dgbCA3VMNFUxFFGrxPsCYptDJd8H6uoyRBDHnb5ZQdvBBCbgfV35g8eoT4Fkyg4HJ8Jvzgu",
  "key22": "32zorUXuCZiKFtC65T2DcjHowpfs7ciGLu87HYMoPQcVqnYs7vN44uGdZjpH1eBwh4DqcXQSAN5kk4cMYhAZ6fSJ",
  "key23": "2MPXfwWLMFgwHNqosFL8h8YnucYytw3bwwuA6iLUuQ9zqwzazBjZ4rJRhphHJKawM7cyp8FzpRJbXbcWqfR2E7aW",
  "key24": "FJ73zxjPrv3jwvkPivVbkBXvad29Hp8npSW9R2sgmcgWnVAF1kSsXdxv6JBb4DxiY6vwMahdqrZ6RSRsz82ptBn",
  "key25": "3MWvjT1kgE4TJ15tYQZhFVw1QteUeQtjWH28k4XwuRELdW54c3ts3EB5SGbXPrAj21xUX8ECkXWmHrtxhbBoLfC8",
  "key26": "66WcLqTQQjgEZkGLvvpsqZDHsGHSC75TVCp1SrsG8wb9KLLeJe7bWYHD3DUXtMLL2WfHsTvVqbaEgmHBRcDXKdUF",
  "key27": "39rxXwpf98Zu8tMGpJPsppkVKFkerbqvxehmGEKZFczt6JxRVi8xLVxaTYTf6geR8pb6CaaKzpJDoKL7mMmXmPsp",
  "key28": "5VpL6pYYExVpBcDvxjcjNpy15HRyDfdDcwmaFcwtLmbb2zzZPp2zniRmPP6tb94yK9h8yqyrt6VA463EmvxRwEQv",
  "key29": "3evbPYcKM5fH1F4VhmnZwa5Q4ELbWf5XBhpZd3cko2cmrKiw5jJYeGWhjcTEohw7y4bwQzQWGoAXUzRLWR37Bxrf",
  "key30": "2XYPDnNErW2weef8MQFY8WoYn21GJnVeij5EmTGDsihPfJWkDrChgwCPyFbSXue5qystNKRBijoXkvhCC9dFYvyt",
  "key31": "4X3tzGDpcUcPWzqU6XyfFtiJARHJs75KGUCatv17oULdH2HKHi6oYw8BSd3ofKR2cqeCwgynUZqYCz3G1rs7Thqx",
  "key32": "wVUTDVepAAQ4NkkRGNUyNMxcXxx4yHQcQ1u1Mp6DrWwysUjCkxh99itvUJVVFE5BtuykL8HHr3kvmcTaFN4hSJZ",
  "key33": "9FArTprjnP2bBWJo3Rt3ddt9Z8QqqQQJzc71tDTcaC7YwBP7ccm4jvS5nsDRx52JizQ6qZ34gruuYN7fVspQGwz",
  "key34": "5yoM3t9yf2LefCMbPQ6CVfxGvsbVnMLHkhP21QM264pVXFPWWRKAeWbFPbsqfTa4R7r3pby2fhaTjzyPXbK3KwRz",
  "key35": "3XtSmvNVqLvijfvKM3T2AL6RHyPQxWSW1ZfoGipDBwgjhvwdKBMyK5i1iYQrFU4rZULq9BGn2J14ebiLVdT4oxhT",
  "key36": "3n1j473grUrn9aaG3bxdjxtMMrnEauLtGGMr2SYNw5L2kosKzP3XVf2B7KoxdTdQaUyGy3iCeDdHu7zJW7LQdwA9",
  "key37": "AbH3xa9hEf92Lqnb9RQ3uw1tpaBbSaeTpxdoCqhfvbi5px7iN3CLCDqNJ7ZBcXNdUyFJcJFtTjWaiZ5oBBUJtsk",
  "key38": "4GsGw17FE1bV1yBtQD3QJ8NDKKXye344hCYuTZ1DUf6atysxGzavLFvHPndS6AvdNWHdUh8VVLtssP6h7Lwpjd3v",
  "key39": "2Z8517NwkGqheAeSoSaWs3uiPEwxFuTpkCuJkJ6jzKdU53MomyTqwreeTTTg8yBVKWjDCzKiAJPssHFBB1ar6VXv",
  "key40": "5JotoZE4VicjcovdCB3caqMGkHNufj53R1JDPhtQaYr4jgGWjvAqyKuNdkFJwauiVXMjdr67FVJCkTF3oTJ2YLec",
  "key41": "44BwYKKBv3uFEjkyM29UBwMVFYti1tSpyzhxCRRGAwmiBz9ixUAV6dyU22nAh6qNtUsEKAjviAizH3zWLPkCQifd",
  "key42": "5FFkkYW27j8jPGSR1VZjZuubN7FWsUMdcSxMzJexxUpa7Lx5bYHRGXKHmLB9HD9jfLRJU11iYKbCGPbk33xw7QgD",
  "key43": "5VWTwHRuesxJUrQrxVFogYLJopNb3cACoA62LpjanRp25UxpUngnpUj58jdFqEmtYGB9pn2CTZ1rjp1TrAiTEjFr"
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
