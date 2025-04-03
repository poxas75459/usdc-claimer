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
    "5iQpmwDcVYsEwVRSBjyuBdGz2A372m5LVfnW5AJkwbczRWVswUeWu4aVonL1otFMsxu8TjJXMVu3mkf5a9rf5zg6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gMbmeTxibVQnwhXygQn7gqT6DQpZzkSTZW8ewytF91M4ermbrve37HmXzcoyt2uQYeFTZ2kn9wh4r5ry2AZMKts",
  "key1": "3qSHD5PJ9k326SkKJvDPzaxznBFhr6SwvqAEKBafh3PNtpFV86e6UthHZbW3mQW8buqLPVgVmxyp9by9W9G3v7uK",
  "key2": "4a2UYDfre4bgxqJqwAFiLXjPuvmwxJox4fJPtjU4ybt2Ti9vnGMBEAUtTDXcVo4Cracq9RkksjZAp3dRtGdtpgEU",
  "key3": "5mvZWLu9YvpzucFwpf3jvc8CmhfVBKztaEs4TTxmD3ehSXgQiZ52YnxTtfzMAVbB5uoijAs72EYsUmLnRY71nz1D",
  "key4": "3P9AHKhF6SfuF7GeyT2CBM4hD52E361iHWX2aPiM2ewp7zeFrKzmo3SivFrxqbtw2az8K5s7PwyzH2Lq4QNEpKhR",
  "key5": "UpgyteHHxhxZHRLv63AnP6jsWHxQGDSsqckQB8JTca4BiCUp4TzDJUBk1LrgAFXHHaKa65TicaE4QQpQp2FpS23",
  "key6": "44o4AU5twz79ngdLGdyQCKprvxQNo3rBLTUMYA7R5YA38rbQfx5gkaLUMmnqTGDkPWDu8mDGjfuwjW3jWyGES8ca",
  "key7": "4NiHLKKVy4sFAMmTnn38fTApgx85kbZSBx1JseiRNEEC44pv9puCpfnsjWF4xFKndZPS4fMtVBQP9qDZroeCyiTR",
  "key8": "5u4sPAQBYX7E4CB9GnkqNGKkrMRNm2uymQEck4CiVFfSjFRCUs8jRLLULWdgq7cCdysEFYNHaCENYMqMMM8NeJsC",
  "key9": "4h2HrREcCK45HL5f4kEE9P4BYfmSp88J6h8UK1EJMYNFzdWvE6Z93hrQNL2MN5cpq7YMsF58kqvZ8iBWuEazZDus",
  "key10": "44VTGrHPiZ7BRwpdfGUpBa8g3NcHrgVTQuPHNPLfywbyqhEsMok7tUTBKVp9E4DhFCV9NdRtBjJm4d9Ptv7AgeJM",
  "key11": "4EkX3njoMuspe8VZoEnrAnZPedg5HPHe542Magv1xW3cRMFegKj9dpZ8a1HjutTRAxULR6kjzkUTiJrBrUhY5bYs",
  "key12": "2wiY5XBdVBdf1DTBRaqWmFMqHYtwnmc3keJj8Qi4LtZKVbDmS26QXmxt1iUMtBTu8kc9UqxVKPDJrv8Cn15FRBAh",
  "key13": "5CSHRPKVSLNcYFfw1f8kgxx2EqMEoSpqtuHu6SnCoauVw1j3Fj2EXopZFnN7emJGVU2PTV7bPiPe9LqDnAAip2uB",
  "key14": "4uXTKetmfJVELXWtuehuUVALaQDzYhtBSQgMAQEuQQhLDu19f7jjkDgr411bAWoL4pjJBZYQDQkfRgnPa22juTiH",
  "key15": "5naXDmZxu6BbdcG7FvKdqZQbd35zKEEXMoTFc5Tq8xJGaAZH6jekNgmXJjTNnYdtD99z4nw776x3T4RG8PZE8VfV",
  "key16": "HwwHjhYnMHi3a3Sp24ZT9bNJa3Sqo7njphAgH3bpcEkFCAoJLSx7H6pKsQMQgjr8J68yCvRk91QQcJCy9jPFxHE",
  "key17": "4yY9xmCYRL2GLvWtnui1dQmvGUojw9o9pDwc6q7XnEegxaxebGsddVbQnSZUzbZ5JZJUHvAAtaZDCMFVqhZY32yf",
  "key18": "5XpGFanSJqnfwLM21dVos4ZSg3vQ81itWgwQoSCthPbVrozGRi7PET1nB8gkAR27ouqDAxeQz4EAqxpKEbf4W5Ab",
  "key19": "4cujzEJwYPeTJ4HgCnCePbBx6fZiJYz7c2ebTLxire4xy7ZpjewX1xhJK98cgPW1Ejy97VFyM58Xge5VqUXhvrxm",
  "key20": "24eabmMUqaj3ifypNnDRDwcM2Qk6CLQ41B7HstkPZz6zji1Gy5iJgw3NASXBbAEFFQcbUNCykziUfvCvaua8AFf4",
  "key21": "SBpgevmZrQAWAjKceNzd6mrQ6jm9vZkDLbS6VDMCmLbB54f31gXWrvCQxYQGRRpnRd1W1Zq4i7P75bJ221GdYgL",
  "key22": "2F7f24L84sp3vRxKJpeHT2YQXXLbeDTGcjtBJUyXZveBoMEvwGSScVQ4ZvQ6fRFZughNvHJhiwFDJ591W7JsACtc",
  "key23": "3CNJyVPUuaizYenMrjYJ7Fut49mYysJEQ3uD5QLWUBaXbf8CQfQj5kRo7MprxR4KCpe5VAHgGoDkn5qJdkmLj4jD",
  "key24": "2DfL13KrHLDRtPPTsxh4PbA4GvLL138HRDjoyX1xGFnVcJNcqoNmT21SvDXJ2s6s5NJ6LcQuEMXZPDNsmV83oCyC"
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
