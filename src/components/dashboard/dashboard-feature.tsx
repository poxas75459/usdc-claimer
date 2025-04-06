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
    "3qGzUaUmkeBKtSjf1wdmFDsCBvx23r2dYEi5K9N1zvWozgZ6ThuJgrXuRvwxZMhnQUejxoYQod7jLiVFK9rg4MDb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QsAWDTj8RG8CTcw3CiwU7MMAHVAxTT79vnwfn2fXm9qt38YkiYaHhegoohgwtKGmbV8ttwDEYiGZQKJ6uQx1Vd9",
  "key1": "34NAqpiE41FtyGUCZKwJav2E7b4YML3eskutFkg6gi4UxcrF2uvgWvb6che2ksuPuf95qENubFhzTFY2y6S2e5US",
  "key2": "25MuCYCNGo6n5fQirWz9uvsPHrhw9pbuFr9SduWuGiyFvfsQtdwbF4U2YrgTsW3DMaF9YGENoGgticXpLosp82Wi",
  "key3": "22YJBGQBUr32GZqKgAnDcZ1uFxPAN9gE3Z4g71mBNRYNgMgWuTd8mhwnSnSZzeuhV1LopAKpPj14UbX4u3Kng3nA",
  "key4": "5kqVcYxoLBjAhu5VyMumBKjA7GbNHgsMjeXRmsvEk7ZnMFt13vB3ZKeN4YK9UB1BU2dc83pr6JjBjydrSaT1fReD",
  "key5": "aAnRp5kNNp8u6VHPzz1qZHjxA15AGEpbXht9nfSaK7ix9camDLsYVDwWM6ieneTEriAmCLkDz8jiaGhReidZbCz",
  "key6": "3Q8TjBijzUJ1m5EVmPsKc9cVuyyhftPNbiThXvJtuaRA237u1yMUy96rqrmL9EURkxQo2Wvb5cj2pbFfNfihncdL",
  "key7": "5uWeinTxEokpJHmKf2NqGHyGRKX6WCrHV5ZPxmWmNwi4kkagZ1krJ2mxa9fiBvm5jyacSrJiGWANx9aDEERtYA2i",
  "key8": "4AswwYBNQbEcU9M4pa2jNZPi1fzVLzZVWSnLJ8a9dJn1RHaZEcqyXHNGf4v6RgKiUwqfQcw25xug3WBLGpHoJAjw",
  "key9": "4frCvXNxzNCusm4YyAVHnkqNn6MUYpy5V1DzhLy7uKZJ5QPgYUzYS3H9tjLdNpuwmL6tgMdYQUCHwhRbcurWcKCD",
  "key10": "2Dh1d3tJk3QRtqEbwFR2Yb956KQFDNYQ6xSRDmozrUp7HXHiHYUyay8dfPDZAy69WaW1SvbQEsboF8Luwpmj7g42",
  "key11": "4QU93DfrfkKhVsk7c1W87CpcwNz89TnYRmc5sQcHeJMTh4FQcChncfHt1JuJY2aE1Ks6ER3ZnxwC5tyvui1TNhAG",
  "key12": "2jQuq4d2x5ggr79hh1KhYmCjb4BDmw1Y9tcwL9G18p1W4rmJ7grtLBGYQc2eBafUwM24YJTnjs1rzuemaHAjg2Jc",
  "key13": "34kgqc4t8159r4YEYU3PdEi32kFJhzXdksWHvrtxbCVhghcdn9GNJpP3NRb2TQcUHKHL81CQemR94dB3rEQbiqNq",
  "key14": "KtUTf8z5xoVAjJybvRZ7rsaGbbttG8f1zEAndcJ4uTdWg5Dyaf2TBJnDskC6JGNF89pZA5sfU5QC9WuTsLqyobe",
  "key15": "2ohYSfVj9zhP2VownPSc91zARot2HWmuP3t1V2PmEntci9Niyzi2fskrdFJPSzBq28Z94FEERjT9Savz7qXhiy7H",
  "key16": "46dSqt24FdM886WojZotUKGc3x6GnJLyZA28NtJj4fKSLJSjQHguNW6HxwTuux8DxZ9vfkPKpV6TgdS1P29b4KJo",
  "key17": "3XR5JLFRRiy12qtc4eQGkJMmTY3B4gmwokcYbj4qrU8GN5t3rb3zKjwZhQ8DtCAS21fidTEvLsuRNHZQx5mfNVbu",
  "key18": "37tnAnRWkWXuEUX17upujtXZTVyN1ThyehfSX68sy1Nmc7v94PVpXm3q9UMyE1SifYL6YQC74b4qAi1mnbuZVCMf",
  "key19": "5kMDtZjGnDW1Tewe57h8ubeNt3ddVEBwmNLQK66uvcv8H9fiGLkScGA48tbktm5xesLtfRdPtJJCt6jdogSTcBG9",
  "key20": "3YEtsNqLd8FJ26QJUXHYi5TDECBqZFqSb14uRDQFjR6eg3MDeJrKxC7ki7kimKKXJHHGHSf6qFgQB3FVHiRDoELF",
  "key21": "2ZZ9a2xMDh5kLrmB9jZxDLvX1sBov7E1sDMxWvCPSoqwQor3ZiV8gR7B86XZN4eN4yKaCR5FVVnEgmNY5KHsuKuW",
  "key22": "5UaYLzWDW7sTawzpbSYqpA8yVfAi6shrGvTbwihMtuuEYH4ryAn53F1xtkdAeSdmarNztrFXZtbr6vaENo6ad6Dq",
  "key23": "3H7du2CxAE1Q98RU7HY1t2DsVjUU5fMwpsiEmJbeig6KyouxLi1HeiPuzdRmSXJqhDmoWGPUrP79NkgdXHRAVS7n",
  "key24": "34gAJjomfYXQAPomD8nJ2KBYW4vQaihjfK29xnbbFzLrwTeMuT47Jjp1zSjcTjNiXYmtXHEATNB1h65eRG6iZBR7",
  "key25": "33u4Kk6Qn5RnfPQrkdJAZc3BNsWfmsGsEafaRt29W9PT8VbWJV2sdkb9a3fQgjBvw6hxSvd9SJkKydrreFKaN3rJ",
  "key26": "4YKuwP6yVox4FXm8Nngt9Bhm3rBDdcvie3mvZXv9ZNTgcQJW7xLZ3H6opD1FUNsvoL1NiK4YegmJGJwj6kxcCNrf",
  "key27": "5vfrknpXc4WaCnaQ7dCXqZThgM33rniyXzxm6sod8qb6p98ur86etq7HRkCDRJJq69u94CWfRLwwZpMpgAYt4vms"
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
