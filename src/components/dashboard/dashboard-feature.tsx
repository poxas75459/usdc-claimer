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
    "2SM1M76MxAHs6VwaJ9ufMza2ExGeoxD39EPmisAaAPVGHyKJjNBab7amu1ZU7iMdBHiSeGLhcNtB1KaG23Jw2era"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KiDYhjCo7o17zh4LDcLdniBsTGNrqPox5P425KnPPvEZAGe3u7pfWFYMhp9TcXtPsLWjPpBWFj8chFA5SK3Qdg8",
  "key1": "3hynGmVB9hochaXLiHsSqJ8WQrFAxbvt5stVpgDEA4mFKN9PkQoNWXUe6qJ9qznjFbcNEecX15LFRz3kdYMMLbZL",
  "key2": "5fLoC6kcrUJbWh8WeeDZBWiRpf4ywifzd3PUUMizwQr7oEK2XWzUKzNwciZcCpgbVT1GpyajExBJwPwR7umCcF2w",
  "key3": "3Nd9udfFUDGzhMcqkP5hUfGQV4jC2PsBbMG9xpQzA3t4eU3gHt62wnUMy12XSWfWz61EHq5r2AifuxoLmYkweKRx",
  "key4": "35W6x7YonCMTi7Nn2TpDqhypL5TgrbJL82VmbtwGfFwnmGAwgAFeKeuYt6j1UFm7x8A4aT2RqeHDzSSGuvRWPnuT",
  "key5": "2uBAdFuSvqx5PTffSRAm3opvvNjqafyxVCTtc7T8P5Tvk64Ng542JP5mbRD6fYM1rHQQrCnpmtwfapvxDxxzeu5N",
  "key6": "4U2eT2GnGigUJd2K4esc8ykpzZ82EcdnZGN7AXYFambKQXiL13ZDL899BdEDvYZjU2eEgnPsoQEJ1Zk2J1KC9aQy",
  "key7": "2AoiBJWrEuA7jojKcYknAJXjo1Zk1gknjueJ3pWmWcchgkcCo8kHuNA3Sckzsqg3vsGyA2oi1msHx5doLn8NZQrT",
  "key8": "37WjpEdDzASTsYiY1CbsAxg9HucBbj3FQPYsrRqk3NXgW7ByAZhtPEyizM6aCUVcucCWtRy1azawAdoxFnZHygd4",
  "key9": "3ngNVusVt9JQDR9Et2KMs8SdcieZ3aGgxXevAG8nQrP8Dppb5BZsRasHnCuD99zqb4wn6qFSCvTxxyS8Ndyp65r",
  "key10": "32rjzFeY1A2oQXNefoz9ftURcxfYpRwaa7b2EczTU3m6LBewBtBUEtmWzaF1e7NjdNCFj9gJNxmtgnd9Upvo7ard",
  "key11": "4UNdChXSCqr3Pw6zz3MKbkNZofqMzR5rGgf51LX89KLesbmvk3e9F9MMwjTcbvTwJRxhT7GdChouhyn1wcp1DKU9",
  "key12": "2WEF1SzJtfFEWWsnaxE4MMDPduQAuFAsTf9p3AM1iUcQ3E7LorwmMuixE9AfBnwWw389PmxSViXfGrjU8GYpkSEw",
  "key13": "4DZNfSxrjspcrTN1oYnRo6wQYWEpVoE2qq4RUspgXb5KGjNCswUXafWUe7eU3gKNX5SNYyoPeMVqFjj2VzPCEB1z",
  "key14": "5xmakA4a5UexcLGT7B7MWfcWpFs74jo7Fo5KSPANvG3QLudDF7y6ZHBrW1MZDoSgVncQk5HGJgHKCudsTmvnPj2U",
  "key15": "4zNjJL425nu3YxY4KSEtNcCK3RHZiQZdCkxSTYF8nrwsLFyq82Fop8RNFnXz2jJVRg32vY4S4anPnVGZgircCcd",
  "key16": "5QuBEqVm4PqVNq6PeuvNEq547b8vCuYspPjoTaQCczF4jkfmTtY5SNJ3hQGoJ7r4h1rz1AkD6toR8VihMN8pZa3c",
  "key17": "56SWJBzFSDUYXuihr1soAJqTLQtvSzYXZw5sbiJtxJJmdfQX7jZ4W6xpxa7RYrA6NUGuozrau5Bj12UK7Tb47Cpj",
  "key18": "3cVMt11gYMYetMtDiK3uapASGLHuJPPt5V3cH8jBqosHxHuiG8DkvJjVTDwryRVu88AueuGMamVHU3tZw5WFLBbk",
  "key19": "5V4sKUAZehTX8sM1CaUdKdfAdWpSZHikYehrtJvwdhuDT9C8gZnCKt4de4AvBPm5JFxc2b5GzDD6ULJN4ZwvRxP8",
  "key20": "2xbXTfhkBVxbyyfUfc4kE7zEhN8W3bPyF37S8MA6akoMozBtyYs2ksiaueRuFVDkz5e9wDiEAfNPhbrXNRhyrLDN",
  "key21": "5J7NqQL5EGFWeenEtuHvnqrDT6rzwWmWuhxfqgov4ZgTFFPoQ2TfCqAMUvryJYpZAFf1qW6A5iqmpJ9qm3ZfPrGf",
  "key22": "2sfi8h95YQ7anGVXYogdmcEx3gPaNyNJ4Fe7hdfwTEjXqBzjkq7hP5JXD7u5C7QRpZCtNBJ1cWpZssTcLrGLGc3U",
  "key23": "4h4N8Qo5tx9JRgmERvy9o11SmKdDhv5cbFwM1tbsG6ZoZ9wpfuXKgkQRbVF6VxCyfwbp4esGovorcHUZhUECTihv",
  "key24": "AMrYwaBTjDQndhRGwjY2vcXiAMZ3Cefs5XGQ8puZVHzJqd4amveo51338Qcz7zpeyWPwDBphqig22UCLyGD5RuU",
  "key25": "3UQHUmrgpwaYeMhjrnxfNTXQ1zaWtNTqSyGtCerkV8M2KMyfgkyDf6v1N4hFccF4BJ6k5BiLtPqPiN47pTcrXriZ",
  "key26": "24XNPD2Kt4dDrjXxKcrbQbCYyXJAmJvEhSzyULhrzuxFc78NRBih32ue2xVEP6FoQbb1p8hAFGQFBcYNSvSoVAoj",
  "key27": "41Eb16aEvg7mEH3W76ARhyBR3x5gCrCk8TGC4Rx3YvdcuAHYTvq3LHWSVH9G2u8vfMWvKqDk7HTbmpupYkVNv1YY",
  "key28": "2JM1UCFhpRiqQEsdgME37PJnSJTz3iwc4wQL1eLK39Um8EfLT2YT3yGcyrNb7z2kwtwyYiafsiveZd3J8HxDWCSi"
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
