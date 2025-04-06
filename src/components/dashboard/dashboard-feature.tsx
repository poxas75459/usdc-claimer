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
    "5MsarpqJRFZVZEQCUkv86FoGP8yj3Rn3HTYhcbnDbTB2WnGWHF5uZDKW5Afv9eKbPNiWdsE3tkYhFi9P8LxhJfrr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22ccA8d6TJeqpcGpgZ5CkDwYHnfdYKhstBrQg13XsyPpFv5bqKkGJmTeximTr5kDwbwfSm6qiPHiS6pNN21f6MLT",
  "key1": "2cTff7HRDduWRqAo4gVRmz18dd2tk6a95E7VVGxwFZ3F7oRh3dEURUhgeev5S7DDnSutC3myhr7emLMC6veCyrra",
  "key2": "5Ym9UuQhrvkhr7xsAVukobAzwDnWT7Je9syr4dJKoW8m6NettjQoo9uvwjpbPzcoXLpCMqU8k9X1yrxE3NMksBfH",
  "key3": "3ietLD3ftku1Pj1MSVYCJtvrKYCR3LfFoeo7MfCTwE5aLtiutum23ULYgJ3iocNGs4BwD5KzcXCzz7kg7wmd4dHZ",
  "key4": "5s1jzwNRdpJ6YLSVoKJN8xNQnhsmxaAZThWU6vXHeV3fPjmUjrCDkCGAGoQ9kcRUEyNSAZA6ixzZRM4oPwfJYFXw",
  "key5": "5zvGqreR5GJxqx8bmVo7QAkR78ZkzRsXZJznk6ssagYHKU6x3gLFzXzjkKyTQxJLVqHbEBREYnkpiHj9FvLfCswB",
  "key6": "3bLD2e9jGzN8SQLHpAQs4bYm3Afr1w5YuvJWJc9chpcoVJ5kUX9n6guvMcDjxHySNH9bYgWeeiCAaBKhX1V6NxFA",
  "key7": "4dRQz5gE46UL62xXBo2ioeqfg3FaGKWaAMtiDLF7KLwgZXggnZQ6sagvhy3KQZ2h5KthZfEZhD9v1mHeWsUnJtqm",
  "key8": "38TExeTrKbJnbd7iS6K23gDF71wgwJEDBrkd8BGH7x3NQRvvLtnZcfEA1AA7mwUMqVrUtUbsXK86caiEetFSxGrP",
  "key9": "5ShTLiZrRdks7udFsqyGMGD9dG2z9pxFH3ncZjLbM29hLMraQ8suEGaApSf5FWua9qzHSzeG3FXrUoYXZTyUAtMq",
  "key10": "2n4uva5bsVa1jUd59Nwf9budB4FJDRWZVkZj6gmrioZFeGoKYqKd3xTNdoNCwURbsgCRfQgZ1icmmfCYhtU3Y9Ji",
  "key11": "5JiHqsyepoSWP9wRHZVmPMiACgpBXuiB6YNESAcJtdPDP7cXzxLipteM9sto6aNq5MUVfcEVtnVgVe8jdKffcDdU",
  "key12": "2JZYM1ajfHuADYNkaqjCEXWieMXVWPwvyd1kSw4VVBPc3t1UbjFTMDhrbEgaoiXVDCE3aac6nRnbfbX7AXR6TtSA",
  "key13": "3HSUPuTZvwQy5f2qak54wy8NzLfZroffoNpVnZwZPYsbroFypwDBbKuoZEts2Jv3Pqq1CfFKqGPB98mwmYki8eZ2",
  "key14": "3dsTg51gTtA1EMq5wKnCwjpgkh59TDF7J1p2hDgpncPm6TypbhHvFtZovN2cBarfrbnrZPGZn3BhUaZARR8JrwgS",
  "key15": "hdFTebMygCCuYMqBTHxwdqE1CFcNK9nrenxDT17RY1hK2Kj2tc2HHfrhZgyGTX2HW4KESwXTAQh7SEnZrcC3Qjy",
  "key16": "3nYNGapFveDj42FkYN3NmwhbWQXYPBqd3qhY14bRZDCJDX7rnKe4AFt9n8Cd7ZXdSXFL6MCr3JF5DZJKmH375E5z",
  "key17": "2i44LHHeSfhXyBrSy36SLsDYDkLd7ETVZTR3E6NRM9s89wRTFRbvWRQRbWpf9V9Q67gtLdF4nZGsDPEHwddPvgv2",
  "key18": "4UeQXirrYMeiUnQLjW6ZvL5TXshcim9SGdwyYKmkGRogpVNAeJKijPhZLqK79JChArECQw2NNt5qAD3GtYsyR2Wf",
  "key19": "5XZ43P2Upz5HqS4BTu39eGndsShnzDWvkfDc7UEbSJBwhFQX27ctREdgiaaWuM5zekZZoNSM7WcM6Dndbf3FULuP",
  "key20": "5s75vDwQiixmgRZA2FBvn8yfZT4aSGBvvrNjmi9RAwfYyLCNoZNdFYqD7Ujvy5t6AY7VYtbS612b99cFHY4KPzBU",
  "key21": "3rxu9fPHTsBMsXcdpDw8WiRcNN8kuPMQuAcVdAWFzZTTJuRvWoHJgYK8BscYLi3EFeapu62BunNYAWczy6QL22VR",
  "key22": "33wiRggFgF9rthP3trpQLy2jGBsLpibJvb334VZ78tpMGgk4qJ2yEBRQ3B67RFCsfPjeowYa1T4iv3yExFw1EYs",
  "key23": "KasWRvWomoEPw2Kx2vqF8VfaeexnWvf9qK6y2fQd2UbNL6nx16BjcPuZUNq6wpY27YmUWettLJhiHfc4omo7q1x",
  "key24": "KFvvKnM6JxzcP4XGa7BP7DrGHa6Gd974gFRKhmnCjjgQVsWQxqVaatKQWqFwTLjxFRWFFiRXjPpAhuNLs4L7LZJ"
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
