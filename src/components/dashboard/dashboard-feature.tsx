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
    "4kVP6yqUMydKErwMgDzkQcJ4hXRt94qFDGS5vzwSZgntzJ336SorZMHzbSDksoz4xWNtDSK2dwid2KAGKyRH8KZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XqgYF598PHZjv1BexTcgw5cDFpe9S32kt9b2SGsuKtQBz7FMK4ZS6mUB5vgvj2skC5rNJLmDux7FXJvpM8RXNcH",
  "key1": "3DeQP1omAyK5niD2SMUv8gd1dAwW2HMAv7L3zp7tVgBnbjw7pvZjTrSF3bRwxedhyXsRFLnMXyGgapAVVdfJBLMR",
  "key2": "8xWW7c3cc6FzqZMpG8Fy7bk5eywndiB8mUJA1qGBUxZvu9uAXw2sEia5cQDbs9dvS6NchAiuBJ6chTt5mxv7wy9",
  "key3": "3g8M54bZd82xg68Y9yqGf1tXGyVzabfPVStTA3PUC6Cjxz5CweBdgxSCCCPUgX9L1pFSyehUdk3mAWXuDnqvKA4q",
  "key4": "61bQn1ZvQNdKDeBEXVe4S9uEv1d9QMww1kMNNuUdSKaioj8uNghzw5opxrokFco6Z4D9Wx3J8b5g3MbHsKNPUxzj",
  "key5": "5wh3X1mszvj6h3TxBzcAiqZ7AHd6fG82PX7FLVEp8wvdvpHowQfdC34vsh2MyJ3N1edkgSvxZMgDbDMnoenWP5vm",
  "key6": "puWTNaQKeoSHbKCWM9jPvnkSWMjsjw4LAyJmiQTQr4WHie9FYctMyd3dVFJtqvsijGUMWpEeuAAoYZg6hrSqrqQ",
  "key7": "4rigjgWqe7MZD166zgiee5BDmpZfVttsQPY9ddvCoFdhaRghG3AGUQpFQWLR3EAFpcTjrQqDwsCJpEP2vyi7f5Rz",
  "key8": "3ddhxC7Y73AC1SDjEgY5BTaPVKyZe59s13wWDLvJRFjNyfd7Kqx6Cu4hANUucPQnMrXiXxQ7mHtrfThW3JiyhSY7",
  "key9": "3c8s5Pr9y9de5K46bXmJSaiApLpFrbDe2mCp8pLo8G6VmbSEt5uyNBsGDsJfsomBtKpaRyqXpJ4jeWVWYGsQGsCH",
  "key10": "3RRSFTnLXbeEdhV6WV4cCwM7GopNvKnMptSWibSRfHAtgcs6XqTo1GU3A3RBokfrCetKUe9EDrLJ2WuGcnoyrPBT",
  "key11": "434fnsuk2EtPWmKS2sjNJxv8uyH9n9Z7SPQn55VL6cj8T173vE32L2Jyabnyg9XXGGjnNKwLnehUNSNN74YmTJz7",
  "key12": "gMaZ8gzPasLeVviMpLzwheZFmwJfSdrLH9JFnKdEijNTmKuoYGcX5Pyz4KbitGnUtuPFmvycLSN4Wyn7ARRZBfq",
  "key13": "18ti7Hc3iR3qenNnxrpmNM6iTyC5Mdycxm5prc5MfyX9BYCWw31KTXRJsRBaU3QVgMqy3PsBmp9eNr6VyNCQiTa",
  "key14": "5SodcBRBF8upPecNZ9T1mU5w91GAoHrAdbT2cLDi1PN7Timq9bS6vTmjGFNvYUxYcw38NaVJ1Vv9CEXxnPVJj1VZ",
  "key15": "2cWpCWUp5bdAKahr9N6xK94j25hHM9xwEVUmthBF2si8RdxqzhAvjUPQTwSVsBn7YALHUxzWjJw55Ube745WcsQ8",
  "key16": "25qDtFbAf3SzzqiR1ECPvCyXn3PmX53aeoWZs5K1RhGCTrw2puf6ErXUEDa6ebv5d6EcWceKg7P7xqtCKLxxkpV2",
  "key17": "3wB4sq8bFfUCRgLUGuBsY6AJycYd5b1byqc7kTYCNQmwnhUm71KLH9jXrqygBrjMtfLzUHK7PFaqHVzzt957c93r",
  "key18": "KBQ7HDRHmpgHN9abR8FNxB38YE451PSkvaowzB7d2hewPAC1ju23JYpaVwQL8HFdtGuCkak1K3HUbVUcgY1Y5YA",
  "key19": "33GUq9bgJKX8Uvyi5zAkeKSUnMGDLWbHYzVZNNUcjztFDfw9SYzNHUqm3URB5KRZfUSNL3yaH9qeJ66beJW6dtrB",
  "key20": "4BETqd98dMxjVFcdUR2L5nwFq8VgM7zUr6wtyYSkSJxnvnixk2nCpUUaLTp8DhJtCkcWSaFsmMA9ssjC9rTdWudQ",
  "key21": "2hyeyECCTDakS9H35DkKpUYKVASniiaKaS6i8AxskZiGG1biEAPB7P9k7eJd3NMw5QPcGNMVKpjkQetANFVpsU3H",
  "key22": "3ZBJ9uMk5QB3StAkVGQVo6SP2orEMrqkBssLriEDZZEC5ySP4JPTRuHQsdtdaFKkrJxFCeSMymc67ZJzieZpXc3g",
  "key23": "WAPMukikJHM6FWFKFJNtfYAeuYJcjP3YGKaiCDonxTeCPgtFDdtapHD491VZrTi4uwg3Sonoq54k91rQbjUpEzL",
  "key24": "4t3o3GEXq2YHVU8FfWo1drUoc5FKCj68XgcZLK6rdsSx8ttxKhkAYL7bokSQ5n6J99W1QGPRmA79N9oCMWR9Sb8U",
  "key25": "2w3MriYQySkWGFSzVG6qE9G1JphpVtWKhKsYdqjzjJfVweDq8JwQD2FheJyQYJ4NWJ1GTNjNd3Cf3MDSUVSWg14q",
  "key26": "2Uy569Whsaz6e8HQYDtetK6t7yTiBaA8GGszLR6FN3B57YEFnW9Ei18goPzVZ5nNA43wdHpGPRrL1Yo8yTcGDEwn",
  "key27": "4NCkqa1h6ow2JTUPq73cpjTQWwV71TobYZQFgXtvndqLKVRZyYXmAMi8wDoEPaJnCosyZcj9WUz1nzVXJ8KczpCK",
  "key28": "2EPqyaZw1oJdWGPbQ5xwDLVadG8Mjb3RWCtmCLRg6EgZje93JSYjDVQsUca5qNDCWoVZc9XUpZvEmuiAmfwAxBFG",
  "key29": "21TFm3d6TZfzGJY1o25MJ12pP3r8gbARaBgCfvZgcQgxyppE7wZTZCyHWV4GAR7eWxSyNPbzf49qBtGugk8JMTUy",
  "key30": "6KkivKmsAvpqU3KLdM8ist2NYHyrtemAh93oY7k1ka9WjRPYzadhqXM5fgmdRt7hqeQw9pLcy3UEL1nPXNUFYn6",
  "key31": "LoPNnD6mBQkcWK5zZZs8ZagCwumcuABaugHHfq1LJ1fW25qVQe48p8LJ98rCBjhWgSnBp6pahpnVjhGbpUSTDwv",
  "key32": "3iiZZrGfXzqmT4s9apWE4tqyzpNUqgBtu8Rg2xMZ4Rd11VU4AkHc6c1G8ywNVejdzcHz3cY8UxbSGrp8GxSJtNHD",
  "key33": "3395wjs4G9Suq3TckW15X5QRaLWwT7f6SJ5ZZQycnUMexXJcc2HnfqtgsZn74HjhdY32GoB5Z6bjUipyXSmqRqLK"
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
