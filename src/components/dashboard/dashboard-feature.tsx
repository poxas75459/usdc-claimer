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
    "2c54WAduGEm4Nx5kr5QGp4WeKKw4sjtCgAYqwEV2niX4WRaDaTsuLE8hxqmLNigmPRkGUSqVpz6FL3EN11J4g9oY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RVwvdzoATMZzLiqLdcirKJM45rTew1VoSeZd5sXDAxt1Fcz7CSMQBQfQY9cW4aJ8xtcR3eLM6tRaxtsRNhYoPGa",
  "key1": "31T1Z8f6ndUFuR6C2ZuAZHPax81nsBYy9dHbt61jCbpeYdzBNv7CuT7PTXQ54Pmi8PZr8aiveYAX6tzRbtGkvAcf",
  "key2": "5kAbg4xPQwaNuwQmyswdbkQmpE8SajzVRoPdSwDZbkboc7LyKXzL5c4h5uMydVaCiERiNS9zd9LdW5EKZ3eWWmKq",
  "key3": "2JrcxoPrgk2coSN4EEqjYomPkBGVtAaW2LVA22Tpe1NAvPm27LqUyh1EsKb8gUzyzG2TsMCHgGueLvcoV2gFk5yv",
  "key4": "3fhTirWSJzFmdWpZ7GG9uPiQEcxUy45wPe5YujB7meKHKdPKzqoQhRBL5Yf72ycQCkV6udWJv6Uv7a1VB622sJH9",
  "key5": "2zxjZGRcRMtetZFZ4Zbj3YvRyg4D5NvXS7wXR3jwnT86MD5tFXa6nUBgs1a2ts4yC7j7bgGV6DWW8tfJqsXtoWM2",
  "key6": "4kyevGk8up75zspbzyEC8kHYqzZYtYnudo5AKF3s2sPG3WkGomiTCAecVhbgLP58uwjLyvY8yaHDanVu7k3WCofH",
  "key7": "4LkQXPVogw7TgXBNT31gmo4Z7VK8eCgbP6sxdj2Rgekfy5sofMbfLz59DBiVHTKYeFW95Y3XNXPZd8RZZzspCxuj",
  "key8": "4nL5aq3btGcUyxQAwFcqxQ5YHtEbqN9empe8RgjpFjPDRdqzDfUJbNttjr8WeujyjbStNswJG3aqF4E1j9wrJWfi",
  "key9": "3VCbUjMHTSQWeYWkf7Sf5pkHqNFr3VMTN7koxdPywq1jHUT7NToFmA7WMt7T2BXJsL1oZBpGAboxpoo5GCvcco6u",
  "key10": "4RKidkGjksNCMf3eYVQG2NqDXaQsYdP7zAPwQFszsnVumZkgs9adQhnt88K91vj28wEYddm2Pfo8PHF3rEeTmksG",
  "key11": "35kVhDqZtKZvw3pQSjkrcmKX2xJB1UAVn5JtQd1vzNeu9v2f2RKf4v4NiXiYEo8DshovpzvUS57wCe9m3B7HYvpf",
  "key12": "3gSKpsMJQ5hV4dZKFyuPVafG6m2Yb4U56sTkvbgcCwbmQmdHb7fJtWJJ57TZJs34Kzau5gFHN66h112aedPUvrRW",
  "key13": "2Xck4sjvRjfSnSqsKCkb4jV3izvV64jgGKK9o97b9w14Y75Z9zpPeS65hjjjaKFLDjGCAAXHLkDXJ4PJqRRQJQr3",
  "key14": "5G4bDJZDZ7gjDDNJA6GRV6q2uCrk3qbfNN5BAfJtrgnHeQDPhFckZmrn61so1sAcqQkEHFoXYPwviwfFRqDQvVf5",
  "key15": "3MjBpVCwChnHXLoGHTQDWNvQzoYPWaofEtJ6TcLQiMPnGn1UozjfZUEdCd1s8xBG6BfTCQDxVoB9zU4nnCKnhrqp",
  "key16": "4C6qxYUq676rx3gRAA5EC1DmrR76aWZyxZRLiG1EDXjA3zC6L27o1UnkmguCDcM4e7pFXUruHRxFL6usU5PATgSd",
  "key17": "3nzugTWAYKDDXnkLTRjVaoYLpHum9V4eXpEmMa3UeEMq8sSBKPvTPWcy2stYLdNS6eGz2VV2gDwa9ajFeMF2VN6H",
  "key18": "3VUpv7ZbtwLCeyFBrnA72Ac6DkyV27yjYAXPnDBodAyQ2fVSkZSUcJmtDTVQxbreiv5Xjge7Bh2e5zydABCRAp7R",
  "key19": "5uxJbgn8fEiwr8Bw9KvxuDVX4JNxFstwGskY7m5Mena7bbWGbWvyd2o7ciKp8ip8vPETCENCbZKuEadH56d186B5",
  "key20": "4SJE1afi7T9uTFj1DDpE9PeisLGtnG4KnTjowAqRnZjjqwTcRcfqsQtXCiTDoAT6wwc9dVod4kVCgnw46ZiVVe56",
  "key21": "2TXVJFEu4TA9MnCzNLFW21Qi5WXua5FMARTXi6bFfu8YwGTcmJGenyt8bJJ3wHDc9ZrmjUZU817e3DqYG4vXfwkp",
  "key22": "5YaVtsxHuzhUafMTS2bmbfmi7nckS9vMN1xSLF5QwBttgxGxNoqTUhofRjsVMQ7aG16oaboQpGnW32GLuA1MeQWo",
  "key23": "3oxtDnoXnNfa5YhrymcwZKwRXV456azmAYqWAhsbphprk6DRK5gPkuJT4F9514kkvLf5ugCzysrgFWM4VuiYaEru",
  "key24": "Eq6nbqHG9RDXmJhKK3XScs2FCFLrPPwfUA3WzHpEcvGTg7Wj1F1zwYiMRQ2NqnNkz1hpf2cpd9nPzZJFWok4ciw",
  "key25": "3G2N6PusBEtZaW4Wrty8F5REsvcoZJRQQebJTxoTrk6HiXQmeT7Qnp3uVEjvFB62uqzzi6CJofRcK2b5cycH5QnT",
  "key26": "4n4ftNxQNuU6fwGqKQJ7h7bMchVsL4GuzgdL2PcnjCTaRg2K1gPWhWLeYkCwrU9QBsKK9qook48BmiJE78GUts4B",
  "key27": "4X81qmj4LRjNzXH4JJryBdanr3BFjxVxqe1HKVHD6kKbzLf9fvhYq7AUZ3qTwRzPGT47oDzeoBfKsjEQ2bFbuXCw",
  "key28": "4Svu7JzDva3dkHGnTwYjZXxhQPG2v27YMHaA8K5r2SS5yDVDSZRSDz5kAa2TLZ7F2FxXhHmQzi4fbZyPS6dhJxgX",
  "key29": "28oktCvT4aRmYWLwrh86zLQtnviw3DUfq9h1dKppCvBh7f7qwUsub9xoyJYJTKZa8wuBsNfHKAcG4xmHR3KJA9Dv",
  "key30": "5A3DX7zn7oComepkXevQL6X6DQpFzjPLmmNEUBpqzxJCyKkas2z7zqbwHbu9NYzqApbVW5dGUVd2nYhUhh9tzew6",
  "key31": "5UDyeCSu3vyrnUJh6VhH7RVfVjtQSXfMKhBn68YTJkTjQqigtGbGnJCHLS9u6FUWXXpobEvPHB3eq4HjxEiGQZWE",
  "key32": "4degdQ1E8L8XZYkRyftLLhurhyDc4qFU53mnU6VS8mWUsxXfeKDtD1Gxn3xcmcUHje5durpf6VGxw4fxZUk37PdR",
  "key33": "5PXFgvBBDMWqnsQknjwN2PqPczWXb2bzXnsvPqTVwGCohkQ5R9xL5HT5Uo5F5oQnsSNxkWHSEBn6sTkEDQ1apqx4",
  "key34": "62tgmxnRUXhDgNHnn2fCTaeiFGHPyrqWPR7cWYjpB4Xb9UWyLSyZ8X6AAhmVwUUDEkZqzsCq8YYGrcxDfo6gv4Nj",
  "key35": "3qTS1qdU2oDTHse573QDmS67tbSbDPeBT7i825thmbFKATSmsL9j9qh3Xq5F4jxfcduvS5gCgufJRAWmpXhWPGZ6",
  "key36": "4PuMHkKTfhZ7u9eZjMT24nyusvcRu7Vka1A1tt5Sr5Yp4wvq9Yc3wsN2zK2wtaXA2c1DcDfFgYsmUzHfyyqXFRx4",
  "key37": "65vyAFGJ6voHA9z5SkK6oNyq89XEWPvmGNyzKTP6XSAvevThpoj3tDrEpkGgpQ8t5cgkXse6sqFYLBwz62jyaLE4"
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
