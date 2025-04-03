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
    "1x1CQ9uVgBq919R7GUvnbGPutymtTtnmVDycwoJKQ3Q7MynoWRWn3Pjsbu43FfcKBA83aS8SqPacJSPDrMfa7V9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CdWQKy579rxJkL5239pGj5RJ8d9Uk1AKTEzqHZMhSzAQzC8FNY4AGVNdu2YbWPMyEhpAo1xrm3jZBCJ35FXrCps",
  "key1": "tGQvP22Aooq1x2yibruYWK7nGMXB2fTjZQmzbWw9ffNiQ4DcQKCLPeJT4xSNHX4DsbBdcGcFkt8paXTv8pJr2Ya",
  "key2": "2c75s8yEKVHjfJv6T8hmYf7QxPxt5qidfTQhT77gqHWkjsGpe6pQvve4teYWypLLMC1PDzPMyri6v9V4ZoFqMC45",
  "key3": "2Z2Jy17xpU7mG2UQgMxaZunqPb47gLsn9m2EF51WXwVYe7bJ1dRMVqH6kJRJSjoWL6TzX7FA1UgYpdfMyGQn3Yfr",
  "key4": "2L6EDuTqia5ex7gXdKi8bGi2iLUx7dLNJ53SoN5eCHKXrU9sD3Yps5swwC4mMDuqFwvAX6NG7eQ2FQ8awKY9VxmJ",
  "key5": "4B5xnpWGnbyYUJTTP6WmRc83VYruaeawitP3os2VwZx9MfHJ51qZF4tigb8WLcux2BquKPZx7haqv2Wck6hV5fS8",
  "key6": "2XnPWZDrNkeNGQyzixRvKQXNsm8bPgLLFphXbecCuz3ujErD7XG9zLAMT3g6DW2HUCVCJsnYswGRWSDhy2Di7Hjf",
  "key7": "4p8YhLy68HQt6Nin68s9jb9T9RwNmrqtavBVZghZDPRJzv9HtUTcvLiyv35n3GNSXSkhqnN4YPnfJCVbYDGMbESm",
  "key8": "2ZfmNq4XvJhsjgzmv2aQ3wajNqCRSnhN7edL6xv3LvyWUKw3zmZEd85ZFV6XLw68ko1g9NPqgk5MQiRZUw1RcfL8",
  "key9": "2JjmT4DPnQd1M3HwKtjfaLPRAnNzypSioheTc3uYpkB8Nvz9G35kTQ1SdkvAnDjqDeqqExMAeFzbXVRzBF2TWYW",
  "key10": "3sd9pL31Xe9h2vbb6o8gCisNsvx5MfvXJo5Kf2CvNoTJQhqc9Eqq8woA5sAVh2Mny1wXrGczVrUvjtE3KbUBR6Wf",
  "key11": "52cvQVoENBo8EkXT651wWKVS7N1XEe5ZVHor39w4Wj21WDmkrdYJUGNZ2fw3h8jFuzN1p3bDGetWkCEG1EiSrHBp",
  "key12": "3ps7GghGYZzSZZArAunSKwgFJMW5AkD6AVziZb5bLU6ssGCikyJWZnhiry4eNcFSxcVKGGPyBGEMmYK7L5LLRP4X",
  "key13": "vYNcLhf8FRZr5kLazfgupNJmwtrtgFH92fWRWPAFdfK6d4pfsUheKAcypNQY2FYCMaancdk9o5MgAUhzuNsc5Cx",
  "key14": "3kAUx32Z7N1AtH91v9p92MFNKj1HDXnmfHWHrcy9aHtZYNUjiLBNfLTbiA8GzAXL3dkykp9KGvwkJ7BfRoVZPpQL",
  "key15": "4aHap7YbQK1Gb2Um6No6QnwkKeBDaW8ZZFqU2fFkkxM5CYgudzkJCNCynXUpkT8rnkHrJehY4GTq8pM3i5QodFCj",
  "key16": "42kZmCrskg4nepauUvn2yWKAfjLWBzcMixSm5SFK3pFygcJMPron6RvMxQhfaRF1q8F7E8Yf7MDzVGcp6Ux8u2HD",
  "key17": "vGcC6LYYigWGuSLzsdEdq9mF3ySq3TF5RCg9rwEGrTA6EYMNdf82ojm6uASQTNqnBCNqVky3TBx5RgqmaMLR8xy",
  "key18": "5fU8u7Cdox9hvNHoLV8tWE6tDr3dZWgahKS1bUcZKWmvuZabyT2gPmsYpJ2ag7M6uonBYLxvXqSHGq7mFVJnz38p",
  "key19": "51jFxD7FVtgdi2Ez6CYgFyxunSxjc54fvEx8qDZ8woubwPnmBc7tp3M6MKDyagP8Y7vtNHWsLNh6BVAbk2YDKgVf",
  "key20": "5nnjB7QuNW7tNvmfzcQC5FcReN3EDx42mJYk4xF5zqy8rRp2Ra47PHmyyEXqLiNQpd7qkenMV6mh2UBCtdAR38Wb",
  "key21": "tpJTTNgAipQEe1t14DZVKxSH4Tn615yVt1zi53ya9TxqCPs3fUJ6bi1r85JwZimXcNYzmriTfvGMiL5nRJXgV43",
  "key22": "3UHP4oaZcsaCwpexyh3SvpJguX4ZyeasvsNrQiGzQRazuHHPiB68e2M1mP16MqUitpkfWN7Z1rQrFnugsf4mRRhW",
  "key23": "2XcZ5wgVDt2d2i5TYrhRBKKksyqcHFNPVs2Yv7G1JhsxkNZJYLeHYe11dH4FyysAb7XSeUEZ4pqiWdi9HBMjENMs",
  "key24": "uNYRYLVfWywVTdWxvdw5Hm2Qu8cvdmHZnCZHMBbXQCm1VMkFejszArMLsKSVKi2BYr8DHW8KXG438QYtDWyxgyH",
  "key25": "JUPuUkUhMpLYUMthFr7FWsLC7CshZZXWmWBQWVhaGakbnDFazUXzUiXKL4b1qoDKc5Ddzs4eKUUKc6ioFAo8Y8R",
  "key26": "5RrpMX6nc9HUkFW47a1kPfJNvFcXFHWtKwCbc7jH9ekXVL5CDUQvMR5z3wvHivEp6Ciw726X6KwQD5aw9hJZTHDf",
  "key27": "5AqULF75h3H5PsJYwoqfS6tHBx4WQW4qwTB6NWWZoHe1kKgk3YVMFHEfxkkqzpXvFLAZBst1Ue6CinwfXGyoXdxM",
  "key28": "122tPRn9ZWXUoaX9v66RDaF4v6RMMbnKJGUdJGFiQddDbQA6vbjSi4DJb9JaxwF7CegAvnBAH6m3t33v6dZK1SZS",
  "key29": "526KEqhne4kZ912kqjZ1cZDF1CxT4kJxFSTNdbm58pWihGBG3tnuZsKMSg3Ug7dKWvhY7EoEi1UpbLvaHJPFzBvP",
  "key30": "4FWhdeCstB2QiFdvrpMF164ZBES11nXM8QvnuFCZ3qwPYMim83gwq21o6aPMDmgL6NWczYv5uhSpNNh4eLifh6vu",
  "key31": "3SuVbE1UweRD5vhmjdWFV6CUA5axH8pm29mwp9otrTNtasN89GhTHwuDXX9BWB7QjEyRVcFaWeVwi9dPkMQLBKbo"
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
