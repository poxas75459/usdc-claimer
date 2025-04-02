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
    "3r2aQS8y67KzqNobbpfWcXaH8kGjG4FYyhXiQu6cxrqBjQyPjeh11sjuDgBfMH9LgtZ54WoNbD3MFCsAZ9R1TrP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h6HKm2ygF8rZBx8DUF9jWQKjSwbo5WJ1FsFcvrq1RLNcnFDvjvfdGra5yoQaokdmSUyU68PUMTqBH2HekcY3EaB",
  "key1": "2Cw1Xq2btRiN1aGW6vYckTKsn3yX6wjeF2zaT9DNkq7CtTFQKAFHrhx62ZgGKuBV42Hhz338h8wHSRh2RrLMZd2W",
  "key2": "3sxb5MjKo17YGb5Qf1SWNkp2i8aMEK5LTsTeT5LNZkPyCjAtMhLSdoHQ9XprqQYmy1nLvf63YADb6SAYfvq4JZwp",
  "key3": "571ZcFNPhXheKifyvgEVHsTw9z4LNCLVp112eErhHyfdLyneitS6U5Rb6m4zmRmVAi1LZa9LQ3tcP3WkLMzWQiqQ",
  "key4": "4TrRa7iLiWEtdbAzvYpwBcmF4dNjCUjvVg8xXPYDMhsHxXNRuE3YQ3HhiFid6UBpeYyh4t8bgTyEm2pGwJGqn5DN",
  "key5": "2vicfHvD8ZC8U4fQb71absXXjeLJ3Qj7suyD154ad19ncrENHPj38FdwkXkzceKVDqF9J8kw6UY6QxCRGmzXirJu",
  "key6": "47EpxErti1gfuwXKsy97GxCM1L4abYCbYeG9vR3zXVz6SmdeyD6m4unpx5SPhqquRAHCx4rHaR2oBZVEXJYpXdBj",
  "key7": "33M8oCvxPcuwNwMyAeN7E5uyem82WHeYGZnTy282oArCUAiWHULvuoTvbAwrsUiv9WXKas6J78czoTzF684dsGcb",
  "key8": "3TPtgh9pPoJbJhcNHipLzQNPhKPM4NRfKWeCdD4Bigu6KA5STTj4AM9NShPrJCoX3QDWRtArdRCB6FK5HtH2Bijh",
  "key9": "3mjpMZv9aVqFDqJfbv6QmsWWTobnoGRM6ao1YaypWVvbfuEgpwUPEKAtXAAnK1JM176GhEUkb7g72rn9YpgQrrfQ",
  "key10": "2gZZGPQcpC5eCrzQasEtbRMs2WyTj8we4VstJerkwF1yRtNwwyLqLHbL6Y9Bueh8jP1zMnY5UzCYivJ7yEcpwg7S",
  "key11": "jEmVVepUCrSVHAHDGAdaoiasJSHdG4GnUhYi81yvyzx8QoQ5pdopq49eJvBYViatyEXSwicSyZy7MeGEL1tcMBf",
  "key12": "59sqcu4YzGjy27xARceUFtyfC9nYAWUZLhbeU6nVNpyTbM9itWLHd3EVNje6pxhGbKLUFqZEDAo9sirKhDFWVT11",
  "key13": "44gdneMRZMUmDWgcEG44a7CWNJX4sUzpqr95RBXzKgDa7Ey2y51Lq16zQpW6ewCVKW8QV61oYXaAbaQFPTCpokrd",
  "key14": "5oKHA2YoKuNEx9ciAFaFfdZ55U9k4dTh2NZWGMDULB6vJBwGcBv4KCpBSgkG1bsRYdap7Mtjg4vAtGsZ3d35CrsQ",
  "key15": "5zATq1z7WEgLAZnxNbA4AShpQY8zh6kE3YwAkDeTiHwKxJTqT8Dhd4FY83v4S7LBTXMvmq6JCj1SDeNzwozzPfHH",
  "key16": "5AKSNNUDsdsbXKp9wWEGxrwCfEZWcpDEFpRfF3TdFaGsFBgTijJXm4j5q3kX9U1aN7923vq8WNMWQujY9VZPxYmY",
  "key17": "2Y96BFQL889Cy5Ue6K1FxLaeLr9kvARpfxEG4fGgcSbwgh9gig5eH15W85MeombzbqpG8HeW1M1ysPY3KFThqKQR",
  "key18": "5eky9j9E3KfUMsVUTJQtRACtWriWuAGrZYEtAaFVcbcXaHS2uhH2kskFonPiEmgE1EPtr7Gnaycb9YwML6zd3DyX",
  "key19": "KemT8PtyaPXx94KGVcoZScr8iQxVdT9U3xf6YfN6J6cRMx3x8B4UfUYtyoiXJErxuGpiZuqDc1WaAE7S4T6CUni",
  "key20": "eDeerdkRs3BnGUbonM8bQwEB2mW6HbZAJ1ntz611w4hVqiYNRwUrmqVeC2zy6uLydgPbzvtm2HsgHE3YsyoHJLE",
  "key21": "3ZEvmWCqZJZotwHoCdUJhbP3ieSzsQieCYxu3VvZ6LACwyMpnCPBvzbM2T6CGRFhZ6DoZxNA5vWjP7Kn9Sz5naK6",
  "key22": "4LDJgaeHHQGzdWSd1EmFWqXciGgZ1zNxLSqYEPxgNYNTLRubJU1Bhkza6U94FViWc56YhsXrph8RKr4M2GwkgBhN",
  "key23": "3rpvUsGr8crgD5mxvAD53uXt36ztLJDbjAyFNmF6eLSyYWQqs6kbdo7h5VBso91jfAgh61CEAKuRf283Yz7antmC",
  "key24": "B8AhbEpfxf9752meTMYYVAUyQwCGjoZaQT8LJTxcjxbEsjhbxqLmtFawvNUGHC7Uvb3fZXBkHjZocZVuwQTgWjV",
  "key25": "65vZfo7GmpGgSgazKucNX6SwMoPGsCe6tAKH9HSKkF7nAoCijHbuoGvbKzBG1cW6YfaYMMevJWYaGhnHbdzwH4HH",
  "key26": "4WFeNKhNfugsbGSSdqjBZb2doxucFr6EJi8YPtidt43n9Pj697rayJSajCspticKYJCQGhVnQqMJnJmjZEHPmrFw",
  "key27": "a1UdbmLbkzw6ngJe3g5SQKJawSFHKPXTUc7TstiyPkNYwg7oCXqMRhxYL9PnwCr5C7eVu6z6n8utJKyh3igXE9d",
  "key28": "25Jxa2GiguXPymFpLxtqwhG7wMfH6aLQRiUX8JPZwNzzcQzeXNPsYDuGMKCSAc5XocRbRUVMxUQWJ9X91JHnts6v",
  "key29": "NJewmQXdfH29Z3kTdHZ1GshnB4tbD5pBP5qP8iuJwf1Eo7zWmABgJAj8fphgzx9j3FU311ArHjj2MJbzz1VEEwA",
  "key30": "5oQzhLLsY9jaDppy1arQhiv34A81pJ99mjGuXR7BpfYTquHjw1HYngexernFWeyknp3RMJdRTy3HjiQ8ivLJDXNv",
  "key31": "TJtAgECVpNsCRDjkhj91D1V4TcKWF7K4QNw661fvG2QiGgRByEpHse8cH1Poh5a2hcqLZSLyEHKQfNGvTVY3Lvx",
  "key32": "4ctPqFDeRDF9KwXTH5tkQd3dTj39c6ZKYXTQK24DZkQJgQgaY7Xy5XpDt4bfTrjbRciEcJbjvGfbYEW8XV6pFJ4x",
  "key33": "5FMGhBSwiGc8mw7DCKjYSmEt1UzG6MoVhPJQoeZzbPfsDAPECi55vN7EvdEYissvhGURHkfoq2hHHtrivniZ848b",
  "key34": "4nijnEVA7jyiPTiYwrzoHoWtVwkyeugiT37Jo5EGGsiCNbmMT4wC327pvH5irMHnAnGVeP9Avw2V5FxdZgkXB9UK",
  "key35": "648FUBz9zhsKd86qTJ1qn5iQ6koVTDx5YgayagADwLjHC4NKE2EgFmPJhqiY1WZuB71cw6jnusnxMUDFix6jiqt8",
  "key36": "3nKEFQNgh8Y2r49KComEqU27q6ysCfFVSzCZV3y8tNA9SWXZSQYo9npFvQaJZ954FV2YErFXayHM6tZ8RW7XqjCf",
  "key37": "3WjrpbwAouuX2FEZ5dG6zdPcjGAftU4N4ExQUqrejiRk68dwNfNiEUgKnqFMDheGKtvumkG5WbvJduJ8enspmC2d",
  "key38": "XtQCGzwSwgxsRLvXnL5AGsqxmuEnuFbNCLoJ6V8Ypyv5UTQPQUZBHCemo8vT9tfd7qbmYo8QQcZDUSecsfmqNgB"
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
