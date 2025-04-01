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
    "4rjLSxNCt2bPfvZ5JhoTs3Kk2myYibEtmKEFo21x3UDwyvqiRgdD4v2tqkSNMd4Eaqv2zTDrB14brNRU7JqLRAVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VxpSMuvmPqBeZrgUvoSQtjreA6RBQccQrkHofz4SUJ4vV3Lx6etBfWPtF5PKfQGfhf9LATg3aZnZaqRZhiseerf",
  "key1": "37znvxqERUZ7HdEPzk8JYEMbGYnWv5r4Q4gCamDf6hnPsFWiRJuvvzg9ddHHk3K9cfzvysrRUTX6t8Wjz2Sodpn4",
  "key2": "38DPSsj8xyji317cUCr5X7SWDr49YydhtskrB2aHpQ2AsY3VRBT79sPgwLNmUDFByoGNch2f4vjJP3Lx2y6YQo3S",
  "key3": "28zWdf3cgn8iS6ZXaCqxDsx5v69YBLzEgGQMBNKYgRccgaHmRq2n9YM7FnUZf2hq3uvAVPdqxbLti7dnXxFPuQcN",
  "key4": "2vPS5Mn4CgKBFzauRrMpLFyfqvDuZkNNKx2WqGd3A7AEU55UtGtBFJSJtY9vKPQLZL56TCGnmyxL3SQQZFDtXcRi",
  "key5": "33HCUtQRR8kUjdHkVeu8XQQ774DoiDsdQeJ4wHNYnzq64q3pZfEg5aoQ3v2KcAPor64aoaNAnUKZjA3ZujJRuAbY",
  "key6": "4b5X83zGEnQVP5BhFh53TTeeMyrqpampzshdJWKY96JunG683JS1Y8FNsJrEkfju7NpFnBn9jBT1tWR4ULGp5xCm",
  "key7": "2B2Le48sM4WRYoNuDmviNEgA2Y8taptQwqGCAZsi6Kj8p59Q2UHZJu7MFjo4VeKmYDcrxLJH99u1HHh9jx4MKGHm",
  "key8": "31ro8j6mKS1YPufJA6FzsVp898uNuJ7Lo5hKGP2D69bY22chSTxmU2tCP5YedDQgZXfUnRNYNAx2L4KJRBAWBjAP",
  "key9": "22cmHzx4wEBRg1881v88gW4nKciye1KP4pbqbzKurrzDTxV9Pk9rmPXgJAAcK7rEiREgDKN49rNAqfVphbqQAHab",
  "key10": "5taqFcB9XGaJFK1ejj78L5VYqcRy9LJud61auhV8sR746R4oYm2s42fUrhkPVFJtkuGN71Y6XLMULxjcDYQCgSvd",
  "key11": "297sUG5LXoopt4U9BDCYSnNJQbz3q4NTF3o9Jv4irMQyayNcqyqcCHK7XZCHqeswE4f3mUawMnDzntGNzDdyCaz5",
  "key12": "5rgjTKQ9JtTxzsFys5hec6o8jzPNA1L8T96XffoP2YHcWsvQtnvCmngRPgpjtUwsb9HyetxKRVu6Ah24d8UdV5YM",
  "key13": "2EQNeCeKRgWjYEjPkHHcLKjhtAwNUTwMwfpfVwCN52T4HrUJ6RNK3EZ5XQw7rnuPmtdSwCTcJdYJuRo3814KyaRL",
  "key14": "3XDvJ3XrB195zeFXk7byGD6fhkmeiG69cLBqTQoS7ZcwJ98wKzDrEntY4HmVQ7XceY3jB7ZWCrrqxgAqhqfRJg8r",
  "key15": "3e4E8PCdggQfpvdp1TM63prPtN7wzT3XzfNTh3HfqhKtcFdEHJhuyph7SukKaPsEXRmCyKz7hgsFBw8CCJVWPjN5",
  "key16": "4VjYvRdVPkxcxmBMJgi8mPbPZAighjE6mmsiqppSxmEhRngRYT2CdeGp5w4X2MuXuZJZpVmYrkk7N4hJEWTMRchv",
  "key17": "3XTi8XrsBW1kRuZdQkj86NSKQonxwibhMV7NzWMh6UbxJETxEWNCiZG94jis5AgUYJ5cfqnB6QAH8b6M5dG6anxW",
  "key18": "48VpxCM2fQQDpsQz2pavfKimeVeVyBtLCHffdWWZNpzDurnqJjcBCYMK6JYi5aLHGUYkW2q6qv1dj7JJZjDyLabA",
  "key19": "4edeFzZ5QQuWtgY3tdesm2buMecYrj3KZ45pgbFU9twQtV87TcCT5rSxG2FdLDeGKHedwyXRzgt8SqYXH6LdCmTH",
  "key20": "2xk42NcsZV7LYgWCVuESpogguLDdMq6njxNb9UH9bRnhL9o8TWNEGxEvYQYK45gY45Njx7GYXrSp5FFwhG1MHhuy",
  "key21": "56FdwcpgNWH4jr6c8BpvE4M6zvXsuNj92XJDpV3gAyWieTwNrvQKxDaaTtVjeBFu6y8FzYLbi8bMAmj6noTyoyeU",
  "key22": "Vi4LLuEFqMXMDG18uKnS6yTxqUUMZUsUZzTUzau62TWcrcEKqSZMnwViwNHbQfaC6Lz5cW77C36mVnp6K9MTpir",
  "key23": "5DJrD8cstSjiPEJ2eqr7nGx8j3nubyLgd4RDawGagrANPzF1Xtx7SdPuTnEj9aiqLFq1rKM1UaEzFJif6nYUStZc",
  "key24": "3hjtgj3aAk5Pp7iKK5qf9uaoUrVP8nznvfAiXkYACn92xF3MUE4F2BCTc4Jm6f9ueNUYXXzfxy2YoapqehxvRd48",
  "key25": "5gHwtPf3QAPwcpXcotuQsB8EjFnpJ8PQ198h9RJMJYJCcPfpRF4kQHbcbR9zGf9N9RA4EQDj2twX2fWqJWqscBog",
  "key26": "126qSZAtncuUrxQHi1ez9WcJo3hVYqFs8w8tFaw8xvZkN7kGJNbauxB897YzLWznmsh5DrQKkuKsXJCRGY4iXANg",
  "key27": "3bKY9WYWdBm1GxQ8akuwuxbQgE2BgGxUTwW6G2b6eWBmit9v3wsaLn8DCK8ZnH6DLEj9qu2mFrV6Rf8rWYKU5oAo",
  "key28": "3aXfhBxDUHsfbDg2Ux57MaodSVMrqKA22CzCNsyXRrmzjbb1SX4tL2m8W1gsH4cqQZYCUp41aZHceRjpZbjTverS",
  "key29": "3Fz3wWx3nJDbXy7yyemPDgNEMP24txPAuXxG7SzbhwdMLwtcAaxBX4m596xLnLTF2pwWgkvXZAQXwax5CBXDmFp5",
  "key30": "5zt3AoULaZbFbQvFJ5dGcWFEZPF1XPkVbZZ3obx2qkVfNQJtbeshskiRV4WaMHWxAUgfDPja92avCnHmxfR4X7YW",
  "key31": "4r6wA2t4zgTCEnjTbBCqGATmoSDgDKgwho2RYSc1Q3hTEcbp6tGhSdpJcn6F75izVawGKKtnbuL2sstziHEST2aa",
  "key32": "3PRjBkqgg5YACPQWLSSt4Yj7Efh1DTXXRwnsFB4xEFYLN66K2raCgjJD2zmJGKkF5vVBfFVC4GbB1fmwqC6Bn3Gw",
  "key33": "LJDt1t3PGsTM2k54XtrMxUJBt9mMwVWsh8jYee1M8dxdpXJHc7RFpbKgcVzLNBXroKp4SEuAecNnFy2K9cy3REv",
  "key34": "22nNgDYPLWyZGKPHuBPGGVduRHGjKiDx6GNFLK6KEttLsDJWczR5Fk5YD5tJs4BEDqzguvw1LmguEBy98zqyJ8dz",
  "key35": "4JnbSqjPzcP4JVQG3fkna8cGM4p6Hrxx1ypgUCx4B6WSbtGDrRZoExgDHbW6Ly4sqs419E8hwviaMaj1PkTNeUyw",
  "key36": "3cBwQ8pGpGcrfjmiJVjJyiFPHLq5g3EtPAARjVu91CRsmvutWrRnGWvm2Ub3wb5VBjUE8cNWmpNfKF2s4x5rxEnn",
  "key37": "pX3i3j1Kwhi5oP6Q9Zu6YdYGQm5SNCaKDRHpZzRJ3KRCWUsPtEuQxmUgJhVDUnrFf3nhPaec2fUGBhrWmW49NAA",
  "key38": "348wRbmqS2zycez3rCb9JTusLVRMbyTtd5Kgsi7YLVXyboGmK59zy2EeAjjLdput5VCoSmV3BL9JS8nuDdyk6PaN",
  "key39": "5PL87XZb3Hp6qVr3jYRJCMMDUzMnjVXph8JTS5DnMZ8D7WUwtZm8ptrHFni6xV49W1VrwJM2UfdNPYG3WhY3Rfm9",
  "key40": "FZqGdrsVWeTDychQfXWhYBgiBuPtsyfzEcN29YNjdMhVcAEQKQoSGa8c45ihpAyPeLXyVK6QyYYrfCekPz89nFh",
  "key41": "3xsnrmyyHHmWKjGSRkVaZsV1EfEQah8qHXqchLNDequXyrfFgd39mGeuLSic6Fc335UB5LTjYpFgeXy3K7aS569f",
  "key42": "LaoRKbJUrYP3Wj5Znjc4C4Qo95qJLM5aaqRaFWvDBLJLK169DogzpNbFF1Xhdvq1UxfSUYdRxHhEQVum2HbnncN",
  "key43": "3TKV332U55YhiTpy6ySKhBD5UYn8sk38DcRgcWuVTQZdYFRNWpdT1Ch3N7PQt5DMxaBRFXCGKfAN53BzZ2PoVowe",
  "key44": "4qwNcvmAUoTP32LC9WwEBZTyxrHeroE4G68VJEZfHor8fzm6BZqqXXvkBw7qr6pieCZYYQuPEtAybzQsXSDe5CYw",
  "key45": "3XmpoRpzBPvi695zhaRUX5bJg6fwmbm1CLT5CJvj1CDkaL2opL1tqbwY8MxrxnSPJcdLsckJuMhXhFcKHA1m24ua"
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
