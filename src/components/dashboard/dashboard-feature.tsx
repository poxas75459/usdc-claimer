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
    "58mUqLFB7Pfx5EFX2osPTZQWxdzcSisqp6dETR8FLENU1wDBQmmxF3ZvZAywoRws58V1mBF77pDYa3x5vH7Thngi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wVGg96c3DY2JdimakwbuRbPtxQoHeujBR41CbkiLC8ArJp2QdAtpfHXVxU5sRGo5AgsdocDRvgo3v6bgtLzzesa",
  "key1": "2XKMRoCn9CjigZXzty4ZKCzGTaw4NsTxkY3y46dES6EwMKCJE1qeV4PEakD4jyKMsbeYzpPjUGUyLjDbnJbybyi5",
  "key2": "4AuCfeBrS25pnJqWuVYNZx2zGnWX76dRQBeHtQ35aZM93fULa57z3Xs1jcW2JrdxHTLzjcsj6wep69haLc5WeGSr",
  "key3": "3fbBj7qSb4Fq2MecTVzjB1mND5rxAyDE21obLVa12rGzK8Kvpp3zU8WT7E2qk8axqDtzEpAXzHtYuCYd8hndwFpv",
  "key4": "2Sg9jM6HLyLQZ4CDriijwqn9kc9bfPGbi5bBJQQCSrmTEqhGR5sS4CMF4tRhTkbE615j6haRsXRyzvuMTkYN99Jn",
  "key5": "5fgVikUGJ3VGGRziqEimpURYQ62v2RyyNYNKfJyYUDJHY82MiBaXC2sAhLq2mHihhxwrX68RKtEqLhVYbtLLbj2J",
  "key6": "4arFtXh73LJGYuaiGTuxjTMzedkQpRS17CtHcMB1GPgbJbFjYjnChihZUd6bgzXdwMS9VB5EnyZqxg14WqoTQ1ZU",
  "key7": "ZwZZGKaEBcbyeLYbxGfXAi1cKvd2XRhLoev4pDNZKbWR6UnZ6YCHWbDUPGTnPVt9uThBthob9CJLbKBfo5nuRi4",
  "key8": "31xVDsoP2NHwbtSWEiZybceuzTYtu74npXoaMaHTHpF8urspJq7tJzXbGUqWpKitA3vD113UyMq98qTdSfbY8aQq",
  "key9": "58CGrm6JmTGXd1apacHP7yDmqU3HKGYUtT6nLeqzWTNUEM2PmYHP3ZjZHhMPD6tKH3HRB8XRhMuVN9NUPeGZH7Qs",
  "key10": "2M2Hw43DP4PSSdWvEF8xdhs2NhH1tfA9ZuBHVqEhy4VLpv4geXCTzYJdWyeAwZ9szKoZEfbmyZHtYpGK32b2owWx",
  "key11": "5JJda9jAkVcEDgEpY9AfYoPUpRX9UHUMXyZpZKp67Q5JuwwCVriQuJKDd3ivr6xUxMYHiUTHg6zMNpqxam6hs4FD",
  "key12": "2ZbgMzKKqHkLSHB2xzaJEchDJjXzJEXWYTgReHicrt2v6iKjNKCF7x3N8kD3S5JrHtwoPH7dwreckx72npwrQwRD",
  "key13": "4ADsSWCYFyJeetZYo7mMb4oRmCxFYCD7TnkYCPFn9LkJf7mWxzQg7pw8EASHHRbeACnot6t4ZtiTS53eqmAUWjoi",
  "key14": "3rwU3iDt8PwfLczqbP8CtARB2FbTnxSovqYCjJg8CRMArfoCMtUFTt2sWjMg7hhyKcLoYVreqDNkunFArvpFN3CZ",
  "key15": "2HDXsHxJbWnSyqLyPv2fxKJ931Q8VR2NpX3qfVtqJpCjYdJMuY1TpFtQCgQq9S4M6myYjKvjiYRKos7qVn3JHUJJ",
  "key16": "5yt3kjudip8iZWvbDYZwqQpzvjA9pQZrCQcYeKPEfWDmuck4CXfcKAP4pfJXJ4fzy3P3hhqbhAQYrHYcRxqgsyN7",
  "key17": "2ZuegPjqpQKRQNE3jmsnswkubE9SwoQtwjCb4zjVxjqD98a7spsgJW9GaNvZpVthkuYwRVLvCf6EUyLoCir6RgFL",
  "key18": "5sxTfWTDb2iRujQ9K5Tj7Bpnye5NkE66SGHE6Dm3n7WDpj6b9fUR8HJ9A9r8sX2696j4y78XLo6XHqt31BHTh5Qu",
  "key19": "uFh8Nh1c5kkQ1fu9ydVibQ14qdhEB8nmiPF9xsPPeTmSRaHnYBptbsUaYQgucu8P7AMg7zTq7SGM6SqfNAoEh1V",
  "key20": "iTMKegf3V2M9gbsEVe3d5dqQvAgtE6H8rrNakxRuAnmVe5qzFLUDiRCaxDnobhUWXh748uhAfaaoGMudUXdgA9x",
  "key21": "1koLvC7HBEpHVx89oa3urZ9ZvRupWCr9Srk5NxqRMX9zLexjYnwaMZHQLLBvZ53jGVWAXg1jEbUfJwmJqqt9ag1",
  "key22": "42wWn232pt4Y3hz5SCJBvg8ZVYwH39igF43agpKCU9QA94ka6MoKMdmZjmo8Y7ZxX93CztUcmrStrN7rGQJnemKY",
  "key23": "xsjf2tkJZ1WE6SHpDFsFwfR7gGVfciERZThBNSovKUWBJLjV7PkWpGhFuu9hLqkkRSkg2CCcp4uVi7rmDZbSU8m",
  "key24": "hZ7Xa3kGmjTCXd5kmupnGAnAYWKHHCMCLbo2njEzeHyn3dh4JvFPFmP8dZYEkfZzwvhgzMkugjCQKzcRCcW2VoC",
  "key25": "4eHVU6hnyWJJEtYx5tQmciFjQ42u6gZAGLFbmqSgE9cGjZ7YgqKgTRQV373smM655yD5u5FQAFKDKhrt4epTTfUb",
  "key26": "37C56hqSmiCEe6YoMsG4WoaKJTS5JNsz6kAf6zHC3gfCFt77MUrgdXowU1A6CwgAUMJNH74jgVd6o8Gwy5anccqi",
  "key27": "5WKfhA1yJS915ULV7gHkMgGtuAPcpu6fNSpzkbS33DaJUgFHXZ1v5PVhHKaUmC2HY6LJxLTvMNv6KHuXEAxGYjL5",
  "key28": "5wpMQ9w6Ru6Yv2zpRRmA2duSkem3onwqCm3HvuQgoRWWNBAFWy3DWKosFyoPa2sXNQ2sJSM485y82kgy3AYZ6c8D",
  "key29": "3NPsAofG2YaYiV91nzjPkiHFo31abksp6Pk7LjK4imPHoCvSpyVqaf9hcf4PssJ4dUzTA8xLEuZkHgYHeGhDx24n",
  "key30": "57kXN2KiVD1Pb2LUHmGT2KCH4y7Sw8oYSdi7aVdNG4s9u5qtnitiAWKNxkd4XUhCEtqKSUzStCoH1stEtMcGZLBp"
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
