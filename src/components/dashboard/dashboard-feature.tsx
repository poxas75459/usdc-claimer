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
    "2CLf5yEhtGf4dRj2ML12PZkBS3Jpxh23bFdtJHjyusvAmQTdBtEP1wdM2jHZCjooUqstkYmiwzWupz4w2dVgPGHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XgVQBdPRSq48afFC47bJGSyozkcucQDiU9qNi9Mo94nUXpCkP8a6Yahz6WL1j9HWJG3oxDrUKRmE5akaQZwisij",
  "key1": "39QuTAdXFx11Q3r7BrL7WrgoxqH2cvunXyoTNv3ow8esoHaa5Y8iptY4VHiErx2KGAEdjUVqGKa7gYQLedKPjb6v",
  "key2": "3Y54AZgvHuynRBimVNfTAHMzRJSmefybN2gV2AsVBiNgxEHHgTzL6F74xmrxzkyEozHT3cCKLJe9K8kZJkFUAzsM",
  "key3": "2HbshsyKfre5Ur85E4HL1f6XoXnBvF84XLFh4ntb1MpMhVyvuzAqMBesL5Bopzz5kzCfznxJsLtbi8JnVnpaL53B",
  "key4": "2FA4VVbwyVxCqcKXtW7qdGeGrViyhYme9sVuTgTsqFrGb55QMLNF4V8myHW17KHxRASVQ5YByQg9LY2M8HUqs3Jb",
  "key5": "5tXy1XjM6ow3v1r5RTgqvhMcgM8JU3bH5CXES58xovThusneWNBNdcjoivRUbZuJFkmmAdng8r6GHLtr72Qi2wHA",
  "key6": "5T1PSg6u2dnanyRTUJjZ1bMeWxRN6aBUXBYBff2xkpWSVSXquPiYF1M9Ec5qb9tTkSrvtuCikNpbJfgjJRSahZwD",
  "key7": "2z6mUi6f28BTtQuz2EJb9FM2ifYbJpk5wkSbMhdxpfmsY4ZG6K8EtU2AVdnmfZZ9a6XzxitiMafzbgHmaeQ4Sjdm",
  "key8": "2mr2UDQHY5qNk1FiCULLx3fVb97qcUaVJuwcP57KDKrXEgVSaWtns3iywWqVcjpcdYjgrkGjeZgk95bd24NZjJVx",
  "key9": "aPy7e2Zpk1hqc6sjVw1PG8Jv5dGox6yCAAmcgiGsBpbne7krogKriiCHX5aq7U2bK4m9uSEzXkh8r6A6ctPDBvM",
  "key10": "3RtUUERd52b9khkW3xZ8mTjw1hXwShQs3HGAEFvudVuRdEPE6QqAe6ffBHYmfDsecTXTsZsJVaQdSn6V9Syz4psG",
  "key11": "2hTSY4UrFbb6dX1Uxoa4cCYUfSKgoHAbPMR4LcdQhMShas8D28e5j5wtiP6eqL3QD1izNsyxnn92nuNPbdVNSUns",
  "key12": "5Zk65WvmNKWnMNLgkdHuN5ooFYDqvojr7xc2d9oJwCjZCguQgBaTycnArsovsnDQGsEUzewejb6xAcHyZKZVgdz2",
  "key13": "2EDGjagdoqZmoYnP8H6g41QvZBiB3BGLGFdKBEsD8FATsRZyGDiriQL5TmLDEDt91oY5hSa1KWQrFgToVPsnMDav",
  "key14": "5QJtv9MAQFDvmzZvZ8SsBRAtKx8mXhwWt5EdttAtEPEvfUKzxKmkULDxZ8LF6i98AAphAYFekUFDKsUxSmEumde6",
  "key15": "toGggriDnK2oURLxoGueh7ehLTkmsqoAmSdcmXJTqw6Jfd2NxonTZjjptf3LGei7bQrNyBFoQq6dPBev9W1se23",
  "key16": "3pN98Y5bBganRyWEYpnZ3TX7Q6nwgVjRqWpQga26XK3k5ovzySQMA7uENieczSxri1ocXxHVMbfNkPNd6ZBUvHwL",
  "key17": "5ptrYwSyRN6jwpnE4YiUSmtiLhmS3xeNQ8eKsWUo3x2ofK91kArYZnHrr3u1wQ7wSX1pChZ1wdxSWHsx7azaVH86",
  "key18": "4A9ApX1uYBLYq7BNare7SAUNxL2k75vhuDrtJvm54ESRWjGfVyd5VDZ4cxfiwBnbSpVcGNKr9ou6XYpw1zPicGCg",
  "key19": "N1sRCVGZsyMSsV5pW2js7QjQnMq2Z5tH8ovBjocdXW7y5MxCmPt1hjrRFRd7JNy6p6y7w1LYpYLYV4GpSV5DUR4",
  "key20": "RsX8GknZHYK1iN2Sr2EwJ87jj6a2Z65uDcyDV5vcPKUYfpq9drvQxJHXVRFnVwFc2VWwY7ybqEzd5y41KhBh3Uv",
  "key21": "CCYLcKdG8xKAV7fkGAvixByrGcYCe5VH7PgmK8c1h5pxGv151aTu3VJc8AFHMTWCLYrhbLJXsALKYhePGV8D6fD",
  "key22": "5au4WrshrjZSaakRLh35Lodcb7rEwRHt4eS3bnzN5Z42UmT5RqqHBJ1n8E3VbTFNPKA43PRdGw9tsfGwkZjVsHS1",
  "key23": "2mwgqCa3Cm6GvMBMRHCSp5FHB3eZt7UqLVv3aA9gQy9Y6bbR4WhGLKmCC8kWjUvAugcvaUgvHpDXe66SFevWF9cq",
  "key24": "3cPHkB2RX9ybJTbEoj8Px5H879rrW1v69jTFZQ1EZSeFwTeAjE1HgHRBnYsVQmWTxtZneCaSPu9d2CXFfBirx8nw",
  "key25": "5NBNdH9zjSZ4cvK2VNizm1aR1Um3BLgTL7FuvDHcGpstX9ehuUxdccCEVm6SDFoRxsyHqMHyX7kLPreAohnyctQs",
  "key26": "2BHrUrXu4Ess4zd4vtuBcE1iRK4Z7TDrxf3SwdDuPCjiBgozJaAVyFr489BG8KdPMQrMD7ZHp6WQmVBmGDuxvBM7",
  "key27": "ACURmnLnmvBLEJoCKsRXJvZGhzKK3z3xWngcZeWGrGRryHrSoNJZL2t1GpFSDWF6PosT3X4tX2rMXFp72LH3hFu",
  "key28": "x52s9oVSZDUehGbriJ4Gj1X9RcGvT8i5o962KTMnZUDDXK6mZ2LvZwzXEi1tfKcRmZdY4YTSDgqHEgARhQSArz1",
  "key29": "4KP4oBHZ4TZfHkDrdbzUnGQJWuuEiMcqR67QoMadY9voG2kStUhXCB3SZxLE8xX4PtaNhbj2WEtDLhLB2RtuFJoL"
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
