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
    "3W4MJZRS4WgRGWeQtHdgudrZ57pYoZoQsTVLKAyWDYAdrFfFrMeLw4R4Y3JihUuTLUXuAsALQEMNx7k7kxMgXxg4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o6zVe3qfF5V1p83psgJXjABkmeB7CAyRG1XbCruLsuApUjDMLydzKXgvdW6KXXuVyYrFVqqW2FpZWJbUXPscjua",
  "key1": "52sPkz47tmHZNcciYvoDisVmNMN6GkHWvEtkFqJw4eXsdG9QRGA2B9zEB8rXd4jvNzZcYPsqduiRuEor5WQcDC8Q",
  "key2": "63AMuLz5DcmZEFmRfNBe9x1n9CfNLMxJj9q4XNKtxkNxcxQzN2ujL8LcGHZPEHDRXmfdkjpK5PiwTJEpSndqQ5ct",
  "key3": "2sqt9F39FdFwUPC6XeYdHCLy26U84pt1bhXFqZkNsHipkutMLwxAUQ3xjBwyz8emANEzVLm6ZVjrpovdHjhhyZJ8",
  "key4": "MeqybTy3BT7u4WLDk48DNSKTVY6DZBuSwRJMyhug97g8TdNpEZF1HnMCK92bYKSp4btGrq4gCeYotTUVcaCJgmC",
  "key5": "5LdsBq6Yr2qeo5qPmQ99qPn1gR2oFkK2ZEp6XVek5rkydu5J7vZTFcmoXAhn2DVEPuQSg9sMeLidfGg9F8VeGYy",
  "key6": "3xFMu1kQUmcPfG1kNAyYmeZDTaFVGr8xLE85QPBvKWNfGXk2kTbFvVHetKDG8f9ii5NMxcgHsBpDA48VHC3Yzzi6",
  "key7": "4SDKToGoS4pDrW1Wp5jzEh1TAxU3NeW768M2GodwCpNpkEMktGNCmhkA3AEoZpnvZT64r1hA4q9eUbGCK367dk8g",
  "key8": "2rhZCdEysdBCPa56JHVVpbVx45G8uPFe2hZbHCKDck1yYs5niVLXVmD5oh6QkH1aUhaN2SwQiuogjsahkd69V4nj",
  "key9": "ofQUpEwy4jebDQHDawpNZLJAgVpJoEJ6F7nQDtSRBSxVEsyftKfrbEiMyKiWPmPhnLecUDFhLaTkFnGAShM6ssf",
  "key10": "4cXvAWgau3LhtFQTjMZPHL3AKzv4DJJF3jV3aasFrkyFWeeZvEswbBR45rxAL1UjT4pdzDvhYVBzKVif8yaFW7EE",
  "key11": "5wqV8YpXVUPq9ephcPFBYW5r3rfBnXgxhvjr4YsWFsgb3vwUpkPr3JUyMcD61NyAKjkVLvfTTvjRoQfRL9cR9wxE",
  "key12": "2yL2hJsJ8TfkPYZFJ9xGMu7JFBsCBPG3K4cDGksfdq9ii5W1dhEbcUaqiaKPcPK5B9j97SVizYdmVibnQkRQ4DFa",
  "key13": "7Gyv4xSPwMFyo9KfFSnCKT7yPvPiUSf5cj49PG7R3GuGf6BXxiU7hKVLakmq4wM3WoLy1hKa7qXMYG3bjB7gtRH",
  "key14": "4ZskCQg8ay7HMyYFqYKGeSEWBCTBiGhTso839e2Yd3VaLCUf181r976YxiNW9q7Xp6oZw1KDsWoQcT8QvxNdnJZy",
  "key15": "2UzuKxxR8o1VkCiWkD4Q5V6R1gti2HBiiXcz9S5DwatAXcp5KaftpBYjFRvZF6HsYuSgBmPVJqbvtSNLA5CmdnEe",
  "key16": "2fW4jDeJkPrchAH9DKX6mW1FDdPmpCBmo2HDdkMj4WvnGKiPXLoezJ6zEkg6ukAaxd4M3M17DH4P8L9yMD1hafgo",
  "key17": "XVy5sEzAiofehDwvkVxVcmgivfNmKi9hFAop8HWPvs7Hw2gBNLXSyxZ6qT4QwrMsdrRo3SWSVzMbvCzgeXMzYr1",
  "key18": "5bMb7dBtkPAYAWN8P2kX9SA19SjezntpTzbzRJs43sxQ9zmdgRrDasd1is9D9UVjetvb2rYSen8zcB3v1zxvbacH",
  "key19": "4D82kKqujdAQQWoE1Q7BQP4zyJZae1pXC1BXfFdH18xYWCYGk9XZ9SFxMQTJ5UXftKoSWEE1hw92mmTwMZyrYttb",
  "key20": "2cVrrwoCTYydkGSTTDwxc929Q1AXqqtN6tg45wppexccBXvrvb7uKAaUU4BesF4ayWRk7MeMjCkiFix5R58qN9fG",
  "key21": "3jwnnkMZgryyc3ownvX9vdJJ9Gxef44bmzPtVLHHKJmDEZfQ54EsUUZY9xnd1b22accTEMh3cDo6HLtTNTegtF9t",
  "key22": "4Aajybds2cnc8wHpWii17gJeT5k7YyUqjC9yBVWZoPYntSxoePyyqvrFxb2LhG2B3hYxM6c9Hv5Lw5cNnhzn85iL",
  "key23": "5VXL7DKGNpTk8nJnYUrfBHm2imov8TLqBcvA85pgJ9ds6h5HdG6vdMvJW3Bq5tHZr3VBsfUNTmtBFypaiAd72GhZ",
  "key24": "4RRZ5waC6GSJsnze326hmx8RS5dTHxMjcJobwsYgckWjorztxo5WnVP1Uu9PN9hZHC4Z5RqQarseJVz12yjJzKMG",
  "key25": "4r1JKDm9RxEKgPKrNk5a1mRfmYsc8QYk8dZAWuvXLhU8CSqWKbwvrPF5eQeZtMdsXjdCXuknMxGH3kjoZiJNpdeS",
  "key26": "5WvSuaKHmPo5GdUVzWaBiANyEd8BozkWSa9TPiJKqpmic6MAyNsxCYeQr7FM5phPj8vW6i8DouVcxmC86iXeMsx"
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
