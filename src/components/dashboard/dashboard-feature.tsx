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
    "hP82rNJUqSptrWKngReiYaSWTRPZGYfe9cXuozKAhgu5ST3aXNwSbDs3Hia2kj1yFW7rbsmpYxRMkZcspAD8JEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26NMp7b9LtS93nqNuXG7Get6W5ZMqpSsNdCFCvotZ4LdoHXBApv1aSh3xhpLmzx3D8qhqVV6yHow6CYTDykrgbhb",
  "key1": "25WAU7kTthavGQCTW8gWpkGzUw74U9EHzAt3EDbHhG69BgJM7CBouZ717RipuyzGUgwu6iChx4tY5s6X9cqihCKo",
  "key2": "tgm7FiMWu6QANKgBQY5fxDAUmiZe8rwrvry36JseuNuog8ZitKw6MNk2TJHHo8WVBXmvuSC2GHgTJZS2WbuSbeY",
  "key3": "4eVkcFHK4zZVfsjanJU59kpx7NkM3sBzMgP56S2vRuzw4rufEKXzM4AGxczsHLVppoxjaC8kAtfc2qWUZydK9aBN",
  "key4": "25b8TUekUvK3Z3CJVMay7NogP8Gv7HKq2Nkcmf2G4zTirXPSGbmAK7HGunPxewJGCmwJuYrjuYQkYWFCu7vV1yh8",
  "key5": "5BFQpZxPQ5BU949azMSExgdW1aDr6141E7iRUMXLAiU3hs3nQaCbRizsrh6ug5Lx6qDdQA29bKxKPa5TuLDr8wgo",
  "key6": "3B7PwRDcjThsE2dPX2Bzt3Heqp9kBLcCA9qrPxiMb17akCVw8Myhj5whGB3s8QujfDyJEawRc79E27XRUaA9mvG9",
  "key7": "29ZNkYihGivMeUKyXEcSMTMhXxbquuQ8wwkwaj3eTHGixSNmdwGQW5QcGZc6baSRUFoZnenijCi5iTjfXcMdNVvY",
  "key8": "4kk3Unzeu5HwLbCd6k1SgAKivgqKNM22YsD88WNw248APUJ2naY3zerFbxtTtHqnN5RQ4Ed6YPCY9zNR1xnoKdQa",
  "key9": "5WJUGbAqMh4WTXYhBatEMF3jp3hcbM6i2uRu5FsPuxZDwMHXH3gSA23CZT6ptXsyKbLyGtArwUctSMGzM4TUoHh9",
  "key10": "38ZxDPxdRUhRqLEKuVqr72yg4gm386WBDvGMTsH2rFXQ6G8KWkPmLCffmTNWmvrzrHW9qYx8YojwfbLusTaafcUa",
  "key11": "2b1vDtYZedrg3ZV1999msfvLWiyKHRha6AAayecq6KuUktV7ZRxSbjTSPh23ihZ1yiBD9WLmdvc3gUxBTHRuEgG1",
  "key12": "2Vhc5tiJH24jw9upQBRMVC99wPJfYtyoERqqyBzWaDmwja6i775hcdDmK4bha4VnKs14UxoKie8gk5uUPXGj78Qq",
  "key13": "Ph7YedmzRCVDi783aLrCJK4ZNy2m47CWGeCZ99LvAaQbphGXNWkZ9cDd8tuV1GmLs3cqN2LeuKoX7FiQC731Dtf",
  "key14": "3esQMVwSFJaMZs1kVGyWiTVPqEgfLjSRDawQFeSXanPkeKc1ZJiY9dk1KKEjw1xm73wtPTBP1pktxwiV3A2NEDnk",
  "key15": "pu4qEhzET1MXquHgbobeoA53PWMedejoh8ZKNUMzumYsQWBvEpt35xxknDkEwH7BgtoFVRZe1tmeFSXw3RQTVgs",
  "key16": "PPhTbXsjCWsn1oa3TZSAtW7Xc3kDRTkqJZcU6Yp8mToBNxNe9eSo3siNpDdAAj3o61ZeCuLL2XdTHCzricaU5cA",
  "key17": "5V4BMUfotAC1csyc8aQw1EAdua9VWfvRtn11cjxGdKvP5CnUHeoBJHmGqPtW5WzGGg8M6jBLgQu31T9wsFnG2kdv",
  "key18": "4syauo4jt2pT2FQJxMch344kSGHT2D4nRckvzR2Q1SYom2oKmBXiAWFTpqiMmwonSUnctCkMjJJvZGLgfhWqA8bv",
  "key19": "61cin378y85cT6nq5GpaJ45ea8WYuQRkxaedjq6d56EfsFq91AWqoWUkM8G1hFnWNVcDbaG5FQDcENL8RRXUQbdE",
  "key20": "3cJMAYiZVL7SCXnYnk5HUtTvtXsPQMJRd49qCZ2QkfWE6djh6CaRgseiBWaq3rtLrmKVFY3pPq1qcWrCiuSDD5oX",
  "key21": "mUoK673ieQew16dHjpS4nEt7ehNgvLmmo2UQv5NnJzmy1cgvkY7ZHPFJoZ31FMZ2ZxFoirwCJmnF3SaiqyCgHYz",
  "key22": "4L8MSHXtrxUWCiPdJNh8tvnqUxhjUB4aYzJMtzRavAZqQdgiCuT76tJr5rtFXT9ynGcXyncVkJq4vpeSrGRF9giz",
  "key23": "5mTxV5kHW1cQABqCbfQzR1gu2UaPeSL6DtpovS4dYUdRKSEw7UXxUDHJCfUb2edZnLCFsvsVc6oHvfBScXU8hyEh",
  "key24": "3MH6yKUWJhUCt2eRPXPSVXQHxG4YZSpDUHMN1a5rH7i23Ua422zhCiBNd7zVEGyg8mnzhqpMdtVLyk2DNPSUW9p2",
  "key25": "hXNPJ1zBJKQejwZd3ZfQKDG5bzzmPuEtVS1SwH4TaPV9qPfT5iusyFB5oQFiwTwsXYxkDDXqcHPVAhZUsBQUWnD",
  "key26": "4VvFL45Zqowb2JegNGsfwUtxWub7h1wypXHzB4skhJF9oo6UFXvMQyfvrWN9HVC6wBstcUyQynC1MpC9nDxjPr2U"
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
