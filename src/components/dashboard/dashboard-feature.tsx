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
    "2bqUSbCZ31fzkFfoduL2C4s86E8MyhonAJid1UHmt5EqV7GHb233UnBBmAL2kCYPjPgu83iiMYxpT9XKazdPqq8S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cscbkUuxRGNYrHEPMdhLokm8AVXdbpDWESpg5HFVnAEQgpsxytnDSGfxcmtVwKcULpZ7N7ajvoVrhBQi1DkHEf4",
  "key1": "MzC9gp6cfQYrpg6Q538AJC1NHwbdW69h9GH9obTofpMNyRfAu3CD6oLTfXYtMga8FNgNxL86vyLtQSTHqH7BwHh",
  "key2": "49Cc3nFquLQWmvZyzL6wGSS53SKhtsrvdzFdPWfPtZwgTpkt4dx6cZkCmcc16tfx6KRiuWYDCV5MkfUYLStRcsQp",
  "key3": "VdfctjYpQQjCsU1ie5nJayD8FVqW7SjKikbkaar2WxYkYe6uR66Ai8Pve5qEWzsTwRAMnUZYxBukJwgmgSHxUxA",
  "key4": "32E7FwfFKGqdYKHSnP4kjfaK48rVY5gZCBbor2ZGJReRuUjA9c5xDmu2Wz8XZ5BE4fVBnsep8Js1erw7BsPG9hyN",
  "key5": "42j2ySHCUDAnc4HJBZz2NC6Y7XX3cZzkaNbm4WmK5oYGrNWLSd1HSeBGPgojirH5T91hvsuJEGomFv494YyEWNp6",
  "key6": "4mngTAoyXCTQF2YZ7xH7WAJBfo8dXSyN5BD6TARuPDE5ESgNJVEdUyqXWNUvVTeVJrzcT8ysKCkTcK5fT3GSiqNo",
  "key7": "5hRxK8azUt66PdT4uZKgHyR3Fuj6SDibTB8oP1ycYB251oM1o7tgnNmGbMzxMwL2qipyiwBKPT1wqD2AEWEu1qrc",
  "key8": "4uTLbRc4wX278aGThvSUVQrBNd2uginfB1sevJ9muSVjK5d7BxWrTC22um7FfbFnzraAqfAU1Mka8YgQgLqDqqVe",
  "key9": "5vaXpC3jfL2tfqKY6XK7QfRomkksNkG49mHRrs5iVJUuuajMne5UnCLTw6TAAp2HALQzp2A8VczHAdqPNx9uxWJh",
  "key10": "29rjtgFRXfiPQXzXxab2ZxmpCot4cJxHMuAbTznL2kkDUgtwsTPYrcL28tkUCH5qpFLnKmFHVKtEGNRMaaf427Uy",
  "key11": "abXo5Y86ceTo7CTBiG7qBb3nb7LyfnXskf1NKeNNYZps8xoGrsfRhwZmH5UbcJNXGtoZaK5hw4GYd3TWat222qs",
  "key12": "4yoANtefnKUe22qPmb7jazRFLoU8mEsKWsVDbdR3MTFZGC6ufP84Yp5gXzssF26bQCScps8f69dNvWUFUDSkzZSS",
  "key13": "3qhrbsqwV46Lxr8XShjEUHECRwbwtMB6tVyNv4XoRZaQpqqtgov3bEsg83QSXXE5jCkchuSdLwkJJHC6X5nm1MtD",
  "key14": "KA6LAuYdKdR9KwgAYCm6ZDjdW6rAVKYjMdKorkBEKwjRzNewJV1PA8u8EHuwoTUzXHEX8ga3XpX6kuCS3T9xpV4",
  "key15": "57HSKabP79k6oNybRKKPnjisWkd55Bi8z5gP9w6LsjYNHnuxGr2Kf2U1Upt5RLjE2Bs6ZZ5eXYb67MLHyN19gBY1",
  "key16": "4QhbtkYXcZKVK6dGSejnhVZDF3CuFJDreGNokjfj9qXsKZ3AavKGJbfMc6hwMGxypnVctd3T5ZywsRPefxBZPE62",
  "key17": "zp4JNVdEgjG2FryrcFeGctA4GeZ7MoeKqhj1KNBBVWGiB1Y9vRFinNk41dbgU6M514x78LwCakuZxo9nDz4zyXy",
  "key18": "452nFm7ANAX7i8b9Bd61F6UbbCVG7dhiDTShwnkThJnGHRkBbBStuWv7yu6dDi3P4Sf5MPgVkLo5ipvXpX4SwSi7",
  "key19": "2GvQirD6iiH9hLQ5b5WJzPfhCDzWr3kq9Wg27L8armRhm6QfoKhWzHpXkCAVTuT3RPvcgjZ2xTU67JtG1vpGa9ud",
  "key20": "3GwGPJEENX16hDsTy5kBfCzoJzfVX2dLmGUniyFbWcBhwTVfuqZdhjYuK2H77jdTGYa4DKxEeNpvodZWApvWXMd2",
  "key21": "4vKgFyWkJ1d8Uo3E5J7gMPKY95FoBGXTEaGzWprxc85KPjCDvq2Bu6xTXP4v5EsxkizJzHpLDkkCNDhpjKiMSi4X",
  "key22": "QUFug9e8sH9ZBuxxD5i8GYzeXBmqFzTgsdN9vHU93DDUKngvPpqL4sE1idkgdLd6JWZSrztcebtZzYeQbnn9CzY",
  "key23": "3ihTTxpeAV5cvM6MQXRSycGrVXadawepJGxAyrJoQmLtSpXc8ET7EnsJe3kFQGRk5AkDhsbVzQqmbCFCQAyiu3Cn",
  "key24": "3AvtfcnMiSUgbGmBjsUPZ2Sm6WqYFUAQ9919G6USTf6Z4rzimWB5iemVAa1Sv8rgfDV7y3QS36dLjNyT1QWxdzsu",
  "key25": "4QCjc6db4ctVoSybu6LK9zGSYtSmtvjEFA52m1DEMfZ54NSRQqri8YUtAzAXidiqYbWT7JDM41C9mRKe3X9m4UjA",
  "key26": "3i1sU37dGi3KuwnKJBvPzJvbjMnWXbASEFQytN1LJbTJfMev5hR2dvJv6XKeh4xrqqdxxBw9DThYTg41xYaXNmN2",
  "key27": "51ZuYuMxQTSi6oy1LrnTbJ2iHarQ99NMRkdT2uwxkymQL3zykF8b9Z96TnHcHBLHhkyqakjryMzk6CPW1LUopUe7",
  "key28": "2MGovjP3bMPrHpCftdtQR1tkm56seLkw3DLfiuNwaFBSLTDTPFDsjnGRzqbMUDsm2w2JBLH56JXhLdvzRriS2dsT",
  "key29": "25srUqvzyyKLLna9AagayKdpREHdyTDUUz8QxEitp4HN59wyp4JoKJBqSVAgH9yT9rMeKtNXWeyTScApCw5nrboT",
  "key30": "2gBbKw525sGf9NcWTxWZn7AtZgvKt32qazSachWD7fqerJuja9su7J5M42w58ZTWLe3Nv5wToYJJHLwvsRfNXoHc",
  "key31": "2mpnAjVdJqwoMHQGjgtaGSbibRb4Ya58JmHvwaQJPDCjYJUsH2iQfePb7vcidn7UKqUAni58G5P4J1DgnJG2pGzi",
  "key32": "YQzr7YSeASm17KGD1gUtFJVUUEfyPcbtUoZsgqhyNndz3w9yojcHTbmkmR8YkDGqDGAxr8FTN8oZFrg5hDmv3KC",
  "key33": "57D1FXJZEf76PK1PWjqR869yVFaNQBEegaCKnWSQQ6nPnEXxKsT9CkY2YLiG4F22TRcnhnk1cS5DmfKDQy7KaQjx",
  "key34": "gQV8TzL8Aq2K1Cd7x7nNxL3srJMWPes2tJ6XcxvG1goxvsfFNHy8bMcA6zsD7djbbEHprHmS3JkKsLtvE2ndZdM",
  "key35": "2nRxiq2nLvCaBT9whrCkUAmcuNSoRKdZ3F4PEzjh2VUwWL9oExSQcXiHubh72modLsLx7Mv83UAjz7g86a7z5Ek3",
  "key36": "4xuuuJsj1akj282V7Faw1p6DJrxdKdPbkQLrN3HvPHdghpQ2rx7eMQyQZFRTcJpreRQZX2YSw8q8PG12vfvr71gs",
  "key37": "386C3XeDnkHcHm949pLJJnMTKnYkVamez7xNJuHHdEa85cpmGNnDAMPY6c6GFhB5B3K11iMUNjt6c6E4e6kdSPCc",
  "key38": "4MyM9QZveE3EsCyyb58Nf1rjS8KT2Rygt8ZcWch4PoKtGMhXAEwnjkb6PXzBPhB27fnSzE7L9nuFv9uMwA49KY9N",
  "key39": "3RK6hWPYRFzwGC5B9E5vuZQELk3QTHwQdRrCj6UR6oPWeef5FqBuWfKTYiPG9MuCf1N9ay9vwkR7QWBNQqAWpmvW",
  "key40": "2uutniRyjeWTY9FW7zSpUPrNDJi9nRRLw6e2nmMDRinVLEHYDkH6sUtt87vWHASLxM3w8BASwrmEEegXr82MeocV",
  "key41": "5FCjQGk8VURffG7QbgyNXc5RwfD4HRAEHvL45UJr3upKjucLM6wDZ7pgC2Tt66KJCgLMjQUCxzrgEA7mvYrGtsgA",
  "key42": "5R16whHTuw7PHw7uQY4vTzAzHCaEKEAQTgFmCf3NomfdkVG7E6AenK4A8BakT6r5SExh9V5MAm44o4Be7gdTNU7e",
  "key43": "2dggySHJ5pszKqLHJuJYvQiDesPkwJ4GxuZBQYmRF3qbUTB8etZahrzGXPqT9dM7ctdw3GUCc5hj2iV8nDqcaHKJ",
  "key44": "g33zXedt1FL9a5jtFZKutuzpA3FHMW8G8MYuuq9uDsqHmJ9mDywJwxADSVhqmYECE4PeRzH2SzJovuVGo9xASpo",
  "key45": "dcf5rcHcRVR4he5FBLi6k54dXnbR1F9qWKCbkynLigWpjN9PmMp1HFvT55LxQXFLKjv4zSA9YzU9wBiSNGjTpkM",
  "key46": "2tG23gBLEPduPqyDYVqBThZZ2p8RonaFySHKSNQQA11v7oumpowgQMGit95SPPA7Xya2tuqadivmfiiv4LEzwCqJ",
  "key47": "2XLA7aNArgVy3WHRhqQDgm8KbPCETARZibH9NA8SJtML62dguRuhNevwshyWBLLRJRR9br49tqDuahKDFPG3fkoz",
  "key48": "i3m7ZzcZ7Hq1rLvfLnNWs7VECeKN8xxgezM4YKc2fnt43pPXYbKapT1tPuKmF6bESJ99f9UfTkL7ULzk91AXURM",
  "key49": "Rz3KWep3VSUr4EfDhz8J6pY7STT1eowarAr9vhBfR5k3HocaYvFhB6kqWMmYY5GtSoytpKdYGcmNg62uXvmEhio"
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
