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
    "3QNMm7Y2p3t8s7Hs9eEepGTNWFG7fvFvUcXxDUoZq8UbRZi9wLnXQmEe8whFXURMF83nTDNok8sGowiTH2P3sMUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kjvMBFLMhRKRhvViecTWmxDeeH5ddY3a94ZHHTF3RZhdpcPKEWkXuWf3fJ5HKghk6z2hEr7pGLKpj7TVPxabVDE",
  "key1": "3XZ8DrBqkptuqcNNQ5GhB1eK7A1YTCiUQcfM5evZg3G8M3S9Voz5M7Bp9D9383p543WoBn1jPHFKmaN11gN34PVi",
  "key2": "5mXKAUKLDPrZR7yh7PdpEBA5TchCBtTULyLWcWEadLtWt9vCPcYuPTCj2SKpBrS7jhmXmYzscBdaWW4DfS9YhMBR",
  "key3": "3WcDKMNXpKTnwf11aavm15QJvpDTtpQAggmrvsNU5ysBd7hsVAUmVqM7iAGAp9rYf5PQ9p9ScZftrZsoZPDpGxVa",
  "key4": "5kz4RSqR1C6bAXVf1wcbPdMStvWPdA2uBWSVb6vqqZCvsBKiPus4CoZHxPqsqc13GBoRzFdpMcUCf7MvbauWf8UD",
  "key5": "4dhjTfBfTCjvR1Ua4VmvFRB6X9ndggBpQPavQHv1XCyeQwHob35t3juMBS2tz2S3QPu1pUHFbQwHjt2QG78JQqsn",
  "key6": "3mYZQ9y4HvyjSXTEjTv7QGbzyRMiMujKtbSPYpA4d3Yqq6da19v2m5PyE4zmnRv3rRAHuAXPwwciEGsamsaVdusw",
  "key7": "5mGu9q3MbYqTpha99R1Tr8YVowbngM4hL9854fC8e3WsEnZpdS8zRk9tYj9oPhgjfAZE9N1dPh4HySepJ11xtw1H",
  "key8": "5gcwQVavtMxTM9eJPcAVuGyhW7hekC7tqkPQJywzSXQXLRaWN167LnH62KjtsvfqxtM9BU93XvRvEpnwzaVU7cUg",
  "key9": "46b9g1VUk5Kc6CJoY8HoWMWhC1Xf6WVm2BVqd6YFxTkjFbU4bsRYZZjJA3CnhsgTMrPSPfgqvAPBZTVh7soR5Z73",
  "key10": "1oLKUjn4gBaziiySL9YQSFKJTfyQHPk4SgWc6yh6csVx5zXBnoNqtmy19SsA33nx4Es163oxxsytqmyHePwW4ux",
  "key11": "h4SP2X9VTrEMjwVHiLUWretdo8RBRHw9sEgvzfvpunvsy5mH3WALG3GkKe417UyGJiRxiWbpCzM7hrM4FpxrDbR",
  "key12": "3eZ3mMnLg6EdxQKFqRZJSoT2uqfGSvQBcSTaCu698RBuReGh3TjFWahEdY2zah8puAQm7EWMKEdthaoSxdCVqdZx",
  "key13": "Ht1BDNtYfkiYwz3zHr3xRMQPdF1e7BEXh6avSs3hVcsT73F7C3MSz9M82YzXU9xkuwYikPLRHJnRwGQDQUTZq3v",
  "key14": "4yziY5PsHJZDQrWXUdpGeqrWHfeHqJToudAiSDjUy3CeS3oY5WJfY7HxhDqFS1aBGiGnmWi94GJoLW8jPSHYtDxV",
  "key15": "5T8nLzr3XqRheyhGmw98AMbAfhBSNwZZTxYrmoD725zo1Sww2gW2La1CQjbJpkMwMpLyWDowQFcgs3PyzcT1BAG3",
  "key16": "3UoRvhoqX7Wn9dbkZ3vccb4GhVHUR658afHRwjZXwp9nZW2Q5bjSNwCP6ujHjq3ZavoHrZcTxHSCWTDwMwwLMbX2",
  "key17": "4scDW1ECDcvd8Xp1B2iQGs5mxgaVM1TgdkAHVFXSRDsT8bjrhD7AC67UrNgeAPemZPC1he4wUthjWxiRe1Sf3TJM",
  "key18": "2cWWyVSaWg3T5Doof6fwLeCzBAXTiuhcfjxtDzG8kE9zqXKm4HJRagV3pg6jJjTxFEXnda8NRF7uRgJdG5PT2xXk",
  "key19": "4kgKzuMYvLDiFhtTvY5W3RtrEn5wKFS7X9fQN616xEr6sKu1Apz2TpiQaD1mYfCzJX2tXEbU7CGmwuwwxN7nWpJ3",
  "key20": "CojGeX7J61D8ewRsYuprpTdJStGde33cFDXuhgBtVFSUCoCJz4dELCNYDuDbeSWJTWNFmyb2k7RYXX2Vus1ZjPZ",
  "key21": "3bU5SspGzsbZ8C6CU3ikUD5U2LJwFk7ms8BttLAS7WS5LGbCiPFSgHfp48nzUbH3vAjxVHSAmuprmLdFetfd3J3G",
  "key22": "3WkxFR2zwck7UHPMMjnGTMz4auvGZAe1AmJSBLJJSDP1N6A2TThY1wWfo9GfaWh2TeFp1uYEscTG7snDaPXzhTyr",
  "key23": "2DikxarFA6Lcx2irtXSV2SST8oufpTHT4V7xiVXnHwGLCWg6wW4V5hxhQubNZ4NjpFMniKFpfCeHWTxqHNZeTjun",
  "key24": "5dJtBRHrNLSyGLEfbjDnZw3qTRUaEhBTiBmBFbNwWLEkHgjRcdqMMULGzLut1pre8UvoLz4j77ewTcZ3gRa971rB",
  "key25": "2hz46cUWSM4iSH1Gbjakf7jPqAV6acZU9L4haMHFh9Cc7FNmhyXGahLNWhn7fJePuTZLwRmuCKVWx3SNrLmSWTL4",
  "key26": "22rJaQ2LGiNpVd9zvuFaNmxwBs7fguwScxfDASVHZk4tWZYgnRYft6wsQhitsr7aigkwHZqUMVm1DiwMuW3WAzjC",
  "key27": "252L9qHJBQ8XEwA9oRDjJBXmKWyCj9MqKbUQbb28Tu8HPVB3z5Q56ZsrHXdVyMp4xqeGME1ZxoYktBqoAzoJ529T",
  "key28": "2R6h7HUCuTpVt9HKfrChQ3QuZmoojP7B3UBUrXQ158eBMZuEUoBi9xsFFhTStLkpMK8UKUGxorNPAAFZAHiNEhyz",
  "key29": "2zFWrgVcMxPVTZ7MuYveWk6g1yw8H8c9vtCWM1td1rM2YEBcJgrHvoeCDf4pjAuyibv33962LKg7JD3P56AJVj2",
  "key30": "3WmEcumzb7HRRJrXvLtLfcFFL9fuveUK6ULw5y8yFgzWxeESoDhbnpvJSnjqAWwTojCRWCBB1pToWAaqCGQ413Fg",
  "key31": "4ZhidJ8x8sKRN5TSuxjsyNsZv21BxiHHTrqEYBGinNebESHgjNPkTnsBqmriEsrnmJakQvA8MtSopBcyCJhhkMmT",
  "key32": "65bujxYvH8F7ceuVYgVwBFMu5jXPyVR7pjKgapfKLXrg6xdDom36jrf8YWRiVsv2NoaQJWS129Bk2YVwPdDm81Kn",
  "key33": "2pbSMKgXNM2NXWutkyhevPBtWuRg1kPKNnSEJ2hA5kyUgYJWLjKCA8zhC2vSWY37w54SJmt8FKCNLem5Y5uSvNXk",
  "key34": "wxEdQAivNY71U7BzVLmCqdEUcZHGAKBZ3ATjfWAvacxofEcw6eee2y5Pgsk6VPcKXNRgsVTGgyKY6MYv3nXwhLt",
  "key35": "5nVSeJPfjoBj4qPMjXg4WFpkF1R7J1Eeq24vozpmKUkWRszjgmzcPpaDnqbAG12wfi4pR3fjH7WVGoJutcxifitg",
  "key36": "3zxPfmvjExW92KYk9J1TccUrrx8384u9cyZyWMsch4yQy6AYhQNfMn5ENZkFq6Bu7oFWgscWXCbwTJkGLsjkstrc",
  "key37": "4pG2YZuHsWipsGyCU4Vn4UdFSMWx7ekwuWK3NMSNFmRJUJkf4XtsanVDEX4k9i8Gn4iDVMGuBsKn7iSew2N2AYDJ",
  "key38": "2sMDFBEvp86TL3mG1XqmetDuwPvm98XXVT3ERN2mJvasN3rudZzJmJqaQissaydHisCBa5gcE9kBgjM8xjM54Mjk",
  "key39": "4MZeZbxEfyADonqeeQxMpXdHn96BZDEVFpYh9ujNEWvb57cQUweqxqsYRmLxXZESwaPq3aauiMeEEnQHkqhWSYEh"
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
