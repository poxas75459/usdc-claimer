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
    "Lsa7XuDfbGKGEfqqzUB9KEXkWkeVMFFueTvWMjWrYaAnw7k2BmJTx734UFALLhQ76qmiLXFKqnBizbQXkYMJxE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64VxKAfANDKRypJCLLX5BrX54ei5yU9BCqx6dnR3CRUtD1ihkcHBqJRGkJqbQN3pmsjCnNiWxGhuKwSR9E52MeMa",
  "key1": "58A3BraPpyVN2FjXt7tTbqvayHaEeQfKTKngDyqQEvbZx9rTogGj9SbsmEdv2FEREbgFmxh2CH5ocvVCyDSpz1ML",
  "key2": "4FgRAAkvsaM4caHaP4WQ3GzCW49fJLuVqCpkwBDAVNs8UsqsydaYVsCpQi8ZsARDi422a8dpSjNAgDNxJjBuZbjy",
  "key3": "5fwvAsqG5kKJJtTz8c9qUPyLp82sEkvhkooCZir41aoUwaPrCW4p8L5x2TQaVCgSixo71mKa3MD8REx6ob2zp4Z7",
  "key4": "21D7skXGxhL2VQjJPnkf38RSsv5ejU21EfjVSmgxWooJPVaCHfwWN5fmcnXLZ6r3etBEKocAtbi9oraJiELWMuaC",
  "key5": "3thWspMbAVxpiK4pya7XtUkU9fb46VJk1DBTXGUtuzsDqDenE95U3kATeqmX6mNcYuHa97WYpzc1DHKproV8RwFx",
  "key6": "zm9MVLB6GhWAzWprCzXjeqxs93T8RAb66UWKjEkCnDHfwvYq7GHCvNBkNnzNb9Y9ouqsnyTCa5kXg1oWu9Ht27n",
  "key7": "5XeAZg7vWw6QXbTY7qBvbgvCMtjKE6d5cLvV8Cp5xEcEvzHiHa49sZsf1m3yfHVVD4mNC7Rg2t34cgwWTn6GSLZS",
  "key8": "3WeARtnRpejAMW65Te5Whpt8hrmWAwe8m6zp6VCmPjAejB6GU5W6LTofMogdAfh8P8QVzniQvHiUKUFszDeLNJFe",
  "key9": "5qAo4zER1Vn325WtPt7XaP4RqVVJFFSdNWphmGZiR2Hd6Zj3WReqV8giSd9fi58FpyHuGQEZGiE4Kq3sqqXAKppk",
  "key10": "U4eaoB8jRS6CUoeC4DqZs5AXG55LuWNSsx9TW8zEdrL9wrafKk6X9NuFgPKeodh6adHvHH9g7QTjpA1sYakwRdU",
  "key11": "4Ydb1W9CesytbsVEpQRpZZna8nR273K7Zsh4MrL59EkFUjFkcDLMfWJwhFurunuHjSab4udsFfpGuJc8xxNEt4Nm",
  "key12": "59tXadkLZaFEjG35TZXbPxFxan8Mkpq7LvofzMrZdoLnbm6DdHcZ3Betnv8go7ctaEMoeV9q92sai8LVNbA3ieg9",
  "key13": "3Cj8huUR3rMk6GVKAWMxdp5deWHdxtGeEm4iDXUhhNxm1BCZXgKzh1npUeTShxFyFcHt3hRCGFj6tKuRCJqqtL5k",
  "key14": "5fRqDK5m5zWni1cnjrmvde7k3R9AqZfY4sJgjznpLxPCFyLznDrxPqzqic8MbphnE8QthiwyshrLfeUjKJCw78LS",
  "key15": "4NkgHzrGw2WGRzi5Gg2tLo1v7F3rq3eVwyDB9gPRfuTstyuLW3xPbJ9D33gz9VRHmfLCySmE3bjqetQ1sUVYv7pa",
  "key16": "Gxo38LTM3sPXoxuXGvAwUPzhLo1PMniYPNV9pDFs2CjX65BNjz7ZnUPegjjAWFx6kDTjkS8YqJuTdxCC3Trb41n",
  "key17": "38AycdLCu8qQWZrUNZbdzvDjJxPB152kGeimj9gDTg9f5AVzhFvJRDC5cSHRg5d5MCBcxvFuHzLuqx5jKE6Xompk",
  "key18": "63UXT2wV5MuoT1LezzijUU8XZrCpTp9jMS8ebXVB3hjXqRoodLDKrXTrkCHvB5qaqpK8utnXfGE6V2iKdGjmjMZZ",
  "key19": "BVFWhAdGbfHrPsWfQDDDAMXfUWnHKLMxovCvyjZDMvHkZUTBncchGUAZwgwVpZa6CqZspEAGTq2sJhLfkNzHT8e",
  "key20": "24isqggwKhuMWWn8pLC56MjuPtqssSWM1SCJS8Fq6Ls4mEzMAxLjCQ9C3k2VaR5jamP8Av59J2R9Ae4kvRpLXXJS",
  "key21": "3TuAKN3SrAg7rBztydiVoPAsX4Cj4ND8YQCkqtjoyxyPNuTfkS8q4SBDhEnabQ7LYiLw6ToWjXtWxuDr9LdnbEzc",
  "key22": "4Gvm4Bbsa8TKE2xv7yFZhCMQYJbNRFJSQw47roNouVcxMm8xdU58faNcw28h9RJge91CwNAySPYrLxJLtwsTYHPe",
  "key23": "2X85oDQjVGFPUY1T4kT1BZbm1D9P2SX3vNqxN9G7yF3vWNqeMGMZXt66hF3bxgLogU4ubX71VwUFyrFGngxUbBbe",
  "key24": "5RLX1P9BrfnpbEWRnueyGSEeBq6pyqhimjj4cqqbWHuMu7F3KtTyYeuPBQ13eSkem2jfsVbMCLEGF4KNekG9fpA4",
  "key25": "2RbenTanchqxb1eBxSdhAwAbjMDXZtMc2G7GLxJLJKLaoVNrkQkECjLTLhjUrnLS3YbGWkVk9TN2PU7i4cqK5jWS",
  "key26": "47bQQAxVsoiAn34RfDD1aVFdYsUPGNyQxyGd127P9uqBQTsixTeGx74ohkMaqFuMHMQJ6F8dFsCaUb11iv3Vuwva",
  "key27": "5UVB9A7PEvz7JYYKfWTbNKq8UsnHsEvjtGKcxs2vtTAKAqNuxTmr3aEeMbY9K42SrS3HJ5MWLuh19X8o1RCEph3L"
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
