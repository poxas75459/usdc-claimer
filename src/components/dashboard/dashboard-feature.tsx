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
    "4i52S9fYnya26YZLYqV3ioHudHRh98kBg6BgUGpYE9zC5GXXG7hbEU3q23TkU5VYLdC7xgA1byrsdh76UxaBHiR3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZA1eZUmphEgxj3wsEk1UymHV7fB7tsVkCSKzraV8RDqdyRXW4UxwLaA1nTdaBsA5GCGVJKGXGGP1QWBJJihjM2h",
  "key1": "4xa14cvtXiM7Ta1Dsiv6s1D6BECDUat4mhHiG3BtkSR9hXtQLDh4SmvJrmUTsX4gz6g9LMEpm3TUMFq9AH2ShsD9",
  "key2": "3wPpFckthP5pC2a3TAfhYke4ACWEFtrM9as2qdQc5puVxXRAN4Gcs6S5pbbrZFAQxQGSLFNiTT3YYhVHuEUHzAGM",
  "key3": "3gi7U7vy5TPBEhYrBAoGaEkE1H4SH9DwrjpKoZjbCoNGcPLRbiiauKDSHwesKKSxZnHg4TwJZeYuapVdqjDfVeCC",
  "key4": "4Jbu5AZ3ooL9yHuGcCjQx9wULpVvPZQnjMxVs9SQcJhgv5FFVDi14trU93u2m47HqMiXnyKhX5Gt3kXcbCMzd3gX",
  "key5": "3tkZ6FBA9Mi1WYiUQ47Pe1zd2UQWPYr7W3mAoELpaX5A3po2xx8Powzm3xmhS1ayv5bp3TWpcgPkCDfXG7bDuZK8",
  "key6": "5Nk9T5zJDf448enwtF5mx8xDzJ8sKNcLdTdXq5DC1bHsWRAqzzaMSRkRkFXb81YKFKrp2WHBMU4QgSgKdv9J4a7k",
  "key7": "5udDyfmgAtQysod5jBw5fGEku9iDBVH1nkUWmqkEYKiSAQo5NyHxet7RB3DvesADPFxjs1WEeKqaLYYycXo1a5B",
  "key8": "1GSUv5yvrYdb7DJfjAJ9pvb6JcLivGnYfwCst8vYTxAJ6yAmnzSmrN9HbqJ8bSmxnNu4qYBjUDdxZGe74q8yxJP",
  "key9": "41vE689RsXnM3uh9Fqheuma7wSddhbiB6FiPSqK4hhbhmtx9ACCzFp7hgBra4VrFRX1WdKMPbvjBQKswFXMZ7wCg",
  "key10": "3MTf65kmCtdxhLWev1aLZxb3uW6stK7z5eNmTjnd8Y2PCZxrSJHmM29R2ystwoFDvRQBs6LwANc5FV3dPnVzf8Ln",
  "key11": "4tcuSD24fMxboXWeK3Q8UBtS5RdnMeDfSHiLqnCzYYQyScTKg5dKZCybH8ptngcMFbM6gjWxkxuWXeS4Afzumini",
  "key12": "55JungWaMTyB4gFv9ujuRLQKtguzuAVgRJcrw9d2JjZNYmXEUM7XmuSWBnrhteRq7CPwEdNBZqkEhFiSz9aV1FjM",
  "key13": "2R8P1YqsotNj1uke1v5dNutbxRKVtsrEDQ1mLnXwW63sQ1EeEbKHdZh3tVh2bKGhPr49iVCGHUbH7MF4BoQnrLoy",
  "key14": "2SxHJxHRCcyaxnoUYtuAPYtobc4nT6xdubfrBTriyJRoRMn9JLsqXPGsdqFaez4UwK1Az4fuQFq1Ey8LfZK4uszg",
  "key15": "4FhPSLHaw7aQTDextbVM1BfbNJTkAj7cPoB4W6c4UfNcSbVjWFgAQ5wP6yxy9fNGyMAGbXnaD79pNo7LobfcCFvo",
  "key16": "5wjLFEjbFgFFGYvJU47qLynZQCf974JGQiARnJf3DTRhcdKAX2zn3k7pF7nLQ158pxkSYkybbHgf8MRaoZKV57eW",
  "key17": "CyynSm2CfgYdpU5qjV174QRMTm5Hv6aSZrWrKsQw2HVTkJsx8JkQ9oSeE4hiZr32nwQ9sTcvoyBqrQ8JoaKhSr2",
  "key18": "2dpFq7KY3rNMpdYcTjEDgkmNWbFgnUJifnwpbHc9ExfG3QQveR8LBobam469BJZHb4TBRhVBDkj4dw3EXHoAFLhY",
  "key19": "3HhvAThJKiKUGokn4DKQEnJhHFQMwmwEJadKFkh57TceGjhkTi91jnDPJcq2ouqZzrLFaiE19j9BRnnFF3NvEGnE",
  "key20": "3ii7xhvfsdoH1Svwjr2rK3HGkJH2A87SoDEkFoy84oSHJUkUo1T9oAZPvHTGQjC7rSqB4WL1cnvLcbZELRU88zyS",
  "key21": "4adZezBEAMutXBC6DeUAR52WWWFNkA9nyjYeNAnrEZURMpU9PA8TFwSLgrqCAYeUam1GgTqya7ZV9Q2XoVs42Y3k",
  "key22": "3kUzeFBpdWKBeCJTNwHV28Fv7ogigvj9EuY9pWGnGj3UJeeSA7EvTeNmyvQTi7MQq7VrKvLjMRAP1XAwtYDC2nmm",
  "key23": "6634zvvk2NoS29CJ5zKceCqRAs3hJkcjQtKXCD39AYRntXSGq3MhatdEQXtXggQCgzopJYFAVxcSEgjC4nCGFsKu",
  "key24": "29wE1wmihgAKkHWpQCUfTM1KLiWxo3jWUJHK5ghDKHhXZ83XVYjiyyJ3DPkcyFUTh4j4yvA7PgEKMcfdSu28n5t1",
  "key25": "XHMk6NccVZfpK4uhTUdXn5gWTSBhL1UxT1CorabVmF3J1RCTEqr43DJWahvwxupKaPZMoxedZHwA6N9LwmCjs9q",
  "key26": "369oW6bmCu5e9f1Ph41XtBv69YE3xRMLDmULTQCXtZHpDpGGezSeoeL8R55eZkbHfBLs9oYo8mMNvsFjyPWPZVuj",
  "key27": "57hERdM1jGVgYwevHvak4N3dsX8VxxiVv1v7ytEF8A1YdpRLoZJKRRAbb9Zbu88Y2FCAtgX1sR86KSWbhRiyV2iv",
  "key28": "4Ne5nJ9hswEsfa2keFEJPQGDHDgwVqj6x1fdeWv6yJG7kBtkYA2TqeYBHkCXSAXs1kNFhtPG5wRNiLRgN5VTnmwi",
  "key29": "5EX4vgyuCUYoGtFh47YjEC5j8GgVDDu7DW9T1oNFCDAUk6qmXQ22D1DiJZBMoHm4c2uhjwyQwwGy5UPKrD22wCFF",
  "key30": "5znzFGJCv8XKt6s9NA72AmGRrym74k1hvcqJxAZ9rLwkCTqS6xnHpyR4344RHEisekcpzMKW9CyyG4hpyctfPP4b",
  "key31": "66G8BgEjkWxDhmiHmafMaNbYWQp1ewJSB69VUxenute9dRa3DRWPuRHqJEEqpPQuzfX53pxXM9hzdnQXKW8YC4TY",
  "key32": "5eXAJg7HnYGScKifK6usQQSJbHLqTev9SwPpm85eEs6aWcWAPEyHBp1VtHHmgtDfQw6ibLhCLfJZQWAXh92smfhB",
  "key33": "VzjFcc39uD4ieKV7o6j4KwQyiGxowFfUfhKmjhNC9AK8H6Xoz7rF8ex8CPLEhEu9vSZsgk1Dh1Fi7sUUzaJmJtc",
  "key34": "UuqycJs2DpNhGjKeZod7JtgnAi7vDbDDwrgZcGsjFmynRJDw3pc12Nv3AvD63yavVZnZLsQD1FaLN3rBAPLj83Z",
  "key35": "7kS9dqsDP9dxevZ9G7aYXYARdaYYHgz1vZCQKdRkZtWPxifFGDw6KuetwUqRhjXCLzGh2YC6ZuPL5uMJ31ZT914",
  "key36": "2TxBAmrsMigApYmQrdvfhCuhnPy1QhRzWttg9BZARFBM9wgaJiovmdUaHfCnSN3oEYb6G7i1ZMoGSigkrzGaPGrL",
  "key37": "3UeHRKXukBATLyshQFaW4M7bKdBCzUJSSaAFeMVW93rY9hiyhbMeJ5SKFPY4CwxUVQ61aDexY8hf5tQRKfsp7sbW",
  "key38": "54cKWmTydaehfS5vNanqh2w932D9wU6or9NU8kjPWJzCiXr7RvStp3BEjaUJaW6uHQL8ZqU1tg66RLnMoc4drfMQ",
  "key39": "2NKR7cNPScSnnLh9GUhLeo1qRNTKE7C5iZekKBa5bu6F23R7Rtr3uQ3z6psJ6NqHUHP4GJe4NRonmaydwmGERMpr"
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
