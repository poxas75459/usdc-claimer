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
    "pseY8i1d2EZLpDX5WQVWkDDBtJoJXR4Nn3K7RDESDRs27psthLFdU7EHiNX1ionqoPWt8ca4b2tgYwHMEyb37sa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R16zdVecr4jkb3CuqeNFZ3TbwVBFWLHB6LM2g2tjRjLVxbUag8gyAWwEL4K5R3jZxJbZunSwBKmq8DdcMecEszG",
  "key1": "hMEK2zQf2ud53R5EFqpVwKEFdRXPhAt3kv4hcjsv6R11oqrNDhitSujgncZLrrrk2sumazehZQkbRGzD7zN8MEz",
  "key2": "5KMw6jFkAyqhbhm7467fAnTvjiM4WXZUH1533weFanTkRoStXAiPJYPqqUgrvNZiSmvrkLmtV7ZrsxCB26VtBdWS",
  "key3": "x1ASY4N5hYvwWdNjP8vBBWhJPLX7ZqhkfgAHL8SrxHj6Cw6WYCMeZi47xGLtWXLc3F11bD6WVdmmsRZiahgHU49",
  "key4": "Mvryrke6Jw51FaJnbweNmVvNvjFo99vewC8FSYmMqCcW5KoCybUtxh5xdr8ABU76Tw7cE7hfnjJUaJ5zfWoZG19",
  "key5": "5xrcNe7Vq7QbBpbugC6KP1GWSDv6ApKQ93DjsXegyX7KsHpHWYzNijEXEWdTFo8UwrUeqixdLjTCYvS5Y7gcrTKB",
  "key6": "5NKwuygYRYKvcWFs9kPRDbqvjqhXUVUg674hSoQcDL9e2MUGy8bkaRUMbUDfmqsrUmNLvhLMNnMBP2vtwWR1zUSm",
  "key7": "2wJKEUmTLupLjHyasnoUGaMk72sCZUfsLY4Uez8epWL8HUSaLYhTAeHXxJFFHA6ihN5KMwKEcH6NK7xa9nKdaLQT",
  "key8": "2cppWwGz5eeRhzKACDAqGv7KCjRy49u8mbc6g5f37QpiLKFiEBQf5nvcgKaN4jMxPayBJeDBtNjpAfbsA5SujEmA",
  "key9": "3cgoFvrsXCrCJmVEyhBEfZzCGxwh15UyDcbBtmvHroyknNgREKF1XTQhtsXSVQgaDAs5VRarzBCaospRHXspfMse",
  "key10": "2X1BvvgcnppaXRFzdPLtM5pVuTXip5g6GDmi2BfD5by43gdRcjGDLLQ9LeqNfgTDucvdCzXcWmzpet3h94D59pfc",
  "key11": "4yVZUcHAxKqFD5JQyM3HV1es3ZkF3acRzrn6y9jaSLNrtn4X1PuNw78geiviSDEhyyQNxJ7vD5tT5BDHE2abJybR",
  "key12": "2JrLUgWLQCr9GU5m94kHrcn9JwiajvZgdGuNvrSbKQ8r579jwMe2wwAWsvs8mUcrhfvM1ERPEDpppYAcV8UfRAYe",
  "key13": "4tzRnvFmLBpKEgTbdGH8THbZSi7Z6t28bT3CvkJXyjc6BRFRFsfut64JSsJP3VXqg7yg6AxNFq23FPHdqJRKq6fx",
  "key14": "2UefqaKphBtaTreVj97F3zUoo648Z8yMXPJZtBnpvU4wRzTciDCiAch1JEAszT4Hr3ZnxhT2V6NQRHYQnMdGWYAi",
  "key15": "41VkKCV4uWXfGhVzz5mRLNZrocEPUrQbsaUWY25YQFXUV2MkDsrw36ns216dKUwmAbfoBjfiWsMWArUdoGrvssn4",
  "key16": "2zJnE5dHcHFLEepmuDD2ptdeoybD1trjCZYa6AVgMmepJSxeH68WwD43Z5Hi56d7xSEEtnZnhpiQN1CA7zmVNici",
  "key17": "MAoQzMVYnGfHwoQ9CxDF9hVoKkVwNBLXi43MPuNDJYVyqQWQUdxPEDSmVfqo1W6zCUnozbSe276DExvjMr7Su4R",
  "key18": "2cqabEb6FTZKQbNpCix77Dxr2kLVfXEHfxbLYGf18xR71x5WyZoeYdZdGCphVjBUx5CM5EFdnD569q4BFDiESD67",
  "key19": "5TiBsYE7JKfCzeA9jM9KEo8b1S6zp9HcgaVozDjssbwNNHbthZCqWnsD7sNkeJ8ap4iFTwZE5FU7yXEDWrUEZnmE",
  "key20": "3kqS8GMQbBEGtg4LFKu2Mk9paYm9nS9RWb4xuVkkS9kTiA4KnTSqLH8Dh388N3NYncK22cEw2juPeM65hzWkSjmk",
  "key21": "pd9tcMvHFmvpBFe1ZhgevuxcXmvLFMUUe3sRPFgHfzdBcXdrDE4BQisHoPUhCjKGZc7TU4vQ2kSWWPQoPhcPVzX",
  "key22": "5N4yYbJPaNMNG17TR365HbfiRouvsS2vm2FMP5BEFVyRnbXGegeJHCrDg251EEjzFhw6to2eSsq68ny6buArQCtj",
  "key23": "24hqZM8vn56KER32mXvYfASruapZQUjnwoEofDCx7vtoqL3iKfHC5U94d2bRbEB9vf9jtTkH1x1LeGpp6VmW2MQm",
  "key24": "5boiN5Dd6vrsCjcPQ6vzdRgqeoov7UDXjUjYA32Xr8y1SPAbLaib4GXSBTJBmwAPEhwCne2BgjHWYcBv4SKm732L",
  "key25": "3XdRZtGFJfN5ckavcgD1MrGhBBgzSxSr7nH76ohBe8H4yeV819KpjkgiCSAvemdfGN6ejkawrwgPsVHH7hSW5ZCk",
  "key26": "64euPHMGQ5Nv6qABQjSC4ws2NetXKUjhwRjevkRS5gWJKL9ZRPiz6JELeUEHrF54XHJaAbW87JhnZ1St5Zz2tPFm",
  "key27": "59ge3YU2roznUQKuY1bphyQAMMGEiBUGLXmpbSm6UoQ2BxFeZRAeKpr71qQLxawiduKWhngQAaWXYRs7QFsZfiEU",
  "key28": "MEXGnboqxbrrRsJqD9Fmz7pJF3z3PamWJpNNzYU4iYvvxzRzQ9eBCPVdNKT3Kjhhru4gt5C2wzAQ99gKbc2MsvP",
  "key29": "3MFTm6cAroxXEUfA5mMHzphouK9obRPUD5rvhkgvnChxx31T1hZwvwZXmp8qKwqvJX3UUjeafNPxfSujF9qnCMhF",
  "key30": "3QDHf29TznHRuPsxMSpBCSfpD2a8o3XxHYdX69n7RpoTC8f3tXXpskh2VkHbdD75M6deQCGjSi27isDvbAijskzn",
  "key31": "3WEDEzK5twH8GvajU2jckFbrzacpVfUZuWUzcY72QuKDdD5ErTphvznNqcfYJisj5ChAjGGeeVJEnooMwTTaTuPE",
  "key32": "92iJWw8z6ZadytxbEvDuw8C3S4k8mrXtQMrA3JX98nXfM1SgBR6x1uBVTDeL3ZB11B4R9Tvo5jkqntzBJoaujax",
  "key33": "2A3vEpvD4xTD4z39EaapJXpMhF3zLfsSdHDChb7EsStwBctMFwivrbkmSzWTy5839q3tHHYq77oCZNY5uSqzbj4h",
  "key34": "5i9MMa88o5YoiGLVfaW9W1gCn1DmYrgZTrbX4ChiDjmaMLgaCnGF2J1cbB7fC9e2L3yG1JDrMrZHuiiESuPepEeB",
  "key35": "4bxfxUxcEGjWdyzuTntMAPUDqhehgBzVba2oZ2kvoEhh8KtqroN5NG7qKNuTf68a5CCdos38m2FK7sm7Ak2fyrP7",
  "key36": "256QUaeFHHB1Z2GYuJBByS6pxqp4pYNDMWGWgxypbWJYrNw2L76M2n5GS8isFt3bg7qiEvsLRf3tD3bbq65mjtV1",
  "key37": "5DMNtJjKy8Y1sDh9TW1HLfbZNTuymkpKojueaabkaSXTh23WV9gBNBXwPi56u39xD9XCzCV37fT72wfuqPYCtZmR",
  "key38": "3qtg76hYHVYAcU9UJGzsjfYGFs4BAR68qhaixduVEkwkAYZmVYHM6FK6HdUazLaZsMg78gpwiLqT7MZMgx3Yuzm7",
  "key39": "2NQDV9Qz2CSm7H45SgQa9k1VVyCjX3yVzyQxtzhYAmYUydjBVM433a6nMtMBSmN1ayyc2kwQiDA7LnLPAqGA1UHZ",
  "key40": "3gwiggtJbsM5iV54FkgcFDfteQmJi3Gn6GtUB7jJhJb4aaEhGAC1YjiUDFWd63i3N6p5ria5ENCCVX3SqmEWY9ME",
  "key41": "4e21V1gYRNJdxdMqfq5zmdR7MYMTMy6ZfHRt2PqTZREyukgkDWtgiVaLpTiQvAxV3KSFjErHHYKJRpwSec1k73Tu",
  "key42": "586hRbQpvv9HbTgy88T6gfWqRtCED8gvvPmdnjtivBLkxZNGEowRQVR5CdYhdnDJ2W9ioCjJS9DuAn4xR29pPmNr",
  "key43": "4htfFc7j89f8DtjNqSBypCcjuba9zXQGgF32886bagA4gxGd5L8HXgUk2ofMk3fujnHFZGZUyJQBFX6i8RPjr5Vw"
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
