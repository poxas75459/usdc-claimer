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
    "UQT9v5QEQ77ZPa6TjHFZFbTiCxSFzA9iq9rr8JiVMCPGEeTpkUAC5R2RHa5xpyCc4v1yoJXLRU1vHQhwE6jnMPx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F9CNUPVYvQPbPFjiJAbBJcynaNKZQdAjq9fv4EF95RSYan4QoAcWMTgFu8BnBvmWiVakMmta3xpKM7L8sSUUuDj",
  "key1": "2gVWCtUmfp6gihzw8Cg7gLKmBhq8VUU8fcfaK3ai6kr1rMsTUNGW83oYDewp1uh31pJMPmhVP4FLVJ2rH9UYAPb4",
  "key2": "3vDK7FfCebapyu4R9HRKWfAB3bkgZW5J4g4RBvAdHNAQ4qdwagM8aEpZoJM6rpurEYc7D1ja4wadt8gn2dYi84eS",
  "key3": "26A5EdL7NcvuRGs8RirAtPSdEWoPdeF2dKYVKDuZHGhuMqanqVBcBsrhuV798FAX3M1UKyU4QAtLHc9U3rK41Xei",
  "key4": "DYHm3A4ENwMdKoiViCR1MEgmpCPqKQKmWv5QTeLBk6jNQQhy4uVdqAoGW3FFSQFr87GuLuNJL1NRayE9fv3E7sr",
  "key5": "5akWvtgPdk7pgJiL3PAKweSXKDH9tqDwiGhz4GC1vdciGc8h7G72XL7C4mAH3RTtceiNMrDUcpA3NqfJx9cUuAUR",
  "key6": "29Y79WzgCxfN2SNSTShWrgCq8FsLQKkhCXXNi7yGBJUrh79R2N2X3CTptaYQfijZZ3aNH84ZZN5fZ3nSSFKd25gd",
  "key7": "crkNG5sU6GC6GB2znMjsGM8yNuUzWubF6DUyeonRKKYwfqYm9Ttpm76eB9D7aH7vUZfr68PPrgGCYMa2TXsvkGe",
  "key8": "5szmrRHanHk5mvdf2bh4bJqmZGoci6nFe5LsRLm5Zg2ys8zE4xjuDrigGcE9JypjxDjh2EUYUjastzVsnsu5dHXr",
  "key9": "5cxCoGgc4RieejcuV1HneHu3eyYTjsAcystnETzm5Mnj2A1KM4X67SqQnirG1gYvyyHp5BM1qooJU4D19otfjvxB",
  "key10": "xpy1MToZnAKDu9PYm5d1mBgBigq43yjdyNbKAsht1MFnxtZpWDHKEBcRa9N1DJ7r41kPL6bqEee4QYgisRKq3V3",
  "key11": "2UB6Nf79hnHeQ68FTYuLF3cfU4TF7HYNjatQn3zFrCD89BzZABVWUPULE6tghcZ8oCsAgCiCeteCu5V6E4Ss6wTh",
  "key12": "4pxKLoz1GtevyE8wDfGC5xtoEdeLw7XnitKaZu3DkEBhfwSpjYAPJyvGMrs4LJRchWfxN8kS59hLwpszppUdb366",
  "key13": "UeHnxtZJbgXAFKEPWMobzagM4GQ1Q8HbaiyVWCGpZc3Ez7kEgUsMZztfKXSDi8WeH72SWDJ6ZW1QN3uvTjcN9H4",
  "key14": "3Co1WPReqbbkFauFzfLjw2btMrTY6vAqXiteSeagjeJnYuUTav7KM52tL1PjdzgqxZ4FB7p75dc9LjMb8Cw8JWtz",
  "key15": "5gvnGnLqv9bHPfhsqcaJihw3XwH5wmi2QD9JeEQr5TDze7P7fH8RoWZN9eV8mKxU84hPGEoojdvXzZG8AbZUQtB6",
  "key16": "4Q2biHa6GiLG32bDqMBCXDo1xDcshD8TLV6ShAzKtnkaxztpU2aGaFDmufRqbgoY3HyhPqPrWu62ZMrdH4SxpXXb",
  "key17": "4mitBCjxpxL6jdhdmCJZtKT2NYwgvEbS89udAfYsNTXfbp12ybhd7NAryxzp3tHvcFT8kox22uZPzy5sUyRfxiR4",
  "key18": "3US9rLptMcQTjVNAWAJevNyNQpE4bzczRvqSy5dCFPWKTtciCvAvkyDxo1VPqNmNAjWMKm3adEF2tL95eDTjqZng",
  "key19": "3pVX411enQbmpQXzLR8aTfTpiv2f3eCZnWh4H9yCvjSBa84MgyuWk4bjPcWLZwyP2sroPnf9YqzzzRAswF6zXXXV",
  "key20": "5dkMhXWR9EarH6hjE4XWPALjVBP3K2sxMi2DU9UoV8Fbp2GqH9k4s6ZdDzh9G8hhvy3VkM9ggax3mYTyGbviijxH",
  "key21": "3FDpAkGA536TT6ANqvNTTzzacb5qx63qrHqMqmVUhhhvwVy832LYUtmb8T1uMPW4nN7Lsf7MyESisjxcSWRnRhHq",
  "key22": "3cFpDoMG1WYMPRDGAzAcmE4XP7DUm5W9bwYNHCFB3zyDgfMzfmM2W99YQwWV7k61zzAhuNkooFHWfBSgzNkD9mCC",
  "key23": "2XkookZgoAXKKfjoJ7MMufVKmqBgnjTqiK4LhLSKS6LUMCUWM9h2rJgDwKfQvW3PZdCwMWQhnMHdVYrUcpB3mw56",
  "key24": "53LLBLi7v2S6PyBZ2Ng9EfDHMPvkBGu3eAkijvcFcr2K9C84JEHLZmbe9LpUeW7x2a8E7C1UaVeuPF6sxGNGy3MF",
  "key25": "2nEMBPUdTubmf2PKipZS4pQf6aPCxJVHFkhByacMqMh5QfyMvAX8zsKaoeYba2BWe5f5nN16GVmcgQRP5H3kGoeu",
  "key26": "4ESzz3N5ToJrMXsh5wLeuNkLbz3o7rhNhbioaCNevhjExve7h4YdU8nirtqHztn42mJH4DvASSN8jn9sidi5N7Un",
  "key27": "5HYFbJ6Y5rTWJPZAxaegBfP7Q7rXvz1PZYVNiu93bme79VMnnSJavaQiPAfthW2euBas6DiUKuwvdvH9b26PBTSa",
  "key28": "3hT1cmLCoK4HHAV4TGjfaPLofhyrYTu3Av8zbx1SZJHPHwkExKsf6Hh2iHtXN8DPMByR62JjPWtK2qNBAqogYMFh",
  "key29": "2j88swWze3buyvTgErgvRVDM4oV5R1dYRXQ6ghzv9Go61PbqsZkoiGnRbhRWJ4TLQt5PjUwYxMjM2BmqLuoQxtTi",
  "key30": "4yxSWeCv9fo5WKkV5p7AcUcQEug7gUwmYyT7xL6wsBSQFhkJcHXjMLyqtyLyZpXrHALCk7nrgdpVuu7DT7PxtHir",
  "key31": "356Dk9vKxidcDbNuFvY3vxhPhnHLjq9dr6Ct6j28AGGEgythF38XD32nwRAmTWNSDdSbLZw4PqdHH6Sd96j9UnTp",
  "key32": "3o6h2JuqrDXAxRM52WcgufTnXJA5F9HADLWqZzziKJRbE3LjCT94JQbLMfizFDKQAdPYBQdCgqRJxXt8nBbZyGra",
  "key33": "J7TLRZ8LFojsBgrwmRs7BBwLQZNxAnVz71W1RcxRNFtvpN8mTgsanwwCZAahkJWJB5UwDXwiN7kzHkEpABaPB1U",
  "key34": "4CyssdKKnwJjt5mjConmzQBvhWjRmoDYEWwukojhRARkdBrs789tFnwzmHf9Q9UrV9G3TmLwQcx7ZtagiospNjPM",
  "key35": "5VhRxZ4m74qMpb5K7LwkJUi4qt5epkcxoMV8FbcijdveXHjwaNp7C2ihEYvHS2AwccNJ6tGHJAtnBJz3jB2AQfJV",
  "key36": "3myuEdBdBuHRCndghYXVqsNet3oUmDfUAvBZa3KYaDt76MptpasA1xhxEi6Zrh5BWrViDjXKTrspfpe8PUpGwggg",
  "key37": "qC7KNJSWMf9GqLQvK93TLm9uFexQJh5RvYZiJ6xtee6Zhaf66ZSexaKjSig8zuTfPAWNWxLBp9haymm7jDXRmSH",
  "key38": "3rwJGGqvMCfZ3znvGaCidUeJA6bTt16j9LoqDD21jrUgq9dgXtJu3HgvJbQMTawnq2oJvhRWjk2rTf4Vx7nTgito",
  "key39": "2B6vQsgzFSU5uqJiWtp4ijyAAveCjcHGUBX6Z7EJ9C9nYv9haWUcRhtSya8jFXafhrsSY7yzb5wHzsJoAVwoN4ox",
  "key40": "5fxeq5SxcNxtR6X6Do5rZKXFjR9xmGiNPXzzgt1aShpYhnrJhqJ83ej9WAezg8E8UnFkZDZuZaD1PPXLRPmgkD4e",
  "key41": "64Euej6vqtTWW8bEMwRFPmGW6aVRLk47TRHx1uCaBAE1v6dKs983AQ6mRQHvEoZGYHFJ1My9rHwJfFzfMdEoT9Jb",
  "key42": "2zekmy5Dk58vB63zQqcf2uAPeJfzqaCTMYjER2VYLkmM2FUavPHFY1yPPuUDg7E3pqPLJKGW447zdx2sKHrVRzhZ",
  "key43": "2hBQNynoaZZmNSqUxW43PDzeKVBFuMmegb7cpVAZ2az9KkUgVDWtfsuSty8FCGsWW6FNkpyVGkfapYwzjcpcz7MM",
  "key44": "5fWQTt3T8PYsyGRLUDY9HWd9ybD2MiSWMXoyHDNBeZUAz67gCTWgD7BtVZmvfnf1cpKXGAGkRVKTbV1xppZ9VwMR",
  "key45": "28pFkyxiG1xaqfgktzhG7m3tTr26yCfXw6JbNzXkhmBcdbhutjGBnujwqunXQPEm2EeWUYUUSiWCvNkBZptRPo3a"
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
