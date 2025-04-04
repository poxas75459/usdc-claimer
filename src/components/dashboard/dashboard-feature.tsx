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
    "5ZTdWBRyTvV692T36rqQFkBqV4qXTyemThVo2trFJkDHANdqgHFfaZYS3qoDGg3L7EQyffCVFGSRjh73eCjQUV9R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HcN8X2n7YyGdCY457tpBC8yBQXdp1RRBCz586RKpZynaWsmARgM5t1DiaqKjDhkWSM3Himwc3NRT4eyiQDuuwag",
  "key1": "42nmXvJLUmyGB8CzN6DGkqUFawKYmgmiVad4zrYFzbYgMH1LgfoAzXjQMMfFRQBHsnTKnk5QXbraDXXFfW6XMXJm",
  "key2": "5cDz3CosR49LZsd1ZK1iLBu64THFoom8tosPWbbxwAgeD95Ya9riVb3RzrkZEAHusZDb2xSMBwEGNmHzck1t8mpu",
  "key3": "62FDhq2uQuhokWzaUAnhrJxk9poCaqHVUvQVdfD9cchkznU1dy46fhq2BJFFSsPYaw1N47YhQTv1VEwkZuz8uGSi",
  "key4": "ubzuix3QZ1NqKhg64uGa81TsXMGsMLWWnZfEGm7brLppyQu8BxPchrC7djM3sAPtTHUSvXKpzXCiA9ew3X8dbYz",
  "key5": "5V5Y9shRDVSLkhVjyFsdS3nSTgudx9js75WnXJMifKDpC6qp13ZVXWfVaLoSWGQUknWJ1BPbDpiFM2DXhbkiPmM6",
  "key6": "43PspdHpgq4BvNApjfSEMzn4j75gSPULj7dkwq7XdGx1tPjTrCs5Kvndw1zh91N4cXNK672KLUuiMt8TUSphr6Ko",
  "key7": "2ExBsHYZyBLV7PfMku82BmqBz4BPNEaaPxZEUbMJh2x2wkjSE477wP3p23xNYZRz7HCewtb2a7HBjG5y5smyYuFq",
  "key8": "2rU82bcH9vZMRiqJY9JqM3WSF6Z6vkvzUkDbQrZsDDmCZuBSLppkYYBUXcHptpM7o5QcMbXTaSu8myBMWiCC9WCt",
  "key9": "5BTw1mKXmCSsg6rLo83Uqf7JjKHpZ8631NQ8x3CkjQnvZ9tLNo2cyGDLNwXCHnrrPXPVSxiDFos7bL33PBuj8e9n",
  "key10": "5TZLvzzTt76bfPBFxSRiwXcn8sev1cTJE6R7i1EDsqa2dooNecg1uSQPYgWjLhiSzoi3GBcXPVKCvYHGj7P4kQ5",
  "key11": "38wWX6KL7pUXBsmNW3ZdjnykTr6nDseUvp5VyeZct4v8dU1jmQdRV2ynKUn2qyoCYiDxebkuyYdgKTMT7j3rK4ty",
  "key12": "5nc6uXh59qmMvqtrMNnDsooPQ3RSeEcQP2oJn3SkneDZ86pybP9EpALudyjSHvHmu2XMZ8EUcWZDNAAytnrw1DbV",
  "key13": "4ibBdyTNYcaSGVSyZrvb69Hc6dg9bVYxGgYFUpQMV4TjfH8NZwHFk5rHQKGEGt6XgQwAuo6NcG5zD16WsHUQ23Vg",
  "key14": "5ytG2QVc3WpiVjoM5xLTt4cFhJETgjef48G6bM23eLQ9VAJZZd58EoT8gorC4bDnvYvcuWTQe11AWGDftF1GQgSE",
  "key15": "xBPgUVm4C3Mi6D8oZ17j1B1exU5oP9sL6wusSDPUtXCNpFL9L43p3CGhkGcvYvSPUdtJw145VQNjhnZj4gmSYyi",
  "key16": "3xUoxXZpN3c37px9nPvB1MrrqvYFAvYFZJkTuiXx6Ei8hvBFvyEvsadovkWvfMSkH8ydpzC2boV2QGMiztHaxaWk",
  "key17": "2R5ALyae7q7XCDFDobZTh1wgsW8bLWShzXrKSfqSzwTKme1uy6USqZrUemmdrYR5q3qLpUhw552zF4RsEkuPrmUY",
  "key18": "3Bh5KzewpbuUbrj8UHsuPNQ2b9Fjwj4Z5XAPcfDC8U9VG2Kuuy4hirPhzSKbBGAEvc3k3gCMDBafuRaq8jC8fQL",
  "key19": "2uvPMtsLZGfe8fV1jqjocooTXuiLsHW8rrD66ZKnszXYQVCjnyhgadantkSRnvaaQRFs9jhHwj5pahcwqUbVBFQ9",
  "key20": "2ym4R3cbCW8g1XfNm4au5FNNkcvTnherd991vRcjXqecG4j89VRQLd6yCQHH4Lc64bvrB3JF2QEwFrbvQVVQqg3b",
  "key21": "5ttC76LQTPUdEVoqMJ2muhksksuhjRFjGhcqGARSF9UEwd34FmJP4aC9R6Y1QbCxtTMqEBHbZ9R8zf1L9kTm9e6K",
  "key22": "3ukBrc388Z3fy9TJUbxfGZoHgkmZ6nVKZgWkh8dzGNi4W9kGqiNAckYQDz6u9oJvj65nfKrxrGhmEKgPhsgPmt88",
  "key23": "4RgPsVpjfS4bHnA3mEnvD4aLjx97Y8bdX7AzvngC2KB5KQvzU5SCquGUNgyRNbknK2FZ7MhhJX72KENn7Lkm7G1Q",
  "key24": "29DpcRNFApu7psoxE45nVmRaYYZPR2FvRtumqYZsXyKWKhUp97Kd6YUimDJSsFPVz2UxgNPAxrY6vHNRJAfBSp6q",
  "key25": "3BxxFh3KByuHDfA3WfB9ekePJkko7yXodAp8zxCUU1ooNYkAPMVCcCpydLtBCsGUBeeXErynVapXQG14qZ6n8Zvb",
  "key26": "4iE8TQfxyJffA7kpi8FUHFvDzmrPuUUfXvkWjpKp5k5QDhraUFE5HUY4utRbmqokuqnGzZRskhwB7e6YMc9vgCNM",
  "key27": "5DmZ1DFm9c89hRuBunUXQpEFRqprSpzu8TMZy9bWVwGuLQW2Cd52qmUts48zhkNBa5WQWQ7jrTFts9MYDcMb6Qro",
  "key28": "36W4WmnzKYYEwEWtTdupHvfdNZWPPyDbXD4KUHo5mkkDdoswbG7mxNEo4fEbS4PcFxH8Zq63dagaEiJHXPyg6K83",
  "key29": "rEdkyXEGwnGCdiBaaXzGoUZXF5fLA69AWo1gee7783YCV5NsFWW1TuvxCRpN9wBjvUPjTkk3roYfXkMrK69HaYb",
  "key30": "3SFjhGsq1qjpWoE6MXYKq6s5Cs9da5D92unTqx1Pfc7uShuHs8zVVJE4ejxQgvWpiq65dDh6jZFyta7mWSVbrJ5g",
  "key31": "2czTpHURykUMyV5ZfhXJ8JGVVVmrnqPAv6R7pv6t2TbqTh4JEhKnDVvrdcKaD5dTqVLuqBCoFHVyuyoAV29uxYQG",
  "key32": "3B6feAH2ckbHupMqci5qS4gnxEvnjf4um962ziTuawbpaRp8jt1rPZ6SAwAiG1DQpuTTGa7EFKrr2i3AcdxegKCX",
  "key33": "mLfMttBMvPMj8iYUYuViiVbVjB24Tzv1UJFwkF7DbhmK2L8EP6FsLNQkiWa9u1Py5PWfDAKgpqfFCp8Rxy6dVaT",
  "key34": "63BhHAQxwSCskdVqXhQNBrihvmzTv7YA8tdpzHGBMidEgKJP6Rs9VFdSftzymXm4poVDrwoyg7kpuPuFKPchAmsW",
  "key35": "JzUYmyMRfgQA2pCgQYDvEyXdMrLnRpqA3SE6e5gw5A6mwjQ6onUq3M1GVhSNnPDrNhF59UnCNjaiF7Biifraz7K"
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
