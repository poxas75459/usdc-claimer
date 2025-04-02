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
    "27nCMicmGG993ndoithzbMQYHWhoV4ZKZM9Pg8bdfyM2WgHcp9sr89EKWi3hZUay5bMnCj3VRJu9BXXVYYtHd9yg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HWvyQBLspNc9hQ1ZmgSWM8KkmaoqurPyZTnw9KtZKRCEieEf1AKUZvQCWwv2B7mb8ZVuQVxBztWcynAtWt2qFb3",
  "key1": "3CS9Ww2w2WgLExbYAJr8WC5temHbPmZ4STLGJSWEZHzNmf3B6E9mFkiRAbgaDWAeKmFYonWa9Q5kzRhVzbkeCkiU",
  "key2": "3cYq1AApUpCyrZ9NBw7o5etUYNafgvqrUJJJQBFYaTBAuRQupoAeVkzTSNruY15fNqayiviBLX1Z8QwBCMPqv4S9",
  "key3": "2TaWJshmqd5tfv3taT3B8i18jv5dUDLPjuUrwg3jNDsVwMWtxKRf2qQy27BQ2CwLfBqqjAB8AaY2nWiaHTiVg4Eo",
  "key4": "4Tu4cBM86XuWwipeVjzzBvc3mH7xhyvxT7uPxtsAer2T8ZGy5f7zK5sZi7SR4qyci7xSmfFVCvTyn1FGD5zBXLpj",
  "key5": "5YT2G5RFriHEgQfPb72P4uPAjYJURABLiDNdWUKtiFdRUii4ienmW8tf4mcfnur5BCEe3i3wBZVw1X7pAA6Ws91i",
  "key6": "5Gh93BKWRrQyKo3q8bpQg33Bfx72AFCiwUXPVn76ZUH1UahAbeYPx12trw9HYWaw3Q1RBe7BcBoVFNxJ3gj23NBf",
  "key7": "2V8evpiisVvXNZm4ztohtNAyUWKzo2AVg46RJbJn5nJFjRKyPqFGpKPKgfH7ZLjn3qmGCKLVpjriU6Zbp5k1puu8",
  "key8": "36jYnBCubF913YAkPerWVhHcGzD1BFwZEjTNS2ivQ5tWKRewdsYVDZHixa5runAUwrzqh2dQbRCSHtwjiVDboNFd",
  "key9": "3dRadRLRJ6gKTvuXcFPmoVA64r1Y8aQeoNfN4qAd8AGiPwteS54obTfvtVTzodLJ2z3soXGzUhxaGGYnRjE1XTWv",
  "key10": "57gNb5NyUiVufNuQiwY3pTjwxCNLkW4SEgvNRwxsGeNR5E7BtUjSSCN4mjLNhSHtvp2TTAKivRJoBf4QBtnEwVb7",
  "key11": "2qd64d5rdg9pDMjtHsZgPvkxiomA6oWPafbJb5VPfepf3dYWVM23ahQqNqnJ11sakvJFtpNXEXM99W8HcsUPYCrd",
  "key12": "c3ZChuSm9hAbPN9mf9X35c4rwbNQJeKuzyD9BjL4Wbi15tJ4ejGN6pyghesP5JD7f55qeux1duW3fHQbwLwu3L7",
  "key13": "JtSqAxkNYJfCwFNVntn7UjnhuS5Z7KfZmGsThmjye3cxuEvZC75394YzRpXcuG6grXHCUGH2NJSYuqcdWULkGTf",
  "key14": "yDDd9TooB9NxrTbFrSWKwEKy33BZk8v5koBrBeViMKDVgNnmZEN7KwKCEwgBArES8B3v7547VJVC8v9PNSEU59R",
  "key15": "2qYYZMUGMshm9YWKpexxRRDoGQUSChQwnzQ2Sf3LNk9Cq8AYE8nkm2RaXBuCM3mYZZTAGdgFK2XZi1hZixA9DZrc",
  "key16": "thn8VN1D4YoP7Gc6mtL7BK7EjcAoU5hf6DK8AUJexq5MZv1fX1e9wmBTL7n8uEG7VDTGumCCz8zgRMC9q2kyj87",
  "key17": "49wJyUXFsLRhBDLuhTb1B4v7BDJ7QZ9tMizXEVsiKVYAS5gams1PNMHdUVDbAChwt222LH43LUM387pUFxvQZJty",
  "key18": "2cnf8fqZc1KZL5pBPz5bZCqHt6zVJjdtH9GWpkBWJbofcgXAaya6aviSeYo5eAEYZQitcF91YeaGbo9Rp4REVRXi",
  "key19": "288wM5g8BFHFhmj4Mffe5pepiTv8okZLtTiN5DcPiMukuEFTT9E5x9TXHSeQPNgjBMkVviU69w2Py3kQ39tR82oE",
  "key20": "2UvLGPk5yk9JmbDgqnVFFJCuXgJLBikBDHmUJWGnve6h63p8GG7C3rH6D9HG2LUxfCJqr9dfMkaCgihvDbA1T5sc",
  "key21": "3aBjiJZF8ozjZx9As4h9YAgnBequ9bQkhQ4Jg2JCyZQVUzyKXNdJQe6TrTm2393NKeLM1fDVHXMuXmWjkq3p8XCh",
  "key22": "nRzctFHHkk3RTKr4amwFGR7teTUbas5sr1GM2kNJt499P3eR4wXCS4jPZzkmrHt5W4A5eRveNNuouzRzadJdDoo",
  "key23": "3mFn9GJxurvnH7ZKKvZCywc4HPNzbpdxvmPVxDwzkUoFgWkHj3Vj4nqDtBuHjS8wBEqk2zYDj85zLV1J9K3dk7QN",
  "key24": "3qmex37Adb7UHkpp8tkME39bes6st6sTULfE9XzWyj17vYvGuJpnTtKihXANUyZ9MVt88dpEzWykosUNVN9PPWtL",
  "key25": "2qVUmcittLo64yWY66fCCeavgViZJXh782wiuxdNiJeWJwrUQRAoNXdvwdMcw2jCqfitqvT8mXXhvsjJkZLP6taX",
  "key26": "5gxYByann9UC3ynY7pK3ncxcjJczYKy1gBmGUvCqZQwymVAST7t3Yd2td8RWVZtYWGc75AcpnnGJMJwr8A3jC3sB",
  "key27": "2EWk5WNwK5MC6YLAzApTatTSUi7VtetzdsY3goc2eHajUFjm2NBoW13aV5MpgNZGLUDV8VHQagQj4iEpmocR7PRb",
  "key28": "5F1jH87wn5WeZgr4b7y2QCwDo4ariCNsAZz8WevZthDP8g3agaPM7eqLr3TkuVqauHRP4S1UMuWgkDN7kK6wvvVW",
  "key29": "3u6eGyK9Y1eyxDszySpsA52pCh7YGhr1PBk6mvFQJqdk71mrCePzRb6kUAuCW1wCeexC5Fuiv17cD6KxFeTmf8be",
  "key30": "61woGHJDgLZGLEAuu5yBxsv1LXYaVJVKxTtxFrSya6TkUWauTtz1Pw3XAj7Hb8qtHVUVU5WHcRiHcdB5Kazv5NoT"
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
