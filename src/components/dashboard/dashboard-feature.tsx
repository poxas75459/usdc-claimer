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
    "5hNG46zMEhBmiv9ugZGxfE1W7zjKd6VcauW4rz89FA1FetELPZLoJGMFaFAzj4kB8bTeMVJLUSRoGngcMz4fsFtX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "299QjQTx7Q82YW2DpfedWPgQs54Kzb6PMWU16bVKm1xszYKfFG42b6pLbooQgvUvJvZpDoTDtN9pfq1CNbzCS2He",
  "key1": "3z2ipiweSofJ7rnr35yXaVxewWKWr53pUASkidUFBaCinp1azLSFqEkaZzWJEXjhiJU7AjkkTeMtSjj8VCPFZo6j",
  "key2": "zkbFy7QGh2rbwcfhpsFw1LXzNXpwgxJWPWiGLUDVRvqPNptRHWNA6FrCtU6nGKzuQuH7ghZ7LdBjYjopMDbU5en",
  "key3": "5Z6SJSBJE5axSmq1jmwgenH1gNUUiNAVXG1F5u9xRXET8QQLi4j4kvXwiZWYur65DX5cotuXP4NsG3hK3ZgAvhoN",
  "key4": "32XDuaBgdKHBE1JXyML6Lmp2sQ5EgPHLgvAiWRxGyCckeYjfs2G5PD8dHcw7wpJv6hE14u3pz6Sm4axfwPJeovfd",
  "key5": "5JN7K36UyKjEZd8zFHjcYYcXGF6bkustFQ2t7kqN5uqUsNEN6MiH81ASDsvyE3Ajvqq1QKS17Y9e9S7mT3yrAedv",
  "key6": "16CxVrmrUPHeP6cLveoBZfGE7KRthjLjJVYk8xKHraoe1MJqZR25AwPAjeBARyDFkNyX7eo4Pm7VPyMAZY1mAAQ",
  "key7": "3aeryxXZHE3t9WSZRDAAcLWG7NNzYzbsj87Drvh7wTzG5VKf5YgThdQyrDiaNFwatU1q55MdVhfjS8HBtwtMjVTp",
  "key8": "4B6hFkUG2vp89dUX87EyUS8S6wzwALAub95o6d48wSNYdAVW7wtHyzXU1ypmBVuUfsQyq4cYJCPf4RZmdabw4TFZ",
  "key9": "aB52gNoGDwEKueQdciVhkHaGHKudDS7XXGozPthZvWD8esAVquGDN68L1HfQNkjBkH2nE58YGoVRakSGLd4LYyD",
  "key10": "4SgKQGKenQTjXiw82rZ5FZdLoaqAKnDc5777HAjrTBt3Ki3utre4VddHWfqxnZd1WansdFKwiZPD6hjQP7Hj7qQw",
  "key11": "3tvPUpo8JsaznZBz8t9Uq3vctnq85Wg9wqSBmch1MPNbytwkNS4or4mb3aS6wrTYtrYqUgwQwPwEDLMNUMJMRhF4",
  "key12": "4zWw2kM7Rm1DJoMAxgQYF2fWJd6N9xKEsU95QKKJRzkzthZXeD847ZD74JwZcTUF8rae7TehujhxQqK359YNHEfW",
  "key13": "3mdKNYQmict4rbEyswGJwzUJgGPs7QL37SibDMsk1smXNaCrfLtYsaSuygWXwY9m3vhbu8ZA9DhuE7Q6hPvmRXCQ",
  "key14": "2FgkSzRaJgEkaGgMdfp62YrWF7YzNxxKWUSQZkjceTAH8QLfjcj195m8XkgT6VnJ7AVhdjyWzMmvdzQ344MXrBhG",
  "key15": "2ULUNMoT5mBDbQNCMsTw3v2uCDxJRgBUQnGAU9brFzUuqMPVqhV7PQv9gyg7mXK9hxKxSLrpXLcK9K8o1C2NGiob",
  "key16": "64CsLCZcSFUdvTBLZpvLD7KX3CAbvrGYP6Tc5NwF6oLoyboGPkSoPMR5T4neEhc2XGyPdA7V1RWy2Bq4cq7Lz4y8",
  "key17": "3jx6bfoSHAtuC1U3JMtR7anLZrB1MMCzY1SCeUSqLZAEFePeWdERQj6h5Ah7Vjz54bcd3hmnmL3Gr42hXjPjr35q",
  "key18": "2gLMehicdMxCo3W5WNwMNDZgnHPvXxrrxERWsXbQheZLfW5Vg6kCaCAZbiWK6PZYTzaa6K4hjWq48hAFGrS4zHx6",
  "key19": "5AAzZ37myrit6fkQvhjR3akMHzKWyry1qfXBizQrzqvMKKvcs8uep37gjDrisWtJaBaQ4fuDsqakKN5z1PJv3Nyn",
  "key20": "3vBkwaiRqsnk7KobNF8QPa3fkSwP3at2b6q7NwmFzP8h5P9c5wKDyF4ZpiX1o5qFfEz1ErJ5gQJJquqNLGfj4Y4V",
  "key21": "5bftS8Bf258kwL5joApuWsJ7PCYRhL2sb3UTjPiYFd6GXz3fYNJefoYcM1AKG1aZg84S87xdjSH4mH1w261k1DUx",
  "key22": "AKpTRdznJnhDC9zzw2LNUo7DrinwNXRCdtddjULf14o3wsQeZdCvtuCuv8poRy6zxVBpcFFiSXqLDuaZceMHMAU",
  "key23": "5fLjxo4f9T6RY6o4AAcT3NAtQbug7gr5DxP9qC1agWb4p7evyfZ5aniNsd5DyXfpwuKfDksMiJ88fe77ZD3SDGCh",
  "key24": "xZzSKu4Lnocx5csZ2ETgAdCqU8ANRu62XoSixsGxVEA3gy3jHQNHwTWKzuuVpqRo6qdEv2DDcQaPMx67mkxCQZR",
  "key25": "2rKYC1v6nzzBx7eguuJKev1iM1azJxhmdAUe3jLJGiQpD3oRaNaNf3qSPKPXXmhmRTMwwejWgdUvAzpJS2CuMuSw",
  "key26": "5CU9U6LYkQnys32uHBP8zAG3atez9ErCt3WbdH1BhfcaCVMJMBfHuqPxwcGixdPEDqsEegc9RbGoY9bqysfpepdN",
  "key27": "5Atub2eVUVRmFTyyAvTzUUZsrR7jsdFbDoN2q1K88M263NY9MRjYN8XVaPfPTBcdAdwKyBpdieyXMgneisF6R3N9",
  "key28": "2v7XGesBXBmcnLA9t9xMHVh7V31jBGF8mFxhqbK8nNzZP1fzQghXxdFS6ToCX7Z9osLUbVRUT138C9U5ZJCCEU2P",
  "key29": "2yMcVohtvjzwU7gcveWL1VjB8tcgwdAq9AqsBRRLZ8g7itGkNjcE8h7fCjNyABwwj4rGD3hA5HWVchScCC1XpJ6t",
  "key30": "2e9r9vVgGsqHrwDQSWai5S5XSeLx9dyy5P5KRHE5pBsPJxy2YwWFNLMFQiL61qxqENSkfuWdLakVcZahHWpacgqi",
  "key31": "4mQX4k3d8pEtVqu24KqVX9dHkQPKa7Dku7UbjkEPNDkRZTAF4bR8DzU1ZUJ6dg8xYAY46d5W86ZygfkTbWC9253G",
  "key32": "4feNKG2CfkUydR7DgyxnK7Z5ktHZW8W6bZKDWE8DAwV1xzceymC2A32nrBaFXrnrLBTSYq3FgzvwJf1ou4QbHW1"
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
