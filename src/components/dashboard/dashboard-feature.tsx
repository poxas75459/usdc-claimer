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
    "3wgwjZ5DVTCBAcyDusYWPSCAbvmdAELtjGdqqEYYx4zysPwSq3hJknVJPjuQxr8fkYkjm8RCGDmBtoJ3w53pDPKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2guSorUhzNqG7bdMTnN12m8MJe4s3V7KgWztDFQZihEDG8RnBDDQ3xkBXihVcwVFfNhJc43FHM2nXPngt2ZG29zY",
  "key1": "cKEfZzAGpScWqZRLbVKEkLkyPScjVH5bchCfxjCYzJo9KGXCTQqUjkyTHyWTzxS3fnUJG5VnxgsYcgDSzPwRYN6",
  "key2": "47V1m9ksykVpTzLzMyLXHqTLTVai2VBg3v1vDpxVLjBKBvVVsNgGKBXCGu1rPUin3URdGbhWzbS4LXWNgGSd6nWw",
  "key3": "57W5FdGwoo1qmRQn6kRMb89YqADC9psZCWFvUk895NjGMP5vXTjqzvoQi2N8ob1h74HfBYELatvzjnhuHeQverqV",
  "key4": "PPv9g8dr6emj79ttXniKQfx87QRCBJQ2kfDk6wyQtvUZ8Ff2j15shJpaTWXr6D6rYoAoUsUU98ZNE5T8eTMXKXX",
  "key5": "4SJ2Lk5NbEvBxaPZdX5by5ZX4D1dgQgDnTuFYiKQq7r8zdzXngd75fPuTwk3NdG7UXqbpp81Cq5ko356fForkMWm",
  "key6": "3kLeNzovbu7Nm6zNcTn9RGsxftBe1PwZMhn8p9d1Aucvag6Dc38micuFnJ1P6muxZTwRQezr4oiNqhvJGrmpPjUc",
  "key7": "24HYUdZ4FQucmySYznDK2RN7g6tSFtWirwtraxDrohtEC9C4MCX91M7pQhpYYYtZYekKhUbGazHGS13gwRLppLbD",
  "key8": "5Kg9wh89a2C6NTTBaKwCCNqv2FFkKGTjhr4Tyw3JHh4VDDsGsrh6ukfmAdhji3qYCLdrnn1izrhy7izZJYD4xw8e",
  "key9": "obDPPhvvrnH2cn9r5yj9beb78Uptnv3keirS6cMBS6y1Fk6g7C2ZqTdVaQdkt1qwRRKFdh44cGrb53s3JSUic6r",
  "key10": "3uhehKK3ECGTEd5HGT3ktwnRSqsJEpBQpykYjDaWB8Z8qD4gzwXE6qAY1yWooAf9CLRqPevqGZ1VDzw24MDqP82C",
  "key11": "4EXpXHu6bUy49qfZdnXX8HXF6ttt2aieA6K1MvcdViDwm7nP2Tw9p1pbpafHnj2t5VkvcQAnzuyFMessfxserapp",
  "key12": "5VMC4wQzacxYkaMi3oyEGEz1G1M2k5eYrzTrWy9ZQjGZLxQJ5PcJMyqTFMRwF4S3ojNmEMALvc73yCsZ88PJ51XL",
  "key13": "5kwwys7NAbuV2dY6Lj9Dcf56UFA4MSHkgtxDZnVLrHUFvB8HLEMUCTW1ouUogfyeCU9YNsFEhjJSgzX13SkpSCfC",
  "key14": "45nrH86rWv9r5Ro1UxwYKvNDd4ik3U1xW7cYfCthM4eZf2hygtkrc2cMNjtdPqXJSGNWFUYNXaDMbVGjLonS6Rco",
  "key15": "5ewrLMLnw29QENmzxoJDANQAzyYe5nPx2mFxHyXeVocore241xhjcJt4mDDzphADZ6ttC9uShzD8e13Jiz9SmqLr",
  "key16": "64wm22kzUMyj3J7vBCPwc8mTxdb5C6XWo7WkQdXqefdwQAyN4XDWmxeoiTQTWUHr5qe6FS2qFaiBSqxHnH39GNBR",
  "key17": "3cUXWEFjA8D7XGtPzmHg5ozx5ubTVFs1q5UK3ucYtjebmjUc5P7ch7GJgJwCwZHzNVjgC5wQMVM4VQYMwCK7QFyJ",
  "key18": "43ctXYQHFvxtp5NgnBjd3XGzhCK4Ff5F24GdfHUTi2Vj9LsiNZuE7YaCFRnXBKoessR8HgWzFXLB1RsiN2MDAjrY",
  "key19": "4DcRELVgRXTY1sZFdkCsP64T7acb1127cH1auTHA9qb7LZEgLLXBio6xnN4KQ6K12xReMuAoS7aiy77u6Xe1kCX1",
  "key20": "4osDg9ispteRfWXtJLNeyB7QVP4gmSFP9Gfn7tPu7yqSf9mnGMhtJmPoyNfHYWqfEnC6pSxM86oiajwYFH1er3kY",
  "key21": "5iXYWppizvryK1G43JZmDEJfqEHJJBdGi6qdUXdUPrUYc2ngUSqbyy7abfwnfKJ5XTvg2bhhkS1v9B8d1r9d5Kxz",
  "key22": "5WsYKshCtJmhjxVjt3MEzv499gLPe5UYDdqd5prjm5GAUkU9A9xEsYL76BwH9JTgTER1GDnjuoXNV1AvvQNupiqZ",
  "key23": "43ff349vRhLboZAP3kQR4XTtg9vgqk3G6hmBHcVaZmdMw2iVqavivoygSueqnYhGnGFLxewQmhGQ8W5QpwkPZ3Lp",
  "key24": "49UGq9VD5TvZPFMYstgfYHLka4R5SoJmBg1qA2ZKCsRbFWN4sAGttKMB8PCPzWHNs3DtcdNezmH4vHofJg29SqPa",
  "key25": "2kbHLJ3g8B8NVRUUhUSS2oxe12nz4CCtgZKx6e7KNP9GWSQJaQ7mS64UcTwSnXeB4oiBZSGj8CEFDnu4w8AxvHan",
  "key26": "2xDrbd8niKChvsqL2U2W7d3QQi3c4bsud3GdwnBv1DivUqKmgT1dU4MZwBbE4hKLuLbtQ9KYHzingoaFaS1F3AXo",
  "key27": "4mrM98SBHMBzsBKL7u24jPGBCgYyBK7BigxU1f2Qffw6orxRqyuLBPqLzEWrUVmCWdakdaStnFfygGKEFKd5wLG3",
  "key28": "2BH1g55FMvz4FpX29KqYZmEgcySuQFX1s4FsTotHb1RMkdevWhzpedPBd6DTmH8NFcRF2XhVcgY9z8ebsgHXKE1Y",
  "key29": "4D1csP3Tnto3anpoxnQc3nUYcqBSVAgj1PbDRr5Q2GteNhHek3cWHU4ADxh8YJLsuXGLAaou6zmLhnHXvVLsXvJY",
  "key30": "2zYozeXm5QxKnF64JpARVSwW3vNTjZ3xHndQgWj8bWuaqVNqaxNR1NFtdTzZxZBgRQ2Ee9dZ56fyzgreVaY4474z",
  "key31": "4EuA8ZzGagvMLsJB5rSgzcaddvRDEFVuyuNAm9CQ9rRNr44CSPNQ3QoNuaDTe8w3Y8gvH4C1Eu9muMZ9oDtNfsGj",
  "key32": "5XKLAVKCiidFu52sm1ZNcgJPh2PoAehR5zkUK1JCgWAtbW6Tckf8XGLUv5nocUJWJ4Po14Jj1RoFkfN6LY7xbEi4",
  "key33": "T1bXDwBrAVxDcaGmhQQo26RRtE211FMhrpRaHFvwK2Jv8FmGeqB7B8kYKvuQL7tBxBfPd9g8nvKoKfoaSzuHRzG",
  "key34": "3Z8P7xAzxWj17ty23762AtVSjZpknydYKX4miRppfKt6LPWJ2EmcweXTgNL4M4NyrMiCa7BtmB913eGUHRqN7rCt",
  "key35": "K5g7cstF9Mm8yXRNvihf5p8dCGWYCkJSAfz9h9rtawSnb3KpraeBpch7bdyVLzh8PALVenNJ8thwz6RMD5D7Mv6",
  "key36": "51PgzAoJmNnV4CDtujUvLLEC2SWfv3fSAWe4geonEVs6ejDdBQA4soi1YXuPK2Xr2Nru1jeoDMppmw5kbUrfC9Pj"
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
