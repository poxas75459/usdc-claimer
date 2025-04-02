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
    "tt8hjjondLAkbJrYnbaL2Tb3RbmZvrvoFLS7jFRCTmnjqm8yW2SQekLa9vue34pEuMVXWUfZSVyc8tVYRoSg9xk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35GhrBrifxdM7jQLVRKZctisd3noBfQhY3db3F3rrVfbMyn76j5D5NRnXydnxcicusn5EMoeZpJPXuMXvssGpLdK",
  "key1": "5whWB73P4sSijJ5WCVo1GcbVs1RzoRKcqjJVh9Lewx3uSRnNEpmMzyj2sfBZLc9CQzSpH398AVpi8N7dFHLyTF1h",
  "key2": "5mndf7douD7mSh6a4xFuLs9FB5ScnW878MrMo9HzK2hLK3pC9AJkf3qvhA5rkXxqQYjNfMVTsBZEfEK358YAjoTo",
  "key3": "4RBdKREMsLyYaNEbpKwbiXkZxyxeUDCA8X8nbNrgK65NQFSe8wZbus1J26EvQ4rYQLUvZJAKAnPGqVCLoW99WJ2t",
  "key4": "3FYKkVv547KJdob2bvaYqjgtK1U4T4Nrog72hQgVD7Q6brk4nffwWA1FFetEpA6Ln81p8QQtFuXzeENyufJ1Eu7J",
  "key5": "2UjZPNAoS4yABG18SDJH6gnVrGWAoqHXaWSmzB6sT3CAKc5Z8r1ppZAvt79fnxMAKqRP6hhShQEEV1L2LZQWkx5k",
  "key6": "4k1cCt7dX8hNvbe8VDaS45o9Eswocj6J6AFaRMSpzVwFMLZLKy86dFcncKk9Jw8cKPWEez55MiK4JUcXvvYtnPPh",
  "key7": "5RQnTdWYkASVMm5hyccxxaAj4C4ARUxuprbqJGC5xejDsmnEi45c6bgLZqkzmQwCNSo5Q6RHXmJUS6H36B9HUyXa",
  "key8": "2H9aR1yH1NGYESB8AjTbiYhwpZukVbiqTB3fTFaCdiNnRqRL2CzLFvSxgAZVKgLTvhZu4Zei2tMweA6b3QS6VUPv",
  "key9": "3WBDMLqzvJHkjDMJNQeHZkDWkTC3o8Zg7RUJYJdjRfeFoRQqS7rzRs5KvvQmSrKGPLkNm5jtS4bSKGTrhDgqrbwW",
  "key10": "2h38jMDyeFEdHVfxWHZ6KDNuGMuyXpFcyZj56Mhrt7xS9aC4RPfsTmuUS2HYwWTBKcUrBVH34Qgk5R6SAHhqW3oq",
  "key11": "5vP3XX5soMstuuLdUkTx4RQZBMgHTZBUQryFnSdGRjzVQu2KxdwD6W4SwCgavN8Zg7uErMBfNmhWjzX6im2X1NTm",
  "key12": "yU2WAFBfHHUtrJd5rqxiB8zrus6D6HNCZ9xXYR1S7s77sdfcNe19mSLfUTk1LiBRJyvvpRSedbobPrGdEYLVaKW",
  "key13": "4TYeJrbanJzUoHWy4VCNcsKJLgGV4uiv3ho8Ti7yUKpigB5Eekzgho1yPShMHQG4QYYqyPFDhVfSr2CKH3fwZQmn",
  "key14": "KxJyXXBakyg5w9MorVWfVn2fqgZXMhjbmivHeo9B2E5bqbPx7kRDExH4MtJHTBnqUYi2XExrqqFLhxWF6DMZ8sL",
  "key15": "5cNxoYgX8XoXqHqgjNEGtbFP8KCz79kRPSU41Z6ZGpbeqkFHFjynaA3wiEaBBCthraYLiDMdCyepECscVyAXAJTF",
  "key16": "65bH5ft8xtjn9aG86GtVTYKgipb1cTEPzKED4ktVCGKzwroL6AMCadw2HkCScnwhAhUgf9cAvPbukNe9bBuS9a5F",
  "key17": "2PMeDETEj51KYQ1Hxn87S9YvqKsGdfSoo7fDT6A82hXNmBzwEmsv5D4L3FWMuEoDjCENkHgAjzggnm27ABBvZnpg",
  "key18": "64BKd5BFi92yNe5er26LewfAg8Sgaoh2M98XmvMddkYYUjm4M7aU77Rby1DUg9q2oEyYq8NF41Z5F8eyUUtTjcwV",
  "key19": "5Cp35kkfJtFe1U8TcBbAx7gGh35M27JUBVzFWwrPU6fkydn7TSq1NJBrbcstzFUJ9P28FBNefZd2Kcgvy6iKdKFk",
  "key20": "5QAc9Wz5V3puZcqcV1MV9W9iSXwLtRDUP3rCkxW2YTm43SMQTNKKLnPJ7rrPh73VGGidobwoPbM3BojSAjiJiHp8",
  "key21": "58d3win1uxeJJFXofDF4dXud4S7BdmDau542DKCzqWsQ7TCZAso7ZbWKn7m3WDkKUhDhS4EGQ9LCV2FjGhT21ytq",
  "key22": "2Qysu5TsBgTKh1X6sz8vP1xtH3vLpEbfwFBNpfUL6WnCgFAbXriyU196rYysCBqMWy28AZYZWmGvRxsqzq7jyxwg",
  "key23": "46TckcMtm37wY32ikxXEPjboiKY3SFFa799qxeWqesTP4j8VPfUQdkb4cgk9SMYu8ZWzT9kUpkftvRwWTUkYvTuJ",
  "key24": "614VGkWdR2bK6Pf4mneZsQLxKrG8c9FXmHkGpKWhdcuhBgQBUWuhHCwkPrWb8BHu61C1R3JK329LBxP4DiZRNkCs",
  "key25": "3Rupb2F6isrvMVrbvzWmEr8mv1GnYNpoKJjBiykcWcWxCaaV7oATfEanhiM77w3BB5vnuYHkhyR8yrVCeRDGCnLB",
  "key26": "WqS5VWHpRFoLR5z5zm9AfcqeEJi9WDmrMnyzfkARjtyGxCB9sBs3zRKn97cxDUMLqBGUBJQCrJsp9apRinDzuZ2",
  "key27": "3B3JnWcmeJ9FtAWJqkoKQM2mkRcHfAVcHjzYqvxSwWsfU5ySWuMMjLEXdgD7LPpsPZu2McgPU3cjNDANMxgY6yoC",
  "key28": "4Z9buWJkxSsfLwe5ew15xaQkzjg1henACLGL5MiXZ61GBHzWakq5PWVhiuJXk98jxqNfZkBFBYXK1iJwEe6pzCRm",
  "key29": "3tfpHmG18gJmBC6LNBEcFJZwAuiBXB7BtzbLE93j4k7ybkSGQdepGa2JV6dgEjNZJfWBkWtRmZHsdRtYAE8zRUVU",
  "key30": "5HBYGA6jAGaNDbVDtMweDxvmN23SJmDSHLdYdbvJWrSoK7fjPBXjkiKaHbbN3ds8pLaLV4UHuijkB2gWxkYoPfFh",
  "key31": "46weYx5JPKfjfATfk6mkhMsLZEBiq6LB2sXgMhPJouZv2oP2bPnhbQtWTvUKNxpjjTBydUn29zx41LczdNKEXUDo"
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
