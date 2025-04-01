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
    "2E9nPpSJ4J86MXKd2rbHFs9s7jUjt1g2UAe3Uz8oN3cDbcnPoSuUDyt8C7jz7zsvh5szH5FUVKpxMQCmZSu9F6wo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WWuPppN82nYzpBghJy1z55FHJKEm2fZ1yHsQtH1poVSx5VyibjzRHNVRbYbTTiwwut7v1vRhe7b5nFcRNyrv97e",
  "key1": "4tMjgFFoiJQ5VUMS78FN52DFu8ZtmxhpSucYaeguj86f8uFxfU25Ux4AsaHF6UVj52sR5dxsGjHWgrLVtbkcF1T3",
  "key2": "5wCy3HN1gqwcaiSBcVR95CS8c3k8DeuxcPKegBcAk7CcsgYswxqmiQuHWAQw1CsHgHrjhsJyp6xSD19enS5WPriT",
  "key3": "xb1aXE68xz6rRXkGS4JM9H4P16sX4W1TWJgwfQeqbxbtPX6xKBe49vZvL6syBNa8DvChqSZ3Hr4eN3FPNX1Xwa4",
  "key4": "FqCWJ5kk584JcdnfSRhcwhsQavVLub83huTURDKQdMzq4QF2Gme9E2XE9WxP4qyd7FnTCwFf5cMoZ5YcDWReLHc",
  "key5": "NovE5XA47xhdQVaaQp9CuTyj5fWAmLrhCxkpCEyPQVppJfPtsLEFJuZNVXaXi6DAiApMEzvz5Sko41uTepUoLxZ",
  "key6": "5WtXFPccTdV7qsi8RdLDBtvkFYB7WB5PEH4nMCVzf46BbWm5XQtXhgAFYBETJACcKqNnKmvybVdCPoszebSXACkp",
  "key7": "3zJ7kymGu42DuiZp95jjh5c27EZcdVNWFg1pPBKkensLc9ew7cJ78peAfm9TS3oFztHCThX7ZF9kxyRPiZ1AtT6D",
  "key8": "DHFyabACMLDLAJ9ngGjEyHXYMFtUK8BMJoCZ36CMizYUUKuN7zAfVvEq8VCAsgauiM7XUZySmP9ZSi8n9gWWdiN",
  "key9": "Gk49cNztcYGveMakJTmRKqt3ZNyvGVKV37Nxfn4YQBqoVsuvfu6G9MFb5gbWjg1XF8ELTZ8owMZFPr2kSDX5DAN",
  "key10": "4NaWtdThNLxm63umvJPFhHrWnju7yzXqZgEQgqh2G18zSUsuGYAWmNGCQSJCmYWG84JVApj9A9KKw3q9GbC5Xb4J",
  "key11": "xJupV9nGykXWomDVcpDCqjdrgA8Nbug2N9DtuQ714s8oUWH3J5FvDj5EVUNgZwpRYbVnirrss2xoXFyxxqrxJE9",
  "key12": "bAk2rS4qkq5rYVJstbajUULNj7fMxgbdNNcuJWQoYyJdku26Ch2gdopFd2i9N5M4xVcE3R3Je3YiMWABsxFB2R6",
  "key13": "5trPpCtNehezdi9DhUf9wt2ScoXqNwvbWsUMSJk48v6eXXhPJjhCjHG5mRNXDsxKz5rCPuHjTLihGadyEi4jw773",
  "key14": "2QVvk9dRcsHMwehHYEHa8DYefSzjtgc3TAMeH1wjdH3ozAcTka7GnbYH1hKvghB7SZRKaAAWCNMFKeb2657aDjTP",
  "key15": "3bs1M9UaXs7Ae3RmXsr2ZFmvUjBFy3tsEHPJMtA9XUQ2AkD9KZULaxQo4C6AtBMDzB5dnWJt4LzrK4TCfyxYDx3H",
  "key16": "3TtZZWB7vSLiHTVnxMEfFpCGVtoD3Tifys7xbXhnv3BKt8wVuym91tgsQk5Sko7MkYgiNgC8LpxxYkUEeRkMLPAJ",
  "key17": "3XMX8rfRNHFC98TNnAUPSgoQWiorf65DHADmJPXJfZe4Ndrvax2NjLrxT6ngxQ8RWkQxwRj4m5qeMuNpuX5YAp84",
  "key18": "4ZunciLN5R6ZRzurKGBdJ41XppU8QPiX98dr6UgiTgvApRyMiW2SmEoorvzw8R18L1BGyN4GBDpafRq5UtwJJpMV",
  "key19": "26PHxQ2gWhPMU9woUZPxnxrDjKqStmYnvnjuQdBLLi8MBvHxzKJqDnzu2pTeu1mcyHEf1pBLf5NX4ndfw5jPYQKZ",
  "key20": "5bYe8YZ1M1h31z2ENExujn1tfGJJkgxKGGDCoM8dVLBj6j9y7gHa9cDaBDBfh2N4V8cdjEQUefEpCsZBbkN1JZJn",
  "key21": "4LkhMjzmaMFnjM3zMrERu7VeU8HBA9xunTrQUP8FBLAtYGhnFn6omV4XhAeFCG4Xss389DjG2DkpJ8Cnj1x8Yw9k",
  "key22": "45AaxN5V8uNiMKovzeaN1MpLPJ6kzZEewekqADWoxhvFVntQfNpq3uW4ZcrqGXSXoTPttaASmidBEpwanHXzZJye",
  "key23": "4tww37rFriGYncAzkEGaFE2kcfqGcnec5MZECBt3z1hNjT47FfnhBNhhq5tJTZxrxL9GCHoTo9mRyvGmWjm8PAog",
  "key24": "2bav1st9FLAo1GghP8ziSKUsmxrMLaQ7aX453kG4SKwdmTmhCWP4uE1gz5hQA6UpyvGiJG1xexV7dvXeH3NUdv7h",
  "key25": "3bpGpqTG99P6JhAYjbghvjfJnpA6bX4NraTUAjz8QTk8E6DzE1GjK5qhb9VzbT8H7LG3bUhuVT5x4QPEEC8kpPsT",
  "key26": "5BQeQetb1mDW5UM2YMzwhQ69rkZ2M97J7GHYub5fF4NGxtmnzQrPUmHca5WqDrk1cWrXqXgAaXvBviaBext1j4x2",
  "key27": "3hfEdWzTNQPquFruSPeHSMWNA1doChgz1CtrR7SxPwNc8TnM1X7kHiLxw2N8SSfzc8XGF8jNReZsxmSiTvkTyMzc",
  "key28": "YbKo5qZwBjfqp9iqb78GJXkku48qKfstXUDSGKt7mPiPjuG6TjYEpdG6LeotP9d66YvGz5Ku6mSMpDzLpcT45eR",
  "key29": "4A3GhWvL293gXB96az7a65n96SKWe9Moc4sSeHUBdhLi85qYwr79jHqW6ZCFbb6zfAquMUmZuYXAbWuUh8VJou8s",
  "key30": "3ie5QzBLRKshTFwbEvnhuJFL7W6AWzMi8TQ4sp3ZbNf3JaxXm25h419KLGuYhrftnC4THmEQjbqLoQvEb3uuHGsJ",
  "key31": "2EFBmcXMrZT21bfDkqB1P1QLznFzQS7CqKjQJEGt5AFp8hAL68waq8PmdBq9bjoYNx2sHvWWFvsQtd282twmiGEg",
  "key32": "3v2PWeeexAr6EbzJSxX1gRWfoC6pZkwUk1wj1bBkYmEvAiaJvMfNkwAN2gutufdPt92DAibXcnamYxHkZ1Ya5ssV",
  "key33": "4oYpADte2GSPG2wadRcvQs4uAY3QjHt6qLR6U9Zn8RwY22g7pZ6JDsdJzTCe4GosceG9cByyFxCXMzQorgpQ4zDs",
  "key34": "5KPnZhCmivDUNcM7tKPLRDrbS4CHo7Bg7YEHtJJKZaBfEYqsDp95nvoBo5JkZJZQVsv2XBQtvsQmw1q4qwT3AsJQ"
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
