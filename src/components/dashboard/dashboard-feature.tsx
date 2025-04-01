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
    "5vveq4WYeT385vw2StX4vPH8oV7YnrZah4j6NUYSRUAMpRR8isUAUNV2LpJug5EovMoimMC5X2NPH8NtpWa9PVUi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54bLeDmS48i3WTHMSqTinEZo34xWXWa5r9a1pirLwSnwJkFci4SfYTTcrxVZzivHcVvCPXHBYcgLe72thHm1fogs",
  "key1": "571wMprFopj4GUJZx6ZLjs7WwzpDnju5dBaZbXzwUek98Mvfz82i5z9xnr3orUsY9fAfagmxZXSkzYXXjNm19WSp",
  "key2": "5PiRhb8Toybfo2T4DBJrwxuau9HZf1bUCcWVCLnUkuTeeSB2VuVybCXWnr8oeHR6fVRTczBvPL1Kpp3pDbqhn6Hn",
  "key3": "53qrbrsNBbWYpjqoemv2aMRmcQ1C7A4spQEa3LcFHw9gbg2Po6baRDMbxby31MHB957FAfRjX4A434crgVzXTsjS",
  "key4": "44Z8KDfTD6ZaBSFbqrj5hQ9mk719iGkY4eA8wRBt1jpAZXSYEpPF1Vefgrg4K9j7V5EVe6JnmWL3EUUVYbjCza1Q",
  "key5": "2axEVA5JPcJq7sqZABoaAjgXinfsxL3PbfnwiDCecMen5TYhhPxWhqdEadQKKGbj5Jp7vpNr5LYaortJ7AxCkviC",
  "key6": "osWAHhJ6ydKBuETmGpRmFamYzMg6jdqeqtPHi6kV3zkpvZpaj16nFras5bMFv4Jd55nEfDZepJ3GUkjbiXexVr6",
  "key7": "4vPsoujhME8LxdpWCAEgTXtZrVzXi4tnGERV4PJjvDtcRNKCwvhCCvnEVTJ2dPCCpsBmsge76RjyJc3Z11KBHgog",
  "key8": "2YhQEoz6Qe2Cw2Mp8vfEYg9W8icYUmVku5WejPJodgibghg1bVezEck5tAZ91wPwpnWwVmSfxmAQC8hrKk8vwhqQ",
  "key9": "3EEx1D9bqsj6wMQBfhqdUNGajLyuQVw6u53ddRqzNdE3kMJXnGKVbQf2tYZ19hGrhGGmiEkr1bXjQbsosU2GVaKE",
  "key10": "35sYZPz5gjjqQr1q7gngSRE2gRBSZu5QH4J47EAP4mAJSqPuj87T6vHnEwfJYupU69MevX3TAv7Ref5u4y7aB67h",
  "key11": "WBCiGoMd5s3U9HNrZU7Hk2QuzGodUTZhjAyPrW4nAPCFDDCUbHf7qcd5VBT5qtAggvb5LNyraDA6cm6HiGhBEzN",
  "key12": "3ZSzZpMEcwTEEjnbhmETTvDctFSsw1yMAS6vA5xo6QRL4x2RQgxGo3jaxwTMNqgp6drjD1sY1Cb5N2S8by4P7JBS",
  "key13": "64N4wGkNMoP3HMuYngbJM9tBV2FP3WQMyjsffmeKNiNv7tu8WtfwyvjctKjLwhgR5WP962QwSeVmPpnZJ8CMJUKU",
  "key14": "5fp8KCz8nPWKEnjTdP9Nc3QrbYY4GjWfTfbQqmbmz5hn8Z3k5zLwSsRmrA5QgCQS84vT5gkk8eiE3WTQbnHSfRNw",
  "key15": "dAtpLUmEFvDvHYeGbuE3iG3aJEJtiat2G9hhgnFTficoyc64MQ5P4SiwrxuPBS2ERPpkQddLUPBwnjH8t36bHEm",
  "key16": "61TKyNageCA1EvaYEif3aTkTt9gQrCtg7zhdp4JUZruTLZsatAztjy3xpQULhDvWSuXuNn3QUaXwgGZeXNKHcTsF",
  "key17": "5STz9fY2hnc6b9Fc2FbTA6WnsZ9oW7uc1t491aEM58XCuUkDSBRG51LGzvuMCKGJoqmHFWrVMVSXjRKTnSt9xrrk",
  "key18": "2VnwaXpaQpaeQSmqxK48S4DNL7VcHBpeDFJsYXQBFfktihriwSvTh9hAjFFTXSTSU9L9f9EZjuEPbErxgM2aeE18",
  "key19": "2eexNgBWy9n6jRe5Wa89xQ8vmwPj4SS56jYrMK3BfxVjvBXswdN6bSd2jTah8dQz1BU7AJnxtv7vTCVdVCJhzLVc",
  "key20": "Bk3ijQGfGSKroAw8Vsxbc6mJdDTVj4eA2rx4joh7wv4koPFpEa52M7GonhNAFsWq5Atkh8oN2hNspviNEKKaDNY",
  "key21": "BUPcrHubXAHcNcBgdNoTaWcFkoLQqiwXeKWVAa4PsCWcoTfRjgAyB9TdWyH3RjwvDWE74PmwvXaXfMyvNAj4a4P",
  "key22": "oM36J5YiYom9oLK4X7wq99hauWsBNzXTbFXjkATsWU4f5EaHtYRG3bAfsyNA3VSFrYsqxFYLQyW4MVatZ6BkKAA",
  "key23": "5HeRea57bFEPUcd9FC8Ap1rwUG9Wou7b3a1BiANmWRnbrWeFArthGBkDuneaYBvqNoCpFBVA9t9khhPsSQnkX55W",
  "key24": "2PiYRMZcSY3QH8XQyrQQBANVe4v1eQbR7ZE2ph9hNsMwSLxsfECy4BQ8URbtq8Mui2we1sykHzduyQtTVHZjkiUK",
  "key25": "3UuAYXc3aMEz5p6wZejLkz7RQuTcRoKAf45rkNeoXNYjxy3XjKRgqDYFauC8wCKMcziNs92qfMvK8JBPcrnXbvcm",
  "key26": "4GHYQ1V8E1Qgw8xkqp6uZcCwqh8Fh5x4SougKnwrHTvn4CYB6G9DfFW2SmgN8fUFcqnLEjJUgdL9PGxx9J9do5LU"
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
