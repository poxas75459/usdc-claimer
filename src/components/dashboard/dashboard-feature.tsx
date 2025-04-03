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
    "2YgXSgJdZy7tiRvK339aEdU3CeE3ow1Gn4fYTABwkF89VCkRKAR3pznKxM23BNJRQhuJK4PGnEPcy7xnXQ8MeRzs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H3DzUpXf5soJ6neaZ5284pUKnbxdJp9YKZvPFDv3Dpo2NvexCDmresCoojHfom7EMHwafF2zYueTpDfiArYEQ7r",
  "key1": "5wAdHNQcw3pUJCX5aQZepREmQYbdzCMo9BhvswWbfigWqH2LGn9i3EZYEAGVzUq3pifk3DhVgeS7DcZHmQE4jWiL",
  "key2": "4XXLMGSEitw26LXZbbXdKYvnRCwAiANYnQCxYtDK6rrewpiKw1LwYVyhaux7sr3HzZ8VfY5dvstobFmnz4i6MTRb",
  "key3": "3TweHvbHCECNyrJGoND1Jq5kMGoijGh7LtXz6W6JtaW3JQUnczg5HMxr1uDAEb8LziKYnr9CEjfjGC2N78tJx5pr",
  "key4": "3PFPdmWLQBFDBP5A7Ltha6R4XQaK8p5YzEnwKnykX4NUQSZrsveD8NccRax3k4Y5W9ym7kyvFfVVLVg622eiHQD3",
  "key5": "2CDc6z6yPWgS7T9HDSELQM7qe8pC4V3CHn8tmpPCoV5fsEGrecKcvWriSNRW5GVrfjqH8hGsE9AZCVYr1YqCCcLE",
  "key6": "3CiSXpmf676T9vMimGBrRYHkWumYxhEE87ySn6D5cHVGLoRd8yry8EwjrYHLM6CQ87uQMeMP67G6rFHv9r12v3Kn",
  "key7": "jMrFpbDGooL9z4sVCZ3Gk9ZHrfYj4a2e51jyGKLGAHV3r74bFWuSxsswg1oAAdrp7jFPd9aA3YMAiAPdYncXaFx",
  "key8": "EejVLZnS3ze1TWZXEGURzgRtK7WRTtQ5igzHvgy4JzALQoWRgeiUv1PaFni2XzExsTqmkrMt3576eh6Jj1Khbjt",
  "key9": "4mqYuVAw2qDZ3Tubgor7TmE2DFsPrLj7N3tJEWfRAzZ8nqZLypfubBjoa319R4sjPbzGAe7qrb4ZwZrvcVAGwNC1",
  "key10": "4i4Jq8PosR9p9hPQdNJDc9xwNdW6vuKJwPy85NwYeLgTAeCX1i5AgWUYWXUuGazowdAsYnWDjZjK17cjiqRHBgPD",
  "key11": "4qq2Hm3WFnZmxwkXbKzDA1JbkLdUEdkrnaysgwMAPhfJu1h2LF7a9St9MaFjUe9KSaHNf5gRx96b18yiHvnNtwoA",
  "key12": "2svWE1aBB9Xkv5oKnvnHAuBDFJxW4SHT7PggmzYNyVqF2327TbBsBJR8fQDCKYgV4YMC92iSh3wNRXz2aGoTUYX7",
  "key13": "3Ejb696CuFmKdaaN66XkHk9JbwdYhCvvGNsL6VfwppLFmA4CRY1inaMUCjFPMqhEVzRS81oAXNsWc3zcBSCe2yX",
  "key14": "2HWXt9fkUR4tpJk59tyM89QMikxWJpUbc32KxtAb2tyiZQUFoV7cv7rGgHFyd1QPHzWAuYmiMT4BDxoCu6htYscX",
  "key15": "RbBkEfsojBGbiGfcjvMTuJgHzdB5GoNtikejZSmeP24un722q2Av787DjiQ2jJmb5NcJZBC35988TYhCK26ab77",
  "key16": "4uNkRWbVh2Xcj4HnTvB1LLt4nnwKXkTUthVysUPaZAMSXdX1tdtqGjss5GVosVXf8FP7HB1zJWB6uyDLtXFquGQz",
  "key17": "pQMUuWmwrAWxpzQmFdjzjS1UAr2ZRaBe2oHZurcDhMaEVF8arVoWukbS412RVia8LKwVeSYCmN8QRnZxfudokiU",
  "key18": "fRN5bTSumNvU5WzFgXJxzKAt5yyGnXzSZpfhLuHenVxkpt4RB5LYBcLuEkw2fYvsk1D1Z3VbMa1mExMvTVyj8Gb",
  "key19": "2BuuzM7iMVSySGQtNwNTLxFWDtawETF5ZPwXy1kz5W4uEbhf1K6wVf3yrsrAguziGitN3nq87tovkXxtvH1EV4aT",
  "key20": "4uQ58jL1NEdeAtaWJhNxagudRYTjw6dkZvS3RWrG8KZiCtMU8tcDqWBu2nwBrgDEAMED1u4jJGmYw5Gk8vcmMHSs",
  "key21": "2D7jbX4dnvEpFTYDQAQqnA8ndnyfRirEfioysco4oCwNFwoJPDkhA7udaERCvcBSwuzzWU28wF8JFbC2xy6KXGGP",
  "key22": "21c1C9yW2xHHyZXxEGjdoPVi1ZFZdumtcUjTWneCRMV8Nwun4FMQKaua48i4iKoPYKrS9AovbH8iRiHzerXtBBWq",
  "key23": "5P3ZSCpxPxneoWkwWesKF7aFthHLPmnFUHzdDrDfTbB9fa2YSzCCb2fYiANkrreTcJA7ahfNAeLTLVQQpiP13sw1",
  "key24": "3cJgAeJ7NyoALv4U47rLtxQjT1uTB7jJ1GRPePSiVXHtdwrkhjVrvDh98d2z6ngcq3LtmhRqPiHEXjvAtNKTNnEr",
  "key25": "54p17XLXmZkdzSh6Dx2jtdjpMN4UQ1DKGBWve5utseFwJ8PoBxEAN8StKEgwfTQ7Xr9t1EcGqx2WkSSNJcnQbC5H",
  "key26": "5PoeGzh1nzzJ4U46HKAiB6yGELVfV1eMRYqNGswEotKcLdC1RqzWv6Mdf7WfQ2adTtSPtva5tV7ZCK9UqcRZi2fX",
  "key27": "34puhoXrKV4cMcnBKTm49FF2aBgTARJT9ukSgxy2EyDkj4FqDBeVAQzzzUQGytD5EYfdsCpQcZWYdURv5MGqKFu2",
  "key28": "2wQbbLebMwwMtqAfbW9F7XpRKQkMP8twDaHjXyxCddXkhkQ3Jpa4YxttDzqwD6ecaGKc6ME9Ha8QMYifBPyZSn8y",
  "key29": "BTEkfrzXiy3F5cZFBUP2iKi4P7HGetiSJVZLHTy3dDf9YkdnsHKsRtWkpbNGQP8EkVrJTUBaz17tB7joNmxFhoh",
  "key30": "5wovFDPiWzxMhQ51RppjQCaPvHPw84kKCdNUmjWMTzRGSbnwfb7qvYwVHzk815zpTcEQAegMqju2abCsjH4ewMeB",
  "key31": "FRUittGS5VmkuMRdNJpDQKFq9QtguebjJJubeS6hMGUZ44R23eywKQQuWF1xwudRvFMuAkew7xJoNkgUQ6tEBaP",
  "key32": "oExXviHpKZy2KmCuLfzJ2GqgUpPDZxX4dwwtYnq2RKqLTV4a9HchpRHFhucJ3k8Shb82SW4fW6iHt25WPH9Uzso"
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
