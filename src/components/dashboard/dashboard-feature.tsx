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
    "4MLnPqXkb7SkNfNG5pMNj4Z4UYUzuiwbCEJ4NCGvBzrK5nz1EnjUfn8AeJcN9Ade2cP3TP4XSKyZZcqVTTDxHz8S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26bNujuneXyDRC4wo1rryTMaATjQgR66BFbYFt8h9gGURxq9XiP68hkAyKfGWa9NQmvn48tY1JfJEtA3SiBf1hBc",
  "key1": "5gtJPbkjhaY7ynghMF8tDyjYMEuwsCBYNp2H9UXsEvRDBhLY62Es69HK2mHshxZP16MPtR8HeUnjZj3rgSsQ64YK",
  "key2": "ciRtdkhNbjzUrAxNiwjiuZ4oJdiMxhHHPU8eMuZ29Byt83dKFrrUvGQmECe8GQdynqRn7PjYv26tGPPbzVJtsp5",
  "key3": "2G3xwUA5PbTTUotJdbdpg3sX8k4xkvnASh3JjmZ8UypM4X8kBG5tmsZ7dKEutPnqd8fLzqv6WyQL1nJwnz3K2oT5",
  "key4": "3Q23i3TPVGPn5BS7nyxXMBNTkgGRRA3EeV1KoNtzb7kAxWWYcBC6Ai15Y2eLuTYqk32sJhfK5CXdxUNEuLNuqECz",
  "key5": "eKnxNPVYeJjgnNxmvBjs8jcjQvwjmwqfAQmi4tJat7M8FzY4hsAn7AFxbCKHVSALgBtmTnzUNi76nuyWBafxknx",
  "key6": "weTieh4PAStzJJd2MYWatGiKaKXnYwY1DB8xvrNKZGjrM7Nc2Ba8DJgege7HCiLfqRArcs8T13s8tteKvoQSg34",
  "key7": "4TFGYc3Yhi6QhNynp8pzWuwNvNWN5Eapa9ii3Q6L396u4tp8kheXjs3XUzLkm4aeao8yKMAnvXz11GRGAxeXictS",
  "key8": "4Nbn5XYHh8uAr3KADZftCGW2yqhBSmUzBST2k8z9YZRUPa71xMiKgiwxET7oxZSTsTrWSwgX8Nx12tv87y88h657",
  "key9": "2axwmAZZF5eLy3mcCG6rhcuP3qbogDcMvKb1uC5uvxC9bYZAvYYUgoTXe73z43EzAZBdNVk1PRbJn28fHnREBUVH",
  "key10": "5wu1Uvqt1VK4cUkSBDPvhXWbbpGzbBbb1UvUwacsPSVegSw6tjQoREn3m1W635zaicKHZ91mYQy1G6ZQiajGarZJ",
  "key11": "4z8phnpYZkAQFLy6125hQBDpQX1GHJJ6n1jKL6CU5r6UFNzi5jWTs7aDthKkocRGbCFWQFELydjnEAdp7zdFXeFY",
  "key12": "3tMQq4r8CTnJdE6pdeEP2MLuG27agYTWXeREerdMREXRt3FSJvASuDZ6UeBwYhwEHVTDp2ehkAhUB9BndQsXcFXU",
  "key13": "5QT2QjXUemhsDmcCo4NGarfsS4T4HKeRe38Tp3FwUjdsffkiczRDkLfKwkYE1DGxMwxGtgE6esUur7y6MGv3gKGA",
  "key14": "3C38bxv8zvKp9H67wKXfmRUmGSYWFwtYKzCHqD1kDyQff3HEp7c4Vgi1GfaWKw3vmSbY3gymn3BE2zS66XhgmTYD",
  "key15": "tdm5p9YQ9YJVkWysJSJgcLTn86NqkvFbv2f3xDRomSSeBrJzUaSMA1w4z51cuJABhK6binhSkAKjVj6JXjsC5BQ",
  "key16": "2JyUVKMeFQ6QceYu9UqPRPWF1VpRBwbaNHd5VCfjzs5grSJN4qdmbQbJxuoLX5K7qxMncuoeBE2Fq8JkeY6MseXU",
  "key17": "24Pbb79zQuhaCfhiumRBh1y9vJkTDcqwTCUxKKPHTFSsye2CUXWfac6tJRAzZgmTRGFfWU9ZFdZk1SBnR8ijb8rS",
  "key18": "3fSZW1CZkMAw5gDvenWMJKgvqjBgAfYThBcUk7ikwsG7RLNStpgqxhQqrLgUjvW79UaxxNCpdqiKhnqAd4iC1HUF",
  "key19": "44QWkKSeXJWF3poH1ssRV1BvVdzmDUhMj68udUKLudtvFYMcWZgs4e99xcoqNHQVmBbnzLj8qc2odopWd3FVMqnR",
  "key20": "G6wAdPna41Q5hfFANSL24Srcgh8RerootNMaRgX15wCfGwfbL7FBDD9pXNBEYGQUhTsrqZhc8QGqzvqUqQquBBc",
  "key21": "5ouMqz11dNRrnkVtG77oukWuZ1zv6PE3LNujZHc3KXybMHa2nTVz1kJbk5uSGbbr2YxyeAVHVntN1Afhu48QLnUr",
  "key22": "3AaU1NnuGRERJ5DRs4jrXvtCFGkZcK1rFERnrQ4V46j7BL7d6PbkCw8StZoXbRucm634K4CGNLEuFWy7TAF1J8UX",
  "key23": "UNqcKMm3FkJRRXvqF7NQ4Y2za8bMS2dbFtaafM47BExbmL4AuK1RF1Cssaz9cS4mG6fygtchxKGgQZB7LAFwS4P",
  "key24": "4aKwfRMkrb5i8zmgWEXV2SpzeXMvSSxutAztrw4ZSEwt9N2aUHMnS1WSnEhQN3cfdoJDPiUfrZHKgguWyiwrpL7F",
  "key25": "2pEB2ZDcdbAGwQ77XbaewUpekWm6xLMhLustFRUcHe6gQ7PNaJLs4JhKZu5RhGJvYjDSnT4vAgQuA9jLREGozP41",
  "key26": "3P2H94L3jfMrhhvmd6M7k1Mv2UAx9L3mtbAKQXqyFVXt4BLnGq6NRJ1vH1zhS7zAz2qgHCUWMdmsfakTeX9Egj1c",
  "key27": "JWTe3xX5xzJPMq4keXkRAkce8sTSsStn7gEkZc4EerKRzcPsR693TnrmTK4LTJ24HUGBPZC4uTN18ZbRfg9wZbr",
  "key28": "28DHoTJmKHZn5FuHUiyHZ5TSfXYGEamPNXXx3oLPgTGwupSDVjqQW8hnqJvN66tWdpGH3PBjubgAJ8Yzg2DjE9yi"
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
