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
    "5VKYdFCh8k5kduevw8bB5RZmQaMjHYkL6i2tQbNraG5mhsQXTVbz9xKpt5vHEkbzZbfUueuq9JPGGaA943j873h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5adfK6dffkmdHfsrzS2pF6e4nYKntWus9v8p2y51Rdtq3w7tKE54UBSWUCmgHEJzNG3fdRzYasosVHQS7DMZMpXT",
  "key1": "4WttdPoMpbmo1pToYQRmdVrTgQh5zVS6cXLZSMSBaUxHC2kgjSM7PjRYBeJzkTESWGybaHPaPywUAm6LkgPxAqWa",
  "key2": "4c2TX5decmsfNBvQTGDknitbEsMDaqRuMK34aKXpfxjQJTU37BjYLTGpEJDtas6hVhWnsWNSm8q1NhYoaBBRRmsB",
  "key3": "Jzdhy7uszwCsenj1NPMona4jdZFaGvjt7pSfzUVigd8iuSXjB6tBSo42e9ac3tKho9ZL3JV7YygzKQ8DiTpmjXD",
  "key4": "xdzWCVHAZaPgq1o4V8BcGJh6hE3bjnjJvm4BtCncitkPcxkCkcp2xXh1t29i4KUmGLGARNXPMoeTQ66Gwyzxern",
  "key5": "3DKAHoWhbpE1Qm1G32mZVc3T9bUjdbUBMqHYogsNteRvt5vp2pH3ukLMF1zDr83AgETLfaVdGdgFdKNdMGiPFDXD",
  "key6": "4qJyjRc5VR5gbqTj3uhDSkZg4ZNimZbeFsDi7ibD5gUVaE2EjTy4VeUpJKFwai5ZRRkj7jDfrUbbzLB8F7cxLTDS",
  "key7": "1d8p4JFQMGdf93UGakeg6xiXWrzwWXasN5cmPjuynxL5yocRVg8aHFskJHKkLPptNYawKv76zir1c1q1MMrma6u",
  "key8": "5up2PTr64aUSHYLnvwoT7LpNufBSUiYy8pvvX49GpDvhABUU8B4z41Toz2WVpcZQv8NSfpExySEhXUk9Uy4NtEhW",
  "key9": "k51tgEYw1eRZQpARedWUDVhm7V4gVFmFvwBreeS7CrRjhQeG5jhRniefRVwmdz7pdCVHpK7Gpitmzz8yNCMQqBV",
  "key10": "46AuaccSWiQmkXyCaFXgpk9sWHY3w7Dsbm58whQg2nwWvPaGBQQqffwwBQqwoEPxxEbA8ukRQUmcorMSyDpGpiv",
  "key11": "59ojLfWGP3Qmdsn7rDrCaphPkpPfT4LP6ozagNfGBysZKxY7TFH2sJtBaaudYEWNu4RfA8X3Tg1pRaYDxonjuFVK",
  "key12": "NV3Yg4pjTpygJJynuBSaPmMJQALNLmS7nTqQFYKR367TrLXzytshfBK7pNvFLcfuPg5P7uXTQE2QEsZovyntsEd",
  "key13": "5qksWeXZ9AT6wGLusx3UYw6Vpu9xsBBzY3cyUSMxKnKT2H1ZY2fSHfvo3njd7Hua4wqCbtqS5S9raa1Qr23zo7Du",
  "key14": "4We6o4NoeXXWG7pqEVcj7Pxt1hjdGMzxoyq9F64MBFJysEqCQ9XH39V5aJmBsejWSFpZbbSQcerT1t4m9uEW54AC",
  "key15": "5yQ8MjFdwmPYgo15msgXHP2zqpvFKUzqoRyyy1FcesjQhPt3C5rd4EobuHUAnUeefjwhz5J6SBYjjaruCMwS5kZX",
  "key16": "5ZHaeNqZmpEvfnPBU9q2YgEZBKsD4NXrXSAbq4kbRvvZm7UhC9PDxH6p6yduYHGzd5UmEwLR31xn32beBNMHxxEt",
  "key17": "54ynmCxgR98TJ2w67JPwnm9fLAZ5CoHxAJGg2CiwpSLYqKZ8TZQmBP2CwBsRw3vc95KzdpvGFFmNWUucq1zDXrjN",
  "key18": "3meU8gmv5doP7ZWgZfFmfe3EEcmRAA1PpJv3kBWYbsbStGPtSwonpSr2iP7mVZQPuvEsx8NUVyNdL32WTj31qEX6",
  "key19": "36XseCDPztpYFKrqAinfugZu6dKVhkPNmBNptiwSK9FNprB8HQfRasmNhJhgSJpYfUoer17YLtbaUvjVuX77HxXK",
  "key20": "3itJBBxUSDuQt7Fw4G6oYsfY4dHx5QBu91ukY6K5PvQAgzUPQjtRxbzb9979NCNhFmbEw1CYzqHND8zzgWK8DSp6",
  "key21": "3PFPVtpeYUppYsmfETovXSRrcjbFehh76HhrQSqS7s3dzkmg8gnnUDZ8sG1Sk9fBroAdePQX9upMjK7fQYi7dWJS",
  "key22": "7fvSSeV2SCdvJweA6fFtDWiHPeUctPVBEryjAzV4yzM5fe3hiGG7CxBFRkAcET2QcSVySXkBbck3Do1hx7t5EV8",
  "key23": "4m8u967EzM1WmmFmpiiLZgb33Wh9yGXm4atAMTKYuqNktU1K93uQ4h6t2ygBSTjqYPVC4qr6yvBPAC8t6P6r4Gvp",
  "key24": "4GnmShf1F1wm2BQpKUWLMptrzr8MTem2Z7W7HUHM6xrvutygs75ZytuHFunBVBkcw4d5arsHuzfVY94ppFqhiV4i",
  "key25": "or1fdfuLTeTqgE6xT4KSZtxjP1uGUyzS2pcy71aBkZb85wGiB1b4NaszE4SrGKFpqN2WAHLGfhMJzfzZqj1qmfH",
  "key26": "2uVXEYYG1G5jNRRqNoM1EHFQbfkxuz3jFkM2QQCmhcwcPyZ6taFowgCVaBVSt27A46Mix3tMTrG4gDLAWRkD5iFa",
  "key27": "64D3Vqv3axak8Uqsv71ao3Cpqqj3Jb7aXnucyapzMtwNA8FTrdHkrWuhwvTDy1bDyPhK3iebCeCfRTqpazRnGjNk",
  "key28": "38xwUMGp2ksd9zsG4nk6uKvC1FMPakM8KmL7nxtMJXySwUXTvnPghgHYZjzLUi7qsfp72jMvZFX33shCi3HgMk5y",
  "key29": "x7wm6VuzNa3sR5N79cyg2rfTvyUzyjndUEt2vpJSm2NJ3k2f6XvQVjMuVoQMGN1iWtX6c3BuncE2yinR2zrRjXQ",
  "key30": "ZPSZ87LfgZ4Jz6anZgNrZwYUCpZ1zZZtH6RMBgkdpPsEj2NyQGcZdpianCXH3w9TsBZHX1sGDr5yZhaigRk2f5r",
  "key31": "3ZuXcVHoV1sBvHL6WZQ2LT72KW1Q8LNXGYTQpYQUykW76tJdvq2X9PzPthWvUDdaBMfKyNhhCCXPiBgWr5RwKgzD",
  "key32": "5fPWY4X8CM1AyX5dETURa9w3nPqZzqWrrwaTeW8F18uffyVTk5bUWQ3eJ7HwbiY4UjjLxJF6eMWpYNLiw6S6oqYv",
  "key33": "441cn33axyMCNmXRFSS6jt8L2s3QfovhAKbmWKiTyS87mRR9TuQmMUwJqWFNnLaNFYN4YKR8gLypQuBEj7rBTd5n",
  "key34": "2Fi6WYXw54UDSgbakhK6Nvt5j3QqhADLyAjcve7FEJM5SL6fefNJHSYBiTXFRH6294v8S8Z1Euw8RqNmr87Ur9EY",
  "key35": "4NgS7x7D7tGnmC7qJfStShd2obwxyNEdcGra9sCcnCDnnhAmHexDgZZH82f83XYYnNUKbmkeqcKahBi2uHjYX1rk"
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
