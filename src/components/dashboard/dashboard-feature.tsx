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
    "3FkEx9F2bt8cnmHErgMgNfzKD5RDfP8BcixVbXvquByjiCF8YXjbtyfcFLzBRo231hfoCQrv83fVftVdjNB9hZg1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u4MLvLSZw5XzkB5U6EjPeWmBz9ywJ3GMPopPmv5bYK8ZuFxYDPQQvC7VyyMdT7y7DAh5PZZUNXWb6is2WFa7MSw",
  "key1": "53FthHG3EMLRxYMRq3LcULBQ5thx4icSGYkwEw3pU1yuQG2hTHcobMCTQ9bBK9YSNhg5FrBxxiqihQ6UYZMxWwGK",
  "key2": "5oXYzfXD3JxcumKMPZDyuFmDqQXkvYfFSV2ZJNyCxK3Z6oR8h9fcKHmpKNuMjqWN5cnGNoMdddewmFqCwDKXuvTf",
  "key3": "J4XmKXgcjoEPWsk9GRVtfmZxH8shxB9VehXkAEz1tjvLvYoKMA9qW8HCzND8qS2nj1R27Tpt5TRHL9oyKshKyMw",
  "key4": "XisEkSTXWT4DmXWd66oPHkBymFJ2Ng3M2UgJh4McHbApgJejC8UrQQgvJA64FhRLxjoF4UQNxyHKdMQHUBz2ckp",
  "key5": "25dH6GvVQc6nDuymYzxi3ZRb1cB8J11PXcURzUpUdJiUsg2arLMTZpn7nGKXfcXwBxQvSeW5jrZx2N5tukYrGQUK",
  "key6": "2Km2ss29rUup2o3BL4q5we26Xj18DFEuCxdwBfeLHCrkwxjzEMYPZjXeMEQVUiaMvQtgEs8mwUaJsWerV1ooryt1",
  "key7": "5uB3jNqkr9YqHuWnNf6qtNNvFSRVDDpJnUZk3WfQBR4yraURG1eLw2bgd6Y5fPLJtcG1sKUjamkABjkZ17v4e4ZV",
  "key8": "3WATnMwCrrCfRW5pofTJDJCajHzoYe7kzKN42pfr5GPyqAuQ8Nh9gEhQ6fpkoEpAETbEZBRzrHmRkUvfAX11t7Hu",
  "key9": "3JCcskvw1eN2NELozzfKffFYb9Lsu6xJifzNZDk4msehRMU69RzA44jRsuYcJgxYwhhn4cTtd6uQBRx3DsMBhLUL",
  "key10": "yanXP8F6LDEEdMeigMewojXjxRbNJWM32zNKtb5bhnq3cHrvVwrVcRJeFSJE2zpGfPhVBuQPCvUyJMhXiXdprKU",
  "key11": "38xULvX7raH2QkcScMhp1Sb62T1RWauKgjnvdpJbMAwis29AdmT1XZJZGR9q2DGXJZqjAvGNAZaSS4PToiEgn2Vq",
  "key12": "2aDwWSBEMcx6BhtBKkPpH5DZSTMezdJWLpkW5kK1NZekvQNxyjntcguaF7CWQWr2Frk4fnPqn2TAstnwBMjqj6UU",
  "key13": "3v6qLe2ezLxzvAYqMuC9bmePbkcZDzVKJFUWhWanSfuUSybAwt2sFNAfive4GL8jaoySmri1JyBWiCzhojS3BaTP",
  "key14": "45H9aYF5RAq9TFGJLHUqHWZquZCBGxbZJF9Ln6pHxgZNx7jxqGtNVa3zpgU79d3vnerS4wZV8b5cyakSN3mB7wB8",
  "key15": "4KkTXX21z3ECAwYxrFDjie7qsf4MStFdb8YYSWsFTAdRkTxPSbk1XazaRjpwWUVtKrpRcw17bBYDLoC8QmtTSPaG",
  "key16": "2UCzaTzzjYBZTBWaYjt9ub6cQvNhmaggD4LsVM17YLdSTsd9tJiXsRyENMcBCBhxFEENKr8ZHa9LSoL8v6VgiG2A",
  "key17": "4j5Hmjpk3Xhuw2PtW7xuYMxxxjJezKCUZfaEc2vJfRAmiQ5Gw73RgVidr1UdPTwkXddLZdDy4uzwutypKmexRBvR",
  "key18": "5rCAPeNcyYQpW2BhQr361gJzckrQgp3zhKFo2UvbytttgWR7qn5Ge1tvm8URS5yArL45j1ZYn2gKefXLp3eiQWf3",
  "key19": "VMejuk1HguVTw6Rb5ADwiurGa19tBtdo7uMCpp88JujCvbzq882i94Zafg68WqoGvFE7iFhdmK1NaVg9y6Fvadh",
  "key20": "5VYrV6rk6qaK8xckPhWZB3vEeX9cn1gJgWX3u4YzoRDp3GZyUuMfz96FCgLXrrDW7AUfwz74KzRJpSt1Ub1U65wR",
  "key21": "K9bKZz7QjkPQEnH1dX7Vg7JVTFADCiXnxQDYuM3ovSUHUtLwvbeCeKzEQGZPzWV2DnFhsuPufisZcqxntp2qmef",
  "key22": "3qgtZ7hHY7RpT7ZmStXJ8MP8QWxuoKeJMErQxH7HMAWTxFzr4KeQUw9nUEGLSEZA6fYHgmEucVQFkqY7cRoZQavC",
  "key23": "52QmjWoBkcvAovNQaSsWiCoGttnwzMhH1M8oc9eocKDgmRAwbjHGFhWsERKrxcHduDowQu8rxnGKYhUmdEd9yGAm",
  "key24": "5wjcFVbnyREV6PDhhGLxakHH6beFVdxh3e9spmqHfunZ3h28ZFPmrQkPiazrLjRNpdDFHcqmc525KFkRSBvHUpUk",
  "key25": "3CKrQqjvjmj7rgtMjAs5ATFqeWT6Z6zhj94znFvfJMM1eoKifCHjnYZAbp8KxTPVT3q13xMjXbSatHqfSVbdkV2g",
  "key26": "4ztsrbd4NrNFQZvZg3tjtwzkKhiBFAea2kCA6P1wLsUrczTJoT7u84vrFa2YWboonHqDbrv9NwUcd3LkUq3Z4v6y",
  "key27": "2wAtJXKN3if5VJfc9sJVmM14gS5zFxuwNa9GLAy3zBPj1KtEjhZuvyQgkVArpH3sTvNncyJNtXs6UA7gSerkzvti",
  "key28": "5yxUPNVXobiGYzqmRtsVgHdPVscNudk3zb9EByk2ypTV6Gn5puhaqFtqg9oR5AaGmBzHu6toB1Ho2ndbKSGxNCcm",
  "key29": "25nNjWnDQQkrVAHDDnHMpZZt4S5ha9tfBHaZ1LJBRwnLHJ1RFy8R71JoK5E6Pz7CMEaNUi3S3uuDzqcKgdLfFoHn",
  "key30": "3VZzrXocH3qTe1QeyLt3Lt96WwaZAzfDsHnQcefU2JnA7KEoSzdr8pgb8utLmMRndsh21Ro6em1XPANXCW2Un44Q",
  "key31": "4SW4DUEeym91ewoSqWs9RJbdLRYmSVhXe22uf9wMgR7JS5WqHXibGXoZwncG7x7JAiJRTwUTDUCrt4umVbBrTN3a",
  "key32": "3ZR2b43ajHVcPAtuuiemgwvFEy7GWc7EZx94BzzXaHMr4GzsrKSCsJ4bB4Y8hDNLVhp64oD9d88xgRk6kYiYwRt4"
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
