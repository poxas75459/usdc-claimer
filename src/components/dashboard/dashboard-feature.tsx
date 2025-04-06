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
    "3wdkZko8dMpdbmSEH8FjJER19vGvRbizXgPn4udDmKa52WDstc9HJJFFtM9F4qqFQ5drNCgKBT56EgUt9abumiwx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BJA3NkzL6Yf16MyWpaDxM74GLiN6xux4TfLYtXttYehTrFJhVpRRZnoRF1MPToKd6VzK2B2gRJhjQmV9vB94mQK",
  "key1": "3RUFH958tvccC1Qk7sBtv1LoepuXX1aVhpS7oVDprWa1n5Z41Dt8w2zZutsM7CQLmYUsWm547Ry5w5HQqXoqYpXg",
  "key2": "5cGapRZcSk9mvjihHhn1p37HVCxf77hTEu4pVzNm9JvRzqBavaY1DEAT1Xui5rugN9VvYByu2u2DPt39r7yz3S1j",
  "key3": "dXQZbCgQMApZEuwxPUxaRqLQBXwmAXySXs1LhD6j4B3cQqD1wXHpT9VRefk1km9LjLqvJk5AWfbaTgA8qikGjKN",
  "key4": "5rukFdUGx6N3LACvvNrvmGViEee8y1P6RNLMd4pRGKQ46nb6HGq13Az9QzV48JmPkmNguQFLP19zhMYn9Kit4zTt",
  "key5": "4hKfaB8Fw7pVohqhGqLZ3e7irRa5cNKx2J9oWMdbcgDa49v7d3EiTA917iV3KR7EKwXQo2bEuhhFpinCVytyqxxe",
  "key6": "5oPYVzVieopNC2oX5wEEyQXKZ1PKLAx9pZLPPM5t9ngxFwq1SDtUkGfVpChYFq4xnHzd51QKimHip4HeKQChdKfo",
  "key7": "DVA6yVj2ZZeCNy3DcX1vV325xiLK6t3XD6WfEbNJhMCutahUEBWcpAGzPecT1RR9rEWb8ZWgqo3LzBfkGgjvTxB",
  "key8": "29BJFLuCz3hs8py3P1MotxFtKsY5g3UE4JsYX2d7WrkwkgBLgjaGn4aZH9thnCiLhWzv43spx5FUPLPqo4AJFScL",
  "key9": "BZaKa1AcRvKimcWmheEMKex3LU53wVUXFQ6uuUBa1nXBHhDko641mpzFmD9oPZHXE2vZMyTR6KtfMzaQWZb9QKr",
  "key10": "3659kPDd3c6aFV7w8tUo1K58jagas9m5Kbmj71SZS6gFkpMCXzazRVoZqcM7TW7S5VnPmcK44jXs46BK43QQuAAt",
  "key11": "5zMFxueHvJ3izHKW8M15k5ENAg13TbAEynrppZG8uCSoMwyN4XcRKQ3DD6FdS29LZtAuknHqNMZSJBDBqrdhRrSs",
  "key12": "4phpy71C8hgWTPXGZRnKW1ig7C138Cuk6vPyaup5RWmtkgRZCYFrnFz3Xfu2QGb7EcrmfEUbqafj7NEzPX4SJxEi",
  "key13": "4o1zAF6ZssMBG6HRX1kgCTP7T1AZsV6hVsjzerQEKZ8x6WGW5qrpx1KmAGFaWDNi9xT5HgbkkXnzJRNGUNbNzH2i",
  "key14": "2i726FzXCRhAt9FXSx43Ws2u46gQhWSLcvvAErtAQKEMzYbFt9dZxmv8rZXgJ99hnWJcArBprmotJtBSeT2dvcNH",
  "key15": "5jXz8rXsZF2HHwVoXA8kWSwqBmA9KzXFB5tswFVVE9jemBsYBvf8e5UttrZHgMEHHe6imFZDMb1jd8USYGEhP1ph",
  "key16": "3GvXLxirDYt6U4sxWZfSnCGXzfsUzeAr4bQQ466G4YgBcMGyBHUFn39tEUJF7S5ko3kkFgvPVwxXv1hV1LPWqga9",
  "key17": "3w4t2d61c32u3z5kUaU6RmAyiJxcyMEETbdvBPPHa4jmCy8TT9pRFkAfPYcv2RjyB4UCWKKRMPHLv25BfM8FSTw9",
  "key18": "4RbtQEZJrE7JMeEz9gF33jyDHDrKeBJQoTM4FprYzmfWeNvHkQLEEoDYAVHgBYKhTNzeFkrGX3sjC9tYGbA34vqN",
  "key19": "3x4qj1fRYTJ7DCzKFDrrnrAzq1bqpYhCMy8b9cduPRp8bAhdXFKZwjjvr9rkruNfh9v9tzJXavZtBYU3NzLcounM",
  "key20": "2MhZrZqv8d6ZN6TnbRZqtdM1A3eqhFcZHstgLUPZ8XQVvzzfpfSw24owXadJkdcx22CwAa5jAgGSBNDfcVNfvGxH",
  "key21": "eSZoW2ezRnUmjUhcn3dpq9t63WQpcT9aYUmD1UQ9ZDviNqN5feKCoHzudXC8fkEBzqre1yKkk7yWKC7Sbhcy2bi",
  "key22": "4GR1bcqNTDYmU4idrkxixh7cDQqfz2Kqyp3zJndgjotdyvPQiSCFYGSKUpmcUSH4r2r296C8g7roWWcjVE5Topre",
  "key23": "2wJ7fXrcGjVwDyqZa8Vq82oSyV8KAFquuH7YHEwyNoe3wSfnpF6NaTHHEokDjMp8GD1im8fgsfLwbpSdWRFvfVdG",
  "key24": "4KLhRaoe2WFVQkHakaa67HQ2snrQy3bxughL7nd1PNrnhUTj3SgtjwLTsU36ZzbaC9nSqpQZWBZYiuYU8aS4Ytxv",
  "key25": "2etRU1i8rrwFt4AdYAoXzwa8t3zYLpi4neZMFHxfmXYP72PfZyFuwVMC5UdY1kjgiUffoXYNLKZpT6W3vUXwKThD",
  "key26": "iuhgrvALGc1tTHh1vBtEARSvXqBA1vWXpJmVBnDsoSgYxiqWK7gkCLFACajCfJCf37GJCY3QaDA9VStfCm3sNJD",
  "key27": "2r2AQXTbpC6Avwi8EPakVcWitxNKS66K8baf6mtVw45uLqLeAS6zhUPb9aXghDfRsWmpJgT5rzfpwv8B7VZ5A8FS",
  "key28": "mCraWyKNXxC7jN9GqUAE5EHTcvZqCiHETQHRCLcCotLVdnsh8Ro7USUW8nAHUSnrHg9hjAsibAB7sGfAWbmRTRB",
  "key29": "3bK2skr8daaLiM7jFQGxjTvju19Bo6Nj6W1o1tuJeHWKdXwjBP7ajqibVTB3pwapLeXHzkK2mSXcMian43Zvwb8b",
  "key30": "rxzcskXhqYJSJ5HhV4e5jn7myPCw1PUjvQ94A5VaHHdk7JNzDXBKo6vSLTbW9fwVoyh4ZnMwd4prxfuC1jjyQDV",
  "key31": "JmJpTSN5q2aFyaKfiALpc9GoEkAfQ3q3BKGmkcV6E2Cwf4qe8qyj5zvCtscQWxXFazHhha46dprheQD7MqJrvSf",
  "key32": "5hVRR9um4KkcGLpsbyrJvf8xT53BLL4h7mCbKeR87Kd2D9ULjVkcSwiNRx12yFsM7TFyMxJC8CMQR6XRxaZmMiJv",
  "key33": "2ETGLfLshEfSHT9gR4emqekVA4fQJqV5fyj9iCNnFEGpGDLaUVjHaU7d6uGThfk2P52G9MUjtZ6dVtmJffYF7v6U",
  "key34": "3qfickjHbk8XduZM7s5eBpGsXDBAKbUXaRbSoiSsyeXi6DBba4ySEfRit3jJ9jcHhz9wAfHKnBW2M268gefudT7j",
  "key35": "2MUfMgiHh6xZ1CJhNYrUoUzCgkUgQmbzBs2kB6wUTaREnAXGNTYHiC8MN4RjQSKu7dvdWBGVppZEzagWLjxy9Cy2",
  "key36": "565gfnBenE3GzEtt3ZFDPJtjToYecVvZRvEgshA1B27QXpyewWW5KnzEw2EDmFeTr4o9KGr8SDpgu62cFU8vHbD5",
  "key37": "4ygxE2LDCpMQaT2oZNzT8Wk6UK5sK5kzo9gzW3aCrUAvatKX42x2XFdc58f5YHRd97WUnVC7XCjJksgTVmmVGsxD",
  "key38": "5qzn88EUBKyARQtvVBc1xD2BTtupqVGptXubhHz6xJ42Y9nRKdW9vL8L4c8xPQtES4D1o6FAfBEGFveLWBS3LvA6",
  "key39": "N5H6bU1z8KZADEkAWYURXLnB9X2mA158fSRX646BdDtxcwvpEfJUbuSuJxrDzNereLxDZrpXxxFiMjb8YptmnHM",
  "key40": "3J4QmMWhCKQpC1tRCQZLAkEoJ1ZuDqhhoLZ3vacMGgvhDKwsJyRGSzACMRZWNwKarLkxRSd4mGFaGwLFjwHkZ7Pm"
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
