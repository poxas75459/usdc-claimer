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
    "3VL4T8vpf8FpNUWgWQGNbKwFDyhDDgArJc4KkZedz1NkEY1PfVu9FLjyjNYT8obWXvApGU2it6v9MTtJex4ZKREH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VcidD5VwNTL5PnF484ab6u42Np87JqxziwHWqdxPu6zaWN77iiJKww6trbvqijbQzHoLEoyihSRnWFsq1Sr6AqM",
  "key1": "3eceDsh45TqzZNFZXFvpta8t3Ws2keaex9NkarVinR529LE1AdipCFSi5dUSYXqJZUkVA7BKZsXSAFoDyAVgBkx5",
  "key2": "4basNqkWY38J8nW2EdK6XZ5dzKArPWUu1pTJActVA8GDn38bt3UncbWTnqTw3Fo9uTEWB14WHecoBQjaBiGMoaZ4",
  "key3": "xmjKkA9ixGTJefxx9YPPzc4tG7yw6asuZAtEQrCFsg1gB9BToBeMRTVp754KqAeNH4gMFRS9UC4t5EfyajZeGW3",
  "key4": "4nLJPZk25BGigug2UVcT5JkcqnCeQN7pC6B5Q8zEZYP4zfnhe8oAD4ZFKCHi6ZwSfiCh1hUBhQ2Cixk6YgXMPcRv",
  "key5": "7wjWLjhVkp1M2tPp9obdaJCRyWCfsednYpyqNGnK6SHxsrpYnvfeCrx6PT7dcmEx7DMkB2RsVZx9nLPyxk3Lrqf",
  "key6": "FHfJ1HzugvuPCNwRYQ5bJgMak5L1s8A6oEukY55kkuXn2AWe5ySz92Rt2THrSy5HXcwan5a41cTJc9tj9i3v7ri",
  "key7": "xopu1diBoaBJyUHGnvnYxZF6ocLvKikMh7C4NXGvJFkVk5okUGNzmazXZG8Pws784cgb8NWD1uE4kDyeH6QKuzh",
  "key8": "44edn5wfe88uiTfrWpabyBcPzv6QEFi6UipsLT2vxpzNHDRF2T1DFBvVPr4pqVv5NQ8JKPvAiwsf88ZSWX9rPrMe",
  "key9": "22vQan5955ApQUexw58VewWXqKFXQG7VzxMK2LuiXp3PcTu1TezevAHgs32PoM4EmmYpQGvzrBG61p9DZNMRQ3Vo",
  "key10": "2uipwtx2cuyGPSNcYP9M2FjVN4HaUJEHVGQ3xe2wXSvSBbWkUwbU7eSYHs8MnYbu5cJhC6wGX95yKmUqLSt9R6w4",
  "key11": "cos5pRHjan5MNb8TMA3cTT3wYYUWQUZpM1jgtBFY9eVHNhx6rdeeK4oioHqfhTLXwLUefe5MHgM2YSnk33EgnsY",
  "key12": "5N1EP5LxQK28TCGHCmzwPPcJaH98Bfm1GxBzqrfX8tceC5t1U2Yc62zLJwKeD1rtubPyjGXhyqw3NecXwebuxJgs",
  "key13": "2qok6LYgKVGaHuEyuDndQbJ2cMsrFibcc8QTahpD6gTLNZ6gU7srG9uhDTnhqkKbDXz698JDVmuKynzW1SeUjP3H",
  "key14": "3E514v4u4ixTgN5cpDQgmRu64LhtdYUdzggh2h94aLGQYL88g3Pw8YWxJwGLTX2UsSZ9wpG5P8Hvchr1fQxozCSz",
  "key15": "2UhNMch1XYRTorTNwikfQZVknFZUCzYegVee3hsdzVY21nowDYfkoQawrt6YgB9NyQTW6W1fK15uX3XZVBdHpqdm",
  "key16": "3sQpXGCUuqn8joHarviJY1Xg9oGLPtiGcdmYdU3PRzji1XnhayftB3TXkjMgtW5WetMEu7KQYoZ7wU77ZySfox8g",
  "key17": "55zDQjV4tSf2VoJWtgL6J9CA6vaJhpiJbLX5mEJmNVkpL4w4Mzoz1m7t4diWEfxxt3PRmGDXunGkAHoiuVKCZ1ng",
  "key18": "5absXfyJJiYYfXSWhNGdSMV7u9z6hRksK94FYDN4ULM7xP8nuzFtEs9cMcyR8ujUxa8pAjFwtqA2NaNjQtQsq3rH",
  "key19": "64ZsHvEAC6bWh8FcHadztKn38fD2RTZ9bj8DUh3b46sm2xJRiA7ZDybgdjekkTs6hWUkNXsbCq1FFTSAjhX9gGAB",
  "key20": "QbBFuuVv3i1cWZqFw5XqEjKqfMjaNEmw5T8BvYXkjsa2Yfx92fV1fZuXGzk67k79a6isbWLRT5sNDby6v4mi94j",
  "key21": "48rVU6gBEHGAvP9Epqc4sgWyoLPXwp5MqxTvyczCiG469EeePhEef3yFJi8TZK9pUjv8EV7mqZJ3n8UApPxYQn9r",
  "key22": "RPoUxVqHke4Sh5t1hoAz7AQ2jv4fcfvwgC8LVfWy8A2x3bTDgPvPhFeRxeUZnwKgdKgCuy33bJMZmzMRyVwa5pF",
  "key23": "4rVUm2hsbg3iKdtgsEfB1ZdVhheSRSu8gPmifrYYMgpHhkY2Gqa6u1CgY164aWW9aLbd4HFq88JNVnJQzST2iQq2",
  "key24": "36wH19AVj6kqCaH8nfi22i9xhX4wn2QFa7krUkWdTAJVdyx67tmg6th3eZvsp55H6DaUXxZzQ2ExsSQxB617b29r",
  "key25": "9wNp1YW2jtD7PxEfkbS4CafkELHnFxQVZ6UvMZoHCyy8FTT9wzTEMsPMaEH9Q8RSvi3Lc6nkBa3XwpnQMrVGC24",
  "key26": "AJYePkeYCNx8tcNdLgteYqyfLfYuMMGMffy9ETh4HAxTmWTchonL5btP9FmBjhCMmM2czMWrtu3yfjwmdgDd9rX",
  "key27": "QuGBELVCoeQnewMiorK5GMvJdNn65UMewuFgZP8sB9aR7DzrZzWWRB4cn3aKqHDF4UnLAokH7NM7Eci6AujBDs2",
  "key28": "2jrCLKsmy3CQPrapPvmeyZRHCswsLo55SxFsowv2suiYx1su6RYRWbV4nqSeS1vXyPrar6ecjpEGRGQhv8K3ncmU",
  "key29": "54CTN9ht2QRgxS9JATnDu3mGxGD392njaSb7H5K4iGQ2KgahgudC3Y7bofGj8ca53bJw2eQjF1JZNPfEZ7ib9Kjy",
  "key30": "3N5rm9iZdBJhXVh29ST6Wovax38HTFXuemGvZwE8Vs5hqMUAhVBXUPL9uuTf4N5RxWAVpWZcd5YZ4oS2CtGU9pdL",
  "key31": "HBov5VLT15r8DPjMVkvWrgWTLaojU4FntR51YCQ4fn48JeTgQd8sHLY8NTbBDTWqa6XeqddRKAAKU8iYnmuR2RT",
  "key32": "4DhHWwASr8HgqbkWjzwy1wgMWsgheQ2qeEqSLK4XoASRhEELi5Bp9mjnTWKtAgmMSPyVJKboP2xMgTdvSpmcKQ2n",
  "key33": "58w43K1Q1Ku7ufTzj41cnkdWChvJTc1cLhoZrQhJjxuvwwkfeBBucFeXXzbWJJ9Bh6UFfBR8Xz1bypgxjCHQfDM",
  "key34": "4mXr7p2LAYinRivyMbuL1s1dkEtpC2hhcmRRhnbNt1uq74uxa5vyggLwZrG9Ckdszhx7LHbCCjsxNwnBLS4NhDkp",
  "key35": "4FuDjVNNZ2fdtBehupcpP9inqsZgu4AiWcTMk93R4jKy9pGTY1v4jQMAxLqmkB3uRNoPkvSKcbjyERK1rg848Q1K",
  "key36": "5UFV81X17VM4titPXPLyLWnGpheownotWVfTuQLHhafhzSZVPaFV62X1bdmEbJkcGzSYVxzp8P7zpDQE9jNRZVvD",
  "key37": "ziurP2wecdogES6Jx3D83DHsezWBJiASysMEqMKvCK3xaoqSzsmpKpd2zqRWqDk6ARyvQdF1AJEZV29ah6FcCMb",
  "key38": "63xWiJskV4hdA9avMWK7cT6ksnYGogneJegRp6zZrdgpLp7ywZXxKLaLc3eGTLpJxpCFVQYnVHQFaffpfwvbVV5S",
  "key39": "3NzaMwcYJwuySBft4PhcvXzsAjEkmxDNbWhYrybNAJwUmhvwrooKMck6G5gKVsTJbKh3vnVT3eqdUXnghHnzvXzj",
  "key40": "2MsaSRcj8Js4qCrn6RV213PgUfwiGE9nBuwwbmAjuZ7BDpByLZkEivPuTSbAYo8iwt1TmtEtEzjdU7sMTkan6WGj",
  "key41": "65JoHwJg442eJLzbcCE3zVp5A3Z7fdi3nsBix4xNa8kr1EHtx1d4bkKAovN12hNzxiQHmsH6cc6qS2GpuMzHAvfa",
  "key42": "4cnMxbMCqnsnrx63zMFemJHQtpep2mdSUgpaaxNqTqhvNJd54MYr1ToFa3fqzqfeTGv6K2M1WgGWkRGCw9YHHC3P",
  "key43": "hmZLAFfLSrjkhwkbDJwQ47Fyv8XXQigzNpidfZS4QUTTXUANeZWPm1Se1WdVLAvhbbGfG7L3YvJ47cpV9iUXuuc",
  "key44": "fq96PjkjyA1v4P3nCtmEEENvaTgAaAm3NMc6SzJXZDucrpG7KfCaXKbQS93eoEQMnTb5j6hssve26Wgxco5iQuQ",
  "key45": "CpharM2XVPokRPTqTs4PrfB2BMvw9d8aSL6t3ec6eZinyiMfK9chU2FMtzSMG7TyUKY1xFHVUngh9bFJn9RaLuP",
  "key46": "3DecwjfNfhFmy3jNMvRDuLkxDzZF757CKu123Ye6ivoi5PXdGhAMo1v1NftL9Ho5R9qyGzxYLopiubKjPLMhYzcP",
  "key47": "2qqeZ1YZEVoqX9S1YfCCWvkhjHwt3f7zixNRGRPmYweLZxsH4qWhVQvJ7aRVNiomJ62WhKGHos1vXJRLyZbDHd95",
  "key48": "kZMWWzYXGqrYaiuxn7rt7KZysfG92ULoLkR6J1Rq6FLd9cuXFUVdgWteboGAzyummBC8z1JpvtRec64wwh28fxz"
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
