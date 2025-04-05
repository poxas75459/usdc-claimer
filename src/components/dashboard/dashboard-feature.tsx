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
    "5GPtx6soYrBD6xiMxs8UXKME4NuFV5zE4pqK8oxzrbPHVtUKtdSZa2p1zNH1iHKcUoXq3fF2wVocKUsy6BSJkLAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KHRv4EfFeP1G5SVzJoiXNPnkKRnc3m64Uiz54R4jcQ99kRYoUwzadBBqnzG9juKL6b5ju4xw7aYnKgZuZSgSv2q",
  "key1": "4NN2fFRSjkRjDoMPcQNXnRp1KZbv5sBbL1JDi6QkN5caFgv6gHh8ffgr6ZtRX5tknv3hKAExdE6f3rXKKUeF1ujb",
  "key2": "4xowt8WnFJd9xHrbvJk9rF3AoFKQHUdhiQj9Yv1T7oUsmuA6D4gq8nixrSD9LwR5iYzutBBGKksfnRGyepUexeGY",
  "key3": "3MP44b5vMciEBNRuU6VnR4sp3DUMPkJpW99adXygfNiY1SRHCYNQL65dGH4d5Bi3g8DJGuncqPLmZuJpVT1Wu1fK",
  "key4": "BhHso2supvEpZtaXysA1ekzETCApAQ7pSpE6mbtNJocTfVrLb7q1UTwkrvbVimYwvtvt94zVyVueM75HP1wGgat",
  "key5": "2SqnjbBWS5hJgfVR45VrYvrbsevWsAtkuQMrb5bH7RWZ8F8oDFDXqtNECLM41pWj5sVjYVLFPzFT4yVk1LdzG3nY",
  "key6": "3YkozCkQ9jopVsUdWqgBXNVo4sdU4voGbgBRQZv7cK1efJmDw9m42CPwnvjjQz5T4MWv77xuVcEyEYq1Ptn2xUir",
  "key7": "fnbaxWT3g3iuq393rXdSRA5ZKdZsxxxVwTFbg5oEj5K9YUS12q3dbdRYzzDindd3QLv3E7g8MAcDaizskbk4ZWf",
  "key8": "51PPkJ91JifWbTD5ezpNveAQrSA6mizh3pVHnh3t6XQGnkXjL9cFGQqFNjkt19L87Efa3F95jtX8krPazz1LoUAc",
  "key9": "3QAJw9iqhqJXFoiLK72a3Bq4dEnFSS5jQkzJfBp45pnhDRprBeB9nBir729YgWFn3n6jaJVB3nQJiJfpcou3DtcV",
  "key10": "21kyLVnt34PWtcz2DuB5XaLioZn43BBQCeVjW9vZKC27S9ByeqLQBYL9kV9UsSDu8VHAGF7DT4pLdiezpjCG3cWW",
  "key11": "2gChAM9sBeGGbHoxAjA9CHv6wBHL2MYtav5wdoSF6tBUxiDogsjQ5zrZ264NL7FhZmeStYZD4tvLmdEn2gQNA5BB",
  "key12": "5F3Q4kR1URJSDsqLD6U7CTJz2o8xxBSxy4PvU5GREF6zUNNPiKGbeUA88CCJ2GSQP3nXwtcNEkzoiT4Ge2P3XXVK",
  "key13": "3B2mEM28N9qLRxnowNhRJ7ihu8C1a44c18tbW9nip4zPXJ4oVU6iWiZ6huVEX1CRayzNsDWYWME9J1pbf7qnWvcT",
  "key14": "3V6c1HGLfY4RKiJVzbp9wsRLEA7pEwweHfs3tPX5M2pAfc7rDu7X4P5SCnko8Lj1m8j3KFvXssNGR4y8yFTUjS7G",
  "key15": "5uJ2eKLy3o6hsLXZfwGroLXa94HmDrMYTRs1yB7dTrbvbvNvr6tyQXNqfkZrErFWPZm8Q4kMtuKAPJwMxm1qw2Dq",
  "key16": "5NUCe5TDR1xsm59H1PtXqMU9h6skWJ4iUg8EhZzsETPsDkRaVxaEg6VVmhExKA4B3SVgo7WoxLysLPWBjFj7Qa6U",
  "key17": "3jvN4Xycs7BUJqZv9jpyRmH5UjD1KYxugbXdQnXUrSd7JWEnH7Y1RyaQeAuHcvRNY5huFNtHz5zWwToDBEpKwoT9",
  "key18": "2ifr2vXcjwLant1Zu2fYUifse3JBzAwkBBvk4AsJo173XTVgeHXUR7gnQq1LJAeENxniWeExq3MFqDLapAmHwujs",
  "key19": "2yxv77APYCDBf6Q28LoHUNfDDWkBSPmhZLyXms92TZBy16URm6GG4mZaT4vHWJwmdccF5hh63oazSdQx4GQDLH2h",
  "key20": "64eZqXzmWNYAz8UhTXPtxQnihm24C4eWADdTi9VaZfDb4YmzLFaf1avhFW8w8B2DjuAVsBAgi5wooqmrxxMqTW5C",
  "key21": "51wjSdec7PtPiy2EafHXrVVq9xpArygJzurYKPUzDAFYzzkoD3aSDsZDqXEDkRssmC643A4zi5TyNKfEw55X28BJ",
  "key22": "4igXgdxuNjPpbEhwFJ8Aer9DFpDYD3jg7Z4AoPjpdfb6DjHgKwRHkb7AK17bnFs7cyCfsYS3gg7zxS811VYUoaHL",
  "key23": "2gHJ4nv3g3x7VYZ98oo2rB3iddtZrBGrjzqyv9mLj2z2TmCceEbC9xkWAGhA67cEKKmNcLxApVpctQanMkQnVr4i",
  "key24": "2wRLq2V6WceNQrF7Ta4jTqcSrWjENPekTuTJzFJbMxmiRT55FLNNMjzjRusCv92eZwQiMQPEvaaW7piAJzLcLmS3",
  "key25": "3PmHu13mnZFzStFhsoLx1McyzYDxoPG5LyYPV273yYxcpQwbVkdjtp1nF6SQZdXw2hzWrRhm1zchqQjXuV4MWPL2",
  "key26": "5Sxxd8a4xXymfCv576e96tAxQyCzbRpzrZHLT72WdzF77VUbxmffPEehHHZ39r2AUWFwdVgYY84rwecsgdJ9owW9",
  "key27": "51iXqJyy6CKghb1UKJ11sUvzGJ83UB5R99tTZRhjtBp3gPkUHN2tv5Sr1GTy2xaew7wN727khgEqjHs6xgmEfmM6",
  "key28": "2rBhdFZEPBdUkV4BcgV76EDZvte3TZQASH49u5xVbKTR8PsnV3Z1aW8DkYp3rTLHuEbdgkAnWS4gzrm46QXp94aY",
  "key29": "3qXXcCgzNxMxwE3TrGYbwyep5sfK3nibepYWvy1MzSRMGH3tiEqcWm36saoTybtBu5iotpXrB5MXZV8jvHYShXyX",
  "key30": "K5nHkJayG5rNtypv9yiP5D3fWX3KQU7k2vMf7i4RD4f4FqfjzCXLZeDxzgZhAgoK1p2bMXkhsjY1b2GG8ztgVCb",
  "key31": "5Dqbnz4JYp1uK6ynoAJtAfVWEra1wViycF3SvcBrUEKn6mxLoekTPtX8ZXJgayDUGnX4QRSCsFDFkm7TLYZFPZD4",
  "key32": "2ii82mf9HzbsX1iBhxaT6wHRNE2HjXsCyvKaGQwhnR4wxU766oVmxqgrz35qdgm9wVTQTxf1gUi5Pbe2zMPn1DtG",
  "key33": "2QYuDFwhwATRQoker4LfmB3vGkWk5mPoacrAvZqo47aPjfQGpJW6AnCxK7tS7E2T3Anvk8BkxpHaGSCW8NVbiLos",
  "key34": "27pkk6kqjNUxTm9a6n5UgTHEteVRwkv7rLCbuTvJj3wYEABS51D99CjN1g3ULdZJCkWFtoPDF3aA8JefhzQ7sukB",
  "key35": "2ARMPcMN4p5D9CdVwqsV48ZcGX8CUSWgVvs1Ei9y3V3gLoXn2BkZDn3WTRznzPDyDCwnsFpEzSPRJyfkWH2AXL1V",
  "key36": "2eaK4tiwNd1Cv831ncjsSkyf2M6hJczcaPk6woRmREKeGAApCuA4x4LFNBbtkqtU5f51vGEibcF2WhFdYxdhPmQ6",
  "key37": "46xvXxvqtsXS9nbzz4mLtBFrcJwuePvygvcJZFnSuEuEZALAkPeATvyeBt4viWHYU1uejAbU6is5KNcWKaJvV7w6",
  "key38": "5bmcCKxrjVMMWskJWAjQ8mWy2Db4xj9SNjWVwAsv1J9FymGG3fwVjCmDUCrLxhnd6ysBFxUbziJqvUCi5wuPgEyf",
  "key39": "4CAh4sqDNyad9cJxcKRsKyjEwCV1Jrfvdm2RecNupX1ec67eP8G5n4LHDgLpM6kHijhwNHRW7q2h5dQb9hTrtBG3",
  "key40": "4TxYTBeE3PQboidaMEjnCo65KmbZrbAR7wcWoZgubiuJbLnHz5WG21DEfbwmp46cJQkjGA1LzyVDsjDJZPDPvYjX",
  "key41": "Mm85DmtY5JDwaQVPLZVHN99SF1WM2w54bb6sPF1z9BiXCjB1wWzY85pCLHpeiT51AojqTUC9hidr9xsdJN2f23D",
  "key42": "5tfnzijAVCegurY38oZ32bo3unsNH7MZFU5Mr23T6yWqPB4saVak5QBWkp97ophLQDjahVTxxbN5Bw3dcygfjHhW",
  "key43": "DQqsJ8bkC5pYVLTF7ceAjKQokaRkeSPDqLcygCzTJhnSWDbfxxB5WoPXkp3jix33N5tZKghMtUiBcTAvpw1zUQd",
  "key44": "2TvaDoV7DS1B7WWsTXf36VrF8ocSPPbUsW1Nch65v6k6u7fksH4ufa8wJtE68XgdRf3g6ckCqkspm1fWR7c9qQuN",
  "key45": "3Kj3hJ4wesQxjLAhsNxxGgDQs2wKLJBLUfZfBLzkP2HM1waJw4yWXsQHmoYhVnhvEYxtmhu7pg178d1vRW2oG2uB",
  "key46": "4FNRREE7PT3PcFw8sq1Cnk9RuozdJnGgJZo8THzkDQksXFpwSVRNGEeGpB9Rh2o3LhLjMgktasyMXS79RLNYV7GQ",
  "key47": "629dtiZFMoDYt99CpQDeKBqR9d8yx1TCzcbbZSj6mQgX1UA4GoqGv7ZyEspHpdPxagwaGq3ZvRYXgzsLpq88QQnY",
  "key48": "2wiDaKyJDJLhRswkzbsZFLU2tRHimqcy3MxJcoMCxucT7WzbTHwPNatNBtVhDDXygeFAaGUQLBkoyeVDuiA4kwwk"
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
