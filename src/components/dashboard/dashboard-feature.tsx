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
    "3BQ8J7dakxHwT2ufUPa7qkH5vLzekqRhtrbi9mdRyLqsjrbEBFMhqGWazm8X8wSYEitd8eKm4bagByPxYkRZwheq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wFvyomYwVvpEgSjBifVQ391zcY8EmB9HHWvS2SNHnGMRVsUAGS9SjhHtZT3tpFvEi9t4j1uvmUBgpioJYnK8ckb",
  "key1": "4qAbP7rGhrymoJBUG1RWx11ped744GGXNfmYXhiB98xcscywNuXNDeHyWMCmCiMAYXoUTwbFhRnAHKNT2LmAEi7g",
  "key2": "5bCetCaAmEmyX1y3dZY2uQAJcRFabxVa5f6bi8nK8BUdqYUwLLPriqBVGQLU46c9L9ZwyrsNRDPbaBabn4qVoXM8",
  "key3": "5opeRnvz3DCdMdapdms5LG3DQcs1Bj5jRnhdpku9yWMVaEaHwnG1WWpDNkMuBRaPExXeYAiwGFkA3fvAogBQGbfJ",
  "key4": "2WkdWRJmqU895GuQs5VEWaGhdbj1xEmNz31h1cY2SeBUyFZrAhrKGcL2hTi62a5pxhYZKTtNQQNbA5p8gtjsGGQP",
  "key5": "42du3hWG5LrDe2BpH2n2wPxeNFoixX5K3xXEgtoDxQ4eyNoGah6gSLsfBjsamd296SXqCfxiNuSerFnzo9Z4XWTs",
  "key6": "4z7gdZUAvsq66P8S3YAuKDiikC8qdqUNJqu2nFk5dbK1K4C8WqhmYNoawb63vUNC1ztAWt4vpJdzJNjm7CsPLHsu",
  "key7": "3g2MesFfCYqoQ3sUFaWfcgrnZqzNzci4n6HUdZFuX9aVvEJpz3doo7zpcqWkgStrxRVLCJ95zKWUr7jDiLVXJ2mV",
  "key8": "5KXk6UUAYLji3mCqxDLggRWDsH6AAueVj6oPxk5MFjq3VZryqf89APWnEcdX8khcfUzVhXNf7HHrc2uMv2Lmra5Y",
  "key9": "3ayCDxwWfBL65qGMEwyPL1FCmVpyFqVycgCQgfCWX2Etz91DpTosFopCyHMX27CsKuawCFzY7bY2fXSpaJXSJeAh",
  "key10": "yeggVMA4TZehYgzp5TdgFTHPGjBGMArCywRxqHNJuLf7k6phrAUfWpvNuxiXWV2G8V4QRtgspChhy4YtR5HawQW",
  "key11": "QRXE9j9W9o2dVwecztu3htmdKbtP6iRWtGrmTfdM5vcZDpnhbkGeMhEzuetbuxF3K1AsNaufPkagTz669Fn8CgS",
  "key12": "5uENFtPvqZGAPQRw731wkjBRinoZjUvxyeUo9ixwkY86zrvqX1Ndg1uHVFYcN5iyWpjQNxRWbmLwyZQ7zY5cAUEv",
  "key13": "5faPfirYobMqX6gS5LRFgN3WY9zZSfA5Tk5iWp8pmfu6cehYYX5uhZHR1wdCkP3iuHa9PxJtDZMFEUuEqwaS8cPz",
  "key14": "2MteuqoEXrBitUicjzxD4jF7SeZrpWeZtMW6esD1aEqC642KVFogushW9TR2EeKV6Hp8BM9h3B4xGHzwqhPN1oDc",
  "key15": "4KBMYMsLGwdvGVZH98wAov9YfBPNKCEWmpbMcMiMB4x7zgjCEaqdgnYXZE6zMgGbfLGN2MU2Mnzoj9HkaNeYqyc4",
  "key16": "4Qeor8q6918ehRGB565Hixx23SpUxSExNFYzPgN6bBjsX54Z5gq4x7JY5iHuE3UEFtrRjfjQfGvqHf7vV7spxD13",
  "key17": "3YDL2P6VP75VWFr9dMcGMyF7VgHd3qWb5EcfWUk63NNWc6oAM6aZ19zkF8RPeDP9oRQhfshWUfbbEuBi9ics2eWB",
  "key18": "4Lgj1nNj1L8H5NW3vpetoaMwFJ7DuKFYDFMaQQCippk2Q5bD6NXm5HNagjgLzQKUvecVuTtjvCgBrDRqezmMMWBD",
  "key19": "Ry4vGhTSRR5GSHKnkwZQSxZqjJCBzGnDJyEsdAyr14svcwTX9Lv5oKS3nnebhfwu6GQ5DhwDmCVB9MdGGPSkS6d",
  "key20": "9FTWguowMx6iRN44eQ6tprg8DRtGV6t5Co3QKkw3eMA8LLVhpYVLDGoLSKjTzGJ46jTKaBY8FwR2bnmD5n39dte",
  "key21": "2gtfgVaR9P9HP8A8yxHrRJfCCY9JPL2a2c4fDsB2Boipzhibt2FwR5HRvyhdWtXfHMn3hyNSfNQTFFPtfibXNzAF",
  "key22": "3aQq39vWrbTPrPC696wy4WLs6dyoUr2STx7ShbsQZGF37BtV4UuJDzLUV6Ngrd8taCmYqYYH5SKSqff1HgqqjCrq",
  "key23": "uMf4UV7WeRtkRPGtv4ZtidY43cJVQeoynHn19YDHkeFNogqhsmnTm7rGFceyo8qHv49tfkYKzCvHoRJjBERNTkE",
  "key24": "CdU9dj1vZHsNXffZcPvr3jDJX8661JqqgzNWRZUDtQ9Sb35AzPZwY3Jn1yE3NiGSVmyrYB1G525puE21z5TcNwm",
  "key25": "3hUZ9miQSYmtvvZdMada2oEW2uD6Kor5DGfKUKz6VRcvKn2U7dNKWdJpaD2qsbTwNjb5TaZLcyJ8eN6yzRdcWCw9",
  "key26": "3Y8j5HjzrUgqNvsiePcUf6b8d4EYHFan2o7r2UG6dKbfVjzAsjtwRDJLmETRrRx3DxGGSuwmAgfB3kGi3SrmG6U4",
  "key27": "3tsBFk23TmsNYbESsDM4Jqkb77iYezTHjM8Gu4WYrCPG1VupQQv1WWo3HH34xShHZ11bqKhMGmZjPFVdyHQDEKu5",
  "key28": "4cMbRsuvSZ1vALQwB69VcER6xRTs5AB36GMqxz9VHV6pmQjKwStLNQZPS86X5EApJoYJ2TZLAT7QHL1KQ1pQxqnq"
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
