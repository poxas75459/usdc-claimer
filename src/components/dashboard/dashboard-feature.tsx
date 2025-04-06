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
    "5gtbhuSbRikUL4crPq7xdMkMgc2jcNvu2HKa39jiqzsBKe51uwzhHP9T67tP5QXqZkdECGLWYfhW9h3Ds19ukYbE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CA2G6drLwiPBvuE1bpwL7se9ceVZwf3AdpEb22GbNoPhMDsUSXGWjqtknafaHYhpHXXLpuSUMaot8oMuwCnKYcN",
  "key1": "5q7r8HLzvg8gkggUtz1ECWeY44Ewx4xV4XDr2r2Zk4LXfGBdnEhUJn9XrarGHQFywaKVesvBLVwm6J59zAP2XxDg",
  "key2": "sv8ZWSspJZ6MqSZhPrzUxtRd639SggCzA9pxuC25v1ndGdrokSVQQ9HZkwhrtm1Cn7BbwLquReUfS6MCPaJvXo1",
  "key3": "Knu8iEnSY6f8YVdaPvnAaBviNq4RsYVKZbh5TqhUSKMVBeCRHXtTXjFLNHAg5629h9DiaeRAwTeZmx4CCJLaDZe",
  "key4": "4gGHuJNLgGLGQeFvP58eU3hf5VRp3TKUHHZR7ZyBrzuQwKGmGarVmvgpmAWm3tQsQQz5jdfhVZLctegDkMswwj3A",
  "key5": "wcrCv8huSoiGYo8nhnHAjPG5ez5QZ6otFSSQq1qWksZGmGDDC3ZjT7unpKFdLMczscM3P6jWHtWgpLKUioA1wsG",
  "key6": "2uriDZX4g1E3bS6jRt8k6W9ZnnZMtWaYrZ7HqNzuTXzzk6idAsbCS14DrA5juxAfySsDQPucSKHeFURai1yi6cnt",
  "key7": "fxxVMc6FgtpGwsjipuQhPTAR9R4kVaEcLi6MwUvQYar4qYKiwSqoG2oaEa2iEgx7DMyK9acpX33m9oDG6Er3Hqc",
  "key8": "3XFKqA6m3WYzUpPYR5sv68vZmNhw9jnDtRTXsLZz6MGMQzgRvfiLKpGZHUv7rwSHh5H8y85EzM3W7FaaWCwRZBhm",
  "key9": "3px5K2LTXZzUmrBNrHW6tVWo7hp4aGKBjWWDukMDBnk9J9T5YUcP5p6coV2sqTQoVfFeT3RedixZiJt6KvihBqpP",
  "key10": "5YnPKdpHFC3MVoAhCvpqvuGkByn8EV2cE8L9Tcq8z5Avk2nEHfQKLjDFJVnfvaLgLhM9UXRrrcrMoq6eZxFFiWCp",
  "key11": "4GFJdDexHYeXk139jv5AeezpKJN9QRXbRx6bt3WcP533FEYVUEos1rnsy6NarFnqvg1ik4uuTcsZDQgQPHMVNvnG",
  "key12": "5bu3acRjQjrptDWogkHtfhr4w9jHj1ERVM4Y2HtQdwk4crqe9CWWiigH3HXAjobdtzF97Ti6RNakU3PxDYn24YFG",
  "key13": "5xKsT4czdaWUtyTZ6gn66Yj9L1M6kHayeWWTz9UGNqkBDPqiCDhgCcTHfCwwfzVWDfnjUNSYMqzjm98Dxq73xPgq",
  "key14": "RyUS1MZFWYANj6Yx9nq9Ren8VH6ji9dcRAAWSUQj3jFSLdsJUeoNkdXc6n26jzAuV8FGGyceFqNfgZQXiGs5aef",
  "key15": "2QEAcxJ9nzfBh5hJUVdxHZoXhhKa25fr95dLQ2SDaH3Rd2dVU7kh5trXB6HPZ68tDoesmMPZRPFHavvVkY6XzGMn",
  "key16": "259Ba9kAWahm8F2Wfd4jmPjZiyJwaEipHAm7ANBqwYrJnHR5aHCbPWF5zThxRdnFVuZBniDMSK5LxhsUWQjWAvfu",
  "key17": "kFgLK3VAFwzETXvrQj7wGvREiMBdM7tVWY8WDY97LoVYV2Bdcbtx4TaB421U8AvFp8D5zmb7s3UYTqiFzY3dZRZ",
  "key18": "23WrSVRycf8ShKpQz48AWX5G9TvQntJbgsmbZKGK7vZ6SBEpC6YKugu3TPRGmMuRVEwXxauZuUrCgAtruLVs8gAB",
  "key19": "GvEAs9bbWqi19eQFcaA2QmXVaKhUi6pHhF8V1i9XEpXxcH9N9gunYzZxh2stnLt1c6TPUbjM9jZDKohFhRHD7JH",
  "key20": "3pPm4ey5dgEtPYyaRih17N4EqiMg7GVQsmjMQNYgnQnDoJpSExdTkU6LrNZaZhfJbL4zuNKh6YHAD9R8t2LUjLLN",
  "key21": "88MdtXi5c5fCK3MKhqXMghjEpTvRqmjD112UsiXdHkGz4CM4nNuYR2Mot6fS5nqEeRabxfEh3FC3jdT4gpzZv5k",
  "key22": "5XGveTthCKsWPtCdMFvhFcf5HzFKa7rWLrWrQur8Lo2ctwWHgAeNZDDBNP186BZnwCjJptXbrnjDRGihVwG1QVV6",
  "key23": "4JDocWKbjbw9pVdydsCvwcgPb7UcXE4fHaxjXFmGA8afLUY7W6rPaMZmV9kiZ93oCS8ofzMitAATQchRqLp7aPqM",
  "key24": "2coPv6BUFCtoQvjdnpvaRf8uHjGNKqnTKVEKxKNEcWuyyof3w4sqKLLtimHRNq6tTSSKRi5E49Kf2a5XBYRKDJ97",
  "key25": "5kqwCRZaHpq9Z7vUscFF1bYvbAWTu7gPBWKEPFLshzjeGWfKMgH6WyHPHNyLE1khX5BUN6UELE7qnMajEgqKH34h",
  "key26": "2KnxA11GxWQr6TPhTBVKyZ36em9tv13txfzkBGxz3Nn8orXRvwp8Dvg3R6JJKg2TT8Rh6ydN7YDxgdf9egJi3zr4"
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
