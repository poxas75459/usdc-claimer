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
    "2MPpc9g8gqwHCRB4N33ECeUmkwcQZ3aJit5gV53BArK2GdZDNRmEytjYxNgK7ZTHYHA5d1a867U1iVsHVn2K7q6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PJZpuBczh836EtovshwC5uGiXdSQvGRdyJmV7UgaLzRoxRDmFbvQ8ftiJMGBJNQJyG2MPDsF619H1DeSBD9HYVi",
  "key1": "2gP7pKeemKFpb1q3m5CdkGcsNSGrhM5RySrHauRBY6huGHpVbjgBdwFZvtrBwgo3Lecck7d7p6fZdDLnvqsxAxdd",
  "key2": "4DaFgRhj43qgPA8g4v88dumr1vTAqB4YURpky4PXFpSkDUEt9iaxe4Xy7Tc2sudsGp8MxVZtuJgkpDZ2BhAQGUpP",
  "key3": "4tsvUXi283H3aoiu8Di6heaCgW2L5uCu79dWMaEHWSnz4RG1gagRwq4gSE4hHnCvpcHnHXTL4PQpsjQF6Sg9Cuhw",
  "key4": "3Wuxh3Qg5opS1149cHLAdKkJuEqkr36Q2kNUrFHSwDsxTHojpmWLudkEFZFgMBGq6ZW1tzn2jhuAv6RKpmNWLvkd",
  "key5": "4jJhTgDE1PXDVFGgj9MsotuveeMfVyMdzzs7d9ezWa8YpMZRj4w9XSYsFBDiQz6P26QBVAjMvGbvebSfpTnhGxD7",
  "key6": "F2kjLw1sWfDFJBctf7KH5ZDiTHz3LuVitBGKKbs3onKdLuRqu61ZVSYa3EiXBHkkBqDhyVW2sfHL8scUwfrHeg7",
  "key7": "y8GbDvch9o6MKNJXChK7hpPpe2Jw1py2mqHkEcBH5hu4qEg8w1oY1ZfYvLRCJesU2e4ZuvHsRgfMBiTUWpaYb3n",
  "key8": "AwBmEn5WtwW4cWDq2W3YXzqYZwPn6s2ECC1PkDRrC9A3xG7g38bbUopKP4A1LMmCmPAAz1NL2wtVRZGELeyY2ru",
  "key9": "AP1TfnxBiTH4TBQjRxAbDMh4qxCbWGe1Dz7LXqCBJMYQVsSNwCUhFYmbadTpd5EX7dQVaqTHB6k4WjwRbxK7zfF",
  "key10": "54m8BCnoNYGBhGryVqYznje7oWQdjN6NpJtmdziBjQgHtMPDaUXwYzQiQHhBCwyWsaRneYqWJzaLeZVh7YSruQ9P",
  "key11": "vhTNVE4KSdY6vchTQQoXt26Lw1ezmPYdm1wRyFiom6jf4252Hy2fSER4FdYX6TjzAgojpxvzUNK2TDAaPxgGGaG",
  "key12": "34k9rn8DmWUAm6kNk2zsQ5FAqKTw4X8VJTQNuLP8tCdCiK6XDF2csD1EtkkbxfkM1PSP4t7QTdveAq4W5i8BCrBh",
  "key13": "3rY567yW3Qe4fnxiR2mCJX3UMiXQZ7Say1LWfzenwPDgsRBoJ1t2f639u1K2GQgNUqXiTsLhkLFXDFkXmLBSxVMQ",
  "key14": "81XiVzXbnZk19raudk6XUvu7L4cvg1FZkUPzwoHDAWJkBPTn7dVksSKcn7Hp5Xo2NKC6DRLANWGB8gKrYqZ2N6D",
  "key15": "61TkDavYyfb3aDJmrN4qA3FWJ9pyvG92aNDN3WbwozofTwZnceMZBcjCHSo811Y2pfq71qiPrx2FeyF6m1JL1GpN",
  "key16": "3FvsZRWYsjkXSH73jqcpp5vkdnb9JbXzPxgeYjtSdwRhujcY1c684qc8oQRqDirRhw15BA8jBCRhDZ3ZcsbA3dkB",
  "key17": "5aH4vSWzRdMZ8PzKvpjj5irHmLe8Ppbf7Ridob4XtyS1LefuXTyUroNEkTsTW6tWrJ3NhGs76opdeRDXpiCpNaaB",
  "key18": "2kCG8fmph5hvrkSVHJSSjJUxk2Xd2TfPmmHDMbn96BV8N5WnFc9GCuTayxoBMnzaWjkoWyAZMWit2nKVWPgP6Xgs",
  "key19": "2W2aQdPnCNPuCnjPNyX8AUSqzFrMg29QjQemKZ8f4tAEzxqpG3GQDfwQ4oT7BgNYEDqc4gcgpdFW2GQzmnMs2WeC",
  "key20": "9Ac1qSsJbBLdDm7C6jbpAjDFKHELUENJELrdr8Rc4fAnVRv6AXyAwfdtZgojqZNNdzTFkbpW8jCsSW5qunKLnwM",
  "key21": "5uh6p4Gi1ERTqZpT4Xmc8z1fmt6D6BwL2CMx7x4xsU2zQt4PEDaSjVQVze4Rb4WHbugy7wrjWVsy1j3Y6YN6agrP",
  "key22": "3UhzAs48EEdWAgAfoQ7xU5m7WXq1NpsQ5wfwJ5LscRmR8jo4AdeVUuvEwsAnJXs8XaG5Mbh4uXSCP2RYBNEp7qos",
  "key23": "5atc4DQsHoyBLTLttPwkTRB7Cxbkv3R1ppeP3fr4eJRfQTJQuqV9GHFKC1pqFRAKwrR66hoyFNVS8pXv9oy8RWoJ",
  "key24": "512GTMYWPJa4WnLfgrY9BLySay2f5iRZKMX2Vvka2vYEyQRcnYV8tU9ToR8S541WVHutV8Dd7gy9vsJaQW2yadQ9",
  "key25": "4E2UuWo6rHU6eC7iupy9XcME7M6jSRyC9N9y9HdkWTnvY9UnmPjFoDrUYtUottd6xUMZ6JVGw78krL2hozFsDNYD",
  "key26": "34vAeZqQ73894Bzj7KJCbL5Mt8muWKSnoqroZFv5Bs6Tp9yYhJ7QrgPUmGmP1zVLgQiyGB69dUX7pSqLjATQ632s",
  "key27": "3iKQ2UEvce5cbncFV9e1iSAub256AErjeN3yLjACo4dw2iNiwf9Yt4caeKmtVN6xWGVaNfmREiDZsLJGFvHr4dJ",
  "key28": "53UnJ6YvmWAoBbazPVNXq7dM86LRSCFUVYXgSEnK6HyZU5LSftVJZBaS9ay7sVK8NhCAxfPYF4E6xxkJyVb6WAqz",
  "key29": "2wTEkAEDqW8ewebRsTd7UUyjvALh8CHwgwPWXH5LfGasH3UzV4SXW5Vp27EuKNWLGwaALs54ZQhedmncdxsf9y5P",
  "key30": "32u94re4QXk8vonTLjQ9pqnts4YjJZ8am8ZbmewVH1B7ou1XLqtDZubKcWk4S75JKEakjRL2DnLWe8vHkga7uXQC"
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
