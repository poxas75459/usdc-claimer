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
    "4CSSt1RjgRJjA1g2xuvmShNQR99iAE8Rmf6PB8j4tcUUS5uAmXgALaZQfyhjKN7HngTSirkW3PfrFw4JB81c9Snt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47tCXGeVcsEKHmrYuDTz6aEXuQJMGAB5tkznYhQHhzTg5VSxQF9LW4zTaCywdMpQsawi8STny6Ua6Q5L2bYDo1ib",
  "key1": "5N3iq7X77tKuQojJy3QGznFARdaHixjUmKg1DEh7UMmqUYu2cBUQpP9qup7BMYruNiLf5KEmhkFLBiktQjA32uAz",
  "key2": "2iwkqRK3coCH1JixFcuZfrwNyFmTCGhUPoJXtWdpxCSMws6XgUQmSGP7MmiRiaBjVupWWD4uri2S1R6mLqWTJp8c",
  "key3": "8nzPVHxRqw2oqcFgQSpFiMXXPi6ECp4VXmjH6SQ1MWarJsu5FJ5QCyHKWHUERc6Xhaj7nrjBXcyy9NdPkL8jJYd",
  "key4": "36Ci8kWcqjiAYnAd3yGdGe6qEXd2TN9prTTm23DHdznPnUez7h8vQQmeZTk2AAjTU98BNzdqXypHttG2kgU8rSsF",
  "key5": "2ptn7Ja48qyXdzahkDad1kPsZck68j3vLGTNEPkgRFi4iQXKwwbBFPG11gHN2DdEyCJebRcYbbQJxHwuduXBx4eF",
  "key6": "3HdUUtpjatuzxyGb2M8oxy4gdwNc2WrsXiyyPTp36HAWvFfbkXchV9krsHpUkonAp62UnuxuvXPt1gBDotq1t3Kg",
  "key7": "ggQ4e7o924QhKGEv6CspbgpsCMPB9pwZ61QngGWbENPUUBKK5BBQRNanzhA9fQfYysaWhzscpJeP9sfo1fvLdS9",
  "key8": "3yKA1Drh8FBPxhdJF4dFXsULi1sJCZehhLnrnr2cu9vPWHJjBVPLVi4g1wAzaLmMSgRyXTjipduncA7UYUZU1Cio",
  "key9": "3ufbsbL68WGW8xrq7iDptd6x2N7HBA4uQ9Yw9NH7HaaTp6JvKejaqs3ptom7bt5Xz5pjvsGTKotzoCgWEX76YEDM",
  "key10": "5ecsFr312QY1zRnXaujiqiFH4z9vXW99dEbBenmWAZicnLSNkfthXHtQuipbMq1e9Bv77quRytFVZxf3ou3mfW5A",
  "key11": "CBB3DhGrJ94gsBsEDcjjoEJ85YhDYm67ive9H8U1QNUh84hP6htisCnFAADJPwrTTsBURRkJSsD8ZJ4MzUguuBp",
  "key12": "AyoL4ZqdGfJBqwKuTUoTekhjMXMo5HEshNjhQs4Bii4XeLf234WpLDjvYrPergzVk9PXw5kioGFxuRSAGpiDj51",
  "key13": "5eWu6mdRjCdEHBoRbwFWRXW94a4ZfvED8UQRF5Juz31KM9XSFQdo7hHHgNVNDBUCSZkfg3sFJ4SdRg4DyoBxivtY",
  "key14": "3qYto1d4iiBYbnQJxPxRb5vg2URTj4NwodiYEZy4hGyXhM7d3B3ojm9JgC4bXCB5hjsAhs9g4e5dJjgtC7RzFjpU",
  "key15": "4RUiABo2SHib54kGBiQCkHeubB5mimocHm4Hnd9vxDR4GvRF4fdXghM33AxBvoBR7Sp2TQ9Cf7SGVQVYc6qQdETd",
  "key16": "3txzRgQfADEoFgwBBDRa23oymqgeefesDXotvRdT78M3TePkvRiTkW2cbAFdSjhdM3ySUoxa1TZ6YdVybYkKgMn2",
  "key17": "q17taMs5UsXGeAciymFbfLPrFjqduMCSYiDQycPUqu3EPBGio8Ynp8obQajJjmp6EZhwKvvHwvDLHBErvrLUEFf",
  "key18": "3JUZYb9gvfZqspv2AAywAmYxPD3PpaiLtRRJp1atcNHxD7yGXv5fvbezmEdqqcschXak7uyn4aVfX7nR4ebcFTax",
  "key19": "55oKohycSKgG1BfmJi4QrjrKqzpTtRrJAT6dnVeshhLtzEwP5763UfrTEK2XhgJV7XMqm4jWzJTbiM31F8jYnWQ8",
  "key20": "5VZWRifVBJxi1QpjGGBuKDWne6BxToFiEK4GjsyS6WjjGHTTmcYYfRwCSGzLmgDEJqo7NNqLvZovqMR4YueCgoNi",
  "key21": "p8QUua3GfH6G4xTHfJ1dPX2xs5uPa8smaTSaQhEj1nDDVBsVoHxE987XHQAQWuK1KAL8hBqayYWB958do8DCfjF",
  "key22": "4ZJnUczWyDtgLXRKJBRVUsBsJaR16g6XqFKpxXQHL1p9THVhbNPQW3rYHyGjeXP2B2T66pXv1GEVUXGNvuZANEsd",
  "key23": "2CJTrXsR9Ng17HT7rCQSyiPzJF8TuAgxnboH1MB9GxiUNmUiMyH46yaZHhC6mLTL93JqVsfXchwicWKaiwHZERGG",
  "key24": "5HmsAQyPP2XsUhRgZ3yDjwqUCCpPhxyybkGkZiT4Z8ZQGtyetcshAwwa3TRdbWetNJjMN1UiRfwjXTf9bGbMuJ8e",
  "key25": "9VjkAdRYCHDpbu74p85edNcVHD11s7QATRXCoR9yLJxNLYKSmBjB8ucQKU9QePabG6dCcDpJWdn5nMohwVmN4Ye",
  "key26": "3C8aQnAFAZniZNHi2avGqS4HfAdAsPxi8NoBLcu1AETvQ5uiv3WTtpNTXmYdHP5FanTJHypBzoRgDSVyVm4nCGmc",
  "key27": "5WpPi1qgJfyp29LUfkbuskifNPGTmFt6j1FhT1AxAqp27wNtYvwvTrYZdKgQsnvKqGzDVBCfQ6W1hpkY7VLstm3h",
  "key28": "3nXyZ6G2eFQmyBP1SFEJHZNU1gX85eB37akut9FsnXfKdzyrXq3bYvBrT7FqMz5qbXQCscCTq8cReg6qSpL8Ukyi",
  "key29": "4Rq51BfWC7gfNFtme96SANmz825gEW6ejw6ghBWRySjoWJqmbQfHqPUbJ8K4NgCvmXHxxnNEwVruJd8MQLii2zgd",
  "key30": "zPqttAsGRUPhFXthUxWXa67NWsfnLAG71LmD7vxfpf8F6sqDdEHRxqpXy9r2K6gbrX3HwxjtTcP32iQrKrphasE",
  "key31": "4Aohn4gL9EbLKHfbTNYpMFtoreCAjwicDKreuRVqkWi3RS5anSrwfWRj4bDzy83wfUbqsYLMRcPMsm5sjJ7ntYrB",
  "key32": "CjeQ88hqpBHqvJ8R7qdFUHGL1UgojAhxMKwAPQ8EDZx8H6MchiSSGkTpr1V1kqmy4KDStaPuyHmdb1fp6xHLtZh",
  "key33": "4RCUTdYbNTUrBXnaEDdWdmRJLm9aSC1xqQgFTY6vc8pqiZBCmNJCfyrAbGx3XhbzbbWHUczgQ5gYNsYfWXFzu2K",
  "key34": "XXxoThJvHK7hVEsDKQyHSCuvi9zhiFWKHHPoAPGSXUBH7ZtFN69K24ESV7mAfJaxazwTgs1tAxTSHXjQAo4HwrN",
  "key35": "44vfZZFwxs7pTmxJ9GP1CepLfZ6tpSMq6n6FPRzvkbyBdjDqTVRZzrVCzr8zriWBZLkfeHq2vPAUFhwbDTopXGS9",
  "key36": "4GVZyKAfpX8cWnzXg7c5wp4Ne1ZFCqUHgi9fYijVj1Yaom6E2j1wih4PqA5GfUNYWMWom7mkCFj6ta6mUPzvFuRL",
  "key37": "2PcMS3AixJYVdNVkkjSs1yGon41dc7ThGsJduYzz9wsBZFNThc72pYqmsSrpc7SqHt2eBgbnTaH7JCUkVzndToqp",
  "key38": "3HM6Y2dKKfWeVibCQDqkwKSszEY2viJit2KYKPK2qvr2M92bBpSxdocJMN6aMUCcYcuEnLdr4p3XRQi2zKeTDvha",
  "key39": "2WcLzq8DFX6SeTwjp9XzBo9NY16d7AWu7xJjUdxTk3pxr2i6wPUw625a9YCybyqKf83R4cadsKhhrrqjnnaPw4As",
  "key40": "29PUEqa9h8VN8aQJvs2xCRyCmryYDvYFqoWMygQ8PMmv5mrKiJHJfEcyD1QmZnoffeVyhDoWmawDXcW2gPvbUZwh",
  "key41": "2zW7654cZqcapoQm2Tf9CEYVeefZDsc4A2uceDpbFdzcPFfJnWG8CdP4e4qTzUEEDPskgGactJCpovXhcVn6g9Kx",
  "key42": "kadu6GkTQvWCtM1zUUmHHNrLopvNPg3SyAcaPd4nVGifLefcEKEFv4vWG3DTwtQhLNt5rcVUs9AJNvmdoDxGPB7",
  "key43": "5rfMUgXB7dcrXtTRDRZzRbPm9cVHcmQddd66GRUWBCbbr8HvQqhrvpQkaAnb1SwFUG9KYmNkyUa8VyGwKdDsTfAM",
  "key44": "VYCAtgUkxAshPd4qJD7VPHHJUx64v5RWCX1U75rGyqskByUCgXDNk8APvgCc285ZBapU1h3fRmaLv5drBWaywvE",
  "key45": "5m2bqbPaY38yXkwcS9bSp5tCYShHxgi41gHWddKWWofw4sye2TE73HndCwuNyS3gdH8sDH8TMog23oTGksz1KtR3",
  "key46": "41i6qASK6cZQRwnjnhv9ZMrimLaJbwkJapfZNLMzFyDePZ6b1cRqg3X33qqbbdQZ8uicbEJuneh7oST4jhtPSwmJ",
  "key47": "5P2QWMLv8qVq4Gq8bg72Z8A3jF9ASEVjrAH7hXNFCzYBxWhQYAxK4quXFhbEXTJWv7nzZBX5zSmYuNTyNvsve9vt"
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
