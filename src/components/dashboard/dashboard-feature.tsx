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
    "auVMEGMnmmJcKJDt1R8Pph4mTezDH2fRZkn4tAw9Fi6Ttmd7SUwXnwVejNjCPC5XvCewoA153kKvtjcHvYVEq2b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BAMbMEk6VD5o57KWbpAqcN8E5k6WZHEMXEvq1UW6HbFRbR6KkydJ4PxxzAbEPd7puXANmHAXiphnzVKDb8NwaNo",
  "key1": "3WU9tiKVhWqv8Upum7vz54hNVjpcYKWrExGLjZJ3rAFsYTEhKXdgHwPBYb2c9r1ZyPAxwiXvmrXZJzH6FwDBwB6Z",
  "key2": "Wmb2Lr2Pn8on6o5PxMaTxiYBp3AoDAjEvY6tu1jbEgvtUfWnZjafgZRuYuJPff9YBPv6zjksnYH2GRkEFJMqHVf",
  "key3": "5JEPfc5fovgr3bjtDdsM1fD4t2GMadacrogxyxwuWqaPUXHcU5tnVi6H3uzVjarpCiDUcMnk95amVKcrv549wsCZ",
  "key4": "3nAVfMnx5hhDgTbpM1BtV2BpMVjLE8NNGK1AQdrPGMZo7MELrsGWDNAKPAPNqH64ioUZDsiv3e2X74CFnFjJGcHy",
  "key5": "2qVTDUbMV2RgpWhxr4JjdHEFN5Kj8wBT5JRwF1EhPDds9TbtAsNFqgT2MrMyA5YWzEqrhx6VjmzHcjheaS7NH7VL",
  "key6": "hgATkPRHa489r8cbZnm5jTXhriNNzi1CM1SxiigHF5CFrm5qrhYdtTiUZqDtq7wPN3ZDsJLZJWf836o3dbcRzyT",
  "key7": "3VcBBZwE43bscG9t1xrbR66K5TVS8d7WNrb7tZjMAhKBe139kr4vPKU5oGREXFCjVA7nKtF8wUJSbXgqViA1hPaN",
  "key8": "3hwn3j44C6XgLcqdiUcsUXphNoUhABYnDNehw6SCjXuRjvPvPJpsHBoyo96N3SmRD3LNMVz2rMBSGUo86ay3oR8K",
  "key9": "5aS6BXmnE92DE4L8UEVtEo1PuSz4DgEPwtDzXUvxiS7PeKEpchrxRdbeLCFW9iYDoximTGms1nqKDqdcrzGvjQLw",
  "key10": "2rPhbfxf8mbrDtcN8j9CFYmWQrinrQy2YxGn1heGmQMnGyXD3kH9eGBtc9JuPzHGMvkHLe6g5NPYsY7KLtVQTSne",
  "key11": "fyYJSmBgJgmcuKmTEJ3HrUKVzFjNWaDwK9uLjMrquMB8LvYr96mGjB5Gou9G12XBQQ3ZtfofwHMTvXiKvDvbP19",
  "key12": "2Zkpztsbc1TEj4hvUaGjNCy7GfaGiC6LQvKfL2XW4eNXaBG8c46qNWmpt2qL6haqM8PrzDxkPwf59AUbC9zgns3s",
  "key13": "2h6uXuL44qgXuKTwYKTVgGTvwtSw9HKRLG4aEjR8tMvjZhmFo4V8haUQd3pvd4Wp4VgEj3XLTLWBw1sHs1kp5PPS",
  "key14": "34M1nghXCH4K4nbab3vQdfAwb6HBvjVkQrgSdqCfqiddQq1kZxBesrEyWHJw3Ehopa9aJ9ojTA67LvA72WX93rnb",
  "key15": "vFtGdu31WwXZViUGgP8L5bjLf2jnrxes19ydZzB8qRXMxq8Ni6AtFZeVqddtjuwqfxa1AMiddtmiNhJV4Vr7kQZ",
  "key16": "3DKYavGoEYLn3ss5VYFAVxBGnZcqYJHLat2CB41c6nqQt72gfwfAGQeBe56queyJry1Dn1PaxSyfDPuARsU51Hfb",
  "key17": "4KvcpnkX7KEHfHwZYrvtSah2X2ra1mJiXyjUg6s731tm8dVL5eH8MjVkEcG8bFKsSHmYPcGPn2ozPUhHatyQXN4D",
  "key18": "3hYSgscMr1SMVZVYW9UY7YBuPC8ioidab2RY3cLkAvU23bPjc3w3e1tHQ2LBENwcDT3UvL5fGq7U7YsSbNSUg5ck",
  "key19": "5g4dmeck8BL4xtAXV5Ge1P6yciUsuokZcjdm3oYqQu7QHEJrP1VAymjVJtYsD429rkxSJtX1NQANiz1pfPRAUTJ7",
  "key20": "ezyAva8E8EMspQgQ67ENreSxy5tMaPSgXwURCWc5b2n5rQrmHzrduqoSycqqj3yqLsEMHmjZC47sVVXm1ZCBYuM",
  "key21": "2sbvTpSKFwPzMwn6cMmeG9vK4nxEcNdxXPeqYCKUrkKns3xXA7AB4BrhhpkAmWiHcbfzES1hfeDdjWkeC8Vj84bo",
  "key22": "3eAEo8napDtjYcekmrov6sRLvKDkv9J7ErtzHVLuyYTM14LMxhPfp8XVdDdDm3FE1WBeB3KB57rzXh51mvDoajcT",
  "key23": "44aSqDLxbxN1QMe69DrbgKqkCRrcTqaGgScdENW7JE3d8iY55S4SHsFw7depSxjNRMY59kpBLunC3YUbJ8Mcpjj5",
  "key24": "tq8QD1bZQL1gHDnydjFKk1vg2fD5ye793q5U1GdzHti4oFJAc7HxrHcc6A1cBgdL7VjEJt6KCeWgJykEymbVFBX",
  "key25": "4GDFFyztR63envzkdCMRip2PikqjTAhfdZaKD72BhFyeXXqvyrFykQtAoFg8Vu2TwzWS3UY4pJFvhqHqPxYsiQic",
  "key26": "2vuaN58Zms7i9Fcz7KHdJCXfVv7EHBadGnoMvqKzqxrm9jsnRZbEisRhA5e7gBAL845JWoiKgC7VSfCQ4mr47bv3",
  "key27": "57GX5j1tXATKqSBSJUAxh5NtE6TbRep2iUGj6eSWaZ9JJEoRCcJcfFgNXQBbpqrwdNm1jD9B3s62orvg3Hmou8M6",
  "key28": "21qTKLXrcec4z9kGq6yPhesrZnU3QcdF1Z4MLyasJWTLTMiNsFb9BNYKiY74FVcf66QtzRDYmxNcJXdsvjQQ4ytu",
  "key29": "48bZxcq9jxRCLA5U1oJmK8CN1F4Jam5oGmdbGwgmtaUZmyiHjHnoBfHXJsezgVqbWC1U86VPxVtXpaXn44mRrsLe",
  "key30": "493c6zSYGboMgrguuDtJCWfbLYhj6K8t46aekvURouks8cKYbCrnyATYk2nD5tX2q2vucr8Znq5T26Bv2YwUpN53",
  "key31": "snAgVdyxBbCtiX5xiXn2errzeRVdKG8mCLZjBoetNvxV8q5E8rBmawS5aVC6V39SizLpGVZo5cyfJ2yKF57vkUq",
  "key32": "4B6jAJ1hKptubim6d2nVHHH2f3D5mGayRTxDbyLe7bKNTtZWewQJP8Wkm6gdqnQAATBFoYzUhzu5e5qTmJTy9zXN",
  "key33": "5wjk5cF6Ljx6XzkARqhtEqhCdDVzqhsz1EyG6fQkmHxb6Vrr2aFugmSmT8yqxeQCnS6CFoRmTTSb51HMna6UDLCQ",
  "key34": "2rmQuM5GxCWCPgc1k4iqvGwtKKtikEjjvv8RpytkwrgEGkoDp3ELsUcNuNS1V7vjD3Jy15RXWbevgP39nUgMAFNQ",
  "key35": "4YcnmVV7NUUe2KTqDWyBxTTaFxahmQq7oTA69387YrZEHS7Dx9H2PnHEEW6xuv6n4zdVZFxowbbskgdCprihUW7A",
  "key36": "4Ax3CoqSm8nsLJHXJU3D3UUGag5RDdmcqSWi1ipCNh9gB5f1tqyjMorGoN2gD2KSwSEzQCJyt38vUvD1JzXzqv3q"
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
