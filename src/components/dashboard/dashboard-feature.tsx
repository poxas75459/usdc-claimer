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
    "5KmyMsVRZq4CTpx5Z6A2pQMQ2nm4rL2T4D3mQp19ijT1ss8FvgKdMgtVKZrpwWzB1pGMomy9BWqHVh9Ezpux4y9H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dj6cy84zfieZ7ipocGEUv1fieiCXJiQcp5fLEtuSZndVsQ4qLS99zNTBs8fZmjVomSGyzSvPJ3RNhhweDmk8tK2",
  "key1": "2rr8wqsTohmXhBLZtbkNEz3FP39H3ttZc61DpXH57Y1dMzQaREBcQAqugR3kJjNmZ468gd7ACbn2HzK2U3uk5zSc",
  "key2": "4FikMvzUtmHX6nLPthLeMjJaXGo6zUD9UX23kKNuBWnvZNyvBeXwS2q36CMHsxKSsxNsZkbbNtr2r7PB7h7cwK2v",
  "key3": "tSYzt6eA31uYmUmZNt2JAZwpxx1aJb4e3eo5gGu2NpX1sUiCxHhiBkgqLFoodb8SzUKEvGH1LPRNrDXgpsqWM7L",
  "key4": "3E8XXN4QwSdwGcYrRdmusktBNTxtE6dmivqpTjZ5EJnU4ma7hcbFu3K8oDpPfka6sgYJrofJ8DEKSLejxfFtw1Nx",
  "key5": "2jWcqWxagY3m2AZtPteYLn7HQnhiHBnnRLYCrs1LGWmzoUdyWsLCMkrDZKoaDWGbse29kYXbytNXzxycTd1QwtG3",
  "key6": "24zFALrLeJc9xTyPqapFtiqLC7Jgo2XBuKcq6xGB2M4CJJXkqYc2ReEMQUXw9S2M1Kxxgr4VZbQbw1i4J9PD5Ms5",
  "key7": "PscUHwCYUDiyBkE62LXadqmgAdF1fbpjHy5V3pLfc3zMUuVdSYFNFFmgvjthHC9TijaP6g1MDEG8A9u7iHDqdZ5",
  "key8": "43UdTQjyhWrQkPtsSMhYZo8NX9G1HQ3BMhUvkuiWgE1XSnskmmU9HY9BYteeZKrjuQLFRLkBfRHWwfhFApSaSoPJ",
  "key9": "3m2wfJTT5vfkPKQdnwFQ4BPCMRGPirjEzmAQx3KdgHfQ5ZJAxhVTfanDUehTok4rmGN92fyKr9uDo2Ub7D8uhZB8",
  "key10": "4UfsZkmXbHEEmehGgdLd8PGJRZATedAzYXws1Jzcm5gCqDNsgZmXZQVa2YGcrTtepWCP4PKgpm6RG1RBwmCDW5hV",
  "key11": "2peWyVJZB1cREeNxibH2SFJVU2MWsLna69gBUxamr82zXmTXyBjGGk3jctx3Q2f6AR7Xqmyo9ynhHZU32USpVFii",
  "key12": "3cotmUyEJW6vqzDQHCkoez4vNxjnZzZ7doGttFGcdjgGrUnKnrv6KUp3VBf41nSxR33BcRY3BmNQU2Yr6fD8ZA5A",
  "key13": "2pK8jxFBU4gAfE89k8ANXCrA5AuQWAontDjYFKBUxcM26eauNWTub51wvLmknYGBerXUm2fF7oj2FL2TEozJoa7h",
  "key14": "2odqr56GRLKcriyhxejTPnVy6KugFd3HmjBbFn6wDMuGH28vVhr5gtjGyjFcU3qb4qp2WyhV2VUt6siNfdu1x7WD",
  "key15": "vHps4QQytJjt51WThUn4zG8cnk3Mc9HQz2nccfSSb1GGLjJNA5MFP8YGFHfiYGDwwGYMmz2aPzxfgQbHGMQtRB1",
  "key16": "AyW13EM3jAWMJk3PfWK6GA3NgzbDczCitZ666iA1zFjoqaNoqH4ZSTu8NodnZ8xjY3bVwY3DtyELoxfwTHJ993d",
  "key17": "4awwk5h4kThxKsANdxhFWTvfhpYmrm1Pw6XbXGoWTq6ZQzSejMeyoDgR65zcF33yRV7RxjoPuKcu7LRjpevtDH3D",
  "key18": "3dTDTYDUxgB48wJBqZHNitEFHejZauoMNugLhF9dUEEGNZRHD2rZK5uXfhXrEto8GJ2kBt1h8Fg6HCG9pvamPR25",
  "key19": "5mQpwrgBytmGjQqJbbSifw9LXzwvgEarc6roK7K5rJcKrLXTMF8JTcDjNibnKRSALLkFqNP7aDQwD5ZgfvSyNWYb",
  "key20": "67YUPYprg3ZDQWd9PsgKsbcbmU9opcjhEc8T4oj44yXDWjwiPrE7orTjCQ6kWbXCnmP4gkaTmJpVDpBTotxsCQwm",
  "key21": "4Hs5Jy3qzS3JqzZ8e9k6Cw7E7wRhmUWUtKCi7RXAL7AEMqXwuF9KbAcwLwEwHZ1fcdVzMsELavtJ7JZznoVfotE6",
  "key22": "54gH4mhQUugqwCm1WGK4fo8R73bxWEq8j6Jg3bqWVevSkudLaMAN7GwHV1a8nJhACs3VQ6GyLhUsX7y93fhWPWZV",
  "key23": "2rPQmn9FJg3iQE3gZb5xrvEDtp3rPSfdexmhUx6RSYopP1z75Zkv8KtQauZCYnyd2zHKAUctKM1cYeWyLE4xPhWJ",
  "key24": "wje2ZaoKVJmhzGFxrBfHhAuFUYkAoWQN6HaWDtYJJYR7VjFLgWeaFQxV5ESEFZVn5hL7RepEeVYAJzgYF6Ddeqd",
  "key25": "2WQSyZdQJp44okRDe5wvvRDkYfjpfVTweVAA44uxJRzbUcu3ZtTiWM4QjHYHPbmTG8RZPFazqfyuFY28p8XTBhjm",
  "key26": "P7QKfeS5P2t6tPrpLAUHSbQLsjmT6gyDLzrN9P5aHSpZWtjTWJwFrhbX5kammA87ot7Yu1hCWorcTHUWndspmPn",
  "key27": "t6aCGjzk7LftXcXeSYRp1du5CkemZtctvpwukYM3vTTKsKxMqQfESeZP3us1JNaX6XxapSYEsC9BXo7Q86WT5Jg",
  "key28": "gW4XH7WCtT26T1f7AMxQbcUTtm7HMmP97tVJX6MS2prUQc9XPCLeDP1r1KN2szEauza4eJmkNkt8oyL7ZeLfDop",
  "key29": "2q93xUgFnnWHBFBxazjVxYM1uMGeCwMdAbhpL1oBiYAQAGSKLkute8frYp5hCueYmiPuvBkoPBAhou6FazW5Q4H5",
  "key30": "3hKNR6jgazF6zExHJNGtWXvAADvX1FFwJV12f8VGXT5uCG1YSCcS5CzwD5dVYiPiss98Tqakg5JQVqf8B8CGPPCN",
  "key31": "2y22EPjg5hdMjiDcmWqH8tX6u7pymhdWqDHPD8Hj57nA1GnrdR87i3dJZ6NGtSYH5HQwW5rJrV1r5n2QFme7A6po",
  "key32": "Xb6ob3o2yecW5PvcSaHbot5Xt5UXAbTMyMMboZ4yBWGVMNmVkPn4nCWyuJBSE3bh15d5PiXzYSYzDDLrBGU7nTa",
  "key33": "DzseqN6mqXQEqaefF7DvVPZ75NcWBBb8hKN2XbdS12oif22mfqXtQwk7sZ5eTg2EBJ5ZrpCMRb63oohiiq6GfxK",
  "key34": "39MhUYYSUp6TAEJBasEhPedohn3NqehiaTG74w7ndmnGQeTHtsurPvxQEsedq15xuNvzxq17pJd2f5Tapv3xFvqZ",
  "key35": "57N2y4GQadro7Ra3Bkuo9pQWNJgV451wc3694Gr69kf9W1bbxayQgW3HcLucUGcLVDbXeQ7PDXULkYW8yCdoyxWc",
  "key36": "39sPr51ox7LJ2jbJGiKqCkt2q1jHkxegW3uXYUSE549LbjzkPmdu1DFPKdRjrp8GKvTB9tC8dY4qXnTJDQjE5L2h",
  "key37": "2KSGbBntjawxhgmPLqD9mhg4A61yi4YCx2vx2VKy5u5xoXdgN8NDmcLFZXjduUA68pqXfNj2pZv9SgT1mFJWQ65t",
  "key38": "3ij3Ucj6xFwbBswneciiizsGqYKcMo5FBaoHpgcxYnirPvSojf5dZQNiquDWf2Nem7pr27Ax2N73VkV557HcWt6e"
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
