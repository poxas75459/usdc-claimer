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
    "2NsfdX4Dq5LnTwQGb8BQQVbfrAFc8iCfxWN5a28SxXRqMBRMiipbjpJ9a7mVTg2othtyG78BvCR9S9emHiHvWwpt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VRtCXeEedvupZhBHHPKkuxEJZDDWhFWx9AcDhcojF9ucjrKGLvqNkAERyZ5BAEH2aVy22aeSC3JpjehnShThSAk",
  "key1": "DrUbaFL2JioX6pGWeRhx9b3rsm7WCBkYAf5b4ZvdajX7YGXqU7UWj9qcp3ckU6GTzbsKKfVpKhaMAso1vSqoPCo",
  "key2": "24XXmCRnibir93Mz58iySpwnD1Uy8drUJ8yZMjxj6iAhtdP9qPPi3CUsx4PUvCGUMNhsSmQfRvVyBkhkT5LnEA5d",
  "key3": "3diWDYbjTV3QD8sLxwXan29HP6f8EQKRGSm81L2Bu4UTgB4eGoAdNMmL1DxpYX95mrcdg6UWJT852LRD2uYeuFiN",
  "key4": "koDN6qANtbHhH2KCKwk1QVR3zXftGmugNPXUQpDm7WvNmRhpwKV5RyXMoyCzG4oFmasrZXwxdvGnsnxqbytyvkT",
  "key5": "5oHZSPe2TnxPQhxLrjnFhAQ9cr8DTV8vroyNcVn4MmT3dTm6EKJW3S9wHysXfffUudu45c2EkFyVkNMTANTbN3hv",
  "key6": "4uEXCRxnLFL9j2FrWzAw6eZ4nM8sT8aKBVNhxzuBF5WsGFRDNy1XCTwHnjco6ARZaC19hPCAGPYcWiX6tdxhev3G",
  "key7": "5sMR1jrovZbyYowGx8GmWM9o16pzhKcUkfeXuqLB9xXbH2kZxZKYvARXUmvUYBKvnj8cuUEmHg3MDzaSyNqGv2yG",
  "key8": "5suNsbzv63AJh5h6DcaYTzLPs4UYFbTQecsp5Y5PjZMGr8gvifWhBQAx4uUiR1qXsWmod4XfQdHGCCUaPo5QqqAv",
  "key9": "5mw8bwFq8FN1k9SmqJtBr9VWmwNuVj41aAiAZEFgo19dNwtCfdiAUBbBA4c6wDWVBJEWDGyD1hABg9yxN7SNiBLG",
  "key10": "3QJSDqz8suP5nQESvd3dnCVSe2djKWSB1YnUWGPgfwbUUdW1iUUP4a75oYs78jrH7yT5uY1iHqMEzTvpEdTX2tDw",
  "key11": "5vWCnUrg9FgnLBbprtrhWoxWmdLHftGosSomtpFw1KtFbPmGTBGc1HXaGqZFGQoQxCQaXisuvRgcixReXGCwmfsZ",
  "key12": "3HpWPhwy7wT5FPv8S4juXAbxwNadsxzLQBqHFhxZ7u4gweo8PWfAvSigehnsfzLrin8Rw7oF9hqrXoSqWFFnEHZ9",
  "key13": "4mDxmwcc47kJEcqayT5j9N7x72mWSVmV2w9H2FhEcWyyZfnJVRtJY9NV4eTsYopFnqadi3JzgADnfQhPMRpaxPB8",
  "key14": "3HRiZiWrvXA6waEeFLPwkHUngvadwDMDinVt7U9kuSQ4iEhHzvqooqo7ubndcBu5mCBgZVuWGTpAaUFswU4XUemE",
  "key15": "3hK5ywdXoQ5VH9FUazhHr3bAx3DuiZpTH6nzxQxg1KxiaGUv1kYnKiZHzNAjDNaxDUDgncHRnJF6qcKaDNpbjLKb",
  "key16": "4GvDnK9Mfn7MFTLChWtUpbbTvGA2JgmrD5fwcYuru2yqU2tWAaFvcR6LAHnGi6KnpGny2csaqxJoybuMu6JJKPxU",
  "key17": "44Lu3pC9iBmR455BMXLmo4Ri4qGH6Gzx9h1NYFBYzZDFrA7Suy4vLfLz9XsocMAizdwQftxY7PGNyuXyAxqiQNH6",
  "key18": "3ofvqkk4hKgY5WnmvvqtuodZ9HNRE3LyV2iG67RLnF8vkHogTH93gkpsCZ3BSHY42aWAhkfdZvmAaXGP73xRvLgF",
  "key19": "2sRSo9RWQGUhuvx8GPdrGAzFbfAKeiGZvu7oFFr5LbkSoG3WZdQvVBVxzsS9st1DaMKTszGPoitVuPJhGzX9bb8r",
  "key20": "3185GAKkDBh6PJL76iahK8sp6bJjxPQSS9CzS7pUnXGtz1s2JkUKLVunxf7djjTX568PQvh9d1zPC9336iR17MwB",
  "key21": "3zTcDuyKMcEmfGQpyCetAWL4i3aDj5mevs8MtQ593U1WYHEqtRkdSv2jfC1uicxFYp4VM2m7ZokYN54BS4MasaHk",
  "key22": "5sUSPbG9rYBD8WB39N4eayAFM7okvYbCr3wVrDcC39CDZWJuL52dJH3KLHSrtWsk93BYQoVt5dwYP9qPeJbv3iqc",
  "key23": "3SvafL7sYXoUmLrn7oQNd63xbfyn2JhGBYknCpN9Nh9dPBPSud8i9xSmDcxwJeAn4Pk34Uj3TxLh7mzefu1bQTxN",
  "key24": "Z98owwXWtiKoLJzg9UvUCpENRxqxE2pBgKmYhSjRBwUaRxEWbvYsbTH97zC8PYUtgEfkHXBhdhHxhGpnxGYPKzx",
  "key25": "466Ga1oz2Qd3kSpaWHQhFZBiNfhLVCkaLDSwa58qtCk31BEgdM6pXzucnUfFHCm1XsV899XqGbv1g7jGStTay32J",
  "key26": "dBUwif5uAFNMXwRY6pP4Q7ohuR5jyShQv9MdPnpLNBP3DxhpHMXT4Kx8tLGy2X5uCt3FDFDM6vcUKgG8xLbX5hu",
  "key27": "4heFbU7hfs3NdYjRwHT48cCi9g5i5JwXmaqf3RM16cXTd2d3PrjH4R2CqL7S6X8cocYpt1za8zzhwiGPq58sWW3E",
  "key28": "2j7cggYcAu4jKhF8sbymXEbiBPi3tat4XPaAyiEyKhfotPWZVbaoBaDFYjUjmGmehLKFFeSePi71HTKM9HfnMp5E",
  "key29": "3PiVueXh9tUhv28H3vDwibHJrs1cSwZGADUXmuX8QrLsZPHnKLqRXSry8EpyRMWF6P7HvHhfTBBzHK1oLVL2JdiR",
  "key30": "aV6mfjRb2rb22e3xyg66Wgc1r8UCD4rxRpnMpmnY8mK8wwfVdStyrs7P8VLzBDVdfsoCKU3HvqXkUBDP5VZHLEE",
  "key31": "3EDgZUsLFjTbfjJ5X6D5wrzsQhdckzDrgnGX6HM9o2fbPtZBRxvBngRKPu6oDbKb87vJAF8USdXFZW6aUdXZ1oih",
  "key32": "5L7gLGhnwaRsqhyAisNwGpQfrvrQQTqLVthzEGdP21jj1o5wH7u6EVS5r5Mp12Dmdb62txzgvi6GHBjuP2VZ294k",
  "key33": "5pPSSy93fWEK8FAytR2XHjmJcw9NcL7ARhCpnJ1mVMD8KcsDcRLSd9BPK8NxdihCB2NBUY2DQzompvbiy3Yp8MFG",
  "key34": "FXBXq54Z3cJVFN7n7ktieDG3NuTfcYiQWkjYeXsTXptjCpV3yAvftDiK5Xj6rjsDY3yFibt3KqpE1pYciJ49SRe",
  "key35": "FCePDaZnSiW1VAQQ74D4XrcKQ3RYiy2oZU5MkXfZftQnoXpvgfjHb7gEmDXVVbM5EZ5fHmYpyHdPTmoKYtneLLw",
  "key36": "2Hcz6iqaRnMU9b8HjDTp3DkwaoBkBM3TA85M1gYECvzhk6xGMwyxXeDtCiJjztpzSnZ5n5WsCUmiLHS5QxzWHw3G"
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
