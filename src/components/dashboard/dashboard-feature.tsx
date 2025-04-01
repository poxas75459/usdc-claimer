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
    "3iW7ZmFVYF6BDso24bq15Kow3431sWo49qtTKvnufe8548R797MJPeZS5e8p1Mbeow9PHkjVL6gQg3u7PMY7Kw1Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wpwkvmWudy4Tu7BiAPyPavRHLvts51ZNVL2DorGUqCfQdLhVmVRFrgcidS84KyzGDnEY4WdXfWrMRdGTfZg3NJE",
  "key1": "4uAwba7pAvjaKgVQ8oUAfE8W664hrp8ag7EBHEofP1pKANe6arPyJo5NxeWqGWWRfFmuzoR2bbZbSKqL4wC7A8Xi",
  "key2": "JSskwBtCawYsdB9u5PkANsoPZ3LoSnMkvQvK7HrddSgG62VMHVxrQv8qSKU4Ggh5f2uhWSfHPEzCLNtuWewucBb",
  "key3": "2LTKYU5QDXuxAaMFqdPyMDAq1bW77kgGoggbxkh2JEdyTtTzAGnWJ2oUvRqfuXh1LXLHW9sAFokhKkE3qv9hXZ2d",
  "key4": "66m12fmS2Ttht86bwwamLxhoa6FjAvi81tCiqdZmQzC33qPCayWAc26qD5juadeBFnNCGuR7WN2w7isVJyaVgSQW",
  "key5": "v6D9tnhEUsss821ZXsZPreUsbo44PXHYy3uzcXKGZbZ9AA4TCNygWUKFV77X5VxvqzELMufch8kYRhST4nZDZTg",
  "key6": "5DXCM6DrnR3cH4Np9M2ETAaT5FGXBriDujpVkK3MLrbaBjhmJsi1dkzz3oRxqMiE79TraaFifGNKwoNVEn8SLsq8",
  "key7": "3UVy7718TBhrWyHykvGVxgqSJjPFRdw8BLSgwZf8vxd7q1ZHpoG8Nkbdda8x1zRXf3JQs14zS1mJWpD1dCVRp9Q6",
  "key8": "5wG6o3suvz2hJ8Ci43HKx5CgSEmupi9egFLcYYbvCimWnmQL2AkvkE8QGn4yQ8udxDTnKHn8cSw9nJ3taPKZcPHu",
  "key9": "4Kdd6EJPm73diZYUDqTv5FCMX5H949JKyKk2oL3VjxkmxgSPQBZb3bQjbY56rTWyx7fCB5uQJYxmNoPmtxqZWgBj",
  "key10": "3buH1bLxK1ATWsPDgSNWxH1X3AStULtyseriUJHqBy37jHoo3do8Bew8GaCGKCDwm27xn65US7X7YBAoXjTHN8Vx",
  "key11": "c3ArkhKZSs9WN6zEJDM3SW8qfYcP3h61DMxwNRScu7a6WJCrajmQWNGa29KmCrmPcqFthhVRmnLM9ueqGAkahuv",
  "key12": "5ttDXKfJ8hsJKXYzsSkobWPpbRnG2yvJWVT5GUzCLmg4rMF3eCYMWqzoRq43T5eAp9k1sTcr5SAQpU2rmSw53KMg",
  "key13": "4rfFnD4UCALK463EGWbLgXrFt43wSUUdWdoiWnumSW439eimMhqWZHv6uPkq92PZQ7CXmANSydS3LzEgyCRv5aq6",
  "key14": "42GL9araL2LfrQh1NeTE57HAZNyDLsEsWV75wL6Mh2T7Q69o9h5xrfCsh5ujcR4z2YmURQVdGaPCvQFuQUadJeXD",
  "key15": "SdgwHvcs2BiSRdxGdGdzuuwki4QeVyhpVwrYoHrynUNdstJcnFLEBhnJsFj37BoQGM3bcu5ZevVTjzXdKcwVaWM",
  "key16": "5APjEofWxX1UM6AkEHkKWPrUY4pgKNojAzDmB5KdNhJ2RXxVPAVnLnUPyCnc9R616Ayj9PLJEgZmeRjXMiWEG7f2",
  "key17": "4trRtdKg1x73eXuEbZGJ6RMymPPoS9c94e8qYED3xjA8WnujFAeHfjN7cCwGPQibdvfrG2aX92kJewZW5SEoy1zp",
  "key18": "2FF5RC6nutZmMLhtNwDc25baMWFHpSQTDpfHxcFWcmeGanNPvDsKqeRC3pLQm2hAg4M9622PJ4pytCnxgHAirTuq",
  "key19": "3GDt7WpvmvrpcZaVWDnY47f6QhzayUsknfBMm4u2AG8RZCwVrWZdtULf1zakcWyACGqcia2wCs3ZwVvYWfKCr7MF",
  "key20": "4GKs4KzWdPbwqccSvGjccxxaaf2UdiuNPtu4DA1LgS1QpVymxswzDA4quBmoc7EYT9ZwauyMxuWNa6N8DzxBEDSR",
  "key21": "5QmJsPweA49dM55oe6c76y9fpmc5n88WmCJMirrDR1FDpuWYbxubeFGYYdLq3DGTteoQhnqbWXaRZSpXDDRStPYd",
  "key22": "NuMv99iKuCMQ6e9M3maK3MDMP2MQQdYxWw8waCftYhvz1w1JPpv6MsPXLChprLqTCVDBpwSbH6QNAP8FJuNhGfo",
  "key23": "3gipYJTax9tAZLmAiFgnkyw7WjcdxKk6YPk1NTCYH7JJVHDVFjrYdmapyViMiTqpPrksfdomPKoQgoa8v1kRWVZP",
  "key24": "vc3VYujf7FccsgBmdMRE3LYduS6bVvVrqpDw4SpVnoHPhevzv3VTAmzjmLCfDSEJ1qTBGSiSdZePFqrW6L2hXod",
  "key25": "61vvicRySa5gGBxyThQwRaz5BNNyjW9X7Dvg4KXqDS4v52Kyz4rvLFuBwkzKFuuNXaUSoHBwTqUefLfKmTSTgfvd",
  "key26": "3dpPRMrmmiU1zNjyPsm4rvcDVk5jGv7Mr3S6GnUJ7peVAW5ATkNJivyrEnt5XqxBeGpEKJzzvDkWgDe9Jyaaemax",
  "key27": "3L2gQmNMwdCpBjcWCVfMFBWScPLGzpnGRMdUqzgMMszmNLsPTGkFhd1kBW7x878UU9zhqpZz6zeEgcNm8tbqnqj7",
  "key28": "v15bjdmCjWnYFReZqmsCh5osthrfsMKHmLgn5Pys3Myn1vndHzCRDZH6x7bKmjDedSE1N8LRst7V14ghvpG26pv",
  "key29": "8oPWW8mV9NvU7V3ySNXeeNdUKQRgkz5xTo1rMKfE7FxarauNYcEuwzgzVk9TauDSV4EXyp49rg1tATwDHX1tkfD",
  "key30": "3AiQyMftMayE72gTywgqKivgEch1EWpTbDu9wpgeeNFm32EYppnsURuJjpQ782UmZbbc9b8xuHstTqZE9aHUtRTG",
  "key31": "4T9cSMJH94DxRRuf7kDvnxHzimbZN1mmtRy56UGRjw564ngNZ4RrSyXSBsgmx4zQFWfBcTeZyx9fozakgfjZ4xGL",
  "key32": "raZAVEihgTmNtKoR845gtV7FGTtJdDNEFNne8t36gUtCHbP2gue3oKn5vHhCkZJxiWXWc4vFfp8tQ45WVJRBEaT",
  "key33": "5UBPunDk7W2AexY3RAAwb2QKv9D2kw1Dub4ChSw2Cr45USUDKebv922Fb9dWRxQNZKVEWKN4Cj1ApSeQy9PFBh5x"
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
