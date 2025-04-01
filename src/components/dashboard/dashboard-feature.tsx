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
    "2UQasP9pUZHqpyVRoYd8irzH9EVyxAvmJsbgRqgcEb174tJAKhXVPf8XHLhvuSFJczgzNWMVAihMmCCfaTBG2tSm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hgg1358NNctCezz9TBD7nuhSevp8hwB2HXQEkfJvnJLXZvUnrG99qaHuEtrzPWhx1bHMWg96HoFFDTKrZGZCRyo",
  "key1": "25txL3oSVPf4GtyeMsi1uSP2XXxZQ1umVdxG3sPUpYPX96yXUQX3TZKyC36FpHiBay4qpK4rViKifedQigBsx4tG",
  "key2": "2admFBadCqFtM3gQ7MVwGk22ddiH1ZMk3LyqYCqcjKyYZwXcvjFrVehLKtdypxZ1ZW89YmHdLXnNGMD2J75aRCkH",
  "key3": "2cuYQjcaesKZpJJM547qWmLXdGVuukDp6Med1ydQSVfDtAWS3tcapaB8oycxBLNq4jCKYZFAsmPMHshvDA68ouyA",
  "key4": "4gCnR2NRAFtPTJwuVyNdEXhSVksuWMJiji9tr4Pdjce1fn2ZXHduQjdXDfmnQdiYcvWKChyAy3mpj3116Zw5pQtG",
  "key5": "2QzTMNovHMahkbt2QzJBeizrTg2N2dDNFs6gkaAK8iD15sG5NJWvAhY3qgxcEbVF8CsD53uXdGicjwq3BdFPy2cU",
  "key6": "4y2iN36wwMtc6Bmds3m1sDCCkuVcWMEifcdQS7HhdDUR7xG3Tg6TiEExw5ujNpD2psHZQADUWahHU4zZJMCxdpnh",
  "key7": "zsgyZHKPTGXjaP38XrV1Av2WHpKxgNtSueNCuucsUkFZQcc83TiB8ZuX4HPCKAqrxd4xpmJWoEBdMPWGHxH51qt",
  "key8": "4Vg2kgWmhgfcHTYmFn1tWZ5HwVNTBvG5asCoy9uMhTPXkTmWumd4LcvRbDZGBXBbqtdPji7ULPiFiDrMuGZvozEk",
  "key9": "44uPBZUryL9mB7MTvZQwQKugPbrJ9AZk7A8RnaxK9dbYU2CGqQDftHdxZJL7pNq5NxdUg7pBWAydq4BqPLZbe9Dq",
  "key10": "66gsKBGWFcZ289qFm54vn58J4pZV3wXdfGFooZTWt9ozqYK9DobFCLkzhTsEGkjgvuKnRoSzvKYdEyv8ZQPxyXaV",
  "key11": "3EhVVxjudxFaXtx7do55g9ZjZKfDrd5yagepeBz5YfsrHc5wtsqZzsJ7iRBZuqPPfedgd4HKqbHv3Rm9WZ9XNFRN",
  "key12": "4cZnX45FJRsxzLCkWYsDPhm6Ei93rafKpqvAxhFtRs6x9wMZUf9XFHuzn5oqhoNi4eX7UKXVsDevqN3xbgm8sR63",
  "key13": "W1JBEVSSqh7bcNnFNQXz7vDKRy7Ngwoe4vWvZM2XzHH14YVe3wUvGr4EAYS13M9RQChBu5P2pTBfvwadXB2mKEv",
  "key14": "3fJ5MhncuzPn3tEKstJhZnyL1UhQXuphLDUizSn1JAhXX4HWv1xeudCQtcDrbQvhYxfTNizQmh8i5a7DiTEyUEcs",
  "key15": "2QN7V3B4fKMjZJ1osVsKJgLpffkaiUmU9DKgkMEmLAeeXwi9KTukrfTvtb3BvgY15pUsJgGMfc6rgHtnMM9y6qnC",
  "key16": "6nstwWGwpNdHL4JRcrCoTAJRgF37UzU8QngHATQMTFg2F6tveg88q9xoVMSTzBu1B7kNNqQPhadqPADQiwqcVFC",
  "key17": "5GmWbNEubBmrvE3zHfGF1GcNThBLNqmXKKdhEFTxWxLy6ZvdfbN5EUYtAWzj2rmgAxQJS1wuTdmjawazwkVAqxnK",
  "key18": "4RgPbcXAYS94RcERVXaHA3BnAcgBwBJxMZSAh35N4ERmqcE4GYp3jyNUTsAPG64v2cW5sKHVHhL5P8hpTtUUw6FR",
  "key19": "2UcuwzonvZaqvPq7n5PTaPhBF5EvZDeFKhdgPCqa9xeFkMmkaZTti9iANEtpBEgW3LKmXZjM8JtfuhmyMCnF9J6B",
  "key20": "56TUEQ1xdaSvRtLJcngXKABeVCXvxdJujYw4cDqiuUyAesai1y4LJptkAzw9dZTUn2Dhttx56ySYwfrNm5rnwtKU",
  "key21": "mQicMbbLU5bNna1yXPTPLWXqipN1jiiiN5pXWzbEAzKYEAGxBGuxaXMFgpNfnTAY3SyQNzyAXCTwPNCR1F2KgWw",
  "key22": "Cjf6uqwoGQPHGVu8t7pf3eUbncWSQuNqeqpYCfPzEPGxezBMDxuhbQhRgbD77BJZR7TbaFpPLg4kAWMEZ7jYetS",
  "key23": "3pVmuGri4yURMkstSXv4e55XoSap3UbMuhvE6KYxEpHRVuW2JCcR2aiosxH687YQ8FXZ7T3BN7EmXWkt9TUBJzp9",
  "key24": "2TmSfpz7NjsohXRUjJgNHFCuoyoT2oFhd6rXFEcwuRATDT4unNhNFCH46QZp1ayacnygkmrnB3aovg3TT9ENAwkg",
  "key25": "3bzh6oqneVGsV8vqoDCgcQnNQ5j7An4qaJxaZGExiBUeXuaQ926Qynex3wUpGALUEasbF1TQMQaZLBp8na4ABdHe",
  "key26": "4Xr8ZTRzpdyaSg32VJi9P4iGqjAoK1jnKsQ1T1yj5k3wL6rMdHcNsM31qoJc1P8GMrAdHCLpdFdfihAoenNXDrxC",
  "key27": "fLtN8iLaBz8NbZCd2vRu9bHYUraTuUdqLrq3RiKHY86Wu31ZRHHagykr27XSmcnfwy9z9wXndv6UtcFum5Z8sNw",
  "key28": "4kLD8f8GnThFRHLE8uteqSj29XRiDcSEaXL3dwvj928iCSQvbhEhBRMRpkPZhXakmtC4bu8ZCdpkyu6oA85CuHfu",
  "key29": "F3dW1omXX4K4vgTpd9uN5gP1xbU19HDfhgXfxjjsMkuCCVmeBbJwtL4LQzKjU5BAVWVvbQk5cqLNfxLVAQ5an9Q",
  "key30": "5tMcsomNAJW3qpMraxaauoUpC57SaFUfSS68QkpaEQs5P78XetfznynosqT6JZbCfNEUoXjQMGhY5rHcC9BuJHjE",
  "key31": "65iLkqNGvR22WRYs5mvAKH6xQEHtTvgraeUkjKHyURzeAQQYtRVdG2JnyA6w1zPaNesSTmHa4x9ojveweYpFXEyb",
  "key32": "3n8M71WQN9VXooYHSXxbA7to5186hcMCfaCuwr8UvSxe6t94phiGvAFX7ZNsjg9Yk6gC6tomFUuZpCe54ehki4Rc",
  "key33": "3Anvhmw6QA8SdLte91w9neByXqa4dwCWod5PNiX87oN6GAsNuie8RN9fVJZByfjWZswPWfFuVzsSypBz74gY6en7"
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
