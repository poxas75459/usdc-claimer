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
    "4Jq9Hq52cv5gUMbvRmu6nm9ifrqx4GrQJ9sfRt6MUo9SGHBMtjGfRpq3FQ3aGMuLKrghx3sPBLPqq6N4HL5cBpUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27Y4MqN7AvD8xAEjq743wjp3SDFRkUhZmUjs1dtXBY11AtmhBNShZpVDbzS72Fq67UGRqKt8GJUEk6Wct923mi1X",
  "key1": "31Wsb6uMPZsg9TXjy9pmUGv4qCyraT226EmWYxF2zn2AamMPukstiVCmVnM63jm6uM8cx2u2paGsoor6wMicrUfz",
  "key2": "4isXTa6Jh5tb47V8J2tkWZ2tDBoJxhZ6QHSB3wjDYbNNuLjoSdc4vdsSkzLxSTkJmZTx5GuMBEnFaEAFek196vzi",
  "key3": "Zsf5PBdkofvuXNyJkmRsrVLTxcJJrHE4w2XG5jqbZ8nH7a1uCAyuUuTkUvTuULZMV19AAxAUb9dFU2di27aB4UL",
  "key4": "cJDUuWihjAiyPa7KRkW2awZBo94PvK4UsJAJ8mBR78aSRP1bcW8p1AdVQ9651MtxCCcxF2Wxj98rzUUSJhetPEg",
  "key5": "2NngfmmmrG58Tq4i3jfJU2s73cUEchi1XTJFkUjkXMEdrFUMrrU3UcoUJCy4Rqm5ZUFc5rPK4RU4aReb6i5NCQx",
  "key6": "3co4eieFwtmPocQhAGmssF5Echg5KtkPyfZNmhPwdxAFLyEGvqMFLmBG5QTo9Ef4dwMAZuMjqm5aRPPGsqvHVwCg",
  "key7": "58xfyTrbtnrrqPXtGW61nWp4yuFPVfBAbmGv9EJwnLDipXQrknfrmtWGreR5xgqeEGrzGnyD4c3ofomxxutNwuyc",
  "key8": "5Zrfm6p3bfdDPVKFhJ2QoKHYvdDZ8DsQzTbZ7K5RSq21XCnQcMhz1uJxLBQY6SYvY7D4zTdjCEPDueWW3Dd9phGK",
  "key9": "2mYJCwLfD2uQPTm6cXQmJibofueELERvqA7ByWfw8SSEfUR8ZFwjVgmChVeRcXHQsX2Jx3rkFgFTK5TyWjWvNBsG",
  "key10": "535Cegwf8jXK4jXva2tzWW6VUmnLiHtMeae8jtGMsogM4Ak4ETtikAGYGSr5YHkniAdPujcM6wGPMBqvNspH3Qie",
  "key11": "qyAdNR8eQEPNVPLUfbK53KGAVDB7evy7odrxxwaAZDyXSBMAGsjokTjjbWJYefrpK8pmituwAeQdKFyNWMDhwzw",
  "key12": "5o5Qm7XXtjE5NCZZUUkVfPY5cEX4mdkHYNTo9wTXbMEZjtaRSvLLZvcddez9fx51Bt6CQn3EqkQ5oCW76TStoNuy",
  "key13": "2EvZDzMpEkaLHfyxv64PyLLzpeqEu18vy65oAFSNYeGL1j7Tw2sse6Y3zkHinebCZdTPKu9ufVy1zcsr3ns7U6RM",
  "key14": "4T8ED5kU5p4aYd25pD5Y5MrHFJRqf4VL274ogfpyWXydKYSYtdp7hn2j3ECHhf6jzvXfYKaBe4bbuQQ1mV6XYDA2",
  "key15": "5eMskaujFZGrM8qJSCH6oQ86PzVcKGHkg9H8iBZuHDKwQzEk1RcmzCqtRPjz8cALuQk6Mm6DfPC74JJZGXzx7hDH",
  "key16": "5NKVo6wJXGewtRBABqLQXWJHn4Xuk5fZQgQF1dWWkgru3SPgn1ccLazAw1Dptbu42bXz3cYQumkTKs2WdLBmufzU",
  "key17": "Hi6iFY2DbGVM5wVhf8gPR7jcvNPi6pCCsah7XCdc8Q62bnWPikUj1BMP5nfSsu8wyv8N1o6WPpLzYs7BQkxPqXo",
  "key18": "4pRoHRisKy8VijeCW8Ytq8grP9B5YUhPEubiX17gcNzWKiMj1oYkBUcLp54JVdqTXEqn86Jx3BYydRqTjftKyBSX",
  "key19": "27Vyd3b1yawrCYnjjpxUbsmqTRZTMjWgL9izZtRy8bvudvHa5BffVY6FsPUwmCowEmbVPF7bB9mABAprFiVKcTAu",
  "key20": "3sGa5UkAWDo46DMPaYU9iV8RiYCxbvvtLsSZTjwP64ZfbcbfKhQw7tF1qz8JJw2wZzAzaYE4fbExgMXws77rP5Lg",
  "key21": "2WsGW4VNSLzv7jqzGXSyUcGNnkMYwxFq685dmNUFqrurh1bYeAyFnBJM7TKZtvFXnHtHHhPr2UkvNwSA39Lvbnnv",
  "key22": "5Y7JC8NQNxN48GeLkh6BEFrMuB6SBQtQDjt7pg7zPggWB5h1GauNCifuEgq9GhBUqeoUgfW9Avz8jL7QxLiQjmA6",
  "key23": "5wLDnjigK7vXhRkacbgfJ8s2YaDXfv6qFQosB4FLPyaRvduFhTjxQpfQyQ2Zev4hemwhbyckfgfYS2kaCZdKTcNX",
  "key24": "FC9SxjsWgr8MQVRBX8teVHMAn8ssfyk8sEJtfrAubAGBFDjYQhu78XSS4vchfPb16dy2EaCACDh4tT8agtBntkp",
  "key25": "mmYw5X424QCCkQz3wGwHntQ4qWW3PWotgFEE14wsYhis2pweRw1us3Z996G9m9MqysKChKPEtSDsvg7wkQWpQNN",
  "key26": "koq772MY7WnYrY1yCMePGdZKX6MJj3zbEkbdpcMdfkFPRqmotDfe6iWTeWY1ca2PD5pLrBtq6YZB1giiAjV7UTY",
  "key27": "5csBDiV5HTCXgGum59xNwPx8MV1o3Vib8yLchpCshMJxfaDPHsHoz1ZXDDaUjjJUBT6HSzvcPXidN9eqsYedj7ZX",
  "key28": "2F6LmnKfviKGDeqvgBXV4pgCL1rvLUk7fh7av7FSWeR9nrW9kbYhEdfM2CeWJUYp3Jdm5EeAKtc2JC2JmFZVYhn8",
  "key29": "3hghrBpEMxcmGzgnvdvwWraRaLpFHyyc9QpNbwcjjvXuRXRPRRxqWdcxBNb87uKe3GJHmtxW1apRya5sc1BvgKW1",
  "key30": "5hq6tGMV1bE23XpkBEpRSH9pnPpcSBw7iLTtZpEarsY2syPaVPBMBHTVnc2Jm47hdvYBEjwLML8exmgXCLutgJWc",
  "key31": "EruQoFwRwaWQH1g9Kvx77dvn7PJfrsS65yvQs8s288k2mwN6Xy9hr9hoUA5QnMBvEPJHXq1K1xw7xcbo5DbDBd7",
  "key32": "66KTWWisaH8xa6LSfoqD9VMxYWLu6XkmXiNqHT7zneLY8gkA92pN9rChyxbunNGyqATtpf4tVQAH46FaZo9GFedd",
  "key33": "5zRtgsobHyPw4c44bi8jiaPpsPQGTgrrahBoz5wfwGNRjxYXkF9bYWePwxAE8iRUcHD6M5wz222We3CFLfdy3ADx",
  "key34": "5ynxKPDAdDEYsRSvRZj7PJRs4cHRQ92Q1EEP4WbWn4HmWc5NPB4qfktP8pdsxSj7DM3mcqfWsqqPkoCSC8Y8C2yy",
  "key35": "38SkvBAYBH9hLKHWsDXSWkH3fgiVPbWxSzJgekMcbewrZ2jDSMPbXi9DVCYoZ9Usskj4BNqgRW43JYt7JRpJswA1",
  "key36": "S8iNsfy6igqbV9DYXjEJSzG1U3VvVDPsjdBp96mUQUFfP74XVuJYcsG5V7L7rZ8jqtur12TY4gUYiW8Rs1dHQqg"
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
