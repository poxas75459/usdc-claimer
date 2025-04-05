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
    "3sEby3XcePrv85HWqRMF5gffjwjm9gKqE3xwKQsgVfFdkq88ttw75JdhBqwtKTRVNDacqwX9P81wqVLCoVhAkDMJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JbWsBkotEk3Ei31wGoay5g6hezX93to8DPLTjocAQEyxr4vBG3rqs2HyBCJhbrozwviKG32BARwmuiqosWsAth2",
  "key1": "W4tBbtf8GcBDAKqD9LXtBF2RRsxoMysApYTjan4TZqEzeGiwaXu9Ue2cDM57itg1jUFkDjDZ1Hr9Tf3SHnfkRng",
  "key2": "4xig3LMCiJ5RvLo3VuCJsPz3FgQdcXAf6h6gRfKGjFm7Esgzw8Dv2Mpm3hGVrZtUuvGxzq3ck7Pjj84nboRgyWcQ",
  "key3": "3FvhLvsBwjzPDy8D9bQtK5qY16wexjoJBAp2D3FaFe77RNjYZjN3WJCMYSDE7MYTChFQA8QmFRZXdeDveLQUwWQQ",
  "key4": "3mkdERnYapKcJkAZd3aKNb1DKcD239iSVuVEMVcZ6Z8BiiQZ2KV5G48g5AcSv51q7nmQSiEurMZ2wPL16Dc6W1Br",
  "key5": "2PiNAyBSP8skYXThhm5CtwjCWNGGUaMwz5RYx7VbY23k681EHzf3kce1MwBRKYWmSV1jzYE89Dq5cYXYohe1FH9h",
  "key6": "o6YtAqAjDgVGueJ625NK4Ci9d1b35JkWcjoBCUnKAiEdPwzheCQGUvzjqaEdcmqnP9M6cxa4tA35KbwRmRD2vd4",
  "key7": "4sNtwWdo26YaLcnGHZEmGFitgbZcTqPaYFCwNLqYNwx9btjpufiAHBvwXh8Ti7aMMWgAn9TqUA2MtXi39VdaBQ4N",
  "key8": "4cyofXfvW9n1n26xuuuok2476zSPQ85JZVpitfk64xJE533dJUtsfkuyRfF2SJzoWXtGR69MTL2557ciJTFPHn75",
  "key9": "jkGvfmrCrVrWMt3xhexoDbCBPWPLAds2W1XcZnezfDfCpDTSWzvkakRQur8S43NhzDWh2cjjvViWZDeY95U3kwX",
  "key10": "4PHDeHhyJ3eoRVrdhaVVXzDnopCY8D1pMpDV5Nh8SFEvrcjFicFkvndGE3UAvx3pWycbkYdFnzhbGsn4UwwqiRxw",
  "key11": "4i9dGp7w5uCeoycw7nwrCChqgr8MQqKyhJWNAPGcExaxH32p1zAGWATqUPY6Wnqth5kz9qJ1sK5tUgfe8yqbivi3",
  "key12": "kLkoLSoUuSSe7BeSATs1J8HeFWfhcabLd68vc8HEPTSSQw8rG4CQuyUDgKDStKakSaWUB7XvY8o6zcAG9Vu7KWq",
  "key13": "52hmi3E55msqd5KfFvhVjzZLHUJZUQPdfNKxzpf2shwzj1wYQkcbFNHor7srEdDXCiCLiF6eqemzLPPZQEiWFsvj",
  "key14": "45fXXegcVLtgXZUz7HkC73SGvHJT5J6duP3n5LBnRtCRMhXm9ragKnUyEFw8ushCrMW82n5nkdKJCYUbJ2UJsh9z",
  "key15": "3VtbgAVa8mFqU39131iyeWN5QaqmQKaRUNMYUv3yWQrffsTwsKx8sc9WUDbBJxRCaH8zZdt19oobRW4zW3rQprvN",
  "key16": "2qK9ZEAPTo9udwCqmNBaXWeWECBdKwvHZQiLQfZ1BMHNc9KnprwfX6c6DruWyu7b57yGHF14vWqgEvk34dp1hqp3",
  "key17": "3sJE47p9nT82XKf3UHifhKsesHkf7mNtDHhLi5A1fi3UNGdmkh5zUKGeB8RKxcJzKhh78EbQL6DTjofhWskShxdz",
  "key18": "66hcAe49SLb3hxJbSCcavKbEqLtjw8PHtPDvyH3rRwxpCFkvRAzmSpsgGBWJKpzsG29gVdEnCMbVizFJXYsyraUZ",
  "key19": "2GHSrLVA8RTmU4SGhAkEJzbung46CvnNgCqCYQUBuZBGVzttcRNdvXPKjU4DM7wgHzv8VF7Lbp5PE3ARNgzYm9Qu",
  "key20": "57ex6VNmzCJJVzvCLVdVno9DSMqwXkrPgTiFkbyNG1vyiym2oYyibiT1Nd3LeAXnMzuuAU3tWgLo1YXjMTLnboP7",
  "key21": "2HUZYgi3KE2TqjA7M72RKfWRGnGyb4ZrnrbKgBdkdG84jL7gB2r61Wf4AamT67sTk7eLfXnwwaF7bhuRUkbzkhxX",
  "key22": "4bpZDrdRpud5SkH3sEmZM5AJKYasXmZELzJZEP9t1GCB4qibvfwbTZymUzhhgPvxji1oPkPyRMRM8to2jg3Bsm9N",
  "key23": "2QAyMhiu5NP5UPK1YJb6v74g2HAYjJpP32EZLy7Y3PTDj976VhRHvbyaRESGXYWRht1gGNQWJGjbGuBTaGeXbYoe",
  "key24": "5sLAK1vfoewg9G2bAsT16vBVFZaox9qr56zZsftQmD1hVS27ngUjoejEXKbdbTVn51PEt8WKMUVoS4NpPEeUth3M",
  "key25": "B2nk4GxB7cs32tVn5v2D2fVbCMK4XG88RYLDu63y7mpsR2DZEQno8bz5XrBSTBSiNkLXugtCn5SujQBYajYv8tt",
  "key26": "3tF3fvPFrtkQfwdwzAAMsAeDXeH72XQh6PQzA7ffWW1UUkANyJSoQGLhk56g2Gt5EZaMJMiGiDBAWPkcYfb14h7w",
  "key27": "3FzCXdJLhc8dXcyU7DskXMZGvbNCenPUufmcHE62Ai2UDgKfHqCEnzn5tfZoTmngsWe4VRP8SbXvYwHmzZA6msAX",
  "key28": "5fGqnvvsbpUumLD2L4e1KNbMX4j9XapDVU3aRRQAHBoaDhtErrSiMFUy3LgTfLFFFDTD5ea5sgHgAKgptEfszk1N",
  "key29": "YHZh2evj5nJNyAEmdjJLj2rLwZZ1vJrFADMWm8M7hXDrXtm5MMFuWQoT9qpwMpDYC3k9BNAyv9c54q3HaNH7UNz",
  "key30": "51qKFsuDRtR1WbfEim8amochcbX6Bb3RQTLrkU6jQ5AKSxojBADYkF7PDmGMxZEgsDzDzexaKNfDXhoSAVidX92M",
  "key31": "3LF2TVzLyxWWkc3MCignNxoBrqktSKTCJFEg5fazvwbAefV4YMHCwbC3RyX6nXBm8WB5TCvD4FSfenkDYoGjZ8ZH",
  "key32": "3VUCDcCYwQZixXYaXLeYJpJr32DV85MQjebcD89kHnfHaLZYsLfHWVeE5GXnuvhFQSvBvWwD5hLmFFBV6hDSiqUZ",
  "key33": "5ZMctbzLqcgfGeiWGacU5Un35GCavePNQvr2DYT6whjaPEWieEfRa79CM3eySFqujtLCfPKdu5s6WwNsMY63VjL1",
  "key34": "4VMPokphduPr2HTvPJauWGgMpRne3uJA8bqMrDLgkjk2kD44cNcXSWxHHvwQYopP7PfpbuAxA3kbebKsLYRKSgm6",
  "key35": "29fW9E2R1SpGny5AUh9QET7GK52bj3roJd84KEcVGB95cGoiT2zKdt8Pd531hLeUnLG3g87DxJA5UF8tU37jUZzF",
  "key36": "5RrH8xrsTZm5Vr6UqEEvDBFmGLRMbSW8u9G8GPnPyACazcie7Y8nSaCpktWCxnFc9q4T5HYmeDNe6DUN3JxLhwrz",
  "key37": "bM8s9rQ7dDdjtFtG8TT87QJjAhbxkY2iqG8RrB7R4g56NavZQGq94aGRYkajsntQYCKLLv7GRaoN88zbSaCVhZc",
  "key38": "4ASJpKWmSxnPFJbNZwjM2yyHMEGntmSFgkc3w764FYSxjp8sk4b8EsjrMp3gY3FAEtFV8geiUaiUJL41cdk9gDf5",
  "key39": "2r7ARjX5tK4xpcVAXKvUrYPLhyYk1G1Yv7FAthuuQXFDVsKC4wyjjSH1WeQNeB246dsqSKmeZ9ys3BavSNjaT3Y7",
  "key40": "4BH3b6TCU6fJAtHUMn2aCcaGSuDBRVbtmnNooHNCkRnKU9Pj2gu8i7DUqaaBQ9W8GmcSqmfAfy7CD7yCgewoCrC3",
  "key41": "4isC6qDCkcafgsLyDm5cXSwQpvLzRJcryMf5edCVuWuvUwcgTkYP9W5NQNc8WCHjSoEW7fgrMTb5XPyYUZBGtqTM",
  "key42": "2cqgWiUW1MAUhGk6sZZnA1FBUrASZGXEDP3eStDd4gHM4dk6p8A6UCf6g7hpQkUgqfTWGjY483gu9CzN8DapSLcK",
  "key43": "54GLS6FYDHrWsXQYAREATBytejJbRwJtfBYjhD3tLKhSbjZJMsN96QefqVUEBfZEMUDSHQPX3GVEHtNytKke2jDY"
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
