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
    "2XTth3vSRSeRV3Qwigx5H4ae9AdveZoz3mFP8BFy4GXs1w2pjqziaP2xEGqmBbYiKpGtrpisD6tHsfLFidg5ygDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yjtkHJPiefBYsRh5MXNYa98v92PxRZ7hGUMeYYaa86zCggZVxqvnwCruPiKJpxKckNi2BQSX5k3MTXhaYb4jwys",
  "key1": "rfGu4JK4LcwJfGsDHWDuVJWPBLDkb6PKmusNNfXAp8pMrWWLrrvCb63AUTkyHFXneJ1fdy1meC1Rj51vNX4URtt",
  "key2": "2Wa9BZDg4w9tAb7KvcXB2kadGXytojPrPB1i4xp5nH13N9Q4DkSh8F7DxXpTkwckf2QjKCcnQRTaNWrAgEamwp8K",
  "key3": "RKpiqj9h2fcgGURfUGfUPNjSvYZXs67iFbW74ZMuEi3B979Sx2hHUM156aY5je5R1MoxTNhVLEboKNjZtK4X8eY",
  "key4": "o7dhaxnVLSV9R2DQCrMCcS8LvjX13X9oyDyU6UN3Y9uSXUawxscgcm8d5fxgk8hyoioKWb3zwVmNSQYCTgkF25o",
  "key5": "56wTdQscrADsWBjSGFLbn4Mi2yPnjfCyg5PQ6JyJKCpb2hmSz8Y34cxfUExakUakDNCAgQ8mM7xX1i66mBMtTUUi",
  "key6": "2Y9GbCgmJv7e5PqVjKVp7uXURU3nSniyD2sK31byWgwJTmHBViS7z2d7cEjsyTP5J3pagxBBCGqSXYCPN8AsHgNh",
  "key7": "4n9Qhw3uXVaaS3A1pWLcfqzwvH19QVXLGNPBkK5LXX5wNHrzHHsrDYunsoWPoWgWc3tHpFYRFCwq8CFk5LReXGsL",
  "key8": "3yv32GDwtnpWWqZofx5fCcikbb2guBLwoPDA26CnGs3AhJGbjEB4FvwKKavYPUEQxyChUbZnX8eKcBz5aYnW89Ky",
  "key9": "5f1r3JrBqtjmZcEcTV5cdHwa7dPMerSBt2k412ZyUR1rgjoqRbXXxQLQmAMEktqEH6vLvEQ4kQs6rtNfbzwzVdgm",
  "key10": "4ikRoWuVg8AXsES89wY5MgfbGLKsGUpbAeqbwYWtnKaqbdqAQ99p34DkKAYPsDSQinjYHeZ4giNkmav6UuSj1qyz",
  "key11": "yXxWYUA77wZRJZSEjHZVjwGZ5Mm8ch7XvvPCy1xRTv4te3Pn8QNnnJWhk9SfcrrfSNKXx9e8Whw2CoexyiqBoPc",
  "key12": "5PC6dZHBTwskCTwbVAwZ36nZqcpvk37eVt6JHtiQqGEjsYKs4UE8xVJEEWRFp1FveLbaf576ratuvwAynQdnKLdy",
  "key13": "48z7qiqnBJCNynumYgqg4nwC4ukLb5asJd16N7hWQag9XJoqr7Vwx3AJZL28Q6cbhqnZiZqECrA1xS1xiaHiiJtk",
  "key14": "25KArC54e3AMDyRx8BQc63co8zjKRuEwLPH8fc26dsY318abYgfhxo5GJfaffdvhmkvVqHuosN57ZBATKg3x6ZNq",
  "key15": "4qjiFUaSUSzpeu5Ebb8wRERa8vx7fjPu93cC9N1ZvXf1MDoLSyxChA4sbdsCFCG5ZeyoKCz2V8L7E2cc1dhuJzSC",
  "key16": "62jTjigA7EksqPyKAujtzrkiaX9iGYoHtmZJDGNpdFzQV9UhgGRbRfxViWnTSUkqvfXHKXUKorGuNLPkCNncovSb",
  "key17": "hspwD5187HWXcJP1AFm67b7Nbc6a1XfMFnGYhuK3UGKpvG5ds1ATRJHkHHSwC85m5nGYR46JpzGxxN2TkzcqBGr",
  "key18": "3gggdrzomsSBqkGPVb4cZZ9PTngd2NA8e28dRSbW52YRDktpaWEnTowGUqF39S7akEYVdETb2UjDeDVDAhpRMu5",
  "key19": "34wSsVuEBsP8K8JiNY2ppCtaYvzgA3yc9RbRTu4kXHuMXo97LpfmSSe2xNS9veSjDpF8Vdp5tQLp3WBsLPppmE4t",
  "key20": "4AJoHiw12shSwLcbzX4hYGGN4cBPWoDHdSzqeq56BpDhtgBur186exoMYS1P1sQRUJ1okEnbsvY1sxUGTw5LsvnL",
  "key21": "4p5dbXfoZk4zB3SV85NVq8kriRXzMevP1qdhkda8WLUsBQBC424hxGnihiPgBZEb6qhBmk5WNk3L9u2Rdz6tdHoo",
  "key22": "F66UQBNQJQ1EvE5zmywaTTapQa9XtWv6KUKkf7ALVLnoHCsRkwgAshvwwtzEnCfG2xQhSN26SiqrReb6j18MYh9",
  "key23": "3xqunKVPwa6zMWYqf1ZMJFuDPPyvnpYsQ4D92xjc5HxZmjLjM7NB5Lev5ATmTo49bQBW41r64SrgdLeKV1scg19B",
  "key24": "3y1wawXH1tvmAUmJx3aLvXmkaKKjaA6bYjMiNB8LZx81k4kVwqpvkKVci4ddHu3gpPBpNkY7fX1KwVA5jR422ybe",
  "key25": "3wYykRKiUkSVVynsQzDgbj3gcX3jEhuBVivsCV6jFXSoQR4JuUYhMEic6KFT9CN3PeGCGLoDmEKjZEitnnS4RbPZ",
  "key26": "392R6Z8xkPVRA3QG3PnkYBER9AsfPse22hMZhn2Mtf6wA8sbJXDGpgNXGq3JyXWtQuBFoaiNL37ZH25FXLZE8Ey8",
  "key27": "4DDk2TKk1ap21rakCrE5s1vQoi53ttptyySdqLdgQ4R1LKoevRzTAueFFzyVgaUCbsAFX3QxWSMc56K1YXveHcmo",
  "key28": "4S3F78cBMSxVAh5TScdvF1EAzXkDn5GdhHX1WvJcgxThjvejHQkdYhnEN16Pfue9fJQ8NJ1SwEqtV7mWgRqya8zS",
  "key29": "jpeopK7XGHZfBk9KQiWffEuD3Q7qov58Y3GaG91Q4vxm8UmqtefgxgSeuSUS1ZCpu6Si4oc7wKnaXYPaG9vViAU",
  "key30": "5EeMC1wkK6BhDhX9kM3QkyxcWVpeBeKbGCuQbMv592Bz57YbGgVRGB4jKsBcUDKeRzVrbQ8Chjvwah1o2n9QVD3e",
  "key31": "3BpskQwmc68to2H14R9A9CY7Y6rdhiSTmrimHzAZawSZxYooBZ1vfe6gMLXUFzRqMaXkkPVFkhkBUKUjCNYoFkdN",
  "key32": "4MiDXWUKPDeupU7nzLprwzu9q12rVSPLeBDtmFmci5tPunVnbLE6Hxie58hGj5vcbWvVd5jJiTSC8Vv3qxck652e",
  "key33": "41Q3FyofPaQFU4AwxkZheHLQmVtNMB21uQ8JbX7KyenShL6P7H3k3bu2jogxPnZFWtCm1AWQdcEiLpcarHmfinzL",
  "key34": "jLcwxNau9W2sTKSzvJTV5WL7BrQKtA1aRWY2hM1QnZspRKXC6dabZm4CctM4dwYckWv9eMDH7FiZdNsm87MwfBy",
  "key35": "4YVtjBZPKoFGRcpZBxjsA1HTEL5v7J91PyKG3APbqiJyd6NrrVsvbFbtWBgtS5D5LnMun14Ami57BmrEqLcUifhG",
  "key36": "2jy8fE3xG8DaF5tN15YDnQwwmea3pGFDkFw6h9YuZ28RjG5sdGNSeMim7dJeM81evxMBvNdDFAkgDaJy67SvfHay",
  "key37": "5i4LDnFm38RLRsGXLd95RLE5Px22EmHJZnxgjzURnqnnvNFEte8oTQJoJQLTCYdzA1fq1sWpJMf4rF3G2MM9UCeV"
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
