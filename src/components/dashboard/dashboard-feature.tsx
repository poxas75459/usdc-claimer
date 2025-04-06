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
    "5CZ2FxNiKJG7euyrAGonGBMQ4qzHE2hqu3qST9zQkaFC74kqeGzYv8izbp2CcP7Ffy7UCcrXJKBGiGDZQ7mCwyyp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SPUomXXn8JaaF8LxaHUxCtKJsypHGQ4S15PKiDQY9csyzBjZ95sv3yrBwwzyvPtCYVym6bTvU7Y4GaSxsCYTWio",
  "key1": "2ThyYCxSQseL1XEwFwAP1w82NejdWp5qnzbdLtvcN5uDjrcCC4ZMQES3ef3cX5VX1YL4jFzN3rurSu9vPrsC45Tg",
  "key2": "5ekuaDAH7qHtfN629Uipj3ebXHxQyhWdD79Y33m7MD6GovcpLWEnzkdXL2TgwrUeFLiLaDpYtDZUbcVfvYbEagxZ",
  "key3": "5JeKkpghriD1VhB7ushNXzXnmYfC4Rt9w3TVuw2eLJucBFC1sr2iEEer5waBKU7wPJozCx13AP6LU4bUY3bTcfSk",
  "key4": "5m42BBdkDZ3SFZLVDwLcE7sSjtZzt72kujcRQHvqNwse9RFjVMsCHRV9SGXzJY21yAHWsvgHTwNdofF97XHB5bS2",
  "key5": "4ovKNbqR4gLG3ipGfeUmpRfY3SCoHBckZrAGhzMvXAUYRj9jijvKxabonrjE2C3MGdCamFmSnATYStc4x8NRdV4M",
  "key6": "2pjZEtvdrSY3JNQU7i5FGmGuT6LMLx5N4B33HWthxrQnDVL65DN39nKaQruYMPWHPgNT7RNTb3sBp4xWdXvwrrRJ",
  "key7": "5MWf6gQF2FW1Buvcmi2E73wLRmCVd4ykfbRqQLcDWHCyre7DjYnCBw1FSPfqo6b9fXPEpMAa64cf1po2cLVuRyiE",
  "key8": "2mCkBiCRakbW9aYmQHPKX8oyR285C66RyeYLSbmj2t54mqvor9CzdgHaadgzrMyLf6h3r3okLnpt2VpKe1NyYFMv",
  "key9": "DGb1JzVMVeUnZBFi9rDHYhVmDPDCbBMpPbiYQ4SEp3W4XxoPgwnyMaczyba4aiQ2cnMQxV1xQQBmjG5BmQdcQNX",
  "key10": "5pBdVqCQVRGUA6SBhVSJL4KyE4ARdD3opi6M2ukbrR6ZHToeoMdvtg7S1zJxLzs8UGP5FkbUfQJibcwffW4AKBUL",
  "key11": "KYfbAfLQ4tFH15gxY8ihdWww3oZcfGHinekzv5oVbY92KJJkckammtXVyJ3dfWHSxsZ1hDwKqGCRHrVrXS8XaP2",
  "key12": "2PxSSVdQrFwAXZGyR48UfjV7FeK1P1wUgFnsCQGvS8EyuJRuwTzhnmLgVj4r2m3JuaGnUU4Ej5MtWUKMGzSDovE4",
  "key13": "64UfSarSFcebrkkZGyHZTgLPvzpiWXEDCeRFLYQHQSA4kfu7Ac55Yr9wtQ2zU31twAphW2gYtGQR2UsLs7s1Bz7G",
  "key14": "XKEusUk1SnUCqroHmQstAnt6NKGu3pCAwgmfkzFgaaD1dM9xHYciH5ArVzVVe8TaexFDCWfuCtGQwdQ8etSjnQF",
  "key15": "8gre4z7AGdtncT99cTfPZAKC3BJ4B2xZgqbvMoziPjkrXdnggNrwTGDLMjEFiZ1psBZnck3p1GaTbZFbgiaaVwB",
  "key16": "5FwpqcMhftpJXeyPLcyYhFNWM1VergfyEC1EAz9LjRgYCx7LqfeWTBEJQxyoiNUzXg6Fhr689s3Q7tDPWDx2j5P7",
  "key17": "2rhWg6EcZQ8aKM3B7vZFCJHYFktXT5CqHt94Zrz5DYF2FMU5pJgtPoQhNo4kpfanAMNw6pbW46fMcDQ1oA2Nv1oD",
  "key18": "2Fkcn9KpVgWcNGRFHfNpbMFFkGMTSKTrV28fLwsu3YFKg1wu1GypGpEn5TZ6XkuqhiQ7oUmZozawDVtLvuAw6Dbm",
  "key19": "VzrKQ3RFkWajTtnfXoiUxGLSebGsJ8seJt8eHtqGQD2X88rpVgXoq8BEKuFtNNMRhdB5zXs8C6H7AhrhydyMY1i",
  "key20": "4CdM8FC5c48h6N3QATSdx2DzbK1fdXXG2QYjpTywVKGm3bsXfEuEoTUCqzygvi2Rjn7JCWitio52ThgnU1ukv8rp",
  "key21": "5MHstG6A7vWXycgSaYDDBN1zCE5d7edt5kFYxBz1GU5mVtSQ6RBKRXVvmHbZWgom8ut52Fu4CTo3UmQGnAD23yQa",
  "key22": "hc456AZxQyDXSLaL6x1UrJeaqzN2tfCd1rR6hQtEbpDJ7mFAGApUFDtdMNGrnhouHN1GhhTzpDFSwDMPzXiRaDE",
  "key23": "2STJUWRWrE5tdua17JQxHjpyuhXkK58ad34LHeJmJ3YQyiiNFSNRcw8J2AKgEsUy4bm4ANeLpVcw4CWfffwD8uMk",
  "key24": "4eHik7BSovyToEQLbt9E4LxqxRGUmb6yZcaM3z5eFqKQYigZjU2o1dgRHpCcwXA9xyHhr7P6Bdc7qEpPhrfjMgZv",
  "key25": "5CuZZiDcLBo1WbQzbg83gPhgkBuFJ9LAZf3eNUUzzhCQUjj7mSCzkvrj7VW1NyujaH9CWN8Ki31bCdhXpKgtQwj6",
  "key26": "3weuMryM8fZj8ZNSoPqhC1xaV4uiGowYRqp7mHWrDDqveWceSzB5zRaHLzfDsGAsjY78PCx1sUko73jNbXmbiF3z",
  "key27": "V247xnSTJrsKAoqZwsrsmk1CkJUZvWiWbk5MX2QiFLtw6NLTjyCWV1YnZzPfGjEuTQ7nUrzHaMLCbSJd5YivWZU",
  "key28": "23AEBTQVHmuEEZUdXbwRLbzCWp5JyDiUWhJwPJfmr5YvDCMzLFxFdwms2Ytd5VsfbSnDmSnpqpDgL3RF9gVV7TYK",
  "key29": "btrsRs72JhiPFDKtSRE647wDcvaP8GdPE1Xg5BcKkqfrKZcywRfWi4kMCJzMuv1cH7QGCEKMfx19RMJPnYcRJmo",
  "key30": "5Xi9y2T4CGDHPiLEAFtpV1oD5DQmxabbhoZ3vqEJRaC5P4DKH4ezeQDsQyEbricXMjiaPnJqqv6CwV4JBfZb7Ggb",
  "key31": "2hUmSSfF4MDQq65P2jzH9pegSd94TA2ysMxEiBrFRc67y36Eyqxq3ZggSdsuV2AiqkywAd9NB5ttBN9EkGP2m1ez",
  "key32": "turBCrwW85mJcNLtYVy9CHGkHtPKNswNh6KmNeEU8nqYXLjkonw7gP6uxVt1Y9fGN1U51afW2zxdhv4MZ6X4Bk2",
  "key33": "5WrXySYGXBuWr4m9vNCjPU7HCnz3q88ZU48R77hCNDLz24H2gvSUYExuW5jWSFtAH5zYB32ZgoZGmkHtUiHvXpKF",
  "key34": "5bGEFfHoqPy4ByhYVWJSS96qhQV8zSoQfELft9h9fNmceriAjiWxmMWyR9ZYFTiGPNWEwkmm4HmcGzHWPA7b7vbo",
  "key35": "2zpjjVCxqRzyF4kVNyXW7RFSNyPAxGLUGB2gKwrLPebCGr1cqgNnKZZxChFRZkAkGTnNTH3rRCevjTPM8XjwynRu",
  "key36": "3waFuc6jCSYKSxMgZukPH2gtVsuxhuewU9ZAhYBTx5U9BxT57BCjQk6Qc1kZprNESALcoJXEunNprHHfn51VKJ2e",
  "key37": "no23ik6DYofqcTQq7ttRrk5w31mTuiXrzb7sWxoRoa95KKYJmBnXURY4qLGU9pgVswsDkmd6oUDrExup5XLwLQb",
  "key38": "59bvwwnpo7kZFn3Uq5fUBnZuWZpyrAu37U6ptjvzzJ6JrbN3mvapFt3qZMgmqCiWdCt6qHmsxeSgTUCos2x6n2VZ"
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
