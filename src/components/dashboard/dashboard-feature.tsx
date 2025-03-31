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
    "5RLzsPq6pV7Mjs1c1MrX91mN9abfh3iC33utudyWTEns3MsSsqMmHaHwjcSSLUPWmdHoXfZgk5RRNVfqepYc8oW6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vpamcmr9yYqUMX5WwD9aHUSk7Rf42ZBFUXcCmPYXkVHxqnUf6jzjHVG3M6RtqDrpmcekqW6f2bXXUJPig8rovw7",
  "key1": "4nDdD4spTb4TMEhUetbQq63J4WFkP1Je9P9B4yJQXcBdnzVecAyiLbfK9s4w95SBKASskm59ymheRkoXSWGWaenP",
  "key2": "3qZoRbXzcoMrhax4a4WYHdbMSBsYaRVmNe1RZPCSJYPrfNxM3qwb7upK1HzDKGPaHwLCU7WkJD9Z9LVDjNkBJG5u",
  "key3": "ej5hyYab6b8GWCKrAdFBnNAC2pwHeLA4pDVr2pbTpTGHCvmLnUAeN6mMENPAoaqkD1m5RZM2NTALa52hXfaJeej",
  "key4": "4Hh8MiNe9JtizXit7muLVYYTRK1KD2iLz22a8mRr1RmDtw19eADUwvQ5Ddk3YBvKycJPZ7Wy1GiAbbicod4jjDsK",
  "key5": "9wRkp9kbatTyxvbabLNjSitBSuvwpuWJLyWKwcBJGupVbj3GoBdfng1yf2LthD6H3KHQcg5XvDvHH3i4ATSpCZA",
  "key6": "26MzZjtLmj8FqkbNusQhuDEELeCAi2oDzeT2tEoqRSkw3ZqipabjdNrRap67HTAqQmX7hbSSDiFDUfUW9M29Fzee",
  "key7": "5xKScw5EoBfN4DyKkysZf7iAS3RxptZu2CUxoVg6kY9KbtLkh6EvxcJidmQxg6b6dJ5Qfg8wYtEqqd3SZ9BRMkSx",
  "key8": "3ctMLteX5pWZMyEFdZQo9gRJu2dKXLzEL7HB43QyTn8efaui8qLrc4NXHf7tDLwEe3VgciR69bdKB7x5nc95zi1u",
  "key9": "5hKGyn2TR1aHhJMBdSZMeuSArN4Yok4UKoYytf4KGSpPsX5PHA7m4noCha3AsiqQvxAMYbdcvbwaFmqdEb26V34V",
  "key10": "3JCbib2WX38jJRT6M7FLV5kd3KhTb5wy6mRjYeJkGvXxogZi5X4uZ7G6nkmHPeDxJirgjYqymPmdApfwdzBorN1G",
  "key11": "66RgRoa9FnNDR4916EGbwoYxzqW5iSmLmecLUyxV2eURFbfhEafwyiM126gBGBiEkPwQkAhFw8Jm9HF7hC9FkaNc",
  "key12": "2BobJnjUeQKYBP3LSFw9enk7k4aoc6Ci9Uudef8sQXdkjUuh4SWJHkivBVWY3SCT745RNHMGe2g3YCzSgK9zbEzs",
  "key13": "4Qt2EBPk5arPJUYYRmgo8XW4CNTkW8DBuqMjAN1Mq7bDFjnMM5PMfDAGPLCpLYDJW7fZPVbcrZRw57WLGtgfr7sm",
  "key14": "5BTDbpFjnwta76VVHgm3V9nBXM215DqbAcZwLuyoJmXCsgtbCFMTrHcW8YHSR2REvfUuVruFQFj5mGQiHuBrGSoC",
  "key15": "47dPmPgkPTPrvmeEs2zxgWFyNbEfYnitUtjiZAdW8LiWjepRtsPXy6yiBefJFFLRdFyQ6j38ADenyJbBFcmg1ihe",
  "key16": "3sjR74hgCCtLKMMcbnrndc6UxBXKoqyNxWbBTajA9qH3hVD9KHf24LtQqkZrRJP3uPSqCACyydjxcQDJbkETvi78",
  "key17": "5xUwjHZxJ6qWFJBaqJYZptawWvWtdVmsNhfDt5X5H2bG33FZ4DPDF4qZUh5sjieibkY1htDhN7rZ9SdZd86a3ADB",
  "key18": "yxiWrtEiksaswyUARRkZz5nLJNmnemyBTv6QKvgTGuPVe7tkyYdZEyBcUvRj3jSwPL1pTVr5tjfVxPXe2GF1t4X",
  "key19": "eJbvPnnkaeh1JJ75KSTWoQyRZW4F2ft9ejoubXEChYj5vDjXsuvQ7gjQ6NWvHm7QpUmDWCymGMPreF5xUDHfSxT",
  "key20": "2ekNvywUEBbtiFs4GinEkY6A8yeCb9Vm4YgCPQG94nnF6m1D5FH2tgF6SAw7STb3eEiqCTn9nHUuB2hgai1sb9cB",
  "key21": "5jrJ3D81jZCsMyYSFm9HsgZEFNbaks8yR3B2wt2WdPgETE97PmzDSNCaDkLgEt14LaK4RhWjz8KHcr1prcS3ozeB",
  "key22": "2wp19fETcz81ZxzYdivsWVukpMSpUgv6jZEmfiQizVHbkUGPW3gEE7GGxABmey1BDepTPTLBqnftertDYjEhLod9",
  "key23": "4srVDfHgNN2Sdb2TrbTAbMhQVAJ8qw696ZCXGa6CGbW7Y3L8VBuRErFMoc5qGpPHLqabTrN8gZxn25Yi6QxczXs7",
  "key24": "5XHUuvXKh29LJhaiYz8AL3xJQyokhwMQ4QRJYrMT2zcVQwQ4iFNiJpDKr2KzhDZywvPZo6tLRJ9yQj3EpD78najY",
  "key25": "31r3YQoGSwSyHkSNxWEUmG7WLWzMZzHaeoSW6bKCktKUfeoP5Q3LpTuLvB1jt1fM5rBDuFH72vJb7YSAMrZHN5dr"
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
