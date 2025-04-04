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
    "21bpJ438ZrYNKTLo7GciL4eg5DmjGuULpwYAGakMtY8GBn4bSdUFEpThy13DV3xnSKUfXHPTH9SsZtCwhgjtH28j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tFMugAcRVQM9N7cfLh9BtYz5r2SToifqLGaC4oHXEiPD9WhxXPewEBEQbii3z2k64df3iWiY2T6WW4j3jFKrk9j",
  "key1": "5ExF1dLPmREDbLsDyYY7MQsnhzrJHYMWGu4zsFCGLdXaaJWDc5JfmCYwBKPfLGdMooSW8FYeZEjdgEyPXDBoEGLY",
  "key2": "58HywLSHMvE5vPQMPHio8wuAE5j3eNXfuXuyCvRGw5HAJjMJZwYS9SJbVnYNxWyRzpRs2Nro7v1Pi19T6VoKnGZY",
  "key3": "3tPZaqDkVKXLHZ3DJv5iNopsaiAKdxqqHgyUF1che5c91cm2suKWFdwbDJNNqHKc5ExGtb3AtBMRdLMKDSjK5nUt",
  "key4": "62zfBjPERAdBa19VJFQ69oxzGgCFSkMbPaMeCdJKxCzM3KgrFgiJNZV5EHsL7ARjgH5N2CyQsbvyNav3CpcxQnG3",
  "key5": "2rQ96KRLuHkooXa6tqtVNbWnKNQSGY2wNwfqjbRxwEKntMb815ArBXvKP8iRzbdWevPtv4cG962EiwrLyncPwZL3",
  "key6": "3UrdvSubN87ntNmi2MByDeaN8aKVn9GsHvbspGTrZho3DBQJJRNBK99x1cf61siSXLmksiPqobi2vk6FTU3oNs5A",
  "key7": "tpWJFtrY2F9pgQE5bjkJXqor1VNXpTJgeT7XykJrRKXFqgKHurS6tmsSSp5SP5S61xdaGF9iDF6vpCBrnwrQ3Ra",
  "key8": "3nK7oNWiqExnZXM2nVt7t8XZSPy6SjKYRSBfkcyGw81p1c7NRxxyE6gzrVBivGY9Em6g5m51Xmezx2s7Mx5XZ4ym",
  "key9": "4s9bPcaa8KSGBCxt2J5dYT8hvrMKmSTQToyAXqMW5kGVpSjKcswEZPykh5Hvvcgw9DCmAFQVkrLKXSdpjSATAJDZ",
  "key10": "uu2CqB6ReEyDqj8R61bQq6TiJciorPq1L6Fn4RZwc6CW6Erc8yUhXZHPsf9uH5N5J62ptGv3uUNuWKMdvydLjVU",
  "key11": "4VxBthub9NuJ2MGf5gMu94F7868ZMZefK9rXr2wZ1BfcvoaDF4i5wY5J9suW8PwAM5isLKTraPaxthQJ4FEdyovd",
  "key12": "26jfRHcPE2AW6RmeTnonoPqUwxyqDkmu6tjgxXd5Tz2DSBZzevDWuTypx5yi169WtGo8Nhk1c5EcnayMGvwesUbV",
  "key13": "5j8TKmvRvByDGpBSYhhPmEUs343RxZJRimNrP1CysigZDvoorHxPXXsLAmTSCw8tpXECMB94WhkhqkbcNhSTeBZR",
  "key14": "JxC3mtNHHWuiFgjcUanNguEXqicg4w2UfRkejamgUiChWzkeuEfFdJ7ky8WKAMWVYo2sReyQ6nJDvgTm98Uaque",
  "key15": "5uXiUh81oqeheuwJ1a9xatvvsiRjcfpM4HnbRh9sds5TzfUe1BxJesY6j3ojfeNPa2hb9u4AVcfcHQYMyGYsz4d3",
  "key16": "3WGDuMmdWLuLo37RzZTBZaUUPrFRLcP2vQ4ueChRxo39hNPaC1UKKDXq1ya45ZAVEzsEXbvmhps6EW8fEXpLTF76",
  "key17": "5qP4j7nBdGwf2LLAn3PYwb15fRR1i6Cuq6AhrKDZ8TWzXutFnfVeygMzxyMmvbcaStSLstU5GMfZehzKqq5LYzaA",
  "key18": "uozFBD1aXWpbYCBnVzXfHiPTR2VrnPKW45STi1k3jBUEoe8WBE3nFCBbmnMyQXunixTzqNuyhaLsKbQRg3zGwHX",
  "key19": "fFHWy2Py1aK7vZ9zNi1YKDkrhAGdTx9JQjBrFrZ3Kb3DLszHfeTYy3JKN2tF1gaTrsSWShj6X28HjPQFmiuzp9q",
  "key20": "3qYDdybYd4r5xcc3WpFSnJ9VNar8cqjg1vPc3QZGQP6eQ3HkhLeAZAoynF4PYFeY5NGzHzfjKWHnHU9dxi5eq8xC",
  "key21": "5P86YADXTsN7k63UCefjgF32xX956R5uP9xKJtw6yadYSLqmSavG77nPxB4mc9pCkn5rn5YeQg1rZBWMxSBLnnHa",
  "key22": "2CNegZnEtHoqjyutjwG9qzeBYyqKCvXdnTmnsuT2WeV27tKVKqU8C1Y4QbXVwAoBwk3SHPKpN5x5pRnriPFNeYEc",
  "key23": "5WVsYiSaG4ZFkYV2p9Tb5r2oE1UeFghNZZtHWRFwfUXWHsCoFt87wyVCHTXfDRFhasiZpsaRibE279S17ZNCiZ7W",
  "key24": "1UYnguFw7VAMVJjECbgu4yn8o1PfmjkQq3bxYP3aVYTekswuQ4gVvWxLq59Smku6mKe8cwCNvNYbgsehJJEqn1B",
  "key25": "M6icT3f3LtWkAPPoUeEXj4Fan7DBbWKFPvdFbZnSuWpVhtyC4niDFvRoLCc37MZLNSdaNPt8u8BFtN9uGGicJiG",
  "key26": "5VPwUjdCrF2NpwU6N21DtxufmKR1ebKoaDK6kKiRVTxkyzpDsPbXbG6XyX82Zq4v2PDhtjri2mLXvM7k5qn7MUhL",
  "key27": "49nM7V25uUjWbgfsZzegeQUstKvXyJeAXJihGMrTmvZBP5MAdpHFtLECj873RECkGKkgpnG65DYhzr885wbMg6Cr",
  "key28": "MoexmxQzvMiwVdE4HrBTDb7PEcsKrUN12QRQhFbJLgMzdHycVwaD5ygy6PJm53hZsTA4SPFX4ARszuH6vXGbh4G",
  "key29": "3SQMzsFdk5ehYMTvuSvQHFKrKC1QbrRnkH2vvLoNZ6DoqmhVKVg6hizsZd6zjL8jYK3TT6PWpck4wy6gvGC7CM4K",
  "key30": "2bWMiWRdjB2qLhf8ieVasq7q9JLb16dKyGfE7uLFu2yBc9LXNLZfKp7xwVx7dELG8sF7LckpdNjmfRqzuXZzMfrg",
  "key31": "5cusgTCGHpqDtoZRTvyJNeLkaUDQB4zP3uhXRJXbyZp1GU4iKJvWdVwLSw86wBhumgtvUHg3iN584BJuVKxihXsV",
  "key32": "5upcLCepeW7bxhWvsNqBPhFmkY61NghBPjKK715msXQD88nXQ19aTfXaxpN9FUJ7kmGomdhe9CdJHjw5v9PfXGd3",
  "key33": "rn7W6M84GHRSTDCp4XhGnu4EKUCqEvpvtAkokWnuJPxzxyFo9ZCNDzddVNq6dcYMkG7eErHcFLFnR5vHXgHVxR4",
  "key34": "522HFAPN62tx8hT8dYgybx4SKhPvcz3fta7Vtbny1ZXhdQagj4a36jAKrYTtcJ3WW2noYVjTk5w4grA8P5GxvaqK",
  "key35": "4xZeeds8hhHvT4WJhuikvrwd4vq24v7kGAFNQZGP8uNs1TBCyQjF3PxDG1UfFZPBwRvF9XhW9YNEASAJQFKH9g6g"
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
