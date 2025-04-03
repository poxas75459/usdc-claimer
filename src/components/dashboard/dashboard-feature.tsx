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
    "5DCdPq7ZzYyEdcjgaiiQozWzgpx2hdQ2ireKqFd47bPRrLHtTJ2hKoY85B2xyxRMe3GT9E5EiGwi43gVqRwM8UNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wLvbruCqCK9GfVxAeSkKz1c6JX1W5cd4ivEvnAxDsbt7gzHazVEtivrr63u86ACQi63AA4RD8hy12qkQbxWbbJS",
  "key1": "4RCkxzDbCUZA1wBTedv6kizdpKX8TYTGKEgdDWCvwhaBnXZSQsgeS1EnVbtWfnTJRsYjdQVMwbjsMwmDzqBU65HR",
  "key2": "2duuLESfUGBKS8rTsqqccivzzcrP6gmkMNWuD2RzjNyANk3xAJskHm1jcaFoxMuBxUapS3S3HeauUTzzWntxLg7",
  "key3": "4hoqnsaYtaQ3cXkX9soKbb8b2XvA7NmoFKK1fD87xJVp9EAjKnLpmxF7VEftUh92rTTJHXZeN2hMMbN1gSYJkZgo",
  "key4": "3QPWXycigK3yb4XDBiM5BFYYM6bqWYX7acuLKQ5jVaFji6tWJFzXkiuNSFs7HV3NQRyCs84TUxzJutz7PjqKmKpa",
  "key5": "5Vq23Gd1nXsh9gn5RmTdrABhsq9CZgtr3BLPV9f3RsQbh2sfcs9sxHmeb1nPs1UR36wYSfrKiswKmXPEpHy4QeWY",
  "key6": "3j9pgVkSNQSRuaterAi2kUqbXEcELJ16Jtvi8Gty8HMptvC4f8Z5VGFmbCD3YjFv5ghtj2fPa9avTy83HctaZAVT",
  "key7": "3r89LZrPwsh8XPgTSUeg8o551W3nHjSojMN7tj19ugXjdDAvEFsWDTWrDYZ17yDEVtTgFhX3ztDZD2appUE75nuY",
  "key8": "4G5ebmSjZ5E4ruRBRM3kkp6kdoHASW6SmpXRS9N5cZqj5U1sXRxgru6hj2ATNrh42cRrqa7yVBynptXAndGDxojK",
  "key9": "5Bky5fnFbdUe9kKLyGCwpEoyvydvkjSCXs4erviB9jRG6zcsWJ1cu1yryaecCdTV5prwsr99ymuV2mgcQALz1pg5",
  "key10": "2f4piHeVQEELsMmpFta1nfFpXkTEmrGG5WdGDFf14caD6HxvhrDjeTniXKUdeCZbKDXF38rDFBs3TCFJu3mPc8tq",
  "key11": "34pWESApAoij7fV1tnuQB2bLsMdBLgcjoNJgbDqkDyJCkV762dduJpA6EyViTDpqeJ2ZUudTd7DSoVc3aj2wX2z6",
  "key12": "2YLGauyqpYHiTy87HaDNDQrfjJK8CchzxnPHEKj9ED93iH4AtEA6xXCXgFzFF6aRDJGkdTeg54fKgSdy7gg94j3s",
  "key13": "3uXMGcxGKaMQWztZHnzve442wowQHT5B8arnWGQv3QwmvadA9vwoaRMNftrB2yKEdDydkPzKUgiRyfnNoTnttxaF",
  "key14": "3YqWZeZdSpZVHnaqWvQAWia745g6TxKKzPQUrLMsHc7ZDt1svgtaXQErjYKySHri6nXBKgA9puLWYRrCQwN6uRGy",
  "key15": "4J34QJkCBqqGFYrXDHeQaLWhS9KC7dKPf7VMnsUQ6wAhVYR6V9PN15x31jhtTT4CQjJkpwigVteTPV5ipZfH1nxY",
  "key16": "3PRZSmaBysvWXNSKiJbndFgfd3cSQXjLsCtwVRFsNAT68hpg7voCTCJeazKp8LKd5yq2gxQuAf9v9ezK9rE4wXRH",
  "key17": "a3zfXrv88iMayG5thGFwJduPwxcRzUCycXdQH4rwyJSQCENL7GHEdJ4tpXyn1CjwKER7fzfKnw2rCK1uuipH3gg",
  "key18": "2tpvix3cS4SomxcBKTiTA2thtkfiPWpu6bCCW19r5o7R7KsQKsW24RtNXkG9RTZDaX4dvzmjsNfBV2Shis9ZccRx",
  "key19": "58VidZ9DTmhx5VHLsffSYmEniuqryMoqdn7yHqA8PyXg92p91R9duzJULg2w6GWzC5h5hSrsJRqRfKXWB2iGPjff",
  "key20": "2zUGYqr7B2V5apdJSpnDXy3Ht9tM1hUJRhnVKfkLZQopxK6nFNFRWdcVoan3kYrJBgkzfyYcmNxWUy2K7pai2WZt",
  "key21": "N1GfPX49ssf6RuPMiUrSasLymzXSeYjbcT1oy6ViuQy14bXyaishg5wS8RBT9uueEh2duYsXjb44ozLN6NXp23V",
  "key22": "5Pphqxe39kjSnaJSEwB4icp3Fem9ZvguhC8axF6Wc8MezpqEfMdsR4GfKz76CHqTAjrnMuDLbKTodQndQXT3DVja",
  "key23": "5G33wRuzZg6R9unkvLZ1XSqRvcZYVLvhULCiPFmybPCpw3KC3XqjMkfPjv5RMuPaKD2aJUs9ZNCS2etPekUtXdsL",
  "key24": "37ScVT5BGEsGcxSt9Fh5JvMYsRPUjFzG9WafbDS4cZ2TDmA8dN47Z7TqmjDWjUewoafE8CNJtzWcZ7jvEBksV5w2",
  "key25": "5jrakakUmN5mCmhHkrgygR3VEh8SSWz7tyvTFPDSQbuJxLZqEM6WgicL57JvFjazRPKaRVbgvZhM1xmbpmb5iEdW",
  "key26": "4cBvYwLuUioPHge19qpaYr4KXkdnh5F3b9a13b8h6dWmLaUCqdsYn5MFWPaL9NA88heGhZV1sYRY4orMrB3rjF3d",
  "key27": "2FNZJqvAgeYuPwy1i1aj4b7mcTzqcQhJeAM2TA3QNCBibknBjYsssvTsoyFLiowU5K2Udz2k6d9YeKbCzHzHKpQg",
  "key28": "3YF7zbKCpMs8n1WNzy4xakZJQXSGZKVRudNA4cnZ4aD7oZvyenTwCzp6UaP95qcDt5ZhR8jiF96fY6oRGnNVcPFt",
  "key29": "caFpo7MWcB4cJ4PNXdDqYjHnhFKzD2XNvXosXxmFXc6HCh9s9jdAjaPVZUq9zFC9XgPipxpDgfzYhk4jm6CWVmT",
  "key30": "3NGPeWE6Z7xa7VRKBBr48XzAJuUrTmz7dmQohnKjgcSiU81bkr8Qbs65FopK6xjwXQLki3vyoEC3BWyfwYpeXEc"
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
