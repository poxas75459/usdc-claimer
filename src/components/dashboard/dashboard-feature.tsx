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
    "5Psk8LuCm7Lcgxva2wwSTEbbuuCkGL2KDAjUCyzWyFg2invoABoBcGYrxg6rWcVUZevEtQwnc9rRBjvdt5Mk7bCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WL1eMGabNcubR2CaD7PNcP6U4nd3FCCeNqVkGJspY5ca7LkRDhEQ6KLGUSubnjizWenWm7RbUgna6RGGpfQSv8N",
  "key1": "3rzFeCWJDnS2ZAfeWLeQLAnJno2napzhYwj8S7CXEfXKqa62xf7eTrZDGvNqfTo7DGy8d1LKuFycgkR85KXw3THr",
  "key2": "4C9hpdvYS8ZXbFVtbCFrmX1u2NMDRofiPYv2LS1uaJABs9TDpwKdPsUcxu5Bw9hL5unpH4BRfMhekN5W9yTSUWkk",
  "key3": "49XyeZpSQt9p86E2c29zRD3V1N9xjfZj9mspFUtmhM4H492srNjZUHUmWxuBDekPAsjW2ncHmDoMReLtDmeADYbZ",
  "key4": "46WBcVYo4xf7DUqHzfACKtaeAaePhVqoA8xLLWbRuETmQkzx2LGt3CPWkumGrygQorgbRWhEjxiBTFoEkum6epyL",
  "key5": "vkerHxMAnwo2NxggLXyVt41b4dUtakKvDLaHnqWMhAEsQiM5YnXJHyftckv2f7JcmGDCm6V89H9HtqhN4jguMvJ",
  "key6": "N5iYvBcUSfZbCfaSLJmM3ibwhVK38Dv71E8T1DKJngijzvCA1mmRheFYuzabdD51714qPK1epWVEXVZGpdFcf7b",
  "key7": "3LacPnxnXbTzdav1jmp8gRPeScbVTez4wvkKYfeDM8sF82gf4zLyVNRQnmpCuotQ29s2dvGdx2vC1KUp5qcbHv6r",
  "key8": "5f4p89r58TjLdPkSue1Vy5ZrmzLnn2Ypsc2pUY6s1Mg9FXXcJhFXtBF4VKPNd7fr9ZL6mG3yvcLCdXpBmbcz4Ykt",
  "key9": "3MWBH7QUVPivQBCgG8SsxHhysGwc4Hh8ehdbHyYw2GEg327aU72b7WmkfE1sNDQNERumpv1jm1ePFHfNQS67Wrqv",
  "key10": "3wcbAYuYGSs7aM3gVrnn5mDkcvVCn9dHUpbuDKnD5qkNjiWUnZweY2NFQSymWvwbNQBwKKctpwefSPj3ojfi6WzN",
  "key11": "zo643W3MrDnT9RLaoVoKkXeSLjCXQfi4ri9668NYTQM52hjxxBEUw9UEZvvJzmxqmmHhfvSMtLE5ZGPC8G8TcTT",
  "key12": "4rSRtedKJm5ov24XzCPk3mBStrE57T86M7H9BHtmgSVrkihhS4F18boZB9ohb1ZYW5LWPAxJfabW8UfJgoLcBLDW",
  "key13": "vQoaR53L9KCD7fMEfZHc2WUfdFQUZa6CsYYjCgvHyJqZpgGHfZTNnn9rjJ5Z55syKsWH9r4cAw7bTHczg82H2gA",
  "key14": "4bNXYaskxqdBiLDad8vwam1DzuC3Hz4nWhEaM9TJdKdrNtAAMn7sPMMBQk1aMwxtrJ7CZiUDXrcJSY3KTA8skgZX",
  "key15": "4iWpmczv8DkSwavPXTJictbo6NuwNLJ1uvjn8BSpL9jWhQa9dQfdAhmuLWaLtZFfGBC734AECa96DWJwcSvc9ZBn",
  "key16": "ehczt5GtG23V7GjJGeGkF1JSmPLLhTsWGubYUpdR2N4YvsD38QPcP6BvfPAap1rKWpoP11tDejbM9AEctVAraWH",
  "key17": "66dFmamh94dtfHoXUegDJKpvif1ugvDsZbkLVeUaT6JQdhX4S4cCSsTLXwq74R68yamsRF7uRg98hrXrG4xPa2sm",
  "key18": "5xGjVpU59SGMQBN6PuuYamxPRbJXev3Ftakbn4rvNAmn31UAnuYvmtGgrbaVwT8cNdW2YdeJ3HNaJVSm7CcSnVpA",
  "key19": "3TJtb9NfK54GhzxTvTCgAYobX6gHwsDkmsKnGdYrBbgEPfTczxD6wMBFPyDzSGoFpZXthsrZWWdufLSSPwSmPFGC",
  "key20": "5sNJXnXESF93DDxq6euAXM4Wwc9Q5vigSQFxcriJFo4ur6GaE2UNXDFzoFHKU5BuZjQPVwm7NqkdWth4ppsafqKc",
  "key21": "3gr4RdwCjCDeJrK1ftv4hYwEUnYSzKHMzyVHPbpfwtSw3MzJTSDHc3MJeAVxFNEwLqLNVzChM2jsUV6YNTiUiRRf",
  "key22": "242fp6N5PvsewWj4gFVSG6Cn5hLW3CystddgWDzyRcFMJ4ccktF9EBDYPgWfPh6UadCtLYBKXXCYZpP4dwegHg9a",
  "key23": "2hzJyrvy1P5k25K5yfG4XUrYbUcYDxdDFkd2mTjqUK5bfG5aRqvxZVQmicEnQ46NGDsa19yPaxwUSBkHBXpa9RWF",
  "key24": "39yse6z6Bs21zVrw1QtNzDoMc4vgwPiPZPHRUqBxjrctDEFzNFnEt1MsJEy3D9eoaza5wX8tWGkWRj8HBdQi4ssj",
  "key25": "2E5s8dSBrJCNWWxvQBVyg2WTyYsPzieCiPTFvHJqnrLSDvUojap4mjUDZzWXxWekqaM2CmmtjW6xTkcHDRvSdMcu",
  "key26": "4zXQCZTr5wwxjBLKhmAq4riSq412xsLiKFYErqGazMVjRmdAoQ63vZCxUUtf8F8936NEzrLFfCoA7dEp2bLy8WAU",
  "key27": "2fkf4zZVZEZAFAYQprUY3ipkzYRwqPdgW7FVbTcDdVgYxp9DTkqeMxyTJx6p5kCX3ErWv3YcTrdakHwWUrsq4Qcq",
  "key28": "5WHY6wpn2mtCgCETAS9NG6wepRJL9vQjNyP5VyWQaP9isbTrbDiUpkYCQyLz9xBiJhdAfH9y2prU4r4vEZzDnjTd",
  "key29": "2wE1Q7yVGqre6mJLJBkyf7u9Ab6oTCNxRJZ6xunnnduXkLLmr4WWZyXpWXtt4JJ3LdEhM4TANjS1zpPsi7UJfCYW",
  "key30": "XYQJQsoXYmHFi9C5cQSraDzqKLbRu2f1F8i5GzunjUrDRcynvzaAq8qqe18NdxaUBywofa5Zm21NFLoy3ip2zXD",
  "key31": "2DiVKVShpmhqwdNq7JWrW8R1NkdhSgU8m1ZKm56j1qVSnfYaemeM82Dki8gawoBYSmvaRKDL6oBLt4ggSj5B8hCG",
  "key32": "g1y551CEcgvYeoU9w33fqyDv9dasTCGuQvYNAtHCkZsqBMnHLSvbvYhmMgMDBv69hvRLSNfxid8ANFgtFZKiJsv",
  "key33": "3WVP5PDaReSDf6KiWXhH1j2LQ3yqsdqYL2cFHqwXHMw8UbTRmBia1sA9TPhu2AYfvDbCjsc43wCFMVYUjkn2rYcs",
  "key34": "5CBJdEdDXLT5WrgBWuqrf4hce7JJMuQAhxAg3Gw63sS1BuE3psUHBtUeKMcQfCh8UNddrA4n8A6Jx4ZB8nTDjdsS",
  "key35": "2uFkE2d3PryWnrREo6reJYmaqnoMHVAELJAhoCQ73TMwdTz4UtUAbkQxHGHkakMSQDJuh7PrSpEo8XKByVYNP28p"
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
