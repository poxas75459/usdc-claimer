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
    "35xA1crYHxDJsgWR1uhSwxRgpF4X36q1cHvYnm2AHXZb1EZNaRkAFEfDLYz5tsA1bUHdFY56e7wZynobJpPXgxeq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h23VHpuLY82T9GMdia5YSgmBtNnv3GeoToMCmkfZ6NyaJJrEbcSqKtjcFgDebFRFLVnHuFyLQD5Y18hVRTBEkas",
  "key1": "Uav7h4gqhhkxLTa8fu54c6qABCsRdZLZGpmXkQS8YEMqq5yvrHM7d8ncD5LZnCnphADXw4NaER192s9eEaiDQ8W",
  "key2": "2K7xizgb34KX9ULNzyAVTApRWtqgYBj714dVz9cwRWtjzsSR3RXGBtB7RhD7DSxyxMYjzeb3wyRKi78QbCaifpHp",
  "key3": "5Jwg8GcZBqTHBdqhzgXupEbQmo3VFvc2XidVMDXXpgMNNZZeucbSDjiqpSwgS18zuq1caFLqV8K2cNLn5wa3KRY9",
  "key4": "533qyRdg4QiGW75DeuEiJ71mKuUnMZWV89ZVieEpJnEjp3Z2aapHTpMxxVW5opnCfLm4jmcDNWhFftfyMewMQSqH",
  "key5": "LRotmUa8wR4742QnJwRggZaadh74QxJkvdap62j6GYDyUKNEPWyrJNgkSeYEB6VGVsbjEfP5hHWp7DZ8znj37Cc",
  "key6": "27Jiqke1zJkzPVEGxvFTZvPSCFYXyq81FRDHayRrg1BaDZ8KUZqR4BQNdK7ecvLg2fmz5utVYHAZRgYgGLZxWvDt",
  "key7": "4kUJ5LBFgY2FVG3LKqRg82VZ7zt9VhHNuZcKNhBUvUeNibipFTndyBJG8Trp4nojRWMjTTKAdz1vGTJVhhJ13WDj",
  "key8": "3zVAHh5aZkzkdzTjTJQEJGGJwVCRJZsATx4was4QQYqG9SKxFSGi8LdhqjhPTq9AwT7q5cURvDBgThc14EJHJdj",
  "key9": "9ZjmiHokxMJzucywPq7ukfh5FYu9gXMCR9RBvk6g6722wKHQyfrz25Uqc2joagWgKzUizMAbM2NAvFmt64NwE6s",
  "key10": "5tgFcu4BfFkTm3Vf2uCDhvTYLF674aqVXR9QRRvE9jpkfM27KwKuZHC272zbG4mew4i4F79qJgMgp3FihiuFg5Jy",
  "key11": "dT8r9gwjQKkUGKFSrgUMcpJNmYQiTuws5q9v2mL4bj5bLJg2rifWzfzP2zkX6x18n8CfuzL8FexpbaG8tZXDoW5",
  "key12": "3qXpm5Q7yAv4W9QGAp4z9jkYWmhTwBnfrg2L6RDkwaFy46Uoew3v1HVGVeJJhk8iTTqX4Mj4Deb6LkHtZL5o1BS",
  "key13": "5Po7gCmhgau9ohbFwN6VJ69wkHQxXM1o3aZfnnBY1cu9Tp18Ri7nMg3jn8DRq8oWVnscsR5z8hu1PKHvVwy2Gbrm",
  "key14": "3eA92uPP29BtNpK1UHe9nT4YTt8DwijzQmFV5fvKQmQJhHzHmdbYaVZAYxkygh1xNQGFhTbypAbKGejSq9hgawvt",
  "key15": "UQUQzkUuDytEY5WHUH3fHYxNiU621hVbCGtAz6kZaLumvh3YWARrG8KsRyFPsB59xHuHNmNY1GSKi19hUB5vgU9",
  "key16": "3FbyVEcS54Y1yyYwHerypKj9C4FBkaGUik1g4vDbMCHWmZT3XRf37GQeceS812vrzv57Xwk8BatrM1GUEwV3eqNw",
  "key17": "XyjicebhgytA8ccXgkAqXo8mHoTrwbCohJtBdwDUv5KTWCu7w58fReW5NqdH1shPsbWcqdJg3JRdBaGcBHuytjn",
  "key18": "5kUf8bu5FoFv72k4cmFtGWCxCG1DKYFqmTJXG2erf3L7QCS2oJ21GmAYUmGwBrEc1pNRH9akHi1ttxdggusUXBkk",
  "key19": "2nGt7S4nEuWea4J3dPHx3Xx8FnrUaZu14pmASiikJezzFHLisJihi4ukYdMMuxKC6d1dexNNuwybfd44mNGfU3kU",
  "key20": "24HY8NExx5DGdjVB91AxUku48vipZ4sHMAJ6Yhuvv9gLTyjtrS7V1zBo2dFHqGd5Za5GNe1LE2pNWA2TKRgHFALr",
  "key21": "5DM2J3XxVfWExtc2TVxGXqnFucn84aBChHCX8pKX8ihF3kcDcPEayiVtumsuDs33mrWbFfmBrcRShSxAvKJUFnjp",
  "key22": "3jzLZuMv1hXWXCosBkD2WTC5qf5xZzbPbYj3NrXmqKc6pSBDE3Jk7TwcxqrykYfJtZim2zC4v3ABxm5nt2tCLFLX",
  "key23": "5pzwshHLp3i5GRAYFrww1nZ9nFwDFCzwkwCNoPBpr6j2eypcd8pxU4JMdK3UCCD3LxMoTcozcVDudjoEcSZt3fix",
  "key24": "5KKuk5KHmz21qeAt5RRMXv7nUfRMhpbyauGMYbYUYsPU3XvyAQYKogd9enhpRjs6RjLL6YBn7MxvkgEaXULYuAni",
  "key25": "4KUbhvhhufysRo1MLHaQriZrTqFirD7JMzWzzZtMYDBxCdwvnwunaABQFwhopgX1G6oEHFShRPMjKnrWqpkc5mdP",
  "key26": "2yrXdR266UdV1Hrxrz2kUhaU9sFv17nNt6zS1jQEK2fa7SQaMNh3HUguZPmQZWiRtkFtdAHGQNXJEanNFpaqzoeu",
  "key27": "4CR43LDCRoU7fn8nGSiFAjz3CmqLV1a4qwb9Wnp2eZVrUabywX54ZfGp4HdkEdE8czYejSKKT4cVJm5eHH3a6kyE",
  "key28": "2Rbj5uPFhJjgGect3yGYK58FgUMyzUbS1dGb5nfCoQADMkMVHSLiNSqq3qXhQkyCNsDTHPg2UkvzcCspe7ZLzgkM",
  "key29": "3HbqrWwMxFgc7YPnAzB7mEUp8FT95pwx8RS952hXjRhJ8BMJohUwMPkdSK9UHfGCCLQ9r2oApqTsgvr2VihnK6yo",
  "key30": "3WvozS6fvc43xfL9XsefdjtiibZxWd2gaW885t9Q8n5hKvHysqp3tzMTf8wMXvqKLYGPBtENcaneU3AsfKqefg6P",
  "key31": "qZtuFzuKifPZYDKncXSwxLmXuS7VvKKPHWWKJXgirYU1uV1UVDfDBkY6QRQxR8wAN8aeReHUjXkDYR7Jmn2hZNX",
  "key32": "YejDgar5zEpEwUUvrR8XWZntPwxPsZGRseiHczYK9pfwPCrC1TuA1d8vccP9VVuxPHBi468d5sJXwEpK9Qqc4yi",
  "key33": "6s5wcXe2L15u81nvkiC3GiGHDVHtHkyiUWMT6F7kxU1E9FNYyYWKptsQNXhbgwBJxXtV3JUUy75QeqsqpdhXmYn",
  "key34": "3WEYrWx1tojSAWDQSFKFdrM9QkUB33eN6bR17Rmgu3tSyC4qKYYDywTLTacajSqzFCas1DEEzDfu8XDLdJdpCAX9",
  "key35": "4fFAxd9Umn9XR1R35vxBKrjv5DJ3B5wvMBgAewrCoSRrkL244EeMwjZWzXpSSZ9WWPDm3oJnASbmuWg7n185Voza",
  "key36": "5kPnaBGL7cT2mW3AHBnNfmbi1moEV468vnjBE9jtpV8khTD3aJH8iSr4Kr6pxfSY9isLGPMeG6SeoxxeKDNSmtK2"
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
