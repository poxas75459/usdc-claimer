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
    "G3o7NBG9WRdK9b18CaUvuYNVJ389gjmGS5UZPV2bvqqxXhacGSzPumytKNAknmCheAwjD9bSHmLBqicXjVcw71o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mDGTiLihfYWGwx9YrseJ6CdPGLAeUwjtnYS3dzLEa4g28brKaVLwpL2voXvGRA35XGWWkFWBpRukH7MofidP27b",
  "key1": "4w3qLDEmvmwtWF4cz2GrmoXy6J1BwKHN6qbE8DDtpKufxfPxW98fF1jC1tQXiv7Maf3YUEfsyorhqDSxZK3we9iQ",
  "key2": "kGjHAAHAnvmqFZ3iqZv4ect9J7ZAE3A49rSb7gTLeAYAsQzZK9QDytFPuaRNpM7qTBPWDauLDyNTjvZccaryxPA",
  "key3": "3VTgC5wMrp5yi5qnjTgtZGyPVE2HhVS47DwovKkLxvNAZVvHGgeoACGbyxM4xXtBRjJ2ZWCk166aS4tSnbTmAVSP",
  "key4": "RZD7uUo74jdUMVvsM5QdtEbMpsjNuVTTv8oz4VaFefAsuD2DpzxmSpY7QPcWU8BnMKYjBUypni4ctpWTk4jY38v",
  "key5": "5sCiHkm97CSxHHetN6iPMsVFgbiEUeRXdtxb3r8MyVd4KohGSrQYkR16VXBPJqpHCsnbQ8fP1LwkGYES4S8zKzG3",
  "key6": "4QJyfr1ZEf2GzA1EoximWrwgDLF9PcVKeokN947HMxSzAfQsqSTaoDZbLQepH2WzrP9tm8tNoBnkfZPDru4Cuvmr",
  "key7": "5vLX66oMXKjubRJgv6D6vknGho3gZkFCADMYuKDkDLzpfU9UHzoayYZg7idxsT6xSTey9iVMyp6DtUe3SEuUkoBs",
  "key8": "63fwk9gXJXvuDzuo5wRhDgUbcZLwpZxEmrCcwRCe5LTVgT4TZ3a1QtdaXPt8L7BgTcD5E5xe9B53LeC7umQKqi84",
  "key9": "vRNCRB8L9JqqJ3V27JPPBhYhxQxasdhATjRxWaRaUcFiqgTZuMkL9dxRExRf2s3JBvVRRSP2cZiansde8UG3pMi",
  "key10": "4rSdgpGGtENvGPgwFaefyfay1FrKTk2KSV8Fd2a4oBGyGHJnrGV5diBXWqc3iTsiKTj9meK3cQqricAqMUjXspqD",
  "key11": "5X7JZ9u2bGDDdJ64YzWyxpcM9H5kwSr9p8mMP6K5L7U3rL8ESj5w28QLsVPdSH4ys46EeHvVdt4CB9SA4FTEnUVR",
  "key12": "124Qt4qS73gsp75YrVDu5VoW5N86AjTQJsyS1EmzMHNku5XKn7fgRf8dW4j64RPLX6h7UHqrkHygHjVr8UdXpC8L",
  "key13": "f6fDvLX7CBeAGwH522Yocmawidp1h7BXUY3jBpt7w4zXd7DY1WfCCYeHoLStv8nmDqzkrukf8hTAoMa8cwMi6dH",
  "key14": "3H3bkJw93fkUMFpCaxyXzoWDyXm9DKZ4SfDUcfk2EBC3CcjrcMtwh8reb5h2Su8tr8NT6yUcgyWMsMtGGzMyCjNV",
  "key15": "2ieMwmsEVsvMhDBFQKoiLJzVsBycYFkUqFx8mtDAne848eZUCmX4zeyS3DVC7SVdGnyLFJ6246d1J3HeV14gnhSq",
  "key16": "33TEJJPqWvDiCne6wgGPDkKgwRrNnmUdiK7gnFD3pwcnmKbAWEvnm52wDDq9TkwV8SbWio82fTJnB5RUw6GQov7d",
  "key17": "58iM2tXuZFoT81NNF9jaHvszNE4StaCFmA6J9vpwqsyRUJGgV7aMsmxTspRi4ooKCQ3gMq7kgmeEYmm9qLShu58k",
  "key18": "4mHcTyYmXputKtbfyjAuqCCKt6cZYVkVixWKWPBiYt26aENVkAmXD3TCfoaY79mvPTv5x5KU7TcqHwZD2jNQmKb3",
  "key19": "2f7mhy3tda14nQtdFaUvEMTRBBP2KKqTdoZ9h6ZzERaicZ3ja2q1czp3F6QdeB7NztvKY31x7TzJk5WL5ceULE7z",
  "key20": "53srsqvpKpw4wQV3rJQbZwSzRw2aVEdkCXd7HXp64tBp9sdwCw4GTpPDPSFHUStBsE42hZoe9v8v4HbZ7AgUDqKr",
  "key21": "2iRndjuDb7QLX94dWHGGKaMo7sTJJb7JDfMZS9f7UjpL7yvhFAFLVEjteX7pNMF7RX7YTKAhvYBQqemxc6jbMJei",
  "key22": "4yjxhRVH19NaC5Xt4HQ7AJCSrXC5MXfZmmr1cnPtJc5XHy18uEuewugAx5FWM73366j6d7UfruJ7tKzqSJFamhBw",
  "key23": "3M9oY57vGpaJW2bn2zA4KW7N2WQunYiotKF5tK7dmur7nR9Pefirf54o3TRd6mD6HSz6AMkPg6ZB1MCJJqRHwE71",
  "key24": "2obCxDfWGvqXCiDC3a6WRE4HqYCZfUTWjBd2ckmk7CfBtpFxH2LMQmBoXiF4dxTf533ccZyEfxyh1ngDYWR1bvvh"
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
