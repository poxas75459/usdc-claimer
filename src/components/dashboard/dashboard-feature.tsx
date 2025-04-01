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
    "4YCFFuvM3EGbGhhnmh4mquqtDtijkYNxPmApZgvFrH3nLKymY7xJtAueKKZSqqt1Y9cBRo6zhEXPcREejWCtU11T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UBZrQQs5iMEcwVyGkBnKD9HRPA3wZEdGbBvY5ftxYUHGnkdZuTw3Q2HaYxHxZMCvZiL2ByHoSbWnu7QxQPA6qvd",
  "key1": "PQsQGpG8DauoJGfFEnn7AtWWt4Er1ZQxrGQY2pAUuFmdKVSS54a67UCGHCUy3ZiqUYFgK1jSygciftu9ksBba1V",
  "key2": "ysrfp91AjUHbEPwW7NapjNiFKy4wR9dSVgq3Zm2kbBoZr1ZmA1rCzPeyNmjoY2pyvEvhKiuPAvc1XGH7dpfMvGk",
  "key3": "5qA4ayLWhL7xu7qBr7sSuBhA2FrW8KHbiG1U5GEwdLmpszsRRZxTVRBjwwnYHwSPeBhYT6Lh2fU8M9BxLiejxexQ",
  "key4": "2FFq4UNTj9pssDmRhGkQzNhHzHjgeZShhcHtvHQjTQ8E8mGCXW3Hvyh4dkHxsGNVC7qxoT5T4k7gpHXj976jZrkK",
  "key5": "6eVMGQTTYvbjxSHa6zWBLM8dHci49nfuptHWQLb4Ay1XyY7pbRJJuzMydBjZdc6gswCS4CBGmyWoSo6Gp6FL6bz",
  "key6": "59fdaaVgRJ5x7FfL5tCAbuevQriE4SjNVw2YvYr1uRbT7dm5en7CEYTzwvcr8sYMzQNTpFAiBHzXGakBLoZj8ZWD",
  "key7": "21MiHxo68UU8aLdpJ8mzeeX1sQNtsn5tbih4u8HdppusyQtD4fqkUq1QBHckzKj1VYvFmkRdMT4QnHS5e4oT8CoT",
  "key8": "44csB8sicWNsksFU3TUjSCPEfy6SX4S9MG8fLVymovfnLnuBYNzHsjTQHCkP523B5LC42p5V7Kq7SyCwBqV62CdL",
  "key9": "5vaveHxYc9jbiTg8QgG9V4HoA491vdPkv5WeRV66fjye8EviviYSWJozSb88oa9dCQ6Vz6vnExLxrK56V5cp679V",
  "key10": "3gGuu4KGBPj1iwhXszYvMZ2yd4Zd9iekAJfq9vRPHeynyEd25xLQ3uvKxZogPi2RFe4wamZ69Z1JjQAFFRxD5n96",
  "key11": "UJai47qJd5FyJfahHoXiHZhf4zamMLo2fZH1JDue7KZTHRcfeZ1ej2y1MNn9webSnkGnR3nY3wbnpwc3b5n93Xh",
  "key12": "4W3MZJGZWEaAp9JkLXLJioUTJCyouTyen4Ap5XKigjNVQcVhkyn6kxoN7HA68QpSke8EyuVoVvAnsvPF24NyWRMd",
  "key13": "3Gc2KZoLErQiTEBCUaZU1uXE6m6HZNnne3ofwvPEgZE8YKN7h97kdzMescHYgJduEcGkMsQdMG2RT3YVumfM1UB1",
  "key14": "3Sn2uKbgLmt4w1gY4tRdWFK2mzuNuExfm23TbMJvyY5BcZUhjYDEqatejz2gnA6RUZvF43YgLgKbEr9cKXMXsniK",
  "key15": "4E6x8fJRSVZi8uN6Jq7NakEWaZF8cFUhVb7mRViMRnoQ3Kfdm7vzS9R1fq1yEd6oB3jbctKEvdH2D8JWQe9KpmQi",
  "key16": "4uVgooX56GHtxw1c7bpFFmtHKgRuYscXxMsvL3dqsH14Qukvw7UgYPmyJKmEwrCEn4T93gjWyn3jpHdgoWNbF6XB",
  "key17": "559o2UkwzUJA98krgLiZAEjLYU2pYVBoAgc2S8atCLZBVuc8XsPpxXAsYMWqfbaKtUPRuoufz812GBSgndoSsqQQ",
  "key18": "iNx7znerPTYJ1dvGkKAFN98cao8u21TQr6uy7xWrfLobvqLYiMvbMFXKvgv88rY1j2XBwe1hyTwUhxwDQo5me7Y",
  "key19": "3F2vCn89hVs8KUYwGtTpfxV9FUgb7WtEfVk1vRviyKoftZ5eC5VALiMEBttXZSYrZag1ibVfvpqM4Au34XQ4f2y3",
  "key20": "hK1UyXSieq3bUg5a3qnbQzEGxLebKXkg1NDaCSCTF5VE58zhDmVA97E3aKF38BinYXj5Uoc1FUy2dS6hFfJbL5k",
  "key21": "XrdeHxsUAQRJg2tEoieT2t9y37h83rbeR6q7hTCxPb9wBgo7R2GADLHtvhxwosbfj6MGK13D2YUEsDGY6jK8j6M",
  "key22": "3Cz1YHP8xQYPag7tafmNf11wHRXBxduhPuT9aouu8x5BJBvhX8HYKGq7S59Mfm23KAS12tPfQizZEUAotxY8LNdY",
  "key23": "38hrokXyxqtU3eCnJ5YH8LhArS5PrzS1HKoLzFbheCewcPmsX6zZPg5kursAPa66f2ptN6qF313j3K6RqQTrfbhR",
  "key24": "4KpzuKzh56NrBfkCq9Dnxa4LZ3ZRZhtihiDVTM8dv43xQGXmwMeBYJdbKp9EodadKY5nsggtsXKzfXhBXChnSB6Z",
  "key25": "47Ko5bgriZx6Jg5ZqgBP2KoQBnxznbesMcW8z8TTVaWHCESqGBoFmwhbKir93uiDrF8Rt6Hvn3DwfhN9JKLm5VRz",
  "key26": "JvmmBXbVNXw7DRyVRPdJCfYj4nqZNcnhiT3WSajtN3ZGbu6k2Pp4nfHxzCTNxqZJrdxFodyqqxZz6tzEDrGnnxf",
  "key27": "4WfQAnZ4otpEXPWoxryAfC4dNLEF7q9x6QVP1X98bcr57yxwGp3mbbYR3HDboQCvCA6o4KhJCWSxNHgAriB5WGf7"
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
