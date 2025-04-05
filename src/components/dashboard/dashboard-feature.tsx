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
    "2Cg7StBvzWJGfMe8UpW1rXJZVJx5MT8pwKfJLXH74YyiauF9WpiBgn943EqEEF6P7A1Mkg5VSSEH9H87iamJLTV1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kgTjuXC5hfr53UJBP51RM25mSADfCWkZyBkRxAACnHXo1MnDk1ahhHG6cTH8fQa1yVFHn32DKia7QY7rDF17dNk",
  "key1": "2WDbPwhVfZaa35mcupRxmk3v1Vf8UKpYDtGuHsdcEZBEkrU4ym3xyapFCDptd1ES4sZkxXYp7rJ8sfydNY3wNM2L",
  "key2": "2bra6GXaNzP8Upn3uvMY9YpyunjgJZX31YideRRoGFxebmNC6LDjcWY2Y4vo2aTfSWK4MvWEoNmWjp5TcHNvsFhp",
  "key3": "2RAokNKs48MLBCidmFKJeHgbwa9Wi6W4vyCqz9pM1t3fUtRyotX8YmBL9NzdTdSHHcwyDuMyR5CgYDGqAFFgR2Ub",
  "key4": "3ipRVgH6uF8RW7goJvFYLxKeYrQG18pJJdsVSDtEHT9aJQ6Hz51d9JjWsjF31FAndkJiqH9q9HpQ3U45rSGXcfGG",
  "key5": "3C2KJRXvNt7r2oddGbzLXFvutRBjjC6bxicKEKHg7ArrTB42SeQN3f6dHVNqMDgs1og3241rXbYYvGWEPJpvHk4",
  "key6": "5arKw11LCMx9wgbUvfoadPHUeiC87DTmRqWwx3P2nFGjLeBxKzLq61j1P4fSgFwf4tFH15WBR99dvaf6p8Q6pTv1",
  "key7": "2kwJVqLJ5GoiADYuhAJwAHaGiSh7xu1JiggEKGLQJK2rvLtup2dy4NrRv1oQRBxD3qQR4YmG1naA3F8B7BSV4HBP",
  "key8": "2AVMhcXDyG4nMTD6CujwjoUJizhimEsJVX94TFYY7ykP1gpr1c1Z3wTqj1TB2xWRGCEeJUpCTijVHTa6mmvM4UQs",
  "key9": "45pHvsJ36y6BBraScFH86qDeYsCKCz6RVw3q3k7jFZiLerCBRfw4UtFo6vzN9bmLu7FJxuWLEo5v5K7VH4AztqrM",
  "key10": "3Kd94FrWJm9iLGoviPpXkpa7QbgJ6EmEoeraGVFL3kEJvdJj3wti7wKNkDjp3mcBQ6u1UZhgTQPMJejZ1oXUjUig",
  "key11": "cfaPLyyhwUBnx1hRKYCghtuNikxxs9LjxHJAZTCdFTR874Nqw5pKDWHNgDrw6PPTAPe6v4hgAN8DPLY84b7SA2U",
  "key12": "5Aw1HcJmNsR2N5PJbamHU92gKkFmrUAckLAVfMqqBYuFzxt47zg1G54xfuAdkXaxrRtF9LEeX9BzLKFM8mAra8ed",
  "key13": "3RMEWbL8udfSbH1GgABtxtE7kvMqws1s9RfHm7cFs4QoN6MAN4nkaY78VUhaF4m47mwTHsisFCibt4zCatwy1335",
  "key14": "53UH9WQ2U719J9JQF7equadvJPSk3biLtX73MJy4BSFv7ipGSRcjHcwfxoK4Yh1n4AhUw3HAcDSVPiCTMt1JTQs8",
  "key15": "42MaDbYm44FtGa4dwk8RU7kqGsDr7xQEPyjDbkBGjPhuUZajzsprTNY4z5k3RChVEGBR6vuKjUa77Y4v4eCyxTbW",
  "key16": "5Fe6AusAdPaby3mnCdkyCron8njMpoyowwA86ogfT9mbs9LvsyFCKUfUxxvr2E6N7fviDRiDBVwTFjAKMXFWytZo",
  "key17": "2gCeQWhEm6nFnvmeTo8viMKJ4rCZh8DPr3eiqMC3fg4f7xoMpzrZaS7PpJPM8LVNJrrTie9hKLfV98UZ9diLc5ED",
  "key18": "fytKbZnWg6wRYjk5zoCbuB6sjPTU82nbW21bhG1KkMWWXt5F2dECACMiPZ8D6mYv1Fc13Q4KF9Adbrvt7T2owNk",
  "key19": "2Xm81yPiBAmhMVRqGnE6jeUYaSSerEvjawTNWr2A7x3DHW9ULYNv8TyJ76vkWrFqxjJFZeMYPBs1WRiHnRYPvFRY",
  "key20": "3g1R1SyKHWp1KK5ChHG5RqaRJWEVmWPWawrwYjMj9nxBAv2GmEjVshJgvo8CuMpKHEbowGdofoEsAU57QGcAyZ9v",
  "key21": "4VQedHWbqPh3UiHaw7Lo1XrFqTp4r7nQ6TkNe1EmiYxTCi3TfYHagjJAqZEDtG4e8TbfnKxvLZHSZ9ySFFwYEWsR",
  "key22": "3cHgHCih4h8hRdNZUigCg8UUzuh9Kdk6YqjkeUb1efHxLYgrRe6TMis1xgMYK8UmfhNbozTZXPBkJ2356YLBW8xy",
  "key23": "5LbMYXpEvZqD1peDzUPMWNZCdo4psacGwsRU1EqLuDCRCgnJQbUYRfrRYND8aJ2Wqsg1KNV3qwcyMDrHduUWr3bn",
  "key24": "42Qz8E2naP1RFCeaapNuRZopxCNGu9XMzbEGLJxKikUygvoiCsazC7QE3C69oodhzu29mYts57HuTTtiVfz1dPXP",
  "key25": "4p1YYHUV81CQa7GrwuSM9EtcaksWVWRwU3RWQ9F8wRD7MqXice4Ku7Xjr9ec6ENtqcWCtcSTbKNUurCz6aVZEuPR",
  "key26": "2fxCwgbC3ojWzVBBNFRzSV8dME3HiyXiNXFeWanCXDcofZCSrc7Aud17t3hWYRS6tRw226mcQq8SX4T5FbHtCz1r",
  "key27": "pzdb2s75abNbWLNU2XqGBj9KG9QuuFqdF7MZ3PKAx2TfNNHfZcomhGFg45SfzaeW8Uj5qf4DcbaiML1TssSx3bi",
  "key28": "2H224QTZTxPkyqGqwqKBX9X8r8voc33MFbThBqDxoCtexQ9rr9EyZjdq2QVCLve7H8cER6ZYmKQr4VapZYxV2Hxc",
  "key29": "5DzY2u8ZiRFWmNscJAuQznmFCVStrwzdWzFg2fwgN5anZezAkiAPuKoAMdkufX9A6aYJq7hnqbabqKepfbueqHUF",
  "key30": "2iQAvsBxRKvc23GC8qj4y8qfhQhQ7MqiaXumxo6TrrSpWEv4mhb7NtU6nuhzFa6egY4tLkgzxjGEKPJZgykUM1ic",
  "key31": "Q3MSCm6szFSA7sqWPsG6BybDjDe3ZRBFCGWvSrVo6rroS1eSL5eoZTB3TQpQs116w6y7dZoimqWSdU6yqkBHZPs",
  "key32": "4u544Tj9M8PWxUTQks4dm5CWwJb4B7BF7aUS4JpGSgSdgkYSkk6JEsoTaEfxDpYyE9LQJVJ8uUukFGgxXWW9rmhz",
  "key33": "5UfxKybj6izN1BwxCsZMQUmZ5P8a1ySou34D9eH4DJkH5NW13ahLr9BK8dtM4aKZoaHFyWrQWKLTRPJ7kyKFpQB7",
  "key34": "5W1C68dU2ZRgeRLeGHDekngCG1bmh3KVNS9ZsoAuPpTPJPcsKPc2K7kV6f3cSS5Z84exPcXjQ59xokpGsKY3d2Xn",
  "key35": "5pWzro4QfUHMdYgbRFfNmtaJ2EbYATUBYSZnGVJs6gn93LfmhoiEnUT79hVp3WyGDy375iMUx213oFjD3NGW1rsh",
  "key36": "4AjULj5t6UywUJstQdmjvFX57pUW5MRdtM8u6PYTquwAQdnLbvxCLPbHCiqHTZNyQY9iPyek2hhR8kdvPumxnb5o"
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
