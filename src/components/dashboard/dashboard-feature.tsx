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
    "cdLQCY53qUtR7e16DisyeWRz4kkasB8GbAHJEE6GorjnSkyVJgBBN76CFPqtsjPmXqHp86KwjwzcLg5pNskKRTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vMe9PiFNFDJQQGfRiJU3MEVn84SGE7QpEMhWbcSBZqA79iMEJCgWpp2HfeRa5xZQs1ZVrjCKNp7YYjGB5ka6rGs",
  "key1": "51tc1ixp2yJzMNAJLYuYbTh5S3tEpN7e9GrWWdebXHskvkkJkNkeb8VP4VFaoX1FF4FjDXM9mv68cqkETTKAYUae",
  "key2": "4T5nHB4dtJ4EfNEPYhiLsMkgMeMeEymGuiwgVFgKdpKpBnZCVr4Ktupk9uhvJdWMhowco7cT7BHHgVGee9Huz8kX",
  "key3": "zXDAGGwJpuEuyJwf2ZESaXzPt6aotN3bxDehDU63spDZ9D2M7TFUhtdqmWXtRDPARMsd6hgR62NeB5ekhhpDzNp",
  "key4": "5KvQXAU4Zdpkt2qMxMjmy9vHza78gK24GMVp8yLuDgrFw8J6MvsnciF8eKmJnZiPqXJjP6C8QnXqVGEzRYhNmnxG",
  "key5": "4kcmTJkRL6n2qfTbtVqqdRWEYdp8zZwYhBiY7EjMvL93CDjzLK36Wh6V9KidMyacpcLzV6Hjthrdkr87RhpnktAG",
  "key6": "r3kFwsBspbAvhmDSARaqG4qLno2yVH6711mBepNzHRAP3cVgyVxFSPdgj7Zy4jCuXDK8ikS3EwYjojAqBbwJoUn",
  "key7": "d4ZSrwF3VBrDDESyBMqzVGkSfbChws19WvDs14pYXygBVcEnNVDiL6f9RXjqtfF4XdngA9CQwnbQLKakxurbA6w",
  "key8": "4aKjyYmNqRQ3EBXcVzRnv53zgRoir79ceL4y3evpgDncJgLF4QFgZHUhraoE5syKvWJwoBJFkjDFvYJNkWkSm1H2",
  "key9": "59z7V2cHiHV5YFpkKoRwndDM1wsYN8xyb7QmzfDSJ7hj7k2Kn3K3BDwXPbVP2i1EbMWXEpKc6Q1xQTbMgq9tkqNh",
  "key10": "2x4wisudRxqE5baG8QJ3KGidnzc7oJDtRYBBSoFeDDQWL2GE8Cn4QsJdC5M2fsSxzfR8g8R1mLY4p59SxsVgECR3",
  "key11": "5L3FrnxARpkh8EPmx5x37Y4GcnH91g3dDHaK4NVbJ5BsnFTS93WBs9wM8e1C49vK71G9J3Rp5r21WwYvRudMVBeP",
  "key12": "YjjB1jQYvu3GP2STKtqDYvdmbk1Ft5Nsgj9TQ3t3Nve1WkqQveohLC3NQY6UAhDQE3psXqyYKtBBRpTMqW6Sdxg",
  "key13": "57sGra472MaC8GwXEWwgCUQ6RdsREcEm1WfZHfZyGSfnhYw2SDSCibXMZGyE54EXhVktDAkaRwJqNhryci14QHW9",
  "key14": "5YN15V8ZpXFscZyouW5YZ2uKBEviJF1h7GjFoCdada361xMAo6GpVvdAHQE1m4rzpJGELj4nib1HnTtG4L8Fm2ee",
  "key15": "8udYo7KznuQ3wUw9mE6wxKZVTFCuBm3aKwnwC4oVAhTk5H5CKkJmjncvxfqup7exm4FYkrA5MVFBgrfGNcZSfYt",
  "key16": "2zSVqoLBjBxDEALyS7nuNpdSF1oYDSaZJ3PGsZtTaVwGAFnsCMJhskdMNzJVeahZuxDmjhnGcmuWshprs1hmotc6",
  "key17": "4DshNnqrJUZzdHPKGXg1CuSsEuggZqe7Kmqcahz7x2omrX2d8MM5GZYxf3CgiHXNq6pjSRYr2Kb5bPW23EA5ure",
  "key18": "5MRrDz6u7eAaK342fX6yV2xkqWUod6kdhtBERwTrpTcGyHH6aZnJEnbnRr84qN81j1i4EcZ4dq3Dhj12bkG5zvU7",
  "key19": "2LB8HjoYPHru56dBNmWtKHYxNiZSB1V7ku6FrThQc1qyMLEtoVBFrujHh297ybxxXqGcHLucQ6btSV7JgfdD29qB",
  "key20": "2P9a1cwL6TtN4vnDM9ibLJmw2MrQJb13itUhLpYDYLGGe51vovuvBQy9uKyWxnL37qGgXRRwRwyV7wW15HQjD25R",
  "key21": "2cY5RkMGwHsEqLepRYDEFVpLjPftDeUN15Fee69bRMvEq56FRxDtagYnmH8zQxTtooc7evu9nYYCfedRbyP9RaD2",
  "key22": "5UW99cyyFDpvLZXMbRckW3TVsNS2L14JkZis4TGeCYD5MRNa32aTkE7ryLbirFL62d8C2XZaoXSnVtnf39Q1Bt1T",
  "key23": "59iHmL63hfmtuFNLP3THG6uen2f6EvySCUHhhuXEMwtwM5aXZZjpNzwTb3LwKm5QVT1njNu4r7WqXnHPGREHyDjT",
  "key24": "5DU1DzW3fqLMUSbVx7tMDwPajR7uDDU7XZk8oRGm8sZ9Nt43hWqEXY3LHafUP8rahDsR12SHnxEzcSAWUYgd2UZE",
  "key25": "3Fyiqx71GngtEWNkwVTej7aaBUt2h87zZGzuhfTqfsYsNnBFLgB5Rbp9ymGsxfkT3WCYjaUYFz3FLCvytRsN2L9e",
  "key26": "4NXKrZt4VJMoLyGuqGD4kC6De81dRqmRsh5rn8GBp4xnGUwGGMAyFEft4ZmqKWP7yK6nqn33zbpCeL2oRBPfYKNd",
  "key27": "5Wze9nhyuPHPZJ1Da9TS5f5So8rrx9fSeqUyGmkWSEG7sXC5Yykk2Wh4y3xtUrdxkYnccSzrQUBf1JkdkhrqG6uf",
  "key28": "hA1seHUmfWouHgPyUBSqsyJCUv3GgdsXxaabtActpxEYmbRd119oejCAS5X8au89538ER9EfRUcs4Hk6yQYkzjR",
  "key29": "5k2ZVNtwMYrDe4FL8jskFbCeqpQJLZVhkuNzuG6wEwJjPZpddv4UEz8rgL9U3PNe9rLXs2pDUU5UyEFLTCrPagbg",
  "key30": "ngu3nQ3Q1wR8upepWcc1AMaKJnMHqXb2aLdJmRWW9Yz3fJJem3YLz1AQf4fM1vTzZaPS7vquL7TqipH1iLcJFMX",
  "key31": "ZQ7iAZf9hR5rCe9az3zgM4Dretdmd9rHwPi6qaLVnUteoq7FpT84sCeEN6P2ecLB7yvDaodu7dzt7B6aJKDjLLi",
  "key32": "5jndtjTtLDhEBtu3aaysrxZxJr3zbDHTpARKUHxoZUwCLmVFC94QzSSRxnx6mCrZoN3AEM5yf7qYrrL7CZvJr9o2",
  "key33": "3Difyd9zzh6zccxHCUxkMMXBjn9hfVFyLguFDArijXCsgFpFPMtxrSbnLcEM3vXcuLUyFC1bwZ3Kf8mgwiAwA3zs",
  "key34": "5j8bKWtQ21WmfJjH2VU8Q5o8m6JTeAttM3ZsmLsSarkkGZzhqxYcAE55rYe1yBXQxWmTHpoHZh9ZitMMS8ey6mfk",
  "key35": "9gz1jdwHxHZByMhpMGxu4R6LZeM5y8bvbnhyFTEfCw3FJZWZXAds9YJtyCi7Dv8NN3BMqG5n9wBMTzEHNd6QT75",
  "key36": "5SZkWnsHdSQ8E719yCRzgy5kFiJ5FU8yPbBqkgoLiyPw1PmKEfTRrr4ZkM7GKWyyWPVPHMfeLpfnwJ1aL4gWmJAq",
  "key37": "4Y5G5rbUotRnaYZEJkrSdArunyGKfmVnG9MJYMVQLjV9WaTRs3FeAfHhdrrfgKsGiM577tLigDZsTEHFpjunWeMe",
  "key38": "4Xx6mjTgtwAFN2uiRGHTU6wr1SYPZw6jRrBg2mWtpZYa1jUcrPsEgwqguDdP6HbMWwkmR3pcxUAvSTSQJZHygksi",
  "key39": "2bkzFND22aCEo8iDaHc6oKyM8aPYzakveAicjJrLr3P7EDFyTwHj9XzLZZ45WYQ88psX9Hd4bdJ2oN8BrG4cjXJP",
  "key40": "PgrAtcznBPLyHqfJm7H8tVG2fBmd1JATcXKYp4UKkyznFxVk99AGoPfLKFUNPPVENJCTw6nhAp355YRNhU1De7J",
  "key41": "4JTowR3E2wLLLbsWUQaQFmk3m4BFZdyWoK43KSN5fj4in63KQHvJE59iA7hH4v23HCdPVssGt82MwQoNn3d5v7Lg",
  "key42": "2CHz5SgtVcte7unTW2AvChpiGyFFsmsaKRt2zY5mquvkERecMBZ737P975bENjdLmeXZEUUhSSGVKBMxSPaFy6n7",
  "key43": "vivpEZTsC53MbmFPMVvnuprJR2XJUVqdBGFxzRcFsuYL2ZvPmL13eV3WN4YC3QM2iPrU5Np3fCFiKi2aGYNXUhz",
  "key44": "5i17Eqdp7MmSCvMy9hAkYrbsxXfw2cEsHbKnzgLVdfRERFhbouC3bDixnvhKMBiFrNwJLULXn1GRA7BhdpYHhmJ7",
  "key45": "5mjexxMtGBwojfh4nfeMgUbvnhLGCtfUhirqAppygA6PmPvMDuPvgYAbd4eaTRjmbufg22YH4AFABftFK2wrpaVp",
  "key46": "5NgP7Rs5ftwnWNauTPueNd9Br9TaPMbp9Wjcs1iBq46u55pkxf5wndULhj5tqo45be2NEJQrNiC11Pwxanp6UTkR",
  "key47": "116zsqycBqZ3csyWBxs7h52Nq2pEMq7C385JjcwEKNRJ45QtTeXNbGWcstUevUS9T5VR2ceJeBfejkTrWb2Tqpi",
  "key48": "4k5usaGMne2pNLt5iQMSFjmkkhgMeWVKPyWhBo3psDQSmEeKo9JjcMg8BEiNNL2gYDM7jMCckxxhjzPGUuCLw6MV"
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
