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
    "GTwrwQ2aBpPxad15NeHZGHeB7rEktec8yb1QaeeAVs4Ra5uYRaaMVz6Gabf9w9SxDVeMGCw9h1nNHWeHXjCpahC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tq884MgFhcnLP1z1Z79KLnCw6fCaR9d4kNNgQzKH15REz1YXK4WzeznL1k5XJPy8SRkgohMHCVc5iw3Kf3Y196R",
  "key1": "4EnyR7ZZWqkeQGaU3D34DBHjwF8FJs6FZpnvTiUansGV7qdeYDzy6aekRm93zhg3hhZ99AEBNkvbEJMNBD25oLN1",
  "key2": "bHVkJiyqTmonGLr3ayybC3CHxawmb4JUfakGR4jzDd9pUHRpMioXgR5TsddA84izFFyNZTuZq4XpvDfr2yRdRLx",
  "key3": "5SKwBuvNQqyEM1Y8vhtLJ7TgAUTJzF2LJhmiKTyXFh4xwmfCxPL5vr83wVcdw9qd7s2mCsdoucuXNk8VZuXfm72A",
  "key4": "cYDmnqcm9BH7hEZ7m3BW7VKdC4PPuZyRC52YQP3rJ3J2jf77y1VweymNmKKHinNw6tjmn9qKg99BihEbWNn1gys",
  "key5": "3zUCVWDAZL3ayCFSqVRmQpdBg8t9rw2dE9deePEAhp9SKz1X2o5X614QeuxWpQZMLgYjoEz5xMgW5wgfn1Atr5z",
  "key6": "JTcpNamYZKysd7CY1FP4V8JGJ5Z8xddtBmhUcpwGgJsVpV2wq45N7LzYDRiKi6ZZ4a5FnHqvoYXb4VPkVYXdtCY",
  "key7": "NYdeoJB8dMk2jGeU62CwPE8UEWGU3dYneHUCiySH2s2Ak4Vjtr8weVugAKXBm9KHQX56oNQp9tthnGTqRJh2io2",
  "key8": "2yBHWKbKRnspRYLS5HnetJLVcqJpJF9dM26c9JLArRPEsgpRwCuQiQfJJhCjk562AzLbYTTCZ9nJsedM7zguL3nZ",
  "key9": "4KP5cuckRPgrMErzDwFLQxzkW34UkUX4FNtX5YWrr5X1g6QpnyoAQyNPLJ5XJWUMx3r8jHDFx4yzEoRw5EamRLpM",
  "key10": "3tmx3TVTvbFTGWqHYsmb3pLWYHYNkxLpJaPMfiEskiqQBgD9tUak4rhGYb3TLhnXMfZzFeWty1NAd7AUxzcnvUKF",
  "key11": "2htcFp6acvReeT8MHnePz3vFJTwTBErUSekGQPjCW7gNawvjTVgEx4aFNMQinNYa7H4KtDDoBHn61db1KM5sTBVk",
  "key12": "2p5jifG1hVzCjJhCntMgAsFJnoYFZfmsyh9DYyMMKPQjNvRZN8YmSUYagYEXsSmPLqDxRJ5AGkDde6dEL3rWfH1r",
  "key13": "5akotHwVsAAFhEF3Zyp5w5CZHVyRta5gSr9gXCPTVWppkWNg7k5AzX6ZqyagPfDP4ppQSCB5y9rwQwfXUR3Z7bV4",
  "key14": "vGPhAmVTdYkGbeLrjpmNJebZ7DAt4j4r7VpjJBGNSkeqVSvpmtVNZPHyGpqrXAGkvsPyrxyHReCbZ7w3SFNodWC",
  "key15": "3uHvYjNBiDo1jxC58i6qrZAHNDbhTZupEMugAEvq8QXxK3LnvTbkySaiuQntaubmEPZHkdndLqCp8ghncDY3dYVq",
  "key16": "NqcqhNhjeBjC1V63gQnRRCLQ2x3DuvGhxp6s1CGNpgpLFKGrxdYRavD6fXYYD1hgCaPYpZtg87b9XL8YzbwmzQj",
  "key17": "4S4AoFPj46rUvyFs9FkTXoj9tBZG18j6DxxbWfagGnh9bvhJeSD2mk1Wc3pvCHh1tdX5sU44kgosCYigXm6zKmFc",
  "key18": "2RTFHBpKPdfj1rLLZ6cuPWeRY9Czman9TLR2wCKXcBvLT9QneUp2xaS5wfeDXzXsqVgNCZdPCwChouZR4xp7wRHd",
  "key19": "617ACgU2jUQUZjdMEwwkZ3HZ4KAfE8oxv9DgK9QSNqkjvNmVrBc1LzKgP8iWUmXwoHr9iQjoQuawkwAncroaeaKS",
  "key20": "qm138ZMwY56axbSv6N7YW9WyjhxFSmSkxSzAGy3uEYFtE613odo7T1RrmqWEQwandVH6hCUcKKhF5zQJU9NXmEy",
  "key21": "Lx4311VmYxbCteBF7wE64BiHN3YtsbXfb9AGxu4v4DNg1Pa2p2bXD7KYCbBVZCw134Z1WsJufmWGDAYj1GnVQgF",
  "key22": "2NzXdogyeyM74f7HWz16k43QMWEmdvUrNgFmfYTQBYDrTvGXvX9nYNRRh6tC94hSqT9RkTsuY2WsXNBzYz96SWi5",
  "key23": "5sTe3K4XAW5bLajGbGn8bKwjrvpBx6RxxAwsxvDDFpdqCg6xQmoon455QSPyR6orsw7M7tMTRTEErAVrXrZgxm5V",
  "key24": "33s2L9Xw7Go38d1fqf5T1A3MmzuJtm1sXy8Zh1XvRCVPNnEn9gsHpvDv8EVH191aSPFUoAgngwr2nJQxS2D8jwiW",
  "key25": "4dYYuJLM3FPUrBBpq1h2erSSJjn9LA4jHKoatUkyoa8gGJvu1pKpoF1ypx4ByifoiCgvmVxbJ7Tq8BX5aLX2H4oM",
  "key26": "3bKakZaGj1i1kGyBbhYWirQoprrSx4qLtN732EMMQDporxFwdPTpRjFAaxCzAo4fN4gWHb8SS1dgaJg7SRPQwySM",
  "key27": "2pGHY5ULTMjmnU3PXLC9dkz7G9DxESAVMG1VYQyGYavtL4LpTQ7afFLuYGvh63mCuGtta37vEy6wbEzayKBLzQBJ",
  "key28": "5EHZcJ3Zq1zScjGAfejZtW5zG1ZHNvebvJiZweXZ8ECnr9ZTENh3NzzyV7iXFNpxmVBCkWa7RWbpg2cnRhjW2CyS",
  "key29": "3DshtEb5g73eAWo12dZhGUAXLfS7Si1oHCDUiPSGpYFXRAhrDjqTJFZLeS1VtWVFUKa7fYwjFbwadwvwBak4Wvk2",
  "key30": "TAk7fZASfGLaQG7tKjx3KZRsx3iNH1bw94x91rdL7WMM9aNKVPZH3XszMEJCat5ZLWgfP26rz6A2ZB8kY7euddr",
  "key31": "4Vjq3agwnbmYcFjD8WsekdoiL3n7N18dhXKBGTH5cYSii3Fg5NA692ankFSN4WhKQpYnqUHFtsGtGPXRTgB1vUAE",
  "key32": "4XusKq3NvmLXkkXDxTBHVTyMfaDLeBcp6y5iJxzHCc9atHoMzQTxcZAFckGzgGALsHJhmDrKRZ88QwKBGcaUfYGp"
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
