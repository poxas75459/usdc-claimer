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
    "2fCvpV3pnE9okA1QGjKDHs89WW4kCxpbG8PqcDQ7JCw4CoqYiVBq2HLsJBuYNi5TE21QYVicHLrxHqiGm25UvaWK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YULjZ222rHkPxkxMZFAm7PnfxD22tpWwgRRvt155E6F8tJJhAnWw1HL7Q7D4XvENaNpDsomH2E96jZqyGCaAkgK",
  "key1": "2PwDwhPSkX3BUisG28n6BVVCzQ6zVHdokJnYaAH3rjL27cGe1zvjYnNiQ7VQh3DnxSc8mPXej82Asf55fs2aV6x6",
  "key2": "4L1wWJfNnttaK5i1bSjRNYJyPjFhAUcLb8T5YCB5cNgBL46asRaFiEnBnX211y7fynsZt28p3yYb7jwFVECrsVWv",
  "key3": "3jo2wYCmbaVnTGwmFeq1ULrQrRiTnBzgoAX7aHfu95jTN4JdYwJEd3odvEQDEiZPZN3pRpge5qFReHhuxV97P29r",
  "key4": "saXF3WFBJYrxXHz8AKrVs8NYtfCTwx41f4mUXtyyJXeaEnoC78w1vfRnXN6s9d5eihPwRcCg6xcU8PBgW7WuRtA",
  "key5": "5yFVFcLiXhvn2uGjnrzaWLy3dQkRcpAeoZ7vaSFmakgtqTcnXa6WArKzXPswy3hqReiyL1kt3Pz8hhFsavvV3NV7",
  "key6": "2QMFRUZh3dg6H4BxnbnkZNsbh7PbZHd7NunEXHTpRUNku4Vr9VodE8UHx4SJrW9FnJZGGMt2qLqiMRgVvRwDYiwm",
  "key7": "2dFh98xdGz5yazMoh57aFgN6WjPLCDpo5Jz2vvXwYVGz15Ee4cLAiLCUBhSpFSChuyVJ7oH7SXHqCsLFQ7FUqkgn",
  "key8": "5aU94aXTqjtfWRZ8rJ3qatg3rfu9owiA8tTeSjhUF2iWVi2G4APWVUJ9vPXUuLQSAhzAH4nmn48yhgQ5aS5t5UGM",
  "key9": "31qazy7mobVtBaEfscMKBMDLXj5tyshYD6PJqaEMiWR8yrDRu1gZrA7HDF6e3SZKvRUJQdfA1gLzaATb6wjdtwsB",
  "key10": "2q82BBDx872CJQPuaaBwhvpCwdq8hA7pEHHu4R3Pfgv2xgFd22MC4vMhURPNbCVmpK7dputZ29RpSsDGsRv2nVeV",
  "key11": "3H4ZheEKp83ocjna4UAXiik2awpDsgGHPSXR2d9jofg9xj41NrYeqrFHjeiQA6LLULYQueuS5m9GyiXPZ7EB9MTd",
  "key12": "ts4LT8t1dqFtGJmJgHeywZYKqskG5vGn81GcN9emtQpst1V6WzdDLhJaspCDbQrTuQ2YyXxgP8wHZ6u8nvDoULe",
  "key13": "2U8Vn4g2FBKTfF9i6yzEJsQ4MtDrQ9M2EXoupGdqGi6FSJ7LQt8esYAxYVgJHbJ63LR7xYboz3mpve6zXYbpJMJD",
  "key14": "2HtonzDDBb7kzG28dHih3spxkvekcmrUus9U96AooJULaycS8NZwVfGBD5TALNVSvp1vKjKXEVVRAjiExSVv5W8b",
  "key15": "5rFzXosZnAghKXqXHEN5Ae34QYULtAgGdFRCvmL3bXpo6KZyq3PpnS5sCDsKaKairyZ5r6ov8cXbf7AYM4teBMjP",
  "key16": "43wHG5kP39jv6erN48Vk33YhQfTGGhYTi9UFzpoTB5cW6QizVqpapvcewA7hNjk44t6xxzdj8n1FYWUYwcoxNKw4",
  "key17": "Tx3dZczbe33KMqAVQi6ZjwrjpTviQC7efpXTYWfuZ5xPFwKKioJ1fqLqiupTUihpDQpGVpaFT1PXuN5k9QYA92V",
  "key18": "5GbRYrF82JEZhYgNQh25KAMnexmWLQeTcYXL1Mv15zEbK6LjLePndX8KYcgZamap55ayC6PyCfPVCQXK4qx482bL",
  "key19": "cGkyxCs4koMbgVsofm3HvhN7szs6bpi1MYUJP46z8SAnAkFP6svk1dxBCawAtp1QsjU4VrqzMsEgC7yCoyDqoqy",
  "key20": "4aUBkTQkK1t4u7wUmq5yf11aqUdNdiiyG9YfsoqZBfQFuw5m6rExJb6peTpJPR1sc4gfGuxMayxP81CSufjMYbdr",
  "key21": "3WRckSfJEc8vBBBDG7UwKxckUUB3qJxiS39vukZhm7WVPH33T5nnLMU46Mw9DFu6FpMeZd4gfoTx84qckBEEtwom",
  "key22": "5JSYk3X8zqdKPwgRUPMGB3dLiwR63wcYF8zqWVs9f1wVxHJgniJNKvQvmdQJMvJy2syndUmNRvJneMShbtvstTnS",
  "key23": "4ZDX7vqVF3q21u1yW6L5zBbeQJGrqZREZyDmwTk8WCeRBqh2D6sn8ALBFPZorXyYfsdTG9N3XLbX3hSBrN7D9niH",
  "key24": "3rhTjWCsESHY1UxwHf2ZjkZ78ZF8d9opGTFKHGFYLmgvRTYjdAgjpsmyFnmDDTFrWkG7wXYrvapcqfBBFvKqxUqd",
  "key25": "2gBuws1RD9YVUuNHBDSaXtdzSfkkBxrbcEwKhWG6H4rrGQdKH87ikdfAVNCkPdxLBNTakhFt3KWGrMPPz86VFSdp",
  "key26": "35P4g9DQuHumdHnoHu9GVfJUUbY3ows2wmfV8o9fnBBxAucEYdxi2kDEhVjQ6Qi9JRGFw7SEKxCUfv9GXLURLWb3",
  "key27": "2isgYNmEhjavB1mRaETcDqNJnhyBkRcvHXzjzd6G46Hbra3kTmgKfZFfKV6ks7MmHX94kwxGcnwTAL83ydtvSzWm",
  "key28": "2znpcg8kAt5KRLWM6vqC8XV1oGFimhgXK2oewr3MfuUir7ZCtMsFBjdZgNr7RRXMLW3fo4UZQrX9x2txgzSxbPFx",
  "key29": "4ZZ9CFaYQFvu1o72D63byKbU6yW95EFFiE6H7MFAxDxNXjBJA54YVrs1Fk23FyMptXE8ZLftR927joR5zaEJ3E7U"
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
