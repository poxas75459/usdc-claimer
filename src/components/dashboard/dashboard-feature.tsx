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
    "gVoNhWJA1xaz2R12X1mJLpoSFu1XCFrKdw95VngyfGyQ2XNSyxJjEochJpnFfcJGuE2ev8rk4VHWEbrha7RXgWP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QtnK5QKFLFhzXSkrmifC1dGWALeA5QBCU4hv2MAbxZpm1JzyuuvtvyZKBN34fUmE7pvQUsrazAg6VLqL5S7zKQN",
  "key1": "odDVjNYocb3SkaRNQifPL7UwN3y2gaCGsefCa3NB8yLfFQciRe1WdCfh6ttZkZruoGvGwp2eZfq872JEkFhqFqu",
  "key2": "4xsk5Xii7BiZnVECVtDYQ7PdxjxAAqq9HKTDUoEuR2ucg15Rd8qRDCBJjTStL5ynjBsLMzi74Y26xPNT2EC7oSy6",
  "key3": "3ymkBHjQyBULubjUTV8P9LFTKXM2dEqQsebCwzxFKNUYwQtqsx4XjaZau4hmStAiTrR4iNA2DKnvbV6ixbPyMrtH",
  "key4": "4VUWyoQDQ2nmKKNBREQJSRVjLRU4SBsfZzW5ZcRop8v5GLykKAqLN1rLFaS5KzE9V4Jzc82ckeFAwW3zi3wZqkKy",
  "key5": "4hekUQHuZuKDM2mVgLxvVXN4oTARaK16NiQ81orCsf8x2fEjbye5xzTmREVvDQ9gkLJqcNjKEbdrdtow1ou2sDwZ",
  "key6": "23APht3owqL5XZQq9fspQxEsNmyTfnFBwj3fUcZ1kzv97yAntzwmQNNCFmaSwdg8v7RZXugCfVCiMxc9ANdtBaDt",
  "key7": "3TNxX9wegJ9adwdgZFxDNVeJw6fH2c7KPG2sz4u14SQ5Jix1pZcrimeZhVimgMvRRKE6gJM8qztzcTLZ4oHgpiV4",
  "key8": "2vDacsYMe7avp1cQ8u7w4QxzkmAvQ798ZZtBREcXuqQHbPcyCVq5o2iNU7Pm9W38bSPT89GesvrbGiuDNNavyWAB",
  "key9": "5LhbVQt5fEicG17mhnnK8hmn3DxoYPyYfmBphPQAnGUtdFf1qFFdtxhfY8BKv6BgaGCib6iUZFG1iVr65CSEaf9J",
  "key10": "21WCSogwosqFsG1RYhgpzZBQSwm7WyjRCZn9GtFrgwMhHwsJYD5WV4JqLU3Vf7GjN1984v8v6HnbEhuWKnBP1Lo9",
  "key11": "3sdjLrmAbyFMrWgC8H3hVm6JKPG5ttkXFyhUHp7h6WDW6x8CFvX9mzh9M6J3ZpLZYRHMeepuELdLatyWcWCr7wR9",
  "key12": "3ehk8sXKdz9wgVP5isdFEbz1Qqsrn1Rw9od93mULq2WSreWTxQi5ZGbJumCHbyu4WAevBCaTt5ZLawS4i66gtcye",
  "key13": "4tHWNJ1jzRhphs3nSD62GEGFgo9Zi8HH7cAWhgkHqF9ZHZzJL165TUqsDF5E4w2HewEceGMRNQRrjNykUSGJmsiP",
  "key14": "582geTaCFh1KPWXAeaENQEt239vFTwwnq8qTeXS8EB8h6VSZjZgJYoeX4dt9Tn7j6HWXScbADAx8AEVaN5LgSBLL",
  "key15": "53QvRM2sTqSCM3o5Dfqjezq6PvW1i2nK7qc6L4FLjkm3wTWmUzRc87yZKWZ91iPq1QrYNf66cHDneCHn4zra2fCP",
  "key16": "postcuuQDsAARA29tQiU5aed7iUoboqMuAh5Xck2mJMJE8Bem1JV6Vdzzy6VqvQy4WoMiVu8MWPm66SUA2W7md1",
  "key17": "63bwvaNv98cyMRBpAs4pb3Z8jPxa4GFHtXJ1QDdSfHoEEBvsHyPT6nja37nU2rKwunYc2s6Dfg2V24U58Sg1Gau1",
  "key18": "23A7SyWXPePbsTgsKyJrQ31ZR7sqa7Ee7Nr63yyqGquDUaEY92AVFfP3RRSgNCrGpgFuJs1h2RgaVXZC8XLzJuhT",
  "key19": "4yLCjsHb5K6TUvepadkeVC2VcbAxvt5pmnPVpCz49NtaUzSUz9WYNwCZKrW1S82JjRNh8BCxxBfhcFEy3PQ5KaT1",
  "key20": "2icN9nssi1tMxdSSUiwLQ76h5SwveCYLCPzV55w71oRugWTBnhjvHjrvSdhPdsdgf5juhED6yrmCaQHbyWi4XAKH",
  "key21": "5cqxMpN7pSbGfTgkoEndG5gA3qBgJuD7mAfPguofizerooaqyCgjE6iST5PnnbiLbzC2QLW1bN9vM6XqYaLt5FUE",
  "key22": "5SUqTa4YRXLL8jezeX58DGFW4pW83FKFTX8wA168idJ2knoGdCgN5L4v3ZhujYZFr2uAySn8Aqv8a1EHsY4RHD8B",
  "key23": "qNJyVBgJDTjuudCVxge5ykyiv9zU9mt4y76yEWoTpXbBXKRn4ka9xJ1xDfWSUE9e5mmETRu4fQdNqK4EWGvrJMU",
  "key24": "gYNJFLgKPLMbnsow8biNPWTh385Qt1TtyFzh59UV2x6GKjPPzQrLxhaBmfUr95AZP8wQQVx8iRSeNnsC74djszg",
  "key25": "3Uz823dRhfzY7nDbqt4Hx4nPnXpU9ruhmVQWLMCEANoNbL5RfXsxrLtDbiQBf9LuCf8W4hVTMLVKDQCVstf4U1Mz",
  "key26": "cgtZzyDaqA7gdqmfNspHDAN3BXbNLgXEu55eYiGpngFJq1GuA66h42zkfKLCEZqX976whG1q6QWYHnDxCwiC733",
  "key27": "5btv7w2giSeoeXPHLuHkcENC2smmcn63EcVT6VSZzpErzH5aSPpNiLmypnJvWbCq1rb7Dh9xhbVSKGDCjpVHSHJq",
  "key28": "Ti7hdvYSmm615Twubt5KRzJJczKVcaAZWsrJySK8znKTxKpgn2BW7JKGgmxiVhGt2pxXeVdibXGdvzEyRAKa8wJ",
  "key29": "2eCKpaKGg8Hq2iLNSgKFCjvNnsLD57W9qyNtsXNbNdz5T3EfSEkoLBsYSRsDLqFFWUsjLCoCYAvbincNkCJ72Qja",
  "key30": "4riDqhbQ5EX9MGpKbhNyiHVQjkD12SuLZVM5D9g4kTjds7Wybayu3AtA9QQt5eq8L38nsYUJZiMmVyFbUZNFvvFi",
  "key31": "3mzPnsSdfWhLfkRtQ2SsbbCmRBa7K7jUthZQCouPxDSaqpJCVc3pZxCb5WVHv5RfGfuDtrcngmWH7FRgu2TW6VD2",
  "key32": "2iLYwNtpMKWzNKzAE54U3PfGiF5Vu894VRz7pffbrfkfiioRSd9fus3N6V38sggxUaSu3v1KXmiM3ubaZYthkpJn",
  "key33": "2Xf5vQnFvM9UQjEkbzsBqy3wzKJSfgcwZVkJfaEwewHpLCS8Bj61fVUwFurGfD6L33zXhJ89zAtx6EvkM4WcyFnP",
  "key34": "217WH8AnouoX9fezZ43iAChb8c3cU5qEiACWKhBmDq7sr7FgQZ6daJ8PfuMqT6BpNmhC4bj3m1CYTpGXg6S3DQf6",
  "key35": "3Cfoy6LXXAni6WnDCGCo6UEzgZv86wE7uMVmhVPx2S1B42J7WRd7dLUcmsppPtEsXJrXpZSDWzf2CNwhWW2WU5Kg",
  "key36": "239gvbQjyrhzQM6Eww4FwHV8nsjFa7SBrpFxeLuWybGPpRrUhZUEUGv2LaheaBVWZxg3wPbstv5cacc3uPiq8xY6",
  "key37": "3KqUbhbuy8mhWs2tcGn6Z6c5RznTq8E1tPUGq1ch9GAtWJnQUQzsYnSudiHpfb4VnJfA4RtJoqsmngv4nRdnyRjG",
  "key38": "4dMnPFxqVquydSyP6cwDrhHEkfGnBcdURkStZDAnHWkqK6BVcxh5zojxmAKDVCyQSxLp9TvX8HVhSRutnMnKedhC",
  "key39": "mPf1P69RXg5Fga94KZXoahx6YS1YvK1kzV3RwVAekb6DoLeuEcRWSpYe4pDozYB2iqUoUPPXkB82RNU76ydLdep",
  "key40": "5VCbeP8K4dPPp9W5mx1ajxvviExeLm7mQoNv92mynb8uYkk7ydZQC5WqAqL1zdfYX8SHvJF96rTWEPvASNcRdYGG",
  "key41": "3F4L82wQcsReMB9c4BEh7xVW55vHFBTWJLTA2Raa7WHh3PEWwbmUXaY2pxxND4JWBvjYc15AEUPRcAhTSKQqYebF",
  "key42": "yqAZ171G8HkmjnYU6EvngH4QeEMS7RXpjridT32zARn5rLGdVvxmP7NMhC1r9ymwsbsvNsZQwuEkx2RRynMZRS8",
  "key43": "2grEFFnNqBWtfbvycHF19xYssR4efSUHFzUQzTdWsrTRg8M2GF3fvW6xyREwhuTJKr2T8Up6fHEhBw6z2HKxC23Q",
  "key44": "3fjBJ2nLwFAfvLJfxrFKwjsKKz6q5hhL7RKpockmGnBR16SUNYrStkHfZqxF3YtLyLoFKudBdv2h6PSefP7GmgVJ",
  "key45": "5ZGBn4C5ypueD5PzWjkgfKbBo7THAS38wEKY6cPVZAGgok1JwvZYhuzGte3255pD8RT8aU3jt6bvQdsikz87sXgq",
  "key46": "4GMRSVo92ULSBvViyVxWZ9EXPGgmpcW61ScBvUCqRkMT652wnso1UN8aVCnmMs5xkBNZjwcJ2MAmELp7vvHsPKv2"
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
