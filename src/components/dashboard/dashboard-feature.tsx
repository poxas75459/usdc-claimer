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
    "jsazKmnmzJXmts8egGc8CH42VGXHFFzsXLVmmJKeziPgs4TfpxiA5VyWovWWQfVYs9zxGKEEPKV7JwjE3iztVUT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2viRsYvxaMbfPHicJfqDW8AM2zHNa7J2vxgKx49j4pTWpYGr5jkuCkyPpevQyRyXrMP45ggsM6rUjDt2mLqnu19R",
  "key1": "2mU9t2DAoQqRvJ6efdxWET8ZvMhhv25b3JZ5tkNA6FntjEcScuEcrHoEaiLDZC1xFm4CBzNnM3yeT6b6DcHryZ6H",
  "key2": "5hd8DGd3pN6EaBNrDyN46AqNMkqbbWjkoGKTtfdsr6aYbPuT21N8c7dMCxbxxPFW7LDeGFPawq1YUExHKnBqceYq",
  "key3": "27MzdgSpSz9jgdU9NXmAUQYs7FzYdKX94bNBdSpBmPCcZNBmGSSVAvzKotYPHMqcQWGmQNkdQp7gM9CJv4s1TERv",
  "key4": "4UVCtc58MVTUgA8MZa8nQhUFjKir9gfepsbd72fCkyToXK6pNtCE7nYs7T5HT5V87SuozVHAFgn1NjHz2x31ovvX",
  "key5": "53mUgSSsAXVW8k4fgnp8qTCfgMF6P7RmWt131DmiwZ5Ea2StpMyPc2pgiwLU9WKRgnMZ92fP8UDY8kRdhod1NDcz",
  "key6": "56hSeUmiRPLGdn32jpRUuvbcULK54tA5ajn5JyKQ1aVEKm5U3uVF5UY1hQqWNCk1GdzZ2C1QyzG8LTeKXrDYihfn",
  "key7": "2sFdLaG2yXzCzsNBLDodWKTiryQfPRVtDbr4WqPj2vShk4TUkd7kzJD1jJ3CFq7ZLk9ERNZnYAQgi1bamKCDGnRp",
  "key8": "bZH7Vw5g12Ln8Z1754o8iBr8b2Y1jraw2j8Ef2aotiTJzoXNPfw8PNkBUPxHYesgxYHMwzpPtGchhStc4wZRouE",
  "key9": "5wve9pLVL2RbpYhTvJLXL1hpCaSmvyS6aMf2aMUYegfGrSwPJFRG94fUvB94Nt86VsXqCN2TLbJRvnP5M6v2zV8r",
  "key10": "3CMJ8a9rvixaBzF4RmZGdMVrdZZFZX2idb4pLBgVBuhrEmNguYMn54PjpxWRaLF7PpQdyGYhsMy5ZzKgBxtS4nPt",
  "key11": "2L7rfm8ceXUpYR7f5UtwaA6km1UehMu4QA81CKs2BYtzXUMxrWPbtUyMj5S9ftfsrKdYkNJXZ9THHstFFfc7VUjF",
  "key12": "5rVZVC8t5xn7NPYkebypK2QLJxGcsb54x4Z6M7E7qa3YxZqeXCYJtjzdmjehJbkXacVAGyRbZnS2gcp586d99BiR",
  "key13": "3s7DtZgN8cVgWaUscz6Dby5RhLUwro5wi7mPF4o8gyGLK41CmXkAJH8nEdxZhzfLYAcNBMaZ6UhJDbTo6vZcDCDV",
  "key14": "4swESMTPqcbe4XsnCNXwErVvaDbc8cDFtp8bDpWLLDYCNKuwZd2SGSh7DyKPes8Rub9kcqtcNiCXVbQ8AfttQVGF",
  "key15": "27hG4WoW8H38pKP6VJqB88yLfXAFkHtEKd8bAAqqromdiVCaJXHx4eJbssAuS7wdXiggw4BbHNJLhpNcwgnNq4aB",
  "key16": "3qzFVS5y5wJWW7S7EDZeKdvmHQcXFciDe1C8uqdRi47Eo8DwQ24MHmv6oTruSgRqhewjwqQ1ph4HsRrehfYMbFEJ",
  "key17": "66PADst1rQCEhQuP5qT5rTcyTp7ic3z8tduUaMZ2gq3kaAWMqbC2BmEpC7xsX8bhNDbXoTrY5UBYLLB2y4J1DkQb",
  "key18": "2bDfKQP2Bcavm5szJXh4pfDH686V135gwa31tKFkzdEakUM9BYib5ZCzsfHht3fppaWpEUCDg974E3XQgjkwTnJ6",
  "key19": "33EeC8vLqj2zPSCBLqzbfRXpQu5uztPndkg9m5XTKJpMoSxsxupbAcjKhup64gBQGXBBQxWPsXZgAsc4cTSXScf8",
  "key20": "Xtx4feNgVHngPJfmhURHNUdKGFniJuzbURJ8vb27dtqnoEaLtE7YFtRq5x5mRoFyhj87H4Todo1bzbYVZdh9KeE",
  "key21": "67haCmA1bNrQjYvqkNfiN9sSu9ovw9jGo6eok55dUXF3zusV6gc8ErvouHrDRJfaQ72w6G31T3i47LwiFojuFDcp",
  "key22": "4SrCWMTpktgqMAJKBsdt9g7jTshssBg5MQ8ovjVru4Dk1gfDXqk4mEyKVwdVAc5F6LYSS3qmr3EC6iu8Ns3kExuB",
  "key23": "4h4LtmGsyRLScLr1Czk7xSm12S2smqMU7dNoutoV2KjfYs14y3SiBMaMrwH4mMZna3KMwkaPWyguxqrZXJZBmu2g",
  "key24": "nNHRBJZmJYEWmDXyt9kijrtUBTcdjP5cMtW3usAyAJRXYky5Z56wT4NLXH1uW9nudRa6rSt3vJhbGrZaHRUvSRy",
  "key25": "2aXL6qDrw2uT7mxZJT71okanE99r8uGTKYVH9by7TXC41V7fqq1rm9syKsQ8BCGzStgZKw1iqm7k27j3YRXWctJq",
  "key26": "4qNHgh99kmMHcoqH5rxP2nJVzrhfNqakMYpfbMWxfNX7WStBVTKwatUoh3LTUEeJTtL7KCc33bpLnTgNKcY9s5PK",
  "key27": "3i64UpMVc5cnp5Cht2wn73Qahqdjaz1ReiQo2N2u77UsgbRKKX9LFUA8hamcbvkUjpvMCa1vMceQoEF32Rri1Ns4",
  "key28": "4ZWeu1hLYRCv5MGYzywgv1DEJYvgkroQ6GYipFey6ckX6rkjvDuSGdwLg6sYzxX7PXjQ2avxrfqVykmt4ZnLhzi6",
  "key29": "2pPA9sxFFA7LVaB2Qv7MJ6QiRpmd4d2VwRm5FoYvTybY2cPhd1GTKTaAZoTHo1greJp8M5UDf94jKT9iTfCk2G7P",
  "key30": "cqV8HqSqwjkNzRJq3AcC9Qkn4sw3d2RFpxiNeZmGVL2aXw33jqS8yfXHVU1k5VgnnwGDQGHYRADyCCNmMrhAB4y",
  "key31": "46LEy8LtE75G4D21q7CSUTcrTeJEABiRt2kVxJdstwMai7DrL82HC9VXhMF9oYKghMNE6iAnkZAVUkzqmStPbsui",
  "key32": "3Jehv7SqodUdwKBZ8YsBdL4sP81AjbPSLfEhPrduAajAoqM859c8L2r3QgBvGLoL23xhZdUne63JJGggYyevRYQW",
  "key33": "4QPYskCApoGPzvKEAs8ioMMpaXGRnjgynj5jDatgtyVbxyriPWwNRL963vnMDdEKzS9aNLynvDgE4ivrevDhaCJT",
  "key34": "551KCAGvG11BiMDGESnMuamKpKoN3AsGcYn98eFu82ow3wBhJ9udMn9JiowiFWGFbNij81m4KW8y9GbC9qazJMeA",
  "key35": "5Ncn2v4XjatWgNA2kTD1rLcSVS1JYHPeFxuCy15oSnPbh25pD8kgFGTmdM8QwnnrJn6unHwPm3HMNZmiFJBF2zkL",
  "key36": "BMB7kYjcvHdtjEEoZg3qKmHo5wB8yrJZvWa8f1hGSMMuSqVs4HVadeFbJpXdZEPUkiSXxGARgUg9gGyMztUhXCn",
  "key37": "3TsDi2HjBXtESNmy3dMqXS1HrBDoqrFxHakwbyfqErWKGasfFZPV9nuzsTxDAGgnYZat24djRg3ZxrYkLWNSWCfa",
  "key38": "3bXDCPzzGRXwknUChRNmfDMu6dPHpBn9pw2YpSYEEzo1ZxEn9oqW7AKs2FmList3U5wL8S1bcXwaPNmJJ1TMFTEG",
  "key39": "4fv2PqdzjsXuWGxYERj8FJ8WZPurm6kq9FPxPabSt5Sebptg2XM9Lbd1pk69csnCTrhk7iFrC2UYP4wkwabkRcrj",
  "key40": "2iWqEKZQW9fUKhJaAXmCAMDiEADfCKL24heMYwAJn28go3AVw8hrbxc9D88jdbxBj9YWcdmL5e3r46SdpFK1TWFM",
  "key41": "24akwZL99DH4ANRtM5U75PU6GRqo8DDcorgvUwu1sPs5BtPmvXuEuipgFetU5Ro7CxcVQoEZsynZfq66etifCVxd",
  "key42": "reQyc8BDQndY9GAWiG87bdJ6BDB72nLsbuKyk3WZSzV96ST1VFbwpHJcbjEv7J3khZT2WgMnqNWrFJjEnZQ5dVD",
  "key43": "3KuDc2KBrbYvszkgo1kUac8yat3qtgrPgTDAti72NRuJqyqr4HDSk21JBqd7M9RAJ9aY1ee1mjag7wSMEpZLTrsw",
  "key44": "3aL6aWMBwxiZ1cn3HGMg8TzMN2EmR33LUpnSVeXug3fkumAebcf27dRJmJkFGsveMZBoTA6bVJn5zw9GpLmEgPy8"
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
