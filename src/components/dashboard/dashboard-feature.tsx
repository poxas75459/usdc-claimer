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
    "3ZeCo7upBptEAUPUbEfjzqkbxuw2BaiN1nxjaeLLiEupDhwVTg1C4xJvAjPYsMe2mVwH7rpkXERHvZBf6mapouTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nxZDfmsXRn6hhgCrAMhnQosiqXkoJ9ULvYDAAvoAD1QuzV53o1vvQxubkQSLBhW13gJQGUHs4Hj2dnsdVG2YHbw",
  "key1": "38tTNNQBN8HTfjRTcMtQYbsBadig9bQ8HHMQhSq2CtahTQS9mnjnGFjdVDRUjvzxfuoEiSbLbRgRpqjzDqpXTKhx",
  "key2": "kEJoPCxDyH5oDhCGjpBM1xTLKaeaTwtxCnb28L5xYo8ZW7kfVMKoyQpzKpCciHW11192mEeJhCoEijTRmfoej4Z",
  "key3": "4ejLqCcfwUhHLXRL7duSha5KnGFXYArnntWmNb6MykkooX4vRCjAobohiPRmHtxcKQxid6uxYJgHHCdSo4YEinXB",
  "key4": "63bsv24x8VwU9qyj86c3kRr8mVpXadABxJukC4F3Dt5LJ7t9D37UQrZA4fnSfnr31DTwKMpdBUZReNXXqxdZbF6D",
  "key5": "2PYKqnPFUV66apdGMaHNK3BsyxViNzJ7JR7XgEy2kCr5L4g1YkgPcvSd8VQD1rcGgdHhoK9GXiN1m3kakFNaEd8h",
  "key6": "5b68BJpZe6Hi1iddCzjBbR3rSni3iDDugNmiP7QE9EUhWcSvBLSh3W6WYwzCzzJgrR9HEjmjkjFAb9XqX29j29ye",
  "key7": "5WtAsduZqiSTbU3CQ7AMbDZsXsh4AVrLTkc2qLyib2vFtxnoeWRGXgXRZZrqvw7kzLstzYv45WXKdk9GTF4mUkcV",
  "key8": "58n2eFpjJSkPuBsT46ZD8R6pXMJkDLaATZyVJC5jBbnZ8mYrryykvaTWSeuUMEGqY7AqYi6XvP8ceVyucHVUsKeU",
  "key9": "q2BkeoCzTtAwHvKqYVkf8hfrFb8iL56sjcLqdFnFDQaH3rxTQToVAwjksEyUzuvvvTZ6mQN2eGBN6sGwYTsXrLV",
  "key10": "4XvKWc3LvbX8oeJQgdfaf1TnftrExoRY9BycaQPV6QdtLZcqsVdHFa7n7zGuTbe9hoR96n8NrYvK1gUy6fNi9YGr",
  "key11": "2DbGSNZLy4gdXnksQMJUCGJCM6yN6CRYAHNWh1GokF7U11pVHPM3v66V5bA4TNXDrkfo2eeDubaV4MoNjNynjyDw",
  "key12": "4XaVQR4245A4V55mw6GsL7seFYzK4WohTnYXaihDBUJRuuHzmoJGPMubR1kgHxGPiykzyd6HSE6bVSHEXBmbD6ui",
  "key13": "4AKaAJavBKHND3MPsR4AHVeb4Q7AAT1Qd8e6WzNoyMfkEFeqLp4DwyHKH5unLPZMNzxq5YDjv9iebdnHc5eV8oBv",
  "key14": "3CAoSw5VjnaUazw1xKFnFFWkvftDhKBxDDW4prPswLRBfk5G7WVAMp8ixwtmZch43pfQaAw1CiQJpdPNiM7xVsnZ",
  "key15": "49kEj4ed2sdshA9GYATXynG46mKgY4AZPPAMcmdFLAaqxtTdE8vcC3oDFVQhSHcD4XnLuFG6oh6ZBSMC7zzbGyH7",
  "key16": "5kUD3jxZL81CUTWhWq6qwezEZe4z7zFBveCx8uQnqDXRBirkEekNaCZRodvHmqwsgC4JRWFoHywuEJ2ootkwPGMS",
  "key17": "D1oJXbDCiDv1ktRXUh3ByN895tGsXDQNmyb19DhQSzHBB2erkXsGyXhfuNuXxBVXikNrLDPfGmmQauRKfif4Bse",
  "key18": "3xxeAAZo8yAweuxmi1u1T9a9ugrzDZUh5mh9tRj11XgB1k9iJzsoD14xBHkQEmm16bGXxiFpo4DLucJvujcUgybQ",
  "key19": "ke7NwTMyKQjqNJtLNfrrVQjtYuVfftSDuyi2NtzeLbKHoNwy7JEzYpcoookqTFpuTeTUgGLqHUF2M2CGeQF31JM",
  "key20": "H2UppiqX1WxHVfdqRccu9wYrj3mTpggiU2JnmEYmXcr4CNj6tfUYAeDiupHePKQxTyk2icHGdZALHHPp2h4WRAt",
  "key21": "2hS1uitkdaT6G3xFBAeRLYNrEqazw9Ujax2G3zzMwKLtXsGQaTccpizC39PS9TmzWxNcJhjXh3Vc8fCdZEN8ZR3D",
  "key22": "3xBb7V25AxBqUi7E1pXFPxvZ8vzqmbUdgmmppWagNuYgqPdeZRnsqgnfsRWTCVcEvT2ZTujuxyr3Ch6M9JZcND4L",
  "key23": "4921GaaL6aMD1nFJebQisM85huZ8reuH53WPEgrakLGmGzftJihWU8q4DRPqJR7MQRPhov4ckV857TqdEGzAaZrC",
  "key24": "Gzmm8faNgqidqb1SoygkzZtaCVpJBJoEVdpJzYFBQS4oFCZucru8joFHaCc8Jtc2jEJuimAAHLcaVD254E1rzmv",
  "key25": "48N9vnMYXcjfQKy7RJFXL7i8FtgDzksUiYp3JDwnkWafwQGJEUsA9aZjv3THjTdYQa8wKdcLR2y5BcjwY63qUKiT",
  "key26": "5GoUwV8FyqYpxMwYqNMd989vmbKpJhMJQ6HWP4o3QUMCTTrQ5Dm2bezoQhp89X1acWfHbPPKHfMunMezu6PCnNN6",
  "key27": "3H6FazMDVXYaEbJPGFafPjz9MMBwXz4MYxEQJDMskxNEY48LjiZubTbiS8FXEuzRdxr55fm6DitKYEYyYCobjbQ4",
  "key28": "yWk2q7Z9sC6wupMLQ7tCXgyXP54argR9RRLBqzgjKGdUYfXJDFGeEo5iJfgahE8wbF8dcTxuF7CB7Ja8jpRWACR",
  "key29": "4auaKidosQJd53E1VNBTnPDvik4emYusUxaX3BM5ZdgHhMYdJUSz8C1gSNnEQAVyQSUw4VSfzCJiE63FbvYX261Y",
  "key30": "4jJy7SaPp3WL3uozLz83WbKC8kqCwEqurvaYZc9facQ8dFyw3XocWJepwiw7h7gQYJntoagBteS3fp2mmiTWcnVM",
  "key31": "DatzoptTJpC6dp1GtJWFDWVqJfrmJPQAomN1TxaZKTG4PPeagyfbegdVaCB5NScZ5ZhoNcGau29npcqAKfDxA5F",
  "key32": "27tJQVV9AywVqNc3pranQnNMdrXYJago3Y26qiygV6CdencYwLrE9Jz6M9bSAG6iqww7zNmt7cukupqCbsGGQTor",
  "key33": "38UEsSnHZFuYCEK3ow3r4afnsdQMssURXPVmGAQK22aNeQppyS5JyichQpym6EzCKe1SAFgmTnbLrEDjYFgCxVmL",
  "key34": "52CaaQmxYpvGCJPEBrRk5KPLyi7MFeqDTbc2n2YG1uaacpGpV5duJZg3h4m63PUcPBhcNcFyqTDNj2s7BpSgnemR",
  "key35": "285KkkKe7LfWvMCf8sDVwKXuBtnmuouLjR4WYP9nq1ePTrACiSQ4uGn1XB4WRFj5DmaeEsayspBcoUu5TVSCdBJz"
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
