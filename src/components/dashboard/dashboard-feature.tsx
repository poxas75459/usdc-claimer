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
    "2sfJwSiX9szDdRhqssHE2vJdwTA1XLzvZ6V54RqWjvxTtx2uKdHwoEhbJ6yzqk8RExKMFgmNMaTVMh8wAT7FoyE2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8wQPK4FdsmGmoTnuZ9sZKVDcitpDnuGhkSKQz9db9Lng4ATo5jBqTutFhbRV9ALtSre4SVmrvRCmGPiDswB5c9m",
  "key1": "67jKcmFR2BEDhfJ8vsJf9GMobpUeVeuum3cEAEYMrzhJSYgrC5HsmBTjT6aT1KVMNrDkUdV4TJypJnY7pkc3VbMa",
  "key2": "4T2SQhG2P9wxo3HMUv8vDJZoVm9b3L68Buq1j9v5rE4pzQuzSdTnXFWg1mewmPNLHNfSPuRBoRr1z51Ttgf7HuuT",
  "key3": "5r8uWtJY535xuqNbv3MJ9ir5tBTAx4GhK6M9xXn3PtC9s3y5usqYvuchY297cxeTJfrqrwj4NVj2Nioqm1TWNd1A",
  "key4": "3kNWERUmThbniL1xhgFcSFKWgzFqq7YbevnPvrXNY7D9pYyPUSpXRxhs5YjpEsGZYxuRMKWBioPuZ5b88x2wdUhS",
  "key5": "5uVkBp3hjHaAGjND1f1uDRbEjVzpH8wV8rFPXmKJpB1NVAEZEwRp2yTLSMDvgQWaBSsxAZNhdf76eLwCR3vxEHHp",
  "key6": "3qkkc5koa52SvYE5vXBycvb9j5VoqhMgLJ2rt9Aki3Wpfa6qybqFTJgVSU9yqjkqeQg4bqW3dd6X7RE3PfiTRfSN",
  "key7": "4bVqu8pkNFidKgYBiNn8JQ2mAVwM2N4x3TKPViRovMXRKAChBJcYyXF7Co9LBWv3C3b6VaPSfQ5sKWXtXwfD7ME5",
  "key8": "2rjF25d91k9UnpP34uhddpTPu8SANQpX4S6fnEagKqsTmDjv6ak5DBfoFBJVm1kZS59G6QhnBMjnzVRwYhhGZLg3",
  "key9": "5hCTHWg33AiFAMQkGAad4kB553WqbZoNDdzEM5Ppv2hsHdweDkoSXxbyyuX8vmg6Fy5Jqk5Dv4KVPSb1uFjvR15U",
  "key10": "h5naUoDsJBTxWsTHjQgmfZ5CAFuuZfzkubHkkhhixMbMeYd32dC2B6qcVK4xiCGPCRKezfTKF9XmPbmhMGSm8US",
  "key11": "2Sic5P8dGbMtEfyPPi3C58GZdvWCGbTgdaQ9UGuxyJRcW5pgETdSc2CuGGvdtCrMs67GFQS73G3ugJhnmK3o13PZ",
  "key12": "5RTVhyWV6h94wnkXB9VX5KA9ThkUxM9tLAzmdj3iBjmQJpX7631u1gQdBCDGwJhqgkRT1JdjBFABv8MewAhMtuNQ",
  "key13": "2fSBd2RRLhwGbVW2rxcKZT15G5gHZW6wGFctQ7BQmQmJgcyEBWsGWF82XzViM8Qsrg7coDVp8Kiwwi3sd1xjQ4sh",
  "key14": "3WcftXawGC7cP2zLBRQe9YpxCt2WpxojaorZyFdC6557Rx2P2qdEu8Q3weN5c7Q4CGJHmWdxeqvS4cXPfDvK6edE",
  "key15": "66nkUZRwmJj3FNWtPX7vk6tvMxvpHjNpjU9djW8aCx3xVn5artPKwtsuqBmePPAypgwsqswYqgdwg4bX21UdEKKm",
  "key16": "3irX1bjJswkRTJ269fG2aBF5vcPqEeBquaiyMZntapaPjFSYfhxPVftYSisV64HZ8WfVEp7gnjDaAbBF92SYdRvh",
  "key17": "51CcpbkewRrMK1QZ8Km1achgNXdbJqfGuW5KY4LqCeXgny5BAp9fKoAEEsCLREUxLVEXfjaUaVr7tZNTtNR1upLW",
  "key18": "4tMdPK9ZZbbhmuEQ8w3tUuzqYkHEjg6jKzhk6GiR21UQ8TJHWWgkF8amVYb6muFF6Q8JRcDvTpWsm3GNrfGdQp4H",
  "key19": "2HbhkhPdARCwmFj8JaLGN8CL74oqAs7pKvTk5BYKqrLayPWTysT9R1XiaVfwq5d291zYp7nTjaeFPGdpWohMKfzX",
  "key20": "5ncju8HVaETPu2uewzuVUJ8uUF7ttzNEBWGyc2ujdgdYjDZd1jG53KA4VkDM85xkY5eQ6NYmA9w4MdAZEptScb7S",
  "key21": "S44FVPehAxSEU4QmUCXfTbbycr1kBDkHc4xaJCrjr9RKK7YyLWSdEJC2nkkgrMdXb1YtkjLabZhJHoC3R5LkPnQ",
  "key22": "4tufN6hTEdz1JXEfKyrx6PVst4MyxdY1df1WzLkhqf5y6UjSUK7aaPHNXwnAFyTbBkQu9YVmGVWLbG81NEpjZTBt",
  "key23": "vWCZjmzenSjgUNSjFLv4u5oZ3UJxupsPciQuZ9kjqhsPcGw4XfCzGhf7kkbb7okHwThBYHkfAj1HZnBJ6MaaeMr",
  "key24": "2WF7vMTy7qiF1zA41215LtgitpvEonQ7dALfVULWihEfy9wGj9sSfuPFbeAzLfq4qrwKzXH44SvVamPSCDi6LXms",
  "key25": "3kWuNc6T4Hr9EGdkLeXhGyYqBaEda2ynzFmNpdQDZgDdoYtZcKKn7fswskRUhMD7HJw6mJYEU8mb7Dd5pWyGjypd",
  "key26": "3MUDBbxqrpWbzemwsdRu2XtJqseYnbW7pGWqb1jc2Xe3fVLxqXRyasa4NuCwiFhkXLxeyvp27rjMKqkuz8coSVT",
  "key27": "5NhxG8v42HkgPp7ir9W5CGh3ZKTFE7TSot3Pm7Vhg5WbSCuNwRjVsJet1TQTdGUATawKLd7H5HeMyZXxQEjs5t35",
  "key28": "5otUmvnG1gCBsxonmyKFdeNDXkWBAX3jiXm2bedEuKKmVTP2Xc7CMx7oqUqAXfnkWtg8Dq7vecksw7H4LLnEYson",
  "key29": "5JVCLjDtwZZLKAm9TcQfYiAwBavWoqRZFTyVQjw8P91DWaRt5veEd9iB67MH9FJ3n8J1BdayB5KWDNbYx1iegtPz",
  "key30": "Gkpkfovqu5TEmgjQ14okhgEShbgmggJF2WTU739ZLvsHd2pXGs7Ahh5xM64xa6NVaRZZm9qJnawFG3KiJWCqFZp",
  "key31": "CMhixeRLrkQvVSgTHJnKxBMoyPBvbjs8upR1PZiscig7Aid23GUkYFTt6T3cQ1a84yzCqEjmm5Jz2YKVVFztBSz"
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
