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
    "5xTCxSNWXkBKDoKNq63FVEeVgu93cW9UT6TYLgpzFJAVUkfxa5MShY3NHVnvtmwaMdvBdwRFRNumP8HG4DYX9m4y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wYXo5Z2Rt7usSuxa2t8VvYoHxxXQhJXR6CiqGdXdJqvq66HrofLW2h9wvw7qB9pXRPjUjj2rKbGZntsNexqJqFY",
  "key1": "5d7BFf79NMQcsPGVTRH5Yj9QMa4yty4sEo93eXARUCrdXxF8ErxNKyiHvCsf8oXcFrWwCti54YqRid2gu5TgwQve",
  "key2": "2UhMFVTnsL9T9c2mnh8CTEeZvj7WMbK65VUfbD5VPpi5YELFjuQ6itQyxD2Mzgn2HGjaE15hQFNaZLqNtSXwuw61",
  "key3": "3mgj9J3oS2aHUoqfwdmoL8t3uSgF6zWpYQxALtQPGe6nSDpqo6nXRi9dPnFDZVShZ7Bv8qUFhaMV61yzcKnGZfPp",
  "key4": "5WPpiAWJ3ch1wfzJr8uj4o8ynzW6NrJEiJ3y92D32PEMPZnQbbLhY8P53ZAX7yBSjZgvzP3T7ZxruFiHydzxcYzY",
  "key5": "2aEet9yFPkVnFBiQ6ygyND1QchXwtV3gQZnps8QyFaPP9gF7D2zBA72HHBJDXrt9w1c8pghoBGqdjRBbAmLUcB9u",
  "key6": "3J1seiuvD597Q2MwQSoGXNZqpe7KHsghLKPMAsLeVLpEMKR8yydxwvMUDdnGnzb6wEXNwpSwhfCmJV2rnpt2DQvs",
  "key7": "4Sf3c8Mj4ZvUrk3BP23vm6zg4nZHTcZgAnQ6A7a3kAPuJTLBaM921j9JaeH2ZqgYby2U8T5Lpm7MRVpUPuQDye7i",
  "key8": "24d2RgAoaWLfttaFyirCg16vUYajnmLikMmW97st5PvNcYxzFBFVAmCzYc2UAgQRN8UZYj5sr37HwjUe4SqGWZYf",
  "key9": "bGjLxuTHFwRqLvd1SQ4Ujr41eNTUBxYfRQMJnxJ1a7W7ZXF9hm37szckNJM9REJcfE7SSe1d2476NzAp7pJqNLA",
  "key10": "3kQdp8joUSpiYbFEWHgCBecPu9iZaEi8f61CF9ArQUqGdwfGn3rfQ4tUQRRpNeEk3p8LRSe82g1QbhxWE3JHTbcJ",
  "key11": "2qFYkKeATHcS5V4ADyJGSmUUAujenAFW6KEvdPCAFdhtgtfwpijcL9Gy4DGiQTpSkNGvp5Pi1WajWRjKLxeotzHH",
  "key12": "4vkzcT4dz8iYuTaFBDUBh6tQWGk1ppbS3xZp4ZDiN4jEsp3fsbfzbPQA8sWbwMWNNs2VCiChfU31FZd2DcebNEoa",
  "key13": "2puJFamA8ud29Gep9CnoBXeQeV59RWChix9zcFAmWq2Ykmv3R4ftfXo8oLr2caf1CBf5oKcTsAHcKACAhqhYbvKh",
  "key14": "3YWBGCbb2izq4Y2SbTWTtfgRivFBuH38YgdBxgAG6MtD8JDQkDjY35BqjQ4RW2kuM6uUGYPGBQNgACbyjRKQzN9b",
  "key15": "2HmpmBfHrHZ5UcgNzwdiE7of8J6n2VwHsG2Wcxv6FnDb31pMjxz3tEU6niL8AkempCPUqECVf8KDGxqMb7EpAFi7",
  "key16": "ScSMXJoHBZaiQxymi8SJnbsottWeqEEEAHZJuLfRGKvgao1CVP7WdzqVZeQxSMeNmn4TJfBnqvydVKEzpKP6zcP",
  "key17": "BaaCj5VTxJmazMMuypxKsqbxDGZwJt3p5zxzCiFqur8dGg1Ec1YhtyYPkD8EMTJz7mYSp67gW1ErjFBRsjv1svt",
  "key18": "4a6VQySTUEA5nK6bWtFjZHP6JmXw6sn1RKoSCeub9A9Uvrhu5NcQnxLeh5WGYbpBj9qoBUKndbt1jrtyD83UeiFw",
  "key19": "NHbn6xJ4gBWZzGhEu7pEsdHTpaKHmPEKGWHG8kY1XQ34SWxCvSTSS4kf1RBuXGoPyF7C9jP1hSsEkotHcZFeXnS",
  "key20": "yHrCuSXTFs9rKwFkiGEQtQDXS3gYbpP2tU1M1TfXmicoRaWUgQThGuDSrPzPFCH1J3LPvgHR5iZTrGGMB6GrgRy",
  "key21": "2xUr9qynk7AEiYFEdsYvbbNeYb892HTFbCKR7GAPAarsmUzgZuaeYhS54unFDdRghvFb1E4vrqDjVGYJLxT74vMH",
  "key22": "S61rpf1rQCp6nWuMXMEGxjGqaQaaCGWhd1w8KXzZibfTkMyDBSZD35pQm39dn7ZaL5DAMENb8LbdToFR7nGBwi8",
  "key23": "5eUG13T49YU1xuWg1c8h96hdNHHCYGmdM6th4NQpjGgGqmBAoCfqFxhTHr41wQDZ87wm7gG6aDFn285ocPHf3z8M",
  "key24": "4wQ8xTfty9nrHs8Nh24NvfuR9Adtf7GGPLxTW5mHzvmkL1ZKmivZZLG69BMt7QXu3W6Hj4FPW9DR1mo5PbChr9D5",
  "key25": "5XuzRWbYqRFZBuB7M5Z5QcgVZm3pFxaWotveLsMx6LBrD13VwMBBTDprBaRre8A5nwxSh13xQasasn3WfxetvkZu",
  "key26": "p5gNwSSTimBjibVPsPrCQy5PVQgSsnKN8Rg2c2GY4xUXXKjNasUey8ZXXGtLnmnFw92TPe5vxsBsA2LirizNBrr",
  "key27": "4WcANtkrDdDqzQ1wSPMmpNLzRhfWbcx1cwpmVnBrtwHQud1zUs8NozcuQ7juWjpoyCNqJAMNXmvaZtMkj8DT6mgT",
  "key28": "5daj5sVF7eb6sf6akRRwiNUP3ug1LeDrRzZf4Y5fs8uaZ4a2Zy49R8epLeudamviqAbBLGQuE6YCRPPgvzvLYGnj",
  "key29": "4NkV51jjSzgxqF4FLeFiCkqiHhqneMgRAUpCaiZgku2SYHoe5rCzT2cUJ2pQjXCQxW9GTfJA7ncf8W9kCxfN8svf",
  "key30": "4zkmcwvY5ZfGmRedhJJaFGNAr783DCw1P5AXjBc5hXZj9TrWFV7zEhj3FuzcAp7hbSLSHhukFj6W762FXdxr2n12",
  "key31": "UqmGEjUL3MfuRH1dd4gKwSjqpDScYDPv7aHiZMDdzzMzBCdjdkCevbUhzkuxGQPenDkqUZqKkC66jRcoCYj83Be",
  "key32": "5D18DdiThbpdhYwBCGQZbfg77GKnp6XZVVVd63gSXkubQd4zBTNMyDG2U8NtTym6Bo1kN7tXgiWJvLWbJK6DkKyN",
  "key33": "48ghAVF3XEiS5Ad3LmzztfN28rmdqsh7DDDbtRDn2Hxrknt4WT9gS5DH7UWrLaR3GTky5q2LNEV6HmLmn5SwxxqZ",
  "key34": "atvjrT4AMWs2sK9M8j9RPpsZKKxbBJZHjQoXxHHZg3L4X7jeWqBiAWjpkcvP3rBdjQkzern534YpcWBTjWFWvqW",
  "key35": "3yeZqsciy45M8GAhQjFVYjjxEcLSKA9ruCKXNKd49ddbZ7P4sVxXkp4mdN6jQ3KtLVCzSgK8PYstTs6CTxRdYykT",
  "key36": "3ErQzF77nvFDfNFMVZZzApxbJPci24xHyytPKRjGPeTkfi6YWWUrsxYyoFuSro6cXhPGQ4Tci6csC5LYWeZmr7gi",
  "key37": "45yHoEN9E89VQTnBt6aqNaMqBoNWE3GiXwobcVozqaD9ib7dsGrmwwaL6yhykC1cDEoTiGjHyZkH5UEuxbmDztWE",
  "key38": "4bbarx3F5jk7kux7dXH7eVC9zBw6EqVsynXiUyoR5bvL76Nv6VeKuTbT5bUZQnGYsGJYxTUo5ugAiik8Y4ikeW2t",
  "key39": "8gjFGm6bWgJCDeqjYQkeDMArLHqi87T1xyuwgaDyDeS8Qs5tZ3cWRUXLkK4Kuvd4S1fV1P6Yxu75fhfbZXwhHBp",
  "key40": "3WedFDQT8MYD6C7wDnoAyjnQdAvu9958hYmxQTLFKLBWD2zkwUoM99yhTPJzgLvXmjFmV9sbvPhE7SUPavErMSnq",
  "key41": "3NeDAmJjFFeaaiKqpJVowKrqxpWzvjbRfGmfZLGfcxiDtiBQb2xHHy2FCZ9Pg3UsPZB58jytRwWfxcsY8FvCEyzn",
  "key42": "eEdx9itLZLXnhXhEq2HqyaUU1sG1CC4HyamNEyGv87CuvZeMTHDk57ZyBfeo3XV5c8MHufpR7rWBSdpCLDCdhQA",
  "key43": "5ECjkM5cnxXpLTvEEMbrnJhtsLbrsAQh4EaaAsrzrQX7CUn1MMNTv7PZ6vtxgXJVsfCvdtpA9oswzbgoA2XzddmQ"
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
