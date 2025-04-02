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
    "3USPsFfiw2sY8Vk7e54zfnsq25JJ9wUCqgk4iiKWehAtG1yQ93naL5kM3DosDvUrrmBqMm6gsthFgABGDR4AdXpE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s3RUTM96vNF5teriy5fs3A1ahWrruoWB8uWivm8TcFUEuN7KWDgC8wmzdKMHQbCLgwR4Q1X6mrAyR1BRgLASu7n",
  "key1": "WSWjDdtyiXUuUtebSxzgnNEEZC7nwUXSHxqSd6xJg4sYjKd6MQA4eQaaQGaWGcjC2xXRFMkUM73sf6D5o3AzCY7",
  "key2": "2pfEQBxZsCmKnPNVKjg9viss82VMq3Z6oh7yJBjeJaY4w2aDbYqgBZa8VYUQ5sCUS69A9uemXDSanf7A7wXJcD8F",
  "key3": "5TKYqeaagE2CG6RSFtBFZ1WTdEdThNctkBzB52vgVezoFzNZYowumf6T78mdEUz6Zm7mvhrWPxjoEB8q1U37Ebon",
  "key4": "5aZHWd4sEHHKcAvg3rWFyEDUoMrr7vHxdqmkn7933aUhBuDZW79sWZwTYqxNqzsTRNBaFPAtdzUS8fUWtPopBrDZ",
  "key5": "4imc4PB48GscHkJJmVfVTReFPKUmKqJNGLaNCMb2W1pSv2ognWACkWyu33BdRGfxcFUwXvi2nWLMBPcDDDwz72Uw",
  "key6": "o5Vye4S3vMz3ahLAeMJhebbaJ9xRrk3727budpqxHkFNyozaSpVnQHxBpvi88A2vkv4UmKPRqMmVADh7TvUZvHM",
  "key7": "kydT95pT8AJUDV55KPTMRDD9tuEUZLnLERYtjcif2tp6ueWdKijuQa1UK5gYjBfkG7yBGdbe3xSmKXs3sux4Fj7",
  "key8": "2UC6mkUqMeedbMgiWCXjSzmxrqes2qPZbCKUypQBqTmq6csbpzCvtaoBzQrWVhrEgyvrh2W2AvdozWt6AMihNsJ8",
  "key9": "7q9nSPnwpSaW1K4WLZwNgrEZz6BVVg3186rxacpcWtuxMrEM1wSAQRmLsruYb5iG7bahz8J6rdy2ARzuLNXw8g5",
  "key10": "4tS1wRFBepNnkKdDcNqbszoujRT4nyA41mkyUjPzJrNRATARQL3YVdoNGqAGPsR6koezVoUEzsUkCXnF7fxvfeij",
  "key11": "33kCXvCbfr8GCiF6MEqt6WBxTRcpSWRWevcxQFT8aqQ3bZC2T12J8Hytt4Xec5YGRjzrEzZbBSVHoeVENpj4ikgn",
  "key12": "4DNU61KKtUZrnDp2mD8XPmiTJ1UXpzg3mxCa83gWBfWF8nxh4Bec5hRRhiopS2ZyHHtjXhGvqBvoTjSgXjrT1ftt",
  "key13": "4C3SpyTUkaVumEP5ywjLJjY1h6Pff7ZfJKbHchjrNWnyYY4ZEU26WFLcxmMcyMdUgdTiGa5Uw2b7SAhDWupFFMNq",
  "key14": "2bbiL6BgwWxMRoELGwLsy5eKrEx4VXyuVRY7eabrPQah9t4RA7RezNCjdmZjxdXKhaEbRW9GfCfsdpAkFfNDtSq9",
  "key15": "5ohiutm5i91ihPtUQnkawxX5MtsQKYQeZNbwrQC5Zkiw5FBWGZxxdCNoEqvhFAXUcEgfJPLsbMbDfPJzwdAwrg5t",
  "key16": "2wAE17qoYo2CqZtWtQ9J4rRna8N1qG9P1dsASPAU9YbL2KxJggLn8eHKYZGRD8e3oxqV2TimYUXT4n9xMWgtrUWh",
  "key17": "3gpsymWc7ZVSjdR9UbKaNerW5nqXzeE4EMc8W1TWEQqNcsRmd129Tvd1NgAQFy3PqCMvkqqGm748kSq9fQ6rpBgk",
  "key18": "4QehSmveuGJDruaLVhQGovXnj46vu5qWDBrUd4wr5TwpzPpzV2PnaPMhjykgQ4brastiteDbNqG4tNd9AMkUFUWW",
  "key19": "5XbduLjPbLydQXnyhiSSYx73ZwhkxeEMwkCo3xHvNkU8pUdYC83pUZEEJ5qGi7GQCvL6GhnRJ7uj6igCvpDsLHbL",
  "key20": "4DZ6e14khbqg9M7jTDYWBRKNjDedaTrMxbWAiMmSTZayiX5W9zgftjP8b47sj9MfqLAW4AnmW9jJV77GiHiEV65x",
  "key21": "2kCoV5B45aF1d9AsYdeyHeGgh3KKiGgvJRMyMBaT4bTZj7zAhmX4W3A7taqFhd8Ke3aysxSuqMRyGJmN7FYKKWPM",
  "key22": "oHeUSboid14YTmgMbDvCCswvXP1EXnTNJvWcaV5FpFMkL9Yd3uZU1yRm1fiCcXuHpEj8ozkrELc84sEjJguLeuD",
  "key23": "3VuCgJZvbrcoNv4EWk2RBdmdnbgGKse89XqEfC7jjXKiWj2h5k1DkUmdS1JQWLBVXHAhKPsVqjG4kPFB5FCJpL8m",
  "key24": "3ee7YqSoMGii6gdKBuZtWE2vRY4TdncfBP9Aitc3J9nMDdg4F4V1EvrqD87refL7wB5LkgXYUCu8sebsPpir3CPS",
  "key25": "39a95rmhe8SA35axc9uMCDV5Sb8y6HxvRuy92ksPJ5LWpVkiEGb9zDcATpZqpLdust3TBvTuPrCHT9paaZRw3CLd",
  "key26": "5cv7254MfV8Bj5CCrSxV1YKRBPu7ZTtnpWqbZ6RRevn6wr8oRN6XGWVfyNPvu8UUgDdA286Bp3xe3SDWH9PNP8Ux",
  "key27": "5VFoKyLUD5N4Ha6o5k2BhkigZtDD4sZLrkkcS3CyukCk6trEHL2GBukpg2YdeXU3ms4LeFEomTsHjghEzrtwrmwG",
  "key28": "3Tzsx2scQq2sHV9nf1FXDUBLvihDCuK1HzMvDzecZ1CMBuj6WYC16GUWUmV99xWmmBfDmZcVeUhG4gxgKALBhkGp",
  "key29": "4cyThmtDk51H2HgErEHsmSWMsXZHpAbMYExMp3jqQ5zU5cqjtc7SHj42uNCyDqtBj5q2EjSsrdH8ckKG2pAoakWS",
  "key30": "32H34XyQTUChGtEVy9SxKdVwpvxkBedMSE7CxUShQDdV6qGGZdLk9yHbawMKzkzf6b2AmxHkgpubA2GzZFWY8eQw",
  "key31": "YHzoKej528FdbrRraNmRPW8QmoAxHv5WVCkJ6cionauwjEJkT79i5cNtzoS4V5sp17T4xDpdt5dumkNLNeb43kn",
  "key32": "3Z6md7PLgzj5w3sr3txVXZb4eRtb2nJZwcD7jyofmfGGXGi7K99HZaXZiiwLNoFjKp9fsu7Kfnpc3if4VZxTMAJ8",
  "key33": "9hFDtoSNEZbwB7v1BFZey2M6gLdy6fwCn7YaLrVPg5WyDCGJSgxvXXyTXE85hxAUv5K8mwFH3AJQepkheL6x31j",
  "key34": "UEm94tKhLpWyYGeYJK8xPLdoZei11HYrGdeCk8NkthLrDKrNY2chJbC6arV9HBduC6T399HcPdsrbKDqgUunHcp",
  "key35": "CujBX2BaZ4J758pjWwufMxQ3CMaxRJkCA82ojtxmkteXNwAdQgZMpvfQ9bmFMNmYuWSDi5SHGbKkXBWLfL45Jwh",
  "key36": "56E3LUboiZgWm7XBdxNFrLAMFj1AqG2JDg87JnritKPZpEvVRZKkUktqL3t7r45pYyUYjXvHgzmpHUiKy1bX8yne",
  "key37": "1KsFkeJzdVdtemkGBfXtdqNQUt8UFhTYvds9tMLr4nHbLW7biji3fg2ubtaityvDCHSCu3jgATBR5WEMW1Cahyz",
  "key38": "2oovpNpt6LsYXtQFqrVVuVyiDCTHbhKRbZ9q8rgEV1mdU72YpHhFhre2ijBBWRpTptDvHhEVEeiPbhzxZ8amFLUp",
  "key39": "3FckFw5PrCGzY54aghzRR2dgm4n4LYcGgDDBuWUACmScn23dgGVpH4T4nnmJhDvnM6JJ2kgPCsBS526Q7ddigFh4"
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
