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
    "3zRNFi8HoxNKwYe7DYxDSdDVARgwsDhW4NXf6SrfifQaMohJRSoKQeSGrRiG4y51jUanSQWTqkyZLEhHH5pKxd6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d9Bz4txCsxZHEcNHjTpZNfk7grdSmZbUnigG5RTttMENeqioAHKawMh9c8LS6PcP8N2BZPFQY3f1h9Ya8Kxf39Z",
  "key1": "4Var65cKmv2aBbLF5AmHv3sFd3sBMbEApkoGynLCrBn2Viw3ebVwLHxqZGc9Z3WHfmwT2uh8hvVbH8kHDyJ3hHVG",
  "key2": "2YMg8Q5T7Mu6e1PWYu2Da3ZsZPJapb122yM9NC1pcyuUjkVDVMozvSeQnoSjwqzUHJiFMwF7GLySCo3YPsXtHdZW",
  "key3": "4TxUtoj5haTEabbWww1CRX7MBqVWGZucqzFNU7CQPKht9cbNh3MMpMq4FwQF43RurtP27kxsffircycFjzkSDWgA",
  "key4": "5UD6QDr5qkxpgUqbaYi56YkDbtvQ6PYm8x9XA1J4999pFAxVkXv5b9SLc7pzAGNuBqxvd4xzKKAc1zX62oKJ21YB",
  "key5": "gp1UCPbzRzD76QR7s8YFjC3taXivAwdk3W6CJVUxAdv11xsnScJFePbTyucEzREQyFBnrS3oE9Lw4H3EkEkhdyo",
  "key6": "A3RtEEyumyZZxDv8da89fdWpmwGvuagoxZPPsr9VVxpRWtcNUhFqVK3mdM3Qyw9sHSKWvV7hcEssw6Rqv7pHEWh",
  "key7": "5MvUfWXCwfPDmX5HMqLMgW2RGKk8rBXCSwjJ5eN4ehXuuugJd4NncdCRimfWR6oh78A8sPefAwwvKsQ6yDVNwa69",
  "key8": "3PJmcdJcpUA96TcAPd7nkZivSDccTJpiUph6dkmzeWMcXVCj8QvAeTrxmZc6PzNBMzbBgPWifN7hQGdYrRjkwWuf",
  "key9": "3sqMPpqUL5L7w1zMiTB26YJY35ndf2WBmtH1sQrZkKLQtF3oaGMd26vdt81dYru9efeSFfHVjDpcLJhJyhhHydTa",
  "key10": "5fjUg9Bw8VG4UPc5QLCghMR5kG2QWAzUhbw5unh23YcMSps3FnpNxF4yi5ngiLEEqSbxxVxbzU4x1eJyXJK1yv3K",
  "key11": "4Nzw1tDhoJWwLCVMV9e5MbPwxuCwcCCLncWtKcsWcBzCC5QpzY3h7GcnyTfttdEEZGZt8j6ef7fw4EZ9TUysaRx1",
  "key12": "3rnYB8uRkoizY9jvAHVPxqq9RpyiPuRZXnqHn7JGgkVJf2cfkBkHqzHUG1ttwidsaeANuDwKMHsZ2bHripA6Q7Ab",
  "key13": "2jhxq6xunjUL5jecFqrRsyG3JJ6R4JSXQw4jD7otuQXqH8WW5v6iMae1HuMikdiNbo9vy2H8AUutGJHMLwmJY1e3",
  "key14": "2fcudkcmm8WZdYCQTFb4pXz2W5L5WHY9nhgS5eyxYD4cwHrjXTy9ihxkKyMg2DEaP2JH6BRbBFwsjCeHuTnSsCqn",
  "key15": "3HybXRFNU15YN3S7Pt2e5kyNK7ks8NmzV6HeYPFCgLDSPaQxVh4AA6fVhMacesy1QvUsdBLavJdNsfQ1KRdQpCA5",
  "key16": "ihoBaotQYnKcBMeYR7YXE3i7sWT2XUkbpJLJ2dHi56nWKhSqe9mUoRgUMnVEvLyRtMedWwsibYJJtkVHpLE2HmD",
  "key17": "3fB8eH5W3zgTtW3WmSPh8kHcEsedzqaJStHZH7MzuBzG61VnGs42wj3QHNBKPy12TEPMSu2HEGHwZctNNeNBcZjb",
  "key18": "4vrHTWo9BiBFNxqaMtZ7xfte7XYyF3LQGTo1VVRPKFK26fDB4yTB3U95kZwBd4yidHvd5ynFcBV2DsVt1Cmv8kWD",
  "key19": "52vZ79TXWcdh7rYg13sytigCpVZ1hYHmKKZ2ni5ETLqXzD4hJ8g4oxzm6MKrX49yktNuSr3zKodmeuhgWnvRoFLo",
  "key20": "V33sLKErtkCWyqpBNnpBRiYAhdWrq5tH7UC3m1mH2HbMQgXYhZ3sMSJJGuQodqi6WHjd71zNnr9n4XoWFG4fSmA",
  "key21": "36op52Zs3wiw1aWsFp5tqYQJTpWQfZirPMaw6wHSz5uZt5vpi4m7X8V1hnQqcwTrycQ3ezv6uBuFsg1EQtKbEfeX",
  "key22": "33VtkbkDWcXQd24wRRGbjPwVWmRYzikix7XY5TJPEoSvicnL8KD3ukveyEu4V73fN7HYhFLE6aaXJVN5ApEsw9hf",
  "key23": "1uF9ufeE3UWhukzNBoTPX37RU8sotrE56uTDbte7o6KHnLZ4jqNHxkTipwAhNtn9Q6HuoZLaLEZZ5JFE5WjkZfF",
  "key24": "TrANQxSE7DC2qM83NJwkuGyy8SRUTh9zfLQBJxyyNTkaSJtnNAvHJGsoKeZcSt5e3qZpefCw4yDHPmbzyNGuXon",
  "key25": "2GhLJMvWbrbLcwsGhQDUqc9xgmr6iKm5e2eXARhS2jbk7UTqSCukRAHhcTM8oijNzkxmrr7mg11izaEbJMRdjbo1",
  "key26": "MfMUXnQ2Um4f11hgKKpZ3mpZNBhbKXkqX9DrXkGeoE5L7iF6WM4T66LKhCAKPs34SC9Z6D2X86duHzKXUEMLoVx",
  "key27": "YdMjVvbE7EESHgf5WbhycQPg5jP1rxeJSTM29asHgv4D45ZaA4tacUwA2cbzmQ3Vp21mmeYQ6g8xGV8h1hAzj7S",
  "key28": "454QAfgxuDeMHxz3jdEBAyMuENawKjrT7DhH4QkBSxxKweBHkyy1McKi2zKaFmKTSPdRxcVd4PRKqswWzosPVuA2",
  "key29": "3GLWd1oNrAAjqJ5ZCJLZGFN8VgtEknfprC4yGduF4kEyAw1YBAK1H9qq42825rH7FfzUqqoym3rszYF8myJPGkiJ",
  "key30": "2ragBNTTuCRhUnarkiQmLpTSgbfcYehte2QbYFzykMxW7h3iw81jcNjhzxuKqnv3Ba2N3EH15zmdUyAQsBBzWAj6",
  "key31": "5ajjAKsbcqMPSLQ23v9tGWqGibPPmwHptwjMxhgGdYy1QgDeEBdMjze2Uwbzvw8ZsTvYg9xKVYpuYTWTme7mvkNn",
  "key32": "5XGpj3zYvBexUhTyWL62bxQN2kqtLRR5t39D2CEqxqF4QCHFUCXPnkTqHBQmTXm6mB1uiD71jNhbCrzwrddsyuUt",
  "key33": "WGfoUVwRD29cpwYZpJ8xNdVH6uDLnBPtti8XnVqbGp9izuPfR7VJ8GoNdsX2Fy8KbdD9fW8NNmXRYRMhqHdajpH",
  "key34": "5djrgeYsrEzr8UhDuvBsQaznsTcUo5tceFuGgAdbjyrjykET6gDi4JmTPWd6M3xTYYFonMTdqZxWTMMmR98LhDtD"
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
