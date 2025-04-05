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
    "3vyXMSvRpbHohGeXNTz6c7yjGxwGktmaCrhjEXd9jjooQdJ6tJHJAPgLQcXyaBNCm3eDxNW5rUFXp2VQ2xXwGEcw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n13L2pc1D9EZaouhqa9URmscNM2YWzLbcjijyMtCFAyn9SRrMsQqcX7s6h3TzGxcCLCmjBYQmzrFRuNFGGbYemx",
  "key1": "52No8vftaywmZRDdXBQsfb9BrmNRnUaVR2d2HXcPGED5p5SANednAz5SQDcyg6D9fbAJaSjESA7NExeSWwzMUhET",
  "key2": "3BavntaguRDyNZUXF4DrbhRHyJDLL3er9LCRP1cjNJrL1CMJNjUwiAnZLpGrSNBRKWWHRqx91JWCYrRva9Sm6rZA",
  "key3": "5T1iVQWD2egAHN6hDxUczF1QV9QsgWtbnpVW7TNpAbSErNVVTE45wsYway9mGUKpSm6sPa97oewTPmqYvRzERTC4",
  "key4": "4Q2wFPM8A2fCesfLCEnbLaTcuqwhPBnEDU95FYMr8DGozPFTcy2WooYdqkJZsB6sWYiemgDR584H9RKY1SAgGAQz",
  "key5": "2E4HGzmZyT3Uog2BjikadkRNGFFDeA5AqN9gcsYkCm4Ap2YBiRfAG325E5T8VcfFDQXWxyG3ow7wpvptQ4sP9a8v",
  "key6": "486uoaaZMgRru8XPFAfh87T46KJbzBZvyYdDAJQXRe7hoaUJjy9rnpjzFev2JYo85ajK9Fj5AsY2Jz7fogoLkuXE",
  "key7": "3eBmjzhqCqHbT5VUFzJvQvM8t4izKpFaZYGgavQVVBmnUn73htiGsyLVtFVL6SHtXNFVmRVRHUBAJAjRqGrxCkLn",
  "key8": "2JFmvojExmmrW3awsauGJpxLdHkmaeAYHpfaZohqAKxkM7fSdcLtDRk29R3mW1eaAxx6Kpz7WisGivVD3mjTt18i",
  "key9": "4fnWLeywVguMoD6WvXkpfbg9BcY8sH6gCiVKTAYBNTrtYBdVrj1yFnYRmS5R1BfPrdMZBtbLRp4xWReW7bLuwhUj",
  "key10": "2kkVf6QNLyriqwAePfPjo5RW43qLomKUUiC64UhqvS6jBbmpgQY3gTHXUdh4avMa4abqsD85jDHraDqqsBgfhpVY",
  "key11": "2DVdWe3X19F2XGovWN1oaQjXZPiSmsTKS4cM1dQD3YWo42XwqKpx3K3G1YScvuyFuKtRNK8sjqkYWAR5gBDWHzTT",
  "key12": "5aQmhBq42KauSEiM1UPQPvBC8a6u1SrGDTtYniZDqxx6ibb3bybD3BmRPcCqYn5CRM34KByG25RfVMVvgGQ3ZsWA",
  "key13": "4vUq9mAprTeVXePcSVakLXokHrnBtnaScoxQscaH8t9RA9ybMPFw78zSKhpqg8EkUfhHqDB2nuxsFTZadwy7zGd4",
  "key14": "2ZeX3LmMyx86iQJhxvuTEHLdiu57JVRR2bjmGJ243bZgfDLzy4PwJirSZs67mtZuGBXPaxsAKe9PERRJcsQ4k76j",
  "key15": "5LnZLtcFSedwrNyQyN1wVGeyMkjPq8tkbuGm7GiKnAkAofnBiBHNH8r2ErAjc7sawkkp3hYCqJwWQLKMjpnfdvUi",
  "key16": "8kzcXpJTYg7TgCck3PDoz611LBPKeSzjrRJ2AgevPFFQuCk3YoV44ysghYVZ1Mh5oM3Rn1WpYazApuBPLoi9SjA",
  "key17": "2yKKKojqnYWK6hmgnjtzojZhiDsKPDRMMPSExw5mBEZ6USRPj52zdA2Yh3j5HSVLmsJ7VqWECRHxU3mXdtndsEn4",
  "key18": "3QfEZNERRkr4mHFnkVyQDnzwf9oToYZnuYs3756YKbrrpw14s1QAhGBLe6dQiEycY3yC6ZCi45gTy1BwJupW4mp",
  "key19": "5KenE1iUBj5xVmxXiXJnfPBNmLGSWFadtKzn58mJumX17jdqzJRK4udwLKMNp7D3jx5Sb7tcQBJZX6Z6PKxAdehv",
  "key20": "2Q9sswEkdN1mnmd8P93xCfomGr4TFNbxXQiTKqQPsmV4SnbQM1CxnHRuBWiZYbXAEykVJ56wA38Gxy1xQvycqJtU",
  "key21": "3kwSWeG31iMchVi53rwrWF8F35yWNsjinDiomC2czidaG6D2bckkNaXWi7R5JeAtiVNAfdj621sFUL4zW2iFCfev",
  "key22": "5FqAf9iNN2PjvDjkKRPZ8xTrZuP86r5YxZyss2PXpGTtXAEhR7EFr4jDb6dTb5GpqruwpDbQvx9qyffALFQM5yEj",
  "key23": "io5JajLTz3U6iYrbfiiNWtCBngAbiEZ9eoznV1Uzx6S8zi9JWG1iYUEWsn2729TXScFdMxEGkAKZJ8XSyQ48Cyc",
  "key24": "hyPKt1Tg91vpM7iShBBjop8EyPM55Pwt2zSKQsQDswektecGaVwepjB9N4YAN9tP8ASzFsQF7qTGhiAFcryeRNf"
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
