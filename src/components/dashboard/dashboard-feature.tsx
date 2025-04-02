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
    "PqwUhzg4Y4sekaYMPUeD2CjHNKMvgbW5LLA1haJVHw65Xafnvi5bEo3Az4ZCzbfZ9RGiXfBQ38tuEcrbXp4XXqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22jhCCfXcsfaiCMJbk7AcHExf7YugNkhViMvfDCDN21yZXkjrmivdXqQVsz482tPi8oi6Jy4NFCE9jSDUft36RRj",
  "key1": "58WXwqM2Sm9pi9twNLDd6hn3JGCQ3g42j4g1jCKAtL35Ey2FFab7oon6JkMt7LizMN3qAJoN364sVzzE9wsbNTxG",
  "key2": "3S6sYwpCJhttVQLGTfbtKJskAJQwEKFg4sALkikZXmfZe6q8m45rtg41eqbF67Ek9sFnom2cFjZCqHPZYKoxjnpB",
  "key3": "25S2EZhRYoYeL21tXqDAqeCdsGjTPZiZCor7AxnEbMNPY5iesmVu8p79dwuZcVjD6Dwtg5eYx3HYhgEmfkYZCWqL",
  "key4": "4BQovSwVv8rpU9Ubrqf8HV8xzjpF15Uhhd7XVJgqrRjq4DmVZxLVMYhhBxksMqspZssZ1swMJ1chisGncwPfGeV4",
  "key5": "j1fmLwoihUyu6RXs5UEqT9KNxzE6SUb7xLAXKyHsMvGmoNPDyUSieRLEEBhiaYbmQuZkWuyJfEfVWncAbAtHkWs",
  "key6": "S195LnoDRQCyfiqP7qE4NEWSeZf24v2pjWZ8afPFBSUgdfCHrEGP1eLnmaweUbP8EJo4dvGKfH2crQarFCYvehL",
  "key7": "4DFcGerZwk9iePD1R97RH3rrAyq8YavmdjxQk2DQub6eNYFX1ejBbk9uK3UbBGf1975aDojma8dZ8AbCkUGmawbC",
  "key8": "57Wa9Xd6bncupF7tN4hfvSSYacC3rLkgKEVCSsh2cakjbjhmbd5ASLQ1fwig5VX9KzxfAYzQgyoeUKXNyWkhsSo",
  "key9": "48VFV6J9YWfFd2BmE46CpepZagGGqW1kfCHiMggHzjfHcZgkauyQeyFgsZ8ugZL8odqLXKpdhPo1Gez7H6mbdhUa",
  "key10": "55XBpJVv2Xh8bY2ZaKEnEe9DjpDRMWDjnPdnBY6ga7gFbTufHPfh2zhPM6TEQqH1WG6cFUUDKx88o3CXo2GbtuhN",
  "key11": "2snjStrHDLAjSEPeaH4gKM1CKDUZuApVDFwMi4pjh1kMb3mQMqnRQzkSQPXrSiKNEfTXXrMao2EKC4U9uF9LxwCD",
  "key12": "4Jnbv1QVcoR1cCnTfY1kpQ2f33wcF5Muer4S5vwfb31WYPQ6JUASVuKBwGsaVXfUbbVquZohvVWFjZdtnf8fEw1N",
  "key13": "2aPdr4jzrEUSstr6P58ymzpGPQYH4DMZ14vuzaZBMqjR5N6hGjx8p6qZw3ReBu6vAPgJo69e8WzmYTHsNVWNnjyG",
  "key14": "4QvKs5Jv3p3aQEi6RngSRNpmyvrd8WWefb3GXExawxfgLoqvt7FBoxV7aRskEduX6TAAYgU89uzDJ6ZeryzuQaUv",
  "key15": "2Q19LkDFddEWfCfEVxTHnPqDGQHtq8C7ftEURSc2KBVvX6qWRg27uGkQNZXJ1s8aRxpaQGyS4ehMEJzXBnz4gjBd",
  "key16": "27sJnenhYt8W3YydwqbjuXiga3PzNtH7HbpUqHx5vvmVFvXVvssmquY4a8jZgE3LZBEQQXneqPwapAQWwnpRNtyi",
  "key17": "g6e4eT12HFbsZUPMPuaGgVYdMafwcYnEBXmN8gEHDzxWev3K4bpm4rsqc3eLBVPkrUAu9vsfY6pEEKMM628UDgT",
  "key18": "46rjV8GzCWQfdzXYYDcHhjmLEowXRbQ4hQvmsqtrJ9CLEJ7iHXeC32v2ygfJKHdchFBRAWqCxe4StHSQ4AUWnkcZ",
  "key19": "5152ULrMLwhNpeTHP4SYmgbM4nozkxT3ZeWHaQGNdbwmMTNhH95Ugtzecp2AcvuPLT5V9fyhT9kHyPbTeH2EBvtr",
  "key20": "5mNZETHCusg5yu2rMMvX2a43R8TyKNNB8wryr6QXRsaKVx4KZnYG8kVAwoXg7aMGCVFFibhf1sK97x2bdiksVGag",
  "key21": "5kJCGS7Ht9i6DcXSgGX8br6NQ6s8aecVVaRhRqF7Qvrubkaq3q6PbmgP2o5Dhx5b3V5fvqLCPVpTpPz1AP4h6xZZ",
  "key22": "qT2r2VDpgPB9bxdsqky5m63viQUTLrpcCbx9vsj5jQipK1GRzoVcMyvWTBj5jvSZv1Z9K8ZrxZhESeve7kjscU7",
  "key23": "4qWuztAgJqheSjGCpiRhfxXk4mm3Qa9KL23YFiNABSw8X8Y1pgFXQ27yjzUXygoRYQuuXxHYbtDDw6Ao4S55GXgT",
  "key24": "5anSPczxM7peLsuCd3tPbZimfv5m6s7NvgG5QEMZXc8Su53W6PqBFS1rMgnfb2KtHBV57zKYohVyPSGW4QhTMBXn",
  "key25": "2Mq2LAVHQucJN67ev1DnrtTPWFejJX4k1nX3UapZd14n13Hsw3R5UFzXvDjCNt2B1ns2vm4y4hxXk4UvNnoB1QXe",
  "key26": "4sHA4EAPxULRcVVvpSDRtvJ63BotNTgqcDD2jDwepN6n37tQzxpR3JtEr2XFEbgnPh4BfvmY7cPBiikAnpPQP8gM",
  "key27": "ocEAWrDjqGwY1pZA8xrJSBB3pK6GXBcw5sBc5nm4hkZBiuc7LRJ3hG5Sd4uK4BBgAccGFTqv7iiJY1eWCz5aG2U",
  "key28": "2domBfLYeGU4ShBHhizJ8tretVjnD9CWmEm51yK7vD6RkFrMYpcs83415Nri77mJHmNZXqczrTphWMamyYy548ch",
  "key29": "2ttdY8VhZJ1EHeUYhLgp5omhMwcmiqGxSxZnedoNngXPF63hwRMwXU9WBMsLowepJJ2rPRAvK8iNLviQG24HXH1P",
  "key30": "66m5WFsnfdy9gAazYQtt8s863yCkBf3EetretKXSmJqz3vt8edBy3SpxYfqUtha9MNbR9NFPUNNqFGhC6GNyAywa",
  "key31": "4xe5emxj525ZvT1GcYEmCcMn6AJJK1c9smMenY2bdhprQeyZaGo75JuJg4K1ooqcc5faMrU2TmG1U5PgBKTbyNTn",
  "key32": "3P9PXuMHcnASeZAZzjzyucBviZqPiuRhtpp2maFzByaV1tSqR5TFWQA7k73UbbAn59ZjAdejKDZZn4HPbZvBuiMJ",
  "key33": "5q4SkBo4rFdhzuhAkWefxKwhAdTaAtM9ua6Eo2oCrfpN6VFxj2LYaFc19PXC1ENrfGM1PTw8unDHcQ6pQWEQ8hrg",
  "key34": "5oidLKvezKsJHZCWTSgbnyKz7utzpmhA8vt6mXGe9vbJdC8jEPKQvsm8gCLgjCLNgQi6bxV2uRqn5WfBYBpW8Dcb",
  "key35": "25mFWMmQyxYTM3qqLXyBgQtW5s6sgq6W8sArUFyXSYXw9wkwBhGykRxRKXyEtb8iQwVW7CmNjJsAjVBjZq7ThCfx",
  "key36": "3GQF9Y9wv4WCLysHNyanSZGCkxUaPizNGswmDGoueSurtFNYehhrAZ9sBHjNqjBxU47w62rafvZPC3YGxe343R9d",
  "key37": "4gBeKXpu6G4Uy1ooJ4AmFX7hKd4gXSD3psygHMq3iZFR6CuQ7LrZK4fFKq2329GXfXw7xfMpLMRmiCn6iMusUwY6",
  "key38": "2NW9PKeNScyZp9nazzXPzo8GPCHVZeXY8TWbEkBUH7HgB92Max2qcjasmwHqddzVrD5b3PdG7gp8YCBdPtu34t23",
  "key39": "4F33RSTuG7Q33T67bjpwjFxXjLyuuMy4x37CrYEgAzCQ9tSGZnrMv1CTXqyfinCYZBBKjQHxh2MwmesXXn1gbbya",
  "key40": "296ge425YMjxN2Bi2QkKpjWWM4NhJgvmzduVJJ88QE5Qzt5UEEbctu76KmqNMySAq6MtMnFBYowVneTBFs65cJod",
  "key41": "3QqfKR1s4eRL7HJhRa1B5M3SMegE7JMwdjhq7UTHMZHUUyM4hJ6etNpsGVUWp1wFbEvjDyRP2tiuy5TUADafoMid",
  "key42": "3VkiQ6qJ9rDYS1vaxcV3JdbfXqb1BdLXRfTWXnYo2WiFjK317ockhCF85TuU8QEYZm2b2ZTMBMFF4JrjiR5Rx9Lu",
  "key43": "7myQN3agkYSidb2Mgb1EzivV55YkT4xYboMq4o7aSijAAdNK7Kbz7qukUGX9Fc57Cz7yzzE3p2xsDsidngSw8Fr",
  "key44": "4cQEr9Qmr3h3g2PGAMXgprq1wqCzhX4Rer9yqoLafmf1nhYpYqc1GXdg9sCNKcmvut5DqtZbrCZA2boMD7sKXeQo",
  "key45": "29LqdNiP8D9p1LndDvXCk3BjmtKXQx7yjBUNTLVDRHHSdNmuTo5x2tP2p1yQ7Y3AonHS2dCvqgEUULGJp73UFcmD"
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
