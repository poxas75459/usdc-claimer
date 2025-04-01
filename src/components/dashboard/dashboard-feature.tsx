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
    "bSEh6CnDsRp3pm1tYzWLUcdGxHkrwizwaDRZS8YERP5rGAzHus7MaoXJ69DQXaGaJSgbCN9axWyAk6cUF48Umn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dPupESFPt6X4PCtwRcfzw3gRdXELgau1EUXSHo3y4YL7iUEmyvtBicHTrg9qVTv1H3QnPdHjUvXKVLrAztKUv8f",
  "key1": "4o8WQw6Y8Px29w4WBHHcFde1Fn2NRsNqUp6uYZ4w6M6kEbq2pQt8vX4ZYFgdHG6BGjey2MpjycMLSJjPUDxxkyy9",
  "key2": "421kbFi86cEEitYPgyh4HN7bPxaR4ewSALEXAmGTku5Hf9Ug9ntAq4ob3pLCpecYYasYZkmk4woQi4CcJrkHmzCX",
  "key3": "2scULepNGiSWRfVZdEvxZSvqDxBfbjeCjMoojN8FbZ1HUDPMbC6pCKo5NmXwn7EuEkjkFg5Lfntes33DsSspLg1q",
  "key4": "5bbWZwD9LH4VHmLF74cqdDaUMrULZuizBJhEQHwzz8JxjYgHhsb8js7iCGcbmDhy5k8ZwjrS68MYsgmyh1B1NSFC",
  "key5": "5x3MVv74VKaVTnyrwHD1KPwn1APZkTg79zD1XkxP8fd1uARFTDgVmtDfjRP361bxT5FiKjnuVpLMr6VS6veCWC3c",
  "key6": "2esmkH7UpxCQpojX9P8oMfdiUnktUFqPH7jUVZ2bBPrm6KhutWfE7W7GouZRn1YsnQLTuh5v2dJUnDuRCnfcQyYx",
  "key7": "4woVKbbRz6T1eVWKw3XYYvMCNWbc44qgfmnGUbqAsk8w7rRnqVWXP914xtM6huYB9Wcawp3MahyZ1MSnTHS7AtmM",
  "key8": "2tpio1FDxn9HR61QPPgx2BaxTWEA6W7NTrExwS1Gs42YMS6wbYPxmPkR9Tm9SLxwRtoh7GuF9ZRNa1MRtTgufxeB",
  "key9": "5dzouQrFfPBeUEP9bwmAbLqw92zU8sZi26kjf6DFHntchPB9qwv4fotjgio5Br2b4zccsPZ1U3N9vcTXkERWNWkg",
  "key10": "24iQhVy9znMG3b93GBXBrWN33SKkhEjAinFuQorcEmVFJZGNEC5WxThJANy8t8EEv8bktuihiGCczU8jn3M2rFC1",
  "key11": "5pWcCu8tm9uVQNu2SXfqJHmL8ycJ8sEpgy179P28786eaUovmNzKQLYA47Vgt3X5T9Jfd3w3sNcHJ6oqEMtBWBbW",
  "key12": "VQhAm1W8PUq9ZdBhbqhZHN3pDrwGmuP41ghcuqkMALYpPESfQsmZ38wfpBGs77hhF1h6ps8mm1282oXWryxh8h1",
  "key13": "66DQ4Mxfc1wMXBwoVY2VxDsJqT1A8CTJePYLrzcc93ziW49xDjwXV7faPsYGg9m3VeeFeAUvExUbJEk2FMpKA8fY",
  "key14": "5L6braWWwcqXgmmT1Fkw3EVTjsKPcTzQ5Sdg1Zqr2A2S9QF5wVGK1aT5d1gUXMxQcBjhewTmr5syH2xMqXhFyZ6t",
  "key15": "gDZLKUkvnabiAHDZHbv8SG1u5nmRBVH2t4UrTBacKcYXtkitgsUEyBVgjHPsrtzLt4dtP2KSUV6xrJeKuyR4gKW",
  "key16": "63yJziEubkhRodupaKCiH1xzpkjDbGqxNsqN6zQFzbMRZ43jACh9X6Gix3b1RCd85i3uaWaupfh36SsHv7xjk8VZ",
  "key17": "2LJFqHKfyT79jN1wUt2rhoAnMi8SV3WxpVedsQXnwewsvi6DbsnkowHgJXStZMtkyRJJTwZ4ft4CkVPjJ1MQXsE1",
  "key18": "2jEC4ZCPCHLL2HCQMgUpKEB7NMSGWGv8VaYh2RfqrrScYkw5rvzEiTYaDrnh33nCvXUcbp2oL5eCwhSV7kfXfuLh",
  "key19": "78wLXq2FfLhmEFSBGH1FEjtHbdrKNQBm94gtLD6v2KyVXBESXhb7S5KMT9kv8uosXZL6xAc6mBJGs6Td8fWqqbY",
  "key20": "rJEKzV57CQUn83CseiCvpJhJdQMzr4ikwFvoBZvpR6yFU6kSrhy3HoSe4tGcwTV82aefFWRvUNUE3xL9SZspwnK",
  "key21": "2mhj1uzGnwSVXL5ENneD1JTJdVQ8K6TX1WwursrSXVUx7R4s3gtQkAuT8GA8hTK9TmGtPfYijzzyNxLNdaqiPLUE",
  "key22": "2FJA3st4HmxfHnEvQVvwq1rvwtssS3pgY3v3jXqTEcMwoGkEZvXReWTQNvFesw2NURYxNGjCTJJHdY1GLuXJucD5",
  "key23": "67hV5ienv39XjowEbKUkBA453JH9ahQ5X5csaqx4NR1uGz9v7eS5E4oYd3rk1irCwRTB7SeAaEsUWUYKwoXPU5Jx",
  "key24": "4d6N9phdMsAafHda5mjJ9cMmkHRjCsNDSVcpDxtx9M4yoKiF9GEU8aMiXwNM4NPHwcwCzbxWnmkvHyJYudiPefRm",
  "key25": "YFuX3vLKKZRjXqo8rwBPLmYGpbPGAqQWzYEbHEwHXEdcZS4wqyZUBgwwCuUqLe1fGqJfsZarVAe8Cd4nx6ZCFLM",
  "key26": "3ukhfCXVNa5msrmAv6rfQLMehpNLzWXbY3fpYsFV4RxiYWUwn3HUbMVpHzzWqHs9zNXuCB26HUr44Aow5wv2WrmK",
  "key27": "5Zj2bKXHH1WVuPP2KVHiLgWvbdeMBHcL1x6VTSj3Scq1ffAGW6JhNJAP3nkVxo5PXgun1AdHfY8EbMrUNTVE7YEx",
  "key28": "tqaL6Q84PB28GBS2FUxNZzG8aMTLypyzgQCyrXAMpSueKPfM7eie5nuixw5CbNodzLNPj7DYGDjUhJ3rQk2bZRG",
  "key29": "3X3opn5GkpKxao1TfCwvwtJTbE94Z4aM5414dtibhY1LCWR3yx5jWbySuEL8K4DqrcX6tAjUvQruFrRXnofxnnHZ",
  "key30": "49yxLzVTZxcpnTeDfc6DWeoTvrtFBtVPFQqudvVKXSTTneisxZYoKaFuiT2Y1ji5xikGMurR1ewdTQ7LUQofQZ5Q",
  "key31": "2qu9qJTi6P6EtCPen4j7g5mB6wUfTRebCt4mFbCGYR3A14ca7unMZNuYoqZJFjL9aW2TDdsbNpqizPwk4A292k3q",
  "key32": "42nyitSxuKn7u74G1SyxEPrASpP6XE5UgNyRDoCSPZgCphUif32t2X161sLuZJwBJZWi8x8sEN3ZCU8pT9EgBKbf",
  "key33": "2QrjDUL6QJP1jNAdezZaAfQ1j9Tk58tpGfxaqqETjW7c8g6MHnn8sT2X53Z6pZJGxFGA22c7ZHkHp4Lgk8prnMtQ",
  "key34": "4Mp42KKV5HCfFYGUftLdwkV3a3urZ86ND9DqkBTTrVmU2MSPwJJ4pRaCyWrtxgVygBZ51zzM9DxaSJcx5bk9tmiG",
  "key35": "5B2zqWTXGw6CZQsKRkXEJ8tmwDrQ32gSJafkHeoGyaezma6tZPZAfSw15fRMc4y6qg1bVYrt8uJdNv2oFBB6riWc"
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
