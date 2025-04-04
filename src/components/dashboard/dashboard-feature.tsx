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
    "S16H1KX2LTYWe8HWPwYzkCgHE4vmQdtXV49y6FomWkGJm82d74XpapyEY9ghCihzKpNLFQCxCyphtZ4EWNaSBPd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ciyKBrt6HrLNVq3t6sRTMa4DwA21cweLi3bmXar4dB3qUiT5oNKQeedVyke7rQ3Fp8rydQj1vUjX5Eu9SRqbSJ2",
  "key1": "3rAxBWVfu2qVsSAuCvtC9Zc4CVQnQEaK2RLfE1q2swFYebyj7maVuFr7B163rsEhnetaozgCHrAAyqWAEbzzQ5nX",
  "key2": "56huCcGpE2FWXC7ZhsMx65xExcfDw7Gb5gGkkGn7CmZA7m9Rsprpkg7FtJaEybeDEYRuNnyxdHYkKgTXKq7VsAiu",
  "key3": "2uRaFfKbkvm11xHar7esg5J2gqLcSWn5aA2ASNEzF8VVERbpDsc1Z9AoMcMWUWFjJUNWQYh9Lu4TR3pGW23Mm3RX",
  "key4": "2ZzuLWBEhPj8HPj1EM4q58EiS2ehe2typU8XAyB6687y5uSCBZAFGVZ7nypKoPXGhDAJvmjvFQzVn9s49urgaDWh",
  "key5": "3JFzCUDfVDk9bCSqAB1ae4SNiU4QuHmbVczWXB8tHKx15vz6igZuFEtfCEEgzuvUv62WTgNXLyBJ1kuH5Dfxf4EN",
  "key6": "5gvzokmgdqcRrsYJEFJa7AERuPzuKuur8fVfn2Fe8Q3CPvBodd4KRMTtjaASQ4UoLozf87juQE161ixc5oZ8P2zH",
  "key7": "jxA7pbEbhLzjiCu4U6aWSfFVhi9xb8YR8tatSKb3KNK2pVhS3k7HK98tVafrZrAwkoKBNL2KLwEUHJhpadmthKV",
  "key8": "3zNcs1q57phSD71Huz9tQnL2cSN3j5iLzjV7rJkcLZ7qTjyDU5G3pmM3wR45ovbpHzLFGJB1tVBiqrcazSN5j8bb",
  "key9": "618mjJVUtDnb56sYxDwDp4gSneWQdXNMq5NiJzTba6EHUwhrhYSiYLMV6RpX7gGUAVK6qEYT4Qeau4FDoYRdZQjM",
  "key10": "Y6Fz5oY1vLFnLtCrVEWCBfpUfNhoZrKkKcJZ7ExRfmvpaofEb4waCCeZXRmns9Tpjz9sdUDx1kD2LafZC9RWYAh",
  "key11": "5ARUWQgJWfzie6565gbULrzxmp4taRLXt9mgiatTpdRqn8cgjqVmSbfd45xvfrBGuZvHkdmZYmKDXLfGjfp4AkpQ",
  "key12": "S61cz9czMupBZL47vnBziPi66y3FirShJAesrymm7yqbvsgN2JTSwVgVRLxuv4UT7LNoeewarQV3VjSiNww1v8u",
  "key13": "5WuFFeozkmEanuzrfr5HChVZTdGySdU6WNJUVuSE6wbSfykD1aDJgnfKhParxQUabgVFsyruEg4DfwcMXbYJXMyn",
  "key14": "3N6eEiWvyWvK2oSV4Tc2L4CgbPszTguiEnrz451fnrFdNMdhNgEXLk6zGdStfbtfnpgDmz46czY8EyHiA7fEpGJL",
  "key15": "3g8ojK2hvKqvBFp6f61TjEBVUeokFcUHWhCSqw9XB473J1i1LWw6ERyEBKFnxQasNXm46k2XvD3oWbDFAVPgvSty",
  "key16": "5tSULM99RBmfwKZhPj4hbX7nT1ACqqitwuJSeHLbkiLLVFXGQjdNtQbGmqjFKirVVy1ZdSUrAHeaQkSBmR6Tyy2q",
  "key17": "4tYGiCdxAwfnbNtby7YyFqepyBNcb5uzXzcmuRRFif1vNky9BgPPeoRHo973gaqnDFbcVoqDz4TKCnK5CYTpE3ir",
  "key18": "6h1gezD1bTCSjdPiwpNKrNEJ5QiGFwaYFsYJAaPmedEFwBMUQ1UWW4Epuua2KAexwW3tu6K3pH6VRsBHpXrVwzh",
  "key19": "4LVrYnXQmAyFBek7LFLhLY7quj4nkax2XUSbLJSFZn9JEwavbQKKsmXKnycqCErQok6nf6JWFhXAiFVb2FMqkPjd",
  "key20": "26nMPHXFSk2ozwLt7L1azcayHEHStjt3V9SS2A6p1MZgXwhrDBv7sszLwU1hvUa1TjAeGove7h4ZD8zK2sxpac7m",
  "key21": "4fiad3s1LrzMdZRu7Qa5XCChUrBjVXmxohJSFnNh4tvJU6vgWtkmn3yG5L5UNtTDhdGEUGA5QoqcvWZtLSwFFzuv",
  "key22": "2uuSjtwNpBfvBLdycMM7xBrXTkmp7JACjfFWpbsf7KKvRQPqBae2p4Mys8ih8HH91xphVSENSJrXepd3JJrLnYqq",
  "key23": "UeYzCx9zqpJ4gexFY6XdjyNCSuipe1Czuam33MghsM2EoHbnN4JqQwqJoLau1rK8zvA2kBBE89J1UMDMKZtKjZu",
  "key24": "4Sg5QvevSteVoLM34PkuJSvPZcAW1CGisbyPaeg2afZBB3BL4xbxE6viXSwCz22YfvBps7oNkcRhKav4muwisqq1",
  "key25": "4ah95EwS6JjkvaL1h8pvhNcrVijiEmXrmTx42FLVpFcPrtP4r4f8mgrALuUfkMDeZdDF4uYQUBEmE7k93AZcL8vu",
  "key26": "2pD8FcdBhUnnnEYes79kg5UCvDrCMP5FNGmuGUaPsQoCoFPX3NrH7yJ4E8V9HX1xELHoQh7gqySdrwG4WS4vM5ZE",
  "key27": "4ybbhkKRmshotYL6EZCGsRwp5qmZs2ogfMtsh5UGyVRWSatiQMbDwyD9S7X3GeyR6DcJ3mGmo5m8s3C3GRhaoj1c",
  "key28": "rqNqEj7DdevBZ6Jiu1DdKKLBGb7LXLtH9YQR9ywDy8G4nfMDPS8HYzTvXsKxaZnzTQ6embWCXv2EViPzwuMhHog",
  "key29": "2tRdAAZTL1t4QL7PAPiC5T95T9fjndR2uL4YjiQftkYRx7STFn2JJimhzUE7tZnX2VeK4v9uKRYSx7MvAqweizjN",
  "key30": "537vrmpUtVYZqp28puEt4N8qWT3fhkQ3ZneJy3FR6XudcgpQnEJ7S2pZEEwNyg9KN8G5aSX7u6TWXVYAxnrNbLqS",
  "key31": "GV4N66vG6PKzgEB3BdnxbwGjL1ZL6LRGS4RPyQF18gDckMXuzwCfYJsTVmg5NtzpwmPvTw3rLLvvTEUxUXKfYvv",
  "key32": "qga1d5ejoq1WnBS9MbJg8CW9vkmJ4wKDYzqNUrsZdkMVf6fkb7yVQ3SxUnVqLZczWHXTjSFusTQP9viyQ7uHoY5",
  "key33": "Z4ZW7HiZRY1cPtYW8vsqrxVa8Q4oXw2RLsxGuwuU4nbznEURjiHNpqmRrpBqBucsYiEsLynghRWf9FPsBr66gQB",
  "key34": "5REc9Z2RsbkF4ZWp2hF4UonpbLzzz7JoGEMqFbYZPvY42ksZvfDSZhqb5UTYo9kpNFXwCSXWCaNwXhKKirdtp1w8",
  "key35": "5CHb2kTFGYQpKUYStBTiQ1dFHbaF16mfCU74TFiygWGNB8VJKMYN8Tic4nP8WkApnbTYjtF1WqWcah6E8ZGJsZ37"
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
