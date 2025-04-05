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
    "4RJ6Re8hEM1PF4JfCxgJXcmcpwVAsh4zGYQWgezB26JC83kCfn1uDgVh6V4gN8vwhisrh9XDEc9bppVX72AoiM6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ka39SGQwman4wgm2tPxt4dy2ZDyc8TQAFNPw3qGAXAvC6ntVy7GF65oq3k2pbdK29eNHhb5UEdZQmCJF2ukFyYU",
  "key1": "p2qYhbGvJyZrL3fMWBv9zmNChC3TscXBovKdSek4GeauoebXXHbZc6NUu99EVLLUpjHwTBp4Uf8mJ511NgdLJxR",
  "key2": "4jpCZW27NQTspD2onZbtqW6jkbguBgPbSWNYXz43z5KhrpbwNj4LZzrmpvLzodydFz4BPTVDNDHdGQq4BRrsaMQF",
  "key3": "3MTMySojCJ1QVWXB4QdYS133e7zhAoxgLGbxsnCBM1RcoVs67KEggrL1pYGGxkevXdBC3Q6M5KTDpfhcjDGzKHD5",
  "key4": "sviisczJWG6MkekwAYRhZLeY8g9VfP4d3q2Y8f4cZ3hXKb9SW4GpgHmwLiVcoAFS3RQjNm5iZ9NqDC2EHT8iWXz",
  "key5": "54xg828N33mmRrEigN2hyrT7oMyuWmN59MnHPKbaUnNv2fRnFxJbJaKhezZJ75uCpS3WdNqickJDPxzvc58FjSdb",
  "key6": "5dPW3XKWGMZ9maYTrWT9m9H289RPYQxmTwPHLLR6tWXCd3SbdagWV1dndTobiu3SjwTiwX3BmkDfthiKweQM28Yb",
  "key7": "2Gb4xC7g7uisdJ7PqZDKDRHt5cEid1eHR1ERRH35BzaF1FcREcS2aMTd3rJbM2S6j7VyVBam8Sydqin4myPskgvF",
  "key8": "63ibBM73hUn2bWZmVdy2UCiioFY39Zbj7dEk84E6JWKfpuLaXDRP3mfkoH6Jsccd4uXzGRjZqUEmapr3FXJuJE1y",
  "key9": "2TSwxoTVP921jxW3KPb6sXnx3cYw1kYkoHADc7qSyZ2rvk1WKm19FanoWt5vBuUrLS7Ueiq1UpwRYCGUBNcaDUwL",
  "key10": "35psx7JEgPrtFNok5CjBViUdnBiZV3uEFEynWkqJhZEBJFhHuxiDyWV2KsEd8EWKuS2RTC7aAkGjhsLMcGbdynVK",
  "key11": "3naBx3W5XtsksqcKriE9dTYYhfxkN5FwYiGk7zGAZa8jemfutPebBwpx4nf7ing1dDjd4uxmSTCPgyT4VTR1WdMC",
  "key12": "4Cxw7QhAL7QXPBiCk7fWp2Xu2mbbL8j6zV9PpMQqcRybtqnkigLV4hLeMM14sFW7W63RvuMU9MQS3MizWucPGKLx",
  "key13": "3a4Y1yM1HDRFR5CA9pwdLtw5eJHiZ1UhdmzedbPwvo3GaSU5CFv2F4RUBm5E1u5bJEGbomKQqM9wGjvrFDT1Q6We",
  "key14": "2R4rQy3kTJyibcfAiTLiq5W444HAMYeWXTtZMpmg6e219ebetAdZH8Nwc238VCxYQpnhUVWzBqHPVNCaVGTQ7js7",
  "key15": "23X2sDU2oaN6ex4SjFT5EPCAa6xMQK2QAbjGFzNpjXK2NxbzP6xeT9Zoh7YSi6c4chnRThNswU6HeM2wDy9GCzuV",
  "key16": "2X1kjpmyx4zhXY4ezG4E2ZKwzx7HSbr7toGiHsGYzUe69pjmo6f27dxJuE694PcotbiWe9SN1eWeLQuyeyMbtAKx",
  "key17": "5UpCGGCnjf9giRVTUZVh9q3n3LZRqq64gjKEjC8qdH5jAAS4b3eD1kndxJEKujd5KYDbwFRZVzgrf56wo8QDHn4W",
  "key18": "48XxrVzG2xu5q2pBNBQQJwmkVyqKxpAJVCJhTVZP4BSmJ6EN2u8JJ8kMhiadhDuy4dYUqqVrkvivo3skar91mHpY",
  "key19": "CiY7NtWUxtytqG8SAELrjarjKxvVxJTfP6PYu5J4TfkSrSCCE5ZKmQnRvgJpXWWKRUAKcp4p9TByt4SqFUPEzku",
  "key20": "PTdts8wDPfC8EzU6MCJrPphxJ25tZQ6gwFYFRmY15XkrA2HTeJnq3txJYH85ZCqSMt3uTkLR3kTBb51EnaScRVi",
  "key21": "4XxY7RE2F8H2R5wLPfBvqbXwmcwAoRhGsnqRULkrZQgDa3XTTNaXDF4j9UXEu4rxJFeKb4R44WYURYuj5N1Dw81R",
  "key22": "jVv4xqnyrXTU7wQShMd7rSPSkBPeGo4T4fGU6J5B3Lh4DLivf8neiH3pnyMD6fmQWTMcDFp7a6MQ3Ft6oqheXcx",
  "key23": "2QJv6p9v33MhfCufViHhjg9HLqcjFVSUwdBAQumbRebjHAa4vj4Ab5UVNbzGRmDg3Uqdr66A6584B1yHY8Pnh9oQ",
  "key24": "5V1jEuxtNc9q8F2LZ3LeZEECEsjEQAFbK7ztRPbrrbVtPB3dMmrkrZZkZ9EVEqqFroYpSD7P1aEpaayeRxfwH564",
  "key25": "LRuHVvgfBF4WNzxnF97ps7V3pnKpknAEuQw5wH9E343WgkT6tW6HfcG7aKg1WzNNKP36SA5mHVioFa1sjGoryVa",
  "key26": "2CvsMbxhWfh5tsU9U8DfFbdWYf1ERkK6h8gb28RNcAurGvLCw9qSgP7JRMhzewVLGrq44bhHVcVjsPJ8nTJKQSsG",
  "key27": "k3Fc75PSTRw9R7dagSJpJqmHaKRE5t7cDAhPGQinud9G6Erk7vhMyqZMP3uof9hQsHFL1NpJZSWHy5DneP8bnE9",
  "key28": "2bvGK2c7tTNgdX8zyhvtTSdyDfLyMkQigqsrL4QxquCgKtkLtZ123ybu9WVfwCm5XNinJzGzwNQwgwVkynRLSSRm",
  "key29": "5ytnhUocAvuvia3PjTMbWNqhPCVmZEJxEWXwrU56828D5KZe9UxmHvPseiQ61DGuttVy1rWQmeUmXoXBvjEa3P2o",
  "key30": "kam9EBLSyA5YD2anW7JaDQuGsn9iFpbWvnWvXyULZj6xSA1xyE24KnCa5uVJE7KYjjX1qmv8rx9amSBfJWK72rt",
  "key31": "47DHs8o9opepW9nbS5KiyqfCQRGepHZ6QpeUvTrkAkNsFEJ7vfefuNt1hPHx9RHSjwXuk7Chzb6zjZdBW6V8moEm"
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
