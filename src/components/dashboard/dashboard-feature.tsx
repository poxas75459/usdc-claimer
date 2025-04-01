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
    "5zYcwNt7TzQHa8EbnSCMecNFXwXTtJxRHCYi7WPCYtft2ZAfHk1mRjfw6bFUyBYgkxhN1J6HC51bgvP2BQKyvcJh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "224QWcSuq3b43NdXHqpfZ96djBD7jSfgRx1kG77KijFXwLeWNGnUQ3Gd2wsNuXX4xP38AmPZGSFUfQQoJwae5Mdk",
  "key1": "UuXZYJwtRKn6KkToMgVTAkCJqN9tP8vrfq4ZN1o1auvmiW55QYV38ed2LNStTpZn3FcNPjSwmhSGzU47LJzTvtJ",
  "key2": "54EWBgRKHvCHJ7e3vUG1zsQAYHd5vdF31xvWwoCvjqDVPypqrM9DRNdHVbuYaBCTdzaJsMHVJuHE6Z8hUp7sCeea",
  "key3": "yvfrsbNJhLycttbzoXckhPG12YHDkd9GKxmQTzxTH1zTQHY8KNrg1U7WUpd58qB9VS9M1DemNxDPzhkBuppnrHf",
  "key4": "5KUR6peBmuAh6VuF7L55QQv9vWmkcAQGQrmdTxFEugggCtcygPkDJKc34MQ2Sfvg1WEsuCzhrr9iScu1yNUJij9k",
  "key5": "29JhNmQxcYCZ1DTVWY3PeMFuxMngoXu1z1TRNKuGkYf724qDEQEFwaKMWAgWTCbEb4BUhspEqDKe9Nf4E8TzfTrk",
  "key6": "2f7RYKE7PxN8JQhjB8FSyBYTtxxu3vhaayyRmaaSnRqLaotr4ZrfbWWJMGchVCHrHA7ZFVfYZDqMwbwFrDut8Eqm",
  "key7": "4QaWDP9xe6SdzNJEY6CtPXhm5asmvaPtdDPYQEURxMwqZs2sEqs68QBdgK8uPaz89KELTE9Vh2g6MY1YsdcygwAf",
  "key8": "2cmXEwsh55sauQaS5uKuSZJcJNQXPpQ2NPvFn6PcH781TLB68knxE1mq8Aj7QDoARdRW6CA4guGKppmNu5uA1i8Y",
  "key9": "2ykoqvd3Q2bqTCLBMZCyGduGcv8fe1FKcfRnDVJmDF5mh4xx59vAwz9vfawWhQ7UFH8bXB9AoEnw8tzQie9gvw4k",
  "key10": "4MatDcH9Y5guGga6Y1K2y8MXm3KB9rUqyHM3mvirRcLDtjp9umdXpCjLAVr1h7FkNmNowdkZz72we5oaQtnVexC9",
  "key11": "3BJ9uogkfzqZy84uXKGaCrzpEtUaRfvjf1Vk7c6YDgqi8Gp9jn4oaY1c8G48KX4qm3m6oqY7HoJmhEDXjTz1AD9m",
  "key12": "39F6U2Znq7ZJ1W74i1PGP1MMucEWyMvwTXKubNbiGWXcS3ma6rWSehnWVjDqGsYaJg8J69vMDJNV1qY3Lhhm5uaD",
  "key13": "59S86CsvSGGXk3G67WiNXdxZip7oQC1EPXTjMdvz5fo6KA1kenbZFXGMWiZJAtm8amfk7vsQ26WMaJdyHdwFHSgi",
  "key14": "mU9UStnXJib1n8tqGvCvJWyWLfM7DVNPCvy2CRr6dwkfpuaByhWdWScBAyxNduvSaXMywRdcshARhpDjwL46fd2",
  "key15": "4Vq2FRMC7SAt28fuhWvzrtYSqbrR47CGu6iisp7QhUQ4bumT9paZyx5Mxj9pBMp93SkLgXNs3oR5zUbzXsEgEnkE",
  "key16": "4iPis8k5AqLwhXShwXXPhY8kBQw7YTQdz2pfFYu2xVmHXDbeBWhL1yMuUVY9wBhBn42wL6HN9Ryn1MjY7P5r8SK",
  "key17": "3ws92FFtZJYLDdFoyNGGMaLWQuhbJPWezwttkgy7tP67r27dPv5F7UNy3jFCRGZL8ijVis82oEb7CFQVZnHyfJH",
  "key18": "5zLYuCCPCwDLBcVuKbHgyZGU15WGFAgShmr6sC6XQcYKpzLMy71rBtuaZkaaGorr5XCvqbeX2TVS2aXKuCX7sRgJ",
  "key19": "2t9L6GMD3iyZvPVbDWz5Z12i2kqeVHeQCuPBbmG4diWumg6upDAC4QB8EbC1d2YyKFffpVFhTFyMBq1khhiQRmqU",
  "key20": "4HH9vwBeTJVNvWimi48na38nvmnMt8xmffNpYYCGQWfoku12fkFcyJ7BwpV4GDW1egwQuLqtSGrwxX4vZu9zAzCm",
  "key21": "4ZqHSQjwgqLxXYKBYfngZ1eG3rmZizubFfRQPF8v4nGJgqDtVBv7H2SQCZ59aiH4Bygsp3rkLoxiy4zjFmFTVJt7",
  "key22": "3rEStbchpYMjDo7myMyEtFZPFFa8fX1REB4aYSCtn6ZnRgc71HWmy6sEMZEDdQ77zLxXtSwZQ1QccEGbNBGAcpCF",
  "key23": "4CNyh9boCmjVHMq7tAFsVBjXDgfdwnJfQ1kU3VsBSquQzAtEiQHXrf94A5zC6Qt7THipmPMMCk3VcLermuAPLSQH",
  "key24": "4u9X5YH8hepVopVXLjFvYZJ1sCBMxV2JgpftoqTQXK9F7SqG726boibgytetBtbRUC7jaGEhueE3oWXhshmNjzZZ",
  "key25": "znECKNDL1ihU747hraWnqpCQM7scHfeX1WYoYmrVFLYwjuWXmFAdzVwYvqPw3DovATSf24ZGjh2tvPHJyD6NEmA",
  "key26": "3Ti2Mf9F5hf23UeaFgdzn9ACwzqUHTL9HX554CCexAVLi3nezL9Pr9g1C9xiugvKG3ZRcjFpURvNQ17KChKXHb4U",
  "key27": "2ZMojkXwFExV5Tx3264B4hKaRuWabEG7hX566p4RBCTMYVyVKhU9gs8fj5yoYxm73Cjn6CJpNdpYeeJP2Vkv9ust"
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
