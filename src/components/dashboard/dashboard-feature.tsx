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
    "4RdwDVxN1iFjkmduZGRkpMJUqFqYN8kPwxJ5KhU1tc3W9suDorRakTK4guE7ZSBsMnwPE36iKSQ1NyYvaW6h7PQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DU62Ni2sRShUjqUUEJCDGpzZNSxBM93ERFf1VzrrDqQaz2u5JMxjV3SAT5KyHaQq44VEtQ56d7zYcQdUtUwP9m3",
  "key1": "2guCmbQSWaFBdSncPYDMFJyNbnCPxFxFXgPmuea3PDFdTopyjGmXtWNPqYfDJs1biBsy9xUzqaKzPLu9fQQuTaAe",
  "key2": "5vBbzmGh9Pwbd5vkiYkQVij6iSAEgwgVRsnBUpJv5d4MAa1TndCgi3vE8mWQdgfL9GqA1Mxi1FLCqa5wAuS8yH6N",
  "key3": "3ds2ANmUAVKvJYqDZ1jzydRRKzr4am8QiS4w1BxJj7QUN9368HjqJQG9f1yfXESAL1JbMXDQUiPyfChAxQh7qeAa",
  "key4": "3qdDpVZMHZUmYy8R3vmUSjh5i5enVcDugwhSVFQQqGAm6zxN3iLXvscLZNci7afruq7mPUT4MuRP2DdeVMZFcM4j",
  "key5": "cKGTTaToUMkGD7FwnWMHXUXbt5r6APSdUiautWFnr47EmrCf3sSRJhyTYT7Bm3NunBNFGibV7pjmBpa9JFfnXXb",
  "key6": "2RWPsaNDohZpJs43JZ31ungVMJohaS9Xe5y4nKaqUwb7AXNfxcZRyQzhdKXFexKpV8H4cNDnnLjbWhSDS2SZivaM",
  "key7": "4pwvpLGhSvjhtopR73oGFQYHc3zrym2b6KxH3ZtwPCSr99HXHLJfPRWjwVVTWQGZpcPCpwYmukrQApzFQjVYXW9s",
  "key8": "4THFWYp72B53dBqzw8pyj32EMHrJpeuJ39EKZkyZjQyf12CXFKZmLogDeH4CRvCmHqg6X9Je5qo2nK4AAFA3LHbf",
  "key9": "63xETcRrGfyvYkQ5k1g6ygAg4pLSJEEZ9Lz7j6tjCNeFfvPCP6C4yEALvydKzsZsWALkoPdccJkC8psmZC8y9Nmv",
  "key10": "2BEBLd7Bgjtp5ZsMa8Ks16grYqVc3Ea3Eo9ifmmUf4vETiRokxheLdB5VKZcenpADpQT6ZYJm2P9bgVjB1pxa4Uc",
  "key11": "2s4ig2yCZ8AgPtks7EDRbr2kJMPQ4tUcz3J3BjjvZjuto39czGvNFkxBKTjJSiqnkzdSHjDsN6FDyvw1FDPwPVee",
  "key12": "59i2dQwjEUHKhNup6ZS6h7KyufopFfKQ8D2ZHe4TYJdJSWFVDxJV3pMJnAN2DPptEB4q9EtLH2cKaX6bWEzaJbsP",
  "key13": "5sLjiYq4TNFxaEEYn5r4uCweDtQ3qsbFXtsZpexjVY457z97Hc425HJ2gRhsV158GqTBBe97kJx35gVRDi15XWsk",
  "key14": "3PCU3ZoziDHZeYRv8VzSq661oyYD58gEuiM5mdGDUpPWkRGAZoL9sXEDLobiHZbURWsjqj8snEhHuWbEYs6ZjTX3",
  "key15": "2wVn7bFxTiLkFvKZ8V19UrSMAKkWsyrBmUxwSTVvge8qrrm5sEtvCNpFDd3QEMoNoHnWSjyQjAiNk33WrCKsmzF9",
  "key16": "UjnZjk5yp6pRn1twtXt4HE19qyRVtpRBnqjf89SLFUbYUyVEkNoHLHWK4aK5uCYEV5JTKppYgXwNoTjPpQZodXh",
  "key17": "5ptn4qMbyuxpgXfZBdyAduNKykwLUVtkevi5a2RH1khB27RrX1wehtBChmLnV89zejCoVjiZupFnzjrgshs7eoHM",
  "key18": "2mKoQfJAAYmcS18aft1VkDDgnnxJvBx4vvQS9S8oVtgVzXYLVVzqpxboxBfKzRuAV6jQz3iYxiefuiae361zww8Z",
  "key19": "4K42ghpREPKFrZ4fjsYJAEgcL5emo2J9p9m6qk5d6jBT9p1ADdtHwHaUAEhDt24dgAjXzwsATjASWLS6hUXKgmkw",
  "key20": "5AG5MxtQSakG3oj4gkt4ksWy1eBG6jBELrfSRUwKzjUHLjNfV1HMur7oUXQcqSsRmGc1Rzd7VgJKfLJsZpM842oA",
  "key21": "49PPmh1YNk6TqUdNeC1qsXNqz1KkJ2AphU6TqYwNTLD1tBF3DmZ3NtwnSuBe5Cwv55taD4442AxsAm7z6akXbqEo",
  "key22": "281K165BC2nLz4ZSP5EBhPcpCvmHVyPJFYMGV3uaBLBPZ7GcnSUWHvcNDeXzqACLRiJD3peSRtSY3Y8XVziEREPe",
  "key23": "2aLBEWpLoZqFWhHHoZ3KwvH3edT4JK3MJsmSGmGhLrwh6PW2iViEsH8rtvwomfTpJXrhpDbCkpTJJFYXfig7qvbB",
  "key24": "tLcb2Th3PqTitgBs9sJTdzVq8pBTkvJQRTPx26j7KdGWcAQsXATT5EGB57Q1D8SAbQuL9eGHqJg5MP2EgmrZU16",
  "key25": "zwScdERpDDpAH1dmGoBiUAxWaHgABVbaSbUnDVY676badhsK4swh7WrrVhj23L2fAxEBc5diYxHLkZHjSC6DUWc",
  "key26": "3uJ4YnQwBc8PtKCXuCopd1Fo5LXiWng2azY7EgtVQ9obNYUUhTb5ej3npWtMtafTPi2wU8MXRo5Za2yQqMJJyQxy",
  "key27": "4pzpb9RCzMRgaJ6QPogjQboor8rxavY8CU2pzb7ZbWUr9FLsiwKsFjoNeM2S38KzqH6Lh1LPzRxK6mcaWUCVNwJ3",
  "key28": "54C51QwZupZydDBkTaKXXqmyaCfr3to2AiLbNXr9fVLW27LStTTn1MmaZeHExvUW7FM4xFTL5pgXNdQJLqBGdnbk"
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
