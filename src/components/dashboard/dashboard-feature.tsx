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
    "koLVCWm4zGc4XtWAYcVhRYufMwmM3qjB241MQGLpqzepPViA2etgBGcs6utbunuqDyzo2b6gTYFnhSTNJgyCYUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61GHrZ8kdWZCRw1XuzJMXTgGuezwYB278xtwTrDGby9xxuPuPUZE8qETmGxsEusYVQgnTuSgR4g8gr4itkRu3Taf",
  "key1": "nmJ6xDyUeFCibXpRxZm67x8S3nZz2AfgsUvJQ8YJxRm2RrH8HJy92cB6fcuTrZbdBqMdRLsRndGhyu91xtj2XXp",
  "key2": "2PrpSn4fMgyyzhxaMxFH9MC8EMQSM9gPrn82bgkyNuKJkTJrmtJMPYsDaoFpBAZZEHhY3qsAp7y3TP5ZJj97peoi",
  "key3": "5HUASxiNcAdQfiiQxBvDtp5AGmDeCvfYeiVHBquXTocdieuwE8ntudUvrpp9j4KGZDZ8MVH7K6MJMsxZrMe9JJkM",
  "key4": "5NPRjAsMN9XVgB33t48FLvUjwihfBet7JN99RGvYfXdnqx94SoHgTJ2T1bint3worUDuXPnVbVha8FDT7Wbgeuhb",
  "key5": "2ywffHrDhkMHJ3ZdKmREKfPQJgQPzbMNSBDGp44Mcx8ccRXDJMf6c5Sb947nCGzoJBP2ajpPpu9cd2XVpcrjytwX",
  "key6": "5Rg6u88scTE5aLQoNFFgDnsvbf1Qg7iU11Vg3oCsKjUpgF5vKh8sAbvPmVpser871JYvBJQBKUncXB97Dv16HHo2",
  "key7": "2Dhz2sngAnbcZWsQSwQVBcKjdnn3TWWk4HbksrJmGb9YXcjYyEzTCAQvioc6MmVaVapRJsQRNuyvzKZnfV6nDfSK",
  "key8": "5GdAtEhpeo2CYmrSinVodZERKhyVFavwQS6ziUSeEUg4Leq3Y8frXfqiCWbQGdU2BbnGTCJDGCaiugN4CNjd4UKq",
  "key9": "4Z6E2TFsh5rmtAtusDymed5aZGWn6qPPcL4AcAiK5WVYpBmZpNU9qpGzsACkKpmHZN5udaUKSE6VJQDoedpezRQx",
  "key10": "4Q6CtRVgGCBw7AjGseGdfrR9qLvLBKp6PKRm5Cicvy8Sw72gaJapj3pcgXAYL3jWJhZq98V9DJVpFX2gXssFagkZ",
  "key11": "2kNL4s2QjvJcfMMKHhptVGV8pNGLXPK6fybEAdJPmvUoTXkSwGVsdMuEvzo3HwiWjXsax15AWYQ36Bck3NbNqcYf",
  "key12": "zBakkQbCQEUufZ7LfRXqk5NVnyGDGQcXQYJb6BFwqiNNoiRrqr5WYwTJw2NGzgt8Sd8WiEWaMtvYsFJgbFNPzzZ",
  "key13": "4reAiBnGWWgPudsFZXT2Ma4awrTJfBH6VzrYRqxs89eiT6CwB84aRn9gKs6XjsbW4uAKFiQcJ7DoFK4LwRe5Ru1",
  "key14": "5QzkNGtU2SWSj3gsYUaJ3tgT61hfSEreeNyksuZ8rfL7bp4Kz84JEYYEc1yZamkjYPaHVQnZeYCfRWVbvBig9aDW",
  "key15": "5Y7t9cHTSdcYjj61pTj8uKr3wzC3pDbqHNiZxTckBzFnXtTS8Fh8Bw81UUEcgKpjCjzB4hMwJLugomctzGRo6JTN",
  "key16": "3NT3bFyaC6k2Xxrt9T1FCAw77zTUfygiT98vUCpHewsXfFNAk1NpS4Jis2V1Fbau4CuAJm9P7nU9HkVTqDZ36Y95",
  "key17": "9GtVeXh5L6usue9nv19N6tpkD9MUa9ZPj32JwwTqwQKGvAdaM4azTmVrgVznoAzMS47BxCo9vThCmcfucm5BqhF",
  "key18": "2uEuCj65A7wCrCguwyyyYBDCAAaiBzYB3A5ezo5r1isaKqPpQcjD4exTNx2uaygtbSMmBvC1ETKC7hP1N3ro9wAX",
  "key19": "57kCqUx2FSmnTC38j2YutEAA71okK2CQQUPAPnw9cDk7HVim5EgEEAfjfe6Y3XCGR9pvcpsd9akigaxJBHYhkUfP",
  "key20": "3xmmtJ1TgzuKkchWrUgtN3PMdvbhWKFtDMKYmfahVYsL27eVeXiU9rBsqqSGMB6S5igD3s7ULv21jBh4ohHNshCT",
  "key21": "3YRWnPvsaTLR1xZgL1ABXpwTAgTrZPmsAnYNKNRhsHNtmCRJXn83mdpihcAsSzSxcxueBxFANZNU2xEsU25GueBU",
  "key22": "4JNAytuLjr4jf4jmm42A8MkK54d6v4MEbBw24vU486wxb45gBKguF856w7NJuobyvaxLJpyrULWYKNSGFBPgqSiv",
  "key23": "5Lyxs51EJFptv5PVN4xSp4ymSRQPcxcBoFTYUNNQjoqfK4SEYQVhMy2TYvd3MQGc2pdWMwXFyP1nW85R3zySQ5HD",
  "key24": "3sZqb5NAeD3ADzu6vh9NKxuBgyTcH6ywencjEzSNc7X6uVRHt4id8FApH6Ys5ZogVHEhvAtirCwBZD5HNQWQzgYo",
  "key25": "2YiYo5Ur1GRpUnimFWFRkbTbiF6Tvu4w9F35kebPYgmB6GTr7RUPqcM9nq3f6SxzV148W1BxwDnq1hDrrJ6okmLY"
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
