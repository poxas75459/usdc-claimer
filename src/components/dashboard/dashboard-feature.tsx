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
    "2o9SCn1XBYHqiuBc351cesC7gMxESJL9PyicAV8Jb9bCvqVoxcct1Gz15eAgDvhfxiWQXf8adLJ6R5it5D9SdbAf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wX7XVW8rh68F4uuYTneKz2bVS9kex6jaAwgTgxmnHCZ6HfAf7SjZJvtyLg248DHEoPEgzAZ5CWzwmGVDnjddo7V",
  "key1": "49ZSoYTNQimcFeA4YadGzAftdafQhPHpUp43gYDstsxdTbj1saJ8TqUBBhMAPR5ozEiVpSKaGm9S69fpoPPuHjWk",
  "key2": "3k3DQiHtZcaUNCEjysww5n8Lqyj2YxDCSJkoLDtWFFnMBzDm7ZcjmH4wxuC114WVY4smwVYQZkxXns4drTU9Bb5h",
  "key3": "2f5gAJrpV2CG4ARtr8Qh2R1QX9TUzXnd4moL7oFuJUWo1KaMnUgLK68zhqEnw86ZiHfHLvBZkVghrayZCvD9VK9F",
  "key4": "4t81raqH7qXYotHopCrYao4ebsdK8J6T36dVejsB1BHooSY6hn17aTYxUHNXkMdbb2W3pCKegnaB1yoUa1N7xScL",
  "key5": "39EVfdaTQxs5vfJVYUmFPsxGatWtfeeiZ3tTvKCiLihqs6GTrp8oUNWN5BbhdvZjU4r7m2YKvXKUhj6dndzaTYb2",
  "key6": "4X8Pjig6DVWa5AZS3uuHohbq8N3sfJJAsmKAfcTNKKbJZd1AB4fuu3McwJ6d1cMaLg3wVFv84vGeRoSDyErioWg5",
  "key7": "3mgrAxFwTLP26ZMh8YXiRGxLkXuy3AhUX54Sfgz66fhLiQRhhM49n5YhZbjCzrvBuBSLT1RiSjpHaZhtu8uVteXD",
  "key8": "5v348wBf2X84NMMDGoCLMy95nTLrmmZaGTYPoC8aZNJmvXAHqPpJVFuCDoCv6AVbLW84ND3q33HEXYZo8F5MLKQp",
  "key9": "4ybbyFWZ8sDgiJeiu82oQdnEN4s7MmgK8BLjjDgm9WKyzNMEMZiKcZdfyCcxpCKYiCtcgsKftw9VeSwbAmNCgWt",
  "key10": "47KBvJCrbNppfeHKfFkxLbvFa6rDmnw8nDUqCKLRAPr9HYD5tXbHs2ERLgYLfSyn1LMt1gkd8rZUxBS32HJJr82v",
  "key11": "2EWRNrBxDtUg1AFjZPdGEnWDEDLD3AEGdwBK62rzAyvWrVmUfMCS39m1ZtZC6VSSKWi2bHT5ouQ7RHU1C3iTYYBb",
  "key12": "2aVWCx9GQP18E3SmH5CgA1PSBFFCQUD6yuTjLoRucPRWea7mbJw8Vn9AgyUqdrxUm4JEPtgLCnzTkaCkEwio9UTT",
  "key13": "obzWQyoGhRdF2WfE2o1NWM1nJNGhqBxwoUFqcQREcxRq7Qo2qDV2HtrrBjjYZwCdW15eiFZAcr4MSPMeXFY9HsN",
  "key14": "XZXcEGCNFneR1xMPiDpE91UG7kmiyuu7kCPwErBs2mEpZTdzKwWBfyBmTBdZTqzSf28oxBZ9Htae5g1qHd1jCDq",
  "key15": "28R5n2gFGNY4p9EupaVdsDnScaHJN1a9gDmx3cg2ZK3xjfgntKiGQKzgBtFmV52f1gXi1sEH6aHSjj65inm22nB9",
  "key16": "5jzgVGoNrA26naKwfiSjRX8HgFEVfcMPvm2Vo1GhHFaG6WuHvovK7RnCorZhwrV1n8tuU1u8eZByyHrBQ73SMPGQ",
  "key17": "2VcL3mmGXjjcqt65NTgK3iGd8xAm2qkWYDt3RafYS3tgbDnSS7s2vZ9RpTrdddsCotUnqxchvvktJz1HvL5ezZSP",
  "key18": "4UmmCgXR1zoFrw8y8JPMiQbK49iPNLaidRChtiZFJA6C6Y3DzTNYwhaLDfGHc32Gp9x4gsn3hTKATGeb4wJfgpZB",
  "key19": "64GoJDYGMKpEctWzaVHjrzjQve2MTW8ddTzKcS7gnv1vTHj4SJPSZCW1wFi9WtpxgS7zbu8py2dxhAu3z3AV7nk6",
  "key20": "3wzPZdb34veYsvk8qXqgowNkLJtRJKCrLEeYJGZdppUyCEkwMtbKHtpZRXBLmkRKsADdHwrgcoiRUT9a9YVkXuU7",
  "key21": "243tVk3jcqs9mxY6V8LngjZgCkHrSLkW9Zv3pevohytuVnHSSyF5s4hUoypW4EjKCvtRQ88A3Z3ZsFKf198pmxji",
  "key22": "5Bty1M8GunYwMmg3fWVK6ViNCJ4ZF3Ykre2133FhgyG4Sbdc73qi8HBpg8u2uDQSYSSkSYVN8u1nKUkSxERK1qLN",
  "key23": "4iCEDzzebbkJLGNhL12io18bkfeYAJuhr9wgFWYBu7L6yCWDvq4pYiw33VwSgFnqhNQ13MG6Jm8TPSrRAPzvYpuG",
  "key24": "mYSHrWmdGPWySnUigEgk5WowopfeCJaa9R1BumzQAgDg3xQ8NdHkmGx4zvuhdJCKsD7PSPexyEBCwNRw24hM9ss",
  "key25": "65F9twHJQA7k2Za3zUgVqC5UDG9U6fPJU1AovbpdbxGCFuySsG9DywUZKzJDETt2ShBMZE3BMnYgxRJfXddthArm",
  "key26": "6pqBid4nGv437pmxngz135kZPQfriZcKjkyLqKKDC5pxvuLKP5kq1zKCxSs8q7iubvGdgUQ4s592FLQogLpWuXy",
  "key27": "2YjJodoRFSVU9uyuHUtCgzwrshsT6AM4HffsSzBsTdPVterr9UKPyP4cXgfZCPz61iuwAf8LRBrMoEVkoeQye4Tw",
  "key28": "25qAz7K3QbgQ1wgLctoLS5KN6t8ctVQwoogimaVo2D4jU8mGpiHWCg5W4AaB9V6AhcskY4qG4NPjqKbBk2ya5B28",
  "key29": "62b1cXYLpX9XfVDUgiMpFgwyGEoEKLPtey2aujB9acRPYkabr7qjnbnBhwtjBTZpy3Dqscikd27VfGmEXY9XdMvF",
  "key30": "5bzhqMmEDF4mmV4LTG1Y7pTq9yee6LYQaokUqewhwQyEN2at1PfMKWtgaZPf6VeutZvoae3EcaxSn1WSwGS1Xwrt",
  "key31": "2LRvGKXz433eDiLbPGKig5XygVMb6kvBJQQpQYUxorL9YvpdW7YXtRzu8s1GN2comdHxxupfnY5YezccHrGARHtF",
  "key32": "3J1UGTANZfi17pspxhbH8HoAiiUGnd9SMLA54cxWesqU4zCJ726ghyC1JPZiJDYzSPX8xD47sZZ1bsY9pk7ki38D",
  "key33": "3igcxRZbSHNFQY1sWzhuqZTNMLK9qdyYwS2npJDzr3cX3ZXCSmXkgWYtGe9JwVgvPQujNkHh6PqgEKEMUNiF7Wy5",
  "key34": "4T2jphREsFNGrFeBfA3gvjEpDXbQkLZ7KgiXURXH8w4LixviUfdSBM6r4954V2xZiwmEoqav4iJrE61MFDRsms8G",
  "key35": "3E1kTbWr8kJcXsdCP3jnhjisRBRV4SUcEJnHAeKGqdHWbEk3aEnsG1p6n7DqAmCMKyGgXiGriht8K6A9oXMPvpaV",
  "key36": "3TUXCTLmtB3co7V39v118j3AejyNbAmui2jcpUK5PWJD45RAZ1AkgUwvDFKeW2grBEN3mTjf6hW5nQv9LAYc2rgs",
  "key37": "673DGCcfbT69hVuGZstsAgtaxGkMPKnBrToHKRwaNVA2or7D4Rr6jgdKo9Z7JCKJM64px8Bc85qSqv8go834BDUb",
  "key38": "5baQXyTFvwhXCR9kpFyaaGPSCt5go44o2rvEcSJKNjH8Bvvy3rDKkvJSpGz6PrUm8uhNLxnBDBYFYHZkp2hgdKzP",
  "key39": "2mcjDDzjsHLsqfLRbi5nEDWjMrcy1GcG5Nn9CMdrmYm6cw6eBerA41LvoVknRvid9GKz1qK4TMtzZp6PMX2PneWg",
  "key40": "4mfsvGCAjRZn6VvezysxZvsXyd4tw6bfe5bPovLedRvrk4mMpQCvWnZkpkUCTtqMpoJ8oTqP6nBKCnRJfNH8XbJ9",
  "key41": "4jY2EZ6nmD8ubuhd7oG1JZM46JwznTwxCV9k43q2nXy7YCcY61L8TKpdYYqg8K8oMqRxiLBui2cCRQGNkkdbY2wb",
  "key42": "9JreAf2KvjJFG3jF3YfrATGSUpNVqipWHhixiKRmevVDu3SSM1ayLzhBq9nms3w7TmJjpFZ84KNYxjZpfqZL5Da"
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
