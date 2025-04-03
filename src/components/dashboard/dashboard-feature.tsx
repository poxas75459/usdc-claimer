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
    "4aCpb8vnBMfqVT8N6X8tEh49P5KkWAUuCseDEKb84W5SzXseWopa9WAN3AKDaKhGFp6XSRKH3YdkjNNxyFWzAM5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U5kthnMQdrCieF4s5YvpCmscwsRaGSA8bvCEtmHBD29WALEGVa8fcheemRX9x2rxCyUBJcagwrKGTYr54BrDaWq",
  "key1": "65WWNiLF6E8zaJe3fT1aecERqg4RQAWPanh5X1HwpNUx3ZvQXhhScZGp5TvLPiDjTkfk1nzH9p1QkAXHWm5mTsY2",
  "key2": "EdxqGw22XJakwJoFyvrqmMPmstUfZ1i6tGUTG1DcwPynVsT3VH3QGtNJTdZ3Jd8p7cLTJFu5h67VsFBxRqqBA3F",
  "key3": "4NR9pFGM2GKHuHDkWY5Xi6YRrTinnaPu3uBKopFwSCvC5HcQuqGTXVQHjcGYBPCzpZtHeWvweQqtiH7k7LQxyHoM",
  "key4": "8bVHuhktwrp3LHC2WvPbZXLZJNP6CLazT9D7Ne61P9QBrh6Trpndxo4XSU8DEhKZHQ91uyYzpXb4pF6iwcwigLA",
  "key5": "5pk5r6HqEvYn9aVoZcXtL919MqPDLRyk25zMg16CXp489H6T59eLN2NsWUrnHa44KvU3w86eLrMVZDcZorYY7KGy",
  "key6": "4EsKxy7jZj3rmC18G58bs6GAZMTW12QSEyKkJeXKC1zrdW5y1cczYxd28JtABwT6qyKdswkXiCws5xLX5rnaiCBn",
  "key7": "3eZ31wiEucBEtWKapmnZM6X5ABuNUwG7ViohYxLENbCzTPDeHzZqR6ks5m1434ENKR8uxpH6PGv9ziyLkiExpoiQ",
  "key8": "2miwpmFMDjQVhQnmwA66s1robwDVVZKPrqwhKXbYxzXyjcw7ZkTNmTtKdBGqZwZxHy5ttssxLLszniwHZt1h1166",
  "key9": "613NitJRccg8FKVxk5NEJXkF9G3qKAyV1jkCk4LBo76ftEvyzZFCNcvb6X3yRm3PGQLr1Hb1ANPAcmDqJBiPfR8p",
  "key10": "51DuhLwv5nA6YZUhAjCmtHPmcNcXhnqUWm4gUnjUAr39HHA7p5qiu4RWJmBFVuVmwMCpZULu4ZyNqJxDXp7Xv1ey",
  "key11": "4zHYRe2XVzNYuBzrFHkjgks2rXmewVMdy4TgweiErkbc2HPPknastzzYCDqLWHFG2YJUDE3HbQbTkuRhjQ8axZHt",
  "key12": "4fHjzmRq5j61hWLv7X2tgC8d3VSDxKiiBcpn8X3zB38ohru9sBp5qXKgnWeHSMLCP34AKkRhB8sA5FWy8JFRCHd9",
  "key13": "2zM2YtozpsG48jGFmBNQjBfcHz8iRqsj6QHCUgU4xMmr6UFa93N8p8DxV7wu4gze7zN8W3D1DGs4hs7B7J13m1tz",
  "key14": "4kGVS3pVkFAKbcwC9guDmznaALeRjpuZNGQjEbRgG1uzsbiGBLbTVSrJ9ZmFyg1W51Kcnnj6YaNwSDw8o1kjVDJH",
  "key15": "5T56NER8MGfiS2qb9LPiKkua1zqrBuq21xJ5jegjeUag6S7PYG5A7WkQDuCtZRXnybKoq7sXPSinpdaHgbaMwwDS",
  "key16": "2J315785M3eef9832LSaiRhBP5CYosJt7yaXLEW5hjx1GJHBDqDvAbfX7cnCzyJQCxPXXWKCzYRjgouXZ6yKdCt9",
  "key17": "2wujdL8EQbrgSm6VdNT1DWnLBrbT7f3ccbLRX1Yk3B5MvyHgDoG39C6YxyXmJuiwwTWpJ8SuDSWybHcRgM4bYteZ",
  "key18": "5muEopzwRZuP9cbUJSKC7SFTxykv7TNmLjVWaMtWK3FXoyShp4uSvMsF2SonWPgfvXYJz5inPQtqxBWoH2ewxEKb",
  "key19": "2a5F35ZBLiUKLQGeDo3jAcbJo8sLUrX1AM1RBB43rMTa6EvDxEcnemE3kFbAeqirq4F3HTez8cwej2UvkcKbV8Zq",
  "key20": "5BcYM9Zae7YKLiCRhVXmwY8PUK36nvZQUEhMLxijyrPMQRqArPFctkNjKg42souV1LNKMpBxRiw4ky2y4ZBjkcPQ",
  "key21": "2UtfyPjrELtThhKZMUaCyYGfVGgbb7kJrjcERaajrWCwybnV6qTsTiEniiQNRnkP6P9ErWbyoHZFGxKPAy14NUQf",
  "key22": "42vu6viUFgcRhdcqjDRJ4JVcEmZPYpPisaf44uGmypTaT5pr47ESL8g1vrKs6Aey83mtEi8VXJVsfU6WkG6nNMd2",
  "key23": "297UbX5MgbM8JyAC6ouYrHcUk1moSwS6E3mASydYfYsFxT7BgKGpNY5UFPyTXftTQtoYweFREyAXx6p93fcMNNsf",
  "key24": "nMAohtptHEFRJcD4fczyZCX3DcZMFHeXvHx6gZ6ErMKePShqg9fatCU68cYj9mkT5fokjCHTfeg98JYp7opwQ39",
  "key25": "4Eczwv2vunPEa5n5afKUuJVA7bU81Te6ztuaxZx1txSBdAoXgQ7DYNiVxzcpPoguW7eA6gJy41CXVt8PaXCoWaca",
  "key26": "2MQgyvKBHacjZho1mB5wYkgdeTBCud3B2f4TwjxcCcrBWw95SdDP156bG3JuDUPZsJe5FCxuCAS8W9BknnKosKmA",
  "key27": "2ahwb2NitZYSYuztmoVL7hjozDjkQGRK2HKspVqCCFhwQV3rUKzroNb4YWFsMpdDVnzPVSbkavK4C6QvYfCbaBDe",
  "key28": "5tGWEUVSiy9WL3Rph59uTg5FGppPzXsWhnjGDxSGVfxBaaQ6mCDYJQtUNMPwCVQ325qt1ZewPPz1ou6A6q4YakYm",
  "key29": "iPn5km3aSJB1twxp9S9448z5J43zZSoQQmB2tvGSx3dThNgA6o2no7wM17jfWRTqQvwwwgSeGYt59LnUrSXz8kV",
  "key30": "KDCvtd52xVoo5bqnmp1VGKwf7EsRmFY9njRHbyNAKzGZ66JPPtMkmh2Qg5BurdyYQ5vz7mjHZfi5UWiDN5EqNpL",
  "key31": "3iz6dCyUCDpFhBeppxf6RJwstHyJWVHWxuns7EBkgx5QCkdcaMYEJdVmHwivyCRAqrPA3qnWV8bM6p7drV3zF55e",
  "key32": "3Hdw8m7r4cMQn3AircugVY9H5EUafUePZsjtxN11NNAvkpU8AQke84CbEu1BVnmQFrTSLXsdBtyLyFxLrbGEmbSg",
  "key33": "3DmMZcC2rXyLBPkKyHKyCX3c6hyDPzYEU71MdZhc5EmfGXPSzYqhmBXdoJPsa487oDBez5Bkfp6kaNhCediMzZNi",
  "key34": "5L6rhQyp3p5kb2oY5JEnAXx7wpbAqpyQe9RtTvQ9Y9bQ1anPFaxnwBjm9qsVXYBKzU4We73s6VmZx7kuPiteZ6Pd",
  "key35": "5dFyhXiQxNBPFCqQA9RQMmkwKQ4jqdXEjQBa6V1B293DMe3hFrsZ1YRgxDKGzqNXYv75g6NjS7jirh5FLsXhd8cA",
  "key36": "4fVBQJdfaut8q5cc6iXCvfjJVmbNNu9uKrCVjQWctbvzzQkAnCFW94aEFArVK6mjRsUy2zo3vn2UPvmfYtdnEaHu",
  "key37": "3ykpewqDbfHDXMfi8BRcpgJcUtyF1FGcrdUtSq4dkovAtPewA2K3CpLEytCLqCtPvFrsNw4pn44kqYNofcAts9TK",
  "key38": "66xPnkVgzTkbi93wn8j2a69QgEQGRbHzmAYA1pP2wmX8NyRApcuHdSA8PZHyXgwGwbfgiSDHihNDSMGHZgWZ7h55",
  "key39": "4ee2t8CDF7YxBCGAUXNmf67kHSd5vxKvnYx3iAScSL1aGcUfR9zFkkhCJuJZ3RCCCkzrf7XnLBwjDsaLQYPd9axy",
  "key40": "2rcFKTTaoCgSd9P5FfXtzhFEFk77FV5RBFfHuRbyaF3tfjhUfwRpxnoXTdApcyT6Ntwd5HRpKkdBkH4tBzXaFbpK",
  "key41": "59NKYvFYMVWMRTD8YWHz6sa4YAmqdAbPhUc4a7sMX6wt2AQaAX4sRkrTnsR7a4RoMBppswrZ4VMjDkiRwHvYS8Er",
  "key42": "a7NYyEpFyc7YmbcPpEhvf5owfrBtwu7kiboGc29udxTx6XcbuR8Kk67jnsEbvFLwT4RwaNpCdB6LqA4LaUPnkWp",
  "key43": "2sttNbM2YnzEwEDNhLp7PDF76e4BP2ypTaEhz8KMbVFPbgPxUjNpjKRrMRznBGuyjHbehKbVwzUEoVygixnVwygC",
  "key44": "67THfemP6H1gZPU3e7iokXyDu4kFHMQtUHYMHwFtjnMqpyqj6YmpBotXwwqYmVSHrq87uDuaVKU8e6ddyFcBwvGi",
  "key45": "5RUQz2AmLmYnvAF4uXWNifM8zeuMT8oZoCuoVsCvUqoXDiRhSSUrfRa6mDbgPYEWXbcvhZ4gRPyyNiJtbATHA8TA",
  "key46": "5wwQxgpq248c9gqWFPYaQrJvsDpsvAgCv3mkMwAQm9x7cFx8sEJZhdu9zS5SxG8hEP9dWG1ASkLCSnJMNyk8QfTs",
  "key47": "2EjLQWDdVJub8VVE9HX24cK3vha5BxB9bSmRsbYfnVYg7Qc5oTicBqY1MoZ3Tk6dCAZiBS6onmejvTzB3jQfJii2"
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
