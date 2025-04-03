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
    "2kM1jaMpGPVJGWzscAV8sb9FrVkz8zA8AG8hwRSNqim3KMQTBsQKyFVSm64snZ2ntgNNU5BLgxYLyKFgWDioaTVM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xsvygBQKbEjsnkXubU1MRSGSb4bRj5FVSLQMcnL5M4PFD2JFgV6A44b9Hju7sRuigu1omEXZrG3zPUBq3tpF6yM",
  "key1": "DfHZXc83n99FvxTiWp4PXFfS8fVydWw6qddUuGrCdrDDodLcYkyGq82RAXxHQ3wXECT9zJMUX6EL4YcLkfRTN6m",
  "key2": "4jn6fm7bYMQi99gRWyPAxneqeTRJmVjrpbedKN27maTepwsyrbv24X9ynZvt2NE4JbhPgAAvSSwj1TRHwKCSj3qC",
  "key3": "4i7r1BQnaMygFNYPjp1s8DqSTYxTxaLHGxizH1HmspKh5vVwo8mcu8CooiZQXDG48ybsXDvWfVKpAeVD5tmvUQ9s",
  "key4": "61neFhpMo7sQEft49W8SJ3Jt6BinqF7WvEXacXaoMiGgjNNvAks848y2584fPoChcttvUQ9DN8CEnXLqJUhiYGza",
  "key5": "3b6qRNgEG37PULWcFUWuGrUoz1nSVtFsAYnDSaTcDWj9yCnLycggfZq7hTLDfuLPnfWPKjNndof9hBxCdTXBo4Ba",
  "key6": "9f2KZFCqNbrNrGPAK2UuCTWveijStnmQ3cQzCXWo21Ace5Aov4UESSnHYirrUQWXSY5FVU6AiyDrW9qDLRnDNWm",
  "key7": "2Cau5JEewvNDBkPf1X1g7xTALJ2vyy1Kixk8dZHmn2HtSKJM7CNMMGSJA7sjRb2FS6dgAWBkpToh8GxpgqvcckU3",
  "key8": "5yCoUFLQwd1FKuu1qPG3FH9XLSFXF7nHEtGm7iH39iect9DawpN9iTj1SaS1dmFT9Kupue8D2vry9YnJzoJoSxuA",
  "key9": "3UXUXf4wuA233KdveS4tdr6wX4MSaWr1kEdMukLQm5YejWM6sW2zPPUMgQYHtQNMQr3SENs7TvEJ63hypgkavpi",
  "key10": "4NsUyozVpPq8K2rDiGYsjwfvAkQasU3d1fbXKc2Z69uxTBqYvyU5aFYcAxmLopcCVjDFWFUrVa9vGHFCbZrmRtgU",
  "key11": "3M1KawmiTGSer2suyWYn6tYZD8CkMkA3zK9Z7Bzm861dFDry3JfTCU73v5goTa4bgGbiRqhz6hqz3k1Z3eM58EBo",
  "key12": "k97PfSABvf4ZAysDoAxMMqnCfECeRixn5ww48c4o2bo2bgmcTHpKAgEczBSEp1duy7QVYEG7Af2SqctV4nTzo1J",
  "key13": "2ShSPFR984tVgESCvfd4TTg4uJLJBaEcKCAaB8WVZor3oMAzFNnsj2RJUzMY8jMYPr5n8tuTbiLvzLKZCT5qDa2V",
  "key14": "5tR2jb3ung6aZHRph1F68DX2oT4sDJvbWfnmGfDMtoYX3SDD63PF26GsRMHLrJ7onckNaMA8sgZVmVmyKZ3asiWV",
  "key15": "5a1zaqi1jTNSaobuNuec2ysSj4riVyvTXKN4penNV8WvwSYgbTn3gx89pVi32cQatAkgkFAedVCTFh5bzkBcYuzp",
  "key16": "5yuUZrL2YU2NndAWzrJhSgF4ahobK68EGtovyFuPsjc3721jD5PChwZYuSqNdPJE6QhbJ3x1gVQWAnUbcJiDTwBh",
  "key17": "4izTkha3hZd8Z2nm4wCPGoHHLGkoxwb7WceZgzhJh8yXfbnHQzRM6Z2QsN816DYtDeT87ZzzhHAuoAbJW5F8ofHy",
  "key18": "5TGKEoBTQbiNKhJKP1suv3MDLJwHK7Kyx3oxwdf9k1m21MxUcTYK1oxjn454kdxg6Wyo1sDjvwpQg4W9B2kRUD5s",
  "key19": "4wpSyG5FeK5da3rACMudtkztgVNdT1wNA8iau6TAERr5QcgtEZbucvCo6QGJzDrXgGb8YRiSu7nc37bgEQymMUxY",
  "key20": "2t8mdE9kRbRKWKd5HWYUij5a64L732B6ZxVi2dex2fabVrAznJGeCm4dmacyVjFu9TFUxe7jb7DpKGUTirfHLCoM",
  "key21": "2YGfqcYUgnepCb1hnLmV6nWRSiKRMRWt6VHKgdvVxRmZsb4W4RNWZ3WkAWRg8zNCoC8EwPW4GNLisWVGkBDY8V7V",
  "key22": "4HeueHjtXKLYzWTP7U5LVKP8iSiPsQy831nAW9ALSb8N9RH5HZRfwRcBMTm9G5p5wJfHxXMtsyLxphFVvysk5N1i",
  "key23": "5RxByTBqbFucc9vDSz7okzWe4XJztENKbsTUyJvgJjWp8p5qwbgiz1m9ox6W1KCntToaRexvXJ7SjiJgApySSSq2",
  "key24": "5qGnzdLf2ppcx9UH1Rj2NPn2Dg2dRR62sfPePDgvCxNCJvo6AeiomqZbFFngfqksUWuqm5mFnwuSjTCcDzhFVkmL",
  "key25": "2BQ37JzCPh23g5EMNjEdCUgSGMXednCQVpVkXNFZPM4WTgb3Q2bFe5V7AojUopZSJR9WcNzz6TedHZ2XAwgGE3q4"
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
