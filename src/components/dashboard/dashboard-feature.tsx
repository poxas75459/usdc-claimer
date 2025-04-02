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
    "4vrABzDQ9vz2cL87YiXPTTXNkUmXMKjE1M9fCNKYoKAScnCCXhyVkwRW4SQND3DWCowR7JFiBsxqrbc83RYqGhw7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "omhLjBELwBzS7e3YZmoLwFsmUAJvt1YzZEQfbQosPEFtg8CXJqKgfhKbczKn6Wr3dm52o3uYKMcZ4LAWezhSAL6",
  "key1": "2hUry2hJUdx4Kgvd3nLTWn2S322qGNZUvW2Q6BZJMrfNvznQhDsx7gDUMgjx5jNe3c4ZRXEUhhaGxod2xdAT2XPf",
  "key2": "34NE76AjkHHr4ZbgR42cWf3Pfd2GuUvor9AfTh3L5AQVxfzmg54wNaTu6fN6fJhwEzm1eiPwwo8xyE6TiAGuFHj3",
  "key3": "47EAh4uQZFQnW8C1A81ngf4nBC7tmH9V6GoauBz8druB69xVaSRvMdrEy4CTRgPZMnsrXyAcJPD3rNi1etedexoi",
  "key4": "2QSqViJiU2ci5H43ho8fUXuEMv7rkQVtg3ovWjKCMCuxmx71BT9rPxU79CRdsWyYsGchatF1PXKrMKk34AKkaPHi",
  "key5": "3TzNZodmH3VKG8QMYiYfhPVwUn14NYFXAzL5tNTwHBCss3odpKePv1AZxuAboWBArFmB2J6SkZUZ8rNbe52Gy8qB",
  "key6": "2czgajP2nNfdt27odPxkR5HDfmpvS23fX1KTfvQFpKKRo4qENRR252dp6ENV4cN966nVhtEyQPFEWnMdmE3mf6wW",
  "key7": "2q3dtfAzJaGtUx4Y3jCr711Yd3S4Rm5zYSZ3YcJBy3pqHcAvaC12kXjRhYRTxW5SR13P5rXdsTfPnvsy2wPdED2S",
  "key8": "4TqKroHcjdpFPfbe1ALekQPeMvyLqU3JJQMTcFbQG25gvEaMVKUEs67os15nKK8a1DwkeChFH2xjyUTs9a1QETV7",
  "key9": "V2nYoyAhoL3XYfVgSqBZekbWhci815Bm12dCKZuCsM7gQPQGeEMNqchSYmubjPNSTfkFkQXdm6rsFSwhXgwXcKE",
  "key10": "53VbS33Qj48yaGVSu28STfmuSBXJDe7WPejvQLgUbs1ueZ1Ne9dyD1xLZXURNDw4cZAwygJjQWC1bwkZWrG6ikZ2",
  "key11": "2NtfwyAZrmdm9BPbVMztnAo55NiWBHqg24Essxp9LUgYi6VG77xYaDwKmspDQgDUyyz2ZL1rZiHizKbtn1BYJv3s",
  "key12": "4fByE7698dSkBaLevnMFxAeAC2yrrH24JryyJJfHaBEYN2NZZpp9u5quLqgY6MiRJpcKMfzTtNeHVxRt3onfqBme",
  "key13": "3BvrEQBpxYjZ4z5pHNDCdp3ZZntvDMsptpPj7BYHZvJK12WM2MNZkt3iT3oSYZZLhDiC5WJjycDmCyK97W1kvZ5h",
  "key14": "2q3B7oPhgKY8SUcrTz9rF769X3pNGfqyLzewWg4BqdzY8BMnmpraTWakxB1uEmfPDBmVtwDo3o3unN1qTmQPAAgY",
  "key15": "UnzyGGQeEF4hjsbFEBXPt7WCKozSgsXrSdA2qAhrFKQynpjzfVtLw68joCZ7kEWAMK9LxUM2cYX5FgyGBQ5ecdv",
  "key16": "2HzSH2grahYh4Y5hgdoYBpzPtv9KMynwjyDwJcNbCLLBWKTZCUSARSjZvRoviyhsMUPuSWmgoSdJ1NQxD3BQedTr",
  "key17": "3cJMx487XrQQuHKW22T2Z7WAtTEqHNXkPUPTc1hdVTwJ5usm7htZHNDP6kpHNnJAxoDtBWcvrYkjMT5hqLxemNij",
  "key18": "245oVDAr153KoqeLbxvZyGQ2JPXyjuJjc2bmECE81b3V7dTEjhCd3HXcDhpot3cbD1JmJj2UrMxi7dbx2omU3nDA",
  "key19": "Xg4y4WTXzvUm6JvSUpzEDA894ykXwWS9KbaQ4gr6qGS9bMZDgS8aKQ6wjiSTc1XjRurFNPZ6x4vc7dyUptQMmF8",
  "key20": "2fA1vQU3fa25Z8DroynbxZDQE2TP8N6p4z7qoX6B1GKjhYd8ai9vKXAQUdgRGQEHm5Jrabm7Wtzf1y5st8bNDNX",
  "key21": "2bTJwEN4aZ13wj359DUrow6tEpGDxDL28LGxNC5FafP5cqyYmgMsS8cPnh34kgaPvfVsFcrvPDqCEvKvNnmsrYRU",
  "key22": "2UveHLjryFLk2QtArawVkXdpCWGbR7sq2edspiFHcFyL4tTskQMrE3GTeivb3kEo6KckpjwcCiv826yFzwQeUDLV",
  "key23": "4916N1uVyMbMc75dCr1qjkqSrVVv4LbbCS3KcRaXk7k4768fPzt1agn58BdaHz5gcpyBVBsp4ocWZTBvnWatX8G4",
  "key24": "y5oqP7qpojgVnc7kBrDKnzb3Kt5vi7D5KLRu43F9ZQ2TD77jNaJ8Cf1nC9y1WqJxKNiNhQhAq61ujszb7yWVLXx",
  "key25": "4TKeGQYBmQUahe3Mhn5pciXdzGtKFBFq1xSw9HPc34MfBZwbpUeHdGR34hwAhpumR869ZBPujkkBt83oQHihiYNa",
  "key26": "ZW37QMp6aj9J5cSR4VdLKKuGnwQZm3rwGzvmmgFNWGPtDWQQJaWZrEHk5LP9KbmrHg7tJqhkrpCKnVi77tvxzUo",
  "key27": "3Mb1em9dgtQALAX62kBs5bZmtt6UvAWTbwRNUMKMD5AJygZPEkrmowFX4WWt6ES6oSn35yo6TWj58QzCrgFYhmVK",
  "key28": "5Js5BHtz6B2W5aEqTJfTXx659Fmq38v3zU5om1RZ7oVSwY6dNMEM7v3LXQQXNfuQ2ozvaeqSopkKFkr6KpUZB9NV",
  "key29": "2fPNM5fXfP1XTGr83ezmRSVgvSRtiQbjgaEpdVYPMFWR5sJEyR4ELAKCTnzhTfEcskLGzYUxkPqQERbZGxX7tJoN",
  "key30": "5BRjNyNmjxmL2AiYZMmMMvc3HVfao4o5MYaRKVtTRStd6Zc94tZcS6q49wCWzsoLGf3QczGYRjAxCMUJB2sRHMf3",
  "key31": "N7Nn9LHKvs5trTDCELZPNBfTocZj42H8JkRvJ3kiyBgdkT5kN29sSxorzG4wNUnWJZWhMPKQiEnk6XYGqXF6SJS",
  "key32": "TKrHFot9ic6pU59sVL7kgTQuKzaLaZXmQj42tu1dfgNE3zsAA4632xRumXpaQDQmHFdwkLwqZYydt1QnF7suQBK",
  "key33": "2z3VxmE191BBSTn9ehxuHtZbzedjPeF3m7MBDey3jdjBBuZN3oFzihCg7mdsbH7dZKdCH6ngBitCmrGv7BdLWmSR",
  "key34": "4MNKxVEuHDFxEpyDHdSqjCSZwkRSvHGRShgQ84SGZHhfiS69eiCpn5cfoHJV6w9BATj68oodgcbcHGDTWGbJXHn7",
  "key35": "2XfWXLvagZ7CRnyFx7RFyLKMB617xEvsHnj9fETj9DiSUwq7vpFt9jmNJAMhzjCpuYqhZ1zsAoYeCmoFgCQD8YTy",
  "key36": "46BY9v74XQ6Tkq5NrChYX6XuWXsFm1BvfSX8opz4nMixUSAGo2d2MSy1MwE8ZWr1sJ3vJErK3u8TBLqdu8pDrZac",
  "key37": "5MEunQ3NjAbJLMwBTAZya7PudaGUZpBMHc8incqJ7ssgYzQUSYuM36fMYYRbLLXVmXDjpGbTtkJ6kc5QNi8qeatT"
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
