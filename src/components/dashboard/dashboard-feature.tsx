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
    "53TjvUYPWmxE59DGTx5eFfjAWzEt5cCQuUmZw2cW9JS8M5QewTgdCqRLCTKqP4mFZtDa2Y3FtcLgN12cFW5SuZmZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pVfKaVMB3Uhz1xzBgEUwxH2goGmEZpQiEkk74gMyyRtMdKXJBEXgaZ2jTAeNgm1BuJ5kugXkeEZ98f5t7FD7tGZ",
  "key1": "4d1yUk3BaPxNiqwpD4k98BKyKhKxFSq79xsFrR4PWvoPXbSUaRJqTUvBDKe1EUwiWNc58h56SufUezuYXtfoNDju",
  "key2": "93gz1SE7vh6SxWb4cyP76fuGX2xSg5bctwGa7wntBGpfQQ2jD567nviSATkF3GteRKR5JSRsDACD74KhMrsNyRw",
  "key3": "2v3SRKhiDKyUq9q8TQxiSELARcjw5iHtxBWLqigKRYgvnep8nTqxKZXMxe99AZHLLHpqnfoGHUxrPMwTzgJu6AZH",
  "key4": "4KrZ9ihJ7X8H135aBtJoqu8x3MPLqf3NAgEqKpinBRhAEZiSZ9mX6ZzJzKabcyewvRY2t9zfvqzeJMBT1z1LzErc",
  "key5": "5miDwqV9Qt8nAotynj17jNVuKoW3yzRPr7S3Pd4MVdzDwsq4jKrTdvNt7gcF6uMvvph7hCBTCcBNd7qFpWSvxCfn",
  "key6": "4hXZBzRJpd5BcnwLtbh23Qj8GLGA5HX7WsoYJWGjBUCmZTeqQUqzSKyu8aM74ZajfdK1RZnPiiyMqxr544UeLGrH",
  "key7": "2oVZFjRtnWr8NqQQusZAtHTVS3gCdTJxU8nB148cVTDdiDSFH9ENTRuHFkthvupmYe9sNc6TyCNBCigpf6nUsnin",
  "key8": "3oEzbbb2TdaDKUuLiHqdd2MJEDZgZ5R6JrJymNHyzQyLsx5wrVHxb536u7cxaNtKzesu9G34t9zmtGP51BTS9q5D",
  "key9": "4H1f6WWDYcvZwjJmu6uksMRatQQ3VGHbbSqHi5CngvYSQtokntdsFK1oLX5dUPZLJkvZGymz15VNuBf4bDK6eRrp",
  "key10": "4UNQgZY6UfJ2wcNCsLbazRYA24dXtVdVKgq3HgL735g6T4b3Xzddi8ZQuhqejX8PTo1bHFUuHZPjmpgtBR351drR",
  "key11": "31YpV8Zmaj5XeVsfzBE62MvVst7WgjGASUE65mkw9h7NFxYVMm1vqLkFMBj1BeGgcKj9vxUYsh9Fds5eRXPFJw9v",
  "key12": "3L3WHamNVapp8KqTghFBuoQMCevMFPDPazHHKLk68s14aByDrASqTy64jB2Qp6ZYaH7Dry3gcsDHHbk4xdr3Hkfo",
  "key13": "3279CDXxzcDkXiocxzHGjh4s2CwLt4mKyA7WQQZ6otyGo1sfXgH1mQ1k1nqw4eZ9jWWZKxGnjWp55fuWAGshNQFp",
  "key14": "4jQZj5UJKenvYfk2dfqwCrnrQvRaMNadD6tY9omwmwwTQNQWnHx7JxPCWfcu1vhvVccVjVm7Uw98ibkeA2WQMBYT",
  "key15": "4ivaRmezmeLvCaQBi6zPmXzGauRuDQUzJQJL6eiFEydij4YVETj8gbNKpP3ohPiyhEa1DYxF9fCh8Yo3UEbACpzz",
  "key16": "5kPMgVuxPm8YoFb11wMHPQTMxbuR4T3sfCsubvayGARgoBTNWDRCm7YSSBp9hcbpgcE7gyHFkCw8A5GX13UnsF1F",
  "key17": "4osmtswPwb5nKZ5QQ7LW73KAwo3T3m4qHPjC36S2hAeWi45rd2Zmw5GQhnfmVxMz7KgmWgRGY2YRoL4h5GtACa7e",
  "key18": "CANoLX73CttcsLCiUGcgHtomtUFVfVwPqqU9qDEtwvtfn1HLGY8ug6ae3xqydewdEaZJhFhoPcYHrw8X8sTke79",
  "key19": "5D7m26AP3wkDSuRCKqkYxSeqgS5SsQeUeUznF5iuXB4KvfJ6V4ToYUbHJu5vTS9rHyACavmHPf3R6GS7rJ9KrJ6o",
  "key20": "G2rt6dD3mUcxg852Mtp3TDcLBbQpcUmMnGXFt2TLw7SsB1LZVWPKA4WmMfTeTbkFYZHfEm7gA8gzeAnM6hcKsiJ",
  "key21": "4PHtfSMC1LAsHr8HWZJGGudq9EkxGtAnJyiCsovDGJ7FgWM9fpPUZyGcvjpvdXsx6QsW5h5Ha6KuSSmQWfxGhcvy",
  "key22": "aWnDGqViiKG3b3XJqyh5Wu9aSij6fGc3Da6mKBN9UjANWabz325zkheU65iTg2fiukiz7KtqW2fddt2Cwo5HbGn",
  "key23": "2ekyubGR6wyScwihj1AbuVxW1TwpqQ4yrxgYEwDUV7kBAKkq6Qz8sgKSrF4C5x7c2YVH5Bp2yNwbddboPPFcCM79",
  "key24": "4hoEHUeXTFVVhxUAVDYHuJqcBrPXQeFx14W6SX4FTr1Am3Zh3AjascazKRMWTZCZiath49FCLnEPSsfYncSYsknG",
  "key25": "3y3vpTuQNJvR9kCXTY2UGgnbjSURRx66svbHfE8KCM5WhzjvB6AioL791h9e8uZYVfaJcn4zkK4q1Mk52epFefra",
  "key26": "4GTx6cteWjkMdShWexgwR4rjauoPvjRuHNmA2SHkJGqanwuxk7FUzJSJtycGrfT9x2zRRFh2pLywpUGSMzcy3niE",
  "key27": "2VEK7gXnn3GSs6EyACBtn9ftkPPor5ad4Erpy73jc7TcKAk8fSVEvoud7Ms1sLqp7P6gxfHoVWQx6GT83CYWi5u3",
  "key28": "257gYn7tD7sPS39smxpxAEQtTkDYBrWzv9srgUVxgTqYfNvqqCtbj4ByYjKJdnNH6srdPQ1j5GcPZ6H29er7PAYp",
  "key29": "4q3mNybNBf9To44BhRFBj781w3N5zPJ1RiukNAmjGhFBHJpbkHucrXYPqgwV4dPcxm3xzQDGmqYp1f332tBnHPcu",
  "key30": "2r3YCB39XmC9J2sCeiUbEC1q2jauzZTGHZcc7CN4tLSgn7jdxN6qjjzFNfisybVaCG7QDDjmnAhnV3ARgFbyd2WC",
  "key31": "5aAteTZQuP9mCpA8VbefJWpkWJcoqshXA8QUpL5BNJvNLqoHKqWEKCJJZy1RMGNTB46XTwCKyHkW9pY5TsDkJnwV",
  "key32": "UZteSFdgfzckRSEyqYc6ARtYEHbcBjRibtBdX8MKTEdD7b4n3ks1Ryk3Eam7Gu7RxqY6QqjC6UhQKpo3WmySiC3",
  "key33": "5BVyiaxGVpre3zPb38rY9oDCVHH9ttAuYu8mRdBKMAzi23bC5xPUhwJdSYkPykvUDtWnf3QDE3HDXh1YsiCVRCpo",
  "key34": "4YEQrZvaTdDsXb5nxgVLaWaQFhKnW4CjK1tgLGS7hegka8EetkXXz7r4yX6PNnABYHcJrG3WjiGntvuZgLXW7gDF",
  "key35": "4reTDuP6N5dtj1nDQjiSEhCBjJKHLc9fuFccXgQ2UtJqVeEfSTbjBzdw3B3kZKgKPT2gYFFhQxVPYf8eLMUNakdo",
  "key36": "5zdjALs3zE94rZVNnpy24TaXYEUGFgbfGRJz2CtRLqfgFSN23MVeP62z4MYmPaHfySHAsYqC43RJybvfEL4pband"
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
