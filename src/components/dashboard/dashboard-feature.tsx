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
    "jHqs96txUgP1eg74U6uCLSunuyVQvRbmhnGx7gEADa3Kp5zLqNjU8fjHRJemW8rt6HVLBJKNVse8QLLP4h8Ad7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f9gUFDHbkmAVEAAU2pxr2de3rfZ2bpZXPnTKoecDtZbxPJ6AT52XXRAMZkwPcrRDbasBHZ2Z7QDj5NLmy96Let6",
  "key1": "5PqJ6FRRau1RpZ7KFteUMmmBeLQU9xQGgxSj4fg5hGqmGUTPAzJWKWH7ST7reVjcNVwmozcg3ojyAAYTczpYL6xx",
  "key2": "3z8pKmfiGWRWjx2JgR5DRwFmCSeSy519HkqKNPnDxq2S5nGMh1Drs2UZjE3BuKQm7jCPwRj3UzSsQKVSfNtVAV3H",
  "key3": "5oSaHeXjqcxpCmbzVoZw3kn9wSCENt8pNPKqXz4kg1KXNdVvDsQ7g7pFMCNf9Lt5aosFicvZBRuZVjVbqJ7Y6p5f",
  "key4": "4dP4HbweEPVQbnqGFTrpC3fw8jK8CKHwEUXpYXZu2UtNDKFsT6eVvco2CxoipdoRfVqHwh5bRVa9UZgczEUU6qCS",
  "key5": "5xP4TNwKN3Cc5uj4SniQmqnFF6brB6ArShbaHSpc4FmgKuS6Zdc2nu6pn9WdufDpa2utygB3ceqawrJ7FshpPwBD",
  "key6": "2UmcyRv4VXFoYR8YiQ51Vu3ribNecisGdQsCNKizPwdNUcDtRWLPYibYP9v8hPMVyBV1rdmkQMBGKrKYFZdoD7qN",
  "key7": "D6LD933swQ2zRaWrGm1h6UiYbdryjEYDN4EmFMoJKYwB8axbrmUwGWfGyyJAD4Ts5CEqbBm27ccovLRSs8b8PiW",
  "key8": "34Vuzporyo3nJXA1bxVxZHhX376zdfghuhggNZBhkZTwsJNKx21UAtwf2XhZLKTumUrkv6XeRZWiAQSbKkyuX7bc",
  "key9": "58J2TPuUKcBUqR99ARLN67MHUiXkZUE92U96phZPaYNfcXcNN8nDSE72kp58Ggs89jZbPcA2nUEWUfSqNaWV5dnn",
  "key10": "ZHg7w72PjH5pRFxgiwD2Niv3ie8eNrxAYQZYoc9cRxxmXnJEuExbeX64543K5x4SfewWDiTqKjbro1quFgZ9GUv",
  "key11": "39VcfP2oJsQpCYqdnyC2kigvnZ536Q8TQsXjE1fshfAeGovWnTrifGeQxXS9Bf2BRZSvMo1uLXBC6LfVAK38jKct",
  "key12": "5MPsGtqYy128K2x2Rbn286UDx38Wn91x7mnP2JPiTM5pzaiGkdLtfFqdvp7e22tUTE7NXJQATehdqtCuDnBabWHU",
  "key13": "59PduHZpoNzZgWJiMPtT8dsBqNYVyEPPBqRvFVdh6A6yRY58RNsbTrkvzSHWoAm8YLjTXWxnuoMj1NscetKKoAjf",
  "key14": "2kK4r4xq2MqFaQdaWVdpBYerBxpZiVEk82i92iJYKvRf8mR76B7pArMF1YnYpUnKxwU14WWP8y178LsPDS4jbwAX",
  "key15": "3MUdtbtxjofWxfqFXuosEAZHuTcYUzhUB1pa7r7fYjLPdXsKf3oo75UZdPaEukww8MTKTu6s5fMbHXzkcM6dHA2b",
  "key16": "2LYS2A3oV2axhLf92ZecarD8tuYyfQtU4X5Z2sWHZ8Tbo6jdQnMYho9wdd2q7ZAQowUghekMK4Fans5rTUUsjDZR",
  "key17": "HJiGEvLK7doXb1gX89BoP4WDbSoV7nrRGS8z8myXxEg76CzbeB6LD85rdKPZfmq3trq8ap8ExpJWMgaJbKeje79",
  "key18": "2NAMY9rLnbtitQr6jE1fSyXB9LmTY2X2u2Gj1wY5jzcsJvDWgxyU25p768HnToCU5eL6VQa2EMm2s5xBgfGMf9d6",
  "key19": "2Gf2DGcAsCeHRKXifoPXtmRfWfWf5Wz4tj5FLwBdg2uWJDep3Nv6xM2Lvihh1vuVW8fAFqFSj8kYFNbmbsgpobMm",
  "key20": "3eS7EPLEVJbJyQn9ko97srLMT5xsGtJF5znrLccj812kHE7P8jfSvcmugAMs2YhPfF6SLt25BBJ6cCjGVjWRaSMj",
  "key21": "5pgekcggXT31RBJGYGnZn8Y6hNdikEdNkYyoCM9gLt6eMjUUnznGrP9Kh53QRR8WmhURerWRUFSfRvo66hi7wHzu",
  "key22": "5M3z9qmiKTAYgKU3EkKavHaEsfwqndwipPwhnBuJKabUeNxyvmdaJ87cTqY3Gt92j9onn9vqtrX3zTadsaT5yNqN",
  "key23": "3k7h26JrJnbaNViyVUxpr1igzcjsL3JU9aQpecjVmToUHUkQXzCKGdAamZgvrrNfLQ7Qwkk36P4np1tFwaXf6eLg",
  "key24": "3hn3haXaW4VVgVpWmYgndnnqzkZLSZpoCkXVYy4a64VtsbsdSYERbCPRJ4fCJcrWEdaCeRpEZN1bUtcdxU5zDcfb",
  "key25": "5hKuVgCZtCz11uZxf4pRParLKtpysEDipfL3idSgh9af71tMWozA1ZmoqmzXEPj8YxwcYzGTinLQkh6rE4DA8Je9",
  "key26": "4Hi1gnT7dASz66t6dzYwREjVC7xM859KMFgXWb3WfsG1tpVDvvcmoLUujQgKm7j31KLTrqAW4dohiz6bsKEKQgX4",
  "key27": "5tX9kTssxWHAHek5r2Tbzv7LGnvwXLwh4dwAFK7HLSNZjJoj8LSaiaLC6maYCQJWpfMUsTWdruAcmeT7LYxg21Bb"
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
