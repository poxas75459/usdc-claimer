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
    "3ZwwNrHqxHP7is7NvLcnYtCowNtJyapZjHhZ5sgnsBkjAUULSoSvR3Wq9mKpHRpKAqbbcMCi9QGfJbNfRbiCfpaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xUPf27bMnQhp9h7juBmoNPpeyB2ytRArdJAkK9f7o1D4egU98ENp9xmMrJNoxT89Sy2xtw9e11HqLinRdAgZARH",
  "key1": "2WML1R74HSY1cvasNjcuU6P5EFz1ZBZKg8PXZMS6qJ5Lsx1Yn2J85Fr7qcNq5TvdmpHYFNatymyfrR6U6JEn2UB3",
  "key2": "4hssdV3myYd8xbhvEEzj96ePemRMYFPY8gZse2mRKdgxyqjKAeY6oTGByHBiPUiwkx1hnQoggb7wH3wYwFeq1peP",
  "key3": "5K65Pedn2jYFDkbdwd5fAWnAdBoozbTmCwEZG5SG235b9RBuRewiboqKfB3hFTkPGB1N4apu7uhknod4eJob6Qs1",
  "key4": "4pZW8RLU19nRVVc9arjPK6eoBn7oYjGMeh9SeoodQoYcYZ5NUuqyLYe1Ps8RDTarAp62ox7jHMupobZ1YC6sT88V",
  "key5": "zSBqdJujR1a2drDcXfkQmg1x19rs99dhwguaH1t5mKnMsHHvzvEswpvJTtTnMUnt9QnJLz9xzaV42QkwuQpLFbF",
  "key6": "63kq7bG2pFZdpiuEVzbYEdAE1Dzd6EoYCpLxUL9zN2PrpvDEYFpX61zwjhvgHrfAPVu7CJhGp5yauJ9mW5RKVW6r",
  "key7": "4sHsC6mvuL3EoXa49G2K5hg8TbTPeupuJ7DC3G2k4zK5GzmSuqjeKh8YPbGkqsfo8uJLX12GhJAxnMTUEYUQuody",
  "key8": "4Wc6S2ZKpzMCDDf1puSrJHQwAx76JupGE3gVYM2ambfCmfMVNYYRVcTkhqanWK9B5trDDfxD84eoWCv1hbtejD5E",
  "key9": "4gz5eyjp6gCQzS74M4dP1UWCwK8J3cM7rnNRzwFPvXEE215XteCARCYHEzsGNfWXud43nXvBAnTEXdijrX3Qty77",
  "key10": "4MEeVi4HqLdspUdtEqxtprtuw5YiVfhHzczGCv6y4PFeiTUGbDFBJUm3wqBVmBhqcM5WvrVWiXT1RKseZWExpHjt",
  "key11": "4hQZV8WddrCtJ9DjG5zKbjY3VbdhRtysxE9TnBqGZjjhZrrisDXeNzR4E6XbW9QVVSHS2kg3LKbAKLAW9UUFRSwX",
  "key12": "4x95LUwNLj8izgpu7YnNKYKF7hXut6UGxMJKo2xRJ2RxNQc3Zx8v1CHYtAWxceXJT2xdpeBfj8dgVePk9FcYPHTF",
  "key13": "mfgfqJQKxBdUPrnxqj3QwLqrbKEwgEpTjKtoywDTLd6hw1czxdr4ywdvJmb3WFc4EEWsXW1wHqjeUA12Hh6qH1j",
  "key14": "PZWjHT9RpvT2fnQnoWXqUvZ9sq6mdLJEapWbduNA2Ed3jrmkneZt2pAt5srjjaSAhiBkhPEte3Jg8CS5GKWFZcK",
  "key15": "4hrY66bRJq9fBY2AuNCmErxnrrcD4Ndyve8kzHJGhZd4gkPohtj45tKcQX9wjB7MsE3biuMubSnPmhGPiGyrDm3D",
  "key16": "2mWGthKK8ewW5pFqaH5q2EV5U3EBu5fuuGNAuSXELzHWpy5VvYwfYMyMhrXKmPYHtRL7jt83mm1FnxvvMzWgtYJg",
  "key17": "2GzZ4YrvgLQUHDTqdHKECPC8FYvbaWHw5SpYrzGwgjWBftYvCuLgayJ9Na7wJi322DjQDTDAdLVaYb7YYb53BnA2",
  "key18": "MZ746ut5DT95aNEoGDK7LcYrfieck7d5i4LTUsoKGxT6dixJrgSXfCfHquiP8i5Bxt4gEYMmpR23vEGGR6mK15m",
  "key19": "fT8bBGtXerXvjZb5SvmdMvcS4h9Nav6ViPggbqwiLCFwkj7tB1qwLg6vumvJzGrCK35JejKXs6ZUah4mh9As8kE",
  "key20": "3FKAtX6DeLAYb3vWRSqUndf5QzgC3HxhtsVnkFPRruZvHhBTWPWXyxv32CRvjSiFz8gsqT3X7Gd3SJndD84BdjQm",
  "key21": "65fkK1GjwLRjmFG54d1ANfUu2D5zjv7AL6uGqgDyeyVhs45GvtxnzkWN3ZpCq1UJ3pk654Lzy6N2qhEyW1XbByvs",
  "key22": "5tmYVs9QGpZK4NTT1MvrLQC2CMvM7KTVrPArXU3N5EQoaNBTi5P6ctE29cQkUbE7d15ens4RrVwG37zBPBFxBCkK",
  "key23": "6boVyuZHBB3ssJYfR8NzpVdM1twVS1pk1EJN1ahcp4qgvpYWkCeG8doCeNkMUB3LfsDqVAd6TTkV2QeTU9QyARo",
  "key24": "ELJpbyZiJgn3wb8gS7rbLVequNMpBHg9cZYU6TxL8tQ7nRUhJUE5uVKoY3Dzfh9AswCbjPKV7mt7xAY2HQUMnU6",
  "key25": "5P2fqYUQdvzejKGqP6kUCYSpnkyfqvH7XGXXv3s1iXwH1B49USVmWaJqNJMpTDCwfH26fFGnJzeXa59CCA6MoCEL",
  "key26": "3gxJsrqce7KMEk9wAm2mtq3cKZnHiEKo9iAjowYcjiNArp1e4Gi7kMyKVwQezhcdhuEgB1mZocHp5qx2kC3WgZui",
  "key27": "5BkYSAKNoVZiQHuFPNBBwprACBLCG8v5oiiTh7R8i2kAxjYcS9dThUmgjErVSjQMLz7fgFYrP4aN2iBkCu3y8Qn",
  "key28": "2CuRcCgAwsw87d29CWVkF6ZvETbkQ5PxCahKXYoffpCwhiTSfBKNPZm9N43CAmawHeDizZy4EakVb9ZZyvkqbECD",
  "key29": "b8Q2yTfPuahDQWen7KtmrbSQtQ6XptiK9BcnaoekbhQnS6WaVdJ5VyYhLnkbRmtGBdFfay8XyxhsscueyZBGrrb",
  "key30": "2wg4SF93UW2FwjuXpLYzpAstZyCiX2Gwt5Whc8rEGvXySLMyw8dzSQ5DW21L7qReDWFa15tK2HxdyU1aC3mKGTzd",
  "key31": "4bE4xmaNQBB1bsFRtTvsHAiGj7ggcaJtLWmvps9HgxHjmqfqYqMUAfTLRW1criXsa6k7ZzbFKU2yE7QhcysbGRqC",
  "key32": "3tqgwoqAENrb4CFeDCjrbmbdRtZ3cMDEnQVr5mzQqy8pRJpkmWag2oKatmdw99vSsNbkpzmNG5B27RsurvXksJdw",
  "key33": "4oaJjYm3zrxmh8C6ufabQCDLZBEe9e8oHMzgEUSy2J1sxFbmY8azNK9gqEQpGU7RvwMGcKEQfHjzRViTrvcdv8ta",
  "key34": "4aCwsPBA21V7S3vnMvoUV6bsBakRWamaLZTZzS3vk5JydAYvCQf3yXWzwFCtZErrZsQSywuRiwEKnmNDws6qFRZ",
  "key35": "47QV5LEZaPxRMb7z58BZhDvU3VZhZtdUPMpTQw2n3CWunUW9SS4fkHY7aThpukqe1xwjKPaUWk9gqttzkUj6v612",
  "key36": "PPqCany1STF2LssFYCavEC3JW6byNC9FpZTJsHYgMm9XgEVawevqJtSPAm8wTKn4wWDT9oVZ2JfpJqNnUsEH8Su",
  "key37": "4GPXatjgfahmRwQ75zqEjEszz3PNKa3U96ZfPZvoxguEY4KBWa1KJbFRofr5W3RZSpUW1DEP52oEkCWHaiVvcu7U",
  "key38": "7K9kKhYcAHfGgrX1zerUsFN21EwhjiMfYPw2zBHPu9ohXSKPErZZRQvb7cX8ZZJvm8rDdaF7MkMyt75H8b93iFU",
  "key39": "WeTyLwuBHnNMzmurgkToGVtEvn7RmqjZLec1cL6rozqwgbibCQYJQPJBaFAcK2UiWTpkzoMw8jkwj8e62qz7w7r",
  "key40": "3vrzBRguziS9mQyNrU4G2Ui16mviZ66tFsvv78ZhJbcTk4YiFywGsF7oFAy4G6HeuFNDmX6UwbqNYojFR54R5nSU",
  "key41": "5JGvoJuoycwRDmv2UCJYvRj2AHUYxno68BQYTFpZgTGhAQz8fLNip3FB6GwTVWWFTyBx8tmuJx4RD8HVPwKdyu9r",
  "key42": "2X1moEFqnnRucN6ches3NFjMjQmtRW9S5r6VMxk9zaMEH62qnQSJKxLHYyb6qMqzZ5znY88BT3sxuKWZKe4dRPot",
  "key43": "4ecrCSHbVdp1DoS1dXZx2LP3bhKj12buKkX8aStJo8HdCMFs4uNUvcwg5a37sVwQNReMUkk4brXsiou3WiwJc9fT",
  "key44": "2FBrcFgcNxE1CTgDUtjP8xVRJHoiFxjn3HBsM99BgtP3yFRKEcpFRZLwwp12Mcx1QCtnJT5gUE3EyQfp5dZwMPKQ",
  "key45": "2FaNbvX1LSRUzvFoFX8WXioZdJFsnKRxztuLpETv1xqbHoxRM6BvDHjHCqgXKBecrKzieDPQY3cvHxy3GXCuyf6q",
  "key46": "5nb3htGvCVZHo5Kzcjz5etFPAZeeiry6d7SF9St1be1KGNVSYXgBBMdMqxFiWTPDUvx99a55Bvf3E12LZhAxW5Rr",
  "key47": "3jeLKCE4a7bQBRSa5iPA9x5mJmXMAkbzjALyq78RFZUy7TP2xM1qPPwYgdbp5D8YUmkM59RA5CWUMgzG29CkwBZ6",
  "key48": "49v5yHrZVPWwenE7nFW6cmof83tTMoNzd4NoJiwurJ9R3w4Z5WBReU9sz2ggjmvW5DYeEwJiwFe8WcWirQgnkXw8"
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
