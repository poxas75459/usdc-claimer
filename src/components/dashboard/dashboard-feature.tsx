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
    "6xaA7x1moEaiopbb92xihzt33t3Xuhdn9RZc6t4iBZVhWdRUHTyJNAJu2ovqSZot5zV6ycEAzq8eoSEn2cgm2NS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FhzK1QGrSA5xaEZfBY4GQJqdXGHmsYppSii3YNd6H2j5P6quvpi7XVe53KGgZ5783DB5tLTyRSPXsJXjcKro8Zn",
  "key1": "3pAncC5i3p7PLxJxhQtSDRMnxstNTpGveGM2J6KjbBvUHG2P5DHKJ3uT6eHAVMf72ZZ5bvmJavfzwQHpHcUnEKf5",
  "key2": "4mykNNoGzh9TNg6SPJngnuf9P6ciXAc5rdRRK5YnNAPFNAPxWa3dv3mxS4nH42LRLyH8ns9cpPKpAV8p6BcDausv",
  "key3": "3tkdyJSTrUJ1CUdbk1DVEs6RQZjxdbPjUAdS7XJKxqD3mpeEEbKj1rGnTMyMj2VaxenP6Y3kNPb7K9F3MvsdGUQD",
  "key4": "35T2DqXsVNuQ7aDHtLu5KmdBbmBdEYVysGUyGjcNkb9Vw4NkXxNF27ZvZANen7A2zs8Ft55rXPmuDzojnkTHxfTi",
  "key5": "3PXFBiojNoa7d9oYkmossdzRFDxfb5xQrQ89kUmioRZhmjdrUKQVJWwjmPbtZHfBkToY9Ka3MqUBtu4AsxUH34tC",
  "key6": "2qMD7KJ2JWTrFta7LUCY7Di5wWqNf6Zkjyz41NqJTryc9HRKnAN8q3KES53JpkMUzk1CwDL1gCppsMbj1GeUTRKN",
  "key7": "26SuTrgpmXNdrpgJFXf3Y4CaF2hSARsbMPnxL8d5bnwRigN79Qn1EfakKNK2xKvoGvgWwE7N6vDJy9t4ETLDh3C9",
  "key8": "4TG9srKkMJbBhUp17Y1aFzJwfPZjXtTgrnjpfMM7T3gHSzedTHxLUycWh1KiE7t8JMw29QMzFJpYnFGDmjNXVpfj",
  "key9": "Mp1ggGBsMLBdZbdL9MPogyqJkqHo5dPcJqbgRNtR64zBjSUmSr6MLF7pYaZ4GVFh5Gp4ouQmXqpyRZGT3XDtydU",
  "key10": "3dbRdUbhzj8EDAnZKnuV5YYjnuJTKKMRaqy9G4y6bGrM9mCNrrEVyuZY2JbYWLNf4K43yGq8BcHxNrK83NuUDFaT",
  "key11": "4K7DqiWwVd9Mzer4tpgNFLWEqfk7XVwT3yrPQQZxfme2RfHcEZYvCsi4bPZ7jXod4tvrmpWLJj5eCJK9tB1jkqou",
  "key12": "YaEGrP6qP7Vux1pkqC2eiEBZg9u1RnRMSyxCWhmQRjUwtotcDsF7bb68yySXvweVgUU5hDf1pAY33QaPPKQEubT",
  "key13": "5iX8rdRVevqdG1tTEUYbLaSpg6PX2iqKoVUmizY5Ro9mabxpEwFif5Toe9YG4JAzGJpFX8hVUQwWgX73ZTZXfasj",
  "key14": "2c8MB9yYeSCDjrttB9U8AP5yA4AhKRL67PiMUymwYdBota3HNkENUX5c7WezgvwmEAEsQ6xiYn78XVuM8QSskWKa",
  "key15": "4VXmWbaJtJtNL8EknBmMUPSCG6z5BaAcWbqGcovxaeKJLhcpFqb6yKgFSYb7gyJGtGL4U33f7rLGuD9aJZpPPezS",
  "key16": "3m9RfVRsoWYvCtdTutFAs66WTmPfvzE61K4gMVSdvnfdttBiQ8635qdaTBWEBztAGfWCXJG7dRvFYdt9BL1CVciB",
  "key17": "4VUqE16GvZYHfkPknY7wkDNBYabrKca5kaqTxrN8p4Es6SCmjRW7HoQ1bWayWgPW8QXSjisP4WP5cXsTkoHKfpXA",
  "key18": "2v6EBNpyUzWuWMxzYUUG4uNmqAXVBAqcXCiN5NPEU7phrVxbcY8utXnbQwgQgxqBrt8MpjE6SjW8bS4hWRoVqiaV",
  "key19": "5ahWiWiac4taEjs6jKH2CUKhbjLFGQ5gfSqUa3SNY92zy3Q7d9ba2wTszrYWZi1KGuejqVw68eAMrSwBv2zCfMC",
  "key20": "3DNT9gPWGDV9VkpM56Ja3mjk8eJvYKbpDUMk4jhCPe4R65HBsUUEhVs4NdLioHL4Ng1p3JhpfDMhyhFGKQXCYDSf",
  "key21": "mKRwfg3KB6iPhygKLtADFnNYJ6GWqxynjMFU489iCW3LnHrbAnDERzAgcUY17nX9y5ndUfqRW6A8Ymjy7ZNHKQD",
  "key22": "551br58EH3hzV9jGSQrjkq5MN58FHE7AEgygJR2NhUe4cC1oHLUyyTuHx3SfeBM8UeUp3MHBaZPYreeFCGsU3NHg",
  "key23": "3fujpuNXtDDdotPKNYwcCbHwwFVnFH1zZoEKba9H8DSTEU7nWwvsJgg5TXhN1GL46LgLGGqtYcfMkzvYGVaaqTX4",
  "key24": "UCwvu2h3nnprMn6Yb6hgmEdBUhY2m4U3q8F6bxjNoiWuofkxCwKTqZyv6rLu3h8P7vMv8VEZARSn7CNEyWXW24W",
  "key25": "2xy3Tnx2nrYtctJj7NrSeq3FqdFMvMdCAf1ydxERiN8zwje254aYBVMMnZRaHqykbX7tdWx2vo1vhaoDuzS6rhi7",
  "key26": "32kpFUFccEv7tkhdqUfmN98zZrVM9UMEVtCCauZ8wMCg9ugzLGk9jfzPg32gGiv4DDr9fiMRxdRdDhAZp7VQ5Gfk",
  "key27": "cedfRZR9Dq7ThQ7ZkwZwEB1QXqQJwFCde1JWA7HJM9rQJU9vtS9LWELEvZicSa1uEpSvMQC7Pw3h5aewggpPAoN",
  "key28": "5QsA2G3X5SQa8W3oPadrAFCdyBuuGvhhZCYb2jWCBatYYwHkV6CxxGriEyudpCzP1LSFnUZs7SRf5N8A2ys1jpXR",
  "key29": "khVJaNjRavP4CeWvG2EsTZ8sSmqTsCBoX1mLFbNJyQBL5KWXf3kwecwMa5AWCTc6TRSAdcMbSFnhfTJwp9dEYZR",
  "key30": "5o3NvpyZmPU94odTtob3A29DmR2QBUDwziDzMSbQZ44h49z4SHLSW4Qmqspp5SGJgRyRDBH3Zce9ZULUiD1AQp3A",
  "key31": "exA73PiXm5yFNvFdJU7WeVxhrSuXq5jPCZCkRDpfcGsGSKNS2Rvfag6Mk6mLpBL6tXiXfqfeTwuTnwXJLWg7Z6Z",
  "key32": "3NU9JMbeDf4TewybvStnbq1jbvqwwGnr7nSMmNJDkisACbpZpTW6pb5VT11R81dBzdzZHb6PUNuHCWZyqrmxDwct",
  "key33": "57ge8AZrVY1AxHQVoAkihYwUNcFnE11MBsVLAnT1dNUAVnMfMeip8oqcXadmsHWxoSEvTXbkEy3i96fVv4QTDQ8U",
  "key34": "433Ddv754ZZNyTYABbginTCqd3hM9zGKSKU8n1sZJgxYEvuLnAPZQhjx86LBLE9sz2ZmmoyuxsQSZYXCozm618KL",
  "key35": "5hd8mzfh6pP8CewpxvWCCZ6QuZvgzJL1jWgRQJ8Hekeh3gyDdwaLGCeH95ruHpeHnb6PbspGbfJ4B4brP1UL8bUB",
  "key36": "5PAwSFxgDrnTPEesELF1naAsTNPgEet7GcD1T9po4m38BHa2hs6EWdz9sqjcsfgmJKDFZNDeE3TFVzs8UkX1Kf8M",
  "key37": "61qKqBtpiFuxUswWi21nbvFUdz4N7gKjyoRss1BpScGU94kKDyrnvRSSxqECXUyGToXeJwj57x87VZeuPe5NCEHN",
  "key38": "ZkV2q5jKdiNc8aDm4Mrie1Nc1WwJjR6QqMzjK5orSGQLi1J5PaRPsAtUR9V9nWExQnkhCi3WRgMPqE5RJpRdGyo",
  "key39": "EeJjVaXDtouJtD2DFSRpx6HDZ1V1UhCf36u64Bw5LtEb5D8cdQJQgdw8yhq4mii7GYvtzbhUxUu8NgZ8M3ckHR4",
  "key40": "4NpFo6u2QtKduh2r39oietJxwkAm2KL2xCr5738Nxs7Sgpp1RhJSMc28nhzA6B5wGWcbFjmKsxEA7Zocj2iMBb6b",
  "key41": "3hBvyT6J4pXswXiyRdtzutM8csE3aXnJEjn456x91G2Y65DGdU9xoXLLRo3xnVxE23GJ3izxKZxQn1vRvmWXYPjK",
  "key42": "5Cka3byEAma6W34ppFxrKSKvrRw7MCuoD6SsA5vfPvUB81m8vqbAJ4KJbqXvmEJoe6fDHR8t16yrBKtEVVsKFiaC",
  "key43": "4mwvCTsDxEnhb9h7B3wDgMHfpHhK6Xsy79koAL8osfMq1V99sbPEvyFogkNDYAchS4aBWXNCtmHXQnesoo9hJV1f",
  "key44": "23snfxzP9v1TkGaviBSdwynJj7XGjhqfE2xpcvn2SbVpMtd76DRpHqVtmpuLrUCN6nLT7py3D5Yyt7CeY1j7UdNK",
  "key45": "4uAPNzLJFc5NM5Zi5t4eDextjZeiLdvmT8ouGw8Fgqiap3Nbt1ZjBG5LmCagztRfm4tKSLkmPQrXVyKJRKsjS3D6"
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
