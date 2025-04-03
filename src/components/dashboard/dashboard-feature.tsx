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
    "5AFqv5vk6bNvkzCD1518krV5avedPGccU6jqY1ij9vCg78rQTcoVHGMqnjifd5rNLp2osFv4XmM6WGwwGcyzDiTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k1ZQnuW4hXZDPwq1suX4aUqgMdyqBkQNYNTvCCxRpbLETLR9pCBzNu7YZNUJfnrc1ZSZciiN2m8hdXxCTCbEKQJ",
  "key1": "5sdhtVMtA4tD7NqMFN1okzMKfEtgiegz9jTTXRCS3Ln7Fb9estKQ8LCMj8U5KeBSpWKPGKF8qrQsZYWrQ7dWWyza",
  "key2": "i27pFfZnDWgMMHDxb81vrYjwLgxknJ2LF8JHkskHnBTndtCvvucZZe6uHGTNic6gTgcpmCJH1KTGqjkSQccEyPG",
  "key3": "3WeSsuDvZChLHfAv2oCrUFprbUcLnZetC35sTBLgYh32YkRJfoZXfgzV5hygd6SQcnSNrLjDPXtnjZUDtpK1zwMW",
  "key4": "FNfypy2buz2uJHCpf48qYaWT8RTe1TXRD4V9aJboJNTxCnDjGL6ZNuu1xtfnjXEuatkXYKqjXRiwyT8AEeHRrEk",
  "key5": "FjzBYvSCQCmHyXesezSM8o5fGRHpb2UwNMwpVjvDBdA6SAxK1cE31bheEpW7jP119itCdy4zaCGeEo5TKUvosAR",
  "key6": "3zsoAzhgQ1gfjgbjcfkAr5Qe8r24pJXmne5zzdoKFWCAsHFjoLiMfxD1cdAnL1xxGsLkCngVNkTwxfZpyx5wmQzB",
  "key7": "5DonrEQgvLy67yWVdrDGdgJ7tTguvVSsLrkAi5Yr8ba9iwHtXNguB8kQemwQNoZxvTDtTDHG39R6cQbMUp4ZvFBJ",
  "key8": "2zzSUokoTRu7tgp1L7supVMMpskqgqApkTMEDiCYwCaqL9FKRRKUBqHcdfPW7J5upuh1HMWaER4a393YAJdwPetL",
  "key9": "2aKjrQqn2UvnVHkSJbm2YZK4oCawRmAmPDaZ6xy4ZWen9a3hTdAtfqiuGnNWgTmGQHtnvECTmt7Fmwv4qYowpeco",
  "key10": "4uv6JCw5oFmFKstSTHyjBiHvUcToXCCZBbdJiq2zqwND2HJHFZa3t34ZX1YpiYNJbJNsvBVwUE92Q6AbZG6GrZGk",
  "key11": "4SLUUTN7ia1qF9wHkGYBP2dz4xGMvnt9aUSRyB7PAJx4Y87PuWY7VB3hi12YFdGMNE52XsJrbSpdXfNiPggrGmdJ",
  "key12": "2sSeNJe1TycZd3Ucaa8zuMwt2LSf4JuhAhyRRCy69kQAYjRiv2ehqJoAXXKdnLgid3Za9K6pTUNEPcMFZ59iQryw",
  "key13": "3FcCMGRGBBtjsSrZLBC3y3tk4z8J4sxapk3YsCUseWCmue5YT1L885UtUU3Veqsy9P9bGzAMtHAV1WxmJNSfViMu",
  "key14": "WVFD5EVn4Mwhi4odEEu4R5FnVF7hog8EjpNUB6SDqaPeh1KENgh7Bjg9oTFfDRRMmyom8fuRQqPqHiAUdWUiYin",
  "key15": "WsVei25CPcbov6g6cjKV1hm3yBzXrHUWMi1n8o3MELT9Zxw4mAhrNhipoRtvoR2yhNMVEA9wcWpu52VLsZfYRra",
  "key16": "4cKinR2o8xpDK2oEvPMuytjiXHJurscjXHSjMnxEdERhfn2vLkxZio73jWqbxtpFvA6FUCsr3Qi7iG4cJpWdBmip",
  "key17": "yLtdGoGRQ6eQk7jx2uGHGGTjHNTsLtHG9V7LqTuGdAqe5zMGfuQWpKjhaTq8WuANmcfehY2XGdFWK8PpYUf7YVv",
  "key18": "4kCBgCipmxShiNRk7gzgYdcPpPjZ2yhx9PXTNaw4aLKHiPCxkNJb9jgiHESiX9b3x34ujyv1S78g82JT74MwiFQB",
  "key19": "mLaYQEdkMmbsP4GHH9Pdfa6vLTbxCSSCvcnZ3cTe6cq1p1C2tfFDeDDxqgpQFe2YqK4nPMEE3i5DaZXELUdB7c9",
  "key20": "JT9dMh9YCnAvC5JT4ruUbg1EWDtfVBVHQUi71zeHwVhYeuwHXM5SMY6CdT86jZC1dVzWQhMN5AThEaGWqvZ7zjC",
  "key21": "4kS8xEVNLDTkMJm6Hc9odSrzVw132BMDDFwBAdQNsVdrzwmTrv532EYhM9Gh5xQcrc8sNNfAwk6YbJWaMzxh3AL2",
  "key22": "38CQDjQqCWZASRKBjDvXbtmdUyYynPs8jEPyiBSQyDruudFXiwbL8szrPbL2hFvyJp2ALSovuK1KWSVjisarPBHh",
  "key23": "EbXG9ci39htfWZ2VPhwWmaSayYCucS8rjHbxBmsdmnajCVpqjKzpALDqLecEiEi3B7F1SLGxNe6BWnt1p5qASFR",
  "key24": "3teHznjrdw3bk8L58SH3ZJXRHx4A4YkYsfADfcNn9nL8jv3ZFxDDEAXzJWwYcrsGqvXd38cAgkE3F7sTecPgdBak",
  "key25": "3nLAwGxpbj4UofHZJoKLPSM6NvqzXhmLdwCHJob83jnVQyJuqkgD5WkGo9uMQdAKRZzJbVHfEBh6wf4VDB3KrENA",
  "key26": "4KHyYPZnSqJBTEZWdWJp1Lk9rrp9YLaA9e7ijzTVwk4vKMKvEvi3XhM7N3YvWdjNALkR86Y2VmieeYzfANzKtPq",
  "key27": "27KZ7xy94vKC6BzQbbyjPz6fsEMrEmivrQ2eVNbNij4Tkx5QWyjyr7TVkESQVH4tNAu5aHN8faVLQyg6zX6i6qpL",
  "key28": "5v1R46afqNc46wpbokpKWnYEXRnqp98o53TTQg4R4oiDThYptRqURRWzYoGCw6GtuttggQQyzvc5gg5mH42cTDyL",
  "key29": "5AKPwsV661ctPX2URPQA8rddhE6qUgPgqnUbkJEU8Mmm99fTFKt86wREcLnBP6DnkddqgHCnKdYGyDcqS7HVAJKn",
  "key30": "5jXZyEMnA63zVqn7VA5ZjAbDb91SEbKmGBdw2RrUE8tNvFhfxxbsYb8QeqoUknbypTxFtY2bfCRFmwJdhdcaPMyj",
  "key31": "W2S2KxR4SpXCp3ucUiTVBKsj8w2GUwfuGoV5wByYJdSMmwJynkThe2R6oTKstgSgsdHpZXmwyfuMyohBUsNhsQW",
  "key32": "2pqxW5hDwJPv6jcPhGF41dsjPKkRsaZ4uKiwA4eqNqy5JWoSDEaFH8Xi6mE1afqdE94ynHdN5PSNT2wBLqpWRYP7",
  "key33": "2prXyZkt895ohALWtnwqtXoLj7N67YLYeAyne1tLCmRttMd5KLgqYheuwHXYgmfK3gR5eFwFbAZXTFk4jf1HVJWa",
  "key34": "cGo83JtrGNGDv1ZLcRy9mwg7pBvEdT1asqMCeNwRRBLVGLQu6fzav3Vm6Go1Nn4zbYyEheaLNP5YvxR3k17bgvh",
  "key35": "4KaR39TAC8xCJc7En6WjkFnD8ZPLtKonY5MxJ9XZc3nbGYaSnjqDTVwEXKQDuu3UnUaBheshHqujK4sAQaxRCjrw",
  "key36": "gUkHqkqJR5Sdrxer7c2yUYsxybhspZuHp4cVyd7hpefEU7QPNv8mcWwEvqFJEBj5S1BnHF1JxvTLDBJ2fQPZpci",
  "key37": "59uP5ruM47UhXhQ3XfxciFjGQZKy8nS8c6Pg7AtnxEdo63iwH9J4kAnSXZCWmSuFQm9co9zhgsxdngSXnQ3Y9PHF",
  "key38": "3SzBD3aLLysnHG2MbAyyR3494n74wMDFC8RqM2yk5e5fD8xfhbYhA42zpHkPsPFrLUg4KH8mhWRdaiVAC1WrJGFA",
  "key39": "MA33XPJKfUqrGWGuM1MGAid1iqzARNkGp91GV8c1gR9ztowHwjPSNNd92sCijGZ8ph2BPFfmEUJx4tEa4HeZsEp",
  "key40": "7SfJFdkrUQsz7d1S8kh7pe4yPxvNdygfSWd1cghAR5YLtPtd7hcng9hchgA3s8AE721Kf83HSnKkDQ62N6xAZiT"
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
