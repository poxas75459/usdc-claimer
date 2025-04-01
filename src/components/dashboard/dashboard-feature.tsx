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
    "46Hww5JALQjsaXU3FB2N3w3WautYGGW5DVbZ27GtjrKo3der6rb3cC5MLv6kD7Sw65UzYQUbm6vwSyhq3ZvQcEom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54k4Kkm7PYN63bNHnRrS92xfYMyfXZznYMwCMMCXo9Yge58JWft1mWxeGcTbfCxragFpTaSLsQp5yhoi1gRHKZ65",
  "key1": "5JSr8dj4xBYjbE1dvUiJL5PesT494XG8cxMSzJre8uUknBxWyWLyPf1Xb8DyDyR3Q7KumnYaaf5U7XQMzzgvzk5E",
  "key2": "iopcs76JMoLCiyWy3uDbyS8VVUBxf3bKBysFF8duNQ6GCKyPCk2tPSLLbtFmGfUKetN4HtXwgqpyYmuLzTDHgau",
  "key3": "cSZ5ucDpv8NXhcfoQ6rkrWLcNneWpT2hgcZ3C9wajLHFG2n29jb9oaUoipZvJ37hhQdLPLBguUAh3h2f35yPLJG",
  "key4": "2eswgdagdDxYmbAx83UVB92w8oSGEhs8fpPKuxUMRoEncHSFLrb3fXqocYcviepyoAzReb8s4Stn63mko5vHM6Rk",
  "key5": "2VSF7mFiiuQiLU5W1RcGFXiHUWDmg57QGwZ6tKKycLhdCKW58MKjguDURjEa8UBVydPgahhM98kGYmy94aqkw1Qb",
  "key6": "5Jmk15ACLsxpoWWvMkuY1LDqZaWL3WY7jmNUMgy1E4X7sv9zVBQitZbqDbio9FdudgR4NnACUR1L7gQWvwRGMaBw",
  "key7": "2Ha4NyR8VdeC95xkpvgqNoiE9MZ7H2rjKA2yq6VssBRAS56L9GiQZ4RTqb4enDYZH3fddXgCvPWfpfCMRJqmBjE4",
  "key8": "c3jAdqc7q86vMQTjVcYp5VC5g9Y8JP6PrL264uQA6acb3n1VW6f3ZqVdYd3nQNyKZ5AzZisPLUkw8obYK7fGtma",
  "key9": "4npCwaLGDTWrqyACks4AGiudm2ofxU1jHyP5VgSKeJvQZgH9aUynjoDYaK6uth58kVCH3oBTR7dJxA9GSDNAkJux",
  "key10": "2UTJxSzwTryMtMapgPCtMrWR67Apu1SEceEsK1AdorzQt7LSRDC5aoJZHGzqmt47MW3CYmnWMjbXYwfAygrk2JRs",
  "key11": "3PzmZ51322jbJsqeA5FQ9b3cdLLUscq24ymm3jMseKoi2iNQYtXLFPDs4FibMSXKHreTNTDo4e5j2MHkcvkouB2o",
  "key12": "4dd9BzPMEFzbSdNXkDgtjZ9SoWievRdaYchkczLw38Y7uveiQgZ51ovTB5wVxdm7YG5QfhBZQbJEZuFtxqj38BuE",
  "key13": "mjMCTgPub2UeWhPzQBtY7GHEjpctzXLvjLhk3AkziyjQoyQnyRwBMMs1JWfR7zrmnPvHNooTu1pFy5AhWMJQ637",
  "key14": "JwhXb1bU5QWPru7QhgocgbsqC5kU8YthtTEfCUc4oG26f9uwHUzeHUvmU9MKiibt4YiZjSYDQtpW9rvc4e1AMGa",
  "key15": "3num4ow1szGJdtGhcdPuxZsSs47LhVzHC3uaE1fHjwGSQAFf7vBmWqjvBhrehfmwUPjw7LgkM5Uy7TrfPb3F1dex",
  "key16": "4AzJMHhPVu6kBNUPm8gKB8yp8tZBSn2yysX1NQmyVYMdwpNW6gKqL7cGEELAJzL7iMHqALUCfL6vkb6S95wSGX3n",
  "key17": "3iwspPksiexfqYrW2iGKyWtmwjRYrB39g7Shjm8TCtmqpEteGknWHFrpo9zGUcKDzDghp79eVxHbwA9efr3qHRXm",
  "key18": "4xfRJ4pTDPH4YXdtYdoTEMmGVEK2pLCinD7vkGwrbhq3PKNynyFvb8bRFCPEvJjniiNYocKo8vZ5ktb8ddTJWB8i",
  "key19": "2ynKngfRS9MXNFJgxzzsVA6EPLm2VRoVEjtFVvtqdkkjg7CnVctspSBoLCuMw4d6FCZxAZXgKQ3RNwVipHFRNF17",
  "key20": "4H2Jvf9Y1R8GscgEtXGwMPKjMzsQgN6qpkFBFkHc9H9P4PHtVjBXmiq7FYf8K6pZBjV6t52aeGtvLJPXzuEoayX",
  "key21": "h85NN6qhWSfm3tATC5qWKtiao3bTA6sU8yp2dTPwWsZP9nyXinnLtsBUupGqoDaVLQVX4huyaK33fPkYiX5PWN8",
  "key22": "qHYFCU1KK3MJj5FmQRqsxFbnPaCksyftRk7ydNsi5GYNP9X8qXSf7hVmvbZFCgV65fXhFmFSiS3ErUZSiNAUbwx",
  "key23": "58h1icLKMYvJJgt2deQyigjLxk6cH24HrZoiCsdEoUBhHxwu6eBTALoNSo7CL2pkLX3CLxgR7odXrGvVvbL8jxng",
  "key24": "47wJt2c5G91qF6pSQBHUm6vLzQTNn7VriNmvtzCjiGcmc1XXpReYuVuGp6v9rExy6WR2qDZyP17rQU4p2qSvi38z",
  "key25": "3vnQ5TkMF1HFPXsg6tkaNL1tQCaMnaLigR3cvqytKVgSpHXoFkN6sHJwBvJheobUWyFKqwVjzQX7bkGKw5o9wHHJ",
  "key26": "4VEHwMJiEEKWmVwRhjrUSubJyGmULAVXr6gjjPPt3y2W76jz6mwxCUvSRdihZzWS8JA6EgLVgwfeBNbafvHjceSZ",
  "key27": "YSMAfhAPBkmKmHQfVEBnyTbhTSREA38cQBtDGwarT7X8HmwaSAd9tXJUfyL5Y6vUZUFMzDMesXYSqnTVwJN1xxk",
  "key28": "2yVwNjPHdadV5R6rFWa9aZBxRfc9idsrZFTtqfFEbLct1YExGw4ucEqfQCHiuoBiNC78zG9WgvAFeKo4zAJTBQtM",
  "key29": "5BtE7dDCXaVn7DkEMMkqvjjFCq3MsBKJW29rXkLNgRzGyAc45AaKEenEyLiCy1u6M99qQiaUViaorjv23yQg1CUg",
  "key30": "67cZzVDu5a4PjBYwotAw9mTZ84bHwpRnsKxZWaFJd4zdZuSeFKYfZHXhcFHcjUEM1ed3QVSeCsAjGKNGDPAn3Brq",
  "key31": "5zTWsEJbesmiUPhim5kQGEPQwXtCMsXpaC5jk3ryRZUp3RkXmPT78RtSpn7KQE348GLA8SyMsKxUWzmco44LNNTJ",
  "key32": "4fwGa5GdnV65eNY2NHac2y3GVsuM79aKWNS7oPp8iHQgXrFkBePDLh2hfYDLPiss9vwNSp25X8NGxVwrZGVee1gm",
  "key33": "3cvyCRYirRsaNuqFogCDfmfL9HqPZkfQXXMJwYZGp3toYMn9L1yRdfHgmynUPdfvKBZaFwSxadxov6KcJ33QpikG",
  "key34": "5ZS4Jo5YC2WE8nWW5iTHx2B3pmWweLt8KdB37bU8zU5uGP2KgJL7NWswPBakREKNLfcTnLS7tMFR348MTPL3onFP",
  "key35": "5dEvdywa7y19DAr6QvHHbEAQ91Li1Gro7QqXazhuC2pJMRccYbaV9LDf9iXyrh7b5N3enu1oQ6QP2HXQ4KAd4whu",
  "key36": "53SZRUUdvqdEVQSacGk7pBHsMfrQ9Tn6ho8kMfZCUENcCDreSeXAfZdJbqcYbB5zz7f6UW5E25CmBw3F9p9QGPfX",
  "key37": "AW1E8k8zGtGE9HDY7dv9JQ2nvpxae4aCvMh7VRoHB4axJgqw25Pk4uxUq2Fhjs8AeQC26RFK2xkm8WNPw4EpYjT",
  "key38": "2qUpp2XKKrF2MUmmNTQJZurugxAFD4j32BTzxZTbfzAUA5Tmxt7iyEsMyGenZ9egQC5ibGRJNru6W8QTfTG9qrDW",
  "key39": "3fkmMTdHpazyvEztAJdFC1T996GwRf62GqSwogLQJr1v1orLnPBJQZz9cZVYCVAqn7UHTFWtP1BArYrnC6LcMoGe"
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
