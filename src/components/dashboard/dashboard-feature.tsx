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
    "2v8kAYbDLp8BEmUzXJ5mm5eUkLPx7tidYBvtQV5txTUPJHqmCTB8Dej1AZ77iY2D5jLc4FzqRY8JMxys1Vptzo9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N8UMUEMd2t6xhr86YcPWNwmDyGkedD4TruAoHUHyiMC8VEtJzs5hbBw8nQebRzKDjb2sj7BQpzDTBAVVd9Hf5aj",
  "key1": "V816Q24dDXusd21Xg3kVWAkc5he7uCrXLYQGyCrPdQs4LcCVt4fVC5N5Mh9kqxW27eBiw97raND4yZ7Fn7jeDWa",
  "key2": "5Gcwjx8Shiakn94xcseVuu5wdrbtHiQqKUq9o54xZT44EMJB5ZNY4hzNqATLzi2HMb1UH6ZRFeYFzbbcZ7rtmqdw",
  "key3": "4tsk5pF3YiqD6bYKUT1aiMARjQnEQtzp2239yGqYpqDs5FDgMcwm2XRuwq49PmJSpZ937YKsurWf6YCevTDECiDx",
  "key4": "5bFMX2YeoJCcuj48mYJkoTJ8ZKFBe7SNLdJcf2EsocRwUKQvqPrg3tQcNTzz3XuJ9j75J1NcZwHHfWR6Qeb1EcpR",
  "key5": "31ve6t6PD14L8Pc2MYvm7pon9AVJn4JHL8VzYR9A2KY8tYD2fWnFbCT1pYRa21HgoZQbgLznW6pjs3yZCa7Gndpb",
  "key6": "5BbUdPseck1ZGr5VKVKusyKFjBZw7YunBH7m2nPh1sBeyAX7eV4YM6TYJxDN1zR8PXeYLamZU5b9o2WP7WBYu6Hr",
  "key7": "8zFBnf3srtMjwaFFaPbAq1azRh9o4FKUWVgCDiR9hNzo3A2UGppbTHSh31H7BqqU8cMLiHeNwZRS4N9eV2jGChY",
  "key8": "ekG1k2iSi2MXpQTRRL9PYUHQitnLAJPNJW3BRc1Qvyq8EzgCbZrT7jcN5jZebtp149nCuP93fbRnqGhr3vDaMMF",
  "key9": "35tYVcLgM5fg7U39W299odYTQwznGBVQzC5xAgiXwz9vDqu4D9HEYGJptHmDNbTuJm6BLsm74vaj29bMZ4qrSpwW",
  "key10": "2HyGbjoNh9GH5vmRdq4fZdzBfXoFci5yPdFCvKTW6mjMNDq477bmbcuCFG5NH1LUVfJT5q2B6xedMtQFVEjSETRb",
  "key11": "oFgGQCDxesAtmztEdZvi6S833DSARj1PnNJzqJBZMnsQf38zNv2RWnqiexuP8ruPQsW8rRATnXAJUAktoSCLzv1",
  "key12": "2MVkwZGovXMbLaUPaoZWxf9mLXfcZmnfjpGxjiKexLxLitBAACmNY94MQBdzMcCPuZg4bzmLhDM7oEpbuJa4bUhM",
  "key13": "3yNgHk7AmbNv7QJ7j9mQstfGdPK5wgdK5mL5jzBddTQdZFmSWMypqRg5Z6NEiC2MPAmcpZfrEBYaXWvRpUGmXkhe",
  "key14": "5mBzHyf4hDPsYfjC1hVSUJox15XQY5Y6cqvmmpPzbDKHvuYA5CHWdv2vrGcnXivoptFgXDkBQnKiMTRQc7Y4jsDK",
  "key15": "5GyhP6KyNEHVFqJemhFijAJcYMKMEGTdt4RKzuQAgkrM9WTtz9iUB4TZTuGFo4X6jnbLMihSTRuGBe2rR1A2VXDg",
  "key16": "2DatYxwaGtqakm9x8XJqhHhMT8bksKGDZfeBZLmDNjfpMEKMgVEvfAud6AJQDZvoJ8ryvdC6ik81GhPfdR8fAyVD",
  "key17": "5FDiZYrj3BcRfM7tF4F4f89oAdc5LWcR7v1LpY5XAVPof2ZQioHiWmXmZGacqMhCmuYLhVHk7vcqfftobMMu38Zw",
  "key18": "2kLL4X3jn1yQLZh8scEtrZ4tXj87nKvMvpsJeKavvREEjp8V6i15bq8k5XWkLu5NCvMpbYPWM2uTg9haT4srhpEo",
  "key19": "2PLQao5kR4BW7G8p3TSZz7XUkh2hTtsvrRV6aJtYMKqpT97x6Yk4Mf563Y6toNGwDUV8se3WNCvRwvzjrCaAwdfu",
  "key20": "uz514pNBrAmZ1PAiu8UXq7QTC36WCkncqV68bydKZvvZLUcnAkuodSaoRi23FXM1qe9dRg749cZwKaKZtSNUarv",
  "key21": "66FgR8yUUmjPjRuNVb1UBDMx7t7TtQjTJB84WTABLBuw7F2m4qatjeWYad3rA1sPV7BsKyMDVt3scuhBffYE4swi",
  "key22": "5BvVdPt5JD1xHJmddRzZu3wYRChcC2Wa8wVggNkX5YXxkVhJqMvuo4TqGQFB23hAcGP1TvGgKiUpV5Q8ZpXN8e5U",
  "key23": "3ZzauWwTdDEpdqFJYbeeQN2frjTi2ckPMfdQhQNjs1Q2YGYJjfz2teLwDHmYbS7GFgn3u7J9oZY4BeS9ryGTJwZ9",
  "key24": "32abNGe6CEobbtuS9y2a7GAEpgJPr8LV818oFiviAuWeyjUB9Wus5RbK5kJbZTKFcvCKXP3Cn4aWo7Y19uAHt62G",
  "key25": "zN7AaEA5i59P9oRXB57BPS6H7DdnadwDZwAfM6pjzoNmdBJUKDsEtTuarZvN2NAA3SsZJ6TwtkaMgkJ6ZVNjsdq",
  "key26": "3joJ2EmMRkPuQMFtGAcrQ2vWFFNMUHephVxooNfiPreyLymxPDKqbuPP5joVXEsfiRiqG6NLb5qtJc4gFzpjWwbh",
  "key27": "36wocPi3KFvYmtt2fbzpu67MKmXGE8mU5roPbbr6FzGoMdetd8kSPcGjmzjU87uCWX4EnsN5HoeBHiYrsgXAorzg",
  "key28": "4ALiGK8hMtgtkkpeotAxF9x5JEZDw57xKFG6zurpm1gg6PXEeUvxAe3ZiWhvrCf4kNddEMmzo54ooWhZ7QAHEMwS",
  "key29": "36hqdktdpymiC4fLDPcjnWmpYibjACBdiLimEDEHWNKjoj8FCPbQMqBykW9HivYmU8p7UktRYWKJBDXDgbvxCNqt",
  "key30": "5QECUu8yTJHTy3F6okVKeDwHYofmTjPRMPyWMjDY2e1cAmrvZdpRcKB2mWKMxYax5yaeYUSJ5rXZVLBP1721wtA4",
  "key31": "5c5hphHZFbWNmKJchedMMPB9nxVDeJGvjukoFFntqYNSeTc9mWsJ8i95pFH2HExiGv6ngMG47ezYpg2BeoJJyyZ8"
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
