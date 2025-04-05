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
    "qY3e5WiDTwHQUvRqrVRkpcHjjGynQ4KqGVXW2ptvtLkwrqEGJZTCpBp7M3GVGsH662jCD8z5GqgcDr4avvrtiCj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32eG9CPyqzDo66dkM3VJpY4xxHroxrVbkzWBueWWRymafPdQVnpi4tSnJuvK1q44v6njfFHAt7sPYw4FmDpoLYMg",
  "key1": "mz5z5z1UGjq4ZCKMLg24j7WEf2ZyPsiQgspN5veJ6HHKidKxAmVookiFfuAQqNEzcvmSwzwo6emHsE5MwRGAhVf",
  "key2": "5KVRgAV75vESJNy9moxqjLKg4hoJ4hVpdwquhYZomTSBqctdVLQzMPy3eUN9D33ogJQBDVAmFV9ikqQV1ybvT32K",
  "key3": "2BpYMqsCyjgKr5t6sEtJnstAeswZNfmj9tCJ1n9hTCWWBFLVX9TynCRNUNBH49azC8C5vkYD3H9oX8oSgAhf3pn2",
  "key4": "5aPXXw7shuFtk6JdRzmNTTxSJZZjNJo5563Lnz2akgqEf4J4F3zXAqEZ19DU8CR7UqXkaDHGXizmyWTKvJCmqnuB",
  "key5": "49mmqqLMEBFPYvdEtYYiGbMvaXcKRbJJF4mjgwDtwExywsQfACYc2amf8ynTdpG1PZpF5v1k3a2dtzhbep5epfyF",
  "key6": "3KVamVwGbJLbem6D5jf6wgcnvRP2iVdPUERg35H7wuvtChjAsfQekeNmBvDKCedjDwWVX1egqRB5Mpe6hC9QHvqR",
  "key7": "mEAdqSAZsgQEDrMiFt7ozFHG8RSejNsDGijQfubPJVqb1Z1KvP53mZ3SKguigc1cr2euXzHMKrXBtqyY5bTYytc",
  "key8": "4CmJmXvXfhagDLoQnML9Ae9r8aitrCtHb2fSL9tiRzLR9oMf7Ag21gawgxQufpgfbfUquHxyHc8DqhF7CUxc3p18",
  "key9": "3rkaqLREHsNmRmeMbmZ9sVCLRBXSbMhU8r8AfU7TSX5QaMpptwpaYyf5qbmqc1zzTdHE2m61jQmgCJTyPpb5RR8S",
  "key10": "4kqNHYQSZWpzDDPY74zZKuGyrcuSAuNtsQqKTnz61f8VCeoXHDgCXb968PPhWy26irU6PjNHeqikEMm8HM1JqDnQ",
  "key11": "57Do4gb9pobq2oThvhAMLjShLayZ9iKY7DDotEV2LvqAY12UuAipFfePMihG8s4eXhMZfWoVcuCVaW2avxx5kKVP",
  "key12": "63cZ9mK4Jcj1TzvVJvmjg5HLSYU3C1nixTDbgarcpVH3qWvWESzR5oWVS3j7FZh6Z2eWmWzJzDf1Xo7WA6cgTuWt",
  "key13": "43VgkFoUx7BirvvQyT8ttwHmtiB85E9Kd64EQneFGTR1WzA5turDUQAHmDnaEB4hG9pnHak5tiAqKv1Q6ps9u53b",
  "key14": "Q3bDJW4pMSBzKC5NW7yfWouS6hqxHMQMhMqxnkvmhafoeWCycNPePoDMmjXyMzLHJV2jh4ABbpZqrVNE9hKMNUM",
  "key15": "d5EA7XyRMEzSekcoZPy4V4xSV4oMtxNd39La5HQXgvFaN14a9Abhy3DECwMxAhjvs84vnZXD3mEumbf1dhKq7S9",
  "key16": "5XjRRZZzhvffVpNWaADBvrpM5BRUMGnT9GeWfV49G1SZdVAaMirRur2DusgkWou2TPBKXHpQwy3EPt962nQZ9ste",
  "key17": "TyvbFTfdwYwTZa3UGLGSCrVMu4q3bxGUBiuxhXPkCE453v2WH5yM9KvttPugB5SAanMHH2oUbpNhkxfnxq3TxLo",
  "key18": "3jb2FY7j2QQZcQPdxEMXBUkyUyo7PMH9QPUTWSx8pDx9eziQeQCBY5XVmURSe5oqtBysXGR2j3dv4Z9TGWQndx3e",
  "key19": "4KfU3qbET3qC7sYAE8bvUL6Fx7ngQ9J5SAdbF3GqJdCVT29m5MQxkzTkJychkYiymHXzVZvqtWUXNTTwrX6YXne9",
  "key20": "4Z9qHurP6nLqoqXKNwhwU1ms4CbswmJ3W3A9sM3J3ESJbjuxEsjM13WL752uNLhKHLD5e2M85cznnjYDkJWjctWA",
  "key21": "2F3Yq2xQFF9oJsWUHEk6GpaJk3rdE6QDZdGxK8KAcgMNo16DxousLPBWM3C5wi2qDDsqrLtduqiW1Q8kUuuKYju5",
  "key22": "232GbbaNPpQDtm7VMZq9YbTeF6nRF11xATz3B7DiLYoZPgi2Jgun5JJM8LhLpCxK41UcN17M9QddYTUjxAsqpmPA",
  "key23": "xq63kE1CZCkUkZbr3kzb1ohp2EiJN9FCW8tzVs4C6Ug7QQfDwLDEuAdckp9CY6AseXY7qrUrqfpmSKcjfgntHtD",
  "key24": "2xEQBeGzNULgEJL3zzW3tD8vCMXXsC3oCTEHBrBj49AyZx9QRsQKqMyxY4PpmtGSL5RJPsvgkrtvQjwVyqJ7RZtA",
  "key25": "3DtdMckvv6qcP5HhRiPJsXBPvuQcoMH2udxhF7MwdnWp1nAXZZmRzZFP4vtc5uJj6FFWkVMDwJfm8Zdua5YqoXrd",
  "key26": "5bAheofGV59axDndASLznyf5XUBKzm81SwsnRL8vWxyG1qgKSJNT13WmfHW8u7GrfmSF5uKVa4xqQHgSKEDqnSLj",
  "key27": "5SaDsTWMyqnHWtkD2mVGFimekthfwSsr58G1AeWRfDZ7UzqG4frckzM67DTmf8wyMemAZJBv6zLJsECiqMvQVHhQ",
  "key28": "5FqeH3yxuMhSBHQnS9yXpecCenvexhcR9JMcJ6JiAyv73JsMg8McPDaDaywjSbUzywm7kuvYdNZ7bZgxWENXN3BT",
  "key29": "QBtE278YNmk4rr5apAn6Cw2KMzQQpYfVk7GiwoFXpcEeGUupqf3EUtZjmezCsnrBa9aXhaVzfFGw5U8GzgNeQci",
  "key30": "39oF2XotnVU4iKfYH8RzVYa1g55ExVBZuCzzzp3PKBfJHdnXjraRxmP9shyiyN3AcN8EaG1xAqkZy5FKB8hTXev8",
  "key31": "2P9dYbZT1pLF1ZbDZTTePuirj3ga1Xco7WkTyrBsXMZ4jyx3AyqGM9cgaTbJAudDYfvHf2PAM9cRUi9865XQedge",
  "key32": "4ZdbPHXbZp8eSwpQD62ysY8kapAjyDCMZH3cv1jscN9xGvA4D397MDytSbHt4sdLyiWhTdv7DjtWeTZt5Pv4YP3C",
  "key33": "3x5hCRXGSgCmEuGaZmW8164TB5v8aSXBTjH4mNpyMkHxbKv2Fq2zGHvdhPZajiTbPfotnJCTXfkmW88HJoG2E3FT"
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
