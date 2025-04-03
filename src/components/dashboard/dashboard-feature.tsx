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
    "5ZY38TFRfRhv2fJq5h4XW7AMCgJtM8rn1odT8khNusdzeXLmHHtigiNJ9cn4464Cyvctso6LsQMNzTBc1WSmFNv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FAoKfBzr3Qn92yhpz7dHH9KwNJmfdvSX4j4tNdq9zmbq6T6cQNcAiQ3yuEYjW2VcCveP6Y8o8P8u6CLvYG5CQzZ",
  "key1": "2WTxV5jpt5LpiqAAXnVofMxv1Q2m8vS4wbnWNm5h6Sf6n1kDDLjRBqWZJm9ZwpzCU3SUQajeQD9NG16j3XVCBbgC",
  "key2": "2zyHvSbbFNHqsMQ7Qdx6ZStk87i2cFtT6R17uY4J5BFDctxE6tgLji3T67iupZctZ6newXeVm29GELj1L3zfe3yx",
  "key3": "4qHoGFtazowFgpVRGdb87CamNoDx366YAbYWCBD74Uoz9p2L4kf48UShPL6mj1kvjWDfp23EXKHFKR9KTPQFK1m",
  "key4": "3mXcHw2B6Ghuwwd6FLp1Qib2Gu6nsjaCJSTBf8ZzfwZn9BQLWS1oKWBT9Yt5DSQy6F7ZAEXQchN9tcqtpaeUmnBa",
  "key5": "JkgRhkefBRm4tYw8KW674BKjNZcDRRe3jtcxrh8zhdwbkCoGMothV6AJALbKmZTvZRPP1eN4kvGSAajzHZbsi1g",
  "key6": "2kfs3BuK6wANuQasXfFpxtkaTjEoBtD23W3HebcB6HTPgJ6wdddgKxs92xa7CoXdjDSfFECJBhBGvf9rsP9cK3jY",
  "key7": "5ePoeTRfJvAuNmh2sLbUNeVGhkJcP4CCcDVYrVAazLHSNGpVTt1qo9uVQmZ8PE9Zvqaa8UZ87qzoWcb5EuuTFNtn",
  "key8": "TqPSkFaMgJQti6ikqhRZz69ekvzjg576RaCrQKU3xccUnS71Ppg8VJXAiMbBzsazgV1iPgCMn8Nm9Kjk458HMVR",
  "key9": "YFKpQSopSiiHcbLbNQHQiLEsWtJmq2Ny5uKSdw8YGSUsJMpSzheEZ9kmzhfvrQgW4ayJUFC4Bbpm1RVff6D12DE",
  "key10": "4swa7fKpQ5kRbEKycWJYu6RtgnNMYFBDWUWUmVq7fHczFHyBfqf2u2oHoyCxS4UEHW9qJuKBLhQoX1XuKeGihfm6",
  "key11": "3Jt7H13TCMUTvzrRSsFLwQXQQPVMXm9FYpWAtA9SxE5Zh8KqNafnULsGgbXBVhaLdo9cmmS4cuUYk64jLBL9zeQj",
  "key12": "5sojBxXzHPfjZFo21w2iPpWhncvC3TKYSJbBAXpgsJ4DxWRoTZvTwi2cdDhHZ8wm85xaTTYvmgLVAvDu9zVroY1G",
  "key13": "9yKDg2PrDdEDHL65sPef7fqD7ZCDWhPnp4oT1zfcFH5Q7Wy4pZGA7mAZYo8BaU4GxH76AV4MbymTqfYuB5ckE2F",
  "key14": "3XC7D6SAKjyZ8Y6NgqbcoLDLMqT8atGT6WiiWc1FvLZDMa9My5XBYrDq5AqWnsThrQ1F4351CjnCS2Spk6V8hU8h",
  "key15": "58Nwcw3TwAkRHMTGMDCJp3XWazMsdsotmfF17BfbQgY2Usziae8hRXKJ3QCivip2KkhDqRHfwKNo4DA8t8znhNdM",
  "key16": "TZWZFheEjPZ2t6xbekmemo4H6QABG2Uwgm7eaAvBeCU7YnCuvKF26m6FH9mjL66SVFByGGHVnRL4R71KYLoNAAo",
  "key17": "4DURJWSJAAFi2QF3F6vBAQSMfJ6Qr18JAZeWTQYQJFo2h2eHFyawncQKuX3GJTorL3biP2frAzus8mFTc2v4eWqr",
  "key18": "5xsrxVRJkqaqiYHydNqadRo3ioJrP7yToCinA7Rf7FnkHodfiaGAeRL95zjEZLstE6R1grtsm4nGb9QzmH8qz5G1",
  "key19": "6459A5Y419Hu2xYJuWB4Md9n76BjiBii4wo8mmRY6D8DAVUcDkQXRBhQuWW3ymtPDjjbLEuv4wKWHjqC9jG5UvNM",
  "key20": "2CQgrLAUi1wJVV65Ecaphycgv7Gejz767B178NiMWACdTqBA1xKrBqK5UJU3dv8jAKsSjEWGw6dbnV7N3n1NfZo6",
  "key21": "4B4v1kbLoFozDVEFAM7r1Ap5ma2w8S8MXGngFLvaa5AVbo7JK2RfpwrPPfHSXre4wpae2uDqKRrcMMdU7rGQTdXB",
  "key22": "215YP1ZUFqnrYWJ9DeWNCVa95VWjg6Xt9WnCsrVaqhLsqyhnPWbznto6mDsjynCvtZ78rq6U6xgTbveQ2FLd2qtF",
  "key23": "3NwDteBZNLxNgHGMLBurpLRtXeUrk7CmPwdr3gKTtYkFbPdeQC5s55v62Uc8q31gvCDj1BPtmFyoF15RJH4GEHS6",
  "key24": "2qHnWe5K425qbEbSERFHpCyoagAhMzAniZu1RD2F5d1q24UK2pkxx7ajAe45JNPEt824YzxJvVAkLgGn9hmpdF7K",
  "key25": "3nyyGXDTn2oKkfqU5VzD9ZansdiUumgw7LgPk2DpXy3XEFQhFBZggyNbJFV4YKjL4Y7ptJYeh5c7J1T97BPVB9aE",
  "key26": "531WpMthmW7zLgAspCD6RpYBJwG4vrJNf255d2raCp7U6PSeGZSo4SMmcW9RS2NrcbPidi1NnHqYAY7TXHTKywjQ",
  "key27": "5jBib1gjvTMTo82tmKPMaLsVyzEqNT1yb9SvqdnDbhNU85gYdiTcev8h18f3iWgyKVAK72kUQYaX9XAtWERPukyG",
  "key28": "5dyTDjtJpZi3EaAXH5sMjAAMNkHZHkEDpWWznSZ91toQ3HCwgyak7hsikkKcM4BNM8jDU9J4wZprBM4iW3tjfHue"
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
