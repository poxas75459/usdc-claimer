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
    "5TPdRpbcbR3q4zV7Qmc5xkLHh8c2yL319RtsbKBAGSU522odwUm4UEzzbqDNkqUNsPSE3PPW7yMdymwY9yhgXhSD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WbbAdsV56WgKsMZAxLSY9mThYNjJRoFapTeGP5UN9aJmzN4RhJaq8d6cPaNAUZuokfFr5U5KvmErLWykVMLQWbG",
  "key1": "3CGb6qBqGb1WKQCbw3XcUjLaVhjURV7K4268gFe6DYV1uRGbBGbgtyrHE6Jy4jazXpCiEAaTtfGaf5dJtSsWdKkd",
  "key2": "58mWFmbMC4waacSzDVL2o2HsZY5BEkcAn96npbBwaVPrJrFeWKPeCVzEn39X9fceMvGy5d5hWN6t4ZxkrcZvpssd",
  "key3": "3ELgSzzCAsJ2CvnnuyoPfkhHX3LFL1UjMxCqivtoquPhseygTrrWQQmyfS35ZqRdPdQuUTzj7NKpPSj9JcEHfCes",
  "key4": "2YgbmwP249i8BFLgVKraDKB9NXNh5Z9Rw7NxWrA3gLWGwtx1Y5LZZpLCgEwUQE1jggf6hqvwxNmsjtv967nbimdD",
  "key5": "5Wg22gue6vpAffDnyAaH1ofVqwKPy2cNY9PA5YZyCzX8jMU6zgSHfgnoRYaBCUXKpqJiivA44KhbEoDA5feQphAd",
  "key6": "4YTYtJFnG5tDjPegC3kbPC3r2VL3pnYhfsiFzykmiJW3E6tUPtN4Yk7r1cJpsiajF8AzUytN5EfXFRkYWrpzKSM6",
  "key7": "BHRQMYkvbE1Hyh6vA1BxwH1QSN3i4p1MWAdQ1pT7oH9hux5cPg86Uyym81WhHFamGW5iGNxirbUM4RQFZxihvmd",
  "key8": "3tWfVijFFyk98NjvkzGawfrYs4vHvdqL5cZoF3epRLzLC5LGYvMNyfU5hefqt4RECG8cgf4U5KZjNZqKqwhD3Bzq",
  "key9": "33VtHyHYwVmWtSSygm2Hywkm1nG2uqKzG71UznQcH9mKVNiVT5357xs3qgbeEGxgr4dUSCRcNFEW5hNh4uLzMftH",
  "key10": "28BLRaUzdx1VEYQVDD2SqiMUZqj1k1np1qNCgqNRNZrqsp4XVYYq5qAzpiLvDiUepymdt7v5vJp2ZwnbL7XzsyDY",
  "key11": "3omQWTq4S8FAwXeQfUhvBUKHRhieDYiknwiopfgNWkK7CFWTbqr86kvpP4BxEoFmdQfUctcrhYxwsYDzB1QeYrGz",
  "key12": "5DFpUiJVQduMyJr5VM8HrnezqVgdntXaoTFtBbFsrjpF1FBfPweUUNi3mpLKd2ZgqWu3qrUsMnGKxfb4ke6fLV7s",
  "key13": "2adtqYwWPVPohXuCWumh5mKZyyS2y28jgUFHA487p7Y1bi4PCqnBX1uwpCrj6TjShH9XEwJJ3Jf3So1NgQzKjVE",
  "key14": "5C3a3uHVW1Vgxg3mV9S9yzFfVciQdPKDH1hCatDg1zQvpnSo7gH9UG2nZT7EXWbEH4JcSm95NJxqkD9MPca6n4a1",
  "key15": "4svSv7MerzxkaX3N4AnxhFeN1DQop77xxTKSmk9jB4nnFm1X8F6ceUhnfy6njwChZWnb3C1Ft7SxD94x4zGLfqDm",
  "key16": "64MRS6ueGgA3t2C2pXdFybTwiRY24oFBqCEzp1Cy1Jo2Xinwd7FjtGpbVVcBQqjd6xv7mnumtdW6EAzjA2e7fHTR",
  "key17": "5MRfGt1UWjwNuBsX3eaY3yRYqdUwaiDL8qnDRddterSMbfcuBr9qJtwyRq3ThvuAzTL6Vn5K3PSqwqHqENRp7kcQ",
  "key18": "2GGorVv6MNF4yx1ANGNQomuGoR4xuEZ6ahX2m3G7AmZoauKBjbkjawqnoAD574bzQXqQ8w3qGHGbgmE8UvumeEY5",
  "key19": "49ghzxqnrmT4GQTXRWaB77cNFyyebqZK5p33DwH2d1o6yNctJbRvW6dsYgjCZRYsESqvK4oHLw5Mb4ympkZ3LUrH",
  "key20": "x4R96E2LQqz4uRH55oadiLWHVjaFapvjCQHzHyQP7WNqPDGNm46FLyAejme6adkrdnyxizsjufVTBmLNATmj1UB",
  "key21": "3PMhx8ijBZtjd4kdLvGrFTiB2azPxg8w8XSJ6RWMGHQ2weSNZ8Z8va67T6o3KYMMDYnKkNj82E1rdhFE9Pk4Pjb8",
  "key22": "4GVifHwA8begnhvcCtKKSe7mEEVBv2QRSENWkQMKRqZxNL53PUht1PD3mxspDa7vHfwtf6thWuCk7QqJNknXFzAV",
  "key23": "4hLFYYBm8RCtfejKSc6aydiusc9tATvuQCSYni4FVAw1GkNPHhBuXw9KAaHg5dsBkTxSBLg3sfyrjLeAmYGiZ3B1",
  "key24": "4i3dnPHvUJyRz9Aq19QTUh2A6Y4VsZ41PUpWAf1dz1gDoid7Dxqfuv7uHwzNA27bpGjAg8oDSDyyVZgLiG4u7AgZ",
  "key25": "2bRRMwTkzMxmm6SCQBrreTVPydunTk4PFMazTfqmN1jaZcGNSVCtLghDkRZu8yQ5SE9c2WdUEV8NQGMhNipe1qPr",
  "key26": "5VZ8Y2TBDdbKKa6CwTb2be3w6njx4CqZbDd1gBgPioPfRQJGja7oL9ry4WwsCHWPekyeHDBUksfjHcyLV3DsttfK",
  "key27": "3tHoCHrnzQMyyUoRznXtaykEdXrQUmEkTJmVPdNde9UxpWWAmjkJXEp51UdVh2k2u5vvhYrvK6xt4jcbmq6gg2Ex",
  "key28": "55KyQbCvgRQPQP2ws7izF4H3XLJKCxWsvBgbidiHzkKEGKhE6L2ETgeToNjz3yHTQYWCPBmmqWJiJQwcUZszQoMP",
  "key29": "kd21JWg6kHGKtPS29hpE9LbrD7GUz6RSJPoMVBh89APs1wgkEbdDc3U3wX5LgCnVsbQXLVHBQKzTGi8qZ6XcvgR",
  "key30": "4wXdkhBnXJwpFPRiNeNk9YLG2AmtnGHjD5cvSuL8Mwm1CAamtc8kDrMLazZsAPT93TYHomjYN9iQZ7aQvhbn6Qdq",
  "key31": "U5agdDDT48TNovJ9WaB5HJmEJmohmGBpktQDNRHDPJjWPQRXUiTE13nBCapBVAsehjsouPdPiF2QfaECTyAQbEd",
  "key32": "2xA6Pr9j48Ru3QkM3re6AyTJayPwQmBCXKT9Ge7Hvkx15xUiC1wYLqZm5MtG3un1cCMcf7EAHTBjRTqpsg6HSoCF",
  "key33": "2wZPWVwPdBMXfVYftgkrXLUYmas9XnbMNLzQ5J6o8gTZy867ZzXhdtbuCnuXB47owe5R3Wyy6fVsfMdTtedUbmcG",
  "key34": "37Wy7TaUCzYVV3SAptVfovGFiNBAU7NYshttgEstcwkw3nTqSBH9KhQG1ZgcgCXefjyZ4JH4D5f85cVrw4KYiPip",
  "key35": "3ZBaaJUKR1rKHw4w53S6qUokGXZSvgXALc4VX36addueEtU6eqnUwYZbQ41raRWareN54fpXVB6EVJQ3VUHKtvb4",
  "key36": "rKGLPnkwm8AHUQFdkSRfmtnHdUpmEj2Xc4rQrMQ1xZTd7yuQKDzyifajP6ZRbUU2DaEjSLY77XZXSNC6jfivR82",
  "key37": "i7zYf39PUTQZsrPStQFp2Az6tFc5o5WvApGj8yE6mZ6FG4cyKyVBjVdqThdjBuFJfRdy1Lbefy1nWhieC4PzZ7X",
  "key38": "3Fk5stfWP8S2CurdbL4DWQb7bBTmTc7dkQubBYk9jGeNsPgLS7Yp6VpZGgCbkpDaFXSoaXnUFJAGogNmPAPko4zs"
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
