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
    "TuEusifyCSkMSzeU1H9PMQfDk6qkbiDYV9YiqrhLdYfhvd6yoN5YkEAhdeKS2t8WqQjvyaKQ7ofxeWjdqFRhY9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FHtzYrv9A3LGZdSMPFUcgH7AmaPEV7GHZzi2H1ZV7aWcneWCStKt8tP7Bpd1NXKbVUgvGC1UfWEQViQSGeZmsP2",
  "key1": "8JXMLwwxSANh8ZPPH4f1cG6tykA8WZskSoCR6YUcribcLG8TGxzc31DBDephS3TazfHAxpTAwUp8HEqmW6Ka87b",
  "key2": "5iRPqgPj39tHyhz6ia95AYS55KvXZMx1zsaFhSoiguw8oYAsJkScEpiBZWMFrbmWPWto9XyvBy1p4qAidg8r5LMN",
  "key3": "2TpMqUHMEkZjM5BTxZnZ7tZYXtH1hSqWzBqP59fHuy5bpPKShMpB8ycyVgVZqnCs6LgpTsNxruiuhorcQGEA2eQK",
  "key4": "5Z6rQ4NpTxi8ZYgD2B1MnxGPKZnL8WEPXsjxmHrN5tXK4dw4Gqt2MiLGg4HAdKugUxXjGJmK2wfMPt5xzfhvfUSL",
  "key5": "3ShETsZ5oT41Lb5HyhLuqc2XXUK6w8tkZCKosqp8sve9vG7zzPSKq6ZUPKJ1V9Jbi4pbsp6hqpNKsnAmNb1yhJNi",
  "key6": "5M6bYX2YCeu57TuabsDsZu3LcebVyCGQ9cunWyb5sCcT1UZu98Fa7emwyfBpthBYqkBuXkXoBTYDRYfUV8C92RBc",
  "key7": "5aCrjoJGiNWt5CNwYiMUVkG5cRDpMZhFeToPsb3HAeCVfCAnZi6L5jrRQKoqjhFUdBDFLERMLB33wdYmPz8w2cnj",
  "key8": "2jMLBTGHMhAyUoBfDiyaCK3zE4yW5ghHQtCXvwqDCaYV9U7oMcfkDkNSRimGrnfC4NUDAjUwPaUmSwiPAeiX3YMK",
  "key9": "5CQDq9fUDaQS1RUbzwSXCWnXqgfsMV7ATkuE7aVtGRyq4a3haZHntkNYy5y7a6oXUosySu1r3ESkr3UCrEYnxtMY",
  "key10": "3rmbV6hQBKbHUfAJBB6iYwRy3vQmWxbYfpWGB6FDgVMvRUrjV6h5Uj5Cw2EeGYryY3CgNPhCWXuZrVbM1TJ1T1Bw",
  "key11": "2bijM7Sso9h6UQjPguwinAaVmB82hx58HtUE8zGQLiyM4Hk159CCcftA9hdmkiJ2ZUbkBP64RYB5R5QRDnni5DYw",
  "key12": "562eeLYQFNGKrtsLCbPcv5SZ3dLchj4WNAUPq9UMssAESHx1ZeQPuTokfZFmRxEcRtwr3MZ2DEDtexKPvT1z4RPc",
  "key13": "5bzmVMAhA2J3cvv7NFErMYB1TgFwp6nr3ZkET5GkwwwKXBULBntPvmuLmXiVBjspzLucYKsMyEyUW4AheE8462uv",
  "key14": "2ZPfnvRkN3E7u1CRvD4uxZgsHNLTwKmWPrdXeFn5gEgEhUqBm2excMRBL5cMenSYSaycqsWrLx4Jpo8A1vZTVFnY",
  "key15": "AEtbTcgmZaF65t3buFTKVjsEBpTU8UDHYTaqcv9WCC38PSb6GBY7BrPXtrwgrxpfuTZk6shxbfhMfN5o2FUHwoP",
  "key16": "2orsRx5TesRqDUH9wtPtiWMQ7a8bxddX13bgTLbpc3GDyLDZDNcfSuWGcRjnMZjUworvLj2QXyg5nXBms7L3RWqm",
  "key17": "sxyzczCeW5JU4KGDVm3wh85vGC1wFdLXwb2rJT52Tut3aqcYRKAFsvXaVx7u4S8VaZXZkb7VFehwdcWXgS5m53K",
  "key18": "5mpeQHBBaz6pCi8AaHPmoSqF53Wu4oLm74RADAaNjksyWqRTkyt9xQDp9PwB1YxD3wE8xrj1QTLAmpWTEN1xgxup",
  "key19": "4nArnYRMRMBouTGNo28NQFE1RmstPvdpMMzbQ6J8WTChKVPKLXrQpi6CAa5c7HMdGmKka1crvk7dFjUKEW2UAqWr",
  "key20": "4Fs9yTXXvFncV4uSwqnMjoUvDLw5tEMtE2zwZE3SYsfBcg5UG9euXdAcQkQL2yuz8e6o6ewhbJ9GbyiMthWRbnms",
  "key21": "31a8UzJVio6KFy9edaHP3DP1Gwg8yWEqd1LEAejGG98rg9uKMdG37smsEZuuVeZbza6fL4vCU6pgizVXbfhGEYjR",
  "key22": "5whJn3nDfvyubBeeSztNH3KruvJaYiLkHBBrDmj6jC2C33YuAACGvxoGs1rttCCaVXVS9GMb76bWEfDGNSWW1F8W",
  "key23": "4DVjUdNLNzP6Z3mVsPFP6YgEaNGDztYComQ7AvgrrW2EpNcbKsNNuWPpB3qwpyu48hU8DbDszm1PyBLCdpyKUuPn",
  "key24": "3YDEVZJpGu1iHiQkWpQpaJdwNjSpTQQ1DcB36kyXP9yCNzSqc2eQ8SoQBmSm5bnmywvVHobZCjZPNH5EsDXx51eM",
  "key25": "4FP8uXP8yExZPN4RNrkcE8AQaW7gwUC1tUKXs46PRe7S1ptLJhigRMRxhH28ss4RJtQjeKfrTv2QHqk4KWxbanWd",
  "key26": "4v4SY5jbs58AoBsiDqj9T5qbmCuhwacgdzG9Po3LHqjjaQ5Sojfb4Tt7E7oPhC8zgrfuEyTsp3pN5kQYVFw2JfuP",
  "key27": "4xZnuQKP1iVDkPX3jZG4nZW5u2BbbbseMBNJcLK83FxqMiHJMDER1msmDsQddAFzTSV5HFZW4MpzWxPLa58oB2Sy",
  "key28": "4JG1YwnrM3Ty75fxDn69FuHNFJYS35QZqLMATeUCW1oGfe9vjKQa15PCUoYsJMGNPzKtS8PRAKuviZafeV6izBQt",
  "key29": "5Zsnb8YacdSq1ZyT9Gaze8eAD3D8MLDMPfcWuGN57MX8rEraqTzu992WqgFvGRZywKzK5VnAEGJThzK81Ap4Mjra",
  "key30": "5SDiGE3QrvZS44a9MHe7J7Xt6BLW9GyTWPydJvLqGs1JUF5jrLG5kMyzZgkQerdMCHLfURgdWj9ciCQxBN2RfBeL",
  "key31": "9jCjLiisDHHPn4eHiwxxt5tzyitrcQr7AK3PczGY8J3q4aibeiwDm8US3a19nWqZFci2ifz3ThpGaeFRzA6Lwce",
  "key32": "36dogTU6k6pbRdTv6zDiNaTgKspJbeqTF1C8Zx5h32N148opYKT3B8QHrEnpYF16NL5Msfbq3cwWZyVkrjoQfSp1",
  "key33": "5WpTZFMXwy6Z4aNUY7UGZTruCmYy6rzgPxozYAcZbJGB3fRif8VQdBsAN4iuyCxZW2tbpdiJ8qGcxAV2XVFuyCh",
  "key34": "2cV1JkjuJNJQSR83XAL2riNeYzxNH8NneCDz5eirRwcAyA5STnLgNdFkEnZv6xc3CCikErF2nHZsxpNDvp6HPszq",
  "key35": "gvmyNjVYruFi4jZFiAGcwghsrJhz478xyQNLQut5c8a36h5XZXa91WuRm8CyCAnaKtuqieF9LiTcBqp8MqET9jk",
  "key36": "2ke41rj28AuvjyK4MgivKczo35Uvh9yJv16HbFmRrjuu6RgxWVmcm5qENeaHTPuqWWMXVtnBi2bLXYWbp4TmEeEX",
  "key37": "iwsaFCkdYKyT8mH5331WvKoeS5x7VexUJNFsoxoLwugznQqcQqKvra3EukqRrqFdVHZdVuKUDQkEYVHkUUbh5BK",
  "key38": "2HePFFkZRW6neWbTd4Qh7cuN2WXYHAtcfjUxMHWcWRsTXCbQR4Rk3dVo1UuR6YmyFDBtC3tQFaDX5bpH6gPViJLt",
  "key39": "5Vkjwj5oBvVmMonj4YyC5W6noPKdL9fxYKYSyY38YPCArZdVXatKAGSw5d9vcyksRRxFF5hzW3KhGaziuzYcApKw",
  "key40": "3aVBRRHco51Mq9fVQAxSqWx9kbNM4QhZ5qYRmgAHsZyugM42cLeheGpm8qZKXuezpPJqKyHMqF19wRTPevAzVrQQ",
  "key41": "2Ad4abqAcBkniJUDn4Dx4Kb5dKb6nqKGUqWV22pfhG5oMEDhMXUYQGTBTgqGtsb77JQ9rhVURMmzaF9GGh5WdvNV",
  "key42": "379kBWZWRxxN6s17KXBYy8a7JRhzCEdFotWcAsRZ8xnU4V474JkLSpgA7BG9qT5YrPbBjfRTrmYmaTQz7NTr7E34"
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
