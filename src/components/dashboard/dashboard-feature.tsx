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
    "3t1i7BHMqDh9girVsoPZwsEqbh32YmeKyXCyYRQDrT1gCMtgA7aDXvSspaZvPXXC189BPjh3KuBUydAM7ND6kB4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "628K86MbdgSfFKwxJRHMgAGFJt2g9yMcA9xxo5V3uJLxznfPFo2BzCSg8xaqXA8uPoSDfnnFdwAtCU6LztrRuUHJ",
  "key1": "27DhwWewfmYvBFn191H9jvoYkYrgp3ah1oUNFdp7SyTx6ktpGpg1cgKhZUHunynE2B8RRrcDNaUJL2aZbwSw4yvh",
  "key2": "4b99fnpyVSnkYQvdHmadq1qpdDTXo1SDWE45VVAC59a8DBCgXR46aEDs8BB8Mb3oWiFdzuNSBZk4dovW9m9XBJH6",
  "key3": "oRQDxRM6uy6eH8zUfGjDXnjiLeyhjT8TJmT4nhSgQAoQv9m2CcVdfXevh8fHKAFkyenQsrrByDQ658xSPnsss3t",
  "key4": "61hPB4eg1zPhwjj6jDyUwLgBfXzuJFFqFFzWRUStMu1o3ZdDLkntTJznCU9Yuo4yMxtDFir39a3GEK5jAr48FQMt",
  "key5": "4A58HnnEBTFWBNZJePM6YBZ5ERzJknfGQG1DXNm7krQPgH5jhdzaafrAzwDeeh3vMcRnhcQ18R747in73EsLh9db",
  "key6": "jAccYxd6F376vk39SesQEq5vL421F1V1vJwSoyY6VARsttovUQ5sdZ8UwCx7hv4LmGwdUNgcHioe9XDt4SWBa8A",
  "key7": "2W6962D4oRwQ4FbqEYqB18qu6JeQDRJgtszS3rUiW4H6VPenneUS7qFWdUMiNjtY65Gp6KEGxn28YoTEkEC8jzEH",
  "key8": "51khuiPBss8ha3P1J6Q35otqsWyYQKzhkoL8a7CGf1HE6F9uaEXZwie4GSWF8vc6yAfy9BwciUa54REk2xTvWi7G",
  "key9": "47kPGkweJQDMeTJvhqeUjLU13jbG7LE3nWPiHzpWogUGcy4roVbhPsiNESYmLCVoUVnPZ1kQKjYpJSEv4MbP7H98",
  "key10": "5QdXMvWo21u6D2pLLUmJjcnsupHDiMgMNsjcMo2MwhqCQemVCFT5d8Uig8r9tt1psXvfhfLZ2Md2K1rFmfdjiYRK",
  "key11": "42kY1zCLzckj5hmZRmffLygFAJuzUzWHYyRaunhNy1gJQQmquCP9kALisyoHQc2wV2qq6kz9VZrzF3SLh742gvfD",
  "key12": "5XN4ipNYm7mdXfnNcG1BdonhLESKrRTnTm6KmCUSmARRjCoVnk7Q2qCcZxBcyp1m8qyiXsZVTJaTGzSqfHLbVmbF",
  "key13": "ZqJfsFnQC9bCCrg72Tshr97xsbcFXg1gDBwJYzk9SUnWqSmBzMiw4sjPDgU23HHJ7mhop8xp7JaozDBBm1eJquS",
  "key14": "KU2YB8BUfzkY4cHcrEGmMVWbzAuow1ZYBUYh8TMFfdTfnpMXpePGbG6mpc6moPCtMsAhNBvGoj1R6SkR6XYvAQ3",
  "key15": "4MuJKWpdghUVLxcPzgvLWtBmWEyadKHLY6td4obgE6ESuQA3sZH6duQjGLcmhuS4LUDJmBzhQrG9K9msUVMxaWqD",
  "key16": "21cQCKumvaWK2wDd9LxzhbnKfdRQuikkqbpaBQMvvgvuKKUDodMqvsVQ1JzxYBEEmFy4PeSVDMKSRNL8pThWsi3N",
  "key17": "4ApL8G57MgzPQtyQFCzqGEXnXh6UiHHXydTqCLMMEQucjxxkgB9TU86ozNGEeyK91aiXgth47vFseAu7y8Fj4zFE",
  "key18": "4ehxBGxDZSCjpyjpngiFu4CozPKcgSz1QkEK1QiuZs2bA44vFzQzMGV9ndX4EEyWD8sexDZSoEHPdPvA9W4zxXvg",
  "key19": "2VVs47iKaEjCUhAvBmRon6uwon6SxUvcm5pAR3MJLvrH53xDHGgHv316EL4qxkUxf8NTGnUGWZZdSQsPJtUv3g28",
  "key20": "RYQKfF9P1RcJ87qtwLPHh8nmBixnH5wetX3G3T76c6vynTSdjptqrUMXzt5WkHoVy8rT8ftDNEZTDZGcGGHkLpU",
  "key21": "3911uHNH7NN9ossggspXyo4VptLiqmFJoLter28pJnPrXzMcdjuxx8AJi1Mv539S83PzqSNZdNAR6JSpCD3drwUC",
  "key22": "5KZZMMKaAWFc6XZEUJdfTsJxYofiAGusAn5Nzsrn8Wa3WbL7Ri1PXoMZEZMgK1q1h2hki25o1iFgVgKGJWPAFjsJ",
  "key23": "2jpNyYh6JxemfaESa3YfzBWW5k4ZuoyiUCwcnkfiS5FrGQY3RyY8ZB5HvbcMUvb9txRNCcgnSG8SF3dPSWm7BxPT",
  "key24": "3UXwqrw2E1nVUf7YxnQRY4Ga8Az2sJjKP9BoZx4GnthounWAoiyYoqphemFczuf6dyjKtZxuW26BEJGYK7GGuPDd"
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
