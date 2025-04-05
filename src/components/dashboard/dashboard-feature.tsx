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
    "YQoMnPEY8PoD2KSd972f3TGfa3E5uN9iaqXpXuKjqJpigBuswXer63ozp8o6stDVWWdhcKEaXTYYNntJSnEys9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51o7FrjxqXCxHFPeKyeMDakPEitMSqDv9Pbn6WDqNP7iktUf99yGZZcTRZt3sQJS4FeZhaWumGXHz8dHtHbryQTM",
  "key1": "35FyCx1mPueUwmC2zNjGqWSuBsNfBVPDm1ikKCFincbc1sfhjXq1wHQpvXQzYQKzS3opjgyBaUmEKZEPfCe53HQe",
  "key2": "5LTiCXCQThLc26p3FUiz9ieTvgdvWzcfAEHEUztsmRNAUptJftqpvreZY4a6D2puzcafqHwykvKeAHxz9DpUas5n",
  "key3": "56m1R4JV77CNrRksENzmQqovVpmkm68WUPJBqXkGRAgbWmmFAoz4HakztyUezAjsuzThM2td9WLeD6BayNz7NQFX",
  "key4": "5NqTwTRxua7FpUqVUG8WxfbJgJQeLVjHQ6bTSR3JgJpz2nus6k82DMsMqFQVVU9d6y1VUhKcFU3NQbgbFeJakYRW",
  "key5": "2Kbhi2mbZkNvNwAzruvLg6ioNRQeqsaaj1RkyPYQ5wpeERkmzkeyrXRV2S8qT3vYupi5kBzAsFH29P2hhAcwE1BY",
  "key6": "5L6tV71j2m6xd5b9TFvRAu7uoP7L3LqaVShqW8FKSk97xW6W4bH5cV7PVstoE6qHiKJ2b7waguC5dmecsLPSBQCw",
  "key7": "22m5VBD4XLftrSftf28nidoGs6qNeNFwqAETqSKe8tBWZRzQSQpBB3ppjadxxHU969cbZbUZvXgRi5jKsr3WfK95",
  "key8": "334k1h87wvd7aUtSzgfwST4pWc8jsiAgCGdwo9HeeH7uasWYs6D7jP1YtAyPMSSda44Nodi8eh79Qy7qdt2v7LTn",
  "key9": "Yp3zeYxDsQoPscdA5tCKXmabCXMxnVGoEhDr3UAJ612ydK3aNnfC796yJYnmryswQAGRn3sCpe8zdCXi7iE63Mx",
  "key10": "2z1UcXpZKG8oBCZCrkVDRdrzhUBpmKhY5Gf8k6yheZmm586FQEo8PFvjTy8wL6vxrdkYFAT1TpGYBz9cbzQRZ6nJ",
  "key11": "5aSwbCEGX1hX9wcR14qVewjDB9xW9HfW75GTSdE6mkpR1AWUL2wXLe2BttuzkQyukFt4p2BhVVVJDUgyoSV6QzU9",
  "key12": "5pWCYHa5MmVfHwoUUK5sQFy6Ym49FKg44rMy4qrrLFAQAspiM3tMP1PXK9g4c2Tq5hQD3QA2gAPT2kmz5eAotguY",
  "key13": "5niypegTGUYnA6FK3EBCiT714pV74PUvVmdq7hWHjgTfpER2bJby3RrGTezTNUywiXi6741dUruxDUAyT2m7XdTz",
  "key14": "2HzDbKTDZA3mmCwRiG7n1LHNDLBuAVeEpq8bVxehMi69CmhioxoYk1GoW8T69UsYJd3xeSmL2xWF7cDFosYsBbai",
  "key15": "24niRpUA52YUSr7tNQd4cntoqh3GDwqtWEbMai2dEuurDArn4hBabMTXf2HLXstMQ96QdRee3KLCSgPFXXnmBgGn",
  "key16": "3pbWV57LMrugvHTp73WM3mZnjDESRUdixpAbn42Ap3xEn3t8rWjaqE3kNFPJkvnzWbko7NHcSV9H1T5Tuyv7s8dp",
  "key17": "3Y8hnhTt1GL44yXq1d7fApckbaBdUsicyHrvUpHiDcHaEy6TDM4LDxx1y67nL9WFHvQzS2PUCXJopD84ZDbXBhjt",
  "key18": "3Ju16pDp34jGxBXUiqvaoG112PQZCLgZLegcGqFjHut1LdWyFcUhCU2fBPut4MjUmHMy9xqRCQZSPF7ZqokAFiyC",
  "key19": "5cSKnzR7bNLEL7Lr1YugqPf97Z9jMfLAVDpMjP5mSu2p56gsKdtvaTh1ekHEVqBeHNoRgrC5pwSLp3mcpkpPLLfE",
  "key20": "2hGjwrYGLWr9DPL4nE4FXoMhjY3yPZZNLSLM11axKm8GLMsRzreLobvDiTkxoRexe4pphYtGrdWHmqWhyKXJ2wYJ",
  "key21": "5LH8sv79E7aRKsWVBt738iZKDsuUeWjxDnvMwyEBMXCAGuokXcqgd35x52jMuyknkCAMT9AHKjUQC2SkScTNAk7J",
  "key22": "2StBGnHywn8narYJPjpaQrTTDaECYPYHXsSaKhTcVRrdYckhrVjqx8WVKtB2qHghffpFVG9GTkCK4ke5hzkWTTkG",
  "key23": "4pkZH93FYq4xk8f25WfauRARsRaWt3NFDxYnRTyLXLU4ghAuvt22uQ3PTufjX3E5xo4ejJQUwHoMfaPMtbgfxjEG",
  "key24": "2gCa1TSiD69mfvToYKe8Jyb2LarTF2ZmkjF9e679BxB2SsphkVsSk5jMPZJ9T7e737AonT6pehmHR5tCTtXHvXLK",
  "key25": "58kUzAA4br2TUxQtbPp1Brvwc3dzsNvqE8uAeUML21qtBuzVroSfWY44xmCdvLbqHCeGc5rgLQyWw3keJ7vYy3Kr",
  "key26": "5hGTfNQ1p3NVMSXVdXhuDgWqgfRak5DKqbo1JRagHxMQdrztqFgAGrhSdAg8REtWDGeNsqQy7jwvvGgjk77vGhip",
  "key27": "9caS8i5PExvv14oGrs6mbE96Qfk6PjUkRgveAhHxa6sKibF9NnmGFuuZRQqrwa23DQR9UWDsNc8VNMQ4SpUBcZB"
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
