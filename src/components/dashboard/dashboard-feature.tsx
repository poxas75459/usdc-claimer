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
    "4gLFyaYiUyxwMi7BXTWPVG7H8hwr9hkPRsAfdVrRxyGvPEQCB92S6sfd1FN14WchZtXMNnhsrY1j7CBguRfkpZv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "514LXje4obsie8x5umDTVQExeTafwTocrB6gjbP6XtZweLxGR5ZKYmvUnLGbQ7Yjgj4UBh5629ncfQDbvYs7N8fJ",
  "key1": "3akvUP98kp6wFsK18gH8eJwjkTb2zAviUe6hLnFhC5xZa3ShmaRDUcZXRoHJNsKDWe1VJHRczizGB9mscMPNGMtk",
  "key2": "4PtKZTeYKE6qAVSqUcQsBQ1X1hiY38Rn63hpCyVKT566Bpo6gEzuhidJFkj8Ztxd3H8M3Yi1RTyDon8sh9iboo4m",
  "key3": "2meFQvq8a2JdyrXwJwCM98vnqUSHbAuMeW674N97iWAen5BjMVi2N4sYx7eXrhxLvHdvEZDr6uQ5apajAXDBazsB",
  "key4": "2VBypgrBjtYcSUGS3Ak1xspy4F3fN5Dp5wa5LELqtuMqKSUM7dcstPtQUecq7EqM5rsKFGv4sHQTtmRVKbWGbqe4",
  "key5": "28j6cWxv3XcPGHjXZ3KmF8sQy6qUBU9qRr8mM7Gma4pmTFRCxb2m7Zi1f1TJqKntA6Fmp1TiHqU93zmkKmquMCoc",
  "key6": "3HQ217WGjZ9rGiQjdQaXQZ1mTv3C7nMgAuDJy7cLoaTdr9a9m7MhdnsqMYSXbCZChmzfbtGtQz7e4KL6FmhdaQFK",
  "key7": "gUEtgeJEoWJxkmphabwYMAjgo35gMKYSF4KU8miySLUuqApFhZBbzy7ENJxHNtxjtUDjWZHxP4XYArGprGtrdR9",
  "key8": "2U7UjVE3oLqACzztJ8nZ23CbdDEdsE2a9UcHUtzzDPpP2Woe1gYM3nKLW1AB3VwLoG1eoshwv3V75kReLTzpBtqs",
  "key9": "4Y2bUxk4kuHjmzvq3w2wpbkJnZfnWf89vDSV3QQW1HkC6hv3WFeSK96eRmRy7phuQFSmnRUep695eBy9XE6d2hXU",
  "key10": "4ZC3Bngc8BDDkyQWDsp5Ax2jPPshzE9CBPJsHvTrFsmoAJACFxZVM295XUZy2uramw97rByEC6HDh7MvsWtegJtr",
  "key11": "3KWMNr4reFPu7xoWdLBqAcA7qE3eUNzBsyLZVzPZbt7GQohw1VrRnJ2ZUeHLiQMMFiwbJb1CornY32p3UqmZL6g5",
  "key12": "o31GEnv7gVrcvPtEoGmbLfhCeTSL42kkFAsRyzU1xKBeM8MU6MkvVmG9FXrh5RhqH9ZzAQYauE84HK3o5UpUdt5",
  "key13": "4VuCfsRUKwcQc1McrUavZFky2mAg2aVAymsFaWDahkZHFVue7Fo8q6KmZnKKd4ttS9ZJ6NjNDuiXZVGpfPJUWMXH",
  "key14": "59GsmBaDfo5T5mYQnyNqa2sk2Nu3W4tbJTaT28pR9PsPGuBfU3FX7cNYZ87bX5TvVDCUDgY73MkBPR6HKmZmyBdR",
  "key15": "33WCTmLrqMbk7fSnaN1xFgceL5KipvY7SDUz4rW1PT2bB4eytFSgmKXHvWxoPJVujmKepSaWXA4BTvJVujMqUPhK",
  "key16": "5LRN144DAhVVRJrzRFw1fbcDAF9CA6RZTx2TQSwQC8qkL1ByCEaHwrCTAsMNbSZVVYKEsMYhA7N1SmKoo2CFsKwJ",
  "key17": "F3sKjYkDVwmK5YR6nno1iqwd8zWAjhiBmW8m5zUM88zBeyGsjvcfmbmqVUZNjufX5sGTUeEdqVPTznpaZrp9n1p",
  "key18": "5zJnyKjC9DrBZpUtRayYxjGDZR6JsUAqA3AuEW9ut7ebi3EWVY952xnPZ5PDJ8nGyQpPwnaUak4SzmJsg2xdFScL",
  "key19": "Ug66KZN5AYvKDPxEBHJ1g5bQPuDBSPK7dRUrnBe4AqEvX64Lz49FcWsyGb5cEVJHjF5ep4Cph5ZuPiXCtzR12fZ",
  "key20": "4uhb7X1aqWVsegczEyrDBu59UyVAD1Y78guhrM5R6CFwK7TV7Cvm88zRHw4BYhoTB12rhSQHhNEUy6xpDkeWUxKB",
  "key21": "2RRCyqmm4P7Jy1zzSnXBVguPVw19hdbGXVBhDeVtSQR3B2NndLTDRvtBmkR687hDgeQB3r1m6UNG3wHcmgPNWDZw",
  "key22": "3siiVKoQqMRHdyjJxe66wca5iXfT1rAxrPKBb5vK5PwGCBLw811FRfdrX1FYUkaV8N6f1AHbLn8ZDpajJxkXzpNw",
  "key23": "2uFjHw7uod3mC2DZUAYjDu7iyi8PjaqXRgE3UusMyppLuYSk7kbKvA4HJBSDzmn2XuMcTWMuS98ywxLCbz9PDxjQ",
  "key24": "4NMxCiUnnsa8Q2pyW2BtCae3Z39GFuuxkUMa9gPffXfNDHAesjuipJ3Wf58Eg8oeC6m1jP96fPtttD9vQZEkJV2D",
  "key25": "5jcafFPxycQoCVDhqt3JPugV9VWBUTJcTGg9haKwf6dHH82jxrj6o5XKrVXRXDFAgy2C1zVG7rvo8SntziEmDJw7",
  "key26": "4mpyU14fXWdNgedsroNH3F1rUgNgfGoAj4J2aPxaeNMR71FtThdc2JVsyUnZPeKVW6NQzzX12qyGdX5GptrS3959",
  "key27": "3fmGVsz2DjyCyQcR19orPt9tetNL32Mu9LHnrZAi6gQN6KM3JrF3RXFLVATtAtcNN6osLR7c6Q8pMxaT4BmQbqbv",
  "key28": "jRmR7Q1wq5jXRRUiNMXS6KNbkzfQo5J33Rv4fRjr3zJNSTBzcBdasK3yDUxXRbmSimUjoowDFTfwriaCuaGQ6o6",
  "key29": "4CUY44Xnv583Gh6p1priCQFTh33nVy3i2La7hK7uzJhuuNrVGVAJQsfg11WFpdV8HZSm5VtHBvXLj7WTRnBnK27H",
  "key30": "5fVWcfUVzNFNfiCAqPUYb1UYTcHdVenXdegjBUDCxUgCiHZFoigefYsyUSP9BoDV7hH5RvKCUKgCMXRgL7kXHpMr",
  "key31": "2fyYpkQQnHQKJgXQrVtxP8EC1cH4K4G6Hvw2tGCv2FiNjQLREx2JDQyPQMQYzaHSk3MpHu623MJscRjLd5qYPma9",
  "key32": "23Kf5RS32umJ9VSJGNhHjpnvaYNiT4ouRWmuDoZdTZohBQQjRjVaT1qvjzx3RuRp8o2jLmdPRaFadAitP9bYuMj3",
  "key33": "586map6sWW5tG7AvyE9xx4k1zfc9qXbACUaPnJasQNm2t6d9d7w4e9Cu56ZiFJk47hzm4yxmpGNktCREZhtUkEuV",
  "key34": "z81ua5fBPE2sucw3ihYbstbtrWK2EXmiZNAFjkYaBDPJPJwxfKrhwhpJMXDDNE7vdg4Gr18r8uJnTFDVoHYp3or",
  "key35": "25ZPfBhzHYUVMLtVLMqExGTs2MZXgHTcQoDTTBLxQUEtA763JP58JcqS4LiS3u5aoRro3xWKcKCr7KezwCxMHiy8",
  "key36": "3jgEGy19jDui41pUAmeNfTzTbuGiC5TnKhjLu9KVA6NiFfktvK6mZZh7VZTno2xfYEz1Xfhzqj6w7ZAdJiZKAR2u",
  "key37": "41z3pnY8QyHSsNMoc2MYkqCPxP1mTpLZYtLzEBZdmXhUWKqX63FRZeKfZBiBNUT8vViowkTGP2rN1wd7HqnprUWF",
  "key38": "5EPgC654PeoFGzW8VNss34vbp27poq7X46Px1raAg1XrBwQ9Qpx5mum9rEw9hNXjgxZvj5MsHmhxeeNWaK3dmCYQ",
  "key39": "4BTL8TftyRWkjhn7EUubMHTVKab7RVff53jfNbqTTfK6kxaW21Q47AC6c5B1ugmFRMtwdj8ZCFnb3kZBgrBvodWo",
  "key40": "epU7uVTdjD5gY9jmEPvzwtcFXKwsHfpLoPTwhA6FwLuFeYy6sRURF4s1hCEZQiyXY9xUdeg4ySZi9EUFxWRDy5b"
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
