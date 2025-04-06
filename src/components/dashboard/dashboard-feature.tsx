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
    "4QfG9emkb6oEoN8XZGxGp3HAoi94w7KS5duBkb9BQLEWgoBeBX2AqRH651X9hMAAUMRA7DftAhVmk48rwZM6tqxf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KST1AQ7h6UELmxertKB5sySspHd3McP7VYbMkjKPHAcm4aAyVr5tFThQ41oczPVMeXUaapVVJSMqMKy5mED8rMd",
  "key1": "4UW9gTJjapRFJbYFqkZDhbdLfQnRpLmN4wFYFve11WNMkHbgBBKVTh51fyB5NixFziMW5hxcmTUKo8C4ieY3aewd",
  "key2": "379Mdd5cNuPMhnwk2btTVi4qPKcR4XMNkzr7fH5WXTMUxaK7bJCHHUKahtFfVwYDVfa9hpyz7eXVA5dKeLfyT7CS",
  "key3": "3gZon38JNRM4Ery9aDKqXTTF3tY1vy4oyQ62DMwHS8ZkeDWunaQJzqsK5m6uXADVishd5nzZSE4fgAYA1KLie99j",
  "key4": "4YQywiQXaAPyGRabMhje4KVoenrCR3RUZfvWBSacgUAMorJMQWMcTce8i7bvZmqwYvJ81YjJw4Y3RYtAVQYM2zXF",
  "key5": "2bppzTtSaV33WXiJvwGBfuLirAiJ4h2LVZUYxA6f8hdPCGrw7cms8F4Z6j77jznyNWcnaqsvn5GmzwzzSqxWXED4",
  "key6": "vCvi7cfJhax73aRXHS9Wo9cyUSNnZPFg8395kiLAD6ymt9iQ7iMWkmdYi77AprWdyS9zQP6sAqRWesPgcJCZrsc",
  "key7": "4JF3zLXR5qkHv3H9qcdvWjUYSPq9meAvTdBRN5v3xWwVhNkHuv8sTd9v92qqfoKCcpmG2Gyq9GzubA5r4W5bVumN",
  "key8": "5YTDYBnPPKtxrzuZn6PTcMYXKA7JJz5i1PMYNJ8PmLWueJsKtbaxWocm7SaUCEUqYuKCpG9kZBj6LHbYdzx1Q5WT",
  "key9": "48JmZMQyKMVZxQW5kcDb8UAk1GDedaJMyBUzG3Bw9QAxJeop8J7VFEDZ3kiseeNpTLnE94256dntX5b11TzVxNQK",
  "key10": "7fzsWhcD4TCuDoNkWuaBfVZrDo35CipAorcbVqQnfDWQbe6ebJJzE1gNYFNdXXVgWWujTXcyyS26kwivpBzLnTL",
  "key11": "5K9GDj1ZBwGFJjhp2V3ipSmudBp3PYpRkxRbewji9s3nUUFdVxib3EqwMWkgAv7a8aHmwm4NQyxFJTmamwddD5Nm",
  "key12": "5huAMYBRfPjnwDsJQJjMiuXT6WRHqG6xjJD8AwGDUTxDAap7MvBLUd1N6iAQHLgpDUyaNPcKY8on9mQQKMbQ9hix",
  "key13": "53nH3FGrSWDyXk4X2x6LunAef9fx1hW4dRRPfF8LjFzS4RH7bbbNGxBYDHqxVe5m1JGNwod8fvBFJic9xBSkpNqB",
  "key14": "3BMjkQwo5rmTYtGqiv9jVoDo2yDe3qZjh3PENteKebUZvsvwMoLJXqnhfzHJPNVCJFK4jyUZy56z1auNbVBR1eQK",
  "key15": "rtQmNermnS9qhGLanXU3h35MLA2jznxBuGYCaGzjN7JCHRnHBx2tsBjjqf674K9JkWX4Q6sEAxw1nMmMhFyzyUh",
  "key16": "5d6mhsRjQENpUuH8Ur2G5Dz7bT6Q5TJUE8Hcto3aiLPueBQcTp5pazmp6kgwPn9ehFB4VPW5R72cg1q99MYV74LC",
  "key17": "4Ev5NJKkWUfzYKVXfsXo7oN88f9gQxuiW2Wc9EJ2kgAMssgFAeWP3uYp93R5mHM5w6aBbjrFejfhrS1N6Ca6JYZc",
  "key18": "3VjGpuo4AUv7H1mMAt8WQeMw7zvtrY5oTBXJPQvStUrYyGQaTTYWhCy61rbK8iuGe9MFSL2yZGVjLGkpHXCCMNVh",
  "key19": "NyUL7GfSPMN2ze8Do23ZdTEjhnogbbsNdzuW3ML4RwVcAQopghVTtN8yLtbufMdZPtgd8uotYzja7ijHNptbaHo",
  "key20": "3YLxm8m7W13bmWgUyaZE5wVz4rSBMCZwSZHeHbVqoqghkqpPAaAh5ZXwbHkni2gJ6iBXSwKU2T5BGMDciHSPp38R",
  "key21": "3ZogHAQUAw6vLrUZRMEydRSLdRyHuL4jWEU2qXZaW1rDkeSkDnKQAmFmbNKSwWZauYSYG2BsVB8xmyqVqztN22f6",
  "key22": "51YnJDDn6mnyEwDDzX2TRfhJjw8bdmeCqsiZHqVRWvZZHtnd8XTTjJfMMdqJJ4WCDyEYFJTnjeL3MmZppc69XHd1",
  "key23": "5DCdFZHjDHCXCagUSpZroH1KfqnjmogoCTpGeqR1yQ27mQgd9DAHaL5C1BkngZQTj98ifDpcrXZnHsxyH6jFEthP",
  "key24": "4amkWgaz9zciU8ztFnogbNxEFj6q3LLNEBDyghNvLEbWPUm4a6VnmZUrSgUGg8TjodWjDEFijPEPuVoxU8nhTdj9",
  "key25": "VyXuNTWBKJbSwCuG2yvoTLKP2PcTj9rsFcKQSf6TnbRbRdCwywTstSiBsX4y375wpVdFzDfZtpYJEgzsmKbRS7Z",
  "key26": "2zFJnjWw1Uvws4qaZJonkkWj1g8ZDSyrpm3A7GuEuFu8JFJYdwciQi3W34RqqTJcEkwRTgHHws8htELbA22oaTym",
  "key27": "26bvqTkTYUqxMhrtD8fd8u9g7bEGmLfos5AQb4NhFNynFgYCRMmj2fLht8DdURtkiEQTCtsRgfuzMaBkw8jQrFJy",
  "key28": "4eEG5dsES1AScAFgbz6yrE6TVwaa3emYsy3MmvgoSPLGQLGQ6DFyFpv63ABJ5FS49a2DMsmbBDkxB12g1nHns8V1",
  "key29": "1267FhdK79PaGFoMn4teuL8VsxaYi9MvSKmo7v2rUYpSn7BAG2VXFNVp2FC9LtPDt65uA9Ex89jowFa3cnphJHBn",
  "key30": "58bFuNQPXxJpBkRFnomeCzJkodYuVqCwX7VtdA5ZsYB8aZqLaBZLU8rjGZ4gSmttQUDX9ujTPJ7NrMQCKAQjse7i",
  "key31": "2TPCE5QqW3pUzL7DFnGkuo4RcpCyGKY8o2dLfLCPfvRZyAvDi4KPcDNYE11F8xhpM2o2Q7ZErouFAp3mSvrtkwbQ",
  "key32": "oDpEZxDGAnL3oRySVpaW1ncEcTha1KSMe79Lm67NmP7egBq7eRFwcUMsZLfsbZzeXV9XFuyT9vDnjSHZfjrpq4F",
  "key33": "2UxQCxcR95XTS7mXYLxMgNnL8b2VvFJdpoomjNWjpmV9SSCCNbPSJ3dLpq1WVuFCuFo8aFa5C4TQpDNo8qvuE6uS",
  "key34": "45XrV3XrVFcmp5bNesWw99cRftN3aZNRjaMZRVSdSEZgjKMW2zVSc5jd9Lf6f1xb1qKfrV9vv9uthUBMawQZHFQC",
  "key35": "5s6iRqw5Qeq18yPbu9Gb3TzVn4SoHZZphVE6hUN44mgE5iwdwd2A3iLEMjqEtCdiiBJQQyf2PZPwvYwCKNvZQiQP",
  "key36": "2x8yemSRMDp6mXgrYPfq2kdYSXdYx5oMdUzN6xLnN3LLbwZqPgTPc426jrm6Fev8pDz2fUwprAeniKJAatqcYQQ",
  "key37": "gQjrwyKSkJJ7oknqE3ALoRF17FCk7GmFScnsb3j6YHzeZXdZT5oS7VwFQtTTZT6Aa8imR9KPwP3GaNhuBYaeHvo",
  "key38": "YicJx2cpc93uuX21qW1fpx95B7CdhMM8Wg7cgT1KyYDKJf9QQcNeVXBmsbcPqmFfFY4gkq36TCkaVZ4rdXWFAnk",
  "key39": "pb6ieWepNA2N4du14RsfqYwv1oZbJJJg2gyGLbpxJQgbyuvwvEQwGnBnQjg9HjTYhxwgmEHtxPwqM2wHCL57Zmd",
  "key40": "3WdZqv8dotk8GPxVjpNUotoDxj4p6ATgAue5Py5AKsk87USp5gYGCaRcuC3K4rwd1gcwv9etqXUNNai1hqmMEgTv",
  "key41": "3DTsfqw4NUGHsbGawBF9ua8pk6m4Cn4uQvNNSyLagYYfz5dRXuzj2wMSixvjfVG9BmHDVu5KupjPfQEyyyca245"
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
