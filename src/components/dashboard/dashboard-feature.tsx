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
    "2DU2ASZWEeuz7TUUnbHywRV9vApfLkoX1W2er6CKAqq1Q9KegneDJQEZs2NUXKwqJhGe4zxshkhuRUb1E6X1mNr7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DjYz69tmAAyLZvhdE5dc1Z2qyWeiUE57a22oe9sn4pYiMU7NCV6sztcfZYmzxZLA6pvZ7Dz5TMtgsXFqJ53HtBy",
  "key1": "4iLM4cKht3QzQ1scDgpJxnMBhCMrFKVaKTXXU6rr183fPUwtfNFTu1VbSLX1EMPtH8m6r2TBUvZVLx3YtmCsLiUs",
  "key2": "5jBLXTsKoPwekSuPXhmNBcH4piVhk7dyRfWJM5KH4TLUe74uxd5jk38qo8QhManiJM6MqHUogfnBtBdsc2jphCnM",
  "key3": "pGcqCgeTSv3LPrq533A5FxX5XLq5bVzEoaUFLikTUAR3fjQeQyhw7xQR2n4EDyBi4Bbqv93XC5jgkcDJrMkRtys",
  "key4": "4PeZahpcCReSvjGMPubjTKwqPYJjBB8nMh6mgjFAeUSAKFu8ovb99pAiNu7RpEUbuEUJF7UDg89wN19M6dpiPAgx",
  "key5": "5qawno9tqtsdS8PVPKU31KNnpE1kt3adkKNA79ebjLG7p4r1UrNpReav2ANepqE2c8HcnqZdwgvR51MgV1Z8rE1P",
  "key6": "5CjSEWyTgeU4j4tZTStNc8Y3Wn9Jxv3qgV916ARkyHPn9fCd6vvej92WNuDnDC1XGoxmAzfmggQhMYkupuDxnkvn",
  "key7": "5Ja4Dr2D5dnieEvvxTdBwBVdyi9fz5pHypdmpXe4htLJnDKWuTpyezCo8ypCMRKWWhpQ6HaAkKB9PP7XcSfqyyU9",
  "key8": "4K9a3xq9ks6PFNjUufxbGFdoof41rzHDz8KMYapnZjeVCzASDS73d7PPQRihsoFKjtgA66zWRvng8HSVqezor4Ak",
  "key9": "4aRGTJVXuZ7GhwAFqE3qV4RBT2WmBgXM1kqQEpm2TXEdWAfGLs4c6Ze4kpK9wPLKNvuY4BrL5GKkGJmbWtCkv7fv",
  "key10": "63JH8V71AqexLpRMDQ4BjikQ6TDNqs1H96m8nnicsRAFz82D9z8pCF5rovmr8bpFHaKBgb9bXczRXEcdzAU76Ljz",
  "key11": "5JvUf8kTEUAj3h6HAy1SZc8uaVVZ6tpPQG4gsW3CQrGSxbsuruyzqajzkKJxyBWXGSTr4nDnL8ns5rrnLM8RvBvJ",
  "key12": "3nsrzeVSg6odK94sQsWqBbwA4tz9suCySHYQLnndNg9avDQftGd23qVGyfXvnmBzxq6pxMSzRFMuYYCTLo1C2xJd",
  "key13": "4U4jkCxNwm5hBZnS2wEyzzMsLENXq1Hx5eSAHYhu6tYnqGtgekYJWupLqKricQzEkqReW6SWcq2BPwmqVKUAvUST",
  "key14": "3XaCUj5hJ8qTUw8fbTdj7c6wC7a6GGM4S8sohZUrveUACuNVcSQ44J32KhjFS9Akj3veXkLeKuP2s4ENZJFyibte",
  "key15": "5UpMS8rnkUG644h1BRorNjPfPYyrA6dUgrgMjaJebuwY2ndddJYEwaQ6i5Be6SZoG89v1suTwZWAhRppzve9DwBJ",
  "key16": "C5gWfiruXuvaJbZdicM5AXfzMX5CFPNPcwcXpcJQfb7MyUv2fd8fjqHtTmMaR8kRVQtsgLNXUzY2hkFSKBJvyX1",
  "key17": "45eYezhsz3Qkpy8RJA52GZATzFmoN8rfkAqXcDJdcTY5ARG8ocu3UXET4MFkDur4LUrjXrrgExLiey6V9gpvz4q",
  "key18": "3BbPFwuYwYV6QBPE5KUynW1BDM4r72U4qp6uET9spr5X8MqCLkCZMXoXGRNCc4GFG8cNfjHjD75db7odP9fbGRnU",
  "key19": "3ChGz9dLAYjHypJWSTfK3hfCCUeRStuMpHdae8pNssm9bJ1V54CpZe1pmiTFjESUE8VEDZjss8bNTDusUz2zvVGb",
  "key20": "4dL1qHCrbbSxYQz2Zsr2R1mTydqJVBzZkbsyChmUK3EL6nXuBCpkQ2v75n4me2HBRmkeHKdnot8GhGNS2EzAQ2Pk",
  "key21": "t9eH33jNsJxckjZm6BWNk6nxrFztVh9iQxYScK4bvH1ZiLnErrszrzxtWGLwoSmc9XtMunATSm2xq3AEnhRQZ6c",
  "key22": "2zJrta8Mdqj6Se7Tjsv4jw9TqXot9MeYhVtX2RjKhNu6M76357bWa62VKU8EvVAUfhNCPJfrCs1gsyUsKptDrrKM",
  "key23": "4Hm5UqVPMeu5eZg7zqkw9TjGGEc1XyT56MgCX1kZtQ3mXuyCTSTFzU26ANnELA6BsVmKdpTDdCrAGNRBMJjS3tLJ",
  "key24": "2Q9FD28PoBp9soouTSFXtprK3VSEa7UfBrYozA2n7KKzWXQhnVPBqs5vzE3xxSrDqhntYwQfDnDHpuovGrgELa9",
  "key25": "3Dk21466c4pZYGmLSWqGuJFDLbu9Z7hNoWGSVzpPtMbyo7rzN2Z41cqEfKwxBjZkGEu3bCjrvLh3cv7RVWAywDEP",
  "key26": "2UgcxH1LYBWMaTCeudEvxXKXhGsgrfWi9QgJyWvRqjnPeUdd3EuKSEAECVCR9jcxpMK9R3XRFjS8zjcxhyBuMwrg",
  "key27": "2BymUFg92kRHi5zQFavu2mY6z3Kbfhk1Jbs7UQ9mYZxSBd4dDz3rwJVg9UkBrvAwjd3mUwwyY3o5u2LRDrwUUbo4",
  "key28": "29QXf7Q65gP2GyRrPpZMBFSxKgrBf2cKLmjTBSRFRL4FAxEkaawUteUxMZGQvdDXqrgzCey1GQbdzNS5ijWx8K67",
  "key29": "cVDAbT5fBoibxvKJtKEfmgyCcKuHQGXuR4BDMZdVGFF7PE2vjgiLidEFr2rzvfuguC9qpDyeLxk2TYddwuZZsec",
  "key30": "3sz6MBnNxtUxZbfogw1dgQfEWMuPKFcLvejzPDiVHH29h3JvW4ixxX1nFfvKnwzA6c7UX6yJzqfwHAuujVofnW4v",
  "key31": "4kvSeSS1bpYHwiSqHp1nQ72Udqzhw9rdAYcXesQVqwk2WwnxdujZoVCXE2ZGE3fwEy7QtHKrt8LhSDbbwNPwzfaj",
  "key32": "4o9JBfTcY1h2jgwMcvRQbaJySiRqcu4HQKhH1rK8QDc4PPb9cn91ZPttJo2ky5DbHNY4DHtawuWQkibn5wqd4KFW"
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
