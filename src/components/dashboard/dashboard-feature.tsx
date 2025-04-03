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
    "PijQiNAKL864jnEQEc1iWrkM7GdxR8QhWPmFz4QX5ZVZqhJnujBChB4we2dAyqMgC6a3DCcYBFB41oohv7AbaHL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rje4N3jgnhCJDRf4o1ZPMbYWWViQFftHEgTmqyDjUncVy6NDSFs9NQGCEJAiAJcxjRZ1cMp9NctBTqVNfqvFCiH",
  "key1": "5infV4L8SjcACrLFMdC7wMtd7cogha21Aeho96ykeuoyRpgViQWtNw29vKJcgRZkEo1zjuYpKeqR8CkLrszENPp6",
  "key2": "eTp7BWBqYoGHrCSriueQCd8qNHuY4V2LCYnwUK7mw6LP32TkN3ZD7xjYhsCGXhiFzgVE9FU9qmfuDqF2pTehY9Q",
  "key3": "5v3K64ubM2DLg9m9bQhc6HBejwxZxKf57yFdQ1ZntsZLHNPadEAMrqsnqQzCUWCyH6zg5TFwa1LYdyUMkpdbRRsu",
  "key4": "62L93zkbtz2SSGkVFg5SvFyXC4ZgLHx4YCQqDvFA8r6btveCXAMYfrtTn8rmaeEUgR72fcJ6VdMSc1vSwpc87GjM",
  "key5": "5AMMdf5Ka3cNcXv3M72a57gCa1xjjiWgy4ngUjRvwSnritStXm3DeWmeU5d6SJ3TH9QJ99KY1HfBYL8rVfP5LJjX",
  "key6": "3KbBjhur6VGWzrGPHf95nxhdZsTVfFo7dJPVSFJ1uGEnencAJFbUjSZxuChvdetwRcopu3v5yWeGhYHuC6p6wBKP",
  "key7": "67BKZHAiQnmaN2uB94gPZQrGtcwYehpQYov418vCTQUabgQB4Z9MeFS4eDhtfXCQj2Dd4qts2Nj393rAR6cMnoFt",
  "key8": "2MFjRSFgaipvrvb9BBFosKyMPh6pkqpLL5vNoYMMX6sb6bJEw5PLWqSuY7VSLpLqyrxLrhxRduQo9wVHtQnJsnna",
  "key9": "3oAkw4tWrL1Bq25AmMbJMWEaZ98yi1oC5WsJMB1ij7mjkYt8aQBgmxNzMZPdYSCiXWcUT9V25S5bykBAcQe4W2hK",
  "key10": "v86d1LZXGRULMdbqZQ5x4XqJ122b4xaSc34hvTHjuUvohMWeWuZpDwsA9nTT3LTL7ZUKeSLm8QcyXVPurQcvEWB",
  "key11": "21Y1njpmsaed8BXyi8gKrhY3cGTb758UcqhTNe2dopBQj3imPkhq5bEzFxcpbp6KuLsocHciwqAa4FC3A5eSGAev",
  "key12": "5WuZDd1brsxEKRDDUExtxZEMBMDmbxPHoAZ3cqLnemYJYywY9sdE5SEMVoFHug3z4Si4uZwrcphpv6Nvr2TRjDZL",
  "key13": "5fvBDc8oABFzCEfRyt69bWUMwM3BnbDMQ9FqbgLR3iqmFB14AzsN4b2g8fMRDu6tdjYVeFmBefbJeQzd9msCYfW4",
  "key14": "AL1hfBManiSFMCWBteRvALWy6UrpFpHViegNj5GGH5pjKcyKY5gyyxKCjU1zvMsuKt8xqPUQYFaDDLZqd7SgNnq",
  "key15": "wbdVSCFRfafCWdeKydkFyyw1yijX6NUD8vfqUmLYZEe36X3A65N1KWf2vyxJAyCEqyRqrd6NQML6361JWcg3Mj9",
  "key16": "58akfTDwksp1HZpyqvxhYnvWw9W32cv7aJSoGkmYtLnGGiFyfYyvWvrzzXqtvj5q6FQc7MVDZYt6AvrBTq7ANQ6R",
  "key17": "3zT16bhhuLCExNRAdhU93tB8m2BLwhXdZDVJiqPDSvrwBkBgvbSMuEVmVdnbA19EXxvRNgCN9v4BGnHqnjDU8VLa",
  "key18": "25tJJGUfjjc3AydnJxSV4k61rDrq35YhjLfS1b1YyPLDBfkMo6ScB7D7j4AwvqFN81nnG1io58s2meWsVhtJvzvz",
  "key19": "4PprMHG9dp232tDFNYUHhwMGNk5LcKJzQi2TwzDj1LAHpQqPpAV7772HbtfpihdALc6Wq7GZLxCnPxC6r9QXovQ8",
  "key20": "56kgQgzYZmMob7g2ZP7iTwRJbCmiNS1uMzVXgPqDaizXLMMrP38KQZJ98qKTeFPwRxnH8td8YNMi6DE7Wd1cfD7L",
  "key21": "5bqdcGt5jdURM49KBpwTjKE3CaMUyeGrTVqjJW41X7J3gEyW4c4T7hcUZPKQfHfeUFUsGVfvYHMd7edCuXKbqdkf",
  "key22": "T1tbGwHUcsWPAxFehmgGkMSm2khksqJd15RYx6UEichwapVqYm4jhhyctkzjvuG3ia8PUbfw1beDro5LzLT27Na",
  "key23": "3Tm5ZNB6i99Vr5YCPxWPU4WxHj8xWikmtfUhQXuennioBYRMFMa4bbAZ9vKWhipvH91qjNm2h6qCgWSZAjNFKdYY",
  "key24": "4PSg4M2siFgvMEa28DLi62BRsfyjaRHr9v18sp8CuwGECczhJU5TppcugmBhahdd7HRSYg2QJ2Y8iFiYVVzhDouQ",
  "key25": "4NgiFizJxK1CdYdmJ8WxgwHpzKrM7Y5VKfZRAv3fWtSRZ2EZBXEQAxquHPzTaD7wbmavfhzffK3RgYYC5RQ97krN",
  "key26": "3C54iE2Q7rN21wdB6qjRT5uic2JtazQghXBXN9p56Lry7QRJzse9C3gEGLTYXakfKn9QGnJDkda5TMBpJYYdNjC3",
  "key27": "2bzEuToEH6WNmpi8aQm6ULswP3EUk7BcR9bKPnhxToCEwJM4xUAjotXCBmKKeMXzyCvvjbob2Mr4SAAVmZFDbR6z"
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
