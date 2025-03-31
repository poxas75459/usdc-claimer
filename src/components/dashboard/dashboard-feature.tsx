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
    "2Wg6tm1otsR65kvty4Fyht2vhW23d8WG8ebMgA3o4hozVv6o7JJVPg5QDcszETP5wKpN59Fe7ZZvZ6BRcPWpTxLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6FfK8QtjA9tAysLqofxebZVRwtYzFbueryNwaQfmNWK1vmXRWzwiAE9msv1aYZbLuhAYzUGsCKdVZsbGd438hFC",
  "key1": "632G3QqY3TXbcVkLRNCXGoooNGzRbBFWEQehGJHM1AczwqhXdzrXxTyfRuMdagC4FgzBmj4ure1jM83QHZLUvt51",
  "key2": "284yZjQARmRAzVQtDnfLSbqkwoxDRfj5npaCvuHaXrx55s98C7jqGDejUQXqzSpcgbsRd6rnLrHQXTqukGN31znZ",
  "key3": "4JWrPY5FAhMfz4vcNsH4wjH9wafjFt6hZXiWQzZK1LtouqpSvmfSLJ3cbw5U2MijFAZYZVYFFmj3f6PQdZiTqLE6",
  "key4": "2ZKNNeVrJVmTv4jzR7t9BkxuSQjiDPQiQVDMQAZHUaoCmGZVb9TjfCZuLddeEdZodfdxfNFrUeDXoXenc97fGPJg",
  "key5": "divrrTVKkaovxJ5rTz31gb8hmKRu7wE9SyeuqGW6mY31tLh6y8jTU43jH8kfbmhe3kWS9fz5EPzgY9HAcWv1qrU",
  "key6": "4GJwMiv5Tgjf2MUnoGGZX4DismHodV4KgsrPDKU6T2u2S7NNbQuAnWfZe42SaHqbgqVAaBYmQCtstemPhWfQAQwV",
  "key7": "2eoHDbYZL8hFw2vimHbVXk4eoZtBKmKnDnyKPiXz6kPorXGK72HzksvELpYHuzMuGXWxe61Ua5ugMEqRKkEnbY3M",
  "key8": "WzF9hjYpr2xwnukUxzwWsLXQFSgJJuUe4UGidRsbpx83NqgSmqaZo951qx95yNnHM6sLkxXkRKkUS4jmMdfUhnm",
  "key9": "DYRxDYasKvqymwHoURF9UwHVBATZnh5j2KGwKzuy31fZthrRywWkXbHeTbq72Mi2Fu9EiZoviv3FzrUM9FN9yTc",
  "key10": "BGhZ3yfyb7xg6dEDs1xHK7paXkXUy2yHbFU3Dscj2bWJQqjWja8t32BuB8SaHgUHVJ6AzxH7MHK9zNBfLHygTv6",
  "key11": "5SA8rtqnz3domFeL4pw7tjA4gMa8SuuficNfzyWsFdrqhEKEMr9H16tNHQxGzVvin4gYw2RkAPkPH1Uy1ekMQbPQ",
  "key12": "25wvjSsq9oRKyoQ9GWZt9sFGtSp5hv9cJTSCiHz4b4aWqPPcyqxae2MKBPN2b2PVf39LvrZNjnCsPzRgRSaYER3Y",
  "key13": "3uvAnpfKcg29G7wXpSjh5bdqs1AQxnPvxQoqXi4EaWg6tJMKrDoiWSPQtiW5n2EoD5jf6b9rRXntKf6y94pRmCvr",
  "key14": "3tK2nXkcC1hGAdbUqY83myYRiX1TFQEt3q7GmLEQ5VatSqxamvcVtNfeJkkDc9Q3VhoVCpq12jZqbL62oKnFXoNA",
  "key15": "3Py28jLk5DXSKfaVEEp9pT8oxboTsWbaTScvDenAB6ipwgDrctPxAZMLAbB23G4GkQs2DT5JzAqmAojoDURjLwdf",
  "key16": "4873QTbyvurnPjZtzY1pJ2fWyf4gd3FH7aeAj3gz1JFRq2AVjs2yPruBDFpn4yH7fi7iV6XQCQamsLn9GyVKhLv3",
  "key17": "3dzFnshYPQNfwphCmvyniaYEVsBvxD9b7qBVA184kmwyPCrnoNYKNZzwB3EZbwNqTT3FuTBEx35g3RCb2Gvw9YD3",
  "key18": "2epS9MPoNPat694zcnNNr12GP3Wp8pMWqDw3Dwz1qLsJAMZ4QdFisAEHB9pv2GJg1gRffHgTFr9h3UBWx5Bi7A6i",
  "key19": "64AAQn1QqNFKCf7NsjsHaUBoo5WUzvNFWKTrkBPJTwo51jD8KSbzwexTWhHjegwuxqH4ss177qDJvb4P9Xr85S3y",
  "key20": "4YjvzchtD83j5FXWgPEYq3iy6v48PuBoNKnxGnLTH2H7jT9CpJimPJBqtxvDLW9MYokf9FLWJmDoQXzmfCw1TbT8",
  "key21": "25CXomVXtH1wiGu8iFzBekReCRPMetJWbND5J1fMNgT9emwoE57bRMMHGbQAd1h4BT75iza8gp4w1Ji9fBH72qbj",
  "key22": "3Dgmncfkqx8iQe4ojfSDBnop9PHFpWFUQYUxmrk9uBQczdesU1FCDz1EkWfzmHDGgxyucRxmXhRM7joAATzVRUak",
  "key23": "5FKe4x6ie7cidvHzFu43Y9LqU8D96jVQMwVeBpHZtt4CPKxCzZZH9dvwGYCXcVAEsojTFbXft1ziBiciF2UEi637",
  "key24": "45MLg5EuSXSqqVsoRJN8B2A2aJwszVe7RMSm7CYgUWf8mQbX6aQ9dw9zA2CEDEcMm1REixCKBhnjY57Rwz7yVX4V",
  "key25": "49ALh1beEKCTPHDHC3Uy9fKq3fcb7xzzTvEemqLKy2sniRQCMq1QSs9RndgfJPorq1RLvTEZvHLnVLiH8MZWqfjw",
  "key26": "38bgfPsSL8n5iQK9uUhKDXe62p75DJ6sJzuFPGEfgpH41sNnBMVCXdcSiNSjLieyoeH6LTCsGf92u7uD2fZq8qS1",
  "key27": "3CZ7mFg7CDJT9zSzDJrdPLZyJYA9YF4QKfn6ZnACN9aLhoAfgYzzyenR2WiCkzyUYtnAky8tYzWg2aTANA4qozzn",
  "key28": "8tY39LzqybgpzXQ6h4tgNAsuubz2hPJs4hoQ4VcLmG2PnwiLtgCG48G2DMwpWQCXRKqaSKMB8x7VGhLvYWuW5qV",
  "key29": "ZJzhd9hfTdyfd6fPyuoS2LV18n3h18DyahJauDgedn7K8bfqnEDcgVucX4ZquLw3F4fbDcWobtdMtY9VYEdHXyc",
  "key30": "auy9aRJU8F9xcqJ6TLo8cu7Lo9NksiE7cokGDKQoKd2AWboBv8yEs59tWrhpcvHirXkgiCzt6MZE84qTb8WbTcg",
  "key31": "4XsJ4nQYnTCDuzje8FHYgbCo9P3yhv3VQh7QnKEnEY3kTix6X3kAi38S7Y3Aro94AhLtq6nTQMMvt7h6xiLjcxVS"
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
