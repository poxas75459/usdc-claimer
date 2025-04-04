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
    "4i4ZyTFdw8eYT65bfQvMuRoGZKQTJhm3EndzjskmGcEUqMfNm6ywu6XhxmRLvVrsdu4hec1PuwHZ7ZvK13fk2Dn9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GFcDKYqVkYQQQtZq7wNZmhL9FzUWjgm63hQbN7EnxauuKrWpzsE94QoDoz2R4CdaTbhWPuna9WK5cx3krR23oLQ",
  "key1": "RHMvUvK9XmknrLUNSJBab8cVSXLHimSoV56mjgTDEn28QB4ZLFGdC7Pc275UykD6qqtVf5dvSX9EvDJKoMLhMLS",
  "key2": "4FvMPbeJVMHACGi5CdhVT4BsTWHKcBTxFarb7czjUDGBdFexgVxkydy4UQfXgSaJDPJwwwLcTbrNpd69yScNDSTk",
  "key3": "cozzd3WRR9tSfUeLb6j4tTeT68EXTRYZfg8bJewG54afiZDLysgNbeJ8LhTSVrEcPR9ab4oDYwGFWtWyNQ4nUkD",
  "key4": "1rAq97dZc6ZFamSFsn9E1s7FNEA2c6MHixnvdBKPVKEPqeBzFYzkdRbLnXnTSd9qKHcsrdEuYLqAPxH2zA5xogx",
  "key5": "wiGsDHUiRASFjo5kTWJQCPNwoJDV5yU5e3DdKeQ5bw6ghM8hji3WKwf18G5b9Pw1dY8HQTH7PYYnhUmrsht2ANJ",
  "key6": "Emxqi81B4mdXoZix6baUbrKYyM7pe3fkoakrJiJPKed4zEWjk3GdK4PHp5m4ZyziCVqCNL9fmEza9KrufnFvAVc",
  "key7": "3zj4LBqbsRmBLMd1ihw8Q7hEWLPsvGnMhcQCyQ4wPLaJJJEYMmh7AfmowjLdQEH9mEsCmjHZp4ZTon5Qrnn9KrBj",
  "key8": "DS31SFbMprKjZ5N7zNr3q2Qdb6Cyf19mgPrRgE1GToU5RwkS1zkfEr6XBRQG8RdaKBADgp8EdJraiVxcXAS5fnq",
  "key9": "2MsYNz6Zp8nmsWM7fNzydJCZg2fdY9KxdCUgEzUj9DDym1QqxFp7e5SgqFk2KHgmVNiVGww6ccT93DqhPeZcDdmk",
  "key10": "2nUTnaoxyj4Xnh56zKqrxZmmpkMZWBh5A5sC2uyChZXv5h59RHDm2P7gBYBxQuD7de1oaZEUY6whRQczBA377siK",
  "key11": "4p2agq69Ms2gKNacMuPdRFnyqLCANjDBELms55GGXwSoqN5p5Z9MsqX2jzNzjm7F7UatCg8nHi7o9Rnyj7omnQZR",
  "key12": "3soDRk4M3TgfHh2RWkZiNNFZvLXziRDv9aXwyxpQtFhxN3gvxPtRxh1p7wV5VwChrZNd2jMdrTBNv8Y27X5zLqi9",
  "key13": "GKCkAjBj6uVor89jVJm4fuYM2Fjx2rguWDwjhLYAwnhVP4WJHgYycjj9rjRL3F4GCNQUHcWZqN3nG5Ep4mKxdAR",
  "key14": "37LawCKiHZS1cvMTGbx1tggWfvrp1trdsiHLUbWzvjmQteAtbLWragZ4hc9tC3qNAL7JhNVXzJyDZy2Jtfc6tqBa",
  "key15": "2wDUnyWLtSP6cETHqcWSRaG3qoL2h5PGw5kkzk8FyByKdoxutYpBjgrYQwgg6JkKU8zjZJJz7p66my3tvcKtWLTT",
  "key16": "3wEt7mDj6ZH2awx887EXQo5eRy6Yt5n1ihN5B1TUNLStfWQeumqhqcxc3n9HBWffB6qawmBpnxLxEUREpzHKjoVV",
  "key17": "4TJUNUkL95iDgn6XcH7qZAD1FqynKSoN47AK11JDecUcd2x7brFcxW94XC7uTzqtYZcvF8Kne11Drx1js8NgC32c",
  "key18": "3YyzfT6FnW6SJggoBadHhGGkUz2jbDxkzVZE5ZeM39UA6BfnGsGoJgQBTzDVjGzUbULY1XANYxAkoDaVXA5BmcNh",
  "key19": "5pvetGJ1xif1sMrfurybjE3QmQun3Dz5zEYJZ9NZD73HrDXo3GcK9ViMhGuHZFZBrtWiExb4U1Kwc4NWqoz3AkeD",
  "key20": "4nEwm2abksfL2rZ1tbPc5Yrsdgg7fmoCGGKPLGDFpBGpUJr3N6jN21fGWXDtgoADD7kmBHvqcu3od6T5b1SWKzq4",
  "key21": "3FokcpCBGwn8PU9bqCk8yW2YaJWEMvqRs1Fj6K7n18RUfDtaCyjhHrap2c4JhT9SKaqBy7qv9ZGUVNQqsvvrwena",
  "key22": "5GDTF4E1LSmFMJcspkJM2pVQZd8ieqfUdWRLmnbuNsPSzGuNGtjYZZqJbhTuJq26kiaAr6iqRh2NKxGbY5zVi3fr",
  "key23": "31UBENzFj8F1F26kCVdUHoPZxfcBffrmL1Lod1zZMFUEKc4WjqtewEFhdJHoy8X63qqZi3iAEuJ1ZLaXhPA6TkZM",
  "key24": "5tJdt3CW3Xgxfb281sv7sTqNeWWftbKaB8uXiKgf2kEc81YBdWQ4VYeQJznDCor43nRSp9p3evvr1vN3J4eWDToy",
  "key25": "2U4WHbkeuHgK3bS7BPAm6kU9AfuCwiUwHehhBjLjVBkUhy3HTyJss1EzJsaNrWugwiEuMLRMMwE7M8f9rdcbKXUb",
  "key26": "5x7DspYtmnEPQCoFokZBwsAMurq1iRDcriQqXbRUPETc76tUVGAR489M69sQBHPkPcqe5GkvcN27BU9uc26cbaJc",
  "key27": "5gKkQcyBRnARqV5eS2MHy538p9JZPPzAVbG2eN6djhCHf3Xwfs3FsfXdG8yHBhyTLq3jqQFCDAKeqxVACt5yFiKF",
  "key28": "4azYDiSoKNRTgeFK3HcNL7K8afKfGCovQ7BxwLW3yqR2QyB4QHC5u6yN2BS9tok88bGnJ2NReajT6axDQrdbYyNf",
  "key29": "5njJBq9D8puCazZ6LsYfpQLpsx6mW4PwxQe3PdoUweaPN2yCo7JK7zj4jp92ME8PEFAoEDUchZj3aZHs9zyHU8aA",
  "key30": "2cdfFW4urSzJRPzcBJHj63UpJPqC5UTXqP4zeq4bPxW2tiNwyuSRjTYbQnsJWSt9D6Sfkvsbut9CAAG9BkASA7m5",
  "key31": "7iDXiTU69YKMajLZucVDT5kUAHPsSwQGoEELcxHHTGbhHVDodv9B1EbHXB6gySEJQWKXqmrzxFyzVTNGwLTgg5U",
  "key32": "F5aFTrAEKFG79AGtPmGzrC1XnJdtN9USCboZJrezpQGN1f6CjMkn7JJTUfTMzQLhL8BqUk7dDrQpcvhw2Ca5qz9"
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
