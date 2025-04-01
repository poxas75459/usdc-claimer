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
    "5oSppip4Jaowz6rA3zSX2ZLTDbf74w153PKc33JcKM7SepmZnKPcJF6ycPGJ9BmVkLotS3sqb6MEDb1ueiPT7zjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bLLtBxKEZDomre4j4cWAt7HC5PoNLsvNUCAxK4LzKwwnj2DDnn96dD3nz7z1iNX2wihrdfdZPXDCKVjhargJ26D",
  "key1": "2FvS3vXZVAhFN5V6gYaseow6NtP7mPLWitCiPuGqsEoEt2jzaa3kqgRFtfCig9wq9C6v7R9N2Uhme7iURYkTsKCf",
  "key2": "2SuDn7E2aWquUXGirgHNUciUKsC6MyisJCsNFouTKG6vsbfe1ZVRAP4BhVdjAPo5S6Qq9XZaFrFw5oLYx7yfvwrR",
  "key3": "2S8LA2zMLSejYSLXAdUgMYAofWvykjPYLs7NAweTzvEZeKPXJqMr1rM37u8eMByVsM2fyYUMWxsHDapTCZVB1dvd",
  "key4": "3g2qXQPKsXsPngzRuePxHGFAnuScdPU3jhU18wgerGF9GE9jd49X1uonVtLay5NM8QRWEVr4mu73LDF398X11TbL",
  "key5": "256WnRT1V6hXDpKDM9yNEpwSJz3y5ZjnZuCtwqgm3nSckir47qrv7PywA7SL1Y1sYXkwzthKWTjs5vpx2vWM2qTq",
  "key6": "27LQx2wXqUdT8oE2aNqj5sRTNDV4dzhWPs7QuPnmCiyhLxfqY8oWUD5S3hZZJwN9a2rBWZZCMgEdstdsGLyuASe4",
  "key7": "2UJg1dvXfktL38xkaGTPr8qiPjy5nD8LtRgXs9onrrq41LBDeZbDvv1p3c1bUcxDgmp5odmQ39qeWG3fm2ppobtm",
  "key8": "3YQtVTq2cdUBXnHSe5DQGZef8KbXGyVWr8K7j7uBzMKgpcyAQ1wE8d63pokBE2ttMPgxR9Hkspcg1wMgX8GUEtQD",
  "key9": "3BaFFARSTEPrxDwn2ef9aMMvYeQXZM79vKCysBTEuogyLzfn5y6AqAYNpajWdkZUGJuMK3k9eudf8fuwqtiYrsWg",
  "key10": "3gUMZpPKTtAcAXpsQoDsPZRAuJKkeZFqTBABr2LaNvfMx594v3wkRtHHtagsxTdVNtjC8gpLPLn7sg1o3oBjnJwG",
  "key11": "4jNp73Uv6oSbNrX9SbPJZP3K1inqNUNuP7jsDCSVrhRbYYrv8pUvT6G57vPvbrRdzHv8Ubk8s5Ta5uH4tnK6P1Kq",
  "key12": "3nj41WQM1aURN1JSKzYqsQntxL77ninNRf8uokpdEEtNkLYRJubbRkhaNnziK7eTgR5gpaLHw5XuSPeV1zqrmVYn",
  "key13": "5Xisyo51gMM7MjXwvrCpuPHiDa13K1CsZTnHKuemqsqMp3TAV9uk62GJ3Jp7KwVvoLJWFk45aE5u1jQVYXX5oEaR",
  "key14": "5s6UNb7Jp14hw4qZvbRy7RiMiNYn2i7e1MrC8RRJwE1cwqGKcE7hVtyweVKZCFxZyfHjvkLL7axCWw5Rm2LVyRbm",
  "key15": "4frhf3pTZfD3h79o9uPP7pBepsP6bbVGiVzj2Tj4GEESyQ6e5oYTcrNZtyQTNw215v9ideRHT5P2kifbW3R8va88",
  "key16": "4LETzeTjZRnETm4PXX1n5fD8HrxTu1UPq2fjxaNNtBsGk5aCu1Vs76tPEGGjtzcyVFNG6yHaF7EEaix6ZSh4GPHu",
  "key17": "3ydYMav5QS7CA5YnyPUcz6mZ6JWBTaFEN4SmTNJJe34t7Pu4PrdkrRrgzggD7cbyLPCERrDA5RmJwwtjhTNVLqXS",
  "key18": "3TZWCuWrFh4KaVB6Lc25vHCYkDqqdHX8QiL84u2KueJG17mdpHJ59zuz2jk6g1httdNYEJnnMRkhFuozcUNRLCuq",
  "key19": "3HvgeDUmJKLZjQBKH66K3EhArEEqjDY8bsS5odwz7YiXDm18n3S1rReai1LuuuJXYUWA5hZ5p2wkUKT4iiLbYBYa",
  "key20": "5GBbqWMFZnBsK9xJQuf8ACNXgQuU9TSytS6P9E4knNKyVbcB3tv4gQN9323umeyFCACN4SGnWPiLpXJ6z2HRJBLC",
  "key21": "3pR2Y2SCYg2L1DzqHYRnkdn3LufugozBq9MfMEwneKD8RpNnaMamv2qTPHJpbQuXDti3RSFH2P6xMVxs85jnDDyo",
  "key22": "4Q8iJx9KVZCEVidHJmAM4wviWNHq8pNuuu6QyuVNayKzvz9Uh3wwFrWd2fLPs6BaVUPSQjw1XSe5QXHrYzzuHW2M",
  "key23": "KQbc3rX575BBUXSMa3JmC3ZVe4mcBGkhGpQK9gaTi96kyFsBXnXkT9Z6ASvzdy9MTY4jZkxi3x6mXjRQ8ayPBfN",
  "key24": "knfgB7kXb7ftpUo76xbzX4kzF2RmyUqWQuDkoJrJp6gk93H2x9BYm4AHoPZnvnWFAxJXUjfkKnK2oBaeysUWeqU",
  "key25": "4Ujy115Jchni4C3MQj88RRfDv3YK7Qfy3PnnVM7NwbXdsLZ7jsESkRmCynDFi5WBjBqGd1fzJLq3hT5wFD6DjdRj",
  "key26": "4uzgTUxJQvoKqt4gnCbdp3cwisfygNdfL2MesELDC8ffpdNyx8QbHqqSy1STQZqbjwHNTx1Jow9DSZgT4TiELTiF",
  "key27": "3D31i5h4Km2biKvAur7Z7r5bK1QosBiXRF8tiCFMEKmBeJt1F4dUTt1TqWUQDRD81UBi638zTqD6rRBpA4ghhaCF",
  "key28": "5ThLDEbz2nM4zMoNBbBkxM1XDnmRfiubyEQVxH2UVv2K666z4pNxF4MzBSJUgxdPueAeKBZeQfYZJA9FP6eaz34L",
  "key29": "4xzFfdxyXN2nBFark8kepnXWDnvww7dqdbS9eqY1Tvn8DFcTtyZX1gmDPouWMyNG2JhM3L29XkGJUK3NNp5npiis",
  "key30": "5DoThLbKEWQMnXVuPqdQdQxMJAUF67NCCmTbNCmQdeNi84VW4La9o8Gu5ZcjdktgTSgcVxjiPVU3gLtgAq44kBVD",
  "key31": "4UpWxdsrUJ94t5Thx6Jg4MnrJkJCTUfA1AdaSsRUZs6tbeVYtWedyBxHHy4hb7T7ZZnL2XJnXGScmRLFQcPGqCsZ",
  "key32": "BrywDn9URkNfV1xiiGrM1wKKZT1dQjHA7WZGM2M1iwiSBnw8XttsmTVjUA4SYbG9vKaMMqf1fi4hncfJLcxkxN5",
  "key33": "4pVCUK3YxUqCReJ2i4v1GS6ESaaAe2gPj4DPDPieknMT3TjYYCZ5srpV6j1Tia894vam92ZtutjC56DSNGh3dTtu",
  "key34": "22waQQ4JXnBgqEesGynbAAP9U2TkFPevupPEKaTa5KGSmVUj4MUyDYswgjqrdGCLZo46tuR5vGPyFr5kpkF6EyCj",
  "key35": "Uvej8oknNXUeCwUAsV19u5uDtzJsjSfRenp1GwzfcmCw5NEXVWvVgwP27ChXxBs1mjM5HjTp69XreCiqqZn4hQr",
  "key36": "5AQ3obLZ2mjN597GUSJcNrUV2Smo2qQobNBzLHr3BNoFB32wKZmFzGNeY8neX3UWrumokjDTuSD23mqMYr8qvBXN"
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
