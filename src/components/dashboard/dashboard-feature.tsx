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
    "5apHATrWorpcDRSKENqJq5EooRA5c2bJwURNtDzYQqr7dMaxFc7R7Lj61hhxUVVbszbdroCN8DzaPNBZiXHQKPmZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yJ3ZAQEt5L8pGxZVS5GYfLBZyCFvLnSxka1Rhuub6rHzpaPHn62bzLyXiuCs2HGWuTnhiyUD8Dfcri6hfbULdLY",
  "key1": "CUKMU6rHBzYvosfKp6HPvf2w4tKfaceFJej48LFwMy7tStc3PKx2xXKPLn16wQjsc7sF5cwHzcNrdbKNFjJn68j",
  "key2": "8RxukeEVsdVfNjksyRCyDt9G4T2qe6sUu18fr8SEmqEf28mNLuYuahhfSNhxJ3TqY9XEmsHw6ANmuGyr9HJ9JAR",
  "key3": "rZfeqBqgHEgpjrMLy6tnjxJTa8rNVSomfTSqv65hdAFXeF4thDo3Jzg7AgKwBQsum7xrqzn8deK9zKDB6u2vWfV",
  "key4": "2maqhoinEwhm546pbpPx1vBnKKduRLj3mixSxmq34oXPQNZq2sFeENEgQQ39Byo6DTkatXwm4u4T6qJrM4Sf7rM2",
  "key5": "D745c1etqfNYR28UpTvMXvmLuLzaAhUE5o3jAZsPkVBKTctwz8xQZG7WBZFTKWPohKestVEHrXBs33r2zKcKRkv",
  "key6": "Nqd1TDQnvdRytKsuAjDuQaH5rDQ986cRchPnYVwxB4Ev5LFXmsFfEacBWhFK9y3J51fnSEfiCYWxG1NEjubsFwd",
  "key7": "J6RpTpMMgt8WDuKwJKtpy746viE5FYVAjVL4EzVpRY4bFZmnHNhYZL5JoVE4Mve24jx8QmTZQFE8hdZg52VNRCj",
  "key8": "2znJwzFffDrUb67GJHMjd9ohvJSeVCjQ3aGekad9wPFgaweczofbWoSZYcgerVjhd6LbFmBpVi1AMuW9A9cD7w6S",
  "key9": "kXqkuhUft3fMDdLTNELd7SVGhm73YphexBZbZLxzLFuNs3JFJHzddj9UJ3Y1VAZcHy2TdwrTwQm7KhAmETgv1Vn",
  "key10": "4ow3Hb3KGzy7TDSyH1RJ2HMCfp6HsxreJDbr6FgcgJUR7vBPh3Hn7Xmmex743WyMt2asGDqeQ6GN9GVUFesg3Ppd",
  "key11": "5HaNm5xLxaknAw4GQ2ju5Bcsnp2FLqCV8rCrznoJThtxZx7pEr7ZeWRzuWrNN45EVQe9xUBqpNWV4dAQCDfErGmw",
  "key12": "291ZHrdgaMDpzPzSbTDFG7Tod6PUEpNjRS41WhzAxEk3hjcfGis4DdvxHysYQdf5fhHQNx2TTFNTx7Ds1C4HTiDL",
  "key13": "2ku6aDbk3Mt87sCt1jBjdoeu6Wmowuc6YEEe8Zq4im83ppb234UhyLRrVF2e7mdfLcLozCBFJKy9cUf5BMntVBwh",
  "key14": "5oEPpAq9vjcYBBv5SdqDyQoqX3A4yf2qSkFUY8bJSZY8zra6sCqGpbXQ7zxjMufwDGwr9YuUyQ5KVA1EKdd3bUKs",
  "key15": "3CDpYVro3TGs4s5S3hGLH1Ex1PzDqXH3hByQPzs172xfS3uXgEtNkvWSWUSvYZ5ht2xbk5kefEuszEGGTaVzj9nZ",
  "key16": "3LVZY5gsQpTDGJ19jFKsJGQuKPBHgcZSGVCmevzJoDABfcsrWwqmd6szi56oTxr6hkgFqzoaT6Q9cm2qaiFwwoje",
  "key17": "3pN4rck5QLFCUavZddwLjVs8eKVkBprPXRZAF6zNri3DoMw6HkJp5Np44VKTwBzZMHFxqBBSqMxK1HjqMK8pqmYy",
  "key18": "2HryBCJnPREt8nEkstzKHzwh4bRZbd335TA3UeFUNBTDXJJnVniqQ83AGQiUxRmvfY4PYyb7FKGxhAWGrLEFHhBr",
  "key19": "4hxourib93iENUXFh5tD5WGWg5vBnXzVyCvi2NtTcEuq7RNPdPzXfCfA7pkXrum1RfFAeupohPY5kqDww1iJAHhA",
  "key20": "4envferMqZACLzEhqmx4jHojGUYfq5uQMMUCd5TJ1r9GBP22zXotmF2toQo43MCj1qXDZGCtk6fbFR4XKWNBnF79",
  "key21": "5Np7Rw4KbgQxzqRtKXFtDrDmVxWRzyscdmuCAU9jhfAYARymc61kTqAJUKabLC1TGtXAeWbxwRKRqTNJQPVQc3Yo",
  "key22": "4hcCiwBqEj6Ycp8tXtxjzDd3NBKdYsAZqu8Nhz5mUruHpBmrKYwPAzgK4iApC5yiHaVQabrgnT7aej9K2ZiPaVtZ",
  "key23": "4ippHz7tQJjZHKVi35nQT6RfWuak1pzUo57aCwY4VMA2dgKpaK9oXy7x6pFU9rJHoVLcZWv3ofzPosfSL3TZSBCg",
  "key24": "3Nncwr95AhPojP2os34b1HSdAEKUNZX9CsMwxiKWyvbpHw7Y4dQJCd7ZTvwm2DJ6LKJS3rq2hUNEuHvXv9d5irEw",
  "key25": "BuUMB2ER8hYWD5wdZFNEmPem8cSqSSztQACtTkEJxPtbYALfe7n5X7ZRwGYX6Qk4ErgfFW69vuPHhecYB2Qvnm8",
  "key26": "26mAH3zWRjw5RiHGeWhBM6XMFC8oFWGwffG9DoBTdSyaGMtnHYZzotVXxAxvahqhtPWYzwak3uuz2CbMZZiHvB58",
  "key27": "2pNTs6FjuLefektgBLdycX4untEjqq6j2NbpCEXw9uMmaoZGM1ziP2dDo8d4EDcDnK5fvQSssoHfEuYXMH4izK6w",
  "key28": "2MU3AyNKD9UuoUNLTDT2deQkbEpJKzw3pMiDnPv1ywP7i8LyZ21g6reTaUwoUv4R8HF6NQhQSCNSd1NFPSiNZThs"
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
