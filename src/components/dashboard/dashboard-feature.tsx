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
    "562G1FyEfgABkuuEQKqXwywthmGA6yG1ydR1vaGPJFyWnHkT4oAxbpcAZ6mrJYSTegkX3m43a3D8ZkteqcxqRo6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DTgFE4PmGob9Zbn2pTEgH4MgKyfo6h3Mp4NBACBxU86CeLaRfppxQ8WyrC2MJxi3Fo3XkahGY8yNtWQdfL2wBNX",
  "key1": "5i3zPTk398LwKbPjWPjmENgQeAKdAhS5KtwRxGdRok67Fszk9qNNZf3vomaZ98R5AaAunwJCzYKUnJbyakjj3HKZ",
  "key2": "5JjvZviftCUsXg37amEGYjJwexJfxhW8QRKQEaKbNbVroVMwsoV8ZmC8MN6a6wfvUCC7uTD74ophs4swzNpj1sSV",
  "key3": "3hV7PjzKvC3XghyU5fwPTkifRLWkCKva6d3536CoB7uMs8pirUmp5qmBcFjwxYTogWgXA9RpzhRq5wtd3DhRbnak",
  "key4": "D5SHgHv2eDEa2UM7LpvGEDydYVQQWvr79x5RpC4LLVecJ6uW1RknfDWA4PR8bYQQgmYauzB46oFxeXK79FwowZ6",
  "key5": "5sfymDX3Lf8UhktwtzxWDcGAzGN3EoQgXpNfm5XEAoe7ZmRTFQHzgN4JvZatXnyryvpYfgn19UaHu94cxzACSePC",
  "key6": "no9WsEo5puQbF43rYCARWJFWe5sNPsmVnuYH99M3ajH8Vaez39o3oAPNG1xw8RNaT62GP5ijd7PRR6tHBS3KTVn",
  "key7": "3FQc1kd8bM1GWAwjUNew9cWeYdUHViKA3A3UBrqCqvycdH7gxzxdkNwv9ufhokvCiuANCzBVU6XoJwfEaHjwsX6n",
  "key8": "4yp4Ru9T7D2ZKx7Kv35zsDkLys6eQpqCNVeUPsRzuUzvxSwNhhf1i78pwUBCQWu7tCtvBWQVPb4KzKW5AJiimwRW",
  "key9": "5tWjpU8evaxpk9uWmciWHTWQ9HDDq2WJpDwDuxSaqVpHbTcCvQCaDByX2K7W4S68brjZNVP49Q8ffJvRjkAH7Q5v",
  "key10": "4sd3xoCCJ1rYbru68b8BG9pxedJSNyLXaSU4D6ebsWBZT68ASCUwYZdNQ3LBjX5Hm8sDYuspgT9VvR1cQfTEjKJT",
  "key11": "NmsgCcyKTrjMgNcFTpEvp2BsdQ1EmHHEXSmoe3jsge2jSpR1TazhHXKWHkkRJM9yg4rA5S6wB8URMXMuUZ9D3Tj",
  "key12": "5CbcgTjktiAuywE8qfYNBGvdX5LNBTWKqzQenadYoHyD6V4Qk26NPX5uhtBEhmTPQGxWAdXHT7dDxLMd2kk8ab6B",
  "key13": "3z3MAdVkY7oJ5QnisDyPSUNMYhwFNW4p9i1pHD3QkDRpMCeGLrgZfLdZVG2H5RULMbXtse8uV14QAsQ8B2CQgKt1",
  "key14": "Z1mNZwrh6QxkvayGEiq7TzHYxndqP16WGjmW2AefJWHBNhqRQwMrCMF1KdC6iSynLPy17UKfr9PNZBdvfwzQiQ3",
  "key15": "v84zXfHbackmRYyEffDGku1v1BZSbzjNwmQ5ZCv16Vk8s9fNjgF2DmA5FPyre3GZtDkamo7D3BfWnprfUHH1s3D",
  "key16": "2aFjWsnFvoWHdJboDquMeJ77RxFrjifFyA8pRAT4igKL6UwGyhwTAHSTT6SnkxurL3XS4YRF2bn2h4BVocaTWFy1",
  "key17": "4aM4W9CwaMtoa2JbMEEeA7R2Pv4PWCqzuNp9ZUSeYRJMWoyzJsYkK8pZi73XZnCS2nsdiggVj5jc77adSajei9M3",
  "key18": "3JwZ23UkZru6kSrUKxsJoVYPj3zASx6DpTJNSZhX4t1sEZ8bUQM4wpe6XLVPyojXygP2N6wJ4GeQhWAdW9RJ514i",
  "key19": "3ZXPNpV5qVZBYfipsciRbJAo43dYiMxFBA6CoWHhkCyZ1GRvScFQv1Cpwhqfv5T4sj68Ur1SQZ4LNGjR4pafg2JB",
  "key20": "3pfdBUA5mTe3V3AmA6Pb9NRGNcD8wDX8qmBZMT8cXTcRbysyXESu8eBKXX1kdZ2ruQr81SdUqQrK6auXeCfryKLW",
  "key21": "5jF3FSPaReH7L3wuhQx5nf6oAsQJ2KGaFoh1tFyqrM26YyBRHG1YZHkiiLVZxhtMgURWDWQSRKJK22hHtppdjJUo",
  "key22": "4cepbK7W74mbwavVbB9JyR7yJQMoNNh3NcLfDJ8npEEPjv6XKgFgm1X6gpEhs5RJGTQkKe4bBfkRLmoXGedFiRjZ",
  "key23": "4ENd7y37bkuJnEXwfQw4LR7fNKu2Hx457UyHQ8vMCUiRg2k6VNBS2WheDgpsQxM8eiekgfh7uyKKWiS1EVocemU",
  "key24": "22QAF4RjdyvhGh9mPfvwu5eXAjskyxomSAB7JsT9y5Nu49cqFvGDqMxZtfk7HCeLaoyz8p5EKyyXY5aDYhPzBNmm"
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
