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
    "gyvkAhcvA7mfcCjuMPJLPmo9PRr38qZq5EndbNanKAJ1jQ58bt4L7iw4TMU3pFEHXzGHub3meCR24QYbqk7eSWM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MokMeP3KSqF9451HgrWYLVAMbdWXYEhQE2NSomjekGevNMGMMuMKPVuguCZfLVtQVDQvDabUoD2BDsZHAiFV5Ei",
  "key1": "27groycJrHFhSexEb6AUC6F4DUojveQzFb8jL1GKRn7nVGELHwnq1uLL1uZM1FDBJDqRXUGbni5VZZ13wjpf8yvw",
  "key2": "4JntdruRiDbq8euRCG2zGV1goWvgFct3zyvamJz8zdrjjqwBnkoEsRnNgNeEMobdgbeHPKui37TdpNMM2pT4cxPi",
  "key3": "yHN6GMd8i5tQ4bbv5EiKbJbEni8u76apzZeyQqi5aaenkt1k1nnY6o1famZVRb4x4r4zcV2oHLUV4w5bEcAVGKr",
  "key4": "2aKCsp6cpFtJVXHMHv8R1hoUKTGA2UsjL6wmD6ymJ1kBcLz2LecXtH5KCQZEX86knPKqgprEmEAc1Wy88iQqnmHb",
  "key5": "4VXnqf6UMYQmWL6v6hzprVzakHqHEMxdD1fyP3kmMERWBDyzxxq5VJQszzh2mMTEQeNtLpHNXJePAgGS18dXQNEm",
  "key6": "4j3Fq1GHThVviQ9acFHv6qiMrTVmvUnBV93jUrBpmHivuVAdRy8USdFhFpm3MPzCAtJm4pZpbpSuKfowEwNmLd7i",
  "key7": "HBKTJFrBiFtgD1MPnDntUa3Ykd9jCe2FkSczskgQ9Ao7gaKZVCda3ZmELdvruerrJAjdhB1x3uP4eABwCuYMu7P",
  "key8": "42omFWWH9AQHEdJ6BRHFUd1HbN1tk9YBotdwx7LruAabxYEEL6zZMa7qd6xbYzj3YVK3oNY4Y2baA7SXTWBLNv8G",
  "key9": "3fZLi573SRW1HCLVtHtJNKpdwYZ3dZ13AQjRUwwh499UShBHDJR7RY8t2CJKkeM29mFYLm2zjh63RKBRQSjaQMxr",
  "key10": "45kyFffFCN4z1KGpcqCVMuPfiCyh8r6hmgJDsJPwTaXSLFkpRn7xPVdKa7ge1wmto5niTappEAfz1ozcsNc6gr3i",
  "key11": "3acVRJw5Li95SYXydTbDbYJ8qrSvS9JLrQdbW8Z2fpiiymqY28kZhnJYfysEgchPo5reUrGFmRPk7hfWessSYsde",
  "key12": "3sr1ZCj7fXptzUb6qZyQyG6cvwGBrUnUi4TjreuffEygbb6QXh3M8rDQLiVNyAXjYLYEB2u2SnjZ1bYTJXFcE7GP",
  "key13": "4mUVkaeYGRTbsXWrx3wG8oehnPdi46Uv5gg1CThRAjtT5jEhDLwJp9z5bxFVkyQYwEMEeLoB9oEMgGuHySDmXVBW",
  "key14": "3ssr3jg9RjZwzf6jAiVJqpkadg3vJfg1eEuLvFWM1v1JNvME5nhC7pFRVA8HTLESwGrxHJ79MgWREdgghYWAEV2",
  "key15": "45nBmSozHDNFAd61Rh2Nnh2nF2HTYCVp88awQQ8ckrBv9VnTnQQHy6c1nUwHHeYMoq3ex2xJAY5k4Q9rE5hwPeAx",
  "key16": "5kCMTQap9gKP1GYbLpRqHh8qovzNaYWkimPZwe1sPh5yvfgWXt1HC71MfNNdHP8tdVfJprvn35re3yu32mHYV1vo",
  "key17": "39VHFbwn82DTXLTKDRvAyNGECNAneq8YsGVSJNc88fApJ4P29aqiMtGotyr949Zm2uNAp8skz1Ahp8qwBAQkDVHK",
  "key18": "5DfSW3iXkDtYog7wDwMWQZmfaqVUBG8JCiQ3Tj7iVFZZX7nPogsB9zGDHSnXw9XmycFc6oCzyaczUiMwXRGmpqzm",
  "key19": "35VGiFmMiUMAc2rHFZFk4nrsypYs1U9deUmmMHZtqtgDbVQWEMxahqkYZLz7eGGi7NLLENRrJn5WXdnU4JWzgygx",
  "key20": "5vswqEjiQyTJ47HF99prtdgnCQw1sh37RzyPABVqcXPT3FTZPV43hred47dUCvuQdCFYByN6oYjtLsf8a2iZR7UL",
  "key21": "5hJSnEvKymEpKghHLTERW3CJGfttb5j5sbMiYvGRdcM29NqFrS5vQW3bE2JXjWgRzGYHec22AMtFmgXs83EBS7a1",
  "key22": "4nSGPYmTuqxv7M5R1HFWYm8PsGDSqbqpWsTiCM8Q9xi5e4RjfznDTz5jC5wyTdfdCpj6CFGU2qBcHb7PaTFHjPe8",
  "key23": "66btoeWaNUaQHcLGb6a7m1A9vu4ghZ8k5QGz4KZugSbusCVTcTCcSWVBFybKfjWPk5Gcdur42cGnnnTEBEwxNJnj",
  "key24": "5ZTeoAtUWsr5heHWvgYa6GXtR5pe1UKuJnsuP5CoL9qTdVT6ZN4UH9VjXrNAiaTgXCn3BB1P9BJRij74y3TwHQa1"
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
