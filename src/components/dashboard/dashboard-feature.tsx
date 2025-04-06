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
    "4Y8JxBFvZroUMqPeDTLUCMyg7c2pYwkXuU89fosE3TxfwU2gqczp7ctVoKXPEdPMjtVnPNYG372CooD12xdzZSzY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xW2piAN92oEKtdENmtZW5DVm8DjJQhBZNnvRbJGVwvPHKvKyk2nakkBZk13y2M8Abz2FasuJgoULqDQP67at7mR",
  "key1": "4q9W2uYAuXoPuxrgf8qQtjaMrDXUQD6F2VVrFuZvkHtkpAxtAzPoevdV8gVNgrESs9acLJv44xqXZTS1BMjt18KW",
  "key2": "2YyTuFVSyGaMUqAPzHFMuCkLjs9w9wozW7CZajW1iYj12Qw3YeNJiX55ZVfEfn6nPK5KLSPcCsk9aYa5tXprzppd",
  "key3": "4ajkbeaTiaWJia2MJcED7eivEziySbpzELHribWfa77t5TJpW5MAGtZWoJgsgUN7nwqHQwZbGWjnP2Q6YyazJW8",
  "key4": "3dnZrpVX4svHiCJsp6T6U23ZHo3AQaB48C6ptMRpNPUAkMVXJ24rmGRiAZq9YpEyboTeDExtFxtA3kgtAC6EcEP2",
  "key5": "4VFYqyaRzzCkWw5vX7b81GKFCGy9qaH1idkAWZqebeh41vVzzpXgTNBWgYnRS9zJqmPDcmfs1xAd2udCp1kvngtU",
  "key6": "21nVr554GwLVW1HgJqPxSdNDYoSqJ4zj5FsS1zLCv2MjkrYCwZT6tpJEVoTSQGd41sDtXqA9CUNfZFaBBn78cwUU",
  "key7": "2VaViQBRLwSmTgfX423wKowzSK5b5LDUaveho7rgXF1XJzBLLtNrs5naXQfScwxx6zF4kpoC7Vhod3d8Hf6QjnDY",
  "key8": "4kPo68mjCHuHxPHCjobF4BCCbUxx1NJAJ4LgmWYJ47qQpB4RbbbPbpoeY4P3FjJ7LPwjFLQoxD931SuGeCGpXrRa",
  "key9": "52HUnD9c8CdkxBXHpZq24U28t2RhrqnpoXmrZGqX1vth2Bq9hW984SfE7VeSyz99t2mJujphuzrRWs41ZaykQWgp",
  "key10": "5QzMcP1PGWptzZ5A83NNVCfTP6Z9iQgeYdkmtuXxijAJEjSXE7PuBKiJ5qutuV7yAsMnqXA999CFXFanihR94x5M",
  "key11": "Jeb1ZAajfnSVHvWaZrSuWHoQ7AjUfa5T4ni7AiTbT2Vvgr6Ya3qbUUBxCjg1V4ZEoES31c3bQrWRTmy2BdeYKBr",
  "key12": "kRxqPfPdBHzjWRqSksqnh1yX32uc33npvrgW3mNvRvWXifUt41mYBNc8QQJmsrRC9FddxdqpR3n2qhf42prhSsz",
  "key13": "56fMjPgDZQNVKzjXpFmW6QkgpccCYAx5J7LW9orZ4NBx6TQzWAJw5tLxuqwpvyPQMVNeWXDYCWBuYgQZnsiL62rM",
  "key14": "sfy7NSkcjqiJ5eAJphHMW6PjiNdx8fZS95dBhnTKSU5GX4aKGgd4L6rbnkwvWdX9TB6VNizkCokk8gwp2siMPgy",
  "key15": "4uBgW7RchMLq7TgoB4dCM1MB8xbjeCx54sE3W39WanpboRAkFnpGd9hc1KtM9LUt8YDN7sJE2awm26sfdmDRgR4B",
  "key16": "21cnRyZqPERdGeWhNJnZepJVaJhBB8TLgE9yZSTSAZCRiYmJzf7K3QDF1WwEc5oVVwAbiVkiEhCe2CtGVQkDnLyX",
  "key17": "66t6FbNqEszfhWjFvGPcuM7yXgk51EiKqnn3ziubPu47YnaHE4yM7hk5bwh99KsSWB9HUVvRgVcqJE2zUJYrdQvS",
  "key18": "2CjpQpA2oaTzN6KnhgkYU5CU54DsYEW6s3ad68DurGHmoX5GAaK7Vs5GyGWY8ngDhPrUFfXfGgxpikqDEqHHenXF",
  "key19": "5yFQWBoy8Vt9Szh3dQ8kfmzA3VMqEoRG6x6FA3mrfaCzoaTzMAfLoueqzAtrSDSrPz7ZWJL1JB5gHNxdUsx7p6Gz",
  "key20": "4WckKBkNJbxCzP81i8aNuLKZCXfE64QmfY9u13wxbyedm7wco6qZgEsDupuacMzWiGXtT2o4mZqiSzvqSnk2CULt",
  "key21": "4N4kbcCgn2Lg68vidarZqymYbG5zXU1CDioVJ6uZ23eaTX8b9WwybKddjcRQkvBztJyUSgyYyaJji1CqYkVGdF5X",
  "key22": "3YuAH1MDsZruWnyC7fUeHktT2jT3Jm7XWw4M3swcmnwLQtG5yX8f4BNsrEYZqJDVVSeJghwm6bA88gxz7ZD5myyP",
  "key23": "3PnRCZt2oHXRDeEZrAXtgqVvhHRvb2oyZQmNFghnuvCJi5vDfHzFC7UQLXeNhCp54Fkms2DWUkHDKzBhJivkaoh7",
  "key24": "4iobKmKNex3UTvTxhTzoeTK6Vs5VGeEsD1jBDqMWGgZYNwp9RoYwSRJYYBYZLWxZDbD2h7owbQaZEj3ge3vh982G",
  "key25": "2f12foVExmC8nmwrwmq6qWXtycEsa64dpW99RCTGLCL4CPX6xP5eCoGXTzFXDKSQJDb49kcMUqs87UvGVAUapfrz",
  "key26": "5v5bahnccLNWvbdh28aDBy6r7Kb6qdyhKFd2huUgh7vfJCTBUcd5a3McJJrsnDpszEt8uzMqSiAv1PkqXMPkcGNj",
  "key27": "3NSHUXobaAJn9xQL3qkCjbHbyTJj4cm8RcAEMY4P3rBnUsSNkjQHhHSKCeEAV6JTVYosyEo6jmda8sRoJUKFFg5S",
  "key28": "3LwiDefJjUhTnB4tCg2uuEx5FbQvjajBsFRg52eZvWptmxXK6GogZXjdSpvPFncvFR7t5s7r39622wXMtEt5AZjo",
  "key29": "4ByYnipuc4FFFqiLAREacX7HnmBt8pMKau16BZMahaA6zMBSkvsoNiBBCCzGyGkNgMEn3UT6rMeRxuAmvW9ysryC",
  "key30": "5zawFJgJmSczTNNDfzR2QQK7JUqhZE4BiwBxVKK9a1LURT6Hg58ThNQPeK6rMDdwPqJUuS6CEjcxC4UHcSEK97Wb",
  "key31": "4mtKB8Dp333tqh48RcLmapc9YrjiyZbd3XihpS9uSvBDEgi9oJzk9tBWMZVTvqPaqn6LXqBHNj7sUu5LcaAh2ygN",
  "key32": "Kn65KkTdazaax2hkaSQ2zYD3w3hVUSCeU3L3gFMomGfFznfNmns1uYp43bjJKB4zQuP4oxwr6pWKLrK4Frfdbea",
  "key33": "2qs7aQCg5fhnBttmAnzaYTNSsa11HLsufk3jSFRy2nTBMJJ39Fbc6AkrcX42KNDKSWY4xGHKqqbe55pCS69Y22dc",
  "key34": "5cix1AJ8zXgdGyAzQdujCXqV1TYtGxuVUTFfiFHeaf82hAAyGf5p5kfvDoWfxs6u69G28HntRMZdAiwycsuhEJd6",
  "key35": "619dfW4zxpAcZLih5PNaHbcSGUyWop9ZG6YYC9o4EtVoW1tVeRYPLYq3AbfvYm26hT2kXxeY4dgMU4aDyfvKk5MU",
  "key36": "5EWzHR2PzrWdQ2ER4BLmGVGP1UdfhWAg5e7KbZ1GZ7jkPwa3FyRpjJNc8ThwWNfEoonE1gihLmV8qnwVsqNX3ZTb"
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
