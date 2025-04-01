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
    "4KGKwWDCoimXM18hpoZ1TpXeqt4p7mmTURUYGAC4g67n54YRaDWioCyD4w5mSB7GZ1jnAXgitRbAZpr5CsGfEVMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KM5oy6KxjgJwRiagTSUmeXSwhHwcv1bBhMgGSyFJbcCac6RzQyBKP7qab3Zjm4gA9QRu9hDJ6fPMYJUYVmi53jh",
  "key1": "35R3bThN91FABTAfWMDDSqs34FTNyhFiWAvNw92ktVGmTKus5pbrPGRgk3hwz8DxDHXGXQQJVNaTgBJYvUUENwy1",
  "key2": "j4p5C81ikaoxZZpuWyX5GCEfCf2e76csoB2s9TbUvk1x84U2k3h4nckZXAbfaWMri2Wm37MpSoebCA4CymL9AU1",
  "key3": "45EdgtKVcnj6x3NSMfNEahJXaznTCEG1coVQcbfp54rov9qURZ4xPKBKXRycj17q7KoMT76XuGrWNWtPrrKaHQpD",
  "key4": "46rKPEX3JZHDAY9KAo8A9XN7hofKenoy7QUn8ZpRUhtYeDaFMpVSttFJqRCYykc19HJRYXSyUD6bTqBVmR9yboxV",
  "key5": "5D1Br1VV1cffHkqWEavXoFuCLKzFhJ9miQJpoYoYkXwVt9zvy24y95NWszLdGtaEjugzMivc5iiSPXx9j1uD38G3",
  "key6": "5BCECgnSo3NT9vuPUNnK5gW8biip3rqWuVzCZ8sTzw97F594gdGTFT8MKEzm66jFNixNgPggGZuWM3KRFyWD7w4k",
  "key7": "ZVWANHnd8bgTpeBE1rHtarKFbhF56PEf15mdZoTcLqe7mXRwgDgmDQS8P3aqALKk1d8MirSzSJVumcX8ZWoWb95",
  "key8": "36Aso54oykFCpJsThs5MPYA7A1w56YPPKYHsKU6aKnw7FE3izkFQYj9kj9LKwwf6jpkpn61WUK7nKxH86Ge1cxBu",
  "key9": "5qc6CTVXAG3bB1aM8VkGyNZUsgjchMYRHTrD8K4hD9LiYS7wi7M1KgG6CNx2M9tbn3ZgBG9GHVRDHdvVLA5ygVQg",
  "key10": "cBBeEjpkrrU9kz87y2indj7URiuTonUe83eiDroztLFrXXpV7QetZsYHVb414d6QP3rAR1bxzAKKtkW99c29j8i",
  "key11": "5bXbJdpsZAN6L3dXhLT3k7STjkevJyLotoKnCxAbjDjXs3JdHuvbQWChCcjDx1ZJ7ruyCSBv6N193zuQ2Hr4QPBd",
  "key12": "3ei8N9FjLc4AoER22eUudgnSkMxgfFdiSZdJLThCzWwf44a9Ls5PuRWbFWgcKJ49WhcGjYWjpcU9KaPXpVuPagom",
  "key13": "ArdqN2SjMVXYyPT3JWHNmCwajKxxA7D9d9kd47MZtxkN2Ma16yB6EUUy7wkuKJxqNVW8EJPDF9c2Hmk52nbrkYa",
  "key14": "fD5SjiFy59YCMVhqxkM7D4kBiXLQ55or5oEndBgLe49er5mCyzpppTJK2y6YqF84j7KM755npt3c3jtAKW9Jwt8",
  "key15": "jvzZwMd6KLzQ5k935hXXLyV6C9uM59iXVK8FHQZtrj3UQ4srjpr6hgAn5YTRLQcGYmkEhKEEujd4edCDmz5CsQr",
  "key16": "5yBZWFHuom2ozKZZMK7hDsgmsR8MnE77oNhF5LsBbjiq42Cb15k7xZg27i6kHhC6jZYA913pkMUSAoevqF8vaa3n",
  "key17": "22yPuc2pjfVGcyUiqMcGX97wVGzeUZn4PaKUHtxzLQmWrr9x8E99UYmQ4mWTickvMUoTMVgQ3smwKoAPdyRtpGfY",
  "key18": "5mZN3wyqsxkbgoYT4p52qWwxfu5puQV98zcgTdY2S1ZWY1Lcpn61eHWz5FPYbU6DaF6KyhMUNnhedaE7cE5HzcR3",
  "key19": "2dgaJEWLiNhZUciunxczrgbfZutPVZrFNyNj9cuBXHA87xUpM9eFhV7Mw13DKHSVaQBfALpVnUgwkbYPC84nVSoj",
  "key20": "2i5eLALaSua4SEAVRwycGWpQmJGkro7GAh9DKeSMG3f5goqeLL2RBNGMvY1jsprwVqoYwWGFigB7H5zh5pig3RQm",
  "key21": "3RVUmEMddhgAiCB3z1kBG1mTqmMbAJC76pTnHxZK4cUC9J6zqYEiyDBL5biGaFumPxGK8D1keThsGhbzG1gB2MPB",
  "key22": "5R3NpV8dzqTaC4vrDtwVVuBZ7AKi3HjwXgNav3uLdeEhKw3dgQwgpt6qR8RKwPt6qjcdZ8BkfCun27CJAcThLtPm",
  "key23": "4x1yXCUSiRxwe4yhkAvG9tMAJJbHSybL1tnGWewqicJiwbUHLp6ZiM3kuZFSrSsw56h7meENhirEV4PBNQTnsRtk",
  "key24": "4JPHPxVBhbwQudXGmG9nunYwmBhFfvhnfb4RGGNi4ZiToQFLowee8ViFKngdFaW8zBLVzRHrv21qgdqNkGxFR7ap",
  "key25": "dp6gP8U2Qp9bh3CKU12p5UHpcKCXnCQaQ4k3ompjncNchm5s1pfJnzFSG5LhuwBJh6rL4g733uAduVZzq4WkSFP",
  "key26": "xm23764kQq9mrFGCso5pXdd6wxJbb5GQTW4pwabz1xkmX1BJ87EDkbvQb9nzNRMQdG8iqC79in5E9uK2q3qQ4sd",
  "key27": "3gjgrGHXLzirfz1EcoXyKMHEh6kj99FDxKgYmNy5JRjJY4vhks5jQgjSUbwcVd3DgjGAiwTkrYXZw6w8wuWKZyUZ",
  "key28": "4Zr1uy8tKJpymyjF7WFCqAgJBy2KcEpDecBdSKjWPK7T7W19n8Xthxn3Nz4zDpewP5XNy2sdSfx5GDsGJ74VvEK2",
  "key29": "3HgLLRDyyjoYghL7EQsqhU1B5Bq546CytErzbzF6euD7w9GEmg3a1eAY4eBewnWoqo983dmUCK2b6CV7R7iG74nW",
  "key30": "Vzx3svGmGsH5FCCDxAxH6GaZRJMNWSSRHyh7UH6VvziMucVNcQMZU74Dinme1ub7nbDZdMxJKoHNc572XQzjvp6",
  "key31": "4FW5Jw8kdLzuuMWehWezgRdWdnWt791qtWVYSqCvrFno5GxQhbksfEbBJStkWNr7T8jt39eP7pGhd8HBFP5RqqyE",
  "key32": "2wLrQJbFUc9E97ZNXhTErwiDsLYRCoTYxAgfKVMurMgaTGdLxxBMXpkg7x4ydQdy6QZwN2YKPjB55mEdAWjyHgoR",
  "key33": "YRoasHhGDNMCSYNb77qPfZ3SLCBA26UJoLFEGtAqNsPMELmLzbTZ1yi2uc4fQipXvFoMZiYYni1Kjn7yiyxTH7b",
  "key34": "2SuL7mLp4wTQpz5pdeRQphxJL1qZT6AJUAzTjrQv3H4g96dFKM4rYCr9zt67Dg3qGdF916Lidj1yPvocN8GRjyS7",
  "key35": "27X6s3hg1KKj6kJH4grwMMnTizoV64RZ56ZQVzmXBRasnahFkSDb2AboEDN6LE4x67emSBYo4dtZ8X875aw7bonZ",
  "key36": "555Ab2Jy87E8ytxnAJsrgzDot6eaanGCTRHbCpsam8ngxJahRFmjCiumQCyR215J2ng1urVVS5UTDw7YTbB1hNtY",
  "key37": "3ruQnyZFeowAc5eMvRFTBaxzJYHhYKBFaLZLEb25UjxghJCUBQhBYdSyURezG8FuiZ1DezDWKqMkifLJ56MEn8M8",
  "key38": "4G1C1jqLw72AK4NRLiqKqqEpeEypEJYbdnH3QjJMffxo1JRdiKfc7ESS3UzBAKcH4RKtswDbE8ygV39HnPzXvQuh",
  "key39": "4Tp5HxQFwPq3jgDeqe3bwtWAjKKez7C9DYsPmXdtf5vv6d8hhifvLueGeru385VdH2WnbA1x26StUgU1pBFFXvWz",
  "key40": "22jtbKoxJGsr7LyaWoXPfEjeWp9fG6pQZjJsegCk69dW15xUxnEPSLqz1Xf9oKUEyy57DoU4rfaASL9sEAuwLdTt"
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
