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
    "5VzNb3asrXsakStHDpPZajf57XE9EktroN1tcHK9W7ypci6UNy5EdLzewRa926YwzPF67Lt2fQiEj8erjF6u5pd1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C56zd7qRyjfx1HphhMH81U8UJHiyBxqPxse8Ua2YuFxTDHm3CnaYnkbdXoaJZQPYiGeSYq1mQa1714YJ5ofkvtZ",
  "key1": "5191sy9rVMCuxEfGe9XEvaUh4HzUqmCEiyQXzijqqwVKq1FUpeRE1q6pcntB63BLFpAFG8DPBCqzdAPek79RjzsJ",
  "key2": "5r3misXTwdamj8Ubg7d5BMo5gqpA5cVM2MWTUaW3jj5LZRpYSaALWYg3kd3owbNPS3TegLXySsrh16owTy6k3wQq",
  "key3": "5q8JbXc1cP9VDJunNpMMWke5qgHPAG1G7GDYtdVFn7E87s3d3Vib1oRjDLBnDVdBEi4FNUVNThwQ6v7CvHvdXBCw",
  "key4": "FfZUE8cUhEaYdTPvoxVKYQhL11FiJ1azQP37rgeDHswJkksmkVpzTdnzBRXAnrncpMGFbdiQ4VGMbWFgZqGTARV",
  "key5": "4pBadUGFBqmEzMt7dNknxGD9syNAZrKcgtFdrAaWSTcp5BsNQoVU2raxBgDwcf8eFLDYNfYh798pvEaDEwcYbCpn",
  "key6": "doYcLY9AMVsJXfxHPHbY9kLQJGhf9DTUzULW9yqLs95Q1ZjYLu63rKph6WiMFhA34Wv6UZhFP5x4t3dc9JyX2W4",
  "key7": "5fzTC7W68Hie1RYq7emS7ZTsB8JzDWznLEhMfqiGkehSXhz1JPxUNfj6Udr2nr61H9ZzThFHb552HJJgFSTnPBp7",
  "key8": "4VvgRzE7vKMPH9J2FSazQeBEY5P3q9XGcMrxHZgZqgueuRxSP1zsu7rRKDXitwsh6CCWjx4vhz6asC9BKECxqstd",
  "key9": "5TVGDq3LdRnnvS7WgAXfJyJVgJNf7KJ51B77WSPtYo3rSNTtM63sgZHN2oJGrCtHAkfrRdApCKJC98isj2qW6NTm",
  "key10": "5ofr95QShHPYPg94xuE1XGyAZjtSGr2dBTADMsQZsMxJ5KAEphS6urTyGR1Ji7fKRH5wueLsEJ8VYgNPBkmmy943",
  "key11": "4F3ToyDkshk4bD7zu1KnX6uwkKZ1mddsKT8Te8i7Es7fEBZAGTcz63DgVuDKg4hCum3wqYynT9uvjuQS267gH215",
  "key12": "4hkrK14KEDwgwaqUaegRxqPG1dKgixKncKsXVqNXZ25BCYeeybyHxv91GoMhMFGpbQscgwF2cYXA6NTfpZjKeijm",
  "key13": "4TdwjBQSkWW2yQh97Q3HgU3F4AKBeEsM37qDQHNcu4LMBMqdDFVLwnnLX7v37MWxA5xQJFmWFpU6aSv9SCruosst",
  "key14": "5USpUUQeRZ13d87dh9XV7S7fNnDpJEk2TmUY7fRhbSbn7hvu3jF75pwcgUSwyMMpGbScU6MtANzVPYDtA5FyNYMA",
  "key15": "3DquQ6d3qyr9XCBjMpeo86b6puAeMTnN1ckeGnderiz2XBYmwdvGpvoSB6GwqhiRbZVWTJ1BCD3fcsKWWAeTUXYa",
  "key16": "4gB9BbsAFUpM7HYhQGaxgXErgagWccbBc3d39WasQYjiMoNefJyiiAx8YpJaT3NJhX8RGw1FczKpFTwsmZYZrMpq",
  "key17": "61oB6usvrtrzzfXWw8V8fzAEdzt79HjaqadcS3LsytD4NtjWun2npNewTh2BHTJdPZYdzYz3jndFKmW25KYwVctx",
  "key18": "5HEMqwzibdpRvm8kgYbdRcWSwD86LxNWpNc7U37of3K6QbkZYDAR6nDm6zVbdC73QZUpXVitKPvT8VLAC6G5tUXv",
  "key19": "3VaBtR5wUHc2FVHnAY2XDNG2mELKJ15i8oHrfgBuhVirJLcG3Jt8jeZYdrDUxhQUvvrbn7vXNYH7iubtHYn5fQYL",
  "key20": "sGU6gGziTtkAQaECm6pfrxePX42LZdxToxcPUZyaTHpcBwQvcDtT27zNG57UnpqTGrDMKemJcj6gGhAd9GX9aBH",
  "key21": "2abpXt9WF7E31S9cNjx6mkw67EnGZg4NukEVZPmWzJVjdnjzF5on9gRifdsbxGc9A94snPyLKiQDzvn37TYUAcUG",
  "key22": "4Yeoz3wUQnLrmZtg71Z2rAffefjSkEVBgKktjtPVVrKBJFKnFv5e4AaJyAjobwTDHWcRGiTicLPiQeGuZBadmFLj",
  "key23": "4Bt8DSM6got6gZAwaWtfzXScYz9MxGBkBJCaBUBMoseLRgVwNF3pFyzEq7zCYymULTjJMQSspf6oBeqbnfAwVtT8",
  "key24": "4eeuuCHpvuTKghBBE8unRJovUJfygGhPj8t3A73uNFZWSXhCJpLmbvqGhrcGBpB6agFFE2urv6ndBapicUaq6HQP",
  "key25": "3W5xTYWmCLvBHL7R9LX72YSSeE9A7vhHS4hmjufgJKXW63j1h88kN6RUC5Y7H2znZbYZ8NMPmUhAjrs6hBKFSg21",
  "key26": "4UDsSrsVAyvoC8quPbNcYZTXJdBsZ1FWaS4qiLjVHMms3ongJJZmkanGt4MjPZQQ2a4zXn6ZLiyTPmMB6CVM1vcu",
  "key27": "5KMr7RTuY9v2MpG4dfiPu16XwwCJ9ebeCfrDZbDZyKGLRFNqRFT6HnsmPqS4ukj2Xtg9X5Ms7k8vsfuBQwUU86as",
  "key28": "3qnKQHABqu5Wrwpv1jsRJrHto2C6baYRr3umeEkumpYyTMR5SSiHJkq4njQatqbs7YeACQtrqEfQosLi6CGzM87B",
  "key29": "2ymSAFR7pE3rfxHLDTTJHDFx8XSPeVdzU1mUvFs5pmCwd2F8sfPNnVU4VQSQRAy7xAuFZMMEj35RahJr7Q1XQa3T",
  "key30": "3LDFyeisUzwjUAi2ZGL6E2tdeUrmFnSoKvT79eGP24He2scDdA8ZWbp5rpF3QMJ87S1sSr9gc67JCkiwE4Fcm9jN",
  "key31": "CFt5M45WifGqtV4Pytkj1TxVmiLthDEnATdQxC3zwLwSVdNP1HtQcDrhXhHCUxE2YXvLhJJSgwPokX3mq9BVxaF",
  "key32": "3NAYcLz5Qyn6MfudGhZpsNkfyjPDkbTBY6YY7t19eNJfLvwtoTYK3feWcnRUedEsGAYgqv8YoDLqkBgMTdWzk5in",
  "key33": "4KakVw95gDpktexhfGEurbZzvwvj4qH4VfLRck2zVogY76SqynV84JsnmbCR9w7GrMVsN7GmpC9XLeeq2eCBmvSK",
  "key34": "5LXmFbjWkCzq58pYCUH7AhBV3qpDzVTZ7zFH1YtCqUAzvSfwgUV9zFB2UHGpL7oacTUme4PV25hsmkFj7GftTEuD",
  "key35": "2uiH7ZKc8EMbEJUEcFFeCwGqB9uHjimx57RitUwgpWsWwi6Xhx7iXXAXu7LmHcUGgTnch9wo1JyKBVYDsDCpKFtH",
  "key36": "3jjLoobxidQeKjsNkt4R6jh1Wj8XgeGRtrGdybqoByS8AAkoX2wFqxQg765MNEmgAumtHckxyinQ9uSrPNM7h47h",
  "key37": "5zWtvk7tkFA3r1oYXgAuJQ5kcsNoBw1w4fRz17tsZFpbyZL81Ktc89U7r5mYPuceefUspPHscCMBympQ5BV7HWLf",
  "key38": "4aNwzerucptRaEMuD8nD1pm3otDfFPThyW4ebuNW8VGzq8jVi8Mvt6ceUK5tu2GGCdeUvwyJyk5471agrmSYbNTr",
  "key39": "5meHqoKj1Ga12xXNAu3GL11CkciRqUMGZNqahDuM6pR9r2brsT5j8tysFFT2VqSFv44Hcx828uRcoSNjLD7E9eBv"
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
