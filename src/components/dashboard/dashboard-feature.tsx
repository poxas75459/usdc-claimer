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
    "2XLac9sHKjyii66fv7hQiSaru5Q8QPAZMGWXmWnNgGNoa8GAxx83yJs1AZ3DuvZUcnyEwvyJog8FPY71VZ7o5wYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WiunE5ooibW7Qn2V3Fqg4vuj3wLKRwnpEKTF1vXQ4r64wwsTXgmJ6sJHgbA9kErGg8z4n1CBshH5zXYzdgzRAza",
  "key1": "5PryVgSPr82eyTgTi33TSaVa8APYhDsr1uP7f9ZEEAdpB5ZCHsAuC6rGik7joSuUWP1vMF6AQr4PNeTncnnMoQ3",
  "key2": "5mguxwyu7y43MQHzS15zGu1wMDFwb9ev26EVEbre1x59u4JMkqfix84vfQXL4xUkPN9srQaj2kgV81y5WLgXGt9v",
  "key3": "3FSjdivATT5yhFUEyG14S8F9GgmDgHNBXtJRmUBvuFhExm7PJzKwTL39jBViYzCRKSzPhGNcu4oDTWTPwX1kePT7",
  "key4": "4FefyoiMbwX5RASDB6f6eEf3kvqZpHgYneCaPy8sSbEUYuCH65K1HE8QftAPNjEFpw8xV2A367hS6uWGwmqzdrZC",
  "key5": "66cebpqJisLZ4T4mujMXH3ndbyJUfE5YAFdT4nHqj4AzZo7d68gEKsYvdxuuzqxeJNQBosoXMefBYgbKvbPGdRHD",
  "key6": "2daCbtYaG43G1Lr48aBazuFRyae9NMDJdejdjuomvqVRLAmvHq62sz9vQVwqsXCcADsCtibue4p4HHgh6wPpkPfw",
  "key7": "2SX2V3v33SsdJR7BTcd3c65b5nXijrQUn5vzxqzn5qTCBMR7AGtGUcGPCSRyM9RHEqojHbK8HmHXFCmbs5FGATLH",
  "key8": "44aoEvvCEhT7pceBiKi2TKoUupTEctKLuM4QJ5csKi6aNH4qWCH518AccjpuqNFGkNeC26KbM2wPU2rbDyGEApQU",
  "key9": "4v2G3YLhYhgeiGoJNA4tbbrv32HvQXWY5zn6mKefH7FBaRatGMqQn6xr7HAfc5AFpPkDmo1HvM3aokyEmxpXmt2o",
  "key10": "65iTZHiSfp91HQmZqwxM3xjDXjGK1hNaE3Q31Cqiv2Suom9yRa4orPCjfDLCkfRTjiuDS4DprVkdBSLkUzSfT65S",
  "key11": "5nGfFjB2hnbmRPXFgmH8MNiRbhCBVLG8rBVq7o8kbso8TLbLqg8ZZQ6jWg1wR9kkPV6W7SnsvguziWmVFPdkPKBt",
  "key12": "3RWDFJvbpC8v4kP3FksrdLT6Na2waK8H3cGTbejjwAnJ8yGXX3ddUk6Uy5k9GX2nX9hB7nx5grZ9UG2MLmYySijq",
  "key13": "27aHJVoLuZVj499gvBw1VtoDijiGxjwPFdSoGBJo6cC95r9S1wsn9tBENdSD6QaiNg96bG9dKcT59LHGgWtEPhVM",
  "key14": "5YS3URgeZvFcXGdJsanrxNxPuq2k6vEqrJ3rThn99MNeNWKnAj5JKeEZyLKYFmNFNMYbjifLHghB3caGWooQwZXE",
  "key15": "3Lc52uLiS4Uqny57nMqQekRAiDo4RTtLciK9JNGf62CzYKTwmeCCUbySpwr6gThqHkARMQaeiHz6ZbqyitjaZjND",
  "key16": "2E2XQKK1ysNWYipf1QhzfoCVu42PLBZUqxTadk4udUpreJptcDrCvBFMBU8qWhbb7GqwthrcRvi5vsEygPTenawL",
  "key17": "2BCxY5wiHcmfJran97AVm5urAuGDEB3ksDxn4SGoL4nXmdGoM9mDk3cxsFymCVT8hLdzxhtbKEJ1jY8VperMVvZc",
  "key18": "qDFWopAX4fjKWVyxj2GD6iSntQ5FVQXxGVRrTvWQsTwi5XtrWjQhqbMYQuWrmuaRpCHobFhzW7MhuktzePAkesi",
  "key19": "5jgQSHrC2zpDvTHryY5xcPapgqGPPnP4YQgSrH3p6CNXXRzNCucyM4bLK85RuQ76WziTMcCrUjAGh8Cs1EuSZcqq",
  "key20": "2TuBmiJg7vznVK4JoE2N4w169yADW89QTLoCxL4FCR4YdCunRFk4i2326pXujDk2LgQp4d92JfjQwkB4rzSamXjD",
  "key21": "4o426BgVAVw7AVuRLNHqyewMVCsRA7JiJJWuXg4cT9jAG9mWrv45aqrzCartqRwoAnFPF44wUPEDqqMMa2MN9oPf",
  "key22": "3HpU734UFC5zkJUwCoisc2CNwMvLL4cfMd5tHnqzDnnoJZQbMYgyg2kXtQef5A9jHHVzoP1BsnpHx9JgibRNJCoR",
  "key23": "2bHPQutvPkwo7ftdprhvKTXjgy9HTTDYKc6LgStFvk3RoHUzQjyCqCZFXJ5cLyGAfviCw2EpwPkizJ6foBoMNFnF",
  "key24": "5yxZHhmrb4ASKUmEezPwHycp6LPgPpX9HN6RH4cfBQUFq5Z5eaD1Y2F5f9HF7MGuPQUvbiWoDfLNhJLfNGo3N7WL",
  "key25": "2DfwkdTku9QiyJFdDqRJ4gRSu28wB5uHt795adbVwzEdxnVQx2KMheSmf6XQK3drXHC5WoBG5Y8wZSQ7wSMM6dLD",
  "key26": "3MBd7QZNqBP677rYjNr8UK3zZvp6WmTP4wcT1YgZsyTGwbsS8u6Pia81WgrRR4FyKn66TrLhgDBQJ1mjoB6qneGz",
  "key27": "4sW8JWunZneWg5PeL9Ud5ma1FifFQCkkotsrZ9cn7uQew21y3cyHCdMQAFCZngLx5JySr2WR5DAixjcPLbJQxmfa",
  "key28": "5weUhdKPFzkBQPmUrGbqw9N5rBdLucYfMgbnY4yqsBFCnzB6DCpK2zZhVBvcVHWTKmsiiSbFQ2tPrRzrzNbToCcE",
  "key29": "2Y4X1AdUMy84tKf3WdjBnbscYftB8AfA55bx3rd6iQ2pE5BRzNShrLxiQVwxwTyftm7aoQV51oSg8Lb9YTzY44Xj",
  "key30": "46dRK4Apry5mSTe8qiSS3iSoCLd23a2niSG1cKbbqtP5cKsfry8JDC9dW57d1hs4TnsNXRdxx17BrrMmLJRKTnk7",
  "key31": "3K1YjsKFiY52suFgDmiiVEZ5RYUo6A7HnghpzYxEzjkG3mXLNEppTbVGGRktyDaDjLE3y26zchq6HWhTmyQJGzCG",
  "key32": "DRjRJiJBJWqG6WYjDD7nktxJFG7QvGtCLRSUnCMGEU5wogsuoL3HscUB2cPWW9vxgPEE51JCwVJMh7EDm3uJTnG"
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
