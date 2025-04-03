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
    "4FZGGfNBRCWcDLUUcwDvSLFgvnMUc2VutNB6W9QHqEikXC6SySjyKXzQcudfYs9xdUVy8jg9Y6rXM8X5MvmLNfSp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pSgJqGQ1GSxCvHWdj1H5hyzEzfeJz4wSVpC1ctqYrMWB12ufe8F3yf6jBEyqqbqvfNuSRiQZsxXEQ2yG4FgXNck",
  "key1": "4ovQ9BcqFr9QDE3f5bBzK8r8HFjLuqTexDuKEUGLpAKsNQkthpWXcsPcyDQokYv4VAacKPrgScaRX6rzxjozbsfN",
  "key2": "4QSXKtmUNGZxnX3UJy47PWY6c88eaQ1wqqBmu2gRvnWw8jMY9s3CZPvWrwVVdwcsB4wabgUSh4NQXP8sZ7swfk5R",
  "key3": "47QKxyPuaHKpZFZcJhPjc4rbSUMYDVLSD3ETKf45ChM3yZeSfW9q924GHm2id2VjjViUm8V7im97MYDxXbbzZDma",
  "key4": "2uA5Qxpzv9jibVTvXuoPtS6AHJawot3mqggt41f8qrHXaegv3VDHgifU6ZFFGu1zrbxbp8oauySvxp1VhGPmgmw4",
  "key5": "3qwhj77j6Cz2iJLGb7tW1BUz8Hf6zYsTuXvrEvzzHzozXEX1VFFhyrNNuGzQ2HyRCb7wcfNrBCmDA7NrKs9innpc",
  "key6": "5Rj1VRyGBPeNQCUdAgXHgQ39XXrw28F88NQJ4TGgvbSkRLn8tuWFAJf8hjyiZdbp3L5yFJts5BFptuTmTED1WKxp",
  "key7": "65C79D5Y2NJ6YeyVV4w1KoJ6B3JSvZUThwTTmDrqRj6WzE7nL2aMRKw8o3TsbtmEWex1B39Lk5UosPjcCBvAAop7",
  "key8": "2gLwzemRfS2UG6WkErRwVhmDbAMbYNXC1rzvGNBT18BLueDhzQhNiC8frdeKoW52FRXVT9CbG8hXe1xhySZkvUqj",
  "key9": "2NGuobiXzCpUU1AwHa7yD9vLJ2iG8NyBeDoqFzSmAuC4qYsVecNxGM7SCRaPuBhgzKNzj4gx4dR8qcahWcJk2fEK",
  "key10": "5KzUmTu41N1o6vgGcqzGXguKtZ5ywUBExxtu9XPgDFdA5HvhfewokE69qsYqkK1m8aeHjWwURM55eYyvhPYspERR",
  "key11": "3CSffd8jCuK3eXkbkQa3MpxzYT81Jgm44CF8AVLSuN7kxibnstBwwb3snNik6AG9ET122WbHEJkxLNaoKuRnAZg4",
  "key12": "3v8UasLZ1B6dhLN35Hhbb8Aes2wKBvn3oUqP46LVCFYSGf8vjQ9BZ5GLKEDbM8DK3GfwxLuDFx8Fd4mshBvschuc",
  "key13": "3HGvohjSugVavgcKzY6a1ESk483LaQHSQL6XMrsfuy3ugYWTvT2eJ3s1QaQe9ofrvAc5xbqfDXGyPCqqi3aeCFar",
  "key14": "xYF29Yevj1fm3rcdFUctqiwQGpr2PKRKuYtGrH7D29JY5yNafVTZSzfsbkzMPnLy7aQZZFr72JcK6q2kLNFAyqX",
  "key15": "3QeYh5mQvtZ2m1XpLrvwFVHwPjJaL11RPWSwMHYXyC5qWY7krZtETrvgKA6zbwyULvipYPyr2Dji17ti5v9GGz4g",
  "key16": "4U3rqnRhPrbWWRipwrxodZAnhLag37H7h6zC2t3rNZssXZDHFtbrUjTWusvWxpD9dDJ3rWkUwEU97afaZwJAEQkQ",
  "key17": "3sN8P9eugetcZss4X3J3EUSXXu9qmNx6LxzdAFgeHGWdQ6RaByCd7pofymNbQbBsGFRrRHKohsY15WjdvXNJRTC",
  "key18": "KzVf8xh4WT37q3enrF6SbjThhvBsEnm384RBatBN2E6VZLDY8TdYUAucRW7HexY6j26GZanaLz6xM3eZV2BQ9HE",
  "key19": "5U8DbKaMSz1Pz5vwFMXQUVcKcPK2irxQS62epL7KaF7neDDo5eropLUN6SZX7wgkoX1RK1FX9BahVhj2qCXyghHW",
  "key20": "5gQgc2hLa2u9CMYuNcJd9eQ7AP3ZkzicDC7sBMZECoDeGRmodCSDkgTnPAwGrMSpJdwuFGaHZZ8L54f1jYprpD1f",
  "key21": "2XAo74NLbdHFoWy3c1JPQvRSCTdoGBm6R2zSqMTZEarnJAQp8bRqh6LPUTm2netjvrDsFcMC5tTvnRBbt7qP6B3u",
  "key22": "5KHXa87P7imeq6VhcVXi97Vrdo8uUxEj4pn1qWjiB2RWNiBSWFw87vTP9W8DX3mQ37uwrpWrXWgrwMnmiuzJ8fYA",
  "key23": "3ULqz1b3VVVky8rYk3PWDcWCBLmESjbyVFZkJbdtuMRiS2Zn9oKLKd3FfNZ3kadSfZHp3DHhMQHDbwjK7uJhgQmA",
  "key24": "2Y6KL5fDBgdJvBKfUTU1vv5Ctr1D4R3ca3MjM3UZDirStraUgwZkG2wj6yY45Xah4Ud2Jsj3rgg9BkpxQKeZnC9e",
  "key25": "2mEqLUpRVMLw7A1E9qY7uK7ZCxpYvRKqmexez2REaDADJZVRdPJ2SCJYkrM4kcPap9MCF2eQ8br4Si1XQmKxHe8u",
  "key26": "4NJVzdDFYNxPzDyuSsNuKHoQdUJbjPFLicWZxv68NJzn1TtrEUo4zmBtSLwwvN6e44Fau5pxeRmzGUA84JQcKnCW",
  "key27": "2d7Fus3y71GqGHXCrmCkQDtXgA1mzchgt4R8QjsHheLSeXzFG1fgQ52kfhM9GkThrUJaE8gbNaLQcjE66QSpgk8i"
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
