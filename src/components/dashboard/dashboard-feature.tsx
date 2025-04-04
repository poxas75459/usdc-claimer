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
    "5YqanjuWtso3R4uPfGZj3cBnskJjzD8fpgSrk9SjjwefCaD6xUeQWTj8b9em7qwNnEuNrhc8QLyBNoNARb73o6cr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DpSGnv7sU2ZJXMCeoxvEnh8q8eyY713Uq55eegn3DUVSopRG9ho1DhWdybD92bzG5VavnAQHGxWK1r3Ausd5pF1",
  "key1": "42hcJp4Hphnw7ekD72M4sCEYYtJCs8abXLHymvDsi2smiuQboMJfodfVXjoEfkm4gz3zPs7msk8eVwqeKacP5bco",
  "key2": "36yRfQnnq9fxoCSWx5qewz8tJRZtuWqVPTUcBxxNr7y764MGyUXwadbkqyhNnF6RduJSx6vvT6rJm8qzCxVGDp6p",
  "key3": "4cVX4zEEXNq7JxCqNevtyXoUKvcd4dQ8NShrFB4cQ7fTNk6sZDQ1odM6bwbuUk8wL77s47vgF9g7cV69ryyotqXU",
  "key4": "VSKMidBZo3R9bZKs2msQ5b6L4TMN27uGbdiMrkorCTgkz1hpL1s3NK9DZRnN9VXWRhRUT2s1PY7CyT4wUxdJmw3",
  "key5": "V7vNgn6352xh6f3UucvMV4M9CxHPKd8kWYfR2rMPwfjCM4bkhkBThCozysddhqbD7nSTzb1QbzqGcsrYn5St2w1",
  "key6": "NYSEMAnRsfjhSBJKL3ibfbbng7xYY8jaMAae9RDX82sqAVJecAvKp76WhPKkiMiwGTGtvDQHdvKViYf6dAHhf2r",
  "key7": "5rETzbZoFFutLLsKtBrrXB7KzeD8xARAqjAnEK57f6miURV58QNh4PXbhB2G1Pk1rHMPLCmit3s1jQpN2cb8qtoR",
  "key8": "5fjqCKoHkcNb8V25By4PAzkES16awoc4SxztpSvSPJG3tonnk1RfAibeweUDy8SG1H6jpd8iLMZULGeXcS54NZcS",
  "key9": "3E3FUS6ARq4AfKTv6dZtAFh4bnT39ZR9kSkYY17BaQLSzbGaFDdA51BXTRwLejoQQH5CdbgsNCMFmx91eNv7E3CY",
  "key10": "5TfuX5WD4pca8HZfiDiBTmB2x9d7zQ9VU6BGybCviEUevkrgDKeNdSAYo65Wnrrh2MyE1AdBUcyvLrtTd9dNAHtn",
  "key11": "24uDc6eip31vDLkpyE8wDXv5kizkge7KYRmQB19y7RmwsvteNa9HcZMx5p1Exy8cX8bGtsyAKmpc7g3hHk5PwAq1",
  "key12": "3zEDC4LhvhcgHM33dwab8QoqGa3FB7PNQvzF55TtepEErMK31BL25V3rDCAhcRhcdYqqDCKbGfkHGpQ1bpe3jbaZ",
  "key13": "2SgfzW5LMtVYN6P73xjgBd9gE1ckfzjXrzJXNqgV2716utXez5t9Mgb5ReVSQz52TWepoPgyW5q21FyXPLXfD4L1",
  "key14": "vVvz5z6ZMAZqnEhv28uJvdgre1Gees8NyRKf8Xnjm3Np4ivQ9BV16TcKEHSZaGpFFx73nTucAnskLZL82pLgCQG",
  "key15": "CSsZGsE2vUsAivitYdYEwGmSB7unenp39d2Qt8jicEY6KqjTbauKyr2cyrkXNYMeettgMdb97CoUKyt5mvasBpY",
  "key16": "29G9omyMr5kr6VUthCd7zqTLrQPTZQNN54KxGw1piDYL24ti9wtCMxCGmCUwYZ82rbokLq3JmWKmo8fS2X9Td4bx",
  "key17": "5FdLt3S7vDPWTvtv4rCpEke8aEEwTqMLEqoDL3ULq4XDJFhQ8FCC4skNkVMgzcMwo4vUxFUiqLuT6U7pnk3RqbJw",
  "key18": "67Y6kzTnxXiypSb7DNmZrtfJn565mZNzkAj9GvivqEuVR15zKKGg7PM7hwmNjYk9gC4ZRGnqe6HLjZbwNSe5AAKU",
  "key19": "2bJe7maKxnDnrxpuVJNgb3Emigct7e6pYSwuCBYtaTBHFA2PHC1veaMtM7z1EQXwH3Ed4YFzbd6vB66ZkA29FHTT",
  "key20": "5fPHU7xw57kkzhHrFTqAhicMqnTePCuzdnMmpVzF4voURUXqothggPANGzmkBhCyDwW5fY5nSzXX764SE2eHnzh9",
  "key21": "5E1LTeYquzYcfKKijaKxGEE6rZeXhCeQXtWpxkYUSqPcukQkG1hDssFqBYGL714LfRw5T179ULRZtDgPNbMDXUE6",
  "key22": "5SdKrHtbKDcg4FkTRcKrvK1KNu9w5obh6Znm5cRsDsY4fsgxp1TjkHGVCVf4vJhsUx3jcNzV8Yy1hH6gheuZMuK",
  "key23": "2ddLdxjpmWsJ3vKzftYn7PqeEVfu1CPCYgRCQwCGAHe6oB4TsTiNtFYUbe6UAj7nPNTzwiiZT3S1cYSCHLnS7KML",
  "key24": "2RsdMCo2hxzj5Ni8mMmpqxFfY46b21RKEgpcdXVTXhuGs3ckjTL8t4ANJmLEiBCvvFsLxtoeiKPG3KbGEdbYiRed",
  "key25": "3AV1UyvZ9rRBPvWEixegZXgdt9cSaCttBXdoVuebFxgFroMuApP28qZe8VZqx1ChfKCiyLJAKYg7rUdQzQS1jP8F"
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
