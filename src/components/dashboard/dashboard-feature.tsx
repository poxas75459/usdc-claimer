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
    "2SB5DcATxjD17p9MtfAdL6TJrAj7nc9DyurJbtzTpkkzMrcdKG2Tq2q8Cf1UvRFDtRQAnwoqrmjG4Gt66Kurdutp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5buBhm68MXZwwwAEZ8m7xyc7GkZtZD8ixSM5m3Q4gMP4YLM9RBkF3xqBpAwDczJiMY8GtC97RHYjtBP4FNvaipqn",
  "key1": "2cjNfeyjK9GSfH4hSHoCpuBpbFd2y6P9ADqCuwR3tvrWkyj3qR6sMeTHcPWqpX1yVCuoiUoNopbeyEjKzZsXZBc3",
  "key2": "4r9VvjyXjEij2HjV5iu9KXJTRadJ9Lzm6BkMPxEjC5CZHrsM6yt9Q1LhvbCX7nsE7jAASMXXkx4aFABwFdaokr61",
  "key3": "34FkLpsVH5xzvT8iokNETnawkJeNg41JHdbDhYMJb9ykCPLkG5YL8xA98NeqzmwBfjcV82XGL37CV1M7C8akqNxY",
  "key4": "3FiT938BS2SML4MnWN2HhqjwVzgE4SD3NBqibzDQBXMmZ9vu3zWtzhWpFPfH3VzxnY4pM1FeMbkNx18tvuEuEypW",
  "key5": "5H8anNzxERQ1n1GKaWEh6uTou9uuFKBbCvjAXaxYHJMmqUiKqxukKPnFVj7qtxg2VoofMhFhL5yjokud6LosCkec",
  "key6": "2gVDkBMTMYPGHhvR1TzVZ9AAaEJqPUyQjDCrJgf84UPJzByt5kBAeNKJvUL532hn1h2ChxMarRXaFWym7N3EPVDo",
  "key7": "kBU77bwXW64MHYMk7Qv6N4veoDC5Gtp5cRuSosvriP21Ps2agF5UyjCrU3R2xXkrvkArhXBVVT5nXJxCHnV48Qq",
  "key8": "472rFHfoVG4kbSmFVdx3twa7ao9QymurLFQPEx2nehtxNvZzhy8xRAXdCRhF1iEmMFr5DMg7W9hKBMLx64M1m4dP",
  "key9": "2YcWxuVEnvupvnQaiBeZ9ATFpz7psRxnSiCiKjBPsKsoZFUnJGd29MLw5HwV4YUrrQULzAkFf4ikNePkmqWtkLDC",
  "key10": "S83ba27YVyUQSjJnCqNfP32KEsarEKA8DHDvF1jEYSDCpCg8u9BUouVnXbwroKXxyWBBiKvcM2WdEqoGw6LStY4",
  "key11": "2w9aHqVrwFwgLysZw7W7rP22tRkvQBqjWhzHodddPgbLeeESXNHd6x4tq3uR7ZVisCikPhB117b1LJStCoehZVJU",
  "key12": "3cyWHcCJdTFWY2vV7sH45LfsXiaDWHZs6hJXnWM15YCW9kYabs7B44Hj4uayCPbtUQWhzDMRPUMjSn4wsJg328oa",
  "key13": "26mqeQcLDCavkKwiJVvzewH85tErP7eTThroBfYwGacDGKqmv2cKMDNrC5tTh1p93kXZtX4zxoa92Sdfwjcyx7Tw",
  "key14": "3htwPGfDHX59qUVanthBtS3UrseKr5wZGo7d2GJGtjhPdQx6KzayhKfnmBUgx7qUsed46yzSCgwCG5Z19Frgneo9",
  "key15": "2SD8jFargkh4deAFpAMavPYnM62xMeQbzf6UQBVvvUkBEe1Roxkym6c7ddNpKkARe7iUhg4tc5farVJFQnWYAEYx",
  "key16": "3rtQ3kTG2EaSMAyewUoD5UmwureNJyVijbKUytKpu127rByhzqEdf6T2dkyoWkuFQXdHm2v7AxWGfVYyGnLukgki",
  "key17": "2Kca1ju5M2VyXAXdKnYXH2NrYcu3TBGpK7hwLtBd5gNsbp3JTwG7JnCyjA6K4mpSJ13y4TjRSRkyozcku4EQjyB2",
  "key18": "53gny86asYDHh8o823z7E4Yd69mp6ffK8HJhKgwvU98MBa1mJ7Fdpega73KMix7GNGY6UwVXXfkuziX4UXyBSbWx",
  "key19": "67EzaTvasiDATMbW7RLpLtq2k5adfuVEkTNwAg21emLo9qfmJpK3Pe41okKg2deVtUzghua8m7157rnf8A24KZub",
  "key20": "4E9RkUrKWin3BYR9CHv76NA6Y9JSMJPtZgjF9LaJxinBHAhjvHBx3u5pMxwbqLqEsvCqDm3KgUk7qK6cW9WJ65uZ",
  "key21": "rBVv54kykDkrz4i12d5bx2y6AKKosVE5amVEHmtnTChr3rUrKBfQpGeKA2hKgFwVpGJbw9GpN5PvaT3agcnBRvt",
  "key22": "4TBPrc9CXfzLJ2M8QjjCPaqzwv8q9RfFXZ9H7QfRJTE9o7zStGYPyH8QkfJidHem5Yb4DvR1muo2WoSeSTLnujnH",
  "key23": "2VpXYg1mgVAxeVCmGPveD6X59b9nX1XRgMvbyGh2jZaDbGdPjkLA5F9P5HCshYV9wtFvGxraqtiiSU3sQNFzQkHA",
  "key24": "EbuNTY7WaQJTNBMpV7p6F8ufm8osXM9tj16rfeHNdH65ULDJUR7eYnbDs7PznmMMFkgQQx9VJWdYuGWfCZF2TkC",
  "key25": "5qXwCP2vpXtxTZbXGXEFUr9DUgXwYFoHaPjQEJTn2icnNHcoA4x67EggdJSgmAdNvjNtRsXWU3acff7oUym42isW",
  "key26": "4Fow9oSVXvvPtyLvRSMxsDok9TxVyvsVQ5BTRwEMfkoGJb9G9UbGajS6kBcchoZX4ojzmbyynGRFbQ75Q2D3Z7Ah",
  "key27": "24zNdoQBjBxz21e28fucG4jQ1irCLU1MYUVJX8MWu8j7rQDbFnnfsYkuXoiufZbvohm3GTCmVAWaSo1RTYhzVKqm",
  "key28": "2FbDgGpKmNBzny1nTuf55aww5pBL3c8RARXDjH98WfARdEQZuxSvc2Z6Ja85eZBfat7gwE27DB8bzRRWZevZvM2e",
  "key29": "3Zx6HeM46WAv8v4TnqSFX9pRekVa7GkcMQWZP27uEE5DhaiexWXG6vzAdfyCfPArzzA1aVF6p8yWNjTkNKZ4VCsi",
  "key30": "V2SjRyqb3JfFHUiTwBPBRXuP1xeyz2jYo226Ur8UAnxAdEYWhhxKdgXQgYFhShRfYmnmqgdT8Fxc2Bc82Cg3ni9"
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
