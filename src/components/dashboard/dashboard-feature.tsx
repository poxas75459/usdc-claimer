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
    "5r6BpCuDX3gkxN8gWD1vhKVG5W9uM9nD825Ei94kfngpmm1K1aJFAn6WYt1EzvWVxyKSfbFoDsQGmCf7T71mSbxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z3Uqp3GnctkDpxXeZozFgXgegXWDsYGZa3MDhH7Bbqkzga1MiKo1qnyb8djXMhwVTAr7C2bbzwBq2wc1v2XCaRT",
  "key1": "P9MbKayDmZ88EdEBoFpFdGJAbE3VdLktibccJmKjeNnGxwtHFsaYdKPnd5qJVPAUkLsYp6xoi1Bd5LhkDxLZzRG",
  "key2": "5yhgXVeid8Y4jbbKhnAnnHbzTvZPBds1ANwRWQA49es4LmMAvHQNnexoYdvSntxnwErKUGJhMa1yWNMTr1U61zH2",
  "key3": "24Y5aDoXdmNyaGrZ7zonoc9Xi3tdjc2CaZDF2t92MxeEfjoQpbZuoUACkX5i8xs87vsyCBjNqzbdxuNiV8fdz4zi",
  "key4": "5QxonNGR8W986D8NxoX38K3oVvrQct6fgr3rn8RbyvCoDTqpJKt9r8paH8p4FmpDzcLNsHi8iTRixExP7a6xB9gJ",
  "key5": "2pCL7jRVogSVpW6N1VEdACWsMW3EYVq3V9J8qCCW6co2qWgwyacxAfsAtQgEVxTwgBRbfpvva7wSU3nnUyom46iP",
  "key6": "39W4UoLnSt5KCbuxTdaHEjxHXw3yeJ5pVQQRXVH1K8s1gdPmKHfqNrxpw8jwS1zYgz2xnpZWrSmjVMEsPX7nkUAE",
  "key7": "24Uepm8jvpk8Cxtj1oBTJnfXerT32ba5Kxsp5ZCH9gtT1PGNcCyeks2xx5dhsg6bpwASBjGKqPXWMriEhPJpmwWo",
  "key8": "5fgFY6H8NvcQk5r4Shpc3bycHGACJaAjYKfNydasgPSDw7bmmkfd55GAN1X9aTS4iKELmXDD7Qbfs5SxMbrKn82e",
  "key9": "4Fzkt7Y84f539iKos8dE14LtGRegZJknaEMeiB3zXd5BxiypcM7gJroTZwUHuN95UBKCQM6woqKmsd7rKV9Spamk",
  "key10": "FJDyJyBiVd1GtPDvj76SaEikbp6B6jt3zjmkiCPBr9yDbGRNGU7TAyD6nbu8HF3KbJbhjo3Fj6Hv5xjP9YUFjYk",
  "key11": "45gSPDXPt8qN67qpDVSvvCNAvc6bTqtAP14NKM2kwry9787BAuja1RJGAUdjkY7safTCWrgBrrf2Aes72F7Dbjtk",
  "key12": "4jHwN65oDGkbWeExWNeMKWfWPng55Y5HJ2ojqQqpMuSRzL2xhc3WzNkfNAt4x1gYmJqEEUj6bT1x72gPx7uUnjGQ",
  "key13": "3BjZFcWw1kePGynXm2rDs1uBMMRqLqNz1gaD3fDbvJuCeivCfKZfoVSEWrk64Nh8D8fDNGaJpRpJiUnpphHRiQ8h",
  "key14": "GkM9QaFASgfRg7xEqDKsNRdvYYd3F7tGf7B1XaSjHkMkquGaLFan92gkzKRBE1cVSiy5KPardWmSfGWR8LKWF45",
  "key15": "5yvr2pSUdqUWhiFAMdHyUYnideawr8MKzk949tD4affLU3qo53jZc16dQZyrymdCakTbPxPkdqAUyZ1cV9eLHqUC",
  "key16": "3Lu46atHBwXhREyeBD6ghKGRrQVyY6AwBhcEsSUVRHBX71SCwUN7NYsdkaZDY2DW8Kv5A7k5GQ32cyMT6jN4xVFY",
  "key17": "Ana6aC16hzVXgUpjivJb7LZzPqJ7YCbayq2RoRzHo9mAMw498Qqm1rrnmAZkp4d5xJvYewrGPVQ6YkG1pSRnHHR",
  "key18": "5vAddcBXTpTKHLMiQK2yFF39ni9hy8ahAEDLqMg9QyQY3vJDF6D9qVp2ZNZAa2qqHuuj6PQSdRNxrd6rW5NH91cK",
  "key19": "5YCaEPiWRwpqDfobeTyyPMrGVUwVVx9SgtKeXhTZTwsQuLwrn2sHYHnS3pTr31Q5UZBdNi1Ch4rfQmQhAJvcw9VY",
  "key20": "dCjQZSUFG4wqKGaU3mJ3YYU1syjiNjtRVhAg5rqXBuNJDVMd7GG2FAfvTgsewuorjvgaUfPm1EN8DnYQD4uv6jq",
  "key21": "5zP7t678aMuQ2DJQTfexLYx4z9BTHz84YM4phLWMAtRTg6MUvuKKUTnSeh7RkB64BvSNcUmKm7htWgBAepyYmH9w",
  "key22": "5JJLYL4trU2RSTWuF1YP8KzmstytzHjCLbAFyKtgogCTwNsYybwYuz9cEzZBjQUJYwGgR4Rxv4icsP714UQLpYFW",
  "key23": "3tiWmjpbi893zWHctkh9uzSuZtNWdeNrnqwPX3fz4r8AS2s9eoxw6vEP6U3esuc9EYvJaS15vcYhncckFjXbBjyt",
  "key24": "5JzCjYADWTSvRH4rDu5to7iXGMKQ9JCRjiQ2HuvU8u28gQzdzhouZdzfRWNqVVShyyVPTH9m29L728wvYZpqRnxV",
  "key25": "ZHwtz2Qv221LB7MeAYjnUwDhjTcc36iaXGGk2mHvt1QheBqMowNRxUNY4T8xhLTvtVXYggZxKxg2Zu3jHzbLJ9N",
  "key26": "4n4TsWYGDsw7Bg3ZfkcT6tmhejxZVtNuqafGBnZu6iNSm6Mwgds3HVziN5Y4QyAENgGKz317QkwrQV5sM3fWJssg",
  "key27": "aaAnZdKsm3HMa1JUbii5VHXhA6oJExKU2RLVC6rwbngjXT63hp6XB9bLsmFiwp1qzqdkNBjvNUsvAEhR3Rv2E6p",
  "key28": "2HANcnka5wyAcXnDu9mzjYDFVRdfL5zjbjqs449m9KsikoSe8buCz52DtUA5dUv7Wu17PuzhsSmVpATBSaKHZQfR",
  "key29": "2qrYK5TUHb4MqMisWAa5GLp7WBo1xstjp1ekwUrSH8Xu7rDewcxoYt67tKQTamtxFnkJ2B9dfT8uVuD6eLNjq3p9",
  "key30": "64cUkKjwxde5t2sKypPQ5mLm5uFLotuBEMENoMLLNvdZGcBKUze7xQY7CuaqttsAqMdJSfkzacQGpbiExupvqgWJ",
  "key31": "61V2JwBpbJYx8knaBeMQp5g1kxiBdHAdWPMPsbv4LczSjfkAibSBb9qEvph59ji4mjFSCFJDae4YeeKFSXtgyzKE",
  "key32": "4LDcgukdKTSsC35d1mGfMAFFY1g1t4YkjYYw6Rwe5YdPVf3TDBi23enPm2qKANY4J4WJATFbDymQTh4WBPi4zuzn",
  "key33": "4qxgfppmHwQS3w179yZAYyxZKaJR1RreJpERPrycSTc536kiyGmzTkvjqGfuK3E5A4YMU2HikzxqpSE3bsmCi2Kx",
  "key34": "544Af5pfVd4NT6jTTr6Tu6NyQMP5H8HXceZtk3kxKEYSXKNccJSwySGBaRWNxL9BL7vRBKqMHhj2fQgmNXVAb9ts",
  "key35": "3MBR9KvTtdA6N3czEaCoYPt82z99SULPMbRTVLFZTwRoY1koQw4gn4hi8Lnert6UrSfy2uuAsCZzRSYso73E3pke",
  "key36": "55ozR8RMTwKnmfaeNY15QrYkAooiYyRJE6g2pNgjsfRqEcpVUay45n5PK4weNK2jx55JExYvyMCc56oKxmL6kjVm",
  "key37": "5jk6i7BohXaLPSWG32sPKHkvptZmFuZCtzVPbPRZBrdNAgA5seWAw97X7Th1ebZrvdRUUhzyZsKzbP5MhqZegS1E",
  "key38": "28pXDhFnUj2FHN6yJNEpKaPfnrWpv2Cn2EYrpeH5z3613HeFYS3vuc5ygWyJmCVjUYpkHnUvVfEioWEL9p4RFVzR",
  "key39": "5EhvjyoAsdLxX7mNyTDBkcywFWQiAVD13DuDGewnjsPDMfhUdCXbZem1ob84b48gn2pPbZsDve3Mj9cG3ibyk4YB",
  "key40": "4msyEihDE4AQMUdYX95H1eH36wGbAQdmU3rVabQ46uoCJj7CqRk9hUo83ZLTaWAyEEaz8jPRgVWbqT2wdi7QBMP8",
  "key41": "4UAu1At8H3x4kFJqSzaDC5jLNcR5rS581ceBHo3w4sx4PeaEN6diSedTHWFowtMXHG5BipswcW6NRiVNRsmoB5fY",
  "key42": "2Tfi9jpNTHvK4Qkai81X4WRuzbPdw87WEKKRKLyRrhbWHKnfKAPrbTRw4dVfGHmGSWZq2UDMoPAKRFHMX7uxM1vU",
  "key43": "5EwZmRt4syJZNNjN2DUpKsXv5py2H3NxgZ7tJvNpWhChNA32tDrjY22TWYh8LS5975apkWXt8KovjL5ANwX3KidR",
  "key44": "339EWC6XVvswDwuT7P92qHtHRAKru7P9iUHNjPw8TzAaHWC8VqQyv7mXVRHveCRPxxDXuqqJD8Ay69nAymskbPaj",
  "key45": "5i7cgLTkMcqd3b514NPMr6yxp9UPKuQw8ZyFjnNN4xachhTadLgoMd1J9irGmidNpo5vAwKqZbka1Umfxs54HhS1",
  "key46": "4ssbDgSX48BpNyD2Hz7fcU5DNH4pivfkBZjh8ZYvo4BMDmQ68b8nkv8y4ebHgKSgcfknhpuEcJQjtvSd9R9HRDdd",
  "key47": "3kKXF8MjebGCUyRaMQh7DFjEhCwvjY4QC9ereAgt5ADC8a1AqNUvXryrYWHiJyfp9G8W3PYP5BtqHyUXdXUBv9Fc"
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
