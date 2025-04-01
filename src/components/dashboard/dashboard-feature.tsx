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
    "5fwcP9Yw2X9USJAu2hYTecjPcTZEBx97SS2ZJEz7TxCkvak7NzpPGzQTXzkYEseUPqHk8kU57YdMPLyGJN3jB7Ao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "teXiA3kHPmCsBdm5C2tp8pPbp5RwBy9CiTK3o7Rczag6CsPSFTwqoPnMWguzvxQaxB59Kqbeowc5EciNZGbHeAF",
  "key1": "51ZC2zR6hqNZTozq5e2PFBR1yMLJdTRHQzuh9gqeY88g5QqRTHVLrfrD8UW59JmYdVX37dZZwD5E2TfZ28sMoa6m",
  "key2": "5J7pRdavyJmSHRZf7p8YKLQpGPKrHMHBRChvUzkANt9MZGzcJ7U4tdu9oaXNZesahG6P8MvmsdSKvwDW8Q2RqnA1",
  "key3": "3UmEyfwjQ7mHXRJ3UHYmiVfZA5PYnyjpexAHiWz1dyoHi33kyYJvnziWHBBeNtXRC2azndvtMYbbkvck2DDJqmZv",
  "key4": "5tXG1WozdeKFkRvij6dBsBtuTaNKoECeQmsfGEm4K3HzpH3AL76DqGHYQxYd42p6xkCdgzU6sZkeU81oAYXxZcbc",
  "key5": "vPAAXyJNpknw8ukS3B1Q2scHVBmDz3jW1bmgMx2hgBXvdu4DvbamVLDWvYaRP2dYPyUDgqyv5Xo6XPszUTRLjig",
  "key6": "5Yoq8ZoBcb94oUCegLg6FUiuWh1T3rwt1NFFTyxLkMBjYtthvn7jcwW92hSUyd1o7rdsHMsWB7GeB4efgnQrYXCF",
  "key7": "4uh6o6JatMTHjSAMphDQZ8ohAvkhtxZGdNTwHpA3mxYe73FpfvFKt7m1s24hBVYVRzNhMbsfRNCg8D32oESMNRfM",
  "key8": "5MDwYNX1a6DRHZ1uWU2TEdRvZUrXvSBq4oUknZ2MYeAvzbbhrLkF1BZCRBhyLquFoDUFbwektnf8CvyKNUiwj5tA",
  "key9": "3R2mf44YVGB6fPDNiuNNDcm1aR1LuoveDT1TbBA38sGgsbFvQypJZ5kX7nEvNgYSMsEvT3AzJ2M4USxtobHJRCQg",
  "key10": "4Cz5Gtb6LvbttSs7muF1C2vMViYCzPSMqPhEM53othynP6Sy9SZyFmzBW9JNsHyzdpXNA2o2VXYp6itGSF4UkkfK",
  "key11": "3xeQQohmfptRNgLV5XAr9JFB8PhrzWyTDtosrn4eYGTcbrF2aKAGqANvQAXaUNQAyLZF1zfNjNpfaahLX3QJSLRj",
  "key12": "2EQvxCNq4MXyE2objHqtTRijKHd1mFofAovi9hMqreRsciQFEgqKhPDcNS7qDncdsxT8FeWwBr6wfoXPReuY5Gbz",
  "key13": "Yprofs5T79LVSEFcafwL9ADGiMT9ahyHEbZ4QdCsq3cEqXWPW79AbfLLZjvgXzaQ1egmZ8VXgaRZ1GD4NUmxHPb",
  "key14": "4DMrdYdmTFcXZG77QiJt5oECM88Kr92o9hNG6E1oxsgGLqATcTsnEbyuMePii6k37vfM1LimhPDZfdrfJAfqMRWm",
  "key15": "64mHDtWqEsSfgCDjqBd3pcfTy7Yieho1gxMT2EhcqpUwn7wR842jcMw6shg3rw64KpXEZve9uja4SSD4vu6mrwKj",
  "key16": "5o2amfDBr2qmaBKzSYhXEmwGr1KFfbLaPLajrXdxZuPrQu2DNn8CbCf1LBQnaR8rB2maS1r7e22XDeK6owQDSPL6",
  "key17": "mHa2dgFa58qX616xQ7xJojdMMcCR4zRstE5BCbmLJXSFc2fnGWSBigQWv7XKrkDgEANPULefXuBuW1n1e4irijm",
  "key18": "52yPayn69dhURc9sk32YTQ7WjBv9SryBmJA8vRJJ4KmorbshcPQfMgKcqPfD4ZWe47uoaPyWYYhfpCQmyB9PBX3C",
  "key19": "4vw38bDKExjJLAMGmFJo2sRLpgoFbza2ppGcpHB6t7Ly2K7JcsuNGAV815qEN4CK4JCaAJrC3f2MdfUw6PfN8uri",
  "key20": "2Dtrph244fjtXsLa5WMZJTv3QYnGUfR4Fgr7SbNdwXeC2xPyP6Ao6GmGHLKQGs6etLUNyTnMv19cMq439vjsXrDQ",
  "key21": "4sho6YcVVpyJhHkv8g67jyaNLiJk5Gy4fCbdfjN146v1AQhkNPb8hXnDbYBoej4UZpgASBg6JBNeGjw39EW1TmmG",
  "key22": "ei6EedLqKbqEyATBJoztdHPoKXMuSy3VDJnw8qvUEHiLaEqoGi6DCLVDmqrmYMmnLVRMPvHwMa5do5sgauTak49",
  "key23": "42v3QBDAKguWV8TxtLtYPGH6rnQHuZwzD3Ty8UQEeEdZ9hPhDvFLC7gTG5dRR2qxNYYzjJDZzB1CZuXzxp31K1oB",
  "key24": "57bKuRt3jdyfBj2paRBTSyjEWMtrWGPYmCQkfpdRkAC3hjNkVETr5fSNJ8jN1jKGd18mm68dtcqQ2VdRrmKpdukv",
  "key25": "uckWcXjYfYHqLBst8wJsE34Z5i4KWtVq6ZSGsadvW9bGVM5qPX7wAqhDxAbmk6wQq5cBkoRtwT39R6imLLbqLke",
  "key26": "3RY6ZCJSa345J43oDuHb9ZuGFqUmyTwK2hsVi14DZvMHj46tLVNa9aaJ6rc7ZQ2s7coJvxdu4VxzPtw5pDpfpH2",
  "key27": "4G6j2byiMNJQ16gQ4rKq7RQJ6JFW5fJDNYAo1nYBDAgEN1ciGaVxUtsv4PGmMRrWYN1pj8WYapiJEhyHrRwTyRZy",
  "key28": "2iCefdv3ew9Nfy3WxD84MkjeFUGp2uxzTe1NDxpiUncsoJpbekPbLmCX1AY7D2V3cLnNXA5JSQTV535RrFGLvDME",
  "key29": "4TqXKqMSM9NoATbidLX1KTNz8KXqQatGuQrYMWznZHMVtKrVuER5esTg5S2ox5ny3zMyS5K3jj3RXonoRkoMPjYK",
  "key30": "3STBEbxXhZ3nzENUSMXRGsabESnjVucDrR7XstMALUhEdZGPaoucED1u1oamdz49GBaTrfGa4mHVwuskmbyFidBV",
  "key31": "Hvoo4GqzML5mYXPB55vYoZr9FBUbGS3NAL5RMQsDKP5rATy8ZEJQA5NvCokGUeZtkZG7yBP92fojtmjD9qbPfiR",
  "key32": "21AcAYh8NHqTTCipuTihcfSDS2JbbJcJS3JMjJoyNYJiznvcXWMZ9rNdaZXNfx4GPsM9mkMXAkgn4U4Zx9gz17Rw",
  "key33": "5yj22gcTianvq3cGq4Fz2PYdue295c55Ymsch5ZYiQP6F2cZsKSMD7tHfdwCwEUU4WuaLLKDPrBtnQ42DcdEujK2",
  "key34": "3fdcj5dj49VCpoByYWdA6pZriLNFBfp5vQiKEcRoRzeai56N16pgG6SMyRcmJBAkHc2Emj4k25weqQFqCj1R8WGm",
  "key35": "4gMoqBjZDcF3Fy5wYUgs3fN3ocxh5gQm1awTsUpRSobPY4qn18EgdW7kezB7KnHQq5txCBvDemraJmw42hh88FvQ",
  "key36": "31oHbLTNLNoh6uE4BCZ3L4qBMCVmTp85gHxBz6HpDEQ5pMNRdDad6eKueVB92kQnL8ppWXxRWrPs4kVv9bxKfhzw",
  "key37": "2yAz5axj6CTjvTA9rx8Txx5pR4nXm7mig7pV5NCDAyCx7fi6UdsY1iCXoD3TVHqnXVFVujoQRWhT4GLe3f9B2bex",
  "key38": "4UJHJq2WGgk8AMwVZTbhHWPuJkK9J2bKCmktqxP9JvABy1ArBJaCYAgs1scZJvpc9tzZBipNgKmjge14zsziV2iw",
  "key39": "5qfVYhG5e1UMKVsqD7rmgEjRzbWesY1cXfqfeJrxXU2iCNw4dMKWR5ybEbpDXkCQxyBfhmSWs9yxc9oRipDokoDx",
  "key40": "3qm1QYp72XnoHhR3AogaXYLgDwELAvXebpJUBgdNUmadYKdGmwAzHCFLg7VWedFdyezdPKJDVrqvbPoCYeAumgCt",
  "key41": "2tKkRKp4YKCF2dMf1E8tsgLpX4mfk1vzbn3i3wSBPmqHUciUHrP6yVg8J6ZB6WJHtvt5DkaBF84eqCAxYzVYWxAK",
  "key42": "5TYtpsEhwuVEpQhUW7tTfUx2arXA6hci91WC3pqFxwDrTnhxVe8aaoM3Gc2RC39qgCaNdg3NJX3VWdSVrCvFBvHg",
  "key43": "3iydHNS98CG2kkoj6tCQVBB8BbkDnGSB2fhFjw9ddRXRWMsGYTSiqb5JfrTXeKA9p4W9m3irefDGbmX14jYpb3dS",
  "key44": "5fdXo1U7DGFY1AasFJgeKhXdnKVbZDinun7YDoZg49Xh8bvFtZS9sEhy54KbCGTiewnZd6ZTFZSUVWMcyKKCMGnB",
  "key45": "5j9VGZ8BDk5Y5HmrmABFCkwt4nEhN1fVMmqjW3jjZuiq2Houi155M4cGZJ3oXE2MRCbuCcx2f5wPgbhRdGY1zukr",
  "key46": "4zhgtauq5KXtvbWpF6m3A1CGfWzErzEC5mtWNJeZNjYeuiAxfJgSUgz9W9pgZheqg6WyxGsJ1k4GtVYed2zGsC32",
  "key47": "373veF14ybGvy77UxdLwBmGiZUgXPg6UjguPNoR9gmF1S1vDgM1rr4H3PiCqzyRkzWx9JiWTaWjpBNk8Ho2ZfKJM",
  "key48": "eLU1pPWNa9uGsknrcaChdtGC1UbwRoiTbJy5qMCLLFxGMr1XsaZc9rsjWQqfyvgB5CL2NL5j4ycdcQL3TkDZ7iA"
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
