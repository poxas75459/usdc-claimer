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
    "5o8gQSx42kZhvm5UorYEZ2Fwrq3Tc5xdoJEH9cPdgv4WusVHJMdN3ZtMUVAkGgx7DpV3Dgs99nnmjZZ248ih8Tp6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y9pNEL3Dt5LNo9gByJHu8kHGEnDrnEMLiq2jEnzr9ubzbPnFqLpXaY2akQjhCiaP6FWoMZJ2Knk7dv6FFXpqe8z",
  "key1": "9ADc8H5hggRkg9QZAwhMVZyPsvnmwE2NW1gx2vYr568uJVmsBfbA1UYJxBaDbsg2QLV6sQKvg8pj4ZBPEvEqT8o",
  "key2": "3cZSyDcF6uHMEbTsNvnSnQoi9eovWVTY4ndZeDuCo5qyk628dv4pPgw8kBAkK4Zu43Upyry4hj5aEzAJiyuGvtNm",
  "key3": "4AbjEvDTUwSfbFV4TwdbzHL7YjLdASLxvozzG9CnbGtwXBZcYw57hSELcCb8n7CUeTfphvDRNHNcfSCNPKYV7gav",
  "key4": "3VgVdGbyH4RJm2nJSpGp55RLBKNZDEi2VNGR31SA6UdmTxSviyB1j6s9GJw1bwgLRan6xjppbuQLrJq8ejCYiaGn",
  "key5": "4V7Bipbn1FRF6MJ1imqRvMvjeM4gHx6qHUvak4nd8dpV2B6q2qztqYLAuwT6hWsVXmR6U8KpR88tds5S8wE4Sz6o",
  "key6": "38EaP2YnXvCddGPUPJV1KotumfssyngeNLpNxhKYymqJ3R2a9kVm9N74pruu4Lhbfzvv4kukriTrhbvBj1EDJdBW",
  "key7": "4sKPSDW2N43PGRErdhL8AH5f7frkw2FMvjgNcviBisKqvzXtum4V6nTtAczyyarkL64hFNC554yrFk6gGoMrCM66",
  "key8": "58zmpGh4BsDicJphZeoH3y5BP3cetvP58pocUGk5bzLa6f22Duv6TrjiHVVC8NcmwBgfJZxEHntHFShxT8kUhXvQ",
  "key9": "63UBULvN1RB3MXdByDS48NgTGXKYfWntGXhtVn44KQHC4nx4DydCwqxDf26PdeWMit1JXJYho3SySfa47ho4Sxzx",
  "key10": "3itmbrhgzUdAptz3xRpA2sZ8jPwuPGpyTLFsykssMbJKZZwUfhvFVDFbemrQEHLKgr2oTZ9UhxdRhPAmjd5SfR1g",
  "key11": "4LXjMy6RLqVMoMxqA9GfEvY1aFu1addkiKsnFC7baKgdcByUZ818UMk1RoamJ2wP85Em66Fxqw3qG3cXnE6rtqSg",
  "key12": "B82cxCZWUASc1y4ZmkeWbb9chrJFcAP8YgEUTNudVwBf4gTnLW4aPkuqTd9CwHQVsFh9NzC8Wm7gt9CLpgciMGi",
  "key13": "2wdi2UMmPPBQUpJkbmGSuXSoqwzw7T6KwD3Vux3t6GqeWx2Ya46nEYrDoY21x33DXXYMxVkoXpGpm3rGwD6UEfQu",
  "key14": "3mSFKCJ64Re7cdFNF5xADCMTGM8ZkKbUMvxzSAxAi6FRgiBWuDBtacwsX83jRE2b1hU9Rkir4ZBBJpfre5DfGdMq",
  "key15": "51Xc9Bi5MMzvg5zPLkWMQovy1GywCs9NFkdaPjAggLgL2sCkVCtqy2yaTFYraepzcGupHoEkdWysfW8pJLB6773w",
  "key16": "3kfDi6Rd8E2apDFPhMPPJFsXAYU1fzWkvPVnapJtcnnFF8viG8ShDXGxtfFojJMVwwoS9nkgs7AZED1VtXkfgS5M",
  "key17": "4HNB896d9axradq6BQHzfkoxSq6cjmujZRhmKhMSt7TeWAZ2VEKDkmuJnobdc3Lfzi4REznv1M7nBQXo6BwLKHig",
  "key18": "4QQsq2Wc65Nw5cTuWLTwjTDks9EwzFA2928VRyb54ATeKQJ9nSo94waxEhvqMvhZ8w6NyoZ2uiqoMA6azr2z5ehP",
  "key19": "4QDPca1hF1z2McvFEmeGi7ek8EXWvvznhsDaEUzSwMD67H1DffRtQED1ZmCixSKoRFMqbnk2Ntd1UgR9BjjC5nmE",
  "key20": "51eyc2zmxUp1Dmf4SrtCGrsbKiBsoUCPyQLY1uM8kwEyp1ck9iTuzWJzK9D1CvUewxqa9JN7ipDTLq4ue3RPeCGj",
  "key21": "4FPsPpkXFpU3FyB2fwBe5RbSyBtPkmXdKiLWMWGrnAHJjX5q6ru62gSnmeGyuUuCZem9DU1dSPyu9MzeY6qNuFAS",
  "key22": "HHA3QPBqvmNhCJFRKZUfkWAWtqgTG2dVnr3LkfRaQScvdgtVeNeNxiBjpDb11P8iJLRugSgdd43tXp78K3iJAjH",
  "key23": "vEbkANRzAYAAnYr9686pFmuMN1yNpWsQPkhMLyuyFvQFfp8kVVT4q1tAM8jWJvyFpW6h2FdzGRTc4Q1nx4Ru3an",
  "key24": "5xF3XD9HPGEwAAZvLgRjahBZCBuvucTtr1dkPWGpj1qhiM9TQsRQ8jzWkeE6w59ShcZu4QkJ1uxfcXQDkJ8fiLtK",
  "key25": "pEopX5mss9pz96YYZ1M9pBpjnpc5xCYhUGDfeBCn6JNtAZWC7dUEo8kSe2s3YoJfbaFxD8VU26JB917UAdoGhPv",
  "key26": "3EySygJ8zLnk3qh3NvaWSiReacApc2VqirHxi586MsADj2mjuPaytPcgDCWsURFtkPMxYybH1QZR52vF9oi2NSBS",
  "key27": "3cPKSXSTx4hnKWCETBnvoYHhbM19ZqxgAdv3oHhtsF9x1sDvBQbZRRDXz1iGFfVR6hoFyxJTiehWLWmLGvmmpSpR",
  "key28": "5xSJPhPikG3VMfTz28TNf4iLT9fo2J6JRmtA9TCuVuohw8WNTvC77mDR4r3X3GddRnERx7qb5jztnYoqPmzmqXWv",
  "key29": "2Jq6kLMQiJcFgfdvDKrqXKWzVcySECNsCGYQAJN1MqNENf4p87mihesuXeuxmo6uBrSAxACUjWvpguZLJJBVPxaZ",
  "key30": "5wZs75LxF9e9e3NiFw8bubwfTyUyZsaiNv9iVm5qB3T8CWSZdHXQAiqPS1DQ2pCVDjgiVBQbcTutgNKJzGNXRpkN",
  "key31": "4KstWB7EiNCr2DXtKsMEa8ysdJANd6JGpJc7KYXadMCnMCFqEnUHYCx93L483Pjh4GoaPFM4hmZGadQKGuNCk8zM",
  "key32": "5gphPKKcocXEshuXduPQFDNoRK3kGxzoFyQxBTgjKSFSLHndogdi2cN88wNSdio6dKEJKYTEYKdbqoEFx6t3ER7A",
  "key33": "5Q1cns1MNYKda54PAyNGa9xzDx5EWE3uTjV188fCdmjtQPGu5XfbPt9FsDhzSZehKokRQaaBTuc2hnbzGRfcNphh",
  "key34": "5M9pQ3fkTMkcxzEg4vtLcTD6KGaxV78kVxzCAUF7BSEV8nqB5K3LuBE1YPpgyqmXvY1x68nRPaej39Cu9oJEEFjK",
  "key35": "398UPcEs51rgYuFghAEtFGdQEchkGorcEY5rdVfK2pqePuUoC47nktfbrVcRfJDfRUNMvbF7KVbDYTiYP3docFV",
  "key36": "5o8QLHcxgpmTo84pqacYwEgfBvcDysE3cZ5xtQFQYQBxt9gp2gNnpn51XyB1GLdPTB3yVzgFn48P6d6rM1YuVEvF",
  "key37": "3FfpBbAUqMeeQXsLHCYh8mDpJUxM2Ybhs4qqtpWkYpwvRqB5rx78vnDc1fCnEsw7c1kt4wqp6T4qE2d3D9UxfVv3",
  "key38": "puAM735k7GT7u3zmaAAthMBjyKuTgvLVK2cxDSD4ebUUbV4JuKMWmyAUfxLFPn9Y56FoYfWVB4GEfEaDG4ykCn5",
  "key39": "5YMqU5AY6AKALMRoMMSUxxBSSzcucKYgQhSARorHi9GLt4VAqwgusiipgsfGgJ6F74MZk7thsyrQJoVFPf2ADevb",
  "key40": "cJyJayH4v861Euc6mMDwzZRHVD4e4AZGzfiEnsNUs6XjCKN97sUhnKeyNnW4DT12fUJTbmLEHyutV58MzoWDGn7",
  "key41": "2ZPhrk2A9PBPSGKTPE2grMmx3JtDJ1JBXMGX3WjKoqDMvtXuG4otn67mZHr2c3SFWhye1Q2aBZh7FQcxt28PimUC",
  "key42": "2xjV8ysSMuecv5KzHoTMJ1geAZGtvmLE4XmhZsWUcGajNoKYuZHKb7Q1LRJrmNeMjAwhNyM5wg7KaRdB7M2iyFds",
  "key43": "L4mLTUHx7WsSb7r98XjwwbRVCJ1d5pDWrFFnpLtb9MSLwQ3TQGgYK1ijTy8AL4LtprKTu4CJ9B9pouGeYBgSpAE"
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
