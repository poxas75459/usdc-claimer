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
    "5FZXG6dxauAvoog9kmeHGqafZLn3jcRPgrVMLaRqkhnTE54F1jDTgRJ4xUEPvmm1BzRqdR7ACUREjvKJqCCh4H4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ABtAkmBRgJ8GC3Z36cnHfVRgCW788bsYEXsx4XkTHs9xvknvxkj8NLturpoN6HkWnJGQHsktiAWiX8PY3DG783P",
  "key1": "58YcmjCpsBv2qbQPkUE8TYRyHujYftbA4NnyarRzfg6RRKdJYoVGdnoo7gWtynUWrbcvPnQWYXSxGmZ5yMqSrDXy",
  "key2": "3tY5bhVrTzepqCMXNyjGExVfhdZxAUCLer7q8jYxL5Gs2MLkLG8JHJCWjbumCL3xso618SGPWUpkCgD7pJJt7dZB",
  "key3": "2WamGmkUEjEHyUy9Pi65MEcy2N5q86ej7QzEh6hp3b5wYoMgeKE4BRBs1sACN5kSGAyBjH9S7MYenGzQQDzT9Yi3",
  "key4": "4bCq4mUJ1YB81nraFiewAEHRSiVpvYsheaipRr4j7FHnPaqo74XsegcsEbC1vJe9JXpwxPT8HzF3nXwQgNYxevjS",
  "key5": "4bzPjfKLbcUn4gHzgrLu1GN2sEgE56YiPsXPnA1Req2H3XgzZ2jpDH5PPszbcEaVjBx6XgzTvNXqcufo2XLNJRZQ",
  "key6": "tsdj6AoKsmaLR9bzDSy3gUA9CfYjAZDpMLDMU4nnyrKviLmFGgKuW3H8jFzsKSEq7s8EQp8GABagzGFo4MmUQAW",
  "key7": "4vmbiFNK4HUX1oeWCae7xdE6jG3YEvGP9dqMEe8H2DJwrFBDguSq2xDYuj94ntmhLLdata8TdpA8ZYtgh3CY2dTw",
  "key8": "3nqckqHFCHrjq4q4cKr1eVop1KVuAaTNG2a3hxcYtT9A6ErkmnHgLjM62B1P4W4QLSAx48g7wVyvy3K4HdZ8ok6c",
  "key9": "3MDVhaktsKybdZ5de9eToT7zFXDMwk8FiX2oSV6SJdFM42fKMzQCm9m82KqmgZkgtsUHqpfM4o7CxJSaxKc7xKNb",
  "key10": "YpLcqVUwaStHQCH5yscyAoTRr3FqcXynNu5HGzyQxgF1jQF3BpsKDmHef2kxB4VA7xM3gi2NFjZyBFfBndKh8yu",
  "key11": "3Q8PbRuiydgN9syeR6HHywUB16jpWWNcUhR6TfbA9zmWV1CgTB5A1EUfKSWwm1Vs5TkrkLW6s2P1BdWszzsBz4Mi",
  "key12": "4DNFddFLy9BnDniQr4gJVvEHxjibwej2rEHLrqS2zRhwJTUqAjRX9P9TBYb75wA8WzjKZYpJerr4qHhWuyeDMdNA",
  "key13": "4jEUFkjGWNy4ZtY2Xs9iPa5AZs2UDHcdGNLsYEp66nb141YVMnBKaNaYw9sDAw7PibEGYNYj3BynThUNB7RGcW2",
  "key14": "3P6YWkzrHiWoKd4j84hxDBSYANT59Jhgz6N3iWpywCxZE6VmkiyB3TwZ3KfKtNEnJSAJztRr4JuUxRRGTu4SU6tR",
  "key15": "48DWkuLcxonqG2mEGnrqQhwJkTz45XEGEADX2T1UvKcMajpLzqvSp7arq6aYHCYg2hKKdezXDH7dLfw7DDi6gyXL",
  "key16": "4XxZKmpDJj1BRgTstiMFG8zPawsEk91hqEQpoP7zWUVaEKaCWtbXnLP4RMpASdvgEBhmTdxHGLRUwPV8wN6VBkW4",
  "key17": "2upbg21vLvPq1bEu7mxsE3i5q1oanJYk48D3LfsTtHzV5CNRAGRqdagWcsvEAFYyNy3TRvrXBZ9e1WamBuZarJXH",
  "key18": "38TRhB5avxphCz7AefU5FfRAAz14QJaJxgJcSYenS3BJzPkN6AdMfBzMQgmiktYhQX7ANcCDjev2TiUppDVZEDJb",
  "key19": "3fwe7HSH6E5YH8jNqaFwLFgjYLGeBSxrFrevf6QCWZnmVXodRAXnqEunoQ7aMUT96DFDAuqhuCShm8UZTyAbRV2X",
  "key20": "bT4AgUrxsSdess3R45f13xW5e9xbdcHLzXW56aWyfoEyEgs16E3b7rKMqsdWXdBPZqF5vzGNRDaPn5Vo1xcYA4R",
  "key21": "YG61LnGAQwKZBAGzYzTjoNoH5chGvuf4ouffaeUovqMWZeyRvvyNrXz33ziCTjiUHVy1XgD9Eu3t8QjyG62pTpd",
  "key22": "2QtBEM7tuyYZ3B6c4SEydcKUnV6zoWv6rehqLc1vXW5MgiHBGzytrKZvHpXatFpmUPwY1JVx2jPpcyhcFqF99nUq",
  "key23": "4thLCnduPhm7xxD5M7TenKCQMnJ4v5knZKy8mRHpDotv3fFexmAH1q7qWeeim3fkZ11u97x8KSKktzdkYE6588Ee",
  "key24": "5ra5ZdMkec1mwGZmh6kUeLppbmDAsRWkiVFUmbs6W5r5VVyDUkNt3UDzxkgdV4KjneGCThcY32kb6RRMmY79mjy",
  "key25": "3hAPyQrBjGMs1k7Vfh9bNSAdNcuGzjC4fTaMvSZzRusjozsKFwgUBdF97eesWtMm1oVaTPtvAmiyRR7tNVD9g26X",
  "key26": "4LihcHbGNZSVER4pB9NGVAgLrqfQfzsj6fe8sbwY9zDiT2GtsRpHmN7PMvZ1TmiGwyu9Rsa6KGU59x7KEcvCsHjA",
  "key27": "5ADhPSqjVMifCCHbnpWwNZThiJXZSKKFKYZAGWQbRHJoZ1cCt4h1KzuF2EKnqFa2ejTG14PHAi3e2freN8fVSWdi",
  "key28": "33jWF1YQXTqCdpD4zSB9pqNqVGdCL5R4VUiTJo8YJ3e7E8Xbhy1U56pPPowXEcXGwUENHuNpe7m9Nfy9yRs7RpX2",
  "key29": "5JeSewxfvDDHJ3aKoNi2Tsaaa8q4UvAdACHn9SHDN3ZwKat37Z3qrnqCsMmXcjYKs3V9BKSCFkYqErxN9T726524",
  "key30": "3Fe8DY3wJ3JqLKncvtJSvLYgPP9vhoo6RNXutAGbkDmmwaY242JUDB2YQX1WjRkLLhqr1EbajGdocNoozJRKcb6W",
  "key31": "3ZnmGbB7JRtBEGe5Twk8sBLa84mat7K9Rv9og62SPTUG5hQMNfNQjihRvjAYiHY9ig4CrH7TjtFjwBRpqN8pZj6H"
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
