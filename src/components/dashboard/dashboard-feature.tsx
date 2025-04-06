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
    "29cKAKfwVP6N3Mp2EEAYzkqaDoFVhhaHtEdCGHTVytZ2YHeMvqyChWTSfLdFn3STHrDQLHAP9KWcLpc2UjAHzkcG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ntsqw6hnYUBzwrJyXw3di5zeQhgpEeEv3FTgoLuLiLPJpdEyWLwHi6H3g5b1aRnyQ29LvPDvuZ2gv4rAkp9JmKb",
  "key1": "4D69azkqUgWUwnPNSZbKRBcQThVSAfND8UZ8sXTvNd3q2nm2KgfXXqEfBBHsNmNLpDdP4yAiXB5mJifygf6BqW9s",
  "key2": "3P7T3PPFgYNKr4iQU7r2wQWfbzLvvJGQC9TwGQYsBxc8qvUWsZkJjn29vLAAybRvjzVczWh1VY2zhBVgosR5QSHq",
  "key3": "qA7uJpjC9F1etWSwmivYPfDRUqhFEtedsLFPUq6Bcm7DbPf4dAL1WtusG8xuPdWuJ7QgvaKVbFGFRthicEkQmJG",
  "key4": "uiWP1W7LT4FiSEDqRXAeEC5oaufGyeYcWpQb4tYTJePEPyBof4dmDdhqktuWXaZXdzaT7hyJUmBHkCZw1YL59qL",
  "key5": "2aPUKrJ5L6kYg6CsWn2j14UemFN6DUKtuSU3aSXFfHP4M9L7cVLcbK4FwqdBXCu8i7rGKoFQwQS4owsbBpNRxeVi",
  "key6": "5NNew931PaNpnCdVNeNAtSvrfjdpfBSH2F1g29EDbabcgumKBseerwnAsKKKsnXy9auW9d4hWS2XDR2dz6QjcPYc",
  "key7": "4ka3r9LsHfRLuG2evDnP2NtNNmCQuFZeLfo9HePitkPgModY4s3hNPw64f6WP4tHTCu3mn2sL6GTU2GqiXqBcDd4",
  "key8": "2GQ6YmTJDDQQJpZEqmqiCGdQYyqo1pGxAca2FPSMZAnhmQG7c8K1EcArrvCHV1PozEporeQoQSMWWc4nfYxwJcnb",
  "key9": "2DviNWBvVWFwMQsjQrmEoxcv2rkmvj71D89ye7LH8Uerma8AHMq3MJ3ovayHjXXw41Y2E4NuQfpnPJ8N3KNB5qBv",
  "key10": "2KvukeNu2tgxSuSkJDhq7PyLhdfSQfd4rD7afw48Q7t8TyVKEAUHVk3NPXAW7Bkn1jcWHRC4i7RvdQibifxtwaDJ",
  "key11": "4EHGPdb1VpdyHhcKsM7qRrexuQrmy1hxw1ciUuKu2sHAUibqAytZb9u9WPykz4htg2k3ZADTN2vVetLJb8ihEpa4",
  "key12": "3Dq9KmUCQN4CcXFqLR2wioPiMDv4VjHrqqKh2U4EfE1AFCZn3zKzqoQHDR4uYoKcNHiDPsY8NpMQ8xebUmeXs8o9",
  "key13": "3rtboswWcPzoifu8vtnHFPSu2CXx7WwHi3F2j6YyXLLiSKWVqT7W1N2Qdhd87XxWKhWYSEx7qYDLZFHDDwDc1KzR",
  "key14": "2SC8AqkSTKWVrmWYks4Li6eKsAaR6eyoAyzRkZKbdiRaUvodUzYNSMBdSYqhtPvdTR3jpMtco5UVRvVkDzCnpJqY",
  "key15": "g7STEEeejo57J8C4BVB9nc9epYxZ3XFNSEED9x6GafbfVocxuaE8VK5vAGnMbNcsFQ212JLhUF6feqcdh5ibVBe",
  "key16": "5uoyD7ywHwv5woAa8H2EZnYmLguWisuNMH4z94anbQSkBvcD4CmdRwsNLnBKXsBZRw5fYQ4tjeCWekEZD2eEDfZY",
  "key17": "3PuvzzJbACkNVm3VQMu6YHASH5ZMqPPuny2av2BdVM4YBp2pcjNfwRebD9TRuKqJgFu2CqPpLi1seBQHh3uNVSGL",
  "key18": "2mx5FVtb9REPJnbjkjPY66XsGCftcayJxuo2dLt5P4mBtx3VGXG9Znhq4VheWbAFPGK656TxLeChtfm8BZv4y9PJ",
  "key19": "GEPXYq4Xk66UeXyF2UmzqsmdWSPo5QcMRnnQJ7qaAXqfMf3PiDcApr6GMT5Gs9iu4wSdWW2T5wjcagsx9LiML18",
  "key20": "5s4X7kfLpSMQTCcp8a7Ndg3UD3bbUUSeruZxiBRqw9t2HiXAEkVHpiw3mQNSSeb2zf7fXK8f51yBPt7fCYo9cJAb",
  "key21": "5nAt8D1XM3dt3aUoKwUUL5FUQDcfmqACM7ZeYphGMi3v9PCkXjHFrTWHJPiLENpRTJ56ZYDWjsWrmCHoiz7XDu8V",
  "key22": "3rVR8sU3wR57R9tmdR4TJz7seJNQz4peV89DShhJQW8R7izVr3wkhz4vpHG3KJKWb4GECKC9MSqnMjSWAPykQqhg",
  "key23": "37VZHTrMZmQLQF1GvjvRghYZBMCEoLCZQfxtnFvfWUUNfG1XJ4CxwocATqf8QdPTAg7nY89S3NSuvvnayAsFxRWQ",
  "key24": "3JDUSri9MwfMDfvQKVPN1FnBsVfUSMHuRTNkNSP79GQ1p5NjsEnyMoBe5X6uKKCUEmL4HtidtN9wgwXbZGr6v7Dk"
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
