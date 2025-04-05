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
    "3Az4jwbXWkPa8Tiywb3zZREez8maAayqB9QaQudiANvjY29fm546BAcAmmCsfiXzTWY4LDEfwTurWVSidmk4SUjY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HoGnVx8wojpwzYgKUr9KmYdSSR3namXbLhArXn8j9f9GLo3C2B1qBGVgxCJtkf2JbVxLUtsbZdF5vcaGMUZfrwp",
  "key1": "24aFULrrdmEwvpuLySNJ65kNVEDKh23a6HTrC6hrqKBwHBUrRx3WWFbKw864GLeL7tvdwMssksn56GgCzivn1fJU",
  "key2": "PrDNyZw4S8tfEeG8XrNiFMxv53CFywgnep4xLbHw9ZHzXXZnCgWgQfhhB16P7TfWaqW6gAP3zehyFcLUAqjEW4z",
  "key3": "j27TTFmVbGq7zpC2ejTN6GJsygrq4XJGWLYuGByGKxsm6j2eiw5CapDT6ouRuaRTYcZmGaAqpWwtWexr1mGVipR",
  "key4": "5kpSPqSeaFPnHa9JMjdvtLZ4CFSJ85s4ugGAoP9Vyknoi8D8fG5gKqV2CfnWoFTsURjmMBoEMGFnb969oeT4yPvS",
  "key5": "SXuXgCaaLxqJRCnG7DCXFocXnhvyEYzGagXsbrotrQMpSjkwUtwiiJBeqHv99wZVpct7Tt9GMas4ZJL5B2RSJzy",
  "key6": "TD7RMcoqUp72FJUfLvPGm7xXFbqfH3nV9EtsdPwy5XBqEEbQi1AB3zgXfBWjDLUeNFSTpXDjyRGUifJYC4PAfW8",
  "key7": "aAW8qrJESYGLrVAmDnu3nrA3auEcDTGZLBCEzRKq2KfsPst1qWV8CdqLH9c6DJSBG5BavMABjL9thmzk1rfypuS",
  "key8": "4mXah8cBJ4L4ve2j1Si5a2Zg9EstH6tM7EDiUAH6yEjiAgFByqyVidZw1ABXHeToQgVD4eXjzRGGEkvJadrTHgzQ",
  "key9": "66n6HnFxBheHPbXC1Dyzo2HWGqSXBi1V4rV2EtUYwWeNUBaBjdGrkXVKwotHHzXfgot9oB5CbEGspWHdKTPfvhUW",
  "key10": "5dYopBojFjkiSJdyqrAp59Q93AocgFSVwDcpNoeLzttc9SEf62xZET21ibJGh9Mh8JEgEDRRVTFZA5E3qk7CYG5P",
  "key11": "fpg2PLAudsZNwVGa4ZyQCKQ92JS3K94xf5h2fyFNDVKB9HDywWLjH3N3YYLtFSb6U5Zq2vyJsNymAM2Jbw6GpBv",
  "key12": "4LNFDeRqTw6vrwNMHFi6p8EVVwiC1dyjueA9zMfKQhAZLvisSgX5sZ1RxLfBmyj7LevJ6gnXpCSQzfLMHaHbidTj",
  "key13": "3ntCzWsEgJZNpFtk5SKQZracKTjnKZz8DgYgH7vNUvbML3yNyYXqdBn5J7fLs7ekHRF5UCQRZQFGWBWdcPavwDpp",
  "key14": "4zjDTQWynynqmiV69tp7R2ntEqNRYpKRYL5vaPELmcziYbiV2M7SjNNAcvMTEKTG5RLv8YwJY2LgvWADkTZbcXR2",
  "key15": "4Ky9zy59Xg2dzH6kvAwBUkBT9UuXiGNgXW3Naf7WnGfBtwV6WN5MAgqpo6wjrrpFCK2H1HfB7iaiNzdy6YLJYjfa",
  "key16": "3B3eR4UiVvkGUfSbc44Q5fjzk9pPbCjkddYXWohAWynuPeYrNGBKq6Sex7ZAzA1T9isa43Mvdgpr9ztZ2UBoUi7J",
  "key17": "2f496N5fzCmnJ4E4CMef7P4XZRQ4kgz8HwqUdezFWfXW6F2dVFp8wdmMV2teGaNJHt9bTk36yRtxZ9uQjf3g2iRk",
  "key18": "3hXvi5WTsi3vHjQddxy6pJT1h3VGUZsJ8sVFxtFDsiaMTinHE18cYn4pTyJqDWeFDC64wYH9y12cNMk5PRMGDqDi",
  "key19": "5R9xrW9sYxvKMk79BCx8cCixn5AvyuW71Kr1oJWZntdjzZXo5NpfvQCc3chFHVcSnhBHiwnq3ASj9onRDxStniJA",
  "key20": "48sNwHtSm42YJoe5gGEnn3ne3wfKe4LfnhvdDxJaUnAjRQveGY9cUK4ocZek3aoJRCdks5dKskpo5yctXCiYYrdG",
  "key21": "FkYWrgq3pjVVSDidCwrL9oiAJ1kqRMA7b2NjTTQv2ZrDyQhVsGhygV3BTyJpSaaAuomkLRps7GAYeFWrCicAxTh",
  "key22": "ng1xGXce1n8pdBXF3Ed1KRXcoWiAPDZ3fnxy5fu1tWaCi373ckqJ4qnDNwgNbvgsqSg6X61DxXFJa47oA416wzT",
  "key23": "5edNP37y7RDU8HF8vvNUKXZgV6RNYbiLcjQ1KkFshd2zfs5p7zueeAyWC8vRui8iFJYs53z1B7YtujNDvkeeXKSf",
  "key24": "2YMpH7hE7aiCYNMtZTrU8fLNoekt4MYykX8VMcjwGUnkuHS4BY3RxUL5dd3PyGKMyJ87aHMiVdBuGAK4tEUZYX8r",
  "key25": "8qghQkeJXnhKzuMtZ457QuJWd5atK9W1V3dA7KSyJaveh9ZZAFsUe7qtj3RpSAq9UCaDsCLuM6njT9Xhkd55iqZ",
  "key26": "67D7oS4gjup194k44iHrdrP7jpqhidH2vWiAQgcp4VMjkvqkicdGXozp56SeoGi4yS76XyDn8BfyBBEmtQE2T9kr",
  "key27": "5yQvuQcn7Dc1mRvWzaVRTeHTxuSzPAFXW5vAmBnFLNUQpuqtEan7j4bRemiW5FTtjUeS8c2XTo5HWVydv7fxk6hu",
  "key28": "2Mm6wwZGRzWqPfMSPgkbkVoeoxnWoxygp3WrtbTwdhEwJMZAutGdPHgNSpBm1GsSuysPSvFa2era4XB9H7a5NXRG",
  "key29": "3DsjgA9W4omphbdEgpVF9LrWNAHcBD6JmS8Pzww2DgN1SrfAPjBbaUwJoVQsVMP3Z8qg3Kutg26vRwRB7Mrvjypb",
  "key30": "2wbYEHKNBwukftsdDK2qMZoG3Pn4tLmsKkwQEXajWsXvbnrEQqDg6YgiKzdZMoLkGcqXms5894RLTrqTLXm4Psm3",
  "key31": "3yoGsosmLvQAHZmr4Jjt66Kzi8Y9SLQHep7fga6GdSY6bfz81VknT6XXjRUFSCRFSmGGxVEXNq1yZ19EEZbnzHw9",
  "key32": "4PoVNsn2hDcQxf4V4qL4xcwzHhVTZGrqNrpPdqYucvBBH4YqLG2bFzZKDRZcKiu4Th6QasFmAnhFyhb4kQUMkALA",
  "key33": "2Mzz9KVFvSmAQo3Bb6DX3XE5p7Bxo7dKRgZcyMFZDf447mVsiBPuc7jRmE96mFD6Jy8db8xPoPvfPBwzEdk6nbWi"
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
