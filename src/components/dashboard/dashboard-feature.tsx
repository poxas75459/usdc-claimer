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
    "4gkm69serbCm97y3G3ViPJiqaGrMQoM6AmioYaQUGXwyGXEi3sWsFxh2LmayJBfryTZBmh4Js39qxDGvyhNpyT6U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27gkVqBUWuJYxKb7sTS1zKP3AoaaynTvQe2orx9LrddoZ9k9FS66A3vzH74jdGdyZWrEAgD9vaqiwGAkxVE6uckT",
  "key1": "45A9ki7gYz1ZEbYXeduvjDRKQfSStDZBj3LzeHSUm6dNHZMk9iRrPP9LFVXtMePu5bLxf9PRFBViDdVmYad6Gt44",
  "key2": "Mk4MoUD9vEj4FoVRyzex8xwM2oqxVEkbRWLGVFNqwDot551o4dFCdwXNw4bFrY9sWxAWQBsHWS4vs1QqYns2roX",
  "key3": "48giYWQmuwq9yLt6x6Y3VMW94UnmFy8MrGomi7q49UYznnDyQNVNQgH2MvQPHZLtHRK21WiB6n8xMV357UCebUmR",
  "key4": "3a7CzxzVUamR82sXsgmBUfb6NuD5bBsGjcMiXgEWDJ5cRKsbRvHmFJYcXQ7MDvEJqnmmXtFACCDJG1QPJ7ftzKSx",
  "key5": "3FFU2QSHAWhTuudkd4gzgTdG6M6GyWPX7aPbYqTTTX8m1S5PJRq6g3tpoZiPJE2YoBaybwXi8wVyVTHs5QRqCZpT",
  "key6": "52p9Wu1CNW7zvGRy1zskPgqhzt4i1jRNeXtHW3FddzeL7KrTmZVX7f9Sc8soPmoepdi1ebmrHDPHQFNdkhhx9Qnk",
  "key7": "WEKxsREDibuUpj2RgjYQZCL2hZwhfB8j2LgEJBKiAyKr3Z4jevc6hzcPHTM2eGuBVa1x2BgXbRbd38GezAn9Wx1",
  "key8": "2MEumWh1M5wuKPFFxBnyc42qyXrYp95gdYsw1sPh4fUtNLySseHCnioGGnW9A5fnyReco8j6sjYfXGc6jVLbGnju",
  "key9": "GkRQWKdMcd4CWSoYMchJfqTsvNhzJqg4Mx6Hpqocp3L31JeV4JfecVTcv6j727QeYqzQYB6WPUU39PYPZ3GVzT8",
  "key10": "4p88FMBPbwpfttdpALXEAnKiZ1VvnwEVWe2fgy2mRRQYQptNzm9RJ8wKWPZwsFDAZxDL3zh68Pcrjr4GGUzSUtow",
  "key11": "5HDhXhhoX2vvVHz1KHJhvQdPqTtZr9bRtfRhixBd1MKtcRiUMBexBBWy3WPT499QhJdDbBDvBtpKHNZMsUheUv9W",
  "key12": "4HNJodDXEBKcwzq19xbNfePLQJiegSNGEPBYRyWf4q16oTHB82XYTMBfXqrmDZJfRh4p5c51R5m467pnUGJHfR6t",
  "key13": "3swKuKHEo6Xi5VkXsqTsbmzSQCARbtdmDeP2gWd5WBxnMw9D7f9nZVVw5hrX7N7j3vfkuQEyh53To1uR7EmDhQLK",
  "key14": "2fiGVYKYSuufBc76VSCy8zWbt3Q1smo8t14EVo7y6XXhdCr8SsssL8697e1dasgScd9KWPNkG4inmEdQBxex5DR",
  "key15": "2ecw8ihstfcyvR2WG8MDqoRQokgd1PRppnkUyYZEYNmhVv8SBs8mYskgcb8xj1dG25HGkeHpgmiJeJ4HG3nMWBZV",
  "key16": "4AEFyUqHAVbTxq1Gz7pabD6YJhwmnT7hjCF8Moar41AjRGeXY1KrbCZcL7VFG1ReoYR9g22bQ3Mnj4NJfPrL6C35",
  "key17": "2QH7CdyWiRQszXezAytTvGG6WzoQFJTHyU57uPZVu73x9poRgDZNfxHxDTCGhd5j1G5LTg3CYfEDjR4xH8R7Uy5e",
  "key18": "4Q6kN4Cyq6vnERr8SjH1ZiaXzWZHtuTnPk9epwx4dDfNVsT8F74LrNieNgzK9h7ZWBhH7uVnmCmZjG8Mu3v3GfUE",
  "key19": "4KccWgPELMovQHmK4sxQqR661SXodUXfvX3XpZyhARUN8bdBNbxf5gXd3bQXWzEQzC8bxvKrXYyuEDgpg22mp8QM",
  "key20": "2Ehgu9A657Dv1NKgemaerCxL8wzcPbmkyJ98u654cEkxd9bJrKKEHPgYeeag495SreZ2bTZPe3QBFcTHQg35xHbT",
  "key21": "4pZzTk1XP1EYUJDi5kQNU9VqSsngbbV75Na2hdYYhrSpT91TW98n1M1yFsxfBceTg8ppYe8qZnXrs4WAGZYxK1sA",
  "key22": "bjWHa4mnjFJq5t3ZovdYrNjFNFwec7UqtfXWebYiRD5f8XrnpxZdQ5vPz7vRaaXgc92xG721KboJf7wAFRc4Ryq",
  "key23": "gbuBDCrbD2ftJ2e5BU5hw9PDzat6YesRSHgFy6DYTn5Xjs14C1Zb3M2FYrdjAAyFMSyPc4KuXjm8hjS7jPxh6Dg",
  "key24": "5mTEA1EFYhzXkjZ18yXN6ATWDJRr5b7DEhs3m4GEZ9vi2YAJFntgWrHjLXX81ALxyV5rMxhFFZry93WRYDy1djRL",
  "key25": "FGxJt7CY5HWkxiGkKJEgNDeRNgn5rkczcF8zdAA3LkipyTKVCfZ9TT55GjCN61dUsndQVBvBLE56WYdLkmq945b",
  "key26": "5Kdq9jEYwiYuutDmPsrVyUePdZjBu5hyRHpicPW5eUexGwbArPigVYSPaAgQvAJK9sWmgF6arHbibv67xRbHJ1MM",
  "key27": "4xYf4XvMHKL3k4yGCaJsafJ4RWzs8pKinpC75k1FNBsoVQufgWBLo7VNzF1oYaPTBSRYoAdThjYPL9iJXGppeQAF",
  "key28": "5YYVn7YNchDUaDF3xbn5af3r1vMk5rgkq82q5ib16KLSHL87gibtergWcJSrG3Yn9V1zTS35XFX1iJt43S7mTq9q",
  "key29": "4xhY36V8WspU3YrX5JvPVVGUip8x5UgizNvxr6J4kjLAWNni7ziiRssDnXB3WXfJX7J6zSnRq7VnJTpJpHB82Rvb",
  "key30": "5EMwKKCcRuMKvGnR12r8HNby3RXDboRDuVPPEv7YJXQYTh8RpqATRik3vSxWVtjNWBin5fBNnW9zn9P9daxf9zVi",
  "key31": "2tHhpCSuKQ8vMh5UyCpXR5xQD3GSw76NNYVzHvQPSPY1q7HoWqccEUMRQ1va4Ym6LSyuRMKRcNWA9qWfAx1Tu2HM",
  "key32": "2LWe9V8knhtEbN4f5uMWk8xUFYrZCVfkmArdTRQS439xfZ1m5LRXfuUDwKxUdyC9ZnnJZdYTXHaUjf6FRk4z5Fur",
  "key33": "5BhEDktSM7VGjdCe9mXSQSChdkNZcyVU7Bhcy6eTYv6Pq4FN3o1jRDDZRT4pDBp7GWqj7kRYLQhAU8pWAf3Vc25o"
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
