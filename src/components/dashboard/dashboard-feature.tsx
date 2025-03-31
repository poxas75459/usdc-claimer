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
    "66LMK7tAYvNEcVUEAkGzpJDfUDm7MJVrszLv6Jew9aHDGuzNqoFnp8Dwx8zh28X8SA8Md5QUxcMZzXiyA3KW2qsZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EUXiEgf37RevcWNTTmRPeZJr144jhUM95BXAxs8xY2ifwmE5gH32QXpvD5XGfA7BzbwH3Sp9peCdpqRPipR8tM9",
  "key1": "N3voMyyWjmzMzCDQpxfbVoFn6cKda1Sv9QtwZp3mVLfSkwgfJYRaa6Ccb7kq1f91P3niNa2TKtUAVktkMNHYNeq",
  "key2": "3o1rdnki97Hn1ucsN68t1nFECDHszkYoRYnVVt5tB9R793om3Pbx73CxWrZSHkia8U7s2VA47C3iVf4ExokAz6Hm",
  "key3": "3D211VWChwiJDrrfRV9Aib8pPu2PoQhq1Z37Yk21PHWFkQEA93eNUizWiK1p9dQJR6W6TYXyBEw7LKBi32yi9YrN",
  "key4": "2G7KHoiEqx8kK3A1qZ4qTNPvfxenDkPrCCgEHPoxCUDxWMkneeN979RDB44xsut8GBBuN3f71AZBvWPyBvkjAegg",
  "key5": "BrhkDaGotZrrYXaJqH3SLx4V9M8nwKCagWjr8q3aySPRFCCzrUmY7cprn3W5Cbc9D4gjjjgYaTgmHLSZ7jZrrz2",
  "key6": "7ZvReU3sroTctwVNHSs697nnJsUKvFYPC5LUgq31d5xCuqJ6UeUrWSw6eSbJtcj5ej18e4MHNHCQZpTzG2ywzpi",
  "key7": "4iGe1R9j6eXTPzfQ5yYca2copHvnGLchyfcWsNQJLC7uWrqziHr6ySBLx3gMsamnjoGmLVnFTzHh3Y61gbdjLzsM",
  "key8": "9vpnSDeVMXcNYX8HdNWKKuXe35jksStQijoUKbwwzeys4vGUw7KyqxxjzeoSpsuKuoZw1vacBfhevdbxNbUQ1BM",
  "key9": "2Xyf3b2mR53kGBqw9QPVA9jYUS5L15qa5ZuSZXtX1CdhQbHFYZKsELCtCEigeTNnBy3XQ4teJ3jVRyo3AxrPPg3N",
  "key10": "4RJxtANBZ3ghMYxJU4CiKM12bDJUDsbN7mg8zqyBAWHus1tqeT52Fie5YpamgtSMDdGHsFRVdYzPMXTHVg3zmKPM",
  "key11": "3KAn4fSsXFRprDsxBHTac3QxTiNsERrjc76upXx3wi8nwJunbRz2e9MtoKThoVMWNPhKw52RHqNVw7eWNRQcUMJF",
  "key12": "5aRnGnrRnFDmQznwqzLqwNi9fobARjX44jGwok8z1BhPBPY6eXwosb1NYG7gVGyfprMe8y9nYF4Hq3AyLWiwgksh",
  "key13": "DGN3QEomGfMggv9W8iZmH1HhHGy71TMwiNJtuo2Whujffh4J3hwfHSwcscyRHU52sfAmydQJsvb6bL2aXCo1UmD",
  "key14": "4RaraZBgCgZSjaZ73UvEV2DUX9uJAxgHz5w5nrFmsTuia5PEKuygq4gfud9ghyhiPo2sLtw4N3MipSViBYHPxQu",
  "key15": "42hvfyGBoywdGvFdQY7rMiFVgQzVCGsV2VzDEpdV4rC9VywKXTk4QKv49vPWhPXTDk5YPisFHu6DUaXaZTRm4YFR",
  "key16": "4HRqjtQEi9pnEVr9iKNJjJHPMtaBnenqQK18HajHKoHq72XTgvVY12YMbsGXoyYZmR5BxPfSBdzqkvw55z1M1h4b",
  "key17": "4gfRDq6d5inNLecHCRaj4GfHGLd1DWwXVdFLaBscNfvP2u2q3Nv5vUZESdB7PEVgFUFBMdCnxDxEB6GHEbNk7y82",
  "key18": "525DnqA5gwXQbWtFdMThM9wTjxAnFpxEfgH5TfXmsLaqwyT8vKCY7Y84YbDYU21cn6uLU1XhAPNENDkVgXCSNcQa",
  "key19": "3812PzVE42o3ZYSNxBfjjm2CrYmBLUDcUaoox8YH4TPbQgeridcjqi2gNDVSjn5KC83jL5h8cVyXpo3hdNJ542H1",
  "key20": "4t2YV3MU3h7HSXYzeiigFqkfaNqjqnj6GHdFVyHKkfhinn7Fo4WM39T3JSGwwVc961iCC93F9FifWC8y7fanRJ49",
  "key21": "2DrFmNFWV4ACyJfWEz3h6BaW9R9ZApomGFmZdD59MPC1aDtf4inqpBtNbxA823E8Z8rofkoz79RvtmxpA8QRaUoN",
  "key22": "5p2pBpyvTj9owfp422vozgTGB71itKVS7gYi5nkByq1nx81tjpspyYiiADucteacbEAA2iPzpsd6on2MdBJqTDAt",
  "key23": "25sy9bVumgmqsMYxoiGb2ujpa2oVzByMSYUduTSkWpDByzi9NBmuvsQBBqMxz8X7w3yomstRLongZGNNmuY4AzZf",
  "key24": "5NPFfQUeW2KftByfWhGtKzxYDqh1qya1TjWBu1FoaF6rR9KZMhFf1iH7p1Wzh6vfEgVy9AezjXcc3SyvC1AhKLzM",
  "key25": "geuFCzHuVMHP3KWrbJKptbHx7JtaEMERoNfznSs7mgYw7XCWBArgLagXtLL1cJpWKgUxzfJYYnj6MhnLFNkZdne",
  "key26": "547UuSQvnUy6ehbncsdsVd3RfBpPqgGiR9XtAcMbNCSUgQzvSFPMNA9q2RM1JybgL6VWEs4fpcDawriHP1BWea3i",
  "key27": "4nxszkQYUDiFDp613NoPhP62FTuXNJB2mfiDewdEipVXKnbP8vfBR9toPF3sXY8QRbkpuT3pT9yNQ4xvzyYZvqVt",
  "key28": "4bPc2LZCCsoG7JDQYLizvSWpu5353fU3Tg1xFjaNE31DHaM3ExWSEuGPbhS2aoyhUjx9bu4k7LSkVAc3Dmzi1h54",
  "key29": "5CCsXNsL115VY56gz29fWQEByBSSLmgoyPCZRoqe3wSmbXjeDvHh78k2UHuSu85M77qifatrMJ2cyKCz3PG9nrsn",
  "key30": "2qnHLPJoTrbb2S9XYiBUbTcKAWRGtZUinos7Ne9wFt34e9GgHKyLh4St4ryXFZxEjJPt7DvnWwyCuBDHC9ktdgPz",
  "key31": "S8dtZuy9kkLiWGafUxXsmyzB4KyXBorWYnSFmz6cd8L1QwDBCP4xkoiTGiwKc7EbPfjYxYf61E6nZAjUfJfA4Pz",
  "key32": "2jPTvjbbz7rzQKf5Jtq6XDXuxVowTjPfvzfA8dHZHjpYp284RKMVi9gXRdLaX7sy4R3d4faV5jk6C6Qkw2AQvuY5",
  "key33": "51LCUG8extpbnxmgmN2QdNQmstzGS1q3MssTeM9e2H9rtmxopwbhjLzDhxg9gxfJsCvgirsguFsfWcXsF8A2MzbN",
  "key34": "3iq1pBr9uALSptPjkwNxH5BQ96PRBPDtVzwegUfSwy1PM2cb9UsorVRyNBr8PhEBWit684oXzqwN4BKHC8ri6oBu",
  "key35": "2wDzbuFR88PgZqxiq2eM2PGY4YihyyxP5jG8GmLDU24sXhxEU8cvj4aDTdr9YbK4b4kCD1TN1WLYi2tkKg1FNrAS",
  "key36": "2sNAFQXHRHMPkJfXeRBMBW46Pqpwu2a7ze9z2P9EFVeExz6hWm5PtQvkNueNPESHtSeVSukjzC1sTuTvk5iEUzXM",
  "key37": "4rKbQDnDepR7peV7wWVBmLaUpEHgphpXpsa528oZqmXMiAtgiPj1yMUQy5LNf4Wt5cQKdFmbardghNfSjMBTicq1",
  "key38": "25VpzTdJXkdrEYviwP3M2ZsdQpqt2e69i3jLbpKLk7AUVC9esLYXkGq7RA5J4ZMd4ccJBCeeTRxhgML9e3vXyFtm",
  "key39": "3vozTKKnBNb1TjtDjAertnDuhUx4Miz2JgYi1GnGv6SZn43oRkGa6KQMnUBiPqh2dgVu9NBbTDTQZiwZnNt28DRe",
  "key40": "B3kgpjQju3GXXJaSh66iNQv3VMFW66a8X8qStneUfyabjwRvpskujqDvwv7qC7mFJEghhAFWMYCuk3BAeKbaCbt",
  "key41": "2ykN6X9gxnZpwd1XDzgX48zwbk39neMSfF2V5DWDWSJucma1z5CpmNTCCj3NKpYRHoDfZ4tMYYTqcgDfJm95jy2U",
  "key42": "5U8tjmx1EszQsT2GFooq9qxeUZvTBWvPeVwFEN8ZF69U3Ve8zFRomkrQSZ4HSCjMFSfK8yd9j2BaG5JsgEX5e7yw",
  "key43": "41AKsDp9DJQrym1mYpnSH5eZEStZPF1XTiUiVGz6KGhkbg9mXhVX748hSpVAvAQLieSDMDZwsjgAq4UAqezHaPHh",
  "key44": "4V2Gd5xNgvCDMKfgjRwgwubMQASQewnEGdhe99zcdX7gmCUNmANF4ZJCTX7L8HDY2o6HaupkjXkbVSUJpV45TNKG",
  "key45": "NvvCM9HSQj2RrdSPxnF72ma79385UX6cFuojnntPrZkXTEkC2z78JdmkMDs4HReBVtrApSGKnRPQEZHquUpUk3Y",
  "key46": "4UkLSWgudhqsg7if4Qi1SPKKgVm4SstjWAcJeAfaqYRhiozs62VSZSu7QhXyLYxUxyVc3eq4GbCxmgkBEgaMF4Z",
  "key47": "VQLv4uZdLZhMnXddkJSXkNGoHRuA8RcNcYiijCwuXYKLjYFd3pm9VCGYcpKUH9624TUJU1nQUBhzfrFuLCnnDU5",
  "key48": "4Rra81ddUZ83rzJD2Ju2uGDd8WhsvMbWSNZfEH2XCbaV17XLATxzKVxhdsafNonyTkjHBSnyiCyjqmKCagd5K8Ht"
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
