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
    "32M2uyw9ysHpfmzPbciJ9AwqceDzcea6JV5CY4CUyMGkq4C3Cd1pgNfVQNMnhbTVfJpMMecDFtD4uqqZ4wvw3jEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XXuNYhrHF8MzmxDytQhAjdKFkWBPXgrJTRMMEhqvH5Q6eEnY7YozuDwgjv7iGqGGs1Ac3fmc2QdprpDykHrcrfV",
  "key1": "5SKPeWsMqrtayFCmLxDPvE1HLPJM7JX6gc8FBXEZyfQKJXA1WQaTDHDukatfhzENRFvT9sBKUfYj7QADMT2w5h4y",
  "key2": "58DcPpxbAM8owMWWnXNRLY1wuVCZP5GjQz7Xe496RxzCWRb2sPwTxxUzYSxJCxo16BcWAVSji2b6hKDQpupkaxEW",
  "key3": "4qo3rHix94wQGp7owVs4LggWkMi1NDJBfgVvrFKMsxVp32wfP1EUBN4nZMUp3CxQtUEoATbbLxHGDqFLk8M2oiXq",
  "key4": "kk5v9VgYiwEQkABA2KpzEvmXVQaZiMr4hfo9VoFLfpAhDs86nMeoYCWDNiKQKfx9bMcK3hDHfXe2HZv5QmrJwXh",
  "key5": "2a8etZrXoxx4quigDCgMLkMp36TsHbaNw81zp2TGzMPAbf54eNBQJXhFVeEvoxwMWkPjPo5Da1PbxnnL4on3D7jx",
  "key6": "51yQGsscDeoNLFkyTiEsGBGYK5ugsZBUQ8uuygAXxBRodiMeVtm2yVdgvA4RcwYSWz1tyPVhHRMVZ1xDTuXv1exX",
  "key7": "66HsdRztQfgzM1esPBrXf28JJ8P9JZw91uiZMLLpe3RERDFejz6ReJ8juUUvkmgDG2oDFLHrHspXJ3M2sPNXwGmp",
  "key8": "3nAVmBwZH2cw5r2TtnudupWy2sr5RnNJe48bm92byCTgeptb7bS2bFUCzwkmTuN8KGD1UGL9Mppazg3UC6EJchsf",
  "key9": "3Xvefik8n5yciPbT9tuUw54GD5xXPrUzxRn5VKg9YCrfw3m2c1EPGDfJR7sDeRo1Tp8nMW2X74dY337yAMFxVo9T",
  "key10": "tpr215LztdGLG2fpFkQPJpuZGiAoC9DKdGdXbvRgTN1k6h4nQhyowfLTGBh5gzvvERq9n9sx25PMZcJ6DEN5ZsQ",
  "key11": "5AFGt1Dz9VvwZJ2NoK5d8x5mDLGaE17QpNyvuyBbK6K7VPophVXg5pfEj711Y8x3HrGabB2Us9Hv8RuGmkkbyLFM",
  "key12": "5LXjdK3WjG6SwmrHPSfu9kEKPwU6i1qqkZK8xEXgXPiWQBrp4RDNwSHGsGrRYxQJqL5N7fAZuwKHQEkbfAM4qvTf",
  "key13": "37e8zjKLkV2oikoAMspj5rBs1A2ZfuxREcdrgVGM7ADjoR2jWyyGdiqmgRYvxofcB64jhiRPHNBANDc7y5QpBus9",
  "key14": "5eMCLT3pKTWyvYX64T4PKPzJgazeo5Vx1Y252YVn8gJjt7payx1or8PHDZKGrFZnziGuc2emZNruyrKCoNLZ7uTz",
  "key15": "4sZfmJFanExDQs6bZ6pBet3K3brCjuKjQkWxQRjey5fAGcsBGeuA3Ge8xWDpVS76fzZZmBFhswyM9cbVeqFhPMea",
  "key16": "T5yTzyf4c3LzEYmgLhPrvoNkp2yV7KUBmggPmn2fh1ZoYT4hgPUfGvCMooyo2hoos4H323ssX27ETrxiXqiBL4h",
  "key17": "5NEo7RJBn6HdUsdm2adLw37MdMexFrNaHjE6CxzKcK6ASvGuwnEepeudH8EMSFnPHhWeoJYipHiaaZQqJt5RJZEj",
  "key18": "2c517mnf7Mx7P9XzE2R1fapitc7S68SYUVWyeMPyceE4hq6F3M64i8s6VwgjHrbxgkBiHfe7EkqDpkhMKfeGQ6Je",
  "key19": "Xw2MVL71trePDgAZNBjZW9P7cT8ki6tQHZU5iBG44CgmdhrTqkDPFpy8fe5ezJaWxDDEVxmSNfC8TqfFBsdMAxD",
  "key20": "67qGngvE99f52YvemnWgg2ydbcnw9jXJmKGCYgupdfFoLosxgwJnnAYbcFaMjVXNM9hmqF6ggDwpbLfwR1ZfaL8F",
  "key21": "FnVGog8vHEjDEVu5cfJt3ub4nW3SmtBhQTLS17nnCwmgLPJJtWrGvudohPU8EWW5Tw1ksVEnsANFWov8jKadiWr",
  "key22": "57vzKwqve1mQmMSrFbh8wQoGfRsqirGvUevtw6N5tc4ahYGbVPzfPPXYExtrc9hjFE3cT78TkPox9JqGTC6wfb6P",
  "key23": "2ZoounXLwmjMauLUMvanstTz6EueKUSo7U6hsTJpJQeQbwMnPBn7Eh1dT9LCZztHAPnB8h5AqvcsgPBQXshGahpd",
  "key24": "3JnU8UkD91g5GNktDTU4Vvc9tE7KPJmvzMbzvbjTnnUEMvkBc2QFGbzjsvW3VZcy9D5RsXWr81vmK15EqaTe7rJ4",
  "key25": "4wKy9zmMhxTMubWQPAZHf1XG3kLjUFgHyRa26uRaN64oUotaWWt6h8kcZXPjFfQkF2XLXubNDUwT6akp4F9uTEuG",
  "key26": "3GVepS5xfNTNBffNyN9PZH1TjyHG1u9gwuQ8cx4EnjCeNunMsU4K5hmT8bmqnorxEdMVgGYfCqZpSHZatmEHn99r",
  "key27": "5BNCsy4VSnNodeAZh1N8joCdofJME3gvWf2RTYpqsw7Tw6ePmCHceju1aE9vYJCZkTusPFeZMXZGbwcVWCLBcmu6",
  "key28": "pmoQSFxc5tTgzY8m7MpU7ektZRW4YQoYKBMg3T2EyHu52zGf5fbyaWcoSMKyR7XZDXvfKDfHEpttEUSrTX8MdJz",
  "key29": "2Xp5jqQ8jzhhxt1q2F4t1zKXBnbUAsNSWiDNKX6CzJUgubHyU5aiDFJ5YFyx4jk7M33RxwJbMv1akeuhHbSqgns6",
  "key30": "2prWNRn1QyE1Y9BzqTRspATyUZvYhHQFyvfbumrKh8vRwauBPHxYQr3zAhjNwuDDA8MFoKF1FYdiB8NLPR3fRidg",
  "key31": "3S7PXwuxFBsoXnqhUi4bmUZT3kPVDy6U8hnYM9vvEundqzgP6p2Twd9Gq2Ve2Ky7iEXJNwR4MXnpQWygoViTGS6s",
  "key32": "7aoMSG2wtSFEMbxoBy5AB3bNsG8qgBnbafhNfnj48JNsU1s1pgWLaKAsJDVoV2AwD52HfcdTgLCJv6UKq3mN4HF",
  "key33": "2EBncZ7qkq7Vc1fXwrZ7tNQsL7rgKRP8AsyAoF1fbfqoJhQvJMiLsc8878iLGCm2GjAELtTN5rq5K9KHCeU4VMqk",
  "key34": "3JxJeAqiMrERWvWRvvPin8fDYqwADbHxsVMz8AVW8ERfhPoCQhHuv1CxCmnfJFU5p9wkB91rxcqWcErN6S8obee9"
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
