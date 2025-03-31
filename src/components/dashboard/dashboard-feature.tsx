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
    "8DKJBk3QfyV559MD3r9RcrJHmr1BWmXXKonqsH9iQU2FAfGrvXJNBRZX7qwdCzB4dvGoAK9yxPwZs7KKLU3frdP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NsNMXw7gCxYT8Sr7z6mpVtDEbcAFdLW432girg68tDwzxcYc9ErJk9MSEixKQmecyJvsmH9aEWtkL91TmVPKVU7",
  "key1": "59ZoJQAeKHtatTDBa6iu8iPY8m4zffB8sc7pnanmMCA6Ugsh7uui8Y8VAGrDgdJpJNeTijbkFcSrC3wVbEp1YuhE",
  "key2": "4kqauJGKxPQPZP5QRnvFiA5kb25inXpUfeesHji64rhvF2y41WcsoDD9Y3TZe5BkntBkpHKExiSq588bxbP7FVxk",
  "key3": "37zqAsZ1zCMQeAubCbnmHkNdETzenFM9Lvx8ZrpwzEtZ6pN8U82ZunWNwXwjsPuufjowEzHJm41QCn8rgmmNBvTq",
  "key4": "5y2TmjKsFrcGSg4pvDnbf8hUqfesYVac9LGqj4a2uWWjAoRCaF2hnjuna4oMMQZjyRf3G8SWRKKQ4HFFLDqRBEvj",
  "key5": "3HHn7z31eR1zihLg7wMBZWPP3FYUENsqDoswSTsYCRyT4KMH2z7cVHd8evfWcPQpkJAVEgYk2vUAnXyJFNsArcfr",
  "key6": "4JwFigV2NVJMYFsBz816uG6TXmvRpjQHRJrE3w5wujaQEoPktW3KsA3xru5KB2sJih6YoZJU5NkbbVfZRWkEBrcv",
  "key7": "36w2k6hbeLq5qJMV2RJQ7THdu5TpPV39GMkQiJMHLvYTgNaqE2rn8G2dxPGPfXedfJMpUMSze5WBaSgUA5qdJ2Sa",
  "key8": "2y6PUe2UfPyALnYYE1cZ5ioYnH39HmXWn3aaRkXo26CeCounkdt5Gps2hKR5Zi2i3QPNDvKmpPEyuEgq5qHrLhgp",
  "key9": "43ee3iYLu4iLu6FNq1msmaS4wkFVxepoREiAyGVp6sQw8Y2BYCZ3DgBur62fR84L3ncwm7BLxoGLEvhLdwz1k1V2",
  "key10": "36PLbeVoJDaXAeoJvbPpVX1m5zKMBzU28AYApSfxBdUwhCcF8eSQXV62gteyPKMoSqvz7Zb8L1Z6wMH5V9xUpNJz",
  "key11": "5Cn5GrFwKZax5goW11qtigLG3mYRMetETrwJAfyApDdjLMd8ioHZ8S21DVf6seFEfeu1iuauEUkNMDBei1XS6tsF",
  "key12": "5YDan4XHnbiNidioH3vn2PrZnLV9Bf1msNNiK8gaBhb7TqBGuiKMGRw2jQjURv4RcEcxsghzqjqzcV7rdY3xf23F",
  "key13": "5XnVxvFGGKasmWFtMHBh2VCkYF6eTeqe7WTdyZNWJYbqExeMtHacLgpw5wKzqUUrp4aHnSjzqf1f9nCufGSAtn8w",
  "key14": "2j42ttKsStoaJ7DHeGbQhKiuHoJmjynRv7doPwKhgPTBVZy7ssY7M3vNhJQX2MT9JPPEMk9H1x2tD2i3DuWQEg7H",
  "key15": "2chthzGH4rqhPqwCrHY8QxRa3YZqyuXMFKeGRuQoTS6nZ9WPRRfUTs9dheSdHXuWdq4FX1PKabxewoS2ppJiKt6R",
  "key16": "2DDtakjQDr5VGR59gikXM3CuQA1xv3PNwWJEMmVrt98NMJ5hP7eiFtvBPEMvTudj3uMQBG2C7GAoBwoQtzdEFZnf",
  "key17": "3HCpEzvDXy483veQe3Gqj4YSvxUjpC1VKP8R2joGUH6R6iwRUEgaDgaNDnPi9TTJcdpzuxnyn6fJLj1mPs2HQAVQ",
  "key18": "4j8PuhhzkARe9ZDE4NB9LYaMbqkMguej4MyvruAKxFLadUAkHjxnLkjaZC5SnpXLKfuqKZH3J8XqriEzysg56DYe",
  "key19": "4et1ncVszTtAWfe7U6onRqLsuNLWvRZWg6Xbv1sgYBMmZSB8wcymX5q59LE1RJP9KtjrFvtyEmNraYWF5mgz3Feh",
  "key20": "4msqU9WA62QvBxGT8TwTCyvHRcnRdLLP2XbDs5TcQfnLPwM1gdWrstBtRbvkBYc7CZQsTXTutkLGEMYpxjpyidrJ",
  "key21": "4BFL54iHAy9vTFGzvCGS3tweGTMgMCBZLpjpAvH5EuSYHHRZQLUHRhVeU1kdMfVJ5QCN989ZbHz7Jn4g6XcJFXYa",
  "key22": "637uyXbBfjFSSVMWS3AizsKFCNQXswgtCPAvsD1pJiBL7gm1Uyiewgn9p3mWWrw6hfY7LKp79f8jwbUQSgwkVMLr",
  "key23": "4sRnFeDyUnzLi7mscpx1y8yKrCmBJjmoiuMrMakZBxSvTaTd6A884GitmwvWFf8AAJVtCK5qrYMDR8up364byLXz",
  "key24": "22JvHteHZNAhXW2BDyjee5zHwfM5AwWfnKF6pTgRtZmkUHzTX39dLFD9ZAN2qCfJmpHhjtxJGmnetFUYwdjdcTUP",
  "key25": "2RZwPny5khtY6tzJwx82UjVN38yR7iiFMggHUgdUf92UZBYWQnMzp3FgPDhCKLt84y1G1iSV4vrQrKhK9kgTmpBr",
  "key26": "c4VgB7af44PJdng12sgYBGxKYvu9Ym7WuEAdqsmEnraCCxwLW9Rhk875Wew3eG61vLujk9sRxChuuWbofmwhGmE",
  "key27": "3Zs4E2m31iGWYQhtwDmGJR8ybivdHmZx6fA3CNjXNdFGdjnc6T2zhksQkZ69oBMRt5UcLUAnKFMnYvWWXfZKuXiP",
  "key28": "5qKqc92jSt9UhwT7kKsAiHXnrQsHANpaK1d1jAV2ce7ymm1ywQyCkqr791LUWZjAU4Boj8rzq7o1ndRbFfAxpYzo",
  "key29": "4yNvGWonabrHFub12muFRLc1Q6wtxNADQWNSiEe96qECfV4LMxiBG2Ew2K5eShbJPyGW2SRCi3BDGgLfK5aAutL2",
  "key30": "3jwhonkW3MqKsRBfr55WuAUnqEtj6mMpYSPDWYVk2Mk178SXET3XzkE85ismdkwqdecZ8MvWdu88jYh15yZMT8Cy",
  "key31": "iJjeHT4wKCh17Vdatvtm5f2dGSnxBezDPiunx1E4C17R37MU8Hx1N4zgjrPL3NUSZ73MLmcvBhUSvJzTN8wNYJV"
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
