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
    "3XepYUXWJRfyesJyx1877aa5mrqyFn6rSAThH5seDiKLXxVr5iECCZmTdWabGqQA7Eq3EVUq62aFqZFk37uCHbYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53F1wHm9dhy2zxp9ZseR6TfvBfh2Ku8rda1SpGrYxtfr2ShfVyNrpBfQJURNvumdQnhKmEK2kciYex4csHEvaipi",
  "key1": "3U7GcQMV5kw5qo8z9uxV2RF7yXCZC8k47ZeZDqk6e33eknGSKi6rKd61HiL5z3MgrQ3BKp3wgnV4j4c6gbVPqsUh",
  "key2": "4m83XbUxZ3LJvQeCoFRYVLpfugmuXBQCT2dNHpypSspQ3tM3Dh7rY22AiLD5JjtbnYFZdkv6uwWZDsj8t5hAFSyq",
  "key3": "4SgGw4cShmZbXmanm315KCsdreRiWWtU5ajxeEka4u1SyBT1yGRzWiWrPxbL6yejexhiXJ2MsPpqpC4dUYcj81Po",
  "key4": "4cNZhqgPdqD9FTW2ZDgCc2L6g1HbjxuCmSBVkCQWTuvPWFwd6gBtDg5iwfawW1nGHxcBaesWzTDBVEKoLHFjKumY",
  "key5": "5HDpbGZQ7bAiWofnWkTZLoqqWu6JQZfn68s5QohGaLxa6PGpL5492heL8N8vRhmQ7GP4sn3sdUGiTkZJUPHEbzsF",
  "key6": "2SpPoydbwN7EGLHiX7maJ1oTThLoV8Le5yZ6wgRr9sKoitkZ6yFNrdfxSDtYXSxwD7nswgVWMqe1FuG9Y3LPv58x",
  "key7": "58TbXKFT3SHd7HtsmKaNTss7PRoM6xHJXYXckFCmhUjR3v4E6eWz2UF6kwJdA91FCMfqycoM61WWjdAoxAzBXR2x",
  "key8": "3vV8SSgfZL8XFxKfSbTQyW8T433nyE2y8oGRT4ovMsx55Q4nWoAVuBjiqvkRSpjTBMxYQ21MVp4sAS8agnNpGbAw",
  "key9": "4P4SXGWcBYwc1bB9vTmnZcy5N23UZ7bJzUMFccmsk9RHFdWcKLxUFDqAPrvzJH5GJJsHViGZpXBJVfs7GaCgunT6",
  "key10": "3w7bQr61Q2Ubzmiu7j8VXGQegqy4LsuM3JGrwhNSZZkiZLWH1XXHcRWC3zRtWA2B2CoR5GxLDk9oWeQ5ycVCSQmY",
  "key11": "2xx9Zktf8RWMWBmmzajd9qskZr12rioh59M55sYbAuwRkguaX38iDUCAvFM4y8BJeji1FbD4m5YjgQHN323RjLmp",
  "key12": "3a7hUJf2XN447b4FrijreLd9ERtXvGTtvZc5CbkmkqrTJU5i4GsQn7b8pvU2wYppwVcN62Bb7quWZ3cK7iBDSat1",
  "key13": "2Rmo33yj8V41euzmpKfKW4g6K2Sj8tgwvyjdsMwVBkLu8m9BgodTS1kDeCdLtxGJ7YuyeGMnFpiBxxsgekV853Ep",
  "key14": "4Xs2wXkmYY2aCp4QSUMfa2Yi19Qr7ksCCTmXZy8XV1QBGMgbn5HXoXbBbcnb1PMgJfDFfRi3BsrwSDoXKD4Lrmam",
  "key15": "UZkZM1oTYfXWN2RWXCwnLY3PWTFyP3cuzcUsjWcnCSnByCNAingQpSWqoiEEHt69AirPeieGoEacKf4rHcrwpL3",
  "key16": "4v25UZ7T6QdG3rFuaAXCSthErKJrQXpTgwomGEwfVqRnyrGzH76y2hCY8mZbrdnpub4ZcJWfxT8ZBfbnBAqt7Ke6",
  "key17": "4YF8PTaFsTbh76So17MYm8MLswYRvWqLoCGRqJyXUs3Lr5BvYGfVe7um6kaD2xRXGyGUBRWEKKGkv51kaXHf7yki",
  "key18": "3Pn3jK8aifpg9wnMY87wwXLnC83N5KLnNcvYkFDp1fto7mHp9SHmY4Cmduxa3E6RKeh59jqHqatKGqt4TykRisUm",
  "key19": "3mtK22nP8C9imnXfZpNtgv5xnjkdvLoo4gXkxCDb8uRMW5AF1RsrjHtciX4aoqhBqz2XxmJxi9qU9bQerrMPX4Hv",
  "key20": "5K65G6Ad5tq9tfVFcUn82msLr7bgxTQrRFmbkwGfnh2J8dNfBFd1CgtKzQ2vCKMgVUEkUoVsiKh8kZQ74qFpnigK",
  "key21": "PCEwQMd6Z25ryZjPN4iKGcQ7Jm4ctZn6qT2M5ecdj3xs5aVjP6e3Sn3noxhukjyLsormmCXaikYtPGF6ysJ7zyL",
  "key22": "33mSA7GjJKCtKxzU5E8j3DL8qqWHjC9SFtCfGMwvbq8i9srifkee14m794Y3Wgvar71MdkUR5UReNmqFaJiqimRz",
  "key23": "5zjK9pc1h2UcPrjzn7a8Xj8KtEsURuUZ2pMZ7FtWWMwFwa3iMyGxvPQYn4w459mu26UNa9znyJdo9fgdrmgxK88r",
  "key24": "3Dc5bzAdskz3KWuYjXiz1KLNRhpGL6bnTfNXwnWsniuFG1663Vhnk7Nzo1MCutztJ6ZwU5XbFANLkxNqoe4nZXDS",
  "key25": "2djdzNyb2xEMmsU5k9rtJY4X1u9jkQrEDvDm6ZhQeQ6VXPV5CPqms6iM9DKchUA6WowGo49XRTt2CRB3aUSB8wWw",
  "key26": "5mwjMcFuaRLrweo6YwWSu9ugrRZRQ5k5s3fYWuCxXyLVpqVh69DUuWdKuLS7jex3bnW69KmW9PsfhpLTKjtAedfJ",
  "key27": "3VEEPjSxSGjE1Gg6NvNbxsFJ9RJrgd2G3Kcp2o1L8ioKSTpYz25YyvCkdxTHtBGUQdHoxetcUkeSczsBxLriD7AW",
  "key28": "RfTGcGCGZ7NS1xYnynJA43aks6stKccWeDpypGK4x9dTPkd5DiFuPjDKALE1phyXZUTKMQ4G8qrgS5B6472XWQj",
  "key29": "bd4ZgaxGjmoXoFETr29EXtGoEGHL681MJZUZjiaCYJxSNz3eY7YeuyUrcZhoiLw7ogcsNBEnAZ9KpQNtuzCbzaa",
  "key30": "2Ko68nkAdgEvRvHS2foRe9gZrPa9hiiJUC7bU8jAhE3JKSsw87aKD4sXnEFDWBT4z3Yj8GkdjxiM4qcTFuXr1SD5",
  "key31": "5VWHE4mAsW39yZnTWLkhsVmpsSahZx3e3xVpGHrq34yzjWKXAEFb7MuFV1eZtD766DMDywGgxwFs85gYQh2tj87K",
  "key32": "21SNeUGY9Rgq6Mmyo26U7XGpo5S7vTn9yYvNTyoGyZcxW6ueG5DmA6BVX8rNXyAa1VpycRJGi94qszcHSahp1Hun",
  "key33": "J4WZvyAWTLFqyX1wY4JzRNXP9gDNFDQE3KbqatmF4cB4VWEXmox6cc7VF8Xm1FXdDz5X7uy85K7bqJ2uXoiZhqH",
  "key34": "3enz9zZ5jEzHPPVtzQpRy3UwKbqB7Pitom6Jnxzr7YauQrUk5qTyEHVvXZ6q1R2KaPf8oVrpweUwsxPgP7kP3KuG",
  "key35": "2dTfJh3RASLvXXMUeZxhdhjeor6GaqmsJ3F4UmGjgfdKxHQgsALUFfepthi378pGkxqknvGMHpw1HKDzQTqt6JZe",
  "key36": "39hy5cvwfTE1BEDLrHD8WpTAnQS9jQWr2EjGd31CcWKMrmZHEJhCJfeqpKUPfrRA1NcUv7Gyq2D1D8ey2iPUB2rH",
  "key37": "3z86UTVN4JGJeikntiwmr8fWyPBQciTP15Bxg9vHsFQA3bXNLFbP2tL5D2LRTQqdMAfeobAqSvZkh689KRndQ1WH",
  "key38": "YXsYnZyA5WgehpLtT9s8EkLEtZpuZ2kZ878aYVeQd9Qk3AGjvctFyz8AhZa3wciLsrSfN1xWyGZjffFWkzNQHVb",
  "key39": "44yxnDT6BxHUXrDeRcUHYqbdVEHPFiR7R5feyTrxekjgsoDacQPdiuUD9F9vWbFKCoMseMWHDJjfG3BdLUNmR5A4",
  "key40": "3tctRMSXp529DC4fvZbeS3ZgZ6d8YVsyet86bgPzWgDHYnT3dtLH39S6JjgPp68MxXfXej3sjCT4T8ETUFFzxhvh",
  "key41": "5ao2FirwQpM5na2coELJSYbT1WKmPDsjtCN5qod6RwtR1iHEHGARsosTKk4kQ3ZHF5NX3FgQ7cGhNkuZzLWUMfm7",
  "key42": "2EpaBU5h2LmYeF8GMyTn6QQ3KEo8cBbv8ptExnHUfoekebM5KCuuchKCAgapyqmmVb1tpgt1hFZMDjGhxY7WWhZY",
  "key43": "2ULfDunjvx8ByR8HepUmU9SCCiaCo8XpWmRM89Fi8b3WnZMGy4FgJTxuLLMn4Jx8owCpQG3Rzsyv7azjpZBLkmoE",
  "key44": "2LEPAcBQEXjDWdvZXBSRdXjXnVAz74mqGj69fZVJkVyaBWFqKkmvQrikVLafRqEkTwh7cuZHAynbM8tqZC2jkj7f",
  "key45": "5ELvTQbK9NgzMjZkPj7BaTRAti2yAfeUTF8sQSPvQLacWvQHrecZHymj87LAnm9BpPXiNHrncDiQHBUAKS3Z2uPR",
  "key46": "G424YdsKiqm2LCjQPxBUYLsjTCwDo37ZHgpzQQdHmzSxLr1wAbDUHWMEjiFwBSp3VuqM3tE2dTQ2Q9YU75MyrKD",
  "key47": "2u5CNb8P1s2Up41hYj8Zp2dYfuF5vumZ15L5d4QtJfbWRagauFMifxs4p4UWjyiWfUwUaYvRPKMf16YyacLrJFqJ",
  "key48": "4gcJGkTUfweRQBeuvkrtnohFpgBiuYnvAiU7eywwFtjfVW2vSbRii54NYrySzb2C8KwD1obGZKDfKEGtVLti73Bh"
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
