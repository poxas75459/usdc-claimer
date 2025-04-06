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
    "5fPjqhv49whJQ23jyT7J9xkYEdaUvRLebbzdbUia8Xq9bGReAEo15eXtNCmHY3X7SHrXZ4e2YXc5L1zV6qQUMmkA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W89XkfZ416W3wrKb9fKr6MvERCuT4a26pZtdhuenxojvUfiByKhULCpXujNKSFKFySsuGi6Le77Q1GTwKPN8dt2",
  "key1": "2TniGxRUhxatmjxZ2oSZsNeoF7ydsifmzm2dbzxQouJFcbP97nxw4KtQiaM3bKjMKc1hhsNekUQcoeK3e6mYJvAo",
  "key2": "4BTzH6H1C4D4PW1n4jaZREoP3VKQADXaS5FUmfqx4r9UC7hFuvks8gtBSko3SfENk1HFtpZaYL54qD8fWh2534d1",
  "key3": "4YLQkNApW5i9j39u1t7D1pkeHa43x9WuBSTSUwzppHxraUAjRzKeHNDbFTdjs6rhatnsNW9VLMJLZVdCTHMGxtEM",
  "key4": "WEhUQvB261roAHJAkN9HPqi4DhKWmAXquu1TMrNUvP9Y2zFhp4Y8MW9ev2RhZ8sBdUJpRsVKtR87PkHsxzTrCdA",
  "key5": "3mqKY9itMjqn5A373MTGWuvDkUDK3HQ7nCi5aPfkyzPEkc47PtkefmD1Dfum7QagxQz5k9UBoXbQA2Fssxd6XvKv",
  "key6": "4Y5wfd5ZU9gKcfE41V68pBpQYjFJSYGTjtavWPh5RwfZ1oyAW6Y2z61s2FsQavWFuZrMbRtjwSdScYCjqMNaeEka",
  "key7": "4kCfof8RhyocWX3EBCcDDPdwqZc3g5VKUvz9LoiFSKfs5PDdoeRKSuM7LmewqVRcySVm1631q7S18uVvYJEz4h5Y",
  "key8": "2wMnPpVbSnwaNNVgJbq5Vtb31LfzqJMGxqN8FtiUff2JhBhDAAJ3B9DYiCTeyWBziSJAuSFmpvtAkwtZdjhLfZcW",
  "key9": "3jEvWN8WReoPeorXnqicZVzZfQmXMj4Bdivk8rg6MKp2w9q1GVH3iHYEQ1EJ2Hhia2VjvJJzihYbCX5MdxezdTAS",
  "key10": "3ec2rrhoxroZkMSaee2pn5grcnkzorZJyfXF4CuEiAU9M75HTcLScnY5AUgM5ZJAof11CXAtbC6yyiDotyj6qqav",
  "key11": "3hA59sQ3vq3wVC6adb5Di5dJbp3XYVZdjvekPWjy4LmkLr91XnopHen9aoeFbWjrAfXTN5oUG2MYjj2w5nBmBs7m",
  "key12": "29PzQVHQc9AAs8Q3oijtWSLxTUvUNpeTQxGfge5PLbhwx4RtLZRzRo5tnRmyzubaFgTjtZ7JLKqeJMVVuDvfWc2b",
  "key13": "37ssKjKdAoHbHoqVhh3jvbMwRKze7oo41CtUvN1iK5qTcZhnh57mmvxJ1qcqF8oqAor6GCmHzmToDvit36YW5AUv",
  "key14": "rYMTwrXjowJvqSZpKr897ReZ2HeEZXRUJEhkuTEPJSwBqH2FYsZMVFSJFN4WRymhRfgDWuTDGeqCcWRcgzUSxEH",
  "key15": "2L9zoGDPuLKM4CKSGHAaXnpaKRzwBEnE3w4Jz9AAK6S6wjp6g9kDacL1ZMMPxNcUajtmqrcSTA3sY9pFkFurmBEy",
  "key16": "4iidHo1g5K2MmGCboPTbinT62inGXQuajovaP8iSHACJ4dwfwUX4ZacZmXHHUmT9fjVjqHjFBLRy2pENDHKnmbk7",
  "key17": "21rWYrPguHTYm2d2UDYoiB2fkB7WTHpRGnC4twvJFzXVJkmfNarnGjTJ6Nqxd6Usb9TRkxche8Yf2FCkNChmYJZb",
  "key18": "zpLdbcRsMS1dcvLTDjC9cKHbjcUefNCVLiEa6JJMdED5AWv2rdkGcBif5M4h7FVTt1y8H8c4NDCf9wJhXEDuajh",
  "key19": "3zjXSDCHWPbgMY57ZMBTGgNhRAny49wUekV9xK5n1whCtprJQegVxgTpaygWqW6J3Nx9y3UnN5SU5ZkgNuxLhDDy",
  "key20": "3aVksMEKgahfKJHMd2Xht7M3X4bNukcKgmyQFw72vUNm8SDYwcgY7YA2q8iboxMiNsZcd6jpd4NA9NBwvjufAGTc",
  "key21": "5bqGzviBpxdKUuGV1jqCxeLx8P3rjcbM7HNJioygQ7BJTWyWzW1ESQhSEQ5n6TPCGfEWhCKkh9kJNACfUQkVr1dW",
  "key22": "4cguY9RXmG8fiUmm7S4SvjMtM79qmm6AEr5bEDNPJ9yzQQXzDYJKZygvgLTPjposYLry44uaqRMMME3hJJtBeUvD",
  "key23": "2AMz9PjiF2ZnBopMju73y57q2noWuTMftmfc78w249edBPJmrksh9PncPBMVzXp36PzV6r1zKWAhNM8REMkHtkDx",
  "key24": "TPALBUh9PwG88UMcLNsYzkugH3aVcEHXosy5gwtiwwnrgo7M2AmPiUQ1U1SiN9v11tALkyyDydSexiuiry78q2A",
  "key25": "31yAozd5P8GFjStBcm6rYDhCHpD9dSkRGCwENfRxsqYgn1qgxahc3AUfbR44tFi6SeaK3uZu1rX5W3KVtAv1Reg9",
  "key26": "4erbnwNBV7a3Gc2F1fUVbJP34iKXqqK7Yh8YjUsposN9fG37w6yNtA1eJh6c2H7rVxpJxhZBuC2TT7d58Gc9rZxx",
  "key27": "59LcqhfaeZqpYbazyV8b2TQJvSVHAD2XvT7a11vY4FsB7PSDXzMixhTiUXgngj4zkScHWBWxoH7D7ieHM3F1Wvuz",
  "key28": "4GTAHij6AP6DgW7YD1nsKbTc2KmT13QXLnqQMs857sRJRfLMMo4U6QWVD4iQjiUeu3XtzFqFGTyjKKTh8omtXNh3",
  "key29": "5MLCpCMx433Zbqw4HT5uhyizwTBmP7Wr7rFtrKvcyT2Jq1ZUG6Vy6Yg52ny1HsF3TdfSWfa5FkpsZSJA6CT9UiQu",
  "key30": "2CM5X52nW7Xr8gdQzmQMH5j1S6pxT8LgPhZ3fcUM9MCpJ7LF78MTEasnME4Runhwy7FMAcphy6957tsP1dr9xmoX",
  "key31": "5UpZ9T8rwEFJNd9aTH6Bn2MFsehFfRjAKxpEdrNZohpo1prDZ1s929j1yonwJDQgKenpUCixm4vn1DCz9foQFyaE",
  "key32": "56nCXHN79Nbc3qjN6ZvXXWh4H2MRGW3ixcYEb9UbaXN1B9mnCymcLpoK3jRQ9WvTmj3SWq1T713pb52pvjHfrnBT",
  "key33": "2YmpW8ETwkKtNdCbfX6HxvJcnNMEwwS31XPfYdTUiJPX9YqchqnbwptyBn6HbzPkThCGNagGd3AztJLNsqJT59qd",
  "key34": "3FwNDMxRGjGRSWeu2vEUwcemkGna5Ueoh7uNLfim7zeEvXqH383tygSShbnyZ2CCvYnxXt26XKQjLdBtGKdVpcp"
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
