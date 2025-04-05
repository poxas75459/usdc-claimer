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
    "5XY3BVge7spyrAsgRm3eXsymgg6DnvYWctghcvetdMb2mpZ9QnuJgYav6aSHmCTztnLvAhv3RG5ktp3US1BoVqMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AXKSGHzUmQj1rz8Uv92wkpaPNHea4CyhhvJcpdd1GPaVKsKipmTM6hgSKFHphA9NoiyRJH8qNdhqfF586DEw366",
  "key1": "5vnajRdpcSPmwEahhGjuw1NhmoGChCMV3zpw3aQVFjydKz9R3WqgXqBPgGLPC56DVEqSdUz5mYZeohVfvD3KHgcQ",
  "key2": "5oQT2irVUXuijF6gmhGXjCAsdzAuMDgLEcreuadX9g3X1Uos3J1xHDkSWRGR1e9FQCo9ZiZEpjqYTK6iKZyzz3uH",
  "key3": "5gqdciBdGJrUEg7Y9D1QJRZevx9gY54MdjQoUcU8HJRJ8xAcoAMQhsXbNjP8y63pnmH4m4PKtNCxa38MYpDQ7zHT",
  "key4": "67qJLEw3888RPygJbCUnn2V8WgvPTjhVVK5aexymuzn87KcDrq8LzysXNnH6hPCH3knqBSxomEDFSYuwwG1gK8Db",
  "key5": "4qmvSTE9ckTYyeFxj9YUhW2WmZkUYV29ZvCJavrAkXhbNnuGLJ5CZpfv75Hi8KiYLi3qb3392KgaBgZPodxfHKJ4",
  "key6": "5RUys7fcPoxSxKVhj7zvktGV7egu86kDwgDzF2nCiShKqiTiqvM3fmAzKZVw239dbSs7TBS13H5QN2s2Zs9zDWGS",
  "key7": "5f3zniJAfdcinrNVWAjUSG5t2UaPGsqqM51THsRJxhef3tctpX2EuhDWkE8qUNyBntr2ZSj7Vx7vhFNZBjwjhxik",
  "key8": "4fdEufK7MWrrwbNBGwWbekqAkqnW5SJFCbUqPUg3U4onpGnaRuZwdqb5wCqTDoBHFHRWDm4QEGmo96YpRvH4hGFb",
  "key9": "3fGqfN1zc4Bxjes2bQn3hPioBuNLx7hbrLf3DgEaGWQrbwdzmF6ojpmNPgbhCRMU6it7d4wX6uK2YQoa3pQMq1ng",
  "key10": "7fAEoBuruV8RhPn2bpKuTirJmgCSLkg6vnNPBxmhx3RgFaZXoBZTJt86LSVW4WBV1g3PJWmugMGdiuw2MU3YEBf",
  "key11": "57pqusF85fUaF2coL2LQtzXEhbheFv7PDdG1bYX9REYBUAtxtrNF2HHQ7AVc6LrCe6dabSY7Ff2FeZ1ufJX6pmEX",
  "key12": "3JT7CDP8DqDZPXw6vNn555pS9CFaiTHnn7EvCa4PqT6Wf9cAEKrgRkZuhnmKWuopbyszcvJqBf6XAWN5UJh86zsN",
  "key13": "5FhbphEQsRNZVk635SyWTC8WTGHer8EMqfPsqMDRb9SXNLywMFZCGLfhn2JY1KVrf7RPp8pyPvrdCXRbnKmx7NQS",
  "key14": "3XZPAo38uxsrq3Zq6VHQm6yXvMjVvUjCdGpiQFTwmojMdsLmm7G4jqnvr6YRZyEwPKTMLfEcyrcxmiBBxSGSRgoC",
  "key15": "2YaSfQL6jFGMq4n7CmGSHiqCeWBDLdADFw4k6azHAHTCFJExZpGu5rDPqxya4trAwAcCS8uukQkUaeWf5WxKtxhT",
  "key16": "5mrQZYy4by3Kwz6iwah3mEsJNnjCzMMee1crCC32dErfuPLaJj5XK3Z5voTMgwAA9havfQNumrj5tSdcCsKaePYg",
  "key17": "2Cp4B8fvUewTc9Hr2UmdAoubv5y9R9x8JAZvv6KyaK1a5LK9CXiWLjePSS7mDwq8rXjMoUbp8qYGjhzjyKhVu2qq",
  "key18": "4N1MPWe3ZNrQRWyGdtQUypQRfuhSEtsXgq9BNwyk2XBJ72NgTASUG9TgTSZr5LshGN8nhEPGZQPKtjk9yrJDxNJ6",
  "key19": "1176jH3SB1a51KPNzKdSjG4tTZWHuBmHRpc3YzMAMBaK3aySbfWRM87wfvpgCTdsb2jZArEYFCbQxYVuDcuD43g",
  "key20": "3HKVb4PFfWMz4YV6jZsw3gqSJRtGfmB38D97R1K3J6ct8SECVJkAbJDDSEjNbsFTXEhvbGHqqpBHgD8Dum6ML58i",
  "key21": "BvwohJX5aWUZp6z8fyEjUv41aBuJz77QJ4XkJLkLcUt74kdjRszTEyHBMWuVCm2pf4bvyL9QsBHKvogoiHDFc2h",
  "key22": "afXseF2uG9Ak5rYxVyMPRrZS8qd7x8KipzG9MQb8zb6gKP9yFzApoTr1Wa51aXo3iqAGUqNniMHZ4cpmBwQvsMU",
  "key23": "G2wWjm7qMvSTxcbyJDSbxanKZez7J3A5oPUpAGn5XPiHcos5yTaQpq1SjhJyj11nUbLJw4HXVQPrWT68bvg1GNi",
  "key24": "2KU3a4da2BcHjgj33D9TxsEpzcoS1JjSpdobMMw8tRxTocgu62Qkx7qFaDuNAJnAULG2ezRJ9YkXaa4EmZneHs9U",
  "key25": "61FLdBTbKv72DrMQoq2rAf7ronDZreWoK3d9qj73cBhoTMXfwp7QALWj4cXVH6DoJN28fuwku9vwSjFDwg5Q2tW1",
  "key26": "3tDT2RgBobiZUqJGbMmvLZyuyZ9mLnvV1oLqffc8cdBm9PGJ25cG8TCyFvvP2pHFCHEqF2KS1TGKvkpMFTQoHGcD"
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
