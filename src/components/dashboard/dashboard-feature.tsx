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
    "2okavwL35yQMSMr57nuyzczLr568xryUuoobPRHpqLcMA1QFCxdkUzqke3UmaDFzvEbmMo9G6xhLSsyLYhfDfkTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wu3DdQrxGuhfsgW9ScAvrEB1PLaCwb2QdDPNNXjs8DgyyvLQYDUikD5BPD8PrrB9Urir4dPSske3EGQyskSgsag",
  "key1": "4qFhM77RRjkP1EiaKbvjR2vsdzQ1jtVJAKHLCgmzikZBawsDGv7G2K5qZh1RZFM434PELqnE9UdX2m1MfuyTNfzR",
  "key2": "47jBt7g46dNUCjfCZMRkyAZpXHtqxRwRARYUsDZfZ4UCNXYJR75RXoe8nTG9hTYLx2ZCYbAR5suxMD7qYBt95DkT",
  "key3": "2bD51PB7TC7XTUVPPe9iWHdVZsdCQ5ZkwgdLsVtbwxdzGujrnN2ANhXiTJJW93yQwcJ2FsVDBP9XLu5Pgn3cNJmb",
  "key4": "2MdxRQidV7bDAuuzxYSqcSJBNd5tevbXqZs2EteGjy81ru8UFBEbRZ43A9Ytt6SfDSoaniszNQYnimsJBQD36MMx",
  "key5": "3rvFjq2UAnEpEZvdzBZabSfxH8Sgr9saGaBPhGq2DHgZVPAAA1Zzsjmhz2GZiQpk4yqYwPtA84MEnkzfWmhzdSbR",
  "key6": "HZ1BdZCsx53fLGczxtCNFtSAjmBauYiMgneiY25Jjv5XcNkxrMn8KNzDEMZyTnNMkirTQB3ucXtrZ54VV5oHfYt",
  "key7": "3vRR8D3paDoK1ftQ5UVBHtkomuG1mYBa1yRtZwmhBVz3uhGLVaPdyFz586krvK2hnRNg91e3RUKpWYj1Umw4wTeE",
  "key8": "3oAoXMf8J5jfnBohfTBhQQZ95WUCRbvgnHTZQWmqjcNf261N7rP9uXncqLCXviNPaWzbywUxoPqYScWndGBVWVkZ",
  "key9": "2PMtJ3qbkWxJPsXipPc8TTefEMsSVCW9vgyJFiHi8C8cbHLaYNindtt6YDdrddNzHfKnZu8QVRmoPp9DrLfHVuEF",
  "key10": "47Byvo5ZbL9f36KHJfoendZdGsymTo4bezbPrJYjsRt1fvhoEhhD2UjgLKE8dmtZaocVuHs3N6NZFH13X9V2wQL6",
  "key11": "55SgvYniNdipgxkGU8Pemzmw44bqQvaraBbdydGFnxW9oX1XeKXmD8DmLpck775X6iHi4fyuf7nqygWookuAaAWS",
  "key12": "4rUupAiTaWobiHyx59PJRA3wtbjVQV7pP47AdfeaaJeNmYEFMvzXwGDP8pWDAz26cF4qC36xNAGAKKqWm3bsdEi9",
  "key13": "2M7AJ2aEXKRFS9NcwmMj1RR5f5ZtvC2RTmqjpXBR8DtQtVTUZWFpguLyDor1G6U29YAq1SYaigmBYMrwQFfnBrqM",
  "key14": "3EQhN3G6aHFXJbBNUscekrUEkzbuHHRnpyaWZpxEJkVqLxfbYq4LGaAqAT9ys8ATagzYv491jz46NrHWfzT4WY5u",
  "key15": "62PEWDehcYw9p5fPsGQRhcrwnZei8grnCUSZRwoZ1HyJqKsXues6EniBVEbdRvc4AA5bmKFJuNYyDYM4igRBv9th",
  "key16": "3EaE1nmDkTLNibUe67oCzusPgFaW7jtjLhb3gcFwdaUQMgsHyPQ4VPd3FkLozuDr61DoSAV7yVMAthk8vtmBZA78",
  "key17": "4ry1u2CAEQyo3RBS2Sus4k9bR1iUKvAR6XtdxabPgXnPk9gcV4SksQCwFsGGexN3hDsdqBvbdT6jFmt5eugyJdrs",
  "key18": "fUA4FfxUun4eSsNCubwX1UAEiJKizxgtK1Ps2FH9FYbwaaxuNpcktswGFMfT22DLuW3cnYYAMyKaCe21SGhhYWV",
  "key19": "UCnA37QznEDa6oc3AmyFU7rtXXR5QHZMsVESQv9daYrygMGVK9R6eXqidJaq5myZ2Y5NbafXvj9J4K6H3pinWMo",
  "key20": "51fZmW5U59oF2qXWy9urFFtMFEs81qj3CxnVMQfJwgNf5f3uYojvCW8aEnnc5vFnBjCTe8CqbpN5L7TP7soh8rxT",
  "key21": "2kvHHMgX3dnkrnXhLcPCdLyEhpVtkyfejiHXGRjtxiWQ4fAzXxYTPbgCqFjJmsPfyFPhn9JAYMvDfmR2ERNUQW6o",
  "key22": "5MzxGV9w6aybWCEyB31WpiHuRjR9wLsn7wf2HSE4Jnre6WM2Qgj9q4D9DY8x2CkqYSKyw3qk373TJYZ3SnqMFZYc",
  "key23": "5CY7jVVmX3icdedq5UeTo2goF6HDthsyeu2AYNoimSFhbPcYW5p48YWTCaqCAB4aNwXXsRzywfGHbGBPHfR5A2LB",
  "key24": "2kLmzDYsqu5Ktky8JzcPMmGfhNcoFQPNKFhc97YH6bJysNyKNYugsCkActPa6WDF58pvmP5ZAa6cnq9rUGQ32nsj",
  "key25": "2RmT8wkhxpseoSLU2CHMuRP7b4Loyf3zMqrQnWch3iuha2qfj6qAoTjn7edEgJzp5LkzFK6ih54pnWrBvWGa2YND",
  "key26": "4jG7ykZECsciJoUyun56nG1ELj47ZfeT61wQUJzTUWiPRZNjzLdFxGJibt5HECyFtcjZN6Jpt4qx1uVNj4Vkzao1",
  "key27": "2qCCufr7QLmKKVPk91rGRnzdh3Se6UgvoNyn9bX5HvY8bWpUSuRsbJEgUhwSM7x8Xbb3kSvh5BpEEtUudc11Tk5P",
  "key28": "CSnMaPen6qx7A5qnDjBroHACqqfmwfbbFxeTRqVDKNnRXrpHTcy2rN1Zd8XURPbnCLy9cv3YU9Q8fJBBAnjSjed",
  "key29": "3cGLFd1NNMkwMDzT2ZBxdunrmjNp4WpPy1hUdz2YqGQSDNp2Hhts87X1rV86qMUQRJo71xao9UEucPDFrgociHc",
  "key30": "4xJrzz22kMHxiz6mFyaxddJCPeR4r8GEXs9qZZ7dtEFPDp8Rf5ts6MZhZxLz98UvsqYT4wBVwi64iTE8jsr3MtiZ",
  "key31": "2S1nsphDj99KJYrSsM9LXLnAKdk4nYrKkaZNJp7vmecD6boAeD9WeFP3BkdgUvy4BiYzXnd64PmcE7Z7tVxcH5ja",
  "key32": "35ruoa2Ru2Rd6D58jmSfUdyxTGkrVFsiUBoZXC7oWJjoBPnwFsRXrKpXosJxvJLKLdCmrdw4kcSNGiAhEPXMuDuE",
  "key33": "cJFmB6MW5KpiSYUmYQdcX8Uc2cQAFjcfcYaUbBaKHcX9E45nyfq4jtMz7Rar2wX9SbGRQd6BxjUoaYZfRWUqN4x",
  "key34": "4dcApgRLEQUwH11JTLX3XS7VXhtji9SyQt5QjGKtMykv3YGc4RYqxS1dWPvjXy698p1dXEKcGRoPWm2y3evK5UM8",
  "key35": "RFb734Bf1TMwaJ4JEG52vC5h9ZFbPCkMHJNM9unMYjxM9LgSNvquZsPWiqRB2MnkNdiKbJ8RYgR84v7RiKNjD5U"
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
