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
    "2HLZcJ8oK7tTDbJkjpmXif5Ypczeusk6fyV9XDk6BB3ETAhH4DydRJgqzHRfC2zHsXjWAMqoXZ5Q8HXCGHs4tXrg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56VM78dfCxtCLFVcJoz8jfvZT65Vyfi8K19XLT3uCDAtpbG8T7Uumm1dETJvtio9vKnayLuUwhDBLsUmfBTjGdbb",
  "key1": "2NDivNNTphveCYTBjLZdGKhTjjdwfg1WodY32g5xape7cKPLDi8qVGF16RXZG7nR77gFcdW4WVdeaRBNCmrTaJjd",
  "key2": "4HtEVqwvJUMioB1cxjXJbwic35gxFX6vfy2qFmaFg2szWZHYMErCACiWJH2MAeK1KAPWKe5rx4bqPB3ioxfQPKEh",
  "key3": "2yQX2cTqFY4wppdS9vQ5Rkr6mLLZj88DR2wk9L77zPDKSLkkKXNXYKfLNk9YuzVWJXSMEVLJ8zMLgS8gJKLpbDGx",
  "key4": "APaqp9xCAZ9K62cUxK14KtqCavG1JBCP2bYxD3kNc1MkN5bF5RvJmjg2K4ZmR3VzLXK9JgJAdE36wewHm8iKcVu",
  "key5": "3yZSVgLgVbxHV8vA5n7v9at988EBqAagdCe9AgKyWxdnuGgVka3fGphLwSLXH3yuyg38rvX5Z37LSykzQcTqGzpd",
  "key6": "et3fCB4JBP97G9r5HqHk93C4JHcc7kYvkCTkhUoTc4Je55wZTtdMBq57gALedj7gKocpoFY1NiELRRG3mR2XMj6",
  "key7": "5yzhfdJS7CuKKjqaw7xe48XKmTLfSj6G5PuJ6nUNyVMG2NJehp1F9uAkvx53D8yR7wWavdX6Cgfrccuq1GDRM3fd",
  "key8": "48rprQCVp7SBXgY54vRj24tmfeBQXgtcyWQS6maXf5ULUfpBa7eUyqr4cscXBhhi22rGd3H2iAfFX6WbXqAFrwCA",
  "key9": "5feNatibdkN3dZK8XzLd5fzrfMGBSwD9cXDCZXfXAtLGU21qGvEMZwBGbSdSM9z6sSq3a37s1n7NUmVUeAPmJ5U7",
  "key10": "5Ru4icYZqEBwq2mM36AS7Vejyu5x7ZwkcbXm1G82xtFDheaJKaDB1wZJ3EF5JtDoE2QpZuffLTFik3ibWC8RT5Vg",
  "key11": "f4Cowm6ejxDxg5t6ymBrtZsHNJsqabFdSC7MMy8BvvZAEByXjMi5UVWs3nc5FDboShZUw3dKaw3USjg85zdQ2AS",
  "key12": "4zLwFe8ZvvUW8vkUP65VQstBm5S66RpguzAWvihTBo56xRiVMbpHSa19nsYwaa5SQ1e9iBb55HVts8ezqfxFaYTD",
  "key13": "DPY7KphyfDWjhPj3efaAsXZy3xEVx2FXJmgVD82RyrH3zMvArPSWfeXvqYve7PMkbRX5HspPjXNt5JAnXjuziV4",
  "key14": "2FrAA8aCSsaCoww6aPyNURwZnsSzzn2B3uMnbzn1bkjUvwx4yV3MjsRZDPPLTmzgX8z5QuvYikHY6PtcTPPPb31H",
  "key15": "W5shJjdF8ieHsJCVkzG8xwLiC49E5rWy3ZfWGvyPkoVv9pmwDZ7XCj6ES4wKrEdRLx1vNhkrYLCWux94dBitx6M",
  "key16": "3P2zqqkHMDMPEkhysnqszz7qTE4xTwE7UgLjHKd9WDx7iUEh5qxi3GivFVmXiTdugufMFjszNjLvxmzt7usiCXe3",
  "key17": "4qHUxSZA9qEZedZTvX6i9g9jUTXV6cdckvy6FERAWJcZUtXeBM29SYrvndUDQXTNdM6bfGGFBEp9xRw3G55oegzK",
  "key18": "5hbPfB13Y4hQrxFY1S5pjYzQZjAPcsoYzVRrMgh5afg6aYycr7zdtptFNDSHW5BJM4CSbXjRXBFjNMcnu9oPbuFL",
  "key19": "2fjY1ur99ZnGvf8ps3g2tUgkDY5En9XBUM8Jeg1H8MRYgk6ovxsTgy5RGekFxhMgdV8AviPYVse4hjHCAkDiYpV8",
  "key20": "3NrWmmJWZoKoA6NocCgBFx3LCMBz1BG4vUhbKWfnCTyM83xSHBq94ucph5J5fsg4A6q3iASbucCTjdcvRhv6vKzS",
  "key21": "55zGoczP6p6KVFY3YfCp52bT3n6jZgZfXH7xV2kopkDZBP78AFP5h3qfqbsK1gTBm1eu4H1oXzibQaoni9uP4BQk",
  "key22": "5YPxqFRGVJc5WnrSmAHcwf6LHjFbg9vw6Rnm1bykkncaL3gX6Zku5cT5oejDdqiH78PSqrmXMTfTdeVxuW4QcuLj",
  "key23": "2aDNsua6UdEk4bvGMFRaQz9pvoo7Hc7xUYnifXdzwZ2Mb2sTU6k92RqFvFDWhQok1JaNridis78QT44PVDG9XAVC",
  "key24": "xpUdA5XDTqRUPs8MQt7dJg9949cFvhZtu9Z9r5hYgavrL86nU5mPvX2P4GFvq7Q8S25ZJvV5k9oYM28bS6U3unq",
  "key25": "3c7ajkHb3CXprb26uHw4K8wau4CUzTGEqXkLeumg3vqp22xHN4SshjWEF4CyUSER7WCiWSGF454k1toJghBN62uk",
  "key26": "2y2KdPK6qzMbE7whfr6xkUNtT7Q3ZexJfWENB1JbHiVpre4a6Jp2D6bE2V94PvFPrPH5yuC6iWmv8nWPk6MoLZAW"
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
