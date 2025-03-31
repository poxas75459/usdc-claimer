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
    "M1HBV8ajv39z7VSW817J4JrkUsoY5NgF63eJtntq5Rb1yQWvhjfudqJxHPVCA6BBAmVxKb8Srog4TiAh5SeKW1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jd6cfQ7bScUFPezbS6sacRNQNNme9pHZZCX7ynAkH5LGfYmZy3oVyfihQLBucPsNJsxieTeYZm261o3RK4t2BNh",
  "key1": "3ecj4ZHbcU8PLr9mAbVw5L5CHgHPtJrTtuL3jUucYaJwHpdDCqxVBv3D4fcJDmRSkushv2WkfLSFqsKLk8vGJmvV",
  "key2": "5CEu6UPWvb3vFueGisFRqfEXrdVvpGWE1KUJ3o4eusjEzWgAMQJrnA5AsMYU6rZecNF5jQD7PmBLFMixnVxeECG9",
  "key3": "53ge8KSBCiEx2BmY9TJ9FkE2HXEF4QyjWVe2tRy2GnwYwT7c4L7icJDBXzpQE7xnfTGVtqkBqPwNAAmiemhcFHNQ",
  "key4": "3zMigwTGJQk2HjA9ZZsZm6fAeX1sfSq8oygvDXLWhTPbP7HDkDsyu9kv7HNQCNPPsSTsNCfMA7u6xUCozzQcEtM8",
  "key5": "2MNaU1xds12GeT2qN4GEhXCRm4xRy6f5B9UiuMfRCY8JA3jFaoMy5YbSzFiMdRQaRyrnvHnATh5g2YUENoNpteej",
  "key6": "5vwj8LbfHTK2TQDA9NxZmBeGzv3YiyH7PkThwLoUurS4Ly4iyksViSoSqVt47PcaJRKnucTsbZsBCmyEojXDJE5u",
  "key7": "2Syy6t8G8eHa9FAw87RhG4cd22MMRnKPrJ9HiqDS5AtyL8paHWkSpSn3LFVh3qYWw12YxK173UH3VJWkLfdnqRe7",
  "key8": "2bgN7jCDhxVLLoyAywPb74UeD2oXiCbV1mpqGHc4p14KBcEZWVNDx9ArkmfzvdGgKYouXQMdhY9iz5i9SvRGLGZB",
  "key9": "3YGnhBKTNTGZF1ssoNJMkMxozWJj2xSXnLs9DbATisfYxafZHsjpqpEvFczYEgFGJZ4AmnUn5vRuoKTf9cVpDSrA",
  "key10": "3MUtmhBmEdmMrLqnG1ijofjJUY6CmoeoidfqekjZRme2KmyB4spb4jTCjFTJpE34hSvWeiqttYmffRBfpu8H1nYb",
  "key11": "21D83oU8sY44Fk1m1Lmy9QAwFgQasxK677EhskNjQjviVGqDRk2wBmFYg9Gdgv3mMcmpFZaTZfxEZd5QUt2jKTcb",
  "key12": "QxapMTEoKcGnSec12eW9mV15NQEs7bcsrTT27qqToPdPFbxNWM3bdV6eeshPB872qaj1Tbd2AAPUgfhsURBp2rd",
  "key13": "3CjFvmFkqY8tz31qeqjzGwuhZGrD3Kc4G5npSVM9BwwvP8LUh53EPYs65mxaHkW1F8yGojNZsCYgHzmkks8q7E2A",
  "key14": "4GmUk4kgkYwnL1uqWg6Azh8GzFTvHyDYFMkmncobt8kjL9jX8fz4UvAQDDKHXCT7KNCzEKWqG2DsqmbQkKRUuvNo",
  "key15": "2n8MWbA7qASxr8sjPGHtZs6xSccWZTVxiv6Xqz5W1T8jDoPeZuzC74G5kqq5z1e3yqw8UVdTC7gBytPhsKFFbWnJ",
  "key16": "664gmnXZ8JCpZdToUY5f5STUf3NZgHDUr4CmKPj5RgoeyuEkgkRgYSTbxcnCi2AssrZ4cLDMiXenJ4M1nfBBacP5",
  "key17": "3SsdByjjjfB2mWeRwscacnFiht8mad2x6Ugx4DD9vtE3Jx23bkAXEjfbLbppm5eYN7E6EKjobZmmSjnBkWZ1FRbE",
  "key18": "fLNpJJXfAAsMwjFdTCJSvzzPfvLcxXZwnTYBfcFf6WCt2UsSkX6WoWtRH1pK41GyF9mcsWa1DUp4j1Ja5LDefZ4",
  "key19": "oUmvM84KdwpfyUTMNar6jKjcLv9CnaRuBHPFLJrcvQhkm8cMiDeBVxL3jDCGGsXa5TgyBLfWyqU2jLausP1mCs5",
  "key20": "2YjRExrH7qeJbKAAyuvZQizdk2wyudFFp6eikpQJLrCTghPPHc6FQJzRHmBUBMkHDEjD7ZfW5LLhMc5p4W5N5Nin",
  "key21": "64ujLCjLjGLS9LCSboEswR2BrL3umYQw2HBs8EiEWrgawVDshW7V7XGRRUtMmHYVsR4HKf8tJtUoVa43bx4s67Tr",
  "key22": "36NojrFFzEB4kyGbwdjHSV1LJ7HHD19keUwQm3Gan6Xfxisx2eDFritymv3JSMbVpKkppqTQbnN5VyAmJYKmQkaf",
  "key23": "KXyD3khghdpEN3WYKsuePFTv1rgyBKt7czefGwSdGGs8jTj99hHmBg1CbLNPrvBuQP2FyzThpaDynNuCWYugz2R",
  "key24": "31ZGMXD45cTfNEkcfvZQng9wr1YtE7HaUAMh7qFX8tzfWU6qREyfuYK39e9ZRGvWyM8ypMgzm65y1BwDS9DSzUJX",
  "key25": "dEFjFXBbk1JuojQN7hSw9qDh7CuEvtNzaHzAgvKbVBt8Gxh11r41pu3C4pK2Yu5MvRowGDrMBMLTZ9pxrT4S6oK",
  "key26": "2ERFqQSaHC28qJUSegNkUsLdWziTsnWPijqZ19Cxz26uhNZRAdDiV94fJBaaP2UACoKtaD5HX11hYYfgpQJo5HDt",
  "key27": "4sUqQd5PkGamheZV32uXq3R1VeVcANVHLuQayEJb2cZjKa6PcBPPsZXpiLDtYVbpmJUgK4zVqWHzN3JLWw4KjMSD",
  "key28": "2aUhZCKN8T8HFfeFYyXDJZQ1SdZoVtgAVv4znj1GMx5dW1zY8ukioXanRta9jSkFkukTfuz9mUiKLsYRvozXjzEL"
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
