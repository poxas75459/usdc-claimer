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
    "4ELwfhK68zWUcbFGJCKNRyqY9CNtu4fsoCxzgUnFqHmzPX1vynCLBAaZR56aLJx57cx6RKqueuvWEZwgJUKS8UxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DhwXR58m1mVVag2fZhuFxrPd7oaTLAmqfWGHRnmYZ2X9kfDHvjTBZrNm1sKhaxZ84QGqDA7YHTM7brMs2cmST8K",
  "key1": "3Eub1gV2iooA3JX8AoGRSDayr6GpgPsYCEKogxLs6AfV6NC9hzmATdLRjhi8Ytvmbo7ZY6MJZAuAhdP9RLLbmWm",
  "key2": "3RkdwvXSaMGB1hkC4YSD2RnUrKRHDeha1QmMgSo3Ry19mFoNxK1yvhUBKGgi5SSPPR9wNCESmfGe8fvEwu7uigq5",
  "key3": "2VrJGGmEaew24FrZLqnZywALfj7ZUfn2X2guuAaWUUuetoyotEfa39C6bRs7nU4eCz3Am6XAt5nkfg5FCt3ksmSC",
  "key4": "5mxw7J2AgooqiVL1QKGAfUeNEuTmW3wFj9CwYPCvtoKsATbwtShS9ZJ2dwP8q5mX8g1qzUAtPhwmEg4Sa4uEY4F",
  "key5": "2V2ooJ8Asm6AV8ah7jtgzctV9dPkSjrdW8vhK11z27PpKXiSjompF7FSVQqYuyTfjVgpjxvpVE1TM7ijtE7Vw29c",
  "key6": "Xg2ghBuAzTgUQwLmGhc4hjEPjJffxG7sH8LbJyi2g3okY4B5edZbSoPFgCcpgVaWE3NiJ533ouZRGpkzgMVqG6V",
  "key7": "3EkDQcyGmgiRotbjvSJ9cHkHWYrjKhs2G1SaXrWthpe8NQjrfgrDc7AnRn9euUEUoM1uGMpcsi5NDvNQPRFjxvZo",
  "key8": "nkntb2hDQ7uAQL9UMxHZD2JdsHmu5C1sHnqYrbs41TTjrtZ58VndTSZ8jmpqBGfDjn63zQV9sQx4FZuXy1Ejugb",
  "key9": "8vJRD73bNttirTWVYjDhdHkSk2GiPq2KjEnToAJR3RHHTcztJbU8mQX5yz3DL1fUTV9a1qkn5aaxnog5eKciAHd",
  "key10": "38i27HMnMQ2xK7YwdSvRM4Zy4DQqwEB2fXvyjLbj1PTF2Xg7psVXNyxZuLg3Xch9rWe18rCvMGPvMz9wv6KKQPXP",
  "key11": "43TsWtePbef2tg2tJxM5yx5z5sTiVKcPwxLKVakXR1EyH8gk73uwcttqougS9BtdyCyeCdHRRwwh5nu7eyAhvWBx",
  "key12": "3uzPjUsbsi3gxjVyqbWmjEi9PVJ6swZTswRoNPNEkZHRxFjRaJV6W5RKy65vvkSdqkQVrVi9tJmLERmR99p3F4za",
  "key13": "3SDsvGSSjADCuCAEdt7YZJyNCaT7HYvcGbJFyqR4ZtQLvA3oXZ6ELhgf5qiFCas2yrC4cJryx7pEhWherFwQ6eR6",
  "key14": "4wezdCsy9Wn58XimMjtNs2RYEqvV9v33dWowRj6B6pdiEfgxQhZF2N8MFtGDUGPdL2g5aoYRVSs2cyxe75Hmgmg8",
  "key15": "2uCq6AJX6piwbxGAa2Nc7Lfi6rTg6hGgzmayj7X6JnYdE96DPzoXhFMUZA3sVCTP3WGcRyu7ByNYoP93KVewmaw1",
  "key16": "3u5WcYSNio7S2jc2xbq4Sys1CAeZzAouBgMwVpZje2U2fWM8Js2QfKVsKeFJ8wp5Am8X7iWdpwwPqYm66nZzAfuh",
  "key17": "3r2kWyMjFLgyPpbzG6FHt6xG1JRpJ5hpXquPU7jnHjqLzVxB39PLxuY162q8JFw6k8kE2sWQszEGQoibQAbdmULy",
  "key18": "3NMjUCnD8ZBN96jhhLbAtbg5FYNs2VZuxmfWGerSk4LcZxWUoKauAq6q6Rfavs2PWtvFJMMfCmUjhGNvYXktASjN",
  "key19": "xXx6dfrpdSFme2A7xiHCj7HUx7aTu2upqeS5s4jVYQSf2Uewbs7zj8icF6byL7twNFXUJd6LUTc474cjW7NcDG9",
  "key20": "Z79o8YXhPDXpcVxGs2k6X6Tfz2GNYf1vLW85pVvJ5EcqkJJ5n8WsWTEiz9CYJodRs1esE9xy9PdcAz8bMXcPW9n",
  "key21": "21BsXUCbgtUjZr6BqC96yAVnSXaNBfba73qsanHRXvrZHgHKSb813EDbmTSt296v2tf7Bt19gActHo2pj5TckDqz",
  "key22": "362ZznLnV4zaCLer4JYPEH5sgpkmTFF7aW5XkRxp9NjBuNrsccWkbqf5At6V7YvgcvmcvNnyyXtZMkJXg1WdwazM",
  "key23": "Bqt13Y3pYGUtT57X4kPAY3SGE1yDv54ByTvCYSPVeEjvmXkKAUxNpTv1Fa6XcYBpBZ9KPGqUrfFmWvPtKGip8VX",
  "key24": "4mJcjz5AevykCoZpGUDSSX65KXmYD2YekLhj1C1saNi3FPTmYMgUdPnAic5GBvwwvbcVN5uKRqL38LAp2pay21DQ",
  "key25": "5KSsjLa9r9X1ysVM8ZmP5JL6ZA7HNRuHhBzaCabkCe6iZddYTUsknVprbvWEWRsbAr3P6zSHzzS2Jc6nSHHChXzQ",
  "key26": "4LwxbZ7JXs1ptChhUS761fXJJGp6CvUwQbjoxg3mfgTa7CVkVFSCKW72L7tVbVJ4iA1v9wjLhs8b91jsUkQdsB6A",
  "key27": "3gJ34sqCs1KkjRFWgAfaw3LFXsMjLajKtKcepfAhXjMTzr4DfpDK6wfyd9JbdBJXe5fBfAXspRb3GnYCif72rVfy",
  "key28": "2A5D6cbzuTQiSi9DGEeBst8fgH1nqETcfbtXiDhPqcvCsfmFG4jh6LFdY4NvTxMNh8oeYUuST61j8qQfzJ4YTXot"
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
