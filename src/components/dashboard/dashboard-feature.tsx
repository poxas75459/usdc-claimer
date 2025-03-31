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
    "67o84dhoeQccZSh2LDVUPMSegP8J9jPjK8Fgrp2v4V3tTYkDGQHqgZ6FFBmrfCvK5JQjAfRFk4CJawiHLAbbHMCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qFKkU3k9oEbd2QEmnAVNKuHsxccBgarzcG11uUfyEYMfkkznQGwme1nY22Bp266HtpXm6sUUVezGMq5nnC3Nej3",
  "key1": "2XeMYBDPTmbzPZn6cmzHBBQY5Vi14Fi2Mxm1vbvESt57DX6zqvq5kZhJEqw1v8xC3fXC9nEugvYNE31Eq8PPaMEv",
  "key2": "5Xx5KWoodXuGDUAQNQ3EMygzCnLWZjEApMuJ7X6cRzcvrsBYtQzHttwYafkWVuyH4RTzwQZNiHFSemV142bc1Qsj",
  "key3": "4ZBFmSLKNTv73HkzPTLPd7AsoRNgDugmWagifDQhBf5D5NcbGvvQhRjJoGF9SyaQ4tf4aGxneWfyhWoMALggjLMs",
  "key4": "3xVoJPksNX32xGhbnDLFF3bt25f5HJyykYYsrL3oEa8f6un4tydriimL6oUEZBjevi6c1otW6Zxdpm1oZFeuYcqc",
  "key5": "282V3cy9339Q9iQUu2qLFesUkiVWVc8ohr1RS87X3vVhNaihr4Ry8qanKWUQqZWi8DzDeaBAtXnRKLLAygZYzJyR",
  "key6": "5tx9GiioZ1vwTuPorqKxHvKKmU4RakqfaTBjV8amLn3qAUvzMPWDUEBxaBYSwyn5SQYzicRA5ioKuYD98oJA9H59",
  "key7": "3Ez2uvZYQSRwToeEKDcbP4EsrDCRrYywfuKhNjgzQ3PM7zy52tyCd3m9LRc8pWiyhyfm1JY2j8coP5P9XM5ndjss",
  "key8": "4kXjDLiAbj73BS8DXpwNgiPdHmDSmJ4XnTdXEMTfMetVxu9tmfnprwGuNcNkRy3vauWBvmBtwA5t7X3qU428oZDp",
  "key9": "33Y2t2JRPjLaxN6VTRSsnBepnPbzfeAKJkQeLFXDfhxLAW3QrYdZYk6RjNiFueKQHC1fyuCqwXErGMLbfm6GJ6to",
  "key10": "2vCMjWGpiLLqRcJRXwsYuGPCxUSdSwaWre7Swx4bpAbeqvNsiP2trL26TkYBVEL9bv4BqDQJ93P64iMUuhNo2Uh3",
  "key11": "5kp5Qtc69dhomBmgwJMq7QWYgCwMaE4U84ueTF1xWuMx83KxDqTkNEDYtzHxN7WfA4erSnsykoi7yeEmparei1qk",
  "key12": "2MeSAdWEmWgWN7r8oZJuyisiyUgcn3NiVK13Z1zY2Sx3HJseJHdmnTMYcjmDBUBrbTF7JAdxo8JG3F7BqVX1BBTz",
  "key13": "436wAnNToX9mkQU3kdDiDqgvnm5CsECgobweoemRftDW6CnqWc7j8BiTNAcVQ9FyKh6PmC7W6qS8BFep9VmuJvSw",
  "key14": "aKq5RwrUmT2Cz4ShK7T3VtHgm4hwH5L93PdjfqB1swfRZ6jBefGDDBjvF5RNyM4yXPjFBB7quJvJoqF4Y1cSxus",
  "key15": "2GSbJ9cptAqi74bfXSR6351yoFdGJQfHyRwzTczGpoTU6r9agUwPHdyVrFZuYxarL5Hxzgpk82JhbxG4N3fPF7p8",
  "key16": "76DEhMtApMnDMCVq8nwXzZfskGakagC4L3khj2T4y7GPWwjkswbXYsB1W5ZBbL5W8CpsWSZndvCm3xvKrUVbbti",
  "key17": "2JHaYF4x69G41RvTfTnvhPD5npzwHpSwR8cfU48MCGTYYFJ46zwDp2JghJcUZkeuXTU7D5iFhcrSbqV2JDg1eZQN",
  "key18": "2Co4oq55ZF1nyrxEH8EAGREdgcFMGiFdH99hBRdQQDvR4YGtYy3NJJpaBgcUdASetaQNHebXECD8ThLNZwBgV75x",
  "key19": "95Psp93GHBDNqUegdgWqAfTyfZnE69fv2vGnXDVtqJZLqeMwYiVJUyZXLJp5aJtciETRYrWrQdjB99ZhW5Tew1t",
  "key20": "347YC4nksbXNmSKupihiph6nNr3ta8aKjApYbnhwiFdLni7uXf5koeMXdUeV7fbKXpYmJ3bcK1vJFv3VATHSDdwc",
  "key21": "vcjqFaWGpP7Ng7wTTcnwpZkbqN59xEbevWG19o82ea1cV9G5Zwjy3rZXdUbbDSRsT4UyGcDZ6nxQ4tmigucoh9k",
  "key22": "2D6sDTm5RpDLWHcQSY86VY6MvssHpg7rkvzbbL2oKw6snvYHX9E6CDUf5BR4n2wHxhc3oYoJqmeexTaxKyVQNhGH",
  "key23": "3GGKJocuRD9R9y3L64KtrdtgspByr7GMvVhmra1ckri3F4k5DEj6trZyuK4cAmyjPSxrGGpmjauyjay7Y7YrW82r",
  "key24": "59LX8S5SxWSqxR14MfS36vAEUvbdHQnq9pR5jDzY3nRk6xKq5R2tcJkynXCiLNxDtuEoQscKUST5jWEzkUBzf1mW",
  "key25": "2xKmvtA1PksiNgCcAQgwL8xM2VM25nsjPSRNw3XAfd8WWY9Yr3DCjc4zfA3jT77QQRPC5AgzXV7UJn5DBykWJtqA"
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
