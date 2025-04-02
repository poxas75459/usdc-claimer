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
    "4oPB5CBFoLzuTq9VfysRnePr6dg66vYHtbZ3EaZo55k2deDitFvCriyxaQxXRKYnRj27MxXRUmSmX8YpxN6HHnfE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aYijUnzwJCwHkhJiM1xbxhHauogniuCJj1rnzCrdsxxmbYCfY6bWoKyLy4vqFCRnuxwJCo3JSD5jvQQNbEbiCaY",
  "key1": "4wKKpRswS8vda45Nc7KMfpqcFY4wPDgjp6CQufzLhNiqPcBK5otuTND6UaZ5CbL6Bk15yEePVFpe732DeaeUKLU9",
  "key2": "31dFvg6bu8jdxjxUejWN8xFtvBLKTs7kqwcGzSEHHNzzh2YefjHnWYx2wAjR69s7wLrG4rFHmEkW1dGZ3PpdaH8N",
  "key3": "2so72YRwsmgNEzWPKFtFNTwxcaUcNtrRFTX74kJsjKxKpKLugh9siS2x1oCtfA5aFBL9FqYB4JAao27Uhvbvnbep",
  "key4": "3qt72JDg4gsD28sWDmZQbkEfL2Ess1pQYDm8gYTrf9ThZpKPYMtAWwYegcsBExxNbYzMb4csSgNqXFmaocCuR8cr",
  "key5": "4a44PzS8Q8c5kFw5wBeyRLKXkr4pDvxK7fdcsg1VnDewY2Yja976ogMMixhviANvcM5yunZkSBRTJr1B9ebiwWAL",
  "key6": "2qWB6n6RWVtw8iqimoSM1jQE8XGsDrCv3xQihkb19maRtyCdreRJgc95LZ2CYQT7qRv4hPuvRk154YhdTbQtSMrE",
  "key7": "2Y1puWchxbLnXU9f4yyziFeYyRpKfxyeZ9vgsWGgSYuacDw9edHNGz8GNhxzUoDZqSPViUxBWMFTKT7aZr1SCWUx",
  "key8": "2n8Hrs8uga4qGXfJCXABpqiXBWpe6dH8JyMewvbuUgfTq9McZu5akFQ3iNBM6f89UtCNd5fVNDLrYc6Ck5BHjHsP",
  "key9": "2UHrWfXxArGrarDuTaJeQQRdQdBnBXX5WsGh7Cp82kh8UEJrh9yztVsLH77m8buDvTduH6qHBFDSNzhUNC7pB8yY",
  "key10": "3fqJFHQwWSxo1PgftmrQSVgZyzt2WLkMJi6WWV4HEhGrTeSyd49VG4YS2k3HeTuk2QktyGgJVvMKNpqGxqAiHC4E",
  "key11": "3AevMW2ymEeZhgDyD3WP9ZmvXUsA7NA9m8xCJSJmCE6Xd9ELXv6Zu4QHs31KsWKFSoJxpELdX4aac2g2YG3sHtE",
  "key12": "67T7ETNQXyRVsQd3Z3zRaeBdPiMV3dWyqkEm1M72q5kyVTH3ZYoe8HVTupzfMKxShJNjY6hh8aR7rsNDihZrm8S2",
  "key13": "pnoyCPpqL72WKF4g8jwaEjVrXScHCeQHbPk3bvTqygmedFMaLxGnfqbtyrJEGPZUJFLmp2R8hqoSkdQLnfqMbLt",
  "key14": "4iMv8b8a2KeWcgZbCypbPhhgPBURVsZGuDQDGEEVvJcr4FCj9svCjmm2qKobBUcg8gzcyr8si36DzZZpRnS8vF4",
  "key15": "2ohtvrmCrSqHyirzayUoQkhvgB2wTRpNAWQaN6hUWgEGYioDjXGz1syu9VFjXSmWacPncHrdEnxewJci8VJXzkCN",
  "key16": "4wbop6QkpvXpwsUWkPVJ5KthFupMz4DtaNweSi2rLFDnFTp9g5TfP1Tp67QSehLpWxdj1cL5esM3tVVjo8V5wgqF",
  "key17": "yhGWJ8PVCg8n2Qcs7f9qV2MajJ4zpyhYyyjV25MQ895FgkoBVQFoLfAPMAURwtjJgqP5E3fgvQwgTVwKf5LsN4z",
  "key18": "4EYrYvifLEAst1M3JH6JxTxrDjzVzuKUeYPKaFhMpUmaFDhXngd5Yxz7XyTzUw5haoSx5xfDNouAodvtzCrKTipF",
  "key19": "5jWoH3L64e2JV5ynj24AuGtDQPmbcZ3UTLnSnt5J2ovBnkrnkShg5ymrmMRJNUcUzZUjeX5oU4xbp57kDMVag5a7",
  "key20": "2x35mBmw3nMtmdjs68AYAz9kthn87zBvFp4U5AhMqR2HbWvHerTjAkNiH4UnAte3GE9ibhrtEz9ke9pePoW7WtPD",
  "key21": "4Sh69ywsQgG62ANzbSyJtJQDoJh6Dxqnw717zgpYpe2N26qGS9GGgGc1WaoJM3pANsEYJan67nGV3DRRHWDydMPL",
  "key22": "5iB2VPH59h8J47Vp2FMb77ZJAAcSpKKjgCn8Sk7F58wzgjVLq87uigBFpXHf9FYuwHfGxb6avgdodTKyipCg4oUL",
  "key23": "61q4oWPUbLyksoHuiPf1wkx4AiX171mQpnBu82eCYFWyS3LnYcbA4gEN7jKjGiu7QeNZFTwRsN36DGRGmew7XpXQ",
  "key24": "3vMV8HyGKKw3V78C5xM9DmCXSHDDVVzZCjAJRUy9E6F6uo6NCJTao6adyAy2EZAVKu4YgGqE7bmbyKBmqx7qGUGC",
  "key25": "nxhPerNCj6gWbGC6bT2ivi1XqjsNWcSJukW7nBSwKnF8K7VU76dsMuuk7HT4H57jLkDLjKqAMFdnpDaz9C51ZJG",
  "key26": "4huagibvssoiYyHiPiLVt9XxaMk8kxgEtinfdkrqUv828NaiXnpvgnos3EDyDFBWjBwmYKW7gLxb32oXbNSaHvgF",
  "key27": "4YTGrHcE2Bt94xSwrZbhKwwAQroBQRnc5yrVtbAxrywih2ycsoWjZH16zs3KKE9sfbNdZF8CgFAg9K7RtHXBzu1p",
  "key28": "4TMP4x4ndkWCXiYcnT4yfofxpYYkpbsKYqiXvCbw12g6NcWw5gzq3fefA8zkB4GGUev8X1UocEAgQgtAmX8g51pD",
  "key29": "zt1xzhm6oVyjBib31zLMjB8VBwSV1aqcTJii78gvcdhniRfdvyiaSTmDmezBSMe6v1yrcGif7AeP8vkXcsrTUJK",
  "key30": "5Rcy3ugmktNStNLiiUKKzt2qHkkmv5m67nQoUymXYcA7ui2SotX3FfYDcy2HpyXser3EYB1MMQBKFincg2QxxLZo",
  "key31": "2RFk9AvescRmXnwDTE5Yx7MshfeLHMFQnW3XLdUAfFEZwJ8poSTsM8JHHcP2TkTjt57HDJf7YWgmvznzz8FhXxpD",
  "key32": "4XUofYjBySwN3cZ2Heq88BfyVcSkLbX1HknQJZcKjny7oKJd1E3nNLg8Mev87EWdB957tbVmwwf6BsjvRgRz9XUE",
  "key33": "3uLGBtoS8nzxJU4EB5vEmATAGnvgjFTibhqyHThKxqCFhbTbNmE8NQLQcBR3fgXLFx8MpPwEpJuAzJ1uunxTxAbQ",
  "key34": "592X1VFETq5FJzahDNyiDaRzofKncD9zHpYbLZYVzbqQsSke7SxGmXDFWT9iQJJevSLqDMaRskHeZPzwRb9EpnXR",
  "key35": "zhiaWHsUpSv4VYPupkPPWU9jatZXBfYEVKgFuFqLcWpVSqPVq4gXpeBzzfFRcy2Mt8PQGfwYfqcYeK2pHtnaEJa",
  "key36": "5JEFHmF5RKEkooYozzCCcjVUd5HGznKqBowbSHjnD73qs3Yfg5aCWZGwD3j7jdMv5aER8WGMVmLtLbceLTHHC5rM",
  "key37": "3P5gScXd2ARY1ej58oQaSuAKCWKHdqprUesFyDURRAxSftxor78Zym47NbQKsHj737B6TVvANA5KuoTK61NsDNLT",
  "key38": "2cuhQwiZwYgU85VAvdZwaZ4N7DsChQGqC7huSkrfb4nSBy8wW8BgVTz6FNh9oRsdWDqw2B3gseGVLuxy5PkgZ7WR",
  "key39": "zCmQ4HRBFXPvTQq5uK7dSaSM6oMv8BwHiiRt1bq21hYZmJmnGNzRj5P4MCPMq4d53mSADBPzhjyfFkYevQht1qj",
  "key40": "4WR1xVdkxViLJA1H8raDofXgq3f18gwnr4kY8FLFCWFGK5Ex1fF8hGH4s7L9Vr9CEJMpijSb3yp8CcFjQJRNj9hR",
  "key41": "2tuqDi3dRqrgNr2hMSMmYJjxpmqR7BHRQ8q4aokW6cfzW2uHdsDjNYCAJHCLQ6erKr9CYLjLzamponhoS3QtPUqY",
  "key42": "3sCMkgzijijmif9xdr3ejnnqESYMh6urU8xs9SSSqpK29zUGzua3iuivhWVJS2Nstq7jVMbXZAPEyrmymVM4Muw4"
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
