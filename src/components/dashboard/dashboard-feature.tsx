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
    "4FdCFWd5J9m39XvU4kB9GgXmS6p3FY1pf7ndCEENHYio9et7MMuDBAZSuyLjdXRGxhK72oXb7aMQP7Bkr9NUjAdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67fC7LAfrD4ke5pV8zGUrAKGAk27v4YBb1qMa1djst6FBkBpfJmswqyZKLqPV6Q8g4Zx9VWgZDXwrMQ2QhTUcLfT",
  "key1": "5vyaQAMf5y5Dgg7PBiXoAZX6BhVAfJS5Z3Dv9jaaK2zevYrt9qrpAbHdGsALfWQ5AgAuhB5oLsf6k9QDBAWHvogc",
  "key2": "5QLSi73mJyDRijZDueuiwH3JZp5T4Lw55VNW3BZXLSFoyZEGSsU3pW1451ootkwRa4U38iorb8bup5EbiNmmbLUX",
  "key3": "2K7R3JweCSoCs7rH11Up2WfVF6R6Womss4L8EpEMUPr7E6xz31eHppjh2yRFg7n8zjxYDrS99SSz2w5921ywi12G",
  "key4": "ieVVFmQSHFG1fTt8BqXokC6SbFhyaTtp5Zov9RBSuoikzixQQtsbkCVXwXv5eemgbTtyoLi5xHfhTRcZsimU4rg",
  "key5": "5Zic39rBTBZcNi465kTfwoDRkjGYnSiDh8ERLe3dtDJSf9ooMwjQUS5MigKDvBTQAnGWsU27WzzbVzft9z4wL4si",
  "key6": "4fdUqFtQssvzT5iiLkJJiz9SfU1t9UALeZLwy5DgY2tNJkEgCoVJgwNLtBdN2B9kUNCgBrR7tsEmEfmUueXyUF4L",
  "key7": "2dzoU4k6nh2cBgrPmY5Zi2gToXAxuB4SqwbdqBzkbELx7RL1SJoS6gwowi93THP5Qtvncup5VrXQ9jW4yUcCYjSJ",
  "key8": "3uC4ygPWM9kL7AJehTGfGFFHgsPD7pCzQx7e1XE5d89j3ShBWBfw3Kk3gSWLU1QzZP7x2HPnyM2XTjgZ8mBno3oJ",
  "key9": "5dN1iGc1PCyyVhpgyCes3bypw9DpSJmcJ3WrVM4cTy2mrk9AMyLkzohMzKrRziNjhs8R89C4j9KjyvDjuGPXNLMy",
  "key10": "41jX8tqtfsUEQLAj1ESvKi47SJByzVp8LR2Pee5NdB73CtWXsUHBT8w88k86cMqReQqSa5MqMDarCDMD4dNZw6ZB",
  "key11": "2VL7y4fuUuGhTaXmxkdyDwUxV6nb5r6gVK5ToByE8fYPdASdtcN7jF9FbDK4VDsLUbTg6PxVZbC7vNDvQ5t7Wtg6",
  "key12": "3zqpsgnjbx3anYxvusg4LDLt4YinPpwQ6hvGh7BqM1p9aqj4iSBE9siJYiFHjEV5e47zucM6VVMiZVxeBAS3XxUy",
  "key13": "5MNhb1kbHBLUCKgSr9aZSERoQyCkSz9gZgEGLCtLd2US1Csx5866r2qsoWhYXan3tR4rbbqSSigQ7aFpVVJSoC3H",
  "key14": "4acCkrL6BxJZE7kgu2YCahwk35Q2svYcprhDhkXviM7a9CQNyY2xvpna2YZimj7YTpFecFZng6ozGguAxufbRtNy",
  "key15": "EABsf9PdAK39uUWEAyaiS7sa9aJ8gqNbvhYiq6sJ4QE6Q275xENW9XitUbkguUaYC5277onwac9fsDMAuUCBHx5",
  "key16": "3VpL1RVqcbbCHC9d3C4pY4MGQrxzrg9oDiNsbywZ4KhhKdnv3REA3bTtBn8yPXngrwLJGEP2xTFmtF1PP7wwXDZe",
  "key17": "bGGw8CPACQJRWW17EGnCxY6EJwA5e69rKQUtn4KfZaGbmo8WYoo527mkbYchNSNcVXo26mm2WvCMPGYrx1aZSBW",
  "key18": "2EcwKPe9ptTDrd3uM9w9csL86SMx7hzeyhumj4aeqqUXuzBfQYaBzL5KRCgtEGfYU2xf3wNZYCBvYybZGHNuYZv3",
  "key19": "5zdh7h6GRvK4WAdrwbB3RGqAQM4FBGv2ZqcnCCYM7peA1LkK1ZVPyTufLZNaxyCxQgEXkLRpCwK6UcA7gEp9nusK",
  "key20": "3nwRzzrcx1Z1vCWYhXa1WCG5Tj8fwvmGscXB7jRGtdnrLUrpwwFFpxr37AKizEYnTj2szEiorrdGCku7HLoRwb4q",
  "key21": "2mapQsv4Ba8K8hfiYQGV7SLv5MiQwx1oSqumeoaZzQsgCrtU1gBwhFiAz6Nc9weE9TWXKWcMgNpyicEZguqebgAj",
  "key22": "3eYMwz13xCh5KrDJeh9TtonaqKS2ZS9wTjtMEtWi5GTpTqUzeKhMqmsJoG15LZCyGogBc3FRdLn9CnQjsskTKeVd",
  "key23": "UW3Der7jRcAJPVCbGMjDNEMigRBZMX7d62kUt78EpaZxh8ansEPNfoj5NzWowHRUxQd1tBqo8Mf4pKvyo9L1VTX",
  "key24": "2uLzeXB7wpYaDh2KX1FfwZmKx339USeGh7UN8ksRrzaZJQDq7s9WUxi5WkFwLKcpqnwNYKQP9kDaFRwKCNxwkfRc",
  "key25": "57V5gNjqWeQsh8DGHmTnntywoSZC725cckicPxLYrH1TaDUgQ8mdZEBeE1YM15rJfeC7HuTNWyPssC5F88oxtPtV",
  "key26": "3jBN5YNtdtPj8a2CLPfJZHawwg9znjBADn9CYdHb3EgpN7636PMbrMaeAsLvG5ZouCQBcdTa2Nr1DkwWAh5howip",
  "key27": "2gsdEanPeGv9ZmhfkWqy7tXoxatS85kRM1vivNtS1FUkbDqgwG6iTpoNPZG5q7eSdC6UsPvudocZ5Q2844oZ7FRo",
  "key28": "45gYxDRPAmEb1ZJUXvPHV1T2nzXPrzzCCsFbUVe4dq6gP46NprByg5Dr78PnfPbaUDizwVnv7VEAPgJ2RtfFxHs2",
  "key29": "2mcrGznbSJR5o6m7eiPuRyY62sukns19MNLXyaCgXDeoxR5YqbjpnC87EdWkH3dgbV5NzA3ADHmCsNZr2Bb6UPPU",
  "key30": "2oeA5SPpDnNPvpQhAu5BhZc6wsfTAqn3im9VJq34GeDpbjjLWMtCa8KcSGd7tLeNWfUXYrAcvDJBhyriEQDmbMvK",
  "key31": "23RjLcsvwKuqTBmCCYttpTacTNK7pV892erz8b3ft3h5eAZ9kz6fZ7wqSdmxqZ2BPCxLojAjiHwKVeTjMmwd24SM",
  "key32": "5wd5KszvAhdwTFx4nD1CMa768YYtkdmCsLwgQijx48qX1VmBeETxMHcqJYPefv8KsLRU3ZojqQZx4cfkcsG6h3m6",
  "key33": "3M17Cc2dF4vGuTUta2UK1dYzEzUPHc9FLLMmTUd994wmgBzSwhmY1APADTmDse46AjZ4H3XhbEYGnkQZm8QFYBhK",
  "key34": "5osM8Q3KCPGSAThNPpzy5b3x2Z71W5P4kNXAjUCPFv2vGFU261uP9w1rLaqaJqAHnTQ56422vDYo8cYSmenxQWPn",
  "key35": "mqkphAqAATuNDjZCNBZ1rUCsyVfu793fSZvZbcwa2rfccUbVY5JLDRvX36GEp3yJ3ksVUyrtGnhzhYmD42nDTiD",
  "key36": "2enab8UWEgL3NU6FiHttKLQgoGppCriMP7sRuhds7Ks7hqnthKGQsbB77bmYFKzU4KTUar1mez2f6oZ4G9Msns5m",
  "key37": "59K5ciUgXk1aJTjksUhgrAmkgpPk2Y1miqtMJuan3dWsiqriH5jjVKMUWoE3X3Fb4atpff1WF4XArDrRT8a5R8pM"
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
