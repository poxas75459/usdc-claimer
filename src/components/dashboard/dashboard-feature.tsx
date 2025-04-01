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
    "3vJAxp53CHzCvgjCoUYn4fSomcaqNRFChe6SjgwVpjEt9rciqYBQPrPPWwa2EdPj6oGfK9Y4w3F99RDZUBnS2tmq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P2BHXFcrUJwK4AmxLY54raqFEsgpoEaNYZrStaJyFoJyxPEQRLtkcehBweLRbbgSq7ACqQqv2ahLkxrrqGd6rww",
  "key1": "5Y95i8DH4T3VDHjTMarpb4DEkftyVRFMuChxcac6Yp8J2CnV9nQ1fodNgPrRBCkvzDm94C6Wq5UjjVJBxaEjzkNd",
  "key2": "61wH7dLRBm8YLuAbyexUhYZX9wvWVoEhYWRHEVWMXtUQmEeTQJqiqBTkCFPo4DWkizfoiMDjJe2ZbVX3dXRjw5Be",
  "key3": "Zy3F17cn8SfkYUEF8fYbqMJzRZR6vS5ZczGihiG4UyEfXu9NMCWNNH2eL5fUbMRwdF3bkDexCXNicUNx7tJWwJh",
  "key4": "2xxyp6A1zD6332NCgJe7s6Z8eWgmtYWgZpPZsgbjJ3RbbS4cPwQcsYhEffEX9RG3CvNKxjXyFaTkqiRqroSpyLB4",
  "key5": "3Ck4mGdBLj1vTFE73khZtYph3iXeYjZwftteasYRCBC8jHTpND3SSUuDxYeNcVYEYTy7UPFGrYhc1uFj4sXpCHYz",
  "key6": "4ahgDNTmc67cYmesWwTYzBqxtvhkgcV59rdQU7pMCgYrsQa3a6EE6JXGNP7efpMTbbMtcqFRDNKkKCPVDSo4jibq",
  "key7": "3sCyx4WyyxeQRGwdtuKwG6dsLCGDoT8uaNtdGiUb6q8jia1W93xu2G7rySKYS4SVTx87qdo7Q9LKT2LamynZYtCd",
  "key8": "drSKfiA5AfNWB2rPcaUFnaPqxPE8U1ye2PzFv9KVm1Vk8rnvsfxGMB1z5k6UMn5cWpfmkD32BdA1J7EHBGMnBfz",
  "key9": "5RPwEfSaQqgEgL46T7c5BqxW9QqafF5gdUMPA5LkBoSzRptoYnxgqYB2ofb2kjaTy5gAwjCZp3bRNcqb1VkXmNq1",
  "key10": "39EXhTxd6zeyLUnCUTfniZsvwmNCLAVa6TLDoVzdy1B93r93QVo1eg1FF1w8Vi1jAxLoQFDesPcJDQgrBnLuFqqR",
  "key11": "5qnS128WtU3myXtAE486bcecWzFkfwyw1erGPDLtpdVNFkPLtgKcHAnZmoZ5wyR3wRnm8ZFHtTMagmMbDx9FDbLp",
  "key12": "4ms8fWun6mnmXfnR7SYkeRnQnAGjdc7tDNcggKdM8ic6rE3VRni9W2wy2wHmYGDbBa1mfx8B9fqDjpgTP2v2TAXW",
  "key13": "eTtVq6pnq6pKBURMxNW44cEFsWMx61BN8gZY9cDY3LuxXwPfYnP7xz1ASUJiaybikCJTQyikK4RPmAyN1RvEjh9",
  "key14": "4V4eF8qpw6H23owVzCdGz4JVRrCnKXXkVkXcxwSXg7yMYEXRoGSNZYwVagqoes6BKe2NaWxNVFaHPqZHhYjAE7jQ",
  "key15": "xR1oE4wK7aGGDnfhLYys6DxpDHATBW2u5395k6ry65gtJwsrdceMNYRFnTLKxnHxkSZAxmEpFVqR9ZaVWA1R617",
  "key16": "3NxS18RrHNGJx9krw1X9YLpAkZYgJCFh2CT9Fdv9f7Ub117p86CYnbwWhVPC9P3LApzkzJEyEXYMdhjZng63tbYi",
  "key17": "3XiD5VBUAD9EyBihZHATkbpWZX4QwXCgDKabqGjkA57RLUdTxErcw2b6cjJnZEGxdYaDL3ZM1fJPMuwWuU9tLhLV",
  "key18": "3S9yeuCZVuX6mgbDqPQnhz5jkYXjWB5fDfiV9b4kQay8W5jsYWeEgSx6oW5AaBMnwqCXiFnUADcEyDJ37ntoit9S",
  "key19": "3udgz6iemLa5sHzvkj5hnSv48FphQGqbTyD5giVLz1xapSBtBqN5C9CgnX1SHcC2drD8SbChtvAtkaeXpyYi4H3y",
  "key20": "52KwLZbTNpUzz31ebGV69wg6jY9paqSTn4rMkq8c4c8QMrkdkr9sY5objB65qDwmgv3FPaTDXGxUb5RsRvC5gHmH",
  "key21": "4UXgrWnn628uYNu51fiEgMYCFyyL3GRfAg78JZ9TKL6tq3FdfB8J9QymUPuDmbZ9JMg2nEZki9AcMbn1tfdvRzcv",
  "key22": "uMhqAGpkbsaHRoG2fLdL2EjeGkLFgnwRi2dqPtRbzZ3VKLAarAg5z6rGYd6dEBMD6GU1732mebNqTmGBUMbxbgn",
  "key23": "2JBSnoCijv61e4HYMwfXpbbthXMDF9VA6Lq57MospKeaLRd8qtoWwQNrdZAzbL6tfTyE1X5Uc1jHEwqqkNNgojP2",
  "key24": "3QqaX4HGPm4sLgDLdEDmyWX9ftVgMubUJQGNQMPKizeqEAB2KutENy3PAdmJhqu6af8URSD5Gjgc5RHqk7WCDn7u",
  "key25": "2X7rnH5FrPYqMnEgGxbqi6yzLxk38JMnME5p1siUhhL2ibTwAxTbTZBULqi8QP4WqjVQitxPwShEozvoD1ezHzHY",
  "key26": "4HTi2VXSZ2TEZMZMkSuGuMtq62Xe74MBxWhYnBEvidFTmcGHPLEAAQDozXsU1m68KSKtKV4rq7praSYNuREG5QRy",
  "key27": "5Mvw3DNZkrefB3vSLpZDsKCzP1BA6cYxJTv6TujMxRaA6ccfNfK4Bxn3nJ9igr4UT4TM7avAtPYyyvfJCPP1cdNb",
  "key28": "3zDXqg6fL8oGk6ufxAhaDwpnc6WkxHsP2AF3CQmxhEFzt37ULAkoKGshzW5KY4JtNESM92Cbrx3xqYZa9w7EHQk",
  "key29": "4RGcmcM6UxjbzxfQ8rvJtkhEP7se1pVfHuzL9QsAusBJsugfuDxUGqyp4Kr4CVJqy6cD4h7yqZoCTN77qFdVzhrf",
  "key30": "43UHfZZUh4NAoQ2trUpCubAFCFgwYswSQdZqMoPDR1LhabHCHQ9zjRhXKUJjF4UQv4qXmcFMFQihVAnRZaevuFbQ",
  "key31": "5Hk1kwNfS8vxdiRdKps9No9jtL9EuJFTMumKJQhrCs6dYrf1Yv7g4jxDDkLCh11aER8gca98xw5m7p7baNy9fY1n",
  "key32": "4aba6Y2qdDJsQtNtVc7e1sMuCj3ZyoWdc7WCx5zUyDg7a3hxUC4FJmWhQAY7UMiTAwPsYLijHqGrMKSxGuUCsN2M",
  "key33": "3gf4382jgZJyJiYo5uQmqn7XpJtwSPTrUTmrCQN7PBdRAwyUL6HKWtQuZ5P4fo2UwSc8ANzhRSciH7ytLK8jRdVp",
  "key34": "5ua8qY4geMoodueZvCp6FJbpmHLPBz4RGmhTL9GiuFroRHxo5doTCGFKPWsZYzrH3QrVduJLzYakGYCpXDC7hb8B",
  "key35": "56aKTPnEqbcJz18FvqAjdjrbyGr5MXxLpp2t1yW9yTYdo8KytYZHu8riBif1tGvxzGeHvcisoJREj3CHaouVQsRv",
  "key36": "4wt9dgUWctHBk4kMQP1uzNmXJA5c6nHeJGWuAUnhkxt1tdYMc9HpStxjsEzNPvwrSZh52MFMWkxQ9waE5ysG8E6T",
  "key37": "4eRGjYrtMr9purTumj94adK4537PaRDAspPyF9FFhMdciQ6y5MPSUmZ7bGDFN9pQ9NnekDi5aiqsswbACJ3opk9V",
  "key38": "4PutCk2dmVWQKjfTByMhwrpUWuPdTw1PycVSL9eZKEbp9o37WP8aN4XwLnoz3P2SjX9LY1BjZsukygmVgcxJazTa",
  "key39": "2forqJumeGFv6UCkvHvb8srBDy1FxfgSLcN5ARRtz6jhags3cQg66eJy1ichanrLhHBTHfVBUCbpzjaMCaysASAe",
  "key40": "5bqEbGg9UxFSDcdtSaBPdEu3QqFPEh8b86fRYukcKnFo3GV7qPZSFMRiYKEJdH3JCBeH5XAejaVwPzXN798GL6V5",
  "key41": "5gVrPMDaHBZsZyArWS9TyZrPNxd4gC7aKZA5jpCDDKwiyt2np9he1jX5zcYCo2j38mYttbhL7jo2Tw4QkNKFvVuz",
  "key42": "67RK9vdrrMMf81gKNkMN93F91yRxGcbCZvp1y3eZ2VEDMaaCkaDPUwYAioc8hUpNqMviTWKUEopBrvvgsiq6QuaT",
  "key43": "rytgkqx3NcjWpp17dhtSVa7Ftb4AhZzAHAADNivdySEwPkpJYGLEbnbp7HFMShq2vrsApj3cBnsMzC3cRMpv3xw",
  "key44": "3J8a45QYEQitk5KQzrqytoMq7nANd64VN9rg3p7BtqiRN2RZd9eW8egRow2V3fq1bZYYYy6CQhS7x1o2RcZVQFp4",
  "key45": "5aP4BFua8hmaXenbu9ck8yadsdJJH1YEfpyDiKnbLB69LoL3XHrFA32BSFYaBi6chAKYUGtrdEMoviVqvvRLk5v"
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
