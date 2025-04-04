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
    "3TWMCxEKd9DfQ4sCwp6GPemKWVHWhTbUFEJHKcptaiPG4NUt8fszyRV8DhxAvLnsDtUbM9KSL5Qxy4jtcCqxUWDV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V46fHNRxDtuci25bpzFBFsT1EHJKmBogbsavXGZdhXXXsne3E7Tgdro8B8qF5kc6DPiSe7oQDPNs6nXf5vkSajR",
  "key1": "wKT2DfNKjxDtCKi2koGbNHfcp29yqCPYBSqUnBVUBzwi5mEW3aE573QLGCHxtYoQAqQGu4uQWgmeHZ2QWr7Cv51",
  "key2": "2x9fP4xssyZMdp72tGZp5dXTgjxau9kpEAu97rHSUKBuEbPN8uH15QS5kNHDnzJKd4b2ChXrQpscQe5xFZAFfhrR",
  "key3": "3kkR8GGoSAz6s2TR4Zv7CAzsiEZQeakYt8vhr3xBiFdsp1Kmvsa9UiS8JyNUqhSkRvU46eDzg7apgHa1UpApYZV",
  "key4": "4fw8DeKkAL2bCHbCZYos8TmP2prUZE6r1Lkb5erJjqEpnsYAs12ff85dgHRKjm2QYhU9KVySZCpB3SmAkoqMYGs1",
  "key5": "ayDxGR4hdpeqHCCFcDaHjbKSCjBYEFxmVH83LdBBkUYMvV4dov5V8jhANoKeRnGuuz62zoK8VpmUsBHmwSRQWgz",
  "key6": "3QMbJDb3JxiqRc6k9MwYGa5sfFBvE5facNmaJWyHsPqcWDynD5r6sbAvyvpgXNDpHUsDoShDYSC5YPWtWRKhXKoe",
  "key7": "4cbCVDde5mdDaAnZqmomYHbtzLGzchK4MLsjtBWxJ5iRE3zGdZKDYrVjT4hbCpuDajzHxsQvkavrvxqmFceFUFvv",
  "key8": "2Pf85UDdEK7znnPXjQRkXhpCL9k9D7has5vJ7zPJhaYPfEW2tTtKhnAKsf2715FbYX8ZuYHCTimQPS29sAZCAuVQ",
  "key9": "5o1sv3yoXdfn332pVHvWpd74drdJ8N4Wam4KPw9m6psqsUbuUWWhb6C1mQ1P7YYuym3p2oPszbXNF1SRd33Yw43L",
  "key10": "3Zuvs8AZzAL6jUKac6fGGsJqUyWDAd4GCTZtrQuuEY3ctnpTi9k6ZxZwNkSAYoZ2TZLCNQ2XwbGpCWwgUZBCgSmf",
  "key11": "CjyyQ4Gx5WYrzPLHeux7AoqMkEDXxzdcquLEwtQbn4A4EqSGTML1vKTFGZ4Jj42qA7LxCk1fPE6YcGf4u5d3DjM",
  "key12": "Lze4kJRYpRqaVLiAUAQi4iBaBUjPLWcgATXQ13SnAA62dqohc2KbQhpPTLsYwdkfP4doxFoe5ejUn29j41onefM",
  "key13": "bU1Yjd1HCH28k1yhFh62Z87bMnUC7KcTzaNcuMNCVTQQ2e2TjeX6uG3LJSKPq1PzfyFbg2gn5cny316W7QfeR7u",
  "key14": "25kHrm4wY3TW3aSyHTMQhubKA7t8mArB3qjqaeXwnmSACSNbkAUYJMGKW24cXHd2JgrAS3hdnDjDYvo7YTCrssQh",
  "key15": "2P4uepdFGY9PrVqKZBDvQWczXNw495GsAZsUC5DyDt6Ak399SdvEQpsdECSbzKsQi6ZZwHEGvnx2TLWVwAFMc153",
  "key16": "2mGaDsoBP2BVP8T7MmeQy9TUFLfrPKfifkVnQSWPSJB3eAyTUhYwpTdfdBjZN9JT17R5jtNPMzAqDKPPAPqaTedg",
  "key17": "67gAYbXcPUZg9jgR9ZjfX6mKmqviGKnKqeRHz3i5XxGKHseKHwJvfQPG1Xu1G5fAmGcJMUAeKsocf9ZCbCVVpYgi",
  "key18": "2PnzTUV2ACfeuDyYtKQXTW9rCp3RNDHtNKyhbNtNaQuV38Pv78kJiTkYzyWYfvzAzCWpAV6wYHxa9mPpg4oVm3vS",
  "key19": "3LeUhZ8Sbqb28ZHURZNcC8amNhvzEnfWQMFHwuCKDPiJxNJrbZAnBF4m1UYtzUPY4wreTw5PrwM8bpV979N7fm2d",
  "key20": "2B9urD1yNjTuSmUEVYQz2nE8emjha2iArfCaHeaJ2VRYLVFgJ5kwEUx7JPjMevoa65aB6Yfwzu9WC99ccXATgNnH",
  "key21": "3ne6Rks2d1gBa2tR5QmoQxU3U6pSWL4FEihwcKe4GLhCpFUWpbZv9dYU1WHqQMUpZiE52bzCXMK4emzYnSwFVdrE",
  "key22": "5dXSmN6ncNP3Y22hvSyx1mTMxUvHozj4qbGdgPEuXPrDF8UxzqqTAxJSs2f1orAHHZ8QKhKxMjSMVJtSKoLqbUJ1",
  "key23": "5FAboYc1LVX2uj7ZxicNDT2bPfeqnYAyv6oogwCMDJkTLc6DwwDx8UrbFqmeWTLeockkTqJkReLobedyQfpMyvoe",
  "key24": "4woVAeBR7tmUcosJipDdfHFLg9BSDfCjkkoFmCRVJ4JvABPhAx5difiGsKdSjayEB8NG8C53sZsDncFJzYyRJb8x",
  "key25": "4vNj6tKXmxCbMBskYL7DkbPLKQ6WobQ7cDskGvQWedytuksZMHxGqRzoCfpsix7F1wfE6bBXTH3ydiVr7CToX3KD",
  "key26": "2e6H2QGSJnWGJAoPda1zpKYuEGDdoLnxgd7byh9P4cSAXpPad2PhF7RHDSxspxwh45PXFvBcxkjoeCH1eg2u3DXY"
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
