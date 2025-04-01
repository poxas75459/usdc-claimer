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
    "2mPLHd4gPjdAFx95Ub7Ui6uwFtDRYdsYm9uCRdbhk7mqyk8Eh9RbWcyCML3g4YWwofinNGCistRpvYu2PH4R4dy6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s1JbqrgPtgsfDPu4mL89LmYt5fevqnGpCn6tUcsnHFKhe4vPUfemzGk2xYUds7zfxkuQdRxJKPLKHzfPXEE1i6F",
  "key1": "mtWrBeKPxoETVgSfeMmhAWtqtUBDTjB8YzkFTbS7JehGwcxfA9GdQ2uYx9ppFFtJ267cda9CKa3EHTUyKM1YaBD",
  "key2": "5AVHhwAfUBg86AGxnhV1dD2nYLcohroapiSvmdGRTD3DuSjwbeSwaEftcU8KKVYf4AhU2veBaG4wgnk9vpfgGD5b",
  "key3": "CcrpaEbCZHKzqvRfNwepRPxhpxonzbRAE4vHsZE3JAK9RB6QhjdrRnHLJdzYZpobFXqrTbp3jcYVYZtJLcSe6kY",
  "key4": "2wmM9fyjLVojvYjtnCXZEhs7NadXXqi7C7sFCvoz6JWNZi3VSXExfRYS133C874Ad7GF85VQ4urdsFcFE5KiwteB",
  "key5": "KJLk9ZPB5YBQ2XBk2pkK9pkDUEMeGnkaWLy5Z33vKBhSc4uz477YVPJ8J13kM9VKfAq6TmgYZHLo31H6Lz6K7ev",
  "key6": "4iyWRdinECQ4bRHvR5eAfvaTmhHSti885Et2w2CZAhVopkz2J4WSh5S12qp5A6RNLRwKwJZnQzQ1HbMuag8AMvYD",
  "key7": "JFVoBWv6fNcrMRAqwjTSsQnWJFW9xXKZtwJWditCUR5r9GVkwnyAFHGX1YBM7pBtZkoXDFQTigsqg8aCMzuNLsq",
  "key8": "Xp4zSGNwKd1rDxxLaHjwrn6EackqNTExrpZg36iofAcbzF5egL5RdcMVsRNjDYCXS7W6hkHzxYC9TQxEXpMtJB2",
  "key9": "558Mnc8tSd4xEnVgK2DTL58612BQ63ikVeLiV5YgxfwCwumsSWjNUTM4RMd4qm4hCRgdA1ahnaPpc8gEUUvWxPCA",
  "key10": "yKcF9UmTJN6wktGwN6M8HRXCvCDvojBo1NqHZqY3oebWqQBpsEdQfJyvGcQEremato3LoSugQ3ejDhfVv8Ghkgh",
  "key11": "3JiNXBHxUYe6oew7L1BfZmPbWDs51iPYRooTs6p1KS4U2gff1tt5P37E9BVx1gDDNy4NvQJjRiYqCF5AyyhkVfxW",
  "key12": "2hU2GfWj24aESZZVNd5Yy9VaDiPHhDijb6BkxNoAfEoi8GTHEa6NU7jnkxv7NjyuXrWvv1U1gFtKQtKbJcxkg7Rd",
  "key13": "e5WMtsfkRdcZwe3CoqyTABpuytujtnnEg28WULE3egpdgeUT4ZoEKrWKSx9Mu2DyFGmS1FfSo2c1MoH62rybAx8",
  "key14": "5qtdEiBACHrePimJtujLHCiZNB7881gwZy1RrLgrnaunw6HhFgHKNUH6SdG8fadqFGD27qugbsZx7YYgcmPdCeBy",
  "key15": "fTweYpEkDgRgiPpdsfE2T6WG11TBStxq3MmB9bJE1XHVYTdnBps77qdR51JGfP88NgkhBWdqPF3eQKpRN8HLB4Q",
  "key16": "4NW6W1oMnJ3HswaDfrnmhciJdqNLr5eqPUxYtiCboJytn1P21JxMZp1jHjAAeVH7YEiipGA9zEDAkn2qcA2gtWWq",
  "key17": "3hiPfpQ2XaN9hozKQvLJAvCKFZjH3C5TAABt67KPxW3dKH1uYTDqUnJjyoroNQi5G1hLVLw7jyQ2RsYcHLgdpgsK",
  "key18": "3zyCDrJwrGcaXrB4PC9jbz8MKLEuc9RVKMGtkPaP3PGdbtjMLPxgfA9J1RRGb3bTLyP2oVrGH9Kp9hAfvDjEq5uR",
  "key19": "5oyYna8AJZc9RZPA48Xyczq1vz9FmcBAXUdmajm13WaPQ2aJqtQnKQn8eQeBJwRXUcDHC983zNiLi6Wbor7HRCfW",
  "key20": "4s49bA3XLvQwtSzwcVFWMxmnq8tKuRmGks96xovaZqW1mCcZTk9JFb852GWTtF3nKxCmkvZpFP89iqCu358nfN1C",
  "key21": "DPYxkeiLXZMeQHcEsKK5Q2sKvGY9g1KBDCCpkK15kFdsFNfyP1TGUn4g3uHq2FM4kAFv2A59ui2aR5oL5NJqnLK",
  "key22": "37EaDijNcX2Q7epWSdFcMxghE1iNEF7qczMmiboJhLtBSTRfgz4HSDj4zmjSptdVYwdMjpakPFGvVXRsKguyKrGQ",
  "key23": "9j3F1nnKTzYmsyeAfL7NBNvx3Pjq1V3uRFZCqt3Y7pRvg9J4brrUy2pK8tgFkpG8JyfKv3yizzuRj61V6sY8Az1",
  "key24": "2oxRKZi8jgAAT1o1AFudPgDCmuEfByKuGyU1cdTuVLSdA6sWBg8CvoUMDv5Sh54vrXYYKajBP7LVSVWuQrPSuChB",
  "key25": "2Ypf3MJUFyKgCfvwHaRZGRNodCeP4eRgnrPzQqyDnxTYDoug8yFzpHDHxmLU83AEADewzhH78HGyehurzQc1NSXQ",
  "key26": "2ACNjXKLgWpmPFmCnZystKLDahAA93YMNBxnZwoeYjhXj96QHZmaqMWKXQRV3bzGPnGfqVLBu7SzYHD7QooCX5rh",
  "key27": "49w2xdUEF1u91zZW4Brrecs8s8jqujkfP3FvYmVzwhgMeaZQv9q7EXRZbYKf6X2KYYZBypypnri8EyiUwCjoj41J",
  "key28": "2aB6UrYYRK7bBJjPY85puJv7Y8TsSThf18a1ZUQMzXzSP4NscgRhVFt5MYjLVnp6cVQpSdf5agjbffXcvqitJMrP",
  "key29": "2yrVbembjsXaK1NkkJZ9SSWef1F5L1EDJpa8oRwpGaKy9hfwcGXctpWwnPDoWEKyRC75ijenmtbxPk4vJ21P1P7M",
  "key30": "koDkNdWDybbCvc72hXZpaemSrUEKijPzDDqKigBuGssCqETcuobGBcLFjrqDhppwnpsj9tSwpiyQHrEMvyYLtA2",
  "key31": "5547HBKzDoLZGHn5xJ8uuJyVnTZeSUeNs9tvKDBXn8Rjzj9ABHNDMGdkvyp5nczZL4gkpz12yKY7vQ8Kzn7xZAyd",
  "key32": "9TYJWjPQRQJuaqWq5NrJVhVnmz2ez5uW3AtAy9Drfr8eM6nKN32zrEqXEFLCJ8FNfytRLzvFJY6PHx12fMhTpBz",
  "key33": "XJ5dVyFUrNi1Ra1m9vuEFtTNXkGzymCQKubgeq37tV7YWKxrLs8rpM4qtWubRDRoMYFrpfxhDGxiboAi4tgYvRy",
  "key34": "2DiFAV8V6YH34yPre7yQLB4KUw2ubGFqnpdx2GEg3f1Qs5CaEtBaBG9mxa2QqeUNp2ggtEksv7LC4HdfAMmvijor",
  "key35": "53vXXV79bErutJXXLYy17b3fB7CeazaBAq5waGYHELu9Nw78ihJibpYmcHsU4DXpXA3fBqMgy9ysohzejPj7ngNk",
  "key36": "dKTnPjZ5rw7p3iLKdXt5fckm4vmfqdN3sWVGpySMqbvbDs6VNAWR7DHG3gkjkiYu9RE8C19nL2TjWD4VfvKTjT3",
  "key37": "a1GBP9GVTafnnqZeSaBswFn8CviQog6ifGy5ztQgqYZR4JyXyKUR3GSfCcj4oFVn3tcASPQ7GUZf9xfPTwGMPwx",
  "key38": "3DjfwWVCHJTRBVxJzgtCHijgqQfpcqZDzDwTmNhn3ouNGwqXmUKqjBjt3tdj6nk3fw3u2qNXBnrKBfqCSseegxGg",
  "key39": "3zrBzCo7YPqSYkvmXEJvZCFU2YYwA1JbPCa7NibWLM2Sv2errba8gJ6tuBfCCajX62ZYFmsBp7wY87szXqXdrUdF",
  "key40": "3Z7wz3uXFx4jVSfy3QJWJatHwKEWjEihWK9Ci6DVRYecwLxY7fZUgajreY2YmrQrNJx3GtteWLZRQeEAJLLmKcyv",
  "key41": "cYqJW61uKbC5F3dejBMhbbyqQiKyMQqJdtiqytSj1aQWjrHWbjBNhx5hLxbdM76R9xjncYRz9uchKwnx3seEy6W"
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
