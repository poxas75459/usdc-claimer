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
    "sCkEZBEFY7Di3sy1ukNjz1g2H9a2iFnNAk46dESPGiM4UPsZBz5Zx28ED5gEDA3ZYaGZao96QjKnD86WkeS3DSN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XZK7oc3XbT2TpzcYiPzu9RBoPRVPGKqp6GUpVyFxBtk7ALQFawo6axWinKTThjWiFkYFPnGZoAUvpLn3U82z59e",
  "key1": "4kgnXXBP4KAVJEDomSUXMCUspg8zTUHt2N188udR9EzuGZ8DVPvpGD62xB7kfkG73eewUMTp7UN9ENnKNfuG13GQ",
  "key2": "4ifnd5HvB3GQGfkfncK8jvEpr3thrYAde72T15TZvi1scega3kUjSiB8ryZDT5p6gtEnr6maQmyeMvoD8XrAzQH2",
  "key3": "3CQToGgDhMCEHPrKxJH6zmQjeuPzMJSsARwFXfGP6TrwvPMz5CJfUnQvh6WM8wkCvZSkbhyoMxbfoiMRV8uaXu8p",
  "key4": "4yNVJKvd4qA1dCrUEomiHAu73UHi8WVTc5x5bcmisj7bQPkdBVEbD3qaGT2g3xTED978LSzoYKasgibZEuypFAba",
  "key5": "3ZHta8hehdgpzr7chxssCwtq4qHuCSLuG1L4T8EThxQVPsrS9ntdSRXBAe3TS5UFQqSY1J5ZyhbzYbTXRBhfNasK",
  "key6": "461Qq21qz4zBSs7GwbNz6zQyBMsYkWHJzy1eghjxeQgvrAhJKEc9ta68B2PoYvgH6r3NkTE8q62f6H5tjfAzh7GE",
  "key7": "4yTKRrGA17WPQGDnykP3onAfPSzUAk8d3Hb2uUtXbusWo3wuN3xN74jrtbvo3jXPNziKhj32k6WiytAAQVuMHHYx",
  "key8": "2FeiemRz3geH6HvusBXervYwsfpNkPNome2B2pwWgoeDtDrBDLPb6yNofTcNexkxr6mfvN5YDf9GAojmqhTdgnRR",
  "key9": "5EmHbhTARCXS3i8WTwmBNjgzpA4zsRBPENWvVezoZPnpznqZd72hWvToTLpLuJEfxjFUday97Z6RRJmcctJAYTJo",
  "key10": "2pkz8yXcY2VMRLgnCTNpL4haVJhdkXgzrxxFX64BjutgMdpk2yfBZTooM8adgL7jLZuH3mMi9ANBfLZsBsFYGB61",
  "key11": "dzYeerotyu2no8xHKUJZ9TZgH1X2ihfEzMx4KGBXJUiEofxnkc1tLicQWjnpzosWG14w5ewJ9mw2DYx34dfnwrz",
  "key12": "56QRPLK1JLJcPQCBkVKcEHX84AuCp2YWEpcCSdQmkYY1gYMuSyqArJhYNaAQog65P2jbp7oszfGbFBaKsufJkwPi",
  "key13": "i7m6no2QfABkdvGwkskCu2c1rzaWZm1x4aFJ9xHhZBGaYUuFYJtfetEEQybzNLYRmBBkgGw57YF3aEvoTVtbMBN",
  "key14": "3YxrfsMQ9A2QSquTQigSHv2F8dgWfsHzg8cRQSzRMikrEFwJUWRNsx16YazqR6wyBWgM2GpVvpkkEqQDRcPsYgD5",
  "key15": "8JoVVZJxNimLnNZJqchq1FCUZGVdxU138pSaE1omH6LUprAm9CVXVTdGuGWbuMK5dy8rf7bCpuxqxdbsaMnbU2p",
  "key16": "5iJeNAzwCgkuXUC8m68fmmMkGkQjtRv6Hh9okhwQcmgHccwj8C6WFCDvvuan8n2yUDj3TSWcmcgPaAC55FkCHyXP",
  "key17": "4tmrsXECrT2yJ5Tp3tx4WXgyGrSNhDrkCjXRdKp6Nso3BrKkQsMBWDYbcZ9w4azGDf4gYrcqCf4ww6RQMLg9mDfb",
  "key18": "3sgL4Z4ywucZ2NHKaaFyHrm4NTLSM7mfXD8e52aHzxWJn45DSzgtLoLizdRvBjSvAChXNKS9UwsgjkToEz9WNY8r",
  "key19": "5d3A4BggYugwwRRjCjkC887xHA2Xw2NUxxQZ6qqbw7xtNhB8bYr8jxpxgo7WXrun1VrNSAFrMXPzREQyUYA8FJAS",
  "key20": "4PpSaFy6c3WuYRPhhdpTUY6qYWKHLqTzxbwR2q9FVj7s4fazSeSkBxs5ymhmGdAg5YKvvVD5fLgtydobxqY5ur2p",
  "key21": "4L4vNxyWKWFQJVXdh6o3WP97XwMrmERrYpFFMvsnQKUipNww5T6ttJQfJBzFP3wzkhAHSgntH3Eyr9f6B4rqkZh5",
  "key22": "3D6MtKCejp7z7LT6CRNadTuAX6CUNvMuVwwM5nuC7wEJHjVdPDzSv8dvd6qzNnwjMMBzniX4XcNP1Y2apJo8pEMR",
  "key23": "5PG8o9sgRYp51GKfRQFnhgiXj6ErbqBJpA3QbdUoN1kCEeQPDsDW7tvQiiZkjTdmKAWgP2iyHQeXUEVqnEJLQQbf",
  "key24": "4uuCV1JYxVfp3zewCZAEfA61kVZBBZrhs5yrfATmGLE1HGTjxUauNVueSvLVX3KHRWSvVxPj3HudFP6h4yxQc1CQ",
  "key25": "ob91e7VZ69Nu4QVQQ1w6s5Ayz1aRzmsTdAkizq21QHMPoa4aj2wn27D5RqwEwXrNnKK3ehKq4WEsFyyjBYxngRx",
  "key26": "T5RmfxCQJsiwzPdSo92BKLCVk5MDmMJ34BLEm4fbkUTiLXqf8jhLULqUu94XiPTMFfUo2nY8xrxpGBv4g5DPrN2",
  "key27": "tjq2hQ9pPjVf4gecQK4fY1SF5WFZkEBfzY2rLv1zFECoEnc5ZTyYPWv8yKx8hSeB15ZPwoygUcx8KC3iqABYkxV",
  "key28": "2ddeXn3TPmrbzH7hB4YqzvnPRXnS7B2GZD3gCFFbh9UFKa68PHj5PZugJ7jspng7CAekZ5NgjDEbNTcWULTk1Kei",
  "key29": "2YaRhhyf8yrkomPLL2XCqjJXCZxbx1KbDZtQcho9HEEeiSXoNfkYbSv9qMoX1MQ5txvWczsSwQbMngrjHsNzmB9e",
  "key30": "3P4AHo8nPTV727E4QR5MgyXR7a1utauVbZH8SGtV8oHxjdd3RujoXaswD5rpA3PvX1wgcWrWfNrLFeZYeHLz4pDM",
  "key31": "2vzNhx9rxDfZiapaieXfLdD9twN8CPuKuzrJ6Qea51BWfDj7ayaNn7fjrA4y5heuwNDLNwKK4j7qyPo6WvQiguxz"
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
