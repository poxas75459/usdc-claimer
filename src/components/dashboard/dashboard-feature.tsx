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
    "iS8gfJvEy8H5bkM3tyb2ixdycPKv7owRRg1NXDBtkGQoZK462MuxccyYAHJCa2nTGFWgmas8e6k425UPkz1LPaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55RL1B5xHaY61Kf4svNBWFaGufi838juZM8TwPV4WkyfuKCGZdCqLzZcAzkPUHizqhCRDHiU4teANVXu9nCjeQbw",
  "key1": "2LF5iwd6hPCGoStqHak2fh24TDbxiWq6vh3AviX9BJeXRPNMNmUepRSibHjatkK3XiFWibAF27CwnEDuwDu8xvXV",
  "key2": "37ok5APtLTAEhUWMZnWtohFfKYXcVsLUns4pm3H2syUrzCtgXamRH8qqrAY8tbseHrhvAMsWjGEh7WSt5pSfE6UR",
  "key3": "5pe5xWbDtoUnf6hBCz1VqhBd7H8kqA7M3cUGGbxBQUVGR5MX6xj4Cn3wHg9Ka2Dhakr14fXhcBgKHXEzpAD1RxTp",
  "key4": "2KwNDG73aThaFt2yLSVbsEe1FgGMKH6fRqL9S1L8WXrxpnhrA82MN1NhsCo3yc2huynTfqAFVws6U8yJ4744Tj8w",
  "key5": "4zDHwWwEda1XLKJp3updPXV6RVYkGNy5TMuVDY2SeEnv7fpqc6jeWi95K5UyMhnatRc71W3Ur1ekVkozkRbjkygS",
  "key6": "KGyjmqnZwKhYDafL5gTfFwXJENhusP78WXq9VFQBnVzMjgUaMtvk4RE2xFMb1KyAawxXNtP36r5z8hJcPUSz8JT",
  "key7": "2Qg2YcgR7ThhigwsNHvnALqBa6wFadfPpQmzK54iV4kyzcmLRQNRo4u6afYHptJQiY5UAdQSKcr9moHJWqLmZTKk",
  "key8": "4XBuXVdecSyCK6EC4xMN7UdwPVgjwG4PgaTUxEjzRrWuMxytYChGmnwMkrKTJArLJ73L2hwxjp9cm6xCyTJLenXR",
  "key9": "2Rb8Aqo8m5uTFCCyB2Q51iU2cFeyzPbd4KXcTrSvxXNCc3uEgyA8W31h8Ed57qh6bcXNSCh5ZtQF8EvD1FaT53LX",
  "key10": "51zHG27x7tb2y3uNGhSK3dQt6rUju8uxdZY32ZxSUAERNxYr4w2Jome88rpeXrprYS5PNQ7Skqrd4BPQ9ScQskBj",
  "key11": "3LCmfyePrRSKBp3eAuyzzUsvVQKv3QUoXRuoF6453SPqkAtTD657irYNaCLRp1UZHts6RbQ8ifdjDPtEXmWRTyqJ",
  "key12": "3oTgLBgKzJg5SAxfMMGjJspfQL2PZ6eEKhjM23bAZxZptsYayucaDbNc6x5YDa8LSJcxS3pokztwTxnUvVSaxamG",
  "key13": "4M8TMfFRPavNhqpXowiNNfebok9SCjPAYy1Rey6qoxfDo3CepqHQkYRCuyFg2wK1X48jraTZVxZYz28eHZHAoqaj",
  "key14": "37idJS6tMZkRzm8zDWcmZY2tA9XuGhNsr3yc5JG2r7azpDKkdsHx42c6osvVcUELSX6xsAoSYp1xZCo2pUkdDXic",
  "key15": "4LNURJhiWqyozb8UcZ7cj6jqbUX6NmZLFTWJQTeYWNNApmbENiLgj5bnkLQohidu7vZN8MeH59gVa6GP1EyWhmyb",
  "key16": "4HRHzGpmUuDZEiMk2Mz3YFjYC1MQjSWPSG8MjMydTTuG8uFMmqTTtNY9hKYNkKpcCJo2MDuUK8Sh3ztMq5VpqZit",
  "key17": "2vcBuoUSNHd3H2WjRbJ8Wyb7YW8TRYiyaadwHqTwWVBZ25R4Qz1RpzrSueFzxrt7Kuii119wPdnWkDzeNqh3y8qK",
  "key18": "2haEHKSaeMNnmnRm6fyWSKZL6kuFZETxmcvT2CjeyEDimrZpMuzmfWwRAQtnPZQrmPqeZ1TBwiceQSJYxEDksQin",
  "key19": "2CmqNfEeXaoZSGUgm4EjMpncMZsZuXCCv8d5Zs4xdy3VPYsPort73Ug6ZXoHn9y8hmFznrBax9RuYm8DE22PEtM2",
  "key20": "3e3PihicCU4hoNDs4BAac6P6xU3Fj7hTvqyzVNysn6BSWpSP9aViPUANHsx6vL8vPxdGsY5GyAuEjj81ycCbm4EU",
  "key21": "4KjLnN9vbEEWgwf5MuC6KCz9PPxRepxB9eDJodNMB5Au3Cjiw6QJBAsuHwzka3ouv73doyb4MmRjgTtDeTLzBbfa",
  "key22": "5ZrfdPquRwsYFq9p1HoDmF2dEDVD9byozvQqL7qkZgkcJe3rTZG9TiQas74HsiBYwj3y49QBUguYFh7KPbaCTr8t",
  "key23": "3Z6QXupfapnpkPBVY7y39x9Lyd5r7DhuqtWrNE4T8mk7sAeinE4N2ibGSKbHTR136V78CgUkmsEqDkp4bTQ6LqW5",
  "key24": "22PyHcDuGtEYdHAjoGeXfigdSEE18CakN2bnZWp1Pj8CL3gCmxS6LFYLQHgunn5W4X1qHuXeRtJU3EsvHS8BfGmY",
  "key25": "2cBh8xzRyTcg5ysNGozcYnN7M2sGzeFK2sVv8K7qk4gLPjuuAtLArVBfEzkaoNHZMWPuyzAWsHSXz2BQet2FHZBS",
  "key26": "fN8mGzJqR6Zm9Butu5tdgJDeXVT9v7cNJYBMY1yjyWuhGdHE5wdm3QM3BuvqKmsNVS4iWqxLRd6F7TMRtxGRwAf",
  "key27": "5JC65r6nJq5jH5W7PztiJkwBGcLTUHc3T22eDYEwHLrRwURGEDEs8a1TJ1frCVa4UAnRaWNZCKsiGPCkGdUTJk9Y",
  "key28": "4QypLnAoHPB3Zn4Eqzj6aDHgAsTvcgNByKYLyCfHFeUqNeFWfY2c5MbNV9x417aBswvJdM3WckXo3ZkQZzCbs2Au",
  "key29": "5YPVhxbDir42MKzRqC1f1e45DJ8GD4tjeZHUdA2qycAuVastPCtYWJdVzCm2GuysuACSyRfUsajQ6uEmfepYci8i",
  "key30": "2reoCeUNPakBcAm4VxTRCbi84eXWtbJwVA2sS1SbMwJLfjEyN9McpJcPhixr5Et8VWiRndbz7XhnuedRkSnecTUY",
  "key31": "6TLsGEAMwXQxRkb18H7KS2x4AEVF27L9q8se4eu6KMQdZb6LB2aFDfsDW5Uea9jEqyjF1gJZmTnGuAe9YJKNHKX",
  "key32": "67c3JvaH7AmAo1L4Fnmk6MadvNPDew99uULefnequRPATyPzcHvJ3s2n5BKsfSEVnCEa5x1Co74or4uWcM8cAh8g"
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
