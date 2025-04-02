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
    "2XCh6P5QNXFAN3QGjYRY9BZpQNRTyPFvb79sbjLM5tEsYnvakLS7KrTvJtFgjnrtU8F14pUE8CStizWE1tDFBxJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fAHHwdEhMqUrcVQU8jdTMWftSFnLPb9Y6xF6pvq9P3dmmNpmou32tWQ2ZzCEezgppmEdW621BtmGuvjaGcMSvqb",
  "key1": "2sWdM3gNukBAzpkuPRKNmX21a89tDUfYBsRGUeiRh8hXJok7qfmnigfQLPBpnApJH7BhtJmRudH2E5h74ti67eiz",
  "key2": "65L8wRwvC5KcHTpxNmfoGsKJgFvwZd2fjygmt4NorZAnKV15dY8A4cEMybZdKqr1hXdT4aFPA7PjC3DavmJXWM1g",
  "key3": "427J4aXjwFtAyHJ3FRnGAgfLCife1vD6WyUuvRHFnVpnvQZhmTWpPPVvA6q1taJ5QrRNswJm7c3Kiix2Y9Tn1iBj",
  "key4": "5AwGXhaFJZciWPSuGDLFwcXAA1LFxr1RJWeAY9YxyZAgn8pD7EMZ4yCYws1RYv21GjNu1pLmWnzdopwK6piHfVGJ",
  "key5": "3T7BJ2x5Bfj9MxRECSHUu4aUq5qodVt35Qfxh7qg88kXuk5HqKEcyvh9f2eDjXwXqdsyCZFRBrZqepR5yE4mL3pE",
  "key6": "5Hi7BB3jtefqX67RVBUaVYB7nKL6Fqit6X3HcjnEWkNYbc7B1aYnytej3ZCGR5epkhuSH5Aiw7rUsYPQ24jD82t5",
  "key7": "oz8MSRqBL6Md2SFhGmagRaiLjDBmV4DTKFkkKXRBN3ZZNiWt8CWwcejBFiBN5JJjax9t8UAeyABesTBxNwe4F4P",
  "key8": "52TjiebY6XmLjpcj9VUVxpD9yHYpma7hEpfNpZmmGysgQNTkagDw5VZEMAb4DyYe8wwshhzkj5tQSLAgzjnJZQcf",
  "key9": "5R2tCaayEbQbGrWZQ5ZemhsMnjTwhjsB9M37b4xurriqHpTcemMEGG5cJ9GYQceL4tPuKbsZuG4bUw2A5pPDjE8f",
  "key10": "3Db7GuK19bjQp9F4z71q4CsjEaFNXznV7wf6tc3wBrPy5WcVLweuQxhPnf8L3LAGpnuJ33oARMH5W3FLdHhBCq5v",
  "key11": "51C6p3y7EBkeq3HPnHCQeHt8biC5SutaEshexSj1SgtMhU9eWwAci33WV6F2VMaMaUesKv4NfLab87s3rfrFWKDs",
  "key12": "6WwZE6f2GmpTkadmxYcygjF8MgCuT4XD8jaL4U2qbWWC6jDVAY3Cs3VsqMHczwVVqeubr2FoARy5seCBDqXw9Hg",
  "key13": "5n8LiJNCzxjiAwyjL9y3EynfZYb8kBtKhEcr3t2YnLmauSHpHpAFxruaqUbXYHPxhXBTFF3HUJbD49w5opgJuGdp",
  "key14": "WXY2PUpZDTvuyDRdkHJ6XNVBk4W9kPZ5do4edX3ZSukYXe3ubxEeT7yWWG2VjRBeacweEdETq35jHJ4RdQvRSQm",
  "key15": "2APmiCZTqrSdsG7mFkjenPkQHbqkrFZp7TxBVt7UKSU35HTPpMEdnsmMLEcFzfW4UmPuvcAwBUEswhM59YXpL1yj",
  "key16": "496r7D6jqrC67itWoqwdc1CLsDwJ83CPpKGHf1evY1ghNkdxRa2pisdaXuJZU8Dwm2xSoxe6bA6kcQsTx8nQ9SKi",
  "key17": "3eed2d3AZrW121KLjgKMu3omtYX1J7F35nxapLJpbPfwt5DiR6m9jH2pUffcVRSM3f1PndxZMrNUwo4nsX2ayAjL",
  "key18": "2RkZwFfRCFq1r6tcTeUVDEKCVr8bzQGQfnQi7ibq36kQCtgjP6VBYkK9N8DGEH9eYSynsRGiDVS4Es7XrwPeGSPk",
  "key19": "5Xo1FFgaCxZ1Zi8NPTG962foQZtjuokrPEq7qqJAMchEYN9X3bx9Nm4UKML7ZMLeMNV3ZY5N1g3UPrAGsFB9yYGW",
  "key20": "3rnY31uJRDSHPAwAya8CKErTAX4q63WrDQKac7u4n5JYbbr7hLEtyiPGvK2CkZCvuUVZoCsSbgHhHPtfM9iCRCZc",
  "key21": "5LhAnkagKekm8p7YKH3njZuWMQGjoJmPoL8kR8555CMsFcMqZZHDkNZN49r8jsTYGMALLgygQEJAg4qe8uaMLmMB",
  "key22": "3mTFvyHT2XWsYCJsdyKgWjnQK7CyLcSi6GqR1JcfhXKvjnnRPGgpAPo6mWHEjYFPfDxKEUj6nr5uvszaSZvMwMCP",
  "key23": "38irkGfq4G2iAtwwQfWLVB8atGs6KazLyMfAwBToYrxCQNkTJjCLnmy65ovkx6WsmGxTXZ6CJWzQV4baaKg7KEPU",
  "key24": "5XtJeBgL3PPBHNbxm4dXCFQDBgqartwgmPxxftgQEEH5B4r1uh1712a1BJcYsXwdEajTRDq4xXohU5avjycVSyxD",
  "key25": "4KrJT1ks8TRsxVgxGxXnAQtTnqP4ZuVEpyU4coq7Ms5MRw5oLkwfReWvKJ9xXTCyUgYBQFn1Wt2Qon17h18Wvb1G",
  "key26": "4WsvSSQM1q9xdvYr49bJeuLeytEyWvfrD4e1nUvgtTgQtsy1gsgBFvrsyo2mRMbBCjxwBHH54sgdyk5CAXqahFFV",
  "key27": "34riuuCa5oPukq4Nv2smuVBTJWNoD6aLx77Yk8afTcMiMrWjgrxfB7uL3eZ135CSw1P2H6iJgSmJw3YeMhiQHJ3z",
  "key28": "2sPsWmaei7DDbv2RV3Jv21SFmDJqbr4Vsx2icPT1r3j69JoX2onoTAZmymZNrmFrju2HQjc6dmHH6WQGbQrWZ5bN",
  "key29": "5X2UtyPMorhRExqRaNJ2jSCDkz6k1zYAvKsiUkK8Ua7VwBCa7stZyQYxDeNCPGyVQh8DNhrEHefkDqQrzWgsss17",
  "key30": "5NsrCHcMfCh5ybDHTrUa92nRuBMJJNruX5bqkJ7uQwAFQAFPDQFmq1m68bP63MuwY8BSNeshNeJDuT14REsaaiEk",
  "key31": "3Q7hMKbjcJAAcNXwEPvxzjrmeRkAQrHbmXuqWmXRFUwPWCSRHTZwTz8ddvfu9b11DDoPP3UqvFCbS4Bazfnxu636",
  "key32": "5ZEBx85EC5KoC8GoycBoBzaGqQbAy4HPTUcrKoA4sxfCXLokm1bk1ZYdYSd7ibAs7aPXxZtmEjB4S6JH75injTvu",
  "key33": "2eqLMxzdwwi2CwmkSrTPZeKh59Psa1phQ4N9oRJbXqRL5ZHLqX4kxjbhioKajbQJqX5Hr8ajrYLLYZvEn8y4Ujnu",
  "key34": "4ZV8ei7HZbE7VipY3LV5vLm5X39TBfEeNTfYMWTDLPCnQPn3mX3DeSLwdUDx4UETafRvsfTyqSyGhzN8T9WquFfo"
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
