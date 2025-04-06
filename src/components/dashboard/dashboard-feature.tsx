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
    "4YMEPTWVd7kjHLTGBDeGv8Aho11mgiiAGvv6CUcPep12TzAZ4RReATu4AA33VGm38tvcbeNgMyubxXcdLxWE9fK3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vvCRLAhUNv3doo9ytLBZ7WWZFJ7ayQ3biE8MWbPDsNHqbD74AmL3TGkKGRvNrLyfV5xL9jiusc8KauQ6zqG3ogX",
  "key1": "RcYdKfQ7JAzfPWpfEWBZYUmaM2eL8wR9fhUHnV8AQRKXRz9t9jeCyCF5KqPEn2Qi2G4jGedRRjUopJWRWGYMXQx",
  "key2": "63z3tSKqpLqr5YDUCnyhcZsAKrMtXBH39E5bR5nzGnsZAQczjadGMKHw1MrEdntb6QMintwL1TLrMMrYGrZi3jCj",
  "key3": "2oL83TweAwnCV1UaUfi6pdWUgkdPFa74MDwoLBtptxBRyUuVRKbdPDZXsq62wq2oYspNVWEe6bqWWviWGXN2AfaC",
  "key4": "2DHRWtEC9uM5XudDZPWctA32hzZHjWQRBr8Cbhc9RUiyfVdLZzuA65rSKmVBTk9oQpWAeSx5ARBfH6H9Py8P4Zpu",
  "key5": "4GWHjjGk1mg8BooRKFPcZTMxbqBbYR7v5nZHTREXaupEfPkNno1qM7UQYpzdB5qBrMMgNm6u7t4w9LerW4V4772A",
  "key6": "5cnHToU1Knfrwd2wzboLfc3n8LPGcon5Nep4JzWQgjgfdtbDg6XNHuCgodFVcsmYGdohxiyP7iWwLAAbYqomW5oj",
  "key7": "5zXj9jXxmmSUbN6daa9Xnribv63vvEjTYKXmDDeg1dCqk3DCaiNaMkBmwBq3RQSoNyQep3uzwJBVhfo1wGN5YiJn",
  "key8": "3yTTRGJBfUw5yfUK73jCWX23z1ihXE4QuxDjkfCeRQ5teQyzJkQ7K1bVRp2YVgtj5AQtrbNrUNbHmDi8kMR6CGa1",
  "key9": "5nV3kNbni8w7WJHjH7TUNvtdcU3KSAwXLydmWFKbNKSjcErd8mSvZMfsGAFPgeTT6U1F54URrY6CitEfPU2uTiLy",
  "key10": "4pH8zpdbtg2n3BBMF6hXD91Nx7gQKRCK9hJHw2N2bqrsz7MabB6xzCmnhPWxRy5iKZLFi48uzYQY7wyJuwx75ka9",
  "key11": "2rtfqcoRN9qnPYKaEQpEipx9yVhmEuffdd1k295mHGCUQjwYEP9TWMJLhKqThsRbWU4YyK2G3DbvgfW7TXQR8AJD",
  "key12": "5azsaPPJuARqdY2FcMDRZ8KVV6Zx9mDXuP6qSHvBq4Aj8oXrReiy4De1PzLHTga7kKVeP5E2BnuxBA9osUC9wBjK",
  "key13": "2P3zydRQqXgnQPiKo9rhNQ9qc2uwMhLh55qs3Truh8kNX8gP1XTVpWz4cBhPCEfZiuAXqaNggiN4LUKn93oRx2tV",
  "key14": "JTSkLYsLu6XofswhjYYHjXaNxGz7QUCpBnhkthQRbqNatvk5anFQHVKzRsAJabZSznMTmcQrWYbktwET9UYjGLZ",
  "key15": "ZkhjTaSLNG2WvwUCB7HkzVGtRwJigD8NPkMkPBXGXgKS3KSMu6g3rfFU2rc5ZDvbJebxEqvyxkSpB1woYsAB5M4",
  "key16": "2VBY69c1MBiJoZPjmT2j4ZDsKSmVY3eX6LBzHSWxPQ19W2ASEtxXMWjitcvM1KWTU4XoxjPWZDr4tFALZXiiiGdf",
  "key17": "4mtZT2FRJsmsnhGp2CMqhFn1mm5Zbp14UqJUGkiwWBwGRSDxM1rDbvGrm5r9hgDNQ3y7xzZ4ScKznCJpsyJ31VGk",
  "key18": "61vTyAF3CCMZippnQTT3o7YNhvvQdpHxg63EJizeevgTskQiyDxHrDZHeDerxam3AX7x9DWx6ALZHNsAQWRTJRT6",
  "key19": "3WWMZfqyta9bat8qQ4UMZ1npWoPrk74W9QF53GFaZb8zjNNSRBwgAYLKoWh49qaxq7wBqLPBVB28wmKCQLeabPuw",
  "key20": "2WWyVSqi4yYiCrPZyjB8KbaT1DNGhqFb4UgRZ3q6CPQJ1XkptzsWsvDD7iAQ4BWWLCQxVRnmeqJFGn2VxLp47BrL",
  "key21": "4NA8zWPYP2grqSPWNiD7kXkv38vN7GvM6GqfExWsiTTi8yEVXH5j8yBP6g85xNyHwavriGJquKQZrZ4sCVXvhmqr",
  "key22": "3wtMb1tU39fZ7bidCQsVvFRkhoPBByjwuNepesdWpLNsTodzYeY8vEB7wnDaua3hTQEf6rJ41FjPGYV8Fr9eQVrr",
  "key23": "vvtuQJLg3EA8vSjFrT559oqvM1atxb6uiVxdAk6bBqw5fghSbqWKXwaiZzYKjYkWkbP4dSVDrNSPJryET385YUJ",
  "key24": "oCkkmHCbzVKPNFD9X4CP9FhGo7bVSmXv9fW9NVRCu8NZ1M7cbZPdK4BVeQKXijTjsusbmfGwoXA2buoLDgNrsg5",
  "key25": "2hbAi8YYKpwQ4XKw7611qQAPVsT5oRqmEUXCdPBWuHoUcNp7cteYJ1FkjoK8THE4XXNPTyrWUvaESWxSi9z28hcS",
  "key26": "vWJMHBQV52j2UZEnt1qxYWxUmWpqaDLq7jEMr7cE21oRGEbXNDjCKS1NuzfmENwk9jVTgcZyQHR92rqAGXVtqfZ",
  "key27": "5FCQxUyRsyaKkthNj4eWdhPRjECH61gWXmVg2URBMiUWpoDfhaLX8giyB1nfJcs6hsjP1UeKVwEen6GyawXrie9D",
  "key28": "4StSUHSd1GdpfoiMbtQfamZEiUiNdSE8JyKyj7sFbXnhXy8TjP7TkNDxdm2odxmKA3qwSqcNBnYzjQprZiVoQrEV",
  "key29": "4upX9Q4hZd32Fabg86unudoive86mTZ57doiZSwxcWjnspCtt7EzJKLcyawGNUp35yr8TYP6Xi7PFxFjkS8zEoGh",
  "key30": "5TcPD4hhvfFgmHk3dEpFC6tfarAhMJZemqU5gzq5BpoRiccxWJdE2wEdPvFB1j9JXzcP6TTt2fi8NKWMnmWVT2q4",
  "key31": "3tZqtHp4RukHetWRN6s45rL4WiuTKUsg9Ldx13zQasPygVuknzqXW3DaUCu69nDNbPcEsRpsQhUUzBLXnnZiYTjv",
  "key32": "5uhbezNDFEkUmqeWsmHqbtstodVPYGTD1udCZJrLmF8pcvUbPSweC1ZNEjNDDuz6K1dxp9AcTcWmGUtVJfazQrqP",
  "key33": "4zsxb2RBJo5Gd68eLrdgtAd1CAHLAmwEUMKz6dwpf7iH4StzezXPqDLJYvhd55WNJY82QtsJYi7W38F7D9623wZF",
  "key34": "5zsHe7K79EEaABDKgLYUHGJKBU8Xj423z9hzue5F3te5SB9zjoyDLft55AKRAiTv271rstLyNqKB18n6nS63sep3",
  "key35": "5FJbUWNVgmjwVeNHEeJsbRecGn7dVLNyRGPkxy3susyXkv1xYhNGdw3BaDQ6D2YiBNoQ3k1TfoMiv2JJUBwooz2Q",
  "key36": "2eEx2bNSEBDMVk6A8EhXdkWpktZwG7vyyyUd9TdcgQEAEsyMd1C2wew7wadQ4GwavKKhpZvuXdxyRmD4ZcFospAu",
  "key37": "p3nPUhp3egRLJ35bVxSWSXFKjyosTCphwySK8rHsNY49MTnh3hQouSUzNG7rzS5LrxKT6K7iCXmF2cDhoT4HKZy",
  "key38": "3tYTFup4Ai7GEDZ6orc7TSiuPoAZk5c2aueZCJpyXrSGTPKNGZ9rRWkKStVu2E1oNhiD5KjtLQp542MUwEnbV9oh",
  "key39": "3K2382kvnffqHhxQ6MR7L7am3j9VPdsg4DKwkdc4k1nVsNu3ushWZf3BG3dLPvSYU6i1jxKBhcvuy7eya9pXEihJ",
  "key40": "3tfronxNgBSQdqTQj1j6XgJdNU28Rd1jrRsdY7K5fF1m1fN6k7L3AN487rghGL1X8xg1FdibysNBJSAzBMZhs3Gm",
  "key41": "63wJ2RuPBAZLbgLenqhCS12ijX9VuWimUKnA4ryvxRVZvwWUbAV2Py1HFnMBqejoFdkMPVGCcvPTYcaDA8dJMkvT",
  "key42": "67rKtuCnFjijfDLdLA699enKvnfpPMMmDhSsexmdYUsG1ZbLqpZMYK12F63vNTG1zuusZn8mJfFbZZpZN9deFWD6",
  "key43": "4TS6dpbRYD6NvsZA3T4xReeMEwRKBnrgqibteFonELy5QwLsp2VkMa3PV4GzjxfANzuJ297Ep5RxrTT11B74QLPT",
  "key44": "2Xg5RRmk7LcfBPGreujpfxAuGygytTUhsuzHj1ukPiQKvZPf7NmY3DxJwkinLKdfbYpAz2hKdumyuUngrzGoB7K1",
  "key45": "3SUecDj5uDQXu3XZ3BKbGWQuEqZhme2cc2b1J7smpmUEtjtkEkwcnsdVSFauXPVsDZMgUsq3bLbBfM2BSy31L1v4",
  "key46": "gvSiSro4ihdawkH5UhgGJczxJwHrKAsCH4HUpFzWp5w7jMZG2wDaU5Lkwc31Lqyd9NTRiJietovGM776EiCrqDZ",
  "key47": "3HosCzDNMPWWPonwwx1XX2EjC3TztZwaejnR7JBavPtZkdSB1qmyRamnmCCHVa1uwDx2fkkEE6MBJogpTqfmh3Yw",
  "key48": "4Y4QL7wZ5yV45T3n9nUpY139cxWJGgVVPLvGH4zirtJxnhxHZyVUQfJ9myxpWqtDbfRj3mKzhDDr772NGiajXDbP"
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
