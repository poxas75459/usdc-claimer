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
    "4dXs2RMkknkFbAxo7tvGrmeQNFdqtQYgMC2W66QeSjx5khecLwhpHU7oZeBSbJHmww6X2uZXGnhL2Ajp9iNK6EnL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J87d4x7ARM9XdhZgDWBv7pqUXxp41xU7NVwh1zdHG33QhmvKMNntNzfKwtwuz5h3Vikrs7fAJKsrU5xXb9hq24Z",
  "key1": "4e5F1QanyraN33mpuVpzPcxMBzLYopQTQBHZZGQhsfXJfrKktpGzyoRjowAitZ7tQBy93zN5UiHo3PDZd7WvaBQK",
  "key2": "4M2vpuPv94DgYF6uygDEHFrZNrVqEMUu7pxxS3ucJ8ErFxYTXKeaG6NWmM3Lu3MJQ3hhvdNxJqowkDiVz1bQAQDS",
  "key3": "3URQdXrAjBwYkG3sRmio3U3siLmZNLsztvVfY49J6Ssg8aKEMTFcA9Me55Ka73c31vsRovYHvB6Uc51n4s2WtoXL",
  "key4": "5dNLb7rAZmTLA24VqGKH5HcSTQe3vL8eaUmqdQWG1pt6xz5ZPH3b819rH44EokZejy873uTBJS2fNmgCRY5cFJhP",
  "key5": "67RHJWPpGRThx18TC7tVX1Q7KS2LTg17cRtWwosHsDsE5L4PnXAw4YRgC2MofAMgDDiArCFugm6bo3iErzSSb2pJ",
  "key6": "3qbWWwSZ3CLg3h9SPEgZrzTvFm4psqfR8oFWQXRgjUEQ5LtyHs5nJ6HXnoxtPodDwEhcwvJx6otxHuiuwQBCtc5k",
  "key7": "2cUiBJqGzMWrxVAVFcxtDEW5XYdDenZ82VDcVzX3XxPgV4byC2XcKC6bM87fEu6RDsNLn6tFH8Ko599D5Limdhx",
  "key8": "2v8Xc3FYFvip9wvVR1s6ZMGK5cQ8LhKbw5Uj3FUkbciqpi9Zy3xFu6WZaC4fWfbMJH9xkn1oSLvvayCH56iLUtJg",
  "key9": "5AwyNwVj4faaf1NMbe4QvvnecJN1dayacggsUQRhgncd6N3dd75Y9HChma4LwVHSqRdxmZ8Dsz3zq6NYJkyKpvG1",
  "key10": "4EjEmUkBCWNJ2b2uAMVuBBvjNgzcF1Fka6CBRgSFTPWfKKocEmXYb728n1fciCJnojbXR8jnaF1tun16J9uEBdyY",
  "key11": "5WdDBT7f1yt5FKAY37f91dMh7Ew3Z5XSPsymtUqUVQ2qvShE6kds4ropUumxfCzFFygX53fAz5tLpd98xWDspLFj",
  "key12": "2ikrwPmpUYJV6AMPa71jzCzwL8T1PvjJYB9jCgj7YgFp6WbZNKCpLSSzkudVNR88KwcoH6pgFCXYT4HbZzPbsM8f",
  "key13": "2Gy3xxxrut5y4nG4HPkgrvUks9HVo65n8w1axBCDqyDbwZ9g1Bvc1pUxeAjGqNACMZDTy36gr6rYx7MJjLaGGNKS",
  "key14": "GNUfM3G8kd5q8EDkXNP9pUVDV4yXypNGrjUdpnA8iL9eA1y12BXNMPpL2D7WAUf7vkEYscfMo4QiE82j7NqrX2P",
  "key15": "CBt2EKTeNjBsZ45ydDMnEdV9Paj3gLh3qC24P9xH6p8NGAvmLSDuWxok3whiLJK19EwXab7vNPr8ooe5k4MDLdf",
  "key16": "49xgdKLYKb7qjP5bEWRdWVr7Rz7LxvvjuToHeeT4j8427ehMcwujqyKwAC1u9tSqxFkDZaJFvbCVZoChXub31ggi",
  "key17": "3rQP589FyTH1bqTkSrxVBrZPnGoDv2junttAv9n3RKLDzzaxJNhwixJSY4WwgHWnnsewGy3A9oToWLcbaq7Q93U1",
  "key18": "3NFBNKvQVrfpaEC3oGAbg2w9dJHKUs2bLTnkGo3UiMG6VFpT1JYzBr3xXgGcHT7WYd1sKWBZZtjfGBxxKaUZLvvW",
  "key19": "5TebRUU2QkpC9MXZQvciSmS2D8WHenX81i8dboqEUySYXYBWYAQMKiJCaGkzcoACtKcj5KBB5FUAYvRHDuaqfwDT",
  "key20": "5pptATZCNPq19xrmwSJWDbCoT7GsdsB2RoWJKRmyfQvgAuERc5zCkQafZuS5h8spaUPzFaRWDANWHD2NQTtuuBTP",
  "key21": "5MGde5Sn4i48ErtNUGe4KYpJPAPV6r4JWeAs8xvS21tWfXLc4cAXY3Xy5vFqCcZAW6wwwP63b4fcMGa3zpcuEV9o",
  "key22": "65XjLcxAkiS6QC8XqFwLH3snRdCwkmVDJXxZvcu4yau3c4wiQ5xUqbBEVRHSKeX6wnhMHreB9HjZ4Fhh6hiMvYKW",
  "key23": "5yHBp7sdbANDZz5zRpfBJcq1wyvSZacD43DBWAa8ZHWm6oeFGFF7ubwNsfUXkZMpyVUBz2PnVWnb6FHPJwf91FBv",
  "key24": "5WPa9KG5Baf2oUUbhdYu8hFpcgbuLyMo6YRDRhgk8YXqKkg8noDxc1D985P7PP4o4Pww9vVHQhtWMSu8pipQokJk",
  "key25": "4tmRb91PfZtTRfUfXs6ypr5mSdTiYgJdoeVFvDmt1rPQAcdLryJ6ENFy7YW4ZdUREpFCSFnzshUyZWoABAPrZJvJ",
  "key26": "35xZcpf6ojNKHmzEkqruTBBMXZzHwjv9SacZmbK7EavTj6tePtX8FKoYALBEsDbtfcRBE4LK48JBYDiCJTFXWU5L",
  "key27": "2JpG3tpJTZtvm87U9S27SfFKgBxoqEqny5LT2hjYAEEfL9aXdF4tnNDxZpm43V6E9EmAvckCVcmqFxkibtSdfF6m"
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
