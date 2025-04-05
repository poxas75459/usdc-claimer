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
    "31S5xcKihreGzohMoXkK8cb6YFeXg64UkoArpBKp6DyfCDm7HrMGgrx6D5sR9ufUzLVVbe2emiHYkvAhARBdEcQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29y7tTR2PQiHnsa7EcpwWrSkzWBGBaEvAs5E2TRKSwNtkT9dRQzGj15rfnBdEWazkjjZz5fTK3FsJhhpg8Ctgbdb",
  "key1": "4i8RhMsqGHvSifixjeL76SebotZ6AjsvMKAVHo7tzGJQFzrSrxwDWxyNA4yEnRfk7fEAEcDk8GJ473jS3PdDfUZq",
  "key2": "2MpAvMzA2rKvRum9YyE4o5zWjhw2gSmRHk34uQgJGFSQPZgHYqSoKPGVz38B9QVk8Yu7nDwfiSTXdVqYKmX5feww",
  "key3": "Q9RejBymh5UGgniPiq1EqC3QWWTXxaaXe3SH2XaxudvCgPP7vsH85kN5C7TM8yfntpRLkZMV5MyFkkP38fDVa55",
  "key4": "2kgUEenmsmpQAEE86a3t5g8ywjhNNxbmoBUuoLUS5GwubtoGjhxhZbedQ1jgSEJQnUwz6R8iqriGybJzYk2fZtEn",
  "key5": "4KLXRYeYK5PKXQrLH2gHVrfHvkuTE2uZ1SdVfvDpS3okxuK1tTafxXRzGvLcWbM8ZEf6hGgwyTRUR9aPj4Cf49To",
  "key6": "36phPXihxgmsUSLGJDSBxeaFnD7DvvDy7prAoQkqKGhghq4eVvtXvDsndhTWGyUkYbPHL95XX55pnbDLs2EByRap",
  "key7": "5ftvHWikFBCAh37Q3NYERdWWVHt8HRxybbHXkTpXziLKaZaHDx4A3Gdig1x5atQMa7GAKioNJXBAc92XD4mTMhTa",
  "key8": "5EKURvg7trNSqkfysKyVLzk6CPfttE9hwc7jepuF9bEBvS48Ek6QUdwTr6oDHA8JAWcdZuLVuMtrwie2KpSDK9RL",
  "key9": "4L4YW2ZsdTmkqYWNft3A56MbGz3FYB4qV9UDmyxNqP3gdH2XKcVQqwW4fQYMmRjRR6zMyKs7bPzq6M9uyePWMrBf",
  "key10": "5HjSVtcrE7FWJ3MS1hb2WcU5TvAHYVxS1NPjT6rQiW7tYnnktFVejk2R2guXSMWhuB3SesVwhoyKbzMY3sMpvAkG",
  "key11": "2waDxMFrex1xopGomEVk3yczVdaCBQtu7WpdMBQG39dSH2t7PEckt2R424EWgXmLeRCskZVDm5GmqdeHQoRES5PE",
  "key12": "4to5wxFj6wDKeHksAAHp2vY1tLxPJpzaiYREgwJm9i2fiE4d3jGBX4ULwQ6YCmsx6LBRmRsZyuKe5WTPxE8ZY1p",
  "key13": "4TmvKRSoCXHKsxFGPUndUmfGoXEQZ9y6Le1C4hXCNoHWm2xaHvCbSNvjD21e8i6cCA6Q81eW5FLcVAxiy8YBpNSv",
  "key14": "3oHDteRqZmSwSgn8e6gkmb7iV4nrYATeUFTssHJFX5RS9Dt2dwA157grpvQvdYvASkti3ZJyjZ6SH9qecsFBUP3u",
  "key15": "4sqMfcHAaZC8iqG7PR5LjDwm3N72pDRw3LQAFt9MjfzcmgMjTkno8eTQePRE6KgfPAjLLaXB3R1iVZFHVUn8gReu",
  "key16": "2aZa5uKy4jk2ngXdUGKCJYFWKG3ixBybQJYqA34JhTBJEAYzTdEk4haStGD374BZkSAq5QZ3DQW9vFYQTA4c9R4b",
  "key17": "5XHGfbVikzvvMvLonN53VyznXrZ6WkH3jmxofG3L7FMxkj53ymiq2XhmK4thd9KnYotzebnwcqmvPQrmQ3PTocUp",
  "key18": "PS2LZx5XpuVH7TxKdLk7jWa3T5Rgw6iZGbopaievsqXzQykfR1UZ51kmTu8D4MgJGbHqveSneJV3cXXQYFmHhkP",
  "key19": "3PQZFTBxr6N4DNrsqf3ajtZuit51fvehH9hH8scscdaTwGFzLPM9vfktCC77o77NJYaYtpx4ogUgPbZ4EJ7wHHJs",
  "key20": "42bcz96L3pWx7kzuZx5yKCjPsVv5q1jQH53breHF3SftC3Gp4tookFxQEsD67PFR8yPz1tpUAL72buCScXsa7Ypi",
  "key21": "3Mfehjovsy8JUB8c95toNv4YnGNoAGVPGi8cjm6W4stETD9xcoJXgx4r1CP9ko78uaU2skPUXcXTA9ZQBwgfr4JD",
  "key22": "aJFbTXy6ztjiCt8371GZ7C4oSf5PGxyx23YeUVMc8MchMXDvGJ2iTUnNhribn411KBMLtAEyFMzarSDW4hqXx8y",
  "key23": "hWRMnwscdWiMRcrjC4jWUvRQfJtVa5jp2U5xjEac7GeLS8xUFqt8ezzo82zrBHREiavVE3MNTMN3XBvoXDyaLLR",
  "key24": "qap1VzGSRzM7Vta157W18HasFoK4yQpcFpRmwDNDPf2UJ8aRjcdZXKeQ2wYJkU8kULuumYtc9CNfNYSPbgfDnoe",
  "key25": "66nk6nvrYxUH6H91fCT7iooAbA8deNqsKyJyrowYWSjX5Qxyz5WAC46nML7YWWWwGgzDR2KqDyTMtAqJ8maPzVTR",
  "key26": "4r7w6BDnmUofDHRrqVT4Kc6hVuc2ANYYezeYX3Q9YFBXLUUFFtiQf2ia6K6iohXxcSZKnDBsvYkMztZQNp53azuY",
  "key27": "5Lues2PGY4ByXin2o8qeD7vF3JfLXEe1SCmxMorQmTtT4DH73bYWWYS4K7G5BBYKtCK4FH6MaWR9eEsUyE9uHaVx",
  "key28": "3dLzaSDtXTgTzF6fe4NubPf14iA5zUi5EdME993KGpKVj7BGHeH4pkX4qdwE26KQdeGSYtqsamgDTmoUZFZKEEuS",
  "key29": "oVaw8i7S6ZL2CJunbgZgSvnZLt3CjePhk8bgYVGFYEt5o5AFq9T2vW59VXMGZ3hWFGHSBvFKyyZLisAEwj7d2iP",
  "key30": "2w5SiUgZ3qmkghxd34TJTZ8j9k8gDcRFmwv93vfHeDnxr79vgRDXjdqQSjRQnw4GaDSw5GYj2oo8uN4b5Ksvdgd7",
  "key31": "tnhi97VAC4QEuNodAqNg8y8EKxoVxxqWRPSZZfW2y857oFaPJhJZDoLBBwh7TuBU81aaJgQh4MN8kJS4SYFJaZi",
  "key32": "VHs8ora39Y3HchUrLYmjEgTDotcMdBsPSEHix5n8WuEUMHrT9xfB88sFbqScDoXZ7rXRryemuZkRZheuxuHoVRm",
  "key33": "2ZXh1cWFH8u54Xm2Yk4cuVt25N7MVWYHXaM6mWDPnwxYDoBJcUjGuhVptkewsCtRwK2t3o8jsuSw7JRnp7gqgAuh",
  "key34": "4M7poYbFQiminHYeBiJku9AmFpaPogkzCQuctgcp79MPrz8tntCKJxd2cHuj4nh5bpg6RUtMzXBRusZ6t27n7gLG",
  "key35": "uzBVutg2kK4KLRUmq3RJi5EhffNpHzf7hSvV9BaYu76naFvawe7phmZBRPuHymv7HpPeuGftPy3RJya99KapMoj",
  "key36": "3yCM5N4Q8JydFA1naFYxCpR9XLQyYP8mi4jFXZd9LhM9Je3bFu6WDi7W8HeNpK3jooP7Pk1JdhN38x6FaB5aDJV6",
  "key37": "3akzxDjVE3oFzTRZcmN8zv6cqpPC4y6GUMhBYmRsAHSZLCnkcWWBGoLfmkU5TTmrwQWcyGYNAG16cfymaJNn86yd"
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
