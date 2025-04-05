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
    "5jwwrBwBtuT1wwCvssy7ofnTqxoktVyHpUvz95e4na4mX3oScm7aH1HbioiKS5uqnDpeHbgd4SW1X5jDYwrPoXGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67c2GJ7T2kLStCwC2AP3VdJQxgKkkiQe2XzxLkW1bZUTBVNjegxUZ1yCRg1KpUEbUcocqxVdx2ahdwhyXRA2JDZy",
  "key1": "3kxSp7wSxbbuf4wBjeZpidwDAmZ83VM5zXYMp1vg795YBF14LcMbbN5finqiGqfyTyjXhcXBgFBGUsnW3uHs9iUJ",
  "key2": "49k9djpoTbG3X7mWqQWmASHg3SZpeNGz9fxyPJGyAMVSMQdbjNDUZBDXiMhknUWoDZnFwZW5hzn8SpB2uphU7FBW",
  "key3": "4JgsiyRN1fHwV77C8W2BCpdwvqUEp75zAGnNhHA2aqWnasNHXBxP9Vszs9nxayYoUu9bg1TvSH7M6qVVG1FraMY1",
  "key4": "5gc6CAv6cph2kJ2cGnYqXrP7ec49nNuaqKm7NBhYrWtgd3E827GDt2FmDchLzeyDKRCe58G38Z6HvE1bEuHqX7FC",
  "key5": "399D7JY4WfGY6F94pwQ8Hpawg5si72hEmWc9Kfnh7LJ7CusY4suyn9mPSgxMii1jcmnN9bbfohRJ3P8LT3z25Crd",
  "key6": "5YXwYi87tKwfDbahGX4bfdkqozxibXsgFnEUsZyWfkTEwd9fpL8fMZLrmunP6Nv7khyu6judAEdVL2CH7GNEoZzE",
  "key7": "3vFEGW9gtJA6Lzs5zGQaY9gG3QcFczWEWkGwqPvs3QFWB1sJCbD7QAMUGZ2CSb83TNh7P5TkKmimbGQeK5f8YLBU",
  "key8": "iBG8kQSMwBep97wBY2FCMwXSLTPkPCTJLdj6ehqXdB79NTSnPrNQgxfGoZdMWe5ctPJaWhZcWC9b45HKekRNJ7m",
  "key9": "65WeAPEzUhRv8jajfF7hVdFaDTjJST5vTmbxZf14rJrBeLydZbDFkdQd8W7hZXVbBGJXmWdmPjVw3mMZpFhXLqZa",
  "key10": "4hdv2HBCSArLVjXoxZRxTE7HVn6rNWvvBQvsnFG8DiBamfQtFqJKRLNfCe5cs38XVPrqPZvuEHocuLDDfA6XNvL1",
  "key11": "3CM2LaU8M5siPCgTThGsyb97PtHDgDg6ntmqc9rUCStZXqraBnbNBAbw7uNVwLKTU8KhHRPpUNV4eGRK5CsoTfTD",
  "key12": "4Rr6tUVBk2xuqC8m2R3gWVKkfSMSTdd2TM7AkjD4hDyUPQ1hYKAbuo3ckARdVt2e6D4zLw25HDNhnvsvW6Tm4X1",
  "key13": "3hSRP9LQMm5tNFgMW73ysDEPDhg1GfJzWE35KqyQ2gTT96h9rHSw6x7fT9DqsPjUMVA8YF1e7vrYQov3afvNmqJR",
  "key14": "BHWhQoyEErtspTEFfy7ExaHFczJASLCNxZhqiYQCBBmvmtdojsyRZQmQDsaGjMDvigHyiMQfQDiLoAe8XjRNnoq",
  "key15": "5PAe1ZNBPFQL4LcYqUS5vJoDA82nZsjcddR8rb3mKVXW7grakCw4f5yhpXsfJYPtEsgtugeN6BsFE37aUVFm9foX",
  "key16": "4dARKvAxmGS4ZDBZoenDPtFMHTiA6cBF4NaZGpejFD7Lgoj9ksGiK7edDH6ksbxxqrNLQJdSDdmic67KUs2TFuqw",
  "key17": "5Dfed7ZZbiep7L5Dj1czUhdtGGakqu56kn7ygbunxg9TF63Qm8JkgphHhHZnsjThxzKnfEDiSY3XhfUjuwYGaEwk",
  "key18": "H28n9EPbA92EDGZqpuKsv8g7Zsfmd6qbDzQ59rDLz83AdrNvCKWunN6Ae9PpMeco5zUaZARTBPcMFC7HyU4rQFM",
  "key19": "tCXaQg7TQ89bmNvK12xVQ4b8vzT9aJ9jh665jTqj6igeR1H3pCDYJJcNJXVkD12aa1PsVFC9QcJcCyC5fNS9ZW5",
  "key20": "5RzKqkBkTgjjsVXhT5b6Uf2AAGjR2wjeo8PhTKTFjLCxDxNrAhdCsXKxiTvazDT2NPJKU7dVXZ4oazLmtvytwbCM",
  "key21": "245ys6vLb1uK1BjCZLMNd9PzSbu7GnqDqCJ916QWEcfjsmdjagFcv7qp3fHmWgfWwBsnYyJQSvjDf6ZxbvUeRXa1",
  "key22": "2mav2LYFk2wvDHfX69wha2ZCMPc3ks4gDp7sC7ppw9JZf5EqsSgtU2kMYajMSYjsdYuwQc3CmYL59DWGCczCox6p",
  "key23": "2nWGNXAfx3V548VfpG9jF1YCV4faJ28ycZXaWdrgnJjCk9bs6dsvHRpUFNa4t9TeRC7AjJamTyJgUELLWMaX7mF",
  "key24": "4ekETRLwwuZTK69itNbR489LW6XhTj8Cw6GtQAT6hNLYBKgAhP459AcddsQjJVSsQnXKXSnWqXS6N7cjyeuz8zYq",
  "key25": "59k2K8bvNoRGNhL8cGYeJzPmZr3ntanGy2sEvMWMhRY4DfaXYGUq86NhYnbvVBMJuGcqb2B3vMqvjS2XzDPPHVWJ",
  "key26": "3hGge7oXD35DoRBquJtYxMHptbCdE5KX6o5RYVb49TgrigwjvsLGsg7eV92HohkJTRDFb485zQkGBk62JW18VDEb",
  "key27": "sRAM3WbdT1VNFDRp6z5T3sLvwL97W4p4fC2quqaaxzYbFfG8idQ8yAR2Aaw7DybLojmPHgnHhx92x7hrV17poyb",
  "key28": "2qbQ3ifiJY1273wHAqLdTx1DxF7ECQ8i2iTJwCiRGdVGTH1NG1d6S3iMC4kCUVZ3bd9mJGJDQpRZuzpLcbwUwSfP",
  "key29": "nHHkS2t9z1nx8xBRWTyd5QTxNpwKrdcEMR5qdNimnSCuEtSGqXhu8p3sunMccyqwyhkQgus7WF1Z5hStj7vD6im"
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
