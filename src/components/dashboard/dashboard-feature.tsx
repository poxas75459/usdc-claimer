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
    "4UEvfgojz9c39syFEdBDYHGasTGF4969vvKnjPQGuf6MikJH3Kjkb3LmWu9BX6qe8eWjfD5Kt5ozfSPoHXaej4BQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M1TLdpLDfbUGM2gtfZGnatQZkvPTBx2ukpLJqfceVHzWerzkV9tfvSn1sg7Df2LArXjAdnLeHSax5L8XWEg3ozP",
  "key1": "2VwftimT45yRjRfYLYWQk3CBqaajge67pbYk9Mm9GToGhUS2ymT3QdZiLE44F3Kf7Wsa5E5ysk2osKfG8x1z38XT",
  "key2": "5yQBbJi4h3xeR1wwC6jwm4ydZrRBcHJCztGucfFhCuNsEsZ3hYbC6oKPUGmamJ9Zo5hcPZHfmpnmhiwoQaHfszbj",
  "key3": "5CZqrTKnax34QPTw874NkWgbQ814KHb1QcAjRVerV37ttnwboCpgR1UwW3EyRPj8cj5itnuPf1PowfpYg2SqYUKN",
  "key4": "3XebMaK9WdLoNzyPy4hgxQ5iXMewzkWeRd7QMu5zgJMFMqdvACazudq2hfUE8H3pkMLPqV1WYaFpPtEKmbg6Ro4A",
  "key5": "4r6tDWdEiKZ5YsGQkxV88bhdxMrjNr8t5okBXtQxguWkJXR9Nokb4SJEfpGpSR6itKUVdCFiuZfkDBKac8VVMB7V",
  "key6": "5PFUFiAfRCtMjvNamcYRZuXHh184B9dPVxwpnXhggL3XhafDbkccNnX6S72UkZoTJn2iPKqRmsn57xCoHijkU1g9",
  "key7": "3LS63pjpzUeHVfryJNdPFc6ZT9J51VfKnyBARpEbEhg5UAmYdCpo3ephZfUeEq2S23nrjNmnUZnEwSkavSU5bodV",
  "key8": "5xsceCNsi4vx4iuzoC1j4FrwrtFNZmGngTcF1cHPAs8cmT86H2qBYmdo6kpaaA6Ks495jCPX3k9PEJLpbknzy99x",
  "key9": "4daZiwvyG5tskKzszoWC6d1i81Pb2QG93gBVjvnF7Wj5zaR7jejkk9kj7mYzqiCNMRF4d12DXLe2HLEG6XYBnnPd",
  "key10": "28waN2upyotL73Ts7qtvmHqk2hYzawKYv9YCAtZ6dn13QcY2h4hRkhyw9cRmWTbS34WCsHYZ1g6t6uiuCo6hkD7j",
  "key11": "3w2jZdH9itVeoEbR4qazGMR9gfDVZhS2qGfYRhEpmexGBgnX5aSW72Jey1XHq12D9iTyxiCFMTbe6NKUDgM9pLGF",
  "key12": "3eFuwG32An1QGcJMHmrkgVKvttyyixgeNtFzbJvuud8AAC6EfkjyH5M3J9csVPmEVSg6noPasgL2K1TGNVmT9oVE",
  "key13": "3tWxDXCjYj6WiveFHMrHZdBWkgV3daSD39MuCLe17BhJKF3UUs6eQrUwTnBrGgcDA5PkDsaGwxYgeGw41pqKiUBi",
  "key14": "a4rVzT7KmZZq7ojbZq6E2nABegne2wiwhfWVTfLDDxFaYzGqHxikaFSfDDv6FxR2tcCJRPi5M5KsLCq2Z3QGcSZ",
  "key15": "2kDEknSXHZFRGEdJsrUuYz2V7HfjFA58w5bjGbynwi5DkErP5B3jfj5ziVaPjLMMYozJ6eT9dn8jJUnbDU5ehGB3",
  "key16": "5QSYfCfXyLKQjTVmXWzwrsKnbLWZQFVi3D9WvVrc5rWHc2KrWrACFzDh2VisFXUfmA4g27kezaUD9pAYs7sSvNg",
  "key17": "3ubnNBm8XCkyUZRKvetCSSLscNUUFi36dv5w5fSKRBYfvnN4ou9nSth3qYi2Lihk3Lqi1fxb9HiHEbsmLEe7L3Ah",
  "key18": "4yZBpui5PVxejdEokmaCDiMnkuT8tJbqjeVtxrQtazMamAnewYeWangUrw5wjQhn9trLcMC4i3whzb1ePBkYLyYK",
  "key19": "43pdrwN7BvG3jkR1LfwJXSUzCmP8hhu3gK9WZwSXDsPEKakeefhBJ2HWj3BQsgYxpCMRNGersXD8XSxxQLbzyuHG",
  "key20": "gRdSSE1A1rVGwkkfcKTdH5mxWkYCByfHZQbda3YHjbLb6TYrwGN8tHZqfpSVJrpwcfmJAyuUMHUTZyona9SpGES",
  "key21": "4UijYUqbtSTgYKUF9USyF9ednqSoTNNeNqbEWZqsmf8HQL53xozcpmCiAxJxY12je48Gj9uA3c1XPArjhtf64g5T",
  "key22": "2xkUdKwVUHhc8zoCixTRG4TVoUEUPPttMzHP2xHhH2gGGh2HeaCiyHvAzZjtRnJWtYrJc9uwaUCDVrudKtpVKg51",
  "key23": "5YdDSHxsFVQynGij85iPkYCUv7TNPyjnCaYGe5bYAHwNnjYJy49jXECtk3vj8oM4kmEvWbWQGbm4QrqjM7NtUFa8",
  "key24": "5HueGYgwkR2YdausMWkSUwkV6RW21s43LdscfJ8KqrKXwvWekjQubC1JqWuqF5AzyPNSVqwdvst6bbK4WKYWevEz",
  "key25": "3XXBoV2AvGY6wSfiXbww9RGLdC1PJrmmeacTaLDnYyncweTPHWnJt89jtsC65UgVwEbu9TpHHzWqJyvVNkY8RJ2d",
  "key26": "2EJqdEzcqodFezPVnJu8U1UdVY4cHuy8U1qMpdtYk1boFSw7NLtoyajCHzx6cvu4QUbyjFUJojkHXaXikcpfmKKa",
  "key27": "2VLF26GYbP2iB7ZJdW2L2enzGWyPvDz7DEzr8mSh8owZWaUEpY533YyGYWEDhSn8tdRNQXU8ySRnxChSXLoCq5XB",
  "key28": "37prNxYC3Ae2ph9fcCWmotxA9KNr9RSiHydcDRFFfiREh8y22cQT9T8nEcYQMLaLDmZogtchNsDhzhBep4SUYccY",
  "key29": "Mydw1BG5MrUbcMGJsNdRY73taiz5y9VBc5TfxKZv26YdFL2qrooRJixifeS77bAHf6beFWiEwNP9DQj6VW2s8VW",
  "key30": "5JHhDSLsx5urQY5934LwosL82jMiaEwc5QBh1Bf2MQ4WfprtTa7iuDsmydAJssdGUezGj9VVrpqNieShD5CZo9J5",
  "key31": "3QW2J9AdkMHDdvbazAzjFutbFLDJ23a7MuY3VJxz6A1K5WJH9NAbKuSD211RqhDJ4MUahYuUcem7kRbLhpi5o64a",
  "key32": "3uiNXKExDPRjMfm9seDSvFph9fwsnpxk6YP9J46FW3TNgzjnBP8YnrEDhgq3nnSx61rGLoPzR46rFFSKaPYhevA7"
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
