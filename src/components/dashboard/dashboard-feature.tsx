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
    "4MsfBPS9MqNo91kW13jDqE4oTPrdgcvpAbiwCthVsVNGRsKfCwEgtyKRPx5CHXw3YZNexpMKuFd38cDe9Eu1Z1rU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4toi3GYU1Re6qVFodWVq1YZ32Td62om83xoD1Vd4x2ERTMpJR96NY1Y2UtKRk2bwEdARgi3jj3taAG6HitfkyDAi",
  "key1": "4T5FdUbGuR5V2E5bc2gHWjC5RipwQtT3UwzLc1B4tQexLVXehWtjHZjs3PtjZ6GAYYSXA8fHABrWivSCYLvR7Y3h",
  "key2": "1d6RyRGX3XoJcaJ7yuC2pENkavSVyza5r5s7utRaPaMmGLUx9ZbKR41FRZmnrpBfsguVx66kXRExYzgenbz6F7F",
  "key3": "4C932qgjZvzJhHBKXerTBF93GVVu5QA3eRTXGhVL6k42tJhxa98WMzemhk6W39PGamHMibo75bEA7iYejJGksi61",
  "key4": "5EtkB4Sc1uFdY4NjSMYDr5mNDKRzHqC5CFXKBQmXbCvtzSPm2D2AFWcQv1mwm2NMoz42HQ25Wq4pXVrYB6DHJpmk",
  "key5": "129UvEbMmWtMiUgXGhGgEKjuVGEdL6xxEsRXizheH97Vg76yueh9L3YZQbBo2HHXW9HeJBEbH7KXjJBEsfSZXCJc",
  "key6": "4s8uqR2xc7bSXsCPyK1s2pKudiJ2GJWuQmeicgcHXrKMFDWQyjrEcKk3LNobmx3pp2xSj3nXxdAfcbUkWXnyNvXR",
  "key7": "56nyJiQbe25pdYvMwTGRqUSFovk3VkKsTbbV81MhcdWnHmJfBzxf7vLUHiSF4mkptHU2fMkp4wzFDrwHLJCVJxkm",
  "key8": "4o9nRHSgVwisrTvBoH1fd7inuXXcdXhgFqT33xXebJnLFmsJtg7cVZvRE2UCPEgdPEzgqGaD8orbiaLQ1Gjqpvra",
  "key9": "552q7zQs8aqWm6DPmnM86AHKvcNcR3oH1HuJCPSTfMojmuVPd3Tbc75MaSRHCvNBigaZ7r65p17ahWFskUvXaQje",
  "key10": "5a3W7XtLwNhxEyGtmDaztLYMB1yaPVmcZVJ4RJrBSF3q7cLrfhC59jpoN7yCLsNpwYfMfcJUgSZAGE7qYRmMhhCS",
  "key11": "GzFiVL2mHYaG9ytugmjbGwZkLNzW2TcrX1erGYbxNNJug6PM7bDFuHiWP4H6NBVWobk9b4KTDQ6XvGbcQwXtvxz",
  "key12": "52TTJyuuus64tWmLf5jdrceWSiyXdRLqSb1XTvmvjKYwh2Zg51jrJrpCdAoyy1XRvkRgwzM93A9bVmxk1kL4AS3m",
  "key13": "4qQc1AtLPLXpzAtP1FkhbwHxWHTxk5HaR8XssuwmWhPEtSR6PnwKH6kid9EZ6fgyiY7TNdt1Zx5g7npovCHzJHmN",
  "key14": "UchawJd53F7Y4mxEZasgVCUs15AygJjt8BGAYLcFrWipXqanJWZc5s5rkzo9FQesZtmhkFwYAdVbMnSeX1xQ3vx",
  "key15": "32dE29YwiXkQMBW7xgwPdUtvdnxo8sRrd76Mp9REaF3rNPULK67EKdHTaL9HoGkSX5ih4kf5LqCm9L7FWAUkjCzy",
  "key16": "2bamwZyYyu2cahixu1Rc4PWyTWaDE1hrHBDDcfvHwMb4NFruneiHnZ1co1FtbiMFe7qoGvii2F4LfWbNRYP1zM7y",
  "key17": "KhwF1HCTb1vHgvwzAjiV9Loaz3bqPvZqwQBbXFwSw4pNnmN4uvCK1fnzGjDyDJfaEqZyoDgAGu5vSqPPQWvKHAk",
  "key18": "Zmt4oFjWUwyapqKzc8Dhu2b4sHHxutkFDBKhCc3CQKSWa5wZxnmgcArGkqSYJvhYHH4rwphyyeCNdNbHCFhghfF",
  "key19": "56wdYmEckchPEeZppqJ1Y5DVtBGcWEfR4yjLhQLVQwmHYpYbTJk3scDDiXbFH21VjFiSVyGK3ovpNziboARgMsHq",
  "key20": "2oEEDgDAb6gQYFNFp8R6SbKF34Qng8KK4yaMfVd8NBth8MtDCRXoQjVe7htD3ujXCUpFJJEehY8WsiQPvfQqGSte",
  "key21": "2KWYik9uVRju6MEJVh1RD4ABQNQkDph9HsZAHcHziwv7YxGCbpsR8cpFWkcEEWszGCj3RxfQkuduSAWA7xPSe3kS",
  "key22": "3fkP1ivcn1j2GHFx7GzNwkwJZ9yEerjR28pLz24j4U7d8XGSYW1bBcyPTZZgy5w8rQ5bLaHYKEzfVmnjAN55uz92",
  "key23": "4g3vMM1CdNhc2gCSaszQaSRzv9CcJfSN2MM7VGHKJ92n4cHnPM2x4DBgm8waBnV5aShW3Rr6i184PCL6aLWj8NrW",
  "key24": "3bvm1GabmMbviN9mXfGB6hpA2bGwkJBhJGzEjS7npyFWjG2AgoSZ8u7zg2opdS56C6gnnU1GUuuRk1E2sox4hwe",
  "key25": "2fEujaZUtvRroKznyVt8ZU491dTV1q4Xnd7SDMZxQB4UyWAVJGxKSPDsEuqYoZSGX2u9vSeoJqgkRML2NWStus9J",
  "key26": "qDDdu8egmo724iy1P8ZRcrp8NUBGNiMru89enyx32wwevm6d9NCb5eyWSCorN5vuJVh11Mp4kLSJrx43boRUj3p",
  "key27": "4RxXHs1jUJT29EidbVrKyWLR6Uopv88YzLBf2mUwow1uGsNUikpWksxCAGrjCAP6zdoRpYb51ipaC6Y8E3HPpPVv",
  "key28": "5Dn6WLUap2Q7SK19vRN4e3k5FLsEDbDFZHxzbxvQqbk4nnPyzX91RbFMAXg3DzmvQL3zNAF2gcN5ixER34zLNhPo",
  "key29": "XSgj5CTdrs5UvpUjZsnryVGq2Y8gyGdTvB8rgYFGpEdPTjsZjKFX7YGCu4fJi22A9MQzxdfEB6e1JqHDv2Bpayy",
  "key30": "5dzbsAcWBaLWaGA67K5rkCmkc7cjKnDjEph7sdivfTsS5EyrHFYGSNyDrHBqoasuvmDdTuLPmDr7omHTzHS9CA9T",
  "key31": "2UvVwuYzst4DDjBXuDUkTYzNbN54HrApXdLNnZAkkuxPoM8LvKDCZBBQZS2BVUoY5jMjykYcSV7icPCF6vhvmJBJ",
  "key32": "5z2M3SRnCaGpkjsR7H5V983keQksa1Kf487KmfTioCyWBR2BFVpp1BtyY6yfDxPWqfmNYLqFiDAdtxCfkL8BcZYu",
  "key33": "5hv679uC3MDGBBFGcsGpq3JurQk9fb4MJrUGH3qpDMhxWvFXejV8v9ydWmqytuxb6md5s1DEyAabnLhrBL5jeiNU",
  "key34": "41HZavrsKH1EAZbK1PheN4kpDUomz7crQvSUuLY3GJGNFrNRET4zqfRq4xtwS8aAYEh5e4KDpj3evomqHJysCCEt",
  "key35": "4NUWtbbimY8znLGcCiRoxp8DzJ7c2iGc6e5wj3ifAtB3XGfWWXuBDBLpg9bbBCVx9Bva24LzjzH6eESAGWts68fN",
  "key36": "2HatGZjRNG2PLdisfXVpC6zwVMu6X5N9BNQEExQrnNi6fsv32sznk4XVe8SaHD4gbepXwJ3pcP1TcFboXhKa49EH",
  "key37": "5MDp8koBpcS6nrBb63BgcMgLwkVicSrBhzYPVFTrerio12R8EFMdEJrtT2CrBMvN8k4CRLRGBijSDFu2QrnujmTV",
  "key38": "3pUF4fxkRb7EB93uf2GzaP5ZRRayA7JXfXCriHEtMygbyA3FLKmTrNexL4rv1SDY6hrjXiDs5oagC1RwzwLMFkVu",
  "key39": "5DLYZkMWH9MvtWHUR1aSLmagJtwhcLUMyFzhwoWR5n9sv5zD1dV138WBCevSv61nvJvwjzmeutFC4cWwKUqErwLt",
  "key40": "2TaM2iraeh6HCFPwVgrTNkXcjs2h71xjzpNJzquUypASSg1ipUQ3pSHgP8WZC5Zu6m4VJcBUpY23eSNRXHjhn9Gg",
  "key41": "2AaCvR3i9zt3otjBcdsK9hehAsghuipLnJjmPrKptDndxDwxaLdinfGzufcqBypkf5A4rBa7JPYSxAo5hpE7thfQ",
  "key42": "2QvuxqhzxRHb3Xo1dH7mJboNRfr72uSkVqLyDpNEMfmiVGfzTbn8QLdEfkbzqTMSWPmPs2P7HmN22W6G5SkdmVZg",
  "key43": "46vDFbfy9kfsDhQW55dbAHx5FopKRRHuF77k5FdoyxDWMbwPjvyqg1ygLEJqZtVJoLnPuP5k153x2QZGGvSRwdD9",
  "key44": "4TD2ViNjV5iXJmLzjgKye4RkYWk5bcyMymYq8Sep5q5CzF732nAvtLu1tryZWkVCgW6wW7gedeAXjEtE9fhdWafh",
  "key45": "5XNxhbc411dG1TR59KEst9SfZPybQVuiaHtxp2uP8tJUaGg6iVCp54xu8BeSvmgF7KHguAmf4NRdGf5BfMbnmuu3",
  "key46": "2syqNmU7ns75pFSUnUH5wC9ddk3Zw7fXuJ2uArLmRpSmWS3EETrwwFPvHedJE61dFWEsVZiCfJVQDAm147XjcX8D",
  "key47": "7CX7USwRVrp2cbAGA18x6pR833YdrWDQQrbHygweULtzCFFP7h676r4EFXpnUbL4tuTbEB6KMmTd1hk9wuJXJGZ"
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
