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
    "66LnKf3nAgdc1gdCvbPwGYkpA7xBuXDLhNtTnhGH8tWuHZ3vPe79uNViUE8T6CYzJCfKpCnQbD1mcfyWGo5FV7mH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cSdgQxuD1jrTpiZo4Am6B8t6nzqmjxfM6ZFPPvuUzjSR5ywcg3CpXnuwGpVCwjrub7BmAbZKPyP725MieFHQTSr",
  "key1": "18BT2FKN3BXLnHfoiLcPbqQkLeTZcgZaQqmvJbs466bgjHzAYUJbFKmX5AoVoEpznoHTJEhjuEFCUztubRRnPsH",
  "key2": "2Drqw2bjKpGCwk7ZoyEEhaj9jwxEeHyAfRe1NgAUQoToiB1SuwQRvXQagccsuRcEaBP37ukW7Qus3435JLeawruc",
  "key3": "53Ey2dayykDaMpjK4BXkgkfxABnX98TcppvX8sdvuPiUZNiu5SK89C2mwZDVjsfAi3G4x8K4ELMhwNkZi4K2bvXq",
  "key4": "3LecWDE17qz7cTAzw4GT39vhqBVr37AZ11enA9qxFmxaSHN8PocGBi2PramzBiENpwYCq5izFLAK3vPxVc8pARFj",
  "key5": "rZRuvupSJMcefKmnFD5qjBoKdB99kJjnGXe6q9YpPh8H4JVjFWbdqNkXWPFRr8RgQox6ttnoZg9XVTKD5bQCYLe",
  "key6": "2cxf6AedEG4g4a35AoRR2j2Ai1uPxgYd11mbjmZoYzxFSjKtYH1hEt91sytyexTTZBZ4XkZcq3BpQCLBxytkXW1H",
  "key7": "3y8ZW8WqHmwB2YF42Ch4htyXdqd6cLaqFTMyWVTNYBv8RBQFFFkAjHKcAUauQn5GKoGASmDitLWZKwgE33355X7g",
  "key8": "4sRcmzqutWu3qW4Ef3QdVu4wU1WG5PotxGt7p5yctci1nvftC4cE8ihNmTyPwrSKWjDGKJiWxomyhF8bSXtjApsS",
  "key9": "QJB5fBUxoZUzBcMAVUQpN45mRS7CwRG2yyULmwZRmJB1T7eGb63zQ1dAs95N6AL73eL8vVAm77Kj4Y5S4D1sp3k",
  "key10": "2MXpzJcfREPUXPfBPKKvxcaawNABonkgpm6y67KyjrCW1G33KhnyuN4iz5ptGsdEFfwJkx791Lgv7F9t6wd4Qbg3",
  "key11": "wEMUoCXhCbtnnXCJ3rDSf2bUdbqi63M2cavFkvnwwKAoutxYcW9K3bBtL1KvrAy4mZH6gQWGrvRtB9E9nTTsYcC",
  "key12": "5vCZmsmcXXQdAYwYGC8Rfp9LCacwRyZD2RZsq41BrpYEdAd1RFGGTsxuVDzkhaXV4bPaMmmf7EtB3jzUVpZyLubR",
  "key13": "54g5rhbha8hcYnUZHPnVaVPzXLRms25HkQfPwTdaup8TBqtBvHRMimLf9zhLdoiszksoGfAQsCt9DkYwunDocyMk",
  "key14": "V665k4F1Jja2tKfyTEag3Ha1BFVVA4DKd9rejNS1BrbZAUhMCiFXALZ1uVmhfGdZFZfUnBEEzD7L5AmbeEEV6Xj",
  "key15": "36dwjRu3rPR8mnUtLohpPU79NomGarerxp3RoJrYF1Zje14v8jReVXZxxAH9QjXhq3XVuQECegYa9pDqVRPqSbe2",
  "key16": "2Ly8iLA2Mv1DAgUZaPm8CUA8xC37px9cRm8g2G3jNyH2DRmabT8RmWHj9niP68BxjaQJAhairFr59yxhTYHsVmyv",
  "key17": "3BjiJR4yrWQ477SipQeuJH9kkNPCa7GFN4vVdCrUNMs1ZRa7UkaXHgroLn1DMoEafK3RmLvDAnabL4mp9oqVPHND",
  "key18": "35RiHDarJPw56VP4gCwRzi4QsbKxZtk9bT8FQ18pEjjES382jWkNyYjyy5Cv88KiRqBUUWwR1HueVorjesgpLVh5",
  "key19": "3HBPZmVz6EEFqq2ryxPaSshbY44YNXqNuy1NmrGoBULjv8zCQYgGtqZVVGjydL3WEX3uMFz9RiPL2sAtfLegHK4Q",
  "key20": "2tWbZHHTeTSMdzgJG1TAFKEzg8wn5wPfhkMa1uV7xECuBa5hMmxBALtsfB3f9poBgDJ42Vwt7mZcikMbir1wK4Y4",
  "key21": "49qF7zAvWJiPAXSuQCrE8rWnbHdt5G9RgmPvcmANWgsjUAgGiL4jNWK3xa1Cp1YNiiUqXoTtwynEriQ4quce8TrT",
  "key22": "3eRFf3i1RgY45zU1UxzjaAEUDxJFjTjQS9R8R3DerLG6YnppqRaSoiCYM4Q1no6EuYsWfrqXJxacQWhvKCmstYXi",
  "key23": "24csPRRa6HX4mtqnw1F4GZ83TShRbvo2qC6asEGe9RE3BJ6V9npnboQcyB6jLfbPuvb8oePpxeC2E9fygS4QkSM7",
  "key24": "2mN8uGHJmA7ND8Qxq6YQeKm8GexdD5QnBzLY4yRQkyD68mEmXjFJmGgR4L7Av2wgGs3WVpt8aiKuiX9mq3E1PRLD",
  "key25": "4HfR5AxGJcTvHk3sgKGU7TExPSHozoNrRxJ5LBpxbh4TMTXT71mpxc4FJc6jkdPFQX7zV3F4Q6yiz4VsgJGC1t5W",
  "key26": "4AGvkH4qcQkA1sZe5VhECMDSyMQrJXiyx4W5Jk3bb2mncKu5priQSafQCvGyUdnkPuqhmEFszN9cJRdBuUfYV3LP",
  "key27": "3aasw1Ja7t4cbCd5LYFpZrNY37mqKk6UHNyH2GJw2oUC1p2mNkdbdwwcnzH5FEuv7L67zgHABCLDnAwEv6fcrKQh",
  "key28": "2Wuv3jbELsNbPBd9Xk224WzBdizixMC2j6kBKRTyogh5BNrnAnnhHnr79hesRKdUNC6qQAvcDJWByTMYvWVZvycN",
  "key29": "kosnBKdXVsJfmqrPn2B4KdmM6NWXq8y8qGfnMGXUqZLPEArvHTpmY5TmmKzy5J5EBYFd1hndRcYdSarDVWmqwvY",
  "key30": "nYx1KUD63BGR7zeN8hc4bjeJBfR9MQJM4RNA63BL5G3pPYELpijft7v7qKgS44Hn8euggCF9JL5go5GUfdikv9N"
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
