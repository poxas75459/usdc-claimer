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
    "5QeXHheg3eKNyBmfaW3CKVJkuSMwoEBSgnzzSdeTpPtWmqcSJYcsNtKMdzHvR5sbXMgHaR8heUC1VCfiZvfzDAhW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z79PYHUxk95b49ccFGG3MfpRxXdbzYoCU2YHEW5we184ZnafrMFJ2j6CucgpTaLF3hxep9B545G3YgfJHBBBdnr",
  "key1": "5Cg7tiSbVgLYD8MjCkkRq6pM8M9GLQBfCF9ea9gwVn1W5ageUGmkPgGPNqTZ2BwMSwCVs6LNimtjPsyY3vKLW9bE",
  "key2": "czV7W2isRdHLCD5yvz1hBF9o2qzjXdg5XmAkYhxwHtv3MVQtujFvaXNgRc6Ckqo6bcKiX3HPGjBuwoRtyULKrUz",
  "key3": "2HnZcsJuqGZxDUr919X74Bkwf1TQbQFusbZZiLq8KJ4hbGaH5p8XvPPWwLuTFpRrS8Teuao1pCAYs4iqx1rzjpeU",
  "key4": "5H4QyedwuUMeFBrr9zYNFEqLR1o5Kso48Rtd7CRPXwmdvktLYRyq8XnRKHE1qfBVLVp3HPRayDdteMYNuPAWkqYL",
  "key5": "3rSj885v33kkLLBZaP8Trj9FyXADX46V14XjJXsnfpeFzCYVYWp11nKrTTFohZYP1NRbaqyv5M52c9nD77trM4tA",
  "key6": "24ymicWKZQESEhbmogzgXRZzbimD8foDA9L94JuSaTwBb67T5rpyCwtjiKMzQuwvKQFjBHURYzgnjeu4ZonGF3RZ",
  "key7": "47C3PyanXZkxT3dHG532YN5rhfQYWZEvba3c53NNxGXFFnjSErkpzGkPmNzCxDUszcHHNA1N3XreYB9m3he2qv8L",
  "key8": "5rMtzGZWtWSHLgjiSLC6VqWMXt8eHz66hD9tVA7AyjkFKF46hWMRz2TMHcRMK3bLayz6RC5iJa9SkFoBj2SFEqxD",
  "key9": "3sjyYuX3Fmy4kPvKvhtzBMupWt6eJpCAbUSN5vgjJyVKNQcvYNrzF4Uk2tAknkUVf4yqcMnvvCbjKHzp2y1UEq9i",
  "key10": "3tTtdMo5NwGDGhgjEdeAL7tv5pTkNJFPj4bjguAV4FJ5SMewnKRPyh6PyWv69bzotEvaKNgcJHY2dn8GaUo9GzAN",
  "key11": "55aoEv8NfaMHZjG2EmaF4yUYtJzSugef451aLvj6CqrErGn4Qjg6yXn3fW1gtTjfNEiwFNcYgXvKpmuhZUvUm45r",
  "key12": "3D3tRcUB7bLSXeAZrqvtkAbhoEj3E6frdLWaarVQXjuagdUFHoDjMCTmZ27beuvxrMw2evP3ZC7kHjUBZyjmEjqk",
  "key13": "CexitMmmDc9785D5x1xguCaiBETqJgMgQ9op7oVcFKAYY7b1FbHhQDJoyDGtZQUWVrEydhweWyczXEDeigqz1VX",
  "key14": "jMniKeaxy5TFJKHniEbAoaxRhiTc6sstwt8oDnFGKLUHnV7n2XND1zxgjFdrkLQWxR3C1sndGjptcWCLRaNs2QR",
  "key15": "31pjxaUHtB2bam3jD38ai3B69LXLUHQRY7N7E1gtKXNkX4nury5nCFwmvogaFkS8mQ4iYTuyu8RTMTExDi5LUWJL",
  "key16": "4D8qEczMj4yoFFBB74U2GAYivhFerpZwMUPjHPABXoTVvVMrFoyjcKCiqRzMJDSSp2uHHzdw3FKGc8ZeLSp9ZkwH",
  "key17": "3N5hjXnThRT4yhmSYPEqZfMvjZ3idxy99Kf7pNNV3GngELS6beDV8Q3B3D1vcFH1gQs58RtRQuB41A4dMcyEeFiQ",
  "key18": "2pgy5tFaEp6B9ZT5JecNLdK3R6ZNXMXgDUiXCLXzoqpMiBVcYpf7qpR8C9zNDv29HxDUedHzBxDAjDNnZxMLZLgw",
  "key19": "4DXrkGqxJJtYg3zicxqx7j8yEvyAeSpb71667nnCJQTWYTkoELdAEPMAham3VLk3AXdLsG55oR2zjbaFqYxAeC1k",
  "key20": "3AFsbZagv7UZh1XeFkF7jL6PSTuGeGCp2TGXuQtrTgWMRHihqrkEHY6s6uUMRYxmSTryyJJ9kjBo9Po4FFrU8Gm",
  "key21": "5shXeH944Hk4CmZpWJWQLFZBxr9bEAeHLGPgfN982hdqZ9ef1NftRotTqxeScTo88uS1AWrN8VhdHk87o2MDiTmV",
  "key22": "5U6TeXC2RnjUBwaHvJLJo2b5ZQJMZFKC88VAXNhfxDrV4NJn6bGKL58m8nuq8G6vPHB7NQesVDvHvPV3tPv5dfyd",
  "key23": "2wXmD6YiME1iMnGUfRDWc6KphP36Rkff1auZP8xmt8mxkEQvPcHx9RaLzhJjjREY3UuF4WqUbW5a13Dg9vZtWQVm",
  "key24": "4PEb5fcSWx89i3PzT2amFGttoAYgtHLLN9ZZgJQBd7xi8Ldjm7L9wLj13hWUVHhdquQ9vhLEmYTciN8YmCMBxfVC",
  "key25": "WwzWLTn186rewmRR6bUJbhFL7dyxrCQtrRusi3kPRhGrwEM8NVf8KmLZ6pdrM1FPYCwSriVtyN6N2Q63ax7DHgV",
  "key26": "4MxmW6h95GiMJRH4MG9TeemTLWTozA1GcFseSdKLMnvtPJCj3MVptUQsrdwYdstJDARNpPWTVWEzrMv88LrVkB6T",
  "key27": "5rr8ZjyYXndUG4GvLG4pP9QSwiUjE5e9yJtd7WRKyVKAMWZV1nLkoyrp5XLKvA6dEY78D8HzwAxr9BfeFtdmwiaf",
  "key28": "pxQjXswE5cyRERA6yUPReH8GvTiHNZn9yvwNidxa6nDkPvp4HW9pNqU6o6WwnvLTjPTZyG9cWNSo8XuayDqrkzg",
  "key29": "2pzWJtuPr8nT6Cw5QsoHocSzeJNsTTHbh9CxgjdbzJcswNzwRQRVjfKnsyaZpMMz5xJdGLxpnuy856ScX2kJG6N2",
  "key30": "73Zq8c6aexdWTse1PVVVCtSd9ZUgF6j7oensT25pcXAixGSatpXVK6LEfdJy8zAxYj12uy2jpTxy9SNpSZ4KQk9",
  "key31": "5cSZwW4ZAZhsSJfmAukY6Fy7Zh3eTomxythkktL1T5jgRq8Q9uz4gX6K2UA51fKp5bwDf7WxPj3H8rbvMNheVrnk",
  "key32": "eeZP1KFbUbGt1tf4u2UwHs3ULaBDXuR3fHihnVmT16N9GRZGUdK6tNkxGZ8U9NtsL1reFwpSxBMb5LXp7NuL363",
  "key33": "5xER21MGZVRWXFayigcJG6m8BdqypSeuogb8frigzru2Cvkj6fyEJnU6uCR5MUcwKqSA8bUkbnbu8FgC3jmqmski",
  "key34": "2Pnfj8VaKkgm65dQhqKkHR23bXhhUdPNF64yHAQgaj2GGCfU4wQtcjzkYgcNDALcKt1ptW9KpxfLRQAHfAuFbSZB",
  "key35": "2BiVQPbmgdFPNGJortEooK4uu6gCwFc5DDwZUeAvQvN1EKV8W2nh9DpFChAeFeeFWR1jeKXpbJvMsL2zcgK8VnVF"
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
