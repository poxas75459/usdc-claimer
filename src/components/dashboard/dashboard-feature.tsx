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
    "5TmAGmPtEr7kHDFf7CYpf1e465HKrSJtba8pRhxzV1hBhu1WBt7nn69e8R6pWqPVjE8dKnjViYPTVL6vZynzk63t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XU6WYRG77pDuYYkPqqLnCLr2qvsZ8oASoz6Y2DQVqqv3nE3mY1qhkhEiSFD7nXic21FXxPTdGxURYxBTt3vo8Sx",
  "key1": "3o8fmtBAvX23LYnSZeZz4Sqburon44pdXnV4CdJRmdHiNVCPa1WjXSAZwEZkdPwP1id79nzZKtMaHm49KuRZi2BU",
  "key2": "5m8vpTcS5A3ww8sRuAYfp1vU9vnzBiZMSw86feKkBoewzbznx2HcuxoiotiFb2JkvUHnYZuUQVXSF9YZezxFszR2",
  "key3": "67oJgKdDyLXmZdeKQLzD4NYbectqT7LJ6yRAJyg78zWKAU1j3kbRPnkxVqdfn4GjMrP8E7ytsUZT3zMSkyMX3Kmj",
  "key4": "5MbWZo4M2TGC118t7gnzcMTVxzbFctvzyA16JdskWDTXWrzFRFi8sbmbZU6AGW3TRtGxDsnmPVoAhEDJZn2yn6oq",
  "key5": "YAtm9n4FwkkdvFWPYhoK4d37UxsE8btJsZawxibxE9iChpWdogE8yVuenG1JfvQTbiv1xK6fpvCjqUNAwZbWoU9",
  "key6": "3AgYwjFGX67kLEi7iDmNUXta1CQ1C7RbtGyZeR5cvMUQ9bNC4cS8kBLs6i81hQZT9fBUoxpfPg38kJDgh5tom1q1",
  "key7": "3EvmrnNdbeiDmksN8G3Qe4aZLvmWmx8oATx9mveYqGHu16epLDhWvuG1xasEebEx7TDQheKc1g5exs7hySK8CpYU",
  "key8": "zBmETCA7XrugyjYwVDmyEbT8zuHUMtCmVLqPrhgYEkxxmKSCLfC7abfdxYZmGviaPcZK1W2PspTnGojQ17DfXhA",
  "key9": "2w8V9f9xkMyTmydehKdt7hWTT5sLwicELhBrqLamdgEXccXgK6AYe9jFu15zkRD5Hi6KYbLN5zvXYhciHoiV1E8D",
  "key10": "3PcXjyYmogNpPfo3murchS6jPNBHvoLZhPpCwggjkE7PJG6FAm3JaypPUpTrNeANYsZrkisrbgvEfx4PYi9xYSqK",
  "key11": "fFrGEKvx1719dUoqq6gmtb34HKPAA8Z1e7Fr3BaNpthPcbHnkDWvHjZ8khC3zua7jkM1gUnttPHmKStWEZGCrMi",
  "key12": "vCrmjHkW32VXddXt35VtgYPVE9QhX2tG4oCydYj4hpzdeV7UNqntyAhkrsTAaviDPmpjTiYTtqsUubqfz4wtqyx",
  "key13": "2UvYtgiEqkDaYieQ5VWGFnQYGe9suhvzUTPJQGbieofhsoXusbp2J3vbEg9k7XYnkUw21u1pLcwHtir2QbU1jcnx",
  "key14": "5mn1VT1VKbMEFV4tEMZTsAr4jYgJGC16B7DHrx9LaNmrwfA3rYVpWDqyCprT2LscwdAhhNhQWg81JYtxvhHD2YLa",
  "key15": "3Bf2wAPeiwvixTANccWgRxtQw4sU1ofMAkioKKswwptsjnavbX9cLvSsaFCMLBsNGX5YRTrNLxcchE3moXPVB9DL",
  "key16": "UD355fkS6Ks3LWHMPd2pYdP2zvB57Ex8iMb8HfU6Yq61ydyukntC7fnPGeNDx5RxwSoVDSLWNfmbW6Cs2Rm23b2",
  "key17": "3MhZWZLqSmnNGv5Xs1f9tZBg6SXa6ntCYQJiiWKMvaZLNk2v24M2rGyWWVaSMDr8i9RdhENqYcAAf2GxWnSNG9nD",
  "key18": "3TLyK4AQYCQfMoErYcJ2rRfqnQXcPJVBpsZPeNGseFTc3f6LKAHxrsiiswsbU1CnKFQjHTsaAQKuq1jYriq1E6j5",
  "key19": "4oycp4VC2WazTNurXGrkMNE197sa3Wy2HrbFzctbPpTPtwnCYE9nKGYNWs3Pj5kZigHgyHxTVTUCJtq2eLXExSft",
  "key20": "3Gp27hQoD3R8hUj5vXKhetRwnRMxs9uC6xTrzkHTsesjPyLU9g1WmsfbcsHC88JtudkKfRtQ1sDgA57FJEkDFyZw",
  "key21": "LXasBN35Ppe5C2FaEihPmqTPcUbcKWEmBQ5HhoWSS1jTNuRjJJCrKJkxXy8RXitVNSRMMzgQx7skfb48m4czJ44",
  "key22": "3x4TXePQrVCJ6euDYAPmbwwwLypFTghND3cRiuFsBs4fdkXMfMdPqemPafxZfn3L9Ue33PZLsETtJdEJ4EfyqLDS",
  "key23": "2Tr4oQoZfmEijdysbwZTVktAEKbJbFQJiW5xphFhzpG89FWfPuEH9csGw2dAZ1rFXZDBqrfwwTUrKTd7VYD4qeXR",
  "key24": "2qWpu34dMHs7AgAoFFFYV5bj11FQN159aZtb4xxsrQekPHHoWRbrnUydRe7DDUCzAfEkFL7qJ4hRpUecefmUiwTe",
  "key25": "4SP7h2Lia783wcW5nXUkbKt9DBkJXtyhiWkMpo74Sv6JXpRRVeJBjx5gs3UdcL2AhQewTDxKCsuE6ADYNPABSFFW",
  "key26": "4S7mpDocat8GXc6juh1uZDFTVoGJ2UuHMfK2YzUntFeK2fZkkiS6YkQPjPUmGgc1NyHYKjMUpSAg8TRi1dizJyqu",
  "key27": "4AETXMuRqs7rdNnWZVAizkdQfVoRh4H2qh2icBNF3dmnP7K5YUm7uVWaE7Kc2FSaDHQoAEPiaB5jiCNbFTMgAYu8",
  "key28": "mUeZaE9rrNH5nhRaKmophkLhAy7Q5Q7rxAmegjQ4QfrVWqutn4TskipBPFLfgvSMYMFfRydPitYTw239LVwKDuw",
  "key29": "SYGKCv5XggEqJD221vfFEM9KCX7F4VFEwSqopv2oPnohHbuSPuXN2hiJrg9XsxEPeGSQWZ4G1qrg8T7sPdxm5cc",
  "key30": "5YsgViCmHwd14LZPbeovvcuPckcNx2W63eScVGQY93dvowCuu3KGyJL9VSeSh9BG5PTv37RkHJ8CoiVfYJVgtbSY",
  "key31": "3VGHg8jHj1jJmHJUNVZASqoh9ftE38NwXcF3se7kC8N27zpD7hkZJkz6jxjUHtgcvZFTX7oBbaXgJtCSqfacVsN3",
  "key32": "3iXr9M1wXvMPn1WieK2rkdhv2iPvFRUB4aKPMA5WPr98HiUmAmS7tAGdEaZYHNxKCjFrxYE6VeBSCjbczNbWiEKu",
  "key33": "3FFXwHh7pcSXqmqB2F2Pez2mEPRSTuTxhQEtyfcxNoJEBRRpQWmLce65fwbKUsX4dy1ApuohbRq6m98nT7BhqbXC",
  "key34": "2cUhptExjGhypXGandoCFJSogkLpeo2Q3yJvvxJeESLcmkEmdcKSZNmiyxmy7yiyXwScnWcmFuR9H8W1Mdc9NGMc",
  "key35": "51jyfU2pa8Mz8cHVWfDCGzAge5QXoMDSyfuiHfuZYdjcGk4VdeZRXbGJoVRWji9yEEctkxqrUjkSZ5MT4bMoGJ3Q",
  "key36": "2NrRUV9YNcrgPS48BPNvA8v5ojv8CGgnFikN6b8Jhrd7DobC8T7JpELtyBU9A57cXAkF5iYfZCCp85nZqrPQ2NCc"
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
