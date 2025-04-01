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
    "4bzLMQBZq6VQmRwwmArnEwijmYX8HpaSTRm5KYE5hHCdPpzYxjr7nHmbZsYCLAXx4SPMqaeAoxokxJaVcuo6UExn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56PhnKLC5tdtSWVTAt3smSwnDX1RJWGUXMJYm6dgZTGQy9KWRthF1uVDUQPFs9xStACDdzhAjkEZBvhnCMbw7jA",
  "key1": "4Hc9pom3ggy8zhKhenmFjpeHisG3Z1oJRjs8QBuWa5n9KDGDUihNwrohoUGtnahExHbUMC9xiSfYdGFucGwW9Urn",
  "key2": "hiqxMTuaWDKkQL3SqV7EYVfBTbYqqjwZGWSZmrCto3R6MmHSqhGqKTbjo4CgJ6j1A49FfcMdXB4ZUM8JC8bDTTe",
  "key3": "2bkn4Qbcc84UgaDCjMUaHBb4bcszvxsZWuWEaAnWSmdQuDpQzHpYzrk2ykx5YG9BLvMPH3oDZkNh8J9dBB2Fuahw",
  "key4": "3uQmNBCVqhBvdvNf17mUB3ecotvYKSpoSmQxa72KwoHjjVFUCL5ZvTpGgEQEFtHedvHvih9pkj61HFdi8uGaJdpu",
  "key5": "eemWnp6i3YMGs6ioCz89xA7ArBQkfZxmF2sjKKapK83JwL63sjYAcG36m6JeB6urDEw9BA6B1yE3SADexxMSbg6",
  "key6": "3tW6x7WrbzV4fXtqCvntUT4EbkjsDYtFrqvGTcjpPapC9QogqQXPkVHdH71YPjF7AjDHWqTykWufWwcTRckKdVzH",
  "key7": "sG7aj4J1b6sqUZcD1WL4rhWhPL4QU9SCC2GbTvanzFtCoNkufJMYzhLSpzZ5gWpbLg4HghHHSuBWggptAQi8Mgy",
  "key8": "45V6YRJKFrcF6csMdWto3jrQpxZgGDWqe5qpKWzmY6YeFhipfaoMVn7gbkj6cxx9tKNPCwC7QJkrAgwTHyeUvtJb",
  "key9": "4oweChPXJu7gA1MWs4RHWihgyXvTrxqTzjvJp8Yco7vXGCJNrEDTYYgHwRg2cXH4KhUavG6VFq7dxATwyQvEcLuh",
  "key10": "5YWGsrHSBfntCy6hWdVKe5KEijUSVQxsVyn2EKgN6EDNVoA9mHrt8smHz9TWnHKDBBysGwoT8HCnQPfSD9n6bJMu",
  "key11": "66XT1PpiDTYgvy7QiisyyscFGsrWM3GwgvtHVULcAsGvf39JmZ4w5VLuF7MfQKpxHQu4JoEpNTWpaDtMunoJoSbF",
  "key12": "5yWw2Qxy8i8e5wMcNLAXPw7nQYuvF5fa2U742T5YQJWmD1VGwEPLjMGxUcVNWbArr3qMbf5mUV8CGoVp5ymvXBQJ",
  "key13": "5wMuDwci5DyeS1NroLALi1gqsYqvXowL9aq9wv66qFvvVJ1X9iskVKPyEVv2pAi6G8K1xT2giptZKLsP3zympnNY",
  "key14": "3CeyVbEyUyDzENMNAcmk9jwsmXiSiG9nAyuw1YSeJZFuaaGTCRw5TVRWhrB76P5JwFbtA92i4dkmK4efmWi58SwK",
  "key15": "4kkCdUYsTyPmDkQGgMTTfrUSio4jQkfc35k4uXvvnzpd6UXkC886x7pYQpPCTLYAUx64DtKsXLtaWU9zZFVbJYY1",
  "key16": "4Pg4c4dALPCQwYaJkDLFda48VdRoSWd2uejhcCCBqWuWBfsgxu4ipTKZ9t4CUUusUJ1CLjRTt9AmqhP42MJmD89r",
  "key17": "3J1dRBXxAA6eqvSRdn58oVGaFtj3SEupJjc1XM8WVuPm4VJwX8rBTSTSadcfHosPyyiFwPYc4DNxAfScjw836twa",
  "key18": "4nY3EEKCqSRVd5CsDtLsfJvfzQjuBLKv5crpZQuQxksH5RcTz1wiHN8RWf4Z9yuy9bmWCvi4JMN14umZBpMCnvQa",
  "key19": "3C2sBzEuC31mugJburSoEVgnvbmFxnWgfnzTwu4xP1WemAsbZTgoTX9WEFZiC91kcAi8RcRaZ6rapUTsHSk2c4fB",
  "key20": "HeFqTPEHsXAEkhKDVg2gbKBhLiZzX9oq5CmxYMKV5V2SKvQ9JgMHdRnjNunD7emihw2c6Qvwzcrj5K46rJLCHLk",
  "key21": "34x7X2xgU7cW5eRKH5EAHLZ61sMYjfGaYASGLe6xfwt6T677c67M2S73kRkRb8wcQj4ztrrMadK2Nw3FSywZJDtB",
  "key22": "28JD3auocuSPsGF4CsFm1Cah84mgEYX84aEPkjTsSFgdMfy5vTkpHGZ3BrWoQJv7zd4KX54JjZmu9pqHQEcYuuZz",
  "key23": "5c2pGbJZpVVekPpvRZv57dMt72UNTuRmdjBT9CXZ2W5QPLcnqxbNfi4CN9UgPdPeQisjAWpBKVU6z6yecqUg9CsT",
  "key24": "5zAaENMKAaapWfocN3yb9PSiaN7eqixtUcFZNkLST9KcoPJ6WPLoHwbuyQagUiKhV6rvTpVT5gKUt7N8GjtgDNcF",
  "key25": "2TBp5adXv2MLvLjad6zLuYgHzxN3ifTgfh9q16dA8dX8sfCPxcLUG5XJyRhmDcqaBmBoTrCRxY295L8qb46KL3e8",
  "key26": "53J3QMsX6QLoYsUPiEqVbb7uv6AZLxrNhZ72KF939VqoJi7QqRupgMBJrtUoeSg1L2Mvg79B6aW45m8eNyvcWEWu",
  "key27": "364iYmiwuaMwQs4xhDeWs6KctMXDFqN3hict8aZ8VftuFTZX3zhnzU2QfRMhwUpFsbtebzzw3HnygNLFCYm8ofzk",
  "key28": "54YTmenWJ1vYpZVbtmvBRTPvpkL7Frghk16Pprcb1LZ92hDroW3zK17t2XQgqKsbfH4ztV5Rng6KZsMffUVYs6UL",
  "key29": "4PPAXvCW683pKDzEAECEBW23EyHivQ5hDQvQRvKoQdypJQfkWp6tFmJo2tweCz46xVUK3v5nMvVvmarr2QezSyNy",
  "key30": "56BCRMntUtpeHoQhc8m5StHx7NXPgwjcv9K1yp6pgt9dmXnFjFedGHqMTJ8moazb1rj3JpiE1K1NfxsZPUBAa81i",
  "key31": "4Zmm4VVioyar4aco8G9Uwx9zfrVMsRtxdWHL82VL6R5jSX1MM4zKkJx3UcK5Gfgu1eE8ZTNgUtXnfZaNsPfoz2oy",
  "key32": "Kn4sXdaRHXW6DM5vAmwNUENE4NSdLGoHQhbqYPLZ33sCJPc7cAnU6TgfcKiQrJRJzeUMuuZw2xvabtdYQXr9hGd",
  "key33": "3RQFDR1sFhsMB3sABNZokTUhLDCuGGaSKfzmop9nxyorUN9Jkc6GrKJFNK1b6qm9japzhzs8DX62qGgavpYMfWqx",
  "key34": "3GMNrFq8gdie2gbYhj61hL6xDM7bG6NT5Ez8oq6KgLkTofq7Rx3L5CAyMsm8X47YvWmK2HLrYHC4Txmqf1M1hHfP",
  "key35": "4LGD3PGaZWybfnnme2AFTv1ECJiAMcfFvPzDJkwLDm6msyQv6pc7jyN7QU5R239YDjBhLq3vimyuXz4jSHXgUhbP",
  "key36": "4e9ZaproRYG83SVwiWiXqp6eEFgCfHE2Wqhxya8eLhyzpka3woZ8gdoWVpLyuyzWueD6V3fijUeALxzRCFKnfqb4",
  "key37": "2LCGPZUkUksPFkQP3RRfhcnMvUzpgdSbC8ZXwvKqyGbnQDvUrc5hSpq2rqUweqrrZ9W7PmejNcq1TATrQKQQB2QD",
  "key38": "5NyUxLXGCbyns7E7WqH8rd9jc1ixoLsg1XZQgxQ6un4rCYSaaF54qLJUo5ysGn1VEEZACwn4NFuTdcV9qYRPQ2t3",
  "key39": "31vmC3MaDqBF5d5jZtWrjNjRs356GmgcwUW5cjJWLSdAzJS5UXBtFdbMAi7bcVnAyGR9dS3ecTGEohmn5amCzvhc",
  "key40": "2FXTnMBQjGAuYd3WQXrzugsDWW8rSusDMpucAjnnyr31tgNFmZv7PQAe28GCZWFC8Amv5HEd2VAxNZr2L9iYTBee",
  "key41": "498uBBGriwYvSV1qZMRqpQLwGuZ3MTA4kpPvLmDuetS6uM6uku95tCUBr5SWckX4xutoatDHrnyXxnEYHSMYMEKB",
  "key42": "44EuLsKqhv1DJn1dji57pS4hJnNgJNSoqBi3dmrH8hBwcnEFsuAYxg1LLvgqzjquBxqqrkVdqLSiSPXPVWQLjEDs",
  "key43": "2z74ifDfz8D3MKGRQu4DZDyAkXTSQh7wpBQitQG8QUk3YS52pEuvSy8VViug3oyiAiPpVBXq754UbhhRxEtEJxro",
  "key44": "2bWkXfj6VK1bCNu5uB8FuTaswfHXLizoCJC4QVRmXQzGC3mEDAmWfMtEaG84AcGczxbPMyy6rVu1g5A4iFYZaQ1H",
  "key45": "5BMNe7A6sgMz669nCqtKRhrghxoj9qut9SrHZujgjexaYCDRDLVw5uHnzEsGokfwTAeXk9T7xAz17iadxdFzWiqn"
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
