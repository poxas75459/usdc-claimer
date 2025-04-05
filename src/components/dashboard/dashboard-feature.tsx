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
    "2MbFTV7vrAHctSPJWhBSLQjcrLEFKnQU98ZfFhyfsyxN1UBxR9GNQ7M6QC2G8DJkH2LirQCqbLCVG8m8vdp5rrU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YJqthFnHYmf36aKv6vTbSC912JuoRSqU9PtyEzPnpz8ko2Kj2BurzgH9vVXFNPUf5JJvSdhD7EQB6dYcZjC39dG",
  "key1": "djNUhVJbqxSpnN56sQtXmAxEgmsRDn5CCceQEnptfnVnSUfVAZ7woKcWf3bx8jhvA9aoFHvuXucfgaBJSDby5R2",
  "key2": "66N4fWhpyRPQgcJNjA7qg1zgDbQKwm8GPhqdhGSo6cYVjiUFmRGqr9UNNzhBnsXyPg7PZV9nWLDhyVW1YGjsbWVn",
  "key3": "3FrWs9zJwjdyGURJ5JSeC6xidzHydcNDdzfEbLcJeFgmDAqByGN5kYaL8LiSZ17d7ygG5YiRmoTJ6cCeENt8JjyS",
  "key4": "5ZScun6L2quGCg8PJ8gabG2gmB8KmWdzo9p8D6ocqk1KW47oksJXMHzso3CcxpVbYh1UHrNjfZQf5Wz6LhSAZNB2",
  "key5": "3oDvBgdVjJ5Lu1VHiEuSRZJxo4Ttpnz6PYbMnJuZjVa9yS3rxFo6NNaJMXjLn9JBMWd1cDusVKhzYExUrYfpmD3K",
  "key6": "51QBNwxuTctc6rQtW6FxdVzi9UeySb1uKt7MWpZQYW3SQwqKwr6Dxp1eXRCsWG3ZDRwjvfaY9Z2c2Aup9ZczTrut",
  "key7": "3fLbb99yWGuoxU9tYRHoWjJiE2TQz4861SDij6GQ4EoYiVFTj19nHRAgWCSYZWDUgS3aUCKi92bnvfLceAZ5H4Qo",
  "key8": "p9BohsNGwj3uhnStbeTxWxp4vxz2kPbBYEfD1bqZ99MqiA3vF1ZGNzeJgjuVQL1dtGAZh42r8XPoQhzJiTJrVHP",
  "key9": "2jGLsD5rYetmiJhb3uoTfAeJqBM8kncuLw255kvP6s9GHAE6XYEfG8BVrjXjvDZ9SmgjmZF4KEKFsfrpsHUH887",
  "key10": "o82a5DvjLc3XDJzVWZ8b5zTEFmB5HtQJhmpajzMtKpTtWvWGhXxVjG2QXUDs5icjZNFgWc5mbm1omeSwUHSr42G",
  "key11": "2vCPmPxBPWmB9BDGUu9BcvxwjLZebN9SX4KW6nG9pPna5p2hedXCvvZ9nDnhC6HT8gAPHJ1N6obCYhzNFp8fGMsw",
  "key12": "3LgVJZYXdfX4bc4nqB2b42fu6taBZ82oSYb4m6nuTnbSGmq9sP9yWZZgztR7Ks1EAtM5vu5rApFQdrx7rS1HZT4P",
  "key13": "4SV2rVtL2kiCgVgZE7XCvMX33MhxDUrNcBXYXeAWvwR7v54UZnpTE7avTrer51zF9CmYz2GSxuttBURHKjLLbpZj",
  "key14": "2gAPxXS6vxbod6STEndniFddqR4wx3HwQ73V3bTph3y5kigzwGzQjM7pCHQn9xUqsV8Dq7t6SdAaLwR2Cv6izyyr",
  "key15": "uF73GSAaPFTfdq3D2xMKHWhWy7fshJogMjnU5G2boH2T5dSm9UKxZUZRUd3UdzcnupMFQ48pAZU9CgytHgD6hQQ",
  "key16": "5ezUMBCMncnmhdzksyVChx8oa4u8NPhtJX31cFsmMaiJgkTuV14rr6jaagyEqzGsVq9Zsyzd1wLeWJQnB1akqRGJ",
  "key17": "4qy1C8AtY3Dtu2CQNRdTCTLP5LhSYFoKpaCQaoLZH8YFzAGF7kXa4hisFJVJtUqAbs1PQY7Y3KTwsQ4NLmh28MuD",
  "key18": "5i4y9R6Fq2RsxBwnRaWXxzMywXG7D1kGdr4QxPRh3fMZdGdAoMeq3ekJti4BFYTuFd7CzqtnKrbD96kG58phsZC8",
  "key19": "UjeJ73H6dhMF4d9g5kPfUAVai4mi3YvDV4Ae67RLWTXcSk4QaiR5MLRzHFmnhUezDvoUzPXw9CrUyXJZ9LLW5tw",
  "key20": "2dZvBnMWpx9v6DptYdzX63hKfvf4Gbi3Ai6AatNFu3biHJUf6Twsgy7eUsEhDA9JoBQaBmnB3ipKdnP2aGcJJ1kB",
  "key21": "2XGxRtpemBKPMLMd26ZBBHGzCZMwr39WMhVKxpbBYEyTCtz43Y78i3WWUntnWccScni38kfoxNT1u2XvjCcQLeSo",
  "key22": "2dqqZubjYK4usS6x6yS3vK4p8DB6ZEU9bnA7FvxvZEAzYQxKg7gPdyb444WLBWHRJoXond89AnVcbhvDe2VKYJwT",
  "key23": "5cFYVXVtPDC9Uy2Y2DtzHHajhiQwcL5qsEDqSmquwjQf18dzfhZADEnxQeFrKnDQH68BFyVmYL2N3yV1utzB3xAr",
  "key24": "Ed4nef5pCj4YN1SNA9C7jTGMJLmgrziBkgpb3EZ1EjeFiK3rm9cb4NbgAc9deCVqEd39cYSDgVVKDq6aVRqyJeA",
  "key25": "3Dh4qV2zTW5NcTyMedJYPuGh3KtytZa8zuXf8uTAZ4Tw5aQjsgeo5eeFmRJVJ3zZWUB9bi8isNEWouLbNdwML2Gx",
  "key26": "hr8u6uGVB4SxtFn2vwYRUdPEqsCYibfA9s5qwe78g6mXNRD6E6mSp8zGhk3Po2zHD85RrbsbTaZKe6JyB2WVMEo",
  "key27": "4b5Y9bcM9UEK2ME1Udh3nk366VZGPTouqnkCSwugu3PwMoWUZ4c2yBvNcCoSFCbU1NzqWq1FszUGz2o24mZohsMH",
  "key28": "5We2ujzJrwE45nGMaHaCwB6f8jhkuxiLubn3QPsFvZiGuReh8Y1SBi2dfhn9vEPpovEWD8c5TkB6kGyZkpcrgZmy",
  "key29": "ohM7pSkSGaNwaBTHaEw25HNHgZZTFbGYttFijxKz12jjBFS4GMLhntLdeS5t1Qme9Azo6P49xcEw3QFpZZJHn3h",
  "key30": "2G2kdx833SqzkSTjawaDMJAYKrQjQXFK1iRGQnJtENs7EoiQfjF63Q46caZToiGwztq5tebzMHMudszkEUPfNcbN",
  "key31": "4WETwGAW2SaJm9TWLSj4D9v7ZUkHerHyse3JnqavaCVYsyCexDHyw2KE3S5YKShcoZc2AQJfz7N312HGeF3Z977g",
  "key32": "t1TG7nqdMwsJy6J5fmDNCXwyqiJCDB3YoHUWSZ8S8HZegi3awhSM5Qy2Aj9EVpauGtfnYpKvSEbGXGjcqxabfDt",
  "key33": "4k5XVZZYPVyq4MFpPMwSmg9WXykxaLTPEwSGZYUdyVPRKTy7KTxd2b6JtR1oCxPBcbo8jpseJce35d2WXAt3BAry",
  "key34": "3RhY8nsLP1kTaMDQTorq3Qa4s6RJSk8ySN98mTPkfkqFV3fXfpzH2eHcXaaV44uhuowCJn1qzmNTVKK4ecfXnDxZ",
  "key35": "2BTPmNvgHtGfmCPgMFDgK3JNoWMzT5wND1juHc1FDf3MeXb3aFFhydrdbhtRppouYKF8VHE1vqq6bCUDBYjHKzR3"
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
