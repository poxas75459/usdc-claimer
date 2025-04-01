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
    "4obYTLmZL7DGu7xUfBQAUHHBzb3YnGryjJj857YnVBL82mH9BGGbM45E9pJJkXwqRsvpHY3Zg4DS9QXzAcoGAQGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41iqrNNFM9RRHSrQn6PXshcjbqP3GLXQD5YVPsfBwdXH43mD8bavKP5eoE4jqLHZvEsUFWWCkZD5XM4TQufio53j",
  "key1": "53BeujdmGPU96cHFinTWkJMBCKwhDwf5oZQa9gxFqr3ZQQmCYbNBLqZrNX2qy4zaEwcTvrbogqrvm9EfWNuf2D8i",
  "key2": "4uoPApWShBVRse7z5whZjMR9fnwo3MgDZziUFaeoviUhRvxTYwTDXbwWzSaBdLh7fJrt2YrM8c3NHCmnbB5wa36J",
  "key3": "29dHkNQyKZiqkHaBfbpez5TDMNJuj6zKsadBENgxj89mLELz1pTWYVk6XHD68NoPDbnq2Q5pkgDMKzykdP5bK6Pm",
  "key4": "2S9KovpSNTCDkQHu6Skrijy6SwdSxJooPMic5xWjfH3ZZ2cPT4KxtxbcmHBY1S8K4jg5dbw6kS8imZ9LXt9nyyWM",
  "key5": "81Gsj9MCwcAbZa74Z2oMPaVm3kNak1KWQFefkMtygzWhpJCPtzssUtbjQi14Q1dxbttrgntWh2Ej2psXDYW88oE",
  "key6": "585CLQKgvf3cP5CBRn1CLso13wMmg3vPVLT4D2MuzsrMjQMXcTSFKyV3QixVKbMfnTZgpAov6vEQz5qaK2YtZv16",
  "key7": "H8QrYQRtkBVZyHQ2xBUQ4STLGQKKDeB4PDZyJB7F9Rwqzt26zsoMGJR4BDRMtnN8J8GZseBygWc846h2gyjFkm7",
  "key8": "NderiWo3ZzNMjKgQPBGHCngrZvyenr2ZgVyYfXwXcjqHCSNXDsLGdUXzLZ46DJ7Par24xXuQ6CJxgbXBE8bpLD7",
  "key9": "4B1UWaxpaGA2LQgJni5WppfEsZwCP8YGWKK3LDrYdNbCb5BvsJnSnF9rEhffcRuALNKzCL9HrxBGSDUyF7xKmeFY",
  "key10": "2xgdSDi6RquspbTDKY8aAtsMbwXhUjSAymbPBr9nkQBnENtFxya6GEoXN4cj2e1wHkxsLkaSG4hiCodwiN5iAaNL",
  "key11": "67KFeLhHJv2Y5KcQekYhaBKVpdZE8ZZizsiP464X8kQGgbxdVXAHTsAV9hnJacQV6pni8CzvE2M2ZKFH1mzrDKnG",
  "key12": "tgAbvrfnD8gCTzrP1zuFs1i432FrPvMuLQUDjYFJraFxNHLDvb6uLc6XizgJoBw9FWhDLaCNG131Yr3D4s83um7",
  "key13": "4gydxM31XHu3EPdKCQZunTT6zinEBa48x22ZpTRRoAp9MCTCisH55oBAVogbNutLkFUiPzUkwKti55dCUNzb756g",
  "key14": "5JjFt1sqdMo2uxmCYGWweyNhCYx8bd9VGfHJ1wqxWDrzAdxwDNKojMGKwLcQqQtn3VCEHsottbyRXvgSoEGwaNzx",
  "key15": "3RFfhvYWtZoFezVAutMNPKDDtWuzJwAb6LFMY4ixm4HNPHNo3f7JhMzacAbjpe8z7Vft8KcJQxQuK8hr7oyHhFwp",
  "key16": "2nEt9f5vKJia7eCAkFbNh3FnWHfR9e3ksCSGh98uzJBz8MZpgLv4oGwWYGbCjpox1mAui6MY2hp6ZD8xMFfgHXoa",
  "key17": "2taf4gpbxXbXfb8AiNutxUfcXK9BttdsqTNE66LnfMUbvEfNVh7sA7rUfpuwgcmPSi71cZK1yM5Tbtp79WukrEgy",
  "key18": "agzNJDBvQiKT8su3bfTC1Dk3m5H3bL8ouNDkYM4ZrXX7v4VL6w6JuzDm4UJXFP4MVQrJFzBN1Es8kRDWvRpZWmU",
  "key19": "446be4G4zDsrKE7p8vJbjPvf6int2Vpr3rLYCnoCmefKztrrfSNTmFR5JfV5vnarUZDUGP5M2VLNTasWrtyHvUYX",
  "key20": "4tDM1HEaeqwnyJFYJU4nerZBTrrU9RL4XS4fKKceL2V6mPKYUyrezSyYVdHm5f9sLnhJGhjU1ZY6r27GGcko5WQ4",
  "key21": "669V5npqW8dwwYNsefne2odWm8G97stwM9N2eQqKKCCc8q1Yb1Hx1JN7CSowwAkaexcij6oRHFPBuxNVqHNTph4L",
  "key22": "2dXNkJ2QSb3iu8TbR9FpcBdZ3s8hhPdadftBQiHkvXwosXc2Do4kSVwXG7un3DJL7JcLWqpsucFEUjE2mBeqfFV3",
  "key23": "4fagppLiYThYaxmjn9uWpJ4DkBMoNvT2xE7j4hW3b4yKcCKPCsbYccYLEoEcHyuCsNvKrG2CmQjePbeawWe2PRjm",
  "key24": "qLRG3dA2za7SZPNAWf4wUbaX7J6WFaNgn4jRKDeN7BKx2Go6ntDMRqFApEgBQsqPkeprVyBpQ5tHmoushuhW8zv",
  "key25": "4PMEVHeGxzusqPjL5wxrSn62oSyjuXdmq1QMe9QSnFD4LRyfa5MvwQE1uf7aZi3jFMiJp4yJLA1viKsGdQz4mKqW",
  "key26": "2akMwsBkDbzWE4rrY6KYiExH3sGoWmFzhS35mZythydmdnnRsxBjk9B6G2cGK2kHCHF8q52eq2nFghrkAMwEmrHW"
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
