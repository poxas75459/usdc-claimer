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
    "29kp1HMHMwQxysPUXXx275rzXBRmqC66sYKntv7UiR6shmGPeXAa2uXhoFdHi8Zwphzc7eMzbNCqfaDWt9RfU5SP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NKpzPPfSsFAr8E1TNBjUrQVcNusj9iEQ3pPHeyxUGTzwUUWWUqcqoCV4W62geeXKLHVNFbqJhQtxgjVkdvSUWqM",
  "key1": "3BJYNFHjJNgJrD7hasiX2tEyn2SLnfxJdgQk5r2Ss5Bz7tPSnYV1yeRA1Fp9U6WF3dayHiZJkobkpejQqo38YJwN",
  "key2": "46h2LondM8NeHfKzwAJZrKx8pGwEw8juXnfjh5zsYCjij1M3HgDzjKEFHxS3mFqwrTG4BUDNDMXiHNF5AZQNAhAV",
  "key3": "4yvjb5Z9eoGQ7QMRGTNmyAsCXgoJdHe8jEbLGP52Waw1PrnXGpErxw8VSqxt5r9PVak9C6q29knb5PaX4hvJvMci",
  "key4": "UCKLPXfU6XokJ8vKWFs9qe7bB68b5BqSdYCoieszDN4krxNAdu1CRTPwhUm7WdrtKPrMP8hSVRaaGnJjCLnSJqe",
  "key5": "5FMu4ZnBUPTad5LYzodidzjrycksAtnbhqLs74DtoKVEhf4RR9LMrQPcAmHJwkmYj52wkQsZaPG2ffFN65JVDGAL",
  "key6": "3E6XKBC2TP9RgAAX3qEQRrxmoYFtDVdx7cc6DCo9ACz6JBeyYWnyjsjMFn44LreoYw85tcY65FAVBTdbyEGsYGpM",
  "key7": "4Mh422HLTjmBuXVRrWnLCQH9YxyyjL3nBgbDNxmVA22iVPEK3xJQRv5hicU2fg18PLBiDCamZPTjprRFG7dgp4CC",
  "key8": "4E1eBTTU2pqDaudiVgcWbJvJxaMb1nEHkak9U91KuDq5KFCKEKMrpWw9DK2vXzFZVmpCkMREbSdrmuPRyzVfPPzx",
  "key9": "65rjQTiaw7H4L2bT2JXsivTVjCYhmE1jrrj8KC6iuD5qxLxk9NJTbQCBKBFQWgpUMbo7ecn8NMFng1kjcVwdaRfj",
  "key10": "yps4GTUq2LUAnpBAfNoPbH6cyCYEnSCduRA5TK7PjYXgkX5wWPwXxnCpvXhZf86AJK1wBfjQDKyGN9wNFeddtN1",
  "key11": "czEnh3AVeUYQt7naf3pTKqc1P6GDdTL1VDWaiXmaGwuNeoaqZfSRQ7Av92GGh9rAtPbpTVADWVKT9Sr7EruaEcE",
  "key12": "5T9AT5Uvo4tWDtZKGRxKhCZP8TFxgDayPm6QRgWxHCvUji2ypESpQfFuFpbe4j7UJMcenFQ6CqLLJnMHH1q4PYwr",
  "key13": "67Xud5KA97KhH65yzukzKNRjBvbgBRwMbEM321xsqrKUUfidnzVpH5xoWXkSpBjRoao16ZLg6NmEWL3pVAhmkTSv",
  "key14": "2HSJLjbCc4o62Aoif5pqnq8wAeYPqDPbJX2esJMtXwXNJGKGHNcwShNS3zad219hAmjoPzEHNJYDqVEh1zVvUREL",
  "key15": "33pz7PC5926AD4MUc4t1zJQa8EfscKkbv5U1GcD4vnxtiXD3aMGG2CU8xM7Dns3V8rZQD1CXno5sBGyqn6ww4JPo",
  "key16": "3RBYacezSX7RuZsma4SeTyGeVPYHxdeL23v6AiZ8jiDUU3nb6Y1CFGSB1tbAaqYue7o9UCh2uPenMa6s5ktpU7H",
  "key17": "5pUQ1FGNEk2HJGBCbWzcMxioYJufC57738SnGycTVzcgWmzU1i9EE84bbLXZ2NPWwyvMUsbSr3at6GCst2XW2Yob",
  "key18": "5ij5UBadBbrb46sDhh7zNoutWNkfWYrqkju2AvTHzGd6hQxBhjpENa3EbupcFSSDQDhXKgXo4LDvrD1mYuC8YRFr",
  "key19": "66hWPu1KUx1zEBUUM6f4dJUa9X8S85s2i1u7kUEhQgKH6ypoeA8jWYMwh2ousWLeTLEMXmFbSovxU9pt42PtDHMy",
  "key20": "NixCFjdSCQLwNyVzs3s9EyquWkbvkf1xxw8GuEwjRzFS7n3DVFi1rLGrig5uDbQiYGAD54GgtuAK4TCXyfUCVVG",
  "key21": "3UeP9UPWTFruuNayYKpHaijvK5LyZ3peR5KJysbfKrQCNLmrYhaGpYUHFm9PfCi8WxKUdW8FqMCj4oYyj4Hno2Jn",
  "key22": "3gu8F2QeGmFN49t8sqEewDJj4JoB8VAWj8YcobgpM81ZBENSCmNkDgwHVzZ9sWQpTRdYhv5FnAQKEYym4Jo2iezN",
  "key23": "JkHc8CHNQSKpr7Ug31RwTvTLFzLaRP7Zo5f5pF7A1c4eXY8y7hFGLN5iU7wDiimZJerGxXNvjCDUQwTXrnPB5yQ",
  "key24": "344GqLdFdfS7rSQA9miN2pFfWYN7efGZATH6ZxAk3hzvkaxc2QFiHC8E9nLTRMRSMxmSTFMUqCjzrgN6xZcwbNRi",
  "key25": "3T9nMo6SbvUumxdBTrgVYGoMDuQ14JE35GMmdW2oG7VyCmub6PiLLC4YZM3eW77APdkyjbtVgPNfxv84gnK6eXRL",
  "key26": "2MssPPtYebe1np3Rwa26uvg7FsP1WLf8C7CYALa19tEvbS4PzCgPGecsZHkPnkiJ3p9ZVFoaFWku6GudwLzNYu4G",
  "key27": "cL7SNV7sqFyxYCPo1wPkY4s2KBK72zjdoYWsagzq6nwdtAPZS24n8PBBBmNGKNyp2FaM3nSf3DmoSCZoacW7tEc"
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
