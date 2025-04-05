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
    "3PZkktSE4LEBXVuWjW9ReMR7bnjAgsCrAcRgZYRqBXXzyDgjaEBMeW2fdgvYz4QLn69QZ5Gue4x492LvaKYR6Zsf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EcZC3BGju5ZCNVxsCfPK3EgaEtNRvxVNaGZFAybvYAQVBv7ZiSqmFk8G68AT43uoEeBVk4fLGyctMvMExNqABW1",
  "key1": "3Ahga3JK4bLdcDh645XbJ2HjSf88wYnAWL6XrhDbbmBQym4dEsUDVfZLzVYYW6tTcXYBw3KZs2k6YnzJJ2dUWrGJ",
  "key2": "Q4UataeFN3ykwtVA1XXE6aCS6XsyWmCc8H8czNkAw5se99Qtz9sySbmQai5ArSrNHi2H6s3nUVELFTsYS62rnvS",
  "key3": "wh5iaf3bQDuz4EtYsfbpp8bXS7g9EAEmENbG8fQUWZEGPkwF8EDZPvYcBT3dvRTyHHFb5UKPSboZHVBAF3KbnwH",
  "key4": "Yd24DAh9JBNCQZv73b1JpuPmaXDG6Vbdfg5E9kW84ZbHx7X7Z9DUJYfKsytUezsYTk1gp96uAXPMi1C8cqZMyBX",
  "key5": "5NfY1ncpM8E4X5Jg9rA1ukpgyEyRPyVF7wXP4m5c3fZipJfsjbHaw5Y94Qp4d3BBfKfN2pVWBeaf5dU14C4F46pR",
  "key6": "4L7WJf5z4AF8ULJyTiENYT2X3bRd7kk4qFG2HYm8CXHxh9472JiYSWBBtgPBLWnAxnXJKxRq6agCnjoKByddwuFa",
  "key7": "3qTgb7hYbhoAth84gxePtDwaDZRTam42x6gpi1tiR22fE8Z6jDzWE2ySZrCS3D9eDMv9BdiRFndgNGmiHn5iyoSj",
  "key8": "4YB99AMb9dAKXYSzT2pp8LWzSi8yvDb73mwc2MerADxzhwLEdMBcrNTNzVX1GpLhWovY9TxYabQxN39f9ogBZXrT",
  "key9": "5DT1P1vAVMiDZS9UV6Lt7iYLzBSnF3MPHLVJ64A9jDHBwqen2fpGKqTXVwVGtSCkmUyhnv8ie7hsxq5sR8JRwKSa",
  "key10": "5DjbyLBHWzu5zXKDc689zcocNF1E4Kwc1gAr1iYyGvF7mAjAtfYP25Sqke77uCNRZUqsfUCu9cUtFRYYxdhyQGLA",
  "key11": "3rXeentoESnTDBipQVfyFaNerBcW2Bwvpbj5CPzAjqDna4hPBUVQJKX7QwZRGCv5w9PDJFFD9Z3FBrhozcFoQdRS",
  "key12": "3FFUw3C4apm49wwPuuXdjsXW4Chay45ijbLUocQhCKQmxKZc8dDV8ys1ckabAGgkiEncfpJfMuBtCRgC9fDVVT7Z",
  "key13": "3yeM6RC9tSeV72qVcqFrz3uPodq4dQJW1aJcUA5mj7qDxmaQYNS4n7QnvzbGmUXjTsmS7A15eVKAWMCVd8iQgtuH",
  "key14": "2DFKhkPLyKgynVFnQbAQxYDTxPSTsqMfc25t8DQ7sJiaEAGvkLxWxMc1bGAPCoAK5EX41gcnKuU42EbXez4i9N5k",
  "key15": "3HcKgs1jPz8MXUG8hd945KVhw4vRWoM1pMf2ttuJr3Sa9jMtPRUzv2b8dgi544p3JYCoro6KTGzNBjFMYauLCkKB",
  "key16": "4ymmA8LwMR2ELi6tnHAb1bNJ4QUzQRm9YeG3DKzVo1SzHCJSSUVohc9VDNsunwGz1aBdjpv1RXMjULHfAicr3QE",
  "key17": "5n4cpySZLFz1UbS3s7gUt7PYX4vZdmbbgYw2f5n8vETcTvMTSpNnCNjpDRkD4rE3StgQFpJFehSZaGA3CdoVgWpR",
  "key18": "78W8JfRPCQzh8aMjJsjSvF4VrCZJrMkSrD3nLJ69exaK8WzQvpPztx3DN1UBYckvyY9JjSRPZ9JHvNSinfgHd39",
  "key19": "3r27RyhVJeGFV4BsKV87C2YEDJXfT5d6S54hCTbHLeQPyyaBTHa6XmT1H8WBWHUrC7P4iKotUAtav9RwYng1tZLZ",
  "key20": "5bqAvww8mUjygFK46FndavpcsTdudut54fpKw5qApcv14gj9AnfAyDFGEPBkFx9FptpVpgLqz8j2QWEuTjdu2Hfb",
  "key21": "2pbcry4yrdvVMmQMKrMB1WjCqcG7WXTaB2jzx3VwFYk1QgVJW2nEPHCHNHu8s597YNzaJcppPJm7A9tAM66FoCrU",
  "key22": "2CbYEunCPD7aUY3xifCQbe2h2ArBfrNdU13Lbx4r8TiwCsY7LREntm3Wg1NF94F2VqvXC173ucoJNQJVx9uBJ4KK",
  "key23": "27y7mCUaS5nkJkQid7b5xKqCfhdWpdXhGcG29RmA2Bq3U9mroqYrVGrpgjUX5jmFHnozaGhKvLMHWvThfLcizksM",
  "key24": "3kCTArLfFP79GDtevHNMNB8vjr4JnmacghKnCqRwrSU9LFJep5pzAwnQBn8FAfVCq3pFNk1mfp812grcMS4Si16w",
  "key25": "1gnu6CnCqBYBNsKL2mjFvoDr7Fu8K6ZmnM9wA47tPzbPPaPY5wxdxULv8qR59rQXdGe1EtLFFyjEGbKERYyCio4",
  "key26": "5mADuft11pAjufRJ4CnPLyZZf3ZXAwbebKtD84UG5xvzWaJr8WKavRy1HjZk6NrcL4Q2WPHn4GR8r9Un43xtkbe",
  "key27": "5oWEDbJmbmtjeitRV1fnhkCD5g1ddMaTyUWKP4iF14SuH68WzuoQQFmYKimdJK5qsNCyeqwMCH22xLQXsdi2dTPS",
  "key28": "5Zv69xeCKowKNGLiULdbKtecAEAjZ1wiPyvajGStjpDfdWXp3KGxoVFcb7u2zJ7A3VNLXRLxPxgv1491bpJn89Lj",
  "key29": "5upyQ256cFat8o53sUhew7a6B6F7HU76pj2WXU7Vz5mKA2wH3Xn4fvn8vTagtnwFa8RthDS2fhdkhEyQQojBYWsB",
  "key30": "5Kcz3EhYaRm1jFhjdyesMpJ9K2MHeyx6bsWywrYT5CYpbBhRxTDxBawdSrafgCxGjMSrbvf1eWdDMUMfJpFbESyF",
  "key31": "5ra4eYsW4qbfYhPWTTraHPCKyqzMGX7E8cQJs4vPRQ3mV5XNBYmtnX9wLnK58aAU1TQqnaSiu6HUYSNQTTvzkD7H",
  "key32": "5fQBYXqPSjzWr8Hgx1HEPbA4GaYtme4wmmud176r2H8o5vUtNsgW3BaoojXkVZRSwoFydZcbaZTrdebPWWD5UTtH",
  "key33": "3DtaGiqx2hZLSy9YW8LYMYE4zdxAvGduyQHraL9wY8yGskfxw4qcWYqjcDbGGcVzUrS9dscmfd3BeU68FGS3TvG8",
  "key34": "3kesFvfxMVJD9A98U8DVqdRJgGmYG21mWU91Uc3FqXPhMQBewBNLCSHrk57s5t6VBV1gthMx3wMT6FELCA56aumX",
  "key35": "5UsUjZiFY6cq1UYJGC7TcNkRK8wCVdjoKBFq5FtUSNnLHZF5w5aegXHXGrRSGbzmNp1yZQQBdTwdYYVffgWCvuZe",
  "key36": "3ZymT1yLq1XNpQuKL5qnmAqJNKm8VAnoVtEemwathSzKstNorsZdQpFUJCBZHAeKBm6jbkuBLucyguS3cUY7rTVw",
  "key37": "2Yjnu7bMfWBR2K6i2H7FyJ9PndEgbLuTqiKmkmoJEEgfFsQysnM1bPwMAqhKn91rZMjisK6tAG9L7XjaJAroB6DR",
  "key38": "3a4snVvMPGMytrTdGSKjeVg13sNSjYWPpN99DQ6gBSeBRSUHwaRMH4X15enefAYiD1VTYVYX3cnjRwWbktYHLoUD",
  "key39": "4uLM937PoQg3WxUFyE2mXa573CKwB35du7LvdCZ17mD3FyT71uFoFBeMkA3FdjVNANKXwv11zvtKHMkdH8UJ5ta1",
  "key40": "4TFfW9k1kP8nCB18kZrRYdfuKx8vYSwfywLhJnPVoW4RbPo3Wg6EvJJH32whSXoReaa3eE4EuRKto3kG5JB8mi9n",
  "key41": "5Y9WVjx3KEqHupc8yYgz8bauwBEPuicGEd24x5YPHQyXnSvDhDxjP1ERsF1tfKfzRpgNu73EpTAaSF56e5h1pXPr",
  "key42": "3rSRMq4GNyQYmiMKtHGu95cEqJRYito7EMKSTWQBRGV8ufsMF7eeU5HqdspbNKVUvXXJsmSVTvBA4jSssfWurcAY",
  "key43": "5W4kaDqc1SCd9Ew62PvhnjPnfQWEhNbmkcKk2Tm7BMXwYCEF4uqTPATttKhmtp4jLoLJ56EyWrQRD3MPmQ4nbXjZ"
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
