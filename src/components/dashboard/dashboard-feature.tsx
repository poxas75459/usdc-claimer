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
    "t7xXTw6wkjxtywVz8sh5CcvATQiavEygwXaBa1Je3qZBzoetFQBpu6n39F1owRfsPbpM2qswUYjYnpPbtptLfoe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dqM7DPuHDw3E1T4ER3AXQrUVmsc6MPBsmiGXVautMhJRLnm5DpN6GikZFyqfPzQLhspkfbr54c8jp4Ja5gnHuov",
  "key1": "55KDQR45GkPHJru7vEUF8LFBLN7Ayuv42h3bkx6Quas5wwfsW7jrDgpZPDb57biFbY2P8gBS3wcoCWvWDUS9HZxb",
  "key2": "2nU1RfC7ZznSZUVEW5Q1hoyADEuSE2vjAj8q4eeGhNg2HKJp43c7GqWKdcC2dnVBFoDRnJ6kGV1TLUzcWJNLP5d1",
  "key3": "4sJAfX3KsxUwLodvgJVFuhjFgTy2bJPVVwNpHRt4XUhk4LfAfyVWk33drsbmuLRk1nQnr4SVxhPACjJ3vjC5EktC",
  "key4": "6c7kJ8tCKaEqUWoi2kn8i3GY5S3atBCTWLqHBy9jCdbT9GtNtkyibAtQk7Z6zvQSHZ4r4GtuyjfzTEx17FoTQpx",
  "key5": "3dNVXD7qH5XQaCe9AbGWFNQysYfmb72oveaUC1DYJTUD9saD2w6cQwP8fJ1YaDDb9vPGdk9iupnPZaQG1xRaQXUR",
  "key6": "4iYcC37KnLr4WFSqCcaHNhWNVczdJT256MsYSwYJ2yL8sWgri8NJb2zBiD9R3oxeD1d5UoyYz5tvQh7xSrx38kkc",
  "key7": "3pP32ggmCMX2sydhF1p41MyxwEE25N7BuDTF42tX9g3uWbN5iXkz9dc6CD6GXxDokfWuPigiezQNxhGPzPTcR8wq",
  "key8": "2EGrWhEvhyK7AiGhgViQxC4HBwJLS3RoBAQ32xKtRTr3ex5qDKjTSi8wVj6zos5htdvAJJhUU3BYTAbXCnn5MqDB",
  "key9": "T6FRTRgnpz6Zpc49uZW2hVWzpnsSAaBwEziq1ANnavVmUSpjnrrq34sNwXgLyn7osfYmkFHDhs1t275UEYwan7q",
  "key10": "27pstu3YGFZ4wVMGQBtx27a3WdfKES2wrpAs118kkLFswyznC2HdGYuw6GWPGcwVW7Cjd1kawabEkT1g5ncmw69B",
  "key11": "3DRSWykMwHGXQSGUXDZM11MCFvR1ajoVkR1y8DQcFrgtGLVKv5wAtV7f6ghSNyTCmaZMvuLFH2yUyHtaVLLfpWqm",
  "key12": "5bgq8iMgw6h1hXe661Jxfu1eTRSiBJnVkVrv6HvGnEfrWvZXBusBxit2Sery7TucBrzTK9F3vMzymhmoYZpQKcqa",
  "key13": "4fHcWdy8jsfPztboLTbEsaGQ296U4wJHMoR51q1yumAPFioYurjauPCqqbRFEM7y425GgNrxBzCtD7bSB1iwVYo4",
  "key14": "2hKnBv7Rb3esjn2vNQrzkSY6B4Erbd85C4qTQSBNsM58dcJ6q4Y4FzqmtvcHXPP7b2YecMFvF5FnF9B3vvsybxEy",
  "key15": "4UZHynrgifqoYoPekezXZRbEmnDGLn9fUByqfSTSMJr3b3r1JNRJbTs4CN9vhBCfnQkq6zVN2U7wKNEYrc1mJ1oJ",
  "key16": "3MQBnkmuMXnxhAmosKVSC2A3yPNdk2amsPjkABLtUnh7ATofzEmRCgBZFcwYjzdKiFvj5UeC9s86LyVV2ALC7w6S",
  "key17": "4LJbUkqyU4hHX6NQVLhiSNBtvdBv8bJL8zP9foPSSJqCyos9xo73ut8SYfsS9sEFFfJp7ar2XktwzBdVu6QFYAwa",
  "key18": "3SQC5SvLcc47nwSW4pMXCFXr8yKYR2CBRTMqrBchQPhUYPZkYswxu1i7V4aFVmKwBsn5qbPnyX9X5AETae52EFgs",
  "key19": "4YaU1t1RNqWscSjHrQ6n2rKEALGoeQxMgw168GjkBvBmSMFXr9FoBMmsGHZpS5bG6F6LrxTJJgcTyGihd4TYZzt6",
  "key20": "cStwAjdWsvjksr1PNPy4NmmGqGoatstm3ZLeTLHM7tfiajLqPobJ4HzEW8FspbHaxH1mArSxDscYGrAazo7MTWL",
  "key21": "3k79kTBnAwXneihayp9LeCdZeuWYoMUd8JHWBcy7oopSJGmZxR9L3v1XGGbX5z4bMpMYEaWKpeMdYhLgVJKjWMea",
  "key22": "27v8VZQ3Up7YSTht8phKHZ5sSaFwgNxjySE3Gkh8pgnsgku1QFDuyWkE484Nohv1ZXS2rT3AF1SnusCRXEnGn32u",
  "key23": "2rh2KTFNhRQEo1QLroRk1FHjXHCb9xhhY1iaNCyGTVLuChjwq4aSC3qHLsb6Z77Zvd5QY354v6fNG5BcDH4aWhHq",
  "key24": "kz3U1YKDS8Ku9NXL73HgetEXJP1bpaz1ypEETMoVDaXopgUhP8TDTzmngXK5qLyuM1BcbYP65HryVfiHPVqhkPq",
  "key25": "5zdFU2d454bG93gsKrw3rqMtZtv3akSm8JoNssKjqjRVQmLgHFhu2c94vpvY6hnuEUKaxiywC1eBexLKuAiSbuzE",
  "key26": "2WZK5vAQQf5MiBJoDtEy5ujTRaMq19cKyoXNy3MrLphLASpighiSZD9c5ioyUyU8fbDHe4TaEhh9o8tC5k8qs8QV",
  "key27": "2wnAAo46wGYy9S7E1GcfbPDNDuU2xw6YYsMU1E5USt5eHqmoqgyd3EYAnwmP7T3MCx4VatEAxrhp2pQTpvbYHy1y",
  "key28": "3Zyy37v1r7FZ2aEDxAawuo9iqU2cKKgYxuPXJKuT8dCL7aKCW3xKtaKaiYJmrwzFtoMtd3s2tXxkLATv8hc6tKWR",
  "key29": "5mDrVH2RCZD6VD6HjCRyW67Rgfrxr3dCNi7bdBykGVTKTmncHoZDCgxPcEU1zHnbmkeaWqt3SEt3SPmUVobyDHth",
  "key30": "5rtNsAYi2t2z7ScD8MfobYygw57raq1WiZZnyfTGEE5qntLuf8fAzQaz2kZwNjRCrB5HHz6SKBpWWENFJg1tPNiR",
  "key31": "4iV9uCxXyfaSs7wjvRzUuAp5ozSZAkBmcBitWeuTXavv1Ydh2G23aWEqUD7zofM1nT3qtQFjcCA1Xo3UstRMN1wh"
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
