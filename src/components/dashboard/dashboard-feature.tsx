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
    "42Q5HnH7kpZAYwVehMcTKRTEYTRLdNmWyFphFK9mNfYdMNge7pZw1G7JTA7xa3JF5JzAkNrnG89U7YSTjaBnJkJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56QGudRxN1mv6utprDue3sZ6i4si7qd7JRvRCRskvZodCtQyELHnPmL9Z4CKsad93QE3fmX1x5ara9W46kfEfcJ4",
  "key1": "26dxbS44EgaPYtE2oEDpDnicV88pSt8y2Ws5CaCZNG9oAPgJ2d6a1nWicjoFujixQ98MbQLWo6qRWTw9xWocN8ia",
  "key2": "2o7p7q7jrgEtBj9uMCxiUAyAmY9yJs94cs28WGFvwHpGr6Kjpr76uf28fejdNwPqnerbdkaDYDwW2SRrMqJiDNG3",
  "key3": "41bzLAgQ3tXrWEkJs5G443PTBhfYH84f7SfjzVi3DgKY6uYHHjmsdd62wW6aizGHBqHoDtmA2RF7EmeZ3rboeTYg",
  "key4": "5zKTL8R6EKGeekkEED6JeUBASrV7k4B5t19karEcGiNAGe3RswH9oEgSR7PEqYtBn6gkS7P78HtBJezmTakz3VD",
  "key5": "ZFB9vaWTHS3FLdmaTT73qudFqxbPybyQF9G9iSMDY1ULToK6mmqLaVQtHMEMZbC1sHGTKiwBD1FwoqopzhZ4DbK",
  "key6": "2tE7oxjSWPFBSXjavY2ccNdecGJgbsmR2ufJxmLXhZ2LCcSZowmrVoT2RyvTCsFCfnqoTmTFpwYS2D8R3bGF8LLV",
  "key7": "5H7zuAreWhvnPd4Q6PYv4fArt5Bf7penRfn3fUZzD4QE4ZUF64xU9k5b2xRyW7rfuFz2aSwtsVJn6RaYyhFvMzKa",
  "key8": "pG1AYxbGisK4sp2VG99o6MZutfchkR4zJFMfqezHyJoNHHpeLwKJXgA9AaJQCg62wxL1qFNVWk41AS8Qnvdk1bK",
  "key9": "4SVzZ9o5uT2f7GJ9DKp4HjRKzqUoJUUdSifX6ZEb2oKAfusRW9bvTzPppwyTBRMHJcefqJXBpejnM1wBBjwNgmeL",
  "key10": "3Dqb6ucD7MyN7X6r7Q9Q6QwHh4pMuEYtG9KTW7fdHVb4yRzW9fwYK8bdUbMjK3JxwR5isayPDLzH9W9h1hMUVXDg",
  "key11": "TCeLydDzBchxxQ81s9VY9VLRvSghbAoRVhCsZgt57F3PoLn9rY8QDBkzbYSR4S3iFLFjRD2LL3zsKuEgXqQ4rVv",
  "key12": "3tc2dBbX2FoyScmu5akg3wUubdvQrV59uv7XRuLLUdeLJ34zvUdZCSJ4rjm5nT4gg9z6RwRBmFJ7ETUMmCTNxg5t",
  "key13": "5ynqFXbbkJHFGZcSC5RpCYvf8GXuS7knSz8qbxbVGLtrgdNRKx1koMBpWPEC2kVUno7BxCBLaEbDSEJaiRH1R2C6",
  "key14": "5hotZ5JYSAEpFUALhYd83Wt8WrPjfiBFR4RNqie8G8JnZ69fYRBoW5JrMmqXHA6bCSRbd6wSdM2yJxeHV2wjWPW7",
  "key15": "35TAREjLmGCAjGk9Qj7qiti9WmxZrW7NzQLWTFYxxz4JXef3UShocHJw29FqaGVWCvJZwt1x95DfveyYUyU8kLqS",
  "key16": "4ZLoQVWEGyMQUewVZa8j6Houzb3NshsXvEfTgMjoqyL7W33oGKTeeCfsYN4ewLJpCiR5fE5sc7EoLQotftSrZNg5",
  "key17": "4QgiywTso3ZgU57p3j1qwmLKVC2Md6r9UDH1XsoBBH3jaPyLSSKJ9HFmRS12VbhAJUzJPruKeC7Y82XBJ2THrJ6D",
  "key18": "4fUxpokHKCyNFg54bkneHdUZdSTbUP7zCyP5KRbCZTPoQrRwBUrRYhJb6PU62ZMiRzsMtN5kJVk8Ut3ZbzkiVDKA",
  "key19": "JqDsHCVT1rahDiD3xty9Af4xGk7XiYeg25K1VvYgSnmy6HfNPDv2yQMeQsPko7gRVvDo65vTgoAq2fcJ9D5ZfkE",
  "key20": "4DT9Q8KFGtgy5wdi4q7uQLN5uV2uiAhQbRhDfLhqtrmuwqU5jH4PUmBAfY4YTyzQiqey5NqAmBKgBSgtnR9FHzJu",
  "key21": "2afjojA8pnrRAy4oRGHDSW5KvPNpe6YYdycAo8msnKWU1hhGuqQK18K2E4GAxJt4BpfB7DvGJk4jgXK8Qkjbmbfo",
  "key22": "28jo4J3NUnnPnMSDjJLcYCDmU1uPazUPa2knwy1wqtrEEt1MapsGFWJxGJkCQ7zazmwzEDr7qfkhdvgqstj5131H",
  "key23": "2JHFuC1nWu3xu1dMViRnJ1jQxwnLPYWkKyd6r9N7rKKPCeihmUVbbhyjT2fWeyoQZKMC6TVPW8AJbSZzhMtrWcgr",
  "key24": "3EsToZ3UrandvkgywwY8LP4J7nP5D5qHaVoGZEQYpQKCg3gd5yN9fombAb7vHwFmxCvZbiNKD3n65g2cfYJr3pcn",
  "key25": "3yi6WN33wMtG2kgpmvaWY1havcqYjKwgjc7oUAEZJGKAF7rUZHPof1U7vCfaDExVzowzmfdC3SZAnLoLTQahER1z"
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
