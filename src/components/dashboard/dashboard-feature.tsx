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
    "5rd16K4WGXjyg6MUapQp7WkCKW8jwS5RpjY2GVWsc5Z53j3GNpD7UWe6tPptAtQbGVc2D1TkfRubxRHKhgwh6wii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZnD5mJ7JXx6JZEx1CHp5hb7eJ3ezL8WWMk5jkPpS6vty1BoBUuBsRGYrd8ybuqRHjaRvgeRzyvEatDi246DAnSc",
  "key1": "4t8MRgFGkRJan1J1bW1GNMXjkB8eNWnVr1cqcimgE6qTcTE8PmsUNKbSARxHadFAsV5T1KU9iqWifsopsBhqpA85",
  "key2": "3wLJpyYDBj4PMNAXHN9tEiypWcfYLAkvMuVEDcwCQeUmTSDhyCYDyuZzDeG9uwucn4xGSzMokS98JodS8xe4915w",
  "key3": "ZsSrtFi5QGPsskmTmcjYXtXe7aHZiKHUeWxec86yiZUo3VGQj4GhUq9G8Hiv7kBLJaEtofUt3Mt2hRkLV1ze3DG",
  "key4": "2K8grtjDxWe3ZYhu8QGVEKm5GpQs3HSmQMeGitt1cw51jG3i6cC6o3ChiyEaW1h9LHfWaSAcJrpdQqfFTBRv7S6j",
  "key5": "o5rSUZgLtm1VfMyqpnkve3dkgWg3cPGiHsgrxPpFBcEjCRf3hoXDskibK7mkw17nzgWJz2s99yFM2fLkgiEx9jo",
  "key6": "5dHJffn5wUyMseBwtV5sbXtDpX9scioXwHw9LJ5w8FA6RuMmvERLXacoA5JfYvSdmWy4vAnV9Fdzic8zPW2Yd4we",
  "key7": "4xS3LJoTwv7n4snfwXpgWeBygqxM7yQHjpifhc37LJVfpeJXYuQM8eP83aVq42uqbx9v9DZLmRLqWb2FUKbn5Mbw",
  "key8": "3qs4NPfWPNoKQgnkLgauUwbdkSpJvsCChLbjwmhHPSrN8KGvBhY5EwxSgkaXWTvFYWgUqzRYQ5NLJKTMARmH8WAB",
  "key9": "4BQ1BF5C42qmqT5hHnyBAmXhRDf9pRQ4Zna7Tg7UJPxFt9QjB9zNcBkD4ZvM1ywhw7yrPA8LQjSHhcaYgWn2GRjV",
  "key10": "4ZhgE13DbrGiFCBw5peCinRDauMHQjH1g26eE7qeSNVwU3EbYTio8wBmjntJyR1vgeiN69BQs5Fpo1LJJhDW1vFx",
  "key11": "2ZcThPFrcHDy1LFvuFCn9KdEJhcR85gJh8xpVCgurqn9wZJA3bJq152eEzqG8rYTexBK5e4gjw6fVK6BXeitXCMC",
  "key12": "2AxJ5TSbknVtdafUEYHvrzPiPkDm4vBNZS8UiXk1FdV4KJnVRRzDFNiyXsmrKqZ4v6796vHJkdn9PgCjgLvbGM3Q",
  "key13": "sXxDMfjniaUip8TySctU76jytZKXcvrEvKHqrukwgoMPLwi7mtnyVDWn6LRSR5czrsatjfmXipZcRmPHgtjxz9b",
  "key14": "5JkXp9YKayDSdrfKUnLvw84jdwxG7idUYZ1wHAdXH9RBRRAAjR6TXQ6zt722WZx1TKwgJur5S5Kg9WC4bhkmP6tw",
  "key15": "4NVUoCbFBTeJfnGuFgx1RHaT22CFb7osTmkUqL4noULikz9G9hAZKZrULp7ejzS3eUiJoAf3AL93KiF3s54PGpCa",
  "key16": "2KvrfxyF4eiEthnwpaSNE4Apt1HzDBEXT4Wh7m9fG6uwLcAiEFuRAqaVwHAGw2wnzEso2EVyU3YUKM749FvToVf3",
  "key17": "3TXb1gqvWioRLQXNuiPfwKwkE6pwoWQCiBEryPuKZbHrhVUiezZb44n3uoWyprNjMdZZ8vwoa25qTtwvRur9fLy8",
  "key18": "wuq7xxRzGrW3ZWuDEhQiRv9EmfJC75E1zr8W6diabf3GmHmngemVQJFs3nFVcxMHfiGX2KeXqu6zdD3YS5K9EDB",
  "key19": "5sxtpBrtZECxT34SQafvZKidyri2tPSbfS9Uxis4CJtVpLLuxkSGUcAJkF3EYbXo8qJM5h2YY229RVGkf4a2jEx3",
  "key20": "gbpdcJAfo7dHvoZkKZz3jPBoyzSxodqcXE5enGVwtDcmR7njkQ3H4xNozVfoiJSCcpSqqUcbHeJnpz3XnNaHj2d",
  "key21": "r8HNDV2UkG5iDAe42sV3rJYwWVaqfphRxXTCyLhkEPGHnU8aiYM8LVc6aMLP5EGRpGcWiqY5ZbBbuzfL8LPVtfz",
  "key22": "2N5gGsMyAU1EQ3qT7164oZzHGbB8suznLQagciQMVyjDVpXvd6B2aHY7tTNtke35uGVwY3mkJhJJriWgs4igRFki",
  "key23": "4oNMbsFJHFUknEswPh74exBqEvKmJxySeLJvMjDZySy6LCSP48vo2DyhHC2vgm47fzksH4vbtpfgpW3nmhNPGZ6D",
  "key24": "5Jp1nPJCFgLFxMfdKbeRKcDxTWLkyfmjoVJqbhnjRRMq7QW4hY6GYTLKLDaQmo8gXcJb3qTRRM99PLKHdoGxLWm8",
  "key25": "5QWgntQ1KinJbeW2FLo3FJzcPpMz6rQgacHP84VbHZYRjHFGVfisgchNzhAbXqRRR9vgUTs7VBwBSqFc68LbXB5d"
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
