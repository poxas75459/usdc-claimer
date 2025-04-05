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
    "2TFiATQWRiSAD8atgu6pyYqX6ra7aWNJa1kQVoCVTAy1EZmnCSHZQy8hpPEN1uRXHAYaG8geRLdSQcSn4jmW6d1p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FXN5u2fTxnvaA69NGkoJiJvmwjCJj3ypFDU2iERGujZZg1TifCwaUQRGJZ7PchttsUjZ4fvaTqTbjZstqoiWBq1",
  "key1": "32EGk8afFAAm1kgJcDSw6xYMh59zJiqoNMoYiiL3Kii9Q86Zau2ZhVBfgthBai1N3iDt6sxF2yXqWEYuRb1S1XNQ",
  "key2": "32h4eJZaftAk9XyBMueuok5ZfQndCJuKsbEx55f7NzGjPZhTV9qkG5yHybBjEgAsih1aBxhpohvMi881ZBXSzRb",
  "key3": "4etvGyQxEKHfKx38fvNHw51YvFbN1Q84H6oE5AxuSEZfXEtYriWv39EGz36s6EjpxWxmStGSTAHfX2PcR9WMELfE",
  "key4": "39RNmaf5eLoT5DVzzwqTckAP4drju9k9oUkhgx72uwum7axB89uR7MfwoiZ3Zujwa2ED3T5SB9unKd5nZcHNbmns",
  "key5": "2YaPKYVdJxwrMqMZnDoSfyqKPUBjTMzJcZgP94q2ZAZs4Rqkyuo4shVZor1EHFMb5XZkWMLxL6WKhGTDDpfarjBN",
  "key6": "fxfqXgjTjkc2x4Ahs1vE1u5rsNgNofaSPitdSasMnRu2Z2ahAx6hQCs1uFvgau9QPonkejj4qP3XfsHanhuFgPD",
  "key7": "65twAf5JXVqo4V5rtsPK9S4ZHx9ZFcDwZ24GiBxm3eyWjSfWY61df3ess2G6DxaBretJqwAGTH9ezDJkZCfhVQzV",
  "key8": "5Vm3SkhD16UbcwP2ww8GywVMmY95RNzuET7X4WpCFjNvGTCUJD4J6FhexLZTMe9s5442RTgeQyLZguLx3Pqed1sc",
  "key9": "39xuNuRbQDNnZ3fy5L8EdQvLynkiXuxd3AGWqMKdaB6mYjrrJkqWRg359fzsS7mykAjpr5KhNSGXBc15seqmMhhr",
  "key10": "DmDUzFTMxeVnqBGZosqvW9gn3qq2XkG8FqXRPboJ7N34TY3njNtR9dRnGyNthFL6PDvGwfftGaLT2pops1rjRPP",
  "key11": "5baWm4dSJW7q7FU3WHNorhZz4WYT5yzt1cDNu8rT3MFkXfYqXwtvJyeKGYA3RWHpxb8mpbZpHDfYZXuZJRVCmYTQ",
  "key12": "5zMvJCwbSYAuPVmWMEDMR58eXQZ8Zvrk33AzR5sNiBpq83mspwLoQRg22aUAc8fS5zAcbWBg5mg4AACHDxyfkV1n",
  "key13": "4HbLckQ9KmLZxnct4139z9BSGSHhZSxjnWt8xjJzkW57EAFdEbRS4xau6yUxj6EMVdQHn8dXHFWg87kEvfYMmRTs",
  "key14": "3jyMo9ThashfkDMyqiNt28hHfdeiUUaVMYgjkZJNLdVgpfNPtyrX4s9bD1s8MT3dWZ8vapnnsQEMeSVH7aBMaVtT",
  "key15": "4k5uJx4YAt7jJvGLHdK22TuxKa74PEYmrvBdmz3rMxjqYMdTZKb7bhbFLz4jzJwkSXGzNvbvFkzfP2fDZ4EHbKYe",
  "key16": "2TewpUnmDjsxkfx3easdFvx1RzbYSFGRcM4q8pKiKhV63Ng19oJH7tLQPShcctEeKyJXCfTEYPbjeiv54kucTqqv",
  "key17": "3pn5sCcN1TuTaNm87arPkjGQVqEj3AigkXrQNLVMJtkd9uCpDfJEbDCULU9whxQ3UWt7agqwRkVmV3WCCVnXMGZ8",
  "key18": "2njwsccGwdXaiuBeq4kjXQABJemZia2e9VSbjtQuxLV8jWiwVqVM2St51k4bebJHLcJQYumggYqNd7K48DwEd7iu",
  "key19": "4detjn9vzah9e3ksQjzDsvAy8SQ5g8Ki4yA7AV6mVBKgHqYW9MQgPmwbQjQkM1653Xy3d6jR8iVzzqwmeTfF9Q8a",
  "key20": "2Ptpnw5XmGUHG3bZvxB2cxmbDHwgtgH6eG9vXGeXVdxxoCfK7z6KR263fXqRv4xtvpK8chiqvSe4jVmSk4Z5tVsr",
  "key21": "5xPDYJWwbZM73bi6797PZVmLUGqG6t6DPsQC4U2JP3i6ZqNXeecF4j8AyjV8odyofK7r28ZHWKz6ujzEC7JrNTFX",
  "key22": "4gME2tmYAS1kPmSn35UQREq2BfM7tQQLnsecUJ27D46cm48pzeD8q6AB5NTXkTtoTtKW2ngSKC3EJXDoZpAzHQbB",
  "key23": "2JPgeASfy9Jjbcq9dNrtWUdD7rumAxTARGyNH8QZbKDnTdDfGPMcM1tF3oQ3U2pDYJZ8MNDzyc6567yWyAkf1bK3",
  "key24": "4daUARMAMDDg4bPWcnoZM6AKhGQ6bquPtTjg1HiSKioXEAaBF3SBNjonv6Tbzxie73JKkqg6UNh4Lq4DMBnvn5DQ",
  "key25": "2GyWBo24qnd3JDz8uemRE6B9zbgENtDoBXrxiciFCGtQcYzQgdD6Z2911KDUbCpsS1bnYhnk9N7rvHgdPEVLDtyV",
  "key26": "3hEcBzkWVYkSGetchUBbS2P1ttt7UovsbQ6VLSLHhvz2DJB3YMFqKNitZ6D51j6X6kkKR3rcWPCkUdX9eJm497nx",
  "key27": "4GwPdkobwXzJidWcGTGq3iAVpyi4ce4VsyxWRYSZRTwLGPk7ceMN6vtQG9vBr4nrFHaPv5C7QiZARNNz9PfMGxcE",
  "key28": "4K7txvanDoYRLPVxkApqZAaqNxbvBdyda2oXbMTxvn3TRTzbjA4x4wmYaqWvYVB79dVXtPnhrGnnw6KHVcqwvj8X"
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
