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
    "2ePVkXkZH5TWgKC7s2hFZBYqfsUPjHHme6ofNCYiACUUcvfEXZ5JMTEYDHygYkgSmTY99mnFLrMn98yvVP1VfdM2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MR6mAJQzVJxuWZjTp1swJAmpW1TCzXeysGv6gQLWpqPUjUu5n96Bg8wKeFHiBLQS9cKyNZTvyYL8URWgcddy6pc",
  "key1": "65DpsudCDZpXPm9gpeqBuUX4BpeALhojkt7FTqjrM3uN1hwDXPR5JB2Whacv674s94cHfoargq3AHtRFEfhuJTPv",
  "key2": "3svsV1FiGH2GbhvwyMfZxhS7cBEXgHJ9vyc6G5eY2vYubdpjN2vLu6r3MBLMXcQxfMsQYjWD9XRANsaXJjZmUsVe",
  "key3": "5tbjas9uva4bXRvL3rq56q5j1YTin3jzBjB8qkgEqpnzvizC4ZL2gL5UK4tH53GRXN3jp8GZfTkseh9QLq41UDMu",
  "key4": "SZU9bX6xBmiqiEEWYB8CWu3BTAPJCoNHLZKuzfMEbY6x4HH7QNwQ2aQPZomz7gfxY4xw7mMWpZftxrbhdg1Bj8m",
  "key5": "3Pb4fBJqXqMTChbvzWiVQEqGwEuNYy49XYsHmfhj23XfCNxoSGpzjLoGeuVTgDS5hp7sHFmU39qfo1bQmZULMyKs",
  "key6": "2nz8DjB4mpLpJxm2C4PajG4Uyk8iHkBKbDjzKeNaiHojGJSQpM1gXPiuvCRuoFEhA2hxWAR2cxMs1YecRnmxqU4k",
  "key7": "4pA9QBizVwiu1RiCZ7kCk21xkAsae9QZB8dhz7wDZcajmrmGf8yfJMjVmUaPwNKhDr41X9P9bntL63mcMkqHRLJC",
  "key8": "46x6ajdYrw6pG1njr5T5bTfFUCP8KasSWbdZpP16viPHSitQPXfnKiRws3rCABoEeoR5aHWo6LcUBzQRuGbukwMg",
  "key9": "3wgFN1PmMoGi9e1rPDucK2dF6hRByksa1oebEcHVsU6q6zZNH23tREHWje37ot1U2SZEAZegYxsjfdYRV1mecRZk",
  "key10": "uGymst7bnipSUsV9AjV7NecmgLshMcfedsTRgU1jeD8aKEerjGM8ag5VT2Y881V8CXPwBV3F9J1wPzvR4WT5bNe",
  "key11": "3qsDobEUXXMJn1Ccx7WZ2WzmeobEKCnGJQGS5PzCMom2mwioreWBpc9E816bP38bLRBYetNJWhefoSv2ecTCsjxL",
  "key12": "3sZHAxzCrAd3bXtMrsC2CLYzK3GALUYtHoTNYmmSQB3WrxHLtK8JQSCWcnB6aTd1C2TLQ55Pnn6jF8ybc4zL7vqL",
  "key13": "3UHdk4acNRjJJVsjm5zYQyuPieDQJTd8LFAoKbxsPFtfXfaYea6R82uYHfNiHBu48Ns5A4XDNh4hfZnUY2XcDgJo",
  "key14": "3Je5vVKQNaazJtZXevzHULmmrYuuqSf8PKTeNGTSP7AuSPCuXAnqhKxv84ZuRMErR3Pdo51vrBbJCajW27xYFy96",
  "key15": "w9vRZCombCpUzG3D9dCgvpzCjEEQkkPRvGzodeGCbXB4xSZxUW8yFPgtpWQpyaayUQSF2SQwX7QoGEsL1FDFYJo",
  "key16": "26czmFLrK7RGqUJYCNdjwA9aD9Zd195bqdur32i517SHw2oZKRepM6CuiUv3MJWvwRok93jeZUpsTAMhyw3xSH7d",
  "key17": "hbffUsJ7wnikERAfKRvybcPk64YojcdkggccMDJ98kw1WczqU9399eeUBVfcytMRKzgFWHwiPtbQDV8ogjQRyhg",
  "key18": "37GfX4LUTJTKVaeFMJ4PaM5PhajFL35bKZUGB4WDywM4XbskyS7yL5yz1WbMJ1AKnWQXWVXuds1jpG3o66N1NQa1",
  "key19": "51E5SKuv55DH7kCVNR2xGF2dJ8wZtwAaGzona3KLmkSVATjYJ7nRx2CZnbJXEb9oMLsn1wzXpBBKtqPEwCLK4vBu",
  "key20": "tTMATqgiSYfsdbVamJfVw3uwky7YKGXHggfmCwKtDMgFGFgWRZYgExkcfXFhmjZdywE37cN5k4YahGreQ8FSJVT",
  "key21": "44H732sLhzxbvj6WR7bm6Gd1zxbBmTmE3o8RyzgCXvzALjvtS3gt7hoe2UYVnHRcHpFFMHHwVLjB3FEucVh47kef",
  "key22": "2sg36MvvKPMUYpamyP6Y2t4LqPgpGpBWbpvPJPiiysvCWwmvHakbFPSUYU5o9vrbekxsyTTDLTfvBAN3UTYVKZup",
  "key23": "rd9kZSaTVRSeC5d42vXqsbRcTzACJM3juRVQKYjRptg2ejBiV4kLfZKgLaA7L9cfqA6bAtiveHywSoWq3h5D3o2",
  "key24": "2SfvHn381Hzk5GP9N2TUqzZtWJCwYFmviowDWPPgsyvuQKfqMzCWAMgFLZeq9iivKTqpfnhRB32BFxyfMaS5JzMi",
  "key25": "65kZjXN5g5K378wptEuJeXAT2D8fD5WkgwY2Ctc9mBMjAc6ZBheisb4qwJ23BUoxPGj31ESrS6MLH24zfwpdZo61",
  "key26": "59JuYo3HGXo2KemZrfBomML22irjAoLh7SL47gJDghMP7hsUxLrteu2Qw7HULBQpi44L2tFh9ATTnH9rXM8GJRvK",
  "key27": "LNJe82Z4K1Gax5GnXnfGhjsu4fkRgvJS8xW7kPaE2a9wHktNgiWhMyvUGhf1tUPJi99dFrVeWHPeP2156Js8A6J",
  "key28": "2eXAJyzM1XdJNR7xympsZrb3ktoKepZ9HxD18XdrF5F7GNc2FVfNQ4aYRU1NzFX1Q5VxKob9t7uZEvkCn7y7kisX",
  "key29": "2RyjMtL5MJAHJaaUwEDgi54qVu1QEkWb2gfcXQXX1PxzxohjpTEjMeYSTPK8b2NiMXjEB7eYHyNirf3wjg3meszM",
  "key30": "48mYmBBhZJfjTCkAmrZo4mQLsXpn383RMD6ib2DnTWsxJhB3h8t5QcKyhvmyrC3XoUjTiZwjDPScGX1ubgT9qmAu",
  "key31": "4n1w187RRUFtmWG3fnFRm43RJTUNGRvqcp2GNJz5ssCnpHfqnNMTtSnXvouYPuQsGQoco8GnA917kj6VnN4X7naf",
  "key32": "S535dXvYzr6kEUpjQyjNVGNz7nn3UThj9FZTvQW3wGUfBmTNaa61W5jvJ1zZCwfXxgVdXZ8BRfXNtnextMewnCQ",
  "key33": "4FTZ5SJQdsYSRv8Lp5KFtzyGHPSSo5PREGvYLKx18ZpMXWngUMPXnTubeh8v614G2GgaCFrP3vQgeBuyGiSxM4N4",
  "key34": "3JHAuaxw7fVFZdjdfq95HVnLB7EMgQs9jXCmKKzjw1q15d2YjV8SDVPM6A5gKEjxVgMGmBdUY7ZkgSbKxg6GVChG"
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
