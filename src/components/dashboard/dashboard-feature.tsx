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
    "29aX37BY9j1gcien6CYEop5zzjCUHjPc1meWVeJ9DhWPs23qU9r72mwKgXcE5cv1nAq6MRPPRHkrSxTBETK2hqgi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W1orhaGyzDHePg8KhutXGho3isVGW6SZfny3WMSLFgAKi8SvYzmN92X5vxRZNQLU2jvLRGteEC6GpS8PPZo3jyb",
  "key1": "4W71ug5sVidPh8B9Ce2cJrUJvys3YBk6vY3p84c9JcjsfBcReKFhXziYst1GThNsMffYV9gjMGanZ77mPSkcRYMv",
  "key2": "4XRu2XvA9JEeYqesFNjHwT5hgKHYqHbFLxe7BVjiRBFkHQHtUtSf9rY36FDYW6ExfvxmMmCM2o5uBVxMXsfi2iy8",
  "key3": "3nscSvQfQzKBLMzNQHbz268mausQKLgM8dqfKUfjJkk7GePvVzELFgALS6VSxP3kTteRXYSAHvXhAWGrXoNAfzJB",
  "key4": "2coFFmsadkpGQoBpejMnw7u5wZEfFHUuPQK13UpofKpX9kXkPLS76YcEUi8UFwyoqYvKgEymrGyGrRhYftBFLetY",
  "key5": "XRxMTDCiMRFAbw1uKrcsJUSZFdLNF4XycHF7ar9W5b3gpvc3C6kwEC98GEKPxFHD9k2fSbR1evqkS525jvCeyWg",
  "key6": "5QX5WdfTjkvVpSJPfjfPj1BGUuCRXfL8ezAK5X3oXnzcen6yUb13BQLEW7yPFxsfkEfiqXkdoc6N1mmm4TRec4UF",
  "key7": "CKi8qwzFfSJ8Byn6WJneddA7CWLnmrANamSU7nBHTpoSyVjjCnKKvXfm8vXmM4M9A2JBZJQT8pnf5zma4GatjWy",
  "key8": "61SxvCycniHNDcrz3BwUrWAQxcdbDnB34cKcSUv3fzcFmwemfa9rms8BDaThtgsB8CsegAV8xRkMKTvxGpiwdnQv",
  "key9": "WSPZbCNQD1o163euecEinB83k8Jp5vnnWP6WbZW2L8gm1Nfj5rVrsY2Bz8im1FcZU9UsQswQLvhQhvYLuiNjUNw",
  "key10": "5YV2hySQhZNHUmVhyJvEcChMuBHKGCTJMeRgGHRT5YWo2wcwLB3rn7MQpkr4VzEVwbHTPv9X5CTBjvCu8pXJmv8F",
  "key11": "2dNcc4V775zGQSKpu1WDUdPkU4koQLjrTzQfe6j1CKHBwAHjG2EMmdBMkSEz6nUjHUZ4WXrKvdvpehePGswivu1c",
  "key12": "4idVgm1LAMCDxQ9f9tFZYGdQDM2MveGeYRh3FsGjY4N7hhVCqhuBqUwCjw7cVbV33ax4cR7NBMcyxgB9xn6ysUKc",
  "key13": "5kEEBk7yT3qkMNbp7DUAG3wFJ7JNnUMmQwwRsfiX5G1oaEatdWzT3Cthdx4czPK4NZQdhwX5LNkDZyNRzgcwSTGE",
  "key14": "3VrwANqLfxbarnNBLBbUNWcnjzafzexaSteBsnq1KTK3y9Vn3FK2BJzmFN3iWMvbFAdgu1RSHWzEfGK1FeWfqZQX",
  "key15": "5z1KWhsHe5SaDhzdY1DYf5B4TQpvsEzcNsSP5pm7dALVvcyXH8PoZRf3xTimfNAfK4Aqc2WKiTLZSTimYz27gEWQ",
  "key16": "3yps7bgDcn24HP9Ld9T63mAkhueUrpFwKFBJfBQcaUkFxRnF7oRfoxrkmbQRi3xTiyY67VjcawqgEsXvJed9Szdo",
  "key17": "2KkWG655zWok3DK4JnkxJYPCC8BEDH1uhRShCtoFQjbkY37RBjT2x7bCssPL8CssXh8DTPonuJP9Zhp42az6uag8",
  "key18": "2Gfi7uA4XUnVCm9KjdHHZ7KsBhL1NSx5dc9w5hUonDqSu5MsYBfRd1MeHFHxQCmYR5SQcQ1XQ4KsepSRipewXG4j",
  "key19": "2tMNzZ9RY33rbsah7T2mHeT95PADc2FWz6yifZc17pCaMdVDtMdYBoPQ7mjJiqmZd9RtaZv3w17xjUPn8jFi93cn",
  "key20": "2Mrfaz2Q8XC3S2VgNpNoBUvGfvig3r9X31iTY1DQcwff6afmz3YgvsjasxhTdV1dhxSZxssX4gqtgjrp6HVjLhAx",
  "key21": "4b6psXjMnzJvTLmZbkNdqPfBBeL4JLR4mfw1wJWJ6fGno8UDmdMMbRc7Ew1A7wn7vnWCmad8VV9WoGEf9UqWy6KM",
  "key22": "2P7oBiRBm8oNfpFprJKxpTSArgboSwrdWrYHCqDD5oxtUTRcfERzDfFqeSDMQBWX52qN5XggGdVxopFKndcsS5yW",
  "key23": "2Fcx3oKuPfT5irPuffYpxpfZLTMZnQ8vuZowDeA6HEg9xuF26BSjd2UgAuwF9EAufAHk1wjEr4vAyfjoCZKhCLGs",
  "key24": "5au76YVAB9ygYJs2yXj3794jzsENe81gFijFahkYvAgKeT2EY7SUXk6iXpgbSBrnKtyXgS5RmvmdBB5a7768baBU",
  "key25": "5QwMd4RwvBdrLgCMzXpXgu5g6kDy14E9xQekTCHahLKW9kMBKA7apx78aZgbMm5uoHg1n9zAArrUXvjzSzFEGsV7",
  "key26": "5G1UrgiLfSdekjP5gXdstzYEAeJQeBZuX6AYqET8aT4NNZ435jnHyVu1snfGhr7rxZTLovjbGXngq5oSVhGQpKh5",
  "key27": "3T2rRMfFghJtmSeqH2qhG1sYFj7WjU2vHK298BDtSiFUcZFhRPGSaGy6mgAByw5NAgKt6sB4asgizVzEhYYHu6vo",
  "key28": "4TSyExnQwf4Crp9Eq7tDUnVip1826aohixYb8hXeZ9p5uvrDAvo1yPbRbg7ohPJdoMpbzE1wv2cD1XKcrtsVB5AJ",
  "key29": "wSsMYqvFvwz9aQxo47qUC8MJ1cvAvms6Vm5G636AYwfKNzRqN3ynfznTPtX9h2KSb53G2NZrPoTYCytMTZJABZW",
  "key30": "3px1tkDtPd3RdHjDVABzJZdwD31N84uPNKh3bhwpJGVt4AnH2aBCGiYbYMcm3uXhyxyinmS69sZmN8US5kGmEFak",
  "key31": "2wB8h256Z9uZHwZLvJQSxJRSDmyCDFAUvXXFhooXG4qADqQ34KcE5dCUZwbFUpUzvzQGaJEYFgAS5EEo3gcJzkbm",
  "key32": "226y1C4Kn6oC4PxEGwfsyrJwhegJGhiLH1pf2guEG8FUe9zyiDAEWv49Hk3FkhQN9vZ28pUxj2J9VvpsbLBcQMeK",
  "key33": "2HRFt1aQsb7BnfudV5GPtQuc6bRaLHLBDSVyhPe3E87zeSBPj6pruTYPxEaKH3oLSUTTrexqQoG32vm4tGr86BL6",
  "key34": "2zAdXXrcmJaWv3CxrQcfpjAU7xgbUWtp8RDShRkQmi5VtoAAoHrgdKCs4HysxDsrqJM1kKymA5fMzenX3LAGcUG1",
  "key35": "5nT4Wiw9LFZhanjWNT9Uox2uphaeRfgi3fU2gVrB7Z6yk3KEaosEnqksh7kUMXPJ6CBWWHRwkJWX9fRP1DqaXQCT",
  "key36": "3KsvdtPS1GJcRQstd7CQQn5vkL2Hc7vWSV28PDCoxfv9WPbr1b5CKrGfrdQ3my9n3Sm1N1FRXeKifTiT5mtNzpfT",
  "key37": "2HPdjDnDnNjSCXN1SdUuJ3sHXf9t1eWCEAmi6i13fkz4JsqJTjfw1jMwzPEvKAzkGmGGLwdgmaQqxSxJs6y1qzhu",
  "key38": "36bSkzXUMgi8o2cnbZxKQVtB5oDMey69ZDDDhBCwS4Z7JxR6eBvhSjLmTqdLrXYRgZX3uKaMRDBs1Vt46PCvfnHX",
  "key39": "ySw8G1fyAxoBaYCBCtDMkAk4y3gtn9cXmgYDDdmhAjG2LNv4L5U6JQ94G7h3HkksvH1zAfA5aERVA9K3F9pJ22L",
  "key40": "67jYFdJM4Ztkj4bUN1ixr99GsnRR9WFDtDWqiVcWLhiVri9A4D8feNBcxKhUscZWpmGxZR764xwKszxTvfCF6hUj",
  "key41": "2RaaczKtRtbTgqNUZK4KTFYWvvMSByKgnGQEvrCrTbMbQpRuf3Ai5PxdCKeG4VyYf9TihbRjkABjn5Dc4GSBiJVi",
  "key42": "5u5grULRyaqiHthwY1Fd8C1fkER1At8vMaTf4cjaJmaVpi9SSSxKZUQwL3xsNUgo9advLwgeXZishEx8Z9NS2iCY",
  "key43": "7cBgvzkQtLNHmmVU2fjjxSqzuEbv89Jdb4f4KtMBmKZ9vvMgwawi7LXAWQio6yt4fLJCrgq6sap24FJ8ni5PoVb",
  "key44": "4cLNNkocUrNHVzZjGbP3AuJbLr4dxDYPiazcjb7xxndLnuZQ9fUo5fA8697G2kCZJTECzmHN1yGKfxnhJrpT2QC8",
  "key45": "YjusVv5NhX25gWgAdRrCeFCwd4bmbCzqgLYjSayra3CoqYZ2iPE1GHAyjfdGDaica5MCg1y8aWaV1bnVCvT3n8q",
  "key46": "2yfhupnCJkRArqHB39tHvLdbTdVZKqsNSEt63atsecWwS8pwGQMkfbNbScQAEppwLpm5GWffTkm1ysURMLHQux1p",
  "key47": "LP4zCCUKENoVYCFdVWvsyhFzec621btzndZCyc5VsxQ2v2jdGkfgpkYLZfBgLLPxrtV2s9eRqUdsNEcUfRT5TVs"
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
