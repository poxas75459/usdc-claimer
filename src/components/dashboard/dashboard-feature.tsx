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
    "5Xana17rBsGFCCFbsDVtd6tS8aSfzbx6ufFE6cb7yspoL7VncoSEjA6PDKMMdapcX2pA2LxKMJ3F8cafquSdhhZk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58taZfL9MjDKZNkCLzKfb6pTLa1AxwpeQr8wQ4TmvrYnkHzuCDp1jwzG9WLV5qT1NisGQ4Bc7CCr8sDYZvDp9H4W",
  "key1": "5b5p1Y918QhCATFJzk3xjkmxQEWTTgTmmtemL23eDAB32oR25CfZdVPJzYkBMF3gEDif8dd5yrKvjwtcGfS9wJV6",
  "key2": "4Cg2pNPKiNT5YJbB9o336zyWwCmneLYaKbGxerVekWYbzgKiS1JvUoVAgmMyJzcRi59ddCirShcnbycK6pXruZs",
  "key3": "3UcsfnvgZerKDyMVXieFNCPwm576AG9eSmiaPq1EZkWbftz7r8FV8iYiFit7pTWCuzw9MEgMBYqomAaFTv94Q12K",
  "key4": "487LZ1VTCcoxe8Qg4XpxPWasNpx4MsucPmUDDRLWmW12XQNYzEdPYpUPDbB9E99DVZa5pe6Ety1nvsZjCz7Zkz9t",
  "key5": "4h8SBp7VEp4M9Pig8wVLrGCAYeDBpoq3U3bEpEcF1ShZqKgXyfKC6nF4DqrmmUCMoH2Ho4KjXZmQ4N3UyrDJhPW2",
  "key6": "5YYhkc28ami8yRz4JNN2xRkzXJLrvzTAmQYfofTR8dQQuxki2tbKqasfsGSfseqHKJV8V4q2nePHsAhPRtQD7Sn5",
  "key7": "5y53r94CTEw95awhvftJiiMYEvcWTTC6giipZ1ev8SJWJat2LuvG7vyKEAobBWLnuWNELFYCM2hnd84n9BriUe6c",
  "key8": "4vQviaerVjRAyZY328C1vbFYkviiUDvfUmrXz7UEoeofwaEybb6HgSroovspbQ6o8RZiNdvLYq6jU5W4ZfmaJnVn",
  "key9": "51zdWSKS2ajddFmeJEBV9wb79YfxH1Kfdcfb5KPsAHzQ2B1yowwUQJ4LWasuRkJDcuuXZH862sMxJGHY7dYQKkRy",
  "key10": "3EDuE8KFRnoKtFbuFZegoHNus3nf86Jv8aEu8ncvLkMyxcRLaJatucjqPxbhk4jUDhN6fv7kzzcyX4PWVZ5viuzT",
  "key11": "4x2DgnL5XJs9vSWqpk4G4BQSx9jcj8PdHzANqr2ttxWcGen3xeTyXMmqyBYZDTVtCMbjdxioiz9vNifLiVmwp7wk",
  "key12": "2mnsmDkmS7kZ9y3QRs1CmPhnzvtoDsYhhFPssWWZZdpayF9SXAtv6NuifW2ryEkAChYvZ1VasvrGfrtQH2EdhmoH",
  "key13": "3BCAAsAkoUq2YBQi7r7dhs79W8SobHsYxQhtcYe5D65vnYX5TDtk2hQXSGa9Xa2281pSekzCJG55KQBGqjojDM9D",
  "key14": "2tMy25WNqsX49aLVNiU9ATQ3NXBHyCy8hz326cLsUst1gYVyHByHZDNy7i8jZekurExCs6hyfgpvjYaMbvEVU9Gb",
  "key15": "4BsDP5iofXTxX3jvAqWUNK3d5gDkJdKGFh1KwYEEjVubEqoxRozQxuBd5gJzfSo2zrfgeQSxE7oY54VDghUYaviK",
  "key16": "5oPpsNkMtLdTrqXuziipsVmGXkVcWX1PTNBWKjVZnZY1CnkK1XTS5RTdxrSN2KyoGc63Pyk1gPW4y8yvTYopY6Ts",
  "key17": "3SWFqpeQMSGDn5qXre6aePhMUXFyhg3v6qSb6pbCmqWeVk1d26n7N3tzh2TzhW8D8qQGv8h7JCocyk6gWoqcpesJ",
  "key18": "5UcgvyPNb4umAdKBKBDtyEv8dUP7LaSfjPgeKF1RM75GLRxXXDCGqLHfSaRRTepzmw1PEg5eZv1XBT9hvxjcEVYt",
  "key19": "3hQvp1x6MAhfw7hsxj3BdC418a7raoLGWENjNe1JFzfTn5PjriawAd7enR38A3VgnqEj3hN8cySSzAb27KEr2Cxd",
  "key20": "bLvBRs82pKFk35kgDDZhVje8c25Wvq6fU9fdpUXBEbPPougwWuLnjc2dVrmnUkuuGsKCCqHgQCSmWV2neUmTVrM",
  "key21": "5SX2dzeewFVEm5jq9G5erKng8XbFn7MKzj8yDrZPXq3mGCVyaxfvCtzW19YWbd87YqtaKE6gPR83wScV4s6Vd6eK",
  "key22": "37zDcUuME93aC5ztVGu5W8N9QYCFRMPSh38HSVm25cGZezKhZKm6b3KUqyw8KxdihTMqhdxtW8e4nQ8xWP4UGgcV",
  "key23": "67HSM2JiKtQj5q9itGNN36K5SvYkNxRhQvS8ueCwnqTdPjnmmczVJ3WWL7NZRaTsznEdnTgG83EpQJQnhww2o6M4",
  "key24": "5wnn7Hh7rTJodGbCQnPd5AikXGwphJzyQ8BWb2i5Ds1DizmY6qyV6cKnbFB1WoJh7JRQAYECKSfWt3hFzDw3KXc4",
  "key25": "4px7ouBFk4b62EL9Zm4su7r84Eop8dTiBWUeMs56Et2sgFA53bPnyQashkVEVTrCLLWVjoJuSzuYUe3LsuE9LepH",
  "key26": "23uVuLe2JJqzF6mZdbkzMkUsB5rWmVDAbhAAvwAueYmnedF5xL7jp8phVt2nVwy1WurJYT6xGHYPGzS61Xnhz7xZ",
  "key27": "3SURqh3bdJQmb8z1rcLG2PtQ2rGKsrfWfXdGCFaxsQ7uYEsqVzgCnMigCaQwrF9bMjYrwwxpAxYaLCV8EFYswuFp",
  "key28": "3gbKRDP7RBXd9oHHebip6FxCXULJfQBoggPZYy8EHuFxYkcbRn4ZPuLEgrSHJxnmaWUmwPQKiriiTGyTDrV3D7sR",
  "key29": "5b9b5jTuLoYENBzHVUgj9nEvxF73hKkfbErFP4wZMuWdKYjKisVXnommGv7jiq8vFobmmQM3zrKXCPR13wyD1zSs",
  "key30": "2Wirofa7FFNYfWgSWMZVFJcEFenyiaos7v7iCeQkjrgFa4Jy2QNSXGcdA6jBsE8X4wzRGtxdRQ2QeYCLNai4SBE5",
  "key31": "2ciMjwdyXKAt2zXkA3ffRVw9jUVgAPP9QyA1Dbg1aS8qzJ5pzxcxyJq4TqUxyXWutZN8JVFCNTB9uCaFFonXZF5m",
  "key32": "4Vnxx1T5vwVet3iK71a9J6k62L1URYBPviijQXMoN76pQoX6yHeYsyF9cCVDyA9Doxy1c4j5mwrPTeQ4G1XV4dZf",
  "key33": "5wq9XvdvpwtMCJyGbc6dRUVkGWsk5zzShcG3A5ecoHdZ6czgTR75B4pGzACVoen4KNakQ9KbKCeqWdpVUUDkgvFx",
  "key34": "3ZPrn8UVZtnAJvx2JuLUdAuH6MTxdRwbakQunza7bEzxvmFmVAdTB7FN8hnzq1qKo6cXr9SYZv4utgYmq22j7asN",
  "key35": "5rmBG6EUCRjdibfGUB9aZhmw3cZSkCRCp2ZnodF9N3Dp8ZQTQcYrzqcgmPbzKY9azCYZ7GaLsx2yvztVedNGx2EE",
  "key36": "4EJ4VktGeGuQB2dvRch2Zy3EVr6yWV8dyY22grfhD2H4tkeFPZ9bSsBWCcK4pnABPTB5TyR3GsDJ3MfJ4AEvt37V",
  "key37": "264HqKwiasRNVo1RNX3wsrVYieLH9XcYXf5nsHhfDfNknz8KMoDQ6JyD9WkBYgChyZckAzAkreJqxwAD33n1KJZd",
  "key38": "88vWE2yPm7Sw6vQe6VsYfwHGmMqjWGzhAT5dE8YLMkMyKGrQMkEeU2gXroapTCLkg1fivXS3JM81GARCxhAqi1u",
  "key39": "39S9rmsikfZdvbSLDAYxEoChLVApsv75cFsYzc2pTTjCjYq8BoGNo7ykPLEortN8JactsC95vRMQpq9aEy4rWkMv",
  "key40": "27H3QXuwkHU4e6qJCkedwSm4zQAFNQNjHDv1Lm3eKHPYVNDm1sbYxV5mzUfvaJ9m93A1vRhh5THqxWgQAC1MktCk",
  "key41": "2pSMqpCiiokDCSe8fv3aF5zxiYAUxptJmddn13XY3BhX2PboLPQNa63iP3GWKscXFmgvAE5SzMEJ5gKN1iDijHGJ",
  "key42": "woKjsRCSmsMZwXn4xssFpbg1WiQyNNRbW5o4xyZFkwoazra3CsF5dVDR8p3WH83cCnbyERVdGArRC5tVrtzzRWW",
  "key43": "4ba8HhrDLwWYHe4tD4RCfphx9zMgHQkjSVxG88Sp2ge64e5hoTn4jbVH9iBAj6DjJ7deQftoctHjv6dEqjKPXenK",
  "key44": "s2hSQ4pFwfXsnYj9hPX9RaeyqDi8rqttFgjH4WZaohpBt8gZ5RbpatpHoBUNobPczTLbirnCRthg13jmMbZ6xpq",
  "key45": "366f5RTCxREPdQcPdsmrgKCK5wNPELTFPLiY1wKqqVEgdTbU6DHA8YwV8XceNr45YSwqBgGgect3LTU6NzWrVLy9",
  "key46": "2JDvyHm4aLZmE57Y6yCF8MWWxY4SkbyJLC5RbJworHgMfUDn6ufbQFEQYpMXx4L5zfByocqJcxAYziczbDeu51q3",
  "key47": "4sBg1GS6cp4RAZrz48zwomFfmtY31H4ZMoHfkJYySPz8SXwUmdFHyNMqGt55aJbNYmGp713cSJtn9wUAqtzup5h5"
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
