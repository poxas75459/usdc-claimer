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
    "2d2DuzeuFuXfj2Xhf5fMPWXmuDWnwZwEge7WASsdXuUwezDD83CKWau7TETBQnSEk17oqmzsYMGTyXzAQopPnbCM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SjPxN9ULjztgtR9ek4NtUKD9PrfWRoLTqik5cyRp6ZepzZLu1FsgRNqYPMrMFUfYPASVES6L4S4asstWwz9ojze",
  "key1": "5qT6HaxiDtgwfSn2DKp4hXerFebvt9zLZsaJAUtACAJVfT1BHJRGPf78hWVaMjZ1Cy5anptoqjXM6a4fvXZDRPTL",
  "key2": "5u7gk55nFVuKAeXKUmUWRMM8zwQmgBq9z25taLSZk9xFPKDzbHCHQPxebaLwGYXHTxLSfeAXTTE4nHCbngYisoka",
  "key3": "2huf3Urya1Mf7d4DRUPxPwVE2MiCjXtRuvLWr8eQb14Gi5Jzqpd5avuRAMwvUtyTNwE9gbZY8DTxpUVDF9VTxSDU",
  "key4": "2Re79nVPB2H3Pxe21dPGPh6qFNBtYsm438FPmHVQo5PW2K44Td2sK5S297yE7ZXfJYeTCkUEKyjUjcBaFTfa6Sg6",
  "key5": "4KgN3qMyoUt3vtN4AXhUy9Uwifu2ScSgVsBzjwTTiAcpq35LNY841XL4Docz7bdm3j24LK2SHWcqKdPNXgNQbE9D",
  "key6": "zD6Q91Rr4pVxvuEz9ZxiLKPyCD8T7GiMh2Vf51mDNRu1u57Uo1mMR9YRJsf5Y1ThmgrXH41wah2DbP1HXuBaLj8",
  "key7": "5pVuH7wtCQbfSdT13r1F6HdKhb3eAWHAsNQwvqZBbTBMW9hTid1w72qufxEPeBGrU4PEbehAgew26ivnZjaevc8A",
  "key8": "3Hvk2ZM7AvkmPq3wwJYfkAFrszgMqXuAEH4Rq9FJoBpz7Lb46jutr6QKTgtRWM9cHeSrM3dTAEiba2G3hUr8GvhP",
  "key9": "3Y7vzf2DVyRqEHrxSm8k2WXdjnBcfoEwpYUdmWoyAMkdkPkTpcMBMpbNjXdQdBaFbmtMaWBDrzRR4S4EE913Bm6F",
  "key10": "Y3XDwfEZgHZ5Tfzwzyi3tPSi3BARJZdifBUg9MvpTiCpX265aj8yt1JUva92GCS3tnLaFrE4rrTrvfybP88ENoJ",
  "key11": "2KeNrFrvAWi2LBi2QTAzVGrnZqc37hz29pU4ibmr7SqD2toZ5pbZh3mff5MHeozDrNx3xqG1EPeP9si7eS5DPp2G",
  "key12": "t1eGgm9EN4c37gEbkK7cP7jgyzNafGjAxHBGPYwcTWuGcsSrRTm537ThxxQLgAdBrpDgy3UZqVCqRefovsfk41E",
  "key13": "66vnMuHh4g9iDwKT3CLHYnx1vjXGSYfChtzUZbkRS4NXLM31VkoJFMiK5xuSnD9xE1VkZoTFYxtm8PM8DLfseGE9",
  "key14": "3cKYWE3bkGtQ2usjfZLzQXX6KtKG26EMRAGVVsegUSLWStQQfX2MmgV4RdSjxrAg8cf1dL2aGTDoFHwpppxE3STQ",
  "key15": "5W3T6zZC4ErPbo3wV7oG5S7zRQoPmiF5rszDfFNTxUCyui42b9sgpMJdTDEK3xczoXuSb5Zjy6HHmNk2wdhyRQdL",
  "key16": "64qMSyekp9kRMG922xyRF3mpjPXaDhTQJEMtWtJU2DKJDHwtEcbZLZFrnB7R7bUAt8mk9vETLLd8mT2tZ9pyU2r4",
  "key17": "63jhb8G6EriPLLx1N95ANiVf7Gj2RYfnM5Bon45JoT3mvFaRC6cSp7rzcfAJg24ZEwdDP28kKypsAjJPYfhLgLYY",
  "key18": "sjhyze6WoXmTNpty1srDT1o282heRZhP8uy2xeCzNBBTjX5FAN8tXYGpNS3Fh4mNNw1gznfjJBEdRk7YH5xKAS4",
  "key19": "3gZcpDrwEfacP77cXER7egxnYQjR5uhD7hnfkKLKXtSUDpWJSRubL1w7FcvWD4uVbVPETB1QSq9FX9MafBXcM2e8",
  "key20": "3wbmwDrdAgaj5XFtionMi2yKYzpVWDzLUMftDdff32LNhw4DnGp9f2cqYRvNgc4yADxAY3ELh8LTaV1u4h8kFyeZ",
  "key21": "RRxBeT7uDdhMKnvZpvyC84BJnYQGdnJvq6iQjVaXCSq8yAhTpRyDtUD3EjGNuRiGAjK9CxyPZMApaADba7A8hrB",
  "key22": "57YZ5LE9EQnhrDjs6GoTG7UmvYJJWuhXpDhiFkKCxyWMhjj7iEWHE7ejLfZo8pdHKaKahT2WeN3PzXLJFBp7s6r5",
  "key23": "5vWHcKHd9aL8VXvXnzZxdbEZRtUHgbKHt7f1Xe8miHK6pyr4Y7NQXBjX4XXfC5seWQUKn1HmFgVFyLGgDjBWYmxV",
  "key24": "mA65nVhj1kwczHiuUku2Ky79dqPnxMQ9TwA2QSP1h9TQyQDLpg3TfXQfxqy4tk9qSMUXPpo1x4RgHsGVkKXBUtD",
  "key25": "5vmjRZUC2vSoYpT95veUdKGqoBR1gTqNSt8deAX24f8JVZyB11B7PDYDKS3Xz696rtuSC917yCSYJENtMjUrFRAt",
  "key26": "xXHbbnDf45hNJcX2zquFkwHj2FqiSidRNak1LRLJe3XN3rByhSytJaxdvBBWbmbxiq66V7bEtp9jKmaAQDDVv48",
  "key27": "5GtiUfz6v9oHKr3MDDizpQEcQuzfW4vVfWaPfmrEkMM4RK9SeJs7v81z8m9cJaV9rvPCfY9ZgekEbgoMJCWYn9vG",
  "key28": "3rPVp3j4Vv1bfaStYQs7Q6kMUXUjTGXKSu9668RLHeRdJg3qNu17CysPSvgCXQifpJqdFboWAwDmyWnwW8NuQ1WX",
  "key29": "4zHaRopH9LBK969VCNvDa8PrXMtRMKa2vQpF9nkGC1HeqbX3PDzTsi7CQqsUPD2vGzHnkNVUB16k5qoVwonUwt87",
  "key30": "4TCLQRjAesukXrYCjUQS9iR1byoY5Si3DwmVzD2kGnnNaeTAhxxDUV1HV2fjLXAwVB5oRX9WbRyka1kScoFQ1beG",
  "key31": "52fGLpbyuRXLCfCqDE84PZn4pJSHwrXnQEQLHP9NrFAX4jwKbqJYKwSe3X67FdckMpnpFNKhbfHf2KJqTyoXAvNh"
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
