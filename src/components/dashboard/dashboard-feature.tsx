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
    "2JQYd5yoEPFnBVjdewkicFRJMKcS6Vr7SL6eQ8U7FYMdBP4BcdNVzFG3ZgnGRmXd4Z1U33YJYNrGAPCDfU7htD6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Sqydp3XDJuT3grpcRKiFLiYT3Mi6TWrDiRdNk7tz7PK1NG62HbNVfXiw7gtnfkFvnyXFss4LzEZMYeE1assShki",
  "key1": "QiMXjrKKVrbF8qmkTdF8vsexaWWU4UeTgQNKCUN9WPpbTy5oxee8PoRaqfJZ1wnWcmZS2LjCn48dvWozXnXXiu6",
  "key2": "4487qZxFivPqPpZUcWskwsMT1etV733hu3URN2c4sZ5DQaa5vg4ZQtnovCu7VqKHVeBxuUadakAEwkGpcE6g5eBL",
  "key3": "258rvaDij2RGBw2FQruLZ8asxnXtsCopdb5uZfVeQiNz9NMzVjcn38bywM22jmrMpPjkDXSkvnLHtir2QvZNi1iV",
  "key4": "3rmKuXC51i2ySVtmVw1fuAaHBeZWLq7q1MGm976TrCCBqwr6vVrFUjDtVtDUqCHhi9Zf667a6fVDhY2dBaHcy6n4",
  "key5": "2GQuCeP6YeqUWtUty3AuYP3BuaTfiW26qcddHBwXPgibwyhqfMtV1kjC6V5hrCiDBLMa7a8c3KRT3Abn1EH9Dc37",
  "key6": "eZxSVGfwQiKw7hDdWj6jE2Lyb2MJHN6UwWDj8E9GjMKFHe8uU9bDX1YKFb2PQV88trXScRmaBsNAXAYQCrsj6ss",
  "key7": "3ndpPnV59ghacqfWnh3NrSz3Y94P83p63sujNZFxA2HJwkjBxfm8t5x4PHF5AfiGw1AcYh8Uus6nNhvaCcc2P7R9",
  "key8": "479nCD4nrgtymB7RLHRs33ZvEdvR4nR9HfFQBpNPC9TsUHuVfTm5QHqtPQMct3zrdjzsi87iyjpW1dZt9acw4BW2",
  "key9": "4yeqM7UHyvQ6UgA6fKqPx7e1EuKV2ifUWaELfxpbKjfLp6fKaJKjEc4rfLpdJqWFLvDCQRTBEhHKQisHyT7xSN56",
  "key10": "3FcbYGXb5jpwMa35FWrZiH2gM5w61Uawgmt4LgUhwXAdp4QrthwbJ4prq5emQAYXrBfqdM18UdAepCo5exBKXpPy",
  "key11": "LwsRZ9v8XVgHAM3ARMXZg6BB8fQN8A44bYCQrchtXd9q4bhqgvNLZUefA1x9kYAMeRy8592r5GXjGDSQP6KGueR",
  "key12": "64YjwSrmtH64w4XZqA7X19DYzFnbfHy31thPvczATQrUnPjcadceN8w9fPoaZevtiNuLvXh8BCcoPejvBAec2s8o",
  "key13": "3n4Hh1dbfDuofYaJyhQGkWizMdZAHXbqxQ6ATziD2YYnDq3Fe2jajNnkLsuGo9jQ1XejQ7iWykjRA75MX4ff5ZLv",
  "key14": "3gNfQvfj7rkUGRUFBRmiLmBqa3Bxt5KQzLioVXVrHLQfWrcVkuRYyQ6yNQv4pgewv97VtkjnrEeBLGMt5K9P3QMT",
  "key15": "cJ7iKqPenGAB9qz9AFUxfCnkVJ8Q7SikjewXTTgWLPAcyUPsPnx8o6dwbjLUzmdhr6edTvDwVB5LJG5Tmanwqax",
  "key16": "4mXxN34kB6GyRMDQzzk7HqU7VWVGrERk41WFjEAR7WpkouEER4s94sCP4h8L47diE3v6guj75sWpRYTDwWSkLcFS",
  "key17": "4dc86HWQajdzCYYNGnsC6hiR2xFH5zBA2KogeGPrC7kZg5r3TCJ5iUEqNpTHMxD3TWTsU6VNneTNNcdWWf7Vtzr9",
  "key18": "3ARkXpERQB3Lsxfv7NvoJp9kWch5HdZju4LXbHE88tNCT2YhSfhcGppaFCCfb3dr1KVSxrSm2VkDyzv8nCyYP3PH",
  "key19": "66YvtW4gt5PRPpHdGxHSiAHPj3g3Ya4hHTqLxo8LYpRqtcAKpDTS86g6Ajg5Hqb6njt8g7ZWQb5og7S8jW6PGE38",
  "key20": "2jxF3Wf35JAC7Hi8SeRCyNDVx6wrMNovZbppGsJjBUs7nN6bi919cXr8PU8RgLFEoRz3DZEnnSLeLSNXsco4YVyV",
  "key21": "5KYenbMm1ynrhXuPgzzyopF1M2jboHbQFSPRD99xxhxvvr7cpBaLfj6paykb5hBD3utoKW94qQxRRTSGjK4NpMGu",
  "key22": "YkdmFe5tr1Q2NJLUHcnYaRkCdWcVZcYq9e9hc27VaZrUypkc85bVHLSzmWHwDgR6WvqmE1f4s9jR2tuBuCASXLS",
  "key23": "626jqBHNp8kB2NCbkMnXujAQumZVvYqGXz1PoFoqeWP2kahCKa3CZhvK12YbL6Vdc579eBGhtwwX1rgdcbjwrXvC",
  "key24": "3KbZbPP3g9LZLv2Rv2VwMtga8XDW3omdtfPoRPciTKa1tm4tPyPXwukFixwdTnFYVhwNHtvLVmtUqfmt5FfZuAgt",
  "key25": "4RqyudpaK369HVRsyWAtJNZcUQw3VRt6ZZG7Sx78gEdEuWYVdEV7otbWHdi6tTJWjtiCAHqdnTYCJFtE82hQFq1e",
  "key26": "2XRawJFhazWVxifkc93twcNT1MUgaec1rLabs85wCK7nAGopbwAmSy5mQWqPmzjNiF5wbB5epnF1vKvwDtH9ytLv"
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
