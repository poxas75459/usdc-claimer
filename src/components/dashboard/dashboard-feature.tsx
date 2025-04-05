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
    "5VGXgA9ZRGgJ19tMV8zygnWUWUyQovzkJQJi9fozR3z1AcRfmx3VfSmfBT8e2no3KKqMjGxgQu2d3Pa5dBeCb8fi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34suU84fbVtsm8NN8biZoGPbvgD8R9rd1WyF9xo55SZghWhcDQEPKhk1ab7CgdGFVGhruz1qeR8KDKKSNpGueYQb",
  "key1": "2i34FnLyh9tfY8LSRhjkdN1xSJ7F2ccqJhFP256HcwZromPTmNZHwDBgnmSXbEhiK3pRTTiRPWT9piiuKhQnrtjq",
  "key2": "5GmUzn91YmSDyLnPEMGoH1hNvwDAg442BxyRsHA31QjuKLMx5Av81LnHTVYXmLtQF6UyhdkRYnHFz8sMZQhiYSR8",
  "key3": "4oBmTphCtps7RMpKo1ceXzUg8eNLTNgtd5aVVKsEPp5JDaFyUfUNxPbFXq52ogqjHy6oNwNuzyHKt3tE7ZKP4ukj",
  "key4": "3Y2SbepEBRXUuzBkYENwvyGb5AyAM5M9mSu3UcCuxNTS8GpaPhWSsxhoSDK8jB43MKvXXgBUjpEznZrpBxr8XARD",
  "key5": "55TBNvYnTFgKoMPtXnnUZbQpQK3RW4v7MGejST3zpTNYPgRXDWbGm4PBFRLacaH1qhWRR87kZ4oFcgoMRKybAayd",
  "key6": "3cVKJG4TdMfHVTUDfQPRgo9d9BdxhAc9qnS4SjtdLKKoX6cN3JQ2d6Nk6fMzt7q1WUPGf4uSfrayLycmo4nfDxK",
  "key7": "5rah4B9EhrhsBJaWkECtpTXjKbAw3FnkRsozos8NS3bGNh7Ds6YLX8XWHCDjmpXX3HE8zvTjSvbyuvJRxzvRLisq",
  "key8": "y5Yzvk7k33RFcKUspRQhnMKEn6pix58ezMPg2PxPN9SBxBmgcnyK3UFnXWjK5CwApDSx2eKWsyoLXiwR9bsX3W2",
  "key9": "2ZJeaPxirGHJe2wCLvB9XGv3zSYvfFsKm4mtQgXjVve3zzXHC6bQZdviAtkqFBU77VqiEcTZRYKKtrodcGweFf7c",
  "key10": "y9WkJdphoxN8rCYKLKfMjRNo9bY2wd4aKM4X8QVzchpBPJJnrfrXASn9d3PSg7eaGPA8APNm5yaLAo22UZwzR8j",
  "key11": "57eURX3yEcZvvBmYebvqFuj1Wig7HS9PzN318cCtacv4YcG1vpc4xxmDQ5L4imWjS7JQWKHe7Wpj6xJdXWgQgXua",
  "key12": "5zy2ePH5seyFwhmnBCpfhJKXdJWiexaEkThSSgignKVHudVVMBeQmUZh7nkAFAHRbfM4DKtNBPjeaFQLjUs3WRyj",
  "key13": "3FLv7D6xqKsgQBWv5ymwFEGmAo1jE4ZsZJn1tLM2y9Lh7gquT9n5912nV95ubAvA1RNRVwfQpWVCxFdsNbsBZzwa",
  "key14": "5ZYz6KPDgC2NyiK8t2T6YaRyBNXoqhNq44KYCQoD8c6gyTQb2C5zUQaaH4GwKiq6bWQ4xYMVfWnrUUmZJtj8diY6",
  "key15": "3EGqs9uQooRWNKyFZBSfdJnzpQ6tT9cwLevM7BVr6ToBQPbKSKFiKnPZT8K9oxemuijgNn63gURuaitzADYmhDj1",
  "key16": "2F9ryNTz2VGubxRVx4Vvp5WyHRGBWtP7qeQSDfPJsMxtw1x3P9GaDgxTnqAGzFbtkEbVK4mgQxvTCrv25NtBxCXd",
  "key17": "5NUb5AV1oZZ2NF7RAELLR9ZSY8sHPxxXPXBMzU9jwh5XY1humPtnpgdidu5D6ZkFdCcPZqdyMiFvK8vPKckDX5sB",
  "key18": "3CD7DMXXhJZUw6cYNTMfSVAFmBuXdh71tHktz1yTrM9f9GdjqmBRew8o8hGV6y6H8G3LFAxRW2SLofPmpxqN21qs",
  "key19": "3xzd9jdtnGabzqHT9KmFg1h7tAdEd6gphSfge7SkzLQDzL8XWEUAWuhGjprYSqkpAZvf9A76axERJSZ3k5tBsUJv",
  "key20": "3d4o36C1BTQNSQREavp6nEWdyNiddNKVLvwpyubs1NBxEh5aEy8vKdhnsSQ2UhXoo3DYNjFeYt57A1NT1CFcP3Zy",
  "key21": "2t8EMcnEVAmrTKsZbrZ58EMfQwpUXWJqqL2FsiaHSVy7dy3DLRJxB6Fu7pjcsQTAbSAGvNe8X595XiGAqUHhvLdu",
  "key22": "4qF43Bx2iPiYDhMdc8W8dvdiugtLDV81bo1Am2CPiATLqAGPyffWNdyz9M5KB8UzqaSd2si7oxAZ6TUNwKF3rKeA",
  "key23": "3kw4jp29ksxZahQC84cYGboLEBLqpWNU69rLh4dvA22Aspd1eXJciVL2nVfsRUGRTzQHQn7AFAN1eMpTSwvQ5Sy5",
  "key24": "3zKCt6yXJrww2Y9cdnGWEMA9kDrPStr2wAygk42BQ7T1eJFUABtZ9FzLnSHw2TCRMJqxpuQ87h8gJdGQ9kWuD9u7"
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
