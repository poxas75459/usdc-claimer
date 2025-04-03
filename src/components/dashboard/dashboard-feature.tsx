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
    "5sPGvGhVa1NHQdU3sFF5LYe373rM2v9HQAptnNU7YLuZf7UpvPjn8zuotPRH4C5tehqjsRe1iouZUkBHLnVLbMj5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SECPhFNWYiGdvV1pEQLTAkhq1d24ZzLkcQZXBF1SciB4yrCce58o4adxhqKQTeJ8Dj818ZxrtoNgQCPQ4hGG2rc",
  "key1": "4VBYS9otsLDGZTMc26bW7vxahTChJ1znBgy92hAd4yDkPJxAsoMa6uXf6bS2fzVpdcajRJCyLC43vXB4AsDc3jWN",
  "key2": "AkGr397xBznzZE26CYALvURzTB6c32kkE1iey1DigeHzXsSJzscnaphHEZeeh5Y834Z2QZB8rVRpyfWpkcAAr4h",
  "key3": "caQuJbN3Y7gveFUBxrujJSidi1R5KjVtBUFaLnH526TZ8g5rYFVsCqZrQfBNDba8Hdirzrpcwgm7L9jM7FN1gSV",
  "key4": "2pDfWz3Aaxva4XnVJSTHZQAbnqgpfXM2K7QduP3RhyJm5fbHujm4hSG5z9ymQD77SfP7W4QYwfHJmmbBdf3AssEQ",
  "key5": "qbrTtS3pXnNS9EHQtGciWPe6syxtoebzAWesCef7F26hTMzxZpK3opyKV5SW42oy4ELNDGpLUbRYZ1mkvzTSf2d",
  "key6": "5X3gu9ZbNFEvwdeJrppR6dEpnRR2f3BDF1akaDR86seM86auTFgNAvQHaKu2CewtLc2UGr7krYU7VAnB5kvBpeV6",
  "key7": "2XseJifpQZi4L4JRasGtVgjchJS6B7syETFhLUTKUz4qpvzVHsGVkhmohJQJyzTRrT1drieNkwcGtbgZxzKR1342",
  "key8": "3GX2bwDioyhL4vJtAkmShAtN3Ewv53KAEaNjv5yUXpQSUgoUEz7a1dwC9Ezc2z8xtmLzfds3Qare22jEZfcM9xpF",
  "key9": "xqgW9A6jjckj4QGr57bUD9U2DokXKs18935R6Nm6FkTbiCfs4ZeCx3ZKQETKXVr1fzNqo2geturemRkFG498r5S",
  "key10": "4zJn5NQFcJT74q4CE5zztB9kWtAUpGWfXP57kP6zf85qyAqXNPiEQHktnxSSnP3dfrqPpSgog95HDBKaWJ3kd8BK",
  "key11": "2g6BRKAKZDFAXqwT2AF71bB8X9HwWZ2CMgNtAF1noybzbx5sZsp7ohqQnsEXYFtGVoZiXhHs8uS9mMByxfX3nnyc",
  "key12": "2NKKkHYcy3kc3wAfryAqbSLqbbMcapV4opsiiz3XC1VHQofL3XnoNUccP7MjFsfrJ4QF63G57WGVfkNewDr1qFeV",
  "key13": "25E1jWvaND9NKgR9PQJxbEYSxPWFNXQqvZzUjzWcQ67RDT2Bd6jZpJQvsA79uPJB66nqnSXbKKJ7f9LCoXycW4Tc",
  "key14": "59Ra9VirkytLx5XSs2go6hZT23mUnqqsfMwWj86ivPmgZgymxAZTT67zuCDMgV2RRXWKD985tr7B51WJubJcuNu5",
  "key15": "244QW5gWB3C173yUkXRJRJ7PG6Dnx8piBM7mrprZjNVc8j7JDPryaZkEo1yyXpE1wsMz8Nq7osM6Buz92z4JGvNz",
  "key16": "5ZkkLKYdnrNMyKQuZA7T6zi9ZaC6hSNLk9Njg3F3aDEUGXW4ceQea1Zradu5fkVLYY5wopXkeKjQz35uxCs1YhDQ",
  "key17": "3jXtJdThnwBgehWcsHFhJa72Uzix76TfLHtcsvLqfbi5ns3xdBczr6P6ie8zy8agvaytx4ZAG5vTNTb63fzP8hbu",
  "key18": "2tKFmFF2YhBBaaYUNfXBsFqYfjFuaW2tWja9tk85hxRkdigkg3wWzG6R3iBwF5LkaTGMGWApczhF3wjdxYbM4tap",
  "key19": "2jT5fnThGgd6oPaJaVBEmxtNiom7G7amD7Us4TjzBukniUsCvY8ooCzDmpYSNsumjuR3DoKyPa8ktGtXFpezFMhE",
  "key20": "qZEioEUVXXeCGuLFE6eU22kEsGBVRBgT8pNXPxyhtWT3UtdLmXYkPCYQsLNRB7CLFAB39nBB6BHMHHXCZk1ceKo",
  "key21": "64uK9gWzHZxxmr5V88cZHZ7SQ4o6Td8uF2siqMLZaboq6urMiraVc9ZzbW27GkEKCDm47HnEyQJSdsnGBHeb4FsY",
  "key22": "YchtH2hx6R1NUmYcbvpTW8J8xfpCe8mPy7J8wZxxD3aQVUzm9v8Arpx6VGcadwrqs7K1aZvtWCtPbCJuJYexcDz",
  "key23": "3qqYh2CopLvEqwcyy8HpWviagE9Nrbn6w1YB52WcwRFBPwZUwhrHEtAcCWDAbJuzYcTWFhNKuBN1rYuo1cQm6fLW",
  "key24": "5sGSrt5yBU5EVfibo6D4Bie4vVM2RtYXRYPbw9nfjY3waBHr9iDWn3E2pB6XKmzLgr4gTvxzMZaAqc9ntqg1U9Nk",
  "key25": "4z7qCSyEZzTLmiEWE2xi5oYb1YXeisJytBfejwtaFC57rveWpetknuqoNDJnqxzEiaxhU4XxkPYDY8XwnXKkLC5j",
  "key26": "5qUC6nQwpLkS8syU5eD8FpTF5QaHa63jpeUF7t8hCyBUYqSZevPkUAvCmoURVqqCVEvoKGMveFWrFWmXSpg88ZTq",
  "key27": "3dgXE8bCRkEczZjVj52DgphDjBS9EyaSKNyQ3tWM1kchtEji7okUqZsmRUhU6mPJrQT1DgN1zXMXANeCZ7A4i8z1",
  "key28": "qzmfDjz1dshri7wJNS1DkPShEyTJU6aGCa6NNBn5cmjxF99SQ9mnjSfRb2XwHhsfBBp8guY3KBc1D2WpTsrrRLs",
  "key29": "HSkjMrdHxEegDT4ex2qCZoMxmndkXy28wS3S6ouZRLRhTYapEkGjGfU7BNBaEhyHJwsry4PLD2RngSC1QqhVWzG",
  "key30": "2CUR9MuR1uuadSng3XRbrpikv2fTCm5Vp4dH3GraRCJcPPjVTZ8HoQvBB38b32fz8fXYZhoQu7mEx9g6heSZWqyi",
  "key31": "x9A3fT1RfgGKDuuonVSmBMqmGmTU5Ps2CDhp1qo8xrUB5uP7LgXZD4jZwKhs64Ro1Xu3yqf8UBdY1rfzDtbm9qu",
  "key32": "4e15QMEtxJHk5yEWAozGw5wk5pQN1dC4FnHXqTfPkNE64C4hiXcJZ6crJCt9LAdk9DDqaKSg4iTr7YffbYw7p1eB",
  "key33": "3ChS4za44oFdiRtghvRkYiQ5c537QvuGPGtKBB58dPnyh236UPq1jr8RCc1ZHB1imYrw3f7nXEYuonf3HXv6KUkc",
  "key34": "Ub3b5xmteKg4Egqv1quZzPqi3Zh6CGBbLHFcFwWNZjX1dEBqqTvEaYsssF8ymLWx1gUbdmPdBhJw9YoWJpFZrya",
  "key35": "4JCczx85LyzQ8bn39ATX6o6MoeM5xa3SwNn3BEkULwDXMbszB6A3vXud2xDkTF999JDvBujUp52ZQZiRvG8kjpk6",
  "key36": "jdbzMM7Gd1WMJVjNPRycZbb7EVa32jPHZhQVuevmTDvyb52hq8LsQcQYdrCrUSiigkuEcJWgnvuhTmeSKDHtepA",
  "key37": "43HiPvsz24PcxfuPBX242cqvv3kBwPP1Qm9a34ErXqthSSKhKYuzgbxhr16pZ9fuCZVhFxMyVNsUn8H3HRqtsZAc",
  "key38": "24AsU7B7kL16Bs4oRrJgHBrCkw6hNjzvaxS26etkGSxKvtNNKTCZMp1jZ5d1AvgFpTMYJ2AQGnENdgEq7vd49FYq",
  "key39": "2dH3kguivNWeFf8u19PeSuJdzaL3EqLNe9MHwraZ7ua8UhjurhPjxjT6VqUkuGUyZ3GRL6V6X8YRJtRBqJrtB865",
  "key40": "4tXN26seuKLQ5PP8hCDA6JceT12ZfRZZH5zrv91bp5TSA1feNUx9dW7nQWs4cz1BX26qfsHHWrwE2ckTQNM25oCQ",
  "key41": "5nG4d79RSfE8P9fjYvqTVjQi4DKV5xq5D8mwHYzGGN42ijkqhX6GGbC1US9qCoyYZPc4M9nur7gF1iNxYeDeZbD2",
  "key42": "25AGSvdwg9umQvfz3c9Udz58XePcRbMzUqajb5kUuZhdmftR9bsEnQZ1zQKMjKE7v8jvXfxxhYiGCDDsxuF82bEh"
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
