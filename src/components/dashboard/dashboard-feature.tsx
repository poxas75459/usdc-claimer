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
    "3sHJVTSTEjDGCyctdcMrdtiPauHZj46h1SVFiZDLpxyM3YPam3vDUa8KHVxFsUpztXv2LAHiascHrdBPqsRzsxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BioRm1NjQcuTDtt2YZ985v7uuLW9z7eD7NDXTw8Y2GR9XLqwncauvbqiBiYDuE6qVMCfGXCofhC3sLh1DCaM9Gj",
  "key1": "5WuKCqS2Kt16R8XD61soiu5dqZZJd2Sg18tcMqB3dQfJXxySSATjqVFeF8X9H8q9FDbCvf9QwuTfHAme9MAmgqAh",
  "key2": "DJwzdtSmbuKTZ7nRNnZLw9ZARpYHjZ7BA3do77FcE3wHauLTyj4fJgLzf8dadcZMD2yC9J7Vvo52eBMYzYZF4JY",
  "key3": "5V7F2FL1bnRDhLjqX3Q1JZcpGb4URaoLQn93SbrnbvApC9YpK9VEWqXyon9QXaoehhgAzMy8EhpAhXxjJdyznhiW",
  "key4": "3BTeLsVznPApnCQL1s86h3SXkyVZvZ3Tdq2q4wW8KVnoFzfPFoyMsVzyqz994JS2itA5cYvHeFyCYNkhqnhZZnEk",
  "key5": "h8qaod3kw2zBwUUhHqJhtoqyKPVyZU3NfAkQxHCt9i1gTefVH27hU8Mx6GEEkowJGWbrDJWLWMpPiZy8wPYpqLF",
  "key6": "5LdBvwjNqx3TXYxxcp2su4P4Zm3KvurfSvoip3nMWTvVH4gY7UbVbNEtdDJVGrk9PEANgSNiP4NMQL7nMcaAWPs2",
  "key7": "4wW3TmrmgArsfKdQci3UoxqwcP9K9Nx322dkC211GEhX89iS5bmKiQTyJFnqbqRJRQR8KvnjTijiMPJ2DceQm7d7",
  "key8": "3WZ8NLUsm1kEWupU99KSQq9XeQtUbgjWT5G2YEGWB7b5yn6iwnoeWxdD6HfbP2osUy7rSJ15bxTTL4L41v5dzu64",
  "key9": "5WY686DtTWTKUfdSadqCwBGCpd1zJSA68XzHwpCdJiY6XxynkcDoF7prrfJuBPEADmig2KYQgf1mAC24XxyE4PnS",
  "key10": "4sqzsLxFWAkiMmHPBUqXi3B8RhkeFzDZ41dkVKQpADBaMjfF3Cppg5Rrj8AUERG98bhNP5teNQqxFSqkCsTsiwfq",
  "key11": "2NhQ3zdHB8MjZVpFhc35yz91kQD1R5GRWedwSp7cgAWbJFjbZJVWCYJqeKKjwM6KAhMUvg7qNZ3uLeqTEyy1KeCP",
  "key12": "4y5Wb5FP98eVEwVEEtwaFpZMC3Q5vSyktWDPzQrwsLfGrJowT59Td3D6DbwnbTdhEaBhFdpqaqKcPGsPcGzK7BFV",
  "key13": "rqG2JU9uq6PV8DpNe5baYv32Tyiuty56Q8y85LoJAddyUxxR6duTTWCRMeQ5s1Pq8jTy5E8TnvdjqgHBpwxkuQR",
  "key14": "3Szg3wWtcG737piMXjTAz173WcR9JsR5vD3r7xotdAGXdBdd2UMq6AStPzKBD49R52ocE2fb8Z3YKbR6zfqrP73X",
  "key15": "3HaKthNaA2YVDbCZugJyMCJpYk7a8VdCzM9AnrbDqJwvXm8zZrYQLbWo1gJcGdJ8XgDQn9RRBXKgZQc8rFsAWaN4",
  "key16": "3DidCAW62bq8gLJW8QyqA3YNZybh8pkj7dUaz3F5RX2AqappEp4CPJeJJpkqwjgky276pcQoSyUDWEbCjdTDTYS1",
  "key17": "4R83ZQ84pdXn4QVNHiVtv6GQoQx98Xtktzqf5HiLqEkxmXeNStDBoh4dFCUQzkoGhYGDHGHXtUwaSJEcDBgdWmVF",
  "key18": "42ZcbfW7ud7CCYf3vDJjfCjQrx3HgtYirrx9PeNnxtVVg1fvDRZ2wGGMe34AY6v5SGaPBdKnTfMyKcAksUotn9yY",
  "key19": "4i6whsUx1T9JtLcmuEA6JvMYBQ2zNb68NotHahHXhsV2oNyjWYn7UFo5HRmsMdG3fAL3K1mn4v1rD86uRegZn6wj",
  "key20": "4Eu3dSDj4t1FRvSqtAXisUcfXZksQaWwFFkzF6ScRWDtNiW7xHQgrEc7BUdyNZbyU8VUnPGFaFgLMwWD9KLu9nyb",
  "key21": "4xnRRN4yvoum46dxCuFof2bvZgMUrBXK3r2hvXc49BJwGvwK9q13rjAopz7GxyCRvcF53ibGPgTtuhY6PCd8YUbB",
  "key22": "5zkBBCYcAJj35SC6oNj23WUntyqQf556EYfMLZwaDdZdPCH2UAPmXL6kfzyLyCAHPFcFekmUXZZWUwWmAKwxxQ2",
  "key23": "5wsZ8weQujwnwmfgpUSpCHsMK6N3YX2tBbYaerJTzkbrBdUnsDjipfT77QKgaf48Uy6ABf6JdTbxMTRUhFFqMUaS",
  "key24": "5cxdutSrWpHy7PwP9GDQLntGftkgkPSoCYUFdhpYJqiMid495nz7ZuYCCd6yfdiwtF1ZvAJYgizVm5RR2KXTGMM2",
  "key25": "3QAN4CkRWJRT9r13iWkVCk8ccqhLjANjeRptF2JXxi14rxK6FoL92vVXeKo6GzFLUwz1WFbXQD5gA9ZP5AoDnVDb",
  "key26": "3FfVoh7xAnrvWceuJ5pLRDWHqpadtU1VSAYhmXCWD3M1ZDpQiqCxuHA6e1x4XcoDpqNgERYdNqkme3A4bKeucgRp",
  "key27": "3EjmyyPU26yKrV2Gafqj4E1JZAkBRcA2tYkXd6W3JvMFJha4Wmrapz3Z5YqtEsH6Y5Gn8JbjuoTvGSaGaWuuGpmp",
  "key28": "4tCibWfiieSegs1dV9SDxaBndxh2AqwmKSB1j3GEzQiAqkgVJtKDUiwrhuNaVogB5uQ5WC6ivvDo7NYhHfLEsHaK",
  "key29": "4AJ2Hx9iwZf1ZNTzwftzK7GpNXQjoKL6iV3iLZrh3TCbkxj7MzE4exMZc3TXVg1kh8sRXugRDNpT2vgA54LrzrK1",
  "key30": "4Gv35EC3rNWXGF9WqNx6SPP7XXX5UXhMZ8ZM6uuXGanCHPHxinwyeUS36CTZqhjrb1w5LkZ4PUUH4Qi1GgkDXbWN",
  "key31": "5gtvjkZXfV31HJaRp9C5jNsgMi828qmmB1GtH82LiXN4d8vCs5uqkr5RN7MWYKHH3LTwM1CpPgS4bHK7iB3aEFFY",
  "key32": "4QHiUWc1AaS1gUN7MAdBooD4ND3yK1ZQNHXfgWuxMaDMQsX6haZgFdC4aDkDsrbzAJPk7gTgYq7MauMPmzmvjYx1",
  "key33": "5peo32HvRWQEyaZYWFVUo5QPnHuJr3K9md16kKyUMCYYfWDzpUeyTYNEXUMo9c1622nhMT4qLs7nV1c87GqHFxZp"
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
