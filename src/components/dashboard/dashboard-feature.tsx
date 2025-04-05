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
    "2fYGmfgPJUNeig98UeLNuq1bUvkKcznF8bmofTefurJvL558PsUabgP28MDtotKJuwCDhZeujjzkpPK9NoZBRgff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QPgu8gLemVJrtzY5K5HsUzkfvguLih5WGzet6FsrcH41edMGxcRRjPVCKHG3yG8MqhkhwY23VRXiEV1886Gp6vz",
  "key1": "4Arh1tebKH6DVPHRfocz6osSRcEi6yCth6XrNsxAZtLsUobt5UQibKwPoS5xXgRypGz4LfgbQRgDeKx8t5GsssK2",
  "key2": "44gsPdG2RReBikCtMPPzjYB9oswBerpTAnMXKy6bayZJuG9HY6y1AwZBRb7pdGRjEUas4MDM1LPF7N7GyyMMjgH1",
  "key3": "2fEGS3s2SHsBNZ3VCxNNZQ8SfKGWvoUV7Zmymo5qUHRVSiKF7fYcQAMkYsztEmEHg759byqyk6M788FqWeYFmgLb",
  "key4": "5ZzFyBLVXf9LDzsJwYpxTuMYkucsyfCjDp8bCuetQspxx4E4m77X91y1aJrbtJMDNLke8LxsQ1qNpa82m9hW6NNQ",
  "key5": "5jypYXkj6gZRWvEp5gN9P58eTZVKbXLHjM2ZLFiah8CsPa6A3KddGLFv5rbxMa3kYC4ZsPbLa2iPkHMEP2TWiH5b",
  "key6": "2rcX7bhw3iRcjyXHvRWDGu4DKcdYRhpATpsmBRqcbGzo5JRt1sGtpAesNLZXo3938M51WeBVh2Mqb5NDjGjM6wkv",
  "key7": "2Nb7oVFnQGuUFCquDkRgHb1eKbhQEShHJ1MZurm5PRx5sE1uKJTtjSAocyTfdWy1WE5DuR7z7hR6dBM7o62K2yTZ",
  "key8": "4L9LKJJ3ptwWvYHJuDwjTKNA7AqS4kyswq8GmTttaBTWxPQ7EKq7Dqh9JKA5K8HMHfcymeRxQmkRC63tcZDgU58k",
  "key9": "4wuHtD4ZWzz3cjv7kiALA4oVzvsftGGZ8K6jeb4HeULPE1LArFqw7C6EYzQ6WM5qY5ZJHSDZYxGf7sEQkaHeCGZi",
  "key10": "4bWj16DMrXWKJ1XWXsESpEyuqSn3axYnZfYWMSothsFKXcWjnVCfm5a5i4sUwZ4rbhq797ZjmTQPJV5FMqMBK7nM",
  "key11": "4rWzPzB3TuizUse8YFLZqgwokYcX3cT9ZEm3QmkFnQqeNUjRxC1BKCs5DxvXtStTkm5rCBFehCBux1Lb729ZpXLR",
  "key12": "3H1CzrrUE4JbWNwuFBuhQiNPpdMeK7rNAgfi9ewQ7H9dYjzF3jGWSvkMzLF4T4sYQukGJbp75hGNihnAxPX5H8hi",
  "key13": "2XbUT8HGfbiYwh2qCfg7gmZk43ZNhX2XaVjeXnU6ivPd9BUABC6HW5nT6ZrkJBrKqi9bk6pYkXPDCfTk2eUFgZox",
  "key14": "5oszsYxNqhnaqRefuXuwD2MoCAFKM5VXzT4ZBA7ovZSzevmqqBT9ZPqYWvLYN4cokV4Gcx4NoFgN3hZDC1PNiDGM",
  "key15": "Gt7jSSqn47F3TfTq1E8ibVeRUcb4pBrZKDe8yPDRFKtMNgbQoisyQpkzGZouU9V1Pqea5Cnv5DfwTkqNpom4jrG",
  "key16": "3KHBFwP1pwnWJEmMQqhumMJd9koi3AmisGhkF2gDbnqQQY3jJ5NY9ayP7xyLBUw2E1dEbfPTTwuHuSLQ1RaC7N17",
  "key17": "28mzAmzQRx1ZXpDsS2RZg8iCY4AR2Xc8Rcjg36fnAqua3babH3Vnp6mh1V4VZbHrWV9USsJg2LpVPsDLLAEXyArw",
  "key18": "3ttppmFE6XD7WSNPmYwsKwkDr8gKXuKPWoNTRuvdFrMcXBWaVDKG3orLNZvWsRWAFLFEjrvXt5bnDZovHtiDk5cP",
  "key19": "22Y7m6dzpZocxvkt2ntSn7YDa3rRVCMnwLWGLVaYdb1wctGaLb6yXGfuAf4fNqgjikfjyhrDCbpGKQrFkfuphomH",
  "key20": "5u4EqCkJeUDoLz3EaxKFvJPmT9Fk8Y59zEkEgJRRD6AGnz4cK18uZkwCtpW6DSJY4ZMWNSEa67AdHWT3dmzkNyNJ",
  "key21": "3xrfVDbihiqEtWNypyw17vVgbgqVREiCmQUcy3s8abFcMjfuHCVD8ngHV4zNvaeYH5SWpq2AUXvScnvZy7fQhhHK",
  "key22": "4AYPxJXAPi5Db4XHuFKT9ifmyY1RxNUqX9hFNxxenRRjvf4FycCVs4PavVRREguEj5wJ5DyX8bRXTe4jgkZQB2XJ",
  "key23": "tKuQGbK84ah1doBNXaYfsDfTMf9KLgAq7tL3TBxV5y1QSJEaZpgUqdJYdkekEvbbMGS2XW38Vn6fT6Q2xA1TGNi",
  "key24": "2oHucPnZt3XnuHsgktpjPjdK42EvF93nCh4MtwZ6YJNbM88DjMg5L4SWg4GNXiKXyjdEobF5chymetb4vxb4B6hX",
  "key25": "4Mh7S9wRKG5TZAVRSxqtYVsRZePBFi9bS6u2ehYPKLZnFt4QXEVVCKHvn2sbauptKwLrBzJ1WiFxYEBeTRE53Wz4",
  "key26": "2Fn8LTrCTwdLuZ5sM9F32DTG4JrU5h1eUckrNcwiHCMLsywp7VAoohYgzAJ3Kf9GLC1usXoYuXwwkDnToYU9d5Vq",
  "key27": "3vLn3rjnzfzHaaXEbQwQ4wLP3noxz9TRukJdGy5pVW9YsqiL7rKxxJskyh51b2qGsVMbwrhuL88UYVjdJ4RUxsQY",
  "key28": "3b1ho81Z3Tk7ZCpz2zA7HdunxrK6iy16mG3qtPYG7EE9VaPLRU98ibHbDrDcX2HTFZyR9L5CG9XcC3wgHzmpXgC4",
  "key29": "Dte8WxyszfpcYTKBAA2xKejC334j1UURBji1y71nfqnz5SSYToWbgNogXGf6n9GUVZ6C3qyUj2y52AbSEPtXVub",
  "key30": "2hxZBmVjaLoxVvxX1r7gnzRJ3kquJtXBM7Y1Vpbb1NTDvH85qUhyX4pBC86NwYvZVzUQb4BKnkjAnavNHxLsuzSx",
  "key31": "bXkPAZwAWtG6ggakW8Sdr5H87Gvchdbpa37ZQjSbaRCezDQnFL4FJs3GP5r1LpTZeatsQyhvGxoBy5rKRqhWQEZ",
  "key32": "3dquwWoG8DgW5p4m7MiHHwgYgKSym7nAoKVuiQgKM5TrPWqzvGMCYkdt3vxxni5A5n9StFkVYcqefxZGDLSvegUX",
  "key33": "4he21mNxJzwNSTuna6k2sq4bhy2ByqjCnTSo27qZFSYLJoU3ZdPLTdf7XyHJqmKniw7xGTmCr35sYy3QcHmMbEC6",
  "key34": "2RH5eChantUCSBa3vhPiY7mL2EoLZZXGzDxFPibZeKVpncpMjkVpPnmeysn77ntecwHsRXbh8vZWVd3znwmfT221",
  "key35": "5Aaqbwgzxqpgiu86G3WVGN71LoQoMCTteX4t5zWoBQeX6Zb15pm4ARoroB6dB8wqrd89gMAoVNeTE7aKLVZ5v7R8",
  "key36": "61caobUFoZZ2UEj9tE3B7CawJJWvUCoL2ozb1kJDgWFbdmjpBCKPX4Fvz3e1QPfFKLTHmBdbKpSPWZMCcWXSEhRD",
  "key37": "5UfaqELJt4rk5E2uku8Z3Q9ivrozhJdgZBiHrRTopYB18SAN3FHCqf4DN63YWLj98uMKWb1N73fzz8hjLCz7vdxm",
  "key38": "3RmUVpiSLbcr9nYoxtG5GDFQLK5jAKKNadNrep4GV9mHwmLMJNPDLJUHRa2cg15rT4VjPmDrAuANnup4VT8Dihi6",
  "key39": "2k7XkrJjc5YjBb1Safnpunmen8NJrL9oKsiXhHp1vabBZogKduTqASNoyM5YAA5iPBvpQELAEXxkBqQ9jetjR9b5",
  "key40": "2VNCvhMcYNxb1w1LJbxJugYevgLxCjVU2zWZaGiY5crtCBY9eJu2uLAeZ3E4n4ftqN5FJwZSpNE4RaUy8UVCCrKF",
  "key41": "xpKk2v7vWBseEUnV4y4fWKA8PWvgwVYdt3DvjhWbrpKehkh8z1qPk4vKD5crFLHmZnfjx517ajmk3zXjyhMGUiv",
  "key42": "2sToeq6bEa8pVTMgz27s3oxc2jRdj5FduizpEoD5BDPHMkBkCscN8MABobsGfNuYgg7FXRZiHvAaydL8dFy7tmLP",
  "key43": "4KNUJBhnf5tEwzpF4XvDeMoU4G67ok8doQoCGzeMuWFtEdww3i6Mesk5e1rzCmJ1k95z92WxzwaBWD1XmTh54ikZ",
  "key44": "3Fph37UfvGYGeuaVXX6Lb33WUUNdCku7xaewt72KbVY2AQyULXFQAopbDPirvaHowwvx1VBKb8vBoPcr6zFqpWT3",
  "key45": "4KtptpqUGgq2EKhPy1XJFpdsKuHNSYsLwGz3torsCVLAYt8BXGpnWadQNnZWNaM2RAHuii3Xv1D6ZysZLr9JwL7m",
  "key46": "351EqY1Xxu18GmpjBj86QoRQsgfdFmLkdZxqEWJSaFXVZg3M5PDP7n4jX6oTYugUSEhDrsy4uxv1gvEcKYh2MECS",
  "key47": "467ynTJDt89XrSSEdqbjgcFWQZB7kQDxsSpQVSPtP8GJzxppUtnCAfApCUZsngAa45nEVW7Fh4rAS4qr5ANZ7Z6n",
  "key48": "pzoRssQXtw8HeAvydc9yfbAqyCgZ9U5BZmBVyfPgyxJxRjfX749GXCZDbo7jxuwLFwGBuE7nruS3wab7saGbcgH",
  "key49": "5C1ReJLJ8jywtGUGrkajTNDL7PB1UZNKXyV1CZ47bPyzFnWYAPBjv82KfyW3z7EBfhWdMtxQFpVArjxGHU2s36QW"
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
