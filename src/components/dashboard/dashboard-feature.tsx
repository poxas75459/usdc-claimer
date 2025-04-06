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
    "5rtEVG316Awzv58gcSD3FWdYiHVxXCeQYmoq2ET45T5aQhgY4NnsYzpKEQRncmHT7s9Nhf4YSg539pEpH5HaNcZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3791Tor2ovNYtgBSsn1S7hCVNGUnUAwVtDuMzH3HsG93WK2gVXbPFF4Gk9xEhjxazaCi3rPzuWDpPGkAJ5srirVg",
  "key1": "2HHSCnUwwgjW7caZgzrMwRYj7wuEDuHTNdGTJWTRbnhz9TSM8vLtnfkm8ywUXNYBN6GQ4u6Szp74U6TA1opyPR5J",
  "key2": "64o5v4FsiSCWwKNAwXdmLxVsDdm8SFDrLXgo12fKmZWAvZc3rxe6qvgxvCAaS3hekfAJmk5L8jRb8PQi2knB4Szh",
  "key3": "65QVtzMYP9bvQKTvTH7GcxwHBR7dXD26J9J1T9FqTHa7CdHpawMAfY6Nfd8ZEBqVRDZWQJfFRCwY9DWaPB1UqeMM",
  "key4": "x6L4VtvdgNCRRwa39uAktqry1KBG2eqLdMjJCF6rn92gteUhk6ogm7G6vMy5geE15gozq3Wv3Cipgp85Wj5sTaF",
  "key5": "3DkM3QFBMWVHRiaNiWPYDDKiXv9G3KhtXCJ8etw7U6RHVwtE2aegpTUSLjChvvmd4gMiYnVwRApXTUMhrSaLw73a",
  "key6": "2JjeSFvEqAbMa6191E6ozDtHmtsneZupuADn2ea288htQctarJfMrDvsdKgcRPEhra8orRDXMmaoZ1iAWGBV45MN",
  "key7": "5JLEU2VQwPr5n6ACB59N9uGKzPDVsPNT8jtwH2WjKJ3hLHq7H8cD9i6auJyVrYRhM1scXEb6fZeZyMdXi2E3Z5h6",
  "key8": "5wPriDur9JNKbgAea6tFU4LNpWk3fGQ2vaCuJwvmf12XnrwT7UEkXYndXbLBDxeycZzEgXS78gRXpBFWhfbW9wPY",
  "key9": "YcgpA2Ps2Ptd3fiwMZv8FHe2vhuJ79AyRPfyhPSLjYGe6sxYi1mbKcLa5BPLvgSGSW3vY7MZ7g1FqR2AFfqkPN2",
  "key10": "3G5ZrkLWeisia6cohPBVVs8MG9KBHcj5iqNDLwfW3pS4zg2XVJxs4yrVWnjqVUDQQaDCCHxBX14dU8XhVsqwQTaD",
  "key11": "2BWyT15zfMsiaLYXPnSyNCZLbSah5xN6Q3kCkbCXL2ZyzqrKkTREWLk9YJ6wQYn1gyd6gR7Ym5wxGzhd6HptsFTa",
  "key12": "4qu4b2SjaZs4C38xoukW8tM1qmrFrXCZG52CkmSc7yjjPAUbn7dAyL81ZFLaPh9naARNgHgALyHd9dDQveGkoYhx",
  "key13": "4H5cc8EDhPZXKdGnfdcUqykifoPsvwAQKNnrHoPfYZk31kgfP4ThqPiCTB5f3wLBGjGpFqSgk6o8zS3zHsfGzKnY",
  "key14": "4c8LuFpbEWJs4tMP1GygTj5wnXoHFfv21uVPGcRbpCVYc1ofQ2p3ApDo2Juro2Ui7tGncvgvrSc8RdaJY66BkbK7",
  "key15": "3LWtDh6cFJyXgZ6SGbZgAKpWoqCh16NBYVQFWgSEbkwYcqMpe1N3Poh18qTaB94zwbCfXn4cZfFkaQyCBTvmFWnE",
  "key16": "3ce37i8U3Qg4P1minNiGhpcJvatbUYyPTD9BvpP44MJp7zkavEakfuxgfme836TCcvGbemCS7VzAPF87AfohReds",
  "key17": "21ZA5q28uRqjZZTRRE9eU34RqvCbe23GhXQCXs9fVstPFMNCJncBjv1bY2fvHV7cWseYMp7eyyrqiW9zNnCmKz1u",
  "key18": "3vwtUPFm9UUvqnYsmRGqqcAG4iQ8Njpno4oCvarYqfAsCAYX97Ht2sJrTNKdKrVr7Rbc2Wi31efxb85GKqiihpUj",
  "key19": "4HQE1DhNqJAPh7RfmiXgzsZeUmSCcjKRt2XpbB1rpDo4Pb5AqDiV97g4KRPmt17Fu6sgSjzMTbbET7L1BH74GFxp",
  "key20": "5Zrd8tjkCci1h1Wi3zuGiUS8MJCgjyJihdckpMF1ZJ7NAyLSYZTMeJNz86krVxCEiXsxb1QPk6bqgooTJaAP9Tnx",
  "key21": "53XoYwD9CHNnf5g6VrL8zLnFnKCspHswYowpnscMp7ABFk5DxUUtu7Ype5c6Djy8KhAVTpidNfoR2D5jeQr5kf5Z",
  "key22": "2XZEiQctu3w7uvDAvGh7TBwu6CsiciYT7em1UzFekKb6nk73DotTJQyEFkqDakKiWXTcfx5v3p1xuV2VoCsUpXMk",
  "key23": "kf3NzxaYageb1A4RNVuvCApBm7oKnLVdAHqQKypwKnXL55NMZ7yYCP2T9SGxdnnR1K6XMHySkGCv9VQ82GJVuMe",
  "key24": "5MesduHVU5yhXj32pyC2J8emiJgnsd9gTUg1hvNQbNEr1eCXicFhzqvVbUBWyNrj32AiqZQzzLL7yJ7qjJzxoQ8j",
  "key25": "4WzB3rSQZxeiZo5zbzwhV3CuKtvBFdWGdMbrmRrUaPppZJ2Wc6xp7Qodj5KqP4pZHZKFgtByUTz8UbsJNFAh7K6W",
  "key26": "2tj9Kd7LnNsLv2ggCZdLv3oFPYBxBXZzctAZ9XeymQr4gG5vAmX47Wunw2DwxjE9WhhZ7jA5X8r1tZrQJuPXBBJM",
  "key27": "4JGYEq8ZaBunN2p6FfVLM4jGkrSUx8AxYoeSmh5gaXx7cLQNuHiv4njTux9DU6riZtAcgxDPs9MgpCebxBJgC5Ec",
  "key28": "3GWv9k7e9YbU5AKZtddyLPNdvM8pcEVX53sYG4Se3UkjkkiCrwiLBGCc1XwC4xHnB2kiaHn8xMoftSCbrpJ35UsT"
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
