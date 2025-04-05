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
    "34AsTKe4T9wfhyAVDbdDXsQDBJM5ZRh7U81VqxyjmPT2AREEWU6Ya2xx5uxP9Uiew3fta79vUtDor7F9EAtuhXzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53VJP2w6S21dZQUyJHofXbozMqxZLP4ynbLajH2E24cxJEmfaqy6me9sK2Np1VXC9xUEcMoCeymNADEybmYjsEid",
  "key1": "5QpvHhL6X4NNNRfX7MjHSSg9NchEAb7MHU31NLH2wbv6UA6zy7nKX6jjuxw2Lqps9wQBqBw6v7nVKbo2gtcUhYLP",
  "key2": "4UgrFkV7TvKFy3M25qtSfHvR5spBPThqzPWuychrrGnhBqbfQzUVFoGR4YQxrFCUMQ5a2qEyt1mj5aSdJwjGG4k6",
  "key3": "bmyofVWhjPaBkTME6iGQpN5czLusio9d2pnHhwBHmfN96YoeciGmD259W9PA2K5ATeSApG1FNe6UuMxLa4G78mB",
  "key4": "5KYUtgGUrFcpmymbrfANSxxXwHNr4fMe3L6PNxzpEwQzcc53puDarHVnHeBHEncoizKZTVp3fMQx18NAi8KjqhDR",
  "key5": "NPGRVMiXXLD63tZiWLE11uaPzTPKgxm35X2GtVky9VkavAk7gNPp9CWCepj5Zn7ZV6SSLmdUb8spz2iczqJsTLQ",
  "key6": "3LLWhYVs4M66dp3P97tKB799FYGV4RaoyfEpBAqkAdPpDT8JvyrxLv2vDb5yRKZkkJrCwAqsoDepfE8wjgAwhDQi",
  "key7": "2Tb7z5diT3Ntnq17rrJESpQT6ySz5DXdit1BNWS7fREHYSR5gRjkm9UeHZng6CEzci96HbBhcUtLZRcA4w646R1e",
  "key8": "3tcSzm45jKcf2brSJGJ3NGGyHujcvN8HSxB2HBt8yhB5MQTUzqYJdz6BV7GWsuJ2Q5iM8YXnD3EHts8TUQz6eJni",
  "key9": "2osecWoyPqJGR4arzrTJWsnyes9uthRFJo4JmZHW9af2QLF56FNAaYQrczkZNPxRN9MUFB5iN5X1GdKjMKxLz8LX",
  "key10": "2DRCeyHf5cHEXzEzyheaUgXxcwy4yfYo8wY2Qqtzoj7GQvixFrapQUyAFGbENRgR2W8k9L53cERtPugn8cW6W9ua",
  "key11": "2P7fSCNgNZqbtrkEygs6Sf98aEb7qY17szTofxFVA95Co8osiwGm5zsqzhYturDCkZUzW3kLFotFZDySJnJAqvv9",
  "key12": "3v6LBNawDKiWeFJmegKUxpenCVDskcni8FhoxcMsvfrLfV2ea1Ayuqx528BtsZTxfNMpvrDBt9UUicE8sYG2fCtR",
  "key13": "2YxatmVvETyiGrhkepot5QkWnd8QaV6huaYE9mtkcULEdvSdtvNFseg5Y241B7QavFXynVSKD7mfKynTAqaSN9UD",
  "key14": "2GdAidxBhCyusFVEmoVwjHEzpL2H1bidyUDu482AhmtiJtug37ovP4Z2JTpxnyfu1omeUZJD2SK2FmKsmZNi7m4v",
  "key15": "2qBgFt7qv8hxJWF2fSa6C6RUQHGnc1ZA3WRPyaF7Ax5AficPkbaLdTvhU4HCAdjj4a4yAfKzYUTYJZ1X54uUa9UT",
  "key16": "39XLU6K7pqJ1bn1VCxFViXa77mF6ryZY6xywWFQLrZ3qSPrP3Tdyc5r6gAMBM5WxJQXKZmW6oaraftFWeVqGj7oh",
  "key17": "fQhso1h8G7Yp7ro99c13z9hTh7BnGaCHLkUBDUP57eyGimWyR3zW18Yek5PUJs38DKWsL2tF8MrHJBBJw6si1qx",
  "key18": "5wUqKFBjQNGryrLaXSz6FWrSE4mvYMk3eCQhBkaqejyXNawzhamYFsN93VEEWwpJtziE99qPFNPwSX79YzETkRZc",
  "key19": "3JyWvvmakWro2hTz6znX7Xzn7ufQviTTLntKCLUHE5taQt13nHJUgWJfEydCWj5StQPJGYfAUTppyfKhoyjEfewZ",
  "key20": "2stANVigDc1bryZvjGpdiFPJTL5ArVLC3TbsBggnLXZ33hNvUWKnigPmrpb2X1qxmykrUFkfcwqGavXKsboPq3oh",
  "key21": "TL31gjCTRzMeJZT4NZ7pymuCS6pCdET6Q2WazfJfgrGimvyijimqVtXsXfg7gw5tAzgBHEfn3gwzbJFcsofvjyJ",
  "key22": "2Lkr82hxyDXgPe68HRdz6xX1GcLprtfP9DxM4YRCjTCWB26n1cPtr1b21ercUSQy6ngyTudbDqcDw1F4nBzTC6cs",
  "key23": "25GefyJ6bQgzKbhSgvyBvXrsZe5fx7ig8xpP3ZRjzW5Cpm3oP4ATnFstNe2VU59d29mmEKaZcGKxaQyK5qM4TDvK",
  "key24": "5EkpEbumWMk4K98kahUwxCEmrQqHuYA5TgHF82EQWfQtxCxG1ajvyCyTuD6tk2FsqDz4DsGmAEFTNWfFKqpL9YKu",
  "key25": "2KFBxQAeJ6REnv7L1ZpQcZpAGmqjyzdugMni9CUA4cU3ywCZwHLbBmiWqAdpacCxW9tDp7RbuRVSgxfZcU2kEUdy",
  "key26": "41opswSPWsC8fJjsjL977YTFwBJL86mzY3ACnvRoJk79cveBzTEc8WLibnFDJyunTmjxiwrHUZqLghdGmD72mZMG",
  "key27": "5NJz9XRPgLfgrnRxU8rdWG1f8g6U2TSwNLa9LatVLPzy2K48vh8ejDhGQnFD5Xzsm25HNusRbaqLjPZZfRo3e5cT",
  "key28": "31nqNx46ckGBV7KrUbrc9GfBZfT82pZi6V9he28pvtXPVSRafi1RgZ8mJ9Lo1QvBz2x9PQynXLv4WwR7A4iRASVh",
  "key29": "5uJaRzqcQ76ti5EeQ5eYFoQpDg8NHX9rQWRn8MxWVvK2cGL782shCyu7bqAFELvcnx4PZbYuKzESFPaj1smm1zsV",
  "key30": "3jnBW4YGj3dcagCvA88NiF7h7u51t8wuTtoqsYcR61w2RNCxgCB8nLqW4qkX3x39pD2XYV6vzewExXR5Vx7z4STx",
  "key31": "2zobT6CyxmUUKhDm6d5DVuaRcF9xLMy45A3Dfy8zhucXRzUKGjQnjAWNWxk3wSZnZaUMx7mVJoC4mNd8h6dNYf6q",
  "key32": "5mRVGa8xo4Rdgtt6cAWVdzuPihFsDDeFSdQCFFHPWoB9KpY5c64UV65mpJonZbLFefWeapFDuzuCnhgzPkdGQzmW",
  "key33": "61JdMdBZWKaZNe73fjVHfGpAPTta5qxg1ti5GG8eHH45NYwmHc2K8zjTspkAvJZg2Ztc7UMSn7wi1FtF3iMrDZ4j",
  "key34": "4ZHLUcapNX7xPvVQ5c1QtkeTJuwAi2fYNPDVoXDjKDDm4WpwfgLqL4nEWjR7LYv7aeHjPYoL23hLBq85cAXASrAB",
  "key35": "gGBMGEwPHUuJ864bx62rnbaVzdWbyJ1wP9tT5mhV6PcntA3qg1hqM4LSMpisuPoL6UDZzzoL617T5RcLtVH9YS2",
  "key36": "4LRtToqGnCVmcUzx3sUtsEJge24dEz9ktAvKLpcLU5i4UbqDBB1yJHSCGfbEiPo2aB2zpPXjrxf9VFaRxRKyCXk5",
  "key37": "53dsBpCyf2ie7ibbSfeZAsZLz5fQ21E7YtMKEAQsjvPw6NyJ7k6XaiC7zWDfNWjZZs3WU66eS8SahFs8Wgh84nQr",
  "key38": "tAez2F99TfAGVoFgQVtoW2mQdZ8o7nDTzHMDXkjJ7AvvZQU8GjH7y5gjFmSyrDsdcbG7XmbZZwiMErKX4wQzBbG",
  "key39": "3MCJTms2JdREMfcoqKXC4QXfrp2vWFioAaVrXZ3EzRb8qFiKBzAMU57oJHrovU1Z4KQThWtVd4H6uReEG7KkjBSh",
  "key40": "VmHx1cPq6BU64KBjEPLwXEyPRXJgjBMPskh3oYMrQdfNAFway5r2x4GCju96naUa56TtVZod3T3ruvtooWgVqqC",
  "key41": "2454UUNzWCR8A3Vd5MKPwrA6d9zQYHHgp8cvoWNpaZPAA7DzkPUVDUwSZaukUi4m4ymLF2yHcgybMDtTuvSjjPt9",
  "key42": "3zNH5Fe6dSMppKmiSQg16pVoz3i7ypKKRUrMW8MvtciRLKj8p9hDJQ5enhH6VwmAQC345vLHFjBiNRbP8tujh4yi",
  "key43": "2YeenjG3QcCub9d1c7gBcyiCVgDMX7sBVE3rGvXYjUpjBgkpAMVnzp1rRVXJGg38G8DH4tNWYQidPQbNHyAxmZpU",
  "key44": "5D4MiExcs58fLJgJ6Yx1E7U1Q6BpKVeuxG7ETtS7kqiNAdXcxiFRiUiwB5i7gJF56u8MUbLuTvQrjESioKKNUQqP",
  "key45": "3oowqHPPAXjVj69aCocQCdiYiVah8LCCYX3mcYRB5jXy2k2Lr4aT1m5BkfBscwTvF6tF34eyDvfvmQhUhXk6EVFr",
  "key46": "5pSoeQYYjkFX9PxuQPytMHvfd6env8oiWzigJANw7Ldrt4PX9Po3BCVYNiuM7f1qA8JE5acsPYRsagNyQmuJngGn",
  "key47": "4WrkLAjrN9hisfhTPnXiKx4FCU6zDTGqNHUYmJNr4ZMVVr7Huj2qzrGQsGS8PiAFexLToRikXjBkbNg5XMJxDEP",
  "key48": "4f6JNLaenThZq8ULoAegu9AWbnq1XPGGCe57n3gcsCKzyKaRceeP2PdvRkhU89vJchJhgX3vofFqq6C2VUot5SYQ",
  "key49": "2gsze6EGXctf7QmvE5UEWqFGPVedFCJcDm3yJEcKwgKMDt2u1cX9mBQhZWUaMsxkkNRRUVWXQsKbHM6mgJY2Lqyp"
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
