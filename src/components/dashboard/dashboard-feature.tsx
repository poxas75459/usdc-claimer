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
    "37WqyV7HHKTfy8NMPZHVo7BNSVXqZNcm7NJUR6TKevCApsFpnaikQWCQQtmXXdSaPayVgdyn5Nh7u32C1at2m2KS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jvFsAnmivumcXRWJLVS54AJondjtCJyScpgM6oWrNVxyS85r5RkpfWGgoFQCn9SyTHMajZZAtNzfrk35Kqvejn9",
  "key1": "5PtpUvzvnt1GUv7sehnYQZ4tKwomHXMWh58YdPn5i13ZviZ2tAa9dnqeDnBoeVVVxwGHTLyLhvMUgDC7Z23T4uZt",
  "key2": "2M8BgJw5SU74RpAfJRAXvFSC6SSrvevMEiayC1qorNTxtuEwy4yn32kZdnN8RH7mxRspgAhku6e45yn5BjQTAzZ2",
  "key3": "4JiGq1eSsxYxXSm1sxXMerAxn3Ccm6MJRcGR4MqhjZsGjwzpybSKpC4evapxnsv3MDCuvrQvpyPFe3KR6NCEGREF",
  "key4": "3S8P2XyYtKjU7zcSbFkvEJEoGynimXarsArVrWAE5VVj8G8ozXMWRE5QQygGRgSSCB5pNYPQjpmmJJF6XJkRfaDP",
  "key5": "tTAdRVTS5ELjVwyvpEy7bA2vTEJcrNtCEcAbnGJPWvXHNSonHmnqRCeYqBda3Pn4mXtsiduKFC3XeW3BJN2P9fv",
  "key6": "3LnHPS8kVcNK3AEiapBov2YmcNdDS6dhGBb3qGYikKimgw71SipqMXQ5aoc97odaxHLJgsiHs2dnWasVqgvxNqd5",
  "key7": "4GQCVLFSooqUbxX4gJUEK4iQMNvpUepMKnqLqQ6wYo6FgXbcuSBNbAyTTBtUVMFeC9tD6UMbqYScm2wHg9W5twHW",
  "key8": "66WpBg7oTvn3VdEvugKFETcKPbWeATxYv1aHH5p6nb2zVnu1AyLfuTcLzAgkP1JnWgbe1XypL2iuZ1oCzNzwC917",
  "key9": "3US8TUM7xE9Jy9dYM9qr4HJUGNHpViyiSp2LXvgCUHMYFNN1BS87x15hC98sNEFdUZVn4UQQSSNHkZh1QwppxoFZ",
  "key10": "28jwKG6f3wpr9dVCyU9VzSMwMKSBhABhQpmdCfbMZukDjXoCarBy8NLj6NBjyoXvC74f3f7njqC9jF3s7mXzvErm",
  "key11": "3RgYoHzccqATTpHxzXuubviFFG38gwk61p9EKxn3AGQwbX4Li4HuyCQ7sTwV5uGxjkZV5e9Ysn6iYtTKdj31DUN",
  "key12": "2sYMVmsX9qfvSZpDBhNRUybzYHVGpfiuM9eDFJCwEJEFgeqfbzmQs3krhdoLbJmz95Pygr81pqB7oRSMU6KaR1ob",
  "key13": "2WZyNoG4wsWTHPivGvhc9FLoSmgcZ94xqs2Vnor58WEV6m33p1afkVS1B2VjD9n8Keo7oDwPVsrzm8ovYKyfEAJi",
  "key14": "4cm4DcP2KrHWPQqSGXvDCSNzGrc9r8Kgk5RJEAtA3YEuRScBfPqKcDVYngJsRjFUbuzBZWtFSP1b8TgSY5gbzgVN",
  "key15": "41MHJ2kKC6Gj25oGdm9aUpDkeqfwahm5gU4yKpUMk61RzM62jk81iXhd28kQxuAVfEe1V7g8r77LPEgAQmq5dsZx",
  "key16": "22ByJ1AEwMXrN5Ywuk9LQd4ueChqSXtPbabtKQnvEiwz5dY4v1UEbyrhj1GKzJyvaMb1GHqYhHuYgWdsHrcLs1rD",
  "key17": "2YomsN65c8M6N8VQkkaN4Q46Jf68aYYQDy6w4rDUo22CeE4mLdAexEkuFJmVd5nYvABEeVfWHPcpiRmAucrDHq3x",
  "key18": "Jx86MFHY2NLTZuoZosNWnxHnp4PaLhDGMp7zkP98E4Z6CQFswJtfJRPKh66qHfSrTqf3Yz1bCJfc644Y78sYHkz",
  "key19": "5crMrEZugUdKQofpZ3Wwy16KRKMhZW3y5JM4BLLTwnmnwggnD29QgxvhujsqzipV7CeGRC6kjLeHDkiGq4GGKZUo",
  "key20": "5Vc7aDVDfnDr3KDZr7MArq6qjYpy9vp1zw7QioSVFpW7UtLmjpDA8hqgksZ2Y2JJF6b3mcrDVVtNVaogTq5JzoGQ",
  "key21": "2P9f6xwuMmDpHTmqvzaY57AtceMwa8rtSQ1zC5FXkWYsG7r9j2qATaogwnG1okmYHgmTs5aWzkp2swaVT9NFzRfx",
  "key22": "2gf4uNRbkQRBpdynbZ6usggpvK7YmpkKK7jDotVwHmUC9MDUdYJQcJfqKf6nDWtsejGhb37L1VkxZ6HUzUqaX8bZ",
  "key23": "5Z1NoPBTkawgEmJPKPRxDem71dc3ifDxGLUH7uva8v1VVhPk4TKsE9xQHKpodN99w6jvM4zmCFMCyueJrHGFPwjy",
  "key24": "3dBfarw5vKKa2AyytF8V7PzKmYv5P8RJBVGAWqdaizWyqFZCAAk1sYBtGtTZWfQrRMM5RtS1tJmFfDyHv5v91oR7",
  "key25": "3BiZS8tkX5ooWEsY4CrJzzSVZGT9QyWM4DuJWi1jNjkxMTqQFa2eVQ4cH6vsPhRymVfauZqY7LFxE7qJfaMgtX59",
  "key26": "4wHtYpXMFWq52JRt7vGD5DgNSN98XRh8Q71ZiMsE3HDnXQ44bKrJegDQbNKXxjBNYJxz1x2VggdWDxxixwoxZ2Cb",
  "key27": "4qUgmisM931StRMCizF9sQZ2ediDq2s2dPb8V7EUWx8fSxQdj2hbaKrhz8LZkTUsEDjxj84jVc2JWgQccXc5oBzL",
  "key28": "5seCqU23JKtwehboHUbqzhHgRk4hpwi7gy5neXRVcSYhgMdEG4uPo7cv2QGHgqdt7wbL8qaPFnx3L49dNGpcGG2d",
  "key29": "4BQuKBB3D66hjrH6HgmjysUS2wyBgR34gorYoDV7WEJW7CwCxE1qGtZ2EuSzP7M7aWU7Ce2GhgxktGd4ozYc771Q",
  "key30": "2XkKcUhLHHcRzR3oqdtfeWb9SbZrfJFko7oJRNtAwfH38EUVq3kFArytYeo8pbrtrebCMsBnBoK9pFyGcEiTYnsr",
  "key31": "2LsA9pQxZFU1DCoXbQfzntkmPRXG6JrEGyABbhZ9XVLfEVG2e19osxLzZF4NTkbRRorQ26qKDaGiD1DkPtS1fT8S",
  "key32": "5huNCuSr8NHik34d6u6QZa6KPbe8oLxBKFce6aau9pQBaAJ923QFpdknot1SyVm9Bsq2qv4p8VBzSagJXuf5ERyU",
  "key33": "3mtDjyBovb1U5uLk3YTkZ3akFhX754hZgX2Mgcxay61GzkD6mGd5EqSauDqjv3VETTekcQiTtQ7mkRzj72tTpcMY",
  "key34": "3Rmi4rDECzw9XfKV4d5VU1pcAhudCzd4pDV9THJKDPbFi8W9PYs1hLae47eHmZdkwDUwwwYBdA6XLYubN42W5ypr",
  "key35": "2hx2YoEMHcBrgRd37GUf5CiyH6x68sTxLk7p8foe5QztKtdkKJsrUtX9umsPTd7uE13Z5Mn1oHKBSA9h7medzti8",
  "key36": "2cPQzb3QJGVCFbUFT9yimdGvd1TDRRiJXVohoq8DSKazSXLQznRReCjpK3GbSLBiYiX5X7uuHC5JbFYEJnF9nfEE",
  "key37": "52M7N4sc63WhQDUXQ4gMCHyNM5bfJN38sDA7HKTag3c4MRdDbJjkC478UYJCsEAFkF8VvZMTrnvHCJqckwTKkde3",
  "key38": "32zTUDVSmBGq9b1CV1vSmz2kpVFq6cPQDahpVzXVU9ozhbJcKzhDGLyXNfewJ3GXyWwY9aERPwuimJRCZfgFjoh5",
  "key39": "2oRpgEk13yhAUtsgPASXiwHqqtMS89UBUftSJrsw5U6AFEuv4E23eia1Bqgc1YP1gR4nxTCYk3cvgrPtshDZcd9N",
  "key40": "2jZqBGntEQuhN3aeF4TRAZEnPAThDkrdMrC686f2U1fw6nXozqariPq5xHEEbgnLKfhMom5ynixEscY7E1Bkim4J",
  "key41": "onBf7YiPQVUtujnhshYPgBWqVrtbczZTGXbng2ZAoSA8Rq3qFce9NWD9XsiudQjvq9ACUGdLKLtwSzcYKELoKGG",
  "key42": "3Vntn9ya7ePFNoe98C4x3WfCFZ9QmQ43hT366dgXB7H8VYwVDR7Vj9ngyB7Nu7zaxtC8d1yzEBzT5hKMChj2MAaz",
  "key43": "4hVSAVM79tvoS4ZniVTNkn5XWVSNNiGqRdxLrYXEmUmNYpX2vHkJv2VQNZSQCs4GBPK1J6WPPwp5S38fUpLWpJFH",
  "key44": "4dg6nvaV2jTWDqEAaGiyWP8SVHaE7ayEHL1cF6MAVynQRAxsqfZAUyyA2FpQcdp7x47TpZHSgno9Ya18cL56i7Md",
  "key45": "56pn7WEw2EF9Af6mFYN23uKXkmyDVtXRc2tW7SWt6CarNkr3XN5pq6cyoWtH4vjETrtJPRCxvA63EfPmousi76o3"
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
