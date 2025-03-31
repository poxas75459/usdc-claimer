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
    "4nBppc8g2RMQeUpnE3csC5Uwsjf6SQu4oCavnZUH2mDf3YHbooM4k26Me1wYUJLe9VkqLwuJxbfv3dDeyBqWSMLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TCiCuFKRM8MND9L44AtQBJFBUmbedvTbjQkmZzWj5o2NkFbuJMhZE26Le26j9o2pKoynSKRumumrCs2m6NVV6Gm",
  "key1": "63cUE7zw9hkx493d3ccmvRDFzeZKSi8WSammoL6hk6FFX9AgiSrvCVvHaX8mReEDYvSaqmfXcSThxd8pw5HpbMPW",
  "key2": "5axPhwr6A6HypDBa4DBGUyRutd2jyQaWMPGowEkUQKEresdnNk4fZxJBXL7iGqQqPxqpykPsYN43k2toshe4tXQf",
  "key3": "EhL5s8Df3b26ESbJUwXJaNcs1uQGeCgogDuXnDmEX3ZA64UjCgDdNczxgTUtKaxSzULovXWRBxyfTdijbJwKCH4",
  "key4": "5YPuXABqHcXhxRWw4BDe9dVBaQtaM3JdYyWEwMb2jpQHAHjh4Ka7dfSuTXEx88MZTY6SZukX7WPR6DNtVQLfRRpS",
  "key5": "669J96fZc3BTYqkdvgSfFjaDJyL1TUAJeSL2q8dnUBVGHZAGiUk9u6G2LPTGoAbYCxrBLtMwRXkWojDgqmZDU7Yp",
  "key6": "rqFepcoPoW8BsYAkHvjVr9JTHkhLXszaS2HwxpMp1ruNERnGzGZffsFpHiv4NgU9R7ohQVqi9MosbtE23NvGrss",
  "key7": "3UiPoiTWvr57wLCW82fmSMxAgWTWz4wNmpwdtHBsR7NFaTjfKUxSnJM1NVJTX3U5PLVzyo8VogXkEzcBicpJkXbA",
  "key8": "JjwgXhUFwhPtksrBRajFv35c8i6iXYsLvybReNKaCGtxs7Mk1VVeDM5MpXkozeHbL5FYpMy2vA9ANpJ7wmaRSps",
  "key9": "5nv5pye3tCm81QAYhGhdyRGPUR4Qi8Ro8rpRMezmeLrSmmUCNAcG27JVJ1rvCKnFtExUApjWdK7g16TSg2jVoT3T",
  "key10": "5AmpDZDbLdo7j1pToE2tK9cfogSPhqetheS51RhjRc1GNojTVzorkPDKSRSFKa9P2YnmCKvEyDsUEeMDyBRiiWjG",
  "key11": "5ss5csRF1FyJTXWcqZZyQSxDaALnW1UeQa8mHtLUXDujqUk7s2ZwxVpHQ8FFyzZJyiz3vstQN23UijpmG34TCP3o",
  "key12": "2HSy3jTcht5Dz3zNJvpZY6Nr6M42E7RqnE6g6GeXxCpLMhX4g9bdmF81651PE89LigkfHcGPqduhabi3ZnK1Qx3K",
  "key13": "tS1w9veBcMSDqjFHTUJMqP9ES8xGkwT5XNznkxhiBxmzYA6oxQJRf8NKVobf56TVwPLmEQd8cfD6vMgkr5PmuHC",
  "key14": "5vHS7bxSEv4uEQZNGkxyYvZZdd8LcENZGSgZxePPmox5hD9qWVuAc5FeKJfJ4H2LxJHWjnTm2c4a3xBff3s8fy1b",
  "key15": "5eCVhR9bXjjo7mSa4GvSPKgw56VbFpb8wzDDr4eQjntwUpDqz3NDzoRC9arB6R1bpcVfKCcSSK4qpdzH26XJ4nb",
  "key16": "4ouSSyTqLyCv7BKqCsXkiQWLCMzKxpSpvofZexwLDw5AeRMh7uyWRPGQ7T7EpM4TYgBpH2MyAuMuxPezm16okih8",
  "key17": "2FVUmgEvNHR4P6Z3ApZVgmAQ1PLK3i6w7rarnWfobGHT51ZQDew6dEeuc3G46N6MiTPSeNw6sZtuRGKtS3thGcjF",
  "key18": "5aMPbfBRk6KqMfmrwWirbbe726ddt2NdkKeijrsyjZmSg5zB3CRZ9YQbf5FpP1B9pbCzJNgteMQU1WhfU7Z1yuLK",
  "key19": "2Qfum13xXXm9fbHsXaiqG76MdAgh59ASoE6Ts1UCGvnRXXvv8eddxFdjvUQr1DkLNVyJq3XVxRkBNqLMb8oyg3tA",
  "key20": "3RqxbPRwsLud7fQzZ7bKug8isKZBwm7RZ5Nw4vezqHshdHrcGb11w74JBJ3FgPux4ZV7FpM8mXCeoQMSZjev8DLK",
  "key21": "3AivkjrCZtHQqCeggCu9Lvmgw5pETmd9RSNDnNV9nRYSZoyKZLi2AkuVLhgr5r1tggyrfTtwNRuZrr2iz1bqKUk6",
  "key22": "2QZektv7bxidhDz7eWQxZnx5z5FMrrYjGJBKFPnn69E8fmY8PuCipq33Fjv42JgZ5fYgkHFEfznE1Vn32n4sLFTV",
  "key23": "53KMfVCDvWy11LJxnQiN2ocEwqYvJYpAE5wnhHYe2RZt5PxMCad2NqjFuJEbuH2rPLEim9D8zzFRMDPm2ZVQeDzf",
  "key24": "4YHLoDcAL6tZxPtye2UdvedxVTqsz8ANikC2h6tzD57y5v9AsxEVY6ns8HtxhGrAG8UkjYWzMNfF5AWth1yBCV6x",
  "key25": "3uqALKy5EmGtG6cGxYy6zhUJ5JSqb5sExJwYUKWwGsWSUwhukmieiwe4tSvjch8AgbpGob8KDLRbBhAhwpQaDULg",
  "key26": "8wpgVB2WLEQV7tqC1W2rSQnyb9zq8cjcfXuPpzP9pa7RdzngK5vVVHNHyYdPNUpmSC34Q72z9V22KYef9RuK1Ph",
  "key27": "nVGP7uBcQWk8VsDT2XgvqdRnXh1hGoi1vQD8Jk5YZ1wwVcMAcNcGCXRATY8PgVKgsbx2RZQsGE216wFVKDHx7Zv",
  "key28": "3A3nQ3PgGyZSLBW8HLJJmUQDK5cRfwQHp1ysKsJZS31vfhBdgwLw3H1A2Ms3nzbetAkjnwEMy2yzJQFY4zcZansb",
  "key29": "3ACg5Pxrtntf92gVFSq9DH41ZouTFmTuKieZSfBR18KwGcqnvckH8rxJxvpV5QsW576N1GgjUh8EdWTcoCSRJW6u",
  "key30": "8yM3KYLtM9qBESrh9SrP5JjgvyTk3d7Eu72NaZYqFFhY3yTVdV9Fjnv8yazeTy255LNKES6e8VNihq6L1519EgB",
  "key31": "iYVS188U1gpFquoowFJdpj7mZmkVaVNuZmkHguqkbQTNWEqPF9PjSRo6Dtikk5qHivJrKYQe24qno3RYg9CLLbf",
  "key32": "2EQMFqXEne4DqodRtoeEJnbzUgEzzNHUtkeW8ybPEvAnBDwXE9eJiTKhqU9gE9VmGshCS9UfMhzY3ccYvMNRyDNH"
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
