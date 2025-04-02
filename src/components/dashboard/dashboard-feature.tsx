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
    "3fWQtXUk2SfTBzhvFDBHSLwTFWGReoNtupQAAZJtjRxr2foLgLrZ3jj6vTrpxQz9snQhKJv6XxNxhtC2FVX2yKtz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CX8baKbtPs5JQ7MCKTNNj6dmcrPUbbSSmw4L8mR6AbjrGW2Cv81k9VyG2ZtLne2iubDsA1vhMCYT3TXyDiqCYk3",
  "key1": "4YViTAhb7pSK8xPQK7xsXQmyTXh2k6aXXpr7u9ydASPPzSdrYAb8pDCQYKCqmNk2QGHs9wqMvn3AmcJhnqkD39Vh",
  "key2": "3XruXZv83WT2GmapCddyf3itdCzKqf5oCbggSjnTL3zuQQ4Afwvs7geJ44C7SakwmfCKES9DVVC4mR7jZCEL6qQT",
  "key3": "2xPSqcn3ynmATzLQJSgPfniRh6f78gK94JYjzWijoprAGt7TnJ53jDeDpzGmzyhzRDAtS84ZCqqAqfpZ9qWFKBvY",
  "key4": "5z1JYf8p5MZjnJS3wXV6rRPnby1nkQosmDvjgd7AHDinuNrbE8hN4shsPfGEnqSLBLC5j8u9rTdzixEDZaHkpQh1",
  "key5": "2sPomanidEtGcdRoG6Gne6jb1vySYrrk3YAgUu8veTozW6Y37PXYNr4JNykiCPvbNYcwCeBbn2HogGJciX1ouYw",
  "key6": "5YGF4ZgLy4y1mnXAkXcQHoHo5vCCKfSn5GK1ikdQqMJEtHuv7TbugwFqyM8vdGJWVmj7Jt6gJuBzbMECiZmveXvE",
  "key7": "2H6RETNPmjHdpWhZFB3nzbJjEryRyC6DgcXgQjfNoUkfbpzxzRCVBwxJ9QYq3tVmnQ5RAPDCXVV5Y5N7Dq7Vfv1P",
  "key8": "3igDBf6tj4nHsvG46D3Ff7NXWhPk7BqwWt4aRZP1bcFvSqYMuVC7ZvWQfZpb8zgdLrgCSEFmG5qnFZGPUo4s7Lf5",
  "key9": "26GxS89cfyDqNmsYT9zcR2rbheTYxc5YitoZ4epuZb52AVhanaxiet9xR2r15mFdPonizJVW32ymDHspxZLT5yiz",
  "key10": "3Do1GCG5rwwvHi6Gmc7PxGjSxaBoWiBere3kUnK2vQM4hVoQdSCj2op9wnYvn55nwWV5J2yPHUgqRUYwgmFesAcb",
  "key11": "5sLmKTtJWGuPtt3UM8SSuBM3THYWEKFUXfQc7h8oxvdgJ4YfHEeUrU48YPty2ctTGzdHeRAMQrb5DmGVg87nDTBB",
  "key12": "35daqkpbhDPS8MK4mfAQSYkRrdtf38ZsAxjF3wqHRejpvf9iWnLziMGvKbGdinHsxntxr6AGrpxNL5XzDtdsNTUU",
  "key13": "4j8aNBtLppiGhYYUD3NYV2F22C56fAp8jJmybbYzSTGdeXrcZ2ZdgVSx3yCBipZUgEMkvyKWeLzEyvwkHxeTGKoC",
  "key14": "V7goswBbSSKdoKZefqwyPZAiTTqF51MXv5qkjLLXFffCBMzJw7cd6WPgjwfTWFJ33Exf2PZd3ML5y5goTbc4hUg",
  "key15": "4CeGtQSF6J9pakKQn98v4qS8NbU2jC8SW9XG8vWKwzC6e6FeX6A81kEYrXZjbSprkw3RHJDKo5CXPziA1cY1dSeB",
  "key16": "5qVpdU3TZX7Q6AQ55Gzv7bUEWgs86Z4g6SjUV4wfcmbR3fLhWokkJBEn7aEbihtqNTUNow8p9r7jqwvLmHcSWwjm",
  "key17": "4txqxmvVVkB9RurxmT8dCMchyEBravFXAVN8YyMCfHyo72Rcmafy71qPzPEj3c2zSQFYu49YTFpEkxWDRMz3R4na",
  "key18": "3ATMFJ5cqmd48CULybUbeyvQV7AEQNRpyW6WeztPr1KYEfHgZNVvEbUrUxM9DFHuAUgHvmUoEMRX8NY6NKUKSw6L",
  "key19": "4ptxYLDpzzQFGAYe1aZsz1nmRWJsG1QuL8uNxfMt9aC2eBrorF5p2r5L4gBWp6u23noRcjrNrk76G2qLZmLdFVF7",
  "key20": "5dkHWP8hTeZvHHcABcsPKU5UJS3mt37TrYmLM1jQkzc7xZCpkR1kTzTY6Ke9HywM6v16xJsS26LS9gmqNwU1or2z",
  "key21": "5PqRJsxS3HA5Fz9FzSAnVweLWKkyUWH7EmWfFBpZ92HAw7pwq1PA8nZSKDfGamopKntmhaScdqmo9LRtDibbN4X4",
  "key22": "4HirKncFvukdW3t7GwZHABBsM2LCdbAhta2TntkMYkZBzZBhvZYSUc2KtjWeGEyA3A8cMVy7NYFMhsRDY5MJxnbV",
  "key23": "3CruNLMkEWmVocCayzChkPoMH1hsiNuefyTESVdgQC84xPyh16ZrkU8ACqucAjdBb4kivCdALbExK4p2hS61rQD7",
  "key24": "5vVN33d7n5jUEGUE1Cruof8jNKmr7zKPzjdGJTk3bQqKYLFXoimFAX1N95AtoEKMxobL1eiBd3PVzQpKGfpm2Qc8",
  "key25": "4fMToCj5uzvvSe74kaph5UdjLv4MqWvacMTgsgodmBaXwsMHzutaoMNJYcpZUkcde91TMM7Ri8wHxDLWtvEghiA3",
  "key26": "wzF7dznomo6mrLLq4iW1TgMXGYDixWXqE7KPg7JgAHh2bSjNh2NHZGusLAAr1uNNuFe75dYtf8ntjondFYcJuGu",
  "key27": "1NQXNJ1oiXu4pVQadELzHfY2FpbNdygkoWFQm8AMfBFssufqgXAsxGAA5ybdAcDQ76kA7aYCkBstCRZcm6qL7Pr",
  "key28": "2H4uYnVeYM3kBkmLj9pf74tzXMPNYg3A1QJEQcLjsgAz6wTs6MgeaYM4XPnJujsqsGZYNFpHwwo3QkuA1LN4Ccdw",
  "key29": "58yFqegwAzFkxuQsKHJ7iZPrRQnRkeNt39Xh5fLBCURadgUkjfqxoNGZEthWUXjse7VdKTbEvz8qTryy9C45AZiT",
  "key30": "4rAUSoc32KfiLynLWzVfcmcyZtpywxnBTevjGbTVM6BGry5WRMCu4oWdbAsiXgaMQJxiSqqyQZMPKS6EZErx9kE2",
  "key31": "xkH5hroZEs9z3GN9rp19XrW6puucZA13pWWKzN6CXELWqM3uhW9hnFXVPZiiZpWqDV7a2bkyP81rPTZcXjyMsDD",
  "key32": "5WY7Fh5EevC4AUWCyPeQsRA831XLqXzy9vMmYkR5YxuZ9GHNpVFuMGyvk9s3TkMaMJqGDbgdK7vZSKJCXp1hXHVP",
  "key33": "WFTJQFBKmXtr12To9ZU5mG4Ssmiu5WpJxyVt4A3rXM81w6ss1TH3NvHUyA7AsFgpduKAEm3ahfBE8baPoLLVECg",
  "key34": "2QJgMepDJ7QMmitApqJgtNzxqgbmZM1zDSRs8MyiQBVpERhqx4gWZ2NQhLXs9KEuam1jcwcd5foWFWsFNC2mGpi2",
  "key35": "4r9NeDr8n7AHhPNoPg1kd4YUXSwTTw4PPMtWKMrsApWPFx8gxVKh5SLLQqwMsvD2jFNZi6Qye87LXDQFYDsZBGHq",
  "key36": "pXREhdHrTmo1F7HVcvRUJDNhhNU4h7nWoRrwsiZCYeo4gxZBN8YhptWcY5qreqisHRhkCCpJveeSAo4w6ikxjrc",
  "key37": "vnob4P84vHowgjNDrZDyrDFNj9c6HD3r392YgP4YTqvdk5hsgmagRJWC35zdB4gFovxE8RDUYjcWoQDskQrAeA5",
  "key38": "5nKAuECwihHPdkxfsnMY9mC8zvF5Tr4BQmNinC1QLBx4wyXqrjkRutUn6rPNA6jWZwQR2totgwvSLoCmVyeHPYQ2",
  "key39": "3amtkqtahdQdXFyJtK4qUAYLxCDUdCG6d2kuETW7qLkjNce96WGS5tBFQhDa89At3a6PQhmJvGGJLSdT7QYborR5",
  "key40": "4TDiUqwiPNPEqb9t59WqYTBaiwtC3RWT5CHZQcJECNvPXkJXtqDyP4EcDA4XxsutanHPUEcGu95ut9gj7pYv8nZb",
  "key41": "281Kr7dAdBo3dhiGV4XhZa67eBsBqb8xbAGg9gKpjBm85pbM2HHQYAnGQ6SAq3R5TDGxEhFLuzUMXwzBsJkjxjDP"
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
