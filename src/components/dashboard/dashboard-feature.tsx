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
    "3hu8s6G1AFkTXbVPuDYXJKqED9Khtsh8sWtQed6DgY5KDqxhmmKAH3Pqfxb1eYCEsNG3J7k7XCpMVpGsAVzTFDv8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fmv4CAGk3mMTC68ayTZpZS4gxmd8hxPgHFUK3BYsXQxbPzVs5xTnPnnJ8P9YcKLHm4KiUJ7vzAAk9qwXMqk3J3K",
  "key1": "3zdDHyFL8FjyKJtT8jV7JNoFxt9frp6wWTnJ8NDtb8GhzDjGeq7JM5sSGW5nFMTG4xgxiQDNoZLYLQvo5XYRAYu8",
  "key2": "4T8rAFvvDESNTWDzME9JHrf8zAjxaFqcwg1mWpB15xZneermD5jF8cunF9iyRLxm47VF3iaVjz95bNYLhYLRaGSw",
  "key3": "2EYdr3txEgHbzrm3A1PtVu3fHCkon3AkrN3ptarK7HicB8eUgz1PmVKbWDFS4N7pvanayTCsS4ksCRiDc6YuUfEE",
  "key4": "5vqcbv7BVRpLftyiLY6NfXPhPtbzN29ucRtpjU8LJWZ42wRwenR1vdNXeD3HgR9k7aQnEpuFVzK8mUG44ki1Kt9D",
  "key5": "4np6n1PT7nvyTBVjdh6nuHMVnkTNCoYNXy2VzdYmv3vTmYz1VfxNof2hsL7giEQp7ARWNrtYgkiZi5S3NNFNatVC",
  "key6": "49bqnc3xPGoogyh4enPGLvEhp38Xb6TSkzfUCsKVonxqjnpKHke2aJo8y5wjhuwWyVRzWYKAJKHQ7Sxj6bKAJedF",
  "key7": "3P37QLuSormG5GeKVhMBkPMxGYKje3JYBw2QdryWE8qdgdmbFAmqiA59EAn8zRZPbLV7RtLbVYmHNUKCxdS3txBT",
  "key8": "45QjitHpHZVCViumoubGyEb5v9hyFrHR3cCkrcaxc5Z3Ma5g9ahbbK89jASziekma3tfNkNt7ffCj9E81rwFXG7a",
  "key9": "2d3o4Ax13VZjgAbYV3d1GLwCBvoYZDjTiwh3VFoqmcp2VmyCs6qo2QqRr75ELw56NCqvUHDvV4Ezs4e43bzFuZsk",
  "key10": "3yj62m13BSYvmkXPqxLCGBP3MeQvEURcZApfR3iwrqCiZCrDEkptxipToTnDKpq6rAsPqK6wKUZqzbHWRQX9Ybxb",
  "key11": "2WjjXU7Ju4DVC4CLDdn154u6UkQ68bC4uf5cgNKp1f9FXzM4jq2kidkw4vPvXuZKAkT7Kfq41NKURiUB3Zvyi61c",
  "key12": "4kZUF3U8wQiD6CtC6u21dWAaiUQFhJzKZa8NTME6ppvC5fcZZpvzBcYhKiNjdSitRHnKVbc4Sgwk9bjJEK5DYDRd",
  "key13": "5EbfXwoWfaT3o9KDS9brYcEsUNfLVJ4HFQ6sr159GucszepUiaJyRR7SwXZCHHEa8HR3DNq3CMY2BFDv3jxP6fds",
  "key14": "gBST2Y7wJM2LTCkdxum5hx8RP1wBHZLiPcLnKkaRUdxprz3i21vtJWgrPvUg1ocQCzjQD4YHrNuhxoqVwAHf1Fo",
  "key15": "GMYCrL6sUq32nxkCSC34JaGgihzhjhXaYvbGFwBD7cq1gUbwpxna8rrzJw67kZ6FVzmZhwLs2QNb9MTVKjpUuqd",
  "key16": "3JvVfQ4UPpzjGAXK7YWCk6yFbDxtR6P7PYmehcYMoo5aK3HZr8sUsaVRppEremAek1iKGqAMwh3VrXJujiSbcxKC",
  "key17": "3CAVQ3wQnZc4WqUSKutheU7ocei2JbNPgGA9J49qmBNHRtAU3P2vfh5QKfAUi8NbjUErqiJ3d1JosdPqwWn6NLsM",
  "key18": "5p5Jho7TUDWDCQh3ZS3nECfzGH3Ncr1aBdNxFL3o6fHhQWTzP1oHXPNZJoh6LNR5hBCsaBcgHHTKRimctfAZPpXJ",
  "key19": "5NwHEWzQN1WE2EVwyhxaf5vWbaDxp5aSnPQd4wnfngXp4cSJdKB2eGT71h9jXTUgFsy2iu9sKBvPWC7naoanWr8W",
  "key20": "29KFmYXRYj3pZgWvP9iLfYeTA6bedeKwzgdJTN2njh1irPe2YHjCqmqepsjqvgpiQHqAwP9bP9Nmq8ArhxNd8BiP",
  "key21": "3ByzHrmCe7VtcgD4u3yteoz47yxNiqic8MiFUDYT5ckfigqZ9Vmcto77YhNaHMm4MMHoswA1SXr3Hi13h7tfYXPv",
  "key22": "3bxvBGiGnnPCz6FPMzoFtBj35UAndpwVmJgXuLDanW8juE3xMWABL65ArqjfLtB3eMNvztKEoZpDMpBvumiP4zsj",
  "key23": "2mReocjVwEZBpocqJKFxDv2jWUjCjqd4GExoj76avd3QzQ4kiBqrnyn5LKRf27ogUHAC8Kj17G8mYWWn5ta29RVs",
  "key24": "5zyYEbDarxp2pVSV5XMp1gBXeU57i4VqDhFr5cgnzKYWtrE2oAHdtBu8pKEMAsEqNsfTQEThLJ57qnBerq5KBmoY",
  "key25": "2564yiFEgRkbQzYe7HoJaLpXQFcx73JwTgD38qsnfZWw51QcRFwksnWeR14zP4moLY41iTuv77fs2yB39nQZNg9y",
  "key26": "D9e5YUHxTFvmeu4HoQtS2epUN2MLkJ9asi4pWF7W2UV3t1W47jqRR9iT2ShwYXpLwUfzwUhQctzqsJeRFuvSLai",
  "key27": "487rsLgBy3UgJM9uCWFdRxoeiBJE1zoVCP8AbiyZtvTCr9wAoWgcZHVEy4i9Mq6oi9nrxVaQNLgAj9gVqb7Hcmc5",
  "key28": "4EZQWhgPGqMjZJkbUoEtVLTpuuVcPxCnHqtNhwTjJwZofh8Kh73rr1y8c3MSQfZ7ExmwfYUkMYbVsTKgQzPr5Dgp",
  "key29": "4Y77LYHWWz4RrorU9vvMxZGdHcfCUy3yue9LNHvRi3JgvxpYedG4CGzNd3AUaK7usCVjdCCqVGLxobqiSymSBuoD",
  "key30": "48BMktrGAHPRqRWREw4h1po6atn95EAU7AD1dQtqeM9MwVDSroa9kC9QfZ2p6dEFESxG54aXUe4ytqmiVfbE3EeC",
  "key31": "5kEzC3ybuTizqniA6dVF1XnRhkG9pZPPbRgq644sijS7JYTPuQ5znq5XXRP2nV5ugeUaF15pBzLxzJQzcHxgLKXx",
  "key32": "DnG7vEhsqew3inDzpSo1QwkZQUkxSQterkrD3UMChFqZfjgE7CkcXndKqhAtTiLYWWc6j7PSQFfCgHBnrtA1qpZ"
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
