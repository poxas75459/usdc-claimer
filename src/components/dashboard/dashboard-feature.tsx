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
    "3DsrLoK8Vt6dSjYqrKoXCPbqMamrL9zVzRGEUjVg37FHypQEfXyFavDYsuJqYtcQFRcCboxtWGmcdB1593ec1tZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52KutSNsapSxbjhL41wVNNszk6Wx6ozW468XEH794ST6c8AJ3RUJ9LdKkyMsck8ivrWpYwg5APMYVMU4i7niecc6",
  "key1": "4hkTwSNNhGkJx4oTLivYvJ1eMwAoqZswCqBmYrng9L593PFNbUc1uFxpe9GMnQAgtP6woU7JnKge3BQYroc8QdBB",
  "key2": "5QvoWPJu5r3WCzpyyx5hHXzapwWFL5iVgBmti6ydim5mPJeNEQm57Z9pb3tpdpMxWroWgH2oyUsytLySvFSeLbw1",
  "key3": "3yQ9bSpuePLQUwd4Y2kw3V2Xoo2DeiQjnQ2NGLNVjqeGN7PjemVpKkCtGwRm9KYNEedn4w5d9cPs8RcJ9YiktSaC",
  "key4": "2aT7Jc5bwfEmKBiYThMyAYKMKF5krsG6BkcFyxaN1i65SkJRf4Hc4mtNep98RgTBa9WnptstzBdYh2LrZp3x9kX6",
  "key5": "2EZfxnsKfrKUpPFouHcipGB1N7sM6Q89b7WeKVNyPqgrmfVWTZBcDX6Vpvs2twVsr6ztRuquMmZZYiJWcPW9qSaW",
  "key6": "3LbmRD27mTa5cYvKADFZSAtV6V5dumzJB6336gqTK77Ek1ZSdSx7JBpaXLd7mC44haCcTDA4m9GGAY3fRACWa58H",
  "key7": "vRZEKVrj8jbdn6auWotkkns11aBKC6xt9VtySn6XmPBru5V1mUNWkFD8b1KwDUoxSocABUP7kQ91fUFQUTdLHkf",
  "key8": "66ATFM3LXVSKFnbxoB4oiRwoiTxsNvrNnCY3JVRQyjiQBLW8WyJf2h62gpeXhqmJEPgNqCF1ETCy5bPRS1B7kFqG",
  "key9": "41hozxGQCHBqU4Mhjk6SeJ6PDtzqGve6Xz9psEzvP2YeXP3yAJ2jAyXQkoiR7r8hBLKqQxWdTvuM44SM5rqY5ewx",
  "key10": "4r6eVMji43rr4DmECHFegYUypWM2GMR68t7j3GMrS4Hx6FCxtd4zQqonwS6a4mF1tmictcNdwcQGW5CuJjxMo2EU",
  "key11": "5kCTDnJqARnLQVLeGJLcXegCjtkEjAqrPoy659wvQV6tU3J3r3AthoSnbN5MMNHGWMyCcahwA3YzxpJKBpHn5FLs",
  "key12": "3UARq1bfNTDeQppZApdgs77L6twEaF3UYQYUiSV3r9Pic9UBQJvGsCMLLSFFMguMrUbj9Zmwvj1W8axjqnKEYRnf",
  "key13": "5EAA7gJBTFEgmEpVN1NZV9yCo2rSXESxZzgvV8h3X9W7fPxgXMy2d9UNEY8aQcBncoLQ9GS5UN2e1oGUsGP3zApz",
  "key14": "4D6LEnPY3d7ahpB84gQcAciQeg9U6nZqKSjoGP7UVcD9Jyz35BL39Fu73uGvwWp5AYFqn4cBPjcvQ8izTRNECUA4",
  "key15": "3isPhvrTvrB2C4XaK7ei9bbFp1hn93ypLeUuySABzwuXNfwr3mchMdBjPx7BXHTXcH6izXb75WBioRFM7NQ4YvrZ",
  "key16": "3YxgzPu4hMHQ8Q6moWJ6mpphjvZaXBKBQnxWw9QNhJpDWBSG3XZBwYGrFvDbFY3FzE8vzutczLo1JY9ccrxmddNi",
  "key17": "4R79dSQGSbVWLsBmUwC7vmTcWWyrTFsjZ9fL5r22b6vrnJDutp86mq2t8vH9GjjjNcSwtNPjQPxHSsDEPFgymnGP",
  "key18": "2YsEA5wGVdaDA6YpX8kiBf9vC2BPRXmomz8XV6C31gMZ1MMECPEGrxcUASZJkDvpEihrP26dt2Gq6y51g7JXxeyR",
  "key19": "3q3t9fj99g54KNKyGspsATJeZwJPjQ6c31oW5Pj5UEmx4ZnpcaoChnFXuXuxMzqHejwzCFHWtGJ6mjEaFsz1ccyg",
  "key20": "57GQRkEEicgpXLS8eXfpMbJk2RnBVqfAHPH9sRvhxLTW58dRx1yugKcriJMYVguAm4s8ae59GeDFKmCty3tcvure",
  "key21": "54R23wJXJPQhtY3GfCh8tba53YvtWzEccqd2VAC2tqmUQYto8idmYCEd76MM3QZVpsziwQKsyhuWTYv8gi2jB2tu",
  "key22": "3G62YPNu93XuogT89M26Z2xoH68XQ2gs6acFUqQayBfQcAwMQ1B5acJJ3STtZ49FepN8HQCAb9owpDjNFPZQb9Z5",
  "key23": "5cgpgpRPedrFBWRbp3b19tn6s5ivSfrMyTdy4aDazhrA5yeujkhJ6VFFbmXpqrNQzBkK3wwz1vzpJPtVzXhJoFha",
  "key24": "dMh43sH86o5scTwKeFX6edBxTZLkVkTsYrNQPGPcwqavvgHABgLDhUjdyAFEgtFA1hpkYipYBDQZ53X3XgPTbQf",
  "key25": "2oGJqu548yKxiD8MwdKoerLYR96HptYfaqCFXavaFqxfsRQmnE8zNGJcw1WkwkVhiA6rgtcCsKPx7STM9rTuE18f",
  "key26": "2JnPxcbyX1JyxVG1DqgJsYsCmSVV1Ai3BUbFmUsHwvRyXCJHG6RUuDpkRJobpk68oFc6CTBTKpvMsxFVsXn5g6VU",
  "key27": "VBWfH5PnuyP7BhjBPHfUqfofqMvYGr5QkuEbKh22iJePWe2yRJ8LfpTDtZErSZuTCNnW4bvr4aYwHgQ9y626tZE",
  "key28": "2UM8YRXVG1CDpJZj8b6KiQBC8qS6byXbUECQasvzRwhapzm7Ldr9QPY97riuEWD9F2zD34PNjotHm4L6USDbDcmE",
  "key29": "3f9Z7LuxmQkNGojnxaUq4ub2K32HqKVAnmLZFeHqTqt3JffzpDoZ6pkfpF1SjX4PHEUJQxwK8PDooaFnG64PePud",
  "key30": "2b31kcFaFKNpGS3GZAkXudt77E2JfhXiqVe1FUVDsi6h9fkvNqXJR8nUm9PraeiwzWxzuqLUgZERYSMLFCSkGgtr",
  "key31": "4RkmKi3kDFYaF1cCrN5LkJjbkrnNvaBsrbA4Z5JjWenjLLPQAsRt53ehfr3aLLHdRggDjavJeDLZcP8W58YBdQef",
  "key32": "5aVdwpao6v6gKyrdJM6uSNV1TKWfp974GFSc9E8eqw2L7wxgieoZY6RjWQySnRZxNbVFXdxYNJtbggTrtbnDmGWz",
  "key33": "KTXW7NA3dM8EhXAfCZe8Ndo3gHvRETBVLs3sdU6vcbisb2cEDbhj6CYWhmnAyJyXLVsfxABn1DDAiCQopN3gbS3",
  "key34": "UT7F5B47Cs2TQH4XokrZ9mYicthJ5ShiSYHoUnUhJ7uqKDiZaEA2QVM3fu8fLTGWEDVFN3RgqgFXyJKTuErKash",
  "key35": "34TyEU4LQhAbWwBzesM4QymM4Ez1mHjBcUboWPmZu2YhDJ1ZFpEE45YhmpBWKmUVFiL56v3bjJQ3FnFaVkiJcmWQ",
  "key36": "2GE8ybPZEQUSVH91zvBRYfNz7pbtvWf55oM6CagkzpV96jf1fRzDp1Z6roxj2g8iV9Hnu5hGqM5QAQga8yG9HYrZ"
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
