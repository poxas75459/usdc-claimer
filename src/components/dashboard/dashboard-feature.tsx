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
    "2j7UGN5uqEe9HQJonf1pQPirf4jJnrng2avvsbhD2jofmjLPGL3UV1LwX7m7UbmMiZsArcAkxTpFZu5oXDWoEcDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UQGdmXtgE9GQ5ThT4vkGsfz8sjN8QgVjjRGoissMETPDF7uXRo5h6oRPWjvBhGkjsCJ2BM885nZ6svuAeMVPNrk",
  "key1": "4RCohraKMror5fykfgCwuEXPFTfwdUUADJGgBT6vzDk3kayKqm8B7e7dpGv8j2uXBTkbXK7cKP25JY7aVYi4Ftfa",
  "key2": "2zSbMaNQTbKq5zer2DRZ7EpNh3uWU7iPgfMGnD7gnG25fHuWRsmdE1cna5r9mkGENLHE7eWLcH3BiCTNMnt626R",
  "key3": "5edsJ4qXgwmsLirUXD7one4cGet9TYLphcLj1ueMRmKUow1UR7J4NsdC86xyvTtK5SQuPWUxZaoQrVw2tYyHPfAy",
  "key4": "52g7XvMdjrGoUeRYQK5AcnEwoFW5puxEpS3tYbBQpzK4aWRcn6oohp9dLsxQrro5JLyrLBKq45LWEkxmDncF6MHt",
  "key5": "294zBUcthtGjZdVZi4SV7AN5T6huNiHxje8up3AiFLbFZaE2hmVGFeswjCqLJwFTWitkgoBKhSkZDVm1hDwZsxBC",
  "key6": "GJKEjV2c6p34Up4nuMdTZt9TXETEjxXrfGw7YSYECZ3H6cbZNpgDPJyjG1rMNdT1ijYWBxRvdYJGwAQo2J8QEZ3",
  "key7": "48u4MGb7UnKtcA3DZv1H7aopFToo1wU877E4m4WXiLqvqGXUULH5Us4ftH1pS8ug4ivaaQoVPh6KhY4xiyVhyD3v",
  "key8": "2KE6bvHJQLCvB74vF1BFFx4G6c6qKvxJQQYScofuEChZnwYkj9hpPqzB9ZPnGeUkmhYtCyi3ffyNqiwbYhvw75Ao",
  "key9": "kVDzbbqD3o9ptuN8t1LfqxFcL92dnrk4zpxUfeqbKmHaPcgbGet4JThrGSj9waCo1UZsa2pt2ry8PaQztYDmJBT",
  "key10": "K1BtaHuBqH8ANWzhuHj6vuvMtW4TqHePuJQfqkbxQrxChEa82af7XTJnMdDxKeAR9HWVwqGBNCZteKyHrFgsDDW",
  "key11": "2CwAZZvToST6fqAZqFysrnJA5R6Cuaf1Vn9xMXLL3LAWXfyyvGS4a2h9LiVVEnGXPbkHDSA9z9jDYHc4eRvrpP6J",
  "key12": "2GpULxyBA2WmhSE2m9fFVfxnYh2oNsJx599pyd4A5kBXc81xuqsTn4KadAQqC5jo2G5nLYo9HC5rYCbz698kUEoP",
  "key13": "sgGHAhFimAtog2shCReHzmCR8YNC2r9X1NoWhcDWYUuTNL658Vsd4e9cb6yVw3u9ja69wBrzcnDKmESDxkMxobo",
  "key14": "ViEQgo5NULzkNH4hAF8T4SropDd8tqu31mqjH6YWsri3k3e9Pr1QdTpBGWxJm9Wpx8T3iUUNYMrx2dca5ZWPQYx",
  "key15": "4zfZPwxX3dTDKGtDdLbbJPWiYPT8GcpMZMUNRzW3ZSEZR1NzXVdavy31NidGHt2TwjCAH9AdP9rZsrA5pDvJqWbr",
  "key16": "57cbryPcrtw7EvzKSWH48HV8MUV7Pse86PuP6JWVwF71xGxRifzLG9rUdeB5FMpFPBYkPsmBK3pCt5rWyxAfGXoV",
  "key17": "4vQkNKRQQGhAAYUDZGcn2m7n26G9oyBhReNfTCjcbrSJPRxcztheGkgYYrorjeuipmmfVNFrwRXJAvMGKxceXF94",
  "key18": "3J6oDJHgeN189cCbmAuoqTHZbwJepXuvBVc9mrNMUV8XauZFrxmXspdHLF8o6sqBTvc78FDmnUDMNCbj7HSxWmBP",
  "key19": "3ogg5fyR38oi48nCuwkrsAVEtUvrYNThxKwLDXbttyPxbyLCtLbdmcU8eF411DvZyeHspQftm1XSJJsGXCYkVZfP",
  "key20": "5NsuLi63eqnopx7kfRZ4xq3MFBMUwJoSTBCXd93ZraJhkkM12AeaMmptHr1vioG9g4Hwzx8U8KPykwMiPskjVCCc",
  "key21": "54wFdX2wbJSyJ5jhtspauQ889GYxYwiqNePJ45SqMqcU3UxWpcpx5nTDmtUG6SJdaardSTM8vEEgRUk8oJ79WSo1",
  "key22": "2t9Cg77FM9WoKTyHMzUoWRxdonvfPe5jCZrstuVYNTn5N2ErsSWQju4koqo8rnPfMLkQTpf9PefycNSTmDhWv3sD",
  "key23": "3nbbhw6cW9whuRbtgW3tpeXNr5wSvuc8ZnTNtydgvKNSHgpWD2wdDip7cgy8PvRwThsCfKeqESDFHTCumkDrnUzZ",
  "key24": "35MTtbuDU6DPCkRFk1srqJ4cM9aqRQYpM4ZGwgsnCkdHu3b7fvdoqN5TT3GLf2UoZYcy4VvStZtGoomDUV99gB8C",
  "key25": "MDC8eBoCJ7x7KbboK8ZCi2Hs3dmb75MdQECDoP3VaBhWr7ebSwhL37TjQVGTrNqA4riVHdA1novWJQd2ErYRJQV",
  "key26": "61ttUr7oxxMmdWucaP6ZYV81q79YhXPZtfm6zRvamrbEPBtjSKW9b8Q91fryAxPF11MmEz93WJF2Ly6ttre3avBS",
  "key27": "gjSYN1GdSHxhCmPdU7USxZrTteCjht7xidtoARqgtW3UrYwd6UyPGbzd8BaXtPVR9xPQ8tnbjtezcnj2kgFVGTU",
  "key28": "4RQdok8Q5akUZqNXcNWmYQE2pQ9X7xZbsCumYBjsKhesdceREER61djm3cLGKH9qmiKP5K6oXP2WC7aoRcPo8Qjh",
  "key29": "2c8nZfuKFxq4hSPXSGuBDY7Qf4HCRv8dX2dcsptv6REenHwKK82EotXHmfSWHTczLUfUkFW6DgvFoBxhJFKZcEUy",
  "key30": "2qT8U3iedwmyD9NTWccKhnPmgACpUN9LhU1nRcqQ1GmBZ89d896tQh79ypfGFe8jNoomaZUG16zzPLHFyVRXgtzD",
  "key31": "2xD469oY5xKykDQHaCu5TQyeCWfnZjk7qikD5a4mSeZSDbSV5r2GJmU73NiBNecCc3BW1UAQUpiVfoY1qnvECPHt",
  "key32": "3gpugLepa4S3sUuvhS3BT3QofZPstU3caNZpchmjFfYVmjPGbR4DFfNjjbJpeiBNVxvcKLC9SPAm4HbcafquHX89",
  "key33": "fUXz3t676YpJj8Bq7vxcAdG2KDTssRt5e9UQaAPburZQZSrDEpwnvaRe95RgEgZv8oMH3jL61uy8xYDJqj5H8bp",
  "key34": "5nUxRvgx7sByrW8ZzwioEyF8TmjC9GYzzV9oJEyUCAQRvkHG9xqHprc7u6t4XNfVzANp3usUNRKtEorgCwShSDpC",
  "key35": "58oGPbYHtnkf3s3nes6Qiwtp2NFF5EphGXj3LdrtytRrfzqfUgvQtbbr1xSdfbzD9BaAsnC6dSZmEr47tWbEkWEB",
  "key36": "xQVT9ASF2GnWAPHGvUTqsHCnxiDUwf2MbpXuV1JKkF1299Nu9rvtETcU2v6uyCUDgw3B7dz25HHocZcfR7egqkX",
  "key37": "2NZhmQoBcD7UKvPWdU1mvkEn5qGnHGquuM4XwyUKpdR8h3HXU1UZ5Ye5t4MBybbJ4ADscE7FzSpNML5c4twApTXe"
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
