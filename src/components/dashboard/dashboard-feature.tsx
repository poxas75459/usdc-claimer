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
    "34vJPeVH1tN19GbiyNg4FcJELBvsHor2MNouwh62f5QDaVRPHQ3EMu3bK7zbV8tLpCtPoLbCP7tyFWx4UpLfKg3Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h3fTgXvojTpThSBGaCYC4pUhUbSWyK4d45CXMJ1Z9WzTXp7TwsSHKjppGJvCuRrdwcDm73mrk2FVAYvQDK5tLqm",
  "key1": "ss2qbfWtQaV3kA8zPWbaCUsusyK7aykUNuggUEXNfvBfC2HuuA7EazUJurtVrWM22DtWek8zN3JyNQ3uyDVZoQU",
  "key2": "63a4DUYMhQrgFYmpXWPdbTjRg3qE7RUTSmVMTH9FxNjKSJup5EPwyNrusRvVAqpj5YcMJGYqyKyyUhbxiDhuq4LY",
  "key3": "jksz7TT6ydRnN4mF1mHme6bfN2a5AMC8dDX1acymxscjRkzuUAu7X3cBV4iGL1EBGQppgLGKM2cpKLiB1kLFXK9",
  "key4": "BsXH8FMkgGZPr1iBrqLF4cY9fDDEw9BAsDevoJWig2HEABtwVmL3yxi6ctySFHukeTyHiKkYMB8soVCfvc8GJzk",
  "key5": "2ATXYpuqmCHrz7XL9EvcQ9BFLXfDuSLE5k7R3JjS7sUPaW263c6yAQVC2bY63mzFWqHF8NxxzUVadDCFjkTKCgNC",
  "key6": "5kuhbpbxPwbsgAamZiEMnTDwrqYbGAkED8YfqoB76ELefQoXrGry9Wrn2xKoR5Lvqpm9jgPK5KQ9HdJJdJorfkUN",
  "key7": "5zTUPDxrhZ6f9P1KVau4ohiZBmxVUabLinnN1U26NbjQJ1gXUp7haZXkJQ7ipQQrL3742CHUnZz4odR6ypjhC1hR",
  "key8": "4VStLHHGkS5zgAhY26DPrAKQX31y9j59NGz3bKRG1e1bZo2KGZDcAo1wUw9MMaMNuZ3YPg5UBNtTSqYjwbwHcm7Z",
  "key9": "2a4qn2xXhy36y3w1YZdacsqn6QTda4ebdENGWFi24Xcq1zx2o3D2Qe7Bemci9VXL4ZZi1NWDgU5MD3xsPqsJDV4C",
  "key10": "r3ayK6oQeeXoaMPc7dtfVJwY4QaHCeGiwfuzaCACbjyKpLRZRuH4Q6HA9BGVmYU4EcGkMG89af9D57jgxXXZgNg",
  "key11": "65u9DcQ53P3s5qcsd7nus4pcQU77N7QvLmCHiGHJspsmCgYvkkvU7BCwj5HatfeVt9dV3HpD9AT7vE9KBSLabkbA",
  "key12": "2Vn81kG4qy5A2wD2P7thrHk25QanFawre3Fa9V9cBwKm2ksXEnh8jos2MqbitrCWz5y8GCc2LkfzMKH6dBjgW6gP",
  "key13": "5phHuYMgbB9a7Gjf58xC4AxpfCUVAUB8Zvz7iAu77nsWKC1Yi7GvCoeb3Bvp1sXtejK1bcMGC5MwCX5rtxRXZnAZ",
  "key14": "31ECqcwmHT6TVnMrbnj5advUMGuGJabsztx4c7KQDCNZB8ZgPKq2LA66ftD7GYJHTmeegkS87FjbkWSFRjpU8KgH",
  "key15": "3koMrE7HeA8vug9xNibf9wstzJVEad4DrM4ADMat4T746N3pE8cpNpDsoRvrwGsyem6ufByGmFdh1LqjfpqDVXZ1",
  "key16": "61kVq4mTkKnc9pZaubJQdz5APMnj4uDCZ2U7By6c5KTUntYRnzuzwxAHqSPodd57jBhwMev2xD9sTpD9nJ8uANS8",
  "key17": "2gQCZM41ohnvnkescvTdQPSGfdgQJRSFZ3jALWzPYsMzSF3rxTMVSH1SSvvdoAUrdLDvauUyE2nwJmqxGarNdJg8",
  "key18": "3R8TjtYPuRWKg15GxKCapYKGSrpoV5nFhkpJhKivd7hGfQQic857cRy8zHeYVBgm7F4xEpHC2gsuQsj9n1UMRqGG",
  "key19": "3Hm6SDBUoEH5TRWN4bEAh4n21p1eTdcShVmn8qP6sXAPz91bPLQeH6ABVGEm5LQogt2wMx3MZUDFXCoKchcRgY1s",
  "key20": "m49wSovH9euyZS7umNVf4ysehKmBkaE3GKjPy4CSs1zT4P7Qzjzpt9kxd7DA1pd1BYm32MZMnokVTyg8ydcjTSU",
  "key21": "htMuAbnWZroMzn1jwYPqNCz3f14Ws7LLBw3KcZfx4CdigkqAfuUCCQp2fPebmiv1r94D4YK8vZwwgGZM7BrHe7G",
  "key22": "5dXyqEJgDhxPBtcY857PoQNPCfvLPCcNkTfSibEXxr9Z2jN8KvGmhLWXhe4zPwmsnciyCr2yNa3t9JLRZ96LT8S2",
  "key23": "iLRB95s5bN9MqDJjVX9TsaS5H5qchAHN8PF4M6LEBiEk2sKqAEADz81vdE4pSL7RwDxvDLb8yQbGBpK1g6JWneF",
  "key24": "dCS5ys5APmWx8iB2gMruPMpLt9yLNtSbeiTD1eR28NtD8ZTb94Q9ReBkVCuFhJRM8FfKYWyJFh8CstEySBv6nA7",
  "key25": "51yZCT88EmkssKx8mAKWM91fhZGUaiBzys2DssHKZjdWB9QhddNntqceBfPJC2Tu3PHJ4KHtzqRxMhRfDdGPbQoD",
  "key26": "57LecN2GB4bddSiMM3ZqdGpn5pQmaaodyPq7Yz2EggxLqGAbsAY9PBMmvJEg2PnQdgsbzBe5EpC4codQHRSNCL7j",
  "key27": "4bxQhcWYUhYbBugxkhoLjuVXAZo4N7xLAZCMRWdq2mWoqyvmPj4uPtN8Qnw9r5bhdEXv39jXRS7iRWkcA5CMshi8",
  "key28": "9E3k522LYCKtQRK8854daYerXNLPw6Bcc9m4eVPQ66efsFetkgx2jV3ncUwviNaygE8VhWqwhrMg14q9Pp9SMNX"
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
