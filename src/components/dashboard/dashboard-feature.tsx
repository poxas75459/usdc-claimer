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
    "5vS57NAhD5eFNGozUKywcidoVQJ1qC9twZSzBSfhf19SNrzigBvDe8iUvQHhR7mEkBLLFFmNUZHpPMUgfrAbqfEf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sFQ1Kd6kPcpSMZK6jAxszeJkZoTtK2HyJHUFih5nZbygEwdLTw2w7N76YJ9VuWCwGZtPL8FV2YVEPAgW1Cmckw2",
  "key1": "2B3YdpDWot7UxgrUbSByqo1wbXCbupkp1vk7QzomyjzeWprwYzC26teBmdQPJMw3B9X8ucEpEkUUHMRYVgS1w7vU",
  "key2": "2biYPsxdVKADYQgtpr92EDzBbqqYmFUzo4hJ2sNQHvxiUYnSQ8HwWnrnQk4RXSKWiM8cSNqLZPzxuGPw5BmVf8nA",
  "key3": "2zwhokKpuAmj8JjUMZNDTWTX9K4Wvbdcjke1BUERzd4igQZnuitWEUiqrLPvX8NBfpM5rCLdmRahuoVG66KRmCmh",
  "key4": "4NTpUqdeP8wdJrcusyZMzxr7RNQe7FwWngj3TByJP3RXe2efUw9LS1kLdh5AbsfXmtbH66Xzf1VyeBYziscm628q",
  "key5": "4TtpnHQPFH6biGfnFgafLpgeWkDAjbdc2EpPT1dZmHr3GXiHX41cSviFiGGQ7MJrCWU6u6UGSWQc8z5tPjdCGo9r",
  "key6": "2hpF75GxHfL3W9fbwZqyEp94tmwHsDwYo47hVUqePSXXGu3hzfe9jBcPqgG9zzyD6fckGBM8wN7bwREv7t2UuchL",
  "key7": "4P86nBVctACgN1NsWt37DeUrXDwqMHagubuFfFsHej2wHdteUHXGsaN67w2MwvyhXrqrijcnZbQWpxjtSjCU5iH8",
  "key8": "2XA2zsCS1vnEw1rtxHYYxe34LZZUW6bNgR4s7ZtT19wPeLWDDCnCFBk34QxpSFMHsDwazApmccp9cZ1JERnpFUiM",
  "key9": "MQTXWdW1EehKkG8NdMqJt42rwuVUWRF7eiMgWUtqtRxyCsX1CuxfVV23Cu4gGLjVzJkCnDrz8n9oT6UrPphP3r7",
  "key10": "3VSpHVZGwiTJUtmqYL3mXW1uD6phjG52tP6j5GLCyepoKDYL3QwpJyoTbz7pAGJVYZnN4aaoVPWN3sMJ4SMP3Tx3",
  "key11": "5coZa8GpRXKCfKLST3uAtzx7zdKx7D2EAsUvhR1VEuNppd3bL2aJtTdhEZ56nJzzk551kVziRpR7dG3TPJmrJ2z6",
  "key12": "3gr7Un8ap2puDVcgCGMmhcLi3HDbyoATDzXmSS2jyHYFbFqi2hvaS5zgMLrzfRGNiWzHScb9qhMk5azkVXL2cx44",
  "key13": "43DY73MhK3Mkbgz1irBNLdj6Enp2n9awo63jF4LhfuVaBiDtXFJoEzAY4uTSX24gfRBW6k9UCVudPt5NqcYyKuHn",
  "key14": "2vnAvpCF7isioDVYbrojDagd2eCeWcyJKpDFY1XCwmrHDfyZrRFs1YxnRh6tyPNGGNns1KVcnDM99FhFzyUcWA4o",
  "key15": "45mDsLkp26ZSk8myr5Y9LmLVu3y5FZT7cmbWzjcvUM3dK6WgZEXhXp4hUPJr3Z8H618UTWwpt5nKit2wQWcma8uF",
  "key16": "3fp9juVdTYRqyHg87CrdQCo4LxNkDq23exh6zf1rqiyZMyUq58Ahhf5EdHQhVxwmnF6mRthKxzvmrDXSdBjfD41F",
  "key17": "2fzDjJiZPfciZ42axsAR34UZfi4rzghikyLzRfJfVyweAfCJfgprtYZkX5dbSFa33DXfGgvpXEq5JKgSApwRsfNx",
  "key18": "36dX4UFe9o8Akdht83MRBu5VuLTo9GBa1MJYHAXEj3ufW546jtNpPhNRiiMQUpFtZYGwtMwyiUuUPtETHiVND74p",
  "key19": "2upxNQJ41pXCXMj52saY8SBTo5jhCHwXsVx9Bi6LMAAzVHafkM6aTcBHNgYTpWa3v8FebJ4RRM1cozUgioCGWTtX",
  "key20": "3JXMNP9pBifikU3CLUnHgL7Y857ENuYw2PdPDGjtmHeU2A8Cr59B3wjLabUKeS9gVbV5VbKE7LA4DACTyHsn1Z2C",
  "key21": "3DgJYeFW1SBWo2cgNUJiWfQWiZ5vjHpo2eZ8aiP63o8Bak37bSDvWwwWjDTFJCGdzXS5C2KMzRNgrCUKaqD4sgiP",
  "key22": "4imoYZ7W2nsPvbZS9VsvHuwMtWJrV3UQoLsXBjeXtYLpL9Sf4mu8MuK7ixDccSLrv83rAH2f24X2zVFGn94M1Ytu",
  "key23": "28mbBxQosGh3X6jzJmaBCnBVH4U2A9DRRGTY5FETnvb1NkTeKveR6joiCowFFXWqXoRhgKk3B3393fjQedHD2Vk2",
  "key24": "287epuWYfRofpreAxSv1ykpUMEMvsMw3C8NtshYn1p35vFL9zt2cfUJbeUkcPJB7DAyevb3XNHnDnRVTCr26eVmb",
  "key25": "B33G85V3AUUmopfDdAQKJeWdAJyaYJe7XwvpMRaPYRaFxbJ2MEV3gsr3DVtxCCTMQyjdsjyNcoY3fcChes4F11Y",
  "key26": "4LVYLeWEUecRxMwi4dcZ7Q1pQBD1GDJ26jkYeL5AUaTMmU4QKXB4LEZQBGVqxgCk2UA78czxZ2zbUVTVPymFjep8",
  "key27": "LptM1RfVgPPCR1k2g4ikPb8PPA4BPZ21nrMN2q3bPZ63gjYc7MYghuxfhAMxsUJNMgYmzSc6i8mbhMaTsWBkUef",
  "key28": "3XMxrW7n51hARwW7LrUdeW5iLuk3AVqyxEmQfw7mhKyJYidmJDbe49ejA1HefkA4pMhpKWBfYtt1JmbMG3FUbVLs",
  "key29": "3fLL3pCmrR4xonbLK1szsRD5uuvUbq2fa91UVmNBGCd2W3fb8LxiXba8n6ggVpSx2v59JaSGN7h4T6TC1K9cwmYk",
  "key30": "46DpJVXYM9zh6k2kgPwmqkHET4CroULPR9FS1UcN5HWJG5Zpmy2xL5AG6gC4kdAjmS5NvK4BkWTtDa7GZJB2PwEz"
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
