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
    "2wAWRp51gTjv2eks6mZ7TRQUokHrsmB4FYgRJ8pVqsm2VXirnLMdQ5UAsz4wLaRfhu2yy3TEeWusToy3cN3eBKG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34WsXg6qyH5iPJ8Ji4fhSRD9D16RjJZABG7pT7mL7Mk1caP9HiR4nP91KMxNqhbD5GMCisHw7FY8xLcW9kVZuvGM",
  "key1": "52EdyZkTZ1SJsTUWsJpNagCVrWxjVvnCdzgqawxzSAPXyq5okAuySokojv9tfb5atMuawWHFmw39icBE8DtFfqNi",
  "key2": "57MagKjnrp9U85jrbTzQvqETZF7seN2ckx7fTugcFesNKQdzDsXK86eVddZv2TwceseY45u1WLw4WVsLy5HoXcjv",
  "key3": "21iqzMTFC6YiHpd4SJ2E6BYnS27etFrhY2HtYTdsNNoUrGQyuWBtjoJHszYSDwiCB3etF2ypCbZCVyPoZJFH4rFv",
  "key4": "3xKhLoTSD7xgMU839CHh3gPRR3KG314UgRSgB1mtWRdDyYXWpNu4saEfZ9djtNPe7bPpqdDDgF3vPzMowmPG1MmT",
  "key5": "yitRFEDCLyzWndB8bUcfx9AQC76hkqTMQLGnM2foFZFV5Hxf7yL5UhZxTzYP4jEQFy1naH4uDUFrofuQX4KsPH3",
  "key6": "3xBS9EaJxBknz5aBw2mKGhCT65Zt7KUftuK9Da5E7Z9JrJJ9JD43r5HfvKvmCdwNi28Hzdz3VjzWuSakhiPWrMJj",
  "key7": "34DRgnDyHWQwwuPgmS2W3j4HTtHfjrbr3ioh9zihW6VjGHoQtbcu4Vek23TbX5GXNQvY1Cr5aRwkGZ7SDq2Cijsg",
  "key8": "3iNdH6QU7tW6JzKhwY1AQBHtqCVyuZg9devQPsFweVfPkx2rLyXgTWxTRwzBCd36dPsgodoHfRQD744u36WuDojk",
  "key9": "kCpnf4Pbk4q6WuAQcWx6zwkRBXonj7HWRzj9FiUUDzixdXZzjg5yDZsgkuC1VX9kywk43dkEGivfdiQS6c6EK5J",
  "key10": "3Bh9zHJVq3otRhxdwFGiz5G772qTeP5ChPkGyq85tjy7gwcFgyaEQmFU8n4meF2JTCC2w2iqQvcn9fZkULj9mvEu",
  "key11": "gDCvC1AXyUud9hK9Pwgbta7wrdf1yLVJBuisRnxqPu5W5D56YowTGfDrZgUMATBX7yPKfySi9BCYVdoUK5dQUFP",
  "key12": "62MYXiNg4xAMxnTcBEtWkd55q8B67eGxfw8YkV5G7t2izSRoMUjmEJczz957npXYzmpLmoeByo9cwE7C3HKAn59x",
  "key13": "34UifGugKnkuKDkYGTYu1inMCzS8K2J1PvAGHjnwnn43H3nkLZGhsA2v5V94kKubs3zcxDTMoXB2EVYyqQLAdjCZ",
  "key14": "5irviLShF88ZHtEEzyT4aa6Zwaif6PQPUQReYpmqZs1xFrDbhEkDKMJjoeroEfRNHM3L3tp3mnTVYScps9utZkQH",
  "key15": "3iVT9QGSoggtaEvgbKestL4SxBbKZZiwoNhUYY8kNa34GpM5HdkYCG9oxXoqNW2Wm8G9zSCE2Vyuvm8s1HuUHvVi",
  "key16": "44ywtYf2pHSiR6JDAUTEvWgxpsxia9a5aLY9AxZqpZyfAMdrQ2DNDC4dpTyv26Mhs1tkNGjVSPeq4YzkNPjT2due",
  "key17": "4akTiYyyhLxnGURHeUg1UUjaTe4aef1wByUEk8Z3iiszRvv7QhC1aKnF2KKoBGeRQepJAdyYpTkgVREsAxLb96CE",
  "key18": "kVte8jer3RSbfyarho43cXzLuH8VjiNVJRQtkvkX2zjsWG1NwXTqTQTTgy1YbdsUi5mkNP7idtTqaQ43N6BNFMQ",
  "key19": "s6azgX3CZbtZyepTtpud8rjsRgpz79XMdipBao86oHvGBqB5ZeaUmYc5QKQhckPq7yLA8KkekfxsCKsMmLY2iMb",
  "key20": "55E4gAjsePbXrQzGvSpEM9BxzAzJRnnvghjVTdHhRLgfsLgN7sThKGnMuZmZjM5MACB2reUVjBDn9XqX7cBUkbuf",
  "key21": "2kkNsssnogB28DCgoR7iUWu9fVBnTJetLHLAAayvYE7ygNbx5Xg1kZv2c9yWXnQGVSjieU8Dj66AqYmvdkVL2acV",
  "key22": "3ji1U5Z2RRUWboYmvdvsNRmpe1ZiacG6mqAWRJRrMf5Mb2LzX2QpqmYz3PjuQXbaDqP6wcoukHNEoZx9rkMCqmLL",
  "key23": "5xFMBhUkUu9nHa5PHMapZuqHNreEcwMfraHTytozXn6LQcoF6Uv8K5vxVY1LmrBwgzf1n6Mka2nKVJjPPJTGTut6",
  "key24": "5yuzF7Sp6fc3Bjy8u3MpXyRanvUFWXzB2J7Eg4x8mk7robKC6tkwdFZN7dVbcFKjNsmvWksjdUkZiSvrsfpo8Dmu",
  "key25": "5JNWJjAqAGBBViy7ckxgn5HmKvzdeQHie4AmbYpBs8qnU8eZdjFApHxuLUuVGd42Gciebvh6bEm129vwQC3X3p84",
  "key26": "324qpTmcNqaj7LENU7DwCtVu9KR6dT2TZpg2tp46JmBFfWemERTRprPkritiVywGuo6GpUxVpoi5Uo1qXcmKWCWu",
  "key27": "36KDiu5EiKKEmh8uB9ZuxdY1y48mdjxnkZeyWryBWGGLGna7r1iKVpbcH4xFmtDiXw6EA8KyaYE71pG5JSHb976V",
  "key28": "3q88T5EUBH2ZFW5Lch6jvhx9dbTyfJFfqGjYy3Pi6w2VBVWcQTWAAwEEcrSHsr9F4foa4DS3sq9K6Fny5pf5gJ53",
  "key29": "irmMcCKwmnakxmc99Kk5Hrtz6HQ6ZixLioA25dHmDp2DGaY1YGAeADtnKciVSYypFzjJMkd2QeVZNTaYi6ugWBx",
  "key30": "56hsPajtfrXQn8C2vYv1HLiUnH25qjyvDpvEEsksi85NirKkb3wsMFDGcEx65rncGiFy39Kz4bUER5buR86o9dWM",
  "key31": "4YWMgSDtsrh8cJUr8X6wMUbYC8ARmUNJK1A7bD13KDBvCULePBiaVJVTEF3tiGXgspsmWgZ18aMrFB8BN4uCTL74",
  "key32": "4vDhAFxTpNqHVQHJc8Us3mi5rsQcdwVF6SXSsyG7nPwspewUef6Un9fN6mwAon85JM59apWnYfCdEhjvpT4FvgdL",
  "key33": "3xPetAy8aQ3ozPWowVzjZgaRPQHgt3yiiuiFxygwgEx7ZU5bLsutYmHv6j7zwjp5dAcmkToZwv5MQgygW7iZfD96",
  "key34": "1khDD6V2QKvFK5V5oEoYTwpnShrnp1wptNwP7W6FrhSbAd7NTyZtaPAUaHZL2yMkUarDS5uQMaPSJsac9cq6CQF",
  "key35": "JxbbyDodRu6iu7sjNW7x4Jb57Do44EEdwvXijA8HWP1VfqeTUfTje2ZgDiavN3BmrSwpVhhgy11zy7MiKT4hU5Q",
  "key36": "2Eas4XgTxJaM2QqFYBFBpsLEE8CvQfWhrTUbPhUcNwFtJftjX6xmnCAH6ZSa7W5xk9NZWnqwr7xUYnH2RFYGkBy6",
  "key37": "23WMvvCQCG7BtG3vJJgyD8jBNcgdYxG1BeUgf7annyjPQwigWrqPgAYK1pvKckthDMWxbzyEjjAnq4piAhugqvm6",
  "key38": "3i9rQvxgw2aHUTNAukpJeUUqwUNo5nzRmWFdnYrZAFTDSbtosc2DvzCgt8QLeHjiLASeyuYQGmLtLx5XSMnTAqLC",
  "key39": "64VgFrvape75RHxXKvVdsokdzx8pqCwY2NwLYrUEpwr51ZBthkbdkhBhCT71sDHzvokzcfXDf8HW8LjbKGBGktQJ",
  "key40": "2aqbVdxx4WachsjaieXc2pNfNnzCCe1HoQz8bAU1S7qUmJRXHH2jUJxwcY5FLWx7dQYT5Wco8rj36zWncngGMupP",
  "key41": "3BYD1pL1Y9c8eu6nffLTTnomjbFruNzDiqLX921QoUAUtjL5DCGdubrjgQuzyCUeDHSXGGxPbjvx6pdBfqkqVMvy",
  "key42": "3QzjBvWN3tze9sqk42H37fVDHRPpN4Cm9vqjDh83Dyn3j9JnDBXXmHmHbqSbMW4TufPXZrjbSvgqBArMceYETpnz",
  "key43": "65D6oYt75HdmHqPGgSwgQ7hbmuySVhUpjXicYrbSUHJDbAiJcfzNQGG3AGrFBKX9se4ixAHAH9j5V27BYnqXjujA",
  "key44": "YqHNw4ChMP8Wk3LDAVebEDRHZD6wQQXKCMuLhQ9vQLndmSms3WUL9Ghcq7BGyadQyQKpRfSvrngB5TmLNHDk5nT",
  "key45": "2QEzUP3uEv49om3azW9eJFtxvh9JaaA3qRWsfCkvdugiFQJNBCqFzEbRfUxZ7iAMq8UWCEpk2E7bkQ5sekN4erLv",
  "key46": "2hfRGbuNPPkVvKN512Qfaa5CeSNMnKC5mvCMmc5FPRUaLPn3n27xeL1DSjwZ5RegyMYmvhP8WAvhLueUAUUbz85M",
  "key47": "47eTUA1KJNiq6AAs5LjySuxWaQSjGzM367p2T85jD14b5yFq6wQBcGtH66nUFTWgw9TVn4q6WvmYUwe42TSeYo6B",
  "key48": "4qtMw586nz3y9vbBPTymJyQVGujmh4LUJqqopbLKt5yCKxSK3YD6oihKQUzPFBCMzBjEGbRUN6Fk74arkHVBtXSw"
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
