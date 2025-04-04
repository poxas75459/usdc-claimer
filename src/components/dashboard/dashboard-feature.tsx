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
    "5rkuofxd1gvJvv9d6B72EEA9fMdPC5LChcaZgmWksDugVjrRux2wSwppPp74KrYPvMkeNAsZsh42pjxWE3SbctPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DFx5x5xMBdirjnAuWHH2wS61Tzm5AZmLK3FdkXjKEmy3HR3v2GvVHahGDMoVhAVjyQKLA88B98hi3yP3AZc7ixQ",
  "key1": "22H4DUJ6GR2ATJtfvVCEZPHXpaMUrhmfXGqdyDa6h2QSq2NZDitbcbw6JAEv24nWtDD7n4xWLkBaTsePVGB4PKv4",
  "key2": "2f55jRB8QCzmW6VFj2hFpVkb6Huyykp2DDnxQkXmAPSzfrddzouuxbnWnjc7b3Lc76LSt3ZDUvztKVdenJvjLTKy",
  "key3": "37Amnrgx31RWt8HT3c5D6zXAcGWB2Ly6gccjQ1mPHfVwJQM9GmzpRLEDDVRZTrRVyBCfpVCF6nDQALMu6q1UrMhL",
  "key4": "34Mq3m6TyyhJiXfifKhcZmuZFRgR8MfYt2KXbm8YdGxA9EP1iCiBeJyGQNhs6PCqWPG1Rx9Km3w8mVUsdcEuJ4vQ",
  "key5": "3iPDpWaRyh66WHRigb5Jp7quScwVqjLc9b1w6TJQ7VBjZiXxBE1HzFqe5SRXRxigiMSutPkeqv2LtZRDJX6Cwwt3",
  "key6": "fRMeWbAeuvTdUG1rqKCQ1YHp8GsvKiiALt8sekyDunteniwv9Mh36qWioRN39qmG8FfUNukwbR8Q3FFTmTHXxmY",
  "key7": "KG8T4NPuhPhPvwPwU4cdVurjPgBQ6f4zWiC6Dz3gNayxUuPt5Wi55ZH5LZdGNTrojUtJCRZwt8b41E2qMamyVBp",
  "key8": "5pka2kxx5jo21ADxCb8h25uxa5XcnkpJcYsVaVSFtWfm41pNdiNzJfGpbMFK9wvfTgBPuN2o5JKcjoTKMAZvvpDk",
  "key9": "58caVMacaDuvQpDdmNNJRGik7kD22NrGQpPSfA6ZaHB26UGnRYqsECCrEtWoixLg9vTqN7id4rbjDmT7gN2kfqn1",
  "key10": "4s2WKXxNmab5iihiTBbrwfQkAaqVg6enMbn7tCeZF1P4JJRrj92cKTcqfYCwrSoW57aFq939KcCvUuKmEV5pdt7X",
  "key11": "2xVXPqJLQbaj57oZAdP8rtAtd6QVwpcBn28VitrwPScGYMWU6RZaRRE4BjfiepZAucERds7H2ops3YeCXcy3qB8E",
  "key12": "52FiwDqjJZsnrRBotUDYMXq9QEyfE7U3DL1UCWqDHkoLGqqbDKSFdokUwTB1sNnNtoTqTDwxTBihk64udPguzR2e",
  "key13": "5tzDJGgUKGoGAjJTC26TFEsvz8nB1ZYGizMso2Hi6DSYotvjr3jarqyKu5HwR4NtQatev6GSiBYxW48U7j1mTEQ5",
  "key14": "35p4DWjpxxrBbj7Jop4y13hE9TsRAqzz4wMPYFFmTdfwXfo3X1mWXuQtpYkYw17W9C4SYn8Sm8hDRE7oYu1KBCRX",
  "key15": "46sprWBnSKhrXpqgzBj9Q8eTranXR7ekHRBYnvadh7qwXDCvjpwUx3AVqqwEdQooLcnUnLZ9fnr7mH3njxhZ9ojj",
  "key16": "3T83m238tZXAq4HVoMLoDxDbGu5YBU5bSiF3z6HkF7VyYjGMQePGk154bYqpdFJNtpyc1sjQHCKr5iAPK8mahQiq",
  "key17": "3n4jFfCYTkaw1MLvc4aowtt5m3mWtT5dDkMyZyA7nL99BSf8dKVvJYDjVjXkho6DAWeoHyf7UFgpESC3SDqCWvDz",
  "key18": "u1g5288xWu4XPtf8sRANfZsckJPNAKL59ZnopDuLMUBMVHRT8nJPStHFGGKjWSPHnB16Ty6WJGhuLCVsTN1DN7u",
  "key19": "3cB2s44yBxHgsn5fjER1CYdEvTGjDsxt86gNfqcRwVoVfKrBHb66ERNmNtpC3uAAVWC3x6XEGJo4RtizgLcVb5Wn",
  "key20": "5YabBRRTB35xLCDWJd38cCYb4tFWGt5GsscUiTuViE1z6NEEc6RSKV9FWKWkG1TVP7zWbQj6CuUdk3rEZWvhznTU",
  "key21": "3Z47PhCA7suduidtRb2bAmcY373YKRq69aT1kC5GY46hrLxDt2WwkqZvgZDKtKgjd8DtCg5DwHWcQ6qujJS3hymX",
  "key22": "2W8bXBvzPqgPonugU1dkXYGtF8278V5uN9CUKo8YFx1fhLYsKk6eVuRqQyQaLsZhpNJYRaiguaTjpJZfjwEadMuq",
  "key23": "4NFKsEaV4xWRhQJ7CRiszzw1zAK7xkE2EzjEkPWTJ2zPg13RGrPyLa5niWmt4Vr7ou1rxFNwJDwy2Wrzb5AoUZdx",
  "key24": "FWGnvBnbXFooR9zLLzHXVbEGFq5jnNjD5MAwEZQLTcHuZfVzZxhMh7sUJP2dPZbLCKhM8S1Se5pjP1gX4nYCMKC",
  "key25": "27pojSrUkWmzQvNBEL4TXTpBYT1EWpYRvPm4cw51P4fhWLrUefmkuGg7hobmXrX52ThURwNkZ3DhMNdAuVivKZoS",
  "key26": "4ai5YjVgmqG26FWnTXGKm9w1ucKqPEnkK4zbsf8hf1QCmU9ug5Ze5FBguaqLqzp9MVXxyn7aT9Um6VfVMVXP67Kx",
  "key27": "27bPJeaEW7Y41fnh5ik6qJ6kqLt7h7Y4WcufoNEajRTUvzaHZ3KySj4Ud92CjoNe6zkv2WyBDgP4VPN3SwAjBEZ9",
  "key28": "4Q1p5ftyRvUS1JzEKkehPYkq3RoWpPeUN3TMBixF4VTP7R3qkzHmiYXivKnUL62tyMjdRMMGMpqnsm8zia2eFZG",
  "key29": "45JJN7pbks8m6eb1ALv4NE77mGPgegdbgXH7dPArsZdGy11EoWg1zBhgJttAnp7V5drjrf1yBd9u1qb9Enckf2Dw",
  "key30": "4Wk9j6kxc23YwtnJWLjYG27kNqSx6mmAe5FQAZNXqPCdLSFkZjC6Zz8Karb4RULDigd9ZDNjnWieBBvpwB3QXhhx",
  "key31": "nFNmhmJ3ZdGRamEiq698B746TnGzetqt3bz15nFepEKXTAEqnnmaSWjrW4fK2oWyZv2K7EDhuX4yHsZFyC39Ayz",
  "key32": "53P9vCMDyL72636VnUsFFPMpPm52Ttp2ube6PXC1rEcxSyFgF9GKH62rBsMxVmHninPvGH3AWAcrhUskSYSXQNoE",
  "key33": "nRc7LgQA3d9nSEAq8S5ar3AqQee33RF5eNdacQnk8ePJoux866XWfDH82Q5Hwa4R67aBoLvWpbKzFk1iSGWMGSr",
  "key34": "2CjRJy6e7tUJrbtraMs1XpZR4ZhyWi9pgeXesuzP6Jtt89Z6TLQaw2S3xvSuZHZYqBY5jkHAVz3aTujhRqgSqZaU",
  "key35": "4F7v2589Rfi1QGi1u5CFQNiMaSL5ii1q2wi8KdrXkrSyFt8NBcy8fcCPMoVAAJeGDVMVr5drTY4v1sY7AgyjFs2L",
  "key36": "3prRJS1FPAhDcGq5ABqjrB2fo31tMbPChzLLrsStrdornKxgPTKrM9evKjx52n4SzxcahUo4t5CsiFNeRLLRfSzS",
  "key37": "5AFuoBFL3mDTtwGervfNL7JUP97toWJt6fLRWXKNUmxGVKrv9AY9TzNBUgza4U3Zy4GgiasAiHjQ7VE8Rfh9Xzcf",
  "key38": "vxZ5Nkqf2EwqiFNNpEZAdEcp3zp7tRSJm7fLSQUw5FE348EJ1wcyTeiBVLz2xw4tEepie8yB9bmABXm3YfbECrT",
  "key39": "ZzbNP1giyGRu68RXbSUhoWAnD9BaNNo7DA91c5hEKav27R3UTMVtwyVnxUV3iSTZ2dpo6UvaBVPGMeekJyJBh1p",
  "key40": "5PLdJ9PuwTguMVcav9G6VbooiTJumDgzJ1rmdSnJsPEBEejrJWFR7FJ3HdSXGYzZJ5KdU9nwyF7qmF1aKNjAANyW",
  "key41": "5wBbnESiTbLQ4TorhrCXUf7K44rAizs8smaYJ9j78qhTNZ49YLaaNjrqNtMTeYSp4EY2a1ipxwPzNR29UK2kLM31",
  "key42": "4BUa8Ycb3sxgjNiLJS3NLBz23eef1K1w83cFmGT4KLcBWfJfoU8cD9bkWkfmpqJuw58EVY7N2XiLG8h1e1LgmRBv",
  "key43": "4WKksgd7HyNusFL8aEM7FPrWsB1E9bexVgCrQJdsc9DgHCUm9uoyfXvvGjyKsWKiFkywFADeA8vEPTdiQ37pGXjg",
  "key44": "3fVJo9awkDgGH6ZY26J4WJdeCpJmSXhbCo7kq5Rmc8tZo27UAsi5oAN4HqpnuD9Bua78HT8KvnpdHGXEFvQagJAp",
  "key45": "3Pzfoo1VKN1GszCHmxrbMa2ZvpnrG32ZyosJJxo99Yajw4trtGGJ6JhEzPnVkJWzRpQdR5oAVuvQ9zSAU8o1dx2x",
  "key46": "pifaQx1YEqGUT19FdB4cjXXx9cGgHqPZcGjNqaqAf8wz8LvuKGPYzr5jQ9Qd3gq7JRVoWgGL6JDePbeuZZHZcb5",
  "key47": "WEVNS4stau6WR1DZcWYDvBqB23rQjgLocsATZ6ZYLRqoXgk8URgqRWev1PqfXTdijUvi87Uac2LMEm8HUUtKaSx",
  "key48": "5mx9iAX637SafTcZAR1JpvivCE7QzWxezCSxu1eNkDFfa7g9wQWmyvRZc1K5qaLwaSNWCF34ECq7od7PyuBbq1cA"
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
