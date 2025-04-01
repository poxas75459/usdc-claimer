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
    "4Ap2rWEYbXPMLqrqKC2URuLpPX7jDcGovzSWbtzX71uzTeGcUWNiigrVS9Snj3pU8T6RFWkSPhkokYBekQCCR3gs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V1qY3W44GQYmStVkRpfpRE5YXuMEdn3F46cuQ5EHqacPgHGRMaVNu3mjAnJtaAfrjGDPxroFSN4C3HHCE1etmQJ",
  "key1": "36vVRKdjnDKXVw113qnkLoQbADrZpxSGivDCNJBGm22s1kfMxVZewdD2gYTWFQABYqkZ2Ht9bhoyc9qBZtnMScK9",
  "key2": "64vVvq892tdKMVQ4cB8XxPp23waLNGaKcFpLapjqrZLEwSbxGjp1AoLnRhhq73a2JHh5uT1FbTc9fQbySaCGZPrQ",
  "key3": "5r94gz1UdNQuzUe26Fr6hwrPXmbJvccvVuV4zP5rtYbj9E227DW27vgZuwty1Y5LTDUHWgCqxUFLkeBfDh91NizY",
  "key4": "3LJ7DDs9ftRMShREKY2F4f2cC8hX6ZvGQ5bDFWqHjxtf1VL4sYNgFogrhsywuwkS8JzUrpCavipkQpycctxDNVJH",
  "key5": "5ND2fCpdR2BsL43nh7N45AAKCyvwvsiCz8t8YujAEBNkj3FxWzvWcnXuGgcbyj8VeuGbYXJh3n5rYjNWuxTTvUxc",
  "key6": "4K5MnnKFZ4cRz9wmTf2Rfcjxu8mDQfZA9RPCNe1myDMQ7pczUcZgEt6kZzJkocqv8tvkJuabvQt82C8aE8pLHJ3D",
  "key7": "4QJ81WnU6WeLWJAJGRUyDGK4UKakqq7HL3rrhE3VraXaZCPqkDSMBak3XCgPEFXj5NWNsC9PvU44ahuHg148TqA9",
  "key8": "5ktfRjXSm8Apg4xwQWmMo2e7BD4Vezfx9cxsojnDuDCdQdFADNAbUecS1bK9TjXDQVWjNvi9TnQyZ3z76uVsRd72",
  "key9": "5KN5ouBcMdMwyYwoQoms8VQiqLGCViqezhrns9M6pAk35BPxpQFJVnSzwdh1dJB3ue3t9HbHfL8YFH6TRhcRGUkW",
  "key10": "5eaohrjvhH3B8SfaYmWcZbQg1U3S9C1YFJ71HKphBhmtUhtcWdG7pbYescxtmkcpc1DwNHNs4EXoLpFP5jnJnJG8",
  "key11": "2146n66ybB9Hmerv52DCjYxiWAM9mkcP1jCstyLnmTBcscHaF5Sf1EJWJF7XSUassD1Tnh6bQYFnYGfWTeGvniSV",
  "key12": "43y2eFzjAzcSBHQrr9rjJxGyKu9Lm1gX3fT8VqWZDrJzivdyTh7DSje9AvDf71HpCkAzqbuaY27pkemw2RJTYUKT",
  "key13": "64rV919mVcMs5ZRtPUnCEqk4rdpNUhvww5UX99TVSyHoZTmxzHKABFezbW8BfkWKPpF835wnw4o1Pe8oCWgMJbGg",
  "key14": "4TRXP5kXv1uYeeaQskdm6v1TbGjRwh4xRB8YABU1sdzNubCKBeQbhycScastR232A8smZ5muibhZz1DNEU3wGm5y",
  "key15": "c7dcz2HWveEq7cSUmyRYkPF4m9w9pX1sFVXsC8hu1rDvrbFzwUovmqoMaKM3iDUaRuPGGi5E4UsNnGov8hNB1vi",
  "key16": "27EXLrVc8ocXn6Z1hjGrf8EbJ7QzaFA5UjXd9fLFuHn9AHSrF3q9oinnocbfodq1ekCpVqptmkAsp45mjunBx2zT",
  "key17": "4mav253GY9Jd9keHfaAXLkbVdHzY2qyQCLw2agNjn5fKWboCf8HXKa4ASx3gW6WTYRUSkrWP9cWXY8Dm4XF9AS62",
  "key18": "4wSczJyrwuMH9ZPPkhEHQ6rVzA44KV6xGwupDHGX8YCpqzqZYDFT6ziDgnFnVHitv2y841mHRp2U8TuxFgzyHWkE",
  "key19": "5bEkJfVi7cZFha4t33mAKUQRHYqNNXphffEBhqJoy6LyiVhQGTuimP5LvdbxQdGxsAGr1TCwVqmh7RxmrQtqsk5W",
  "key20": "2rB39xfUKuXSNNd2nnJX76G4raPwa2qjBqD87EZzzUcjaZeSThshs8ydXwZA8ZxwoYpc6bqg1YstGfjfgp2XspGt",
  "key21": "2ZfE1fTsymw8ALqJuBmy567yswpHSL7WjTH2bcwva4eKf24r6kXWBJLN2BqrM8ZJWAntFSHxPQihx1esKQvkJcSx",
  "key22": "2aMZjQBdehaX2ufYpSteY5vczS9AcnMnXWzLVBecqAJehGJmfnp1UhMnp7gg4ZBLHXjE5uS8KdEUWM3CzAKzgwj6",
  "key23": "2cWXG7CWGisEV85imsFVMGHxJHefToPJYkMDbGt3SJ5oaZh75Gd14TJPnFx6cVGrqHsvyR5erP9MZo5SqWaXMnLd",
  "key24": "62TauzwLYTZM4fYra5uSH7DtDPCcFuTNWYECVpie5qt2Raob71N4NzpbUmGMvw67NnMNAtQ8CXfRN8kT3A4uioWv",
  "key25": "4Z52KzQPAYNmsfX8iUJmVcETzpnS8P53NdWdx6zKeFLu4uvCRyoH7q9FPzEnE1dAQQyq84QFUKhsLydLe3fLn7GP",
  "key26": "36XYBLveGvJTncpYBVJT6BDPJFBHFFRhdFn9T65WjCmbtiUTXLX2fsYBMvk2Fru8ey1Qw3MVjLqxQbmUvpZVT3w2"
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
