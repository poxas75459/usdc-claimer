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
    "3eRU1sKdUsLi9TG8qgPn8huupiJjYBeRCUGDZN3LWQhtgGMNMbwKmzXramzbHww5z2pH59MEAs1zVKAFEDZDtkMY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GaNawWAvvcF3kgDFnCuHSFJsfeTxySZFQY6hsfgUQ6nJH99m1MNMV4TGKmPdJRP9BVJ1hHevPxXi3iY9LS2KPyw",
  "key1": "2Pkexdow9E2myabAViYSPNxT3wx6z5kTsUtAF77M67AvCGsZF6gqqL8QLTdDKX8Wbo4G8GvxitZK3AVf4kEwZzqW",
  "key2": "4JFWpatiDQAZP4kcFZ8bjRq4Gmi9pZ81C66yAmQLvipiTAC9FKYZVfmqajySzF4dfRzXFvyuMDHmjeepAzjMKv2a",
  "key3": "ZyRVF4DihRR2Uk5TY2sU3Ba1gaoDpgEzQZNsETv4VMjbXHTDRhkGjbPrWdedojJd46QyfJc4u6jnWiVzBypoEWW",
  "key4": "6XrCqqJcSx1vqeNCPEXivLASY8o4oA3dAKoJWrdYXkshFFiYUZ4QXmSNJioaGtb8QjmT1KUEa3FL7JG9FzYVua7",
  "key5": "4H4akk7FWHic5EJzNA3h7qW4CKLYmNzxEAUEG8mqVfdJQKpFNyvx25xuxFJSKRK1LsjAmFdcsjeswLV4JpQnNAU3",
  "key6": "4NEtrjcZN4ecqGHLqMqTFUL8u5GK6Uvndx5dcfhrzqHk3A5XuTFJ92k8eM86jiC6YVLtSLh4CpupTnP5yfRvTSCC",
  "key7": "3krn2oaYYAVqR8mWddXtzkqfQEkMwdNrtVben3XfC1EYaFyoCV24hsUY8NoYKsZpdr7DHYQuMfNm1n4JtyoVMpNB",
  "key8": "5Qttsw1wVDdURPEdWJMQdyMfraqb9Y8ab3uNQVi5cpTD5ERSR6ZU8ohC9PMzDchMP9s1FPuVUxqDsrCBc45BzdSx",
  "key9": "4rVU932xNgvzN7L79TmwV5TNbi7Mk9FzKRsFMPGiE2B1YzVuSTpTHQPpoHYHBSpJoK8gqHKjhRpyEw52mgKP5FUU",
  "key10": "XPQ8boJEEzAqmS2dfDyutc6EdKoDxThzzaTPEF4QqjnzWYzCTuAqqzC8QkpRig3bQxRS9KoZiRA5rsQhkpGMQCa",
  "key11": "4BWfHdktRFyst8cmZw87PvxqW8D4KJ7jvVemnPsiNgxKkFrPtgNdDDLArbjBgSRB7oYJqEGSRGu7AciCaGZ5QF5v",
  "key12": "RMEhnbr6c6eR8D3HWVyGBk7J1f6WA4wCBeQ383AfGLRBUrAVrQsqZ1R24eR1rqCPZxKCgyEn1CNPChrRD2mFzG5",
  "key13": "4jcuXAt3e6DWCyDsvkpmjmhZ3LvoAsL2xPhmBR2nNVzFhv1nRrjHGVtkEVVhmWEgTUPRLsQFqqn9GvnrRnTSp5bW",
  "key14": "5Xt6vJwQF5L7mGtCLcy3ZrELyi3jbXY1Uzt4QcgnqTS8ejQmg8EhSu9myPJSDbYRKRML7eMnxUC1rmeNSMD6Nx5t",
  "key15": "4cHJTnCZ3QLpEKQ2nkVTPU8wU4SkepjofRgjHh15hpLjuFuUgbbkeYmzYQuwsmhJhZKznVGtYZqdEeyRwTMEnrGu",
  "key16": "57xxB4DJPCCzBVtANfsErMt9zbMQfkCaQ4mTHzRt5emZKgzJAummCo57BEKebRmwn9kMEhAbRh46xoskv2wdAxL",
  "key17": "3yfHAp2gCBZJChY8AWJ56Tctmv5u8MKWqJMUnAtfH96wVjqVwFRHVXsaRNMn5fwTKVP9As7j5rfLFZvCXLowBwzo",
  "key18": "525R7vydd3Ac1ypymyVX59ekD9hnvPYvTdpBHe4jHaL5rf3oAxcnrQqUj1M54YZkNYdRk5BBLQK9kV6vdniJm1mb",
  "key19": "Mr9pzJCGDqcLvUaLHebvtWD93kZAxuA8tpDKwn5bjPSdnizFprg4jiTWbYAvfaWw7p4tevP16zJgELFSpXkS1YQ",
  "key20": "3wmoi4kdPFMcMDAYKDtPV5yFmvP1GNLKHtqygeRpojjspdnK3Q9YxX94J6sHYai2AJhafhsj7J4XyGEjBteyxDKU",
  "key21": "3BR2xfn2KAcQktiCYDqjowwu3uxN4iWwDgPx21dP5KdUFXRXVsuQbboaKXSE5TfYbmbj1kbTSygzFgEvZumstVdG",
  "key22": "QSTJrWCqqSnHxkobTSeG9VQLvMfhWGfgNY4kyFtVkQiLhdJujecLkEehrvPjao4VZDeoxtUEFEB8kZpr2HQ1bNM",
  "key23": "NEc977c6fFr1Nb5bxxv1V8TdqPXvwuNc7H6LLBRPkmQShHyDcaDWHthYnhGhgMeyBAsyAVdeqfrkZxd4QJuRW9C",
  "key24": "3NUjyXVq5xvofZzidUg2QNAiNKxFMy1RvQ8ZXXwhDTmNK6A4phyxu36tN2AXMMD3Nd6H1TJfPECegjiHAWZxqwaC",
  "key25": "3mx3uWzpJtzmHe1dYj7DfUCG8D3GhGkUYzLSGKUHmczVuvbihkXMkdddQAUTSr9Mw67CAgxujrDvBXQouq7k39EH",
  "key26": "4hCqtd6mvY4B27KSLMLU3TVGsWWeMV7SE5u4uPP3bf7Lomh6RmcQPi5e9ryzzT7mYZJMyi6vDBSfdtwXnScEi2UC",
  "key27": "3hgZYazWDGESG2CoMqU1F25duMy3wdzc5Lkd6DmxQfP18LXU2H4YnfqBSA4CVW7wcye7xhQWwzVzNDNrV8uQqN4a",
  "key28": "4xnxVBJ9CoHA1MMw8KGcHjR3duwvZKbQKxbkoAGZ9qMxmFpz59PdXTwotTJ1wkCTFoh9m7xQnsTVfNBpKgNaTjuF",
  "key29": "RTqH4f5dQEfLrGnJpQigDWdKXUi4EXdd7gPHTzq8pkLezu4CLxX6Z6wsUGSDkuXXxPkhRFT5ysgooddxQywsw9z",
  "key30": "3GDi5Z83RnsF6ExDdFskXbevPd6QTMqcU81GG2JbVENQjwev2gqgBZsHSE72QGkqtLvf6ccNUVRqUhz4HitT2pdo",
  "key31": "g3TXSaWZvon4TvZA439Gxvt9pVN2oe3Lp4tX8h6TFQXdwq8GhjEnUCEufTZm8m6Q3KJwakEeNrTnarS7EunwnXv",
  "key32": "Y3rXwoPWezhxmzfMFVRJ1KQzk6wWHn46c2uudvWU8672CabFDfBnBKGk6HDyGy9fG5JCG3KRTuBss1CTeMxCf7d",
  "key33": "23Zum1vmkHx9CuVA2WFKMfTpsYi3nJhSgRVtJPkuNqUaJLRL17ch3ujy1mkRu1mPuAVNp1Bb1gFTaQe9iQ3MEjiD",
  "key34": "gjjF4rSRxC1neAamAcXXqkoYAMJr4vz1CPWFLLoKzF1XFfg4rbM4ixsT8FNzKkuGL9ctW8b9Ro21N4h42AwQT6k",
  "key35": "2XZH2KsdD3KdBBmK9aULqe2FUyFN8boQVgp1tH87i3D38aknu9vASWd9H3HeoWAwu9RabkE11kzauqfchVvxZMnn",
  "key36": "2MmVwGy1GLML9fD837yr6QXQ8STBKFS7ZqhZzXSUCpPAZt1ti7YErFG9rDzbWXtuvsvpPWhJ6geEUCYc8fWPEY3B",
  "key37": "VhymV98uqGPY4oynVX7cv5MdvFdMaPShfqCkis7UpV3fzqFvNk5XnXDTZrLcRdtdyF2ELvJuTE57d33j1eLqp3K",
  "key38": "2Qq7XApAeCkrcXyHqdHTPBf5dFCBGJWUV9WBPk36a5tt5UW9G2mVbckSAJ2LaMT9kLRGoZSJ6e69nsZpNjGnu2Q8",
  "key39": "2gpXwtP5XR3dRmn3rZPCKJvXW35dxrxr5KxaQJaiuCJHjvArN3Lc7r7HGURMk3ojiGLL2r7JJRmFBuNGtmb3UXka",
  "key40": "4BVDphs5W9Sev7mGuYAWL8shsDCDYRWkRHqyXxtj2kaugedY5kC33NA2CKTGfWVCMPXcbehvhyXn9HfULZtsCUxc",
  "key41": "4nGZeZTmBMkZucCcVyP2DpRrPqvaPnjvZDQwDNc6qjhy9rZq9KZmhWrRLnqKvvUAiZ8JfnWXbkYbscwAGy6YrZmf",
  "key42": "4Z2KSnQVortpVD7jbNL9XqVUJdXh3xozHjpzkkw93MvuUPSunJtnTTX3oXws29yMGiezSWRQPxNbbQ2XEZF1LyfQ",
  "key43": "5nzL2HkR5bqVQux7TXDra64wsJ4RfMAsqTeYUtiB4173X8MXfkB96LBbPg1uh3mqjTGxy4JMFdSVxUT88mGAoiCL",
  "key44": "5wTXBhpbLdixcMW8BXwMWbCbXvHK4vjZ1xCiN6FsKq6o7nqS5W9Z1gsaXdUgyj2jN9yykA5JY1siS64vfhWDb2aM",
  "key45": "2Z9jk2t4de5RuUPjkHbkYDct7YVqwAWmbXrVpoPxYuq3QNHEKGYvybAF4MvS9e5xLS8KVXqxdwEkkyfiCLC7s9a8",
  "key46": "3tbm3kUETUPp1YMw85yetwkFxoFoNLMYbZJCqMGHwWm4GJyjbipGaimRu9VAe5xEZ3QFqjGH9RSKWD6Da8XFM5an"
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
