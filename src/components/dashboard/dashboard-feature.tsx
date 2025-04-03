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
    "5HwwPr8JnsLL44VMC6BbaH994sSSAK1HsGUiESAFyqweY5MSE5bMkBNzjddwwh672oKMb5peGgEkjNSBSwQaVD2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nC4SeTYBAA91PbyP7VkUxqqKYXj5tKj9nPaXUgwHBfcmF9eibJPpSn7s8PCPYN4YwSnYifs3PLkCb6BTP7UFmLc",
  "key1": "2UHufLT8yM1JS24hmhP6hUvAGxmiksgsaLogcym5F5V4fP6zdrNJd9P7ksLhR3S8E6q7norcng2WfYzq5f9p8Wj1",
  "key2": "2QyHFFWKtPXgs75qYqqcyCibU66qJTVjoJY9AEWc9aHE4vCd5m93ZfWvcVuHviqaDajyaT6raisLfWzkPYSEHTKB",
  "key3": "34uqJ7BHxArnaZHoJDyBdikw6CS6YnPLhwNB8fhD4t5nyJx9Qi8cwDxU7AqKpEwaCMX2uvDWo17N5fEB9DbdB5j6",
  "key4": "QX5Xuzpk8mJ46FpiMETHcuPoSqxsve1PjvyL2xr6dtd1jaERL9VHuvxADA5JeF37maAthSfzXozdjELKRcdFZPm",
  "key5": "2om2HSZKVyGD6VNm9m79c8HBay2Mf9hYqe4hvjvTKKHdWduYUVwyafRg5zyBLwc1VsQLfFv1dihcpY8HXXSzK8Qn",
  "key6": "4eQNJFB3k7eJLhyBuqPEBKGagtjobwxUtyNKbqbEiCq121QYMSMdaaXDXKW8qDSksQfYeUrawQjoeZ6gMdVwYpJo",
  "key7": "4ithACyvZj7UrMs2gkNEr5G518nSZ2XXEVjJaVUurjZHmT8N3nouiiY9hGhouFX2voCCq91uWFRBHjQoZE9c3EeF",
  "key8": "2JBJJY8V3wt8C2hPbeDXQQgkdiz1SPdfsJxbeXD1TXmUoNYu1eF1YEgeXzHdZnp7i4ArJE7f9eeggWFPZufr8MK7",
  "key9": "4FPn8h7ixGVToZopsVd1ADHNfpYWqnEj1C6XkBfD7ZVtRTEuVYm8Wii8XaSibCZQFcacFoxbDUd6BtU2tQvMwMcY",
  "key10": "ZDCPc7vSqU8Wyqwx2kMdi3iEApqw38TT5drdUjExFkY2sB3n2HQxd2cFqLMKc9PtFyc84uTdNPkY2mf5YQDuC9V",
  "key11": "5TMyfNtwszXPbVe7bVGdL85wLmi1tznHyt9qRNCZvktgtLRyzyMEThjzWXBzkvCNtA9GAbb9v4sW5EWYXtU7aPUg",
  "key12": "599hUPHnYbwwTLQx6PJ3ihb4hL1P9kfbgnqc7E1U1FkcvATqbzaSVA2LoChhsKCjDHWGM3TaaeFL4CejnsB1VNsP",
  "key13": "26K7xKTyiK9qnpRRzeU3heJAtZc2kJG5r87Feyew8mYwGHQMWvQZxZg6sSjTnHKysmLSUYA2ZJVFPvE1AuQ6uvsM",
  "key14": "5vEjamoJuR7mR564hN8D4QYkBZPaHhvGebeNh1PRGzvWJG99pjrvvDwceihHWyCsWQ5yjT883vt7sWaaHDwxhwaj",
  "key15": "zmjyoroW9nyTZ2tTRPjaJmCjay5uzYpmuD5Gxye1s7vCrGxtdFRNwbrqwma81hXdhtnxAjK8TQFpsJrm74VzfxB",
  "key16": "37wx6S8g7dmyEEEC4b3xudarpUN9B9pU4miT8u9FXpExco6MCC11nteg7kT4vUuPdxgg25J8NARCaSJi4jaGFwic",
  "key17": "21eEuv2pqU4LXzf4CK1iCVRghGDkFnsT28Do2GWdrLPA2NJQvj5472Kdzsmozr6F35HR88eVNztkpMaaUivXzXXi",
  "key18": "mX5YxQC3SyR2RbJPoKj87huPJKujt7GKC9dKXMPNWGrdo6kUMUnp37oD5n2bte9bSaUX3QU4uwhbcGSeZvZVPD4",
  "key19": "edYT9AoUVvmQXsc7vkhm7zr8c4xEe1Fhk6JTZUrQ5aVTD8vYPoVtKnsRqzzcnZ4YNaoKZ5MTKtBWyYrsdTz8W7N",
  "key20": "3kizRwJdKs9F3KzjWE4vs9ndRmceWynV8DFCSKjPWatUQk4uVWeZ8Dq1mJsqemtZX44qz4XebqQtYvGHiKgYjBpJ",
  "key21": "5AnsuCTGYf2TkQRnfKSD2xAgNAyefPDMYr5dcXM5FN7TBowCWxXUYphicjEwtvcJMDMyMWMSAHb4oDXzwiP1jdtZ",
  "key22": "38PbmWhvx2KVe8Bg29eNAz7ySJxQXxhgZA5AHiBh3y3xyKwbkKA3zGNqLxxGaAkjSX89zQMq1uBvbTmjxQqYopvT",
  "key23": "5c2Vs4KCwsfHHmLdsXPdnZd8sDBtu6c5SUJSV73UGFpHwL9NnkQ2EbigoxUnLfJAiqrwZLYdLYqpiLZWNG1gEnge",
  "key24": "4EZQkrpWv3wMRg4vDxDLcr9ss5J54LuQ5ZCKnqZ2oBCrbsc3b5qPcX33KmtHUzE6KgXw1tg7CEwBiMjAo3yZXRWu",
  "key25": "46FWC6vKaBxaPBmPcfKZzHkbB9ttrzGnWZmn3DBTKN9ZefDseNu9Q6R6EM48hKSZHXBFHsVjFP19pgiogntNeXk6",
  "key26": "paMPDWdibTChxjTSCcNUGRRAV5UoXdUKFwqYGa8zDvC6BT3sgu7bQ93DwxdEdWSxwaCMBLJWWay1EMQf9vmXV6u",
  "key27": "2eABWBVk5ryA8tXkiEVQ6DsfmTEejXbx4hETthHjvwKA4pzWrvH8h3wmahmQjKNFtxus7rpGfuh18cHfr49kBDRg"
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
