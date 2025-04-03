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
    "5kRTc2KSsALAWLrBgNpbFEpDRCuS9sF6VYN943nZHHm1h8TbmiQY3a8LvpSoh6p5afG9n1HATAr6bpTjAbWqEzdQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c7W2pXtP6dHfoxnieAME8NVhAAaCcxsjsMZVqasyq1TviUhZ8ZNXE4f23ozVd6kfLtNizs4LAXezAV4uBLR53n8",
  "key1": "5NsQRSojLNpXpwnGdpti5brzEodeFzBJSjW6wSPrjiBuk8Nmy11a1crLQPKK3rXStL5Zd5iW9bgZ2AkWVRHXoYbj",
  "key2": "4Dw1zerWMKaQ9K91dR8En2RptL4o8m2F55Xs5GpQwBfUHt7iUNSLTfoJCR3YbRYhkF9BkEGxNYJtKje8TzrKq7c3",
  "key3": "3pM2F6W3iQk9WBYh8d1xNFc3bDGjhsExvtu36wtcZ7qCj4M79ubfp5TH8JLcyVsShq2tVLLGvqNKnfbK6pSmYmsX",
  "key4": "3DRmeSp7gjELyNyVVB6BgntqJSsZYXTdeZbSXvfqNqXVYPtfgf1niKDZMs2M6aeCDNsHugHFhywM45d2VxtHdJaT",
  "key5": "4PLyC2D6RrZ2xWVYfNNH2Ag54zBKVFkLnWg315x1Hs31X3XXwhpqXwynGeaVG1yLAvTdPMfT23oKG2FRRXW3Q2et",
  "key6": "3oxmLbSAkmK7WjSPD96bFqv9vXFNkXz98Cei1g7cGnULNqbH2e8eFSxDtu3MDiYSnHa8v7i4GwJD4mnZDJxchipV",
  "key7": "3Fo6wDLM9wS4jFzujhw29xsDDxQnQvbY6Xe9DCnTRUambwiuDUVes8wpy7h1evPGApq6dRombRf3QHuzeoG7yNos",
  "key8": "5oybLdVZmAtXX3tG7wf2u1rxxnc8hwSN8Lp8TanT7awMatDcXc2fX5Ri3bhGBo9kUgdeMYdEZytLfj6PFRnCZnBE",
  "key9": "3J4VGYeerdDTkTWGTQrfdRgyCJXhgpyuXLTcfPx3ekCekG2QENthwdJHcZCvNYV6KdpeWi3Jh7XX56swbsdXn9k5",
  "key10": "5WaWhxosHC5awdjvtYwcBiXLMm2XxiRUdVddk1i7RjgJjFrD2v17TTkFCsB7XT9B4hfLXi8VoKNPEBG5qKZt9K3y",
  "key11": "4s3wBV9Sm6QxjrwGo6ZywjtL2eE9tHqBu87bJ97CNs9hNQU7jMAeyuqSqT9nDnhH6mxzjebzNPST1RLjp6Qc71RA",
  "key12": "RCexonZMzXuBXG3CtEBAKZuWbD6SzTAkos8D1imSGizua4jqXpiJ4QAjJcN6XU6Wv2Tbmuh4tgABwGxmChjtYpP",
  "key13": "3dJ1f7DfrE5ZCTEwpUPYBfkXMUgRyiqjDnx8hgWhzW7iZsfc2tJ7Ejw5vMcPsinHDUqm5HrSYFJUzZiTm1q5uo5L",
  "key14": "v2SnpfFAbm6BaXsM9mWm6JxtAcCxak4P6Q8ptDsY6McxbezqddjCRpCemaJV9wbcUTBmC48vcTTNVwWQPEqGWsW",
  "key15": "5s78CFrii78QvA5Q1SEW3VifGkNoDm9HZdrj4aLCubxoUcj8CPadpX8sC6RtVdRGUCPAhYWcPTovgwVGQ9q1YmoU",
  "key16": "B7iubD1xKpNoqijd8svMjknmtDoYVD1GXmCQbZ3Xd1CRrfLkjv3eUvqM2QD686iBG2siMoTUdcFAcJRCRxbTM6n",
  "key17": "3yZm21P32zowrkSyxQJzcaQktD9SbjqVac2LNwXigHAkxUfuH6yQyfhLU8dr1EqQWEroo5fUg868PzoyibhL1Bwj",
  "key18": "XAkXETXXQG1pnU4HCgc4QtRK93DrDimx36RBUZtLxztF2zCsMGANRDJfQtciBLLTMcCTWjAwuubhsbfq2UUjTCh",
  "key19": "2niZThJmVCwUerpKRntMaQoErxW6MGPsPLmrSXxzW1NtK1CbSHwQyv5xuAkiAyJr7XHfjnKgCjDnNPrRjGVgjFY7",
  "key20": "4b5vubHuK6znnFSrYTt2kwYdbiuWckHDPSDQ73sPK7aS2C4rUe55RP43oDsLN1rRAjjM2PQ4kevGUWPWKVip6UNv",
  "key21": "4iGfFWBfUaA93VgWk2prxcUVZnrUmAsRQGeMe6UQcD9r71bJyDGiVzdAegopRz8qVGme4HawSZjeauzKxwpUR8bk",
  "key22": "2e6X3dYUmrCrLhCTBbVbKKMD17PSdvHMfsKtXQ2LGMgsgRHVgyV2hfNFNmeHSrc8kgd3PfQpfzCJmJ9iGh1QMWSh",
  "key23": "2tBdPhwU37qkHqHEuZPtv8BrVHnXthmkKSwvHxmvHaxiJg4vhSp47UTnycruMtCGiVYZDz56F968NwBpVDymGTsB",
  "key24": "3SGoFz4yVtUMG6NTyXyZmxDExtQcKZUVEF9BPgVz3rTsBCBpYdkVDbesW61D5AWD55j55UoHxyBstVJNC6EvCc1b",
  "key25": "5ECs9oDCvShQLkYzYBedUe9qL6EhHuiiJpjh3VeJcDxzCiBHabpHaMNTMs4kJdkDmyTKB5dgGUsGwVWGJGjSDAfn",
  "key26": "HF1tss5MBocZqDgfSjh392h811DDV3eK2nkB9qyjLYFGCx4b423Cv3y2GypUPeAmCr1TBjegyXGBpy4R5hH8Pdr",
  "key27": "3UFvTmckgvLf6dmRwQjXjxkBqFDK4Ndfev5jvMNsoNcwbkp97q9SNc2r8yvkM4b8tYTmckqdayNs2bKAoDxjSFTT",
  "key28": "5rBVZeNhDPnzEthgo232GjitVhzdz7TMCmrQX4FPCY5CXq6U37p8GmoYG7moPvV3fH1NC9To8EGtg2bcnvdz45Eh",
  "key29": "5giXuvLfNXMDPQeaVSMkQR1zEHkD8tPKgarLYHwGVyLASJVsjhWuvr6gTKL9oYPEZZ3txrZrACxqfpbdwUx83Gep",
  "key30": "2J2SnzFs9Px1eR9g3RsnFrN9UQC5rRx2cAPuTsfdiuRPvQMW1ZcDktyspKKfNyhd3JrQCwBuAP2UvtE6AQB658Km",
  "key31": "52c5XHZFAakG36QxZw3dgGii9x7XiCeJdq9w7dRCsuQNLQ3jW4vB4xgZB6VMe2BKoKJW8ht8AhzpWkdd9baH3kNV",
  "key32": "5fopd2VD9RouVKtHirTwzrB1BU7oNZeAjhpNd8KWqVJZFcn82v9ndNDAF9fRKwadgfHPDec4frkgHokxXqY6H8By",
  "key33": "51knNLQ1oiuEA1PbKwYRarodu6fyr8Fc9vuMwQcPLy7ceVbXa15uq89tXYsArDiEJHrKf6UkMoL8EMw5up2pYah3",
  "key34": "2wqb5sajCfwdXh1nUEzWsfTJCWgXUF8NKb1NBTDGVYpy3tzbEFreBWh7zsGrDTZC3xsdymBPkzfkjqAA9QBni41",
  "key35": "kXmQAZFREiioecZ8feVJzMSVhuy8Q6iCVKA17KyuLUjDseqBAwzxr6ncugFGshPALWbF26zvhdZmy3ULzxL8uiS",
  "key36": "FEzAik7T6Au8Px9jD4vuXchuhm38vDD86y7baGG6r9JuPquJsgTzSDPoNHKQiCDfpJ3FTmcY5KiBM35sZLRp59f",
  "key37": "42RqsKDqYcKXiva3TZpCA5WWQuQ24Rq5akFjKLiZR62isa4M146MFwLWnr7ydLjUik9mQHkxj3e7xHMpLXsRKaJk",
  "key38": "2t7Y4URPtksZNprxZ3T6Nuu1MgcCcFqT2fk3u1KcxTp8wqVGDxQMyYN3Lim6Mw2Ra4NJGoDXcNxUBqzPwXLuqvcb",
  "key39": "qHJFkmoTmfgP2xNc8h6usBPjPhzZxWbG9bGjCtvNY9wV8eLrwHcATjrmXUXzHwCDc1HxECftD6JeGdXKVu443Ym",
  "key40": "2nNAuqyKBe9DjipApv6A7qXJeNJ2sAnKj5yFLnMBKM5fNkzJ9HqKaGcbZp4G1AhCq7ZATXFFFLDx9GFmNkmhkrNa",
  "key41": "2EGa8SL7veQDE2c7r3E7gwmE6MT4m6YfMxwYCg8E5XvafhrhcXhRKs5uddZ8w2nhYJuGxJRMf2R9buXDdkZjsfNj",
  "key42": "517XD4sutipmmKJDAyveS32sJZZupWaWskhfKAxbra1CbNfVRwY3hSGgwpS5k97iKLdiiqU7uwEPcBK8xJQSvV4X",
  "key43": "2WWsnWpKC8WRRSE8SbQXgF4HGq4p7aSfyHZLHHceU1iKFmftMnpusDzejcKy2UgKJKSdd5q3EoGVF4sgRZRAUjek"
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
