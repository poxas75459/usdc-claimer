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
    "2yGpiqfdHAXGBtCNtsj5xspRAAuTF2hn1BypAMKBsPPHKoZp8DCafr8B8w7TQhTMiiKLCx1sEQhXfUEL56hQmgUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41pxxT87D9koCarvf4ULLzTbmzkhb5X7ffe7Gfymm38Kmx77QRxRQcG4jTFPEoHXrxzZkmtByyZCdShZzsUarkKa",
  "key1": "5hdE5tkJC9oAhsXHUL8CNRoNxMdni7j1XRTRjgmepXXTTB57bzn3BV5Pa9KR1B11YxsBQsYNY9kwfNEBQwEguSLD",
  "key2": "3YumkN152KQZGnjN68vQNWnvL5YqH29VqiE3KpuMbcZmFspesnDeL53j3Th3CTrCRuF1C2z1BcR46tbFcRmySFuk",
  "key3": "oNCZY1EdBV8roxjwjSu7ZPYNwPtnKYdFFBk3GbZ1YLEWt64YLzrqUePYybi36Ho8tQuy5CuHkdNksg8wJMQJLkt",
  "key4": "hjvzDHCkstypBSbk8GfCaU3CpC4KKfHWMXKTF9hrBSgYWotmoLRXkrv13P8gHtG7YkxkZFRjPmmCqdmpHTGq1vb",
  "key5": "49nCLhUaokWXhKmoJdnB5GWsZ5Q1PxDAmC7i9fwDPSUfJ6gQgvGzfPHaksHPGp9z7RhFXGPcdfAtN2xS5DmroY5Q",
  "key6": "21JkN1aankcRBbSALavJzNuHjAEnD1XzGHtu72172mo7Vabyb67nmFgjA9npekzRxtf56tN3SqYeKESUJnFzmZiC",
  "key7": "KQUp1LNaknXzSt2A1Wk7HzYDywZtmQkLhPNasnaWazf9Kdf1zZ3gCkDP23JmMRwoAKMHawKPBFR6wMHfU5wZuVg",
  "key8": "5xwHemWgmPceHGChHF4gVfxT6jnUkXnUM8o2z6GZZyarkiKurQ4VYpVYzfUBGuKfvPyZtcPV6fxLQUVEkPs35bAj",
  "key9": "vSqgyC7xQDMBcpwsC9LENTxj8k2jki9wEvmm89SBo4QcWX5so6Ch1kfgCNyiRWTGQ3n4eYWvfJPn3G4GjF3rnBr",
  "key10": "4KLqFSrsGxETXQvCREsk6YRh8qigFqnMnZKxjy1vtZTk15vwdAY9qF7Y3HsHogKdSNnT9j5axKeYL63JEdaKHhSK",
  "key11": "529xzygjrktgmqLEGSaUtjCeyLjiREoGGrYmpBQ27H1U3m9R5msKFv18NnvQwsRkTbL1enomyt4vtaXHStL4q4YT",
  "key12": "5kChCqzdUuHZxEUP9FxkPfzYD8NhpJBbx1zAzC7qn1tEYVh6bj3cokLU1aZnfkvy1RYSoKF4i7MPf3qaLGrwYvk7",
  "key13": "2xdEf3qMVBJBiAC6L6ZzSVcHFE6D4h988XCNRxqw9cuwtSrwDKkKq2hHqdb8cFP8qfRfhvPHuJyQmFZKfQRTpwFH",
  "key14": "39wWy35iKCzSpqCwJQSzk43hevNQDBhvvhtFo78qAY5ZgXhjvBU6zbm2QZ61KCSVma2KiMCxnqiz9mJAi2AxUvzt",
  "key15": "5m7gWSVVdkFB1xgB5YLzrhSfjxKddo86y2wotLsLTTjNZA7QqdHn43rNZzCrH3bRL3HR4JgKoZtFJjuwDwbgh9aa",
  "key16": "49a54gg3JBcjbca4VobpDwAbup7YMFaDvVS7khERiDY96ybYjZc6AnAw2VN5cLbtQCqaiYVDpaUdG7Pcx5Cec7bv",
  "key17": "4XBg5wzUgmnRRrzy2NwXupfKSjYTy1Kc9gCy6cpuEcKXQLvaNnju7iCfDC3P6HP2FPTLggTdbzfnfQedFxZWyGFJ",
  "key18": "PgE4V4FRHbGmDsd9cWDpWkfHpJD6y3g6taTUoaH73HwS4MKqnG5qkjAPNFF6ZK8ioMoxZvrudNJReBuHAuvAzs5",
  "key19": "66fdFHh3C2fZ6KB1Th8zXLi91mPeEHTFqoQWnkXepY91AzeVFPWUN1x1Yf22tYnJMA8EcsV4UqQuBtxV9inggVPb",
  "key20": "3kCjeAA79c2NAb97ujf5Eg29LWKAxxCmAvhXsYZ23di3HEcazGry3dA7bdzxHvrAszGs4xL5ZJuTasF5Cr5ZobMZ",
  "key21": "2MAdNnsQqvXx85eqhAPrQgtT8jREDa3gXMwg9doUGtXipUWrUNSxxQ2AN2TviPNGVQvuNJxczLHBv4LKSeuNLecq",
  "key22": "5o6Qo44eiSqX7M55vqP73Gv2q588YxBFKR2Sc8vr1AqQrAEgpvCcxFP7DpsBVX31WTi6F5CR6iZ5hVEzzFg7E4mn",
  "key23": "4wLR4fa1tnw2KwTA4iCqJeVHkDeYmbm2NioTfAUhd21QzVHoSu7K3SLWL19KdPmuPspSscSgFCVctbpjAkKs1Vbg",
  "key24": "388i1X6YtJRUBbmZVijn5DDcW4J782mRSw1wr7vEDE4RXVBDN5i8ACxwY7Fh8hmPvo1vqUbBamaHkrzgTw4H42gL",
  "key25": "4JHCswZa2qavUjthBRKNW2zLRgBAeNBHEq8sLiVcg7n1bMj61mS962uuguuVZJNnbBCJdccefinJxehtPXevqCk6",
  "key26": "41eowkVejZejPEnC5q4nrS917FgKDFpQQPgaL3KEkPmLA7Eom8isrUwjMAgD6GXDjGY3jJnoy9gJhE7uyVimwjn9",
  "key27": "2j8FvkpQnipcDgT2zxzPZR526d9RVfiDHwayx5PMPSZH3yxZAU2u2CxzGMpp1truEJdWmz6NnFKW6KJJ6LLopkVU",
  "key28": "5MzJgjm5b8CnnFByZpWFESX7TcYwaj6yLeepoEitKdPQE3T3WG6ghtKsjRwpZs5KwpfokNLRnM77pFWhZriLMWBW",
  "key29": "oc1PJFXh1czPNiZY6e3yVLbrxn7ReDSD5mGQQH4QqdY6MVDHk43YHphhtzsyHm7XkVXTUSoAw3Be6CSgYMCv7Hk",
  "key30": "4oh8SC4P2wzKZ7e4tVuyW5AZCR7GpNh63dQZKTds1yhXpq7Nn2DNy5zmBSWx7aCZ5PMynKwPTK4gX4LnWP1kHuVe",
  "key31": "thBdaMjX3fivTcCzWMhgWJNRBZMrMvD1ED91hHCvebzPG2amUb4Vno1EQ2GTxEW6LBBxszmD8DUyuciyZLWoZxW",
  "key32": "2oX76sqSVQPurDFTuw84zQ9c522ecbX8bATsMGaYCGHSGUoBY5YXtBX5ptM193e8rgiB4uVw2a6DJL1rtx7eAHTb",
  "key33": "2ac3TDh5mRFe7iMv3wz1iCRxurEd6A65W1PFL1aniUKwC5V9aTfepz42TyTpwdPY2N18XZkZM36CKiSRpxh7tob8",
  "key34": "61r4smEdiN5BZcYkg3V9uHV5NDWxhTazLBa3uHiL76cTwoR8KQF6zQ4j5FhBMNM9vyhFtBu3tYsKurSa5oJn4M6R",
  "key35": "4BLhfzpHGq7YeragtgAma13TFZrye75vH12MdcGCuXtyzvHf2pwufNa4inoswY2hBLeb6tU12cgjzXaHvjXFuaho"
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
