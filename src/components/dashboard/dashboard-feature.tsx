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
    "4iV6FiZ8vLrDxKBc4rNMJS8AJb1YQNzNqQEKbGmog5o2W6PeV6ojN7ctLtZnZqT2sbRtd65ymSyfqJQn7vnuBQhu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3viMGw8LDJgJtrrxQ2EiCGfXTXNsy84Wt7sdUZ6c28FUpUrKgQGFr8TqLxCL2QgupYpgi7MTUZJDNBLoVDq7a28v",
  "key1": "3HuEnzVGo1Do9MQjSmAuJHG3t46HykUziVfhRRQaGPaMGc61MQdmuKg6FGyeCout4XahdnhfBAGqVSLcsPbA1pDg",
  "key2": "2LuNkutwpfZWTwYDKARnXmmNDQUBhScwxMLFWhDsx5ZLT96ufdcCYbbg3jK5N2PtjYqTZMfxWayFzkg9KW2dPXYu",
  "key3": "3sJJ34sBiSLeMxvSi4397NcZNy4zs1yxJugZvApmzXk7ccmn782tFB93KFMXqZsTkU7jDkCE2tpBWzsxvp5m2gJJ",
  "key4": "2KcfR23aFMZXjPnXjCee1uMXaZJkPSHjrXZs3MEMmEdTBTJFBgBtC1izbnHweabcQejPCwFdRgxaJbZrqx33AKYx",
  "key5": "51zT2THoMYtPV3DLXdRPMcwUJPoxtxpY7dPDaQpMccmsgzS2KksoXfvxxmfEx2bm5as2dVRPUaKzZD9QHZ5fpgqB",
  "key6": "59VMbP6rRbdAX7vpyBx1kgjeeisnLuJfjZXo9ACGMgiGYbJhrwtTNb9qNcQFGZHny5HtZ4T6nqRXhAjHZ6muemvR",
  "key7": "27zAdzNYFdVN38CJ9mxgXGK3yPxGPGSxrJzSzqQ3gQp4i6tVVrVCgj7tFt7ZvnihYLjju3ZfQYfEViYg1Jj18eMr",
  "key8": "3MwEGwVZkzLyDfgYf8kU7mDzFzURo8LRyd6bRj3oRcrVTAWu6pQ1nW6w6pr7VJ3vBWvhewuT1gqQ82F4wdB9hjMy",
  "key9": "34uss1yuvKJ7twbfmQK1z5H268ZdesWCNP6QE37xxv9Kcs9RyTmJpTNcsJemzwqhCr5T9pjTmyui5UwWFdwsNmEh",
  "key10": "2nL5npQsU6aQmvna8woybJALJiyQytx3HMJfWWQ3CDQHWVtA72Tv22ZJmxEAmyk77s93bX85r8sgPXZuhwhdtKLC",
  "key11": "2Ry8BAwpkNpfi66WG8t4tcuo2scd2WAshPFX1CyN34vZXXJigWVyMwVnr81QtSQVRg18gzB5bJxd8MzrrQJ4A9Mf",
  "key12": "YRyCKxh1RzJJ6zXTehDcYnRDcZRCqZAdYYAbZME3ZvXtgU58Fi1tkZizGDQjWMkAC8QDkxFjL53bSZ4trnCdww3",
  "key13": "3mfm3KXrqnMaPY1pD1vFZkcsmT1ArvXTib4WyHffNKwHZUQxL77JP6mCPZw5wf6xkedF48fCB1KGupJTusLmNSMn",
  "key14": "5FzriUw3Mt81BfMED1PVjF5MsYYx9g9WZg3PocdK1uh7GfwVgZPUwKSTGpjSW3DFdN1sLjVNidVkfVuEJCgpCe6E",
  "key15": "4CjvG4pYJ85WDnErwNu76ep2fsbQA4wSsbco5RFeHG4BbD3tKSzB3m8mGuU6z9KMPNLMsDbK9ycM5xutLKoehdbb",
  "key16": "3dCnKoYUDKtZ52G7vQv2J5iPwFVznJ4BgBUSB4QgvinurpkuVc2yqeJvVUQemmM5vhNZkueyJ1d8h1e45ea96x8b",
  "key17": "21iJAWqMnqq2XRFonfJXwcARUfUdZA6fGVXnN3qcoFb9Rovc1QCToSkcrXvQpFvdyNeeVesQjGaY9NkSr3DmBbvg",
  "key18": "4J74kJW1w8AMcWZgQK8TNGcg9BNYz4pZhGk2WHZjeRqFxwGgseb9dXcyiwtWXGJQfQT2GDLcig2poaa5UtpC2FvK",
  "key19": "3JFr6HRHyxVzAPF8f4TtxNGftAdGTpdJk3j5zSx9yu6VAvgctVQGWD4L2N7edQ2X6gP7UpjfqNokFgdSmx3dkRKP",
  "key20": "2EWN9X6tk3Q7QVRQs7UfJwb1BZBzkKP5eVjJBRQEtQqYeBobxauQQqB8BzYAhiSgY6gWpmHxQqqHChHt6dviNQuD",
  "key21": "t4utFPJ8c38HoE6uJ2DmX83iD1fhTCZynQyiymQmLfA28qqWjuxdpNVcXd4s6zQEEVvqr6QYPY1owkKUxeJUasb",
  "key22": "2WHGX878qS2MPLCcJXVcBiGCyhNRcA2wsSY3dakVJM1gUWr22DRXKFtAiozwKxMY4zgxtJ3qADLnTxY4At8qtB3j",
  "key23": "BVnL5U2BMbuhMiq3BotvxGHFgSRG1f5UKWtPJhWvoPVEAL8o6CLrTU7XQMf6zZY8AW166rHhi4umMQJdQ9jW33b",
  "key24": "36aTmwF4HBsWJArbQiL4vEnXQC4uYkg9U3qrbA87ChbrvVx1b6ZYZQABz2hA43c8M3gtE2ftjnQg4YSCzYQBNKwf",
  "key25": "5Evm2RSKjkDHnT2ZfP4uGQ2HjWndNfW6PYikAaCr6jMb3r6qSAT83PDHjUCiW2sGruQMxk9kbVCYFG1f8j3vpRJ9",
  "key26": "4wMYAmY1t7kqy7V2wzyE1wSmyGuJRtxSM7zLJo27m8nP3kkVzvBY6F3tDx99pZ2FvgzBfFJW62ApUWME87fQ2qap",
  "key27": "2R6dzcXdvRo9Q4y1ukLWhSG9n9SavUexZYWmz5wg9BsL9makkLF2MgtmxXmgEXLFrfshXHihBf1gfgR5zxGuDi3i",
  "key28": "5GGzHai41kgSaByf44pYbL2577rVM6RRK19wCnsCfEoGDcHJV6VRwXMApLqvamDokWAYGgCd52RgLZpUT3suBPbD",
  "key29": "2rR1idcJr4JdAYDoGUobGe7yAPd5B5FvNA6Dm5iR1UyUh5qzHi8BsdBRsUSbu8veHtULKEvPGM9DeYbdMywoXxTc",
  "key30": "2CGhHP1i6SNP9a7FkM8rtX9CxWNy1Fj1U3n9Jqjd3NvXmwKyUYmsCcRZ1wt4e2wEZsZAhHRrnkV1EDLvXrcvynTt",
  "key31": "24nTdXnBpSPYgJm5jahShrXKa916qqpj49b1mQNe8UfKycTCdS1zYAMb82Ukh8kjap3cFddr2oL7Yt6okAo9CDdu",
  "key32": "3qEpnPFvwK78LHeyRnnRzHoTJmYQeFwiEWKLZtVMSySb5hfTccZSgd1HgtDz3Ncq5vQ8BgCMAyhbdechHXmudqTW",
  "key33": "nWWcEq8gJpngVTu4JMESVYY6Hc8g52Bjnuk3q8XaERmVmbHrbAFnLpBwnNc5n5UHHsGVoVbhJ6QGSVVty25a7dR",
  "key34": "5PW1xur4sBLpUwmHaQ8uVstWz85WksTCDo5WokpdXKMzXwh8tRqdTkoppX2cjm91skqqhksn6pSX89jc11E8ktrV",
  "key35": "5YuTd998Z2mXKBfainHQRwvpAFzPSkcZdkrs6jZEFWZf8uEKv69LsJnjT97XGCjSFZBqabPmYzuy7EuCCaGnqsyG",
  "key36": "3bR5yhhyA7ZzizzbCa48UL3vGBGEPYr4nux5gSrWatH4b6bVFUeRTjZmG8ftJHiKpdbcEZGCmP16o34tRYzQNAM8",
  "key37": "63iYZ5uQBuUQfH6zhgLM3qcAtpmEbehGPamWmURYWyJnoHKesWCTCbvMxtDoABTdiLtyMaDpqzT42ZxaKPTm6RyF",
  "key38": "4BvNdp75TH39aWW9MdMJb3LHzGsLWJ2XGMFrFbPdhHT3TT4yoRKBc35e67TyJadW9upBNYtdeq5kmoZvaa6h1n8S",
  "key39": "3FgjAf1yofdYMWE8AJ9rUHJ9FBj9WcSvzQuScnnAofdzzmsYdW3F2Dt1hMEawzFg1XNVr6sEG5hSPftWcENP3qxg",
  "key40": "55LyzGWxtgEMvKsNVrDjHyrdFjPKH5izSN4MCTuL2ijUjjBjjLk5GpFsSWrmpnGjDjpjao1h2u1ZACp4cPbmpnhF",
  "key41": "hkiYTwJT7TMhQWPKJhvCvjwBakyG4DviTBjuiXJ2bvpa13qE2ZBNfatQej9inM9he4ZhAYfk1nU4WJ6eKXvxmPR",
  "key42": "bTeJu9tSFhXHgLtBap3bb92SBpRXbtanhMuRcyH2h4wN1mZtyrTNR4MKU8sF7UfVEPqGToMNQ7xELXN9Gi7KV9R",
  "key43": "3J8bzgUcNuQ4pHDbYM7S5eKJbBDZxXfXscwoEAwTeTZGFgzPSFk2S7RgGH6wHfriNf4x7LEK15ZzLi19cFMZ85Ub",
  "key44": "4AR48zXB7PrZkvh17sK6wr8aaL6MzAwKnDigrZqL57tsiw1RhKoH4W97Z3FvDEVQo5w7UBgwvXBU2hsAnetHmHUm",
  "key45": "57szWFCQxnJkBB6Af8Awipj9KXTP5DagESTPanZo5F6Sb4ujskMaPJfNhpAdpGAX9FfEBTCzhVT8ED7cjS8MZdaG",
  "key46": "3CCwiDY6MS8RsyMAkqYLt6C42LjuQAGGqwLUrVKyQGniBSfDCCcYpLqcKxM1TPPxipTL59m8CYccWKe3omWmmBwf"
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
