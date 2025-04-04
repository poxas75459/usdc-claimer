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
    "WKp9j6xdZ9Uy8RS55bzFaqMqwjqFw4snrkzobMhZnL9uMMtpouZe7Eg4WTCVyW9Kwd45vSoavaTnfjBUUWMw8a9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X7an7bqgFpuYYzbTc8XKyTyfbsLts9hEwVNgiBg8Ju6sUNC6ZigsDqMPUiVNRUbkp9v6V1tfkJRox6GZTfWriVf",
  "key1": "37nSX7eTYNPPcknPd6RTKcfTopDEuhuZMFttdACz1jiD2tdqui3hgvKhXcJGKNghLbygAjegZdXMa469EPEfPbE7",
  "key2": "2zdYHfnB3LpmKiCpCgNaDZ14wu7v8DxWtCG5kYRUHrSGDgQ5kJHy22Mcowt51EZUihC2JPfuyokLVgR65p7huGXQ",
  "key3": "xeUD8xjVsAhLx48xLB3e2SMyUautCEaFHPU1u1aWa8RqF9WU7cya5unC82oZiaCZ8rxRRqV5fFqeYBPCDgpCCQ3",
  "key4": "ty5KpHMj2fDJoo7rVAQZbT9WSevb8CHWwiVPvQkUaqsjrZRMwcHy8sXpgGjX2vVwDEjkqxtPLjsYvW2DS8HbJUm",
  "key5": "24Egymv56GVixfCc5V94LZc8YGEzMhzPCFTnA28wKo1FAfozu21xiaf8cNF5xorvgDR3PNMWDBzZJhLLfhwvtSWH",
  "key6": "2qoBDbCRqmGnDgo6LvrCho8jxEAwXBKAQEsXje8SXof5J3YkjpfwJJrH895aXsEBvjMverLU6Xg7ePmVP2vJsyBJ",
  "key7": "3FyLQWL7vgoEPVAQndFU2ooMyAsCy1LUzGMe47DiWQATsGJLBGANGCJ7wnN6Aj9XvrqtYuDzK6gFe7rLXyPvA3zk",
  "key8": "5ccc7NM2NX6LSuesnAtQY5GDpV9ZETUeLxc4VA1xWVRWjyAJKcuffjq1WYCX9HoAAMMnL9v7a3p3dtEQDsdQJvaZ",
  "key9": "hEiGznsNTEYeJndmgq4SFXnhoCwHdT89C8uJof4dVu19udz4uZGGyYpJA13X4BYzWTSsn3KVrW7UH1koF6Ujyyr",
  "key10": "5XJmY2NmoqJwgthN4svEz7eyamPwDgusJQTQDjX9MVwhfHV3apn5TeEzhjtpxUiGbirTEzovp2VAN13Q7L1g7sWV",
  "key11": "3UdGzwoEw7NHapGyGQerFSiGLbEpvhzxhfs35gjdzhrJTm1RZExga4JHdGrisrFBe1qFjpY2SaQexEG1j7HoYHR7",
  "key12": "3QXJ2z743npnGC3GRxagvuzh4vPrwmXMTABAP2cobNYLe1GoKwZz6LH6kmmVML81uw5QhHCZtKhAJoi5xot3YZMk",
  "key13": "4HYGYAkEqyWi2uWTi2RsQvzcGYnKjjtPr4JetHmKMm58oRQ5N8orrpPRcMhsTmqjWTX1h8osLFFnr9kHmiCXHf3X",
  "key14": "eKpDr2RVqC1mA4j9gNSAMZDYsVYKgUr7VR4aART3nk1evwLzBapfLuEYCKAZwDFzVQaaUk7j6TwMFLHkPx29c3P",
  "key15": "3w3zxGHLXu4PMuvySHKijQT7KM2R2FBxyiTzEuB6uxAeeyN92FKNbNb2xb2B7wqNREG3L11PVgyY311qm4pjBTy3",
  "key16": "BToiVumViC3e9k7WUZTycjkmCmBRKcHqmuAAvm8mskK8pdd4DSVWUjEoLcv729DRteT6AeLViAmsTpwB9uTQYEE",
  "key17": "5s6WaM6JFyAduCacUwZwtsHJpy3Q8wuj2rA8PqxBiU5ZSwSv6hdriLkdQJ8aRKh6WU9ztWGSNERC8nRX3udaKryV",
  "key18": "5rjYXd16DYybVFVhcMJkVM5gGt2dYttnfKXYQMGG4PtCy6DRQwiiiGtGgSbXBqzX9Eup2omh4F7yoZoRcUUsGYRb",
  "key19": "2gbQaMoRFVrFBdekGUciyQKyYYDJ2B4MPE4AaLKX3BiidDRVWPQrJx7Ko9DcXexBEBmvWkJ26zd2CS8kZHtYiV9D",
  "key20": "2bdPJgsNP9d3w6NvgYw9q86Er1egjYPQn23QDb6cUJ79jEk74ACCyeGax3GeavVvwspwvPsLYFKMsugd4suBkq8b",
  "key21": "5rv1WbRED73Ma9k4V6unfyAevxdrHVu5UUs5aPAiTsAGdmKLowV6EdhmZsmT95mxvmjoufZzq2cbErwe5PRQmEqq",
  "key22": "4QBzGZV4BpCoHej6CmVfkKYcwYosTFhdpgj3tWkxTRoNoX8k7zS51acS4w66aWqjngj8beiCMBeD9CTeMKiPV4br",
  "key23": "7vgRHaBfmVJogVoyN47zK2fCtSCEYJTfRW6nT5f18y2G5YfwZPJWbFSSwyvMvnPranyyttyuGY1NG6E6yb9qaNo",
  "key24": "2tnrxDnagoyh48Bo5iqLLYtNvnYWvbBWvt17ERvQudD4E284gEdQxeJa3Ts1hu27hHAX6C2xLPoBRGgWMChMFgvX",
  "key25": "5SYfGbbtRJhGXwU5pwVN5V2mmggFuvJwdDQ1wdEeS2BqU7KAutH1mjZEA6zq4aQtonW7ET6xiPv8M1xhGqbriXQA"
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
