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
    "qaPvafC9fG44Pg44PY945Fk22sF81jZbLnYFGnKbjk5xyRjbziKwmKYy6rT4uPBm5q9bevvo17AMjMSLiBtGdJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vej87yXh3ritALaM4jLUdBhxLvJ2XBritwibjoob1yzNw4jqizZP6aeofFtx8pR7NSwLwfgzn15CKhHiCEF1Fnq",
  "key1": "39FW8CRCYeHV6RHMuBhrbRzAcnFDKzahPLFXyeQHMNK8DiTSPZQYVvhfaKEYXJGXKpFTgzeuhyCucoD6VA4W7HZj",
  "key2": "2vZ4R4WjosrF67hjHhWF8AmmVfrjoa19s9PVbktfGW7DNLwJ5qLymKZPuFTsxgas47ZcX2M1hyC5iSpetWZn2Rxr",
  "key3": "5XQCmgrShyp7mydDPcSvcwHqBUSTWK5khVnCevX7Z9Qg1EERYPWJoGD6DueAL4M2BaBu8f2rqh8pnX1ui6NRNMkQ",
  "key4": "8W5AbWPwKu6ANFhdVkkhCrRCSEpnenm1bURTRQBpNCEGKVET5CRnqPpnFUMy5BhhGxMEPa65qrsqMznrYYnEjhM",
  "key5": "4XHgXCR5SebVsBiLbcENpHyZJYf2F1UzSBFwSvSbqHii8PsndKoZHwEsZH18tFYGDi7AQbBPrRfz5h7FR6nWN6o",
  "key6": "27L5jTtJmRa9ZfbZ7vFWaqnc9Fhfvv4JtRgDELu4scH4CrCuNSdahTzq9gMARuku9S6pjgQ9eBBbZRmjccN3NGYx",
  "key7": "yTDNDbpM4fwGRDD8fjxUiBEAR13hDxcvSyYdMsvHUDCNTxjfrHK3uGwAGBr2W95mKW8TTwzGZuZn6DQqx6HVR7F",
  "key8": "2CS5ux7nZs3g3D75iQ7BoTeqJsc6gL7uXsytr7gEMsgNNZdiBPEypNfWF6MxxJ2gMP7MCpfDgeWsnNaQCREwPRdK",
  "key9": "4oNRsaf2Augs8kxkkBPPFEQcC6wXdp3enBVkQmEVowW9zkNMbAKmTqqHgnnK3yE6LBtZJ3CYpvYH5DgW1d4fMiPX",
  "key10": "3NjZ7ftWwVQohRSSNHmAkDdZapFMcZp15ywqeZWftkjeaBYM85qqMHgV9gpmEBJuY4TVfJSYsNdsGyy4kqN4Y9g9",
  "key11": "4xgLv82GMNshc8adkxnURBFwZB8dw3MEf2korQ6kC8qPm6cQ464PNdwb8Whny1JmVKXcvptmXdL3n7BnNghL4tPS",
  "key12": "2uN3J7Ddy3iFBqVphW8yJoXVoiYgJz2jXx5jUp7h3yV6C2AuJQjfErm2VhysXE6Xe3jrQjG9Y49Dmm8FdrgNANtJ",
  "key13": "5N3z3QisKhK4BvWpChuXVM13HPrVdY94dN75HKVz63jDWXMKUSPNaQFTHNh4211pxHdKqbU4WNSqa51FPAJyopQP",
  "key14": "61A5zrAPzHFUTD1Rcj4HjzwPAqANGMCTZmYNZgKFYQmNvgL5jVWzBrMggBDDFVQyYBqin7zvJTcA8YozCVRMZScg",
  "key15": "4TjGXuYUK2VFzpCcCkEkSHCbdRbB5uTSMoBadsbAdp15Dg4Zcvimdwr6mFt7u5A5VDvWrYtK5KstHcfdvQU2RCr2",
  "key16": "46v8w8kcLq29TMD6NXgG2rXxekFD5uqnumxsv8Jf3vAT5BMhjmpycWkFK452tVAoWxWcQwhtRY1L4221m6bdkKh1",
  "key17": "4RtPbtSJDFmgN3ojHSPwdokF1cTJHCx4Yzqe9ADbhF2X6trcU7D7JnXWbmXCjq2e34q7iwKZCsMd7v7NMoY2TJ3",
  "key18": "4thSVo6ieJ7FBDRcRUCet4KQsxEkcGEcAYnkNT1VNYveQxWZNS5jQA7L4NTB2L88xySev65sDgrCZo4dTtT91GeF",
  "key19": "3JjCTX4C3RPGS66ycmdDXE1S4jM1CkP4bbULRfZEcydH8qHTiuJCQLGvVJBdbpUyrYft5wAC1CtnM87xkHRgZCVu",
  "key20": "2QRNwme7kgjKRJNVqYrN7t6YkEJ5c4Y1zJTGFUe9FYTZT6HR5DKvGsNPuwX6XngWy1cn7Naeon4BkzBvnZRnKEz5",
  "key21": "38dBqF1dGEhoZ5UjAjBSCgPfhT9C6pCzeX2GTHok2mdPWuPT6fcJkuV1zVpeHKbKr7fDE1kDK998Wk49G1dUpBsC",
  "key22": "5wMvXZkVeuNrV52fv4gHkfnZ2jy1Px9V157scCvH9r8jnaTdvZ8JiyC5kduksSSzyZeAZey2RR3dEN5upyVZaLXC",
  "key23": "22XEuZV71LetcwgDjhgAydYf6N1sBJfsKSTrtmh1p4kj8hDQHjKSRjPP4H5vBueiKi7jeZ9zdyr1gYEeCMDjsKpQ",
  "key24": "3QZr2LPDgxbBd7JX6iavS43EVfsRU1F78e9gvykBZiByoueibAR7LUyWx2mBjH9RTA59u9xokzTCdAvrKZ27AAd9",
  "key25": "2EuBwSmQW2Fei6JMnAecoRJxo74Ej37LeZihzzh7CZABBTSk3bTSbjsTWMjhmCsPCNH1X6awWLRYNpTZ52Ct3xvS",
  "key26": "2VasPYtqCusTXNf7iChLFdioQNm1DMC94Z8mRAo8xDkQwwZBMC3XbUe6MkSr2SnGuffa1sbdiFEZdNCf3g2qafH5",
  "key27": "41cA92wjZEyZSaaWF59NLXt6cRpUvoHsneSGD3wEFSVeupeJzwHwmGGSmD362GZmN8CQXECV5iEWWmtJGRaQkfqS",
  "key28": "5ntaKhx9MXfNj27SGchokZ2MyLZ8E6M8i1Ez9qWzjAHMC3s4yknsfUVXwAeEnH1hSH8LiK8vMr5Kwzx3HrteRCDr",
  "key29": "5JnRzcWdT5f5viugcZR1X1aYLSHSL665uVcikwjjEsgfcsa4UFCiYw2PGE8KGUsKk4LYG3XEcrDeAotADaJuCu4A",
  "key30": "3ej3j8sSxhMf1HTLkMj3orve8KFqNHUbTGsARXmFbkW8hoyoHNZm28t117n9r5oUuL3rU2ekUgVNc8cpA4416vm6",
  "key31": "3xGVSvqxkoKqg21x3jwYSZddDcWrNdZaRprugQ3C6GmArmAzrQxUwPHDvy4DTkR412iJBkjEL7SLLbp9Rfy8tc6H",
  "key32": "3AJJhQVPQLdtg7bi5SMBVjFgao8gexpaKDLEdcdWkzmCzFQBReQM917pyT1kRBdHnAdJPCRxX1NhhRCgcSjYJoT7",
  "key33": "8yAAmuHXHgxSHCdQ4SsBUySdMYYgbjFDB7Z24ziyjxDZhmyCM2tZURu6vTR3X1watAUW5EDg5mX4NW8mtx1z7gu",
  "key34": "BFjxz2i2QHWXm27AXb8vUjwgcCyqMVbCqRmwiuc9Rt56NR97Bp6kmyr9VEfxpDQG9ACW3FLjW7seUTQtiz3SUt3",
  "key35": "2MuRiYeS7DswFReMdPpfa9eTgMqwEpS7QZ6m9uC82jbBCm5K7VABDrMKV45eJ1Fu7yXDW6DWPaJSkoUiYhh5jMid",
  "key36": "2tjvgYm7SfQcPZsKv4hvz7xYE7k1egLK2cdfMfJV19P1zAm2mRejLH64zbCGiHkUp8Yvzc1TyQhGFq2En6UcBTQd",
  "key37": "25fnewouUv3WbhUyFo5NFSPydvjtA74FZJW2qMtwosdCZntrj4eSko1aqsWLRtAHGbGodhdkiwkjdahjY7nbWAzS",
  "key38": "35BxVBtfTgAZ7M4b7z6j8YbDPfNiJGDANiYdkQ8yaab5wmE4wDKRp6vPNZHX74C99ixwZUhtPLerb7hXDUHNbCvG",
  "key39": "2UmDGUPtoEYBhbCHmDsU695bMoez9QJRETZiSXd88aENgi17qpPsWs17xexQfpueMFCTngmM8FUskyVSp4RBPtF9",
  "key40": "4bC75hY2Rse7PuSNBsNpDQdchurbgaZT7mXJohHvYugfgVS7Cr8wq42KTu95ywTm1d4Pzgejyi67XQaxXiGouuNP",
  "key41": "33Z86uxW5KuLFtECUxpG5cMvsSpJpUDiZGvJNCG2kebgJygR7ouWm8TR7kZSQvLKB74Brzby84UNQ8ddLG3JHSce",
  "key42": "336s1Vzcgcje4xx16qAkprqJhDxZtEPgfGcKH2W6jSJKt4qCGcKYH14Zgs1Nzv6NCRThp17FUyHCsCopfjHfAD9c",
  "key43": "4PipwByxnGsPCzW9Y6EVbFjdGiP8aD4ot6Z58pVPHhi9bZm3tSgBdG9LttUF27Y2bkUHVseKuMacym8eQK9yAQNG",
  "key44": "ao7R1CUQPxuYhw9fC2NwcXVoahzoNTRoPwi4Yzmv3H7ENkoNQzeMcUWgqNTwXRMU5ctPyf4febDewCyFJKVUpPv",
  "key45": "4oBnY4VwhsA8hLkjfcGSK94Db6u3nqhM64xhMmNfEw28n7auVfWuQytqDwKTnLQ5DvLo9H6RJWLWuPXGVnAqbbmR",
  "key46": "3YGexAKtCwLEJizaoymt2PRs6MvGwYaQcJoUtbQ4n9Ca7zHSt6bqj91fUFCx26Zb7xVWP5GFuutQXYgn7aFMeVPM",
  "key47": "4MxrYFYbsbycbJVAt1zduEdjv5thzgm2DL5tRQHVFoUFPpgarZqctgsQNniU2SALfPxFi7TiEcarDqN7ZM1iGSCY",
  "key48": "4eepne5Xk7Vo6HhYgtUFkgsT2k47a1sCLm8ZRKj4BAn2pynYTkwTXvo9BUc6pHDh1iaDNNowN87gx1DdYyeH7n5B",
  "key49": "G5YrzbcMy9k5P3pTemiKkHC328LpWc1BXAgs5BuG2JpQHfCYpUHxFghziBYyVbLRgWbcjAcm2dPa3wJkFcJJour"
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
