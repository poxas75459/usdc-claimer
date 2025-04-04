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
    "54gvcsPGEXe95MeQCnGGoueQkWbu3sKhHVktHbVLfGt5NK3cC3BgiiGVSp1MkXTgaJYhJ6mme1NSwbKKGZMms7So"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VYb1EVFLuwXQHtdH33XVodtHgw6gsdhZf5BDPQbuqFsSe1s3LKu7HNXkmRHpNyAEwMoAQt6UhUhshEXis45RtvS",
  "key1": "seYCGhKCjJVKZGQ99KFE99kkdf1Hm4r4x6CjhyhfWFB3LQJke1QjfgR7XLxBEQt3fY4cY84TQr61NQCmxFgc4YJ",
  "key2": "4LHTk8mh25wkAGDuqg4KYxxezQptdbdriqHM8BW3QYH3gS8kJcnts2uFnv67z61dM7CF9eVYun78xs9pcWSQtzf2",
  "key3": "67n29TDKhyicxTkqD5h4SqMkVVJaQfN8judW3vxTsFDustMCLCSBg8bpeuQg8iggWC9TAxDKUzA7zALF1NULYffu",
  "key4": "3e7PpCoEcqHqWyJQd57VLTQRwN9BwtUJxXMtrF47ceDojYEaMsh6gyqXtZ8H8XiS8WuWmqwUoH3VEyQv8ccdVNcK",
  "key5": "223kebkxhxcHk9oNmn2syG5WZU3DUTokhiK8FFCajMXdh34HPsJw8EcNS8NFXStgW51xc3QNVqCxXSquzD8Zi62Q",
  "key6": "5KmDJmjrpCmi6BV26vLqGjrHwyidLgUZQLZbzx23mk9TpqAeCm7XpG8SqWbpRfbuLiEA9FaP3sqbcKw7YHhJtKLP",
  "key7": "2VHWiLwyxPAjeRqFuUxGdNkuSKcTus33zjTa2faFtxcVG7vQ6oyPC5uuAdeyEgedLRS15VfsGqmT3j3wSaDMiSsE",
  "key8": "2RDBZFqeHBupog5buw3NPiBa2N9s4JEYm3Xm2uFp2sSg75ozknDYLKrJWYvFo6FMcnE9rVAeLkzjc8uMW5YeRCjJ",
  "key9": "4jWVpNukJhfCiy4GVS3aBTjnBaVy7YwG8CfpAdaRCr48ukTgAqA8E3oauiePvCNzJvq2mxwA75oLLNMzoFWHab9t",
  "key10": "5992D4ZCoXBeMyCbhryYwtAQKL2Gejiheop4cL8mZXS6APZAozgTqaBNXNTcD8ZTHWFz2meKADogjtgcoWmWfMqb",
  "key11": "2e4CmNJb6KdLv34jzAcH9fcAqupDFtERzEZycPNFmcxiCojoaUshtppoLSuPD9rCKNHpWjNeg4jg885LV7UVGoD3",
  "key12": "4jVxop55EmePxcFnRB7AMxgdjoQswvMMTRvYG9wRLU3GDjbSYapXABphkvxRkZFa5GWQCvA4dPMzXxZBTZhoicCG",
  "key13": "2JtfLszvTEoAXMNDno6QuGT2LeXfXKb77tiEgoz2SjKVDEfoymVWWDJt37FrkDCbASHkL58hK7BF6rz2mocvwgqf",
  "key14": "2FRmToiKabtZwJvDYYunNbtGdWsYZEo12RjNkKyVxvW9f76jAyvx1gcNt32kkpuVNjm6WudJAR9WPaPhLs2FD9XT",
  "key15": "4fwLPAXJBumsbdnzmSDBCakyKjs8K22cSX1eXHtGzndrgoiXFrsyP89RYmWDh3MqyFcw4xdMLuw7AeFUFzWcoYFz",
  "key16": "2LXrg1u5UKk3hdDKZdMyaddPw1tKyBZR4bixJpTMuSr1ZXhvkaC9HQtFm2SgyauX2BvabrEvQEc22A9EFnV6vWiy",
  "key17": "YE64TVwmfmhNm1Hco5Jzsfg8S2FVT1Gk42gAGYnkoaYQnehvXCJBmY1MEXAqrNB8xTx6pXV5xktsdmUH3D5JDqf",
  "key18": "2xcLKQpiTsMfUGfLWqRnscx7a29naUUTj8anXeF3wCHsXY1ZXibuACm3a5dVcbwa29BwunpUckubaeNKmfoHGoJs",
  "key19": "25FwJthBBtrDYNUGWQrqqnJxfBU2Lmf47yGySBBHqe3dJeq2w5bEnJ9uE6qAGUbpccRw3tLZfbbKry9irgmKe3bR",
  "key20": "5HCPEeXjbUkn3urujgzAb1ecUCDUEFhjP7LA3oTnFLN6db9XV1fMfTXn7D6gqWt1q3XGD4HW48yMcaLLpVsntCre",
  "key21": "Y9r2uodsFy631hiwYoB86pDDn8ENrBrWnuWtaHGQTmCAuxJDUe1gd4uEVgGSgQXoXn1aLYFRg5b9bsoCG2WBaEt",
  "key22": "35ecscfFCvX8CSfLcaHiSp6oAMnqvkJetvw32xyQCHMWzmXUf7RnHDVLKJDeb9gPdBrH3RNKnxw12pSr48ejLJhF",
  "key23": "59mba7m451b3gswmFCLm8LEvQ9jdaDH8BjewMYF3pDNk9fsSHy2yXKmN9MF3zFod6RBXp22YWibdCMviR5EFCK8f",
  "key24": "4tM2ZcqN5zt4qvr36MjZXP5DyAtSnhikF82rmXnHUSUyzYM7j4NpAVWD8L29jNqaVQXZ3R8MEDTuLuQeC5oWKv9r",
  "key25": "eGX6W1HYypxek6cPoTQphPXE13e2v7g94sy2R4szoYqSrboGJ5kZUUrVijT5Vu7rPyd4HLKHtBNn7TPBzw8tpLP",
  "key26": "5aRViBANLvc3owmpyhyr8ydumYChXGdfyCZJ51VWB5rUrNvKcuQ2sBUnybUcXZErz3q11ZFrSVgBq3DAwqauDzaE",
  "key27": "62auPeeXxvRyyKrGLyFX1PU9pX3wjaziNpfimLoTwheErv2Xf6hEpKyjB9m8uuRbW4qquZKQZMSokcw93XpczsB4",
  "key28": "34wHkc8HoopXMJDukCQLAfqWz5tz81htvJjX6K7VYy4BKvC1CUAwHQ9WPe1FRKQeVDCUGm3CogiDSG4xCYKyFVgA",
  "key29": "hqBGgARKcTZPZd8mgj3cdULFvjhh4UU5Y9EZxNkVNv4THFxoCnAGehicp87EGSsUMUeqWqjDrYv4DsK21ggA6Kn",
  "key30": "2jaG353Jv2q78hUMH8GoNxq3vLt8wBJef7HcTsv7uVLNxT9fRphG7c8RVE489N4fuK6FWNyvYUi2FfrfuLZM7y6v",
  "key31": "3sAaeN79kaGd8SuzeYiS2HMiVDKdqimrG29wK3u9mR2ziMaXL2rFTXKpP8CJCAhgJpouVZQtdCQa2F7qiQsRLUkM",
  "key32": "4WomyrR4Zn9hUDPVevkdY3TQMwwCmqrzJgpUhrxXaE5y7vMCURD4L6oUqMV2hKuGWwF3ahKG1akKZBHsAqtJcsqf",
  "key33": "2ouhbGmXd8neUzKHdVuK5ZcJZjscY8pgFNdLTcLuNmBq1WAyEgdfC7p3FXqdnZk5pCp7sxiGm6WMS3yvj3Y4Q4JU",
  "key34": "vrz6W9evspNnsUNUSG2xPY9p42eHpZ5PRhivWYVAoXK2rmpqpYCdTPbGvfHmSjWRencm1K8PsDbyYHc5zUceaD9",
  "key35": "5enxC74wopWGk3Sh8YuWbEsFjM2oJXTaQjRVhCUwC2JqnZ7Q3RLQBvoeSYE3NYDX14hErz3SuYcHpjnMCbyanqTi",
  "key36": "517ecRM2pk7TK69xXXrg5v7p91rwihQZgNzXmDXcUAgu9GoKW25EjwmAXpyshhzhhhZcpZCV189YXMTrQXXqmjsn",
  "key37": "3Ja7wdNdnXaThNXN9g5EzWVQhja9ikoJAernmZsSRW2PjBCyr7aMVJQA3rMFi5H1GqRkeF3q5Q2DMQST8iTAVEY7",
  "key38": "4c6fLtehogcf4eFkvHnvwtNDp6uWWvTfw5E5VfyuyiDDCqWEte4tFWrgD4MPzHbpVDTekg16TWoRZk53LAarj3qT",
  "key39": "3QTL24x6qkyM3rVkwKxHeGQE523S7gD9BqgmfNHiV1nkxNowPcttX8rkfDsK7aXn6FNq832yPqmQusH5qH5keyd7",
  "key40": "hyS5pVXni3ArDsnpnC4UF9bzwfsgf74xSArP3q48bonFdkHeGAd1XBN9fowDPnXdRfP4WKmWegwctM8SromM32s",
  "key41": "5EWsVtYXmu2BDM74btTa9oGALWGdTYX1X7XJ7jhip9gAuqZqXXvdyXfHLyHRzt9gtvVH6Veu7YpRuE5RmvawEoDq",
  "key42": "b8UtiooaGMH5c8C7p7P3sVHifb7u2SNW62hZS1VUANbmB2z3s3MK2BETcXmjaLwsziae1kneDb44LWsFJJcWg81"
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
