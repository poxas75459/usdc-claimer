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
    "HSS1gnoYdnVNVH5XpnkX8zSxaT8NejgmdcrpnMLTZ8z8STUFzAVQe1G2gBA9X3xJR8TbZbGkSNS6Amj8v8AtNuz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E7V1MNQ3a3QAUoCRyYgLdUSrGwSwRNGoiSUDATZRyzF9Mbv9K1JYkEJbRjCr82567WZjEvbHqhArvqG6owpcai1",
  "key1": "5okyWAhE6e8UD2iWdjoMeCsLYhnsTNta6jMj4RSq2cFqXMW4TvRRabxAynddzJcgihrFiTyb2k3Dyci2DpKBJUbe",
  "key2": "2Jfa1TvpHfUijn44ZJWiuRb6fHjN4FGynvTL9DZfrAnCs3ZkbzEtVYRX7VwQNWMn6sp995rPQjGer5SUU36AGDbS",
  "key3": "4GGFNfvA9GiRcdSZNdACX26pRykeMHghCuG84Cfzxewy5zvFjyBya22cJGnhKveEFechFLm4sKgJAVPNdFDAScny",
  "key4": "cX1fMnanz7N1EEamNUyss2K5aaYvKxQPwotty5AASBxhtdaPAsnf1Um4g3qepVochGsrsNRz48qMTxDw8qvtcQR",
  "key5": "66Q6WWHqwrtqq9uW5E3qAJfAjazhvmydybvhUcisiwhzpHUV37Y9x4MxwsfAEGmkE7CFaifKyRfNeKySFrrP91n7",
  "key6": "323KAFMJnMH5rQ7kwbeKRBhrPJRtG24cMNb8aDxmwzYw11hL4kWBmoSEbtLTPbwknzovo8u9b6DyRpti7vG8oD4W",
  "key7": "E5BwheAczMo4v91UGmCgPBM7CzCRKdFR6jbqRkgmFvQTvLUZbMkUdkF68knGhKiFG8RvZyYzwtMEZ9pQgy65At9",
  "key8": "4bCtdCegE4jzMBk1XyxQGeh2B8RkyTwiNBuJjayZFpvr4aXWoHrFVTsLMsErpyHnQVVtEbhzxPx9k5KLGQaMyYXn",
  "key9": "Geo8Kn52QTKfJoKimqhJkfbyEbDccCE5MdfreE97wfRq2gpYybLxusXZJZf4XFtwR9ZcuGzwGXmqyD9XRrvxceB",
  "key10": "3rfJWiRAZHcmqaT8uNvWw4hoU1cLKQFGyrVtXREu28i2NjZLQX683kAkqfwbWjCkDCho12WbMJp3R2nF8QChfSjW",
  "key11": "2ux4ucHjr5YoyGk5SLWzxU4YPxeZ7Eno25p3xk3AL9gA1EyVzpMEdTTStujbzdTxeTGe5iDsXPF8p9ZhpQR85gFW",
  "key12": "4tgzYMYScoYBQ9uFLwFVLTLMkMXJPFUZMn9gRXwjquxbDizHxCSHf6W5rgxAtC1KHSwq3Wz9BrF3Nkxrhd1hTrS2",
  "key13": "66yw9XfPQaWAyzmpZK9K5WaX5iG2GvcuHLKGJXu5dusCBbcHUCoKDbYu8YgpAXTd7FJFDc5uEtrY1sBsC6tqvxCh",
  "key14": "JkxmmUZQfkeDJgPu8YG9rKvTqmQvoVYMuMtwLvX3dhxGfsbsgZnuhpw1cvSfEia9zG9xKnBAtN6LzdL9FWUSeQz",
  "key15": "4J11FNDvajz6LhZ2aG7vPDCSLypGd6Krrg4fgeLLFhxQn4aBPBHS4RqazaLWA3xoq33FsgVUnsqEMTcmtLyssGBx",
  "key16": "3NvkHRUYN5WNDuyjpLevt3GkEnaJTZabwyQGjLcjyRbH7R7uyQ9DZCbK6eARzoWAUVDfK3DoNLPkSMd4FM6a6gSW",
  "key17": "x5p7oHRpWs3ehHXGnyp39uNz6s31koia7CN8ws1pg6QA8pjEwX662nmt46ps4GZMgyd4hh6wMCwxAW7XDYzmM3M",
  "key18": "4FvitU2dk8Rm5f9LGntc95zP913NG7YVJeF6HbgTokELf2hJ5aGamZsb244u6Zfkm9pMGmUPB4aEezYUXjJNRTEQ",
  "key19": "ZcbUWfBd3ZZxyxqXowtE8uvprvN4UfEbncLS73LzbG2VPPX6YZ3J1roLVN1iBb4BS4R1XFMGf8yvoL4tDLNkUmk",
  "key20": "2VfN8fSYsnpmvCiMJagh96HpFTtHanddM7ra4zQeLmW8abTCVEXQqGBV3WW7G6koRUfVKvgQXTYuYpr6yyoiCmBe",
  "key21": "SiHJVbq8y7NousXSKkCfvx2rvbuLNzepYAfjs2uBhf2VdyYzGfE4aEozaavuVMCJPUZpA1TkAc91zyXoW2PUY84",
  "key22": "3n9jPLFuupEY88WkCP3JnjVF2u2q8j9N5yiFNYVgrui5jUDUvcXc9v9cEYaHwMBqfK9CNjQWEJGXo334RX4kAdr1",
  "key23": "2Sv73aAR3phiZkfetJh2wKtQCWhvgX8n2C5PddQx77TB1ni8Gb3wA7bxnLzggPknHhJ6rUpnQ3NbexbL1UoWHffP",
  "key24": "bJTGAqpwaEUZPSw9MCDjfEbzCjsjeqpKNKczSBta2cMRtF3JXDHNV2knt3ro9MeLBBGktm3kAXh38wtw7vWTkke",
  "key25": "8h7AwJhvzHUcfgpPZ4Sx2J4FE5hQA1cfoogvG1VLYc9ny8qXYVrAETojLdwfdR9pqYHHqedJCVuBpLSGKvWK7w8",
  "key26": "X2gqMEMGpdQiGxQweipa63aQ4u6Nzc5WFtzrmjcQos6pqgf1ZtxoEWiotjvsaR5VxwRjzqpjw3haJCaQ9wY8ZtJ",
  "key27": "5bqo9ufbN4zQi53RQ9mhZRW1m6C5VjhhWgG6wwbVz2ptLmzmieQhNkTq3r5Cdrc8hvrwPbXbo9naUFnJcsDvmAJ4",
  "key28": "39JxijS2cM84ciYMSY9PqTQZJpMVgDmqe8Y8i6dJEeRRJHghx2u6xsqHJwPsQfgG1DnCoBgNAyZCAPbAdY79Q46Z",
  "key29": "Kp5SUzEFNswV9yfoWxjCiTExSoq29XvjZBC4bb8YES1R41D1etjXD6voGXn1EfAoeL5z1suBQCEyanTnrvDAFef",
  "key30": "4t35RZQ3ujUcN7XTEZeF33S6ddWSQHG9th8tRPfCBY7SUA48jCYi3Qmt7qfrfAbaf1g1sigmZGhzCWcH5YUjiRMe",
  "key31": "3RojzR2BZdTKp3Yze7GzNn2MoiHtK9JHsSc25ZtBNDko7Hep2RF3gsPH3RSdxTVDTzbq7duapjSYkKQhx2WeuqEZ",
  "key32": "S4yJHnPRRxjXR4kYvutfER7ALSsaN6Qhb1FYzYzMJp6pbVw9nkYeBWvcsTYo14bEycanc9bkZwcWZdasBVBM56R",
  "key33": "1GtGy6WHpLxvyWt644aUxCV4n6PE19kSRPEd1CNDCSVfNpXzFQy7K5nr7ixniN3xJvGoTd496yx8g1CNqoA99j4",
  "key34": "5m7PSdi4arpRUGr5BYmjZhn4Nq7eXU9xo6DXivAFZeSXSRJu64bGFrxLpi9hc9NdKMRdDvKwmK2XB2bWiYQotmBM",
  "key35": "55BKeaKXu4pkzRF9k5ZKLnCvDXtFiDmUDuRUkVXBhnZvwdxKhSABM1XxKeAsmRk4rEhQDH2n65X5gjENTvNxBcek",
  "key36": "bpnGh8KTTqBEyMArWsCp98tzjdHK79Yq9gHqmj3jfd6vMtoXMkSEV7BWJtGaQkKqAMgxN3zFqD6nYKGSJsnMi7X",
  "key37": "34VmET6noGLnqRAEasACEEwvHNuANHBKHwjmtTKrWGTAX5c52Z4uArpmm9F7fnUYLPLeCbNQZtUGL3ou4Gr48q45",
  "key38": "2L1S9KWVgPmA3bE6JRLWJUhbsFKycTjYGKm2ESQU1aSfoBH27r6paF1BYUqp9B882WmCUSvtizy8mVc6uK24CWZf",
  "key39": "5yCFAAczn8KPJvQxoZM23mv6FcdCZ7PW4L1M5DEqUvX8247T9rvtSvC7tQ36dAhjDhVqUGfasCq1H4AJtoNnMtB6",
  "key40": "FKMVxMn1hHL8Mx2s3act4aAJJN3evbLVuosmUcN61LajuhJTcFBipkMJ6vuDFMhEFdQGDD9HiBg7ti7zmx4RfXM",
  "key41": "PKP9NJ3XspbRNPQ2RzNAZn6C53rsvb9gq1YuzwuHVjdPPvEMg2bXeGNaxWmTBWodBkxCRaATZEF5aBWiQAgYsn2",
  "key42": "5Wa6NVRNVFEMRkzcnLnZ1ZCKcNxv7KUjSjAgYccRavDJmXnkoE4VeXyWdsF9VnMC7e2sKB6y3VoeGS3s7QH4cwyR",
  "key43": "443YdeDxpVmLqM7wU1tnva4HJe4QPyNVZc2dTpbCA7sUye8cAYC5FZA6nV4AxsjkGfpqaaR3TbViVfwFnDZQ6jhB",
  "key44": "2YQNcEwxae2KcwSQrM4jybV4uNEaS56n36VcftAsmPXQ6Rn63ot5qTnc9hVV7h3GqQzh3An3CKmCE9hmSeeX1sx",
  "key45": "4Ei96YP39d8LqjG5CizTQta5NSKct6W8GDiWd7b1cQYWkGTKG8btncA7tfGsxjbyCAUjnAEGXhPyvQCAkosEVZUN",
  "key46": "474VRVsSmM1c9ZVzbSvsHR3JPfx3xHDXumBPmh5tci9CbgZqFEQ7vXJTJigGWDTYj18T7wbbJ24gqmSNhfya9y4G",
  "key47": "5ZtoCtXdVvEfdP7owpDx4oW9G5B7P6iGvTcwNsC7dFfCyshpC3Ww21Uk8KMLQpozcPU5KhMaMbzRx7q5XTbhsYiY"
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
