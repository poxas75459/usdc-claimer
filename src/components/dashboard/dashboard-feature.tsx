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
    "4afg8ziHAnWUFerJaedFZT1TA1AHuCeREE6TKUvXKi8XM31hSauF7tXbxi6CkzjbneR7UGUfMJPQWxmuQBPbGfYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x6kVewT11ZabkzBhCQoQnz9LJRuds8DMBPcwF1rSwg3jV7gT83kQuxKZ7TnFueUyDicz7MpgR9JzomzDPKZG68F",
  "key1": "3bBre2tCpuH6eF8ai2hLs2pjNEoSP94q9GmRgSfz6T9pQrLuZHFU9JUh7DvM1A25ioUQ1MNJ5ZMzykxv8bBdb1my",
  "key2": "39T1eZa5G63q4XKT67jQBpPmjJBhkMEnMXnEjaMBecgCbySsPgTqAJxrconJMHviGBaGwGRpN4zkpkPLoPiA3JoY",
  "key3": "nj6o9syR1irjT9JsVfQadv7YdejbkcPgk9rEHisKtNJkNZuer5njQEQkKi4u5BRQyVgoMJeTqo7FtzU261sudts",
  "key4": "21ReWXnEcyAV7q42xQvm2z5Vi3sk8BSYxkrhMfUsha5jHCEDokZToprjfTsanaLeWZM6GL6NtKhgxMQceDQYXfji",
  "key5": "3pWTNEUmg2nWX1cUZH9K3UaYEWWTBqtUXkk4gykFi5UJ37giiL6ArHrJDXnmN9JAgyfQxZqHMiyNGrDVg1XkUUfZ",
  "key6": "2hAQrYD5yMvWWqyfJL7R8CBMGiZm2QNaNqyMvsNjt16DPum5Z7UFSiPk1deAH4g1ZesEhVdS9gnL1dCz6PXb5aSi",
  "key7": "3H9viXkxjH6XpubCf6zSDCej2zeEyf1ufwWLFbWQ2Ut2LFdEXfod3qj8ciA5EF9oUXQ3GwfWCPYFmVAp9TErDbc5",
  "key8": "4XBANLZGMjoNNAXHKWA271ewD3YrZMML3cR68igufLQProPTbc6rcptdk1E6QRchMFo21ZyVwvGy5BjyNHdKhYAM",
  "key9": "2gd4JpQYV8ypgDAfVwh8GMRB8g3htG2NErSMpjE5rbtvKme47SoSXvzNQ8bgN7q1ng7D5oyxPjca9WPASgqyoJMZ",
  "key10": "CEAuFMFxzSwZiXtHeNE2zwXdWQNaEyopP17Ab5RyBuWvxaeGqtqXyvQY25nDpeVG7kcaNiyxtBTq9emLGZUWRMg",
  "key11": "4rbHgjcmsijwiFF4V6NH9SSJE7ckgLS3B2he1YVHM9t7bCbkninrhxJ3jG3hfqCWCbrdUJDpPmdsj8nQfsa17zDQ",
  "key12": "2zb6e3G2Dcr9qWiJvhzqy859gZTf9MvsYmfNYV2d2eNcWdRe7EUXUvGJc96yaercsUkojoqGm4yB5ufZtvydkLKw",
  "key13": "3cbf45agRtUQRUbkpQeFKt5bs8MM7ywKwRXatuQZDMfTw65p69nejp6zUznNgpi453cDhNdrxpqSro4U15XPBScM",
  "key14": "3Yjck3zcg3i5pXQRHN3AJzhfLboHekZMXDV49fxv4zayn6TaFHGmzYw2U6HP8UeNxDF2RDYKnsPyxNLBHvDZmspA",
  "key15": "3ArNMWaA79XcEudXcD137hT4tnF8zamiPZuFmDpGDkEcZtmGgax9RHrZaZLp3UZD7VbjUH2dXq8px2yyn993HcrT",
  "key16": "5WphjLxzR2f8pmNRRK6csUkyyG3szm2HAvr2Duz2KR9rjjt3mV6t5jSZuq9xgVqTwTf24hpBd11iBTuiXpD3hWfz",
  "key17": "3yPQXabdr3oGCKnpQh7J3vu5pLc8fVjpyeS7LCVjeoukmNm1cVxLsXc9sUzKNHqcz1vcV4erjxRV1i1FDcQi2Fxp",
  "key18": "nnRhwBjGRPX2quKTf5ySSSCf7cNqXjLAA17uCv9qdFsk2nMFXc3GCBM6WYTmHdVutHip6Rgr7EAMH3t9KCFGqxJ",
  "key19": "2hganzMbem8hkTDsL3w3VwWg1Dobtj6zzyKH4JBTnVqxhCiWSk8wq1FouYR1J9Jz2VTM3zmu347HMaCKkamy3jb3",
  "key20": "4fASQTUkNefhJY6PEqR4uG6umCgj1h8i99Nqe4qLP2Exv7mL3uGyNmvqx6SkFaMcViiZG1hD9PD9bahJhkmmKKSc",
  "key21": "5Gjfc1e2PyEZsxL9hLkhRu8WZq8jBXEE9NnF4xXgE3BT5diJegpgfmqjhJV1mcpDYNraijKDEiE1pUHaNQrUh1Lr",
  "key22": "ZhYFqfu1s2a3GqSQFvv9b2sNvPFyUa6uQcj9X7PjNrq7hdbRNhis4vJ4QKK47E8U6jFKN2jJusNjx2SYD46LDUm",
  "key23": "2kYk2TqpuSfUnabDW3EeHzyDtySqQn9SPXePoTLHwWQ8e1bXzomjfZUrtSyad7rLdBFenTa4K8cSK7YKd34Lx7Vn",
  "key24": "3uN2XRw57Qu8EMxsn6W11uVauNWUPzyEGbtYnrBvUDMjbJCqXdYwf25fabQFu4A7TM5FC1bKnEsP6jWhJfyvvRV3",
  "key25": "5ixAT3igrWWcXH6LJWZ8gs91o9W3UnyLhKGFXmjMW9gz2kw1avKf5M3aSPfQVSvmVR8ZXR9CTwgK6beaJqyzDMdT",
  "key26": "2nsMX3stL2xX8uCGEXQCeonE4REUxrBMwBoP3j5uoDacgoPRs18UXFYsrwpkF4ZcH1mHtnzv7aMJhHqSdimq7dga",
  "key27": "38B5kWaoqNoNK5EJMmm7u94KFaav4BEqLdo52BUSdQcmBC6etWTrALJi6moaE98Tdtax3XaTU48CYUwT8bhciRmu",
  "key28": "44uhpWot4tXj8NzSR8B8yVLiZkNoozhWsLGjcdznZ6SudcQk3mHDM4Zv88DEj7T4SWrF3DLxgztZn2KjG5NVR2do",
  "key29": "4utNzQpVvjUEhpiz7Vkzw6KCxqpRCddmKoWz5FzFjDv7UtqzVXCnqS8HLpemMuURLgQ5eEptkzH9rCnnJjeTFvC5",
  "key30": "4XdVp6hCfXQuZq85p5jH3SJknHGUWp6vH7x2zq5niNYrNrbr39tdv8aGPc61d2YSnqiDDywMXzcBE2ZCZooF6S4U"
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
