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
    "3YXdJXZgPppjZ3g71G8xithBjKc1JZayLARtDMTLZSeKWCxZntU343BPqwJt2Eez1qkSWj8R42J3ehkQdZr3qHEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FLVmww1zsZcqLiwEYGU4UnrcsUE9QjEqfDMVjcT7MLX3qo4vo1SxL3M4r9GLYaQ5wPGmCJkXDquHjAWijNC6UmA",
  "key1": "uKhX4nacqJQYkMQ5QMF2DrSbvcbmBNfMHXEG8ihW2PHm3s9rDgVGRm62PenTY7muRtrbg1P4GYQLUaFcWp9yyEs",
  "key2": "2xsTPj2MNGBRHwfDMVZBbXqQ7GwbqVbFWXX4Za8fKUVJp3ZhQ1jnjfNv5C8AwEDbRYEnCqtSS87ko6We1eCRzoAi",
  "key3": "36J2u6gEGgUkYBjAYzUA3rHY8f7ibUN4EAwfQ6UrJK3hdaYVGyUKrNh5DYHS4QdsxsvZNsTsUaBnutAh1wCCP6br",
  "key4": "3q65FnnmDXm5pxrJbniicf6kpmohrHnHhGhNMii84em9nexn7ptjK8Khbva27BxDuMjxVjJtPL2Q8EE2UPRP3tu2",
  "key5": "2ff7wCH2iM3uQRESZkGeJ46dkmX5Jg71gXzqHfbBr6iyP9RYVM7Ed58WLhFzmN7p47Gwc61ZGjgDSMZ4qMzfoNDE",
  "key6": "5RyvUkd8wnnzPYSyw7iDVUZXbQ3vQxmesDrkMZPABGPGWwgoCwBwotRQskREBs4pRkLvE9BGtzTdqJFviiPVMMdP",
  "key7": "2eqC6GcRh6T5SzPirJnLNuPeTpBvU1AQULQ7rriu27r17ei38uNhWrmXT4e7hFnz3GF78Nd4BQmcDCDvTiWa31E2",
  "key8": "2wqYhNa1ssZyCMrhUHDf2VArZ2RTbTbL97eqRgkrLeaaQsnhzLxjYwMnDar2RbSHGHxxPArxFMc32ccCN93FoSKc",
  "key9": "cwspgPAcwazZ2vQXR976xUNhYPwLtQABuSiaB1XrzBeNjjUFKGmnQLuEUTa78zJZSoq5AaX2ibS8tps1U4YtX9N",
  "key10": "2wWnZbsATt9qPfdGsZfpXajvu9c1hHZEKJcZm6tGaeyzssWrLzuCZABHTa36zSpRBbAqn5mXVmyCusBktosahYha",
  "key11": "A2DpwkRcASKtA8NtD5jbpHY23iQ9gRcQmSN2BqUWTwhQXdicZChRZ7DCThrNEd61doRtA24Asb9oKdvGLTUwfsb",
  "key12": "4u7wqufHVoq7f1aZAgmH3mn3h7BgSay4KGtmQnjiyQ2Y2BgVxo7NjevUJmXDMmYRKV6aa6JuyMooTk8L9LaEHk5W",
  "key13": "TbMf2gCxjFRryp7QmAaKaQCWCN8wqAvUd8jVnyUYVJdqr85oYu3N6Lg5TUB76v7MmP5qjTpo3uUsS3rPQMeagDo",
  "key14": "2Uua7bZZYmJEUMGvmz5DrDQJjcUfrqH5MBfcTxEJvj3NHLNkejfqU8ipLBr7rUGY7wm2QdhmNhHS4xmvio6btJ3H",
  "key15": "2BErG8kFsN7JJXy9LTCYyRxVziuTYzcPkmmUD6UpumJiz1BB3uWZAie8xDadw32mkRt95FaBZHVs22HVfqeeDUXk",
  "key16": "2PM6qe3r2BLgtU5bEmyfj4wZB1kg57tMQonyh8mDboMtasRKVRhWd7uRPisSX19KdGY9qXjTjUJCS6M2jktawYny",
  "key17": "57FguHf6WNRqDC8uYfCcFQA7MN19K7zAK4mDzd2W2o9Kcp3LtZoba21GkEiRwFHK8Pe1vDnoo84ak7HW9XyuWagp",
  "key18": "tXnrM6cMFLwtBRNxLGi734Yfh15b7c37GdGTj5XwAHSxqgKT85DAJUN5chGahZwVdtt7JQJLNo64tf9F6D91zPY",
  "key19": "27WjE5DJGyPmNE9VbwEG3xYxNHdNKePr67jCg3gxTRWhFwXTXFCrrH9m9cmntMBzH2hAovVpsvKACAtzTQt4VfgS",
  "key20": "kp32bTQtLZeRT94AevAFt9WEWgb54SydvaT2Bkpk4GkzwnzjqqMcsFS1o1bihdAYUHHgMNCwQYt2TMvsKuuiAFV",
  "key21": "deBTnZBN266LaUUQnmWPH6SZXMN7v8HkhCKErieFVoFmDbyyAbu1JSDjeGeCrYGUJG5AzdXzpD3xAhDfhKfRKCQ",
  "key22": "YzgtXMaPi1Jy23N367PfT9wJgcxtHm8QUDWvji5tGW2wq7W2cziUL3CRX4gdT79esPU4E1TYF8yJ4P6LiTUkDau",
  "key23": "2k7KrBLQhF128QQBvjx29Pfs25dxqggeLiRpUgAzxbcVZNJr66QDgHLcySk63m7tZcceYSGsFJVFBGTEW1sde1Bx",
  "key24": "47iHJo51rxfM3VjFTKxNcr2E9wih4cyBve6uap4pCZr41wBEiqRUP2DSJhodB3suniVYMRjZzmhnt7WDVjWKbXqd",
  "key25": "3KAE8GPhxw2jQfa4ND3J1k6YBLodSHomsZvLjAsgnLqm6L3GkqJawL94MRRpZ4DpQJeAmdaXcPXQnKTSy6jxkgZG",
  "key26": "2C63MbQs9MdgPLuYs4r6UmRNGSp1c1Ra4rBv5EHNpjdyj7AxoPGbijNDMn9hXXuZA6k3Lw4X8ZTTFfwc1LQcCFyh",
  "key27": "3zoZaWJ6ZaG7xdnEZiRYdjbiLXmBvEszuxn3oKv74D5NYkv9WV7bLextbg4fVr4e34vAN26aET5DFYqdGfYy2CNd",
  "key28": "4pFec5YbRHHzHLtrgchHPA5sAPbujN8MXWGWYurHpzyHGJikT5pohpoCAwmAvjjpDDsbSbrky3y6U2jGftb3Mr2k",
  "key29": "LAwprQQTGXFs7aevwtxkeW9uDNyxyyRtTutAGR6ZQ5AXR9RZ9iibPonoPxPbk5CNQoEWmJ7axQm7u83utrGXkGk",
  "key30": "2LE4D6dYVskb7MbpZZGFwJ7UoYSx5ekKje8jLT5rD7zmrawo4F2fxo4nCnS5V3tz2ZAc8gynRyCHwGNKsJJY8swv"
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
