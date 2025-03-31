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
    "2Y8G2yXW1kHpWqPgM7RCeYfZa4aNGmx3aZRn3zwUwZ5srT7D6GsG82B37amEFDpRB5o72dwudHNKEpghKnDDMqxf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hdSR64RS8ve8t5yt7SHMA4SbAHe2AHMNSYi6kkJsQcjkdYMxn8KczgvH3sCzP5n37ynwQhJTDJSSB8sohpePjwf",
  "key1": "4uCNJeSt8u37ecRYuWgrY58tyeYvLmziGECZH4cdwWGpiurJnVV1rR9mB8R7VhFH5Ltm2XHcHYwXuki2c3y3sGBo",
  "key2": "3wzypTCgBNmBSuFwJW4eUDUXsHDrXd4gHjHRwr3j6P2pq8jaxVQWuxjRcCUa3fPr5fAinseAxWpitQNXNC2iY13S",
  "key3": "3MAc7j7yxye7NFMMqrNScX9aNFGFN9EBPTjrcrxoarWDPU6eMoTi1K5fhrshTYu2D61feQ9tUAPTxiW8GeYUS7dr",
  "key4": "4NJYcnoxRK3qRDCYAvthRmXKqmf2ubAGhCtknX6j3c14LbZwDfpDDijYqYdv36Ubb2pvdc9ZDB5E7Eu7mJR5P8VG",
  "key5": "4Q5Dsrk5pxXSAiMB8LbtBcYVSZhrWdkaWMXo2SxXQoF1N81HFXxoeiLejtXNouq3JHkptiGYzw4QcSnGVvEjszA5",
  "key6": "t94dMDF7RtikQ1PTSQkkw6654L4joHBzL5MWDEZCy94UnXLmsX9ufHTqUKVpLogmjTFSypHAB9xDfSoLcRMwM5M",
  "key7": "4DorF7KJhrMUsCzSyJK8iDyKgk3M3mT7thTnNsFx89vjC2C5DErV5qnMVfZhRRmD1TTASy2Zagauro8fqffhMZjk",
  "key8": "4iN8pv21oxmtLgnGuLEqfNs5i9ss4FMexHC4tmvGsnSaUQbfbeVphNWVBWnUWg5Z3uKHFfTvYefS7j7AqA4enLYG",
  "key9": "2FYh72wwTZ7sXsNvYMWkCMmRKoazaFnnFbHHyp7kxL2WMGuktrUwndCs6o5BdbwNetPPe3AywypzogZcg8v5ZcFx",
  "key10": "3F5EzG8Ys6N6XBvfwCfKSVvZ9i4BTeePuUTktyeGUvvLddrtpD3gDMingV9sEcyU51RJ6XappMD56bfGK5knnZwG",
  "key11": "45u79495zZ6Sww6UupVcdvK5sKfYMisWnkUvJJ1bLS9RNt7mKMt3wHxMkere1RExsdxTp5UiKoTvooD1RQ7mJh2J",
  "key12": "44fHFDXfKXZtfkaiCXviz32K8kRogjB55RuEBaNW8vPzpAgBCjDWQ2SAQE5mGejekgMMzQgwwwp3j5JeMw8MVZxE",
  "key13": "3jLqktH5XWDvGfhA453Dxxv4wvr2f7xDuFYD15ZM6UKAx3ZZmXuN1bCRLymVNh5grZ9fZrfU78fCGsgZQF7EwCco",
  "key14": "5zBjWkfXefFJEytMBMCJK8m8UUkuz9Dwqq3Dhe75NfAwqKQsYUjuVzzu5MTeWmCLjUA5x1qAEE1vTLp4Dawu3npj",
  "key15": "3kdu6ejTqTa2XQWP6ATHP9Zh2uJbujn71KcstiM8UZXhow8diLrfj67uypKnxjBW9CGcHFBLptab72xkQBdJnwLx",
  "key16": "3cRANngbCDbcZCHUArc3UmpKmL22civVLA4AKd5afPr75hBuMeZ2aa6BySQgLerDw2H6VnJFNWrW9wt1CwDFUnvo",
  "key17": "K6MHC6VRegTQCPzvMSwsiWJh6MLrnaijtkQTFWpCpy5EpgQGfFsFQbMejgTPaTAXBHJQvczj1qSrmjQKBfGV8yT",
  "key18": "3QEKcMWUyYHck3kZ5YdjFG4dnqVcNEjE2VPbNePAFJSK5bk5hiWwCrFkDxCukiFBVyJKWUCpzWDkiUTN6agZLMwN",
  "key19": "5MZSPKEhpjRcuCAw82ufnwE2AnzYDsoPUR6eyLuSKF9GGs95Uf4uhi9GWs7JRLQgdUx9UWnuNdwbBTGaWip5BB4a",
  "key20": "v5u6bZ8aHV4z2yXM1nJs74Z2Yr3ZHZ5VNGr1Np98DGD9BCgY4tKL2EWxsUHUR7uGdEC9zrPL8yEEFVYwZXUdrM6",
  "key21": "258yj2X97hBsSg7hg8zp3WSAYxPoJWgyRuCeSJ4woXj3oC8AHcnF8emh5RLDGQaZpYGATrL8ig7Xh9M1gdEsXZ6b",
  "key22": "a2Vb28CpUgLRppQ9fBKgyWNBBHtfG7TqgFEpkE4Cwz2huaqPWWUhRVXio4gudkTSopbKv1pDVAisqbcCuxrGvLD",
  "key23": "2S2zWKE8RYkHVwCoWaYYNMfpX2Py3UsdKVjXFDTnucrEfAvZAuUMcazwnUCvdncQxDhXjFmkSC8yAfhtVwrSQz5q",
  "key24": "43BVaXCf4xUJMiPyhLDdMYMUzV7QR2X4L9rGAY7JBNB2SJLJntz8PMncPKRnkVhFv9sJNtQ5vRdtswfnYjxyVDBa"
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
