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
    "64uHNmubmNCesqUGUYz2XkvVzkCKsVcbap4925Ukhbb5X2kbMubtrTJ1nALXTvEwiJJsqKM4ijZQFADV7icZ1ouX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24KSXpCbaz2kkKxmH78Wx4aKo3w7PTrrBzCfiat5Qv3zuVF4z6gTHxuwUbxLXoHyiKvssdn8RezFM7LEf2W9U7G3",
  "key1": "4hxqbspTpqXQvP99vn3X4nUqrgXnxd1rJfDZJMR4HWFGP9C6eKb7V3zkoX635zHkJMVRKxQYgVCzXqL2B9tgvJ7G",
  "key2": "4UnKVKLF8PZk4weJ2JgxsreZPcmPJp3SD63XMYPWkiyba153Tw2Sj43fjPUw1SvV23j6zQJZT5mAiZDL7U59VBb5",
  "key3": "eHzYKjFKSSywirxS1xPyHEzo4FnvCQEzhGHzvgiA8zcS3UmXQ1f51Ju1mzMQGNE6WbKeg9EeGLJAF9Yvbh7RNcn",
  "key4": "2tjsqEe8T6xYH98dcdgqDcDKTxkb6omeeT8Zcgjyk1MLPvQzgH7bR3Qp86ibqytHaDnk2o8HYg9vBfbMvHtsTjy3",
  "key5": "4p3aUwFL8eY1RHcXkpJfUsWNiCNFHbW6miW2rjXuob3P374rm7yK5Z6Mwi8ZtT54WKsaXDrq3Crs2JHoFJSa5MN8",
  "key6": "LK7Bm5UkQpaY9Bv6UBomfXq7rk5z3nR6bo1W5n5FJ5ugyKyp3W6zNdd8324PmLrRMWQmvdo7KpcALCvhyHHaNN4",
  "key7": "5pTmeQsWVFerXHGxgUM3DFNCiU8vef7ByH6VzS8SoTUpDsyX4K55anbB2s3BW8LL7UZCTB1rE4CMFzXw1KFqkC8V",
  "key8": "25Q6dhQZwWrPAnAYSKZSw2MN4jWB8CB3qx5PqgMQRXBy1rchfSpfJ2gzfsXhCcbsqbME5anxFAxQoDkWgAN12d4c",
  "key9": "2yKQr3UFWw4EtKVy7eLbXY3rT2wu9eLPRvNWnE638Yj5FD5YdeZwtktpqpbcbFdXPuzriupoi9xzmmKMeVdhNLPo",
  "key10": "c9ra58TKY3zq1VFVyVyvLC7aDiMiPZbtPj5KYgUsxJNwGDq6HEmxv3Rq1iJC8T29Fzy6PJdSrG5yY1t4SocT62o",
  "key11": "jFdZ9P272VTLEuwjjNb7UCGNnTGZ2Z3MxGPQEduWQXV6Yi6bBnyUVLyQSXidtSvKcVUSJ5FeoGgDSaYrVdKpAeK",
  "key12": "5NxEKGpKCNdYeuVRgiRQiFwaJwqaTsfRXBGbAfKX3oSvRCJvshyhFUwRkUbExhRk6t9FCM6PiARh4GPPU7peYZRL",
  "key13": "4urQ63exCAi9vzVRHQRbNLDmUmWbQ4s3bdVvDZt9Zjpu4ZEynfmTk6rqsdsMocfSnCkQAdBWR5bYJui7J2w9RaeD",
  "key14": "4a8U4z2AAWbEC74FPpuaKZrzhfaKr5XypXCwiNiYMCVXRDdxu1EVWhL5UqEs57yP1WxZw2iSyhvBtvprJwXtPRFH",
  "key15": "2AmUvZZHBpCComvtwcEMu5he1JwfkJjgysu9sJKsN7BWCYMxS3prWUGwNsX2v7SVwVTMsNcqgtaGjCR4ijf8jNsu",
  "key16": "4DxgkCMGLBf54VNbAEiTpNHF51fiP2NgWrWF4E5bxjU8UeiB4pmSX4JB2iuj5teamFQhmjuKwTnhLJkryXahA1a8",
  "key17": "3BpQ3TXjxACJLbGtvbw9tq7VxA1PCCB1Leg4vMzZAdydc92EEj7aY6ZVyDZ8MgJ9Sm22P51U5wnv9A6qr4Fv2z7R",
  "key18": "jUTe6RXLuAsScqvKxCmkMdh1byv2pWL42j2jgj539zNDrGDQ1uK9tpJSj7EUQ1d735kfPXsPCLjMhuqtB7p4vuC",
  "key19": "yVNA9mcRe6yhngyj9UnZKwR6szd3NdgBqYCvnG4tRBHRhBduFRnLhdtnB88mbgVTkftfz5vo43J5ECSNdjUakZW",
  "key20": "MLv2zdjmG3QeUKiXMzd8TimxxF4vGhbB4XUwGx1dQuz3rSf3G3xUFBvKMS3TvuYijvgWzNdbRNXVBi7zSXPXcRS",
  "key21": "58m1ezj3NEB2asePPVg8MzHC2CUJvAGapjKiXUEYAM2j8NiVmyWEAyWx5ZhDjc1WBAXX1DB8VjjkmmEfCoih21pp",
  "key22": "4aKUgKuMZ1XjecNzubdPAKa8BVPkSZkXDr4ZddK7LheA3p6FYkXDrH794PHuH2dYfaQrtoVeFKxWqHEkAgPE2pVG",
  "key23": "4gMXDGkRb7MLBkRu4P74bFWLuScmGBJeJkRTrwHFoS41swujF1Qy4PCHrgiJ1bZAHyKNq11s2YB9BTvQV91AmuRj",
  "key24": "4h6NvPZgbxSirDFzgBbjK79MvjWDLJTdzH4SR9Mjz7XsVZZ4AB2Z2G5heFDzdMn1LsWpR46Nzq2WgSbnFUxJ1hXh",
  "key25": "5zWMLC81Wypatmm6j2QiXZqwvpss8g9HhrKJbgL3e3eKXBprvUkrh1nfKtUzQuWKVAGhZzPpqF9pinJFsd2sSbMs",
  "key26": "hfz8YrL9Mrc7V7ahE4DPWBZUtT1BXhY4Ho34kWMUbwrTKa2KUbbexdFZKAcG5xyeV9jtavTWpoteu9Rirc3jATT",
  "key27": "XDxacP6c3PpHKbJQQtoVFG1uPTbF1xD4Jtt7Ag93DawTTytgTtBXG5oHSsJdppiu7jfbjWBp5vNEmt2vJNQ4ZR1",
  "key28": "64FFB6Xnox6zNpSPXtMRFcaN7hVY1bXBk34tgjL3NBUryta6rHkZmngEUXDrPuwTy6jAsaQKWF3iBkWxD6fL1UWz",
  "key29": "4pn2hdcP6PWFtw4KAQURGBuBAx6tR7Pw5MYWHwrcSASAtxrUgrW91JKS7rUprXvHtn3PrZQ4VnEpRvgATXxatMK5"
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
