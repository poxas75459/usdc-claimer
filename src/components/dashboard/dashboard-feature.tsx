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
    "rkNwvoFLWzHiPt5UNhHS9GXzk91SkoHHi3KZ1h2hN2gw7CnvUWTv62R37NuaDtVKawY3D6UMqExVxzdfua7xNzT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59mzYSnXfm73pPhUN1SJK21L5obiJWnwcXB3zXncLKMzSRioiS5uzi5qJC4bvixwsNCrHsQhHvMEBkzZyMGKY1mw",
  "key1": "5vC9UTsRG2npZTvYzxBuYUso3mhcPBQMfK8YwfxX8aozupi8E4W671MmXSJXcgSvZY7NQQs8Y1Tb3d1EnDfNJy33",
  "key2": "2c29hArby1g6oxGDitWNGnMvQtMByjye2T5k5xc5qDKh8wc3Z8HcgrHkdaMxSN447ByioM8wp41q2y4JKxC7ztNs",
  "key3": "tFYmdsPzXz2f3132WGiec33Dwz19WtrEAP3GYZLiwr83w7AyUkyqjorQ8ZmaXGQATVw8PPBtFNjh8LK7UN1TfWS",
  "key4": "5ETkYezNB6ywV4jGPVVGexVWHNMVjrbs18Lczkq9duMaoUxGYoXfAFEVHnKfNVMUUTw4bsMLF3jzgRDgbrGDLvZu",
  "key5": "4idUJecQjgBbw2eaxMDryovX45jKrhgdYgBKGj85x9cXnvKDaxWsb58qMKZbPRcVHGTYjJJNf8QL63np4tuxY4we",
  "key6": "4f2Qd74V6RUkD7DdRuyZdd66LR6kZvhP8ruDvEwSDxjx3m1WvCHHN5sbaQWGsfWvoMZY4kNsUGHbzcT3Q6vj5Z1e",
  "key7": "ok58KzQHqQJRh7LXpj2kwpz7cZasZctYNWSwNTSzSCqDQD9wsrruD7CngeTthLeHR2D5f4Mw5BNMBfxyiAqTQhb",
  "key8": "Kgingw7H714qoRQ5cSBpPYWsiFRxuu35GVt5oXai6JWU7WprcUv5HxrMAgSp4YXfWzvatFPGGfSvHpr7ZRSVMem",
  "key9": "22dBfVyeU3J8XkaXvE4BX2QaiMuY2atncZiTgXG5hxweoUX1EACgtRjZgQ87aM5jLr1Sz2UcKwpfhmBTLVNqUXhW",
  "key10": "5RuJiyLNxGar3tPpWnkzDcXPmkCEfW5KMLvCjaYXnZzoqNHhFd5HcjA9zjUAsBjn7WLxJrnJgDWbnTzKyvBYL9yx",
  "key11": "5DzHtAxK11MAaMjcuXfuiHuRrySJxs1WixvisRmZx9JQ3kv2TLKZ8wF1jsRGejsWvgwyjKBtETdQqG6gGo2jDfFY",
  "key12": "4U2r956GgG3eyRguo8E59ZDhCRYbJFZ1RpgXKspYnwxAcopDveRRhbUdhAa7pMSm2NR4ey2SnjABE1nWmih5b2qh",
  "key13": "ZPL3i9YyUSeVY1eNv8PxAwgTcaQrnQ1cAbV9tEkXLjNNpjTSN772EdvmWHqaqELPp8mK9gRu2V2c5RBsPW7jAYB",
  "key14": "2DwcAAgbYFc8Z4vNNti9FZMzc1gjDZyCV7QGA7G6W3B4ejh5da7cwoJKpYpVZX3gJznT3cGWd3EAnuA9p71UWQS3",
  "key15": "qwxkczthobny1FDGAq8SSRF4bMUvF4B945YcPaLUsz7VfCQwXGMWLJefMd9xxTaENdMDKfEZvPjVeZn3SyZTwfi",
  "key16": "45PeqpaoS6AvU5dZTriVZd42bNcLMt7XfByJLbc9CqyPqvuT9THEvRd918km3E71G2NX9t8qJ9okoYY24bAptThy",
  "key17": "2kmirMMpeVtRL7rm2xCYk2YJqjMFNxHrPxwBGiihwjqNmwzYjkh5tawi4HtGADy9qTHHVFdPRpY8MoViatGTxEHF",
  "key18": "ZMEB1iWKzpSrik7Yfn36LHVbzFYa5nShHR3nMU3xYYb7MQ7dLyV48zx3Ddv4Q5oA9W2BNkUcGqov5k8ZyftCfUJ",
  "key19": "3EWRSxnxiZKFE3EFZdx7D8eErYJch2HT9zQt6YJeB1u5Sx3CjdwWt7r4ahDmg55mGyR26jtzMtfEhv87WE8UKA1B",
  "key20": "5KqkmcWXbTDXzthW7zWvghJBqWZX3Gaf6apC33PLyMj8EyEY8jMAzxGWzGuUyXWC1x1GmBjcKZoiVHi6X9v9mPjH",
  "key21": "3jVUmXhD8yBReYPy87MuUinVzrSj852bmpDvbLibeX8yWUF4iqjFWmdXBnmDoZXVF2b2Ga1mY3vMunNkyCTs4is7",
  "key22": "3KpnNZTfG4y4QMa72YCRtsC3N18tftipGPcUzokQiNSbzoF3gsPb8vfpWBQaK9VdhJZFabjdjTwivGeoebWB9A3a",
  "key23": "3VAEaiZYQQXUGVVWvvvmm6inRNRe7MMAujpWNbm18kpSiiqLqx19N29SU1T1fftqaU9DiY1yCaKmfXGavcTcX9vJ",
  "key24": "3aVzEM8jPGcJ6Fknez98ijh8gP7aA3Y8UYECPBfyG8E7uR6oRw43rxQKy9aJ9YCkJZBizAeznQ72K8MxhFzMr2v9",
  "key25": "bDi2mbvcbTHfiaR3dJSpvE5DSdhAPPYRYgJUbR2gMw1dU9jim1ZNrF528Ex98tCL1ajbDQmoGbsg4M64G5Q9tnh",
  "key26": "3L9oSYC5ziVY9gUqW6LBq8bFntaPKY4jApK9vS7sWz2zKUMZMhRdXLUP2aQfrZfDZXDdCtukzLzV6UZHNxEFLAgx",
  "key27": "2bbVsaZrhYRQnKBPv7Qpc2rGHBxw5DA9VHTro18zHtwTSrRBDSvNsYMA8bWhsWNJLNgF3zS4JcXWM8ErVD7h2ZNJ",
  "key28": "38mB41avHQXypFLQToPaY7KcH7x5KbRefW7aabeNKyyt8Dcq7R4NQpeYdz3E6t5usWfUvneKPL2z2E7BKPbStFTr",
  "key29": "5v7tRUR1Ep1pKuQEPZ6So2vVut8K8HEKgES9SHtLgrz2EUFiEEKvFUrvaTfAPwjcXSMzX8yjgLrrRi8JGBrLmXEt",
  "key30": "2QnfBGpfV725zU9MsoWVPDRrdCCp4mbs4EZVp2omgewJuXe7VvjfTgEAyd1DHzFAVk5ftHtG83pD61v8chBenZst",
  "key31": "5sBN6fir8XdjNPPu48vxNM496wPWafYZ8wqPBnbzKupgK1BFvphJWgEwCbXuz4YDJkYiikaud5aFn7QJDcyLtwPB",
  "key32": "4JP2fyV2zHvfcBrUEarvVNSTemBBNNMrQRvGojw2puLP2WgS3jVDQay5QG3tNcBYrnXeuQ6Wmd3GuVG1hnK2oPiU",
  "key33": "5f7fJs1hmgraNSMqWP2R8bndXNhiFRTtDFu7GDS93734HkZzdjhDJafKg9bg7pnBKvTdf2uRaRe9Mj75NMmS59dZ",
  "key34": "3SJTB7QQQ9C1Fq2gMANbD77KxhUPqVXfWBseEUSgMoLiBfYFZGaZLdRGXP7tdFyKFwTM54AkioC7qrtbj8KwgD7E",
  "key35": "65i5M82vfJC9spWVLhgogTnACrd572nT1XiUXyyFKGC2992D8B75m58zQft97wcNYa4NXrCpnXE39mNUSkYq3Xe3",
  "key36": "5hcTvzCwQwep5N9j1moJujrkD4pTeQPjZcxXctozbi2YjMFL3ka3rwHU1jj64eyXQXBqDgbYEtKMQEfJTsebZJwd",
  "key37": "5Mq6j4tv9i4v569196YURmjCmH6K873mHXftpXNVwwqxDUuodGhvNBGbwwsh7T8LTXVWq31Ph1pE5aDwZxgVifTt",
  "key38": "2mYaa2r63a9qo4myPLNAVnQUdWdm5Xbxf3q6Fjj4HY3ko1XX2jyUv1StoUgSHNejo6C8guB96eZRzWg4RCkcM4qu",
  "key39": "5FSPTCeQ5pVu14nytMCBcoia44gMEK6QfGYHwxECHBqTRDMS7zgXmFd4u3pdYjrJhyFQj5fHyTmRAGYJQ9ixiqg1",
  "key40": "1c23oKnHmQiaL9jDzjDLVczV3HRoWAHhUeMPGiegLVMVkpNCzcmSj48FTzdDutjoHCkn2zHGtafd9Zvnkm6iukP",
  "key41": "3i2tAfixauup5Q7uzdpbMzTUVt6QrXMX4ih43SbRdQxYQU5ELDTgssP3rPFRdFBypNKW4MzvL58SnJjNbdpAaoNc",
  "key42": "55Qhqm6V2EuYdFV6QuJzBagXs67mFDwsCfvUge45eM24xDHcfEqiqLKc9eqcrEdxd7wG6SjJCQbRtfJKuafptVL1",
  "key43": "2avbn6K8AVf3mLYZatMVt5XuHEQ6XEkfJTV9WYfRWgFXe8B6x2Uy9kAH79XEh5TUwkkJ9cP55FLcbbQFakDSoQFD",
  "key44": "QM492NPtXo9Zp5Z6NvFnX7pYLeSwm7nmMmcYeQBdZbmJthW2MnhJYNPr4xdafdCzt1PXuc9JCqGSN2KuDMvKYMg"
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
