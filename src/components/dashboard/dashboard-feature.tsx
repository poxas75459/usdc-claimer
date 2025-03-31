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
    "48RzmigUdnELee82dVVAEQUNFVm1gHkGDoeWVepzhoymHRCStgzzUmzEYMy3yKBMaCM3xPdJcUREiCWvJUjvo7Dc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tg4kyncDx6PStn71eExWxnrNwQHbqNFuxfSNnDRVR5j4cZFSPyhfZ4EPwJAcaadkJZ6Zz5TVfmZoD1YwgMbnryv",
  "key1": "6CVaSsACApszPzdZ1BAJ23hevgpejcjncWKafFyMy24vJdy95m5w5jfvSjjaqU8HtiQsavqAd6pumNpXv6yczC8",
  "key2": "3fejK6j6Q1hC5fUbsahc1qKg9HsShJDLCwKrZtspv92hGmRUU5WDjP857b9WXLyY9eth9re8X9vQZrxbqQcHGq4F",
  "key3": "2gBmvfyrSj3zDJdbJXfZ1sivecWuPRPfud9RJJKkAPWLzYnQVYqgr4R48H7ozbDSCasoyuLQDdWi3kfSrftKhbct",
  "key4": "4wVEpz7nquGnbnoqnBtxDEi6LpeS6bXbibzqYVeXauM31NyMfmktHB73XW178FD5fEvomg2gGXUVZvBQvEuzDavc",
  "key5": "5mnVDZxaKpRyLZVCJxQcvDxsKQZP4Crb6P2SgsnthYsVWxhMaNZAZ4E28kt9VQ81eMoHzHcuGH4KHGRNFDTdxrg7",
  "key6": "533Ba5X2pEJh9hTgv1aE4fVqKeCoxpgN8Es61dNZjpQiVfmQrDqxk7VGDrBUuSjZ9iXrP1rjZ3mEhYFCw3rdqLcQ",
  "key7": "5Cs3o3zfPuG64cC8sCE6cyLS19eRxaDEzZAtPq75cMzTCKvgVSQXcnnaZLFMgvD4VoCNQANG2XPAZ93J6frk49pC",
  "key8": "5uDWsX2JezWWGAyJ8CBzhZYQoACwbj1iwZe2aPSeNCu5oow4bdfeiBDr4edoFsuWdaVvJsKYTANsdGuWYoi7fxzu",
  "key9": "2P5VQG3LMmb7zFykjKHnELdkbzuGCjoKZX8KqrPERPMSzWgCV7msTTqbF8qopNf6s14GdkakcMZcpJayrmw7FQee",
  "key10": "TPyiJ3GVKeFg62SkFQ3vCEavmDw2VuaijeHr545HeifoANEmRrTSu6DqwZpWwPh4qa7ZCafPKiGAijdSJ78eDEZ",
  "key11": "32VxQxEGJLETr6AiwXrhq5wnhYpLNCzxMEi5TUgvLn6vaxoj66U7z3a9ScQK8NGPi8n6AAtxfXcFafr3L956MJMq",
  "key12": "3sCZH9FM2gPJzNwpHhKX7myKmWfRqfCgi4gDV9JFsQ57HibB7KPBuPDAaanWvgiKZRNJjT3sCgW4hSZ5nwH1MBe",
  "key13": "WbLFcocoyXFpbUSpHoGF2bkjs9EbiSjQPArHHEPBFWiFV61uDiXMMJr2rwMhFgrdGdZ6V9KLHLVnX9iH9krQnN8",
  "key14": "3FdwDhe9LAE533rgPVnU8TijL9yjSyqQVTgaWNWijzq3BNixQjXJ7gbD4ZQyXGJXMBkAagQcZXQWFw7LRBLp9xq6",
  "key15": "2TtXEhEXmi4UVCZ5JHPR6hY1fX5eAP7vUpkmddA6tvYoBcVtMkb5TXPXYMnRX4zsq7AeKYUS5n7sfSDub4WJp6Ho",
  "key16": "2AErTP3gWY7jgVBK6zddLc4nM1zJYyKazDtpeupjKcfYFQPJdZqor2HHmeihrdRUNXEnVEz6QFJKpqxGAzGmxJzw",
  "key17": "xKQ8HMW8GsE4ZWeBJzAJ7ysmgxZ7U99gPGgpurKaK86AFC9DVckrCKXFcnp1WGJAkmFJPDin4WDw2qDcoQLzTLm",
  "key18": "4S9gCEfVGy3LCB7616kJhKUDESxTFuBu5BEnbLHaQdZDp7zRt1pPrZVaAGzXsCzAoBj2itkA5hNQm79XQwED45Jo",
  "key19": "59EzSuTnxX2bQ8Wksx9FgSkJwALmoMkTg1BTmkPgtibQHrBoha3gNjYvYqdz6y8V6HW1FBuec2aMKTBWzndDq4nn",
  "key20": "jWZbdccs3e2MqzMCoTdJ3VhvYUXkZT78axTyhLz1ZpmE1GernLUjHHVhDujEKmHopcCZ3Fm415rRKoR9C5W1LQc",
  "key21": "5T2KgESA6YNBq6DPnnazxVnqQpCntedEj4ejRJcSfK7s2DKprjD4bJhqKpGUkYytCvd9ZdisxmjeaTQBjqMA3dW9",
  "key22": "1HRNdsFE2kTvap8X7csaF8FuDuf5D1zYFyYzNLmdNYemWd37SEVXQ9j5ySBGn1PGKX6g2Q4Zq9xHShD4ZccJwpj",
  "key23": "3A5rWD68hAiLaLKqRw54AVuuC1r5na7meFhxGr1TS2NCWq762C6yyHZ5UwkfofYXYxwNxTZacMYAVUWqN6LFpymz",
  "key24": "42cJxBxZwVkriktN5Tcs1itxP42VNDtzZpw97bptQ2PCTPrN34Rvi9BCezY6mzVSHUGU648hsinwJNzmhgUZPmQH",
  "key25": "4pdDU3RPaArxUyCxcAT69LW7mh8fp7X5aShAhXgLBc7NrkayY4rGjnnazvFHNqU9bD37bJer2qg4LKdDWrk9j5YG",
  "key26": "4CXApmCfrbwhMfVAjJ9EBFFg1R4ftK8Wsq6taioRQKjtDJN3DNgwpMTRDRaicAWTF3YQgft6QTozUFfj3Jr5Zdhw",
  "key27": "2C5njcGumYRZoXizDx3BY4tRoBQ61nntpQUQ9119s5qmT6aQg1CSkKAekzWhHR8yJzNy6hucys26RQYDKe5yCpit",
  "key28": "2PUgHjsAFJWjnn4RhBazGXmCmTpXqC9AVawstepMTFECxkBnwEdpiXfV2AvMMxc5V9xe4bUBmHgvz8RaQmHdJupo",
  "key29": "3mF2REykVkHfAu9nqdo6TEg4tXxXAwwWBE584YYxCnKqjgH6nVA9qTN4BwqX4dBGTvWxjNFX2PvFwtFUAguQzSso",
  "key30": "jmzFS4Z4daqz6yPUw1c2hwEpnBp6dUoUcKCitfuSVRosgmt7Qashferyiimo1iPnEEe6V4kLRzyYq12G7LuC4qJ",
  "key31": "4BS7VZtpL4LZev4NzmSUprxqQd7PXHARvV1kuK1TikrGEaM6g4qc1pHfqnfZ8eJ7fzmDeT4Z2vBPuSqVwXDngiLd",
  "key32": "5S7m8byvdrANHEqHxXTYN1igJUGpUJG533faKgPT731MTkRoBPhuvrMpSUFcqcJHF662JUJo7XfN2o5paAfvKcRD",
  "key33": "3xDACrLi28AFdYxSyjHLCY57eSGeMrTVVZm17bYtuGFaae74EG5MLBBBRLMyxfpZ7qVniVxaD6XP4MUZNAgyvL6M",
  "key34": "5f7WwSpdxS9fRTSuGLzNKU4iRX9zku3Zws2FXjHDfdmARpbxtY8pCKParhrYaFHt4N2K2WSpEScfr8qMh7Qi7dnL"
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
