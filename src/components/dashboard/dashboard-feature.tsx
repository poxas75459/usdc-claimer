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
    "XQYAbFkRB51ZJc5YQpxTuxFzmp8K8wLBEqPWdiQKWm6vgMebRfjE6wJE7ejuyP1azDfKa8JG2GssFvf4zsiVBdN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mHBtB3C1BVun9P34GGiL7gQeSqQ7GhafnU3PLXXeU7d6icCuujveoQJDKg2LUjMEYH7CQ58qD3sxYLVzSQf5TqR",
  "key1": "2v5TTjqjrvZvHLhEWSHeCrVKU26SRWPSk2oK6JDrLfeA7MBieioWnYvUzZs1JA32HYqsfYLgXsnWBHvx3k3x6xab",
  "key2": "4hdzqQ1kEmM8zvnD45egSM8zWqL8rzJUn7rMhbDd4pTsBL28vGn7VLXEQMe2X1h4x3sjDkpihKcc2gDjSLcR7bDW",
  "key3": "EGq21cwjUUs5wmmwjXJbLYJBv2T6iVfi6XXMUmNguuLEk52jZpK6TPUDztoXyGhTQZySTcrtQQcCtUhT5MvSyyH",
  "key4": "3RDtuN59UC9CYNSMKYuuh2qxSy6zmyvx2dGMr14JycBywgv2CdPJuWmoP2hUb7XPLBBpT9MA3vHn7FgtV8EJXfgJ",
  "key5": "2Qm28t8zosnZrJ8BE5PsweMk2pT4VC1rqSEKCQ1fzXaGPiMU3tb6faCPxz56WqoQAV8btBSp5HXuwFnyoTAWFSfQ",
  "key6": "2D1NyPjvCrWYwzHwqgZV1hmvUjHL6VsAThsvLvLrzPG9yUPxELJduhYBJWUUqNK67Up6JFuVdWyA4U3e4Fki5nJT",
  "key7": "35tFsuTVXcQrMfFakYTfUMPV4bhzZR2irR2Lq48t8ddsmaqAhXaSRKK7gw7te9gP45MWczQix41QLS5bSzpULpz8",
  "key8": "4APgUXicgdigaGgxFnLtkEWoKc6nLunCgVaDhWAXTwQwVQCVCrDUeNdpzUhQK4yEobVYq19ZVzfCKXmn9pBooio8",
  "key9": "48mqdUWqUBvjrhSwfjVzGpfXPPRBVTmcefGB784KU2ZLd81dwEPgtdFrzkeyXNYnWnGgqBaANBEdmZKUDFT5usm5",
  "key10": "381Xx3gnLKHANe3Bt45YMtMwpcaS5BZrU2TtPS3ZHpN5MfQQtDFaz15Pp6R7xjBJ5c3TWjQ3dsxSzWyi2226wXHV",
  "key11": "HufvesbFu2UWnQr5CcyEkeRQgx7xoFKHNP2XY2dVGaT8Kq3Yhx1MqED9gbnW4YY6enafFsTeqWuSVKB7C92673N",
  "key12": "5P6Xo6Um7NL8ADfuVVpyp8XuEoHwV9gV2pfbVHVbAeEyef5wnyNHzQ7zrBi1HwrmDERetXVWwpgZzfsQJB9iquuE",
  "key13": "4SaX1nyvyumMBdjcbsw5RD3DptdHbg7RQnz5zNWetZmjAUmNRmyDo49uaonFfZhFNBkUzCRZkwX8U6ibzkybhTLY",
  "key14": "1uQ4WjQu1BPBdqU3QVcLE3qdpgFxuth96rdwPLJp39rYfoLBHdysYCDUHupXbRj8Cdf6kE56tyxYUwk45iH1D5X",
  "key15": "5TgWGFLCLAEjt7aQcWQ5EVZmBfijVFbhEinieLnvmbRuAiJtmG2w7xgXN5EvvemX3Rru5GDsR4XJhz1XFKySt6ZG",
  "key16": "5qGXNxPh9qSdxGFVApnfddW2hLjZEfo6XhMaoJTg47UPUuYfEZCSYPmWZgdsYDgXgbm8RSZpegoDmzQXLBDpwbsu",
  "key17": "3pYQZypA3NVaGQk3KFUkGQScWuWGyeJ7AZYgWDkQnMB8znS5ZzLEFFC44wZPTiXPJrgyBP1ezSgavM43XTEUMUQY",
  "key18": "YQR2MRR7MMRdvTRCF8BFv9bQSCw62r3ATAnF2noqNzpH447WLLVZw2rtLxUYbpya27VL1dWgKxDQPNP5jmj4esv",
  "key19": "5yNtxRvkST4nnStfQP9gSPUMXGVuPd121dcpwYHch3v7fz5bsN17ZfkhAqbTLrcNZ4GYE3KU9qARRBqSjHaBgQAU",
  "key20": "3xWKiqjQhiBVeyXjxGcpYkXTLtVEsFRwTTLajtyTkvGHNb8yR21W5sxs3JKgPhVpVQGdCAqk6uTRFz16BYf56w5m",
  "key21": "5PneVgFz3kmxqm3NqZnTGK2ipp8LjDLpVWYTm73BFbcTdHhbrcWHZp5dcEtMpcDrEMKzFHpRYspTz1amDTht7WtV",
  "key22": "RbwhCE1JW7URCoyEpvaaEErFS92oZ7RuhEvhThDsdkWH9nY521XVE6dKxuujPw2NjvGWWcM8xRjtNC7BLZ9Hx55",
  "key23": "anYLskZTBvwX6iTEe9j64LZTaZJtxRHmgpCMFLXStBkhqabktmhTvU2BqvVQczwJYd7sXHV98JUdkuWTgqnHNBU",
  "key24": "3zG7eQrc7xpz7msLPbbuWnSZcsUnHd5FTmHRUD2vW7zrRdgdZHQ8BkLp16GyCVqzxrzRxw3UPaGkaxg7PDZG1X82",
  "key25": "qZ9ydFecSb3C8g8n1FsjveSDxWyfYEnFjLNouLW7mcvU4Dzhm8fuuh2x595NwRUpKmm6AXXBCgfgbH7YGZMtky1",
  "key26": "ee9kz5f4GYTsZFwiRadVZHCRX3zSeFS39V6Wkx538PjH8Eah3A3eACbtJBJZ9hyCbuZGtJMGkNh7Aa7WS5ED8Q7",
  "key27": "393KrCrJfeZEbR7cT7iH4kqWqgDiSqKzkxVHZHJhiFHj4bEoq68vwxmgQ9LLGk8aTy7VBcngUn11XoMn2YAqiToZ",
  "key28": "4zRiTLp4ywC5S79RPUfubTtUmAtGBnzykRc5aC3Unb2G6sTcouS1UWPjG7HC6ky5RppNP8ZXJz3zJsRZAx5WCBHC",
  "key29": "3iTJ2twH1gKvzS3doShL73h6Bb6DrYvWxy5MRtx8kupS1ZTiHx3yXXdXvG2G6JQJjDuwvfYn6FsYi6sShzYBzTKZ"
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
