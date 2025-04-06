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
    "3wArre5yQ5XybUM9KBC3FRnhdCbTqpeeZNChQL5Zuus4edKaa7cv1h4cAhodtP2DJ2QoVhV9tMYTMfiu2Eo9G1ao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pqDKwnBWQFbU1d971XxaYuHVaRqAVYxh9qSMwR5GYca9bQqRRspWoydn66pULyrfgxcZZNa5dTrDcjsaKxrSs5W",
  "key1": "3enXyjMXntxZQajAv4u9zqaPS2rpgF3GvaFTBaZejarmVXsTZJzxmPM6oWWFYdt1VG92BN8pE9Xt27En7SkDhNhV",
  "key2": "KNVhhYNGdfvLiiNeB312VfZ8dxBx65LiWx1nhsV9q97QSLtZPD1kT29qyfLXAo5FioVv3dz66PsK5XVWgHKFyjY",
  "key3": "PVpKWQirXdHtf3MuoWQTmo6v8KrVPoQMtxeaaEaob6ZKgaZMLSsAXmkqANqvwdhZoAnYfe1fG6u5FMJ5f5i183o",
  "key4": "344PQe59urqGbJAt91F1ZiJDqA5x8fU8qD4fG6rr69QURksfiBXGGEJLeuuSvosRCbPibdzTL4UiYPYZQizhQ8W9",
  "key5": "B8t4fNnwLtv3tWah5oXLhLMxPhBHjQkBtkVpD9ronEzbUAuTXWgTTTVpe3fnxv2HCW3523EpF2hK7raE1VJZRsn",
  "key6": "4Lsm9Nh1XGxe3r9BH6z36KSHfa5GCEcphcfbnFrtXbEhyTEGZGoC62dsksfydJ24u9TekQUDcrKPd5HbxD8dkAK4",
  "key7": "2UixgNBSWzpz95cKordJdoPn6iCxZMk89wsfYwNGmvkeE9M5oG8n9jATqJaQi9a7XwTUaBLUkQgthFsMpiyGQ2gG",
  "key8": "2YCphMC8Jbye1JMieLGks5ZFYzAJCZnes2iGwT8FLA73DkgfnxGr2aYRzmVsdLdLuDN2s2m3qTSafkaY7Kc84Jxn",
  "key9": "YMGuqyvEjYeqcuKzENeAmuXT7XqDWkC18pH6PhB5QhXjhcW9A6ZGzmy5kLFQRnZFWVbPtf1xYYuvfPJ44w57hom",
  "key10": "3ASNr7ZDxdEAksYiCdSYMgXyAuhjrTFpmdmP75x3KbUFH3tv5aRKKFmugHDHvRjuexo5HBLP3gntPEcdrdjv8W27",
  "key11": "4LA4xSs9BpSAhDX3V12GftTaReoa97BbTWrcJbsY3NgmRT6aej8VZBLYSM5A2U3E3aHoKcb9LasZGjC3w4ifXFjV",
  "key12": "3XJRggrs7BP4oo2To3u5FFUYa2h1kAeaFfWQkKQw8mxTg8G7tfpvKgxfcwGWLCorgpqCtyCuNRYoY5FLTuRjuh3e",
  "key13": "2Aoe2UfoM36yhdPy6rvwUPAvukw6mT2MhHYsVyj3KRTWGwL81t6iW8fTjRJZMNTEaxndSoJTV4Yry5mQ1VyK7Yd1",
  "key14": "2hbjZ4ySZMZ6MJjHqoqYAQaXQZx81bAKG5nShFiqUbXxBDokg97kk5wYDgY4xK4c7dRsyHMYp5kch28LUjxqYHkJ",
  "key15": "5J49bsFYor7dk7heyF9fWRZYwhs3yhd7WBwwQH45nVGnQmxh9mFEUgSNAbhiaF213PK1bXWgm4vn7qpjDZHGQNpK",
  "key16": "5XfU8idQfxESGq7yYx2q7qskVEnaGAu8P6ss7KRfNgpHbNgYGqc2KVo76Pu1mHYSrn5XwqJkTxGjYGtAPuH9wUJy",
  "key17": "3nymTvUZC2NsusFdARMnS4CPSj6yxJrLvyi7FLHtcGYvezUjCQ4GmkDyBtZGXwQ2eCugoigfNzmJXpWzBaQUVUDm",
  "key18": "3C8LYx54UaqRvxBirjc1PP7ziujrr6hmJwnxpT5hMF5yDWhfnjn6jQhe2Fz8t4d65gEz1R8vGWVgjSAtT77SFtLY",
  "key19": "3gso75fg6vS5ZXHDXF6p2oEn4ZW5Pcgs5C6Z5qLW5XcuMMAQHGaycAbJRcsxf4aGeJK2ep7q5h4Kk95niBxVMx48",
  "key20": "5j6VHksZupT7qUybX5PnPDxZ7uW7Vp8rMyK1HB1N4BXoKduBfxzqgJNTXJFUQS4nVEoPwhqLAQYJHCNxZVSM1ULG",
  "key21": "2t678PRokk77VNmPZwUNKzFYTeKS2dgTGi9Yi6TPuzRVtQwgkq7RNPHmZVvua4TEMokPeNoymbjko3cUaAWDnGQ9",
  "key22": "2c2htsz6sxJVZimWtvGhUfUiQjX4D4Pi8vwN7QKakPZojCkTsmZahZVQeMvQFUJ2BN2bLG4zgVNxLF3fYF5EjNtc",
  "key23": "2Wd9VsZCmVke64GuvaHUuFLpvq31zcgzqHntHfghbGccAEgTeaM2v3SHsa7uLBmE6Sgg9ByWHQ4mZEFRYQ5nm3pj",
  "key24": "5tbXJCkWX74ye6nAGkKX1bgQCxFsmz2aziqX5j5ZiT6Sg7aS75UX969Kf3Q9jTn2YAUCQCub7156zo4nUcVo36CK",
  "key25": "4QufN7nMNkrHk1andnVhnkWhT12cFNGrvb3T9KpMMWceYxZMRzejECk2T5uYX6gPpccmxTS8KnYtyngXAcrFQCga",
  "key26": "28MJ5Q4vTWCPHxg5fMmwmficUdWhggPni1fwCuaDkiFyt3DZAfEGJPHP8saaAZwbQ5grHSqQtXvjbALxbTXDe3xq",
  "key27": "3A1t9VZbu44TFEoVsmEksSpnjSguk9rskVHZXpsv4bZCDhTkCCRoPBporqtsFhtonLV5qvjcPFVsVvP8rNyPwLw1",
  "key28": "3FYqAFKj99vjGGRCjqcmQB6X76u3g4U5L8LbpaRHvLxEPzSUhtjXLHFfZZT7mT3esasABP3Ee1caPZour5tVumvj",
  "key29": "YJWHS7j9vEh5EEMAyxFLxPTjFc7ZTEVBYQEgTPimPrd2ihd5NbxwzdTBhQKDcwWKvUHushMt8f3GSjvoeEFp27y",
  "key30": "5nYL8JrNAS8znLa4tri7E215HrfCkyhTyHqjCtKqEh9t4idr2sBs7bDvLV94ABXmoaMhQPbjZCz1nvNzaJ7aPWsY",
  "key31": "3Rq1gZ9MC8T1k7fp1vYzkhTRtYXF2A4QaL94d9MwmuR87aops2XbEEEXtHreCHq3xAWMhHdvWvU9Qfn6PvagXKE5",
  "key32": "3BZZfriifQxVVDe7BNcN2H9no1KnKj24BLXxp1mEqFWHkMMYTDPyehB8y5dBw2BkD3qUWwpfwFuEebM1zT3ssbRQ"
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
