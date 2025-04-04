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
    "3NTVUoDa1p5PDPZYQxRMwjQLKUJBBooS6UdMf9v3wgC73LDyVNtmrmkUhvsCB3gjGa39A8djmSroiD3weA8NZtQh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HtC355DJ6UMW2V75XXdrnN99Em3zuQKCRzSkXAQQnGSbBFvWvEe1f141iTmacDDBNUdh9evoP2j3Pnjsz6djnKe",
  "key1": "4xw9bUdtbCGk4iT3hNQFhxC6D8EVDAHqrKCHadcZSdHxrdsT92LRCfW6zGanna9ypNzaMbTRkvhA2qs46dcDwchB",
  "key2": "3zK6PCH3bGTHfZYoaQ7x1pVGDYVwBs5b5qEFZUsqnDbkDTiGhdKiBmCBQTNRpcNzqTzv8qC2rWDmXEGALnTFWCf5",
  "key3": "5mcg3XGhaJEAbWJqeoQp9RqTraoWnsN1PtzkzP6RpFwAtMgeXfGQH9DQSYXDzT1mWnSg79LAMEPGtqsRUJezfKTk",
  "key4": "4GM58rvSqReN6o7RqGB88bDBH56VoA3Fe9mjk9m6rzYUte6vNssRzPWi7M5WWNgySN9d1nms8q78kUN9yA8TZCmy",
  "key5": "3UFVRDhZN1HGitdzTwJ3fj4Cr3hyZrVkEaskaxeMNSo6JvEa4zG9bAH3XPq7bRTkZcynwzLSGLMbF5ytsbjCgszh",
  "key6": "63hXuDmeJpEiH2iWk2BqrvU3RZiptyUZF6b732KkXDgoeQ1Ae4ZanfaH7U4MZD74BUbGBqGSAjCv5kJy9DPq5aMo",
  "key7": "2dm3gAxWUtiwyYRqdztHWbbsjJH6bKy1neh5LvsbGyW57fX2jCqnUYmrfXzrZLrV65ScEnat2Ui9514CkYYEEwR3",
  "key8": "3mqwLAHPWQUk9vqfL7375mDR2DNukxcPdCQ1t2TbhobqZDyD5ku3GWpk9wXjrUk1qdPBtnDuZTQDpzr77XtWXptq",
  "key9": "1NR6mWwTqkDuSKYtqrkwtPePajkyWsF1FRAvuzxzwKmDMQSdm57DQ5T7nXAKQco7Lkn8ZKDcdHa9UgeXRkRnbGJ",
  "key10": "MmnsEwVACrPqum8hShp1DTkTv8uJ6SmVC8LK2KGhmYtaVNbyGmw28sh8DYZ93nAU3yffaowCDGNCFywbCcPU9kp",
  "key11": "kRs6zxTTm9RENdyoB8J7p3dwnayxmLVNAuS68rLMwoNwEbStV1v2DzSDBrRsirqCcWvdT663U7vwcZaLSP4eD2q",
  "key12": "4MbxdUKPVATx9PeRMgT6x6iibcyVcQnYBU1deFkeNuhuJTpGn3s8ZunUrdQW57NQzb5erESoRkkLgNVkqVotAQRJ",
  "key13": "2ik8d5WKnaj1dVBwgQ8HKxdXqhDatMgLW75kNAC3yYsJWz71o2sr8jPYQH5GxRD3pV3DFNykCY6Pt2KZRuvk9eYw",
  "key14": "4djj95Ta4kcPTEy87AQ249C8CNKqe47gohgZka6nL5HWKVkkorE6krmn1Ef3uGAT4cfxQ2uTa1MuoTvWFMn5FPFa",
  "key15": "CEX796aznZ7E73Va17GrbU8wGiw2qGVda1YfjGtoM9JWE8Ru4ePLu2a6AKPLpBLeXpZwTN2L87nHmUKQsPXmhc9",
  "key16": "2YbwwNFMtGCFuwDUMAgvjhydm6ysa2TDi5HbR8bTM1q9HMnYtbSLcsYoBcPW4hLBjRs9qDQDohUafqSF5ZQmkMSw",
  "key17": "3qb1CC54eYFjH2nc2wAtPEZSdFVCWEzkAqwzgcBUC6jvYsqqJUHgKigmrCL6EYTJtT4wweBNBEW7RcSWhEka13aF",
  "key18": "39cwmwVZVA9Mqav3Nu3e53Pfk21qCh6mWRM2fhx4vbPiuo6Ekmb8s9VgtsipVHBUVqxvvL4ZhCtuqzSgGofE4L6V",
  "key19": "4BQmzuqNd9z2RcffWHGku8vB8TeKEt9mPV63wnAY8dguRWPwiEjwkXpgE8vuxL44dkYdXo5rtcM4KWZgfLLiWWGX",
  "key20": "9QfoSAG1d3gBRpyJU8kBb5AyhZUsULvxBijwJEB6FummsKcaWKD5uDtHrbABHsQ1c4Xyp3aw6J79TYj37dSUC1W",
  "key21": "EGdfnNjyCEUwkbxTqfv1T63vem8zDFFDmedGgkvd79dYhKjUcDBQWxqbMJknAcdHDcWhMBzy7YgDxtWprqp565E",
  "key22": "2CmRhg2pm3F9gyUKDzFHcgGH7chgEQuTRLftWYYmtePWnfLsytDAYxcCM1HdQk8fQrfSD6fai4vzNuVQoNKnApNf",
  "key23": "3GRY1HYANZq3vm3RR9AZ2eHHED1mvF3LoJCzv2tz8BHL9qbNESzYrX7uvoypZEirDo3tZePoXHJ9cr3g28wKjoXn",
  "key24": "5rqPuj7W74Dpp9kAgvhQn89pktMeC239NBVTHbMK9H2W1r9UYuSRCuPKDmdhhqWcEQFu56pPHZqhooRRQ6SxrTQf",
  "key25": "2sQsXVXeGYTvMrgVoHNVQjHupgQhqkhpzdacBeXX9vtWzjYhvoYjwvZreH2EvdkQywo2tKgfRT6jZEdPLeGvtfTJ",
  "key26": "334VurK8aBMSUbhbrgZiosvVPNbuJWGcj6f1imDbrkFP1X7nWFymjzn5V8pUwuqMWzLTvveEFi4DgxEPBYucz2T1",
  "key27": "2X4WBAJVrJAWrKqytprpgQYMd1swXkSBBkcGAYms6acX9Wn23KrRmsre1oVne2BJhMeprUtoxLM6WorKc3mzWKqQ",
  "key28": "5H7wWSi8ryYXnuJFsMZA7R2PipfBJyRLhBGfCe8D8Bt4ecDqvozEtgYPJcFrzMx54yG31RqNmrmF9qkQ7GGNDY4r",
  "key29": "4sFPPZKMG2jbcspaPh7XyY869vPky4ZToLQ4tJg2v6jBmkSsnqZXT81TrNzYtA91ur6XphJgoaL3vNtb6qLTV2v1",
  "key30": "GVtmjQ7dRrXd2XEUPVVoGHSaS3xRtgA4yTEhwEGedx4xBEZn5fcDCnmQM8RRjsSPTYS89anjkBUp2M3ztYTHwgW"
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
