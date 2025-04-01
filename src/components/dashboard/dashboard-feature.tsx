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
    "Hws61juFDs4zVqSM8YLTq7TEfognFNqBVRNa18qf6VaYNriyhey5xoFJHGEuZkjFEQrUnN1Q2TeqYL31zGkPW72"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PcHkg1Wq9PVvETY7Q53KVZYCfFxDvmQrNEpmSpgC7yNcyfafyrrAB5vdT6j3U8VHCtSEaFTU7cDppSrqfmw9mPg",
  "key1": "4kPzWFy5obfTcSczifSzkTCBCuA83SHHDCk1wimLjqeYcbz6fHxgKfcY9fEMiBNsicyUVyxLu4TqCHXaUA9vPbQN",
  "key2": "mh8vGenQuHZVCwpKskQsy8yXngR21X63k5oGyi2bVZm9PH3inn4yGxpLBagmyVgUfbeUsNMw9iinHYCFQ6HLvmf",
  "key3": "3479SNxxU6ub6UEJXAgRcB7hrTed5Uv6oK6YXTr4eTorCSSpXzC5DVboEYMGRSHzSiGzNu8fLypM2xSYoD9TFoU1",
  "key4": "26TnKH9MVimTTxEUPSzVBJ8o72Zh3r91bsm9sKF4FfGBxbWmtGhB6wGEiPhp4WB1gXo5mw6Jb8Sfha7ymPYsv9nj",
  "key5": "43QrPrb7TXsHudKL63kKgevBesV38vTKs8Dz7L31W8xzjHHNvicCbkhFuEGNE54yb6sEyqGzoaSx8jXWT5SwZqW7",
  "key6": "4VYY9xUa8sfJUrhMu85de6mqZEkjz5uZmxDPJ5z4fLV2GAT9iV2ZicYUQbDZNzJ8Cr7x4HtKJ1GnCCa6tB8NHimk",
  "key7": "atCGdLWYwRLbys2WhX2ZzWdYB4cNHbJ4Ru7bcoJ5daghWQBEgVwCAgrYbKuv9WGyiJ6CZWgscQySp4FdabkHxxn",
  "key8": "4ufuEvQqgxCn9atQiVeV2DcE7z83eqoh3AeHfVAf2fH4roCqQh5b7MVtzas59Sgpay8iDESnAX3ziEPBraieZ7QH",
  "key9": "mvDTmMWfywzLAcUh43g1SE4BKDvLJcjoRVGUBXP1kRKm3x7cvTQYt43NktZHrZYYQGPrw5zYdgbf8VhYJL9ygsR",
  "key10": "5MFtL7FW5gm1n6eNhjDDMsdUzv8FrXhVAVa56SFSSadwKVdhiQhbc1TjGLVT627obTyn6TURbPS4ZjY8cAWd33cp",
  "key11": "4UT7fxEjtK1HXR1Y8Ky9eq6ERSk74nLpedbfMM9ZhU25UpRs5smuq9aMDbAL9Lj278uo3NfNQmpyiEw5VYb6YxcR",
  "key12": "4SV7fRuSe6E2npuPzxyu7PRLkGhtDpkSVPo9wico4Sz1nwusNmAF2yVxxuaHLkbk2t13vNXzbRVyZR9Nqvr9hVpD",
  "key13": "54ZKX91pHnM184YQojZ9zTNiVCq27aEzSBoCaCY2vTVM5CXniejaZgi8o9sxayociNcRmTKAQSJ3sjwWzFXTCqL5",
  "key14": "2iqf5DRushxi7fXPXpzv6dPhoSQDyjjwSRDn2KqiN2MHhwhyFdhoNZZ84tsNZDs5jCEvj3ZKVW3h3pYw2NodyAdZ",
  "key15": "xJ3VEosFr23VcVGrXqQBjz6yqLhVRkVqdEbidL2eamKMBmCLmBhVJ4w1rkk4JZoh5B4QC1P8rVKybk25stVpo22",
  "key16": "2jarK34gzs9WNqz1bcVytzv53eaDaDRGwuS3gNxLefbrTemejUDupEP8mUhNYjy2DbxMCU4eRYxXkTWxybTwiKtM",
  "key17": "vKz4qqaCppmxkUtB5ccrMsh8tjd3z4SAq2ZjPKvsar23tWybUsxJUHgMrepHaspKYoZJFtFKJ24DFXgGr24psGQ",
  "key18": "2H5NiAhqnSyeokxSnbTuGaZbvAhCo3Nk2ifnyNakxXXUVUWiRaGTRdHR9aewGqPyvJc63kF3zVvbER9y9Dy6YQur",
  "key19": "t9QnWrknt24teWX5NaMtCjJf2zxyPgeBrrqY6NtVTMo9e6AvgfLasiNs8kDvEH9DE3kE28iW7YN4SmreumwyX2T",
  "key20": "gZ19s7S9krL6HkmxZwR8qGv15uCMQbdAdNwNLesGEkoPeMYjCrk8JY62PPh6tnDHhGEMdTJMvwHnreMEWkKYLSq",
  "key21": "4xCxywV34KMpntBkYcaffnnB66wk9ojAN1hRPzhau5BpPZjC2AVu2zVGpkRoxoxNCy66yxaFGa3X98tmHmpRfk8x",
  "key22": "5g629poGdP6454M4FBnciYpHpAUAG9fbpg172qV5t9ksGyfkzXMe6L6KgREcmsBGZmwHmrdrj5uPVzMSckHUFX3e",
  "key23": "2Kyj8mq5eXTPE5Zam5zN6g7VapNBi5jvrWnCumYnGBzhCLBL8v2Pf3evCQCVbJQvqYokAH3dpabwFzVHSpvMaFs2",
  "key24": "4n5oKgPWkW8rrc12ojWhVEgcCtVBW3wzxLdCJ5ekvCfnD1uFX51ZwfpVJa6RjsrX8Aj4gPM7KKj6yDjzbrrDdcz9",
  "key25": "58SnSLw7mGvVcgU4g8tyu1Vds3kDVMMaCjRmT15rSTwxyv2pcLZsBWXm7WQcpZpQXWyAVdRdJ7HpAmRJqHNJyxEb",
  "key26": "2dzJmYBB32itRNeMU5tHwWLbxNHQJ7pwjKxVYJS2hXRqFekoPmCo8shGw3ajDqB2A4Nuv76WUAx1czmPT2rCSr5Y",
  "key27": "2EVGvKhn4u8JKQgzFnzW4uSrh2syDLmWv2nEooRN2PyiY8BQ8CuWwgBPabUfq2rtR2FpVVdPymM2RLrfxf24KfJg",
  "key28": "3zz8JCcp5fNMG7fjupmjfD7K5XgVPT7kPKcLYKGLjwh9WZjYzFgynD9zZ56cu6M7ted4JG6VfvuoC5zFs7XCJ4D8",
  "key29": "2obTeYK8cCEN5urikzDf6iNXJyeBEdJBDhJk6zY9SGU7oNFo4WgTk6xN1twfL1UcZZrTqbGV83g3fuoXtCa72k3t",
  "key30": "2XRie9atjHD2GwJ3i3dT6JrZX8SLhbnsPERkbHXoKt97wAcgprKzLyScou18YCq2z2NpzYAkuVyd8BJDKBuofvCK",
  "key31": "3bCJfxXpim1EcRW6gEDc9ZqAKRDrPZrNyGVXDRjniXPiHAJXzuYDCU3SDEUuuEzRzDk3zKY5QpJHXbJ3Ebu2JLJS",
  "key32": "3SagoyacTiMxw6BQeHhZMz3u4pGds8vdm4WtfYyZKzdJxMq4UQm3HVJG1LRiVWa917ui3pieqW8NgcxnfQZHQLEh",
  "key33": "UqSq7F9Ad7QnXH7ca1KzrNBFXqb1sEVGgy7KVcZqJDoFF5qX76YKNa8BHGpPNuYz4FmmjyEk5aLJJGKTpNWfERy",
  "key34": "3xCHGYHomRwx1egE9CNmDoWL7T9eYNXw3wEbskXgGbKHeD1xxGRekzaXQvGQ5Mu28dhovSz66rP3qkfthNpNZEzZ",
  "key35": "4G6ZE8SrTcMrJAMBPUunWq6dasCzY9NisyS26F6vKuHESUMijNAYUqR62XjhpLPQFQCL55UsiMgEdRWjT53dWqVX",
  "key36": "2V5dZa9B1tdZzenQLgmdzdG9vd9Rj6oVwxZGCTGtGQi5ZeZhU6ta7wFvKvXUjgm72GjMQXXMsXBeEudNhJueRVq8",
  "key37": "3fwu8AnSoGt4b4jQzC4j3xXZxeH7mUjkfu7bq58rmDUmes2hqLxTu8we4XqA9jysqVdwZgLiCsugo3QU2SmshhY3",
  "key38": "2qetH7Kw2bhxUEPoR5Kf827phqkY9KBTSNog6w3sZAua9Y9o1kG1Nim8f9pNkPKBCNqsw3LCvGshgNv4GVedFiJe",
  "key39": "4uNDbMRUCMeBM21BRTymmyPQPxHSoZyPvATJdjGzXv9uvurftSYpZ3SpS3VrgCVLjwRw2BcYZgALP1ewMct9x9Rj",
  "key40": "4zw2bkCZDVZwzXZM3EHVepF7GJALJUvzVnLv35jEMmSgYVhLd6yj93iTEb32CA33T6n1vvjazheezBxpqd3oTqPm"
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
