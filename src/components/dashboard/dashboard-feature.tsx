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
    "5SwB3BsBtgENYhkZbLWyYE7eiTf19qHZq5St4AoLCm3p9bvB8R6hw73VXX2PWRUirsj26CdiKsv1iHTLiarjqvot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ckrZe7Cq4YCuqpD6TKPtQuqRzGK2hB6F6S1zX4TzT7B7U5PXzQtqtcC2Z7wLy2fF2mx13vy91fuyJrBSSgDB5Kz",
  "key1": "2CzSivD2kaJNqhEqMNY7jJj1nZkv39bec6nR7ckKeSMwyHUPB17dxj1VZGV755uHz1SVTNW1tVmJ8KNUKTVCeoJH",
  "key2": "5MG5svPcN86PcUZFXQuvfyA13fGUXTPQLawrXEiYRJBPsswrixMsN43iPDKhczJTFPwVkRHZgHbCNp13vYsjGcMw",
  "key3": "4PyfUjUT5H7SqCieuMM4mTNn1C8FMH9aB2kmLBxPcGCZfQ1DY6rb85Ex5aigL3TQH3VC1XcJDFqwJxGnvKGKCad7",
  "key4": "2vMF7qRbXhqrz94rDrfwADfgDKP7A4HCtzSzqEzyXD7LGU6Cr2w41BRHFVuAvVcagz6yFAv3ksBtGjGFvg1B21m4",
  "key5": "5usjfkDEx7CwbbrAwn8tSBUAJ6eLnK14899uWYKxBqHFifoQtKgtjuUbDZqdmDonyPnm926nMe25w3eAs5Hb6VoK",
  "key6": "3aSNeGbrnsm1X9u1eRAbPt8hb66ukJpTYJFwDssUoKn2FUfqzrQ7zvgpZDBw3E7Pw4Go5vP6VF1HuowyeaBSshnX",
  "key7": "25CmxosTF83PdiVWyHwvSLPZg28UW5DtKmQbw844BjwENAzsy4cRH2s9FjAAyrHqdCCxZbuXfGNhPAWZgLcvK5ku",
  "key8": "2VWhU5uRYyJKgAZXxnh9n7GS2EpAhbNnQv5uEMwMmvWhiHfyc4qrtzqJ7b8xU9WUhAF6pBcefptUG5EzDBQQ7bBS",
  "key9": "5ZnmYVonehu5PCaghVDAgs18wANXB56yEQTfipdE61j3uG18BqkjkdY9Zu4kPNo6pafVDECmZ6ZnFoFG5HhA9ZP7",
  "key10": "LewF4thpWLKHAfyLRn7h1k82Rt6mR2RsF49Jx8Z6cSfogtMFybKPHvDEyqFqg4YPT3B2DMzgLUWt4j677ZL1Aas",
  "key11": "4qxcn8sfeCXLcHb51eUxZMdVi1Rc6nXC8aRFHru4vSbTgD4WUywhHfcS54WXUmb4cZ6TJ3ccNQFbcQ1c1EMFh1uC",
  "key12": "2wkCrhfYfUn4FobGWq89xvXQfZH9fqLmBbgSZhEGzzhrRz4Z5k8WuBS64oxVMRPuZVaVB66AYZpnQ9LABqS3HkzL",
  "key13": "5D3yNvNghnqmkSAapakf6TD7PoMXzZ8NdMTXv2jivZ45q729ogdnGryevupNxyHBGjdQ5yQw1z74KZ9PvUL22hAx",
  "key14": "126jwfK7324RteXvvYBMMpf5RiC9fMdffRmxuRF1HzYKCKhS62B88qvnHvUhQm8yeksTeHwzAJNH6iw1VeWGTwxi",
  "key15": "45kb9JGGLSQjekSi3rizrneJp8WTGt1kWA8Gcn8MvF5v1p2ZXLp6pD4RLz4D4Tx1MvBdyTnjR9fJNKV1Dyzz4uxA",
  "key16": "273NdRsHgs7zPr4pvyuV2rVRN1DWQKDqD7MyfVw7eQdMZuYbH5bKh1t9XiRPGBHh3WnmT4HQ3eHvU2sukrNmZ4ej",
  "key17": "2GDVQwHhLfboRr4XqZv5N9xdQVA1hjJ2a5y9G1rR5GzqFdHirbzWkYsXMpHFWGbdeUikudX9criw2NkeuY5LUVGE",
  "key18": "diia1mpjG4tP4AFhRXDP4hfiALnt1rfCPUwfitkmk3Q5mwRnuTgU7Q2JLPByuqzoYLpCPJSdXSJMpSNf2cBqRME",
  "key19": "2Yei2QkuLvpxTLYxbmTVyRN97nug5WYQJTJK6Zy11Gu1ztHKaPSgVqferkGpMVVd5nuXKX4A5QeDbkz9jNvLdx48",
  "key20": "5hupq9mwAVEtTHwHpAjHdfETZYMTvHE95YUvfXezhjRh1Y9W9AVJ1SB6xyFPNUyeMp4o9rrjeZYckAphfFpeSQ4K",
  "key21": "4wYvC6UmFVyaXj7Ld55ExXicqCD7vYMmAAWX9rGr4Cbi8v6DQmpUWFJRxbE9s1UPqQqk47BpmL8nB1ANSe6rQaPV",
  "key22": "2MGy3Y1n2HXfB2amPi7gkB2vKiwsHjYWQc5n8yumXEjLNKYM2bttrFiixA2UxdfZc9DCkoMabY97uDPsLwDQ7DjB",
  "key23": "4npTSgb7kmnF24ePmfb4dmnG12sM6ipKW5r1VqwXjgjUx3sGCzwScrWBTerV6YNykchCHsnMbPbbiqU2MPTfC5wE",
  "key24": "ho94hYj737a7KXoFVUm272rpaMMBSFKa1rHNkHAgJT9Xvs7jtA4RJz8nKWzaxoiGMBwWy5jZkkPCkoj1UEF8d5C",
  "key25": "63XMqCgy3ZUcyr83ThYPBVfC9mdFGdeRS6Ze4hQYu9C55MKTHtcKdcTGDfGYGS93PUM2HAxHABQ4Ky4hJBhFD24r",
  "key26": "2nDeSrVKFqPdxBSXULyksGFN5bGK6FYGEbsmWS3xkzKjmzqpXNnY4NvBfHJuvdCX8Wg9g6zSuUQ3UMHzkJVySnad",
  "key27": "3LFRsPdG72J3T2kVY5dLnjwtfPhmY3BQfj1HA6FejrtUZpqUZt2Xub7RMAMQST5ioa8n1obkAAzU7bSNmfguxVL",
  "key28": "4YUHLFfj1t8Qz2CnFNyJnwhMqYdEaQaa6fbqPre8LhRiMiJk6ULUsucjLEeHoJ1vVDQBTHHFA5yf2bUryWR83747",
  "key29": "5tsydF8JPcAnrRsZ4NZh1MBhsSoMTerRcErUn9Uo5CfjyZZhFg8aWpdZgYEXduiqMJoudNXh96aGybeQtZCD5bka",
  "key30": "ufNwVoUzPYYArEw5dDmYsdru7vYSKq354AWp2yZiEQoLLAkHngLVqnJ5GFaTz3kPgAoH1rPfWjbQo6bQ4J9cEbr"
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
