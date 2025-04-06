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
    "2qoZ9NckRLQ2sMDTEDrgpvwf9HrAaT6UhcDLwdyB7JGuXeLLBT7w6FQAjJh2D8Gp4F2BgPAbCnvRx8uttZhpnc2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T5kL8R4UUTHdpaiVJd2BzqWtkY9T2ZcAQvFXvDsF3UHct71Km9Z6vjKkofVzQw2GHS14FfXuM8bF3fggfS1Ysng",
  "key1": "2P4V7yZTsUXR55XMBN5HkPmYsoSsrVJqkxcbFf57iZczC4rthj4ruwFg3zQWkXyEnjtVZuYdzeHJ7cRiMhNYFPAs",
  "key2": "64AxPFnYckif9CPJv5xJcxKUKxagptviwWakuGdPYDfLPYgUEZQNVBtq5vdeNirEDqZhTAMcGnGNGENc1XYokUvq",
  "key3": "5iqMDML9rxQ3hU9fCxiiWaFKNNfmAh7rdmyEAUeZsJBu4Zgd6x8tZJujnSPKXAkQTLMijFVd8Y51KnYTGWGx4JxR",
  "key4": "5KcDDc2Z2wNVQf1Y2GCiGXNiU76SgW38b4z4xT2z2iy7RAPP3LGtL7g2gTUQ8PogjnfrFL1wLYxEWPHxnDZKss4W",
  "key5": "4UUTgs3nLQ81ARFFhaVJBBkV93TQD76REQ88rKpNASHiKWhRj59UAftUn7Zm7uWVPTT8n6GDwAMe4x5vLPisxbAT",
  "key6": "5obtWdpQMGjaDyWGhss1KUu8MRBLgRfG1aTNDBdVnCdFaJ2Y9WyJBwmSpUscxFW249aVWbhah5iji6kZL56QAGVc",
  "key7": "4C8GTqaKYK6jX6U6UoX4yBvcbZP6Jg3YtPshkP4Kp5jM1P4CNY3uHtt59xLLZogrhiqufL7u33UUdvhdMdd6jbsD",
  "key8": "5XSSPqrXUzp4gb1hgNUWgmFD1CsbaT5zsTkq66CxFY4Z3hp8v8veETFEY8uX5aJi5DGWM44i7aC9t74s9GmZoGfN",
  "key9": "4ZZaBmkk63Zdrr26MRbirexbjSUBG75aukS5FjHpFqs4L7ptZUgCr4nbaU2c7ARFXUQL9jvVnwTVELT1xZxqqCqY",
  "key10": "hFt1YK9j4wWjK6jtMZ8suvwxAMUgBhtCaev2xJLcbaSocwgiJzPD9uGbXAA9eCKH5k4SWxockvni14Mmm8QYHop",
  "key11": "4SYAXoWEf7V3Dh8rff64jTyhrWozSzkDdZ4rKxLc5zt7gj9Yd1CxwZNqCGVuPepJwwWHW2ckE9cY981xrLHR4hCH",
  "key12": "2Jk6a7mjx5uJDqap1XQ4S4t8g4vzwtZXxfiZ6w5WjiUkE5oA5fufdTWC8rN5zNbpzXJP7avAeuFfJAF1XuruQcAX",
  "key13": "4oAvqscRRiG65MUJq47KWw1WsGEfKXyZy3UKUGFDGQ1Wbscf15sUvGK9anXG57FvkGADogneezUB8pmJJE5ejXbb",
  "key14": "5eX1WuZivKDEdnoMDxB1dxg7iwx9Fft372ySnjaUCJRRUN6hUvY7SHqwnotdi7qS27TBPHmZgn87C6FQxh31nKHB",
  "key15": "KkeD5Y1czauS5GxEP2Mz9WXRuFefPZTaqhhj2rVR54m6BKWVSkQJDEGbnHhueGkAZj6TyqPXToSmLwWSWL13Nv3",
  "key16": "4mHy2SQ1nVbBaS4cRakLhEzTjS1zkBSngjyWqFit5rzP2NA1JKbRXYoizVwC9eJ5hac5j3GFZcBU3Mx5pqQVDesH",
  "key17": "oBSSdozKUuPKcegG8ZiEUZSjWbk15hAkqUyrh6jpq2ag4NdwWZPLy1VzDhiNPH6JEEga1vozHfqVTx8iNVVLreX",
  "key18": "4mKtsWXJKYztJnyyXQ94RZiREamVK1C7eUc7dBJ981i6fYBvPm9qmG5A8Su8at68DV9pE6uReTbn2VhgjoR4UvJN",
  "key19": "2dxkon8Y8B14rVpyh5b2hrxoLAXAWnP9LHarRZAzcKoZcmSVBcQHspgd7tS9LmUcPhGDzdRRg8QDDtZ5AoFd6unK",
  "key20": "2D4aFjyfRnUN5PSbje9ZyoCAu928GzvLkrPJrQAxjZHcdwAqtKxuYEy2nJ1ZvPMh48CmhGpU3q1Kctd4VTbCNRKH",
  "key21": "5NvQX9vyJXqgvac44vw9QtTgUcsZtn7UNazJiDEgyaQnDwFYwYgzeZ47ETDJJgcdML6qFEDeKNY2HkeM3tScmRQf",
  "key22": "3dd6CjQwSb6L24axnAKb1tdHjfLCp4coFe4wTgcj7N8W7npGZpCFoPVES8ca4PGLuNNrBst5zXjGDruJFnQLAL5M",
  "key23": "5qxY84J3ezX7WkB6C93gkB9vD1F5cdUNstfYp4dzu7biHEyMjF89KFHf8EbePqmmmqTv7u65kR6Pf135SfLf9skT",
  "key24": "4mVLszQkd5wNbkDWc1DyYMX8h7tqRuZrrmHKfDbkgPf1aaCnnWjfo6yU1YdFYi2zvJkL5d2mNEfNsyz7sk9j9GUY",
  "key25": "3zNSerbNaLn6rtXw89fVQaZ1h2yFnvo7fnxLmW3WbuqiYFoDpGEcE8tDisWLMoJewwFBB4imAWAXPTuQdd3W6kkN"
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
