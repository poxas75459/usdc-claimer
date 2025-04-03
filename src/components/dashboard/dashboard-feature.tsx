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
    "2QKXQhg58su3KX8CpPrL3xoUpnZ7x6kjdo7ngc9pg5sx2hZyS9rHFNmvoWv2R135rP433jyx29M6kpjAQ9FGvmuD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pDcyvLZo16ejGkcHEpynLLavNuMwsyJnuvbHWJu8ktKambv88NxhuTvaau5mqbq9b4ourNVsU6wVEPmNhfRGNAa",
  "key1": "29Hd2WAKTpdKNj5iuKQC6zPmi63eskgPEGDqmf3xP5TPmDWMzNnsm69vRt6UNgxhQbEzQqSrbBYUAQ614x9LkNQG",
  "key2": "3o5CgYD4sqGmnvFRtvqJS4pNB4JvDZ8PeuX8HpJd4vcFJFpvt2z93DCX2SwBm3GcRfLVG8jZG75JQg7wNwkWmKTv",
  "key3": "2wPSbWqNz9YTD5xgeYZqesDFpneNN2MU8UmEf6TSvBfEvpEshLidnLCoXT5d9PRiRZSLJMa6ZZ52TQCfqmnWLKnw",
  "key4": "4CKRWfvjAAf9jFH7S6LK3NQyc6p15Gttfe8SkUpWBWHeVJKT84jdWZmReC3eGiAcEan3PvPzX9xRTzdLQBRGDcB8",
  "key5": "4GsBDZL9QPg7y8KJsrUTuZij28ExQJUWZ4fLaQZegHX3242S4Lm2vUaTEyRsE4p3LXunasNDjDAdXMoBQ3jFqFQF",
  "key6": "5NJ2uoyHUDeoB42PD1vmazUrJddBeW2VnT66qt3ZHVA4z8YXKNELt4vrtYakCdNUHLC9W2miWTvJyWsaVniWT4pS",
  "key7": "3dutwZ7AimQniZ9ScUwLSTAqm7NBjiayttPq2Vvo6LrZP4qnojzrDiCUrzSDkVBQnbrU9hkXqsjxQQCGHNwbqWuj",
  "key8": "4THbioC7naB24UJozcgtm8ANuWf3M3KY8VHaHaNYy9xgHDjJdWSBpQ6tfNXuc4U3tRhwM9ohVazcCeN4knBpnosp",
  "key9": "2NLDE2qPAWQHTC2tpq79ZzbMB1yeMmwgW7jjsjcLJCB2XV4AiovpzNUsWcreYyeDF5E2xMJL5BKnp1v7hJGNbHP8",
  "key10": "3cMgzmfuXqjydGUZGcgSjW9nZWnFTipGSqZZtCPsLAoy1GZwzoir8iJ2sebCeiUBYm4GjtNju1SbL6TyiwMD3n7J",
  "key11": "3Wmm9LJSwPGWuPv77gyiQMwnNC5vCJ1R3onvfW2jcRgdrQRvHeGRxF3bu3PXM5hRDCn93inNzGCo9mahCnQYJMf8",
  "key12": "EFmnFEsrndb3nG9ggFnZE5MxfXFKmRSkHRwHupLdFk6XAeep8YQ4559XeG7izNx1WS9iyHnH7Y5KRfujXWuofjR",
  "key13": "K4ZR4v64sPC12XrteikboFUshrSkEDDfZebyWEktcx22g1eyCQ19UBAiWk6hETfyr5i6XoXpwTqXTFDaR1AxkAJ",
  "key14": "ARGUKzDimo9NjHiaQVN27qA8FjWk9RDu7sv6roXuLt1D7TStsvp2mt7UUgRiBuRTwASNuQ7rWXihWVXoG2WMJhT",
  "key15": "3dmiRkGnGfWfX6txK6S34dFtyMBCfKmGAXZfa3EYYKa8WPBUjHPtTuL32mWT9rBRLchLssiTFkPE9phDb1SE7mFw",
  "key16": "2ufz2DDM2NmuisL3vdrRTrge87bXeJV9xdkoD2jQRG4dppArigzLsRVBFL6rp9T7SXa4KCxwzgm423d9Hk2oK23D",
  "key17": "4Wtqda1wnotYwQRPc7s2kwhLEq7kjfSArT4V4WfLAXr5RHH7mrmQCfBGQq6a7CR2veNoPZTp7MDkemHiVXHMqAAn",
  "key18": "n1KzC33thLvenNz5CAJftVv8YCrcKmDFzasuH9im7vuYmjMENiXNBMpDcCxManz3RScA7ynCyxhPiP6ZN5BE7BG",
  "key19": "4Mb4Je9roiozHztRdTVqXmrR3RTJ3zzsFyj4ykiiRwm98BE243mjNugx1XDXmZNMUwQJU6AtUJhiGgkz2k67mvyy",
  "key20": "fy8NptLCoAo8WZL4iCLLX5CKDETPo9GAtaikR52JYXxXpi1NKdhtuwDH1WMjVPGcDxbMDptAAfRBmGjqu8EuqUa",
  "key21": "Sgx5tNFnZyAmh1xF4mrwXhT5RzqwYm9qiAy4jerEPMboS2uPNEfhxBk86Gk3C62PVEMVgiGHLbwURoU7qebTaxo",
  "key22": "5iaqLihG1XCVoo6pWAnMwsoYYHDedvBULpFdHcK7U6zdLiAsHHKm9g8toWPK2uUXcjGN9Sd4exFrakg1S8He7CzX",
  "key23": "9spcozbtgWegFPRiyq2vzNX4xY1LqeGVKknureEsWGBKUTWXYR6AhNx5W19HnSoTYY4jqjXUTMjEtiJwehxiCsJ",
  "key24": "25eXoGB4ejqpQj7v5NcuZ5LhppsBbZLkV2GNQ8tKHeeRX5rt3ALZENuGPbU5pR3u6cWYQ3fJNDoQd6GuBecse9zC",
  "key25": "32S7VEXE6mNByNVALMrWYUxb5hbYU9SRFVANYeSXepZSjqYk6LAj9GqdmbgQiQYRxXfXmw91s6RCGAGvwhojQgKs",
  "key26": "5uG5ixxoox233CVY1Z69smstENKt5uFjvEzfNgmhGV2KEryzGtsBvJumwXhWrkYYityXi26ijNfyn3owjXbZ3GHd",
  "key27": "4T1ydhroPnSWbZb4CdDRsoFHfR7mccj8Jz9KJaDxquh3vfpBGj4fbMoRNgW8G4bE3dtpPthTTkDnPCZ21ihNovhP",
  "key28": "5JL5kYQYkACha4cDWaBWY7WwGNF5DoCBZqdVkWduDcMC7qTjofQLCZPH4gUduDyP1kTgkwRNDYYzVNFgcncZD3xe",
  "key29": "4KwnAVjNizraWLf2mtgvL9SJN6M2kxES8TJsowE5EQ7qCdzNkgr43MP5dSvth51ZVgvQ4Gi5rRCpaGSsitRmcLao",
  "key30": "2rpKTv4QpbBqN2dxDdWhCS4KxWDR8BhbmyPHuBCg9Nnba59nE9pTnwbnJY8oCTyLsrQVSQK3em2EhikwyyDCabc",
  "key31": "2qdDbtKyumaQdQ2gb4Y7gsPnrYxE6x9wHhsUPsZbnNMUM7evEYsGYba58muZzZ4TdmBogYbURPgJsrqdcTbmcWbq",
  "key32": "5BnJKCto2gD9o7CJkUgcS7CLDrFc34PCen7cDL2KrhWNv9F67naNp31VDmzCjNAGPvn5fcjF2By9qHneno5fNXuu",
  "key33": "581pJjZoei2aZkjJA3TczJSqD477qPAEbdUPmi7UM9H5FqE4vaLVyCsXwYjEmeYwiDi2kUt5yVkSMEjVnKNzyPxd",
  "key34": "3M8e88krPHp5YyrJ6PRg712myupY73REodmxQZwkTnSYTV1qvStwFNrZurwABvWgzf2sq5koXRcA3471s8LwFB7L"
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
