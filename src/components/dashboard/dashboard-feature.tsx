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
    "61MKhbbhJBgAPME9mQbozoCbQc7JQYraiTHjGkXodd76eukKkjxQmdLNRHkKswEwN99pTm4FZjXXvQ3LobWi2toL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L8TAH6o5Up26brnvU7xP9V8QmEXwJiHQ7DLp9w4yTpH49KXSSaeVJ6oDXffYRPiPuvtVPCaeuCWETAmEMf8DjZG",
  "key1": "tfeBg6BU6wqZg3sWcb8brNW3U8oHYhygsMCy4yv9B1WREypbKZKaervi2yqdikokWMcJqVK9ZbhrsVqKtAGPBJf",
  "key2": "5P1q1TzGjRDhn2h2geH1fwAi1jLNVE4aZz9Uqa7DYSxkVghyquEE9UbRK6UAF9V75TYETaQJmEFNgWRLXriKN8Un",
  "key3": "4TZtS1KHDvy97kKhGeuVdMEQ3kSjz71nfjGCoHApgjAG5Uw5UpW8xWjWkrXodoSPos7zFTLCkiZVrFHj5caQaXwJ",
  "key4": "5dcbd6w9dZMvsRyRocMhMkd2D6NUYahZ27L2sGCKv1P9yFyQxG3q94PpwaqAWpFXXg8qHNvyra8bTYhrsMQKdSGG",
  "key5": "2yWPaMbe4fSBauoQ8Nve3bh2e6ug8pF7bTPeDvmZbuL5hWiSxEzzP8Zn9XYe5gdgbJLfoXrRbRMF9VoKWaBjkX6L",
  "key6": "3BLvtFq9fGPPD32yXhjNpagNkx12auqnYhU1Fd7MGGG91opqyBhX5FHaa9m8hvxJQFeHfg9hfii5v2MS7HzaeTmp",
  "key7": "PwvSKUFmfBhFgnp8kyA86c6gwYxrqyTCPMtJ4K7FcQ1nrU2ryUin7YcNMxzekWnX7fha78GuBDthoPRgUWgDttT",
  "key8": "3aNbkBhErccAXosgzkh5nCXNY8bCZjPU1oZRQcTzoArMLSLWmJoDnbWGMTvcCwN7NzWiijQh6Jsfm3b1SR8ZjBdD",
  "key9": "2SK8ArmJy9ZFK1X4PcKXe4PpsnrwaGR9e4afzm17jNas785N2egL4GTympDyViAAcwmXftStwyiZhQbcqjcdiFmF",
  "key10": "26qa3Tst9WoxfTreyNrJ21fZtVkbj4V5ma8TFXuxhnFiTbh8nWzwERn2BudFv6raE2stXxEfccsX8mjzBoHyhWTG",
  "key11": "3dxRyh2aqWeXFoZTsiC7ftYuziKWMPRo6tyTv8wVMKQ6nzmyKPwJPNbup8e2989VrQAwDQwCABxYwZ7nGXjs8Xdu",
  "key12": "KNVecTSur5vQZ4xZusKz9DfdF86q2E5HdTSYq6TyKfw6GSyfz6QuvcNxF8YQWEifzkoAGbTA74QhzWjRbJBt5NB",
  "key13": "3cktFuL19at3ubEQ2AqTeBLtt8yy2RvMLVyw9L8NvjhXbK7hh4Ea1r4CiP94e5esp4BQ7d8r1bhRD3WR7rLFXU5n",
  "key14": "25QL4R29U47FhQPTZw9NEsbxhNjFTfhupBGXhCX78rUuWVqed6jbm96pw2enfJcNA3hYtRZqppviBXhPGZKtDUwc",
  "key15": "qt2LnBCYUmwxxv8nHjGhRxy3dLrpuyUsJtntUcuMA2fWtR7n3xrXfvQuy3woBtLfUzQsGfrt6Y5hfa3DoTFQGVC",
  "key16": "4VsVTBUXSW6PZnkTFAEJaWoi31LFDLb13DRgAP7LEVZQE8AkSw13VcoGfb6kEaJcghWYXJEAzW6mf8pMXzCRnpq9",
  "key17": "4NXtrKCcXipzE6yLCJ7psU2Sfxq9rfFXGiYQdXSys1qaG4vj2UVAm4P1eAVz1aq6cfAUKrEKKaD72jPN1y1LXfY2",
  "key18": "2Ti6g7Bs4qzYrnie4VQLqVAZzhVUjZGjSsXiy4b5QbXP2PomUTTtY2XdBcwRx2NeHseUj8atQJuFiTd8ur6ZuB32",
  "key19": "4r6CbF14Rc288uiBeqBkD2ArNnHwECZNWgBo4heV5t3LFCcXNaqkBMCUYdAY7JVgwMdJgMtAiHW1Z19SS7byhggN",
  "key20": "52ABEXTgoKDXY4G2Bvpoz1RcxGUinm2Xf17gg7NMfCmuRw5nCqVebMZ2QRWUmjUfsYupDPYgTHXBCQwRy5TUcZbB",
  "key21": "4ezKrTWa7q7pusBc3nC32yp5DamDin44UK54PxnwDeqjFaSPP4EhitMVfG5TC74cP9tHgQ7qGnsCLgJ17btdQULP",
  "key22": "CY9EwemJjxdopnt3fCBD8W4TSZ6yHnksYKKaEj3PPLYkZRw4siTUJBDFFzRByJVkvXuhmYUKpQdeA5jVtsAHah5",
  "key23": "BXYvjBU8q95VvxTtWyC39q3pQnmnuRyEWeGsZTjWAWAVmDrfVCZRx5WBRhBDSq1LjuoTiRQpAVHWuWDDFoW5TC4",
  "key24": "2hYeyXjTAtPpA1kSxkDZpLTFWHjeLB3gAef8jDYwm3GCEiDrK29tff7dqFQFjTHgYhxarFxrZDRFz6Fk1XnTyrN2"
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
