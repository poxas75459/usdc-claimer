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
    "52iQA3r143BooDYWCv4AMsqbgURR5xQMXzcy5MLnC66WnpS7CGeuFZ57Hz1zssEJqwDoDQsCAWsncNQKSvFeTcRY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66Df8uAEXW7DPdmHAYB1YfmrKz4s8VH6r6YSxNMfihgXq6q9RGa28uGHU9v53ZbG79m3fAxZXcB8Y4QXUx5FbeGk",
  "key1": "2Sy8Uvqryk6RC6rKHJrzUNbj7VNDvBY2HRe4uBrZao16EKTx7cQXJwW3BJpRSYvKnujVAMBLcsSDzqXg1hmXamCw",
  "key2": "ZbZkYguZ23qHXSaNWLbRLAgAHJjdG6YZvNXvHj2y1w7bnVvmH5NECsiJZUgtfbFSs67xRTNDCLAz7anDemSqtKx",
  "key3": "5bsXeuKSh6oLFTj2msTeL5wxnJh6gS9ECfLqQ5XFwvdu8mASxRjRwuA5DqCxowMBPPyMhniUj8ubct4RfbBJbWCL",
  "key4": "mTWwjMr3BtfepjaHxSJUiz5nNANqTaBc6LCZEsGJwKnRaozwkMjLvGJfda1zifT8mxRCRMRzTk7j3Nh6WxV9i9Z",
  "key5": "44CPu4J78Q5m73GKkmNRAHNgujyYThRyxPZajGd8q6G83L6AM7Va8oaHo3jxgtb6yyeHM4mPRoVFe5dyTznYg8gy",
  "key6": "6F6uy2ss4Sxon7Zk1SDWsmo25RRDY5KA8itVmi7Xd3aH3ndBKsTZsdTWQk1amdHd3xzGGAD5R3Vp9CR43VB2S9C",
  "key7": "3QR6SLpD59FdaxHj8hQNDhdFRLtK8USKxQkAeXsD4zV1gwUdYTN3rooJMz9T2n7aqeUhry8XsCxX9kK5mHvmfdAf",
  "key8": "2ZAvU3LiwPFxXH5VGikq7wj3J2LfiUgwxWASJDKAT45RmsQCRSZ32iF9efKM5M5fTNodjb3RDAU4zQyruu3z41D2",
  "key9": "aKXvfmEQk1ZbUqjd82iFgxUac8NW6VYDHe2b4P9TxMP1zkHdHExKmiq7YvphfdfAHV59pHN6XctgqdbBPPeo3RH",
  "key10": "idP5izdsZ35ZMseK11zgV3Sskrmufz5Gt8PdX9QunnH9Qgq3cFFKsopH73ThheGZzwRmXrUNVaHatK7R6R5kKBF",
  "key11": "62uZ9SnJMLF5Rj1kBtMGTM46iDYWaasTf8Zgw3xF57UNWVX5vqNarTQEMVjAH51QRCsJnSWht9TRuFtFSPiWcci8",
  "key12": "4BzMPmJSqBvwnvvTLQgvSPTgSapuUwHc4VGKJSXJwQogj9W3UdqUTPKRjSbQuJZSrPPac7tTuXVr2UWdcCC9Vey4",
  "key13": "xqVrHt83gdCcffCUrWvcywmh7fSBYqyZjH7oDszaCr85oGbQFVmhE8cGu9UsvxSjXnVDprGhhohNmyyCNRFHbbd",
  "key14": "2VQNN3rxFMNqKAkSDo8GwosU6vBiDJ9cRCVz7HU84EHtoUqLA2adkvRUw9WY2T9ttKJtQw9nsd1BBRAZ1HYAvfbp",
  "key15": "445LU7XfGSQ1BZQdRi1mUUvv5P5T8bKqQTTDHxWDBhosxpUVUNGUfc5pPHWcJz8X2immcJveAFW5cBscHQmDkhNh",
  "key16": "2C44PoEzEd6yK6xWxtoVksbvAL2hKWqUM6AehoW3pxpzCefew9zfAvTG7wWHaMR8MKBtvFdV1bxTutdEruCpGNze",
  "key17": "AUhDgCYLkGg98im2Xoa3u2DyyNLAX6Y412vYahsg3L8Y6XdhcKZsGfEuxKBH6m2Fg2XTwHjd2oH7xzYTGFYTBmB",
  "key18": "jUbC1XXKwKB6dbis7TuFSPR2QidonrcUb27Lt6q7SPvVAN1SRjAExHeZnbZUEBH8X7Y5q6zoQkXSPHhVJ8PdWnE",
  "key19": "52ipu7EhgMi4MvGxecCYR3cYQ1hgu9FCrj7jqcyjRZdn2qCGE68uuLqeUf9ZaontyWcQiaUoYMzx1M9x1ErbVjWT",
  "key20": "3s3fr5xWWMuHmdk7PFytYHs6r1VZtNerLKL7AweAFHFUX1FhtNq8cU3M4Kt8jWGffXU86HH8zLuDrYX4AHLs94Es",
  "key21": "59oXfGbNNmRoybHC5kLbghwzao1RUbTUVVH82fLr7ZsEk52XTBvJuThv7EFmiGYq9XikMD3MQUipYKA8U4zz3TTR",
  "key22": "3LXsbnBVsG8b5W51bAMFPkdBvr4ScYa8F1edMyH3uoJzYoM9g8o4kijqFVPNpZArjJACD8437puve4ihF2k9R4fy",
  "key23": "3hHGidx76BjEe8DH4rE56LM2wCERVkzPL6awgsCmqgexzeUvJ4vhMTAAmC5WbpH2agKxQpNSARqt5gXh7cvHaCD4",
  "key24": "5NzTbuaNTJw3aqDYyoRqEJtYjEbN57H6bXsvJwf9H3tro3dyecMn8Lre5hQiq5nWEge3NAwscgUg3jvC9tYYsEN2",
  "key25": "5C2u1TMLZfUZHWnshBY4U2FFKFT7UsUeQYG5cfiaqfBrp7yE1ZpPAZwFsPk7xmhNBaB2VGe1UZdUELfC4pemqN93",
  "key26": "5Gm9g5qzKFSaV6vWaE2CBiEEJHGiypFGzahXDTVq2S6uSTmjNx95v7RwF9C9bhBXt23ZbNF24ic7i4UJfo3JL4GA",
  "key27": "2hSzdFU4uVXTEQibmUzpXtcubPrZXHijABW8jXZCuGyhufTgtPxzndRv4R9WK84fJZGSSZdGz6gyC3CjAGZwVXkq",
  "key28": "EBiUcJzSRL7B3xWb3vWXr2taxzi2oz1GKUaTAaTygWFmbwH16W2Z6cQGUPscLp7MJWyDjkcBgFiDqGJNreJySqz",
  "key29": "3VSvkUA8rEcZdu8MpFYcnkEur6oos2M2ZfbPfye9vSkDBzMCkKQjCo3jSvcrUQUGfnceYWCvXQxK33vpMTunexC3",
  "key30": "HHhCaTNHwWaHV7cSUkg1PypCrroyp861eJfFkoz1J8ge87cJvSxbZaDabVDMGGS5jFXSaU1rhuGWRDMTPBiFdvq",
  "key31": "V4CvuE7HKySuA1mvjYL4HHjKGJCe6S1A268GpyvUtRYf39nfdXkraL4Rw1g2BW6yGoMmPoAF8P4mhKA7onWQqw1",
  "key32": "5tnrJZuPkgqcry11DWjDpMrERHS6d9u2PzEX196iEt58Z9b3j9g7cGvipBdqNYCvM59QaoeN5ngjckWiXvjCidvQ",
  "key33": "2pvWavq7yKMwis7HjG8ViMu7JrTiW3KV5BV4ykFYtaULBEMgNB9rmp9t4DLjHjZL6tGPSXsaKaYdCeiK95wHCNMz",
  "key34": "2QL7XULZ3HiuW4KxMCnksBH6yBJmJji9u81nt3cdVksuFgFPWgMyFEG59e9HD1nkECVqM6r9zP25tHfAU5DSHqRj",
  "key35": "3csFg9eMaoijegwrb6nnQLC6XZexocSWn9xGoTFU9pn6fjfcn7CttkXeRiCM9Y6e5xZahJb18ec3sVhzMw4QNJpq",
  "key36": "3ofddMZRAk8i6AiCGyowkcNFATWbqnG9xTw5Q5YEPFxCaKn2dTugyVRR2ikFxL11Ep4hh1HQF5yDrCzXADbmyMB9",
  "key37": "2pT6yMLq5vUJb3hse8VbipbjsuN5LPuNktddSwZedXydRBbdVnCAy7bpjnaXQMJpeZMNLyGZAVb9C3atWgKyGMK6",
  "key38": "SpeXxpj7SQ9jhAyDmVAvpovh9qjNEG9TnCfS4XKCd3mevUYprorvnBvVNa4UikTZ5W44urGLYy1kEdSauWwaDBy"
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
