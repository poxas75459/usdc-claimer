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
    "4yjTKB3aoT6LVN4K31DLA5fSLgXGXriEjHBDK2NCPxqRgC7JpmuWjtt2ctbqterxgzmTPx8HfoyJG4r9HUxXKeSb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6gMmZ143BEfC3a2mixCJW8mjQFk5AGg4oGTg8YpsMBF1VVzQvP1i9EFpXJt9VviwokHSzgCPmkfy42RAQWMv7zV",
  "key1": "5di2jmhUznHVMiFRagvJFDGvQ5x62qZ6Cm3SEmzSrioPvHoXtVTbCUSGJ1G6RuiMLNByYB3BmNWwCLTMWwPCayLf",
  "key2": "5TuL5ZhTvwpnc8vusEQRTaULkzN3SyN3ytjCHA8o1VSM6ZZekFjaUwtSU6R6mitPTwV3nMtZ9YTi7PtHyYBKz7bN",
  "key3": "4ty3CkEz7pg6b7S8XGyTGXqgtqQkzVmzYCqibMmDXhpaZvEWoS9QwEQHmpFC2qVvxvP27DBZ8uQghh2ZpuTnvn9E",
  "key4": "zT2LWVftdvEcR1oYGnkRa1C4JiG9h9h43md6drwVYaKjpsvvoeceQDQjF1AFacx2uD39omKoHfpxWdkKTJhBm6s",
  "key5": "27hr1JwDbfWLAAhBXxRHjnhFYvUXxw6ZCJnf11ZtKMRtQiG6EwBJnYoGJSV8W4drchVsPvuPJLmQRgdt7Ged34Lb",
  "key6": "sV8W8Da7JdLHx54934ZrKXrnkUEgD19zVMujSUFtHiyGctoPnbBYFknwe8c4paAWaVeDmH5HQohTLGKwmvB9Cdw",
  "key7": "42bLE6xKiFLJHywmxztSmAAPkUA4o91TpJBJbUwEn4a54eH8ykZsmeen4LA3twjuMw18wzSi9USToyY2AubTSzRQ",
  "key8": "3sjxLu2P8j6swLoG3DFvuANRcTm2Ta5jMpSVeqeSK1JGPmt4ZaixBdvw6XpvNKUWA6A7LVS3hz86wUzX3Fktw2u5",
  "key9": "PGUiSup1GhAWBuddJ8Jv63XZVoMyyBY9oefXdDS1NcdhVZvdwqydnuKwfmvyRCJGpoyPG5K2wxBddNJpdLAgzfe",
  "key10": "2xp2CG6qZnXqUfWqB7S9Z88a3n7PYGuTy9c9VctpfE9ZGaWj221S6GDPaH51HV95h2RXY2RibMeJZ8xFmeQJ9Epv",
  "key11": "4huaN7eb6TEuQPdS6SqLXALmkiNNQC8331tRtSJbP7kKZgT4VSxaC72yiDTzYFp3sJzCVZeC8MjGcCst13u5AAZM",
  "key12": "85QxymZLXnaRBrwEZJXCL3iuKJcfEii2cJCtSZ1tBePPZXDh4iB5ZEEYAT3EMuNfBwQPqZbDkLwUej7CM32Q3bR",
  "key13": "2shu8NW1Du4o1RrwNFopsPnArLYH7CZRVs5SF31uLY7RSsmsHCJqQLbuso7zQGJ5RubxNN6JDkURZQsAKscirPD",
  "key14": "LJVzEXZo6gYPYgHje9sm53LLdkehqwxFiHKCT3XL8NNLmWJU3UdU9U3zQcaRG5717XubrfT3XrkcnNahH3c37Se",
  "key15": "2hJnjU9zADddQToSKCKR43zwsYQiVABvwUF4FmZ9umerYWSXBasEqF2Xj8wFtbpkEjyauua5hHH5g3Dt6DM5BKxo",
  "key16": "3gY4ULHC3bd2pqSdckD4JKsX8aKcmDTEkzFrwfANQf2vCmkgbSA8JyRQKqf7hSdQ7sqTFPJgsZK738rApdFkAzGQ",
  "key17": "HrbzMPh24r1hCR1qXm3pkVgKUmek2sBSqGJ1N3MGYeZbLiusAXrB24B389jZ5a4N8GkmDvWopoQKPQbc5Ca49Ho",
  "key18": "29sacoGGKJR9LQmmjFW8hqQZyuwmDZAGgtYCTWBJqh2a4yXhzcMrZMcXuFW4DTkJYvTBcZ4ZmwjRGYzoFWoVxf4k",
  "key19": "3E129qaFDKk5vDN3VU5WsF4g6DzmGMaaziqK9CDV9tWzG4BAv8H68y4sL4WsTf4Wxucs6w6RaR6AY4LNFBYFdQXf",
  "key20": "wxtHVhqe6zbgnGCCAwvHTtqS5T5EcRxQnfVv8y2e8PnJhiwYhBw6iRMfYgz8TbHfgWrHAmwv2nhV9bnLaB4xMyq",
  "key21": "3BYQLxwCE3eTsP3g8bSSMBNA9RbtAtgnRc2krtjHQFkBoekg8dA3aExZQ8bEAaxpY5Dh6zWGfRawRMwW2JNhEWT7",
  "key22": "3TP2Gy2zz7Dr5z5s6qLbwXDVtedycLxEVYw9DQ61oeoSeMiFg7TtZ6eXxdMw7D8DHcBVkxPXZzGokQmhoqvfxuzY",
  "key23": "5jvYggLE32MSQAmZAKo3bpMV7cRvzDN5MnvVRhWTJqCGhjJ1pxGWYasmamGgQjVKmWiTwLGukG12ajh8aVQ9WTmJ",
  "key24": "3tzkjEz8xgZwpvHJeFvsEza9fi2WF4EThVztK7i7UZ43iYBbk2gRYxSJEdMLkDBcWfGGd7yhaA74fTW9dVgkhF7h",
  "key25": "5iy927seYZCXXuaJNYHJtnQHwM27UAFo7j9Dqj1XaQUeGBJLpyxYZ2kWgjmhzAoW2bqU13CfbohkPJtdzZ7q7Svq",
  "key26": "56aocMMsBSdNQgtt7TXiy1RpNz26pmutnuns1zAXQXAvSFaUg3obdGjA8zgRTP5HSBPezCCKLAGqbQq2JDeSq6uS",
  "key27": "2ngveMcFHBXYaBYKi4qzojM6QVpwS6fcMSyxjsXYK5LqEqV2sL2AF3kKmwLohU3E3N62gYbcppEvqA1kKNHJpES",
  "key28": "5C1yeuBKAEqfAopvZeSPt9FbhtUZVW6y6qfT1ad7KakahCuw1wWe31cfeTyUcFYcLQB4ySD1h1KXMWy8VicU3bua",
  "key29": "51xe4VmPY5iWjHgqhbrDnX3rTPziwBtw8q1LUJb9T3h9xboT5XYhiPGGbSkYYE6W8g3TTpKcMPH5jvoKjRB4SVks",
  "key30": "5HoC9X3ptSV5JxVpH4SaqMQSA3WL1UL63guxziVjVbjAXbXpCpgdhZH1Kt9mP4dzL9qqvoXEK8zPSL1AYq8DXY22",
  "key31": "21YYqS3zj8QZ2GxzzNrrzkFqpaRLmnmmKHfekqkj6cwnkiSSjVx8kLfdnF4vRwL6tatDqXpJSpwa4SMwZZ6xeY8e",
  "key32": "3R4CLg59D2FZtQLfaHWDDZkYMLCPvK8Zs691w1BWTKGVQzAe2LXaodHNGgnvVuhZqknjk2c7rkFDBW2mdSTP6hcM",
  "key33": "5vh8unCui3cUjeUk7f9PMwoBteFLRV9cJw8pBWAgqiSEhtihZKrfV2wGHedHUZLUyzUywDCxd6CRB7SBLv7AvoPj",
  "key34": "oCNaRZ72F6CHxPwdZ1HyGTFU62LW6gGwBLRSpU4HBg3RM3EL9nFPqPkGZFC46CT2cbxDEWV4MBPDKwPUnqRfAtG",
  "key35": "LtubjSdUVQHDeqD3Kn5BoaD4nMyupSn9WGnHECdYRhwmeZcvBS69pqRBA5NHUgP6yyhoEid5AXNz8JRFT3Pj8HA",
  "key36": "5pdYbVkvcq1fD7ZeKaffPLYjYHovrgHQvNz5HZK7rrWD7qxz55pJS1HNvgrkhw4ammcckuTZfwqoTB2oLiWA9cbR"
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
