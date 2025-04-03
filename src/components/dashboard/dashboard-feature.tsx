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
    "pGWE9RxX7WF3XzkLsoWkacbHB35r7FonFXUfr9YsPfddieoZNyVfFtrLy7JH7NijF3jQBdqg41Ayb17bh6RTZAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "449W2hpsGCLJvutvykCjVAXJvfwPtW5WB1HUTBnvEEXVxg2Mujh1FDehdJgPh52JDxkFutUmZW5P3ga1fXTpVGqA",
  "key1": "4L76E5Crzv71o8nAbSDyLxjEy2xUcyvdeZqtnv6jhoNG5SFKS4zPfjt9oy9mX5is2DpScQtZm1bPyxMiQASGK56r",
  "key2": "4Zf3CHH1QSzvFQvieWrjXTY9UhmA5GfkAjPz4YW6kyj2s57e8WqK2FcevWSM2zzHm3DoY8ya1bn3PdUgU6PufLkK",
  "key3": "7XZzjYviFvevN5j6UtGZQe5mRSsYVxYA1VuFZNVPitCywVh7Kz9XAaQtNxFj9bYWrG8y15JiUwP8LnwaQnLrwNx",
  "key4": "4ncphZmLGX2CjsNPqf42JyqDogBHRQjbu6p4jnD5C1qRT3UoAbntKmzZ1vpG9uvSQy7cG1yyYMkeuDfwj7ooKXmT",
  "key5": "4sNEM6pnabEBWNCwAEWEy8pEyK2jxQzUma7UwV2LmAfCwUi9aNNYzvSd7f9tLWKiwjP9NWNVbUZeWipybfdPt1dR",
  "key6": "4F6aBqSFdsLeiuvqRrx1RshXNeH8dtiuf5Fbr2hQP3hhcjEoDcNynFjfv5Bwcvuuk9DCaXzqNWBESFePCGe7jcp8",
  "key7": "3rGDbwSqsQcz5vkz8ew2SxgsLGAf2ff7GG767ewXib7j93Rnjc2xC2Vced8VQibeTC1mvLYvvnqbmr44KmGhqaeM",
  "key8": "4fMwbUd1V5JtQdzi6LwP3Vy6gkowQf3Lypq4ShN7bZcbxxLCLJ3m1vTJs9Far7LhQrMzzm2oyPU1R2TNPjESjb3j",
  "key9": "4MKF9fxMqW92xwFxtPbGmV7kri5Z79GwVbeXU2BU351LtBHQp7CneHDjbyf9ubVTTmSwg3zqbreRnQTobBuQVY57",
  "key10": "2brMdHKJE4wedjVjxx4rFHjpACzRfszZUhedM5EWgmpJM9WN9tmKYUnLWGmADPrDQyhqU2fCfJTFHdTLBmpNgYwj",
  "key11": "2zrFtG92FU7zE66YtrUVLnkfVMRAFdfFmJ9DsbjKk99nkxq7TRD2suQjq7UQuU6R1d1wnQeehkmk9TrQG7SvhTBB",
  "key12": "2oT28Qpby2T6ioZWR3b5V7oWeaX5ic3xoV9hXTCnLahVGCdR4u2ert5sESwJ9ALqYiNXjRhLaZ1dkDpMS2f43jav",
  "key13": "2815vrbXasRikzQYCZqKWHJ9m7jiKoGGDxwVk4VAurSe9NYR1tHuueo3Gpkie3PSY5tBc4wMkHsbCrHK5Xki2wds",
  "key14": "3wrzYv7tLW4DqpvHPH7gghAEnRLo9oxQUJZAsCuGfjPYk1xXwMXMG9gXaa3YcYWysWZndWRt56ALdMHTepCDy6tQ",
  "key15": "3A7nhLXq1pJ77a8FHUxaqYsYKxG2C5dAWky3gxmCL63Zn5bDpQDNS99vzuLDyH1VLrUpKSk1V19edKuQ9Gdhq98S",
  "key16": "27xKBZVC4V6BNuQEadAcQBfFYqRwpBRdpPzF1WxsgeQ4dtMeTbNhDFJWLhU8QRK7x692gfLWnKAzg8iAQ236J5JR",
  "key17": "54WpPZuktfcrkhH8pjKrJQsJJgsQ6ZiLmvFVAwjvwEzY1VNrheJ8TUovUBLiKLRoYdrSsdAUAKovqr1q4fVEc9SW",
  "key18": "2mmUEUCt3ENeZEN52PLsqzFMJfQowMzNNb4sts873vPs2aqo7seAZXzGA3CrNgB9hSnpEA3KW7muX1dJCxKLWLak",
  "key19": "5Lb5TVkzrMvZs5cr7A2czEsJoF9bpbMp5Kuzi15BMF2QV5z8kkkjYQnQfamcpbpzgQUGPhjQhDLF8z24giXrbzpo",
  "key20": "5BZEHvma625V47XVZbSUgtvub4dFdZKbh7euNUdJNh57rvWhvLtxQNLckpWzTtvws3kXMFDsv3QBqZgrYBHWzKjf",
  "key21": "5GNDiXDzxGL9aX3HQLzWPoKZ9GD8zZfnvgdypxNdpHN7eD2N99gJ37m6dHo45VqfmwmGhkQjw2ujXx8chNEAw93w",
  "key22": "3NuREGA9DzNbZdGLmYUkkjEFu7panq7fpNcmX7wGqZATJS3QZVXLXg2HmR8mwa2Nem92W1zVH63QAkyuUxw99svF",
  "key23": "5XpF8WctuqSHAmae9UVHvmSnhrCKyUPg7Jf8vnFbK2KgfXf7UWK4M3qrKemhQHYM1T7xKiTzZ1YUBAKsRRuBNQXc",
  "key24": "5SxSzziPtWBRLDcVpu9Bwwc4EWdzAVjeyiBiCLJmQUDCU9dgPEzd5B2RDWEtsnhA4B38fUbdUA1ojsHDVpscThAD",
  "key25": "3DdpJW9qGPz3eZ29rPHxeMGu1nQjDQceiXnagxq4UmzztaasdfGEAKTQHZkD9BP9gFagBYUn3FG8CWjTyofHPtPY",
  "key26": "5MEwfNtmpNoeMaXyJmBQc69LjjBwa5Qw9xqSH3S8JNdGQQNCUU7UXEoH78ykC9ZH8Zd32BiPttnzrysfpZqKV8ks",
  "key27": "43UFw3MRqepjQyDB37CT7Las2GMAfx5UWVAWPp6EoWRHtdLxpg9mTaqJdfp7dSU1X6iTFfgrGPfWcowdrn2v8x3y",
  "key28": "4t2eZnCGznvz35JUmeDCysk3fhzg6YG8UfFnbcWe1TdNVBUvR2zBJaQrv2vHjv8P8WSMmdeyxiCiDGjdy7JRGQEH",
  "key29": "3QC8W8b8GVnxLjNqZNFWxs4YLMBhtzwjab7g11b3QsXeVsSHi5hk6US1JqrdokaHYx5VY8NWgdd8S19tvzz35mgK",
  "key30": "4jcAFqupkpLzTrqfZY3TY8ht6UCJsQJAJhtAzuXGnNkRirjhc6NUGfq9tKeFLu9vWohbqr8Jn2Ys8m1baXUuirLF",
  "key31": "3mD4XyjjgteovuzkCRm6T2ZnuaAjcw5qeLaEexFwhexzwX7P2zeyQQy7wUyb3H3qAYz63imXzXKd5yjp2YizuKxy",
  "key32": "44SjRAKtE4p4QBS4khAvU1Zdx7mk5FYwvkY8PjxxYFBCQr46xPVChvSYtUBw4immAqfEdxRVw5q5vGSC7RxT5K7j",
  "key33": "5ymSz5jS7VXcZKH5pURHyctZLNUNxHZy6YwTrzTQ5ymbWUjj6CEzeynmxh2xW7dxLFoc4kUobuGae6SxjX6ckS5s",
  "key34": "N8jWnPWtqMHnn9byrhLF2MXg6G5jm7F5PtQjbvCmadjeWZyf3wJFBS8rvnKCANHxPDxuZi3UFyJ9m3pGmAZt6Vb",
  "key35": "41MpTjWkYYoHVZJWdcvSrXZKm8p877fSbmfrnCSB9jkHJytPA2MAqPtkTpZgqnZ7SPQ3R1JnyJRGqMz7rhW4fQ4M",
  "key36": "5JmVanxfLKU3UsXXgnxn4BHZGXmZU365KRHtEA17Fg3eBTA9nDrcBPGveXtUmR5GAyXmirMD2BKwT9ruxTSYZy7w",
  "key37": "4y7Q25gaxRogWvyzae1inVcDd1JRynk98cvmE1yMinut5HxH6iXTnkB3S6KjiRQv44QiKfa67rXAYvY4213qk56o",
  "key38": "3mA58AxCbB74bf2JeXscoSrnH8r7WvtWPV2cxy6gdskWDP2uL6pqq3DLGz1GpGpFPThM6SxQ4K7Jne9rvrBTMj1G",
  "key39": "2GoHxHcPRZLWFXuVi9FpGi3FiZ9Te3kxeh3gNLt7tew1SQkkd3dNmT3PRmqAgv3RELAQSkeSv8bsBwY3yTEDgyrq",
  "key40": "47rZQEvJfMoZK6xwnzgfXfPhDsSvDgtWBhJQwr64pEjM5CUvjarAzJEub9wnwmBz2zQFQbH4mGbPGhWx92DkgcNp",
  "key41": "29DqmDCjPJ4Sc9HRJZJ2MfxwfieFSLjPq6EMtUkRraxPoYeEggH6A92Z7cKw7Xpb5zZ4YyhdENcmqSPHu3h5Vh5Z",
  "key42": "26ZGd1C5S8R3KakW8LDuUkjEr2jN8aSxKA6p2ZACP2Hq3LhEpxgmAQGWXGAyGiAnDJ4yWfHJ24Wm6FD8cEYwKY6h"
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
