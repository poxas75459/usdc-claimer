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
    "4GWdQNuzEu9BYYidX8MjcKD9rcUMEGqzCLTDLTbWGkAuXNdXbWBDJxoePrLve8JKGYeKdL3QA3fpmUCvqKxNmCx4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G1QsmoiQr9Wx9qxehgRejaoKMubR4UnFxTz37Zt9xG8kmi98NoMdkx1VQuUkcgTYwiJZEZxJZ25fehLJoo7DAdn",
  "key1": "57gLtW5hcL8o1SKfYoqLCgkvtXaNtjAc556V9yPXdvzW9PajC2NGffebFFggbHMuFH9qM2AQbQJdQvwqXq5u3Nht",
  "key2": "2Wv5hkGvu7aLEfmgvxPr4FdyCmXKAt9Nhw2WDcidFCkTjXZzKuy8NJQ9YAZU8J7zdYVivk6drpcdt7wfkvHBYojR",
  "key3": "NxPpoZQf8WnT8qGyTPWG8pDuwBHK5btPr5CngSUu9sP29qKvnvht2KFZTajq3XAECK2dCxt4uR2ivRR3xwHk7wu",
  "key4": "56EdQERhJksLeFWAS9z11UVpmurBECEPoXH6tPgAHxXqNsHv2dVB6mEyfnB51KX4C8T3hwqwptgk8GpHeJdhcyrv",
  "key5": "3jaK9qiwqyRRkwWvQS5td4g7z5Pj7Y3EEEdQXQN82B5TKNcaV7iHN7KuBjNbwTGwVSGZTezV9WY4yvC4E9SXMPzQ",
  "key6": "3R2sYwaryhsGf9bjdfMGDCVd6PQ9P3qHzRwrtoMMa1o1CjHesHdrxp1pFq9uy95L7jxPmTsLLR24ZpmyxyZNrNAv",
  "key7": "4EPQ11T2qFYirSvd12Psd9fYzbYBXP4iT6P24i779xxkjWzJCh7pZYbWhpkB7ft4sBo43FESXw9CWgnq5JKLcmK5",
  "key8": "5jxNDXYBXDeRMd8tRnBM268bYCHX34epMKD2evPHeHj2YjMsGnuWLF4s98KfoQqnAH6yErx491RvtmAzKBNm1UP5",
  "key9": "5z2QUsEQUfeyNAK8b2yHXiWyjyTvRhwQdCGipKwJLWY6n6D1JCfax82NH5FGq8jZyAMvirMtbR1Lb7FFqUTiKCAY",
  "key10": "UXC1frSPmQLjYpLtqxGQeFdCmjtaWyvq6nmqFZoZjykSADtGD2qeBs1ZavQj4vrEzNXcYCUmer366rj2rqma3KX",
  "key11": "TdqEfMepKC7CeJi1aWRDUKhJNaLtFiQ1wMprgxWdnzxwqzgkp4yQNNaxcToPfweHNuTbWFRuv3D1nTWXGBXGoqb",
  "key12": "2e7qKGemokKTShBQ6YfrTFeS5z2af8hJSmfv12265NbsjMTAcjRYpL8upEeoUSWNbAVPckwyGL7tJ2rA9oRwE8Un",
  "key13": "5w9NNVZ7RR3kpN9ue2cTy7yUUdfZNVpBwSeJwShddhJcD4hAHxKJs2JND8VFZpcGQ2fES4ikNyAZDvaCy57oJvDq",
  "key14": "4RL9un5jbwawoS5FMZtCi12QTk8g7zFQPbwM3KiC1HxcxbHv6oFQadU3Vx4XFT2K7TbMMF5hLXth6rjq15kFu7hz",
  "key15": "3cLZSw2d3qd6TbBY1pvbxFoGqceASHvKr4AZerqxq2mLpEZvvbvvTUDeXqgBvrJj2zD9C6yPfAJ2p8W8frRzuZGS",
  "key16": "5SrnP3yb3PNEdpFcCAqxTT13B9qGSMGKJ9HJFH2hCm8rLKXMqGLd5LgNBHBN9ygR9Vh868tSrMP23TD27eaPoBt3",
  "key17": "XXQsjY5du62MQbAkmNeTveXMsaNKZzP1Le2iNDEoaCkDqTr3B7oNDdbfggq7THpzewySctwKN1axmpjoxXJKZj5",
  "key18": "6YW4AbPv2v6zDdJMd1E8GjUYkSzrGkjodvsmotH81WDHq2cTL5QFtJ7XrZ2tuiiijmFdvbPCCscRMsSiJ2uzcrQ",
  "key19": "4RNDM2x3cAMs2VLBfRE2amFwBpyAqApzLLEHeSy8ubiRnRWV6hUZomfnJzV9hGJUyYRZE1aAxuZEs7gqaAuZrKYx",
  "key20": "4dtHWZjzRHNSA791HDfEbs2gJoNXUgbX7vP9mQ8EmUkjTCwMvGxYopUQjiZRUiejdyp2hh5SojxUDSoC1biuKLRX",
  "key21": "2h7SynGi76jBKctZgTHauCWPn7uZ8hPw1HbNS5nDycgx23z777uUUwNZXtBcfKAmjoyWbob6gk4i1q1K5Ec7btyG",
  "key22": "3ERhzmqKN3tLsxie9TzdF3jvPLVWSa9dsaozPEL4Yvk3eWYPnNzU9Kkgc85Po37eruEokMA6NuZ6m1qay7TTRytt",
  "key23": "3Fj3XoivsF1aqiT882ENXSfMk4rECPeXSkakcLPsukA8u2UFRVTwKGyK5tDkDJg334pztnw4wdRs8oxeyUsZLYrU",
  "key24": "3vk9ACHkMsAyfzfzt5gFEbqe8HgC9b3xq5RGvJVnPgKBVMx5ugJNALYQsgUabbtbuq4BqU3YTj1UBVz7N9hhTCE2",
  "key25": "3TtHrJXPo2wVFbYYmWbCMrctMGe9q68U773HW8kYydbYjWrb4G3sFiMyTMTypX99ofGwrUKVJ6F8ksREtJHdx61f",
  "key26": "5H8WtvYn32cvffsUGTCWTHX4Sn8JLzAiy7FXcUsvqpdiU3XExg7MxtBDkA5tNJ5JHg7fB4ZSkxUGj74rH7dsTsSN",
  "key27": "3UC5LKFKs9TqCup9WeafxLzQdWnuGTdH1FNga7UyrPf8ap6x6MMV7nFUJNuQyXroUZzfQoeTVccEfEz6UVt8VMn9",
  "key28": "3MFPLBpPBTk1S8EeGfBFiwrSj3JqjG9Q62fNjhWHHyqpg21BepEziwYUpimCTwRZPuankggjWmWUNa8HWPK4ob7",
  "key29": "18s7yGCnKUDW7qD3aQuyrnWd99zjjEDWY2P5qnyAWE7yGB4VgCt49CcCfSYjkoV45roNQ6a7yrVDY8oskHEUgwe",
  "key30": "5YjNHF84i5pp4Wi7Wh2ZNzaoezMQD2eUxhniZZSqorEW9uVAeRtHbRazdxrWsvgfh2YEPhH53aMDj6YzZiehD4hq",
  "key31": "5vqaPTiCJ9deXhQQeC8ToG5jcsiamvYB15nhoYSnBZzFCwYFyi8NTLuhSAJkRwpNKMx92qQzV92T2tFsEdcGK3E1"
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
