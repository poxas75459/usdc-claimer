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
    "5FjfWqWedwVjs5DNXm3zpDGpxtSXa9BVcX6X6YTwANQjmh45n9N8m33iDTjtjYBzymnn42Xa2BPZgVM4uHqEcKnu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f44QncuFgP1dUMivwoBNDJEHWGgxngsJamxf8k3xFewEvsKAtSYyX6QEwgkFDK2FAnsmoQCMEPWboGti7F7Kc13",
  "key1": "4Z4g43r5UjpanUCAg3pyhPuy23vAE9SWjoGswa5zf5niY8Ksq8BEFR2uA8brpjzM9qFrHZhS7G3rqLEvY2mPPwZu",
  "key2": "2yPqLbxKYdoVCKZ1zPKEuK8KtPEHCB6fsAz9cXjLuu34AzuZdaaQod9nVeeBqis6KQVBJZacUpwvS7tmMBaoU4cJ",
  "key3": "r4AZY4zQNocJz6uhPXcLvx8kMJdMdVyz6o2pDT47nyC7nVogyeCS6bdTtjRfxnEuEPF4JWEBrvSDTDCJT9BBbQx",
  "key4": "4WyejiNFgWcJYYktoD5nqpkypLNLcX3Qf5Eqa5zxxjuFzZs9SDmah95SoJbRVdnRzaRD5z3gLPkcHypbUqrxrh7S",
  "key5": "3cwLJ8FDdKBoaHUUoRHGz2JqRZPZ1zWPrWDE2rfr9EnK7cWMUrVTqwfUzN5vd1YUF6o3XshxH1Dh2mcHSGQGEP6B",
  "key6": "5397uaUYETGbXb1j5eHrhHkHkZ4YQtNftREiYLrhayn22ZEfW3YejeesCMHbzE7XXAsXDubecyoZgP6HnxayfgKR",
  "key7": "2cJEj1p6GbPmNheX9D5YFAyRyiJ2TrAUjr4AaF4EvaE7HywjMRUYtmzRRjfmEgoMXXGAmPpj1rnGDLWUeF4UfsvZ",
  "key8": "2wWhDjpAnprpRRcKCKTf3f8jNyyThebZScPLgyimXx6z2Wv29gMf4vcN8zU2pyDM2scbBcakdWx3MCwvFuC1Se19",
  "key9": "3GGyVBWjbWqp5J6hQiV1YSxZ74mgndp2YMtNdWYknnq3CiUh84k9vzovMyf7zGpsr2iVwHk2wwDirhsiQGUsm4Qu",
  "key10": "64GyxAAxuPNn8m28d4EP1vZezyS2k4jq2Bztk4hBeWU7arsS14LiFokt5Fo3TqWk3u9gQ1DmDUJUEMAiyQAtKK7A",
  "key11": "4qXrMyxaiY4Pv4rJkRWEpFhy1jY4i4t4maJXTo7VvDfud5Ad1Ym45fjzBmX36tKXyVjkzqhqFQv7dpZnpz1Rh2oM",
  "key12": "5TDrSJ2n8u1WfapBefWdLoPYUmRnaTT8j5jPVAw2WD1bJ8uTNH5xLoxmj5yqcXMAJ7cNJid6WMwz34b2ZZq8p1et",
  "key13": "3GgtZiSXZGuNbG5HBome8gxFk3W9anokRVeGzXHdbqrmjJicmA4kzTuFXsSNzEknxSH8LofQLGKhnk8Wvj9HiRio",
  "key14": "cQPuDQfj1Z9Mh91GLqWWfCQjctptipGjjbTaKS1XTvZBAadCUnZFy85gvzLbCYfX6bqdtQ2LZ2BhZomQvhXAb6s",
  "key15": "653bokPHr7MGxsjfEG1WAH9WHvikQvpy2jW94a28xUwuVTydCAUnAKYQxGtV65PHRw8DPoV4Y7eEuCJWt1hd5KzV",
  "key16": "3J8LNYycmKoDDZPjpBWu3vuhVG1E5wuXoyVJhDxuGCRiNJdADccWMbTE6YBTT7qfR9tw93QuFUrYkwSUH8ZvZ2DE",
  "key17": "4SLy8kMuv858eHBA2bm8x5koomGr9wXvf47Pcj2Kp1fvD96KMwsjzwXrCUQhECKiDvEboUT7oEJ2vfXJnDkVcY7i",
  "key18": "43dhHhF17vKPQxxP2eZkYmmsNtaq6fM7E3FrKfDpR6AmBfAWy8Td3WtpPYXWHiy2jYRaA7X6wXyLq12ufr7HfyyA",
  "key19": "21vEngvokZQ2pUWeCbjxHobweZa3NpBRbfHXEDa3zx9mBDSMJVek9dtLP8eNkHtyG8ygKsx7CgyZc91C6LizRpCm",
  "key20": "43Q7LvnP2JLzi8WMakkmqUfxK7defvKgzJRWCJxtAZMAsDysneh7ybjHfNQtmo6EpxJAcniKQaTzjnVXvKMH5Atx",
  "key21": "5r3VMs9GqHPY3o2MMt3NeGvbwt4pzsaTLQXVdPmWHxoDsXEkwgvtpvgniXnye7bu6CLuNkPqesQHrLLMhTsWxSfd",
  "key22": "61Dxy3JyKagcrbHKxwz3PPUmhNBcZA66RRsfcFnTDXuLSnYKiKBstYtn5TypuNY6Dk9quHZh7miDTtymBHnUfpFg",
  "key23": "2XPArQpQ5wpcfCqaMUJM2XdtuYnLKYAQLrQEeQGpRCv2wtjBZmFCTLvkUFSkX9GDQCJ3uKp43SQpvED3dGVkKQ6L",
  "key24": "546jBfTbZQ3PmsNKYhCMHk2gXrEA1iYs2ycK9S2JacXnmsDngvyGAVr2fyFxR52VjhRpW7Go8GdKEaaYCQhJF1is",
  "key25": "4vdCJi73VjuiXa7wfkYzpT8Lgw2NtKT34TSQf9b4SnwhWp4j25JqmhNGTV5nyoZgmt34dWDXJcn37sRCm5qV2iEC",
  "key26": "2LY7qh1PswuqoqDQvQEuAv9xV7u6ZrNLWwUXPY8nMY819fmz77ZjMZQgo7udEZ8UhqNY6iQ7GVN4DwRd9coicbGN",
  "key27": "23mg4U2D53DL2vxQG7rrPPJGFiiu74AzPqyBr8cqiqWFypr5hLiYy78wCvwn4SK3SzgLzEHLBTdk5Y2vCoWgSmEK",
  "key28": "3Sy9NhJfsT6rjyJEv7eoEFugjPxs11yEFU22oxCrDKm1XrKS7JmUaiP3hPKUzaEXENgjz3nP5GjVGcffmuh44AWE",
  "key29": "3Kfi37PpTrUFXVAa1cLTQi2yd8rEyHirATRCpKGyGebM2sSUb9UR78ZXi8ifaq4GGsA5LEawxbZirtxM8bGJdqtT",
  "key30": "5ZSN5Nzkj8hGdee2rqhspYdcdoMavKgW9sf6RuXY7uTtgDsTfWFup3C3oXxRmWXJZYUGcjgjGspoC5C5XDDDcaQT",
  "key31": "46WvLZGpjqxxUJbRYAwPKs6X7J8KTny98UGGvS2rat64m4JReVTCg3XU1BrQ8tGkDfj5E75UNvnJ8y3f89G84FaS",
  "key32": "5wvonoHktVvsLBab4z5jzJ52Es5Qpti18oTUuCxhv4yDNBmFQ6wUwFSVuz8XbUe17AMYouehgUX9t5NfxFe3bPGw",
  "key33": "5LpFCERtS573Kf4Jt4qe7cHRgsKmNCbRdemq2mtZHChttcVvNJFpSjTCi4wcVFfrXYBDpoitMw4DM7ghjgk6Hih2",
  "key34": "o8EPGb5jPrWL2M7hU3uS3TKdGR5kY5vNCVeeQ5VjDUFSPuKG5o5c6B5ejfDbVfLfsTTGXAxFkTiGaXE9baqxZxg",
  "key35": "5tS3LqraM7vrpaUSbobBYjykQomC43aWvBCDoD9vFRBv4NiKv324GxEf5bKhZokBVYmsFQba4V3dRSg2PQXEf2Ao",
  "key36": "5DnetVLGW7A7oaHWdcjLHJnVLyR3d87JvHEtkeGFaguQFCdKBMZKp425hzRLWHrDLrUwgGeZJ75kmBjNHKdLxrRw",
  "key37": "4Ri2W2Na3AekP7gi6uYBovg63SnUcwXnLJB5Fi3oFh6nHNtrHK8H4QiHhEpwpF2Qntdt9njjHzLYNFcGLtRY8h9k",
  "key38": "51LyzenxCkFnsojo8Dpi8XsXjUgVbni3HLFUTNozrQpV3yDyvrkyUauyh7DEivBqjfuQrDz5sGJwuPUT63EbADz4",
  "key39": "JRZuR8XWL73xuahAQ4hX5JcvyGtd5PKuePDcGMDnKuqKruc6hcgzKSJhw1SYnbjgQkTbKLpKNJkn8ss9HZXwe8E",
  "key40": "24bQ5QqZmD8Wt5tNJjVkLJ8T6rBre31nU9cmpa1UJw9Z3EGp6W7KbWh9BkbfcJbQA4giRPu8ntuH5cobFHEgNqse",
  "key41": "i6umKP5tLKv4T2JcVofpJhofGNRxnshE2a3nuWBjHRs3X7RcXk6ZMjQpqhgwhcLGVWNrvrgTK7mCXTRXv3eLGeD",
  "key42": "4BqaMQTNpihi4w4iEJ7P2UGkF55pJQthyjQDgEaCqQKPuc848ASYRTWN4GXT7GoTAARTNGvjLvsdN6Apg6fzhdNx",
  "key43": "5myDoP9FxUQvZZrhJCQoEG8STPV51a3K3nNXEKFwaMk1kJLZKtLFRDyCJhQjfNr4jzsFLkNvf8AT5BTDR5gyCo1K"
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
