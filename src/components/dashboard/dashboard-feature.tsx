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
    "4EdTj9HEt1JXNUk7nqwz58xAZcn5ohGsn88CruCwpcekJzFvqfD8S57wQQuZetnXq3XyvA6vXHv6KkfVwjFsHLSy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2breskhcBhQSMcd122mCW8eTtfwBUe85M7ftZPv6YzdHguC9uvHA7Ah9KSWprfhugcj4fCU5KFLrus7VPFmFHXar",
  "key1": "4DZYHkR5TEJnkUByjt766SajDjmueLP6LkoJhYXdNg84abuqNaGhyxAHQkBBSasdbF9feuc7o6iBSuMqaLM9irPQ",
  "key2": "4ptnNeCyND1ScQs3wVoFKzJJe5qN3iEYu6cuRNZ63XVwFabMGwEsYwGZSnhuPixbyq4Fc5fQCLytz5BdjZBVxuD4",
  "key3": "57Jogh8uGBxLqs5G7UbbR2zZfnMbuntAhBsnYiNNQQsgRucNLEtL1FAA2TDbMY7mFw9RUmJzgDwgo86cbvroUzUk",
  "key4": "2ni6n49KiBEutn5gE52wX6q7HbeNbU5JjaJApQaeDiScBqzmbA7vJK2prCX2bkFpc8kbnG3DFo9wgbeyYVXbcBMy",
  "key5": "3UJfqhpDHv4uQcX2mXmW7jpdN9PyLs3AG74yQ2RN4wHUi4LwsaaMyy72aGY9yLyokv3nureLZwteBKzz8WGzWrTF",
  "key6": "4FsQuEL33MKpLGXLEWNLquRaowkZo9ckhybNbNKpHQTpiXp9esiFTKom9PhtqQwV3Z1q3yVWa8RZc9xPXCKyh46e",
  "key7": "3aztnmxJ7U8mu4cDAiVt9sFXRknCgkZwXs4A2Mo3GSMeA7H18V1u6bz4JDdj3e3R69k6nALabFVMQjTqiEXduKja",
  "key8": "47LnVwisFnpoKTjpmGsWVpwcCR81RXq7iFw4hRxFA5nxeBEYxsZCHouZziNMYDWdR3hrAvUw5P4zZYSq1WJwLgMh",
  "key9": "3GNQbS6hBzB1RZzFCpGwnoKCHQvCZq5Qjwu4NijAyjSZraJ1mkL57EGjBdFN4vwCMiBgvdK2B8upotsB8CioMjkG",
  "key10": "54RgVRPpRQBPN1WjJPdd1rguW4eBCesPgYNm492Hqi97MRa3HX2h7Cq3SFLgvDw2JHVR6i2Lwp4YSFsiDxJxPtEg",
  "key11": "5viLTWXAEP4CszEs5GgxgDy5RweGGv9aKH6J9TR7j5GeCEbBbRiqKezsJg3Fp4LGPucUpYqxMURgsnFZCALpsKXz",
  "key12": "3MuDLnmdrjTKnaqUZ5ozeDTJ1Jr43xdyfu8M9QZXeAB9ZriWzM3VSm219jt6iND3jjrY95CoXguyKdysr7pBteXe",
  "key13": "TdtK9vymR6kQzWxGEH95y9RSkqfcXdUfDajuTdAVZF3D6Dp2grFHLuhyXWTgmg4qToZPUoEY5ajNdXYDg1dYW2f",
  "key14": "Z8hLboViV56qhLu878Lr1nqhL3Z7rHisu4uSJ13ydcfNkqhRVUsdH6xR4fuqvZB1C3zaHLAc9yeFkCda2CNvpm6",
  "key15": "aFXV7ur9aiUVpsJSDNeTCHb7dQtKsWfJtdocdG8JeAzeTB4GNwvYebJkCvLC7479RnffRHpDDgcG3XGD5zPxj7U",
  "key16": "2yW8Ru4YEAzP1CUL9N2yjhKaj4329SKsnZYLyWLn1fyKRa9g4PAkZSryknqnAW19JE6bdpqPXPiiytodvNrnUZdK",
  "key17": "44gE3WQJ3dfScwdNLnmj2vphn7EjqbiK6faCrkzDSrXGPVPBjELuwbYjLoQySWzgS3u32NW8XKv8cKw59AZDgLS6",
  "key18": "ZEXPBXZ6KLASHDJv24uEQ6wfjS12v1FzEWEA139no6oVYjBswcUFr8kkCTZkWAfNY8ycoo4gqxmFtiwQioMKaTR",
  "key19": "5mF2f2p37BUAmncb4vPLAinph8zxuwpAQvKHBSsPJYKn1QwMQqjAzSFThmNXTJyiQ42EWN87rjEdZVgaAihap7Pw",
  "key20": "5KiUUpKbqefGXvAnm4MCHgN4qMfsHuSFy3m5RYeSZRcxLz5cPkYVJSY5zaAj7KRBMbEDhLc7hZyf8oBRo7mg3Sex",
  "key21": "2iNkfuk1vnEz5tbBGhKB7ab24XgTxwxxXSe9cb9TYq7ahYm8yxQxJoGqNH6CzrCQuKMFY3Lv5HduMorwQSf3DcRB",
  "key22": "5hbojeYrfGj3samRtG6NitrEcGuAX7rfDvHeshAj9xzhtiKTZ7NqogfVBrR69ZBptL7pC9HQk4cxKC3JYwF4QEvd",
  "key23": "sR3jZaGYGn4VwJdiWuVxSf3rthgjdxRP7NxrykfPvXWGUUcdzUuM4Nsxgr8mAct9rJqvRbhPU52E4ser5dYpW8v",
  "key24": "2n5tERJ8xSYb8mHfE43VBZ8a8bqAbwiQghEBMqjGShj7UWv68FyzcLZmvDsk965HZbefUWWrX4mKvAuKqYQC8Zwj",
  "key25": "AYyoYghyYhp4R5cB1oq5RrLQTjGuK8QjpAvSGEabWQFNXEeMjPecKrwtttKdiiQnXyxy4tvpAGurL5piifGDbuF",
  "key26": "5D2FMceb1jfKbcYZMbhKUgVrcSojFfraFTkgUXvCbrXajWTcaScif2XLHF92aAft7JgUjX6GpGHLaN4N2TXCCDqv",
  "key27": "3ctSLwrPNa2Dtm91snHR4oVZLYBGuPA5upUs5TzkZ1bcuJVeqckDJxumtqDoJuYNgkNqxXSGyfZvJG4VhNvg4U52",
  "key28": "H58Z3G7UzJ3tc3VozF4oYA11BcqhN9T79E4P8aJB1oQgZYptyuKAsG5ZiBdR18KAiDV7d3VnCu7vkBxY8KatS6w",
  "key29": "4vVjfbJzVTR71pJA8JTqSBMxqFY7ZmckdH42cfazaqvjTLQi1jAb8aZfDpVKmn9ZGm68KWezyBXWZnrn8VcUJGxA",
  "key30": "4FqcE9soKu8bwPPzpuoHuYsXVFrzzxgKnJZ5jpde8nqiuLNUinySKYVx6nYXcxUr89Ec6ZvHAKNL9fqpXTov34Rc",
  "key31": "5zaSQJWW1FxTdtGDYXMU78GbmWkUg48CCr9XgxawWzvoVWf7DjQZyd5fSK6gsvyDSkumLXa43dBofnpW9Euq8UbB",
  "key32": "2fpxVVxW7RiphPLNdMTpkq7xwNxdvWU6ZnLtc56txdVYnCPF1Q1s1KuKe7Y3hh45cQzhamzVzV6UPhFviVvoBcN4",
  "key33": "2JBuFgdmU3raaT4o241imBuCEz7jdchKx7tdB9hjwonPcftmh762NWmKagqgZWmEmtjsFmyFuaSwTFRNBPYDTosi",
  "key34": "952KR2CugzNCbDfyEBWkeUum8RC4RRG9afsgiY4m62kv7sBJMFkPPMW222RWno7275YMxw13F7SpXSXTk66rXTB",
  "key35": "3k59ots5wKNqkRzFa3uHmrTEdGJs2uJjueuxt4v61pFmqrLCgSfLgLPEYr2cdEYamAE1UjtU1AjjWkG5PAKU57mP"
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
