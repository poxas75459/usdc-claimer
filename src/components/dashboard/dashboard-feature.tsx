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
    "3X9CPNfJoGYpLE14nvfGgqqDoWQTvQLYSu4jXM19fXRS3n5KoSRpSUrbdAZMqwpQmzKvPXfPjnUyvGXDfDvdNS6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47BFkzHxF5JXqTYr8iSNneKFKPCHoubNdj1eohMt6SY39UwiTF8bJP3b8iR6aDdu8881hkgg2Pvsp8RvDugPTakc",
  "key1": "26xLCyZaZMUbmwi1V3BaVPLDpk4w7aXJ2nKrpmvwUWSQ1p8cPCmy6g8BiruCz3Uh2Pvk9fmTK9KPYnyPEgoqnK8r",
  "key2": "4JELQ88aQByZJqAuz2JpLiANmNTRg94y74LVubrABvrhLMM1hddsEuoJhdrQmmbb22GwyB9kfWenMXrqToNgScmp",
  "key3": "nUA53nVdtNASRMk9Zu6PrKZdEJSF4z5bqrsdDtBuSqaCjp2XmJsua5xGeDLybn5tnUhsMPvSaJSusJTEue1Pv8Q",
  "key4": "HE1HDoAHHvFaKJuw1TYdjS24ugPPSj2PK6BFisMX74VcJs92kgC4f9SCGMaosaFzkPXtngnRn7b6htymSbcndQT",
  "key5": "3i3BhpZk5QaU3McvNeBN7FBFzYMofky42c8vm5ep5xwtAT6c4NEXArpWp7NmvFL5MBM3MjEtqt6SQTcmity95ngg",
  "key6": "PhZ4q2dePc5vaBdJdnCvZHnrmiWwmmpRTbP7pq5VPJUbxVC29QozHZpHipx4TE36FeaBk9LqXjN3HJwmhFjR44L",
  "key7": "2GnHGrRy7c5q3RUtjnhvttfJ3U6gJjUhgCG7WugHx1rhRdPFHkdZKdPUbhsg2RUZowBGNk4hWUx4d6FNEAaK1z51",
  "key8": "51No534cy5mcnLo9fN1ECQeckesuQ5W6zTtJf5pn91mRF6188hVc2qCtLcT8je1CvdjANhctJTXsHe391jAim84F",
  "key9": "32dAhq1ncRpxCHuAAXxwEMfLFQL5B6oc6ud59dnU2yw2QerGPYvkFGCT467PTPCuG7RF5cGiayjC8C2g7nv8SqTm",
  "key10": "4R4mmJShkMcqMqBq28XXKFdQEs5oRLwSHksboKgSzszckAW94h4qxc7sEARtAesK5MwoQxJGjhgqgNUpii4EeAMp",
  "key11": "3KdkePmTbNEqQDqa67zyP9ki619z9GX6j5zS1fWncRyB66P4ikGfhyDEWDV8ie4TmJRQQKSQaEvQ9M7LVe32e2Vu",
  "key12": "XK1zLrH2nQ7QAaggeTwHBHhCn4rzVwybELPUtTDnFYycqcbVqkhKGwGxZhp5MfCLLZhAqCXSvY5E7VBZ3eG3M6U",
  "key13": "39WCUVuwnGcHv1z9ZRtVQSWbRn4qqNJfNvZzcfSBJRRaSahHh8kGyXCms6GbMgUefLMSHnerghnGSot8BrTz67Bn",
  "key14": "4LKjwuwiUfkx36qU6GLz6FqZnzUdzdSNEsdfNKc4mho9t21Qnxd4rUGyGxAxW82RgghHYsgJmT4ufDFWir4FXn3U",
  "key15": "xYt8TcX7xmqKeoGGMxLY6yAzQYDwEn7P4ZUAx97wdMFcAG4Va3TCHtzDewirU8ph1XYozMxUpZnVVsjECnW2KX2",
  "key16": "5n1PrnuZn9mRboL63qSiDhDeUoeKqdaKLYT8fhv1pzARenJrhuV9tAgW1ubSXRzKzu6hL33v4cbF8kSyEobqQxgZ",
  "key17": "26UStYU7LbRhwRfTaVBWmtXqFmfqvqPJnsjYpsxqafEXmjAStrGdhaR4ah2JGgKhvhWbACL8GroSsR7kZDKweyKW",
  "key18": "2D6RroJCTaLQzLayBSYn1tacwfUZkfsG9LwVT1DC1HKT4tqmmkg5ckTKvtscpY9VNqDs6fv35zd9cwA76Mw8FofJ",
  "key19": "2Ch4s6gRmUG8Yn9T4CDA4WnN5nCaLNLp32Wo3u8fzaLZ5J1kBt8rgaHyBki7fLLkbsVNRdLnoBfAG4UNss4YXajX",
  "key20": "3CmEBJub2jJYJT4ETVsyrHq1fbhWnU7QPAi1ocbH9keEnQ92pK8893wmAHmCe5xLs1zqNsLTkTqUUebDm2nv6Ps9",
  "key21": "2UypVL25SYtNoGPhNTQBdrpfwNdLYJ1SvtDyvDnnfgDmRMXHMhUtA4yVjPgtyAmpThPNvkxyhvars37ydr3zTw4m",
  "key22": "44SsZdM6jjQKjr39SrbxGNfHZUhtuHnRXzEczMHGtVp8LjRRDa2SeZfAEtDsJPLMDfEYxMcmKMez7juKm6LtQLVa",
  "key23": "22M8myxFXTFw4poYjf48uLYLYUyzoVqZcBJKyeVxhpBKYGu5iqRxprHbeMpaxQwSiqoLXZTx4EB5Nf7GEhGrrvhj",
  "key24": "2v4pxKmrXs146SCJMEGCTi15jz11XnMr8T3FjpAyv162zxVnqUYBbguHEArvdsWHdvR7FJJkQHy9tWxoz9P64yaE",
  "key25": "5599Be9658wQszPtNSmEwzKeeqPVtFwCsUrhPZCYACZovNwMnHRTEQnBqfShYoBtdbsQ4uKqgs5AKicGfqrNsgCR",
  "key26": "29bQLTGYrijCqWCGnWJLqoVSH8f2BHTCXiTcYaETDQpxhGEYs8WVLzSb11qg57vCpVReMceW42erX8KqyqKu2bMa",
  "key27": "bBd82foSorcsDY3XBzcfPr6LBwsbuZTD7Y3iTuCuzS67F1rphe3TmmQqdL4ZTFMxXMZ2eTrgkBBypyKsKvAUHYc",
  "key28": "48VKCvEdgj5qGgUwT9dfAgvtqjMcbDwih7nVXv9t4dgjRm91NJsm6YMWbVZTtBGzMTTMzZrZQ85A4m7X7ryq3eET",
  "key29": "21iUtRHeKz7jUZsKdhHY3HcUqLQiwgEPWp6MWuK39XehaRKZXAirsXY6ourv85jxv8PbdFrRdiJscB4jarKQ83wE",
  "key30": "2uDfP5L7ST7kpVfLhJ6RGERBkvqAmRJz8gbwT6eQnShoGuq81aC2XDd3hArvpTd11JdJr1QoCGY5UUTizoCJLToU",
  "key31": "ZGansf4wHYcNekEWASo4QrajLbTVDnEGkrjvqBy2LGbsH2ZaQLDf4z4yewpYJ7Y1P2hYezd2tx3yUMvTZ4kJim7",
  "key32": "3vkYuqCFbL2nkrFeQQkq7cCsMWpgUBizgPwHrJh6Y5cd1dJ1JeGjyB2QaWgnexoEdKMn6HkFB67sSR2kjDRsXcCs",
  "key33": "24mSs6t7jyGkB2cFDnkmcSWTEHiYBTcM9Na7NXxYUZMKx2rBRtLuLvQgeZhxbJAZaYGMV5gbmy5R8Yr9XL23DFUM",
  "key34": "5VERgK2jvhVTHmDiXTcjuWK97xArWwjCXeY3dYwHZQR89tezDpbqt3iWckPtymyKaLS6isacQoG7G5xnpd4GwBCz",
  "key35": "3E23Ukp4xwdoUPePwmatJYK9BPWt4zkodg3q5thRqhRsADC3HAfgfRwdJmBj9FALDY2sHJuigHkj81gYKARvGRpE",
  "key36": "376xciqfCsfxxFeqratoxchA6xUjDZh2DU5M4GJGn1D74UYD6vf7X9DLwFMRxi1FNHQZyHJfLDmpj2hNmUb6v7hC"
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
