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
    "2KFHk4u8wyKjKJw7CLPssUHfo3SqCjTnwqdCcEJfHxbrdG1ZJR851a6j9PSFpDJU8eVr7SHa6DFea4vHXMLmTeX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wApSWiSo1XiHSe4yTJgZG9mLiNtnQZixHgxJQ9kSrg4eQr7STsQiScF4vjTnmQKrhS7NqqBVUTNEYdobYkRGY5c",
  "key1": "45vDGWWfDf4RZRCD4Qd9yjyd1UQJreBgSRzrZFpF3XN9HCgSzoPveiiBGHYg4A67AD4pqX4Yp2qcwahg86ebhoup",
  "key2": "XMq7KDPtip9k3vAQxjaBsHKUiApNPoc4rVz4A4nyKqQqTFCAgDyDMc8pJaEjLVMgATZ3c5dc8mC1NFuWcAZXiMs",
  "key3": "utvUWuH2jovgSRPh2YckvAmr2zB1jzLrHTZW9KnRLMBjZvgeZTTTF5kTLM1NA2kqA3J7xn2urigvRHySGn1oV5c",
  "key4": "3sRSyUteU4Zq5oTXVi4CYMnR8hz3SsVevA6y6H9gxBgMCjGxE9jKF8SGzkJ9fckPVjykqjvLJDfbcywAF96K9CVM",
  "key5": "kEbENAcfEEiZu3gK5zdbTN3Sw2gpUvGpPGuUw3Mf7GNtFnzLanvJbPkzFCa1iV5r18bPKqAz4s8oESsKwzSt18z",
  "key6": "xByAvBubCStN3VGFK9DwpJRMjuNgJvgYT6k7bRDD4Pnb2SDDCgqEkWep2fvhSCjbpRPxsXgpbJ1brpAzARV1az7",
  "key7": "55guiMVcSkL6xH5e3uQzrjVjx8z4FB7xwoWThNTECJ1vabFPFjKpo7hoCTfTM82rBy9wPcTAVZLbrigafPYTjwiL",
  "key8": "54Aj6VgL8zt7YAyvhwD8Pzry7DNwzLnpGufu1THWAuxrwzcd8gm4vByRnFM2M3QoKUmhNSxFiuPuwtw2obbqHQxc",
  "key9": "5XQUNeHsnv75nL9T7MZ4STsKb8sFe7nZaQwfvsWfALDu2VrFr5F7AczrXg486VRYgnDf86LBHqVb3GLxbgDNafxx",
  "key10": "pwrLCmfbD9KGZHZ3UrTXmGL3VZEaVdpKqDMZrSndnPD6SW1aMt2c1EsyPgGzrqPJamz5jyviAMuvQ5dcw8p8Ewp",
  "key11": "4sAcQQFkd9JAfdgfL8A1nFZonkqYrw8cDAsT2raoDLpDw1tmVtC3kr3nosw8WaujeKhAn5U8hSUUse2qPWTxKSmB",
  "key12": "5jA8e7Q9QRuW1YBAciDa26aEDahwyzYnPUhTKXrbrRXTnYknDoWGEBAMfT2tkZbpQA2yhjRcRaLE7m1Hrmw32NCv",
  "key13": "bKAHywEis2JzmQ3nWTbRer7gnK58h9327sSqhenjJFXVt991LZYZyucKYei3cW5aqBGi6CaRNQirDTNhe8hndoK",
  "key14": "4YtAYHt5eDzvqonLCQXGiFc3Xi9y8beYMCcKbgE5uYC1NfHwEAxuevpRKqkXZYeoGSwdKUuARa1dB7qYCr8erSur",
  "key15": "5jZpphb1BBLaRZFzEsAZexEhyV9vJtf3tZtCMPZTFebdnekvxxYPbtPCbKSvpZk4CwYnN4EsRcYn5xxUnrz2zF4Z",
  "key16": "2Qhr5BpzWbKKsLZ6VK3ue4XwJV1ahq4zH3D2dRdLCAMiKYggMzNEQvbFu7HRHzhEmgGbPHEKHmMSfo5zMFK7qUrv",
  "key17": "3RTpFUcEF2RhCG72rQrWwDuwGu2zgca57yS89fcUZY4vA1NXAaRJT2jUnAA6NDdPcQQRxry7X1dRtMHWs6Csg9Aq",
  "key18": "NEmjpt6srdLr4wrn6HUVAaJJUYigfyF8g7ikoa8uiwdYBnNG3vRBGQnRHM5KV8V7EuQVCSYzHBsUmYgnQ3bDWPT",
  "key19": "5q1wZfdVNX2LoXYazkRx7pmQc5yzSWL12azFYpQWxoKvHEbfKpS39dbXgd18PNLgsQr7Akya4UHF4rZNij2cpo5G",
  "key20": "6SmRL1rh8m6yX8uJd4g6VvAjQ8Z3gmeV5Z78Ycbn4nSXzmU9W3CgrMZZubaL9rhVvTSarKpmDQELWCY34yyB8fX",
  "key21": "1Xz9HYpKiv8FpYNYkttL9RVP3F8Dp8FQadW1HJbcxPKuZ3NrKNJneFKx5LpxPje7RZCEEdppcRcjWhabEEKM7WS",
  "key22": "2H3FKSqEYWxddk9qM7h9JFqF5JwJTBNxcNfFAg5x3Y1Muc7P4UwdSsNmpWrHiJBpEvbdwuH7FtvriqPT8pmiYpjs",
  "key23": "si4w1dmz1hyyyZuXC8tkRZuT9BPuMbpV29gzTGmW4MVuLpKJG3NBsFetzJoHhr1Lrk5tRcdEwV7ZCX3KAyUeai7",
  "key24": "2K6qhfW74KSbaVFVjMr2M4hxao9i9euf7yAatueNsgwvxDeAoChGg8VESQfgSKxPhW6DicP5eZrtnJ9P5QUoBqXf",
  "key25": "4NxSDKmsiNzrQ8Eu42tK6kWjJyRE3YuH8K2uDSm9Uef2WhFMHQyrgWvZh5AXWvqBWhtyBxpHMnmy4WiRXUorNph",
  "key26": "5X9Z1D1Rc1HDwC9PkyRTapyGHaHFLLFZv17fmVZ6eFH3Mw2LATpVzhBXfZQ45ifUFCEeSgvRVL9ZpH6RwWWAVyTR",
  "key27": "g8zxm6v2jLCVp9KkCD8J2ZA9TE2qr1JhhjY6wDfXLsokWzrjeihhbnW6jnzKTCgkCekFFRDGxKocNmrd5qLiP95",
  "key28": "3RkMLtADDMxG7h9xiRyasoXPYpunWgNY9LWbP6C4LcLrXFLQioXMd8PBju4NdzCk9W2r6EbxvFejJYMj1oELp8ty",
  "key29": "gBaitJZ2bsH41QZfsddkRfmdSSu5FXkuBij8afqJBfAWD9k55iYjriQK9x7pgSACEur73x7NNbBBWLJjFyDPZzt",
  "key30": "65LGGpVkidzuR47ALCu32RXX77e149DXuYcGzdWYy6Ga78ztL7wvYyieFyne7g3P4Y3VRc2XPAGWRiDihnzCEgEe"
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
