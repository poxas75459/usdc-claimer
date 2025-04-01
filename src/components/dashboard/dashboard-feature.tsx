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
    "2oC3eLf7AzP6HuV7qrWTUrpXBQ1xqwN3Achfbf9WDceKUttfi64wvhgL89UY8aeDCA3oGg4LLTJ8WfTL468UWJnG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mWS595Mn6qaqxemimoopqWymGNaDmMzUL8hhaxeVphAXVgjZigr78xNae8X5eRteGoJb9ZBgAwgMNAQA4LhK97a",
  "key1": "sYBD5jG8CpKUenuVPqV1LXPK1EK2ca86uuQUb8CYJw4cHjuRAUpLzuU7MgHnjx7vsgvw7mofWi6WuFU7qF1hvEK",
  "key2": "5hrYS3TTtJ8dB3HnS7oYyWPvsT4GSAFqkMfEG9jbTwRu1tNZ4aeH5apbuhaoDasfxBYLrH4iX9hhdSaDguet7RA9",
  "key3": "JPMyQp9EyPeFMJo7h9eqS54HwtVgM6M3LxDekLiVAgV8dwjHkd2xwJAnPdLUYzpQeriNMpr6roXf214mQNiLs83",
  "key4": "2GmQuaNkjU3jqCT8JAFeDPMyw9hLTWiaZjaLfrW5kSXy4kVryK9njn97B7xRKFVUuJqTDYbkVcL89FiRNXu95H64",
  "key5": "2X72Z5pGtwgX5YbxMtnBNhr7uLZFGPKLfJfdF751kKcbFHWvseYZwbdKsK5AEzyRUXDSv9ArfN7XDBvXLULWTuGQ",
  "key6": "66PeJajNWFZUVBKbNq2Rh9vBurAGMiNxRgAt5eyAeUXMWaLP7mxRFgNEC78HmbczQcx4GuwxNr9vR381z5vkfLBv",
  "key7": "f2d4Tsg9iRdNckXZ11TZMHW34GvazZVwzBZj52L8DCpjPQB8GjqZ75TckT5rn3FEEhBUSP2Ew8KbSSBsBbm9zSc",
  "key8": "3mzHzZBMf4LAXQkAXGWGeUoTuJQGNwzETf5rwgBbGpU54VFvHo2WJVMaPd1z25D1PcAC7sjH4R8zX69pKMBSuwJy",
  "key9": "4NcXa5Uj4PRrnbQPwdrf8XxTz1aY27L1gfi9egDixtZ5U9NNRVpDn4vFyLocob5NqB7QcrjC9BmJd6ytxrwcLhA4",
  "key10": "5WNzjQtZtCj1uRSnCmvU5aWD4RXcYj4e93XFWhHh3ZuAbQDKcVN6uQEHedzirc6cev2n3KouTEr4GvpGanH8oLqC",
  "key11": "3W4vk6kxH1YF9CY4pwEZeNZ3A86sfYc2kySYGfAS8TrzTSMp9pkNCKC6969y7iU9SxthS2Wvkd6E6ej5T3tfxBZX",
  "key12": "4PJbnXvGMmKMGC5ABqVih8J7pwFshQaGo5Wbq3h3VuwuSNJVTtjhn9RoYkuxZeUnp7XoZ3dQN7oy88WLrE9eho8E",
  "key13": "A5P6amhsXuyzBdwSNqyCPZYJYDSZsaUH7xiVaz8xQWG5biQf12CREBCw9ABx2kRkySbp6Z1Sb6h3hxrVwHbdSA9",
  "key14": "21mNWgqsUQTdagrxRoZsjei5n4ZG61ysyGuveLkxq6vwybjHMk4iVyFCAsy5GUumwLGwiDfrxJ7iRhffeu5tLhf3",
  "key15": "2ddvG4DmQwagvryThaUWw8W5Q1BwXRkvrw1oiEbYbPaWZHsHEXHorh1FRGfu5nwViADNoiUB433Qu9X6Z3EYjZLi",
  "key16": "qPKJEJVJSbrYUTX76B3jXjV47UNBW8cSeXgAT3XhWcmg6HfV4ecuSq179ynBgF1cN3sACBgTzgPSuwq1u183sZS",
  "key17": "3vvLQ1WFWnwCZVvzUtR294Rs56GXFDDtn7QnZFMPeE2hvqHmUkvc115xiuAZ1fDnkvFizqHvxuoDsaYGjSTBKA9B",
  "key18": "4YkExmZeNgA715SpiPFf19Zt5Eu9sj2TP82QnSUCWB4Af4CTdmF7KjgrasXkuk2xhMWMmbbKSsL1AEmNg4jnBRnH",
  "key19": "GAEkP16fCkq2Jdq5NHfjmif24VFf3bksNrq23mY57eqYmKfK2GyNMYfnUEC7gBAMTFrMEETcbBdKKBLjjJYJP2v",
  "key20": "3qzRZV3iB4FVoMuwyWxGLarBpueSS1YcNrxzxYpWF65k41GxqaJ2YNgGKKLrFbi2VEn3T5bKmqcgBSwU7zS6ZfsH",
  "key21": "2HFqnb84xdrTUwFXkumqqnMsd7p4D8byhrCT8yqZkGm5fgHkvs85Pj3w1ETqdCvDineLowFcm3esmhmH5dEFG7T8",
  "key22": "31WQ39sPCeTGNR1nhvMVPDWjx3LcHTTN4nujZLDXf1DJjwZifHdo9FoDwotj49kDyr2zNSWpqLFZw1ZzLA9qRyMU",
  "key23": "59YxKPArDtpAUFDFVGbqgwdsLMVrqdQfeMBx8jZSqXLu8PXVPsUMEkTGwoDtt1yC7vPe7ZVJ5JcQHg1fF2H7NqVH",
  "key24": "2Ew3SrtCuaBCCBRh5ZogCAR7caahHFAxnqgDLWh9bkk1mXRVe9gnVG6D7zraPADJt9ZTNNP55XyQLgxwUJX4YWgB",
  "key25": "5dXsgzXfN3rV2GfAiju3KYdWZRokRnm4W27LNrjYGJ2fUS4LTcptuoB4UPeicXGathYztcWX1RMNBHTmpqwAnDey",
  "key26": "4DU3j3X4Aqaoo37KmjAWcojnpUsaYUHyRogHdr5NgDSgBbSqNwfDGw4nYYvrKLkWdAvB5YA2ipUjJugtB9deSY66",
  "key27": "KTf4ger2hHzP8GMzwVEv6q2QFesddaz19sUH2HM2qdi7YmY9eGRKSiFmiB4Ei3TRX5w1amJtMqfc5hmbze9QbDb",
  "key28": "36zByK9a2KGoCjRn7BFiT9YtstxAdiKrnDfrbXStC8Fzd7vTYmN6cH4iXFuyvF8MyVrnccAWDSAYKsLfQXro87hd",
  "key29": "2UPNQKSzjjHzERGMwPnFCL4WWL5f5McGrNjDPFfwmzHc2bpcaFsLiUJtvKgvGtfSU9ug9uXWWrDuz4wb2TxhvHJ7",
  "key30": "5HXoJRroGYiu7szUXBQY6tkp33yVcFL6yM1iUetAtssppEhJ5NKHKzoHCLpub9bxWHJdMr1Mp6h8mxyHoiEVy65d",
  "key31": "4J8X8ZE6QwRhbL9MG588XMx6vf6U3xmEhka8XWZW3tyVX7ZurPgT2XHKCDM4p3qx6GCWTmLnaEPxDZpJsSjbEQT7",
  "key32": "4NVNkQJnVYwQM7CqSUTGrtiDE8AHBALZFqRJCVFUkJjWCSLa8eVUTNrpKnPyPs6tRSaU9dPkyeBwC3bMapAjmXzg"
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
