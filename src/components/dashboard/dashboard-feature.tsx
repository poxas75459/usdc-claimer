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
    "NZMB5N6GQFSHDMg1KRXNvW2NTDndUTdyKr6zDHXmYxNiSvbdD66WHS9FGMYp14wB76EAJQXLxdJvqkmfkMEzrLm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eayUUCUaPZzTxyweKKop118n2Eu2Gfpyr5MPpmR8eTnhMqi5rR7yfL3T1J6XtNW3iXoJVJSeKC5sAQxYk1YapDs",
  "key1": "2VDbRcLfy8M5mvpEk41AyJmq4uHxkvLjgqjA4FphDiHbiDy94H7d9XETQg27XApbHpkvaKCbyrj5CCuCjsTvybjT",
  "key2": "4Wttc9uu8bfggXLuRwdkN5W7R4HZQkdAKm5AcL28Cg2b5AVLpWGQUNpogzksFYxEyJSvfx1xXDQtJDydGDdyFKHR",
  "key3": "69NqxCMb5mYqmLiU3UWQprYesGiPy9uLkoKaaScNhtWrk6UHpBKoVTx5HLGVfsLVFsQ9uTxaN8n6h18CJgPSQ5S",
  "key4": "4cy62zM8MCe7pFpvdWH3YTJ5j18KHUxVgLfHHfGbepJ6QiF7Ey1fsbT8kDSeCQervW22o1cuV9yHXUWahRrye9Yg",
  "key5": "yduVb8kpn1G3XFr6gxgkrmx8AqRGUmgBHrnkBzTeeQGPGSsRyaub64yQzyhf1dTbhjix9QyjsVtUBKR7phJ9z2r",
  "key6": "4t2DVE35txmqFYftLzuNK68iyEsgZ59761MGAzwxcZqoK92ecvjs3DFA9KQ6zaErwimQJLNwTm18tZ4vYQ8k67wM",
  "key7": "2KKAbpQAFX9DMEirzCBJfdGLkd83fBzwtvyspaM4FirqGXnx8cRnzANf8MB5yHHh9McbbKLjtFdhKhDTfy3godE1",
  "key8": "4t64tF9yWvPcA8gpw3ypB1zwuY5JbePQM6fyNGCUqnYX7ka5xrAti47F1BFTczP699smLrWdC5xWXwcazRQVpUa7",
  "key9": "kfvEeuzTz49aUC4ppxoMGvgVPhoU9YbrsW24DLhSoefh9ejMwv5TdugALtwrPa2rd9cy2ajuuaAzDKtzkrXMXzg",
  "key10": "2NGaB7N23Reqavxsg4EFrGQC5wJ84ysTD2QbUeG6e3EKCGKkKyecRLUMDk2qTGjJVAVmcTv8oPavUHZs4DRDC39N",
  "key11": "3F5CMJD4MAPkH44d4mL2zLCCp3sA7cVsT1UpW6a9DrvftDuzM62X1XtoPNYT88xV814ThVjvcGL1im3TUX1B4RG5",
  "key12": "AWj1xSujnTN7T13NTGHRGkWcxZS4YGnW6L6cg333WojwtaE5cvHySqek8WmJhg1bYrqzVRTtCWJaBTtSusW9MeQ",
  "key13": "2gzz3E6633qyR4GpM9vsecGc14nLqAAsvrmcWzreF3TXnZeRXrCiFbkiNN4iz5kEsbr49mPFTyxdjB3F6vWNCbnr",
  "key14": "35Wxw9at5Mmo45ZchQzhMj3JgPr2yRfQ8TM3R3hsVUcce69TVHbkhEcBw34GPnNkZyDE4KeFYzAaP7up1BnggoEV",
  "key15": "5nkr1rr1m4mDg4nnCQd6xJpUHQM9zAotSF6FJ4jRfojbUCPiFchruvdsqfw5PkjTpxRF7Ds2RPoFnjtHnFbx4HSH",
  "key16": "2FvTqu8yVJ7pfMeJYFiAHq6fhkw7SZ7y8KrmLTxaqnpnmy4ppRMd1Bg71XkjHPi57eDXZp8LtBgm12om6qpqyFv8",
  "key17": "5XjwXfCV9ksCHyk9BvdoJ2DhFJeMy67xNvs2dBrokw8cksUCfMJ7FsF19bF6UkSwLoT5D7U9bYRQ6ufEgTJeVuJ",
  "key18": "2Fxx8Lb4bfoXQQ1i6GYKZfFCvN11kaz4mVkMfYuAX2Xh8nWVZY84JHUSryQYAoqf5jXgU9NawrWk5xRvAK3ENSK1",
  "key19": "2DFoSCm2rFPoAGAQmH6agHe4mZunZNTjjHGsYkHKk3dyr9E7ghfM917kYDjWk3iQfK4MwAeiyjCypH6sbLQ9Jvov",
  "key20": "3ATXTEj2ij6sDVT1v3LnSavVqVymZ2LhQzNjANUkrHcRgA4s9Ciptd8dWkQo4ek9rzZTHqVrDKhKKkeZeApNt3YR",
  "key21": "4rxiZNye15BN1uCAQpBxZ4Qs6HuyusdEVPewqxt2akJDagM3ftArZDUfMpJavXmMTtHHHLZg3oH6zeZrSwZAUc47",
  "key22": "3ScaeXDB4vigKGnnh4xNv5eDf12jdantetBXZsxf4dXvYjNA96j66gNpGRz2vNJiZo9i4qt9gxhjbtjfgaRdhCcv",
  "key23": "47KUWGkMY3t1ybpdxCpSmVsfCTiC1eAv3n9iGDy6Bke9vNPDSwCh3RS6QteJzTF4aiBbmDCXQvABL7txw27PvbWC",
  "key24": "2Z6vfUP29SvJTRwyoADB63Vkj5fYaBTgEV61monJadjphnNqNyUj9KQCX3RdxK8q685gW5NihrnnptJ4MfwEXeq4",
  "key25": "3QwYfKDW9yCiifTFAXasEwcbEKCBSU6Rr9wUwFuD2h3gRjwN6BhGnPSXfF2vHqFVFS7FpTmuTD4h6WqvJMAHBUxa",
  "key26": "5W81351sqec5Naur4ztzQYSxevvacVcN2BUNUrHpYtaaNrnC9FZsciUwEpBgrQu3cGTFRmqXbUx9bJpoZTdfTSGf",
  "key27": "eRhxM21DrjSkgKvkYhLoqmynUaSLquGDLFdxPDT8NaveKtuVJ2djaZcRcfELLRwtPYZUL9mHXh9aiKe8dudHgQk",
  "key28": "444CVeG47a4W9jhoXiGNdn55RnMx2U1KL83J6PYkmbjqt1Kcu2dxFnqRQRKCjtDFDgZCqbYShxMAVDkEg2gkFqdw",
  "key29": "59wQY7z8j5XtG54ApPGjwTEUMLEmUkrg1bA8GFoBdWwwRgNQPa7B7EfEAregyif5jxeEZDTVQoUEnvA8Wrrx77n3",
  "key30": "2EssDj1E7yenJP2mGuoZpPkW9Ky6PWf2myS53TynBkB8jarTvJC3ecHzEupU2Sdp9HBsXTGQqxqahvMFUV3kFVQu",
  "key31": "3cW7Uzj1Ao8RKC5RkBrBMzoytxK1tasbLbuvXe7pnxyRj3hWEAA13ejx18fcEVKswtV8EZH5gJVz1fYWeLzamq3v",
  "key32": "5ZXYsJ63mQPHE2D6BZmcGmKk6514WvzoV4K6cb7gUWKYQ6wXphaEhE52XLFw4P28FsXZNgyzAf3xq92octtC1UYQ",
  "key33": "3WJhmjGSHj15biHxPJhZ69pvk3MWfj4W5qSq4pCTgzA2E9E4WhrTpsLojDsbeNXPcDiDtQtkzQMu8LLttvpicLrP",
  "key34": "5TipMHqpaH6ojqmo6HpT7DcVE5qh8FQcMKj3NdCTBWY3HfMeSRK5Yk1dTAf7zQ6yhAD1s3SwAZtMcnLxqhKCDg13",
  "key35": "3fv7AEjZnJyUvgrfEGUdN79yZwcayF2RjpkReriJEz78geyMoDzux3NifSwZWs1VEokJ8j55pAxYLK2wP5YuF8fJ",
  "key36": "2R5ns41ppPjG91qg2VDDQKLV8TjxxuhcDLy4JTwHNWAs1ib7Aw2bgPW6SchsxhTWjTvJyuHDa1cFWcdHwizxJbz4",
  "key37": "5vJrGnwvaT4hqjA3V85cDXoCnZYMcZYNfixhR3og3J9BLoWYdMkwjiaPqukM5MFRBdjvq2ZzFb4o1pDQpr9McbWR",
  "key38": "4cLeCTVBCRP9eBjUzwBBtyoFhVMkLEdKwFd5HRfuGyeHzpdY8PPb71WCEhE3zDMUSecDpU34eTEAmXySd2XCfdkQ",
  "key39": "NDXpmnBD5c7yZAXvBCEnpxEfQvFiWAcUBqUfG7SGsWLHdo9Fv4mpF4L45BoX7DhnFTi9cwTTqbS86Wt2fXg6z9B",
  "key40": "4vFkbD3VjoWiyJkAUsnrTPXrg95TYhQi7njebQvZideVnHMokjJVkx5uexRTRQRVA25MEWQL5TCMndVCPUYWim28"
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
