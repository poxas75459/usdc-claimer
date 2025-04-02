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
    "4p8qVVUTofxLBbMz9vFZV9mRMN9zDvhNUts2LjDrZEHyRsdMNrbYh9AsDE4oRHuiZNrrxnCRJEtnXJXqD2So6yXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MUazihsTRoSTxVHhxUUMGpy9TpVDiEZi1rtgyPDnefv3hrEmH7HA7nEQDcmUe43TQiG7dgqNHUXAx4LKjnnQkkv",
  "key1": "29Nhn1EkizDrVCksyxK3MqGwhwaQPW4SbpkyFnEJUNk7n4HwMDioLi9fEGaLwjMpRaddYzNCYCchkZrmkgitjXYw",
  "key2": "4DGM5qzwrKR1L7Bj59Qtgo8omjukNJVeTR9Af9kY8F3WL9U3odjFdHUsBnGEsBpoRHLyGYpdiz2hV98XL8sWRAuU",
  "key3": "3yFro59FUPQsZSnDzimU1pf7SbYJgXpWGb7qEQ46gq5h2QnBLFc4bjVedQ89DWfuz5quCujfrGvPuw4x4EMv29fo",
  "key4": "24E9BJEjCCcT1927JQKVWKe9im57AgDdijC9omHjTwt983xESyu79SfXHUg7k9AF9exaPV5CED65qf5XQx8im4JA",
  "key5": "4x4H21va3BEiXwNS8UXc5Q1BkJsyQFfKfxtvJSwngwJpXJU5EFhL4z7nuZg8ZL11Rd6owUtz9ui9gGDtTT5EZVzs",
  "key6": "2uu9SVrMPZCA9P1evD1AJSyLQQrnUbymrHUFadbb7aNCMP9L4Y4yCsUjG1QAVXFU63s3X2iLNRHcndjJyXi5LHC3",
  "key7": "3qk6pK33s9DJYtdNP56FvkA8qQ83cktzbV2MY7Lzuo3V3jBQaWvHumVn3w7gYuFuKFh9vnSh3maNv22PFtSKSM3t",
  "key8": "uKqom6EKT3UiBzPhPRBfvWag4sHvvQ7EvL5YEX8ZgcZyFgBMrBtv6qNqhBjN85ww89orPvy44vuNJqavurw1PHg",
  "key9": "AyWdzwKF2AxmWEPyy5cB52gVhzJDuQz3rWLGKhm7ZSy786XWdhnmgqHByxfwjRjGjyWvGNTJ7GQZhRU6Kv1tBcT",
  "key10": "4KLHGmJhcY7tjTV4kJxfJd5CADNbQVSiU9wSpd4hoLUdRFsQeDZgF5ukAECAsXCQ84tWVe3yxnsCgzbVwTS4S137",
  "key11": "4CoHV369w9DZgzLcv2fAQNU4mVGDXbyGAthWHWpcV4fGahUyDEzSwsgFi1g8QqYyeLAMRKJrnRVXujYxf8WfyKc7",
  "key12": "DTfRD93Wo9ZhCKKJn1NrwFLATsBkxxPdY7t3RHdudcoypGPnJQfU5cc7pRokyyUNuMStRJKY9b8qBhjbVdNdPEq",
  "key13": "4Q3k2UfxSqAucT5euREejZAofd53avKcXJLhSuPrHJ1u95BSfg6JpFHcete7pRj8gBSFH1bS6qNTjpw3ASaRkgbu",
  "key14": "27yxh9jsiQi7gEmCrGQUKsPMgvEs2T6fJDdbRYERecQ2nuZ6k5bHzsbh6CXgGQERxTwNACp7Sz5fJnRdVX2Fbo1J",
  "key15": "5UGJRvgfu9riwXac73hrokbVDuJ35ui435HHsuwRC1iWBo6BTrXtfdoRV79n6Rw9scgCqrQU9Zop6WMAeU7X7w78",
  "key16": "3it19yQPrEUEsym6am39kZJmaQF9m3sxdiyW7qmtiBF2YvGzx4mRzDLy9mzbEJYbhHYFpYAYYcwNnyV3LAvvgpsS",
  "key17": "5JtMCCbdN14hRT8rFTehY5q3SWBp3pBWZpNRYEQuzkqcGU3BLHmNVThaKc6Q8iZc5xyuySTxNo2SoXrv9CHUNC47",
  "key18": "4QqsLArVTJf4JU1ebCT5q72P3FdM4psYP6xuMoAiK37jdgW3ThHL7yjhZCyhiDbWfJHm5F48T2716kvh5ZG2EuTW",
  "key19": "2hTdD4RU3eiqisQhL2xCBqdSdQM9Jmur8dvbjy34i5jgB6G1kqJjVTWRbv1ZnMagEirCg5ukec5ECtibFkmQGh3r",
  "key20": "35TQUK1WRfpytcE1vn8j2oRRD6en1Y1NYGbjAFhazq4bKk7jPKhmh7esa8NKwUWpe9ssBUNG1N6NaUJyYVUMuVhT",
  "key21": "jRNkyYcQ6VLJPr3spPdz9mwTSTnWHQpBo47E2Ekmo2dXZm5jSyeksiUT5Co3DT9uGaV7gpSa6XG8yk1yBbV5ZxE",
  "key22": "4DyMm7qYyNtWWC6zoraf71NwizYUsM88B8Un4ErSoKFqCqSRjMXSNnUqvVunBUcE6WDiwRybdPnyoGwHrr2CRpry",
  "key23": "5Gx7VuXhS6CSmgVF6qaKf5h1jQcVh6tpQanx4JLEAXpivAeW6m2TXpEaBjePycH9R7tS3fK8Kav6qNShX1gBwoH2",
  "key24": "4m9cwMfA4BuiabNnf4RBD2hUBQeohZdhEPjWpJjTP1D56YqzvkG6rtRZthNHvoKEa5QXZPpaF3PJo9SeBjPTKFha",
  "key25": "4bXRrCihoFPGFnM3LeWrwDL8AvtntEj1oowL2k8avGABJcu8FQP5kQ2HBiuKZJYBGLcTeqQMUMVUS8cn2PaL1zeF",
  "key26": "8PatpkMDKgHqM2RhjTxmqnGNw1eiuHzK5n8e9tenvXUDuECeE7tFRFF9Bf6E75exzGMtW3bFZyCzKePSJ9s1MxU",
  "key27": "55VEGXytLuFWEPBzd9Ddno9H7oCZxb5jvtfPQ9R4RAXUa4CC8A6kUmviUnoF14Qkpzy2RgF4BZH3iNyrJmPXNPP7",
  "key28": "46hh9mPqcxYPQoGsGamqcGLFLGFkZ2viQCsepGZ2EmxhdwSzrooSPzYUcxv5gfpdtDS5VaW3Df8FArfty4ydpyhv",
  "key29": "KjvEmQBhxfF99bwe1HwVnEQ2xAs5QxuU7Mc2eWywjDedfwnXuhWPx4aWCaTosAVFiVudTc8omw5WnoPjXNABbFs",
  "key30": "QPZdnornVfQjw7W3QzdJYTnbxjFSoP941wr4SdxCbKYCeu4APquhVHkgGwN6sGEjsvgkwfZwefT1xJqg6ztgHiC",
  "key31": "nWrYCA2kqw7iY6MUj6U7Jju4y4mSbGvWBkLbiXZn9E48bkL7ZEW8SWiEqoRg3977zVbJGHXT2g2sna3A5kbxSQs",
  "key32": "3gUKYxVUAbwYSAFxLGiiiMfPdqx9KcxTDGorZVJFVdimFcicB1TQvp6EdoP1uKi5Lnt3yMAgoSs4tn3oMp3zjhSh",
  "key33": "2T2jsxZHvSM2UpZp1uXPiHyfhBtFmkyA883jE1ucAB2WsNxMwt5reNjfou1RAZVobzRVmp4LpLsXFCqYbkMnSj3X",
  "key34": "4Zk2gjB7UJ1dTFi18qFFxbFkkQ3kXzcbrgG12vusjwKEpbc6eBcmJi4ody2xH5RMnLvooayTfWmz9E8Z6L8MuAaC",
  "key35": "59JZaAYFuRaNZTa3efxcQW3vzJVsMzgxEzpU4qWAnwfyhaPFDThufFdxiTBqTD1zstDpXURXrhYg6xhiGR42cLMT",
  "key36": "2NxegLtdRnPeCPKkk6JjLfLCPsSF4xxQkyYDXhfM7q5r2k7nDnSQukdLvBqREUr4gD9XvhayXRWJQmCZMWp8G6w7",
  "key37": "3q5HPDCNQnUUKtcc2yjaBCEBbqRugUN5NVgHzyayaNs3v7LdUwudtXMhqHfUuFwzhtnH4Fn97A5LwZKSbTPHjpWB",
  "key38": "1g9Xwbk3XG9jpHixvig3xGC44Rq475pEJxiaTyvWTt9MGHSuw55Zw8k3aeW81ovMPBuwWKAsgPfSUjMbTjo7Xok",
  "key39": "2WKWaXj4JPwzrPMqHXXWGJbQBzJSjdKZ4MpPQgz78SoyyH3MHPySBKWStSzbhQedsaDgTQ3VwqzV22C6tHuUuAXu",
  "key40": "5Q74Y9P1PBTNEpYGDCm9YNGucZsvCEwnPGW7DHhqSdnh7K9JTFi7SAnJY2MYMBY4Wg2CnXLqw25263GZMDv92MqY",
  "key41": "22ZmsWcvYLuokTfjr5tNYbatU49uus1ZhM4gmSBJx4zWVEaDmJRtC98i6WKxszY3gKfGXVUmounBzBTL5mSe63pg",
  "key42": "3GGyrkWBFLq3FDTJ1LW9dJjVaVZL7xUHWaMeyP5ZaeHhBTYkyCRnHpUGAm3nVKLLZ47dg8AXzMne9ph4ozpdCYqm",
  "key43": "5PzV9oJkxZUtMmFaykSUedtvAMcvEKfKk2GZqKzLV9pEbdkLb52njaBPrYFmXQXuAjgeNgQSKXxNCozwu9xzp1XG",
  "key44": "5XcJX3DUNBAJ26BxqEXJjRiesUW9utjERymu6srVygL3eYbmoaRXDKD86Y4s6Jv1aSTcPf1GGVpAzXSM3Q7Lr4EF",
  "key45": "LkyhahWeYQ3q19Z7UDbnCec35MGuZUDk7n6mbqqLaWYh4yV5Ldn9dEp2eeu7H1rtQsGJL7W1GN8TNqfHjjbs7Xd",
  "key46": "4gapTFqE4itwJVGj5MyvxuBqeMDAursb8nsMnSV2JTCrjNVf9aA8sRewp9Mpt5uuBrQJn6QbEcj1Ls9Pf3aR9rXc"
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
