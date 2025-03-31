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
    "3aE3apf2DzHWY2ypodLKECzTgiyPkM9xQHGF8KtgwjH7EfrGKHW77KjAGJPQ6XpAgUpVBihJA62nVuSrKEfeP1Yz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D8SyLBGLfupZpetahp5G1x3y2FadYvEP8cmeX5gW6eJiZGwTLR5R7QZWBcRmwT4jH1gt7SbuCF8nvY3MTuARMzB",
  "key1": "gEJtAQB3cuMVexgsmV9FqDDMG9TkwU6hyAziYKjwo9osa4VBXFe4NZtzEBWNrft96bo5wiSdXhXBpr7xvyBzXuv",
  "key2": "5zqHjwvKKdu4qgXQy9RM3uGr6sA7LVNxMqhVFgWvKqaqZQwwpSnkDutDQUAp5FgT5ho852wLicJ8WGU6hdCVVpFG",
  "key3": "4k9W6JcXGuPSjPaq8cCRyta2pSiSDhaZCMCKYNx45LVUK7VSyi72FzEzY6Po8vwYoMaywCuGzN1EBTPSQ5wTB8Mp",
  "key4": "5QdbhoHB5UvMbork2PKbA3e1MYfAk4SrAuKifGVdiaEjcA9qCQyLTMdZwtK4nxhFdXL2sFqe49E3MAd5zA4DvjTD",
  "key5": "2vNbARLpJfr7fdYSFU2UjCuwV4oWqRZ5EPCtC4WBtwoik3TrMPg9XDgYKgRiAskehA6diXf6FQfr1TT8LvQFayWe",
  "key6": "217uPYtuSkb4uDX48LnZTxdJVHiHCuUDSaT6MtLiBXxoiMgQFV5QRDMajZzcuJpfM9JNYw2PA3EgDabrSQwQMcsT",
  "key7": "3WJGR1d5KGjDuXwbRSMvMU283FLPkjwiPsyTSpeHEPpvKbZoapuCe3QjA8t9bU8tVaxd17sxfVS3UqAAhRxjrZHA",
  "key8": "5qXXEJikqX7W7gRfdJwjzV2nRDDDiKoRivF7VZzWofiMQ68f45QdrwzG4dTWKEt5Sv8Np7Q2nN6w6k4pwy2AMwNh",
  "key9": "s4nzDEZyMjZNmwY6pDVTx9ctw2XKashniYGjmFxwYQbfA93BVax8nTiD5jnZuakH4PXTQJoCN6iQmseKpWppbG4",
  "key10": "3ZXSTWqpBmrrR1km7NwaFAF4CPdrtxy5AMzzNtR25hvhzugnBtpZtaCGLC8zTeDD8o94fFUXQWz3qqSugqdingeu",
  "key11": "2jjNwaBqMgJoyea7bBYi8T9NKsQHy6Kve4y38cWR9TGBtZnJwkrUGe1RF9QG9dKxSUGGAtM6m8Y8TsEBFTLcME3c",
  "key12": "3Z6uCCPT9zcs8TbywWMsTsMqfWkpbRUnHBDmotvgm7MG9udKdUXmz5HKU5uc6B54aNitHXveysqtdr1we5AhbzSC",
  "key13": "5jfB2VcFiNH6NiFQ46hpYtT42xakcmaSYB8CegEBiW61tiXFwUv4EbGXoDfqh38WVWdXrEmWjxFfNeUb7Bmhrkfe",
  "key14": "229VCXJVBcyrtKUhyKbXWZE9Kwx11tSPPB3jmcwKLHvXkh37vUgcbWhJRUDAtUi6u7S8FmKbbC52dMTX9BWWXdj4",
  "key15": "3a4u2mH1YFZEWV89zZcs4EMbW5drPs8BixUq285RsE4ZRRdntuvAeezW6hrR9PV7ChZ36v1xqnV3Wft662jBockB",
  "key16": "23RyxTTuzgxMnMoyHXrYT7GLHpncsZZ28Hz4SzWvpNExv8nfT3iMXMqxF7wnQrn6HU39b5jsT8YkdDLfMUhSWjNj",
  "key17": "38GYiUXoSGG848vxZW8jwhV3dycRr4vxkH7WBnFxa2CmurHMitSeDg8KBaeg2tvavihzb2FsT4QTqsZiWiZ9UNsx",
  "key18": "4qcLjSdaYbJczQMjBxwNFtHJFDQbNGhibYSHZ29fsqcaFWjS7KP9hHe6vdzfqnuvcyTgCMh7zPNvbhLncW6cURPa",
  "key19": "2jBs9HmACqzXsfQDavcq6F7EMueDJ4YLpJvvm4nEx6a4DsKXTZDWcJ86kNEZjNSFZZYKwgDCd9NKccSE6b7grfbS",
  "key20": "T1AwRXo8sbLvbsNpkZs7BJEwpUHFn1yv3smDXCfABTkvGfjAiiGzGztsvrjChG1s9kAJvikVCN2Cp7RRYtSonzA",
  "key21": "4Te8c3RR7MFWonPBYccTiaPVnoqoQmKegUDaKPy13CWi1BoEhnj5Z8HEoErkpm7pyy9NT3Mr8qRszLXTyDUyywGa",
  "key22": "GvYAtKcF4bdR6xsxbSEagEQqVr6xspinbjzprcs7m8W5mMBJERhbJ9eEwfYCPm5sFWZbEUu1nV3gYd2Dr77QKut",
  "key23": "364JhYhXEA7HJVeE3Q1K286h8V5JGAGFaUyZ3utGBEFZe5SqxnLebXmUKSXKfqBgNxe8eMkTNrEySyKBqFviLhgN",
  "key24": "D2uXubFv5rX5YJUHtfVjkffdHpHcWA6Ru4Y64UKFS8MeSRz7Q9kCaGFTJBBDkcg3M9o9Zzov45Z81UnYLxVgLti",
  "key25": "3pAy7r1PVsah8zAFAZzzwG2hDP1rtkYNueVqCdaHEvH8j2UfCTm9NzBanxA9oCeWKdgtPR6U6jNnRdznd4F7VbNb",
  "key26": "5xaagZP4YyToiiENd4WFVERkWALoEWAx7TvnDywyJFQiDtA8TwexS4b4vCb9WbyS9pMv79vEcVbYn8aZaLxGnFBP",
  "key27": "5RgFDcu8EV85gunsAR6VAcw9wMAF22jTLWnbD5FvoaY3WL6XBSpNgLNrM8yGAG5MBUYUsN2oAVJmUxMhJE8TkrY",
  "key28": "36GojPqVw3TY2QhgirU9bqcxXVXGaMsLh23YRstFMQ3Fy5pu5ETVESYDsHRLqR32Cvbg7CEzr9sfZTqrjd7ePFQk",
  "key29": "4MbAJwTqdMnragQZbUKt3ccvhQutHcYNVEQm9X6SQTwXQRf7AnHRVpgAdkc1xPX9oqNM44Q8cxoy365BCpA5xqoR",
  "key30": "5Kq2i1uVcWH7fq9qyAUHXF4uGsXim92r6S2RvgxNCfyy5y2AmQL7hdGvWtoqsH8NAxU7XWMkHekgDt2fBqaxFp3p",
  "key31": "2SghSEZVgX8qxx6CU5trZqu8ozFGAfkg23HC6rxGYm2hJvggF8fgZiWBihxsuudWKMM56hhco9rDGZekwKpuFJKL",
  "key32": "4n4THeYSs1SFbrqJwcFK72rjZK7MEjHawwcnngY58pT63sKWjumfvBjVogFp852BVPTwvKzXcLXUqsMCoy8YdFSK",
  "key33": "4NGdKBBtfhWoRSxe5FgLx5rsbAP6MWHjtpUNW3hLkGVuntN8xaYWHtK4id4rvYjeKvQAeMXeUcrAUAU2faqyrUrf",
  "key34": "21Nq2GyfbsYyGr1tXnwsBGwTG8M7j8C4cgRN4y9omxWeRhNMdvqj73is3vzNJhFcywumQzbKoCV6kHoMnFL2xZbT",
  "key35": "xCdnzkL2qwZcWAdBj5jeyfdXaZAMDaCLScLXkAMydF1Mgcbwfwx27aUGmoecayYp679upKRrXf8fPsHD2c5xBNK",
  "key36": "4tnkFQZ3jY3sQPDMWfqoDCu6BHXoAXDqp7mNRzBgvzVwYoQmXmF5dXX8hQEFnqxgTkgJqjp61BWAtbUQbH9Aamt1",
  "key37": "2ST1w72irvGnnC3PtSXfoepfr9puhtanWcGwaSCuvuyY8hcNqHZt58GyCK8v2kYrRFGKShS3g3F1t9iHm5boPDtv",
  "key38": "2VHinz8cjhsBM39UaXXy9Awq8xxV6og6SJBhJzzgozeeF2gMXiTgJvgnuYZg5ExFZ33zRdrRgyympsSU8p2eVjWR",
  "key39": "466go5XJ3BemCvxR6zUEtVVrgHdXexw4gw9DhBP2asXLa9UHnWS5LW7WdTvnhsYLeMyhvDdaBCJkFnsbrcG9Ufne",
  "key40": "45HKJBFhjfNNe6RtDtoZLqtPtxrun8eGyVPEx4zMFUoE9MG2dABiGuakqDYKT5cQMV2xv1vWjRF1GEMuG6fiwSEZ",
  "key41": "5iAFF8yoSxTKfxRNcGwiN5qD1qb6KG8gtzv1rSkKTS2jQqMhVUfntE17jbXUAZEHAb1hvcmA2oMA9F6nzLUiguuX",
  "key42": "4SQ8RegjgxfMDRKcBdPi77XWFTnTFknRur26NhRQYmQSQBW73AVfuhkiTfG33indVaJjMfpgyZSnchdQmD7RNEUj",
  "key43": "3Y82EaRVLM4DyKPcjCn7iyhiyNkebbMaVtZatRRnC5nYKBhQdg6WPiDCZNcRnzALbQawrYRHc7obvGEuqr7dGsfB",
  "key44": "2zMzjo7Uy3bSsson9sgVaQPkM4KjroCUZhwK54Fvc4L7Pp6Yt1e2YkvVfkgbrcagyxySKFYXWgJa5XsJhUudJb2E"
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
