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
    "4yFSLPMu2rBgZf6PpztLT6nCh1rqqcUwUKmdbzxHCWvq4ru3URR4ivw2fjwBqv37Uw5R99541LN7Now52SGHqS5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sf19wYNFf8PY57R51v4mcorngUrh5gEJYkTDYebzVJ1AiaDRYQvyAyxNQjDrG77fu9UqVD6UHdkFzivjRJR54yh",
  "key1": "3g543S3xFwTDG4Y9byQRvCWyKBD4vjQTnn2dMBc2VuG6QjC4AUSSYCpRtTJucJLCQhX1gtK2ycYCZDctTqCVqbKa",
  "key2": "4Qa4UKFk69CJmwpavLTP9k2DuVRbMa24sLPAjPhnrpDMFciffuZ97J8CRfGH71j9SMWptbcDuTAdMkeRgm9YxcbF",
  "key3": "37N3bs7vu5MULLb82VrbW5nBSiHxEcTpR7muuoHgZ8ctS5EQByR9Ub8H3HSZe8FPtPBobBSGuNL8w6PHtMZxE7TR",
  "key4": "9f3YXztwPjGbEqVjfnKgsVhKnCQLJ9obiYbHm4A7hKLanqeNnVoSnKwUG91x3i8ruHTTBBzmyzSqo1YMqACBszn",
  "key5": "rBzVTJK4TML3tcuPNnWXJXJR7pmorxFF48ZMvin62YS16m4K2KudUQxiWMupmf5GtctAHXDBns1HUWFYXW8K4CG",
  "key6": "5pRSuUfwwZfJVbrUMtprTJJ4wLzNgn47rp9vQiL4zrvyswqK2VGk3rXgxKWipMJUGjphsHVyJQNuifisc4GETwjJ",
  "key7": "2uYBEwm2M6V4AtNbHmMXLbTioEfHmzNtJTyjdZCy9G5ttW8yZoSkq4Z33vsJpEHJ1XRcArtBxs7Fh9paRjG68172",
  "key8": "2KxqER9dBHwh3NTRX6Pd7Y8BUwUTJxVR7uNjBD4SxJhBYW7KCEM7C7LBTuqB3vstvhaW9iVDMDCDa8yEwhwy3F3s",
  "key9": "4wNF2VShatoSvVCevwrStK7iNVSeEAYzeRmzHcoZvivcMBQxsVJmDSvW5PuaUbn1CQDJ1pdTQGW1rgNsNaMfptUM",
  "key10": "rmEso6jeRMZdzU8p7SB3c67P9ccvPVo4CJwHx1V84TMkkEnhqbvaiasxBVFTq6Gqtn8dGTfC4nf2oy9BNSnrzCY",
  "key11": "iv5em2euMAd5V4xayXU1vbZ8B3iXRSGNmYAi1gawLjoUHv2isS8wdKB9ZBLaZmsFq7BaB15UvYR7Dmv7oL1CLUQ",
  "key12": "pdQ59vWAU3t8TpK7upWywJhAR7WLogJUkFJq4STPxnhw7PiisLQFV8NNovyUfWCkk9nto7DSBSKGZFPWLCZJHgT",
  "key13": "4DmzoiTkvYRuafopxGoX8YH9mdxZFL2HKWqPmN2z4nK5tG4kQHu3LVQHHpAQMAvLLQQFaU6UQEQNWp8jY9f5k78o",
  "key14": "3MiBQEmPxJVyPHpjK9RNamWXxJKjjWSiKzs7xSaYgaHfw8U8QhnM3y2p5aMKXHC4nXEMLCCJcS3157Mak37S7uUs",
  "key15": "5tFtvmSuykWtXGex9ceq3SCvU6uCjm8oH3ubWneET2Giw7S46HqQSkkU8zRppkjS4uxGQNwUMqJyXzxkwuBbvqST",
  "key16": "2ZTf254t9mPNAC5tjynZ5aSSgeVq8nGJoQbmDo2KdamNtmYMZKj1kMSM8rJ9ic9efguGZamUqJqmmo2KKxpoAkL2",
  "key17": "5uxkYxCGNRBqTfra4j7yq5hFfUZ1a9tukXFD5N7oksRMtx3vMtBNV34RAvpk8eahVeQmrsRnHG6vz2EV1HU142u7",
  "key18": "2n696XEnUdkSFxQuboxYDDWGDJLN3FLAfaQA9n6YMdKJynoXAoQ1XbdnUKX3FC9rTUhJqfEpeR1fDMguQycoc8rE",
  "key19": "5wQcMMrr2MtXTMWg1rtkDUHMVdWfDzBJREE1eQ4qRs8nRymDVbYyYWJASyZFVrqE2Qjc48857kb1PGVF4d2L9kpc",
  "key20": "2z6MEHxVuV2mA9XGWFF1ijFbKVg3m7fEyb3yizbtDxbpwBn2rAWWUSo73MPqc2hgyRciW8a57ziaxcLNtA3S1Z5d",
  "key21": "5wwPh4hsoVrn45jhtK3A472jiKbHqGSsanr3jSv44uEJ8P9uDmAPMpty935XEKEvB1v4Xuv2sy398MvY3GS3bFn",
  "key22": "2QbECYoEKN8vzUoPRHfuh521eFJb2PLgimDYBTTw9tAGEJidr3KwMGPLTJ9XA8VXgDvmebBfNguz4ZBtMJCWvpxj",
  "key23": "5qpYCAkfAvKvp23oVLAqMLuu239YMqt75q95cQ6Vm9nGh3Dpw8hMxZCjnG8GnFBrJcBHLM7kimYKsuQipUF2E8zy",
  "key24": "4vF9NUPGTu4yyzyVxR8fyq151jdHiP3z8FDZ19gB8yhiSyizFj5zSTt9nqEeyB21pvJ9X7M3hcp6T2zmUeZuXR6B",
  "key25": "2wxdTEhLtRnkGopMgZvGLH1g2RrcPiekWdYveLT6vcjeihHfgNcYed2X6Ub9PnZWa7VSiwje4JErNKwq9wTdRWvQ",
  "key26": "wBUAGYygGiNWq4Ck5mrvUFzgHbs2spf4bb4qM9qV5ReRujWhjEqC5oJTv3VVdSRUpDyjhLufbyjfSjo9PRUjXET",
  "key27": "4uY3S4GiKqNGuveeUWvrWNzuBLZjMAu4ddm2H6jtRpgUaKvTxPABdYfXmmk6a17dLno281WhVB1qKBAw5DueW8E9",
  "key28": "3n3Cc4dP1BBk2wUe6LZfkFqBvT3NAwieD1FXeGh3GjUVkN94kfYra5byWAq6wGw6yWpBz5PybjSuCKKBKfsc42Bw",
  "key29": "2NajLnUeG3gUmHvyHXQJYYCB1s3whaM6TG7MvzSaxoEms49zkEY6DKCpqKQEgRJxeMuAuzWjWCmNemUvtFt7Srvh",
  "key30": "5Ybs8jy5VKWAhR9cRz69xJ6YGFpEpFojL2oVGJxzBmHRdJhJhC2VPSiTKb2J8B9WxjZnTVuzgNRwuNjnceHXxEBB",
  "key31": "2Qz36QZyFjj4jzUXYM63C2t9uAbUfx3hCJcwJypr9ZbMYY72a2QXz27RMXEn94Uyti8vABhddmwA2gmVK7HKHLkQ",
  "key32": "34GPNLYwKRKWbz2HNZCdxGKbq9q3LK1Be4PQpQz6U5tkjeiYCiPFArbNxc6ssAPjK3HUoqCpVEwxCD7bsh3ZXc6m",
  "key33": "212rk41iRS8JPXMTsFnWNw88wnGFXtr3TnmsNgq8mUcbNH2MoLjZPrnrNxNUSrvKNEX7VpPZdipqouKj2wuHAtCG",
  "key34": "26GLSPN4UVrXPEySXxPbg6JPdDRwfGJLbPpxhhm6aFux314SntnHBKwqyhjGR85LEbhH9YkRBZhe8FaAk71Q3rup",
  "key35": "TWPdtck6DMiNPYMLg5ZMbPE3Lu3MHnMNLPatfs8Q2vceNwj1fJRkFqsmMoJpCZ1skRBfR9E1Yh2DpLHDqfMsfar",
  "key36": "4hW2KNDM6uGiCYGziE63WSsUuX8SG4Urf1sXWg3TQdwnBrMYfZAVjb4TgmV3VZj316sDFs2uVF6fqnCTcxEkAhwB",
  "key37": "4kAJjrFdeTainYUwvRE6Zxa8n9RrivWzDznQBciAgo22JWgdkaERvfCmXffRzwZQrGrXZVMUAA87g4SFwLSh24AU",
  "key38": "5L1r6M66rqQFu6eqfkoNrH1zYt3WHZdPV36bsk6CyfqF2FTdfDmii4d8KqXd8G6zSRjGrryERUGzumATXAhGX7Az",
  "key39": "3rrWrGamCSvvdFm5U3uxw7gcseswuPXEB51j77hdhGvHDcit8JCXSNVMrBGAW21BVxdx3wiwjcDdsLpF7gMaBFSY",
  "key40": "5JyAchWmkmaQtHBMX4G6Kvj94Y8mQtKdP2cP1KT9w9Mtb9Pho6vKqtoeLucbNaiRXjD6gE1wFKFJfa6Suow25ggZ"
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
