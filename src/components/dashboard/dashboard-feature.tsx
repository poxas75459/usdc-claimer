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
    "2TEui6ffZDVJDdbFYLRyXUM3tdNmtVaCxkg9yP1MtvVwnhQWGeEieRgy1k9WaEpVY2v1Kz4uJheRCfvXYnGoWg88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Co6d8VB5ThxcsXsignCtrg31ZDwu61PecShk16XsEUQfHhew7HefayjZQzjZY7dqaMZH7ch6URPvAtqbECv4JhG",
  "key1": "2xmPnZYAVnt9YWeFBy7TMvM2GAmSjzTXe1ohrFTE1W47VZBbNcAfKEeQS1y6WncXehJbNFhvq1Lu63u5FTWZh4Ls",
  "key2": "4oZDLZByYKBwCy6qvwCAD4QA7Am6rdYchGSRPieKykEc5CkZTSxg51jr8hcEz7kZn8xVT7JeoLkMc47MrGSniafg",
  "key3": "hbe6bxzvXQtyDhCCUVR3j2BigBLFvmWjsfFWLukm9RN7itPMHD563RaHknpA8uDkdgQXBxYSJuXLm9mJQQcwCkB",
  "key4": "2p4vHbfatKUgBaWHcKm7mUvTLQ9HtfLFNTVeCAQHwSK2jvXYwkGbU3cTkyqicjKLTDHdHF7RaBkCzHTQgzUcPydx",
  "key5": "5NEyPGWS32cmpn5KamSNWv5YtCinCp7cUrd5z5HRA7RSAH8eBL1kX6GdFaTfWj9Kdu3e5fNif4xE6Diu5kUezft5",
  "key6": "5joUWFMi1zWZTbKEbxFvLtkiiccJKugPwLw3g8wb66HCZqKckKKdVvYimoUWamda53tYYi85tYtbrs4QAe66viFw",
  "key7": "3MirdqxFgGMGKWbUJLPbJrLj5DnWuafTgrsTdgANF2ShWELuCFzaATnw6VGyWhYR2htQJjuw9tYHaoynTjghtbmC",
  "key8": "4pzt5igQwtwQqdA4a4Xtnd8x9LpM2F2siGM7AyQr5TYr3bvwyR2DSvwjAQbrKa87fnxYeSKgUJa9vMsRnyRzhFi",
  "key9": "3EFmgQfsAMDid83kKZ6Md5FRUkdTZgh6ZHyzHxiKnSCDCMnk6UJMQhykAZs9gQS1tXpcFUnkejCY7nPCrCZnC35T",
  "key10": "4rv1xRgNZkV9LQVPa5eAGUiBXziKXArhAkHGZ5pJdAstATqKBsjpZhPeSGRfmsgxv15K8cmSvsDVBrtqMcjDCSqT",
  "key11": "ZoTo6fB5ffTc3TNcRh5pLnfbHXrd45c12ujG8Aro1V9e1GVo7s9mAD93grNPoQVcxboYA4QAL4gJSyidbNirD4C",
  "key12": "MVn68WKriYJpeTyghQq1Doyn3SpqHJFtonMxNJU5fy6bPWXZpWSWTdd9wNfat9rfp2LwB1GeVyctqqKHyhC1Chd",
  "key13": "3eac9p8YQBym1oWWNAYviHG3vzYU32GQzxq1Qjn9gqRLVK45AhzA24fQsaj6NNFuvAsrDrhpRQFswqyWzysne4gt",
  "key14": "4iN7uoyD3pcAi2DSZifxiABq1ENq2RfPhP6F9e4wkBYCYUqvJxNeiptCtndGHL8kSrcRENPfT3JzmMSHWgSb9d2q",
  "key15": "5c7CRSGyGBza1sJLVpXtbKf9eNzRrbczrYL2dmUUGQuToCGyU4EkaU1qDMzTE2hrNpwuNCZ3ALPpa7QHX2q2yDo1",
  "key16": "44DNriKt6ajjNwsPZMtzKentFdTAqCo9sqSi5HT2KYZeF98YECjfLZnQtkwR917j8dEmw1Nkvbmc3CSHYSM3HFFe",
  "key17": "5qb9qtnqqnVsnnmmxdrw594Q1v6mU3ZhS4Dh4iWeFTF6iqhXaybnsvHhq16Vf18P2dzJQJsH3epSBJK1oSjxCSEj",
  "key18": "Lj7Dvh7kFkCg8Ur3vaejpvAFSE2jgXVazy3AZv2y5sGzG26PcsXrZ7JQ9ZFTC6CqWmYjMaRr5hW2a5usFpoTUU3",
  "key19": "jEGEwPN1RgjYUeStZh6fW3hAE9DJmaPekcJyrfD4eVy4LSCFZ2L7jCvS9sFjS6sVWgqZYSiWYoXSgFiXNLJubEe",
  "key20": "3es9EmZTFwCEEjqmCnLKjLMsTfQreU23YPKArVTvPzNcJKs2meCiqeHqcAM5rZzV6JCcpMG7ZLxbnnMTAYpopSdh",
  "key21": "2gEHA2RAtVu5qDKhWCsfKbKL5NT9GNRUqzS4Kr94mXxo9nbF1adTiuNpFb1r6obDt9AZSFMSHuRMEyejEuBVqmCL",
  "key22": "4XWED4TdG6h4i9jFqpvdyrssJBQxSwnPF72tKLTXNU8HLdBNQqqwDC47BgJmZbFLFarkjNVPaDNnwU6uPnctCe7u",
  "key23": "58JmaVaaVKgfYW1aNE6Qyqi26L6rojJDUt8emG13zMNt1ck1ekmd7JzkMVqYLMF17kgwUdaLghardVortLdaqvzs",
  "key24": "4RqWzSUMyaHK9Lgc6wCtgKqwFEatcJQtnnRdD6vVx4jMPxW4ZeMfG5wg977yQGRUfWrXARzkXpmjog2ayHB1pRbZ",
  "key25": "QZvH8HMgGjSrAfSRvb1bzzirv3qSqt6ZWcFrvURrjcWKTCWrng5cdYjbYQdm4Cz2npRHsYx7t3nuoyCd45sWgGK",
  "key26": "2tqxKPYvcN23pic8feP8QG9c5zTEqw8poJKikeRaHTJyQxvonr3FaX2ZFetM1LbWEUXGTAH7b8x9fTNpN78NZZDj",
  "key27": "44EDDPYrTrxMypMn9A3nA5m89fuFKreRxwW6Nzj6A8rJaXsLH37AdVR47AnPcq8VFrARuA54yrWsXTGWTWAWDYPR",
  "key28": "5Rw2Ukk6bh368KDRZAi3sAfWuwLyxkvkh8m7uiPXCt45hHmKrv9tjXFDNquzjEXtMgX5tLZivNPK6jrgSRfdZLgB",
  "key29": "iazZP8H6aWQAuFREhzD3n6yk4wiL3Tx2oP7rWbgiKZaAeGNaCTcNxhwTDV1QG2UP3SZsqZPNEvr7pWFQVp2Xxwm",
  "key30": "5TBphvdcwGhS6TkVkH5oD5aRmPumK4teX2Nj9JGozqvEr28RNHWdxYd66pyUaQrbe1SW1zybopnx9k8wujkVYfdF",
  "key31": "34Jc9dsWv35hsaUYLPAtSdbGsXk8mPXk8VdijFp7bEoZ1YEj1xUwH6L3XxLQL8qYBi9jC1J9yKBXdBjWNmKEnnUo",
  "key32": "57hoMBE3skjmuQLfzLFtguMECKG2NqEWSXX25rygo7mHSXxeB4v8hKZKwQtY2AW5BMtdVcQj4yzhKwnVcQrmDUfh"
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
