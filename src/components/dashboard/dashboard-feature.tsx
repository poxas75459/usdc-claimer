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
    "3eUp5U94o74xsn6AGeSLx2gc69X8ugpQZNomQt1W52FRstw4UWsVyYy7LypKyJxwZ6n4oL23wGH6myT5N3a14E44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PF768YjjshrLbYz3K3vzoBmKzmzVfadvVer5GBXJ5fASM2gCnvBwr49QzVWmyvBwKM9dureoRz4V6bAMLqxFkqM",
  "key1": "xRyXsA2zX7AQwzUwizoBLKrWpm3b8YHzqnKTM8cx2f5f2LH4qPpC1mpLsHZK51RyvQTp9Vw4NnJNLpDrmczfR83",
  "key2": "3d9iBedVdLDAbGAuLBFjuioPJKmdUdvSxzDbzKeDLqxnxZHABBAaq4apBNXntrHLkwUNZNxnemYEFCfXJHMFuM49",
  "key3": "417zzkbESSnCRk5kfLtu3UmVcWggmfo16epbYov3pmpVurvYdZqKGSHsiFYnSKBNGMpY1DACatMgzNmE8Rr99Q53",
  "key4": "3ejpHxwcbg8Ns89EtnkBYRSAirD1fgZquYv35GX7MvGehzrgQXBv2kUv6hNjbVeTfhnLauWLPR8wdCPe1Lmih6kg",
  "key5": "2RjFr6Tevt8j8GQQgouHp6ZZeBUoNic44rg9zMPspam46m2H7gnitmHj73fx7Pq2YDTddaM8Y4ZMdUastEHrKsST",
  "key6": "4TH5EK5G6SUEtxwgmFbDcvHUHaVAKfwoWKYdUwwPxathcN4ZUjjpeGwJJUYrjTkJLPbB1GyMMKgGnkUU9Kgpps6M",
  "key7": "59orFRmZaWxLaxkpMoXNK7WnwoPu3kn5h6ncGaHFqhSDvm5xy7DpiYckGDn5KanAbi3HdTgLkZX81ixgnE8E5qHv",
  "key8": "5ntvPN6sHayzzaACGhJjBDetMYQkhaeuX5zEvYBdUncaePsS13ViAqXQEsh8r1XtJvcv4JAbAF4prJeHScusFVhy",
  "key9": "gVyBL2ADw2D6QEhiHBLdEX5baTaAKdLBonSUpG4G7vkk2dp45Ayqk18bJ121587hotwhFcxTzsZHjjJd8NffGNH",
  "key10": "5eLvPGUHbpAcBteewGLZ1YzDfVaxpgrM76o98C4DTvhuuQrYKx3VxUcY36AEBu1scE8FS5isFSua9AZHQXPcYXTX",
  "key11": "5azNRCZJDnYdgh2yn9FNY3wJHhgE3RH6Xs8a1EEsvmiQr1UXLduypeAJKN1Dm3RufHPi4fV15aQWbtfHv4AdTcvj",
  "key12": "2Qiauvwb9ze5NV5s3yZPSh58RNxs4X8pPyFsEQ2BVMBszje6abfa7sgbdEgypgsj17WSRuSdk2MKFHc9DgwE1Nid",
  "key13": "2j9HEuo5icaADFeHvCoTVhcybP6EoQRMQQRu3KowxvKMX3BXBPAndZi6mYauwkCUXfZcczkmjE156hisKgq1f3qV",
  "key14": "4htXoRgSW1itGVsAwYm3P5wbUaAVZdeEE6iM7Tyd9sebUfKpjxbbuX7nd1ofj5qf99GHikDnC5tWWcfDgUoBYFJD",
  "key15": "4bZy6X5dbzsim4NodbfX3imzjCmwZ3jMebPBxu2x5aM6S28eBdyXBLxKgRF4MtLgrS2UXEaTaYD2TdBAFeJvfUSY",
  "key16": "5UQtGGMrwWvuu1vUUEpW3UxtiUizukaMdjc2g82Y6jpZ1qgifSVApAELwUKL2AXSPDPKAW7CGpsrGPJdacmcR1FG",
  "key17": "125Brte7eo59mwHox61reeKKA9Qv7aNTULqRn7rfTnK4WkHsh17w4La6tq5zjQNTU43rmwYLHr2LaxtyHWPzxKtq",
  "key18": "3hsDerBvqbBJEohHtxfzrwniTfYWdj8hvd6bhjd2AVNdxY6pDV1Lt2PcCxXZEsizr4joKqunCFh4X2RVBWjTJo5E",
  "key19": "4TcAPXAe8adYRhj8whkujiYUeFcLFL1Axg7vJtgNLGVMqfL9Rg7ZUpXWUUbDonChm3w3cLaXEpKFkYiAVP3rxAjb",
  "key20": "2hBiLbidD3DX8LAptG6DUfe8oRAAVyCKBnZpwa3x6rsp7FjKqGYNuNy1x6iBXoiRoEYB5UcsBHELZ2LN4Ni7Dka2",
  "key21": "4A5F4mNAZKxisQELczS9rVgR1ZK8DTRPdjWEbAc7KdgWBEz1uyxCsyEMm2YTng3R1CS1T126jDHLmacrugadftKn",
  "key22": "2X4oFbLZLGz2q5E6uWmkxXDveKEz6V21S35Nh1Fx7WnbvEXhLdE6ScYALQDVtDceNgecGH6EELCLjuVFEeXfYVJP",
  "key23": "5Mr57xQ1CqCN4SdQXmsDBbTFpvuKuTHmw4PUvSUqFLNhFhacYhM9sFWckJ1ZfabPU7pcjYQ9jNYAyBmQZJSQoYm1",
  "key24": "4dhTdEJyJ28xRt1cqjwwh6ZJhgRqdntvKfSFJGH9PWzPFgArVtLQAgQxVuSx3eDttPTSphpHunn5nzjHRshxG9yq",
  "key25": "CyCaM9etFPn1pws1KrgtzRqCUtdSYMexGjYKrneH7znkgpMzQYYv8BrK5Z6TkJhpsCuEVMiCFdePowz3nEH4p5w",
  "key26": "2kio6VRQXG1g7jFpmqkBpikLQjarfjTSBykVFkn5AUE2KTVbS8hP6gfhuX4cd6ogXKPqdnepzuPAkoYjLxVpDuiv",
  "key27": "452WKomjabYoRCAy8CZc6hJqm1XBZ2FtHgaDez3kswqesJWUW7BmVJqzPgiziwHCPbC9zLFRdhT4YAQtkDFgYSMG",
  "key28": "2qqGeFmfb5fRaaSX7o6kGGmhRHVNHZ8AJb9RrPrpcT6v5EYrrqAztiQSWy7SXQREfLuh5Sv6QgPiPDJ8UCm9K41g",
  "key29": "EY2pJgooZ4ZVW8fkH6Qj82B6QgW76yEhsLBrx6NzXadDnuQ8MypjmH8eisQjG118qGPu83fpNKRtFUQNgB8zsXo",
  "key30": "4Zk2z9Ajvkz6dcbvPdo7qQRUvSmKjPz6rT3bNtYhrsAjrRLbTrSRyg9JyyWNG6qBEW9tbo32oyFY9H2eVRq5zh6L",
  "key31": "2ZyQdMFM51cMybTNzP2V5aCXgxYCkQKwmg8YXjYV699YimmXSp2pw7BScgo9fa6cnddmzzhCYdiwLEYWLF3z7yWA",
  "key32": "5HD5ShH6EjsJ35TzHpXG4tX4WcXtwZU3orEGz2XJtqBAfWD5GT5KSjoDKm9aNWJZhqVrdoG1mGAGK3noU7Dn92pP",
  "key33": "5Ec4fMAnxHVaRHvjM8jbCVF3vQuXEm4q19Ti8YXvcuXMaBcbwemiGm3pU2iayAjYj1cz6KTQnNiG8z5fpaYLpGpR",
  "key34": "218PWVtnfNxnMSS8NdxMxZTbf7KoMi7i92K5GWJ1hiSEm76Bcqo7v8HmmoXRnNbeTUZvQNKeuAsHrP7FcW89CDxo",
  "key35": "2YynmVzysSCLuFmWhE5HDPrfeDnXfwsCAgWziMnp81VTjmkEM9baSc1CkZg7vjZysL3nrnAfQ3bmPaeFLZaHeqqH",
  "key36": "4i771DHLRMcDqa8G8XFzzFj3rZ1oJy6PXSSJtFNeCSEhWp7FkPCHxxTXRJcsiqgXRA3i1Z9FQzg7Gw6gXzm9xAFm"
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
