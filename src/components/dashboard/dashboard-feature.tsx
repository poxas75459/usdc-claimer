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
    "4Wwz6KQSmJK8fBjnCu4JHPXcN69aJsq4EKqAG14ZZfWVUet2nb2tin3jE2jQm2KuVopaoc5cK325nbJvUX8AsYfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "maqpRF6421542qyHV5S2XS14gKHAU6WXbNjmvYXuvNS6inEULoTdVopZJ43HiihGnurwQqJ91naEPZnp3NLwvMs",
  "key1": "3m9WknvbKsTa2ouizaZNFiasXxrCaGu4p3QYjYW67PNyEuzERN1MJRz5N9KYF9kBS8p8Zj2dGq1YXpEqV7zg3ygD",
  "key2": "4bPYkmvRvziMkBB8pUp2JkxREEMmK5kdrcbPSUBHzP2WuyX2Np8fYe6NwQPbnAxmxjkm97VhQ7qmC1wzttqanjCW",
  "key3": "2ShicYxnXPBmofRpkbjWy5ugmUeTcC4PGDLqnsHSRF2jUGdCz9h1rCiJFDrV2ivWsCZTuKkEL54caNCX3qCzfZzU",
  "key4": "3aoszTTsNhWp9hXitEq8rTVkJwP1HBnenss9923KAP8kSvc7rYfXxFmw5sjtBUowDcUUR7ufBm8KWBqVDSFjQC2K",
  "key5": "p7j6nkQoZ1s2JXwFWoQKVurPps3UcdzP6UXH7ca8oGo6DczByoF9Tz1L3PnbUZm2BUhr59ArXZoWUXRm28YtWHg",
  "key6": "GMSH6xb4rEHkrMByLqkD8r5NcVi69KyF9WrrkKenyADrBGLDj5BmsCapWeDhhRHVNtqrDp5HPCJYjY9hXQHQJFK",
  "key7": "3guNum9TE5svmkhh4PaFXibQHKANFdCESvP1Fcn75ZEUzAbHH58dYNqa2od9ZP2Dt8cb2gPNN6N49nFBwTrodqUA",
  "key8": "2kstr3qw6nHhwfuAjNVYGqKa6dJkU5LpKpwAGFgRnWriN5G629cahocQYihdKtVzJeRDtctRYsh3jeUzJu3wN6oo",
  "key9": "uFgBMzm1t1GUdFMTrEw23eaL1YUFbExC19oectAZZbo3fuEGkgxfccexUK7A4vfB1cNZDyVrFdcLPnNoUKDV2YL",
  "key10": "67efdriy77y6AwRFbnXcMez7JEVFdBNNHuxgwxgM6naAZGwGqaNUmh3dTox8S3tYUYpJ7shDVkU6mNLQyp4FDN4j",
  "key11": "yH8sdaRLDxb55aRUwyGy3hEg2MQ5jPANSyPn68S9TjN7En7wgV4FPFtb3FghEdDwuE94wCoDRxfcQXsgw8Vqt7w",
  "key12": "3Bop8x3weDFWjqbDSsBdxqbLxxYnN5gAHcYY3UD9dosX9Cn4ZshvsQz2BEuU79Kxkvp4Y77tANFfq9MVMmpRQK6E",
  "key13": "LePB7G26kdFqyYdCJPbv2CGy1NMzpGCX1aat4NZpPnZ9LkKvDf3PkgS4a8cv8Ftbh8SRt12habRqD6gEpJVLSA7",
  "key14": "3NZEsYnuXaNge4ZogfUc8FTdXY2vHxRBYzWDVsz6E1MWz9rnZ6JPAZGUnSdm82GsrZeRVfqKgFr2zdeQ1EaSyHUz",
  "key15": "5pG86oxU7Boq5koyJg1VvesqNFgGw72CiECZCxkmX1cb2aJt4LQfs1rgs5SgqYtGDdeBdSgurBcGx3L9XWzFxSnU",
  "key16": "2bXFdFavQo8mnPPVesZAmvRNrAqnxKEEqmqCKu6izdttWF4CZjFfyMovNYqumuDVoAWvhYetehcqrPhvdrvtPRMD",
  "key17": "2QD82DJuPYHvwUYcRvRnBb4W11KrfrmDeG43iAvy5RSXbB9dSHpys3DzXEWS1Qc9uM7FCtDpr39yNGjixGwEqbPD",
  "key18": "5c3te7bgqW6KEybCQhubFv3Ad6xzmaCLMCRMgwcZWnZWzoFcrNK5skaqsZSqDh2uuU1ezNf6nTMfoGJWkQP2RzWj",
  "key19": "54SXdjWURrZsWPXhtr2qxZ8rGhWtZLjQAi1vUCsKjbx9796ySYg6PwWZfNYXrzG8GRmRuEqETQdhBGFthwZoJi2c",
  "key20": "3RYKL9jKUoHth1V3rFNJN5v93H8CbAsghwuXXocL9cyLRgVNTNdcGXZmWt5sof8uLu9qzNBZXAy2FAyqxaB8Z9er",
  "key21": "5kRYHdm71DkHa66FSGKeB4UbBZmvCYrsyGqPSQs1M8ocQNT8HYoEwjV4hv2K7NLKy7a3uUMPLY6ao5UghBMUQqx1",
  "key22": "4vyYez7dtKypBCzETHJ3821GBha85EbqaoWsJ1MEzeFbjjfqtBLLEt1EbKXjKyKoEEaxNLdA4gpBPD4CdVTvceEk",
  "key23": "4HZUNd9nUPAVkbFtsTcJTghnMiicTr8SkgFCefARxj8ZTehXQvFps5Tb8sS2h4WzGzACqjDN25GNiV2KfRCzDgyg",
  "key24": "5PBdsByPj5rbGtJ7FF8mpDQz81gtszd9MVfdKeaBcXH6X4yRZxjttX5z5cirAMgqyv2AsJXz7dzVPj5PXpe6A9j5"
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
