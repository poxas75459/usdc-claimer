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
    "o3Bd1V5A54KY9ST3vFat7SWxWH1Ts2NUgDaZ2YKQYZ814vjcMSj61XfkcQZYmG7hQXSQ4mAh76fDWZnUR3hyGmc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nqEQ8j34ZypivxMt5YoZWfuSFb3WAYoTT6UTfe6a9YmQDyBFMAN6YjNPh8DN9BhfsJgMSQrX24PsPUbDVeu42Gw",
  "key1": "ec8GaHs4UsKPw7sY6VusSfBWudiUdiXX3zqmBmW6ZfXZQ1UavoJWV1PwxHkSy8UrhDYdvVyKXoDTB3mNtuK5QrR",
  "key2": "5Znomjy4e5XD5HXPcNXaKv6UbVfYZUzTKU2hhyQK6zQ5segAcm2gvcDYg6wSqKkbYSESvjHCfd75BJfRMQUaUjFU",
  "key3": "2QahBFm8kqfrM6VERxyBRrViqZernqkWaHzFNeNoBZJeQijC3CVFYvzc7c2WFeZmWbTKQC2uBnvBwuHGBX6DcVfB",
  "key4": "4VSxh65y4bfBDwxHTJiKvgLHHihvBCWdLgNLyFc3ehRBV79VXQmMM7qAWWgycGxwL9RZxAEoNtr71HfebeiP3afk",
  "key5": "5n5fs4o1AB4EL4pA7gzp7WU6UbJh4uBtpCKH3ikmReP1dSzB28y55DWZZD1cjs3KNtDq6GpmPp3jGPCfNr8pvesi",
  "key6": "3RHRpKsv31Hwx6HLrGk2LNZR3K5pY395JihmyfKcw9ndvcUQqGSeSrVSfNaPbBU4NodnrJvBaTUSiL5GGr416JTY",
  "key7": "5QLBHhT5HhFBZWgCVgojnyRwjaZiFi1TMYWWNg6tdmgzm3cbg82sGQDGZ7bqz4CqSXR3RniShcjmTy8CP5fhxd2T",
  "key8": "2V2MGGtjsvs526S7Jr625GvJSxppW2hwnZZtPKeqoGUA6caYwUYLVTNuxDgm93V5cyEBqdmiPmwbg14vaoAgcNN5",
  "key9": "2VGdL6gifRWPi1Vsn8FSaKqMhTL5yvD1DicRTscgS6vNQLaEkKDU42pSJqAPAhvdhUj7wJ8yUZnJFVzCsoUoipWY",
  "key10": "2xpi8dFwVriUCxuP8cZHgXy7kKcDXGRbZDBjBvRyks5rLr21UqoJrVgGWRyqMWr6efEoqETELJAKDMXMDvchpAZ3",
  "key11": "2zFVz83zWbFPqKLER9BwdrYWGMxcum5TzTKE1q8uHBUd5KCem7EppnzYLkRL9EgzcaWunBva4LYrS6v28P9dcVdF",
  "key12": "5id9v1o5YZtRS8cfufFtNKmmwvWWCa1zjLknQMTNRxg45AKFz5W8FUtZKrEe4pR2axRk3dNYEtWNPfLRZAbA7PLx",
  "key13": "2LQrW37ggAuisq7DdyPtYbMYFyEeAHmtmp5UfcN27DnPB3FJwTWXppVRNeYH8t82KuVUTjpNCN5HymH2Mkk5WNx3",
  "key14": "3V5gLLPxGXNSV8VKDsrt5oChttQFf5XfYrwVRkpaiN24mrCcuxAfWp1YonkwrwpmCrVpwziwJE5W2bWjRFk79vgv",
  "key15": "5LhV6HdX77jbuyn1tCGUVxDsvfEQNTZatBo2R5S2M35f7EttTo8FSvrhCjTuQZgEaB69PrYBzGgX4KTJuaXxvPgQ",
  "key16": "67Qn29gdV7jvsxV2J1cA8xUpcQVyWuqt7feTntLzaNTfaXPWRtXoyxiwLuRynckCT3QDfo5EGraAe3LxPwegZXfk",
  "key17": "HHmyYL6gzsv54gusLK78hGSpMF8L9nhhDGY9ZnBVLWt2x6CZrYhuEAajgKBRdtm2szbFb2MUNMh4nJQ6ge3PRai",
  "key18": "Ja3Y9naM3funm7Uezr12kaUhUWBXyByrCNSquuYERaUtskDwUn78Rs99S4NTFBYz2NgYhM315qtT4GfbzjCJ3g1",
  "key19": "26q1hDYYCYJBjXLsXdMCvnt6LpDv2KuVmesezeVabjDPvGoKkW5vTdibhPXubaaWUcASiPY6DXD2k65aRcJoMeTr",
  "key20": "C9bgg5MDGufpWcNcRbo84444EYTe6VUTQ77JqVUkGGEMN7TXbyMP4ye5rs7KFXQBN66AB5sSo2ugGuSfZV3FhL9",
  "key21": "5ztxUemoZVdYgxoXbMqYoUn9tyGJf39ofjZjn4nHt7iHZnxuxYo9NUvquBB4wceK4ZhMdCKV37UDoYbiKjih6ZJA",
  "key22": "5Srep6eJFeXFk5e5jvTKFawEGG28mY3zfsiWFsTcRDnYgTKUgxgyB8GMhAwj6bzo1VAVbBn53sk3Vn9o79uvJcA",
  "key23": "5q9LBJUbBtMWbHpcw5uWP7mvUE6wNsfJLKriP7CV8r7gqpQB4Cvi6E6XpvkD4JqTd983QJs3y8hFwMoAGmGihgSY",
  "key24": "39FfzF8c3EEc2X2qHGVbUGq9tJXetEh6dxUJexz2VBRfcH5kFZykxkDJ6kCuKaBvNLx9uqW5CUEZsK6UbrRx96uu",
  "key25": "4bo9WifWPUqLVvnPALpNBqdXbWWKjmcwoCejhKwcdLDoXQEX7w3YmvNuK1TaqPW9XnmYB6KVVanjLbdY1UbLdM3y",
  "key26": "51h55AgCRzsqLNvqJpXzaN1wY7fG74dJqopb3mh3Z5QmGCgzo3xv47gKApb1fFR96dmCSY9RQnJm4ArmTHcktMnG",
  "key27": "4en5WTAsdbBeVWurNY4mYQx4zeqKTJyQkH1ibfXCBQjoUhkeAChvQ66qFmrMoEh2UXpaCAwi7mT5vtynWrecR5Nm",
  "key28": "5qdS4C7vK7iqAion3U1Tpx9XneA7x2oyv9HExcfs6yJ9q7KTdueXBdLRe5zP7oFUvF8zBPjtoRrVCBnGJTDuYGqu",
  "key29": "5gXNDppYNr7v9V6a64Qt3oq3wsVpj4u5hkfyReVxxEAyoLkqdHhwVngmMpTk1zGLX88MQxSXChR3gRHubbEzkShH",
  "key30": "xgTJiwaVPLdC9fqMmtebVU74gdErsqzxGqTokVc8HnkzYqXeciRE4kxstZydBzpW3ggU5PQzuhMYa6jmRmgyqXR",
  "key31": "hcfKwVVnHFcjxzWpVAZ8Edt3egAZgXDf7MRfZLrMj1T7rdgJKhAWjvC1w1gB2jiqJfqbqnHVZNRs5oAyq32zqGf",
  "key32": "44dfR3yVAjMnXoKmQmry8CAVsv7svUr4iTyhCcKdb63mFBPJo9QWZctWXi186j3FNmEseHzT8xFbwJJXmcvePPDW",
  "key33": "5JzY8Ex1S9Puc6uc4VDML1adMUc2FJwLDPHVphx7p53hdToGRQkQLjisZTZH3PUdN1MtqeB15ceaHWbwKPSusoi3",
  "key34": "2GBDhVLciqZQoJW5tiDwouuU1UHkrbZiwZcWxi2tZFrD5ir8q9QDWzk3rEqESsaudHeKpFrSWKdrfWYGE8ByNhrX",
  "key35": "55VJTMpShyrWnmL6kvf9CxvFwm7LrC99WT59WnY5wV9a6UXLiofcNVAqyqD2BrcEapLP375oidunHrQKtbbrRH4i",
  "key36": "2jHDwU6RgBu4QuH8z2LXNFZ1DgaXe4KYBbB8riUJ2pFQ6XUGhW8VzTX44TyhVRtsB3Nuagbkchgy2c33FusWCsQ7",
  "key37": "2go6hNtvFbke5w1YZkYX9TT9SFXp3pEhgjgMuB2cZWUx3m9MzmWJfnEsV3WJKmQyiCkDRZdKbA8RbozvaHPqfTPB",
  "key38": "4yaGNyigSMN2MutM5rSa8Jawp3SCzkCmD1L5BEd3vxfp3GuFzD7qWSBWxjbZtcgtYWgUpxbZFmWBVow4WXVQ1R7o",
  "key39": "3dN79vpcRmQ4KV6BcvHSaGzbuYDQjAVieWnusEU1kmRxjHZbUX3ZHktVNgdPiJbrQS1dLzMW6tGvYyRGbbnrafQu",
  "key40": "2gfMYo8cK3na53MtSiop3qUE4hYiuLPrCdockfSQ1qH4f2jyvb4qTwHE3ZpiwuNKQ5bumd2zLsbw7JNhSnxAgsJW",
  "key41": "46rBJy2LYh5BMBLayEDvujeXmsBdwvifsWRp8uhC8BZ6TmE228ztCVK1eBG8d1KUtNpabYYN5EPmiPU9gzK8uECh",
  "key42": "3eMcq9n93GH1MvohT1CFqLMvhbpx4sPpB2DGVHHaoqfgvtRE5LD46JHYCv7MhwWCJVjR9neSRHXvyu2t5rCB2Y2g",
  "key43": "3KL78gPy8EBrG8q5MRDxjgQrnAWydDvx8KUiRhawvpVdtk8vgijLbWsBEWxuGSKqJezeSsKtui3hjPpoSEozxHQt"
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
