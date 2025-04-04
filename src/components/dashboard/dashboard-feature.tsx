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
    "48sPCa9vMVrhDyx3ManCWU3b2ht4uvAS7M6oZADS59NofLnayEvzBigt77tDyBcQzupkbQGdMEAMTUjxAzstw9W3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hCLDeSscvwD1tYqHGBLQWwGSFceJZLNDosBYYjNySybnKH6dirJf6jgXn9qKNSCrLF1fjpmSivLuZLYjZxEmih4",
  "key1": "55T9z9c88KqMuFYfwpqmMsZVUry6kjioiojoVBE4V64jy7yJ1SqdiGj8ML8YcbB6FvC3NXyzeCYdQGohqoc5NK1w",
  "key2": "2cpH4E2yxJVwTiSWdCTraMbjuAUxexWP5Q1C4t8j9G28ZJvPireVCs3Gg5dKBDzbYLfA5f5Pcgd2E1MahA9sd65X",
  "key3": "46fQWTa7adnkxUZsqnppDayPc6h3VgakC7h43Rb5YBP4ncyqy56hV78Y8nCESrbDZzkKKK6mFm3PzUSjUpBBVd6w",
  "key4": "4hJW3gq4hYdU1DgxznocfcfeQU6H8Pww7Zes8Rhmy3gPnWu7Nrsig9znmpzMxhKMQQnrAPh8MfW1cWv6qubiw5mF",
  "key5": "2qkXKE5VhHCFZXWmEDf7zUkBqyciwyDM3DFvXfayGtbAHijQuE4jMpGoBkmGzduNnJXEgzMAY3PSqy5EccVcZrnw",
  "key6": "2DpVhYrjzC1mc32CNqo2SVsSNhfvjxRQHUWcjDBUnVnYGyLMAwANJKCfYMxZEZwS82YiVNJYzxErEA8Q26Tb7FB",
  "key7": "61NCxQUVto9kZPaFFFNqbd3Rr4wLy4cvDkc3HwRWMC9QxgD4T6CvXssN4VswYcM9GMignagXps9bgArxdDKgSvi2",
  "key8": "3U2qy2kHiA3d9ZHJAJzva6YemQaf6tRCzq2UdphBZ7JC41cVsddJ1R7KidnxHUgUNRTaH39RmNYD6qbomxfib6mg",
  "key9": "33am8JHkVmBkjyA6uf3jhZdgGcQ9ESzf3DALaWyuHKovM976NodwhZV7f2Baam2HRDeVRm1JVwqL8DBCYj4AcEaC",
  "key10": "48c63C8dyhGuSR3sgVxY3eZmuBcycNPBiaKVBeZaCbo3isvFPM6P15nxvnyvNEfUQdyT5yKNApBt9Xh2zY6zF4ZV",
  "key11": "36FKT7oaAaQgqcxHomxYZS1GmsjTwUhAfVp58SbLMTTERgoHyvQYr5eV9TzpyVSJDGAnr3rKipDHzQYpg6cTiJUS",
  "key12": "4DQ6AHrp9NuydfSBt328kkmwSgqFwaQeFjRmCaLWy53pV3WxgXypNpjYr8rFZUVZJBtegUECcGfzHBPfy21dMBg5",
  "key13": "HtqiwGaDMSunm2pHxx8GqL6hoMApb8ifVXH1HgLXxjgppHaK5onWfreo6j8K8NjM5LqPqFEwDViWrtyHXb5nanC",
  "key14": "2wikYP1FwFgSvPHpFmsL7XxDUSr3qWpLTjM9NQasrDwMyMAomQBm8EKtFprnfyaaJTEp7sJZ8Q6nMFBtnYMh3gjb",
  "key15": "2PzRm49npPTjzDAtyt6HSuGf62iD6ho38Shx15AtqaimJmUzHx8sEfqqfHDMNmVtrYZBbF9Qv9BZJD5mFYFcsQYb",
  "key16": "2kDXgTGaUjmg9QH9C3RQnoZMC3qRNFhb1rLpEymY7Zgv8oBvAonHKh9JETWQLGFEnTSz84s4SV9Av5r8W93h259F",
  "key17": "3jCTymGowy2YDPVnjnYjcmKXc3hGWR2hCNtYKEhw2AtoZCstDUronL6dZtFouas93kfWUem7JBu8u1Texs2APoQh",
  "key18": "5qiQnX1LtYxFCGSUa9BarEdhdXJfruRPa37Ns3F9cqN6cfrHLpWEbE55ovMFgo2aeUGSkntNfseACA9RiTRPb1h3",
  "key19": "4LYKCdhQhHy3HUHvWVGfVnHbjDbgQHh413tRKuy19B6D8J9aqCGvCAW7StM24DY5stqwSLrwpNjM2Wf5XesEVwiY",
  "key20": "3GRLQUnzYf7eNUbVTUBj1SggYNrwVycQsmmRSGbj523CXaGEodFgkUjYdjBUo6V4NgehZB84mKWckLVugFawmM9D",
  "key21": "3Ce3tubwGV2QdfWgojR7p5jaK7y7wGeSSPoCE2vAjbzVN3aBUCvXeyej3WBkk2B8GZSNZ5svgWGrqumdXUvPRLhN",
  "key22": "4CovqbpNahiNWokQKnPx4EqbfxhY4XuMNsHWeg76H2XyigGA8UZGBuFeR38qwwNQLR5jTs3VYWQAzFBZFniragqy",
  "key23": "yvDcsjNZXDEvvGTTRX2fJKzQjMx2NtTunUCGjB2a71a3ZnQDpA5Ec4azNMJjfhkTE11fxENfXrYdWENepduWyxF",
  "key24": "49PUt8i1TeQpws6vNRavRGXfux17fuYRKe7FJGcHs8qEwbYyVHSSbfkAr77wX4cdDWEGdY4HJ3rvWYBhu2tfrvLY"
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
