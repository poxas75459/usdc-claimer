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
    "abGAjLrNKtwV5Po6UFBjKXGqQGAGw8LMLc5Jy96sqoJybVXirNi2nj4WJReZQoZKvXA25SrYe4GeqS4KXo3HGRx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29s1U2Af7pWeSapG6cQGAx5b9ADnRmrw5xJ8D3FUdif6bRMGvVVzqHeNb9Dni9DTANLtLpD1T38JgoQ9q6RE7Kv5",
  "key1": "39YrjmYrdr4c4zwP11t1SPu3JTbLzygKB2eznneaPEpk157Bgo5pgipmrNavsoxQ2oA3ej4durSM8RdS4aGmibcE",
  "key2": "3F5gay7ue7FGTBurP186nrUvVMChu8QpJ7VPZPvHtDet9uU7ogYGDJnE8VvrSBscjQ4ByB1sHs6R8SPhp5mwaWca",
  "key3": "5FMfk8u28QzVN4bGaNnmDftE4Vb4ycdQj5cXbUCi38Qvv8r6FkVNykDXiMsmgiYR82VP9Hz8H3g8aqSjBnSoRdCW",
  "key4": "2redfUE4iSCLywmubYUBWAGEVtL7vzut9i8Gmq5hTdUCt7r24PRt7L2z6Kz5X1CTgpfwpx32dHTtqtr9LEcEfdfU",
  "key5": "4b7hD8vqAZyGiFojids8dJCQeTCNbd8CfCFDV9FAMXH3pRhm7PDdUo76ZG9kHE7ykH7XB3ryVfLJp46bGiVKyJN1",
  "key6": "2KDeym1dsFWEDTyxzNfwhpf7zqEBmXN2RPdXd9vDUu8NgysSwjGk7qdTDKfWCoCkVeCWgNsv9z6BAkZS5rjJrRVp",
  "key7": "4T263Cc1VJDtiYKy7vGFmp5YJZckT9BsnKQERVEn6533fxVwEFL75AEaYkXS1bmcS2zneab46Ln6jbTGpmxh5HGP",
  "key8": "4wrEMcJNfcEWTabMkAjoPQFtBewy9HZAsp9SHcJzQdTvWKm37hucPh1tZC9qxVuWM1fjnTwbzAt5ZgnRmTmhyVDx",
  "key9": "3RVFLQmsBt7Nxc4Tro7Pb2DW1tQ6jXX8orkz37FeP7QwaczdyeoDsqqaTgEPhWQzawVpW8ignQYZ98J3LkQ1f3Yo",
  "key10": "2A251gcpiBrSWRFFunjzsmNxFp5nXQ5QXVAChGxbzTdXso83MyzgGUdzgWcKP6hLQiFi5JwcDkZr9Nt6VVg6dSS9",
  "key11": "RRE5fLWHq5FAahDo4SfBk3pmxdLa8FiGLJhQancQKuWKNeVfRYcw3is5EiUbzed5VXcWYC4A2QTEcviCVtEGy5k",
  "key12": "2QyN7rhzLQCkBWbuLPXKbysSPuwnJypbYUZzPdrVdSGkar4sqBzgnayrZZ1EHE5fNEAz5PaLzHqvVS2jPHNBBMXX",
  "key13": "396JSw942gpJx7qbtZKzufHsCXNozEnJHAGK4QoAQUzQSFVaj32x2NSbg8kHQWpuHFvYtsN9UNx2wDcYmVy5Nn8M",
  "key14": "z3tfLwsRgcnLU1SDfCYySiotUPhehva45WS3oZbgTqaq2ccsnHyehJEzUbzvkeu8iyqSEm7ySeBn9FkszsHcC7w",
  "key15": "76D3Ew8iu35ZL5xmXcyH1F9t7s8je5aCwtJW2hXFJemBXGc3u4dY7uSq3GwejrBpvtA57oiMBXXSrphobmJKezT",
  "key16": "2FB5Mmt79UJ5bwCtcjn3APCsSkMbRzJVWENUUM2FaqXWAih31kKjcKihD1Zmf9gqS7pxmMWTYLs6cd4NMz8rjg64",
  "key17": "cZ32352ecGftbMTZ4PVRW6eciak8m7E8AbGgKDSBHHQoMFVNyZNAh5QW1bsRmJmpTUgmvCKkd6ewdfkr9WDkvRY",
  "key18": "4XKpWKzWdQuneJLgdbkceAHQkLuwZxcJkDrW5w7TiQjyAFKazCFPSAts2Cmd3oTaADTetrcGs912L4rsW41zq4VM",
  "key19": "5CTFJiXfrqaCkhvGfjyfzZTXxM7HKGFH7GhLrqnazUEXgHH9rAF8PAeUhToMG7dJEVPjgJ8bPM7PHmTUptw9uu7C",
  "key20": "2oD4YKC1TREocVUfbfXpf5T2iGtPqad9mdnwSMb1GXuvPH9ZkySZGSMyotpQGcxgvoVzYnKRg3RXfXWC8aFQzjvb",
  "key21": "63VyfHPYc4Bp5KYNW42KGyUv7u9tMod8o4xpFRviAAzNJdcnHqKeYYKYNgGeTxdZcRugEVfG7cg4rF8T95AQSQy4",
  "key22": "2X2NFrVNRjAeMDB8gkNzHu5tbKW15wY4Nz9ugpTwmVQDM5hBRpTRoy8zEBpYrA2djAUACeAG51zWZLWDVufiiMmk",
  "key23": "3uZaKRnX22DupQD2ir2nHq5vPddqAsHRmhD5v3gniLDaF73RvfU5NCehsvixFEiERAn1bZ44ytmSofS8x8BvmUYo",
  "key24": "dZpZxjLxRNrrjerw4xsNmAyPALm37b2L1bc1vy4AoDsEPbjo4SWc956J3Jbjd9337rh1ZPMDVTAEPFLpZuAeKv7",
  "key25": "64orxrr9douvAmw43dJhkgFqEyWScyBokgUG8AvjBx7uhnVpy3yCnEa62fjaF5gbqubxyCYA1ss5MSt4P4gxw8QQ",
  "key26": "4iB7E7p5AHv6ttjrLPAU7FJDzRkse3LShoKgGLDXyDGbVRanruxyYUxvdgtKMRwrTZxXt6CccG8QyamPDMHZK388",
  "key27": "26UKTApYftDsvaufRefFz4KJEEPM5wAor7fxXWdaDNKKaWGo8f3hY18CcYoXdaUumiMHMf1v3feNtnzPSZGEgth1",
  "key28": "WYQeU8yk5aVZVBd6nc8kkCb2j9UcePbM1kuYmo97W8XdVQLHCShmJs2BAGU2MenPLhQ3fWxuJXbMXj9VzXGgArw",
  "key29": "MeC6vhPAhmm8hdN8tfDp5DaCJCWreV8BeKDHGv4PJoWdzaaa2AveJfAz52VKVkDZikfzXvgEehPLgZXsRhecvi5",
  "key30": "5hGxjXdeWGiFHrm2ry3hvgnDr7FVxiaMqr9Jdsa7tSkHufVyd87zaqnVHpbMUHe4gCiTeBd7wMwAtwVfZbGkkWkE",
  "key31": "4gPgc5qeboQbANR4gvPpEbczWrBpXLuEcUkcbBDkicp345UfUjjbqtPzhCHink83k64e8YKUgD19RR8iLoVgkopN",
  "key32": "2BFMtJ2yAahUYxXkTifqcAv8QwXZKYwHMHETH6qcc3thD47gvAfFT1ZPYbtGs8uhwokjEjCSufVDMa9MNzEh42bm",
  "key33": "2YonUCww4v5JhxrKKAebRGgkSniJH2Nc4jW9iW3AifMMjdyUFUq6DNdkNwZGuVTWnYhU84Dn9jAWGnZd4sRgzikF",
  "key34": "2DwE9YHkprize58kyW7qqdPUAozjCLpVFVnUYidnHNW3N73ouTTFhYPTBdfA4XySWeEyDRbLrZZ7cUoatHHdFDAY",
  "key35": "44uqnHzA5TenZ761qBV9P79rzzbsEy3k3548brmHxofKvnJfrPCUEVBvV6MwjVR8oRHjSz9iEz5AeXrDkvY2tRQ1",
  "key36": "4PfnThZiVE5G9PJUnFv1aHUmyQdEmD4yhQ84rsukNHktFirvodJ3codVizNeoXwWVjgd8YPnm2RLX7ghuM29CrfA",
  "key37": "ufABmwTbNeQAJZCXy9X8k2y7JLZTTC9UCYYKong6ygCbxesj5Mm6UxW5HxNefZ38CFq4hm8b7E7JCWdxN7V4KYE"
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
