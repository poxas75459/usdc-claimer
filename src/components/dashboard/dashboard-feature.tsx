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
    "3BmyMKD25YDLDgH3t1hkRNPBkzaboZi6tjWBS4P5qZREVVjgZNuMUAANoJPxGGTJfnGpj42AGBLJb1G7XhFCutLC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aFtZe2m7CDtS1yqR7Mh2hgXg6h6yRymurragLy9VFyfQY8QNtBEQuQXzvuUvHkTDKnCdRWSquUXtQ6vDnd4zoBt",
  "key1": "2oU2BeQ1NdpWPEBbLpjdrk3RZwsi6ffJ2PsQ5pARTsQHHbi4ggD5tB7jr2pR83d3bSGysFuysZT2a1GX95WK8VtS",
  "key2": "5frJaTY6BqvCVtnwvDEWF6G1SzxvAt7ctLdwpvnbTYF4eUyzDg1cJ6DiSttS6916hrRyCUDUAR9pp8Bmzm6DGnTB",
  "key3": "McRmvF4JmTD7GXUia5toT27MAwNNviJGtWihdBtVrqEZFgn4UDiXNk3Y4UNLhBWRbEVR9oLJWkWy7Vps8BB6y69",
  "key4": "54N1ToqX9i93X4BaGqgpKsEcZnMkTd7xGGmAeZisMaStrugxuZD2kcgNs776AHvyStXC3m9PK4w2NWUitEErHcDq",
  "key5": "2b11etug8hwqf6RcuJYNai9inVeKNMbDvyNkcz6VSDYnposBv1SJ38AmPueDEJQXYj62ezc6H2wZkQTDe5hGik6J",
  "key6": "5Yj1YnmqAx9LG9eLvKirBNeJVZogxskv3Yuv1Vu3aGBT5VwaCwNevdd7ix5uFYbvESCXVrjnmHqxPxWeo15eXZF4",
  "key7": "2UunevMxw9c3RFbs3m46mdLrVQXVieNqQJwb2EMuragHE2fXp5tvTS6QWWFYgjLjJs9Ywc4McSTDG2vhhepeysn1",
  "key8": "3cxhqjtWVoZo3NXfRjqfKT6eMr36kVBPoKT9RNnT6VKYdQPr2NvVbVWk9nVXmySHFZuQLftJbkte45Z3ZERcbKKV",
  "key9": "3RoffWrrgQZDcSGkWp6ydi82Kdg1aQM7LPCHuxqBprTZZQg9qDGRP3gy8FAubrUdcPE32wtM8H4L1JYPVyKRSQDC",
  "key10": "3s9HWHmhSeLsaJ39yJEmbhfw6kfGWbdWKxjQShrS6YvFm3oFkZcqJwjzzHyfaWAawdnmDDvGrUS5KYfQS6rFC7ht",
  "key11": "3dfpeTvyzFMBj6cupVMarnyx3pc1vQb2noLRhz8aH5umQEkVMfqcCa4n76a8BQwRu486fXTMVrTbZzS8H1WPFS9N",
  "key12": "4fuKYzAhouhS2X6ZB8MSsnvQfUxZ9dHBHLTeEru1CLjFuodX564ZDhwNVe86McLpGtq6v6A6okNLfDaqu3FcCzV2",
  "key13": "3tbZUg4pjPn67AXvqRKCeq74doYAnTEX5JxEgR2A3Z6tRUD9g4ppQc4pkz7TPaQThQJPyPgpLPz7ardDHNdj6mTR",
  "key14": "49TD4aXiVknQo8yYChVB59w9uTpYK4NnjRKPYsNidmQw6xjxmhsySvaL49feHERxwZGXhLJpqkNnrE7xkkX6YDAg",
  "key15": "62q1gzARcoUMhtZ7qLmtcXXih5UypWLcV6jak2BHDDUSmZfcxKV4DioCb72Mm3fQSYtm6vw8fLQi95myQ3e3obMc",
  "key16": "3yhv5fs8ewtHJ1GLFzffvur9sgDebs3jrpiJErarvA2Dx6Ew6W4LrTtrJCEctPHF1CWBH2PuQSuJaYUb35d28oXR",
  "key17": "5EdPG59iZdGf55vfqG6LhWiWeYukpCPS9oj9fjGJZ7NiRgBS2A6HUY1454Bhn8pequFgCQxNJPrejYJ1JtQXTY9p",
  "key18": "3Xme2mXGoFg1B4J3c32SBs3iC1mG7syCyNW6yP8tao5XX7HN3NkwBLUcSW79SYZMzPcP7H6ZR7qAja3LyYGA5MDX",
  "key19": "5dytz8gsrHapasxCGyfm1brT4aXxkFYwAPo7cpuKfGMFDwrKazyEopfYUy452q8kc6ZicFdvgjsbcU9chF79A1bD",
  "key20": "4bNWPh2HEyR6DscC9a1y9wAb9S347RBXRT8EzzrdN1z5d8nym9LeejWTjhx9cSoowQJYnPCXiosBhrL4XCWkfQJq",
  "key21": "3VX8384PKG7bSerMs7k3LqUVTnf3J7wiNFL5k4VVnTNa9zWKmntNa1XNjYjqhHmLb45igCUQrwJ66cTMGJVtUDTp",
  "key22": "2w4ucPtRiNdJvpboG38EAUcidQAzF9u7KXoW1UZgUFyWiYHxSSc4WddNJ6qPEGvuEyS8o7dAeWL6z2CAP9ZXRK8W",
  "key23": "3U5TZgx9fdEduDkppbKMT2bPEAYj8bVntmvNr1sgBHzSj8ExMuRXfycweDsPo7tHdTkcSNXLSV8sESzjx9qRZqFM",
  "key24": "26dzkbJj9c2QbUg56TixdJzpr2bA5JChf7b4CvQYWpkokzZPRs1DJopA7WjpTdmbLfDVbqeqit6bP95GrxDMKBNs",
  "key25": "4C3KcNbZNbFDAfHB5EUNsQNqtUobK7RKsLTxPHtdPfVDASdJM7tLoSxUBPXNuhKwEn7rgXEDwZsFhyJsu4HK9qbb",
  "key26": "4MX8T8cP4x1eLGT5M6g8iiL17dz8pge3zVV9U15rW5hLzLg1S9wmg8PZjooNSm4H2x5wb6PhPAkHJ44VugLgrPAC",
  "key27": "4WGZRBnzXLCtQBJvGr3Dv5wiQQ1S5fqwhR7dGUWMYhKnPsAYPcFdMzBQzddKTEPiY7AVznhtftubixcdgN3GJHpP",
  "key28": "op7YubBFiRSTorgUxoHY34zbc4vfYgwzx9X4CQ4ycxZDZKKNr3Ecrq3AfF1MHpM5ARd5qtPozCBers64PXYC3zJ",
  "key29": "4mEmSR61pMEmmnVAgjznTjHTgE5PnPnZet9jdBMv14GDmWphNzrvtVGHtsNFA7FiKW4D4PCahyvfmRJmnahAsVjr",
  "key30": "3vvxZXvErtPQA2Pgsj4jbLDZ7EZdY3JuiV6J1QWcuq24mPBD48rQK517j86jrHU5EE8SvAkyAjpgJ7XP2poF8ivX",
  "key31": "5C61jt6GNTRkPsSNGUqvi5oeLgTkG5aHvcWPmFVkM8v6eaeFEBpF3AuMBxfcctwcRXNJrtb6A5wEmm3pWJGKsZwe",
  "key32": "va6brTjkAsotSHhArYeqYQNJioFgqpAHgsRAdGS6psYtdByRLHgj7A7K82gzuE96cKYxG3mBqxfuSS7Eajve5at",
  "key33": "4447eA4dP2myupcpcjkqsHx5qiRCTT65kmFg8tbCbEry4NBZGaQpSQwNaT4fxSXSYsr7bCnZV68CM4YsMKaRHa9a",
  "key34": "2oBwYAJ9ohxe2bKbdVerwqwuWu9aYQaD2ZeKUHi1WkqXTr5EzDTvKpEjgJz2XS2JJ3x2FK8KiMhFoWYTy7SbT4rY",
  "key35": "36MBV2WFoFhroLToB6TYQNu6qiVwvHoDdMZRcdskgYcdcu3ZD3m7yNBpKeVeRvM8TAVG7Rz8r4ymVxNUTp1edq7C",
  "key36": "5jp6RXZQ8hYMVhotQS4HLYfztCVCZmwQmQN1czx2id1638sj5v8gc7jZqdN5NhtUnA2r1hKgJSkb2TNNejxBn5B1",
  "key37": "67jpRr3vPpek9ERXSZLayLt2D2JvPSVEWsjP9YCTkE85yjTDjehTB8RH2eF2j8mHHruqaSbZT1VBscAvYyDEQ8hW"
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
