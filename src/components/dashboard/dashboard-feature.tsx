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
    "3UGqRXoiURSQAGkTnqX7KLHiENU8qkpxJXKDdHPpz9JNXQSwSndPMydrQaxu8i3c6m2WzzRXKzN7mjmxu2PsfRpV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SxPjXGoL8LzQnSGgJ7ghRCmC2R1FES9uWXH1HM9jJ8zmuEoErso5htVp5ZATwzhdEjiwxE55pfGtwZJV65fm9UP",
  "key1": "U88epegf6A7RUqwL1w9m2AFsX4QuXLqPNK1iSPXUYxacLWmKNFQqBWAL42VTax4h4wboB9ftQD7Vbr5R4HqEgMi",
  "key2": "248hCPMPFxvpq6H9Npsg569YQnCVkn5om9PiKSUUfT2kEQvpMVEb42xizHSyNAHBwQt3Z22XySgd9Xosiw9s1pd1",
  "key3": "4dYbnAtajkZJzp3M4t3TxfxiMTWWd4qazUHm4hNCVLe1ZbNq6muwBPZDm4W6atg2V3xXWNDC483H2sV6qcQA19Kp",
  "key4": "4Wgu7aBmP8ACTyon1R6SktGc7rZyrkpRV8JS3GsZDjeRZjGDnhuY4StsLoTH7N2vvJSba8WjfRQAYEt5h8UGLVMw",
  "key5": "48kCxnfnuQi1vS4bn52ZQkpWrFyQU7pG4g2BHXVbyuKEcL7E3RYRZ83gYWd5xBC4vvHAu5nP9LRWvcL1iXaq6pyX",
  "key6": "5GBxx3zgBfcQzPPNKFZNUP9DzTL7i9e3FkbETGCJP2S4M3YDFfimSfQLuJ2k93NKqWejExx4P5DJXB6g4PgxsR2v",
  "key7": "27UtPCWwa8WwzyhyXk6rF4zqkDs9wsYnBE51Ga8DdW8YbMzhjpGQmrfXLp2T2J3YESKdxF7wXMeXVSGAKTB7B93p",
  "key8": "UrxS9RwZbBapnmwRPkKV2DGpNwTq2T55GnquGaqv6pLwRKHAiDrvuVtBq3nzS7fzUhuDUNEru3zcaURp6q2TsPy",
  "key9": "vbAHZvB2JXme3yGKM11dzjzenwD9qnBHPsnZuFsYJycjEUtVgdAiAc3EknC8pnWZdzPqaEh1sk5VfzybPVfCnCC",
  "key10": "SRJjTkCaVKdpGsufC4wfnsd6LrA7M66cJs2ARU8H2N5UZ2MRCebB3Gh8ppUv64xQHuAawqiFqyVE2yncAB1Wq8F",
  "key11": "VCjbMfQ4V8mXMsKbgGmauFux2yUJKGPWZVqzyH9MrRMx2b1Fz7WU3fzfyZAbw7AuHM6PvMmZHdXrHgs88mTPs7k",
  "key12": "2ry53WVUnuPjnbnHyK1keMqDjwWPoT2bNRd31dWRHrvmysGYVPaMfv53Pq4CUH5ff1n9dgEc15gu4PJXeKJXSkAC",
  "key13": "5Mo6RtFKBLj5WNUnum6doUaZvQkgaWp2Y7kfDVMYx4omUbnHKpTqSbUQAMJktbKMnUenb9BQskSfcKeCd45Mpb8K",
  "key14": "3vEKfoybL6AqdbQPBsVx3E7P3CFRLc1yGdbDAyGNxoougFmrqBtJqG5yQCCWvweNPuZTXo2uqhsUXVj35CBBHBzs",
  "key15": "3G9569HJf3zcyR44Utm7M6m74EcX5tTjP1k7om4YTVux3jSH2CkXh7hMPAikSvWwd7jh3GZMFjBRC2ZzrC3YUREY",
  "key16": "3exjq3RatueZ12vnshWbcotdZTQXPMjkrD1cLRgvidigvJdPipfefy3aPrztXNxXN3LRuHqskZVN5FyS3vvgkFJw",
  "key17": "2CbFYufkjz4KnZyq4sXCRkWUSzGpSuPbBprKbi7YsRXP9vZ8w2Sg7mFPhAxtkyZFbfyMtRU2tCiJaqLPRy6hj2nD",
  "key18": "31x2jzmsvWXpd3LoZGah5RdzduRYQMZ32Y6pTedonZV8V14rY9TXsTF71rYK7htsL6NvXLuf38PtjT8xf3a8ASnd",
  "key19": "5BNK4TEsdye3AJUcJJxFap4VN7augKQd5wFWmtf4MbuX4WYeTy5LrQFvGzVVbGukBKkTfCjxWEqr29ydBA1gJuK1",
  "key20": "3HCZjqZ3XaFX5YLzU3tN43UmDoWRmYCmZwNSBfkdKC6YAqSkWdb6HjdWGjh57TxdtFFVzdYVXKCiEoGcKadHT4JT",
  "key21": "3ouynEtVDXmhJ1S21be67jZpuubNXwiH5XZ7ddpy6AoUSyDV76SjtrSijtAZpPs48VXTiupLhtJnBhiSKvgquQyY",
  "key22": "2wkAs18Zqt3jyZY6ScEkhe3H7RMKw82F4vMJHrrtVTWhsK3BVrxxWopC1aGpPrxxNEda2A7oC5ixhYk9rxPtKYVD",
  "key23": "3W7MmkH4MBAm28cctLKHVZPajritsx5aKGWVJKiaKibEZbvWav2L2fABWSwHyaUycc9Zbt6e4YbLufWphx8vj6tP",
  "key24": "3KoSXFvQ7nyzjoRBgZNyobueHmGMB1WZQW8vuU7oNFc3dQxE6HZpNADHCUo4m9j1BND1uUhgj89gyrWgARz4vbsC",
  "key25": "5gBZLDp87aiQYyc25YTsXz3DkwUgTNiqyaK2h7ybyKY4F7R9ef2Mp3zKbnmXPtxD17Jk33pE7kafRxGBjo21NERs",
  "key26": "3X8fCsp3gifExZy64j9QzPuTSyZUjc4XURH88BTKA62VjHfJrcHWLo9ctsJttJ1s3i7thoTnqoTuTG2fogx7Z3oN"
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
