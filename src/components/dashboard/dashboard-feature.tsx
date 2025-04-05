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
    "5RKHMB5Sg2PYLY758Kk1BPvgiKGYL1Xt8JL8KpDUBjXH5xqv4nEWemCJwD3EGU7LncBe3sMfDX9nxraucLQ4ak8k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5riSsdi9RNB3F9roUWwxgPYxoNG6ZNcokRSpoNCi6xXYuWmz519uJ97bk4ja1tJisH1hnRYRsN8sYjcSKFrLYfGo",
  "key1": "4ZCNzMZTGPN37GJ1v6CU9RNeUjvreydfGWXq5tEptCfC1FzZSRoUo1oA9L4wE4QwLGfcPqWBSHVyyAFKt2fw8wTD",
  "key2": "52CUjr8HYmkqe2wGL79SSxG3cXaXHUZt1jDJDi83nuBWFH37kyR4GPQKNgVVz4ZqexN8AJzuaeqDkiuVwNv8dM9x",
  "key3": "4HhABVQjYPAS23TxuEq3VyRzG2hLaWHMs1RVxbnRBWKFaK5kxotQqZQ9eKZDdyCdgS3YJzQLAq51s86M2X9h79Pb",
  "key4": "3HN8tUBAUMsneyq1LS29HajbH4n1dRtit5kXLwwR5uWyxsrzueujpAVC58HxduXRP48R1fDexwVL3TDfDc1ZHJDa",
  "key5": "KTUTmHBqryRAhLsqan5EvJSLtvDMEqD9g2aPBpDmJSU7yw3jatYTtHgGHCgrtVr5HjX97C51Th36ygWYNVd3Dkr",
  "key6": "2RybpBFHB8onZbk3Z9HXqdJ9cihh4C9R7Dn9TmiNYHkMHt2TqyJuK1jfD628HKiPgGqkWWPy3CbtpBqrdf2tdJBM",
  "key7": "2kw41hswmQpjicjPTEfAT22ywnDY15ydtaarxuhuPqQYHdrpjJ8ycbRCSQMoWFVfmUesFZUZSZHkvEDTWaSwiwvV",
  "key8": "3DUfZEqEsmU83A3n7Gw16ou9dRHoB93PeKdLKk5XtdycV4h7B8APb5wu1wXdT3W6TVK1dc2r7kF6bLHkwL67JVAM",
  "key9": "3Cmsqb9EVcSUPDHeMF4Z59HJWtme3RtWAj5LZfgAj9W1UHRQaH2UsCNG7dWQTdmjkBeXt2sVPDsjzCmBLiLRzVMC",
  "key10": "4jxwACAAeFWSCXzDBv2Z5jgRbexr8fJY9kmkDwEzxo3k2ZrTTkCFZVbDN9TUjSmJbKn8yr7mGxczQ3idhXVF854v",
  "key11": "4dCspcZDWNGy5XYw4Wdmp6SCbocCYBb7NANkxFHW1Zm34vCGfZ5fY2fRWNbmE7xH2jZumdZqcPdDMpFw4y5biM4e",
  "key12": "26D4D7Lw4dkxK2efisuNE4WasYifSG37qPm47Mufwxzv1mFPwPQnwCmU3kzUpJH7McZUJEaJBMFDXJJipZEo6h55",
  "key13": "4WQLQf8L1CYBMBERenaowWmqBmwDntRfiHXpWRWNuYT9ZYTsrGLQqQwSxmj8sGktnpmMT5QRmjpB6U6ojM8XEvRn",
  "key14": "MQgrqc9XfMzpEannHjhA7QKRTyse7JRT8xQ6ehhoPFz5UrrXPgznP3tbTJEs63STZtWNTSFxoji4M4TmaTFjxx5",
  "key15": "2a9frTd5iPu2bT4a42KnVmMiYppZB3eWnLLw9zNLCG6nbUDAfTkqAmt2WQtQ6LpTMr7FMQjYeE4YXREdtGRir1F3",
  "key16": "5g4Ys1baMA3AmTMRwgR6PEmpBmP4P6VBgBA4zRHY1rVsnyKofsXaEQZsWfUA5e1WntSqcDm8Egia78jcZofsLkEA",
  "key17": "jRLbDqrjDVDFDSPaHcGE94eosUz3Uu4DLJHctqJ7vTc6wjmAr38ETCTeD9RTUG8YCJDutrphDzaiJxcPXDM3rTf",
  "key18": "5FSufTqaCs1HRrGBzy4LfWSakQkc5jTeuZ5t1sMnCPTVokmz1EW92jUHwRrySigjTrbMy5XRM6AiJSPqGU8PTjTK",
  "key19": "KchGXmYVfMDHUAvBEj9QvSEnFdBYJqTpob8yEZKP9DJ9eZu1Bdk2DyHgpUQWVzskAJUxyfadnaoBsLxDA6wqbTP",
  "key20": "gFeLJ1MgUoCAVoP11MoWWX1V72fErjKjTA244QzZmBcGTr1xnN6hRYnysRKAPM1vuYY4mZ5kmfEfbsmph29EhVZ",
  "key21": "4oMzi5EpFUaE6XqgAWUKRxJHwTBcVZzBJaap5xWXfiYbXcCbzTEk6ijJmjohen3wrmSt8JFCjkHdTgTjc6hvV92o",
  "key22": "3XfVBJEKqMhwReQ57CBK8xgkear8tFjWWZ21w238wmB2YtF5h2WFnP1r9Cjuq3sVf9LhFHiJFzuWtNeebv9FEvhp",
  "key23": "5cyqi7X1CEcJ78rY9defJVDGUyDQYZ5azxtQ4Zn6EMoSoqfwDApzhH4kk294ExC1WZtkW4mR3LAoCpY4bXBiFoY8",
  "key24": "4C6tfW2WPffayzJ3zoNmr8PAfCcULcb8i5BE4LFVARaewUW9uyadukDpNf5yf98jQNSzJHCnUuKrbPtJWu67AiSx",
  "key25": "SEd5BpmadDU4n1bF5vKtHNaqbqtVZXjQ8cPv8t6FSrh9cgt1CF4cAUsURhSJGA7LUeyMbAnGyy1RBchrseJtdVM",
  "key26": "sB4RTrQkr3KNx22Uc2HcM8bgdVWZ7ogTvDqQgpReEsGktCYsKwdPR82rLfnu8fS5g1nXE9aKKkZx6suakvLRD1n",
  "key27": "AG7Njnj3549Cph26x5vNkAy8BMpqAS78KqNDGgJ31A4LNbWek1y8JR1Hvf4du824EqkqCX8jtF1f8fQ4XjxvAKa",
  "key28": "83PRuHk1H8QgyNPjjKq8oVX2hLvXkT6r24dN7mehestr6Ku1Rh3USfZ3y78G8VeyVF2LCpbgr6PJav6LWepGr99",
  "key29": "2YakxzL6qzPnh7mEAXp93uJWhDj9rECz3GxPxUCieyLjmGrVS3PTLZg1EftkptmqG9eaePmnbcv4pC3zAZQ4cyen",
  "key30": "4nmHo4Zy4ruYsSnG3bCykHzNJruqBzekB5vBZsLi9DMHvqq4Y1EdB71vpqQjGkYTQD5foWhrdHVPfoJK4sSFdr4p",
  "key31": "2vzrABfwuKwhgLhAbmuG4uieH5WXQD7Bn4dKbzeSvCft3VbPcwFMeRrKoQRKmSiVodY1EoX4EZdtgN9Vz1c1YTWD",
  "key32": "4KEus8SwV1nGDjEuiA5omKrez3QxDHYuaPzMdJgF9S5i5DY58YCfBzeBBvmfzgq3fnzXYiYGVmgCyDfyfwZoT4Tx",
  "key33": "36dTqzMmMKyzAjqhp1hX2pYZcm8Jv9TSM4m1NUmWUJByn1AAetbS3ARvRo7Rdp79cv921gmxVM7rfwW8WzdHZNjw",
  "key34": "3WFz8RjnxVD4Q4JBWEdidNTmVWqYSnRBifjzAFVfnyTinLzetwg5bCar6P4AbbkKKqPJfQJiRfd1r8eT9PK76iB1",
  "key35": "5DrdDJB7WpYC6icswcud2jKfVFZ4VxayR35F7Jb1NRsSHdoSZWZN8kqecPS914Zw5ZZTyP5JPXvoQpf8njz7hVFw",
  "key36": "5U5VWusT6UfSshL5QkasHjhcCFC7kEwDVURMyAxbhzywvXp8azRVLM64psnfv8xuGKtTxK4NesSVU6dXKG2r7Bmv"
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
