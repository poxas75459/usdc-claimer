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
    "FqGv8AdjDvXmyd7xTzxha5Coqmcy6AiL8QMs82zHrdWqeYvjAMwoiamsmvwXNERBY6KFk6RN4ofeQDV4ZsYh7Fc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e9FzDmzeFJGvo3nDfVJP1uGhf949PsiWCJr6Ukr15qBnUmUbeGv4nifX3HjTv7qfsTf9cQ1mF22MAaxNKj1ZPD9",
  "key1": "BoMPebA5pxwGnqM1AWw3w282U4jsimKnLuFV25bEfJjatpRdVfBgoztzfcq756H8JzAYi7uXaH95tiYWQqz9iaN",
  "key2": "3VKRXboHjH1Kju7n8m94bqXqNKQh2ErMPZvNbPSs8HCU4Phwc2qrCjf1ZL5YwvLX8UXttUQvJ2KV5GnDvzgVrBtK",
  "key3": "4T2pgMDKonqGfF46MKFu8ify7ssrj7Q3x13pFHc18nrgnWp5bAPJrVxNrpGwkNVQkmSoV726aNwvMEZftpoLyeHk",
  "key4": "3EL1pHLgyNDL1NXC939b79TWT27xSz2YhEv4XDk2GrQY64RUhnzBbBDgbQuuFjxSx4FXujMLYSKfrhV9beodCwta",
  "key5": "5zsM63AW1VCJHFvEzfpqfqVmkVTFDSYMKnZEH1hzGJJdbhZXfiXaXcmvm92pHvzxnYGtbnBJdCcmby7kHAXU71JY",
  "key6": "4MByFsFfNMWaR9ieSueRPqU3rmTw1mT2UZwNGNTqU1sCfJJBeDuo3a5oxX5T2Rwscav8FwG3Sbv51t3nmehqPpzB",
  "key7": "4GfVrLn1tFYaNR9hZvbeXd1pRZKFEC86eAV8fGzUMSAkma55NMz4BHNDCsj9qG2zH7GfGnRR4aFLR5mcJDfCKHLJ",
  "key8": "5tHMAVBYpF9d3TDVEXW1bj29vsCCMVv5rRPfo8LzTLCNNKzFSPDB8LKugA18ypeWY2qYh9HJWRysXdPfzfSUZ8nv",
  "key9": "BzKubKcNaCt1MJWg4u389U7HpQG8uBjbudcgkEVZX5aPLGjGw6hSQ8XUJ3wFbPHPdZfXEyTAz7uKYBeDr4LzDoh",
  "key10": "2SB7zk5cRNuLsXkYx1PQW6n4rBeJFvV4BiStPS6AasLcdYR3m5enS7Mn7HB1TY9WX3sidyAfHoMPpHoRVXxMyhHq",
  "key11": "5ajDL3bzhinrdRV9KpUsighR5Z9LyyzLjCNpYmFGMQyTN6izfGfgRZ6ENcHvEzLPTDPTXohuwi3uZiXmUZno1iSq",
  "key12": "4E7v1cAFMmPzNXckXPWTvVD6HQxmaRBL1GbYW5KsBBX5fnc3DWhod1J2ba9DGHCX2PSXJBgiBoJrV8n8z1hQJJaM",
  "key13": "4UeGbBh7Q3e53EiC68zbXp6iwHLS8458iAGESKgLbLvHMsq2onYBArqk4ke1tc69A7M3eAxgwsWYumzAmE9Nbp8v",
  "key14": "3Kapkx8jLbYnNkRacXqr8da7Bp16zj9WeTPLhY4QMJdixq3Wvf3T6zi3KDzhDoJ6sRVvTHp8HRwQuyBAxQq5fctv",
  "key15": "3Z8JEz7VUEbQPnNvjus1YRdbXDE3AgyVFGvAnv7HYcu2YMaD147YbrdGbNxEatkJfq4ErCTbTGuw9Wx3KRuJZrDY",
  "key16": "3SLQ5hErdvQq2ckz8CBZMy4AXEAiVtyC2BsUMcsZeJ6p6BQdSZaUBZfwC9uDSe7zKRx2xjgeHgkyPDyMXW2ZLjwX",
  "key17": "2UQjKGjLLioTycU1ajUK7cXxL2MbqenGgh2896uphY2CiddSP1nUAaknToFrgKSwAcnbPzHhRF5SWUij7L8fykw",
  "key18": "3qdGt5uQ5BtdgqXTQzX8yPzhjbf55Zfko6vetMmttVTjVNbTaLRjMtbWXmHUqHqyGqhnggEbUrVjbbTgpGZktArJ",
  "key19": "5ZDd1m4du2zU8YXJq7x76E3aQCc6vX43vxgB7uzi7LyhxoAu5E94TzBD4Y5uEHeRRhqcwxamdP3pkzdyTQb6qz4U",
  "key20": "2nnwSjw28mDCu1nJMhgmZpRmnVMmemsrXWADj5qSX8JpgXM2twuUaTymbizRnQweLmvx7D1W1wqi6duYWVX41Mvk",
  "key21": "3Vz3dmhWSWuWxAj8xraw6hLXy7D5hqaH9KtSNkcEzbvKyWkVA2vcHFQatnKgKcyFZRKYydGqh1rUZmCGZHax8kwQ",
  "key22": "5X9P7e5Gk6xkaLkC6Ev2CYmvh9nkEauw2jm3VaG5sVwsursMhDyCdKSU9sUgqM7yy7mffqAMHUxvbojgMpjeW4GA",
  "key23": "izCv7Q8JcMcDNnpegrzwsHa4tXzDdLnUWt9812vJDtrXUfnCtxxNPcaUwNyrFYgNaGbuXvDhpdQkenngwJXfeGL",
  "key24": "4nXu2eTKDLG2z7aKYb7xUkrzSf5c9Mnm17f6rsAUe2fphesCTaVF1gm2FxL746myazJmYy8iMKKP6oBQGS4ZijbT",
  "key25": "3Qowy3KPJapzzjgb6bM17zbDE9kYVHqb11ruoNztjdrxjEACJyjcfFTf87w2q7T8A5Kgdk8Y7RNpX5nBk1hFu3jw",
  "key26": "5NKBGRf46qYNJJBD7rqRbkgH8AoExTuJwCLMmahPubbDDyYnw1tUEkjkCUFT2r75wBjgx4dzJuBNP7mW9skh1bKy",
  "key27": "3571tAJGVpphYur18CAE4YFVNbyLRgaMB4WWTySTimM4PcwVMXBtyLK3Z3USpt29A81cmdj8Cz94i9r7kv9Pd5cU",
  "key28": "4K5ikX757JA9s4ZREpDrinvuWGr9KvQ5uSQ4GpZikgsXUTFoG7pnM3pTbmdCgYVqaALMfqoSeczdvAebZ1FBcJK",
  "key29": "2BPCfySNDznfrECHdeRP3UPYvtTVfNNgA8Xu8jV3gS6PP8QQgtUVo8aVaYFRjJ34V7Agg945BUqpwqaFxN1HD4Pd",
  "key30": "5m2FMKaB3dQGD8YvpAmMv6QLXXfzoPqa2aRsdFajNv6RTVeQGWVT5JV8Tsq3jzBtHNN7iP3TXj4T9NZMwm9E37MD",
  "key31": "5ZDWWF3NeHbr1671ouZExtmtGF4NQZfpNZRPLnYnxtrt2Kqhr8wxnd5RqsDPpKKgXZyT5qjpWT4sH3BeAY3tnCSb",
  "key32": "3wiZTtvRx4FvQvyZ1xvbPKpK249eroyhRyRRceXeNR45ekxnUhST9CMCLBQLWtBaeAC1vBdEndKzHZp8tJStHDWD",
  "key33": "3Jy3SxmKxdejDN3PXtE3tQFWHZmgkwqiGNXQo99a94KtVk76njXrqLKFydfSbMw2EENSDDQNCWxHUDzvk6YiuYC2",
  "key34": "3SkatttmzcZ9wXFTMqZ1oZob94vLzTX7KW5BqLFPoFZvkapMsVonNwyDDgE5W9AA77eMeSzE6Pa9zovDbwR7giSx",
  "key35": "hEx2pn4h4DNk4ixsjALmELdh8wnzQncWCdijYXBBdFhiRc4Bsg8BavVBsU3x4rDpby9zBxDHKFouMazDdADDmzx"
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
