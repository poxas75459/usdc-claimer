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
    "2RZijYvmNePbMGkJ86KbSKJx56X5wYBZFNAny8XbGLFLwCHmy4eCUq6KMVJCjUFiEFHpJ38czx2BCRKjy5WpCir6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fgcbtdarmfmEvJHwiA6kiPduwCdcJAm6Tj5MPrw6rDVTCbsyzrh3B2nFLkH2BqT4qnpn9yXDug5AppiZrUiYrZf",
  "key1": "53SEiN7YGgXGkCDevRYwQ8sosc8zbniSDBfYZH1V8gMEuBm2sXeL9EQcrTKqt67rf9gT5rkJ8ML21bfUXWoWr2MU",
  "key2": "2N8qhvcjHqaNtzXtxgrpdMBX3HXXGHYSJxsHg9CFBVg4QPdLzGrof7AiBsRAA2FTQgjRnrrTxZzpKMgXqkqmGiB6",
  "key3": "4nqFHDEEnGZXvcCiedyafpktszB9XvAWwJnpoFXkNyrp9wWWYbwpLDUAwaeNzuRVfWwfkeoDHE2uXSP7VkGiTnPz",
  "key4": "oV2kYfxAoQpM67yfswMaE3spMmMcabqtGafyKisyeoMfofCKsanE8ABszvF98dQgHoY5gHE5xvpoLBtn26y7B2i",
  "key5": "awkA6emkroqF1mrfiU8gpZbBECgHA9QsSYZC991czmd7dWKVomEwxUpjLy6izCLstC7rpL4wtN5SKuhn8gn1XfK",
  "key6": "5V26ak81EYonncYGnhKBJRtCNg7nUH19rQzjgegaQUukSTaFL2FwVzSk6nEy1krnZ7jE6RzAqirGqWG4v3soypSL",
  "key7": "4VH3vaZ9vuEqemi1Y6DnTR39rgi6uwNEMPkTCiMehtCqD3JoX4Ba3v83wnpUVvGbotiHwbXQ8GnbTY4kreVYNjWn",
  "key8": "4DarcqChbSn1wTB7fj2fzfvJ9TMFNdL9B3XDT713nMqverN4dvXpe1H7PrLqiUFumagY2TmfMMmcJrGfLc5CNwzP",
  "key9": "3JdQqqSmRHvHB3yhPQ6qPBsg2akqr1JiN7E2672vFyK8xdCXm8mox4WCfmvPRTbYKSwcXNYKrA4fPw4G7H1RsjfY",
  "key10": "3QZY2MS3AyAWzVNQb5KQ6AsVQDDXFPmUyQ8QptWrEdaHEJpXe8RFRotFBnvAssgA9Ha8yxML6MopbBvhZHrXvgay",
  "key11": "Dw3Tntne4oionDB4cnnQbX5Qw7XrrKnFGKfGVq2DLj4Fjn63h7kEfDb3SYoma4h1Q1dKMDSWy9EG9RgJNUzLuYo",
  "key12": "BQpLpQQkQCkkRrvTn32U9Eak1dCzyW7y69vwpkyuTRxRJWVQafYta6fghxaNooxYnMSYfMeJSBKm8d6LJoZSz1d",
  "key13": "3T9tAaswkVdjCzJn78PEQBLMbQHX5GNkF1i8BMAKvKuQYVA3ZzTLxHzNd7JZBPeopDbFSkekASQYacy5q6E3q2KB",
  "key14": "3E8b3J3CXNpMfevrXhect6bQer3UHWdQHd9WkQ7ZcdoKccPRKibFKg5Y7QvGxtpoDZSBY6H11SKSebUWNSCev4Uh",
  "key15": "3NVky2AXmdMoHSWgU8a3xDQNuoWRZGKmeoZz4GCMnPArL8fLMkV5tgKDog4EvrFYphcSyYGWLifibnqTZVJ1K57z",
  "key16": "3tevmdiwL2WFqXJM5gymBhekBzLLb4TbvuZAcfheyhyqKVMKEsUhqLy5GpAQvG5reKqagSg88ijYQvFNrtW6fvPZ",
  "key17": "4jqbhPbHgUTrsMSF7NDMmkbzPMkNKfTVN8KTWW6hw8qaq4Pjscvh5VV6b5S4svX3cjBat4rgH7xQtCamnyZZo1Ud",
  "key18": "2vn977xtyQPU8JZpyNRYewkGNZtkBWJGDdtyDvyt5Gv6qVxRGWrDfHKQWnuY65xnc5Vn2dvSEg7aCaAzT5fgan6K",
  "key19": "3cCCGokFuCvjrcrNXk1JJKcD1V6KnGSQnaqsedEja8p4Z7zVp6tJK2bRfMtdUzgt3dA2niDyAri7aV6Lhv9YeHp3",
  "key20": "4nrudVuBZcPt1Q7UEPwxTZpoVGjZojrBwty868P9LZEJVrcLteUdzKvuTTpLUBpF6TD7QNCcUEobALj27PjMn53X",
  "key21": "4JYC1LD26i6rzBqCsPLHcXyE4eaVqP2sRM2VWEtRV9XJje1yMgTk5rXed4VeHN8VDqWiwukLYfDzsLTEc5vuMhg6",
  "key22": "4Bi5pNpHLDkVmBH1Qfi2EckxepDF6x73bNeBz8cLNfpo3ryak5nFa9vdYhryEZG2nLnGVWsd3dnG27BQschV3SsN",
  "key23": "39LLRjn78eAftEPZm3yejoAnFwYbeAwS5qXuZB1vRDDXxMZzW8jPQtxQk3WDqXBwrkHwZy4i1HTKKmD2HyYjJWTw",
  "key24": "5viMdZSLQgnutLv7RGFM6jd6gd6d86HkhCvqNsQf97uKJLExcVGTeAjd4K9rsBCW7pvHQ2kdkrnEFbJgoFfDxMB2",
  "key25": "2BJWfdZBubbVxx5gWH1TUeJmRDYLR3SrE9Rm18Vv6rudkzknRTrtFKC1qxAyj6HRAajdJr7XtsDUS2dPgJVth1qk",
  "key26": "6DpZ1vyNV5PQHiQvnCuBTGYMMtSaFoWTxdqgT8cKEmLdEeh35EH1Ex3eifKzWPEXCnKxvNopYKbV9kWKz52vtbp",
  "key27": "4fxitSU6CwYobTqp6sMjf6tddExTNj7QC9ZnVZjTH5VEVzb5Dv8YFyxLKEaGvhzTzS9fuH92XnJjHb5E4epyvN5K",
  "key28": "3S1Bi7utyR7CNRgz4v4FGBiRwbfB17qTgXGkEKvygTKVRXCC5Uu2SQeVtGWufHURtFAWcwKFeqxAqN8HqNVtj7KQ",
  "key29": "4yYwzVA4CHVkNQA6LtyGVGPiFPWjSz3B4hsnrhNfU61Jf6RqMUYPuwcrMmdJpdNvt2Gs7HUYFbDhZPZEL9j3Dm8T",
  "key30": "5fseMyPjx2kWM3sZbwUZ66ZUdJCiDH1Qp3Y15T9N4RMN3sDCc1iQCkt7o2DEZGfhab6z4u4px543kTQ8w8i4pA3d",
  "key31": "4QQx7xiwVBbMNEir9ELCHe2kNGQFYBF8k6XuPaxfwTHjoFjj5DEeFHbcdyPi4Psz5WZCNc4q82yaqR3aK85jbVbL",
  "key32": "54C37NnTUqkCkTr8rMsaMHEeK7ZVVL9BaDJzyNS8Q2mdetqPPgsks5QPQ6cmpFtgMGbgAbtAGQ2bn3i6PmXxkxyr",
  "key33": "4MsbxA29VCMUYg4J3zhDPj1y7HdLAkxcbG7ukeiEaZ1EY3DbS3tqg9Dt8yCkBSzbgfupXStXrPwEju4KaGNpkQVr",
  "key34": "4TGyKn7cWi6VkggXPmh7uuL8RqtqWbmMwvvqSYUJ9hZwN9tJTxpPEnm1bAbstih1eohRKjyN8LmeLJepdw6T9jox"
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
