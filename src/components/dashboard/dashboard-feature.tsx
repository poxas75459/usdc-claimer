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
    "4seZoDuMJxmJLMP4NxGpoWAbfCwhcmrU6FQXQ4dHPqkgqE3fn2oZ8HFDzvE7CCrvAsGLaDanm3oBfd4PgGxmrceM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AKJQhrKEMX8dT3jQGPMcJqQQhqYW9wXMs1YKydwwsXY1ZSpXRECADYEBWebM4NkCpGCu7NM8bp3AcpF9XXNCtME",
  "key1": "jGV1SFHbvzJd1oXsPxuZkHwXD9pfVsBfdTYVXZHy8EJoSgxGsE9um4J63iufUaPP7dPZDaGMZK2zK5aD2qzvfo7",
  "key2": "53c81crwVs2i9pRmdiHJa8BUmNgVpwDaTU51rQvqT2dShgPTsfMGizYtGVuw4DXsKg7XUFt7ZtUJCqGFdXVZfnB9",
  "key3": "gF6xztbptD8xjkoVukHfsD7zn6HtXF3KkmjcHdwEHgM4eUTyUgoepXicKF3KoUnv3fDMi7znmFPetvg3HKDYrpX",
  "key4": "2unehg1U5drJYQrkHtaNZNHoEMNmR27ktekEYctY59vG66sgGnGXfwy7dBbgqvBNkijMc7s3czEnnQW7aqgh7NGy",
  "key5": "Kdx5oVYVn65Xze1vdyccC7NAr8LvECW1M6ZxQfn4cqCJHfyAyAttZmvtdkkHGaP2nEj69sxwLQy6iyaXj41vipG",
  "key6": "41BPJgdU8JoeFSTE1pa2X3JXwjno1VCd7Dg8y4rFPnhvSpxwYGeyZev4finmhqDpmRUJtmEjqtXD4MtizjtzcYNm",
  "key7": "4RYjeQXDx9todVyQUnw1Qcvo9HrwDjn9KvL6RJy7g5yoyKUjRjWaNFc9TM2mF4MuMTqbizEBSVtS6fp8QCQBuHVM",
  "key8": "4gfGbdeur9oDyRf814nXHAsMPVQSXm2zoYCBEKKb4E5djm9QKkeFbeQxoJc5mv3ViYpssJUYbRb2vV4h49hhSGLG",
  "key9": "5xamSBKHrgpiENhDJPpizu6Jxtf26ZYXiarAQ9CzSJhxmXLgsgTZBfmGr33dNM4MpBMeaBf7zP4pm1uK4a2xSKvd",
  "key10": "3azDQbfQuzU9N9sCjf73iu7uH6a7hhptYUKfTjuYdZZdj4sG6nHWXUgeqysL5WpAJG3F7t2Th6jkrjbk5rgt6KPk",
  "key11": "4cKVLqF5U8PxypQTFQJFrx2hVxCAK4nZDuDQ1D2aZKGHz8CQf3uTHfn7QqNCj4kzchxbJBVENxuuWzya9vs8rqJk",
  "key12": "nn4baujttpgFMTFex5e9d7tKeZ6z2i2ubtEphqcvZnGMNFtkvtYFRFoXffmwdTbfQx8gifxnUhhSRvJ6m9GEuRK",
  "key13": "3zdCWbkV9HW22hgXnDPKzWVyR6Fp6fQwS3XSzSahXDN5aEFwWfeujPnZ8BuQcRez1MMyJQEqSWFV2FaYV8Hg4kyf",
  "key14": "P5zk5epAbKhPiuvSqbfdp9pszJ42YMMH6U81ZvABT5ohEra4it58XdwnwNqAYzcbupA1DxvNqGyzjhX3LoFoqAE",
  "key15": "2ahbPeSvfD7FW4jL8mwys2RHgQZ1NU9VMvkMfZwX2srBTDjBBq6Jj9B17oeMWv2qaCBt2zwNVv3auX8K5HQWqfrn",
  "key16": "3cbPrwUcwSJEkveF7XJcdfAegt1gXUBaKM1FZXHk7YXMDNSJ7LukrLc7MXEFgfnbi9q1uYBFjT1tvnkWffvMkpgY",
  "key17": "aenHuDXxStapGiKLywCQ38jgiyMmdSmG3Z9WCLURNYnqVZzwbmezj7b9CQneZrtBCBnhEgkwgy6f8DuqhxziSuq",
  "key18": "2BCMc3dkqu2CTwuXYFn6RBYNdN7rQrjZJ21etR1r5DgwVGAjN932vMaKTiqs9YxdbJV9xmT7fk9Hvc7zGhKqFEbY",
  "key19": "5QgEC3z8GA4sy3svXFbxfWuf4aWaoU3BukhAAs6PDChkHeYFf7YUDhnSYJVZLdfcXKqi6sos5MFXC9RoNFea5Qcq",
  "key20": "3cSfHwBguBJzhmtgLs9Kwj88ex9ryogvPqJVHoE6WnL4wHprp3Df9c6VtRbe4BPrUnR5CcAYVNaiQYTKQAs6fGX5",
  "key21": "2x7t7G6sGTtmTrG52zcFPcwdjgmtq2tdwFpD3ZkD3hJBzS1bAkFmPVnb3xMTTAg6Yxc9VYEJRChZ79jwq5oqtnSK",
  "key22": "2UE3FYm2F4HYFQ3VQkFArJk1iEGkCd4D31dd6Gyw8CY5gJxqP8s9ByYVV4hLzSEQB1ocReDJA1zUuniLVsndezRu",
  "key23": "3kZdaGhiJGf7o1TuAu6ZKdKjjvbfphZUkPLApiVAh4WHXSfRWZ4T4ZwtZF99mVCfP1pxGq3EbjLzZMGLwFLmXZAx",
  "key24": "3C4CE31vFu7yNBXS1Jb9NbiyUGREEgg4dF1iUxeJShFMLJDffAm9SrxMUqxKNqWj51aYev1gq5KPthG6ixmrEjyr",
  "key25": "fCRTyr5uvqshumozRgMNoLSwNzuEYeYcyZu2fLcyVeWQMumww29JSr4LS8fqPxpGiZmUQK4c7MMPUt9pzqCELoS",
  "key26": "ZccPHaPrfsMiuUJ7ggB4Es36tACCJhRhBcsNSUGwu6EyYoudm3bggGNQZakR68tutkGQ5KJzcpqJxQg9RM2Ew36",
  "key27": "5ejy8wC9WwUHugo4hn3tgJwCT4YqMsaJBXDjFi2Mehoi6755QgBq6wtSRxfvuPCFbyUomGGwRSPVgnmEXcG31QPv",
  "key28": "Z82M9UKAeMkbvqikU2T6YK1JDanpseDbzc2xNMhYuhVQUKyLzTQTShm7VyDz9Z7zKyz2SyDTKhuNsBVxEiSrvtm",
  "key29": "v4LmhxSqwi4dY17PoJtAS9QQfywuMR8swfgkQuxMZG1eQ3AQWRGLvoy7rxfG4rjRLrwT5nN6LXpdK6ypuqTmQhE",
  "key30": "2GW6bD2RYK7Foz1db6HSz2bVmcdPpPHLsMjfShseVbKabiCr7cvsDjQWBCYG8v732Y2iRHguaJjj3YSTLhPwk7XS",
  "key31": "3xVV4tt82qypr9TuXFd2CDhYjAgP943gfRm7vKtoYzFzVBeyXyrir78dMQ3wadMKGQG6GTV8cPCTi6FJ2N9boY66",
  "key32": "4PwZRvV8Mgp7YTUG2QjrsAHFGMs7hAb8qyoQ9ZvFmoSkFq18PYYwBsgv8phGfEtS2saLihrjnZZ63xwfm8gEnEWp",
  "key33": "626iUnL9sbFQMUKXuMSQivqYf1T8tsdtMxdgvP748WUrKb4pVfJCLAai1YxNYwRMEaBbuV6Cokebk595m3Eydkpy",
  "key34": "2Hhkybs7UBiMMiFVfWhzXVcd9TKWGXGHspeaCpJXYfFdeCAke4ZkZjaqfzbbeGg6Erm3ryVdiBwfx33QR78ha3no",
  "key35": "4hcwfcCiv6Pb8PrkSPDTeGGHU71nKtkFxveaidRTo5xYMzGdZMLhTzh8Cs6yBiiRkYjvQJspeTxVAj1oRymTm2Hz",
  "key36": "4iPQEMPhvbD7EkMPpNJFqBPvcAwsrXumMxkR9ysXYHsmjrHdHjUASe1VuFA8ar4vefoFR1fZHnZn5WY2ZkGKvRBM"
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
