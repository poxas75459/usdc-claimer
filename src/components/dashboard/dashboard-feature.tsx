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
    "59S7DpP2vdEyD4KDCZkTiBRziTwircPT33a9cEscaX4dtaUpGPdUZ1c39BwTN94jLKfEXwkKT2yTawXPwzWvGGcM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QtGJdsYVQ2ESUtGtPgxgpT3PGjjBA8j6QRf3nr32WduipJMkTfFidQq7reyC1ZKPPqkiRFjDAKw2C7WyF7oTmNK",
  "key1": "Deep3i4XniCZnMH86KbfVWCyKsLKptpwVD4dW9s4GYDK3QV6pRRY9DVxT7BPXB9UpSagjWhHqb9s4qzQxcGY6CX",
  "key2": "5maDGHDi3A8YEP55qNMvUzKuHABvFS7RwqZxWAJBZvWhYjaioaaQks8eVuWpEbETkVD9rEx3kTPuMsSUCLch2sa6",
  "key3": "5qVwgXC7moF9iWBNMdWraDcDmuCc2bxobASF9TBdfxvpP1xds3DRtjQL5wEZXmM8PjGD67ngjqVmfs6dCLHjBJB2",
  "key4": "32aA4t82NbqAcvNwVFyEBzPKJinNvggxq5SuJtorGMfCqj6nSxShdDypj85WAxkEeNtVw5KRanPqQSWirYjJJDb6",
  "key5": "5ghDKjm96k12U4eM2ae7JurphPyGD8iWBdepptUmN6y6rWzfXUPhdgepMW3kK7potpNBKpNEUCzQmEd6DXcdGyC",
  "key6": "2yy6XoZcPDeEdKLoaG9cDX6MjSq5qNpNeqGKYTwgcTtNFJVhRzDELD26PPsxX5P2f28hw7i5VeZYyMSY1idSkk5S",
  "key7": "3SwDXUJZmJe3ttNKyjFya6KbXmChoXsFdVrcBTqYRb4dvZ7k2RKG6KuUtLHyFiNES9m1W7vYD7FVpJteSnK2mNas",
  "key8": "5q6hXF2QqGtvZWvEZEMoLvdxN4roDpGL2QRTo6YTrQ95WufDv6cLsrqqHK4mUzcE18mpTMt2QsqAyyvoh56o8DJ8",
  "key9": "36pxMDzcj1FfTaTUrzoP6rRnwH81ANmBCkF2ptf3DWxPNZfXTByhNTuJf6MNAwHYe8TUQCoSVYJcZ74Rd8u5ADMU",
  "key10": "61n53E3M1FSUHtNSCdH5DogwuMj51mLWWMC7sdgNehxMsDjEuA8FDtYZxDf8iwghA7JZqh13XZVoiGye94xtkr1o",
  "key11": "qyLSkMdhJ5xtAo3nxxBJHx3rnfmUEiF4cn8QqqYRRQVLffaqZguHg2KspNq5i9fCZSmSebRa8pth6NAhEsHKxyd",
  "key12": "5CxKmbaE9rnBSdWRnYoWNzJgz1E2uuAZeuVGwp5xm6fC8cdjekZbsn975XNfAxuDujRgZKBVgEYKMZaVveuHST3X",
  "key13": "4saWZNqfF7GEJUxiRmnop6j1ekVt9FyRKZQjcfL5M1Y5ntFVbYFMH3pdvcM6WMV24nWmBTGat9JNczRUmjVVnZHu",
  "key14": "2NxL93GZWWqFfWCkRrfZxJ6migw1z1LHq8LXVDmwJWZ8NgkZEBvzYXVE48XRbfpVM8kGNHN4jrqMNhYd2mjjKzGq",
  "key15": "4fKrDgZ7QSnroaNJsbZYJnPT4NHJQBAwcUR5YjAZFmA1eXTc7zqruD7gJ37WAu7HLtuYcrUdMDdfjQjt9fCBkS1S",
  "key16": "2i2RniVUcsm6zJDg6UBJCbgP2WKGU9hZfh4DdC5KfLugbWnY7wgdMRgcyNG3gTqGjZjfPf9KU3NCQgNnVvj22iZo",
  "key17": "24vJJy9X2V2Y3m3B9KWXwL5hVi3HFNhNEECvuS8f4EQiVBoVZRq5k5uQcicFaUpxAe1MsGbMAWe4JC4UEhXqUfae",
  "key18": "2ytsSZs9v6mkL4rHhL9vSmWRigKtYJij4R1V1L3Mcq93mEWQeKFiMHmaEPSYzvVxdvrPyR6cuU2c18Ww7xhvLBDF",
  "key19": "4zFxovKHjRBQAdNDB62yBf6wZrSRoPRjhPaSYVkB2sdRwEj6Hs8Rb2cU4uUT3FDygLHmxRWEkwqESuMRLuvNinwu",
  "key20": "4bafksGheRSrEXGLvYCyjynVm6diwUnVj3qqgUBhiBjxamoVSAEZNWSHoK7Q2AEtA1xNu8d5eAKrBRL7cP1XgGgE",
  "key21": "4aS5uQptnM1v64dNzNkdaWpwhDn2s2aZCMx9dz5cZ29DsyaQRUYVv5JXrFjjNhSfubZQm85mKzbLYUwLus7MD8RP",
  "key22": "61ZWrkFNSLwr4wF2bJ5bgq49iqZgXnL8atshf91znSmh3QLNMFJYA54mqSLs8TLYDdiiG6pyhZBPoBru7HV8S9bC",
  "key23": "5JEiJuPMsH7xYiaxdPcQZPcRv8ab298ECF9tgJgaQVWp6LZV94dCJ6Q2oa42SdhdxsLeTWcskSjH9arEzqV24iR7",
  "key24": "548gkCD1LroYbDmzJTdFtkhNmWA2maEDiF4vF3UmXCVvPdevQAiS728c5x2PNuVFqURx7PpKKwKK4qBTJgRPtdQv",
  "key25": "4qm5sQus8kzsDPRviJiS77AFgT9JZ99uwmEeR9ckaNRz9ZcY55U7eF9DG1n3XeXBGUtj3AQMMtGXghgxEff8aRhM",
  "key26": "3rK6GX5MmhPGTzrWjnRkmTGk3yM6iAyjmwtY5MzqsMuXYKFzKyy1AeNx59rCKqkNf8RsF5LGeYhC5nMaFFkSPWnJ",
  "key27": "3bTWrtq28UMQGM4cQ6ScHZqPv1C4z4cYvpxmtxegx2wYeXNuu1HmnxWg2VQFzqvcAq38ZjuTGkS66jt4hSWG1jJM",
  "key28": "2hQctBvCddPRxLZChNDw5pq5VUxySFb7H5MUfTnrDG8jD2dpnwmM3b1HUQkocKdY9ydtVugMsZ4NwtR8w1af95Kg",
  "key29": "3AsxJ1no6UPqN2quXxKoP6DVnZMHa3Cov41uXkAZ12BChgKR972Jo9f2DvRwnEzX3KEqbDGuJDgtGFC5FGr2Q5ug",
  "key30": "4BvYpPrEfcL3ZBGrDfSU51SjUXLrxNCzJ5HJVqWcKMt7cd45tDrrWSTUR8hsLGTQLtMmM2UBqrE6YzFcyuMgqjuF",
  "key31": "55u8kcF7HnSScVqUuYQMQqnEBx6FMv1MPb6tXvHxRptBj91XkQ1aCmomYUycwiEikzW7WpjN1MCh5xQxxBtPDxYZ",
  "key32": "5ZXVpMZXJPCyBGTBmNjiu7YPQqymMv7ibz8WzY24shzm3d7M4xQDfsZoHE7J7MAAzDTcJGm3xobEbdNrBAvdg52a",
  "key33": "4YcugLeDg5RoXCmyq7uQUh5sMvQQiicugUsYYr2SUxqBeueFWuWePYMvrV5BCoNHgonWpAL1mxZVnTxYMUQNS8G8",
  "key34": "4ikeQKPJx6fvuW2Ay8A4DpsoJJSf2iJ2S8Sa7f2zbQqcM62qpdE3WSM9uQShpHhHgJcDhzvqCYWMTm9Y58cKNNWm",
  "key35": "PE5VhWwPcHVPM13gz4unq6use4tq1QKEEGvbvk8Yxr5oVFGBRU5V3HakBZhTQZTYantMQ4HxNTQnVTU73d46JDD",
  "key36": "jjeTcwmYkUKqX8o2rwg4iCqEu3uWu2ueBkG2kxbejoe2NsmTv4NVFv38VsyrjYbaj1k2RrQmvgb4mGxnbGQk2Xx",
  "key37": "2q8b8hqbXypnbCtERBc4xBwzgTTS2Rx5qaG4ocM8L1YhdmMK5d1ZaS3xpLTcNzXxZhf9yTxMyeBxdVCu5KwPXMoH",
  "key38": "5ef4iSsPNkEoVh1WuYE17UAU4qv3Nhe8gQBo1u1E9DyRD9M1XdUJGE9aAgULe8NturF5UKsgvvwHLvdLriC1Soy3",
  "key39": "2adjEFLrR4GUcuyFPJm6v8oKNmjQKTbDCKE3hPScTgjpq8QzCHnb2fFPqBdF7NNRyneW8kquzMLErutgAQgxyEQA",
  "key40": "4BbsPkEaAfRx685bW6otJmV1rdPAcBQSooo87jwCcBaaiCPQuGp2KTxXTSQrw8gVzAaz8NVkQsXxuHMVVmbfTU9f",
  "key41": "2NF9fcM3txwy2ot3AEaTSPWHQePa6YA8FqWuCZNTPPWUR5YhswyN2pwcrwXFScaHQ8p1dqXKN9GdmwG6D2BX9ZCq",
  "key42": "47BHZM2mADqAfxkk95QYziNsyu2xmrAbhDnLhnuDPVeiuQfSpvRWzSK62kPejGCJrCcbnuZGUUSNFYVCGQaBCtAu",
  "key43": "626KW8VW9Y63tEDpzWvE4ab9JyPAuNCiUfnH7CEU8bnDzK1HDDrGiHYU8oFNYjrZ6yJMGWmrW186hrHhQLSRBvAq",
  "key44": "4apFF1g2ym3XWjiHMxEmqwU7MRiAoNjNYbTSgALHzU3nUWuNDbrfi1d3i8pc8uCFRewoqhq5xhNPz9G2F4td4emP",
  "key45": "2Xsf5FAoza3zBmoXU6Ga8JQUAsKDCbRrmXqN4omNQFCriyeKjcUgojX5t47p1g3NUk5wS5CLkKix3B5wXimU16S",
  "key46": "4G5jb7ahc93ovtWMCqe3WrCzSAkBBNNRTMyk2exv7QJhFB6FXMKu3iymg1WLcSYKMLeWP4iQRbiM1B9Vu2A8zeqo"
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
