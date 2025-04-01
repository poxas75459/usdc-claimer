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
    "3dBowkMYTKdbHk6fE452JLhmrKLZhCRtJ58NHZA8PfCDGqVLDpEsYHx2NJ2cpN2NDKfFTiTBa4CMV5wKvXdoEie1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4235eBSXggZpHWdapsNwg69qDCpTbnDe4kuF4dRny3fPzFBVPfNtC2K7C2gvuok24n9Crvn6x6L8iepBY9c5ixwF",
  "key1": "2f5shqxK9KpgvMWAbVhYQ8XUWcfbHStL3PFt2Mx8YrBwgbjYWNb5mabfqec59SrGHditoMyQKHQfAE1Xd3BMMwbk",
  "key2": "qmY6BLiWewSx2ebMrUAH19zTeJEtXiij8L3riyVkNAhat6YfzabWTWhnEtQYev8ziUxDjb32uNZD1BciT1rPRjH",
  "key3": "5UpHfFcnvFUYAYwLTRMo4EMyvN5q5CqBbq6XGDrNP6LJW9kmvGCQeqFMbNXfMTWkDEyCorC1koVq2SmZYLczVxa1",
  "key4": "qkBNb34a1mUYF9bVCZAf2NT5uQ1WHWQ7ZwwgqfiBqTsWL1sGteoKTn4QyyoqPZj16NvWeUo4akvbZbTYsKvYchZ",
  "key5": "gQHBj9fHM1HbSAEwsXnVJQfQb6J6jFTeueNDFGeX4iY65FxrV53d5a6pPjxfijf6S2cpcGNvH49Zd9sUvUofFe7",
  "key6": "tPfYNMyqCURy8VXGoLzz7q6FB4yi5zVthorVVRzVbRYmP1QC777uBhFsVCoE4KrbgDMqYbrMLUg2n2u1nARnbyB",
  "key7": "2yUNp6apSRxsfijDJD278KVpw7Vbj3RvMGymWMhybGXA9K9en93S398rdF8tLiKkCExTGP7rJ46VxCppvPs5Fcty",
  "key8": "293ByxPBvyEDvHBstvhQNcQ7TTZpTR99xnNPVi3241qdeAGmee6Hgec1dzK3eutYFdb9n6FgT3pE5y4Rvc5cN3h3",
  "key9": "4HbX68XiUmJ8jTbA6dTkAoUq5XYG5udj4cyoBmW8TTKUqYibzvKigmE49hn6i3btsSR3eL9MvEE25nbfpDC53apr",
  "key10": "5gke8xoMpUQWySwzkmhjna6n3jdhq7aQMXh58zUTwHM7F2BrSvB3U3PhYdY4a1fTRHfgqRoehw4m6ATCgG4vLKkG",
  "key11": "2gFnrVDhq6gTSAExxs1ofWiw8RXaoe7UpUzYKNE3BtLSgRvDwNkUD3M4bPBuKRUyHafMz7SLcsF2Yw3n2M87t4a3",
  "key12": "5qwFELbvVyghaD1PDXpyxp1oWWRCSgWiKf8UQwbGnGSiTdJSDcaQaDHzLRPns1LYyn39ZgpweBKdTTMNaTRWhQ2y",
  "key13": "2ybSKs1B5Pc6EysZTosto6WFPEWatc38Gn1BGicKxV7Rq3vx467KaWndRNomp1ir4roJaP6u4HbTvaa8qCCgBQMM",
  "key14": "3o5A3EjcCxBkPX8rmteriSV5AFFWMHdGBUkcrv6iSHDxdD5LNoRm1EL7fchznuVKSMTdReQevo1SFDL6fLBq8gYb",
  "key15": "2EW8Q5X9MTem5Zcb5Qif9d5b2UUfyWUtbXtfXC6Xto4r6Z9fFTS8wNJ4sBVX3ViQFJYagumNE1W9DRzc3hRwWso1",
  "key16": "3zYfYMoNAKHXUMSbTmo3Bp4jnGfheQjcZkSLHmforbU4Ge3DT2k4qiaToQS3nLowBTo3TN9EFS9DyRRTF1yDEJDA",
  "key17": "5oxurctaT35YYZM3EkNog8dcC43TUbV5YcXohq7eA2tKsBdGdALtmzPfUvq1heQtVbpaSeY5kaRqNUMeUUoZjrqk",
  "key18": "2a8Scmr22tm9F735tcVrgEnPRjEGCfC8nFY4zKsWicKgX7qKcTLbPxm5ELf1wXc2uXQcaVz65LmZZ8JSw7p9KENX",
  "key19": "5uayaAHu1yNvhegcLtHSqUFZmrBWkzBZzSiR4VBpTAjsw6ScqMfuf5g1pVsMXG7QoP5rHuDrbYXCK7KW19CCw2xF",
  "key20": "5EMrkdWxZNT184ZMppqjEJ4mnMehGkLPhkijzaxtxg5eDSZhjQ7tSVQFBTf7En6TKXSUNK6yRxWd5gi53Af4QcCH",
  "key21": "3HZpMzmCPPWFRuF2B5A85JcWzjvXxNRahPFfG53h4xMktD4E2Ghh8zHkmBffJ4y7XYqN2Fnz6WvBhLPskkEwpVnd",
  "key22": "36dmZu6rei2QeFSzDQbd5YqAvhQbCyrRhmcKUcCKNt6DposiTEB82TMRx36EawiEcyrEqexRdPbS7FbHeW42webn",
  "key23": "3SoqmWWNf5nP3Agm4rNpAdZwwSxMjZHfELTkbeMne1gK1MPMCHwtZmT2c69AZsgReXt95oiuZB88kKdi8bw6Y9su",
  "key24": "3oVkHTori3bKPCfaohRXwtgux1ZPqAPB3c8msqNqrH4ExZQPmoo6nS3mPm4sSu7GiGh9Gi3PhUMUPexBj3Qnj4mQ",
  "key25": "3z5YeycvBb7Vir6L9DeBLNdo5iLnJvohZTPaN3icnoH9JWsWugnqTxBWihV6LkmjtcjC5DRHHvaRxXJ3MKEo7AjZ",
  "key26": "3bZuJ8DcPv5VcVKcZUERWQuQpgsUpbFzhUYex8UxfjQztBUmeZ8uLMAszbFKVrnWvxF8QChVYxGyjPdbHvPYD86",
  "key27": "4LEWhV88DCK8rfgezbsqYQYKtcd7cB1Di7YX4qKrMNYnMZUrpLRkciEFhzRbW1fpZwMMJroS9Z3pBJa5P6p4fpuF",
  "key28": "28GGDyoWYr9mzZkTDXTs5juqHtNrmz7D7kM6thtuwQzJRg92sG8f1MgBkXdoGGGeSzBb9XkUcwiHsrMHZy7yigwK",
  "key29": "2Btp7rRCeBu9ugphLCvT2ge2rt6Awrfe4zrFT6vUoMNJqdSbZq9J4NRYCoGdvgoE1coAMyN1DpryJUCRNPt68rKZ",
  "key30": "2bHD8mWSL4LYYKxEeovy4bFv1kpqStbGZrKhTfFvGfDw3ns24w4k22pM8y8zcUrJu4Fp9Q7QH2XwhNVzqiVDn1hD",
  "key31": "5nNc91p92nAwQW3Tn2Xp1LkT2QBSKuzQMKN2ncB2k8Ey9tsiZvXGVxmgRRsGBy2CXzPCRgdKivu4KNn2zYsXWPrs",
  "key32": "4pmiqEG8q5dxEvMuJuxRNPF7e4UJcF1jiGMNG9Qx1E3aan7BbJ4p473XSUyuGuFFvbHXLQ8wgqWqFfzdpCThDScR",
  "key33": "2cme6Vc5cUYxzAYPQm2u4k4Z1VRsPYjPfWQfdfpKYxhQHEMamuADjx71HfngWfV3dzRMbF1t7zjFPrBEf3Za7oqn",
  "key34": "2jo2sDqCbwh67SXxywfyVdRVewXNvie3UJvtzGg3Fag3ExaviH48UQSHvD7yepcnK2b3QBqUtuFFjGtcZxzbwBhu",
  "key35": "49fDi3zd6HTEHKW4XW8ZZbdtnUa72CkJ6wJ6MMJNZBdBQVUSroi11JDdoP4cgBYhrKG8zbcQv4KGtA4T8ffhi3jF",
  "key36": "4ChHXCzUmCJ4vjNqfdeq8ABQR7DN1DykQJ7J892bZQALdUDCmyRXQHfDQUEG81PwhYrbTYpZ9bkhqjgtbcWiW9T",
  "key37": "3Kq2ojdDQGZ3jBqe6YmEEXmcjkBfTCaA9kP8NBcbZtrHEsABSWVLCmwVHrCzzRjyQoCfmEhgvKpaeyZZ4S13zCRT",
  "key38": "5iubhXnmpawCErHGE9BAXikJoRCZwaii1Yiv6KDgBPLyyvwFKwxwAmiWJYWWr9Z9qsYxTELCV2V4U8wRn5SL4AJ9",
  "key39": "2LP7tZQHrL9btoDzYkeHCFdj4yvc9gqNnSR3aQxULwTmuUZFb6MdpYH3m4hobsgdV1H8bJbQSegaiZ1yx1kKZWK6",
  "key40": "5ujigm4tdTEUYag23twzGk6YUzS7fXMmju9Co72rCMie34LArTtw8yDGTBvnQubCYfusbfQv7SNKbUU2K6AYwRgX",
  "key41": "FgCvN9pcAYo9gFaWPAvbDUZdwQpK3r5Le65GF7RcmNSrmLtzz6VJDaibWGjVXUT5NPiUJsQYMAjjR3YksAANnQX"
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
