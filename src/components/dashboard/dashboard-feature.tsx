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
    "DVcDkhA8aGG1BZqwtpFEQwDGtWAvVQDxNeNAVyH2B5JqyhFmtsSj5cYDPEwy4FcEKXviB9emuASsQ2ymCDUij4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SELy85KUhrh7X4mPhNt4swgqGKt6EiTi1ymfJ3Btrv5eNyKtu5f3vEcav3eKKrY2eAzmRh8hdwUV1wDjCyBp3HP",
  "key1": "3Yt3bEj9gJS8UV15jmyjhZy3kLxBDq3gNw36RCjJWbpuErQwSpgAPmdiJWQBuHzr2vFpkcvrrAH6f97bvDbJmXZT",
  "key2": "4GbXDdEJj9RuRPMgbKWim852itGip1criCCF4paneWZf2YA3SjfXUVM1cxzeTHYXos1b11DUUGg48eGGT7heMyNE",
  "key3": "5y8Tj5wMLehSwoMHDZPbSW1o4TCJhaTJ1XJRRnKScTSvzcKQcbarb8srPBS8bn8Va6LthGFSA12cHjd55w2QjS9H",
  "key4": "4B9ivW8HzHHHZszMMV6HkV9RxESnFeUAMfUoNa5kYuq2nHbNhAfrARKnZwg5zDHky3WdnsFvYoVj6orWmmcgZumW",
  "key5": "5tjtYHeBV17CnyXRZwbk2jvue6oiF8cnDoFsmauCZ4MyTx4LDC8JZohqEcMxPNXPRYuaepSBK1QevphRJiFkxfyQ",
  "key6": "3QghzuNYmxFZkxGyw2LNRtKv3QwkaiqHBAdZoXmXGcrRgXAZWj2EexmyJrQzQpr6THtkA562FtgZFF71yrruaAWM",
  "key7": "3w4oaaGy5gN7AaB6svMLu2zZbFpgeubJP5z2YvtWLnsnTU7UFBQ1ty5LzBBMPZRvGkFk8aRbHqjNYjyYjesF88DS",
  "key8": "5xuNwbA9qcL4ZHBLjqQGpdTeWDxJDdFzZNeF8vU62Ub8pPLqvkm1drvanChds43wFSjbf6MwhbPQ9VMmVQLk3kiQ",
  "key9": "5if4VU4RTuFZqHtCrodUHF927bgGa1LKvVm7yPkeYt8xc3jc7spJyrxZ64VjgsCG1Q3vVqdjy4Ffb19sk1ZMrcwf",
  "key10": "eMTCq7caTWnE2XbusrGeRzB2uf3a7dovaKXtHfLP7k6SiRQ57itobF4UUpUYodaCXhJTPuehPbvWXeFaVehjWwJ",
  "key11": "3DZq2bwiBgQMj7EPoLG6ACnrZeDUoC1oeVbUBiecTJxbdb5r7hShForVQqH3oqEh46oJbzoXuwy19T5xxmmBQjUe",
  "key12": "kSEvyfTYgQTeBLa5x7xruE3bDS44M4UK8RWXjGEh1RzpJViA8GpueBYkZjzMMMxEZJbKCTRBwPxzDpL5aiB6ASe",
  "key13": "3WNuG8PmB3pHqqeQUsYeUnW8sTJnpS7bXRcF2q7qGeovxWega1pkRDgZt8sr5eW3e4m5C6ZYVYUGg8XoJmNiUBfd",
  "key14": "5EJQBCNZMJLq8RKvv7JAz6GMMTLn845qkhgBdykfjxy7obCHp7LhUre9UqP45s8PPdZQxAF8X5y4QEX9oRoaS9sT",
  "key15": "eJSmsQQ2EQxY1xYko91NQg9CkQqWkwzjp5iQyE11ikDBzmWejyJfbwxoQu985L1oxuMEnukByufwgQZR42SDAHc",
  "key16": "2wsejTtAHMaVRz93CF9tMeqtRNVGbtCJ8JwuTdcx4wjLQxhaTeAioJDQNqunHYEWFYdEXMLaMvfVYb6gyNF1hJ8u",
  "key17": "57U86cQQtcS14EwT6s5UdVTT82XETNfgS8r3xUpdiemGkwRK5cfGWgfwifCpPFmW177QdT19ZNy4t8jjpV6eUEME",
  "key18": "vPEQy1Y2f3Pb7G7Nicp2AMQ6dab1mZjy5LemkMPKDZdRrqFiryis1AQNLhg5ZpQDSFEiAsVqJF4Tw98FEjN5jYy",
  "key19": "4JwJKnTbEkUXcsFYXRS95uGwmppuxptzA4FprNTaQdnLrMdEYVs8kr8yDReZGvVekHStRSg5E34cdwBC9GmACRni",
  "key20": "2SSmj7HNuhyQM8EeepXSQrVbWeXcgxtDZffwEvHAruDUP9yAKvZ2KhXcvzVXGskFCnj17jvgYo49Df2C4hZpudAP",
  "key21": "3pC6QmDZDb7r9XUuo7HrVZuHorJy4dEWacsVoV4bCXtvzucMLL3bWK4spaX738JzeBus8CZBkMt2cvF4Xcc3q5SD",
  "key22": "43eNsEvxmVzbUGfvv6nUbH5PrTbxjNUcxRD4XCVPegSF1ojBxUTP1FJNaR6bvjMJEoqu4nFeMqLCmNo3s2UhBYYi",
  "key23": "65z6c8AhqUJnvtodMiaA73eqqXRQNSgRiYf6iwgcenAAC96NtMWGaHMLHhXXWLPm78cVY6mVJiFWGs6p4ei4Sk7i",
  "key24": "2P3qFwBUhrkA3HrQd5STpX2MquocYWHPBrqKgmKjHCSGJUenmykPdstcvJ3UNM8hUuQq3Umc1YCzC4ASc2Ripfbg",
  "key25": "3PYjJ7zNL5vXkEMwcMeGREVpkiVthUVEwpFQhxPsyLyqz3x9ce9AkFrPA7w5sTL4ZSogkUXCGHAWSrgBFV2o7bPA",
  "key26": "2QKyC7VvLWwA1JWFyP8kWCFRKZNhjtqR9fCMvEbVgK9t4eQ3gpiGpNKsniyDEhkjdaUxqBRPkee9DsUbaX186odx",
  "key27": "LUC6rfVVSyqXPmxnJjy6uhdLC4p3hbd6euse8K7a8dV4FuobLiPr8vh3EA6sgyVTSgfDiuEkKEoTigeeQF7o7Sy",
  "key28": "HhcVtMTE9Jiv2fZ6CyR6rF8M8MVtQAqimJDvDAbKJy3ZZWJk9Csr6B3SrYRxTKW17RMP3q8HtTvQE9ZuwsrXMj5",
  "key29": "3nbbNvwyLJPAUGcoQt9neSXrqsyGZho4NFtTeKMPLsW8KtVqzY2sG8cm7xvucvLm4mqb4rTepmJpMQBkCnkEWWM9",
  "key30": "5Vqe6ywiRvTXvsNkYWLay3YTi4365cTo168sfZgzbZtQWLELhdC6GQ7YVfR1qkWkJoS4EHcNFnmWBQfaFuDKiC3A",
  "key31": "2Dx1UDXK9cpiFxG6D5s4V92gw9WTZCjh3ZkGX1cFL1Fu49BtwuBNdG57oJdQwtLTpNYL2d3Q1bspMP3wjC7ToFQS",
  "key32": "3GPy2Z1Q89dWFpD4q1eFR2jiHmZ4LmtCCEduwzAudD5rji6THAMf8umLy63V72g9TT4QYkWyUgX3azxu92VVG5F",
  "key33": "4akufmnKspNZmURAW3VneCYSV3121fLs9ovDpZ1MAiAVHiRjWFoXb4DTguvaYxEZ9k71jJ9xbFzKBb4RvGWchbaf",
  "key34": "3NtnARTJFzsvtwzioANt4H2WDhczaQKM6SLwsp7dbqPXuJtGUJNHUoS1iUdygjdkxemkxZ3BVmV1zY1Ym9AMJ363",
  "key35": "2WzHurzmw6anFQYwgHUTAtrw44Yu3H2sQPofvyooAoayztkJCRcth8Ehcc1Mo4ZW3WZQtwKNPChPyfQFs7Y7dC2q",
  "key36": "44ivb8pWEJJRYHNofRuKr64PZZ3GC9PRNrFMCEHX7YqsWXmK2aNUz6s7LR1KeBKeQGVJyJ2LQPS49nyVhEHoHQNQ",
  "key37": "41S5Q9ivrVwCTKvaVRHfSmU2sQQFN8nCubbLY9WugJ4FqcXy8oWLuU1hU5tS9VVVG4dGaGpLtyu8MaGcHAuKhJZJ",
  "key38": "YkXHhJqUr9L6WG1AQAFnhZTg55srrvpWbDkpLWZ6UEWgYjTM5gUu8jYLWHA6Kwve6hGSnSQ54M4jHi82xJacNyj",
  "key39": "VMj2qKxuJsbaSWoAomJ74CmyGM2VVi1hUJFqqkg7pi64pPsLZzo8xj9rnZ3dfLo81REQooZQvRQDxCKBJqizNTC",
  "key40": "28UTVK2kk13uMQanL9PLYPMBiv4unLDe6sGE6dSQQgjo7igSJ3gtLXqkBDWhUtHm8DpShEawREH4ymuGUzdY75zn",
  "key41": "3mJAxr4wQyWwe6Y9eHLC24vhLh9JXpykdDtUMU4ajhHZhVrQAP5p2MsAz9BHEqYmuoqo9bGmLBGn7CDpgHcu1ZWV",
  "key42": "2AG72UmuzCFfREKaeqgBKVyGFsNmSkcj74VVahCot2WYJk6WcrjrShptn5jsaff7duav4Nuof43pWwZ9cR9QAxjo",
  "key43": "T2zg6jLXQpUZwG7n3kRpRT7Uq7tPMQoqDTPEhS3A8KZjfnx3XPhC4H3ma2r5P9zt2BagzFKZF6WGZEXrLBwZHNG",
  "key44": "5NUQ2jqExvwhBZYDw6r696zMh75SfuarE2dKFeQpo7r2GXUkMTgqMnPvAFuoyhaVWukAN8LgEk4YJEq8XCqPgdUi",
  "key45": "4qb3sDxeyqgWked4anTWqGss8pidAqKAnzu1x5nf5NhByfMxmV1L8aLVNoCmdKYwsjFHWdKDti85eVxnJfjcDzxm",
  "key46": "4jpLgo5vSpWnVS2JPGamMm27g5LCy2JLuPFYpGjnLVyAXhpVnzVmbT4NKK4Bv5QrsNu36KMHErBGUj8KM7m1a4Ab",
  "key47": "5E1hT9CtRKws77cpUkzocxx3xWPdANsjZn3iUK2QvuyCHxcvMYgyc8HoCTTVW5UeEy3wna6g3bYqKKBeSzfw73eG",
  "key48": "3LRUk4U2mNxoyR6GUZ4si6AavQCxNzBTTr37qGjfxWFSv92WBD7ycSPqGcuMj6LGAqz4UZ1J5yywKBAtDNyviTu1",
  "key49": "4dTz3QX3PRpTVupNe66d9P6N2LCNvkNWS18gyUZh5hkYvwwmQ4PyCiFwMV6mQcjJRUy5AURnfafcbwSzWxLNMVzT"
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
