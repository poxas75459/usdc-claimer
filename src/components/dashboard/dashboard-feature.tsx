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
    "32uSgKnrmyBRdtq1eVYpXvN1rth6RezrR6EF3Z7kWjEPSjrmyXMCmsJeDLMyW5u6REem41mZ8QQS8DVbsadN3YYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q3LsQUnTAVdbQEjVeA1uLdvdDwqxNJ8FFv9vv3AQnazTi2zJdZQkzL78Qd8qYyN8tdohoFYvRfGEo9QNQhpnHk1",
  "key1": "ikYobftPNXUF5dG2C5brBVkVQMUi7Zr7JDX82GH9QkPmVh8p6Z3hnRoex8Nwm72LwUTcyJsibk5Fu5bgd5RwLwe",
  "key2": "5djre7K2dsNgTa98VFmWXNzCX76CM5hTZR4FJ5hjzg9DaVQG8LeEsxsM7mxmvY2TNYrXQTDJoR5hj9jzRQqQCmPB",
  "key3": "3iizkegewxTyKWJJtmD5tc5Mwck1AddAWjF4sMywtfHhzoUY6MoZiZNE8mSj96auGGZ61yyjBhhyERYHWiJZRmGn",
  "key4": "53EmBPcA7ojwbmsgsfGFFe3kzodVpgfKnKFhhMPd9rDAdTgP9HPKa7ZwBFVnmAs3pUnNgATf4P6XePoxaZFM1TKr",
  "key5": "4YCYkaZTVfiiPPgHJJ6SJKY91Gyyeki3AC4cUqRwbcgDQunB6XUzac9tZMkBt527Fj5nfrx8id1wvdxP1u4pv55N",
  "key6": "4f6QfZbjpNAasn3hCJ4GpSk9iGQzNeXuSxmqfcJinU7HZjWYsesm4DQTu6nK11Nf2j6Ubos8Q32441BiFaupsJZf",
  "key7": "kf2kJjbHujTw6FP665LPbUadb1BBaA3cZLZRmDZZ7PSCfpRWcgwad4UuDMy1BNWMiQMAG829RXBRXV6J9VG8PVX",
  "key8": "4MsKahhj566G869ha9iwEsuifANZXDmYdG8RMBU1y37otv1QTGtpmwqXA49kdezanTXeakV3aa96YN4nGYfmxYop",
  "key9": "57tvCk3LevM4w1URsErTNf6cGGVWfY8i5b2tRVFZ4aJzDRH5zMBuQ2boibFu8VepHEih29iedtSd7ufLoRqPxZG6",
  "key10": "5DLojbZztuw6bJpeadLLA8ZJZurwQGM6BZ2UKGmkS3sZjg6hQGz8jRYG2Xis7LSVTX4nQzx1dMk6PZDawGXdTjEa",
  "key11": "4NHR95g9KN2Q3eKx3b7t9fpDDRr4wVgDbwsqWaiwhfMSDRdgBgM5XvNmsR1UkRJCfyrJA7orqrn6LVhQskds3BKL",
  "key12": "3nfifxFtHDP6GYaeNdfgPGHCmtHbRiLGMYheKLs5bBFTWR6xBtn1qJNwQP3hznan8eY5YCw9ExDbXaz73YWayuCa",
  "key13": "3kYkS3o4hL7bEa4DRLNU3eZnZmPJYfPCPBpSDSCr7QYEMVM3ALG89cKE4hRAaUYbNrGM62m9nS7UePA4rD3i764c",
  "key14": "2WNpJRx4ZTLhuBEPMEAM4Wt5SnmnFj4Bu23K3Vx4FhsU9MhkyY11UYMT4Qwv9XVjczvTucbQAyHjxLtq85rqu5j2",
  "key15": "4CQt7aky1xfB63GcpqHZzQFkG6vaGmdZ51h9qNd3a95mPHWCWkfDfMGATNv3zcYqsfGHQ1rkMDnNa7K4225HDPB5",
  "key16": "2NbLEZc4ny5PopUR8tde5aYGPHXkvg5Mm2X885Evs4qXDgxNMKFvENxhAGvkZr8ZqHtFKrCjype3uZn3Vy8ZVBzV",
  "key17": "3sNL4mqATUUc9v7b9mtT6JnuJrapi3NyCdNVezmWbHd7YuuLKajy9uWsZfr5oPDzoynP3gUM7Gw515bg2KYH5njQ",
  "key18": "28swgZxKzYhQJmHwRUmuB3jBCB1HxtQzY7UHpo8EaV1RwCesTDSGdAoYK2mvmUu6TpJ9NXV4zygRprzsyKfTWEB4",
  "key19": "4hwBFWdincynU3xjw1PsEvrjRXzY2VrhyyFfPTS5JPR62Vrb49Mk7Kt2giWuWmRFKVizj9hFmWSMfwK4GSmGEJ8",
  "key20": "4FgxDSqkCg5X5uWroHJh4VUYbY8vTCfpA4hBPWD3FVQYeBAAsiLurU99Z9aMvuHZk5VKL57NBeU8VwAm4WK22UgP",
  "key21": "5AXke5Z4AFZ54TZogvxyeYVAvZH7fEuJWQwhzcgvGYmEVT9EmoB2LC1jiwVep9oyGZZ8Atqr41mnVcmw3R599p17",
  "key22": "5HWGiwF7MTgEnfEqwGaQtgd6Djur3HyRNMW7YWBepAGMsX9ZUkeS9YkrVxiX2NKKKPMRvQLCfcNwdbudTLsK2RcE",
  "key23": "4LUgxjXvMDZPUPmGViLEuBQNeH6Wc1CHpdHULSXsStohNbY4x7jMpFX9iwvyV8uC41NYYgmztVkGZpModh1FiwxH",
  "key24": "37LmbDjk5r956DBUrLdEJQpPyHcVm8PQRVzppqtS7ixxL9T3n5nLG5Z1SJZdSFvcpbde41AnUMc9vX93QkweLCzH",
  "key25": "5SbgLN1upfFY6TjAvM5v5M1yqx4QmkCNyfcDRvTry2ohxgNhe9aRetZQN5k4voQqqvMBrVaAoQxzvoYuXqa8k9St",
  "key26": "4HgTiudXHVD6eejuSW9jiucLZwL6oiuXinSHS3zDwWzTCryakZMnnJk1CEMpRVUyh8ggZuQSPv1aeZ1krV65n6zM",
  "key27": "Y63N7gtufNht1AzS2pWB1Nxh9DVvyy5QRMAvsrbxZPTzuBjRPwePRCfANEVCR1F58ZNuY1H53Hin8XRAAZUc9oZ",
  "key28": "5q11CH6rwpptV2aTH4yYsn1znPmpi44AeYho6GPfoLEinhD1YErns7Jxhoz1ap7WQf8DsaFthsdiif5W2jKChj8D",
  "key29": "2FMieSkNWPgXm7fcu9vMx4GEwuEhMwgk31iqBhuwtgipTccVo9s2Rd2VQpcCGijq874dj7Kdu236RXpyq935voRS",
  "key30": "2cvY2J1MmGx3io4sUeMM2d7Fee1tWiauWcJs1nkbWGRqTwcGEmhudu5nJ5qCQwD7UF5Gpk5Zij6ov83mFdfFmmHT",
  "key31": "5VQj2vqo5oJWwKtX7QoNbUsLySJbNm6tr4PCoLpfgJYpsmGTXj4cNzv7o8DP8VUAnmQPr1dEvG8zrBeWmSETp2Sm",
  "key32": "tM4iEbKycbckSBqoL4SfvKztfpazCo662B8y5WzuDEaxYHY4odgn3BXttiv4KLQeNyAUiFE32frhcqTFZ6LWDdT",
  "key33": "3o3sXzgZ9umupfhdKNPAwzazQnf9r3G7jY4ZyeCAwBF6vhXYGSiRQ2ZhvmzsnJTFzWv95xS7XNdbXDR4xcUcTaCx",
  "key34": "3VquyiJxosA4sNVbNy5ajoZT23XRAn1qhHUZSdz1orLHAtkGeQHz7F6evxkfT1AmYvsJULWrF3V8xSsMzK7ofAnU",
  "key35": "2Gskbi4Dec695tRBmHF4EjozWhoPfSqj5pij4yEtVCLQqq18xjuRqRjK1ngK2xtgkn22nKx2REhxnaRWXWHcPYYM",
  "key36": "5DJ5bN3VYiEZuH4SvgEtYprZUnvEhAQKb9QRnXvsJnaNKy1wayzBjwbEs2Jy99UJ7eX5RTFC1VGLTunEFepPhmjm"
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
