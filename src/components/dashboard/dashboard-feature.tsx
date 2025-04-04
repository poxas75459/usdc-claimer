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
    "D7LGNpoS8vDvNzodWFE5qJmj7PdyT21s7nd9Tt3V8UpbYxH1BNpKNh77tAm1WM3Gi755ySDhtgQcgs68rzvUn48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xc75ems1QhZBEnMZ8xmpRtLQhCHV1hg5aCRYauBfJiikp7JDarANYm5QXxpkzmmd9qLW1LJgyQ5N8TcB6Q42kGu",
  "key1": "4B49FDc1SBm2tdcpzHRPzEZA2C9Y3xaAmGCCH23kusMYe89XaqKLRnEqXYEKRep6PrbadunoYbr4tkUSuzH71C41",
  "key2": "48BoW6qbksBSmzPrr5nHwWo8QfzFcZfh1ScvwFLJH8JYBKnnj5Twj4EgfmaYfZtr2R5ttPWqN8btnVqYkdpEt262",
  "key3": "4pFJQUY6sYwkVNfwGcEUEgu3D2SdHgasH921Lx3ENmF7EQATm4ZFV8NsGNg2oEGjqUeyFzPrr3NuWSfMv9j4kWF9",
  "key4": "38DehxPEjE65GTKb9qyMw5ajyVCqtg3rRFUttmFC6jwwFvhtrffmgPQUe45kWLm4aaUyhR9BeLSdvPLopgWtQNcu",
  "key5": "ta6THp5yLt2JF9EqGKCu2GjENCPzRjF7XDnjSVx1feQB4hLp3h4RB4Jzc6kMce6ceAxJdcqtgF8NAFGNguAvXZV",
  "key6": "5d8eEYRAAwqExSzVfj5rmiA2SCHNoXVsmgWPYc4zLrQsxajk2z1JeRyWQDceXqoMQjLAgjRRqJTQELMgQ7LZ7gxn",
  "key7": "3HPe5eS5W9rqWrWHpWxrmEWfYZYD5kB3eei6dQMQD69oj8g61oGKbr9TqrTcDecUXt3risZvNtuAd6wcB2BTuhhH",
  "key8": "3nfte7bgqXPBGx34Z5dy8Bm958bWUSrX8Hj8WYTnHR8x7FaivQuANay2UUmkDCLtKoHt89bLEqQ5S1Lk7QcoGAtB",
  "key9": "4Z9JmksAc4cnGPZKuaKRg5o6Zu5WUPjqh9nJFKoZBhUPWzZ9RF9B3Sa2uGoGQnRbSEQUtdv1Ei4F8SEmnCMBwFr9",
  "key10": "2kRFBuhcXNZPhfG3UKzwxREEvEaX8N4FUjZUSZkTm2Me11QaucsTNJ5cz9h1uWcowvQyqxJF2xPGRQ2HQn7o5Nh7",
  "key11": "3uXkJiLcgPNujQFBjURDu1nheFMeakbZ8ZhxBkRKS1jV1phygp58YHSe66nTZG4cTfwgm4iQEgXRRgw81ZQiyxXL",
  "key12": "3zt1YUj5uiVMSbhwxiyGs99VqYnxrC8wNPrSWrUdBE7Fk6wmP28uCUX3sFbEsSfbkvroGhx6cRFp7RALMq37RVZf",
  "key13": "5WqjMWLbhva1g8iYjWvVCXn2rP72tsPY5bx5Us9kGEacZdJkii4SGU9yJjNLp26DDBh29mKdZgkt89qZQhL8YhwW",
  "key14": "28go4suaJ4nDS9u63xqMJgN6VdT5v7uUC8UvGSRiaWbjEvwtjq9zXocevuzr9ZYpds68YppwGpjXojRXNc1NW4u1",
  "key15": "4RegZLR8eRsv7ThxcVYjP3oy2bHMe8ABpH7UZAUsrdxjrW8JHma9azLdM53ibc1QY3vDnkgELjeVAcgxromJfteQ",
  "key16": "3UcHsnLRncbYkdKcVdzp36Aab4PQWcqWsEGVty3PYjdKw8vojfWkJMnBYD4BFCNbjtaiiWorMokoXEwha1VSn9Up",
  "key17": "2iCVEs2CB3W2R86UaD6iwopgDiTQs5snnvBb1gbXkvZZJoxJ3LpZf2QKYkwzpfGX1GTu6w1XKzhhrq1X1yHjYwcq",
  "key18": "2voJNGP4CERuBPQjjY9BcELxDSZg6DUyoaWry5pfR6VcXY6LJBL8FaDhopKgwgKhkwrDc6xHwGADRD9wiaF5AmbA",
  "key19": "5RArH1jfBoQjEw5dfgp3scjae3appq3GJCtvJYHTu9phgkNPaeHioxQLMu8FmuSfeuonsKiygcDg9B7Ce2KAbVeu",
  "key20": "2nZom9BBqmTVotJAoejjociV2jojPouEKmGXfuNSmdcryqUqm3uFznW9HPUku3jZti8RJLujAzkZaPwdCAeGp21F",
  "key21": "4kozB7ppDomNbay4qzCzRM1d2Jv2BTZd22hbZankPJa465z5XHqYDTnfBb6gdC1CVdf7QeShxBdYzydHXsPMnmt5",
  "key22": "4YZEwREefdzqchSSP47y3tSsacLvJUyGGwdUJG5Wq1a5ApNkKgoo1p4LZdu7VeKPcuKsjMTmC4wS3GFq5x6jTd9z",
  "key23": "DUECGzY42Ukq3BvncT63K867fdy8kDUSYcjo6oZYvT3qsdYwbzUc8h6j8ifXUwnEAszzySrb7FXHkJ6pV2gxnEB",
  "key24": "Ee6avbgFGYfenRM83Y9ueuUAwMa1Bz7Hu615i2LNXfBYLYhQZfnqiJe3Zs9GhZXc3qujFKHbyx4zoDUGsgRDw3H",
  "key25": "2x18wpi8jjcxHEzP3SATyQYU23kHLf8ydPXHubJ9aaJ2nVwh4tTFe6QMAhbEDDyYf8jFEXYeTkHdC3ZXK5p3dLMa",
  "key26": "5QTGG1gkUUZ5sU2eTrWmvsB64baNNaJr4bxEqWWFCtJtCSrQ5qWqRKqCYWPgw6CAaUbouySUmZRGXyPpbDgK1L2s",
  "key27": "4MB6BFq8JJosp4icoRZEX7QCMkdEsCUHatqWyACDcHEQ6L6xyjWJgtRJTC5Gze22fvhYDd3cxXc7GtayMrWpECUZ",
  "key28": "5kkKxUdkh1LNHEZS5M4xEPAnF714mfFpHUFzqrPE1ZvGUNgdKA5UQxwBjRwuCKDnJxaqEG2NygT2jFHgQbYySdts",
  "key29": "26S5R4qatDdFfLYURujYQF9gbM6iY5coynAfQ4e96ERFhYUuvsh4DLmsKeyZBZ1cPDejbmEmtcfQw1AYyTKmzosA",
  "key30": "2CRm4YV8656PimRoJA5Y1iV474c5dowvuwWka2frp5vvZVfcm1JdDMQG1qbbMZkPBJ2n9RDp5zhLNDb3CWjDYHR4",
  "key31": "49Ef6C9LG2mzDFYY18z4RqEGZH2rbwQnG6Ki5ZFKqDiccctGBELCLnefQUdsd3fv7tjB32F8tS2Xrvd8cAzYzsif",
  "key32": "RjSv42ukUYssqVRh1g8s4gqpa4ZNaEqwQDjsDaKS6NzwxnBd1suzr1Mcx1gFM6fP9viaQ6Akuk5SigaUfFePmM4",
  "key33": "3Hb5nDkiMJEwJ35gnsZ5NS8aTjAdWui8DUr7MuWZoQisrv5atjhVNwUWPq2oyAV8ag5Efb6NrHiCCoRqimfCUGfA",
  "key34": "3LGLLXbeVc5euyntx25o9oXCPaWdCgewmuNcVicAhrjYeV2Ah8AU7hxk89tYVQEFhiDPbjx6jtLdHf4o2kZuhNCA",
  "key35": "4GUVfMkZPYvXqWyWBsXwMfnyUmTqdQmzTwHJswizui4tXJpeL7HyMvhsvkwGbic5r8kjquHGTMDdfPs5KQyQfoYA",
  "key36": "2McPDQMVSzexnM5x78jp7yiSPMRStWwtFafX6akRvERBjpt3iaTJPCa7w6pESGHDwEKM2we1XgYSH9kuAqAuygSj",
  "key37": "5mF5obSepkd4udo3m2PFj6nci6ZCiSJF1hZj7RhPuHb9gjgfydhwxGjPG3oSamnjnmEWJcob4T7kCrGsyW8CUAd3",
  "key38": "4wNSK8qLL6H3MXPkH32HQPDsb9gz14mnkEoMGCSi9w5SaADXVCJzHuHF1WGYySikzxbuhv2srzeBGMB2cTkGvNm1",
  "key39": "5PcwRupqgyFNCd4HhUK1m5CwWJ62MAWFhkzw2ekiXKsczMSYXj2fQZNwHY8gUCBW9V2c8LsuqiogmjPfZBGyz4nD",
  "key40": "5SKS72GKhS4Lrgbp6DAjKqCKCwoftA7xtR9CXG5RYM9TuNuaKDL8tbTNW5MLo5LdsthuufKbcp1aTg2UjmdGMc6t",
  "key41": "3Z3zi4NKMkNCJTRvBu3DufQf5ZJsvjpEVVsF5TxCszJKJLwjBpumP7iH6LYkTXhs9rC2LK227kZBwoMciMxDiQpi",
  "key42": "2EP2Sy7aJUeG95XR4AWwZjvcENTomqsFVfszeJT6bZHipL3rJXqhBm76o8dRC5xGZJC2uNuxWb6R2KEbZGyA6z3j",
  "key43": "xk1pZFK5pHdavutxGNiHLULL5yEXCFRBKn2rdyAz8J4qmxtxP55Cc9SEqpanLzGjb25Ast1AecMBeY4NiscXx7x",
  "key44": "2wTidwZqQNQWBwxLBCx6KGXhpnwthx5aeQaCyWcypu7PV2JstRLMepof4uW1zVrBktxaGLNVQWCkXFrgWCj6iUAR"
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
