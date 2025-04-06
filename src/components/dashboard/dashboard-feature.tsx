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
    "3nYZsVBGdTJhfCvrHiQtnwMC5zmZD75HttbE2M2YXNKjVHDBBJwCMm9KZH3V1MAvVjZjqHVWYTKnU95M7drFapiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "225jAxMBpwyWTmLLhGETVEsjqMb7BawQuk1iXfS8ywcJ9BvbHQ1Ra8Ghad8TsebRYAsdNQJqU6yUiisry3KQ1LUq",
  "key1": "5qRP43NbTRVM4p1mfMQnVZVwmuCSD6hetWuCaUZqLZAofGeag8G5ZxghVoNm61fft6jDuVHUF2nAfooHLxNJgVX9",
  "key2": "3VV4K2ZDDU9hJStnoTZ2n6FQryAQvGwiPB4q31umBZAd8fsXCyrNVQdnjpVLiDhC1F1irb1TpoZKA8gJnDzbgYuC",
  "key3": "2BKguZajE9mDVstjpDAG5Cskeq84Mn4mHAELHnR4kg3sXEoCshTv4Bt4xjvEmjUbvvc7eYQ57HhVJYWBJuva1JUX",
  "key4": "191apmp2qSub5fDnUmAMEuiMFKdAhHyv66p5ULqr6VZ1kH7eyn7aqmAQs8rqiTbCX6wcKZx4womxz9t5UF7gcYA",
  "key5": "5NqyouowcoX8C4S5THGLvFWHymrRgUTSwUGDxGfoXY1mfpJasadchSuj3msNVfSZWpAoTHdoxcxse5AGQqTgkPEb",
  "key6": "4Mn6qUWGTSZLgmxTxMyudsoR7uaA1b1jmxwyHuxd9Mpu1YigxDJ4iLSShh7458hnUYF5TvQkv3XJXoPPTxgoaXAA",
  "key7": "r76YmVz1v4qUhHfJoK6GqTdWVHUaNxYxQjbwwhpGzHUz3UTzmse1ZaPmoePgdjcmXUjQAcu2CiDnMSfRd4wAGtg",
  "key8": "4VHrW6KF1G5Fx1tA4YUtKhZqWSnoNUjZ3bobCjhX6esCGXRYphX1yUhE7AJHGZ5YcvG7yw1qbrGpLoYQH4f5BA36",
  "key9": "2rbX7wR3wG4wNWkvDJKtnb3pEBpCEhAtkU7sd2rS2MD75TJCocfFZTB6qBZLCJPGbPMBasj9szXW5n3hb7yABeX",
  "key10": "hgDoBjcsKpsBEi3rENyLRYC48Y5wUGgG6KaY6mN1WWiYj7SLTyH8g78pUsj3U5n7FPZzZNXratiAY8vjFgWKU7X",
  "key11": "25dGA7uX97uraFwbTgtVQ2B33VhqaSzQN6qjPN3pasbCQiQKUe19USfSLnKgTiXDraAXfYSpkwUS9WZRfkKJiNei",
  "key12": "4oyhEAp8nozVtaut48252wJDbig4W2yxGh2BsRgd3XCTYXTfMCKNvj9Tq6pj3TjcCBkyhD1ZvmBEH1FgYo8WYv19",
  "key13": "5akscv273HrTS6tkupUF5zGR97t8NQwfGgEbef1DTrEoM6uEYXcJzftAD5Y1aGZEykjnmRkf8bQmhwKn1PefKXLf",
  "key14": "CEUQVXjGfk142FeNhEYnD6zY5ZKJ7RSiyypWtHYi7QRmRaMm6yEvrWgW1sAcnKF78J8ukf8okq82tbW8kwBaZQD",
  "key15": "3xDnHrw2KFeCHFBFTeihKkvEPVLRpYamkn5cDot81D1bdDV24xoWP7886hNPbafJEcUs2oXsyzmqnVNtfULCy41Y",
  "key16": "47hYpyu1t8SfN3EH2zXRqnMmZxV8tYCBsrQQCZVbo5zw4dDbqqUZagTryEPNT31kfj3gPM9k23ESZjwyJYQAaYLw",
  "key17": "gm97b5rhCYG43XRXsUK39nXu8iM8RDnkEHweXYgr8Wq75peN4iqeJ2872sB1nHhDBQmWrbT4dSGWiEyJHyKAaTz",
  "key18": "5qb3qXSTiDtS1dwpqA4EfPvsj1xCBFGvZC5WP2M9hmzJtr6okQGKRvY17q3JnV2gy7ginYkUUgYKDdZsn4UYEAJP",
  "key19": "q8U79npZCojHyamZgXtdamM47Btv7ahyiLFMSy1Y8LaNj8TtxUeQADTLQqtWKF4RVqdxWVh5cwRgiVD7CW35i4i",
  "key20": "2KwfWm6J43Ga5xXUQtZmwNHttTSGjT7eJQV9DbW1HHLBt23hweaaBaXzCbLTFYcrchJCg5J42PVCZ9j1squDM8j6",
  "key21": "4oMkZYs1ptSrPHztpxJDN1KuM6Utps2nutR3dMBWDjNfQQJEn3ZuC147kaCQhX5QP5qEh5jfuPNrDFpN1RkAgCct",
  "key22": "2cedEGd7rNg5NQzfetYMPCrKWoW54Fig8yqpdY3MsjGR1bq2LNVjZfoGXuomU1dhRZhaHPa5sxkNXUQeZcVpAJ6f",
  "key23": "4KQT6TDLTAvWriTTwWj1GPs1gMVxEoycqo8XhJwJs3f2AfZuqSjcsr9n8AvmS26bQeEmpqkwQ87WJT1XWRA2ZBke",
  "key24": "2yg6ANze3eDRnHRXm88v2Pme9VznfhHqMhgtsexkxTfxfLNJQ1kJ2fL9ybzabiiVoKLLw97vcZioQav1pJ19Zh8j"
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
