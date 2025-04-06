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
    "5ddzcwJ3cEJqDyZj3EEWdN7D9ceZjdWPbBLYXGW2uMp8R3xSaV13nVuSZfpWAUtQZbmWzcqufbD9m2yFKTkr92Xc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uKE5Q8AydbU3oPio15caEhQwrKTUmq4XyBD9V7AnzH33xKRvku9zDTn4scGdETLjhj7C13JsHS4jWuLgLLMF7Pf",
  "key1": "5n61Xpv9obVpEGqWSkTsJvopV1aKmx5PW2fyGQu4VmtdZvX4dpaDLQ3rbbimpAGQ4xWPVKmp7MjnrZLN4soyNasf",
  "key2": "5bCMmz2TsmN6hZNXbYuSaQ8HXH19W6CuwPV2rAGEVbMHDJW6xqqwg6keSXo5LpcpTdonVD2kPUQuVUAAHc8fWEV1",
  "key3": "3Eo1mkRq1xxQhmrMFTVnHvpwGW6PbZZ9MZfPQhdUM17LhEd7H6s5qHSyVb1kp3TCMxqJt4c4a8cKX4uZPJAFZf29",
  "key4": "3wfvnDsKu1gJnt7q1fDEARJGB7HnZJemQ3Nqp7WU65MGZLyCKeKNLnP3KNfb3S9xn3JqiqMMTiYed4K2XHe1gVWS",
  "key5": "5hF9FADgNNc8PLkiL9NJ2hoEJm6ToRnVDFYsvfZKMt5yprK1xoF8UH6ptY4YawbB4ZA8BU7HWFo5pyARDwAwaJ7X",
  "key6": "4ApEhjSs8La1wSfCE2LTXZ8RBGmrviHtQyyXG2jYAjbgKVM7qyBjb6kGZpXga1ksi5s4YnaemRknwinKBE1PTt7g",
  "key7": "5DK1wL2PXeh69nX45MMSEZkSKeSgc8m1hquMTsFSoVtRvGGJsN5cGAzYz5ANBmwBC9vCM8Jn56sfnpDNmKaQRiXV",
  "key8": "3MQ8TeNbEic8gGM7YJEaFXNXnVZxF7374gEKjmEi9vELaMRGgTa4L4qtfXtB7oRZKNqvhGazXXF6ikuZjwHQsbK7",
  "key9": "gc8CHt6MySosu1ck1ccRuXyTAvhHwUr7c32knJngwf4gifnVQzDLebdMdhsxhmsyrsKUkMqwxGSZrLL7XFMoARR",
  "key10": "3QArFvaBoKhtFXZVqW3qm3B4FggkZ6Pnv1K4oqvnHYToSm2BsatN7czxRe2oz7CazX7zQMPyTZ4q5hkApwxZqU4J",
  "key11": "5hM46q7TAZHpMkPoVXJcheQpZxPxgTZtrheoSS528qX3ZwaAThbeycMTb4QUzcBTPyzYZaY6EAkzCaJ47oWQW6rU",
  "key12": "4hGzWRVfbdHmX5rGuV4U8XSMhtQsK84jwfF8pzWf8cu9odmBkSwXUkpq4ziyPMDfEHhM6esvMXU9tFUKy53p2Z35",
  "key13": "5zfYHYxV5uxzTYsxxFEmpXf7752VGkUuRdhMLNg1zT19AMNBA93CBtFduk4MXKVfuK2M2UqrGzHQTgqjGqEBwbrB",
  "key14": "33ad6fKwGaKXLv18568U29AdvxmftzMBht1UqbHPPcWVwHuqzk4JfGqdjiYMb3oBDhQ4rNi7EHwCwRGfq7bFM7CB",
  "key15": "bTJ7eYgp9NcnVJRsdvWGhmLngEzPy1GDFakCrjVGWjeumcASc23VG3Hf9NamxbdGXjkpBTfMpn9zxF11q4kmC4B",
  "key16": "2i3CAccMsn3XXxLWtzvd61PFMSMvWMKjSQV152AuvTdLh7VxpY4CCMRUiDQ9nAV3AfyTuZ2Aek2RPMdTDfE35LZL",
  "key17": "4tYBc3TxSMLL7qg5TEnWVzyfgGQJ9iiAhgEtVTcusMJwAKk2wgQisDkpQVfsxjUjWSDdnt5Jckjmo51y4Zc3ggj",
  "key18": "3tg9oKtkfPPMWsMYQ95jwRPhYyn9HnSvPjcMmugtsmY6A8REzYbmDvSiMCXPPK3NAnerkYRMmV11AeitFvy6V9G6",
  "key19": "3dQZGeSJkkwTkxhmiJHUF86Sp8NG3Zszt8sd5DU59YKP4m59exgv1Xv8xWKub1XZmP2YD7z9b61AveJqhH6Rckhr",
  "key20": "3vBNFeuwBqFJZYehXT7PE4P8LeLpgsT8dfcKggo2K9asMeagffwyM7oPibvBbsydkjLm73jkLwmTxf6jM6geNB4W",
  "key21": "yD1uZXgURjtTbghHbWKEWp6U8HtaarPxjURmu6LBQogjQ871Cq22WkEeCsrGwftGoH5AgreaXQJYATYHZfQFdAF",
  "key22": "2WRQs1otekPx4z2CinhJBqGTPusgLDdAffAs5BoUp2gzpthncnpkm4sW3JtagG7DfqPnKT5RnGCA55QuuFbKE4QB",
  "key23": "5rHgoz6oAkQgu7KdhqWyLcdqhhVFVxZXaJLyb8M3e7mGixk5W9inEm4jDeGdPUsDLxugQq5osi8W31XhwoLFkPQs",
  "key24": "5hH18qJRRtZf62UvYYAvLC4yXu2VCQaCMZC6QRm672Uq4XJwE5juvmvg2JoJxeeBjZQnse4BXK9RNkX6G8zHCpFM",
  "key25": "4XsUzF51eXTTLQsivaa2VRu1xvoesRYqA4kP8exyBL2XGumrGQKLbH2VeK6qDkyStcVTnnVHH3q4xS4FP5csBfEr",
  "key26": "5dw5R3n8dJch2hRfZ5ow6TzCPdWRmRf62dWiFU63MYbvXmBLffKATQ13bSXKx56o8DAVduWgYrZt3aJ5Bui7JUa6",
  "key27": "66SSHe61LzVPTPMfY7DjF4waYVvMvhKYkS1prUciDoK8Fnzrs9xhnpX4mziknwMccGBq31MPJc2rLA26fFKXH6k2",
  "key28": "yRXvJCMHPAvgk1Cy6aZp3PJgdhLXLA15dLVazAA1QJcbv34mSSTdqLNsSZfWd5UUWBTJJdcfv6busvL82LSvRnu",
  "key29": "4RtNpwNit7EAdtKv8va2Uj7bSdFVs8AaPyLC86ms1a3uXNPaH3HoFVzAkJUNA4ePYsY1kv19onoa9HDUaegJDrcu",
  "key30": "5DHLfX3sn5imjfRdZ8iJPwKkFEKQVExiEh9ehXuwvaFwGurLg7iJ7RcXAf2FUmudS7nNESfwC6zApd7PHsnZ1Gqt",
  "key31": "38f5PU3GerZ3Tp39DBv3LX3y7a9pZTbwGmAckcod2qWPUoPhKwG11k2quHBXBKxe8qXJaFBnB5UwABMLWVrgqb54"
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
