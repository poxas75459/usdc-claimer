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
    "dEkWdQe2xZo8pTGvkhRgJoXVb1QpSiTzBiYGmUgFHCE4b4eLQEeRSFpnkNa6w69kzUFgUt7vug8aZRDt68SNbyL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p3KwgUVBVE22BAKmpXVYb8M61t2kE7s5ngsxsyert9wfuFXgHdycs9d7Nd9DjLTXdjTXadUiWUN98tTbwzLXzD7",
  "key1": "3oBFUDczJudZHe1p1LsjeCbgXt3fRGDaR2XkjSik73VUoFzrUNVeATZStLDiieXvxJnqvB7D36pEfoSupPVPA3A1",
  "key2": "4Z7XozMEt7NiMo1Us5gkYwWKjikBCqeAz6aZrPJfdL2LKt9VBybxFrDJNgmgxNKraZCjtbkig2aqYhL7TiGPWzHn",
  "key3": "562PaAxRA944nTCPyCi71smQkphhX8hhfqD2ErH9WwFFJwPzWmgjkDQGeCAwqP5WjadjH4VFQmiME7eW23HCBHVS",
  "key4": "4m1kJCuTthdShz4D4GxgKQG7VAGwM82woqoFPKvX9R96Kgkic4hLZt6YaThMuMmheg68QkiuSi8PyDeH5aq1e7Su",
  "key5": "48LNX9KEnogNVWzuYZjCzfhyVVaUiEKMQ8MKZeXYYVdKimMqpr8nxhtDyzkNhkUEdLGpoCLAACFfnepbnXcek8DG",
  "key6": "2UvXn2ffvxiQ2eJNAa957wTGrNZLCLEcZMWe9Mujm2XesChmocwuv55tJhQCojk3JHTuzASD9ZFaz9Bj63Ud2Uf1",
  "key7": "eLtRQgvbEr6dzg3NxNWxAcqP1bykPZ5Mzegesjm1gVyq4Wh27dbrNiPFRPUG7qWYseGH8Xm8XoeEH9cTjCyEWk3",
  "key8": "3pKBpt9WmKNNwoRXWrG6Z2RAWxpLAKMMvSc99DYymWoNWN37mwdRDfcZnLZDfkDxC6eQAdLgxNkD1SpmMNx1stu3",
  "key9": "2WduurnXGdPiumByYdfmMy7KevVbMNHr4J3bCAYF4qnGFfntCRYNaByvwKPVU77iG5J3GcePcAafiea582Mzxsbk",
  "key10": "3LGCSsdvCAM7dQL3RA6xwcWnUuYW4yKMw6XAxhZhiQQYXL9wESgdeTPz7ifWCy19vLvLo1zyeC9CxZiP1SsSrbxM",
  "key11": "4XbrifKSiBMSAca3fgNMann6hbUKEb59JjeaWiCpAGdFZU9gZZq8VFv4ZZxL3UVw4jVdRyTaYxosj6ohhiLDgumA",
  "key12": "3B7F7XBQsa9Xe56LvdLLszwRacs7F7QUW2PhxVf6LPA4KQG6ouhvtTsgCFUjRUx1LdGPNmTNvDJQD4CiVY94wSr",
  "key13": "46MyNwBVSFm4dyUeud4bWUvgXMvJNP1nLq74yLYtdvSS6tNWbxi8BggzVB8dyqcKGdupFUkDci869sR1ssRSaacD",
  "key14": "5wJgrNizdcRLaUVpfT5fqMYujShooCvKegKZASF4tcEUrULUCZNPzbWzqqNawafaRc8pek5duqmdGfHEqqDPvbv6",
  "key15": "3gXvEox4Q2yn1TryKJ7xvBmDJzv4WVK16Fd8iiPxaM1tQRL71JVN6JyUApua6JWZij7m9D8n7noUmwwXEzN476nM",
  "key16": "2fQN3rERgL8bLZkiYCVQsdawz3dsoSPiKeut37Uz1UBVZ51eptYfWZqwX64zx2Q8xBesX1y38D87VqGZMZxy1F8A",
  "key17": "3JUrWk4r852DosXUoUxsG8s23CnQMHkWaDX45TdRBbhpNEKqJFkBaMm8eNDK5gDebJgN65Fko6toiDNP25VZNgRN",
  "key18": "3QCGebe5renyNZWLpMUHwU9yApPFpMdcF1fTekqKV9q8Yea3tmmTXqKA9CNyn5JZpGJzKEDoxX4PW9D1sgCFxMmn",
  "key19": "4CaNM3zuNiqdoNDvHrZd8BivJ3JQHwbQgmJyPDcX4nS2FQmHNY1Hs58taikxe1XtU1AYMjt4gN7W5y8cWmC7wjX1",
  "key20": "5m1soaBMdS1YQhMFtkCLHKR5WaCNx1vE2MQnU2xYdVwyzYBU3Rvm3KE71k7AotHdg7RFm4KVBskxjXoQHu4te1qv",
  "key21": "51A6gRBC2drk7VVKNYAV9jYnp6SNmmdf3ve6CarxjsHYNWz6rm4NweT2y82VnS4VMBoC3bEkSM4ueZjZGRUb6H4M",
  "key22": "5E8T3USrM8nguKjEc4RB888UNk25prPnfYoNtTWnSm3uTav41zJveN1SVffxTg6mz5kzdBRQotRFrs1sV3ceakf1",
  "key23": "4qBTCJ5VmwLxyxXqkXHkEKYuhP8XaeYW2bdZceMCgHgFjD3NpuGYfmJyNQzJCxwVgePPxC7vK8eYDt9vqJWaZUb",
  "key24": "5pJxuPMdXpgCz4h8LcQ8nGCaNZRVSE528Up8qz8buR1CNuDzoSdG9zZGFLxNwvPHgL681YcGSCHKSBEgrG2se7wa",
  "key25": "2bnQLrkS1q8vGLteM1XLP91dZyNKkNR6akWnma9YqXf4XyNt2J51V3a8cga2Xgcump7NXYhTdc1MfGvoZaTMFyzU",
  "key26": "KH3MdKH1Jb17CMobSxtg47qhDgPTCTz7RP5zgDQCtmHP9JvodBHyJHJcm353zeop8AcmKZHhiE66hJKv1T7uqgB",
  "key27": "5wPEv4iAmh5Gqfcxq6zQ5yKPCf7yGZj56Zw3boGvCbHGC4wVGdMHeddJk5fhLHsoASTqGTUugek7Ai9LSQSXegkk",
  "key28": "5pLN5vR3Kg8EiFYqka6VdzL6mWQgxCxZ3u2qx92yehTvi8qXpMhdRFbR15GfakPuaPAmcb7rpvM3Z3bhsjWzKkoJ",
  "key29": "47XcewCVutJE7BiF3DXJVp5rhNsMV1rhqaBSGP4UHRkrG32YkFQfFFjYmWr1qooJzXskmQ3fV7NCJ1kyLtQRxcUy",
  "key30": "36NLknYc9xyx5DnoDKNznvmqbM4DhStFGNzEvtcSM4SbSUwmTzcvHw2qvvhgbUvLkgz7d67WfzTBRmMAnEcQJSck",
  "key31": "3zr3VTWAVyVgGXEVCm8b535GKpYnfEdXB5ENwYqDUaPvMDm5MHA2sG5qPFxkWnfV1Hft2D8etyxX9jtzBDBAgVNv",
  "key32": "KJTEYCUWpMPYMdn7SxZNsUduJMTR1E8s11aBXUHVzzwAfTdgsv4MTAhKbkZpZ94igo9btgdpDCuEAeGqUJz1V4L",
  "key33": "5KC75bny17iD3MJvRicLeN1bBaqKjHHtBUfgjTqF6Qb4kXY88aJkUtAuzTkwj7XHdvVxoPwjim53u58xxSgFtzTQ",
  "key34": "3oqSSAeHMgT51Qync9a7xRh4J5z1P4dLtzuSh2pPt2s4p4nVoLmCGCYJhb3L6mRLxCickJv9peemfBGtDcTRhkrB",
  "key35": "46iRtZrmwRxGfd5DQBdvXSRwMTrxsKSt1KaSs2W3UwDFXzKHL4CLrJL1eH8jiLuRhBid58y6TogSx22D99De8aC5",
  "key36": "2igr1R1egy1iEZM59s23QwNXLFZqn2fbWt7JZ722HjkreNBKT34TLj8AqaNJfPE9PAYNKP6b52fH9tHPz3vXFmNa",
  "key37": "2zsTwt7ScdddAvs87unPXUo9Qdj7PSGp7dJKHuTF32u1cAVJYbyV3mxxmyXZ6tm1S7Kn67XncASCNSrUfnRG7yaw",
  "key38": "3wLAfRUFcu16kWtFX5X3P2UTfnHfbA9c1aHr76x3oDxEpQScjKN3M6VsHuGxEpEgj3MvxqLw95nKiHanpfeLpELF",
  "key39": "4NA5aKhsSpMKU52FRnxGqMLDeDQggSkD7G7Syw3WjjJhAyxgCwaGorY8ki6k4tfpL9ZisJAz77y2VWiFLEWPR82B",
  "key40": "3HskN4NYj7YqfJY78FAKz2kZ8kwzHyrwJBCFsiEyduWJtqvt18FJSnJFRvCtaERJJytdDucJmbuUzBawn5BkEF1h",
  "key41": "3jx6HtFLU5p1WcnXG611R3j24paaHKdR8kM1C4BBirnSjEn7dYhAKzDxJQr9kqAYFp4FKkBsRqpDwEBRZZmxKXMe",
  "key42": "mCkxwTFTueUVekeznqvChowurxq511vXN56ceMj5H7KHrpQhF7UghZSpBLJHCRykFPzCSQRVigA3Sf7Jm1giuf4",
  "key43": "3qULEf38YFmg6WorzmAiLZQNeMt7m47T6nmUBoqmQK9KDyMdsRK4HVErGAXzuCGmmVGcaDo7wqsDZ4qGF9EKrjWe",
  "key44": "oQZ9dvCzcPmcbDSziRsAdqykK2szwZf6x1xv172DPdqZEKGGfnH8CLBnBJYMrstNsPp5kosctQB3f9AjdkR3Xxe",
  "key45": "4SQLmEDneyCuVAnEUMGy9Zwgrzx6XxMW68fceF874W6wEynXaUfrPoPAh6qD6rX7Z2bqv5LpZM3HTAZSaEvsrdaD",
  "key46": "2wF96SizbfJkqJapfE6Qq7HYegikSTTujVKjpabArvZDD779DxecKdvuhwosZ1523UcPphrkW8brrVphPmiAqgxL",
  "key47": "2Y2EQLTvHciMi6H1cd1wpNY9kCS8MEb4sTmyM8WwWviuwKFAE79DiCxVTgMV2EGAC3qu1tSMNNogGKZhjUsjPNvZ"
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
