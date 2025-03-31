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
    "2WnDH4ZUQpoSTUfLUitQx39JcirYVU2J4R6resXG7qZ2Ac9kXYx9fjYh2ZQa2vnroVsy7hbG4Fdr41YSBwd1FJU4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fRKWAzJMqg8g6ZNfyEmX1GHBkQr2AnkSbtCdAoWFTnERZVnWWjSbLnbKz8cE2r4CT1wMsfkWsvF4WHsgAKXefJY",
  "key1": "Ab5ZugTo3du3wjmoJb8JDXkB1JHzcUiwXuMwG7GftKHyDj9auxWC8kK2FH2aU7KiXv4nYbnwZHNB6N1rMbWnLqQ",
  "key2": "3hPFEEZ33oKQWfRWCRXWez7C7dsDxcZsgU6YiDrzoLoW7cPteTqJgVfsEDbY5a6ueurjtE3nBgTsccVgqUk9eiWg",
  "key3": "4k2kWNYkQaQWgpCYf6P1RUzb9j9rpTF9qTZHFSwbiqeCoECQcXwT5q3CBRQeTgJjf63vbKuMDvu3iLLRgGZPGKNH",
  "key4": "2PkQ8Tj9jfZiTTehnwLxpp8eSjKzm2BjigmpsyUgkdMH25EgzAhVVBNFPZNAE6WCUGNg9UWc51KKSTGAWaHCM6o1",
  "key5": "2UJuhzTiqXPb1StxKDQ4NdAsWgHS7A6fJVktiWTXF7A4aKjURBFHqvrnpa4nKqhE1aVCtqaP6pnVmcosLCKxgXfY",
  "key6": "4KAUGQZhkgfQ5ToEtgjNJDVprxDCi84ic8S9CnTee14HD1LUBvVEPuSw7q1p7m9mUojS5L8pSqqTCLAHj5RMthNm",
  "key7": "9APUPR3qNQRzAToh6GB947huynfqsWyXEDQXwSVbDkhmonaDnDp2PWR9U7SNJJcZ6aLB8W9s1pkvTJ5GAXtSehU",
  "key8": "3FRZtUg1BVpPn3Wh5PeudR2kYGcBrMnkGyBdiQPszwEtbzZqvD5nNewHqjp8TLc9N3QdRe9dGdoe4nWmyyzE7Dx8",
  "key9": "31mxDGsG4rRFiURKZcSv1GPRcogoY5ua2UKMSQ37dLg4VXojN5QZWd4R7uaCKDYCibrGccMptQrPKLQv6QtQs6Ph",
  "key10": "4PyaDnydbjFcAwVCxuQuPkbmDn9UYZSXGnNvFcSbvPfSPza6F2S82uqAypTBewNQHZrCym94GE2ywhK8FJDn24Cp",
  "key11": "5uT3dyWFEE1t46BL7N6K4AYXfcnTd1SQeb2Y5QoQP6JDNEU7A3R9aEf8mDHATZ4jRt1F7DdLo65ZW4gVc24Bk9zm",
  "key12": "2MXZW1CDy887xAuyDK5ZQ6FLLkxr9vJJNXBKRWPyCgGuggtrQJweYdPHAy1y8W8TFo8BngNKNVHiERZo9ZP869FJ",
  "key13": "2PpdcVCH4hTBiFq76aY7xwMK9J3rARUhZH9FvoppSmWukE5X9d4jSToNqppFbVh6SbRDuKaR3gug869qJDR7XZFJ",
  "key14": "Aa7BBr1AVntNk2TdkdQgfijsASkviifp6J4R3rXnBh771fvJZoHZ7kD8KWmobiHJHTWPoAYt9Ba8RdKXWuVMBm9",
  "key15": "89np6WvjXkjKPrxDP5Q6nJEfdCuo4qmsHXbJyMMcwGCsuDyqpFA1GpWu1q6ep1Dgjyxne7ervefNtXMoThWToeS",
  "key16": "5bXfvZKL35vby5b5HBt4FTL4qrs4u2mWBVo44wDMZ3r7ufFsP5jFHvaCpFbuQ1xeZ5saVWbYaaZ54aF75bCVXjTu",
  "key17": "2YrBSLTgxQhjxheNhUzMw5whQNHBXJLF4tRAJ541cMJyyxqwyNUEv7zXyQpuXc4C4T2TzwYzUg8niAHZsZVcZTGS",
  "key18": "4oTSgqNLVcFSdYtAY8LVSu4zrQm6AHdcXte6kRTbDS3ZA8YCcmGEkumuJSnatt7B7QXEfmaN3kQPqjmKaHCpjQoU",
  "key19": "5xijidnp1oiRHNy1KJQjPx9GAAXZoAyqawVKAHPW41W1z2V9rjcgHp8RfqpFxidNLzF3xpuxuE19sL5fTKXoycMn",
  "key20": "4YjzTfgbkjeZWBjP2wE3V55EbTMKCVnzdbjpvbc4zmC8qifCcA3xpzhXCcyg6QeuzcfU8ePJ69EdYUyWvp3DSLus",
  "key21": "3tH7yNz3p5zvg57Erdh1YK7F216sCqaDG2HHVLxkcquLauJJCpfry5yt5gjkFdphneUV8s6drkhTHY2jn7ccEZYj",
  "key22": "53WTPGVWqMaDkPS2cWf5mRDpYxUw2ewNr1yEZKL7A5XLgzpHqXEFR74JibpWBNe4ygTw8xSaZja4H5mR7Ess6ZoC",
  "key23": "4inH3XsgKe5WjG4GVMK8HCvFZaWEyj9thN8AaXwcaCy8rp5dnbajv51hEQhCRuYirU6oWpRYAbb8jZAHN65fHVzh",
  "key24": "4RRuTbuy2rjaQptgEmrhovNbF8HVSPTqF5ffMEbkksqrnrMCaX59b4xcXZhzuT1YdfibiEX5sgQi9Ggy5BhK84hL",
  "key25": "3jxoZznRJ4b9oUAw95yWS9M22NS6dM49MZD5CuXD6NHy5TkutQ5T7yXcfJ3D5VAsU1nguJhsgCHLWqLHyco4U9U3",
  "key26": "2v1KgU94fgtx874oeEFHgzye3AEY5Un1VNH98vG3Hgu7qFeoqtHTHBu3kqPyxCWJjKFpYfmNRpWRXKEjVJGkgKTW",
  "key27": "3izWQxG4BdwEep2RK556M9mmEkbpokBbRZfzLLrqvKGm5S2HbiZsjBqj1jyQt5Yom7G5oyPZCay2UAcJWutxka1Z",
  "key28": "3J6WmbaZAQofHqJbDBiL6qFDneXZxe3ZWyBsToGpjYcLo1xoi3XmX7U2dW1zR6Le1LeDKpTQAGd5FK2VZTMmjftu",
  "key29": "5Q6jvvUF9rqHPgynBV4ANGwenu4CU7d9Dwq6M9qxdW1rSaAsvjsu5cCcWhrjvZWoj8iHrwXpVv9eu2pgcvZsWoYj",
  "key30": "67UVcb4N4vssZtKVp2oGPLBtVFYk7tBhp7Fq6pEfH4XVtmeA4iWozcRcpdTmBMAftQZcFXS5KiDoatKgMnPKraWc",
  "key31": "5VpVALnKcX1ehtj8DEGDPGZWP19aqAhJeRWwJAd2EGVue2W17TDGuWZZSKpcGTzydfJfFUwuKM1DuNAmovVxGbg7",
  "key32": "5rCXs9NTurPFgTJRtBQUxXi4L4prV2AeJuxUpR2R7qpSkVhJQYcq4wZocb6P5HFBCfnWcodJ7kc8o5NSX5mjiYvV",
  "key33": "54ozwpY94te1Q9UwRNXxpYLpZ7U57N1b83SKLuMQSYMDAbZdhYJcYXAXWDErXZwrFTWqeD6mspbVvSQ8zXmyDrg9",
  "key34": "36T158YXousfJuiyYvWHwzEY83ZxtWBaHrrZ6KYvG1Weuu8xsTczuu9gafzE2MFStDQsvTTNFGRAa1TYBYyEBJAo",
  "key35": "8Hrq17WjnZGxKbNcZJMbTaFhVesdWNmubnsaRATRoihwts2sqkUqLoxRyT1nLZrJQdLtXGhFsiaReZu8jecypXX"
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
