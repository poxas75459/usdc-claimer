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
    "4VfFG7j3cc55Jby12ScXjyhXxvECrw35XuAi3CC8ohReqhdpsi8TbgoB5fc5FWadA1GL9HaLHuJHsdfLcKzyX8aC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CXsStF1FQQUEFVvkjGohBzQZzhNeLC9hSKxQFvkwXdx17zE4wMZr6jvSNtvksYGaoLAEZ8RzwzeTstjBbk2QMxH",
  "key1": "4xS6qnC49rHspzaM7mV8uQNWATW4AaXu5zpfc7bJrVBaf5ZeYCCdaroBLTXpjmHeeRjda1JBh8wMci6r7FTRyVj5",
  "key2": "4cMgJwGmA5ojz7yDFeAH6j3ZB4qebwEYGPDv4ukXs1x2kK63V8qvVK1nwiuqdnowiQKNpVtr9oSHZ4kQPZkF1tkT",
  "key3": "4qoKW26JxXznaw8nVkRhDqjxrmJVUr3HoGkXrAu2o9xsLvohFEmzvUzW99EWMsjy8mf6D72mjUmEYYmaW4VKtjWJ",
  "key4": "2f6RFct7K6Q8ch9wDH7x4mFr6zBno9Y8aZRLvtBFfrPcQRB3jw6bYCEmCXgwRBmXqWRN7ZCs3NMwtr3N4EAZ8ytk",
  "key5": "XZyevpx3upHPh1PTDaokBpbVDQt5Mmyq113VKr2zbSDAjcwG5ePN5qFfafLJ8McDBpas1QQiYDQPeBchjGnAQ51",
  "key6": "2dggcsDBsZ9mXTyRYwXaiDeNQTC2rFCprhxjkaLdnKQsNE77NCTfxH5y2tBcddkuCqYhtVcmVsRqirtCoMrJnVjJ",
  "key7": "5vk64T1jKehDtC4ZDHNwsR2t95YykQrSqyB9tnXqxbyG7t1Mb3xTeXEtuDJTRBP1C3WswMgvNuFpGZQnFnnHRLFd",
  "key8": "3LRRAEt4FCw8NF6YHC19EEKoDWn7sWxPMZcjmkVgTwxqeYpsL562w7hM3WhGKDT6niY9nS9xx8yfahTBXzQX4Mjq",
  "key9": "5Qw1rxCTumeDazZKrPhbz2m1vDLMgwq1zd4TwJ314NajHHRGx2wDbaBbLovoLc4PNDzm9Mi44uMFa5nUkawx8EXu",
  "key10": "28UAJ8iqWZLcZUjBMvMsvhHkmeAtzCPxrCN3MXmSrFKHaFbr6zdsxj1PLeLsXgULNWKEZBszw92T6u68arSTHcDN",
  "key11": "N8TsCPGLr2eEApk2H1SAuFWMw7LQAZtH6qRK3xPRg1yCeHqE2dqSoNn75LsGxr9nUrcGA7gm9ouwaStCjXAzAwp",
  "key12": "5ASURmL2bQNC1S6igFN1Np3QtyqUBDA6J8ZTfipX2WPaMVrcPj4FDNMcNoKJUQwyymQR3WDdViHWx8cZaKx4dHX",
  "key13": "2wKiTajVA227m4CoHQdNijaRhdU1bVG9bYzD4bTopwnNFSsyrcaLvZTEdZdE3zvRw4JxRXqkefFj9iAdjHgNCWAE",
  "key14": "3DKB3GCFuxJJYrGJ4o8WZrhE5f53yudwsoKaHNDaFZju8VLKKXxjCtuS3xY19efBGEka4rb2S9zi6topz4pSeGFJ",
  "key15": "NKzaH28XBVzVqF7dxNHnDT4CHC5Ep71tkzW95iPC8aVdJiHm19GUEkMz9RSCV3cqtoChaVQ8sE4h9bGFHZUyGkM",
  "key16": "2Ub6ivFHW9LxkDqJNvm44orHDEW6BWySdffgkCyfrEkedUg78b8FS2KzCFyNmdutYZvG2nSAg2maAxakzEaAKEts",
  "key17": "3HDfzrYT7rDYBLp84ufTV9EV2vZygrXwKzfRGR6bGwBEU52ESS51z4fZgY68ZkHyUwHUqVu2fdRK3SFLwyfY7cUX",
  "key18": "5bGQRTxwiqUjkBDMs8Ymsq2DZQnpWtRXTPjhSLRWVwZ1ZYB5xaxcVZJNQkoRyona3LYpxdQXetBzumes9nu5DrSn",
  "key19": "21Wzz4SqBneirGD1AAUTaLhR16ZFWJsYnZjrTNAMzY41fjTpNWUFmHvqjqSGBxksTMKZV8EobjKDqPaGZXjx3qgi",
  "key20": "5tX2UApxcuLPQwt5mnV6dKxfsHq1XyzYVpRGpDHuYbq3EPfTmMTchin5zYeRuvPaXRC5RiWi448B7rYPyqjk8Do1",
  "key21": "p4HqwXNTDBf5iuc9Vus4ND29ovAuoSmEQXyZdLiSJ9FRYGv9oHRRH5F3WCiXP9pm8rCLjm7f4gEz4B2oxCPBRPv",
  "key22": "5fnAQy1MPbY9XqYj3PU7g3JZhxWruPBsdY51pCLZi2ALwHsfpoMz9iMjLtAspzVGTsEfvct2dbP31eYDYKheRFAM",
  "key23": "5wbQ9t6hFAZxes977ijQ1RDFevWdeRurTzdUUe1jgB1gesm1ar5yE5UXHEAyQXcjYogFki4QLzS3XTxLAXvLLomw",
  "key24": "2LSh11EUJBzBaVHyCFh6ETp5JvW3CFYRz3jnv84dodKzyjF2aChBxHMGLKp13HVRqT2tJ8gvKtQVceEbHSdRxvz8",
  "key25": "3o1MVWuTPRAbaLKyxNDpzcSrAB8pK9FJzVG82opnKmKKmZukmFbPKw3YNpuXZvHzT7LQWmAs15v8ym4wd6g3q22A",
  "key26": "YoE1By3DU35AY5K3tMxPt7euRNnyvj5TJ5U41PAmQ3MZq4wBzPqU3zR7EYwbFoZJeJhRHKBdiEFaFcT1YnkV1xm",
  "key27": "wr6QxCRCDgzRmaWMVuVjJMKsuNQtT6BBYDgwandXWWZBBN4GiQLJuN1YsUkYD4WJjWXaYAB4F4yNCb1nMU57cMP",
  "key28": "48xudpC7QZkB6bt8DRyJTdJJAYzgxSbX3hUvhrdSKnL3FX57yb6P4jFFyyrksGBHR6HsdvAiFf6nfQQipUuy7Twv",
  "key29": "5MMBXke8icBja3s59VFM7NWQMu8G3MeRSrFpF6n669Jeqja7upHUGyrqVLcsE6NBVXsNSckawbJmnubjj47BARqi",
  "key30": "63H1Xt5dug3eabFvUNnQcq87PxRLffiksEYTodkak7Z5wQVATHqwTJrZCFEfyJixrTq9YhrzPicnnt6izyzkKbZg"
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
