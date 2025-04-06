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
    "oMd1LdxoAX7rnBxQM1oNUF97CRhHBHJG4iRkuZ3aerCJUe4yZzQCC5ACHNNa4DTg2NBLvUPiP45k8dKozum78eX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32pQo5dfrfJhqNbqAoyuZGDKcQEDKGz7YmZxUxyrAiSmHbkmyaxR73aFumJSNNcmuMRyU91u6WcsxgzzBvvLuYrw",
  "key1": "2ZCNkT4cd3QehtVRRW2VgHTeLeVWMNAbKuT9vUhJu7eX5BH5X7EvbeN6iEnKEriPPLgLeeH1kUryGhejESANb6Tb",
  "key2": "rQyfSvWTCxuNNTBiE9Lhdh1faA6d49Jsozz5eLHaRry14mDNHsRok5cfS4KhjoYHxKReqmKynqeUFXbS7XFxcVJ",
  "key3": "4KhKLQSUj5F1VYs3qb43GFekNbrDfzy1NPfCD6n4U8zVn95aMQo7vr2bL4dTkv7FdFewhmpURjiZ8frj5i3CPu1z",
  "key4": "4yjKXAcyqEyHjmn9Dns3Ga4zjXcCayieeMD9iaNjD3YUyeCRELaFn13qNdEKZdq3jWjstUg13s5mYebEoA93eYNm",
  "key5": "4mdH8LBEqttdcQ9QJKXRmTsEb6ai7auVvxHxZeaFzbneX8gBgWygCh2CnQgUiVojjWYaodVDeHsQXnknk8jg7ST7",
  "key6": "3cACyvMjSGSDsvXGVTPaewwYCsA43SQ5o2XTvvemx7JyfcgE8fzhmjtPmG8McTqBA1Cv6dxP4jY6DRKxaphWQPjP",
  "key7": "45D8HgWTbtDU1vVBxrjQeN9nALc2SLjBu1dBLRnZ6rT1hRDGnKsepSYCsCtKREgMLvLyt4HnCQJfG9JjPAYsyvJ9",
  "key8": "4AxesMA4DTAEefhRpKTeJRvLeUMTHt3RdCj1XDaftWCecHNfy4Lgv48uk26wEM3DpqCU3RBzgqoD3RVzfbKfhes2",
  "key9": "4pfRJNsQ5vi5YTCiA25dbtxrFpDgKaDhwU9kj3QwJzJ7ThpXF6w6uJzioc87eHmZKERSZEeuxiSzxojAzoN5exsY",
  "key10": "2dktfGQ8qBu2YSUnheiHxC4AHg1tbrBkCXC5EXXCKLAAsZB8V1zcKGtmRJueozYQybHE8fbQXsAYLjRnLL4pNLz4",
  "key11": "4WRQxMon2FdAgL8MUi5baNqac5bZAmcmUKQ4r8PJLrPj6SAHg22kBz4sbzgVoMA99K2jDc7Q3C6dApPQNqgMsBJD",
  "key12": "JHF8WRDLCuNZuDi57wV8uZQB7hkUsoxoEpEAUSbEDV3477GoNMAazf9JudUKUzoe2F1nNERb4V8drGzNvDJE5iG",
  "key13": "4BZBUi26vGWYobd44JhNeEGyPQgMptxstivyoMDGVffs4VUXXQBa7wV2wz3HvLbBEra2YcZcTk4zx8ZuRBBfWod6",
  "key14": "2QTuhi7WBboqU5hCDa9zoUcphf3DxJNXYsdsu9kjTP2GbRsMN1ULiJkZ3wp7vo9pagomGNLgTWMJCkDD8MYhqtRQ",
  "key15": "5xCJVuTKKB1nhLNrKd7AZi7yXs699gLZeaXdA4imGmw87NNW6twu5X4iZDkvLEV1fqMgys4tWY7jLj24eVpr4W2S",
  "key16": "BqLYqGqtucQUA9EFAWoiKSN6oHt1MnA9LTSAjJfuHPSAQGCvjFeDAVeZc5Rdkv8SwQf83QuKuWzTw34vTMdsYNt",
  "key17": "3EJ5Rm1qNdb5unDzC1cVtKCvf2kx2BE6ce1AwiNq64CtQYeq8qwrXknLLTxXnjY6aNfSVRyFnYGLDGA2uNAMWLwi",
  "key18": "5T7e4X4MJh42Kq3vSCZt5vZJ9sZRw4pQGuPAxM1HQ5HrWcKFFTC8aPKgK7r8YdavuExJbGiDvF9UcpGH7LW1f6ar",
  "key19": "4Swboxydfw1ZKTGcxUGCdCc2fjHTRnwuUvf7osf5qge8PNLqK8eWuiCUuvo6pc284cQgFghB1K5Ynf79SPfqQvez",
  "key20": "ttzsR8b56xtV47K611WFawcJJVz46sQtDabwdgxGRwzcLYkMihwjx99bBzDRiVMTCR3D3Bf91naaKTcg1G1gAV6",
  "key21": "ScKjZKbBCAcpAVtuTTZcFnw2qBQBn14BNR4PHtt2GPPJAP4HmjqfWjxnhDrAsEjjbzoUDKHdghQz3XsNbcFLBym",
  "key22": "4CS2Qn8G9ZCsGH7hfYGtWchj8VmQ63UdJgaUWJt1AA9WVdDbYmBf7BgF4HcVWpoedKrdw9fdP7TPa6c4Bg2x8ha9",
  "key23": "5FuvoU1VJxWUWSx8kMCDkMQTjX191TDiS7zXbvLAQQurWVLBpLmXcYwgbxB6A58tTYiSZvDDTmi8EMsAxnpGFBUq",
  "key24": "5GQ4HEW8fnBGQjbBCPT7neLQiVgKtkrzsZfSQLvuhEjqjRyTACGrqCNbbkCjZQjuHY4xxcDb7zPKdPR3s9HusqiV",
  "key25": "49oVzGDYsAQGWbPr8NqCc6USNhAmUZEmdvYdxebEMcdwSzgaKEyiDDR4668jJaLjWXDyRabJsi6Dbw7SSyqRTevc"
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
