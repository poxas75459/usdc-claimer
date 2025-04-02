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
    "3cy5RJp6rpT7d6AW7bgUxX4NM83ezsDwjNZh9XZrcPn1kcvMt8jZbdyHf2YwcQgDNrg8hg7go3TjYFi1mLpnHSx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xgh3YAnpbaJ7boXo1KfkB9Ggq1RWUmWRKgqvgxWn7ePMnfe7oNJssgQF4HoHaJ6dWq7jBxcSvJQYdSngZ9rRcnz",
  "key1": "3fCHemF6pdktAMYY88qH5GmaqxJTZ8uoavJQNVeJ1mMQk81sh42fhm7VWyLwJ5exNSPod61Jxgs5Htd7WBjYLvAn",
  "key2": "NYjgcfDoYWV2mjZ2jozDW76FSSz2x6bP1QNFy8xioBTpWJ6mJbRsCAG3JizEHzmXQhT3gPXtVcpVLeMV7oJN7JZ",
  "key3": "2kxqhu2tTtMkBuEYyG3acJpoxp96NdqYpBDrjfiV5guLYbA8P3THwb6JE4eDFe23ZoTYUN1S3Wu5F1J26QaADGEu",
  "key4": "2ThMbRKfeBCfLP8HTG1rBqu93p83WKaobdDCk97nhqqPoVdxSPFNZx7pDrLjTyN8ojyFrdRNe6PJTR7vnwRbz5Ve",
  "key5": "2n7feD1iW7cUUQunN5M93GaPXcg9RzcwZm7VRgdAJJqcf7Ms1HRV7eK7aeAXrjFDzY424pgKV3amLfiUQ3JPfSTT",
  "key6": "2Vf5MCpVu9C6CPjJKoJ4SAjzVif4Wonn8RDNwBDtDjzHhr12NfAB1MPd3kWgntLcfm7k2FxDCuYfgEigjJ5LnCfb",
  "key7": "Kg5LMUoLvpfhheeCPc15ky3JnRzVjSa5org8oU21AGjQBYHW7qoKbHuayvVbUmrd6wAJkN9eTJ2Hpe26A6qSYYR",
  "key8": "PTGA8HCy8c1kvGAE1yPhfkdKbyz8q9aH16LM7gp9f99wwStGhPqusz9qWcqomEqAuPg3MufFoZPG2327Vy6zTft",
  "key9": "5WJMhTMnzLcK8mEFge2BDC7bYXRxnmBCBUYEz7SFSsmf5C47KPiiq8oLLqTLt5VDhzYtnRhnHcV6duvs3azk2Cc",
  "key10": "4f56rm8TBBCwDxXWinUc4H9Gw6FCFvRbKoLQ7whkj3pFSoJUNY31HYgp8SFtJgnEqewUUj3RMEFg49aVzx29qnuy",
  "key11": "T4dW72LWDtSwDCfP9WGLeTMGB1iJBWv5DZVaNoLW516GiH2YsCpJvaDWRVkhgkY3AKz9jNJ7weC2oPW79yWr3ua",
  "key12": "HMbX5TvtBswDaperY1tSVPdxV59exJ9BcvdBTvaFmKorFNzhQXeKgLKaHTpuorbEAmMoX2wWc67WCBp7ywRQ9aw",
  "key13": "4EKG3qGZ26sSYqpS352uFxCYDaNumnFZXfLGo9HfzFufnDVWoog8Nj2ERMivaRrv13AYiLDt4dDm1qVcH6CCnTk9",
  "key14": "37z919S6arSkstK8X9TFYjbSCKt4EzdCR1FjBYZxDwbaqrGxkSqt4dFuZVdk4b9dPtfF5h3HS8xZXZ6URiqwnFi3",
  "key15": "3gRTVMAM72c14oSheaSWodjnkvGjcnQRiJmvbvQUH5dUjgHxMrDwBffGs2hYojVR9a5ND4KEYAS6S9rWKKDPHeMz",
  "key16": "5JMeg53DY5f7jac1rNNh9GhnjzcySYEfVz56C8ca9P77JYfuQtwxJmE8Fq3NqsT9x5ijfGzUFkRkjG57LovZAXvk",
  "key17": "4CywzqEZUgm3wUjGQcQG9CfRBP4cgVcUWsikQnWdjAgDsaiANScVyq9Zcua2mYrSNpNfVT33hAtU4fxQYojiNnKR",
  "key18": "GDHB52wENQVCQjNQhqEHz8jDYai6AFsx1SaHaN3npV2xrWTuqm6yyq2RucnJq5hDJyGfWzvkrqzm3MjYEqEP1BN",
  "key19": "5FoqFcNGd5PpLwTiaXvxb2y8WXVafNGNjypRx6MKhrLffMifV62hCct23C5Y2j8kzoJZTbwTsvB5DimWfYGAhBA",
  "key20": "2rBoWAjykWMoEDhxNeBz9mH6nousDbuj9sdMHpmGJyf9GDd6khLTDRHiDsvtxihFCZQa3e7YrcVeNk48RHiAtnLb",
  "key21": "2cGLAy1E7nyKYw9KN9var6hi1gBJStaYd4sp5oiKxKc5J6YxsC5oi3CNyUPeU1Mxf6hHo9XHbfrF6HfQmEmxtwVe",
  "key22": "5PsTGiUtNARz8eg88Q4M5pkFozL6Q7zghexzE1zETyk4BdGzbDudjoEQzSCJpzGact68ZpHdgfRP8Bbdhtp9Ytj9",
  "key23": "3seXLKrB7XvxKjzxMewSaXQyVYBgcRC4kgnMmoGW87c95uAVqRR5nyVGaMMLYj2fWdZzefWgQBJHYwhz8AyQcaa5",
  "key24": "JQcX6gxvKoGLkJRSeo8DYhwYdgwMQzE61kPgyqvkKE3HsgGS37hwEsHDboTVFrkaYRZ2DRwtSQb1KwE4ppg7QTg",
  "key25": "3yX3mP6Svjn8AoPSE8itenBhJzLKXkzMqKB6W9K4Qxwb47mfDggwENij1MXj3BV3Ayz4KLvvj6PeapMGt1XdGF1A",
  "key26": "2qHeCFNeAKfgh4wufN9PJN9MBdSkZbP3RawsC87eeN2UwJ4mFZoRozvtyu7pSNfzEt1NLAYSzWGzJ7fxcwaGdaZe",
  "key27": "5Vj4moFQM3wi8YX2JwwLAPsrn9ekcVL9r19VLxBTqbdPDbUgwRXAiNsbqNsxGWJDb4L2fFfggCQJDb5QfpiEH6Kj",
  "key28": "5Rr5Eh2LsRQpYUNmLwf6fNJimHRpv7RxMMNBak7ZruNcZc3FxYEfDo6D7dniGkfEff5dbuVSAi5aMDEEckVuAESY",
  "key29": "4JWdxseznGHANhPW8Qh4P8BT3eDNSjiFHmBuJoCp3Qy6CFzWJft2FFvSuvXReX6nSC4xhVPqfuWK6W6WticCCLsS",
  "key30": "5ZTzTfdFBXL6rubhYdanKgk8Z3ZKC6kvTvkfLKJFoHLYgoZr9bB59CBJiGDowh6eLzrtJr8WkX3Yk2SZzqNXN9zH",
  "key31": "zaFFXCDFF8CGX6EmnEbRbwRBs1BnYKoWG8dTq3p6K2aQsNRPtoNzRq286CPkoVdCyTghb4Rfvzqy2dRWw5xT7gu",
  "key32": "i8usgv5aP6aWQBgsV5UxLubfcH614m4MNZFFXhhJ2QkT66pghXjkkwEjKWDFsgiRP3ZkTuVaPMwYUTmaskcpSGM",
  "key33": "3EpQcXTG39oUZADRXy6Jkyp13nSJq13e5a4RbsMhRtkYYMSArxJcSGwEbHeaXDNRBsKyHxYc3idMY5SmB6GPuCfm",
  "key34": "3Hd7ZUh7KxYRjjseWyRQAPqm42AY3FzCXde75SQWuDwGPuEQ9UV9fmoYRGdujQpaX4DwKZEcj5zEhwNQy2LHadUC",
  "key35": "131AwfUsEQwi6yzdR5cHjaa5ZXUzJTKaQmFZR7L5gU49wmpcEVZouikkqCv1PFE5PRX7ZXKj8YZDinhnsUxX2vE",
  "key36": "WnqQgdz47qZFLRP4azTzffVZrcngxSD3Vcys1CfAJrQ14d88cibZwgLB1VzMBTC13BCCjUdsmD3uugh3PDbNTVV",
  "key37": "Rvv69KFdEV9WkUrA6ZPUTsfJA8uA68Xqf7E9PMaJSgfFSr7QiPa8hd9fvDLnDMqVaA859YDDxEuM7FMHriJ4JAH",
  "key38": "5qTt7QbZMeUbnTmNgYWeLHm3X9fMEKcJ8ZkcqxLfB8UqnXjxtF9hFCjXnhuDSD5wwb2Z6Wf4eAGMaRfjbycNQf84",
  "key39": "2o6ubwS9zia2RJzosW6NeWSsooQerG6YziCuRz9rYAX99pY7WJTHNsBx7SieJV6aYHTzJSgwiNgD7b3st4kJbYoe",
  "key40": "5wBPWgVoudomZHnawFSnCES71neNB5VeNNFmtkYygVVPg8N2hWwzHVuWUPbBaGicCQ4CvEB22U8zDycVb7hpzChs",
  "key41": "k2wGozBu5CDAWp9Ut5u2RWdBXiWmhYqzzS7AHT6LiaoC3QjtDspvHwGNdHRMD83GpAXcJz6KQ8xoGg97CiJUc8X",
  "key42": "47wFwCCWqPHcBYn1o7kCZUeqik9km4wCtpFhcLWTuM4KcPFstuZAYfdd5N8b2xx1LZrv9oRQy1D2dPysboea9e65",
  "key43": "3yQiQtRSZkiH99UB5ip4Nn5kTKRuAWPxcthoN7eQgqpT8zhSuR9KhFwfRLwPCy7CM8HdByBDBngC2kANmnrKai4g",
  "key44": "2wLFD1kaKK59c2ze1zmUoMgVM6ws2XHD25V25Y1gEuD1GubeUHSDqHLgiiXde8CifjKdupH2kuXUuYP82qhJCvCz",
  "key45": "3W9jTHhgrfq6wDru4L4SbFE1ok7DY6xTVSVfY1bW8eWYzPvQJufX9M1kTTdKXTQZJ3FdkUNT8YozA2xMDasFxhAs",
  "key46": "R2pYWQ7euH1mXjxws815UagdtP8VB2iP142nXLSEd97aprNT3wjihtccosv3tiJ2gZS85F4P2igSoRRzRYgaXLp",
  "key47": "4Q1ssPRaxzGZfwy8AgewCaTEec9k6U2b5s69DQpRV4P2DZeSGgW5PeJYwejUKD3r4yod4szMo4Ef1HFxWcvhrT35",
  "key48": "LszWCexTZ4U2qieTmEtmXtrFDaZxQYJ4K6pEExGAVzva2yK1WozBuKeTCJotK8PoDoEqq1KasJSNiCU9b7qevgi"
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
