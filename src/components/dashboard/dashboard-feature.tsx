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
    "5jiwNcn9d2tnfqJDDNdJcFz9RofMQpmyFPBPMNhecdoPrgTdNfhkzZBpAYkGeXsiBMuVVwc2YaRDTeuWuEun4ZN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fh662UKBgTAhV9Yf33do1aimBPPJipNiydjc6Y6wSwks2Vx3ySaCZhS7QcfPYehxhbeftVwVA9qKqCBfDw7NFeA",
  "key1": "2o4Wv3QdHzMi1uxNwHpfjttqaYKPRvFCsCe17ZLQoM4BSohxCFvTv8i8pd8HhtAj3UHx33pK8yfqF7vYJntoddxq",
  "key2": "4vBzvePeidhugYYkta2U5uimkmtspef86eX3gfXT8wuPcqVUox3KDHJTJLcn2ogtvKNpZazSqTdSPjvHz585nkd7",
  "key3": "57B9KrgBKPMm39mfLozTV2zYakGEuhwa2ELDdNXV1U8VGThQyT8S2D1CJJj2s76jsS9q1dqEr5KwXCrC7MabPHY5",
  "key4": "5yj8GGJr5tqnMeGBTpjNtT47eHdqJT5XC2AqDr6Edaa5idjwqCT7kE6EsHZVHfKVnDsUfLZE6D3JZS1QGbW88ZM6",
  "key5": "4QDXF7aexn7K1LHsEZ1NEKcQczBueHMghy2ZcRwPGnshJXmgBKPAUjUAEw8ht3gs8XrDMPY9jL7EFE9tm9gvnRTX",
  "key6": "3WPZNWvpZ4EPhfKa8a9Ak8AN5Gamxe3H5rgZp6T5GCm3Hqoj5HuJM6gEtJSDz5QmLeb1yqrTgWH7J2oMLv4wweB2",
  "key7": "3dXovYbWxcuQE3rKCWWe4gYGL7HFYqDt5v854PQkSid4gUQHfdWicxF4R3RXJTXqT6tBmmJPDZCwxJG43hhofwSA",
  "key8": "4txAyNUtJvB6uujX4JMzaQQ7kgCrJriCebCdJN87qq9T8yMmjsNSziMfA8LnJUZ8vV1LVWNRyvjY4UfcW2uV8eSm",
  "key9": "2t4y7JdQkZj9vE1gNGFi6E18QT8Dg3bje7KFtrToqtJHBtqLLNZwCj9hggEq76X5QDTkkfBQbog23gwoeNsTq3Sx",
  "key10": "621SSuvpsV5P1vvAtypeveasfsXcYFoVkdXN6X42jpqMxi2NSLnrvk1xrRKeVMZT9FnPBcCf1WcBcccm8TDgsRJu",
  "key11": "2qoCVEAh6SUcTUMdkz8Yn9KPS37cuBNsqcs2EaWhiUBdR12Dhp1xYAbjz954h1pvufgN3wovkHw4DD9BtUDbTdyj",
  "key12": "VqqwJKfDnmsWK6dvBZeaUSc5AQG1giHjkLsK1AEmZrcLbUUrCXoFdmuBH6SsmtpdHQ7avAuFvU8UQkXAV39Xhfm",
  "key13": "4gLRFJ72EwjvB81zqoMt4Y8tShi9iF4H9RY2EKv43eTBbC8zVBdHk18qqudZgZd6uHQSExz1sHyPhcbvE2evo2vq",
  "key14": "4Xi7jeAXSgzitPLHevbmNiBEG1HeMWHDkm6dx19ndxz5nTzwYdLfXF2nv5QuABmsFwzaJk4GYtSMbxTrMTaRYKAX",
  "key15": "2RhKk2mWHv6zHJpGqn2VxDPprNoD7mETSEBz7FWcu7P3KvuQwbfZNikKAVyL1nQhSXLF7adGvRkfL3h2J5dyeyqs",
  "key16": "4UmvvBF78kZahSbv4X2W7LxnSVWJ1dv5viLQjwSxZxxEU8hZFfFCEGnyGvpd3PsKKGpvTJZT9PJWmXUUTZnbezJY",
  "key17": "2UG431wVpQ5f6p5ai2Y5ctU7cmfA2XMVUwUD4of7r3nWZcVgqiM6kPWLJ5mXKb2XiN4EbFyvvu1iktuJzd757PaP",
  "key18": "3DJwaBkbRXFiB8Ggegy3SMjAcAq2DLABzxDPajRqRrnPSswJeiFvjHdzXGw5Wrj5nvfVXC6d9kr4ik2frippksiz",
  "key19": "2G2M6Q1GwM9n511jk3Gwt5UK3yRY6tMPKgJG6SgeUksW6wzpupAGtsCrjATyH4Hwv9qXqdKaZBqGLgTL4iDd77dY",
  "key20": "3Su9cU4hq2TSMRgHoxFrFsWwD89NoPkHmB4GQggWiBxK3MJjmRT4w6XM56zTScJbEDA7wym5i6PHey2vXEMCBwVA",
  "key21": "5WReYkgrrB88NjRLw2SUXE4NytqRa1g9SxyFiZ2EvVUYPvXo2W4n86KdbWrCpwZgu3FfSv1QuibqMaTNCENqCcvN",
  "key22": "4KB1T7utZtvodMgfE4WJYkYaCjdpueLWWEWJ8ZTwwnvWWJjag4Yq7zzWita2gQGzmyV1cEZd9eyaiY9wnzsCxeA1",
  "key23": "2WMj5GeVQUnQbyVU53Woyxcmcz5t7PB1wX54PMsaXxq1hYoU4fZSNcpQZsMTvBRyb3CtGuxL7FFA3AqHEFLumbDf",
  "key24": "isCGfJw2BuTC5jnZTyppT7v8qxLZPxZnkTunJVJoab1dNpjZoiEGfePXb91igw2mkdpq7essLRkwcGiQN9Hwe8g",
  "key25": "2KBwJWVhVu4p3XcEubJEaaaB2keZ9iP8RHd3Vngj574aWHHqKdVFS4JYbo3KqYHxQ1bCVb1nNQnmPYQtBcm3ucwv",
  "key26": "GiYMdvaCHBXWuZHEhAZgWoQ9t11EavB7Z9CQNycnfV5nQ3gqBx7kJ6YEvVwHwUXfbcuEdqUAs2EBMzhycyjjwhH",
  "key27": "aCmf321L61Ab3Qn34aHTafe6FRAEYPRfzz7X6EV87m57biy2ajNAdRPUNia6GA3xS1YjauV8rDXZseFcj7hm9Bw",
  "key28": "gdAjG4V2FRbCoNseZhaCXNogmLyzAoTTRZQQHmYHDMMtmVUw4n3WPFSayDJLTcAAbHDfnzt7Um8UEQRMGmqGm92",
  "key29": "4ZSni633Xmb1kGuF6FoMPjxvtzwaA5diSPhgoJXTr3qKGJCfxKjngzG7cNe8nYep3URm55Uh1h4Ca5U3vgp8npnt",
  "key30": "4kEm5i772zCh3XSkaJnBpAKxe9395V8RhzzbtTKRZVae5b5DTjvYTbfCzMqTAqesdauncmQKFQzBuDVoPfJM8osa",
  "key31": "32fsPECKqCBXNqytENZXLVv6g4nQkLEwUyhGPQBeNzDfoxoyUhLX8GWMmzQucD78CX4CZavUPGFoQpToJ2URxevp",
  "key32": "3mszSk9exGicRDPdozLsE7CPNm4qRwCXnRCjq2xXxLbdsDwBKDyouyFDeGCXhHrQbVokWjo63UPMQ9Zq5mN5GCHy",
  "key33": "Uq5CWJk7vPfiQ9Ujpss5DWShabtUmQ5Xe1vf6yHFFAbNvptTviPHDvnK6Wq9dAwM1b9BiLFVc2XABt8KMX3kPP2",
  "key34": "gJ1WcX1TD6eebzWHwNcD9hMJutsjJ7KsP49bNDJJRT8A8F4LL4bZqW8D4cieBKvMMMBaQuq2XUeWdqnvLdYEFBE",
  "key35": "5stHCvGEk4Udyzkm8rkVCsud9isVR26DdN6SEwD7kRsHgaW1pQFYYCwqAn1dvA5Y6YfCGNFaK74EtyoBEhSoLCxX",
  "key36": "2ceGvuvon5erVUDtmYmRJzp5c2LbUzjUgjbD2cGsHhPmq7cdP3MnwFt6LpgDqwg5yQUu6mR9kQTv8qNfXTW2XZsJ",
  "key37": "ssp7QcXmjJXN276adWPRQeuoxmWzW2gCcBpCEQdf6fAUE3Nj73dnsLpa3KGeV6yX7gp5ZFz3XGXFZ1pm3M6HgHB",
  "key38": "2sQf8FoYNppbfa6eaHT4wMyiD4TwrZTVBhQfdBt95KR9J4KEYqFFnt3cba83ipo6swDCmCwWc9d4ReFr5q4LprZZ"
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
