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
    "23WcvMuWhFWPu6zicssQgqZTB1NaQhucew463nrSH6urBhdUwjBrtg8YsUYZQrfc2HdvgYUWuRViwo6de7aP8mPk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44QAabpQC8gfnqxZ1jvTVQptfn43TDAxA1pgmwGzHH9kTeENTkjdNpZmXTBh1iXT9zAVdcVLRAjvBqKYuWCDeMuY",
  "key1": "3vXDyse62urvFotFriQfjW8eaqD9xUevbVLJLPyMYzsKZCPp2vizGrYpfaBcUKGZEaJjzDLEKmywc3qhTecWRo7R",
  "key2": "642uN8q4bmj5KrX12nc5FE4iqgaQPWtkfjoVycSQYewEXG2zgk63YKGRvRSAvA8QkWD1P2bfaMzyGxWLihD2PeTk",
  "key3": "3kHdY1wGE4YBzqP5d7GBoN3BmNeYVnZZ7khAyXfn3mSb4XYePg83HzogpgZXDwu7VSVvBL7Vixazrweb2AUkJqdp",
  "key4": "z5A5Av5QxBk2xS67oUXpE6GteLcuQcGyfVGuGzkFEfYH17rLZPPMuBQiEziMfoCXLNScKyL95jZ4DfDE2ru8ZQg",
  "key5": "kEKTfZsCi8hoJeB2SRZfafVJe7EDUAbWAg4KhJ3ehgE2LUvwbnadmPTWDL9gjbjcjW8XHNXFV5Dy41kWWtQpBJD",
  "key6": "5dgc1RzdCNGUHgDM537pw4CR6HQ36JGemCdZ9zjatmScqVmHZRGp29i8kuk3Lj46KoVKhhYxBfbNoZQbsz2jALUP",
  "key7": "5bQbYiwR16PWq8cH16YQzTByXGeaRAqsCcwTybSjYjkmRwprB46wL1Kt9XeE7THu78Bsg7msYQvLxjVHuTragJPm",
  "key8": "4DfjD5gNw3bWZ9CDxcXHu2ZeEd3fAeGkLJkHdTZntQ3JSZ9gewoQDdUvuDS8QDpJe8UWLi7vZofnHJjD88G6MU4V",
  "key9": "4BLnt7Szzwqfa2vtSycBHYisY96EXsdGeRUDjJ7SViUsj3ePoXA8NNty8T8LRaEEhJ1b6SMrSwa1YdeQVh8cLcZk",
  "key10": "2wQnyzPbryNAWRPfPCW33ukK8A8Ug5GN4eXbmnRE6eyX2HRDDrvWDPe2TzdtMudUAoc4GA6YGchaxZodGZWjPwa6",
  "key11": "3CedkYsebwKBhkuCUs2U4padJhM8VNyXzGtmUGzw8yDgUYyW3zSSEiHQdQDv578GZZNacTHVNtozgaJ3KiFfv4F3",
  "key12": "2QnNbwNnF1uofgB54rdSyVBtBrgWsoAES5atURySchpMVQyepyxi7GDULRtRppdk5Wn1gV9fqfn75ahH5d2mv36m",
  "key13": "65uJufZAbTMGD5vnBLbNmLCRMyH6fQGZe7HMY8vRQe9DHPh7KEZsSJLjkVqXo4rtRjAwYQgDV7QaG9RY5fqz3DeH",
  "key14": "63L5AxPoVDUxvvLQVj3tyZMmUYWgMbyQ2MwXqS3MwWws3rm1VbYMvqxJmYHUwM3tpJwZCE1Kpq6yiGvMKwtYAuQm",
  "key15": "5wkdF9kisqd8BHHJv9egqfsir5E8UcFxAW87zRBiMDimh1RZVC6QDkNKoVhPXYBisn9hmg6KtWhKKhbM3B2RfEf6",
  "key16": "3xQCzrdwbdxH17j6i9Znc2d56rWy4JQWwLxpbGnupRoMFpG1xGuzXZJUPYeuFC94CrSgxWcUiYCTxjiuvsX6Wsu5",
  "key17": "285sbrapniRvwhGLzF24tkCZWmWh4SBaG4SRvHctghdZP2qUbnazd8GdUzUEBLwnuXkzuETx6XWmFFj2xbfQtrHH",
  "key18": "4EcfyhfvDw8iSgXJEfqCVmbvuRsifR7n3pRt5SpEdLvomWfqZEFhgpxohkKjfrCayrxHbyUu8rtn3vEqgA5J3mwk",
  "key19": "361Ha6MRxdLh6PEGf6H6H6ogZ7HgPhepVhAYCKN6UJ72C45bkkJpzWyANHZG7yQEGrLToevGr68PHEG8aamvXjD5",
  "key20": "4P5YuoGXpyC7pZbKVTC7vbNJiFC4JFgSHDiWudhtSu8cEqpkMdmwpTqyZYLSvsT5Bza6avULznnYCNj2YczMygqr",
  "key21": "5iJGRwY8wZAmVKtJkAREtbunZW2uqL5so5AA7fZ4wKJdcqco8SMGw7oJK5UTS7bSp5zT7VEfELkM5ikgLCQEio3g",
  "key22": "5THabv8GjpJruYa6JEpf1DqX7i5VUwBgEy9XwB9Rzj25dVu4H8bRZsHsjeP73iR9PHkD3kLCxgudEorQC1HK4R7H",
  "key23": "47ktC5ZxqgteuaaBjgPZBdof9xEyQsNnGmXhAURC6o2TX9u7NM8zWq6xdHMy7pgKP59kEE2wbYVM7vwJ583tQhHL",
  "key24": "d7kfiWeJFcSrAdpw1azT1hdhBtqb245696KJwGJRMH2BwrjcZuRPFQo9qfquDp1jzXcw9xnXjnxEbKJ7xUzKsL1",
  "key25": "4V9LruPTwFdcQ3x13WhXtaKcUiBSmNMmrCgcddBxHwb3BY7yX4478EFAT8CGtCzMyYsnHbgaUDRJKaF5GUyrzcUH",
  "key26": "NryyiU9dKaBoxWC9o29wF9Cs5RTurRDMBU35WnjJ3UNxz9f2v1gzeZWJqgbzWqEeLM4DdFHn1iwzMaoz8VgmVb2",
  "key27": "24JtXKWRuDfVymR3XSURZfTPKGNaoZLzd6YD4ZzgD7KzQoFHteWhfXRekkwuQYf2c9fwgfify3X6gxpucCtjHqqX",
  "key28": "4mP1BLqUqR65pedEwgUBxjzC1ukLtSv2B3RqoyfgZRQbwrdAidzNfgQP1RdwVcV6w4FN9vgodcLnFgbZnnT6H1JY",
  "key29": "2F1nmAfuTsj3MmeGy6xWkAYv7Tf2hjcZng83MsBUNKHPF8vw5tyoTxn78wipMp8UpTH1hBkJUfu63Y3ZVxGQrhST",
  "key30": "4XLrZsDW1JYscs7x1Xd5JJo4kZHK83BxrUcywMYB2QyQbRfifKffVPB4CvfaxYCEH7kcRzu1EJcWSjkEQ7tpFCLn",
  "key31": "JU9jCtREjWtQ9M7kMB8P2PzDvfEYRJhpT4hqVaj4t9RsumjJQug4FT9rLBvutYkYbfeWosn8WDxNMsgeYYRfEEx",
  "key32": "eoZc3C6t4XH4tLhgMRwFZe3A19sEraJyvWQzoMgqd81CwFeKz2NihXVJFymnhNQhku9K8YBf8RX3uBTKjcw6Edf",
  "key33": "4bJ1YSqyEL8Jnwd7rQD5oxfK8kTVpM1NU3YJkkDc7y8hZ9SNK4jvdL4ahwGDmhHXaRCNZVGJFHZC7dtGYpmDsKw7",
  "key34": "66kaRcx5hXHFoAdBqy7fsLcRMC6Zw75Hh5ygqfzPzJcJEzhBVQXiHeXU35vCBA465aSE4Hu9hN2ptis7YdWkbKAR",
  "key35": "4KUJy4iWpHHd45wkzV7JDRXRWnmx5hcTDpWMwhrHQAdaiSoLEGv4nVfz3BoBd1MDMmnMGtMVrC5GMScAyjHLLPP7"
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
