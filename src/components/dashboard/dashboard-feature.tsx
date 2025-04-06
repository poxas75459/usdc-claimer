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
    "3DkpjiFWWADbp1njnZXutpVmGJaGgbotz4RXbu1gnaDUxKi2msFFmY65w1NKEGMCexidg6NpC3vzoX64hDDR1vAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25MXsqcAHrf46Ky2oaXg8uYx2FVPNsC2UbnyTvGd8iBwXsTQM5wnssoUhqjJbTAUhojTFVDbBstrrQGyh5hbNXZZ",
  "key1": "63zztAGPTMeJs56jfk7c2nDZZqNnfxDBn3XhKb7TKNN4AQWefyPCQYCbF4vGfw13LXxSRXTmTCqLRnu2xoVwpt9d",
  "key2": "2eMeBK3GHasZWihDxZQdph9Y3qQTxFoZMWcs2gDH3RRP6BZXQLMYZYGn6NxU6Zf64xrstBNotgbdCZ5Pjntk1zpA",
  "key3": "2BjVW1bgWtgU7J91D2yws2uCHJWz8ZVvR5zG3bGSyQ3ESddSFHUXqufEyeW6aNqqReW4GNptSspBQi2LD96uVkYh",
  "key4": "2jQXkdbYcr7g87RoqpJtFZPbWz6M8S3gvmA1rWpkWkdyNbCrReG7T1CE6dL5jewunveQ9aUPXzQ6PUAKCDZh6Jki",
  "key5": "5szgzuouRyuM97xg9CWxqvEeHSQCgKoHzXXeP37zG2fTTpgQi5Bhf46mrwfhLnV9Ap9YW2cBM4W3D97owQu2Xaeb",
  "key6": "2fQuWgoSDSBWdqLwDoj8gFzA3fxKvKjgu3p54P2d3aSToLPL5UcPUZznYbgXhXAPm9gu5N82vLLBoefFjbXB4ULL",
  "key7": "3KSmX6GmdtVa6dGeafea1fpvTBDpfm1CTy9vr8qVzeLHwm2gMqvHGA2bGVKpTtHbx6xmRm8bjwhGkhEo9q4efns7",
  "key8": "2MHMLXDSFnP4U5L27q2SaRC3vpUrEegzDw5hFaUUZUwpGStKVNr4czZR9vrMj6uCoyhP5StpJVyJaHHfg5vYTB6f",
  "key9": "3t41cWV8eDKsCMyPPPUZ2c7cfyFKQ6kQFLhpKJkhP6bRc4TRjPHy8tbyCMaGBD11tcpahbKp5EneBSYq6Dv5nAxk",
  "key10": "5tEHQxsQQWExQuMTYEDPzFq1hDFRw3g3WwiyZ8eEudk7N55wesDmP2uMPyu7TYWdt1Th9hqy6C6Jwo8yioQjVWoy",
  "key11": "3LxxUyqdBZFM6Kfsrko3jhnH6R3oaMUXhawoef2Nz56vfXrHBvg95YDyLC1Fhtqm6KUBZVbZjzdWw5cdrhuqN7Ca",
  "key12": "NFjoZq7P9QhzEikJ5FydM7q8oK8xDVWTpuJBf9ea7JMjMsr24KZ6MMkbwz9xCgTYkXx53junb6PKfXyCLNWp7xU",
  "key13": "4TEMkvTFWEdLGHou8XwY7xzMij3K8m5o3FQEr7bDyFRFfdwPg2VNQYtsBvprmUz5SEUSGxmhoR6Kb4Lak4hkHUL1",
  "key14": "t8jxNFSHYiY1Eq6hkc6pzSpNx7bHQiDU6fAMWf3pb9gfEcS9x1L9LUdC1WjRPJD7PzyWQqaytEBifcgNtgk9fJA",
  "key15": "2jWBGVEd3dyvn5iuwCFgNvcJ3vmYmyUpGa5QXEjbfNtQGFrdNWXZQBzUoupCas3VAcySqTqupTvHaf3hhomugpbd",
  "key16": "2FJmp8xEF5Dmc1gaiJ9nxgVZ6ThD8qdjaC2HTS3PsLVpoUhUzsaQKuoDQRtuthJoGbr1LSuQpvqk6Edgedsb2EHt",
  "key17": "3aRS8EgNXLaL9CzzRYBmajSB9S3PgtCRE3MHg51HpvBQnW6mZ2o2UmrPFAFgB4VP239yn9GmFvFyT7myNGx9CamF",
  "key18": "5jMHPBZZCW2AacnwV53DAz1n7mU57gZwbYCDbYpMho5rUHdvAYuoYFLNHN2vZwQc6XFSjrY78ktDWe2Jq4JLe5ix",
  "key19": "5PnnyL8s6nfS5ZyVNFua8qg2bkFJSUKpKyeiMwybdzv2hyPhJnokvXhw9DhfMU5t3aTwDBrtkfsCdU1a66Emq1Pd",
  "key20": "5pbYyLPqpJe59UAVdKPh3nSQ3os4dkymm2eS5ag3encsYy7KKD9vtCVdr1bNzC7tiksy1cQ5ccAq52s5QCtryjHh",
  "key21": "DsbJcQH31ferPR4tRhJGknW1fnqT3XVav6GCvznqKfsBqmjhm3M5WJ2EcU7UJ8N5aDtKcd2HSqLqGqMePxvLpjf",
  "key22": "2t483VMQqupUqhi5LAsUdNU4cAUfWtA7s8iKTUspmqgbYcasayZ1tH3DXSZmBXFqLv3yEVFH8VnNSRWhgzTF9V6y",
  "key23": "38GcZoUYBTr4bGBvTrkbg4erU6YVZNzjL6YtvXdYGPe1CLSMP3AAJmdGixhFe3od4jWgg7Jen1cb8oekT7ehKAUG",
  "key24": "5K4v86J6dNrAQNbb2c1AQ78DnSPLPCbehzFYb73sVRWcSuY7bMCWvafA9pKXmJiyudNQxX2PkkffkwuCoQwodZ1E"
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
