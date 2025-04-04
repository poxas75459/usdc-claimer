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
    "iD7LHMVj2JQ7Zp6v93rQ1YZJ4XxbsWQj38k8dfgkwLk1rxedJVGqYFzrSafgUWtzcfn2aFtuVkraCuMnvu4ydhv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xkCiq6XVtkE6BqaEgzqdW62QLrw6JpVEmtjXusGHcc3N7TsSCPSXWdekxLwp8aRyHr22sXXvo5tWSrHxmXpQuqW",
  "key1": "xXTREg2zh5Gb25vF64ahGWYH3x2ZKyKpfL4CP55uSwtG9Lwzc3zn8P4nmoDX6aJRLyfDhYFMKs4yc9XBqvatdRP",
  "key2": "5knfWLH2RC7ArNajwbWcr5nYudmRdXjkrqhymWVmFbr7w496NmzbXiZengRyWNaHeMToCPyowdGqDkXpmr3iGHT9",
  "key3": "3mFHXk48QjTxnJRg2v5DT6zfVst22VMGeKws1msAET27VpRjKEzpRXXEV4WeJkTTZK6JPjga8tP5BuGoSFw7aM9Q",
  "key4": "4bFvKVYir6XiBQnpAbcbcDTbFG51e2wNevjPH2vpTqbymdw8MVfQ7KB3K94Tna5c7qS2Dnn6WmzcLVF7cFcr5GfV",
  "key5": "2UF4XtMTG6EqRQVnkUk7e2QKZ73HfMpXDoBfvdwcdfdd7XDLFJ8wL4KoVUidAUBghUDiESY7SMqx6avEiPpiNbLZ",
  "key6": "4yyVmpeHMC2UatQXHH62AnuC43VebtQEzeqsoJX3T2vVXN8EaKStPaVXcQsa9gipG9rYaetJcwVrT2tqVLKtLPB6",
  "key7": "2GHnH4mB9YM8Pim6ABihf1fr1j5KcY2K6MjH5mTQSvKQ2v2QXyirsK3SQupqGiyfeUneo7q8apZtYX3FG4LFfdBH",
  "key8": "4QZEUnxdmMmW8EqK1A2uNKFjYxu3gbzLBRRYke3gvBxgc5a4awrnLW6GUVhcYNiqr8gGecuRacvq9Mp4HegCPAsr",
  "key9": "627j3aSjMfcLHZsqKznqfo8uV6hmdpj3FuV37jFTMQCZARApEyHpTe7d7HWiFiBkQxTs5fBudKDZRYibrPCyMfJn",
  "key10": "46ZiDcd1XuoHVE9FBxrYG3SN2ujBfQQda5wyZ9wm7NVmp5KeJrqUkDq74FaHJth8S17MjhgiwKCiPA9wTF7iJraa",
  "key11": "2BAeML9BMW4iQFZSUqXEXpF3hkNJBiQjRwA6L4yX1AzWpzALu2feygeDdVxpBCNhwpSmo8xqDeGVxV2xevn4ycyg",
  "key12": "5sRgeDgVck4RZtYzCbT43QBPrQCk8tagLPg1PtT4HVdDGUugSQuP3yjDDKb2h1cCTnMhuw7QJeYaAbop7ZCZDE9F",
  "key13": "4FswqqZKznNB4zpLXpR2DQS6MCimPvueL8tm2nx9PhhsDMoCa27J45HwPTkUVoEsaHGv5axcqY9SF1erdGh2Kamh",
  "key14": "zuTy4jpZd4kyXVJ5XftLQfbF8wUvkjf3hJZ5X71R4UC6eZhc8uMU4ZUd1iqbUyHaKs85qpXyLPgEBmcixh8ou4z",
  "key15": "4Fg7gU4rMmdxDiHtEiEBikAxbkomuzGHLBZCjjBqpF8But5gUR5XxJfdJAGuj4Ci99y7dCbwYswhx8LxokGPEfy2",
  "key16": "31nfzvKrG85rPDq5EQrskfkLaUXcwcjM9tReFQJaWKn1rj3egQHMPW5TSVVGtS7umZw6sjCep4gE8PFC569eHzVw",
  "key17": "5irpHJG19FTUhkS6EWa1aqR7JHnuccPFi1emsz3PQDwR9YmM1Vu9BbuAzhYiHFu2tH2n8tJjVZBvJo6MgAuDXQ88",
  "key18": "4UG22MTdQ7P73fDFFRxVtZttiRwVL4TQw2jEiM6fmNpwdPwY1NvwCYDJ7d4n44q2GToKADk5MEv67LLNA63NPUN4",
  "key19": "4NbJ9dThGbvVXLVDGurAr9ntskMcpqo68ZcQUYRhzfvuMCNhY3rGVKFKaSbZmgdSRasNy3E5nU6iWaknBkX9tAjh",
  "key20": "3nGYUsfiPWK7JPBo1KseuU3nJzbwTbziWZPe44LTWLACPGtbLdGcW3DmrJsTSpBNHTrpofjSTq3V1UKF3VWwjiaj",
  "key21": "3XhHesRn3xwfFBjD6J6syxuUEFgCs7uusaU55bej3MGmvA7MC5omVWsSajFVHf2m6XAf3ReFcX6sRScVftNGvPp7",
  "key22": "3sDK2QAGJg7KPuyFkpxdtj2puTNKHtsdrNE5Nh45pYLx8E1EaoeZmdjwNLe8mpADxS2ofZiTXcpkYYGd1Xog3B65",
  "key23": "2GH7skdWLoTf9NAowfhYmw2qa91LWQWCR4QPvakNyQjgDfjuoM2jgSppxHdHvLJR1NTd2UhgNKvEv2HLENRHScdJ",
  "key24": "42LSUNVvHj5wSpSctLTJ32bz2jwz8rJEw9yAhPcBZMW2wLtNCPYMg3GXZK4gdzdoQqe1AXfNN2N2a89uUVzXKGV8",
  "key25": "4UXHBzBWfgnECc8jmxDdU86UeVNXHwTQeW6DKU8KF6uRYdiNrbW9hhCQRdRAP1gtfJTdqthiUSZCj6pweNj7ooux",
  "key26": "odnps5A12v2P149w1TM54XQXtnkNritrzVb1tdn2w4qEC4w9hPpytPXoZQyCpmoEmyrR6wFKciE1BTFb3XzXpfE",
  "key27": "3b787QSSCCnXbv8gB23sxsSpxtYekEn2tZLvRC46AmoXtZUydKXDD6MW7bQZvFhscmYMjW629pXUW9bRVk56yywd",
  "key28": "4Gdit8oFAy26PBxt6XM9seNdxM567feJax8vcKc5ueMKouUXxpnfWie4YFRK94r5SwPDBi5TAtbDvY92S8naMkB1"
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
