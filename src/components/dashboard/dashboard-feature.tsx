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
    "43twKnYTdkXSetxyN7WcPo4XEotFvmiFrSZ4CS8472i9CjPr6NgFDmxQkuGcAqFyuGftwDLuXtdMKFnMeBHWhhe5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w5o9yPf8Y94SVvVxL4YbLp53pajdY2yo9cfvPZegos7tK1zMDGnA1WQTsQAPx7azZNNYitDyU69xyVhnU2fbDXW",
  "key1": "qLcG5N8CKso9rBtGKWr42SwqmQUyogKA9F9hLh52nzb2ptc1fBzrXdXo9JYRxcLjJGb5UdxP9eEsaUwDrKMAkZL",
  "key2": "42nyAg5uEDhVsUCeQCYMN2nco2ggWJMocZ6ZFsAVK7ir1Eqp81VtCp8ZykwmZQicgjwvHsvuMr7s3bHW2kfeat8U",
  "key3": "ZxLSqMwSrhnb2gg9pg2ig7LcetGHJCeQKGeQMo3GhxLGzuxoouNf8tGAio6XPdpFNz5UtzBYdjSLc7Nw1quk2iw",
  "key4": "33urGcuG9UhqMBeYAPM39kVkpGUiS2GfRjLhB4yPwmPjaFtBQ9KrsKGXp71xGCWorQsnCZz423GnniFeVV6P3rmc",
  "key5": "3EbFPJytXYQpJb8hgQreyvaJ6ZvenCuBYx6VvCsn4CAFpaWVzth6B8wd8qWRPAyxmJKqHzdroRqCNa8nGfWB1hUz",
  "key6": "4j9rASLtiaCujDRSaLvYRWL8eA5Dmf5ifTYHy17ur5awBwrxaM2mAtSDhUxxMoKYupFpu98gwpJfArHFPstdjzP9",
  "key7": "27R4bNXGSryDPWshtaRaqyMdEtJqXqqbYENoGmk4WGjtxu74YgSNivT4FMNXPyBKuWNV6b6PHmuDZnwsiex5z59r",
  "key8": "4DFyJenNgPR9hfZQxMLQr8soVd6fqUYjRpfj65KafEP76Q4xTfVs2YBjS4dAgzgUkDrvzmqA6FM4JGhWssuM3J7w",
  "key9": "viwoGtzw42gQZvH88oYMANmMWNnt1FUdfLNRTadkVtTVscoSX9CcEtYpGjJC1ytpWmadZga3aUk5K5VYcfmprSc",
  "key10": "3g7SoVAHT5Pfxth74LokbUxppfTiFU7rBE3DMEc3aTBHAYgDCRu1V59LJ1Jibw2X1emRdd4nx9uAjGioGJ96FX6n",
  "key11": "2kRbdLopK8X2EaAgUhGVNqmQJ5QpQeTw6DMbxmfFtTBqy2rBnn9imkJUm9BQRpmemfqRANXhEy7ewkx1atv3ETGz",
  "key12": "2AN9FLBLA3C8n3oL3GjUGCnyysxVQmv2YdG5atSMwP2gAqZfSk95sSAtGpG9SuznBneHgGZLdm8BL6NDMPdX6xr2",
  "key13": "39mpviFRQDQ7ALX7cYVf4epTnVpawyEDHz4oQ75xhUpoPN3u7nKXzD5j2ar5kybAk23yhjYC7Ht4sv68qcGzcLC9",
  "key14": "4SjDEWTjWWFfr46HstE6jjz65i9mUGuBnPMTw1PNYhzG9Wmh2vq5PjEwiUmZKc8SmboArzMHwR8kDGXTkvahsDsJ",
  "key15": "4A6p9GgkhAi96YvEakFaF29XEpTgnrWLrXy66Ryh7N96sCn42PJw77F5Yi5DufWnnjuCA19PihzfC4yrb1RSjFqu",
  "key16": "3XJ7cqXuh93xhDyALddpDHiU1svJ42c1dnq8ksywfmFHp2jKhijDUhqc3Xgm91aguY4tvT61KYaxwNsFST5cb8is",
  "key17": "2AL4hPBHtLp8abTZDmVcDRnCuwYM5govcK1puep3RaGbNzdpiGzgmBkHYn1nTq1hDMjRG9L6u6np66brdtSURPU6",
  "key18": "5bwRKi6sonecxPiU1o1UrsqfRrRi1zJrtYbogqVv1aDXhjzPvSNCyHsoNQN2GRyZYV8azQCU1EkgMrLNyRMgGvwt",
  "key19": "2MAk6devVfrz8SQ8EEd2aV9R5C1Kxby1EWXLqB6kz6wU7inuTFZ1SGKG2znwxqwogaM3w46sUmSkDbgPcwzuf5yk",
  "key20": "3ymwEcxqqodeaQFNwgbyy8RNo1HLbEPpyKLNeTVUnCJrXz9QSPpoSV1yJd49WfHNsJE46FcsPcLFqdTHhjhP6HkR",
  "key21": "5UH3VNbyp7bBdWSRijBf8nB43izWNecnQHMSbo18jQ1bxDU6Z644VJFJMbaP7qBx5t773gMevMVc5irNyL8T5rLP",
  "key22": "5C2gvZzyc7YNSLqSWVU6i22XR2iqDP3x4F5JNx6UH5DF8WEKmRD5mc1a4dytYCXH55dstkioFa4smvDRkdbJDWw1",
  "key23": "5TnyXEhNSdAEKu7W3sJ1CYPALX1aRVzcxr1rot42Dj4UAdzfhMPEQHS84MCNMgMUArcTS8Y4cJwDEXz7vxKp5kaD",
  "key24": "3CJPR7s7ygYVykjt3R18akjYjjmpGUhqYvg2rPkgZ8ta2hJnNrVF8SiFntkFKqoZw4JPwouoiE6Sb1gGa4eF8wJN"
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
