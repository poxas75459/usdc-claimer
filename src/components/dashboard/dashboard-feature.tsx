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
    "PRV25ujUApKFisdbpR9VQwUrWeUfBWmncoLPAThkfvA6bF4EWcvf65JgJE4CdBxT5SyFnEEsfkKyUPKqeHVdZB8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "533mBEsKiGYq27Wd2qaR2ZKqgs8BRM7MXRWPMPEr6WjeU2gwD57uGzFhP8YuyoBoYfC3o1kAhFZBQoeXu8W8kHY4",
  "key1": "2zu4KRLLWX7vgipAxPG2CYGHDovWkMb5T9Fbcu8yRmHNCH9y7ty5izMWxk3XXj5yuHWhUxhtJc8ht4bkFeAinw8q",
  "key2": "3FdFCWP211y9R3HhcKBKWUBVNG9VPf38eHt3gBtmRKKBVKE59XKRzmjxquWa9oJ5qy3YYdy27guGtJZphKG7iun4",
  "key3": "4N7asc3zQff7ykZL9HG9QEKcZ3jU7ac96G2n3kyXoXh9qZH6XEyaihsYsKhpomGQcKGkYvaDhEuntuiCw4cCAxYF",
  "key4": "wEtDyNpPUtr5EWUFJ4NiouhQEcYYGEfmyPqLoDLX9FxZL7BaomE1ZZmxPnyYBiaQzdTdN2L78visLAeU5dRntMh",
  "key5": "3m61Ej9ApFLFAxZfRzXPDjvumUyNeFxkYBrNaXLtZtPDuHNhQS8NTrManJDv9XC4bpF7TzfjaZb3QzCAeCLZa9MH",
  "key6": "5ULpPBP2kvWNpr9cooksFfFSmmQKZmrKF3rYyXWxwPHTn4tSTCFRJRQkkdJhSWS972JDLRviBnaNFNBe6KCgGSFJ",
  "key7": "4woymJ3jj7bMcAkmFejVRaDhc2tpNd8KPtQ5P6cFYj78xxFxafVoWS8nSamxggYorPEGCez6farJ3d47HZP5xLEf",
  "key8": "3J8Zem8XRsyiSBVRPN7JQB1S1B9r9LcoyDWKYgcfx5eRoBJfDL9mx8NuonQUWMgMsUFzPBUVZSwRvmHbLCb88FNj",
  "key9": "49RFbfUvpBz933EwpA6nRwZSpkxoMP5e2cwWWcfU9ZTCrF8BYZ5TJZkSisXxTwCpEys1b68meucHmwqFY32VSLCz",
  "key10": "2b8w24Pvus4uF85V2WCvgvDui3iRmZC6nrfEKgKN3usaP2GXkHZvXMmvExQZezQLBU6B8aXMyoPuifMzkzsZyH85",
  "key11": "5XLqDw8tHmexSDMPsD8ZjBytNVDLoxJBVtSDziebCbMTcgp99ojoi6RBAEvv3nAFzJwwMCKkVZC5WbNbTEWw3zS5",
  "key12": "38qJ6m2WoVVgp5a3e3rbY8r6UpnUPiCgk4SwQb4fxLMBteXKMg5jAc2h2t1WfZGGAink4PoYgdt1WGy9f63GnzQM",
  "key13": "5PxHdwqUmiu97eWFkEWaw6wMPcj88QHz7JELa5Unb9xf2WsFMg8P6uEuFAKC42NJXPKSnxHDMd3cj3nVyzXM2pdG",
  "key14": "kbgMY7b2QjExLxNL7yaSbo6BYspVc9NMqQA1AmpT1J9ota3YPQg1QPAcabGYkLE3AE4R3t5ZX39cqQrSg4Yf22A",
  "key15": "61NYZivXQZj2hDsHgLfSYoGyuuYZzfLEkrP34PzfbvUUBActimA1mSzQeboLqpeERhPfxTSFs2PrN2SpEA6Nc6DW",
  "key16": "4DZTfQqWhVBmsoBmg2JYUGweVyEz6GmynLt5CuoYBw3vUNuuCivvepTiKe3Q3f4K3Bj2wQfzLLSGwDoNpyCc31Aa",
  "key17": "fBBeVeSCLuEaM6xsugFf5iQnxpnYWTnxaNtkjSzPxYSHagcHvBvbRP7PNY997WorpN6HZ5NHrGoGCvnPSzuos8P",
  "key18": "3NpwTMS4mWKCrRPhA5aZHdE6RTdmMoUEFn8arH4pEY6yGeRD7s4jVoLpcihNhWcGgBax5Mt9Wy7F5QcAJGeutQBD",
  "key19": "5PmzukiUm84aXp5jwt6zq1rLa1CvNBDDQh5kCRetJ7SfHnAMxkxAzem9hZk5WUVtpL6PtPrd7fNpJu71W1QT8wQq",
  "key20": "2P7wPem9vwFJ69A64GZMvWuG8R3WRfdwMeW5Hq5h2W4T4uBMbQf1mRQSv8Hvr875jSXgHtcgd7HSn3GWvroEVFxZ",
  "key21": "5i7vTXNSEKWbCgSe18cBkeU7SC3D6NSr94wYH2n8rh467rSqj8keyFQpP1qKsvKAbuY1ngttUEYKwVxtSndYUiHE",
  "key22": "3j7hwvbZ8Ev3VQxMs2L8i66SPAgBcphA9T3unHE7o4EoRULWFf1mVni4bfKegFJWAAdFRLKAA6mapu7eH9BP4XTm",
  "key23": "35NpsX3GwFypNmsNttKeg9vkGHQAMTfs3L37ckk5Yp7Zh6i8Rf92DeLQtiju9BBPbQMCa5XMNYzcRfVfxDVwHvMe",
  "key24": "KQ5qkrRyruZRThgSYQmbPdjkGbSyB6xj1X6r8gZ3toa6MVrDutvTSW198oYLPMKm4AThBNyHUiJj55GnYvnAmmN",
  "key25": "3Cy4bAMo5zDfEyMSuaQtuajKozMjWdu8qmFLUbgkd5PbmL7C13sLgZSwL71iW6fWEvwAPH4CF4hEQw1uS9eNKJgT",
  "key26": "4C5ToLB4gcqy8uP6K21JxdnEpShidMHK4uoApKG8c4Qt3XWKxkakEVaKs5U4L8Vwa4X9WxhiLPsm6ogCzsbjf5FU",
  "key27": "3Aq3goVs387qRm7xDzQqJjWaDZV2LJYXSkavALhf2VKnC3aL1HEtxnNxfz9Gptb3vDpVak1UfvhtTfrpKxfxQKVo",
  "key28": "4EGjw1qbRDs4dJBHewXKzUYkRZbHBqMuZProBnfJmsr5pyBbPgNbhH5hbamvRB9tZUk9nSZ32RvesoUHX5S3tZGw",
  "key29": "2aQv1ayq17uamQ8ngg9GYDU4zTKgAotpxZqGbMc76pCK4YH32BMpZGCCzKnx8sx6DeviFSVjFysfjKGRGexH7mng",
  "key30": "aHdfnT8nhKJBLrTghcoAJKGUJCndE1LKRTmS5wAJbRTXHUbUf7LgebKrgoZKmQA7VW59n7UMQzT1pcbwSDSrDLA"
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
