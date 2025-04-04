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
    "3jbab2ibqFF5uthTKzrQDSv8saZkUQDnUbp8jbr2wGmzB7LmM8gjqQrCu2z5Amc2M6PJKXfqTEL4A3Psz1nks71A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eFndGEQHXHyFMB9abov73HHkA2i45MQwR5zjKRTmr2FgXqUubeFa7X7Hod7QrzcJjKZ42djGzzN2hwkarMB63AB",
  "key1": "4vtwHLUgehRCDwD9axT41fAkHoEkrzRxe6pEgkh9d4SmiTaFy6DCutmPX9KWBr3R2huKM6gjmNpSr6p6xdErofV9",
  "key2": "g7mBUbSPCiLoRQPDGYatshPPstHxjvHbVcGkXCqYKy2J4BPdaosP7UEf3Pxf3EVWsghtJRgTN16UJt1Fj8UpURW",
  "key3": "5euw3gJY8fJDP6Y9Js8teBGFiFaQg3PJG8AuZzGEwvL9Q8N41FtnqTAmF1VZSnM8RoxUeHb9Rq2f5LV9XKrbofcw",
  "key4": "4aZQ9SriN9sScvn5gqWJUZvMj7tZgCxyYseALezrjDwYZKzvZbGGjGBZaajG7tbJqJpQyuCzxwsb6bH9DdtqjbZG",
  "key5": "39ircwd6JKPJsKrmxdY43bKR248PU4Kj6Btq2DkKmcWQ34dNEfW8QyDoe7nuWuJNN8c3XrwfjJXq2pmXwQCfaLE1",
  "key6": "2XarTuettUEY8iMhmjqWA9moCxtijnWjQjXvUs2KMsDV1Ej1ZZqwbDXPyvaTiWUWjp4NhVWMwGCKfJpyq4ai1jds",
  "key7": "fR7F1ejTbBpLa5dSsPaAoNsEQPzWVtyrZ44Rj51JXYbDiD3wRJERY1x4GpQxYANsPwa9NiQpPGCVGYUeV35QsFT",
  "key8": "oYHMJQrhD7YTP8yYkDDo248g2rSY74AxWbKj7XzdmzYEkVnnVokR3Gz799yGPcXGSbVicR7YjXDsYBatAhGEvGp",
  "key9": "5jr3Y4v9eVevUEe3jHU8NLdbFUbeRfUW281coxZxDdhh7emZLUMXMmyC3YDaafxgzPZGKVoUU5DAkzucd19Yw48Q",
  "key10": "jYG2yXJUHwv6mafrihakWm1UrprRrJQGNCqWam61vKHJLPzFBpnuUUkAcseCRFVKguw7mnpmHv2ChkDSwK1YzaN",
  "key11": "2U9xKvz3nmUdUnk6UgFKYBZPdC81HWRHKQ724Rq4wNAxRWQaQFYbzZT2CT4Pq6Uc7r7ZCVk1Noj2bNi6diDoRXam",
  "key12": "38iDcUmXzJePfeZcaqr3Uw3QKrxm9SyzEp3tP62TkuMu4hT68FQCjK1cJzFXcStZN31FGpetQgXh441zeGz85NwU",
  "key13": "3nYfmZFP1FFJ9jF4YSwR7V5ck1Vv5aoPVepW1WaiQ67HbV8XbxrgiodUus6dh2zy86dtPYkrboECg7x7V6vWkssL",
  "key14": "AG1EeUii9F6L6uTnAWiJcr1mhHfMzqVL16CiwepLgCrK21mBg26DrKkTxQ54wPcTT8Yud2SgdQS89FLdbZ7ZFuF",
  "key15": "4TtFiomHQWzL6FvseGcqpDzfG6ZAHJkAgAe1B7any7t1AzuaFexCDvAeG92KTg4hw4XtMnydaMqwzHUuqWnySEAv",
  "key16": "5nsXJF3xDktNvL4mCxewVTgiQkjfv4WNrR6ZNZ2u2MLrgcAm9vsokrbNUB42KnJwAA9kAyYcNox5atZhRN9mHvFh",
  "key17": "3LpGZu9ZQ1DeQwMuuJoBwyoUfLywoTRQz2QzTFakSaDmutnaixNqSBGWELQ44xHoWjAqgvbDzeQQSB3dDBELwEqx",
  "key18": "3mD9CvRxHAntQFZSvaxyTVcWUa1aADo9KT4BRFx1zZ4c4qo2YhJbVWMPWmnF3z7AweSfg4GqAHg4Fr1tSdr9pRnK",
  "key19": "4eLXF1AC1s8qM51hVyzDMTqkfPjVqHJ1LWcZMk6jY7GmuccfUp1AGajw59n4YTWTX478jM2Fv8gtq9YAzbHDV62T",
  "key20": "5fyWrg1kjwvQxDNtvokRKMg3gaq12SwRtqbaugimpajLytPf2vPtv8J8phhofhvXBPnu7gZZajQgYG3t1YNG2qEW",
  "key21": "3ZfnXFRVeWG2JEHko63LKJJbKJXtG3RGCmGYk2u1PG8drSLouqXtUoJ82TSuZ1KLfEBQnZmtshBcufdLrEghsLDE",
  "key22": "Rcn6oA8vZFwYAGD2ydLyHHVtvwWHgqAar7DBy76PuSDKy9QAmzYnucx35AcucrfzkKAw64p3srjEenSLmt3JaZR",
  "key23": "5p4BbLSV7Uj4RxceXPrXpDTHS5CZLpxhJBADH5qJQHWyhMMYi3GQBectQMnZhMH49zLCFDQrhecA7dfKZfGfMh3k",
  "key24": "3BB4aZfYtuY4o3fFoNiBCreKPhKaJ1et9UG8FgVqwMQuLNNLh8wMpPNdWfCVB9zbWA7HSPsfX99r9K4KPZoEsfNf",
  "key25": "4zVP2UsuqjkZjZHcLFs8Ypi1XNo2azDuTys9RetGzV3LawGn7ZyEEtgtCARmuzUhASsyzCgGS2H4xzb1ij9uq9XQ",
  "key26": "5MeTe94pUJrtoBhvSAqAiiN1b8ExSFmRPRN6TzL6Vi96xVDtC4eCVyJyxrAd7LwbSz5R14FRXcYT4sAWKUEpWeSr",
  "key27": "5HbYi2GzF7FizR5JzptQB72N4fcd1AdoQY5mDREdPJx1yJhZneoAd4i3D1dbYfe381H2nDT6VSsoGpJ8X8AXK2wf",
  "key28": "3kTK5ZYwTX5aUBtQunUkrUX21MS19itWTm7Y8PBPwZywn5DES4SCHgob5P6p7Ko2d9NiuLAuwsRRLDeWDECTLwwm",
  "key29": "3pA87272rXP3YigtwiNGt7yRiz3r7AvHXH57CcnpiSgp4taFBM7o5fzLYke2LSdbiQ8KBx56sS45yjmBLCLA9P9h",
  "key30": "3AjQKMYcadPVWZitCKGByyHfHYKiB5d2HX3y33n1aNm5BqskjHXf8W1yNXW9Qkx9xVJbvsGCc5nu3SFw3k9sVGrh",
  "key31": "321tM574oagWdpbmnTGJVyUYgwTV91hx67fe4VucsS6vpq5mhq3SjMqPfFA6E2A76uuTzWuJxRwGo7TGzHNamyzM"
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
