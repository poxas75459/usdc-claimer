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
    "2e9foMohhts3tozBbPv4ard36DerjraMABEYsTuuXdCG2EhQHgxxSkf5JP3zvkMgGoP5Xs6W5fq9rX5ta9wnwSLJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GnVx4Zrkqb2dbgd4tftX2Ko221dH6HVcEi39s7kc65WrYgEzNUJYxYiA2hBy6nHs5YnVbVGFmtJPMs8q3dHN2xV",
  "key1": "GF728AXDXVi3jmDb6ZycGmimb96jox5JNFnnx8tXCp471H4C4VxU7oHbwiXUHrUUU7jEmGG1cBWXJjHHbKJcK74",
  "key2": "pSkCDqDufziSpZz7syUyUMSXNMaTg7qaQ5pNf2KjAffEDTghcyMBZCpG5tMSxLESst3e2CbTemjZL3N4AdSfQNF",
  "key3": "umN5oxHXbJjyS86MKvninkDv2gtSspNHX4b3jfxk3tuMSgPQVCqR1tRrKh1Ltd7yHSwiwvWtW6qbqg42g22AuUA",
  "key4": "o4FRkDRmyQDhrATxMiRv7EX3zxYDtSq7VqvHoBwXbsu4PTUNGRaev26CueKmzVgDtHVkW93qVy59uZ4vooQ2fqX",
  "key5": "5NSVEfFJcUmjqVDmnZiz69wWWNyPmTVYJ26ZFcqfDCWGmmBU2a4zgnM9wNM2XXW2U24D22jXxfBzC3nyvomwJKpQ",
  "key6": "471Epj6ZAu5YmaBLa2PsfXNk8xG3c9s6ExVQUkB6ZosjiR1yVTNJu4PcagVDRmkUTE8BFjKr8C1gpe7AAfr9C6Dz",
  "key7": "3WRrRp7JY4SUbXkzGzdpQYPjH3p52HctBHgD8RNr5Pxbmjp78616HZqrPSJCqubVeUEwXmK5i99t8B8fdD1Vy9Jj",
  "key8": "5bwxHg9f1FadbE7Dd9bP3GzPVfsaeVuuXmdcdGbW8G3EeTonjFfdNyhk7RracFtKXU8tBHmsjbS8iJThTBLXKps7",
  "key9": "34zLHZFe6cLGsQqETkwfmmB3kbVMndCwRGMpSyWmiy21f1NMxWS6uy6JinkBVgjXfcH3Ct63yvpMcDfL5rqPM6My",
  "key10": "2pxGcn1bhrohBPP6XGLnAncDUY4nVbjBv4VQQ8ynXCP6RBFRRAjtQtKd3D9sHqbLMuxmbBnXjKaJQoBcwzGo59kt",
  "key11": "2Q7wsT4ZDjHW6BjG2pgCycYLT6xnAnwecui28YBpDh4nF51isPxzzm2rYNeAaj4enpYC9KQrE2Px9858beak2zL4",
  "key12": "5suC5fJY5C4iyDcaQBUT3PqMaBPEUCSsoiigE2SqdsZnpay4tdfdYYsxihzZitiwSN74UkRCvaVNELyX6geeUVqY",
  "key13": "5NAvFBspTCP6Uvi5h3WGkFXPj24xycPkhfDnHVLDwfWtdPvJ6SoJEJikNfk1Vm8vSPcqT8HmTPGDF36MLTho4nhk",
  "key14": "2Q6HSbtk8BmQx6MXsK4yDEP75iiTfdkS1Ft3LpvzMWfDyqrifrQYNL5Er4Brmb86rn3oh28dWthyabEFpaHgZqMN",
  "key15": "kibXvQWVWCNuKYNV9Nau9EKS95ykVfjMTtTJgdB8SP2me5gP81rF9rMEwWjDG4spRBrEeyZrPvctsCDMNJNXNHT",
  "key16": "611JathWzCxNtrc9CMX4KVbqNrcWag9QKoSXNwhqHQB3nXgWYHvj5Ax5PsdijHxGvGS3x4vxP4baA6T8xzVdM4CM",
  "key17": "27ajFVJe8AhsCEQfWazZ9UjfYCG6hwfpuX5WKEuD5fVd8QnPYkAgiecvqgaTw4ZMGFoKT8qsUaDz9oWrHprHekaV",
  "key18": "5HUm47kUPxUkAwSKfFQ83Bosch84D2X5uHVGDSqsoFvWjbR4aPachtYMZs8fYwqvesnoWBmdYj29eQcgtdTtGJJ4",
  "key19": "2vCS4mH7GD1x1hQor3s9FRC8iofDPGy8WNhKcNaBgotRE4gqoK8XC1jqLfA7r8UQ9Uevo3s7cCZKaLH13jhY9X2X",
  "key20": "228FzDgscRRpDAQWe9t5jPs7bt4XWRSETCpku11EsNnhrMjoFiLEfAPBNFbjvFy9SZREfiGPgvTQj9CYXJ6AFQa8",
  "key21": "4VA331861XM13TsiJXR7srL3rZGccdMFdkAoooZJHUYAuBj3ipxkpGhRB5zfnChWpowEtfjKEdWvSnUYoXjGhyED",
  "key22": "4KCXedhjEf37zw6xqHta5MXJuq3mbf4ADarZSsUka988ZaqhN6H9bfdskVgSGZbT33C9ZsdkjYUdtvPiUtRbqzgz",
  "key23": "2ERVzJy9aiQJtjggG8y7g6HFftBVwqS67oyNaJRns49oq559FVSqgE7kESziR8Hwej7rNS7h5pKe3qxWBVmfbhUa",
  "key24": "3yF463vU3cQHN11w6Hg8uzx85PzU6UKA7uyeY162LPGqQPu4FYWQJsxzLGZxXJG73FjbGw8etUbDtN1NMDFRQhVo",
  "key25": "FJiZ5ZMMTZKi2ejaEwEyWc3BNFrhzXmFwbd5oTs9PceGwkhi1kvVv39vcEuYoZ6erqkHPijXknkPDpdCGHbRBq5",
  "key26": "4yYU3biTm3eksisewuBGtniobcGCGTyMYUwWBTwsdpKhqhUwtHt1nYfvFWMCP5TtYXnZyiYv6QNsJvU2Spd7DRL",
  "key27": "2xAYoqGho1YLnZN1XoyXgubbhb1v5MoL9xmgffrenZ5XH5qdnpAHjvG5KWeBzCyWPS4A8rrXwiHMxnTfVZW58epF",
  "key28": "5yQeBfvnQYN7dhjG1vT1s88snLypdTUZNXXxZQJRFLkPWjavDYc7E5GP1arB4DSnhmDQcMwXHYAWfKTp3WVQpbAD"
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
