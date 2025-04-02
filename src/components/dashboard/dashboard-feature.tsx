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
    "3jvXjTjZfEctbdywfbHbJdstzYsEhmtpUrbXKUwtv7UaUopPaqgA1FoPEU2josRr2b8g8bPmCwr9ioLQr4VsGNCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3afw7Te52cppfnmknP9nvB5UiYbGt9fW4MfpwrGJfYPoAYWKftiDkhKRHEf1Z78roF9CL5hkgKwbBANDQWgjNmVZ",
  "key1": "5gkyteN3KmJFuvA89KGRgXb6mhp91B628i3gykcWwWvAkZCNgv9bpfGKJKiGmfqpVAUJQmWeConUnZJ6DkBbhSED",
  "key2": "2sJKKQygmdj3X2Fv21MvkH41sjYkNcmgYxXdDT5ahuoH3dcGZDuD1f7b3PpuKGZZFtebZTwWeLR2darreDB2vhtj",
  "key3": "QjfHsefzaDFwhGe81D1Phq4L1pfD4xTCLCp6jLDtJe4Hf9jtVQJX1FAaNMkCeaA9CDduWagtwToHCj2nZUuLT7t",
  "key4": "3KT84jh5yV9Dz71Y9Jxcd7nQaBu1dNVzRXmNttQGinB8jMKAp8b49TZBjw9Kx5jGJ2EmYVjpPiKWo9DgVc7WR289",
  "key5": "2g7vy11kP4wDMgnnzKrKNx82jxQbBJTy8jS77BF9xs1BavdtH3yg7Ex6UJUmGcbZTL87Q4xZqGbYoduy5LdNJ6cS",
  "key6": "3AHTAbmbGw42KhjFs4iB5G1Rp1yeMyTmwEnFugTtZaDgR2iSv54Aw1XC4btVLhU4yvMQNBfcEMDFq1MPKtDsMYUX",
  "key7": "vtHTqu96rbpo86KBaP4Wz4gq8qoXnBCPZVjkW4rH2UQxU1btiEpvNachKXoAU6h1akrrcpynVn7ABmg6BWFEkeX",
  "key8": "4Y8JbM6zF8Pcy3vcqr6p8QkNSYESHT6LpQ1Pk7shfRGLh3pSbCroWc3TwycMocFLN3LtAcGj6Dg1ZQg2mSMMxhdW",
  "key9": "4JdMp9Vu2fTSmEtKMDUBHQWwJ7YMaRP25D6bzoNyJmysjG8WKSvpibnfdCqj3hq4zSErtp21zg8MiArx6ASF5phL",
  "key10": "5kfffZU8YqiKiCTZ3MDBV4zsnSPjuqMnDbtCYad1Zfdpcy75jBMAb7M8sJUHWHDtyPiWoHwmYw26YTG3BDafVFV8",
  "key11": "3iBLakij5NKA2rwDwJfG43fQMRnNFLGcndDTa7b5QUduSk4135UeFeGydAseQgsm987USPyPHAoCdh6z5GN7zSmZ",
  "key12": "4PuSJCeRG3Nju6mC7i7cYetvv7Ekc4sbVqvF1rQXYnHe4qrmyPYyngXNFU65vz1NyT8kjogHceCT5pzavvAEBZNh",
  "key13": "4GRnxa8VAMvw7qDLAjDs2KMg5Dn8WhQf1mhEq8Qee4odUacrvUW9XgDawuRuM9aRnTgUvjPJQELduzL7nnqg1ZNY",
  "key14": "3fRE3gYcwA6Edc6d9VJvENoy2MW9xK7ud4CcPMN5fAp4AKyE4WHVwWVmi3Y55TsATmjsDc72QuQvYvxGUy751ytR",
  "key15": "3QLaj9o8w23TeFP3iV2XXiEMFaFvgr8jzS83u3CV4r2TkuCEifpBimk1Fr1Johs9ZBwjaqV7aDqctZzrdW9SwKQH",
  "key16": "4yiaLxrx9YMUC8ZXDmQDkkQSkR5C84DE3oQhZ3kBULceW8cWaaSC71HqxT6CKGXCuT3vUBc2vbHLAxpDFJjNk31A",
  "key17": "4poYhn8DQASov4txrRnoMzJJHHqFZSo6t6DsBNjB5VDCvqaVDPwveXN616z5jtQw2ckRPP7oZqB7BHXGqaRmDatU",
  "key18": "4ejGAo6VzzHrMdMctbZ2xXrFkjt5aj9kPPXTWzyVS53aYDMpXroya6Qt1WmfPuMnidHzyeACvmypB64o4EBKxn5s",
  "key19": "64qKXqzK2Fkjvy3TnhRbfmdHWUgn1Y3MpsgmAh5bsfL4w9dJ8mRvU7x2KiSTv7N8RDHpkXTpBwi8EbjRqusresZj",
  "key20": "CpWQZs1YXowWiSGYw3SGU5hde2tYywEUUHBSYiLtSwNtibyoJDoBrJN3m3AmAVVrTKG62Hz9uSYfrR8FQgcLQ4F",
  "key21": "5mN6Fw75LQba9Z91wBCqRWMtx35RhMsKTB7RuR3i4eYopXGzabZ8bKxe5nhorw9HWGsDoaRtRBujPKQMYXRMabTi",
  "key22": "3eeg1HJiFUwmTydVqN2n1zGhnLWSc58AXfNPHKYPCmzRx7GkHUWgCZH9eikKQqCh1mk9Q53vgV54tfEvXcM7HJZG",
  "key23": "5hTarinrcaZLMSmKcuXYKt4u93ZYqvnujHDhhP2qQNgEz7VMqD85818NAm7NQJTzoeoSpq2QgStQoGU4THW76XHw",
  "key24": "36Kds7P9ssq2FxoaBf3xLVepGz4GrfQuHxJi96kjYKQQxbLDrrmqh3gHQnaLX2sczaHdR9z8bWSwqoDufVuAzpaL",
  "key25": "4ymUEdBFMcztbWpBmrGi1Z9HmG5yfVHAvMV3QHPA1yN2RtN1ePeQimGtGyQWfwdLdhUmTg4LcYw1ER9s87eUa4sN",
  "key26": "2jeXPkvBCgKsYG89hiSodk86PN2HymvULbTCAhWyi94T3UBurX4PtDh3KpjPjtVennU5qrVkyyG6FPb9A7AgjeWu",
  "key27": "23WbVUCVE74gRGjeTFa36g3j6kYWXK2M6LauxUewWCqPbqH58UcWkyVWbfcrLrNNN5tst4AV4zE17rgLqXesMw2G",
  "key28": "5eq1SCoH52qxyRQ1oJZmWDa7Q6CiGXtgNfaDzw8uM9bVXN68HkAVcSM1onDWMc4ntFEBqK9237jKizrZxbiFYgbm"
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
