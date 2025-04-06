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
    "4JvGwW1JrG2diFgnkFjuCg7HMCtnrQVCZmk4zCsnZeKyfMstjZMrgTM7az6webGjgbRSHEuUiTNfXGoYoL4LphXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KRX7Nn5mG6HcHPdYAZ4cx5dbR5uNNNbwg3naMMMvz3xFjvB2qRJZN3t6NheKXYyn2UZAzeYFTWprYQGKMVzXRzs",
  "key1": "59XmTAV7DjvMeWAbaD4gyCNyf1ke5j4p2DHHPG1jbKyQ2z1Hiqc2ZJ8XyvTsZi3jEM3kpswyihNDGH2fcKqGBgSX",
  "key2": "5SHhgyJDLcA8SEUW1YjcCasFzoEyjM8oDV7UriMWH4kpfqMSPNmCTYKuPwvXjRJu3Z5b7bqGPnmzsJqys5Di1ad7",
  "key3": "4zzkNYcEAZzAxx8F9917o4UXwU1nsez9JYnCXfYDbka8a4s8jTkxfTeXT7sN6gFpwzRwXB1K1nnyptEeMw3ySHUQ",
  "key4": "29GxfVHiFiGpc7rQGTJ5AJyHuocfsV9qmLkuTQuhcMEcVziz2nbBZkj7m5AvsWeuerewFHZNjvKZHmvZQaHRzKxU",
  "key5": "WmtWeYvRyJv7LGKLayhV6XkzVbVLuVgkma7nUF2rBn59wtHshX29NqBucGfsuvVTdDVCWmkzcPHKzD8wncARpxz",
  "key6": "jCPwrBFiHq6bbNyZVLsHwwcLtCYmfPUa2kgShV3NbwXBsAhDo2VGQCVWdLCuxjtYyht6F1rGFYcvESyMwkTjh9Y",
  "key7": "2T5gfiXkGwF4RuXW2wmnVQiJxfhxbzuC37BWQNppoXYwaspXb3Gz4Y4skXvb1yx87DhfWCGrsWmXtMn9oXWQxtcC",
  "key8": "oRmz2iqFU74aenxVUjqi9H9xAgddLdBe8W6stmBFtT8RdaPH8w9FwSBhCYdW5njjSPV68fcWfuxP2ExnWUgTxKt",
  "key9": "49e7qfdcv7QUaK1EQQiBTJZXREHJbp5wWkPv5JkpgtaaMK7caG4hHwvjDWK2h4jMEseaBwKQwgxQgQH5oRvF19Ln",
  "key10": "c4DtoXVea34MjGGaz3HqH1mCFakmn8ngi13cWWGuWKvD14MghggkF3AQg6NVrpsMmfgH1SUGJSJ73xwDPevRXvD",
  "key11": "p95br4y55bh4LXsidBsg9tY6kNURcuW6hKRLGoMbH9MREHvJ6G7JNp9xRBvE7D7gqqEcMLTgndMu8WscDiqLTXf",
  "key12": "4zdgZuyiWao9eJ8uucpuQYJ8t2pmxQvW6jbXFSdfvALH26wiGXMDEqXkrXNJgsyvZvXQAE4uqVcyEosCbNh5X1Kv",
  "key13": "2s59ab4zKc9RXg4DY2H7MPPPHqimApm2VyK6fa5D8EoYJnZF3AT686H3Ma4aEEpRVGsnx2t1fEvRJwmpj3R8kgZD",
  "key14": "4PEg81W15WQKanCdbHweuX96SMe8RQmDk9GBrsVEjtDRGWwjUBL3DxZ1g5FPbV1jFp9MvMAVGQ2ELNkd8e9RaMxQ",
  "key15": "5Ley6W4tQmFi7t6DQM7RmdCJL7s55QxKnvARC4npa6DkehiCoGapy95gcENXWoR36u6cmPcSAbeNt7fWVps3BGNh",
  "key16": "5CS5JTk88EaXeDNf9DXR71gckjRByDrgUC41Dd5DfHKKS3bDL3UzTkNzQ6juvCKcZXYcUmXvbXE85QYXG1mfC8Tx",
  "key17": "4yKtjj7x3vTzdMxhq33i8uXpYXqbf4Jsb4zbDwu7ru1T784ZymBJCzV9haThXUy8LtTfJSsHc9C3WNR3MceZqxoj",
  "key18": "oWSZGP1uxxu1UiG4yfqz9FiDjSr4N1e8PV5DfYZVpMWJrn1nGHmswptxE4cmGzrGX8QFPLDDuC7XV9ceYT2Ld2p",
  "key19": "2pJHWSWsCWL1m4ShRZdTSYdLLgXCjNGrCMF1MFuQ6RBJPWMKXriVLxJk4JcNQj5mxfDoMTYxrEYcLSbDtEVFzPVK",
  "key20": "3VBDMSaURecg34i6wEXNQSZNvBqVnPLhS8HvJeUzJ23FWNeUJdv8H42sMeSjy1krpmGJ49oMDhA4q3nSL6ax9XzP",
  "key21": "2JvLD6AepcUKE4HAYmgm1HNRyaabqnh971Kb6r1mzCW4eDmpkTVcKCV2H6MY53jxQ4xHXA5gFq7JrTNLgfGLGY2Y",
  "key22": "2f9KMeUcLRyVXzbCLEsf2wkioVAytruiQ1i921LPWxK2VEEsVkoJNsLMxYKGtrjAde3S6aA5ZC145VZ8QPtVVKYJ",
  "key23": "5ZtRQCDvoVUEX3AY1Vi2AGeSquxN3zvFtZxYgPS4wMc1Bm6FyRStpDtXRmBHbp5fd44yfkTAdRzQHY2faQxTA3cv",
  "key24": "3UuuQKh2caB5dZaqniihW1bXaL2k3ytJmXTHZL99EDT8drYwm5MBsi5pvVTvn6dvdxd3JCqXvbwv2yDwGzmWxicz",
  "key25": "5NV5F6Y3KZGtqF1Ubn2XJYuiRvUZTqNv6nga2SrZUhzvShJXRsNCtgFPoKbsJAAFkcWon9n3UoL7qmYkC9Bvv2LU",
  "key26": "3Lq6wG57oQJPEQsnLDorgo3NBWqh5fw3sNMroZP2jzWE1TKpP8jFBDkjr8d549Exuhf8hy2reAFnc9qYidFbSxFs",
  "key27": "Sss6J7gCr6Aut3Y9bGuk7S1pVrtF2BKWs5mK3JMCdHqkThSxsV1cy5TVQHdKwrBA2DUpEcrYC46xB5mgEd5mPd9",
  "key28": "5Zu8egwWT7D8meuJcDuRn3BUeXSewxDsLxNzrkj8sPNXwCaYYeofXW8o27ESBGJE2wYEYve9749N9ecnaq7cuLEW",
  "key29": "4DpTo29drcTevTQGEp9Hm8mUzuocPMMXEAXw4a6Wo3813XzFkVCJuE3Ux1sypdMLgtpjMhJJoqt8tTX1cqco4Zdy",
  "key30": "GGq99E85YGRBULx6uXkep3RLFjCvGsko46Wf7mFU4oTaRdAt4h3Tr6bwav1FNMUuAmnyZcNuN6LjA8wJdf1EWeG",
  "key31": "5pFKWQJrMhgHQxKD5YjxgBucCpNwQM5mPXtVZnPvQRVeTdj3nMREsRn5PLmgwypmrLoAUxzvSdSmbFzfEMJSdPRD",
  "key32": "2M8gDXxkET7AHiQ9qPwLD9aj2tsSEaKznDPc29ojP5Y2NCckBN2SothQ1tYCovfGbJ1Bw2AvKpmq2CTv29X8Cc3u",
  "key33": "3n5Pc59qzuxJnd8X2Azdqepi4xuyVStG7za1yRHKZ62kgbmNLdDSafQS4NN1dHk2mfa5ABDidN4Gmq42Hcm3oNA2",
  "key34": "36XT67uyQdHFzdyF33AYYYxrbdHEkPwFCxk3mcteVQhzTCJdViyufKstBRJ26iKMqL768A89Qf9gRbMEqhkAnd4y",
  "key35": "4u9AAqaVw5DRggVPwYQ2Dj1RjSLiGReuMAsQpktpPM6bnSNXsMcxTYkDh2FrJQJJCnJG1gNT4w6S3BPPEYzBpZQc",
  "key36": "4x2iWiTJwxQsyYfRJnAb2136jKtZhN1ijV97em5rzUNNoTDRn16kuotX6b9tUgkj1iWtZLpsL3ibrp7E8nbkPuNz"
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
