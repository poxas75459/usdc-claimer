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
    "4JzyApPU1WUQpJxPjA8EK59aTkyerRhzsL2e825y73mx4oiXjKdJe64r9q3xioJF9NevNU2MUue4MbkHKZQGkT9d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36r2eiq5TrPBi9r8GZwb2ASgzHo8VFkvYwXsE1WgyrP7piE1unPxdYwRzP75c8FGjvzmbVUdykQ5WhMiK1Xo9CrD",
  "key1": "NuzfG89QcVMUST151uPcPsRgXTogobwD4nxVWJsgH1skHZ529xqdXtYC1S4BJi4ABUEWQMYUc2mCwKfEdF8RVbZ",
  "key2": "2v76bDEnbYzWzjTTwvMmghMrS1jFGmCejEagEWCYs3t1xzJNN1x1pky9iTvrapsdcjQHJ8nEbReUyUp9Sa6xKnir",
  "key3": "4qUYFqt9rsZkSG9TgG8THBV8sjCTEjWH9d3BqM2Ya429tDLWJvbpqazNFm14ykwPD8g3WvRe5cKKqw9W22SrQygt",
  "key4": "ofvwvaKjMkUsU2Goizfmkr6SsgH6626H6yrPwbNTYAdoaJHanqwRAniYxXh5XVB69iL4LzrQ6Mk4KZterXBgUK7",
  "key5": "U9GiPhfSw631JQzSNFA4j6ebtVdsw6yFZKg2mqbovTvwNBGQzTxuaVMDddqDz75wB2ob5SDVut4yRRwEvWC2iX1",
  "key6": "YjfGpQAzGM1oAjfWgMJaJG2i3TCopuVZb4Zwn3z7szqm1WiTSAojwqxJB2oXMww8vvSHZYGQpFrTaJQ3j36nphD",
  "key7": "J6UQaxXpWwbhjzorBBb5m3TWuVt4bJiBu6fpY4okwiLiPst2CpxLFNpZe9FoyvJxAuecH9hzYq5TN5QC15ivvgh",
  "key8": "4MDJskNqU3rFFx78LdPdVLiAJzHEvxmmd648LbVom7SwRQfrPbyr3ebWtaPyEdmsLr8sckAZMzp1Kk42nFHs8kig",
  "key9": "44bjtGZVqPN2k5xWwipuNAoKLszUCxzYLTAUoKZXLbvQH1Ceqd1shXkhJFG1m3uMgp4gLC8VEVVM9QiuxDjhwT8o",
  "key10": "3UAtuJtLhfvrZAk7btALrK8AwYMaP7UjZmYx8JJNj74PBAScz5fWBKTZGYAai19QTo2WwARN5XxeCa99Z9M7b6MB",
  "key11": "2DRnHkF4zWDCxnebDycbAG4GwqeKfu3uN1F8tKaddagaTfJajF9REciQksFN55hsZemXYt1UdtB771X7CyjqhpB4",
  "key12": "3QLqP2cshe2yuocKBihQaXqYLyuWf1Pryt4gZqJJPs68UXESf96XYsKvFJeZrhACCFyXjgB49qR5uo38vyejP8XK",
  "key13": "3uhvUReFzttT2io3GKcpbKMjTpAZCmsX5zZeaC87XhZcS1iXdUwznKVffa4Pi3CVXdPHhP93bCRXxfZsbuU9vST9",
  "key14": "5L42VkH2ayrbireJ77qi6Tok46n2engpMHSt6ZS525ecUdrvtjSic71beV23VjXdR38ASPdc7dPHX5a23eTiQoEo",
  "key15": "4jr3LUmYqVF5Bg3FSYZhCJW48c2TVFwQ8mCAG1TFKpT5Be3DF89tqP79ERjmpXjMpsEXGsHD9AQYyyGh67rP9vwN",
  "key16": "5i4PYKHZixU6akZFRXih2y5LYqsNMyTvcmdygvaqekVUVRAJG4Mg4aibRVB57Li9CFGcE3cN9U5sdJhuPXi7Jt8L",
  "key17": "2BmJH2DXwNNaaXLF7RcpsNWtZqPaVqzVD3APw4FTaxew74ycujnGh8cNaLAPjXWTfAvwqjqBCU8TeTmB8FL9Fesw",
  "key18": "3uHinxM46rhKrQHCtBqmwkTVzERdN33VjPDM3DFcoF5pNjGbH5SmfJx59hGRNzhSPn2CxcgPNoiGtoiqnkVnowcg",
  "key19": "3ASeQmYiYB87E31NvQxBJv8ZwSZqHvMyHa5ghjPRmDwNrKS8qWtSvS1PvT1dDyJguPq3QKFWVAPrSjseMmhRRuK",
  "key20": "5kZcphJPbAjWW2HNTmB15Nn8pdtFWT3TNvzyYD1GpS63feijFJGT7nj1FKvebcfXVLwNww2Yh9PmxCAVMaohk7JT",
  "key21": "vxxK1YPuuVZFRiF3kMdUXqexVVHQVvHN3xghHAr6W7P9HGWoCecA6JhtnWcMHLxkUNuxGwWk6QRzqF5gXmz4Wd2",
  "key22": "2ZdzibScob9Q8yK4BoHSMcNMi2Y8QdfjFfRyHyxPbAn8Vz6TbgYVgPcDWWLV1H2vNssP2gDHe2EEasFAzbBXcwTd",
  "key23": "5CSGuD7jYvcaiqeXXotdvta5ZfsVomw3xzs1rkY6QzNwRmBZ4ZDyetQQRmKYXWtWoUNT2bwKeFvADjYeac8bebDZ",
  "key24": "QyzDCANWVnBBfYomm34U2LLE3TfWic7xavxx8ETDJLzR8ARZH4wiZbRFXNfNUKJSqkHpQcYgdYxANJtUF5oMX42",
  "key25": "2opHxEprN7Mb8ckM9xrUcxzqSqfhCfbLHV9soSW9KirL9AERAvLKWEyss4WyW1HQxyDkFHUXyXoL1pFrz81HKU57",
  "key26": "4L1KyPZ7SMAD1Je12YXssNYFFGqnMgxggfxAWajNgGbfH39q41r6sZuhJKki8K3cX7qhzW2ujJdCe4sq7ShkKd4x",
  "key27": "22qMFUoKSgokYPBRBENvLd9VqnQjVeThgrEFb6ZGsX6BFVTFV4bvvXMwiSxLSxpYZuEW4BR3j2Ca6ABF64mmSKoP",
  "key28": "5ub9tqsoUPYjF7mAGbaJZsX568XJXdzTzaPz6pytJMUwiocwabs37GdRF5GYDoEWoD4qWy4B5WHQ2Uv5JuNgTzp3",
  "key29": "5MXzoSUp1BJ2aoEprUAFP7j9ZKxfyHwFkg6KJ6RZ1fwD3JsL2JerLKodnSVwDW2iPkXFhBogfFoMrAuGrvBhig8r",
  "key30": "5bY6HbwhcrzVDXCBkSY1EUDQUU6q3bGweK8EFgKKtwRSnXk7pXnNnN6Jguo3hazdyKMh7kGogQJJ2dD2kxmsAk8z",
  "key31": "2KewqTz3Uo1UpvUBDd7uBNyvP8jtbyKiBeEKUCtwSUZuzJLNmNQzroomgamhE9pUSJu4n4Cq3t2Nge177bMMkGLC",
  "key32": "4MTTr4DxFBWJq2hqWd68B2oky6zx9LW6J1w52JZKQDP5aqHUYQWi1wRiHzMWkiu9jcfrhwaGnWWiDkDuf5vAbXPD",
  "key33": "rBDdtnUuCdPoVLdJvKMWfedu931EQt9USUX4nFMT34xEXRYHU4CoY1YpdiBeHraQCCcv8jNkFAZUziqWwQghmNF",
  "key34": "2oGSj1QPb49voWxMPT72ecRDbdZujx2v5jFYNn82XsgKTz9zm9paxkUy1gyhvw1qHbbFq4qi1SH9Mcei59ypywAX",
  "key35": "KrtxS66vzZm2H2TFYBgbu59SEY2L49mTJrmsoZRx7GUNWxgH5YZKLXXu3JvGgng5oYiesopZn1pvydbUeuuSJkJ"
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
