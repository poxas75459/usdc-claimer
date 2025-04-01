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
    "39DyimC666KsMiN3GfmwTB3BTtXxUxRoiSFphjXdn4UvzeBcuht1V92mKPxgNXTnQn1BvPcG88ubYEJ92zNey86t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dSDmYaR4sjgiBwAf9gHEjxY3E4RU5ieN3Zydgow9UrqYJxF7Loj3ihiiBy3jWWf474U23jKUnUFLYWY1XZY4Y1C",
  "key1": "iwWaXQ3qVX3MLLGSQJ8mKRLuJbjCpVFsQWn9qdCJNPHCMb52HW6mhQQHxCPG3hL8aFNLY4GZoWYWEbyjptB4Zdy",
  "key2": "4GbsK4FkXsneigu7nUp2dWhZKzBdG6qdUZDRb9MdwW5uG6ZApX3XGtU9WHJRoqU3CN6VUAZdDmoHUjA6aXMdFTEs",
  "key3": "2P92PkyTHcr4PUBu1dyHHbLid77xR5aQCfLV9HWqJ7fxMiYmnnVYLTBUEqpUBAAtSNycj2YGJXC7y1nKGLxj5mf6",
  "key4": "vRcJzHDrB9mCXb66xcpohwcBF4ZNenuJHCfDPA2pAkR9HRfoxHT1RaTGNxmyDoxVhsZWXPRwwsDNQ5hwTWjomF7",
  "key5": "KKuUKzjY6eBVk8pzYauRftSe31UvD9RVfoq31JYcGqCNBKX6XJT8QgDdDnLrx1DnKbZzfNT8PRig4BuDr8ECzb3",
  "key6": "5atLgjSVp7nPeFQuDZXCt5AmKkqTAK6tqYE8j2Sw9mTz9a2PzB61dFuSkFwTyvC4BtZoU95HEzxz2GcFAQhiEyMS",
  "key7": "cEwazcjFVHfxJENiC1DF5JcWEF7T9PSEoqyYzigWmbdB2xMHQqKEJg9ZyXpR83nc1CMWCVb1i7zvqKWbXw1VeWW",
  "key8": "376HwxVxnpX93zXFNd6sewFbH66xcH8Wd2k2gZBwVhUjmuHCWBWhqAUh9djdjvCpggwKfMPPC14aDXE63NwTp4ZD",
  "key9": "5mMYd2CDK5mse4NSD8jTDx8XR1LSjY351k7ggY6hiGXRMNVN3jkTJgA4DHywrBATHMR2vCMeY9GUBzQqwRLY4zym",
  "key10": "4pevaGQwqEAT7TF89uDLPryEnfna7M1Fe54FeTL1KksA5ZMppq4XFR1CD2ASw2iSQmTedVREqqgVUsuHWeD39UCk",
  "key11": "3YVbz7988Z5k4bGh3W9ZL8t1nBwCeJqhQkDq4HszuRhc27vRps9P7AcNrV2cC7TvUmSnPL9gRgdqaJxqhP7sYMN2",
  "key12": "3HaeSigVgVU4cuSrLFjpwWTs3wWHKtShZ69Wc3D4kJiKqJFqe6Eice5JJvDAxPoScYk39kxibCDa4xhBzuDQJf9B",
  "key13": "2Uw6patxNrttvDCZ4WRrogvf2ecKQsHFEWcFWf6Wp1fhwhwLjKFxqbDccjEWLmSx9Suqm5GJPsoMtnTA2rymBn8z",
  "key14": "3BQ9fgXrSDdyfk4vfBZpW6XA5TLSQkHkR2oXDRTd9V2NjGbmXk2JtfxtA8We15r5HMdnsNdh5SuAt9tGK7fexFkw",
  "key15": "5Y6J7z8eQsk5XxbEJnhaTiH6MhQeBjToyHJnVZBSgsAz9LfxeaNUuy5WJYyo9WToraoTUhkUSB5DvEyY4FT4uNyM",
  "key16": "4u2D7X6qC5VFwPcohFJ3yBx5PePzExMk1ffRGi1F4Jvnyck8RJ769YmS285tVX1Yfkc9jZU8qTtajXCodsXJ7VLg",
  "key17": "34z7AUxQxPZNsh7q6FnJjM3nBmTMtRdUbsJdWp8thAsg1FmRWNbHMhdkjndK5t22xw34RdN6Hq8DGvSNEe4Q9mB8",
  "key18": "4VbNWtAZh4CNBik59qsjzAgSkbCuaXvo7eueY8u8ZhhQJYrhyDq9WGKFCuGnpmaiKiM3s6Xbtm4UaLJ7R2hqvVMw",
  "key19": "KeX7mcmiqWyaphDWLdjSHrmb6W28zgYQnhvKZS5oarJvzxgZb41s3Xnee2wVF8sWGx8jPCRnCW83zztzKHQTxgp",
  "key20": "3rrVG3R6rUmLNWzPyMLtpED8u3XiB9ytwLstj2qvWKRHeGfeyHfBRBagCCpSrYmRBc4kMNgD7vPfiHMNWKVB9ia3",
  "key21": "5GSLNz1UUvrSV2sjN9qz7izwRWg9iL6k7rChFdpyYbuwMxycyRNbT6f39g7XTyHRgSSXsyLCM7tSB2Uwj276UUZa",
  "key22": "3tu786VMjLeSFixdNmndjtF5UzQkiuQ1LiPpfpKX6J2j1nvBMNibzvUVRm5NNy8w9xe5trNykpatrx6zSKWcAsNL",
  "key23": "2XmADrbFBTKXZTAxd3gvL4QQgVJyt3ujdE4WyNvCzHdQoRazcht2x6ExV6NaYLiCpcjUdtLDWvuWigHY6YB6CgK5",
  "key24": "34E9J58SvxrHQazwiwfbFSBcuq9hcXb7aNiJdKg7kSPT8Wz2TT5RWbaPJGigjxRmvBczGdSGuUZFS65ZWaun8GXe"
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
