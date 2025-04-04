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
    "5noEP7nBx67PytHDyK1kPTYe9is4ybVTbQZEmdPvJqCfaPzXc3JCRRWbhJu7XC8j3Zj9ZAbdoXw6EKPucLKv4GMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eq3CZrNkP4TS5T2BggNSc3ry5td6y6f57mzQUEerVXcDezJCARTdKkih1y6NCLk4Z6SHihsHbnqysx9wnQAmZum",
  "key1": "5SUnwD2icM5gZYEqWF6T8j4ETeCu4P5689r6FtbnuxQ29B8WbNbRQ8oaY1iYDg73Un8kP796D5TFkxLswCYMUPBy",
  "key2": "2VFrUQmDq8svSoSSvKostfosjd9cYk6GmnDHogKLFeF7oJr6jrceJBdFALibnCWqHKt74tVB8S69aaahNt9NYYHx",
  "key3": "2x2N2eSZEbnbP6Bn9LfsLGWDMpHVaH2kYh8uDgT725THNEfaUVFG2adyYGyiHn92eQfuuS83pHcQC2126U82cSHt",
  "key4": "3iJrXyVHhVrsofqJ97YrbxHLSyyAYbBE5SrFJWB2cL2ymgzTEi8yHDK4UpdsBXgXi3SBya6Dus7b3iSuRSqcvUBw",
  "key5": "2RGXaVJcYons2P88jY1mH8pZRzntgap5tpFvudiT6dKXJRcAxjFNJYUfaEsJZmwhzV12Xr3pVkhShgPe7a6vuhHd",
  "key6": "3CTcTVyzU443f7zcZNnSmJLN2EdjUcyyr2JYcZuHV2U98UQVuXK8JHgHfDJ4rvxtLJWwnwKY3Q5jEgQS6SKpyWR8",
  "key7": "4Xwo15YtLgpiYPzCWL1uRs22csXDEwWHyja9YDavoLsYjsqPUvU3Se6mMAJR26bT3xbAbJ66YHRqE7rtbSk9qVWm",
  "key8": "4aZnviBJhabA4sVCJMhEZCGGJs2Jq3Yo1UYRq8Bdc4JLSkDpUK71D3xqgAb5zFGLR9ENrqyW5BjJ8nsuFBFkK9vr",
  "key9": "4Maphe1wH32Mxs3z1cS84iz7Yt27zEAYQa6kej5Qhz8Eg2RZk39ERS3sFmJRaRAZyrJe5T735kgnp1i684UB5Uri",
  "key10": "4bEJYApYqvWjLt7Nwu2Dvb9dpE2cwP1wbgXaxh2UkUUaxRvUuuEf3yzn1F5y5DXgnmTp6XzCz7xbS7BUCKDgHHGw",
  "key11": "25gHVMcekSFeXiytJmWRWRzFJrx111GHVCNYchRjadMyCBDWmqZzJihs4kvsp57M3DBoRaFQu2oKxh2wYtLEcmA4",
  "key12": "5YwhKdm8LvGn5jNcarKhLBNMifd7XgwkMi1LPP15GN6S21kLCtW21Axfy7sTp5EkZbSFTebnB11bcwHhvtsSg4ox",
  "key13": "PdCFP2qRvSuVZhjvCoCMdBDLE716SfNVa4gAxjvXN3tT5TSgWhZ2BYmyVRvgmyFV7M8mvHPzLxZo9jMJf5jx3Sc",
  "key14": "5Zaf7MPne5xfw1YGRYBmvdKizXEv4GdfbuvBMQjzz6ktXQiATfeEfCDd5o9AxDrBAkwTRiNAiNxBidBxWnJisXAR",
  "key15": "3Ykv2tSUMFdVpDk7KM7bLLVDA9C5D4fKY58wooX8FPHDjQMXyjXcQXuYaDsbHBn15n86MwDUDVBL8a5w7yKAfw8f",
  "key16": "pHwnAR9n6prPYPYWocWYGqhfEAhfWso8xmj3dMeF7YCNXk6vKafAJv2ehi4B1xxQG6KyfTURLarpS7yHiGAoVJu",
  "key17": "5pnL7QAwWkaE1QbGwF89FcfwZ6yE3TFSPhbHVbbhqTyFecHbd5rNTLJNEUVuuyJuMKEovbCUEXKZvPoq16K7VvA9",
  "key18": "2ZvFtReHzTPwiPMMPoXHRARGpApPT3z2YbWwh3wwTAvB91CeNKZqE6JJtBhshrVfodCNHT6pStKgnDw9LCubrjhX",
  "key19": "2UaokiTnpdiS1d5feuiucjafKqAWjMf4iiC1mC3oSYLxQ2g54o8ewMLzLjEWv2a4XgLeA62twRkBJb6G5DU9VfMK",
  "key20": "2rW64SJ3yR8oS4w8o2iKjkdqSihGEucDnCXX3qF9DoT3xjqLfUqSNh8YhNtYDJaR8GRCuPd5ZXBNr4NkNV2L3B5X",
  "key21": "3taSbcTBw7rVVQcNXwRhv4wZqkwgKrEzyMeY2f7JARAVdu6pp3m8VHkobqi2v7DQE8Rt49VRtrudTdAjrbt46fVo",
  "key22": "46Not5VVSNrZfdXwf4EE34F37iwVnHkBCiZjJo8w7oVZur3XSRVtjsYrQ9NJEMZUhoaYeKwzUsYf6TnTPD8sT3TJ",
  "key23": "386rg8jMfdCHe5Vg6Za2pA7sroTf9zLziA2xRLE5eGFxvYuvPXnXXHMa2vwpPvveQmMaw9Fx9RXbHYPUF8vQ7ZBZ",
  "key24": "X6k6gs1CLVhLhHA5E1Eh3YcVpJegFufegwiYPxQbVjMPf8Mw7yQR4Ewh9NMQgLNEw894ywHaa3LmZyQwZCJK8RE",
  "key25": "3ZoTBVpXxg7zsaWuja8LyBTAvoku3k4CdnR9F4u4txyaVoziWMmpdoVQuNVhxGCaCprCmqApGVqUxTRWFYRgr6Jf",
  "key26": "4qWfJi9cCDZT36y61SSztDKHudcFguVpUi9DrrHcwTxnGtqUfU257fCCziJxMTPEthrU69JneT9zKTts3H3Xt1fL",
  "key27": "cmqsq7oNizuq2fTzQKspZrmrnsCvzr25rgx3AtEMX3xxXXUxHWN6AZitHJTKdKgcfeQnaJE1NousyWPLXWw8VTc",
  "key28": "2sQiF7P1yphjGxWx1iykU5CbNRRfW3gFoJa9gyiFDUcwf3Up8qGQmKCWiSPVkEp5MRnDoda7BTszUNaB43PTmfVA",
  "key29": "9hR5xD6e4SLWutXgjARhkym1qRPo63yNwa646TQwxQ2nj8CxqYz6ASmpd3aKxW9VwyhVwEr6qbuqryFvbNjkJGY",
  "key30": "4N8QjeqBvgqBFspA66ETvxNJ8AK5tocBqpmoYFvymJthYhgWePq8B6wmxzeiA3eTR4ZG2R1gCMKPMTD2pPVRpuF6",
  "key31": "2G52H7D9zLw1Ywuq6cyEkSgaZctNy22Sh8xLwCqmLEJUDNT1RkN6KwWLvZ5J5keYa2fTWUcBNHpNw52ocfxEc2P3",
  "key32": "31uT9sJYqATBJBZm5aQ9tUcNMQ2PMc2C83odxFFDttWG7hdedEzeE32ymoYGQkfYh9WHHjmyPuSzxXvbEoRVqPXi",
  "key33": "sHkM5RbueraF61qTgA6p9ERZFsE17K1nSapoCRREEbMnUmJWPYzCCKo6UjTMWwENQ9hUtp2rm2MzhjgtadpvZYP",
  "key34": "2LDn9sXHnw4c8j7ci6bxcqSxR9xaAocodHeKPJGJWcUownZizTqDiZZ7dQg9j14svu9HRMSr91tz4ZJAfbpgbWPu",
  "key35": "53HHz7bQzF9f67ureckYcfrwRhn7k3mUwCvyS7TDcz1Yt7SwGwm796n16KchbQvTfjvSKb8AEpBtmXuiY9M91Dyf",
  "key36": "4n2Yps5qurL1tji9NrZuK5cm5tKkV61jqqk6TYXouaRcVKHDF4JdXePmetzmfXyPpdmpetzqrjowsbN51zqcA8S",
  "key37": "3ejjWkThcra3Bz1LVEfUJZB9p7RtZQYijZDxbTBKo7wgtXXLcmAqS4AM8oRcKqymJkSvwtCLySB5qF43cdSkVenf",
  "key38": "3EAfE1GBWcVGhid6RQ5XoKDFkcj1JKv7anMd7CX5n1d3XPk6m8At9PQsgt4sMGG5vbqtgdJPX73fzZkhup9jSRh3",
  "key39": "4VrmqoBiRZNYGYz3TGpdXirBNWJyiMexeiK2qmQHYQct8j1YfuH2QGynYA9yyRgkmVAd7AZby2JjKSK3dTxw6Euo"
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
