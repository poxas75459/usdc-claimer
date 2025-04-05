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
    "5BKVYEbGjLoYiDhDvwL8xctbzdf7pEMYrZTag8dBLWQMuFHy3CfEfu6FnN9xBQURw4U8xzYn2JYJCoDkFT1PuPLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v6GAwJgLUCCEMN3b5mjudB8WTnGgd89xnR4AJXgJGMhpQJJmJecnZQwsuB7YfiAEk7s3mXJhTk9Hd5yv7tUoHtt",
  "key1": "5yUbJmPD3CyHV2LuMPCq3hQYkDqFEc3d8K7VfYW87f8b1zEDhKPL6RXEzDn2vV5DLtbYVy1UCnxzTPhjVG8ETRav",
  "key2": "2Rqk39ZjygpwNmfhzw5ADqTdTbH7vqMACjy1e6wvVjp8bCd8WiEXXZe3XzJ2yYNxoGpoaWbpKxFn2ZNYrmoFmpnW",
  "key3": "2jkvmgBRehtpTLxUKTdduDrVKzVxw5LfHCtNYrKhvtiX6TZgf7jAzcqM7PnjusiPJrrn6qurCXLYqr3Rypw3q75t",
  "key4": "4E9nngZMmGQewEHDJryh5mBJVuyFXJCiDHa3KoSzegbsuEdDwXZkTdN5JyvCYZwp6FXdhqdo6JUNCra1p3Q2dA7N",
  "key5": "3vAb28arvQfX9gZyjpzJCvRWZNvjwgVhJvNfBkxq68cwQEoeG8Q9gfaGW88yVj95h2xWgZZ56xRvHRNcVBHH5oD2",
  "key6": "2nXLCi6SBrcVfS7kH5jDLWyJk6xcXNjujKykFs19WPSCnvRKq8kGfVuyWfYU6JRwZjP8oGsCc8pHTsorHHiyi7ns",
  "key7": "4ANXjKt47wrDsSn79eNswsDZuLntA5p1T1B129yVM9oPXp7uzp8TakEPVx5eSAR4djXGKx8tQTmK4icXKR7TrKb6",
  "key8": "3jwM9vRjdWxgWRtaRfg4879w791qD1xQ43F7ZsW4STS2wbXcCgX77PD8Z6HkXpChvwiiCCqXept8ekieG3xe4hpb",
  "key9": "hGfHQecw4PRA3dfmG23YUzmEh2iKSraBVGB5x9FpeY4tLirpK1nfJZyGVkvzALboaEwxQngmbhTmL7PcYpuvfqp",
  "key10": "2hE1PfXZZHCRqnofJ9E4u7Ra5nb9YtFtyvhuSLaAQUdETTQgdqU4DCVuMs19vCnkR3WMXhECZJjkRUKWLmciafBe",
  "key11": "4hMnpNH6yd5uMSHjrH7kKS6ZvV8SoZ4NZbkMNZf6D7je6CNxjQaJqgZ7BDxhqmESPpDBd7paNhP9XDP8Cr8gYPKq",
  "key12": "4BHAXzSXKZWBNHa59mczEojqLSasyxsU33L93kaLdznpBKFNZqK2EvJa28hSQJCKN2jQb8hnZGK1xEB6jM6r3Wa7",
  "key13": "5qrPcWSLzW8N5NX4xQjsHg3diAbLTZJ21EHujV4spwZYWdDKkxMKz9eRdPzoqKC4bgt3SnPPtFYFunKXrExwo3eo",
  "key14": "36oMqGDGi9JM2XHVary2vT2c4tzKHZ6zAWn69tsGXMPF8hgxuexHzgN7tULTtsrcQMcnR77NdUJocrG7HNGfFo3q",
  "key15": "2rhkBFzFtjCmuUdKgWf5YqZGLejdw7WMQdQawEwNSFKVTJZEzi1Kn972xzoNSQFzmTEtjwnKwbp2f1VW8ZzGan6F",
  "key16": "BNBJdighQm2kVU8cvejHurF16CQLh5rzr1d6cMLn65k1a2NYzEcPbS4NYyBEYx8AamUMiduLaMdZRx7regc522Y",
  "key17": "26ySEZuLJ8NW9rA7ZmMBxCqKV8pVAstERWZG18Bn1RWgZRxDRWMUTWw6SJFtuKKfqLjjXc2nwDxrHnKdQB1AhheW",
  "key18": "4zpykkP4JadxyAHvmgRhPBRfjXxJ9nzXfz6iMkMLjZup9VALgBjjmjKtaXDBMr9wA3aUkHnHunKcPvyjE8yRRaaE",
  "key19": "4QucSwkpA2faosNDmwZmxjA7seyfLrWbEynnsXvPUKi4e2QUm3784jMu98VfGQDWnYVgjmW2m6zbjtsJucJXGqhn",
  "key20": "5Prb69rgyt7b8BecF38BepZKreG6ZuzWJBn9zRMbgZ6TQaDRBNfc7QjMZL2FphhseqZqjK4s8JQj7o77LHRBG6Nf",
  "key21": "5RUsfHgWMw1qaVgwPqFFEGA7ak8ZwEXGh1oSwdfgL8ZgSu6bnZsGpei7kpLdqNewZiafFaQP7KnzbJroWPxMCMWw",
  "key22": "5mtEVYkjTATG78GH3UewD8ekCBRsfXPWkfs2mhSGMKdM4m5qMFVF3E8GaLQCnbQ8NPNjfRpVqfFShyJfaqdmDha1",
  "key23": "2NyS6PrgCKxrh1zkhWtbCNw56peJeFq7RKecpdcdzUsLkxd5wHyuDyRzCHEhMbL3Ki5hqq3BW36ju13pMZiALAML",
  "key24": "5wK1K74s52enX8xue68hn8AcrtZrXtEfNrUBtGTrz8uboAEettKKX7GiYgXTG87yQ9zJ4bKyvQBALSq7RM9Xhx1c",
  "key25": "5XgwZCpmT2X2Aw4Qq9j3ZHSTL74w19ouMqs4nAhFZLJkfwBG6VmEBh7cyTrFkk64JsNEF43EPNzewLqDoJqKAtea",
  "key26": "BmJqafYt7gFjGjiQ9MnMoKZCTsL9TBspqx2SQZAsYorURuhVB9EYjxtEyxAQUe7FbmrVqWrysv7Ha2mfrCQ75SB",
  "key27": "5stHykjxZw9j2GU9WYTgfsvq1RV8FUcYBcBftDZEjnvz5aDV26xBbeSs4fEydhpNq2NFfeBhQC1BBGos1Nx9a22r",
  "key28": "4kZijNw2wPxzwdwxdg5wYJjs4x1Ky5eRRLzqkKKU2ATMYrx5p1TYbbDbNXb3reQb3rnz1Fhd3DUpDSNy9WYEx3WR",
  "key29": "5uDu1nFkHPxF4coZLH4YhevuSy53JDyxE7tKPYRHD4jU3U8e5eT4Ar4r111M835aBSmWB5mLXz11xNeXiW68kKUs",
  "key30": "2zSnaT2xQBLEh2uFiZj4NNJuuoZAZGLC7TesQQuRpJPiyLwpkKHoA16HCsrWNCDR6VTYNAfuKywVTvo44oZRHwHa",
  "key31": "4pKUwXeUycJxWcaDWd6Jojv763WcmpYS7KpPq6YSd5NmpJMY9V8dWx32jwGq78DdaKRS2V36kCBNJ4jYvcnwvPdP",
  "key32": "2L5dpUq2JCEnqvGqX8XjisLJVc2gfC5EKMaVva1qTVzPgTiof1iCxwbY9EjtPtddzC9x2rENwjqVxFmF2KyZVmP5",
  "key33": "2khHYyrzFWCbbduH5Qryxx1Ld2hrTNfKvEaP7p69FCx2kXVCyvk3KrVeK5FC6jpfn47UaSVaBNLsGLz727e5RZb4"
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
