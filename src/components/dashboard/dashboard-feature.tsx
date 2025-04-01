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
    "wfMPKdT2dARHvTs2oC8TdwFQefzoBqhFwRFZiXQDwzrXMGPy2fuUsvKsSpcRJ8nitVHBuW6p5wrzuwxTCkqVXVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3smCFnBD5kntumn2UyUnxN4vED7f7S3dbE4PccYYFqt4WUCzrRQqTSjLQU6sXnYUaMsSPrx6xTW1QTFpWcgRYTh5",
  "key1": "3buV69fWp23T673Us69SHhpyhNXvXk48AUgaLgmSEQ1EoMrZVJ2iKVBeaS39iyKfiBEvT1QN8GonMe2xjGCV3GEN",
  "key2": "3Qw64D9jAq2EURCeExdYikVRuhiVUcYMaavVAsRruh6u7vQF8DLGhVKqEAKmNxUvb9Se5CVgUc7CJqN8HHTpdXdt",
  "key3": "4Gmkwvx2cHWJwDZkNa9nLFDPkbFvwJqYZCUEPo3WPEuBWRpZXFcKqSoENwFVDjzUshqRiV68ExzEHGJKQk1X9WmU",
  "key4": "5iBS8jSTDTEhGuMB6xrLNbQLi1fs6CFpUkS8ow1M11ERRygDCiPaYfpRfcH3QAG8MaukLho4w1uorcCbKF5HxXqG",
  "key5": "2UY4Fau3ddP3QLzUN375SNQjySJfxZm3oXoStfYN4LkACgYc4MmY2fn9aESv5zSo2B8t8fAiUx3dxzvcYXB5e2qD",
  "key6": "63T9TvUBCBNBM8PmjT7iXCdKdC2QPzNwrS3r7RhHceaStibk9Gzn23TaDHroCPqiRBb2euKqZFp9THEJZoKTsED9",
  "key7": "3E38BCSdZGexddYmKjCUoY9gthZ76EEYJkB8eRt6nuUGvnwMmZeBTEP1FbssmanDFfecmvqvsCNaFSEZXZQLQRxM",
  "key8": "3JdCGaQBFSe6jjtx1C2qhUac7R2u4wZeb7nBorr4P3cyRBFk5cw6hBM1gzhnX3VCznLD5qFXjbpMSNsmNtwntVBa",
  "key9": "5e4aDVz2ihUncEcN4nrV66mKwoaES3eVmQRP6EGx8TnY6yipTJa5JPWQtg8ZCDc9brHsHQHz9Qz5ttP8oH5w31Rt",
  "key10": "5yN1HRDXAQcETd2ZiAZ5CuYAs6auqcL4ue1ko6XwfNCbkDrmwPHCuUavvuUmYpkcf1cTTXs3QU6QqErNsJNZQP3V",
  "key11": "2zDYkAnAeJxxmr6hPWcKVkZeFZLs1xqu3rcg63X5s8wfd3vwvbGtQvYe9HXfKHHrbzVVuBrQ5JhuXssxojv6dcps",
  "key12": "5vQs5QqGQe1YkXnov6apbFDWR3jwMSvjLAM8qSbt3WZUGp4XXBHdJHKbGLG4Kt4DV7APVusZX1ucMrPbcRCvEDXE",
  "key13": "4rFU5AEVn1qCqjnybgxzP8A9WvVkbUiT8gw2sq8eiDPp1Lg32ysh9LYdgsXhcVjzrH66xChbepPtdvfimkoAsrKj",
  "key14": "4JjbXkZQtMMrzrMUqHYEtFu76N6xSvS5UYLiV3d7q4758LvwY58CQouFD7CKJzue8qnkzYoJwqPo4XLPFES4vYmC",
  "key15": "3APQ53fz5J5pt3KZoYkrynVML91W6rweLwVmjxkHKmsdFFy5EVdmBuELrCHPhg4QAynrHgyHpURqwsczvLSMV2nJ",
  "key16": "9LjWoj7t11869wAQ17SekdiL6Drx4CguaHdK1ah1srPyJhu9gkswdPp6PqDaEYdvMMAWD41wtXMvnPndHXKCgw9",
  "key17": "336Kyk3AN77s3XKhH3HG9D5Yye1ZW824RFx1435Lu61dcupLBWqQMJyY8AYm8n6b3tkd67jpauQC183z9SJZJynx",
  "key18": "aA7CXwiBYA2yQ8rgsXCFXVY7XNTRVmWofYM5jpabZMNC3JNZjWvbHw8Ab5MkjBQ313eD1AtfX7PHcfRSq9h9U3g",
  "key19": "64AVwhvLRHEwV6KKWsksmc84TGWGUAZvqSw4A8jeKtnvvKhjw29PFPfgHuVh8mjtkhipGVsH2EEgh6CpdHgD8KL5",
  "key20": "2o1PtFK73ZcPhvXfyHvvJvZ8kN1QLdgpbfrNrgA36P1CPcWnCxrmAuKnAwAHxEMammxqCvMY15S5P5ZxQyoiUKNE",
  "key21": "3m33usLWGAuEH6ahKXxZhwSDxueopR5yzb3LcfLkoEKyBxvuB7MzwuYLG5saKLukr1GjFV7GNRpKf7J7bf1Pmqdy",
  "key22": "4LBdoQZKL6Svz2Bd1Z8SAioyW3YQc3GV4E9STiDy8dB4LrRfZmSpWojAp4NpzyPMMxiq62vtxUyVja7LarYDR8eD",
  "key23": "2PjWXmr1pw8Btv8qQhvbF3dVLcvQpUA5cSXbeCErnKvJLZ3SAgrfUZusFLu5Pem1HWsTDKvhLUKQdTfNgCdnZ1Dx",
  "key24": "3KeZXdkDUsh4BqeZrFxgAgtGGC6QMGahJW5xAyWKJJZUV1FDNdq3R2qEjfs3x7X7bMp31WhWujftcMpY35pfKLGh",
  "key25": "5upZ4Eas1suTLh1Y1P44y2xCsWV5Lr9TPuwKPYfFdJKMGrk2TY9YwisNfb5cqz8QdFffCz3ipm1Gsukbjjp5ejZj",
  "key26": "2fEz2TuW5iZqRq9vBJQGhTS8NHTVtMzD2C13Pc8j9zRTtP9tUcvfV5AsDYYd2WjS9YG8sGRepJXby3CFSkauDKwS",
  "key27": "48mCeDcZjG6SDh91cwuets5h6c2FRraJ1XiAvz6EDNsG3ebbaCfpmMc45Bewfbt4cwJhetrK8kfQxruRebbtApc6",
  "key28": "32yEVz47iux7kEkkRJd6NdodfFqmgXTUzgTbquzUuEJCzdHvvNhZ8pGjiCX4cnBaUHgSk1mxfg6yAxoqT2bPd8bH",
  "key29": "3RiYZGKmdWoWceKN4J8kTsXVoMK1BpVfAeFasUUNpteaxxCZ4LFf41rKq7kiY2b8cyDpHGztSwGZ7qqodRZGgn61",
  "key30": "37YJBawokMX4oNJVA2wbqdTBbTiLjH8wPoikxTnH4YvW8rJ6NaFrjPuyWs1xj7VmnZzogoVeVRaWU8Hj95ZqQTwN",
  "key31": "2s2wUvT8cBGQxwbtQ75hLbZoJiYxoWh9miKhjwkVudqRECurVsPvKczn89FNiXujWZg6fJ33TfSDVPp94KGpGfAY",
  "key32": "DPJwexSXpnEg4gqCxPiTMTpUFFv3pp7URxDwUf8KZhdS9zqk1G5pn4yNC3r5KjYg7iFRt51ZXvyDLcd4AAQtvdq",
  "key33": "2bFibn3APhNcXNW7dN1sZf6vRzdoxvjFu93DqY77Bkf9HxgimCVmbBcbYUFYPEDALn9kNDcqHB45jCrugnNbgLHY",
  "key34": "8n36cXLvHtp9PScnfZL1q6BhR74NtdnyzX8To443sGSLHmFfLq1VfAHcTdPrFMAs4Y3rZQTw9z9LfPEEvVZRnFw"
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
