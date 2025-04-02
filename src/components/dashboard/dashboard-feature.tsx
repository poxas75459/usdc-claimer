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
    "2Udn8p18dVQRwAqt3Gk4Cjh5LxdN9XeYNuLhF7h5owBtGBygYeM8tN84j7Ss7zjU1jQ2WyxD7H2eujnzhFt7VVD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NZLLG72peRHjK9C5Yw2Bg7BufmxLnNbCizLzCihzwmA7k9R635Z756N9N4KN2xXWz1P9DKV6mVpj3shpbcXrMvi",
  "key1": "FgfvU7hwvA2BLXpB6uT2WGGHNvbG1eCxSPegXYCd13L9JKVtezNaaBTeYpuubM4cNUAZVW3q2ai8668MUVQrwM5",
  "key2": "pNcCiMCiEEoqfMS8pUkPA3Ry5WNkNz98TJZ3xQ6giqtX53cNX5nYcbd2nvsJYFujcSqYfz9avHnncBysF7evmju",
  "key3": "2zEdWme12sSd6nW7BXMZVgfKrFXqky3DchsQhUhaCtP4NRVfPMK8hSCkycVmjiX9WuJqRXGi4cgSMXVMVXpjvKpj",
  "key4": "2ny1UX3qNB5CoQZ5fsyaHg9i2LWiKMnU2Yyn7z3z1fVKfUFk2crDkMvYTyFZzDrp6PmCQ8eWuVNJWfHaZzUdB3k9",
  "key5": "4zs8qPJWveS4rQdMrxaejRhhVQiPPFay7apcbpgGwMVH5GvW69bkqbcT2659R7STHsYZfpgdGd8S3M7emEB58CuN",
  "key6": "p3qnhzSa9fHN6p3qRV9xYiHuc6BUirMjS3paezEp43rTY4eqLMHcZvNFsUN6tErhF8eAoY2df74Q9pTiCkEm5nQ",
  "key7": "3QrDDJHENi5u649f4NowTE5dbHXucUrpc9cpbhuSsfzV6p3J3aNLviGqvSecAqMKGUeEEFUGq7qkKmEdaArJsiu9",
  "key8": "4ZjFUEiS83H8Nhdwafm5eCVhFYtwUQ7di47xmouyjJH8aTuVXJHzma4hJMbKE2GYxwdC8Nb3mTeNiXZTTPt6oAyH",
  "key9": "28A89GE6EKDCHc1AAG2dFbbtR7EVXCi2imqmktDcneWZ5sxtjK5jF4gnciguscjfCgF6kbxpfFqrDgzPQ4N7Jhh1",
  "key10": "WfWdG9uCohP6BUyTxRjo6RmYY2uJwCj4wBV7YamKw8NuEpwHdeopCrCiKGXzmmAANMJ2fujw6b4oj7YtRqULHe1",
  "key11": "66LWB4HFfLB1VPFBDvWT4u7KLGRSsGZ1tookKJpjnQEK9Jb1Tc494zNEMjGeKUJs6b83xH76U1fn1vNDiKxw9M7L",
  "key12": "4zQYGxE2jvwgMhvd5AxPyT4sUpWooqzcWNPTgpsgNdYuCnhnuzvJ7Z4eHzi3WsoXZe2dQGTGk5mU6kG5frQUcDFM",
  "key13": "37c5BzafwVmsjWpBg8bMfBnzyanr6LRvRLCBqARTeWkofJPpiLU9Fw4YFPZGUMteeMzoSVWiRDizRfqjzq8v6P3h",
  "key14": "2ZaTVgrDsxKH7ZNtRTe8ih3RGy9HdQTJCeH1Fu4pxeWYFKRMtV6U1pPdxYuhA18f58c3BKzhLiDWYz5b5aBnmcqy",
  "key15": "2ESpzU7RH69HeHNC7Xq1RyMKTJGYJDQG7NhDnHozKjSzxZC6V36sBZRvrdum9axYpBegsXrPC1mrs7E7928YKZhG",
  "key16": "pYLQ2uipMoFLEm12Tp7u1dhwXq5QgPHaAYb8n654ZHcEmfc2VCwSLMHvT9e3LVQhC9Nd2GYUZFrJ7CrAziqhqRn",
  "key17": "3bHcnutN4PkpJq2Ug6ywehVxJGopTdnFbRUkzWk276DsXzwwNMjyjNJyoGeNKztxXk4UithxWgne54SQTcngXQ6s",
  "key18": "4GHaepbNohXCo1tU9FdvjfAUXdkDnnSa8Jg9VL4NuU16vLG4ti6JpFng1AKRBVCF3zGQzqPwjgDSfyxuZbh4hHcE",
  "key19": "5PV4NHk46x2EimoVDr7cTC2E4KfMWzgCduC9LcGRnwPMUfuMBDcxHWs96egQ4y6EUNGPDkVsw4JgyU5ojRBjuGvJ",
  "key20": "3umnJc11QDjYqggkxuADpNdqNHkM1K5GNDkNXmWEur6Jz98oMX1y2kauoZTpWC9tprnQTExprZHZucHzq39WGXQE",
  "key21": "2fsPT7roDRo7fihwRfdpfLhY34Cbcj9V2g9VATxpodeZdmweSzQDrr38D1S7HqxMVPAMfrmkM3viDqE3NbjsbyHC",
  "key22": "3SC1fGYdyhWTP58aFg6f6r2QE2qSdvcbDrQiA6bGoPFLWAxPpEUY13JbDA6p3kqAsQf8as7wQ5TrLcaYZvMk9JYB",
  "key23": "2Ko1ATfoeCkt5cJg1CA9pRGNU4ZaoZHx9QueuX9TLiGMaFmfenxyAL3WAKMoUgqYDzKosaUhNPh12wQZP4Wg2jwM",
  "key24": "3sC9n6Qr7Z3k2LdaHEcx5KJZaUuYMwvwSLDBdf5DES28C9r79aJHkeDL5pX6ZftwrynZZJt4BidDSNYXccfBSD6Z",
  "key25": "2iPk3eh8N1MtaTdhyNBvWAoXPzPnNNZ1mZRXGQssZswLuA74HuWbnLiyaAj5i4bDJicvLeS3SfD22TUkU3eJkjWb",
  "key26": "3ducSsqjnxqfF39RfG1A9vYxb6LV4MxPkmDTRtbPidVzbxALawoN3yZmi6EGUHcuZXsBGdTFdV9pEpcA6ZijAcfr",
  "key27": "GoutCHKeyVuqZsLHHuF7toeSHzUhn1pPoUNExvLapSupjh4oocCBfEAYovp3rsKQgVuMQ393jBwSu6hXcvKn9QQ",
  "key28": "5SpzZGaTDpbrt65q3SpAZhn9KDN7NoUTkW84MCXqKzgj6eVavxttbKd2HjTmJZFfGyDEBZjwvUUffktaYmmRyCnM",
  "key29": "YWtsxWxxpoYLRW6UNDvLAcWhxofJXapVd8FpSTDMSHLQHXPifd7NmjrutDtez6DDFjALpM58sHxQ896T347PcnX",
  "key30": "3c8JZiic498gVhH33CLWhoHsiG9ecnvJBBxs6mcjRErt97EEKGQrfR4gUzDWTYSbarjoCsxrDmjxZFqos1LQCQPW",
  "key31": "pik8s8Fd4aUdDqmncLvEgstDU1jBZmq1tM6saXd7q4Z4UAPdUdGrUcKvLz7SJGFSJbW9BUhnY2bKkn6Vj4wziB5",
  "key32": "3Fyxd1J3d4FtwEHHrSq8ZzaWjccVjaXnhuzV8nmf8s8GYDeKHbA5KAqcoW2aqAyyPXc33aTxHkVksmKGSwat718F"
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
