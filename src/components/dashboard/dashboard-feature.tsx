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
    "5vWtF1GWNKg9vNN9qqHeRhY6zyBz7MBxQLDcN3hbeXrn7FUqSWNttJrjLFC9ZZDmLZFZFaocoeEjxSqJxrfebS3Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i3A4u8SJKo3F3go4mXGStgsQn4btYfD9ZGZbeFKon2kVTutmpNxDqNYTQqf6qhZPxNCuQFMcHesp28vN8nhmVUH",
  "key1": "rnHafyTDZGn7ymfEknRk5XTYhfAGbYn5BfoQ84JMZPDoriQS2epewipYVb9oysX8nA4s3zdxmEMwv4j7WSvwE6s",
  "key2": "2Vnxh1Jxago7n5mF9tCHmctJ9hYkie34jXVkukdXYn3L5U4acDbcjPMAYAF39PWxQPSipCjGQZ6uNNooY2BVDr3v",
  "key3": "3rcmBnkcrSFBcyHwDEa6PJmMj8zdnQJiQF2c968WxmFkFrC61dUH4RuAhxhMDTGBffxSHhB7Ah9dCrS6Azg8iYAn",
  "key4": "5BELzkHwgDV9SrZ8E2kWSToNR8qgWyTStN87Tby9BNCMExDiD7f1zGBPVPawoKT6WVXVMEE6EbWN4ZTC13pm9ijJ",
  "key5": "eEewitzUoJeJ5Y3EhXGBA3zvzsfKwXrZEsTRts6tbezWhUCPKWRkjc1DffLh5VQ7NA3r1fuzbD98XE8H4uyvyxk",
  "key6": "3GhCLccpwwGm1s8oNVYXoxAwToeHeq696Cb3WApacgi8Rem4wdXAXXdS7WobaRhsnQwsq9H1wjeJjfAVKEhdZNQP",
  "key7": "7vydwV8W7DREQUA8csxC8LcJWNiZ4jNsqcCYXaSaWytpCfPpBjPwgH31vjJZYiSgFLy7494kmsMZcxLksBgdEbJ",
  "key8": "3XVzwnfm8X9aXecRNiKgReUYDo9y5a9t5i9bc4ctckoLBMUSxtZFtHEhtVCt6BvhMZsLG2MxnnrshP5fXqbJKZdE",
  "key9": "4KThG9W5nwxJrah59FhPoaARofRBfWaDX57ujBFwK26QbQUPLCktgoeRhuGa5yQkXVnsBiNxPph68xsWb7MtZBSZ",
  "key10": "4rf2hMYrgs3WMjUZrRABz3oMEKyvMipoDuFQh3esEhUV8B9ngDa9kB7ZuUPaRHipwPMX3EKGwEEW5HD4JRoxK3Ct",
  "key11": "5TN8UfbFcmumNdgSc2UT3eWBw5dSHBY5UWz41qmxA3EspCxJWBJuBYZM8PmrUm5SLAbinYAC1jFoG6u7P8UAz71d",
  "key12": "5UuawVNmxeh47YniNYS67e4M5AHSeKpPRyT5NrLuVTVEq6SxxDymsgLjMr7HkAFhfhzWXus2vk84YeREdX3V8GN2",
  "key13": "5tGn5VKEa4fz8hnjsjc2apvDUpCLhMFZefuM87svyUtFYzrv7hjt79o2dhZ7LJSfCMDKfyCNTqh9dvJ5Tu6uJMi3",
  "key14": "7JoMqBuK1xjnxzkSkYJSxXQNACKsxoiUn6woiCp6yt7n2wgKMhvqFFmC9rHSLyARRSsTb6zoT4NkEMmxfXuAqiR",
  "key15": "3DNANUjpN8vukdp79aR9BeXYJkmkDFWMckKZfPZG1vCdL6x3eeEPDCnawcTcxPRVNaj8WYMprVirQYeFGczi56qv",
  "key16": "2HSV4MECPzoKpUfLsKDtbtJJYgbgjHkNRREqDgAzhNwCJesgRtnvVpCS3Wv33bk6m8xrA567vNn6ReBAzKkUc8No",
  "key17": "4S98G75Pnh4aqAu5UCZBT65wz5Bhn9ZCscBMJNAhyf5WhJ7DMgcUL7fD5x2mEj1dTTzYAVtMzugjJy6DKNMeaBFC",
  "key18": "66d6s3R17Nok9h6R4Hjyu6ZABozEvWmZcGAZ3W13hUdpGGUwAJJEZPtCMoN1PXTsGLiLt6qL4vDkCn1KPRP2ydRb",
  "key19": "4XjbqN5EVdKg8soxACsN7zVdPjE3KdkQzf16hC6psQTbMyPZAcYckPpFfYZgsHu7W3WpLqrUbtyCTdh1q5AhfU7L",
  "key20": "3DWqif1UG5EPqDhWkNjSmrDGpXHTkJBQPamU3zy7FpLUY1XQDTDFruWnsNsYGbh3VqaqXYQEwZ3CTrrJTTchkMXW",
  "key21": "23fGwyiRGFvA1XNYmksUXfniMBfE6vCBQvV5m7FBTA6x4vyAwecUBZGQ3MPCDwPtSeRxRBZ72tR3GUdKaThmVp5U",
  "key22": "3WAwyUzFXWnfbqtvnv3e4ypEaTrWw72QkCfTWRSXXn6oNh1DN6BK9cZgexoewWi3nwVQPRcsQcvN9AXPgEMPVPEh",
  "key23": "3kXuMEC5WUwg9J7R7WMbRmc797TXezUKCHkiD2YxMRRyzDRawzUCgm8Vg5v6CmFKLMrQQ1xL9CvpaAX9GAGVKUUh",
  "key24": "43TcY2uX1iwXb5WgMeCBbTLrkHt2gmEZq1fYPVSDi78iymRaV5EWXnLSzHSdGJwJCMLD8ju8eDa1UFfahQswJgpL",
  "key25": "28AZUg89BPsW4nSYWDMFzS7pZUnx73AT3bwsBQKXysDWHsUszsHXMqsS3nRYmCb3DesATDU2PjLBVK3XgvvrkBJw",
  "key26": "5E1i3xFVstKms98jM6YAs5ZfkV74UUYavCmYWMimwaj2CdzpTo8TUrybxckykCJN2UUuTYZSh2WFeVqQS9gd8eUG",
  "key27": "4whLACPpTBw8yrksEGUMFPaPVsdnfv9pVk7ezqN4EYocQSPzEgQRM3UQigJfE3rgqQAn9PiJAa4YDPar2N6YaNv9"
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
