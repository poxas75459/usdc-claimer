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
    "5eB6Z4KYxQomGGkzvn4V3TpzxtcVYkT1fnzVKFQdK9PALAyXNfwwYEhgMVbqPdSNVc3yitymdCtvujQZsVs2Xh2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aAx6Kgq93EUabWTXVrjR8P3ru2TLbBH9D5yiumNZy9a2Wn37xQoSn1wPqNyUk8iNTmbeXp3kq5xzyYUc8JNm6BP",
  "key1": "2HEEBgYRHrH3cBZHPzqERjrju2wEXzZQpWFHiVUe9aq682Ta5m3QQc4a2jh7TqjbTPrg9mZuiiFFhHSX5Pknj4Pj",
  "key2": "2KabKm3hYipFFjX8nxEFXgiwoBfU5xmEnwzUk6DXsYtxDSps9mhwe1mYGGNVRNEzfA6xM9aAGbahk34j7LkD1V3d",
  "key3": "27pFQ8QbUb15hqW8oo95ZdaUc4gP5q7vPHh9GXZeQkdjmXZLRmAGqaT179GguKpY9QB6PbXvoULNo8cqjC6A1wUd",
  "key4": "4quqjTRQDG6HBzH9J6RSqthvGPVP1U1ivzLhGBSyjGY31gCZdXNF47iCDvJ61cr4UBTfETvrrXE19gLYwtUrm8fU",
  "key5": "2t3wMQtP2kNtAeL1vfBG2Q5jfiVhv8tUFW4bAE2NSEYsjQf8jihNRYyTzfknTuQYnVr4KSoJEP4kLfEpNBnAaDXw",
  "key6": "4sL6iuFbQjyANq4vQHdUAiMZegcKyZcNuUJDUnraW8Kcona7v6SVPMoytBSUf4fYVMMWUaspbe4Na8cvWjeW2Nqc",
  "key7": "2ppWku2nmJ3GuuSvKA9h6bgmfbNjhsyMGZG1aax7g94GVL4cTLmXdHM8bqGAftNETk3qsSAtA4MMfth5wDNME6V9",
  "key8": "5PDQzLsvsZHWWzwrRic4KJMhy9byo2NDS3gE8P2M7ht6ZTDhz3yjXaKp58k8nkfgtnWPnJ7RFAZtqfMgsnphcXPP",
  "key9": "4tx8B54f2VGH5hiak7PCLAHQf1Z1SuDfbd1rXvGQhCgz2jWF6Bc2yRzQ7qoRj2U3R31z28nVZt1NSJou4cRjunts",
  "key10": "2DpLE6dzT9z2p1rZLQyHvSuCDWGBpGoJLxUE441dXLpRA1dT36zpXj6MSGSVtoDUQ8NPAqiS44LkK1ZGxxfspLaT",
  "key11": "F8iWmTGT93UX8N7wqw2wg1vMma4ei8ShhHPvRrcgDea2KmL814A6ALek32XSdvVhjPWtAzXa8zM3WqFi4qLeXAB",
  "key12": "2HuKuQsd2MCpcWyBeNN9xmACL9UHvn9nn6QNzYGA6axnXceaHiiUXHoXmpioXTctoFJvQk9dtkfnm2rxwND2wJUJ",
  "key13": "3hPoQG5gyx3uF71rDjH6r2MvwDYohx7asiaPUcnjALSVTJuwBwU1gVGwhGTFZJ92GdsFFKjBLRhAEUgF1ixBVywT",
  "key14": "vje8aA4eSQobFGAJNHnYrgRruqYoX8ZBkc3S192xn4kNnqaJWyBpg4371faBtbMmUDr43p43WLkSJpWW7zm72ap",
  "key15": "TryE9Z6PgyimjeEdzT3iV6hagP1SLEaeZZzuxwoAvz7BceB7cj7mFdtKMFwocjUAwtbHKeN71bLpv4rhw2dUMWC",
  "key16": "5vxcfWgMfR2H4KDSrRj7tcTax1dUUbs8ZnXmXVYzU4FZvVRFcVHTEn5HqR3u8kxQePAawR9JsayZ6rPXbJ5sHm1J",
  "key17": "47KZ4sTonAww6G7dCVMnhpq1feRMwa7KUQrB1crzkNUS84TCw3nRWWos7SZMuy6vJT49xuxBPFv5PA1fRqgSxyTg",
  "key18": "3JnVyP1B3XjPVtS9UGeVZL8fPMW45oct13QA8AKAaHZdkq7X62tgvb2gujZ3VrKw2S6Qxait3cpoerh1RTVUGAZr",
  "key19": "5Dq8a8fp3pBnV7x6dZWjgZtZPniijgkrnPbepZKtda5KG4bFHPgws5FwjWVR4C6xUuWxmkg2B3sW8FnXqPeGDFUk",
  "key20": "5wmJidz1p8PoaMFPL9TqQsQMNuGZUv1FqDi4VrmBmVy4vXpmAa7UiAuJuybmSxSxTZ1paZBtvJSxQMVee8iKE9ik",
  "key21": "4KFg1cRtjvL2hhYz3G1PawMRbcpX9Adt3c8VnQYMeH4MuLynppuwQStXwVXdf7h9JyMA5VDy7gggaQumJJWXoep3",
  "key22": "2nYSCuyaT13R3Bi8gXovvzgdgPVgCsqB4fHPRUuQLCvvosb6oHFcE78a1H71xD3FZWcCFhJeAZVVBbPsMwrFkWWb",
  "key23": "5Rvee3nZzmaq4MKwhM6gt2eNhDubmKYmvqHoNU8xbccEvvU2DQrN4TLMsdgWrZTeUFZbYGSRMPHwyB3rAsZV4W2M",
  "key24": "LunK1zoazAhLGPaSb5yACPvnYNKZwAMTZc5dKKsL7iQ4WabCCTtHzfD4dccnJf1tPtVJFSVhcHTUQC2wqN2iP3e",
  "key25": "3zp8raeazsCZBhz5P4wdwEZETnSTYsNksoNG6m96uu9b8EmqNakqzMJWVuQfoXj1oopbtJ1G9p8KrwLVt5oTMSjn",
  "key26": "4hYNnAYpX6pYTCokBqA9bCF4av4qUGJcv4qZAUgPTY9s9JATrb6M8RSgCEndKGEbHYmZisdcr6g7pq3YsNG6eXVd",
  "key27": "2SK2PfkZLWevnJh7M2oC3QrtakDbzZvcypGz96nS6NS8BU8zTxLz2T8TzyA3WTMdQkxxtWsmvGvycH5LfBk1Yj9C",
  "key28": "kCr5mu39uCVA62ZawbQ7B1EjA73Bso61r5TgVysRSxEGG1aCySUiArEuzCASj3X32XX13R2g2jdv1ENZrbJDdoA",
  "key29": "4w2bJBmMGdYzLJSqwXaAv38HpHahRboag9MTae7X73YboCFRuYoYi3NeuCctxAG9YU4boQ7KfbHz6JQVYFwv5LFQ",
  "key30": "3LYLFqZxNqBPbEo8hKv27cNj6gkYyBSRTbfDa4TmazdoRcsV4VgQ8jVcsemBjvL5xNVFEXkeuzQ32DKVAZKyT6dp",
  "key31": "4kWqyAH1XzDaDamATKc9cv3jsN474kpFmjCHUfaNxKcUMDkjqe1YUzVANMMQwjAA9Sc3a2pMjj3BW6cawr6H6Xok",
  "key32": "63Fgsy6jQRBLVEUxbrgg1eFRKGhLC3T8Wv2vC7T5KjeRkFQwYex7tHdZ9sb88UvnMmpV698Vso9fFC2ACUJNdHmJ",
  "key33": "5yxYMhRjT2URn8ZH3ZAbHfbGw8XiBQQN496B1WPHZy8NKjAoYWeXALktsJrp9Q56XAQshQWdWDmZJ42pnMhKqEnX"
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
