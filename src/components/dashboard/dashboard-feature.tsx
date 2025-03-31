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
    "e8gXjP77Niko164kHxHKmCNhUtLn7S2XDVSEf6tBUp8D7iLE3u8Bq3tUQEWj24TXTrCXUp3pBPBjX9qVYsDLR3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9Xbb3BxHTWjn2xcGxeKzLYVgqVgwbAouDLCVkHKYAnpMiuNdcCFBuKPMVqtBms7qVqaUmZQRqMgu8zWuoAjoRAb",
  "key1": "p3M7DTL4B6sNDcBRFqusyUeatbN1fpHZTrMQgGshnMwZCFGHX7ofxwjwpn6kzyZAbwpBot38DWMTBcFMVCmVBt6",
  "key2": "3mwUYHWjHdfKR6VWLcZqe5qzq31nSFL853XxcLN9igp29SD3eadX7YuQRnbqCXQBmn5D4n8s7pVCLThzy3qTvWhe",
  "key3": "2rqsC3HnPK17PUzGRpo6j9Mw8qtxVJio3SUtc2ZJApCNBgPRkfzkQFzwjYpjS4ZBfWRBuEHdnrhwzgMxR4UqYsyv",
  "key4": "2JBSJAonv9MTwc4FDiUMwiFkCSfzBnwhGWj6wnXTnzMuncKJAohbFVvcVF7z9opnLfqBQwj9cEaSVpZ82mQ2yTj8",
  "key5": "BtG8xpanbNx7JEogerfko5S1xreajKophJpVUf283XiE9CXbLoFSMhw7FDbadCBHspkUN8rTCkiChb7bvkDYk2G",
  "key6": "2sRgJc4U6sMEut2JLdVSsPWmzVcnSfqJNawy4f4hqNd36dD5Txq5a86qxBDCLhnT53Hb58Y1mRoSugSD4Y33BkQz",
  "key7": "34ycbpG9cJN1FxUNvmWqUVQ7VNJy2LQges13nb5mmFA8afbjumZayKca3ZLiE61ieTMmXWpHXqDqp6ug97o5KZfi",
  "key8": "61qomWLvaafUnGVbDWXyGgbJcnBjqtToVJK7CmkbbvavAzzDwAwKKTTjdiBrGcdMrwaP6VzEMWBZafoY844cXpt7",
  "key9": "5RVk9HKYgEzZdLUfxmTnq5rrgobB2rr4pYUXBfQq7SJBLy8hU9VDvfXfyH3r2P7ht9eF5svuUXunHiCX2TUE2exU",
  "key10": "3NbYBr3gUaREBKyxPpcW84rADu1XPQLGugdk3NBHit6pKDoQb2Xmnr3626PMk65vL8ZEGrJQaLrn7wH7R4Tm8QA8",
  "key11": "5JA2uXp2VL3dQBKoMwy3FS92CV5xMs4bTz7ydH5gaJvfFRHxN5CgyX7NdLKEGWDHDFLVDQVW4GBXobqJQ74nooZD",
  "key12": "4tFxQosBLvPsa4tmwm1XB4kYCjwMc6vVfhWinskXnGrDYCiC3UBDn4PDv9AQi5JGvg1jv27didHLHTJzApspCDUW",
  "key13": "3pepM5awmuZYEZsq4k1vJB4Hc19Rfoa4Hzx4nVSC21oWnypKuTjxbn11A59Xxgt9anLDqnagR9Ywuq5XaMNT4JBo",
  "key14": "5DVzwtRHjPajtJVo51cUTqkTt59esuLGbvxieVM6CzucVgiRdjetGzJi8fxLFkcJS4TX4mz3C8zbcdF5g4bLs52u",
  "key15": "4fYaJNThhfp19b41EFt11U8x7zkNyZNVs8ZBCpX6d8b7dUymULQrHjcow9h7obENFJNYmfn1MreaJfgMKgffTqUx",
  "key16": "3Rd9Z5sEmoqd9itKwcYQndFC7y1AUwyuyGPnj2W597io69i9XTQbPtevwscSCZHpKtde6i83tzT6LEPuaS2b67yu",
  "key17": "2acdcySdMqxXTNvsoYkLQdvzzas9yjDpdLfaShuP2CWjqVcU4JD74CbfWqqUExVbt57yoB7UyRgA4TG23RF5qxuk",
  "key18": "341chHA6n3P4iC9nCNN3osQ5koUXbFKqWqEPfiiVRKd56viS7RLgVXjQV28hHuhnzn558aiqboaXMheWARjdfRHG",
  "key19": "4u4JgaSJsWUJVxP1dgxANfC9uBW3xmTGYQkFLZ9iry8ex7hD3wUqMYGLEKaKYZNk4HJvpLSJ868bikRYxQz5C411",
  "key20": "4ZDm7v8FrGHKw4gMGDzyvAxRKCoCRG1m2EUoserxnETAgH1jfgLK7mE4uSUVF8HWGnBDCSvjGgA4WkpoiufVp3oL",
  "key21": "2r7HTWH4trSuJDyrSEGKL7HYNwiaVq4aLXsLRQJp6qvsY1DkrBFBadZAztmEuZjb795czmuUNEvqczXD7tCTfcfR",
  "key22": "3NEKaRCHszVjS7PNbTiUYDGhAzgB2moijPjy6exUP1tVeh9BswUSCKPRxeLApKK3yJCHePUQKwwqUVebVVCdw2s8",
  "key23": "6442mDLQSJk4iEMt4jhwSSscKoo6GTD7dtwo8Jk2uDwsgRQPZumGtz1FA8J6sFgHc1CthyFKkEp72uFrCZiBBHxc",
  "key24": "4tLc6TMbrAXac4KCpdfMhCnqDK19EDANjwnQFjQvzziZeb9JV6jJCd4RjD7pG79CGoSVxQxpvbddHu7U9AySvB1g",
  "key25": "ctJ6HfduX2NpGj7nATHnZbZKsQfe2sr76gUwshAhnx4E7c4PVkV8dc4rgNSCZ377Wdwmzfk3bPVoZNs9YS72m1G",
  "key26": "46WyPSSkLwPJptk6AyexEVFp6mAY5dMxsDRRu3xgFu5tfwTd5i7qc8AiJePJQrYHyEZaKnLNM97mnR9sbgNu9aZY",
  "key27": "5mLHH1J8aCoc6q3QhmN4tThjQTxoxiV52dYYjMhEiNtqz1SEYsmHAzKat4X2T9wBZoQA8Nr3iqruLu7XrkAdimiY",
  "key28": "46Zsnf5YmUtmd3r8P62kGD8oPqqhoZMACAYk645YJAqxnX4cxHyRgeLsWU7hyN6xyAW6Zry2yjMZoJndtkzQVYEh",
  "key29": "5erHdDSY3241jVdq7JQXnPE5uD9kxUor2dXuhaET2Kj64LiKXRUY1F3kFLvQWmKehyEB3ke31pyZK9dubsA2CGAb",
  "key30": "RYX3utGQck4oXeYVqdrqjSKWLzcCyqmmi6h8E5DJBPcZsRVRD5oBZJVPYBXiB14vo8H3pKEps2dqS4pgRr5vwMc",
  "key31": "2wX2ik9SvwcQBdCR9ex6kDbFgVUHVHupQQkpaN9i69gZfzZcRuW1vyycaTFhurGNPDVr76vE625LKxzaL4rLhWvq",
  "key32": "GyfUevbnDS8eVSsahe2M5MQgTT6QFPTnYeQwygEcKUdwgxaqe3Rb2EKxdVpb6Kbxy8QD1sMWZaZyzKxxNfihtvU",
  "key33": "5ES2VsaYBs4rkRGZGe2uUvSbC7YoLN777UtfDzSz4whxB2ZYcxwYKi3ZZZZiS3VEaKeKP7ruVFBfbyhvbo2bcEbY",
  "key34": "2Zvpre1gFKkoD5xnSafDxSRX8H7uZGFRh9gR5KA5YWXz8aJhX6z8c2CXzUBjz3iYKK6N8rGVhQ9LQ862dp8kRiXK",
  "key35": "K5BURnndn4VENGeqBNWXPUKReWtK6rGLMvoAEN1Vc5tVJVtQw9xSCi2vW1HjXuHCgTd4CakjZhmDsfoRE9khkYD",
  "key36": "5r7KibVkbEQgH9gZgUzkG2Mvm977Xwgu6DizPvDfx7FW8PfjqCPyyUJ6YXqmzuTzi59VZ6Lav6fPFkLs1UeBLKvN",
  "key37": "2zbPYx8RtcsASYSZC4oKehhzYog5QjyUWKnwYkYnehckxQCEGC2gvFoDjR6zp8XzcwPThCJXv3QXU2jQHE4C5VfQ",
  "key38": "39caVisEG6jpwA4vTAhaj6G8kqyqtZG4FZrXnTbFoDrspHv6VJuEb4j4QMyV8uCPzWAJcVa2s9NkkCMzj3x5bp2b",
  "key39": "5u2cx8JQ7T1y4ABT4MxoZExaSUwxureQe1JzQ8ixmNeV1AMPxQNtvRgmfpXikpPxAeqJq26NF6YVBALp2Ljk3eKc",
  "key40": "62qLjGYSQwMwRzM6p19AicSwWBjN7ZSCQinsHhjAm2nPitHjzQyH2Gq6sSLkxiPUkHSY9GTeinY989Cc382avXcc",
  "key41": "4SivTMyLGJqkHAsERCPhJrEnHQ9zJhve5VmYHSzEB4q861cUvKsSqGouz6zFfq4YyGGa4cNnSCszUEww2jh2XpY",
  "key42": "37XmthdVyC7HeANDbGHbszcH9KPQRAZkPyv9scMKGxf5RY2gbVghPNgYW3aQAYXxQQpcDNviAahw6yaExrNGB83A",
  "key43": "2hS2ahKvK2KHqSnJU1oYD8eXSkSYVnQqj1krWEmaWjpKGd1HR1K2DAgUwZ4fA21ULueEtYCDiCEMKB47SkLZ52u7",
  "key44": "5XL3GAy7W8zJsy11WtMPvf18VSoJ8VQ3QSfXqYq11wMwQKJ4uqiEC6xMJ8eB4hTy4uf8aT7gkiuK3KuNNrKuCKmV",
  "key45": "54PmnmXG4fJd9FXmQ4vg68owvCqbWctR3dQjxmhw2CRCSxBDvWfS2nApSY3wShVkmh1u9neMd6NwaMRJAmZ4X98h",
  "key46": "qUmTb5rQPQA5ZXPUgJsi8CeprkvSthbepkSqPbYJ87ysGtKePNTnnpdAnVs8FbfAkKck2dGkzZDA2Dj6uBuuZC3",
  "key47": "5LpbiKiBM1cfHETvsTGRf9Wa8eH1iBKHbPgjYftRhoEdgVyvoQYb8TmiEdQFbPXPZMDjxHwLf9qjtvzRhb3sgXM4"
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
