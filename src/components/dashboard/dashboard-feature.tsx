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
    "2i1a3EitwBtkAA1vaaEkD3PLzd4pBck6fKqXoyYqTuLk5e3rS2cNYx5rFSy2h8q5TrHRUivs8a6xfsezH1rkbFFZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67ASF8Z8GeCAxNmdaAciSWaXu1i43rU9ekmJdeTVAJskkw1NyiASTPjh3KiKCdSDFa4wkJt9C3rtvLWAxdubGPVs",
  "key1": "3C3ccwAK2apTbg6BUkcyrc5nSki8LzNHC4JuBiQBPVCgkGJvWkNEmyHHadLA5SB4iAHtK9eQShtYRH4DHBPeD6bh",
  "key2": "5yrVrLH38M92ZHBj82bYaiLfQFt5Yhg9FbZBHQdCrTqtAACSz7aRjavKAicmXYptkMS1ChhvhBrFunF6eonpKWMH",
  "key3": "3YTQ86fV4ZfnKsqy6k98kDm9Jz5oZx2pnjs4m6rqRTMQxtF8QrKgEquZQsmraBXhK69C6iYkLRB4AutprsWXCZbG",
  "key4": "2irBJdGVGKR76h8fRBayPWjkuzzzurxreJ1atFkk7R6Qb4a4ydPqAuppevNSo3comfPg5VaTkiBWBzgTF7yqtQ43",
  "key5": "231fvdvL8GX9Tdp6T9u7M5KpaR7iypQ2YxxpFQCguwanKKFbHBcp4odrU7fjwNoX3SthsGjgkrEzgkk6DAe5KSUq",
  "key6": "4oS55ks3hNWw2skQPygHMFrnjJrjXbTFbHE1m8Ak53X7jnEcxvtcJ8a9xHo8pj4ctnhRiR44WQ3wgLAYUpS8iwFq",
  "key7": "4qDDvJqc1AVDFvGdCzwyvWVYSuJg7GCLva3i492Rj2TB2x5QQPp1hPJfVTt8PFh3ckdQ5buVeNBsDnWTm9u4uXuL",
  "key8": "5MsTQDvWD9jbp7FFdaBWLc3TYSTPfYQZAtRiUdDWeacGo16YirVsjNe4y6H9RNQCBw651YQZL4XoVwEWtcsUBckr",
  "key9": "2a7V9mmzYEMWTaAbyazyw4foE4n7pSiZsPsZFRAy8GuY6DktasW9inSTrDQUBpaQd7kvYsVttfa5ptAgs5rbQ7mz",
  "key10": "4LwbrS87qUcyQzU76tUinQRMEbNoQLQgAVXH5ZvtBvWgBmGQZDKrczLa4bWm1GL1X44ogi1LK599JFuWwBLwQnvd",
  "key11": "tBqgY4DS1V3zUGoiXZXoyFbmWWayeCWAzxYr5w1u7unFEyb16iBrqVbw6L76mLCc5THN2jXYWA7Gksf4HfbXewH",
  "key12": "2wGXgV6G5exgw9ZM1Ds7tvXyZddFX8LL668nEH3rpgCtn8d9RRWJjQmcihE9128oyj3amjdwtXMyuV9f5n5kAUQn",
  "key13": "3tP1yi9TXyfGzgMp7xNVkuFnNbRzXL86iEF12HKNpoz8SQUtQvstLPbNmRCszoQFWibDweAL37tGy6nbSEihBtGM",
  "key14": "41CghWnN8yZXbJHX4KNGFQsSaLNbHoB4PmKkT2xyUGyrMyqE8i2DgqQwJ1KF7TPEZf7CmDMk51ceYoaBDssoeWsY",
  "key15": "2jC2bVCWhqdxG43vsbsFuHmJMKU45PM3KxWiEUkNq5USCxgyKtk9o5s66Y9oEsf1UjsmEpZxtY4BFuGL7qqeBgrZ",
  "key16": "3stHQfPC19ngY7yFqaLkV8wXcTKcJQTk4PhUgcncHafh2BpMDty8CnBmUAmV1GLSLmXfVnpCSv3ZtokZqyjki3qo",
  "key17": "5ZXAgxPDJL7owuvbDHWoM95RD8dG7428Vs1Br4a1zckgjDJcZjcfjsjXTCpsa7gJFSZq1YACphTpEhJbf836akga",
  "key18": "2VxvZBcHkFjFnbTrZniVRtDMf2FkaLG6pupg5m3bZgBGJBowo5b6ov3BC7YYAJPboHXBiYAoYrVmPiLo23nCsNqQ",
  "key19": "pAjVuaWo8PXHKABuD2jv7Twf5c2bRqLLgAKFjGJeVLwtdpSYzHkTBo89EUDUzigk1ZqDxrdNsLEi5T9iUHWZ24H",
  "key20": "54iGWFUrUsHfwBgFWW6sdYbFqwcHGUCqaGVJW9Y3uYvdiDXokv7UhbEQZtU5LhcLqWWU4YHy8cpCcHKEyikn98Ef",
  "key21": "FUkDWpdkJ2byDZp3FFaQR22RQ7yUT64mzxJQ61Rexg7FWrvSfqC8jaFoJzCr2pKa3UyKEYCL9cERux7oJ6LGiZG",
  "key22": "2nBrW2KcwEErskHDmf7q9QngdPSSdj9LARa8LjpJxTZSUBNveMShmGN6VqfFaRch4m7RsYPCV69r1b1gtwgScmuR",
  "key23": "3xxxtEu5bU5wxaqkpyQqkJqoMnTZVq1L3iTrGByQdV3U8CMyvyStjbYe2G6Era2bB4uY5zvYLBSWsiSZEkTzAtS",
  "key24": "54uH3W8Mftws8A1K7qAt2f8FuVKBmKxukLQ6a5SZSofSpuYmvyUo1rtq1ehoLzSQP3EuGdxCLrdbiPfaxGCDMYtH",
  "key25": "2aaXPoM356SmRJ4w3X5QNmXBYGBtyJ5nXkxT35AcxN3aqivri3zkiDHkrGHYGkxurNYuaRJArjfCJYJc9JvwBdQq",
  "key26": "62Gknx43cLm8nGkERiwBfEPyGDe5XRTK3NTDwePLNBJcUTb5BV3XsQtDCdcWiNNVrXGsiwxPZSfn7twtEu68AZ87",
  "key27": "5gASVAPEzoRbKwYgCggqHvGaYSVSSmD4aNSLLpsh6Z2bvVBS83XSgKqG2yNnTBLi6FNZJ23y8F6wxCjuh68zCTJb",
  "key28": "5KRopzavJ6phknKkb6bEF43xn6cU8VoknHPtKC5Fx7vMtWRLjnDvoKZoXUnyrYShTqCqhHje21uMqNbmTKv4NhxG",
  "key29": "F1Hh2mBNKwmMRwKD3CSNxBofnNB8w5CLiq6soSEShM1b14D4yD9sWhvcpSpMyJeZLv8zCa2Cx83Y1mJ8TFbQcb5",
  "key30": "2yGiKx35TrauExZTCLYM3eB6SGKS9KfyDRiszw1GDAnhuwV3Lh4y4LMRuSENkXjjxZjZMHX4Xm5NwMihAvXewHLn",
  "key31": "4kkuXS75BQhtrmh1TJB5xzZhmpwRUprzg6gEYd7RkbCaQnfLq9bSRvoJ8rJzicTefwAhAgH9SohsebeYbYEALK4q",
  "key32": "4QZSgUR1cY74KE2JHSVdtYTTD4bcaDLH3xJoqzRSGw79A7EfVemWzoUBYi7d5TA2BbsKmrT2mRinTxVWAEbd6Ud7",
  "key33": "4cz32xc7EQS7kcew1UaWg3ireSUTsHytMzzYY5qE8sm3EkXXvEdsR6TnTxSxLSQf8FfvMJCrAu3cqR33PPwv9cd9",
  "key34": "4JE2HzyfXCTjGD3ty5Hyr6dhTQoQb13Hby6qtL7h465zVvnqnM2WcMreVe3yKar9vcZse3NP6aeUHPg4Yr31Zon2",
  "key35": "2FRHEXCMjYvvMUrrzn1qR5vtCt5P19W11qFYYxDnrjJgJffR7FY6maqU85qJAFFFo8himeiDpRJGtBT5Agw2sceX"
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
