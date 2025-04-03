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
    "5ckCjKqPT8NQwHwfuypW2hsYnR3BT2poUGJF6V8DaLmT7Pigm7FTXRCbXmWb4xC7Xy8sihK2Njq9uk21NQrDx6Ug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dBtokiwWNXsd1RyJ4p6MdkGreYFEPJoUbe1hN7MciNNW4ByAHsfeNKHz8w7jv3CMaY1JhCXgdpuVgx49vwY6ERC",
  "key1": "3M7GHCUiDcDHZJhotorKWYUzmZzYodNbNPsK3uqKDhVcx1qwGM7PJT9Yu4X6TqoMpdmq9X7b2JDf62HhpzqVtF44",
  "key2": "9gAFi9zvhN4Y2ysC6xKJMrTCFTNMck3xk8Jomx8mipt88nC1jnuaUtoZYwqdytzZuUEEPXjhxxYoeuRkmBM36aK",
  "key3": "3whuDonxJTYUbQ9wQngF9tNPPcB1F88b8jc8ULnyTpi2QaJtfa57TWgr6CprChp86StNo3tdHouM7Ggu3WkFK7ia",
  "key4": "2yz3sRZQCBwbc4ZMY3y2voyvqJnYkVqJoZnzas9emLSqJ7oLHWAKKjRGAcyxMa3yve9FGjFaTTEmryDy6ecSfTq4",
  "key5": "5Dj7zkfwSXKdXuqNwZ1KnhQCjvups2ARXdn4riZMJJGZ1QD7ZLD2kk6GvGbymBKrYxZEe1T4pFJNmLF6tg2VwnUq",
  "key6": "2mFLsGwDVnrMcuH6V3V5xx48PraiNKY7hdcHb5aX3rKjavvqCz8BG2uzCVrD5C8L9tQHdSYMHT52emdJZh5n2Efc",
  "key7": "57MfqDXqsnUSpNG1Hsf4KZ6H5HyM8hJaGkNsxiebtqvmY4yjzHs5X6WnQCHsMXKWFthkvRB3TXDUWprbrMyKn13B",
  "key8": "4yEjYT35opaUaKAbDuj6Ud4NX5dDrU1dWbmADBtJq3s3XpNvyGxPa67ULNtUYEHBtd44UNGCGQhNGHGFkkWzVVrX",
  "key9": "4sPRV1bv6v7mzmHioMazxnqkDcK5NdrwHTyzeh3MNihy1fZAkjVroGUHux9rtsNijVeAMX5WmeEEhM18akDwhNWA",
  "key10": "Mj7zBgEjKRcyWYnuoHS2o8ypMbXSxbeVb53cnFZuYFjHRzUYVKyuKyHpogbDZ3gAeoeGZidSmXvg6g3TDbFagBx",
  "key11": "2mcmTBgwqpL3xGePzx9LSg6JL7KCpsrQD9anVBNSbqzHWD1LjD9snhHseXiV7JkWkc6CCeNqeZLzgfSBHPobUTLS",
  "key12": "4JyVcXu4QHvzPjvqxPvdg6T9jG27SuY8gQ2CBRnVWhR2C8cTKwycxCtpZ3TNuGj8KoXcVXJ5aJZ5UoBEnK1ggYFJ",
  "key13": "377YfFgjRFD8zUHGzAn74VPpQnwexANPLyv7CFnGLMtS3Szhz6YpskN2oZ9webnMWXQt3esYgb6sQAvpnJwHZpGc",
  "key14": "268HRNWgkMnn1UZ4UMRbnoUQ5nim6tYZHh1PMWSftHUyzHXAgYSrSKAheT8ZxpSRdnypdC6p6AvMaTWUnqhr3EpJ",
  "key15": "4p68Xos6kXa7Mx29JmicYEEHybXJCTdtj41qwAAG22HTt46h6q8JZr36JZrgp5W7jGybGWYwTxU7hzogRwUNsu5H",
  "key16": "36NuxHmMKz2iDjEKZqTCUdkGbmhLk1Vqw6CXWhaNBGaP95mydhk574qCunVTkqbwzbyzjzFKCRHKViStHsGUVu6E",
  "key17": "4wWrpqWTkhz5r3d5dxekUcf9rSoUr1CXTdwcybP9bWBLyqqgopBrcd8F57DJLnpabNNJZJGgEm6oAxU4AgCSVptS",
  "key18": "3rZ97SYkKNdqb32MAQv15Bw6FvzzbuXUY4YHzYwsdv6hTdve43Jrajn9hDb3TXFkDD6HyRjVi6hFtX5LmiinnAAr",
  "key19": "A368tAhaDfKEX9bVjdfMogRfoYADkX2UXmc2YVVbtZ51SusPfLgcg4BNfMkVY65B9stT9McdRrjJDrEzfmWKc3i",
  "key20": "4o4YpeDC18Nk6t8p44tQoKN5QLCR87D36gGBDCWAkHg2MokzdPo8ervYEe5eo8eGiNZoujJ87okrhmcobCuKsghV",
  "key21": "9KMmv6UkNb11uK6UMBUjHt9rRdzQqakptuzYZfg9aiHRTrvPivt9kNhHarQm7Bkt8q5ZTg92CW4nvKAhCuQmLmM",
  "key22": "38YuxeugNugczuwfho3JZa8Yn5GQmdZyn2R9kWoS4gHqb1MZkzGcq3Tj5pJnRQTSKAN7AL9jTjWtrfeUri6WVqCH",
  "key23": "4AzMTXhKvYSimAdXHWjMnZzVPQh17JK5mLvDaWLuZ25Y3njPxPLeM3YFYTiVLcS2gVA3Kw7yEhrBTFRz9Y9K5T1R",
  "key24": "Rxsp4q2KuFYrVZCgduBW6tXfTJT9qEj6UrEAEqnWcMoqAutnkmwdfD3Sug7HMEYBBDsg8ZnjiuWkJvTLDr5MMbW",
  "key25": "2h4Wz2D8zdBg1Hu9vtjmp7BW4aXVM39RECYJcmJ3vMPrqpHZpWZbQbm1sBFhjXF1CwReFDw8YxjVeQBdWuPX5RKC",
  "key26": "2QBwmznS6yKsdVX5fwww2PGknzPapyPxWaPw2QY3BZbXLNwduM8KcNPNn2VuAoz2nonWyiwpVEAbcUqqSXqRT2ta",
  "key27": "4WG7KWvfbCy5buSDw69UZwWzqqNdcQaiZGwGFV1eWPWcUE5SrWR2cdt3FkvppVM5WSSEjYV5yNZNgYZSPG8vu4WA",
  "key28": "4KKpVY8HuV87QpJPwZzGFd3vuRfQStSCmtNjXtCSLce6p3b4J4AN5ANTw8DNQUkMkCNJYhWMpzdc2uxHdsitBRnK",
  "key29": "5i7HdrtAbuQHYvEFqHUR1SXcyZMxzh9PtdrDEEM8CLwJtsk83Q1ZyHTFkCQaS7u1mf56eMim8UwTs1VdJ61cdmqZ",
  "key30": "4pnSMHBehwwfJkk3xYbqiKrKBfPdE744nmDJwXmsNvXrRdtrCdXzDsZn3vjhnm1RMWaJCvGsjkdhHbNivg8W6DXR",
  "key31": "5cVWTXx1Vq7Z1M1DiA4oqzpCjEmfv3WkHPEKGMSLZpuhHaPv2MHB4XLQtDZf5g2TAXspU15goSgjdGuZTsZiAUqF",
  "key32": "4SUxFDLTEuso69C3MPUefUwnQ76CqjzKyhY3MPTF89BAKXLwCZm1ypo4nKb4twpYrcvPWwmgycMLuQjQSYV5UxRy",
  "key33": "32dEvSPpwtoDcgf5RwWmXATrProcC4gjpPZGoAWQYcWeJRUv95cTy6hfaCyxTzAgLWaQhGPRm7LMxMjKUfKTQMSo"
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
