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
    "R6QTZG51Wr651EPhnKSw4DWgFAcUPuzr3H8DJGzXQBWrEeLXe6KTcQEpAUihKBudcLSuZQXz8i1sf17ZJhgtCrM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DWrPUHQSaLM2wfgdYGpmvYauQrWK8ycqTBQDFYhxpSjaJkhyWd8zHhXzXCxsTXES7HCw35VUkDP4xK66r96kNAi",
  "key1": "26ifN35F16CYfqF6nz6fxGk49FevwvHrYFxXEp85tb7tNcRFYhNBLmErX16PJchPjR2vmo4xi7jEfuLLgxFjm6gr",
  "key2": "tJWJXAqw9PRDsPtAfoaXTHWBeh529sVQAhEBiqoJD2yQ7MKdB4iiPwdWBFiCDRPRXZeefEQYraSzSA5wmhHajcU",
  "key3": "2Xy3AxFtY7bDdyMdaEgyEqgFhUDBsXB26bNj9F7BiUGUMAktJj75LwpL5w5WVNjnNufvCYsp9CUghnprV7f5nW7e",
  "key4": "5urqRwUdg1oULiNBKvENQjv9y7MCyAYamQkxt5Z1YydkE2QFBN9mH2cjxH2YCVisk3gvd2iSKbJSULqfu96D7ouM",
  "key5": "2qjqKoP9oTrUZzWd7bsj3uWba5M8E2WzpdaVquzCvSEgN5rdy8D8XrSC8A5WqqoqW88qc98zfkWJfLNLRJPHKCX9",
  "key6": "5uubsuNENZTGcFia6RfvqMVxyjimEBYUTSoGF2fux8LH3SjVUuK3LJDFwt4Yv9NecdohB9ByuTnxiZVGAuppzptt",
  "key7": "4myyKttgCok3Pyp6p78q4krg8NVVRnpjbeJqzwpdHtbYAvxZcYXHg4ZQAS1c3fXhBksHSANe18nXq7CuvoSbT5kW",
  "key8": "3vrYftFXcTPXVSpqJPxiAxuYFYaeofF4GfeKSuLfVAGM3XDsGxxmPfFjQqtGTeFrKsE1NUtUxnPJsbPxdhCb7ZiD",
  "key9": "35ieC643Xu4FiVeGW67e3C9xxwkfqiK51sSctq8CSRkBjz9KLtt373z6etcF83M2HK94H4mo6soYDW1ALvuTDFYy",
  "key10": "2RoMQGuskYn4m5iLX6obf7Nbu4yfY9faarNHefn8zEjvCQefbPjLQwkxM5KJ18NtvQwLa2ziswYrneAr1G1ch6eJ",
  "key11": "51CLWBCfqhzosGKBhZ9hgT151a2rjiB7ay8EE9GXCKbc6baqBAn93DkY1AUmsfW2WiiUf4Vq3Q8v6EPBsZJApz6f",
  "key12": "3vVMkAYLRDGoL8UyBX8TZwGVLcgz1614sK4vZ8jMBY6ncz9m3ULvjj8fFf6C5NJAeEWaNRQkdgnkdf3D35c5MyyA",
  "key13": "2X6McYSsWJ8bRJsG49iobL8i46CmQtCazAcqgV8cucdDsnE7XQep2GUV3FmsnR8veJ23WGXo5TjQNtjuAziJNiHu",
  "key14": "5mctiugQHXw58bVWAyz4rKcKYMPsQwXoo9TDMMmH5dwe8uUCDNYnBZ2woB4WCBVpfn7EuJtsHWr9XbQDhYUrhVWu",
  "key15": "4D8oDzxiPrkPzXdA9VL5gKg2e9eWx31zcZSZDa2ixiJgeDr6u1XuvzjFuG1Qk92RZkAJXcNKAv8LqmokyU1SiffQ",
  "key16": "3zaVT2b5FjYsWopMDsdkCmX4hgYnPLk7bnjEW8nNv5xnthxAr9uvexaXK9HhVESZWYW1WPZjbEtTBe3au5tr2i2B",
  "key17": "4RAKUmqdxNJF6Pe4oTr3stWE3B5BBpv8WNxJNZKQHLVJgEECCcMC2PjCDm2RQHiAtun1DojZKRQ18kXDLsvVMrbs",
  "key18": "2awVqzUrcsFLYmdessb5vM1Nez4hmndqPBeaocdkGaFQ7LBQo2kPGe3Vozcr9T7Kr6sEUJZR2ax3YADdZJKwo9vQ",
  "key19": "4KKh4y74F3qTunakSnDJVcnzhomY9J4vx7SKhX1yJkQhP7TyiZrkELx1dH8Ed8j4tMqEgj5Vmf3Kmoz3VuQBP6T1",
  "key20": "3PAkTEGPaGC7qHqH8fvSwQm4FETUEbEauivdo7QNUriK7pZcHcwDa7jr7Us5Yo5xTsNzkVQwFJ2FdWuezybAn3GA",
  "key21": "32qhjhpE2yufWr5uYNoYqwf2dcvC4T8yhC4BNKu71NVJFa7SnZNKxNTh1PeT8pwhERdA2KpUktxbXboZHwtfwDUS",
  "key22": "5oBFnfB1bcyg5xYmvJvHquP2NughWoi8wjJ6cEXFoDQvR9z5g9hTREWMG2F4rpAjNYTz1uUH4p7KyEPjo4qyzwxy",
  "key23": "3zueM1vvKBAfv7n5k2TknqWAP4dLEK3Mj5gjDDRVCCBFU7DEpaKGHR2qWfipKETURCVP7sY5Xqe8vT63YwY7o9K5",
  "key24": "2H8WFK81FqXvUJVg35g9ohZixuvuTN9pQBm6Ta7BT6rX8hwYWtbsb7yamy8b7otteoiEdjoA1ZfhVC29QTwqaXF",
  "key25": "38tHYsdDuntDFC2zYJSyfqZqMMsCbQ6QpLPjdhKwQRQoPAQ9TjS7FLQgX2U62FFtT8wg6NNkTQMK9asisL8tWb2b",
  "key26": "3q7pMurYkT55JrHGTMoLqC4NruoMvPpapJksrF9uPYbD36LtfeqPep4WAMTcCaabU9aNxo7YKxn2ZWMwF97ntMm7",
  "key27": "2DuySbEVMc8vSKwPZwVtL3PJ2qFT9GHwjStCaxykqDskdjQMuarFthBjnZrGgjuHmEVdjJ9KSWCjbwr1L9VuZfkk",
  "key28": "3WuY6G713Z7Wxwzs35K4zJEoY6iuSW5PjHgZZsWosSr3xK2aA4EJNBWT3Y8MAH5FyvUwdqN31MeqD3wx3XE6LZaz",
  "key29": "3mqu4SEtYSKyByi77Lizmk2RLdPwgqrYjfbLD5Ji7kwaF3hVpfY8SECCReGNio4Lpantaj9H36z7d2NDnm81e9EA",
  "key30": "3mAqc9wjQ6sNQTP7CAYRUPUFDGN6xi9ZA4JNrr6vHvNDLLP7jmAUxz9pp4JRpniPVwARNGQdkbCoDvmLUhqf2Hit",
  "key31": "66LYEsKQR6fj6VhQJJr5pHu69sXjEN8TQRV5aKZz6AaiY296ieNG4zfK6fRnETYkEY33W2fgXPitJNjhrS4HYs7o",
  "key32": "3HywjT1kUCUZGsd7qVNiekiMrQnn6ukrgTJRAArqdtJ71XenBpPxXirKmGpXEHpgb1pzYKZ4hyHmVFErUN1o3wuA",
  "key33": "33GZgRPEztnYrVkiV9TxtHh25BGCbbruZPW1ycFbnDJm4GKDwVyyDw3kPNFCkmr8jeb8zv8iGVDJsGmJEuQfs1gw",
  "key34": "49DTEhbV7rhdW2sVjPi7E5RR2LpqZvdFpKfzkNyajUqSMM9jyAM5Q6KdDvzGNfxAoMwP3PUDhKY6KdHBbhbnbzdX",
  "key35": "62VnijMByw7aEtEVgwdk1SvfxzejSxmUtf1oYCGNftmFDSZLq18ZaX6S1o2hGsN3DMuQj7GNjc9fbFcAm6H85VAP",
  "key36": "5XgUSdaBNCyTZMtUKVrFDjHP6aP5Vnwx4dT1VWfXc87zJDzUdv5mwjMrhXBM3bsVLRA4Z5Y8p64TkgLYQNXouxZA",
  "key37": "4SyXxa9rGfb3u9idQ9XYvzT8kayMZaZcq3WBN2xMc6meyyWnXgTEfRWNMDVSCLwA8inQQs8SovuHW8iuDbzFrFZt",
  "key38": "4ctnFhuctcdbhen9X9M6a1LNbhCKVsg1kYjJixJHddxS3c4KAbexFM4yxPGYNFHooXaXbtBAYpxdbGFLmifxzfwC"
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
