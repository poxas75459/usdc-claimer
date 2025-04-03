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
    "5ctt4MPkAxvA8x9siCUcya9NQUQ7CeWa6UPgRbve2fjNqhAbgZLsiJ5L8UBadkZfhG3tHS8sRuKtLUfxogRkMzom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dz5TpNTFnENKaBRhNDHdh1G6bAxZQhciR9MDhV5W2M9zqnn3UpkivHt5gX2zthAZ914Knd7fB63gWsundnea8yk",
  "key1": "2DwNMNQJ5s6NyCtD88gmRs2HKptBxVdZz173FK4ZvZ9fTZ9ZeKbNkB5kCTEh1XobEzLBYsHXdvBDpMRHCgoGMaSb",
  "key2": "3umMSwzaEFUKiUZGNMPZgCjVDGeNZ19c4CjX8rzeQe5yk7MRZGci5zdyUJmbypywcGikKETwWX2yNNAmVj8tvJyg",
  "key3": "2LxLY6ww2ZTPNRXZXjhBPKcARwywCJXZWZQW7y57ngC4VxdZG3jHDWhT453TQXzXkuJfNASETAexNDPuGPUgD5Gm",
  "key4": "5wxuFSSpHUrQsFj4GKoPgMgtG6RvaefzLDbRR66YXovuP1JjYnH7KqDUNAYmo5DD4NcLyshZvyj8oSHANLCTPJs1",
  "key5": "2GJvtd59VjboVSgVmKRTJ7pRMMD11mJGTLrG2ya4q1B5XiN2pMJUpzmhvmrrszMnGTKLnVKvvTvuA1nt75nsKTUG",
  "key6": "2qTdpbjnuuzBZ46EUvNX38HksLM81UxaTY7LBr25gbvFLULkBhLJir2SmQCeYxaFgmpu4xAwzbB7y5uVbEcGAuyu",
  "key7": "4z4thrxXwZEKv1o3Ch788Fe6L7oDdXK8VSLVTPb1bx4vxvf2TS27TaDghKr5Q49Nn5GJyPxTJzYfNpjrYLvPTnVY",
  "key8": "4qWtCkHxojqBqRiaz9fgkSFruYA5MynzQsk8hTEGkvKoCmeMFiVyY4xL61eu4CvxV2wbP8kp8nPt197p8foiLaKK",
  "key9": "5YWe5cFt9fsnZgAHi5afCeymKxoMALhfrzMJySW5Na51NKErYru4bf4csL6roiJsbE9xzVyTcLPzc4DSxb7nE9EG",
  "key10": "27T5yuHCJuDmYY3phYM2CDKE25r7a9ThPTeBDpGvpJB7ZortyQX3YPrNVrNPKrEoJ3KV9G2AyvqogiLAp3rLXX5H",
  "key11": "oYwwQQRxL6FEBaRtNRdvU3UcNusVQR3ZGQgkKQm826aPDFYbL3csNGC9jo9CvX6wVgCQmrHLSCMix4bYuNwt3Hj",
  "key12": "oEGuHdJT3YXQzCjA53gjL4RPZC2DoaBFaxPAvni9GW8juYRGKBexbAtYjuJqynCQ2QHXHTN8m9QQiDT3vucAyUZ",
  "key13": "394FRdMWSM5snKU24H6icdZbw8iRbLwuppKa4K8k8cxijB78syvyTQrDhM9pWaeSvRZxBUNrDsfo128AzjUnK7J8",
  "key14": "wQiQJksJwLQQmJgMUK38vQiBxq1VrYURU2yTWjBJn6SuL8v7eMsCN9no2MFuLPrUemzV4HmeEqaUJXtosAZT7nk",
  "key15": "3JZCE4SoS2Wac1frvKMdxtjxFu1oxhUdwwHMjHyVdphs7ne5BQJb6JUwBnwP1PuKxXDsBC5kmqGjdwLrBKcGs7Un",
  "key16": "3UdSrE1JjYqLXBTdjJuF7HAnV3mc1MMTmrviEZq9AnAtKmjkmHvMyZMpLyVWEHwG7DyRt9pAsbnVFFSPbYfAqKTQ",
  "key17": "39CMGCSnLjfYMt8v7wEbBYD2ijSqbyRfEQ3icesYWejJz88oBnmSQTTvPpbs11Ru98pKXiQbn49DqAJ6eqmj4Xag",
  "key18": "4p2VRFcPz8SZEExT1Yg8Y4TBT61tgUbkRXRepruv5RHMyZxZ9qVJ8oTfjSTfMKsAY5ft3K7bYBmeNDc7HHP1Gv7m",
  "key19": "5mzcPRBRj8v6Y1YRKYjzd5hbsV931WtdTVEyb3KJxzDD3CK3YNmGhg3W2B259UUkZJn2unPNmprhADYviB4PGeYe",
  "key20": "2USNZucmon7EWYy1aFroDmUPfvMPSQZcfwFh15HkLxx1S1TrN7G9SJzaEJALF2XkzrGMFeKf4sxboh7TDUxh8kWQ",
  "key21": "2euXzCHQ8wWbAgakAEsdK9dLFXoaUES17VsfrNhQjH9222626XwMTtvhBUjFciEs7y6umALqoxZbWGZM9viTNZjR",
  "key22": "3qWMi6L62y4ZkuDgHL4VoHxJ8joxLZTtv3tKXsjsr2XiLcMRgUXy3BnrmJ5zfrmokCbEZZEsegj14wr2ZvEnWTFg",
  "key23": "5RKzQU55QG5akKeS4HKwUj65vYaBpitwC7SuMzwPTidp6CtJbHejhgSYJ7UggpsYYTKg6PBRdXfC41urY6aqM5bN",
  "key24": "RMsi3XCXuR67E42PKn9e1sQceeiWwCAqpGAWbhmdzVxfpaT9VRmWKLbV9VGkme9X4CgK1sL4RgM4rLsw4kQV8d9",
  "key25": "5gaHByUwSdNzSErpQnv3hkA6uzJR1wbvDCR6fhPDQ6wSa6bt7LCc6gxacGwSqXBPsDnpHxCH7vvJUhqsGQxNbn1U",
  "key26": "thS1tTUxe8twfq6qxQncc1LZQKaRg8NqqJ1UGUTxtSrxvcKcWBT1x6QQhH6SJZYdpJfZDvfpkk5e43u1QofozKE",
  "key27": "4D1tFLNkbZFcp5caUcopSzCshXfKL5HErJd7tFE1dB8Ka3YSqKbHMyGwnsX7WKnD4yvmH5VmSoqduNZLEjMmUspU",
  "key28": "2GZGc6EkroQF5VFNvq2BaArdgHePGpH4pGGfedg7y2HeTTzzHzCNxDy28eoSteZChkEYWPHd7cvgU1q1gG5oKXHj",
  "key29": "2ZyYePkykwJcK1CedHfTLoiCEaTPXg4p478Y2fWr5kTjrFjU165KNJKfCwdZhSyfYycqZKUiX8LzwFGayTSkZHR7",
  "key30": "2NCPLSYfuRhB2pt4rF6MSsqYwUuEkguS8gkw6K9dq1kptkF4iEpYnsVgHSuH93jPCr2RRXULEapA3ezwwScmr9eE",
  "key31": "3QfRMdcgitMmHpeNLcxjqeCuzHRpSHJhLMDgTa8nn7UTr1RMhWibsSAJw2L9k5CqwnqeBe6wJ8yjJNhFQZaXSpYa",
  "key32": "54VwxgtPPpMXD2wwZNN1b8FjrsfwiXKrAyC2t9c2CfZxqdAZXMsfbNkU9aLYahoAPu7SeJjFGiKmBMM3M92udT6Y",
  "key33": "PXafAhmNQdySskZ5m9PtKcjf3VrVzarVcjjuqyAR9LSoq2or2RZtLrAubgHNBFGq9zfk69bWRq4zHzLoi1tfYGN",
  "key34": "52gJCA7RBxyCMthuAq6D2ynfd7S3pxiA8yyCNcV5iB5nGntv3SPgsrD566zzE2QBY9pWgonoZajx9VJ4nAvQqWmM",
  "key35": "3viFdbUrUgSAGtu5Mvhup4ZseeDz3BLtumFqJKzeBXSmCBxM5v7wdW3ezjVhRQ2i5LGKBWTcokpSK3SNKai68X2G",
  "key36": "4EcNtiFQQwV8mWgRKHJTjSM93u1S3AYNHAoW5qvLxanHrs5NFWpSp7wh5yBceKNsDvSHcjrpqcEMfbpPRjcsnhps",
  "key37": "3gYirubuxxNHoaVzKoe6Qt2dBCGFzqzCDNLeZNqRzCsBVULgga1TvXhZAyPuuwbcMpmiMoXGyph8kCwbx79fNHRZ",
  "key38": "43oCxhBoogKRKRJqjt6PtZkPQ5xhfWnf9ngzfzATmRCmTvTVBJQv6eW8brmcYHAmRW2BxNfewsZ6hbJcGSFEXnJe",
  "key39": "QaXxdfHed1Fz1SvxfyfefPRTh3aqawTwhBmS9qTysX2dHrrXzCYvQBVhox1An9cFV9uHgXZPeawYH7JF9nrdxXd",
  "key40": "2epuTXtxkStTyc5NyygeYRYQnFF3yzT6He41mgAdWYSfWqGTdjSfcjoww2UdqVjhUWBfQKZXnkBXvyor8rGjQz5v",
  "key41": "cbAgj6v9CdQhQXptN6uvuVfptT6ZFZj3DVs6YHCGpngCedfHKMUp7MkEx9WWNFv3WDdDE2CcYpzN7g2bewTMcEg",
  "key42": "3nUfhom3m1imXj5mtw9HNhoEfa8vDfumN9bdsR7vnFUdFyNHbk66t5ZsaYWZE1a2BNtZoapXvXoB4JhiLZXv7gmV",
  "key43": "4igrEKFghQQecruHY2bZcyr7UQ7c9i26hxXip4cVgeC85UHwk31JHBPfVX7G6WsDyRaYnVjMN6vSWLpUCKyf5bM3",
  "key44": "29DotJhTjR49LRi68Y2adFsVdbjW9Ra2ij4rPjc1eyhQeAoenvjZ9b1zATu3cPSRTR1S228YBxVaEGYpr1CzD1Pa",
  "key45": "393oncPevcEq3jtrZALS2TpAxmY4V877pmwbphpPhCduQGdVHUUvS9oGQAaiZhR7cXtvPxxdXwb1oGnbskyg4kWL",
  "key46": "3m8KsaCCzvR6RcTbheCys8jNsyiW5KqR78fPZZvk6UrdYvVHW9ChKs9nfieVzXz4qnceFLSh2LSb8otwxNjnG8Dv"
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
