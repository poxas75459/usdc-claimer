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
    "22t6gxmyCoKzadrnGYXzBsr5yf6kDyqruz6VBWkePCgntnfHbmsMNLro27pL3hqbgjJoeC4uCMnwG9V63n7hp4mV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36y21gGZuAxRQxWZmVEP2ZXmAGXPTZqJAtzz2pEiHczFRhkuBkRYrkiSsewYamjY9YueuS2m7fvitFKx4rYyij1Y",
  "key1": "4jG28M27vxFeoom3QbpnqbDBNr7pwkJHMxvz76tvG5xigfiWTZ922R7VReUTzeejFtYwW76NU7KxMSK58zCpbi69",
  "key2": "2Gegtye3fryruo5owQPmQ8oFxftxs6HaqkHeC5pNHWFkUt84MQU3gexwraJfcYUcGypuSX2TNkAB4eKQnCkK4uLK",
  "key3": "391uaM6oxvcdTP8J8bfxf9HcEPWuJ7mWLa1hhKqnftHtMaNpNaY23ovV5qnqumA4eiAoAtB3UCTENrPmN6sDKPbR",
  "key4": "EBhCbhK7TftznqMwH3sxut6HsxPZXFnjgGgjNLhd8Y9gXZpShkndMVeWM4To85KcN7RX1GdNvQuQNDfFd8i8LqX",
  "key5": "2kJoewiu3SkoZ9Cmx7u1tV6qYFBue9j3Xq8G3FhsxQX7CJyhWXH2WJHWxPyWD1r1SMgAqmNeEe91bLg8pBka7nWS",
  "key6": "62VnP4nkgJaizxvAbURpthGYW89Wk7o13pYjy2NbEmuDykhDiRMQPFN267zCDYwUmnMTMMtjFKPNJYBrTfZcFCMH",
  "key7": "3NkAAdSCVhS8kmUdEgYn8M3o5ssTsP4w1Uh2RparYa7WSMXrGEtS2fHh7tUVsQoQ9uK8xddYeg2crSfupLX1XHFF",
  "key8": "AUtHJduQZSTMt4qdeuj74jvpAnHqUy8NWEa3yZvvAimdM6gtWsUpZRtjSjFXQnrGUwPQErNGnUHJkgghbtchgkM",
  "key9": "54SRaYEo4x6gPkrReqmgecu4LKWdppoS3o8hTtdbHYUMpCHFiU1HxXfVxFKDkH18V2nvDVYvcLZ3B9A1mk75y6Qh",
  "key10": "3iTa3Q51CpgEEnFu7ZxjLLidYzgznEZQdvXr6sfVEfebhSBohTazhsfDzWDsnFRm9Y8V4pKkWK9czxGehoZLqvCg",
  "key11": "fuDBbbcFcAkGDCRMGoSQuBJs2H1PJM26m7wJyD2qVEFHZ45VtfXjnA1FeEUGgyTovqtYnAMJcoyZ51Y2Mnz5BWA",
  "key12": "NDD7ZiAJSPMyTRqFDSuhME6e313cpMpE8wwzBRaymatzg6usNoNn3Kh8H3Jxceif7zUKpcuuXjyLKSwhchScNHt",
  "key13": "37b2XNYRRMrzQRuWpGdp4yKP6a98S9DZczixcH2XAWigLYc1CP7kMCPD59iutzjvVwcknGhJcxn1V15uiMa6eHgU",
  "key14": "4FHMHdK68nXcLBJLLL3rXmsQirTAb1xn3S5DeYAhz4xP5fKTvD9JqaWjzrVQnpfGn49acLNXHd5Munds8Uh4Wi35",
  "key15": "EDr5pjBHTGrurKNR5xraG7MuwfDs5xT6kDj75T4LQXHPvtqSNqWavX6xCWDYzhJw4KzvhqCPXUeqhpbtLZ2DXoj",
  "key16": "2q2Xqzse9EDxzAc2PJ3LcsKzgFs3dYQUkGjm7XBGunHxNVRdYonK3VKoA478cLbr3fxw3njqLokfckyKgw6oMoby",
  "key17": "2Bm9FK9dUBar5pcW2uRVMBaak35YDeWZgzeY9qevMb65oagHcCvhhQWZaPpUd8RVndiQCLATdT1n5acqF63Q6xGf",
  "key18": "2SSLv5dQDFpC3B8scdjSYxmS8hxXxtWp5J72bWtZNRZh8YYKq2ZasNxdJUYtE7rLhoU6dDm8LKTXQiN5kZapHLNB",
  "key19": "imVKE1icvxh3B4cW5zLyS9mo7kHN5XzjEMEEfnoD86Tg1S1yykmuwmQzBURfDfUAM9qVhVsReLvWuiHMWftZUGA",
  "key20": "34Yq3sbSy8szQhjURBqWVVDhyDyv9k5qd3ncVYd9mGUXeeqCBcZC3BXgRzCqTReQWgt8j1Yw7JD4vAXBbHdNbQn",
  "key21": "N3ydS6juHH9b3gFD8Sqf5BPZ2oga3xRsSW3ARMgs97UauinzzUfPQp1VjvnkVGCz7HEfKoWFE8D7FVN8hEACTr1",
  "key22": "xXNfRwoNZXSdUeb3iYXArkkWmEyePjjh8DFyubTyyV9pRFCjWUxRXyxrcpdTT2snBEwUcmkqBq8V8XYYHM7nu5r",
  "key23": "4ntQbW3FaqPLFmHxQCcP9vZaLpLhVae5rNMsHRyjGTDsH7iirty9McQWdvbPwrDVf8kNbxRH436PfcLao6ruSoJC",
  "key24": "7CXwur4WVeSu7UM52N7RvDbonNYTsSxUpBHVhCH9AjXfaa24jHMv1CE2LNjxHoBLLVNu36sgotSYWvTuQ6pAqe1",
  "key25": "3q4BuKCQjdVJGAaRXkpf9Au6DBxTpsdezZNTM2v4iqGwGYAoACxRMAhunx7ZWRM1mCUoRxD3i7VVLs4fD6PvDotH",
  "key26": "43p8KsP7zKXx2y6oh8JmRpic7yJ39mrRYDcrYW7sRHEPsyJnSgUcCp33pF6tK2KaJcsusXefTb1Ft4XC8kQ9nmNX",
  "key27": "25TpDroLqGKLvMjapsTmRFSeVUZ3wQeE2Bt5QV18xvW3Vxs3WZSMBQFFZAa7GEcSJaai2n8yKgBy21p83MxU539z",
  "key28": "hYU52f3g16HYnHaLfVwysqspfM84L8fJHL8hYuwUpCdV5dDmg2mBYjt14xT1XzRrVxSaJNJFH7Fg7WwiXuEWAhh",
  "key29": "2U9SauuGtLPATY7DVYTnKKgXGH4XNQGJ3igr2jmnezmuLKixopvuCBVrmGmT5mE3WAoabFxFf8TJncdwzpZgS2jk",
  "key30": "2XLZVRV94V1xT4pUeDTxmxi1fqBFLkboMyMBkUwy9j9K7G9NDDhKJWrQaaGdCMeTCqL4adrmqkdW7xXwfUnZQdAe",
  "key31": "4pLBn77seu2T5D7cQRF9D9fAx5SXiZUENxByNH1sRSkhnL8NKv5bMsmTx244KpqFy5Nj9yd46wrR8a9iWuyug22a",
  "key32": "4kkVWn1atzbGNEB3dJR7Bsfg4KD6iJtM8ugsX2LCBMVkRK1i9bjuo3bLNxNxJMsSPArwK7xLHCxB7MXJi4B5ShWu",
  "key33": "m5QbTjx97QLwjpZdvTXg62VgnceRVDtTCqqDM2RV6q83XsagSjfxJZKbXkMtgQGbUhohZGEgycN4iKhNuPRpAVL",
  "key34": "2rj6SkHx3YJCpjA4R4eyLqKUGZoKnUQFd3THLfeKMMWxpBDV5qyR3GxaqqpdAL7UNEpYnmJ86At2jeMLKCSKAWtb",
  "key35": "3BAzK2xZuwtsZ5BGE1yoda94wNVASwyNaXXDaJNM48awUh4NrzdVfyAah47Qhz5aRKYjPqkdchLzS84WFH8FsGXo",
  "key36": "4iGQpfDss5teJyN7DrdScP6QAMguvq9yfXFfm7vqmgXJuNGtPjXqQuWHQmhMAojnHbTCCuw4Qpxyf7qoSr5wfzS5",
  "key37": "4jLJXqYXH2KT6AvQ3JhbcxWgn6HtAp2H3J2UwQYjkCDar3zGNvgRfS7BphRTiWwBtxACzH3cLZ2KzFqoVEPkrwcB",
  "key38": "5HTMQtkaK9kbEdpsnwQ2BQnKPoxvWcVSwAEPoff9S2HizuD9yhpqHuA58NS1xuMwA8yCdk5SGmV7cULGPX6ZbRrY",
  "key39": "51GqWAAL1uvwUycXnE2Xpb6ZBqNeNzn28qnZ1BJrjDtxjNS3aTxuGHvfkmZBskUzF2vrnt4QmgsRXmFvieErUcta",
  "key40": "5NLjsPdoxKEy8gJ8DbjJbynu8ABGwuLUmqq8WShguGNh2hbfpTf8phjAqUX6cZPmT6n1Kx9JRSYbVqouU5vYuUF1",
  "key41": "5kY9Fq3d5nwyVdihRDfbf3FQt563wE3Svzu4qV4W2dv6uEabKRom8rrPHhcps9HUL1ZG66FMYcsXwq9yp7AkMKK9",
  "key42": "4eEz9nawJAZZJTTG4LLiQAnbex7DktKDgwDHkA3b6jvhdZiNekFVLynvGPUwAL4zKDXnhHEtziDdbXg7uMGYSHjs",
  "key43": "592E9iGqWT2tpwRxTMQe1Zern8vqcsMLqmgK9jPFambsJpkBQn1UG94JxYtEJSHY2TeJPh7Wk9FDQWrqcdrqvdWw",
  "key44": "4QFbPh8hc5XQmhsJ7msP2EL594YwyT8H1UUjrLG5Ge2o4gcsW1LaMELUQQ9g7gHgzPwfWu8A8mUYgA4nvSkoTZxT",
  "key45": "T7KD1NJd1F8qFmwZ28VojvJM3TV3i8rz6mmRz189HmWwQy6Q46zTSi77F2ndzsYvUFAtsyLAYsEktRWE7NM3pYu",
  "key46": "5iJeo3FoePMjUP4pz9qxxpxnrA6PFNpKrYu3t9SroD4ULh7NoiQq4V7rfbiMEfCuUGhqsQAEP1cnNW8pGG7SMWzP"
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
