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
    "5FWVhPoucbfyRwmvs6Q7ng4R2k3j9jYeS12QFyaehdXqZLXbwf3K8ZW99Rn3WsH3exkmeEwFXF71Uo7hmjzWbcwc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mqVNDoTusNKvYfWbQmrF2sy3GaCj9eMaKbytosCPRJx3JKVp3bD8mm4KzSm2SyzFESkUKHZnHhSjT5hqvpb8Ve3",
  "key1": "5U7J6i2sfpREujYt825AUYteX833fzM8tDm1beu6KDRmMEdin7xBxZBmwJbH96peYTyJjQKtxGTtfkDA4F1r8T6k",
  "key2": "4pneasrbL7i7QynQvv3Ga521oB7pckNiFu8bMGRM6aVQWghP5RqBFwNBvGhCxgALDE7SjLVyqiWSr2PvDDfWeS7q",
  "key3": "5ChBget2DZHVuu7B55fDXeQnEKqmksfi1gGegSor2xiG1KHrYT1ofNH2NqZEHnohPtNBc5qMD3Wu7hwTaiQmyxUN",
  "key4": "5Scko42jHbZyhidRqqPvmgEYu5kA7PwzNxahWsFgFYTkMyvwMuMpjfpYEakF79VXYsG7aEiK2t99D3R4BCQr4gPp",
  "key5": "63itRmfamM3E3ttBjrLBGDDxcnwPnDyfqV2nUBLAJ5tmj37As3PLXsBdowUagJZ4KLSNYZXNaJQLtZFqH12RBG9w",
  "key6": "3RDMCaMTPMxvkaCkqmFtv2jknd9Vov52zAcyov6Mj2DdpuPdepdHfbLLcRAurHoAzdSmkooAR9M3RxNAb18CEEVc",
  "key7": "6hDkJQxZgMsZtmxYQjadvNRzD8onSdEefVDWYikYM9tMLWwovL8ihj1NtG9evfRexNjHFVyVBDxBxWhvvi3HyTR",
  "key8": "Rkb6bpMfDJY1aDem48kh8gk61ud5EeSYAbRy17CsnktxqSGMtaYtAMNg164nQizziNUxczoGCoHaA3vkgHJKiWf",
  "key9": "3GEtDUU1VCWnLsF1vmZxQBbQ49TwmMNLPCvDrNGPby15mv83p8nxFcXvJjFs1wPVUoK2aZRkW8JuY5vqjvkCCyJC",
  "key10": "4qvGtZmGX5KiuP15V9aodGkt1RZXZavXvruhdRi82ygKfkPnju3ozguB5TqEGtMUYqSsySKbUtVaDQWnJTwj3cFe",
  "key11": "XnbKGGV7LBomxmoodKuMjXy2rgXR7BogbGFgxnK3XoibGvhArjC7vjbmVKnGnyEw8GEPu68SFEhENWrehumzWuA",
  "key12": "5ZooBBT7d56Lmr3qapfCBWDD1neyiyDfry7y4c25EPeN2fSANqqnCoHngrRyfteUWiTdM1HuSERdZZ7268SKLQVj",
  "key13": "4wXghDpGQDVgCmCek6djLQ2ACuavohozfBmtRtahLP7fqmTV1imJPdBLYdNTCq3skZg8pqubFzXMGCVs6gbMWJiJ",
  "key14": "2HjCjVKuFgkSe6UW4YzEM8KFrk6zXML2yFSy8y2TcnXL9ChzBwoKrCv2nL6WeUJs2bTjog4xxTabf7uM9z969AWv",
  "key15": "4tSy3fYRHKDoKmtsbordrVumfmxy6DxmMFVm6LPziaP3kJnnvFjXeivTfTsrmhH2Vf8xsrQ1u61kuYMcYJ3grvu1",
  "key16": "diXtQPfQ4Lt13qA6Q2H5FbGHE27jNvxHn1GMTTLLw3FA1ZfhPiStSQJ9JBEMmNLu5NgEE9HeDRQFrhak8gYTueS",
  "key17": "4aAi7KF1xNfETq9WmbiQzdLo6rDZqcNbuQ6tTNtmZHeartUYRjrXdByvMwc6MAJCocegE6pL1RRgjksqjHmHaixW",
  "key18": "4p2cwEE4kTcV1LfNVn2MnEpPGrefWfN6sUaTGF6Bp5mD3kNWbLC4QRbT7R6es8QmE1nEKFa8M5bLaa4MBgCyASvj",
  "key19": "5jfwE116a6obaXDimfCJrPnX28Gwih3ukxZJDdXpEhs3znvCeLhpNTAcNp5g1YuvYg5pikddnJFVaHTdXppNsgAB",
  "key20": "3z88vrrLdeU87CqESPACrnyF8t3WcK75UTcz2MbbnaTr6Ko8wG7YhTMYrKCT4bjnWgoNC67z7sYwVDNv5JrpEhJ2",
  "key21": "2yA6MykYXW7XBwSUj392xAQyDtV6Nv3GyxzNb9WG511jh64E9BzZBE8yxQ47oA94X25brWX77PjApyYdvqGorSXr",
  "key22": "41U7nmhzV3yrfSW6VQhb8fPuCxobiE7cek4kh2zuSHUd5MfwzTXRGVjqiwpXNFouJxMNfMFkZerDZF79E8R5YBLC",
  "key23": "2XzYy3dvQPoN98kuLFXn4m7PSnNcrNFfxGAP2rkcGBVBQtREHdzXkMqZkT9CFaDavAGU9fH7o2839iVgzXPEEGHC",
  "key24": "5eT4rUp8YJezTpWya9wxQYBCpH8wTMGEmQgXXQjVDmAoEdEnKG1vSew8ZrA244gCk6TosjrWpxxa4GV767zHSM7z"
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
