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
    "4nHQfvP34TPCphwZVerfnY3KAZpYDVGH48q4VWNH4EySiwRrUyb75Ns2SUMWobWcBRQAPMFcjLSGDjdcn9T5868C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44purXMNVm1xJFgax93RQpSMm8pea5Gb9u5uE9Uppcf9Aaqj7kg6sSJV5DxeeVK1UH1YNJFRLMGfVmHA9Lo8M2ks",
  "key1": "5wFwMP1eBTB2KpJF5ddTuwPiMDyQ76F2vbt4vi5dLwgzSyCFkZ8oPT7ybpQF5K1idvrj6tanKcA4ixLyikAsJzU2",
  "key2": "4RwTTSjeiucsQuPMhcxCYndaU7WEpJ86kioUZjhnoMpG97Ux2u8q83QkgCq8SR2QmUXaGSare72PRL3DUPNnfJJb",
  "key3": "3NqfTQD1gGvpKY6eAYGKL9jfwTmwecVioAuyMwzSR9SfUw8B1PWkJmDMzoKwuThVTE4Z8y2piaBdjd7afNvQMGv9",
  "key4": "62ouwsTwqsubayPBFqkNMme9nZ4s7PjQwZmVt55mjJFuqu3brM8fAXrdACLaytGELRnsp1pDEHtzoa1z5hgTroc3",
  "key5": "3fakSdiofrkJjmRSbMowhWZbkN1Uhx51b8NQPZwNSYoVEAXTXPowEnXrPPvACupwMW6493s3sKbnax59maTiQ1Re",
  "key6": "3KEB2ypdRYepEyqFFwNeGZGMdEesuAJKfsAK18DkPb7mNRqZrhDbm3vyjbqqNq8zDL9AKYW98aKN2UNAXw9ATTSN",
  "key7": "3j5FobBYKGrMsFCdm74EGcDumyiJP6F9u4NHp9Q7Xwd57HdDRQLXja3EM5JhoH3mtmKZXiZipJ2SacVcny8u3BdK",
  "key8": "21XLS7KgoB8cZSqxLsRT5dwYwy6uGoQaNMfzNKoqwGjGGWZMSTp7AXuV7PnaHmrHPdr3yYaANzRdN6WegfdJfD2t",
  "key9": "3f3LGJMXYmjC16yun19RhWHinwCxbRz4gSoRtMiz61NWiWd2LvtyhopvtZQy1BJhqvP2Yk6jJCrewDbKnqg9pzFB",
  "key10": "3bkRuEBPT1H4UsamDn61i5UXeowHsBGu8yi9NSb75sdG6fjbQsb5wHF7yM3LjDUQrkqKt5qagBu3CtmmUodrbEmA",
  "key11": "3bvbVL8jxX9YqkMvA2mx3dUQr1XUSmdVjm5CwFZqzpop3fQ7nHKiMWPdPxv2b215EVAKQDeiVJMzz5c5f41ZgJe3",
  "key12": "2QBJja7T2A2aEuom9EFy3Lvxh3hD9XY4oeaDq8eFyDidTrbhqLqRkJvf7oMRAeeututyNBTc4cX4FxH9puhoWDJA",
  "key13": "48Pk4qMr89sKLe34NdS76CTSW3nd88CVxbF2XavJNMqPYswnnGUshCbkJYSrLdDNQsaK2xYBE14RBfn5VGzhT7mq",
  "key14": "61u8oDbNE7DvLWFRhq8jb7iTx9bTpan5avv8Xco1WXeuxk7RBfPr74M3G4PB6ABmjMNFXqf83afM8socXEPy3eQ",
  "key15": "5r29ckn8mchboiWf2yaWw54aRWMe8SznsJ5xJF6tG1AmVhtU94QJuNFtGpJLvkLVTQGmg24bLK7GewfYR2E4Dg4H",
  "key16": "3UTo2DTz6nJHp3UScFFtbbj4VXyx5sYyyXkbQSeWTvGG2d1h9JieNUFejc21m5LbSJxwLASMj6T4WQDjZpwt3zce",
  "key17": "4ggkusLbHk1KvfocxzSW1ptLxxppncdAz17B1jKTe3xcdvpEuXjqzcfS1YHCpeq1ZGn82tY6VaRbeHu5bNGWGKnX",
  "key18": "4G8cRytFRbP9r88mhFtX1rAYw146uduEyDP8qfbgmQL4ymNuhTukfBM6ArqxohuVMd3sXm27K4EAQWVfd7xQHZ3j",
  "key19": "EH4BdKQ2EE2xfUE2bQYCroCcrUcnmVhsoBBuqjAJXBSPQeoPzXjMmUj1CB3sow5r3g8dkFrnuacypMohUe4G7Pk",
  "key20": "3hKoivRM2TBqyMArxjZfe5TcL1DgdEm5igfoMj19paAYM6CbhnkWaXwTm6mBqvfFr2SA46voUkgsgK3uENQvp6Xh",
  "key21": "n1fhggqHBCXg2ZifWUpk83Fyvk19TNiUsF1J4nYrSkrNCy4cRqwG5Q4WWfbKWb7cYfAqXFE1jcQqXT5LYQMccm3",
  "key22": "ztTeorGbQ8nu8cZ2Xbu9RZMh6yfHiGXcR5bsNqNWNf7zgnUteVkmJ3Tiqpx1vQyrzXeLKV3nc9erbHhsGTej69R",
  "key23": "2RS1zSfPWURVVJmkNTHgPFVrZb4fGtEPKRzwQBXFgLGStFCY9kdPRXtyfitSH7d411ZESrPuEeYiYrr1LzByb6MK",
  "key24": "gEsQkkj5B9hySorKPkxHwQ3XawCwtz6Ezmh5UH6fq9r6ZVxgDjpz7pojKH4oSpSPjd594aqniwVEPBB8u1a7WZ4",
  "key25": "3UYp7Xh9FBhfUHFaUR9VwWHp5wSA3qWvNLPhpni1QEKcLkcyBuc1M9ijuExGsELAUvsgUJUcJT39XBnLZAYJfRL3",
  "key26": "2hDeCNNT9oJZKFzUGGe4169mXbn8qbTb5SWkWQ5TeUXkfRi5ZnFQJwic2LJG9uZ2tQwnKdMYg2i54n6XrqqNXvat",
  "key27": "3U9Q7fb1tFkZEoqsHu97hyvnyyn8KwdrxdQJtEBNmDJUYHX3uSKTfQHdAZNbXvesH3FbqG5dhFFZxoVjNA5Qgw7s",
  "key28": "2j2LuSFyNMTbSt8Yp2bnUWzyC8NNmXx5FTwNXenbDMeQDiFkPXBnrquc8ftK9RwtQFJmcwPisgaHsF3SQaY6nBoz",
  "key29": "5EtD6Gyro4uoSgHesrbCf1DKjNcwBLAf2quZ6Zx1zzpA8BwkhViHYUB2AD3WFN2os9r1yKpWxaBxdNRYpS3JkKPv",
  "key30": "5aDTWtSQ63gwnkhfB8WiriWrG4ZqnjuyfUSQfD946R2miqt5DSfwjassFZexwjezoFsEHSGW7ycAX1MuYQpNJ9Cp",
  "key31": "jb4GMtgzSdMnzg5a8Z9zXtBrx6vjv9C3Nt7k4Nwa6X4Kbq5u8kLkZboY9wFkdstHvACKpoCVvvgBFH8uJxuvXXc",
  "key32": "4B5hYJqxh4msYpSrddBVx9jPbGJs95ExLTkqHbhA7iwFVBfEFMDe5DmHjtu37FDukechJEaHg3KmGfrpU6CvxdhY",
  "key33": "3KJjQd7VBmBW5w6Np19HAJWEsj7Akw2PSBhodURbzA6az74wgZHKmhVA2oqMjFK9nVNEZhzVM6vvKy7hZ3o1QdcW",
  "key34": "3WQaKdNkvsNxsPzDhrGGTPESn8o3bomrYjQ8bL9H54xj41DLtbCmDSNrLSGjfsTFSRFmoKqyt1gkTDTrYkzq2Kvv",
  "key35": "3UWy4XvXEyKSLhWBegktagWVcjTwoDStcrmEWAQzowVm2wYMbdc62p7c6xL5gy6bWojWX4iXiXs81WdUQXK5JLKL"
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
