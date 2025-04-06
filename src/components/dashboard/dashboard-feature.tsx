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
    "4qKi5LTshTh4cB9rFCMtLKKD5TtXWc4LMKyKBVV7w6KyS4CUMtzEdpHH3vuP4d6UjHJXgQ8eyiunPAr8zHtqvuoA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EnLGDULVTLAzrt4ohYpyuSkQEoYPiGQSu9vs7GQC2XqjTeuwHAJ8aH1kN7oKvgnWXRpXdjeHynoUw7o4kst5rRQ",
  "key1": "HzWGrXQnEhH54ZTrB4vdUBuHLSBapphF29ru9iSymFGWJuMuuEfCrtiGLqp1MdyVjQK8GuCtJPfnv89B6SKq986",
  "key2": "23Q1Bp7FfGows7ajxb66KDeeYpmJJ2HvN9uJebYZMDDNjLTVzg2U4F1VLFdh5NZn9oTAsSivFJfKSnpChymTN29c",
  "key3": "3L6Qr3kSWaYG1J7HZ4VFL5aerKpw9HcSpZtGqxwyzdR482iJp2jqXGYf2xnsaNhbrHfhNiqt9wfC1NgdGpcCdZrB",
  "key4": "5c4CZX5LuwFks6BVR4Q7NMg23Udwzo8Gm4p6FHGXLpTKTN7SY8cQF9jwgCibnx6P5mzco5znrohzg3NhPoRw4mjP",
  "key5": "21VeE4j2K8AFodVGoebVUT73sCrvrN9epXSNGoKQ2ADJxygRvhERgrvPiivrE6xgDr2x4oknp545TSM7bo52khYL",
  "key6": "44wb8S3f1zYAnag4LestMSD15Rj4Tng19K4hzz4F7KWCdAFkVsYQEowBcWiberEtBCEvJqVwY4Z1eue8QHiQ6sXT",
  "key7": "5H4mCvp7Cu6KSALa14XsqTVcuAWjPyjymYJ7CTXTmTfW1MvDB76jfr8MJEBMBN2Ax9tYGCkTNNQGyeqzGQqUTJ7C",
  "key8": "32ztP8LVCPRvd6YyqMUJC3HYRx5JkFFNcsHacSfALQ3H81GhVRYk55VH8QD7Lgdy77sNrak4jQawqMSWV6vNVkBo",
  "key9": "64zUTYWbA7NTbv5f3ZXkb8apF59QNSR63kzUS1yC8Pe96uegAKJ6Ryk2VMdUa8SVra6r5kcq8n9KWzTds7yVzLmZ",
  "key10": "nMYBWq1cgP3xa1oDXhRn7KH1okXnVr1AWa3DAA4ZopPy1834U2w6VwmCBbJ3aVc4u8mGWxBRze6PgXnU3V8KPrm",
  "key11": "337e6dTFeBsEPQXRYVh3gGDD1FK4gw6Uf4ben337TTrkAcb1Z8S9ZcDA3zrY25GgK6UceUrWfnZct94h4UMpTVmQ",
  "key12": "2mAyT3mHBMee12S7HraTNSf9QpLULXBtMfDd6VTbcukMhKj39EcPP3xGhcS57hn2EqhiGmo4qSZRjCR2R4h43cbq",
  "key13": "5XkzPPcZyrpWyaJ8C9HGwf7bre6TUMLbWMbRYPbd8ztRoB9aWgxuZdbXoNwcZ7rx1E4JFFn8yJrDLykdUzEY3cMx",
  "key14": "2ZzJXGNCfaey3AQcRgt4FLY7cwk9LXdDhAZGphvqcrk9dnoz9A1fnTtqTZ4b34gneGRsby4u3rQYqnq6aPTeTBjf",
  "key15": "rdN5gE45MYfJ9QgYGYkuXWPwFbzGvQPPRZ3bcu4twVfAj7YCUvAWWergBnBRRRXuGvDpaftBdrvT1vS4sSb5tTS",
  "key16": "hqg9iyZrZ1Mdpigc69nz5TpHhgTU6vCdoe2qsrjnfkKzpxZ7LPvY1fx6Agb1JGMxn3wdus3eMffYdqRbPXvWcsL",
  "key17": "28kyyNSdomqm67aNGzL521CgoE3enRDNogxSefPoC6j5CNJHFy79mWnz132fC16m1vxJgQ2t6EFWEJjdaxf5m4XJ",
  "key18": "5ALNamV5uDYWveSjwR3gssUxfjPhp4HXhm84fvtLyMnhpwpMDxwnvz2qMaF1PLyGiXz2f4SopdhFiVCJEcyUhLbM",
  "key19": "5hLsmNbCAZ2vNcHeH17qpMZD2NfXRnFxLhKPJpnso9wAd2mLzAdi7Ex1SEF4ypeBWAARAy5EaTszUXyAh2Z5VH2P",
  "key20": "nZCoiGhKoC8njAN3vuJoc8Bh7rfSMsA9DcjVRmiFa6sYwdsce6gGHkwj7Ucjm3HG3xsrNAvMd2QZECiHM5nR8rb",
  "key21": "2GmZothZnUdB7Mpa9uJNJYfkf1RV8ueC9jQ5m5FWsxa5159QnxV8AntNWxDP9Y1uipxj1H5s8njkBt5xo4cyMFA8",
  "key22": "5hKkkotJ2sEsM7KU4CRJP7pmetZgDzTsy4BCBrnDNwoqbs4A3gvjd2wXCwiJ6YYf7t9TxyATjm7Vomocd6eDSnHk",
  "key23": "2ihkSpUSQYc4fkyC4x9QMmcniqk8f1Rwik81RuWV4U1HcDutEXmwDZZVJHyykXHeVeiSzSQBEbChf1CyXWEScZ2Z",
  "key24": "s92xret2cJfHCUnXVQFmycP9QukZcZDXYbuSfYis8AUQ5UvziB4qWoUdVTHJWdDvghDeFcdecJKHmUy6CHxMq1L",
  "key25": "57mAdudDLYjvdMW4kdsAnFrFFNjRPw1ydb2McXn45dJpMAtSYaH2uTZc2jyAvU6zidGTupWCgsuUtiDy4Qq7PLWB",
  "key26": "ymEd2nZH7uVFs7hUseP2qSaxGz7PEAuGD5CGRZwHQbTZRVi8M3jBN9MU8hrxSvyoRcrzK8dYtwmQH4appX1ou9k",
  "key27": "4koaVn5PtmH8i2DEKdCpk1hWDLnU2VVqhT8ZCrAcu3Lg37TDAQ1f8nx668e1yD7YobAX9eNRybxgs9jEiUiFYTHg",
  "key28": "4Lf4D7wBaEwvg1k719L9ataChceekxdAeaQFyayHNcd2K9shbzo9YNsLgr95J4PZ2sEx5fbBL2upJFSEwUYE1y4t",
  "key29": "25tBbBTd2SkFWNYBcSprGJsBWJxdKWmhtk9Y1VdUACuyoCybK7ruVEBRB9TUkB6NNsLVwzTvTm7CsjPBjkuNkvvG",
  "key30": "2pGNFkkLfVPGRAizz51BqPCneZHsyUt2NSZQdCK7DjfvxU4EifyM1Mw8LQPk122j5NJKceL6gYSYd82Y4yu8WRXm",
  "key31": "4TVXWWipVz66nqCJqmffoC7fVzEHBZKjzt6NgbnMtA31RUVGoquKy7t4Vhoz1PsqoeDbA9r9tydKkYyUfZVQp5s4",
  "key32": "3HCcwKbz9VpEFEzd8YkN3oHcF7GoxiQyNW9gvmqJ7eYhyqoR2w5KtRJqGK1UcmiVpEeVYKtSQSKGf1yDL6qzhHCU",
  "key33": "5XXrJArQFXaaAN6m1bQT9UQndWRf31ueUpfsqGkQkCArdHGXXefSDCxgpJhHr5qemttnJQjjcVRKCXXdotPBPN8i",
  "key34": "3xcHYiyZvySSpDEAjCLiGxFJgbo3vzCBtbD8C25pNHDK3sQaDFTsBLchjFDvWv7TiYZw2FYbbbLdK9Dp9KqFVyDx",
  "key35": "4cwfPuJD7yrY9yz98GEigjvF8pCVdPxxf6S2a6e9PDkyWeKFEBc8Z6jKM82RBwcbXnafWycy1BpCvHPz9VJXBPSC"
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
