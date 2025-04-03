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
    "4LHhH8GFef8uQp4ECz2VL6TuRETLhQt47TTTopfVoSxUFCVXC1kK44rdMkHwP7wPsPYmh5P9yLnpjxocr5gatoJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vXxNk6XPqS3XcyvzxS2wPZXs3jqznjtmNMuJcWbhn3Zxw4Amu7nv8bnyyiKSztjRVcP4JYbcwnoxXWXP7iU6rqb",
  "key1": "4VkcXyuKWzgcDbJSmCgmfXM5kFZS6sTt3XvtvEKoyXxFz7TVrnG1XPNomMaPmRzP4ZaMSxNWjndB89QqzXnPCt86",
  "key2": "5CP2VmfskJCh72mozbjqsGFuHH9Fr8oqcRedSVbxbKM5nJ67hLM2ZzdTdCXww4iQCjLiG8V4Bue54dDqVycKGFgx",
  "key3": "65yX9HtxreK4iMVKgGtczmziJ9mWmsNrsrQEdMdxWKZULEs1PbUiy2916C346zNRfPZXJNQa9RdFopoMKwF8a26h",
  "key4": "5GihDFV1aaAirzgEmN49ndW8UuJGpwS9FgQvz63Vr1afF1DkmUp77oWwwAyj6EykA4EihV9XiNdNBk8QdcxMT2c7",
  "key5": "5q51ypu1f3otrtRJzXGrusQywCbjBxisXt6cNaefpZCR2mcxYK7c8XjYd2w5RZMsc4GJCoJtHCjQdysgiCZsWXeU",
  "key6": "35j8Kv3UB5dGUM4MzbYPN9TYB9wYmkvM4oxfmKxfJE3JPL4aY62PXTJ2SMe2HC45p5jsFa25d3bu749WCJZNqjsL",
  "key7": "2KhHWChf1YTqRGJqVdv9rSj4Be67WWRj8aG6ijD6EeSk8gMFPSdKAPxXjkTkx6jjA8vJiGTh3ciGKwfHRUNhp43e",
  "key8": "5E7ttj71xTxp7MfSRr42WV6xxyCUumvzEg2sA4TnB6kdK8E5DyivhrNkMWwFyiiUPdiuycVDBZ7nd2pmwg5BMo8e",
  "key9": "2naKcGMn9jjzeLa2VnL9TBtECSjTDU81Q65BvGvCrDwMXkkAm6q3wFVTgzfANz3ZeWvwg1kMJihz6Wf8ztRXTjF4",
  "key10": "3aztvjSG99uxRxcLkpCFkmQHpXNnQPdYGWwtFPGgSfyzHig9TxRHzAaQkDN9SK14fTG76HfpBL5b7RVVF5eXtmxq",
  "key11": "4XgJmVwucQcAhcd4DYR5EJbkQPy8eocWPt7ku3eejwEwW5xYkp1fDPnpqsrKmyZW7NEhxEreT1UWGvjcAQbRub46",
  "key12": "4hh1CJt3fNXt1C41nN1k6Av8opYAvywfUXckwuuULvBopBAK763b3o5DKLdKQLW4aKXZLJWqCvSazRufRTntrrzx",
  "key13": "aMUZ8enXiQECfeP8R2MpseRy6RfHXkJ2UhM7mEuTaPjLZTgfEQZyEPq5EvrXXpCXAi1yj4FsbLFZnMDqTHt8Zhy",
  "key14": "2xmdGY82waedtD9WrijWWTphFSofUiNFW48HGMK1Ja81b6djQgVpMpSqzSH149QDGdFeZajAzoy48B54yF3Z1B47",
  "key15": "FtWfF34ahmt1dfW8veBuL2NhZrzAnj4ojRPeq12sArTzZpStfotM8Hn6TCtoR341d5EVgTA1z5TPWTQgXKsL9QP",
  "key16": "3KzaYiQpkaDmfoR3T7JxZjhsCPhjpuJruzFsph1RN9KEDw8oPgxtZW5mb9go3oSZq5zcxmdJmWHAMDiRNsakp93B",
  "key17": "mtm14mwZdHfntM8sWhEJja3JACBYeXFTxgKUPkFH64gwLNzQottJL1mJWDe1Zb6oHahcw1wuPxkqbGDhW5BG6wy",
  "key18": "4QkztCa1M8TLfwFJJHix2oHErkt87qUdmXB51RKieeo8kAqioTE6qCCc7Dg1rzxvYNFz3ajYB7ZY7c2gscRXJSix",
  "key19": "2YUdoLdQGUsJsww34BEX4YHGiurWsmypUAwPYo6SZ46UhpECcCn39XZFWUuwhtMPUY2dYdBRFECjEcjp254qW8eu",
  "key20": "aYU31zD9Q3BeWd8BhiN2PcQMLFLKJihdY778TyFP55NkmvgtiCV2yoiTY1egjq66KXUv9qX6tdTWJEgq8woHj5v",
  "key21": "4NzBTf7UftJkRvpHT54bsMBBWxPo1TLSvzkSBRteuqrZyWipvZBb6iY6mxYbsXsSYaetQLxAdz3tpCmC5iRsqHRW",
  "key22": "2ndBAcGt9oNYWRxzM61KXXFmgh5v7KoAEqfStCiD8yWEsHv3bEbnDYzD6RBYB4VYG7QiMLYnrZJxQ5mLzUD3MyWQ",
  "key23": "5FQh27Ex9JYvqUraCE3ju16hGF25sEDUXYhedhNsRCazqzY4JJir63BGREc2sr2Y6Pj83QmQHgYcEtytUmM4oDHH",
  "key24": "4Y5ui1nxUkH8U5KpZWAUm886hzgHTLZmU8Dk9QG1v5EWujJvMWvX5hqzk2bcXDG2kUHCB3fBvJyWHqhuLX2KGDag",
  "key25": "5amEWM7XbWsJucPMAF1D4XZ4t4QBMtqhRuoyFoovMhwq3mhADc9DVJyVpX3YAmpMaRNuuHaN7EkE1reynBN5DKSu",
  "key26": "3WVSAysovzj1sNmdEkovabZmPLX7p7pDaqQS3SgGu9Bcsm77mHdmL9dYtComshkYkzqhduwNchg3HdcRrrgjvVNV",
  "key27": "Bi5xxWYuF1o9Ba9sDa3ng9yfzBxAHxHMSYbVaUcRuJHy9GfEqFMtjcGUBgTFy7iv8uzWTLuB65A63sUaU6FRZBB",
  "key28": "LehtMpeqwTypj8idei2LyMYC57JmSPJoLTiLZhC3AabzqbFhVkKkwP7CqZ4u1FvXD44i7sLxEUYbEUMGEbim9i7",
  "key29": "rfA5JszuknizpzeUrNuAMFspTCMLAoTUVj2CD21wszUmnfRW5cUpaPdW2JjEdXQZRUEZg3jen5SmvdqzrAnG7wu",
  "key30": "3ENpH7s15hgEAU6XTPTZT79PABhFRXnH3mGVFGkxAhPKUvXB76K2zReuGZYFq2xKfhexSHBBH9ZAikrEd4tSTFj2",
  "key31": "5REghuenQ4egU21KD4P6e4yzS9EYaxXrvdmptA9X6SjtSuiS2ZLCaqBoMgnTs7aZF9M63dUyZWa8EZNYNLozBxW5",
  "key32": "3xDn1FSGuxdBqDquhTLdSzHi8CY4fHU43iheoMZtBjtV5pfbJorsDAYWjkMowEEuVvq5zAdPCXRFMRD33UH4D6bA",
  "key33": "4ShDW4p4HDz55E62fPTWvkzQd2fhjVDaK1ZbTApAEo1GEYHcLWE1uNDzqHuy9JyoMoQKdHANZ66JffVGLbaBYqWk",
  "key34": "2sysuqcAzHWZaHCcZtfatzTLP5UQFM7UPoX9n7aduYAiHcfYsb7VjC8ZHY6PQyYn526r3mAMwsfsJfQJbKBCFdDv",
  "key35": "5UQHrenWL5cvgmzEbRK8rAgyiazfA6LZCmdPFgfqL4jqK8WC1ofNTaFAdTUU3PaZKDQrvq6jCStU3ZUXFrWWeYRt",
  "key36": "47TfnEeAQHENKKg1R6hMnV3aQ9DBGESEzVPUW9eQ87NaiNbD8XL4kMPUr9gBPLFz39NfrNAAatGSQvLXkVaiTL3y",
  "key37": "3CN6SkmQYDJLMU28rqfTSchWEKWh3M2MH7CaHHDsiJX2gMGhAM1oC1JmumNCfwePjuEjPPsDE5u2iohmkVvCWbXS",
  "key38": "Pw1zzTXv2cV4aEsdY86nW49Zxr8HyH6PxwDcw12F9EvzBCn4JnTDUfZtC2GUkmHWencDm74L3zzazZnXXyiiviA",
  "key39": "5j5g9U4sYdk2LccJcyGYvVRkJJNJp1J6cJUSnBrDUT6KTwVbqyb3YVr25guHkk3Q1XdFvNYgkytNbCZePBhx3WMU",
  "key40": "5dQ332NhQ7xNnrYUiCJtUsMqUTxM9XnY6NCDRZ8M6RjvzUuq2gW2dojA7YWgLTQmB52bcSKChwFPYz3qQYqykHUg",
  "key41": "3KxMjNoNsV4MP87zV9tVELkDivrtWihDa4HQhRt7DGi8dz3M9CDrwSecXCJhm4v5otrZEG9FqvM2ujR32dwQ12ho",
  "key42": "5hLPyo5CWmPD4F1ZZwv9xY6tvFaY96UZtwEdDNFJkidxjSfomXKRe3JaSt8LV6nzvDgRpWyp4oGuWsxGv8icfCsu",
  "key43": "3HEb9eAkSYZybH9kDSufR4NbEAkJYiAZAxTADu5aWTTiZwGfjaGBBYeBgkDGvz974t4kMkUnmwuXGVP1a1TGvdq2",
  "key44": "4TJSUJ1mcp1nGsb9JHWLE5o1GRZJmWY6xQQP59aAVyAkibnYMAUi26qPmRPdBKrEix41X54nmTNofkVZUgPsDboN",
  "key45": "5MAYNqt862mt3kbyc3VmE2UrKBLotWMJr5Uab2fjavLJoLmTWeVxmvvgn5aaVMxSz3gzuCdNuAvDYf9AE9Q6DG9h",
  "key46": "5JHKQmXJYMCB44Crx1b8LVdxzuc5NnLofPgKSGgrCEcFTsxUsAGQL2Uw1t15Wu7bz9TvZHAtcw4nS1f2PC17HYhU"
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
