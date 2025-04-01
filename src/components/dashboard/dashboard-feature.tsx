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
    "5wrLvLAcWX34sfGHYZzosP8Kbyd3h8KbsVCTaVp1SszXLmqEEepiqsrmawKVQVebjx9NduFgCTE31HVDw2NBCKti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28oMRPPySRM4NvTbwMK4j4WeduwsJE5dKgaZpHUkZz1hDE66zXQT6Da7wHjFdiXCRJtTfWyfoTm8gQban8sYn4Sb",
  "key1": "5GLxWRQH66H9Fczpo93ZnJLFKZGbmFBVEfumJBBMUxMgnfskHHefQN3giCgATq8rKXyUZpqkhnxQie3dNdWMVbrv",
  "key2": "2CrpAd53u8WRXzWTR3gj7QWquYh1qG6DFXYZMA6qB3NMiSx774ZZy3rerspMMqQe9TXR6CqBqpk83KsTvo5PDASx",
  "key3": "58Vi1Vg29vh6tw8fUBpci1BLdy1bYsWs5yzYRaxRKVsjqWz7vg6thQkXeVpLee8LGSamfMCoeq3NvtuTPZeUaMT6",
  "key4": "4DngTGUXtBWpCnxJxxfmYEEq9Q2vEDmm3RvJAFqtBryMHYrwdbqvEDQRekKzbsfbE5P9KMYyr5hKwMJ8nApuyR72",
  "key5": "5S9WdgQefoa27idLrgCUkuyd3rUSg2ecRDXmbUQhiPCDxzeSeBvHZvfFEfKVsK2Sd4tj6YRxhrUYsitcJrtcCxNy",
  "key6": "2D2nahB5VCaPdGMed8Wor8uAq36pyu6hKDez6seQeFjRRbfoGpkNQsiqDYZCyPsxQFLCvUAabVebMQZ1ofa36YEZ",
  "key7": "VTBvQvBWFENEkhJW7MaCjejw5GBWu3X6roEMVurY7R1HTrbKtGU7qZue4GgrQrzzaT84XfZmRA3QYCcngzhtFh3",
  "key8": "5Uft5byPZNNJw3hzjogY2um8k4w3dKvyRwt1o6uxc3ypf7UpXL8j67yGzm1LU3ttEGFgGvhLmxtRK6e62BrGzmsJ",
  "key9": "iJLG8EgTvFriuj2XDNb6iCo9JKqscpoGZAcaMNq7WF8ErF6QGMKsAydGe2pch5VyrwMHjT9CVpJ6sgDnFSsn8FS",
  "key10": "5K7UR53RtxFoJeVA1g3ktuCFwcWpqHfDA8CAvRHWo9dkvWLcdXagSS4ophr9mzhYG9zefMWKMZRcbP9KYCgjEKYF",
  "key11": "4yZiN5onvP3wHnqRbJkQgTR9J1ivcncWMUtPB7U1N1EYEgrweXaKToRrRZdEp1AY74iQ5ZZw6ygmsWfU7XuLmKf9",
  "key12": "3PbSLat3WVM8C2pEbBnBCnXTK2VpbvPZhxHpYbdrvL9sxxL22hxkGvrgqDwJSDuoHhbn1GU7saPbqJeWeNpJZdJX",
  "key13": "4Vh3j8rJmgpwbFKYxyeZxAdhdFxgi97xfb1L8YMCGhPyrZZixu9XANKMMAgTJsUZQm3tc4dAERf6wGfUQVugphUy",
  "key14": "4EzPYiW9DTHdvDiwzhg9JBpV5cb1LraZAtwoor3tgLMqSzyccxZ4cCDxxfU1gxHeKwV3Jn6PTptwyyanBvcQVUoN",
  "key15": "vAHgt74y2ykyX7y2UtkXAc4ukHt11c9S7Xk7gpyAd2aDueX1pTmrVsCTQPJLJcxhfMomuyoB8JUrBYqbU2y3pja",
  "key16": "E6twP21aLd3CitWJ785w9WMPAzX3MS1FRfB6pmE4YaiyprhwPZDoDFruhMb1kW8u45ERFzUjBMksy4o8vbYBgML",
  "key17": "2MWua157hi59qURSVkx3MKibLzTtxRT6VUA4cxPzcjXTXBfJCJVH6BmkVX9tJLU7gt7Xj27dWxh3fnB4nggaEe2G",
  "key18": "5Ct8Wjwz9NfayJNxHdXp78BpDwG5tzCGj186QTdWNBobjRsfiQLpVbb1PXNXRXbaCZzxLr2YGFwqmMnYaFbKzrSW",
  "key19": "BcP8c3CZS77jqN63x4UUYLh6mt5hXHuKneJDty48dKQ6eh4otm44qruK6r77hyq4tMGPuYPhzrUGmqzht4RGiFz",
  "key20": "4mnSKqjqz4Ji6fwgwugLgMzcysGfMJQSj1NQYfEtnFcDbVCme5RM2EDGSMkRfub1k1e6RjGSa39YB9GthBpzNAfN",
  "key21": "65w4auk7zLczr7YcM8XUJVSDbxb5FKgEjCzQE43NMYNPmEfXwDb2FKSEzYvKCmt5NLoYg3xVtWRXhy9jn9yv6pqE",
  "key22": "5gSJb7R4C2q1drvqMY9ViXQHKQzuPiZAcJonnBB7biG6JyBAHBaLKqeJW3xBaYBUJoVHYmqjEdhiyFM1gqyoDsAr",
  "key23": "5CWNBN4X8EQza4sJ3sfjzjkwazVLQ7btsDbsoxT1XEvhezsAcypYrSirS7jKeaLaNKZxC8GX2T5qQDWonGG6RZsc",
  "key24": "4zfdavxwm2pmBodJ5YXcm3hgMuKx7AgK4cdkwRH6vG8TbCEtBjhwN4sXarKRPEsDoc46eZLPAfLFZXJPVnS82GBr",
  "key25": "5oE4CgHQwQ5P4vyybS4k1WyQyNkWuAoVihPVRTsJ4qh3bc16kprNLqVnn1LbaJd2w4UsBsqY5U1hm4pF8eMWejqk",
  "key26": "5XGKF3ZEpUSicTNKtrGVxQZhMj4xhBcJKj28MQgTxM52ybNrRA5NogeJ2mP2KJq1HeYBCREsiwUgx5y2CMjjbAux",
  "key27": "UjGTBtBUKqxMddYrvMr5ad7w4cTB8iT3MHsbMKDH442gFchTQhrQfqdPr6HP5AL6NpcbDvrrz3993KgzhcGdmCd",
  "key28": "Cm3UyFR2soK1iEekPN85N9pkPH5yKZBsSUhNimenvciDaHcojnbJ9BWzCqGpvyutUFRMQuJiRNXzX8pxorED16E",
  "key29": "3FHnKcqkBgCeJecBkGZHsBA2ULCvFShNuYWrAyFFp58Py8ddK4owJPh8SuvA84znqwyW31sUAP3quRip7gpH2qSd",
  "key30": "21qNHAetqbfJcTcpw6jBw95aN44wZSH5SjVHfzj3vh42kPESa4XDDAiRqydrxZbzKMP2ZADHde6WLWu9j3zwSndC",
  "key31": "34wZFE7ZMPvo9rUakDgVcCGVJNNjbXC7BsCLf1XZZ5pEjNzerUbG9pcby4kdCG1EHgjZofrkrJ5tUFNHEdNnhUNU",
  "key32": "4VbTTEpby8XFpYDWwTKBhrkyPTiJnavVh2mGzKvr8mr2NgDTAiUB2mgUr9rQPS1VjBxRuf8KBj4fGDDmZu1HEg9C",
  "key33": "45TNLHfUy5LB5aFfmL2ejCteYjhhV8t84Jbqge7u4VMFyS6e9J4pyhVyGogJszecxeaeZuZx8o1WFojYJBxe35qK",
  "key34": "5eJUE5Wid7aBF7QjzdjXgPME2V4ZZFB596ZW6hZvsCghBfQeWZq6AMipWQcaKJRmj9cUtJbZt8cmo2VqF6QtBMYJ",
  "key35": "5JBHy5gNwLSASVUywzPSA1EmwRyaMnQvuXKES2hGqdTY6xx9diahzRD4dz9yn6BFELYTeRk2kbYnvRcpZMA71tHZ",
  "key36": "3dkGiY9cWevZr1Jijr3WW1715ZXpwi7aAYy2kmsM5SxGk1zZ2h4pKCtaSY6ASrf1zqBQgz1gzxdMvaZTFq5p7hja",
  "key37": "3FeWQMRRtuzoxLWG7GNjnPeYYJSVVcpTkZpPt2pR5xnayNi9enGjREwuaPFftmVG85GaLmNHMs7RkHZLinLWqEXq",
  "key38": "LrPk1YZ6FXqCMwWDqjEX311D2iTkt5a6U1zqmJQYmHwkvA1mDkm1hDQn229TvrqJp7udUMwQNY4PiKTxyhbeZ95",
  "key39": "5yqLFSFHmzzw31L3mq4DCESbPsu2EV8fD3AJVbgtn5oemsVDZHfQFAHsxMZriz5PaVXcVUKCsvhWhcAEjbVvRiUp",
  "key40": "tk6mZ3RCvDPP4t76cS7C2QnVhjz9fZLx6Cn8YBiDWGb9ynDtXvnHBY7aP5enqL4jUgf4SwScVhy6pLdKdBoMQ68"
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
