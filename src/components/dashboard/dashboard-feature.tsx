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
    "p5qWip5YZFhoctzvF4xmjfoaPSKtehu59Fs7XaUQZWa2Bp8wTCwSPejoiffYQBGW9ot4n5SWGhzjygMwTwZr5ij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4URLdYxNMyczjf9y9tHfFprgubZcaJCdigbvZKNda7UnFsBXN58JWgzaszREYzueCp9nYacE29zoeDrd9F1o1bJT",
  "key1": "Hf5wtdKs8oPBAT8mY6zJdw14PGTEChxe2BDNN5eS4fiSevoZuiKpwx3odSYgCiCbTVJfxRBqu3Ez4XAV95m4d6r",
  "key2": "3A5VcaySFhEstmZDL4mDEsP17K2tQN8S4JRFmrPu3CvcuAmzonAFaNtiaVJTjyRCbPoDNvyb7eWPkVNy4fXvo6Jp",
  "key3": "5j5g4QTdk3HBkaksFrZQWSc4Zj851n1Zb6stbmmb2ZKcwP7DHoobN8BjwpsFuuvoysqhg3Wf4hXLEzg2s1XdAqto",
  "key4": "4WJMqv9kby55Khgkc66pQkBkeUvDjoQrnu2PR7WhMJAYF6YggV6infghxyrQY9GM3qnnx9dGaqVqRp9PXoFUee3G",
  "key5": "3StRRoAZqr5N1bzwoPgzKcG8WVyUuyvr2J9gxwyq6si5QYfjmGq7jdcvcLDz7rrep8B5BeADvLZueYdruVRwCcpP",
  "key6": "BuU4nSYWgm3sMqEnRnW3JCp7vGhczvDbGJtavuB6tBBD4TPW6iCGN8XpDrmpzsZ2pz3hjPn2E79kQfU41zk5d4A",
  "key7": "4qjfPyVcaS6ZREyQHPfYTgceyRoikX2iFMYtdP4XQjyt8Y8RLhuz4Xkc6wvsUgHVM6VNBFtJMwmBhoTGQJ3eDEC9",
  "key8": "4ULueBCjmBuKanKV9rNqAYsGCjUJS4oW9hSsWHnGh6DsYVQiYUG4QrzDKQDc7WeQWkEPsuN2G4X9qNFNWv8KxyZo",
  "key9": "5jTGAZfJED8Rpm2ZD1s6JziUC9CscCXZweoMp5Ks4EJHYMgGoj8GSWYv2Re3TLvYzp8FGzCe2Ky4wTHVreaXLToj",
  "key10": "5gRfRWBQs7RFsQJMMsKmGv1u6eq98X1zzv52j1kuNZFUqwYyLueHk7oMKA2dZKyU8Z8qpEUxvh5gkAUm1YuRhcb6",
  "key11": "34r4DgkF9QRRRTdbX8gAzutNXGdrzd4gPe9MCqHFuCVCfwT37e767vWRsEDaRwUBPKwzkGs6QcCfrvkkUG9gLzKL",
  "key12": "5QB187VYis4iwzeECnFx2NHH7JzwbmewvjFazyBePTUAtpSdPLojjU3sWkKafrhHMU2CXazBMkWXMsnUY7B357HC",
  "key13": "3mnuveWoxJFbU9o8Nxd6mkVWNBtV6oh4PCpbQmFgXc1JBmuP7XaPeLrpnrKxFyEjR47DBwPJYAHL4CdurEcUYgqP",
  "key14": "A7kRaWbeaM6rQjEj47AsGS3u6GuTw6xg9jGnTLsT4xbb6pFBPmjgdESF8UaDGn2GDwZQ1dTM9EgaXDN2Qtsi8Em",
  "key15": "3qvnsX9pQgyHYG4MRj3sHwMCQnKJU1g6RtEcnP5uvsg7JgG4rVPoxuEKJtspaM6raszDZAXvi4GYmdTWFEcpRD3S",
  "key16": "aDnxrYYGLWT4LYduzhbtrvFJMgWzUpLD7TzMXpbrhKfShVF8vQo2U3Tc9FmSPfiscAAWHJ8cR5PJMcwXc5qDMp8",
  "key17": "3UhoPePtPVEYf5QRx1MmDtp9Fx3FPj9J1kWBvZK14Kck28uH3UdUbVQbzn56HEGbkFJKnppdT8XR9Cp7UHxgNH5R",
  "key18": "pGYoYWyrTN8RA5qkrNgcskrReXHTK8DLaZjY6kzwfm1v1BHPmZL6WyXqEZhkGRWsyZmNbuzh8yogQs8NZW6z9iP",
  "key19": "3uCNAMErTgF2iK1mSeZmFZVH6wGKHGdStvZYLbfrQ3z8rZP8oYWU8Sh5QcwcmaLTSYXxWXGLA4zrCaTNo2ksk4kc",
  "key20": "3RCZoeUcUMQ1MP41ZGD6kg8nBRmSpR9wZuADeyFKNsDFfiyif8dcS5KemD4LcsMNVohXxFdWUfvv1PosmuPovtJX",
  "key21": "3ZWpwTQqzAu5Zonu68wDcYwoTRHjSqjyjDSMCzJEYtFsxhwk1V7ihMcphXCK2846VXjBRMfKWoM3uLAgo13rKrDd",
  "key22": "561axzH4rkb947kNs7V4SGhGmcttr8es1VfRZfRXgZKnUtgfNkdYjm3ZonQHA7VgnePUYY9DdYtTBZLb39SNSpzv",
  "key23": "4i1R3Hzv9yM1b2yvn6PSSpvrrTnS2ccvL5tFcmpvFPBLggmKMGNaHq1FtdtUnm8XBukGJ41zcAYHxiKy9QNsC3VP",
  "key24": "63HxHXE7rnz9XBMphLLdzATQY2wJZw9ayQikAuXtkDJcYkAoj1fNCimLt3a9Z5sc3ye5gK7dxbRFvWtRRJ5wHxTN",
  "key25": "4DXmuLhNoABtDztLTJixfGmoHuZ7dkXNQvRBo3RXBw7AzFsHGUopGHLZhWTtP1xMYbYNiYfLLzff3ktZGDV6k6py",
  "key26": "4NnJRBgaX9evcoPuPcEakp3dVvsuVFE2FLN8biaT9hTBErXrGmUmBMaRvEgDRAmUBDLkTtaigWh7B8VLqjdaSYcK",
  "key27": "28P9i21WvRami7rztiCTcyFFAQqNonkWNESJinTYbPbKTDLEYvwpDmC2ckS7cqZEcVd5YzatGP4CrYjvwEdLjujb",
  "key28": "4FAH6oy6CHMHD7mcw9KYKmVaVD166fgDPZk9avX2vtX2qmN1dSw5FLtUqhhfyWwPCyRQHafbryyMGvKhAXhEZDnm",
  "key29": "3pYb1GC9H2ALmxzs67oX6NHwZX5erFad8698qCnNKHGQReZ3fAxZ8yogLch121B9iZYBr3bsVdeHuzDboqXuwUGo",
  "key30": "3vRGD9eKqbdLu5ZxU4KXRqYqe8fFjKW17d4yWH99aV781KsQm9wXgB5gU8F7zeCnNnXfsMcdw1WnzgcwioqK2ciw",
  "key31": "2nEd2Yk8tH4WLycvrZ9fjKdfFbDEHFjv4hYvbG7pHq3YkPzHyU7yudyindB9juQfy8umxEdr4GpQRkwjxFWYorFJ",
  "key32": "3g7fQoVNhMdrqCBfSG5RrSNWiWCtsLyHhyyPg4mAg73ZFQZhroqoF1KE1Qm2KRQLfSdPFm3hBUGpwzLWUTGm4HkM",
  "key33": "3233wzD4vqvk1X1ctYcGCsSjB28krgzZGeHHw9sD32bHuh5onN1eJoZ2cdqwPMo7ZUCEBpRiemidvSnH8pgTAtm4",
  "key34": "2U7zmsEYPXMbxZwJTfiRxWeoxf9GgrbhoPR58J4AZDqQfqZ81oV2B1oQ2hdnMyMNoKSypBC39bX5Zw3Rqx7XHQc5",
  "key35": "49Eq2Z7pqB7CNpfY4MY64ZbyFXDB2aRLcs7VVF9WKS7jerwie1ni5pLGRMK4Uwr4eGxnWUoCzQ8vACxef1czYrQT",
  "key36": "4YKmt8o2TZiQGZAzCxsKXHtsMapcEdG4qTziD1WU3moyhWk5nyXL5SZbFJ8ed465zFfw9Fo2zzUQosT5d8SpszG7",
  "key37": "393aYBggcEwhRwpzriNU6kWtkxf9iXESx3DY1xDEa6GMzgotxgDBzEY2GA3rJcDBu2uE5dVWDFpqduNUSZ8pH4Xw",
  "key38": "CqdyoZHcDvsrVaGwqQgtFdAq2siwLgWm5eFPEbBJRpf6wc4XM3pkCiwd9RNszhnvVLY7SThsvXBUXpSaphgUoD6",
  "key39": "5AX9ySZHtM7TUSMoTvEtnX6kCLEukZDF3NNnU3yW8kX2KaRHFJHDkk1otVWMZJ1bGMsbwYzrqYbnYnuNuvkV5mpq",
  "key40": "2JmgRRsW6bmhAiDBttuyRRisj4xAJVHk7hEUy9mqJiV1jhmRtcLWsngBq4bmYf3kT9YbdqytjamE5xShBvpHRd6a",
  "key41": "3xnDQ1bAHBRvpwkrgAipwKXYC7vkNAcPALcsthjFNmp2rBVM4jKZtFadXeCAyvWZYyvkQYBKaud4nVLmeDPTPavZ",
  "key42": "wNquUNGV9EJKLTZCMoeEQug4urddmeLT1YWUDUWrfkC9BcFUtbGa9VCoEh7sjHZfpszR2hUctQfwXq3LhCLd5xi"
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
