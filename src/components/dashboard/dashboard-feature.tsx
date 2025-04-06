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
    "3FyTvzj73xy24mYGMCusYesnwbwNU9oK4wzEGopwuhHhjdJh5f85JiCwm8H1fYkPFLoDQQobAgW8Y8Hda7ZFYNHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ccK2WxVPb4a7Qv6v8rXwtWzZSKYpdtJ8DT6JDtPm19GYDUU2mHXn2CocJQHuA7eeUDfLhWodmAWLrLkqkAHhUiB",
  "key1": "2AxhS4DWoA2LcvhWccQp8T4EvdVj4PVxKh5eXUnzLNFKLXyngK5gnTvpY6Ds6vVN1MbaHNGZfjVXRnEnprbTRCk1",
  "key2": "38J5FHZLzM1GhvnVWTDbrzkVwHW9Vs1Fp4skVYCEQ8S3yaXm27VPZhZ2gfZBR7jKo5SwMJpWaRng5HgcdzTGTpt4",
  "key3": "4U77DM8UMxmpWj7JMpwEe36S1jS3Gyukrk1ZdGxQqWpGReFKXaCd39SRSUvD1EZaonYtmVQ8gUE8JSH96eyexHUX",
  "key4": "4oEcvk54rxfq2abz7P1vG4eFEyU31yUCSk8HQvjim59VHFAYq5zJYe1g4GKJf7NEoqbk3CjYhvi1FMTahm8BF8vB",
  "key5": "3XEsu6FUYBStsBEjwMjmEjeUoep5q2ybVXCKLAuyAtd4GqiVFBy3CGVLb1q8wJJrCqC3wtoWUj8hr2CxK5dozULK",
  "key6": "2QRbcrLBbsqBVpXniyzQVgXpnAHk8WMZLHNZ9qzeDz198goZv2FCAjjJe3CzXK1TM57S2kiVDthT4oJygp6WkxAh",
  "key7": "2vWUgNjouoBca9Bmd3xVPP3GUS6nJmv6hrya94Q9JtTazJAGLf19bACGR9P3wu9yiXvXSpFuGzjSDmNQx4Utu1y2",
  "key8": "36wp7bmXWzw8BZBeMyqgMTAJ2yRt3QJ1yiJAPyNtvD2p9rZxVcRb9wmPW9UVNbxFw42GijD35YeNMWqWQseJ11wm",
  "key9": "5ZbAud9sTj4RjLm6wzEJPeVUpjZjiijfH7mmW7q1XdtBtY36bDbcUr7gLmLfVPSwznhXU8gkv8s8J935VjHcSFQK",
  "key10": "3QS3Vwwotg5W1eBULERpT7E2x17LrDH2c7K5Dpso94m4rdFUnLgiEoQHszztq4rSLzd2njuktChftCCbVVRSkHck",
  "key11": "5TLy7Y3kk8zvaSrWCh3Dv21sjMy8KkU71z6QbXbwny2APGVyXNSRvJBaDpnfuwJCrF5YRJt4PytBF6sd4KD6LHNZ",
  "key12": "4EBUaUJg5M2euAYaXsTD11c5EafRdPmutafyixTZuVnsxABdo751E5cd32YNYsi5qkgXUtq5E96787uyiTkvvsKt",
  "key13": "35WyWe53xBWZo61GPP9jM5uRzByJDt2Nx2H492ThmzEc64t4i4yLRRVLpvVRQbQp5p5rBgKRQAzicu62LYpSDaQf",
  "key14": "2R3G1qVDdoXyqYjaV81Ahx2htBDCvtHrDZ6DbFWtLU89Z2ezx6zGHMFpcf72V7V9apgrexs6q7iDrhZAyxUweYjy",
  "key15": "58v3EQdm54PmRgtvRt4icymfDhYxkwK2ch2MCMKDxraPeLm5MYrRnmFi6DTEQFkFsg5oRyH25TLamhrpDP9anKFE",
  "key16": "4hZSYNLfrvwCAPwBay6tZAdwRC9cPRKNca9u3w6aW23zJDFwhnQhjypu9QFyFLbb3Y4cTjYTKafDi717ZwS7ohsF",
  "key17": "63Tk8wJmam77pr3AhPsBktLMbhM7m67zjfigHFhwf4MFuG3VeA85fyrtwCmAmnAtKMePcTJgWDtGewwSwfzXoEko",
  "key18": "65HQruXUskVqZVHDTzRh6J8VC1yc4hjfHWwtK54YZ4gUJ6QNtYxR2sP5N9crYWi4GGx3ZvEyaK88yJQeTsBg7g9T",
  "key19": "tALuTzTBcFgkeCuCgmQegGqBP6R2TGBzgDYyGnedczNXx5grfjUtkVmkDwmg8LLH92nzLMvscercKWV5oJbYHiv",
  "key20": "3vXQxpja4Bv2qCGa6K5qeBf6nQzWiVft4qghhViX91PPszdGtH6BwVjs1vBTifMJJjjXxySeXdr6WDxGpjpNWtU7",
  "key21": "k1aypDeXMigVgBgoikXFnw58Ak7VqbSgdfrYp5WnCf3oAgQEXcAunQTCNGgXM4Mz3N4KZ4z5tWW4N9myHG3mDVB",
  "key22": "4E5FeZUG7tXubTVAJ637nyySph69njd1zNdinbbZeLLJ39FjzqeuYammEaYAtxoUXYB7U3phkoC4MTNVcMMPCXKW",
  "key23": "5Hxck2Xr1RsMCFMuFEHK16c68wLZeBcYwdS853g5C9v1sAXEw6kBV1snA2BtcDdpEZJ3VVoWgZob8ErcD3vNrnCk",
  "key24": "2CJxQPLeR6Pboa72uWjaRDemUH1vQsJ1woBx1brXt6YPCrBkHsphi7xSGSNRGghimvYCbdX5mdQW6QPas8Q1W9VZ",
  "key25": "ia3gRPe77ZH8tVp1xzWo4n1aqG6AFBJdqoWRM7zyTQAuP3HKeujwui1ohysjkegxC19zYdE8uUv99AZqDoD2Rgb",
  "key26": "QnrQ3LjEZ5j5BvCumqjFNv5QMR139mcHZGEurisGwjE9hG2mNYjLwHrjwASUmuymkcLKfhLWS5WJiTcC7EXc6x2",
  "key27": "3VuwTo4kNpQ3mbxTWhXNevKTxrAtJvjGQDUn5PjerRRYDjvNh5zxVZbdeqQzcmVRqCoBrbRSYSeYGfEYukcUjUGC",
  "key28": "5sRY8UriEcci5sAjAeFubKNmadmWbVoJks9WucqvcySUcDTT7XWsKcaSLsFzkPdNWmLVTiczK13JBzgKPCigcy1c",
  "key29": "p4wiKqGW8BnRqEEYEQktAfbJgD8Kdd3a972TBHzyyDHg59115ou8a5oNBTJgCJT841kWh7VkNNTAPZWtP5Ky7cw",
  "key30": "3jeMAJ2LRzmCKiixYA5khoZ3Vz5AViZPgsQaiFFBCZzh6uh3S69rwgfLCJcaSaHAywB23jHAEA1XZQJ8r3hKZVsm",
  "key31": "39iVGj3aTWXnm4EgJQ81HErYcMY9DGyp8p5HqmUvwstEB3PEceKhYPTR9XBNuwpttH9v352PEU28yd4posXpC1mC",
  "key32": "5VTuAPFqUoMvkKQisvJ9xAC115ruVxQmEjNUQ1iCSxdnT6TvHNNFTGLnHiQe4zjZcj7GhsBumuvwmTz38XWCts28",
  "key33": "4mhzV9X9nHn3seJ1DK6aFSrdnagPv7vbneamuDmq8UbCp8xk7Z2Yu6ECuCoDk8PGKwzhU2hjyfzN5PA8b6jFveBx",
  "key34": "3wLBquryiFKq3yzLV8mEdi7vq6BkrUScgxT1sxKfMQVw1iCPwdsdqiqmn7QvAQBRfUDzLw2NbAuHrjivRj4UEzV2",
  "key35": "2WJF1Lx6uQF6VjdZwGCub6BsZ7twYxKyCSgqc8Q28PX64HFHL5UJYYKZRELzFQGc3dr4N9GVu4BFFLgijpbSsx2i",
  "key36": "cVwamqzXCg88XTHYLVCke5XLYQRjvS31yDgvMfj8ubfuLGmxtAKPFeFcZquFY1RC1PPZa3RhhtbJ3vf7XMz19V6",
  "key37": "2psUxciuWmXp4Bc36yEi8z7DAs9JkaT883Hq9yCr4dVDFHBZE9qpSrdgJBfjfQv6H1e5hNqTDWXmLVkcEuiEkwqR",
  "key38": "4BEsdRVtXevki5obrnQ8Aswxek5paRYPAri8rBBkiGy6p2LEwzrscwPhRUGnufLMBfiZdTCmRi1W24AXgER7RBYB",
  "key39": "2ZKkcA4fjAzHxBVKYuSTc9kfBqDvHGdXHEU4MY6hPFtuUFeongnGqCHAaC9YN76HQmkSCnkuUQqoryjPqiSW9PSB",
  "key40": "5rSm4ztPwBxQP8pea9KnuEbfvCPdUMBD6tDsC5Z6FK1tEzf4tBgqN4ebF1DBBeWYv373wicjYymtZoE97M2UD1TE",
  "key41": "4M7gRvw5fWAYoiPT2ia748gUyX8uCSphaSNHFPtt5Cq7S8d8UAMU8kj3PifYMGZvcbp24TmriCMXQmxMeDX7ViHa",
  "key42": "5X8eoxXWKtSQ3aYQRDmEcHTfDV4uAHkpSBCAK1KwBqhycMQYzaZUbJJ8oNKPdGfhvzMACrXSKYaPwUpa5HN1awFg",
  "key43": "5tJszCMSUMP1FiNM9UN1V3eFX5kX5SZkXyEeGBkPm9vtYHmm7ZhtfA5FPvVTW9RX3i8cKgEoHZ66zPRzHCHobzWr",
  "key44": "5WZ9mRPrHFZdR8tCBoG3Rx2DPEogQD79srLZYSYBREK9eHDPcQDtNRVMuWzE8HvTZDY4an5xGuPmCNTXCy82hs5m"
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
