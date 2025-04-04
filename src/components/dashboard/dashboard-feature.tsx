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
    "4Jx5mYfjtyu1SL1nHady8QitnQSgTUUho7f1kfgQYkwU8rqcCzydMe5XA4aTv7Yb47uhv5nWz6SZv1hYE55uhkM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23pqFnZb3HTBtLuz3a4qMP9vyResxQAVhTNkGpTNAiru1ndn9LBE447j3Q57SQJtEzzjruCpaEGGg3zUwuqT9hoS",
  "key1": "3PuoAXxaYYbvbtP2XKXps8UcFtex8hEz4wYTQWGL3XYPGTSD7njnvEjxbCst9u4gY4Qu7yb7bhbFBLn6VxUET7Te",
  "key2": "4TWxBR77K285r7XkD2dvj1ph33B8VieNNornETazCcprAriFbbRHgQtU2UDXsYftxA63yPdEFnQEMtdwdAVAvBeZ",
  "key3": "dop45uUEKzAWiuJKbjKndGFjDBnyLH3MaGLYauVVwNBGNvTryvPvvdrmEeVUDrW7sQ6NhyDQ6yRTwRQrFehnMEx",
  "key4": "4DMh1jVY2MJurhac3e3ESKV7FFeC5gZE7oEd9vn9szLZdqWxnQnH8v37RYVWNhsbnV4bvKsMyASBtFYCYLmDjt89",
  "key5": "EsEB6Dg27qgJKcCi7u8nz7HqePfSvp4ZfmRVpAD7dLnL9NHubFa2qc3HaVZz1B9BDVZKiuAUkKMbwHfEdPysaPj",
  "key6": "3hUx1eh8aJnyv9K9qzHDfo9cEmLTtcK9W4eprzW5D3BPCYrMSn85sye33pyps5C4AMjz8J9coGfTueWLx1GaF6Nm",
  "key7": "2LYFnMvsfS36EGwk5qe5YjPY8WAPAV4cGA5KuaSipty8cXVMXixhAmH3Lshma4MxjhogHoC6EBFcwfYygHtjd5XX",
  "key8": "28XiuEuuNJZTQtmp3tbh41KHtMi3MRQsuddCQLwv49YTGZkGhaQpuBucWpVp1feiRfhfBmCyUgTVVULkEWJeNSMB",
  "key9": "541rK9PpcDJkAd6GNTprWiLNrmBwxEPA5i7h4zYKEydmRBFt8umKnRUJQWVEyVgZggnhs91pwDXbN7zcHNQ6XoES",
  "key10": "vKLSEbhPPPP5GZACyTQsYrvZ4iWPeN88XUAMRUXGKVWGccCR2yq4h9WPbB4GVwpFxv3SMsYACqs6niCuHAoz5h2",
  "key11": "eVPy3kuRiqbmYrGxqby2ka1PM8VHLaJNB2yhietw483i5oVkVEM9cNzYZpoB7BJhP4YcCkxNdf18gYv1kTM8MjF",
  "key12": "3WU4xnyE66tHMb8mz7ukVA9XS7CDMtpEvZeCMJazfwbNEui3Vozy5GjGzKTtque7GmjdMUgQwaezgPJHkf231jkW",
  "key13": "5u4PQRiiSbLZ6nU39M8QzLiNGenSMTWYUMDe9md8LKji64oJtDBVSRRhsYRFsE93ggfr4WuLbc8RbfnG5XjayEyG",
  "key14": "3dCFfq8uUwoKyCqYpr3eUpzB65AELSyuCAJsTpSXi48GRnydZpaxiWHJNFLUy469VYzcbYe5Ubk8qacsgs5XZj2j",
  "key15": "56aLbus3Yhx7pjdYw8cTpXGxvz4Jw8KdoTBfwVH1NmdVJMEU8Sj6Kx63xD87UuRXH3W5WTkx2kYfdVSsCPyHRMCF",
  "key16": "6BVHw3DQxWZYGnJLDXGZWvLYYdw89pzCZCMETss2vvWfFvFgr8vWXFQur175yTYTcTk1GkaZ1p59Xwwd8JyUkMD",
  "key17": "3qPQnXSQedG9u3sweHrGSiLfRjK5AdL1y2uy4cjnS1wMxq2Bx6sNFMe7fZezwqmxScKZevJF2APnQcypC756pLq9",
  "key18": "2EG5QnQDzMS31a7wYTSeDJ95scSMtaGi8eyoE8JiF6DEN4rzqtDtEJ4G8RsFsqYNMhuk7td2a2BtyX2kiSguoDXx",
  "key19": "23fLrTTu5hiH57zmuBvLsTb6zaaiEnB2ESkw4E5XJpaCGjTziv3DBG82E9R4xpZF8FCNBApjE7mnRBFwcWoUhSte",
  "key20": "3mU8QP3wAV8fQpRfXowwLd1qsF3X7ijWuTgfcu9VddTXhtmuTT4LKEyeYQkwfqxXxDQQng2kj49G2dKYyU1Huj1V",
  "key21": "MnFy1ZTKj8dkHU9cYu6y7j3sJ4mH2J9UsqiTkF2NJYEG8cFC362rVKbUGPrmZiDLPBjfAnFG3zCAUUfTtmdpEcV",
  "key22": "4214KYCfuzjCbFoAQ4CmV6UvqtFevawcRJnDiq93zioxktny9Yhc8Y9Z6j1qFWqkXgQPaZHxwUaLhKnmnsJPBd3P",
  "key23": "62ZwBc3CyWUY1X8ApC6yJ1Eyy12L9TmKyQA8PbWG1eer4Bw2V1bb9tRL5UpzsovLQN1DtAAkJi2XXZovoYjbDE11",
  "key24": "5W5vMQWytqyEpQzzXnyFnHxajJq6n42ubE5iP3mgm2Lm7vQgvCsXqDoEaAH9hjpc4NVFDf9TTEW97JVB29ZmKWN6",
  "key25": "3131MRVwqvZpzoCRexv9NPbDszrPZ1tD3fmJ7SN9iGLiVm2hL5mSgyb7LbrenSXBDGrmTa8NzUxm1yhdZsapuCQ5",
  "key26": "3G4KCFN33o6tWjp2osEiFjcHfHUDPqVqU91mVYKU7srBauxgcqEfPoTV3kH3832U3g74KpFY3XhWcNwiQTZ6Pxr5",
  "key27": "36ZesZNx75jFGWQesBPVUJyHsXWSwmGScgoymW9EXQy8dz7a84k5NxFk8Kozyv91YFwTdvjvS9ZatPHGCYz55Y8q",
  "key28": "iWaRLsvDi23CGowqCQ8pj4oGmVPj3mvwKHpF8utjBzNx6TnnhxpWfNX5MMD7YBDi8WZ4K6hd2zTjhpWKwphBf2j",
  "key29": "2VDYvJ1i1ikQbSXfkoUNrdmcnnvavjxSsd8ok7YU3fG7uEP4PaGMVwYBxRm4B5RNmH1DHPe1tq3LEwKF7Du5jzGp",
  "key30": "2hxAajac5AXQa9VczYDu3A8xx9xNxT5EAeqfwvq5uZciSmdvffwEm8G8cMVF8h6Efhznip92quR9wiBcz63HFPyw",
  "key31": "PYgs7YaDuyDNVHa7MXobJe99WoY6R4Y3XDPcEuFkDf8dpwjYpouZ56vPvW1RmB6aRpBYNtS2ZiKzFQzTv8VYqjC",
  "key32": "2b2A6TVefoCV6WCQYt92GUBmdnUCQ4xnRCQSK9SdL2zFP96RvPjy1jdzaiw8r1ueC6GdsxmDWBUtnPLvhwLm1mR6",
  "key33": "3TLVS9qnQ3eCgQkbdBjJdgwzbWB15epPTGvM8eRt9ArAbFY8LZUYaby1uxoodvuB8ffXy4BfD7DeK9SYMxcR3XCW",
  "key34": "3iGmw6kiUiB8zP4m4XeBaULQR3a3oPpur5ZC6C1XJrq2aTp22qZxxsX4fwCPbq7LUj9EaMxb3jevwn4DhtbiRJmE",
  "key35": "4Knx7sgSFMPMBi3FwLf2Gfd7M5kbEuHDvW5fbchXfWDShcbFeZTnXcw4g8wk7Quui4XAhAM1rrkjFMJ2CjBoGtFW",
  "key36": "3Npb79pAivirsPCf61jLBZkNu4f1oCpJNaCGX845KhHMV5saUQqdUrRCMf4REK6cqGNFrcSHyPCNoZtcpaDhGKp6",
  "key37": "56Chyiw6z3ytmbMWi5gAb6WgTkh1aj2HHrPjD34tALKFeP822dei3ikkJnizhJcwdPyZfGcw51qcVCwTFBynrVvJ",
  "key38": "VhMLMn2SzyY2fUG7FojGjQ2ma8fWmPbhTDPHRCB5S8P6YjwQr4tdn4WVb5gNG8pU7tqqQm6WkwtXJ3RtndjrXjz",
  "key39": "3Skj1tUTkXT8HnoTyZHtvQzJSzcy1bEuzZt6YZ756c4iehuHF2rffSp3ycyEZ1f6g3PWR2FVfBLreNvHeqqTQtMZ"
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
