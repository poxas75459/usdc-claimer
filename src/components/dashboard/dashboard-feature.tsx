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
    "5exSaZ6XHXnuVJjVdy1AyRXL2BuNtr2eK1BBPJrMiqSCpvZrPJrm9zunTMfCLTxAw4WuukZSuV5xTuvpSPsEJY6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zc6QSet8FGhs2ccpDNCk1giSJJPTwzRp2oR4RXGgF4jrs9Zs2XuQaLSo8qhG5odaind59D6SKfA8M3xzn1KWzeG",
  "key1": "3MXBvxEJxS5GPU8k41ny9HigHmpbKE833LUNBHVN4jYWuwoYL6gFZs2y5Hdw4AEryxP5tzdh2LuoKEUF3EZaYKvm",
  "key2": "4ef5mY3qR721waG8t6YX6SaRj8drp6HxJb2NS8Edtr51ghiuk1TjfvqDUhbi4Jt3CYGGqZajT4gnv8o8sXbkppKy",
  "key3": "4DwykMPi5MZyY52QpAJeCxdEgRkA7zDUvoaHYRDcpQ2vEQSNNcmCFeZSz1soZb2knnTMVZBvBVcQhq6b5Kjfgate",
  "key4": "3jD8zd18r9znqLEpJChYwaaE2ux1UYypJy8pdaxkrA9odN7dkrGusyNE86nfwXKB8s4b8m4LBrdrm2o4gv1zbXHo",
  "key5": "4u65A3VZ3xT5AGf6PEDydV8r1wY2CNiAjfgdL2joxjjXDSXTGAW5TMHMGh7CXzh8eDYw51q284TBoz2qwmGHwEN8",
  "key6": "45W2thQFX1R7jdjEWQKmDfumac5X42PzSwWB3QRoaTci46akVRABizzoYvgbzEWwRqircG78vKqb1gHYR2KWKshR",
  "key7": "3VdHqDuWmcxESrLk9dzHXgt2bJGRfjwuqSkQ2U4jKomjZHQnZKDrN8ftqRFSZXSKUfNsiwJhJJs2co2T42caj4Xo",
  "key8": "4Ga7wvBZZccaRWCpCWdHDsccVMvb2raspfZaEQYy7g8DvRZJcqz1FQ4dptTQGw948C3hZfZKSY3NaedU8hb8eZb5",
  "key9": "3fuk99hsbkMzo6LN51FGcBLfm29McYue9bArGeCi1mYey5kFwyoLBZGvPdiJKGHbsV27CmFkXACuLXkQHhYdpDsv",
  "key10": "3zDoXozW8mqd1VwoimPZcT6EB5Pn3s74v6z2gScsRTGpzH7FMhEJK5aAgH78YCjCfxwkAJWUfocLDc4pSKL3Df9E",
  "key11": "3yahXcEEKB7xjd8zpRpqKB6rHPwuyFxVurpBS8YtBwyV7ULwxyD9iBkH7jtzBtkSK3e7EaA7hQ7GZRnJXB5PMa3q",
  "key12": "2o8VtnePjZ2eh4aFMNHoHSkckahWnJT5beb4FqXH8Wf6DytzKxcnqR9Y4yb9YBAtSqaiEDBDXubKmevDUeh3oSuo",
  "key13": "F8pG4qf57g1Y7Bf9JfcyZirZnyhoXGCSb1Zpu6g7h8GcM8J2LcV3KuwwMiJuNQ9kxEVfYcs8k7M6ovgtH4oLGVP",
  "key14": "3ErHZDC7ZPRSPgKXZiNuJX1CpMQVaq1rb1M2pz3Daxd6BjAR2k8Bvv6xCdmrZ9SDYfFyNNZdU6oy8Dyk8NJDWsQ7",
  "key15": "55V7zbFhEsJV9cSVbQZZUsXS76LgumanSvw1miaeAcVaiSijrVbj622DDHqPySFScuh6vFRNeyoEKvDZcudJ56HQ",
  "key16": "4hT3398dr4eLSf2wCqUe1MUkH8a2sMNW2C3ysXz6k7zao8psa9HCngSkPsYHA685pNg24VHzzPJy7QGPgw3nh9zd",
  "key17": "4mtouG5R5Jdo4Awej4mkgogZcH4WJBZkDEeRf6aDgGSHzVfh5kk9UYVvQ1ktk3M9Ug8ofJZ6znkA1qedwZzxWZCz",
  "key18": "5PTiLipQ4RdFSQQgntUd5BeH7s5Ys1RmdCYbsr6bfpsQR2A6fUdmbH82r5LFFrd4HW1U1ScK96WSXHK2htDJB2be",
  "key19": "627FGBKWfDhyJdr6WghtRTaPUfXK5sYY2JgsLTjkXiSh3Kfv6VbHkdjyaB4YEALKEvUshZ44j2gEdpFNQAsA6hF3",
  "key20": "5rmq8krMdm3TD8d2te4Zmngr5AEVhMRJvKWvfsQxzqazHBVcxwpoyyVjeEeyFrm8gWzpiWd9K9tbtEGr6kJBqTKG",
  "key21": "2Yx2ALYvkFAxykXQV15iP87qfW5tzPekK1iwGZ6UuFHBXBKhfzfYw3wBWe2Kg7Wc8do1QJN9U3qkjtEC9czpchfw",
  "key22": "2KWQEWnkQbRvYFdV4g8rHSVJUCxeeNBjveSRBoZ5MmruEZ7PApbWb7uXMr5xMYeVpPrsNV62NFTEjc4dj3mZTqt",
  "key23": "3TUa3z89kgC5YkaTvRZfsFEd8WNQfBqffeKeEk81GCvU2B1mbLP2LUGAaJ5gZV2ZX6JrYJV7wHzSbnzdrECkjQ5L",
  "key24": "4tLmpvLWnv9c9NpQWhovirQSsC6u1cLi9tqRcJgGz38kmmKoQwiCbLwpvf6z1jFEwQXYGSgR9XEYV9HMCnQfC9ZD",
  "key25": "3WCxqnE5ZxC3cZRtQytZKVac2A3yJe7UqFueg4ppoGHj7JvKGX2Z6d9jEgULU73FHMG9FthQQXWLsDJHjpfAoynp",
  "key26": "3YhPmDPPYKhsBpmhwBcqD95bumZrBTRBokt5udFr8uwo4nVjZNrxGADQp6PFJzWjaRZGU74RFy5BLaeRfxBiuiuc",
  "key27": "57dVRXy7ZuttRYPtWwBGgMwhZtqAw5S5efqj1dudFufge6WWNEAsMbhM2pYUQUbDBA5YCDMB2dSWuDPtocWLZ96u",
  "key28": "UuU3U97gSy52HbRLtPio7TMWTSF8ayBM9mFpvnHPPfSf62VE9YC55tsXspea5Zbw6yyPB5CNyTotieB6EgKFMd3",
  "key29": "2qr6SJTxPFq78rwJNpejmzVbV5HeGP65WvEj4RVqonqbJwedu8JnwhVeTzvq6MUraoWEuSV9w3FLLLvd3iKLQ7nQ",
  "key30": "3zwjaRa1SdXrfLzigero4r7RQ2VqYNwmih9Y6bGTqcqkSGL5dNxSTLaQxnL3dq4Yfcuo71nXFiLmstTWwKqzFgG8",
  "key31": "4L1hc1PfzUbPhVNcEuHMZCJn9Nt9CACe9fNniV5fEJcdfydgzbAXAYfu6g6BWfiBnw13PXtdb1Cuvd2Mp6g2uufy",
  "key32": "4ewf6xfdr6fAfPQvUdubc4CAoGJ1WpM5eEczqVGzsQH8LVbPWuhfmai3MZSXBgFqCPW3KxCEPBwxu3gy5EnG7w99",
  "key33": "4NFVcKEo64awNA9UH8RgpoeJaFBK7qWQ5PN2AiF14HwaPkaoeVBu2dZigC6GoTc8o5JnRyz6oys9PKKbyy8Ph2Y2",
  "key34": "24Mqbp2Esb4WfLqXGDZbC4wKBCBxGf9C2dNAkV6jTykexzd2E2RH7rtv6NKQfFFbDNaRRa9esfJ69Bn4jQ4YNcM6",
  "key35": "5WDALQDYozkijo13ajpYgAz9MuKjkdDgUJVVyJJizqPzDkEUp2doRcryK4qD9gjwfgJMW5aLNv2wUd8haUKtf1qp",
  "key36": "5M5Bvn5TYfkJN8SFtoQy6MrVwvwQvqh6hKNafqfdCeXi6iopdg6wcTZgQrPHrd1ML1iWSKjbJNTPPWK6sjpANW1i",
  "key37": "BJaZ5jYJT6bpkza8f46Q1Hf1PomVMrfLDh8ukUfkU58DCR5Nm4E3ttNnbztBaEAYAXULZTZxXxCLHpqGD9EVYUT",
  "key38": "2dEj2S7pzGH8RhJuAYSrshK6JiYjxtYxZ8ZC4mM9zgwf18yB4uKofoHkY12aCdwbtWnhp9SuYmboGUdUtSbNNQk9",
  "key39": "3QD46w9i2FvcNvkfLCotRUgZhRngPxmtKpxbUNapdX9YGJF4xapKEbTFsXGKqC6uv68Mp2ptHMighFbLvh6Lz7bx",
  "key40": "3jVb9YzmS214EKUtDVFSCv2XUiB55bc4pydNqoeP7VNAeGHZDPUUCLUtX5DQiiBF3SzWHh1WtE28p12HcLrhRpiU"
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
