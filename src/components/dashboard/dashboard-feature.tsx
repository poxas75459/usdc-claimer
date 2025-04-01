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
    "56ajrMHoTrYHu25UKZRsQ83HfVE4Ybk14AzT2B9YMP3vXUzvjG3SVQJ2XnFaSQtSVQBV4SBxaNSekDConxvunGmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3toRZyiWsHkNHSTTV5c51zvrNSGojPgSUHJmm4zUyURevkp7oHwAtxWfZvsHGm5eeBJpmksjAJDQRjuhsBSsr9V7",
  "key1": "2pACRx3mhWrnTGMhC7RXEdHad4oQAD3299WUgdwu3kGEkkcm9T7ZAkYBbUy73nFuFn8QL3UkX8BiXiu9Ao4HqEJ8",
  "key2": "62JQtUptVW72k2sKJhey9L1uXfLynKUPy8dgShr4d4EC4yE4BA8F4pYdVjWiF1hoSpAQ4RTXbvuMDKz6ifUvVU6K",
  "key3": "52q1jJVpcEBVDnSuUDYGmT8XwxjFCCvFX6Nx2ezwVA1fLX4Ax7rJAtCEuS2FRV7BYDnTjoEDbLnBGhf4BEyXNaQ8",
  "key4": "5ARw3h332FiU2U44kvZtriFZYmSqGcbZk6TzxJunZPFggA7PW2YemV11UoZ5NJ4kQxtSsHyBHg9EhQRvikquJzEV",
  "key5": "2QHgiEbQkX3x7rP7tZR5So6xyPmNHzy9KMsapkMYjj9DgSkDuW74Ubbho5JrEMJrRuNzcAogpE22SyZbVtv39syW",
  "key6": "5Emf8JFMGUdPiY8dU8ga1ZaA3pN7odgMjAciWZtqkTj8rsFn32zbnPX8ntMgShLYr6AWSUxMXNVeSt72otzMZJ9g",
  "key7": "3D6vufKD5g4aryHXgSwqfF38iGW6foXioYNUKuV1sman9oH7RLuKrAfnPmtj3J4SLP32j1qoNTyr7qsSdhxUfaDg",
  "key8": "4XKxma2vdUnRgcqyAJsSrXF59FMs3XYTPgjfojd25eCQdsNBJDNCAXAYrSZSYqeNwP8vVczYQUtTk4z4sWrXAFSD",
  "key9": "DHdgbfsrHhAGBtE7JmmMT6SaukjYd6ynaWJfALY7w6u7wF7FuXM2U8yZE7sfxRuS9A5T5qUdXDcnqGpdbSKu3T5",
  "key10": "dQ1dw7yaVqFWPj482ZK18M3nCjegT7vbDsxatyqk21FCVDZTNDUxNyP4FAgr6mknq6Wiyfnfs1qqi7WQyTqw1zy",
  "key11": "SA7RgRnQEPbM9hy9qWeRHThG376f6riHfESqQrRoqh5z5FCz1LNGvdekp7ySyqRKLw29HPReJsGrz1HLib1BDSQ",
  "key12": "5hzd8NabB31vNnpgy8ay8VizRf4w1FEkt1oMYtRogU9V1xDaryiwbmEEQ3nUjwKpE2Se8NHfxDkLFgvwdXahXMg3",
  "key13": "23QDXf47xHvq5N3R2RmerFKwyJpPzEbNzgECqPB4bh9Yk4yJrYpPaKCEsEWWXswPXrJLgZJphNkneoACkPExrVYK",
  "key14": "2NdgkwcCYEiwabbsFH7PKzZfHgoeGnRy6PrmZRrp82qAF4LKR42mWYwdQPf4yzaQVivHJdvz1SxQGqZY2FBthLVH",
  "key15": "5kYnrJXnGQwMovKc9aP3bVYDo8F39sddZcd6USLdkHQ92j4MLyzrwAbTiDFfBx6yyF5KuctmJ6u6pdkVD7f4aKj4",
  "key16": "25rEE1zP8QScuT2Mj9LtpvqteGKNN1VDi44vBGWRM4vFH6aQyW9yFJSZ2ESiywfnNdbDVPCrxwLMviiCJLQ9Mub2",
  "key17": "xkQrSrcT5wALijUrd6UaCZAxE6A9qJtaQArrYBgPZekQGgVxb5quBg2S9L4ZUaTPDykDUNGgANfCCAPiJLV1hfe",
  "key18": "URLihT7i2ouKMNQsyKksuhDJe8sWZxsyXvbfaFHV5tH39exzbD9fQFadr5RQhS6QkAEPCGE8VJEN1mErTwQ4E5Q",
  "key19": "5V3UauHbi6PNgNaiZfUG1vXAJFgnyi6AdqrYawtEk7pjuc7acagT47WUrbtCEDYNHiWVoWGE6TvU5WoV4gxadwCM",
  "key20": "3Z3FhaxtiWi8FdLMYXCKEuvTiP1DHNqRJwKeRoNx4hBzQ1KWF4BvaNj2xZqoCtku4TzGMNZn19dRF1VbkALz4GBz",
  "key21": "43sBig9eJtbE3cuU1kUBrKDRTd5T3aev6hiAg5qRqmLqe1CMDu2PvH3wYEermHb1b9y8KCmwSQUtuY3G4PFgFmXm",
  "key22": "4H84FUQHKjjXCB2Vt1aknrF9E6NvrKEeX1cD4xaRd5ovZmWW4G4qJVG4sn69dABX9cpUbg7vgB2T8Aaze3GgZHVZ",
  "key23": "4gi2ePPAjTxNqDJPascGsaTY32WtRJntKggUp5eKgDWsDeTVPPq4e4Maj3ejBXjF6WkDYNw46fLGonzbQM2ZrP5M",
  "key24": "PuvpXi9wteHSawc4cf5dTW8dogANoceVm9PLRRe7Ch9qqq5jvLzQjapnAXKm5BxxANdM454KotmozgxKogbYWki",
  "key25": "39VzXa3cq232y7d6BjcF84wjSBn19SXq2HnJzAQqXqSk9PxgAcjcs8ytBswDwpeeNN9FKtVEc7pDqjUh1LEv3zrp",
  "key26": "2N1A34xKvpAWN7wfMWmJuWdYCVDQuwpErxKrgXEomwr88SSoD3Qwzx7wRqkRjnLfNqow58h4uEzkYcVv4Qo2Tpst",
  "key27": "3QfZknrhcteuupqM8NtHTvPWxvEPXAetKkPBJxapHcQKrCRf5VN9AH6vibn4h9F128LM4wm3C3EQZuMSLwHVHNVF",
  "key28": "4u5gEc7wXZNjzzrjAmmXBJrYwbU8Dhoo8aLSgXGvi8YG9zkq1cRhddXFJM6NX5aqLggQtuU297zLvapv2QV28irY"
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
