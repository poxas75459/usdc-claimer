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
    "3jN7EysQHjPhuZ8JYbwmpL6fhPEK8JWZ5wz4VJyj2bFv6bML8K68ebbcrCEH6JNFWFT4JoyAgF1aZiyUwutfqTVj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hx7hvuALdzH4RwKRTSGvrZ8Vpa3WothAyoqYV9r9v7Eau53bSYbJ41KAZJEKWqryofLZNo3Wkk6Qx88E6jw6Skn",
  "key1": "2vSv153oZxSjKuqpoAjg7qhbJX1Dp8z5iQ6gX8Dqjt4mWwBijaj9d5rToS753po6AQmKQZupBbdvJJjhz8ZRgVz5",
  "key2": "s4ZtPt1JyX6AWniRa9vC81ojqZ6fDswwsbBDGTnJgpY1u2Nw5W5rKVF1hJMHPHy7vuucZeY1TT4WgGz8Ar72fjn",
  "key3": "5sSWJrK61iN8v7JeY4pmf3XZUULGqhVcec1DHUFXVWiZRYF1sRenxsGy9MxyS8fjcZW2DJ1pcsGCkYLRrdvhNqdb",
  "key4": "34sepEfYMF5a9Xx2qypSaCRKkL7m7hFbJZRMEHGusSvohezBgSXJkZCTc4LYjg6T6d2gKniey9ru3h6R4vZKjJc9",
  "key5": "5NGJ7UqzL3EUnUf3d2jCpK8a79RTbSwhi4Yvof7L1iry6xkQjAu3a1xZFpJmyvZ1utfZyCcimjqkh3XKM1MBTsLC",
  "key6": "2RYGfFTEbgNN4NKwNzuSD7w3W1F4i682X7b5zV2h66t8Yr9fCDVGyF3CqigqGJtBomhzNCfXvriesCmzFZrHgpt3",
  "key7": "2E5Awc5qjg1KXsmiPzAn9ouFLQhcf6JrCvsvT4SBHYMS76CX5zDt3WEuEfGxauy6N9mYM2BruBAwq3VgWu5bYB5f",
  "key8": "3WZjT1AuYhek8AZfUHbv8xeo2SWaLzpZbHfuH7XaZnKfUi4mdtd8QiJQLzbCJpzYi7TnMHKoDdxxeDuFxpZKqc4m",
  "key9": "2sT9vw9Ls9KTAZyu1UhsS9ynt5sr5mbekANaxGw51vBe7gLwfgUERHxXCKXi5cCrB4httdrcLbDCdMgxL3wznryD",
  "key10": "33S8RSCMoS3U8YAUnSfMB9ZKJqW7qyBg4w5WiR4xNMFhcEKvkP4LNNtifZD93o6cNtdpnfvisasg3NgoFg2vFP2U",
  "key11": "4Tc2hCSoYk7GesGPHPA96rFeq1dVT6pVE8YmeASeZkAiYzaaN4d3DfZXn3cUdNPrVhTC3Ryqyk14orjGdhm2APS",
  "key12": "5jr5bYGfBBFpjkjkapiGJSXQFhkx1wC26Hms9ZgmVHuJQtQihzkHdEwMz4YxmrybYriPbG3QJxDWCjNz6ZwrfXWW",
  "key13": "57THBQEuMHKiCzVzvMTkem82w2QSSyPshkn6Mk8zeYaBk1zHS2ZwD2oPRNZw9QsijTQwxaR9S4mpo6SLr9q9bNGJ",
  "key14": "5myqr8nEib6Tqn6LyeGgcgCbZdhC3uvsLZ1JabhfJPGgoki3o2jpBhyF1rfNyCP1cFGc57UQP4eawhLdUaboj65r",
  "key15": "213h6BUGRMQSYaaUQxGLfVuc7qfyU8z9VSi6c4kC6viEYh7M1enzJkGvcPff4MsaEcBz99kwNb5ZUgtC52BQRAdT",
  "key16": "5EUwbpUjkmMhFTJywLY8EQNA69hupCUfhEcB4Ch5iuyUnzrRBjD2azoJN6reEtTVy1ExcHRYVN6yEmhmmsEvfdc8",
  "key17": "KQjUXcp7DPWFUaWwcKVtAgUiPARy1WbFsmzJaNMdw4F8kZ9NKRpwT7UBWpkvqhMKmvho76j9zUQp1dEtnmDVqKo",
  "key18": "2DAKWPB9hBEkWSoDUoNA1Am7orHcyoXsDgZQcDiuf777xpdry5vuM7Sh41kkCz1wNkjB29BGrNDgXyB5AkHskaZZ",
  "key19": "56keTCN6gKQtzq8h7G397DNoJwPpNqv7kciooAZpSAbinByJFTjTWpUu3fj6hMkg45NZFE12oGQnYWQLSwBp5xHv",
  "key20": "2XSaV8mNANWojE5p3bFpgxi4NqpbP2gA13rYg1NJmqorL95Z422m56nZRrJieZRnvk1rNkK5M2WRzuKUsmhEmWRy",
  "key21": "3VhYuoAeGoLTgGvaZrekSyw3waQuz68bePGHvinxf12cqfP9vsgEd1B4mmXmheiByMxCYaK8oJ9x9LA4YYHrhgT7",
  "key22": "5XqAmirV5EGixUpTyDtuSjV3Vusbs84TJhiQwRggUreNxUrDA3FaKou4QWMone8uc1rkC4dieswuov9wLPnFwKTc",
  "key23": "52G4BA3GYhusSRZyQoRxBK8bN7oTGkotrDKSr9fnP7hsjQHLVq8jJ3TnbSJumkTuR3huu6zMfrm3n7WDZwkxpNWk",
  "key24": "bqgFdPPSSwQmLfC9uQinovTCW5fce27LtNSomzJbzCd2iTBLcKkwDkvQ5pduHoxLKfpxHZmo6QXcd9Ctdnv5kDp",
  "key25": "2dRvwP4B4ndMhwmB1yA6ow9w2oEdazBxqNgZUNJ2JLevV5znrEcMTsWfkPH6QnzgLYCdMYzy9HSmSgSmpJ4Jy2oB",
  "key26": "22D9sViTNt2GCSuWTYqUAo4YzS68x6ptQQS9KyTinbdUFKZqpmK7iPDfBF6dQzUCJJjBnix7AXouVuDSrvTjWEM5",
  "key27": "3RmZRAsE5dDMrhS466Ds74w7LwWinjpqB7Mma9ZBTA5nqiqnuUCVJxk1ZqcNeobmPqG6Rs39uErE5wxoiR63JdwA",
  "key28": "JD5UKrVFMfufvetGtCoQQ4kL6x2aUqhHn8Lbd7SBZZ4qNci78pYwLfcPjWgvScv8bwEZw86dESu2vBPqVZuJ66Q",
  "key29": "4BsEDqfKqW2WwzaRGxyNwtBYHZmHknk8yTonpN5CnsN5KEevpMRXdaD9cTzMF3iGqiqooBY5FvSweg2LRiN2d3DM",
  "key30": "5x6bPY1QpHgkQsLPLEygWnswNVYAxdymR2Eyxej3mrLzkhmCBnZ5sFjrFU8CM4hyafJUUK7RQzapAmVY8T3X5FHe",
  "key31": "5twWviGKTJiRth2h6nsmZ6SZ3c7a72WC5LfwbPKaa9cQ3xbk7nV5Gp6jwiXBv6jqjPgmaDsnUDLyN9LefEEFBw8m",
  "key32": "3y5TNkQBT8RhZ5oPQkVQnogGUjrygt3TTr3pWigMk9BKVkj9QzN4bHqkwCXkkPjtoMoSLMWMJKEnPtCkDrMsnmVJ",
  "key33": "63pEmnMTzXt4rXkcrMMQzoCGckuzdweKpx2GGiwE4h5GnRS3gL9rLrEmRRSV9ccr9fXnLPLqmmL8AS7RrxH1xxue",
  "key34": "Nv92QBzNhDNBBiNyEX7GAEE7nUCJijP9vrje3tZm5abUpEXkETbbCLHJfYXrvEuXLKpXo5AMRKTe8Nm66YEHDzd",
  "key35": "39xdvGjVYnd56iWoqtxG7KawQR7Y18Kzwm4AcBKCDHpbK3Cb98GwULfyFTWEvS8VKd7xUSHEcVi73y2avVBNdKa8",
  "key36": "3xaz2sy9pAUEcrrN6rooq5wB8h8BpGSh9DBV17ZbKarWGYCtDt6X5oxPJJAMJzhZgYuDHkA4V9XMWYALiMkuf6PD",
  "key37": "4rnKjZp78czD4ydQdNQ9rDVL5yTmNVrWVHjmTckAiUCxUkijLVTpYCM7pPcH64WxhGXiHPfyaySgnQ7wMywFVWg5",
  "key38": "4AnDqNdTj32mzakD5ZyEtqyA4gbaQZ6xJZnJ7jPQpcqUaL6UDnNwX2cUj9MKCX5LXjCTykbTN1sJad9hjxb6Ydf6",
  "key39": "4EMjwVJGk6VREEtnk7Xx5dZctcs2aHoac7iXdaB4BP8aBGP8oWFyzjwvcXKWMJgw4AcNMX4XNnp4ACtnxJXamoE3",
  "key40": "4gBccFusuwfEnypB2tFpYQQFVksUwPLkoNtCT2KKtDhRTJZKwZL42RZM4arYYme1cmrmHWmxXsWYCnRBEpTczd8M",
  "key41": "RJ1uuLTF7C8whKhqH1uHTykvXkcGfD39H5CToBAeRdXmeFWbywWf3qB71a5PprYXPnQZkUPzfKPaNTf1NpZTrdA",
  "key42": "4Z4B2R23eqrDR395qwi8A1dmuP4TmRcQTBgwEJgEgUGyNj8z4ocP4UGVhNFtyogVe9vTu6PiKBAaiFtNGd36Ff1M",
  "key43": "5aZb4nq4UHZJYr4rLx1TY49ZimFXr1QNuKEzrhZACAmqA8Nx5S28LQbe29CR2knkZYGSgopFsKwrkfXw8qGpst3F",
  "key44": "361dXQzZBJhzmSoYMZtbguTpEpSkZCfKgsNpMGpjYhmvFCn9J7vMBDG18QLXHFaUtXVwp61k7pXdqJjMzDkCyz9f",
  "key45": "2wgYHpCyxeYxBryvb4JVTDgxAZAKhsF5SU9oA6bha6hhZHPkFoWPrXHLJ39zuidpnvvu3GcLVH593sd2KCaojGp3",
  "key46": "55Z8qkDwni4JjZGXeb9k3xcAmnyxQGLcVsGih3XAqQfJv5ikGQi27hwmxcmatTgRRpWcsV78oRwbMxoJb2VLCkPY"
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
