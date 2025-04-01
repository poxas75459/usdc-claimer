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
    "3LNc7teFg2rFhmojqymB1QrisRKEWbpqGp8ZkwTXNEDA18YBeGCZSbsdxA5kbkVUkCpLJPTFzK9jRM7ewhaHX1dt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QioLxRe7mtzoDU5p73e3Ltb8c5FGsrHFz5G3zyyvgdAhkcXAGFtYwug6axabeG5eC8HMR7RuSQdtFBRWrUwaTYX",
  "key1": "3gKhtLar8mrpsTJZABND73WMHeLZBetTDdDRNfdh4rfynCUAY3PTp29wney49UT3Nt7SzsxLhJ8pHn1VzTdT7gAN",
  "key2": "ttUXSa5oBw4q9y78VNjd5EzJVQKkR7VxNqnYENN4cWBpjDf2u6Ufy3Apzw8ZPhdfMpuqjRguFGfPLKUb37zc3sp",
  "key3": "5Vfyo96oz1qEMBH19iAA7fv9d8bKwby8DVuwDitTnAtDcdDf4WZJSL3MGCKV9NAebMbJAKkgKvKSBGU7SLqxTi5B",
  "key4": "WjqYB7Ww3xZVRkDYXaQDQ69pvrUrcwYMgzGoULb2qvPkpHtiSeoUZrN4vdp6dtE7eN1W1KR9PjVecS3g75KjGG3",
  "key5": "3afwTWCUsCEgHLPUoAUNuPovUnHCcxjU1yK5BGKeUj1NqQqbdYHNPHhA8NR2Wk5jDxr6eYRbzZ3Jgp5aZDx9YpD7",
  "key6": "5E8NeB7J3aF4t8Fm6mPLaLijx82Qcc1dQJvV3LXqaesyuJ14nr8eb188jnSzYWYXJ9hi88A4qDTLd8Ca6R8cGp9R",
  "key7": "2Vx4CTTz1gJRSiirqgB4pxkKWxRCUeCVWFaCngY6pS5MFyr46zra5AhkqodGE7LvDDSA82Q4PPibH8tLjj2613h1",
  "key8": "3MY953igp4dWzEUpn33bzW1bxCdSuszgAuYEtDkDZQs2jEwRyT1vheARES5pazQFNghcVKJWKL6GUwCzqGnM7PZe",
  "key9": "4CcQVkeeSJdE6XvnB6BUvKuvYQxcqYbbo52J97mE8RcEgsNE8KCuxyQxjVkh7pH16Y1krQn1vQqarc3Rh7CJLrrx",
  "key10": "2SecopgBKhttm7GpFwbWWSP1S8pGgg5C2BGUzRqgHKYbfAJf66Sp6NpemtwXjGBoCp8Hi646haeEGTM18kkGrnj9",
  "key11": "TqMge9ZtTXZaqaU6uikR6gmKGeSH2MzFfp6CRVRZDBZF4RSJB98TtoVvasqTkqmAwAsBzJn3grgPqs2oGTAGjBT",
  "key12": "gYKEwxdkXYRQfheL1eTgQ6DqvFvdxJjcPPtQTUuicuAmor9xGwbVYtu4AMQp4DM2vNEaTVU6BJUUTepbaC6T3Za",
  "key13": "snDgZ1CaoqxuhoSwAGbUcVT8kAmnHakcxi43cd9j2sEXKjjc68PfY5Xwo7S6CgAHujdnsfzfDhmpErPHh5jYfsm",
  "key14": "yWFUw569nrW5br2kTriz3rtgJpHQU5GWVPx6wJSMjGH6Ku638xTHMCPNHLsMYjazGZSsnwFwB6fwZbGuvxeTEYv",
  "key15": "5XP7amhEYANEwHSDAzn5xddn5tQeKNoghg9BX4PyeSea5BLxQ54MwD2AdeEqaReZGju25CHagkXXd4weRvaWT8mc",
  "key16": "42VjJWNukrijn4uomKdC34fvH7r8EjpSibgZtSQz1u5gnNp2Q1C7zLLsK53kc7cnJzakDx76RprmBddvLTDqiiXC",
  "key17": "MvC5PTEhn3FTKBBAKtoFpQ6cKAm1z7FaqdRkGmkUZsHYzujr97yojEbwEKzDEUjHM3sHf3JqJL4RbSUUszKiXAo",
  "key18": "5izawuvmGVsRYyzwMtfDuEfSwZWy7MWqgXC4eZHNTtPqvPVv59R4hhiDfPjY1LgAXj17YVudqj9cFVviHEkYKKnv",
  "key19": "2QH2iqwenSrJGnKW3xr5W1wQKZiEAuAvaNyZSVuQpANi6SKowH9wsJAw7rPUwvQ9RwdauEut74wCn813XwiG6C3N",
  "key20": "2UGcMz6i95KsnNPivcaNWYnvDAsEs5iVLjtefmg1aSdpGQ4FzXsbNWXpC9qr3FfcdzhZEHuVvitCix1pDCVJ3iRe",
  "key21": "5iP8uFRYzWLVYS3cZ435Xe6CZezxwvZVtigNp42uQy6BRDTKjRJLjfbZrn7Mf4sTYSA5oy1W7hLZY9Qsdtr9Ua8j",
  "key22": "4x1XWcgP2a3iSe5XDjye7zaLDy1c1ASiJPkRsVH4efxopjgqmr8A3Cpf8qMKacaTqybTki5puVjEnM2k28rpBqzh",
  "key23": "3wokykKJrRD2rJgnwkadN7CyJLfG4XEocJjXwMYpNforPCFzrxAF5VbVphj9z1aAZh6ZSTUxyJoFsvz3V3c9EwnY",
  "key24": "3GX2TLvPZgHDguCdryxdKTvwNLHqUHNAbTgfpxfMuZFUJg3y2T9GQH91pgNLyMJodw6z3SbH2vtNbgx483rcEwd1",
  "key25": "2Vup8dYod3gC6VySpdYsswfoP3THeQEyNdAg3KZCKREJ23dUYus5h8rWDvKjLQwDo18U2tSToCixWA75xhz7yQKh",
  "key26": "3axfWqsvFyQKB7JBuyNdgjsPNDzgxAc9LKCvsZBG3BhLoAKpvCvbhhrJdNLDBPZEtHWMrjBugR6Zc1JnZPrBZnVW",
  "key27": "3DQzWhwu2M4Rcbyo6kVcC5z6UyrZbgXwx1s6S9dAyjbhY9eYd1nZsmnWSe3k76mFCuLqd297hhuxg2UBUy3cJWHS",
  "key28": "wuqcqpMrSZEbAozEcEoXcC58zHAuT5yfP8qH4Rh87ysjtQgSXixb7JGZFNSyzFnsjGyDGbRpWJTh2H6Ucg4wEg5",
  "key29": "cPeW9LCgha6ijmsamu3uuqgsLAbNdMjgsbsYDcMyM995VviSehpk7gaKH8n2nmP7FaTvgozJCzcPwtTthqtoVLN",
  "key30": "3PjLyiAfwydVrBLdt4mrjHFzzcv8x7G8W7LSSM2scFjXpG6ER45vTsHjJAPdDhDvYaYFSVNHDLbs4EFbkebX1pvi",
  "key31": "5TJhcGuKs32gs5PhAdXoMAAsSTN1VKkDM8SALYtdQ8DCeGcXXzQGGSVxj6S9ZAwxxFpiiNxVrjpJgV7mXhJR9rtV"
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
