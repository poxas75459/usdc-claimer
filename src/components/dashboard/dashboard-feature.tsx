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
    "2spRxgLF9Pkiw6hv63SCUVsEwg4qrxEFH7j6umuFfv6cMEyHPTgJ36e1pMrFVcUeefRLeSUUQWdYMvtP1LTTb6HF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SYcYf2mnnCFn1T9w5N6NUYdrthXXrvqac2ZdXVvY6tQVTYaNYBB4Ndg8D1BdowWJpteDJbRfgjLyXSuAMQeYnwN",
  "key1": "2RjaUegBhEdQxRcvvLxBBEwtKx2PUpWm8hqNgBwXdytD8U6kCrdYhnrTdP8hYBX77KfEuRkNqpjFKdna8t3QgHez",
  "key2": "51KGExLhT7VrEUmFxrbcVKPPe2ZjZWK5gZ9rJBvJvYY7yb35UjR7eXax3Vx2kYie2rUexQ21sJnBH7qhhmzY7Yob",
  "key3": "4BYz81U2ZSiHZmNPqaRzWHiLPS9bPt9E3e91L7mLEZ6s46o5dfepeEENY9JYbjTsEn6e5fj1DQvg784UH6dQQpG",
  "key4": "4bnNfWyDEunaxrUsEmLVgkkyvoAckX7viFbbS6wAEwU6tdMpfrukHkGBMRL74YxCw6fH9L5uztz6KUFgGvs8Fye",
  "key5": "3iz5w28zvdQP5US2w2WCgpUb7i66e4sEQMJNUC8BHn2UjtHLMzUBxkmfPWPM1ehEYZVPK9D91cUEpXqDew1edk5A",
  "key6": "66SiDojqFp5fHWAa7y46svpaPr6wrLLk6EdbC2HkWv8FJ7DUWkaWfrAcpLASKSpRdXzRPmjUpVU3jUJ1piwRzBCS",
  "key7": "65y1gETeh26imaP9zmWMmzsRimDaNpd7tEZDwzgwJAHUkyBo8PhQBYM53rK9NpgKP5nB9FzVgdigMULWgYxWNVLM",
  "key8": "34aVqfQwrQoW5ssR9NzJemrqVQUuwmnniYrWRuWyBtcm6kcGtLZvnAEaX7QKYX8MB2EbdfNFBQwK2xmcpDYt5sLE",
  "key9": "3c83Qvzix8u8DF16KDpcEmYP2LBn2oyWYXQvJgWAn2kv5Y7zuJATxnLNizhNhdrXFDk3nmTLjUCjFXu8GfwxmzcT",
  "key10": "MSr4TbzKWBqBvpQCeZfKRB1MnQkPVjMqynSVz5u5NjhQugHkFFyoGgvv4WeNmPqRXaF6jMuVg9JSUjysq7Ljih9",
  "key11": "5k2rdu8236PkkXT3MmLtf3dzHz6qoJnAxBW1V7WJbMzf3ZxJvGvwkwZdycQtkjRmB22UB9aPhwqGG73Q5U8wxGn2",
  "key12": "LucFHtwxDvhLzn6em3Q6zkWoQeDjdEPVfTUmcZFqTf838T12eYq8dHEdcZhtK8HoLxuSmAmk9vZ7CCZMmzfLoQG",
  "key13": "2JKBqmmrCsPmGMCyACoVmWZHsyiwztyB1toqsDvLu5e7VDdA6Z1BoBCShBAWg2prwSUsuH9ZmGScN4emdgL5xkY9",
  "key14": "4ym5ZBs7JWdfGkHdGjshUkkzMcy2KQKHQWVG3rzzq98jZoFThgNmrXHZ2YJa6itp34whHAM3WuN9aNUM5fT49ai3",
  "key15": "5U5rmMmCE5KAgUWJTx3XX6Un5v9d5gEgyPVykut6ov3kkdXU5jvKYc9R59mwSwCjSMcwr1Rm1n3nJ13FNFtEekip",
  "key16": "3AJswqXLRioGZdoLeiW4HmhSPxWNH5CLJRM8soHSZqZkXhBqf2d92VGKkiKsChkoZTJ931FfKjvQbi4S7k98sTqB",
  "key17": "2srQvBHk6vXxB9TR5zeDh3E7PaTw3eezcVnUQcLydBkeU35hNk142v9x1Mi8ZmASTPemyaafXGwZEy12ycMJdB5",
  "key18": "2PJAs8mn1BV1WfWMZ24wr8GYsWfLVczQzThE6eLDydqsxhgER2sapmqoHFxwJSMw1gipyvc1qnFRSKRUUNsvPXDb",
  "key19": "4gFpWN5b5BpvX7xLYrFLd8JNw6fNHZbcXHDW8ykSSirR3ywQ1afZxSw9EC45FDQWMNSfLF8jSdBwvae6zD6z9JLX",
  "key20": "zzRCYoPoQbRgrFuAjF43uzJx4d29LJVxg3gY8YyhYSHGHtFQBa1CRdkBrqfz4XePcz7q4mY65WwRuCKQtR285L3",
  "key21": "47ZybMhXzrQZ6jFJ93XFR7RF8eXtWLDAoEQcyFETqQ1Kho7BCr8pkrEDmGsJKckmgMVmvVb6i8pAGZNBTXznDNbs",
  "key22": "sg2evKUQjRm48GYrQiPaQbDchUMTvd1KargBPk8pYX4Eg3stX7reRTPiSH96tRK8yrPnTGidcUrZFPURUYPikAh",
  "key23": "4BFF7zRGxeMvJmbH8bmmNmpfJEUNDFtruSGQofH46JZEfjC4YxuujDSzYGRggvWW5wbuPtH1aug7426Gk2P5BsMA",
  "key24": "4DoYCJAPesZz6wpicbet99zF6mNKTewLcDdBCXypRNP2NcC9iwxNphkcysvYreyasqskj2NdkWBzuy1coy7Bpcdi",
  "key25": "dKk4fNLoxNCeX8zdpFzgASqXZuH7bScViqZ1h8JBLnNPQdgS54HGER9JV4QwWquJmuZnuLyzcrN7i89J4Qi41cQ",
  "key26": "67B67SDJmccfnmsSGFaDbS9gmuZkA8LTPkXKp6UvojyCSBy6LaoDmSkPK7WZuDoh74XsRDSWPLxzfDCjJQkqqCtp",
  "key27": "rPQp1BgWcKXUXmENWeTW5xYVDomqnCHRdbvbXoDf2pcUbotsBMYgZh1wiSfFSQDaYY74va6kXPbkVEchBHAL1fW",
  "key28": "5Jh9JVM8ko3LgQoxmwmDABvsSuhkExQMyPc9Tq4BwFEE5psQ8GuKWJZB79BDjDdbFPTH57GhQDgdkFcVS6i5iYAP",
  "key29": "1b5PppQXA79YTRSbWZjbyiUEKzJUvLA4ZLXkvXhUa7viCtuPX2vXMhZm4AMFP2jAjnHBvFmcdsLkR4tkmppAYCm",
  "key30": "278VvFq4c74txUpAJ1Q7qLT3ycJ6CPwJ5Fs3HZeJg5iZB8bFAy3tNAM4tXkKQXTUz9YYj9LN6pckrqejk8Zdxt7L",
  "key31": "5Uc8JgFSWNzsWtgXEozs9AZrkhScW9c9zDTomKQAwxESB9cDvcDtXva1YgKfa4hahgcoWGUsMvC1qnzBwj83xrX3",
  "key32": "63UMoQtS2y5an8Ui22Xb6mjc659WNsYp7vxuDsWVFRWxUjaffFjKGgZXuXx8A8dAEvAofRmuYSwvFE21JdfqC46k",
  "key33": "3BTwEJb2o8xhFB94hueTde3Rr7isE9a81JZxbbWtB9HBd1tVsbjZeQi1qEm5mKUZ1CyhHUzvecCj1odJVTTnHeeN",
  "key34": "4UvzcpbFe3bYdAxpHvprDoXqWQaUCUDZydRPftibyKuJaRsgKkA42nxSnu1eJK97fThHRYBizsaj5sMzyZdzLoNe",
  "key35": "3d5wXkpNB8YbUfhwpvChXWjAerZqCz6ydc6kWFtLQ5PpvWUJ66wjbvyo4Y8zVzrg4BUkffEPXwJuZoLhgGkWrAfK",
  "key36": "Z9ZRRxEeBqVz13hjdtGsLYoMS8XhYXeQAmGf87e8NtTunaEao2WG7Ea2SnqRTtsUV8jperoVuFTt2jAPwbju9cr",
  "key37": "2imBqyHQEHCgsur4zxraqdcKYszMVgDF5qJBPFKRpvbfuYare5UpwQ5q34PxkjKFEjhKUCc7KmQ2HPbBdfJ9tRf9",
  "key38": "4gnRwx4ftBEy9Dn67QcEzHBMq9KanF1dooaAvK1GzNrwRZk12L3zKUiRFPtP1nueiMK5ZH5esfNV3FD3PtbGUSxn",
  "key39": "jiFBXGjNxEs7CEwM3yzGYg8cDimqesjuW5XDM1BWCNGtLjpjRRqMMPsxQNbLFHB6c2NrtRv9x8yLcDnX2f2FizZ",
  "key40": "kR4oxyav5yiZszxtvDT7mooggeVQ4xLBdd7X2VbLiiKYNpUDBqtwbypk1meRypMYj7rVE77PW1azuFboL9RKf3u",
  "key41": "4FiAXrAqs2E1jrz7SN3S1wgjQ64zNNWPzx3ayCSL1n995TrAETR3Qte6wtuP8kidQS2JXDTq5wSmXtLoNM6LXMaL",
  "key42": "21GNd2CoUnMLWkTN2pNCUwME4CJJkszM1DTXx5wQ6GtieFkneUbw3U4cCkPdaz7NwLf55JxYyJ5HEMq3nG7hWrLf",
  "key43": "3m5w3Dfqkm2soAUtRzjAKuBjqASQd5n5ASjDHfgFZoouWBLcWCaQ9rtiUiZRvDYSj6omwB2XMKc7tQnfsVbGkUPQ",
  "key44": "2E1KZHFDYNoMJnDzxNimRUfV1Ch87gPJiCSqeYivWyewmkaHW4yKkPdGopmeYLqo7ajuj3QLH7LZ2jVZsaeFeCpS",
  "key45": "2Yo43AqNNxm5nDH1FFVgDKfuairxDrmibCHGnqaHBRixcyMpfNyswrMCGRuUNdFvt18DxMQrhtTszwLfsQX4sTUy",
  "key46": "3fu9w5t762vzZUYu4wp3GKGbbzasHuKbBYuxougFcgjaXouWbthzx3Q3z86dWcDmZFnwVwJKs2YbdAYd6MdA3bA",
  "key47": "pg5i3Y6kas8hExH9Uf6dvmbhR12zVbXmEgYMK2kWqXBqgryZ6AjYHejLtjdG4tv4dJin5KrnPEKDmv9ae7ARtfc"
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
