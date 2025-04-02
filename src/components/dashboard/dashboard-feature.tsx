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
    "5DQADH3D7UocyYhcrg2Tn2Ze2QPfkUyLxxHgKeGHWDHvsmo6McZJ9vKoWDuyV5Vhka9fzXXcM1RiCDQHo9sZHD1s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54PJE18YznzpudkNYzoEQdBBdmypVtoBNQsD1Ecw1jz1GoMgoQhrGjF2btqdtDMUhMxEsPvLpCertB6giWCu61pm",
  "key1": "3UcetxcBZnkURcpe112GsGjQiFLjfWFydApMGatto5i1R6i9k93nqvQjwRowZQ3VGcJh6fSmVDYXYn849MPpxM4i",
  "key2": "2dEd5N3L7ztCGfToA7zubXzDa1VTxQhaxvgnFg22TbPTvYUMZUiTkbWe2a9CFyR692W8bnEuntFNFyGcUSqNqe6o",
  "key3": "3TCGJvcTVodWeuzcwN5wG2Fea3DTrubbZ2iYJQFoFthBKF3vUqnp28NEDn7mfsJaC4DuLbr6bKYjjQR1DgAGebpQ",
  "key4": "5ydor5TECrqjk7SfifdGM31sB1iif2o5CZ21zWaLbEPjTxY9t9uK5jo7LEchJ9H5fAAnphtu44UuMuCd3AZsBo27",
  "key5": "66He9h9DPtCtwJiorViLpe4ivTZWMVtmPMvsK8QGu57XV5HbUvHCsgbbQbnZQqoAcz7U5AdhCCRyE82XTYhyCqUT",
  "key6": "4P83oGVcjra9Rp1XWGvT9oiZdVrLpKF17KkMXcdCaPUPqwP1y7bAmYUqQH4tgx96zwQLC1QiyD8KD4cvq9DkzfnF",
  "key7": "4ZashzQ4YKmwo4iqFnc8zkRxHgbuYWyM2JXtXPE3jFaCzEGrB8G4Ho6VGxHPHnMb8wXoGbYsN7Hz773iU2BeJNJX",
  "key8": "2hxLUvAhjonCp5X26fMNW2HmJ1KA9xEK3BeGGx9GnsnD8wDfXzxH9PiQLWeb9whNKpQ75Csn7PweyMr5S4tQ3G7",
  "key9": "Sm5qDFpjjZie7dxUudN3DR9zQJS5u4QB85cA2QNpWDkXmwLphtA4XqFje1Ggi5YLZryMM8AFQyFz28AJw4542GP",
  "key10": "SAAg699hAvBJti7Eq7oEfJx2V79c6oQCA7hyuz5QyH65Tt6eYvqqHJxDj5mxLZH5NeCkYC1k2KbPMtiKL9G7pha",
  "key11": "3qk2LjhJqwT8qXuLHQLLwrgqBn8xg8wU9sVP8wU1gTX4P13ZqkSANSYBhtgcYqmzMvG6Y639svWv2chdqt8vwCtt",
  "key12": "3Swx91HrRz15ZyHMK1W7uKzyU3Krjkh2muAbyey2soZoioQGLDCX24Y2yWvvHnkSPpDY75tTGMNaFBrMugsZE9V5",
  "key13": "3bS5urPzYe5akUPYBiYzZuWuPiECvyHH74s8GWMHEEg7W7AsTD1WD14gCV2JVB6DbU27A2r6ZSkcV6dxoEDWJav7",
  "key14": "4a7J5RBPu8Y7AuFKmvWhxvgy94qBvnhXLyR2JxfaPeVfkCjQkeNNxAybwDnxAUbVajfcv7FJ1XQu2WB2cdZS7pVp",
  "key15": "5gNEuAhcN4V9YmKNrJFuVkH3HDQggbFLXkNMy1nqMhgK3vhxPXxa4y9twTkmK2a2NBtThjVByEQm8RjrVTZKSBfy",
  "key16": "22xRs2Vj2JwcBncFQAyzPF2GA5ZqJAgf9wiYfF5dGFokC99cyffkdu1MPGYJBw7miCcC447g6Ey1ytqdzY6NRFTj",
  "key17": "3pDgX1vFqbSsmPUsur9wprARfktFf9XNnYiPhjQqcNFAvj7x6CZQUVj7qGPnBwXkXwEPYKP6bumvHZZtDRiJMvUv",
  "key18": "2LXpjuMXn3i99UWz3SrV6R5BCdoFc27EkjyJF3rb8UZE1dQukUu1aUXVaibzEuZuPigfXhv77Yg76mQTeRV6wZJ",
  "key19": "4bK4RCKnm8CqCFJB3by6W1ZR1ZJyS1fd2jSwbWdrd85P2iBqHwa7xbDhNiQ1iBFtcNTwnDE3pVRXMrM7XvH4xQvR",
  "key20": "5d2xJqGX4xGvjt4ETExMpehEMNbcRMBtaSUp6zhccPq8iAbfsLpN3Zx7VDGcDxfN8VomnRYHmSTS8qhKGR6SfW6d",
  "key21": "5sZVNx6yJ3k8yrTLQjFKV59TAi6t2MqDoLYr7gjYV8WJ5pirzRg4SAZvphBpXRhxzweY9KUw8M5iPkgLhDMvX8Fs",
  "key22": "5sKAqQq4TCqdGsRLbhGBAkR545WsHZBad2mp555fnC5fQvSKHEZQmVxBPvfxRvrky2ZHsiHEr3qjJCkpPYfxphos",
  "key23": "4ipLrTKT7qVX6h461Zday7PCk8hU1PrrinBGkwrgsYGbRmchCdhMXT8xjRCRwAH8VFxjnVts4jQAM4gzxwC1xGiQ",
  "key24": "3w5veSWRSU2cZJ8V8KjYR1gQLXUoGGDzKEUbbfxrwcpU3M38k2Ykshkf9pGoTcZN2B4CdYbmmbycFffjJgp2nQJE",
  "key25": "1vPX44dY5VWQNqUE4Bq8UvcbrUXsmUeVj4fLhDe2SLDBQMPxAzHxf8vUAASVP1izb82FfV6DgvSiWghH7KGWh8h",
  "key26": "5o3yM7rrQhVRqUq3L7acKMNPVdM3JJmBKTw3n9eYjKPezJYMbqXzBq8vsMz2y6fZJfSxV1Dz54F8eF8ZJcGoqz3y",
  "key27": "38npvox4TE4JukBX7v4UhNUPBmTkuQRrr65HJbVstV4purBRmQp1KhbPPrfHyqp8DPhVYXgkdL9ZteWPFLoR7z4r",
  "key28": "9oWeUQ53fmcRGA5LkvuusjZ7SqS3UHLaRsma7q5ToMiQ3Bb64E1rHAQZvEb2yrarYomurPfRkarkGDGFTnmtqi2",
  "key29": "4qg1jbFUZmAV4m42TEUDuSmuUtVRfBpiM5aHyAuKLWrEDc1rCLvW4z2qZrv3Sdrv4HSHJm1HikqPSiEqRVbxemg1",
  "key30": "4pDyBEwYEr1Rzs2DhhYY8yFQ9PjYy3PPdfkJF6qU3x5zofbFU84HBBVHUaar8UUKLGgwQEnAungtWXy1Deg6Fnyn",
  "key31": "4PudffaXoXK6uvNFcmJD4BWCK3NkadZnPDyamHMq7PdWAS4q3jkmUNbkth7d9fRFkys6gH5aaKqi7PUsgbri7FP8",
  "key32": "66ak8g8vUxuNBnTf8et6qhpypnXZ1ZG9CXpFfF2PJ2y7nsAUyfL9v6iQnW8H8byE3KgPKQuQpj514Afxuzg5y8vJ",
  "key33": "2MRedfjq77EUBCRMqJE9QhirPw6tK6VHzVWcaUbu9VDezhMQBa8QRecL8cPBxEbhNRbZ5byFim2uemvS9DaLCaHw",
  "key34": "3mB1So1wdvFMrqs1gbopY49k2MHBHGeXtTMgwMLhXx5E8QcNd6Tgrvue56xzoDypaeBodN51fcmjQieYaAdqnVaT",
  "key35": "5zy7XRDNBR2hLHJCFwikbJD7AGUvbXPvvsCFUoQ9YjfDYq6eMESTdnr5kWNmAwUGMhtMKHWusoUDakNmpCRZSMXQ",
  "key36": "2pfRw9qaTBCRP2pVXCw6wEGoNjJQnomLJkcDHVHpsidpp42zSrnnpmHLKdWi2tk1GKGSeFP9uor26Yi7A5HcZJBV"
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
