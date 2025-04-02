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
    "3CgJMqZTdmXPknWkkoYJADSxLVUVb9NTWrAQUCv6tWtmvBKHNyGigruMZBjX4qPKzGU1fb4evQB7YShZ4wQe49dV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sS9gP4UmVR8Wh9WwW8SDPLF4X7XjTr9qoFaduLmXGQsx9fFJiLVXkKxAwYuTEPQjyAiBq4De4uqGjgMAYRgjCfW",
  "key1": "5Tf6dhPE4FQZ5ndBQu4SEGHB3WFnMR1W6SKTZ8pfEXdEzc57kQaT1PxDvb94JjMUJgzz6oSBKAW9qh6riP8pPXsP",
  "key2": "3zw5VAwbgYE24ZhaMerdsLb2LUij3tVqTjEMKwvLTXvbXT9vtfGZF4DgYHjHPqy8ptqWqMWoFsg7yJujZjm8gea9",
  "key3": "YnoMtBM3YwTgnmjb55mwK7oSJVXVyAUnhT91gG91YDfYZwkJf5SpHrAazCkNEGPy6Dj94rh8Raka2z4mHYkka7i",
  "key4": "3eGB2PiXSjrWvLWg6pL2dALDW9aJkkGxtwygp3STQ9M1185mqSCyaWbXRiTg45tTvyBLzX3WKGYGnWGmtq5MEMQM",
  "key5": "4hSBG3QJTBXh3SvThKodiFp8ES2VjrC1T5kn2gcxLvVSjfpfYm9jjaADuTpaCRcLsCgrSfjzjTnbR3rCuAuW4xkL",
  "key6": "445Pkb3soALfqyqmvRiUaHioQiH45LgbqHgghCWcFu57itZ6NE1qSx8ddDz29Xf7SkGD2XZqdQQnteh6zrwGkDNR",
  "key7": "54GvYkvN5kECk6jVACPQewhy6RvXi2T6ULra7JLNab2QMzVoa8qMajEPdC5ct5cqtwjJPJhaVxegCaMqia9hYB9o",
  "key8": "PKCAebYDZdfLbhRTv66RVVYnFb5yjEnZNCXDkGAqaWaLPujJs36rY5Wu1mNSXb7Be9eDgcSv8cjCuiE7huPbqEf",
  "key9": "58LC5iMMCjXCMPhuLq9nvB6WiiNVUaMb9aCuxfYrn3EreTCMcD2vt11q2JUxGxr2y2X9PD5SKPDtJTqDrk3odpUG",
  "key10": "2VbWpyZHJ13SRnYyqnFyUK9X57EaxiZJVMcGbkuUagsZWWy4AykU43UqD9ePTnZm6fUWkEbtpMo5WZimfsSWmrJb",
  "key11": "78QDDcCvRmp1Pwf6R8SBNfTnNTspi2xsLCFz3HRj2Y8E4DahX9hxE9NQCPDRGHNq6v3N9cz7kUpWnJL4fKEGHZx",
  "key12": "22FZGgXfW4QoEN1rvGSeiA3NS1cYuhKyX9hF8D5TaE3W2pKPwUYx83bwNfx8xWip3oRa2SGoncz7n9H26S6v7Kdc",
  "key13": "5aGMwt5JyS8v3B5kvfxYcAaBTUZwye4hTSoE9tyfPL7ZRo5EoeT5hVu8fmBnyprmLmU9qcohcCsBQHanrGNJUoLH",
  "key14": "65csdAyxiYCdMkkfwpsLvid4q1vyFUik5gBWWCUb35zBQQcWHrKTGpEUJqDxm478Mnj8Erfz2kSJj5Go8ftMV76Z",
  "key15": "3heaPsXhqedx9NhXBtcZ2apyMa9PUYA8c7Dd6maeZieoa6h21GFoESFyM5mcKLJTHzM9UCMzJnJjmJWLjg8sNbRU",
  "key16": "3BNJQ76Y5K2jHmAs7QLbQJHRkux5ZZ4uoiyVxZ2twoFZuKYrDBU7qwnzFcmFBAKXViDGYP3GcpcU3Z7exDGmmC9J",
  "key17": "4g6fjWXjmLRRFTwtPJyMwfNCKzMaHcsonuADpimrzRs62UE8ULFeSYJGwTu5Cd3prQ2aNVvcgyF14V5pPAXQLmbh",
  "key18": "3wZQR2XSuAaoLzXN24Y4nwpzJ5NNSAsG8t2mGJLydtPcToMzZQqrfRwfE4GWxuhaiPMe2obDy5gDrhHkdVuWSU38",
  "key19": "247CZnMCK2Kxep7dKW3xwWkohxLPXHdtRHjDmaEhSLvgxwJktgNQZ72Sa1737tjrgTEMg5ptShsZeFGX6AySHXSv",
  "key20": "4x2yPokYiMEyAbVzmG4pwhmBMoJsEtCBKQn9RTD8mtW1ivAa2ybKhgMqZMBSJU3fof2RWAS2taKTRzK8ZbPKuWyq",
  "key21": "2j3KRAtzLYznUmnLBx3S9wPYrN9sD6GUvAdXnULmM1x6hXErf6EaCpJe7PcaYe9V537jqWuei8w5juBPNawpn44F",
  "key22": "5gXrq7SJNsSyyzaxF6BkGv8kWSUT6gwQa4TYMDpqZ9ZHHzegrTqRWZYVjpCFQ6p9dw8zQWsoRTuHsy5E1u8xJFXS",
  "key23": "RydpDrzWD4QHuDNi19im3TjBUgLYwxxhSdNfXP63wJzwF84irY43eZoMV8YLnNz5iCpQMkoGWvXL7yhtUEa8uP8",
  "key24": "3CbmRw8J3cyoBehXgsfTybrturthw4cvAsu63ENtuhDdNfNZQnPvoJnwDkfHaqkRQqbcsGZtuKjqxS1F1fCfJQba",
  "key25": "2S9m6pKc9k6MSEtwLjbNiXx2pWKmKZQA6QdNB6qmJhPDS6BAA5mJYWXtVdy4snqN61ac8huXxVcJSFoVJKvAW6V9",
  "key26": "4vBHLS8MTYb5JGkBbKSPAjheaHerw5CirwvDBXqNiTJMU9aZPjfBCrzota5wd1y9HfAXJKMcvcakG1p5ZnohyShv",
  "key27": "5jXyy7XjvwTaFHFwMmvWy2dbQ59dqFpwSgFuGT6sL82VdsUG2NVDuxc5txZupFW9tahmaGZGsaXuHn23ZqqFdfuB",
  "key28": "3zti2uDqb694LX5PWoiuyuUAJehe3Xfi46AP6Pxxx7CvH74sim4udEMyH8FPBS3RaSp9X2CSuGGbTcP5gYk7ykug",
  "key29": "3mSgwsm4L9Yh2ac373peLCGxAtNv1hWuAqix15gYFPHRWLg7SmF5hEE2ghJc7PNLwoAmuqxGatTis1kvb6XHQPsV",
  "key30": "3GLd5kMTnXpGzqPeWfzVAt993yBxE5a7rj6ZF9VxjC78dAQrV8FYxpg86bqEVNMJ8LMU4kqKxoHMeyavMJSqWXFX"
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
