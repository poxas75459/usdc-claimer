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
    "2C4kf1cCggpc768mnL3vJxCHbQA59EHwh8w77BVswYn1HeY4mtcQYzV7FQCizLuFarfjEG1WSdB7YeU4mKeDpmq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TU9sRm1HDjpYWxMWweogtcc9Rv5vg1gG7E64LyVRcWNZB5CUKtnCoxbYTo91zxevaEUZKs1yTXkgmZsVHniWay9",
  "key1": "RcEsWSXCLyGDxLjfzDpnvdu5XTKK2jz4Fs4JN8T1XcQG9Wt4ER4vrez6iA9YUgvHv85PrjcsNQaFyY9U5hpsfZU",
  "key2": "56DCxjhm8r2CaebCY41k1ppdzbiCU28RptRuG1b8xp5g68jcJwTnDadjyzY4SH8Ty8gu85SvCy83eM1NCBKM1pYG",
  "key3": "FRY43kyTWrWVPF55xktXwDVsmL3KdzSyvDNxvADzyiaYjY3q9tukFvecCgYbrFfTNouBjQhGAvaKumeuBeaep8t",
  "key4": "kY4DRwq6CpwE3pHnPtyCGFpoqA1Zawbubzyx3sPXuovPwggv3QiBgwrEmRAuzR6iEnqSqR9foAovZWRhECVp2Mf",
  "key5": "3PrVskgkhWHfB7oDd58rHGGbfMcjbpH2qM7Ji6wY7YdNBwctD6Vb11tYhtuLRGHV4NHCEcn2bvYfs4usputZvqXn",
  "key6": "c46SuAHPi26MNRBb5W5JkoLz6PAMNSd1x7uZdshkNLGU1ceVYCtoB91UbgPSbqxtZDXM1zbRZv9ZHRqAnTbm8gj",
  "key7": "3y4af1ZRBehwzTt7Zfo67MSWVZBSCZxcMGEp6UaXYkCRWvsgAQhb65xBpHYLHRYqPPTztLVnnVEhyThd8jfnFJ6G",
  "key8": "3MEQK28n3sYQsFpXAncAxP3EHFcqFrB3Hx8SGZ2Moww9RNFtfnSq8qkskTtBfaeJ9s2M5qiMzRxTPRUvuiz8rESa",
  "key9": "53fptb9qr4hYw6pHpcYrfxUQDJvqprQkkgTxVFo6q4zNL4xAyXNqC22jKjhzZHaJtj3BWCbXtsTr4G3zaRjLAi3h",
  "key10": "24Q6qtmA19dkuAora4kM9555AcuG3KAjhBwYq6a7e1oVYKA2tkAbNqMt1PE5fQKFqYt1taQTCfDW8PK3swgGBYEG",
  "key11": "4FwwkTF4CoTYTMDbC2VCUTswxH2ShxWMmfkYEjYkCHVq1Rmd78a8PFFLzpEH6hRXZgkZGZCYG1TqvtCYeAmeLcvu",
  "key12": "32qU8wCmYegZXyDdkDwkjbs9zAi9jhjYCmeQNZGgVE4rYzDNtjXr3tG2T2JqHyUpaUpR9c34iEhSs1Q6iny4h1qE",
  "key13": "3XZHRkCk5VKB2sHfDU7WwZZHQmCtEuRErRLTvLyzm9VfbSLPH8RAfF2eWaFB42aHoG6zXSmhdYfTbMdedLgu1SFS",
  "key14": "4XCzBkYCzPJN7GxkhdwQk5Uc8faLBGRqcPY7hJzc753upjo8mJTozP89Lu3N7KcrhFTkqMeYtD2Th8MSmM2v4JQf",
  "key15": "2LjTHpLLXzKNwfJpU2Tk1HwWJgfNYz2CURfe5jeEfMEkc6izotfwKWxZrQX1CwTcAHj7zc18YE2FQFpofuxtf51p",
  "key16": "MvKjYJX4JWpx32vPMUv1bveDjVL1JnW3ogrK9A3YVHKsoQivrYpDj44ERpTXaL7XcHCKwEAdMFKWAstmCeTzHbd",
  "key17": "4Cbaj89CZbf7NdCHWTMSr1Sr5UezeMBv3qHj5HbY2HJ23eT6QWn6yRtZodxQJ7eLAscYd7yqcN16ancCni9ef7DS",
  "key18": "3KZ2s9LS2VKTTtcD4H1tgmQUBvM6jB1Tp5rddTevuL56KLeqSrsqDJFFRvoZhkkjooc7xUPk9HnBJ4NugrnKzXCC",
  "key19": "3LQmsMbLyVSHyVJUguUd8xZzcw7onLbN6FeoaFFKdW2kxfa5Hg6CZL59aZ5zwXWguvNP6eTVMuJUKL6vrFiVPkxn",
  "key20": "dKKBWkxF4Q6yBWRo4xyGQ8c77PJD4suD9CxzZ4P7QEsJZwUKDPxos8fnbM6G9BKyYJsHqCXCjzW5ECV2wmfPRGw",
  "key21": "2TibWKcdrRY91sFLGoGGdwbGc8dhS3XKAvBuzk3GYYQQcQw4wSfU2BNueDiZ1G5255RjoaFDHRBV2s5hHDxCfVdk",
  "key22": "5ZUTsT4Ho7MNEWBfvkjetjVXwj7jPXsYsgptXjQRavXa5Z8pG7wPnGpJvL8i8wqpQTrb8fXrWASgvhcfoiofDahc",
  "key23": "29kMpXKHsq14GdyCcUTEY9ewhiwr7RGogcU8X7wKz4THVnU3FaFzdy3zqbbWsPyfiqEKSFwxr3TydcdmF3AAA7cA",
  "key24": "2XktPNyTXaDDzWLWei6aeMH1J18sZzVNANgzcY5C49SW2VmDctsE2nX9h8uzy5XeREMomSLgaYoBeZLumwEDE2hg",
  "key25": "3AfhRBtTaPVhGKtkEvnWkjuiNRcELdfFo39JWzoHBt5SrG8z8JnxQxEKCZssP7wD6umjaryA1SX3bSDhonkBMXD3",
  "key26": "UQgRb2t2gCob5yGLgH2PKJDNSbToJLoJMiXtV3SvLSYhCvQattnovpCn8ZNskjMQeKGuwYzNKS1YTcdVdCf3FnS",
  "key27": "22w4P7hn4qLSEHjQtaUnwwd8gy6ecd7ovc4vWVKYVsShhFg8tCvntnzm5eDvJwNw8E4pEhsZTtgfCiyUu4j5Jm5o",
  "key28": "7noDRVZZafVjiLAgtQpiXv6ZJuDSzaRuvTTHFKk34aSj4PS33Xj3ok5wmX5vQKxN4zvsGGadUZxsHGaE1K3ByW1",
  "key29": "kbAiPAP6QvgPT9Kd8F72WapM1zQRjonPVQ5NYMCCtwaZwy6fjPbrg4zhr7oYjzgWBeSG2VWPzEwkbhzDyEvq61v",
  "key30": "5a2fTvBcnxjMVWzmgZWAHRmzo287dYQZDmVVdiHte1JUqui4yGkPchc514qzpvCWm9KDU1RTBQcYFBVVJcp6QnXJ",
  "key31": "38bXyLozTd87vP7THS43zPtBgFrr9BQeWQTiRRJYDkyy4siWT7WaTXo7RFLUiEBUHo2AAb6jFU6NPuc8uqhLi56f",
  "key32": "5oNCS6idkASMVg2UcwNc9aoGiHtxRzspvf89eAzaBFbvWy23LzQ9NffQELkRXHMMPXbfmCgJeVcUwm4GXX743367"
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
