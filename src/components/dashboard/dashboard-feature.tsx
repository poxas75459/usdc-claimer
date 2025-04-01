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
    "28PgiSMZBUC8WMptqeYGR3sy4vyZ9tWXGQdFujnyGGdULmhdk9QvmHa7CgpY8v7fvD5ZsQDqj1PdCqT6MZsmStJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DKvocLj8szjT5o3g7AXLRNYeqhVwVGVDDtwjmsDdoMzNSgLwuEG5uMDBcnYoyDCGuivHcGDdQrhCji4hfiHhz3n",
  "key1": "5YpmGL7HVZDdVhLfEC3Ragkr7hAMdYykBSXHkdeTiqETX1jTuZE85Dwy5tCq5QnQXifj5oKGdCL7ZhuVrEGw9eSm",
  "key2": "5T3SqcVTQEVg1GyoAqEayTtFsCpABFFj4uCMwRQKXBuKQbtD1w4onXc5P66zXPMw28F91KJWpyoyoU6X85MFuPiA",
  "key3": "5TdSS3TaAwEvgDh4t78dacyP8ooJBcJCx4aaXcekYkUf9eeYfBjuJGNSC9AxCr8opdwx4jphbXJZebYsjZcVAtqu",
  "key4": "3Hw8BgZTGkSduReWgi8Gf1tgr54uGkDpRR4HT5hGgCRrZi9bjZtPCuFA1MHxXG5R8aQushVBBtdb8Z8yZE94njgK",
  "key5": "5tZAjvBgeqix34n1gbhnxK81u3aiUjcuC5EcMGeei1H45gqKiLpcVqLUeHAr735pDVxwKSp6ZfmKgbDd7vshsfdR",
  "key6": "28BJhRxgEMhMPLXVLFDXTuCzkh3WUfss37zRLmTy13WcTtjPmqsuczFbA148DUykrPk19BUyvUDLdzh9fKdGjtvZ",
  "key7": "5soA7KnWKxrLzVzDA66n3TTBvsYtDciD2MqMjtRYBqKw1oVC5H8cfKM5UDZ7vJCj9twF1GgAP3bdy9vVpC3PxT6D",
  "key8": "sGLV4vyzD9jGrZVaUaRbQTVR3kSyGtnRVH82SppncE9P6JMQQTBneV5kb1LPYr6C6G36ZsLhJnar5fkqxCtcdKg",
  "key9": "2yEfjHau7fJZR2YqEHX89HHwPa9XxxDuTBEnVEbWDuvFDYePegaFHhCnYJqGoPtioUkynxkj2JWj8p5pZdSZichs",
  "key10": "2PbmSSgi4iSaE8QLacZyYWaWjrAZUWyNSnEbAnxNAQrFmahH2vZnAem6nwLYXDHV7zCKBLbmGR6jJJNUrJViDZWZ",
  "key11": "3fcW9STdNGYR2NeneXAhdR2njkxmrwQRtk2nvcuRFp8Ym99D8UwUPkZ9Z21Tn7TMNtZA3U3Jc1C1g3ZsMdMVmpmh",
  "key12": "7oPEdAreebuGtj8wA9KifVqtBpG4s8Enr6FEi6cAJU6D12G1L8GBpWyQraT5dHN6zZJiF4Qgd8XZZ6KyFthtyne",
  "key13": "4zN1ULiSh1SFG9gFdTqoeAALg8ARA3ftpTigTtnwui3KKBEWQHuLVzAQyxd33SJyvUxivMz5dkavU3fRdhPrr1k",
  "key14": "67qR9N4qt72JrgdRT4KyQ2oA3MMdcs2KngJ9uKPDAxo4UYMD7oZJ6jr7Q4Dh1iNA6Ef59Wt1T3wPjv7Btbb9S91W",
  "key15": "3UhVRfqTBW59g9Xz2ccL9EkFvAmb9ij92uk5PB1sK7bWtAUGqbT8RK2jsoaBt4Gayd3bAzjFFmP8SbNFMNaVnQcL",
  "key16": "GvxdrYxUrDTW5qp29pgzVQGSq85C2SUfhNRQcS2AzwLrDYpCoZQPaDK58TkPq8jAKBwgjP7uz5san4okQSf65yk",
  "key17": "27JnifcDMpTbUFnSi7d18AbRscpq7ej5JuaNroeXGiLroWp1nxXjkr6hJ2X8hK7uT4AKSUu8PX3yCHiU3pctCAPX",
  "key18": "5vfTPqoL9PtdAFgij2cW5gLqefjA6bvenB8HmBrvJoFfLXepdrDdTpEDAwTKDQ3hdjspijWzWu3BQpCeKGgcM1b6",
  "key19": "5pUhai7jpDSW9opQqnoMnavbdZ5sHpgtCeEFtsB9pRZgpvP6DNHKhMbSTrUSoSCXnSPZshugrxu7KrKcQbqfhT5z",
  "key20": "563RYZ4kyGfufEdv9zEw5RKFnSKyG8BupqUeytXWgDBEve2ps4iEUDb4m34Rf3q4vJMP3MBCmdTfyUSUWMBxexCj",
  "key21": "524uFpFMNVFitheg2ym4VzrvJTJQ5aRBUoECeZww76fULGhH4YxvHMukF5BEgCig2SDdwLdVZoBtLyKBTW3dxWvz",
  "key22": "35MWfFHhxBHZLmHHc24pMXyapJJp6ZpvWmuzcz2ped16oygo4E1eWUaheGmumgx4qcf1ezttE4aBkVirQTorTbpy",
  "key23": "5BZqbWeGQEyZoFhuPX7mnpoeV3Xjto1KzokzniiWiaF1WqxFQzhSkK1vJvHUgfFcxGJ2DmMmogknGwY1XSqdDUev",
  "key24": "57qamMwzHFMQxSU5nqGpsuEaah3cJyafEdCkoQN2FRHHGx2UmdymP423AqaCb8ATnFFcC1ZBXEkb4YuXuwwUhbQa",
  "key25": "2kz8WQesKHZUsK3La6Xnej1NzjTygHmg2VAiUsqTEfYweSWzv1gXs8MWWsYHURX2HS7fzZfPXNWS2xQjDVm25gZ5",
  "key26": "5swb1gQjVSg6YGcgTq2sdFbU1BnKtitiHB6gvvWXQa6V4ViQ27JemiX3iECqfVFjT2ytpXaxJ2jUrXFNCsDi8RNE",
  "key27": "namUE9tWFeJB24wzJ1cczT3rigN5F5kit744jvy8PF3BRwoUDseqXUo7LsNRwGqQPGtGBKuKyExasQ1ULTLoS2e",
  "key28": "5nitMaiSpjVK21csNZqVdUF9wL8K8fL3BNrxC9BXZ82qc3dKQ3R53LFQt3BS12NB47oZk2S1EKGw5nid2g235nwD",
  "key29": "2D9vPjTYHZs9WDcE1RH8z4b4mozddATRJdsCdZvzHEAgbptuVPgMtEZhKZAL4fTGqUUko7vJ2EXxBzaRTTS9Zfck",
  "key30": "M1JB8aQ7ngaN9hzpJXjri4oicAqAMRv8uiVE5zJSj32sDg9dTUKJ7SA4A2Thw23Y6CSKwLrD6JUDrK6YU9eRBvz",
  "key31": "564jXfLX5SU1Xw4GBWNQeYA5HtKXWSmtMuVj7E2JmDjZ9VMexRNRLm1yVkoUfFEqcW5ARrxjRho3b5QNWqUkUC96",
  "key32": "2hoa7FfvgWoTzirKRJbS78G1g1A9Ae44qss1XyJj5JJxui1uX7cnKVwU1DeLn3xRHRXhdUM92UafvJpt4sMfpJFq",
  "key33": "4UnL2aYp1Gifc4Nq5hqk95p9X2GiqqX7qe358NZGwMvKPvMdBgekBaiq4BnMCSMn9ds3CwWr97aSkuhsUjkkg9un"
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
