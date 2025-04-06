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
    "4mHUb2c1r1gHUbHLEy5hvTyNjA2AZbyqqeFPMkwxhLTghepSHNm9DmhDSf2FLBxBcfKH3fyc6h2tXyj5cZ5TAWDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JFsaN9SMEDuCvYHke3YfMhiqLcQNDTPeG2fwPbtVcTeCk5MSz6vPgagtEQZxZE6FgQfTGhAZeNiwhZJWX1oZbtS",
  "key1": "qfoZzEcjvchPuUQDAxuJ2surEAwBWxVEZCLhiWvb4M64vwGVJPGRHFrNAwZsMyyHJd5QMqFnTpMHbD7Jw58AFs9",
  "key2": "5F4DGwuYH8qQckuUcNY4a96UNcoRZDFNdd8oJ2qMJYWpyBxFcWxys1L6XPabFdEEHuu7iDx98gbhugTy1xur5FPa",
  "key3": "3e98Fgob4hLyR8gVxzAszykoVfUXanwUiF4CuuAeWgY1xHwgUJi3bwmWdFtt7ddRtJ5pfAsHwx5qfgN7yDkRiJyg",
  "key4": "6423rvbc92jiDqzSSGVGQswz83QZRB2kLwHfzUwZFcSRAZu5xStD58m6EB7ARSUcYevZbc9c3HuibpFFNXE9XELj",
  "key5": "5AYd9h9SXgu1HqskKmQ1zwjDZtCRKJUbvsA57oVGRPGugjJ9rsceZdNzrGdw1uc9UECRD1oj6u4YVYsRVedkGa8p",
  "key6": "qx2cyLJGtbvfe4icuuEdBiQdEPd5c3XoSh6A6sRVguDLs7PPbWjVZeFMRtuG6X3Pu2eNwzcif62yGrPk9J4qGBy",
  "key7": "SKyTEWf49oERYspQZN9Xgxvp2YEur9Hneo39PFztN2wU59tyQwANqxtzkvdMCrU6UJdq5X6avQgsTX2ZknQGEcj",
  "key8": "DsNoK2x8Srmqefx1aF9cqD3J9U4xevNGiwuX51ibDuAPZHh3RU2NHQQo1NbCCqhaTPL3XgTd8TzGwR6BXPu6faP",
  "key9": "Ks4JV5mSoXLPGoXsvXB3FDvku2QzrPRuHZ865514Xf2f5k5LVsxvLZvRFsMMwaUQraozMovoqxCRBRfaBxDRee8",
  "key10": "2nwfDZQdABmkc4VSERbNVJLeHkUV6Faf1WsgURDwk57ysDYt77jW9qBW1fWKALTp7ZhF55SKAPXfiz126FTt7uKq",
  "key11": "3Rihz71c6AYgzJsrCvEDNETn4d9zog55MabVqeXq9ce7Cxkc6oYHCsxDdKSW94iLzMLLCKTGSfB1XbTUx765sUZv",
  "key12": "3esPzZVdMADniEbVkEGpeedXmnE3t9n8brpyMCFL8gdwpBTpG4zPqyMaGMH4A4ejmZfGg1hnwdtSr6vvu6MivtXi",
  "key13": "3veMTZyt8bAMeZNpAdd2cx1Wu46LvoBzKDZGzBPkv5eGsvvgZVZVctExRaQDaayRY8HMv5LCBi6uRW72ZxMF6PCX",
  "key14": "aUmNvcChvFRSeRckvggAkKNxKMx5idKrj1cDvRamydoEgRJxd9thoCkX8yY79QhKEdJaTJM3gA884GMMT23R5Si",
  "key15": "TQA9KAWWmtL4NcGDJemM5taE1r1Z8tkpVtQd7xsS69fFY2RsJV5Fy5pMbBi3m47yDc62qwxNQzXXnLd1Ww7CLt4",
  "key16": "LdoUejGhUYKDqvWZ2ys5j29hC74bxUtzC5UFzykDssn59fyugzqWz2FQRnQ9SyiXseZazup2DKSCrmSxycCyuqU",
  "key17": "fPs9gy6QNqnZ9opYu1S1xDX9KzeoL26e9kznyTchR2LCEbyK5mvectt5eT8ChgdqEkMNthE4uXoiakQjx1Ugmcf",
  "key18": "4J7SMx4MiBa5faUV2gCzBoV6xF2GZHtS919MAYXuRactMuL5u73e9NZKcV8Uon4LoaaiLDEwCu3jsJssLbwGRvcA",
  "key19": "4VQbnPu2aFn6CGybdf6ksordVkkTW67NDJyXHTGfXGLZjDBVRuHQcrm69vyKjaUVLwhuuCNuXqDTE8yDt5FcJQWf",
  "key20": "5TMb2nvfBDJVjwGXUCWcCoj6Q8fmCLmYgeC9QfCCQkgpWTNbVZ5coBBWAf598B5mv2kS1n6ZExPNmPXBS9dcq7yu",
  "key21": "5wrbLY57KsrCzDKdBmh3XTburAL6HEKMSXBQ4nYfMR6APMS3gGEKQVZK8HSiGFBbUw7b7yjRUE2qUqxQQfhZnga5",
  "key22": "5MDEWAU5D5MidqDCkeXHEAEAopzoZL1qFK55PU1XyjbBXedNe42HwWjJYTKw7aW3xFj1f33t8a6YLWhJK7u8Mvma",
  "key23": "t5sC68kFe1FBtPeiZtFwVvP9sEjrqJAd9cgZA8aUoZJjQT8WwGgAahC5izbmc1YAd5LhqZTXYSa2dTN9yrqNTto",
  "key24": "SyStssiSsDZjuAPzs82sTGHYtWg9aDjBogRpz3ZGeXKAZAAtNMXvqtERZCKXuMGawRno2xXNgNLDvVz7Z6PcGvU",
  "key25": "2sJiRT9Bn1JcYVJzsCrFni27P3MLcetvNvnHwBbQmdV6AZAmUJPFQTojYfcruyso1QNwJ3JAxWzegCinSdce3eKr",
  "key26": "QUZotQnKjfgvwEVZZbi3SpXyEuPHf5DvnG5S9KMWoFKRcZkmssB7LPcEPi7rNCSHzVwU2ocvHsshucjPzdizixE",
  "key27": "3MNFJgJU3FqehqToq5VWtJ3UyKcd781bXVta9dhkVAvmyQLsMXWc7a19TcWZDKQbhppbrBfe2jXjqKtgd4KvJSDP",
  "key28": "3Y2js13v359bC5jG2Px3qtt75NphiJMpn7xfopAGZcxxYFidK6phSLRrtg52F5xcjtiQPXJGrzvEHSYHCpH8phv2",
  "key29": "3CM8ypdujrtSmgpyMxDXrYkcpMB6KCiW8aESL98HbnFoXd2LzTk6xQUXbVCLbBFvDDFkYS2AoPY4S8GtKmRBHvwT",
  "key30": "66iz1vDFRQYHJ4icWZSXuY2cWKT7fR7bZCyPy5VJXGnPg3H5kfyAwZjcCvz8Un82Tyg24hbiprb8BTe4WrdJy6ew",
  "key31": "4a8PQmL6PJ1Ff5e71CJS8szEUqYYMEqZc8umvtVowSu1yTWdDneW6VhW1ZMkzkZsqfkbKy7yo9pUXoWgLbrdHKwG",
  "key32": "5AHqB4rABh9exG3vkEh4FGPoLnMpDDEZfHcYpbZcTk7nT32Nriehv1KZr39E9LF6tuGoa27MSoL9sVZ21zGEZdAk",
  "key33": "2jwi87AoK3n3PcY78w2B1GA9Zo1Dmqam2D1YWUcKL7vr3CjUojcqAQkXwZPsRmsrA1TY8vpdZ9K7UsUCPG31JZjZ"
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
