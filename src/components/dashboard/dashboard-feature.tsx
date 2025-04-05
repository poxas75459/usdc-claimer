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
    "WVqS9GL8f9pbM1EKkHVropnYQ72TQKPvRqruMZ93yZNiRJw2pqYrcidSnYqzDV441jahGGVLi6KKvaD9yfPjKDa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21AsQHY26MfvBJGYRQMqhLxf8kHtmNQk7BvVGgTaoLxGZPgvxjqQ28vmk6aXcVeCmNjFT5a6nt5pDqFziekdfCVJ",
  "key1": "54x3vbM4UdJtaqJNHCXn8K2xGaxk873kg4wqNBkPzANkbv7hpC865hc7rBZeEDdwB98QjZsJXM3Yj2mjyAmbPq8y",
  "key2": "2N46c6nvjoHZ7TznFY2NQpHRC561chQePaSZmoeXg1s8Wuz29Hc2EN5mu4Yd2zKHdgzuV6qRvM7X6NLioyAA5P2e",
  "key3": "ZkLeTS9GNK6htpoeSxurCtJvh7tvw1NX6jeS8ofMrPpiNrBSEGxjUnr2d6uYdXh33W6FLGpZconFhPMta8zAbVS",
  "key4": "5bK3oCfCD5BfE7GHnHnmJPXYHDHmdVQv9g253U9xh7ZBnC4j2r97jefNQXcSBA2v9ZVksCQEj3rvHXonaygRPniZ",
  "key5": "5Uf8K6CL2oGXBXZ6BwZQEfTWYBiMW14gf84xJuUU9NJhL53WJRcd65CW3gHXVkqu2XZxwM1NmV1FCuviGuVMpNzU",
  "key6": "2N14seHgsT4oAuuFctZND531eM1f2RiAk8aQ9GDcBQibwoi5NfF7rP9iAuG4CWWpKDi51CXRknjtL89TPP1wokSv",
  "key7": "59Y4j4spRTM1V7DczBCnySmczDHSrCbAxoRreo75GdkjU5AXRMVw3AeQAXrPmtSN375gbPYZNAjMkvMvSr8VgP1y",
  "key8": "FT2nxmNe13cvdPJvpjhbZTqPEXuegLLgFELuMAXkUnopdYVYXv9EBJNBXQySrefBE6Y6bDMYKwFwebrFZapL8tz",
  "key9": "4JeKkqPD23xr8NM1xNv3UYqEHJaH91cXpQwL62ExPTDaMaTS9iWNtYd7xerZQUrGx8ThfHvFmWxa1KmJDxZmZ6qQ",
  "key10": "KAcC7UYADmSqdzJNMSEjT3MstvZSHUNh1M6peCzDwMyiTR4PCUMNNEdZTCxAydp3f58yboyQCgxWYs1S37dAGvB",
  "key11": "2wAJKJmFsLTD6HYGkrkZFzEGD1AniZLXFai5cHt29xDDjKWdSx2BRgd8oiLGw1QZntdHAkpV3AEQcbQubfKXu2Ho",
  "key12": "2PGkgJyyG9mvUsar9HnSLHEpasLvYXa3Fr3YWqDPTFGicjoim6yRCXpTEbcBDSKkzFoZTbKZRyMgygcaPuyMrz4z",
  "key13": "5aD7TdHCiBr2gnfexAqDtwn8tbBageQ6WkpCN7Actcm4d511VRUiNpvcpSy27TMNiFb31SoTmxmvY5G8uaJNtenT",
  "key14": "5EXvGpAHdg7ePtp5zZBqii23L7iGGsBmYGhUQyjkp9KReXGqUzth2DeUPuT7KWnz5aL6saCfw6eBm8o3449XvYVs",
  "key15": "3kPw1d67qK96PGw9zAEcgmYNj2CHuS5UxupVabhtfFhYkQAGUXcFZwaLPCsN11VUBUhanubUuHAgscR5qvNVxRDS",
  "key16": "3RCpn5HPEjPPCXJvV2UWQw1rxcmGkyxGRc4SYe87zQr63gVrbcz6tLNs9TMMKHtSSRm1DfuC8MWRhC1TPGHoAVaB",
  "key17": "5ARBL1rYRgvoNB7uJ4niyG8mzTru2ZvGtitKxMwM8ZgTJhUsrrK3yqoTocP14p2LoHjXqtXthKHDZ7A9AZJ8QYjq",
  "key18": "2gBWLvoE5UXYC4WZsopCFgcnPDiuSEaCNJYiEviGLFsdoBz82Ew6yDEqQiPjr54FF8qAhAFJcc6TFtU3woPWRzA4",
  "key19": "4D4gbM2UNyWH2GYEtcBtWBvAtoXo5KgiJzsTAtQPie5AWHEwVHjnTD9cHHz4RkHP2yYguL1r8oCsSqL9Pf1tkaJ5",
  "key20": "3k7iTXfTGCu41SJrwtbVU7Mo6dBgw3k3AuXyuY1A8gCA59XkD74xg2WahiruBp56jDDq9kzR4WXwqQE8K3tQLY4H",
  "key21": "22djA1yJYcBpjiQTT95AdFtGurxm9Tkhq4Kh18a5pp4rfxVb8NRB3sZC4NzoFeKcMcb8UjJmis7Q35KtQ8uzGAyn",
  "key22": "1yUWkjfwAuahu4r4ZC69CNFpBQpfitSMDHJHfXDPqHKP7tYytJ8ArtoJo4Ytw1KeZWicV5wFTVr4XjdvYK5EyBS",
  "key23": "2kSyHBB5tY2MW1YG2ussMAZ9Ph5NeBH83qL1p9uLuWhs3bgxjRQCjeB9hQT2DMiaghcKmVLLdv2Nyk93faw5Cg9L",
  "key24": "2YGDW3LB1Txgp3NYEgKWYq9D7EkiQ9E1THJ6zvQZ85mmj8pNdY5XVqm2j66KWFHuqnhohjr449vSwasMpZAZpi2m",
  "key25": "3duab8aDW9xotQttWJXPj56VjAnEe4zfwxDzFQZKvbHV6qWEp2Ca7U3am8oMPVvzPQbaGufWiLSwYquUZytxUjTT",
  "key26": "4bymCzm7zLifMGLwQDimJpaB8CDX93akyrWMfFkRqjVk61NgEz38AUi7Jz1r7wtxQAWUXDtHCPBMLTm6Rc7bnwrb",
  "key27": "59P3JUWCyx5NrdxmuhktBY98wSYuFVDmgZy5TcxvSFRE38tUrLc7tspxMdgU4vF1wwKaE1rx8iLQm8rDnh6nYreX",
  "key28": "2F6GeCbJ1yjuWkC2HkcCqSJXjZMh6Tce61JB9JrW1j42c48eCgTE5WniqVkfwYG4hc3NtxZxefcxb7madUGfZsvy",
  "key29": "3f7Gpv3euDjCAQWzBFbgnHeip9cRYYhMrP3XaqS5fsP9RAXiSqXWA4FDsbo9jXg8nnP1BU5KqNUoVv5v3oQyT89J",
  "key30": "5K2rHqzt55Wge149dpNqmuAcRjjrZJKnPZtFbpoRQupKjZC9jeec5TfrPsP3DEoasoPiEa7uEyazpqYFdWMURECt",
  "key31": "5XqKYsKtUerhKyVL6v3tBo6hzzGU5soKA2bHTkYwNpwLcbA2oqBJVmbZA4AwxK5qmneAsTQGMinEEKiH1DP1RkJq",
  "key32": "2h18dVPXRWhioHTGSev772wueg8bwTmCZr7RWmRBSjWeQekf7p3tGmfxxk5zw94ftHgFJD2B9Y8HDMnPrL67oza7",
  "key33": "64prRSG43xmHV1cTm7nT7LVGKJ5mcX6y2wDJ3xZij65nmprWcpa13aGoNbDXdu9HcBbxNK7zSi3uCzXDc7accL9c",
  "key34": "5sDo9ZnBwpJeRGtZ6k8xXcyqQWpppcWb66q7APMBfzVbn7nyE3p2kfvMpv7h7cGro2Dau6ifs4HPYfgSGMkcjWiv",
  "key35": "3etRwpJWsgLqw7n2jNvZSosr1BwstGkrB2EUUzdxnkYYwg6bY6Af9WNEH78EnhJy49QULcVCPNPBdE5vrdV6NDTz",
  "key36": "5pAGU9HZSi1mqt3XZvtGvUygEUDkJmAydLURuWKLrH3LYkPKvVaCGHCcTiF4djVAaN4E2jNQ3sCYhR42nnU6sa3G",
  "key37": "3akzmVSjd8oM2KGcD9hQARWzjDuk5TuEzLyS3K5uR2WKHgaVmnMfTztVTjqRtr8u6FgfJXQTukPJUo1TCzTwY1Ct",
  "key38": "35df3PRPdPjdCxD7f4amC66FbWgQ4ePiRrqF5SoYhKgHopRau9ZcANocUWCXF7pSK6EThTMpD3HgF5TbWwnofkXH",
  "key39": "2eoHqpGBjp4Cctw4fRMnfSxNG6z7jDKkE8nvT1pytr3nfuxb4eD29HtTDAsqMMTqHLtiWpp5gZihXwq3LWenwFS4",
  "key40": "3rLabCHCx5tFR1N8qvXj5Uh4rqWnasuw9NoKSUjxKJuHDTojNSBPwpULKdYijooX1qgDBwZFEQjod9eYgjQ5J7uE",
  "key41": "yN5cid17iWrDxBYTQkqPwwpQt35tNPZKpgyes4EtuowSM56UWzcMbD1x5AXSpAYAP9x1Hmqi11HvPjN4b6165t1",
  "key42": "62qzcdcLSU33tKZMzPwdRpiHCgs5K9KHShtuQUMUdwXATyr9r9MhE7HTvhiLcZAURYGgoCiu5hvJs2JDVHtLZGwE",
  "key43": "QcFsHqGb1hWoc7vDv5k2SGRkwKRLmrCfLFkvTkhDsY7wLiPQMZxNjg52EQdHc6uRpLVf9rRZ1cwHkWgjYWCQLok",
  "key44": "WyF3TeFMkCWk6Rxk1aYK86xfiRG4YjyAu8mj5ktCvJjrK4ct3qLPjRhGQMZpPNkPTiqRrRPhTgbz1Dnfpqw69js",
  "key45": "5K6tagsrsDgAhtQ3u5p4A3AY2HajAF9BRhftbCMPtVBYvRCn8qfkwXd3ZAFMhg941KXxhNff8Ckf6n5HLgiSogrP"
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
