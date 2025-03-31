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
    "29rxh7X3Z4wkoMDz17dyeUE6qtUQHZRe8x6Ab8zzkmm2371FARs24qqo1ebWkAaFtv2cnjDFfjuQuynKVDCoBjqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R7vuzrCHZZpYRj7E3HHnSgnCwniXzw8NSKZxHZva9hUm62rfroBexhPHQcC991ebyJU3hTGyv5yHjTpqYifmWgY",
  "key1": "2fUtHDbA7Ff3ArMaM2Xbkp2mKjNUL9XhwtDMxxfq7wxov3tsXKwvZCutwepAvw4fphFtmwLP9Q1mwJZvgWFsbESS",
  "key2": "cV2MJSF7a8sjxiecKM9H4b57s2U6pDJfHU5FbipoENNEuLXnBpffchaxn5pmxBGvuZyyo9QAfntuCJT8akBMpwh",
  "key3": "3zarMffgCdbwpfi4ejG9AKmHM8utZ8NLHndFiPwok3uUaFLtZfaMMD5zBEkA7o57czMbC6E6svo76YhPboF5ERrv",
  "key4": "4NLfSxfgTjS7ak1kDHHH7Sfujs8wZ7pLKwXz9kuzCZWNmVi6hHcjkJeUCojzxHtg21uyr3ainMuqGjNMXedJrqv3",
  "key5": "4kDWpFtrLH1UVTc1JEWmibobyvNmBGVmAbTQqEG2SzfZHyJmg6uv47EZ17tEFWv1VfMGN87ixkgfso2jy3iQCX2N",
  "key6": "2378fpAvUC7PE4dhcMQ3UwVgYZBtKWxCVJ6M95sRRZPfBMET5oiqSf5BSESrLcVPvszwvvJi96kZXZbyVmrUC4q2",
  "key7": "3zAWt4KEqQhapeN23KoRGGASghh9pwREq959Y4kaDKxBpuGontZ1jYJNKkandKuzZfBKyrLiD2fkmrLjxAdraL4V",
  "key8": "4376VD4FqLSSQASEKvep56UeoCQtponvW72tccW7BZRBWVkqtJUeJ5Rdw2b1uUSFFBUx71gFakYArVjusJCQ2fJu",
  "key9": "4zPRY71JjAkwbqousSEaKvbCuqy4Rx3koRXL8D4EvVJdaHDPRQh9YxQjXQzRqSg6CWX8jS7Xw5xc1g8wxwpVF4Er",
  "key10": "cy6MZXZGo18uiDNDzGNRECn4Faeb5JDcm4hXadxdR6xtrJHcWW9H2GokkbFyuChfPaa5a4v1SfPx8R1tXnT6wgy",
  "key11": "51wnmWCn5YwZg6CCWRdb694TZDhzJgWQFHQ1ycom58GARQFequpxq9KUeiM52EvQkpkVJWcsCM2FVxAMzK8D5GZj",
  "key12": "4MgLCqUWFiaV9m9xza7SGs9D1ocBze8qznCqVmGVZE5Q4Wc1SR8iHm8uKCedizm8PbQhzgLthaZLRshJjGUb4QtX",
  "key13": "5oKtDZfHS98MeTVV3E7h22rmo7fvJdjJLYpDkR6VvbqkMHSa1Cqe81KBAwM9fBZzB5QmWYnSbtTPSXwQ9JezqcB6",
  "key14": "XJVbZeT9an3RG84ywAG2LHMiET9sGqvyZGPXbwwierQzwaASAbPzMwiFNuAAjDdYpS2bTBJnwbY8uYt8G9yniwK",
  "key15": "4ojSKPNvPBYxkeKUEFX5F7FaToNnq8CjPNsJ8o2ywZvahfMVZoKwCiYvusrmvhgZKPumtoTv75moi5FmpMfBrsAQ",
  "key16": "55AWE2jnfB9KGJe3cAY65NYVcNrKWZuEydUs43UZys3yFZXcVqjFL3vqXAnZbriNw83wr5f39VFBtq1ADWYaxkS5",
  "key17": "2dYEyF4M93sSaB6ez3pY5HUjzNBYcHTNijAmoc8wignHqo6Sfc6vPM6fDton3ZCyFCxkwpru9bFcVNuaUYjkHxqy",
  "key18": "J3cqNUpcS6Q9kHzQxrC37gu5u3LEdbBxi9XeCh7H1CCYdDHJRqedST1Gy4Bq4c5Tk7H2kMNtMxReudQ7uxT91c1",
  "key19": "4MjdZQpyU2RPPrYnKA4vPGvdwmCQGYdUBv8J2arTCqhaEXaK2KY8HeLcSrUF8Mo6VqTMQb9mhG4JgJjQCGgityQn",
  "key20": "3x2AJQDt9tZ5v8yK4nAuYU2NRQ6XzJqQ3QvshqchmTrTp1fXUXXiZ1Cftnr4DeD73mLCoVzJ33o6KxKi98b9zZUR",
  "key21": "41GMFFFEtLbHNFfDJTzrkdctQvaya7pDdAgWA8yLtCiCUJ4dGc4GFzq7DDQHT2RdxWFct5NduJxyanW88UD7ADsd",
  "key22": "2kDAvUpEvDJsmFo5iAsuWUNmLyteLd87XrRg1WzBdnT5QZ8iN1zniohv6USvPyBxCUhq2YvCzbE6GWJLV1PctTuc",
  "key23": "4EVcWtsbxDTqjdn4Aea8aQya9hySpkapAnCgAGF2m1h3rXyYiyxYwpo7AkRzn8cEtF4rymxRyx1u1DJQbVQGCom",
  "key24": "5ofFineLbgmfDZZvmyTFLmJ9RpevaQNFH3UTp63CRrcddvPJRyY7rApjXYCiruBuZnhNxQhXbq3MS5jDtYXPMmVq",
  "key25": "18yBrPd4jcZDn4f2LLwJoKaXLQGETcs4NMqssW1BvFooFTemFKeNoo641zmWHK2CAo8ni29spPofvLSYWEKtRxb",
  "key26": "4a1wxcQKwW3FU5gibUCVbFtEi3v8Pvrg36rXDkJKf1SoF3N5jd6jZgkFvXhuXWrJs78h8mpbSYQeXVZJRn1KQ115",
  "key27": "5QRAi8TLYwKPufp7k6RUwGYT2ybac8Y7ztQnAMJFBXdaeMQNMrPAW78t1bzK24n4EjKq1DQVK9mtoMPU4asJz396",
  "key28": "65DpkvsPNLp65rbY5JR82LLHmWF6dRhXfkEgt8fDfDDpqfp6SKnYhw2VNWP3cuN67Gukea29oRN45SLS1wtaqqTv",
  "key29": "jo5Zgvo1oRRPdnXoLboknM8ttWReVmSnwztynUFXqSnLsNc8S2aDrkFELYZM64XJwH36u2P8urybT9GxVAStCDt",
  "key30": "2ukee1ybE2TEK4zGKQcm4PZF5eFAAZrFWm5kyiMuAsCxZYa9WDZeDhi7k2gTQmYmLyczCfgqSUwcy5mhbpvcYoKd",
  "key31": "vEh2ibXajum4eXdtrctf7q1ZUBpDescR85cuea2Gqr7JhQkfc6qQQf1kx2dsPRv6hxFCCUSq6osMSJjQtnpzzRD",
  "key32": "4zy5w5PVReAcc1rFrz4GfEd93n8gD7wq5nJ4kbG4dLZQQU9CrKJEoeeSR1y8uQTzLiyXLgeENFdXY5T7Rx6FkFL6",
  "key33": "4GszNex8SEyWrotvBQJ7XbBfbDkbDb3GUhKJ84uucb47DwLBU9hUn2Kcd5pXq3dAJWoDuqHLXZeXDPeq4farYckz",
  "key34": "Y6sUwneeZuDBG6frKoGJ1XvZ8BUJBNB5p1AjyphncJG5NK1Z2TQLhpVGgMs1gA5WR52cHvmJDtCgvfe3yYXwMg4",
  "key35": "5dBJCUxsSLuFrxMXpxnqp6kCyJCK1Zg6dU58z2Fvb31K9Tg1SyXnLMCoTtzejvr4hEeXxLEVosyXwU6p56VQD1Bi",
  "key36": "4yy6Tt6bRtP3SYK8dG6ngDDW73FhA9KKmNWnGNgHBYbxVTZSi1T5KUcohpkfciZhGjK3zznTe3dhiFnF7XBHxpGM",
  "key37": "4bxNaZ3DKMPeK43Ta435y97HStJp62ox9wYsd4PqVa2ePbo7g8HMc77TKuoQRRCaH3tCyUPQnYiNvzMjmMctWMNi",
  "key38": "FeQ5pACi2hNobD3X31bkZ4CfSBmgnueB12RuTYMNTdCCXNzYZMo1FjoCR8k33JxxNd5eSXUxWDnb3DfPLNMJaoc",
  "key39": "Ns7HHNWLN3YfSvx48itLH6pXdWEVSqrMZJPRF8w2TULjKf5ZqsqbNQLiKM4kfUR1qefRazV3Y25YsMaHUBT8qyp",
  "key40": "T5UK8aBmNqRhfPYuG1MJ8G7VTSTSZNxwsX6VukfnYJhPzJz8ejHmpzkt2kMEbcW9xK3CtYoEMyD9ZWjFVrRXwTu",
  "key41": "xqXCvYVqxwXLUoSw3iqvyYVMBuNuMSCinKhn2fr5wsBz6Zbs2WKeyQTe4vnDCrSaTkXM6pLcTmAuLsuAA81LBs8",
  "key42": "329umMvNGYMJ29Zkqrk2sEfZRyr6yH8tpaLFX1RobsW1VmkVdFFqi1yQLd5XCzeaWZskUHarwxFiKp9Cy3RLKgD3",
  "key43": "3hFxHjxz3YYGYvq4WAqQmCUjNByrFtcFNjzr5H9Lo64BeCMG21p7KuYQzTbA4dQ78gujmQRYNXJoViLkcmTdyo96",
  "key44": "ZguWwCRAK3dm5g4WuGtcduuTxe7dy1ZnRXVucMkjj1zjhNhNDqWjH5hRSJ9dHpFAoMaa6B2sDmUL7kvS14htJnN",
  "key45": "xU7fP3W5V4Bqsi1oGhBuJrDeRoqWpeSoS5zxi1ALcE8bWCMS9FPnBNkjBKbYFEHSLcue8kXXJDLoFt5KccMJTV3"
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
