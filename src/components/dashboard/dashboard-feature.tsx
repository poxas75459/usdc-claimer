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
    "4JWcHcqZMU5aifrRV9cZzcKKYahrVHJLTaVqtzPwY5dNNN4ivza7SaYgDtKihbaJiWRMNU27qG1FbNCigaGXq11Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62f2yvuAhedPYxEzgA5MJ8gKs6qbuB5sABapfin2zyPbJG5brHKSjCmtmJXYY9bkp4Xs9tLjtbMeCfTCFbLZiQEM",
  "key1": "raqChE1ePKLZRZ87bMRX6EKMi9Y6S8hAzsq1yYKqy9jUX6PqPXqVs9q4PVa3JHhpHx9Q69M5q1MswbsqBkodYA1",
  "key2": "26xaiz6YAKbvYgoPsAJJnZnRL9vQgvHTkF3iTqUBWVe7xYo47JuQXekpcecWWFpZEQVEzc2nBv6t6uB6LZ5wtrUr",
  "key3": "5PCBUHrBK5hP3tYSXVDFH9nvpqr6nNzhpfU9S9uwPSM9WnRQjP1kYhNKQTXPmjyES6kvtg2WGmY5Eqt8nL18izuL",
  "key4": "2q3pw5HJpod15uFLqgVyqSxjHas3CgdRTDgxyfHfynVSby6xV4SrxxGMHco53KWGNvpBSk6gjP6BnMv38GJhCzrY",
  "key5": "WodtEbFMEN24j7Jbb7ZSomKwxcniYEv9emKe8DvccLiKDpJPtxZEZDRHgJeG55XU9mbxh8yJpzJu2dNQUALDFwZ",
  "key6": "5hfU1AH7e8bs9FRHbgDz9vT3dq5oe4uFLaHqHmS1a3aqpruX4nkyd9uReDhPCk4QKAw8FHdKFNeZPV9mfSye8uds",
  "key7": "4DePwFaLWV5pi9mdX9nhPnxTs8nuxaqh1Z7cQvZvMs3toxS88fBk9yhX9bMb5aqaQViGBrWVLvrTTW7WNpg4nYkj",
  "key8": "vNLhKKBQ4f2e7KrSLHamCs69PKWAyYoAqgkxGybmMguSEJTDegfVQ1E62AsxckndjPYxLvv99UyWrmKji2LSes1",
  "key9": "4J54AZaCjPUvU2Go3JVCnnQybDm5Qz8UddgUZQeVJ282AXTqKfhGbQtPTTNQaW5br1bpuNHE7QPeW66npvGs4nNk",
  "key10": "5RSnrKLQtctZLjKJxmpBJAELz8nqgzStUsvy9vwmADwRJ5FsdC67gK5k5YfdVxi1gEb1B8z4MePeXcP1fmQEb6Z7",
  "key11": "3bjTD3mHMubiYFbbEZZwjD1tu6Ev8SwLdZgrcWvMuhnxh3Y1eLTdhMYi5aY3sDYjS6sPoUaHvYb1JTbu4GCUcbXW",
  "key12": "5pCPvAL5wLjqUd9HsmcDpP1HMmzJ46tXcfctukpu24i6AVqvPDJBVUrLpTBSWg2ycpn8qPc1B7MgNC3DxD8MCKQB",
  "key13": "29HtnKfjcaYwWxMmXNnFWWR12tbCC3qUECLige7TmEVE6qnGX9MQmDAAxNj5MVd3nBKzHZHxXxZk75BBsZbnEmh3",
  "key14": "AfQFXEqT5trheUdGJwKjguj9nyzy3AeoCJ7BUjvrn5EvVkYadrNYWiXpReN2WCqCZMryX1f1LwznLxVnB5si7So",
  "key15": "qwykgpXMYLSzs5R46xdL7EHNtv7LNAB7Zds9ShXdxnbYs73bd8c7m5Z2uu37zgeAvRB83kN6zC8tZY8MtoheGXM",
  "key16": "3KgJDTC3myo4DMrYdtv3F9ScP31yqDHJ7ZXtwZ2hvoGnehhr5Np113nQhcoo6Zhi9w18UPDStVxy4A63mQ7PLVtV",
  "key17": "Nd6uGDDTz44XwYA6QTSynpCjwxreX8kuMhuvYFt4jDnQ24ZhW1eZvLSEPtzwEYrJn1yNcDaxwTVFUWu4aig6jRt",
  "key18": "U8ZwfXvVRLzgJAFmrtGXuEUyQqVRnH4cp9eMDMZ3WhzPUaQFWAxg6DN4mtsXhzwosbWeKobd4FybSumZ4j9pBRL",
  "key19": "ncBxRiHPAWWkiej2Y1Ceqz9Sa15ncXE1q8aU1bBJNcxHNMXQbUfpUQQ8ewwGaxVxadQNv5ZkDK7esmeajicL8pQ",
  "key20": "yoNczKfmaHjz2MdAkf8vn6Lwji33xr1H1WrML64rPf2UoxLRfaZGdhRodcEyDy87dh5CkfjtyuJ5f9BWxK1hTRU",
  "key21": "WRsSsWT81EjsFz5wYzDZmNyyKRmKm6LAmgZnu8mCkNPWmaZqjAbVxVY8B9aemTwj5ETy3Vvx426S6rFdsF3BRE7",
  "key22": "4ea9kEHxQ6EFRKqVQ5FxaB22EvrB1amANPXzL2bsNGstYso3QF7isv8cpJMt1qhATBLj5URgxPgcogxLWwcn5qPm",
  "key23": "4ZzBrVHDFT6U8qL6bzFKwgrYEqPxvqcTb4SvzFcgfc6c3Qqj2hsTbGyrkLS6R2Vx3xnU8zuSRYzMVHNAxLveBWii",
  "key24": "BBMXMZNMyiUJiUnDcHWdFdZ1sZQ5ErEsSKV6qzh34rLXZdgR14YgqwLevKo3FM7P8SM45D8XikzoAtBS2RgKSA1",
  "key25": "fcfg4uaLhDyJ7iVmHhAwRXRnts4vd8ZpGk6ZB1Gmorxi5CCVHKvV5vgSP3CXCiGfTGosiEM3QJTb3h6d8kLadQK",
  "key26": "54BPEro1qoS454ZceG6LBu9XUcASZwZUVx47kshMso1UXDAWxm9P9Pizm8GLydBM8wXq4zZYLUY9F3hD7Qy6FPDE",
  "key27": "5JDkYMxEPNtP9Ks4SjLAV3MpDMveF5YHfppPQyUzjDfaSXDPd6uYo2EEhkVMKpVPfGDJchyexzcrnh9mZ3F8h8Kb",
  "key28": "2b3ympcRJcHiwuMroqXUhmUcP3M7hKsmTrVmpZ9mvtYZqF6zyVkGKgNYwZj8DeHjNd4horfsibWDM4pcsqur2EwU",
  "key29": "XTgxarPGYTDApTaAGVwJphHTmGLmLaUyNRS9P7aVHwpXNCZUoDPFS9dtznzCbt3sVFDUwfB69PkQr2EkXmcdxkY",
  "key30": "63qmiQeUjazJGMf2joToA7cPgcTshHyo7rYuvFhY4pV24rQTYwiRQ4xsYRNhLX8FVbWL1wj5jnHU6xv9R1e181YG",
  "key31": "4ktEs2UnMgPazPkQ3uwHSSoMHU9nkcNRNH3uwSAViEZdr2KD3asqQveLCRBZ9zYLgReEZADoYzGrNYvAhK2RHVTp",
  "key32": "345NoxPrNSyLvX9RJGTH99zjiL182bAPExMbFGC4T7tCLHDKAd963McERqp6fWQTUqmseci1jmDRz1yMXWPsSqMD",
  "key33": "4h2VFv1yjtQqbShSpPG5AhKhf9Jxp5NY3czSZTcLb2LKgTZ7vNq169j833UQn5YhJKAR2adhNR65ykCTv6aQSbvX",
  "key34": "3GTLdcHUJBA4XnvxRuH7VbF4MNA8oPg9Kwxim57VRZAAjiCLnsUWhfkYKyprhmQzc75iaJftr5nzgpZYBx43WBhw",
  "key35": "WghGJXLHwQsWQtB2z99NTpVVDbGZd4zkxb5k1AU1CXRn2VU3yYXHYr3CE3rAQyDSVXVjPUdw8CxWgpbx6ZvMwUV",
  "key36": "46Wdse5fhHModceF49ACZuo3ChHuf6roFFKuckcY71grjdm7zJQhy91MYhNR8iMhdkK1vY7hj3RLpnSYwTds7cHB",
  "key37": "5HxgUjVgkChTiSALKkpmnHtzLKZngqApkmMbo1yMqaESAUZwQG3wvFf6BueX7Ju6ntZKWkGxsbfVw1ysdRjyjp3n",
  "key38": "5KRMcLXz9qt9jdkoYoRD2tBhqV3qcTmMPTJAEJy3q4rM5cf7HXU7y2LaQKSUeiWu7LAvYn5imNLV27cCeCr8WCRB",
  "key39": "F8Si9HqqXmBoEAgoXXjAevUPHAZRnyYgDX2G2gu1dybWcg4xcRa4BP7boQqrdTqwboNuq6H6SDLGjt8SYah74ES",
  "key40": "2nsgcJWnB3oRvUEjRergdaCvfKLgHykUWS6jPxVZ8fBm2azpuXN1bzq847zarrS9uKqDFVh8XhJQpxhXhQ45cDyj",
  "key41": "2bxGn5De92AhWuCbnLutPZf5A51Vq5N7zMkJEbeqbgQFELe2yVBBMUp6pD3yUtdKdpFUGdraJ7Yeeobykt8ohwsp",
  "key42": "4GpqgpkU9H17wqpHazNYHsdB1mx1AMDTGbWmc4aJwe67hHdTy5AXbUogXuPGTBEaVYxvnxn4KfFBrZKANsF1MS1v",
  "key43": "4W1aWjBtPi4ro9bujSYhApWvTDMEHxbWtTjLS59zhZGAnoYDq8B5j3bj3EWf2E8bEELtSfpKQJBZ8TiwwfyoWQ1i",
  "key44": "4Ntd3TqKHGZMCswa3pek9H9o475L1YUsRiUXa13Z2wFdzpJqz1auE9UtdaWVY4GMmwD7d9GV15KCY3Xn5577zUSa",
  "key45": "5ACAE7z6G86fzvsfFoNjUnbHAoHrYFqYAtsLogf2XpWnJpqKK1JNKHEh2LhhruRwVecBqQBcJ1NVoHckxwk6VURa"
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
