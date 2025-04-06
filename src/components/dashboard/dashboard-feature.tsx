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
    "3ynfYjk11T475tbuPDpm2eQSn7JAKy8xCRsZRimTiTU5MSda1hUhSmZ8XvR6gSTUCKjF2zXsmR8DMBAdxShHNTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mvsZKBMr6dsw4vQwyY2EeTwRLaJQU9nUtRHeciH3KQAgJan94swNNoYSFNmezzqX4JWyXx94hFGtu4snMGTkBHL",
  "key1": "2f4V3MGQgXQxdky93q8FE5dyqBjb58X43Y2BZ2tW3xj8mWZeScPVWTUgcLQFgS3yBLfyZh4AcaCz6Pfrv81hx4bP",
  "key2": "3X4PJiEtATmb3co5fJ2Qfy2nJQWrv5ruSkiUs6r5eAUduJmZUysmq1NDxmRKvBySndxRZnv1rn4FBtKt5cNhAhbr",
  "key3": "3BDjfXWWpX4SJzjgYVwQxHnXmFc3Ey18jk8v2EiagrTt6FV9UkZhKQFAkiqrNf3DGjpmUSdfbSH8vUdW8vKUib5N",
  "key4": "xoK1UfRjoHuyhDpBakCzYJgTSK5NnPbUGvoqjUctTkXATJyD7W5VUr1pKn3RZ95C5w6hvyf4NBbhGD5mvUBcbjC",
  "key5": "EtnRGNacC1E4hZ57EQsgd4fL7XSCcnkahgGkaa27wVTakE97rKEfNoxn9R6QoChgGufYD7aSnGxWuSDvX1EFNbg",
  "key6": "2W84TmNhVSQxxSxmhuU1RNJRJkbo5VsQy4FCdPq43VkVY8aPRTsXaTrQexqN9kx4jSTZpqwSQaWYxBFNV8XUdBmH",
  "key7": "3qs9xFVJJjofuPVq9u24iSTso8otFXbvBaSLiiUoXz133rBomjjFyN2mLYQ6dD6jPq2tjLBGpzhLg7mndTL2jH2P",
  "key8": "5Wu2upL9Fb2GSkDggZRUePZKNMTVBMnMiM839wHjuL8Kfh594GBspD5x4jYQXJdjpXL2XJHNy2FiGF6ty3Dk2epU",
  "key9": "3zUwoqdJkg8FQQsExYZMFfzkxrdm8gkQNUMnuDE7FobKQBFF4dCb2NXvcFuWWxxKaobRCqLwU7AUjBu5UzdzNsh",
  "key10": "DGSWhYBVEGfZLReCf6potBMmuJNpDwcPJDEa2K5TTj41Ddxa5URtcmHFhNfy6ynFgsxwBGyFWAgDgcZiZcPrasH",
  "key11": "2aokLCGsgnuXwKzpEtyLaSeTLqsXcSJnak3onx6ruaNgrPFQQtgAH6PWZDNZY1tXQMQKDvCn1Df9dhZrsNbomXKx",
  "key12": "DG3jAt2Qh9TH8xmJgg96j5etSBZvQFp9kLWZVmf4xP6ue1S9DqWGtPusd4ZH4fhtPGqhzSzqZBDhqfGeH6JrVSg",
  "key13": "5QtJtR6vWJFqUANTz3a1PwA8UvEM6QR8Kk6PkrYasKHtByCfdKhoG5ENvfmq5nhpYRna5FUi4cmEKWw23fmfh1oB",
  "key14": "f4oRXpcUhtNZMT968a42aMWnv34GU5KHEAdMe9R6J4dWr4aSS25v3UsUQ2oCjoaM5Enqbimifvf5Jtjc4YyhZQ8",
  "key15": "56rufDEnD3Cx6hLXnDDb7zA99sDMxUJ5iih7JPUrh9JEXnKuvNRAsJ27zsh9tHQn6oRKCZVKMCDVdYyDquXQYJQR",
  "key16": "5nR1iUWEu7oajwfc16v8apew3rhuYXbt3gcU6D2fjHKkm7cVDKM4D8rSMLyixdLvYjFVK8sb7WXPfk4FsDdBbkMJ",
  "key17": "4XA1nDxWrpYbSKdqh5gxXYLAP88MdP76DDeZipGVgtLzFwq6o83PTK5yqJartk3W8a47FuFnUfUA1aFCNanAnKR",
  "key18": "qKoXVt56rFYVxVWeeHXcovxWUrkKFdY6bPvRnVtW7347txw8q1CyarxrCVfBUh8cdPBwKMTHjvLdUQH91bMA3Lk",
  "key19": "vcT8cJoEuFdajjJY1YZzUKAPhPnhtH3uBrksACoZrLwvkZCQEDP9gZJjyhN5YsjuWZjswP2iG7hik1HHrjuHfyX",
  "key20": "2Mp2MNAg2aTKo6j8hNGwj1JgrtQuyzwKHZDvkNMmftxDq5x5RVr6qKyDbVVxezrnN4wAK8GBmqtPmf6akqjD8vdp",
  "key21": "36bXyuYDjL83jQsVshkuWfqVTCozAPqweTBskPMa43vgwKj9rMX216ZLvXKZoT9yWxJryQFVs16bUQFxJi2jwHAm",
  "key22": "59mhQ2ghwJJPkv8bV2RyRZdZLvogjpg1fq5QoXVaAmBqfu3toFvBBudktNBNBq86daCe5K9CTrikSoE9xMxr7RKR",
  "key23": "2dKkYeyfWBQQogKBH9s4R5WvP5dqkcxnQUXpRs4CXEwHU8dZzbeVquxbwsLjjL7Ngbi4vg2wxabHXiYjDpvZK89t",
  "key24": "nLk23aKcvPniDc4PmmZhihuZGTBJzadnRWD3Npb7aGzHD1jcGvogDDWWMxjV8YdExfdqvDvPbvPADCRgw8a4rbb",
  "key25": "U3HUrV6RCVDf3xxRwBgVK2jDZfZ2zE84C8xmpbYVg4ArGMewpx3widuYFXmEwztXZ8vyiSzryCVAuSAhEjdVPWV",
  "key26": "WgHcenPJiVLePdGVdQXqakDwNGLegWX9xCzMvVoG3CAeqpZJFwGc8HLmFRo4DNWip3ZnkCgYFvFCeC9pb3cWqoW",
  "key27": "2oAh9ykCr7uXNMqYHGvXpNPmDGSjGgTnkuyZHzGRAzMRm4hJfJidmc5aiUeUrm53JgLsLRnSofu7tuA6dqZMiphz",
  "key28": "KWjk5okppLtWs76Dd17Mv8F2jHKW1TvqfpEw59e9JuFT5geaR8jCDCNo8csCesuNGWjFEiL1fuZd6jULc7sd1na",
  "key29": "4v2tBSWyXh64LNZhydta2VP2eoGv4e6zaWPmynxYmqrcPQX4LJuibgXQCK2byRLW8pQ2ABrWrmtCjicSDXrsznW9",
  "key30": "5J2N2HRycNZqAP3kZS6UERACn21CbMCoz28iG9UGHuPdpnSAVi22b1qAR3KiFNi9ReafMsoTAAHoksN4vqQSuQtN",
  "key31": "3jmk5uuJzr7cqsmHQjyM5qkv6jgLrTf3S6VfME2SFPPi99Cb3FVcTjnnNotWWa7hXCtHcoqhSkFAPqKHcigy7kuA",
  "key32": "4uZ5DkMfybBE8XjjZHnsmqfq9qE5HN9S6fDkeHt1gDKpiY4V7KEbgA1ThPE9iEV2HEiGLcYsaJskWSC8Dq72Rpva",
  "key33": "37N8pQhum57UmN7ix2ZDoQNTLzeLNoed4fwsF5PTSLvVg9DS5tbTFCQEs4evP2Pnm6ziEpBWNC7sWXBPDaGSSRUc",
  "key34": "2vMzZhwyqEm7LeeyGmUBGNeJqudhybf54hofBdoYDFaNQSD4E1jKJyhNsUhoZL6xjLzFL5HgE2x9abNi9zEyejfr",
  "key35": "4YQ4wFoyH7xwhmMZwRtbc9NGyUGY4cpr5SEMjCxdmMWB1s4VzjpZ1TnATRUwAUzrDvVj4GRrzzZTxvre58SyRDMB",
  "key36": "4yvGkuAm5NJ6H8zU38JPRgAjNB4SQkpAGtux7vBhoSJ6ZAZW6w6uawuucBAeKJqakksVcepX9Lk6rGWdFp2V4bp3",
  "key37": "2aqLvNfrqYthy5rf4VBPDVDVrbMe11H74D6tQKcGXZYQpCLPeaxXmnXTUtwoWRvrdujk8iL3nQjC3Zk8Usm4AGaw",
  "key38": "SS22rY6fiV4eEi3Apk6vhqPsyd19Gj1TCVBZx3iD8aPNAZ7nQbc1WZE28Cf6NbikGdc1vSGtTEDmZJeeLMMmX4X",
  "key39": "4G9bshA5MHjFjEFgrJnuNMuAREyaYMaKrWminLC3ZqwMzL6Afem98hTDqToJRsx5LfW6AMpC2kpPcySjGGyNQLLG",
  "key40": "2mjh2E9aMxqvRB9YrpZHJANaKSgvxMHGX88yx8kPoEeaJHGF6CuKpnLTu7Q1FzWUBxNM9h8HTvuBRk5hqHZPU7Ch",
  "key41": "5jcx1WASLodnpvxwYAdoaT5wYvrkH9QmvnqB3jcabWEUroyxuBRsiG8vJRUaTSMK11mEKP1sB1cDxoNL25nY3NQe",
  "key42": "VSSLXVbTFJioCGebavX6fyjjqaiujGiHeRtjcw78vxkXzrUHwoxafgMVqZxYdxhFyzd2Q3dwwirMwBo17UNviCH",
  "key43": "5pV7PZrthb87s9zTP9zth7NkxijpBNyX7ZQNBzyQG4RQqzJLgFgGk5qsSSuNu8LUxmXzmENdLqUuyxYHygGEPh9C",
  "key44": "5esXUCLUeu3XSYC8ue2DJD3ZWhgvd1S2jzCsxX7WXQFcoBSmfC1DCMT2ZbgCdvfEoDsnRnxtqxrc12MrCo27VsU6"
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
