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
    "4TxFVWTED76ASLsDprSZi8M9Wix7VewwoqKjzZBPS57r5n6mPa6PfaVEwTkiuNpziNuVcNHM7oupvJPFUEeEUnK2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49grDvEAUvpRgSJHW3w1ZANBjZCjNmSoGuUYS4USKAfdQ3ZKUR8BuNDFGD9ViQBxKLiwrm31PBRmMxEnWPLhQzUr",
  "key1": "2jigiog6GteBLtgJqZHSgRPxc1wHfPmicCaPjPYBKVsNp1YQxY1TyggLvquBkvvuyEZANMqSHb6Kr1MfdSUBDL8U",
  "key2": "5tKEk3WPgghErrwMgCvBzkSCaAYdL3DB4WLjZiuHXoLQqf9Ui1JP1fjpbwMnyveDtZgTGYRM8Lm9HnnePHczfqfZ",
  "key3": "2zRbaoBMwgxsQyh5cvPt2R1WBBEscmjiJDAwYzCDpCpqYJAdWmZxTTK4WExS783moiCR594pzYV4wxrPeC6hAtot",
  "key4": "3jU4sLxFYnJVy4HQKikdfdFgKAy5JvLroEw7626DecFLb3ccZkCjeVNKQ41vedPUoukxajRMm8qikkSjDbastd6m",
  "key5": "3EhVPbhVMNehYS2bFCHiAndtaqYSDQr7ozj84gNaB6BEV3zjU63DYSqH3enbEdw8QZRSpc5jWC5Uapksuwdvsvjp",
  "key6": "3bFD8vXPHP9B5pL1ozwjEdAbji4Xpn49GPT8Fv1BUvRFH58HptvUv4itCsW7tMBom34g6hbKSBmDgRFeADri8VJ8",
  "key7": "3TtZmYzuh7fyRMmwEWpyuvu3J4bF8JEdmBjd5cThQJFZXuapLTzSosdAgamsWxmAQJ2UwwShECF9Fb1qJQM48kLC",
  "key8": "21Suk3TqVe6hvCjTC1WMHnNgspUpyRz4PPhDkuaSCcCNMoBN6pfqMHvWBVEojxuHKS6pRGR19nSp2jifnueGZAHS",
  "key9": "4guFL8wsCicEw6TL5GNVa8XpgnbohCMm3PskaSPEEpZHb6q1dPzRcCTQPfGrHU1pzLZ1ex7Jo2QrJnRWNMexTLbo",
  "key10": "2WfAYMLovvFhfFECtvMmQKG5871UikwhaL1UthDxBJtE3mCH8dZZCFhBCxcPdtk4WdTDs8figw6zetZ2mvYRJPes",
  "key11": "2zxd1C63b3td7BifgPfusbQmZfstoRJxWHqX3ixNFe4woZa2axgCSW9q8kyREUSufyU9A3bR5K1TWE8SbCsu7AjY",
  "key12": "3fh1Z9hMLy5tVZwXTAiyVzWEiUngLwfPNQFoErd1YvKJiQ8RbrL3hqTijFdJvEQ3bSVb8qKsPznGQfEvM437rK4U",
  "key13": "4zTcVKix6t8BwyRqhAUKkVPRiQPszEFXX3JbvoZhqUDMjaNCd5Xp5DDQnWEUbeZWCJNZCqFcgWbtaC9THMjeFcqn",
  "key14": "3v8FCwZDHWsQAWurshM5KBcWqHSkgz6Cp1w1CbnN4MTJ67ygPZxyzLkfu7X7xRnMH3Zb6aGkdt36H2AFcXXW4hP9",
  "key15": "5rmz3Fyy4WJZmJDHFmXodFbow4LhuKfiuQxQH7G5dmb8Sod4AwYt4WCfQvb4tYuea7agH9Qv14NiumSU4jtaiBX",
  "key16": "3ZiUThentyCiPt7Hrs32jV3Wu824P79q1sDB9WCqowgGXMuvWPBuREqwiuvaMXL6S6vNEdU1JU3jBnmitCQW4DLc",
  "key17": "4ECoBStXUzHMKW8fhE1Dqd6Tn2tWYWbAWYeJu4Wag246ustJwMbLACCJuYTrFjjQDZMDKZx3XqZXfY2mHMZ3nuqE",
  "key18": "4kjZPcpb1Mkabm3PWFxrPXSNVxHjH1EDttCNqyxzHSJfv6bWPhZ4bWeKrxd675izoNnL3rEWmoQE35et1NiyvRhm",
  "key19": "2zLwce6bLEfUUrobXf7KXfdMJeXnTUV7rJUdGGrTHyUYQGTMbDRMoTES5gATLhrPt2PcsgHBPwh7bMDLawQd9LpL",
  "key20": "45VXgKJvVvKpXegEzeDdoKrhfFxanMh4JNfXYevYV7DL3Mucr8SRtg9XvKhpfkECnuui2UptCRfzNHwy4U7LVY8b",
  "key21": "5M9ZEjEfGKjmXgisbGjom7SVM3P6ZJ3S87sGGZeRaBqWAuyD7UUYkKQhbsCeYZPYUABpCVTPVjzGMtLvGYLPCi71",
  "key22": "5YWWaQ5caVgSSxpqcDL4pUcWbF3Q1NMqHTy8B3cvzR2RuQigAYt46zPiYbKj17U9ETrxRo4NRD76iQXy21cE1YB3",
  "key23": "2wCNQrVdtvEN7pgoCkbX6mMWP4gdLfJb4vzqbsTy2r8PZTxht7qU45Cd3w3j2bHVZvizWLiZSQT1Ee78WgD3NRdC",
  "key24": "s81C7Mu2b1ko6rpMDoyhQn38NEZLG1zeBvryAHpjYfuhzniWGyE5jBoS7nLVzu7e9ZSE4vjvEyMV2Z2zMJ6Kv4z",
  "key25": "3F6aRqPdejhcFx2HPaaf2nnvQ2vFn5ErezqUbMJNnduxE7q7ALDpZRZTEwkeVWMUAqvQN4pmyRxYMEPQeE9FAUkQ",
  "key26": "2HTGUzSs4ZM8JurvfwHmRJyuTR1oYGAaQSZoXCFvE1KZLrBhFEBBxkzZXoC4RMoZgdMcC4D2e2crPo3MmRzoVqad",
  "key27": "33cBAK3nUdBa5nAg46GyHY33Sm8NXvnqvTEJxWRNCfcUFWPU8YoaSV41LnXG593Qm3G4ASJ7Jyh8nM1jY6s6J3op",
  "key28": "4i97myVfNPKvoYc9gPbr1ArLBjCp9jzLQBK9zsjUGKkyAehKwQLLP33n27vm9dEGsiiDnWknaaaCHmF6dM4hnCF2",
  "key29": "5zX5sbM3qDDoDXSv4xrRehCUB4kpoHhmgZcs4mBqZLLZfQYZvXx9xQ5SLAXWd7aXefvFuNW6SwzCENK7u1ASVjit",
  "key30": "67jbdUHMtoKXma2VDqk54MJogcRgHG2bSJ2ErryEJCPyUaitEXwAekLnYchrPbu5gconhin92PFYKZDGZxwP7rFF",
  "key31": "5AC9KSXufqtcmQGxHvik7LKYFxfXw1cji6PLXAgHvteQ6iHwMB7vBhFgVegpuxqkKKNosxd8DUVyEZAPUWSCeFM8",
  "key32": "4GEWbyo7ggK5WEh6nkXN4h9GYMsYtWTk972uPpBAaFpFrt5KF9YqVYT38VpSZheGqsP7fHg9WZxFYdCzZVU5NhxH",
  "key33": "5Kho8hVg79zGLpQgrQTHiEe9tSPKjeFZ3QpegakdwLbsib9eZsYsr3zjRnVHQVEgiqVKbG45XbEW3twXueRynTJh",
  "key34": "5rs6ApmbGrz37QBvSx15TomQm1i4gouuyBLZFGfEnhxF7uhsKhULYvyvVkgKa74nV8n6pELeyq2YPmZxRmTSanyn",
  "key35": "47tBD7PgsTZ6hzvU42QAK23oX6hiSj2aC4GRfw9qQB3mjhqD4D2uQd5zSvz5uN4ZiLuZ7qzhtRR2gXWgxEbSL3PB",
  "key36": "2BnuHx15KPtkJ1Q2vBTkUSRHNhLnpTXUdaDG4JCsM9d7thVtf51WLL3iEfLrsjgFwfSFYQ9NYtCHYxhB4BtJn8k6",
  "key37": "43195Z9kP3Q3xpKXBHmHkJZEFVfeG6yNKCEAVW8RaoG2yeYMD8DxXdsqVfHtFVzrfzWB7t11Z2igDphPqzABMMs6",
  "key38": "58rBVjijPCUzZgSUMSqa3HWt2DJ28W3Dkuuzk7X1krQwqeFJ3eZFcg5iZG2aLUndCREH4EUS4AXSGQuqkkQsiicB"
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
