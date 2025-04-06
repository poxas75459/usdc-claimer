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
    "58s92zx3dL1hadFmLPXPjvgh6CkyHjJ2oE7z8jkRytHr68wrMC8iirGEDX18ZkmCo1D3LY7YcD48fKBquR24XSvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pv46qEtMzxanN1aC2jK8E683gBJRRuqxh1CUYp6VMqbbR3m5jhS6Gd5TB9nmVAzxiGHvA47L3EHoVPeeEfWgPk",
  "key1": "4tLYWy5ZdV1i8p415dW5ffeL6D1NXyPnbMSD2YcWb1EB5NLwzrBEnVbFxht8yxTMYWx9tRHc782gQM71HVorF76F",
  "key2": "44m76xeZWskXz4K9awUAog4UE5QcTr3nUqThb4vfdPtaZFK8m3Psg9kWc4DbMpnvYEQqN5624gusxRijvqXxuq6y",
  "key3": "2f8avkHpTCVUkuHV2t2joC588Z4CVEsntN97xURaHJBzx1RzfqZcNkgV77XbrpoSt8LpSUJLSSTXfi8qrAcELZ7Q",
  "key4": "34v9pbh1UiLq7YDUo7mDSQ8C46PySDxAxk8nTqXvmrfAPQpfx5NSkxWEvXvT6aR188KgrKqhycQxmXb1pwZqbWHi",
  "key5": "3zNQbypydsnevsgaH7KyuifnYEgAtV9E8BR2Sg87RKFD2Rr8VxXVVrXZzBFXJp759VXBFnDcnN2phEFmoUfvKVAu",
  "key6": "HfMFkULpFEc2hswXBnLVgeFyGkkfMZxemNvX3ZDZnLwCyV9Q1mWePaKikeVnHuKK94XxrqTooA25qS9Bs8DR8aa",
  "key7": "4UUcVcsTsDNXa8WFWgGtWgJvznLgXxRegDForijqnLpdkfgeJ6HQcNhtFVBMgZoJetW3DpKEHagnWkse359SKZVq",
  "key8": "2BumPQsckNP5NnTNroccaBsKAKEeyeaQyGEgvJrQp4MDyYaGyZ4iXACA4J6YGpWhmKxaEdyfRahETzWvrKQRwUDm",
  "key9": "5H913gjN1cU2HoX686eLsxsbHvf3e8UaJ9M1bPu3RD6qSPhoBym3sq9h852AaoDuMz5GKyRAuooDLe5AbdEmTDMi",
  "key10": "3SPsFGSAJeWHNgr1Pi8F4wZhiVBMmn76pJLs5Mx5XRVQx86n8K5ijp59SZUdE9a446CtNwVkhdpJgNQE6hQBKFjm",
  "key11": "3LKbouRAUV58Ut6AegFo6zBoGgc2jMKXHbpWnZjK1D2pnpjrPtzaj72ze6UGUMdsV1kLGC7zCW4VXZKSNogRSCrN",
  "key12": "38h4JSS1j6vG2rRdE74xNWpuqw6J1kXhGKTRxbSoHSAGV9XemKiegb3p2BBNzzgEph28NSPAit9jJpAA2dyAr2qp",
  "key13": "3Tg5C1sFwLaAtMoeKMftw8WZiLxkPgnJqSjUkA5YwSQJQS9CZXsvzbcAp8NXfZF8oKDp6YMCCXpVNh6EGXYsohF3",
  "key14": "4bJfEo1my5pDeW15XHbdFHpU8U9CatZDTuDJoGeR2CGx9hvQ2Ys21YfZjow6PLHHNVUmZThiFXAQissYyNeQYPGg",
  "key15": "39mTPR5E1cGAvKSfvRytgA9fQJY9XW16SK71YnpTvkddtj5NsWXamxcy5KV5RMaECjjfzUJMr9ri8XrJZBwEp4Go",
  "key16": "3ozVKk8fQfEcsX7ZtcnXZs9F97jLZym95os65dpraf4rEoPALoK1QZnGe2Dw6g3iuLbyNmpsEomuwwc8SftCT2b5",
  "key17": "5PC1XYiiEp4ggHcmaSGGE9a6YAAh7tGnmautRs7LPxwDc6GSafCpMuVXxykZgUfJeXKHt5VS8GpmakFRjrEKurh7",
  "key18": "5jPyvTJasuZqgBRdu5SfxBD7qNeB3BtfhptUqZF4qnidTCYsEdXEEfhFi72EniFxkMRwNRN4b6UXULYDi6P8JXTC",
  "key19": "5xuCb9mZNSqNEE3B1HdkdBayzzBUQ7VbZiC7DBu8DvpxhvPTf3z1ExJd7uJt7tC2sgndgdpaV7jtAyaT9jAvbaG8",
  "key20": "5sAnDS7etrJ7n8D433mRdvvPhaVeXidbU3uKWj9TLqKcHh91bxoZ6W1Tz6viH3PVs7vo6iosWKamLxcXF945MBXP",
  "key21": "vVMdszZqN9dDjA1U5y8CCy327iLrudAcQeWvEbHMAwntTNwPJ2DaV7eUHZr7Mb469bQeAaTWJ1WdU4LeK2b8q3j",
  "key22": "3Mu73cRdJs255zk8RVsGFvuLSKQPRamFb4AK3bW93ydEGGkWtDtK2vrCQ7As8LNiefmnXw6Dsr7LdHHTN3H7b5wS",
  "key23": "4UCSdnuPzgD9Bpe2embX4qc7mfaFQC2eFxHuv2RVJaEY5i6mZSRTp9YsQBWEyLayoGBbW8xSzESJxyCqZ29HHYgs",
  "key24": "4VKauJPTWQEqQgC4q2yuuWB7CBE8TpXvdYoYWRL9dQRKxrWqcxbYbd7bsffnPBmHMqCHmTtL2D5WfQpyDrKyNfEL"
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
