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
    "4nzPcPGz9wq2sqxahqVXcQM3D9nu3GQDeUhPSehA4tBtqAGXbje66D4WsEt27g44sBZDhmQdNeiRrEck2LTYS237"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25Dqgm6XTrtEeG7veAStqvNHyHygTTmyCnPdCKkJnyDsfWSLXbtckVPZpRrXztsXwdRowZGqagLzvyVk75WpMn8n",
  "key1": "2qDxvSPm6TWV1Kf1MLzzqAW3SDpbuKLLKSKKqoS9qvCG1ohvLntQEGWpoeZ5CbfW5nKV4quW1rrUB3vkHHDaJDDC",
  "key2": "4E1hRMefySsepeBxZYRwigzpzrpmRfCFHF3TN1ua48RA7YxEtZ1n5eteSxQfpRrDTYaKeJFc94fa1MoGDLt7wHtS",
  "key3": "KbmuiDsrE8zu7A9gciU5sG3Wi9W8v7NG4nBBurCA2DdUDyv1qjCgHDwQaYqA8q5NwhWdMXCQbZVbESUgiBqy1cM",
  "key4": "2EZf4teJ4VDqBYccNMBxgDRiTVr9v8PPMXevX62Qm9RAWHes5WCtruWtju79pXSeu5fbzJyw6NX8faW1wM3AsV8E",
  "key5": "5RXgNN7Q6TcioaGP9WHnLRxJRrV9vJReXBRYkC1Aob7qn7RaEcpxfZK1Hau7CSPTDKZzdzJ1oyjvESFsJ8VZcpK7",
  "key6": "sVk6GL3seePuSFrQ8gGNuGFdw5SK7zVsyCKe3exemdmwk5QdvVatyiii1sDhwX4AY7Z5ngJq2pCexwrhsqNkg5P",
  "key7": "3EqAAH2icBCXbeuSBbGAJodfn4TgZdXCwu3HTr4Z7jzvVaKhsBy72D4GTam3iVx92QJ4Z6aHvuJrKmxroGDpX83M",
  "key8": "UVqZHJMCee4QELguj5nddXc4hQwHu3w2GLwj3n3RS7Cncuefp5cL9DHiYAVmv5gph1PvuDLH5XBdMEdKNhUWA22",
  "key9": "5uD9GebGCYsXUjGE4FQYxmBg96fmn4V71bqLsxR4nAJE9u6zLaDhNRfFTBkPdPEEFgYyqraXm4AJb6oGJ8XPXjqg",
  "key10": "3V3m2TmajBvw9bcVTg2zvg9ZA6zehJaB7mEapr96V3gZZTF3TQL8UVqoEsx3LBGFB1Qyp7qFf4gaYavmrG7q3KxF",
  "key11": "24fydkEwGBE8UyMHUiGwUcXASBg7wCNnaCjA44z8R18jffpeqryUB1DJd4nPUcPgiotVgeepsAzDPMsv1qooc86N",
  "key12": "ithNh29XbrU7REVYotwFR3RQQafhZtyGnGNtEEH1fNiExdZ33DjfqdhgwKPK47Dgbd2XdHxzwDELxESuGYNd4G3",
  "key13": "54TwcSJSYCdBBL1FmmEMhtSxD84BuHF4UZ5ds3B6eY776tNjcW6AJrDZv6n6x8WwU3YryDeCy7QUGK7adQ3e1rUY",
  "key14": "3zd711xYVM7dExMjvUcoHPUPjeo3XW6EkgC4iE1yAfyZgEkgRTctXtzoYfL9RQXKUyDyX9CetQUxcu2SF5x6eA7y",
  "key15": "5MRDdCT1mnUS8KuC7ncFXMCjpkZV7KEkwzrGUqz7FHRYqvxN2Zu3GpKs7yS2jLyUxtwThm1n5QM5At1koRJAKbZH",
  "key16": "56b5S7HT9fSN6yi6xwnmFNrmx2CEJWobE3mg5zdSfZANrQJp1aBCd67SxWWjU3zLFXHqbsgKnyfDmeqxTLjJUfQ6",
  "key17": "HGTysjAeuHcw7Mu8T5KS1awPnu8X5LEpzXvaDM8wPjkhr75gGTgtoVTpPWzWeqkdX9fdVnqA7rkJ8wKaaaUMjYz",
  "key18": "3mtrxPnvBffyPL9grEZkD8qBXneVTnodzHdH1e5eSHdk2nPgrZgF6HmnD7yQZChMFYRNRpbBf5T1d5PFZtoWBnUT",
  "key19": "3QZsxTejkBnVDiLqJmh17k2pcxrDLeBf99M6eZUSKLn98sxqHvsXWcJ3ZJrvgmEHBjjKW1gvsP2LMASP4SaDDkUg",
  "key20": "gy2tewBg7pTER2buYGJwaXH1VQqmPPuqR4HjY4yGZRvrw46DJRv1bJ5xiR1CeUs68enp3SxLQDcqb1QW1XQvPte",
  "key21": "4MKNhDWXSPs4LqJyYypZ8Xr2EoW8RW8cZUwkbpGdCKKZcGt4ou61XFzemz6CPLLfhzCHhgaN3VwdNefc292aBFRs",
  "key22": "5DDtVEm4ZsLqCf9yAho5qLzuuWTx6bdVWAXLLtxBUTL7TExtyn7CA4f3uDoDyaY9iEwG1gzvNbfoT1nfcdFmHSj5",
  "key23": "3gho2DFxshG3HregUzqfMtfMfJR4FB7uvNsteBhgYLwwXFpbJzAfGQwGg2779DXvKQtAGUqRs5zrzo2JoVteMi7b",
  "key24": "2mqTi597yyCerezBKbc4tkpHpGSEm7B4Ni9c5jYCknxAmMVXGDfMsX5bRNTymraA9epYywVsuxpeHuEDANjADQDP",
  "key25": "5xwcnCdH9nTKrh8PQQx1PmDMn6Ag3XEsq9C3pxeisbhdMusr4kZ8R9w6FjBJ5iToV6GD7rs7UuZSmHoJ1xq1FTA1",
  "key26": "5d6iPXGMcpa9S4SPXb6yP2wkv4XsGDzqv35GL5BY1LPSftfQFT6LkTEGSvYdktXG3GuxkTRg6gzptjb3rPRXWQgs",
  "key27": "2LjNz6hrLbcHDYRk96xqWNzqco8s5bf8WS55MeL76GuVWjSfBPLR1U62hAUbQhZyYDLPo9tkLp8TdRFCJVf8f8AV",
  "key28": "4SjoFWhQnpSSFvbunAnQYUXjygmB4ptWDmE4xMLdon55fghanwKSLfvErgeD1htwSY5UvwinUFkqi68GTxPQfVAU",
  "key29": "3FWHzM7XvpcZRmRQQ23G4HCqUujAZyTsZFPSQ25aMr1pucYctQqnYSK99GbRZwoLrXH4WaaRne8wJPs3tUyZLdcF",
  "key30": "4Dd2ed84uDRtBxP8oyPqzD4iK2tBbz3qdzinZ1kpTbFCBdyLcYwVJ2EGoFNFxqPy36Jdff4rZw1ooqLcMz1RmuyQ",
  "key31": "61NN9P5DKjHBoqsgLHrB49475kbPE5UGvYSvomz6HdTpw2zVWVsB9t84keouwdn1p5QtPf7eBpZX1h8d5sszQR3r",
  "key32": "54bWKy7UCNR6tnUPCqqhuTRYn67TChUDSoqKSHtsNaiuACzgJhaK1MAK2nJEeY643E4keMooY2AdK1E94brgfGpJ",
  "key33": "4MMQBDwzDqryQEF9MQe4YmJt6kg7BWLnSaHbjQj6t1mSVmVyNqHT6CPBnWzEs4FAcBXc9AaJjyGNtR2j25HZ5q1v",
  "key34": "2asxnLRAFunLAQuwfHbfBmqy5isxy71sK1U93kdX22yshcmdpSJqUmoMAxmTnUCSX9oSo8uSs7KgWF9mNjtTr7qR",
  "key35": "2p3pvuUWnR6vCtJhKemtrhsi7Hc5xePjHg9JuPa9mXXvMfKf5yitVRqciwAzAJUJtnaUPZnLC3DmjBVf44pw2PM5",
  "key36": "2UWFm2hvRk9WCW7ihhkZ8an4pVmn7EjzcSNjznVq7a7rypP5whcjs45GvzZHSwy4XWkbqLTbV84yXW2gFoXwRgP5",
  "key37": "2MoQFXAivvQbjU9RNB4X5MhTtjC9mUxKGyeXGovJsUGL4QcTeNJ4fNTBrDLyddr9G6UmaVzjbyqGNZEqrnbHxckp",
  "key38": "rGkFSpHfaVVB3fzAnfVfh9mh5MnfaQrCQc2h69h76X9zYbj1b3nBoTX9nZ2PF4s34eVBKwfvtjyWEme7YxXMWbQ",
  "key39": "nM1RGMTkKkz3EqfSSYGy6DaicuiFdZjpXQDR2mrcbJyRBCoYyM1b1ZKWabqXmjVznDaPLvZHsokcgmiyaUcf6vC",
  "key40": "39LuVdpUssr1pfwnPu9e55WCCWcMThvZQZHwQ9GKczkHDPYZU452gsEmoZfFSyk3QAhHVkdqi1avuk1i8YcP8Maw",
  "key41": "5KefhyfZBTCVGBQNhCQdMEe7KFtcVE6zgkK91pueYDoWhAPcbcDxMjnvvrp2HiF5sxQ57cPtNyVmDPQ25DcJ69qu",
  "key42": "5Tvspkeud363k8JoS5ApVcuPxf7WYjXW8VFfS7Hk4pQa9PTXgD9Z7zsvz8G1m4QYfYJjEVJnf1CD6VCu9LQxE8ny",
  "key43": "4bimrKX5pfRfxPwR1Xytv35zAm9Hc1irKQh1MF5NqVFtnuFZzir4HKB3G3eDfBrooHNT8iJ1VkKoHHfJzV7qXRgg",
  "key44": "3auYtcGmdzsKwVdrc7Fbge1Zod3jNbQ84zrYH3U877P8oRHz6M63cGfhxqxZdCNCbE6YwLAM9xAnSJo4HrAUP7QL",
  "key45": "ALYRp1K9nHYfwHXWEdGyrLkSc2cLtdDteezmrQLmqsv42AdCvWZdV8K7P3wSGY8Vj6swkpWuC4grRf1ojM8VrnB",
  "key46": "2SN5ufA9vnobjvzLBgJ2SWgA4LPFTRfNd9ADGdNnWhtHzJ48kZbFGvyaCockcjkwQkALn99bWz6cYrGkyfc5PwCN",
  "key47": "3ZiRVTQzA5wjBZLLNxkmb9C98yPf3cHE6pwE5JTPc8C6NU45YsKQcRSyHTzQerxpUiP68azXNqWSuMHbCFJUb8pa",
  "key48": "4E9d3R2YSTkiMMWiY9W9Md5qKpWHnn9hbcugzQU6X7F9Y4DwS7S7P3D4tdhPtkT5UaScXqc1i5uG7VyKDifpJXur"
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
