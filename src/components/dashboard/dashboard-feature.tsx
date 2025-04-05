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
    "5C7UE9pi5RNEFJHhoeUPHugGoK9B9vwqf6Kocq5fHEGGEfbUj4DdzHjg9UrSKhgrWek4Rdxunf2W4eZ38gNS25Nz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gqCpsKZvtwX26eRx5aFk1mdw92biMhBSb7MCHHyVz2D6knD4yUzRwqQzJNxTUeJKasrjh9WWcAy8sFwrD8xXxHi",
  "key1": "4hANg9reXk5uXXyxumZWgGpFSgiJ1nNAVe7LdkbrDB5gBxdUyLfH9hCMwUXQ14EkRhCvk8qYd1n5Du6chHxbpztB",
  "key2": "58mierTNiNKUdXyRd3tHca1PYZskRxgNQCsusx5Ucgnz65uQsTbg1jJmCFviDXR7zjD7Qjk3BJYzVhxThkRiPNwZ",
  "key3": "2akEfT59c89XjA9DFMnbFVbCgCMMHXbRCE564xqjcxSBHD5nd5YGPFt96bBH44H86FmMziMqUir4fvWGp3BU8XaN",
  "key4": "4z7dZ2bUxTW3pEphVdFeQcGSYS5cEeejwbjXXm7ZAofNZq7JHDsyhAjUy9yjy9KWVtkdBjJchJuKvKYD8BVP38pN",
  "key5": "8JoCicbjkGKULGihw2jxtTyrJhBGZsVhJKsEAsFTK4Nr1noJdQ5yfVdYhZd8mH6JEw5FRCMuwf8TggYSWRQeNdo",
  "key6": "5FJuQVUqpqoz5RRvRbdesvfAX3zxhEYFbLNYTuYcGKLjgGNXqEKA9NzwDKbH7iNMm7Q1VGFeNzqYobSJ9tCxHKnG",
  "key7": "6kYNfexGE1RUVpmqwU8zxjqHvgN4ZytE8cvyUuCe2zCw6TggeVe9baHUa3Nr7bvF4ZQ7ZNp4KyCfJ2vUm6sk289",
  "key8": "2inxxEp5kwVWKLKQnEAS4so76urMYRLNXoMFpKEApF491YRWLeY6pK7dRXurhqdHpfCUXA3CRA3dscc8en6WACni",
  "key9": "2G3QeRiEzG6LWfkhV8NJo6LCSoA8txjpvbSrmxjX9u56zUeJYBNjWRN9uBuN5VGRvUUwtJ8wgiE4NUQyKfy2ij2C",
  "key10": "61SRpVFLsCqZDBqHQnBfb5FSyyBcuQxsRCe7qtCgsVEjbWQXXnSbmkswrpU6QaFgfkwrdJm47RUfmC645DUw2KvW",
  "key11": "3A4WdEJcEhiypbrrK2sxQtr4vENAfNMUcLZ8Nw4mw1e2GpWbcN4b7kUfP8AbpaaqAa6TTbtGywDAmtwmjw8LzqaS",
  "key12": "3vU5FUtMY3STqQPtEBgdRSUa2vXbgvFYkVPQmQSPRPHY23LSSAuSLwuK5EdP31KF5NUUx5FpEKLCbitzhJnw5uMi",
  "key13": "3AgzGHF3jBnpBWsuv8gaVxeqZhb5TuGcLws5XLucJ37uyYdUftSpsn9fDkwepoNscU52FLLo8Uo9v4F4WRvkwbpn",
  "key14": "5dEDVUMCqbkAo67QU5ph6wgjKmzdYyRkfPTxEKeoZwGd26FN4noJRFEstxsXGcEs6bpDDVmNN3j6XBZNdHUXNELN",
  "key15": "5ZjS3fJ2cqFbaTW7GAzKS6gMK1ANawko1BmRzwVn2pGtwck4JnFsAKPXwVquSn8yKAgNko1J5GQs1yR8xeMtobjp",
  "key16": "4D2REdWdrFv8Grps6kBabYSdoxp9BtLnqRTViBf9BBz5k2jYjvUbfaeghDUsCU1JNsMcV2ogMFsv4D936r7vPZ5a",
  "key17": "5DwrBAp2M833KaiDtMcWsVEFdJjgpCsbTfxPrV348HYpSZvSwcLhEPo9jdxL2M8svZCdEJRE4nUQj5mYCCNgGsr9",
  "key18": "4Zfay2pcm2tKBCJ6d9xiJEWMkNj2ce4yWAitKmXiRyDw7jnfbpSy4V1pYuB1YkVS6bVcJCeAwVdYPmtMtvd3xkRZ",
  "key19": "2Y1sPDAP2WHAExKJEgTSMr2JELgWqJC7TyBbSnaZfV2tjNs23j5su9J2gRDoA6pkwPrf2ewCC42DG6WZnQXsWkpc",
  "key20": "2Q2sFiS7TDDvV1pSFNLdYaU5qswdYr934xF5CBUrCoAxSmwi72Fgnt33LYuZ3Ns1m1qpccgVTxyugZPNJ7VScNP",
  "key21": "3HxoofwtZUyUF4z7M6A6uGdkKkkQ6uEUEMK5d8DVsEPVPWfbvqMzuiM1n7rZjYTqE89yxKov76yFiqUL5eDtjiwM",
  "key22": "fzWBds8fCJzTZaUaBGJ11w2JBnmtKKazb63GVZhYHAuENmZ37rMmm8H2td8RMCs7gJmiR4eaKqYF7r6jezG3sXp",
  "key23": "3NMyeb2utmgC5kELCwSCYfVfVw5qAJnCS9H2798qk2EnJThwKqQZ9FY3QVJVWEfYj9cvcgSo6muEFdf3Lm9K8N6b",
  "key24": "51z4Mfe5NSfx7CCd24H62RnDJiN5a1DEjXG8bvXT29ZjLmAYx9PPdXnbRcyKyTEwp8CT7aTaLvvzYY4Fxr546iqA",
  "key25": "5rpMo5jjVEKhDDqqYWj6q624RkFyWqULq9ME6vyEt3od6vdRWErUPZ56cTAQ2FWsEstF7viye4GLjpxXoJzV2tss",
  "key26": "4Z1DWiJydsDetnZPFuaFpgjM4r5AagooM3vog3Liex15B1yF9gk88Q9cWEiMafVWpBJDYdVyCMFpAPyoPZcjr9CS",
  "key27": "5HF1FUMC7NKaWbgSgxJi5fKgZrY9NAkrSPLXUpTehHbZ6yZ58pziN4kG6tfbGBaKkxEsfx9MM7SxNc92dViS7CTS",
  "key28": "V7YrfX7RH49mvMHuz5Xg9YX5KTPsMWBgrugZa5CSAFtrk4DNkSA3GAJ1nbrP8BePSDkmBRAyjjrBToTPzy9dk8y",
  "key29": "2RzSgjvo9FQqswHT9Yfa9bmo2db3rYadUAscBdWG2THML93hDKMjiVDnrKoyamhAx9JZ6exxw3nQoeAMKRfjyqWD",
  "key30": "5ykAxRJx4hrvhA8ZmyujCDrvFvi4iLdHYb5NWoVDyzTVDcbPjpVj96xWGfwT5DXZRDDhMqunCsYZSY95tzjZYRYv",
  "key31": "3tJscXBBBr97oNvPwY1BxJU9vKJGb8Au4FLu4SpqDicedPi9GLm799qTD1LMfRJqSXfMGp3J3rygLhXXSzjHxERy",
  "key32": "5ePXReohSJfv1Eg3b4VATs9wSnzjUo218xQ5K6mAvBccqXxoaAnbi8mPEvtfVF9W9LpNr6bRHHE5b6u5taR1KydX",
  "key33": "5emDwjuiAG7n6YpcGV457J3YqHL1nx9nuKcygUnUJ1r1GUm3s3YP1M468nTWJXT9ZwKcDtM5uzxVdVAM1uw7Ftw8",
  "key34": "3J3wukXcUtjyjuz6AbtutcYroKV93b6rN7QBxCjDMNSnhwWCQq1ZZAhAp6MApAtqNPeFHRzXYRtLUNtVCLEGsVsM",
  "key35": "3MJiDpjxYZWtkY1UVryVHgdmub75gWACqEebjM6RcTMkMwyYT7P6UqcwhBYyjoindWyLJQwZsFB5HCBByV8xFPg2"
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
