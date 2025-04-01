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
    "LhYciSSJmu83ugvSSFeoRJb9hZgRaaKDyXYH9eDhAskn4bcF6dFyV3hVAtuC2MbvqeuhGpYj4egtPFMJraeEfjz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1ADgkr9rEZMRyN7H83z7kuMa9sUDzuHn3pc9tR1uwHs3nTg8V4E38MdQ7PLtieogGXwKnXL2PCea1hw4GHT2zS4",
  "key1": "845t4Lbp2MGpEbGHGiHe3RJAkddk2S1K3ucb8qQPe4YJHYCs2ahCbXdM2tipJBV6JNdjDHxj2SqyySTw1Bqwtjr",
  "key2": "3PNnVjBA71qfsF9ThMRXVD1iYh75BEyHmKNWK5Te66VFWUD9Xp6p1o5NqzqysWDm1vdVCFsif7dE1d8Q7MK6ao9k",
  "key3": "3Zm6VQjekApjeuoEcmYBWzm5Hz7XGPK4g84k1Hk83ATYzzjZoZCbwKrwgSZ161EapjXGMwHkvzY5WgGP9mgCNNGC",
  "key4": "3d6k7qa9XPx1iwZ3GFoDTng4MY7cErHNZSzKVDibZ6u5hGhoGaVJPMNAjwBTQEGQ2TVG3HBmcgLgnBWUNRq9oxnG",
  "key5": "67AMTpHhAPMHTKkggQKF8sxfPhd47cehVzXP6Wm3Nh15YLvFtj2CmTMRGQKWwGpugJuPpiHpeyHnVsxvmXZaSv4R",
  "key6": "2drWDCgWgLG5xtd3AsxXWzgskZr4cQcj2aroPEMkUwqK8U3HxopkJh43Y3E2s3sadrAcBys4xFQUfzodX82nz5qL",
  "key7": "3shg8GhntrwSxPJwzk3KiTzzTTNbeiA2ojYcN64FA1r4xR8t3KB5MRQy4vombovkLCRJJbeYMRHGVapGwwhriX7U",
  "key8": "b8XcMLbwKCLbPw4Rg3hLGJhpnVVjps75dED3opoP4fAifHWMLYK2nEmQ3oaZY5cGPVjw8L5BTY3LhXxRwDdZEke",
  "key9": "2Q6vQQYKSDsQ2b8dGxosstScX8BePAeoyYoevDcCRXGRZ8J5Beh5Kw9crDZifR9UhcgHyZA8bKm5H8U1mQG3RJSG",
  "key10": "4db7WjDCaj8TTFXVWpBNJaCunwMGehr61ccG8KBz4kPcyxVUPgCwTnGd2DSp7V1i5LH6xRGQSjn4X7xREXFXnXGN",
  "key11": "2eRZHQoSacMCbuba3rfmw2qCoSo6kVtzG1A3bgUWyHQC6GnPz4ygPGMRhqBAJ1XZsRj78TW2VwWDBPockgAsuTDV",
  "key12": "RRHw9AB4s4SZe5VzyBsbbxeqKGFHW2havAPtSKjJBcf9VJs1rzD2NSFQRWQmLiokQabgXVVMjC6pofwbierX1H5",
  "key13": "4NZaoRGS5a5FA4kEVc6Yubze44WVWvfeysKrv9Av4KCBrzSejpJGs7ZZEa2DmUZJA77F51W8ytytpcwaRTesNvUB",
  "key14": "wXnbyc4mVwXgxvFbLB36MAk6UzvcfK9ha3XGhkJKfux5DdeYhgpFaZPdZYRZTncMCADPAgXbC3PMK5XNLj1mQYt",
  "key15": "5R6nYwJBi5DfeuUziPkcGvpd5n8ud2bgUKJDXjk7R4Xf3VjYfSJgcxquF3DsH5dnuo4DPRr7MGcXeW2CGiB8TH4d",
  "key16": "YBhjdUdbaNzVxfj58GFyExwnLaaSk5hrcjgUKr3kx1izDSgh8YRkFnxBv2Yff4qfL8F5GDVdEH7NPZS7KC85PW8",
  "key17": "hswBTVG8hpuBF3DJ63yrnWHfndTb557yNohuxdyqycihnBDmhWwtAYo9iHXJNYeZQkh9VVyuJycas5VD6LUZLan",
  "key18": "f1gZc8GLeZEJ5B6nntwC7mNS5HXvVfsDqYYg4ZVdh3aaWpibNRpaXqqfQ182pC7P3TRWf97uwnXv3XPuEpMVbkZ",
  "key19": "5tkRqjaU6wuiZnoGM7AeYugab1yt74VnPAcopMKACDx3uRALeFPTFgxpL1WT8jrkFXHkCGnZLPCun85Y6iR69GKn",
  "key20": "wrMZpvz8QJG1dN1AeQQvkahvedrg1PiguaejJtduoKh7j8YDuz3HUJypTkHdm8PiDFTkhi8KkmbrMoJ88L1Vywj",
  "key21": "4xw67etHHtrf2azAgNs4BAAgLTD7vbA7uzxgud9YJzdu8bLYwF383ghPnmUwxR2mGxL9oy25UYFAu66iA8egfn62",
  "key22": "4gHgZCmaaHoeAd6sLeekkvmttUWaHrjXLtwDvKXr1PtaVdPMDHcYjr19EdDvd62Gn2kMM2EskMMiRtXi7cPfikbL",
  "key23": "292oLSZAskJDKuPvekKBLsGZ9u2w8QmcVEB84ivaubxMKaxm15ZSD6qEUYMSey6TKeJmrvC2uMxe5Kde814k8mjP",
  "key24": "5w2VeB4TsfZBaAUWvkd9bKFXx1a9RxB4um5YA5trgwBgfLLg7Z7phjPFMp4osUbyuPguHRWNqtJyQ5zM2En8rH3M",
  "key25": "2NW9mTkQgmDVMsf13tizZJRFJqsFgK3ePQVdMABKJBQ6UKydkWtiSUdLQR4Xdc3iFWUCQ86QAVePQ5iDN5CNX2Ro",
  "key26": "5j4fvjga8L49A1QBcAZRFbaiczUY8h8ipAjTTpifinTqreiif57S8eHJv3doNbY42koW7v37YbdRwYBJ79NoS8na",
  "key27": "3FGM12zWmwTU9hgvfy2pLGs8u1KTvutA8fTUk96WMzpWJHjxe9kK1MGY1mJBGq6TaVQksDCDxtCi9vE3aS9HtCPu",
  "key28": "2RhiX6psUwts6wQufoWg8BBMf1njkS43TvWdMMvkYe46HCFUGLGek5chJjvqc3Y3s13ut9VKPfHS75txjTqAvDT7",
  "key29": "TtTsPMRwvV2cfaFhEt3jj3mB1zHo5Qr1LnjSZ7H5x3RECR3Ly6dCBHq34UDhd4TqFG8cTcg28B5MYfJooTtxDsJ",
  "key30": "uc866NuWEeaYfdrAHB97D4dp3SAqqB1DirQEvrf7oTySKUSF6uDkYvdfB46y19oBooSoueBDkEYEvBEDRWrLz67",
  "key31": "3fvy6DfsgD5hFf4hRHoeqSGUSPiKHs5murwDAwYEwNhusdvMg26t6nF32Tkjk8SuWNsmHb5ji65M8fpqy6FUWH5r",
  "key32": "ZXV7WWRoS5FtdJN5dkJXmWYyBj99Uj41swWxJMZPnCG2YzXePYTqZD46T5ruCa6XGVQY7qjmjqPZb9sjfAx2nY2",
  "key33": "2iKYLpBGFK36jdjwQU5WxTFH1o3N4mUXq6aY73fBPtm1ofnYEwqHH72yqaViDiGcSCvcmt6Bf62m2dFCNPMb1cDN",
  "key34": "21t37q3ASoucuQFWkbigufnBRUy4hLxBpzhkX1nJVi4iEtkitDD8fTn6TFznaKxgr4nS9eve8NjMNtyV3pmukwRG",
  "key35": "2j7TYPGHVuJ5ahvyQcPADrENVfi3ok9hows4DndWt42CQiUu7PweQkMGE2Fd8XK74vPKhMBNTJ3pDk5RG44nKyvn",
  "key36": "4hJQDMTvJV111sG4hz6S3dkyejximQ9cQKiX7mHjcchuMXdR2wSCpNXHJ8tarbCGnPM5yxgRsjjZ47NhbjXeHase",
  "key37": "s5ETUeyj1Fi7xMfvBP4Ahw1nRqQfdBJgh5UdpPePjrwgp5AFHtV1gceQNYUe1BXUWQaQQAkLv8MoEADvA4VX9tX",
  "key38": "3fYNSkQyh38JFPWEcV21yiiWxTcsERAQQm8BDyNn3gz2SD9cCxNPUKhgr1DbbuGqP1wWkRgQtodpgsP4BHfBPiar",
  "key39": "qHAMQri2oC6zCzyDzPp2qaFq68kkDG9wQgcMNcn48sfR7NQN7MmmaTXMcYZn9YDTtkzAgRQFgMGezJygKpVyB9M",
  "key40": "4QyKtzNXY3Wrzx6xgnzYSdZhgYA8a2RbmUodBSCHpb9DtfMZbp44dt4vmDsDBNPBAeaJCezVJJj89ZtZibsAkL19",
  "key41": "XMogFG5AhX5Yo38z3E6d8mTUVXVZg7AP7Bc5KUzjXXk1bkVjoPP3CPhcyimAaW2ZJjTkt7qtjfhJsXm3MmXQGAD",
  "key42": "5HgXgAz4ego7QWzX3qcUc8nZ7UZcqY2zErD3rXTVbe5sibDHjXkdikY8s5qKyWghSLQPCUqRyxWbVdK2Jvor73jy",
  "key43": "5UFrF6FHahSsMD4Sa4z3vdmym4MU2hhDYkS3yPnqNW6GxQHAuo8weqTUZVQgKiWSeqoUqQzjfUpw4dxFVsDPk9Li",
  "key44": "DX1B7QtdVg7mnM4LZqLj3Qet5w9y6NJrqnLe9J9ZbwUWz2n9sDvL6RAFtRq9UKimBkuRX6XX4aCYA3zgFN4nHMh",
  "key45": "6MSsAFRm2FYXHuGabQhKoPh549Qc9aSdBZCqPb9faN7PMD4QQwzW1XXq6k8NMQt9QVkJyoeKeCtq6zgLLwGfnZx",
  "key46": "5AvQw4cv76qtbiLULmjWPHg3KsFzG2gRfwPd5uFKCdtyVn7LuunQ5kQTwx2iANWKkD6pjTYgX5LxHV9gJYrHXgV8",
  "key47": "3Kj5DbZPTskU9tzABQKkXH2HkBzVjvUdAkcj1JsFxMJUZs5qJAbV55cmQNLj13HabaCAiwse2DH6Lk4FM6QwMjHF"
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
