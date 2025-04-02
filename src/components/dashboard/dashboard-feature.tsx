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
    "2DfPWWMv1H5cDDj4kpkXsevou4TayxDkBZr5murFrAKxPq2mDrDSKBY3fJnTFYYKhTAhfa7uW5ctMa1gSn6QiE2P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36Shgiu4XdrUWcHP8qfrepfw4GJHTV17SNveVRAuEeY4VWR6Ucqqio6Nn5YKSQdfGkaoskMr8jXAvTpCuqmm5LQm",
  "key1": "5p7YryyrD1iLtuPvxcFyAdtXcyKhbaLKbNqJfw1LNWKjt3s3Ln1Us3XYvh615cWVS6MgX6C7mT4LYSgyXpzVLmNF",
  "key2": "41XrsZ8TVfnAbA9JyqWyRgbV1WH3GqemjmbUgsRZvwZJqNdspthodyXoe2PgkAW8YygDwaDxEugQdw7rhcbZ8cLd",
  "key3": "4yzGMnsBY93MT7VvM59fDd8harrqygPEMW7ZBLqRMUDAwrz8msuRpqQwfh2wbYXyx9oucsHB39WRiixhnhV7Sah8",
  "key4": "3M2vkDMPAWpqxi7dgXnn9SmpJomp2tzBFcwz2tfMdtitYmM388eEzt8AeiUuNqAHKQ2u1jmb3ABnits4YZpPousB",
  "key5": "XNNemb7YEH7Q99RZxhXVVY6vRueAeVo3djQzHjaR3dsRBt6h3veCz2EUBmVdVT6oe5oiYQFJtgG2oohzewzf4gd",
  "key6": "2QnUKWFG5pZ5n7raMXvmWhZy1KwVJ3sBpVtCvNF9pbkpfSu14uUDbHPzAx7oRAwYDcG33KPhZGE4HQdQWTAmjZcW",
  "key7": "5BBUv3byT3NCQkd6RdCgd7vnadKTsvWspUNC3ZXRo6KjCMCzQ357ebyp4ardt8zjBweDmMpSSA4KFZuATwX7Hjtt",
  "key8": "5VDHuQL5kwpPs3H3jPUkrJu9YKPQZGXnxs2oChEm2c2CaLNLU99yQQgftRBgDLfq9e1LZhGDV2yveB4z3FTumCUm",
  "key9": "qNFhkWCDu37RhZbnMADSwdTUsmHuaKgwQXqDaAsHBfVpy56KCg76uBUaUbNzNm2PwakCBdwwBFgSmyhQw3ibwD5",
  "key10": "iaJSz8pBMEc6hTucXBzyCpLTGd7SYFnd5AKKJKr6QrVWEJY36qCiwYtMTHPAq9MvuRXtKt8NdYRDrJ97u9QJ1jC",
  "key11": "viJscp2CdJTQnwQSw8Rdc2kaMNc6RZrsBRtFhK7vQ6BvZ1gygmKv1v8Q6X3ddSz95RDB1nPgg2sF3Uk9f3M1bo4",
  "key12": "58Q9wZEuUrJs3fWhCdryr9urVTA1op8V74F4pTHevo4qkdN732cBcpFhKZ2VFzh7bkA7nr448GM1T6YPo5CC6ae",
  "key13": "5GdhbwBE9RRMVCDTwyoGsUdV2Ha9fdiWVo3YRC8pwQo4gWbzip39qd6zFcffbQxqYvuwxUmF63VheUBBEcCgGYSb",
  "key14": "AUqRTyorzQupfo4JkZbmHf53Zr2niMiAeaxj5kYyq8qijRpgBbZZMumF3Cj1qtsmdKhSeXoBVqzvxZr6C1ABtgF",
  "key15": "4XSwvUz2FMmZCqM7ZZWEcXBtGzYJSWkRipCan1x5cB3X3w1TAfX7ZBXA6P8ffNYHUPXggaXgYZhTboP8D5yQYVXP",
  "key16": "dtEeA9syGLwcfbA65HzoAo4EeeMs4dXLNJjiQsgwgGt3MbLJY1mqo3i4ZqHpRBFjjDaxucSnJTwVqMkfTdsnGk7",
  "key17": "3QkwwGUTnajdXH4HaGzoCw415PuHKTq9uXjswr4DknfCxRiKNtjViax8Com2E3pizQR7ux4tfAPQfcgwi28ZT7U",
  "key18": "2yX4G2Dz6nigJNdFgYuivmkfUJJwQa7ZjNJ3MV9pLTtsr6fXrzKwXiFL8TsXcqcXVWCDKpaYifXXLjarmovTtbXU",
  "key19": "2BbRJizvD3M5YVgYpK31A3t6fPiLiZiWzEz5LYjJFhNtJCTHuKtwA3A4vad183mWW8YjsxVHDVW4oMFhYddeXDLD",
  "key20": "2WGbJhtpA2fxya4xGxum6hYTEYoyzgUzxXxKDEzjBBpZNcnQEtSuha2fUNuvgjFQNVMR7EfEsHp93wg2SnmfPL5w",
  "key21": "2RJVJybSt3RrVzzMcSGaJ3zewWZzPf4oTTW6WmJWXzk63NmeZ5JTP1dmFKB73oAK3piJadtnPVoyBKg5KAEx24uA",
  "key22": "1236RQhW2UjXdXEksirkAa2u7XBbap819z2eNW16Y5eq7wrRrHBPLKh2KRBLpkfqR6ft1UDVFp8X71hvHUYzj7f3",
  "key23": "3ttWxtpWHv5XVwFquxtHWKPu4c9HU67XBRytyupS48Lwd8EDB3HqLbSxFQMUZnzMYaBgHmJ5gzdfPFhMrNmNxb7n",
  "key24": "36AdwBMqk9Va1ExW9bm288prbuRHtacmqPSQRcBQGm1GTRwGVoKBbvoKoHtAUuTTiMdetxsXog8ARWjDasFpP9Ha"
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
