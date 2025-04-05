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
    "5hoK5AsZpCPD4fQUU8jBmb4px4kArJkSxf1r4itBvfYQBAdWEe8REFDhwSbtZKWi1H5n1Jb5bhQKzP92toxPE8HV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fYgavHJ3F1V8tXkkKqhSQTsWRiAzzvQTU54z74D2cQerRsHwG8pSYxyB5zHST7wotXLz8aBdN4wUSweyRmMzF9c",
  "key1": "udsRmVYPtumk3eiyhfGSgHcN9AZXrWzaxGomERFSr76LqpvdX6smcrfKp6JmfvZ9Lnuxq3VBt7BoxGvg8qeZp6c",
  "key2": "4fafo8aYkmGpiCMsRjRnBJQg2F2rbGeJYyxhoD9u41QcQWiFWCzRjmTXz8p7hYF5968JymebyfbrtfCnpWYMTqSH",
  "key3": "298C2WTramrqak3bp1osvjtBMBes89N3biQbs8BLEQ6GMQ8vm8BuyBb8cfZfPsVZDkfvaiEch6vq3WqtoMxneCTA",
  "key4": "4suq6himk6mGkxuAYkdHzno9MNfZMZeuVJBBN8fHEfoCR9dX4XY3k3Vc7Xtf4FZin7YpEbWiTv3H1oDV2gsvMFK1",
  "key5": "5qPWzFH7BRoYKd764mTyNTi4vq2pQzPiuYtsG6kthbU3d8vwETzBjpnodVye8eLaciYhGW8Z1NEp5fJoKoaQZYDT",
  "key6": "JJHVeJkgbKXtbQd4deC6ez1tTojiGxhST4kf5qZ5jZhDcJUsDpZLQvcGcfh35BiSHFB6jCncNWabje2egzXGK47",
  "key7": "jDzR3Meby8UhpMWgJjkP9gSpLxDDhrZUhT5HTXGYzF4jhthLNpM1m5PqP2kVo2GaJxCpX96hQn3r6BW1x7Qgvbu",
  "key8": "5RZVi7HycjU8HPMN9bSxdyGFVYvXJK8oKW988WUT664skbC2wFGzDZ6soNksNYv8ZvYstfN1vJhfT5dmGpS8qUjX",
  "key9": "2GLECpiMBwGwmTh6uPyUG7pJdWmJpU8DUYYD3ciaJ5wQBvjAW9U6qm22BPbSppMSijgLJzKnZtJGD9EqBjyp5Ghx",
  "key10": "3ojxrof2nEoxgvVFeZoiPYE5HtsohmVai28AaHyiM1UMzZLCt763Ax1r95phmxak3GKJiTnCzNgF4c7tPxg7goob",
  "key11": "2XjGubAoYV6fXg1i69mNSykjSfpYtpmfsatdmCbHHFRNGj4h99ih8f3dmE3HM3uR9EzkKyRzuwQ3RsK6E6fCrcHU",
  "key12": "2B7u7VuuoMY4t1fzY4JCYypRvBBeq3zgsW7fpcteBPb6ZzViBaXFtqCNAh8ftUUaP8WBTj39v4i3tZMscgCLqoqM",
  "key13": "2G2Jmu5aKJhAUWBgASFFxfdvrBswLKqJUYGWiy75AJapr9EU1yZ7CNaBtjnLyc81NdpbEC1ENWj7tP8WAMRovnzW",
  "key14": "4hhYDjuebD2DFyZo4BRhjUe3EyJQvF6geeKja89nDxWXgPnDTpUX2GUEXpVqtP85XDGvbxQBpdtidXLVmRK7Wj17",
  "key15": "uQaLT1LNp8q8wMKiL45BA7t2qrrC8Wbkgwp1h7stNe2jfDjYvDcfDnixhNQuZDboXdeELnaRix4TdyL5M7MF5W1",
  "key16": "4JpQjrhrFm5EKL3tXBsV4sgUk4JoES8ufQnKLHooQ9XjAyGzUyvWGxVuX5jJZkxzpWwjwpUPUrm3rcQNRY5Cm5x6",
  "key17": "34RRL2TunMqJF8SAAMH4N7QYvTwqcdkmruGsyQEbzQXpdegqFyfLP4CmpqHrSydhKVrfTeHp4q7djv7NwVPVn4np",
  "key18": "2BPGDWLuWxBt1CbKKcj2GZXioVtMTHJ916nhS5sTKkucn5yM5ukw1Vj5HpuxsRLrvcpY8QZzq1YTucDvYUgDQw5E",
  "key19": "4CBr3EAJzuhLhxjHkD5pKS8vPrkL6hs67hd4rLfYpxdBuDF2kVEREQi3yjacMWkQ3o2exviVeBK1TjNBjXYf2bGJ",
  "key20": "Vem53LG323cnxLhCFL8B5B1PcWJYMUoFFGzpzjuShaWBcb4yc3APvLyoxHZ1DuYc6F7NetEDQ2w9DYDTX2V8Tbz",
  "key21": "4zd4kkRe522MhYc42dA1t89b2doCtXPnbvH9hRy93gbyyVW1V9fCFbpKTWQyaNkSQdMetiLJuLeg5UyM6PM3zgHE",
  "key22": "iBjUt1UmtXJ8cUCt9TdbBw7wf8rBqPdW1aQ2G5yBzLFneSUn8cDMjJ5kXX9EDqMUtm2AjZq9T5m3PfNCeMHH9Yc",
  "key23": "4Ave1SMWuGC1mEpRoQ2NCCS3uKAgbcq5JS637YbuaqwMQZQrjwffNUphZzQQHzCU4T7CwUvyH8PsL2jFihXByxp7",
  "key24": "65s8fba2z5dyQdZEmVe3NvttnKCSmTPU8YBRL8qwS9pzHrcDf61JugEr7VrkzyX6X1PX4ZUXKC3Rs2Jsb1x7Pk3P",
  "key25": "3uWGHiuprxGBstV1YhYydf6HeeuxfGRPi48f61MGZrbURU4Lvw2wpKd57F2JQ6YpXmjP6wbL8W5yWiZiqQJM9DpZ",
  "key26": "4hzLx3jn5fWZq82USD3PBhpR3YDWbZ31Vncvtw8ScrQzoDHNhH4s4ZFP6BZ6r4FU7MKe8P9Bt1jj9Ms9uKyyr8Ff",
  "key27": "3WYAdqg2tX2MfNoDCGbNehwpjgiyT4Aufq7qN8j772H8C9WDP9BbL29ya9FiVocuJ5Pa7bykFFJQncqRQoY6YZfi",
  "key28": "5tBKwYrKmM7sohPhKpYxjnGoSQ2ETDReoyuLGUim85xQQYsPKn1jALpQvEXetJiuyCqt1vpjooY9LWPiBFk6GAGM",
  "key29": "4rrnWVyEpkpAAsA3BMpZyhjhL2XeZycqi7LPopRpKDnX4xjnno7c6j5FrAmbAp9o6i4c5CT1kRYyvSFYJxypmNhL",
  "key30": "ieVYNLobDxZe5PmrN1MrgPBfaZerzzDzoUtn8dzCptkMAuihqjMT5AeCib5n5kfm7s27p6gwDBeEkr1Qt9wZyZN"
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
