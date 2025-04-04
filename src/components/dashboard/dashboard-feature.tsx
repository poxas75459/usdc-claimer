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
    "2QW8BUgqetya5joXaHmsNxMGX2k5kaYSx1HAapWHFUWWyqD3wJcbcNxxHbaSRPYn1kvQWeSL3H3vYGu3Wu9VGmbB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vcTdWARkHvhRFsbgfuoPC73QrvVoczNtKUq7T3HHQS2uh8H7XbFykqXp11x51i5fEhPycR2SqgF5aUSTXq7bhqZ",
  "key1": "5beVHRXu9iRQohhs6xF7eAeVdsvMpXURM6AkrVBnKH5d2vZRwQ4g6ZoeKkDGaa83WF2pTUwuJAAY4bUWe4dBiKfg",
  "key2": "24qTiN1KiXkPRjwrbtHxTnTzZgFoyvfVdNMQLBeNodzJ2sREmUkzL8ex2e6SVCQHRFR5iqc4iD3R9dwYVPgkGBXX",
  "key3": "3S8RxPTfroYohGBbxU3La4bhTWpRtrR9bQFHL5s3vUDiJqCt6gEygcpjnZcWqDfmVQwKwbtVEo3mh4wAoMFFUp6o",
  "key4": "5XhqCYWtQyXvvJ6GSCNzt28JBoXkFibB8WNjdcMN9Aj9CaoWuVd48E4gJbsYeyWy8jZi15yEEdE4pWTTqDuq52c7",
  "key5": "3Ksf49xtxaHvSUUoKtM6VAsSVEGcSR5hUnw4wWxZANQxkBBS7XGeK97SnU1u275e4u6b6f3PjeQ1K57VHoeKkepC",
  "key6": "62tYFZ4qV3AZ3UYbpLb2eLrXwWPqkTqJ5wwagjhFFgDLQ2rBY4cNg1sQHt3LFGDasjCFad6AvU4qkvMM8Z3g2Ekd",
  "key7": "4VXcD7BYRaEdivRXizzLheoXPWy5tYLKd1XnHXa9C3J6QBEMac7n1pyMRNo33Q5wJ2xhdBfX3BwtEnUA2vr9fQDj",
  "key8": "553DExPQatA9F912YCfYKuGNgVuuTnNjjDbKrSTttRKBgXGE3m17QXr51a7bjS32p9FQ6oGdw6nPYTdA1taJ2SyL",
  "key9": "4yNsLhYxAe9be9DsjysmekgpwVK1jmaU9u45tnmoBJ5eCeqZ3GieKe1KSUjEsh3Rvqkd51zjXzmkj8rcWGRo5g2t",
  "key10": "3d2dSYbDqVoeneJMMEqeYGgUE8xnAfjv7SA8XfsWdihYp7kDd3yBuvzuH4yXyGDWZQFmxHFnNErjCcsAzSuiG6As",
  "key11": "4kBowXJ1bJn5zKXMLPEy7oXEKZcSvW3vmU4oqfnrk5nyJC67i3sgFn5rE65NN3fND9s6SPCbcSy76hF6hCturcEz",
  "key12": "2jJ2XEN4bWq6aLo8mzV2Aeqt59STbMwPo2bvStLtT8Uh6pKbsBuXJCx6z2YbmUNsr562sMKwwB5iNEk9GfiyTfLU",
  "key13": "4aL9hTn8DY8QCEg1hhqYdG1HYuwC1jcwDQa8s6vggtAiAuCjf5Ly7dEGWFo27Pi7Yx1aisXhozGG3fojUBh44MPf",
  "key14": "74voBk38g5KFcqFwatgjrWQUBgc6RDVxHtMPHHeJzzgiUXj5hs8Xv6yK3uJx2wuASi3rbUt6wZw9tAfu9tod7Bq",
  "key15": "4PjpYXVAy3FPPBLnXatLE5qFRtcFTTc9qKfkxBy5kFgeoMuTFt1gTLLUfwvf21Bt2pg3MWm7aWChtjP7knGWQcvr",
  "key16": "44sbQzTTmqeoNyNnwaaKL4nYpaPSgHALa3MXavaNVdukiL7Qer98nucY92eypGX2FQfer8boFnjRb3QT8dsMyCsZ",
  "key17": "5kNoNmJtDDUVpDY1eQemGuXL5vJpv9aHk45stWhWQbSLEgaYvjFToAu9m8EZ7z4SmQhLVUu7jXPgqgbwNENjjdGK",
  "key18": "4DekHHWKZUPE4nAownhYQrRKscDBG3yfRnaZdL5HkLgby9YreLub97AVqQoL2Re8A1j8n6cskHouL39iXy5pBbLZ",
  "key19": "3KvabjudxQQgeauE43E9gF3tFhKcsE3x6fiZszTUMkAGwdGkGxKQD8KLSe7u3rxYdMYZ3gAsNKqhy6crG6euGjKt",
  "key20": "4sKK6TV2ifpVDhhexwRsoYfFLRqe7pFHpPihmwCBQnV7QJsfXDC3oYVoJnPNYCpFqEkbvvpsWzhor6EZN4xdzh3o",
  "key21": "4qaVoLWGy95sFx42VtXSFqMuj6HqNwPuZgm3b7tK97vajMJHGspmTNM3Hzkg4ugH8moDqFNqu8E4QK9fiTgPkXBT",
  "key22": "JxL5B4v8X4xgzzmLribG5jSbV1sz8MsrvgCziYJArZdAGPteLvKxEybVzyb2dJzZrmwCeCqAcn33mC2gAhEgzTX",
  "key23": "5S6fQGNf3fmZXaAqmmZ95gZpc4Daxh5W6i1PSebiyxhPZyLf87gCGc5RWXy3s8vbENGSdKJEG1BjVQKK1vddqfL6",
  "key24": "2J1WjrpDBYouVtSvkNEu1xVKdput3JcBfSiJDCr4LPib854etiuMov2kxRh9eSYCJKGN5t3VhtFb9xWioCE1QixF",
  "key25": "4d76cR5HE8bUrvvywpTMDZRfTkQhhEYHBo2UGiGRyJPKWpCgb5ksULkHiuM9wE9v9GRPab6PAWhYoBYKNJMeebvM",
  "key26": "4BDZmw1pKMRNbhNKYsUzVyMi51ADbCGXy85nC2emBsn9PDmhYv8p7WePhmXjPR7qDEnZ9w9BNo6UQ56iWBuwMPBb"
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
