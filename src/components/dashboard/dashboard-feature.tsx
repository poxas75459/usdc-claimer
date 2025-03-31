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
    "41GqsnnMTUKz6pwa9y7B6KfRWqLxCA97Q8MCY2BF8xGmgZsB7yDjWXNufuuaTBdq6eFDvuvddzueMWTwySSckrj4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "615XBBNtiMNeS6eFeQRreyN54DNPkKvA6LB29PH64xYz4tan7rhiz1oAoAFiRn91idvFKi7XnsA1mxyP9dB5JwR",
  "key1": "R25U9PDD2mqG1gyBm6mu65Utwkaoo8FuxSxMWxYB2AVKtfQX8Uv2CGbm4nMioo1qTdQN4894ziYCigBeUKd9qwr",
  "key2": "3YVvhDoRggFqby6b6a8DCZF9a84iVqhG858J9tdkQMffzgxRHeNTcm6jSHuQv4T7bNGkuCfDeDBaqLZs65y93qdN",
  "key3": "42N6ZT2zsFPCWnpNeTtY2DTBkdneb6p4o7oPRUFihuwrgiKWsGq4HK7AYycYJuS9ndiyd8W6uEjzwUZtqSXAPXex",
  "key4": "2fWkuJo6pzkbQMfxnEEV44nz2WZaEnKLhFeGkVDNgkN6LPY9K7b5KS7p8z1jo6pgKM9wqsDhshWwMtugTRniPSLy",
  "key5": "28Z6AYABWRyGbVyd8NSSWvPY7xFDBJKjW1Y8MjHhJKbW6oMbLNpqUCi7VDjECwyE1WDmNmX7SiESSC2xusd5ekbq",
  "key6": "46i29rg4NoN8qVQV42LrndmKM4aCJhiCm7WnKGH2YtxiKp1Mp16Qr97u7qnniYtGp3DPw4ptiMMpJNfy8sDxGZzv",
  "key7": "4dNgyNHNkC6bSQ7Yt8YtUvCFsrzg8ax1pKKe44UBHhvxQfECKf2AGmrYe4qfsyHXwCXDuBDVCtWQEwARPZD6t1gx",
  "key8": "41UJrn9Uiso8cQEUNHTbWehdX4eQ1m2UebV3XSFRvRyN85uxU7QWxqoFkvznaezweXQq5YHNe4tFGhQG5rFyjMTJ",
  "key9": "5xatCiqwkVSbUWF8dN7MN9vuht6wRa4zzMykUE8TdDsaoCrD1Tcem93y8jQ4LchfAMsJciqPpg6ZEtkjvACxcVjg",
  "key10": "39Ag2udk1ZRM1knEKm8zvsHbuHLht5J1bdQHdeJCHDzbWwqwcGxMQwxAETFB3t3xFrvGEBJ5poSpYmBZBz45hAT5",
  "key11": "evWQ4axdLR8iEWhoKMsi9t37NJrZ9G8TEJPsGCJKT4tv65tyNKkBRuVZrx54hsKEQGVZbpH9pRSdKJEVKZ5v3FM",
  "key12": "66Bi9EbpDKTdNpdt5Ni2HCPi1np6ZMg1696MwqLLChC13sGFLvpvsyT26BDsFvZAe4NWhjBqCBNqdjTieWwU6q7v",
  "key13": "j8hxdt5jZAFJMtWNT62165GSauqjmppxwECm6Wqc7dv8RePAnijVUdR7qg7TceJmpb8pX4xAuNa3E6f16bLaDfZ",
  "key14": "2bxfarjkfc8QCKS8763ei41LJUBTYm3kL2gDJnGzWczR2eSnxAExS94kDA1uCrWBHb4k8TQzm5CatJJ6XBepbagY",
  "key15": "4py9d2kSvuBAQcgMZhQhpYRinpvpWVcNviRKu8QEgsYv4q5jv7uTWgw9J4TD12VG9XLiKjDtaFu6rUZ1YWHVTEKN",
  "key16": "3h4fVmruyRZAPVTKV4N2bUuygZvrC7XxeSeWzXH1VabUrVNtgrjvWntRGUYtJZJTexYxwAdZgHydHpnsPHZggX7R",
  "key17": "37q7GvgoGo7BLjEH8Hu4snSWt4WRtu3abphQKQBF1EEhVZcL4LnbYVtHKzfXpVNZBNY6HnN6Lzu2mce7dmAHsVrJ",
  "key18": "46Sf1x7crBHdRHHMhV8fCWd8LMBwS36dCMEUjBwpW7dKQNu3UH3aZXe8ow1htY5vn6kB5jj4iibGm3zPxjqYcdtu",
  "key19": "4tqcDJjbc3LAc6j5BdE6qy9f83nW7PFaP8Wvtj8WvWJrBcaXoRfdR89JPiQHEuKnrkLXzFT14KVmXDL5FzYLv1G4",
  "key20": "4qhCgCDU8fGGUbMLDFVUnkvsHv4rjU5yRwLB8LH6gJAnqsxThyvQAd7rSkg5HazB7jBwDvJB9BEeZaW6qn5Pp1Ef",
  "key21": "2Qv7Bew3uJcnTkKGBS7L8RWTLiNJisi8N2C5LruTuzfrXKJLCRYpUHEc1ARXmqAw2Ns4a8az3EkYDFT7umqLcoub",
  "key22": "3Rgn6ARwtwSp6ukbhJYzkH3XZ1c2EtRP6BJWKTQYPzLGb2T7TNotUJZ3KmG6jHmuWVGaHhnZfQcncE9EtHTSXL8L",
  "key23": "6pAbS7PBa7MEoydUTrFBfMMHG2osv9AkPBNaaDUhMepRfPNReVpFWSM1yRP4PnyKNXWWtsWFK5Pur4N5V791x7k",
  "key24": "5GwXmVFzQEGprXDjPrwmexaZQ4urTf2omHn6YkLz2eoXCm1myCoYd91Rdtq2S76UPXVBT8sGfh2zg5XcezuVYPkB",
  "key25": "4ALek3u7QFhSv32UcMzHKAk5tbTkp12NQwna3zaV85eZBSzQkdBKtkt2BP5m9uPujCnhq1uBY8udYxB6Py55CrG",
  "key26": "53dYhC6UfWAqPoVDC3YxGMAekLoeqt6ErQHeb8TqaghakXo7dg7Bz6LSbYtJQ8BLsHsyJWedALcyAL2ZBAuLgJxc",
  "key27": "t2tD7tvsmuRE7bfzSLU6T9z6BU6PZ7mEHmFFmhp7CuandxZm6V2f4WWrM11f6Ew459hAyT6ZEjFbtM8GryvZ2Xn",
  "key28": "2zoPyK3niAbVsnaPniEZSqHuyxfpjMXP7BxLu3cRjGDraqEbGiwGT6DEgn45ur5SKXdQu5UQEz7WGG1eSrBF2ne8",
  "key29": "4Xg7n896JCETpuQtJrbEN6YUuT6A4qtHJbGiZf6y2UFz9TUCKpStfPSX6i2euaozJVeY4wxvmCJJNiRKL79D6wR5",
  "key30": "49T2h5HFZQq8PHBj7wkCnxXFkxhUG1yW2h3ENi5GDszvoMXQwQDfdkubwjHPE3jRfKHVH9puNAaHRztSHoLkuzvJ",
  "key31": "42xCxFe3Qu3wPSnwzFv7eZaC6AaDziq7dKy2eh3szWkp1Vdh8zQKjuvvpe25t2YLeWHBnTvGNTM4Jux6kkjyu47b",
  "key32": "2ZFikTF3AxUtQTYYQXgbUrZxXTiT2Vj79SHdHraMLsugpzviGYKzVZE4q1j4TSJqW8nZ99UEgvyuDDJXp9E8xWJp",
  "key33": "3Q425Qx3V3ha8NNDwAjVwfNq9zmXf7EjPhJjC2PcCmrQ9aVDDARaDxZzdBYaT7kqmyE46fx7WQYW4jMHxxLKAW4S",
  "key34": "VzCnpEZ91bGEGYo8ShLQtJQbGit1f9vAHwLdi9R4oEYXgdEHhBHiZhRcpyRkpmcKHDT98n9cMhLAK9tji3rasz2",
  "key35": "4WXcyV7WYxZxfXcxVJESFzSxo81esvrXT6j3JtKBnrxE8pNxj8Edy9RZiRNNAwbRdLvAr9vx3NnVuWGVd6aJim5e"
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
